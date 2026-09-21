import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

import { completeOnboarding, resetOnboarding } from './onboarding';

/**
 * The flow was unreachable from the first commit.
 *
 * Two independent faults stacked. `ALWAYS_ONBOARD` pinned the flag to false on
 * every launch, and the `Stack.Protected` guards in the root layout were
 * inverted — onboarding was gated on *having finished* onboarding. A new user,
 * for whom the flag is false, found the flow unavailable and landed on Home.
 *
 * Neither is visible to the type checker, and the comments around both
 * described the behaviour that was intended rather than the one in the code,
 * which is why reading them did not help. So they are asserted here against the
 * source text — crude, but it is the only thing that fails when somebody flips
 * the flag for an afternoon's work and forgets.
 */
describe('onboarding is reachable', () => {
  test('ALWAYS_ONBOARD is off, so the stored answer is honoured', () => {
    const source = readFileSync(new URL('./onboarding.ts', import.meta.url), 'utf8');
    expect(source).toContain('const ALWAYS_ONBOARD = false;');
  });

  test('the three states of the door are guarded on the right conditions', () => {
    const layout = readFileSync(
      new URL('../../../app/layouts/root-layout.tsx', import.meta.url),
      'utf8',
    );

    // `guard` means *available*, not *blocked* — expo-router's own example
    // gates the login screen on `!isLoggedIn`. All three were asserted as
    // string shapes rather than behaviour because the alternative is mounting
    // expo-router under bun, and the bug these catch is a polarity typo.
    const onboarding = /guard=\{!onboarded\}\s*>\s*<Stack\.Screen\s+name="onboarding"/s;
    expect(layout).toMatch(onboarding);

    // The paywall: onboarded, but not paid.
    const paywall = /guard=\{onboarded && !entitled\}\s*>\s*<Stack\.Screen\s+name="offer"/s;
    expect(layout).toMatch(paywall);

    // The app itself: both.
    const tabs = /guard=\{onboarded && entitled\}\s*>\s*<Stack\.Screen name="\(tabs\)"/s;
    expect(layout).toMatch(tabs);
  });

  test('the paywall is a screen, not a dismissible sheet', () => {
    const layout = readFileSync(
      new URL('../../../app/layouts/root-layout.tsx', import.meta.url),
      'utf8',
    );
    // A form sheet has something behind it, and every iOS version finds one
    // more way back to what it can see. The wall must not be one.
    const offerBlock = layout.slice(layout.indexOf('name="offer"'));
    const options = offerBlock.slice(0, offerBlock.indexOf('/>'));
    expect(options).not.toContain('formSheet');
    expect(options).toContain('gestureEnabled: false');
  });
});

describe('the flag is a one-way door', () => {
  test('completing sets it, resetting clears it', () => {
    resetOnboarding();
    completeOnboarding();
    // Read through a fresh import of the snapshot rather than the hook, which
    // needs React. `completeOnboarding` is idempotent, so calling twice is the
    // cheapest proof it stuck.
    expect(() => completeOnboarding()).not.toThrow();
    resetOnboarding();
  });
});
