import type { Tempo } from '../exercises';
import { HEEL_RAISE_TEMPO } from '../exercises';

import { planMeta, type DoseClass } from './catalogue-meta';
import { doseTimeline, timelineSeconds } from './timeline';

/**
 * How much of an exercise, at a level.
 *
 * One table per kind of work, three bands each (levels 1–2, 3, 4–5), and a row
 * of its own for every exercise that is not done the way its kind is (see
 * `OWN`). The level is the exercise's own place in its chain, so moving up the
 * chain is what moves the dose — there is no separate "intensity" dial to drift
 * out of step with it.
 */
export type PlanDose = {
  sets: number;
  reps?: number;
  holdSec?: number;
  tempo?: Tempo;
  /** One rep's length where there is neither a tempo nor a hold: a towel
   * scrunch is two seconds, a pogo hop one. Three when absent. */
  repSec?: number;
  perSide: boolean;
  /** Only the calf work on a step at levels 4–5: add a backpack. Never hops. */
  addWeight?: boolean;
};

type Band = 0 | 1 | 2;

function bandOf(level: number): Band {
  if (level <= 2) return 0;
  if (level === 3) return 1;
  return 2;
}

type Row = Omit<PlanDose, 'perSide'>;
type Bands = readonly [Row, Row, Row];

/**
 * By kind of work. Two sets is the default and three the top: these are short
 * daily sessions, and a third and fourth set is where people stop. Held
 * stretches and balance alternate feet, so the other foot's turn is the rest.
 */
const TABLE: Readonly<Record<DoseClass, Bands>> = {
  calf: [{ sets: 3, reps: 10 }, { sets: 3, reps: 12 }, { sets: 3, reps: 15 }],
  // The hold variant of the calf work: the same effort, spent as time at the top.
  calfHold: [{ sets: 3, holdSec: 20 }, { sets: 3, holdSec: 30 }, { sets: 3, holdSec: 30 }],
  arch: [{ sets: 2, reps: 6, holdSec: 5 }, { sets: 2, reps: 8, holdSec: 5 }, { sets: 3, reps: 8, holdSec: 5 }],
  // Band and hip work, and the accessories: plain strength reps.
  reps: [{ sets: 2, reps: 10 }, { sets: 2, reps: 12 }, { sets: 3, reps: 12 }],
  balance: [{ sets: 2, holdSec: 20 }, { sets: 2, holdSec: 30 }, { sets: 3, holdSec: 30 }],
  stretch: [{ sets: 2, holdSec: 30 }, { sets: 2, holdSec: 30 }, { sets: 3, holdSec: 30 }],
  // A roll or a massage, one foot after the other.
  recovery: [{ sets: 1, holdSec: 30 }, { sets: 1, holdSec: 45 }, { sets: 1, holdSec: 45 }],
};

/**
 * Exercises not done the way their kind is.
 *
 * - **Big toe lift**: a two-second hold, not five.
 * - **Short foot on one leg**: two sets at every level below the top; it is the
 *   hardest of the arch work and the longest per rep.
 * - **Heel raise on a towel**: the 3 · 2 · 3 tempo is eight seconds a rep, each
 *   leg, so two sets of eight (under five minutes); the backpack, not more
 *   reps, is how it gets harder. Four sets of ten was eleven minutes.
 * - **Single-leg heel raise on the floor**: the same move and tempo as the
 *   towel raise, without the step, so the same sets and reps.
 * - **Heel drop**: up on both, down slowly on one, four seconds a rep.
 * - **Pogo hops**: one second a hop.
 * - **Ankle rocks**: rocked, two seconds each, not held like a stretch.
 */
const OWN: Readonly<Record<string, Bands>> = {
  big_toe_lift: [{ sets: 2, reps: 10, holdSec: 2 }, { sets: 2, reps: 12, holdSec: 2 }, { sets: 3, reps: 12, holdSec: 2 }],
  short_foot_single: [{ sets: 2, reps: 6, holdSec: 5 }, { sets: 2, reps: 6, holdSec: 5 }, { sets: 2, reps: 8, holdSec: 5 }],
  heel_raise_towel: [{ sets: 2, reps: 6 }, { sets: 2, reps: 8 }, { sets: 2, reps: 8 }],
  heel_raise_plain: [{ sets: 2, reps: 6 }, { sets: 2, reps: 8 }, { sets: 2, reps: 8 }],
  heel_drop_straight: [{ sets: 2, reps: 8, repSec: 4 }, { sets: 2, reps: 10, repSec: 4 }, { sets: 2, reps: 12, repSec: 4 }],
  pogo_hops: [{ sets: 2, reps: 10, repSec: 1 }, { sets: 2, reps: 10, repSec: 1 }, { sets: 3, reps: 10, repSec: 1 }],
  ankle_rocks: [{ sets: 2, reps: 10, repSec: 2 }, { sets: 2, reps: 12, repSec: 2 }, { sets: 2, reps: 15, repSec: 2 }],
};

