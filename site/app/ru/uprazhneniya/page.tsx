import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { ARTICLES_RU, guidePath, type Guide } from '@/lib/guides';
import { CHROME, alternatesCustom, type EnglishPage } from '@/lib/i18n';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const PATH = '/ru/uprazhneniya/';
const TITLE = 'Библиотека упражнений для стоп и икр';
const DESCRIPTION =
  'Каждое упражнение из плана Walkito на отдельной странице: техника, подходы и повторения, частые ошибки, варианты и что говорят исследования.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustom('exercises', 'ru'),
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    locale: 'ru_RU',
    type: 'website',
    images: ['/opengraph-image'],
  },
};

const GROUPS: readonly { h2: string; text: string; keys: readonly EnglishPage[] }[] = [
  {
    h2: 'Растяжка и подвижность',
    text: 'Для жёсткости в своде, икре и голеностопе. В большинстве планов выполняются почти каждый день.',
    keys: ['exPlantarFasciaStretch', 'exCalfStretch', 'exSoleusStretch', 'exAnkleRocks', 'exFootRoll'],
  },
  {
    h2: 'Сила икр и голени',
    text: 'Нагрузка на икры и ахиллово сухожилие: от подъёмов сидя до подъёмов с полотенцем и эксцентрических опусканий.',
    keys: ['exCalfRaises', 'exTowelHeelRaise', 'exEccentricHeelDrops', 'exTibialisRaises', 'exSingleLegBalance'],
  },
  {
    h2: 'Сила стопы, свода и бёдер',
    text: 'Мелкие мышцы, удерживающие свод, пальцы стопы и мышцы бедра, контролирующие приземление стопы.',
    keys: ['exShortFoot', 'exTowelScrunch', 'exToeSpread', 'exBigToeLift', 'exBandInversion', 'exHipAbduction'],
  },
];

function firstMedia(g: Guide): string | undefined {
  return g.sections.flatMap((s) => s.exercises ?? []).find((e) => e.media)?.media;
}

const ALL = GROUPS.flatMap((grp) => grp.keys.map((k) => ARTICLES_RU[k]).filter(Boolean) as Guide[]);

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  inLanguage: 'ru',
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
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/ru/` },
    { '@type': 'ListItem', position: 2, name: 'Библиотека упражнений', item: `${SITE_URL}${PATH}` },
  ],
};

export default function ExerciseLibraryRu() {
  const c = CHROME.ru;
  return (
    <>
      <JsonLd data={SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="ru" />
      <Prose className="shell prose">
        <h1>Библиотека упражнений</h1>
        <p className="lede">
          Каждое упражнение из плана Walkito на отдельной странице. Здесь описано, как
          выполнять, стартовая дозировка, типичные ошибки, упрощённые и усложнённые
          варианты, и что говорят исследования. На каждой странице короткое видео движения.
        </p>
        <p>
          Не знаете, с чего начать? Гайды собирают эти упражнения для конкретной проблемы:{' '}
          <a href="/ru/bol-v-pyatke-uprazhneniya/">плантарный фасциит</a>,{' '}
          <a href="/ru/ploskostopie-uprazhneniya/">плоскостопие</a>,{' '}
          <a href="/ru/bolyat-nogi-ot-stoyaniya/">на ногах весь день</a> и{' '}
          <a href="/ru/bol-v-pyatke-u-begunov/">боль в пятке у бегунов</a>.
        </p>
        {GROUPS.map((grp) => (
          <section key={grp.h2}>
            <h2>{grp.h2}</h2>
            <p>{grp.text}</p>
            <ul className="library">
              {grp.keys.map((k) => {
                const g = ARTICLES_RU[k];
                if (!g) return null;
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
        <AppStoreBadge campaign="exercise-library-ru" lang="ru" />
      </Prose>
      <Footer lang="ru" languages={{ en: '/exercises/', es: '/es/ejercicios/', ru: PATH }} />
    </>
  );
}
