import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Cite } from '@/components/Cite';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { articleSchema } from '@/lib/schema';
import { PAGE_UPDATED, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * Spanish evidence page, translated from `app/(en)/science/page.tsx`.
 *
 * Three rules from the English page apply here too, word for word:
 *
 *   1. Every number traces to a citation printed on this page.
 *   2. No finding is rounded up and no qualifier is dropped.
 *   3. The twelve-month convergence travels with the three-month result, every
 *      claim about arch shape says which feet it was measured on, and the
 *      meta-analysis's six-week figure travels with its overall null result.
 *
 * Back-translated and compared section by section against the English source
 * on 2026-10-07. Every number, sample size, hedge and evidence label matches.
 */

const TITLE = 'Evidencia: fuerza vs estiramiento para el dolor de talón';
const DESCRIPTION =
  'Qué encontraron los ensayos sobre fuerza vs estiramiento para la fascitis plantar y ejercicio para el pie plano flexible, y qué recomienda la guía de 2023.';
const PATH = '/es/evidencia/';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('science', 'es'),
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    locale: 'es_MX',
    type: 'article',
    publishedTime: '2026-09-21',
    modifiedTime: PAGE_UPDATED.science,
    images: ['/share/es.jpg'],
  },
};

const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: PATH,
  lang: 'es',
  published: '2026-09-21',
  updated: PAGE_UPDATED.science,
  cites: [0, 1, 2, 3],
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Evidencia', item: `${SITE_URL}${PATH}` },
  ],
};

const H = {
  twoProblems: { id: 'dos-problemas', h2: '¿El dolor de talón y el arco plano son el mismo problema?' },
  strength: { id: 'fuerza-vs-estiramiento', h2: '¿El entrenamiento de fuerza es mejor que el estiramiento para la fascitis plantar?' },
  arch: { id: 'arco', h2: '¿El ejercicio puede cambiar un arco plano?' },
  guideline: { id: 'guia', h2: '¿Qué recomienda la guía de 2023 para la fascitis plantar?' },
  comeBack: { id: 'puede-volver', h2: '¿El dolor de talón puede volver después de que se alivia?' },
  measure: { id: 'que-mide-walkito', h2: 'Lo que Walkito mide, y lo que no' },
  isNot: { id: 'que-no-es-walkito', h2: 'Lo que Walkito no es' },
  clinician: { id: 'consulta', h2: 'Consulta primero a un profesional de la salud si' },
} as const;

const GRADES: readonly [option: string, grade: string, inWalkito: string][] = [
  ['Estiramiento de la fascia plantar y de la pantorrilla', 'A', 'En el plan desde la primera semana'],
  ['Terapia manual (trabajo con las manos sobre las articulaciones y tejidos blandos de la pierna y el pie), hecha por un profesional', 'A', 'No es parte de Walkito'],
  ['Vendaje junto con otra fisioterapia, para mejorar dolor y función hasta por 6\u00A0semanas', 'A', 'No es parte de Walkito'],
  ['Férulas nocturnas de 1 a 3\u00A0meses, si tus primeros pasos de cada mañana siguen doliendo', 'A', 'No es parte de Walkito'],
  ['Entrenamiento de resistencia y fuerza', 'B', 'La base del plan, un nivel a la vez'],
  ['Láser de baja intensidad y punción seca, hechos por un profesional', 'B', 'No es parte de Walkito'],
  ['Plantillas ortopédicas solas, para alivio del dolor a corto plazo', 'B en contra', 'No se recomiendan por sí solas'],
  ['Plantillas ortopédicas combinadas con otros cuidados', 'C', 'No es parte de Walkito'],
  ['Ultrasonido terapéutico añadido al estiramiento', 'A en contra', 'No se incluye'],
];

