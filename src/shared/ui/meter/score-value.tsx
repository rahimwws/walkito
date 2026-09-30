import { StyleSheet, Text, View } from 'react-native';

import { meterColors } from '@/shared/config';
import { fonts } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * A score, rendered the one way the app renders scores: the number in ink with
 * a muted `/100` beside it. Never a percentage — `%` is reserved for goal
 * progress (the daily-goal ring), so using it for a score would collide.
 *
 * The `/100` is sized relative to the value so the pair keeps its proportions
 * from the 19px record row up to the 56px results hero.
 */
export type ScoreValueProps = {
  /** 0–100, or null when the metric has no data yet (renders an em-less dash). */
  value: number | null;
  size: number;
  /** Defaults to `size * 0.37`, matching the design across every scale. */
  maxSize?: number;
};

export function ScoreValue({ value, size, maxSize }: ScoreValueProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = meterColors[scheme];
  const unitSize = maxSize ?? Math.round(size * 0.37);

  if (value == null) {
    return <Text style={[fonts.heavy(size), { color: theme.unit }]}>-</Text>;
  }

  return (
    <View style={styles.row}>
      <Text style={[fonts.heavy(size, size * -0.028), { color: theme.ink }]}>
        {Math.round(value)}
      </Text>
      <Text style={[fonts.semibold(unitSize), { color: theme.unit }]}>/100</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 3,
  },
});
