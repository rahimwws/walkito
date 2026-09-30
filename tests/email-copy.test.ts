import { describe, expect, test } from 'bun:test';

import * as build from '../supabase/functions/_shared/email/content.ts';
import { COPY, copyFor } from '../supabase/functions/_shared/email/copy.ts';
import { GOAL_ORDER, LOCALES, METRICS, type EmailContent, type Locale } from '../supabase/functions/_shared/email/types.ts';

/**
 * The copy rules, checked against every email in every language and every
 * variant a user can get: lowercase only, a plain hyphen only, no pain figure
 * in a subject, no diagnosis words, Russian plural forms right at the
 * boundaries, and each language complete in its own words.
 */

const PAYWALL = { firstAt: '', lastAt: '', offerPrice: '$14.99', standardPrice: '$49.99', percent: 70, weeks: 12 };

/** Every email, every variant, for one language. */
function everything(l: Locale): EmailContent[] {
  const out: EmailContent[] = [
    build.welcome(l, { name: 'sam', minutes: 5, runner: false }),
    build.welcome(l, { name: null, minutes: 3, runner: true }),
    build.day2Morning(l),
    build.day5Easy(l),
    build.day5Start(l),
    build.day10Keep(l, { days: 10, minutes: 7, painDrop: null }),
    build.day10Keep(l, { days: 11, minutes: 3, painDrop: { start: 6, last: 3 } }),
    build.day14Test(l, { metric: null, before: null }),
    build.painUp(l),
    build.winback7(l),
    build.winback21(l, { metric: null, current: null }),
    build.offer(l, { goal: null, metric: null, current: null, paywall: null }),
    build.offerFinal(l, { paywall: PAYWALL }),
    build.offerFinal(l, { paywall: null }),
    build.weekly(l, { sessions: 1, metric: null, current: null, avgPain: 3.4, next: null }),
  ];
  for (const goal of GOAL_ORDER) {
    out.push(build.day2Focus(l, { goal, metric: null, current: null }));
    out.push(build.goalReached(l, { goal, next: goal === 'balance' ? null : 'balance' }));
    out.push(build.offer(l, { goal, metric: null, current: null, paywall: PAYWALL }));
  }
  for (const metric of METRICS) {
    out.push(build.day2Focus(l, { goal: 'calf_raises', metric, current: 12 }));
    out.push(build.day14Test(l, { metric, before: 1 }));
    out.push(build.day14Test(l, { metric, before: 22 }));
    out.push(build.testResult(l, { metric, before: 8, now: 14, weeks: 2 }));
    out.push(build.testResult(l, { metric, before: 8, now: 30, weeks: 5 }));
    out.push(build.winback21(l, { metric, current: 14 }));
    out.push(build.offer(l, { goal: 'calf_raises', metric, current: 8, paywall: PAYWALL }));
    out.push(build.weekly(l, { sessions: 4, metric, current: 14, avgPain: 3, next: 'arch_hold' }));
  }
  return out;
}

function words(e: EmailContent): string[] {
  return [e.subject, e.preheader, e.greeting ?? '', ...e.paragraphs, e.button.label, e.ps ?? ''];
}

function footerAndPage(l: Locale): string[] {
  const c = COPY[l];
  return [c.footer.why, c.footer.unsubscribe, c.footer.settings, ...Object.values(c.unsubscribePage)];
}

describe.each([...LOCALES])('%s', (l: Locale) => {
  const emails = everything(l);
  const all = [...emails.flatMap(words), ...footerAndPage(l)];

  test('no capital letters anywhere', () => {
    const caps = all.filter((t) => /[A-ZА-ЯЁÀ-ÖØ-Þ]/.test(t));
    expect(caps).toEqual([]);
  });

  test('a plain hyphen, never a long dash', () => {
    expect(all.filter((t) => /[—–]/.test(t))).toEqual([]);
  });

  test('no diagnosis words', () => {
    const banned: Record<Locale, RegExp> = {
      en: /\b(treat\w*|cure[sd]?|curing|fix\w*|heal(s|ed|ing)?)\b/i,
      ru: /(лечи|лечен|вылеч|исцел)/i,
      es: /\b(trat(ar|amiento)\w*|cur(ar|a|an|ación)|san(ar|a|an))\b/i,
    };
    const rule = banned[l];
    expect(all.filter((t) => rule.test(t))).toEqual([]);
  });

  test('no empty line and no leftover placeholder', () => {
    for (const e of emails) {
      expect(e.subject.length).toBeGreaterThan(0);
      expect(e.button.label.length).toBeGreaterThan(0);
      for (const t of words(e)) expect(t).not.toMatch(/\{|\}|undefined|null|NaN/);
    }
  });

  test('pain never reaches a subject', () => {
    // The only emails that carry pain get two different pain inputs: the
    // subject must come out the same, so no pain figure can be in it.
    const a = build.day10Keep(l, { days: 10, minutes: 5, painDrop: { start: 6, last: 3 } });
    const b = build.day10Keep(l, { days: 10, minutes: 5, painDrop: { start: 9, last: 1 } });
    expect(a.subject).toBe(b.subject);
    const w1 = build.weekly(l, { sessions: 3, metric: 'calf', current: 14, avgPain: 2.5, next: null });
    const w2 = build.weekly(l, { sessions: 3, metric: 'calf', current: 14, avgPain: 8.5, next: null });
    expect(w1.subject).toBe(w2.subject);
    expect(w1.paragraphs.join()).not.toBe(w2.paragraphs.join());
  });

  test('subjects fit a lock screen', () => {
    for (const e of emails) expect(e.subject.length).toBeLessThanOrEqual(64);
  });
});

