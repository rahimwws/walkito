import type { EnglishPage, Lang, TranslatedPage } from '@/lib/i18n';

/**
 * How the guides group, for the footer columns and for "related guides".
 *
 * One map so the two never disagree: a reader at the end of the nurses page
 * is offered the other "on your feet" pages first, and the footer shows the
 * same groups under the same names.
 */
export type GuideKey = TranslatedPage | EnglishPage | 'runners';

export type NavGroup = 'exercises' | 'pain' | 'heel' | 'foot' | 'ankle' | 'flat' | 'tools' | 'work' | 'compare' | 'library';

/** Footer label for each guide: shorter than the H1, read in a column. */
export const NAV_LABEL: Partial<Record<GuideKey, string>> = {
  hubPlantarFasciitis: 'Plantar fasciitis',
  hubFlatFeet: 'Flat feet',
  calfRaiseTest: 'Calf raise test',
  heelPain: 'Plantar fasciitis exercises',
  flatFeet: 'Flat feet exercises',
  calfRaises: 'Calf raises',
  achilles: 'Achilles tendonitis',
  shinSplints: 'Shin splints',
  morningHeelPain: 'Heel pain in the morning',
  pfDuration: 'Plantar fasciitis recovery time',
  ballOfFoot: 'Ball of foot pain',
  runners: 'Heel pain from running',
  standing: 'Standing all day',
  nurses: 'Nurses',
  standingDesk: 'Standing desks',
  bestApp: 'Best app for plantar fasciitis',
  ytStudy: 'YouTube video study',
  aiStudy: 'AI answers study',
  appStudy: 'Heel pain apps study',
  vsHinge: 'Walkito vs Hinge Health',
  appVsPt: 'App vs physical therapy',
  pfCost: 'Plantar fasciitis costs',
  ytVsApp: 'YouTube vs app',
  footApps: 'Foot pain apps',
  hingeAlt: 'Hinge Health alternatives',
  exaktAlt: 'Exakt Health alternatives',
  bestFlatApp: 'Best app for flat feet',
  bestInsoles: 'Best insoles',
  vsExakt: 'Walkito vs Exakt Health',
  pfVsHeelSpur: 'Plantar fasciitis vs heel spur',
  heelSpurExercises: 'Heel spur exercises',
  heelPainAfterWalking: 'Heel pain after walking',
  heelPainAtNight: 'Heel pain at night',
  pfPregnancy: 'Heel pain in pregnancy',
  heelFatPad: 'Heel fat pad syndrome',
  haglunds: 'Haglund\u2019s deformity',
  severs: 'Sever\u2019s disease (kids)',
  archPain: 'Arch pain',
  highArches: 'High arches exercises',
  pttd: 'Posterior tibial tendon',
  topOfFoot: 'Top of foot pain',
  mortons: 'Morton\u2019s neuroma',
  sesamoiditis: 'Sesamoiditis',
  bunions: 'Bunion exercises',
  hammerToe: 'Hammer toe exercises',
  toeStrengthening: 'Toe strengthening',
  tightCalves: 'Tight calves',
  ankleMobility: 'Ankle mobility',
  ankleStrengthening: 'Ankle strengthening',
  footStrengthening: 'Foot strengthening',
  flatFeetBackPain: 'Flat feet and back pain',
  flatFeetKneePain: 'Flat feet and knee pain',
  flatFeetAge: 'Flat feet with age',
  flatFeetKids: 'Flat feet in kids',
  nightSplints: 'Night splints',
  pfTaping: 'Taping for heel pain',
  iceHeat: 'Ice or heat for heel pain',
  massageBall: 'Massage ball and frozen bottle',
  insolesVsExercises: 'Insoles vs exercises',
  barefoot: 'Barefoot shoes',
};

