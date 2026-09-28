import type { Metadata } from 'next';

import { Home } from '@/components/Home';
import { alternatesFor } from '@/lib/i18n';

export const metadata: Metadata = {
  alternates: alternatesFor('home', 'es'),
  openGraph: {
    title: '¿Dolor de talón al correr? Un programa de 12 semanas | Walkito',
    description: 'Fuerza de pantorrilla, estiramientos y equilibrio, de 3 a 8 minutos al día, ajustados a tu dolor de la mañana.',
    url: '/es/',
    siteName: 'Walkito',
    locale: 'es_ES',
    type: 'website',
    images: ['/opengraph-image'],
  },
  twitter: {
    title: '¿Dolor de talón al correr? Un programa de 12 semanas | Walkito',
    description: 'Fuerza de pantorrilla, estiramientos y equilibrio, de 3 a 8 minutos al día, ajustados a tu dolor de la mañana.',
  },
};

export default function HomeEs() {
  return <Home lang="es" />;
}
