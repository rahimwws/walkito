/**
 * The nine tools, as plain functions: arguments in, a result out. No I/O, no
 * clock beyond the date a week is laid out from, no randomness.
 *
 * Each result carries `structuredContent` for the widget and a short `text`
 * for the model to talk from. Exercises, doses, routines and the week come
 * from the app (content.ts). The copy that is not the app's — the red flags,
 * the call to action, the footer, the footwear tips — is the spec's
 * (`walkito-ai-assistant-spec` v1.1, §4–§5), written once here.
 */
import { CHAINS, PLAN_META_BY_ID, type Equipment } from '@/entities/program/model/plan/catalogue-meta';
import { goalsForOutcome, outcomeFor } from '@/entities/program/model/plan/outcome';
import { DEFAULT_LEVELS, buildWeek, weekStartOf, type PlanDay } from '@/entities/program/model/plan/week';
import { CLIPS } from '@/shared/config/clip-manifest';
import { JOURNEY_EN } from '@/shared/lib/i18n/catalogue/en/journey';
import { PAGES_EN } from '@/shared/lib/i18n/catalogue/en/pages';
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
  clipFor,
  doseLabel,
  exerciseCard,
  exerciseName,
  routine,
  startingDose,
  type ExerciseCard,
} from './content';

// ─── Shared copy (spec §1.2, §5.1, §5.2, §5.5) ─────────────────────────────

export const DISCLAIMER =
  'Walkito is not a medical device and does not diagnose, treat, cure or prevent any medical condition.';
export const EVIDENCE_LINE =
  'Exercises chosen from published research and guidelines; Walkito itself hasn’t been tested in a trial.';

export const RED_FLAGS = {
  injury: 'An injury or fall, and you can’t put weight on it',
  numbness: 'Numbness, tingling or burning',
  swelling: 'Swelling or warmth',
  night_pain: 'Pain at night or at rest',
  arch_flattened: 'One arch suddenly flattened',
  fever: 'Fever',
  diabetes_hot_foot: 'A hot, red or swollen foot with diabetes',
  achilles_pop: 'A sudden pop at the back of the ankle',
  calf_swollen: 'A swollen, warm calf',
} as const;
export type RedFlag = keyof typeof RED_FLAGS;
export const RED_FLAG_IDS = Object.keys(RED_FLAGS) as RedFlag[];

const RED_FLAG_TITLE = 'See a doctor if';
const SEE_DOCTOR_FIRST = 'Please see a doctor before doing exercises.';

const CTA_LINE = 'In the app, the plan adapts to your foot every day.';
const CTA_BULLETS = [
  'Reminder before your first step',
  'Plan changes with your pain check-in',
  'Progress test every 14 days',
];
const CTA_BUTTON = 'Continue this plan in Walkito';
const APP_CHANGES =
  'In the app the plan changes every day with your pain check-in, gets harder when it feels easy, reminds you before your first step, and tests your progress every 14 days.';

const AREA_LABEL: Record<PlanArea, string> = {
  heel_arch: 'Heel and arch',
  achilles: 'Achilles',
  flat_feet: 'Flat feet',
  shin: 'Shin',
  general_plus: 'Stronger feet',
};

const KIND_LABEL: Record<string, string> = {
  strength: PAGES_EN['pages.program.kindStrength'],
  mobility: PAGES_EN['pages.program.kindMobility'],
  balance: PAGES_EN['pages.program.kindBalance'],
  recovery: PAGES_EN['pages.program.kindRecovery'],
  test: PAGES_EN['pages.program.retest'],
  rest: 'Rest',
};

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// ─── Result shapes ──────────────────────────────────────────────────────────

export type Cta = {
  line: string;
  bullets: string[];
  button: string;
  url: string;
  code: string;
};

export type Footer = { disclaimer: string; evidence: string };

export type Widget =
  | { kind: 'routine'; title: string; intro: string; minutes: number; position: string; steps: ExerciseCard[]; note?: string }
  | { kind: 'plan_week'; title: string; intro: string; days: WeekDay[]; note?: string }
  | { kind: 'single_exercise'; title: string; exercise: ExerciseCard; why?: string; evidence?: string; note?: string }
  | { kind: 'self_check'; title: string; steps: string[]; question?: string; result?: string; exercise?: ExerciseCard; note?: string }
  | { kind: 'safety_card'; title: string; flags: string[]; selected: string[]; message?: string }
  | { kind: 'tips'; title: string; tips: { title: string; text: string }[] };

