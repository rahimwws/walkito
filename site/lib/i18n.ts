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
export const LANGS = ['en', 'ru', 'es', 'pt', 'fr', 'it', 'de'] as const;
export type Lang = (typeof LANGS)[number];

/** Endonyms, never translated — the switcher is read by someone who cannot yet
 * read the language the page is in. Same rule as the app's picker. */
export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  it: 'Italiano',
  de: 'Deutsch',
};

/**
 * Languages that have every page (articles, exercise library, program,
 * evidence, FAQ). Portuguese, French, Italian and German started on
 * 8 October 2026 with the core pages only: home, the two main guides, about,
 * support, privacy and terms. Where a page has no version in a newer
 * language, links point at the English page.
 */
export const FULL_LANGS = ['en', 'ru', 'es'] as const;
export type FullLang = (typeof FULL_LANGS)[number];
export function isFullLang(lang: Lang): lang is FullLang {
  return (FULL_LANGS as readonly string[]).includes(lang);
}

/** The Open Graph locale for each language. */
export const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  es: 'es_MX',
  pt: 'pt_BR',
  fr: 'fr_FR',
  it: 'it_IT',
  de: 'de_DE',
};

const en = {
  headerButton: 'Get the app',
  getBadge: 'Download on the App Store',
  getBadgeLabel: 'Download Walkito on the App Store',
  navHome: 'Home',
  menuOpen: 'Menu',
  menuClose: 'Close menu',
  getTitle: 'Scan to download Walkito',
  getScan: 'Point your phone’s camera at the code. It opens the right store for your phone.',
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, coming soon',
  getClose: 'Close',
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
  navHome: 'Главная',
  menuOpen: 'Меню',
  menuClose: 'Закрыть меню',
  getTitle: 'Отсканируйте, чтобы скачать Walkito',
  getScan: 'Наведите камеру телефона на код. Он откроет нужный магазин для вашего телефона.',
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, скоро',
  getClose: 'Закрыть',
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
  navHome: 'Inicio',
  menuOpen: 'Menú',
  menuClose: 'Cerrar menú',
  getTitle: 'Escanea para descargar Walkito',
  getScan: 'Apunta la cámara del teléfono al código. Abre la tienda que corresponde a tu teléfono.',
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, muy pronto',
  getClose: 'Cerrar',
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

const pt: Chrome = {
  headerButton: 'Baixar o app',
  getBadge: 'Baixar na App Store',
  getBadgeLabel: 'Baixar o Walkito na App Store',
  navHome: 'Início',
  menuOpen: 'Menu',
  menuClose: 'Fechar menu',
  getTitle: 'Escaneie para baixar o Walkito',
  getScan: 'Aponte a câmera do celular para o código. Ele abre a loja certa para o seu celular.',
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, em breve',
  getClose: 'Fechar',
  navProgram: 'Programa',
  navEvidence: 'Evidências',
  navQuestions: 'Perguntas',
  navSupport: 'Suporte',
  navPrivacy: 'Privacidade',
  navTerms: 'Termos',
  socialTikTok: 'Walkito no TikTok',
  socialInstagram: 'Walkito no Instagram',
  navFlatFeet: 'Pé chato',
  navHeelPain: 'Dor no calcanhar',
  language: 'Idioma',
  sourcesHeading: 'Fontes',
  guidesHeading: 'Guias',
  updated: 'Atualizado',
  keyPoints: 'Pontos principais',
  contents: 'Nesta página',
  faqHeading: 'Perguntas frequentes',
  relatedHeading: 'Guias relacionados',
  navAbout: 'Sobre o Walkito',
  notice:
    'O Walkito é um programa de exercícios. Ele não faz diagnóstico nem tratamento. Se a dor for aguda, estiver piorando ou atrapalhando seu sono, procure um profissional de saúde.',
};

const fr: Chrome = {
  headerButton: "Télécharger l'app",
  getBadge: "Télécharger dans l'App Store",
  getBadgeLabel: "Télécharger Walkito dans l'App Store",
  navHome: 'Accueil',
  menuOpen: 'Menu',
  menuClose: 'Fermer le menu',
  getTitle: 'Scannez pour télécharger Walkito',
  getScan:
    "Pointez l'appareil photo de votre téléphone vers le code. Il ouvre la boutique d'applications de votre téléphone.",
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, bientôt disponible',
  getClose: 'Fermer',
  navProgram: 'Programme',
  navEvidence: 'Données scientifiques',
  navQuestions: 'Questions',
  navSupport: 'Assistance',
  navPrivacy: 'Confidentialité',
  navTerms: 'Conditions',
  socialTikTok: 'Walkito sur TikTok',
  socialInstagram: 'Walkito sur Instagram',
  navFlatFeet: 'Pieds plats',
  navHeelPain: 'Douleur au talon',
  language: 'Langue',
  sourcesHeading: 'Sources',
  guidesHeading: 'Guides',
  updated: 'Mis à jour',
  keyPoints: "L'essentiel",
  contents: 'Sur cette page',
  faqHeading: 'Questions fréquentes',
  relatedHeading: 'Guides associés',
  navAbout: 'À propos',
  notice:
    "Walkito est un programme d'exercices. Il ne pose pas de diagnostic et ne soigne pas. Si la douleur est vive, s'aggrave ou vous empêche de dormir, consultez un professionnel de santé.",
};

const it: Chrome = {
  headerButton: "Scarica l'app",
  getBadge: "Scarica sull'App Store",
  getBadgeLabel: "Scarica Walkito sull'App Store",
  navHome: 'Home',
  menuOpen: 'Menu',
  menuClose: 'Chiudi il menu',
  getTitle: 'Inquadra per scaricare Walkito',
  getScan: 'Inquadra il codice con la fotocamera del telefono. Apre lo store giusto per il tuo telefono.',
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, in arrivo',
  getClose: 'Chiudi',
  navProgram: 'Programma',
  navEvidence: 'Evidenze',
  navQuestions: 'Domande',
  navSupport: 'Supporto',
  navPrivacy: 'Privacy',
  navTerms: 'Termini',
  socialTikTok: 'Walkito su TikTok',
  socialInstagram: 'Walkito su Instagram',
  navFlatFeet: 'Piede piatto',
  navHeelPain: 'Dolore al tallone',
  language: 'Lingua',
  sourcesHeading: 'Fonti',
  guidesHeading: 'Guide',
  updated: 'Aggiornato',
  keyPoints: 'In breve',
  contents: 'In questa pagina',
  faqHeading: 'Domande frequenti',
  relatedHeading: 'Guide correlate',
  navAbout: 'Chi siamo',
  notice:
    'Walkito è un programma di esercizi. Non fa diagnosi e non cura. Se il dolore è acuto, peggiora o ti impedisce di dormire, rivolgiti a un professionista sanitario.',
};

const de: Chrome = {
  headerButton: 'App laden',
  getBadge: 'Im App Store laden',
  getBadgeLabel: 'Walkito im App Store laden',
  navHome: 'Start',
  menuOpen: 'Menü',
  menuClose: 'Menü schließen',
  getTitle: 'Scannen und Walkito laden',
  getScan: 'Richte die Kamera deines Handys auf den Code. Er öffnet den passenden Store für dein Handy.',
  getAppStore: 'App Store',
  getPlay: 'Google Play',
  getPlaySoon: 'Google Play, bald verfügbar',
  getClose: 'Schließen',
  navProgram: 'Programm',
  navEvidence: 'Studienlage',
  navQuestions: 'Fragen',
  navSupport: 'Support',
  navPrivacy: 'Datenschutz',
  navTerms: 'Nutzungsbedingungen',
  socialTikTok: 'Walkito auf TikTok',
  socialInstagram: 'Walkito auf Instagram',
  navFlatFeet: 'Plattfuß',
  navHeelPain: 'Fersenschmerzen',
  language: 'Sprache',
  sourcesHeading: 'Quellen',
  guidesHeading: 'Ratgeber',
  updated: 'Aktualisiert',
  keyPoints: 'Das Wichtigste',
  contents: 'Auf dieser Seite',
  faqHeading: 'Häufige Fragen',
  relatedHeading: 'Weitere Ratgeber',
  navAbout: 'Über Walkito',
  notice:
    'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und behandelt nicht. Wenn der Schmerz stechend ist, schlimmer wird oder dich nachts weckt, geh zu einer medizinischen Fachperson.',
};

export const CHROME: Record<Lang, Chrome> = { en, ru, es, pt, fr, it, de };

/**
 * The pages that exist in more than one language, and where each one lives.
 *
 * One table feeding hreflang, the sitemap and the footer's language switcher,
 * so the three cannot disagree. hreflang that points A → B without B → A is
 * ignored by Google, and a table is the only shape where that cannot happen.
 */
export const TRANSLATED = {
  home: { en: '/', ru: '/ru/', es: '/es/', pt: '/pt/', fr: '/fr/', it: '/it/', de: '/de/' },
  flatFeet: {
    en: '/flat-feet-exercises/',
    ru: '/ru/ploskostopie-uprazhneniya/',
    es: '/es/ejercicios-pie-plano/',
    pt: '/pt/exercicios-pe-chato/',
    fr: '/fr/exercices-pieds-plats/',
    it: '/it/esercizi-piede-piatto/',
    de: '/de/plattfuss-uebungen/',
  },
  heelPain: {
    en: '/plantar-fasciitis-exercises/',
    ru: '/ru/bol-v-pyatke-uprazhneniya/',
    es: '/es/ejercicios-fascitis-plantar/',
    pt: '/pt/exercicios-fascite-plantar/',
    fr: '/fr/exercices-fasciite-plantaire/',
    it: '/it/esercizi-fascite-plantare/',
    de: '/de/plantarfasziitis-uebungen/',
  },
  about: {
    en: '/about/',
    ru: '/ru/o-proekte/',
    es: '/es/sobre-walkito/',
    pt: '/pt/sobre-walkito/',
    fr: '/fr/a-propos/',
    it: '/it/chi-siamo/',
    de: '/de/ueber-walkito/',
  },
  support: { en: '/support/', ru: '/ru/podderzhka/', es: '/es/soporte/', pt: '/pt/suporte/', fr: '/fr/assistance/', it: '/it/supporto/', de: '/de/support/' },
  privacy: { en: '/privacy/', ru: '/ru/konfidentsialnost/', es: '/es/privacidad/', pt: '/pt/privacidade/', fr: '/fr/confidentialite/', it: '/it/privacy/', de: '/de/datenschutz/' },
  terms: { en: '/terms/', ru: '/ru/usloviya/', es: '/es/terminos/', pt: '/pt/termos/', fr: '/fr/conditions/', it: '/it/termini/', de: '/de/nutzungsbedingungen/' },
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
  pfVsHeelSpur: '/plantar-fasciitis-vs-heel-spur/',
  heelSpurExercises: '/heel-spur-exercises/',
  heelPainAfterWalking: '/heel-pain-after-walking/',
  heelPainAtNight: '/heel-pain-at-night/',
  heelFatPad: '/heel-fat-pad-syndrome/',
  haglunds: '/haglunds-deformity/',
  severs: '/severs-disease/',
  archPain: '/arch-pain/',
  highArches: '/high-arches-exercises/',
  pttd: '/posterior-tibial-tendon-dysfunction-exercises/',
  topOfFoot: '/top-of-foot-pain/',
  mortons: '/mortons-neuroma/',
  sesamoiditis: '/sesamoiditis/',
  bunions: '/bunion-exercises/',
  hammerToe: '/hammer-toe-exercises/',
} as const;

export type EnglishPage = keyof typeof EN_ONLY;

/**
 * Spanish versions of the English-only articles. A page here gets hreflang
 * en <-> es (plus x-default -> en, and ru when ARTICLES_RU has it too) in its
 * head and in the sitemap, and a language switcher in the footer. A page claims
 * a Spanish version only once `ARTICLES_ES` (`lib/guides/articles-es.ts`) has it.
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
  pfVsHeelSpur: '/es/fascitis-plantar-vs-espolon-calcaneo/',
  heelSpurExercises: '/es/ejercicios-espolon-calcaneo/',
  heelPainAfterWalking: '/es/dolor-de-talon-al-caminar/',
  heelPainAtNight: '/es/dolor-de-talon-por-la-noche/',
  heelFatPad: '/es/sindrome-almohadilla-grasa-talon/',
  haglunds: '/es/deformidad-de-haglund/',
  severs: '/es/enfermedad-de-sever/',
  archPain: '/es/dolor-en-el-arco-del-pie/',
  highArches: '/es/ejercicios-pie-cavo/',
  pttd: '/es/ejercicios-tendon-tibial-posterior/',
  topOfFoot: '/es/dolor-en-el-empeine/',
  mortons: '/es/neuroma-de-morton/',
  sesamoiditis: '/es/sesamoiditis/',
  bunions: '/es/ejercicios-juanetes/',
  hammerToe: '/es/ejercicios-dedo-en-martillo/',
};

/**
 * Russian versions of the English-only articles: the same page, in Russian.
 * Mirrors ES_ARTICLES. A page claims a Russian version only once
 * `ARTICLES_RU` (`lib/guides/articles-ru.ts`) has it.
 */
export const RU_ARTICLES: Record<EnglishPage, string> = {
  standing: '/ru/bolyat-nogi-ot-stoyaniya/',
  calfRaises: '/ru/podemy-na-noski-pri-plantarnom-fastsiite/',
  achilles: '/ru/tendinit-akhillova-sukhozhiliya-uprazhneniya/',
  shinSplints: '/ru/periostit-goleni-uprazhneniya/',
  morningHeelPain: '/ru/bol-v-pyatke-utrom/',
  pfDuration: '/ru/skolko-dlitsya-plantarnyy-fastsiit/',
  ballOfFoot: '/ru/metatarzalgiya/',
  nurses: '/ru/bol-v-stopakh-u-medsester/',
  standingDesk: '/ru/stol-dlya-raboty-stoya-bol-v-stopakh/',
  bestApp: '/ru/prilozhenie-pri-plantarnom-fastsiite/',
  vsExakt: '/ru/walkito-vs-exakt-health/',
  exPlantarFasciaStretch: '/ru/uprazhneniya/rastyazhka-plantarnoy-fastsii/',
  exCalfStretch: '/ru/uprazhneniya/rastyazhka-ikronozhnoy-myshtsy/',
  exSoleusStretch: '/ru/uprazhneniya/rastyazhka-kambalovidnoy-myshtsy/',
  exFootRoll: '/ru/uprazhneniya/massazh-stopy-myachom/',
  exAnkleRocks: '/ru/uprazhneniya/mobilnost-golenostopa/',
  exTowelHeelRaise: '/ru/uprazhneniya/podemy-na-noski-s-polotentsem/',
  exCalfRaises: '/ru/uprazhneniya/podemy-na-noski/',
  exEccentricHeelDrops: '/ru/uprazhneniya/ekstsentricheskie-opuskaniya-pyatok/',
  exTibialisRaises: '/ru/uprazhneniya/podemy-noskov-u-steny/',
  exSingleLegBalance: '/ru/uprazhneniya/ravnovesie-na-odnoy-noge/',
  exShortFoot: '/ru/uprazhneniya/korotkaya-stopa/',
  exTowelScrunch: '/ru/uprazhneniya/sobiranie-polotentsa-paltsami/',
  exToeSpread: '/ru/uprazhneniya/razvedenie-paltsev-stopy/',
  exBigToeLift: '/ru/uprazhneniya/podem-bolshogo-paltsa/',
  exBandInversion: '/ru/uprazhneniya/inversiya-stopy-s-rezinkoy/',
  exHipAbduction: '/ru/uprazhneniya/otvedenie-bedra/',
  calfRaiseTest: '/ru/test-podema-na-noski/',
  hubPlantarFasciitis: '/ru/plantarnyy-fastsiit/',
  hubFlatFeet: '/ru/ploskostopie/',
  pfVsHeelSpur: '/ru/plantarnyy-fastsiit-ili-pyatochnaya-shpora/',
  heelSpurExercises: '/ru/pyatochnaya-shpora-uprazhneniya/',
  heelPainAfterWalking: '/ru/bol-v-pyatke-posle-khodby/',
  heelPainAtNight: '/ru/bol-v-pyatke-nochyu/',
  heelFatPad: '/ru/sindrom-zhirovoy-podushki-pyatki/',
  haglunds: '/ru/deformatsiya-khaglunda/',
  severs: '/ru/bolezn-severa/',
  archPain: '/ru/bol-v-svode-stopy/',
  highArches: '/ru/polaya-stopa-uprazhneniya/',
  pttd: '/ru/disfunktsiya-zadnego-bolshebertsovogo-sukhozhiliya/',
  topOfFoot: '/ru/bol-v-podyome-stopy/',
  mortons: '/ru/nevroma-mortona/',
  sesamoiditis: '/ru/sesamoidit/',
  bunions: '/ru/kostochka-na-noge-uprazhneniya/',
  hammerToe: '/ru/molotkoobraznye-paltsy-uprazhneniya/',
};

/**
 * hreflang for an English article that exists in Spanish and/or Russian.
 * Only includes a language when its article barrel has the page.
 */

/** The languages added on 8 October 2026, which have only part of the site. */
export type NewLang = 'pt' | 'fr' | 'it' | 'de';
export const NEW_LANGS: readonly NewLang[] = ['pt', 'fr', 'it', 'de'];

/**
 * Where each English article lives in the newer languages. Only the articles
 * translated so far have a path; a page claims a translation only once
 * `ARTICLES_NEW` (`lib/guides/articles-new.ts`) has it.
 */
export const NEW_ARTICLE_PATHS: Record<NewLang, Partial<Record<EnglishPage, string>>> = {
  pt: {
    hubPlantarFasciitis: '/pt/fascite-plantar/',
    hubFlatFeet: '/pt/pe-chato/',
    heelSpurExercises: '/pt/esporao-calcaneo-exercicios/',
    pfVsHeelSpur: '/pt/fascite-plantar-ou-esporao/',
    morningHeelPain: '/pt/dor-no-calcanhar-ao-acordar/',
    pfDuration: '/pt/quanto-tempo-dura-fascite-plantar/',
    calfRaises: '/pt/elevacao-de-calcanhar-fascite-plantar/',
    achilles: '/pt/tendinite-de-aquiles-exercicios/',
    shinSplints: '/pt/canelite-exercicios/',
    bestApp: '/pt/melhor-app-fascite-plantar/',
    exPlantarFasciaStretch: '/pt/exercicios/alongamento-fascia-plantar/',
    exCalfStretch: '/pt/exercicios/alongamento-panturrilha/',
    exShortFoot: '/pt/exercicios/pe-curto/',
    exTowelHeelRaise: '/pt/exercicios/elevacao-calcanhar-toalha/',
  },
  fr: {
    hubPlantarFasciitis: '/fr/fasciite-plantaire/',
    hubFlatFeet: '/fr/pieds-plats/',
    heelSpurExercises: '/fr/epine-calcaneenne-exercices/',
    pfVsHeelSpur: '/fr/fasciite-plantaire-ou-epine-calcaneenne/',
    morningHeelPain: '/fr/douleur-talon-au-reveil/',
    pfDuration: '/fr/combien-de-temps-dure-fasciite-plantaire/',
    calfRaises: '/fr/montees-sur-pointes-fasciite-plantaire/',
    achilles: '/fr/tendinite-achille-exercices/',
    shinSplints: '/fr/periostite-tibiale-exercices/',
    bestApp: '/fr/meilleure-app-fasciite-plantaire/',
    exPlantarFasciaStretch: '/fr/exercices/etirement-fascia-plantaire/',
    exCalfStretch: '/fr/exercices/etirement-mollet/',
    exShortFoot: '/fr/exercices/pied-court/',
    exTowelHeelRaise: '/fr/exercices/montee-sur-pointes-serviette/',
  },
  it: {
    hubPlantarFasciitis: '/it/fascite-plantare/',
    hubFlatFeet: '/it/piede-piatto/',
    heelSpurExercises: '/it/spina-calcaneare-esercizi/',
    pfVsHeelSpur: '/it/fascite-plantare-o-spina-calcaneare/',
    morningHeelPain: '/it/dolore-tallone-al-mattino/',
    pfDuration: '/it/quanto-dura-fascite-plantare/',
    calfRaises: '/it/sollevamenti-tallone-fascite-plantare/',
    achilles: '/it/tendinite-achille-esercizi/',
    shinSplints: '/it/periostite-tibiale-esercizi/',
    bestApp: '/it/migliore-app-fascite-plantare/',
    exPlantarFasciaStretch: '/it/esercizi/stretching-fascia-plantare/',
    exCalfStretch: '/it/esercizi/stretching-polpaccio/',
    exShortFoot: '/it/esercizi/piede-corto/',
    exTowelHeelRaise: '/it/esercizi/sollevamento-tallone-asciugamano/',
  },
  de: {
    hubPlantarFasciitis: '/de/plantarfasziitis/',
    hubFlatFeet: '/de/plattfuss/',
    heelSpurExercises: '/de/fersensporn-uebungen/',
    pfVsHeelSpur: '/de/plantarfasziitis-oder-fersensporn/',
    morningHeelPain: '/de/fersenschmerzen-morgens/',
    pfDuration: '/de/wie-lange-dauert-plantarfasziitis/',
    calfRaises: '/de/wadenheben-plantarfasziitis/',
    achilles: '/de/achillessehnenentzuendung-uebungen/',
    shinSplints: '/de/schienbeinkantensyndrom-uebungen/',
    bestApp: '/de/beste-app-plantarfasziitis/',
    exPlantarFasciaStretch: '/de/uebungen/plantarfaszie-dehnen/',
    exCalfStretch: '/de/uebungen/wade-dehnen/',
    exShortFoot: '/de/uebungen/kurzer-fuss/',
    exTowelHeelRaise: '/de/uebungen/fersenheben-mit-handtuch/',
  },
};

export function alternatesArticle(
  page: EnglishPage,
  lang: 'en' | 'es' | 'ru',
  hasEs: boolean,
  hasRu: boolean,
) {
  const languages: Record<string, string> = { en: EN_ONLY[page], 'x-default': EN_ONLY[page] };
  if (hasEs) languages.es = ES_ARTICLES[page];
  if (hasRu) languages.ru = RU_ARTICLES[page];
  const canonical = lang === 'es' ? ES_ARTICLES[page] : lang === 'ru' ? RU_ARTICLES[page] : EN_ONLY[page];
  return { canonical, languages };
}

export function isTranslatedPage(page: TranslatedPage | EnglishPage): page is TranslatedPage {
  return page in TRANSLATED;
}

/**
 * Custom pages (not Guide objects) that exist in English, Spanish and Russian.
 * These are hand-built pages with their own components, not generated from
 * articles barrels. hreflang and sitemap entries read this table.
 */
export const CUSTOM_PAGES = {
  exercises: { en: '/exercises/', es: '/es/ejercicios/', ru: '/ru/uprazhneniya/' },
  faq: { en: '/faq/', es: '/es/preguntas-frecuentes/', ru: '/ru/voprosy/' },
  runners: { en: '/heel-pain-runners/', es: '/es/dolor-de-talon-en-corredores/', ru: '/ru/bol-v-pyatke-u-begunov/' },
  printables: { en: '/printable-exercise-sheets/', es: '/es/hojas-de-ejercicios-imprimibles/', ru: '/ru/uprazhneniya-dlya-pechati/' },
  program: { en: '/program/', es: '/es/programa/', ru: '/ru/programma/' },
  science: { en: '/science/', es: '/es/evidencia/', ru: '/ru/issledovaniya/' },
  footMap: { en: '/foot-pain-identifier/', es: '/es/donde-me-duele-el-pie/', ru: '/ru/gde-bolit-stopa/' },
} as const;

export type CustomPage = keyof typeof CUSTOM_PAGES;

/** @deprecated use CUSTOM_PAGES instead */
export const CUSTOM_EN_ES = CUSTOM_PAGES;
/** @deprecated use CustomPage instead */
export type CustomEnEsPage = CustomPage;

export function alternatesCustom(page: CustomPage, lang: FullLang) {
  const paths = CUSTOM_PAGES[page];
  return {
    canonical: paths[lang],
    languages: { en: paths.en, es: paths.es, ru: paths.ru, 'x-default': paths.en },
  };
}

/** A custom page in the reader's language, or the English page for the
 * languages that do not have it yet. */
export function customHref(page: CustomPage, lang: Lang): string {
  return isFullLang(lang) ? CUSTOM_PAGES[page][lang] : CUSTOM_PAGES[page].en;
}

/** @deprecated use alternatesCustom instead */
export function alternatesCustomEnEs(page: CustomPage, lang: 'en' | 'es') {
  return alternatesCustom(page, lang);
}

/**
 * `alternates` for a translated page's metadata: its own canonical, and every
 * language version including itself, plus `x-default` on English.
 */
export function alternatesFor(page: TranslatedPage, lang: Lang) {
  const paths = TRANSLATED[page];
  return {
    canonical: paths[lang],
    languages: { ...paths, 'x-default': paths.en },
  };
}
