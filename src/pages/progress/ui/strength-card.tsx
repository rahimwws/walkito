import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  LinearTransition,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { TestHistoryBars, TestRing } from '@/widgets/session-player';
import { GOAL_SPECS, ZONE_META, type GoalType } from '@/entities/program';
import { accents, fonts, meterColors, palette, PRIMARY, type AccentName } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Key, type Translate } from '@/shared/lib/i18n';
import { requestProgram, usePlanOver } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, peekSideRig, type MascotHandle } from '@/shared/ui/mascot';

import { formatDateKey, formatNumber, formatSigned } from '../model/format';
import type { StrengthKey, StrengthTrend } from '../model/progress-data';
import { Card, DeltaChip } from './card';
import { peekFigure } from './peek-bounds';

/** Each test's colour, its goal, and the words it is read with: the zone's own
 * accent (`ZONE_META`), the same one the test screens and the results wear. */
const META: Record<
  StrengthKey,
  { tone: AccentName; goal: GoalType; name: Key; explain: Key; reps: boolean }
> = {
  calf: {
    tone: ZONE_META.calf.accent,
    goal: 'calf_raises',
    name: 'progress.calfName',
    explain: 'testday.results.explain.calf_raises',
    reps: true,
  },
  balance: {
    tone: ZONE_META.balance.accent,
    goal: 'balance',
    name: 'progress.balanceName',
    explain: 'testday.results.explain.balance',
    reps: false,
  },
  arch: {
    tone: ZONE_META.arch.accent,
    goal: 'arch_hold',
    name: 'progress.archName',
    explain: 'testday.results.explain.arch_hold',
    reps: false,
  },
};

/** How long after the card mounts the rings start filling, and the gap
 * between one row and the next. */
const ROW_DELAY = 260;
const ROW_STAGGER = 120;
const COUNT_MS = 750;

/**
 * The mascot leaning in from the card's right edge beside the title, before
 * the first test: the square his art is fitted to. The leaning art is a
 * little over half as wide as it is tall, so he takes about 33pt of the
 * title row's end and none of the rows' figures under it.
 */
const PEEK_SIZE = 56;
/** From the card's top to the top of his head: low enough that the card's
 * rounded corner never shaves it, high enough that his waving hand clears the
 * first row's figure. */
const PEEK_TOP = 12;
/** How far past the card's right edge his own cut sits, so the card's edge
 * is the one he holds. */
const PEEK_SINK = 2;
/** After the tab's arrival, so his wave is seen rather than played mid-fade. */
const WAVE_MS = 600;

function unitOf(trend: StrengthTrend, t: Translate): string {
  return META[trend.key].reps ? t('progress.repsUnit', { count: trend.latest ?? 0 }) : t('progress.secondsUnit');
}

function changeOf(trend: StrengthTrend, t: Translate, language: string): string {
  if (trend.latest == null) return t('progress.strengthNoTest');
  if (trend.delta == null) return t('progress.baseline');
  if (trend.delta === 0) return t('progress.noChange');
  const delta = formatSigned(trend.delta, language);
  return META[trend.key].reps
    ? t('progress.repsDelta', { count: Math.abs(trend.delta), delta })
    : t('progress.secondsDelta', { delta });
}

/** Whole days from one `YYYY-MM-DD` to another. */
function daysUntil(from: string, to: string): number {
  const at = (key: string) => {
    const [y, m, d] = key.split('-').map(Number);
    return Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1);
  };
  return Math.round((at(to) - at(from)) / 86_400_000);
}

/**
 * The three tests, each as a row a person can read without reading: the
 * test's own picture in a ring that fills, on arrival, from the first test's
 * share of the goal to the latest's; the figure counting up the same way; the
 * change since the first test; and how far is left. A row opens to every test
 * so far and a line on what the test shows. The next test closes the card,
 * and on the day it is due it starts from here.
 */
