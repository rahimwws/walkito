import { planMeta, type DayType, type ExerciseCategory, type PlanKind } from '@/entities/program';
import type { AccentName } from '@/shared/config';
import type { FluentName } from '@/shared/ui/fluent-icon';

/**
 * How each kind of work looks on the plan screen: its Fluent emoji and its
 * accent.
 *
 * The emoji is content, so it is the colourful set (the onboarding's answers
 * draw from it too); the arrows, the clock and the lock around it stay
 * Hugeicons, which are chrome. The accent names the kind and never rates it:
 * a recovery day is amber because it is recovery, not because it counts for
 * less, and a move keeps its accent whether it is done or not.
 */
export type Look = { art: FluentName; accent: AccentName };

/** The plan's four kinds of work. `SessionKind` (the old program's day) is the
 * same four, so a `ProgramDay` reads this table too. */
export const KIND_LOOK: Readonly<Record<PlanKind, Look>> = {
  strength: { art: 'strength', accent: 'violet' },
  mobility: { art: 'stretch', accent: 'teal' },
  balance: { art: 'balance', accent: 'blue' },
  recovery: { art: 'relief', accent: 'amber' },
};

/** A test is measured with a ruler and wears the checkpoint's amber. */
export const TEST_LOOK: Look = { art: 'test', accent: 'amber' };

/** A planned rest: asleep, and no accent, since there is no work to colour. */
export const REST_ART: FluentName = 'rest';

/** A day of the weekly plan. Null accent for a rest day. */
export function dayLook(type: DayType): { art: FluentName; accent: AccentName | null } {
  if (type === 'test') return TEST_LOOK;
  if (type === 'rest') return { art: REST_ART, accent: null };
  return KIND_LOOK[type];
}

/** The catalogue's categories, for a move the plan has no row for (the
 * barefoot habit). The same accents Home's task list wears. */
const CATEGORY_LOOK: Readonly<Record<ExerciseCategory, Look>> = {
  Fitness: KIND_LOOK.strength,
  Mobility: KIND_LOOK.mobility,
  Recovery: KIND_LOOK.recovery,
  Habit: { art: 'seedling', accent: 'blue' },
};

/**
 * One move's look, from what the plan says the move is for.
 *
 * The plan's own kind rather than the catalogue's category: the catalogue
 * files every balance and arch move under Fitness, which drew a column of
 * identical biceps. Strength work that only trains the arch is foot work, and
 * wears the foot; everything else wears its kind.
 */
export function moveLook(id: string, category: ExerciseCategory): Look {
  const meta = planMeta(id);
  if (meta == null) return CATEGORY_LOOK[category];
  if (meta.kind === 'strength' && meta.tags.length > 0 && meta.tags.every((tag) => tag === 'arch')) {
    return { art: 'foot', accent: KIND_LOOK.strength.accent };
  }
  return KIND_LOOK[meta.kind];
}
