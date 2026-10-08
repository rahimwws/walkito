/**
 * Email content for site leads: the confirm email, day 0 welcome with PDFs,
 * and the 7-day starter plan sequence, in English, Spanish and Russian.
 *
 * All lowercase subjects, plain hyphens (never a long dash), no health claims
 * (never treat/cure/fix/heal/clinically proven/guaranteed), no promised
 * results. US spelling in English, Latin American Spanish (tú, video,
 * celular) to match the /es/ site, and «вы» with the site's terms in Russian
 * («занятие», not «сессия»).
 *
 * The exercises and doses are the app's weekly plan (src/entities/program/
 * model/plan/dose.ts, the level each exercise starts at), the same doses as the
 * site's /plantar-fasciitis-exercises/ guide, not invented here. The PDFs exist only in English, and the Spanish and
 * Russian emails say so, the same way the /es/ and /ru/ printables pages do.
 *
 * Locales other than en/es/ru get English: the site has no signup form in
 * those languages yet.
 */

import type { Locale } from './types.ts';

// ── Types ───────────────────────────────────────────────────────────────────

export type SiteEmailContent = {
  subject: string;
  preheader: string;
  paragraphs: string[];
  button: { label: string; url: string } | null;
  ps: string | null;
};

type SiteLang = 'en' | 'es' | 'ru';
type ByLang = Record<SiteLang, SiteEmailContent>;

function siteLang(locale: Locale | string | null | undefined): SiteLang {
  return locale === 'es' || locale === 'ru' ? locale : 'en';
}

const pick = (locale: Locale, all: ByLang): SiteEmailContent => all[siteLang(locale)];

// ── Links ───────────────────────────────────────────────────────────────────

const SITE = 'https://walkito.site';

const PDF_URLS = {
  pf: `${SITE}/downloads/walkito-plantar-fasciitis-exercises.pdf`,
  flat: `${SITE}/downloads/walkito-flat-feet-exercises.pdf`,
  standing: `${SITE}/downloads/walkito-standing-all-day-exercises.pdf`,
};

/** Each page in the language of the email (same paths as site/lib/i18n.ts). */
const URLS: Record<SiteLang, Record<string, string>> = {
  en: {
    pf: `${SITE}/plantar-fasciitis-exercises/`,
    flat: `${SITE}/flat-feet-exercises/`,
    morning: `${SITE}/heel-pain-in-the-morning/`,
    calfRaises: `${SITE}/calf-raises-plantar-fasciitis/`,
    calfRaiseTest: `${SITE}/calf-raise-test/`,
    printables: `${SITE}/printable-exercise-sheets/`,
    fasciaStretch: `${SITE}/exercises/plantar-fascia-stretch/`,
    calfStretch: `${SITE}/exercises/calf-stretch/`,
    soleusStretch: `${SITE}/exercises/soleus-stretch/`,
    heelRaises: `${SITE}/exercises/calf-raises/`,
    towelHeelRaise: `${SITE}/exercises/towel-heel-raise/`,
    shortFoot: `${SITE}/exercises/short-foot-exercise/`,
  },
  es: {
    pf: `${SITE}/es/ejercicios-fascitis-plantar/`,
    flat: `${SITE}/es/ejercicios-pie-plano/`,
    morning: `${SITE}/es/dolor-de-talon-al-levantarse/`,
    calfRaises: `${SITE}/es/elevaciones-de-talon-fascitis-plantar/`,
    calfRaiseTest: `${SITE}/es/test-de-elevacion-de-talon/`,
    printables: `${SITE}/es/hojas-de-ejercicios-imprimibles/`,
    fasciaStretch: `${SITE}/es/ejercicios/estiramiento-fascia-plantar/`,
    calfStretch: `${SITE}/es/ejercicios/estiramiento-de-pantorrilla/`,
    soleusStretch: `${SITE}/es/ejercicios/estiramiento-de-soleo/`,
    heelRaises: `${SITE}/es/ejercicios/elevaciones-de-talon/`,
    towelHeelRaise: `${SITE}/es/ejercicios/elevacion-de-talones-con-toalla/`,
    shortFoot: `${SITE}/es/ejercicios/pie-corto/`,
  },
  ru: {
    pf: `${SITE}/ru/bol-v-pyatke-uprazhneniya/`,
    flat: `${SITE}/ru/ploskostopie-uprazhneniya/`,
    morning: `${SITE}/ru/bol-v-pyatke-utrom/`,
    calfRaises: `${SITE}/ru/podemy-na-noski-pri-plantarnom-fastsiite/`,
    calfRaiseTest: `${SITE}/ru/test-podema-na-noski/`,
    printables: `${SITE}/ru/uprazhneniya-dlya-pechati/`,
    fasciaStretch: `${SITE}/ru/uprazhneniya/rastyazhka-plantarnoy-fastsii/`,
    calfStretch: `${SITE}/ru/uprazhneniya/rastyazhka-ikronozhnoy-myshtsy/`,
    soleusStretch: `${SITE}/ru/uprazhneniya/rastyazhka-kambalovidnoy-myshtsy/`,
    heelRaises: `${SITE}/ru/uprazhneniya/podemy-na-noski/`,
    towelHeelRaise: `${SITE}/ru/uprazhneniya/podemy-na-noski-s-polotentsem/`,
    shortFoot: `${SITE}/ru/uprazhneniya/korotkaya-stopa/`,
  },
};

