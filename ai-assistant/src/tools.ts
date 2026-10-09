/**
 * The nine tools, as plain functions: arguments in, a result out. No I/O, no
 * clock beyond the date a week is laid out from, no randomness.
 *
 * Each result carries `structuredContent` for the widget and a short `text`
 * for the model to talk from. Exercises, doses, routines and the week come
 * from the app (content.ts). The copy that is not the app's — the red flags,
 * the call to action, the footer, the footwear tips - is the spec's
 * (`walkito-ai-assistant-spec` v1.1, §4-§5), in the app's seven languages in
 * copy.ts. Every tool takes the language last; English when it is left out.
 */
import { CHAINS, PLAN_META_BY_ID, type Equipment } from '@/entities/program/model/plan/catalogue-meta';
import { goalsForOutcome, outcomeFor } from '@/entities/program/model/plan/outcome';
import { DEFAULT_LEVELS, buildWeek, weekStartOf, type PlanDay } from '@/entities/program/model/plan/week';
import { CLIPS } from '@/shared/config/clip-manifest';
import { JOURNEY_DE } from '@/shared/lib/i18n/catalogue/de/journey';
import { PAGES_DE } from '@/shared/lib/i18n/catalogue/de/pages';
import { JOURNEY_EN } from '@/shared/lib/i18n/catalogue/en/journey';
import { PAGES_EN } from '@/shared/lib/i18n/catalogue/en/pages';
import { JOURNEY_ES } from '@/shared/lib/i18n/catalogue/es/journey';
import { PAGES_ES } from '@/shared/lib/i18n/catalogue/es/pages';
import { JOURNEY_FR } from '@/shared/lib/i18n/catalogue/fr/journey';
import { PAGES_FR } from '@/shared/lib/i18n/catalogue/fr/pages';
import { JOURNEY_IT } from '@/shared/lib/i18n/catalogue/it/journey';
import { PAGES_IT } from '@/shared/lib/i18n/catalogue/it/pages';
import { JOURNEY_PT } from '@/shared/lib/i18n/catalogue/pt/journey';
import { PAGES_PT } from '@/shared/lib/i18n/catalogue/pt/pages';
import { JOURNEY_RU } from '@/shared/lib/i18n/catalogue/ru/journey';
import { PAGES_RU } from '@/shared/lib/i18n/catalogue/ru/pages';
import {
  encodePlanCode,
  type PlanArea,
  type PlanDays,
  type PlanEquipment,
  type PlanMinutes,
  type PlanSide,
  type PlanSource,
} from '@/shared/lib/plan-code';

import {
  APP_EQUIPMENT,
  MANNEQUIN_CLIPS,
  clipFor,
  doseLabel,
  exerciseCard,
  exerciseName,
  minutesLabel,
  routine,
  startingDose,
  type ExerciseCard,
  type Lang,
} from './content';
import { COPY, weekdays } from './copy';

// ─── Shared copy ────────────────────────────────────────────────────────────

export const DISCLAIMER = COPY.en.disclaimer;
export const EVIDENCE_LINE = COPY.en.evidence;
export const RED_FLAGS = COPY.en.redFlags;
export type RedFlag = keyof typeof RED_FLAGS;
export const RED_FLAG_IDS = Object.keys(RED_FLAGS) as RedFlag[];

type Table = Record<string, string>;
const JOURNEY: Record<Lang, Table> = {
  en: JOURNEY_EN, ru: JOURNEY_RU, es: JOURNEY_ES, pt: JOURNEY_PT, fr: JOURNEY_FR, it: JOURNEY_IT, de: JOURNEY_DE,
} as unknown as Record<Lang, Table>;
const PAGES: Record<Lang, Table> = {
  en: PAGES_EN, ru: PAGES_RU, es: PAGES_ES, pt: PAGES_PT, fr: PAGES_FR, it: PAGES_IT, de: PAGES_DE,
} as unknown as Record<Lang, Table>;

/** The app's names for a day's kind (the Plan screen's), in a language. */
function kindLabel(type: string, lang: Lang): string {
  const pages = PAGES[lang];
  const key = { strength: 'pages.program.kindStrength', mobility: 'pages.program.kindMobility', balance: 'pages.program.kindBalance', recovery: 'pages.program.kindRecovery', test: 'pages.program.retest' }[type];
  return key ? pages[key] : COPY[lang].rest;
}

// ─── Result shapes ──────────────────────────────────────────────────────────

export type Cta = {
  line: string;
  bullets: string[];
  button: string;
  url: string;
  code: string;
};

export type Footer = { disclaimer: string; evidence: string };

