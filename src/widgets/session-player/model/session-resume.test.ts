import { afterEach, describe, expect, test } from 'bun:test';

import { clearResume, placeIn, readResume, writeResume } from './session-resume';

const KEY = 'plan:2026-11-20';
const NOON = new Date(2026, 10, 20, 12, 0);

afterEach(() => clearResume(KEY));

describe('placeIn', () => {
  const saved = { ids: ['a', 'b', 'c', 'd'], step: 2, fraction: 0.4 };

  test('the same list: the same move, the same point in it', () => {
    expect(placeIn(saved, ['a', 'b', 'c', 'd'])).toEqual({ step: 2, fraction: 0.4 });
  });

  test('the move she left, moved by a re-plan, is found by its exercise', () => {
    expect(placeIn(saved, ['b', 'a', 'c', 'd'])).toEqual({ step: 2, fraction: 0.4 });
    expect(placeIn(saved, ['a', 'b', 'e', 'c', 'd'])).toEqual({ step: 2, fraction: 0 });
  });

  test('the move she left was swapped out: the next move she has not done, from its start', () => {
    expect(placeIn(saved, ['a', 'b', 'x', 'd'])).toEqual({ step: 2, fraction: 0 });
    expect(placeIn(saved, ['a', 'b', 'd'])).toEqual({ step: 2, fraction: 0 });
  });

  test('a done move that was swapped does not count as done', () => {
    expect(placeIn(saved, ['a', 'y', 'c', 'd'])).toEqual({ step: 1, fraction: 0 });
  });

  test('nothing done yet, or nothing left to do, is not a place', () => {
    expect(placeIn({ ids: ['a', 'b'], step: 0, fraction: 0.01 }, ['a', 'b'])).toBeNull();
    expect(placeIn(saved, ['a', 'b'])).toBeNull();
  });

  test('a move twice in the list counts once per time it was done', () => {
    expect(placeIn({ ids: ['a', 'b', 'a', 'c'], step: 2, fraction: 0.5 }, ['a', 'b', 'a', 'c'])).toEqual({ step: 2, fraction: 0.5 });
  });
});

describe('readResume', () => {
  test('survives a re-plan of today, and keeps what was skipped', () => {
    writeResume(KEY, ['a', 'b', 'c'], { step: 2, fraction: 0.3, skipped: ['b'] }, NOON);
    expect(readResume(KEY, ['b', 'a', 'c', 'x'], NOON)).toEqual({ step: 2, fraction: 0.3, skipped: ['b'] });
    expect(readResume(KEY, ['a', 'b', 'x', 'c'], NOON)).toEqual({ step: 2, fraction: 0, skipped: ['b'] });
  });

  test('a skipped move taken out of the list is no longer on the record', () => {
    writeResume(KEY, ['a', 'b', 'c'], { step: 2, fraction: 0.3, skipped: ['b'] }, NOON);
    expect(readResume(KEY, ['a', 'c'], NOON)).toEqual({ step: 1, fraction: 0.3, skipped: [] });
  });

  test('a new day starts over', () => {
    writeResume(KEY, ['a', 'b', 'c'], { step: 2, fraction: 0.3, skipped: [] }, NOON);
    expect(readResume(KEY, ['a', 'b', 'c'], new Date(2026, 10, 21, 8, 0))).toBeNull();
  });

  test('a place written by an earlier build, by position only, is dropped', () => {
    const { kv } = require('@/shared/lib/storage') as typeof import('@/shared/lib/storage');
    kv.set(`session/resume/${KEY}`, JSON.stringify({ step: 1, fraction: 0.5, date: '2026-11-20', length: 3 }));
    expect(readResume(KEY, ['a', 'b', 'c'], NOON)).toBeNull();
  });
});