const EN = URLS.en;
const ES = URLS.es;
const RU = URLS.ru;

/** App Store link with a campaign per language, so installs show up by language. */
function appStoreLink(lang: SiteLang): string {
  const ct = lang === 'en' ? 'email-7day' : `email-7day-${lang}`;
  return `https://apps.apple.com/app/id6813076846?pt=126870927&ct=${ct}&mt=8`;
}

/** The footer line saying why the email came, in the email's language. */
export function siteFooterWhy(locale: Locale | string | null | undefined): string {
  switch (siteLang(locale)) {
    case 'es':
      return 'recibes este correo porque pediste las hojas de ejercicios gratis en walkito.site.';
    case 'ru':
      return 'вы получили это письмо, потому что запросили бесплатные листы с упражнениями на walkito.site.';
    default:
      return "you're getting this because you asked for the free exercise sheets on walkito.site.";
  }
}

// ── Confirm email ───────────────────────────────────────────────────────────

export function confirmEmail(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'confirm your email for the exercise sheets',
      preheader: 'one click and they are on the way.',
      paragraphs: [
        'you asked for the free printable exercise sheets and the 7-day starter plan from walkito.',
        'click the button below to confirm your email. the sheets and the first email will arrive right after.',
      ],
      button: { label: 'confirm my email', url: '__CONFIRM_URL__' },
      ps: 'if you did not sign up, you can ignore this email.',
    },
    es: {
      subject: 'confirma tu correo para recibir las hojas de ejercicios',
      preheader: 'un clic y te las enviamos.',
      paragraphs: [
        'pediste las hojas de ejercicios gratis para imprimir y el plan de inicio de 7 días de walkito.',
        'pulsa el botón de abajo para confirmar tu correo. las hojas y el primer correo llegarán justo después.',
      ],
      button: { label: 'confirmar mi correo', url: '__CONFIRM_URL__' },
      ps: 'si no te registraste, puedes ignorar este correo.',
    },
    ru: {
      subject: 'подтвердите почту, чтобы получить листы с упражнениями',
      preheader: 'один клик, и они уже в пути.',
      paragraphs: [
        'вы запросили бесплатные листы с упражнениями для печати и 7-дневный стартовый план от walkito.',
        'нажмите кнопку ниже, чтобы подтвердить почту. листы и первое письмо придут сразу после этого.',
      ],
      button: { label: 'подтвердить почту', url: '__CONFIRM_URL__' },
      ps: 'если вы не подписывались, просто проигнорируйте это письмо.',
    },
  });
}

// ── Day 0: welcome with PDFs ────────────────────────────────────────────────

