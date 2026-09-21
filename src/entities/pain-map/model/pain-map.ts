import { kv } from '@/shared/lib/storage';

/**
 * Where on the foot it hurts.
 *
 * Six zones, and no more: these are the areas the programme can actually do
 * something about or rule out. A longer list would be a diagnosis form, and
 * this is a map.
 */
export type FootZone = 'heel' | 'achilles' | 'inner_ankle' | 'arch' | 'ball' | 'toes';

export type FootSide = 'left' | 'right' | 'both';

export const ZONE_LABEL: Readonly<Record<FootZone, string>> = {
  heel: 'Heel',
  achilles: 'Achilles',
  inner_ankle: 'Inner ankle',
  arch: 'Arch',
  ball: 'Ball of foot',
  toes: 'Toes',
};

/**
 * Which zone speaks for the set.
 *
 * Ordered by how much the programme can say about each rather than by anatomy:
 * a user who taps heel *and* arch is told about the heel, because that is the
 * pattern with the most behind it. `ball` and `toes` are absent — they are what
 * is left when none of these matched, and they are handled as a scope question
 * rather than as a pattern.
 */
const PRIORITY = ['heel', 'arch', 'inner_ankle', 'achilles'] as const;

/** A zone the programme has a pattern for. `ball` and `toes` are not among
 * them — that is the whole point of the scope note. */
type InScopeZone = (typeof PRIORITY)[number];

/**
 * What the programme knows about each pattern, in one line.
 *
 * Every one of these describes a mechanism, never a condition, and none of them
 * promises anything. That is not a style choice: naming a condition is a
 * diagnosis, and an app that hands someone a diagnosis off six tap targets has
 * earned every consequence of it.
 */
const PATTERN_LINE: Readonly<Record<InScopeZone, string>> = {
  heel: 'Heel pain is the most common pattern — and the one that responds fastest.',
  arch: 'Arch pain rarely starts in the arch. The muscle holding it up sits in your shin.',
  inner_ankle: 'Pain here usually follows the tendon that holds your arch up.',
  achilles: 'Achilles pain responds to load, not rest. Stopping entirely makes it stiffer.',
};

/**
 * What to say when the only thing selected is out of the programme's reach.
 *
 * Shown, not enforced. Being honest here costs one screen; the alternative is a
 * refund and a one-star review from someone the programme was never built for.
 */
export const OUT_OF_SCOPE_NOTE =
  'Pain under the ball of the foot or in the toes usually has a different cause. ' +
  'Walkito is built for heel and arch pain — for this, a podiatrist is the right first stop.';

/**
 * Answers to the broad pain question that this map can actually show.
 *
 * Lives here rather than beside the step list because it is a fact about the
 * diagram — it covers the foot and nothing above the ankle — and the step list
 * is merely the first thing to ask.
 */
const FOOT_ANSWERS = ['foot', 'heel', 'achilles'] as const;

/**
 * Whether the map applies to someone who answered the broad question this way.
 *
 * False for knee, hip and shin: showing a foot diagram to someone whose knee
 * hurts asks a question that does not apply to them.
 */
export function coversAnswer(pain: unknown): boolean {
  if (!Array.isArray(pain)) return false;
  return FOOT_ANSWERS.some((value) => pain.includes(value));
}

/** The zone the copy speaks for, or null when nothing in scope was chosen. */
export function primaryZone(zones: readonly FootZone[]): InScopeZone | null {
  return PRIORITY.find((zone) => zones.includes(zone)) ?? null;
}

/**
 * Whether the selection is entirely outside what the programme treats.
 *
 * True only when *nothing* in scope was picked. Someone who taps the ball of
 * the foot alongside their heel has heel pain and mentioned something else too
 * — telling them to see a podiatrist instead would be answering a question they
 * did not ask.
 */
export function isOutOfScope(zones: readonly FootZone[]): boolean {
  return zones.length > 0 && primaryZone(zones) == null;
}

/** The one line under the chips: the pattern, or the scope note, or nothing. */
export function patternFor(zones: readonly FootZone[]): string | null {
  const zone = primaryZone(zones);
  if (zone != null) return PATTERN_LINE[zone];
  return isOutOfScope(zones) ? OUT_OF_SCOPE_NOTE : null;
}

/**
 * How the rest of the app keys off the map.
 *
 * Collapses six zones onto the four things the programme actually branches on —
 * the arch track, the heel pattern, the tendon, and everything else.
 */
export type PatternKey = 'heel' | 'arch' | 'achilles' | 'none';

export function patternKeyFor(zones: readonly FootZone[]): PatternKey {
  const zone = primaryZone(zones);
  if (zone === 'heel') return 'heel';
  if (zone === 'arch' || zone === 'inner_ankle') return 'arch';
  if (zone === 'achilles') return 'achilles';
  return 'none';
}

export type PainMap = {
  side: FootSide;
  zones: FootZone[];
  outOfScope: boolean;
  /** ISO date. */
  recordedAt: string;
  source: 'onboarding' | 'retest';
};

const KEY = 'pain/maps';

/**
 * Every map the user has drawn, oldest first.
 *
 * A history rather than a single value, because the same picker comes back at
 * every retest and the interesting thing is the change: three zones in January
 * and one in March is the programme working, and a single overwritten row would
 * have thrown that away.
 */
export function painMaps(): PainMap[] {
  const raw = kv.getString(KEY);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as PainMap[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('[pain-map] stored history unreadable, ignoring', error);
    return [];
  }
}

/** The most recent map, which is what every screen but the retest reads. */
export function latestPainMap(): PainMap | null {
  const all = painMaps();
  return all.length > 0 ? all[all.length - 1] : null;
}

/** Appends a map to the history. */
export function recordPainMap(
  input: Omit<PainMap, 'recordedAt' | 'outOfScope'> & { recordedAt?: string },
): PainMap {
  const entry: PainMap = {
    side: input.side,
    zones: [...input.zones],
    // Derived on the way in rather than passed: it is a property of the zones,
    // and a caller that could disagree with them would eventually disagree.
    outOfScope: isOutOfScope(input.zones),
    recordedAt: input.recordedAt ?? new Date().toISOString(),
    source: input.source,
  };

  const next = [...painMaps(), entry];
  kv.set(KEY, JSON.stringify(next));
  return entry;
}
