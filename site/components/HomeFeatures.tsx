import { BandaidsIcon } from '@phosphor-icons/react/dist/ssr/Bandaids';
import { CalendarDotsIcon } from '@phosphor-icons/react/dist/ssr/CalendarDots';
import { ChartLineUpIcon } from '@phosphor-icons/react/dist/ssr/ChartLineUp';
import { ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { MoonIcon } from '@phosphor-icons/react/dist/ssr/Moon';
import { PersonSimpleWalkIcon } from '@phosphor-icons/react/dist/ssr/PersonSimpleWalk';
import { PlayIcon } from '@phosphor-icons/react/dist/ssr/Play';

import { FeatureScroller } from '@/components/FeatureScroller';
import { ProgressVisual } from '@/components/home/ProgressVisual';
import { InView } from '@/components/InView';
import { Kicker } from '@/components/Kicker';
import type { Lang } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

import './home/feature-extras.css';

const { testEveryDays } = PROGRAM;

type Feature = { tag: string; title: string; text: string };

/**
 * The app's own words on the small app pieces beside the phone, copied from
 * its catalogue (`src/shared/lib/i18n/catalogue/<lang>/*.ts`) with the sample
 * figures filled in. Keys beside each; change them there first, then here.
 */
type ExtrasCopy = {
  /** home.itHurts */
  itHurts: string;
  /** home.checkInAgain */
  checkInAgain: string;
  /** home.ackLoggedShorter */
  ackShorter: string;
  /** The relief session's header: session.day (12), session.minutes (3),
   * session.moveCount (2). */
  reliefMeta: [string, string, string];
  /** player.countIn.nextUp, player.countIn.go */
  nextUp: string;
  go: string;
  /** exercises.kneeToWall.title: a mobility hold, 30 seconds a set */
  move: string;
  /** widgets.sessionPositionLong (2 of 2) */
  position: string;
  /** pages.plan.upcoming, pages.plan.restDay */
  upcoming: string;
  rest: string;
  /** pages.plan.nextWeek, nextWeekSummary (3 sessions, arch), nextWeekHow */
  nextWeek: string;
  nextSummary: string;
  nextHow: string;
  /** pages.program.kindMobility / kindStrength / kindBalance */
  kinds: { mobility: string; strength: string; balance: string };
};

type FeaturesCopy = {
  kicker: string;
  h2: string;
  lead: string;
  /** In the order the visuals go: check-in, session, week, progress. */
  features: [Feature, Feature, Feature, Feature];
  /** The three screenshots' alt text, then the label of the drawn progress
   * visual, which is read as one image rather than as its loose words. */
  visualAlt: [string, string, string, string];
  extras: ExtrasCopy;
};

/**
 * Section 03 of the home page, per language. Describes what the app does and
 * promises no result. The progress feature says exactly what the streak counts,
 * in the words of the app's own rule (`streak.rule`), so the two never disagree;
 * reread it if that rule changes. Russian nouns agree with the numbers shown
 * (14 дней), so reread them if the schedule changes.
 */
const COPY: Record<Lang, FeaturesCopy> = {
  en: {
    kicker: 'How it works',
    h2: 'One plan. Every morning.',
    lead: 'A short check-in, a session that fits the day, a week that builds toward one goal, and a test that shows what’s moving.',
    features: [
      {
        tag: 'Morning check-in',
        title: 'Tell it how your feet feel.',
        text: 'One number and a tap on the leg map. A bad morning makes today’s session lighter.',
      },
      {
        tag: 'Guided session',
        title: 'Press play and follow along.',
        text: 'Each move has a clip, a timer and one cue. Lock the phone; the timer keeps going.',
      },
      {
        tag: 'Your week',
        title: 'A plan that builds week by week.',
        text: 'Mobility, strength and balance days, built around one goal you can measure.',
      },
      {
        tag: 'Progress',
        title: 'See what’s changing.',
        text: `A short test every ${testEveryDays} days shows what’s moving. Check-ins, sessions, Library routines and planned rest days all count toward your streak.`,
      },
    ],
    visualAlt: [
      'Walkito’s morning check-in: a pain score from 0 to 10 and the leg map',
      'A Walkito session: the exercise clip, a timer and the move’s name',
      'Walkito’s week: mobility, strength and balance days in order',
      'Walkito’s progress: morning pain as a line, each goal with its bar, test results first against latest, and the streak sheet with this week’s days',
    ],
    extras: {
      itHurts: 'It hurts today',
      checkInAgain: 'Check in again',
      ackShorter: 'Logged. Today’s session is shorter because of it.',
      reliefMeta: ['Day 12', '3 min', '2 moves'],
      nextUp: 'Next up',
      go: 'Go',
      move: 'Knee to wall',
      position: 'Exercise 2 of 2',
      upcoming: 'Coming up',
      rest: 'Rest',
      nextWeek: 'Next week',
      nextSummary: '3 sessions · focus: stronger arch',
      nextHow:
        'A new week is planned every Sunday evening from how this one went: your check-ins, your tests and how hard sessions felt.',
      kinds: { mobility: 'Mobility', strength: 'Strength', balance: 'Balance' },
    },
  },
  ru: {
    kicker: 'Как это работает',
    h2: 'Один план. Каждое утро.',
    lead: 'Короткая отметка, занятие под сегодняшний день, неделя, которая ведёт к одной цели, и тест, который показывает, что сдвинулось.',
    features: [
      {
        tag: 'Утренняя отметка',
        title: 'Расскажите, как чувствуют себя стопы.',
        text: 'Одна цифра и касание на карте ноги. После плохого утра сегодняшнее занятие становится легче.',
      },
      {
        tag: 'Занятие с подсказками',
        title: 'Нажмите «старт» и повторяйте.',
        text: 'У каждого упражнения есть видео, таймер и одна подсказка. Заблокируйте телефон, таймер продолжит идти.',
      },
      {
        tag: 'Ваша неделя',
        title: 'План, который растёт неделя за неделей.',
        text: 'Дни на подвижность, силу и баланс вокруг одной цели, которую можно измерить.',
      },
      {
        tag: 'Прогресс',
        title: 'Видно, что меняется.',
        text: `Короткий тест раз в ${testEveryDays} дней показывает, что сдвинулось. Отметки, занятия, комплексы из библиотеки и дни отдыха по плану засчитываются в серию.`,
      },
    ],
    visualAlt: [
      'Утренняя отметка в Walkito: оценка боли от 0 до 10 и карта ноги',
      'Занятие в Walkito: видео упражнения, таймер и название',
      'Неделя в Walkito: дни на подвижность, силу и баланс по порядку',
      'Прогресс в Walkito: утренняя боль линией, цели с полосками, первый и последний результаты тестов и окно серии с днями этой недели',
    ],
    extras: {
      itHurts: 'Сегодня болит',
      checkInAgain: 'Отметить ещё раз',
      ackShorter: 'Записали. Сегодняшняя сессия из-за этого короче.',
      reliefMeta: ['День 12', '3 мин', '2 упражнения'],
      nextUp: 'Далее',
      go: 'Старт',
      move: 'Колено к стене',
      position: 'Упражнение 2 из 2',
      upcoming: 'Дальше',
      rest: 'Отдых',
      nextWeek: 'Следующая неделя',
      nextSummary: '3 занятия · фокус: сильный свод',
      nextHow:
        'Каждое воскресенье вечером план на новую неделю собирается заново: по вашим отметкам боли, тестам и тому, насколько тяжело шли занятия.',
      kinds: { mobility: 'Подвижность', strength: 'Сила', balance: 'Баланс' },
    },
  },
  es: {
    kicker: 'Cómo funciona',
    h2: 'Un plan. Cada mañana.',
    lead: 'Un registro corto, una sesión a la medida del día, una semana que avanza hacia una meta y una prueba que muestra qué cambia.',
    features: [
      {
        tag: 'Registro de la mañana',
        title: 'Cuéntale cómo están tus pies.',
        text: 'Un número y un toque en el mapa de la pierna. Una mala mañana hace más suave la sesión de hoy.',
      },
      {
        tag: 'Sesión guiada',
        title: 'Dale play y sigue el ritmo.',
        text: 'Cada ejercicio tiene un video, un temporizador y una indicación. Bloquea el teléfono; el temporizador sigue.',
      },
      {
        tag: 'Tu semana',
        title: 'Un plan que crece semana a semana.',
        text: 'Días de movilidad, fuerza y equilibrio en torno a una meta que puedes medir.',
      },
      {
        tag: 'Progreso',
        title: 'Mira qué está cambiando.',
        text: `Una prueba corta cada ${testEveryDays} días muestra qué avanza. Los registros, las sesiones, las rutinas de la biblioteca y los descansos del plan cuentan para tu racha.`,
      },
    ],
    visualAlt: [
      'El registro de la mañana en Walkito: el dolor de 0 a 10 y el mapa de la pierna',
      'Una sesión de Walkito: el video del ejercicio, un temporizador y su nombre',
      'La semana en Walkito: días de movilidad, fuerza y equilibrio en orden',
      'El progreso en Walkito: el dolor por la mañana como una línea, cada objetivo con su barra, la primera prueba frente a la última y la ventana de la racha con los días de esta semana',
    ],
    extras: {
      itHurts: 'Hoy me duele',
      checkInAgain: 'Registrar otra vez',
      ackShorter: 'Registrado. Por eso la sesión de hoy es más corta.',
      reliefMeta: ['Día 12', '3 min', '2 ejercicios'],
      nextUp: 'A continuación',
      go: '¡Ya!',
      move: 'Rodilla a la pared',
      position: 'Ejercicio 2 de 2',
      upcoming: 'Lo siguiente',
      rest: 'Descanso',
      nextWeek: 'La próxima semana',
      nextSummary: '3 sesiones · enfoque: arco más fuerte',
      nextHow:
        'Cada domingo por la tarde se planifica la semana nueva según cómo fue esta: tus registros, tus pruebas y lo duras que se sintieron las sesiones.',
      kinds: { mobility: 'Movilidad', strength: 'Fuerza', balance: 'Equilibrio' },
    },
  },
  pt: {
    kicker: 'Como funciona',
    h2: 'Um plano. Toda manhã.',
    lead: 'Um check-in rápido, uma sessão do tamanho do dia, uma semana que avança rumo a uma meta e um teste que mostra o que está mudando.',
    features: [
      {
        tag: 'Check-in da manhã',
        title: 'Conte como seus pés estão.',
        text: 'Um número e um toque no mapa da perna. Numa manhã ruim, a sessão de hoje fica mais leve.',
      },
      {
        tag: 'Sessão guiada',
        title: 'Aperte o play e acompanhe.',
        text: 'Cada exercício tem um vídeo, um timer e uma orientação. Bloqueie o celular; o timer continua.',
      },
      {
        tag: 'Sua semana',
        title: 'Um plano que cresce semana a semana.',
        text: 'Dias de mobilidade, força e equilíbrio, montados em torno de uma meta que dá para medir.',
      },
      {
        tag: 'Progresso',
        title: 'Veja o que está mudando.',
        text: `Um teste curto a cada ${testEveryDays} dias mostra o que está avançando. Check-ins, sessões, rotinas da biblioteca e dias de descanso do plano contam para a sua sequência.`,
      },
    ],
    visualAlt: [
      'O check-in da manhã no Walkito: a dor de 0 a 10 e o mapa da perna',
      'Uma sessão do Walkito: o vídeo do exercício, um timer e o nome do exercício',
      'A semana no Walkito: dias de mobilidade, força e equilíbrio em ordem',
      'O progresso no Walkito: a dor de manhã como uma linha, cada objetivo com sua barra, o primeiro teste comparado com o mais recente e a janela da sequência com os dias desta semana',
    ],
    extras: {
      itHurts: 'Hoje está doendo',
      checkInAgain: 'Fazer check-in de novo',
      ackShorter: 'Registrado. Por isso a sessão de hoje está mais curta.',
      reliefMeta: ['Dia 12', '3 min', '2 exercícios'],
      nextUp: 'A seguir',
      go: 'Já!',
      move: 'Joelho na parede',
      position: 'Exercício 2 de 2',
      upcoming: 'Em seguida',
      rest: 'Descanso',
      nextWeek: 'Próxima semana',
      nextSummary: '3 sessões · foco: arco mais forte',
      nextHow:
        'Toda noite de domingo uma semana nova é planejada a partir de como foi esta: seus registros, seus testes e o quanto as sessões pareceram pesadas.',
      kinds: { mobility: 'Mobilidade', strength: 'Força', balance: 'Equilíbrio' },
    },
  },
  fr: {
    kicker: 'Comment ça marche',
    h2: 'Un plan. Chaque matin.',
    lead: 'Un bilan rapide, une séance adaptée à la journée, une semaine qui avance vers un objectif et un test qui montre ce qui bouge.',
    features: [
      {
        tag: 'Bilan du matin',
        title: 'Dites-lui comment vont vos pieds.',
        text: 'Un chiffre et un geste sur la carte de la jambe. Après un mauvais matin, la séance du jour devient plus légère.',
      },
      {
        tag: 'Séance guidée',
        title: 'Lancez la lecture et suivez.',
        text: 'Chaque exercice a sa vidéo, un minuteur et une consigne. Verrouillez le téléphone, le minuteur continue.',
      },
      {
        tag: 'Votre semaine',
        title: 'Un plan qui avance semaine après semaine.',
        text: 'Des jours de mobilité, de force et d’équilibre, construits autour d’un objectif que vous pouvez mesurer.',
      },
      {
        tag: 'Progrès',
        title: 'Voyez ce qui change.',
        text: `Un court test tous les ${testEveryDays} jours montre ce qui progresse. Les bilans, les séances, les routines de la bibliothèque et les jours de repos prévus comptent tous pour votre série.`,
      },
    ],
    visualAlt: [
      'Le bilan du matin dans Walkito : une note de douleur de 0 à 10 et la carte de la jambe',
      'Une séance Walkito : la vidéo de l’exercice, un minuteur et son nom',
      'La semaine dans Walkito : des jours de mobilité, de force et d’équilibre, dans l’ordre',
      'Les progrès dans Walkito : la douleur du matin en courbe, chaque objectif avec sa barre, le premier test face au plus récent et la fenêtre de la série avec les jours de cette semaine',
    ],
    extras: {
      itHurts: 'J’ai mal aujourd’hui',
      checkInAgain: 'Refaire le bilan',
      ackShorter: 'Noté. La séance du jour est plus courte en conséquence.',
      reliefMeta: ['Jour 12', '3 min', '2 exercices'],
      nextUp: 'Ensuite',
      go: 'C’est parti',
      move: 'Genou au mur',
      position: 'Exercice 2 sur 2',
      upcoming: 'À venir',
      rest: 'Repos',
      nextWeek: 'La semaine prochaine',
      nextSummary: '3 séances · objectif : une voûte plus forte',
      nextHow:
        'Chaque dimanche soir, une nouvelle semaine est planifiée d’après celle-ci : tes bilans, tes tests et la difficulté ressentie des séances.',
      kinds: { mobility: 'Mobilité', strength: 'Force', balance: 'Équilibre' },
    },
  },
  it: {
    kicker: 'Come funziona',
    h2: 'Un piano. Ogni mattina.',
    lead: 'Un check-in veloce, una sessione su misura per la giornata, una settimana che avanza verso un obiettivo e un test che mostra cosa sta cambiando.',
    features: [
      {
        tag: 'Check-in del mattino',
        title: 'Digli come stanno i tuoi piedi.',
        text: 'Un numero e un tocco sulla mappa della gamba. Dopo una brutta mattina, la sessione di oggi diventa più leggera.',
      },
      {
        tag: 'Sessione guidata',
        title: 'Premi play e segui.',
        text: 'Ogni esercizio ha un video, un timer e un’indicazione. Blocca il telefono, il timer continua.',
      },
      {
        tag: 'La tua settimana',
        title: 'Un piano che cresce settimana dopo settimana.',
        text: 'Giorni di mobilità, forza ed equilibrio, costruiti attorno a un obiettivo che puoi misurare.',
      },
      {
        tag: 'Progressi',
        title: 'Guarda cosa sta cambiando.',
        text: `Un breve test ogni ${testEveryDays} giorni mostra cosa si sta muovendo. Check-in, sessioni, routine della libreria e giorni di riposo previsti contano tutti per la tua serie.`,
      },
    ],
    visualAlt: [
      'Il check-in del mattino in Walkito: il dolore da 0 a 10 e la mappa della gamba',
      'Una sessione di Walkito: il video dell’esercizio, un timer e il suo nome',
      'La settimana in Walkito: giorni di mobilità, forza ed equilibrio in ordine',
      'I progressi in Walkito: il dolore al mattino come una linea, ogni obiettivo con la sua barra, il primo test confrontato con l’ultimo e la finestra della serie con i giorni di questa settimana',
    ],
    extras: {
      itHurts: 'Oggi fa male',
      checkInAgain: 'Registra di nuovo',
      ackShorter: 'Registrato. Per questo la sessione di oggi è più breve.',
      reliefMeta: ['Giorno 12', '3 min', '2 esercizi'],
      nextUp: 'Il prossimo',
      go: 'Via!',
      move: 'Ginocchio al muro',
      position: 'Esercizio 2 di 2',
      upcoming: 'In arrivo',
      rest: 'Riposo',
      nextWeek: 'La prossima settimana',
      nextSummary: '3 sessioni · obiettivo: arco più forte',
      nextHow:
        'Ogni domenica sera una nuova settimana viene pianificata in base a com’è andata questa: i tuoi check-in, i tuoi test e quanto ti sono sembrate dure le sessioni.',
      kinds: { mobility: 'Mobilità', strength: 'Forza', balance: 'Equilibrio' },
    },
  },
  de: {
    kicker: 'So funktioniert’s',
    h2: 'Ein Plan. Jeden Morgen.',
    lead: 'Ein kurzer Check-in, eine Einheit, die zum Tag passt, eine Woche, die auf ein Ziel hinarbeitet, und ein Test, der zeigt, was sich bewegt.',
    features: [
      {
        tag: 'Check-in am Morgen',
        title: 'Sag ihm, wie sich deine Füße anfühlen.',
        text: 'Eine Zahl und ein Tippen auf die Beinkarte. Nach einem schlechten Morgen wird die heutige Einheit leichter.',
      },
      {
        tag: 'Geführte Einheit',
        title: 'Drück auf Play und mach mit.',
        text: 'Jede Übung hat ein Video, einen Timer und einen Hinweis. Sperr das Handy, der Timer läuft weiter.',
      },
      {
        tag: 'Deine Woche',
        title: 'Ein Plan, der Woche für Woche wächst.',
        text: 'Tage für Beweglichkeit, Kraft und Balance, rund um ein Ziel aufgebaut, das du messen kannst.',
      },
      {
        tag: 'Fortschritt',
        title: 'Sieh, was sich verändert.',
        text: `Ein kurzer Test alle ${testEveryDays} Tage zeigt, was sich bewegt. Check-ins, Einheiten, Routinen aus der Bibliothek und geplante Ruhetage zählen alle für deine Serie.`,
      },
    ],
    visualAlt: [
      'Der Morgen-Check-in in Walkito: ein Schmerzwert von 0 bis 10 und die Beinkarte',
      'Eine Einheit in Walkito: das Übungsvideo, ein Timer und der Name der Übung',
      'Die Woche in Walkito: Tage für Beweglichkeit, Kraft und Balance der Reihe nach',
      'Der Fortschritt in Walkito: der Morgenschmerz als Linie, jedes Ziel mit seinem Balken, der erste Test im Vergleich zum letzten und das Serienfenster mit den Tagen dieser Woche',
    ],
    extras: {
      itHurts: 'Heute tut es weh',
      checkInAgain: 'Noch mal einchecken',
      ackShorter: 'Eingetragen. Deshalb ist die Einheit heute kürzer.',
      reliefMeta: ['Tag 12', '3 Min.', '2 Übungen'],
      nextUp: 'Als Nächstes',
      go: 'Los',
      move: 'Knie zur Wand',
      position: 'Übung 2 von 2',
      upcoming: 'Als Nächstes',
      rest: 'Ruhe',
      nextWeek: 'Nächste Woche',
      // The app lowercases the goal here with `toLocaleLowerCase`, which in
      // German also lowercases the noun; the noun keeps its capital here.
      nextSummary: '3 Einheiten · Fokus: kräftigeres Gewölbe',
      nextHow:
        'Jeden Sonntagabend wird eine neue Woche geplant, danach, wie diese lief: deine Check-ins, deine Tests und wie anstrengend sich die Einheiten angefühlt haben.',
      kinds: { mobility: 'Beweglichkeit', strength: 'Kraft', balance: 'Balance' },
    },
  },
};

const SHOTS = ['/features/checkin.webp', '/features/session.webp', '/features/week.webp'];

/** The app's own glyph for each idea, Phosphor filled as the app draws them:
 * the plaster of the pain check-in, play, the plan's calendar, the chart of
 * the Progress tab. Rendered here, on the server, and handed to the scroller
 * as finished elements. */
const icon = { size: 22, weight: 'fill', 'aria-hidden': true, focusable: false } as const;
const ICONS = [
  <BandaidsIcon key="checkin" {...icon} />,
  <PlayIcon key="session" {...icon} />,
  <CalendarDotsIcon key="week" {...icon} />,
  <ChartLineUpIcon key="progress" {...icon} />,
];

const glyph = { weight: 'fill', 'aria-hidden': true, focusable: false } as const;

/** Each piece's place in the order the pieces rise (`--x`). */
const rise = (x: number) => ({ '--x': x }) as React.CSSProperties;

/**
 * Weekday names from the platform, as the app takes them (`Intl`, in the
 * app's language). Worked out once when the page is built. 4 January 1970 was
 * a Sunday, so day `i` is `i` days after it.
 */
function weekday(lang: Lang, i: number, style: 'short' | 'long'): string {
  return new Intl.DateTimeFormat(lang, { weekday: style, timeZone: 'UTC' }).format(
    new Date(Date.UTC(1970, 0, 4) + i * 86_400_000),
  );
}

/**
 * Feature 1, the check-in, around the screenshot of its sheet.
 *
 * Where it starts: Home's "It hurts today" card (`PainCard` in
 * `pages/home/ui/pain-check.tsx`), picked, so it has come level and wears its
 * ring. What it changes: the session that opens after a sore answer, three
 * minutes long (`SessionView`'s header row), and Home's block once the answer
 * is in, its button reading "Check in again" over the line the app says back
 * (`home.ackLoggedShorter`, only ever said at 7 and over).
 */
function CheckinExtras({ x }: { x: ExtrasCopy }) {
  return (
    <>
      <span className="fx fx-pain" style={rise(0)}>
        <img className="fx-pain-art" src="/hero/mascot-pain.webp" alt="" width={240} height={240} loading="lazy" decoding="async" />
        <span className="fx-pain-title">{x.itHurts}</span>
      </span>
      <span className="fx fx-meta" style={rise(1)}>
        <span>{x.reliefMeta[0]}</span>
        <span className="fx-dot" />
        <ClockIcon {...glyph} />
        <span>{x.reliefMeta[1]}</span>
        <span className="fx-dot" />
        <span>{x.reliefMeta[2]}</span>
      </span>
      <span className="fx fx-ack" style={rise(2)}>
        <span className="fx-primary">{x.checkInAgain}</span>
        <span className="fx-ack-text">{x.ackShorter}</span>
      </span>
    </>
  );
}

/**
 * Feature 2, the session, around the screenshot of the player.
 *
 * The next move's count-in (`CountInOverlay`): "Next up", its name, and the
 * three-two-one that lands each number with a beat. Then what the screenshot's
 * lock-screen hint promises (the hint itself is in the screenshot, so it is
 * not repeated beside it): the Live Activity (`session-activity.tsx`), its
 * clock still counting with the phone locked. On a phone the banner is too
 * wide for the room beside the screenshot, so the activity's compact form
 * from the Dynamic Island stands in for it.
 *
 * The Live Activity draws SF Symbols, which are Apple's and only on Apple's
 * devices; its walking figure is drawn here with Phosphor's nearest glyph.
 */
function SessionExtras({ x }: { x: ExtrasCopy }) {
  const numbers = ['3', '2', '1', x.go];
  return (
    <>
      <span className="fx fx-count" style={rise(0)}>
        <span className="fx-count-eyebrow">{x.nextUp}</span>
        <span className="fx-count-title">{x.move}</span>
        <span className="fx-count-box" style={{ '--go-len': x.go.length } as React.CSSProperties}>
          {numbers.map((n, k) => (
            <span key={k} className={k === 3 ? 'fx-count-n fx-count-go' : 'fx-count-n'} style={{ '--k': k } as React.CSSProperties}>
              {n}
            </span>
          ))}
        </span>
      </span>
      <span className="fx fx-activity" style={rise(1)}>
        <PersonSimpleWalkIcon {...glyph} />
        <span className="fx-activity-text">
          <span className="fx-activity-move">{x.move}</span>
          <span className="fx-activity-position">{x.position}</span>
        </span>
        <span className="fx-clock" />
      </span>
      <span className="fx fx-island" style={rise(1)}>
        <PersonSimpleWalkIcon {...glyph} />
        <span className="fx-clock" />
      </span>
    </>
  );
}

/**
 * Feature 3, the week, around the screenshot of the plan.
 *
 * A day under "Coming up" (`DayCard` on the plan screen): Sunday's planned
 * rest, tinted in the rest's amber, its weekday and the moon, with nothing to
 * count. Sunday, so it never contradicts the days the Guides section shows
 * coming up before it (Friday and Saturday).
 * And "Next week" (`NextWeekCard`): its sessions and focus, one `PlanChip` a
 * day in that day's accent, and the line on how the next week gets made.
 */
function WeekExtras({ x, lang }: { x: ExtrasCopy; lang: Lang }) {
  const days = [
    { day: 1, kind: 'mobility', tone: 'teal' },
    { day: 3, kind: 'strength', tone: 'violet' },
    { day: 5, kind: 'balance', tone: 'blue' },
  ] as const;
  return (
    <>
      <span className="fx fx-rest" style={rise(0)}>
        <span className="fx-section">{x.upcoming}</span>
        <span className="fx-daycard">
          <span className="fx-daycard-label">{weekday(lang, 0, 'long')}</span>
          <span className="fx-daycard-fact">
            <MoonIcon {...glyph} />
            {x.rest}
          </span>
        </span>
      </span>
      <span className="fx fx-next" style={rise(1)}>
        <span className="fx-section">{x.nextWeek}</span>
        <span className="fx-nextcard">
          <span className="fx-next-summary">{x.nextSummary}</span>
          <span className="fx-chips">
            {days.map((d) => (
              <span key={d.day} className={`fx-chip fx-tone-${d.tone}`}>
                {`${weekday(lang, d.day, 'short')} · ${x.kinds[d.kind]}`}
              </span>
            ))}
          </span>
          <span className="fx-next-how">{x.nextHow}</span>
        </span>
      </span>
    </>
  );
}

/**
 * Section 03: one dark band under the white sheet. It holds the page still and
 * walks through four features: three of them with a screenshot of the phone
 * and pieces of the app around it, the last with the app's Progress cards and
 * its streak sheet drawn live, so the line can draw itself, the bars fill and
 * the sheet rise the way they do in the app.
 */
export function HomeFeatures({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const x = copy.extras;
  const extras = [
    <CheckinExtras key="checkin" x={x} />,
    <SessionExtras key="session" x={x} />,
    <WeekExtras key="week" x={x} lang={lang} />,
  ];

  return (
    <div className="feat-dark">
      <div className="feat-glow" aria-hidden />

      <InView className="feat-head">
        <Kicker num="03" label={copy.kicker} />
        <h2>{copy.h2}</h2>
        <p>{copy.lead}</p>
      </InView>

      <FeatureScroller
        items={copy.features.map((f, k) => ({ ...f, icon: ICONS[k] }))}
        visuals={[
          ...SHOTS.map((src, k) => ({ src, alt: copy.visualAlt[k], extras: extras[k] })),
          { node: <ProgressVisual lang={lang} />, label: copy.visualAlt[3] },
        ]}
      />
    </div>
  );
}