export function day0Welcome(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'your exercise sheets are here',
      preheader: 'three printable PDFs, plus a 7-day plan starting tomorrow.',
      paragraphs: [
        'here are your free exercise sheets. print them, stick them on the fridge, or save them on your phone.',
        `[plantar fasciitis exercises (PDF)](${PDF_URLS.pf})`,
        `[flat feet exercises (PDF)](${PDF_URLS.flat})`,
        `[exercises for feet that hurt from standing (PDF)](${PDF_URLS.standing})`,
        'each sheet has the exercises with a picture, the dose, when to stop, and a week log to tick off.',
        'starting tomorrow, you will get one short email a day for seven days. each one covers one piece of the routine so you can start without reading everything at once.',
        `[full guides with videos](${EN.pf})`,
      ],
      button: null,
      ps: 'see a clinician if the pain followed an injury, you cannot put weight on the foot, or you have numbness, swelling or fever. these exercises are not a diagnosis or a substitute for professional advice.',
    },
    es: {
      subject: 'aquí tienes tus hojas de ejercicios',
      preheader: 'tres PDF para imprimir y un plan de 7 días que empieza mañana.',
      paragraphs: [
        'aquí tienes tus hojas de ejercicios gratis. imprímelas, pégalas en el refrigerador o guárdalas en el celular. por ahora los PDF están en inglés; los correos de esta serie te explican cada ejercicio en español.',
        `[ejercicios para fascitis plantar (PDF en inglés)](${PDF_URLS.pf})`,
        `[ejercicios para pie plano (PDF en inglés)](${PDF_URLS.flat})`,
        `[ejercicios para pies cansados de estar de pie (PDF en inglés)](${PDF_URLS.standing})`,
        'cada hoja trae los ejercicios con una imagen, la dosis, cuándo parar y un registro semanal para ir marcando.',
        'a partir de mañana recibirás un correo corto al día durante siete días. cada uno se centra en una parte de la rutina, para que puedas empezar sin leerlo todo de golpe.',
        `[guías completas con videos](${ES.pf})`,
      ],
      button: null,
      ps: 'consulta a un profesional de la salud si el dolor empezó después de una lesión, si no puedes apoyar el pie o si tienes entumecimiento, hinchazón o fiebre. estos ejercicios no son un diagnóstico ni sustituyen el consejo de un profesional.',
    },
    ru: {
      subject: 'ваши листы с упражнениями',
      preheader: 'три PDF для печати и 7-дневный план, который начнётся завтра.',
      paragraphs: [
        'вот ваши бесплатные листы с упражнениями. распечатайте их, повесьте на холодильник или сохраните в телефоне. пока PDF есть только на английском, но письма этой серии объясняют каждое упражнение по-русски.',
        `[упражнения при плантарном фасциите (PDF на английском)](${PDF_URLS.pf})`,
        `[упражнения при плоскостопии (PDF на английском)](${PDF_URLS.flat})`,
        `[упражнения при усталости стоп от стоячей работы (PDF на английском)](${PDF_URLS.standing})`,
        'на каждом листе есть упражнения с картинкой, дозировка, когда остановиться, и журнал на неделю, где можно отмечать занятия.',
        'с завтрашнего дня семь дней подряд вы будете получать одно короткое письмо в день. каждое посвящено одной части программы, чтобы можно было начать, не читая всё сразу.',
        `[подробные гайды с видео](${RU.pf})`,
      ],
      button: null,
      ps: 'обратитесь к врачу, если боль появилась после травмы, на ногу нельзя наступить или есть онемение, отёк или температура. эти упражнения не заменяют диагноз и совет специалиста.',
    },
  });
}

// ── Day 1: morning first-step routine ───────────────────────────────────────

export function day1(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 1: the two stretches before your feet touch the floor',
      preheader: 'the first thing to do is the one you do before you stand up.',
      paragraphs: [
        'the worst moment for most people is the first few steps in the morning. two stretches, done on the edge of the bed, can take the edge off those steps.',
        '1. plantar fascia stretch: sit on the bed, cross one foot over the other knee, and pull the toes back until you feel a stretch along the arch. hold for 30 seconds, twice on each foot.',
        '2. calf stretch: stand facing a wall, one foot back, heel down, back leg straight, hips forward. hold for 30 seconds, twice on each leg. then bend the back knee slightly and hold again to reach the soleus, the deeper calf muscle.',
        'do the fascia stretch before you stand up. the calf stretch can come right after.',
        `[plantar fascia stretch, with video](${EN.fasciaStretch})`,
        `[calf stretch, with video](${EN.calfStretch})`,
        `[more on morning heel pain](${EN.morning})`,
      ],
      button: null,
      ps: 'mild discomfort during a stretch is fine. sharp pain is not. if it hurts more the next morning, ease off for a few days.',
    },
    es: {
      subject: 'día 1: los dos estiramientos antes de apoyar los pies en el suelo',
      preheader: 'lo primero se hace antes de levantarte.',
      paragraphs: [
        'para la mayoría, el peor momento son los primeros pasos de la mañana. dos estiramientos en el borde de la cama pueden suavizar esos pasos.',
        '1. estiramiento de la fascia plantar: siéntate en la cama, cruza un pie sobre la rodilla contraria y tira de los dedos hacia atrás hasta notar el estiramiento a lo largo del arco. mantén 30 segundos, dos veces con cada pie.',
        '2. estiramiento de pantorrilla: de pie frente a una pared, un pie atrás, el talón en el suelo, la pierna de atrás recta y la cadera hacia delante. mantén 30 segundos, dos veces con cada pierna. luego dobla un poco la rodilla de atrás y mantén otra vez para llegar al sóleo, el músculo más profundo de la pantorrilla.',
        'haz el estiramiento de la fascia antes de ponerte de pie. el de pantorrilla puede ir justo después.',
        `[estiramiento de la fascia plantar, con video](${ES.fasciaStretch})`,
        `[estiramiento de pantorrilla, con video](${ES.calfStretch})`,
        `[más sobre el dolor de talón al levantarse](${ES.morning})`,
      ],
      button: null,
      ps: 'una molestia leve durante el estiramiento es normal. un dolor agudo no lo es. si a la mañana siguiente duele más, baja la intensidad unos días.',
    },
    ru: {
      subject: 'день 1: две растяжки, пока ноги ещё не коснулись пола',
      preheader: 'первое упражнение делается ещё до того, как вы встали.',
      paragraphs: [
        'для большинства людей тяжелее всего первые шаги утром. две растяжки на краю кровати могут сделать эти шаги мягче.',
        '1. растяжка подошвенной фасции: сядьте на кровать, положите одну стопу на колено другой ноги и потяните пальцы на себя, пока не почувствуете растяжение вдоль свода. держите 30 секунд, по два раза на каждую стопу.',
        '2. растяжка икроножной мышцы: встаньте лицом к стене, одна нога сзади, пятка на полу, задняя нога прямая, таз подан вперёд. держите 30 секунд, по два раза на каждую ногу. потом слегка согните заднее колено и задержитесь ещё раз, чтобы растянуть камбаловидную мышцу, более глубокую мышцу голени.',
        'растяжку фасции делайте ещё до того, как встали. растяжку икр можно сразу после.',
        `[растяжка подошвенной фасции, с видео](${RU.fasciaStretch})`,
        `[растяжка икроножной мышцы, с видео](${RU.calfStretch})`,
        `[подробнее о боли в пятке по утрам](${RU.morning})`,
      ],
      button: null,
      ps: 'лёгкий дискомфорт во время растяжки допустим, острая боль нет. если на следующее утро болит сильнее, снизьте нагрузку на несколько дней.',
    },
  });
}

