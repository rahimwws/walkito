import type { Metadata } from 'next';

import { Home } from '@/components/Home';
import { alternatesFor } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

/*
 * No plan length anywhere: the plan is built a week at a time around a goal and
 * has no last week. «3, 5 или 10 минут» agrees with the last number of today's
 * `PROGRAM.sessionMinutes`; reread the sentence if it changes.
 */
const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;

const TITLE = 'Болит пятка после бега? План упражнений на каждую неделю | Walkito';
const DESCRIPTION = `Силовые упражнения для икр, растяжка и баланс по ${MIN_A}, ${MIN_B} или ${MIN_C} минут: план, который строится по одной неделе вокруг вашей цели и сбавляет нагрузку в плохие утра.`;

export const metadata: Metadata = {
  alternates: alternatesFor('home', 'ru'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/ru/',
    siteName: 'Walkito',
    locale: 'ru_RU',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HomeRu() {
  return <Home lang="ru" />;
}
