import { describe, expect, test } from 'bun:test';

import { HISTORY_DAYS, checkInHistory } from './check-in-history';

describe('checkInHistory', () => {
  test('two weeks, oldest first, today last', () => {
    const logged = new Set([18, 20, 21, 25, 30]);
    const history = checkInHistory(30, (day) => logged.has(day));
    expect(history.days).toBe(HISTORY_DAYS);
    expect(history.dots).toHaveLength(HISTORY_DAYS);
    expect(history.logged).toBe(5);
    expect(history.dots[0]).toEqual({ logged: false, today: false });
    expect(history.dots[1]).toEqual({ logged: true, today: false });
    expect(history.dots[13]).toEqual({ logged: true, today: true });
  });

  test('early in the plan, only the days there have been', () => {
    const history = checkInHistory(3, () => true);
    expect(history.days).toBe(3);
    expect(history.logged).toBe(3);
    expect(history.dots.map((dot) => dot.today)).toEqual([false, false, true]);
  });

  test('day one is one day', () => {
    expect(checkInHistory(1, () => true)).toEqual({ days: 1, logged: 1, dots: [{ logged: true, today: true }] });
  });

  test('a day number under one is read as day one, never asked about day zero', () => {
    const asked: number[] = [];
    const history = checkInHistory(0, (day) => {
      asked.push(day);
      return false;
    });
    expect(history.days).toBe(1);
    expect(asked).toEqual([1]);
  });

  test('an unanswered today is in the row and not in the count', () => {
    const history = checkInHistory(14, (day) => day < 14);
    expect(history.logged).toBe(13);
    expect(history.dots[13]).toEqual({ logged: false, today: true });
  });
});
