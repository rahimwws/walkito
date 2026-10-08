import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { ARTICLES_ES, guidePath, type Guide } from '@/lib/guides';
import { CHROME, alternatesCustomEnEs, type EnglishPage } from '@/lib/i18n';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const PATH = '/es/ejercicios/';
const TITLE = 'Biblioteca de ejercicios para pies y pantorrillas';
const DESCRIPTION =
  'Cada ejercicio del plan de Walkito: cómo hacerlo, series y repeticiones, errores comunes, versiones más fáciles y difíciles, y qué dice la investigación.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('exercises', 'es'),
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

const GROUPS: readonly { h2: string; text: string; keys: readonly EnglishPage[] }[] = [
  {
    h2: 'Estiramientos y movilidad',
    text: 'Para la rigidez en el arco, la pantorrilla y el tobillo. La mayoría de los planes los hacen casi todos los días.',
    keys: ['exPlantarFasciaStretch', 'exCalfStretch', 'exSoleusStretch', 'exAnkleRocks', 'exFootRoll'],
  },
  {
    h2: 'Fuerza de pantorrilla y tibia',
    text: 'Cargar la pantorrilla y el tendón de Aquiles, desde elevaciones sentado hasta la elevación con toalla y los excéntricos.',
    keys: ['exCalfRaises', 'exTowelHeelRaise', 'exEccentricHeelDrops', 'exTibialisRaises', 'exSingleLegBalance'],
  },
  {
    h2: 'Fuerza de pie, arco y cadera',
    text: 'Los músculos pequeños que sostienen el arco, los dedos, y los músculos de la cadera que controlan cómo aterriza el pie.',
    keys: ['exShortFoot', 'exTowelScrunch', 'exToeSpread', 'exBigToeLift', 'exBandInversion', 'exHipAbduction'],
  },
];

function firstMedia(g: Guide): string | undefined {
  return g.sections.flatMap((s) => s.exercises ?? []).find((e) => e.media)?.media;
}

const ALL = GROUPS.flatMap((grp) => grp.keys.map((k) => ARTICLES_ES[k]!));

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: 'es',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: ALL.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: g.crumb,
      url: `${SITE_URL}${guidePath(g)}`,
    })),
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Biblioteca de ejercicios', item: `${SITE_URL}${PATH}` },
  ],
};

export default function ExerciseLibraryEs() {
  const c = CHROME.es;
  return (
    <>
      <JsonLd data={SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="es" />
      <Prose className="shell prose">
        <h1>Biblioteca de ejercicios</h1>
        <p className="lede">
          Cada ejercicio del plan de Walkito en su propia página. Encuentras cómo hacerlo, la dosis
          de inicio, los errores que la gente comete, versiones más fáciles y más difíciles, y qué
          dice la investigación. Cada página tiene un video corto del movimiento.
        </p>
        <p>
          ¿No sabes por dónde empezar? Las guías juntan estos ejercicios para un problema:{' '}
          <a href="/es/ejercicios-fascitis-plantar/">fascitis plantar</a>,{' '}
          <a href="/es/ejercicios-pie-plano/">pie plano</a>,{' '}
          <a href="/es/dolor-de-pies-por-estar-de-pie/">de pie todo el día</a> y{' '}
          <a href="/es/dolor-de-talon-en-corredores/">dolor de talón en corredores</a>. Para evaluar
          tu fuerza de pantorrilla, prueba el{' '}
          <a href="/es/test-de-elevacion-de-talon/">test de elevación de talón</a>.
        </p>
        {GROUPS.map((grp) => (
          <section key={grp.h2}>
            <h2>{grp.h2}</h2>
            <p>{grp.text}</p>
            <ul className="library">
              {grp.keys.map((k) => {
                const g = ARTICLES_ES[k];
                if (!g) return null;
                const media = firstMedia(g);
                return (
                  <li key={k}>
                    <a href={guidePath(g)}>
                      {media && <img src={`/exercises/${media}.webp`} alt={`Demostración: ${g.crumb.toLowerCase()}`} width={96} height={120} loading="lazy" />}
                      <span>
                        <strong>{g.crumb}</strong>
                        <span>{g.description}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        <p className="notice">{c.notice}</p>
        <AppStoreBadge campaign="exercise-library-es" lang="es" />
      </Prose>
      <Footer lang="es" languages={{ en: '/exercises/', es: PATH, ru: '/ru/uprazhneniya/' }} />
    </>
  );
}
