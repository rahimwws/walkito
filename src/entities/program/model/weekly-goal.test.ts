import { describe, expect, test } from 'bun:test';

import { goalOfWeek, sessionsDoneIn, weeksInARow } from './weekly-goal';

const WEEK = [
  { date: '2026-10-12', type: 'strength' },
  { date: '2026-10-13', type: 'rest' },
  { date: '2026-10-14', type: 'strength' },
  { date: '2026-10-15', type: 'rest' },
  { date: '2026-10-16', type: 'test' },
  { date: '2026-10-17', type: 'rest' },
  { date: '2026-10-18', type: 'rest' },
] as const;

describe('goalOfWeek', () => {
  test('every day that is not rest, a test day included', () => {
    expect(goalOfWeek(WEEK, '2026-01-01')).toBe(3);
  });

  /** A first week begun on a Wednesday asks only for what is left in it. */
  test('only from the day the plan began', () => {
    expect(goalOfWeek(WEEK, '2026-10-14')).toBe(2);
    expect(goalOfWeek(WEEK, '2026-10-17')).toBe(0);
  });
});

describe('sessionsDoneIn', () => {
  test('counts the days with a session, one a day', () => {
    const done = new Set(['2026-10-12', '2026-10-14']);
    expect(sessionsDoneIn(WEEK.map((d) => d.date), (date) => done.has(date))).toBe(2);
  });

  test('nothing done is zero', () => {
    expect(sessionsDoneIn(WEEK.map((d) => d.date), () => false)).toBe(0);
  });
});

describe('weeksInARow', () => {
  const met = (current = false) => ({ done: 3, goal: 3, current });
  const short = (current = false) => ({ done: 1, goal: 3, current });

  test('counts met weeks ending with the newest', () => {
    expect(weeksInARow([met(), met(), met(true)])).toBe(3);
  });

  /** Monday morning must not drop the figure: the week has only begun. */
  test('a current week not met yet breaks nothing', () => {
    expect(weeksInARow([met(), met(), short(true)])).toBe(2);
  });

  test('a past week short of its goal ends the run', () => {
    expect(weeksInARow([met(), short(), met(), met(true)])).toBe(2);
    expect(weeksInARow([met(), short(), short(true)])).toBe(0);
  });

  test('more than the goal is still met', () => {
    expect(weeksInARow([{ done: 5, goal: 3, current: true }])).toBe(1);
  });

  test('a week that asked for nothing neither adds nor breaks', () => {
    expect(weeksInARow([met(), { done: 0, goal: 0, current: false }, met(true)])).toBe(2);
  });

  test('no weeks, no run', () => {
    expect(weeksInARow([])).toBe(0);
  });
});
