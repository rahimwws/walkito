import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import BulbIcon from '@hugeicons/core-free-icons/BulbIcon';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import Flag02Icon from '@hugeicons/core-free-icons/Flag02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useMemo, type ReactNode } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import { GOAL_SPECS, ZONE_META, fromDateKey, retestResults, type TestDayOutcome } from '@/entities/program';
import { accents, fonts, meterColors, palette, type Accent } from '@/shared/config';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { goalValuesOf, legsOf, resultRows, type ResultRow } from '../../model/test-day';
import {
  CARD_ORDER,
  daysBetween,
  signed,
  trackAt,
  trackScale,
  verdictOf,
  type CardGoal,
  type Verdict,
} from './results-math';
import { GOAL_ZONE } from './test-meta';

/** Arms up: the same "nothing hurts, all good" pose Home's check-in uses. */
const MASCOT = require('@assets/home/mascot-nopain.png');
const MASCOT_SIZE = 96;

const NAME_KEY = {
  arch_hold: 'testday.results.name.arch_hold',
  calf_raises: 'testday.results.name.calf_raises',
  balance: 'testday.results.name.balance',
} as const satisfies Record<CardGoal, string>;

const EXPLAIN_KEY = {
  arch_hold: 'testday.results.explain.arch_hold',
  calf_raises: 'testday.results.explain.calf_raises',
  balance: 'testday.results.explain.balance',
} as const satisfies Record<CardGoal, string>;

const VERDICT_UP_KEY = {
  arch_hold: 'testday.results.verdictUp.arch_hold',
  calf_raises: 'testday.results.verdictUp.calf_raises',
  balance: 'testday.results.verdictUp.balance',
} as const satisfies Record<CardGoal, string>;

/**
 * What they came for, said back to them under the numbers.
 *
 * The one moment the numbers mean most is the moment to connect them to the
 * reason the person started, in their words from onboarding. A reminder of
 * the goal, never a verdict on whether they are on track for it.
 */
const GOAL_LINE = {
  painfree: 'widgets.retestGoal.painfree',
  race: 'widgets.retestGoal.race',
  consistent: 'widgets.retestGoal.consistent',
  stronger: 'widgets.retestGoal.stronger',
  injuryfree: 'widgets.retestGoal.injuryfree',
  flatfeet: 'widgets.retestGoal.flatfeet',
  ankles: 'widgets.retestGoal.ankles',
  jump: 'widgets.retestGoal.jump',
  allday: 'widgets.retestGoal.allday',
  comeback: 'widgets.retestGoal.comeback',
  steady: 'widgets.retestGoal.steady',
} as const;

function goalLineKey(goal: string | null | undefined): (typeof GOAL_LINE)[keyof typeof GOAL_LINE] | null {
  return goal != null && Object.hasOwn(GOAL_LINE, goal) ? GOAL_LINE[goal as keyof typeof GOAL_LINE] : null;
}

// ── Motion ──────────────────────────────────────────────────────────────────
// Played once, on arrival. Nothing here repeats: the flow can stay mounted
// off screen while its host slides it away.

const RISE_MS = 460;
const BAR_MS = 820;
const HEADER_DELAY = 40;
const FIRST_CARD_DELAY = 180;
const CARD_STAGGER = 110;
/** A card's bars start growing this long after the card starts rising. */
const BAR_LAG = 220;

const TRACK = 12;
const LEG_BAR = 6;
const DOT = 14;

const EASE_OUT = Easing.out(Easing.cubic);

function useProgress(to: number, delay: number, duration: number): SharedValue<number> {
  const value = useSharedValue(0);
  useEffect(() => {
    value.value = withDelay(
      delay,
      withTiming(to, { duration, easing: EASE_OUT, reduceMotion: ReduceMotion.System }),
      ReduceMotion.System,
    );
  }, [to, delay, duration, value]);
  return value;
}

/** Fades in and rises a few points. By hand rather than an `entering`
 * builder, as the flow's own `FadeIn` is: a builder that fails to run would
 * leave the result invisible. */
