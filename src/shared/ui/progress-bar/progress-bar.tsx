import type { ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, fonts } from '@/shared/config';

export type ProgressBarProps = {
  /** 0 to 1. */
  value: number;
  label?: string;
  trailing?: ReactNode;
  accessibilityLabel: string;
  accessibilityValueText?: string;
  style?: StyleProp<ViewStyle>;
};

/** A flat violet bar on a grey track. */
export function ProgressBar({
  value,
  label,
  trailing,
  accessibilityLabel,
  accessibilityValueText,
  style,
}: ProgressBarProps) {
  const clamped = Math.min(1, Math.max(0, value));
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min: 0, max: 100, now: Math.round(clamped * 100), text: accessibilityValueText }}
      style={[styles.row, style]}>
      <View style={styles.column}>
        {label != null && <Text style={styles.label}>{label}</Text>}
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${clamped * 100}%` }]} />
        </View>
      </View>
      {trailing}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  column: { flex: 1, gap: 6 },
  label: { ...fonts.medium(15), color: colors.text2 },
  track: { height: 8, borderRadius: 4, backgroundColor: colors.surface2, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 4, backgroundColor: colors.accent },
});
