import { GlassView } from 'expo-glass-effect';
import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors } from '@/shared/config/tokens';

import { useNavGlass } from './use-nav-glass';

export type NavGlassProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  /**
   * `regular` wherever there is text. `clear` only over a clip or a photo,
   * and it brings its own 35% dim so the controls stay readable.
   */
  variant?: 'regular' | 'clear';
  /** Reacts to touch, for a control rather than a backdrop. */
  interactive?: boolean;
  /** A prominent control's colour (the floating Start): the glass is tinted
   * with it, and the solid fallback is filled with it. */
  tint?: string;
};

/**
 * A surface on the navigation layer: player controls over a clip, a floating
 * bar. Liquid Glass on iOS 26+, and white at 96% with a hairline everywhere
 * else (older iOS, Reduce Transparency, Android).
 *
 * Never fade it with opacity, here or on a parent: glass under opacity stops
 * rendering. To hide it, unmount it.
 */
export function NavGlass({ children, style, variant = 'regular', interactive = false, tint }: NavGlassProps) {
  const glass = useNavGlass();
  if (!glass) return <View style={[styles.solid, tint != null && { backgroundColor: tint, borderWidth: 0 }, style]}>{children}</View>;
  return (
    <GlassView glassEffectStyle={variant} isInteractive={interactive} tintColor={tint} style={style}>
      {variant === 'clear' && <View style={[StyleSheet.absoluteFill, styles.dim]} pointerEvents="none" />}
      {children}
    </GlassView>
  );
}

const styles = StyleSheet.create({
  solid: {
    backgroundColor: colors.glassFallback,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
  dim: { backgroundColor: 'rgba(0,0,0,0.35)' },
});