function Rise({ delay, children, style }: { delay: number; children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const p = useProgress(1, delay, RISE_MS);
  const animated = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ translateY: (1 - p.value) * 18 }],
  }));
  return <Animated.View style={[style, animated]}>{children}</Animated.View>;
}

// ── The screen ──────────────────────────────────────────────────────────────

export type TestDayResultsProps = {
  outcome: TestDayOutcome;
  side: 'left' | 'right' | 'both' | null;
  onDone: () => void;
};

/**
 * What the test found, and what it means.
 *
 * A headline that says what went up (and never what went down), then one card
 * per test. Each card answers, in the order a person looks: what it was today,
 * whether it moved, where that sits between last time and the goal — drawn on
 * one track rather than said in three lines — and then, in a sentence, what
 * the test shows and why a higher number matters on your feet.
 *
 * The figure is ink at every value and every bar keeps its test's accent at
 * every length. Only a change for the better is coloured, because that is the
 * one thing colour is allowed to say in this app; a dip is a grey chip.
 *
 * Read from the stored results rather than from what was just typed, so the
 * same screen serves "See results" on a later day (Home's test task and the
 * plan's today card both open the flow with `review`).
 */
export function TestDayResults({ outcome, side, onDone }: TestDayResultsProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const language = useLanguage();
  const t = useT();
  const goalLine = goalLineKey(useIntake()?.goal);

  const read = useMemo(() => {
    const results = retestResults();
    const last = results[results.length - 1];
    if (last == null) return null;
    const previous = results[results.length - 2] ?? null;
    const latest = goalValuesOf(last);
    const before = previous == null ? null : goalValuesOf(previous);
    return {
      rows: resultRows(latest, before, outcome.reached, GOAL_SPECS),
      before,
      legs: legsOf(last, side),
      date: last.date,
      previousDate: previous?.date ?? null,
    };
    // `outcome` changes identity when a new test is saved, which is when the
    // stored results have moved.
  }, [outcome, side]);

  const day = (key: string) =>
    new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long' }).format(fromDateKey(key));
  // "Monday, 13 October" in the language the app is in, from `Intl`.
  const nextTest = new Intl.DateTimeFormat(language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(fromDateKey(outcome.nextTestOn));

  const verdict: Verdict = read == null ? { kind: 'first' } : verdictOf(read.rows);
  const first = verdict.kind === 'first';
  const dateLine =
    read == null
      ? null
      : read.previousDate == null
        ? t('testday.results.dateFirst', { date: day(read.date) })
        : t('testday.results.dateVs', { date: day(read.date), count: daysBetween(read.previousDate, read.date) });

  const symmetry = read?.rows.find((row) => row.type === 'symmetry') ?? null;
  const cardsEnd = FIRST_CARD_DELAY + CARD_ORDER.length * CARD_STAGGER;

  return (
    <View style={styles.root}>
      <ReplayMask style={styles.root}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Header verdict={verdictText(t, verdict)} dateLine={dateLine} />

          {read != null &&
            CARD_ORDER.map((type, index) => {
              const row = read.rows.find((candidate) => candidate.type === type);
              if (row == null) return null;
              const delay = FIRST_CARD_DELAY + index * CARD_STAGGER;
              return (
                <Rise key={type} delay={delay}>
                  <ResultCard
                    row={row as ResultRow & { type: CardGoal }}
                    previous={read.before?.[type] ?? null}
                    legs={type === 'calf_raises' ? read.legs : null}
                    gap={type === 'calf_raises' ? symmetry : null}
                    barDelay={delay + BAR_LAG}
                  />
                </Rise>
              );
            })}

          <Rise delay={cardsEnd} style={styles.after}>
            {goalLine != null && (
              <View style={[styles.why, { backgroundColor: meter.iconTile }]}>
                <Text style={[styles.whyEyebrow, { color: meter.label }]}>{t('widgets.retestYourGoal')}</Text>
                <Text style={[styles.whyText, { color: colors.foreground }]}>{t(goalLine)}</Text>
              </View>
            )}

            <View style={[styles.next, { backgroundColor: colors.card }]}>
              <View style={[styles.tile, { backgroundColor: meter.iconTile }]}>
                <HugeiconsIcon icon={Calendar03Icon} size={20} color={colors.foreground} strokeWidth={2} />
              </View>
              <View style={styles.nextCopy}>
                <Text style={[styles.nextTitle, { color: colors.foreground }]}>
                  {t('testday.results.nextTest', { date: nextTest })}
                </Text>
                <Text style={[styles.nextBody, { color: meter.caption }]}>{t('testday.results.planUpdated')}</Text>
              </View>
            </View>

            <Text style={[styles.footnote, { color: meter.caption }]}>
              {first ? t('testday.results.firstBlurb') : t('testday.results.blurb')}
            </Text>
          </Rise>
        </ScrollView>
      </ReplayMask>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <PrimaryButton label={t('testday.results.done')} onPress={onDone} />
      </View>
    </View>
  );
}

function verdictText(t: Translate, verdict: Verdict): string {
  switch (verdict.kind) {
    case 'first':
      return t('testday.results.verdictFirst');
    case 'steady':
      return t('testday.results.verdictSteady');
    case 'one':
      return t(VERDICT_UP_KEY[verdict.type]);
    case 'two':
      return t('testday.results.verdictUpTwo');
    case 'all':
      return t('testday.results.verdictUpAll');
  }
}

/** The mascot, arms up, and the one line that says what happened. */
function Header({ verdict, dateLine }: { verdict: string; dateLine: string | null }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const pop = useProgress(1, HEADER_DELAY, RISE_MS);
  const mascotStyle = useAnimatedStyle(() => ({
    opacity: pop.value,
    transform: [{ scale: 0.82 + pop.value * 0.18 }, { translateY: (1 - pop.value) * 10 }],
  }));

  return (
    <View style={styles.header}>
      <Animated.View style={mascotStyle}>
        <Image
          source={MASCOT}
          style={styles.mascot}
          resizeMode="contain"
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
      </Animated.View>
      <Rise delay={HEADER_DELAY + 60} style={styles.headerCopy}>
        <Text style={[styles.eyebrow, { color: meter.label }]}>{t('testday.results.title')}</Text>
        <Text style={[styles.verdict, { color: colors.foreground }]} accessibilityRole="header">
          {verdict}
        </Text>
        {dateLine != null && <Text style={[styles.dateLine, { color: meter.caption }]}>{dateLine}</Text>}
      </Rise>
    </View>
  );
}

// ── One test ────────────────────────────────────────────────────────────────

type CardProps = {
  row: ResultRow & { type: CardGoal };
  /** Last test's figure, as the goal reads it. Null on a first test. */
  previous: number | null;
  /** Calf raises only: each leg by its real name. */
  legs: { left: number; right: number } | null;
  /** Calf raises only: the gap the two legs leave, as its own row. */
  gap: ResultRow | null;
  barDelay: number;
};

function ResultCard({ row, previous, legs, gap, barDelay }: CardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const zone = ZONE_META[GOAL_ZONE[row.type]];
  const tone = accents[scheme][zone.accent];

  const scale = trackScale(Math.max(row.value, legs?.left ?? 0, legs?.right ?? 0), previous, row.target);
  const seconds = row.type !== 'calf_raises';

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.head}>
        <View style={[styles.tile, { backgroundColor: tone.track }]}>
          <HugeiconsIcon icon={zone.icon} size={20} color={tone.fill} strokeWidth={2} />
        </View>
        <Text style={[styles.name, { color: colors.foreground }]} numberOfLines={1}>
          {t(NAME_KEY[row.type])}
        </Text>
        <DeltaChip row={row} />
      </View>

      <View style={styles.figureRow}>
        <Text style={[styles.figure, { color: meter.ink }]}>{row.value}</Text>
        <Text style={[styles.unit, { color: meter.unit }]}>
          {seconds
            ? t('testday.results.unitSeconds', { count: row.value })
            : t('testday.results.unitRaises', { count: row.value })}
        </Text>
      </View>

      <ComparisonTrack
        tone={tone}
        today={trackAt(row.value, scale)}
        last={previous == null ? null : trackAt(previous, scale)}
        goal={trackAt(row.target, scale)}
        reached={row.reached}
        goalLabel={
          seconds
            ? t('testday.results.goalSeconds', { n: row.target })
            : t('testday.results.goalRaises', { count: row.target })
        }
        lastLabel={
          previous == null
            ? null
            : seconds
              ? t('testday.results.lastSeconds', { n: previous })
              : t('testday.results.lastRaises', { n: previous })
        }
        delay={barDelay}
      />

      {legs != null && <LegBars legs={legs} scale={scale} tone={tone} gap={gap} delay={barDelay + 120} />}

      <View
        style={[styles.explain, { backgroundColor: meter.iconTile }]}
        accessible
        accessibilityLabel={`${t('testday.results.explainA11y')}. ${t(EXPLAIN_KEY[row.type])}`}>
        <HugeiconsIcon icon={BulbIcon} size={18} color={tone.fill} strokeWidth={2} />
        <Text style={[styles.explainText, { color: colors.foreground }]}>{t(EXPLAIN_KEY[row.type])}</Text>
      </View>
    </View>
  );
}