/** The widget's own few words, so it speaks the result's language. */
export type Ui = (typeof COPY)['en']['ui'] & { restDay: string; rest: string };

export type Widget =
  | { kind: 'routine'; title: string; intro: string; minutes: number; minutesLabel: string; position: string; steps: ExerciseCard[]; note?: string }
  | { kind: 'plan_week'; title: string; intro: string; days: WeekDay[]; note?: string }
  | { kind: 'single_exercise'; title: string; exercise: ExerciseCard; why?: string; evidence?: string; note?: string }
  | { kind: 'self_check'; title: string; steps: string[]; question?: string; result?: string; exercise?: ExerciseCard; note?: string }
  | { kind: 'safety_card'; title: string; flags: string[]; selected: string[]; message?: string }
  | { kind: 'tips'; title: string; tips: { title: string; text: string }[] };

export type WeekDay = {
  weekday: string;
  initial: string;
  type: string;
  label: string;
  minutes: number;
  minutesLabel: string;
  exercises: ExerciseCard[];
};

export type ToolResult = {
  structuredContent: Widget & { cta?: Cta; footer: Footer; calm: boolean; lang: Lang; ui: Ui };
  text: string;
};

export type CodeParts = {
  source: PlanSource;
  area: PlanArea;
  minutes: PlanMinutes;
  days: PlanDays;
  equipment: readonly PlanEquipment[];
  side: PlanSide;
};

export function cta(parts: CodeParts, lang: Lang = 'en'): Cta {
  const code = encodePlanCode(parts);
  const c = COPY[lang];
  // The /p/ page speaks the chat's language too; English needs no parameter.
  const url = `https://walkito.site/p/${code}/${lang === 'en' ? '' : `?l=${lang}`}`;
  return { line: c.ctaLine, bullets: c.ctaBullets, button: c.ctaButton, url, code };
}

/** Pain of 5 or more: no cheerful wording anywhere (spec §5.3). The copy here
 * is plain throughout; the flag lets the widget drop its one warm accent. */
const calm = (pain?: number) => pain != null && pain >= 5;

function result(widget: Widget, text: string, lang: Lang, opts: { cta?: Cta; pain?: number } = {}): ToolResult {
  const c = COPY[lang];
  return {
    structuredContent: {
      ...widget,
      ...(opts.cta ? { cta: opts.cta } : {}),
      footer: { disclaimer: c.disclaimer, evidence: c.evidence },
      calm: calm(opts.pain),
      lang,
      ui: { ...c.ui, restDay: c.restDay, rest: c.rest },
    },
    text: `${text}\n\n${c.disclaimer}`,
  };
}

const flagLine = (lang: Lang) => `${COPY[lang].redFlagTitle}: ${Object.values(COPY[lang].redFlags).join('; ')}.`;

const list = (cards: ExerciseCard[]) => cards.map((c) => `- ${c.name} (${c.dose}): ${c.cue}`).join('\n');

// ─── 4.1 relief_now ─────────────────────────────────────────────────────────

export function reliefNow(args: { area?: PlanArea; pain_today?: number }, source: PlanSource, lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  const r = routine('flare', lang);
  const high = args.pain_today != null && args.pain_today >= 7;
  const note = high ? c.reliefHigh : undefined;
  return result(
    {
      kind: 'routine',
      title: r.title,
      intro: r.cue,
      minutes: r.minutes,
      minutesLabel: r.minutesLabel,
      position: r.position,
      steps: r.steps,
      ...(note ? { note } : {}),
    },
    `${r.title}: ${c.routineLine(r.minutes, r.position)}. ${r.cue}\n${list(r.steps)}${note ? `\n${note}` : ''}\n${flagLine(lang)}`,
    lang,
    {
      cta: cta({ source, area: args.area ?? 'heel_arch', minutes: 3, days: 5, equipment: [], side: 'both' }, lang),
      pain: args.pain_today,
    },
  );
}

// ─── 4.2 first_step_stretch ─────────────────────────────────────────────────

export function firstStepStretch(args: { side?: PlanSide }, source: PlanSource, lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  const r = routine('morning', lang);
  const card = exerciseCard('fascia_stretch', c.stretchDose, undefined, lang);
  const side = args.side ?? 'both';
  const sideLine = c.side[side];
  return result(
    {
      kind: 'single_exercise',
      title: r.title,
      exercise: card,
      why: `${r.cue} ${c.stretchHow} ${sideLine}`,
      evidence: c.stretchEvidence,
    },
    `${r.title}: ${card.name}, ${card.dose}, ${c.stretchWhen}. ${card.cue} ${sideLine} ${c.stretchEvidence}`,
    lang,
    { cta: cta({ source, area: 'heel_arch', minutes: 3, days: 7, equipment: [], side }, lang) },
  );
}

