import type { SessionKind } from '@/entities/program';

/**
 * The mascot each kind of day wears.
 *
 * Three poses for the three kinds that ask something of the user, and nothing
 * at all for recovery. That absence is the point rather than a missing asset: a
 * rest day is the one day with no work to illustrate, and giving it a figure
 * mid-exercise would quietly turn "rest" into another thing to perform.
 *
 * One map, so re-pairing a pose with a kind is a single line here and nothing
 * else in the app has to know.
 */
export const KIND_ART: Readonly<Record<SessionKind, number | null>> = {
  // Seated, working the foot over a ball — the loaded work of a strength day.
  strength: require('@assets/program/mascot-strength.png'),
  // Standing, holding the foot behind: a stretch, which is what mobility is.
  mobility: require('@assets/program/mascot-mobility.png'),
  // On one leg with the arms out, wobbling. Nothing else says balance as fast.
  balance: require('@assets/program/mascot-balance.png'),
  recovery: null,
};

/** The pose for a day, or null where the day is a rest. */
export function artFor(kind: SessionKind): number | null {
  return KIND_ART[kind];
}
