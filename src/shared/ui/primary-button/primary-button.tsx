import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts, primaryButton } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Tall on purpose.
 *
 * A 76pt target is roughly double the platform minimum, and that is the point:
 * on a screen whose whole job is to move you to the next step, the button
 * should be the largest thing your thumb can find without looking. It also
 * gives the label room to sit optically centred rather than crammed.
 */
export const PRIMARY_BUTTON_HEIGHT = 76;
/** Squircle, not a capsule. At h/2 the ends bow out and the button reads as a
 * pill floating in the layout; a little under half keeps it a rounded slab. */
const RADIUS = 32;

const PRESS_IN_MS = 90;
const PRESS_OUT_MS = 160;
/** How far the face shrinks under a finger. Small — a big scale on something
 * this large reads as the screen lurching, not as a press. */
const PRESS_SCALE = 0.975;

export type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  /** Trailing glyph, e.g. an arrow. */
  icon?: IconSvgElement;
  /** Dims and stops responding, for a step with nothing chosen yet. */
  disabled?: boolean;
  /**
   * Overrides the face colour, for the one case where the button has to answer
   * for the value above it rather than for the screen it sits on.
   *
   * The label travels with the fill. A fixed dark label would vanish on a deep
   * red and a fixed white one on a bright amber, so the caller hands over the
   * pair or neither — there is no safe default for an arbitrary hue.
   */
  tint?: { fill: string; label: string };
  style?: StyleProp<ViewStyle>;
};

/**
 * The app's committing action: one per screen, always the same shape.
 *
 * Haptics fire on press-*in* rather than on the tap completing. The feedback
 * is meant to confirm the finger landed, so it has to arrive while the finger
 * is still down — firing it on release lands after the navigation has already
 * started and reads as a delayed rattle.
 */
export function PrimaryButton({
  label,
  onPress,
  icon,
  disabled = false,
  tint,
  style,
}: PrimaryButtonProps) {
  const scheme = useColorScheme();
  const theme = tint ?? primaryButton[scheme];

  const pressed = useSharedValue(0);
  const faceStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - pressed.value * (1 - PRESS_SCALE) }],
  }));

  return (
    <Animated.View style={[style, faceStyle]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        disabled={disabled}
        onPressIn={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          pressed.value = withTiming(1, {
            duration: PRESS_IN_MS,
            easing: Easing.out(Easing.quad),
            reduceMotion: ReduceMotion.System,
          });
        }}
        onPressOut={() => {
          // Timing, never a spring — the face has to settle at rest, not
          // overshoot past its own size.
          pressed.value = withTiming(0, {
            duration: PRESS_OUT_MS,
            easing: Easing.out(Easing.cubic),
            reduceMotion: ReduceMotion.System,
          });
        }}
        onPress={onPress}
        style={[styles.face, { backgroundColor: theme.fill }, disabled && styles.disabled]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.label }]} numberOfLines={1}>
            {label}
          </Text>
          {icon != null && (
            <HugeiconsIcon icon={icon} size={20} color={theme.label} strokeWidth={2.2} />
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  face: {
    height: PRIMARY_BUTTON_HEIGHT,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.semibold,
    letterSpacing: -0.1,
  },
  disabled: {
    opacity: 0.35,
  },
});