// ─── 4.3 build_starter_plan ─────────────────────────────────────────────────

export type PlanArgs = {
  area: PlanArea;
  minutes?: PlanMinutes;
  days_per_week?: PlanDays;
  equipment?: PlanEquipment[];
  side?: PlanSide;
  age_group?: 'under_40' | '40_59' | '60_plus' | 'unknown';
  pain_today?: number;
};

/** What the app's onboarding would have answered for an area. */
function factsFor(area: PlanArea) {
  switch (area) {
    case 'heel_arch':
      return { goal: null, sport: null, areas: ['heel'], rigidFoot: false };
    case 'achilles':
      return { goal: null, sport: null, areas: ['achilles'], rigidFoot: false };
    case 'flat_feet':
      return { goal: 'flatfeet', sport: null, areas: ['foot'], rigidFoot: false };
    case 'shin':
      return { goal: null, sport: null, areas: ['shin'], rigidFoot: false };
    case 'general_plus':
      // The goal the app's onboarding prefills from a code for "no pain, just
      // stronger feet" (pages/onboarding/model/plan-code.ts): the plan the
      // chat shows is the plan the app then builds.
      return { goal: 'injuryfree', sport: null, areas: [], rigidFoot: false };
  }
}

/**
 * Exercises held back on top of the app's own week-one rules (spec §4.3): no
 * eyes-closed balance unless the person is under 60, and nothing on a step
 * for the Achilles. Both only remove; neither adds an exercise.
 */
function heldBack(args: PlanArgs): Set<string> {
  const out = new Set<string>(['pogo_hops']);
  const age = args.age_group ?? 'unknown';
  if (age === '60_plus' || age === 'unknown') out.add('eyes_closed_stand');
  if (args.area === 'achilles') {
    for (const id of Object.keys(PLAN_META_BY_ID)) {
      if (PLAN_META_BY_ID[id as keyof typeof PLAN_META_BY_ID].equipment.includes('step')) out.add(id);
    }
  }
  return out;
}

/** The app's week-one plan for a new user with these answers: the same call
 * the app's plan store makes, with a fresh user's levels, no history, and
 * the week laid out from Monday. */
export function starterWeek(args: PlanArgs, today: string) {
  const weekStart = weekStartOf(today);
  const outcome = outcomeFor(factsFor(args.area), weekStart);
  const goals = goalsForOutcome(outcome, [], weekStart, 3);
  const have = new Set<string>(args.equipment ?? []);
  const equipmentMissing = APP_EQUIPMENT.filter((e) => !have.has(e)) as Equipment[];
  return buildWeek({
    weekStart,
    weekIndex: 1,
    today: weekStart,
    planStart: weekStart,
    goals,
    steps: outcome.steps,
    daysPerWeek: args.days_per_week ?? 5,
    defaultMinutes: args.minutes ?? 5,
    eligibility: {
      // The app plans only exercises with a clip; so does this, by the same test.
      // Exercises filmed with a person only; see MANNEQUIN_CLIPS.
      clips: new Set(Object.keys(CLIPS).filter((id) => clipFor(id) != null && !MANNEQUIN_CLIPS.has(id))),
      equipmentMissing,
      cantDo: heldBack(args),
      painLast14: [],
      shortFootStandingSessions: 0,
      ...((args.pain_today ?? 0) >= 7 ? { seatedOnly: true } : {}),
    },
    levels: { ...DEFAULT_LEVELS },
    lastWeekFeedback: [],
    painLastWeek: [],
    painWeekBefore: [],
    painStart: null,
    previousFocus: null,
    seenBefore: null,
    testDue: null,
  });
}

function weekDay(day: PlanDay, lang: Lang): WeekDay {
  const names = weekdays(lang)[day.weekday] ?? { short: '', initial: '' };
  return {
    weekday: names.short,
    initial: names.initial,
    type: day.type,
    label: kindLabel(day.type, lang),
    minutes: day.minutes,
    minutesLabel: minutesLabel(day.minutes, lang),
    exercises: day.exercises.map((e) => exerciseCard(e.id, doseLabel(e.dose, lang), undefined, lang)),
  };
}

