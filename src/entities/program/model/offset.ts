/**
 * Writing the step back down, and taking it off again.
 *
 * `resolveDay` already decides that a spike steps the plan back and
 * `nextOffset` already decides when two calm mornings have earned it off — and
 * neither answer was ever stored. The offset the session player doses from sat
 * at zero forever, so "tomorrow starts one step back" was a sentence the app
 * said and never did. This is the one place that turns those decisions into
 * state.
 */

import { isSpike, nextOffset } from './adapt';
import { currentDay, painAverage, painOn, programState, setProgramState } from './state';

/** The seven-day window both rules compare against. */
const WINDOW = 7;

/**
 * Re-reads the offset after a morning check-in.
 *
 * Clears it after two consecutive real mornings at or under the week's average,
 * and sets it after a spike. The spike wins when both are true on the same day:
 * a jump this morning is newer news than yesterday's calm.
 */
export function settleOffset(dayNumber: number = currentDay()): number {
  const current = programState().progressionOffset;
  const readings = [dayNumber - 1, dayNumber].map((day) => ({
    pain: painOn(day),
    average: painAverage(day, WINDOW),
  }));
  let next = nextOffset(current, readings);
  if (isSpike(painOn(dayNumber), painAverage(dayNumber, WINDOW))) next = Math.min(next, -1);
  if (next !== current) setProgramState({ progressionOffset: next });
  return next;
}

/**
 * A mid-session report at or above the stop line.
 *
 * Stored at once, so that tomorrow's session — resolved from the stored state —
 * really is one step back.
 */
export function stepBackAfterSession(): void {
  const current = programState().progressionOffset;
  if (current > -1) setProgramState({ progressionOffset: -1 });
}
