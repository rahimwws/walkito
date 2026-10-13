import { useMemo } from 'react';
import type { SharedValue } from 'react-native-reanimated';

import { mirroredFor } from '@/widgets/session-player';
import { DEFAULT_SETTINGS, doseFor, doseLabel, exerciseById } from '@/entities/program';
import { protocolById } from '@/entities/protocols';
import { useT } from '@/shared/lib/i18n';

import { firstWeekDeck } from '../model/first-week-deck';
import { planSettingsFrom } from '../model/intake';
import { painAreasFor } from '../model/pain-areas';
import { primaryPain } from '../model/reflection';
import type { DeckCard } from './move-card';
import { WeekDeck } from './week-deck';

type Answers = Readonly<Record<string, unknown>>;

export type FirstWeekStepProps = {
  /** The flow's answers so far. Read here, never from `useIntake()`: the
   * intake is saved only when the flow ends, so on this screen it is empty or
   * somebody else's, and a left foot would see the right foot's clip. */
  answers: Answers;
  /** The page's button squash: it dips once when the last card is reached. */
  squash: SharedValue<number>;
  /** The full-screen clip opened or closed, for anything the page pauses. */
  onViewerChange?: (open: boolean) => void;
};

/**
 * The first week, before anybody pays: the moves in it, playing, one tall
 * card each, with the coach pointing at them and saying why.
 *
 * The product shown rather than described. This wrapper only turns answers
 * into cards; the deck is `WeekDeck`.
 */
export function FirstWeekStep({ answers, squash, onViewerChange }: FirstWeekStepProps) {
  const t = useT();

  const settings = planSettingsFrom(answers, null);
  const cards = useMemo<DeckCard[]>(() => {
    const area = primaryPain(painAreasFor(answers.pain));
    return firstWeekDeck(area, planSettingsFrom(answers, null).toeWork === true).map((move) => {
      const exercise = exerciseById(move.id);
      const copy = { rationale: t(exercise.rationaleKey), cue: t(exercise.cueKey) };
      if (move.when === 'morning') {
        return {
          id: move.id,
          when: move.when,
          whenLabel: t('onboarding.week.everyMorning'),
          // The routine's name and length, not the stretch's: what is done
          // every morning is the two-minute routine this stretch makes up.
          title: t('quick.morning.title'),
          dose: t('exercises.dose.holdMinutes', { minutes: protocolById('morning').minutes }),
          ...copy,
        };
      }
      // The plan's own week-one dose, not a stand-in. `buildWeek` doses every
      // move at its catalogue level (`planned`), and week one never climbs a
      // chain; the seated start only narrows which moves, and the lighter
      // start (`progressionOffset`) is the block programme's, which the weekly
      // plan does not read. Only picking other minutes on the day rescales the
      // sets, and that has not happened yet.
      const dose = doseFor(move.id);
      return {
        id: move.id,
        when: move.when,
        whenLabel: t('onboarding.week.sessionDays'),
        title: t(exercise.titleKey),
        dose: doseLabel(dose.sets, dose.reps, dose.holdSec, dose.perSide),
        ...copy,
      };
    });
  }, [answers, t]);

  return (
    <WeekDeck
      cards={cards}
      daysPerWeek={settings.daysPerWeek ?? DEFAULT_SETTINGS.daysPerWeek}
      minutes={settings.defaultMinutes ?? DEFAULT_SETTINGS.defaultMinutes}
      mirrored={mirroredFor(sideOf(answers))}
      squash={squash}
      onViewerChange={onViewerChange}
    />
  );
}

/** The side answered on the side question, as the clip rule reads it. */
function sideOf(answers: Answers): 'left' | 'right' | 'both' | null {
  const value = Array.isArray(answers.side) ? answers.side[0] : answers.side;
  return value === 'left' || value === 'right' || value === 'both' ? value : null;
}
