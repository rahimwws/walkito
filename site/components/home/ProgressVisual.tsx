import { DiamondIcon } from '@phosphor-icons/react/dist/ssr/Diamond';
import { FireIcon } from '@phosphor-icons/react/dist/ssr/Fire';

import type { Lang } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

import './progress-visual.css';

/**
 * Sample figures. The visual is an illustration, but its words agree with
 * these, whatever they are set to: plurals are picked per language below.
 * The longest streak is never shorter than the current one, the tests are
 * first against latest the way the Progress screen reads them, and each
 * goal's "now" is the latest test, against the app's own target for it.
 */
const SAMPLE = {
  streak: 12,
  longest: 19,
  total: 31,
  calf: [11, 18],
  balance: [14, 26],
  arch: [22, 41],
} as const;

/**
 * A month of first-step mornings, 0 to 10, one a day, `null` where nobody
 * checked in. Ups and downs on purpose: the card's own caption says that is
 * normal, and the line is the thing to watch.
 */
const MORNINGS: readonly (number | null)[] = [
  6, 5, null, 6, 7, 5, 6, 5, 6, 4, 5, null, 5, 4, 5, 4, 5, 3, 4, 5, 4, 3, 4, 4, 3, 5, 3, 4, 3, 2, 3,
];

/** The app's `rollingMean`: seven days ending on each, drawn only where those
 * seven hold at least four readings (`MIN_READINGS_FOR_MEAN`). */
function rollingMean(series: readonly (number | null)[]): (number | null)[] {
  return series.map((_, end) => {
    const window = series.slice(Math.max(0, end - 6), end + 1).filter((p): p is number => p != null);
    return window.length < 4 ? null : window.reduce((sum, p) => sum + p, 0) / window.length;
  });
}

/** `PainLineCard`'s chart, in its own points: 140 tall, as wide as the card's
 * inside (350 less 18 either side), 0 at the foot and 10 at the head. */
const CHART_W = 314;
const CHART_H = 140;

/**
 * The chart, drawn here once when the page is built: grid lines at 0, 5 and
 * 10, the daily readings as faint dots, the rolling mean as the line. The
 * same arithmetic as `PainLineCard`, so the drawing is the app's drawing.
 */
