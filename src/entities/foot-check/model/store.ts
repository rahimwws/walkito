import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * The ankle bends this person has measured, newest last.
 *
 * On this phone only. They are measurements of a body: never sent to
 * analytics, never to the server, and gone with the app.
 */
export type AnkleRecord = {
  /** When it was taken, epoch ms. */
  at: number;
  /** Degrees. */
  left: number;
  right: number;
};

const KEY = 'foot-check/ankle';
/** Two years of fortnightly checks. */
const KEPT = 52;

function read(): AnkleRecord[] {
  const raw = kv.getString(KEY);
  if (raw == null) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (row): row is AnkleRecord =>
        row != null &&
        typeof (row as AnkleRecord).at === 'number' &&
        typeof (row as AnkleRecord).left === 'number' &&
        typeof (row as AnkleRecord).right === 'number',
    );
  } catch {
    return [];
  }
}

let records: readonly AnkleRecord[] = read();

const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function write(next: readonly AnkleRecord[]): void {
  records = next;
  if (next.length === 0) kv.remove(KEY);
  else kv.set(KEY, JSON.stringify(next));
  for (const listener of listeners) listener();
}

export function ankleRecords(): readonly AnkleRecord[] {
  return records;
}

/** The newest measurement, or null before the first. */
export function latestAnkle(): AnkleRecord | null {
  return records.length > 0 ? records[records.length - 1] : null;
}

export function saveAnkle(left: number, right: number, at: number = Date.now()): void {
  write([...records, { at, left, right }].slice(-KEPT));
}

export function useAnkleRecords(): readonly AnkleRecord[] {
  return useSyncExternalStore(subscribe, ankleRecords, ankleRecords);
}

/**
 * Development only: a believable history (`count` checks a fortnight apart,
 * the left ankle catching up), or none (`count` 0).
 */
export function devSeedAnkle(count: number, now: number = Date.now()): void {
  if (!__DEV__) return;
  const fortnight = 14 * 24 * 60 * 60 * 1000;
  write(
    Array.from({ length: count }, (_, i) => ({
      at: now - (count - 1 - i) * fortnight,
      left: 31 + i * 2,
      right: 38 + i,
    })),
  );
}
