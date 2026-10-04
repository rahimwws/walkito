import type { EnglishPage, Lang, TranslatedPage } from '@/lib/i18n';

/**
 * How the guides group, for the footer columns and for "related guides".
 *
 * One map so the two never disagree: a reader at the end of the nurses page
 * is offered the other "on your feet" pages first, and the footer shows the
 * same groups under the same names.
 */
export type GuideKey = TranslatedPage | EnglishPage | 'runners';

export type NavGroup = 'exercises' | 'pain' | 'work' | 'compare';

/** Footer label for each guide: shorter than the H1, read in a column. */
export const NAV_LABEL: Partial<Record<GuideKey, string>> = {
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

export const NAV_GROUPS: Record<NavGroup, readonly GuideKey[]> = {
  exercises: ['heelPain', 'flatFeet', 'calfRaises', 'achilles', 'shinSplints'],
  pain: ['morningHeelPain', 'pfDuration', 'ballOfFoot', 'runners'],
  work: ['standing', 'nurses', 'standingDesk'],
  compare: ['bestApp', 'vsExakt'],
};

export const GROUP_HEADING: Record<Lang, Record<NavGroup | 'walkito', string>> = {
  en: { exercises: 'Exercises', pain: 'Foot pain', work: 'On your feet', compare: 'Compare apps', walkito: 'Walkito' },
  ru: { exercises: 'Упражнения', pain: 'Боль в стопе', work: 'На ногах весь день', compare: 'Сравнение', walkito: 'Walkito' },
  es: { exercises: 'Ejercicios', pain: 'Dolor de pie', work: 'De pie todo el día', compare: 'Comparar', walkito: 'Walkito' },
};

/** The group a guide sits in, or null for pages outside the map. */
export function groupOf(key: GuideKey): NavGroup | null {
  for (const [group, keys] of Object.entries(NAV_GROUPS) as [NavGroup, readonly GuideKey[]][]) {
    if (keys.includes(key)) return group;
  }
  return null;
}
