import { kv } from '@/shared/lib/storage';

import { RETESTS, RETEST_MINUTES, recordRetest, retestResults, type Retest, type RetestMeasurements } from '../program';
import { dayNumberFor, fromDateKey, programState, toDateKey } from '../state';
import type { Goal, GoalType } from './goals';
import { requestPlanPush } from './push-request';
import {
  beginSession,
  goals,
  measurementsFrom,
  planSessionDone,
  rebuildRestOfWeek,
  recordSession,
  refreshGoals,
  testDue,
  type SessionRecord,
} from './store';
import { addDays } from './week';

/**
 * Finishing things: the one way a plan session ends, and the one way a test
 * day does.
 *
 * Each screen used to finish them its own way, and the ways disagreed. Plan
 * recorded the session and then rebuilt the week; Home's retest wrote the day
 * log and nothing else; the retest sheet recorded the numbers and a bare log
 * entry. So after one test day Plan, Home and the server each held a different
 * story — Plan "Recovery · Done", Home an untaken test, Supabase a strength day.
 * Everything a finish has to write is written here, in the order the reads
 * after it need, and then the server is asked for it straight away.
 */

export type CompletePlanSessionInput = {
  /** `YYYY-MM-DD`, the plan day the session belongs to. */
  date: string;
  source: SessionRecord['source'];
  minutes: number;
  /** The exercises done, in the order they were done. */
  exerciseIds: readonly string[];
  now?: number;
};

/**
 * Finishes a plan session.
 *
 * `recordSession` writes both records — the session list and the day log the
 * streak, Home and the widget read — so the three agree from the moment it
 * returns. Never re-plans today: a finished day is kept by every rebuild (see
 * `build` in `store.ts`), and re-planning it here was the bug.
 *
 * Once per day for the plan: a day whose plan session is already done returns
 * null and writes nothing. The celebration's Done can be pressed twice while it
 * fades, and each press used to file the session again — two records, two
 * rows on the server, one "Too easy" read as the two that move the plan up, and
 * a step back paid off twice. Home already asked first; now nobody has to.
 */
export function completePlanSession(input: CompletePlanSessionInput): SessionRecord | null {
  if (input.source === 'plan' && planSessionDone(input.date)) return null;
  const saved = recordSession({
    date: input.date,
    source: input.source,
    minutes: input.minutes,
    exercises: input.exerciseIds.map((id) => ({ id, status: 'done' as const })),
    feedback: null,
    inSessionPain: null,
    completedAt: input.now ?? Date.now(),
  });
  requestPlanPush();
  return saved;
}

/** What a finished test day changed, for the results screen. */
export type TestDayOutcome = {
  /** The rows the results screen draws: this test read against the last. */
  retest: Retest;
  /** Goals this test reached. The celebration is keyed on these. */
  reached: GoalType[];
  /** The goals as they stood just before, and just after. */
  before: Goal[];
  after: Goal[];
  /** When the next test is due, `YYYY-MM-DD`. */
  nextTestOn: string;
};

/**
 * The last finished test day's goals, kept for "See results".
 *
 * Kept because the "before" cannot be read back afterwards: a goal's figure is
 * overwritten by the test that moved it. Keyed by the day, so a snapshot left
 * over from an earlier test is never shown against a newer one.
 */
const LAST_TEST_KEY = 'plan/last-test-outcome';

type StoredOutcome = { dayNumber: number } & Pick<TestDayOutcome, 'reached' | 'before' | 'after'>;

export type FinishTestDayInput = {
  /**
   * `YYYY-MM-DD`, the plan day the test was opened for. Taken when the flow
   * opens, not when it finishes: a test begun at 23:57 and confirmed at 00:03
   * belongs to the day it was begun on.
   */
  date?: string;
  /** When the flow opened, epoch ms — the session's start. */
  startedAt?: number;
  now?: number;
};

