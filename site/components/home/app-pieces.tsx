import type { CSSProperties, ReactNode } from 'react';

import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import WorkoutRunIcon from '@hugeicons/core-free-icons/WorkoutRunIcon';
import Yoga01Icon from '@hugeicons/core-free-icons/Yoga01Icon';
import { FireIcon } from '@phosphor-icons/react/dist/ssr/Fire';

import { Icon } from '@/components/Icon';
import type { Lang } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

import './app-pieces.css';

/*
 * Pieces of the app, drawn for the home page's hero and its first two
 * sections. Each one reproduces a component from the app's source, in its
 * dark scheme, at the app's own sizes in points (`--ap-pt` turns a point into
 * pixels for wherever the piece sits):
 *
 *   PainCard, PainPair   src/pages/home/ui/pain-check.tsx (PainCheck)
 *   StreakCapsule        src/shared/ui/header-actions (StreakCapsule, Home's Fire glyph)
 *   TaskRow, TodayTasks  src/pages/home/ui/today-tasks.tsx (TaskRow, the list)
 *   DockButton           src/shared/ui/action-dock (ActionDock)
 *   StrengthCard         src/pages/progress/ui/progress-cards.tsx
 *   ArchResult           src/widgets/session-player/ui/test-day/test-day-results.tsx (ResultCard)
 *   TodayMinutes         src/pages/program/ui/today-card.tsx (TodayCard, PlanChip, PrimaryButton)
 *
 * Icons are the ones those components use: Hugeicons stroke-rounded through
 * `Icon`, and Phosphor's filled Fire for the streak. Words are copied from the
 * app's catalogue (`src/shared/lib/i18n/catalogue/<lang>/*.ts`), keys noted
 * beside each, so the page and the product say the same thing. Change them
 * there first, then here.
 *
 * All decoration: every caller hides these from screen readers.
 */

/** One count's wording, by CLDR plural form, as the catalogue spells it. */
type Forms = { one: string; few?: string; many?: string; other?: string };

type AppWords = {
  /** home.noPain, home.itHurts */
  noPain: string;
  itHurts: string;
  /** home.tasksTitle */
  tasksTitle: string;
  /** exercises.category.* */
  category: Record<Category, string>;
  /** exercises.<id>.title */
  exercise: Record<ExerciseKey, string>;
  /** exercises.dose.setsReps / setsHold / holdMinutes / bothFeet */
  setsReps: string;
  setsHold: string;
  holdMinutes: string;
  bothFeet: string;
  /** home.chipMinutes */
  chipMinutes: string;
  /** dock.startWorkout */
  startWorkout: string;
  /** progress.strengthTitle, calfChange, archChange, strengthSince */
  strengthTitle: string;
  calfChange: string;
  archChange: string;
  strengthSince: string;
  /** testday.results.name.arch_hold, unitSeconds, moreSeconds, goalSeconds, toGoSeconds */
  archName: string;
  unitSeconds: Forms;
  moreSeconds: Forms;
  goalSeconds: string;
  toGoSeconds: Forms;
  /** pages.plan.todayEyebrow, pages.program.kindStrength, pages.plan.short.arch_hold, pages.plan.start */
  todayEyebrow: string;
  kindStrength: string;
  shortArch: string;
  start: string;
  /** session.minutes */
  sessionMinutes: Forms;
};

type Category = 'Fitness' | 'Mobility' | 'Recovery' | 'Habit';
type ExerciseKey = 'shortFoot' | 'singleLeg' | 'plantar' | 'footRoll';

