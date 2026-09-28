import type { Tempo } from '../exercises';
import { HEEL_RAISE_TEMPO } from '../exercises';

import { planMeta, type DoseClass } from './catalogue-meta';

/**
 * How much of an exercise, at a level.
 *
 * One table per kind of work, three bands each (levels 1–2, 3, 4–5). The level
 * is the exercise's own place in its chain, so moving up the chain is what
 * moves the dose — there is no separate "intensity" dial to drift out of step
 * with it.
 */
export type PlanDose = {
  sets: number;
  reps?: number;
  holdSec?: number;
  tempo?: Tempo;
  perSide: boolean;
  /** Only the calf work at levels 4–5 with a step: add a backpack. */
  addWeight?: boolean;
};

type Band = 0 | 1 | 2;

function bandOf(level: number): Band {
  if (level <= 2) return 0;
  if (level === 3) return 1;
  return 2;
}

const TABLE: Readonly<Record<DoseClass, readonly [Omit<PlanDose, 'perSide'>, Omit<PlanDose, 'perSide'>, Omit<PlanDose, 'perSide'>]>> = {
  calf: [{ sets: 3, reps: 10 }, { sets: 3, reps: 12 }, { sets: 4, reps: 10 }],
  // The hold variant of the calf work: the same effort, spent as time at the top.
  calfHold: [{ sets: 3, holdSec: 20 }, { sets: 3, holdSec: 30 }, { sets: 4, holdSec: 30 }],
  arch: [{ sets: 3, reps: 8, holdSec: 5 }, { sets: 3, reps: 10, holdSec: 5 }, { sets: 3, reps: 10, holdSec: 8 }],
  // Band and hip work, and the accessories: plain strength reps.
  reps: [{ sets: 3, reps: 10 }, { sets: 3, reps: 12 }, { sets: 4, reps: 10 }],
  balance: [{ sets: 3, holdSec: 20 }, { sets: 3, holdSec: 30 }, { sets: 3, holdSec: 40 }],
  stretch: [{ sets: 2, holdSec: 30 }, { sets: 3, holdSec: 30 }, { sets: 3, holdSec: 30 }],
  recovery: [{ sets: 1, holdSec: 60 }, { sets: 1, holdSec: 90 }, { sets: 1, holdSec: 90 }],
};

/** Exercises done one leg at a time. The rest are both feet together. */
const BILATERAL = new Set(['heel_raise_double', 'heel_raise_seated', 'heel_raise_hold', 'tibialis_raise', 'pogo_hops', 'short_foot_double']);

/**
 * The dose for an exercise at the level the plan has it at.
 *
 * `level` defaults to the exercise's own level; a day that steps back passes a
 * lower one. `heel_raise_towel` keeps its 3 · 2 · 3 tempo at every level.
 */
export function doseFor(id: string, level?: number, hasStep = true): PlanDose {
  const meta = planMeta(id);
  const cls: DoseClass = meta?.dose ?? 'reps';
  const at = Math.max(1, Math.min(5, level ?? meta?.level ?? 1));
  const base = TABLE[cls][bandOf(at)];
  const dose: PlanDose = { ...base, perSide: !BILATERAL.has(id) && cls !== 'recovery' };
  if (id === 'heel_raise_towel') dose.tempo = HEEL_RAISE_TEMPO;
  if (cls === 'calf' && at >= 4 && hasStep) dose.addWeight = true;
  return dose;
}

/** Seconds a dose takes, rests included. Used to fit a session to its minutes. */
export function doseSeconds(dose: PlanDose): number {
  const perRep = dose.tempo != null ? dose.tempo.up + dose.tempo.hold + dose.tempo.down : 3;
  const work =
    dose.reps != null
      ? dose.reps * (dose.holdSec != null ? dose.holdSec + 2 : perRep)
      : (dose.holdSec ?? 30);
  const sides = dose.perSide ? 2 : 1;
  const rests = Math.max(0, dose.sets - 1) * 15;
  return dose.sets * work * sides + rests;
}

/** A dose scaled by a factor of sets, never below one set. */
export function scaleSets(dose: PlanDose, factor: number): PlanDose {
  return { ...dose, sets: Math.max(1, Math.round(dose.sets * factor)) };
}
