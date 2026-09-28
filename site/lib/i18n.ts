/**
 * The site's three languages, and every string the shared chrome needs.
 *
 * The app ships in English, Russian and Spanish, so the site does too — and the
 * Russian and Spanish results for "flat feet exercises" are far thinner than
 * the English ones, which makes them the cheapest first page a new domain can
 * reach. Only the home page and the guides are translated. The program,
 * evidence, FAQ and legal pages stay English: they carry clinical figures and
 * legal wording, and a machine-quality translation of either is worse than an
 * honest English page.
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
  es: 'es_ES',
};

const en = {
  soonHeader: 'Coming soon',
  downloadHeader: 'Download App',
  soonBadge: 'Coming soon to the App Store',
  getBadge: 'Get the app',
  getBadgeLabel: 'Get Walkito on the App Store',
  navProgram: 'Program',
  navEvidence: 'Evidence',
  navQuestions: 'Questions',
  navSupport: 'Support',
  navPrivacy: 'Privacy',
  navTerms: 'Terms',
  navFlatFeet: 'Flat feet',
  navHeelPain: 'Heel pain',
  language: 'Language',
  sourcesHeading: 'Sources',
  guidesHeading: 'Guides',
  updated: 'Updated',
  byline: 'Walkito editorial team',
  keyPoints: 'Key points',
  faqHeading: 'Questions people ask',
  relatedHeading: 'Related guides',
  navAbout: 'About',
  notice:
    'Walkito is an exercise program. It does not diagnose and does not treat. If pain is sharp, getting worse, or stopping you sleeping, see a clinician.',
};

type Chrome = Record<keyof typeof en, string>;

const ru: Chrome = {
  soonHeader: 'Скоро',
  downloadHeader: 'Скачать',
  soonBadge: 'Скоро в App Store',
  getBadge: 'Скачать приложение',
  getBadgeLabel: 'Скачать Walkito в App Store',
  navProgram: 'Программа',
  navEvidence: 'Исследования',
  navQuestions: 'Вопросы',
  navSupport: 'Поддержка',
  navPrivacy: 'Конфиденциальность',
  navTerms: 'Условия',
  navFlatFeet: 'Плоскостопие',
  navHeelPain: 'Боль в пятке',
  language: 'Язык',
  sourcesHeading: 'Источники',
  guidesHeading: 'Гайды',
  updated: 'Обновлено',
  byline: 'Редакция Walkito',
  keyPoints: 'Главное',
  faqHeading: 'Частые вопросы',
  relatedHeading: 'Похожие гайды',
  navAbout: 'О проекте',
  notice:
    'Walkito — программа упражнений. Она не ставит диагноз и не лечит. Если боль острая, усиливается или мешает спать, обратитесь к врачу.',
};

const es: Chrome = {
  soonHeader: 'Muy pronto',
  downloadHeader: 'Descargar',
  soonBadge: 'Muy pronto en el App Store',
  getBadge: 'Descargar la app',
  getBadgeLabel: 'Descarga Walkito en el App Store',
  navProgram: 'Programa',
  navEvidence: 'Evidencia',
  navQuestions: 'Preguntas',
  navSupport: 'Soporte',
  navPrivacy: 'Privacidad',
  navTerms: 'Términos',
  navFlatFeet: 'Pie plano',
  navHeelPain: 'Dolor de talón',
  language: 'Idioma',
  sourcesHeading: 'Fuentes',
  guidesHeading: 'Guías',
  updated: 'Actualizado',
  byline: 'Equipo editorial de Walkito',
  keyPoints: 'Lo esencial',
  faqHeading: 'Preguntas frecuentes',
  relatedHeading: 'Guías relacionadas',
  navAbout: 'Sobre Walkito',
  notice:
    'Walkito es un programa de ejercicios. No diagnostica ni trata. Si el dolor es agudo, va a peor o no te deja dormir, consulta a un profesional sanitario.',
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
} as const satisfies Record<string, Record<Lang, string>>;

export type TranslatedPage = keyof typeof TRANSLATED;

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
