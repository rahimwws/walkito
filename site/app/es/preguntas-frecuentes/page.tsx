import type { Metadata } from 'next';
import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Cite } from '@/components/Cite';
import { Masthead } from '@/components/Masthead';
import { Prose, typeset } from '@/components/Prose';
import { FAQ_ES, FAQ_GROUPS_ES } from '@/lib/faq-es';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { faqSchema } from '@/lib/schema';
import { PAGE_UPDATED, SITE_NAME, SITE_URL } from '@/lib/site';

const TITLE = 'Preguntas frecuentes sobre Walkito';
const DESCRIPTION =
  'Cómo funciona el plan de Walkito para el dolor de talón: sesiones, metas, pruebas, malas mañanas, correr, Apple Health, privacidad, precios y la investigación.';
const PATH = '/es/preguntas-frecuentes/';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('faq', 'es'),
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

const FAQ_SCHEMA = faqSchema(FAQ_ES);

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Preguntas frecuentes', item: `${SITE_URL}${PATH}` },
  ],
};

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return typeset(
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <b key={i}>{bold[1]}</b>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>,
  );
}

export default function FaqEs() {
  const c = CHROME.es;
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="es" />

      <Prose className="shell prose">
        <h1>App de ejercicios para el dolor de talón: preguntas y respuestas</h1>
        <Byline lang="es" />

        <p className="lede">
          Walkito es un plan de ejercicios para el dolor de talón, el dolor en el arco y el pie
          plano flexible. No tiene una duración fija. Arma una semana a la vez en torno a una meta
          que puedes medir, y cada día se adapta a cómo se sintió tu mañana. Aquí está lo que
          Walkito te pide, lo que hace con lo que registras, lo que encontró la investigación, y lo
          que nunca va a hacer.
        </p>

        <nav className="toc" aria-label={c.contents}>
          <h2>{c.contents}</h2>
          <ol>
            {FAQ_GROUPS_ES.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`}>{group.h2}</a>
              </li>
            ))}
          </ol>
        </nav>

        {FAQ_GROUPS_ES.map((group) => (
          <section key={group.id} id={group.id}>
            <h2>{group.h2}</h2>
            <div className="faq">
              {group.entries.map((entry) => (
                <section key={entry.q}>
                  <h3>{entry.q}</h3>
                  <p>
                    <Inline text={entry.a} />
                  </p>
                  {entry.source && (
                    <p className="cite">
                      <Inline text={entry.source} />
                    </p>
                  )}
                  {entry.cites?.map((i) => <Cite key={i} index={i} />)}
                </section>
              ))}
            </div>
          </section>
        ))}

        <p>
          Los ejercicios con dosis de inicio están en{' '}
          <a href="/es/ejercicios-fascitis-plantar/">
            ejercicios y estiramientos para la fascitis plantar
          </a>{' '}
          y <a href="/es/ejercicios-pie-plano/">ejercicios para pie plano</a>. Los
          estudios detrás de cada cifra están en{' '}
          <a href="/es/evidencia/">la página de evidencia</a>.
        </p>

        <UpdatedLine lang="es" updated={PAGE_UPDATED.faq} />
        <p className="notice">{c.notice}</p>

        <AppStoreBadge campaign="faq-es" lang="es" />
      </Prose>

      <Footer lang="es" languages={{ en: '/faq/', es: PATH }} />
    </>
  );
}
