import { useEffect, useRef, type ReactNode } from 'react';
import { AppState, StyleSheet, type LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type DerivedValue,
  type SharedValue,
} from 'react-native-reanimated';

/** Air between the two blocks. */
const GAP = 34;

/** A block changing height (a task done, the check-in answered): the column
 * follows it rather than jumping to it. */
const HEIGHT_MS = 420;
const HEIGHT_EASING = Easing.bezier(0.33, 1, 0.68, 1);

export type DailyStackProps = {
  /** The check-in. */
  first: ReactNode;
  /** Today's tasks, under it. */
  second: ReactNode;
  /**
   * The first block's height, when it animates its own (the check-in does:
   * `PainCheck`'s `heights`, added up by Home). Read on the UI thread in the
   * same frame the block draws at that height, so the list under it can never
   * be a frame behind.
   * Without it the block is measured, and the list glides to each new
   * measurement.
   */
  firstHeight?: SharedValue<number> | DerivedValue<number>;
};

/**
 * The check-in and today's tasks, one under the other, with every change of
 * height eased.
 *
 * **No change of height jumps.** The two used to sit in normal flow, so a
 * block that grew or shrank (the question becoming the day's answer, a task
 * done) moved everything under it in one frame. They also used to trade
 * places once the check-in was answered, the whole block of glass cards
 * sinking under the list while its rows slid over it; that crossing, and the
 * positions held by transforms read from `onLayout` a frame late, were most of
 * what made Home jump and stutter. Now the answered check-in folds into a
 * short card where it is, and both blocks are placed from heights held on the
 * UI thread: the list sits at the check-in's (animated) height, and the
 * column's own height glides, so whatever is below the pair moves smoothly
 * too.
 */
export function DailyStack({ first, second, firstHeight }: DailyStackProps) {
  const measuredFirst = useSharedValue(0);
  const secondHeight = useSharedValue(0);
  const lastFirst = useRef(0);
  const lastSecond = useRef(0);

  /**
   * A measured height: taken as is the first time, glided to after.
   *
   * Never zero. Neither block is ever empty, and a zero is what a layout made
   * while Home was not on screen reports (the app launched in the background
   * by a Health wake or the on-feet task, a frozen tab): taken, it collapsed
   * the column and the blocks and the Library row drew over each other until
   * the next cold start.
   */
  const follow = (value: SharedValue<number>, last: { current: number }) => (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    if (height < 1) return;
    if (Math.abs(height - last.current) < 0.5) return;
    const initial = last.current === 0;
    last.current = height;
    value.value = initial
      ? height
      : withTiming(height, { duration: HEIGHT_MS, easing: HEIGHT_EASING, reduceMotion: ReduceMotion.System });
  };

  // Back in front: the last good heights, set again, in case anything moved
  // the values while the app was away.
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active') return;
      if (firstHeight == null && lastFirst.current > 0) measuredFirst.value = lastFirst.current;
      if (lastSecond.current > 0) secondHeight.value = lastSecond.current;
    });
    return () => sub.remove();
  }, [firstHeight, measuredFirst, secondHeight]);

  const below = useAnimatedStyle(() => {
    const height = firstHeight != null ? firstHeight.value : measuredFirst.value;
    return { transform: [{ translateY: height + GAP }] };
  });

  const column = useAnimatedStyle(() => {
    const height = firstHeight != null ? firstHeight.value : measuredFirst.value;
    return { height: height + GAP + secondHeight.value };
  });

  return (
    <Animated.View style={column}>
      <Animated.View
        style={[styles.block, styles.first]}
        onLayout={firstHeight == null ? follow(measuredFirst, lastFirst) : undefined}>
        {first}
      </Animated.View>
      <Animated.View style={[styles.block, below]} onLayout={follow(secondHeight, lastSecond)}>
        {second}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  block: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  /** Over the list: the check-in's tipped cards may reach a little past its
   * foot, and they belong in front. */
  first: {
    zIndex: 2,
  },
});
