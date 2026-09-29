import { useEffect, useState } from 'react';

import { nextTickIn } from './wait';

/**
 * Milliseconds left until `target`, kept current.
 *
 * - Null when there is no target, and 0 once it has passed — never negative.
 * - Re-renders only when the rounded-up minute changes (every second in the
 *   last minute), lined up on the target rather than on the wall clock; see
 *   `nextTickIn`. A per-second timer running under an hours-long wait would be
 *   a render a second for a number that changes once a minute.
 * - `active: false` idles: no timer at all, and the last value stands. Hosts
 *   pass their focus, so a countdown on a tab nobody is looking at costs
 *   nothing; it catches up the moment it is active again.
 *
 * Stops by itself at the target. What opens there is the caller's to notice —
 * usually a store that recomputes at the same moment (`useNextSession`).
 */
export function useCountdown(target: number | null, active: boolean = true): number | null {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (target == null || !active) return undefined;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const tick = () => {
      const current = Date.now();
      setNow(current);
      const left = target - current;
      if (left > 0) timer = setTimeout(tick, nextTickIn(left));
    };
    tick();
    return () => {
      if (timer != null) clearTimeout(timer);
    };
  }, [target, active]);

  if (target == null) return null;
  return Math.max(0, target - now);
}
