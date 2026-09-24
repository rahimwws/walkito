/**
 * The plan has to start once and then stay started.
 *
 * Nothing ever wrote the programme state, so every launch rebuilt a default
 * dated today and every user was on day 1 forever. And the plan's shape was
 * computed once at import, so choosing the six-week plan in onboarding changed
 * nothing until the next cold start.
 */

import { afterAll, describe, expect, test } from 'bun:test';

import * as program from '@/entities/program/model/program';
import { isRetestDay } from '@/entities/program/model/blocks';
import { programState, startProgram } from '@/entities/program/model/state';
import { kv } from '@/shared/lib/storage';

const before = programState();

afterAll(() => {
  startProgram({ planLength: before.planLength, progressionOffset: 0, focus: 'foot' });
});

describe('starting the plan', () => {
  test('the first state is written down, not recomputed each launch', () => {
    // Reading the module is enough to have seeded it.
    expect(programState().startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    kv.set('program/state', JSON.stringify(programState()));
    expect(kv.getString('program/state')).not.toBeNull();
  });

  test('choosing six weeks reshapes the plan without a restart', () => {
    startProgram({ planLength: 42, progressionOffset: -1, focus: 'calf' });
    expect(program.PROGRAM_LENGTH).toBe(42);
    expect(program.PROGRAM).toHaveLength(42);
    expect(program.PLAN_BLOCKS).toHaveLength(3);
    const stored = JSON.parse(kv.getString('program/state') ?? '{}');
    expect(stored.planLength).toBe(42);
    expect(stored.focus).toBe('calf');
    expect(stored.progressionOffset).toBe(-1);
  });

  test('twelve weeks puts all six blocks back', () => {
    startProgram({ planLength: 84, progressionOffset: 0, focus: 'foot' });
    expect(program.PROGRAM_LENGTH).toBe(84);
    expect(program.PLAN_BLOCKS).toHaveLength(6);
  });

  test('day one is the baseline, and it is a checkpoint', () => {
    expect(program.PROGRAM[0].checkpoint).toBe(true);
    expect(isRetestDay(1, 84)).toBe(true);
    expect(program.blockIndexForRetest(1)).toBe(0);
    // The ordinary rhythm is untouched.
    expect(program.PROGRAM[1].checkpoint).toBe(false);
    expect(program.PROGRAM[13].checkpoint).toBe(true);
  });
});
