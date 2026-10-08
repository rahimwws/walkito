import type { Metadata } from 'next';

import { HOME_META, Home } from '@/components/Home';
import { OG_LOCALE, alternatesFor } from '@/lib/i18n';

const { title, description } = HOME_META.ru;

export const metadata: Metadata = {
  // Absolute: the name already leads the title, so the layout's " | Walkito" is not appended.
  title: { absolute: title },
  description,
  alternates: alternatesFor('home', 'ru'),
  openGraph: {
    title,
    description,
    url: '/ru/',
    siteName: 'Walkito',
    locale: OG_LOCALE.ru,
    type: 'website',
    images: ['/ru/opengraph-image'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/ru/opengraph-image'] },
};

export default function HomeRu() {
  return <Home lang="ru" />;
}
