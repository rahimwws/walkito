import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/standing-desk.ts` (2026-10-07), written around
 * the query «escritorio de pie dolor de pies». Figures, doses, grades and
 * qualifiers are identical to the English page. Numbers and units are joined
 * with a non-breaking space, as in `es.ts`.
 */

export const STANDING_DESK_ES: Guide = {
  lang: 'es',
  page: 'standingDesk',
  mainSource: CITE.buckley,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Escritorio de pie y dolor de pies: por qué pasa y qué ayuda',
  description:
    'Por qué te duelen los pies con un escritorio de pie, cuánto tiempo estar de pie antes de sentarte, tapetes antifatiga y ejercicios para tu escritorio.',
  h1: 'Dolor de pies por escritorio de pie: por qué pasa y qué ayuda',
  lede:
    'Se supone que pasarte a un escritorio de pie es mejor para ti, pero tus pies y tus piernas quizá no opinen lo mismo en las primeras semanas. El dolor de pies con un escritorio de pie casi siempre viene de estar de pie demasiado tiempo en la misma posición, no del escritorio en sí. La investigación apunta a ratos de pie más cortos, un tapete, buenos zapatos y unos cuantos ejercicios que puedes hacer sin dejar tu escritorio.',
  intro: [
    'Una revisión sistemática de 2017 sobre estudios de laboratorio encontró que los síntomas de espalda baja y piernas que ya importan clínicamente aparecen después de unos 40\u00A0minutos de pie sin pausa. Una declaración de expertos de 2015 recomienda ir sumando hasta 2\u00A0horas de estar de pie y actividad ligera por jornada laboral, y con el tiempo llegar a 4\u00A0horas, repartidas en ratos más cortos y no en un solo bloque. Esta página cubre la investigación y los pasos prácticos.',
  ],
  toc: true,
  takeaways: [
    'Una revisión sistemática de 2017 con 25 estudios de laboratorio encontró que los síntomas musculares clínicamente relevantes aparecían después de unos 40\u00A0minutos de pie sin pausa, y a los 42\u00A0minutos en personas con tendencia al dolor de espalda. Los autores recomendaron no estar de pie más de 40\u00A0minutos seguidos (Coenen y colegas, 2017).',
    'Una declaración de expertos de 2015 encargada por Public Health England recomienda sumar primero 2\u00A0horas al día de estar de pie y actividad ligera durante el trabajo, y con el tiempo llegar a 4\u00A0horas al día, repartidas en ratos más cortos (Buckley y colegas, 2015).',
    'Una revisión sistemática de 2014 con 14 estudios encontró evidencia suficiente de que los escritorios para trabajar sentado o de pie reducen las molestias de espalda baja, sin bajar la productividad, pero no encontró una proporción ideal entre tiempo sentado y de pie (Karakolis y Callaghan, 2014).',
    'Una revisión de 2015 sobre salud laboral encontró que estar de pie mucho tiempo se asocia con molestias musculares, cansancio y dolor de piernas, y puso los tapetes para el piso, las medias de compresión y el calzado con soporte entre las medidas con evidencia a favor (Waters y Dick, 2015).',
    'La poca flexibilidad del tobillo, es decir, una pantorrilla tensa, fue el factor que más predijo la fascitis plantar en un estudio de casos y controles de 2003: 23,3 veces las probabilidades. Estar de pie la mayor parte de la jornada las multiplicó por 3,6 (Riddle y colegas, 2003).',
  ],
  sections: [
    {
      h2: '¿Por qué te duelen los pies con un escritorio de pie?',
      keyFact: 'Una revisión sistemática de 2017 con 25 estudios encontró que los síntomas de espalda baja se volvían clínicamente relevantes tras unos 71 minutos de pie en general, pero solo 42 minutos en personas propensas al dolor de pie (Coenen y colegas, 2017).',
      paragraphs: [
        'El dolor de pies con un escritorio de pie pasa por la misma razón que duele cualquier rato largo de pie: tus pies, pantorrillas y la parte baja de las piernas cargan un peso fijo sin el alivio que dan caminar o sentarte. Cuando estás quieto de pie, la gravedad acumula sangre en la parte baja de las piernas, los músculos de la pantorrilla se quedan en la misma posición sin contraerse ni relajarse, y la fascia plantar bajo el arco absorbe una carga constante.',
        'Una revisión sistemática de 2017 con 25 estudios de laboratorio juntó datos de 591 participantes y encontró que los síntomas de espalda baja llegaban a niveles clínicamente relevantes después de unos 71\u00A0minutos de pie sin pausa en la población general, pero solo 42\u00A0minutos en personas que suelen tener dolor al estar de pie. Para los síntomas en las piernas, el panorama fue parecido. Los autores recomendaron 40\u00A0minutos como límite práctico antes de cortar el tiempo de pie.',
        'Una revisión de 2015 sobre salud laboral confirmó la relación entre estar de pie mucho tiempo y las molestias musculares, el cansancio y el dolor de piernas en muchos tipos de trabajo de pie. La revisión también encontró que el esfuerzo del corazón y la hinchazón de las piernas aumentan con el tiempo de pie.',
      ],
      cites: [CITE.coenen, CITE.waters],
    },
    {
      h2: '¿Cuánto tiempo estar de pie en un escritorio de pie antes de sentarte?',
      keyFact: 'Una declaración de expertos de 2015 recomienda ir sumando hasta 2 horas al día de estar de pie y actividad ligera, y con el tiempo llegar a 4 horas, repartidas en ratos más cortos (Buckley y colegas, 2015).',
      paragraphs: [
        'No hay una sola respuesta para todos, pero la investigación la acota. Una declaración de expertos de 2015, encargada por Public Health England y Active Working Community Interest Company, recomendó que quienes trabajan en escritorio empiecen sumando 2\u00A0horas al día de estar de pie y actividad ligera durante el horario de trabajo, y con el tiempo lleguen a 4\u00A0horas al día. La declaración especificó que el tiempo de pie debe repartirse en ratos más cortos, no hacerse de un jalón.',
        'La revisión de 2017 de estudios de laboratorio sugiere que 40\u00A0minutos de pie sin pausa es el punto en el que los síntomas empiezan a ser clínicamente relevantes. Juntando las dos cosas, un punto de partida práctico es estar de pie de 20 a 30\u00A0minutos, sentarte de 20 a 30\u00A0minutos y repetir durante el día, ajustando a medida que tu cuerpo se adapta.',
        'Una revisión sistemática de 2014 con 14 estudios sobre escritorios para trabajar sentado o de pie encontró evidencia suficiente de que reducen las molestias de espalda baja, sin bajar la productividad. La revisión no encontró una proporción ideal entre tiempo sentado y de pie, y los autores señalaron que la mejor proporción probablemente cambia según la persona y el trabajo. Lo que respalda la evidencia es alternar, no una regla fija.',
      ],
      sourceNote:
        'Buckley y colegas (2015): consenso de un panel internacional de expertos, encargado por Public Health England. Coenen y colegas (2017): revisión sistemática de 25 estudios de laboratorio, 591 participantes, análisis conjunto de dosis-respuesta. Karakolis y Callaghan (2014): revisión sistemática de 14 estudios sobre escritorios para trabajar sentado o de pie.',
      cites: [CITE.buckley, CITE.coenen, CITE.karakolis],
    },
    {
      h2: '¿Los tapetes antifatiga ayudan con el dolor de pies en un escritorio de pie?',
      paragraphs: [
        'Los tapetes antifatiga tienen algo de evidencia a favor. La revisión de salud laboral de 2015 pone los tapetes para el piso entre las medidas con evidencia para reducir las molestias al estar de pie mucho tiempo. Un estudio cruzado con 38 integrantes de equipos quirúrgicos encontró que estar de pie sobre un tapete antifatiga de hule de 15\u00A0mm durante los procedimientos dio puntajes de dolor y cansancio bastante más bajos que estar de pie sobre el piso normal.',
        'El mecanismo es sencillo: una superficie más suave deja que los pies hagan pequeños ajustes y reparte parte de la carga que un piso duro concentra en el talón y la parte delantera del pie. Una revisión sistemática de 2018 sobre materiales acolchados para estar de pie mucho tiempo notó resultados consistentes de menos molestias, aunque los estudios eran pequeños y el beneficio fue en comodidad, no en prevenir un problema específico.',
        'Un tapete no va a resolver el dolor de pies por sí solo, pero es de lo más sencillo que puedes probar. Si ya tienes un escritorio de pie y te duelen los pies, un tapete junto con ratos de pie más cortos y los ejercicios de esta página cubre lo principal.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: '¿Qué zapatos usar en un escritorio de pie?',
      paragraphs: [
        'Si trabajas desde casa, quizá estés de pie frente al escritorio en calcetines o pantuflas. Son muchas horas sin amortiguación ni soporte para el arco. La guía clínica de 2023 para el dolor de talón les da a las plantillas ortopédicas por sí solas una B en contra para la fascitis plantar, es decir, la evidencia se inclina a no usarlas como única opción, pero eso se refiere a las plantillas solas, no a si cualquier zapato es mejor que nada.',
        'Algo razonable: usa un zapato con algo de amortiguación y una plantilla con soporte mientras estás de pie, incluso en casa. No necesitas un zapato especial para escritorio de pie. Si alternas entre estar de pie y sentado, puedes quitarte los zapatos mientras estás sentado. Los ejercicios de esta página trabajan los tejidos directamente. Los zapatos y los tapetes ayudan con la comodidad mientras estás de pie, pero no reemplazan los estiramientos ni el trabajo de fuerza.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué ejercicios puedes hacer en tu escritorio para el dolor de pies?',
      keyFact: 'La guía clínica de 2023 para el dolor de talón le da al estiramiento de pantorrilla y de fascia plantar su grado más alto, A, y al entrenamiento de fuerza una B (Koc y colegas, 2023).',
      paragraphs: [
        'Estos ejercicios trabajan la pantorrilla, la fascia plantar y los músculos pequeños del pie. Algunos se pueden hacer en tu escritorio durante una pausa sentado. Otros conviene hacerlos lejos del escritorio, en otro momento. Si algún ejercicio sube tu dolor a 6 de 10 o más, detente por hoy.',
        'La guía clínica de 2023 para el dolor de talón le da al estiramiento de pantorrilla y de fascia plantar su grado más alto, A, y al entrenamiento de fuerza una B. Las dos notas son para la fascitis plantar, pero los mismos tejidos cargan el peso cuando trabajas en un escritorio de pie. Para la lista completa de ejercicios para la fascitis plantar, mira [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla una A. Una pantorrilla tensa fue el mayor factor de riesgo de fascitis plantar en un estudio de casos y controles de 2003.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Da un paso atrás de tu escritorio, pon las manos en el borde del escritorio o en una pared, y mantén la pierna de atrás estirada con el talón abajo. Esto trabaja el gastrocnemio, el músculo más grande y externo de la pantorrilla. Lo puedes hacer al pasar de estar de pie a sentarte.',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, manos en el escritorio o la pared',
          alt: 'Una figura apoyada en un escritorio con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: {
            level: 'moderate',
            why: 'El mismo respaldo de la guía. Trabaja el sóleo, el músculo más profundo de la pantorrilla, que solo se suelta con la rodilla doblada.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Misma posición, pero dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás para sentirlo cerca del talón',
          alt: 'Una figura estirando contra un escritorio con la rodilla de atrás doblada, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: {
            level: 'early',
            why: 'Las elevaciones de talón sentado cargan el sóleo con menos exigencia total que las versiones de pie. No se han probado específicamente para el dolor por escritorio de pie.',
          },
          dose: '3\u00A0series de 15, los dos pies',
          how: 'Siéntate en tu escritorio con los pies apoyados en el piso. Sube los dos talones lo más alto que puedas, mantén un segundo y baja despacio. Esto trabaja el sóleo, el músculo más profundo de la pantorrilla, y lo puedes hacer en cualquier pausa sentado sin levantarte de la silla.',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: sube los dos talones, mantén y baja despacio',
          alt: 'Una figura sentada sube los dos talones del piso, con las pantorrillas resaltadas',
        },
        {
          name: 'Separación de dedos',
          evidence: {
            level: 'early',
            why: 'Trabaja los músculos propios del pie. No es parte de los programas probados en esta página.',
          },
          dose: '3\u00A0series de 10, mantén 5\u00A0segundos',
          how: 'Siéntate en tu escritorio y separa los cinco dedos todo lo que puedas, y mantén. Esto activa los músculos pequeños entre los dedos que quedan apretados dentro de los zapatos al estar de pie. Puedes hacerlo sin zapatos durante una pausa sentado.',
          media: 'toe_spread',
          caption: 'Separación de dedos: separa los cinco dedos y mantén',
          alt: 'Un pie visto desde arriba con los dedos bien separados',
        },
        {
          name: 'Pie corto, sentado',
          evidence: {
            level: 'early',
            why: 'Una revisión de 2024 encontró que el entrenamiento de pie corto cambió la forma del arco, pero no el dolor. Walkito lo incluye como parte de un programa más amplio.',
          },
          dose: '3\u00A0series de 10, mantén 5\u00A0segundos, cada pie',
          how: 'Siéntate con el pie apoyado en el piso. Lleva la parte delantera del pie hacia el talón para que el arco suba, sin encoger los dedos. Esto entrena los músculos pequeños dentro del arco que lo sostienen mientras estás de pie.',
          media: 'short_foot_seated',
          caption: 'Pie corto: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una pierna sentada con el pie apoyado en el piso, con el arco resaltado mientras sube',
        },
        {
          name: 'Elevaciones de talón con dos pies (de pie)',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al entrenamiento de fuerza una B para la fascitis plantar. Construye la fuerza de pantorrilla que absorbe la carga de estar de pie.',
          },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate frente a tu escritorio, sube recto sobre los dedos gordos en unos tres segundos y baja despacio. Apóyate en el borde del escritorio para el equilibrio. Cómo avanzar paso a paso, con la variante con toalla, está en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón de pie: sube sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube sobre las puntas de los dos pies, con las pantorrillas resaltadas',
        },
      ],
      table: {
        caption: 'Dosis de inicio para el dolor de pies por escritorio de pie',
        head: ['Ejercicio', 'Dosis', 'Dónde', 'Qué debes sentir'],
        rows: [
          ['Estiramiento de pantorrilla (rodilla estirada)', '2 x 30\u00A0segundos, cada pierna', 'En el escritorio o la pared', 'Un estiramiento en la parte alta de la pantorrilla'],
          ['Estiramiento de sóleo (rodilla doblada)', '2 x 30\u00A0segundos, cada pierna', 'En el escritorio o la pared', 'Un estiramiento bajo en la pantorrilla, cerca del talón'],
          ['Elevaciones de talón sentado', '3 x 15, los dos pies', 'En el escritorio, sentado', 'Las pantorrillas trabajando suave'],
          ['Separación de dedos', '3 x 10 (mantén 5\u00A0segundos)', 'En el escritorio, sentado, sin zapatos', 'Los dedos separándose, sin dolor'],
          ['Pie corto', '3 x 10 (mantén 5\u00A0segundos), cada pie', 'En el escritorio, sentado', 'El arco subiendo, con los dedos relajados'],
          ['Elevaciones de talón de pie', '3 x 10, los dos pies', 'En el escritorio, de pie', 'Las pantorrillas trabajando, sin dolor agudo'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Conviene cambiar el peso de pie, usar un reposapiés o moverte más?',
      paragraphs: [
        'Las tres cosas ayudan, y las tres son variantes de la misma idea: romper la postura fija de pie. La declaración de expertos de 2015 insiste en que el trabajo sentado debe cortarse seguido con ratos de pie, y que el tiempo de pie debe incluir actividad ligera. Incluso pasar el peso de un pie al otro cambia qué músculos cargan y ayuda a que circule la sangre en la parte baja de las piernas.',
        'Un reposapiés pequeño o una barra baja bajo el escritorio te deja subir un pie y repartir la carga entre los dos lados. Es una estrategia vieja de las fábricas, y es una de las medidas que menciona la revisión de salud laboral. No necesitas un producto especial. Una caja firme o una repisa baja sirven.',
        'Las pausas cortas para moverte durante el tiempo sentado importan igual. Levántate, camina a la cocina y regresa, o haz una serie de elevaciones de talón sentado o de separación de dedos de la tabla de arriba. La idea no es entrenar. Es evitar la postura fija que causa el problema.',
      ],
      cites: [CITE.buckley, CITE.waters],
    },
    {
      h2: '¿Cómo pasarte a un escritorio de pie sin que te duelan los pies?',
      paragraphs: [
        'Empieza con menos tiempo de pie del que crees que necesitas. La declaración de expertos de 2015 recomienda ir sumando hasta 2\u00A0horas al día de estar de pie y actividad ligera, no empezar ahí. Si nunca has trabajado de pie, empieza con 15 a 20\u00A0minutos de pie por hora y sube poco a poco durante unas semanas.',
        'Una primera semana práctica: 15\u00A0minutos de pie, 45 sentado, y repetir durante el día. La segunda semana, pasa a 20\u00A0minutos de pie y 40 sentado. Para la tercera o cuarta semana, prueba 30 y 30. Escucha a tus pies y a tu espalda baja. Si la molestia va creciendo, siéntate antes en lugar de aguantar.',
        'Pon un tapete desde el principio si tienes uno. Usa zapatos con algo de amortiguación, incluso en casa. Haz los estiramientos de pantorrilla de la tabla de arriba al menos una vez al día. Si ya te duelen los pies por estar de pie y quieres la guía más amplia, [por qué me duelen los pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) explica en qué se cruzan el dolor por escritorio de pie y problemas como la fascitis plantar. Para la versión para enfermeras, mira [dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/).',
      ],
      cites: [CITE.buckley],
    },
    {
      h2: '¿El dolor de pies por escritorio de pie puede ser fascitis plantar u otra cosa?',
      paragraphs: [
        'El dolor de pies por escritorio de pie suele ser una molestia general por estar de pie quieto mucho tiempo. Pero si el dolor es agudo, se concentra cerca del talón y es peor en los primeros pasos después de estar sentado un rato, ese patrón apunta a fascitis plantar. Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles, así que el escritorio de pie puede estar contribuyendo.',
        'Los ejercicios que ayudan en los dos casos se parecen mucho. Si tu dolor sigue el patrón de la fascitis plantar, la guía más completa es [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Si sientes los arcos planos, mira [ejercicios para pie plano y arcos caídos](/es/ejercicios-pie-plano/). Si no sabes qué es, consulta a un profesional de la salud antes de cargar el pie con ejercicio.',
      ],
      cites: [CITE.riddle],
    },
  ],
  faq: [
    {
      q: '¿Cuánto tiempo debo estar de pie en un escritorio de pie?',
      a: 'Una declaración de expertos de 2015 recomienda ir sumando hasta 2\u00A0horas de estar de pie y actividad ligera por jornada laboral, y con el tiempo llegar a 4\u00A0horas, repartidas en ratos más cortos. Una revisión sistemática de 2017 encontró que los síntomas musculares se volvían clínicamente relevantes después de unos 40\u00A0minutos de pie sin pausa. Un punto de partida práctico es estar de pie de 20 a 30\u00A0minutos y luego sentarte de 20 a 30\u00A0minutos.',
      cites: [CITE.buckley, CITE.coenen],
    },
    {
      q: '¿Los tapetes antifatiga de verdad sirven para un escritorio de pie?',
      a: 'Una revisión de salud laboral de 2015 pone los tapetes para el piso entre las medidas con evidencia para reducir las molestias al estar de pie mucho tiempo. Un estudio cruzado con integrantes de equipos quirúrgicos encontró puntajes de dolor y cansancio más bajos con un tapete de hule de 15\u00A0mm que con el piso normal. El beneficio es en comodidad y cansancio, no en prevenir un problema específico. Un tapete junto con ratos de pie más cortos y estiramientos de pantorrilla cubre más que un tapete solo.',
      cites: [CITE.waters],
    },
    {
      q: '¿Un escritorio de pie puede causar fascitis plantar?',
      a: 'Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles con 50 casos y 100 controles. Un escritorio de pie suma horas de pie a tu día, así que puede contribuir si tu pantorrilla ya está tensa, que fue el factor de riesgo independiente más fuerte, con 23,3 veces las probabilidades. Los estiramientos de pantorrilla son la forma más directa de trabajar los dos factores de riesgo.',
      cites: [CITE.riddle],
    },
    {
      q: '¿Es mejor estar sentado o de pie todo el día?',
      a: 'Ninguna de las dos. La revisión de Karakolis y Callaghan de 2014 encontró evidencia suficiente de que los escritorios para trabajar sentado o de pie reducen las molestias de espalda baja, sin bajar la productividad, pero no encontró una proporción ideal entre tiempo sentado y de pie. La revisión de Coenen de 2017 encontró que estar de pie sin pausa causa síntomas después de unos 40\u00A0minutos. Lo que respalda la evidencia es alternar entre estar sentado y de pie, no elegir una sola.',
      cites: [CITE.karakolis, CITE.coenen],
    },
    {
      q: '¿Qué ejercicios puedo hacer en un escritorio de pie?',
      a: 'De pie: estiramientos de pantorrilla apoyado en el borde del escritorio (2\u00A0series de 30\u00A0segundos de cada lado) y elevaciones de talón de pie (3\u00A0series de 10). En las pausas sentado: elevaciones de talón sentado (3\u00A0series de 15), separación de dedos y el ejercicio de pie corto. Trabajan la pantorrilla, la fascia plantar y los músculos propios del pie que cargan el peso al estar de pie. Si algún ejercicio sube tu dolor a 6 de 10 o más, detente por hoy.',
      cites: [CITE.guideline],
    },
    {
      q: '¿Por qué me duelen más los pies quieto de pie que caminando?',
      a: 'Al caminar se activa el bombeo de la pantorrilla, que sube la sangre de la parte baja de las piernas en cada paso. Estar quieto de pie quita ese bombeo, así que la sangre se acumula en los pies y la parte baja de las piernas, y los músculos se quedan en la misma posición fija en lugar de contraerse y relajarse. Una revisión sistemática de 2017 confirmó este mecanismo y encontró que los síntomas en las piernas aparecen de forma constante al estar de pie quieto en estudios de laboratorio.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída',
      'no puedes apoyar el pie, o cojeas',
      'el pie está entumido, con hormigueo, ardor, hinchado o caliente',
      'el talón o el pie está rojo, o tienes fiebre o te sientes mal',
      'el dolor te despierta por la noche',
      'es un dolor agudo, o empeora aunque estés más tiempo sentado',
      'el dolor está en un solo punto y empeora con la actividad, lo que puede ser señal de una fractura por estrés y no de molestias por estar de pie',
      'una pierna o un pie se hinchó de repente y está adolorido, rojo o caliente',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
      'el dolor no ha bajado después de varias semanas con ratos de pie más cortos, un tapete y los ejercicios de esta página',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text:
      'No tienes que decidir el orden, las dosis ni cuándo avanzar. Walkito arma un plan una semana a la vez en torno a una meta. Si tu dolor por escritorio de pie sigue el patrón de dolor por la mañana de la fascitis plantar, la primera meta es dolor de 1 de 10 o menos por la mañana durante 14\u00A0días seguidos.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas tu primera meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver si el trabajo está sirviendo de algo.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si el dolor es agudo, empeora o no te deja dormir, consulta primero a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor de pies por escritorio de pie',
  campaign: 'guide-standing-desk-es',
};
