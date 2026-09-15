import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

export type DateHeaderProps = {
  /** Epoch ms. Passed in rather than read here so the header is testable and
   * can follow a shared clock. */
  date: number;
  /** Actions pinned to the trailing edge, e.g. a filter button and an avatar. */
  trailing?: ReactNode;
};

/**
 * Screen header built around the date: the day in display weight with the
 * month riding its baseline, and a trailing slot for actions.
 */
export function DateHeader({ date, trailing }: DateHeaderProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const colors = palette[scheme];
  const theme = meterColors[scheme];

  const d = new Date(date);

  return (
    <View style={styles.row}>
      <View style={styles.date}>
        <Text style={[styles.day, { color: colors.foreground }]}>{d.getDate()}</Text>
        <Text style={[styles.month, { color: theme.label }]}>{MONTHS[d.getMonth()]}</Text>
      </View>
      {trailing}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  day: {
    fontSize: 44,
    fontFamily: fonts.heavy,
    letterSpacing: -1.2,
  },
  month: {
    fontSize: 24,
    fontFamily: fonts.semibold,
    letterSpacing: -0.3,
  },
});
