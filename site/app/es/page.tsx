import type { Metadata } from 'next';

import { HOME_META, Home } from '@/components/Home';
import { OG_LOCALE, alternatesFor } from '@/lib/i18n';

const { title, description } = HOME_META.es;

export const metadata: Metadata = {
  // Absolute: the name already leads the title, so the layout's " | Walkito" is not appended.
  title: { absolute: title },
  description,
  alternates: alternatesFor('home', 'es'),
  openGraph: {
    title,
    description,
    url: '/es/',
    siteName: 'Walkito',
    locale: OG_LOCALE.es,
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: { title, description },
};

export default function HomeEs() {
  return <Home lang="es" />;
}
