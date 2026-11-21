import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type AccessibilityRole, type StyleProp, type ViewStyle } from 'react-native';

import { colors, radius, space } from '@/shared/config';

export type CardProps = {
  children: ReactNode;
  onPress?: () => void;
  padding?: number;
  style?: StyleProp<ViewStyle>;
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

/** An opaque white card: radius 20, no shadow. Pressable when given `onPress`. */
export function Card({ children, onPress, padding = space.card, style, ...a11y }: CardProps) {
  if (onPress == null) {
    return (
      <View style={[styles.card, { padding }, style]} {...a11y}>
        {children}
      </View>
    );
  }
  return (
    <Pressable
      accessibilityRole="button"
      {...a11y}
      onPress={onPress}
      style={({ pressed }) => [styles.card, { padding, opacity: pressed ? 0.7 : 1 }, style]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
  },
});
