/**
 * Work held until somebody is looking at the app.
 *
 * iOS starts the app with nobody there: the background task that reads the
 * motion coprocessor, HealthKit's hourly delivery. The whole tree mounts on
 * such a launch, as on any other, and every screen that says "I was shown"
 * says it: PostHog recorded "Application Opened" and the onboarding's first
 * step four to eighteen times a day for people who had not touched the phone.
 *
 * So analytics waits for the first moment the app is in front in this run of
 * the process. What was said before that is kept, in order, and sent then: by
 * that moment it is true, since the screens that mounted unseen are the ones
 * she is now looking at. If the process ends without ever coming forward,
 * what it held is dropped with it, which is the point.
 *
 * Kept apart from `analytics.ts` so it can be tested: no React Native here.
 */
export type Hold = {
  /** Runs `job` now if the app has been in front, otherwise keeps it. */
  run: (job: () => void) => void;
  /** The app is in front: everything kept runs, in order, and nothing is
   * kept again in this process. */
  release: () => void;
  released: () => boolean;
  /** How many are waiting. */
  waiting: () => number;
};

/**
 * `limit` caps what a process that is never opened can pile up over days of
 * hourly wakes. The first ones are kept and later ones dropped: the first are
 * the screens that mounted, which is what she sees when she opens the app.
 */
export function createHold(limit = 200): Hold {
  let open = false;
  let kept: (() => void)[] = [];
  return {
    run(job) {
      if (open) job();
      else if (kept.length < limit) kept.push(job);
    },
    release() {
      if (open) return;
      open = true;
      const jobs = kept;
      kept = [];
      for (const job of jobs) {
        try {
          job();
        } catch {
          // One event failing to send must not lose the ones behind it.
        }
      }
    },
    released: () => open,
    waiting: () => kept.length,
  };
}
