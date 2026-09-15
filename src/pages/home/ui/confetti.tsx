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
export function Confetti() {
  const { width } = useWindowDimensions();
  const scheme = useColorScheme();
  const hue = accents[scheme];
  const colors = [hue.violet.fill, hue.teal.fill, hue.amber.fill, hue.orange.fill, hue.blue.fill];

  return (
    // Never in the way. The burst is decoration over a screen the user is still
    // free to use, and a full-screen layer that ate taps for two seconds would
    // be a celebration that punishes you for celebrating.
    <View pointerEvents="none" style={styles.layer}>
      {Array.from({ length: PIECES }, (_, i) => (
        <Piece key={i} width={width} color={colors[i % colors.length]} />
      ))}
    </View>
  );
}

function Piece({ width, color }: { width: number; color: string }) {
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
      drift: (Math.random() - 0.5) * width * 1.25,
      throwUp: THROW * (0.6 + Math.random() * 0.8),
      spin: (Math.random() * 4 - 2) * 360,
      tilt: Math.random() * 360,
      w: 5 + Math.random() * 5,
      h: 9 + Math.random() * 7,
      delay: Math.random() * 180,
      life: SPAN_MS + Math.random() * SPREAD_MS,
      round: Math.random() < 0.35,
    }),
    [width],
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