/** Beside the name: the change since last time, in short. Green only when it
 * went up; level and down are the same quiet grey. */
function DeltaChip({ row }: { row: ResultRow & { type: CardGoal } }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const up = row.change != null && row.change > 0;
  let label: string;
  if (row.change == null) label = t('testday.results.chipBaseline');
  else if (row.change === 0) label = t('testday.results.chipSame');
  else if (row.type === 'calf_raises')
    label = t('testday.results.chipRaises', { delta: signed(row.change), count: Math.abs(row.change) });
  else label = t('testday.results.chipSeconds', { delta: signed(row.change) });

  return (
    <View
      style={[styles.chip, { backgroundColor: up ? meter.positiveBg : meter.iconTile }]}
      accessible
      accessibilityLabel={changeSentence(t, row)}>
      {up && <HugeiconsIcon icon={ArrowUpRight01Icon} size={13} color={meter.positive} strokeWidth={2.4} />}
      <Text style={[styles.chipText, { color: up ? meter.positive : row.change == null ? colors.foreground : meter.label }]}>
        {label}
      </Text>
    </View>
  );
}

/** The chip, said in full for VoiceOver. */
function changeSentence(t: Translate, row: ResultRow): string {
  if (row.change == null) return t('testday.results.first');
  if (row.change === 0) return t('testday.results.same');
  const count = Math.abs(row.change);
  const better = row.change > 0;
  switch (row.type) {
    case 'calf_raises':
      return better ? t('testday.results.moreRaises', { count }) : t('testday.results.fewerRaises', { count });
    case 'symmetry':
      return better ? t('testday.results.gapSmaller', { count }) : t('testday.results.gapLarger', { count });
    default:
      return better ? t('testday.results.moreSeconds', { count }) : t('testday.results.fewerSeconds', { count });
  }
}