// ── Day 2: calf stretches properly ──────────────────────────────────────────

export function day2(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 2: why there are two calf stretches, not one',
      preheader: 'the straight-leg version misses the deeper muscle.',
      paragraphs: [
        'the 2023 heel pain guideline gives calf and fascia stretching its highest grade. two muscles make up the calf, and a straight leg only reaches the outer one.',
        'calf stretch (gastrocnemius): wall, back leg straight, heel down, 2 holds of 30 seconds each leg.',
        'soleus stretch: same position, but bend the back knee until you feel the stretch lower down, near the heel. 2 holds of 30 seconds each leg.',
        'the soleus only lets go with the knee bent, which is why you need both versions. a tight calf pulls on the heel all day, so these stretches matter even though you feel them higher up.',
        `[calf stretch](${EN.calfStretch})`,
        `[soleus stretch](${EN.soleusStretch})`,
      ],
      button: null,
      ps: 'see a clinician if the pain is getting worse despite easing the load, or if squeezing the sides of the heel hurts.',
    },
    es: {
      subject: 'día 2: por qué hay dos estiramientos de pantorrilla y no uno',
      preheader: 'con la pierna recta no llegas al músculo más profundo.',
      paragraphs: [
        'la guía de 2023 sobre el dolor de talón da a los estiramientos de pantorrilla y de fascia su calificación más alta. la pantorrilla tiene dos músculos, y con la pierna recta solo llegas al de fuera.',
        'estiramiento de pantorrilla (gastrocnemio): frente a la pared, la pierna de atrás recta, el talón en el suelo, 2 veces 30 segundos con cada pierna.',
        'estiramiento de sóleo: la misma posición, pero dobla la rodilla de atrás hasta notar el estiramiento más abajo, cerca del talón. 2 veces 30 segundos con cada pierna.',
        'el sóleo solo se suelta con la rodilla doblada, por eso necesitas las dos versiones. una pantorrilla tensa tira del talón todo el día, así que estos estiramientos importan aunque los notes más arriba.',
        `[estiramiento de pantorrilla](${ES.calfStretch})`,
        `[estiramiento de sóleo](${ES.soleusStretch})`,
      ],
      button: null,
      ps: 'consulta a un profesional de la salud si el dolor empeora aunque hayas bajado la carga, o si te duele al apretar los lados del talón.',
    },
    ru: {
      subject: 'день 2: почему растяжек икр две, а не одна',
      preheader: 'с прямой ногой глубокая мышца не растягивается.',
      paragraphs: [
        'рекомендации 2023 года по боли в пятке дают растяжке икр и фасции высшую оценку. икра состоит из двух мышц, и с прямой ногой растягивается только поверхностная.',
        'растяжка икроножной мышцы: у стены, задняя нога прямая, пятка на полу, 2 раза по 30 секунд на каждую ногу.',
        'растяжка камбаловидной мышцы: то же положение, но согните заднее колено, пока не почувствуете растяжение ниже, ближе к пятке. 2 раза по 30 секунд на каждую ногу.',
        'камбаловидная мышца расслабляется только при согнутом колене, поэтому нужны оба варианта. напряжённая икра весь день тянет пятку, так что эти растяжки важны, хотя чувствуются они выше.',
        `[растяжка икроножной мышцы](${RU.calfStretch})`,
        `[растяжка камбаловидной мышцы](${RU.soleusStretch})`,
      ],
      button: null,
      ps: 'обратитесь к врачу, если боль усиливается, хотя вы снизили нагрузку, или если больно сжимать пятку с боков.',
    },
  });
}

// ── Day 3: seated heel raises and double-leg heel raises ────────────────────

