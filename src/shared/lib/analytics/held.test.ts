import { describe, expect, test } from 'bun:test';

import { createHold } from './held';

describe('analytics held until the app is in front', () => {
  test('a launch nobody sees sends nothing', () => {
    const sent: string[] = [];
    const hold = createHold();
    // What a background launch says as the tree mounts.
    hold.run(() => sent.push('$screen /onboarding'));
    hold.run(() => sent.push('onboarding_started'));
    hold.run(() => sent.push('onboarding_step_viewed'));
    expect(sent).toEqual([]);
    expect(hold.released()).toBe(false);
    expect(hold.waiting()).toBe(3);
    // The process is suspended and later killed: nothing was ever released.
  });

  test('brought to the front, what mounted unseen is said then, in order', () => {
    const sent: string[] = [];
    const hold = createHold();
    hold.run(() => sent.push('onboarding_started'));
    hold.run(() => sent.push('onboarding_step_viewed'));
    hold.release();
    expect(sent).toEqual(['onboarding_started', 'onboarding_step_viewed']);
    expect(hold.waiting()).toBe(0);
  });

  test('once in front, everything goes straight through, in the background too', () => {
    const sent: string[] = [];
    const hold = createHold();
    hold.release();
    hold.run(() => sent.push('session_started'));
    // The phone is locked mid-session; the session still ends.
    hold.run(() => sent.push('session_completed'));
    expect(sent).toEqual(['session_started', 'session_completed']);
  });

  test('releasing twice sends nothing twice', () => {
    const sent: string[] = [];
    const hold = createHold();
    hold.run(() => sent.push('paywall_viewed'));
    hold.release();
    hold.release();
    expect(sent).toEqual(['paywall_viewed']);
  });

  test('an event that throws does not lose the ones behind it', () => {
    const sent: string[] = [];
    const hold = createHold();
    hold.run(() => {
      throw new Error('no network module');
    });
    hold.run(() => sent.push('paywall_viewed'));
    hold.release();
    expect(sent).toEqual(['paywall_viewed']);
  });

  test('a process woken for days keeps the first of what it said, not all of it', () => {
    const sent: number[] = [];
    const hold = createHold(3);
    for (let i = 0; i < 10; i += 1) hold.run(() => sent.push(i));
    expect(hold.waiting()).toBe(3);
    hold.release();
    expect(sent).toEqual([0, 1, 2]);
  });
});
