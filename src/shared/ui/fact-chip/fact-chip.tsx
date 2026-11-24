import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, fonts, target } from '@/shared/config';

export type FactChipProps = {
  icon: IconSvgElement;
  /** The value, as short as it reads: "2 min", "3 × 10", "Standing". */
  label: string;
  accessibilityLabel?: string;
  /** A chip that opens something ("Why today"): violet, and a button. */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

/**
 * A fact in a grey capsule, its glyph first: what a caption under a row used
 * to say in a sentence ("2 min in bed, tomorrow morning" is a clock and "2
 * min"). Body size, so it stays readable; one line.
 */
export function FactChip({ icon, label, accessibilityLabel, onPress, style }: FactChipProps) {
  const ink = onPress != null ? colors.accent : colors.text;
  const body = (
    <>
      <HugeiconsIcon icon={icon} size={18} color={onPress != null ? colors.accent : colors.text2} strokeWidth={2} />
      <Text style={[styles.label, { color: ink }]} numberOfLines={1}>
        {label}
      </Text>
    </>
  );
  if (onPress == null) {
    return (
      <View accessible accessibilityLabel={accessibilityLabel ?? label} style={[styles.chip, style]}>
        {body}
      </View>
    );
  }
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      hitSlop={(target.min - HEIGHT) / 2}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.chip, style, pressed && styles.pressed]}>
      {body}
    </Pressable>
  );
}

const HEIGHT = 36;

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    minHeight: HEIGHT,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: colors.surface2,
  },
  label: { ...fonts.semibold(17), flexShrink: 1 },
  pressed: { opacity: 0.6 },
});
