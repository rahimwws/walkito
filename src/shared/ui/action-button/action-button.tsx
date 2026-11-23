import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';

import { fonts } from '@/shared/config';
import { colors, radius, target } from '@/shared/config';

export type ActionButtonProps = {
  label: string;
  onPress: () => void;
  /** Leading glyph. Omit for a label-only button. */
  icon?: IconSvgElement;
  style?: StyleProp<ViewStyle>;
};

/**
 * The screen's one commitment: the solid black button, 56pt tall, with an
 * optional leading glyph. Content is opaque, so this never draws glass.
 */
export function ActionButton({ label, onPress, icon, style }: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
      }}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}>
      {icon != null && <HugeiconsIcon icon={icon} size={22} color={colors.onInk} strokeWidth={2} />}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: target.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
    borderRadius: radius.button,
    borderCurve: 'continuous',
    backgroundColor: colors.ink,
  },
  pressed: { opacity: 0.85 },
  label: { ...fonts.semibold(19), color: colors.onInk, textAlign: 'center', flexShrink: 1 },
});
