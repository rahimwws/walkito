import type { Metadata } from 'next';

import { HOME_META, Home } from '@/components/Home';
import { OG_LOCALE, alternatesFor } from '@/lib/i18n';

const { title, description } = HOME_META.pt;

export const metadata: Metadata = {
  // Absolute: the name already leads the title, so the layout's " | Walkito" is not appended.
  title: { absolute: title },
  description,
  alternates: alternatesFor('home', 'pt'),
  openGraph: {
    title,
    description,
    url: '/pt/',
    siteName: 'Walkito',
    locale: OG_LOCALE.pt,
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
};

export default function HomePt() {
  return <Home lang="pt" />;
}
