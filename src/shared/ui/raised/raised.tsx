import * as Haptics from 'expo-haptics';
import { useEffect, useState, type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  type AccessibilityRole,
  type AccessibilityState,
  type AccessibilityValue,
  type Insets,
  type LayoutChangeEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type AnimatedStyle,
} from 'react-native-reanimated';

import { RAISED_BORDER } from '@/shared/config';

import { GlassFace, GlassLip, GlassSheen, useGlassSurface, type SheenKind } from './glass-face';
import { useRaisedScheme } from './scheme';

/** Pass as `face` for the system material instead of a colour. */
export const GLASS_FACE = 'glass';

/**
 * Press timing. Duolingo's press is instant: the face drops onto its lip with
 * no transition at all. 60 ms reads as instant to a finger while still being
 * a few frames of motion at 120 Hz, so the drop looks like a move rather than
 * a jump; the release takes twice as long, out of the way of the next tap.
 * With Reduce Motion both become the instant swap Duolingo does anyway.
 *
 * `delayMs` is how long a touch rests before the face drops and the haptic
 * fires. React Native's scroll view does not delay touches, so with no wait
 * every scroll that starts on a control would sink it and buzz before the
 * scroll takes the touch away. 80 ms is shorter than UIKit's own 150, and a tap
 * quicker than that still gets the whole press, on release.
 */
export const RAISED_PRESS = { inMs: 60, outMs: 120, delayMs: 80 } as const;

export type RaisedHaptic = 'light' | 'medium' | 'none';

export type RaisedProps = {
  children?: ReactNode;
  /** The face colour, or `GLASS_FACE` for the system material. */
  face: string;
  /** A border around the face. Omit for a filled face. */
  edge?: string;
  edgeWidth?: number;
  /** The ledge colour. */
  lip: string;
  /**
   * The face can be seen through (a colour with alpha, the kit's drawn glass):
   * the lip is then only the crescent that shows below it (`GlassLip`), since a
   * ledge behind the face would show through it as a slab.
   */
  translucent?: boolean;
  /** Light on the face, under its content (`GlassSheen`). */
  sheen?: SheenKind;
  /** Cuts the content to the face's shape: art that leans out of a card. */
  clip?: boolean;
  /** Lip thickness, and exactly how far a press moves the face. */
  depth: number;
  radius: number;
  /** Omit to make an inert surface: a card rather than a button. */
  onPress?: () => void;
  onPressIn?: () => void;
  onLongPress?: () => void;
  /** Fired on press-in. Default light. */
  haptic?: RaisedHaptic;
  /**
   * How long a touch rests before it counts as a press. Default
   * `RAISED_PRESS.delayMs`, for anything that can sit in a scroll view; 0 for a
   * control in a fixed dock, where the drop should land on touch-down.
   */
  pressDelay?: number;
  /** Flat: no lip, no travel. Its colours are the caller's to dim. */
  disabled?: boolean;
  /** Ignores presses but keeps its shape: work in flight. */
  busy?: boolean;
  /** The outer box: margins, width, flex. */
  style?: StyleProp<ViewStyle>;
  /** The face: padding, height, alignment. */
  contentStyle?: StyleProp<ViewStyle>;
  /** Animated colours on the face, for a face whose colour moves. */
  faceAnimatedStyle?: AnimatedStyle<ViewStyle>;
  lipAnimatedStyle?: AnimatedStyle<ViewStyle>;
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityState?: AccessibilityState;
  accessibilityValue?: AccessibilityValue;
  hitSlop?: Insets | number;
  testID?: string;
  onLayout?: (event: LayoutChangeEvent) => void;
};

/**
 * A face standing on a solid lip, which a press collapses: the 3D half of the
 * kit, and what every raised control is built on.
 *
 * The lip is a shape *behind* the face, not a shadow under it, so the face has
 * somewhere to go. The container keeps `depth` of room at the bottom; the
 * ledge is the face's own shape moved down by `depth`, so it shows exactly one
 * lip below the face; a press moves the face down by that same amount, onto
 * it. Never Android elevation or an iOS shadow for the lip: both blur, and
 * both render differently on the two platforms, where a solid shape renders
 * the same.
 *
 * A glass face cannot hide a ledge behind it, so it gets a crescent instead
 * (`GlassLip`). An inert surface is a plain `View`, not a disabled
 * `Pressable`, so it never sits in the responder path of a control inside it.
 *
 * Haptics fire on press-in, while the finger is still down, for the reason
 * `PrimaryButton` gives: feedback that confirms a landing has to arrive with
 * it.
 */
