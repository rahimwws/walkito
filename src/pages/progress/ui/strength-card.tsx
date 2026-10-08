import BodyPartLegIcon from '@hugeicons/core-free-icons/BodyPartLegIcon';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { ZONE_META } from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT, type Key, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { formatDateKey, formatNumber, formatSigned } from '../model/format';
import type { StrengthKey, StrengthTrend } from '../model/progress-data';
import { Card, DeltaChip } from './card';
import { Sparkline } from './sparkline';

/** Each test's colour and glyph: the zone's own (`ZONE_META`), the same ones
 * the test screens and the results wear, and the goal below. */
const META: Record<StrengthKey, { tone: AccentName; icon: typeof BodyPartLegIcon; name: Key; reps: boolean }> = {
  calf: { tone: ZONE_META.calf.accent, icon: ZONE_META.calf.icon, name: 'progress.calfName', reps: true },
  balance: { tone: ZONE_META.balance.accent, icon: ZONE_META.balance.icon, name: 'progress.balanceName', reps: false },
  arch: { tone: ZONE_META.arch.accent, icon: ZONE_META.arch.icon, name: 'progress.archName', reps: false },
};

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

/**
 * The three tests, each as a row: what it is, every result so far as a
 * sparkline, the latest figure, and the change since the first test.
 */
export function StrengthCard({
  trends,
  nextTest,
  today,
}: {
  trends: readonly StrengthTrend[];
  /** `YYYY-MM-DD` the next test is due, or null before the first. */
  nextTest: string | null;
  today: string;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const tested = trends.some((trend) => trend.latest != null);
  const compared = trends.some((trend) => trend.delta != null);

  return (
    <View>
      <Card title={t('progress.strengthTitle')}>
        <View style={styles.rows}>
          {trends.map((trend, i) => (
            <StrengthRow key={trend.key} trend={trend} first={i === 0} />
          ))}
        </View>
        {(!tested || compared) && (
          <Text style={[styles.caption, { color: meter.caption }]}>
            {tested ? t('progress.strengthDeltaCaption') : t('progress.strengthEmpty')}
          </Text>
        )}
      </Card>
      {nextTest != null && (
        <View style={styles.next}>
          <HugeiconsIcon icon={Calendar03Icon} size={16} color={meter.label} strokeWidth={1.8} />
          <Text style={[styles.nextText, { color: meter.label }]}>
            {nextTest <= today
              ? t('progress.nextTestToday')
              : t('progress.nextTest', { date: formatDateKey(nextTest, language, 'dayMonth') })}
          </Text>
        </View>
      )}
    </View>
  );
}

function StrengthRow({ trend, first }: { trend: StrengthTrend; first: boolean }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const t = useT();
  const language = useLanguage();
  const meta = META[trend.key];
  const accent = accents[scheme][meta.tone];
  const name = t(meta.name);
  const unit = unitOf(trend, t);
  const change = changeOf(trend, t, language);
  const value = trend.latest == null ? '–' : formatNumber(trend.latest, language);

  return (
    <View
      accessible
      accessibilityLabel={t('progress.strengthRowA11y', { name, value, unit, change })}
      style={[styles.row, !first && { borderTopColor: meter.divider, borderTopWidth: StyleSheet.hairlineWidth }]}>
      <View style={[styles.tile, { backgroundColor: accent.track }]}>
        <HugeiconsIcon icon={meta.icon} size={22} color={accent.fill} strokeWidth={1.8} />
      </View>

      <View style={styles.middle}>
        <Text style={[styles.name, { color: colors.foreground }]} numberOfLines={1}>
          {name}
        </Text>
        <Sparkline values={trend.values} accent={accent} id={trend.key} />
      </View>

      <View style={styles.right}>
        <Text style={styles.valueLine} numberOfLines={1}>
          <Text style={[styles.value, { color: meter.ink }]}>{value}</Text>
          {trend.latest != null && <Text style={[styles.unit, { color: meter.unit }]}> {unit}</Text>}
        </Text>
        <DeltaChip label={change} improving={trend.delta != null && trend.delta > 0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rows: { marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  tile: {
    width: 42,
    height: 42,
    borderRadius: 13,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: { flex: 1, gap: 4 },
  name: fonts.semibold(16, -0.2),
  right: { alignItems: 'flex-end', gap: 5, minWidth: 76, maxWidth: 130 },
  valueLine: { textAlign: 'right' },
  value: { ...fonts.bold(22, -0.5), fontVariant: ['tabular-nums'] },
  unit: fonts.semibold(13),
  caption: { ...fonts.medium(13), lineHeight: 18, marginTop: 4 },
  next: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10, paddingHorizontal: 6 },
  nextText: fonts.medium(13),
});