const WORDS: Record<Lang, AppWords> = {
  en: {
    noPain: 'No pain today',
    itHurts: 'It hurts today',
    tasksTitle: 'Today’s Tasks',
    category: { Fitness: 'Fitness', Mobility: 'Mobility', Recovery: 'Recovery', Habit: 'Habit' },
    exercise: { shortFoot: 'Short foot', singleLeg: 'Single-leg hold', plantar: 'Plantar stretch', footRoll: 'Foot roll' },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds}s',
    holdMinutes: '{minutes} min',
    bothFeet: '{dose} · both feet',
    chipMinutes: '{count} min',
    startWorkout: 'Start session',
    strengthTitle: 'Strength and balance',
    calfChange: 'Calf raises {from} → {to}',
    archChange: 'Arch hold {from}s → {to}s',
    strengthSince: 'Your first test against your latest.',
    archName: 'Arch hold',
    unitSeconds: { one: 'second', other: 'seconds' },
    moreSeconds: { one: '{count} s more than last time', other: '{count} s more than last time' },
    goalSeconds: 'Goal {n} s',
    toGoSeconds: { one: '{count} s to go', other: '{count} s to go' },
    todayEyebrow: 'Today',
    kindStrength: 'Strength',
    shortArch: 'arch',
    start: 'Start',
    sessionMinutes: { one: '{count} min', other: '{count} min' },
  },
  ru: {
    noPain: 'Сегодня не болит',
    itHurts: 'Сегодня болит',
    tasksTitle: 'Задачи на сегодня',
    category: { Fitness: 'Тренировка', Mobility: 'Подвижность', Recovery: 'Восстановление', Habit: 'Привычка' },
    exercise: {
      shortFoot: 'Короткая стопа',
      singleLeg: 'Стойка на одной ноге',
      plantar: 'Растяжка фасции',
      footRoll: 'Прокатывание стопы',
    },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds} с',
    holdMinutes: '{minutes} мин',
    bothFeet: '{dose} · на обе стопы',
    chipMinutes: '{count} мин',
    startWorkout: 'Начать занятие',
    strengthTitle: 'Сила и баланс',
    calfChange: 'Подъёмы на носки {from} → {to}',
    archChange: 'Удержание свода {from} с → {to} с',
    strengthSince: 'Первый тест и последний.',
    archName: 'Удержание свода',
    unitSeconds: { one: 'секунда', few: 'секунды', many: 'секунд' },
    moreSeconds: {
      one: 'На {count} с больше, чем в прошлый раз',
      few: 'На {count} с больше, чем в прошлый раз',
      many: 'На {count} с больше, чем в прошлый раз',
    },
    goalSeconds: 'Цель {n} с',
    toGoSeconds: { one: 'Ещё {count} с', few: 'Ещё {count} с', many: 'Ещё {count} с' },
    todayEyebrow: 'Сегодня',
    kindStrength: 'Сила',
    shortArch: 'свод',
    start: 'Начать',
    sessionMinutes: { one: '{count} мин', few: '{count} мин', many: '{count} мин' },
  },
  es: {
    noPain: 'Hoy no me duele',
    itHurts: 'Hoy me duele',
    tasksTitle: 'Tareas de hoy',
    category: { Fitness: 'Entrenamiento', Mobility: 'Movilidad', Recovery: 'Recuperación', Habit: 'Hábito' },
    exercise: {
      shortFoot: 'Pie corto',
      singleLeg: 'Equilibrio a una pierna',
      plantar: 'Estiramiento plantar',
      footRoll: 'Automasaje plantar',
    },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds} s',
    holdMinutes: '{minutes} min',
    bothFeet: '{dose} · ambos pies',
    chipMinutes: '{count} min',
    startWorkout: 'Empezar sesión',
    strengthTitle: 'Fuerza y equilibrio',
    calfChange: 'Elevaciones de talón {from} → {to}',
    archChange: 'Arco sostenido {from} s → {to} s',
    strengthSince: 'Tu primera prueba frente a la última.',
    archName: 'Mantener el arco',
    unitSeconds: { one: 'segundo', other: 'segundos' },
    moreSeconds: { one: '{count} s más que la última vez', other: '{count} s más que la última vez' },
    goalSeconds: 'Meta {n} s',
    toGoSeconds: { one: 'Falta {count} s', other: 'Faltan {count} s' },
    todayEyebrow: 'Hoy',
    kindStrength: 'Fuerza',
    shortArch: 'arco',
    start: 'Empezar',
    sessionMinutes: { one: '{count} min', other: '{count} min' },
  },
  pt: {
    noPain: 'Hoje sem dor',
    itHurts: 'Hoje está doendo',
    tasksTitle: 'Tarefas de hoje',
    category: { Fitness: 'Treino', Mobility: 'Mobilidade', Recovery: 'Recuperação', Habit: 'Hábito' },
    exercise: {
      shortFoot: 'Pé curto',
      singleLeg: 'Equilíbrio em uma perna',
      plantar: 'Alongamento plantar',
      footRoll: 'Rolar o pé',
    },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds} s',
    holdMinutes: '{minutes} min',
    bothFeet: '{dose} · os dois pés',
    chipMinutes: '{count} min',
    startWorkout: 'Começar sessão',
    strengthTitle: 'Força e equilíbrio',
    calfChange: 'Elevações de calcanhar {from} → {to}',
    archChange: 'Arco sustentado {from} s → {to} s',
    strengthSince: 'Seu primeiro teste comparado com o mais recente.',
    archName: 'Arco sustentado',
    unitSeconds: { one: 'segundo', other: 'segundos' },
    moreSeconds: { one: '{count} s a mais que da última vez', other: '{count} s a mais que da última vez' },
    goalSeconds: 'Meta {n} s',
    toGoSeconds: { one: 'Falta {count} s', other: 'Faltam {count} s' },
    todayEyebrow: 'Hoje',
    kindStrength: 'Força',
    shortArch: 'arco',
    start: 'Começar',
    sessionMinutes: { one: '{count} min', other: '{count} min' },
  },
  fr: {
    noPain: 'Pas de douleur aujourd’hui',
    itHurts: 'J’ai mal aujourd’hui',
    tasksTitle: 'Au programme aujourd’hui',
    category: { Fitness: 'Entraînement', Mobility: 'Mobilité', Recovery: 'Récupération', Habit: 'Habitude' },
    exercise: {
      shortFoot: 'Pied court',
      singleLeg: 'Équilibre sur une jambe',
      plantar: 'Étirement plantaire',
      footRoll: 'Roulement du pied',
    },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds} s',
    holdMinutes: '{minutes} min',
    bothFeet: '{dose} · les deux pieds',
    chipMinutes: '{count} min',
    startWorkout: 'Commencer la séance',
    strengthTitle: 'Force et équilibre',
    calfChange: 'Montées sur pointes {from} → {to}',
    archChange: 'Maintien de la voûte {from} s → {to} s',
    strengthSince: 'Ton premier test face au plus récent.',
    archName: 'Maintien de la voûte',
    unitSeconds: { one: 'seconde', other: 'secondes' },
    moreSeconds: { one: '{count} s de plus que la dernière fois', other: '{count} s de plus que la dernière fois' },
    goalSeconds: 'Objectif {n} s',
    toGoSeconds: { one: 'Encore {count} s', other: 'Encore {count} s' },
    todayEyebrow: 'Aujourd’hui',
    kindStrength: 'Force',
    shortArch: 'voûte',
    start: 'Commencer',
    sessionMinutes: { one: '{count} min', other: '{count} min' },
  },
  it: {
    noPain: 'Oggi nessun dolore',
    itHurts: 'Oggi fa male',
    tasksTitle: 'Attività di oggi',
    category: { Fitness: 'Allenamento', Mobility: 'Mobilità', Recovery: 'Recupero', Habit: 'Abitudine' },
    exercise: {
      shortFoot: 'Piede corto',
      singleLeg: 'Equilibrio su una gamba',
      plantar: 'Allungamento plantare',
      footRoll: 'Rullo sotto il piede',
    },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds} s',
    holdMinutes: '{minutes} min',
    bothFeet: '{dose} · entrambi i piedi',
    chipMinutes: '{count} min',
    startWorkout: 'Inizia la sessione',
    strengthTitle: 'Forza ed equilibrio',
    calfChange: 'Sollevamenti sulle punte {from} → {to}',
    archChange: 'Tenuta dell’arco {from} s → {to} s',
    strengthSince: 'Il tuo primo test confrontato con l’ultimo.',
    archName: 'Tenuta dell’arco',
    unitSeconds: { one: 'secondo', other: 'secondi' },
    moreSeconds: { one: '{count} s in più dell’ultima volta', other: '{count} s in più dell’ultima volta' },
    goalSeconds: 'Obiettivo {n} s',
    toGoSeconds: { one: 'Manca {count} s', other: 'Mancano {count} s' },
    todayEyebrow: 'Oggi',
    kindStrength: 'Forza',
    shortArch: 'arco',
    start: 'Inizia',
    sessionMinutes: { one: '{count} min', other: '{count} min' },
  },
  de: {
    noPain: 'Heute kein Schmerz',
    itHurts: 'Heute tut es weh',
    tasksTitle: 'Aufgaben heute',
    category: { Fitness: 'Training', Mobility: 'Beweglichkeit', Recovery: 'Erholung', Habit: 'Gewohnheit' },
    exercise: {
      shortFoot: 'Kurzer Fuß',
      singleLeg: 'Einbeinstand',
      plantar: 'Plantar-Dehnung',
      footRoll: 'Fuß rollen',
    },
    setsReps: '{sets} × {reps}',
    setsHold: '{sets} × {seconds} s',
    holdMinutes: '{minutes} Min.',
    bothFeet: '{dose} · beide Füße',
    chipMinutes: '{count} Min.',
    startWorkout: 'Einheit starten',
    strengthTitle: 'Kraft und Balance',
    calfChange: 'Fersenheben {from} → {to}',
    archChange: 'Gewölbe halten {from} s → {to} s',
    strengthSince: 'Dein erster Test im Vergleich zu deinem letzten.',
    archName: 'Gewölbe halten',
    unitSeconds: { one: 'Sekunde', other: 'Sekunden' },
    moreSeconds: { one: '{count} s mehr als beim letzten Mal', other: '{count} s mehr als beim letzten Mal' },
    goalSeconds: 'Ziel {n} s',
    toGoSeconds: { one: 'Noch {count} s', other: 'Noch {count} s' },
    todayEyebrow: 'Heute',
    kindStrength: 'Kraft',
    shortArch: 'Gewölbe',
    start: 'Starten',
    sessionMinutes: { one: '{count} Min.', other: '{count} Min.' },
  },
};

