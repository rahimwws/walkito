import type { Metadata } from 'next';

import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Byline, UpdatedLine } from '@/components/Byline';
import { Evidence } from '@/components/Evidence';
import { Cite } from '@/components/Cite';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { ScreenshotSlot } from '@/components/ScreenshotSlot';
import { Prose } from '@/components/Prose';
import { CITE } from '@/lib/citations';
import { HEEL_PAIN_ES } from '@/lib/guides/es';
import { CHROME, alternatesCustomEnEs } from '@/lib/i18n';
import { articleSchema, faqSchema } from '@/lib/schema';
import { IN_SESSION_STOP, PAGE_UPDATED, PAIN_GOAL_MAX, PROGRAM, SITE_NAME, SITE_URL } from '@/lib/site';

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const [DAYS_A, DAYS_B, DAYS_C] = PROGRAM.daysPerWeek;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;

const TITLE = 'Dolor de talón en corredores: ¿descansar o seguir?';
const DESCRIPTION =
  '¿Dolor de talón al correr? Cuándo cambiar la carga en vez de parar, qué dice la mañana siguiente, señales de fractura por estrés, y un plan que se adapta.';
const PATH = '/es/dolor-de-talon-en-corredores/';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | ${SITE_NAME}` },
  description: DESCRIPTION,
  alternates: alternatesCustomEnEs('runners', 'es'),
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PATH,
    locale: 'es_MX',
    images: ['/es/opengraph-image'],
    type: 'article',
  },
};

const PUBLISHED = '2026-09-28';

const RUNNERS_CITES = [
  CITE.guideline,
  CITE.rathleff,
  CITE.achillesGuideline,
  CITE.alfredson,
  CITE.silbernagel,
  CITE.beyer,
  CITE.mtssReview,
  CITE.fatPadReview,
  CITE.posteriorTibialReview,
  CITE.buist,
  CITE.nielsen,
  CITE.malisoux,
];

const ARTICLE = articleSchema({
  headline: TITLE,
  description: DESCRIPTION,
  path: PATH,
  lang: 'es',
  published: PUBLISHED,
  updated: PAGE_UPDATED.runners,
  cites: RUNNERS_CITES,
  page: 'runners',
});

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/es/` },
    { '@type': 'ListItem', position: 2, name: 'Dolor de talón en corredores', item: `${SITE_URL}${PATH}` },
  ],
};

const ADAPT: readonly (readonly [string, string])[] = [
  ['Dolor de la mañana de 7/10 o más', `Una sesión de ${MIN_A}\u00A0minutos de trabajo sentado, sin nada que cargue la fascia plantar`],
  ['Dolor de la mañana 3 o más puntos por encima de tu promedio de las últimas 7\u00A0mañanas', 'Cada ejercicio baja un nivel'],
  ['Los pasos de ayer más de 1,4\u00A0veces tu promedio de 28\u00A0días, en un día de fuerza', 'La sesión de fuerza se convierte en una de recuperación más ligera'],
  ['Menos de 6\u00A0horas de sueño', 'Cada ejercicio baja un nivel'],
];

const FAQ = [
  {
    q: '¿Puedo seguir corriendo con fascitis plantar?',
    a: 'No tienes que dejarlo todo. Cambia la carga. La guía de 2023 para el dolor de talón recomienda aprender a ajustar la carga sobre tus pies, con grado E, lo que significa que viene de la teoría, no de ensayos. Corre menos tiempo, menos seguido o más suave, y sigue estirando todos los días. Si correr te duele de forma aguda o el dolor sigue empeorando, consulta a un profesional de la salud.',
  },
  {
    q: '¿Por qué me duele el talón la mañana después de correr?',
    a: 'El dolor de talón en los primeros pasos después de dormir es el patrón que más se relaciona con la fascitis plantar. La explicación habitual es que el tejido bajo el pie se pone rígido en reposo y después recibe carga de golpe con esos primeros pasos. Si tus primeros pasos son claramente peores la mañana después de correr, esa carrera fue más de lo que el talón podía aguantar.',
  },
  {
    q: '¿El dolor de talón al correr puede ser una fractura por estrés?',
    a: 'El dolor de talón al correr puede ser una fractura por estrés. Un dolor que aumenta durante las carreras después de subir el kilometraje, o un dolor al apretar los lados del talón, pueden ser señales de una. La guía de 2023 las menciona entre las otras causas de dolor de talón. Walkito no puede distinguirlas, así que detente y consulta primero a un profesional de la salud.',
  },
];

