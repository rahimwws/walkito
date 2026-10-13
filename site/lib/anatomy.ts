import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

/**
 * Labelled anatomy illustrations, one file per language with the labels drawn
 * in: `/anatomy/<id>.<lang>.webp` (1200 px wide) and `@600w.webp`.
 * Made by `scripts/anatomy/render.html` from `scripts/anatomy/figures.mjs`;
 * the sizes below are the rendered ones.
 *
 * Four come from InjuryMap on Wikimedia Commons with new labels; reusing them
 * requires the credit, the licence and the source, printed under the image
 * and given in the ImageObject. The rest were made for Walkito.
 */
export type AnatomyId =
  | 'plantar-fascia'
  | 'heel-side'
  | 'calf'
  | 'achilles'
  | 'arches'
  | 'bunion'
  | 'mortons'
  | 'ball'
  | 'haglund';

type Source =
  | { by: 'walkito' }
  | { by: 'injurymap'; license: 'CC BY-SA 4.0' | 'CC BY 4.0'; file: string };

const BY_SA = 'CC BY-SA 4.0' as const;

export const ANATOMY: Record<AnatomyId, { w: number; h: number; source: Source }> = {
  'plantar-fascia': { w: 1200, h: 1336, source: { by: 'injurymap', license: BY_SA, file: 'Plantar_fascia.svg' } },
  'heel-side': { w: 1200, h: 925, source: { by: 'injurymap', license: BY_SA, file: 'Pain_under_your_heel.svg' } },
  calf: { w: 1200, h: 888, source: { by: 'injurymap', license: BY_SA, file: 'Lower_leg_muscles.svg' } },
  achilles: { w: 1200, h: 722, source: { by: 'injurymap', license: 'CC BY 4.0', file: 'Achilles_tendonitis.svg' } },
  arches: { w: 1200, h: 432, source: { by: 'walkito' } },
  bunion: { w: 1200, h: 875, source: { by: 'walkito' } },
  mortons: { w: 1200, h: 867, source: { by: 'walkito' } },
  ball: { w: 1200, h: 867, source: { by: 'walkito' } },
  haglund: { w: 1200, h: 755, source: { by: 'walkito' } },
};

const LICENSE_URL = {
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
} as const;

const ILLUSTRATION = {
  en: 'Illustration',
  es: 'Ilustración',
  ru: 'Иллюстрация',
  pt: 'Ilustração',
  fr: 'Illustration',
  it: 'Illustrazione',
  de: 'Illustration',
} as const satisfies Record<Lang, string>;

const LABELS_BY = {
  en: 'labels by Walkito',
  es: 'rótulos de Walkito',
  ru: 'подписи Walkito',
  pt: 'legendas da Walkito',
  fr: 'légendes de Walkito',
  it: 'didascalie di Walkito',
  de: 'Beschriftung von Walkito',
} as const satisfies Record<Lang, string>;

export function anatomySrc(id: AnatomyId, lang: Lang, small = false) {
  return `/anatomy/${id}.${lang}${small ? '@600w' : ''}.webp`;
}

/** The credit line under the image, as parts the component links up. */
export function anatomyCredit(id: AnatomyId, lang: Lang) {
  const { source } = ANATOMY[id];
  if (source.by === 'walkito') return { lead: `${ILLUSTRATION[lang]}: Walkito` } as const;
  return {
    lead: `${ILLUSTRATION[lang]}: `,
    author: 'InjuryMap',
    authorUrl: `https://commons.wikimedia.org/wiki/File:${source.file}`,
    license: source.license,
    licenseUrl: LICENSE_URL[source.license],
    tail: LABELS_BY[lang],
  } as const;
}

/** `ImageObject` for an anatomy figure on a page. */
export function anatomySchema(
  fig: { id: AnatomyId; caption: string; alt: string },
  lang: Lang,
  pageUrl: string,
) {
  const { w, h, source } = ANATOMY[fig.id];
  const walkito = { '@type': 'Organization', name: 'Walkito', url: SITE_URL };
  const base = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE_URL}${anatomySrc(fig.id, lang)}`,
    url: pageUrl,
    name: fig.caption,
    caption: fig.alt,
    inLanguage: lang,
    width: w,
    height: h,
  };
  if (source.by === 'walkito') {
    return { ...base, creator: walkito, creditText: 'Walkito', copyrightNotice: '© Walkito' };
  }
  return {
    ...base,
    creator: [{ '@type': 'Organization', name: 'InjuryMap', url: 'https://www.injurymap.com/' }, walkito],
    creditText: `InjuryMap (${source.license}), labels by Walkito`,
    copyrightNotice: 'InjuryMap',
    license: LICENSE_URL[source.license],
    acquireLicensePage: `https://commons.wikimedia.org/wiki/File:${source.file}`,
    isBasedOn: `https://commons.wikimedia.org/wiki/File:${source.file}`,
  };
}
