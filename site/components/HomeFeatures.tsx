import { BandaidsIcon } from '@phosphor-icons/react/dist/ssr/Bandaids';
import { CalendarDotsIcon } from '@phosphor-icons/react/dist/ssr/CalendarDots';
import { ChartLineUpIcon } from '@phosphor-icons/react/dist/ssr/ChartLineUp';
import { BarbellIcon } from '@phosphor-icons/react/dist/ssr/Barbell';
import { CheckCircleIcon } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { FireIcon } from '@phosphor-icons/react/dist/ssr/Fire';
import { LockSimpleIcon } from '@phosphor-icons/react/dist/ssr/LockSimple';
import { MapPinIcon } from '@phosphor-icons/react/dist/ssr/MapPin';
import { PlayIcon } from '@phosphor-icons/react/dist/ssr/Play';
import { ScalesIcon } from '@phosphor-icons/react/dist/ssr/Scales';
import { WavesIcon } from '@phosphor-icons/react/dist/ssr/Waves';

import { FeatureScroller } from '@/components/FeatureScroller';
import { ProgressVisual } from '@/components/home/ProgressVisual';
import { InView } from '@/components/InView';
import { Kicker } from '@/components/Kicker';
import type { Lang } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

import './home/feature-extras.css';

const { testEveryDays } = PROGRAM;

type Feature = { tag: string; title: string; text: string };