export function day3(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 3: your first calf strength exercise',
      preheader: 'start seated, move to standing when it feels easy.',
      paragraphs: [
        'stretching loosens the calf. strength work is what makes it stay that way. the 2023 guideline grades strength training B for heel pain.',
        'seated heel raises: sit with your feet flat and press up through the balls of your feet. hands on the knees add resistance. 3 sets of 10, both feet.',
        'heel raises on both feet: stand on both feet, rise straight up over the big toes, then lower slowly. 3 sets of 10.',
        'start with seated raises for the first few sessions. once they feel easy, move to standing. you are building up to single-leg raises, but there is no rush to get there.',
        `[calf raises guide](${EN.calfRaises})`,
        `[heel raises exercise page](${EN.heelRaises})`,
      ],
      button: null,
      ps: 'if the pain is worse the next morning, drop back to the seated version for a few more days.',
    },
    es: {
      subject: 'día 3: tu primer ejercicio de fuerza para la pantorrilla',
      preheader: 'empieza con la versión sentada y pasa a la de pie cuando te resulte fácil.',
      paragraphs: [
        'el estiramiento afloja la pantorrilla. el trabajo de fuerza es lo que hace que se mantenga así. la guía de 2023 le da al entrenamiento de fuerza una B para el dolor de talón.',
        'elevaciones de talón en posición sentada: siéntate con los pies planos y empuja hacia arriba con la parte delantera del pie. las manos sobre las rodillas añaden resistencia. 3 series de 10, con los dos pies.',
        'elevaciones de talón con los dos pies: de pie sobre los dos pies, sube en línea recta sobre los dedos gordos y luego baja despacio. 3 series de 10.',
        'las primeras sesiones, haz la versión sentada. cuando te resulte fácil, pasa a hacerlas de pie. la meta a largo plazo son las elevaciones con una pierna, pero no hay prisa por llegar.',
        `[guía de elevaciones de talón](${ES.calfRaises})`,
        `[ejercicio de elevaciones de talón](${ES.heelRaises})`,
      ],
      button: null,
      ps: 'si a la mañana siguiente el dolor es mayor, vuelve a la versión sentada unos días más.',
    },
    ru: {
      subject: 'день 3: первое силовое упражнение для икр',
      preheader: 'начните сидя и переходите к варианту стоя, когда станет легко.',
      paragraphs: [
        'растяжка расслабляет икру, а силовая работа помогает сохранить этот эффект. рекомендации 2023 года оценивают силовые упражнения при боли в пятке на B.',
        'подъёмы на носки сидя: сядьте, стопы стоят ровно на полу, и поднимайте пятки, опираясь на переднюю часть стопы. руки на коленях добавляют сопротивление. 3 подхода по 10, обе ноги.',
        'подъёмы на носки на двух ногах: встаньте на обе ноги, поднимитесь прямо вверх над большими пальцами и медленно опуститесь. 3 подхода по 10.',
        'первые несколько занятий делайте подъёмы сидя. когда станет легко, переходите к подъёмам стоя. постепенно вы дойдёте до подъёмов на одной ноге, но торопиться не нужно.',
        `[гайд по подъёмам на носки](${RU.calfRaises})`,
        `[упражнение «подъёмы на носки»](${RU.heelRaises})`,
      ],
      button: null,
      ps: 'если на следующее утро боль сильнее, вернитесь к варианту сидя ещё на несколько дней.',
    },
  });
}

// ── Day 4: short foot and arch ──────────────────────────────────────────────

