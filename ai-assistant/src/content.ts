/**
 * Everything the assistant says about exercises, taken from the app.
 *
 * Names, cues and dose templates are the app's English catalogue; the plan
 * metadata, doses, eligibility rules and the week builder are the app's own
 * modules, bundled from `../src` (see scripts/build.mjs for the two shims).
 * Nothing here writes an exercise, a dose or a safety rule of its own.
 */
import { PROTOCOLS_BY_ID, type ProtocolId } from '@/entities/protocols/model/protocols';
import { PLAN_META, PLAN_META_BY_ID, type Equipment } from '@/entities/program/model/plan/catalogue-meta';
import { doseFor, type PlanDose } from '@/entities/program/model/plan/dose';
import { CLIPS, CLIP_BUCKET } from '@/shared/config/clip-manifest';
import { EXERCISES_EN } from '@/shared/lib/i18n/catalogue/en/exercises';
import { QUICK_EN } from '@/shared/lib/i18n/catalogue/en/quick';

declare const __SUPABASE_URL__: string;

const COPY = EXERCISES_EN as Record<string, string | { one: string; other: string }>;
const QUICK = QUICK_EN as Record<string, string | { one: string; other: string }>;

const camel = (id: string) => id.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());

function text(table: Record<string, unknown>, key: string): string {
  const value = table[key];
  if (typeof value !== 'string') throw new Error(`content: missing copy ${key}`);
  return value;
}

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? `{${name}}`));

/** Every exercise the assistant may show: the app's 26 plannable ones, plus
 * plain heel raises, which the app plays as the fallback for a towel. */
export const EXERCISE_IDS = [...PLAN_META.map((m) => m.id), 'heel_raise_plain'] as const;

export function exerciseName(id: string): string {
  return text(COPY, `exercises.${camel(id)}.title`);
}

export function exerciseCue(id: string): string {
  return text(COPY, `exercises.${camel(id)}.cue`);
}

export function exerciseWhy(id: string): string {
  return text(COPY, `exercises.${camel(id)}.rationale`);
}

/** The app's dose label (`prescription.ts` doseLabel), English. */
export function doseLabel(dose: Pick<PlanDose, 'sets' | 'reps' | 'holdSec' | 'perSide'>): string {
  let core: string;
  if (dose.reps != null) core = fill(text(COPY, 'exercises.dose.setsReps'), { sets: dose.sets, reps: dose.reps });
  else if (dose.holdSec != null) {
    if (dose.sets === 1) {
      core =
        dose.holdSec >= 60
          ? fill(text(COPY, 'exercises.dose.holdMinutes'), { minutes: Math.round(dose.holdSec / 60) })
          : fill(text(COPY, 'exercises.dose.hold'), { seconds: dose.holdSec });
    } else core = fill(text(COPY, 'exercises.dose.setsHold'), { sets: dose.sets, seconds: dose.holdSec });
  } else {
    const forms = COPY['exercises.dose.sets'] as { one: string; other: string };
    core = fill(dose.sets === 1 ? forms.one : forms.other, { count: dose.sets });
  }
  return dose.perSide ? fill(text(COPY, 'exercises.dose.bothFeet'), { dose: core }) : core;
}

export type Clip = { src: string; poster?: string };

/**
 * The clip for an exercise, or null. Only clips in the app's manifest are ever
 * returned: the manifest holds a file only once its hash is recorded, which is
 * the app's own bar for playing it. (The manifest has no ok/weak/wrong status
 * yet; when it gets one, filter on it here.)
 */
export function clipFor(id: string, manifest: Record<string, { file: string; hash: string }> = CLIPS): Clip | null {
  const entry = manifest[id];
  if (!entry || !/^[0-9a-f]{16}$/.test(entry.hash)) return null;
  if (MANNEQUIN_CLIPS.has(id)) return null;
  // `#t=0.1`: the first frame of the clip itself as the still, not the site's
  // older posters, which are a different recording.
  return { src: `${__SUPABASE_URL__}/storage/v1/object/public/${CLIP_BUCKET}/${entry.file}#t=0.1` };
}

/**
 * Clips still drawn with a grey mannequin rather than filmed with a person
 * (checked frame by frame, 2026-10-09). The assistant shows people only: these
 * exercises get no video here, so a plan picks the next exercise that has one.
 * Take an id off once its clip is re-recorded.
 */
export const MANNEQUIN_CLIPS: ReadonlySet<string> = new Set([
  'fascia_stretch',
  'ankle_rocks',
  'towel_scrunch',
  'knee_to_wall',
  'heel_drop_straight',
]);

export type ExerciseCard = {
  id: string;
  name: string;
  cue: string;
  dose: string;
  seconds?: number;
  clip: Clip | null;
};

export function exerciseCard(id: string, dose: string, seconds?: number): ExerciseCard {
  return { id, name: exerciseName(id), cue: exerciseCue(id), dose, ...(seconds ? { seconds } : {}), clip: clipFor(id) };
}

/** The starting dose the app gives an exercise (level 1, or its own level). */
export function startingDose(id: string): PlanDose {
  const meta = PLAN_META_BY_ID[id as keyof typeof PLAN_META_BY_ID];
  return doseFor(id, meta?.level ?? 1);
}

/** One of the app's quick routines, as cards: title, the line it opens with,
 * and each step's exercise for its seconds. */
export function routine(id: ProtocolId) {
  const protocol = PROTOCOLS_BY_ID[id];
  const key = id === 'pre_run' ? 'preRun' : id === 'post_run' ? 'postRun' : id === 'at_work' ? 'atWork' : id;
  const steps = protocol.steps.map((step) => {
    const label =
      step.seconds >= 60
        ? fill(text(COPY, 'exercises.dose.holdMinutes'), { minutes: Math.round(step.seconds / 60) })
        : fill(text(COPY, 'exercises.dose.hold'), { seconds: step.seconds });
    const switchForms = QUICK['quick.stepSwitch'] as { one: string; other: string };
    return exerciseCard(
      step.exerciseId,
      step.switchAtHalf ? fill(step.seconds === 1 ? switchForms.one : switchForms.other, { count: step.seconds }) : label,
      step.seconds,
    );
  });
  return {
    id,
    title: text(QUICK, `quick.${key}.title`),
    cue: text(QUICK, `quick.${key}.cue`),
    minutes: protocol.minutes,
    position: protocol.position,
    steps,
  };
}

export const APP_EQUIPMENT: readonly Equipment[] = ['step', 'band', 'towel', 'pillow', 'ball'];
