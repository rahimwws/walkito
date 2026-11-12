/**
 * The row of days under Home's answered check-in: which of the last two weeks
 * carry a check-in, today last.
 *
 * Pure, and counted in days of the plan: somebody on day three is shown three
 * days, not fourteen with eleven of them empty before they had the app. It
 * says that a day was answered, never what the answer was.
 */
export const HISTORY_DAYS = 14;

export type HistoryDot = {
  logged: boolean;
  today: boolean;
};

export type CheckInHistory = {
  /** Days in the row: the plan's days so far, at most `HISTORY_DAYS`. */
  days: number;
  /** How many of them carry a check-in. */
  logged: number;
  /** Oldest first, today last. */
  dots: HistoryDot[];
};

export function checkInHistory(planDay: number, answered: (dayNumber: number) => boolean): CheckInHistory {
  const today = Math.max(1, Math.floor(planDay));
  const days = Math.min(HISTORY_DAYS, today);
  const dots: HistoryDot[] = Array.from({ length: days }, (_, i) => {
    const dayNumber = today - days + 1 + i;
    return { logged: answered(dayNumber), today: dayNumber === today };
  });
  return { days, logged: dots.filter((dot) => dot.logged).length, dots };
}
