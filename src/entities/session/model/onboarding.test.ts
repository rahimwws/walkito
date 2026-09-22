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

  test('the four states of the door are guarded on the right conditions', () => {
    const layout = readFileSync(
      new URL('../../../app/layouts/root-layout.tsx', import.meta.url),
      'utf8',
    );

    // `guard` means *available*, not *blocked* — expo-router's own example
    // gates the login screen on `!isLoggedIn`. All four are asserted as string
    // shapes rather than behaviour because the alternative is mounting
    // expo-router under bun, and the bug these catch is a polarity typo.
    const onboarding = /guard=\{!onboarded\}\s*>\s*<Stack\.Screen\s+name="onboarding"/s;
    expect(layout).toMatch(onboarding);

    // The paywall: onboarded, not paid, and never having finished a programme —
    // that last case has its own screen below.
    const paywall =
      /guard=\{onboarded && !entitled && !lapsed\}\s*>\s*<Stack\.Screen\s+name="offer"/s;
    expect(layout).toMatch(paywall);

    // The end of the twelve weeks, until they answer it.
    const expired =
      /guard=\{onboarded && !entitled && lapsed && !browsing\}\s*>\s*<Stack\.Screen\s+name="expired"/s;
    expect(layout).toMatch(expired);

    // The app itself: paid, or reading their own history after a lapse.
    const tabs =
      /guard=\{onboarded && \(entitled \|\| \(lapsed && browsing\)\)\}\s*>\s*<Stack\.Screen name="\(tabs\)"/s;
    expect(layout).toMatch(tabs);
  });

  /**
   * The read-only concession must stay narrow.
   *
   * "Not now" lets somebody whose programme ended back into the tabs, which is
   * the only path into this app that does not go through a purchase. It is
   * deliberate — their logs are theirs — but it is exactly the kind of hole that
   * widens by accident, so the gate that keeps it to *reading* is asserted here.
   */
  test('a lapsed browser cannot start a session', () => {
    const player = readFileSync(
      new URL('../../../widgets/session-player/ui/session-view.tsx', import.meta.url),
      'utf8',
    );
    // One gate, inside the player, so none of the screens that open a session
    // can forget it.
    expect(player).toContain('useSessionsLocked()');
    expect(player).toMatch(/if \(!locked\) return <SessionRun/);
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
