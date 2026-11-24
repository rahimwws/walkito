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
 * The place is kept by exercise, not only by position. Today can be planned
 * again between two opens (a pain check, "Can't do this"), and the list that
 * comes back is a different list: a move swapped, one taken out, the order
 * changed. A place kept as "the third move" was then thrown away, or worse,
 * landed on a move she had not reached. So the moves she had finished are
 * written down by id, and the session picks up at the first move of the new
 * list she has not done, part-way through only when it is the move she left.
 * The plan's sessions are also kept under a key of their own (the plan day's
 * date, `resumeKey`), not under the list of moves, which changes with it.
 *
 * Kept for the day it was written on only. Tomorrow's session of the same name
 * is a new session, and resuming yesterday's half-finished one into it would
 * be carrying over a dose the plan has already moved past.
 */
export type ResumePoint = {
  /** Which move, by position in the list as it is now. */
  step: number;
  /** How far through that move, 0–1. */
  fraction: number;
  /** Moves passed over with Skip in this session, by exercise id: still
   * skipped when it is picked up again, so the record of the session says so. */
  skipped: readonly string[];
};

type Stored = {
  date: string;
  /** The session's moves when it was written, by exercise id. */
  ids: string[];
  step: number;
  fraction: number;
  skipped?: string[];
};

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
 * Where a saved place lands in the list as it is now.
 *
 * The moves before the saved one are done. The session picks up at the first
 * move of `ids` that is not among them (each done move counts once, for a list
 * that holds a move twice). Part-way through only when that is the very move
 * she left; any other move starts from its beginning. Null when nothing is
 * worth coming back to: nothing done yet, or nothing left that is not done.
 */
export function placeIn(saved: { ids: readonly string[]; step: number; fraction: number }, ids: readonly string[]): { step: number; fraction: number } | null {
  if (!Number.isInteger(saved.step) || saved.step < 0 || saved.step >= saved.ids.length) return null;
  const done = new Map<string, number>();
  for (const id of saved.ids.slice(0, saved.step)) done.set(id, (done.get(id) ?? 0) + 1);
  let step = -1;
  for (let i = 0; i < ids.length; i += 1) {
    const left = done.get(ids[i]) ?? 0;
    if (left === 0) {
      step = i;
      break;
    }
    done.set(ids[i], left - 1);
  }
  if (step < 0) return null;
  const same = ids[step] === saved.ids[saved.step];
  const fraction = same ? Math.min(Math.max(Number(saved.fraction) || 0, 0), 0.99) : 0;
  // Nothing done yet is not a place to come back to.
  if (step === 0 && fraction < 0.02) return null;
  return { step, fraction };
}

/**
 * The saved place for this session, if there is one worth resuming, in terms
 * of `ids`, the session's moves as they are now.
 */
export function readResume(id: string, ids: readonly string[], now: Date = new Date()): ResumePoint | null {
  const raw = kv.getString(keyFor(id));
  if (raw == null) return null;
  try {
    const stored = JSON.parse(raw) as Partial<Stored>;
    if (stored.date !== today(now) || !Array.isArray(stored.ids)) return null;
    const place = placeIn({ ids: stored.ids, step: Number(stored.step), fraction: Number(stored.fraction) }, ids);
    if (place == null) return null;
    const skipped = (stored.skipped ?? []).filter((skip) => ids.includes(skip));
    return { ...place, skipped };
  } catch {
    return null;
  }
}

export function writeResume(id: string, ids: readonly string[], point: ResumePoint, now: Date = new Date()): void {
  const stored: Stored = { date: today(now), ids: [...ids], step: point.step, fraction: point.fraction, skipped: [...point.skipped] };
  kv.set(keyFor(id), JSON.stringify(stored));
}

/** The session ran to its end. Nothing left to come back to. */
export function clearResume(id: string): void {
  kv.remove(keyFor(id));
}