/** `home.taskSubtitle` and `pages.plan.todayTitle`, the same two joins in all seven catalogues. */
const TASK_SUBTITLE = '{category} · {dose}';
const TODAY_TITLE = '{kind} · {goal}';

/** Puts values into a catalogue template's `{placeholders}`. */
function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/**
 * The plural form for a whole count, by the same CLDR rules as the app's
 * `plural.ts`: Russian takes `few` for 2-4 and 22-24 and `many` for 11-14,
 * French takes `one` for 0 and 1, the rest `one` for 1 alone.
 */
function plural(lang: Lang, n: number, forms: Forms): string {
  let form: keyof Forms;
  if (lang === 'ru') {
    const last = n % 10;
    const lastTwo = n % 100;
    form = last === 1 && lastTwo !== 11 ? 'one' : last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14) ? 'few' : 'many';
  } else if (lang === 'fr') {
    form = n === 0 || n === 1 ? 'one' : 'other';
  } else {
    form = n === 1 ? 'one' : 'other';
  }
  return fill(forms[form] ?? forms.other ?? forms.one, { count: n });
}

/**
 * Sample figures. Illustrations, but kept in step with the rest of the page:
 * the phone in the hero shows a 12-day streak and the same two tasks, and the
 * Progress visual further down reads calf raises 11 → 18 and an arch hold of
 * 22 s → 41 s, first test against latest.
 */
