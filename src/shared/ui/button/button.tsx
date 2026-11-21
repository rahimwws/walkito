import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { colors, fonts, radius } from '@/shared/config';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'lg' | 'md' | 'sm';

export const BUTTON_HEIGHT = 56;

const SIZES = {
  lg: { height: BUTTON_HEIGHT, label: fonts.semibold(17), padX: 24, icon: 20, gap: 8 },
  md: { height: 48, label: fonts.semibold(17), padX: 20, icon: 18, gap: 8 },
  sm: { height: 40, label: fonts.semibold(15), padX: 14, icon: 16, gap: 6 },
} as const;

const FACES = {
  primary: { fill: colors.ink, label: colors.onInk },
  secondary: { fill: colors.surface2, label: colors.text },
  ghost: { fill: 'transparent', label: colors.accent },
} as const;

export type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconSvgElement;
  iconPosition?: 'leading' | 'trailing';
  leading?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  align?: 'start' | 'center' | 'end';
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
};

const ALIGN = { start: 'flex-start', center: 'center', end: 'flex-end' } as const;

/**
 * The app's flat button. `primary` is the black fill with a white label,
 * `secondary` the grey one, `ghost` only its label.
 */
export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'lg',
  icon,
  iconPosition = 'trailing',
  leading,
  loading = false,
  disabled = false,
  fullWidth = size === 'lg',
  align = 'center',
  accessibilityLabel,
  accessibilityHint,
  style,
}: ButtonProps) {
  const metrics = SIZES[size];
  const face = FACES[variant];
  const glyph =
    icon != null ? <HugeiconsIcon icon={icon} size={metrics.icon} color={face.label} strokeWidth={2} /> : null;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled, busy: loading }}
      disabled={disabled}
      onPressIn={() => {
        if (!loading) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }}
      onPress={loading ? undefined : onPress}
      style={({ pressed }) => [
        styles.face,
        {
          height: metrics.height,
          paddingHorizontal: metrics.padX,
          backgroundColor: face.fill,
          alignSelf: fullWidth ? 'stretch' : ALIGN[align],
          opacity: disabled ? 0.35 : pressed && !loading ? 0.7 : 1,
        },
        style,
      ]}>
      <View style={[styles.row, { gap: metrics.gap, opacity: loading ? 0 : 1 }]}>
        {leading}
        {iconPosition === 'leading' && glyph}
        <Text style={[metrics.label, { color: face.label }]} numberOfLines={1} maxFontSizeMultiplier={1.4}>
          {label}
        </Text>
        {iconPosition === 'trailing' && glyph}
      </View>
      {loading && (
        <View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.center]}>
          <ActivityIndicator color={face.label} size="small" />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  face: {
    borderRadius: radius.button,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  center: { alignItems: 'center', justifyContent: 'center' },
});
