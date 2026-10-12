import type { Guide } from './types';

/**
 * The sentence in each guide's app box (components/AppCallout.tsx), written
 * for that page so the box answers the reader's own problem instead of
 * repeating one line on every page. English, Spanish and Russian; the other
 * languages keep the box's general line.
 *
 * Only what the app does today (walkito-seo/product.md): a plan built from
 * where it hurts and which side, a one-tap morning check-in that makes a bad
 * morning's session lighter, 3, 5 or 10 minute sessions at home, a video and
 * a cue for every exercise, and a test every 14 days (calf raises on each
 * leg, arch hold, single-leg balance). No prices, no promises about pain.
 */
type Line = { en: string; es: string; ru: string };

const VIDEO_PLAN = {
  en: (name: string) => `Walkito shows the ${name} with a video and a cue, and fits it into a 3, 5 or 10 minute daily plan built around where your foot hurts.`,
  es: (name: string) => `Walkito te muestra ${name} con un video y una indicación, dentro de un plan diario de 3, 5 o 10 minutos según dónde te duele el pie.`,
  ru: (name: string) => `Walkito показывает ${name} на видео с подсказкой и встраивает в ежедневный план на 3, 5 или 10 минут с учётом того, где болит стопа.`,
};
const ex = (en: string, es: string, ru: string): Line => ({ en: VIDEO_PLAN.en(en), es: VIDEO_PLAN.es(es), ru: VIDEO_PLAN.ru(ru) });

