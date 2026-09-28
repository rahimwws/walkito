import type { Metadata } from 'next';

import { Home } from '@/components/Home';
import { alternatesFor } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

/** `3, 5 o 10` — the session options as a Spanish list, as the guides say it. */
const MINUTES = `${PROGRAM.sessionMinutes.slice(0, -1).join(', ')} o ${PROGRAM.sessionMinutes[PROGRAM.sessionMinutes.length - 1]}`;

// No length in the card: the plan is built a week at a time around a goal and
// has no end date.
const TITLE = '¿Dolor de talón al correr? Ejercicios que se adaptan a ti | Walkito';
const DESCRIPTION = `Fuerza de pantorrilla, estiramientos y equilibrio en sesiones de ${MINUTES} minutos, con un plan que se arma cada semana y se ajusta a tu dolor de la mañana.`;

export const metadata: Metadata = {
  alternates: alternatesFor('home', 'es'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/es/',
    siteName: 'Walkito',
    locale: 'es_ES',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HomeEs() {
  return <Home lang="es" />;
}