export const SAMPLE = {
  streak: 12,
  calf: [11, 18] as const,
  /** The first test, the one before this, today's, and the goal (`PROGRAM.goals.archHoldSeconds`). */
  arch: { first: 22, last: 30, now: 41, goal: PROGRAM.goals.archHoldSeconds },
} as const;

/** The dark scheme's accents (`accents.dark` in src/shared/config/theme.ts), as CSS classes. */
type Tone = 'violet' | 'teal' | 'amber' | 'blue';

/** Home's task list: one tone and one glyph per category (`CATEGORIES` in today-tasks.tsx). */
const CATEGORIES: Record<Category, { tone: Tone; icon: typeof Dumbbell01Icon }> = {
  Fitness: { tone: 'violet', icon: Dumbbell01Icon },
  Mobility: { tone: 'teal', icon: Yoga01Icon },
  Recovery: { tone: 'amber', icon: Moon02Icon },
  Habit: { tone: 'blue', icon: RepeatIcon },
};

type Task = {
  exercise: ExerciseKey;
  category: Category;
  /** The dose as `doseLabel` prints it. */
  dose: (w: AppWords) => string;
  /** The minute chip (`home.chipMinutes`). */
  minutes: number;
};

/** The two rows on the hero phone's own screen, then two other kinds of work. */
const TASKS: Record<'shortFoot' | 'singleLeg' | 'plantar' | 'footRoll', Task> = {
  shortFoot: {
    exercise: 'shortFoot',
    category: 'Fitness',
    dose: (w) => fill(w.bothFeet, { dose: fill(w.setsReps, { sets: 3, reps: 10 }) }),
    minutes: 3,
  },
  singleLeg: {
    exercise: 'singleLeg',
    category: 'Fitness',
    dose: (w) => fill(w.bothFeet, { dose: fill(w.setsHold, { sets: 3, seconds: 30 }) }),
    minutes: 2,
  },
  plantar: {
    exercise: 'plantar',
    category: 'Mobility',
    dose: (w) => fill(w.bothFeet, { dose: fill(w.setsHold, { sets: 2, seconds: 30 }) }),
    minutes: 2,
  },
  footRoll: {
    exercise: 'footRoll',
    category: 'Recovery',
    dose: (w) => fill(w.holdMinutes, { minutes: 1 }),
    minutes: 1,
  },
};

