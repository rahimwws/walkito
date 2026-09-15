import { useEffect, useState } from 'react';
import {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

/** How long a figure takes to travel to its new value. Long enough to read as
 * counting rather than as a flicker, short enough that a second tap on the
 * range control never queues behind it. */
export const COUNT_MS = 620;
export const COUNT_EASING = Easing.out(Easing.cubic);

/**
 * A number that travels to its target instead of jumping.
 *
 * Returns both the shared value — for anything that can animate on the UI
 * thread, like a ring or a marker — and a rounded JS copy for the text that has
 * to be re-rendered to change.
 *
 * The JS copy only sets state when the *rounded* figure changes, which is what
 * keeps this from being 37 renders of the same "44". At one decimal on a 0–100
 * range that is a hundred-odd renders of two `Text` nodes across two thirds of
 * a second, which is well inside what React can absorb; without the guard it
 * would be one per frame whether the digits moved or not.
 */
export function useCountUp(
  target: number,
  precision = 0,
): { value: SharedValue<number>; display: number } {
  const value = useSharedValue(target);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    value.value = withTiming(target, {
      duration: COUNT_MS,
      easing: COUNT_EASING,
      reduceMotion: ReduceMotion.System,
    });
  }, [target, value]);

  const step = 10 ** precision;
  useAnimatedReaction(
    () => Math.round(value.value * step) / step,
    (rounded, previous) => {
      if (previous != null && rounded === previous) return;
      runOnJS(setDisplay)(rounded);
    },
    [step],
  );

  return { value, display };
}