export const APP_LINES: Partial<Record<Guide['page'], Line>> = {
  heelPain: {
    en: 'Walkito puts these exercises into a 3, 5 or 10 minute daily plan, and a bad morning in your check-in makes that day’s session lighter.',
    es: 'Walkito pone estos ejercicios en un plan diario de 3, 5 o 10 minutos, y si tu mañana fue mala, la sesión de ese día es más suave.',
    ru: 'Walkito собирает эти упражнения в ежедневный план на 3, 5 или 10 минут, а если утро было тяжёлым, занятие в этот день будет легче.',
  },
  flatFeet: {
    en: 'Walkito builds these arch exercises into a daily plan and tests your arch hold, calf raises and balance every 14 days, so you can see what changes.',
    es: 'Walkito arma un plan diario con estos ejercicios para el arco y cada 14 días mide cuánto sostienes el arco, tus elevaciones de talón y tu equilibrio, para que veas qué cambia.',
    ru: 'Walkito собирает эти упражнения для свода в план на каждый день и каждые 14 дней проверяет удержание свода, подъёмы на носки и баланс, чтобы вы видели, что меняется.',
  },
  standing: {
    en: 'On your feet all day? Walkito fits 3, 5 or 10 minute sessions around your day and makes them lighter when your feet wake up sore.',
    es: '¿Pasas todo el día de pie? Walkito arma sesiones de 3, 5 o 10 minutos que caben en tu día, y las hace más suaves cuando amaneces con los pies adoloridos.',
    ru: 'Весь день на ногах? Walkito подбирает занятия на 3, 5 или 10 минут под ваш день и делает их легче, если утром стопы болят.',
  },
  calfRaises: {
    en: 'Walkito moves your calf raises up one small step at a time, and tests how many you can do on each leg every 14 days.',
    es: 'Walkito sube tus elevaciones de talón un paso pequeño a la vez, y cada 14 días mide cuántas haces con cada pierna.',
    ru: 'Walkito усложняет подъёмы на носки маленькими шагами и каждые 14 дней проверяет, сколько раз вы делаете их на каждой ноге.',
  },
  achilles: {
    en: 'Walkito turns these Achilles exercises into a short daily plan, and a sore morning in your check-in makes that day’s session lighter.',
    es: 'Walkito convierte estos ejercicios para el Aquiles en un plan diario corto, y si amaneces con dolor, la sesión de ese día es más suave.',
    ru: 'Walkito превращает эти упражнения для ахиллова сухожилия в короткий план на день, а если утром болит, занятие в этот день будет легче.',
  },
  shinSplints: {
    en: 'Walkito builds these shin exercises into 3, 5 or 10 minute sessions and asks each morning how your legs feel before it sets the day’s work.',
    es: 'Walkito arma sesiones de 3, 5 o 10 minutos con estos ejercicios para la espinilla y cada mañana te pregunta cómo están tus piernas antes de fijar el trabajo del día.',
    ru: 'Walkito собирает эти упражнения для голени в занятия на 3, 5 или 10 минут и каждое утро спрашивает, как ноги, прежде чем выбрать нагрузку на день.',
  },
  morningHeelPain: {
    en: 'Walkito starts each day with a one-tap check-in on your first steps, and a bad morning gets a lighter session.',
    es: 'Walkito empieza cada día con una pregunta rápida sobre tus primeros pasos, y una mañana mala recibe una sesión más suave.',
    ru: 'Walkito начинает каждый день с отметки в одно касание о первых шагах, и после тяжёлого утра занятие будет легче.',
  },
  pfDuration: {
    en: 'Walkito logs your morning pain and tests your calves every 14 days, so you can see whether your heel is changing week by week.',
    es: 'Walkito registra tu dolor de la mañana y mide tus pantorrillas cada 14 días, para que veas si tu talón va cambiando semana a semana.',
    ru: 'Walkito отмечает утреннюю боль и каждые 14 дней проверяет икры, чтобы вы видели, меняется ли пятка от недели к неделе.',
  },
  ballOfFoot: {
    en: 'Walkito builds a short daily plan from where your foot hurts and on which side, with a video for every exercise.',
    es: 'Walkito arma un plan diario corto según dónde te duele el pie y de qué lado, con un video para cada ejercicio.',
    ru: 'Walkito составляет короткий план на день с учётом того, где болит стопа и с какой стороны, с видео к каждому упражнению.',
  },
  nurses: {
    en: 'Long shifts? Walkito fits 3, 5 or 10 minute sessions around your schedule and makes them lighter when your feet wake up sore.',
    es: '¿Turnos largos? Walkito arma sesiones de 3, 5 o 10 minutos según tu horario y las hace más suaves cuando amaneces con los pies adoloridos.',
    ru: 'Длинные смены? Walkito подбирает занятия на 3, 5 или 10 минут под ваш график и делает их легче, если утром стопы болят.',
  },
  standingDesk: {
    en: 'Walkito gives you 3, 5 or 10 minute sessions you can do beside your desk, built around where your feet hurt.',
    es: 'Walkito te da sesiones de 3, 5 o 10 minutos que puedes hacer junto a tu escritorio, armadas según dónde te duelen los pies.',
    ru: 'Walkito даёт занятия на 3, 5 или 10 минут, которые можно сделать прямо у рабочего стола, с учётом того, где болят стопы.',
  },
  bestApp: {
    en: 'Want to try Walkito? It builds a daily plan from where it hurts, adjusts it every morning, and tests your progress every 14 days.',
    es: '¿Quieres probar Walkito? Arma un plan diario según dónde te duele, lo ajusta cada mañana y mide tu progreso cada 14 días.',
    ru: 'Хотите попробовать Walkito? Он составляет план на день с учётом того, где болит, подстраивает его каждое утро и проверяет прогресс каждые 14 дней.',
  },
  vsExakt: {
    en: 'See Walkito for yourself: a daily plan for heel and foot pain, with 3, 5 or 10 minute sessions and a morning check-in.',
    es: 'Mira Walkito por tu cuenta: un plan diario para el dolor de talón y de pie, con sesiones de 3, 5 o 10 minutos y una pregunta cada mañana.',
    ru: 'Посмотрите Walkito сами: план на каждый день при боли в пятке и стопе, с занятиями на 3, 5 или 10 минут и утренней отметкой.',
  },
  exPlantarFasciaStretch: ex('plantar fascia stretch', 'el estiramiento de fascia plantar', 'растяжку подошвенной фасции'),
  exCalfStretch: ex('calf stretch', 'el estiramiento de pantorrilla', 'растяжку икроножной мышцы'),
  exSoleusStretch: ex('soleus stretch', 'el estiramiento de sóleo', 'растяжку камбаловидной мышцы'),
  exFootRoll: ex('foot roll', 'el masaje plantar con pelota', 'прокатывание стопы мячом'),
  exAnkleRocks: ex('ankle rocks', 'el ejercicio de rodilla sobre los dedos', 'качания в голеностопе'),
  exTowelHeelRaise: ex('towel heel raise', 'la elevación de talones con toalla', 'подъёмы на носки с полотенцем'),
  exCalfRaises: ex('calf raises', 'las elevaciones de talón', 'подъёмы на носки'),
  exEccentricHeelDrops: ex('eccentric heel drops', 'los excéntricos de talón', 'эксцентрические опускания пятки'),
  exTibialisRaises: ex('tibialis raises', 'las elevaciones de tibial anterior', 'подъёмы носков у стены'),
  exSingleLegBalance: ex('single-leg balance', 'el equilibrio a una pierna', 'стойку на одной ноге'),
  exShortFoot: ex('short foot exercise', 'el ejercicio de pie corto', '«короткую стопу»'),
  exTowelScrunch: ex('towel scrunch', 'el ejercicio de recoger la toalla con los dedos', 'собирание полотенца'),
  exToeSpread: ex('toe spread', 'el ejercicio de separar los dedos', 'разведение пальцев'),
  exBigToeLift: ex('big toe lift', 'el ejercicio de levantar el dedo gordo', 'подъём большого пальца'),
  exBandInversion: ex('band inversion', 'la inversión de tobillo con banda', 'поворот стопы внутрь с резинкой'),
  exHipAbduction: ex('hip abduction', 'la abducción de cadera', 'отведение бедра'),
  calfRaiseTest: {
    en: 'Walkito runs this calf raise test with you every 14 days, on each leg, so you can see your numbers and the gap between sides change.',
    es: 'Walkito hace contigo este test de elevación de talón cada 14 días, con cada pierna, para que veas cómo cambian tus números y la diferencia entre lados.',
    ru: 'Walkito проводит с вами этот тест каждые 14 дней на каждой ноге, чтобы вы видели, как меняются ваши цифры и разница между сторонами.',
  },
  hubPlantarFasciitis: {
    en: 'Walkito turns the guideline’s stretching and calf strength work into a 3, 5 or 10 minute daily plan that adjusts to how your heel felt this morning.',
    es: 'Walkito convierte los estiramientos y el trabajo de pantorrilla de la guía en un plan diario de 3, 5 o 10 minutos que se ajusta a cómo amaneció tu talón.',
    ru: 'Walkito превращает растяжки и силовые упражнения для икр из рекомендаций в ежедневный план на 3, 5 или 10 минут, который подстраивается под то, как пятка чувствовала себя утром.',
  },
  hubFlatFeet: {
    en: 'Walkito gives you a short daily plan for your arches and tests how long you can hold your arch every 14 days.',
    es: 'Walkito te da un plan diario corto para el arco y cada 14 días mide cuánto tiempo sostienes el arco.',
    ru: 'Walkito даёт короткий план на каждый день для свода стопы и каждые 14 дней проверяет, сколько вы удерживаете свод.',
  },
  pfVsHeelSpur: {
    en: 'Spur or not, the exercises are the same. Walkito puts them into a short daily plan that adjusts to how your heel felt this morning.',
    es: 'Con espolón o sin él, los ejercicios son los mismos. Walkito los pone en un plan diario corto que se ajusta a cómo amaneció tu talón.',
    ru: 'Есть шпора или нет, упражнения одни и те же. Walkito собирает их в короткий план на день, который подстраивается под то, как пятка чувствовала себя утром.',
  },
  heelSpurExercises: {
    en: 'Walkito turns these heel exercises into a 3, 5 or 10 minute daily plan, with a video for every exercise.',
    es: 'Walkito convierte estos ejercicios para el talón en un plan diario de 3, 5 o 10 minutos, con un video para cada ejercicio.',
    ru: 'Walkito превращает эти упражнения для пятки в ежедневный план на 3, 5 или 10 минут, с видео к каждому упражнению.',
  },
  heelPainAfterWalking: {
    en: 'Walkito builds a short daily plan around your heel and asks each morning how it feels, so a sore day gets a lighter session.',
    es: 'Walkito arma un plan diario corto para tu talón y cada mañana te pregunta cómo está, así un día con dolor recibe una sesión más suave.',
    ru: 'Walkito составляет короткий план для пятки и каждое утро спрашивает, как она, чтобы в болезненный день занятие было легче.',
  },
  heelPainAtNight: {
    en: 'If a clinician has ruled out other causes, Walkito builds a short daily heel plan that adjusts to how your heel felt this morning.',
    es: 'Si un profesional ya descartó otras causas, Walkito arma un plan diario corto para el talón que se ajusta a cómo amaneció.',
    ru: 'Если врач исключил другие причины, Walkito составит короткий план для пятки на каждый день, который подстраивается под то, как она чувствовала себя утром.',
  },
  heelFatPad: {
    en: 'Walkito builds a short daily plan around where your heel hurts, and a sore morning in your check-in makes that day’s session lighter.',
    es: 'Walkito arma un plan diario corto según dónde te duele el talón, y si amaneces con dolor, la sesión de ese día es más suave.',
    ru: 'Walkito составляет короткий план на день с учётом того, где болит пятка, а если утром болит, занятие в этот день будет легче.',
  },
  haglunds: {
    en: 'Walkito builds a short daily plan for the back of your heel and calf, with a video for every exercise.',
    es: 'Walkito arma un plan diario corto para la parte de atrás del talón y la pantorrilla, con un video para cada ejercicio.',
    ru: 'Walkito составляет короткий план на день для задней части пятки и икры, с видео к каждому упражнению.',
  },
  severs: {
    en: 'Walkito is built for adults. If your own heels hurt, it builds a short daily plan that adjusts to how they felt this morning.',
    es: 'Walkito está pensado para adultos. Si a ti te duelen los talones, arma un plan diario corto que se ajusta a cómo amanecieron.',
    ru: 'Walkito сделан для взрослых. Если пятки болят у вас самих, он составит короткий план на день, который подстраивается под то, как они чувствовали себя утром.',
  },
  archPain: {
    en: 'Walkito turns these arch exercises into a short daily plan and tests your arch hold every 14 days, so you can see it change.',
    es: 'Walkito convierte estos ejercicios para el arco en un plan diario corto y cada 14 días mide cuánto sostienes el arco, para que veas el cambio.',
    ru: 'Walkito превращает эти упражнения для свода в короткий план на день и каждые 14 дней проверяет удержание свода, чтобы вы видели изменения.',
  },
  highArches: {
    en: 'Walkito builds a short daily plan from where your feet hurt, with 3, 5 or 10 minute sessions and a video for every exercise.',
    es: 'Walkito arma un plan diario corto según dónde te duelen los pies, con sesiones de 3, 5 o 10 minutos y un video para cada ejercicio.',
    ru: 'Walkito составляет короткий план на день с учётом того, где болят стопы, с занятиями на 3, 5 или 10 минут и видео к каждому упражнению.',
  },
  pttd: {
    en: 'Walkito builds a short daily plan for the inside of your ankle and arch, and tests your single-leg balance every 14 days.',
    es: 'Walkito arma un plan diario corto para la parte interna del tobillo y el arco, y cada 14 días mide tu equilibrio a una pierna.',
    ru: 'Walkito составляет короткий план на день для внутренней стороны голеностопа и свода и каждые 14 дней проверяет баланс на одной ноге.',
  },
  topOfFoot: {
    en: 'Walkito builds a short daily plan from where your foot hurts and on which side, and adjusts it each morning.',
    es: 'Walkito arma un plan diario corto según dónde te duele el pie y de qué lado, y lo ajusta cada mañana.',
    ru: 'Walkito составляет короткий план на день с учётом того, где болит стопа и с какой стороны, и подстраивает его каждое утро.',
  },
  mortons: {
    en: 'Walkito builds a short daily plan for the front of your foot and toes, with a video for every exercise.',
    es: 'Walkito arma un plan diario corto para la parte delantera del pie y los dedos, con un video para cada ejercicio.',
    ru: 'Walkito составляет короткий план на день для передней части стопы и пальцев, с видео к каждому упражнению.',
  },
  sesamoiditis: {
    en: 'Walkito builds a short daily plan from where your foot hurts, and a sore morning in your check-in makes that day’s session lighter.',
    es: 'Walkito arma un plan diario corto según dónde te duele el pie, y si amaneces con dolor, la sesión de ese día es más suave.',
    ru: 'Walkito составляет короткий план на день с учётом того, где болит стопа, а если утром болит, занятие в этот день будет легче.',
  },
  bunions: {
    en: 'Walkito turns these toe and foot exercises into a short daily plan, with a video and a cue for every exercise.',
    es: 'Walkito convierte estos ejercicios para los dedos y el pie en un plan diario corto, con un video y una indicación para cada ejercicio.',
    ru: 'Walkito превращает эти упражнения для пальцев и стопы в короткий план на день, с видео и подсказкой к каждому упражнению.',
  },
  hammerToe: {
    en: 'Walkito turns these toe exercises into a short daily plan, with a video and a cue for every exercise.',
    es: 'Walkito convierte estos ejercicios para los dedos en un plan diario corto, con un video y una indicación para cada ejercicio.',
    ru: 'Walkito превращает эти упражнения для пальцев в короткий план на день, с видео и подсказкой к каждому упражнению.',
  },
  toeStrengthening: {
    en: 'Walkito turns these toe exercises into a short daily plan and moves them up one step at a time.',
    es: 'Walkito convierte estos ejercicios para los dedos en un plan diario corto y los hace más difíciles un paso a la vez.',
    ru: 'Walkito превращает эти упражнения для пальцев в короткий план на день и усложняет их по одному шагу.',
  },
  tightCalves: {
    en: 'Walkito puts these calf stretches into a 3, 5 or 10 minute daily plan, alongside calf strength work.',
    es: 'Walkito pone estos estiramientos de pantorrilla en un plan diario de 3, 5 o 10 minutos, junto con trabajo de fuerza para la pantorrilla.',
    ru: 'Walkito включает эти растяжки икр в ежедневный план на 3, 5 или 10 минут вместе с силовыми упражнениями для икр.',
  },
  ankleMobility: {
    en: 'Walkito turns these ankle exercises into a short daily plan, with a video and a cue for every exercise.',
    es: 'Walkito convierte estos ejercicios de tobillo en un plan diario corto, con un video y una indicación para cada ejercicio.',
    ru: 'Walkito превращает эти упражнения для голеностопа в короткий план на день, с видео и подсказкой к каждому упражнению.',
  },
  ankleStrengthening: {
    en: 'Walkito moves these ankle exercises up one stage at a time and tests your single-leg balance every 14 days.',
    es: 'Walkito hace estos ejercicios de tobillo más difíciles una etapa a la vez y cada 14 días mide tu equilibrio a una pierna.',
    ru: 'Walkito усложняет эти упражнения для голеностопа по одному этапу и каждые 14 дней проверяет баланс на одной ноге.',
  },
  footStrengthening: {
    en: 'Walkito turns this progression into a short daily plan and tests your arch hold, calf raises and balance every 14 days.',
    es: 'Walkito convierte esta progresión en un plan diario corto y cada 14 días mide cuánto sostienes el arco, tus elevaciones de talón y tu equilibrio.',
    ru: 'Walkito превращает эту прогрессию в короткий план на день и каждые 14 дней проверяет удержание свода, подъёмы на носки и баланс.',
  },
  flatFeetBackPain: {
    en: 'Walkito gives you a short daily plan for your feet and arches, with 3, 5 or 10 minute sessions at home.',
    es: 'Walkito te da un plan diario corto para los pies y el arco, con sesiones de 3, 5 o 10 minutos en casa.',
    ru: 'Walkito даёт короткий план на каждый день для стоп и свода, с занятиями дома на 3, 5 или 10 минут.',
  },
  flatFeetKneePain: {
    en: 'Walkito gives you a short daily plan for your feet, arches and hips, with a video for every exercise.',
    es: 'Walkito te da un plan diario corto para los pies, el arco y la cadera, con un video para cada ejercicio.',
    ru: 'Walkito даёт короткий план на каждый день для стоп, свода и бёдер, с видео к каждому упражнению.',
  },
  flatFeetAge: {
    en: 'Walkito gives you a short daily plan for your arches and tests your arch hold and balance every 14 days, so you can see what changes.',
    es: 'Walkito te da un plan diario corto para el arco y cada 14 días mide cuánto sostienes el arco y tu equilibrio, para que veas qué cambia.',
    ru: 'Walkito даёт короткий план на каждый день для свода и каждые 14 дней проверяет удержание свода и баланс, чтобы вы видели, что меняется.',
  },
  flatFeetKids: {
    en: 'Walkito is built for adults. If your own arches ache, it builds a short daily plan and tests your arch hold every 14 days.',
    es: 'Walkito está pensado para adultos. Si a ti te duele el arco, arma un plan diario corto y cada 14 días mide cuánto lo sostienes.',
    ru: 'Walkito сделан для взрослых. Если свод болит у вас самих, он составит короткий план на день и каждые 14 дней будет проверять удержание свода.',
  },
  nightSplints: {
    en: 'Walkito covers the daytime side: a short daily plan of the stretches the guideline grades A, plus calf strength work, adjusted to how your heel felt this morning.',
    es: 'Walkito se ocupa del día: un plan diario corto con los estiramientos que la guía califica con A, más trabajo de fuerza para la pantorrilla, ajustado a cómo amaneció tu talón.',
    ru: 'Walkito берёт на себя день: короткий план с растяжками, которые рекомендации оценивают на A, и силовыми упражнениями для икр, с поправкой на то, как пятка чувствовала себя утром.',
  },
  pfTaping: {
    en: 'Tape helps for a while; the exercises are what you keep. Walkito puts them into a short daily plan that adjusts each morning.',
    es: 'El vendaje ayuda un tiempo; los ejercicios son lo que te queda. Walkito los pone en un plan diario corto que se ajusta cada mañana.',
    ru: 'Тейп помогает на время, а упражнения остаются с вами. Walkito собирает их в короткий план на день, который подстраивается каждое утро.',
  },
  iceHeat: {
    en: 'Walkito puts the stretches and calf work into a short daily plan, and a bad morning in your check-in makes that day’s session lighter.',
    es: 'Walkito pone los estiramientos y el trabajo de pantorrilla en un plan diario corto, y si tu mañana fue mala, la sesión de ese día es más suave.',
    ru: 'Walkito собирает растяжки и упражнения для икр в короткий план на день, а если утро было тяжёлым, занятие в этот день будет легче.',
  },
  massageBall: {
    en: 'Walkito includes the foot roll in a short daily plan, next to the stretches and calf work, with a video for each.',
    es: 'Walkito incluye el masaje plantar con pelota en un plan diario corto, junto a los estiramientos y el trabajo de pantorrilla, con un video para cada uno.',
    ru: 'Walkito включает прокатывание стопы в короткий план на день вместе с растяжками и упражнениями для икр, с видео к каждому.',
  },
  insolesVsExercises: {
    en: 'Whatever is in your shoes, Walkito handles the exercise side: a short daily plan with a test of your calves, arch and balance every 14 days.',
    es: 'Uses lo que uses en los zapatos, Walkito se ocupa de los ejercicios: un plan diario corto y cada 14 días una prueba de pantorrillas, arco y equilibrio.',
    ru: 'Что бы ни было у вас в обуви, Walkito берёт на себя упражнения: короткий план на день и каждые 14 дней проверка икр, свода и баланса.',
  },
  hingeAlt: {
    en: 'No employer plan? Walkito is a foot exercise app you can download yourself, with 3, 5 or 10 minute sessions that adjust to how your feet felt this morning.',
    es: '¿Sin plan de tu empresa? Walkito es una app de ejercicios para los pies que puedes descargar tú mismo, con sesiones de 3, 5 o 10 minutos que se ajustan a cómo amanecieron tus pies.',
    ru: 'Нет программы от работодателя? Walkito: приложение с упражнениями для стоп, которое можно скачать самому, с занятиями на 3, 5 или 10 минут, которые подстраиваются под то, как стопы чувствовали себя утром.',
  },
  footApps: {
    en: 'Heel pain or flat feet? Walkito gives you stretching and foot strength work in 3, 5 or 10 minute sessions that adjust to how your feet felt this morning.',
    es: '¿Dolor de talón o pie plano? Walkito te da estiramientos y fuerza del pie en sesiones de 3, 5 o 10 minutos que se ajustan a cómo amanecieron tus pies.',
    ru: 'Боль в пятке или плоскостопие? Walkito даёт растяжки и силовые упражнения для стопы в занятиях на 3, 5 или 10 минут, которые подстраиваются под то, как стопы чувствовали себя утром.',
  },
  ytVsApp: {
    en: 'Want a set plan instead of picking videos? Walkito gives you stretching and strength work in 3, 5 or 10 minute sessions that adjust to how your feet felt this morning.',
    es: '¿Prefieres un plan fijo en vez de elegir videos? Walkito te da estiramientos y fuerza en sesiones de 3, 5 o 10 minutos que se ajustan a cómo amanecieron tus pies.',
    ru: 'Хотите готовый план вместо поиска видео? Walkito даёт растяжки и силовые упражнения в занятиях на 3, 5 или 10 минут, которые подстраиваются под то, как стопы чувствовали себя утром.',
  },
  pfCost: {
    en: 'Starting with the free option? Walkito turns the guideline stretches and strengthening into 3, 5 or 10 minute sessions that adjust to how your feet felt this morning.',
    es: '¿Empiezas por la opción gratuita? Walkito convierte los estiramientos y la fuerza de la guía en sesiones de 3, 5 o 10 minutos que se ajustan a cómo amanecieron tus pies.',
    ru: 'Начинаете с бесплатного варианта? Walkito превращает растяжки и силовые упражнения из рекомендаций в занятия на 3, 5 или 10 минут, которые подстраиваются под то, как стопы чувствовали себя утром.',
  },
  appVsPt: {
    en: 'Doing the exercise part at home? Walkito gives you the stretches and strengthening in 3, 5 or 10 minute sessions that adjust to how your feet felt this morning.',
    es: '¿Haces la parte de ejercicios en casa? Walkito te da los estiramientos y la fuerza en sesiones de 3, 5 o 10 minutos que se ajustan a cómo amanecieron tus pies.',
    ru: 'Делаете упражнения дома? Walkito даёт растяжки и силовые упражнения в занятиях на 3, 5 или 10 минут, которые подстраиваются под то, как стопы чувствовали себя утром.',
  },
  vsHinge: {
    en: 'No Hinge Health through work? Walkito gives you 3, 5 or 10 minute sessions for heel and foot pain that adjust to how your feet felt this morning.',
    es: '¿No tienes Hinge Health por tu trabajo? Walkito es un plan diario de 3, 5 o 10 minutos para el dolor de talón y de pie que se ajusta a cómo amanecieron tus pies.',
    ru: 'Нет Hinge Health через работу? Walkito: ежедневный план на 3, 5 или 10 минут при боли в пятке и стопе, который подстраивается под то, как стопы чувствовали себя утром.',
  },
  appStudy: {
    en: 'Walkito is one of the 20 apps in this study: a 3, 5 or 10 minute daily plan with the plantar fascia stretch, both calf stretches and strengthening.',
    es: 'Walkito es una de las 20 apps de este estudio: un plan diario de 3, 5 o 10 minutos con el estiramiento de la fascia plantar, los dos de pantorrilla y fuerza.',
    ru: 'Walkito: одно из 20 приложений в этом исследовании, ежедневный план на 3, 5 или 10 минут с растяжкой подошвенной фасции, обеими растяжками икр и силовыми упражнениями.',
  },
  aiStudy: {
    en: 'Walkito adds the part most AI answers skip: a heel raise that gets harder over time, next to the stretches, in one 3, 5 or 10 minute daily plan.',
    es: 'Walkito suma la parte que casi todas las respuestas de IA omiten: una elevación de talón que se vuelve más difícil, junto a los estiramientos, en un plan diario de 3, 5 o 10 minutos.',
    ru: 'Walkito добавляет то, что пропускают почти все ответы ИИ: подъём на носки, который постепенно усложняется, рядом с растяжками, в ежедневном плане на 3, 5 или 10 минут.',
  },
  ytStudy: {
    en: 'Walkito puts all three parts, the plantar fascia stretch, both calf stretches and a heel raise that gets harder over time, into one 3, 5 or 10 minute daily plan.',
    es: 'Walkito junta las tres partes, el estiramiento de la fascia plantar, los dos estiramientos de pantorrilla y una elevación de talón que se vuelve más difícil, en un plan diario de 3, 5 o 10 minutos.',
    ru: 'Walkito собирает все три части, растяжку подошвенной фасции, обе растяжки икр и подъём на носки, который постепенно усложняется, в один ежедневный план на 3, 5 или 10 минут.',
  },
  barefoot: {
    en: 'Walkito works on foot and calf strength in 3, 5 or 10 minute sessions at home, whatever shoes you wear.',
    es: 'Walkito trabaja la fuerza del pie y la pantorrilla en sesiones de 3, 5 o 10 minutos en casa, uses el calzado que uses.',
    ru: 'Walkito работает над силой стоп и икр в занятиях дома по 3, 5 или 10 минут, в какой бы обуви вы ни ходили.',
  },
};

