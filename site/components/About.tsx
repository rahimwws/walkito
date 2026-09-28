import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import type { About as AboutData } from '@/lib/about/types';
import { CHROME, TRANSLATED } from '@/lib/i18n';
import { formatDate } from '@/lib/schema';
import { PAGE_UPDATED, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/** `[label](/path/)` and `**bold**`, the same two marks the guides allow. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <b key={i}>{bold[1]}</b>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) return <a key={i} href={link[2]}>{link[1]}</a>;
        return <span key={i}>{part}</span>;
      })}
    </>
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
    },
  };
  return (
    <>
      <JsonLd data={schema} />
      <Masthead lang={about.lang} />
      <main className="shell prose">
        <h1>{about.h1}</h1>
        <p className="byline">
          {c.updated} <time dateTime={PAGE_UPDATED.about}>{formatDate(PAGE_UPDATED.about, about.lang)}</time>
        </p>
        <p className="lede">
          <Inline text={about.lede} />
        </p>
        {about.sections.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
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
        ))}
        <p className="notice">{c.notice}</p>
      </main>
      <Footer lang={about.lang} page="about" />
    </>
  );
}
