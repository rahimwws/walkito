import { afterAll, beforeAll, describe, expect, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

import { RETESTS, importRetestResults, retestResults } from '../program';
import { dayNumberFor, fromDateKey, logFor, programState, setProgramState, startProgram, writeLog } from '../state';
import { completePlanSession, finishTestDay, lastTestDayOutcome, type TestDayOutcome } from './finish';
import { nextSession } from './next-session';
import {
  abandonSession,
  beginSession,
  buildUpcomingWeek,
  ensureGoals,
  noteInSessionPain,
  planDayOn,
  planSessionDone,
  postponeTest,
  sessions,
  setPlanSettings,
  stepDownOwed,
  storedWeeks,
  testDue,
  weekPlan,
} from './store';
import { addDays } from './week';

/**
 * A finished test day, end to end through the store.
 *
 * The bug this pins: finishing the retest moved `testDue` a fortnight on, the
 * rebuild that followed re-planned today as a strength day, and Plan, Home and
 * the server each ended up with a different day.
 *
 * The store and the retest record are module state shared with every other
 * test file, so this one takes today from whatever `testDue` says — the plan's
 * first day on a clean record, or a fortnight after a test another file left —
 * and puts back everything it touched when it is done.
 */

const HOUR = 3_600_000;
const START = '2026-09-14';
const PLAN_KEYS = [
  'plan/settings',
  'plan/weeks',
  'plan/sessions',
  'plan/goals',
  'plan/prefs',
  'plan/outcome',
  'plan/step-down',
  'plan/last-test-outcome',
  'plan/test-not-before',
];

/** The day logs the scenarios below write: the first days of a plan. */
const EARLY_DAYS = [1, 2, 3];

const saved = {
  state: programState(),
  results: retestResults(),
  kv: new Map(PLAN_KEYS.map((key) => [key, kv.getString(key)])),
  logs: new Map(EARLY_DAYS.map((n) => [n, logFor(n)])),
};

const BLANK_LOG = { sessionCompleted: false, sessionEndedEarly: false, exercisesDone: [], completedAt: undefined };

/** Epoch ms of `hours` past midnight on a date. */
const at = (date: string, hours: number) => fromDateKey(date).getTime() + hours * HOUR;

const MEASURED = { calf: 14, otherCalf: 18, arch: 20, balance: 12 };

/**
 * A plan of its own for one scenario, begun on `start`: nothing stored, no
 * tests on file, the first days' logs blank. Another scenario's day 1 is this
 * one's too — the logs are kept by day number.
 *
 * Called from each scenario's first test rather than a `beforeAll` in its
 * `describe`: bun runs every `beforeAll` in a file before the first test, so
 * the last scenario's plan would be the one all of them ran against.
 */
function freshPlan(start: string): void {
  for (const key of PLAN_KEYS) kv.remove(key);
  importRetestResults([]);
  startProgram({ planLength: 84, progressionOffset: 0, focus: 'foot' }, at(start, 9));
  for (const n of EARLY_DAYS) writeLog(n, BLANK_LOG, at(addDays(start, n - 1), 9));
}

let today = START;
let now = 0;
let dayNumber = 1;
let logBefore: ReturnType<typeof logFor>;
let outcome: TestDayOutcome;

beforeAll(() => {
  for (const key of PLAN_KEYS) kv.remove(key);
  startProgram({ planLength: 84, progressionOffset: 0, focus: 'foot' }, fromDateKey(START).getTime() + 9 * HOUR);
  today = testDue();
  now = fromDateKey(today).getTime() + 10 * HOUR;
  dayNumber = dayNumberFor(programState(), today);
  logBefore = logFor(dayNumber);
  // Achilles pain on a court: pain, calf raises and balance are the goals.
  ensureGoals(
    {
      painReported: true,
      footType: 'unknown',
      plantarPain: false,
      loadsFeet: true,
      firstGapPct: null,
      goal: 'painfree',
      sport: 'tennis',
      areas: ['achilles'],
    },
    now,
  );
});

afterAll(() => {
  for (const [n, log] of saved.logs) writeLog(n, log ?? BLANK_LOG);
  importRetestResults(saved.results);
  for (const [key, value] of saved.kv) {
    if (value == null) kv.remove(key);
    else kv.set(key, value);
  }
  writeLog(dayNumber, logBefore ?? { sessionCompleted: false, sessionEndedEarly: false, exercisesDone: [], completedAt: undefined });
  setProgramState(saved.state);
});

describe('finishing a test day', () => {
  test('today is the test', () => {
    expect(planDayOn(today, now)?.type).toBe('test');
    expect(planSessionDone(today)).toBe(false);
    expect(nextSession(now)).toMatchObject({ date: today, open: true });
  });

  test('after it, today is still the test, and done', () => {
    // Thirty calf raises clears the 25 the calf goal asks for.
    outcome = finishTestDay({ calf: 30, otherCalf: 31, arch: 20, balance: 15 }, { date: today, now });
    expect(planDayOn(today, now)?.type).toBe('test');
    expect(planSessionDone(today)).toBe(true);
    // The rest of the week was re-planned against the new due date: no second test.
    expect(weekPlan(now).days.filter((day) => day.type === 'test').map((day) => day.date)).toEqual([today]);
  });

  test('the day log agrees, under today', () => {
    const log = logFor(dayNumber);
    expect(log?.sessionCompleted).toBe(true);
    expect(log?.completedAt).toBe(now);
    expect(log?.date).toBe(today);
  });

  test('the outcome: the goal reached, before and after, and the next test four weeks on', () => {
    expect(outcome.reached).toEqual(['calf_raises']);
    expect(outcome.before.find((goal) => goal.type === 'calf_raises')?.status).toBe('active');
    expect(outcome.after.find((goal) => goal.type === 'calf_raises')).toMatchObject({ status: 'maintaining', current: 30 });
    // A reached goal moves the cadence from a fortnight to four weeks.
    expect(outcome.nextTestOn).toBe(addDays(today, 28));
    expect(outcome.retest).toBe(RETESTS[dayNumber]);
  });

  test('the next session is the next training day, at its midnight', () => {
    let expected = addDays(today, 1);
    while (planDayOn(expected, now)?.type === 'rest') expected = addDays(expected, 1);
    const next = nextSession(now);
    expect(next?.date).toBe(expected);
    expect(next?.at).toBe(fromDateKey(expected).getTime());
    expect(next?.open).toBe(false);
  });

  test('Home rewriting the log cannot reopen it', () => {
    writeLog(dayNumber, { sessionCompleted: false, exercisesDone: [] }, now);
    expect(planSessionDone(today)).toBe(true);
    expect(nextSession(now)?.date).not.toBe(today);
  });

  test('any later rebuild keeps it too', () => {
    setPlanSettings({ daysPerWeek: 3 }, now + HOUR);
    expect(planDayOn(today, now)?.type).toBe('test');
  });

  test('"See results" reads the same outcome back', () => {
    const again = lastTestDayOutcome();
    expect(again?.retest).toBe(outcome.retest);
    expect(again?.reached).toEqual(outcome.reached);
    expect(again?.before).toEqual(outcome.before);
    expect(again?.after).toEqual(outcome.after);
  });

  test('without the snapshot — a restored phone — it is rebuilt from the record', () => {
    kv.remove('plan/last-test-outcome');
    const rebuilt = lastTestDayOutcome();
    expect(rebuilt?.reached).toEqual(['calf_raises']);
    const calf = rebuilt?.before.find((goal) => goal.type === 'calf_raises');
    expect(calf?.status).toBe('active');
    expect(calf?.achievedOn).toBeUndefined();
  });

  test('restored results come back with their dates and levels', () => {
    const before = retestResults();
    const rows = RETESTS[dayNumber]?.rows;
    importRetestResults(before);
    expect(retestResults()).toEqual(before);
    expect(RETESTS[dayNumber]?.rows).toEqual(rows);
  });
});

describe('a Sunday test, with next week already built', () => {
  // A plan begun on a Sunday: the first test is due that Sunday.
  const SUNDAY = '2026-09-13';
  const MONDAY = '2026-09-14';

  test('Sunday evening builds next week around the test still due', () => {
    freshPlan(SUNDAY);
    expect(weekPlan(at(SUNDAY, 10)).days.find((day) => day.date === SUNDAY)?.type).toBe('test');
    expect(buildUpcomingWeek(at(SUNDAY, 19))).toBe(true);
    // Overdue by Monday, so next week opens on it.
    expect(planDayOn(MONDAY, at(SUNDAY, 19))?.type).toBe('test');
  });

  test('finishing it that evening takes the test off Monday too', () => {
    const now = at(SUNDAY, 19.5);
    finishTestDay(MEASURED, { date: SUNDAY, now });
    expect(planSessionDone(SUNDAY)).toBe(true);
    expect(planDayOn(MONDAY, now)?.type).not.toBe('test');
    expect(storedWeeks()[MONDAY]?.days.some((day) => day.type === 'test')).toBe(false);
    const next = nextSession(now);
    expect(next?.date).toBe(MONDAY);
    expect(next?.day.type).not.toBe('test');
  });
});

describe('a test that crosses midnight', () => {
  const MONDAY = '2026-09-14';
  const TUESDAY = '2026-09-15';
  const opened = at(MONDAY, 23 + 57 / 60);
  const finished = at(TUESDAY, 3 / 60);

  test('is filed under the day it was opened on', () => {
    freshPlan(MONDAY);
    expect(weekPlan(opened).days[0]).toMatchObject({ date: MONDAY, type: 'test' });
    // A player an hour earlier noted a pain score and was never recorded.
    beginSession(opened - HOUR);
    noteInSessionPain(7);
    finishTestDay(MEASURED, { date: MONDAY, startedAt: opened, now: finished });

    expect(planSessionDone(MONDAY)).toBe(true);
    expect(planSessionDone(TUESDAY)).toBe(false);
    expect(logFor(1)?.sessionCompleted).toBe(true);
    expect(logFor(2)?.sessionCompleted).toBe(false);
    const result = retestResults()[retestResults().length - 1];
    expect(result).toMatchObject({ dayNumber: 1, date: MONDAY });
  });

  test('so the day after is still open, not skipped as done', () => {
    const next = nextSession(finished);
    expect(next).toMatchObject({ date: TUESDAY, open: true });
    expect(next?.day.type).not.toBe('test');
  });

  test('and takes nothing from a player nobody recorded', () => {
    const test = sessions().filter((s) => s.source === 'test').pop();
    expect(test).toMatchObject({ date: MONDAY, startedAt: opened, inSessionPain: null, feedback: null });
    expect(logFor(1)?.sessionEndedEarly).toBe(false);
    expect(stepDownOwed()).toBe(0);
  });
});

describe('"Test tomorrow"', () => {
  const MONDAY = '2026-09-14';
  const TUESDAY = '2026-09-15';

  test('moves the test to tomorrow, and gives today back its own day', () => {
    freshPlan(MONDAY);
    expect(planDayOn(MONDAY, at(MONDAY, 10))?.type).toBe('test');
    expect(postponeTest(at(MONDAY, 11))).toBe(TUESDAY);
    expect(planDayOn(MONDAY, at(MONDAY, 11))?.type).toBe('strength');
    expect(planDayOn(TUESDAY, at(MONDAY, 11))?.type).toBe('test');
    // Nothing was measured: the test is as due as it was.
    expect(testDue()).toBe(MONDAY);
  });

  test('tomorrow opens on it', () => {
    expect(nextSession(at(TUESDAY, 8))).toMatchObject({ date: TUESDAY, open: true, day: { type: 'test' } });
  });
});

describe('a test day that went by untaken', () => {
  const MONDAY = '2026-09-14';
  const TUESDAY = '2026-09-15';

  test('is offered the next day instead of waiting for next week', () => {
    freshPlan(MONDAY);
    expect(planDayOn(MONDAY, at(MONDAY, 10))?.type).toBe('test');
    const week = weekPlan(at(TUESDAY, 9));
    // Monday was lived and keeps what it was; the test moves to today.
    expect(week.days[0]).toMatchObject({ date: MONDAY, type: 'test' });
    expect(week.days[1]).toMatchObject({ date: TUESDAY, type: 'test' });
    expect(week.days.filter((day) => day.type === 'test')).toHaveLength(2);
    expect(nextSession(at(TUESDAY, 9))).toMatchObject({ date: TUESDAY, day: { type: 'test' } });
  });

  test('and once it is placed, reading the week changes nothing', () => {
    const again = weekPlan(at(TUESDAY, 12));
    expect(again).toEqual(weekPlan(at(TUESDAY, 9)));
  });
});

describe('finishing a plan session', () => {
  const WEDNESDAY = '2026-09-16';

  test('files it once, however many times Done is pressed', () => {
    freshPlan('2026-09-14');
    const input = { date: WEDNESDAY, source: 'plan' as const, minutes: 5, exerciseIds: ['calf_raise_double'] };
    expect(completePlanSession({ ...input, now: at(WEDNESDAY, 18) })).not.toBeNull();
    expect(completePlanSession({ ...input, now: at(WEDNESDAY, 18) + 150 })).toBeNull();
    expect(sessions().filter((s) => s.date === WEDNESDAY && s.source === 'plan')).toHaveLength(1);
  });

  test('a player torn down after the next one began leaves the new one its notes', () => {
    const THURSDAY = '2026-09-17';
    const older = beginSession(at(THURSDAY, 17));
    beginSession(at(THURSDAY, 18));
    noteInSessionPain(3);
    abandonSession(older);
    const saved = completePlanSession({ date: THURSDAY, source: 'plan', minutes: 5, exerciseIds: [], now: at(THURSDAY, 18.1) });
    expect(saved).toMatchObject({ inSessionPain: 3, startedAt: at(THURSDAY, 18) });
  });

  test('a player abandoned without a record leaves nothing behind', () => {
    const FRIDAY = '2026-09-18';
    const token = beginSession(at(FRIDAY, 7));
    noteInSessionPain(8);
    abandonSession(token);
    const saved = completePlanSession({ date: FRIDAY, source: 'plan', minutes: 5, exerciseIds: [], now: at(FRIDAY, 19) });
    expect(saved?.inSessionPain).toBeNull();
    expect(saved?.startedAt).toBe(at(FRIDAY, 19) - 5 * 60_000);
  });
});
