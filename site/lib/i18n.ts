/**
 * The site's three languages, and every string the shared chrome needs.
 *
 * The app ships in English, Russian and Spanish, so the site does too — and the
 * Russian and Spanish results for "flat feet exercises" are far thinner than
 * the English ones, which makes them the cheapest first page a new domain can
 * reach. The home page, the guides and the three pages App Store review reads
 * (support, privacy, terms) are translated. The program, evidence and FAQ
 * pages stay English: they carry clinical figures, and a machine-quality
 * translation of those is worse than an honest English page. Where a legal
 * translation and the English differ, the English applies, and each
 * translated legal page says so.
 *
 * Typed off English like the app's catalogue: a key missing in Russian or
 * Spanish fails `tsc`.
 */
export const LANGS = ['en', 'ru', 'es'] as const;
export type Lang = (typeof LANGS)[number];

/** Endonyms, never translated — the switcher is read by someone who cannot yet
 * read the language the page is in. Same rule as the app's picker. */
export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
};

/** The Open Graph locale for each language. */
export const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  es: 'es_MX',
};

const en = {
  headerButton: 'Get the app',
  getBadge: 'Download on the App Store',
  getBadgeLabel: 'Download Walkito on the App Store',
  navProgram: 'Program',
  navEvidence: 'Evidence',
  navQuestions: 'Questions',
  navSupport: 'Support',
  navPrivacy: 'Privacy',
  navTerms: 'Terms',
  socialTikTok: 'Walkito on TikTok',
  socialInstagram: 'Walkito on Instagram',
  navFlatFeet: 'Flat feet',
  navHeelPain: 'Heel pain',
  language: 'Language',
  sourcesHeading: 'Sources',
  guidesHeading: 'Guides',
  updated: 'Updated',
  keyPoints: 'Key points',
  contents: 'On this page',
  faqHeading: 'Questions people ask',
  relatedHeading: 'Related guides',
  navAbout: 'About',
  notice:
    'Walkito is an exercise program. It does not diagnose and does not treat. If pain is sharp, getting worse, or stopping you sleeping, see a clinician.',
};

type Chrome = Record<keyof typeof en, string>;

const ru: Chrome = {
  headerButton: 'Скачать приложение',
  getBadge: 'Скачать в App Store',
  getBadgeLabel: 'Скачать Walkito в App Store',
  navProgram: 'Программа',
  navEvidence: 'Исследования',
  navQuestions: 'Вопросы',
  navSupport: 'Поддержка',
  navPrivacy: 'Конфиденциальность',
  navTerms: 'Условия',
  socialTikTok: 'Walkito в TikTok',
  socialInstagram: 'Walkito в Instagram',
  navFlatFeet: 'Плоскостопие',
  navHeelPain: 'Боль в пятке',
  language: 'Язык',
  sourcesHeading: 'Источники',
  guidesHeading: 'Гайды',
  updated: 'Обновлено',
  keyPoints: 'Главное',
  contents: 'На этой странице',
  faqHeading: 'Частые вопросы',
  relatedHeading: 'Похожие гайды',
  navAbout: 'О проекте',
  notice:
    'Walkito даёт программу упражнений. Он не ставит диагноз и не лечит. Если боль острая, усиливается или мешает спать, обратитесь к врачу.',
};

const es: Chrome = {
  headerButton: 'Descargar la app',
  getBadge: 'Descargar en el App Store',
  getBadgeLabel: 'Descargar Walkito en el App Store',
  navProgram: 'Programa',
  navEvidence: 'Evidencia',
  navQuestions: 'Preguntas',
  navSupport: 'Soporte',
  navPrivacy: 'Privacidad',
  navTerms: 'Términos',
  socialTikTok: 'Walkito en TikTok',
  socialInstagram: 'Walkito en Instagram',
  navFlatFeet: 'Pie plano',
  navHeelPain: 'Dolor de talón',
  language: 'Idioma',
  sourcesHeading: 'Fuentes',
  guidesHeading: 'Guías',
  updated: 'Actualizado',
  keyPoints: 'Lo esencial',
  contents: 'En esta página',
  faqHeading: 'Preguntas frecuentes',
  relatedHeading: 'Guías relacionadas',
  navAbout: 'Sobre Walkito',
  notice:
    'Walkito es un programa de ejercicios. No diagnostica ni trata. Si el dolor es agudo, empeora o no te deja dormir, consulta a un profesional de la salud.',
};

