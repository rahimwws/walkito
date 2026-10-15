import { useEffect, useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';
import { currentUserId, supabase } from '@/shared/lib/supabase';

/**
 * How many other people moved their feet today.
 *
 * Read from `community_pulse()` (migration 0020): distinct accounts with a
 * session finished in the last 24 hours, the caller and the test accounts
 * left out. A number and nothing else; nothing about anybody's body leaves
 * or arrives. (The function also returns club member counts from when the
 * club was a group chat; the app no longer reads them.)
 *
 * Cached in MMKV and asked again at most every ten minutes, so the end of a
 * session never waits on the network: it shows the last count it had, or
 * nothing at all before the first one arrives.
 */
export type CommunityPulse = {
  /** Other people with a session finished in the last 24 hours, or null
   * until the server has answered once. */
  othersToday: number | null;
};

/** Below this the line is not shown: "3 others moved with you" on a quiet
 * night says the opposite of what it means to. */
export const PULSE_MIN_OTHERS = 10;

const KEY = 'community/pulse';
const FRESH_MS = 10 * 60 * 1000;

type Stored = CommunityPulse & { fetchedAt: number };

const EMPTY: Stored = { othersToday: null, fetchedAt: 0 };

function read(): Stored {
  const raw = kv.getString(KEY);
  if (raw == null) return EMPTY;
  try {
    return { ...EMPTY, ...(JSON.parse(raw) as Partial<Stored>) };
  } catch {
    return EMPTY;
  }
}

let current = read();
let inFlight: Promise<void> | null = null;
const listeners = new Set<() => void>();

function set(next: Stored): void {
  current = next;
  kv.set(KEY, JSON.stringify(next));
  for (const listener of listeners) listener();
}

type Row = { others_today: number | null };

const count = (value: unknown): number | null => (typeof value === 'number' && Number.isFinite(value) ? value : null);

/**
 * Asks the server again unless the last answer is under ten minutes old.
 * Silent on failure: the last count stays, and a missing one shows nothing.
 */
export function refreshCommunityPulse(now: number = Date.now()): Promise<void> {
  if (now - current.fetchedAt < FRESH_MS) return Promise.resolve();
  if (inFlight != null) return inFlight;
  inFlight = (async () => {
    const client = supabase;
    if (client == null || (await currentUserId()) == null) return;
    const { data, error } = await client.rpc('community_pulse');
    const row = (Array.isArray(data) ? data[0] : data) as Row | null | undefined;
    if (error != null || row == null) return;
    set({
      othersToday: count(row.others_today),
      fetchedAt: now,
    });
  })()
    .catch(() => {})
    .finally(() => {
      inFlight = null;
    });
  return inFlight;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const snapshot = () => current;

/** The last known pulse, asked again on mount when it is stale. */
export function useCommunityPulse(): CommunityPulse {
  const pulse = useSyncExternalStore(subscribe, snapshot, snapshot);
  useEffect(() => {
    void refreshCommunityPulse();
  }, []);
  return pulse;
}