type FeaturesCopy = {
  kicker: string;
  h2: string;
  lead: string;
  /** In the order the visuals go: check-in, session, week, progress. */
  features: [Feature, Feature, Feature, Feature];
  /** The three screenshots' alt text, then the label of the drawn progress
   * visual, which is read as one image rather than as its loose words. */
  visualAlt: [string, string, string, string];
  /** Words on the small app pieces that rise beside the phone. The app's own
   * where it has them (`widgets.lockScreenHint`, `pages.program.kind*`). */
  extras: {
    zones: string;
    zoneChips: [string, string];
    today: string;
    lighter: string;
    saved: string;
    hold: string;
    upNext: string;
    nextMove: string;
    lock: string;
    streak: string;
    kinds: [string, string, string];
    min: string;
  };
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
      'Walkito’s progress: test results, first against latest, and the streak sheet with this week’s days',
    ],
    extras: {
      zones: 'Where it hurts',
      zoneChips: ['Heel', 'Arch'],
      today: 'Today’s session',
      lighter: '3 min, lighter',
      saved: 'Check-in saved',
      hold: 'Hold',
      upNext: 'Up next',
      nextMove: 'Calf raises · 3 × 12',
      lock: 'Lock your phone - the timer keeps going',
      streak: '3 days',
      kinds: ['Mobility', 'Strength', 'Balance'],
      min: 'min',
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
        text: `Короткий тест раз в ${testEveryDays} дней показывает, что сдвинулось. Отметки, занятия, комплексы из библиотеки и дни отдыха по плану засчитываются в серию.`,
      },
    ],
    visualAlt: [
      'Утренняя отметка в Walkito: оценка боли от 0 до 10 и карта ноги',
      'Занятие в Walkito: видео упражнения, таймер и название',
      'Неделя в Walkito: дни на подвижность, силу и баланс по порядку',
      'Прогресс в Walkito: первый и последний результаты тестов и окно серии с днями этой недели',
    ],
    extras: {
      zones: 'Где болит',
      zoneChips: ['Пятка', 'Свод'],
      today: 'Занятие сегодня',
      lighter: '3 мин, полегче',
      saved: 'Отметка сохранена',
      hold: 'Держите',
      upNext: 'Дальше',
      nextMove: 'Подъёмы на носки · 3 × 12',
      lock: 'Заблокируйте телефон - таймер продолжит идти',
      streak: '3 дня',
      kinds: ['Подвижность', 'Сила', 'Баланс'],
      min: 'мин',
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
      'El progreso en Walkito: la primera prueba frente a la última y la ventana de la racha con los días de esta semana',
    ],
    extras: {
      zones: 'Dónde duele',
      zoneChips: ['Talón', 'Arco'],
      today: 'Sesión de hoy',
      lighter: '3 min, más suave',
      saved: 'Registro guardado',
      hold: 'Mantén',
      upNext: 'Siguiente',
      nextMove: 'Elevación de talones · 3 × 12',
      lock: 'Bloquea el teléfono: el temporizador sigue',
      streak: '3 días',
      kinds: ['Movilidad', 'Fuerza', 'Equilibrio'],
      min: 'min',
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

/**
 * Section 03: one dark band under the white sheet. It holds the page still and
 * walks through four features: three of them with a screenshot of the phone,
 * the last with the app's Progress pieces and its streak sheet drawn live, so
 * the sheet can rise and the week's flames can land the way they do in the app.
 */
export function HomeFeatures({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const x = copy.extras;
  const glyph = { weight: 'fill', 'aria-hidden': true, focusable: false } as const;

  /**
   * Small pieces of the app either side of the phone, each feature its own:
   * where it hurts and what that did to today; the hold timer, the next move
   * and the lock-screen hint; the streak chip and the three kinds of day.
   * They rise in after the screenshot settles (`--x` orders them).
   */
  const extras = [
    <>
      <span className="fx fx-l fx-zones" style={{ '--x': 0 } as React.CSSProperties}>
        <span className="fx-label">{x.zones}</span>
        <span className="fx-chips">
          {x.zoneChips.map((chip) => (
            <span key={chip} className="fx-chip">
              <MapPinIcon {...glyph} />
              {chip}
            </span>
          ))}
        </span>
      </span>
      <span className="fx fx-r fx-today" style={{ '--x': 1 } as React.CSSProperties}>
        <span className="fx-icon fx-violet">
          <ClockIcon {...glyph} />
        </span>
        <span>
          <span className="fx-label">{x.today}</span>
          <span className="fx-value">{x.lighter}</span>
        </span>
      </span>
      <span className="fx fx-r2 fx-pill" style={{ '--x': 2 } as React.CSSProperties}>
        <CheckCircleIcon {...glyph} className="fx-green" />
        {x.saved}
      </span>
    </>,
    <>
      <span className="fx fx-l fx-timer" style={{ '--x': 0 } as React.CSSProperties}>
        <svg viewBox="0 0 60 60" aria-hidden>
          <circle className="fx-ring-track" cx="30" cy="30" r="25" />
          <circle className="fx-ring-fill" cx="30" cy="30" r="25" pathLength={100} />
        </svg>
        <span className="fx-timer-num">0:30</span>
        <span className="fx-label">{x.hold}</span>
      </span>
      <span className="fx fx-r fx-next" style={{ '--x': 1 } as React.CSSProperties}>
        <span className="fx-icon fx-violet">
          <BarbellIcon {...glyph} />
        </span>
        <span>
          <span className="fx-label">{x.upNext}</span>
          <span className="fx-value">{x.nextMove}</span>
        </span>
      </span>
      <span className="fx fx-r2 fx-pill" style={{ '--x': 2 } as React.CSSProperties}>
        <LockSimpleIcon {...glyph} />
        {x.lock}
      </span>
    </>,
    <>
      <span className="fx fx-l fx-streak" style={{ '--x': 0 } as React.CSSProperties}>
        <FireIcon {...glyph} />
        {x.streak}
      </span>
      {[WavesIcon, BarbellIcon, ScalesIcon].map((KindIcon, k) => (
        <span
          key={k}
          className={`fx fx-day fx-day-${k}`}
          style={{ '--x': k + 1 } as React.CSSProperties}
        >
          <KindIcon {...glyph} />
          <span className="fx-value">{x.kinds[k]}</span>
          <span className="fx-min">
            <ClockIcon {...glyph} />
            {[5, 7, 5][k]} {x.min}
          </span>
        </span>
      ))}
    </>,
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
