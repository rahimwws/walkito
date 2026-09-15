import { useEffect, useState, type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { PROGRAM_EASING, PROGRAM_MS } from '@/shared/lib/program';

/** Air between the two blocks, and part of the distance each travels. */
const GAP = 34;

/**
 * How far the descending block shrinks on its way past the other.
 *
 * The two have to cross, and for the length of the crossing they occupy the
 * same points on the screen — there is no arrangement of two vertical
 * translations that avoids it. Fading one out is not available: the check-in
 * holds a GlassView, and an animated opacity on an ancestor of one kills the
 * material for the life of the screen. So the one going down gives up a little
 * size and passes behind, which is what turns an overlap into a depth cue
 * rather than a collision.
 */
const SINK = 0.96;

export type DailyStackProps = {
  /** The block that starts on top. */
  first: ReactNode;
  /** The block that starts underneath and rises when `swapped` turns true. */
  second: ReactNode;
  swapped: boolean;
};

/**
 * Two blocks that trade places.
 *
 * The check-in is the most important thing on Home until it is answered, and
 * the moment it is answered it becomes the least — it is a question with no
 * question left in it, sitting above the work it was asked about. So it goes
 * down and the list comes up, once, on the same curve the rest of the app
 * moves on.
 *
 * Both blocks stay in normal flow and move by transform alone, so the column
 * keeps its full height throughout and nothing below the pair ever shifts.
 */
export function DailyStack({ first, second, swapped }: DailyStackProps) {
  const [firstHeight, setFirstHeight] = useState(0);
  const [secondHeight, setSecondHeight] = useState(0);

  const t = useSharedValue(0);

  useEffect(() => {
    t.value = withTiming(swapped ? 1 : 0, {
      duration: PROGRAM_MS,
      easing: PROGRAM_EASING,
      reduceMotion: ReduceMotion.System,
    });
  }, [t, swapped]);

  // Each travels by exactly the other's height plus the gap, which is what puts
  // them in each other's resting place rather than merely near it.
  const top = useAnimatedStyle(() => ({
    transform: [
      { translateY: t.value * (secondHeight + GAP) },
      // A bell, not a ramp. The sink exists only for the crossing and has to be
      // fully paid back by the end: held at 0.96, the block would rest four per
      // cent small — seven points inside the page gutter every other element on
      // this screen is flush with, with a primary button narrower than every
      // other primary in the app, and a permanent non-integral transform on an
      // ancestor of two GlassViews resampling them off the pixel grid for the
      // life of the screen.
      { scale: 1 - (1 - SINK) * Math.sin(Math.PI * t.value) },
    ],
  }));

  const bottom = useAnimatedStyle(() => ({
    transform: [{ translateY: -t.value * (firstHeight + GAP) }],
  }));

  return (
    <View style={styles.root}>
      <Animated.View
        style={top}
        onLayout={(event) => setFirstHeight(event.nativeEvent.layout.height)}>
        {first}
      </Animated.View>

      {/* Above its neighbour in the stacking order, so the block arriving is the
          one you see during the crossing. */}
      <Animated.View
        style={[styles.rising, bottom]}
        onLayout={(event) => setSecondHeight(event.nativeEvent.layout.height)}>
        {second}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: GAP,
  },
  rising: {
    zIndex: 2,
  },
});
