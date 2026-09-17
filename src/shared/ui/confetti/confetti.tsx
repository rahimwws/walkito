import { useEffect, useMemo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { accents } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const PIECES = 46;

/**
 * Where the bursts come from, as fractions of the width.
 *
 * One origin reads as a party popper; three read as a room. The cost is
 * nothing — the same pieces, dealt round-robin — and the difference is that a
 * single central plume leaves the corners of the screen empty, which is
 * exactly where the eye goes when something has just been finished.
 */
export type ConfettiOrigin = { x: number; y: number };

const CENTRE: readonly ConfettiOrigin[] = [{ x: 0.5, y: 0.5 }];
export const CORNERS: readonly ConfettiOrigin[] = [
  { x: 0.08, y: 0.72 },
  { x: 0.5, y: 0.58 },
  { x: 0.92, y: 0.72 },
];

/** How far a piece is thrown up before gravity wins, and how hard it then
 * falls. The fall is larger than the throw on purpose: every piece has to clear
 * the bottom of the screen by the end, or the burst finishes with litter
 * hanging in mid-air. */
const THROW = 340;
const GRAVITY = 1500;

const SPAN_MS = 1500;
const SPREAD_MS = 900;

/**
 * A burst, for the one day in the week that deserves one.
 *
 * Hand-rolled rather than pulled in: every confetti package for React Native is
 * built on the old Animated API and none of them are tested against the New
 * Architecture, which is a native dependency risk taken for forty lines of
 * arithmetic. This runs entirely on the UI thread through Reanimated, honours
 * the system Reduce Motion setting, and takes its colours from the app's own
 * accents instead of a stock rainbow.
 */
export type ConfettiProps = {
  /** Launch points. Defaults to one, in the middle. */
  origins?: readonly ConfettiOrigin[];
  /** Multiplier on every piece. Above 1 for a moment that has to carry a whole
   * screen — finishing a session — where the default reads as sprinkles from
   * across the room. */
  size?: number;
};

export function Confetti({ origins = CENTRE, size = 1 }: ConfettiProps) {
  const { width, height } = useWindowDimensions();
  const scheme = useColorScheme();
  const hue = accents[scheme];
  const colors = [hue.violet.fill, hue.teal.fill, hue.amber.fill, hue.orange.fill, hue.blue.fill];

  return (
    // Never in the way. The burst is decoration over a screen the user is still
    // free to use, and a full-screen layer that ate taps for two seconds would
    // be a celebration that punishes you for celebrating.
    <View pointerEvents="none" style={styles.layer}>
      {Array.from({ length: PIECES }, (_, i) => (
        <Piece
          key={i}
          width={width}
          height={height}
          // Dealt round-robin rather than split into blocks, so every origin
          // gets the full spread of colours and none of them is the red one.
          origin={origins[i % origins.length]}
          // Thrown away from the edge it started at: a burst launched at the
          // left margin that drifts left is a burst mostly spent off screen.
          bias={origins.length === 1 ? 0 : 0.5 - origins[i % origins.length].x}
          size={size}
          color={colors[i % colors.length]}
        />
      ))}
    </View>
  );
}

function Piece({
  width,
  height,
  origin,
  bias,
  size,
  color,
}: {
  width: number;
  height: number;
  origin: ConfettiOrigin;
  bias: number;
  size: number;
  color: string;
}) {
  const t = useSharedValue(0);

  /**
   * Everything random about this piece, drawn once.
   *
   * Inside a memo rather than inline: read during render, the numbers would be
   * redrawn on every re-render and the piece would jump to a different flight
   * path mid-air.
   */
  const seed = useMemo(
    () => ({
      // Half the spread is random and half is the push away from its own edge,
      // which is what keeps a side burst on screen long enough to be seen.
      drift: ((Math.random() - 0.5) * 0.7 + bias * 1.1) * width,
      throwUp: THROW * (0.6 + Math.random() * 0.8),
      spin: (Math.random() * 4 - 2) * 360,
      tilt: Math.random() * 360,
      w: (5 + Math.random() * 5) * size,
      h: (9 + Math.random() * 7) * size,
      delay: Math.random() * 180,
      life: SPAN_MS + Math.random() * SPREAD_MS,
      round: Math.random() < 0.35,
    }),
    [width, bias, size],
  );

  useEffect(() => {
    t.value = withDelay(
      seed.delay,
      withTiming(1, {
        duration: seed.life,
        // Linear, and the arc comes from the arithmetic below. An eased clock
        // on top of a parabola gives the pieces a weightless drift at the end
        // that reads as slow motion rather than as falling.
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      }),
    );
  }, [t, seed]);

  const style = useAnimatedStyle(() => {
    const p = t.value;
    return {
      transform: [
        { translateX: seed.drift * p },
        // Thrown, then pulled down: the piece rises, slows, turns over and
        // falls past the bottom of the screen.
        { translateY: -seed.throwUp * p + GRAVITY * p * p },
        { rotate: `${seed.tilt + seed.spin * p}deg` },
      ],
      // Only at the very end, so the burst does not spend its whole life
      // dissolving. Opacity is safe here: these views are the confetti itself,
      // never an ancestor of a GlassView.
      opacity: p < 0.75 ? 1 : 1 - (p - 0.75) / 0.25,
    };
  });

  return (
    <Animated.View
      style={[
        styles.piece,
        {
          // Absolutely placed children ignore the layer's own centring, so the
          // origin has to be a real offset rather than an alignment.
          left: origin.x * width,
          top: origin.y * height,
          width: seed.w,
          height: seed.round ? seed.w : seed.h,
          borderRadius: seed.round ? seed.w / 2 : 1.5,
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  piece: {
    position: 'absolute',
  },
});