export default function HeelPainRunnersEs() {
  const c = CHROME.es;
  return (
    <>
      <JsonLd data={ARTICLE} />
      <JsonLd data={BREADCRUMBS} />
      <JsonLd data={faqSchema(FAQ)} />
      <Masthead lang="es" />

      <Prose>
        <section className="shell hero">
          <h1>
            ¿Dolor de talón
            <span>al correr?</span>
          </h1>
          <Byline lang="es" cites={RUNNERS_CITES} main={CITE.guideline} page="runners" />
          <p>
            Tu talón duele en los primeros pasos la mañana después de correr. Se calma cuando
            empiezas a moverte, y vuelve después de estar un rato sentado. No tienes que dejarlo
            todo. La guía de 2023 para el dolor de talón aconseja cambiar la carga sobre tus pies.
            Walkito lo incorpora en un plan de fuerza de pantorrilla, estiramiento y equilibrio, en
            sesiones de {MIN_A}, {MIN_B} o {MIN_C}&nbsp;minutos que se adaptan a cómo se siente
            cada mañana.
          </p>
          <AppStoreBadge campaign="runners-hero-es" lang="es" anchor />

          <div className="shot">
            <ScreenshotSlot
              src="/app/01-plan-goal.webp"
              label="Walkito: tu plan con una meta de correr sin dolor, paso 2 de 4, arco más fuerte"
              priority
            />
          </div>
        </section>

        <article className="shell prose">
          <section id="fascitis-plantar">
            <h2>¿El dolor de talón después de correr es fascitis plantar?</h2>
            <p>
              El dolor de talón en los primeros pasos de la mañana, o después de estar sentado un
              rato, es el patrón que más se relaciona con la fascitis plantar. Es un dolor de la
              fascia plantar, la banda de tejido bajo el pie. La guía clínica de 2023 para el dolor
              de talón la llama la causa más reconocida del dolor de talón bajo el pie.
            </p>
            <p>
              La fascitis plantar no es la única causa. La misma guía menciona las fracturas por
              estrés entre las otras causas de dolor de talón, y solo un profesional de la salud
              puede decir qué hay detrás del tuyo.
            </p>
            <blockquote>
              <p>
                "Plantar heel pain is an umbrella term that may represent a number
                of different diagnoses."
              </p>
              <footer>Guía clínica de 2023 para el dolor de talón, JOSPT</footer>
            </blockquote>
            <p>
              Por eso esta página también cubre el tendón de Aquiles, la tibia, la almohadilla
              grasa del talón y la parte interna del tobillo.
            </p>
            <Cite index={CITE.guideline} />
          </section>

          <section id="descansar-o-correr">
            <h2>¿Descansar o seguir corriendo con dolor de talón?</h2>
            <p>
              Si el dolor de talón se enciende cuando corres, cambia la carga en vez de dejarlo
              todo. La guía de 2023 recomienda aprender a ajustar la carga sobre tus pies en el
              trabajo, en el deporte y en el día a día. Ese consejo tiene grado E, lo que significa
              que se basa en teoría, no en ensayos. Así que no hay una regla probada sobre cuánto
              reducir.
            </p>
            <p>
              Por ejemplo, cambiar la carga puede ser carreras más cortas, menos carreras en una
              semana o más suaves. Sigue con los estiramientos de fascia plantar y pantorrilla todos
              los días, y reduce lo que empeore el talón. En una mala mañana, mantén los
              estiramientos y quita las elevaciones de talón por ese día.
            </p>
            <Cite index={CITE.guideline} />
          </section>

          <section id="manana-siguiente">
            <h2>¿Qué te dice la mañana siguiente después de correr?</h2>
            <p>
              La mañana después de correr te dice si esa carrera fue más de lo que tu talón podía
              aguantar. El dolor de la mañana es la señal más clara de cómo aguantó tu pie el día
              anterior. Si tus primeros pasos son claramente peores después de correr, haz la
              siguiente carrera más ligera.
            </p>
            <p>
              Walkito pregunta por tu dolor de la mañana todos los días por la misma razón. Lo
              registras con un solo toque en una escala de 0 a 10, y esa puntuación decide cuánto
              te pide la sesión de hoy. La primera meta para el dolor de talón es una mejor mañana:
              dolor de {PAIN_GOAL_MAX}/10 o menos durante {PROGRAM.painFreeDays}&nbsp;días seguidos.
            </p>
          </section>

          <section id="ejercicios">
            <h2>¿Qué ejercicios ayudan con el dolor de talón al correr?</h2>
            <p>
              El estiramiento y el trabajo de fuerza de pantorrilla son los ejercicios con más
              evidencia para la fascitis plantar. La guía de 2023 le da al estiramiento de la
              fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de
              resistencia y fuerza una B.
            </p>
            <p>
              En un ensayo con 48&nbsp;personas, todas con plantillas, elevaciones de talón lentas
              con carga alta y una toalla bajo los dedos aliviaron el dolor y mejoraron la función
              diaria más rápido que solo estirar. A los doce meses, los dos grupos estaban
              igualados. El trabajo de fuerza adelantó la mejora. No la hizo más grande. La guía
              respalda hacer las dos cosas.
            </p>
            <p>
              Las dosis, con qué frecuencia hacer cada uno y qué debes sentir están en{' '}
              <a href="/es/ejercicios-fascitis-plantar/">la guía de ejercicios para la fascitis plantar</a>.
              El análisis estudio por estudio está en{' '}
              <a href="/es/evidencia/">la página de evidencia</a>.
            </p>
            <Cite index={CITE.guideline} />
            <Cite index={CITE.rathleff} />
          </section>

          <section id="como-se-adapta-walkito">
            <h2>¿Cómo se adapta Walkito a la carrera de ayer?</h2>
            <p>
              Walkito adapta cada sesión a la carga de ayer y al talón de esta mañana, para que un
              día duro baje la carga sin detener el plan. Si conectas Apple Health, Walkito lee tus
              pasos y tu sueño. Si tu teléfono o reloj cuenta los pasos de tu carrera, una carrera
              larga se suma al total de ese día. Los datos de Health se quedan en tu teléfono. Cada
              mañana, la primera fila de abajo que coincida define la sesión de hoy.
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Esta mañana</th>
                    <th scope="col">Qué hace la sesión de hoy</th>
                  </tr>
                </thead>
                <tbody>
                  {ADAPT.map(([when, what]) => (
                    <tr key={when}>
                      <td>{when}</td>
                      <td>{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Durante una sesión, un dolor de {IN_SESSION_STOP}/10 o más la termina, y las dos
              sesiones siguientes bajan un nivel. Un mal día baja la carga. No detiene el plan.
            </p>
          </section>

          <section id="dolor-aquiles">
            <h2>¿Puede ser el tendón de Aquiles?</h2>
            <p>
              El dolor de Aquiles se siente más arriba que la fascitis plantar: donde el tendón se
              une a la parte de atrás del hueso del talón, o unos centímetros más arriba, en el
              tendón. La guía clínica de 2024 sobre el dolor del tendón de Aquiles menciona el dolor
              que aparece al cargar el tendón, como al correr, saltar o subir escaleras, como la
              señal principal. Si presionar la parte de atrás del talón o el tendón arriba duele más
              que presionar el arco, eso apunta lejos de la fascitis plantar.
            </p>
            <p>
              Dónde duele cambia el siguiente paso. El dolor en la mitad del tendón, unos
              centímetros por encima del talón, suele empezar con trabajo de carga para la
              pantorrilla. El dolor justo donde el tendón se inserta se maneja con más cuidado: un
              estiramiento profundo en la parte baja de un descenso de talón puede irritar ese
              punto, así que el trabajo suele empezar desde piso plano en vez de bajar de un
              escalón. Los estiramientos de pantorrilla y las elevaciones de talón de Walkito están
              hechos para la fascia plantar y la pantorrilla, no para el dolor en la inserción. Si
              el tuyo está justo en la parte de atrás del hueso del talón, que lo revise un
              profesional de la salud antes de cargarlo fuerte.
            </p>
            <Evidence level="strong">
              Varios ensayos controlados coinciden en que cargar la pantorrilla ayuda con el dolor
              de Aquiles en la porción media.
            </Evidence>
            <p>
              En un ensayo pequeño de 1998, 15&nbsp;atletas recreativos con dolor de Aquiles de
              mucho tiempo hicieron elevaciones excéntricas de pantorrilla (bajar despacio con carga)
              dos veces al día durante tres meses. Los 15 volvieron a correr a su nivel anterior.
              Un ensayo de 2007 con 38&nbsp;personas encontró que seguir activo durante la
              rehabilitación, mientras el dolor se mantuviera dentro de un límite acordado, dio
              resultados tan buenos como dejar de correr y saltar primero. Un ensayo de 2015 con
              58&nbsp;personas comparó el trabajo de fuerza pesado y lento tres veces por semana con
              la rutina excéntrica.
            </p>
            <blockquote>
              <p>
                "Both traditional ECC and HSR yield positive, equally good,
                lasting clinical results in patients with Achilles tendinopathy."
              </p>
              <footer>Beyer y colegas, American Journal of Sports Medicine, 2015</footer>
            </blockquote>
            <p>
              Ninguno de estos ensayos usó Walkito. Son la razón por la que cargar la pantorrilla es
              el primer paso habitual para este tipo de dolor. Lo que parece importar más es cargar
              la pantorrilla de forma constante durante semanas, no qué rutina exacta elijas.
            </p>
            <Cite index={CITE.achillesGuideline} />
            <Cite index={CITE.alfredson} />
            <Cite index={CITE.silbernagel} />
            <Cite index={CITE.beyer} />
          </section>

          <section id="periostitis-tibial">
            <h2>¿Y el dolor a lo largo de la tibia?</h2>
            <p>
              La periostitis tibial, o síndrome de estrés medial de la tibia, es dolor a lo largo de
              la parte interna de la tibia, normalmente repartido en varios centímetros en vez de un
              solo punto. No es la fascia plantar: el hueso y el tejido a su alrededor reaccionan a
              la carga repetida de correr. Una revisión de 2020 de corredores novatos y recreativos
              encontró que las relaciones más claras eran con la forma de moverse, como más rotación
              de la cadera y un pie que se va hacia adentro más de lo habitual.
            </p>
            <Evidence level="early">
              La revisión de 2020 encontró solo 11&nbsp;estudios que valían la pena incluir, la
              mayoría pequeños. Solo uno era un ensayo aleatorizado, y probó terapia de ondas de
              choque, no ejercicio.
            </Evidence>
            <p>
              Las plantillas con soporte de arco ayudaron con la presión del pie y el dolor en
              algunos de esos estudios, pero los autores escribieron que «se necesita más
              investigación para confirmar estos resultados». Lo que suele ayudar en la práctica es
              la carga: reducir la carrera que lo provocó, y volver despacio cuando caminar y trotar
              suave son libres de dolor.
            </p>
            <p>
              Un solo punto doloroso que puedes señalar con un dedo, en vez de dolor a lo largo de
              un tramo de hueso, puede ser una fractura por estrés. Eso necesita un profesional de
              la salud, no más carrera. Walkito no tiene un programa específico para la tibia. Si
              marcas la tibia como dolorida, te da trabajo de movilidad de tobillo, que puede
              acompañar esa recuperación pero no reemplaza correr menos.
            </p>
            <Cite index={CITE.mtssReview} />
          </section>

          <section id="almohadilla-grasa">
            <h2>¿Puede ser la almohadilla grasa bajo el talón?</h2>
            <p>
              La almohadilla grasa del talón es el cojín bajo el hueso del talón. El dolor que viene
              de ella, llamado síndrome de la almohadilla grasa del talón, puede sentirse como
              fascitis plantar, pero tiende a estar en el centro del talón en vez de hacia el arco.
              La guía de 2023 para el dolor de talón lo menciona como una de las causas que caen
              bajo «dolor de talón plantar».
            </p>
            <Evidence level="early">
              Una revisión de 2022 encontró 7&nbsp;estudios aprovechables, la mayoría observacionales
              pequeños, y ningún ensayo de ejercicio para esta condición.
            </Evidence>
            <p>
              La conclusión de la propia revisión es que las recomendaciones actuales para el
              síndrome de la almohadilla grasa del talón son «en su mayoría anecdóticas».
              Distinguirlo de la fascitis plantar suele requerir un examen, y a veces un
              ultrasonido del grosor de la almohadilla. Eso es algo que hace un profesional de la
              salud, no algo que puedas verificar en casa. Los ejercicios de esta página no fueron
              probados para el dolor de la almohadilla grasa.
            </p>
            <Cite index={CITE.guideline} />
            <Cite index={CITE.fatPadReview} />
          </section>

          <section id="tendon-tibial-posterior">
            <h2>¿Y si el dolor está en la parte interna del tobillo?</h2>
            <p>
              El dolor debajo y detrás del hueso interno del tobillo apunta al tendón tibial
              posterior, el tendón que ayuda a sostener el arco. Es una estructura diferente de la
              fascia plantar, pero las dos están conectadas: un tendón que no está haciendo su
              trabajo puede dejar caer el arco y cambiar cómo se carga la fascia.
            </p>
            <Evidence level="early">
              Una revisión sistemática de 2018 encontró «evidencia preliminar» de que el ejercicio
              ayuda, y pocos ensayos de alta calidad.
            </Evidence>
            <p>
              Los ensayos de esa revisión usaron trabajo de fuerza para el músculo detrás de este
              tendón, estiramientos de pantorrilla y tobillo, y trabajo de equilibrio, a menudo con
              una plantilla de soporte de arco. La inversión con banda de Walkito entrena ese mismo
              músculo, y su trabajo de tobillo y equilibrio coincide con lo que cubrió la revisión.
              Si la parte interna de tu tobillo está hinchada, o un arco se ve más plano de lo que
              era hace un año, consulta primero a un profesional de la salud. Si se pasa por alto al
              principio, esto puede llevar a un pie plano que se queda plano.
            </p>
            <Cite index={CITE.posteriorTibialReview} />
          </section>

          <section id="carga-de-entrenamiento">
            <h2>¿La regla del 10&nbsp;% previene lesiones al correr?</h2>
            <p>
              La regla del 10&nbsp;% dice que no debes añadir más del 10&nbsp;% a tu distancia
              semanal de una semana a la siguiente. Ningún ensayo ha demostrado que baje el riesgo
              de lesión. Un ensayo de 2008 puso a 532&nbsp;corredores nuevos en un programa de
              13&nbsp;semanas basado en la regla del 10&nbsp;% o en uno más rápido de
              8&nbsp;semanas. Las lesiones fueron casi idénticas: 20,8&nbsp;% en el grupo más lento
              y 20,3&nbsp;% en el más rápido.
            </p>
            <Evidence level="unsupported">
              Un ensayo aleatorizado probó la regla del 10&nbsp;% directamente y no encontró
              diferencia.
            </Evidence>
            <p>
              Los saltos bruscos son mejor cosa a la que prestar atención que cualquier porcentaje
              exacto. Un estudio de 2014 siguió a 874&nbsp;corredores nuevos con relojes GPS
              durante un año. Los corredores que añadieron más del 30&nbsp;% en dos semanas tuvieron
              más lesiones relacionadas con la distancia que los que se mantuvieron bajo el
              10&nbsp;%, aunque el resultado quedó justo por debajo de la significancia estadística.
              Los que añadieron entre 10 y 30&nbsp;% no les fue claramente peor.
            </p>
            <Evidence level="early">
              Evita saltos bruscos grandes en la distancia. Un estudio de cohorte apunta en esa
              dirección, y el resultado fue limítrofe.
            </Evidence>
            <p>
              Walkito no planea tus carreras. Sí vigila los picos: si los pasos de ayer fueron más
              de 1,4&nbsp;veces tu promedio de 28&nbsp;días en un día de fuerza, esa sesión se
              convierte en una de recuperación más ligera.
            </p>
            <Cite index={CITE.buist} />
            <Cite index={CITE.nielsen} />
          </section>

          <section id="cambio-de-zapatos">
            <h2>¿Cuándo deberías cambiar tus zapatos para correr?</h2>
            <p>
              El consejo habitual es cada 500 a 800&nbsp;kilómetros. Ese número es una estimación de
              cuándo se gasta la amortiguación, no un resultado de un estudio que contó lesiones
              contra la edad del zapato. Si no registras kilómetros, una entresuela aplanada o una
              suela gastada de un lado te dice lo mismo.
            </p>
            <Evidence level="early">
              El rango de 500 a 800&nbsp;km es una regla de uso común, no un resultado de ensayo.
            </Evidence>
            <p>
              Alternar entre dos pares tiene más respaldo. Un estudio de 2015 siguió a
              264&nbsp;corredores durante 22&nbsp;semanas. Los que corrían con más de un par
              tuvieron un riesgo de lesión cerca de 39&nbsp;% menor que los que usaban un solo par.
              Eso es una relación observada, no prueba de que el segundo par causó la diferencia.
              La explicación de los autores es que zapatos diferentes reparten la carga un poco
              diferente de una carrera a otra.
            </p>
            <Evidence level="early">
              Un estudio observacional de 264&nbsp;corredores, no un ensayo aleatorizado.
            </Evidence>
            <p>
              Nada de esto significa comprar más zapatos de los que puedes pagar. Un par, cambiado
              cuando la amortiguación se aplana a la vista, es un buen punto de partida. Si ya
              tienes dos pares que te gustan, túrnalos.
            </p>
            <Cite index={CITE.malisoux} />
          </section>

          <section className="faq" id="preguntas-frecuentes">
            <h2>Preguntas que hacen los corredores</h2>
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section id="consulta">
            <h2>¿Cuándo debe un corredor consultar a un profesional de la salud por dolor de talón?</h2>
            <p>
              Un corredor debe consultar a un profesional de la salud antes de seguir corriendo si
              el dolor aumenta durante las carreras después de subir el kilometraje, o si le duele
              al apretar los lados del talón. Las dos cosas pueden ser señales de una fractura por
              estrés. Un dolor agudo al correr, o un dolor que empeora semana tras semana, también
              necesita un profesional. Y un dolor de talón o tibia que te despierta por la noche:
              el dolor en reposo apunta más a una fractura por estrés que a fascitis plantar, dolor
              de Aquiles o periostitis tibial.
            </p>
            <h3>{HEEL_PAIN_ES.redFlags.h2}</h3>
            <ul>
              {HEEL_PAIN_ES.redFlags.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section id="plan">
            <h2>Hacerlo como un plan</h2>
            <p>
              No tienes que decidir el orden, las dosis ni cuándo pasar al siguiente. Walkito arma
              un plan una semana a la vez en torno a una meta que puedes medir. Para el dolor de
              talón, la primera meta es dolor de la mañana de {PAIN_GOAL_MAX}/10 o menos durante{' '}
              {PROGRAM.painFreeDays}&nbsp;días seguidos. Las otras son mantener el arco{' '}
              {archHoldSeconds}&nbsp;segundos, {calfRaises} elevaciones de talón a una pierna,{' '}
              {balanceSeconds}&nbsp;segundos de equilibrio a una pierna, e izquierda y derecha
              dentro del {gapPercent}&nbsp;% la una de la otra. Una meta que alcanzas pasa a
              mantenimiento con una dosis más baja, y la siguiente ocupa su lugar.
            </p>
            <p>
              Eliges {DAYS_A}, {DAYS_B} o {DAYS_C}&nbsp;días a la semana y sesiones de {MIN_A},{' '}
              {MIN_B} o {MIN_C}&nbsp;minutos. Cada {PROGRAM.testEveryDays}&nbsp;días (y después
              cada {PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas tu primera meta),{' '}
              {PROGRAM.retestTests}&nbsp;pruebas en unos {PROGRAM.retestMinutes}&nbsp;minutos miden
              elevaciones de talón hasta el fallo, mantener el arco y equilibrio a una pierna en los
              dos lados. El progreso se mide, no se adivina por cómo se sintió la semana.{' '}
              <a href="/es/programa/">Cómo funciona el plan</a>.
            </p>

            <UpdatedLine lang="es" updated={PAGE_UPDATED.runners} />
            <p className="notice">{c.notice}</p>

            <p className="cta-line">Empieza con {MIN_A}&nbsp;minutos al día.</p>
            <AppStoreBadge campaign="runners-bottom-es" lang="es" />
          </section>
        </article>
      </Prose>

      <Footer lang="es" languages={{ en: '/heel-pain-runners/', es: PATH, ru: '/ru/bol-v-pyatke-u-begunov/' }} />
    </>
  );
}
