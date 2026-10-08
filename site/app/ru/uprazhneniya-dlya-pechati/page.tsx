import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { EmailSignup } from '@/components/EmailSignup';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesCustom } from '@/lib/i18n';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const PATH = '/ru/uprazhneniya-dlya-pechati/';
const TITLE = 'Листы с упражнениями для стоп для печати (PDF бесплатно)';
const DESCRIPTION =
  'Бесплатные PDF для печати: упражнения при плантарном фасциите, плоскостопии и усталости стоп от стоячей работы, с дозировками и журналом.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustom('printables', 'ru'),
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

const PRINTABLES_RU: readonly {
  slug: string;
  title: string;
  blurb: string;
  guide: string;
  pages: number;
}[] = [
  {
    slug: 'walkito-plantar-fasciitis-exercises',
    title: 'Упражнения при плантарном фасциите (PDF на английском)',
    blurb: '8 растяжек и силовых упражнений для икр с дозировками, недельный журнал и когда обратиться к врачу.',
    guide: '/ru/bol-v-pyatke-uprazhneniya/',
    pages: 2,
  },
  {
    slug: 'walkito-flat-feet-exercises',
    title: 'Упражнения при плоскостопии (PDF на английском)',
    blurb: '10 упражнений для свода, пальцев и бёдер с дозировками, недельный журнал и когда обратиться к врачу.',
    guide: '/ru/ploskostopie-uprazhneniya/',
    pages: 3,
  },
  {
    slug: 'walkito-standing-all-day-exercises',
    title: 'Упражнения при усталости стоп от стоячей работы (PDF на английском)',
    blurb: '7 коротких упражнений для длинных смен, с дозировками, недельный журнал и когда обратиться к врачу.',
    guide: '/ru/bolyat-nogi-ot-stoyaniya/',
    pages: 2,
  },
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: 'ru',
  url: `${SITE_URL}${PATH}`,
  hasPart: PRINTABLES_RU.map((p) => ({
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
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/ru/` },
    { '@type': 'ListItem', position: 2, name: 'Листы для печати', item: `${SITE_URL}${PATH}` },
  ],
};

export default function PrintableSheetsRu() {
  const c = CHROME.ru;
  return (
    <>
      <JsonLd data={SCHEMA} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="ru" />
      <Prose className="shell prose">
        <h1>Листы с упражнениями для стоп для печати</h1>
        <p className="lede">
          Бесплатные PDF-листы, которые можно распечатать и повесить на холодильник.
          На каждом листе упражнения с иллюстрацией, дозировкой, описанием выполнения,
          когда остановиться, недельный журнал для отметок и когда обратиться к врачу.
          Они основаны на наших гайдах, поэтому дозировки совпадают. Файлы PDF на английском.
        </p>
        <EmailSignup lang="ru" source="printables" page={PATH} />
        <div className="printables">
          {PRINTABLES_RU.map((p) => (
            <div key={p.slug} className="printable">
              <a href={`/downloads/${p.slug}.pdf`} download>
                <img
                  src={`/downloads/${p.slug}.webp`}
                  alt={`Первая страница листа ${p.title}`}
                  width={210}
                  height={272}
                  loading="lazy"
                />
              </a>
              <div>
                <h2>{p.title}</h2>
                <p>{p.blurb}</p>
                <p className="printable-meta">
                  {p.pages}{'\u00A0'}страницы · US Letter · <a href={p.guide}>Полный гайд с видео</a>
                </p>
                <p>
                  <a className="printable-download" href={`/downloads/${p.slug}.pdf`} download>
                    Скачать PDF
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2>Как пользоваться листом</h2>
        <ul>
          <li>Начните с более лёгких упражнений и меньшей дозировки. Лёгкий дискомфорт допустим. Острая боль нет.</li>
          <li>Если на следующее утро стало хуже, снизьте нагрузку на несколько дней.</li>
          <li>Отмечайте недельный журнал. Видеть, как дни складываются, помогает не бросать.</li>
          <li>Это стартовые дозировки Walkito, а не назначение для вас.</li>
        </ul>
        <p>
          Хотите, чтобы план подстраивался за вас каждое утро? Именно это делает
          приложение Walkito: спрашивает, как чувствуют себя ваши стопы, и выбирает
          сегодняшнее занятие.
        </p>
        <p className="notice">{c.notice}</p>
        <AppStoreBadge campaign="printables-ru" lang="ru" />
      </Prose>
      <Footer lang="ru" languages={{ en: '/printable-exercise-sheets/', es: '/es/hojas-de-ejercicios-imprimibles/', ru: PATH }} />
    </>
  );
}
