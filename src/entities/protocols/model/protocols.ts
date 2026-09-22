import type { AccentName } from '@/shared/config';
import type { Key } from '@/shared/lib/i18n';

/**
 * The five short protocols, runnable any day, outside the programme.
 *
 * The app is useful on scheduled days. Pain is not on the schedule, so the one
 * question a user has most often — "what do I do right now?" — had no answer
 * between sessions. These are that answer.
 *
 * Everything here is assembled from what already exists: every exercise is in
 * the catalogue, every clip is already in the bucket, every colour is a token
 * already used for a day type. Nothing was recorded, drawn or invented for
 * this, which is what keeps five new entry points from becoming five new
 * things to maintain.
 *
 * Protocols are extra. They do not complete the day's session and do not
 * advance the plan — see `PROTOCOLS_ADVANCE_PROGRAM` for why that is written
 * down rather than merely true.
 */

export type ProtocolId = 'flare' | 'pre_run' | 'post_run' | 'at_work' | 'morning';

/** Where the user will be standing, sitting or lying while they run it. */
export type ProtocolPosition = 'seated' | 'standing' | 'in_bed';

export type ProtocolStep = {
  /** Catalogue id. The clip and the cue are looked up from it, so a protocol
   * cannot name footage the catalogue does not have. */
  readonly exerciseId: string;
  readonly seconds: number;
  /**
   * Halfway through, change feet.
   *
   * The same mechanism the programme's per-side moves already use: the player
   * splits the time, names the foot, and taps once at the switch. Written per
   * step rather than read from the catalogue's `perSide`, because a protocol
   * sets its own dose — a single-leg hold is forty-five seconds here and a
   * different length in the plan.
   */
  readonly switchAtHalf?: boolean;
};

export type Protocol = {
  readonly id: ProtocolId;
  /** What the card claims. Not derived from the steps — see `morning`. */
  readonly minutes: number;
  readonly position: ProtocolPosition;
  /** An existing accent, matched to the day type that means the same thing. */
  readonly accent: AccentName;
  readonly titleKey: Key;
  /** The one line shown in the player. Sets the intent before the first clip. */
  readonly cueKey: Key;
  readonly steps: readonly ProtocolStep[];
  /** Runnable without paying. True for exactly one — see `FREE_PROTOCOL`. */
  readonly free: boolean;
};

/**
 * The flare protocol is free, and it is the only one.
 *
 * Not generosity. The moment somebody's foot is bad is the moment they are
 * most likely to delete the app, and the moment real help buys the most trust.
 * Somebody who got relief for free in a bad hour converts better than somebody
 * who met a paywall while in pain.
 */
export const FREE_PROTOCOL: ProtocolId = 'flare';

/**
 * Running a protocol never advances the plan.
 *
 * A constant rather than a comment because it is the kind of rule that gets
 * broken by accident: the completion path runs through the same player as a
 * real session, and wiring it to the same "done" would silently tick off a day
 * the user has not trained. The tests assert against this.
 */
export const PROTOCOLS_ADVANCE_PROGRAM = false;

/**
 * The flare protocol loads nothing.
 *
 * Stated as a rule so a test can hold it. Adding a heel raise here would be an
 * easy, plausible edit — they are the most effective exercise in the catalogue
 * — and the worst possible one to hand somebody mid-flare, because they are the
 * two moves that load the fascia. Standing is out for the same reason.
 */
const FLARE_FORBIDS = { loadsFascia: true, standing: true } as const;
export const FLARE_RULES = FLARE_FORBIDS;

export const PROTOCOLS: readonly Protocol[] = [
  {
    id: 'flare',
    minutes: 3,
    position: 'seated',
    // The same red the leg map marks a painful zone with. It means the same
    // thing here, which is the only reason to reuse it.
    accent: 'red',
    titleKey: 'quick.flare.title',
    cueKey: 'quick.flare.cue',
    free: true,
    steps: [
      { exerciseId: 'foot_roll', seconds: 60 },
      { exerciseId: 'fascia_stretch', seconds: 60 },
      { exerciseId: 'toe_spread', seconds: 60 },
    ],
  },
  {
    id: 'pre_run',
    minutes: 2,
    position: 'standing',
    // Strength violet: this is activation, not stretching.
    accent: 'violet',
    titleKey: 'quick.preRun.title',
    cueKey: 'quick.preRun.cue',
    free: false,
    steps: [
      { exerciseId: 'ankle_rocks', seconds: 45 },
      { exerciseId: 'short_foot_double', seconds: 30 },
      { exerciseId: 'single_leg_hold', seconds: 45, switchAtHalf: true },
    ],
  },
  {
    id: 'post_run',
    minutes: 3,
    position: 'standing',
    // Mobility teal: three held stretches and nothing else.
    accent: 'teal',
    titleKey: 'quick.postRun.title',
    cueKey: 'quick.postRun.cue',
    free: false,
    steps: [
      { exerciseId: 'calf_stretch_straight', seconds: 60 },
      { exerciseId: 'calf_stretch_bent', seconds: 60 },
      { exerciseId: 'fascia_stretch', seconds: 60 },
    ],
  },
  {
    id: 'at_work',
    minutes: 2,
    position: 'standing',
    // Balance blue: standing control, done without anyone noticing.
    accent: 'blue',
    titleKey: 'quick.atWork.title',
    cueKey: 'quick.atWork.cue',
    free: false,
    steps: [
      { exerciseId: 'short_foot_double', seconds: 45 },
      { exerciseId: 'single_leg_hold', seconds: 45, switchAtHalf: true },
      { exerciseId: 'ankle_rocks', seconds: 30 },
    ],
  },
  {
    id: 'morning',
    // Two minutes, not one, and the steps add to exactly two — but the reason
    // to say two is clinical rather than arithmetic. The version that works is
    // ten ten-second holds per foot; a one-minute label would be a promise this
    // protocol could not keep.
    minutes: 2,
    position: 'in_bed',
    // Retest amber: sunrise, and this is the single highest-value instruction
    // in the whole programme.
    accent: 'amber',
    titleKey: 'quick.morning.title',
    cueKey: 'quick.morning.cue',
    free: false,
    steps: [
      // One entry per foot rather than one entry switching at half. The switch
      // is the point of the protocol, not an aside inside a longer move, and a
      // full minute on each is what the evidence uses.
      { exerciseId: 'fascia_stretch', seconds: 60 },
      { exerciseId: 'fascia_stretch', seconds: 60 },
    ],
  },
];

export const PROTOCOLS_BY_ID: Readonly<Record<ProtocolId, Protocol>> = Object.fromEntries(
  PROTOCOLS.map((protocol) => [protocol.id, protocol]),
) as Record<ProtocolId, Protocol>;

export function protocolById(id: ProtocolId): Protocol {
  return PROTOCOLS_BY_ID[id];
}

/** How long a protocol actually runs, from its steps. Distinct from `minutes`,
 * which is what the card claims — see `morning`. */
export function protocolSeconds(protocol: Protocol): number {
  return protocol.steps.reduce((total, step) => total + step.seconds, 0);
}