export function day4(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 4: the short foot exercise for your arch',
      preheader: 'pull the ball of the foot toward the heel without curling the toes.',
      paragraphs: [
        'the short foot is the core of arch work. you shorten the foot by pulling the ball of the foot toward the heel, so the arch lifts, without curling the toes.',
        'short foot, seated: sit with your feet flat. pull the ball of the foot toward the heel so the arch lifts. keep the toes relaxed and flat. 3 sets of 8, hold 5 seconds, each foot.',
        'once the seated version feels natural, try it standing on both feet. then, eventually, on one foot.',
        'if your main issue is heel pain rather than flat feet, the short foot is still useful. it wakes up the small muscles of the arch that support the plantar fascia from above.',
        `[short foot exercise page](${EN.shortFoot})`,
        `[flat feet exercises guide](${EN.flat})`,
      ],
      button: null,
      ps: 'a rigid flat foot, one that stays flat even when the foot is off the ground, is structural. exercise will not change its shape. the short foot is for flexible flat feet.',
    },
    es: {
      subject: 'día 4: el ejercicio de pie corto para tu arco',
      preheader: 'acerca la parte delantera del pie al talón sin encoger los dedos.',
      paragraphs: [
        'el pie corto es la base del trabajo del arco. acortas el pie acercando la parte delantera hacia el talón, así el arco se eleva, sin encoger los dedos.',
        'pie corto, en posición sentada: siéntate con los pies planos. acerca la parte delantera del pie hacia el talón para que el arco se eleve. mantén los dedos relajados y planos. 3 series de 8, mantén 5 segundos, con cada pie.',
        'cuando la versión sentada te salga con naturalidad, pruébala de pie sobre los dos pies. y más adelante, sobre un pie.',
        'si tu problema principal es el dolor de talón y no el pie plano, el pie corto también sirve. activa los músculos pequeños del arco, que sostienen la fascia plantar desde arriba.',
        `[ejercicio de pie corto](${ES.shortFoot})`,
        `[guía de ejercicios para pie plano](${ES.flat})`,
      ],
      button: null,
      ps: 'un pie plano rígido, que sigue plano incluso cuando el pie no toca el suelo, es estructural. el ejercicio no cambiará su forma. el pie corto es para el pie plano flexible.',
    },
    ru: {
      subject: 'день 4: упражнение «короткая стопа» для свода',
      preheader: 'подтяните переднюю часть стопы к пятке, не поджимая пальцы.',
      paragraphs: [
        '«короткая стопа» лежит в основе работы со сводом. вы укорачиваете стопу, подтягивая её переднюю часть к пятке, и свод поднимается. пальцы при этом не поджимаются.',
        '«короткая стопа» сидя: сядьте, стопы ровно на полу. подтяните переднюю часть стопы к пятке, чтобы свод поднялся. пальцы расслаблены и лежат ровно. 3 подхода по 8, удержание 5 секунд, каждая стопа.',
        'когда вариант сидя станет привычным, попробуйте стоя на двух ногах. а со временем и на одной.',
        'даже если вас больше беспокоит боль в пятке, а не плоскостопие, «короткая стопа» полезна. она включает мелкие мышцы свода, которые поддерживают подошвенную фасцию сверху.',
        `[упражнение «короткая стопа»](${RU.shortFoot})`,
        `[гайд по упражнениям при плоскостопии](${RU.flat})`,
      ],
      button: null,
      ps: 'жёсткое плоскостопие, когда стопа остаётся плоской даже без опоры на неё, связано со строением стопы. упражнения не изменят её форму. «короткая стопа» нужна при гибком плоскостопии.',
    },
  });
}

// ── Day 5: how to use the morning pain score ────────────────────────────────

export function day5(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 5: what your first steps tell you about today',
      preheader: 'the first steps are the clearest signal of how yesterday went.',
      paragraphs: [
        'morning pain on the first steps is the pattern most often linked to plantar fasciitis. it usually eases once you get moving, and it comes back after you sit for a while.',
        'what it tells you: if your first steps are worse the next morning after a harder day, that day asked more than the heel could take. if they are the same or better, you can hold steady or move up.',
        'on a bad morning, keep the stretches and drop the heel raises for the day. on a good morning, do both.',
        "the walkito app asks about morning pain every day for the same reason. it decides how much today's session asks of you. the pain-free-mornings goal means 14 days in a row where the morning score is 1 or less on a 0-10 scale.",
        `[more on morning heel pain](${EN.morning})`,
      ],
      button: null,
      ps: 'if it wakes you at night, or both heels hurt and other joints are swollen or stiff, see a clinician.',
    },
    es: {
      subject: 'día 5: lo que tus primeros pasos dicen de hoy',
      preheader: 'los primeros pasos son la señal más clara de cómo te fue ayer.',
      paragraphs: [
        'el dolor en los primeros pasos de la mañana es el patrón que más se asocia con la fascitis plantar. suele aliviarse cuando empiezas a moverte y vuelve después de pasar un rato sentado.',
        'qué te dice: si después de un día más exigente los primeros pasos de la mañana duelen más, ese día le pidió al talón más de lo que podía dar. si están igual o mejor, puedes mantener la carga o subirla un poco.',
        'en una mañana mala, mantén los estiramientos y deja las elevaciones de talón por ese día. en una mañana buena, haz las dos cosas.',
        'la app walkito pregunta por el dolor de la mañana todos los días por la misma razón: de eso depende cuánto te pide la sesión de hoy. el objetivo de mañanas sin dolor son 14 días seguidos con una puntuación de 1 o menos en una escala de 0 a 10.',
        `[más sobre el dolor de talón al levantarse](${ES.morning})`,
      ],
      button: null,
      ps: 'si te despierta por la noche, o te duelen los dos talones y tienes otras articulaciones hinchadas o rígidas, consulta a un profesional de la salud.',
    },
    ru: {
      subject: 'день 5: что первые шаги говорят о сегодняшнем дне',
      preheader: 'первые шаги точнее всего показывают, как прошёл вчерашний день.',
      paragraphs: [
        'боль на первых шагах утром чаще всего связывают с плантарным фасциитом. обычно она стихает, когда вы расходитесь, и возвращается, если какое-то время посидеть.',
        'что это значит: если после более нагруженного дня первые шаги утром болят сильнее, тот день потребовал от пятки больше, чем она могла выдержать. если так же или лучше, можно оставить нагрузку прежней или немного её увеличить.',
        'в плохое утро оставьте растяжки, а подъёмы на носки в этот день пропустите. в хорошее утро делайте и то и другое.',
        'приложение walkito каждый день спрашивает про утреннюю боль по той же причине: от этого зависит, насколько тяжёлым будет сегодняшнее занятие. цель «лёгкие утра» означает 14 дней подряд, когда утренняя боль не выше 1 по шкале от 0 до 10.',
        `[подробнее о боли в пятке по утрам](${RU.morning})`,
      ],
      button: null,
      ps: 'если боль будит вас ночью или болят обе пятки, а другие суставы опухают или скованы, обратитесь к врачу.',
    },
  });
}

