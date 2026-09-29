import { useSyncExternalStore } from 'react';

import { REVEAL_BY_MS, REVEAL_MS, UNMOUNT_GRACE_MS } from './reveal-math';

/**
 * Whether the launch splash has stopped covering the app, for anything on the
 * first screen that must not start while it cannot be seen.
 *
 * The app mounts under the splash, so a screen's own entrance runs from mount:
 * a greeting that types itself, or a sheet a launch link opens (a sheet is
 * presented above the root view, so above the splash, which then plays behind
 * it). Those wait for this instead.
 *
 * Once per JavaScript runtime, like the splash: it becomes true when the
 * overlay unmounts (or finds it has already played) and stays true.
 */
let revealed = false;
const listeners = new Set<() => void>();
let fallback: ReturnType<typeof setTimeout> | null = null;

/**
 * If nothing ever marks the splash revealed (a root without `SplashReveal`
 * mounted), a waiting screen is let go after the longest the overlay could
 * possibly have stayed up: the hard stop, the whole reveal, and the grace
 * before it is forced off. Counted from the first subscriber, which mounts
 * after the overlay, so it can only err late, never early.
 */
export const REVEALED_FALLBACK_MS = REVEAL_BY_MS + REVEAL_MS + UNMOUNT_GRACE_MS;

/** Called by `SplashReveal`. Idempotent. */
export function markSplashRevealed(): void {
  if (revealed) return;
  revealed = true;
  if (fallback != null) {
    clearTimeout(fallback);
    fallback = null;
  }
  for (const listener of [...listeners]) listener();
}

export function isSplashRevealed(): boolean {
  return revealed;
}

export function subscribeSplashRevealed(listener: () => void): () => void {
  listeners.add(listener);
  if (!revealed && fallback == null) {
    fallback = setTimeout(markSplashRevealed, REVEALED_FALLBACK_MS);
  }
  return () => {
    listeners.delete(listener);
  };
}

/** True once the launch splash is off the screen. */
export function useSplashRevealed(): boolean {
  return useSyncExternalStore(subscribeSplashRevealed, isSplashRevealed);
}
