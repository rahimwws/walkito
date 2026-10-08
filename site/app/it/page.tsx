import type { Metadata } from 'next';

import { HOME_META, Home } from '@/components/Home';
import { OG_LOCALE, alternatesFor } from '@/lib/i18n';

const { title, description } = HOME_META.it;

export const metadata: Metadata = {
  // Absolute: the name already leads the title, so the layout's " | Walkito" is not appended.
  title: { absolute: title },
  description,
  alternates: alternatesFor('home', 'it'),
  openGraph: {
    title,
    description,
    url: '/it/',
    siteName: 'Walkito',
    locale: OG_LOCALE.it,
    type: 'website',
    images: ['/share/en.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/share/en.jpg'] },
};

export default function HomeIt() {
  return <Home lang="it" />;
}
