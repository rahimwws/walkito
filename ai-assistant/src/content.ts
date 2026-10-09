/**
 * Everything the assistant says about exercises, taken from the app.
 *
 * Names, cues, routines and dose templates are the app's own catalogues, in
 * the app's seven languages; the plan metadata, doses, eligibility rules and
 * the week builder are the app's own modules, bundled from `../src` (see
 * scripts/build.ts for the two shims). Nothing here writes an exercise, a dose
 * or a safety rule of its own.
 */
import { PROTOCOLS_BY_ID, type ProtocolId } from '@/entities/protocols/model/protocols';
import { PLAN_META, PLAN_META_BY_ID, type Equipment } from '@/entities/program/model/plan/catalogue-meta';
import { doseFor, type PlanDose } from '@/entities/program/model/plan/dose';
import { CLIPS, CLIP_BUCKET } from '@/shared/config/clip-manifest';
import { EXERCISES_DE } from '@/shared/lib/i18n/catalogue/de/exercises';
import { QUICK_DE } from '@/shared/lib/i18n/catalogue/de/quick';
import { EXERCISES_EN } from '@/shared/lib/i18n/catalogue/en/exercises';
import { QUICK_EN } from '@/shared/lib/i18n/catalogue/en/quick';
import { EXERCISES_ES } from '@/shared/lib/i18n/catalogue/es/exercises';
import { QUICK_ES } from '@/shared/lib/i18n/catalogue/es/quick';
import { EXERCISES_FR } from '@/shared/lib/i18n/catalogue/fr/exercises';
import { QUICK_FR } from '@/shared/lib/i18n/catalogue/fr/quick';
import { EXERCISES_IT } from '@/shared/lib/i18n/catalogue/it/exercises';
import { QUICK_IT } from '@/shared/lib/i18n/catalogue/it/quick';
import { EXERCISES_PT } from '@/shared/lib/i18n/catalogue/pt/exercises';
import { QUICK_PT } from '@/shared/lib/i18n/catalogue/pt/quick';
import { EXERCISES_RU } from '@/shared/lib/i18n/catalogue/ru/exercises';
import { QUICK_RU } from '@/shared/lib/i18n/catalogue/ru/quick';
import { pluralCategory } from '@/shared/lib/i18n/plural';

declare const __SUPABASE_URL__: string;

/** The app's languages. */
export const LANGS = ['en', 'ru', 'es', 'pt', 'fr', 'it', 'de'] as const;
export type Lang = (typeof LANGS)[number];

type Plural = { one?: string; few?: string; many?: string; other?: string };
type Table = Record<string, string | Plural>;

const EXERCISES: Record<Lang, Table> = {
  en: EXERCISES_EN, ru: EXERCISES_RU, es: EXERCISES_ES, pt: EXERCISES_PT, fr: EXERCISES_FR, it: EXERCISES_IT, de: EXERCISES_DE,
} as unknown as Record<Lang, Table>;
const QUICKS: Record<Lang, Table> = {
  en: QUICK_EN, ru: QUICK_RU, es: QUICK_ES, pt: QUICK_PT, fr: QUICK_FR, it: QUICK_IT, de: QUICK_DE,
} as unknown as Record<Lang, Table>;

const camel = (id: string) => id.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());

function text(table: Table, key: string): string {
  const value = table[key];
  if (typeof value !== 'string') throw new Error(`content: missing copy ${key}`);
  return value;
}

/** A counted string in the language's own plural form (the app's CLDR rules). */
function counted(table: Table, key: string, lang: Lang, count: number): string {
  const forms = table[key];
  if (!forms || typeof forms === 'string') throw new Error(`content: missing plural ${key}`);
  const form = forms[pluralCategory(lang, count)] ?? forms.other ?? forms.many ?? forms.one;
  return fill(form ?? '', { count });
}

export const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? `{${name}}`));

/** "5 min", "5 минут": the app's own minutes label. */
export function minutesLabel(minutes: number, lang: Lang = 'en'): string {
  return counted(QUICKS[lang], 'quick.minutes', lang, minutes);
}

export function quickText(key: string, lang: Lang = 'en'): string {
  return text(QUICKS[lang], key);
}

/** Every exercise the assistant may show: the app's 26 plannable ones, plus
 * plain heel raises, which the app plays as the fallback for a towel. */
export const EXERCISE_IDS = [...PLAN_META.map((m) => m.id), 'heel_raise_plain'] as const;

