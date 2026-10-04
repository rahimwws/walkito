import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { Founders } from '@/components/Founders';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose, typeset } from '@/components/Prose';
import type { About as AboutData } from '@/lib/about/types';
import { CHROME, TRANSLATED } from '@/lib/i18n';
import { formatDate } from '@/lib/schema';
import { REVIEWER } from '@/lib/reviewer';
import { PAGE_UPDATED, SAME_AS, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

const REVIEWER_HEADING = { en: 'Who reviews our guides', ru: 'Кто проверяет наши гайды', es: 'Quién revisa nuestras guías' } as const;

/** `[label](/path/)` and `**bold**`, the same two marks the guides allow. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return typeset(
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <b key={i}>{bold[1]}</b>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
        return <span key={i}>{part}</span>;
      })}
    </>,
  );
}

/** One About page. `AboutPage` in schema, pointing at the Organization. */
export function About({ about }: { about: AboutData }) {
  const c = CHROME[about.lang];
  const path = TRANSLATED.about[about.lang];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: about.title,
    description: about.description,
    inLanguage: about.lang,
    url: `${SITE_URL}${path}`,
    dateModified: PAGE_UPDATED.about,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      email: SUPPORT_EMAIL,
      ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
    },
  };
  return (
    <>
      <JsonLd data={schema} />
      <Masthead lang={about.lang} />
      <Prose className="shell prose">
        <h1>{about.h1}</h1>
        <p className="byline">
          {c.updated} <time dateTime={PAGE_UPDATED.about}>{formatDate(PAGE_UPDATED.about, about.lang)}</time>
        </p>
        <p className="lede">
          <Inline text={about.lede} />
        </p>
        <AppStoreBadge campaign={about.lang === 'en' ? 'about' : `about-${about.lang}`} lang={about.lang} />
        {REVIEWER && (
          <section className="reviewer-card" id="reviewer">
            <h2>{REVIEWER_HEADING[about.lang]}</h2>
            <div>
              {REVIEWER.photo && <img src={REVIEWER.photo} alt={REVIEWER.name} width={96} height={96} />}
              <div>
                <p className="reviewer-name">{REVIEWER.name}</p>
                <p className="reviewer-cred">
                  {REVIEWER.credentials} · {REVIEWER.affiliation}
                </p>
                <p>{REVIEWER.bio}</p>
                {REVIEWER.sameAs.length > 0 && (
                  <p className="reviewer-links">
                    {REVIEWER.sameAs.map((u) => (
                      <a key={u} href={u} rel="noopener">
                        {new URL(u).hostname.replace(/^www\./, '')}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
        {/* The "no clinician has reviewed" answer gives way to the reviewer card. */}
        {about.sections.filter((s) => !(REVIEWER && s.id === 'clinician')).map((section, index) => (
          <Fragment key={section.h2}>
            <section>
              <h2 id={section.id}>{section.h2}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p}>
                  <Inline text={p} />
                </p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((b) => (
                    <li key={b}>
                      <Inline text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
            {/* Who makes it, right after what it is. */}
            {index === 0 && (
              <section>
                <Founders lang={about.lang} />
              </section>
            )}
          </Fragment>
        ))}
        <p className="notice">{c.notice}</p>
      </Prose>
      <Footer lang={about.lang} page="about" />
    </>
  );
}
