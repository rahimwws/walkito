import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';

export type NextWeekDay = { date: string; label: string; accent: AccentName };

/**
 * What happens after this week, answered on the screen rather than left to be
 * guessed: next week's shape as it stands today, and the one line saying it is
 * planned again on Sunday from how this week went.
 *
 * A solid 3D card, its days as colourful 3D chips: each in its kind's accent,
 * which names the kind and never rates it.
 */
export function NextWeekCard({ summary, days, how }: { summary: string; days: readonly NextWeekDay[]; how: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <Card3D material="solid" padding={16} contentStyle={styles.content}>
      <View style={styles.summaryRow}>
        <FluentIcon name="calendar" size={26} />
        <Text style={[styles.summary, { color: colors.foreground }]}>{summary}</Text>
      </View>
      {days.length > 0 && (
        <View style={styles.chips}>
          {days.map((day) => (
            <Chip3D key={day.date} label={day.label} accent={day.accent} />
          ))}
        </View>
      )}
      <Text style={[styles.how, { color: meter.caption }]}>{how}</Text>
    </Card3D>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  summary: {
    flex: 1,
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