export function exerciseName(id: string, lang: Lang = 'en'): string {
  return text(EXERCISES[lang], `exercises.${camel(id)}.title`);
}

export function exerciseCue(id: string, lang: Lang = 'en'): string {
  return text(EXERCISES[lang], `exercises.${camel(id)}.cue`);
}

export function exerciseWhy(id: string, lang: Lang = 'en'): string {
  return text(EXERCISES[lang], `exercises.${camel(id)}.rationale`);
}

/** The app's dose label (`prescription.ts` doseLabel), in a language. */
export function doseLabel(dose: Pick<PlanDose, 'sets' | 'reps' | 'holdSec' | 'perSide'>, lang: Lang = 'en'): string {
  const t = EXERCISES[lang];
  let core: string;
  if (dose.reps != null) core = fill(text(t, 'exercises.dose.setsReps'), { sets: dose.sets, reps: dose.reps });
  else if (dose.holdSec != null) {
    if (dose.sets === 1) {
      core =
        dose.holdSec >= 60
          ? fill(text(t, 'exercises.dose.holdMinutes'), { minutes: Math.round(dose.holdSec / 60) })
          : fill(text(t, 'exercises.dose.hold'), { seconds: dose.holdSec });
    } else core = fill(text(t, 'exercises.dose.setsHold'), { sets: dose.sets, seconds: dose.holdSec });
  } else core = counted(t, 'exercises.dose.sets', lang, dose.sets);
  return dose.perSide ? fill(text(t, 'exercises.dose.bothFeet'), { dose: core }) : core;
}

/** A hold of so many seconds, as the app writes it ("1 min", "45s"). */
export function holdLabel(seconds: number, lang: Lang = 'en'): string {
  const t = EXERCISES[lang];
  return seconds >= 60
    ? fill(text(t, 'exercises.dose.holdMinutes'), { minutes: Math.round(seconds / 60) })
    : fill(text(t, 'exercises.dose.hold'), { seconds });
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
  // `#t=0.1`: the first frame of the clip itself as the still, not the site's
  // older posters, which are a different recording.
  return { src: `${__SUPABASE_URL__}/storage/v1/object/public/${CLIP_BUCKET}/${entry.file}#t=0.1` };
}

/**
 * Clips still drawn with a grey mannequin rather than filmed with a person
 * (checked frame by frame, 2026-10-09). A plan leaves these out and picks an
 * exercise filmed with a person; where an exercise cannot be swapped (the
 * plantar stretch in the fixed routines, a demo asked for by name) its
 * mannequin clip is shown, a video being better than none. Take an id off once
 * its clip is re-recorded.
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

export function exerciseCard(id: string, dose: string, seconds?: number, lang: Lang = 'en'): ExerciseCard {
  return { id, name: exerciseName(id, lang), cue: exerciseCue(id, lang), dose, ...(seconds ? { seconds } : {}), clip: clipFor(id) };
}

/** The starting dose the app gives an exercise (level 1, or its own level). */
export function startingDose(id: string): PlanDose {
  const meta = PLAN_META_BY_ID[id as keyof typeof PLAN_META_BY_ID];
  return doseFor(id, meta?.level ?? 1);
}

/** One of the app's quick routines, as cards: title, the line it opens with,
 * where you do it, and each step's exercise for its seconds. */
export function routine(id: ProtocolId, lang: Lang = 'en') {
  const protocol = PROTOCOLS_BY_ID[id];
  const key = id === 'pre_run' ? 'preRun' : id === 'post_run' ? 'postRun' : id === 'at_work' ? 'atWork' : id;
  const q = QUICKS[lang];
  const steps = protocol.steps.map((step) =>
    exerciseCard(
      step.exerciseId,
      step.switchAtHalf ? counted(q, 'quick.stepSwitch', lang, step.seconds) : holdLabel(step.seconds, lang),
      step.seconds,
      lang,
    ),
  );
  const place = protocol.position === 'in_bed' ? 'quick.inBed' : protocol.position === 'seated' ? 'quick.seated' : 'quick.standing';
  return {
    id,
    title: text(q, `quick.${key}.title`),
    cue: text(q, `quick.${key}.cue`),
    minutes: protocol.minutes,
    minutesLabel: minutesLabel(protocol.minutes, lang),
    position: text(q, place),
    steps,
  };
}

export const APP_EQUIPMENT: readonly Equipment[] = ['step', 'band', 'towel', 'pillow', 'ball'];
