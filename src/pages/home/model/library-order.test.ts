import { describe, expect, test } from 'bun:test';

import { libraryOrder, momentCard, type LibraryFacts } from './library-order';

const at = (hour: number) => new Date(2026, 8, 28, hour, 0).getTime();
const base: LibraryFacts = {
  painToday: 2,
  lastRunEndedAt: null,
  now: at(14),
  checkedInToday: true,
  stepsToday: 4000,
  favourites: [],
  all: ['flare', 'pre_run', 'post_run', 'at_work', 'morning'],
};

describe('the Library cards on Today', () => {
  test('14 · pain 8 → "Hurts right now" is first', () => {
    expect(libraryOrder({ ...base, painToday: 8 })[0]).toBe('flare');
  });

  test('a run in the last two hours leads with the after-run routine', () => {
    expect(momentCard({ ...base, lastRunEndedAt: at(13) })).toBe('post_run');
  });

  test('early morning before a check-in leads with the first-step routine', () => {
    expect(momentCard({ ...base, now: at(7), checkedInToday: false })).toBe('morning');
  });

  test('a long day on the feet leads with the at-work routine', () => {
    expect(momentCard({ ...base, stepsToday: 15000 })).toBe('at_work');
  });

  test('otherwise, before a run; then favourites; never more than six, never twice', () => {
    const order = libraryOrder({ ...base, favourites: ['morning'] });
    expect(order[0]).toBe('pre_run');
    expect(order[1]).toBe('morning');
    expect(new Set(order).size).toBe(order.length);
    expect(order.length).toBeLessThanOrEqual(6);
  });
});
