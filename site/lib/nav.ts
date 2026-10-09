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
  vsExakt: 'Walkito vs Exakt Health',
  pfVsHeelSpur: 'Plantar fasciitis vs heel spur',
  heelSpurExercises: 'Heel spur exercises',
  heelPainAfterWalking: 'Heel pain after walking',
  heelPainAtNight: 'Heel pain at night',
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
};

export const NAV_GROUPS: Record<NavGroup, readonly GuideKey[]> = {
  exercises: ['heelPain', 'flatFeet', 'calfRaises', 'achilles', 'shinSplints'],
  pain: ['hubPlantarFasciitis', 'hubFlatFeet', 'morningHeelPain', 'pfDuration', 'ballOfFoot', 'runners'],
  heel: ['pfVsHeelSpur', 'heelSpurExercises', 'heelPainAfterWalking', 'heelPainAtNight', 'heelFatPad', 'haglunds', 'severs'],
  foot: ['archPain', 'highArches', 'pttd', 'topOfFoot', 'mortons', 'sesamoiditis', 'bunions', 'hammerToe', 'toeStrengthening'],
  ankle: ['tightCalves', 'ankleMobility', 'ankleStrengthening', 'footStrengthening'],
  flat: ['flatFeetBackPain', 'flatFeetKneePain', 'flatFeetAge', 'flatFeetKids'],
  tools: ['nightSplints', 'pfTaping', 'iceHeat', 'massageBall', 'insolesVsExercises', 'barefoot'],
  work: ['standing', 'nurses', 'standingDesk'],
  compare: ['bestApp', 'vsExakt'],
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