export function StrengthCard({
  trends,
  nextTest,
  today,
  mascot = true,
  paused = false,
}: {
  trends: readonly StrengthTrend[];
  /** `YYYY-MM-DD` the next test is due, or null before the first. */
  nextTest: string | null;
  today: string;
  /** Off while another mascot shares the screen: one character at a time. */
  mascot?: boolean;
  /** A sheet is over the page. The tab being hidden pauses it by itself. */
  paused?: boolean;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const t = useT();
  const tested = trends.some((trend) => trend.latest != null);
  // Before the first test, once for the whole card rather than per row.
  const peeking = mascot && !tested;
  const compared = trends.some((trend) => trend.delta != null);
  const [open, setOpen] = useState<StrengthKey | null>(null);

  const toggle = (key: StrengthKey) => {
    Haptics.selectionAsync();
    setOpen((current) => {
      if (current === key) return null;
      track('progress_strength_detail', { test: key });
      return key;
    });
  };

  return (
    // Peeking, the card clips the mascot at its right edge.
    <Card title={t('progress.strengthTitle')} style={peeking ? styles.clipped : undefined}>
      <View style={styles.rows}>
        {trends.map((trend, i) => (
          <StrengthRow
            key={trend.key}
            trend={trend}
            first={i === 0}
            delay={ROW_DELAY + i * ROW_STAGGER}
            open={open === trend.key}
            onToggle={() => toggle(trend.key)}
          />
        ))}
      </View>
      {(!tested || compared) && (
        <Text style={[styles.caption, { color: meter.caption }]}>
          {tested ? t('progress.strengthDeltaCaption') : t('progress.strengthEmpty')}
        </Text>
      )}
      {nextTest != null && <NextTest nextTest={nextTest} today={today} />}
      {peeking && <SidePeek surface={colors.card} paused={paused} />}
    </Card>
  );
}

/**
 * The mascot leaning in from behind the card's right edge beside the title,
 * one hand gripping it, before the first test: the card that has no numbers
 * yet is the one he is looking into. The card clips him at its edge.
 *
 * He waves once, the first time Progress is in front with him on it (not
 * unseen at mount, and not under a sheet), then only breathes. Paused while
 * the tab is hidden or covered; the still drawing with Reduce Motion.
 */
function SidePeek({ surface, paused }: { surface: string; paused: boolean }) {
  // The tabs stay mounted: he only moves while Progress is in front, and the
  // plan overlay (not a route, so Progress stays focused) is down.
  const focused = useIsFocused();
  const planOver = usePlanOver();
  const still = paused || !focused || planOver;
  const rig = peekSideRig;
  const figure = peekFigure(rig, PEEK_SIZE);
  // Placed by the figure, not by its square: his cut `PEEK_SINK` past the
  // card's right edge, the top of his head `PEEK_TOP` under the card's top.
  const place = {
    top: PEEK_TOP - figure.top,
    right: figure.right - PEEK_SIZE - PEEK_SINK,
  };

  const mascot = useRef<MascotHandle>(null);
  const waved = useRef(false);
  useEffect(() => {
    if (waved.current || still) return undefined;
    const timer = setTimeout(() => {
      waved.current = true;
      mascot.current?.play('wave');
    }, WAVE_MS);
    return () => clearTimeout(timer);
  }, [still]);

  return (
    <View
      style={[styles.peek, place]}
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      <Mascot ref={mascot} rig={rig} size={PEEK_SIZE} surface={surface} paused={still} />
    </View>
  );
}

/** The figure, counting from the first test's to the latest's once, when the
 * card mounts. Straight to the figure with Reduce Motion or nothing to count. */
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
      const p = Math.min(1, Math.max(0, (Date.now() - start) / COUNT_MS));
      setShown(Math.round(from + (to - from) * (1 - (1 - p) ** 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [from, to, delay, reduceMotion]);
  return shown;
}

function StrengthRow({
  trend,
  first,
  delay,
  open,
  onToggle,
}: {
  trend: StrengthTrend;
  first: boolean;
  delay: number;
  open: boolean;
  onToggle: () => void;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const t = useT();
  const language = useLanguage();
  const meta = META[trend.key];
  const tone = accents[scheme][meta.tone];
  const target = GOAL_SPECS[meta.goal].target;
  const name = t(meta.name);
  const unit = unitOf(trend, t);
  const change = changeOf(trend, t, language);

  const start = trend.values[0] ?? 0;
  const latest = trend.latest;
  const counted = useCountUp(latest == null ? 0 : start, latest ?? 0, delay);
  const value = latest == null ? '–' : formatNumber(counted, language);
  const reached = latest != null && latest >= target;
  const left = latest == null ? null : Math.max(0, Math.ceil(target - latest));
  const share = (v: number) => v / Math.max(1, target);

  const chevron = useSharedValue(open ? 1 : 0);
  useEffect(() => {
    chevron.value = withTiming(open ? 1 : 0, {
      duration: 220,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [open, chevron]);
  const chevronStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${chevron.value * 180}deg` }] }));

  const canOpen = trend.values.length > 0;

  return (
    <Animated.View
      layout={LinearTransition.duration(260)}
      style={[!first && { borderTopColor: meter.divider, borderTopWidth: StyleSheet.hairlineWidth }]}>
      <Pressable
        accessibilityRole={canOpen ? 'button' : undefined}
        accessibilityState={canOpen ? { expanded: open } : undefined}
        accessibilityLabel={t('progress.strengthRowA11y', {
          name,
          value: latest == null ? '–' : formatNumber(latest, language),
          unit,
          change,
        })}
        disabled={!canOpen}
        onPress={onToggle}
        style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
        <TestRing
          kind={trend.key}
          from={trend.values.length > 1 ? share(start) : 0}
          to={latest == null ? 0 : share(latest)}
          tone={tone}
          delay={delay}
          size={64}
        />

        <View style={styles.middle}>
          <Text style={[styles.name, { color: colors.foreground }]} numberOfLines={1}>
            {name}
          </Text>
          {reached ? (
            <View style={styles.reached}>
              <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} color={tone.fill} strokeWidth={2.4} />
              <Text style={[styles.sub, { color: tone.fill }]}>{t('testday.results.reached')}</Text>
            </View>
          ) : (
            left != null && (
              <Text style={[styles.sub, { color: meter.caption }]} numberOfLines={1}>
                {meta.reps
                  ? t('testday.results.toGoRaises', { count: left })
                  : t('testday.results.toGoSeconds', { count: left })}
              </Text>
            )
          )}
        </View>

        <View style={styles.right}>
          <Text style={styles.valueLine} numberOfLines={1}>
            <Text style={[styles.value, { color: meter.ink }]}>{value}</Text>
            {latest != null && <Text style={[styles.unit, { color: meter.unit }]}> {unit}</Text>}
          </Text>
          <DeltaChip label={change} improving={trend.delta != null && trend.delta > 0} />
        </View>

        {canOpen && (
          <Animated.View style={chevronStyle}>
            <HugeiconsIcon icon={ArrowDown01Icon} size={18} color={meter.label} strokeWidth={2.2} />
          </Animated.View>
        )}
      </Pressable>

      {open && (
        <Animated.View entering={FadeIn.duration(220)} exiting={FadeOut.duration(140)} style={styles.details}>
          <TestHistoryBars values={trend.values.slice(-6)} dates={trend.dates.slice(-6)} target={target} tone={tone}>
            <View style={styles.explain}>
              <FluentIcon name="bulb" size={18} style={styles.explainEmoji} />
              <Text style={[styles.explainText, { color: meter.caption }]}>{t(meta.explain)}</Text>
            </View>
          </TestHistoryBars>
        </Animated.View>
      )}
    </Animated.View>
  );
}

/**
 * When the next test is: a date and how far off it is, or, on the day, a way
 * to start it from here. The test is the moment the numbers above move, so the
 * card says when that moment is.
 */
function NextTest({ nextTest, today }: { nextTest: string; today: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const due = nextTest <= today;
  const days = daysUntil(today, nextTest);

  return (
    <View style={[styles.next, { backgroundColor: meter.iconTile }]}>
      <FluentIcon name="calendar" size={22} />
      <View style={styles.nextCopy}>
        <Text style={[styles.nextTitle, { color: colors.foreground }]} numberOfLines={2}>
          {due ? t('progress.nextTestToday') : t('progress.nextTest', { date: formatDateKey(nextTest, language, 'dayMonth') })}
        </Text>
        {!due && days > 0 && (
          <Text style={[styles.nextSub, { color: meter.caption }]}>{t('progress.nextTestIn', { count: days })}</Text>
        )}
      </View>
      {due && (
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            Haptics.selectionAsync();
            track('progress_test_started');
            requestProgram({ kind: 'test' });
          }}
          hitSlop={6}
          style={({ pressed }) => [styles.start, { backgroundColor: PRIMARY }, pressed && styles.pressed]}>
          <Text style={styles.startText}>{t('progress.startTest')}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  clipped: { overflow: 'hidden' },
  peek: { position: 'absolute', width: PEEK_SIZE, height: PEEK_SIZE },
  rows: { marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  pressed: { opacity: 0.6 },
  middle: { flex: 1, gap: 3 },
  name: fonts.bold(17, -0.3),
  sub: fonts.semibold(13),
  reached: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  right: { alignItems: 'flex-end', gap: 5, minWidth: 64, maxWidth: 120 },
  valueLine: { textAlign: 'right' },
  value: { ...fonts.heavy(24, -0.6), fontVariant: ['tabular-nums'] },
  unit: fonts.semibold(13),
  details: { paddingBottom: 14 },
  explain: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', marginTop: 4 },
  /** Centred on the first of the 20pt lines beside it. */
  explainEmoji: { marginTop: 1 },
  explainText: { flex: 1, ...fonts.medium(14), lineHeight: 20 },
  caption: { ...fonts.medium(13), lineHeight: 18, marginTop: 4 },
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  nextCopy: { flex: 1, gap: 1 },
  nextTitle: fonts.semibold(15, -0.2),
  nextSub: fonts.medium(13),
  start: {
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startText: { ...fonts.bold(15), color: '#FFFFFF' },
});
