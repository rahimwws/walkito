import type { Metadata } from 'next';

import { Home } from '@/components/Home';
import { alternatesFor } from '@/lib/i18n';

export const metadata: Metadata = {
  alternates: alternatesFor('home', 'ru'),
  openGraph: {
    title: 'Болит пятка после бега? Программа на 12 недель | Walkito',
    description: 'Силовые упражнения для икр, растяжка и баланс — 3–8 минут в день, с поправкой на утреннюю боль.',
    url: '/ru/',
    siteName: 'Walkito',
    locale: 'ru_RU',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: {
    title: 'Болит пятка после бега? Программа на 12 недель | Walkito',
    description: 'Силовые упражнения для икр, растяжка и баланс — 3–8 минут в день, с поправкой на утреннюю боль.',
  },
};

export default function HomeRu() {
  return <Home lang="ru" />;
}
