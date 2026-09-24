/**
 * The step back is stored, and it comes off again.
 *
 * `resolveDay` decided on a step back after a spike and `nextOffset` decided
 * when it had been earned off — and neither was ever written, so the plan the
 * player dosed from never moved.
 */

import { afterAll, describe, expect, test } from 'bun:test';

import { settleOffset, stepBackAfterSession } from '@/entities/program/model/offset';
import { logPain, programState, setProgramState } from '@/entities/program/model/state';

// Far past any plan, so these logs cannot collide with another file's.
const D = 300;

afterAll(() => {
  setProgramState({ progressionOffset: 0 });
});

describe('the progression offset', () => {
  test('two calm mornings take a step back off', () => {
    setProgramState({ progressionOffset: -1 });
    for (let day = D; day < D + 6; day += 1) logPain(day, 3);
    expect(settleOffset(D + 5)).toBe(0);
    expect(programState().progressionOffset).toBe(0);
  });

  test('a spike puts it back on, and it is stored', () => {
    logPain(D + 6, 7);
    expect(settleOffset(D + 6)).toBe(-1);
    expect(programState().progressionOffset).toBe(-1);
  });

  test('one calm morning after a spike is not enough', () => {
    logPain(D + 7, 2);
    expect(settleOffset(D + 7)).toBe(-1);
  });

  test('stopping a session on pain steps back at once', () => {
    setProgramState({ progressionOffset: 0 });
    stepBackAfterSession();
    expect(programState().progressionOffset).toBe(-1);
  });
});
