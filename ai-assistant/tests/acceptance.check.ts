/**
 * The spec's acceptance checks (§9) that can run without a host: safety,
 * clips, the starter plan against the app's engine, plan codes, copy.
 * Runs against dist/core.mjs, the same bundle the server is built from:
 *   bun run build && bun test
 */
import { describe, expect, test } from 'bun:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// @ts-expect-error built file
import * as core from '../dist/core.mjs';

const AREAS = ['heel_arch', 'achilles', 'flat_feet', 'shin', 'general_plus'] as const;
const MINUTES = [3, 5, 10] as const;
const TODAY = '2026-10-07';

/** Every string anywhere in a value. */
function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => strings(v, out));
  return out;
}

/** Spec §1.1. The disclaimer's own "does not diagnose, treat, cure or
 * prevent" and the flat-foot check's "does not diagnose" are the only uses. */
const BANNED = /\b(treat|treats|treated|treatment|cure|cures|cured|fix|fixes|fixed|heal|heals|healed|diagnose|diagnoses|diagnosis)\b|clinically proven|pain-free in/i;
function banned(text: string): boolean {
  const cleaned = text
    .replaceAll(core.DISCLAIMER, '')
    .replace(/does not diagnose/gi, '')
    .replace(/it does not diagnose/gi, '');
  return BANNED.test(cleaned);
}

function allResults() {
  const out: { name: string; r: ReturnType<typeof core.reliefNow> }[] = [];
  for (const area of AREAS) {
    out.push({ name: `relief ${area}`, r: core.reliefNow({ area }, 'chatgpt') });
    for (const minutes of MINUTES)
      for (const days of [3, 5, 7] as const)
        out.push({ name: `plan ${area} ${minutes} ${days}`, r: core.buildStarterPlan({ area, minutes, days_per_week: days }, 'claude', TODAY) });
  }
  out.push({ name: 'relief pain 8', r: core.reliefNow({ pain_today: 8 }, 'chatgpt') });
  out.push({ name: 'plan pain 9', r: core.buildStarterPlan({ area: 'heel_arch', pain_today: 9 }, 'chatgpt', TODAY) });
  out.push({ name: 'stretch', r: core.firstStepStretch({ side: 'left' }, 'chatgpt') });
  for (const id of core.EXERCISE_IDS) out.push({ name: `demo ${id}`, r: core.exerciseDemo({ exercise: id }, 'chatgpt') });
  for (const a of [undefined, 'yes', 'no', 'not_sure'] as const) out.push({ name: `flat ${a}`, r: core.flatFootCheck({ arch_appears: a }, 'chatgpt') });
  out.push({ name: 'doctor', r: core.whenToSeeDoctor({}) });
  out.push({ name: 'doctor flags', r: core.whenToSeeDoctor({ symptoms: ['numbness', 'calf_swollen'] }) });
  out.push({ name: 'work', r: core.feetAfterWork('chatgpt') });
  out.push({ name: 'shoes', r: core.shoesAndInserts() });
  for (const [pain, calf] of [[2, 25], [2, undefined], [5, 25], [1, 10]] as const)
    out.push({ name: `run ${pain} ${calf}`, r: core.readyToRun({ morning_pain_avg_2w: pain, single_leg_calf_raises: calf }, 'chatgpt') });
  return out;
}

describe('every result', () => {
  const results = allResults();

  test('carries the disclaimer and the evidence line', () => {
    for (const { r } of results) {
      expect(r.structuredContent.footer.disclaimer).toBe(core.DISCLAIMER);
      expect(r.structuredContent.footer.evidence).toBe(core.EVIDENCE_LINE);
      expect(r.text).toContain(core.DISCLAIMER);
    }
  });

  test('uses none of the banned words', () => {
    for (const { name, r } of results) {
      for (const s of strings(r)) if (banned(s)) throw new Error(`${name}: "${s}"`);
    }
  });

  test('has no prices, trials, urgency, testimonials or user counts', () => {
    for (const { name, r } of results) {
      for (const s of strings(r)) {
        if (/\$\d|€|free trial|discount|only today|limited time|\d[\d,]* (users|people)|★/i.test(s)) throw new Error(`${name}: "${s}"`);
      }
    }
  });
});

