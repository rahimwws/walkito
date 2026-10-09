import Flag02Icon from '@hugeicons/core-free-icons/Flag02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, type ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Line } from 'react-native-svg';

import { fromDateKey } from '@/entities/program';
import { fonts, meterColors, palette, type Accent } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { TEST_PICTURES } from '../../config/test-pictures';
import type { TestKind } from '../../model/test-day';

/**
 * The two pictures a test's result is drawn with, wherever it is shown: the
 * results after a test day, and the Progress tab's strength card. One drawing
 * in both places, so a person learns it once.
 */

const RING_MS = 900;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/**
 * The test's own picture in a ring of its accent: the ring is the figure's
 * share of the goal, and it fills from `from` to `to` once, on arrival, so the
 * gain is the part that moves. Nothing repeats.
 */
export function TestRing({
  kind,
  from,
  to,
  tone,
  delay = 0,
  size = 76,
  stroke = 5,
}: {
  kind: TestKind;
  /** Where the ring starts, as a share of the goal: last time's, or the first test's. */
  from: number;
  /** Where it ends: today's share of the goal. Clamped to 0–1. */
  to: number;
  tone: Accent;
  delay?: number;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const thumb = size - stroke * 2 - 6;
  const clamp = (v: number) => Math.max(0, Math.min(1, v));

  const p = useSharedValue(clamp(from));
  useEffect(() => {
    p.value = clamp(from);
    p.value = withDelay(
      delay,
      withTiming(clamp(to), { duration: RING_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System }),
      ReduceMotion.System,
    );
  }, [from, to, delay, p]);
  const arc = useAnimatedProps(() => ({ strokeDashoffset: circumference * (1 - p.value) }));

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} style={styles.turn}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={tone.track} strokeWidth={stroke} fill="none" />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={tone.fill}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          fill="none"
          animatedProps={arc}
        />
      </Svg>
      <View style={styles.middle} pointerEvents="none">
        <View style={[{ width: thumb, height: thumb, borderRadius: thumb / 2, backgroundColor: tone.track }, styles.clip]}>
          <Image source={TEST_PICTURES[kind].thumb} style={styles.fill} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
}

/** The bar area's height, and what is left of it once each bar's figure has
 * its line above it. */
const BAR_AREA = 104;
const BAR_SPACE = BAR_AREA - 20;

/**
 * Every test so far for one measure, oldest first, the latest bar in the
 * accent, with the goal as a dashed line across on the bars' own scale.
 */
export function TestHistoryBars({
  values,
  dates,
  target,
  tone,
  children,
}: {
  values: readonly number[];
  /** `YYYY-MM-DD`, one per value. */
  dates: readonly string[];
  target: number;
  tone: Accent;
  /** Anything to put under the bars. */
  children?: ReactNode;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const language = useLanguage();
  const t = useT();
  const top = Math.max(target, ...values, 1) * 1.08;
  const short = new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' });
  const height = (value: number) => (value / top) * BAR_SPACE;

  return (
    <View style={styles.history}>
      <Text style={[styles.historyTitle, { color: meter.label }]}>{t('testday.results.history')}</Text>
      <View style={styles.barArea}>
        {/* SVG, because a one-sided dashed border draws solid on iOS. */}
        <View style={[styles.goalLine, { bottom: height(target) }]} pointerEvents="none">
          <Svg width="100%" height={2}>
            <Line x1="0" y1="1" x2="100%" y2="1" stroke={meter.label} strokeWidth={1.5} strokeDasharray="4 5" />
          </Svg>
          {/* On the left, over the oldest bar, which is the one least likely
              to reach the goal and put its figure where the tag is. */}
          <View style={styles.goalTag}>
            <HugeiconsIcon icon={Flag02Icon} size={12} color={meter.label} strokeWidth={2.2} />
            <Text style={[styles.goalTagText, { color: meter.label }]}>{target}</Text>
          </View>
        </View>
        {values.map((value, i) => {
          const last = i === values.length - 1;
          return (
            <View key={`${dates[i] ?? i}-${i}`} style={styles.col}>
              <Text style={[styles.value, { color: last ? colors.foreground : meter.caption }]}>{value}</Text>
              <View
                style={[styles.bar, { height: Math.max(4, height(value)), backgroundColor: last ? tone.fill : tone.track }]}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.dateRow}>
        {dates.map((date, i) => (
          <Text key={`${date}-${i}`} style={[styles.date, { color: meter.caption }]} numberOfLines={1}>
            {short.format(fromDateKey(date))}
          </Text>
        ))}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  turn: { transform: [{ rotate: '-90deg' }, { scaleY: -1 }] },
  middle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clip: { overflow: 'hidden' },
  fill: { width: '100%', height: '100%' },

  history: { gap: 8 },
  historyTitle: fonts.bold(13, 0.2),
  barArea: {
    height: BAR_AREA,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  goalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
  },
  goalTag: {
    position: 'absolute',
    left: 0,
    bottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  goalTagText: fonts.bold(12),
  col: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  value: {
    ...fonts.bold(12),
    fontVariant: ['tabular-nums'],
  },
  bar: {
    width: '70%',
    maxWidth: 34,
    borderRadius: 8,
    borderCurve: 'continuous',
  },
  dateRow: {
    flexDirection: 'row',
    gap: 8,
  },
  date: {
    flex: 1,
    ...fonts.medium(11),
    textAlign: 'center',
  },
});