/**
 * Exercises done on both feet at once. The rest go one foot at a time.
 *
 * The big toe lift joined this list: it is done with both feet on the floor
 * together, and running it one foot after the
 * other only doubled the time.
 */
const BILATERAL = new Set([
  'heel_raise_double',
  'heel_raise_hold',
  'pogo_hops',
  'short_foot_double',
  'big_toe_lift',
]);

const TEMPO_IDS = new Set(['heel_raise_towel', 'heel_raise_plain']);

/**
 * The dose for an exercise at the level the plan has it at.
 *
 * `level` defaults to the exercise's own level; a day that steps back passes a
 * lower one. The single-leg heel raises keep their 3 · 2 · 3 tempo at every
 * level.
 *
 * The backpack is for the slow calf work on a step only. Pogo hops sit in the
 * same dose class at level 5, and "add a backpack" reached them too: weight is
 * never how hopping gets harder.
 */
export function doseFor(id: string, level?: number, hasStep = true): PlanDose {
  const meta = planMeta(id);
  const cls: DoseClass = meta?.dose ?? 'reps';
  const at = Math.max(1, Math.min(5, level ?? meta?.level ?? 1));
  const base = (OWN[id] ?? TABLE[cls])[bandOf(at)];
  const dose: PlanDose = { ...base, perSide: !BILATERAL.has(id) };
  if (TEMPO_IDS.has(id)) dose.tempo = HEEL_RAISE_TEMPO;
  if (cls === 'calf' && at >= 4 && hasStep && id !== 'pogo_hops') dose.addWeight = true;
  return dose;
}

/**
 * Seconds a dose takes: every set on every foot, the rests and the changes of
 * foot, exactly as the player runs it (`doseTimeline`). Used to fit a session
 * to its minutes and to print how long an exercise takes.
 */
export function doseSeconds(dose: PlanDose): number {
  return timelineSeconds(doseTimeline(dose));
}

/** A dose scaled by a factor of sets, never below one set. */
export function scaleSets(dose: PlanDose, factor: number): PlanDose {
  return { ...dose, sets: Math.max(1, Math.round(dose.sets * factor)) };
}

/**
 * A session's doses, cut until they fit its minutes.
 *
 * One set comes off at a time, from whichever exercise takes longest, until the
 * whole session fits or every exercise is down to one set. The exercises stay:
 * the plan chose them, and the focus one is never cut. One set of each is the
 * floor, so a three-minute day of two one-foot holds can still run a little
 * over, by seconds rather than by minutes.
 *
 * Without it a day said "3 min" and ran four times that: the week picked the
 * focus exercise and at least one more at their full doses whatever the
 * minutes, and the towel scrunch alone (three sets of eight five-second holds,
 * each foot) is six minutes. The player counts down exactly these seconds, so
 * what this returns is what the user lives through.
 */
export function fitDoses<T extends { dose: PlanDose }>(items: readonly T[], minutes: number): T[] {
  const budget = minutes * 60;
  const out: T[] = items.map((item) => ({ ...item, dose: { ...item.dose } }));
  let total = out.reduce((sum, item) => sum + doseSeconds(item.dose), 0);
  while (budget > 0 && total > budget) {
    let longest = -1;
    let most = 0;
    out.forEach((item, i) => {
      const seconds = doseSeconds(item.dose);
      if (item.dose.sets > 1 && seconds > most) {
        longest = i;
        most = seconds;
      }
    });
    if (longest < 0) break;
    const cut = { ...out[longest].dose, sets: out[longest].dose.sets - 1 };
    total += doseSeconds(cut) - most;
    out[longest] = { ...out[longest], dose: cut };
  }
  return out;
}
