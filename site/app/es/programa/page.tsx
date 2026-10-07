import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { articleSchema } from '@/lib/schema';
import { IN_SESSION_STOP, PAGE_UPDATED, PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}`;

const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

const TITLE = 'Plan de ejercicios para el dolor de talón que se adapta';
const DESCRIPTION = `Cómo Walkito arma un plan de ejercicios para el dolor de talón: metas medibles, ${DAYS} días a la semana, sesiones de ${MINUTES} minutos, y una prueba corta cada ${PROGRAM.testEveryDays} días.`;
const PATH = '/es/programa/';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('program', 'es'),
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    siteName: SITE_NAME,
    locale: 'es_MX',
    type: 'article',
    publishedTime: '2026-09-21',
    modifiedTime: PAGE_UPDATED.program,
    images: ['/opengraph-image'],
  },
};

const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: PATH,
  lang: 'es',
  published: '2026-09-21',
  updated: PAGE_UPDATED.program,
  cites: [],
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Programa', item: `${SITE_URL}${PATH}` },
  ],
};

export default function ProgramEs() {
  const c = CHROME.es;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="es" />

      <Prose className="shell prose">
        <h1>Un plan de ejercicios para el dolor de talón que se adapta cada semana</h1>
        <Byline lang="es" cites={[]} />

        <p className="lede">
          Walkito arma tu plan de ejercicios para el dolor de talón una semana a la vez, en torno a
          metas que puedes medir. Cada mañana ajusta el día a cómo se siente tu pie. Una prueba
          corta cada {PROGRAM.testEveryDays}\u00A0días muestra qué está cambiando. El plan no tiene
          una duración fija: cuando alcanzas una meta, la siguiente ocupa su lugar.
        </p>
        <p>
          El dolor de talón puede cambiar de una mañana a otra, y una lista fija de ejercicios no
          puede distinguir una buena mañana de una mala. Así que el plan escucha tus registros y
          los resultados de tus pruebas, y cambia con ellos.
        </p>

        <h2>¿Cómo arma Walkito mi plan?</h2>
        <p>
          Walkito arma tu plan en cinco pasos. Cada uno tiene su propia sección abajo.
        </p>
        <ol>
          <li>
            Dices hacia qué estás trabajando, y Walkito establece hasta tres metas medibles,
            con el dolor primero si algo te duele.
          </li>
          <li>
            Eliges {DAYS}\u00A0días a la semana y sesiones de {MINUTES}\u00A0minutos. Walkito
            planea una semana a la vez.
          </li>
          <li>Cada mañana, un registro rápido ajusta la sesión de ese día.</li>
          <li>
            Cada {PROGRAM.testEveryDays}\u00A0días, una prueba de unos{' '}
            {PROGRAM.retestMinutes}\u00A0minutos mide tu progreso. Después de tu primera
            meta, se hace cada {PROGRAM.testEveryDaysAfterGoal}\u00A0días.
          </li>
          <li>
            Cuando alcanzas una meta, baja a una dosis más baja para que la mantengas, y la
            siguiente meta empieza.
          </li>
        </ol>

        <h2>¿Hacia qué metas trabaja Walkito?</h2>
        <p>
          Walkito trabaja hacia cinco metas, y cada una es un número que puedes probar, no una
          sensación.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Meta</th>
                <th scope="col">Objetivo</th>
                <th scope="col">Cómo se mide</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Mañanas sin dolor</th>
                <td>
                  Dolor de la mañana de {PAIN_GOAL_MAX}/10 o menos durante{' '}
                  {PROGRAM.painFreeDays}\u00A0días seguidos
                </td>
                <td>Tu registro de la mañana</td>
              </tr>
              <tr>
                <th scope="row">Mantener el arco</th>
                <td>{PROGRAM.goals.archHoldSeconds}\u00A0segundos</td>
                <td>La prueba</td>
              </tr>
              <tr>
                <th scope="row">Elevaciones de talón</th>
                <td>{PROGRAM.goals.calfRaises} elevaciones de talón a una pierna</td>
                <td>La prueba</td>
              </tr>
              <tr>
                <th scope="row">Equilibrio</th>
                <td>{PROGRAM.goals.balanceSeconds}\u00A0segundos en una pierna</td>
                <td>La prueba</td>
              </tr>
              <tr>
                <th scope="row">Diferencia izquierda/derecha</th>
                <td>Menos de {PROGRAM.goals.gapPercent}\u00A0% entre los dos lados</td>
                <td>Se calcula con tus elevaciones de talón</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="exercise-detail">
          <ScreenshotSlot
            src="/app/01-plan-goal.webp"
            label="Walkito: la tarjeta de meta, paso 2 de 4 hacia correr sin dolor, sobre la sesión de hoy"
            size="sm"
          />
          <div>
            <p>
              La configuración pregunta hacia qué estás trabajando, como correr sin dolor, piernas
              más fuertes o tobillos más estables. Walkito convierte tu respuesta en metas medibles,
              en un orden que le conviene. Empiezas con máximo tres. Si algo te duele, mañanas sin
              dolor siempre va primero.
            </p>
            <p>
              Cada semana, una meta es el foco, normalmente la que está más lejos de su objetivo.
              Una vez que tu dolor de la mañana ha bajado bastante, el foco puede pasar a una meta
              de fuerza mientras el dolor sigue bajando.
            </p>
          </div>
        </div>
        <p>
          La meta del arco es para el pie plano flexible, en el que el arco vuelve cuando el pie
          no toca el piso. Walkito no revisa qué tipo de pie tienes. Si tu arco sigue plano incluso
          sin tocar el piso, deja de lado la meta del arco y consulta a un profesional de la salud.
          El ejercicio no va a cambiar un pie cuya forma es estructural.
        </p>

        <h2>¿Cuántos días a la semana, y cuánto duran las sesiones?</h2>
        <p>
          Eliges {DAYS}\u00A0días de entrenamiento a la semana y sesiones de {MINUTES}{' '}
          minutos. La opción por defecto es {PROGRAM.defaultMinutes}\u00A0minutos, y puedes
          cambiarlo cualquier día. Cada sesión tiene de 2 a 4\u00A0ejercicios. El ejercicio de
          la meta de la semana va primero y nunca se quita, ni siquiera en una sesión de{' '}
          {PROGRAM.sessionMinutes[0]}\u00A0minutos. Los demás llenan el tiempo.
        </p>
        <div className="exercise-detail">
          <ScreenshotSlot
            src="/app/05-week.webp"
            label="Walkito: el plan de esta semana, de lunes a domingo con días de descanso, y la semana siguiente"
            size="sm"
          />
          <div>
            <p>
              Los días de fuerza nunca caen seguidos. Con cinco o siete días, sesiones de movilidad,
              equilibrio y recuperación se ponen entre ellos. Los días sin sesión son descanso
              planeado, y un descanso planeado nunca rompe tu racha.
            </p>
            <p>
              Walkito arma cada nueva semana a partir de cómo fue la anterior: tu dolor de la
              mañana, y si las sesiones se sintieron fáciles o difíciles.
            </p>
          </div>
        </div>

        <h2>¿Qué equipo necesito?</h2>
        <p>
          Puedes empezar el plan sin ningún equipo. Durante la configuración, Walkito te pregunta
          qué tienes en casa: un escalón o escaleras, una banda elástica, una toalla, una almohada
          o una pelota de masaje. Los ejercicios que necesitan algo que no tienes se quedan fuera de
          tu plan, y la semana se arma con el resto. Puedes elegir todos los que tengas, o ninguno.
        </p>

        <h2>¿El plan se pone más difícil con el tiempo?</h2>
        <p>
          El plan se pone más difícil despacio, un nivel a la vez, y solo cuando tu pie está listo.
          Los ejercicios van en cadenas, como pantorrilla, arco, equilibrio y cadera, del nivel 1
          al nivel 5. La cadena de tu meta sube un nivel cuando las dos últimas sesiones con ese
          ejercicio se sintieron fáciles, y solo si tu dolor de la mañana no subió esa semana. Una
          sesión difícil, o una semana en que el dolor de la mañana subió, lo baja un nivel.
        </p>
        <p>
          La primera semana te acomoda. No usa nada por encima del nivel 2 y nada que cargue la
          fascia plantar, la banda de tejido bajo el pie que va del talón a los dedos. El trabajo
          con carga, como la elevación de talones con toalla en{' '}
          <a href="/es/ejercicios-fascitis-plantar/">la guía de dolor de talón</a>, viene
          después. Mientras el dolor sea tu meta, el trabajo de pantorrilla en los días de fuerza
          se queda en nivel 1 o 2.
        </p>

        <h2>¿Qué pasa en una mala mañana?</h2>
        <p>
          En una mala mañana, Walkito hace la sesión de ese día más ligera. La semana dice para
          qué es cada día. Tu registro de la mañana decide cuánto de eso puede aguantar tu pie
          hoy:
        </p>
        <ul>
          <li>
            Una mañana con mucho dolor (7/10 o más) convierte el día en unos tres minutos de
            trabajo sentado que no carga la fascia plantar.
          </li>
          <li>
            Una mañana muy por encima de tu promedio reciente baja un nivel cada ejercicio.
          </li>
          <li>
            Un día muy largo de pie ayer, muy por encima de tu conteo habitual de pasos, convierte
            una sesión de fuerza en una de recuperación más ligera.
          </li>
          <li>Una noche corta de sueño baja un nivel la sesión.</li>
          <li>
            Un dolor de {IN_SESSION_STOP}/10 o más durante una sesión la termina, y las dos
            sesiones siguientes bajan un nivel.
          </li>
        </ul>
        <div className="exercise-detail">
          <ScreenshotSlot
            src="/app/02b-checkin-sheet.webp"
            label="Walkito: el registro de la mañana, dolor 7 de 10 en el talón, por encima del rango habitual"
            size="sm"
          />
          <div>
            <p>
              Los pasos y el sueño vienen de Apple Health, si lo permites. Esos datos se quedan en
              tu teléfono.
            </p>
            <p>
              Una buena mañana nunca acelera el plan. Un día solo baja, y después vuelve a lo
              normal. El progreso pasa de semana en semana, no en una buena mañana.
            </p>
          </div>
        </div>

        <h2>¿Cada cuánto mide Walkito mi progreso?</h2>
        <p>
          Walkito mide tu progreso cada {PROGRAM.testEveryDays}\u00A0días hasta que alcanzas tu
          primera meta, y después cada {PROGRAM.testEveryDaysAfterGoal}\u00A0días. Cada prueba
          tiene {PROGRAM.retestTests}\u00A0partes y dura unos {PROGRAM.retestMinutes}\u00A0minutos:
        </p>
        <ul>
          <li>elevaciones de talón en cada pierna, todas las que puedas</li>
          <li>mantener el arco arriba</li>
          <li>equilibrio en una pierna</li>
        </ul>
        <p>
          La diferencia entre tu lado izquierdo y derecho se calcula con las elevaciones de talón,
          así que no hay una cuarta prueba. Una meta se cuenta como alcanzada con estos números, o
          con tu registro de dolor de la mañana para la meta de dolor. Una racha de sesiones nunca
          cuenta por sí sola.
        </p>

        <h2>¿Qué pasa cuando alcanzo una meta?</h2>
        <p>
          Cuando alcanzas una meta, pasa a mantenimiento, y la siguiente ocupa su lugar. Una meta
          en mantenimiento conserva un lugar en tu plan con una dosis más baja: un nivel menos,
          en algunos días de fuerza. Así mantienes lo que construiste. El plan no tiene una última
          semana ni una pantalla de final. Cambia en qué trabaja en vez de terminar.
        </p>
        <p>
          El dolor de talón puede volver. Mantener el trabajo que ayudó, con una dosis más baja,
          le pareció mejor al equipo de Walkito que dejarlo la semana que deja de doler. Esa es una
          decisión de diseño, no un hallazgo de investigación.
        </p>

        <h2>¿En qué se basa el plan?</h2>
        <p>
          El plan se basa en los ejercicios y la investigación de las guías de Walkito. Los
          ejercicios y sus dosis de inicio están en{' '}
          <a href="/es/ejercicios-fascitis-plantar/">
            ejercicios y estiramientos para la fascitis plantar
          </a>{' '}
          y <a href="/es/ejercicios-pie-plano/">ejercicios para pie plano</a>. Los ensayos
          y la guía clínica de 2023 que los respaldan están en{' '}
          <a href="/es/evidencia/">la página de evidencia</a>. Ahí se explica por qué el
          trabajo de fuerza viene con el estiramiento, y cuánto tardó el trabajo de arco en
          mostrar resultados en la investigación. Las preguntas prácticas se responden en{' '}
          <a href="/es/preguntas-frecuentes/">las preguntas frecuentes</a>.
        </p>

        <h2>Empezar el plan</h2>
        <p>
          No tienes que decidir el orden, las dosis ni cuándo subir de nivel. Walkito lo hace una
          semana a la vez, y la prueba cada {PROGRAM.testEveryDays}\u00A0días te muestra qué está
          cambiando.
        </p>

        <UpdatedLine lang="es" updated={PAGE_UPDATED.program} />
        <p className="notice">{c.notice}</p>

        <p className="cta-line">Empieza con {PROGRAM.sessionMinutes[0]}\u00A0minutos al día.</p>
        <AppStoreBadge campaign="program-es" lang="es" />
      </Prose>

      <Footer lang="es" languages={{ en: '/program/', es: PATH }} />
    </>
  );
}
