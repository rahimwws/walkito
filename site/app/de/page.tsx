import type { Metadata } from 'next';

import { HOME_META, Home } from '@/components/Home';
import { OG_LOCALE, alternatesFor } from '@/lib/i18n';

const { title, description } = HOME_META.de;

export const metadata: Metadata = {
  // Absolute: the name already leads the title, so the layout's " | Walkito" is not appended.
  title: { absolute: title },
  description,
  alternates: alternatesFor('home', 'de'),
  openGraph: {
    title,
    description,
    url: '/de/',
    siteName: 'Walkito',
    locale: OG_LOCALE.de,
    type: 'website',
    images: ['/share/en.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/share/en.jpg'] },
};

export default function HomeDe() {
  return <Home lang="de" />;
}