export function Raised({
  children,
  face,
  edge,
  edgeWidth = RAISED_BORDER,
  lip,
  translucent = false,
  sheen,
  clip = false,
  depth,
  radius,
  onPress,
  onPressIn,
  onLongPress,
  haptic = 'light',
  pressDelay = RAISED_PRESS.delayMs,
  disabled = false,
  busy = false,
  style,
  contentStyle,
  faceAnimatedStyle,
  lipAnimatedStyle,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
  accessibilityState,
  accessibilityValue,
  hitSlop,
  testID,
  onLayout,
}: RaisedProps) {
  const scheme = useRaisedScheme();
  const surface = useGlassSurface();
  const glass = face === GLASS_FACE;
  /** The lip is a crescent, measured off the face, for any face it would show through. */
  const seeThrough = glass || translucent;
  const [measured, setMeasured] = useState({ width: 0, height: 0 });

  const travel = disabled ? 0 : depth;
  const pressed = useSharedValue(0);
  const motion = useAnimatedStyle(() => ({
    transform: [{ translateY: pressed.value * travel }],
  }));

  // A control that goes disabled or busy under a finger never hears its
  // press-out, so it would stay sunk. Bring it back up.
  useEffect(() => {
    if (disabled || busy) {
      pressed.value = withTiming(0, { duration: RAISED_PRESS.outMs, reduceMotion: ReduceMotion.System });
    }
  }, [disabled, busy, pressed]);

  const showLip = !disabled && depth > 0;
  const shape = { borderRadius: radius, borderCurve: 'continuous' as const };

  const ledge = !showLip ? null : seeThrough ? (
    <GlassLip
      width={measured.width}
      height={measured.height}
      radius={radius}
      depth={depth}
      color={lip}
      pressed={pressed}
    />
  ) : (
    <Animated.View
      pointerEvents="none"
      style={[styles.ledge, shape, { top: depth, bottom: -depth, backgroundColor: lip }, lipAnimatedStyle]}
    />
  );

  const body = (
    <Animated.View
      onLayout={
        seeThrough
          ? (event) => {
              const { width, height } = event.nativeEvent.layout;
              setMeasured((prev) =>
                prev.width === width && prev.height === height ? prev : { width, height },
              );
            }
          : undefined
      }
      style={[
        shape,
        !glass && { backgroundColor: face },
        !glass && edge != null && { borderWidth: edgeWidth, borderColor: edge },
        ((glass && surface === 'blur') || clip) && styles.clip,
        contentStyle,
        motion,
        faceAnimatedStyle,
      ]}>
      {glass && <GlassFace surface={surface} radius={radius} scheme={scheme} />}
      {sheen != null && (
        <GlassSheen radius={radius - (!glass && edge != null ? edgeWidth : 0)} scheme={scheme} kind={sheen} />
      )}
      {children}
    </Animated.View>
  );

  const state: AccessibilityState | undefined =
    accessibilityState != null || disabled || busy
      ? { ...accessibilityState, ...(disabled && { disabled: true }), ...(busy && { busy: true }) }
      : undefined;

  const a11y = {
    accessibilityRole,
    accessibilityLabel,
    accessibilityHint,
    accessibilityState: state,
    accessibilityValue,
    testID,
  };

  if (onPress == null) {
    return (
      <View
        accessible={accessibilityLabel != null || accessibilityRole != null ? true : undefined}
        {...a11y}
        onLayout={onLayout}
        style={[{ paddingBottom: depth }, style]}>
        <View style={styles.stack}>
          {ledge}
          {body}
        </View>
      </View>
    );
  }

  // Busy ignores presses without passing `disabled` to the Pressable, which
  // would add `disabled` to the accessibility state: a button with work in
  // flight would read "dimmed" as well as busy.
  return (
    <Pressable
      {...a11y}
      onLayout={onLayout}
      disabled={disabled}
      unstable_pressDelay={pressDelay}
      hitSlop={hitSlop}
      onPress={busy ? undefined : onPress}
      onLongPress={busy ? undefined : onLongPress}
      onPressIn={() => {
        if (busy) return;
        if (haptic !== 'none') {
          void Haptics.impactAsync(
            haptic === 'medium' ? Haptics.ImpactFeedbackStyle.Medium : Haptics.ImpactFeedbackStyle.Light,
          );
        }
        pressed.value = withTiming(1, {
          duration: RAISED_PRESS.inMs,
          easing: Easing.out(Easing.quad),
          reduceMotion: ReduceMotion.System,
        });
        onPressIn?.();
      }}
      onPressOut={() => {
        // Timing, never a spring: a released face has to stop when it meets
        // its resting place, not bounce off it.
        pressed.value = withTiming(0, {
          duration: RAISED_PRESS.outMs,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      }}
      style={[{ paddingBottom: depth }, style]}>
      <View style={styles.stack}>
        {ledge}
        {body}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  /**
   * The face and its ledge, at the face's own height. The ledge hangs off the
   * face (`top: depth`, `bottom: -depth`) rather than filling the container,
   * so a container stretched taller than the face (a card in a stretching
   * row, a set height on `style`) leaves room below the lip instead of
   * growing a slab of ledge. The face is not stretched to fill instead: a
   * flex-growing face in a scroll view is measured against the content's
   * whole height, and grows to it. Height belongs on `contentStyle`.
   */
  stack: {},
  ledge: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  clip: {
    overflow: 'hidden',
  },
});
