import type { ProtocolId } from '@/entities/protocols';

/**
 * Which Library routines Today shows, in what order — section 5.2 of the plan
 * spec: the right card at the right moment, then the user's favourites, then
 * the rest, six at most.
 *
 * Two of the spec's moments have no routine of their own yet: "after a long day
 * on your feet" is served by the at-work routine, the closest in what it does,
 * and "before bed" has none, so that rule is skipped until one exists.
 */
export type LibraryFacts = {
  painToday: number | null;
  /** When the last run ended, epoch ms. Null while workout reads are not wired. */
  lastRunEndedAt: number | null;
  now: number;
  checkedInToday: boolean;
  stepsToday: number | null;
  favourites: readonly ProtocolId[];
  all: readonly ProtocolId[];
};

export const LIBRARY_MAX = 6;
const RUN_WINDOW_MS = 2 * 60 * 60 * 1000;
const LONG_DAY_STEPS = 12_000;

/** The first rule that matches, or null when none has a routine to offer. */
export function momentCard(f: LibraryFacts): ProtocolId {
  const hour = new Date(f.now).getHours();
  if (f.painToday != null && f.painToday >= 7) return 'flare';
  if (f.lastRunEndedAt != null && f.now - f.lastRunEndedAt >= 0 && f.now - f.lastRunEndedAt <= RUN_WINDOW_MS) return 'post_run';
  if (hour >= 5 && hour < 10 && !f.checkedInToday) return 'morning';
  if (f.stepsToday != null && f.stepsToday >= LONG_DAY_STEPS) return 'at_work';
  return 'pre_run';
}

export function libraryOrder(f: LibraryFacts): ProtocolId[] {
  const out: ProtocolId[] = [];
  const add = (id: ProtocolId) => {
    if (f.all.includes(id) && !out.includes(id)) out.push(id);
  };
  add(momentCard(f));
  for (const id of f.favourites) add(id);
  for (const id of f.all) add(id);
  return out.slice(0, LIBRARY_MAX);
}
