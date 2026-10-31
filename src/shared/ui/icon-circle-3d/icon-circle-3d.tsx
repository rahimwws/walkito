import LockIcon from '@hugeicons/core-free-icons/LockIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useIsFocused } from 'expo-router';
import { useEffect, type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { PRIMARY, accents, fonts, meterColors, palette, raised, type AccentName } from '@/shared/config';
import { readableOn, shade } from '@/shared/lib/color';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';
import { useSplashRevealed } from '@/shared/ui/splash';

export type IconCircleSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconCircleTone = 'primary' | 'neutral' | AccentName;
export type IconCircleState = 'idle' | 'current' | 'done' | 'locked';

/**
 * Diameter, lip and glyph. The lip is about 11% of the diameter, the
 * proportion of Duolingo's path nodes.
 */
const SIZES: Record<IconCircleSize, { d: number; lip: number; glyph: number }> = {
  xs: { d: 32, lip: 3, glyph: 16 },
  sm: { d: 44, lip: 5, glyph: 20 },
  md: { d: 56, lip: 6, glyph: 26 },
  lg: { d: 72, lip: 8, glyph: 32 },
};

/** A locked node's ledge, darkened from its grey face. */
const LOCKED_LIP = 0.2;
/** The progress ring: its weight and how far it stands off the node. */
const RING_STROKE = 6;
const RING_GAP = 4;
/** The "start" bubble's bob: up 4pt and back, every 1.6 s. */
const BOB_PX = 4;
const BOB_MS = 800;

export type IconCircle3DProps = {
  icon?: IconSvgElement;
  /** Anything instead of the icon: a number, a still mascot. */
  children?: ReactNode;
  size: IconCircleSize;
  tone: IconCircleTone;
  state?: IconCircleState;
  /**
   * The word in the bubble over a `current` node: "Start". At most one per
   * screen, since it is the one thing on the screen that moves on its own.
   */
  bubble?: string;
  /** A progress ring, 0 to 1, drawn around the face and its lip together. */
  ring?: number;
  /**
   * Holds the bubble still. For a node on a surface that is mounted but not
   * in view, which `useIsFocused` cannot see: the program overlay stays
   * mounted inside the tabs, and its screen reports focused while it is
   * closed. The host knows; pass its closed state here, as `Glow` takes it.
   */
  paused?: boolean;
  /** Read as selected: one of a row of toggles. */
  selected?: boolean;
  onPress?: () => void;
  accessibilityLabel: string;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * A round raised button: a path node, a streak day, a quest's icon.
 *
 * The ledge is a second circle the lip's depth below, and a press travels the
 * lip, as on every raised control. `done` keeps its tone and shows a tick (no
 * gold for "better"); `locked` is grey with a lock and does not move.
 *
 * Never a ring around the face alone: a sliver of ledge peeking out under a
 * ringed circle reads as a stray arc (the old path nodes found this). The ring
 * here encloses the face and its lip as one shape.
 *
 * The bubble over a `current` node bobs only while its screen is focused, the
 * host has not paused it and the splash is gone, and never under Reduce
 * Motion: a loop on a mounted but hidden screen runs on the UI thread forever.
 */
export function IconCircle3D({
  icon,
  children,
  size,
  tone,
  state = 'idle',
  bubble,
  ring,
  paused = false,
  selected,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  style,
}: IconCircle3DProps) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const meter = meterColors[scheme];
  const { d, lip, glyph } = SIZES[size];
  const locked = state === 'locked';

  const colours = (() => {
    if (locked) {
      return { face: tokens.disabledFace, edge: undefined, lip: shade(tokens.disabledFace, LOCKED_LIP), ink: meter.unit, accent: tokens.disabledInk };
    }
    if (tone === 'neutral') {
      return { face: tokens.surface, edge: tokens.edge, lip: tokens.lip, ink: palette[scheme].foreground, accent: PRIMARY };
    }
    const filled = faceFor(scheme, tone);
    // The ring and the bubble's word take the tone's own hue, not the face's
    // AA step: they sit on the page, not under a label.
    const accent = tone === 'primary' ? PRIMARY : accents[scheme][tone].fill;
    return { face: filled.face, edge: undefined, lip: filled.lip, ink: filled.label, accent };
  })();

  const glyphIcon = locked ? LockIcon : state === 'done' ? Tick02Icon : icon;
  const content =
    state === 'done' || locked || children == null ? (
      glyphIcon != null ? (
        <HugeiconsIcon
          icon={glyphIcon}
          size={locked ? Math.round(glyph * 0.8) : glyph}
          color={colours.ink}
          strokeWidth={state === 'done' ? 2.6 : 2.2}
        />
      ) : null
    ) : (
      children
    );

  // ── the bubble's bob ───────────────────────────────────────────────────
  const focused = useIsFocused();
  const revealed = useSplashRevealed();
  const reduceMotion = useReducedMotion();
  const bobbing = state === 'current' && bubble != null && focused && !paused && revealed && !reduceMotion;
  const bob = useSharedValue(0);
  useEffect(() => {
    if (!bobbing) {
      cancelAnimation(bob);
      bob.value = withTiming(0, { duration: BOB_MS / 4 });
      return undefined;
    }
    const easing = Easing.inOut(Easing.sin);
    bob.value = withRepeat(
      withSequence(
        withTiming(-BOB_PX, { duration: BOB_MS, easing }),
        withTiming(0, { duration: BOB_MS, easing }),
      ),
      -1,
    );
    return () => cancelAnimation(bob);
  }, [bobbing, bob]);
  const bobStyle = useAnimatedStyle(() => ({ transform: [{ translateY: bob.value }] }));

  // ── the ring ───────────────────────────────────────────────────────────
  // The ring is round around the face and its lip together, so its box is a
  // square on their height: the circle stands `lip / 2` in from each side of
  // it, or the ring's outer edge would be cut off left and right.
  const hasRing = ring != null;
  const pad = hasRing ? RING_GAP + RING_STROKE : 0;
  const side = hasRing ? d + lip + pad * 2 : d;
  const box = { width: side, height: d + lip + pad * 2 };
  const inset = hasRing ? pad + lip / 2 : 0;
  const ringRadius = (d + lip) / 2 + RING_GAP + RING_STROKE / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const ringValue = Math.min(Math.max(ring ?? 0, 0), 1);

  const bubbleInk = readableOn(colours.accent, tokens.surface);

  return (
    <View style={[box, style]}>
      {hasRing && (
        <Svg pointerEvents="none" width={box.width} height={box.height} style={StyleSheet.absoluteFill}>
          <Circle
            cx={box.width / 2}
            cy={box.height / 2}
            r={ringRadius}
            stroke={meter.track}
            strokeWidth={RING_STROKE}
            fill="none"
          />
          {ringValue > 0 && (
            <Circle
              cx={box.width / 2}
              cy={box.height / 2}
              r={ringRadius}
              stroke={colours.accent}
              strokeWidth={RING_STROKE}
              strokeLinecap="round"
              strokeDasharray={`${circumference * ringValue} ${circumference}`}
              fill="none"
              transform={`rotate(-90 ${box.width / 2} ${box.height / 2})`}
            />
          )}
        </Svg>
      )}
      <Raised
        face={colours.face}
        edge={colours.edge}
        lip={colours.lip}
        depth={lip}
        radius={d / 2}
        onPress={locked ? undefined : onPress}
        accessibilityRole={onPress != null && !locked ? 'button' : 'image'}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityState={
          locked || selected != null ? { ...(locked && { disabled: true }), ...(selected != null && { selected }) } : undefined
        }
        style={{ position: 'absolute', left: inset, top: pad }}
        contentStyle={[styles.face, { width: d, height: d }]}>
        {content}
      </Raised>
      {state === 'current' && bubble != null && (
        <Animated.View
          pointerEvents="none"
          style={[styles.bubbleSlot, { bottom: box.height - pad + 8 }, bobStyle]}>
          <View style={[styles.bubble, { backgroundColor: tokens.surface, borderColor: tokens.edge }]}>
            <Text style={[styles.bubbleLabel, { color: bubbleInk }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
              {bubble}
            </Text>
            <View style={[styles.tail, { backgroundColor: tokens.surface, borderColor: tokens.edge }]} />
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  face: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleSlot: {
    position: 'absolute',
    left: -60,
    right: -60,
    alignItems: 'center',
  },
  bubble: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderCurve: 'continuous',
    alignItems: 'center',
  },
  bubbleLabel: fonts.heavy(14, 0.1),
  /** A square turned on its corner, its two lower sides bordered: the point. */
  tail: {
    position: 'absolute',
    bottom: -7,
    width: 12,
    height: 12,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    transform: [{ rotate: '45deg' }],
  },
});
