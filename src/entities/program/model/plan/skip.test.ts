import { afterAll, beforeAll, describe, expect, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

import { dayNumberFor, logFor, programState, startProgram } from '../state';
import { completePlanSession } from './finish';
import { SKIPS_BEFORE_SWAP, exercisePrefs, recordSession, sessions } from './store';

/**
 * The player's "Skip": the exercise is off today's session and nothing else.
 * It is filed as skipped (not done, so today's ticks are right), and it never
 * counts toward the three-skips rule, which stays as it is for whatever files
 * a plain skip.
 */

const START = new Date(2026, 8, 14, 9, 0).getTime();
const KEYS = ['plan/settings', 'plan/weeks', 'plan/sessions', 'plan/goals', 'plan/prefs'];
const before = programState();
const kept = new Map(KEYS.map((key) => [key, kv.getString(key)]));

beforeAll(() => {
  for (const key of KEYS) kv.remove(key);
  startProgram({ planLength: 84, progressionOffset: 0, focus: 'foot' }, START);
});

afterAll(() => {
  for (const [key, value] of kept) {
    if (value == null) kv.remove(key);
    else kv.set(key, value);
  }
  startProgram({ planLength: before.planLength, progressionOffset: 0, focus: before.focus });
});

const day = (n: number) => {
  const date = new Date(2026, 8, 14 + n - 1);
  const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  return { key, at: date.getTime() + 10 * 3_600_000 };
};

describe('Skip', () => {
  test('a skipped exercise is filed as skipped for today, not done', () => {
    const { key, at } = day(1);
    completePlanSession({
      date: key,
      source: 'plan',
      minutes: 8,
      exerciseIds: ['short_foot_seated', 'towel_curl', 'calf_raise_double'],
      skippedIds: ['towel_curl'],
      now: at,
    });
    const record = sessions()[sessions().length - 1];
    expect(record.exercises).toEqual([
      { id: 'short_foot_seated', status: 'done' },
      { id: 'towel_curl', status: 'skipped', skippedForToday: true },
      { id: 'calf_raise_double', status: 'done' },
    ]);
    const log = logFor(dayNumberFor(programState(), key));
    expect(log?.sessionCompleted).toBe(true);
    expect(log?.exercisesDone).toEqual(['short_foot_seated', 'calf_raise_double']);
  });

  test('skipping it again and again never counts toward the three-skips rule', () => {
    for (let n = 2; n < 2 + SKIPS_BEFORE_SWAP + 1; n += 1) {
      const { key, at } = day(n);
      completePlanSession({ date: key, source: 'plan', minutes: 8, exerciseIds: ['towel_curl'], skippedIds: ['towel_curl'], now: at });
    }
    expect(exercisePrefs().towel_curl?.skipCount ?? 0).toBe(0);
  });

  test('the rule itself is unchanged for a plain skip', () => {
    const { key, at } = day(10);
    recordSession({
      date: key,
      source: 'plan',
      minutes: 8,
      exercises: [{ id: 'marble_pickup', status: 'skipped' }],
      feedback: null,
      inSessionPain: null,
      completedAt: at,
    });
    expect(exercisePrefs().marble_pickup?.skipCount).toBe(1);
  });
});
