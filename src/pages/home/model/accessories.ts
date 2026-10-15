import { useEffect } from 'react';

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';
import type { FluentName } from '@/shared/ui/fluent-icon';

/**
 * What Walkito wears on Home, by the longest streak reached: a shoe badge at a
 * week, a medal at a fortnight, a trophy at a month, a crown at a hundred days.
 *
 * By the longest run, never the current one, so nothing is taken away when a
 * run starts again: an accessory, once earned, stays. A reward for days shown
 * up for, never for how a body felt.
 */
export type AccessoryId = 'shoe' | 'medal' | 'trophy' | 'crown';

export const ACCESSORIES: readonly { id: AccessoryId; days: number }[] = [
  { id: 'shoe', days: 7 },
  { id: 'medal', days: 14 },
  { id: 'trophy', days: 30 },
  { id: 'crown', days: 100 },
];

/** The Fluent drawing each accessory is drawn with: all four are Fluent's own
 * Flat drawings. */
export const ACCESSORY_ART: Record<AccessoryId, FluentName> = {
  shoe: 'shoe',
  medal: 'medal',
  trophy: 'trophy',
  crown: 'crown',
};

/** The catalogue line the milestone sheet says for each. */
export const ACCESSORY_KEYS = {
  shoe: 'accessory.shoe',
  medal: 'accessory.medal',
  trophy: 'accessory.trophy',
  crown: 'accessory.crown',
} as const satisfies Record<AccessoryId, string>;

/** Every accessory earned by a longest streak of `longest` days, in order. */
export function accessoriesFor(longest: number): AccessoryId[] {
  return ACCESSORIES.filter((a) => longest >= a.days).map((a) => a.id);
}

/** The accessory a run of exactly `days` earns, or null. */
export function accessoryAt(days: number): AccessoryId | null {
  return ACCESSORIES.find((a) => a.days === days)?.id ?? null;
}

/** Earned and not yet seen, in order. */
export function unseenAccessories(earned: readonly AccessoryId[], seen: readonly string[]): AccessoryId[] {
  return earned.filter((id) => !seen.includes(id));
}

const SEEN_KEY = 'streak/accessories-seen';

function seenAccessories(): string[] {
  try {
    const parsed: unknown = JSON.parse(kv.getString(SEEN_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

/**
 * Tracks `accessory_unlocked` once for each accessory the first time Home
 * shows it. `active` is false for a pretend streak from a dev link, which
 * must never reach analytics or the record.
 */
export function useAccessoryUnlocks(earned: readonly AccessoryId[], active: boolean): void {
  const key = earned.join(',');
  useEffect(() => {
    if (!active) return;
    const seen = seenAccessories();
    const fresh = unseenAccessories(earned, seen);
    if (fresh.length === 0) return;
    kv.set(SEEN_KEY, JSON.stringify([...seen, ...fresh]));
    for (const accessory of fresh) track('accessory_unlocked', { accessory });
    // Keyed on the ids: a new array each render is not a new accessory.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, active]);
}