describe('languages are complete in their own words', () => {
  test('russian is cyrillic and spanish is not english', () => {
    const en = everything('en').map((e) => e.subject);
    const ru = everything('ru').map((e) => e.subject);
    const es = everything('es').map((e) => e.subject);
    for (const s of ru) expect(s).toMatch(/[а-яё]/);
    const same = es.filter((s, i) => s === en[i]);
    expect(same).toEqual([]);
  });

  test('an unknown language falls back to a whole english email', () => {
    expect(copyFor('de')).toBe(COPY.en);
    expect(copyFor(null)).toBe(COPY.en);
  });
});

describe('russian plurals', () => {
  const ru = COPY.ru;

  test('minutes: 1 минуту, 3 минуты, 5 минут, 11 минут, 21 минуту, 22 минуты', () => {
    expect(ru.welcome.first(1)).toContain('1 минуту.');
    expect(ru.welcome.first(3)).toContain('3 минуты.');
    expect(ru.welcome.first(5)).toContain('5 минут.');
    expect(ru.welcome.first(11)).toContain('11 минут.');
    expect(ru.welcome.first(21)).toContain('21 минуту.');
    expect(ru.welcome.first(22)).toContain('22 минуты.');
  });

  test('days and sessions agree with their count', () => {
    expect(ru.day10Keep.daysIn(10)).toBe('уже 10 дней. продолжайте.');
    expect(ru.day10Keep.daysIn(21)).toBe('уже 21 день. продолжайте.');
    expect(ru.day10Keep.daysIn(12)).toBe('уже 12 дней. продолжайте.');
    expect(ru.weekly.subject(4)).toBe('ваша неделя: 4 сессии');
    expect(ru.weekly.subject(14)).toBe('ваша неделя: 14 сессий');
  });

  test('the adjective moves with the noun in the button', () => {
    expect(ru.day10Keep.button(1)).toBe('сделать сегодняшнюю 1 минуту');
    expect(ru.day10Keep.button(3)).toBe('сделать сегодняшние 3 минуты');
    expect(ru.day10Keep.button(10)).toBe('сделать сегодняшние 10 минут');
  });

  test('raises in the test-day line', () => {
    expect(ru.day14Test.before('calf', 21, '21')).toContain('21 подъём на носок');
    expect(ru.day14Test.before('calf', 3, '3')).toContain('3 подъёма на носок');
    expect(ru.day14Test.before('calf', 8, '8')).toContain('8 подъёмов на носок');
  });
});

describe('the emails as approved in the preview', () => {
  test('welcome, three languages', () => {
    expect(build.welcome('en', { name: 'sam', minutes: 5, runner: false })).toMatchObject({
      subject: 'welcome to walkito',
      greeting: 'hi sam,',
      paragraphs: ['rahim and rahman here - we built walkito, just the two of us.', "your first session takes 5 minutes. start today, it's the easiest one."],
      button: { label: 'open walkito', path: 'today' },
      ps: 'p.s. reply to this email. we read every one.',
    });
    expect(build.welcome('ru', { name: 'аня', minutes: 5, runner: false }).paragraphs[1]).toBe(
      'первая сессия займёт 5 минут. начните сегодня - она самая лёгкая.',
    );
    expect(build.welcome('es', { name: 'lucía', minutes: 5, runner: true }).paragraphs[1]).toBe(
      'tu primera sesión dura 5 minutos - menos que tu calentamiento.',
    );
  });

  test('winback_7 asks for the 3 minutes its button opens', () => {
    const e = build.winback7('en');
    expect(e.paragraphs[1]).toBe('3 minutes today?');
    expect(e.button.path).toBe('today?minutes=3');
  });

  test('numbers are written the local way', () => {
    expect(build.weekly('ru', { sessions: 4, metric: null, current: null, avgPain: 3.5, next: null }).paragraphs[0]).toBe('утром в среднем 3,5 из 10.');
    expect(build.weekly('en', { sessions: 4, metric: null, current: null, avgPain: 3.5, next: null }).paragraphs[0]).toBe('mornings averaged 3.5/10.');
  });
});

describe('the samples sent to an inbox before launch', () => {
  test('cover all fifteen emails in each language, by the same rules', async () => {
    const { sampleEmails } = await import('../supabase/functions/_shared/email/samples.ts');
    const { EMAIL_KEYS } = await import('../supabase/functions/_shared/email/types.ts');
    for (const l of LOCALES) {
      const samples = sampleEmails(l);
      expect(samples.map((s) => s.key).sort()).toEqual([...EMAIL_KEYS].sort());
      for (const s of samples) for (const t of words(s.content)) expect(t).not.toMatch(/[A-ZА-ЯЁÀ-ÖØ-Þ—–]/);
    }
  });
});
