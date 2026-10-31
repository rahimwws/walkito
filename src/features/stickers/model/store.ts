import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { arrivalFor, isStickerId, type StickerId } from './stickers';

/**
 * What the album remembers on the phone.
 *
 * - **Earned**: every sticker ever earned. The rules are worked out again from
 *   the history each time, and this keeps a sticker in the album if that
 *   history is ever trimmed or re-planned underneath it. A sticker, once
 *   earned, is never taken back.
 * - **Seen**: the ones already shown in the album, so only a new one arrives
 *   with a pop.
 * - **Arrived on**: the day the last pop played, for one a day at most.
 *
 * All local, and all wiped with everything else on a reset or an account
 * deletion. On a new phone the history comes back with the sync and the album
 * is worked out from it again, quietly.
 */

const EARNED_KEY = 'stickers/earned';
const SEEN_KEY = 'stickers/seen';
const ARRIVED_KEY = 'stickers/arrived-on';

let version = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function changed(): void {
  version += 1;
  for (const listener of listeners) listener();
}

/** Re-renders on any album write. The value is a counter, not the data. */
export function useStickerStoreVersion(): number {
  return useSyncExternalStore(subscribe, () => version, () => version);
}

function readIds(key: string): StickerId[] {
  const raw = kv.getString(key);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    // An id the album no longer has is dropped rather than drawn as nothing.
    return Array.isArray(parsed) ? parsed.filter(isStickerId) : [];
  } catch {
    // A corrupt record costs a pop, not the album: the history earns it all back.
    return [];
  }
}

/** Every sticker ever earned on this phone. */
export function keptStickers(): StickerId[] {
  return readIds(EARNED_KEY);
}

/**
 * Files stickers as earned. Writes only when one is new, so calling it on every
 * render of the album costs a read.
 */
export function keepStickers(ids: readonly StickerId[]): void {
  const kept = keptStickers();
  const fresh = ids.filter((id) => !kept.includes(id));
  if (fresh.length === 0) return;
  kv.set(EARNED_KEY, JSON.stringify([...kept, ...fresh]));
  changed();
}

/**
 * The album is opening: decides which sticker, if any, arrives with a pop,
 * then files everything earned as seen. Called once per opening, so a second
 * look the same day shows the album as it is.
 */
export function openAlbum(earned: readonly StickerId[], today: string): StickerId | null {
  const seen = new Set(readIds(SEEN_KEY));
  const arrival = arrivalFor(earned, seen, kv.getString(ARRIVED_KEY) ?? null, today);
  const unseen = earned.filter((id) => !seen.has(id));
  if (unseen.length > 0) kv.set(SEEN_KEY, JSON.stringify([...seen, ...unseen]));
  if (arrival != null) kv.set(ARRIVED_KEY, today);
  if (unseen.length > 0 || arrival != null) changed();
  return arrival;
}