/**
 * Finishes a test day: the numbers, the session, the goals, the week, the sync.
 *
 * The order is what the reads after each step need:
 *
 * 1. The retest, under the test day's number — `testDue` and the goals read it.
 * 2. The session, which makes the day done for `planSessionDone`, the streak
 *    and the day log. Before the rebuild, so the rebuild keeps the day as the
 *    test.
 * 3. The goals, from the new numbers. What they reach is returned.
 * 4. The rest of the week, re-planned against the new due date — with the test
 *    day, being done, left as the test it was.
 *
 * Everything is filed under the day the test was opened for. Dated by the
 * clock at the end instead, a test that crossed midnight landed on tomorrow:
 * tomorrow's session read as done and was skipped, and the test day itself as
 * missed. The numbers and the goals they reach are stamped with that day's
 * last moment when it is already over, so a goal's `achievedOn` and the
 * result's date stay the same day.
 */
export function finishTestDay(measured: RetestMeasurements, input: FinishTestDayInput = {}): TestDayOutcome {
  const now = input.now ?? Date.now();
  const date = input.date ?? toDateKey(new Date(now));
  const dayNumber = Math.max(1, dayNumberFor(programState(), date));
  const endOfDay = fromDateKey(addDays(date, 1)).getTime() - 1;
  const at = Math.min(now, endOfDay);
  const before = goals();
  const retest = recordRetest(dayNumber, measured, at);
  // A fresh record for the test. Without it the session took whatever an
  // earlier player had noted and nobody recorded — a pain score from the
  // relief moves, a start time from a task abandoned an hour ago — and filed
  // it as the test's: a step back owed, a session "ended early", a reminder
  // time learned from nothing.
  beginSession(input.startedAt ?? now);
  completePlanSession({ date, source: 'test', minutes: RETEST_MINUTES, exerciseIds: [], now });
  const reached = refreshGoals(at);
  rebuildRestOfWeek(now);
  const after = goals();
  const stored: StoredOutcome = { dayNumber, reached, before, after };
  kv.set(LAST_TEST_KEY, JSON.stringify(stored));
  requestPlanPush();
  return { retest, reached, before, after, nextTestOn: testDue() };
}

function storedOutcome(): StoredOutcome | null {
  const raw = kv.getString(LAST_TEST_KEY);
  if (raw == null) return null;
  try {
    const parsed = JSON.parse(raw) as StoredOutcome;
    return Number.isFinite(parsed?.dayNumber) && Array.isArray(parsed.before) && Array.isArray(parsed.after) ? parsed : null;
  } catch {
    return null;
  }
}

/**
 * The most recent test day's results, read-only — for "See results" after the
 * day is done. Null before any test.
 *
 * The snapshot `finishTestDay` kept, when it belongs to the latest test. A test
 * with no snapshot — taken before this build, or restored onto a new phone — is
 * rebuilt from what is on file, and its "before" is an approximation: the goals
 * as they are, with each measured figure put back to the test before it and the
 * goals it reached made active again. The next due date is always read now,
 * because it moves when a goal is reached later.
 */
export function lastTestDayOutcome(): TestDayOutcome | null {
  const results = retestResults();
  const last = results[results.length - 1];
  if (last == null) return null;
  const retest = RETESTS[last.dayNumber];
  if (retest == null) return null;
  const nextTestOn = testDue();

  const stored = storedOutcome();
  if (stored != null && stored.dayNumber === last.dayNumber) {
    return { retest, reached: stored.reached, before: stored.before, after: stored.after, nextTestOn };
  }

  const after = goals();
  const reached = after.filter((goal) => goal.achievedOn === last.date).map((goal) => goal.type);
  const previous = measurementsFrom(results[results.length - 2]);
  const before = after
    // A goal that joined on the test's own day took the place of one it reached.
    .filter((goal) => !(reached.length > 0 && goal.status === 'active' && goal.since === last.date))
    .map((goal): Goal => {
      const wasReached = reached.includes(goal.type);
      const { achievedOn: _achievedOn, ...open } = goal;
      const base: Goal = wasReached ? { ...open, status: 'active' } : goal;
      // Morning pain is moved by check-ins, not by the test.
      if (goal.type === 'pain_free_mornings') return base;
      const prior = previous[goal.type] ?? null;
      return { ...base, current: prior, baseline: prior == null ? null : base.baseline };
    });
  return { retest, reached, before, after, nextTestOn };
}
