import { kv } from '@/shared/lib/storage';

/**
 * Where a session was left, so opening it again carries on from there.
 *
 * Closing the player half-way used to throw the place away: the next open
 * started the first move over, with its full countdown, and a person who had
 * already done two of three exercises was asked to do them again. Now the
 * move and how far into it they were is written down on the way out, and read
 * back on the way in.
 *
 * Kept for the day it was written on only. Tomorrow's session of the same name
 * is a new session, and resuming yesterday's half-finished one into it would
 * be carrying over a dose the plan has already moved past.
 */
export type ResumePoint = {
  /** Which move, by position in the list. */
  step: number;
  /** How far through that move, 0–1. */
  fraction: number;
};

type Stored = ResumePoint & { date: string; length: number };

const PREFIX = 'session/resume/';

function keyFor(id: string): string {
  return `${PREFIX}${id}`;
}

/** Today's local date. Written out rather than imported from the program so
 * the player can resume a protocol for someone who has no program state. */
function today(now = new Date()): string {
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${m}-${d}`;
}

/**
 * The saved place for this session, if there is one worth resuming.
 *
 * `length` is the number of moves the session has now. A list that changed
 * shape since — a pain check that swapped the day for recovery, a language
 * change that reordered nothing but is not worth trusting — makes the saved
 * position meaningless, so it is dropped rather than mapped.
 */
export function readResume(id: string, length: number): ResumePoint | null {
  const raw = kv.getString(keyFor(id));
  if (raw == null) return null;
  try {
    const stored = JSON.parse(raw) as Stored;
    if (stored.date !== today() || stored.length !== length) return null;
    if (!Number.isInteger(stored.step) || stored.step < 0 || stored.step >= length) return null;
    const fraction = Math.min(Math.max(Number(stored.fraction) || 0, 0), 0.99);
    // Nothing done yet is not a place to come back to.
    if (stored.step === 0 && fraction < 0.02) return null;
    return { step: stored.step, fraction };
  } catch {
    return null;
  }
}

export function writeResume(id: string, length: number, point: ResumePoint): void {
  const stored: Stored = { ...point, date: today(), length };
  kv.set(keyFor(id), JSON.stringify(stored));
}

/** The session ran to its end. Nothing left to come back to. */
export function clearResume(id: string): void {
  kv.remove(keyFor(id));
}