const vars = (values: Record<string, string | number>) => values as CSSProperties;

/* ------------------------------------------------------------ PainCheck -- */

/**
 * One of the two morning check-in cards: the mascot over its words, on the
 * card surface, 36-point continuous corners.
 */
export function PainCard({ lang, kind, className }: { lang: Lang; kind: 'pain' | 'nopain'; className?: string }) {
  const w = WORDS[lang];
  return (
    <span className={`ap ap-pain${className ? ` ${className}` : ''}`}>
      <img
        src={kind === 'pain' ? '/hero/mascot-pain.webp' : '/hero/mascot-nopain.webp'}
        alt=""
        width={240}
        height={240}
        loading="lazy"
        decoding="async"
      />
      <span className="ap-pain-title">{kind === 'pain' ? w.itHurts : w.noPain}</span>
    </span>
  );
}

/**
 * The pair as Home lays it out: overlapping on a diagonal, tipped five
 * degrees apart. In a loop, one is picked (it comes level and forward with a
 * ring, the other tips away under a veil), then the other.
 */
export function PainPair({ lang }: { lang: Lang }) {
  return (
    <span className="ap ap-fit ap-pair" style={vars({ '--ap-w': 342, '--ap-h': 216 })}>
      <PainCard lang={lang} kind="pain" className="ap-pair-left" />
      <PainCard lang={lang} kind="nopain" className="ap-pair-right" />
    </span>
  );
}

/* --------------------------------------------------------------- streak -- */

/** The streak capsule from Home's header: Phosphor's filled flame in orange, and the bare count. */
export function StreakCapsule({ count = SAMPLE.streak }: { count?: number }) {
  return (
    <span className="ap ap-streak">
      <FireIcon weight="fill" aria-hidden focusable={false} />
      <span>{count}</span>
    </span>
  );
}

/* ---------------------------------------------------------- TodayTasks -- */

