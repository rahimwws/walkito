import { useEffect } from 'react';

import { SessionTimerActivity } from '@/widgets/session-player';

/**
 * Clears any Live Activity left over from a previous run.
 *
 * The Lock Screen outlives the process. A crash mid-session — and this app had
 * two on TestFlight — leaves a countdown pinned to the Dynamic Island against a
 * session that no longer exists, ticking toward a deadline nothing will ever
 * meet. ActivityKit will not notice; the process that owned it is gone.
 *
 * The session player already swept orphans, but only as the *first* thing a new
 * session does. That is the wrong moment: it leaves the stale pill up for as
 * long as the user does not start another session, which is exactly the period
 * in which they are looking at it and wondering what it is. Launch is the
 * earliest the app can act, so it acts there.
 *
 * Deliberately not scoped to activities this app believes it started. There is
 * no such list after a relaunch, and one left behind is by definition one
 * nothing is tracking.
 */
export function useLiveActivityCleanup(): void {
  useEffect(() => {
    let live = true;
    // A frame late so it never competes with the first paint. Nothing on screen
    // depends on it, and the pill has already survived a process death — a few
    // milliseconds more costs nothing.
    const frame = requestAnimationFrame(() => {
      if (!live) return;
      try {
        for (const orphan of SessionTimerActivity.getInstances()) {
          void orphan.end('immediate');
        }
      } catch (error) {
        // Live Activities switched off, or unsupported on this OS. Nothing to
        // clear and nothing the user can do — but reported rather than
        // swallowed, because a silent catch here would make a pill that refuses
        // to die look identical to one nobody tried to kill.
        console.warn('[activities] Could not clear stale Live Activities:', error);
      }
    });
    return () => {
      live = false;
      cancelAnimationFrame(frame);
    };
  }, []);
}
