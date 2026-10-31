/**
 * "Four hours on your feet": one push, once a day, the moment a stretch of
 * standing and walking gets long. The nudge is a minute for the feet (the
 * at-work routine), not a reminder to train.
 *
 * Decided on a wake (Health's hourly one, or the background task that reads
 * CoreMotion), from today's steps hour by hour. An hour counts when it
 * carried real walking (`STEPS_PER_HOUR`, the same mark hours on foot use) or
 * an Apple Watch saw a stand in it. The hour in progress counts once it has
 * reached the mark, so the push can land inside the fourth hour rather than
 * an hour after it.
 *
 * Capped like the step check-in, and for the same reasons: once a day, never
 * in quiet hours, never while backed off or paused, and never the same hour
 * as another push of its own kind.
 */

import { BACKOFF_AFTER, QUIET_FROM_MINUTES, pauseStatus, type DeliveryState } from './limits';

export const ON_FEET_CHECK = 'on-feet';
export const ON_FEET_HOURS = 4;
export const STEPS_PER_HOUR = 250;
/** Not before this: four hours from midnight is not a working day. */
export const ON_FEET_EARLIEST = 9 * 60;
/** The step check-in this recent has already asked about the feet. */
export const ON_FEET_AFTER_STEPS_HOURS = 2;

export type OnFeetHourInput = { start: number; steps: number | null; stood: boolean };

const HOUR_MS = 3_600_000;

const counts = (hour: OnFeetHourInput) => hour.stood || (hour.steps != null && hour.steps >= STEPS_PER_HOUR);

/**
 * Hours on foot in a row, ending now: the hour in progress if it already
 * counts, otherwise the last complete one. A gap ends the run; a run that
 * ended before the last complete hour is not a run any more.
 */
export function onFeetStreak(hours: readonly OnFeetHourInput[], now: number): number {
  const done = hours.filter((h) => h.start <= now);
  if (done.length === 0) return 0;
  let i = done.length - 1;
  // The hour in progress: counted if it has reached the mark, skipped if not.
  if (now < done[i].start + HOUR_MS && !counts(done[i])) i -= 1;
  let streak = 0;
  for (; i >= 0 && counts(done[i]); i -= 1) streak += 1;
  return streak;
}

export type OnFeetCheckInput = {
  hours: readonly OnFeetHourInput[];
  dateKey: string;
  minuteOfDay: number;
  now: number;
  delivery: DeliveryState;
  /** When the step check-in went out today, or null. */
  stepCheckAt: number | null;
};

export type OnFeetCheckBlocked =
  | 'short'
  | 'already-sent'
  | 'too-early'
  | 'quiet-hours'
  | 'backed-off'
  | 'paused'
  | 'just-asked';

export function onFeetCheckBlocked(input: OnFeetCheckInput): OnFeetCheckBlocked | null {
  if (onFeetStreak(input.hours, input.now) < ON_FEET_HOURS) return 'short';
  if ((input.delivery.sentByKind[ON_FEET_CHECK] ?? []).includes(input.dateKey)) return 'already-sent';
  if (input.minuteOfDay < ON_FEET_EARLIEST) return 'too-early';
  if (input.minuteOfDay >= QUIET_FROM_MINUTES) return 'quiet-hours';
  if (input.delivery.unopenedStreak >= BACKOFF_AFTER) return 'backed-off';
  if (pauseStatus(input.delivery, input.dateKey) !== 'running') return 'paused';
  if (input.stepCheckAt != null && input.now - input.stepCheckAt < ON_FEET_AFTER_STEPS_HOURS * HOUR_MS) {
    return 'just-asked';
  }
  return null;
}
