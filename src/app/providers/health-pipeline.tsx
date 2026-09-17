import { useCallback, useEffect } from 'react';
import { AppState } from 'react-native';

import { healthCache, refreshHealth, startHealthPipeline } from '@/entities/health';
import { currentDay, painOn } from '@/entities/program';

/**
 * Keeps the local health cache current, and introduces the two entities.
 *
 * Mounted at the root so the subscriptions are registered once for the life of
 * the app rather than once per visit to a screen. Nothing here renders and
 * nothing here blocks: every screen reads the cache, and the cache always has
 * an answer — the worst case is that the answer is yesterday's.
 *
 * The bridge below is the reason this lives in the app layer at all. Learning
 * the hour past which someone's own next morning turns sour needs walking data
 * from `entities/health` and pain from `entities/program`, and one entity may
 * not import another. So neither does: the pipeline asks for a function, the
 * programme supplies the numbers, and the only place that knows about both is
 * here.
 */
export function useHealthPipeline(): void {
  /**
   * Pain the morning after the stored day at `index`.
   *
   * The cache is chronological and ends today, so a position in it maps onto a
   * programme day by counting back from `currentDay()` — no date parsing, no
   * second calendar, and no chance of the two drifting apart at a timezone
   * boundary.
   */
  const painNextMorning = useCallback((index: number) => {
    const days = healthCache().days;
    const dayNumber = currentDay() - (days.length - 1 - index);
    return painOn(dayNumber + 1);
  }, []);

  useEffect(() => startHealthPipeline({ painNextMorning }), [painNextMorning]);

  useEffect(() => {
    // The documented fallback for background delivery failing to register,
    // which it does silently and which no app can detect. Someone who opens
    // Walkito every morning gets current data either way.
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') void refreshHealth(new Date(), { painNextMorning });
    });
    return () => sub.remove();
  }, [painNextMorning]);
}