export const CHROME: Record<Lang, Chrome> = { en, ru, es };

/**
 * The pages that exist in more than one language, and where each one lives.
 *
 * One table feeding hreflang, the sitemap and the footer's language switcher,
 * so the three cannot disagree. hreflang that points A → B without B → A is
 * ignored by Google, and a table is the only shape where that cannot happen.
 */
export const TRANSLATED = {
  home: { en: '/', ru: '/ru/', es: '/es/' },
  flatFeet: {
    en: '/flat-feet-exercises/',
    ru: '/ru/ploskostopie-uprazhneniya/',
    es: '/es/ejercicios-pie-plano/',
  },
  heelPain: {
    en: '/plantar-fasciitis-exercises/',
    ru: '/ru/bol-v-pyatke-uprazhneniya/',
    es: '/es/ejercicios-fascitis-plantar/',
  },
  about: {
    en: '/about/',
    ru: '/ru/o-proekte/',
    es: '/es/sobre-walkito/',
  },
  support: { en: '/support/', ru: '/ru/podderzhka/', es: '/es/soporte/' },
  privacy: { en: '/privacy/', ru: '/ru/konfidentsialnost/', es: '/es/privacidad/' },
  terms: { en: '/terms/', ru: '/ru/usloviya/', es: '/es/terminos/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type TranslatedPage = keyof typeof TRANSLATED;

/**
 * Articles that exist in English only, for now. No hreflang, no language
 * switcher: a page claims a translation only once one is written.
 */
export const EN_ONLY = {
  standing: '/feet-hurt-standing-all-day/',
  calfRaises: '/calf-raises-plantar-fasciitis/',
  achilles: '/achilles-tendonitis-exercises/',
  shinSplints: '/shin-splints-exercises/',
  morningHeelPain: '/heel-pain-in-the-morning/',
  pfDuration: '/how-long-does-plantar-fasciitis-last/',
  ballOfFoot: '/ball-of-foot-pain/',
  nurses: '/nurses-foot-pain/',
  standingDesk: '/standing-desk-foot-pain/',
  bestApp: '/best-app-for-plantar-fasciitis/',
  vsExakt: '/walkito-vs-exakt-health/',
  exPlantarFasciaStretch: '/exercises/plantar-fascia-stretch/',
  exCalfStretch: '/exercises/calf-stretch/',
  exSoleusStretch: '/exercises/soleus-stretch/',
  exFootRoll: '/exercises/foot-roll/',
  exAnkleRocks: '/exercises/ankle-rocks/',
  exTowelHeelRaise: '/exercises/towel-heel-raise/',
  exCalfRaises: '/exercises/calf-raises/',
  exEccentricHeelDrops: '/exercises/eccentric-heel-drops/',
  exTibialisRaises: '/exercises/tibialis-raises/',
  exSingleLegBalance: '/exercises/single-leg-balance/',
  exShortFoot: '/exercises/short-foot-exercise/',
  exTowelScrunch: '/exercises/towel-scrunch/',
  exToeSpread: '/exercises/toe-spread/',
  exBigToeLift: '/exercises/big-toe-lift/',
  exBandInversion: '/exercises/ankle-inversion-band/',
  exHipAbduction: '/exercises/hip-abduction/',
  calfRaiseTest: '/calf-raise-test/',
  hubPlantarFasciitis: '/plantar-fasciitis/',
  hubFlatFeet: '/flat-feet/',
} as const;

export type EnglishPage = keyof typeof EN_ONLY;

/**
 * Spanish versions of the English-only articles: the same page, in Spanish,
 * without a Russian one (yet). Search Console shows Spanish as the biggest
 * demand on the site, so Spanish gets the whole library first.
 *
 * A page here gets hreflang en <-> es (plus x-default -> en) in its head and
 * in the sitemap, and a two-language switcher in the footer. A page claims a
 * Spanish version only once `ARTICLES_ES` (`lib/guides/articles-es.ts`) has it.
 */
export const ES_ARTICLES: Record<EnglishPage, string> = {
  standing: '/es/dolor-de-pies-por-estar-de-pie/',
  calfRaises: '/es/elevaciones-de-talon-fascitis-plantar/',
  achilles: '/es/ejercicios-tendinitis-aquiles/',
  shinSplints: '/es/ejercicios-periostitis-tibial/',
  morningHeelPain: '/es/dolor-de-talon-al-levantarse/',
  pfDuration: '/es/cuanto-dura-la-fascitis-plantar/',
  ballOfFoot: '/es/metatarsalgia-dolor-planta-del-pie/',
  nurses: '/es/dolor-de-pies-enfermeras/',
  standingDesk: '/es/escritorio-de-pie-dolor-de-pies/',
  bestApp: '/es/mejor-app-fascitis-plantar/',
  vsExakt: '/es/walkito-vs-exakt-health/',
  exPlantarFasciaStretch: '/es/ejercicios/estiramiento-fascia-plantar/',
  exCalfStretch: '/es/ejercicios/estiramiento-de-pantorrilla/',
  exSoleusStretch: '/es/ejercicios/estiramiento-de-soleo/',
  exFootRoll: '/es/ejercicios/masaje-plantar-con-pelota/',
  exAnkleRocks: '/es/ejercicios/movilidad-de-tobillo/',
  exTowelHeelRaise: '/es/ejercicios/elevacion-de-talones-con-toalla/',
  exCalfRaises: '/es/ejercicios/elevaciones-de-talon/',
  exEccentricHeelDrops: '/es/ejercicios/excentricos-de-talon/',
  exTibialisRaises: '/es/ejercicios/elevaciones-de-tibial-anterior/',
  exSingleLegBalance: '/es/ejercicios/equilibrio-a-una-pierna/',
  exShortFoot: '/es/ejercicios/pie-corto/',
  exTowelScrunch: '/es/ejercicios/recoger-toalla-con-los-dedos/',
  exToeSpread: '/es/ejercicios/separar-los-dedos-del-pie/',
  exBigToeLift: '/es/ejercicios/levantar-el-dedo-gordo/',
  exBandInversion: '/es/ejercicios/inversion-de-tobillo-con-banda/',
  exHipAbduction: '/es/ejercicios/abduccion-de-cadera/',
  calfRaiseTest: '/es/test-de-elevacion-de-talon/',
  hubPlantarFasciitis: '/es/fascitis-plantar/',
  hubFlatFeet: '/es/pie-plano/',
};

/** hreflang for an English article that also exists in Spanish. */
export function alternatesEnEs(page: EnglishPage, lang: 'en' | 'es') {
  const paths = { en: EN_ONLY[page], es: ES_ARTICLES[page] };
  return {
    canonical: paths[lang],
    languages: { en: paths.en, es: paths.es, 'x-default': paths.en },
  };
}

export function isTranslatedPage(page: TranslatedPage | EnglishPage): page is TranslatedPage {
  return page in TRANSLATED;
}

/**
 * `alternates` for a translated page's metadata: its own canonical, and every
 * language version including itself, plus `x-default` on English.
 */
export function alternatesFor(page: TranslatedPage, lang: Lang) {
  const paths = TRANSLATED[page];
  return {
    canonical: paths[lang],
    languages: { en: paths.en, ru: paths.ru, es: paths.es, 'x-default': paths.en },
  };
}