/** Spanish footer labels, for the articles that exist in Spanish. */
export const NAV_LABEL_ES: Partial<Record<GuideKey, string>> = {
  hubPlantarFasciitis: 'Fascitis plantar',
  hubFlatFeet: 'Pie plano',
  calfRaiseTest: 'Test de elevación de talón',
  calfRaises: 'Elevaciones de talón',
  achilles: 'Tendinitis de Aquiles',
  shinSplints: 'Periostitis tibial',
  morningHeelPain: 'Dolor de talón al levantarse',
  pfDuration: 'Cuánto dura la fascitis plantar',
  ballOfFoot: 'Metatarsalgia',
  standing: 'De pie todo el día',
  nurses: 'Enfermeras',
  standingDesk: 'Escritorio de pie',
  bestApp: 'Mejor app para fascitis plantar',
  vsExakt: 'Walkito vs Exakt Health',
  exaktAlt: 'Alternativas a Exakt Health',
  bestFlatApp: 'Mejor app para pie plano',
  runners: 'Dolor de talón en corredores',
  exPlantarFasciaStretch: 'Estiramiento de la fascia plantar',
  exCalfStretch: 'Estiramiento de pantorrilla',
  exSoleusStretch: 'Estiramiento de sóleo',
  exFootRoll: 'Masaje plantar con pelota',
  exAnkleRocks: 'Movilidad de tobillo',
  exTowelHeelRaise: 'Elevación de talones con toalla',
  exCalfRaises: 'Elevaciones de talón (técnica)',
  exEccentricHeelDrops: 'Excéntricos de talón',
  exTibialisRaises: 'Elevaciones de tibial anterior',
  exSingleLegBalance: 'Equilibrio a una pierna',
  exShortFoot: 'Pie corto',
  exTowelScrunch: 'Recoger la toalla con los dedos',
  exToeSpread: 'Separar los dedos',
  exBigToeLift: 'Levantar el dedo gordo',
  exBandInversion: 'Inversión con banda',
  exHipAbduction: 'Abducción de cadera',
  pfVsHeelSpur: 'Fascitis plantar vs espolón',
  heelSpurExercises: 'Ejercicios para espolón calcáneo',
  heelPainAfterWalking: 'Dolor de talón al caminar',
  heelPainAtNight: 'Dolor de talón por la noche',
  pfPregnancy: 'Dolor de talón en el embarazo',
  heelFatPad: 'Almohadilla grasa del talón',
  haglunds: 'Deformidad de Haglund',
  severs: 'Enfermedad de Sever (niños)',
  archPain: 'Dolor en el arco del pie',
  highArches: 'Ejercicios para pie cavo',
  pttd: 'Tendón tibial posterior',
  topOfFoot: 'Dolor en el empeine',
  mortons: 'Neuroma de Morton',
  sesamoiditis: 'Sesamoiditis',
  bunions: 'Ejercicios para juanetes',
  hammerToe: 'Dedo en martillo',
  pfTaping: 'Vendaje',
  flatFeetKneePain: 'Pie plano y dolor de rodilla',
  massageBall: 'Pelota de masaje y botella congelada',
  toeStrengthening: 'Fortalecer los dedos de los pies',
  insolesVsExercises: 'Plantillas o ejercicios',
  nightSplints: 'Férula nocturna',
  ankleStrengthening: 'Fortalecer el tobillo',
  flatFeetAge: 'Pie plano con la edad',
  iceHeat: 'Hielo o calor',
  ankleMobility: 'Movilidad de tobillo',
  footStrengthening: 'Fortalecer los pies',
  barefoot: 'Zapatos barefoot',
  flatFeetBackPain: 'Pie plano y dolor de espalda',
  flatFeetKids: 'Pie plano en niños',
  tightCalves: 'Pantorrillas tensas',
};