export type WeekDay = {
  weekday: string;
  type: string;
  label: string;
  minutes: number;
  exercises: ExerciseCard[];
};

export type ToolResult = {
  structuredContent: Widget & { cta?: Cta; footer: Footer; calm: boolean };
  text: string;
};

const footer: Footer = { disclaimer: DISCLAIMER, evidence: EVIDENCE_LINE };

export type CodeParts = {
  source: PlanSource;
  area: PlanArea;
  minutes: PlanMinutes;
  days: PlanDays;
  equipment: readonly PlanEquipment[];
  side: PlanSide;
};

export function cta(parts: CodeParts): Cta {
  const code = encodePlanCode(parts);
  return { line: CTA_LINE, bullets: CTA_BULLETS, button: CTA_BUTTON, url: `https://walkito.site/p/${code}/`, code };
}

/** Pain of 5 or more: no cheerful wording anywhere (spec §5.3). The copy here
 * is plain throughout; the flag lets the widget drop its one warm accent. */
const calm = (pain?: number) => pain != null && pain >= 5;

function result(widget: Widget, text: string, opts: { cta?: Cta; pain?: number } = {}): ToolResult {
  return {
    structuredContent: { ...widget, ...(opts.cta ? { cta: opts.cta } : {}), footer, calm: calm(opts.pain) },
    text: `${text}\n\n${DISCLAIMER}`,
  };
}

const list = (cards: ExerciseCard[]) => cards.map((c) => `- ${c.name} (${c.dose}): ${c.cue}`).join('\n');

// ─── 4.1 relief_now ─────────────────────────────────────────────────────────

export function reliefNow(args: { area?: PlanArea; pain_today?: number }, source: PlanSource): ToolResult {
  const r = routine('flare');
  const high = args.pain_today != null && args.pain_today >= 7;
  const note = high
    ? 'With pain this high today, keep to this seated routine and nothing else on your feet.'
    : undefined;
  return result(
    {
      kind: 'routine',
      title: r.title,
      intro: r.cue,
      minutes: r.minutes,
      position: r.position,
      steps: r.steps,
      ...(note ? { note } : {}),
    },
    `${r.title}: a ${r.minutes}-minute ${r.position} routine. ${r.cue}\n${list(r.steps)}${note ? `\n${note}` : ''}\n${RED_FLAG_TITLE}: ${Object.values(RED_FLAGS).join('; ')}.`,
    {
      cta: cta({ source, area: args.area ?? 'heel_arch', minutes: 3, days: 5, equipment: [], side: 'both' }),
      pain: args.pain_today,
    },
  );
}

// ─── 4.2 first_step_stretch ─────────────────────────────────────────────────

