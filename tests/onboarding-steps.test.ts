import { readFileSync } from 'node:fs';

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

/**
 * Choice answers are arrays, and comparing one to a string is always false.
 *
 * This mistake has now been made twice in the same flow, silently both times.
 * First in the watch step's `skipWhen` — `answers.watch !== 'whoop'` — which
 * held for every possible answer and skipped the sync guide for everybody.
 * Then, after `chose()` was written to prevent exactly that, again one file
 * over: `answers.watch === 'whoop' ? 'whoop' : 'garmin'` picked the brand for
 * the guide, was false for everybody, and handed every user the Garmin page —
 * whose clip is null. The symptom was "the Whoop video doesn't open", which
 * points at the asset rather than at the comparison.
 *
 * Neither threw and neither logged. A grep is a blunt instrument, but it is the
 * one thing that would have caught both.
 */
describe('answers are never compared to a string', () => {
  const sources = [
    'src/pages/onboarding/model/steps.ts',
    'src/pages/onboarding/ui/onboarding-page.tsx',
  ];

  for (const file of sources) {
    test(`${file} uses chose() rather than ===`, () => {
      const text = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
      const offenders = text
        .split('\n')
        .map((line, i) => ({ line, n: i + 1 }))
        // Prose, not code. The comment explaining this very bug quotes the
        // broken comparison, and a guard that cannot tell the two apart fails
        // on its own documentation.
        .filter(({ line }) => !/^\s*(\/\/|\*|\/\*)/.test(line))
        // `typeof answers.x === 'string'` is a type guard, not an answer
        // comparison, and is the one legitimate shape.
        .filter(({ line }) => /(?<!typeof\s)answers\.\w+\s*[!=]==\s*['"]/.test(line))
        .map(({ line, n }) => `${n}: ${line.trim()}`);

      expect(offenders).toEqual([]);
    });
  }
});

/**
 * "What keeps you on your feet?" leads with walking and a job on their feet.
 *
 * Most of the people the app is for walk or stand all day, and "Running" as
 * the first answer told them it was built for somebody else. The values are
 * analytics identifiers (`onboarding_answered { step: 'role', answer }`) and
 * what `roleOf` reads back, so the set must stay exactly these four: only
 * their order is the screen's to choose. Read from the source, as above: the
 * step table imports React Native, which the test runner cannot load.
 */
describe('the role question', () => {
  const text = readFileSync(new URL('../src/pages/onboarding/model/steps.ts', import.meta.url), 'utf8');
  const from = text.indexOf("key: 'role',");
  const block = text.slice(from, text.indexOf('],', from));
  const values = [...block.matchAll(/value: '(\w+)'/g)].map((match) => match[1]);

  test('offers walking and standing at work before running', () => {
    expect(values).toEqual(['walking', 'feet', 'running', 'both']);
  });

  test('keeps the four values the analytics and the plan know', () => {
    expect([...values].sort()).toEqual(['both', 'feet', 'running', 'walking']);
  });
});
