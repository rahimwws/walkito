import { useEffect } from 'react';

import { goals, retestResults, useStreak, type Goal } from '@/entities/program';
import { askForReview, reviewNow, takeQueuedReview, useReviewQueued, type ReviewWin } from '@/shared/lib/review';

/**
 * The first win worth asking about, or null — section 6 of the plan spec:
 * a test that came back better than the one before, morning pain two points
 * down from where it started, or a seven-day streak.
 */
export function reviewWin(streak: number, all: readonly Goal[], tests: ReturnType<typeof retestResults>): ReviewWin | null {
  if (tests.length >= 2) {
    const [a, b] = [tests[tests.length - 2], tests[tests.length - 1]];
    const better =
      Math.min(b.calf.left, b.calf.right) > Math.min(a.calf.left, a.calf.right) ||
      b.arch.left > a.arch.left ||
      b.balance.left > a.balance.left;
    if (better) return 'test-improved';
  }
  const pain = all.find((g) => g.type === 'pain_free_mornings');
  if (pain?.baseline != null && pain.current != null && pain.baseline - pain.current >= 2) return 'pain-down';
  if (streak === 7) return 'streak-7';
  return null;
}

/** Asks Apple for a review at a win. Never before onboarding is finished. */
export function useReviewAtWin(onboarded: boolean): void {
  const streak = useStreak();
  useEffect(() => {
    if (!onboarded) return;
    const win = reviewWin(streak.current, goals(), retestResults());
    if (win != null) void askForReview(win);
  }, [onboarded, streak.current]);
}

/** How long after the note closes the sheet rises: the next screen's arrival, settled. */
const QUEUED_DELAY_MS = 900;

/**
 * Raises the rating the user asked for in the founders' note, once the screen
 * after it is up. At the end of onboarding that waits for `onboarded` to flip,
 * which is what swaps the tree for Home or the paywall; from Profile's preview
 * of the note it is immediate.
 */
export function useQueuedReview(onboarded: boolean): void {
  const queued = useReviewQueued();
  useEffect(() => {
    if (!queued || !onboarded) return;
    const timer = setTimeout(() => {
      if (takeQueuedReview()) void reviewNow();
    }, QUEUED_DELAY_MS);
    return () => clearTimeout(timer);
  }, [queued, onboarded]);
}
