import { describe, expect, test } from 'bun:test';

import { fromDateKey } from '../state';
import { NEXT_SESSION_HORIZON_DAYS, findNextSession } from './next-session';
import { addDays, WEEK_SHAPES, type DayType, type PlanDay } from './week';

/**
 * Rule A: the next session opens at 00:00 of the next plan day that is not a
 * rest day, today included until today's session is done.
 */

/** Monday 28 September 2026. */
const MONDAY = '2026-09-28';

/** Weeks of the given shapes, back to back from `MONDAY`, as a date lookup. */
function plan(...shapes: (readonly DayType[])[]): (dateKey: string) => PlanDay | undefined {
  const days = new Map<string, PlanDay>();
  shapes.forEach((shape, week) =>
    shape.forEach((type, weekday) => {
      const date = addDays(MONDAY, week * 7 + weekday);
      days.set(date, { date, weekday, type, exercises: [], minutes: type === 'rest' ? 0 : 5 });
    }),
  );
  return (dateKey) => days.get(dateKey);
}

/** A moment on a date, by hour. */
function at(dateKey: string, hour: number): number {
  return fromDateKey(dateKey).getTime() + hour * 3_600_000;
}

const five = WEEK_SHAPES[5];
const nothingDone = () => false;

describe('the next session', () => {
  test('not done today: it is today, open since midnight', () => {
    const next = findNextSession({ now: at(MONDAY, 9), dayOn: plan(five), doneOn: nothingDone });
    expect(next?.date).toBe(MONDAY);
    expect(next?.at).toBe(fromDateKey(MONDAY).getTime());
    expect(next?.open).toBe(true);
    expect(next?.day.type).toBe('strength');
  });

  test('done today, tomorrow a training day: tomorrow at 00:00, shut until then', () => {
    const now = at(MONDAY, 21);
    const next = findNextSession({ now, dayOn: plan(five), doneOn: (date) => date === MONDAY });
    const tuesday = addDays(MONDAY, 1);
    expect(next?.date).toBe(tuesday);
    expect(next?.at).toBe(fromDateKey(tuesday).getTime());
    expect(next?.open).toBe(false);
  });

  /** No twelve-hour rest: a session finished late does not push the next past midnight. */
  test('a late finish still opens the next one at midnight', () => {
    const now = at(MONDAY, 23.5);
    const next = findNextSession({ now, dayOn: plan(five), doneOn: (date) => date === MONDAY });
    expect(next?.at).toBe(fromDateKey(addDays(MONDAY, 1)).getTime());
  });

  test('done today, tomorrow a rest day: the day after', () => {
    // The three-day week: strength, rest, strength.
    const next = findNextSession({ now: at(MONDAY, 10), dayOn: plan(WEEK_SHAPES[3]), doneOn: (date) => date === MONDAY });
    expect(next?.date).toBe(addDays(MONDAY, 2));
    expect(next?.open).toBe(false);
  });

  test('a rest day today points at the next training day, done or not', () => {
    const saturday = addDays(MONDAY, 5);
    const next = findNextSession({ now: at(saturday, 10), dayOn: plan(five, five), doneOn: nothingDone });
    expect(next?.date).toBe(addDays(MONDAY, 7));
  });

  test('a Sunday finish opens next Monday, read from next week', () => {
    // Seven days a week: Sunday is recovery, and next week is only a preview.
    const sunday = addDays(MONDAY, 6);
    const next = findNextSession({
      now: at(sunday, 19),
      dayOn: plan(WEEK_SHAPES[7], WEEK_SHAPES[7]),
      doneOn: (date) => date === sunday,
    });
    expect(next?.date).toBe(addDays(MONDAY, 7));
    expect(next?.at).toBe(fromDateKey(addDays(MONDAY, 7)).getTime());
    expect(next?.day.type).toBe('strength');
  });

  test('a test day is a session like any other', () => {
    const shape: DayType[] = ['test', ...five.slice(1)];
    const next = findNextSession({ now: at(MONDAY, 8), dayOn: plan(shape), doneOn: nothingDone });
    expect(next?.day.type).toBe('test');
    expect(next?.open).toBe(true);
  });

  test('only today is asked whether it is done', () => {
    const asked: string[] = [];
    findNextSession({
      now: at(MONDAY, 8),
      dayOn: plan(five),
      doneOn: (date) => {
        asked.push(date);
        return true;
      },
    });
    expect(asked).toEqual([MONDAY]);
  });

  test('nothing but rest for three weeks: none', () => {
    const rest: DayType[] = Array.from({ length: 7 }, () => 'rest');
    const weeks = Array.from({ length: Math.ceil(NEXT_SESSION_HORIZON_DAYS / 7) + 1 }, () => rest);
    expect(findNextSession({ now: at(MONDAY, 8), dayOn: plan(...weeks), doneOn: nothingDone })).toBeNull();
  });
});
