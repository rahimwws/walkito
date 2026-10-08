import { DiamondIcon } from '@phosphor-icons/react/dist/ssr/Diamond';
import { FireIcon } from '@phosphor-icons/react/dist/ssr/Fire';

import type { Lang } from '@/lib/i18n';

import './progress-visual.css';

/**
 * Sample figures. The visual is an illustration, but its words agree with
 * these, whatever they are set to: plurals are picked per language below.
 * The longest streak is never shorter than the current one, and the tests are
 * first against latest, the way the Progress screen reads them.
 */
const SAMPLE = {
  streak: 12,
  longest: 19,
  total: 31,
  calf: [11, 18],
  balance: [14, 26],
  arch: [22, 41],
} as const;

/** Sunday-first, as `StreakWeek` reads it: today is Thursday, and every day
 * up to it is banked. Fixed, because the page is built once and a "today"
 * worked out at build time would be wrong for everyone a day later. */
const TODAY = 4;
const DONE = [true, true, true, true, true, false, false];

/** One count's wording, as the app's catalogue spells it per plural form. */
type Forms = { one: string; few?: string; many?: string; other?: string };

/**
 * The CLDR rule for the three languages the site ships in, the same rule as
 * the app's `plural.ts`: Russian takes `few` for 2-4 and 22-24, and `many` for
 * 11-14 whatever their last digit.
 */
function count(lang: Lang, n: number, forms: Forms): string {
  let form: string | undefined;
  if (lang === 'ru') {
    const d = n % 10;
    const dd = n % 100;
    form = d === 1 && dd !== 11 ? forms.one : d >= 2 && d <= 4 && (dd < 12 || dd > 14) ? forms.few : forms.many;
  } else {
    form = n === 1 ? forms.one : forms.other;
  }
  return (form ?? forms.one).replace('{count}', String(n));
}

type VisualCopy = {
  strengthTitle: string;
  calf: (from: number, to: number) => string;
  balance: (from: number, to: number) => string;
  arch: (from: number, to: number) => string;
  strengthSince: string;
  currentStreak: string;
  longestStreak: string;
  dayCount: Forms;
  streakCaption: string;
  title: Forms;
  rule: string;
  total: Forms;
  dismiss: string;
};

/**
 * The app's own words, copied from its catalogue
 * (`src/shared/lib/i18n/catalogue/{en,ru,es}/progress.ts` and `core.ts`:
 * `progress.*`, `streak.*`), capitals and arrows included, so this reads as
 * the screen it reproduces. Change them there first, then here.
 */
const COPY: Record<Lang, VisualCopy> = {
  en: {
    strengthTitle: 'Strength and balance',
    calf: (from, to) => `Calf raises ${from} → ${to}`,
    balance: (from, to) => `Balance ${from}s → ${to}s`,
    arch: (from, to) => `Arch hold ${from}s → ${to}s`,
    strengthSince: 'Your first test against your latest.',
    currentStreak: 'Current Streak',
    longestStreak: 'Longest Streak',
    dayCount: { one: '{count} day', other: '{count} days' },
    streakCaption: 'Rest days, rough days and 2-minute days all count.',
    title: { one: '{count} Day Streak', other: '{count} Days Streak' },
    rule: 'A day counts when you check in, train, finish a Library routine, or the plan gives you a rest day.',
    total: { one: '{count} day so far.', other: '{count} days so far.' },
    dismiss: 'Got it',
  },
  ru: {
    strengthTitle: 'Сила и баланс',
    calf: (from, to) => `Подъёмы на носок ${from} → ${to}`,
    balance: (from, to) => `Баланс ${from} с → ${to} с`,
    arch: (from, to) => `Удержание свода ${from} с → ${to} с`,
    strengthSince: 'Первый тест и последний.',
    currentStreak: 'Текущая серия',
    longestStreak: 'Лучшая серия',
    dayCount: { one: '{count} день', few: '{count} дня', many: '{count} дней' },
    streakCaption: 'Дни отдыха, тяжёлые дни и дни по 2 минуты тоже считаются.',
    title: { one: '{count} день подряд', few: '{count} дня подряд', many: '{count} дней подряд' },
    rule: 'День засчитан, если вы отметили боль, провели сессию, прошли комплекс из библиотеки или план сам назначил отдых.',
    total: { one: 'Всего {count} день.', few: 'Всего {count} дня.', many: 'Всего {count} дней.' },
    dismiss: 'Понятно',
  },
  es: {
    strengthTitle: 'Fuerza y equilibrio',
    calf: (from, to) => `Elevaciones de talón ${from} → ${to}`,
    balance: (from, to) => `Equilibrio ${from} s → ${to} s`,
    arch: (from, to) => `Arco sostenido ${from} s → ${to} s`,
    strengthSince: 'Tu primera prueba frente a la última.',
    currentStreak: 'Racha actual',
    longestStreak: 'Mejor racha',
    dayCount: { one: '{count} día', other: '{count} días' },
    streakCaption: 'Los días de descanso, los días malos y los de 2 minutos también cuentan.',
    title: { one: 'Racha de {count} día', other: 'Racha de {count} días' },
    rule: 'Un día cuenta si registras tu dolor, entrenas, terminas una rutina de la biblioteca o el plan te asigna descanso.',
    total: { one: '{count} día en total.', other: '{count} días en total.' },
    dismiss: 'Entendido',
  },
};

