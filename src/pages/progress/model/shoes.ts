import { useSyncExternalStore } from 'react';

import type { DailyMetric } from '@/entities/health/model/metrics';
import { kv } from '@/shared/lib/storage';

/**
 * How far the current pair of shoes has gone.
 *
 * The person says when they got them; Health says how far they walked and ran
 * since. The health cache keeps 90 days, so an older pair has its days before
 * that estimated at the average of the days on file, and the figure is always
 * shown as approximate. Kept on the phone only.
 */
const KEY = 'shoes/since';

/** Around here most running and walking shoes have lost their cushioning. */
export const SHOES_SOON_KM = 500;
export const SHOES_DUE_KM = 800;

/** How long ago the pair was bought, as the picker offers it. */
export const SHOE_AGES = [0, 1, 2, 3, 6, 9, 12] as const;
export type ShoeAge = (typeof SHOE_AGES)[number];

let since: string | null = kv.getString(KEY) ?? null;
const listeners = new Set<() => void>();

/** Records the pair as bought `monthsAgo` months back, on the 1st of that month
 * for anything older than this month. */
export function setShoesAge(monthsAgo: ShoeAge, now: Date = new Date()): void {
  const date = new Date(now.getFullYear(), now.getMonth() - monthsAgo, monthsAgo === 0 ? now.getDate() : 1);
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  since = `${date.getFullYear()}-${month}-${day}`;
  kv.set(KEY, since);
  for (const listener of listeners) listener();
}

export function clearShoes(): void {
  since = null;
  kv.remove(KEY);
  for (const listener of listeners) listener();
}

export function useShoesSince(): string | null {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => since,
    () => since,
  );
}

const DAY_MS = 86_400_000;

function daysBetween(from: string, to: string): number {
  const [fy, fm, fd] = from.split('-').map(Number);
  const [ty, tm, td] = to.split('-').map(Number);
  return Math.round((new Date(ty, tm - 1, td).getTime() - new Date(fy, fm - 1, fd).getTime()) / DAY_MS);
}

/**
 * Kilometres since `from` up to `today`, or null when Health has no distance
 * at all. Days before the oldest one on file are filled at the average day.
 */
export function shoeKm(days: readonly DailyMetric[], from: string, today: string): number | null {
  const withDistance = days.filter((d) => d.distanceKm != null);
  if (withDistance.length === 0) return null;
  const counted = withDistance.filter((d) => d.date >= from && d.date <= today);
  const known = counted.reduce((sum, d) => sum + (d.distanceKm ?? 0), 0);
  const average = withDistance.reduce((sum, d) => sum + (d.distanceKm ?? 0), 0) / withDistance.length;
  const oldest = withDistance[0].date;
  const missing = oldest > from ? Math.max(0, daysBetween(from, oldest)) : 0;
  return known + missing * average;
}

export type ShoeState = 'fresh' | 'soon' | 'due';

export function shoeState(km: number): ShoeState {
  if (km >= SHOES_DUE_KM) return 'due';
  if (km >= SHOES_SOON_KM) return 'soon';
  return 'fresh';
}
