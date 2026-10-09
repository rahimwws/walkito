import { three, two } from './plural.ts';
import { DE } from './copy-de.ts';
import { FR } from './copy-fr.ts';
import { IT } from './copy-it.ts';
import { PT } from './copy-pt.ts';
import { asLocale, type GoalType, type Locale, type Metric } from './types.ts';

/**
 * Every word an email can say, in English, Russian and Spanish here, and in
 * Portuguese, French, German and Italian in `copy-pt.ts`, `copy-fr.ts`,
 * `copy-de.ts` and `copy-it.ts`.
 *
 * Three rules hold across all of it, and `tests/email-copy.test.ts` checks each
 * one against every email in every language:
 *
 * - **All lowercase.** Subjects, body, buttons, footer and names. No capital
 *   letter appears anywhere.
 * - **No dashes as punctuation.** No long dash and no spaced hyphen (" - "):
 *   use a period, colon or comma instead (Rahman's rule for everything Walkito
 *   writes). A hyphen inside a word ("60-second", "7-day") is fine.
 * - **No pain number in a subject.** Subjects show on lock screens. Pain is
 *   only ever in a body, and only in `day10_keep`, `pain_up` and `weekly`.
 *
 * The app's catalogue rules apply too: whole sentences, never fragments joined
 * at a call site, and Russian always gets its three plural forms. Where a count
 * changes the words around it, the whole sentence is the plural form.
 *
 * Russian is «вы» throughout and Spanish is «tú», as in the app. No diagnosis
 * words: treat, cure, fix, heal, and their Russian and Spanish kin.
 *
 * The type is written out so a language missing a line fails `tsc`.
 */

export type Copy = {
  greeting: (name: string | null) => string;
  footer: { why: string; unsubscribe: string; settings: string };
  goalTitle: Record<GoalType, string>;
  metricName: Record<Metric, string>;
  /** A metric's name as the subject of a result: "your calf raises". */
  resultName: Record<Metric, string>;
  /** A measured figure: "8", "12 s", "18%". */
  value: (metric: Metric, n: string) => string;
  /** A goal figure: "25", "60 s", "under 10%". */
  target: (metric: Metric, n: string) => string;

  /** Sent 15-20 seconds after the address first arrives — usually while the
   * user is still in onboarding — so it welcomes rather than announces a plan. */
  welcome: {
    subject: string;
    intro: string;
    first: (minutes: number) => string;
    firstRunner: (minutes: number) => string;
    button: string;
    ps: string;
  };
  day2Morning: { subject: string; lines: [string, string]; button: string };
  day2Focus: {
    subject: Record<GoalType, string>;
    numbers: (metricName: string, current: string, target: string) => string;
    moves: string;
    noNumbers: (goalTitle: string) => string;
    button: string;
  };
  day5Easy: { subject: string; lines: [string, string]; button: string };
  day5Start: { subject: (minutes: number) => string; line: string; button: (minutes: number) => string };
  day10Keep: {
    subject: string;
    notBecause: string;
    painDrop: (start: string, last: string) => string;
    daysIn: (days: number) => string;
    button: (minutes: number) => string;
  };
  day14Test: {
    subject: string;
    before: (metric: Metric, n: number, shown: string) => string;
    generic: string;
    tests: string;
    button: string;
  };
  testResult: {
    subject: (resultName: string, before: string, now: string) => string;
    work: (weeks: number) => string;
    goal: (target: string) => string;
    button: string;
  };
  goalReached: {
    subject: (goalTitle: string) => string;
    reached: (goal: GoalType, target: number) => string;
    next: (goalTitle: string) => string;
    buttonNext: string;
    buttonPlan: string;
  };
  painUp: { subject: string; lines: [string, string]; button: string };
  winback7: { subject: string; lines: [string, string]; button: string };
  winback21: {
    subject: string;
    saved: (metricName: string, value: string) => string;
    savedPlain: string;
    button: string;
  };
  /** The offer price is the annual subscription's, so that is what these name. */
  offer: {
    subject: (percent: number | null) => string;
    ready: (goalTitle: string, current: string, target: string) => string;
    readyPlain: (goalTitle: string) => string;
    price: (price: string, standard: string) => string;
    priceUnknown: string;
    button: (percent: number | null) => string;
  };
  offerFinal: {
    subject: string;
    price: (price: string) => string;
    priceUnknown: string;
    button: (price: string | null) => string;
  };
  weekly: {
    subject: (sessions: number) => string;
    subjectWithMetric: (sessions: number, metricName: string, value: string) => string;
    mornings: (avg: string) => string;
    next: (goalTitle: string) => string;
    button: string;
  };
  /** The page the footer link lands on, and its one button. */
  unsubscribePage: {
    title: string;
    done: string;
    undo: string;
    resubscribed: string;
    invalid: string;
  };
};

