import ArrowDown02Icon from '@hugeicons/core-free-icons/ArrowDown02Icon';
import ArrowUp02Icon from '@hugeicons/core-free-icons/ArrowUp02Icon';
import ArrowUpDownIcon from '@hugeicons/core-free-icons/ArrowUpDownIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Line, Rect } from 'react-native-svg';

import { bitepal, colors, fonts, target } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { Bar, BigNumber } from '@/widgets/session-player';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { formatDateKey, formatNumber, formatSigned } from '../model/format';
import {
  CHART_MIN_READINGS,
  tickIndices,
  type PainBar,
  type PainCounts,
  type PainSummary,
  type RangeKey,
} from '../model/progress-data';
import { CardHead, Chip, NUMBER_SCALE, ProgressCard, SLOT_SCALE, useLargeText } from './kit';

const BARS_HEIGHT = 120;
const TOOLTIP_ROOM = 64;
const TICKS_HEIGHT = 28;
const TOOLTIP_WIDTH = 168;
const TICK_WIDTH = 76;
const PAIN_MAX = 10;

const RANGE_LABEL = {
  week: 'progress.range7Days',
  month: 'progress.rangeMonth',
  quarter: 'progress.range3Months',
} as const satisfies Record<RangeKey, Key>;

const DELTA_KEY = {
  week: 'progress.deltaWeek',
  month: 'progress.deltaMonth',
  quarter: 'progress.deltaQuarter',
} as const satisfies Record<RangeKey, Key>;

export type MorningsCardProps = {
  range: RangeKey;
  onNextRange: () => void;
  bars: readonly PainBar[];
  summary: PainSummary;
  /** Where the first week sat, for the dashed line. */
  start: number | null;
  /** Mornings logged since the plan began. Under three, the card waits. */
  total: number;
  counts: PainCounts;
};

/**
 * Morning pain as one of BitePal's cards: the label switches the range the way
 * BitePal's "Calories eaten ⇕" switches what it counts, the range's average
 * is the big number (the label already names the range, so no line under it
 * says so again), the change is an arrow and its figure in a chip that reads
 * out what it is compared with, thin bars stand on their light tracks with the newest
 * (or the tapped one) in violet, and the mornings are counted under them in
 * the check-in's own words. Every bar is the same ink: a high morning is not
 * coloured as a bad one, and the only green is the chip when the average fell.
 */
