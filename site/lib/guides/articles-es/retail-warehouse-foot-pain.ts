import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/retail-warehouse-foot-pain.ts` (2026-10-18),
 * written around the queries «dolor de pies en el trabajo de almacén»,
 * «me duelen los pies por trabajar de pie en tienda» and «dolor de pies por
 * piso de concreto». Figures, doses, grades, hedges and CITE keys are
 * identical to the English page. The English link to
 * best-insoles-for-plantar-fasciitis has no Spanish version, so the link was
 * removed and the words kept.
 */

export const RETAIL_WAREHOUSE_ES: Guide = {
  lang: 'es',
  page: 'retailWarehouse',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolor de pies en almacén: concreto, botas y ejercicios',
  description:
    'Dolor de pies en almacenes y tiendas: qué dicen los estudios sobre pisos de concreto, botas de seguridad, tapetes y plantillas, y ejercicios de 3\u00A0minutos.',
  h1: 'Dolor de pies en tiendas y almacenes: qué ayuda en pisos duros',
  lede:
    'En almacenes y tiendas los pies duelen porque horas de estar de pie y caminar sobre pisos duros cargan el talón, el arco y la pantorrilla sin casi nada que amortigüe debajo. Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de [fascitis plantar](/es/fascitis-plantar/) en un estudio (Riddle y colegas, 2003). Los estiramientos de pantorrilla y de fascia plantar tienen el grado más alto, **A**, en la guía de 2023 para el dolor de talón, y una versión corta cabe en unos 3\u00A0minutos de descanso. Los tapetes y las plantillas acolchadas mejoran la comodidad, pero la evidencia sobre ellos es más débil (Speed y colegas, 2018).',
  intro: [
    'Esta página trata del trabajo en sí: pisos de concreto y de loseta, botas de seguridad, turnos largos y descansos cortos. Para el dolor por estar de pie en general, consulta [por qué me duelen los pies después de estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/). Si trabajas en un hospital, [dolor de pies en enfermeras](/es/dolor-de-pies-por-estar-de-pie/) habla de los turnos de 12\u00A0horas y los horarios rotativos.',
  ],
  toc: true,
  takeaways: [
    'Pasar la mayor parte de la jornada de pie multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles con 50 casos y 100 controles. Una flexibilidad del tobillo muy limitada, casi siempre por una pantorrilla tensa, las multiplicó por 23,3 (Riddle y colegas, 2003).',
    'La guía de 2023 para el dolor de talón mantiene una recomendación de grado **B**: el profesional de la salud debe evaluar la carga de peso relacionada con el trabajo, sobre todo en superficies que amortiguan poco, como factor de riesgo de dolor de talón (Koc y colegas, 2023).',
    'Una revisión de 10 estudios encontró evidencia moderada de que los tapetes y las plantillas acolchadas reducen la molestia y el cansancio en personas que trabajan de pie, y solo evidencia limitada de que las plantillas sean mejores que los tapetes (Speed y colegas, 2018).',
    'En una revisión de 7 estudios con trabajadores que usan calzado de seguridad, los 4 que midieron el dolor encontraron dolor de pies en entre el 42,3\u00A0% y el 60,8\u00A0% de los trabajadores, y las quejas principales fueron el calor, el sudor, el peso y la rigidez (Arceri y colegas, 2024).',
    'Los estiramientos de pantorrilla y de fascia plantar reciben el grado más alto de la guía, **A**, y el trabajo de fuerza una **B**. Las plantillas por sí solas reciben una **B en contra** para el dolor de talón (Koc y colegas, 2023).',
  ],
  sections: [
    {
      h2: '¿Por qué te duelen los pies después de un turno en almacén o tienda?',
      keyFact: 'Pasar la mayor parte de la jornada cargando peso sobre los pies multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles pareados (Riddle y colegas, 2003).',
      paragraphs: [
        'El trabajo en tiendas y almacenes combina dos tipos de carga. En la caja o en una estación de empaque pasas largos ratos de pie sin moverte. En el piso de venta o surtiendo pedidos caminas, cargas, empujas carritos y giras. En los dos casos el peso queda sobre el talón y el arco casi todo el turno, y los descansos los marca el rol de turnos, no el momento en que tus pies los necesitan.',
        'Un estudio de casos y controles de 2003 con 50 personas con fascitis plantar y 100 controles pareados encontró que pasar la mayor parte de la jornada cargando peso sobre los pies multiplicó por 3,6 las probabilidades de fascitis plantar. La poca flexibilidad del tobillo, es decir, una [pantorrilla tensa](/es/pantorrillas-tensas/), fue el factor más fuerte, con probabilidades 23,3 veces mayores. **Una pantorrilla tensa es algo en lo que puedes trabajar. El trabajo, por lo general, no.**',
        'Una revisión sistemática de 16 estudios sobre el dolor crónico de talón encontró cierta evidencia de relación con estar mucho tiempo de pie, junto con un peso corporal más alto, la edad y la poca flexibilidad del tobillo. Los autores pidieron estudios que sigan a las personas a lo largo del tiempo, así que esto muestra una asociación, no la prueba de que estar de pie cause dolor de talón (Irving y colegas, 2006).',
        '¿Cuánto caminas? No encontramos ningún estudio publicado que cuente los pasos por turno en almacenes o tiendas. Cifras como «12\u00A0millas (unos 19\u00A0km) por turno» aparecen en blogs del sector sin un estudio que las respalde. El dato medido más cercano viene de enfermeras: un promedio de 9360 pasos por turno en un estudio con monitor de actividad (Chang y Cho, 2022).',
      ],
      cites: [CITE.riddle, CITE.irvingHeelPain, CITE.changCho],
    },
    {
      h2: '¿De verdad el concreto es peor para los pies?',
      keyFact: 'La guía de 2023 para el dolor de talón señala la carga de peso relacionada con el trabajo, sobre todo en condiciones de poca amortiguación, como factor de riesgo (grado B, Koc y colegas, 2023).',
      paragraphs: [
        'Probablemente, pero nadie ha medido el concreto por sí solo. La guía de 2023 para el dolor de talón mantiene una recomendación de 2014, de grado **B**: el profesional de la salud debe evaluar las actividades de carga de peso relacionadas con el trabajo, sobre todo en condiciones de poca amortiguación, como factor de riesgo de dolor de talón y fascitis plantar. Un piso de concreto sin nada encima es de las superficies de trabajo que menos amortiguan.',
        'Lo que sí se ha probado es lo contrario: agregar algo blando. En estudios de laboratorio y en lugares de trabajo, estar de pie sobre un tapete o usar plantillas acolchadas redujo la molestia en comparación con un piso duro (Speed y colegas, 2018). Eso encaja con la idea de que la superficie dura suma carga, sin probar que el concreto cause una afección en particular.',
        'Algunos dolores de talón empeoran en pisos duros por otra razón. Si el dolor está en lo profundo del centro del talón y es claramente peor descalzo sobre loseta o concreto, vale la pena leer sobre el [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning],
    },
    {
      h2: '¿Qué ayuda más: los tapetes antifatiga o las plantillas?',
      keyFact: 'Una revisión de 10 estudios encontró evidencia moderada de que la amortiguación reduce la molestia en personas que trabajan de pie, y evidencia limitada de que las plantillas sean mejores que los tapetes (Speed y colegas, 2018).',
      paragraphs: [
        '**Los dos mejoran la comodidad, ninguno gana con claridad y ninguno tiene evidencia fuerte.** Una revisión sistemática de 2018 encontró 10 estudios sobre tapetes y plantillas acolchadas en personas que trabajan de pie. Calificó como moderada la evidencia de que la amortiguación reduce la molestia y el cansancio, y como limitada la de que las plantillas funcionen mejor que los tapetes. Los estudios tenían diseños muy distintos, y los autores pidieron ensayos más grandes en lugares de trabajo reales.',
        'En un estudio en un lugar de trabajo, trabajadores de una línea de ensamblaje pasaron una semana de jornadas de 8\u00A0horas en cada una de cuatro condiciones: piso duro, un tapete, plantillas, y plantillas sobre un tapete. El tapete, las plantillas y la combinación fueron más cómodos que el piso duro, y no hubo una diferencia clara entre ellos (King, 2002).',
        'En una prueba de laboratorio de 4\u00A0horas, tres de cuatro tapetes antifatiga comerciales redujeron la molestia en comparación con un piso duro, pero ningún tapete superó a los demás (Wiggermann y Keyserling, 2013). Así que no se ha demostrado que un tapete sea mejor que los otros.',
        'La división práctica: **un tapete solo ayuda donde te quedas quieto**, como una caja, una mesa de empaque o una estación de trabajo. Si caminas por el piso de venta o surtes pedidos, la amortiguación tiene que ir contigo, en el zapato. Para el dolor de talón en particular, la guía de 2023 califica las plantillas por sí solas con una **B en contra**, así que no te apoyes solo en ellas. [Plantillas o ejercicios](/es/plantillas-o-ejercicios/) compara las dos opciones y los tipos de plantillas para la fascitis plantar.',
      ],
      cites: [CITE.speedCushioning, CITE.kingMats, CITE.wiggermannMats, CITE.guideline],
    },
    {
      h2: '¿Las botas de seguridad causan dolor de pies?',
      keyFact: 'En una revisión de 7 estudios con trabajadores que usan calzado de seguridad, los 4 que midieron el dolor encontraron dolor de pies en entre el 42,3\u00A0% y el 60,8\u00A0% de los trabajadores (Arceri y colegas, 2024).',
      paragraphs: [
        'Las botas de seguridad protegen tus pies, y también traen quejas. Una revisión sistemática de 2024 encontró 7 estudios con trabajadores que usan calzado de seguridad. Todos reportaron molestia y dolor, y los 4 estudios que midieron el dolor encontraron dolor de pies en entre el 42,3\u00A0% y el 60,8\u00A0% de los trabajadores. Las quejas principales fueron el calor, el sudor, el peso y una suela rígida, sobre todo alrededor de los dedos y la puntera.',
        'En un estudio con 509 trabajadores de 12 fábricas metalúrgicas, todos con calzado de seguridad a diario, el 81\u00A0% tenía al menos un problema en los pies. Sus quejas más comunes sobre el calzado fueron el calor y la humedad dentro (42\u00A0%), el peso (27,5\u00A0%) y el ajuste (22,9\u00A0%) (Mancuso y colegas, 2017).',
        'Son encuestas, así que no pueden decir que las botas causen el dolor: muchas horas en pisos duros dolerían con cualquier zapato. Las sugerencias de la revisión son prácticas:',
        {
          list: [
            'Consigue la talla y el ancho correctos, y pregunta si los modelos aprobados por tu empresa vienen en horma ancha.',
            'Elige la bota más ligera que cumpla con la clasificación de seguridad de tu lugar de trabajo.',
            'Busca materiales transpirables si tus pies se calientan y sudan.',
            'La mayoría de las botas de seguridad tienen una plantilla removible, así que puedes poner una plantilla acolchada si no deja la bota demasiado apretada.',
          ],
        },
        'Nunca cambies una bota de seguridad obligatoria por unos tenis porque te duelen los pies. Habla con tu supervisor o con el responsable de seguridad sobre otros modelos aprobados.',
      ],
      cites: [CITE.arceriSafety, CITE.mancusoSafety],
    },
    {
      h2: '¿Qué ejercicios puedes hacer en tu descanso?',
      keyFact: 'La guía de 2023 para el dolor de talón les da a los estiramientos de pantorrilla y de fascia plantar un grado A, su grado más alto, y al entrenamiento de fuerza un grado B (Koc y colegas, 2023).',
      paragraphs: [
        'Los ejercicios de abajo no necesitan equipo ni más espacio que una pared, un rack o la orilla de un mostrador. Los tres primeros se hacen de pie en la sala de descanso o en un pasillo de bodega. Los demás son para después del turno, sentado.',
        'La guía califica los estiramientos de pantorrilla y de fascia plantar con **A** y el trabajo de fuerza con **B**. Esos grados son para la fascitis plantar, pero son los mismos tejidos que carga un turno en pisos duros. Detente por hoy si algún ejercicio sube tu dolor a 6 de 10 o más.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto. Una pantorrilla tensa fue el factor de riesgo más fuerte en un estudio de casos y controles de 2003.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'En un descanso o después del turno',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared, en un poste de rack o en un mostrador. Mantén la pierna de atrás estirada, el talón de atrás pegado al piso y la cadera hacia adelante. También funciona con botas de seguridad.',
          stop: 'Dolor agudo en el talón o en la pantorrilla',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'En un descanso o después del turno',
          feel: 'Un estiramiento cerca del talón',
          how: 'Toma la misma posición, mantén el talón de atrás pegado al piso y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor agudo en el talón o en la pantorrilla',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás abajo, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Movilidad de tobillo',
          evidence: { level: 'early', why: 'Trabaja la flexibilidad del tobillo, el factor de riesgo más fuerte en un estudio de casos y controles de 2003. No se ha probado por sí sola en un ensayo sobre dolor de talón.' },
          dose: '2\u00A0series de 15, cada pierna',
          often: 'En un descanso',
          feel: 'Un estiramiento en la parte delantera del tobillo y un jalón en la parte baja de la pantorrilla',
          how: 'Un pie adelante y otro atrás, manos en una pared. Lleva la rodilla de adelante hacia adelante, por encima de los dedos, mientras el talón se queda pegado al piso. Despacio, unos dos segundos en cada dirección. Más en [movilidad de tobillo](/es/ejercicios/movilidad-de-tobillo/).',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: movilidad de tobillo',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla avanza por encima de los dedos, el talón se queda abajo',
          alt: 'Una figura con un pie adelante y otro atrás lleva la rodilla de adelante por encima de los dedos, con el tobillo resaltado',
        },
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pie',
          often: 'Después del turno, y antes de tus primeros pasos por la mañana',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate, quítate las botas y cruza el pie sobre la rodilla contraria. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Si tus primeros pasos al levantarte duelen, haz uno en la orilla de la cama antes de que el pie toque el piso.',
          stop: 'Dolor agudo en el talón',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por sí solo.' },
          dose: '3\u00A0series de 10, con los dos pies',
          often: 'Días de descanso, o después de un turno más ligero',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies, sujétate de una pared, sube en línea recta sobre los dedos gordos y baja despacio. El trabajo de fuerza encaja mejor en los días de descanso, para que la pantorrilla tenga tiempo de recuperarse antes del siguiente turno. Más en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
          stop: 'Dolor de talón que pasa de 6 de 10, o que está peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube en línea recta sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie se eleva sobre las puntas de los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Automasaje plantar',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Está aquí por comodidad después del turno.' },
          dose: '1\u00A0minuto',
          often: 'Después del turno',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda despacio la planta del pie sobre una pelota de masaje, con presión firme. Si estás haciendo muecas de dolor, afloja.',
          stop: 'Dolor que sigue después de parar',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Cómo lo acomodas en un turno: 3, 5 o 10\u00A0minutos?',
      paragraphs: [
        'La mayoría de los descansos en tiendas y almacenes son cortos y los marca el rol de turnos. Una revisión de estudios de laboratorio encontró que los síntomas por estar de pie sin interrupción se volvían clínicamente relevantes después de unos 42\u00A0minutos en personas propensas al dolor por estar de pie, y sus autores sugirieron no estar de pie quieto más de unos 40\u00A0minutos (Coenen y colegas, 2017). Muchas veces no puedes elegir cuándo sentarte, pero sí puedes cambiar de posición: camina hasta el final del pasillo, pasa el peso de un pie al otro o haz un estiramiento de pantorrilla en un rack.',
        {
          list: [
            '**3\u00A0minutos, en un descanso:** el estiramiento de pantorrilla, 2\u00A0estiramientos de 30\u00A0segundos con cada pierna, más un estiramiento de sóleo de 30\u00A0segundos con cada pierna. Eso trabaja la pantorrilla tensa, el factor de riesgo más fuerte en el estudio de 2003.',
            '**5\u00A0minutos, en un descanso más largo o al final del turno:** agrega la movilidad de tobillo, o el estiramiento plantar cuando ya te quitaste las botas.',
            '**10\u00A0minutos, en un día de descanso:** agrega las elevaciones de talón (3\u00A0series de 10) y el automasaje plantar. Eso cubre la parte de fuerza, con grado **B**.',
          ],
        },
        '**Hacer una rutina corta en la mayoría de los turnos importa más que una larga que te saltas.** Átala a algo que ya haces, como el primer descanso o el momento de quitarte las botas.',
      ],
      cites: [CITE.coenen, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'Qué dice la evidencia sobre cada opción',
      paragraphs: [
        'La mayoría de los consejos para el trabajo mezclan evidencia fuerte y débil. Esta tabla pone las opciones principales lado a lado, con el mejor estudio que encontramos para cada una.',
      ],
      table: {
        caption: 'Opciones para el dolor de pies en trabajos de pie y caminando',
        head: ['Opción', 'Mejor evidencia', 'Resultado', 'Solidez'],
        rows: [
          ['Estiramientos de pantorrilla y fascia', 'Guía de 2023', 'Grado A para el dolor de talón', 'Fuerte'],
          ['Fuerza de pantorrilla', 'Guía de 2023', 'Grado B para el dolor de talón', 'Moderada'],
          ['Tapete antifatiga', 'Revisión de 10 estudios', 'Menos molestia', 'Moderada, solo comodidad'],
          ['Plantillas acolchadas', 'La misma revisión', 'Menos molestia, parecido a un tapete', 'Moderada, solo comodidad'],
          ['Solo plantillas para el dolor de talón', 'Guía de 2023', 'B en contra', 'Más bien en contra'],
          ['Medias de compresión', 'Ensayo con 40 guardias', 'Sin aumento de la molestia', 'Un ensayo pequeño'],
          ['Botas de seguridad que ajusten mejor', 'Revisión de 7 estudios', 'Importan el ajuste, el peso y el calor', 'Solo encuestas'],
        ],
      },
      after: [
        'Las medias de compresión se tratan en detalle en [por qué me duelen los pies después de estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/). El ensayo se hizo con guardias de seguridad hombres en turnos largos de pie, no con trabajadores de almacén (Garcia y colegas, 2023).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning, CITE.garcia, CITE.arceriSafety],
    },
    {
      h2: '¿Podría ser fascitis plantar u otra cosa?',
      paragraphs: [
        'Un dolor general y los pies cansados después de un turno largo suelen calmarse con una noche de descanso. La fascitis plantar tiene un patrón más claro: dolor agudo cerca de la parte interna del talón, peor en los primeros pasos de la mañana o después de estar sentado. Si eso te suena, consulta [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) y [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Cerca del 90\u00A0% de las personas con fascitis plantar mejoran con tratamiento sin cirugía, aunque puede tardar de tres a seis meses (Latt y colegas, 2020).',
        'Otros patrones apuntan a otra parte. Un dolor ardiente bajo la planta, en la parte delantera del pie, apunta a [metatarsalgia](/es/metatarsalgia-dolor-planta-del-pie/). Un dolor a lo largo del arco que empeora durante el turno se trata en [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/). El dolor en la parte de arriba del pie puede venir de botas que aprietan demasiado o con las agujetas muy apretadas; consulta [dolor en el empeine](/es/dolor-en-el-empeine/).',
        'Un dolor en un punto pequeño de un hueso que empeora cuanto más caminas puede ser una fractura por estrés, sobre todo después de un aumento de horas o de un trabajo nuevo con más caminata. **Eso necesita un profesional de la salud, no más ejercicio.**',
      ],
      cites: [CITE.latt, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: '¿Por qué me duelen tanto los pies trabajando en un almacén?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'Muchas horas de estar de pie y caminar sobre pisos duros mantienen la carga en el talón, el arco y la pantorrilla casi todo el turno. Pasar la mayor parte de la jornada de pie multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio, y la guía de 2023 para el dolor de talón incluye la carga de peso relacionada con el trabajo en superficies que amortiguan poco como factor de riesgo.',
    },
    {
      q: '¿Cuántos pasos camina un trabajador de almacén en un turno?',
      cites: [CITE.changCho],
      a: 'No encontramos ningún estudio publicado que cuente los pasos en turnos de almacén o de tienda. Cifras como 12\u00A0millas (unos 19\u00A0km) por turno vienen de blogs del sector sin un estudio que las respalde. El dato medido más cercano viene de enfermeras de hospital, que promediaron 9360 pasos por turno en un estudio con monitor de actividad. Tu propio teléfono o reloj es la mejor guía para tu trabajo.',
    },
    {
      q: '¿Los tapetes antifatiga de verdad funcionan?',
      cites: [CITE.speedCushioning, CITE.wiggermannMats],
      a: 'Reducen la molestia en personas que se quedan de pie en un mismo lugar, pero la evidencia es moderada, no fuerte. Una revisión de 10 estudios encontró que la amortiguación ayuda a quienes trabajan de pie. En una prueba de laboratorio de 4\u00A0horas, tres de cuatro tapetes superaron a un piso duro, y ningún tapete superó a los demás. Un tapete solo ayuda donde te quedas quieto.',
    },
    {
      q: '¿Qué es mejor para estar de pie en concreto: plantillas o un tapete?',
      cites: [CITE.kingMats, CITE.speedCushioning],
      a: 'Para la comodidad, más o menos lo mismo. En un estudio en un lugar de trabajo, trabajadores de ensamblaje encontraron que un tapete, las plantillas y los dos juntos eran más cómodos que un piso duro, sin una diferencia clara entre ellos. Una revisión calificó como limitada la evidencia de que las plantillas superen a los tapetes. Si te mueves mucho, las plantillas van contigo y un tapete no.',
    },
    {
      q: '¿Las botas de seguridad pueden causar fascitis plantar?',
      cites: [CITE.arceriSafety, CITE.guideline],
      a: 'Ningún estudio muestra que las botas de seguridad causen fascitis plantar. Una revisión de 7 estudios con trabajadores que usan calzado de seguridad encontró dolor de pies en entre el 42,3\u00A0% y el 60,8\u00A0% de los trabajadores en los 4 que lo midieron, y las quejas principales fueron el calor, el peso y la rigidez. Las horas en pisos duros también cuentan, sea cual sea la bota. Un buen ajuste y la bota aprobada más ligera son primeros pasos razonables.',
    },
    {
      q: '¿Qué estiramientos puedo hacer en el descanso del trabajo?',
      cites: [CITE.guideline],
      a: 'El estiramiento de pantorrilla y el de sóleo se hacen de pie contra una pared o un rack, con las botas de trabajo puestas: dos estiramientos de 30\u00A0segundos cada uno, con cada pierna, unos 4\u00A0minutos para los dos. La guía de 2023 para el dolor de talón califica el estiramiento de pantorrilla con A. Deja el estiramiento plantar y las elevaciones de talón para después del turno o los días de descanso.',
    },
    {
      q: '¿Es normal que me duelan los pies después de un turno en una tienda?',
      cites: [CITE.waters],
      a: 'Los pies cansados y adoloridos después de un turno largo de pie son comunes, y una revisión de 2015 relacionó estar de pie mucho tiempo en el trabajo con molestia, cansancio y dolor de piernas en muchos tipos de empleo. Que sea común no significa que debas ignorarlo. Vale la pena hacer algo si el dolor es agudo, sigue en tus días de descanso o es peor en los primeros pasos de la mañana.',
    },
    {
      q: '¿Puedo seguir trabajando de pie con fascitis plantar?',
      cites: [CITE.latt, CITE.guideline],
      a: 'Mucha gente lo hace, con cambios. Estiramientos cortos en los descansos, botas que ajusten mejor y amortiguación donde te quedas de pie alivian la carga, y cerca del 90\u00A0% de las personas con fascitis plantar mejoran con tratamiento sin cirugía, aunque puede tardar de tres a seis meses. Si el dolor empeora a pesar de esto, consulta a un profesional de la salud.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó con una caída, una carga que se te cayó encima o una torcedura en el trabajo',
      'no puedes apoyar el pie o estás cojeando',
      'el dolor está en un punto pequeño de un hueso y empeora al caminar, lo que puede ser una fractura por estrés',
      'el pie está entumido, con hormigueo o ardor, o se siente frío',
      'el pie o el talón está rojo, caliente o hinchado, o tienes fiebre',
      'una pantorrilla o una pierna de pronto duele y se hincha',
      'tienes diabetes o menos sensibilidad en los pies, y una bota te hizo una herida o una ampolla',
      'el dolor te despierta por la noche o sigue empeorando después de varias semanas con los cambios de esta página',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. [Walkito](/es/programa/) arma el plan con tus respuestas y lo ajusta según cómo se sientan tus pies ese día, así que una mañana mala después de un turno largo significa una sesión más ligera.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos, así que se acomoda a tus turnos y días de descanso. Walkito es un programa de ejercicios. No diagnostica y no sustituye a un profesional de la salud.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['standing', 'nurses', 'heelPainAfterWalking'],
  crumb: 'Dolor de pies en tiendas y almacenes',
  campaign: 'guide-retail-warehouse-foot-pain-es',
};