/**
 * A row of Today's list: the title, its kind and dose in the category's
 * colour, and the minutes as a chip. Done, the title is struck through and the
 * chip gives way to a filled box with a tick. `anim` lets the list tick it.
 */
export function TaskRow({ lang, task, anim = false, style }: { lang: Lang; task: Task; anim?: boolean; style?: CSSProperties }) {
  const w = WORDS[lang];
  const category = CATEGORIES[task.category];
  return (
    <span className={`ap-task ap-tone-${category.tone}${anim ? ' ap-task-anim' : ''}`} style={style}>
      <span className="ap-task-copy">
        <span className="ap-task-title">{w.exercise[task.exercise]}</span>
        <span className="ap-task-kind">
          <Icon icon={category.icon} size={13} strokeWidth={2.2} />
          <span>{fill(TASK_SUBTITLE, { category: w.category[task.category], dose: task.dose(w) })}</span>
        </span>
      </span>
      <span className="ap-task-end">
        <span className="ap-chip ap-task-chip">
          <Icon icon={Clock01Icon} size={13} strokeWidth={2.2} />
          {fill(w.chipMinutes, { count: task.minutes })}
        </span>
        <span className="ap-task-box">
          <Icon icon={Tick02Icon} size={16} strokeWidth={2.5} />
        </span>
      </span>
    </span>
  );
}

/** "Today's Tasks", with the mascot off the end of the title, and three rows ticking off. */
export function TodayTasks({ lang }: { lang: Lang }) {
  const w = WORDS[lang];
  // A heading too long for one line beside the mascot ("Au programme
  // aujourd’hui") takes two, and the list is sized for the extra line.
  const twoLines = w.tasksTitle.length > 18;
  return (
    <span className="ap ap-fit ap-tasks" style={vars({ '--ap-w': 330, '--ap-h': twoLines ? 296 : 268 })}>
      <span className="ap-tasks-head">
        <span className="ap-tasks-title">{w.tasksTitle}</span>
        <img src="/hero/mascot-tasks.webp" alt="" width={240} height={240} loading="lazy" decoding="async" />
      </span>
      <span className="ap-tasks-list">
        {[TASKS.shortFoot, TASKS.plantar, TASKS.footRoll].map((task, k) => (
          <TaskRow key={task.exercise} lang={lang} task={task} anim style={vars({ '--k': k })} />
        ))}
      </span>
    </span>
  );
}

/* ---------------------------------------------------------- ActionDock -- */

/** The slab at the foot of the app: the brand gradient, a runner in amber, "Start session". */
export function DockButton({ lang }: { lang: Lang }) {
  return (
    <span className="ap-dock">
      <Icon icon={WorkoutRunIcon} size={20} strokeWidth={2.4} />
      <span>{WORDS[lang].startWorkout}</span>
    </span>
  );
}

/** The bottom of Home: a task row on the page, the dock under it. */
export function HeroToday({ lang }: { lang: Lang }) {
  return (
    <span className="ap ap-screen">
      <TaskRow lang={lang} task={TASKS.singleLeg} />
      <DockButton lang={lang} />
    </span>
  );
}

/* ------------------------------------------------------------ Progress -- */

/** The Progress screen's tests card: first test against the latest, one row per test. */
export function StrengthCard({ lang }: { lang: Lang }) {
  const w = WORDS[lang];
  const [from, to] = SAMPLE.calf;
  return (
    <span className="ap ap-card ap-strength">
      <span className="ap-card-title">{w.strengthTitle}</span>
      <span className="ap-strength-row">{fill(w.calfChange, { from, to })}</span>
      <span className="ap-strength-row ap-strength-more">{fill(w.archChange, { from: SAMPLE.arch.first, to: SAMPLE.arch.now })}</span>
      <span className="ap-caption">{w.strengthSince}</span>
    </span>
  );
}

/* ------------------------------------------------------------ Test day -- */

/**
 * The arch hold's card on the test results: the zone's icon and amber, the
 * figure with its unit, the change since last time (the one green the app
 * allows, for an improving delta), the bar towards the goal and what is left.
 */
