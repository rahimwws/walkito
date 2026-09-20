import { describe, expect, test } from 'bun:test';

import { repSeconds, sideAt, sideSwitchAt } from '../src/widgets/session-player/model/tempo';

const TEMPO = { up: 3, hold: 2, down: 3 } as const; // 8s a rep

describe('sideSwitchAt', () => {
  test('halves a move with no tempo', () => {
    expect(sideSwitchAt(60)).toBe(30);
    expect(sideSwitchAt(45)).toBe(22.5);
  });

  test('snaps to a whole rep when there is a tempo', () => {
    expect(repSeconds(TEMPO)).toBe(8);
    // 96s is twelve reps; half is 48, which is exactly six.
    expect(sideSwitchAt(96, TEMPO)).toBe(48);
    // 100s is not a whole number of reps. Half is 50, nearest boundary is 48.
    expect(sideSwitchAt(100, TEMPO)).toBe(48);
    // 84s → half 42 → 5.25 reps → rounds down to 5, so 40.
    expect(sideSwitchAt(84, TEMPO)).toBe(40);
    // 88s → half 44 → exactly 5.5 reps. A tie goes up, giving the longer first
    // side rather than the longer second one.
    expect(sideSwitchAt(88, TEMPO)).toBe(48);
  });

  test('never leaves a side with no time', () => {
    // One rep total: snapping would put the switch at the very end, which would
    // mean the left foot never happens.
    expect(sideSwitchAt(8, TEMPO)).toBe(4);
    // Shorter than a rep.
    expect(sideSwitchAt(5, TEMPO)).toBe(2.5);
  });

  test('a zero-length tempo falls back to halving rather than dividing by it', () => {
    expect(sideSwitchAt(60, { up: 0, hold: 0, down: 0 })).toBe(30);
  });
});

describe('sideAt', () => {
  test('right foot first, left second', () => {
    expect(sideAt(0, 60).side).toBe('right');
    expect(sideAt(29, 60).side).toBe('right');
    expect(sideAt(30, 60).side).toBe('left');
    expect(sideAt(59, 60).side).toBe('left');
  });

  test('counts down within the side, not across the move', () => {
    // Ten seconds into a sixty-second move: twenty left on this foot, not fifty.
    expect(sideAt(10, 60).secondsLeft).toBe(20);
    // Ten seconds after the switch: twenty left on the second foot.
    expect(sideAt(40, 60).secondsLeft).toBe(20);
  });

  test('`last` marks the second side only', () => {
    expect(sideAt(0, 60).last).toBe(false);
    expect(sideAt(30, 60).last).toBe(true);
  });

  test('never reports negative time when the clock overruns', () => {
    expect(sideAt(70, 60).secondsLeft).toBe(0);
    expect(sideAt(70, 60).side).toBe('left');
  });

  test('respects the snapped boundary on a tempo move', () => {
    // Switch is at 48 for a 100s dose, so 47 is still the right foot.
    expect(sideAt(47, 100, TEMPO).side).toBe('right');
    expect(sideAt(48, 100, TEMPO).side).toBe('left');
    // And the left foot gets the remainder, which is longer than the right.
    expect(sideAt(48, 100, TEMPO).secondsLeft).toBe(52);
  });
});
