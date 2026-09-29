import { kv } from '@/shared/lib/storage';

import { ensureHealthConnect, healthConnect } from './health.android';

/**
 * Finished sessions, written to Health Connect — the Android side of
 * `write-back.ts`, with the same ledger so a session is written once.
 *
 * Health Connect has no mindful-minutes record, so a recovery day goes in as
 * stretching rather than as a workout, for the same reason iOS keeps it out of
 * the Move ring: rolling a foot on the floor is not exercise.
 */
export const WRITE_TYPES = ['ExerciseSession'] as const;

const LEDGER_KEY = 'health.sessions.written';
const CALISTHENICS = 13;
const STRETCHING = 71;

function written(): Set<string> {
  const raw = kv.getString(LEDGER_KEY);
  if (raw == null) return new Set();
  try {
    const parsed: unknown = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

function remember(key: string): void {
  const all = written();
  all.add(key);
  kv.set(LEDGER_KEY, JSON.stringify([...all]));
}

export type SessionRecord = {
  dayNumber: number;
  moves: readonly string[];
  recovery: boolean;
  startedAt: Date;
  endedAt: Date;
};

function keyFor(session: SessionRecord): string {
  return `${session.dayNumber}:${[...session.moves].sort().join('|')}`;
}

export async function saveSessionToHealth(session: SessionRecord): Promise<boolean> {
  const hc = healthConnect();
  if (hc == null || !(await ensureHealthConnect())) return false;
  const key = keyFor(session);
  if (written().has(key)) return false;
  try {
    await hc.insertRecords([
      {
        recordType: 'ExerciseSession',
        exerciseType: session.recovery ? STRETCHING : CALISTHENICS,
        title: 'Walkito',
        startTime: session.startedAt.toISOString(),
        endTime: session.endedAt.toISOString(),
      },
    ]);
    remember(key);
    return true;
  } catch {
    return false;
  }
}

export function resetHealthWrites(): void {
  kv.remove(LEDGER_KEY);
}
