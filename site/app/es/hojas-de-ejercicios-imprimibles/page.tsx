import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { EmailSignup } from '@/components/EmailSignup';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { PRINTABLES } from '@/lib/printables';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const PATH = '/es/hojas-de-ejercicios-imprimibles/';
const TITLE = 'Hojas de ejercicios para pies imprimibles (PDF gratis)';
const DESCRIPTION =
  'Hojas PDF gratis para imprimir: ejercicios para fascitis plantar, pie plano y pies cansados de estar de pie, con dosis, imágenes y un registro semanal.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('printables', 'es'),
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    locale: 'es_MX',
    type: 'website',
    images: ['/opengraph-image'],
  },
};

/**
 * Spanish labels for the English-only PDF printables. The PDFs themselves stay
 * in English (there are no Spanish PDF files), and each entry says so honestly
 * with "(PDF en inglés)".
 */
const PRINTABLES_ES: readonly {
  slug: string;
  title: string;
  blurb: string;
  guide: string;
  pages: number;
}[] = [
  {
    slug: 'walkito-plantar-fasciitis-exercises',
    title: 'Ejercicios para fascitis plantar (PDF en inglés)',
    blurb: '8 estiramientos y ejercicios de fuerza de pantorrilla con dosis, un registro semanal y cuándo consultar a un profesional.',
    guide: '/es/ejercicios-fascitis-plantar/',
    pages: 2,
  },
  {
    slug: 'walkito-flat-feet-exercises',
    title: 'Ejercicios para pie plano (PDF en inglés)',
    blurb: '10 ejercicios de arco, dedos y cadera con dosis, un registro semanal y cuándo consultar a un profesional.',
    guide: '/es/ejercicios-pie-plano/',
    pages: 3,
  },
  {
    slug: 'walkito-standing-all-day-exercises',
    title: 'Ejercicios para pies cansados de estar de pie (PDF en inglés)',
    blurb: '7 ejercicios cortos para turnos largos, con dosis, un registro semanal y cuándo consultar a un profesional.',
    guide: '/es/dolor-de-pies-por-estar-de-pie/',
    pages: 2,
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: 'es',
  url: `${SITE_URL}${PATH}`,
  hasPart: PRINTABLES_ES.map((p) => ({
    '@type': 'DigitalDocument',
    name: p.title,
    description: p.blurb,
    encodingFormat: 'application/pdf',
    url: `${SITE_URL}/downloads/${p.slug}.pdf`,
    isBasedOn: `${SITE_URL}${p.guide}`,
  })),
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Hojas imprimibles', item: `${SITE_URL}${PATH}` },
  ],
};

export default function PrintableSheetsEs() {
  const c = CHROME.es;
  return (
    <>
      <JsonLd data={SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="es" />
      <Prose className="shell prose">
        <h1>Hojas de ejercicios para pies imprimibles</h1>
        <p className="lede">
          Hojas PDF gratis que puedes imprimir y pegar en el refrigerador. Cada una tiene los
          ejercicios con una imagen, la dosis, cómo hacerlo, cuándo parar, un registro semanal
          para marcar los días, y cuándo consultar a un profesional de la salud. Vienen de
          nuestras guías, así que las dosis coinciden. Los PDF están en inglés.
        </p>
        <EmailSignup lang="es" source="printables" page={PATH} />
        <div className="printables">
          {PRINTABLES_ES.map((p) => (
            <div key={p.slug} className="printable">
              <a href={`/downloads/${p.slug}.pdf`} download>
                <img
                  src={`/downloads/${p.slug}.webp`}
                  alt={`Primera página de la hoja de ${p.title}`}
                  width={210}
                  height={272}
                  loading="lazy"
                />
              </a>
              <div>
                <h2>{p.title}</h2>
                <p>{p.blurb}</p>
                <p className="printable-meta">
                  {p.pages}&nbsp;páginas · Carta US · <a href={p.guide}>Lee la guía completa con videos</a>
                </p>
                <p>
                  <a className="printable-download" href={`/downloads/${p.slug}.pdf`} download>
                    Descargar PDF
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2>Cómo usar una hoja</h2>
        <ul>
          <li>Empieza con los ejercicios más fáciles y la dosis más baja. Una molestia leve está bien. Un dolor agudo no.</li>
          <li>Si el dolor es peor a la mañana siguiente, baja un paso por unos días.</li>
          <li>Marca el registro semanal. Ver los días acumularse es lo que más ayuda a seguir.</li>
          <li>Las dosis son las dosis de inicio de Walkito, no una indicación médica para ti.</li>
        </ul>
        <p>
          ¿Quieres que el plan se ajuste por ti cada mañana? Eso es lo que hace la app de Walkito:
          te pregunta cómo se sienten tus pies y elige la sesión de hoy.
        </p>
        <p className="notice">{c.notice}</p>
        <AppStoreBadge campaign="printables-es" lang="es" />
      </Prose>
      <Footer lang="es" languages={{ en: '/printable-exercise-sheets/', es: PATH, ru: '/ru/uprazhneniya-dlya-pechati/' }} />
    </>
  );
}
