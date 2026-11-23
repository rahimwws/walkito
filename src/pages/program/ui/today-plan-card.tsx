import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { TEST_LOOK, type SessionMinutes } from '@/entities/program';
import {
  CHROME_MAX_FONT_SCALE,
  bitepal,
  bodyColors,
  colors,
  fonts,
  parts,
  target,
  type BodyPart,
} from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, handsUpRig, sleepingRig } from '@/shared/ui/mascot';
import { PartIcon } from '@/shared/ui/part-icon';
import { BigNumber, Capsule, CardLabel, MoveCircle, Ring, cardStyle } from '@/widgets/session-player';

import type { TodayVariant } from '../model/plan-view';
import { WaitCaption } from './wait-caption';

export const MINUTE_CHOICES: readonly SessionMinutes[] = [3, 5, 10];

/** Big numbers stop growing here, so "10 min" never breaks. */
const BIG_SCALE = 1.7;
const RING = 76;
const MOVE = 52;

export type TodayMove = {
  id: string;
  title: string;
  dose: string;
  done: boolean;
};

/** What a finished day earned: its minutes, its moves or tests, the run of days. Never a pain figure. */
export type TodayEarned = {
  minutes: number;
  count: number;
  test: boolean;
  streak: number;
};

export type TodayPlanCardProps = {
  variant: TodayVariant;
  /** "Strength · mornings", "Test day", "Rest day". */
  title: string;
  /** The minutes the session runs at, once chosen. */
  minutes: number;
  /** The choice of 3, 5 or 10, on a planned session only. */
  choice: SessionMinutes;
  onChoice: (minutes: SessionMinutes) => void;
  moves: readonly TodayMove[];
  onStart: () => void;
  /** "Not up for it?": the 2-minute version instead. */
  onShort?: () => void;
  /** Why today differs from the plan: a big day yesterday, a short night. */
  note?: string | null;
  /** A test day: what the three tests are for. */
  testBody: string;
  /** A rest day: the routine its button opens. */
  restRoutine: { label: string; onPress: () => void };
  /** When the next session opens, epoch ms, for a rest day and a finished one. */
  nextAt: number | null;
  earned: TodayEarned | null;
  /** A finished test day: its results again, read-only. */
  onResults?: () => void;
  onPreview: (exerciseId: string) => void;
  /** The plan is in front: the mascot moves only then. */
  active: boolean;
};

/** The three tests and the part each one reads. */
const TESTS: readonly {
  part: BodyPart;
  key: 'pages.program.zoneCalf' | 'pages.program.zoneArch' | 'pages.program.zoneBalance';
}[] = [
  { part: 'calf', key: 'pages.program.zoneCalf' },
  { part: 'arch', key: 'pages.program.zoneArch' },
  { part: 'ankle', key: 'pages.program.zoneBalance' },
];

/**
 * Today on the plan, as BitePal's home card (#98, #99): the grey label, the
 * minutes as the big number with the ring of moves done, the minutes to
 * choose, the moves with their pictures on the colour of the part they work,
 * and Start as the screen's one black button.
 *
 * A test day shows the three tests on their parts' colours; a rest day the
 * mascot asleep (BitePal's character in its empty state) and the wait; a
 * finished day "Done" with what it earned and the mascot's hands up.
 */