export function ArchResult({ lang }: { lang: Lang }) {
  const w = WORDS[lang];
  const { last, now, goal } = SAMPLE.arch;
  return (
    <span className="ap ap-fit ap-card ap-result ap-tone-amber" style={vars({ '--ap-w': 300, '--ap-h': 212 })}>
      <span className="ap-result-head">
        <span className="ap-result-tile">
          <Icon icon={FootprintsIcon} size={20} strokeWidth={2} />
        </span>
        <span className="ap-result-name">{w.archName}</span>
      </span>
      <span className="ap-result-figure">
        <span className="ap-result-value">{now}</span>
        <span className="ap-result-unit">{plural(lang, now, w.unitSeconds)}</span>
      </span>
      <span className="ap-result-change">{plural(lang, now - last, w.moreSeconds)}</span>
      <span className="ap-result-track">
        <span className="ap-result-fill" style={vars({ '--frac': (now / goal).toFixed(3) })} />
      </span>
      <span className="ap-result-goal">
        <span>{fill(w.goalSeconds, { n: goal })}</span>
        <span>{plural(lang, goal - now, w.toGoSeconds)}</span>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------ The plan -- */

/** `MINUTE_CHOICES` in today-card.tsx. */
const MINUTE_CHOICES = [3, 5, 10] as const;

/**
 * Today's card on the plan screen, as a strength day reads it: tinted by its
 * kind with an edge in the same colour, the title, the three session lengths
 * as chips (the chosen one filled; here the choice moves along them) and the
 * button that starts it.
 */
export function TodayMinutes({ lang, chosen = 5 }: { lang: Lang; chosen?: number }) {
  const w = WORDS[lang];
  const at = Math.max(0, (MINUTE_CHOICES as readonly number[]).indexOf(chosen));
  return (
    <span className="ap ap-fit ap-today ap-tone-violet" style={vars({ '--ap-w': 300, '--ap-h': 218 })}>
      <span className="ap-today-eyebrow">{w.todayEyebrow}</span>
      <span className="ap-today-title">{fill(TODAY_TITLE, { kind: w.kindStrength, goal: w.shortArch })}</span>
      <span className="ap-today-chips">
        {MINUTE_CHOICES.map((m, i) => (
          <span
            key={m}
            className="ap-chip ap-plan-chip"
            data-selected={i === at ? '' : undefined}
            // The chosen one leads the loop and each chip has a third of it:
            // the chip whose turn is k starts (3 - k) thirds into its cycle.
            style={vars({ '--lag': (MINUTE_CHOICES.length - ((i - at + MINUTE_CHOICES.length) % MINUTE_CHOICES.length)) % MINUTE_CHOICES.length })}
          >
            <Icon icon={Clock01Icon} size={14} strokeWidth={2.2} />
            {plural(lang, m, w.sessionMinutes)}
          </span>
        ))}
      </span>
      <span className="ap-primary">{w.start}</span>
    </span>
  );
}

/* --------------------------------------------------- the story's chips -- */

/**
 * The four pieces that drop into the gaps of "It's not your fault": a
 * check-in card shrunk to its mascot, the "It hurts today" card, a minute chip
 * off Today's list, and the "No pain today" card. Their surfaces are drawn by
 * `.fchip-*` in globals.css, which sizes them to the paragraph.
 */
export function storyChips(lang: Lang): ReactNode[] {
  const w = WORDS[lang];
  return [
    <img key="pain" src="/hero/mascot-pain.webp" alt="" width={240} height={240} loading="lazy" decoding="async" />,
    <span key="hurts">{w.itHurts}</span>,
    <span key="chip">
      <Icon icon={Clock01Icon} size={14} strokeWidth={2.2} />
      {fill(w.chipMinutes, { count: TASKS.shortFoot.minutes })}
    </span>,
    <span key="nopain">
      <img src="/hero/mascot-nopain.webp" alt="" width={240} height={240} loading="lazy" decoding="async" />
      {w.noPain}
    </span>,
  ];
}
