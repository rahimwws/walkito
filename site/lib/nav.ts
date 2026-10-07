import type { EnglishPage, Lang, TranslatedPage } from '@/lib/i18n';

/**
 * How the guides group, for the footer columns and for "related guides".
 *
 * One map so the two never disagree: a reader at the end of the nurses page
 * is offered the other "on your feet" pages first, and the footer shows the
 * same groups under the same names.
 */
export type GuideKey = TranslatedPage | EnglishPage | 'runners';

export type NavGroup = 'exercises' | 'pain' | 'work' | 'compare' | 'library';

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
};

export const NAV_GROUPS: Record<NavGroup, readonly GuideKey[]> = {
  exercises: ['heelPain', 'flatFeet', 'calfRaises', 'achilles', 'shinSplints'],
  pain: ['hubPlantarFasciitis', 'hubFlatFeet', 'morningHeelPain', 'pfDuration', 'ballOfFoot', 'runners'],
  work: ['standing', 'nurses', 'standingDesk'],
  compare: ['bestApp', 'vsExakt'],
  library: [
    'exPlantarFasciaStretch', 'exCalfStretch', 'exSoleusStretch', 'exFootRoll', 'exAnkleRocks',
    'exTowelHeelRaise', 'exCalfRaises', 'exEccentricHeelDrops', 'exTibialisRaises', 'exSingleLegBalance',
    'exShortFoot', 'exTowelScrunch', 'exToeSpread', 'exBigToeLift', 'exBandInversion', 'exHipAbduction', 'calfRaiseTest',
  ],
};

export const GROUP_HEADING: Record<Lang, Record<NavGroup | 'walkito', string>> = {
  en: { exercises: 'Exercises', pain: 'Foot pain', work: 'On your feet', compare: 'Compare apps', library: 'Exercise library', walkito: 'Walkito' },
  ru: { exercises: 'Упражнения', pain: 'Боль в стопе', work: 'На ногах весь день', compare: 'Сравнение', library: 'Упражнения', walkito: 'Walkito' },
  es: { exercises: 'Ejercicios', pain: 'Dolor de pie', work: 'De pie todo el día', compare: 'Comparar', library: 'Biblioteca de ejercicios', walkito: 'Walkito' },
};

/** The group a guide sits in, or null for pages outside the map. */
export function groupOf(key: GuideKey): NavGroup | null {
  for (const [group, keys] of Object.entries(NAV_GROUPS) as [NavGroup, readonly GuideKey[]][]) {
    if (keys.includes(key)) return group;
  }
  return null;
}