export function TodayPlanCard(props: TodayPlanCardProps) {
  const { variant, title, minutes, choice, onChoice, moves, onStart, onShort, note, testBody, restRoutine, nextAt } =
    props;
  const { earned, onResults, onPreview, active } = props;
  const t = useT();
  const large = useWindowDimensions().fontScale >= 1.35;
  const working = variant === 'session' || variant === 'easy';
  const ticked = moves.filter((m) => m.done).length;

  const big =
    variant === 'done'
      ? t('pages.plan.path.done')
      : variant === 'rest'
        ? t('pages.week.rest')
        : variant === 'test'
          ? t('pages.plan.testTitle')
          : t('quick.minutes', { count: minutes });

  return (
    <View style={styles.card}>
      <View style={[styles.head, large && styles.headLarge]}>
        <View style={styles.headText}>
          <CardLabel>{t('pages.plan.todayEyebrow')}</CardLabel>
          <BigNumber value={big} size={working ? 44 : 34} maxScale={BIG_SCALE} />
        </View>
        {working && moves.length > 0 && (
          <View
            accessible
            accessibilityLabel={t('pages.plan.movesDoneA11y', {
              done: ticked,
              total: moves.length,
            })}>
            <Ring size={RING} stroke={7} value={ticked / moves.length} color={bitepal.selected}>
              <Text style={styles.ringText} maxFontSizeMultiplier={1.2}>
                {t('pages.plan.movesProgress', {
                  done: ticked,
                  total: moves.length,
                })}
              </Text>
            </Ring>
          </View>
        )}
        {variant === 'test' && (
          <View style={styles.well} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <FluentIcon name={TEST_LOOK.art} size={40} />
          </View>
        )}
        {variant === 'rest' && <Mascot rig={sleepingRig} size={RING + 12} paused={!active} />}
        {variant === 'done' && <Mascot rig={handsUpRig} size={RING + 12} paused={!active} />}
      </View>

      {variant !== 'rest' && (
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
      )}
      {working && note != null && <Text style={styles.caption}>{note}</Text>}

      {variant === 'session' && <MinuteChoice minutes={choice} onMinutes={onChoice} />}

      {working && moves.length > 0 && (
        <View style={styles.moves}>
          {moves.map((move) => (
            <Pressable
              key={move.id}
              accessibilityRole="button"
              accessibilityLabel={
                move.done
                  ? t('pages.plan.moveDoneA11y', { name: move.title })
                  : t('pages.plan.chipPreviewA11y', { name: move.title })
              }
              onPress={() => onPreview(move.id)}
              style={({ pressed }) => [styles.move, pressed && styles.pressed]}>
              <MoveCircle exerciseId={move.id} size={MOVE} />
              <View style={styles.moveText}>
                <Text style={styles.moveName}>{move.title}</Text>
                <Text style={styles.moveDose}>{move.dose}</Text>
              </View>
              <View style={[styles.tick, move.done && styles.tickDone]}>
                {move.done && <HugeiconsIcon icon={Tick02Icon} size={18} color={bitepal.onPrimary} strokeWidth={2.6} />}
              </View>
            </Pressable>
          ))}
        </View>
      )}

      {variant === 'test' && (
        <>
          <Text style={styles.body}>{testBody}</Text>
          <View style={styles.chips}>
            {TESTS.map((test) => (
              <View key={test.part} style={[styles.testChip, { backgroundColor: parts[test.part].soft }]}>
                <PartIcon part={test.part} size={30} disc={false} />
                <Text style={styles.testChipText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                  {t(test.key)}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}

      {variant === 'rest' && (
        <>
          <Text style={styles.body}>{t('pages.plan.rest')}</Text>
          {nextAt != null && <WaitCaption at={nextAt} style={styles.caption} />}
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              void Haptics.selectionAsync();
              restRoutine.onPress();
            }}
            style={({ pressed }) => [styles.pill, pressed && styles.pressed]}>
            <FluentIcon name="stretch" size={22} />
            <Text style={styles.pillText}>{restRoutine.label}</Text>
          </Pressable>
        </>
      )}

      {variant === 'done' && earned != null && (
        <>
          <View style={[styles.stats, large && styles.statsLarge]}>
            <Stat
              label={t('pages.plan.earnedMinutes')}
              value={earned.minutes}
              a11y={t('pages.plan.earnedMinutesA11y', {
                count: earned.minutes,
              })}
              color={bodyColors.heel}
            />
            <Stat
              label={earned.test ? t('pages.plan.earnedTests') : t('pages.plan.earnedMoves')}
              value={earned.count}
              a11y={
                earned.test
                  ? t('pages.plan.earnedTestsA11y', { count: earned.count })
                  : t('pages.plan.earnedMovesA11y', { count: earned.count })
              }
              color={bodyColors.arch}
            />
            {earned.streak > 1 && (
              <Stat
                label={t('pages.plan.earnedStreak')}
                value={earned.streak}
                a11y={`${t('pages.plan.earnedStreak')}: ${earned.streak}`}
                color={bodyColors.calf}
              />
            )}
          </View>
          {nextAt != null && <WaitCaption at={nextAt} style={styles.caption} />}
          {onResults != null && (
            <Pressable
              accessibilityRole="button"
              onPress={onResults}
              style={({ pressed }) => [styles.pill, pressed && styles.pressed]}>
              <Text style={styles.pillText}>{t('pages.plan.seeResults')}</Text>
            </Pressable>
          )}
        </>
      )}

      {(working || variant === 'test') && (
        <Capsule label={t('pages.plan.start')} onPress={onStart} style={styles.start} />
      )}
      {working && onShort != null && (
        <Pressable
          accessibilityRole="button"
          onPress={onShort}
          style={({ pressed }) => [styles.short, pressed && styles.pressed]}>
          <Text style={styles.shortText}>{t('pages.plan.notUpForIt')}</Text>
        </Pressable>
      )}
    </View>
  );
}

/** One figure of what the day earned, as BitePal's carbs/fats/proteins (#98): a part's colour beside the grey label, the heavy number under it. */
function Stat({ label, value, a11y, color }: { label: string; value: number; a11y: string; color: string }) {
  return (
    <View style={styles.stat} accessible accessibilityLabel={a11y}>
      <View style={styles.statHead}>
        <View style={[styles.statDot, { backgroundColor: color }]} />
        <Text style={styles.statLabel}>{label}</Text>
      </View>
      <Text style={styles.statValue} maxFontSizeMultiplier={BIG_SCALE}>
        {value}
      </Text>
    </View>
  );
}

/** How long, as three capsules: a radio group to a screen reader, the chosen one violet. */
function MinuteChoice({
  minutes,
  onMinutes,
}: {
  minutes: SessionMinutes;
  onMinutes: (minutes: SessionMinutes) => void;
}) {
  const t = useT();
  return (
    <View style={styles.choices} accessibilityRole="radiogroup">
      {MINUTE_CHOICES.map((m) => {
        const on = m === minutes;
        const label = t('session.minutes', { count: m });
        return (
          <Pressable
            key={m}
            onPress={() => {
              void Haptics.selectionAsync();
              onMinutes(m);
            }}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            accessibilityLabel={label}
            style={({ pressed }) => [styles.choice, on && styles.choiceOn, pressed && styles.pressed]}>
            <Text
              style={[styles.choiceText, on && styles.choiceTextOn]}
              numberOfLines={1}
              maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { ...cardStyle, padding: 20, gap: 12 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  headLarge: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  headText: { flexGrow: 1, flexShrink: 1, gap: 2 },
  ringText: {
    ...fonts.heavy(19),
    color: colors.text,
    fontVariant: ['tabular-nums'],
  },
  well: {
    width: RING,
    height: RING,
    borderRadius: RING / 2,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { ...fonts.bold(20, -0.3), color: colors.text },
  caption: { ...fonts.medium(17), color: colors.text2 },
  body: { ...fonts.regular(19), color: colors.text },
  choices: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  choice: {
    minHeight: target.min,
    paddingHorizontal: 18,
    borderRadius: 999,
    justifyContent: 'center',
    backgroundColor: bitepal.well,
  },
  choiceOn: { backgroundColor: bitepal.selectedSoft },
  choiceText: { ...fonts.semibold(17), color: colors.text },
  choiceTextOn: { color: bitepal.selected },
  moves: { gap: 10, marginTop: 4 },
  move: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: target.min + 8,
  },
  moveText: { flex: 1, gap: 1 },
  moveName: { ...fonts.semibold(19), color: colors.text },
  moveDose: { ...fonts.medium(17), color: colors.text3 },
  tick: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: bitepal.track,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickDone: {
    backgroundColor: bitepal.selected,
    borderColor: bitepal.selected,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  testChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    minHeight: 40,
    paddingLeft: 6,
    paddingRight: 14,
    borderRadius: 999,
  },
  testChipText: { ...fonts.semibold(17), color: colors.text },
  pill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minHeight: target.min,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  pillText: { ...fonts.semibold(17), color: colors.text, flexShrink: 1 },
  stats: { flexDirection: 'row', gap: 16 },
  statsLarge: { flexDirection: 'column', gap: 12 },
  stat: { flex: 1, gap: 6 },
  statLabel: { ...fonts.medium(17), color: colors.text3 },
  statHead: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statDot: { width: 10, height: 10, borderRadius: 5 },
  statValue: {
    ...fonts.heavy(28, -0.6),
    color: colors.text,
    fontVariant: ['tabular-nums'],
  },
  start: { marginTop: 6 },
  short: {
    minHeight: target.min,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortText: {
    ...fonts.semibold(17),
    color: colors.text2,
    textAlign: 'center',
  },
  pressed: { opacity: 0.55 },
});