function painChart() {
  const mean = rollingMean(MORNINGS);
  const x = (i: number) => (i / (MORNINGS.length - 1)) * CHART_W;
  const y = (value: number) => CHART_H - (value / 10) * CHART_H;
  let line = '';
  let pen = false;
  mean.forEach((value, i) => {
    if (value == null) {
      pen = false;
      return;
    }
    line += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(value).toFixed(1)} `;
    pen = true;
  });
  const dots = MORNINGS.flatMap((value, i) => (value == null ? [] : [{ cx: x(i), cy: y(value) }]));
  const latest = [...mean].reverse().find((value) => value != null) ?? 0;
  return { line: line.trim(), dots, latest, grid: [0, 5, 10].map(y) };
}

const CHART = painChart();

/** The three goals the GoalsCard lists, in the app's order (`GOAL_ORDER`),
 * each in its metric's own accent (`GOAL_TONE`), with the app's targets. */
const GOALS = [
  { type: 'arch_hold', tone: 'teal', current: SAMPLE.arch[1], target: PROGRAM.goals.archHoldSeconds },
  { type: 'calf_raises', tone: 'orange', current: SAMPLE.calf[1], target: PROGRAM.goals.calfRaises },
  { type: 'balance', tone: 'blue', current: SAMPLE.balance[1], target: PROGRAM.goals.balanceSeconds },
] as const;

type GoalType = (typeof GOALS)[number]['type'];

/** Sunday-first, as `StreakWeek` reads it: today is Thursday, and every day
 * up to it is banked. Fixed, because the page is built once and a "today"
 * worked out at build time would be wrong for everyone a day later. */
const TODAY = 4;
const DONE = [true, true, true, true, true, false, false];

/** One count's wording, as the app's catalogue spells it per plural form. */
type Forms = { one: string; few?: string; many?: string; other?: string };

/**
 * The app's plural rules (`plural.ts`) for the counts this visual shows.
 * Russian takes `few` for 2-4 and 22-24, and `many` for 11-14 whatever their
 * last digit; French puts 0 and 1 in `one`; the rest take `one` at exactly 1.
 */
function count(lang: Lang, n: number, forms: Forms): string {
  let form: string | undefined;
  if (lang === 'ru') {
    const d = n % 10;
    const dd = n % 100;
    form = d === 1 && dd !== 11 ? forms.one : d >= 2 && d <= 4 && (dd < 12 || dd > 14) ? forms.few : forms.many;
  } else if (lang === 'fr') {
    form = n === 0 || n === 1 ? forms.one : forms.other;
  } else {
    form = n === 1 ? forms.one : forms.other;
  }
  return (form ?? forms.one).replace('{count}', String(n));
}

type VisualCopy = {
  painTitle: string;
  painNow: (value: string) => string;
  painCaption: string;
  goalsTitle: string;
  goalName: Record<GoalType, string>;
  goalLine: Record<GoalType, (current: number, target: number) => string>;
  strengthTitle: string;
  calf: (from: number, to: number) => string;
  balance: (from: number, to: number) => string;
  arch: (from: number, to: number) => string;
  strengthSince: string;
  currentStreak: string;
  longestStreak: string;
  dayCount: Forms;
  title: Forms;
  rule: string;
  total: Forms;
  dismiss: string;
};

/**
 * The app's own words, copied from its catalogue
 * (`src/shared/lib/i18n/catalogue/<lang>/progress.ts`, `core.ts` and
 * `pages.ts`: `progress.*`, `streak.*`, `pages.week.goal.*` and
 * `pages.week.line.*`), capitals and arrows included, so this reads as the
 * screen it reproduces. Change them there first, then here.
 */
const COPY: Record<Lang, VisualCopy> = {
  en: {
    painTitle: 'Morning pain',
    painNow: (value) => `${value} / 10 this week`,
    painCaption: 'Day-to-day ups and downs are normal. Watch the line.',
    goalsTitle: 'Goals',
    goalName: { arch_hold: 'Stronger arch', calf_raises: 'Stronger calves', balance: 'Better balance' },
    goalLine: {
      arch_hold: (c, t) => `Arch hold ${c}s → ${t}s`,
      calf_raises: (c, t) => `Calf raises ${c} → ${t}`,
      balance: (c, t) => `Balance ${c}s → ${t}s`,
    },
    strengthTitle: 'Strength and balance',
    calf: (from, to) => `Calf raises ${from} → ${to}`,
    balance: (from, to) => `Balance ${from}s → ${to}s`,
    arch: (from, to) => `Arch hold ${from}s → ${to}s`,
    strengthSince: 'Your first test against your latest.',
    currentStreak: 'Current streak',
    longestStreak: 'Longest streak',
    dayCount: { one: '{count} day', other: '{count} days' },
    title: { one: '{count} Day Streak', other: '{count} Days Streak' },
    rule: 'A day counts when you check in, train, finish a Library routine, or the plan gives you a rest day.',
    total: { one: '{count} day so far.', other: '{count} days so far.' },
    dismiss: 'Got it',
  },
  ru: {
    painTitle: 'Боль по утрам',
    painNow: (value) => `${value} / 10 за неделю`,
    painCaption: 'Перепады изо дня в день нормальны. Смотрите на линию.',
    goalsTitle: 'Цели',
    goalName: { arch_hold: 'Сильный свод', calf_raises: 'Сильные икры', balance: 'Лучше баланс' },
    goalLine: {
      arch_hold: (c, t) => `Удержание свода ${c} с → ${t} с`,
      calf_raises: (c, t) => `Подъёмы на носок ${c} → ${t}`,
      balance: (c, t) => `Баланс ${c} с → ${t} с`,
    },
    strengthTitle: 'Сила и баланс',
    calf: (from, to) => `Подъёмы на носок ${from} → ${to}`,
    balance: (from, to) => `Баланс ${from} с → ${to} с`,
    arch: (from, to) => `Удержание свода ${from} с → ${to} с`,
    strengthSince: 'Первый тест и последний.',
    currentStreak: 'Текущая серия',
    longestStreak: 'Лучшая серия',
    dayCount: { one: '{count} день', few: '{count} дня', many: '{count} дней' },
    title: { one: '{count} день подряд', few: '{count} дня подряд', many: '{count} дней подряд' },
    rule: 'День засчитан, если вы отметили боль, провели сессию, прошли комплекс из библиотеки или план сам назначил отдых.',
    total: { one: 'Всего {count} день.', few: 'Всего {count} дня.', many: 'Всего {count} дней.' },
    dismiss: 'Понятно',
  },
  es: {
    painTitle: 'Dolor por la mañana',
    painNow: (value) => `${value} / 10 esta semana`,
    painCaption: 'Los altibajos de cada día son normales. Fíjate en la línea.',
    goalsTitle: 'Objetivos',
    goalName: { arch_hold: 'Arco más fuerte', calf_raises: 'Gemelos más fuertes', balance: 'Mejor equilibrio' },
    goalLine: {
      arch_hold: (c, t) => `Arco sostenido ${c} s → ${t} s`,
      calf_raises: (c, t) => `Elevaciones de gemelo ${c} → ${t}`,
      balance: (c, t) => `Equilibrio ${c} s → ${t} s`,
    },
    strengthTitle: 'Fuerza y equilibrio',
    calf: (from, to) => `Elevaciones de talón ${from} → ${to}`,
    balance: (from, to) => `Equilibrio ${from} s → ${to} s`,
    arch: (from, to) => `Arco sostenido ${from} s → ${to} s`,
    strengthSince: 'Tu primera prueba frente a la última.',
    currentStreak: 'Racha actual',
    longestStreak: 'Mejor racha',
    dayCount: { one: '{count} día', other: '{count} días' },
    title: { one: 'Racha de {count} día', other: 'Racha de {count} días' },
    rule: 'Un día cuenta si registras tu dolor, entrenas, terminas una rutina de la biblioteca o el plan te asigna descanso.',
    total: { one: '{count} día en total.', other: '{count} días en total.' },
    dismiss: 'Entendido',
  },
  pt: {
    painTitle: 'Dor de manhã',
    painNow: (value) => `${value} / 10 esta semana`,
    painCaption: 'Altos e baixos de um dia para o outro são normais. Acompanhe a linha.',
    goalsTitle: 'Objetivos',
    goalName: { arch_hold: 'Arco mais forte', calf_raises: 'Panturrilhas mais fortes', balance: 'Mais equilíbrio' },
    goalLine: {
      arch_hold: (c, t) => `Arco sustentado ${c} s → ${t} s`,
      calf_raises: (c, t) => `Elevações de calcanhar ${c} → ${t}`,
      balance: (c, t) => `Equilíbrio ${c} s → ${t} s`,
    },
    strengthTitle: 'Força e equilíbrio',
    calf: (from, to) => `Elevações de calcanhar ${from} → ${to}`,
    balance: (from, to) => `Equilíbrio ${from} s → ${to} s`,
    arch: (from, to) => `Arco sustentado ${from} s → ${to} s`,
    strengthSince: 'Seu primeiro teste comparado com o mais recente.',
    currentStreak: 'Sequência atual',
    longestStreak: 'Melhor sequência',
    dayCount: { one: '{count} dia', other: '{count} dias' },
    title: { one: '{count} dia seguido', other: '{count} dias seguidos' },
    rule: 'Um dia conta quando você faz o registro, treina, termina uma rotina da biblioteca ou o plano te dá um dia de descanso.',
    total: { one: '{count} dia até agora.', other: '{count} dias até agora.' },
    dismiss: 'Entendi',
  },
  fr: {
    painTitle: 'Douleur du matin',
    painNow: (value) => `${value} / 10 cette semaine`,
    painCaption: 'Les hauts et les bas d’un jour à l’autre sont normaux. Regarde la courbe.',
    goalsTitle: 'Objectifs',
    goalName: {
      arch_hold: 'Une voûte plus forte',
      calf_raises: 'Des mollets plus forts',
      balance: 'Un meilleur équilibre',
    },
    goalLine: {
      arch_hold: (c, t) => `Maintien de la voûte ${c} s → ${t} s`,
      calf_raises: (c, t) => `Montées sur pointes ${c} → ${t}`,
      balance: (c, t) => `Équilibre ${c} s → ${t} s`,
    },
    strengthTitle: 'Force et équilibre',
    calf: (from, to) => `Montées sur pointes ${from} → ${to}`,
    balance: (from, to) => `Équilibre ${from} s → ${to} s`,
    arch: (from, to) => `Maintien de la voûte ${from} s → ${to} s`,
    strengthSince: 'Ton premier test face au plus récent.',
    currentStreak: 'Série actuelle',
    longestStreak: 'Meilleure série',
    dayCount: { one: '{count} jour', other: '{count} jours' },
    title: { one: '{count} jour d’affilée', other: '{count} jours d’affilée' },
    rule: 'Un jour compte quand tu fais ton bilan, t’entraînes, termines une routine de la bibliothèque, ou quand le plan te donne un jour de repos.',
    total: { one: '{count} jour jusqu’ici.', other: '{count} jours jusqu’ici.' },
    dismiss: 'Compris',
  },
  it: {
    painTitle: 'Dolore al mattino',
    painNow: (value) => `${value} / 10 questa settimana`,
    painCaption: 'Gli alti e bassi di ogni giorno sono normali. Guarda la linea.',
    goalsTitle: 'Obiettivi',
    goalName: { arch_hold: 'Arco più forte', calf_raises: 'Polpacci più forti', balance: 'Equilibrio migliore' },
    goalLine: {
      arch_hold: (c, t) => `Tenuta dell’arco ${c} s → ${t} s`,
      calf_raises: (c, t) => `Sollevamenti sui talloni ${c} → ${t}`,
      balance: (c, t) => `Equilibrio ${c} s → ${t} s`,
    },
    strengthTitle: 'Forza ed equilibrio',
    calf: (from, to) => `Sollevamenti sui talloni ${from} → ${to}`,
    balance: (from, to) => `Equilibrio ${from} s → ${to} s`,
    arch: (from, to) => `Tenuta dell’arco ${from} s → ${to} s`,
    strengthSince: 'Il tuo primo test confrontato con l’ultimo.',
    currentStreak: 'Serie attuale',
    longestStreak: 'Serie migliore',
    dayCount: { one: '{count} giorno', other: '{count} giorni' },
    title: { one: '{count} giorno di fila', other: '{count} giorni di fila' },
    rule: 'Un giorno conta quando fai il check-in, ti alleni, finisci una routine della libreria o il piano ti dà un giorno di riposo.',
    total: { one: '{count} giorno finora.', other: '{count} giorni finora.' },
    dismiss: 'Ho capito',
  },
  de: {
    painTitle: 'Morgenschmerz',
    painNow: (value) => `${value} / 10 diese Woche`,
    painCaption: 'Auf und Ab von Tag zu Tag ist normal. Achte auf die Linie.',
    goalsTitle: 'Ziele',
    goalName: { arch_hold: 'Kräftigeres Gewölbe', calf_raises: 'Kräftigere Waden', balance: 'Bessere Balance' },
    goalLine: {
      arch_hold: (c, t) => `Gewölbe halten ${c} s → ${t} s`,
      calf_raises: (c, t) => `Fersenheben ${c} → ${t}`,
      balance: (c, t) => `Balance ${c} s → ${t} s`,
    },
    strengthTitle: 'Kraft und Balance',
    calf: (from, to) => `Fersenheben ${from} → ${to}`,
    balance: (from, to) => `Balance ${from} s → ${to} s`,
    arch: (from, to) => `Gewölbe halten ${from} s → ${to} s`,
    strengthSince: 'Dein erster Test im Vergleich zu deinem letzten.',
    currentStreak: 'Aktuelle Serie',
    longestStreak: 'Beste Serie',
    dayCount: { one: '{count} Tag', other: '{count} Tage' },
    title: { one: '{count} Tag in Folge', other: '{count} Tage in Folge' },
    rule: 'Ein Tag zählt, wenn du eincheckst, trainierst, eine Routine aus der Bibliothek beendest oder der Plan dir einen Ruhetag gibt.',
    total: { one: 'Bisher {count} Tag.', other: 'Bisher {count} Tage.' },
    dismiss: 'Verstanden',
  },
};

/**
 * A figure as the app writes it (`formatNumber` in
 * `pages/progress/model/format.ts`): one decimal at most, in the language's
 * own way, so "3.3" in English and "3,3" in Russian, French or German.
 */
function formatNumber(value: number, lang: Lang): string {
  return new Intl.NumberFormat(lang, { minimumFractionDigits: 0, maximumFractionDigits: 1 }).format(value);
}

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
 * The fourth "How it works" visual: the app's Progress screen taken apart and
 * laid on the card, its streak sheet arriving in front last, drawn rather than
 * screenshotted so each piece can move the way it does in the app.
 *
 * The Progress screen's own cards (`progress-cards.tsx`): morning pain as a
 * 7-day rolling mean over faint daily dots (`PainLineCard`), one bar per goal
 * in that goal's accent (`GoalsCard`), and the tests first against latest
 * (`StrengthCard`). Then the streak sheet (`StreakSheet`): its gold emblem
 * hung half over the card, the rule, the week as seven flames (`StreakWeek`)
 * and "Got it". On a phone, where the card is short, the pain card and the
 * two streak tiles (`StreakTile`) stand in for the lot. Dark scheme, the
 * app's colours and sizes in app points; the CSS turns a point into pixels for
 * whatever room the card has.
 *
 * The parent marks it active with `data-on`; the CSS then draws the line,
 * fills the bars, raises the sheet and lands the flames one after another.
 * Announced by the parent as one image.
 */
export function ProgressVisual({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const days = weekdays(lang);

  return (
    <div className="pv">
      <div className="pv-stage">
        <div className="pv-col pv-col-a">
          <div className="pv-card pv-pain">
            <span className="pv-card-title">{c.painTitle}</span>
            <span className="pv-figure">{c.painNow(formatNumber(CHART.latest, lang))}</span>
            <svg
              className="pv-chart"
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              aria-hidden
              focusable="false"
            >
              {CHART.grid.map((y) => (
                <line key={y} className="pv-grid" x1={0} x2={CHART_W} y1={y} y2={y} />
              ))}
              {CHART.dots.map((dot, i) => (
                <circle
                  key={i}
                  className="pv-dot"
                  cx={dot.cx.toFixed(1)}
                  cy={dot.cy.toFixed(1)}
                  r={2}
                  style={{ '--i': i } as React.CSSProperties}
                />
              ))}
              <path className="pv-line" d={CHART.line} pathLength={1} />
            </svg>
            <span className="pv-caption pv-pain-caption">{c.painCaption}</span>
          </div>

          <div className="pv-card pv-goals">
            <span className="pv-card-title">{c.goalsTitle}</span>
            {GOALS.map((goal, k) => (
              <span
                key={goal.type}
                className={`pv-goal pv-tone-${goal.tone}`}
                style={{ '--fill': Math.min(1, goal.current / goal.target), '--g': k } as React.CSSProperties}
              >
                <span className="pv-goal-name">{c.goalName[goal.type]}</span>
                <span className="pv-goal-line">{c.goalLine[goal.type](goal.current, goal.target)}</span>
                <span className="pv-bar">
                  <span className="pv-bar-fill" />
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="pv-col pv-col-b">
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

          <div className="pv-sheet">
            <img
              className="pv-badge"
              src="/hero/streak-badge.webp"
              alt=""
              width={552}
              height={505}
              loading="lazy"
              decoding="async"
            />
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
    </div>
  );
}
