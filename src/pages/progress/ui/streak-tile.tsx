import type { Icon } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/** The radius `PerformanceCard` uses. These sit directly under it, and two
 * different corners in the same column read as two different design systems. */
const RADIUS = 28;
const ICON_SIZE = 30;

export type StreakTileProps = {
  icon: Icon;
  /** Names the metric, never rates it — the flame is orange because it is the
   * streak, and it stays orange at one day and at ninety. */
  tint: string;
  /** Whole days. Formatted here so the two tiles cannot disagree about how a
   * count is written. */
  days: number;
  label: string;
};

/**
 * One standing figure: a glyph, the count, and what it counts.
 *
 * Built to sit two-up. Everything above the text block is fixed height, so a
 * pair of these line up on the value and the caption without either card
 * having to know what the other one holds.
 */
export function StreakTile({ icon: Glyph, tint, days, label }: StreakTileProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const count = t('streak.dayCount', { count: days });

  return (
    // One tile, one fact. Left to itself the count and the caption are read as
    // two unrelated fragments — "12 days", then "Longest Streak" — with an
    // unnamed glyph in front of them, and the tint that ties the two together
    // is the one part that cannot be read at all.
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={t('streak.tileA11y', { label, days: count })}
      style={[styles.card, { backgroundColor: colors.card }]}>
      <Glyph size={ICON_SIZE} weight="fill" color={tint} />
      <View style={styles.text}>
        <Text style={[styles.value, { color: colors.foreground }]}>{count}</Text>
        <Text style={[styles.label, { color: meter.caption }]} numberOfLines={1}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    padding: 18,
  },
  text: {
    marginTop: 26,
  },
  value: {
    fontSize: 24,
    fontFamily: fonts.bold,
    letterSpacing: -0.6,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.medium,
    letterSpacing: -0.2,
    marginTop: 2,
  },
});
