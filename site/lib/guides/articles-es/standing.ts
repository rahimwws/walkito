import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Spanish version of `articles/standing.ts` (2026-10-07), written around the
 * query «dolor de pies por estar de pie todo el día». Figures, doses, grades
 * and qualifiers are identical to the English page. Numbers and units are
 * joined with a non-breaking space, as in `es.ts`.
 */

/** `3, 5 o 7`: the plan's options as a Spanish list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const STANDING_ES: Guide = {
  lang: 'es',
  page: 'standing',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Dolor de pies por estar de pie todo el día: qué ayuda',
  description:
    'Por qué te duelen los pies por estar de pie todo el día, qué ayuda (estiramientos, fuerza, medias de compresión) y cuándo consultar a un profesional.',
  h1: '¿Por qué me duelen los pies por estar de pie todo el día?',
  lede:
    'Al final de un turno largo te duelen los pies. Te duele el arco, el talón está adolorido y sientes las piernas pesadas. Estar de pie por horas sobre un piso duro carga los mismos tejidos una y otra vez, sin el bombeo que caminar les da a tus pantorrillas y a tus venas. Estirar la pantorrilla y la fascia plantar, y ganar algo de fuerza en la pantorrilla, trabaja justo los tejidos que más se cargan.',
  intro: [
    'No todo el dolor de pies por estar de pie es fascitis plantar, pero las dos cosas se cruzan. Un estudio de casos y controles de 2003, con 50\u00A0personas con fascitis plantar y 100 controles emparejados, encontró que estar de pie la mayor parte de la jornada laboral multiplicaba por 3,6 las probabilidades de tener fascitis plantar. La poca flexibilidad del tobillo fue un factor de riesgo todavía más fuerte: 23,3 veces las probabilidades. Los ejercicios que ayudan en los dos casos son casi los mismos: estiramientos de pantorrilla y de fascia plantar, más trabajo de fuerza para la pantorrilla.',
  ],
  toc: true,
  takeaways: [
    'Una revisión de 2015 sobre salud laboral encontró que estar de pie mucho tiempo en el trabajo se asocia con molestias musculares, cansancio y dolor de piernas. Los tapetes para el piso, las medias de compresión y el calzado con soporte están entre las medidas con evidencia a favor (Waters y Dick, 2015).',
    'Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles con 50 casos y 100 controles. La poca flexibilidad del tobillo las multiplicó por 23,3 (Riddle y colegas, 2003).',
    'En un ensayo de grupos paralelos con 40 guardias de seguridad asignados al azar a calcetines normales o a uno de dos grupos con medias de compresión, tanto las medias de 15-20\u00A0mmHg como las de 20-30\u00A0mmHg evitaron el aumento de molestias en pies y piernas que se vio con calcetines normales durante turnos de pie de 12\u00A0horas (Garcia y colegas, 2023).',
    'La guía clínica de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de fuerza una B.',
  ],
  sections: [
    {
      h2: '¿Por qué te duelen los pies después de estar de pie todo el día?',
      keyFact: 'En un estudio de casos y controles de 2003, la poca flexibilidad del tobillo multiplicó por 23,3 las probabilidades de fascitis plantar, el factor de riesgo más fuerte, y estar de pie la mayor parte de la jornada las multiplicó por 3,6 (Riddle y colegas, 2003).',
      paragraphs: [
        'Los pies duelen por estar de pie porque, quieto, cargas la fascia plantar, los músculos de la pantorrilla y el talón sin darles un descanso. Al caminar, cada paso bombea la sangre de las piernas hacia arriba. Estar de pie quita ese bombeo, así que la sangre se acumula en la parte baja de las piernas y los tejidos bajo el pie cargan el mismo peso fijo durante horas.',
        'Una revisión de 2015 sobre la investigación en salud laboral encontró que estar de pie mucho tiempo se asocia con dolor lumbar, dolor de piernas, molestias y cansancio en muchos trabajos que se hacen de pie. La revisión también señaló que el esfuerzo del corazón y la hinchazón de las piernas aumentan con el tiempo de pie. Los autores pidieron definiciones más claras de «estar de pie mucho tiempo» en futuros estudios, porque el límite entre un tiempo de pie seguro y uno dañino cambia según la persona y el trabajo.',
        'En cuanto a la pantorrilla y la fascia, un estudio de casos y controles de 2003 encontró dos factores de riesgo que destacaron sobre el resto. La poca flexibilidad del tobillo, es decir, una pantorrilla tensa, fue el factor que más predijo la fascitis plantar: 23,3 veces las probabilidades. Estar de pie la mayor parte de la jornada las multiplicó por 3,6. Las dos cosas están conectadas: una pantorrilla tensa mantiene el talón con más tensión en cada minuto que pasas de pie.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: '¿Qué ejercicios ayudan con el dolor de pies por estar de pie?',
      keyFact: 'La guía clínica de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de resistencia y de fuerza una B (Koc y colegas, 2023).',
      paragraphs: [
        'Estos ejercicios trabajan la pantorrilla, la fascia plantar y los músculos pequeños que sostienen el arco. Son las dosis de inicio de Walkito, no una indicación médica. Si el dolor está cerca del talón y sigue el patrón de dolor por la mañana de la fascitis plantar, la lista completa está en [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/). [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'La guía clínica de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A. Al entrenamiento de resistencia y de fuerza le da una B. Las dos notas son para la fascitis plantar, no para el cansancio general por estar de pie, pero los tejidos son los mismos. Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy.',
      ],
      table: {
        head: ['Ejercicio', 'Dosis', 'Con qué frecuencia', 'Qué debes sentir', 'Detente si'],
        rows: [
          ['Estiramiento de pantorrilla', '2\u00A0series de 30\u00A0segundos, cada pierna', 'Casi todas las sesiones', 'Un estiramiento en la pantorrilla de la pierna de atrás estirada', 'El dolor llega a 6/10'],
          ['Estiramiento de sóleo', '2\u00A0series de 30\u00A0segundos, cada pierna', 'Casi todas las sesiones', 'Un estiramiento bajo en la pantorrilla, cerca del talón', 'El dolor llega a 6/10'],
          ['Estiramiento plantar', '2\u00A0series de 30\u00A0segundos, cada pie', 'Casi todas las sesiones', 'Un estiramiento a lo largo del arco, no en la pantorrilla', 'El dolor llega a 6/10'],
          ['Elevaciones de talón con dos pies', '3\u00A0series de 10, los dos pies', 'Días de fuerza', 'Las pantorrillas trabajando, con los dos pies compartiendo la carga', 'El dolor llega a 6/10'],
          ['Pie corto, sentado', '3\u00A0series de 10, mantén 5\u00A0segundos, cada pie', 'Días de fuerza', 'El arco subiendo, con los dedos relajados', 'El dolor llega a 6/10'],
          ['Equilibrio a una pierna', '3\u00A0series de 30\u00A0segundos, cada pierna', 'Días de equilibrio', 'El pie y el tobillo haciendo pequeñas correcciones', 'El dolor llega a 6/10'],
          ['Automasaje plantar', '2\u00A0minutos', 'Días de recuperación', 'Presión firme bajo el pie, nunca una mueca de dolor', 'El dolor llega a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla una A para la fascitis plantar. Una pantorrilla tensa fue el mayor factor de riesgo en un estudio de casos y controles de 2003.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón abajo y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento trabaja el mayor factor de riesgo que encontró el estudio de 2003.',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: {
            level: 'moderate',
            why: 'Mismo mecanismo que el estiramiento de pantorrilla: trabaja la flexibilidad del tobillo, el mayor factor de riesgo de fascitis plantar en el estudio de 2003.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición contra la pared y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura estirando contra una pared con la rodilla de atrás doblada, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento plantar',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar una A para la fascitis plantar.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento a lo largo del arco, no en la pantorrilla. Si el talón te duele más al despertar, haz este antes de que el pie toque el piso.',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 para el dolor de talón le da al entrenamiento de fuerza una B para la fascitis plantar. No se ha probado específicamente para el cansancio por estar de pie.',
          },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga mientras la pantorrilla gana fuerza. Apóyate en una pared o un barandal si necesitas equilibrio.',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube sobre las puntas de los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Pie corto, sentado',
          evidence: {
            level: 'early',
            why: 'Una revisión de 2024 encontró que el entrenamiento de pie corto cambió la forma del arco, pero no el dolor. En un ensayo de 2023 fue parte de un programa que mejoró las medidas del arco.',
          },
          dose: '3\u00A0series de 10, mantén 5\u00A0segundos, cada pie',
          often: 'Días de fuerza',
          feel: 'El arco subiendo, con los dedos relajados',
          how: 'Siéntate con el pie apoyado en el piso. Lleva la parte delantera del pie hacia el talón para que el arco suba, y mantén. No encojas los dedos. El pie corto entrena el músculo pequeño dentro del arco que lo sostiene durante un día largo de pie.',
          image: 'Ejercicio: pie corto, sentado',
          media: 'short_foot_seated',
          caption: 'Pie corto: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una pierna sentada con el pie apoyado en el piso, con el arco resaltado mientras sube',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: {
            level: 'early',
            why: 'No hay un estudio específico sobre estar de pie. Es trabajo general de equilibrio para el pie y el tobillo.',
          },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Días de equilibrio',
          feel: 'Pequeñas correcciones en el pie y el tobillo',
          how: 'Párate en un pie y mira un punto fijo. Deja que el pie se tambalee. Ese tambaleo es el pie haciendo el trabajo de equilibrio. Ponte cerca de una pared si quieres algo de seguridad.',
          image: 'Ejercicio: equilibrio a una pierna',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: párate en un pie y deja que haga pequeñas correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
        {
          name: 'Automasaje plantar',
          evidence: {
            level: 'early',
            why: 'No se probó en los estudios de esta página. Es una medida de comodidad entre sesiones.',
          },
          dose: '2\u00A0minutos',
          often: 'Días de recuperación',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje, con presión firme. Si haces muecas de dolor, afloja. Rodar el pie después de un turno largo calma el tejido y da algo de alivio antes del día siguiente.',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Las plantillas o los zapatos con soporte ayudan si te duelen los pies por estar de pie?',
      paragraphs: [
        'Los zapatos con soporte y las plantillas se recomiendan mucho para el dolor de pies por estar de pie, y tiene algo de base, pero la evidencia es más débil que para los estiramientos y el trabajo de fuerza. La guía clínica de 2023 para el dolor de talón les da a las plantillas ortopédicas por sí solas una **B en contra** para aliviar el dolor a corto plazo, es decir, la evidencia se inclina a no usarlas como única opción. Las plantillas combinadas con otros cuidados reciben una **C**.',
        'Lo que respalda la revisión de salud laboral es más amplio: los tapetes para el piso, el calzado con soporte y la opción de alternar entre sentarse y pararse aparecen en la lista de medidas con algo de evidencia para reducir las molestias en trabajos de pie. Ninguna tiene detrás un ensayo grande como el estiramiento de pantorrilla. Algo razonable es usar zapatos con soporte y un tapete si tu piso es duro, y hacer los estiramientos y el trabajo de fuerza para los tejidos.',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: '¿Las medias de compresión ayudan con el dolor de pies por estar de pie?',
      keyFact: 'En un ensayo con 40 guardias de seguridad que trabajaban de pie turnos de unas 12 horas, tanto las medias de 15-20 mmHg como las de 20-30 mmHg evitaron el aumento de molestias en pies y piernas que tuvo el grupo con calcetines normales (Garcia y colegas, 2023).',
      paragraphs: [
        'Las medias de compresión tienen uno de los estudios mejor controlados sobre las molestias por estar de pie. En un ensayo aleatorizado con 40 guardias de seguridad que trabajaban de pie turnos de unas 12\u00A0horas, divididos en tres grupos, tanto el grupo con medias de 15-20\u00A0mmHg como el de 20-30\u00A0mmHg evitaron el aumento importante de molestias en pies y piernas, cansancio e hinchazón que tuvo el grupo con calcetines normales. Muchos participantes dijeron que la media de menor presión era más fácil de poner.',
        'El ensayo fue pequeño, solo con hombres, y probó un solo tipo de trabajo. Pero es una de las pocas medidas para las molestias por estar de pie con un diseño aleatorizado, por eso aparece antes que otros consejos más populares en esta página. Las medias de compresión no reemplazan los estiramientos ni el trabajo de fuerza. Ayudan con la hinchazón y el cansancio, mientras la pantorrilla y la fascia siguen necesitando su propio trabajo.',
      ],
      sourceNote:
        'Garcia y colegas (2023): diseño de grupos paralelos, 40 guardias de seguridad hombres asignados al azar a uno de tres grupos (calcetines normales, 15-20\u00A0mmHg o 20-30\u00A0mmHg); cada condición se usó durante un turno completo por un subgrupo distinto de guardias. Se midieron molestias, cansancio y edema antes y después del turno.',
      cites: [CITE.garcia],
    },
    {
      h2: '¿El dolor de pies por estar de pie puede ser fascitis plantar, pie plano u otra cosa?',
      paragraphs: [
        'El dolor de pies por estar de pie puede ser cansancio general que se quita con descanso, o puede ser el inicio de un problema con nombre. El más común es la fascitis plantar: dolor agudo cerca del talón, que suele ser peor en los primeros pasos después de descansar. Si el talón te duele más en la mañana y otra vez después de estar sentado, ese patrón apunta a fascitis plantar, y la guía más completa es [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
        'Si al final del día sientes los arcos planos o hundidos hacia adentro, los ejercicios de [ejercicios para pie plano y arcos caídos](/es/ejercicios-pie-plano/) trabajan los músculos que sostienen el arco. Un pie plano rígido, que sigue plano incluso cuando el pie no toca el piso, es estructural y necesita a un profesional de la salud, no ejercicio.',
        'Si el dolor está a lo largo de la tibia y no bajo el pie, eso apunta a periostitis tibial, y [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/) explica lo que dice la investigación. El dolor en la parte de atrás del talón, en el tendón de Aquiles, es otro problema. El dolor en la parte interna del tobillo puede venir del tendón tibial posterior. Los dos se explican desde el punto de vista de los corredores en [dolor de talón al correr](/es/dolor-de-talon-en-corredores/). Si el dolor está atrás del talón, en el tendón de Aquiles, mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/); si quieres más detalle sobre el ejercicio de elevación de talón, mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/). Si no sabes qué está causando el dolor, consulta a un profesional de la salud antes de cargarlo con ejercicio.',
      ],
    },
    {
      h2: '¿Cuánto tardan en mejorar los pies si trabajas turnos largos de pie?',
      paragraphs: [
        'No hay un ensayo que responda esto directamente para el cansancio de pies por estar de pie. El dolor y el cansancio general por estar de pie suelen bajar en uno o dos días de descanso. Si el dolor ya pasó a ser fascitis plantar, el tiempo es más largo: una revisión de la evidencia clínica reporta que cerca del 90\u00A0% de las personas con fascitis plantar mejoran con cuidados sin cirugía, como estiramientos y plantillas, muchas veces en 3 a 6\u00A0meses.',
        'Lo que sí puedes medir antes es si los ejercicios están cambiando algo. La flexibilidad de la pantorrilla puede empezar a cambiar en pocas semanas de estiramiento diario. Volver a medir la resistencia de la pantorrilla y el equilibrio cada pocas semanas te da un número que mirar, en lugar de adivinar si se siente diferente. Los ejercicios de esta página y los de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) trabajan los mismos tejidos, así que hacerlos por estar de pie también cubre el camino más común hacia la fascitis plantar.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: '¿Por qué me duelen más los pies al final del turno de pie que al principio?',
      a: 'La fascia plantar, los músculos de la pantorrilla y las venas de la parte baja de la pierna aguantan solo cierto tiempo una carga fija y sostenida, y esa tolerancia se gasta en horas de estar de pie. Al estar quieto de pie, la gravedad acumula sangre en los pies y la parte baja de las piernas, lo que suma al dolor y la hinchazón que crecen durante el turno. Las pausas para caminar ayudan porque el bombeo de la pantorrilla sube la sangre.',
      cites: [CITE.waters],
    },
    {
      q: '¿El dolor de pies por estar de pie todo el día es lo mismo que la fascitis plantar?',
      a: 'No siempre. El dolor y el cansancio general por estar de pie son comunes y suelen quitarse con descanso. La fascitis plantar es un problema específico, con dolor agudo en el talón, muchas veces peor en los primeros pasos después de descansar. Estar de pie la mayor parte de la jornada es un factor de riesgo independiente para la fascitis plantar, con 3,6 veces las probabilidades en un estudio de casos y controles, así que están relacionados pero no son lo mismo.',
      cites: [CITE.riddle],
    },
    {
      q: '¿Las medias de compresión ayudan con el dolor de pies por estar de pie?',
      a: 'En un ensayo con 40 guardias de seguridad que trabajaban de pie turnos de 12\u00A0horas, asignados al azar a calcetines normales o a uno de dos grupos con medias de compresión, tanto las de 15-20\u00A0mmHg como las de 20-30\u00A0mmHg evitaron el aumento de molestias en pies y piernas, cansancio e hinchazón que se vio con calcetines normales. Es una de las pocas medidas específicas para estar de pie con un ensayo controlado detrás, aunque el estudio fue pequeño y solo con hombres.',
      cites: [CITE.garcia],
    },
    {
      q: '¿Es normal que me duelan los pies después de un turno de pie de 8 o 12 horas?',
      a: 'Algo de cansancio y dolor después de un turno largo de pie es común y coincide con lo que reporta la investigación en salud laboral. Una revisión de 2015 encontró que estar de pie mucho tiempo se relaciona con molestias musculares y cansancio en muchos trabajos de pie. Que sea común no significa que debas ignorarlo a largo plazo: la misma revisión señala que los tapetes para el piso, las medias de compresión y mejores zapatos reducen estos problemas de forma medible.',
      cites: [CITE.waters],
    },
    {
      q: '¿Qué es lo primero que debo probar para el dolor de pies por estar de pie?',
      a: 'De las opciones de autocuidado que revisa esta página, el estiramiento de pantorrilla y de fascia plantar tiene el grado de evidencia más alto (A) en la guía de 2023 para el dolor de talón, y las medias de compresión tienen el ensayo controlado más sólido para las molestias por estar de pie. Empezar con estiramientos de pantorrilla diarios y probar medias de compresión en tu próximo turno largo cubre las dos cosas.',
      cites: [CITE.guideline, CITE.garcia],
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída',
      'no puedes apoyar el pie, o cojeas',
      'viene con entumecimiento, hormigueo, ardor, hinchazón o calor',
      'el talón o el pie está rojo, o tienes fiebre o te sientes mal',
      'te despierta por la noche',
      'es un dolor agudo, o empeora aunque hayas bajado la carga',
      'el dolor está en un solo punto y empeora con la actividad, lo que puede ser señal de una fractura por estrés y no de cansancio por estar de pie',
      'una pierna o un pie se hinchó de repente y está adolorido, rojo o caliente',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
      'el dolor no ha bajado después de varias semanas con menos carga, mejor calzado y los ejercicios de esta página',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: `No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. Walkito arma un plan una semana a la vez en torno a una meta. Si tu dolor de pies por estar de pie es peor en la mañana, la primera meta es la misma que para el dolor de talón: dolor de 1/10 o menos por la mañana durante ${PROGRAM.painFreeDays}\u00A0días seguidos. Si además tienes los arcos planos, el arco tiene su propia meta y sus propios ejercicios.`,
    more: [
      `Eliges ${DAYS} días a la semana y sesiones de ${MINUTES}\u00A0minutos. Cada ${PROGRAM.testEveryDays}\u00A0días (y después cada ${PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas tu primera meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver si el trabajo está sirviendo de algo.`,
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si el dolor es agudo, empeora o no te deja dormir, consulta primero a un profesional de la salud.',
    ],
    cta: `Empieza con ${PROGRAM.sessionMinutes[0]}\u00A0minutos al día.`,
  },
  crumb: 'Dolor de pies por estar de pie',
  campaign: 'guide-standing-es',
};
