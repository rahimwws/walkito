import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Dolor de pies en cocineros y chefs (ES). Translated from
 * `articles/chefs-foot-pain.ts`, written around the Spanish queries
 * «dolor de pies cocineros», «dolor de pies chef», «zapatos para cocina».
 * Figures, grades, hedges and citations are identical to the English page.
 */

export const CHEFS_ES: Guide = {
  lang: 'es',
  page: 'chefs',
  mainSource: CITE.bellSlipFootwear,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolor de pies en cocineros: zapatos, tapetes y ejercicios',
  description:
    'Por qué duelen los pies en la cocina: qué dicen los estudios de zapatos antideslizantes, zuecos o tenis, tapetes y ejercicios cortos para el turno.',
  h1: 'Dolor de pies en chefs y trabajadores de cocina: qué ayuda en los turnos largos',
  lede:
    'El dolor de pies en cocineros suele venir de muchas horas de pie y caminando sobre pisos duros de cocina, y para el dolor de talón las opciones con mejor evidencia son los estiramientos de pantorrilla y de fascia plantar, que la guía de 2023 para el dolor de talón califica con **A**, y el trabajo de fuerza de pantorrilla, con **B** (Koc y colegas, 2023). Los zapatos antideslizantes son cuestión de seguridad, no de dolor: en un ensayo aleatorizado en 226 distritos escolares, darles sin costo zapatos antideslizantes a los trabajadores de servicio de comida bajó las reclamaciones por lesiones por resbalón de 3,54 a 1,18 por cada 10\u00A0000 meses-trabajador (Bell y colegas, 2019). Ningún estudio ha probado si los zuecos o algún zapato de cocina reducen el dolor de pies en sí.',
  intro: [
    'Esta página trata el lado de la cocina del problema: pisos duros, mojados y grasosos, las prisas durante el servicio y zapatos elegidos por su agarre. Para el dolor de pies por estar de pie en cualquier trabajo, ve [por qué me duelen los pies después de estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/). Para los turnos de hospital, ve [dolor de pies en enfermeras](/es/dolor-de-pies-por-estar-de-pie/). Si tu talón duele más con los primeros pasos después del reposo, ese patrón apunta a [fascitis plantar](/es/fascitis-plantar/).',
  ],
  toc: true,
  takeaways: [
    'En una encuesta a 128 trabajadores de cocina en El Cairo, el 46,1\u00A0% reportó dolor de pies en los últimos 12\u00A0meses, solo por detrás de la zona lumbar y la rodilla (Abdelsalam y colegas, 2023).',
    'En 475 trabajadores de 36 restaurantes de comida rápida de Estados Unidos, usar zapatos antideslizantes se asoció con una tasa de resbalones un 54\u00A0% menor (Verma y colegas, 2011).',
    'En un ensayo aleatorizado en servicios de comida escolares, las reclamaciones por lesiones por resbalón bajaron de 3,54 a 1,18 por cada 10\u00A0000 meses-trabajador donde los trabajadores recibieron zapatos antideslizantes gratis, mientras que en el grupo de comparación subieron de 2,01 a 2,30 (Bell y colegas, 2019).',
    'Estar de pie la mayor parte de la jornada laboral multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles con 50 casos y 100 controles, y una pantorrilla tensa las multiplicó por 23,3 (Riddle y colegas, 2003).',
    'La guía de 2023 para el dolor de talón califica con **A** los estiramientos de pantorrilla y de fascia plantar, y con **B** el entrenamiento de fuerza. Las plantillas solas reciben **B en contra** (Koc y colegas, 2023).',
  ],
  sections: [
    {
      h2: '¿Por qué les duelen tanto los pies a los cocineros después de un turno?',
      keyFact: 'En 128 trabajadores de cocina, el 46,1\u00A0% reportó dolor de pies en los últimos 12\u00A0meses, por detrás de la zona lumbar (64,8\u00A0%) y la rodilla (46,9\u00A0%) (Abdelsalam y colegas, 2023).',
      paragraphs: [
        '**El trabajo en cocina junta lo que peor llevan los pies: horas de pie, caminatas cortas y rápidas, pisos duros y poco descanso.** En una encuesta a 128 trabajadores de cocina de dos grandes residencias estudiantiles en El Cairo, el 90,6\u00A0% reportó un problema musculoesquelético en los últimos 12\u00A0meses. El pie fue la tercera zona más afectada, con un 46,1\u00A0%, justo por detrás de la rodilla, con un 46,9\u00A0%.',
        'Las cifras varían mucho entre estudios. En 307 chefs de restaurantes en Pakistán, la mayoría con jornadas de 9 a 12\u00A0horas, 26 reportaron dolor de tobillo o de pie, muchos menos que los 101 que reportaron dolor lumbar y de rodilla (Iqbal y colegas, 2023). Las encuestas usaron grupos y preguntas distintos, así que tómalas como una imagen aproximada, no como una tasa precisa.',
        'Hay un vínculo que sí aparece con claridad. En 415 trabajadores de cocinas de hoteles y restaurantes en Etiopía, estar de pie mucho tiempo se asoció con 3,81 veces las probabilidades de tener un problema musculoesquelético relacionado con el trabajo (Abebaw y colegas, 2024). Ese estudio contó el dolor en cualquier parte del cuerpo, no solo en los pies.',
      ],
      sourceNote:
        'Abdelsalam 2023 y Abebaw 2024 usaron el Cuestionario Nórdico Musculoesquelético para la prevalencia a 12\u00A0meses. Abebaw 2024: razón de probabilidades ajustada de 3,81 (IC del 95\u00A0%: de 1,58 a 9,17) para estar de pie mucho tiempo. Iqbal 2023 usó una muestra por conveniencia de 307 chefs (285 hombres).',
      cites: [CITE.abdelsalamKitchen, CITE.iqbalChefs, CITE.abebawKitchen],
    },
    {
      h2: '¿El dolor de pies en la cocina es fascitis plantar?',
      keyFact: 'Estar de pie la mayor parte de la jornada laboral multiplicó por 3,6 las probabilidades de fascitis plantar, y una flexibilidad limitada del tobillo las multiplicó por 23,3 (Riddle y colegas, 2003).',
      paragraphs: [
        'Muchas veces es cansancio y molestia general que se alivia con una noche de descanso. Pero el trabajo en cocina reúne los dos factores de riesgo más fuertes de un estudio de casos y controles con 50 personas con fascitis plantar y 100 sin ella: estar de pie la mayor parte de la jornada laboral multiplicó las probabilidades por 3,6, y una [pantorrilla tensa](/es/pantorrillas-tensas/) que limita cuánto se dobla el tobillo las multiplicó por 23,3.',
        'La fascitis plantar tiene un patrón típico: dolor agudo bajo el talón en los primeros pasos de la mañana o después de estar sentado, que se calma al caminar y vuelve después de un día largo. Ese patrón se explica en [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/), y la guía completa de ejercicios está en [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
        'Otros patrones apuntan a otra cosa:',
        {
          list: [
            'ardor bajo la parte delantera de la planta a mitad del servicio: ve [dolor en la planta del pie](/es/metatarsalgia-dolor-planta-del-pie/)',
            'un dolor profundo, como de moretón, en el centro del talón que empeora cuanto más tiempo estás de pie en un piso duro: ve [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/)',
            'arcos que duelen o se sienten aplanados al final del turno: ve [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/)',
          ],
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Zuecos o zapatos antideslizantes: ¿qué dice la evidencia?',
      keyFact: 'Los zapatos antideslizantes gratis bajaron las reclamaciones por lesiones por resbalón de 3,54 a 1,18 por cada 10\u00A0000 meses-trabajador en un ensayo aleatorizado en 226 distritos escolares (Bell y colegas, 2019).',
      paragraphs: [
        '**La evidencia más sólida sobre calzado de cocina trata de resbalones, no de pies adoloridos.** Un estudio en Estados Unidos siguió durante tres meses a 475 trabajadores de 36 restaurantes de comida rápida. Quienes usaban zapatos con una marca de antideslizante en la suela reportaron una tasa de resbalones un 54\u00A0% menor que quienes no los usaban, después de tener en cuenta la edad, el sexo, el peso corporal y otros factores (Verma y colegas, 2011).',
        'Después, un ensayo aleatorizado lo probó como programa. Se eligieron al azar distritos escolares para darles zapatos antideslizantes sin costo a sus trabajadores de servicio de comida. Las reclamaciones por lesiones por resbalón bajaron de 3,54 a 1,18 por cada 10\u00A0000 meses-trabajador en esos distritos, y subieron de 2,01 a 2,30 en los demás (Bell y colegas, 2019).',
        'Los zapatos se desgastan. En esos mismos trabajadores de restaurante, quienes ya usaban zapatos antideslizantes y cambiaron a un par nuevo tuvieron después una tasa de resbalones un 55\u00A0% menor, y los zapatos con menos de seis meses de uso funcionaron moderadamente mejor que los más viejos (Verma y colegas, 2014). El estudio no pudo decir exactamente cuándo cambiarlos.',
        '**No encontramos ningún estudio que compare zuecos con tenis, ni un zapato de cocina con otro, para el dolor de pies.** Para el dolor de talón en general, la guía de 2023 califica las [plantillas](/es/plantillas-o-ejercicios/) solas con **B en contra**: la evidencia dice que no hay que confiar solo en ellas. Un orden sensato: elige un zapato con suela antideslizante que te quede bien hoy y no te apriete los dedos, cámbialo cuando la suela esté gastada, y haz los estiramientos y el trabajo de fuerza de abajo para el dolor en sí.',
      ],
      table: {
        caption: 'Para qué sirve cada opción',
        head: ['Opción', 'Ayuda con', 'Evidencia'],
        rows: [
          ['Zapatos antideslizantes', 'Resbalones y lesiones por resbalón', 'Cohorte y ensayo aleatorizado'],
          ['Zuecos o tenis', 'No probado para el dolor', 'No encontramos ninguna'],
          ['Plantillas solas', 'Dolor de talón', 'Grado B en contra'],
          ['Tapetes antifatiga', 'Molestias por estar de pie', 'Algo, no en cocinas'],
          ['Medias de compresión', 'Molestias e hinchazón en las piernas', 'Ensayos pequeños, no en cocinas'],
          ['Estiramientos de pantorrilla y fascia', 'Dolor de talón', 'Grado A'],
        ],
      },
      sourceNote:
        'Verma 2011: el uso de zapatos antideslizantes se determinó por una marca en la suela; tasa de resbalones reportada un 54\u00A0% menor (IC del 95\u00A0%: de 37 a 64\u00A0%). Bell 2019: ensayo aleatorizado por conglomerados de dos brazos, servicio de comida de preescolar a 12.º grado; razón de probabilidades ajustada de 0,33 (IC del 95\u00A0%: de 0,17 a 0,63). Verma 2014: razón de tasas de 0,45 (IC del 95\u00A0%: de 0,23 a 0,89) después de cambiar a un par nuevo.',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear, CITE.vermaShoeAge, CITE.guideline],
    },
    {
      h2: '¿En qué parte de la cocina ocurren más resbalones?',
      keyFact: 'Los trabajadores de restaurante resbalaron 14,6 veces más al caminar sobre un piso contaminado y 2,9 veces más al ir con prisa (Verma y colegas, 2011).',
      paragraphs: [
        'En el estudio de restaurantes de Estados Unidos, la mayoría de los resbalones ocurrieron junto al **fregadero y la freidora**, las zonas que los trabajadores también calificaron como las más resbalosas, y había líquido o grasa en el piso en más del 70\u00A0% de los resbalones (Verma y colegas, 2010).',
        'Un segundo análisis de los mismos trabajadores se fijó en el momento de cada resbalón. La tasa de resbalones fue 14,6 veces mayor al caminar sobre un piso contaminado, 2,9 veces mayor al ir con prisa y 1,7 veces mayor al estar distraído. Los zapatos antideslizantes redujeron el efecto de las prisas y del piso sucio (Verma y colegas, 2011).',
        'También importa si el empleador da los zapatos. Donde el empleador daba zapatos antideslizantes, el 91\u00A0% de los trabajadores los usaba. Donde ni se daban ni se fomentaban, los usaba el 53,5\u00A0% (Verma y colegas, 2010). Si tu cocina tiene un programa de calzado, vale la pena aprovecharlo.',
      ],
      cites: [CITE.vermaSlipExperience, CITE.vermaRushing],
    },
    {
      h2: '¿Los tapetes antifatiga y las medias de compresión ayudan en la cocina?',
      paragraphs: [
        'Una revisión de 2015 sobre la investigación del trabajo de pie menciona los tapetes de piso, las medias de compresión y el calzado con soporte entre las opciones con algo de evidencia de menos molestias y cansancio (Waters y Dick, 2015). Nada de esa investigación se hizo en cocinas. Un tapete en una estación donde pasas mucho tiempo de pie, como el pase o una mesa de preparación, es algo razonable para probar. Elige uno que quede plano y no se mueva en un piso mojado, para que no se convierta en un riesgo de tropiezo por sí mismo.',
        'Las medias de compresión no se han probado en cocinas. En un ensayo aleatorizado pequeño con 40 guardias de seguridad que trabajaban de pie turnos de unas 12\u00A0horas, las medias de 15 a 20\u00A0mmHg y las de 20 a 30\u00A0mmHg evitaron el aumento de molestias e hinchazón en las piernas que se vio con calcetines normales (Garcia y colegas, 2023). Todos los guardias eran hombres y ninguno era cocinero, así que tómalo como algo que probablemente aplica, no como prueba para cocinas.',
        '**Los tapetes y las medias ayudan con la comodidad durante el turno. No sustituyen los estiramientos ni el trabajo de fuerza**, que son lo que la guía para el dolor de talón califica más alto.',
      ],
      cites: [CITE.waters, CITE.garcia, CITE.guideline],
    },
    {
      h2: '¿Qué ejercicios ayudan a los cocineros con el dolor de pies?',
      keyFact: 'La guía de 2023 para el dolor de talón califica con A, su grado más alto, los estiramientos de pantorrilla y de fascia plantar, y con B el entrenamiento de fuerza (Koc y colegas, 2023).',
      paragraphs: [
        'Los ejercicios son los de la [guía de fascitis plantar](/es/ejercicios-fascitis-plantar/), con las mismas dosis iniciales. Los estiramientos solo necesitan una pared o una silla, así que caben en un descanso, antes del servicio o después de quitarte los zapatos de trabajo. Deja el trabajo de fuerza para los días libres o para después del turno.',
        'Los grados de la guía son para la fascitis plantar y no se probaron en trabajadores de cocina, pero los tejidos son los mismos que un turno de cocina carga todo el día. Si un ejercicio lleva tu dolor a 6 de 10 o más, detente por ese día.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto. Una pantorrilla tensa fue el factor de riesgo más fuerte en un estudio de casos y controles de 2003.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'La mayoría de los días de turno',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared o en una mesa de acero. Mantén la pierna de atrás estirada, el talón de atrás plano en el piso y la cadera hacia adelante. Hazlo en una parte seca del piso, no junto al fregadero.',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón de atrás plano, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'La mayoría de los días de turno',
          feel: 'Un estiramiento cerca del talón',
          how: 'Toma la misma posición, mantén el talón de atrás plano en el piso y luego dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás plano, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pie',
          often: 'La mayoría de los días, a primera hora de la mañana',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza, 3 por semana, nunca dos seguidos',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies planos y empuja hacia arriba con la parte delantera de los pies. Las manos sobre las rodillas agregan resistencia. Con la rodilla doblada, esto trabaja sobre todo el sóleo, casi sin carga sobre el talón, así que va bien en un descanso sobre una caja volteada o en una silla del área de personal.',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja hacia arriba con la parte delantera de los pies',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza, cuando las elevaciones sentado ya se sientan fáciles',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies, sube en línea recta sobre los dedos gordos y luego baja despacio. Sujétate de una pared o un barandal. Hazlas en casa o después del turno, no en un piso de cocina mojado.',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube en línea recta sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube sobre las puntas de los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Automasaje plantar',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Está aquí por comodidad después del turno.' },
          dose: '1\u00A0minuto',
          often: 'Después de un turno largo o en los días libres',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje, con presión firme. Si haces muecas de dolor, afloja.',
          stop: 'El dolor llega a 6 de 10',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Cómo meter los ejercicios en un turno de cocina?',
      paragraphs: [
        'Un turno partido o un doble turno deja poco espacio para una rutina, así que asocia los ejercicios a algo que ya haces:',
        {
          list: [
            '**Si tienes 3\u00A0minutos:** el estiramiento de pantorrilla y el estiramiento de sóleo, 30\u00A0segundos por lado, antes del servicio o cuando te cambias de zapatos. Eso cubre la pantorrilla tensa, el factor de riesgo más fuerte en el estudio de casos y controles.',
            '**Si tienes 5\u00A0minutos:** agrega el estiramiento plantar. Los estiramientos son la parte que la guía de 2023 califica con **A**.',
            '**Si tienes 10\u00A0minutos:** en un día libre o después del turno, agrega las elevaciones de talón y un minuto de automasaje plantar. El trabajo de fuerza tiene grado **B**.',
          ],
        },
        'Los descansos en sí parecen importar. En un estudio con 1909 trabajadores de cocina en Corea, las mujeres que reportaron descansos insuficientes tuvieron 1,68 veces las probabilidades de problemas musculoesqueléticos (Park y colegas, 2021). El vínculo se reportó para las mujeres, y una encuesta así no puede demostrar causa y efecto. Aun así, vale la pena defender unos minutos sentado entre rachas de trabajo.',
        'Para la fascitis plantar en general, cerca del 90\u00A0% de las personas mejora con tratamiento sin cirugía, aunque puede tardar meses; ve [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/). La guía de 2023 también sugiere ajustar la carga sobre los pies en el trabajo, un consejo con grado **E** porque se basa en la teoría, no en ensayos.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.parkRestBreaks, CITE.latt],
    },
  ],
  faq: [
    {
      q: '¿Por qué me duelen tanto los pies después de trabajar en una cocina?',
      cites: [CITE.abdelsalamKitchen, CITE.riddle],
      a: 'Los turnos de cocina combinan horas de pie, caminatas cortas y rápidas y pisos duros. En una encuesta a 128 trabajadores de cocina, el 46,1\u00A0% reportó dolor de pies en el último año. Estar de pie la mayor parte de la jornada laboral también multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles. Estirar a diario la pantorrilla y la fascia plantar trabaja justo los tejidos que más se cargan.',
    },
    {
      q: '¿Los zuecos son buenos para chefs con dolor de pies?',
      cites: [CITE.guideline],
      a: 'Nadie lo sabe con seguridad: no encontramos ningún estudio que compare zuecos con tenis u otros zapatos de cocina para el dolor de pies. Lo que más importa para la seguridad es una suela antideslizante. Para el dolor de talón, la guía de 2023 califica las plantillas solas con B en contra, así que combina el zapato que mejor te quede con estiramientos de pantorrilla y de fascia plantar, que califica con A.',
    },
    {
      q: '¿Los zapatos antideslizantes de verdad funcionan en restaurantes?',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear],
      a: 'Para los resbalones, sí. En 475 trabajadores de 36 restaurantes de comida rápida de Estados Unidos, los zapatos antideslizantes se asociaron con una tasa de resbalones un 54\u00A0% menor. En un ensayo aleatorizado en servicios de comida escolares, los zapatos antideslizantes gratis bajaron las reclamaciones por lesiones por resbalón de 3,54 a 1,18 por cada 10\u00A0000 meses-trabajador. Estos estudios midieron resbalones, no dolor de pies.',
    },
    {
      q: '¿Cada cuánto hay que cambiar los zapatos de cocina?',
      cites: [CITE.vermaShoeAge],
      a: 'No hay una regla probada. En un estudio de 475 trabajadores de restaurante, los zapatos antideslizantes con menos de seis meses de uso fueron moderadamente más eficaces contra los resbalones que los más viejos, y quienes ya usaban zapatos antideslizantes y cambiaron a un par nuevo resbalaron un 55\u00A0% menos. Revisa la suela y cambia los zapatos cuando el dibujo esté liso por el desgaste.',
    },
    {
      q: '¿Los tapetes antifatiga ayudan a los trabajadores de cocina?',
      cites: [CITE.waters],
      a: 'Probablemente, para la comodidad. Una revisión de 2015 sobre el trabajo de pie menciona los tapetes de piso entre las opciones con algo de evidencia de menos molestias y cansancio, pero nada de esa investigación se hizo en cocinas. Usa un tapete donde pasas mucho tiempo de pie sin moverte, y elige uno que quede plano y no se deslice en un piso mojado.',
    },
    {
      q: '¿Las medias de compresión ayudan a los chefs en turnos largos?',
      cites: [CITE.garcia],
      a: 'Puede que sí. En un ensayo con 40 guardias de seguridad que trabajaban de pie turnos de unas 12\u00A0horas, las medias de 15 a 20\u00A0mmHg y las de 20 a 30\u00A0mmHg evitaron el aumento de molestias e hinchazón en las piernas que se vio con calcetines normales. El ensayo fue pequeño y no se hizo en cocinas, y las medias no sustituyen los estiramientos ni el trabajo de fuerza.',
    },
    {
      q: '¿Se puede tener fascitis plantar por trabajar de chef?',
      cites: [CITE.riddle],
      a: 'El trabajo en cocina tiene factores de riesgo conocidos. En un estudio de casos y controles con 50 personas con fascitis plantar y 100 sin ella, estar de pie la mayor parte de la jornada laboral multiplicó las probabilidades por 3,6 y una pantorrilla tensa las multiplicó por 23,3. Ningún estudio ha medido la fascitis plantar en chefs específicamente.',
    },
    {
      q: '¿Qué puedo hacer por los pies adoloridos durante un servicio con mucho trabajo?',
      cites: [CITE.guideline, CITE.parkRestBreaks],
      a: 'Cambia el peso de un pie a otro, siéntate en los descansos cuando puedas y haz un estiramiento de pantorrilla de 30\u00A0segundos contra una pared en una parte seca del piso. En trabajadores de cocina en Corea, las mujeres con descansos insuficientes tuvieron 1,68 veces las probabilidades de problemas musculoesqueléticos. Deja las elevaciones de talón y las sesiones más largas para después del turno o los días libres.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de un resbalón, una caída, una torcedura o de que algo pesado te cayera en el pie',
      'no puedes apoyar el pie o estás cojeando',
      'el pie está entumecido, con hormigueo o ardor, o hinchado, rojo o caliente',
      'tienes en el pie una quemadura, una cortada o una ampolla que no mejora, sobre todo si tienes diabetes o menos sensibilidad en los pies',
      'una pantorrilla o una pierna de repente duele y se hincha',
      'el dolor te despierta por la noche o está presente en reposo',
      'el dolor está en un punto muy concreto y empeora con la actividad, lo que puede ser el patrón de una fractura por estrés',
      'el dolor no se ha aliviado después de varias semanas con mejores zapatos, más descansos y los ejercicios de esta página',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie en iPhone y Android. No conoce tu horario de turnos, así que tú eliges cuándo van las sesiones: antes del servicio, entre turnos o en tus días libres.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas cómo sientes los pies, y el plan se ajusta a eso. Cada 14\u00A0días, una prueba corta revisa la resistencia de la pantorrilla, el sostén del arco y el equilibrio. Walkito no diagnostica. Si el dolor es agudo, va empeorando o no te deja dormir, consulta primero a un profesional de la salud.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['standing', 'nurses', 'heelPain'],
  crumb: 'Dolor de pies en cocineros',
  campaign: 'guide-chefs-foot-pain-es',
};
