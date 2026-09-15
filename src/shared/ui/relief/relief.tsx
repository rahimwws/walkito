import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { shade } from '@/shared/lib/color';
import { useColorScheme } from '@/shared/lib/theme';

/** Depth of the ledge under a raised surface — also exactly how far a press
 * travels, which is what sells it as a physical object rather than a shadow. */
export const RELIEF_DEPTH = 4;

const PRESS_DOWN_MS = 60;
const PRESS_UP_MS = 120;

/** How far a ledge is darkened from the face it sits under. */
const LEDGE_DEPTH = { surface: 0.14, tinted: 0.3 } as const;

export type ReliefProps = {
  children: ReactNode;
  /** Face colour. Defaults to the card surface. */
  fill?: string;
  /** Outline around the face. Pass `'transparent'` for a tinted surface that
   * carries its own edge. */
  border?: string;
  radius?: number;
  /** Omit to make an inert surface — a card rather than a button. */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

/**
 * A raised surface sitting on a darker ledge, which a press collapses.
 *
 * The whole illusion is that the ledge is *behind* the face rather than a
 * shadow under it, so the face has somewhere to go. That is why the depth
 * constant is shared between the ledge height and the press travel — if they
 * ever disagreed, a pressed surface would either float above its own base or
 * sink through it.
 *
 * The path nodes deliberately do *not* use this. A sliver of ledge peeking out
 * from under a ringed circle reads as a stray arc, not as depth; the shape has
 * to have a flat bottom edge for the trick to work.
 */
export function Relief({
  children,
  fill,
  border,
  radius = 20,
  onPress,
  style,
  contentStyle,
}: ReliefProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const face = fill ?? colors.card;
  const edge = border ?? meter.track;

  // A tinted face has room to cast a real shadow, so its ledge is just a
  // darker version of itself. The default card surface does not: in dark mode
  // the card and the page behind it are a few points apart, and a ledge
  // darkened from the card lands *behind* the background and disappears. There
  // the outline tone doubles as the ledge — the card reads as a box whose
  // bottom wall is thicker, which is the same trick and survives both schemes.
  const ledge =
    fill != null
      ? shade(face, LEDGE_DEPTH.tinted)
      : scheme === 'dark'
        ? edge
        : shade(face, LEDGE_DEPTH.surface);

  const pressed = useSharedValue(0);
  const faceStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: pressed.value * RELIEF_DEPTH }],
  }));

  const faceSkin = { backgroundColor: face, borderColor: edge, borderRadius: radius };

  return (
    <View style={[{ paddingBottom: RELIEF_DEPTH }, style]}>
      <View
        style={[
          styles.ledge,
          { top: RELIEF_DEPTH, backgroundColor: ledge, borderRadius: radius },
        ]}
      />
      <Animated.View style={faceStyle}>
        {/* A plain View when there's nothing to press, rather than a disabled
            Pressable — an inert card must not sit in the responder path of the
            button nested inside it. */}
        {onPress == null ? (
          <View style={[styles.face, faceSkin, contentStyle]}>{children}</View>
        ) : (
          <Pressable
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onPress();
            }}
            onPressIn={() => {
              pressed.value = withTiming(1, { duration: PRESS_DOWN_MS });
            }}
            onPressOut={() => {
              // Timing, never a spring: a released surface has to stop when it
              // meets its ledge again, not bounce off it.
              pressed.value = withTiming(0, {
                duration: PRESS_UP_MS,
                easing: Easing.out(Easing.cubic),
              });
            }}
            style={[styles.face, faceSkin, contentStyle]}>
            {children}
          </Pressable>
        )}
      </Animated.View>
    </View>
  );
}

export type ReliefButtonProps = {
  label: string;
  onPress: () => void;
  icon?: IconSvgElement;
  /** Tints the face. Omit for ink, the app's primary action colour. */
  accent?: AccentName;
  style?: StyleProp<ViewStyle>;
};

/** A raised button: uppercase, heavy, and it presses onto its ledge. */
export function ReliefButton({ label, onPress, icon, accent, style }: ReliefButtonProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];

  const face = accent ? accents[scheme][accent].fill : colors.foreground;
  const ink = accent ? '#FFFFFF' : colors.background;

  return (
    <Relief
      fill={face}
      border="transparent"
      radius={16}
      onPress={onPress}
      style={style}
      contentStyle={styles.button}>
      {icon != null && <HugeiconsIcon icon={icon} size={20} color={ink} strokeWidth={2.4} />}
      <Text style={[styles.buttonLabel, { color: ink }]}>{label.toUpperCase()}</Text>
    </Relief>
  );
}

const styles = StyleSheet.create({
  ledge: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderCurve: 'continuous',
  },
  face: {
    borderWidth: 2,
    borderCurve: 'continuous',
  },
  button: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontFamily: fonts.heavy,
    letterSpacing: 0.8,
  },
});
