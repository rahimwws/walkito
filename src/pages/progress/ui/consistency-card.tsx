import Award01Icon from '@hugeicons/core-free-icons/Award01Icon';
import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import type { DayAttendance } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { formatDateKey } from '../model/format';
import { heatSummary } from '../model/progress-data';
import { Card } from './card';

/**
 * Turning up: four weeks of days as a grid, then the two streaks.
 *
 * A done day is violet, a rest day the plan asked for is the same violet
 * faded — rest counts, and the grid says so without a second colour. A day
 * that was missed is only an empty square; nothing on the card scolds.
 */
export function ConsistencyCard({
  weeks,
  current,
  longest,
}: {
  /** Monday-first weeks, oldest first, the current week last. */
  weeks: readonly (readonly DayAttendance[])[];
  current: number;
  longest: number;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const violet = accents[scheme].violet;
  const t = useT();
  const language = useLanguage();

  const cells = weeks.flat();
  const { done, total } = heatSummary(
    cells.map((day) => ({ attended: day.attended, future: day.future, inPlan: day.dayNumber != null })),
  );

  return (
    <Card
      title={t('progress.consistencyTitle')}
      aside={<Text style={[styles.aside, { color: meter.caption }]}>{t('progress.last4Weeks')}</Text>}>
      <View style={styles.grid} accessible accessibilityLabel={t('progress.heatA11y', { done, total })}>
        <View style={styles.weekRow}>
          {(weeks[0] ?? []).map((day) => (
            <Text key={day.date} style={[styles.weekday, { color: meter.label }]}>
              {formatDateKey(day.date, language, 'weekday')}
            </Text>
          ))}
        </View>
        {weeks.map((week) => (
          <View key={week[0]?.date} style={styles.weekRow}>
            {week.map((day) => {
              const inPlan = day.dayNumber != null;
              const fill = day.attended
                ? day.rest
                  ? violet.track
                  : violet.fill
                : !inPlan || day.future
                  ? 'transparent'
                  : meter.track;
              return (
                <View
                  key={day.date}
                  style={[
                    styles.cell,
                    { backgroundColor: fill },
                    (!inPlan || day.future) && !day.attended && { borderWidth: 1.5, borderColor: meter.track },
                    day.isToday && { borderWidth: 2, borderColor: violet.fill },
                  ]}
                />
              );
            })}
          </View>
        ))}
      </View>

      <View style={styles.legend} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <View style={[styles.swatch, { backgroundColor: violet.fill }]} />
        <Text style={[styles.legendText, { color: meter.label }]}>{t('progress.heatDone')}</Text>
        <View style={[styles.swatch, styles.swatchGap, { backgroundColor: violet.track }]} />
        <Text style={[styles.legendText, { color: meter.label }]}>{t('progress.heatRest')}</Text>
      </View>

      <View style={[styles.stats, { borderTopColor: meter.divider }]}>
        <Stat
          icon={FireIcon}
          tint={accents[scheme].orange.fill}
          value={t('streak.dayCount', { count: current })}
          label={t('progress.currentStreak')}
          color={colors.foreground}
          caption={meter.caption}
        />
        <View style={[styles.rule, { backgroundColor: meter.divider }]} />
        <Stat
          icon={Award01Icon}
          tint={accents[scheme].amber.fill}
          value={t('streak.dayCount', { count: longest })}
          label={t('progress.longestStreak')}
          color={colors.foreground}
          caption={meter.caption}
        />
      </View>
      <Text style={[styles.caption, { color: meter.caption }]}>{t('progress.streakCaption')}</Text>
    </Card>
  );
}

function Stat({
  icon,
  tint,
  value,
  label,
  color,
  caption,
}: {
  icon: typeof FireIcon;
  tint: string;
  value: string;
  label: string;
  color: string;
  caption: string;
}) {
  const t = useT();
  return (
    <View style={styles.stat} accessible accessibilityLabel={t('streak.tileA11y', { label, days: value })}>
      <HugeiconsIcon icon={icon} size={22} color={tint} strokeWidth={2} />
      <View style={styles.statCopy}>
        <Text style={[styles.statValue, { color }]} numberOfLines={1}>
          {value}
        </Text>
        <Text style={[styles.statLabel, { color: caption }]} numberOfLines={1}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aside: fonts.medium(13),
  grid: { marginTop: 12, gap: 6 },
  weekRow: { flexDirection: 'row', gap: 6 },
  weekday: { ...fonts.semibold(11), flex: 1, textAlign: 'center' },
  cell: { flex: 1, aspectRatio: 1, borderRadius: 9, borderCurve: 'continuous' },
  legend: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 12 },
  swatch: { width: 10, height: 10, borderRadius: 3 },
  swatchGap: { marginLeft: 10 },
  legendText: fonts.medium(12),
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  rule: { width: StyleSheet.hairlineWidth, alignSelf: 'stretch', marginHorizontal: 12 },
  stat: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  statCopy: { flex: 1 },
  statValue: fonts.bold(20, -0.5),
  statLabel: { ...fonts.medium(13), marginTop: 1 },
  caption: { ...fonts.medium(13), lineHeight: 18, marginTop: 12 },
});
