import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Line, Rect } from 'react-native-svg';

import { accents, fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { formatDateKey, formatNumber, formatSigned } from '../model/format';
import { CHART_MIN_READINGS, tickIndices, type PainBar, type PainSummary, type RangeKey } from '../model/progress-data';
import { useCountUp } from '../model/use-count-up';
import { Card, DeltaChip, useGrowIn } from './card';

const MASCOT = require('@assets/home/mascot-tasks.png');

/** The bars' own height, and the room kept above them for the tooltip. */
const BARS_HEIGHT = 128;
const TOOLTIP_ROOM = 40;
const TICKS_HEIGHT = 22;
const TOOLTIP_WIDTH = 120;
const TICK_WIDTH = 56;
const PAIN_MAX = 10;

const AVERAGE_KEY = {
  week: 'progress.avgWeek',
  month: 'progress.avgMonth',
  quarter: 'progress.avgQuarter',
} as const satisfies Record<RangeKey, Key>;

const DELTA_KEY = {
  week: 'progress.deltaWeek',
  month: 'progress.deltaMonth',
  quarter: 'progress.deltaQuarter',
} as const satisfies Record<RangeKey, Key>;

export type PainCardProps = {
  range: RangeKey;
  bars: readonly PainBar[];
  summary: PainSummary;
  /** Where the first week sat, for the dashed line. */
  start: number | null;
  /** Mornings logged since the plan began. Under three, the card waits. */
  total: number;
};

/**
 * Morning pain: the range's average, its change, and a bar per day (or per
 * week on the longest range).
 *
 * The bars are ink and the newest is violet — the accent says "this is the
 * pain metric, and this is now", never "this is good". The only green on the
 * card is the delta chip, and only when the average fell.
 */
export function PainCard({ range, bars, summary, start, total }: PainCardProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const waiting = total < CHART_MIN_READINGS;

  const shown = useCountUp(summary.average ?? 0, 1).display;

  const chip =
    waiting || summary.delta == null ? null : summary.delta === 0 ? (
      <DeltaChip label={t('progress.deltaSame')} improving={false} />
    ) : (
      <DeltaChip
        label={t(DELTA_KEY[range], { delta: formatSigned(summary.delta, language) })}
        improving={summary.delta < 0}
      />
    );

  return (
    <Card title={t('progress.painTitle')} aside={chip}>
      {waiting ? (
        <PainWaiting total={total} />
      ) : (
        <>
          <View
            accessible
            accessibilityLabel={
              summary.average == null
                ? t('progress.painNoneInRange')
                : t('progress.painChartA11y', { value: formatNumber(summary.average, language) })
            }
            style={styles.figureRow}>
            <Text style={[styles.figure, { color: meter.ink }]}>
              {summary.average == null ? '–' : formatNumber(shown, language)}
            </Text>
            <Text style={[styles.outOf, { color: meter.unit }]}>{t('progress.painOutOf')}</Text>
          </View>
          <Text style={[styles.sub, { color: meter.caption }]}>{t(AVERAGE_KEY[range])}</Text>
          <PainChart range={range} bars={bars} start={start} />
        </>
      )}
    </Card>
  );
}

/** The bars, the start line, the ticks and the tooltip. */
function PainChart({ range, bars, start }: { range: RangeKey; bars: readonly PainBar[]; start: number | null }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const violet = accents[scheme].violet.fill;
  const pill = primaryButton[scheme];
  const t = useT();
  const language = useLanguage();
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const grow = useGrowIn();

  // A different range is a different set of bars; the old index means nothing.
  const [shownRange, setShownRange] = useState(range);
  if (shownRange !== range) {
    setShownRange(range);
    setSelected(null);
  }

  const growStyle = useAnimatedStyle(() => ({ transform: [{ scaleY: grow.value }] }));

  const n = bars.length;
  const slot = n > 0 ? width / n : 0;
  const barW = Math.max(3, Math.min(26, slot * (range === 'month' ? 0.56 : 0.6)));
  const cx = (i: number) => i * slot + slot / 2;
  const heightOf = (v: number) => Math.max(barW, (v / PAIN_MAX) * BARS_HEIGHT);
  const empty = bars.every((b) => b.value == null);
  const ticks = tickIndices(n, range);
  const highlighted = selected ?? bars.findIndex((b) => b.latest);
  const startY = start == null ? null : BARS_HEIGHT - (start / PAIN_MAX) * BARS_HEIGHT;

  const dateOf = (bar: PainBar) =>
    bar.from === bar.to
      ? formatDateKey(bar.from, language, 'full')
      : t('progress.tooltipRange', {
          from: formatDateKey(bar.from, language, 'dayMonth'),
          to: formatDateKey(bar.to, language, 'dayMonth'),
        });

  const onPress = (x: number) => {
    if (slot <= 0) return;
    const i = Math.max(0, Math.min(n - 1, Math.floor(x / slot)));
    if (bars[i].value == null) {
      setSelected(null);
      return;
    }
    void Haptics.selectionAsync().catch(() => undefined);
    setSelected((current) => (current === i ? null : i));
  };

  const tip = selected != null ? bars[selected] : null;

  return (
    <View style={styles.chart} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {width > 0 && (
        <>
          <View style={styles.bars}>
            {/* Every slot is drawn, logged or not, so a missing morning reads as
                a gap in a row rather than as the chart ending early. */}
            <Svg width={width} height={BARS_HEIGHT} style={StyleSheet.absoluteFill}>
              {bars.map((bar, i) => (
                <Rect
                  key={bar.from}
                  x={cx(i) - barW / 2}
                  y={0}
                  width={barW}
                  height={BARS_HEIGHT}
                  rx={barW / 2}
                  fill={meter.track}
                  fillOpacity={0.55}
                />
              ))}
            </Svg>

            <Animated.View style={[StyleSheet.absoluteFill, styles.growFromBottom, growStyle]}>
              <Svg width={width} height={BARS_HEIGHT}>
                {bars.map((bar, i) => {
                  if (bar.value == null) return null;
                  const h = heightOf(bar.value);
                  const lit = i === highlighted;
                  return (
                    <Rect
                      key={bar.from}
                      x={cx(i) - barW / 2}
                      y={BARS_HEIGHT - h}
                      width={barW}
                      height={h}
                      rx={barW / 2}
                      fill={lit ? violet : meter.ink}
                      fillOpacity={lit ? 1 : 0.32}
                    />
                  );
                })}
              </Svg>
            </Animated.View>

            {startY != null && (
              <>
                <Svg width={width} height={BARS_HEIGHT} style={StyleSheet.absoluteFill} pointerEvents="none">
                  <Line
                    x1={0}
                    x2={width}
                    y1={startY}
                    y2={startY}
                    stroke={meter.label}
                    strokeOpacity={0.7}
                    strokeWidth={1.5}
                    strokeDasharray="4 5"
                  />
                </Svg>
                <View
                  pointerEvents="none"
                  style={[
                    styles.startTag,
                    { backgroundColor: colors.card, top: Math.max(-TOOLTIP_ROOM + 4, startY - 22) },
                  ]}>
                  <Text style={[styles.startText, { color: meter.label }]}>
                    {t('progress.startLine', { value: formatNumber(start ?? 0, language) })}
                  </Text>
                </View>
              </>
            )}

            {empty && (
              <View style={styles.noneWrap} pointerEvents="none">
                <Text style={[styles.none, { color: meter.caption, backgroundColor: colors.card }]}>
                  {t('progress.painNoneInRange')}
                </Text>
              </View>
            )}

            {/* One touch target over the whole plot, read by position: thirty
                slim bars are too narrow to be hit one by one. */}
            <Pressable
              style={StyleSheet.absoluteFill}
              onPress={(e) => onPress(e.nativeEvent.locationX)}
              accessible={false}
            />

            {tip != null && tip.value != null && selected != null && (
              <View
                pointerEvents="none"
                style={[
                  styles.tooltipSlot,
                  {
                    left: Math.max(0, Math.min(width - TOOLTIP_WIDTH, cx(selected) - TOOLTIP_WIDTH / 2)),
                    bottom: heightOf(tip.value) + 8,
                  },
                ]}>
                <View style={[styles.tooltip, { backgroundColor: pill.fill }]}>
                  <Text style={[styles.tipValue, { color: pill.label }]}>
                    {formatNumber(tip.value, language)}
                    <Text style={[styles.tipOutOf, { color: pill.label }]}>{t('progress.painOutOf')}</Text>
                  </Text>
                  <Text style={[styles.tipDate, { color: pill.label }]} numberOfLines={1}>
                    {dateOf(tip)}
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.ticks} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            {ticks.map((i) => {
              const bar = bars[i];
              const label =
                range === 'week'
                  ? formatDateKey(bar.from, language, 'weekday')
                  : formatDateKey(bar.from, language, 'dayMonth');
              const left = Math.max(0, Math.min(width - TICK_WIDTH, cx(i) - TICK_WIDTH / 2));
              const lit = i === highlighted;
              return (
                <Text
                  key={bar.from}
                  numberOfLines={1}
                  style={[
                    styles.tick,
                    lit ? styles.tickLit : null,
                    { left, color: lit ? meter.ink : meter.label },
                  ]}>
                  {label}
                </Text>
              );
            })}
          </View>

          {/* Read out bar by bar, since the picture is the whole point. */}
          <View style={styles.a11yList} accessible accessibilityLabel={bars
            .map((bar) =>
              bar.value == null
                ? t('progress.painBarEmptyA11y', { date: dateOf(bar) })
                : t('progress.painBarA11y', { date: dateOf(bar), value: formatNumber(bar.value, language) }),
            )
            .join('. ')}
          />
        </>
      )}
    </View>
  );
}

/** Ghost bars, the mascot, and how many mornings until the real ones. */
const GHOST = [0.62, 0.78, 0.5, 0.66, 0.44, 0.56, 0.38];

function PainWaiting({ total }: { total: number }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const violet = accents[scheme].violet;
  const t = useT();
  const [width, setWidth] = useState(0);
  const toGo = Math.max(0, CHART_MIN_READINGS - total);
  const ghostH = 84;
  const slot = width / GHOST.length;
  const barW = Math.min(26, slot * 0.6);

  return (
    <View style={styles.waiting}>
      <View style={styles.waitingRow}>
        <Image
          source={MASCOT}
          style={styles.mascot}
          resizeMode="contain"
          accessibilityElementsHidden
          importantForAccessibility="no"
        />
        <View style={styles.waitingCopy}>
          <Text style={[styles.waitingText, { color: colors.foreground }]}>
            {t('progress.painToGo', { count: toGo })}
          </Text>
          <View
            style={styles.steps}
            accessible
            accessibilityLabel={t('progress.painToGoSteps', { done: total, total: CHART_MIN_READINGS })}>
            {Array.from({ length: CHART_MIN_READINGS }, (_, i) => (
              <View
                key={i}
                style={[styles.step, { backgroundColor: i < total ? violet.fill : violet.track }]}
              />
            ))}
          </View>
          <Text style={[styles.stepsCaption, { color: meter.caption }]}>
            {t('progress.painToGoSteps', { done: total, total: CHART_MIN_READINGS })}
          </Text>
        </View>
      </View>
      <View style={styles.ghost} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
        {width > 0 && (
          <Svg width={width} height={ghostH}>
            {GHOST.map((h, i) => (
              <Rect
                key={i}
                x={i * slot + (slot - barW) / 2}
                y={ghostH - h * ghostH}
                width={barW}
                height={h * ghostH}
                rx={barW / 2}
                fill={meter.track}
                fillOpacity={0.7}
              />
            ))}
          </Svg>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  figureRow: { flexDirection: 'row', alignItems: 'baseline', marginTop: 8, gap: 3 },
  figure: { ...fonts.heavy(40, -1.2), fontVariant: ['tabular-nums'] },
  outOf: fonts.bold(17, -0.2),
  sub: { ...fonts.medium(13), marginTop: 0 },
  chart: { marginTop: 6, paddingTop: TOOLTIP_ROOM },
  bars: { height: BARS_HEIGHT },
  growFromBottom: { transformOrigin: 'bottom' },
  startTag: { position: 'absolute', right: 0, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 },
  startText: fonts.semibold(12),
  noneWrap: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
  none: { ...fonts.medium(14), textAlign: 'center', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  tooltipSlot: { position: 'absolute', width: TOOLTIP_WIDTH, alignItems: 'center' },
  tooltip: {
    borderRadius: 12,
    borderCurve: 'continuous',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  tipValue: fonts.bold(15, -0.2),
  tipOutOf: fonts.semibold(11),
  tipDate: fonts.medium(11),
  ticks: { height: TICKS_HEIGHT, marginTop: 8 },
  tick: { ...fonts.medium(12), position: 'absolute', width: TICK_WIDTH, textAlign: 'center' },
  tickLit: fonts.bold(12),
  a11yList: { position: 'absolute', width: 1, height: 1, opacity: 0 },
  waiting: { marginTop: 12, gap: 14 },
  waitingRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  mascot: { width: 78, height: 78 },
  waitingCopy: { flex: 1, gap: 8 },
  waitingText: { ...fonts.semibold(16, -0.2), lineHeight: 21 },
  steps: { flexDirection: 'row', gap: 6 },
  step: { flex: 1, height: 6, borderRadius: 3 },
  stepsCaption: fonts.medium(12),
  ghost: { height: 84 },
});