type TrackProps = {
  tone: Accent;
  /** Places on the track, 0–1. */
  today: number;
  last: number | null;
  goal: number;
  reached: boolean;
  goalLabel: string;
  lastLabel: string | null;
  delay: number;
};

/**
 * Last time, today and the goal on one line: a hollow dot where the last test
 * left it, the accent bar out to today, and a flag at the goal. "Did it move"
 * and "how far is left" read off the same picture, without a chart.
 */
function ComparisonTrack({ tone, today, last, goal, reached, goalLabel, lastLabel, delay }: TrackProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const grow = useProgress(today, delay, BAR_MS);
  const fillStyle = useAnimatedStyle(() => ({ width: `${grow.value * 100}%` as `${number}%` }));
  const marks = useProgress(1, delay + BAR_MS * 0.5, RISE_MS);
  const marksStyle = useAnimatedStyle(() => ({ opacity: marks.value }));

  return (
    <View style={styles.trackBlock}>
      <View style={styles.labelLine}>
        <View style={[styles.anchor, anchorAt(goal)]}>
          <HugeiconsIcon
            icon={reached ? CheckmarkCircle02Icon : Flag02Icon}
            size={13}
            color={reached ? tone.fill : meter.label}
            strokeWidth={2.2}
          />
          <Text style={[styles.trackLabel, { color: reached ? colors.foreground : meter.label }]} numberOfLines={1}>
            {goalLabel}
          </Text>
        </View>
      </View>

      <View style={styles.trackArea}>
        <View style={[styles.track, { backgroundColor: meter.track }]}>
          <Animated.View style={[styles.trackFill, { backgroundColor: tone.fill }, fillStyle]} />
        </View>
        <Animated.View style={[StyleSheet.absoluteFill, marksStyle]} pointerEvents="none">
          <View style={[styles.goalTick, { left: `${goal * 100}%`, backgroundColor: meter.ink }]} />
          {last != null && (
            <View
              style={[
                styles.lastDot,
                { left: `${last * 100}%`, borderColor: meter.ink, backgroundColor: colors.card },
              ]}
            />
          )}
        </Animated.View>
      </View>

      {last != null && lastLabel != null && (
        <View style={styles.labelLine}>
          <Animated.View style={[styles.anchor, anchorAt(last), marksStyle]}>
            <View style={[styles.legendDot, { borderColor: meter.label }]} />
            <Text style={[styles.trackLabel, { color: meter.label }]} numberOfLines={1}>
              {lastLabel}
            </Text>
          </Animated.View>
        </View>
      )}
    </View>
  );
}

