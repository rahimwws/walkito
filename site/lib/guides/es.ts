import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Translated from `en.ts` (2026-09-28), written around the Spanish queries:
 * «ejercicios para pie plano», «dolor en el arco», «fascitis plantar»,
 * «dolor de talón», «espolón calcáneo». Latin American / US Spanish with `tú`,
 * as the app uses. Figures, doses, grades and qualifiers are identical to
 * `en.ts`; exercise names follow the app's Spanish catalogue. Numbers and units
 * are joined with a non-breaking space. Never «espinilla» (on the web it
 * mostly means a pimple): «tibia».
 *
 * The plan has no fixed length, so nothing here describes it in weeks. Every
 * number about the plan is read from `PROGRAM`.
 */

/** `3, 5 o 7`: the plan's options as a Spanish list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} o ${options[options.length - 1]}`;
}

const DAYS = either(PROGRAM.daysPerWeek);
const MINUTES = either(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, as `en.ts` and the About pages. Calcaneal
 * stress fracture is one of the causes of heel pain the 2023 guideline names
 * alongside plantar fasciitis, which is why the site spells out its signs.
 */
const RED_FLAGS = {
  h2: 'Consulta primero a un profesional de la salud si',
  bullets: [
    'el dolor empezó después de una lesión o una caída',
    'no puedes apoyar el pie, o cojeas',
    'viene con entumecimiento, hormigueo, ardor, hinchazón o calor',
    'el talón está rojo, o tienes fiebre o te sientes mal',
    'te despierta por la noche',
    'es un dolor agudo, o empeora aunque hayas bajado la carga',
    'te duele al apretar los lados del talón, o el dolor aumenta durante tus carreras después de subir el kilometraje; las dos cosas pueden ser señales de una fractura por estrés',
    'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    'te duelen los dos talones y tienes otras articulaciones hinchadas o rígidas',
    'no ha mejorado después de varias semanas de ejercicio y menos carga',
    'un arco se aplanó de repente en la edad adulta',
  ],
} as const;

