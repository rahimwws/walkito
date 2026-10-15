import { logFor, planSessionDone, type DayAttendance } from '@/entities/program';

export type WeekRecap = {
  /** Days that counted: a check-in, a finished session or routine (and, before
   * the streak's cutover, the plan's own rest). The streak's rule, so the two
   * never disagree. */
  showedUp: number;
  /** Days with a session finished: the plan's, a test day's, or a Library
   * routine. One a day at most, so doing more never makes the number bigger. */
  sessions: number;
  /** Days with a check-in on them. Whether one was made, never what it said. */
  checkins: number;
};

/**
 * This week in three counts, read from the days already lived.
 *
 * Counts only, never a denominator: nothing here can say how many days were
 * missed. Days still to come have nothing on them yet and are skipped.
 */
export function weekRecap(week: readonly DayAttendance[]): WeekRecap {
  let showedUp = 0;
  let sessions = 0;
  let checkins = 0;
  for (const day of week) {
    if (day.future) continue;
    if (day.attended) showedUp += 1;
    const log = day.dayNumber == null ? undefined : logFor(day.dayNumber);
    if (planSessionDone(day.date) || log?.libraryDone === true) sessions += 1;
    // A null check: 0 is a real answer, "no pain at all".
    if (log?.painMorning != null) checkins += 1;
  }
  return { showedUp, sessions, checkins };
}
