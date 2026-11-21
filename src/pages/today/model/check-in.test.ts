import { describe, expect, test } from 'bun:test';

import { ANSWERS, ANSWER_SCORE, answerFor } from './check-in';

describe('check-in words', () => {
  test('each word reads back as itself', () => {
    for (const answer of ANSWERS) expect(answerFor(ANSWER_SCORE[answer])).toBe(answer);
  });

  test('a score from the old dial lands on the nearest word', () => {
    expect(answerFor(1)).toBe('stiff');
    expect(answerFor(4)).toBe('sore');
    expect(answerFor(9)).toBe('hurt');
  });
});
