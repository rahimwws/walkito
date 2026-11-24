import Chair01Icon from '@hugeicons/core-free-icons/Chair01Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import InformationCircleIcon from '@hugeicons/core-free-icons/InformationCircleIcon';
import ManIcon from '@hugeicons/core-free-icons/ManIcon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import TaskDone01Icon from '@hugeicons/core-free-icons/TaskDone01Icon';
import WorkoutRunIcon from '@hugeicons/core-free-icons/WorkoutRunIcon';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import type { PlanKind } from '@/entities/profile';
import { doseSeconds, exerciseById, type NextSession } from '@/entities/program';
import { colors, fonts } from '@/shared/config';
import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { waitPhrase } from '@/shared/lib/wait';
import { FactChip } from '@/shared/ui/fact-chip';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { MoveCircle, moveColor } from '@/widgets/session-player';

import type { TodayWork } from '../model/today-work';
import { RoundAction } from './round-action';
import { TodayCard } from './today-card';

export type SessionCardProps = {
  work: TodayWork;
  kind: PlanKind;
  ranToday: boolean;
  next: NextSession | null;
  /** Today is in front: the next-session countdown ticks only then. */
  active: boolean;
  startLabel: string;
  /** Start raises the plans rather than starting: the round action is a lock. */
  locked: boolean;
  onStart: () => void;
  onWhy: () => void;
};

const MOVE = 60;
/** Big numbers stop growing at 1.7 times their size, so "5 min" never breaks. */
const BIG_MAX_SCALE = 1.7;

/**
 * Today's session as one BitePal card with no labels to read: the minutes as
 * the big number beside a stopwatch, the round play button with the ring of
 * moves done, each move as its picture on the colour of the part it works
 * with its minutes under it, and the facts as chips (where it is done, the
 * tests, around a run) beside "Why today".
 */
export function SessionCard({ work, kind, ranToday, next, active, startLabel, locked, onStart, onWhy }: SessionCardProps) {
  const t = useT();
  const large = useWindowDimensions().fontScale >= 1.35;
  const total = work.exerciseIds.length;
  const showMoves = !work.done && work.type !== 'rest' && work.type !== 'test';

  const big = work.done
    ? t('home.today.done')
    : work.type === 'rest'
      ? t('home.today.rest.title')
      : t('quick.minutes', { count: work.minutes });
  const art: FluentName = work.done ? 'check' : work.type === 'rest' ? 'rest' : work.type === 'test' ? 'test' : 'timer';
  const fact = work.done || work.type === 'rest' ? null : factOf(t, work, kind, ranToday);

  return (
    <TodayCard style={styles.card}>
      <View style={[styles.head, large && styles.headLarge]}>
        <View style={styles.headText}>
          <FluentIcon name={art} size={40} />
          <Text
            style={[styles.big, (work.done || work.type === 'rest') && styles.bigWord]}
            accessibilityRole="header"
            accessibilityLabel={
              work.done || work.type === 'rest' ? big : t('home.today.heroTitle', { count: work.minutes })
            }
            maxFontSizeMultiplier={BIG_MAX_SCALE}>
            {big}
          </Text>
        </View>
        <RoundAction
          icon={locked ? SquareLock02Icon : PlayIcon}
          label={startLabel}
          onPress={onStart}
          progress={total > 0 && !work.done ? work.ticked / total : work.done ? 1 : undefined}
        />
      </View>

      {showMoves && (
        <View style={styles.moves}>
          {work.exercises.map((exercise) => {
            const dose = doseLine(t, doseSeconds(exercise.dose));
            return (
              <View
                key={exercise.id}
                style={styles.move}
                accessible
                accessibilityLabel={exerciseById(exercise.id).title + ', ' + dose}>
                <MoveCircle exerciseId={exercise.id} size={MOVE} style={[styles.moveArt, { borderColor: moveColor(exercise.id) }]} />
                <Text style={styles.moveDose} numberOfLines={1} maxFontSizeMultiplier={1.4}>
                  {dose}
                </Text>
              </View>
            );
          })}
        </View>
      )}

      <View style={styles.chips}>
        {work.done && <NextChip next={next} active={active} />}
        {fact != null && <FactChip icon={fact.icon} label={fact.label} />}
        <FactChip icon={InformationCircleIcon} label={t('player.detail.whyTitle')} accessibilityLabel={t('home.why.title')} onPress={onWhy} />
      </View>
    </TodayCard>
  );
}

/** "1 min" or "45 s": what the player counts down for the move. */
function doseLine(t: Translate, seconds: number): string {
  const rounded = Math.max(1, Math.round(seconds));
  return rounded >= 60 ? t('quick.minutes', { count: Math.round(rounded / 60) }) : t('quick.seconds', { count: rounded });
}

/** Where the moves are done, where they sit around a run, or the tests. */
function factOf(t: Translate, work: TodayWork, kind: PlanKind, ranToday: boolean) {
  if (work.type === 'test') return { icon: TaskDone01Icon, label: t('home.today.testMeta', { count: work.tests }) };
  if (kind === 'runner') {
    const label = ranToday
      ? t('home.today.afterRun')
      : work.type === 'recovery'
        ? t('home.today.recovery')
        : t('home.today.beforeRun');
    return { icon: WorkoutRunIcon, label };
  }
  const label =
    work.where === 'chair'
      ? t('player.detail.chipSeated')
      : work.where === 'standing'
        ? t('player.detail.chipStanding')
        : t('player.detail.chipMixed');
  return { icon: work.where === 'standing' ? ManIcon : Chair01Icon, label };
}

/** When the next session opens: counted within a day, named beyond it. */
function NextChip({ next, active }: { next: NextSession | null; active: boolean }) {
  const t = useT();
  const language = useLanguage();
  const waiting = next != null && !next.open;
  const left = useCountdown(waiting ? next.at : null, active);
  if (next == null || !waiting || left == null || left <= 0) {
    return <Text style={styles.meta}>{t('home.allDoneBlurb')}</Text>;
  }
  const phrase = waitPhrase(t, language, next.at, left);
  return (
    <FactChip
      icon={Clock01Icon}
      label={phrase.kind === 'in' ? t('nextSession.in', { time: phrase.time }) : t('nextSession.on', { day: phrase.day })}
    />
  );
}

const styles = StyleSheet.create({
  card: { gap: 16 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headLarge: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  headText: { flexShrink: 1, flexGrow: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  big: { ...fonts.heavy(44, -1), color: colors.text, fontVariant: ['tabular-nums'], flexShrink: 1 },
  bigWord: fonts.heavy(30, -0.6),
  meta: { ...fonts.medium(17), color: colors.text2 },
  moves: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  move: { alignItems: 'center', gap: 6, minWidth: MOVE },
  moveArt: { borderWidth: 2.5 },
  moveDose: { ...fonts.semibold(17), color: colors.text2, fontVariant: ['tabular-nums'] },
  chips: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 8 },
});
