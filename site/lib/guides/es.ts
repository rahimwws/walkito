import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Written in Spanish around the Spanish queries — «ejercicios fascitis
 * plantar», «estiramientos fascitis plantar», «dolor de talón por la mañana»,
 * «espolón calcáneo», «ejercicios pie plano», «dolor en el arco del pie» —
 * rather than translated line by line. Figures, doses and qualifiers are
 * identical to `en.ts`; exercise names follow the app's Spanish catalogue.
 * Neutral Spanish with `tú`, as the app uses, and Spanish punctuation: «»,
 * incisos entre rayas pegadas al texto, coma decimal.
 *
 * The plan has no fixed length any more, so nothing here may describe it in
 * weeks. Every number about the plan is read from `PROGRAM`.
 */

/** `3, 5 o 7` — the plan's options as a Spanish list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} o ${options[options.length - 1]}`;
}

const DAYS = either(PROGRAM.daysPerWeek);
const MINUTES = either(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, as `en.ts` and the About pages. Calcaneal
 * stress fracture is one of the causes of heel pain the 2023 guideline names
 * alongside plantar fasciitis, which is why a runners' site spells out its
 * signs.
 */
const RED_FLAGS = {
  h2: 'Consulta antes a un profesional si',
  bullets: [
    'el dolor empezó tras una lesión o una caída',
    'no puedes apoyar el pie, o cojeas',
    'hay entumecimiento, hormigueo, ardor, hinchazón o calor',
    'el talón está rojo, o tienes fiebre o te encuentras mal',
    'te despierta por la noche',
    'es un dolor agudo, o va a peor aunque hayas reducido la carga',
    'duele al apretar los lados del talón, o el dolor aumenta al correr después de haber subido el kilometraje: las dos cosas pueden ser signos de una fractura por estrés',
    'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    'te duelen los dos talones y tienes otras articulaciones hinchadas o rígidas',
    'no ha mejorado tras varias semanas de ejercicio y menos carga',
    'un arco se ha aplanado de repente en la edad adulta',
  ],
} as const;