export function MorningsCard({ range, onNextRange, bars, summary, start, total, counts }: MorningsCardProps) {
  const t = useT();
  const language = useLanguage();
  const waiting = total < CHART_MIN_READINGS;
  const title = t('progress.painTitle');
  const rangeLabel = t(RANGE_LABEL[range]);

  return (
    <ProgressCard>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={title + ', ' + rangeLabel}
        accessibilityHint={t('progress.rangeHint')}
        hitSlop={6}
        disabled={waiting}
        onPress={() => {
          void Haptics.selectionAsync();
          onNextRange();
        }}
        style={({ pressed }) => [styles.switcher, pressed && styles.pressed]}>
        <Text style={styles.label}>
          {waiting ? title : title + ' · ' + rangeLabel}
        </Text>
        {!waiting && <HugeiconsIcon icon={ArrowUpDownIcon} size={18} color={colors.text3} strokeWidth={2} />}
      </Pressable>

      {waiting ? (
        <Waiting total={total} />
      ) : (
        <>
          <CardHead
            aside={
              <View style={styles.waitingIcon} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
                <FluentIcon name="sunrise" size={30} />
              </View>
            }>
            <View
              accessible
              accessibilityLabel={
                summary.average == null
                  ? t('progress.painNoneInRange')
                  : t('progress.painChartA11y', { value: formatNumber(summary.average, language) })
              }>
              <BigNumber
                value={summary.average == null ? '–' : formatNumber(summary.average, language)}
                unit={t('progress.painOutOf')}
                size={48}
                maxScale={NUMBER_SCALE}
              />
            </View>
          </CardHead>
          {summary.delta != null &&
            (summary.delta === 0 ? (
              <Chip label={t('progress.deltaSame')} />
            ) : (
              <Chip
                icon={summary.delta < 0 ? ArrowDown02Icon : ArrowUp02Icon}
                label={formatNumber(Math.abs(summary.delta), language)}
                accessibilityLabel={t(DELTA_KEY[range], { delta: formatSigned(summary.delta, language) })}
                improving={summary.delta < 0}
              />
            ))}
          <Chart range={range} bars={bars} start={start} />
          <View style={styles.counts}>
            {(
              [
                ['progress.painRowNoPain', counts.none],
                ['progress.painRowPain', counts.pain],
                ['progress.painRowNone', counts.unlogged],
              ] as const
            ).map(([key, value]) => (
              <View key={key} accessible accessibilityLabel={t(key) + ': ' + value} style={styles.countRow}>
                <Text style={styles.countLabel}>{t(key)}</Text>
                <Text style={styles.countValue} maxFontSizeMultiplier={NUMBER_SCALE}>
                  {formatNumber(value, language, 0)}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
    </ProgressCard>
  );
}

/** The bars, the start line, the ticks and the tooltip. */
function Chart({ range, bars, start }: { range: RangeKey; bars: readonly PainBar[]; start: number | null }) {
  const t = useT();
  const language = useLanguage();
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [shownRange, setShownRange] = useState(range);
  if (shownRange !== range) {
    setShownRange(range);
    setSelected(null);
  }

  const n = bars.length;
  const slot = n > 0 ? width / n : 0;
  const barW = Math.max(3, Math.min(14, slot * (range === 'month' ? 0.5 : 0.42)));
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
            <Svg width={width} height={BARS_HEIGHT} style={StyleSheet.absoluteFill}>
              {bars.map((bar, i) => (
                <Rect key={'t' + bar.from} x={cx(i) - barW / 2} y={0} width={barW} height={BARS_HEIGHT} rx={barW / 2} fill={bitepal.track} />
              ))}
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
                    fill={lit ? bitepal.selected : colors.text3}
                    fillOpacity={lit ? 1 : 0.55}
                  />
                );
              })}
              {startY != null && (
                <Line x1={0} x2={width} y1={startY} y2={startY} stroke={colors.text3} strokeWidth={1.5} strokeDasharray="4 5" />
              )}
            </Svg>

            {startY != null && (
              <View pointerEvents="none" style={[styles.startTag, { top: Math.max(-TOOLTIP_ROOM + 4, startY - 30) }]}>
                <Text style={styles.startText} maxFontSizeMultiplier={SLOT_SCALE}>
                  {t('progress.startLine', { value: formatNumber(start ?? 0, language) })}
                </Text>
              </View>
            )}

            {empty && (
              <View style={styles.noneWrap} pointerEvents="none">
                <Text style={styles.none}>{t('progress.painNoneInRange')}</Text>
              </View>
            )}

            <Pressable style={StyleSheet.absoluteFill} onPress={(e) => onPress(e.nativeEvent.locationX)} accessible={false} />

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
                <View style={styles.tooltip}>
                  <Text style={styles.tipValue} maxFontSizeMultiplier={SLOT_SCALE}>
                    {formatNumber(tip.value, language)}
                    {t('progress.painOutOf')}
                  </Text>
                  <Text style={styles.tipDate} numberOfLines={1} maxFontSizeMultiplier={SLOT_SCALE}>
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
                range === 'week' ? formatDateKey(bar.from, language, 'weekday') : formatDateKey(bar.from, language, 'dayMonth');
              const lit = i === highlighted;
              const tickWidth = range === 'week' ? slot : TICK_WIDTH;
              return (
                <Text
                  key={bar.from}
                  numberOfLines={1}
                  maxFontSizeMultiplier={SLOT_SCALE}
                  style={[
                    styles.tick,
                    lit && styles.tickLit,
                    { width: tickWidth, left: Math.max(0, Math.min(width - tickWidth, cx(i) - tickWidth / 2)) },
                  ]}>
                  {label}
                </Text>
              );
            })}
          </View>

          <View
            style={styles.a11yList}
            accessible
            accessibilityLabel={bars
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

/** Before three mornings: how many more, as three thin steps. */
function Waiting({ total }: { total: number }) {
  const t = useT();
  const large = useLargeText();
  const toGo = Math.max(0, CHART_MIN_READINGS - total);
  return (
    <View style={styles.waiting}>
      <View style={[styles.waitingHead, large && styles.waitingStacked]}>
        <Text style={styles.waitingText}>{t('progress.painToGo', { count: toGo })}</Text>
        <View style={styles.waitingIcon}>
          <FluentIcon name="sunrise" size={30} />
        </View>
      </View>
      <View style={styles.steps} accessible accessibilityLabel={t('progress.painToGoSteps', { done: total, total: CHART_MIN_READINGS })}>
        {Array.from({ length: CHART_MIN_READINGS }, (_, i) => (
          <Bar key={i} value={i < total ? 1 : 0} color={bitepal.selected} style={styles.step} />
        ))}
      </View>
      <Text style={styles.caption}>{t('progress.painToGoSteps', { done: total, total: CHART_MIN_READINGS })}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  switcher: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start', minHeight: target.min - 16 },
  pressed: { opacity: 0.6 },
  label: { ...fonts.semibold(17), color: colors.text3, flexShrink: 1 },
  caption: { ...fonts.medium(17), color: colors.text3 },
  chart: { paddingTop: TOOLTIP_ROOM },
  bars: { height: BARS_HEIGHT },
  startTag: { position: 'absolute', right: 0, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, backgroundColor: colors.surface },
  startText: { ...fonts.semibold(17), color: colors.text3 },
  noneWrap: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
  none: { ...fonts.medium(17), color: colors.text2, textAlign: 'center', backgroundColor: colors.surface, padding: 6, borderRadius: 10 },
  tooltipSlot: { position: 'absolute', width: TOOLTIP_WIDTH, alignItems: 'center' },
  tooltip: { borderRadius: 14, borderCurve: 'continuous', paddingHorizontal: 12, paddingVertical: 6, alignItems: 'center', backgroundColor: bitepal.primary },
  tipValue: { ...fonts.heavy(19), color: bitepal.onPrimary, fontVariant: ['tabular-nums'] },
  tipDate: { ...fonts.medium(17), color: bitepal.onPrimary },
  ticks: { height: TICKS_HEIGHT, marginTop: 8 },
  tick: { ...fonts.medium(17), color: colors.text3, position: 'absolute', width: TICK_WIDTH, textAlign: 'center' },
  tickLit: { ...fonts.bold(17), color: colors.text },
  a11yList: { position: 'absolute', width: 1, height: 1, opacity: 0 },
  counts: { gap: 4 },
  countRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, minHeight: 40 },
  countLabel: { ...fonts.medium(17), color: colors.text2, flexShrink: 1 },
  countValue: { ...fonts.heavy(22), color: colors.text, fontVariant: ['tabular-nums'] },
  waiting: { gap: 12 },
  waitingHead: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  waitingStacked: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  waitingText: { ...fonts.bold(22, -0.3), color: colors.text, flex: 1 },
  waitingIcon: { width: 64, height: 64, borderRadius: 32, backgroundColor: bitepal.well, alignItems: 'center', justifyContent: 'center' },
  steps: { flexDirection: 'row', gap: 6 },
  step: { flex: 1 },
});