describe('safety', () => {
  test('a red flag returns the doctor card: no exercises, no call to action', () => {
    for (const flag of core.RED_FLAG_IDS) {
      const r = core.whenToSeeDoctor({ symptoms: [flag] });
      expect(r.structuredContent.kind).toBe('safety_card');
      expect(r.structuredContent.cta).toBeUndefined();
      expect(JSON.stringify(r)).not.toContain('"clip"');
      expect(r.text).toContain('Please see a doctor before doing exercises.');
    }
  });

  test('pain of 7 or more gives the seated routine only, nothing fascia-loading', () => {
    for (const pain of [7, 8, 10]) {
      for (const r of [core.reliefNow({ pain_today: pain }, 'chatgpt'), core.buildStarterPlan({ area: 'heel_arch', pain_today: pain }, 'chatgpt', TODAY)]) {
        expect(r.structuredContent.kind).toBe('routine');
        expect(r.structuredContent.position).toBe('seated');
        expect(r.structuredContent.minutes).toBe(3);
      }
    }
  });

  test('a week-one plan has no fascia-loading or above-level-2 work, and no training day is empty', () => {
    const fascia = new Set(['heel_raise_towel', 'heel_raise_double', 'heel_raise_hold', 'heel_drop_straight', 'pogo_hops']);
    for (const area of AREAS)
      for (const minutes of MINUTES) {
        const week = core.starterWeek({ area, minutes }, TODAY);
        for (const day of week.days) {
          if (day.type !== 'rest' && day.type !== 'test') expect(day.exercises.length).toBeGreaterThan(0);
          for (const e of day.exercises) {
            expect(fascia.has(e.id)).toBe(false);
            expect(e.id).not.toBe('pogo_hops');
          }
        }
      }
  });

  test('no eyes-closed balance under unknown or 60+ age; nothing on a step for the Achilles', () => {
    for (const age of ['unknown', '60_plus'] as const) {
      const ids = core.starterWeek({ area: 'flat_feet', age_group: age, equipment: ['step'] }, TODAY).days.flatMap((d: { exercises: { id: string }[] }) => d.exercises.map((e) => e.id));
      expect(ids).not.toContain('eyes_closed_stand');
    }
    const achilles = core.starterWeek({ area: 'achilles', equipment: ['step'] }, TODAY).days.flatMap((d: { exercises: { id: string }[] }) => d.exercises.map((e) => e.id));
    for (const id of ['step_down', 'heel_drop_straight']) expect(achilles).not.toContain(id);
  });
});