/** Russian footer labels, for the articles that exist in Russian. */
export const NAV_LABEL_RU: Partial<Record<GuideKey, string>> = {
  hubPlantarFasciitis: 'Плантарный фасциит',
  hubFlatFeet: 'Плоскостопие',
  calfRaiseTest: 'Тест подъёма на носки',
  calfRaises: 'Подъёмы на носки',
  achilles: 'Тендинит ахиллова сухожилия',
  shinSplints: 'Периостит голени',
  morningHeelPain: 'Боль в пятке утром',
  pfDuration: 'Сколько длится плантарный фасциит',
  ballOfFoot: 'Метатарзалгия',
  standing: 'На ногах весь день',
  nurses: 'Медсёстры',
  standingDesk: 'Стол для работы стоя',
  bestApp: 'Приложение при плантарном фасциите',
  vsExakt: 'Walkito vs Exakt Health',
  exaktAlt: 'Альтернативы Exakt Health',
  bestFlatApp: 'Приложение при плоскостопии',
  runners: 'Боль в пятке у бегунов',
  exPlantarFasciaStretch: 'Растяжка подошвенной фасции',
  exCalfStretch: 'Растяжка икроножной мышцы',
  exSoleusStretch: 'Растяжка камбаловидной мышцы',
  exFootRoll: 'Массаж стопы мячом',
  exAnkleRocks: 'Мобильность голеностопа',
  exTowelHeelRaise: 'Подъёмы на носки с полотенцем',
  exCalfRaises: 'Подъёмы на носки (техника)',
  exEccentricHeelDrops: 'Эксцентрические опускания пяток',
  exTibialisRaises: 'Подъёмы носков у стены',
  exSingleLegBalance: 'Равновесие на одной ноге',
  exShortFoot: 'Короткая стопа',
  exTowelScrunch: 'Собирание полотенца пальцами',
  exToeSpread: 'Разведение пальцев стопы',
  exBigToeLift: 'Подъём большого пальца',
  exBandInversion: 'Инверсия стопы с резинкой',
  exHipAbduction: 'Отведение бедра',
  pfVsHeelSpur: 'Плантарный фасциит или шпора',
  heelSpurExercises: 'Упражнения при пяточной шпоре',
  heelPainAfterWalking: 'Боль в пятке после ходьбы',
  heelPainAtNight: 'Боль в пятке ночью',
  pfPregnancy: 'Боль в пятке при беременности',
  heelFatPad: 'Жировая подушка пятки',
  haglunds: 'Деформация Хаглунда',
  severs: 'Болезнь Севера (дети)',
  archPain: 'Боль в своде стопы',
  highArches: 'Полая стопа',
  pttd: 'Заднее большеберцовое сухожилие',
  topOfFoot: 'Боль в подъёме стопы',
  mortons: 'Неврома Мортона',
  sesamoiditis: 'Сезамоидит',
  bunions: 'Косточка на ноге',
  hammerToe: 'Молоткообразные пальцы',
  pfTaping: 'Тейпирование',
  flatFeetKneePain: 'Плоскостопие и боль в колене',
  massageBall: 'Массажный мяч и замороженная бутылка',
  toeStrengthening: 'Укрепление пальцев ног',
  insolesVsExercises: 'Стельки или упражнения',
  nightSplints: 'Ночные шины',
  ankleStrengthening: 'Укрепление голеностопа',
  flatFeetAge: 'Плоскостопие с возрастом',
  iceHeat: 'Лёд или тепло',
  ankleMobility: 'Подвижность голеностопа',
  footStrengthening: 'Укрепление стопы',
  barefoot: 'Босоногая обувь',
  flatFeetBackPain: 'Плоскостопие и боль в спине',
  flatFeetKids: 'Плоскостопие у детей',
  tightCalves: 'Забитые икры',
};

export const NAV_GROUPS: Record<NavGroup, readonly GuideKey[]> = {
  exercises: ['heelPain', 'flatFeet', 'calfRaises', 'achilles', 'shinSplints'],
  pain: ['hubPlantarFasciitis', 'hubFlatFeet', 'morningHeelPain', 'pfDuration', 'ballOfFoot', 'runners'],
  heel: ['pfVsHeelSpur', 'heelSpurExercises', 'heelPainAfterWalking', 'heelPainAtNight', 'pfPregnancy', 'heelFatPad', 'haglunds', 'severs'],
  foot: ['archPain', 'highArches', 'pttd', 'topOfFoot', 'mortons', 'sesamoiditis', 'bunions', 'hammerToe', 'toeStrengthening'],
  ankle: ['tightCalves', 'ankleMobility', 'ankleStrengthening', 'footStrengthening'],
  flat: ['flatFeetBackPain', 'flatFeetKneePain', 'flatFeetAge', 'flatFeetKids'],
  tools: ['nightSplints', 'pfTaping', 'iceHeat', 'massageBall', 'insolesVsExercises', 'barefoot'],
  work: ['standing', 'nurses', 'standingDesk'],
  compare: ['bestApp', 'vsExakt', 'exaktAlt', 'bestFlatApp', 'vsHinge', 'appVsPt', 'pfCost', 'ytVsApp', 'footApps', 'hingeAlt', 'bestInsoles', 'ytStudy', 'aiStudy', 'appStudy'],
  library: [
    'exPlantarFasciaStretch', 'exCalfStretch', 'exSoleusStretch', 'exFootRoll', 'exAnkleRocks',
    'exTowelHeelRaise', 'exCalfRaises', 'exEccentricHeelDrops', 'exTibialisRaises', 'exSingleLegBalance',
    'exShortFoot', 'exTowelScrunch', 'exToeSpread', 'exBigToeLift', 'exBandInversion', 'exHipAbduction', 'calfRaiseTest',
  ],
};

