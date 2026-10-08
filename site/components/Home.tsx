import { Fragment } from 'react';

import { AppleGlyph } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { GetAppButton } from '@/components/GetApp';
import { HomeFeatures } from '@/components/HomeFeatures';
import { Cta } from '@/components/home/Cta';
import { Faq } from '@/components/home/Faq';
import { Guides } from '@/components/home/Guides';
import { Reviews } from '@/components/home/Reviews';
import { InView } from '@/components/InView';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollState } from '@/components/ScrollState';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { CalendarDotsIcon } from '@phosphor-icons/react/dist/ssr/CalendarDots';
import { ChartLineUpIcon } from '@phosphor-icons/react/dist/ssr/ChartLineUp';
import { CheckIcon } from '@phosphor-icons/react/dist/ssr/Check';
import { ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { FireIcon } from '@phosphor-icons/react/dist/ssr/Fire';
import { FootprintsIcon } from '@phosphor-icons/react/dist/ssr/Footprints';
import { PlayIcon } from '@phosphor-icons/react/dist/ssr/Play';
import { SneakerIcon } from '@phosphor-icons/react/dist/ssr/Sneaker';
import { SunHorizonIcon } from '@phosphor-icons/react/dist/ssr/SunHorizon';
import { TimerIcon } from '@phosphor-icons/react/dist/ssr/Timer';

import { Prose } from '@/components/Prose';
import { CHROME, TRANSLATED, type Lang } from '@/lib/i18n';
import { APP_STORE_NAME, APP_STORE_URL, PAIN_GOAL_MAX, PROGRAM, playHref, SITE_NAME, SITE_URL, storeHref } from '@/lib/site';

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const [DAYS_A, DAYS_B, DAYS_C] = PROGRAM.daysPerWeek;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;
const { testEveryDays, testEveryDaysAfterGoal, painFreeDays, retestTests, retestMinutes } = PROGRAM;

/**
 * The app itself, as schema.
 *
 * No `offers` and no `aggregateRating`, both deliberately. The price in the
 * brief was a number nobody checked against the store, and a rating block with
 * no ratings behind it is a manual-action risk rather than a shortcut. These go
 * in when there is a listing and real reviews to point at.
 *
 * No length either. The plan has none: it is built a week at a time and keeps
 * going while the person uses it.
 */
const APP = {
  '@context': 'https://schema.org',
  '@type': ['SoftwareApplication', 'MobileApplication'],
  name: APP_STORE_NAME,
  alternateName: [SITE_NAME, 'Walkito app'],
  disambiguatingDescription:
    'An iPhone exercise app for heel pain, plantar fasciitis and flat feet. Not the Walkito dog-walking service.',
  url: SITE_URL,
  ...(APP_STORE_URL ? { installUrl: APP_STORE_URL, sameAs: [APP_STORE_URL] } : {}),
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS',
  // Free to download; the plan itself is a subscription inside the app.
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
  availableLanguage: ['en', 'ru', 'es'],
  featureList: [
    `Sessions of ${MIN_A}, ${MIN_B} or ${MIN_C} minutes, on ${DAYS_A}, ${DAYS_B} or ${DAYS_C} days a week`,
    'Each week built around one measurable focus goal; a goal reached moves to maintaining and the next takes its place',
    'Each day adapts to morning pain, yesterday’s steps and last night’s sleep',
    `Physical tests every ${testEveryDays} days, then every ${testEveryDaysAfterGoal} once the first goal is reached`,
  ],
};

type Card = { title: string; text: string; goal: string | null };

/**
 * Every string on the home page, per language.
 *
 * Russian and Spanish are the reviewed translations of the English, inserted
 * as written (Part 1 of the translation file). The numbers come from `PROGRAM`
 * as in English, and the Russian nouns agree with today's values, so reread a
 * sentence if its number changes. Non-breaking spaces are put in by
 * `scripts/typeset.mjs`, not by hand.
 */
type HomeCopy = {
  meta: { title: string; description: string };
  h1a: string;
  h1b: string;
  lead: string;
  small: string;
  /**
   * The glass cards around the hero phone, each one a piece of the app's own
   * UI. Worded as the app words them (`home.noPain`, `dock.startWorkout`,
   * `progress.calfChange`), so the page and the product say the same thing.
   */
  cards: { noPain: string; today: string; start: string; calf: string; streak: string };
  alt: {
    heroLeft: string;
    heroCenter: string;
    heroRight: string;
    checkin: string;
    where: string;
    goal: string;
    week: string;
    exercise: string;
    quick: string;
    tests: string;
  };
  storyH2: string;
  storyP: string;
  /**
   * Where the story's four chips sit: each is placed after the first word
   * (from the previous chip on) that ends with this text. Decoration only; the
   * paragraph is read as written.
   */
  storyChipsAfter: [string, string, string, string];
  /** The words the story turns on, drawn in the brand blue once revealed. */
  storyAccent: string;
  whoH2: string;
  /** The tilted chip above the heading, and the line under it. */
  whoKicker: string;
  whoLead: string;
  /** Words inside the cards' pictures, worded as the app words them. */
  whoVisual: {
    hurts: string;
    noPain: string;
    arch: string;
    sec: string;
    tasks: string;
    calf: string;
    shortFoot: string;
    hold: string;
    min: string;
  };
  who: { heel: Card; flat: Card; allday: Card; run: Card };
  /** The link on a card whose page is in this language, and on one that is English only. */
  whoMore: string;
  whoMoreEn: string;
  adjustH2: string;
  adjustP: string;
  answersH2: string;
  answersP: string;
  how: { title: string; text: string; link: string }[];
  insideH2: string;
  inside: { week: string; video: string; quick: string; tests: string };
  faqH2: string;
  faq: { q: string; a: string }[];
  finalH2: string;
};

const COPY: Record<Lang, HomeCopy> = {
  en: {
    meta: {
      title: 'Walkito: Heel Pain & Flat Feet Exercise App',
      description:
        'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
    },
    h1a: 'Tried everything?',
    h1b: 'Try a plan built for your feet.',
    lead: 'Walkito is a personal exercise plan for heel, foot and leg pain that adjusts to how your feet feel each day.',
    small: `${MIN_A}, ${MIN_B} or ${MIN_C} minutes a day, at home.`,
    cards: {
      noPain: 'No pain today',
      today: `Today, ${MIN_B} min`,
      start: 'Start session',
      calf: 'Calf raises',
      streak: '35 days in a row',
    },
    alt: {
      heroLeft: "Walkito after a bad morning is logged: today's session gets lighter",
      heroCenter: "Walkito's Today screen: a greeting, the morning check-in and today's session",
      heroRight: 'Walkito playing an exercise video with its cue',
      checkin: 'Walkito: after a sore morning, today is three minutes of seated exercises',
      where: 'Walkito: where does it usually hurt, with the heel and arch marked on a leg',
      goal: 'Walkito: choosing a goal, with stay on my feet all day selected',
      week: 'Walkito: this week’s plan, Monday to Sunday with rest days, and next week',
      exercise: 'Walkito: a plantar stretch playing as a video with a timer',
      quick: 'Walkito: quick routines for when it hurts, before and after a run, at work, and before your first step',
      tests: 'Walkito: test results, arch hold up 11 seconds and calf raises up 4, with the left leg at 19 and the right at 22',
    },
    storyH2: 'It’s not your fault.',
    storyP:
      'Insoles, new shoes, fifty videos that all disagree. None of them train the foot. What’s missing is one clear plan, for good days and bad ones.',
    storyChipsAfter: ['disagree.', 'foot.', 'plan,', 'ones.'],
    storyAccent: 'one clear plan,',
    whoH2: 'Is this for me?',
    whoKicker: 'For you',
    whoLead: 'Pick the one that sounds like you. The plan starts there and changes with how your feet feel each day.',
    whoVisual: {
      hurts: 'It hurts today',
      noPain: 'No pain today',
      arch: 'Stronger arch',
      sec: 's',
      tasks: 'Today’s Tasks',
      calf: 'Calf raises',
      shortFoot: 'Short foot',
      hold: 'Single-leg hold',
      min: 'min',
    },
    who: {
      heel: {
        title: 'Heel pain and plantar fasciitis',
        text: 'Sharp first steps in the morning, pain after sitting or a long walk.',
        goal: 'Goal: pain-free mornings',
      },
      flat: {
        title: 'Flat feet',
        text: 'Tired, aching arches and feet that roll in.',
        goal: `Goal: ${archHoldSeconds}-second arch hold`,
      },
      allday: {
        title: 'On your feet all day',
        text: 'Nurses, retail, warehouse, hospitality. Feet that hurt by the end of the shift.',
        goal: null,
      },
      run: {
        title: 'Runners and athletes',
        text: 'Heel, Achilles or shin pain that keeps coming back when you train.',
        goal: `Goal: ${calfRaises} single-leg calf raises`,
      },
    },
    whoMore: 'Read the guide',
    whoMoreEn: 'Read the guide',
    adjustH2: 'It adjusts to your morning.',
    adjustP:
      'Every morning you log how your feet feel in one tap. On a bad morning, today’s session gets shorter and easier. After a long day on your feet, the loaded work comes out. It never speeds up on a good day.',
    answersH2: 'A plan built from your answers.',
    answersP:
      'Tell Walkito where it hurts, which side, what you do and what you want to get back to. It builds your plan from that, one week at a time, not one routine for everyone.',
    how: [
      {
        title: 'A week at a time, around one goal',
        text: `Each week centers on a goal you can measure: morning heel pain at ${PAIN_GOAL_MAX}/10 or less for ${painFreeDays} days running, a ${archHoldSeconds}-second arch hold, ${calfRaises} single-leg calf raises, ${balanceSeconds} seconds of single-leg balance, or left and right within ${gapPercent}% of each other. Reach one and it moves to maintaining while the next takes its place.`,
        link: 'How the plan works',
      },
      {
        title: `A test every ${testEveryDays} days, then every ${testEveryDaysAfterGoal}`,
        text: `${retestTests} physical tests in about ${retestMinutes} minutes: calf raises to failure, an arch hold, single-leg balance on both sides. Every ${testEveryDays} days until your first goal is reached, then every ${testEveryDaysAfterGoal}. Progress is measured, not guessed from how the week felt.`,
        link: 'What the tests measure',
      },
      {
        title: 'Chosen from published research',
        text: 'Exercises chosen from published research and guidelines. Walkito itself hasn’t been tested in a trial.',
        link: 'Read the evidence',
      },
    ],
    insideH2: 'Inside the app',
    inside: {
      week: 'Your week, rest days included',
      video: 'A video for every exercise',
      quick: 'Quick routines for any moment',
      tests: 'Your retests, left vs right',
    },
    faqH2: 'Questions',
    faq: [
      {
        q: 'How long until I feel a difference?',
        a: `It depends on the person and the pain. The plan is built one week at a time around a goal you can measure, and a test every ${testEveryDays} days shows you what’s actually changing.`,
      },
      {
        q: 'Do I need equipment?',
        // Follows the app: `EQUIPMENT` in catalogue-meta.ts lists a step, band,
        // towel, pillow and ball, onboarding asks which you have, and exercises
        // that need something missing are left out of the plan.
        a: 'No. Some exercises use a towel, a step or stairs, a resistance band, a pillow or a massage ball, and Walkito asks what you have. Anything that needs something you don’t have is left out of your plan.',
      },
      {
        q: 'Is it for flat feet?',
        a: 'Yes, for flexible flat feet. If one arch flattened suddenly as an adult, see a clinician first.',
      },
      {
        q: 'Is it medical advice?',
        a: 'No. Walkito is an exercise program. It doesn’t diagnose, and it isn’t a substitute for a clinician.',
      },
      { q: 'What languages is it in?', a: 'English, Russian and Spanish.' },
    ],
    finalH2: 'Your feet, your plan.',
  },

  ru: {
    meta: {
      title: 'Walkito: упражнения при боли в пятке и стопе',
      description:
        'Персональный план упражнений при боли в пятке, стопе и голени. Каждый день Walkito подстраивает его под состояние ваших стоп.',
    },
    h1a: 'Всё перепробовали?',
    h1b: 'Попробуйте план, созданный для ваших стоп.',
    lead: 'Walkito составляет персональный план упражнений при боли в пятке, стопе и голени и каждый день подстраивает его под состояние ваших стоп.',
    small: `${MIN_A}, ${MIN_B} или ${MIN_C} минут в день, дома.`,
    // «минут» agrees with MIN_B = 5; reread it if that changes.
    cards: {
      noPain: 'Сегодня не болит',
      today: `Сегодня ${MIN_B} минут`,
      start: 'Начать занятие',
      calf: 'Подъёмы на носок',
      streak: '35 дней подряд',
    },
    alt: {
      heroLeft: 'Walkito после отметки о плохом утре: сегодняшнее занятие становится легче',
      heroCenter: 'Главный экран Walkito: приветствие, утренняя отметка и сегодняшнее занятие',
      heroRight: 'Walkito показывает видео упражнения с подсказкой',
      checkin: 'Walkito: после болезненного утра сегодня три минуты упражнений сидя',
      where: 'Walkito: где обычно болит, на ноге отмечены пятка и свод',
      goal: 'Walkito: выбор цели, выбрано «Весь день на ногах без усталости»',
      week: 'Walkito: план на эту неделю, с понедельника по воскресенье с днями отдыха, и следующая неделя',
      exercise: 'Walkito: видео растяжки фасции с таймером',
      quick: 'Walkito: комплексы «Быстро»: «Болит прямо сейчас», «Перед пробежкой», «После пробежки», «На работе» и «Утро до первого шага»',
      tests: 'Walkito: результаты тестов, удержание свода выросло на 11 секунд, подъёмы на носок на 4, левая нога 19, правая 22',
    },
    storyH2: 'Вы ни в чём не виноваты.',
    storyP:
      'Стельки, новая обувь, полсотни видео, где каждый говорит своё. Ничто из этого не тренирует саму стопу. Не хватает одного понятного плана, на хорошие дни и на плохие.',
    storyChipsAfter: ['своё.', 'стопу.', 'плана,', 'плохие.'],
    storyAccent: 'одного понятного плана,',
    whoH2: 'Это для меня?',
    whoKicker: 'Для вас',
    whoLead: 'Выберите то, что похоже на вас. План начинается отсюда и меняется вместе с тем, как чувствуют себя ваши стопы.',
    whoVisual: {
      hurts: 'Сегодня болит',
      noPain: 'Сегодня не болит',
      arch: 'Сильный свод',
      sec: 'с',
      tasks: 'Задачи на сегодня',
      calf: 'Подъёмы на носки',
      shortFoot: 'Короткая стопа',
      hold: 'Стойка на одной ноге',
      min: 'мин',
    },
    who: {
      heel: {
        title: 'Боль в пятке и плантарный фасциит',
        text: 'Резкая боль при первых шагах утром, боль после сидения или долгой ходьбы.',
        goal: 'Цель: лёгкие утра',
      },
      flat: {
        title: 'Плоскостопие',
        text: 'Усталые, ноющие своды и стопы, которые заваливаются внутрь.',
        goal: `Цель: удержание свода ${archHoldSeconds} секунд`,
      },
      allday: {
        title: 'Весь день на ногах',
        text: 'Медсёстры, продавцы, склады, сфера обслуживания. К концу смены болят стопы.',
        goal: null,
      },
      run: {
        title: 'Бегуны и спортсмены',
        text: 'Боль в пятке, ахилле или голени, которая возвращается на тренировках.',
        goal: `Цель: ${calfRaises} подъёмов на носок на одной ноге`,
      },
    },
    whoMore: 'Читать гайд',
    whoMoreEn: 'Читать (на английском)',
    adjustH2: 'План подстраивается под ваше утро.',
    adjustP:
      'Каждое утро вы одним касанием отмечаете, как чувствуют себя стопы. Если утро плохое, сегодняшнее занятие становится короче и легче. После долгого дня на ногах упражнения с нагрузкой убираются. В хороший день план не ускоряется.',
    answersH2: 'План по вашим ответам.',
    answersP:
      'Расскажите Walkito, где болит, с какой стороны, чем вы занимаетесь и к чему хотите вернуться. По этим ответам он составляет ваш план, по одной неделе за раз, а не один комплекс для всех.',
    how: [
      {
        title: 'По неделе за раз, вокруг одной цели',
        text: `В центре каждой недели цель, которую можно измерить: утренняя боль в пятке не выше ${PAIN_GOAL_MAX} из 10 в течение ${painFreeDays} дней подряд, удержание свода ${archHoldSeconds} секунд, ${calfRaises} подъёмов на носок на одной ноге, ${balanceSeconds} секунд баланса на одной ноге или разница между левой и правой стороной не больше ${gapPercent} %. Когда цель достигнута, она переходит в поддержание, а её место занимает следующая.`,
        link: 'Как устроен план (на английском)',
      },
      {
        title: `Тест каждые ${testEveryDays} дней, затем каждые ${testEveryDaysAfterGoal}`,
        text: `${retestTests} физических теста примерно за ${retestMinutes} минуты: подъёмы на носок до отказа, удержание свода и баланс на одной ноге с обеих сторон. Каждые ${testEveryDays} дней, пока не достигнута первая цель, затем каждые ${testEveryDaysAfterGoal}. Прогресс измеряется, а не угадывается по ощущениям от недели.`,
        link: 'Что измеряют тесты (на английском)',
      },
      {
        title: 'Подобрано по опубликованным исследованиям',
        text: 'Упражнения подобраны по опубликованным исследованиям и клиническим рекомендациям. Сам Walkito в клинических испытаниях не проверялся.',
        link: 'Исследования (на английском)',
      },
    ],
    insideH2: 'Внутри приложения',
    inside: {
      week: 'Ваша неделя с днями отдыха',
      video: 'Видео к каждому упражнению',
      quick: 'Короткие комплексы на любой случай',
      tests: 'Ваши тесты: левая и правая сторона',
    },
    faqH2: 'Вопросы',
    faq: [
      {
        q: 'Когда я почувствую разницу?',
        a: `Это зависит от человека и от боли. План строится по одной неделе вокруг цели, которую можно измерить, а тест каждые ${testEveryDays} дней показывает, что на самом деле меняется.`,
      },
      {
        q: 'Нужен ли инвентарь?',
        a: 'Нет. Для некоторых упражнений нужны полотенце, ступенька или лестница, резиновая лента, подушка или массажный мяч, и Walkito спрашивает, что у вас есть. Упражнения, для которых чего-то не хватает, в ваш план не попадают.',
      },
      {
        q: 'Подходит ли при плоскостопии?',
        a: 'Да, при гибком плоскостопии. Если свод одной стопы резко опустился уже во взрослом возрасте, сначала обратитесь к врачу.',
      },
      {
        q: 'Это медицинская консультация?',
        a: 'Нет. Walkito даёт программу упражнений. Он не ставит диагноз и не заменяет врача.',
      },
      { q: 'На каких языках приложение?', a: 'На английском, русском и испанском.' },
    ],
    finalH2: 'Ваши стопы, ваш план.',
  },

  es: {
    meta: {
      title: 'Walkito: ejercicios para el dolor de talón y pie',
      description:
        'Walkito es un plan de ejercicios personalizado para el dolor de talón, pie y pierna que se ajusta cada día a cómo se sienten tus pies.',
    },
    h1a: '¿Ya probaste de todo?',
    h1b: 'Prueba un plan hecho para tus pies.',
    lead: 'Walkito es un plan de ejercicios personalizado para el dolor de talón, pie y pierna que se ajusta cada día a cómo se sienten tus pies.',
    small: `${MIN_A}, ${MIN_B} o ${MIN_C} minutos al día, en casa.`,
    cards: {
      noPain: 'Hoy no me duele',
      today: `Hoy, ${MIN_B} min`,
      start: 'Empezar sesión',
      calf: 'Elevaciones de talón',
      streak: 'Racha de 35 días',
    },
    alt: {
      heroLeft: 'Walkito después de registrar una mala mañana: la sesión de hoy es más suave',
      heroCenter: 'La pantalla de hoy en Walkito: un saludo, el registro de la mañana y la sesión de hoy',
      heroRight: 'Walkito reproduce el video de un ejercicio con su indicación',
      checkin: 'Walkito: tras una mañana con dolor, hoy son tres minutos de ejercicios sentado',
      where: 'Walkito: dónde te suele doler, con el talón y el arco marcados en una pierna',
      goal: 'Walkito: elegir una meta, con «Aguantar de pie todo el día» seleccionado',
      week: 'Walkito: el plan de esta semana, de lunes a domingo con días de descanso, y la semana siguiente',
      exercise: 'Walkito: un estiramiento plantar en video con temporizador',
      quick: 'Walkito: rutinas rápidas «Me duele ahora», «Antes de correr», «Después de correr», «En el trabajo» y «Antes del primer paso»',
      tests: 'Walkito: resultados de las pruebas, el arco aguanta 11 segundos más y las elevaciones de talón suben 4, con 19 en la pierna izquierda y 22 en la derecha',
    },
    storyH2: 'No es tu culpa.',
    storyP:
      'Plantillas, zapatos nuevos, cincuenta videos que se contradicen. Ninguno entrena el pie. Lo que falta es un plan claro, para los días buenos y los malos.',
    storyChipsAfter: ['contradicen.', 'pie.', 'claro,', 'malos.'],
    storyAccent: 'un plan claro,',
    whoH2: '¿Esto es para mí?',
    whoKicker: 'Para ti',
    whoLead: 'Elige lo que se parece a ti. El plan empieza ahí y cambia según cómo se sienten tus pies cada día.',
    whoVisual: {
      hurts: 'Hoy me duele',
      noPain: 'Hoy no me duele',
      arch: 'Arco más fuerte',
      sec: 's',
      tasks: 'Tareas de hoy',
      calf: 'Elevación de talones',
      shortFoot: 'Pie corto',
      hold: 'Equilibrio a una pierna',
      min: 'min',
    },
    who: {
      heel: {
        title: 'Dolor de talón y fascitis plantar',
        text: 'Primeros pasos de la mañana con dolor punzante, dolor después de estar sentado o de caminar mucho.',
        goal: 'Meta: mañanas más fáciles',
      },
      flat: {
        title: 'Pie plano',
        text: 'Arcos cansados y adoloridos, y pies que se van hacia adentro.',
        goal: `Meta: mantener el arco ${archHoldSeconds} segundos`,
      },
      allday: {
        title: 'Todo el día de pie',
        text: 'Enfermería, tiendas, almacenes, restaurantes. Pies que duelen al final del turno.',
        goal: null,
      },
      run: {
        title: 'Corredores y deportistas',
        text: 'Dolor de talón, de Aquiles o de tibia que vuelve cada vez que entrenas.',
        goal: `Meta: ${calfRaises} elevaciones de talón a una pierna`,
      },
    },
    whoMore: 'Leer la guía',
    whoMoreEn: 'Leer (en inglés)',
    adjustH2: 'Se adapta a tu mañana.',
    adjustP:
      'Cada mañana registras con un toque cómo se sienten tus pies. Si la mañana es mala, la sesión de hoy es más corta y más fácil. Después de un día largo de pie, se quitan los ejercicios con carga. En un buen día, nunca acelera.',
    answersH2: 'Un plan hecho con tus respuestas.',
    answersP:
      'Dile a Walkito dónde te duele, de qué lado, a qué te dedicas y a qué quieres volver. Con eso arma tu plan, una semana a la vez, no una rutina igual para todos.',
    how: [
      {
        title: 'Una semana a la vez, en torno a una meta',
        text: `Cada semana gira en torno a una meta que se puede medir: dolor de talón por la mañana de ${PAIN_GOAL_MAX}/10 o menos durante ${painFreeDays} días seguidos, mantener el arco ${archHoldSeconds} segundos, ${calfRaises} elevaciones de talón a una pierna, ${balanceSeconds} segundos de equilibrio a una pierna, o menos de un ${gapPercent} % de diferencia entre el lado izquierdo y el derecho. Cuando alcanzas una, pasa a mantenimiento y la siguiente ocupa su lugar.`,
        link: 'Cómo funciona el plan (en inglés)',
      },
      {
        title: `Una prueba cada ${testEveryDays} días, luego cada ${testEveryDaysAfterGoal}`,
        text: `${retestTests} pruebas físicas en unos ${retestMinutes} minutos: elevaciones de talón hasta el fallo, mantener el arco y equilibrio a una pierna de ambos lados. Cada ${testEveryDays} días hasta que alcances tu primera meta, luego cada ${testEveryDaysAfterGoal}. El progreso se mide, no se adivina por cómo se sintió la semana.`,
        link: 'Qué miden las pruebas (en inglés)',
      },
      {
        title: 'Elegido a partir de investigación publicada',
        text: 'Ejercicios elegidos a partir de investigación y guías publicadas. Walkito en sí no se ha probado en un ensayo.',
        link: 'Ver la evidencia (en inglés)',
      },
    ],
    insideH2: 'Dentro de la app',
    inside: {
      week: 'Tu semana, con días de descanso',
      video: 'Un video para cada ejercicio',
      quick: 'Rutinas rápidas para cualquier momento',
      tests: 'Tus pruebas: izquierda vs. derecha',
    },
    faqH2: 'Preguntas',
    faq: [
      {
        q: '¿En cuánto tiempo voy a notar la diferencia?',
        a: `Depende de la persona y del dolor. El plan se arma una semana a la vez en torno a una meta que se puede medir, y una prueba cada ${testEveryDays} días te muestra lo que de verdad está cambiando.`,
      },
      {
        q: '¿Necesito equipo?',
        a: 'No. Algunos ejercicios usan una toalla, un escalón o escaleras, una banda elástica, una almohada o una pelota de masaje, y Walkito te pregunta qué tienes. Lo que necesite algo que no tienes queda fuera de tu plan.',
      },
      {
        q: '¿Sirve para el pie plano?',
        a: 'Sí, para el pie plano flexible. Si un arco se aplanó de repente en la edad adulta, primero consulta a un profesional de la salud.',
      },
      {
        q: '¿Es un consejo médico?',
        a: 'No. Walkito es un programa de ejercicios. No diagnostica y no sustituye a un profesional de la salud.',
      },
      { q: '¿En qué idiomas está?', a: 'En inglés, ruso y español.' },
    ],
    finalH2: 'Tus pies, tu plan.',
  },
};

/**
 * A card heading with its last two words in one span, kept together from 375px
 * up (`.tail` in globals.css). Balance otherwise breaks «На основе
 * опубликованных / исследований» with the last word alone, although
 * «опубликованных исследований» fits the card; below 375px it does not fit, so
 * there the span wraps like any text.
 */
function keepTail(title: string) {
  const words = title.split(' ');
  if (words.length < 3) return title;
  return (
    <>
      {words.slice(0, -2).join(' ')} <span className="tail">{words.slice(-2).join(' ')}</span>
    </>
  );
}

/** Title and description for each language's home page metadata. */
export const HOME_META: Record<Lang, HomeCopy['meta']> = {
  en: COPY.en.meta,
  ru: COPY.ru.meta,
  es: COPY.es.meta,
};

/**
 * Screenshots taken with the app in each language. Russian and Spanish live in
 * `public/app/<lang>/` under the English file names; a language missing from
 * this set shows the English screens.
 */
const LOCALIZED_SHOTS: ReadonlySet<Lang> = new Set<Lang>(['ru', 'es']);

/**
 * The home page, in each of the site's languages: one layout, one copy object
 * per language.
 *
 * Written for anyone with heel and foot pain, not only runners: the runner page
 * this used to be lives at `/heel-pain-runners/`. Cards point at the guide in
 * the page's own language where there is one, and say so where the page they
 * open is English only.
 */
export function Home({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const c = CHROME[lang];
  const suffix = lang === 'en' ? '' : `-${lang}`;
  const shot = (name: string) =>
    LOCALIZED_SHOTS.has(lang) ? `/app/${lang}/${name}.webp` : `/app/${name}.webp`;
  const app = lang === 'en' ? APP : { ...APP, description: copy.meta.description, featureList: undefined };

  const v = copy.whoVisual;

  /**
   * The picture in each card, a piece of the app that card's person would
   * meet first: the morning check-in, the arch-hold goal, today's minutes, and
   * the day's tasks ticking off.
   */
  const visuals = {
    heel: (
      <span className="wv-checkin">
        <span className="wv-check wv-check-back">
          <img src="/hero/mascot-pain.webp" alt="" width={240} height={240} />
          {v.hurts}
        </span>
        <span className="wv-check wv-check-front">
          <img src="/hero/mascot-nopain.webp" alt="" width={240} height={240} />
          {v.noPain}
        </span>
      </span>
    ),
    flat: (
      <span className="wv-ring">
        <svg viewBox="0 0 120 120">
          <circle className="wv-ring-track" cx="60" cy="60" r="52" />
          <circle className="wv-ring-fill" cx="60" cy="60" r="52" pathLength={100} />
        </svg>
        <span className="wv-ring-num">
          <span className="wv-count" style={{ '--to': archHoldSeconds } as React.CSSProperties} />
          {v.sec}
        </span>
        <span className="wv-ring-label">{v.arch}</span>
      </span>
    ),
    allday: (
      <span className="wv-minutes">
        <span className="wv-big">
          {MIN_B}
          <small>{v.min}</small>
        </span>
        <span className="wv-chip">
          <ClockIcon size={16} weight="fill" aria-hidden />
          {MIN_A} · {MIN_B} · {MIN_C} {v.min}
        </span>
        <img className="wv-walker" src="/hero/mascot-tasks.webp" alt="" width={240} height={240} />
      </span>
    ),
    run: (
      <span className="wv-tasks">
        <span className="wv-tasks-head">
          <FireIcon size={16} weight="fill" aria-hidden />
          {v.tasks}
        </span>
        {[
          [v.calf, '3 × 12'],
          [v.shortFoot, '3 × 10'],
          [v.hold, '3 × 30s'],
        ].map(([name, dose], k) => (
          <span key={name} className="wv-row" style={{ '--k': k } as React.CSSProperties}>
            <span className="wv-tick">
              <CheckIcon size={14} weight="bold" aria-hidden />
            </span>
            <span className="wv-row-name">{name}</span>
            <span className="wv-row-dose">{dose}</span>
          </span>
        ))}
      </span>
    ),
  };

  /** The story paragraph as words, and which word each chip follows. */
  const storyTokens = copy.storyP.split(' ');
  const chipAt = new Map<number, number>();
  copy.storyChipsAfter.reduce((from, end, k) => {
    const i = storyTokens.findIndex((word, j) => j >= from && word.endsWith(end));
    if (i < 0) return from;
    chipAt.set(i, k);
    return i + 1;
  }, 0);
  // The accent: the run of words, from wherever it starts, that spells
  // `storyAccent` (non-breaking spaces read as spaces).
  const plain = (word: string) => word.replace(/\u00a0/g, ' ');
  const accent = new Set<number>();
  for (let i = 0; i < storyTokens.length && accent.size === 0; i++) {
    let text = '';
    for (let j = i; j < storyTokens.length && text.length < copy.storyAccent.length; j++) {
      text += (text ? ' ' : '') + plain(storyTokens[j]);
      if (text === copy.storyAccent) for (let k = i; k <= j; k++) accent.add(k);
    }
  }
  const storyChips = [
    <img key="pain" src="/hero/mascot-pain.webp" alt="" width={240} height={240} />,
    <>{v.hurts}</>,
    <>
      <FireIcon size={22} weight="fill" aria-hidden />
      {v.tasks}
    </>,
    <>
      <img src="/hero/mascot-nopain.webp" alt="" width={240} height={240} />
      {v.noPain}
    </>,
  ];

  /** English-only targets carry `hrefLang="en"` so the switch of language is announced. */
  const forWho = [
    { card: copy.who.heel, href: TRANSLATED.heelPain[lang], accent: 'teal', en: false, visual: visuals.heel },
    { card: copy.who.flat, href: TRANSLATED.flatFeet[lang], accent: 'violet', en: false, visual: visuals.flat },
    // No page of its own yet; the program page is the closest honest answer.
    { card: copy.who.allday, href: '/program/', accent: 'amber', en: true, visual: visuals.allday },
    { card: copy.who.run, href: '/heel-pain-runners/', accent: 'blue', en: true, visual: visuals.run },
  ] as const;
  const englishOnly = lang !== 'en';

  /**
   * The cards under the plan section. The goal card is Rahym's, from the home
   * page before the redesign; the test card takes its schedule from there too.
   * The evidence card states only what the evidence page says, after the claims
   * there were re-checked against the papers.
   */
  const howHrefs = ['/program/', '/program/', '/science/'];


  return (
    <>
      <JsonLd data={app} />
      {/* The hero is a band of its own: the icon's blue, the header laid over
          it, one phone with today's screen and the app's own cards around it. */}
      <ScrollState />
      <Masthead lang={lang} current="home" floating />
      <div className="hero-stage">
        <div className="hero-sky" aria-hidden>
          <span className="sky-blob sky-a" />
          <span className="sky-blob sky-b" />
          <span className="sky-blob sky-c" />
          <span className="sky-streak sky-s1" />
          <span className="sky-streak sky-s2" />
        </div>


        <section className="shell hero hero-glass">
          <div className="hero-device">
            <div className="hero-arch" aria-hidden />

            {/* The phone is one picture, frame and all (`public/hero/phone-home*`,
                cut from the mockup with its transparent surround). */}
            <div className="hero-main">
              <img
                src="/hero/phone-home.webp"
                srcSet="/hero/phone-home.webp 376w, /hero/phone-home@2x.webp 751w"
                sizes="(max-width: 760px) 64vw, 330px"
                width={751}
                height={1550}
                alt={copy.alt.heroCenter}
                fetchPriority="high"
                decoding="async"
              />
              {/* Our own Dynamic Island, drawn over the one in the mockup. */}
              <span className="hero-island" aria-hidden>
                <img src="/icon.png" alt="" width={64} height={64} />
                <span className="hero-island-name">Walkito</span>
                <span className="hero-island-ring" />
              </span>
            </div>

            <div className="glass-card card-nopain" aria-hidden>
              <img src="/hero/mascot-nopain.webp" alt="" width={240} height={240} />
              <span>{copy.cards.noPain}</span>
            </div>

            <div className="glass-card card-streak" aria-hidden>
              <span className="card-fire">
                <FireIcon size={20} weight="fill" aria-hidden />
              </span>
              <span>{copy.cards.streak}</span>
            </div>

            <div className="glass-card card-today" aria-hidden>
              <span className="card-today-text">{copy.cards.today}</span>
              <span className="card-start">
                <PlayIcon size={14} weight="fill" aria-hidden />
                {copy.cards.start}
              </span>
            </div>

            <div className="glass-card card-calf" aria-hidden>
              <span className="card-label">{copy.cards.calf}</span>
              <span className="card-figure">
                12 <span className="card-arrow">→</span> 18
              </span>
              <span className="card-bars">
                {[34, 46, 52, 64, 78, 100].map((h) => (
                  <span key={h} style={{ height: `${h}%` }} />
                ))}
              </span>
            </div>
          </div>

          <div className="hero-text">
            <h1>
              {copy.h1a}
              <span>{copy.h1b}</span>
            </h1>
            <p>{copy.lead}</p>
            {/* "Get the app", not the store badge: on a laptop it opens the QR
                dialog, on a phone it goes to that phone's store. */}
            <GetAppButton
              className="hero-get"
              ios={storeHref(`home-hero${suffix}`) ?? '#'}
              android={playHref(`home-hero${suffix}`)}
            >
              <AppleGlyph />
              {c.headerButton}
            </GetAppButton>
            <p className="hero-small">{copy.small}</p>
          </div>
        </section>
      </div>

      <Prose className="home">
        {/* "Is this for me?": four tall cards, each with a moving piece of the
            app in it. Loops run only while the section is on screen. */}
        <InView className="who-sheet">
          <div className="who-inner">
          <span className="who-kicker" aria-hidden>
            <span className="kick-num">01</span>
            <span className="kick-label">{copy.whoKicker}</span>
          </span>
          {/* Each word rises out of its own line box, one after another. */}
          <h2 aria-label={copy.whoH2}>
            {copy.whoH2.split(' ').map((word, w) => (
              <span key={w} className="rise-word" aria-hidden>
                <span style={{ '--w': w } as React.CSSProperties}>{word}</span>
              </span>
            ))}
          </h2>
          <p className="who-lead">{copy.whoLead}</p>

          <div className="who-grid who-grid-v2">
            {forWho.map(({ card, href, accent, en, visual }, i) => (
              <a
                key={href}
                href={href}
                hrefLang={en && englishOnly ? 'en' : undefined}
                className={`who-tile who-${accent}`}
                style={{ '--i': i } as React.CSSProperties}
              >
                <span className="who-visual" aria-hidden>
                  {visual}
                </span>
                <span className="who-body">
                  {card.goal && <span className="who-goal">{card.goal}</span>}
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="who-more">
                    {en ? copy.whoMoreEn : copy.whoMore}
                    <span className="who-arrow">
                      <ArrowRightIcon size={18} weight="bold" aria-hidden />
                    </span>
                  </span>
                </span>
              </a>
            ))}
          </div>
          </div>
        </InView>
        {/* "It's not your fault": the paragraph stays in the middle of the
            screen while the page scrolls past it. Its words darken one by one,
            chips from the app pop into the gaps left for them, and app icons
            drift up behind. */}
        <ScrollProgress className="story-flow">
          <div className="flow-stage">
            <div className="flow-float" aria-hidden>
              {[FootprintsIcon, TimerIcon, ChartLineUpIcon, SunHorizonIcon, SneakerIcon, CalendarDotsIcon].map(
                (Glyph, k) => (
                  <span key={k} className={`ftile ftile-${k}`}>
                    <Glyph size={30} weight="fill" />
                  </span>
                ),
              )}
            </div>
            <div className="flow-inner">
              <h2 className="who-kicker flow-kicker">
                <span className="kick-num">02</span>
                <span className="kick-label">{copy.storyH2}</span>
              </h2>
              <p className="flow-text">
                {/* Read once, as written; the animated words below are hidden from screen readers. */}
                <span className="sr-only">{copy.storyP}</span>
                {storyTokens.map((word, i) => (
                  <Fragment key={i}>
                    <span className={accent.has(i) ? 'fw fw-accent' : 'fw'} aria-hidden style={{ '--t': (i / storyTokens.length).toFixed(3) } as React.CSSProperties}>
                      {word}
                    </span>{' '}
                    {chipAt.has(i) && (
                      <>
                        <span
                          className={`fchip fchip-${chipAt.get(i)}`}
                          aria-hidden
                          style={{ '--t': (i / storyTokens.length).toFixed(3) } as React.CSSProperties}
                        >
                          {storyChips[chipAt.get(i)!]}
                        </span>{' '}
                      </>
                    )}
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </ScrollProgress>

        {/* 03 "How it works" and 04 "Progress", on one dark band. They
            replace the two text-and-phone sections that used to sit here. */}
        <HomeFeatures lang={lang} />

        {/* 04 Reviews, on the white page again. */}
        <Reviews lang={lang} />

        {/* 05 Guides: the three ways in to how the plan works. */}
        <Guides
          lang={lang}
          items={copy.how.map((item, i) => ({
            ...item,
            href: howHrefs[i],
            hrefLang: englishOnly ? 'en' : undefined,
          }))}
        />

        {/* 06 FAQ, then the closing call, on one dark band. */}
        <Faq lang={lang} items={copy.faq} />
        <Cta lang={lang} />
      </Prose>

      <Footer lang={lang} page="home" />
    </>
  );
}
