import type { Metadata } from 'next';
import { Fragment } from 'react';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Cite } from '@/components/Cite';
import { Masthead } from '@/components/Masthead';
import { FaqRows, Prose, typeset } from '@/components/Prose';
import { FAQ_RU, FAQ_GROUPS_RU } from '@/lib/faq-ru';
import { CHROME, alternatesCustom } from '@/lib/i18n';
import { faqSchema } from '@/lib/schema';
import { PAGE_UPDATED, SITE_NAME, SITE_URL } from '@/lib/site';

const TITLE = 'Вопросы и ответы о Walkito';
const DESCRIPTION =
  'Как работает план Walkito при боли в пятке: занятия, цели, тесты, плохие утра, бег, Apple Health, конфиденциальность, цены и исследования.';
const PATH = '/ru/voprosy/';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustom('faq', 'ru'),
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
    images: ['/ru/opengraph-image'],
  },
};

const FAQ_SCHEMA = faqSchema(FAQ_RU);

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/ru/` },
    { '@type': 'ListItem', position: 2, name: 'Вопросы', item: `${SITE_URL}${PATH}` },
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

export default function FaqRu() {
  const c = CHROME.ru;
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="ru" current="faq" />

      <Prose className="shell prose" kicker={{ label: c.navQuestions, lang: 'ru', num: String(FAQ_RU.length) }}>
        <h1>Приложение с упражнениями при боли в пятке: вопросы и ответы</h1>
        <Byline lang="ru" />

        <p className="lede">
          Walkito даёт план упражнений при боли в пятке, боли в своде стопы и гибком
          плоскостопии. У плана нет фиксированной длительности. Он строит по одной
          неделе вокруг измеримой цели, и каждый день подстраивается под то, как
          чувствовалось утро. Здесь описано, что Walkito от вас просит, что делает 
          с тем, что вы отмечаете, что показали исследования и чего он никогда не сделает.
        </p>

        <nav className="toc" aria-label={c.contents}>
          <h2>{c.contents}</h2>
          <ol>
            {FAQ_GROUPS_RU.map((group) => (
              <li key={group.id}>
                <a href={`#${group.id}`}>{group.h2}</a>
              </li>
            ))}
          </ol>
        </nav>

        {FAQ_GROUPS_RU.map((group) => (
          <section key={group.id} id={group.id}>
            <h2>{group.h2}</h2>
            <FaqRows
              items={group.entries.map((entry) => ({
                q: entry.q,
                a: (
                  <>
                    <p>
                      <Inline text={entry.a} />
                    </p>
                    {entry.source && (
                      <p className="cite">
                        <Inline text={entry.source} />
                      </p>
                    )}
                    {entry.cites?.map((i) => <Cite key={i} index={i} />)}
                  </>
                ),
              }))}
            />
          </section>
        ))}

        <p>
          Упражнения со стартовыми дозировками описаны в{' '}
          <a href="/ru/bol-v-pyatke-uprazhneniya/">
            гайде по упражнениям при плантарном фасциите
          </a>{' '}
          и <a href="/ru/ploskostopie-uprazhneniya/">гайде по упражнениям при
          плоскостопии</a>. Исследования, стоящие за каждой цифрой, приведены на{' '}
          <a href="/ru/issledovaniya/">странице с исследованиями</a>.
        </p>

        <UpdatedLine lang="ru" updated={PAGE_UPDATED.faq} />
        <p className="notice">{c.notice}</p>

        <AppStoreBadge campaign="faq-ru" lang="ru" />
      </Prose>

      <Footer lang="ru" languages={{ en: '/faq/', es: '/es/preguntas-frecuentes/', ru: PATH }} />
    </>
  );
}
