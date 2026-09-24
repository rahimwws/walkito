import Image from 'next/image';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { CHROME, TRANSLATED, type Lang } from '@/lib/i18n';
import { PROGRAM, SITE_NAME } from '@/lib/site';

/**
 * The app itself, as schema.
 *
 * No `offers` and no `aggregateRating`, both deliberately. The price in the
 * brief was a number nobody checked against the store, and a rating block with
 * no ratings behind it is a manual-action risk rather than a shortcut — these
 * go in when there is a listing and real reviews to point at.
 */
const APP = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS',
  description: `A ${PROGRAM.weeks}-week exercise program for heel and foot pain in runners.`,
  availableLanguage: ['en', 'ru', 'es'],
  featureList: [
    `Daily sessions of ${PROGRAM.sessionMinutesMin} to ${PROGRAM.sessionMinutesMax} minutes`,
    'Plan adapts to logged pain and daily load',
    `Retest assessments every ${PROGRAM.blockDays} days`,
  ],
};

type HomeCopy = {
  h1: string;
  h1Line2: string;
  intro: string;
  shotAlt: string;
  howHeading: string;
  how: readonly { title: string; text: string; href: string; link: string }[];
  guidesHeading: string;
  guides: readonly { title: string; text: string }[];
};

/**
 * What the page shows in place of reviews.
 *
 * There were three quotes here, copied from the onboarding. They were written
 * by us — `testimonials.ts` says so — and there is no listing yet, so there are
 * no users to have said them. On a health product a made-up review is an FTC
 * problem as well as a trust one, and the page already refuses a rating block
 * for the same reason. Real reviews go back in once the store has some.
 *
 * Until then the page shows what can be checked: three mechanisms, each with
 * the page that proves it. Every number comes from `PROGRAM`.
 */
const COPY: Record<Lang, HomeCopy> = {
  en: {
    h1: 'Heel pain',
    h1Line2: 'from running?',
    intro: `Walkito is a ${PROGRAM.weeks}-week exercise program for heel and foot pain in runners: ${PROGRAM.sessionMinutesMin} to ${PROGRAM.sessionMinutesMax} minutes a day of calf strength, stretching and balance work, a retest every ${PROGRAM.blockDays} days, and a plan that steps back on the mornings your heel says it should.`,
    shotAlt: "Walkito on iPhone: the week as seven flames, today's check-in, and the day's tasks.",
    howHeading: 'How it works',
    how: [
      {
        title: 'It steps back on bad mornings',
        text: 'Log this morning’s heel pain in one tap. A high number shortens the session and drops a level; a long day on your feet takes the loaded work out. It never speeds up on a good day.',
        href: '/program/',
        link: 'How the plan adapts',
      },
      {
        title: `A retest every ${PROGRAM.blockDays} days`,
        text: `${PROGRAM.retestTests} physical tests in ${PROGRAM.retestMinutes} minutes — calf raises to failure, an arch hold, single-leg balance on both sides. Progress is measured, not guessed from how the week felt.`,
        href: '/program/',
        link: 'What the retests measure',
      },
      {
        title: 'Built from the trials',
        text: 'High-load calf strength and plantar-specific stretching, at the doses the published trials used and in the order the 2023 clinical guideline for heel pain recommends.',
        href: '/science/',
        link: 'Read the evidence',
      },
    ],
    guidesHeading: 'Start with the exercises',
    guides: [
      {
        title: 'Exercises for plantar fasciitis',
        text: 'Heel raises and stretches, with doses from the trials and what the 2023 guideline recommends.',
      },
      {
        title: 'Exercises for flat feet',
        text: 'Short-foot, toe and balance work for flexible flat feet, and how long the arch takes to respond.',
      },
    ],
  },
  ru: {
    h1: 'Болит пятка',
    h1Line2: 'после бега?',
    intro: `Walkito — программа упражнений на ${PROGRAM.weeks} недель при боли в пятке и стопе у бегунов: ${PROGRAM.sessionMinutesMin}–${PROGRAM.sessionMinutesMax} минут в день силовых упражнений для икр, растяжки и баланса, ретест каждые ${PROGRAM.blockDays} дней и план, который сбавляет нагрузку в те утра, когда пятка болит сильнее.`,
    shotAlt: 'Walkito на iPhone: неделя в виде семи огоньков, утренняя отметка и задания на день.',
    howHeading: 'Как это работает',
    how: [
      {
        title: 'Сбавляет нагрузку в плохие утра',
        text: 'Отметьте утреннюю боль в пятке одним касанием. Высокая оценка делает тренировку короче и на уровень легче; долгий день на ногах убирает силовую часть. В хороший день план никогда не ускоряется.',
        href: '/ru/bol-v-pyatke-uprazhneniya/',
        link: 'Упражнения при боли в пятке',
      },
      {
        title: `Ретест каждые ${PROGRAM.blockDays} дней`,
        text: `${PROGRAM.retestTests} физических теста за ${PROGRAM.retestMinutes} минуты — подъёмы на носок до отказа, удержание свода и баланс на одной ноге с обеих сторон. Прогресс измеряется, а не угадывается по ощущениям за неделю.`,
        href: '/ru/ploskostopie-uprazhneniya/',
        link: 'Упражнения при плоскостопии',
      },
      {
        title: 'Основано на исследованиях',
        text: 'Силовые упражнения для икр и растяжка подошвенной фасции — в дозировках из опубликованных исследований и в порядке, который рекомендуют клинические рекомендации 2023 года по боли в пятке.',
        href: '/science/',
        link: 'Исследования (на английском)',
      },
    ],
    guidesHeading: 'Начните с упражнений',
    guides: [
      {
        title: 'Упражнения при боли в пятке',
        text: 'Подъёмы на носок и растяжка — с дозировками из исследований и тем, что рекомендуют клинические рекомендации 2023 года.',
      },
      {
        title: 'Упражнения при плоскостопии',
        text: '«Короткая стопа», пальцы и баланс при гибком плоскостопии — и сколько недель нужно своду.',
      },
    ],
  },
  es: {
    h1: '¿Dolor de talón',
    h1Line2: 'al correr?',
    intro: `Walkito es un programa de ejercicios de ${PROGRAM.weeks} semanas para el dolor de talón y de pie en corredores: de ${PROGRAM.sessionMinutesMin} a ${PROGRAM.sessionMinutesMax} minutos al día de fuerza de pantorrilla, estiramientos y equilibrio, unas pruebas cada ${PROGRAM.blockDays} días y un plan que baja el ritmo las mañanas en que el talón lo pide.`,
    shotAlt: 'Walkito en iPhone: la semana como siete llamas, el registro de hoy y las tareas del día.',
    howHeading: 'Cómo funciona',
    how: [
      {
        title: 'Baja el ritmo en las mañanas malas',
        text: 'Registra el dolor de talón de esta mañana con un toque. Un número alto acorta la sesión y baja un nivel; un día largo de pie quita el trabajo con carga. En un día bueno nunca acelera.',
        href: '/es/ejercicios-fascitis-plantar/',
        link: 'Ejercicios para la fascitis plantar',
      },
      {
        title: `Pruebas cada ${PROGRAM.blockDays} días`,
        text: `${PROGRAM.retestTests} pruebas físicas en ${PROGRAM.retestMinutes} minutos: elevaciones de talón hasta el fallo, sostener el arco y equilibrio a una pierna en los dos lados. El progreso se mide, no se adivina por cómo fue la semana.`,
        href: '/es/ejercicios-pie-plano/',
        link: 'Ejercicios para pie plano',
      },
      {
        title: 'Basado en los ensayos',
        text: 'Fuerza de pantorrilla con carga y estiramiento específico de la fascia, con las dosis de los ensayos publicados y en el orden que recomienda la guía clínica de 2023 para el dolor de talón.',
        href: '/science/',
        link: 'La evidencia (en inglés)',
      },
    ],
    guidesHeading: 'Empieza por los ejercicios',
    guides: [
      {
        title: 'Ejercicios para la fascitis plantar',
        text: 'Elevaciones de talón y estiramientos, con las dosis de los ensayos y lo que recomienda la guía de 2023.',
      },
      {
        title: 'Ejercicios para pie plano',
        text: 'Pie corto, dedos y equilibrio para el pie plano flexible, y cuánto tarda el arco en responder.',
      },
    ],
  },
};