/** A label pinned to a place on the track: grows rightward from it in the
 * left half, leftward in the right half, so it never runs off the card. */
function anchorAt(at: number) {
  return at <= 0.5 ? { left: `${at * 100}%` as const, marginLeft: -6 } : { right: `${(1 - at) * 100}%` as const, marginRight: -6 };
}

/** The calf card's two legs, on the card's own scale, and the gap they leave. */
function LegBars({
  legs,
  scale,
  tone,
  gap,
  delay,
}: {
  legs: { left: number; right: number };
  scale: number;
  tone: Accent;
  gap: ResultRow | null;
  delay: number;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const gapUp = gap?.change != null && gap.change > 0;

  return (
    <View style={styles.legs}>
      <LegBar label={t('testday.results.legLeft')} value={legs.left} at={trackAt(legs.left, scale)} tone={tone} delay={delay} />
      <LegBar
        label={t('testday.results.legRight')}
        value={legs.right}
        at={trackAt(legs.right, scale)}
        tone={tone}
        delay={delay + 80}
      />
      <Text style={[styles.legNote, { color: meter.caption }]}>{t('testday.results.weakerLeg')}</Text>
      {gap != null && (
        <View style={styles.gapRow}>
          <Text style={[styles.gapText, { color: meter.label }]}>
            {t('testday.results.gapBetween', { n: gap.value })}
          </Text>
          <Text style={[styles.gapText, { color: meter.label }]}>{t('testday.results.goalGap', { n: gap.target })}</Text>
        </View>
      )}
      {gap?.change != null && gap.change !== 0 && (
        <Text style={[styles.gapText, { color: gapUp ? meter.positive : meter.caption }]}>{changeSentence(t, gap)}</Text>
      )}
    </View>
  );
}

function LegBar({ label, value, at, tone, delay }: { label: string; value: number; at: number; tone: Accent; delay: number }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const grow = useProgress(at, delay, BAR_MS);
  const fillStyle = useAnimatedStyle(() => ({ width: `${grow.value * 100}%` as `${number}%` }));

  return (
    <View style={styles.legRow}>
      <Text style={[styles.legLabel, { color: meter.label }]} numberOfLines={1}>
        {label}
      </Text>
      <View style={[styles.legTrack, { backgroundColor: meter.track }]}>
        <Animated.View style={[styles.legFill, { backgroundColor: tone.fill }, fillStyle]} />
      </View>
      <Text style={[styles.legValue, { color: colors.foreground }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 24,
    gap: 12,
  },

  header: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  mascot: {
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
  },
  headerCopy: {
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
    paddingHorizontal: 8,
  },
  eyebrow: fonts.semibold(14),
  verdict: {
    ...fonts.heavy(26, -0.6),
    lineHeight: 31,
    textAlign: 'center',
  },
  dateLine: {
    ...fonts.medium(15),
    lineHeight: 20,
    textAlign: 'center',
  },

  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 4,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tile: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    ...fonts.bold(17, -0.2),
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    flexShrink: 0,
    maxWidth: '50%',
  },
  chipText: {
    ...fonts.bold(13),
    fontVariant: ['tabular-nums'],
  },
  figureRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginTop: 10,
  },
  figure: {
    ...fonts.heavy(44, -1.2),
    lineHeight: 50,
    fontVariant: ['tabular-nums'],
  },
  unit: {
    flexShrink: 1,
    ...fonts.semibold(17),
  },

  trackBlock: {
    marginTop: 6,
    gap: 6,
  },
  labelLine: {
    height: 18,
  },
  anchor: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trackLabel: {
    ...fonts.semibold(13),
    fontVariant: ['tabular-nums'],
  },
  trackArea: {
    height: 22,
    justifyContent: 'center',
  },
  track: {
    height: TRACK,
    borderRadius: TRACK / 2,
    overflow: 'hidden',
  },
  trackFill: {
    height: TRACK,
    borderRadius: TRACK / 2,
  },
  goalTick: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 2,
    marginLeft: -1,
    borderRadius: 1,
  },
  lastDot: {
    position: 'absolute',
    top: (22 - DOT) / 2,
    width: DOT,
    height: DOT,
    marginLeft: -DOT / 2,
    borderRadius: DOT / 2,
    borderWidth: 2.5,
  },
  legendDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    borderWidth: 2,
  },

  legs: {
    marginTop: 10,
    gap: 6,
  },
  legRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  legLabel: {
    width: 64,
    ...fonts.semibold(13),
  },
  legTrack: {
    flex: 1,
    height: LEG_BAR,
    borderRadius: LEG_BAR / 2,
    overflow: 'hidden',
  },
  legFill: {
    height: LEG_BAR,
    borderRadius: LEG_BAR / 2,
  },
  legValue: {
    minWidth: 26,
    textAlign: 'right',
    ...fonts.bold(15),
    fontVariant: ['tabular-nums'],
  },
  legNote: {
    ...fonts.medium(13),
    lineHeight: 18,
    marginTop: 2,
  },
  gapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    columnGap: 12,
  },
  gapText: {
    ...fonts.semibold(13),
    lineHeight: 18,
    fontVariant: ['tabular-nums'],
  },

  explain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    borderRadius: 16,
    borderCurve: 'continuous',
    padding: 12,
    marginTop: 12,
  },
  explainText: {
    flex: 1,
    ...fonts.regular(15),
    lineHeight: 21,
    opacity: 0.78,
  },

  after: {
    gap: 12,
  },
  why: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 6,
  },
  whyEyebrow: fonts.bold(12, 0.4),
  whyText: {
    ...fonts.semibold(16),
    lineHeight: 22,
  },
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
  },
  nextCopy: {
    flex: 1,
    gap: 2,
  },
  nextTitle: fonts.bold(16),
  nextBody: {
    ...fonts.medium(14),
    lineHeight: 19,
  },
  footnote: {
    ...fonts.medium(13),
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  dock: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
});
