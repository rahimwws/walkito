import { describe, expect, test } from 'bun:test';

import { REVEAL_BY_MS, REVEAL_MS, UNMOUNT_GRACE_MS } from './reveal-math';
import {
  REVEALED_FALLBACK_MS,
  isSplashRevealed,
  markSplashRevealed,
  subscribeSplashRevealed,
} from './revealed';

// One runtime, one splash: the store is module state and only ever goes from
// false to true, so this is one story told in order.
describe('the revealed signal', () => {
  test('lets a waiting screen go no earlier than the overlay could still be up', () => {
    expect(REVEALED_FALLBACK_MS).toBe(REVEAL_BY_MS + REVEAL_MS + UNMOUNT_GRACE_MS);
  });

  test('starts covered, tells its subscribers once, and stays revealed', () => {
    expect(isSplashRevealed()).toBe(false);

    let calls = 0;
    const unsubscribe = subscribeSplashRevealed(() => {
      calls += 1;
    });
    let gone = 0;
    const unsubscribeGone = subscribeSplashRevealed(() => {
      gone += 1;
    });
    unsubscribeGone();

    markSplashRevealed();
    expect(isSplashRevealed()).toBe(true);
    expect(calls).toBe(1);
    expect(gone).toBe(0);

    // The overlay's unmount marks it again after it finished: no second call.
    markSplashRevealed();
    expect(calls).toBe(1);
    unsubscribe();

    // A screen that mounts afterwards reads true at once.
    expect(isSplashRevealed()).toBe(true);
  });
});
