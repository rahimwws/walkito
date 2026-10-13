import { useEffect, useState, type ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { SETTLE_EASING } from '@/shared/lib/motion';

import { FADE_MS, POP_MS, REDUCED_MS, RISE_MS } from './entrance';

/**
 * How a part of the offer arrives:
 *
 * - `rise`: fades in and comes up 12 pt into place (the card, the switch, a
 *   mascot);
 * - `pop`: fades in and grows from 96 % (the button);
 * - `fade`: fades in where it stands (the small print).
 */
export type RevealKind = 'rise' | 'pop' | 'fade';

const DURATION: Readonly<Record<RevealKind, number>> = { rise: RISE_MS, pop: POP_MS, fade: FADE_MS };
const RISE = 12;
const POP_FROM = 0.96;
const FADE_EASING = Easing.out(Easing.quad);
/** A gated part takes touches from this far into its arrival: on the settle
 * curve it is all but opaque by then. */
const LIVE_AT = 0.5;

/**
 * One part of the offer arriving at its moment in the entrance (`entrance.ts`).
 *
 * A shared value on a delay, so it runs on the UI thread from the moment the
 * panel mounts and nothing waits on JavaScript to start it. Laid out from the
 * first frame and invisible until its moment, so nothing around it moves as it
 * arrives. With Reduce Motion it only fades, in `REDUCED_MS`, at the moment
 * the entrance gives it (the same one for every part).
 *
 * `gate` keeps a part that acts (the button, Restore purchases, the links)
 * from taking a touch, or a screen reader's focus, before it can be seen.
 */
export function Reveal({
  at,
  kind = 'rise',
  gate = false,
  style,
  children,
}: {
  /** When it starts, in ms from the panel's mount. */
  at: number;
  kind?: RevealKind;
  gate?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  const progress = useSharedValue(0);
  const duration = reduced ? REDUCED_MS : DURATION[kind];
  const [live, setLive] = useState(!gate);

  useEffect(() => {
    progress.value = withDelay(
      at,
      withTiming(1, {
        duration,
        easing: reduced || kind === 'fade' ? FADE_EASING : SETTLE_EASING,
        reduceMotion: ReduceMotion.Never,
      }),
      ReduceMotion.Never,
    );
    if (!gate) return undefined;
    const timer = setTimeout(() => setLive(true), at + duration * LIVE_AT);
    return () => clearTimeout(timer);
  }, [progress, at, duration, kind, reduced, gate]);

  const animated = useAnimatedStyle(() => {
    const p = progress.value;
    if (reduced || kind === 'fade') return { opacity: p };
    if (kind === 'pop') return { opacity: p, transform: [{ scale: POP_FROM + (1 - POP_FROM) * p }] };
    return { opacity: p, transform: [{ translateY: (1 - p) * RISE }] };
  });

  return (
    <Animated.View
      pointerEvents={live ? 'auto' : 'none'}
      accessibilityElementsHidden={!live}
      importantForAccessibility={live ? 'auto' : 'no-hide-descendants'}
      style={[style, animated]}>
      {children}
    </Animated.View>
  );
}
