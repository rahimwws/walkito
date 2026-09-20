import { describe, expect, test } from 'bun:test';

import { chose } from '../src/pages/onboarding/model/answers';

/**
 * The watch sync guide was unreachable for everybody.
 *
 * Choice answers are stored as arrays, and the step's `skipWhen` compared one
 * against a string: `answers.watch !== 'whoop'`. An array is never equal to a
 * string, so both halves of the condition held for every answer and the screen
 * was skipped whatever the user picked. Nothing threw and nothing logged — the
 * step simply never appeared, which is why it read as a missing video rather
 * than as a broken condition.
 */
describe('chose', () => {
  test('reads an answer stored as an array — the shape choice steps actually use', () => {
    expect(chose({ watch: ['whoop'] }, 'watch', 'garmin', 'whoop')).toBe(true);
    expect(chose({ watch: ['garmin'] }, 'watch', 'garmin', 'whoop')).toBe(true);
    expect(chose({ watch: ['apple'] }, 'watch', 'garmin', 'whoop')).toBe(false);
    expect(chose({ watch: ['none'] }, 'watch', 'garmin', 'whoop')).toBe(false);
  });

  test('the comparison it replaces was false for every array', () => {
    // The bug, written out: this is what the condition used to do.
    const answers: Record<string, unknown> = { watch: ['whoop'] };
    expect(answers.watch !== 'whoop').toBe(true);
    // And this is what it should have done.
    expect(chose(answers, 'watch', 'whoop')).toBe(true);
  });

  test('still reads a bare string, in case a step ever stores one', () => {
    expect(chose({ watch: 'whoop' }, 'watch', 'whoop')).toBe(true);
    expect(chose({ watch: 'apple' }, 'watch', 'whoop')).toBe(false);
  });

  test('an unanswered step matches nothing', () => {
    expect(chose({}, 'watch', 'whoop')).toBe(false);
    expect(chose({ watch: [] }, 'watch', 'whoop')).toBe(false);
    expect(chose({ watch: null }, 'watch', 'whoop')).toBe(false);
  });
});