/** The app box's sentence for this guide, if it has its own. */
export function appLine(guide: Guide): string | undefined {
  const line = APP_LINES[guide.page];
  return line && (guide.lang === 'en' || guide.lang === 'es' || guide.lang === 'ru') ? line[guide.lang] : undefined;
}

/**
 * After which section a second app box goes (B.14), or null for none. Most
 * readers never reach the end of a long guide, and the box near the top has
 * scrolled away by the middle. The box goes where a section ends, never inside
 * one: after the exercises when they end between 30% and 70% of the page
 * (the reader has just seen what the app would plan), else after the section
 * that passes the halfway point. Never in the top 30% of the page (the first
 * box is there), after the last section, or next to a tool that carries its own app badge; none on guides
 * with fewer than four sections.
 */
export function midBoxAfter(guide: Guide): number | null {
  const s = guide.sections;
  if (s.length < 4) return null;
  const size = s.map((x) => JSON.stringify(x).length);
  const total = size.reduce((a, b) => a + b, 0);
  const upTo = (i: number) => size.slice(0, i + 1).reduce((a, b) => a + b, 0) / total;
  const ok = (i: number) => i >= 0 && upTo(i) >= 0.3 && i <= s.length - 2 && !s[i].tool && !s[i + 1]?.tool;
  const exercises = s.findIndex((x) => (x.exercises?.length ?? 0) >= 3);
  if (exercises >= 0 && upTo(exercises) >= 0.3 && upTo(exercises) <= 0.7 && ok(exercises)) return exercises;
  for (let i = 0; i < s.length; i++) {
    if (upTo(i) >= 0.5) {
      if (ok(i)) return i;
      if (ok(i + 1)) return i + 1;
      if (ok(i - 1)) return i - 1;
      return null;
    }
  }
  return null;
}