export const FLAT_FEET_ES: Guide = {
  lang: 'es',
  page: 'flatFeet',
  mainSource: CITE.brijwasi,
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Ejercicios para pie plano y dolor en el arco',
  description:
    'Ejercicios para pie plano flexible y arcos caídos: dosis, frecuencia, qué debes sentir, qué encontraron los estudios y qué hacer si te duele el arco.',
  h1: 'Ejercicios para el pie plano y el dolor en el arco',
  lede: 'En la tarde sientes los pies cansados y te duelen los arcos. Cuando te paras, los pies parecen irse hacia adentro y los arcos se hunden hacia el piso. Quizá te han dicho que el pie plano es tu forma de ser y que no vale la pena pensarlo dos veces. Tiene sentido querer hacer algo, y hay investigación real sobre cómo entrenar el arco.',
  intro: [
    'Empieza con una prueba: fíjate si tu pie plano es flexible, es decir, si el arco vuelve cuando levantas el pie. En pie plano flexible, un ensayo con 52\u00A0personas encontró que seis semanas de ejercicios de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos, hechos juntos, cambiaron la forma del arco más que en un grupo de control. La evidencia sobre el pie corto por sí solo es más escasa. Una revisión de 2024 no encontró un cambio claro en general, y solo vio un cambio en una medida del arco en programas de más de seis semanas. Los dos estudios midieron la forma del arco, no el dolor. Si el dolor está cerca del talón, la investigación sobre el dolor de talón es la mejor guía.',
  ],
  takeaways: [
    'El ensayo aleatorizado de esta página se hizo con pie plano flexible, en el que el arco vuelve cuando el pie no toca el piso (Brijwasi y Borkar, 2023).',
    'En ese ensayo con 52\u00A0personas, seis semanas de pie corto, tobillo, cadera y estiramientos cambiaron la forma del arco más que en el grupo de control (Brijwasi y Borkar, 2023).',
    'Una revisión de 2024 sobre el entrenamiento de pie corto no encontró un cambio claro en general, y solo una mejora en una medida del arco en programas de más de seis semanas (Cheng y colegas, 2024).',
    'Un pie plano rígido, que sigue plano incluso sin tocar el piso, es estructural, y el ejercicio no va a cambiar su forma.',
    'Estos estudios midieron la forma del arco, no el dolor. Para el dolor de talón, la guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de fuerza una B.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Cómo saber si tu pie plano es flexible o rígido?',
      paragraphs: [
        'Puedes saber si tu pie plano es flexible o rígido con una prueba de unos segundos. Importa porque el ensayo de esta página se hizo con pie plano flexible, y el ejercicio no va a cambiar la forma de uno rígido. La revisión de 2024 juntó estudios sobre pie plano en general. Walkito no revisa tu tipo de pie, así que esta prueba te toca a ti:',
      ],
      bullets: [
        'Párate descalzo y mira la parte de adentro del pie. En un pie plano, el arco queda bajo o toca el piso.',
        'Levanta ese pie del piso, o sube en puntas, y vuelve a mirar.',
        'Si el arco vuelve, el pie plano es **flexible**. Los ejercicios de abajo son para este tipo.',
        'Si el arco sigue plano incluso sin tocar el piso, el pie es **rígido**. Es un tema estructural que el ejercicio no va a cambiar. Deja de lado la meta de mantener el arco y consulta a un profesional de la salud antes de empezar un programa.',
        '«Arcos caídos» suele ser otro nombre para el pie plano. Pero si un arco se aplanó **de repente**, de un solo lado, en la edad adulta, consulta a un profesional de la salud antes de ejercitarlo, diga lo que diga la prueba.',
      ],
    },
    {
      h2: 'Los ejercicios para el pie plano, con dosis de inicio',
      paragraphs: [
        'Los ejercicios para el pie plano en Walkito empiezan con recoger la toalla y la elevación del dedo gordo, y después suben por tres versiones del pie corto. La separación de dedos, la inversión con banda, el equilibrio a una pierna, la abducción de cadera y los estiramientos de pantorrilla completan el resto. Son las dosis de inicio de Walkito, no una indicación médica. Hazlos descalzo. [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'El pie corto es la base del trabajo del arco. Acortas el pie llevando la parte delantera del pie hacia el talón, para que el arco suba, sin encoger los dedos. El pie corto, el fortalecimiento de cadera y los estiramientos son lo que probó el ensayo. Recoger la toalla, la elevación del dedo gordo, la separación de dedos, la inversión con banda y el equilibrio a una pierna son añadidos de Walkito.',
        'Haces un ejercicio de arco a la vez, el de tu nivel. Walkito te sube un paso cuando las dos últimas sesiones con él se sintieron fáciles. Mientras el arco sea tu meta, cada sesión tiene un ejercicio de arco, y los demás se turnan. Algunos ejercicios necesitan una toalla o una banda elástica. Walkito te pregunta qué tienes y deja fuera lo que no tengas. Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy. Es el punto en el que Walkito termina una sesión.',
      ],
      table: {
        head: ['Ejercicio', 'Dosis', 'Con qué frecuencia', 'Qué debes sentir', 'Detente si'],
        rows: [
          ['Recoger la toalla', '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'Los músculos pequeños bajo el arco trabajando', 'El dolor llega a 6/10'],
          ['Elevación del dedo gordo', '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'El dedo gordo moviéndose solo', 'El dolor llega a 6/10'],
          ['Pie corto', '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'El arco subiendo, con los dedos relajados', 'El dolor llega a 6/10'],
          ['Pie corto, de pie', '3\u00A0series de 8, mantén 5\u00A0segundos, los dos pies', 'Cada sesión, mientras sea tu nivel', 'El arco trabajando mientras carga tu peso', 'El dolor llega a 6/10'],
          ['Pie corto, una pierna', '3\u00A0series de 10, mantén 5\u00A0segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'Más trabajo en el arco, con el dedo gordo apoyado', 'El dolor llega a 6/10'],
          ['Separación de dedos', '3\u00A0series de 10, cada pie', 'Días de fuerza, alternando con la inversión con banda', 'Esfuerzo en los músculos pequeños del pie', 'El dolor llega a 6/10'],
          ['Inversión con banda', '3\u00A0series de 12, cada pie', 'Días de fuerza, después de seis sesiones de pie corto de pie', 'Trabajo en la parte interna del pie y del tobillo', 'El dolor llega a 6/10'],
          ['Equilibrio a una pierna', '3\u00A0series de 20\u00A0segundos, cada pierna', 'Días de equilibrio', 'El pie y el tobillo haciendo pequeñas correcciones', 'El dolor llega a 6/10'],
          ['Abducción de cadera', '3\u00A0series de 10, cada pierna, de pie, con banda', 'Días de fuerza, cuando la meta de izquierda y derecha está en tu plan', 'Trabajo en la parte externa de la cadera', 'El dolor llega a 6/10'],
          ['Estiramiento de pantorrilla y sóleo', '2\u00A0series de 30\u00A0segundos en cada estiramiento, cada pierna', 'Casi todas las sesiones, alternando con los otros estiramientos', 'Un estiramiento en la pantorrilla, y después más abajo, cerca del talón', 'El dolor llega a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Recoger la toalla',
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'Los músculos pequeños bajo el arco trabajando',
          how: 'Siéntate con una toalla extendida en el piso bajo el pie. Atrae la toalla con los dedos y mantén el talón abajo. Recoger la toalla despierta los músculos pequeños bajo el arco.',
          image: 'Ejercicio: recoger la toalla',
          media: 'towel_scrunch',
          caption: 'Recoger la toalla: atrae la toalla con los dedos, el talón no se levanta',
          alt: 'Una figura sentada atrae una toalla con los dedos de un pie',
        },
        {
          name: 'Elevación del dedo gordo',
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El dedo gordo moviéndose solo',
          how: 'Siéntate con los pies apoyados. Levanta solo el dedo gordo y mantén. Los otros cuatro dedos siguen apoyados en el piso. Este ejercicio enseña al dedo gordo a moverse solo, que es el primer interruptor del arco.',
          image: 'Ejercicio: elevación del dedo gordo',
          media: 'big_toe_lift',
          caption: 'Elevación del dedo gordo: levanta solo el dedo gordo, los otros cuatro siguen apoyados',
          alt: 'Un pie en el piso levanta solo el dedo gordo, con el arco resaltado',
        },
        {
          name: 'Pie corto',
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El arco subiendo',
          how: 'Siéntate con el pie apoyado en el piso. Lleva la parte delantera del pie hacia el talón para que el arco suba, y mantén. No encojas los dedos. Encogerlos es el error más común en este ejercicio.',
          image: 'Ejercicio: pie corto',
          media: 'short_foot_seated',
          caption: 'Pie corto: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una pierna sentada con el pie apoyado en el piso y los músculos del arco resaltados mientras el arco sube',
        },
        {
          name: 'Pie corto, de pie',
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, los dos pies',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El arco trabajando bajo tu peso',
          how: 'Párate con el peso en los dos pies y haz el mismo movimiento. Los dedos quedan planos y largos. Solo sube el arco. Es el mismo músculo que en la versión sentada, ahora cargando tu peso.',
          image: 'Ejercicio: pie corto, de pie',
          media: 'short_foot_double',
          caption: 'Pie corto, de pie: dedos planos y largos, solo sube el arco',
          alt: 'Dos piernas de pie, con el arco y la pantorrilla de una pierna resaltados mientras el arco sube',
        },
        {
          name: 'Pie corto, una pierna',
          dose: '3\u00A0series de 10, mantén 5\u00A0segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'Más trabajo en el arco',
          how: 'Párate en un pie y sube el arco. Mantén el dedo gordo abajo. Si se levanta, el arco está haciendo trampa. Trabajar un pie a la vez es donde se nota el lado más débil.',
          image: 'Ejercicio: pie corto, una pierna',
          media: 'short_foot_single',
          caption: 'Pie corto, una pierna: sube el arco y mantén el dedo gordo abajo',
          alt: 'Un pie apoyado en el piso, con el arco resaltado mientras sube',
        },
        {
          name: 'Separación de dedos',
          dose: '3\u00A0series de 10, cada pie',
          often: 'Días de fuerza',
          feel: 'Esfuerzo en los músculos pequeños del pie',
          how: 'Separa los dedos todo lo que puedas y mantén. Unos dedos que se separan comparten la carga con el arco. Levantarlos no es el objetivo.',
          image: 'Ejercicio: separación de dedos',
          media: 'toe_spread',
          caption: 'Separación de dedos: separa los dedos todo lo que puedas y mantén',
          alt: 'Un pie visto de frente, con los músculos pequeños entre los dedos resaltados mientras se separan',
        },
        {
          name: 'Inversión con banda',
          dose: '3\u00A0series de 12, cada pie',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte interna del pie y del tobillo',
          how: 'Siéntate con una banda elástica alrededor del pie y gira el pie hacia adentro contra la banda. Mueve el pie, no la pierna. La rodilla no se mueve. Walkito añade la inversión con banda solo después de seis sesiones de pie corto de pie, para que primero trabajen los músculos propios del arco.',
          image: 'Ejercicio: inversión con banda',
          media: 'band_inversion',
          caption: 'Inversión con banda: gira el pie hacia adentro contra la banda, la rodilla no se mueve',
          alt: 'Una pierna con una banda elástica alrededor del pie, girando el pie hacia adentro, con la parte baja de la pierna resaltada',
        },
        {
          name: 'Equilibrio a una pierna',
          dose: '3\u00A0series de 20\u00A0segundos, cada pierna',
          often: 'Días de equilibrio',
          feel: 'Pequeñas correcciones en el pie y el tobillo',
          how: 'Párate en un pie y mira un punto fijo. Deja que el pie se tambalee. Tiene que hacerlo, porque ese tambaleo es el pie haciendo el trabajo de equilibrio.',
          image: 'Ejercicio: equilibrio a una pierna',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: párate en un pie y deja que haga pequeñas correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
        {
          name: 'Abducción de cadera',
          dose: '3\u00A0series de 10, cada pierna',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte externa de la cadera',
          how: 'Párate con una banda elástica y lleva una pierna hacia el lado contra la banda. Empuja con el talón, no con los dedos. Una cadera que cede deja caer la carga sobre el arco.',
          image: 'Ejercicio: abducción de cadera',
          media: 'hip_abduction',
          caption: 'Abducción de cadera: lleva una pierna hacia el lado contra la banda',
          alt: 'Una figura de pie con una banda alrededor de las piernas lleva una pierna hacia el lado, con la parte externa de la cadera resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla y sóleo',
          dose: '2\u00A0series de 30\u00A0segundos en cada estiramiento, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla, y después cerca del talón',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón abajo y la cadera hacia adelante, y siente el estiramiento en la pantorrilla. Después dobla la rodilla de atrás hasta que lo sientas más abajo, cerca del talón. Ese es el sóleo, el músculo más profundo de la pantorrilla.',
          image: 'Ejercicio: estiramiento de pantorrilla y sóleo',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: manos en la pared, pierna de atrás estirada, talón abajo',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
      ],
    },
    {
      h2: '¿Cuánto tardan los ejercicios para pie plano en cambiar el arco?',
      paragraphs: [
        'En la investigación hasta ahora, los ejercicios para pie plano cambiaron el arco después de seis semanas o más, y solo en pie plano flexible. En un ensayo con 52\u00A0personas con pie plano **flexible**, un programa de seis semanas de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos cambió dos medidas de la forma del arco más que en el grupo de control.',
        'La evidencia sobre el pie corto por sí solo es más escasa. Una revisión de 2024 juntó estudios sobre entrenamiento de pie corto en pie plano en general. En conjunto, no encontró una diferencia clara con los grupos de control en la forma del arco ni en la postura del pie. Solo los programas de más de seis semanas mejoraron cuánto se hunde el arco bajo tu peso, y los autores dicen que hacen falta estudios más grandes. Así que cuenta con al menos seis semanas, y más si haces solo pie corto.',
        `Esa es una de las razones por las que el plan de Walkito no tiene fecha de fin. La meta del arco, mantenerlo ${PROGRAM.goals.archHoldSeconds}\u00A0segundos, sigue en el plan hasta que la alcanzas, tome las semanas que tome. La prueba de mantener el arco se hace cada ${PROGRAM.testEveryDays}\u00A0días hasta que alcanzas tu primera meta, y después cada ${PROGRAM.testEveryDaysAfterGoal}, así que puedes ver si está avanzando. Los ensayos están resumidos en [la página de evidencia](/science/) (en inglés).`,
      ],
      sourceNote:
        'Brijwasi y Borkar: la caída del navicular (cuánto baja el hueso navicular, en la parte interna del arco, al pararte) mejoró 0,4\u00A0cm, y el ángulo del arco 16\u00A0grados, más que en el grupo de control. Cheng y colegas: sin diferencia significativa en conjunto en la caída del navicular ni en el Foot Posture Index; la caída del navicular mejoró de forma significativa solo en el subgrupo de programas de más de seis semanas.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: '¿Los ejercicios para pie plano ayudan con el dolor en el arco?',
      paragraphs: [
        'Ningún estudio de esta página muestra que los ejercicios para pie plano alivien el dolor en el arco, porque ninguno lo midió. El ensayo y la revisión midieron la forma del arco. Muestran que el arco se puede entrenar. No son evidencia de que los mismos ejercicios alivien un arco adolorido.',
        'El dolor en el talón, y a veces a lo largo del arco, puede venir de la fascia plantar, la banda de tejido que recorre la planta del pie. Si el tuyo está cerca del talón, la guía de 2023 para el dolor de talón es la mejor referencia. Para el dolor de talón bajo el pie, le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**, y al entrenamiento de fuerza una **B**. Esos ejercicios están en [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
        'Walkito puede trabajar las dos cosas a la vez, como metas separadas: mañanas más fáciles para el dolor, y mantener el arco para el arco. Cómo se reparten una semana está en [la página del plan](/program/) (en inglés).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué pasa cuando alcanzas la meta del arco?',
      paragraphs: [
        `Cuando alcanzas la meta del arco, mantenerlo ${PROGRAM.goals.archHoldSeconds}\u00A0segundos, Walkito deja el trabajo del arco en el plan con una dosis más baja. La meta pasa a mantenimiento y la siguiente meta ocupa su lugar. Alcanzarla no significa que el trabajo del arco se acabe.`,
        `Las pruebas también siguen, cada ${PROGRAM.testEveryDaysAfterGoal}\u00A0días una vez que alcanzas tu primera meta. Si el tiempo con el arco arriba empieza a bajar, lo ves en los números en lugar de adivinarlo.`,
        'Si también te duele el talón, el talón tiene sus propios ejercicios y su propia meta: mira [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Las preguntas sobre la app están en [las preguntas frecuentes](/faq/) (en inglés).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Los ejercicios pueden cambiar el pie plano?',
      a: 'El ejercicio puede cambiar la forma del arco en el pie plano flexible, pero no en el rígido. En un ensayo con 52\u00A0personas cuyo arco volvía al levantar el pie, seis semanas de pie corto, tobillo, cadera y estiramientos cambiaron las medidas del arco más que en un grupo de control. Un pie que sigue plano incluso levantado es estructural, y el ejercicio no va a cambiar su forma.',
    },
    {
      q: '¿Cuánto tardan en funcionar los ejercicios para pie plano?',
      a: `Cuenta con seis semanas o más. En un ensayo con pie plano flexible, un programa de seis semanas de pie corto, cadera y estiramientos cambió las medidas del arco. Para el pie corto por sí solo, una revisión de 2024 no encontró un cambio claro en general, y solo una mejora en programas de más de seis semanas. Walkito mantiene su meta de sostener el arco ${PROGRAM.goals.archHoldSeconds}\u00A0segundos hasta que la alcanzas.`,
    },
    {
      q: '¿Qué ayuda con el dolor bajo el arco del pie?',
      a: 'Aquí no hay evidencia directa, porque ningún estudio citado en esta página midió el dolor en el arco. Si el dolor está cerca del talón y tiene que ver con la fascia plantar, la guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla una A y al entrenamiento de fuerza una B. Los ejercicios de arco de esta página entrenan la forma del arco, no el dolor. Mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
    },
    {
      q: '¿Los arcos caídos son lo mismo que el pie plano?',
      a: 'Casi siempre, sí. «Arcos caídos» es un nombre común para el pie plano. Lo que más importa es si el pie es flexible, con un arco que vuelve al levantar el pie, o rígido. El ensayo de esta página se hizo con pie plano flexible. Un arco que se aplanó de repente de un solo lado en la edad adulta debe verlo primero un profesional de la salud.',
    },
    {
      q: '¿Con qué frecuencia debo hacer ejercicios para pie plano?',
      a: `Haz el trabajo de pie corto cada día de entrenamiento mientras el arco sea tu meta. En Walkito eliges ${DAYS} días de entrenamiento a la semana, y mientras el arco sea el foco de la semana, cada sesión incluye un ejercicio de arco, un nivel más difícil a la vez. La prueba de mantener el arco se repite cada ${PROGRAM.testEveryDays}\u00A0días, y después cada ${PROGRAM.testEveryDaysAfterGoal} tras tu primera meta.`,
    },
    {
      q: '¿Cuándo debo ir al médico por el pie plano?',
      a: 'Consulta a un profesional de la salud antes de empezar si el arco sigue plano cuando el pie no toca el piso, o si un arco se aplanó de repente en la edad adulta. Lo mismo si el dolor empezó después de una lesión, te despierta por la noche o viene con entumecimiento, hormigueo, hinchazón o calor. Un dolor agudo o que empeora necesita un profesional, no más ejercicio.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'el arco sigue plano cuando el pie no toca el piso'],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: `No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. Walkito arma un plan una semana a la vez en torno a una meta. Para un pie plano flexible, esa meta es mantener el arco: sostenerlo arriba ${PROGRAM.goals.archHoldSeconds}\u00A0segundos. Si además tienes dolor, primero van las mañanas más fáciles.`,
    more: [
      `Eliges ${DAYS} días a la semana y sesiones de ${MINUTES}\u00A0minutos. Cada ${PROGRAM.testEveryDays}\u00A0días (y después cada ${PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas tu primera meta), una prueba corta mide cuánto mantienes el arco, la resistencia de la pantorrilla y el equilibrio, así puedes ver si el trabajo del arco está sirviendo de algo.`,
    ],
    cta: `Empieza con ${PROGRAM.sessionMinutes[0]}\u00A0minutos al día.`,
  },
  crumb: 'Ejercicios para pie plano',
  campaign: 'guide-flat-feet-es',
};

export const HEEL_PAIN_ES: Guide = {
  lang: 'es',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Ejercicios para fascitis plantar y dolor de talón',
  description:
    'Ejercicios y estiramientos para la fascitis plantar y el dolor de talón: dosis, frecuencia, qué debes sentir y qué recomienda la guía clínica de 2023.',
  h1: 'Ejercicios y estiramientos para la fascitis plantar y el dolor de talón',
  lede: 'Los primeros pasos al levantarte son lo peor del día. Un tirón agudo justo en el talón, antes incluso del café. Se calma cuando empiezas a moverte, y vuelve después de estar un rato sentado. Ese patrón tiene nombre, fascitis plantar, y la guía clínica de 2023 para el dolor de talón la llama la causa más reconocida del dolor de talón bajo el pie.',
  intro: [
    'También es confuso buscar información, porque cada quien dice algo distinto. La evidencia apunta a dos cosas: estirar la fascia plantar y la pantorrilla, y hacer trabajo de fuerza para la pantorrilla. Una guía clínica de 2023 le da al estiramiento su grado más alto, A, y al entrenamiento de fuerza una B. En un ensayo con 48\u00A0personas, todas con plantillas, las elevaciones de talón lentas con una toalla bajo los dedos ayudaron más rápido que solo estirar. A los doce meses, los dos grupos estaban igualados. Hacer las dos cosas es lo que respalda la guía.',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón del Journal of Orthopaedic & Sports Physical Therapy le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de fuerza una B.',
    'En un ensayo con 48\u00A0personas, las elevaciones de talón con carga alta aliviaron el dolor y mejoraron la función diaria más rápido que el estiramiento, y a los doce meses los dos grupos estaban igualados (Rathleff y colegas, 2015).',
    'Para el dolor de talón al correr, la misma guía aconseja cambiar la carga en lugar de dejarlo todo, un consejo con grado E porque se basa en teoría, no en ensayos.',
    'Consulta primero a un profesional de la salud si el dolor empezó después de una lesión, viene con entumecimiento o hinchazón, te despierta por la noche o te duele al apretar el talón.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Los ejercicios para la fascitis plantar, con dosis de inicio',
      paragraphs: [
        'Los ejercicios para la fascitis plantar en Walkito son estiramientos de la fascia plantar y de la pantorrilla, trabajo de fuerza para la pantorrilla que sube en pasos pequeños, y un automasaje plantar. Son las dosis de inicio de Walkito, no una indicación médica. [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'El orden importa. Mientras el dolor sea tu meta, Walkito mantiene suave el trabajo de pantorrilla: primero elevaciones de talón sentado, después elevaciones de talón con dos pies, después una elevación de talón sostenida, un paso a la vez. Subes un paso cuando las dos últimas sesiones con él se sintieron fáciles. La elevación de talones con toalla es la que más carga la fascia plantar, así que solo entra cuando el dolor de la mañana ya bajó y la meta pasa a la fuerza de la pantorrilla. Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy. Es el punto en el que Walkito termina una sesión.',
      ],
      table: {
        head: ['Ejercicio', 'Dosis', 'Con qué frecuencia', 'Qué debes sentir', 'Detente si'],
        rows: [
          ['Estiramiento plantar', '2\u00A0series de 30\u00A0segundos, cada pie', 'Casi todas las sesiones, alternando con los estiramientos de pantorrilla', 'Un estiramiento a lo largo del arco, no en la pantorrilla', 'El dolor llega a 6/10'],
          ['Estiramiento de pantorrilla', '2\u00A0series de 30\u00A0segundos, cada pierna', 'Casi todas las sesiones, alternando con los otros estiramientos', 'Un estiramiento en la pantorrilla de la pierna de atrás estirada', 'El dolor llega a 6/10'],
          ['Estiramiento de sóleo', '2\u00A0series de 30\u00A0segundos, cada pierna', 'Casi todas las sesiones, alternando con los otros estiramientos', 'Un estiramiento en la parte baja de la pantorrilla, cerca del talón', 'El dolor llega a 6/10'],
          ['Elevaciones de talón sentado', '3\u00A0series de 10, los dos pies', 'Días de fuerza, 3 a la semana, nunca dos seguidos', 'Trabajo suave en las pantorrillas, casi sin carga en el talón', 'El dolor llega a 6/10'],
          ['Elevaciones de talón con dos pies', '3\u00A0series de 10, los dos pies', 'Días de fuerza, cuando las elevaciones sentado se sienten fáciles', 'Las pantorrillas trabajando, con los dos pies compartiendo la carga', 'El dolor llega a 6/10'],
          ['Elevación de talón sostenida', '3\u00A0series de 20\u00A0segundos, los dos pies', 'Días de fuerza, el siguiente paso', 'Las pantorrillas trabajando para quedarse quietas arriba', 'El dolor llega a 6/10'],
          ['Elevación de talones con toalla', '4\u00A0series de 10, cada pierna, con peso extra', 'Días de fuerza, cuando la meta pasa a la fuerza de la pantorrilla', 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco', 'El dolor llega a 6/10'],
          ['Automasaje plantar', '1\u00A0minuto', 'Días de recuperación', 'Presión firme bajo el pie, nunca una mueca de dolor', 'El dolor llega a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Estiramiento plantar',
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón abajo y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Trabajo suave en las pantorrillas',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Las elevaciones sentado trabajan la pantorrilla casi sin carga en el talón.',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga mientras la pantorrilla despierta.',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Elevación de talón sostenida',
          dose: '3\u00A0series de 20\u00A0segundos, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          how: 'Sube en puntas con los dos pies y quédate quieto arriba. No te dejes caer. Sostener arriba carga el tendón sin rebote.',
          image: 'Ejercicio: elevación de talón sostenida',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talones con toalla',
          dose: '4\u00A0series de 10, cada pierna, con peso extra',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tarda tres segundos en subir, mantén dos arriba y tarda tres en bajar. En este nivel Walkito añade peso, por ejemplo una mochila. La toalla es lo que hace que este ejercicio trabaje la fascia plantar y no solo la pantorrilla.',
          image: 'Ejercicio: elevación de talones con toalla',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos arriba, dos arriba quieto, tres abajo',
          alt: 'Una figura sube en puntas sobre un escalón con una toalla enrollada, con las pantorrillas resaltadas',
        },
        {
          name: 'Automasaje plantar',
          dose: '1\u00A0minuto',
          often: 'Días de recuperación',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje, con presión firme. Si haces muecas de dolor, afloja. Rodar calma el tejido después de trabajar. ¿No tienes pelota? El masaje de planta usa pasadas firmes con el pulgar, del talón a los dedos.',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
    },
    {
      h2: '¿Qué ayuda con el dolor de talón por la mañana?',
      paragraphs: [
        'El dolor de talón en los primeros pasos de la mañana es el patrón que más se relaciona con la fascitis plantar. Suele calmarse cuando empiezas a moverte, y vuelve después de estar un rato sentado.',
        'Dos cosas de esta página apuntan a eso. El estiramiento plantar se hace **antes de pararte**, en la orilla de la cama, con los dedos jalados hacia atrás, para que tus primeros pasos no sean tu primer estiramiento. Y la guía de 2023 le da una **A** a las férulas nocturnas, usadas de 1 a 3\u00A0meses, en personas que siguen con dolor en los primeros pasos de la mañana. Las férulas nocturnas son algo para hablar con un profesional de la salud. Walkito no las ofrece.',
        'Por la misma razón, Walkito te pregunta por tu dolor de la mañana todos los días. El dolor de la mañana es la señal más clara de cómo aguantó tu pie el día anterior, y decide cuánto te pide la sesión de hoy.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Descansar o seguir corriendo con dolor de talón?',
      paragraphs: [
        'Si el dolor de talón por fascitis plantar se enciende cuando corres, cambia la carga en lugar de dejarlo todo. La guía de 2023 recomienda aprender a ajustar la carga sobre tus pies en el trabajo, en el deporte y en el día a día. Ese consejo tiene grado E, lo que significa que se basa en teoría y no en ensayos. Así que sigue con los estiramientos todos los días, y reduce lo que empeore el talón.',
        'En una mala mañana, mantén los estiramientos y quita las elevaciones de talón por ese día. La mañana siguiente te dice cómo te fue. Si tus primeros pasos son claramente peores después de correr, esa carrera fue más de lo que el talón podía aguantar. Walkito lo lee igual. Un día muy largo de pie convierte la siguiente sesión de fuerza en una de recuperación más ligera, y una mañana con dolor acorta la sesión sin cancelarla.',
        'Detente y consulta a un profesional de la salud si correr te duele de forma aguda o el dolor empeora semana tras semana. Lo mismo si el dolor aumenta durante tus carreras después de subir el kilometraje, o si te duele al apretar los lados del talón. Las dos cosas pueden ser señales de una fractura por estrés, una de las otras causas de dolor de talón que menciona la guía.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué es mejor para la fascitis plantar, la fuerza o el estiramiento?',
      paragraphs: [
        'El trabajo de fuerza y el estiramiento ayudan los dos con la fascitis plantar, y la fuerza ayuda antes.',
        'En un ensayo con 48\u00A0personas con fascitis plantar confirmada por ultrasonido, todos usaron plantillas. Un grupo añadió elevaciones de talón con carga alta un día sí y un día no. El otro estiró la fascia plantar todos los días. A los tres meses, el grupo de las elevaciones iba claramente adelante en dolor y función diaria. A los doce meses, los dos grupos estaban igualados. La fuerza adelantó la mejora. No la hizo más grande.',
        'La guía respalda hacer las dos cosas. El análisis estudio por estudio está en [la página de evidencia](/science/) (en inglés).',
      ],
      sourceNote:
        'Medido con el Foot Function Index: 29\u00A0puntos menos en el grupo de las elevaciones a los tres meses (IC 95\u00A0%: 6-52, p = 0,016), y 22 frente a 16 a los doce meses, una diferencia no significativa.',
      cites: [CITE.rathleff],
    },
    {
      h2: '¿Qué recomienda la guía de 2023 para la fascitis plantar?',
      paragraphs: [
        'La guía de 2023 para la fascitis plantar califica cada opción según la fuerza de su evidencia. A es el grado más alto. Un grado marcado «en contra» significa que la guía aconseja no usar esa opción.',
      ],
      table: {
        head: ['Opción', 'Grado'],
        rows: [
          ['Estiramiento de la fascia plantar y de la pantorrilla', '**A**'],
          ['Terapia manual (trabajo con las manos sobre las articulaciones y tejidos blandos de la pierna y el pie), hecha por un profesional', '**A**'],
          ['Vendaje junto con otra fisioterapia, para mejorar dolor y función hasta por 6\u00A0semanas', '**A**'],
          ['Férulas nocturnas de 1 a 3\u00A0meses, si tus primeros pasos de cada mañana siguen doliendo', '**A**'],
          ['Entrenamiento de resistencia y fuerza', '**B**'],
          ['Láser de baja intensidad y punción seca, hechos por un profesional', '**B**'],
          ['Plantillas ortopédicas solas, para alivio del dolor a corto plazo', '**B en contra**'],
          ['Plantillas ortopédicas combinadas con otros cuidados', '**C**'],
          ['Ultrasonido terapéutico añadido al estiramiento', '**A en contra**'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué pasa cuando el talón deja de doler?',
      paragraphs: [
        `Cuando el dolor de talón se va, Walkito sigue con una dosis más baja, porque el dolor de talón puede volver. Cuando alcanzas la meta de mañanas más fáciles (dolor por la mañana de 1/10 o menos durante ${PROGRAM.painFreeDays}\u00A0días seguidos), esa meta pasa a mantenimiento y la siguiente ocupa su lugar.`,
        'Si además tienes pie plano, el arco tiene sus propios ejercicios y sus propios tiempos: mira [ejercicios para el pie plano](/es/ejercicios-pie-plano/). Las preguntas sobre la app están en [las preguntas frecuentes](/faq/) (en inglés).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Puedo seguir corriendo con fascitis plantar?',
      a: 'No tienes que dejarlo todo. Cambia la carga. La guía clínica de 2023 recomienda aprender a ajustar la carga sobre tus pies, con grado E, lo que significa que viene de la teoría, no de ensayos. Reduce lo que empeore el talón y sigue estirando todos los días. Si tus primeros pasos a la mañana siguiente son claramente peores, esa carrera fue demasiado. Un dolor agudo o que empeora necesita un profesional de la salud.',
    },
    {
      q: '¿Por qué el dolor de talón es peor por la mañana?',
      a: 'El dolor de talón en los primeros pasos después de dormir o de estar sentado es el patrón que más se relaciona con la fascitis plantar. La explicación habitual es que el tejido bajo el pie se pone rígido en reposo y después recibe carga de golpe con esos primeros pasos. Por eso el estiramiento plantar se hace antes de pararte, y por eso la guía de 2023 le da una A a las férulas nocturnas.',
    },
    {
      q: '¿Qué es mejor para la fascitis plantar, estirar o fortalecer?',
      a: 'Las dos cosas ayudan, y fortalecer funciona más rápido. En un ensayo con 48\u00A0personas, las elevaciones de talón con carga alta iban claramente adelante del estiramiento a los tres meses, pero a los doce meses los dos grupos estaban igualados. La guía de 2023 le da al estiramiento una A y al entrenamiento de fuerza una B. [La página de evidencia](/science/) (en inglés) tiene los detalles.',
    },
    {
      q: '¿El espolón calcáneo es lo mismo que la fascitis plantar?',
      a: 'No exactamente. Mucha gente dice «espolón calcáneo» cuando habla de fascitis plantar, pero en sentido estricto un espolón es un crecimiento de hueso que se ve en una radiografía. La fascitis plantar es dolor de la banda de tejido bajo el pie. Los ejercicios de esta página son los que la guía de 2023 califica para el dolor de talón bajo el pie. Solo un profesional de la salud puede decir qué hay detrás del tuyo.',
    },
    {
      q: '¿Con qué frecuencia debo hacer ejercicios para la fascitis plantar?',
      a: `Estira casi todos los días y haz el trabajo de fuerza de pantorrilla en los días de fuerza. En Walkito eliges ${DAYS} días de entrenamiento a la semana, y cada semana tiene tres días de fuerza, nunca dos seguidos. Los estiramientos van en casi todas las sesiones, con el primer estiramiento plantar antes de que el pie toque el piso. En el ensayo que sigue Walkito, las elevaciones de talón se hacían un día sí y un día no.`,
    },
    {
      q: '¿Cuándo debo ir al médico por dolor de talón?',
      a: 'Consulta primero a un profesional de la salud si el dolor empezó después de una lesión o una caída, no puedes apoyar el pie, o viene con entumecimiento, hormigueo, hinchazón, calor o fiebre. Lo mismo si te despierta por la noche, es agudo o empeora, o te duele al apretar el talón, que puede ser señal de una fractura por estrés. Walkito no diagnostica.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Hacerlo como un plan',
    text: `No tienes que decidir el orden, las dosis ni cuánto tiempo quedarte en cada ejercicio. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta es una mejor mañana: dolor de 1/10 o menos durante ${PROGRAM.painFreeDays}\u00A0días seguidos.`,
    more: [
      `Eliges ${DAYS} días a la semana y sesiones de ${MINUTES}\u00A0minutos. Cada ${PROGRAM.testEveryDays}\u00A0días (y después cada ${PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas esa meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver qué está cambiando.`,
    ],
    cta: `Empieza con ${PROGRAM.sessionMinutes[0]}\u00A0minutos al día.`,
  },
  crumb: 'Ejercicios para la fascitis plantar',
  campaign: 'guide-plantar-fasciitis-es',
};
