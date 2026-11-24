import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import Timer01Icon from '@hugeicons/core-free-icons/Timer01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { TEST_LOOK, type SessionMinutes } from '@/entities/program';
import {
  CHROME_MAX_FONT_SCALE,
  bitepal,
  colors,
  fonts,
  parts,
  target,
  type BodyPart,
} from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { Mascot, handsUpRig, sleepingRig } from '@/shared/ui/mascot';
import { MetaChip } from '@/shared/ui/meta-chip';
import { PartIcon } from '@/shared/ui/part-icon';
import { BigNumber, Capsule, MoveCircle, Ring, TITLE_SCALE, cardStyle } from '@/widgets/session-player';

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
  /** A hold or a timed move: its chip is a timer rather than a repeat. */
  timed: boolean;
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
  /** How long that short version runs, for its chip beside Start. */
  shortMinutes: number;
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
  /** Looking around without buying, past Day 1 (a test from the start):
   * Start carries a lock, and still answers with the plans. */
  locked?: boolean;
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
 * Today on the plan, as BitePal's home card (#98, #99): the minutes as the big
 * number with the ring of moves done, the minutes to choose, the moves with
 * their pictures on the colour of the part they work and their dose as a chip,
 * and Start as the screen's one black button with the short version as a bolt
 * chip beside it. The week strip above already says which day it is, so the
 * card carries no "Today" label.
 *
 * A test day shows the three tests on their parts' colours; a rest day the
 * mascot asleep (BitePal's character in its empty state) and the wait; a
 * finished day "Done" with what it earned and the mascot's hands up.
 */
export function TodayPlanCard(props: TodayPlanCardProps) {
  const { variant, title, minutes, choice, onChoice, moves, onStart, onShort, shortMinutes, note, testBody, restRoutine, nextAt } =
    props;
  const { earned, onResults, onPreview, active, locked = false } = props;
  const t = useT();
  const { fontScale } = useWindowDimensions();
  const large = fontScale >= 1.35;
  const huge = fontScale >= 2;
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

      {variant !== 'rest' && variant !== 'test' && (
        <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={TITLE_SCALE}>
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
              style={({ pressed }) => [styles.move, huge && styles.moveHuge, pressed && styles.pressed]}>
              <MoveCircle exerciseId={move.id} size={MOVE} />
              <View style={styles.moveText}>
                <Text style={styles.moveName} maxFontSizeMultiplier={TITLE_SCALE}>
                  {move.title}
                </Text>
                <MetaChip icon={move.timed ? Timer01Icon : RepeatIcon} label={move.dose} />
              </View>
              <View style={[styles.tick, move.done && styles.tickDone, huge && styles.tickHuge]}>
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
              art="timer"
              value={t('quick.minutes', { count: earned.minutes })}
              a11y={t('pages.plan.earnedMinutesA11y', {
                count: earned.minutes,
              })}
            />
            <Stat
              art={earned.test ? 'test' : 'strength'}
              value={
                earned.test
                  ? t('pages.program.testCount', { count: earned.count })
                  : t('quick.moves', { count: earned.count })
              }
              a11y={
                earned.test
                  ? t('pages.plan.earnedTestsA11y', { count: earned.count })
                  : t('pages.plan.earnedMovesA11y', { count: earned.count })
              }
            />
            {earned.streak > 1 && (
              <Stat
                art="fire"
                value={t('streak.dayCount', { count: earned.streak })}
                a11y={t('home.daysInARow', { count: earned.streak })}
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
        <View style={[styles.actions, large && styles.actionsLarge]}>
          <Capsule
            label={t('pages.plan.start')}
            icon={locked ? SquareLock02Icon : undefined}
            accessibilityLabel={locked ? `${t('pages.plan.start')}, ${t('quick.locked')}` : undefined}
            onPress={onStart}
            style={!large && styles.startGrow}
          />
          {working && onShort != null && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('pages.plan.notUpForIt')}
              onPress={() => {
                void Haptics.selectionAsync();
                onShort();
              }}
              style={({ pressed }) => [styles.short, pressed && styles.pressed]}>
              <HugeiconsIcon icon={FlashIcon} size={20} color={colors.text} strokeWidth={2} />
              <Text style={styles.shortText} maxFontSizeMultiplier={TITLE_SCALE}>
                {t('session.minutes', { count: shortMinutes })}
              </Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

/** One figure of what the day earned: its drawing over the counted figure, "5 min", "2 moves", "6 days". */
function Stat({ art, value, a11y }: { art: FluentName; value: string; a11y: string }) {
  return (
    <View style={styles.stat} accessible accessibilityLabel={a11y}>
      <View style={styles.statIcon}>
        <FluentIcon name={art} size={24} />
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
  moveHuge: { flexDirection: 'column', alignItems: 'flex-start', gap: 6 },
  moveText: { flexGrow: 1, flexShrink: 1, gap: 4 },
  moveName: { ...fonts.semibold(19), color: colors.text },
  tick: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: bitepal.track,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickHuge: { position: 'absolute', top: 11, right: 0 },
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
  stat: { flex: 1, gap: 8 },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    ...fonts.heavy(22, -0.4),
    color: colors.text,
    fontVariant: ['tabular-nums'],
  },
  actions: { flexDirection: 'row', alignItems: 'stretch', gap: 10, marginTop: 6 },
  actionsLarge: { flexDirection: 'column' },
  startGrow: { flex: 1 },
  short: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    minHeight: target.primary,
    paddingHorizontal: 18,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  shortText: {
    ...fonts.semibold(17),
    color: colors.text,
  },
  pressed: { opacity: 0.55 },
});