// ── Day 6: towel heel raise (Rathleff) with the stop rule ───────────────────

export function day6(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 6: the towel heel raise and when to stop a set',
      preheader: 'the towel under the toes is what makes this work the fascia.',
      paragraphs: [
        'the towel heel raise comes from a 48-person trial by Rathleff and colleagues. the rolled towel under the toes dorsiflexes them, which loads the plantar fascia and not just the calf.',
        'towel heel raise: stand on one foot on a step, with a rolled towel under your toes. take 3 seconds to rise, hold for 2 at the top, and take 3 seconds to lower. 4 sets of 10, each leg.',
        'this is the hardest step in the calf strength ladder. you do not start here. work up through seated raises, double-leg standing raises, and the heel raise hold first.',
        'the stop rule: if any exercise takes your pain to 6 out of 10 or more, stop for the day. that is the point where walkito ends a session. mild discomfort during the work is fine.',
        `[towel heel raise](${EN.towelHeelRaise})`,
        `[calf raises guide](${EN.calfRaises})`,
      ],
      button: null,
      ps: 'see a clinician if the pain is sharp, or getting worse despite easing the load.',
    },
    es: {
      subject: 'día 6: la elevación de talones con toalla y cuándo parar una serie',
      preheader: 'la toalla bajo los dedos es lo que hace trabajar a la fascia.',
      paragraphs: [
        'la elevación de talones con toalla viene de un ensayo con 48 personas de Rathleff y colaboradores. la toalla enrollada bajo los dedos los lleva hacia arriba, y así se carga la fascia plantar y no solo la pantorrilla.',
        'elevación de talones con toalla: de pie sobre un pie en un escalón, con una toalla enrollada bajo los dedos. sube en 3 segundos, mantén 2 arriba y baja en 3 segundos. 4 series de 10, con cada pierna.',
        'es el paso más difícil de la escalera de fuerza de la pantorrilla. no se empieza por aquí. antes pasa por las elevaciones en posición sentada, las elevaciones de pie con las dos piernas y la elevación de talón mantenida.',
        'la regla para parar: si algún ejercicio sube tu dolor a 6 de 10 o más, detente por hoy. es el punto en el que walkito termina una sesión. una molestia leve durante el trabajo es normal.',
        `[elevación de talones con toalla](${ES.towelHeelRaise})`,
        `[guía de elevaciones de talón](${ES.calfRaises})`,
      ],
      button: null,
      ps: 'consulta a un profesional de la salud si el dolor es agudo o empeora aunque hayas bajado la carga.',
    },
    ru: {
      subject: 'день 6: подъёмы на носки с полотенцем и когда остановить подход',
      preheader: 'именно полотенце под пальцами нагружает фасцию.',
      paragraphs: [
        'подъёмы на носки с полотенцем взяты из исследования Ратлеффа и коллег с участием 48 человек. свёрнутое полотенце под пальцами приподнимает их, и нагрузка приходится на подошвенную фасцию, а не только на икру.',
        'подъём на носок с полотенцем: встаньте одной ногой на ступеньку, под пальцами свёрнутое полотенце. 3 секунды подъём, 2 секунды удержание наверху, 3 секунды опускание. 4 подхода по 10 на каждую ногу.',
        'это самая сложная ступень в лестнице силовых упражнений для икр. с неё не начинают. сначала пройдите подъёмы сидя, подъёмы стоя на двух ногах и удержание на носках.',
        'правило остановки: если любое упражнение поднимает боль до 6 из 10 или выше, на сегодня хватит. именно в этот момент walkito завершает занятие. лёгкий дискомфорт во время работы допустим.',
        `[подъёмы на носки с полотенцем](${RU.towelHeelRaise})`,
        `[гайд по подъёмам на носки](${RU.calfRaises})`,
      ],
      button: null,
      ps: 'обратитесь к врачу, если боль острая или усиливается, хотя вы снизили нагрузку.',
    },
  });
}

// ── Day 7: recap, calf raise test, soft app mention ─────────────────────────