export function buildStarterPlan(args: PlanArgs, source: PlanSource, today: string, lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  const minutes = args.minutes ?? 5;
  const days = args.days_per_week ?? 5;
  const side = args.side ?? 'both';
  const code = cta({ source, area: args.area, minutes, days, equipment: args.equipment ?? [], side }, lang);

  // Pain of 7 or more today: the seated three minutes only, nothing that loads
  // the fascia (spec §1.4). The week waits for a calmer morning.
  if ((args.pain_today ?? 0) >= 7) {
    const relief = reliefNow({ area: args.area, pain_today: args.pain_today }, source, lang);
    const note = c.planHigh;
    const { cta: _cta, footer: _footer, calm: _calm, lang: _lang, ui: _ui, ...w } = relief.structuredContent;
    return result({ ...(w as Extract<Widget, { kind: 'routine' }>), note }, `${note}\n${relief.text}`, lang, { cta: code, pain: args.pain_today });
  }

  const plan = starterWeek(args, today);
  const week = plan.days.map((d) => weekDay(d, lang));
  const active = week.filter((d) => d.exercises.length > 0);
  const title = c.planTitle[args.area];
  const intro = c.planIntro(minutes, days);
  const textDays = week
    .map((d) =>
      d.exercises.length === 0
        ? `${d.weekday}: ${d.label}`
        : `${d.weekday}: ${d.label}, ${d.minutesLabel}. ${d.exercises.map((e) => `${e.name} (${e.dose})`).join(', ')}`,
    )
    .join('\n');
  if (active.length === 0) throw new Error('starter plan: a week with no exercises');
  return result(
    { kind: 'plan_week', title, intro, days: week },
    `${title}. ${intro}\n${textDays}\n${c.appChanges}\n${c.planCode}: ${code.code} (${code.url})`,
    lang,
    { cta: code, pain: args.pain_today },
  );
}

// ─── 4.4 exercise_demo ──────────────────────────────────────────────────────

/** Names people use, mapped to the app's ids (spec §4.4). */
export const EXERCISE_SYNONYMS: Record<string, string> = {
  toe_yoga: 'big_toe_lift',
  big_toe_raise: 'big_toe_lift',
  rathleff: 'heel_raise_towel',
  rathleff_heel_raise: 'heel_raise_towel',
  towel_heel_raise: 'heel_raise_towel',
  calf_raise: 'heel_raise_plain',
  calf_raises: 'heel_raise_plain',
  heel_raise: 'heel_raise_plain',
  short_foot: 'short_foot_seated',
  short_foot_exercise: 'short_foot_seated',
  plantar_fascia_stretch: 'fascia_stretch',
  plantar_stretch: 'fascia_stretch',
  calf_stretch: 'calf_stretch_straight',
  gastrocnemius_stretch: 'calf_stretch_straight',
  soleus_stretch: 'calf_stretch_bent',
  knee_to_wall_test: 'knee_to_wall',
  single_leg_balance: 'single_leg_hold',
  single_leg_stand: 'single_leg_hold',
  tib_raise: 'tibialis_raise',
  towel_curl: 'towel_scrunch',
  towel_curls: 'towel_scrunch',
  eccentric_heel_drop: 'heel_drop_straight',
  heel_drop: 'heel_drop_straight',
  foot_massage_ball: 'foot_roll',
  ball_roll: 'foot_roll',
};

export function resolveExercise(input: string): string | null {
  const key = input.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  if ((PLAN_META_BY_ID as Record<string, unknown>)[key] || key === 'heel_raise_plain') return key;
  return EXERCISE_SYNONYMS[key] ?? null;
}

export function exerciseDemo(args: { exercise: string }, source: PlanSource, lang: Lang = 'en'): ToolResult {
  const id = resolveExercise(args.exercise);
  if (!id) throw new Error(`exercise_demo: unknown exercise ${args.exercise}`);
  const card = exerciseCard(id, doseLabel(startingDose(id), lang), undefined, lang);
  const note = card.clip ? undefined : COPY[lang].videoSoon;
  const meta = PLAN_META_BY_ID[id as keyof typeof PLAN_META_BY_ID];
  const area: PlanArea =
    meta?.chain === 'arch' ? 'flat_feet' : meta?.chain === 'calf' ? 'heel_arch' : 'heel_arch';
  return result(
    { kind: 'single_exercise', title: card.name, exercise: card, ...(note ? { note } : {}) },
    `${card.name}, ${card.dose}. ${card.cue}${note ? ` ${note}` : ''}`,
    lang,
    { cta: cta({ source, area, minutes: 5, days: 5, equipment: [], side: 'both' }, lang) },
  );
}

// ─── 4.5 flat_foot_check ────────────────────────────────────────────────────