export function firstStepStretch(args: { side?: PlanSide }, source: PlanSource): ToolResult {
  const r = routine('morning');
  const card = exerciseCard('fascia_stretch', '10 × 10s per foot');
  const side = args.side ?? 'both';
  const sideLine = side === 'both' ? 'Do both feet.' : `Do your ${side} foot.`;
  return result(
    {
      kind: 'single_exercise',
      title: r.title,
      exercise: card,
      why: `${r.cue} Pull your toes back, 10 seconds, 10 times. ${sideLine}`,
      evidence: 'A stretch studied in published research (DiGiovanni 2003).',
    },
    `${r.title}: ${card.name}, ${card.dose}, before standing up. ${card.cue} ${sideLine} A stretch studied in published research (DiGiovanni 2003).`,
    { cta: cta({ source, area: 'heel_arch', minutes: 3, days: 7, equipment: [], side }) },
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
      return { goal: 'stronger', sport: null, areas: [], rigidFoot: false };
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
      clips: new Set(Object.keys(CLIPS).filter((id) => clipFor(id) != null)),
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

function weekDay(day: PlanDay): WeekDay {
  return {
    weekday: WEEKDAYS[day.weekday] ?? '',
    type: day.type,
    label: KIND_LABEL[day.type] ?? day.type,
    minutes: day.minutes,
    exercises: day.exercises.map((e) => exerciseCard(e.id, doseLabel(e.dose))),
  };
}

export function buildStarterPlan(args: PlanArgs, source: PlanSource, today: string): ToolResult {
  const minutes = args.minutes ?? 5;
  const days = args.days_per_week ?? 5;
  const side = args.side ?? 'both';
  const code = cta({ source, area: args.area, minutes, days, equipment: args.equipment ?? [], side });

  // Pain of 7 or more today: the seated three minutes only, nothing that loads
  // the fascia (spec §1.4). The week waits for a calmer morning.
  if ((args.pain_today ?? 0) >= 7) {
    const relief = reliefNow({ area: args.area, pain_today: args.pain_today }, source);
    const note = 'With pain this high today, start with this seated routine. Ask for the week again on a calmer morning.';
    const w = relief.structuredContent as Extract<Widget, { kind: 'routine' }>;
    return result({ ...w, note }, `${note}\n${relief.text}`, { cta: code, pain: args.pain_today });
  }

  const plan = starterWeek(args, today);
  const week = plan.days.map(weekDay);
  const active = week.filter((d) => d.exercises.length > 0);
  const title = `${AREA_LABEL[args.area]} plan`;
  const intro = `${minutes} min a day · ${days} days a week`;
  const textDays = week
    .map((d) =>
      d.exercises.length === 0
        ? `${d.weekday}: ${d.label}`
        : `${d.weekday}: ${d.label}, ${d.minutes} min. ${d.exercises.map((e) => `${e.name} (${e.dose})`).join(', ')}`,
    )
    .join('\n');
  if (active.length === 0) throw new Error('starter plan: a week with no exercises');
  return result(
    { kind: 'plan_week', title, intro, days: week },
    `${title}. ${intro}\n${textDays}\n${APP_CHANGES}\nPlan code: ${code.code} (${code.url})`,
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

export function exerciseDemo(args: { exercise: string }, source: PlanSource): ToolResult {
  const id = resolveExercise(args.exercise);
  if (!id) throw new Error(`exercise_demo: unknown exercise ${args.exercise}`);
  const card = exerciseCard(id, doseLabel(startingDose(id)));
  const note = card.clip ? undefined : 'Video coming soon.';
  const meta = PLAN_META_BY_ID[id as keyof typeof PLAN_META_BY_ID];
  const area: PlanArea =
    meta?.chain === 'arch' ? 'flat_feet' : meta?.chain === 'calf' ? 'heel_arch' : 'heel_arch';
  return result(
    { kind: 'single_exercise', title: card.name, exercise: card, ...(note ? { note } : {}) },
    `${card.name}, ${card.dose}. ${card.cue}${note ? ` ${note}` : ''}`,
    { cta: cta({ source, area, minutes: 5, days: 5, equipment: [], side: 'both' }) },
  );
}

// ─── 4.5 flat_foot_check ────────────────────────────────────────────────────

export function flatFootCheck(args: { arch_appears?: 'yes' | 'no' | 'not_sure' }, source: PlanSource): ToolResult {
  const steps = [JOURNEY_EN['onboarding.test.toeStep1'], JOURNEY_EN['onboarding.test.toeStep2']];
  const question = JOURNEY_EN['onboarding.test.toeQuestion'];
  const card = exerciseCard('big_toe_lift', doseLabel(startingDose('big_toe_lift')));
  const title = 'Flat foot check';
  if (args.arch_appears == null) {
    return result(
      { kind: 'self_check', title, steps, question, exercise: card },
      `${title}: ${steps.join(' ')} ${question} This check does not diagnose.`,
    );
  }
  const outcome = {
    yes: 'An arch appears, so the flat foot is flexible. That is common, and arch exercises are an option.',
    no: 'Your arch didn’t change - worth showing a physio or podiatrist. Exercises may still help strength, but may not change the shape.',
    not_sure: 'Hard to tell. Watch the video and try again, standing with your weight on both feet.',
  }[args.arch_appears];
  const code = args.arch_appears === 'yes' ? cta({ source, area: 'flat_feet', minutes: 5, days: 5, equipment: [], side: 'both' }) : undefined;
  return result(
    { kind: 'self_check', title, steps, question, result: outcome, ...(args.arch_appears === 'not_sure' ? { exercise: card } : {}) },
    `${title}: ${outcome} This check does not diagnose.`,
    code ? { cta: code } : {},
  );
}

// ─── 4.6 when_to_see_doctor ─────────────────────────────────────────────────

export function whenToSeeDoctor(args: { symptoms?: RedFlag[] }): ToolResult {
  const selected = (args.symptoms ?? []).filter((s) => s in RED_FLAGS);
  const message = selected.length > 0 ? SEE_DOCTOR_FIRST : undefined;
  return result(
    {
      kind: 'safety_card',
      title: RED_FLAG_TITLE,
      flags: Object.values(RED_FLAGS),
      selected: selected.map((s) => RED_FLAGS[s]),
      ...(message ? { message } : {}),
    },
    `${message ? `${message}\n` : ''}${RED_FLAG_TITLE}: ${Object.values(RED_FLAGS).join('; ')}.`,
  );
}

// ─── 4.7 feet_after_work ────────────────────────────────────────────────────

const SHOE_TIPS = [
  { title: 'Supportive shoes', text: 'A firm heel counter and some cushioning under the heel. Swap out shoes whose soles have worn flat.' },
  { title: 'Heel cups', text: 'A soft heel cup can make long days on hard floors easier while the foot gets stronger.' },
  { title: 'Hard floors', text: 'While it hurts, avoid going barefoot on hard floors; wear shoes or supportive slippers at home.' },
  { title: 'Wide feet', text: 'Shop late in the day when feet are largest, check the widest part of the foot has room, and look for shoes sold in wide fittings.' },
];

export function feetAfterWork(source: PlanSource): ToolResult {
  const r = routine('at_work');
  const tips = SHOE_TIPS.slice(0, 3);
  return result(
    {
      kind: 'routine',
      title: 'After a long day on your feet',
      intro: r.cue,
      minutes: r.minutes,
      position: r.position,
      steps: r.steps,
      note: tips.map((t) => `${t.title}: ${t.text}`).join(' '),
    },
    `A ${r.minutes}-minute routine for after a shift, from the app's "${r.title}" routine:\n${list(r.steps)}\nShoe tips: ${tips.map((t) => t.text).join(' ')}`,
    { cta: cta({ source, area: 'heel_arch', minutes: 5, days: 5, equipment: [], side: 'both' }) },
  );
}

// ─── 4.8 shoes_and_inserts ──────────────────────────────────────────────────

export function shoesAndInserts(): ToolResult {
  return result(
    { kind: 'tips', title: 'Footwear tips', tips: SHOE_TIPS },
    `Footwear tips (no brands):\n${SHOE_TIPS.map((t) => `- ${t.title}: ${t.text}`).join('\n')}`,
  );
}

// ─── 4.9 ready_to_run ───────────────────────────────────────────────────────

/** The run-walk check (spec §4.9): first-step pain averaging 3 or under over
 * two weeks, and 20 single-leg calf raises on the painful side. */
export function readyToRun(args: { morning_pain_avg_2w: number; single_leg_calf_raises?: number }, source: PlanSource): ToolResult {
  const painOk = args.morning_pain_avg_2w <= 3;
  const calfKnown = args.single_leg_calf_raises != null;
  const calfOk = (args.single_leg_calf_raises ?? 0) >= 20;
  const ready = painOk && calfOk;
  const steps = [
    `First-step pain over the last two weeks: ${args.morning_pain_avg_2w}/10 (3 or under to start).`,
    calfKnown
      ? `Single-leg calf raises on the painful side: ${args.single_leg_calf_raises} (20 or more to start).`
      : 'Single-leg calf raises on the painful side: count how many you can do in a row (20 or more to start).',
  ];
  const outcome = ready
    ? 'You meet the check. Start with short, easy run-walks: at most 3 runs a week, never on consecutive days.'
    : !calfKnown && painOk
      ? 'Your mornings look ready. Count your single-leg calf raises before the first run.'
      : 'Not yet. Build strength first; the starter plan below works on the calf and the arch.';
  const card = exerciseCard('heel_raise_plain', doseLabel(startingDose('heel_raise_plain')));
  return result(
    { kind: 'self_check', title: 'Ready to run?', steps, result: outcome, ...(calfKnown ? {} : { exercise: card }) },
    `Ready to run? ${steps.join(' ')} ${outcome}`,
    { cta: cta({ source, area: 'heel_arch', minutes: 5, days: 5, equipment: [], side: 'both' }), pain: args.morning_pain_avg_2w },
  );
}

/** For tests: the chain each exercise sits on. */
export const CHAIN_IDS = CHAINS;
export { exerciseName };
