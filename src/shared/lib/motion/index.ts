import { Easing, withTiming, type ReduceMotion } from 'react-native-reanimated';

/**
 * How everything in the app comes to rest: quick off the mark, slow into its
 * place, and never past it.
 *
 * There are no springs in the app. Every one of them overshot and shook a
 * little before settling, which read as a wobble after each move, so they were
 * replaced with this one curve. A new animation that wants to "land" uses
 * `settle`, not `withSpring`; an overshoot (`Easing.back`, a scale past 1 and
 * back) is the same wobble by other means.
 */
export const SETTLE_EASING = Easing.bezier(0.23, 1, 0.32, 1);

/**
 * `value.value = settle(1)`: a timing to `to` on the settle curve. Callable
 * from a worklet. Without `reduceMotion` it follows the system setting, which
 * is `withTiming`'s own default; no default value is written here because a
 * worklet cannot read the `ReduceMotion` enum from this module's scope.
 */
export function settle(to: number, duration = 360, reduceMotion?: ReduceMotion) {
  'worklet';
  return reduceMotion === undefined
    ? withTiming(to, { duration, easing: SETTLE_EASING })
    : withTiming(to, { duration, easing: SETTLE_EASING, reduceMotion });
}
