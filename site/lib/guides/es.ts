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
  updated: '2026-10-26',
  title: 'Ejercicios para pie plano: 10 ejercicios con sus dosis',
  description:
    'Ejercicios para pie plano con dosis: pie corto, recoger la toalla, dedo gordo, cadera y pantorrilla. Para quién sirven y cuánto duraron los ensayos.',
  h1: 'Ejercicios para pie plano para fortalecer el arco',
  lede: 'Los ejercicios para pie plano de Walkito son el **pie corto** (3 series de 10, mantén 5 segundos), **recoger la toalla** y la **elevación del dedo gordo** (3 series de 8, mantén 5 segundos), la **abducción de cadera** (3 series de 15) y los **estiramientos de pantorrilla** (3 veces 30 segundos). Son para el [pie plano](/es/pie-plano/) flexible. El programa con evidencia de ensayo combina pie corto, tobillo, cadera y estiramientos: en un ensayo con 52 personas, seis semanas de ese trabajo cambiaron la forma del arco más que en un grupo de control.',
  intro: [
    'Primero, [comprueba](/es/test-pie-plano/) que tu pie plano es flexible: el arco aparece cuando el pie no toca el suelo y baja cuando te pones de pie. La evidencia sobre el pie corto por sí solo es más escasa: una revisión de 2024 solo vio un cambio en una medida del arco en programas de más de seis semanas. El ensayo y la revisión midieron la forma del arco, no el dolor.',
  ],
  takeaways: [
    'En un ensayo con 52 personas con pie plano flexible, seis semanas de pie corto, tobillo, cadera y estiramientos cambiaron la forma del arco más que en el grupo de control (Brijwasi y Borkar, 2023).',
    'Una revisión de 2024 sobre el pie corto por sí solo no encontró un cambio claro en general, y solo una mejora en una medida del arco en programas de más de seis semanas (Cheng y colegas, 2024).',
    'Un pie plano rígido, que sigue plano incluso sin tocar el suelo, es estructural, y el ejercicio no va a cambiar su forma.',
    'Estos estudios midieron la forma del arco, no el dolor. Para el dolor de talón, la guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de fuerza una B.',
    'Si algún ejercicio sube tu dolor a 6/10 o más, detente por hoy.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué ejercicios ayudan con el pie plano y cuánto hacer?',
      paragraphs: [
        'Los ejercicios para pie plano de Walkito empiezan con [recoger la toalla](/es/ejercicios/recoger-toalla-con-los-dedos/) y la elevación del dedo gordo, y después suben por tres versiones del [pie corto](/es/ejercicios/pie-corto/). La separación de dedos, la inversión con banda, el equilibrio a una pierna, la abducción de cadera y los estiramientos de pantorrilla completan el resto. Son las dosis de inicio de Walkito, no una indicación médica. Hazlos descalzo. [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'El pie corto es la base del trabajo del arco: llevas la parte delantera del pie hacia el talón para que el arco suba, sin encoger los dedos. El pie corto, el fortalecimiento de cadera y los estiramientos son lo que probó el ensayo. Recoger la toalla, la elevación del dedo gordo, la separación de dedos, la inversión con banda y el equilibrio a una pierna son añadidos de Walkito.',
        'Haces un ejercicio de arco a la vez, el de tu nivel, y subes un paso cuando las dos últimas sesiones con él se sintieron fáciles. Walkito deja fuera lo que necesite una toalla o una banda que no tengas. Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy. Es el punto en el que Walkito termina una sesión.',
      ],
      table: {
        head: ['Ejercicio', 'Dosis', 'Con qué frecuencia', 'Qué debes sentir', 'Detente si'],
        rows: [
          ['Recoger la toalla', '3 series de 8, mantén 5 segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'Los músculos pequeños bajo el arco trabajando', 'El dolor llega a 6/10'],
          ['Elevación del dedo gordo', '3 series de 8, mantén 5 segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'El dedo gordo moviéndose solo', 'El dolor llega a 6/10'],
          ['Pie corto, sentado', '3 series de 10, mantén 5 segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'El arco subiendo, con los dedos relajados', 'El dolor llega a 6/10'],
          ['Pie corto, de pie', '3 series de 10, mantén 5 segundos, los dos pies', 'Cada sesión, mientras sea tu nivel', 'El arco trabajando mientras carga tu peso', 'El dolor llega a 6/10'],
          ['Pie corto, una pierna', '3 series de 10, mantén 5 segundos, cada pie', 'Cada sesión, mientras sea tu nivel', 'Más trabajo en el arco, con el dedo gordo apoyado', 'El dolor llega a 6/10'],
          ['Separación de dedos', '3 series de 10, mantén 5 segundos, los dos pies', 'Días de fuerza, alternando con la inversión con banda', 'Esfuerzo en los músculos pequeños del pie', 'El dolor llega a 6/10'],
          ['Inversión con banda', '3 series de 15, cada pie', 'Días de fuerza, después de seis sesiones de pie corto de pie', 'Trabajo en la parte interna del pie y del tobillo', 'El dolor llega a 6/10'],
          ['Equilibrio a una pierna', '3 veces 30 segundos, cada pierna', 'Días de equilibrio', 'El pie y el tobillo haciendo pequeñas correcciones', 'El dolor llega a 6/10'],
          ['Abducción de cadera', '3 series de 15, cada pierna, de pie, con banda', 'Días de fuerza, cuando tu plan incluye la meta de igualar izquierda y derecha', 'Trabajo en la parte externa de la cadera', 'El dolor llega a 6/10'],
          ['Estiramiento de pantorrilla y sóleo', '3 veces 30 segundos en cada estiramiento, cada pierna', 'Casi todas las sesiones, alternando con los otros estiramientos', 'Un estiramiento en la pantorrilla, y después más abajo, cerca del talón', 'El dolor llega a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Recoger la toalla',
          evidence: { level: 'early', why: 'Añadido de Walkito. No formaba parte del programa probado en los estudios de esta página.' },
          dose: '3 series de 8, mantén 5 segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'Los músculos pequeños bajo el arco trabajando',
          how: 'Siéntate con una toalla extendida en el suelo bajo el pie. Atrae la toalla con los dedos y mantén el talón abajo. Despierta los músculos pequeños bajo el arco.',
          image: 'Ejercicio: recoger la toalla',
          media: 'towel_scrunch',
          caption: 'Recoger la toalla: atrae la toalla con los dedos, el talón no se levanta',
          alt: 'Una figura sentada atrae una toalla con los dedos de un pie',
        },
        {
          name: 'Elevación del dedo gordo',
          evidence: { level: 'early', why: 'Añadido de Walkito. No formaba parte del programa probado en los estudios de esta página.' },
          dose: '3 series de 8, mantén 5 segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El dedo gordo moviéndose solo',
          how: 'Siéntate con los pies apoyados. Levanta solo el dedo gordo y mantén, mientras los otros cuatro siguen apoyados en el suelo. Lograr que el dedo gordo se mueva solo es el primer paso para activar el arco.',
          image: 'Ejercicio: elevación del dedo gordo',
          media: 'big_toe_lift',
          caption: 'Elevación del dedo gordo: levanta solo el dedo gordo, los otros cuatro siguen apoyados',
          alt: 'Un pie en el suelo levanta solo el dedo gordo, con el arco resaltado',
        },
        {
          name: 'Pie corto, sentado',
          evidence: { level: 'moderate', why: 'Parte del programa que mejoró la forma del arco en un ensayo de 2023. Por sí solo, el pie corto tiene resultados más débiles.' },
          dose: '3 series de 10, mantén 5 segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El arco subiendo',
          how: 'Siéntate con el pie apoyado en el suelo. Lleva la parte delantera del pie hacia el talón para que el arco suba, y mantén. El borde externo del pie sigue en el suelo. No encojas los dedos: es el error más común en este ejercicio.',
          image: 'Ejercicio: pie corto, sentado',
          media: 'short_foot_seated',
          caption: 'Pie corto, sentado: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una pierna sentada con el pie apoyado en el suelo y los músculos del arco resaltados mientras el arco sube',
        },
        {
          name: 'Pie corto, de pie',
          evidence: { level: 'moderate', why: 'Parte del programa que mejoró la forma del arco en un ensayo de 2023. Por sí solo, el pie corto tiene resultados más débiles.' },
          dose: '3 series de 10, mantén 5 segundos, los dos pies',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El arco trabajando bajo tu peso',
          how: 'Ponte de pie con el peso en los dos pies y haz el mismo movimiento. Los dedos quedan planos y largos. Solo sube el arco, ahora cargando tu peso.',
          image: 'Ejercicio: pie corto, de pie',
          media: 'short_foot_double',
          caption: 'Pie corto, de pie: dedos planos y largos, solo sube el arco',
          alt: 'Dos piernas de pie, con el arco y la pantorrilla de una pierna resaltados mientras el arco sube',
        },
        {
          name: 'Pie corto, una pierna',
          evidence: { level: 'moderate', why: 'Parte del programa que mejoró la forma del arco en un ensayo de 2023. Por sí solo, el pie corto tiene resultados más débiles.' },
          dose: '3 series de 10, mantén 5 segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'Más trabajo en el arco',
          how: 'Apóyate en un pie y sube el arco. Mantén el dedo gordo abajo: si se levanta, el arco está haciendo trampa. Al trabajar un pie a la vez se nota cuál es el lado más débil.',
          image: 'Ejercicio: pie corto, una pierna',
          media: 'short_foot_single',
          caption: 'Pie corto, una pierna: sube el arco y mantén el dedo gordo abajo',
          alt: 'Un pie apoyado en el suelo, con el arco resaltado mientras sube',
        },
        {
          name: 'Separación de dedos',
          evidence: { level: 'early', why: 'Añadido de Walkito. No formaba parte del programa probado en los estudios de esta página.' },
          dose: '3 series de 10, mantén 5 segundos, los dos pies',
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
          evidence: { level: 'early', why: 'Añadido de Walkito. No formaba parte del programa probado en los estudios de esta página.' },
          dose: '3 series de 15, cada pie',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte interna del pie y del tobillo',
          how: 'Siéntate con una banda elástica alrededor del pie y gira el pie hacia adentro contra la banda. Mueve el pie, no la pierna: la rodilla no se mueve. Walkito la añade solo después de seis sesiones de pie corto de pie, para que primero trabajen los músculos propios del arco.',
          image: 'Ejercicio: inversión con banda',
          media: 'band_inversion',
          caption: 'Inversión con banda: gira el pie hacia adentro contra la banda, la rodilla no se mueve',
          alt: 'Una pierna con una banda elástica alrededor del pie, girando el pie hacia adentro, con la parte baja de la pierna resaltada',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: { level: 'early', why: 'Añadido de Walkito. No formaba parte del programa probado en los estudios de esta página.' },
          dose: '3 veces 30 segundos, cada pierna',
          often: 'Días de equilibrio',
          feel: 'Pequeñas correcciones en el pie y el tobillo',
          how: 'Apóyate en un pie y mira un punto fijo. Deja que el pie se tambalee: ese tambaleo es el pie trabajando para mantener el equilibrio. Si lo necesitas, toca ligeramente una encimera o la pared con la punta de los dedos en lugar de rendirte.',
          image: 'Ejercicio: equilibrio a una pierna',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: apóyate en un pie y deja que haga pequeñas correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
        {
          name: 'Abducción de cadera',
          evidence: { level: 'moderate', why: 'Parte del programa que mejoró la forma del arco en un ensayo de 2023.' },
          dose: '3 series de 15, cada pierna',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte externa de la cadera',
          how: 'De pie, con una banda elástica, lleva una pierna hacia el lado contra la banda. Empuja con el talón, no con los dedos. Una cadera que cede deja caer la carga sobre el arco.',
          image: 'Ejercicio: abducción de cadera',
          media: 'hip_abduction',
          caption: 'Abducción de cadera: lleva una pierna hacia el lado contra la banda',
          alt: 'Una figura de pie con una banda alrededor de las piernas lleva una pierna hacia el lado, con la parte externa de la cadera resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla y sóleo',
          evidence: { level: 'moderate', why: 'Parte del programa que mejoró la forma del arco en un ensayo de 2023. Ese ensayo midió la forma del arco, no el dolor.' },
          dose: '3 veces 30 segundos en cada estiramiento, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla, y después cerca del talón',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás apoyado y la cadera hacia adelante, y siente el estiramiento en la pantorrilla. Después, con el talón todavía apoyado, dobla la rodilla de atrás hasta sentirlo más abajo, cerca del talón. Ese es el sóleo, el músculo más profundo de la pantorrilla.',
          image: 'Ejercicio: estiramiento de pantorrilla y sóleo',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: manos en la pared, pierna de atrás estirada, talón abajo',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
      ],
    },
    {
      h2: '¿Tu pie plano es flexible o rígido?',
      figure: { id: 'arches', caption: 'Los mismos huesos del pie con pie plano, arco típico y arco alto, vistos desde el lado interior.', alt: 'Tres pies vistos desde el lado interior sobre un suelo plano: un pie plano con el arco apoyado en el suelo, un arco típico con un pequeño espacio debajo y un arco alto con un gran espacio bajo el centro del pie.' },
      paragraphs: [
        'Puedes saberlo en unos segundos. Importa porque el ensayo se hizo con pie plano flexible, y el ejercicio no va a cambiar la forma de uno rígido. Walkito no revisa tu tipo de pie, así que esta prueba te toca a ti:',
      ],
      bullets: [
        'Ponte de pie descalzo y mira la parte interna del pie. En un pie plano, el arco queda bajo o toca el suelo.',
        'Levanta ese pie del suelo, o ponte de puntillas, y vuelve a mirar.',
        'Si el arco vuelve, el pie plano es **flexible**. Los ejercicios de arriba son para este tipo.',
        'Si el arco sigue plano incluso sin tocar el suelo, el pie es **rígido**. Es estructural, y el ejercicio no lo va a cambiar. Consulta a un profesional de la salud antes de empezar un programa.',
        '«Arcos caídos» suele ser otro nombre para el pie plano. Pero si un arco se aplanó **de repente** en la edad adulta, consulta a un profesional de la salud antes de ejercitarlo, diga lo que diga la prueba.',
      ],
    },
    {
      h2: '¿Cuánto tardan los ejercicios para pie plano en cambiar el arco?',
      keyFact: 'En un ensayo con 52 personas con pie plano flexible, seis semanas de pie corto, tobillo, cadera y estiramientos mejoraron la caída del navicular en 0,4 cm y el ángulo del arco en 16 grados más que en el grupo de control (Brijwasi y Borkar, 2023).',
      paragraphs: [
        'Cuenta con seis semanas o más. En un ensayo con 52 personas con pie plano **flexible**, un programa de seis semanas de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos cambió dos medidas de la forma del arco más que en el grupo de control.',
        'El pie corto por sí solo tiene evidencia más escasa. Una revisión de 2024 sobre el pie corto en pie plano en general no encontró una diferencia clara con los grupos de control en la forma del arco ni en la postura del pie. Solo los programas de más de seis semanas mejoraron cuánto se hunde el arco bajo tu peso, y los autores dicen que hacen falta estudios más grandes. Así que si haces solo pie corto, dale más tiempo.',
        `Por eso la meta del arco de Walkito, mantenerlo ${PROGRAM.goals.archHoldSeconds} segundos, no tiene fecha de fin. La prueba de mantener el arco se hace cada ${PROGRAM.testEveryDays} días hasta que alcanzas tu primera meta, y después cada ${PROGRAM.testEveryDaysAfterGoal}, así ves si avanza. Cuando la alcanzas, el trabajo del arco sigue en el plan con una dosis más baja. Los ensayos están resumidos en [la página de evidencia](/es/evidencia/).`,
      ],
      sourceNote:
        'Brijwasi y Borkar: la caída del navicular (cuánto baja el hueso navicular, en la parte interna del arco, al ponerte de pie) mejoró 0,4 cm, y el ángulo del arco 16 grados, más que en el grupo de control. Cheng y colegas: sin diferencia significativa en conjunto en la caída del navicular ni en el Foot Posture Index; la caída del navicular mejoró de forma significativa solo en el subgrupo de programas de más de seis semanas.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: '¿Los ejercicios para pie plano ayudan con el dolor en el arco?',
      paragraphs: [
        'Ningún estudio de esta página midió el [dolor en el arco](/es/dolor-en-el-arco-del-pie/), así que ninguno muestra que estos ejercicios lo reduzcan. Muestran que la forma del arco se puede entrenar.',
        'El dolor en el talón, y a veces a lo largo del arco, puede venir de la fascia plantar, la banda de tejido que recorre la planta del pie. Para el dolor de talón bajo el pie, la guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**, y al entrenamiento de fuerza una **B**. Esos ejercicios están en [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Walkito puede trabajar las dos cosas como metas separadas: mañanas más fáciles para el dolor, y mantener el arco para el arco. Para la espalda, mira [pie plano y dolor de espalda](/es/pie-plano-y-dolor-de-espalda/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Los ejercicios pueden cambiar el arco del pie plano?',
      a: 'El ejercicio puede cambiar la forma del arco en el pie plano flexible, pero no en el rígido. En un ensayo con 52 personas cuyo arco volvía al levantar el pie, seis semanas de pie corto, tobillo, cadera y estiramientos cambiaron las medidas del arco más que en un grupo de control. Un pie que sigue plano al levantarlo es estructural.',
    },
    {
      q: '¿Cuánto tardan en funcionar los ejercicios para pie plano?',
      a: `Cuenta con seis semanas o más. En un ensayo con pie plano flexible, seis semanas de pie corto, cadera y estiramientos cambiaron las medidas del arco. Para el pie corto por sí solo, una revisión de 2024 no encontró un cambio claro en general, y solo una mejora en programas de más de seis semanas. Walkito mantiene su meta de sostener el arco ${PROGRAM.goals.archHoldSeconds} segundos hasta que la alcanzas.`,
    },
    {
      q: '¿Qué ejercicios fortalecen el arco del pie?',
      a: 'El pie corto es el principal: subes el arco llevando la parte delantera del pie hacia el talón, sin encoger los dedos. Walkito lo empieza sentado, con 3 series de 10 manteniendo 5 segundos, después de pie y después a una pierna. Recoger la toalla y la elevación del dedo gordo entrenan [los músculos pequeños alrededor del arco](/es/ejercicios-para-fortalecer-los-pies/).',
    },
    {
      q: '¿Con qué frecuencia debo hacer ejercicios para pie plano?',
      a: `Haz el pie corto en cada sesión mientras el arco sea tu meta. En Walkito eliges ${DAYS} días de entrenamiento a la semana, y mientras el arco sea el foco, cada sesión incluye un ejercicio de arco. La prueba de mantener el arco se repite cada ${PROGRAM.testEveryDays} días, y cada ${PROGRAM.testEveryDaysAfterGoal} tras tu primera meta.`,
    },
    {
      q: '¿Es bueno caminar descalzo si tienes pie plano?',
      a: 'Ningún ensayo compara caminar descalzo con usar zapatos en pie plano, así que ningún estudio lo resuelve. Caminar descalzo sí trabaja los músculos pequeños que sostienen el arco, y por eso el pie corto y recoger la toalla se hacen sin zapatos. Si caminar descalzo te provoca dolor nuevo, hazlo menos y pruébalo primero sobre una superficie blanda.',
    },
    {
      q: '¿Los arcos caídos son lo mismo que el pie plano?',
      a: 'Casi siempre, sí: «arcos caídos» es un nombre común para el pie plano, por lo general flexible y de toda la vida. A veces se refiere al [pie plano adquirido del adulto](https://doi.org/10.2174/1874325001711010714), a menudo por un [tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/) debilitado. Aparece en la edad adulta y puede doler o hincharse por dentro del tobillo. Si un arco baja de adulto, consulta primero a un profesional.',
      cites: [CITE.ling],
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'el arco sigue plano cuando el pie no toca el suelo'],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: `No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. Walkito arma un plan una semana a la vez en torno a una meta. Para un pie plano flexible, esa meta es mantener el arco: sostenerlo arriba ${PROGRAM.goals.archHoldSeconds} segundos. Si además tienes dolor, primero van las mañanas más fáciles.`,
    more: [
      `Eliges ${DAYS} días a la semana y sesiones de ${MINUTES} minutos. Cada ${PROGRAM.testEveryDays} días (y después cada ${PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas tu primera meta), una prueba corta mide cuánto mantienes el arco, la resistencia de la pantorrilla y el equilibrio, así puedes ver si el trabajo del arco está sirviendo de algo.`,
      'Las preguntas sobre la app están en [las preguntas frecuentes](/es/preguntas-frecuentes/), y [la mejor app para pie plano](/es/mejor-app-pie-plano/) la compara con otras apps.',
    ],
    cta: `Empieza con una sesión de ${PROGRAM.sessionMinutes[0]} minutos.`,
  },
  crumb: 'Ejercicios para pie plano',
  campaign: 'guide-flat-feet-es',
  related: ['hubFlatFeet'],
};

export const HEEL_PAIN_ES: Guide = {
  lang: 'es',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-09-24',
  updated: '2026-10-26',
  title: 'Ejercicios y estiramientos para fascitis plantar, con dosis',
  description:
    'Los estiramientos de fascia plantar y pantorrilla con grado A y la fuerza de pantorrilla con grado B: dosis, mejor momento para estirar y qué evitar.',
  h1: 'Ejercicios y estiramientos para la fascitis plantar',
  lede: 'Los mejores ejercicios para la fascitis plantar empiezan por dos estiramientos: el **estiramiento de la fascia plantar** (10 veces 10 segundos, antes de tus primeros pasos de la mañana) y los **estiramientos de pantorrilla y sóleo** (3 veces 30 segundos), que la guía de 2023 para el dolor de talón califica con A, su grado más alto. Después viene el trabajo de fuerza de pantorrilla, con grado B: elevaciones de talón que suben hasta elevaciones lentas con una toalla bajo los dedos.',
  intro: [
    'Esto es para el dolor de la [fascitis plantar](/es/fascitis-plantar/): un tirón agudo en el talón en los primeros pasos al levantarte o después de estar sentado, que se calma cuando empiezas a moverte. La guía clínica de 2023 para el dolor de talón (talalgia) la llama la causa más reconocida del dolor de talón bajo el pie. Si una radiografía muestra un espolón, [ejercicios para el espolón calcáneo](/es/ejercicios-espolon-calcaneo/) explica la misma rutina.',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón del Journal of Orthopaedic & Sports Physical Therapy le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de fuerza una B.',
    'En un ensayo con 82 personas, estirar la fascia plantar antes de ponerse de pie redujo el dolor de los primeros pasos de la mañana más que solo estirar la pantorrilla, a las ocho semanas (DiGiovanni y colegas, 2003).',
    'En un ensayo con 48 personas, las elevaciones de talón con carga alta redujeron el dolor y mejoraron la función diaria más rápido que el estiramiento, y a los doce meses los dos grupos estaban igualados (Rathleff y colegas, 2015).',
    'Para el dolor de talón al correr, la misma guía aconseja cambiar la carga en lugar de dejarlo todo, un consejo con grado E porque se basa en teoría, no en ensayos.',
    'Consulta primero a un profesional de la salud si el dolor empezó después de una lesión, viene con entumecimiento o hinchazón, te despierta por la noche o te duele al apretar el talón.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué ejercicios y estiramientos ayudan con la fascitis plantar?',
      figure: { id: 'plantar-fascia', caption: 'La fascia plantar va del hueso del talón a los dedos. El dolor de la fascitis plantar suele empezar donde se une al talón.', alt: 'Planta de un pie con la fascia plantar como bandas blancas que se abren desde el hueso del talón hasta la base de los dedos, y una mancha roja en el talón donde suele empezar el dolor.' },
      paragraphs: [
        'Tres estiramientos, cuatro pasos de fuerza y un automasaje plantar, en el orden en que los usa Walkito. Son las dosis de inicio de Walkito, no una indicación médica. Todos se hacen en casa: necesitas una pared, el borde de la cama, una silla, un escalón, una toalla enrollada y una pelota (o el pulgar). Hay un resumen en [hojas de ejercicios imprimibles](/es/hojas-de-ejercicios-imprimibles/). [Cómo escribimos estas guías](/es/sobre-walkito/). Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy. Es el punto en el que Walkito termina una sesión.',
      ],
      table: {
        head: ['Ejercicio', 'Dosis', 'Con qué frecuencia', 'Qué debes sentir', 'Detente si'],
        rows: [
          ['Estiramiento plantar', '10 veces 10 segundos, cada pie', 'Casi todas las sesiones, el primero antes de ponerte de pie', 'Un estiramiento a lo largo del arco, no en la pantorrilla', 'El dolor llega a 6/10'],
          ['Estiramiento de pantorrilla', '3 veces 30 segundos, cada pierna', 'Casi todas las sesiones, alternando con los otros estiramientos', 'Un estiramiento en la pantorrilla de la pierna de atrás estirada', 'El dolor llega a 6/10'],
          ['Estiramiento de sóleo', '3 veces 30 segundos, cada pierna', 'Casi todas las sesiones, alternando con los otros estiramientos', 'Un estiramiento en la parte baja de la pantorrilla, cerca del talón', 'El dolor llega a 6/10'],
          ['Elevaciones de talón sentado', '3 series de 10, los dos pies', 'Días de fuerza, 3 a la semana, nunca dos seguidos', 'Trabajo en la parte baja de la pantorrilla (el sóleo), casi sin carga en el talón', 'El dolor llega a 6/10'],
          ['Elevaciones de talón con dos pies', '3 series de 10, los dos pies', 'Días de fuerza, cuando las elevaciones sentado se sienten fáciles', 'Las pantorrillas trabajando, con los dos pies compartiendo la carga', 'El dolor llega a 6/10'],
          ['Elevación de talón sostenida', '3 veces 20 segundos, los dos pies', 'Días de fuerza, el siguiente paso', 'Las pantorrillas trabajando para quedarse quietas arriba', 'El dolor llega a 6/10'],
          ['Elevación de talones con toalla', '3 series de 12, cada pierna, con peso extra', 'Días de fuerza, cuando la meta pasa a la fuerza de la pantorrilla', 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco', 'El dolor llega a 6/10'],
          ['Automasaje plantar', '2 minutos', 'Días de recuperación', 'Presión firme bajo el pie, nunca una mueca de dolor', 'El dolor llega a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica el estiramiento con A, su grado más alto.' },
          dose: '10 veces 10 segundos, cada pie',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Tira de los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero sentado en el borde de la cama, antes de que el pie toque el suelo. Paso a paso: [estiramiento de la fascia plantar](/es/ejercicios/estiramiento-fascia-plantar/).',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: tira de los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura tira hacia atrás de los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica el estiramiento con A, su grado más alto.' },
          dose: '3 veces 30 segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás apoyado en el suelo y la cadera hacia adelante. Una pantorrilla tensa tira del talón todo el día, así que este [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) importa aunque lo sientas más arriba.',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica el estiramiento con A, su grado más alto.' },
          dose: '3 veces 30 segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición, con el talón de atrás apoyado, y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Cómo se progresa en el trabajo de fuerza?',
      paragraphs: [
        'Mientras el dolor sea tu meta, Walkito mantiene suave el trabajo de pantorrilla, un paso a la vez:',
        {
          list: [
            'Primero elevaciones de talón sentado.',
            'Después elevaciones de talón con dos pies.',
            'Después una elevación de talón sostenida.',
          ],
        },
        'Subes un paso cuando las dos últimas sesiones con él se sintieron fáciles. La [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/) es la que más carga la fascia plantar, así que solo entra cuando el dolor de la mañana ya bajó y la meta pasa a la fuerza de la pantorrilla.',
      ],
      exercises: [
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Con la rodilla doblada trabajas sobre todo el sóleo, el músculo más profundo de la pantorrilla, no el gemelo que trabajas de pie. Entrena otro músculo, casi sin carga en el talón.',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'De pie sobre los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga mientras la pantorrilla despierta.',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube de puntillas con los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Elevación de talón sostenida',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 veces 20 segundos, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          how: 'Ponte de puntillas con los dos pies y quédate quieto arriba. No te dejes caer. Sostener arriba carga el tendón sin rebote.',
          image: 'Ejercicio: elevación de talón sostenida',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene de puntillas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talones con toalla',
          evidence: { level: 'moderate', why: 'Es la rutina de un ensayo con 48 personas, y la guía de 2023 califica el trabajo de fuerza con B.' },
          dose: '3 series de 12, cada pierna, con peso extra',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla',
          how: 'Apóyate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tarda tres segundos en subir, mantén dos arriba y tarda tres en bajar. En este nivel Walkito añade peso, por ejemplo una mochila. La toalla es lo que hace que este ejercicio trabaje la fascia plantar y no solo la pantorrilla.',
          image: 'Ejercicio: elevación de talones con toalla',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos para subir, dos arriba, tres para bajar',
          alt: 'Una figura sube de puntillas sobre un escalón con una toalla enrollada, con las pantorrillas resaltadas',
        },
        {
          name: 'Automasaje plantar',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Se incluye por comodidad, para usarlo entre sesiones.' },
          dose: '2 minutos',
          often: 'Días de recuperación',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una [pelota de masaje](/es/pelota-de-masaje-fascitis-plantar/), con presión firme. Si haces muecas de dolor, afloja. Sirve para sentirte más cómodo, pero no sustituye el estiramiento ni el trabajo de pantorrilla. ¿No tienes pelota? Usa pasadas firmes con el pulgar, del talón a los dedos.',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Cuál es el mejor momento para estirar con fascitis plantar?',
      keyFact: 'En un ensayo con 82 personas con fascitis plantar crónica, estirar la fascia plantar antes de apoyar el peso redujo el dolor en los primeros pasos de la mañana más que solo estirar la pantorrilla, a las ocho semanas (DiGiovanni y colegas, 2003).',
      paragraphs: [
        '**Antes de tus primeros pasos de la mañana y antes de ponerte de pie después de estar sentado mucho rato.** Son los dos momentos en que la fascia plantar está más rígida y es más probable que duela.',
        'Un ensayo de 2003 con 82 personas con fascitis plantar crónica probó un estiramiento de la fascia plantar hecho antes de apoyar el peso: 10 veces 10 segundos, tres veces al día, con la primera serie antes del primer paso de la mañana. A las ocho semanas, ese grupo tenía significativamente menos dolor en sus primeros pasos que el grupo que solo estiraba la pantorrilla. A los dos años, después de que todos recibieron el mismo estiramiento, los dos grupos habían mejorado.',
        'Walkito pone el primer [estiramiento plantar](/es/ejercicios/estiramiento-fascia-plantar/) en el borde de la cama por la misma razón: estirar antes de que el tejido reciba carga es más suave que después. Para quien sigue con dolor en los primeros pasos, la guía de 2023 también le da una **A** a las [férulas nocturnas](/es/ferula-nocturna-fascitis-plantar/), usadas de 1 a 3 meses. Son algo para hablar con un profesional de la salud; Walkito no las ofrece. Más en [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/).',
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: '¿Qué es mejor para la fascitis plantar, la fuerza o el estiramiento?',
      keyFact: 'En un ensayo con 48 personas, el grupo de las elevaciones de talón anotó 29 puntos menos en el Foot Function Index a los tres meses (en esta escala, menos puntos significa menos dolor y mejor función), pero a los doce meses los dos grupos estaban casi igualados (Rathleff y colegas, 2015).',
      paragraphs: [
        'Los dos ayudan, y **la fuerza ayuda antes.** En un ensayo con 48 personas con fascitis plantar confirmada por ecografía, todas con [plantillas](/es/plantillas-o-ejercicios/), un grupo añadió elevaciones de talón con carga alta un día sí y otro no, y el otro estiró la fascia plantar.',
        'A los tres meses, el grupo de las elevaciones iba claramente por delante en dolor y función diaria. A los doce meses, los dos grupos estaban igualados. La fuerza adelantó la mejora; no la hizo más grande. La guía respalda hacer las dos cosas. El análisis estudio por estudio está en [la página de evidencia](/es/evidencia/).',
      ],
      sourceNote:
        'Medido con el Foot Function Index, donde menos puntos significa menos dolor y mejor función: 29 puntos menos en el grupo de las elevaciones a los tres meses (IC 95 %: 6-52, p = 0,016), y 22 frente a 16 a los doce meses, una diferencia no significativa.',
      cites: [CITE.rathleff],
    },
    {
      h2: '¿Qué ejercicios debes evitar con fascitis plantar?',
      paragraphs: [
        'Evita la actividad de alto impacto que dispare la carga sobre el talón [mientras el dolor esté activo](/es/brote-de-fascitis-plantar/), y caminar descalzo en suelos duros a primera hora de la mañana.',
        'Saltar, esprintar y los ejercicios pliométricos ponen una fuerza pico repentina sobre la fascia plantar, y eso puede hacer retroceder un tejido irritado. La guía de 2023 recomienda ajustar la carga sobre tus pies en el trabajo, en el deporte y en el día a día, un consejo con grado E. No prohíbe ejercicios concretos. **La pregunta es si la carga es más de lo que el tejido puede recuperar de un día para otro.**',
        'Ir descalzo en suelos duros es un detonante común porque la fascia está más rígida después del reposo y un suelo duro no amortigua nada. Hasta que los síntomas se calmen, usa un zapato bien acolchado, también en casa. Si además tienes **dolor de Aquiles** cerca de la parte de atrás del talón, evita los descensos profundos de talón desde el borde de un escalón, que pueden cargar la inserción del Aquiles, y haz la elevación de talones con toalla en suelo plano hasta que un profesional de la salud descarte el Aquiles.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Descansar o seguir corriendo con dolor de talón?',
      paragraphs: [
        'Si el dolor de talón empeora al correr, **cambia la carga en lugar de dejarlo todo.** Ese consejo tiene grado E en la guía de 2023, lo que significa que se basa en teoría y no en ensayos. Sigue con los estiramientos y reduce lo que empeore el talón. Cambiar algunas carreras por natación o bicicleta estática mantiene tu forma física sin irritar el talón.',
        'En una mala mañana, mantén los estiramientos y quita las elevaciones de talón por ese día. Si tus primeros pasos son claramente peores después de correr, esa carrera fue más de lo que el talón podía aguantar. Walkito lo lee igual: un día muy largo de pie convierte la siguiente sesión de fuerza en una de recuperación más ligera, y una mañana con dolor acorta la sesión sin cancelarla.',
        'Detente y consulta a un profesional de la salud si correr te duele de forma aguda o el dolor empeora semana tras semana. Lo mismo si el dolor aumenta durante tus carreras después de subir el kilometraje, o si te duele al apretar los lados del talón. Las dos cosas pueden ser señales de una fractura por estrés, una de las otras causas de dolor de talón que menciona la guía.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué recomienda la guía de 2023 para la fascitis plantar?',
      paragraphs: [
        'La guía de 2023 califica cada opción según la fuerza de su evidencia. A es el grado más alto. Un grado marcado «en contra» significa que la guía aconseja no usar esa opción.',
      ],
      table: {
        head: ['Opción', 'Grado'],
        rows: [
          ['Estiramiento de la fascia plantar y de la pantorrilla', '**A**'],
          ['Terapia manual (trabajo con las manos sobre las articulaciones y tejidos blandos de la pierna y el pie), hecha por un profesional', '**A**'],
          ['[Vendaje](/es/vendaje-fascitis-plantar/) junto con otra fisioterapia, para mejorar dolor y función hasta 6 semanas', '**A**'],
          ['Férulas nocturnas de 1 a 3 meses, si tus primeros pasos de cada mañana siguen doliendo', '**A**'],
          ['Entrenamiento de resistencia y fuerza', '**B**'],
          ['Láser de baja intensidad y punción seca, hechos por un profesional', '**B**'],
          ['Plantillas ortopédicas solas, para el dolor a corto plazo', '**B en contra**'],
          ['Plantillas ortopédicas combinadas con otros cuidados', '**C**'],
          ['Ultrasonido terapéutico añadido al estiramiento', '**A en contra**'],
        ],
      },
      after: [
        'Así que las [plantillas](/es/plantillas-o-ejercicios/) por sí solas no bastan para la mayoría de las personas, aunque pueden acompañar al estiramiento y al trabajo de fuerza. La guía no califica tipos de zapato, pero el calzado sin soporte es un factor de riesgo comúnmente reconocido. Si te duelen los pies después de un día largo de pie, mira [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) o [dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Cuáles son los mejores estiramientos para la fascitis plantar?',
      a: 'Los estiramientos de fascia plantar, pantorrilla y sóleo, con grado A en la guía de 2023. Cruza el pie sobre la rodilla y tira de los dedos hacia atrás, 10 veces 10 segundos, la primera antes de ponerte de pie. Después estira la pantorrilla contra una pared, rodilla de atrás estirada y luego doblada, 3 veces 30 segundos.',
      cites: [CITE.guideline],
    },
    {
      q: '¿Basta con estirar para la fascitis plantar?',
      a: 'Estirar ayuda, y añadir fuerza ayuda antes. En un ensayo con 48 personas, las elevaciones de talón con carga alta iban claramente por delante del estiramiento a los tres meses, y a los doce meses los dos grupos estaban igualados. La guía de 2023 da al estiramiento una A y a la fuerza una B, y respalda hacer ambas cosas.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      q: '¿Cuándo es mejor estirar la fascia plantar?',
      a: 'Antes de tus primeros pasos de la mañana y antes de levantarte tras estar sentado mucho rato. En un ensayo de 2003 con 82 personas, estirar la fascia plantar antes de apoyar el peso, 10 veces 10 segundos tres veces al día, redujo el dolor de los primeros pasos más que solo estirar la pantorrilla, a las ocho semanas.',
      cites: [CITE.digiovanni2003],
    },
    {
      q: '¿Con qué frecuencia debo hacer ejercicios para la fascitis plantar?',
      a: `Estira en casi todas las sesiones y haz la fuerza de pantorrilla en los días de fuerza. En Walkito eliges ${DAYS} días de entrenamiento a la semana, con tres días de fuerza, nunca dos seguidos. En el ensayo con 48 personas detrás de la elevación de talones con toalla, las elevaciones se hacían un día sí y otro no.`,
    },
    {
      q: '¿Qué es lo peor que puedes hacer con fascitis plantar?',
      a: 'Caminar descalzo sobre suelo duro justo al despertar, y volver de golpe a correr o saltar mientras el talón sigue irritado, son los errores más claros. Las dos cosas cargan con fuerza repentina la fascia más rígida y menos recuperada. La guía de 2023 para el dolor de talón recomienda ajustar la carga en lugar de forzar con dolor.',
      cites: [CITE.guideline],
    },
    {
      q: '¿Puedo seguir corriendo con fascitis plantar?',
      a: 'No tienes que dejarlo todo: cambia la carga. La guía de 2023 recomienda ajustar la carga sobre tus pies, con grado E, es decir, basado en teoría y no en ensayos. Reduce lo que empeore el talón. Si tus primeros pasos al día siguiente son claramente peores, esa carrera fue demasiado. Un dolor agudo o que empeora necesita un profesional de la salud.',
      cites: [CITE.guideline],
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: `No tienes que decidir el orden, las dosis ni cuánto tiempo quedarte en cada ejercicio. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta es una mejor mañana: dolor de 1/10 o menos durante ${PROGRAM.painFreeDays} días seguidos.`,
    more: [
      `Eliges ${DAYS} días a la semana y sesiones de ${MINUTES} minutos. Cada ${PROGRAM.testEveryDays} días (y después cada ${PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas esa meta), una prueba corta mide la [resistencia de la pantorrilla](/es/test-de-elevacion-de-talon/), cuánto mantienes el arco y el equilibrio, así puedes ver qué está cambiando. Cuando alcanzas la meta, el trabajo del talón sigue en el plan con una dosis más baja, porque el dolor de talón puede volver.`,
      'Cuánto suele tardar la recuperación está en [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/). Si además tienes pie plano, mira [ejercicios para pie plano](/es/ejercicios-pie-plano/).',
    ],
    cta: `Empieza con una sesión de ${PROGRAM.sessionMinutes[0]} minutos.`,
  },
  crumb: 'Ejercicios para la fascitis plantar',
  campaign: 'guide-plantar-fasciitis-es',
  related: ['hubPlantarFasciitis'],
};
