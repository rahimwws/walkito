import { CHAINS, FALLBACKS, planMeta, type ChainName, type Equipment } from './catalogue-meta';

/**
 * Whether an exercise may be scheduled, and what stands in for it when not.
 *
 * Every rule that takes an exercise off the table lives here, so the week
 * builder and the morning adjustment ask one question and get one answer.
 */
export type EligibilityContext = {
  /** Catalogue ids with a clip in the manifest. The rule: no clip, no slot. */
  clips: ReadonlySet<string>;
  equipmentMissing: readonly Equipment[];
  /** Marked "can't do" by the user, for any reason. */
  cantDo: ReadonlySet<string>;
  /** Morning pain for the last 14 days, oldest first; null where not logged. */
  painLast14: readonly (number | null)[];
  /** Completed sessions that included the standing short foot. */
  shortFootStandingSessions: number;
  /** Week one: nothing that loads the fascia, nothing above level 2. */
  settling: boolean;
};

/** `band_inversion` waits for the arch's own muscles: six standing short-foot sessions first. */
export const BAND_INVERSION_AFTER = 6;
/** How many of the last 14 mornings must be logged before pogo hops can count as "pain stayed low". */
const POGO_MIN_READINGS = 10;
const POGO_MAX_PAIN = 2;

/** The rule for pogo hops: pain has stayed at 2 or under for the last fortnight. */
export function pogoAllowed(painLast14: readonly (number | null)[]): boolean {
  const logged = painLast14.filter((p): p is number => p != null);
  return logged.length >= POGO_MIN_READINGS && logged.every((p) => p <= POGO_MAX_PAIN);
}

/**
 * The id to actually schedule for `id`: itself when it has a clip, else its
 * fallback, else nothing. Only the clip question — the other rules are in
 * `allowed`.
 */
export function playableId(id: string, ctx: Pick<EligibilityContext, 'clips' | 'equipmentMissing'>): string | null {
  if (ctx.clips.has(id)) return id;
  let fallback = FALLBACKS[id];
  if (id === 'single_leg_mini_squat' && ctx.equipmentMissing.includes('step')) fallback = 'hip_abduction';
  if (fallback == null || fallback === id) return null;
  return playableId(fallback, ctx);
}

/** Whether `id` may appear in a session at all, under this context. */
export function allowed(id: string, ctx: EligibilityContext): boolean {
  const meta = planMeta(id);
  if (meta == null) return false;
  if (!ctx.clips.has(id)) return false;
  if (ctx.cantDo.has(id)) return false;
  if (meta.equipment.some((item) => ctx.equipmentMissing.includes(item))) return false;
  if (ctx.settling && (meta.fascia || meta.level > 2)) return false;
  if (id === 'pogo_hops' && !pogoAllowed(ctx.painLast14)) return false;
  if (id === 'band_inversion' && ctx.shortFootStandingSessions < BAND_INVERSION_AFTER) return false;
  return true;
}

/**
 * The exercise at or below `index` on a chain that is allowed — the "nearest
 * one in its chain, same level or lower" the swap rule asks for. Null when
 * nothing on the chain below that point is allowed.
 */
export function atOrBelow(
  chain: ChainName,
  index: number,
  ctx: EligibilityContext,
): { id: string; index: number } | null {
  const steps = CHAINS[chain];
  for (let i = Math.min(index, steps.length - 1); i >= 0; i -= 1) {
    if (allowed(steps[i], ctx)) return { id: steps[i], index: i };
  }
  return null;
}

/** The next allowed step above `index`, for progression. Null at the top. */
export function nextAbove(
  chain: ChainName,
  index: number,
  ctx: EligibilityContext,
): { id: string; index: number } | null {
  const steps = CHAINS[chain];
  for (let i = index + 1; i < steps.length; i += 1) {
    if (allowed(steps[i], ctx)) return { id: steps[i], index: i };
  }
  return null;
}