export function day7(locale: Locale): SiteEmailContent {
  return pick(locale, {
    en: {
      subject: 'day 7: where you are and what comes next',
      preheader: 'a simple test to see where your calf strength stands.',
      paragraphs: [
        'you have the stretches, the calf strength ladder, the arch work and the morning pain check. that is the core of the routine.',
        'the calf raise test: stand on one foot and do as many single-leg calf raises as you can, at a steady pace, until you cannot rise to full height. count them. 25 is the target. test again in two weeks and compare.',
        'a few things to remember: do the fascia stretch before your feet touch the floor. do the calf and soleus stretches most days. add the strength work on strength days and drop it on bad mornings. stop any exercise at 6 out of 10 pain.',
        `[calf raise test](${EN.calfRaiseTest})`,
        `[all the guides](${EN.printables})`,
        "if you want the plan to adjust for you each morning, that is what the walkito app does. it asks how your feet feel, picks today's session, tracks your pain and tests your progress every two weeks.",
        `[get walkito on the app store](${appStoreLink('en')})`,
      ],
      button: null,
      ps: 'these exercises are not a diagnosis. if the pain is not improving after several weeks of exercise and a lighter load, see a clinician. you can reply to this email if you have questions.',
    },
    es: {
      subject: 'día 7: dónde estás y qué sigue',
      preheader: 'una prueba sencilla para ver cómo está la fuerza de tu pantorrilla.',
      paragraphs: [
        'ya tienes los estiramientos, la escalera de fuerza de la pantorrilla, el trabajo del arco y el control del dolor de la mañana. esa es la base de la rutina.',
        'el test de elevación de talón: de pie sobre un pie, haz tantas elevaciones de talón con una pierna como puedas, a ritmo constante, hasta que ya no subas a la altura completa. cuéntalas. 25 es la meta. repite el test en dos semanas y compara.',
        'algunas cosas para recordar: haz el estiramiento de la fascia antes de apoyar los pies en el suelo. haz los estiramientos de pantorrilla y de sóleo casi todos los días. suma el trabajo de fuerza en los días de fuerza y déjalo en las mañanas malas. detén cualquier ejercicio si el dolor llega a 6 de 10.',
        `[test de elevación de talón](${ES.calfRaiseTest})`,
        `[todas las hojas de ejercicios](${ES.printables})`,
        'si quieres que el plan se ajuste a ti cada mañana, eso es lo que hace la app walkito. pregunta cómo están tus pies, elige la sesión de hoy, sigue tu dolor y mide tu progreso cada dos semanas.',
        `[descarga walkito en el app store](${appStoreLink('es')})`,
      ],
      button: null,
      ps: 'estos ejercicios no son un diagnóstico. si el dolor no mejora después de varias semanas de ejercicio y menos carga, consulta a un profesional de la salud. puedes responder a este correo si tienes preguntas.',
    },
    ru: {
      subject: 'день 7: где вы сейчас и что дальше',
      preheader: 'простой тест, чтобы понять, насколько сильны ваши икры.',
      paragraphs: [
        'у вас уже есть растяжки, лестница силовых упражнений для икр, работа со сводом и проверка утренней боли. это основа программы.',
        'тест подъёма на носки: встаньте на одну ногу и сделайте столько подъёмов на носок, сколько сможете, в ровном темпе, пока не перестанете подниматься на полную высоту. посчитайте их. цель 25 раз. повторите тест через две недели и сравните.',
        'что стоит запомнить: растяжку фасции делайте до того, как встали с кровати. растяжки икроножной и камбаловидной мышц делайте почти каждый день. силовые упражнения добавляйте в силовые дни и пропускайте в плохие утра. останавливайте любое упражнение, если боль доходит до 6 из 10.',
        `[тест подъёма на носки](${RU.calfRaiseTest})`,
        `[все листы с упражнениями](${RU.printables})`,
        'если хотите, чтобы план подстраивался под вас каждое утро, это и делает приложение walkito. оно спрашивает, как ваши стопы, подбирает занятие на сегодня, следит за болью и проверяет прогресс каждые две недели.',
        `[скачать walkito в app store](${appStoreLink('ru')})`,
      ],
      button: null,
      ps: 'эти упражнения не заменяют диагноз. если за несколько недель упражнений и сниженной нагрузки лучше не стало, обратитесь к врачу. если есть вопросы, просто ответьте на это письмо.',
    },
  });
}

// ── Lookup ──────────────────────────────────────────────────────────────────

const SEQUENCE: Record<number, (locale: Locale) => SiteEmailContent> = {
  0: day0Welcome,
  1: day1,
  2: day2,
  3: day3,
  4: day4,
  5: day5,
  6: day6,
  7: day7,
};

export function siteLeadEmail(day: number, locale: Locale): SiteEmailContent | null {
  const fn = SEQUENCE[day];
  return fn != null ? fn(locale) : null;
}

export const SITE_LEAD_EMAIL_KEYS = [
  'site_confirm',
  'site_day0',
  'site_day1',
  'site_day2',
  'site_day3',
  'site_day4',
  'site_day5',
  'site_day6',
  'site_day7',
] as const;

export type SiteLeadEmailKey = (typeof SITE_LEAD_EMAIL_KEYS)[number];
