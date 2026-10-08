import type { Metadata } from 'next';

import { OG_LOCALE, TRANSLATED, alternatesFor } from '@/lib/i18n';
import { SITE_NAME } from '@/lib/site';

import { ABOUT_EN } from './en';
import { ABOUT_ES } from './es';
import { ABOUT_RU } from './ru';
import { ABOUT_PT } from './pt';
import { ABOUT_FR } from './fr';
import { ABOUT_IT } from './it';
import { ABOUT_DE } from './de';
import type { About } from './types';

export type { About } from './types';

export const ABOUT = { en: ABOUT_EN, ru: ABOUT_RU, es: ABOUT_ES, pt: ABOUT_PT, fr: ABOUT_FR, it: ABOUT_IT, de: ABOUT_DE } as const;

export function aboutMetadata(about: About): Metadata {
  return {
    title: about.title,
    description: about.description,
    alternates: alternatesFor('about', about.lang),
    openGraph: {
      title: `${about.title} | ${SITE_NAME}`,
      description: about.description,
      url: TRANSLATED.about[about.lang],
      siteName: SITE_NAME,
      locale: OG_LOCALE[about.lang],
      type: 'website',
      images: ['/opengraph-image'],
    },
  };
}