export function flatFootCheck(args: { arch_appears?: 'yes' | 'no' | 'not_sure' }, source: PlanSource, lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  const journey = JOURNEY[lang];
  const steps = [journey['onboarding.test.toeStep1'], journey['onboarding.test.toeStep2']];
  const question = journey['onboarding.test.toeQuestion'];
  const card = exerciseCard('big_toe_lift', doseLabel(startingDose('big_toe_lift'), lang), undefined, lang);
  const title = c.flatTitle;
  if (args.arch_appears == null) {
    return result(
      { kind: 'self_check', title, steps, question, exercise: card },
      `${title}: ${steps.join(' ')} ${question} ${c.notDiagnose}`,
      lang,
    );
  }
  const outcome = c.flatOutcome[args.arch_appears];
  const code = args.arch_appears === 'yes' ? cta({ source, area: 'flat_feet', minutes: 5, days: 5, equipment: [], side: 'both' }, lang) : undefined;
  return result(
    { kind: 'self_check', title, steps, question, result: outcome, ...(args.arch_appears === 'not_sure' ? { exercise: card } : {}) },
    `${title}: ${outcome} ${c.notDiagnose}`,
    lang,
    code ? { cta: code } : {},
  );
}

// ─── 4.6 when_to_see_doctor ─────────────────────────────────────────────────

export function whenToSeeDoctor(args: { symptoms?: RedFlag[] }, lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  const selected = (args.symptoms ?? []).filter((s) => s in c.redFlags);
  const message = selected.length > 0 ? c.seeDoctorFirst : undefined;
  return result(
    {
      kind: 'safety_card',
      title: c.redFlagTitle,
      flags: Object.values(c.redFlags),
      selected: selected.map((s) => c.redFlags[s]),
      ...(message ? { message } : {}),
    },
    `${message ? `${message}\n` : ''}${flagLine(lang)}`,
    lang,
  );
}

// ─── 4.7 feet_after_work ────────────────────────────────────────────────────

export function feetAfterWork(source: PlanSource, lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  const r = routine('at_work', lang);
  const tips = c.shoeTips.slice(0, 3);
  return result(
    {
      kind: 'routine',
      title: c.afterWorkTitle,
      intro: r.cue,
      minutes: r.minutes,
      minutesLabel: r.minutesLabel,
      position: r.position,
      steps: r.steps,
    },
    `${c.afterWorkLine(r.minutes, r.title)}\n${list(r.steps)}\n${c.shoeTipsLabel}: ${tips.map((t) => t.text).join(' ')}`,
    lang,
    { cta: cta({ source, area: 'heel_arch', minutes: 5, days: 5, equipment: [], side: 'both' }, lang) },
  );
}

// ─── 4.8 shoes_and_inserts ──────────────────────────────────────────────────

export function shoesAndInserts(lang: Lang = 'en'): ToolResult {
  const c = COPY[lang];
  return result(
    { kind: 'tips', title: c.footwearTitle, tips: c.shoeTips },
    `${c.footwearNoBrands}:\n${c.shoeTips.map((t) => `- ${t.title}: ${t.text}`).join('\n')}`,
    lang,
  );
}

// ─── 4.9 ready_to_run ───────────────────────────────────────────────────────

/** The run-walk check (spec §4.9): first-step pain averaging 3 or under over
 * two weeks, and 20 single-leg calf raises on the painful side. */
export function readyToRun(
  args: { morning_pain_avg_2w: number; single_leg_calf_raises?: number },
  source: PlanSource,
  lang: Lang = 'en',
): ToolResult {
  const c = COPY[lang];
  const painOk = args.morning_pain_avg_2w <= 3;
  const calfKnown = args.single_leg_calf_raises != null;
  const calfOk = (args.single_leg_calf_raises ?? 0) >= 20;
  const ready = painOk && calfOk;
  const steps = [
    c.readyPain(args.morning_pain_avg_2w),
    calfKnown ? c.readyCalf(args.single_leg_calf_raises ?? 0) : c.readyCalfAsk,
  ];
  const outcome = ready ? c.readyYes : !calfKnown && painOk ? c.readyMornings : c.readyNotYet;
  const card = exerciseCard('heel_raise_plain', doseLabel(startingDose('heel_raise_plain'), lang), undefined, lang);
  return result(
    { kind: 'self_check', title: c.readyTitle, steps, result: outcome, ...(calfKnown ? {} : { exercise: card }) },
    `${c.readyTitle} ${steps.join(' ')} ${outcome}`,
    lang,
    { cta: cta({ source, area: 'heel_arch', minutes: 5, days: 5, equipment: [], side: 'both' }, lang), pain: args.morning_pain_avg_2w },
  );
}

/** For tests: the chain each exercise sits on. */
export const CHAIN_IDS = CHAINS;
export { exerciseName };
