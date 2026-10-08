import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { Founders } from '@/components/Founders';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import BodyPartLegIcon from '@hugeicons/core-free-icons/BodyPartLegIcon';
import ChartIncreaseIcon from '@hugeicons/core-free-icons/ChartIncreaseIcon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import RunningShoesIcon from '@hugeicons/core-free-icons/RunningShoesIcon';
import SunriseIcon from '@hugeicons/core-free-icons/SunriseIcon';
import Timer01Icon from '@hugeicons/core-free-icons/Timer01Icon';
import { HOME_DE } from '@/lib/home/de';
import { HOME_FR } from '@/lib/home/fr';
import { HOME_IT } from '@/lib/home/it';
import { HOME_PT } from '@/lib/home/pt';

import { Icon } from '@/components/Icon';
import { Prose } from '@/components/Prose';
import { CHROME, TRANSLATED, type Lang } from '@/lib/i18n';
import { APP_STORE_NAME, APP_STORE_URL, PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

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
export type HomeCopy = {
  meta: { title: string; description: string };
  h1a: string;
  h1b: string;
  lead: string;
  small: string;
  chips: [string, string, string];
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
  whoH2: string;
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
  pt: HOME_PT,
  fr: HOME_FR,
  it: HOME_IT,
  de: HOME_DE,
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
    chips: ['Bad morning? Today gets lighter', `A test every ${testEveryDays} days`, `${MIN_A}, ${MIN_B} or ${MIN_C} min`],
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
      'Insoles, new shoes, a night splint, fifty videos that all say something different. They can make your feet feel supported, but none of them train the foot. What’s missing is one clear plan: which exercises, how many, in what order, and what to do on a bad day.',
    whoH2: 'Is this for me?',
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
        title: 'Built on published research',
        text: 'The 2023 clinical guideline for heel pain grades stretching A and strength training B, and a randomized trial found high-load strength work improved pain and function faster than stretching.',
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
    chips: ['Плохое утро? Сегодня будет легче', `Тест каждые ${testEveryDays} дней`, `${MIN_A}, ${MIN_B} или ${MIN_C} мин`],
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
      'Стельки, новая обувь, ночной ортез, полсотни видео, где каждый говорит своё. Всё это может дать стопам ощущение опоры, но ничто из этого не тренирует саму стопу. Не хватает одного понятного плана: какие упражнения, сколько, в каком порядке и что делать в плохой день.',
    whoH2: 'Это для меня?',
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
        title: 'На основе опубликованных исследований',
        text: 'Клинические рекомендации 2023 года по боли в пятке дают растяжке уровень A, а силовым упражнениям уровень B. В рандомизированном исследовании силовая работа с высокой нагрузкой быстрее растяжки уменьшала боль и улучшала функцию стопы.',
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
    chips: ['¿Mala mañana? Hoy va más suave', `Una prueba cada ${testEveryDays} días`, `${MIN_A}, ${MIN_B} o ${MIN_C} min`],
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
      'Plantillas, zapatos nuevos, una férula nocturna, cincuenta videos que dicen cosas distintas. Pueden hacer que tus pies se sientan con más apoyo, pero ninguno entrena el pie. Lo que falta es un plan claro: qué ejercicios, cuántos, en qué orden y qué hacer en un mal día.',
    whoH2: '¿Esto es para mí?',
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
        title: 'Basado en investigación publicada',
        text: 'La guía clínica de 2023 para el dolor de talón le da al estiramiento un grado A y al entrenamiento de fuerza un grado B, y un ensayo aleatorizado encontró que el trabajo de fuerza con carga alta redujo el dolor y mejoró la función más rápido que el estiramiento.',
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
  pt: COPY.pt.meta,
  fr: COPY.fr.meta,
  it: COPY.it.meta,
  de: COPY.de.meta,
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

  /** English-only targets carry `hrefLang="en"` so the switch of language is announced. */
  const forWho = [
    { card: copy.who.heel, href: TRANSLATED.heelPain[lang], icon: FootprintsIcon, accent: 'teal', en: false },
    { card: copy.who.flat, href: TRANSLATED.flatFeet[lang], icon: BodyPartLegIcon, accent: 'violet', en: false },
    // No page of its own yet; the program page is the closest honest answer.
    { card: copy.who.allday, href: '/program/', icon: Clock01Icon, accent: 'amber', en: true },
    { card: copy.who.run, href: '/heel-pain-runners/', icon: RunningShoesIcon, accent: 'blue', en: true },
  ] as const;
  const englishOnly = lang !== 'en';

  /** Small notes around the hero phones, on wide screens only. */
  const chips = [
    { text: copy.chips[0], icon: SunriseIcon, place: 'chip-a' },
    { text: copy.chips[1], icon: ChartIncreaseIcon, place: 'chip-b' },
    { text: copy.chips[2], icon: Timer01Icon, place: 'chip-c' },
  ];

  /**
   * The cards under the plan section. The goal card is Rahym's, from the home
   * page before the redesign; the test card takes its schedule from there too.
   * The evidence card states only what the evidence page says, after the claims
   * there were re-checked against the papers.
   */
  const howHrefs = ['/program/', '/program/', '/science/'];

  /** The app, a screen at a time. Images come from scripts/export-screenshots.mjs. */
  const inside = [
    { src: shot('05-week'), label: copy.alt.week, caption: copy.inside.week },
    { src: shot('06-exercise'), label: copy.alt.exercise, caption: copy.inside.video },
    { src: shot('07-quick'), label: copy.alt.quick, caption: copy.inside.quick },
    { src: shot('progress-results'), label: copy.alt.tests, caption: copy.inside.tests },
  ];

  return (
    <>
      <JsonLd data={app} />
      <Masthead lang={lang} />

      <Prose className="home">
        <section className="shell hero hero-long hero-split">
          <div className="hero-text">
            <h1>
              {copy.h1a}
              <span>{copy.h1b}</span>
            </h1>
            <p>{copy.lead}</p>
            <AppStoreBadge campaign={`home-hero${suffix}`} anchor lang={lang} />
            <p className="hero-small">{copy.small}</p>
          </div>

          {/* Three phones: today in front, a bad morning on the left, an
              exercise playing on the right. Only the front one loads eagerly. */}
          <div className="hero-phones">
            <div className="hero-phone hero-phone-left">
              <ScreenshotSlot
                src={shot('hero-checkin-bad')}
                label={copy.alt.heroLeft}
                sizes="(max-width: 1023px) 34vw, 230px"
              />
            </div>
            <div className="hero-phone hero-phone-center">
              <ScreenshotSlot
                src={shot('hero-home')}
                label={copy.alt.heroCenter}
                sizes="(max-width: 1023px) 44vw, 270px"
                priority
              />
            </div>
            <div className="hero-phone hero-phone-right">
              <ScreenshotSlot
                src={shot('hero-exercise')}
                label={copy.alt.heroRight}
                sizes="(max-width: 1023px) 34vw, 230px"
              />
            </div>
            {chips.map((chip) => (
              <span key={chip.place} className={`hero-chip ${chip.place}`} aria-hidden>
                <Icon icon={chip.icon} size={18} />
                {chip.text}
              </span>
            ))}
          </div>
        </section>

        <section className="shell story">
          <h2>{copy.storyH2}</h2>
          <p>{copy.storyP}</p>
        </section>

        <section className="shell proof proof-lead">
          <h2>{copy.whoH2}</h2>
          <div className="who-grid">
            {forWho.map(({ card, href, icon, accent, en }) => (
              <a
                key={href}
                href={href}
                hrefLang={en && englishOnly ? 'en' : undefined}
                className={`who-card who-${accent}`}
              >
                <span className="who-icon">
                  <Icon icon={icon} size={26} />
                </span>
                {card.goal && <span className="who-goal">{card.goal}</span>}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span className="who-more">
                  {en ? copy.whoMoreEn : copy.whoMore}
                  <span className="who-arrow">
                    <Icon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="shell split">
          <div>
            <h2>{copy.adjustH2}</h2>
            <p>{copy.adjustP}</p>
          </div>
          <ScreenshotSlot src={shot('02-checkin')} label={copy.alt.checkin} />
        </section>

        <section className="shell split split-flip">
          <div>
            <h2>{copy.answersH2}</h2>
            <p>{copy.answersP}</p>
          </div>
          <div className="phone-pair">
            <ScreenshotSlot src={shot('03-where-it-hurts')} label={copy.alt.where} />
            <ScreenshotSlot src={shot('choose-goal')} label={copy.alt.goal} />
          </div>
        </section>

        <section className="shell proof proof-follow">
          <div className="quotes">
            {copy.how.map((item, i) => (
              <figure key={item.title}>
                <h3>{keepTail(item.title)}</h3>
                <p>{item.text}</p>
                <a href={howHrefs[i]} hrefLang={englishOnly ? 'en' : undefined}>
                  {item.link}&nbsp;→
                </a>
              </figure>
            ))}
          </div>
        </section>

        <section className="shell proof">
          <h2>{copy.insideH2}</h2>
          <div className="gallery">
            {inside.map((item) => (
              <div key={item.caption} className="gallery-item">
                <ScreenshotSlot src={item.src} label={item.label} size="sm" />
                <p>{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="shell story">
          <Founders lang={lang} />
        </section>

        <section className="shell proof home-faq">
          <h2>{copy.faqH2}</h2>
          {/* Native details/summary: the answer stays in the HTML for search
              engines and assistants, and opens on tap. */}
          <div className="faq faq-details">
            {copy.faq.map((item) => (
              <details key={item.q}>
                <summary>
                  <h3>{item.q}</h3>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="shell final">
          <div className="final-card">
            <h2>{copy.finalH2}</h2>
            <AppStoreBadge campaign={`home-bottom${suffix}`} lang={lang} />
            <p className="final-small">{copy.small}</p>
          </div>
          <p className="final-notice">{c.notice}</p>
        </section>
      </Prose>

      <Footer lang={lang} page="home" />
    </>
  );
}