// ── English ─────────────────────────────────────────────────────────────────

const minutesEn = (m: number) => `${m} ${two(m, 'minute', 'minutes')}`;
const secondsEn = (n: number) => two(n, 'second', 'seconds');

const EN: Copy = {
  greeting: (name) => (name ? `hi ${name},` : 'hi there,'),
  footer: {
    why: "you're getting this because you use walkito.",
    unsubscribe: 'unsubscribe',
    settings: 'email settings',
  },
  goalTitle: {
    pain_free_mornings: 'easier mornings',
    arch_hold: 'arch hold',
    calf_raises: 'stronger calves',
    balance: 'better balance',
    symmetry: 'even feet',
  },
  metricName: { calf: 'calf raises', arch: 'arch hold', balance: 'balance', symmetry: 'gap between legs' },
  resultName: { calf: 'your calf raises', arch: 'your arch hold', balance: 'your balance', symmetry: 'the gap between your legs' },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n}%` : `${n} s`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `under ${n}%` : `${n} s`),

  welcome: {
    subject: 'welcome to walkito',
    intro: 'rahim and rahman here. we built walkito, just the two of us.',
    first: (m) => `your first session takes ${minutesEn(m)}. start today, it's the easiest one.`,
    firstRunner: (m) => `your first session takes ${minutesEn(m)}, less than your warm-up.`,
    button: 'open walkito',
    ps: 'p.s. reply to this email. we read every one.',
  },
  day2Morning: {
    subject: 'do this before you get out of bed',
    lines: ['the first step of the morning hurts most.', '60 seconds of stretching in bed changes that. try it tomorrow.'],
    button: 'see the 60-second stretch',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'this week is about your mornings',
      arch_hold: 'this week is about your arch',
      calf_raises: 'this week is about your calves',
      balance: 'this week is about your balance',
      symmetry: 'this week is about evening out your legs',
    },
    numbers: (name, current, target) => `${name}: ${current} now. goal ${target}.`,
    moves: 'every session this week moves that number.',
    noNumbers: (goal) => `every session this week works toward ${goal}.`,
    button: 'see this week',
  },
  day5Easy: {
    subject: 'feels too easy? good.',
    lines: ["week 1 is meant to be gentle. we're settling things down before adding load.", 'real work starts next week.'],
    button: 'see your week',
  },
  day5Start: {
    subject: (m) => `the first one is ${minutesEn(m)}`,
    line: 'no gym, no equipment. sitting down is fine.',
    button: (m) => `start with ${minutesEn(m)}`,
  },
  day10Keep: {
    subject: 'pick it back up today',
    notBecause: "this is the point where it's easy to stop. don't.",
    painDrop: (s, l) => `your mornings went from ${s} to ${l}. don't stop now.`,
    daysIn: (d) => `${d} ${two(d, 'day', 'days')} in. keep going.`,
    button: (m) => `do today's ${minutesEn(m)}`,
  },
  day14Test: {
    subject: 'test day: see what changed',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return `two weeks ago you did ${shown} calf ${two(n, 'raise', 'raises')}. let's see today.`;
        case 'arch':
          return `two weeks ago you held your arch for ${shown} ${secondsEn(n)}. let's see today.`;
        case 'balance':
          return `two weeks ago you stood on one leg for ${shown} ${secondsEn(n)}. let's see today.`;
        case 'symmetry':
          return `two weeks ago the gap between your legs was ${shown}%. let's see today.`;
      }
    },
    generic: "two weeks in. let's see what changed.",
    tests: '3 quick tests, about 4 minutes.',
    button: 'take the test',
  },
  testResult: {
    subject: (name, before, now) => `${name}: ${before} → ${now}`,
    work: (w) =>
      w <= 1 ? "that's a week of work, measured." : w === 2 ? "that's two weeks of work, measured." : `that's ${w} weeks of work, measured.`,
    goal: (target) => `${target} is the goal.`,
    button: 'see your progress',
  },
  goalReached: {
    subject: (goal) => `${goal}: done`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return `you set out to reach ${t} calf raises. you did.`;
        case 'arch_hold':
          return `you set out to hold your arch for ${t} ${secondsEn(t)}. you did.`;
        case 'balance':
          return `you set out to stand on one leg for ${t} ${secondsEn(t)}. you did.`;
        case 'symmetry':
          return `you set out to get the gap between your legs under ${t}%. you did.`;
        case 'pain_free_mornings':
          return 'you set out to have easier mornings. you got there.';
      }
    },
    next: (goal) => `next: ${goal}.`,
    buttonNext: 'start your next goal',
    buttonPlan: 'see your plan',
  },
  painUp: {
    subject: "a rougher week. here's the plan",
    lines: [
      'pain went up a bit this week. that happens. your plan already got lighter.',
      'if you notice swelling, numbness or pain at night, check with a doctor.',
    ],
    button: "see this week's lighter plan",
  },
  winback7: {
    subject: 'your plan is still here',
    lines: ['no catching up needed. it picks up where you are.', '3 minutes today?'],
    button: 'start with 3 minutes',
  },
  winback21: {
    subject: 'still here if your feet need it',
    saved: (name, value) => `your numbers are saved: ${name} ${value}.`,
    savedPlain: 'your plan and your progress are saved.',
    button: 'open walkito',
  },
  offer: {
    subject: (p) => (p != null ? `your plan is saved, ${p}% off` : 'your plan is saved, now at a lower price'),
    ready: (goal, current, target) => `your plan for ${goal} is ready: ${current} now, ${target} is the goal.`,
    readyPlain: (goal) => `your plan for ${goal} is ready and waiting.`,
    price: (price, standard) => `the annual subscription is ${price} instead of ${standard}.`,
    priceUnknown: 'the annual subscription costs less right now.',
    button: (p) => (p != null ? `get ${p}% off` : 'see the offer'),
  },
  offerFinal: {
    subject: 'last one from us',
    price: (price) => `the annual subscription for ${price}. after this, no more offers.`,
    priceUnknown: 'the annual subscription at our lowest price. after this, no more offers.',
    button: (price) => (price != null ? `get it for ${price}` : 'see the offer'),
  },
  weekly: {
    subject: (s) => `your week: ${s} ${two(s, 'session', 'sessions')}`,
    subjectWithMetric: (s, name, value) => `your week: ${s} ${two(s, 'session', 'sessions')}, ${name} ${value}`,
    mornings: (avg) => `mornings averaged ${avg}/10.`,
    next: (goal) => `next week: ${goal}.`,
    button: 'see next week',
  },
  unsubscribePage: {
    title: "you're unsubscribed",
    done: "walkito won't send you any more emails. you can turn them back on in the app: settings → email.",
    undo: 'turn emails back on',
    resubscribed: 'emails are back on.',
    invalid: "this link doesn't work anymore.",
  },
};