export const GROUP_HEADING: Record<Lang, Record<NavGroup | 'walkito', string>> = {
  en: { exercises: 'Exercises', pain: 'Foot pain', heel: 'Heel pain', foot: 'Arch and toes', ankle: 'Calf and ankle', flat: 'Flat feet', tools: 'Insoles, tape and tools', work: 'On your feet', compare: 'Compare apps', library: 'Exercise library', walkito: 'Walkito' },
  ru: { exercises: 'Упражнения', pain: 'Боль в стопе', heel: 'Боль в пятке', foot: 'Свод и пальцы', ankle: 'Икры и голеностоп', flat: 'Плоскостопие', tools: 'Стельки, тейп и другое', work: 'На ногах весь день', compare: 'Сравнение', library: 'Упражнения', walkito: 'Walkito' },
  es: { exercises: 'Ejercicios', pain: 'Dolor de pie', heel: 'Dolor de talón', foot: 'Arco y dedos', ankle: 'Pantorrilla y tobillo', flat: 'Pie plano', tools: 'Plantillas, vendaje y más', work: 'De pie todo el día', compare: 'Comparar', library: 'Biblioteca de ejercicios', walkito: 'Walkito' },
  pt: { exercises: 'Exercícios', pain: 'Dor no pé', heel: 'Dor no calcanhar', foot: 'Arco e dedos', ankle: 'Panturrilha e tornozelo', flat: 'Pé chato', tools: 'Palmilhas, fita e mais', work: 'Em pé o dia todo', compare: 'Comparar apps', library: 'Biblioteca de exercícios', walkito: 'Walkito' },
  fr: { exercises: 'Exercices', pain: 'Douleur au pied', heel: 'Douleur au talon', foot: 'Voûte et orteils', ankle: 'Mollet et cheville', flat: 'Pieds plats', tools: 'Semelles, strapping et plus', work: 'Debout toute la journée', compare: 'Comparer', library: "Bibliothèque d'exercices", walkito: 'Walkito' },
  it: { exercises: 'Esercizi', pain: 'Dolore al piede', heel: 'Dolore al tallone', foot: 'Arco e dita', ankle: 'Polpaccio e caviglia', flat: 'Piede piatto', tools: 'Plantari, taping e altro', work: 'In piedi tutto il giorno', compare: 'Confronta app', library: 'Libreria di esercizi', walkito: 'Walkito' },
  de: { exercises: 'Übungen', pain: 'Fußschmerzen', heel: 'Fersenschmerzen', foot: 'Fußgewölbe und Zehen', ankle: 'Wade und Sprunggelenk', flat: 'Plattfuß', tools: 'Einlagen, Tape und mehr', work: 'Den ganzen Tag stehen', compare: 'Apps vergleichen', library: 'Übungsbibliothek', walkito: 'Walkito' },
};

/** The group a guide sits in, or null for pages outside the map. */
export function groupOf(key: GuideKey): NavGroup | null {
  for (const [group, keys] of Object.entries(NAV_GROUPS) as [NavGroup, readonly GuideKey[]][]) {
    if (keys.includes(key)) return group;
  }
  return null;
}

/** An exercise's own page in the library (exCalfRaises), not the calf raise
 * test that shares its footer column, and not exaktAlt, whose key also starts
 * with "ex". */
