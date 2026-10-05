import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette, type AccentName, accents } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { PlanChip } from '@/shared/ui/plan-chip';

export type NextWeekDay = { date: string; label: string; accent: AccentName };

/**
 * What happens after this week, answered on the screen rather than left to be
 * guessed: next week's shape as it stands today, and the one line saying it is
 * planned again on Sunday from how this week went.
 */
export function NextWeekCard({ summary, days, how }: { summary: string; days: readonly NextWeekDay[]; how: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.summary, { color: colors.foreground }]}>{summary}</Text>
      {days.length > 0 && (
        <View style={styles.chips}>
          {days.map((day) => (
            <PlanChip key={day.date} label={day.label} tone={accents[scheme][day.accent]} />
          ))}
        </View>
      )}
      <Text style={[styles.how, { color: meter.caption }]}>{how}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 12,
  },
  summary: {
    ...fonts.bold(17, -0.2),
    lineHeight: 23,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  how: {
    ...fonts.medium(15),
    lineHeight: 21,
  },
});
