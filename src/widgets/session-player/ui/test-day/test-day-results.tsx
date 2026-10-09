import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import BulbIcon from '@hugeicons/core-free-icons/BulbIcon';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import Share03Icon from '@hugeicons/core-free-icons/Share03Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Canvas, Circle as SkiaCircle, RadialGradient, makeImageFromView, vec } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  LinearTransition,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import { GOAL_SPECS, ZONE_META, fromDateKey, retestResults, type TestDayOutcome } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { ReplayMask } from '@/shared/ui/replay-mask';
import { settle } from '@/shared/lib/motion';

import { TEST_PICTURES } from '../../config/test-pictures';
import { goalValuesOf, legsOf, resultRows, type ResultRow, type TestKind } from '../../model/test-day';
import { CARD_ORDER, daysBetween, signed, verdictOf, type CardGoal, type Verdict } from './results-math';
import { GOAL_ZONE } from './test-meta';
import { TestHistoryBars, TestRing } from './test-visuals';

/** Arms up: the same "nothing hurts, all good" pose Home's check-in uses. */
const MASCOT = require('@assets/home/mascot-nopain.png');

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

const VERDICT_GOAL_KEY = {
  arch_hold: 'testday.results.verdictGoal.arch_hold',
  calf_raises: 'testday.results.verdictGoal.calf_raises',
  balance: 'testday.results.verdictGoal.balance',
} as const satisfies Record<CardGoal, string>;

/** Which test's picture a result is drawn with. */
const PICTURE_OF = {
  calf_raises: 'calf',
  arch_hold: 'arch',
  balance: 'balance',
} as const satisfies Record<CardGoal, TestKind>;

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
const COUNT_MS = 750;
const HERO_DELAY = 60;
const FIRST_ROW_DELAY = 380;
const ROW_STAGGER = 120;

const EASE_OUT = Easing.out(Easing.cubic);


function useProgress(from: number, to: number, delay: number, duration: number): SharedValue<number> {
  const value = useSharedValue(from);
  useEffect(() => {
    value.value = from;
    value.value = withDelay(
      delay,
      withTiming(to, { duration, easing: EASE_OUT, reduceMotion: ReduceMotion.System }),
      ReduceMotion.System,
    );
  }, [from, to, delay, duration, value]);
  return value;
}

/** Fades in and rises a few points. By hand rather than an `entering`
 * builder, as the flow's own `FadeIn` is: a builder that fails to run would
 * leave the result invisible. */
function Rise({ delay, children, style }: { delay: number; children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const p = useProgress(0, 1, delay, RISE_MS);
  const animated = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ translateY: (1 - p.value) * 18 }],
  }));
  return <Animated.View style={[style, animated]}>{children}</Animated.View>;
}

/**
 * A figure counting from last time's to today's, so a gain is seen happening
 * rather than read. Settles on the figure at once with Reduce Motion, or when
 * there is nothing to count.
 */