export const FLAT_FEET_ES: Guide = {
  lang: 'es',
  page: 'flatFeet',
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Ejercicios para pie plano y dolor en el arco del pie',
  description:
    'Pie corto, dedos, equilibrio y cadera para el pie plano flexible: dosis de inicio, cuánto tarda el arco en cambiar y qué hacer si el arco duele al correr.',
  h1: 'Ejercicios para el pie plano y el dolor en el arco',
  lede: 'Si tu pie plano es flexible (el arco reaparece cuando el pie no toca el suelo), los ejercicios que probó un ensayo son el pie corto, el fortalecimiento de cadera y el estiramiento de pantorrilla, juntos: seis semanas de ellos cambiaron las medidas del arco más que en el grupo de control. Dales tiempo: un metaanálisis de 2024 sobre el ejercicio de pie corto no encontró diferencias significativas en conjunto, y solo en los programas de más de seis semanas mejoró la caída del navicular, una medida de la altura del arco. Si lo que tienes es dolor en el arco, no cuentes con que estos ejercicios lo quiten: los estudios midieron la postura del arco, no el dolor. Si el dolor está cerca del talón, la guía de 2023 sobre fascitis plantar es mejor referencia: da grado A a los estiramientos de fascia y pantorrilla y grado B a la fuerza.',
  takeaways: [
    'El ensayo aleatorizado en el que se basan estos ejercicios se hizo en pie plano flexible: el que recupera el arco al levantar el pie del suelo.',
    'En un ensayo con 52 personas, seis semanas de ejercicio mejoraron la caída del navicular 0,4 cm y el ángulo del arco 16 grados más que el grupo de control.',
    'Un metaanálisis de 2024 no encontró un efecto significativo del ejercicio de pie corto en conjunto; solo en el subgrupo de programas de más de seis semanas mejoró la caída del navicular.',
    'Los estudios del arco midieron su postura, no el dolor; para el dolor de talón (fascitis plantar), la guía clínica de 2023 da grado A a los estiramientos y grado B a la fuerza.',
    'Un pie plano rígido, que sigue plano sin apoyo, es estructural: el ejercicio no lo cambia y conviene que lo valore un profesional.',
  ],
  sections: [
    {
      h2: 'Primero, comprueba: ¿flexible o rígido?',
      paragraphs: [
        'Mira tu pie de pie, y luego levántalo del suelo o ponte de puntillas. Si el arco reaparece, el pie plano es **flexible**: el tipo con el que se hizo el ensayo aleatorizado de esta página. El metaanálisis de 2024 reunió estudios de pie plano en general.',
        'Si el arco sigue plano incluso sin apoyo, es rígido. Es una cuestión estructural que el ejercicio no va a cambiar, y conviene consultar a un profesional antes de empezar un programa. Walkito no comprueba el tipo de pie, así que esta prueba la haces tú: con un pie rígido, deja de lado el objetivo de sostener el arco y consulta antes a un profesional.',
        'El «arco caído» suele ser otra forma de llamar al pie plano. Un arco que se ha aplanado **de repente**, en un solo pie y en la edad adulta, es otra cosa: consulta a un profesional antes de ejercitarlo.',
      ],
    },
    {
      h2: 'Los ejercicios, con dosis de inicio',
      paragraphs: [
        'Son los ejercicios para el arco que usa Walkito, con las dosis con las que empieza: un punto de partida, no una prescripción. El pie corto, el fortalecimiento de cadera y los estiramientos son lo que probó el ensayo; la separación de dedos y el equilibrio a una pierna los añade Walkito. Hazlos descalzo: con zapato no se ve si los dedos se encogen, que es justo lo que hay que evitar. [Cómo escribimos estas guías](/es/sobre-walkito/).',
      ],
      exercises: [
        {
          name: 'Pie corto, sentado',
          dose: '3 × 10, mantén 5 s, cada pie',
          how: 'Pie apoyado en el suelo. Lleva la parte delantera del pie hacia el talón para que el arco suba. No encojas los dedos: es el error más común.',
        },
        {
          name: 'Pie corto, de pie',
          dose: '3 × 10, mantén 5 s',
          how: 'El mismo movimiento con el peso en los dos pies. Los dedos siguen planos y largos; solo sube el arco.',
        },
        {
          name: 'Pie corto, una pierna',
          dose: '3 × 10, mantén 5 s, cada pie',
          how: 'Sobre un solo pie. El dedo gordo se queda abajo: si se levanta, el arco está haciendo trampa. Con un pie cada vez se ve qué lado es el débil.',
        },
        {
          name: 'Separación de dedos',
          dose: '3 × 10, mantén 5 s',
          how: 'Separa los dedos todo lo que puedas y mantén. Unos dedos que se separan reparten la carga con el arco; levantarlos no es el objetivo.',
        },
        {
          name: 'Equilibrio a una pierna',
          dose: '3 × 30 s, cada pierna',
          how: 'Sobre un pie, con la mirada en un punto fijo. Deja que el pie oscile: es lo que toca, es el pie haciendo el equilibrio.',
        },
        {
          name: 'Abducción de cadera',
          dose: '3 × 15, cada lado',
          how: 'Tumbado de lado, sube la pierna de arriba hacia fuera, empujando con el talón y no con los dedos. El fortalecimiento de glúteos formaba parte del programa de seis semanas del ensayo sobre pie plano flexible.',
        },
        {
          name: 'Estiramiento de pantorrilla y sóleo',
          dose: '3 × 30 s cada uno, cada pierna',
          how: 'Manos en la pared, pierna de atrás recta, talón abajo, cadera hacia delante. Después dobla la rodilla de atrás hasta notarlo más abajo, cerca del talón: ese es el sóleo.',
        },
      ],
    },
    {
      h2: '¿Cuánto tarda el arco en cambiar?',
      paragraphs: [
        'En un ensayo aleatorizado con 52 personas con pie plano **flexible**, un programa de seis semanas de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos mejoró la caída del navicular en **0,4 cm** y el ángulo del arco en **16 grados** más que el grupo de control.',
        'Un metaanálisis de 2024 sobre el ejercicio de pie corto no encontró **diferencias significativas en conjunto** en la caída del navicular ni en la postura del pie frente a los grupos de control. Solo en el subgrupo de programas de **más de seis semanas** mejoró de forma significativa la caída del navicular, y los autores piden estudios más grandes. Cuenta con al menos seis semanas, y con más si haces el pie corto por sí solo.',
        `Es una de las razones por las que el plan de Walkito no tiene fecha de fin. Su objetivo del arco (sostenerlo ${PROGRAM.goals.archHoldSeconds} segundos) sigue en el plan hasta que lo alcanzas, tarde las semanas que tarde, y la prueba de sostener el arco se repite cada ${PROGRAM.testEveryDays} días hasta que alcanzas tu primer objetivo, y después cada ${PROGRAM.testEveryDaysAfterGoal}, para que veas si se mueve. Los ensayos están resumidos en [la página de evidencia](/science/) (en inglés).`,
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: '¿Quitan el dolor estos ejercicios?',
      paragraphs: [
        'Por sí solos, no hay que contar con ello. Los estudios sobre el arco de esta página midieron la postura del pie (la caída del navicular, el ángulo del arco), no el dolor, y que el arco mejore de postura no garantiza que deje de doler.',
        'Si el dolor está cerca del talón, puede ser más relevante la guía clínica de 2023 sobre la fascitis plantar, que para el dolor de talón da **grado A** a los estiramientos de fascia y pantorrilla y **grado B** al fortalecimiento. Lo tienes en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Walkito puede trabajar las dos cosas a la vez, como objetivos separados: mañanas sin dolor para el dolor y sostener el arco para el arco.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Dolor en el arco del pie al correr',
      paragraphs: [
        'El dolor en el arco al correr puede venir de la fascia plantar (la misma estructura de la fascitis plantar), sobre todo si se concentra cerca del talón o es peor en los primeros pasos de la mañana; por la sensación sola no se puede saber. Tener el pie plano no significa que esa sea la causa, y tener un arco normal no te libra de él.',
        'Si el dolor está cerca del talón y encaja con la fascitis plantar, lo que aplica es la [guía de ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Si el dolor es agudo, va a más, te hace cojear o apareció tras un golpe, consulta a un profesional antes de seguir corriendo.',
      ],
    },
  ],
  faq: [
    {
      q: '¿Sirven de verdad los ejercicios para el pie plano?',
      a: 'En el pie plano flexible, pueden cambiar la postura del arco de forma medible. En un ensayo con 52 personas, seis semanas de ejercicio mejoraron la caída del navicular 0,4 cm y el ángulo del arco 16 grados más que el grupo de control. En el pie plano rígido, que es estructural, el ejercicio no cambia el arco.',
    },
    {
      q: '¿Cuánto tardan los ejercicios en cambiar el arco del pie?',
      a: 'Cuenta con seis semanas o más. En un ensayo, seis semanas de pie corto, cadera y estiramientos cambiaron las medidas del arco. Para el pie corto por sí solo, un metaanálisis de 2024 no halló efecto significativo en conjunto; la caída del navicular solo mejoró con programas de más de seis semanas. Walkito mantiene el objetivo del arco hasta alcanzarlo.',
    },
    {
      q: '¿Por qué me duele el arco del pie al correr?',
      a: 'El dolor en el arco al correr puede venir de la fascia plantar, sobre todo si se concentra cerca del talón o empeora al levantarte; por la sensación sola no se sabe. Tener el pie plano no significa que sea la causa. Mira los [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) y, si el dolor es agudo o va a más, consulta a un profesional.',
    },
    {
      q: '¿Cómo sé si mi pie plano es flexible o rígido?',
      a: 'Mira tu pie de pie y luego levántalo del suelo o ponte de puntillas: si el arco reaparece, es flexible; si sigue plano, es rígido. El ensayo aleatorizado de esta guía se hizo con pie plano flexible. Un pie plano rígido es estructural, el ejercicio no lo cambia y conviene que lo valore un profesional.',
    },
    {
      q: '¿Los ejercicios para el pie plano quitan el dolor?',
      a: 'No por sí solos: los estudios sobre ejercicios para el pie plano midieron la postura del arco, no el dolor, y un arco mejor alineado no garantiza un pie sin dolor. Si duele cerca del talón, la guía clínica de 2023 sobre fascitis plantar da grado A a estirar fascia y pantorrilla, y grado B a la fuerza.',
    },
    {
      q: '¿Cada cuánto hay que hacer los ejercicios para el pie plano?',
      a: `Cada día de entrenamiento mientras el arco sea tu objetivo. En Walkito eliges ${DAYS} días a la semana y, mientras el arco es el objetivo principal, cada sesión incluye un ejercicio de arco, un nivel más difícil cada vez. La prueba de sostener el arco se repite cada ${PROGRAM.testEveryDays} días, y cada ${PROGRAM.testEveryDaysAfterGoal} tras tu primer objetivo.`,
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'el arco sigue plano cuando el pie no toca el suelo'],
  },
  program: {
    h2: 'Hacerlo como programa',
    text: `Walkito convierte estos ejercicios en un plan sin fecha de fin que se arma **una semana cada vez** alrededor de un objetivo medible. El del arco es sostenerlo ${PROGRAM.goals.archHoldSeconds} segundos. Eliges ${DAYS} días de entrenamiento a la semana y sesiones de ${MINUTES} minutos, con 2 a 4 ejercicios cada una; el del objetivo nunca se recorta. Cada ${PROGRAM.testEveryDays} días, ${PROGRAM.retestTests} pruebas de unos ${PROGRAM.retestMinutes} minutos (elevaciones de talón a una pierna, sostener el arco y equilibrio a una pierna) te dicen si el trabajo del arco está sirviendo, en vez de adivinarlo; tras alcanzar el primer objetivo, cada ${PROGRAM.testEveryDaysAfterGoal}. Un objetivo alcanzado pasa a mantenimiento, con menos dosis, y el siguiente ocupa su lugar. Más en [la página de Walkito](/es/) y en [Sobre Walkito](/es/sobre-walkito/).`,
  },
  crumb: 'Ejercicios para pie plano',
  campaign: 'guide-flat-feet-es',
};

export const HEEL_PAIN_ES: Guide = {
  lang: 'es',
  page: 'heelPain',
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Ejercicios y estiramientos para la fascitis plantar',
  description:
    'Estiramientos y elevaciones para la fascitis plantar y el dolor de talón: dosis, por qué duele por la mañana, si puedes correr y qué dice la guía de 2023.',
  h1: 'Ejercicios y estiramientos para la fascitis plantar y el dolor de talón',
  lede: 'Para la fascitis plantar, los ejercicios con más respaldo son los estiramientos de la fascia plantar y de la pantorrilla (grado A, la nota más alta de la guía clínica de 2023) y el entrenamiento de fuerza de los músculos del pie y el tobillo, con grado B (las elevaciones de talón son una forma de hacerlo). En un ensayo con 48 personas, todas con plantillas, las elevaciones lentas a una pierna con una toalla bajo los dedos mejoraron el dolor y la función antes que los estiramientos específicos de la fascia, aunque a los doce meses los dos grupos se habían igualado. Hacer las dos cosas es lo que respalda la guía.',
  takeaways: [
    'La guía clínica de 2023 sobre la fascitis plantar da grado A a estirar la fascia plantar y la pantorrilla, y grado B al fortalecimiento.',
    'En un ensayo con 48 personas, todas con plantillas, la fuerza con carga superó al estiramiento en 29 puntos del Foot Function Index a los 3 meses; a los 12 meses los grupos se igualaron.',
    'Para quien tiene dolor de forma constante en los primeros pasos de la mañana, la guía de 2023 da grado A a las férulas nocturnas durante 1 a 3 meses.',
    'Un espolón visto en una radiografía no demuestra por sí solo el origen del dolor; los estudios de esta guía son sobre fascitis plantar.',
    'El dolor de talón tras una lesión, con entumecimiento o hinchazón, que te despierta por la noche o que duele al apretar el talón necesita antes un profesional.',
  ],
  sections: [
    {
      h2: '¿Espolón calcáneo o fascitis plantar?',
      paragraphs: [
        'Mucha gente llama «espolón» a cualquier dolor de talón. El espolón calcáneo es un pequeño saliente de hueso que se ve en una radiografía; la **fascitis plantar** es dolor donde la fascia plantar se une al talón. Tener un espolón en la imagen no significa, por sí solo, que sea lo que duele.',
        'Los estudios y la guía clínica de esta página se refieren a la fascitis plantar. Qué tienes tú lo dirá un profesional; aquí tienes los ejercicios que la guía clínica, escrita para fisioterapeutas, califica mejor para la fascitis plantar.',
      ],
    },
    {
      h2: 'Los ejercicios, con dosis de inicio',
      paragraphs: [
        'Son los ejercicios que usa Walkito para el dolor de talón, con las dosis con las que empieza: un punto de partida, no una prescripción. Los tres primeros son los estiramientos para la fascitis plantar (fascia y pantorrilla, grado A en la guía de 2023); el último, el trabajo de fuerza, con grado B. [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'En la app, la primera semana es de adaptación: nada que cargue la fascia plantar y nada por encima del nivel 2. Las elevaciones de talón con toalla, las que más cargan la fascia, llegan después, un nivel cada vez.',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          dose: '10 × 10 s, cada pie; el primero, antes de levantarte',
          how: 'Sentado, cruza el pie sobre la otra rodilla y tira de los dedos hacia ti hasta notar el estiramiento en el arco, no en la pantorrilla.',
        },
        {
          name: 'Estiramiento de pantorrilla',
          dose: '3 × 30 s, cada pierna',
          how: 'Manos en la pared, pierna de atrás recta, talón abajo, cadera hacia delante.',
        },
        {
          name: 'Estiramiento de sóleo',
          dose: '3 × 30 s, cada pierna',
          how: 'La misma posición con la rodilla de atrás doblada, hasta notarlo más abajo, cerca del talón. El músculo profundo de la pantorrilla solo se suelta con la rodilla doblada.',
        },
        {
          name: 'Elevación de talones con toalla',
          dose: '3 × 12, cada pierna, en días alternos',
          how: 'En un escalón, sobre un pie, con una toalla enrollada bajo los dedos. Tres segundos arriba, dos mantenidos, tres abajo. La toalla es lo que hace trabajar a la fascia y no solo a la pantorrilla.',
        },
      ],
    },
    {
      h2: 'Por qué el talón duele más por la mañana',
      paragraphs: [
        'El dolor en los primeros pasos al levantarte, que suele ir cediendo al caminar un rato, se asocia a menudo con la fascitis plantar. Por eso el primer estiramiento plantar se hace sentado en la cama, antes de apoyar el pie.',
        'Para quien tiene ese dolor de forma constante, la guía clínica de 2023 da **grado A** a las férulas nocturnas durante 1–3 meses; es algo que hay que hablar con un profesional, y Walkito no lo ofrece. En Walkito, el dolor que anotas cada mañana decide la sesión del día: una mañana con mucho dolor la acorta o la suaviza, y una mañana buena no la acelera.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Fuerza o estiramiento?',
      paragraphs: [
        'En un ensayo aleatorizado con 48 personas con fascitis plantar confirmada por ecografía, los dos grupos llevaron plantillas; uno hizo además elevaciones de talón con carga en días alternos y el otro, estiramientos diarios específicos de la fascia. A los tres meses, el grupo de fuerza puntuó **29 puntos mejor** en el Foot Function Index (IC 95 % 6–52, p = 0,016).',
        'A los doce meses los grupos se habían igualado: 22 frente a 16, sin diferencia significativa. La fuerza **adelanta** la mejoría; no la hace mayor. Por eso tiene sentido hacer las dos cosas, que es lo que respalda la guía.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Lo que recomienda la guía de 2023, y lo que no: los grados principales',
      bullets: [
        'Estiramiento de la fascia plantar y de la pantorrilla: **grado A**',
        'Terapia manual en las articulaciones y los tejidos blandos de la pierna y el pie, aplicada por un profesional: **grado A**',
        'Vendaje funcional junto con otros tratamientos de fisioterapia, para una mejoría a corto plazo (hasta 6 semanas): **grado A**',
        'Férulas nocturnas durante 1–3 meses, para el dolor constante en los primeros pasos de la mañana: **grado A**',
        'Entrenamiento de fuerza y resistencia: **grado B**',
        'Láser de baja intensidad y punción seca, aplicados por un profesional: **grado B**',
        'Plantillas como único tratamiento para aliviar el dolor a corto plazo: **grado B en contra**',
        'Plantillas combinadas con otros tratamientos: **grado C**',
        'Ultrasonido terapéutico añadido a los estiramientos: **grado A en contra**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Dolor de talón al correr: ¿hay que parar del todo?',
      paragraphs: [
        'No hace falta parar del todo: cambia la carga. Lo que aconseja la guía de 2023 en este punto es enseñar estrategias para modificar la carga en el trabajo, el deporte y la vida diaria, con **grado E**: se basa en razonamiento teórico, no en ensayos. En la práctica, mantén los estiramientos cada día y reduce lo que empeore el talón; en una mañana mala, deja las elevaciones de talón para otro día.',
        'Si corres, la carrera también es carga. Si los primeros pasos de la mañana siguiente duelen claramente más, esa carrera fue más de lo que el talón podía asumir: reduce distancia o ritmo en vez de insistir.',
        'Si correr te produce un dolor agudo, va a peor semana tras semana o te hace cojear, para y consulta a un profesional. Lo mismo si el dolor aumenta al correr después de haber subido el kilometraje o si duele al apretar los lados del talón: las dos cosas pueden ser signos de una fractura por estrés, una de las otras causas de dolor de talón que menciona la guía.',
        'Walkito aplica la misma lógica a cada sesión: un dolor de 6 sobre 10 o más durante un ejercicio termina la sesión, y las dos siguientes dan un paso atrás. Un día de muchos más pasos de lo habitual o una noche corta también acortan o suavizan la sesión de la mañana siguiente.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Después de mejorar: no dejarlo a medias',
      paragraphs: [
        `El dolor de talón puede volver; por eso en Walkito un objetivo alcanzado no se abandona. Cuando alcanzas el de mañanas sin dolor (el dolor al levantarte en 1 sobre 10 o menos durante ${PROGRAM.painFreeDays} días seguidos), pasa a mantenimiento, con una dosis menor, mientras el siguiente objetivo ocupa su lugar. El plan no tiene fecha de fin.`,
        'Si además tienes pie plano o te duele el arco, el arco tiene sus propios ejercicios y sus propios plazos: mira los [ejercicios para pie plano](/es/ejercicios-pie-plano/). La evidencia completa, con cada estudio enlazado, está en [la página de evidencia](/science/) (en inglés).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Puedo seguir corriendo con fascitis plantar?',
      a: 'No hace falta parar del todo: ajusta la carga. La guía de 2023 incluye enseñar a modificar la carga (grado E: razonamiento teórico, no ensayos). Reduce lo que empeore el talón y mantén los estiramientos. Si al día siguiente los primeros pasos duelen claramente más, la carrera fue demasiado. Si el dolor es agudo o empeora, consulta a un profesional.',
    },
    {
      q: '¿Por qué me duele el talón por la mañana al dar los primeros pasos?',
      a: 'El dolor de los primeros pasos de la mañana se asocia a menudo con la fascitis plantar. Una explicación habitual: tras horas de reposo, la fascia está más rígida y los primeros apoyos la estiran de golpe. Ayuda estirarla sentado antes de levantarte, y, si ese dolor es constante, la guía clínica de 2023 da grado A a las férulas nocturnas durante 1–3 meses.',
    },
    {
      q: '¿Espolón calcáneo y fascitis plantar son lo mismo?',
      a: 'No. El espolón calcáneo es un saliente de hueso que se ve en una radiografía; la fascitis plantar es dolor donde la fascia plantar se une al talón. Tener un espolón en la imagen no demuestra que sea lo que duele. Los ejercicios de esta guía se estudiaron en fascitis plantar; qué tienes tú lo dirá un profesional.',
    },
    {
      q: '¿Qué es mejor para la fascitis plantar, estirar o fortalecer?',
      a: 'Lo mejor es combinar las dos cosas. La guía clínica de 2023 da grado A a los estiramientos de fascia y pantorrilla y grado B al fortalecimiento. En un ensayo con 48 personas, todas con plantillas, las elevaciones de talón con carga mejoraron el dolor y la función antes que el estiramiento, aunque a los doce meses se igualaron.',
    },
    {
      q: '¿Cada cuánto hay que hacer los ejercicios para la fascitis plantar?',
      a: `Estira a diario y fortalece en días alternos. El primer estiramiento plantar del día se hace antes de levantarte. Las elevaciones de talón con toalla siguen el ensayo que usa Walkito: días alternos, desde 3 × 12 por pierna. En Walkito eliges ${DAYS} días a la semana, y los de fuerza nunca van seguidos.`,
    },
    {
      q: '¿Cuándo debo ir al médico por dolor de talón?',
      a: 'Antes de empezar, si el dolor apareció tras una lesión o una caída, si no puedes apoyar el pie o si hay entumecimiento, hormigueo, hinchazón, calor o fiebre. También si te despierta por la noche, es agudo o va a peor, o duele al apretar el talón: puede ser una fractura por estrés. Walkito no diagnostica.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Hacerlo como programa',
    text: `Walkito no tiene una duración fija: arma **una semana cada vez** alrededor de un objetivo medible, y si te duele, el primero es el dolor (mañanas sin dolor, es decir, ${PROGRAM.painFreeDays} días seguidos con el dolor al levantarte en 1 sobre 10 o menos). Eliges ${DAYS} días de entrenamiento a la semana y sesiones de ${MINUTES} minutos, y cada mañana el día se ajusta: una mañana con mucho dolor, un día de muchos pasos o una noche corta acortan o suavizan la sesión. Cada ${PROGRAM.testEveryDays} días, ${PROGRAM.retestTests} pruebas de unos ${PROGRAM.retestMinutes} minutos (elevaciones de talón a una pierna, sostener el arco y equilibrio a una pierna) muestran si avanzas; tras alcanzar el primer objetivo, cada ${PROGRAM.testEveryDaysAfterGoal}. Cuando alcanzas un objetivo, pasa a mantenimiento con menos dosis y el siguiente ocupa su lugar: el plan sigue mientras lo uses. Más en [la página de Walkito](/es/) y en [Sobre Walkito](/es/sobre-walkito/).`,
  },
  crumb: 'Ejercicios para la fascitis plantar',
  campaign: 'guide-heel-pain-es',
};
