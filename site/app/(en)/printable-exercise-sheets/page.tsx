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

const PATH = '/printable-exercise-sheets/';
const TITLE = 'Printable Foot Exercise Sheets (Free PDF)';
const DESCRIPTION =
  'Free printable PDF sheets: plantar fasciitis exercises, flat feet exercises and exercises for standing all day, with doses, pictures and a week log.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('printables', 'en'),
  openGraph: { title: `${TITLE} | ${SITE_NAME}`, description: DESCRIPTION, url: PATH, siteName: SITE_NAME, locale: 'en_US', type: 'website', images: ['/share/en.jpg'] },
};

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  hasPart: PRINTABLES.map((p) => ({
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Printable exercise sheets', item: `${SITE_URL}${PATH}` },
  ],
};

export default function PrintableSheets() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="en" />
      <Prose className="shell prose">
        <h1>Printable foot exercise sheets</h1>
        <p className="lede">
          Free PDF sheets you can print and stick on the fridge. Each one has the exercises with a picture, the dose,
          how to do it, when to stop, a week log to tick off, and when to see a clinician. They come from our guides,
          so the doses match.
        </p>
        <EmailSignup lang="en" source="printables" page="/printable-exercise-sheets/" />
        <div className="printables">
          {PRINTABLES.map((p) => (
            <div key={p.slug} className="printable">
              <a href={`/downloads/${p.slug}.pdf`} download>
                <img src={`/downloads/${p.slug}.webp`} alt={`First page of the ${p.title} sheet`} width={210} height={272} loading="lazy" />
              </a>
              <div>
                <h2>{p.title}</h2>
                <p>{p.blurb}</p>
                <p className="printable-meta">
                  {p.pages} pages · US Letter · <a href={p.guide}>Read the full guide with videos</a>
                </p>
                <p>
                  <a className="printable-download" href={`/downloads/${p.slug}.pdf`} download>
                    Download PDF
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2>How to use a sheet</h2>
        <ul>
          <li>Start with the easier exercises and the lower dose. Mild discomfort is fine. Sharp pain is not.</li>
          <li>If the pain is worse the next morning, drop back a step for a few days.</li>
          <li>Tick the week log. Seeing the days add up is most of what keeps people going.</li>
          <li>The doses are Walkito&rsquo;s starting doses, not a prescription for you.</li>
        </ul>
        <p>
          Want the plan to adjust for you each morning instead? That is what the Walkito app does: it asks how your feet
          feel and picks today&rsquo;s session.
        </p>
        <p className="notice">{c.notice}</p>
        <AppStoreBadge campaign="printables" lang="en" />
      </Prose>
      <Footer lang="en" languages={{ en: '/printable-exercise-sheets/', es: '/es/hojas-de-ejercicios-imprimibles/', ru: '/ru/uprazhneniya-dlya-pechati/' }} />
    </>
  );
}
