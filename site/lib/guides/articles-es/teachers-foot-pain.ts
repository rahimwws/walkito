import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/teachers-foot-pain.ts` (2026-10-18), written
 * around the query «dolor de pies en maestros» (also «docentes»). Figures,
 * doses, grades, hedges and CITE keys are identical to the English page.
 * Numbers and units are joined with a non-breaking space, as in `es.ts`.
 * The English link to best-insoles-for-plantar-fasciitis has no Spanish
 * version, so the link was removed and the words kept.
 */

export const TEACHERS_ES: Guide = {
  lang: 'es',
  page: 'teachers',
  mainSource: CITE.tahernejadTeachers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolor de pies en maestros: ejercicios, zapatos y pisos',
  description:
    'Por qué a los maestros les duelen los pies, ejercicios de 3\u00A0minutos entre clases, qué ayuda en zapatos y pisos, y cuándo es fascitis plantar.',
  h1: 'Dolor de pies en maestros: qué le hace un día de clases a tus pies y qué ayuda',
  lede:
    'El dolor de pies en maestros y docentes viene sobre todo de pasar horas de pie y caminando por el salón sobre pisos duros, y las opciones con mejor evidencia, los estiramientos de pantorrilla y de fascia plantar junto con el trabajo de fuerza de pantorrilla, toman de 3 a 5\u00A0minutos y caben entre clases. La guía clínica de 2023 para el dolor de talón les da a esos estiramientos una **A**, su grado más alto, y al trabajo de fuerza una **B** (Koc y colegas, 2023). La investigación sobre los pies de los maestros es limitada: en una revisión de 2024, 27 estudios reportaron dolor en la zona del tobillo, casi siempre contado junto con el pie, y la cifra combinada fue del 30\u00A0% de los maestros (Tahernejad y colegas, 2024).',
  intro: [
    'Esta página trata el día de escuela: estar de pie frente al pizarrón, caminar entre los pupitres, las guardias en pasillos y en el patio, y lo que puedes hacer en el cambio de clase o después del último timbre. Si estás de pie todo el día en otro trabajo, [por qué me duelen los pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) es la guía general, y [dolor de pies en enfermeras](/es/dolor-de-pies-por-estar-de-pie/) trata los turnos largos de hospital. Si el talón te duele más en los primeros pasos de la mañana, ve a [fascitis plantar](/es/fascitis-plantar/).',
  ],
  toc: true,
  takeaways: [
    'En una revisión de 2024 con 44 estudios y 15\u00A0972 maestros, el dolor en la zona del tobillo (casi siempre contado junto con el pie) dio una cifra combinada del 30\u00A0% en 27 estudios, por debajo del cuello y la zona lumbar, con 47\u00A0% cada uno. Los resultados variaron mucho entre estudios (Tahernejad y colegas, 2024).',
    'En una encuesta a 1439 maestros de una sola región de Arabia Saudita, el 85,5\u00A0% reportó dolor de pies en los últimos 12\u00A0meses, y fue más común en quienes daban 16 o más clases a la semana (Alqahtani, 2020). Otras encuestas encontraron cifras mucho más bajas, así que tómalo como el resultado de una región.',
    'No encontramos ningún estudio que haya medido cuántas horas pasa de pie un maestro típico. En un estudio con 50 casos y 100 controles, estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar, y una flexibilidad del tobillo muy limitada, casi siempre por una pantorrilla tensa, las multiplicó por 23,3 (Riddle y colegas, 2003).',
    'La guía de 2023 para el dolor de talón les da al estiramiento de la fascia plantar y de la pantorrilla una **A** y al trabajo de fuerza una **B**. Las plantillas por sí solas reciben una **B en contra** (Koc y colegas, 2023).',
    'En 50 personas con dolor de talón y 25 sin él, quienes tenían dolor pasaban 3,4\u00A0horas más al día de pie y usaban zapatos con el talón más duro. Eso es una asociación, no una prueba de causa (Landorf y colegas, 2023).',
  ],
  sections: [
    {
      h2: '¿Qué le hace un día de clases a tus pies?',
      keyFact: 'Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar, y la poca flexibilidad del tobillo las multiplicó por 23,3, en un estudio con 50 casos y 100 controles (Riddle y colegas, 2003).',
      paragraphs: [
        '**Un día de clases mezcla ratos de pie sin moverte con caminatas cortas, casi siempre sobre pisos duros.** Estás de pie frente al pizarrón o al escritorio, caminas entre las filas mientras los alumnos trabajan y luego vuelves a estar de pie en la guardia del pasillo o del patio. Estar de pie sin moverte carga el talón, la fascia plantar (la banda bajo el pie que sostiene el arco) y la pantorrilla durante mucho tiempo, sin el bombeo que da caminar.',
        'No encontramos ningún estudio que haya medido cuántas horas pasa de pie un maestro típico, así que esta página no da una cifra. Lo que sí está medido es estar mucho tiempo de pie en general. Una revisión de 2015 sobre el trabajo de pie lo asoció con molestias en piernas y pies, cansancio e hinchazón de las piernas, y mencionó los tapetes para el piso, el calzado con soporte, las medias de compresión y la opción de alternar entre sentarse y estar de pie entre las medidas con algo de evidencia (Waters y Dick, 2015).',
        'En una revisión de 2017 con 25 estudios de laboratorio, las molestias en la zona lumbar y en las piernas aumentaron mientras más tiempo pasaba la gente de pie sin descanso. Los autores sugirieron no estar de pie más de unos 40\u00A0minutos seguidos (Coenen y colegas, 2017). Eso es más o menos una clase.',
        'La pantorrilla también importa. En un estudio de 2003, una [pantorrilla tensa](/es/pantorrillas-tensas/) fue el factor de riesgo más fuerte para la fascitis plantar, con probabilidades 23,3 veces mayores, y estar de pie la mayor parte de la jornada las multiplicó por 3,6 (Riddle y colegas, 2003). Un maestro que pasa todo el día de pie y tiene las pantorrillas tensas tiene los dos factores.',
      ],
      cites: [CITE.waters, CITE.coenen, CITE.riddle],
    },
    {
      h2: '¿Qué tan común es el dolor de pies en maestros?',
      keyFact: 'El dolor en la zona del tobillo, casi siempre contado junto con el pie, dio una cifra combinada del 30\u00A0% en 27 estudios con 8634 maestros (Tahernejad y colegas, 2024).',
      paragraphs: [
        '**Es común, pero se ha estudiado menos que la espalda y el cuello de los maestros.** Una revisión de 2024 combinó 44 estudios con 15\u00A0972 maestros. El dolor de cuello y el lumbar quedaron primero, con 47\u00A0% cada uno. El dolor en la zona del tobillo, que la mayoría de los estudios contó junto con el pie, dio una cifra combinada del 30\u00A0% en 27 estudios con 8634 maestros. Los estudios eran muy distintos entre sí, y los autores encontraron señales de sesgo de publicación en la cifra del tobillo, así que toma el 30\u00A0% como un punto medio aproximado, no como una tasa exacta.',
        'Una revisión anterior encontró que muy pocos estudios habían mirado las piernas y los pies de los maestros, y que el dolor de piernas y pies se reportaba con menos frecuencia que el de espalda, cuello y brazos (Erick y Smith, 2011).',
        'La encuesta más grande sobre los pies que encontramos preguntó a 1439 maestros de una región de Arabia Saudita. El 85,5\u00A0% reportó dolor de pies en los últimos 12\u00A0meses. Fue más común en quienes daban 16 o más clases a la semana (88\u00A0%) que en quienes daban menos (81,4\u00A0%), y en quienes llevaban más de 10\u00A0años dando clases (86,8\u00A0% frente a 82,6\u00A0%). Fue un cuestionario autorreportado en una sola región, y la mayoría eran maestras, así que puede no parecerse a tu escuela (Alqahtani, 2020).',
      ],
      cites: [CITE.tahernejadTeachers, CITE.erickTeachers, CITE.alqahtaniTeachers],
    },
    {
      h2: '¿Qué ejercicios caben entre clases?',
      keyFact: 'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla una A, su grado más alto, y al entrenamiento de fuerza una B (Koc y colegas, 2023).',
      paragraphs: [
        'Los ejercicios de abajo vienen de la guía clínica para la fascitis plantar. No se probaron en maestros, pero trabajan los tejidos que carga un día de pie: la pantorrilla, la fascia plantar y el talón. Casi todos solo necesitan una pared o un escritorio, así que caben en el cambio de clase o en una hora libre. Son las dosis de inicio de Walkito, no una prescripción. [Cómo se escriben estas guías](/es/sobre-walkito/).',
        'Los estiramientos tienen el grado más alto de la guía, **A**. El trabajo de fuerza de pantorrilla tiene una **B**. Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento una A, su grado más alto. No se probó en maestros.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todos los días, entre clases',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en la pared o en el marco del pizarrón. Mantén la pierna de atrás estirada, el talón de atrás apoyado en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'El dolor llega a 6/10',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento una A, su grado más alto. No se probó en maestros.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todos los días, entre clases',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición contra la pared, mantén el talón de atrás apoyado en el piso y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'El dolor llega a 6/10',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento una A, su grado más alto. No se probó en maestros.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          often: 'Casi todos los días, al despertar y después de estar sentado',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso, y otro en tu escritorio antes de pararte después de una hora libre.',
          stop: 'El dolor llega a 6/10',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al trabajo de fuerza una B. Este paso no se probó por sí solo.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza, 3 a la semana, nunca dos seguidos',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate frente a tu escritorio con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos sobre las rodillas agregan resistencia. Con la rodilla doblada trabaja sobre todo el sóleo, casi sin carga en el talón. Lo puedes hacer debajo del escritorio mientras los alumnos trabajan en silencio.',
          stop: 'El dolor llega a 6/10',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al trabajo de fuerza una B. Este paso no se probó por sí solo.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza, cuando las elevaciones sentado ya se sientan fáciles',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies con una mano en el escritorio, sube recto sobre los dedos gordos y baja despacio. Los dos pies se reparten la carga. Más sobre cómo avanzar: [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
          stop: 'El dolor llega a 6/10',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Automasaje plantar',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Está aquí por comodidad después de un día largo.' },
          dose: '1\u00A0minuto',
          often: 'Después de clases, en días de recuperación',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje, con presión firme. Si haces gestos de dolor, afloja. Con una pelota en el cajón del escritorio, esto se vuelve un hábito de después de clases. Más en [pelota de masaje para la fascitis plantar](/es/pelota-de-masaje-fascitis-plantar/).',
          stop: 'Haces gestos de dolor, o el talón está rojo, caliente o hinchado',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Cómo acomodar los ejercicios de pies en un día de clases?',
      paragraphs: [
        'No necesitas una rutina aparte. Asocia cada ejercicio a un momento que ya forma parte de tu día. Las dosis son las mismas de arriba; la tabla solo dice cuándo caben.',
      ],
      table: {
        caption: 'Una forma de repartir los ejercicios en un día de clases',
        head: ['Cuándo', 'Qué', 'Tiempo'],
        rows: [
          ['Antes de levantarte', 'Estiramiento plantar', '2\u00A0minutos'],
          ['Antes del primer timbre', 'Estiramiento de pantorrilla y de sóleo contra una pared', '4\u00A0minutos'],
          ['Mientras los alumnos trabajan', 'Siéntate; elevaciones de talón sentado', '1 a 2\u00A0minutos'],
          ['Cambio de clase', 'Estiramiento de pantorrilla, un lado en cada descanso', '1\u00A0minuto'],
          ['Después de clases', 'Elevaciones de talón con dos pies, automasaje plantar', '2 a 3\u00A0minutos'],
        ],
      },
      after: [
        'Haz el trabajo de fuerza (las elevaciones de talón) 3\u00A0días a la semana, nunca dos días seguidos. Los estiramientos pueden ir casi todos los días. Si solo te da tiempo para una cosa, que sea el estiramiento de pantorrilla: trabaja el factor de riesgo más fuerte del estudio de 2003.',
        'El punto de los 40\u00A0minutos de los estudios sobre estar de pie sirve como señal. Cuando los alumnos empiecen a trabajar por su cuenta, siéntate unos minutos, aunque sea en un banco al frente. Así cortas el tiempo de pie sin salir del salón (Coenen y colegas, 2017).',
      ],
      cites: [CITE.coenen, CITE.riddle],
    },
    {
      h2: '¿Cuáles son los mejores zapatos para maestros que pasan el día de pie?',
      paragraphs: [
        '**Ningún estudio ha comparado zapatos para maestros, y ningún ensayo elige una marca o un estilo.** La guía de 2023 para el dolor de talón no califica tipos de zapato. La poca evidencia que hay apunta a la amortiguación bajo el talón y a que el zapato te quede bien.',
        'En un estudio de 2023, se comparó a 50 personas con dolor en la planta del talón con 25 personas parecidas sin ese dolor. Quienes tenían dolor de talón pasaban 3,4\u00A0horas más al día de pie y usaban zapatos con el talón más duro. El estilo del zapato, la altura del tacón y estar de pie sobre pisos duros no fueron distintos entre los grupos (Landorf y colegas, 2023). Eso muestra una asociación, no que un talón blando prevenga el dolor, pero respalda un zapato con el talón acolchado para los días largos frente al pizarrón.',
        'Una lista práctica, basada en el ajuste y la comodidad y no en un ensayo:',
        {
          list: [
            'un talón acolchado y un contrafuerte firme (la parte de atrás del zapato no se dobla cuando la aprietas)',
            'espacio para que los dedos se abran, sin que te aprieten al final del día',
            'un tacón bajo y estable, no uno alto ni muy delgado',
            'un segundo par para alternar, así no usas el mismo par gastado todos los días',
          ],
        },
        '**Las plantillas pueden hacer el día más cómodo, pero no dependas solo de ellas.** La guía de 2023 les da a las plantillas por sí solas una **B en contra**, y combinadas con estiramientos y trabajo de fuerza una **C** (Koc y colegas, 2023). [Plantillas o ejercicios](/es/plantillas-o-ejercicios/) compara las dos opciones.',
        'Las medias de compresión son otra opción si al final del día sientes las piernas pesadas o hinchadas. En un ensayo con 40 guardias de seguridad en turnos largos de pie, tanto las medias de 15 a 20\u00A0mmHg como las de 20 a 30\u00A0mmHg evitaron el aumento de molestias e hinchazón en las piernas que se vio con calcetines normales (Garcia y colegas, 2023). No fue un estudio con maestros.',
      ],
      cites: [CITE.landorfFootwear, CITE.guideline, CITE.garcia],
    },
    {
      h2: '¿Los pisos del salón y los tapetes marcan la diferencia?',
      paragraphs: [
        'La mayoría de los salones tienen pisos duros: loseta, vinil sobre concreto o una alfombra delgada. Ningún estudio ha medido los pisos de los salones y los pies de los maestros. La revisión de 2015 sobre el trabajo de pie incluye los tapetes para el piso entre las medidas con algo de evidencia para reducir las molestias, junto con el calzado y la opción de alternar entre sentarse y estar de pie (Waters y Dick, 2015).',
        'Un tapete solo ayuda donde de verdad estás parado. Si das la clase desde un solo lugar, como el pizarrón, el proyector o una mesa de laboratorio, vale la pena probar ahí un tapete antifatiga. Si caminas por el salón, tu tapete es el zapato.',
        'Moverte es la otra mitad. Los estudios sobre estar de pie encontraron que las molestias aumentan con el tiempo que pasas de pie sin moverte (Coenen y colegas, 2017). Caminar entre los pupitres, sentarte durante el trabajo en silencio y cambiar el peso de un pie al otro cortan la carga estática.',
        'En casa, si te duele el talón, evita andar descalzo sobre pisos duros a primera hora de la mañana. [Dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) explica por qué importan los primeros pasos.',
      ],
      cites: [CITE.waters, CITE.coenen],
    },
    {
      h2: '¿Cuándo el dolor de talón de un maestro es fascitis plantar?',
      keyFact: 'De los maestros con dolor de pies en una encuesta, el 25,8\u00A0% dijo que aparecía temprano en la mañana y después de descansar, un patrón típico de la fascitis plantar, aunque la encuesta no diagnosticó a nadie (Alqahtani, 2020).',
      paragraphs: [
        'Un dolor general al final del día de clases que ya se fue a la mañana siguiente es cansancio por estar de pie. **La fascitis plantar tiene un patrón típico: dolor agudo bajo el talón en los primeros pasos de la mañana o después de estar sentado, que se calma al caminar y vuelve después de un día largo de pie.** En la encuesta de Arabia Saudita, el 25,8\u00A0% de los maestros con dolor de pies dijo que aparecía temprano en la mañana y después de descansar (Alqahtani, 2020). Esa encuesta no diagnosticó a nadie, así que es un patrón, no un conteo de casos de fascitis plantar.',
        'Si eso se parece a lo que te pasa, empieza con [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Alrededor del 90\u00A0% de las personas con fascitis plantar mejoran con tratamiento sin cirugía, aunque puede tardar de tres a seis meses (Latt y colegas, 2020). [Cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/) tiene los detalles.',
        'Otros patrones apuntan a otra cosa:',
        {
          list: [
            'un dolor sordo y profundo en el centro del talón, peor descalzo sobre pisos duros: [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/)',
            'dolor a lo largo del arco que aumenta durante el día: [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/)',
            'dolor bajo la parte delantera de la planta: [metatarsalgia](/es/metatarsalgia-dolor-planta-del-pie/)',
            'dolor en la parte de atrás del talón, en el tendón: [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/)',
          ],
        },
        '¿No sabes cuál es? El [identificador de dolor de pie](/es/donde-me-duele-el-pie/) te hace unas preguntas sobre dónde y cuándo te duele. **Si sigues sin estar seguro, consulta a un profesional de la salud antes de exigirle al pie con ejercicios.**',
      ],
      cites: [CITE.alqahtaniTeachers, CITE.latt],
    },
  ],
  faq: [
    {
      q: '¿Por qué me duelen tanto los pies después de dar clases todo el día?',
      cites: [CITE.waters, CITE.coenen],
      a: 'Dar clases te mantiene de pie y caminando sobre pisos duros la mayor parte del día, lo que carga el talón, el arco y la pantorrilla sin mucho descanso. Las revisiones sobre el trabajo de pie asocian estar mucho tiempo de pie con molestias y cansancio en piernas y pies, y los estudios de laboratorio encontraron que las molestias aumentan mientras más tiempo pasa la gente de pie sin moverse. Sentarte un rato, estirar la pantorrilla y usar zapatos acolchados ayudan.',
    },
    {
      q: '¿Qué tan común es el dolor de pies en maestros?',
      cites: [CITE.tahernejadTeachers, CITE.alqahtaniTeachers],
      a: 'Una revisión de 2024 dio una cifra combinada del 30\u00A0% de los maestros para el dolor en la zona del tobillo, casi siempre contado junto con el pie, en 27 estudios con resultados muy distintos entre sí. Una encuesta a 1439 maestros de una sola región de Arabia Saudita encontró que el 85,5\u00A0% tuvo dolor de pies en el último año. El dolor de cuello y el lumbar se reportan con más frecuencia que el de pies.',
    },
    {
      q: '¿Cuáles son los mejores zapatos para maestros que pasan el día de pie?',
      cites: [CITE.landorfFootwear, CITE.guideline],
      a: 'Ningún estudio ha probado zapatos para maestros. Busca un talón acolchado, un contrafuerte firme, espacio para los dedos y un tacón bajo y estable. En un estudio, las personas con dolor de talón usaban zapatos con el talón más duro y pasaban más tiempo de pie cada día. Las plantillas solas reciben una B en contra en la guía de 2023 para el dolor de talón, así que combínalas con estiramientos.',
    },
    {
      q: '¿Qué estiramientos pueden hacer los maestros entre clases?',
      cites: [CITE.guideline],
      a: 'Un estiramiento de pantorrilla y uno de sóleo contra una pared toman alrededor de un minuto por lado: 2\u00A0series de 30\u00A0segundos por pierna. El estiramiento plantar se puede hacer sentado frente a tu escritorio, 2\u00A0series de 30\u00A0segundos por pie. La guía de 2023 para el dolor de talón les da a estos estiramientos una A, aunque se escribió para la fascitis plantar, no para maestros.',
    },
    {
      q: '¿Estar de pie todo el día como maestro puede causar fascitis plantar?',
      cites: [CITE.riddle],
      a: 'Puede aumentar el riesgo. En un estudio de 2003 con 50 personas con fascitis plantar y 100 sin ella, estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades, y una flexibilidad del tobillo muy limitada, casi siempre por una pantorrilla tensa, las multiplicó por 23,3. El estudio no se hizo con maestros, y ningún estudio ha contado los casos de fascitis plantar en maestros en particular.',
    },
    {
      q: '¿Los tapetes antifatiga ayudan a los maestros?',
      cites: [CITE.waters],
      a: 'Pueden ayudar, si estás de pie en un solo lugar. Una revisión de 2015 sobre el trabajo de pie incluye los tapetes para el piso entre las medidas con algo de evidencia para reducir las molestias. Ningún estudio ha probado tapetes en salones de clase. Si caminas por el salón la mayor parte de la clase, tus zapatos importan más que un tapete.',
    },
    {
      q: '¿Los maestros deberían usar medias de compresión?',
      cites: [CITE.garcia],
      a: 'Vale la pena probarlas si al final del día sientes las piernas pesadas o hinchadas. En un ensayo con 40 guardias de seguridad en turnos largos de pie, tanto las medias de 15 a 20\u00A0mmHg como las de 20 a 30\u00A0mmHg evitaron el aumento de molestias e hinchazón en las piernas que se vio con calcetines normales. El ensayo no incluyó maestros.',
    },
    {
      q: '¿Cuánto tiempo debe estar de pie un maestro antes de sentarse?',
      cites: [CITE.coenen],
      a: 'No hay un límite probado para maestros. Una revisión de 2017 de estudios de laboratorio sobre estar de pie encontró que las molestias aumentan con el tiempo y sugirió no estar de pie más de unos 40\u00A0minutos seguidos. En la práctica, siéntate unos minutos cuando los alumnos empiecen a trabajar por su cuenta, y camina por el salón en lugar de quedarte quieto en un solo lugar.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una caída, una torcedura o un golpe, por ejemplo en la guardia del patio o en las escaleras',
      'no puedes apoyar el pie, o cojeas',
      'sientes el pie entumecido, con hormigueo o ardor, o está hinchado o caliente',
      'el talón o el pie está rojo, o tienes fiebre o te sientes mal',
      'el dolor te despierta por la noche o está presente en reposo',
      'el dolor está en un solo punto y empeora con la actividad, lo que puede ser el patrón de una fractura por estrés',
      'una pantorrilla o una pierna se hinchó de repente y está adolorida, roja o caliente',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. [Walkito](/es/programa/) arma un plan una semana a la vez en torno a una meta. Si tu talón sigue el patrón de dolor por la mañana de la fascitis plantar, la primera meta es dolor de 1 de 10 o menos por la mañana durante 14\u00A0días seguidos.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos, así una sesión cabe antes del primer timbre o después del último. Antes de cada sesión calificas tu dolor de talón de la mañana, y el plan se ajusta a eso. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['nurses', 'standing', 'heelPain'],
  crumb: 'Dolor de pies en maestros',
  campaign: 'guide-teachers-foot-pain-es',
};
