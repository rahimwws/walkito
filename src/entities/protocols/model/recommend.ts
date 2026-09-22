import type { ProtocolId } from './protocols';

/**
 * Which protocol to feature at the top of the tab.
 *
 * Five rules, first match wins, and the order is the whole design: pain beats
 * routine, a run that just finished beats the clock, and the clock beats a
 * default. Anything further down only gets asked when everything above it had
 * nothing to say.
 *
 * Pure, and takes its world as an argument rather than reading a clock or a
 * store. That is what makes "a run thirty minutes ago features After a run"
 * something a test can state rather than something somebody has to go for a
 * run to check.
 */

export type NowFacts = {
  /** Today's highest logged pain, or null if nobody has logged any. */
  readonly painToday: number | null;
  /** Whether a check-in has been made today at all. Distinct from `painToday`
   * being null only in that a logged zero is still a check-in. */
  readonly checkedInToday: boolean;
  /**
   * When the last running workout ended, epoch ms, or null.
   *
   * Null covers two different situations on purpose: no run, and no permission
   * to know. The rule below is skipped identically for both, which is what
   * keeps this tab from ever prompting for HealthKit access — see
   * `RUN_WINDOW_MS`.
   */
  readonly lastRunEndedAt: number | null;
  /** Local hour, 0–23. */
  readonly hour: number;
  /** 0 Sunday … 6 Saturday, matching `Date.getDay`. */
  readonly weekday: number;
};

/** Pain at or above this features the flare protocol. */
export const FLARE_PAIN = 7;

/**
 * How recently a run counts as "just finished".
 *
 * Two hours. Long enough that somebody who ran, showered and sat down still
 * gets the cool-down offered; short enough that a morning run is not still
 * being suggested at bedtime.
 */
export const RUN_WINDOW_MS = 2 * 60 * 60 * 1000;

/** The window the morning protocol owns, before the foot has touched much. */
export const MORNING_HOURS = { from: 5, to: 10 } as const;
/** Office hours, for the discreet one. */
export const WORK_HOURS = { from: 9, to: 18 } as const;

export function recommendProtocol(now: NowFacts, at: number): ProtocolId {
  // 1. Pain first. Somebody at seven or above is not looking for a warm-up.
  if (now.painToday != null && now.painToday >= FLARE_PAIN) return 'flare';

  // 2. A run that has just ended. Null means no run *or* no permission to see
  //    one, and both skip silently — this tab never asks for access.
  if (now.lastRunEndedAt != null && at - now.lastRunEndedAt <= RUN_WINDOW_MS) {
    // A future timestamp is a clock that moved, not a run that has not
    // happened; treating it as recent would feature a cool-down at random.
    if (at >= now.lastRunEndedAt) return 'post_run';
  }

  // 3. Early, and they have not said how the foot is. The morning protocol is
  //    the one that has to happen before the first step, so a check-in already
  //    made means the first step is behind them.
  if (now.hour >= MORNING_HOURS.from && now.hour < MORNING_HOURS.to && !now.checkedInToday) {
    return 'morning';
  }

  // 4. A weekday, during office hours. Monday to Friday.
  const weekday = now.weekday >= 1 && now.weekday <= 5;
  if (weekday && now.hour >= WORK_HOURS.from && now.hour < WORK_HOURS.to) return 'at_work';

  // 5. Otherwise the one that asks least of them.
  return 'pre_run';
}
