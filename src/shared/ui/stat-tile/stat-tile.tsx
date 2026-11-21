import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { CHROME_MAX_FONT_SCALE, colors, fonts, radius } from '@/shared/config';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

export type StatTileProps = {
  /** The header: "Streak", "Care days". */
  label: string;
  value: number;
  /** Writes the number. Default: the integer as it is. */
  format?: (value: number) => string;
  /** The metric's Fluent emoji, in its own colours. */
  emoji?: FluentName;
  /** A Hugeicons glyph, when there is no `emoji`. */
  icon?: IconSvgElement;
  /** The whole tile read as one: "Streak, 5 days", from the catalogue. */
  accessibilityLabel: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * One number after a session: a flat white tile with its label over the value.
 *
 * For showing up and effort only: care days, the streak, exercises from
 * today's plan, the time it planned. Never pain, never a test result.
 */
export function StatTile({ label, value, format = String, emoji, icon, accessibilityLabel, style }: StatTileProps) {
  return (
    <View accessible accessibilityLabel={accessibilityLabel} style={[styles.tile, style]}>
      <Text style={styles.label} numberOfLines={1} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
        {label}
      </Text>
      <View style={styles.row}>
        {emoji != null ? (
          <FluentIcon name={emoji} size={20} />
        ) : (
          icon != null && <HugeiconsIcon icon={icon} size={20} color={colors.text} strokeWidth={2} />
        )}
        <Text style={styles.value}>{format(value)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    minWidth: 96,
    gap: 6,
    padding: 14,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    backgroundColor: colors.surface,
  },
  label: { ...fonts.medium(15), color: colors.text2 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  value: { ...fonts.bold(24), color: colors.text, fontVariant: ['tabular-nums'] },
});