function useCountUp(from: number, to: number, delay: number): number {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(reduceMotion ? to : from);
  useEffect(() => {
    if (reduceMotion || from === to) {
      setShown(to);
      return;
    }
    setShown(from);
    let frame = 0;
    const start = Date.now() + delay;
    const tick = () => {
      const t = Math.min(1, Math.max(0, (Date.now() - start) / COUNT_MS));
      setShown(Math.round(from + (to - from) * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [from, to, delay, reduceMotion]);
  return shown;
}

// ── The screen ──────────────────────────────────────────────────────────────

export type TestDayResultsProps = {
  outcome: TestDayOutcome;
  side: 'left' | 'right' | 'both' | null;
  onDone: () => void;
};

type Hero =
  | { kind: 'goal'; type: CardGoal }
  | { kind: 'up'; type: CardGoal; verdict: Verdict }
  | { kind: 'first' }
  | { kind: 'steady' };

/**
 * What the test found, as a moment and then a scoreboard.
 *
 * First the one thing worth feeling: a goal reached, or the test that grew
 * most, drawn as its own picture with the gain popping in over it; on a first
 * test or a level one, the mascot. Then all three tests on one screen, each a
 * row: its picture inside a ring that fills from last time's share of the goal
 * to today's, the figure counting up, the change in short. A row opens to
 * every test so far, the legs, and what the test shows. The next test closes
 * it, and the result can go to the share sheet as a card.
 *
 * The figure is ink at every value and every ring keeps its test's accent at
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
  const [open, setOpen] = useState<CardGoal | null>(null);
  const [sharing, setSharing] = useState(false);

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
      // Oldest first, the last six: enough to see a direction, few enough to
      // read each bar's figure.
      history: results.slice(-6).map((result) => ({ date: result.date, values: goalValuesOf(result) })),
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
  const hero = heroOf(read?.rows ?? [], verdict, outcome.reached);
  const dateLine =
    read == null
      ? null
      : read.previousDate == null
        ? t('testday.results.dateFirst', { date: day(read.date) })
        : t('testday.results.dateVs', { date: day(read.date), count: daysBetween(read.previousDate, read.date) });

  const symmetry = read?.rows.find((row) => row.type === 'symmetry') ?? null;
  const cards =
    read == null
      ? []
      : CARD_ORDER.map((type) => read.rows.find((row) => row.type === type)).filter(
          (row): row is ResultRow & { type: CardGoal } => row != null,
        );
  const afterRows = FIRST_ROW_DELAY + cards.length * ROW_STAGGER;

  const toggle = (type: CardGoal) => {
    Haptics.selectionAsync();
    setOpen((current) => {
      if (current === type) return null;
      track('test_results_detail', { test: type });
      return type;
    });
  };

  return (
    <View style={styles.root}>
      <ReplayMask style={styles.root}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <HeroBlock hero={hero} rows={cards} dateLine={dateLine} />

          <View style={styles.rows}>
            {cards.map((row, index) => (
              <Rise key={row.type} delay={FIRST_ROW_DELAY + index * ROW_STAGGER}>
                <ScoreRow
                  row={row}
                  previous={read?.before?.[row.type] ?? null}
                  history={read?.history ?? []}
                  legs={row.type === 'calf_raises' ? (read?.legs ?? null) : null}
                  gap={row.type === 'calf_raises' ? symmetry : null}
                  delay={FIRST_ROW_DELAY + index * ROW_STAGGER + 160}
                  open={open === row.type}
                  onToggle={() => toggle(row.type)}
                />
              </Rise>
            ))}
          </View>

          <Rise delay={afterRows} style={styles.after}>
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

            {goalLine != null && (
              <View style={[styles.why, { backgroundColor: meter.iconTile }]}>
                <Text style={[styles.whyEyebrow, { color: meter.label }]}>{t('widgets.retestYourGoal')}</Text>
                <Text style={[styles.whyText, { color: colors.foreground }]}>{t(goalLine)}</Text>
              </View>
            )}
          </Rise>
        </ScrollView>
      </ReplayMask>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {cards.length > 0 && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('testday.results.share')}
            onPress={() => {
              Haptics.selectionAsync();
              setSharing(true);
            }}
            style={({ pressed }) => [styles.shareButton, { backgroundColor: colors.card }, pressed && styles.pressed]}>
            <HugeiconsIcon icon={Share03Icon} size={22} color={colors.foreground} strokeWidth={2} />
          </Pressable>
        )}
        <View style={styles.flex}>
          <PrimaryButton label={t('testday.results.done')} onPress={onDone} />
        </View>
      </View>

      {sharing && read != null && (
        <ShareOverlay rows={cards} date={day(read.date)} onClose={() => setSharing(false)} />
      )}
    </View>
  );
}

/** The moment at the top: a goal reached first, then the test that grew most
 * against its own goal, then a first test or a level one. */
function heroOf(rows: readonly ResultRow[], verdict: Verdict, reached: readonly string[]): Hero {
  const reachedCard = CARD_ORDER.find((type) => reached.includes(type) && rows.some((row) => row.type === type));
  if (reachedCard != null) return { kind: 'goal', type: reachedCard };
  if (verdict.kind === 'first') return { kind: 'first' };
  if (verdict.kind === 'steady') return { kind: 'steady' };
  let best: CardGoal | null = null;
  let bestShare = 0;
  for (const type of CARD_ORDER) {
    const row = rows.find((candidate) => candidate.type === type);
    if (row?.change == null || row.change <= 0) continue;
    const share = row.change / Math.max(1, row.target);
    if (share > bestShare) {
      bestShare = share;
      best = type;
    }
  }
  return best == null ? { kind: 'steady' } : { kind: 'up', type: best, verdict };
}

function heroTitle(t: Translate, hero: Hero): string {
  switch (hero.kind) {
    case 'goal':
      return t(VERDICT_GOAL_KEY[hero.type]);
    case 'first':
      return t('testday.results.verdictFirst');
    case 'steady':
      return t('testday.results.verdictSteady');
    case 'up':
      if (hero.verdict.kind === 'two') return t('testday.results.verdictUpTwo');
      if (hero.verdict.kind === 'all') return t('testday.results.verdictUpAll');
      return t(VERDICT_UP_KEY[hero.type]);
  }
}

function heroEyebrow(t: Translate, hero: Hero): string {
  switch (hero.kind) {
    case 'goal':
      return t('testday.results.reached');
    case 'up':
      return t('testday.results.heroEyebrowUp');
    case 'first':
      return t('testday.results.heroEyebrowFirst');
    case 'steady':
      return t('testday.results.heroEyebrowSteady');
  }
}

/**
 * The moment. With something to celebrate it is the test's own picture on a
 * glow in its accent, the gain popping in over it and a burst around it, with
 * a success tap; otherwise the mascot, arms up, on a quiet glow.
 */
function HeroBlock({
  hero,
  rows,
  dateLine,
}: {
  hero: Hero;
  rows: readonly (ResultRow & { type: CardGoal })[];
  dateLine: string | null;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const reduceMotion = useReducedMotion();

  const celebrate = hero.kind === 'goal' || hero.kind === 'up';
  const type = celebrate ? hero.type : null;
  const tone = type == null ? accents[scheme].violet : accents[scheme][ZONE_META[GOAL_ZONE[type]].accent];
  const row = type == null ? null : (rows.find((candidate) => candidate.type === type) ?? null);

  useEffect(() => {
    if (!celebrate) return;
    const timer = setTimeout(() => {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }, 420);
    return () => clearTimeout(timer);
  }, [celebrate]);

  const pop = useProgress(0, 1, HERO_DELAY, RISE_MS);
  const artStyle = useAnimatedStyle(() => ({
    opacity: pop.value,
    transform: [{ scale: 0.86 + pop.value * 0.14 }],
  }));
  const glow = useProgress(0, 1, HERO_DELAY, 900);
  const glowStyle = useAnimatedStyle(() => ({
    opacity: glow.value,
    transform: [{ scale: 0.6 + glow.value * 0.4 }],
  }));

  // The gain arrives last, with a spring, so it lands as the moment's point.
  const badge = useSharedValue(reduceMotion ? 1 : 0);
  useEffect(() => {
    if (reduceMotion) return;
    badge.value = withDelay(520, settle(1, 420));
  }, [badge, reduceMotion]);
  const badgeStyle = useAnimatedStyle(() => ({
    opacity: Math.min(1, badge.value * 1.4),
    transform: [{ scale: badge.value }],
  }));

  return (
    <View style={styles.hero}>
      <View style={styles.heroArt}>
        <Animated.View style={[styles.heroGlow, glowStyle]} pointerEvents="none">
          <Canvas style={styles.heroGlowCanvas}>
            <SkiaCircle cx={GLOW / 2} cy={GLOW / 2} r={GLOW / 2}>
              <RadialGradient
                c={vec(GLOW / 2, GLOW / 2)}
                r={GLOW / 2}
                colors={[withAlpha(tone.fill, celebrate ? 0.42 : 0.3), withAlpha(tone.fill, 0)]}
              />
            </SkiaCircle>
          </Canvas>
        </Animated.View>
        {celebrate && !reduceMotion && <Burst />}
        <Animated.View style={[styles.heroArtInner, artStyle]}>
          {type != null ? (
            <Image
              source={TEST_PICTURES[PICTURE_OF[type]].full}
              style={styles.heroPicture}
              resizeMode="contain"
              accessibilityIgnoresInvertColors
            />
          ) : (
            <Image
              source={MASCOT}
              style={styles.heroMascot}
              resizeMode="contain"
              accessibilityElementsHidden
              importantForAccessibility="no"
            />
          )}
        </Animated.View>
        {celebrate && row != null && (
          <Animated.View
            style={[
              styles.heroBadge,
              { backgroundColor: hero.kind === 'goal' ? tone.fill : meter.positive },
              badgeStyle,
            ]}>
            <HugeiconsIcon
              icon={hero.kind === 'goal' ? CheckmarkCircle02Icon : ArrowUpRight01Icon}
              size={16}
              color="#FFFFFF"
              strokeWidth={2.4}
            />
            <Text style={styles.heroBadgeText}>
              {hero.kind === 'goal' ? t('testday.results.reached') : chipLabel(t, row)}
            </Text>
          </Animated.View>
        )}
      </View>

      <Rise delay={HERO_DELAY + 120} style={styles.heroCopy}>
        <Text style={[styles.eyebrow, { color: celebrate ? tone.fill : meter.label }]}>{heroEyebrow(t, hero)}</Text>
        <Text style={[styles.verdict, { color: colors.foreground }]} accessibilityRole="header">
          {heroTitle(t, hero)}
        </Text>
        <Text style={[styles.dateLine, { color: meter.caption }]}>
          {hero.kind === 'first' ? t('testday.results.firstBlurb') : dateLine}
        </Text>
      </Rise>
    </View>
  );
}

/** The glow's diameter: wider than the picture, so it fades out past its edges. */
const GLOW = 300;

/** `#RRGGBB` at an opacity, for a gradient that fades a colour to nothing. */
function withAlpha(hex: string, alpha: number): string {
  const n = Number.parseInt(hex.slice(1, 7), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
}

const BURST_PIECES = 18;

/** Confetti, once: small pieces in the tests' accents thrown out from behind
 * the picture and fading as they slow. Skipped with Reduce Motion. */
function Burst() {
  const scheme = useColorScheme();
  const tones = [
    accents[scheme].violet.fill,
    accents[scheme].amber.fill,
    accents[scheme].blue.fill,
    accents[scheme].teal.fill,
    meterColors[scheme].positive,
  ];
  const pieces = useMemo(
    () =>
      Array.from({ length: BURST_PIECES }, (_, i) => {
        const angle = (i / BURST_PIECES) * Math.PI * 2 + ((i * 37) % 10) / 20;
        return {
          dx: Math.cos(angle) * (96 + ((i * 53) % 46)),
          dy: Math.sin(angle) * (78 + ((i * 29) % 40)),
          size: 6 + ((i * 7) % 5),
          round: i % 3 === 0,
          spin: ((i * 61) % 180) - 90,
          color: tones[i % tones.length],
        };
      }),
    // The tones follow the scheme; the throw is fixed per piece.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scheme],
  );
  const p = useProgress(0, 1, HERO_DELAY + 220, 1100);
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {pieces.map((piece, i) => (
        <BurstPiece key={i} piece={piece} p={p} />
      ))}
    </View>
  );
}

function BurstPiece({
  piece,
  p,
}: {
  piece: { dx: number; dy: number; size: number; round: boolean; spin: number; color: string };
  p: SharedValue<number>;
}) {
  const style = useAnimatedStyle(() => ({
    opacity: p.value === 0 ? 0 : 1 - p.value ** 2,
    transform: [
      { translateX: piece.dx * p.value },
      { translateY: piece.dy * p.value + 24 * p.value ** 2 },
      { rotate: `${piece.spin * p.value}deg` },
    ],
  }));
  return (
    <Animated.View
      style={[
        styles.piece,
        {
          width: piece.size,
          height: piece.round ? piece.size : piece.size * 0.5,
          borderRadius: piece.round ? piece.size / 2 : 1.5,
          backgroundColor: piece.color,
        },
        style,
      ]}
    />
  );
}

// ── One test ────────────────────────────────────────────────────────────────

type RowProps = {
  row: ResultRow & { type: CardGoal };
  /** Last test's figure, as the goal reads it. Null on a first test. */
  previous: number | null;
  history: readonly { date: string; values: Record<CardGoal, number> }[];
  /** Calf raises only: each leg by its real name. */
  legs: { left: number; right: number } | null;
  /** Calf raises only: the gap the two legs leave. */
  gap: ResultRow | null;
  delay: number;
  open: boolean;
  onToggle: () => void;
};

/**
 * One test on the scoreboard: its picture in a ring that fills from last
 * time's share of the goal to today's, what is left to the goal, the figure
 * counting up, and the change in short. Opens to the details.
 */
function ScoreRow({ row, previous, history, legs, gap, delay, open, onToggle }: RowProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const tone = accents[scheme][ZONE_META[GOAL_ZONE[row.type]].accent];
  const seconds = row.type !== 'calf_raises';

  const share = (value: number) => Math.max(0, Math.min(1, value / Math.max(1, row.target)));
  const figure = useCountUp(previous ?? 0, row.value, delay);
  const left = Math.max(0, row.target - row.value);

  const chevron = useProgress(open ? 0 : 1, open ? 1 : 0, 0, 220);
  const chevronStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${chevron.value * 180}deg` }] }));

  return (
    <Animated.View layout={LinearTransition.duration(260)} style={[styles.row, { backgroundColor: colors.card }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityHint={open ? t('testday.results.hideDetails') : t('testday.results.showDetails')}
        accessibilityLabel={`${t(NAME_KEY[row.type])}, ${row.value} ${
          seconds
            ? t('testday.results.unitSeconds', { count: row.value })
            : t('testday.results.unitRaises', { count: row.value })
        }. ${changeSentence(t, row)}`}
        onPress={onToggle}
        style={({ pressed }) => [styles.rowMain, pressed && styles.pressed]}>
        <TestRing
          kind={PICTURE_OF[row.type]}
          from={previous == null ? 0 : share(previous)}
          to={share(row.value)}
          delay={delay}
          tone={tone}
        />

        <View style={styles.rowCopy}>
          <Text style={[styles.name, { color: colors.foreground }]} numberOfLines={2}>
            {t(NAME_KEY[row.type])}
          </Text>
          {row.reached ? (
            <View style={styles.reachedLine}>
              <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} color={tone.fill} strokeWidth={2.4} />
              <Text style={[styles.toGo, { color: tone.fill }]}>{t('testday.results.reached')}</Text>
            </View>
          ) : (
            <Text style={[styles.toGo, { color: meter.caption }]} numberOfLines={1}>
              {seconds
                ? t('testday.results.toGoSeconds', { count: left })
                : t('testday.results.toGoRaises', { count: left })}
            </Text>
          )}
        </View>

        <View style={styles.rowFigure}>
          <View style={styles.figureLine}>
            <Text style={[styles.figure, { color: meter.ink }]}>{figure}</Text>
            {seconds && <Text style={[styles.unit, { color: meter.unit }]}>{t('testday.results.secondsShort')}</Text>}
          </View>
          <DeltaChip row={row} />
        </View>

        <Animated.View style={chevronStyle}>
          <HugeiconsIcon icon={ArrowDown01Icon} size={18} color={meter.label} strokeWidth={2.2} />
        </Animated.View>
      </Pressable>

      {open && (
        <Animated.View entering={FadeIn.duration(220)} exiting={FadeOut.duration(140)} style={styles.details}>
          <TestHistoryBars
            values={history.map((entry) => entry.values[row.type])}
            dates={history.map((entry) => entry.date)}
            target={row.target}
            tone={tone}
          />

          {legs != null && (
            <View style={[styles.legsLine, { backgroundColor: meter.iconTile }]}>
              <Text style={[styles.legsText, { color: colors.foreground }]}>
                {t('testday.results.legs', { left: legs.left, right: legs.right })}
              </Text>
              {gap != null && (
                <Text style={[styles.legsGap, { color: meter.caption }]}>
                  {t('testday.results.gapBetween', { n: gap.value })} · {t('testday.results.goalGap', { n: gap.target })}
                </Text>
              )}
            </View>
          )}

          <View
            style={styles.explain}
            accessible
            accessibilityLabel={`${t('testday.results.explainA11y')}. ${t(EXPLAIN_KEY[row.type])}`}>
            <HugeiconsIcon icon={BulbIcon} size={16} color={tone.fill} strokeWidth={2} />
            <Text style={[styles.explainText, { color: meter.caption }]}>{t(EXPLAIN_KEY[row.type])}</Text>
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}

function chipLabel(t: Translate, row: ResultRow): string {
  if (row.change == null) return t('testday.results.chipBaseline');
  if (row.change === 0) return t('testday.results.chipSame');
  if (row.type === 'calf_raises')
    return t('testday.results.chipRaises', { delta: signed(row.change), count: Math.abs(row.change) });
  return t('testday.results.chipSeconds', { delta: signed(row.change) });
}

/** Under the figure: the change since last time, in short. Green only when it
 * went up; level and down are the same quiet grey. */
function DeltaChip({ row }: { row: ResultRow & { type: CardGoal } }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const up = row.change != null && row.change > 0;
  return (
    <View style={[styles.chip, { backgroundColor: up ? meter.positiveBg : meter.iconTile }]}>
      {up && <HugeiconsIcon icon={ArrowUpRight01Icon} size={12} color={meter.positive} strokeWidth={2.4} />}
      <Text
        style={[styles.chipText, { color: up ? meter.positive : row.change == null ? colors.foreground : meter.label }]}
        numberOfLines={1}>
        {chipLabel(t, row)}
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

// ── Sharing ─────────────────────────────────────────────────────────────────

/** Always drawn dark: the card is a picture that leaves the app, and it reads
 * the same on anyone's feed whatever this phone's appearance is. */
const CARD_BG = '#141218';
const CARD_GLOW = 'rgba(124,92,255,0.45)';
const CARD_GLOW_SIZE = 360;

/**
 * The result as a card, shown first so the person sees what leaves the app,
 * then rendered to an image and handed to the share sheet. iOS shares the
 * picture; Android's share sheet takes text only from React Native, so there
 * it is the same three figures in a line.
 */
function ShareOverlay({
  rows,
  date,
  onClose,
}: {
  rows: readonly (ResultRow & { type: CardGoal })[];
  date: string;
  onClose: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const card = useRef<View>(null);
  const [busy, setBusy] = useState(false);
  const value = (type: CardGoal) => rows.find((row) => row.type === type)?.value ?? 0;

  const share = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const message = t('testday.results.shareMessage', {
        calf: value('calf_raises'),
        arch: value('arch_hold'),
        balance: value('balance'),
      });
      if (Platform.OS === 'ios') {
        const image = await makeImageFromView(card);
        const base64 = image?.encodeToBase64();
        await Share.share(base64 != null ? { url: `data:image/png;base64,${base64}` } : { message });
      } else {
        await Share.share({ message });
      }
      track('test_results_shared');
    } catch (error) {
      console.warn('[test-day] sharing failed:', error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(160)} style={styles.overlay}>
      <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel={t('testday.close')} />
      <View ref={card} collapsable={false} style={styles.card}>
        <View style={styles.cardGlow} pointerEvents="none">
          <Canvas style={styles.cardGlowCanvas}>
            <SkiaCircle cx={CARD_GLOW_SIZE / 2} cy={CARD_GLOW_SIZE / 2} r={CARD_GLOW_SIZE / 2}>
              <RadialGradient
                c={vec(CARD_GLOW_SIZE / 2, CARD_GLOW_SIZE / 2)}
                r={CARD_GLOW_SIZE / 2}
                colors={[CARD_GLOW, 'rgba(124,92,255,0)']}
              />
            </SkiaCircle>
          </Canvas>
        </View>
        <View style={styles.cardHead}>
          <Image source={MASCOT} style={styles.cardMascot} resizeMode="contain" />
          <View style={styles.flex}>
            <Text style={styles.cardBrand}>{t('testday.results.shareBrand')}</Text>
            <Text style={styles.cardDate}>{date}</Text>
          </View>
        </View>
        <Text style={styles.cardTitle}>{t('testday.results.shareTitle')}</Text>
        <View style={styles.cardRows}>
          {rows.map((row) => {
            const tone = accents.dark[ZONE_META[GOAL_ZONE[row.type]].accent];
            const up = row.change != null && row.change > 0;
            return (
              <View key={row.type} style={styles.cardRow}>
                <View style={[styles.cardThumb, { backgroundColor: tone.track }]}>
                  <Image source={TEST_PICTURES[PICTURE_OF[row.type]].thumb} style={styles.thumbImage} />
                </View>
                <Text style={styles.cardName} numberOfLines={1}>
                  {t(NAME_KEY[row.type])}
                </Text>
                <View style={styles.cardFigure}>
                  <Text style={styles.cardValue}>
                    {row.type === 'calf_raises' ? row.value : t('testday.results.valueSeconds', { n: row.value })}
                  </Text>
                  {up && <Text style={styles.cardUp}>{chipLabel(t, row)}</Text>}
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.shareActions}>
        <PrimaryButton label={t('testday.results.share')} onPress={() => void share()} />
        <Pressable accessibilityRole="button" onPress={onClose} hitSlop={8} style={styles.shareClose}>
          <Text style={[styles.shareCloseText, { color: scheme === 'dark' ? colors.foreground : '#FFFFFF' }]}>
            {t('testday.close')}
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  flex: { flex: 1 },
  pressed: { opacity: 0.6 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 24,
    gap: 16,
  },

  hero: {
    alignItems: 'center',
  },
  heroArt: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroGlow: {
    position: 'absolute',
    width: GLOW,
    height: GLOW,
  },
  heroGlowCanvas: {
    width: GLOW,
    height: GLOW,
  },
  heroArtInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroPicture: {
    width: '86%',
    height: '100%',
  },
  heroMascot: {
    width: 132,
    height: 132,
  },
  heroBadge: {
    position: 'absolute',
    top: 14,
    right: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 34,
    paddingHorizontal: 13,
    borderRadius: 17,
    borderCurve: 'continuous',
  },
  heroBadgeText: {
    ...fonts.heavy(16, -0.2),
    color: '#FFFFFF',
  },
  piece: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
  heroCopy: {
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  eyebrow: fonts.heavy(14, 0.2),
  verdict: {
    ...fonts.heavy(28, -0.7),
    lineHeight: 33,
    textAlign: 'center',
  },
  dateLine: {
    ...fonts.medium(15),
    textAlign: 'center',
  },

  rows: { gap: 10 },
  row: {
    borderRadius: 24,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  rowMain: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    paddingRight: 14,
  },
  thumbImage: {
    width: '100%',
    height: '100%',
  },
  rowCopy: {
    flex: 1,
    gap: 3,
  },
  name: {
    ...fonts.bold(17, -0.3),
    lineHeight: 21,
  },
  reachedLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  toGo: fonts.semibold(13),
  rowFigure: {
    alignItems: 'flex-end',
    gap: 4,
  },
  figureLine: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },
  figure: {
    ...fonts.heavy(30, -0.8),
    fontVariant: ['tabular-nums'],
  },
  unit: fonts.bold(16),
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  chipText: fonts.bold(12),

  details: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    gap: 12,
  },
  // On the left, over the oldest bar, which is the one least likely to reach
  // the goal and put its figure where the tag is.
  legsLine: {
    gap: 2,
    padding: 12,
    borderRadius: 16,
    borderCurve: 'continuous',
  },
  legsText: fonts.bold(15),
  legsGap: fonts.medium(13),
  explain: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },
  explainText: {
    flex: 1,
    ...fonts.medium(14),
    lineHeight: 20,
  },

  after: { gap: 12 },
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  tile: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextCopy: { flex: 1, gap: 2 },
  nextTitle: fonts.bold(16, -0.2),
  nextBody: {
    ...fonts.medium(14),
    lineHeight: 19,
  },
  why: {
    gap: 4,
    padding: 16,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  whyEyebrow: fonts.bold(13, 0.2),
  whyText: {
    ...fonts.semibold(16, -0.2),
    lineHeight: 22,
  },

  dock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  shareButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.72)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 20,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    padding: 22,
    gap: 14,
    borderRadius: 30,
    borderCurve: 'continuous',
    backgroundColor: CARD_BG,
    overflow: 'hidden',
  },
  cardGlow: {
    position: 'absolute',
    top: -170,
    right: -150,
    width: CARD_GLOW_SIZE,
    height: CARD_GLOW_SIZE,
  },
  cardGlowCanvas: {
    width: CARD_GLOW_SIZE,
    height: CARD_GLOW_SIZE,
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardMascot: { width: 44, height: 44 },
  cardBrand: {
    ...fonts.heavy(18, -0.3),
    color: '#FFFFFF',
  },
  cardDate: {
    ...fonts.medium(13),
    color: 'rgba(255,255,255,0.6)',
  },
  cardTitle: {
    ...fonts.heavy(30, -0.8),
    color: '#FFFFFF',
  },
  cardRows: { gap: 10 },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 8,
    paddingRight: 14,
    borderRadius: 20,
    borderCurve: 'continuous',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  cardThumb: {
    width: 52,
    height: 52,
    borderRadius: 16,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  cardName: {
    flex: 1,
    ...fonts.bold(16, -0.2),
    color: '#FFFFFF',
  },
  cardFigure: { alignItems: 'flex-end' },
  cardValue: {
    ...fonts.heavy(24, -0.6),
    color: '#FFFFFF',
    fontVariant: ['tabular-nums'],
  },
  cardUp: {
    ...fonts.bold(12),
    color: '#2ECC71',
  },
  shareActions: {
    width: '100%',
    maxWidth: 340,
    gap: 12,
  },
  shareClose: { paddingVertical: 6, alignSelf: 'center' },
  shareCloseText: fonts.bold(16),
});
