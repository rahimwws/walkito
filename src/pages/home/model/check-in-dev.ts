import {
  addDays,
  dayNumberFor,
  devClearCheckIn,
  fromDateKey,
  programState,
  setProgramState,
  todayKey,
  writeLog,
} from '@/entities/program';

/** Thirteen mornings before today, oldest first: a score, or null for a day
 * with no check-in. Nine answered, four not. */
const MORNINGS = [5, 4, null, 4, 3, 5, null, 3, null, 2, 4, null, 3] as const;

/**
 * Development only: two believable weeks of check-ins behind today, for
 * looking at the row of days under Home's answered check-in (and at the
 * Progress chart) on a simulator.
 *
 * Moves the plan's start back two weeks if it is later than that, then writes
 * the thirteen days before today through the same log the check-in writes:
 * nine answered at eight in the morning, four cleared. Today is left alone,
 * so answering it shows the row arrive with "10 of the last 14 days"; if
 * today is already answered the row is there at once.
 *
 * It overwrites those days' check-ins, so never point it at data that matters.
 */
export function devSeedCheckins(now: number = Date.now()): void {
  if (!__DEV__) return;
  const today = todayKey(now);
  const first = addDays(today, -MORNINGS.length);
  if (programState().startDate > first) setProgramState({ startDate: first });
  const state = programState();
  MORNINGS.forEach((score, i) => {
    const date = addDays(first, i);
    const day = dayNumberFor(state, date);
    if (day < 1 || date >= today) return;
    if (score == null) {
      devClearCheckIn(day);
      return;
    }
    const at = fromDateKey(date);
    at.setHours(8, 0, 0, 0);
    writeLog(day, { painMorning: score, painEntries: [{ score, at: at.getTime() }], painZones: [] }, at.getTime());
  });
}
