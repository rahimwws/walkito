import type { DayLog, SessionRecord } from '@/entities/program';

import { REST_DAYS_WANTED, type StickerHistory } from './stickers';

/**
 * What the album is built from, as the program keeps it. PURE: everything that
 * reads storage or the clock is handed in, so this can be run over a made-up
 * month.
 */
export type HistorySource = {
  /** Today's plan day. Nothing after it is read. */
  today: number;
  logs: readonly Pick<DayLog, 'dayNumber' | 'painMorning' | 'painEntries' | 'sessionCompleted' | 'libraryDone'>[];
  sessions: readonly Pick<SessionRecord, 'date' | 'source' | 'startedAt'>[];
  /** Test results on file, the old program's included. */
  testsOnFile: number;
  /** The plan day a date falls on. */
  dayOf: (dateKey: string) => number;
  /** Minutes past local midnight of an epoch time. Handed in so the builder
   * stays free of the phone's time zone. */
  minuteOf: (at: number) => number;
  /** Whether the plan gave rest on a plan day. Asked only of days with a
   * check-in and no session, and only until the album has all it wants. */
  restOn: (dayNumber: number) => boolean;
  /** The streak's own figures, so a run in the album is the run on Home. */
  streak: { longest: number; total: number };
};

/**
 * The history the album reads, from the program's records.
 *
 * This is where a check-in stops being a number. The day log carries the
 * morning's score; all that leaves here is that there was one. A 0 and a 10
 * become the same `true`, so no rule downstream could tell them apart if it
 * tried.
 */
export function historyFrom(source: HistorySource): StickerHistory {
  const { today } = source;
  const inPlan = (day: number) => day >= 1 && day <= today;

  const checkIns = new Set<number>();
  const sessionDays = new Set<number>();
  const own = new Set<number>();

  for (const log of source.logs) {
    const day = log.dayNumber;
    if (!inPlan(day)) continue;
    const checkedIn = log.painMorning != null || (log.painEntries?.length ?? 0) > 0;
    if (checkedIn) checkIns.add(day);
    if (log.sessionCompleted) sessionDays.add(day);
    if (checkedIn || log.sessionCompleted || log.libraryDone === true) own.add(day);
  }

  // The session list says yes for a day too: a test day ticks nothing in the
  // log, and Home's ticks rewrite the log's flag (see `planSessionDone`).
  const startByDay = new Map<number, number>();
  const testDates = new Set<string>();
  for (const session of source.sessions) {
    const day = source.dayOf(session.date);
    if (!inPlan(day)) continue;
    own.add(day);
    if (session.source !== 'plan' && session.source !== 'test') continue;
    sessionDays.add(day);
    if (session.source === 'test') testDates.add(session.date);
    // The day's first plan session only: a second one that day is not a
    // second session at the usual time.
    if (session.source === 'plan' && session.startedAt != null && !startByDay.has(day)) {
      startByDay.set(day, source.minuteOf(session.startedAt));
    }
  }

  // Rest kept: the plan said rest, they checked in, and they did not train.
  // Counted up to what the album asks for and no further, since each answer
  // may cost a week's plan to read.
  let restDaysKept = 0;
  for (const day of [...checkIns].sort((a, b) => a - b)) {
    if (restDaysKept >= REST_DAYS_WANTED) break;
    if (sessionDays.has(day)) continue;
    if (source.restOn(day)) restDaysKept += 1;
  }

  const ascending = (set: ReadonlySet<number>) => [...set].sort((a, b) => a - b);

  return {
    checkInDays: ascending(checkIns),
    sessionDays: ascending(sessionDays),
    ownDays: ascending(own),
    restDaysKept,
    testsDone: Math.max(source.testsOnFile, testDates.size),
    sessionStarts: [...startByDay.entries()].sort(([a], [b]) => a - b).map(([, minute]) => minute),
    longestStreak: source.streak.longest,
    daysOfCare: source.streak.total,
  };
}