describe('clips', () => {
  test('only manifest clips with a recorded hash are ever returned', () => {
    const manifest = {
      good: { file: 'good.mp4', hash: '0123456789abcdef' },
      wrong: { file: 'wrong.mp4', hash: '' },
      odd: { file: 'odd.mp4', hash: 'not-a-hash' },
    };
    expect(core.clipFor('good', manifest)?.src).toContain('/exercise-clips/good.mp4');
    expect(core.clipFor('wrong', manifest)).toBeNull();
    expect(core.clipFor('odd', manifest)).toBeNull();
    expect(core.clipFor('missing', manifest)).toBeNull();
  });

  test('every exercise has its clip from the bucket', () => {
    for (const id of core.EXERCISE_IDS) {
      const clip = core.clipFor(id);
      expect(clip?.src).toMatch(/^https:\/\/[a-z0-9]+\.supabase\.co\/storage\/v1\/object\/public\/exercise-clips\/.+\.mp4#t=0\.1$/);
    }
  });

  test('a plan only uses exercises filmed with a person', () => {
    for (const area of AREAS)
      for (const minutes of MINUTES)
        for (const day of core.starterWeek({ area, minutes }, TODAY).days)
          for (const e of day.exercises) expect(core.MANNEQUIN_CLIPS.has(e.id)).toBe(false);
  });
});

describe('starter plan', () => {
  test('equals the app engine’s week one for all 5 areas × 3 minute options', () => {
    for (const area of AREAS)
      for (const minutes of MINUTES) {
        const engine = core.starterWeek({ area, minutes }, TODAY);
        const shown = core.buildStarterPlan({ area, minutes }, 'chatgpt', TODAY).structuredContent;
        expect(shown.kind).toBe('plan_week');
        expect(shown.days.map((d: { exercises: { id: string }[] }) => d.exercises.map((e) => e.id))).toEqual(
          engine.days.map((d: { exercises: { id: string }[] }) => d.exercises.map((e) => e.id)),
        );
        expect(shown.days.map((d: { minutes: number }) => d.minutes)).toEqual(engine.days.map((d: { minutes: number }) => d.minutes));
      }
  });

  test('its code decodes back to the inputs', () => {
    const r = core.buildStarterPlan({ area: 'shin', minutes: 10, days_per_week: 3, equipment: ['band'], side: 'right' }, 'claude', TODAY);
    expect(core.decodePlanCode(r.structuredContent.cta.code)).toEqual({ source: 'claude', area: 'shin', minutes: 10, days: 3, equipment: ['band'], side: 'right' });
    expect(r.structuredContent.cta.url).toBe(`https://walkito.site/p/${r.structuredContent.cta.code}/`);
  });
});

describe('exercise names', () => {
  test('synonyms resolve to app exercises', () => {
    expect(core.resolveExercise('toe yoga')).toBe('big_toe_lift');
    expect(core.resolveExercise('Rathleff')).toBe('heel_raise_towel');
    expect(core.resolveExercise('calf raise')).toBe('heel_raise_plain');
    expect(core.resolveExercise('short foot')).toBe('short_foot_seated');
    for (const id of Object.values(core.EXERCISE_SYNONYMS)) expect(core.EXERCISE_IDS).toContain(id);
  });
});

describe('plan page', () => {
  test('a valid code shows the plan and an App Store link with the source', () => {
    const code = core.encodePlanCode({ source: 'chatgpt', area: 'flat_feet', minutes: 5, days: 5, equipment: [], side: 'both' });
    const page = core.planPage(code);
    expect(page.status).toBe(200);
    expect(page.html).toContain('Flat feet');
    expect(page.html).toContain('ct=ai-chatgpt');
    expect(page.html).toContain('utm_source=chatgpt');
    expect(page.html).toContain(`walkito://plan?code=${code}`);
  });

  test('a bad code says so', () => {
    expect(core.planPage('WK-ZZZZZZ').status).toBe(404);
  });
});

describe('languages', () => {
  const LANGS = core.LANGS as readonly string[];

  function resultsIn(lang: string) {
    const out: { name: string; r: ReturnType<typeof core.reliefNow> }[] = [];
    for (const area of AREAS) {
      out.push({ name: `relief ${area}`, r: core.reliefNow({ area }, 'chatgpt', lang) });
      for (const days of [3, 5, 7] as const)
        out.push({ name: `plan ${area} ${days}`, r: core.buildStarterPlan({ area, minutes: 5, days_per_week: days }, 'claude', TODAY, lang) });
    }
    out.push({ name: 'relief pain 8', r: core.reliefNow({ pain_today: 8 }, 'chatgpt', lang) });
    out.push({ name: 'plan pain 9', r: core.buildStarterPlan({ area: 'heel_arch', pain_today: 9 }, 'chatgpt', TODAY, lang) });
    out.push({ name: 'stretch', r: core.firstStepStretch({ side: 'right' }, 'chatgpt', lang) });
    for (const id of core.EXERCISE_IDS) out.push({ name: `demo ${id}`, r: core.exerciseDemo({ exercise: id }, 'chatgpt', lang) });
    for (const a of [undefined, 'yes', 'no', 'not_sure'] as const) out.push({ name: `flat ${a}`, r: core.flatFootCheck({ arch_appears: a }, 'chatgpt', lang) });
    out.push({ name: 'doctor flags', r: core.whenToSeeDoctor({ symptoms: ['fever'] }, lang) });
    out.push({ name: 'work', r: core.feetAfterWork('chatgpt', lang) });
    out.push({ name: 'shoes', r: core.shoesAndInserts(lang) });
    for (const [pain, calf] of [[2, 25], [2, undefined], [5, 10]] as const)
      out.push({ name: `run ${pain} ${calf}`, r: core.readyToRun({ morning_pain_avg_2w: pain, single_leg_calf_raises: calf }, 'chatgpt', lang) });
    return out;
  }

  test('every result in every language: its own disclaimer, no placeholders, no long dash', () => {
    for (const lang of LANGS)
      for (const { name, r } of resultsIn(lang)) {
        expect(r.structuredContent.lang).toBe(lang);
        expect(r.structuredContent.footer.disclaimer).toBe(core.COPY[lang].disclaimer);
        expect(r.text).toContain(core.COPY[lang].disclaimer);
        for (const s of strings({ ...r, structuredContent: { ...r.structuredContent, ui: undefined } }))
          if (/\{\w+\}|—|undefined|NaN/.test(s)) throw new Error(`${lang} ${name}: "${s}"`);
      }
  });

  test('Russian results are Russian throughout (nothing left in English)', () => {
    for (const { name, r } of resultsIn('ru')) {
      const sc = r.structuredContent;
      const shown = strings({ ...sc, kind: 0, cta: sc.cta && { ...sc.cta, url: 0, code: 0 }, steps: (sc.steps ?? []).map((e: object) => ({ ...e, id: 0, clip: 0 })), exercise: sc.exercise && { ...sc.exercise, id: 0, clip: 0 }, days: (sc.days ?? []).map((d: { exercises: object[] }) => ({ ...d, type: 0, exercises: d.exercises.map((e) => ({ ...e, id: 0, clip: 0 })) })), lang: 0 });
      for (const s of shown) if (/[a-z]{3,}/i.test(s.replace(/Walkito|ChatGPT|Claude|DiGiovanni|WK-\w+/g, '')) && !/[а-я]/i.test(s)) throw new Error(`${name}: "${s}"`);
    }
  });

  test('the same exercises and safety rules in every language', () => {
    for (const lang of LANGS) {
      const en = core.buildStarterPlan({ area: 'achilles', minutes: 10 }, 'chatgpt', TODAY).structuredContent;
      const other = core.buildStarterPlan({ area: 'achilles', minutes: 10 }, 'chatgpt', TODAY, lang).structuredContent;
      expect(other.days.map((d: { exercises: { id: string }[] }) => d.exercises.map((e) => e.id))).toEqual(en.days.map((d: { exercises: { id: string }[] }) => d.exercises.map((e) => e.id)));
      const high = core.buildStarterPlan({ area: 'heel_arch', pain_today: 8 }, 'chatgpt', TODAY, lang).structuredContent;
      expect(high.kind).toBe('routine');
      expect(high.minutes).toBe(3);
      const doctor = core.whenToSeeDoctor({ symptoms: ['numbness'] }, lang);
      expect(doctor.structuredContent.cta).toBeUndefined();
      expect(doctor.text).toContain(core.COPY[lang].seeDoctorFirst);
      expect(Object.keys(core.COPY[lang].redFlags)).toEqual(core.RED_FLAG_IDS);
    }
  });

  test('Russian counts take their own forms', () => {
    expect(core.COPY.ru.planIntro(5, 5)).toBe('5 минут в день · 5 дней в неделю');
    expect(core.COPY.ru.planIntro(3, 3)).toBe('3 минуты в день · 3 дня в неделю');
    expect(core.minutesLabel(10, 'ru')).toBe('10 минут');
  });

  test('weekday names, Monday first', () => {
    expect(core.weekdays('en')[0].short).toBe('Mon');
    expect(core.weekdays('ru')[0].short).toBe('Пн');
    expect(core.weekdays('de')[6].initial).toBe('S');
  });

  test('the language resolves from the argument, then the host locale, then English', () => {
    expect(core.langOf('ru')).toBe('ru');
    expect(core.langOf(undefined, 'pt-BR')).toBe('pt');
    expect(core.langOf('xx', 'de_DE')).toBe('de');
    expect(core.langOf(undefined, undefined)).toBe('en');
  });

  test('the button carries the language to the plan page, which speaks it', () => {
    const r = core.buildStarterPlan({ area: 'flat_feet' }, 'chatgpt', TODAY, 'ru');
    expect(r.structuredContent.cta.url).toBe(`https://walkito.site/p/${r.structuredContent.cta.code}/?l=ru`);
    const page = core.planPage(r.structuredContent.cta.code, 'ru');
    expect(page.html).toContain('<html lang="ru">');
    expect(page.html).toContain('Плоскостопие');
    expect(page.html).toContain(core.COPY.ru.disclaimer.replaceAll('-', '-'));
    expect(core.planPage('WK-ZZZZZZ', 'de').html).toContain('Code nicht erkannt');
  });
});

describe('stateless', () => {
  test('the server source writes nothing and talks to no database', () => {
    const dir = join(import.meta.dir, '../src');
    const files = readdirSync(dir, { recursive: true }).filter((f) => String(f).endsWith('.ts'));
    for (const f of files) {
      const src = readFileSync(join(dir, String(f)), 'utf8');
      expect(src).not.toMatch(/writeFile|appendFile|createWriteStream|supabase\.from|\.insert\(|fetch\(/);
    }
  });
});

describe('shims', () => {
  test('HEEL_RAISE_TEMPO matches the app', () => {
    const app = readFileSync(join(import.meta.dir, '../../src/entities/program/model/exercises.ts'), 'utf8');
    expect(app).toMatch(/HEEL_RAISE_TEMPO[^=]*=\s*\{\s*up:\s*3,\s*hold:\s*2,\s*down:\s*3\s*\}/);
  });
});

describe('logs', () => {
  test('log lines keep only the plan settings, never pain, tests or symptoms', () => {
    const src = readFileSync(join(import.meta.dir, '../src/server.ts'), 'utf8');
    const allowed = /LOGGED_ARGS = new Set\(\[([^\]]*)\]\)/.exec(src)?.[1] ?? '';
    for (const key of ['pain_today', 'morning_pain_avg_2w', 'single_leg_calf_raises', 'symptoms', 'arch_appears', 'age_group']) {
      expect(allowed).not.toContain(key);
    }
  });
});
