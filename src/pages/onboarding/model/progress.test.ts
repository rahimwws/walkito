import { beforeEach, describe, expect, test } from 'bun:test';

import { kv } from '@/shared/lib/storage';

import { clearProgress, loadProgress, saveProgress } from './progress';

/**
 * A return to the onboarding lands where it was left. A wrong read here either
 * starts somebody over (the fault this was written for) or lands them on a
 * question with somebody else's answers.
 */
describe('onboarding progress', () => {
  beforeEach(() => clearProgress());

  test('what was saved comes back', () => {
    saveProgress({ step: 'goal', answers: { name: 'Ann', pain: ['heel', 'arch'] }, reminder: 435 }, 1_000);
    expect(loadProgress(2_000)).toEqual({ step: 'goal', answers: { name: 'Ann', pain: ['heel', 'arch'] }, reminder: 435 });
  });

  test('nothing saved, nothing back', () => {
    expect(loadProgress()).toBeNull();
  });

  test('older than two weeks is forgotten', () => {
    saveProgress({ step: 'goal', answers: {}, reminder: null }, 0);
    expect(loadProgress(15 * 86_400_000)).toBeNull();
  });

  test('anything that is not an answer is dropped', () => {
    kv.set('onboarding/progress', JSON.stringify({ at: 1, step: 'goal', answers: { name: 'Ann', odd: 3, mixed: ['a', 1] } }));
    expect(loadProgress(2)).toEqual({ step: 'goal', answers: { name: 'Ann' }, reminder: null });
  });

  test('a broken record is nothing', () => {
    kv.set('onboarding/progress', '{');
    expect(loadProgress()).toBeNull();
  });
});
