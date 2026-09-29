import Image from 'next/image';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Footer } from '@/components/Footer';
import { APP, HomeEn } from '@/components/HomeEn';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { CHROME, TRANSLATED, type Lang } from '@/lib/i18n';
import { IN_SESSION_STOP, PAIN_GOAL_MAX, PROGRAM } from '@/lib/site';

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;

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
 * the page that proves it: the week built around a goal, the day shaped by the
 * morning, and the test that measures it. Every number comes from `PROGRAM` or
 * the two thresholds beside it in `lib/site.ts`.
 *
 * Russian and Spanish only. The English home page is `HomeEn`, and the English
 * runner copy that used to be here now lives at `/heel-pain-runners/`.
 */
const COPY: Record<Exclude<Lang, 'en'>, HomeCopy> = {
  ru: {
    h1: 'Болит пятка',
    h1Line2: 'после бега?',
    intro: `Walkito: план упражнений при боли в пятке и стопе у бегунов: силовые упражнения для икр, растяжка и баланс, ${MIN_A}, ${MIN_B} или ${MIN_C} минут за тренировку. План строится по одной неделе вокруг цели, которую можно измерить; каждое утро день подстраивается под то, как чувствует себя пятка, а достигнутую цель сменяет следующая.`,
    shotAlt: 'Walkito на iPhone: неделя в виде семи огоньков, утренняя отметка и задания на день.',
    howHeading: 'Как это работает',
    how: [
      {
        title: 'По неделе, вокруг одной цели',
        text: `Каждая неделя строится вокруг цели, которую можно измерить: утренняя боль в пятке не выше ${PAIN_GOAL_MAX} из 10 ${PROGRAM.painFreeDays} дней подряд, удержание свода ${archHoldSeconds} секунд, ${calfRaises} подъёмов на носок на одной ноге, баланс на одной ноге ${balanceSeconds} секунд или разница между левой и правой стороной меньше ${gapPercent}%. Достигнутая цель переходит в поддержание, а её место занимает следующая.`,
        href: '/ru/bol-v-pyatke-uprazhneniya/',
        link: 'Упражнения при боли в пятке',
      },
      {
        title: `${MIN_A}, ${MIN_B} или ${MIN_C} минут, в зависимости от утра`,
        text: `Отметьте утреннюю боль в пятке одним касанием. Сильная боль с утра, много шагов накануне или короткий сон делают тренировку короче или мягче, а боль ${IN_SESSION_STOP} из 10 и выше во время тренировки завершает её и облегчает две следующие. В плохой день нагрузка снижается, а план не останавливается.`,
        href: '/science/',
        link: 'Исследования (на английском)',
      },
      {
        title: `Тест каждые ${PROGRAM.testEveryDays} дней, затем каждые ${PROGRAM.testEveryDaysAfterGoal}`,
        text: `${PROGRAM.retestTests} физических теста примерно за ${PROGRAM.retestMinutes} минуты: подъёмы на носок до отказа, удержание свода и баланс на одной ноге с обеих сторон. Каждые ${PROGRAM.testEveryDays} дней, пока не достигнута первая цель, затем каждые ${PROGRAM.testEveryDaysAfterGoal}. Прогресс измеряется, а не угадывается по ощущениям за неделю.`,
        href: '/ru/ploskostopie-uprazhneniya/',
        link: 'Упражнения при плоскостопии',
      },
    ],
    guidesHeading: 'Начните с упражнений',
    guides: [
      {
        title: 'Упражнения при боли в пятке',
        text: 'Подъёмы на носок и растяжка со стартовыми дозировками Walkito и тем, что советуют клинические рекомендации 2023 года.',
      },
      {
        title: 'Упражнения при плоскостопии',
        text: '«Короткая стопа», пальцы и баланс при гибком плоскостопии, и сколько недель нужно своду.',
      },
    ],
  },
  es: {
    h1: '¿Dolor de talón',
    h1Line2: 'al correr?',
    intro: `Walkito es un plan de ejercicios para el dolor de talón y de pie en corredores: fuerza de pantorrilla, estiramientos y equilibrio en sesiones de ${MIN_A}, ${MIN_B} o ${MIN_C} minutos. Se construye semana a semana en torno a un objetivo que se puede medir; cada mañana el día se adapta a cómo está el talón y, cuando alcanzas un objetivo, el siguiente ocupa su lugar.`,
    shotAlt: 'Walkito en iPhone: la semana como siete llamas, el registro de hoy y las tareas del día.',
    howHeading: 'Cómo funciona',
    how: [
      {
        title: 'Semana a semana, en torno a un objetivo',
        text: `Cada semana gira en torno a un objetivo medible: dolor de talón por la mañana de ${PAIN_GOAL_MAX}/10 o menos durante ${PROGRAM.painFreeDays} días seguidos, sostener el arco ${archHoldSeconds} segundos, ${calfRaises} elevaciones de talón a una pierna, ${balanceSeconds} segundos de equilibrio a una pierna o menos de un ${gapPercent} % de diferencia entre izquierda y derecha. Al alcanzarlo pasa a mantenimiento y el siguiente ocupa su lugar.`,
        href: '/es/ejercicios-fascitis-plantar/',
        link: 'Ejercicios para la fascitis plantar',
      },
      {
        title: `${MIN_A}, ${MIN_B} o ${MIN_C} minutos, según la mañana`,
        text: `Registra el dolor de talón de esta mañana con un toque. Una mañana con mucho dolor, muchos pasos ayer o una noche corta hacen la sesión de hoy más corta o más suave, y un dolor de ${IN_SESSION_STOP}/10 o más durante la sesión la termina y aligera las dos siguientes. Un mal día baja la carga sin detener el plan.`,
        href: '/science/',
        link: 'La evidencia (en inglés)',
      },
      {
        title: `Pruebas cada ${PROGRAM.testEveryDays} días, luego cada ${PROGRAM.testEveryDaysAfterGoal}`,
        text: `${PROGRAM.retestTests} pruebas físicas en unos ${PROGRAM.retestMinutes} minutos: elevaciones de talón hasta el fallo, sostener el arco y equilibrio a una pierna en los dos lados. Cada ${PROGRAM.testEveryDays} días hasta alcanzar el primer objetivo y después cada ${PROGRAM.testEveryDaysAfterGoal}. El progreso se mide, no se adivina por cómo fue la semana.`,
        href: '/es/ejercicios-pie-plano/',
        link: 'Ejercicios para pie plano',
      },
    ],
    guidesHeading: 'Empieza por los ejercicios',
    guides: [
      {
        title: 'Ejercicios para la fascitis plantar',
        text: 'Elevaciones de talón y estiramientos, con las dosis iniciales de Walkito y lo que recomienda la guía de 2023.',
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
  if (lang === 'en') return <HomeEn />;
  const copy = COPY[lang];
  const c = CHROME[lang];
  const suffix = `-${lang}`;
  const guideHrefs = [TRANSLATED.heelPain[lang], TRANSLATED.flatFeet[lang]];

  return (
    <>
      <JsonLd data={APP} />
      <Masthead lang={lang} />

      <main>
        <section className="shell hero">
          {/* The space is load-bearing. The span is a block, so on screen the
              two lines break either way — but a crawler, a reader view or a
              copied snippet reads the text nodes without CSS, and without it
              the heading is "Heel painfrom running?". */}
          <h1>
            {copy.h1}{' '}
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