// ── Russian ─────────────────────────────────────────────────────────────────

const RU: Copy = {
  greeting: (name) => (name ? `здравствуйте, ${name}!` : 'здравствуйте!'),
  footer: {
    why: 'вы получили это письмо, потому что пользуетесь walkito.',
    unsubscribe: 'отписаться',
    settings: 'настройки писем',
  },
  goalTitle: {
    pain_free_mornings: 'лёгкие утра',
    arch_hold: 'удержание свода',
    calf_raises: 'сильные икры',
    balance: 'лучше баланс',
    symmetry: 'ровные стопы',
  },
  metricName: { calf: 'подъёмы на носок', arch: 'удержание свода', balance: 'баланс', symmetry: 'разница между ногами' },
  resultName: { calf: 'подъёмы на носок', arch: 'удержание свода', balance: 'баланс', symmetry: 'разница между ногами' },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n} %` : `${n} с`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `меньше ${n} %` : `${n} с`),

  welcome: {
    subject: 'добро пожаловать в walkito',
    intro: 'это рахим и рахман. мы сделали walkito вдвоём.',
    first: (m) =>
      three(
        m,
        `первая сессия займёт ${m} минуту. начните сегодня, она самая лёгкая.`,
        `первая сессия займёт ${m} минуты. начните сегодня, она самая лёгкая.`,
        `первая сессия займёт ${m} минут. начните сегодня, она самая лёгкая.`,
      ),
    firstRunner: (m) =>
      three(
        m,
        `первая сессия займёт ${m} минуту, это меньше, чем ваша разминка.`,
        `первая сессия займёт ${m} минуты, это меньше, чем ваша разминка.`,
        `первая сессия займёт ${m} минут, это меньше, чем ваша разминка.`,
      ),
    button: 'открыть walkito',
    ps: 'p.s. ответьте на это письмо. мы читаем каждое.',
  },
  day2Morning: {
    subject: 'сделайте это, прежде чем встать с кровати',
    lines: ['утром больнее всего первый шаг.', '60 секунд растяжки прямо в кровати это меняют. попробуйте завтра.'],
    button: 'посмотреть растяжку на 60 секунд',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'на этой неделе: лёгкие утра',
      arch_hold: 'на этой неделе: свод стопы',
      calf_raises: 'на этой неделе: ваши икры',
      balance: 'на этой неделе: баланс',
      symmetry: 'на этой неделе: ровная нагрузка на обе ноги',
    },
    numbers: (name, current, target) => `${name}: сейчас ${current}. цель: ${target}.`,
    moves: 'каждая сессия на этой неделе двигает это число.',
    noNumbers: (goal) => `каждая сессия на этой неделе работает на цель «${goal}».`,
    button: 'посмотреть неделю',
  },
  day5Easy: {
    subject: 'слишком легко? так и задумано.',
    lines: [
      'первая неделя и должна быть мягкой. сначала всё успокаиваем, потом добавляем нагрузку.',
      'настоящая работа начнётся на следующей неделе.',
    ],
    button: 'посмотреть неделю',
  },
  day5Start: {
    subject: (m) =>
      three(m, `первая сессия: ${m} минута`, `первая сессия: ${m} минуты`, `первая сессия: ${m} минут`),
    line: 'без зала и без инвентаря. можно сидя.',
    button: (m) => three(m, `начать с ${m} минуты`, `начать с ${m} минут`, `начать с ${m} минут`),
  },
  day10Keep: {
    subject: 'вернитесь к плану сегодня',
    notBecause: 'именно здесь легко остановиться. не останавливайтесь.',
    painDrop: (s, l) => `утром было ${s} из 10, теперь ${l}. не останавливайтесь сейчас.`,
    daysIn: (d) => three(d, `уже ${d} день. продолжайте.`, `уже ${d} дня. продолжайте.`, `уже ${d} дней. продолжайте.`),
    button: (m) =>
      three(
        m,
        `сделать сегодняшнюю ${m} минуту`,
        `сделать сегодняшние ${m} минуты`,
        `сделать сегодняшние ${m} минут`,
      ),
  },
  day14Test: {
    subject: 'день теста: посмотрим, что изменилось',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return three(
            n,
            `две недели назад вы сделали ${shown} подъём на носок. посмотрим, сколько сегодня.`,
            `две недели назад вы сделали ${shown} подъёма на носок. посмотрим, сколько сегодня.`,
            `две недели назад вы сделали ${shown} подъёмов на носок. посмотрим, сколько сегодня.`,
          );
        case 'arch':
          return three(
            n,
            `две недели назад вы удерживали свод ${shown} секунду. посмотрим, сколько сегодня.`,
            `две недели назад вы удерживали свод ${shown} секунды. посмотрим, сколько сегодня.`,
            `две недели назад вы удерживали свод ${shown} секунд. посмотрим, сколько сегодня.`,
          );
        case 'balance':
          return three(
            n,
            `две недели назад вы простояли на одной ноге ${shown} секунду. посмотрим, сколько сегодня.`,
            `две недели назад вы простояли на одной ноге ${shown} секунды. посмотрим, сколько сегодня.`,
            `две недели назад вы простояли на одной ноге ${shown} секунд. посмотрим, сколько сегодня.`,
          );
        case 'symmetry':
          return `две недели назад разница между ногами была ${shown} %. посмотрим, что сегодня.`;
      }
    },
    generic: 'прошло две недели. посмотрим, что изменилось.',
    tests: '3 коротких теста, около 4 минут.',
    button: 'пройти тест',
  },
  testResult: {
    subject: (name, before, now) => `${name}: ${before} → ${now}`,
    work: (w) =>
      w <= 1
        ? 'это неделя работы в цифрах.'
        : w === 2
          ? 'это две недели работы в цифрах.'
          : three(w, `это ${w} неделя работы в цифрах.`, `это ${w} недели работы в цифрах.`, `это ${w} недель работы в цифрах.`),
    goal: (target) => `цель: ${target}.`,
    button: 'посмотреть прогресс',
  },
  goalReached: {
    subject: (goal) => `${goal}: готово`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return three(
            t,
            `вы хотели дойти до ${t} подъёма на носок. и дошли.`,
            `вы хотели дойти до ${t} подъёмов на носок. и дошли.`,
            `вы хотели дойти до ${t} подъёмов на носок. и дошли.`,
          );
        case 'arch_hold':
          return three(
            t,
            `вы хотели удерживать свод ${t} секунду. и удерживаете.`,
            `вы хотели удерживать свод ${t} секунды. и удерживаете.`,
            `вы хотели удерживать свод ${t} секунд. и удерживаете.`,
          );
        case 'balance':
          return three(
            t,
            `вы хотели простоять на одной ноге ${t} секунду. и простояли.`,
            `вы хотели простоять на одной ноге ${t} секунды. и простояли.`,
            `вы хотели простоять на одной ноге ${t} секунд. и простояли.`,
          );
        case 'symmetry':
          return `вы хотели, чтобы разница между ногами стала меньше ${t} %. так и вышло.`;
        case 'pain_free_mornings':
          return 'вы хотели лёгких утр. так и вышло.';
      }
    },
    next: (goal) => `дальше: ${goal}.`,
    buttonNext: 'начать следующую цель',
    buttonPlan: 'посмотреть план',
  },
  painUp: {
    subject: 'неделя потяжелее. вот план',
    lines: [
      'на этой неделе боль немного усилилась. так бывает. план уже стал легче.',
      'если появятся отёк, онемение или боль по ночам, покажитесь врачу.',
    ],
    button: 'посмотреть облегчённый план',
  },
  winback7: {
    subject: 'ваш план на месте',
    lines: ['ничего не нужно навёрстывать: план продолжится с того места, где вы сейчас.', '3 минуты сегодня?'],
    button: 'начать с 3 минут',
  },
  winback21: {
    subject: 'мы на месте, если ногам понадобится помощь',
    saved: (name, value) => `ваши результаты сохранены: ${name}, ${value}.`,
    savedPlain: 'ваш план и прогресс сохранены.',
    button: 'открыть walkito',
  },
  offer: {
    subject: (p) => (p != null ? `ваш план сохранён, скидка ${p} %` : 'ваш план сохранён и стал дешевле'),
    ready: (goal, current, target) => `ваш план «${goal}» готов: сейчас ${current}, цель ${target}.`,
    readyPlain: (goal) => `ваш план «${goal}» готов и ждёт вас.`,
    price: (price, standard) => `годовая подписка за ${price} вместо ${standard}.`,
    priceUnknown: 'сейчас годовая подписка стоит дешевле.',
    button: (p) => (p != null ? `получить скидку ${p}%` : 'посмотреть предложение'),
  },
  offerFinal: {
    subject: 'последнее предложение от нас',
    price: (price) => `годовая подписка за ${price}. больше предложений не будет.`,
    priceUnknown: 'годовая подписка по самой низкой цене. больше предложений не будет.',
    button: (price) => (price != null ? `получить за ${price}` : 'посмотреть предложение'),
  },
  weekly: {
    subject: (s) => three(s, `ваша неделя: ${s} сессия`, `ваша неделя: ${s} сессии`, `ваша неделя: ${s} сессий`),
    subjectWithMetric: (s, name, value) =>
      three(
        s,
        `ваша неделя: ${s} сессия, ${name} ${value}`,
        `ваша неделя: ${s} сессии, ${name} ${value}`,
        `ваша неделя: ${s} сессий, ${name} ${value}`,
      ),
    mornings: (avg) => `утром в среднем ${avg} из 10.`,
    next: (goal) => `на следующей неделе: ${goal}.`,
    button: 'посмотреть следующую неделю',
  },
  unsubscribePage: {
    title: 'вы отписались',
    done: 'walkito больше не будет присылать вам письма. включить их снова можно в приложении: настройки → письма.',
    undo: 'вернуть письма',
    resubscribed: 'письма снова включены.',
    invalid: 'эта ссылка больше не работает.',
  },
};

// ── Spanish ─────────────────────────────────────────────────────────────────

const minutesEs = (m: number) => `${m} ${two(m, 'minuto', 'minutos')}`;
const secondsEs = (n: number) => two(n, 'segundo', 'segundos');

const ES: Copy = {
  greeting: (name) => (name ? `hola, ${name}:` : 'hola:'),
  footer: {
    why: 'recibes este correo porque usas walkito.',
    unsubscribe: 'darme de baja',
    settings: 'ajustes de correo',
  },
  goalTitle: {
    pain_free_mornings: 'mañanas más fáciles',
    arch_hold: 'arco sostenido',
    calf_raises: 'pantorrillas más fuertes',
    balance: 'mejor equilibrio',
    symmetry: 'pies parejos',
  },
  metricName: {
    calf: 'elevaciones de talón',
    arch: 'mantener el arco',
    balance: 'equilibrio',
    symmetry: 'diferencia entre piernas',
  },
  resultName: {
    calf: 'tus elevaciones de talón',
    arch: 'tu arco',
    balance: 'tu equilibrio',
    symmetry: 'la diferencia entre tus piernas',
  },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n} %` : `${n} s`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `menos del ${n} %` : `${n} s`),

  welcome: {
    subject: 'te damos la bienvenida a walkito',
    intro: 'somos rahim y rahman. hicimos walkito entre los dos.',
    first: (m) => `tu primera sesión dura ${minutesEs(m)}. empieza hoy, es la más fácil.`,
    firstRunner: (m) => `tu primera sesión dura ${minutesEs(m)}, menos que tu calentamiento.`,
    button: 'abrir walkito',
    ps: 'p. d. responde a este correo. leemos todos.',
  },
  day2Morning: {
    subject: 'haz esto antes de levantarte',
    lines: ['el primer paso de la mañana es el que más duele.', '60 segundos de estiramiento en la cama cambian eso. pruébalo mañana.'],
    button: 'ver el estiramiento de 60 segundos',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'esta semana, el foco son tus mañanas',
      arch_hold: 'esta semana, el foco es tu arco',
      calf_raises: 'esta semana, el foco son tus pantorrillas',
      balance: 'esta semana, el foco es tu equilibrio',
      symmetry: 'esta semana, el foco es igualar tus piernas',
    },
    numbers: (name, current, target) => `${name}: ${current} ahora. meta: ${target}.`,
    moves: 'cada sesión de esta semana mueve ese número.',
    noNumbers: (goal) => `cada sesión de esta semana te acerca a tu objetivo: ${goal}.`,
    button: 'ver esta semana',
  },
  day5Easy: {
    subject: '¿demasiado fácil? así debe ser.',
    lines: [
      'la primera semana es suave a propósito. primero calmamos las cosas y luego sumamos carga.',
      'el trabajo de verdad empieza la semana que viene.',
    ],
    button: 'ver tu semana',
  },
  day5Start: {
    subject: (m) => `la primera dura ${minutesEs(m)}`,
    line: 'sin gimnasio, sin material. no hace falta levantarte de la silla.',
    button: (m) => `empezar con ${minutesEs(m)}`,
  },
  day10Keep: {
    subject: 'retómalo hoy',
    notBecause: 'este es el punto en el que es fácil dejarlo. no lo dejes.',
    painDrop: (s, l) => `tus mañanas pasaron de ${s} a ${l}. no pares ahora.`,
    daysIn: (d) => `llevas ${d} ${two(d, 'día', 'días')}. sigue así.`,
    button: (m) => (m === 1 ? 'hacer el minuto de hoy' : `hacer los ${m} minutos de hoy`),
  },
  day14Test: {
    subject: 'día de pruebas: mira qué cambió',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return `hace dos semanas hiciste ${shown} ${two(n, 'elevación', 'elevaciones')} de talón. veamos hoy.`;
        case 'arch':
          return `hace dos semanas mantuviste el arco ${shown} ${secondsEs(n)}. veamos hoy.`;
        case 'balance':
          return `hace dos semanas aguantaste ${shown} ${secondsEs(n)} sobre una pierna. veamos hoy.`;
        case 'symmetry':
          return `hace dos semanas la diferencia entre tus piernas era del ${shown} %. veamos hoy.`;
      }
    },
    generic: 'han pasado dos semanas. veamos qué cambió.',
    tests: '3 pruebas cortas, unos 4 minutos.',
    button: 'empezar las pruebas',
  },
  testResult: {
    subject: (name, before, now) => `${name}: ${before} → ${now}`,
    work: (w) =>
      w <= 1
        ? 'es una semana de trabajo, medida.'
        : w === 2
          ? 'son dos semanas de trabajo, medidas.'
          : `son ${w} semanas de trabajo, medidas.`,
    goal: (target) => `la meta es ${target}.`,
    button: 'ver tu progreso',
  },
  goalReached: {
    subject: (goal) => `${goal}: conseguido`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return `te propusiste llegar a ${t} ${two(t, 'elevación', 'elevaciones')} de talón. lo lograste.`;
        case 'arch_hold':
          return `te propusiste mantener el arco ${t} ${secondsEs(t)}. lo lograste.`;
        case 'balance':
          return `te propusiste aguantar ${t} ${secondsEs(t)} sobre una pierna. lo lograste.`;
        case 'symmetry':
          return `te propusiste bajar la diferencia entre tus piernas a menos del ${t} %. lo lograste.`;
        case 'pain_free_mornings':
          return 'te propusiste tener mañanas más fáciles. lo lograste.';
      }
    },
    next: (goal) => `lo siguiente: ${goal}.`,
    buttonNext: 'empezar el siguiente objetivo',
    buttonPlan: 'ver tu plan',
  },
  painUp: {
    subject: 'una semana más dura. este es el plan',
    lines: [
      'el dolor subió un poco esta semana. a veces pasa. tu plan ya se aligeró.',
      'si notas hinchazón, entumecimiento o dolor por la noche, consulta a un médico.',
    ],
    button: 'ver el plan más ligero',
  },
  winback7: {
    subject: 'tu plan sigue aquí',
    lines: ['no hace falta ponerse al día: retoma desde donde estás.', '¿3 minutos hoy?'],
    button: 'empezar con 3 minutos',
  },
  winback21: {
    subject: 'aquí seguimos si tus pies lo necesitan',
    saved: (name, value) => `tus números están guardados: ${name}, ${value}.`,
    savedPlain: 'tu plan y tu progreso están guardados.',
    button: 'abrir walkito',
  },
  offer: {
    subject: (p) => (p != null ? `tu plan está guardado, ${p} % de descuento` : 'tu plan está guardado y ahora es más barato'),
    ready: (goal, current, target) => `tu plan para ${goal} está listo: ${current} ahora, meta ${target}.`,
    readyPlain: (goal) => `tu plan para ${goal} está listo y te espera.`,
    price: (price, standard) => `la suscripción anual cuesta ${price} en lugar de ${standard}.`,
    priceUnknown: 'ahora la suscripción anual cuesta menos.',
    button: (p) => (p != null ? `conseguir el ${p}% de descuento` : 'ver la oferta'),
  },
  offerFinal: {
    subject: 'nuestra última oferta',
    price: (price) => `la suscripción anual por ${price}. después de esto, no habrá más ofertas.`,
    priceUnknown: 'la suscripción anual a nuestro precio más bajo. después de esto, no habrá más ofertas.',
    button: (price) => (price != null ? `conseguirlo por ${price}` : 'ver la oferta'),
  },
  weekly: {
    subject: (s) => `tu semana: ${s} ${two(s, 'sesión', 'sesiones')}`,
    subjectWithMetric: (s, name, value) => `tu semana: ${s} ${two(s, 'sesión', 'sesiones')}, ${name} ${value}`,
    mornings: (avg) => `tus mañanas promediaron ${avg}/10.`,
    next: (goal) => `la semana que viene toca ${goal}.`,
    button: 'ver la próxima semana',
  },
  unsubscribePage: {
    title: 'te has dado de baja',
    done: 'walkito no te enviará más correos. puedes volver a activarlos en la app: ajustes → correo.',
    undo: 'volver a recibirlos',
    resubscribed: 'los correos vuelven a estar activos.',
    invalid: 'este enlace ya no funciona.',
  },
};

export const COPY: Readonly<Record<Locale, Copy>> = { en: EN, ru: RU, es: ES, pt: PT, fr: FR, de: DE, it: IT };

/** Anything unrecognised is English: a whole email in one language, never a mix. */
export function copyFor(locale: string | null | undefined): Copy {
  return COPY[asLocale(locale)];
}
