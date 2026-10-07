import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { ARTICLES_EN, guidePath, type Guide } from '@/lib/guides';
import { CHROME, alternatesCustomEnEs, type EnglishPage } from '@/lib/i18n';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const PATH = '/exercises/';
const TITLE = 'Foot and Calf Exercise Library: How to Do Each One';
const DESCRIPTION =
  'Every exercise in the Walkito plan, one page each: how to do it, sets and reps, common mistakes, easier and harder versions, and what the research says.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('exercises', 'en'),
  openGraph: { title: `${TITLE} | ${SITE_NAME}`, description: DESCRIPTION, url: PATH, siteName: SITE_NAME, type: 'website', images: ['/opengraph-image'] },
};

/** The library in three groups, in the order a plan usually adds them. */
const GROUPS: readonly { h2: string; text: string; keys: readonly EnglishPage[] }[] = [
  {
    h2: 'Stretches and mobility',
    text: 'For stiffness in the arch, the calf and the ankle. Most plans do these almost every day.',
    keys: ['exPlantarFasciaStretch', 'exCalfStretch', 'exSoleusStretch', 'exAnkleRocks', 'exFootRoll'],
  },
  {
    h2: 'Calf and shin strength',
    text: 'Loading the calf and Achilles tendon, from seated raises up to the towel heel raise and heel drops.',
    keys: ['exCalfRaises', 'exTowelHeelRaise', 'exEccentricHeelDrops', 'exTibialisRaises', 'exSingleLegBalance'],
  },
  {
    h2: 'Foot, arch and hip strength',
    text: 'The small muscles that hold up the arch, the toes, and the hip muscles that control how the foot lands.',
    keys: ['exShortFoot', 'exTowelScrunch', 'exToeSpread', 'exBigToeLift', 'exBandInversion', 'exHipAbduction'],
  },
];

function firstMedia(g: Guide): string | undefined {
  return g.sections.flatMap((s) => s.exercises ?? []).find((e) => e.media)?.media;
}

const ALL = GROUPS.flatMap((grp) => grp.keys.map((k) => ARTICLES_EN[k]));

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: ALL.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.crumb, url: `${SITE_URL}${guidePath(g)}` })),
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Exercise library', item: `${SITE_URL}${PATH}` },
  ],
};

export default function ExerciseLibrary() {
  const c = CHROME.en;
  return (
    <>
      <JsonLd data={SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="en" />
      <Prose className="shell prose">
        <h1>Exercise library</h1>
        <p className="lede">
          Every exercise in the Walkito plan, one page each. You get how to do it, the starting dose, the mistakes people
          make, easier and harder versions, and what the research says. Each page has a short video of the movement.
        </p>
        <p>
          Not sure where to start? The guides put these together for one problem: <a href="/plantar-fasciitis-exercises/">plantar fasciitis</a>,{' '}
          <a href="/flat-feet-exercises/">flat feet</a>, <a href="/feet-hurt-standing-all-day/">standing all day</a> and{' '}
          <a href="/heel-pain-runners/">heel pain from running</a>. To check your calf strength first, try the{' '}
          <a href="/calf-raise-test/">calf raise test</a>.
        </p>
        {GROUPS.map((grp) => (
          <section key={grp.h2}>
            <h2>{grp.h2}</h2>
            <p>{grp.text}</p>
            <ul className="library">
              {grp.keys.map((k) => {
                const g = ARTICLES_EN[k];
                const media = firstMedia(g);
                return (
                  <li key={k}>
                    <a href={guidePath(g)}>
                      {media && <img src={`/exercises/${media}.webp`} alt="" width={96} height={120} loading="lazy" />}
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
        <AppStoreBadge campaign="exercise-library" lang="en" />
      </Prose>
      <Footer lang="en" languages={{ en: '/exercises/', es: '/es/ejercicios/' }} />
    </>
  );
}
