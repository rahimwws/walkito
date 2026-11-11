import { describe, expect, test } from 'bun:test';

import { nextDayOf, weekStripOf, type NextDay } from './next-day';

const DAY_MS = 86_400_000;
const MIDNIGHT = new Date(2026, 10, 11).getTime();
const NOON = MIDNIGHT + DAY_MS / 2;

type Session = NonNullable<Parameters<typeof nextDayOf>[0]>;

function session(at: number, type: 'test' | 'train', minutes: number, ids: string[] = []): Session {
  return { at, day: { type, minutes, exercises: ids.map((id) => ({ id })) } } as unknown as Session;
}

const test2 = session(MIDNIGHT + DAY_MS, 'test', 9);

function reading(next: Session | null, today: number): NextDay {
  const read = nextDayOf(next, today, NOON);
  if (read == null) throw new Error('no next day');
  return read;
}

describe('the day after the first session', () => {
  test('the morning after day one is the test: day 2, tomorrow, four minutes, its balance clip', () => {
    expect(nextDayOf(test2, 1, NOON)).toEqual({
      day: 2,
      ahead: 1,
      at: MIDNIGHT + DAY_MS,
      test: true,
      clip: 'single_leg_hold',
      minutes: 4,
      moves: 0,
    });
  });

  test('a training day shows its first move, its own minutes and how many moves', () => {
    const next = session(MIDNIGHT + 2 * DAY_MS, 'train', 5, ['foot_roll', 'ankle_rocks']);
    expect(nextDayOf(next, 3, NOON)).toMatchObject({ day: 5, ahead: 2, test: false, clip: 'foot_roll', minutes: 5, moves: 2 });
  });

  test('a day that has already opened is today, never a day behind', () => {
    expect(nextDayOf(session(MIDNIGHT - DAY_MS, 'test', 9), 3, NOON)).toMatchObject({ day: 3, ahead: 0 });
  });

  test('a plan with nothing next shows nothing', () => {
    expect(nextDayOf(null, 1, NOON)).toBeNull();
  });
});

describe('the week strip', () => {
  test('day one ticked, day two next, the rest of the first week open', () => {
    const strip = weekStripOf(reading(test2, 1), 1, (back) => back === 0);
    expect(strip.map((cell) => cell.day)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(strip.filter((cell) => cell.done).map((cell) => cell.day)).toEqual([1]);
    expect(strip.filter((cell) => cell.next).map((cell) => cell.day)).toEqual([2]);
  });

  test('a return three days later still shows day one done, and today next', () => {
    const strip = weekStripOf(reading(session(MIDNIGHT, 'test', 9), 4), 4, (back) => back === 3);
    expect(strip.filter((cell) => cell.done).map((cell) => cell.day)).toEqual([1]);
    expect(strip.filter((cell) => cell.next).map((cell) => cell.day)).toEqual([4]);
  });

  test('past the first week it runs from yesterday', () => {
    const strip = weekStripOf(reading(session(MIDNIGHT, 'test', 9), 9), 9, () => false);
    expect(strip.map((cell) => cell.day)).toEqual([8, 9, 10, 11, 12, 13, 14]);
  });
});
