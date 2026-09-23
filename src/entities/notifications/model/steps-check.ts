/**
 * The step check-in: one push, the moment a day on foot gets long.
 *
 * Everything else this entity sends is planned a week ahead from the ladder.
 * This one cannot be — nobody knows at 7am whether today will be a 4,000-step
 * day or a 14,000-step one — so it is decided on a HealthKit background wake,
 * against steps Health has already deduplicated across phone and watch.
 *
 * **The one-a-day ceiling bends here, narrowly.** `MAX_PER_DAY` is one, and the
 * morning nudge has usually spent it by the time anyone crosses the mark. This
 * is allowed on top of it for the same reason the retest follow-up is: it
 * carries information no planned message can, it asks rather than reminds, and
 * it is capped — once a day, never in quiet hours, never while the app is
 * backed off or paused, never when the foot was checked in on within the last
 * few hours. Sending it also stands down whatever was still due later today, so
 * a day never carries more than the morning line and this.
 */

import {
  BACKOFF_AFTER,
  QUIET_FROM_MINUTES,
  pauseStatus,
  type DeliveryState,
} from './limits';

/** The kind it is recorded under, beside the ladder's own. */
export const STEP_CHECK = 'steps';

/** Not before this, whatever the count. A runner past the mark at 8am has
 * just finished a run, and the question lands better once the day is under
 * way. */
export const STEP_CHECK_EARLIEST = 10 * 60;

/** A check-in this recent has already answered the question. */
export const STEP_CHECK_RECENT_HOURS = 3;

export type StepCheckInput = {
  stepsToday: number | null;
  mark: number;
  dateKey: string;
  /** Minutes past midnight, now. */
  minuteOfDay: number;
  now: number;
  delivery: DeliveryState;
  /** When the foot was last checked in on today, or null. */
  lastCheckInAt: number | null;
};

export type StepCheckBlocked =
  | 'under-mark'
  | 'already-sent'
  | 'too-early'
  | 'quiet-hours'
  | 'backed-off'
  | 'paused'
  | 'checked-in';

/**
 * Whether to send, and if not, why not.
 *
 * Pure — every input is an argument — for the same reason `blockedReason` is:
 * a notification that did not arrive should be explainable in a minute.
 */
export function stepCheckBlocked(input: StepCheckInput): StepCheckBlocked | null {
  if (input.stepsToday == null || input.stepsToday < input.mark) return 'under-mark';
  if ((input.delivery.sentByKind[STEP_CHECK] ?? []).includes(input.dateKey)) return 'already-sent';
  if (input.minuteOfDay < STEP_CHECK_EARLIEST) return 'too-early';
  if (input.minuteOfDay >= QUIET_FROM_MINUTES) return 'quiet-hours';
  // Someone who has stopped opening what the app sends gets nothing extra.
  if (input.delivery.unopenedStreak >= BACKOFF_AFTER) return 'backed-off';
  if (pauseStatus(input.delivery, input.dateKey) !== 'running') return 'paused';
  if (
    input.lastCheckInAt != null &&
    input.now - input.lastCheckInAt < STEP_CHECK_RECENT_HOURS * 3_600_000
  ) {
    return 'checked-in';
  }
  return null;
}