export function isExercisePage(key: string): boolean {
  return /^ex[A-Z]/.test(key) && key !== 'exaktAlt';
}

/**
 * The condition each guide is about, for "related guides".
 *
 * The groups above say what kind of page a guide is (a tool, a comparison, an
 * exercise); a reader at the end of a plantar fasciitis page wants more
 * plantar fasciitis, whatever kind of page it is. Before this map the cards
 * under the plantar fasciitis exercises led to flat feet, Achilles and shin
 * splints, and the flat feet exercises offered no flat feet page at all.
 *
 * The order is the rotation `relatedGuides` reads: a page is offered the pages
 * after it, wrapping round, so every page in a topic is offered by the ones
 * before it. Overview and main guide first, so the app and exercise pages at
 * the end wrap round to them; the pages for long days on your feet sit after
 * the recovery pages rather than before the app pages, so they lead on to
 * the condition and not to three app comparisons in a row. A key with no
 * guide of its own (`runners`) is passed over.
 */
export type Topic = 'pf' | 'flat' | 'calf' | 'forefoot';

export const TOPICS: Record<Topic, readonly GuideKey[]> = {
  pf: [
    'hubPlantarFasciitis', 'heelPain', 'morningHeelPain', 'pfDuration', 'standing', 'nurses', 'standingDesk', 'runners', 'calfRaises',
    'pfVsHeelSpur', 'heelSpurExercises', 'heelPainAfterWalking', 'heelPainAtNight', 'pfPregnancy', 'heelFatPad', 'haglunds', 'severs',
    'nightSplints', 'pfTaping', 'iceHeat', 'massageBall', 'bestInsoles',
    'bestApp', 'pfCost', 'appVsPt', 'vsHinge', 'hingeAlt', 'vsExakt', 'exaktAlt', 'ytVsApp', 'appStudy', 'ytStudy', 'aiStudy',
    'exPlantarFasciaStretch', 'exCalfStretch', 'exSoleusStretch', 'exTowelHeelRaise', 'exFootRoll',
  ],
  flat: [
    'hubFlatFeet', 'flatFeet', 'archPain', 'pttd', 'highArches', 'footStrengthening',
    'flatFeetBackPain', 'flatFeetKneePain', 'flatFeetAge', 'flatFeetKids',
    'barefoot', 'insolesVsExercises', 'bestFlatApp', 'footApps',
    'exShortFoot', 'exTowelScrunch', 'exBandInversion', 'exHipAbduction',
  ],
  calf: [
    'achilles', 'shinSplints', 'tightCalves', 'ankleMobility', 'ankleStrengthening', 'calfRaiseTest',
    'exCalfRaises', 'exEccentricHeelDrops', 'exTibialisRaises', 'exAnkleRocks', 'exSingleLegBalance',
  ],
  forefoot: [
    'ballOfFoot', 'mortons', 'sesamoiditis', 'bunions', 'hammerToe', 'toeStrengthening', 'topOfFoot',
    'exToeSpread', 'exBigToeLift',
  ],
};

/** The overview page a topic falls back to once its own pages run out. Calf
 * and forefoot have none of their own: the plantar fasciitis overview covers
 * Achilles pain and the calf among heel pain's look-alikes, and the flat feet
 * overview covers ball of foot pain, bunions and the toes. */
export const TOPIC_HUB: Record<Topic, GuideKey> = {
  pf: 'hubPlantarFasciitis',
  flat: 'hubFlatFeet',
  calf: 'hubPlantarFasciitis',
  forefoot: 'hubFlatFeet',
};

/** The app comparison a topic's pages end with: the next step for a reader who
 * has the exercises and wants a plan. None where no page compares apps for
 * that condition alone. */
export const TOPIC_APP: Partial<Record<Topic, GuideKey>> = {
  pf: 'bestApp',
  flat: 'bestFlatApp',
};

/** The topic a guide is about, or null for pages outside the map. */
export function topicOf(key: GuideKey): Topic | null {
  for (const [topic, keys] of Object.entries(TOPICS) as [Topic, readonly GuideKey[]][]) {
    if (keys.includes(key)) return topic;
  }
  return null;
}