/**
 * Weekday names from the platform, as the app takes them: `Intl` knows each
 * language's abbreviations and its lowercase, where a hand-written list would
 * guess. Worked out on the server when the page is built. 4 January 1970 was a
 * Sunday, so stepping a day at a time walks the week Sunday-first.
 */
const SUNDAY = Date.UTC(1970, 0, 4);

function weekdays(lang: Lang): string[] {
  const format = new Intl.DateTimeFormat(lang, { weekday: 'short', timeZone: 'UTC' });
  return Array.from({ length: 7 }, (_, i) => format.format(new Date(SUNDAY + i * 86_400_000)));
}

const glyph = { weight: 'fill', 'aria-hidden': true, focusable: false } as const;

/**
 * The fourth "How it works" visual: the app's Progress screen behind its streak
 * sheet, drawn rather than screenshotted so the sheet can arrive the way it
 * does in the app.
 *
 * Behind: the Progress screen's tests card (`StrengthCard`) and its two streak
 * tiles (`StreakTile`). In front: the streak sheet (`StreakSheet`), its gold
 * emblem hung half over the card, the rule, the week as seven flames
 * (`StreakWeek`) and "Got it". Dark scheme, the app's colours and sizes in app
 * points; the CSS turns a point into pixels for whatever room the card has.
 *
 * The parent marks it active with `data-on`; the CSS then raises the sheet and
 * lands the flames one after another. Announced by the parent as one image.
 */
export function ProgressVisual({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const days = weekdays(lang);

  return (
    <div className="pv">
      <div className="pv-stage">
        <div className="pv-page">
          <div className="pv-card pv-strength">
            <span className="pv-card-title">{c.strengthTitle}</span>
            <span className="pv-row">{c.calf(...SAMPLE.calf)}</span>
            <span className="pv-row">{c.balance(...SAMPLE.balance)}</span>
            <span className="pv-row">{c.arch(...SAMPLE.arch)}</span>
            <span className="pv-caption">{c.strengthSince}</span>
          </div>

          <div className="pv-tiles">
            <span className="pv-card pv-tile pv-tile-fire">
              <FireIcon {...glyph} />
              <span className="pv-tile-value">{count(lang, SAMPLE.streak, c.dayCount)}</span>
              <span className="pv-tile-label">{c.currentStreak}</span>
            </span>
            <span className="pv-card pv-tile pv-tile-diamond">
              <DiamondIcon {...glyph} />
              <span className="pv-tile-value">{count(lang, SAMPLE.longest, c.dayCount)}</span>
              <span className="pv-tile-label">{c.longestStreak}</span>
            </span>
          </div>
          <span className="pv-page-caption">{c.streakCaption}</span>
        </div>

        <div className="pv-sheet">
          <img className="pv-badge" src="/hero/streak-badge.webp" alt="" width={552} height={505} loading="lazy" decoding="async" />
          <div className="pv-sheet-card">
            <span className="pv-title">{count(lang, SAMPLE.streak, c.title)}</span>
            <span className="pv-blurb">
              {c.rule} {count(lang, SAMPLE.total, c.total)}
            </span>
            <span className="pv-week">
              {days.map((day, i) => (
                // By index: abbreviated weekdays are not unique in every language.
                <span
                  key={i}
                  className="pv-cell"
                  data-today={i === TODAY ? '' : undefined}
                  data-ahead={i > TODAY && !DONE[i] ? '' : undefined}
                  style={{ '--d': i } as React.CSSProperties}
                >
                  <span className="pv-day">{day}</span>
                  <FireIcon {...glyph} />
                </span>
              ))}
            </span>
            <span className="pv-button">{c.dismiss}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