export default function ScienceEs() {
  const c = CHROME.es;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="es" current="science" />

      <Prose className="shell prose" kicker={{ label: c.navEvidence, lang: 'es' }}>
        <h1>Evidencia sobre el dolor de talón: fuerza vs estiramiento, y la guía de 2023</h1>
        <Byline lang="es" cites={[0, 1, 2, 3]} main={3} />

        <p className="lede">
          Esta página lista los estudios en los que se basa Walkito, lo que encontraron y dónde se
          acaba su evidencia. Son cuatro: un ensayo sobre dolor de talón, un ensayo y una revisión
          sobre pie plano, y la guía clínica de 2023 para el dolor de talón.
        </p>
        <p>
          Para el dolor de talón por fascitis plantar, la guía de 2023 le da al estiramiento su
          grado más alto, A, y al entrenamiento de fuerza una B. En un ensayo con 48&nbsp;personas,
          las elevaciones de talón con carga alta aliviaron el dolor más rápido que el estiramiento,
          y a los doce meses los dos grupos estaban igualados.
        </p>
        <p>
          Para el pie plano{' '}
          <b>flexible</b>, un ensayo con 52&nbsp;personas encontró que seis semanas de ejercicio
          cambiaron la forma del arco. Una revisión de 2024 sobre el entrenamiento de pie corto no
          encontró una diferencia significativa en general, y solo una medida del arco mejoró en
          programas de más de seis semanas.
        </p>

        <nav className="toc" aria-label={c.contents}>
          <h2>{c.contents}</h2>
          <ol>
            {Object.values(H).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.h2}</a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id={H.twoProblems.id}>{H.twoProblems.h2}</h2>
        <p>
          El dolor de talón y la forma del arco son dos problemas distintos, y la investigación los
          mide de formas diferentes. El ensayo sobre dolor de talón calificó dolor y función diaria.
          Los estudios del arco midieron la forma del arco, no el dolor.
        </p>
        <p className="cite">
          El ensayo sobre dolor de talón se midió con el Foot Function Index. Los estudios del arco
          se midieron con la caída del navicular y el ángulo del arco, dos medidas de la forma del
          arco.
        </p>
        <p>
          Así que un resultado para uno no es prueba para el otro. Los estudios del arco no
          demuestran que el entrenamiento del arco alivie el dolor. El trabajo de fuerza de
          pantorrilla no está hecho para cambiar la forma del arco. Walkito trabaja las dos cosas
          como metas separadas: mañanas más fáciles, y mantener el arco{' '}
          {PROGRAM.goals.archHoldSeconds}&nbsp;segundos. Hasta tres metas pueden estar activas a la
          vez, y el dolor va primero cuando tienes dolor.
        </p>
        <p>
          La meta del arco es para el pie plano flexible, en el que el arco vuelve cuando el pie no
          toca el piso. Walkito no revisa qué tipo de pie tienes. Si tu arco sigue plano incluso sin
          tocar el piso, deja de lado la meta del arco y consulta a un profesional de la salud.
          Cómo las metas comparten una semana está en{' '}
          <a href="/es/programa/">la página del plan</a>.
        </p>

        <h2 id={H.strength.id}>{H.strength.h2}</h2>
        <p>
          Para la fascitis plantar, el entrenamiento de fuerza trajo alivio antes que el
          estiramiento, y a los doce meses los dos estaban igualados. En un ensayo con
          48&nbsp;personas con fascitis plantar confirmada por ultrasonido, todos usaron plantillas.
          Un grupo hizo elevaciones de talón con carga alta un día sí y un día no. El otro estiró
          la fascia plantar todos los días. A los tres meses, el grupo de la fuerza iba claramente
          adelante en dolor y función diaria. A los doce meses, los dos grupos estaban igualados.
        </p>
        <p className="cite">
          Medido con el Foot Function Index (dolor y función): 29&nbsp;puntos menos en el grupo de
          la fuerza a los tres meses (IC 95&nbsp;%: 6-52, p&nbsp;=&nbsp;0,016), y 22 frente a 16
          a los doce meses, una diferencia no significativa.
        </p>
        <Cite index={0} />
        <p>
          Así que el trabajo de fuerza adelanta la mejora. No la hace más grande. Esa es la única
          afirmación que Walkito hace sobre el trabajo de fuerza: antes, no más. Nunca promete una
          cura.
        </p>
        <p>
          La elevación de talón de Walkito sigue este ensayo. Te paras en un pie en un escalón, con
          una toalla bajo los dedos. Tardas tres segundos en subir, mantienes dos y tardas tres en
          bajar, en días de fuerza, tres a la semana, nunca dos seguidos.
        </p>
        <p>
          Está cerca de lo más alto
          de los ejercicios de pantorrilla de Walkito, que se ponen más difíciles un nivel a la vez.
          Nunca llega en la primera semana, que mantiene la carga lejos de la fascia plantar al
          inicio. El ejercicio y su dosis de inicio están en{' '}
          <a href="/es/ejercicios-fascitis-plantar/">
            ejercicios y estiramientos para la fascitis plantar
          </a>
          .
        </p>

        <h2 id={H.arch.id}>{H.arch.h2}</h2>
        <p>
          El ejercicio puede cambiar la forma de un arco plano <b>flexible</b>, y la evidencia
          dice que le des seis semanas o más. En un ensayo con 52&nbsp;personas con pie plano
          flexible, un programa de seis semanas mejoró el arco más que en el grupo de control. El
          programa mezcló entrenamiento de pie corto (llevar la parte delantera del pie hacia el
          talón para que el arco suba), trabajo de tobillo, fortalecimiento de cadera y
          estiramientos.
        </p>
        <p className="cite">
          La caída del navicular mejoró 0,4&nbsp;cm y el ángulo del arco 16&nbsp;grados más que en
          el grupo de control.
        </p>
        <Cite index={1} />
        <p>
          Una revisión de 2024 juntó los estudios sobre el entrenamiento de pie corto. No encontró{' '}
          <b>diferencia significativa en general</b> comparado con grupos de control. Una medida del
          arco mejoró solo en programas de{' '}
          <b>más de seis semanas</b>, y los autores dicen que hacen falta estudios más grandes. La
          revisión juntó estudios sobre pie plano en general, y la mayoría no dejó claro si las
          personas tenían síntomas.
        </p>
        <p className="cite">
          Resultados del metaanálisis: caída del navicular y Foot Posture Index, ninguno
          significativamente diferente del control en general. La caída del navicular mejoró de
          forma significativa solo en el subgrupo de programas de más de seis semanas.
        </p>
        <Cite index={2} />
        <p>
          Esa es una de las razones por las que el plan de Walkito no tiene fecha de fin. La meta del
          arco sigue en el plan hasta que la alcanzas, en vez de detenerse en una fecha que puede
          llegar antes de que se aplique esta evidencia. Los ejercicios y sus dosis de inicio están
          en <a href="/es/ejercicios-pie-plano/">ejercicios para pie plano</a>.
        </p>

        <h2 id={H.guideline.id}>{H.guideline.h2}</h2>
        <p>
          La guía clínica de 2023 para la fascitis plantar califica cada opción según la fuerza de
          su evidencia, y A es el grado más alto. La guía fue publicada en el{' '}
          <i>Journal of Orthopaedic &amp; Sports Physical Therapy</i>. Un grado marcado «en contra»
          significa que la guía aconseja no usar esa opción. La última columna dice qué hace Walkito
          con cada una.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Opción</th>
                <th>Grado</th>
                <th>En Walkito</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map(([option, grade, inWalkito]) => (
                <tr key={option}>
                  <th scope="row">{option}</th>
                  <td>
                    <b>{grade}</b>
                  </td>
                  <td>{inWalkito}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Cite index={3} />
        <p>
          Para la carga, la misma guía aconseja aprender a cambiar la carga sobre tus pies en el
          trabajo, en el deporte y en el día a día. Ese consejo tiene grado E, lo que significa que
          se basa en teoría, no en ensayos. Walkito cambia la carga en vez de detenerse. En una
          mañana con mucho dolor la sesión se hace más corta y más ligera, pero sigue pasando. Qué
          significa eso si corres está en{' '}
          <a href="/es/ejercicios-fascitis-plantar/">la guía de dolor de talón</a>.
        </p>

        <h2 id={H.comeBack.id}>{H.comeBack.h2}</h2>
        <p>
          El dolor de talón puede volver después de que se alivia, así que el plan de Walkito no
          tiene una duración fija ni una última semana en la que los ejercicios se detengan. El plan
          se arma una semana a la vez en torno a una meta. Cuando alcanzas una meta, pasa a
          mantenimiento: conserva un lugar en el plan con una dosis más baja, y la siguiente meta
          ocupa su lugar.
        </p>
        <p>
          Las pruebas siguen cada{' '}
          {PROGRAM.testEveryDaysAfterGoal}&nbsp;días después de tu primera meta, así que una bajada
          en los números se ve en vez de adivinarse. Nada de esto promete que el dolor no va a
          volver.
        </p>

        <h2 id={H.measure.id}>{H.measure.h2}</h2>
        <p>
          Walkito mide el progreso con {PROGRAM.retestTests}&nbsp;pruebas físicas que duran unos{' '}
          {PROGRAM.retestMinutes}&nbsp;minutos: elevaciones de talón a una pierna hasta que no
          puedas más, cuánto tiempo mantienes el arco y equilibrio a una pierna. Las pruebas se
          hacen cada {PROGRAM.testEveryDays}&nbsp;días hasta tu primera meta, y después cada{' '}
          {PROGRAM.testEveryDaysAfterGoal}. Son medidas, no estimaciones, y usar más la app no
          puede subirlas.
        </p>
        <p>
          Walkito también puede leer la asimetría al caminar de la app Salud: el porcentaje de
          tiempo en que tus pasos con un pie son más rápidos o más lentos que con el otro. El
          iPhone la estima por su cuenta. Walkito la compara solo con <b>tu propio</b> punto de
          partida, nunca con los números de otras personas. Te va a decir cuando tu patrón de
          caminata cambie. Nunca te va a decir que ese cambio significa que estás lesionado.
        </p>

        <h2 id={H.isNot.id}>{H.isNot.h2}</h2>
        <p>
          Walkito es un programa de ejercicios. No diagnostica ni trata ninguna afección, y no
          reemplaza a un profesional de la salud. Cómo se escriben y revisan estas páginas está en{' '}
          <a href="/es/sobre-walkito/">la página Sobre Walkito</a>. Las preguntas sobre la app se
          responden en <a href="/es/preguntas-frecuentes/">las preguntas frecuentes</a>.
        </p>
        <p>
          El ensayo del arco arriba se hizo con pie plano <b>flexible</b>, en el que el arco
          vuelve cuando el pie no toca el piso. La revisión de 2024 juntó estudios sobre pie plano
          en general. El pie plano rígido es un problema estructural que el ejercicio no va a
          cambiar.
        </p>

        <h2 id={H.clinician.id}>{H.clinician.h2}</h2>
        <ul>
          <li>el dolor empezó después de una lesión o una caída</li>
          <li>viene con entumecimiento, hormigueo, ardor, hinchazón o calor</li>
          <li>te despierta por la noche</li>
          <li>es un dolor agudo o empeora</li>
          <li>te duele al apretar los lados del talón</li>
          <li>un arco se aplanó de repente en la edad adulta</li>
        </ul>
        <p>
          La lista completa está en{' '}
          <a href="/es/ejercicios-fascitis-plantar/">la guía de dolor de talón</a>.
        </p>

        <AppStoreBadge campaign="science-es" lang="es" />
        <UpdatedLine lang="es" updated={PAGE_UPDATED.science} />
      </Prose>

      <Footer lang="es" languages={{ en: '/science/', es: PATH, ru: '/ru/issledovaniya/' }} />
    </>
  );
}