/**
 * The home page, in each of the site's languages.
 *
 * The headline names the problem the way people search for it. The old one —
 * "Run without second-guessing" — was the best line on the page and matched no
 * query anyone types, so the page ranked for nothing. The paragraph under it
 * answers the query in its first sentence, which is the passage a search
 * snippet or an AI answer lifts. The product's rule still holds in every
 * language: no word implying diagnosis or cure.
 */
export function Home({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const c = CHROME[lang];
  const suffix = lang === 'en' ? '' : `-${lang}`;
  const guideHrefs = [TRANSLATED.heelPain[lang], TRANSLATED.flatFeet[lang]];

  return (
    <>
      <JsonLd data={APP} />
      <Masthead lang={lang} />

      <main>
        <section className="shell hero">
          <h1>
            {copy.h1}
            <span>{copy.h1Line2}</span>
          </h1>
          <p>{copy.intro}</p>
          <AppStoreBadge campaign={`home-hero${suffix}`} anchor lang={lang} />

          <div className="shot">
            <Image src="/app-home.png" alt={copy.shotAlt} width={360} height={735} priority />
          </div>
        </section>

        <section className="shell proof">
          <h2>{copy.howHeading}</h2>
          <div className="quotes">
            {copy.how.map((item) => (
              <figure key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href}>{item.link} →</a>
              </figure>
            ))}
          </div>
        </section>

        {/* The guides, linked from the page with the most authority on the
            site. They are the pages built to rank for the queries people
            actually type, and a link from home is the strongest internal
            signal a new domain has to give them. */}
        <section className="shell proof guides">
          <h2>{copy.guidesHeading}</h2>
          <div className="quotes">
            {copy.guides.map((g, i) => (
              <figure key={g.title}>
                <h3>
                  <a href={guideHrefs[i]}>{g.title} →</a>
                </h3>
                <p>{g.text}</p>
              </figure>
            ))}
          </div>
          <p className="notice">{c.notice}</p>
          <AppStoreBadge campaign={`home-bottom${suffix}`} lang={lang} />
        </section>
      </main>

      <Footer lang={lang} page="home" />
    </>
  );
}
