import ChartLineData02Icon from '@hugeicons/core-free-icons/ChartLineData02Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { ExerciseCategory, SessionMinutes } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { artFor } from '../config/kind-art';
import type { TodayVariant } from '../model/plan-view';
import { CATEGORY_TONE, KIND_STICKER, TINT_TODAY, tint } from './kind-tone';
import { PlanChip } from '@/shared/ui/plan-chip';
import { RestButton, WaitCaption } from './rest-button';

export const MINUTE_CHOICES: readonly SessionMinutes[] = [3, 5, 10];

export type TodayCardProps = {
  variant: TodayVariant;
  /** The day's type, for its colour and its mascot. */
  kind: 'strength' | 'mobility' | 'balance' | 'recovery' | 'test' | 'rest';
  title: string;
  /** The adjusted session's exercises — what will actually run. */
  moves: readonly { id: string; title: string; dose: string | null; category: ExerciseCategory }[];
  minutes: SessionMinutes;
  onMinutes: (minutes: SessionMinutes) => void;
  onStart: () => void;
  onPreview: (exerciseId: string) => void;
  /** Test day: the three tests, and what they are for. */
  tests?: { chips: readonly string[]; body: string };
  /** Done: "Tomorrow: balance, 5 min.", or "Next session: Monday, strength." */
  tomorrow?: string;
  /** Rest: the Library routine the chip opens. */
  restRoutine?: { label: string; onPress: () => void };
  /**
   * When the next session opens, epoch ms — for the done and rest cards'
   * countdown. Null when three weeks hold nothing but rest.
   */
  nextAt?: number | null;
  /** Done on a test day: the results again, read-only. */
  onResults?: () => void;
};

/**
 * Today, the one big card on the plan screen.
 *
 * The expanded day card's surface and colour, holding only what today needs:
 * what the session is, as glass chips that open a preview; how long, as three
 * more chips; and the button. A flare day swaps in seated work and hides the
 * minutes (it is three, fixed); a test day shows the tests instead; a rest day
 * has no button, only the wait; a done day says so, names the next session and
 * counts down to it on the button that will start it.
 *
 * The mascot sits faintly at the right edge, which is what gives the glass
 * something to refract — glass over a flat colour is just a lighter chip.
 */
export function TodayCard(props: TodayCardProps) {
  const { variant, kind, title, moves, minutes, onMinutes, onStart, onPreview, tests, tomorrow, restRoutine, nextAt, onResults } = props;
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const rest = variant === 'rest';
  const tone = kind === 'test' ? accents[scheme].amber : kind === 'rest' ? null : accents[scheme][KIND_STICKER[kind].accent];
  const art = kind === 'test' || kind === 'rest' ? null : artFor(kind);

  return (
    <View
      style={[
        styles.card,
        tone == null || rest
          ? { backgroundColor: colors.card }
          : { backgroundColor: tint(tone.fill, TINT_TODAY), borderColor: tone.fill, borderWidth: 1.5 },
      ]}>
      {art != null && !rest && (
        <Image source={art} resizeMode="contain" accessible={false} style={styles.art} />
      )}

      <Text style={[styles.eyebrow, { color: rest ? meter.caption : colors.foreground }]}>{t('pages.plan.todayEyebrow')}</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>

      {variant === 'done' && (
        <View style={styles.doneRow}>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={22} color={colors.foreground} strokeWidth={2} />
          <Text style={[styles.body, { color: colors.foreground }]}>{t('pages.plan.done')}</Text>
        </View>
      )}
      {variant === 'done' && tomorrow != null && <Text style={[styles.body, { color: meter.caption }]}>{tomorrow}</Text>}
      {/* A finished test day keeps a way back to its numbers. The results are
          the reason the four minutes were worth it, and the moment somebody
          wants them again is not the moment they were first shown. */}
      {variant === 'done' && onResults != null && (
        <View style={styles.chips}>
          <PlanChip label={t('pages.plan.seeResults')} icon={ChartLineData02Icon} tone={accents[scheme].amber} onPress={onResults} />
        </View>
      )}
      {/* The button stays where it was, counting down to the next session and
          turning into Start when it opens: the thumb that comes back tomorrow
          finds it in the same place. The only countdown on the screen. */}
      {variant === 'done' && nextAt != null && <RestButton unlockAt={nextAt} onStart={onStart} style={styles.flush} />}

      {rest && (
        <>
          <Text style={[styles.body, { color: meter.caption }]}>{t('pages.plan.rest')}</Text>
          {nextAt != null && <WaitCaption at={nextAt} style={[styles.body, { color: colors.foreground }]} />}
          {restRoutine != null && (
            <View style={styles.chips}>
              <PlanChip label={restRoutine.label} tone={accents[scheme].teal} icon={CATEGORY_TONE.Mobility.icon} onPress={restRoutine.onPress} />
            </View>
          )}
        </>
      )}

      {variant === 'test' && tests != null && (
        <>
          <Text style={[styles.body, { color: colors.foreground }]}>{tests.body}</Text>
          <View style={styles.chips}>
            {tests.chips.map((chip) => (
              <PlanChip key={chip} label={chip} icon={Target01Icon} tone={accents[scheme].amber} />
            ))}
          </View>
        </>
      )}

      {(variant === 'session' || variant === 'easy') && (
        <>
          <View style={styles.chips}>
            {moves.map((move) => {
              const category = CATEGORY_TONE[move.category];
              return (
                <PlanChip
                  key={move.id}
                  label={move.dose == null ? move.title : t('pages.program.moveWithDose', { title: move.title, dose: move.dose })}
                  icon={category.icon}
                  tone={accents[scheme][category.accent]}
                  accessibilityLabel={t('pages.plan.chipPreviewA11y', { name: move.title })}
                  onPress={() => onPreview(move.id)}
                />
              );
            })}
          </View>
          {variant === 'session' && (
            <View style={styles.chips} accessibilityRole="radiogroup">
              {MINUTE_CHOICES.map((m) => (
                <PlanChip
                  key={m}
                  label={t('session.minutes', { count: m })}
                  icon={Clock01Icon}
                  selected={m === minutes}
                  tone={tone ?? { fill: colors.foreground, track: meter.track }}
                  accessibilityRole="radio"
                  onPress={() => onMinutes(m)}
                />
              ))}
            </View>
          )}
        </>
      )}

      {(variant === 'session' || variant === 'easy' || variant === 'test') && (
        <PrimaryButton label={t('pages.plan.start')} onPress={onStart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 12,
    overflow: 'hidden',
  },
  /** Faint, from the right edge: depth for the glass to catch. */
  art: {
    position: 'absolute',
    right: -34,
    top: 10,
    width: 170,
    height: 170,
    opacity: 0.2,
  },
  eyebrow: {
    ...fonts.bold(12, 0.6),
    opacity: 0.8,
  },
  title: {
    ...fonts.heavy(24, -0.6),
    marginTop: -6,
  },
  body: {
    ...fonts.medium(16),
    lineHeight: 22,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  doneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  /** The card's own gap spaces the button; the button's default margin would
   * double it. */
  flush: {},
});
