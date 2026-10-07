import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/nurses.ts` (2026-10-07), written around the
 * query «dolor de pies enfermeras». Figures, doses, grades and qualifiers are
 * identical to the English page. Numbers and units are joined with a
 * non-breaking space, as in `es.ts`.
 */

export const NURSES_ES: Guide = {
  lang: 'es',
  page: 'nurses',
  mainSource: CITE.reedNurse,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Dolor de pies en enfermeras: turnos de 12\u00A0horas y ejercicios',
  description:
    'Por qué las enfermeras tienen dolor de pies en turnos de 12\u00A0horas: zapatos, medias de compresión, ejercicios y cómo hacerlos con turnos rotativos.',
  h1: 'Dolor de pies en enfermeras: qué ayuda en turnos de 12\u00A0horas',
  lede:
    'Las enfermeras caminan más en un solo turno que la mayoría de la gente en un día, y lo hacen sobre pisos duros con zapatos que quizá no les quedan bien. Los problemas de pie y tobillo son de las molestias musculares más comunes en enfermería: en una encuesta, más de la mitad de las enfermeras de hospital los reportaron en un periodo de 12\u00A0meses. Casi todo lo que ayuda, como estirar la pantorrilla, hacer ejercicios para el arco y usar medias de compresión, se puede hacer en unos minutos antes o después del turno.',
  intro: [
    'Esta página trata el dolor de pies que viene de las exigencias del trabajo de enfermería: estar mucho tiempo de pie, caminar largas distancias y los turnos rotativos. Si tu dolor es agudo y peor en los primeros pasos después de descansar, ese patrón apunta a fascitis plantar, y la guía más completa es [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Si tienes dudas, [por qué me duelen los pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) explica en qué se cruzan el dolor general por estar de pie y los problemas con nombre.',
  ],
  toc: true,
  takeaways: [
    'En una encuesta a 312 enfermeras de un hospital pediátrico en Australia, el 55,3\u00A0% reportó problemas de pie o tobillo en los últimos 12\u00A0meses, y la tasa fue más alta entre quienes trabajaban turnos de 12\u00A0horas en cuidados intensivos (Reed y colegas, 2014).',
    'En un estudio con podómetros, las enfermeras caminaron en promedio 9360\u00A0pasos por turno, unos 5,8\u00A0km en un turno de 9,4\u00A0horas, una carga muy por encima del promedio de los adultos en general (Chang y Cho, 2022).',
    'En un estudio transversal con 636 enfermeras de hospitales en Japón, el 51\u00A0% reportó dolor o discapacidad en los pies en el último mes, y el 17\u00A0% tenía dolor que interfería con sus actividades diarias (Tojo y colegas, 2018).',
    'La poca flexibilidad del tobillo, es decir, una pantorrilla tensa, fue el factor que más predijo la fascitis plantar en un estudio de casos y controles con 50 casos y 100 controles: 23,3 veces las probabilidades. Estar de pie la mayor parte de la jornada las multiplicó por 3,6 (Riddle y colegas, 2003).',
    'En un ensayo con 40 guardias de seguridad que trabajaban de pie turnos de 12\u00A0horas, tanto las medias de compresión de 15-20\u00A0mmHg como las de 20-30\u00A0mmHg evitaron el aumento de molestias e hinchazón que se vio con calcetines normales (Garcia y colegas, 2023).',
  ],
  sections: [
    {
      h2: '¿Qué tan común es el dolor de pies en enfermeras?',
      paragraphs: [
        'El dolor de pie y tobillo es una de las tres molestias musculares más comunes en enfermería, junto con el dolor lumbar y el de cuello. En una encuesta a 312 enfermeras de un hospital pediátrico, el 55,3\u00A0% reportó problemas musculares de pie o tobillo en los últimos 12\u00A0meses, y el 43,8\u00A0% tuvo síntomas solo en los últimos siete días. Una de cada seis dijo que el dolor limitaba su actividad física. Trabajar turnos de 12\u00A0horas en la unidad de cuidados intensivos fue el único factor laboral que, por sí solo, aumentó las probabilidades de problemas de pie que limitan la vida diaria.',
        'Otro estudio con 636 enfermeras de hospitales en Japón encontró que el 51\u00A0% reportó dolor o discapacidad en los pies en el último mes, medido con un cuestionario validado. El dolor que impedía trabajar con normalidad llegó al 17\u00A0%. Un estudio con podómetros en enfermeras de Corea encontró un promedio de 5,8\u00A0km caminados por turno, una exigencia física muy por encima de la población general.',
        'Un estudio transversal con 411 enfermeras en Finlandia encontró que la piel seca, el dolor de pies y los callos eran las molestias de pies más comunes, y que los problemas de pies se asociaban con menor capacidad para trabajar. Los autores pidieron que se diera prioridad a prevenir los problemas de pies en enfermería.',
      ],
      cites: [CITE.changCho, CITE.reedNurse, CITE.tojo, CITE.stoltNurse],
    },
    {
      h2: '¿Por qué a las enfermeras les duelen los pies en turnos de 12 horas?',
      paragraphs: [
        'En un turno de enfermería se juntan tres cosas: estar mucho tiempo de pie, caminar largas distancias y los pisos duros. Estar de pie sin moverte carga la fascia plantar, los músculos de la pantorrilla y la almohadilla del talón sin el bombeo que da caminar. Caminar ayuda a que la sangre regrese de las piernas, pero en enfermería se alterna sin aviso entre estar de pie sin moverse junto a una cama y caminar pasillos largos, así que el bombeo de la pantorrilla nunca agarra un ritmo estable.',
        'Una revisión de 2015 sobre salud laboral encontró que estar de pie mucho tiempo en el trabajo se asocia con molestias musculares, cansancio y dolor de piernas en muchos trabajos de pie, y menciona a las enfermeras como uno de los grupos de mayor riesgo. La revisión señaló que el esfuerzo del corazón y la hinchazón de las piernas aumentan con el tiempo de pie.',
        'En los tejidos, una pantorrilla tensa es una pieza clave. Un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100 controles emparejados encontró que la poca flexibilidad del tobillo, es decir, que el tobillo no se dobla hacia arriba lo que debería porque la pantorrilla está tensa, fue el factor de riesgo independiente más fuerte para la fascitis plantar: 23,3 veces las probabilidades. Estar de pie la mayor parte de la jornada las multiplicó por 3,6. Las enfermeras tienen los dos factores de riesgo a la vez.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: '¿Qué ejercicios ayudan a las enfermeras con el dolor de pies?',
      paragraphs: [
        'Los ejercicios que ayudan son los mismos que trabajan la fascitis plantar y el dolor de pies por estar de pie: estiramientos de pantorrilla, un estiramiento plantar, elevaciones de talón para la fuerza de la pantorrilla y un ejercicio para el arco llamado pie corto. Lo distinto en enfermería es acomodarlos alrededor de los turnos rotativos, no durante el turno. Unos minutos antes o después del turno bastan para hacer los más importantes.',
        'La guía clínica de 2023 para el dolor de talón le da al estiramiento de la pantorrilla y de la fascia plantar su grado más alto, A, y al entrenamiento de fuerza una B. Las dos notas son para la fascitis plantar, pero los tejidos son los mismos que cargan el peso durante un turno de enfermería. Si algún ejercicio sube tu dolor a 6 de 10 o más, detente por hoy.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla una A para la fascitis plantar. Una pantorrilla tensa fue el mayor factor de riesgo en un estudio de casos y controles de 2003.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón abajo y la cadera hacia adelante. Esto trabaja el gastrocnemio, el músculo más grande y externo de la pantorrilla. Lo puedes hacer en la sala de descanso o contra cualquier pared.',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: {
            level: 'moderate',
            why: 'El mismo respaldo de la guía que la versión con la rodilla estirada. Trabaja el sóleo, el músculo más profundo de la pantorrilla.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Misma posición contra la pared, pero dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás para sentirlo cerca del talón',
          alt: 'Una figura estirando contra una pared con la rodilla de atrás doblada, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento plantar',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar una A.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          how: 'Siéntate y cruza un pie sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. Si el talón te duele más en los primeros pasos del día, haz este antes de que los pies toquen el piso en la mañana.',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás con suavidad hasta sentirlo en el arco',
          alt: 'Una figura sentada jala hacia atrás los dedos de un pie, con el arco resaltado',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al entrenamiento de fuerza una B para la fascitis plantar. Construye la fuerza de pantorrilla que absorbe los impactos durante el turno.',
          },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate sobre los dos pies, sube recto sobre los dedos gordos en unos tres segundos y baja despacio en otros tres. Apóyate en una pared o un barandal para el equilibrio. El detalle de este ejercicio, con cómo avanzar y la variante con toalla, está en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: sube sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube sobre las puntas de los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Pie corto, sentado',
          evidence: {
            level: 'early',
            why: 'Una revisión de 2024 encontró que el entrenamiento de pie corto cambió la forma del arco, pero no el dolor. Walkito lo incluye como parte de un programa más amplio.',
          },
          dose: '3\u00A0series de 10, mantén 5\u00A0segundos, cada pie',
          how: 'Siéntate con el pie apoyado en el piso. Lleva la parte delantera del pie hacia el talón para que el arco suba, sin encoger los dedos. Esto entrena los músculos pequeños dentro del arco que lo sostienen durante un día largo de pie.',
          media: 'short_foot_seated',
          caption: 'Pie corto: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una pierna sentada con el pie apoyado en el piso, con el arco resaltado mientras sube',
        },
        {
          name: 'Separación de dedos',
          evidence: {
            level: 'early',
            why: 'No es parte de los programas probados en esta página. Trabaja los músculos propios del pie que quedan apretados dentro de los zapatos de trabajo.',
          },
          dose: '3\u00A0series de 10, mantén 5\u00A0segundos',
          how: 'En una silla o de pie, separa los cinco dedos todo lo que puedas y mantén. Después de un turno con zapatos ajustados, esto despierta los músculos pequeños entre los dedos.',
          media: 'toe_spread',
          caption: 'Separación de dedos: separa los cinco dedos y mantén',
          alt: 'Un pie visto desde arriba con los dedos bien separados',
        },
      ],
      table: {
        caption: 'Dosis de inicio para enfermeras con dolor de pies',
        head: ['Ejercicio', 'Dosis', 'Cuándo', 'Qué debes sentir'],
        rows: [
          ['Estiramiento de pantorrilla (rodilla estirada)', '2 x 30\u00A0segundos, cada pierna', 'Antes o después del turno', 'Un estiramiento en la parte alta de la pantorrilla'],
          ['Estiramiento de sóleo (rodilla doblada)', '2 x 30\u00A0segundos, cada pierna', 'Antes o después del turno', 'Un estiramiento bajo en la pantorrilla, cerca del talón'],
          ['Estiramiento plantar', '2 x 30\u00A0segundos, cada pie', 'Antes del turno o al despertar', 'Un estiramiento a lo largo del arco'],
          ['Elevaciones de talón', '3 x 10, los dos pies', 'Días libres o después del turno', 'Las pantorrillas trabajando, sin dolor agudo'],
          ['Pie corto', '3 x 10 (mantén 5\u00A0segundos), cada pie', 'Días libres o después del turno', 'El arco subiendo, con los dedos relajados'],
          ['Separación de dedos', '3 x 10 (mantén 5\u00A0segundos)', 'Después del turno', 'Los dedos separándose, sin dolor'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Cómo hacer los ejercicios si tienes turnos rotativos?',
      paragraphs: [
        'Un turno de 12\u00A0horas deja poco tiempo para una rutina aparte, y rotar entre turnos de día y de noche lo complica todavía más. Los estiramientos de esta página toman unos 3\u00A0minutos, así que lo más simple es hacerlos justo antes o justo después del turno, siempre en el mismo momento de tu rutina. Por ejemplo, hazlos después de ponerte o quitarte los zapatos de trabajo.',
        'En los días libres, agrega los ejercicios de fuerza: elevaciones de talón y pie corto. Toman de 5 a 10\u00A0minutos. Hacer el trabajo de fuerza en los días libres, y no después de un turno pesado, le da a la pantorrilla y al arco tiempo para recuperarse antes de volver a estar de pie.',
        'Tres sesiones por semana es un buen punto de partida. Si trabajas tres turnos de 12\u00A0horas con cuatro días libres, puedes hacer fuerza en cada día libre. Si rotas entre turnos de día y de noche, la hora no importa. Lo que importa es la constancia, no el reloj.',
      ],
    },
    {
      h2: '¿Los zapatos de enfermería hacen diferencia: zuecos, tenis u otra cosa?',
      paragraphs: [
        'El calzado es uno de los temas que más se hablan en enfermería, pero la evidencia a favor de un tipo sobre otro es limitada. Una evaluación de 2007 de tres marcas de zapatos profesionales de enfermería encontró que el zapato con plantilla más acolchada y mejor soporte del arco redujo el esfuerzo muscular de las piernas comparado con los otros dos, pero el estudio fue pequeño y específico de esas marcas.',
        'Lo que la investigación sí respalda de forma más general es que la comodidad del calzado importa. En una encuesta a 125 enfermeras de urgencias y consulta externa, el 72\u00A0% de quienes reportaron poca comodidad en el calzado también reportó dolor de pies y de talón, frente al 28\u00A0% de quienes reportaron mucha comodidad. La guía clínica de 2023 para el dolor de talón les da a las plantillas ortopédicas por sí solas una B en contra para aliviar la fascitis plantar a corto plazo, es decir, la evidencia se inclina a no usarlas como única opción.',
        'Algo práctico: elige un zapato que te quede bien, que tenga algo de amortiguación y que no te apriete los dedos. Si ya tienes dolor de talón o de arco, los ejercicios de esta página trabajan los tejidos directamente. Los zapatos y las plantillas pueden ayudar con la comodidad durante el turno, pero no reemplazan los estiramientos ni el trabajo de fuerza.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Las medias de compresión ayudan a las enfermeras con el dolor de pies y piernas?',
      paragraphs: [
        'Las medias de compresión tienen uno de los estudios mejor controlados sobre las molestias por estar de pie. En un ensayo aleatorizado con 40 guardias de seguridad que trabajaban de pie turnos de unas 12\u00A0horas, tanto el grupo con medias de 15-20\u00A0mmHg como el de 20-30\u00A0mmHg evitaron el aumento importante de molestias en pies y piernas, cansancio e hinchazón que tuvo el grupo con calcetines normales. Muchos participantes dijeron que la media de menor presión era más fácil de poner.',
        'Un ensayo piloto aleatorizado con 20 estudiantes de enfermería comparó medias de compresión hasta la rodilla y hasta el muslo, usadas durante turnos de práctica clínica de 9\u00A0horas. Los dos grupos reportaron mucha satisfacción, aunque la muestra fue demasiado pequeña para mostrar diferencias claras entre los dos largos.',
        'El ensayo de Garcia se hizo solo con guardias de seguridad hombres, no con enfermeras, y ninguno de los dos estudios fue grande. Pero las medias de compresión son de las pocas medidas específicas para estar de pie con evidencia aleatorizada. Una revisión de salud laboral de 2015 las incluye junto con los tapetes para el piso y el calzado con soporte entre las medidas con algo de evidencia para reducir las molestias en trabajos de pie. No reemplazan los estiramientos ni el trabajo de fuerza. Ayudan con la hinchazón y el cansancio, mientras la pantorrilla y la fascia siguen necesitando su propio trabajo.',
      ],
      sourceNote:
        'Garcia y colegas (2023): diseño de grupos paralelos, 40 guardias de seguridad hombres asignados al azar a tres grupos (calcetines normales, 15-20\u00A0mmHg, 20-30\u00A0mmHg), cada uno usado durante un turno completo. Se midieron molestias, cansancio y edema antes y después del turno.',
      cites: [CITE.garcia, CITE.waters],
    },
    {
      h2: '¿Qué puedes hacer antes y después del turno en 3, 5 o 10 minutos?',
      paragraphs: [
        'Si tienes 3\u00A0minutos: haz los dos estiramientos de pantorrilla (rodilla estirada y rodilla doblada, 30\u00A0segundos de cada lado). Eso cubre el factor de riesgo modificable más fuerte, una pantorrilla tensa, y toma lo mismo que amarrarte los zapatos.',
        'Si tienes 5\u00A0minutos: agrega el estiramiento plantar (30\u00A0segundos cada pie). Esta es la combinación a la que la guía de 2023 le da una A para la fascitis plantar. Si el talón te duele más en los primeros pasos del día, haz el estiramiento plantar antes de que los pies toquen el piso.',
        'Si tienes 10\u00A0minutos: agrega las elevaciones de talón (3\u00A0series de 10) y el pie corto (3\u00A0series de 10, manteniendo 5\u00A0segundos). Eso cubre la parte de fuerza, con una B en la guía. En los días libres, 10\u00A0minutos alcanzan para todo lo de esta página.',
        'La constancia importa más que la duración. Tres minutos de estiramiento de pantorrilla cada día de turno, siempre en el mismo momento de tu rutina, sirven más que una sesión larga que te saltas cuando cambia el horario.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿El dolor de pies después de un turno puede ser fascitis plantar u otra cosa?',
      paragraphs: [
        'El dolor y el cansancio general después de un turno largo son comunes y suelen quitarse con descanso. La fascitis plantar es un problema específico: dolor agudo cerca del talón, peor en los primeros pasos después de descansar (al levantarte de la cama o al pararte después de pasar mucho rato en una silla). Si tu dolor sigue ese patrón, la guía más completa es [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/), y el detalle de las elevaciones de talón está en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
        'Si al final del turno sientes los arcos planos o hundidos hacia adentro, los ejercicios de [ejercicios para pie plano y arcos caídos](/es/ejercicios-pie-plano/) trabajan los músculos que sostienen el arco. El dolor a lo largo de la tibia podría ser periostitis tibial. El dolor en el tendón de Aquiles, en la parte de atrás del talón, es otro problema.',
        'Si tu pregunta principal es el dolor por estar de pie y no trabajas en enfermería, [por qué me duelen los pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) cubre los mismos ejercicios para cualquier persona. Para la versión de este problema con escritorio de pie, mira [dolor de pies por escritorio de pie](/es/escritorio-de-pie-dolor-de-pies/). Si no sabes qué está causando el dolor, consulta a un profesional de la salud antes de cargarlo con ejercicio.',
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuántos pasos camina una enfermera en un turno de 12 horas?',
      a: 'En un estudio con podómetros en enfermeras de hospitales de Corea, el promedio fue de unos 9360\u00A0pasos por turno, unos 5,8\u00A0km en 9,4\u00A0horas. Eso está muy por encima del promedio diario de pasos de los adultos en general, y caminar tanto sobre pisos duros es una de las causas principales del dolor de pies en enfermería.',
      cites: [CITE.changCho, CITE.tojo],
    },
    {
      q: '¿Los turnos de 12 horas causan más dolor de pies que los de 8 horas?',
      a: 'En una encuesta a enfermeras de un hospital pediátrico, trabajar turnos de 12\u00A0horas en la unidad de cuidados intensivos fue el único factor laboral que, por sí solo, aumentó las probabilidades de problemas de pie y tobillo que limitan la vida diaria. La carga total sobre el pie sube con la duración del turno, y el tiempo de recuperación entre turnos es más corto cuando los turnos son más largos. Aun así, el tipo de trabajo y el piso también importan, no solo las horas.',
      cites: [CITE.reedNurse],
    },
    {
      q: '¿Las enfermeras deben usar zuecos o tenis para el dolor de pies?',
      a: 'No hay un ensayo grande que compare zuecos de enfermería con tenis para los pies. Lo que sí respalda la evidencia es que la comodidad del calzado está muy relacionada con el dolor de pies: en una encuesta, el 72\u00A0% de las enfermeras que reportaron poca comodidad en el calzado también reportó dolor de pies y de talón. Elige un zapato que te quede bien, con algo de amortiguación y que no te apriete los dedos. Los zapatos solos no reemplazan los estiramientos ni el trabajo de fuerza de esta página.',
    },
    {
      q: '¿Las medias de compresión ayudan a las enfermeras en turnos largos?',
      a: 'En un ensayo aleatorizado con 40 guardias de seguridad que trabajaban de pie turnos de 12\u00A0horas, tanto las medias de compresión de 15-20\u00A0mmHg como las de 20-30\u00A0mmHg evitaron el aumento de molestias e hinchazón que se vio con calcetines normales. El ensayo no se hizo con enfermeras, pero el mecanismo es el mismo: la compresión ayuda a que la sangre regrese de la parte baja de las piernas cuando pasas mucho tiempo de pie. A la mayoría de los participantes la media de menor presión les resultó más fácil de poner.',
      cites: [CITE.garcia],
    },
    {
      q: '¿El dolor de pies en enfermería es algo con lo que tienes que vivir?',
      a: 'El dolor de pies por estar de pie y caminar es común en enfermería, pero «común» no significa inevitable. La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla y de fascia una A, y al entrenamiento de fuerza una B. Las medias de compresión tienen evidencia aleatorizada para las molestias por estar de pie. Unos minutos de estiramiento de pantorrilla antes o después de cada turno, junto con trabajo de fuerza en los días libres, trabajan los tejidos que más se cargan.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: '¿El trabajo de enfermería puede causar fascitis plantar?',
      a: 'Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles emparejados con 50 casos y 100 controles. La poca flexibilidad del tobillo las multiplicó por 23,3. Las enfermeras tienen los dos factores de riesgo, mucho tiempo de pie y poco tiempo de descanso para estirar, por eso los ejercicios de esta página se parecen tanto a los de la guía de fascitis plantar.',
      cites: [CITE.riddle],
    },
    {
      q: '¿Qué es lo primero que puede hacer una enfermera para el dolor de pies?',
      a: 'De las opciones que revisa esta página, el estiramiento diario de pantorrilla tiene el mayor respaldo de la guía (grado A para la fascitis plantar) y trabaja el factor de riesgo modificable más fuerte, una pantorrilla tensa. Toma unos 2\u00A0minutos, no necesita equipo y lo puedes hacer en la sala de descanso o en casa. Agregar medias de compresión en los días de turno cubre la parte de la hinchazón y el cansancio.',
      cites: [CITE.guideline, CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída en el trabajo',
      'no puedes apoyar el pie, o cojeas',
      'el pie está entumido, con hormigueo, ardor, hinchado o caliente',
      'el talón o el pie está rojo, o tienes fiebre o te sientes mal',
      'el dolor te despierta por la noche',
      'es un dolor agudo, o empeora aunque hayas bajado la carga',
      'el dolor está en un solo punto y empeora con la actividad, lo que puede ser señal de una fractura por estrés y no de cansancio por estar de pie',
      'una pierna o un pie se hinchó de repente y está adolorido, rojo o caliente',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
      'el dolor no ha bajado después de varias semanas con turnos más ligeros, mejores zapatos y los ejercicios de esta página',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text:
      'No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. Walkito arma un plan una semana a la vez en torno a una meta. Si tu dolor de pies sigue el patrón de dolor por la mañana de la fascitis plantar, la primera meta es dolor de 1 de 10 o menos por la mañana durante 14\u00A0días seguidos.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas tu primera meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver si el trabajo está sirviendo de algo. Con turnos rotativos, la hora del día no importa. Lo que importa es hacer las sesiones con constancia.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si el dolor es agudo, empeora o no te deja dormir, consulta primero a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor de pies en enfermeras',
  campaign: 'guide-nurses-es',
};
