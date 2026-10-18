import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/hairdressers-foot-pain.ts` (2026-10-18), written
 * around the query «dolor de pies en estilistas» (also «peluqueros»).
 * Figures, doses, grades, hedges and CITE keys are identical to the English
 * page. Numbers and units are joined with a non-breaking space, as in `es.ts`.
 * Every internal link has a Spanish version, so none were removed.
 */

export const HAIRDRESSERS_ES: Guide = {
  lang: 'es',
  page: 'hairdressers',
  mainSource: CITE.kozakHairdressing,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolor de pies en estilistas: zapatos, tapetes y ejercicios',
  description:
    'Por qué les duelen los pies a estilistas y peluqueros, qué dicen los estudios, qué zapatos, tapetes y bancos ayudan y ejercicios cortos entre clientes.',
  h1: 'Dolor de pies en estilistas: qué ayuda cuando pasas el día de pie en el mismo lugar',
  lede:
    'El dolor de pies en estilistas y peluqueros viene sobre todo de estar de pie sin moverte junto a la silla durante horas, no de caminar, así que las opciones con algo de evidencia apuntan a estar de pie en un solo lugar: un piso o un zapato acolchado, medias de compresión de baja presión y un minuto de trabajo de pantorrilla entre clientes. En un estudio con 384 estilistas y 384 personas de otros trabajos, el 49,5\u00A0% de los estilistas reportó dolor de rodilla o de pie, frente al 38,3\u00A0% del grupo de comparación (Mishra y Sarkar, 2021).',
  intro: [
    'La investigación sobre estilistas se fija sobre todo en hombros, cuello, muñecas y espalda. Los pies reciben mucha menos atención, y esta página te dice dónde los datos son escasos. Cubre lo que se sabe sobre los pies y las piernas de los estilistas, la evidencia sobre estar de pie que aplica al trabajo en el salón y cómo acomodar los ejercicios en los ratos entre clientes. Para el dolor general por estar de pie, mira [por qué me duelen los pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/). Para turnos con mucha caminata, mira [dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/).',
  ],
  toc: true,
  takeaways: [
    'De 384 estilistas en la India, el 49,5\u00A0% reportó dolor de rodilla o de pie en los últimos 12\u00A0meses, frente al 38,3\u00A0% de 384 personas de otros trabajos. El estudio contó rodilla y pie juntos (Mishra y Sarkar, 2021).',
    'Una revisión exploratoria de 2019 con 44 estudios encontró solo 5 que reportaron dolor de pies en estilistas, con cifras de 10 a 44\u00A0%. La mayoría de los estudios se fijó en la espalda, el cuello, los hombros y las manos, y estar de pie fue uno de los factores de riesgo más comunes (Kozak y colegas, 2019).',
    'En un ensayo cruzado aleatorizado con 108 estilistas, las medias de compresión de 15 a 20\u00A0mmHg bajaron en un 12\u00A0% la puntuación de dolor e hinchazón de piernas y en 19\u00A0mL el volumen de la parte baja de la pierna, en promedio (Blazek y colegas, 2013).',
    'Una revisión de 2018 con 10 estudios encontró evidencia moderada de que los pisos más blandos y las plantillas acolchadas reducen las molestias y el cansancio en personas que trabajan de pie (Speed y colegas, 2018).',
    'Una pantorrilla tensa fue el factor de riesgo más fuerte de fascitis plantar en un estudio de casos y controles de 2003, al multiplicar por 23,3 las probabilidades, y estar de pie la mayor parte de la jornada las multiplicó por 3,6 (Riddle y colegas, 2003).',
  ],
  sections: [
    {
      h2: '¿Qué tan común es el dolor de pies en estilistas?',
      keyFact: 'Cinco estudios de una revisión exploratoria de 2019 reportaron dolor de pies en estilistas, de 10 a 44\u00A0% (Kozak y colegas, 2019).',
      paragraphs: [
        '**El dolor de pies y piernas es común en estilistas, pero se ha estudiado mucho menos que el dolor de hombros o de espalda.** Una revisión exploratoria de 2019 reunió 44 estudios sobre problemas musculoesqueléticos en la peluquería. Solo 5 reportaron dolor de pies, y las cifras fueron de 10 a 44\u00A0%. El rango es amplio porque los estudios usaron preguntas, países y periodos distintos.',
        'El estudio más grande con grupo de comparación encuestó a 384 estilistas y 384 personas de otros trabajos en dos ciudades de la India. El dolor de rodilla o de pie fue la molestia más común en los dos grupos: 49,5\u00A0% de los estilistas frente a 38,3\u00A0% de los demás. El estudio contó rodilla y pie como una sola categoría, así que no puede decir cuánto de eso fue solo de los pies.',
        'Un estudio del Reino Unido con 147 estilistas y 67 personas de otros trabajos encontró dolor de pierna o de pie relacionado con el trabajo mucho más a menudo en los estilistas. Las probabilidades fueron 31\u00A0veces mayores, pero el rango estadístico fue muy amplio, de unas 4 a 267\u00A0veces, así que el tamaño real de la diferencia es incierto. En un estudio turco de 2023, después de la zona lumbar, las zonas más dolorosas fueron las piernas por debajo de la rodilla: 36,9\u00A0% del lado derecho y 32,5\u00A0% del izquierdo.',
      ],
      sourceNote:
        'Mishra y Sarkar (2021): estudio transversal, 384 estilistas y 384 controles, prevalencia en 12\u00A0meses, rodilla y pie en una sola categoría. Bradshaw y colegas (2011): cuestionario aplicado por entrevistador, razón de probabilidades ajustada de 31,0 (IC del 95\u00A0%: 3,8 a 267,4). Ince Parpucu y colegas (2023): Cuestionario de Molestias Musculoesqueléticas de Cornell, última semana.',
      cites: [CITE.kozakHairdressing, CITE.mishraHairdressers, CITE.bradshawHairdressers, CITE.inceParpucuHairdressers],
    },
    {
      h2: '¿Por qué duele más estar de pie en un solo lugar que caminar?',
      paragraphs: [
        'El día de un estilista es distinto del de una enfermera. No recorres grandes distancias. Te paras junto a la silla, te mueves un poco, te inclinas y vuelves a quedarte de pie. Cuando estás de pie sin moverte:',
        {
          list: [
            'Los músculos de la pantorrilla se quedan en una sola posición, así que dejan de bombear la sangre de regreso hacia arriba por la pierna.',
            'La sangre y el líquido se acumulan en la parte baja de las piernas y en los pies, y por eso los zapatos se sienten más apretados al final del día.',
            'La almohadilla del talón y la fascia plantar, la banda que está debajo del arco, cargan un peso constante sin descanso.',
          ],
        },
        'Los estudios de laboratorio muestran qué tan rápido se acumula esto. Una revisión de 2017 con 25 estudios de laboratorio encontró que los síntomas lumbares se volvían clínicamente relevantes después de unos 71\u00A0minutos de pie en promedio, y después de 42\u00A0minutos en personas propensas al dolor por estar de pie. Un solo tinte o corte puede durar más que eso. Una revisión de 2015 sobre el trabajo de pie relacionó estar de pie mucho tiempo con dolor lumbar y de piernas, molestias y cansancio en muchos trabajos.',
        'En un estudio de 2023 con estilistas turcos, quienes reportaron cansancio en las piernas también tenían más dolor en las rodillas y en la parte baja de las piernas, y peores puntuaciones de energía y movilidad. **La hinchazón también se puede medir:** en 38 estilistas, el contorno del tobillo pasó de 21,1\u00A0cm en la mañana a 22,1\u00A0cm al final de un día sin compresión.',
      ],
      cites: [CITE.coenen, CITE.waters, CITE.inceParpucuHairdressers, CITE.agleHosiery],
    },
    {
      h2: '¿La postura junto a la silla afecta tus pies?',
      paragraphs: [
        'Los estudios sobre la postura de los estilistas se centran en la espalda y los brazos, no en los pies. Una revisión exploratoria reportó que los estilistas a menudo se inclinan hacia adelante o giran el tronco al cortar y al lavar, y que en un estudio de medición, cortar mantuvo la columna inclinada hacia adelante durante el 66\u00A0% del tiempo de la tarea. Inclinarte durante mucho tiempo suele llevar tu peso hacia la parte delantera del pie.',
        'Ningún estudio ha medido cómo cambia la postura en el salón la carga sobre los pies de los estilistas. Lo que sí puedes controlar es sencillo: sube o baja la silla del cliente para no tener que inclinarte, reparte el peso entre los dos pies y cambia de postura cada pocos minutos. En un estudio de laboratorio con cuatro horas de pie, las personas que cambiaban más su peso de un pie a otro también reportaron más molestias, así que cambiar de postura a cada rato puede ser una señal de que las molestias van en aumento, y una buena pista para tomar un descanso corto (Wiggermann y Keyserling, 2013).',
        'Si te duelen los pies junto con la espalda, la relación va en los dos sentidos. [Pie plano y dolor de espalda](/es/pie-plano-y-dolor-de-espalda/) explica lo que dice la investigación.',
      ],
      cites: [CITE.kozakHairdressing, CITE.wiggermannMats],
    },
    {
      h2: '¿Cuáles son los mejores zapatos para estilistas?',
      paragraphs: [
        '**Ningún estudio ha comparado tipos de zapato para estilistas.** Los consejos sobre zapatos que encuentras en internet vienen de marcas de calzado o de clínicas, no de ensayos en salones. Lo que sí respalda la investigación más amplia sobre estar de pie es la amortiguación: una revisión de 2018 con 10 estudios encontró evidencia moderada de que las plantillas acolchadas y los pisos más blandos reducen las molestias y el cansancio en personas que trabajan de pie, y evidencia limitada de que las plantillas funcionan mejor que los tapetes.',
        'En la práctica, busca:',
        {
          list: [
            'Una suela acolchada y algo de soporte para el arco, para que el talón y el arco no carguen todo el impacto de un piso duro.',
            'Un zapato cerrado que no apriete los dedos. El dolor entre los dedos puede ser un [neuroma de Morton](/es/neuroma-de-morton/).',
            'Un tacón bajo y estable. Los tacones altos ponen más peso en la parte delantera del pie.',
            'Una suela antideslizante. Los pisos del salón se mojan y se ponen resbalosos.',
          ],
        },
        'Algunas personas cambian de zapatos a la mitad de un día largo. Ningún estudio lo ha probado, pero un zapato distinto reparte la carga de otra forma. Si ya tienes dolor de talón o de arco, las plantillas pueden hacer el día más cómodo, pero actúan sobre la comodidad, no sobre la pantorrilla ni el arco en sí. [Plantillas o ejercicios](/es/plantillas-o-ejercicios/) compara las dos opciones.',
      ],
      cites: [CITE.speedCushioning],
    },
    {
      h2: '¿Los tapetes antifatiga ayudan a los estilistas?',
      keyFact: 'Una revisión de 2018 con 10 estudios encontró evidencia moderada de que los pisos más blandos y las plantillas acolchadas reducen las molestias y el cansancio en quienes trabajan de pie (Speed y colegas, 2018).',
      paragraphs: [
        'Un tapete junto a tu silla es uno de los cambios más sencillos con evidencia detrás. En un estudio de laboratorio, las personas estuvieron cuatro horas de pie sobre cuatro tapetes antifatiga distintos y sobre un piso duro. Tres de los cuatro tapetes redujeron las molestias en comparación con el piso duro, pero los tapetes no se diferenciaron mucho entre sí.',
        'No toda la evidencia es positiva. En un pequeño estudio de 1994 con 5 personas, los tapetes redujeron el cansancio muscular solo en la zona lumbar, y solo con el más blando de dos tapetes. Los músculos de las piernas no mostraron cambios. **Así que un tapete ayuda con la comodidad, pero no reemplaza moverte y estirarte.**',
        'En el salón, pon el tapete donde de verdad te paras, detrás de la silla, y mantenlo plano para no tropezar con las orillas. El cabello y el agua pueden hacer que un tapete se vuelva resbaloso, así que bárrelo seguido.',
      ],
      cites: [CITE.speedCushioning, CITE.wiggermannMats, CITE.kimMats],
    },
    {
      h2: '¿Conviene que los estilistas usen un banco o un asiento para alternar?',
      paragraphs: [
        '**Ningún estudio ha probado si un banco reduce el dolor de pies en estilistas.** Sentarte le quita carga a los pies, y en estudios de oficina, alternar entre estar sentado y de pie redujo las molestias lumbares sin bajar el rendimiento en el trabajo (Karakolis y Callaghan, 2014). Esa es la mejor evidencia indirecta para incluir algunos ratos sentado.',
        'Un banco tiene su lado negativo. Un estudio alemán de postura, resumido en la revisión exploratoria de 2019, encontró que los estilistas que usaban un banco con ruedas inclinaban más la zona lumbar y levantaban las manos por encima de la altura del hombro con más frecuencia. Un banco demasiado bajo puede cambiar el dolor de pies por tensión en la espalda y los hombros.',
        'Una forma práctica de hacerlo: usa el banco en las tareas en las que alcanzas sin estirarte, como los detalles en la parte de atrás de la cabeza o las mechas en las secciones bajas, y quédate de pie para lo demás. Ajusta el banco a una altura en la que tus brazos queden por debajo del hombro. Si trabajas en el lavacabezas, siéntate cuando el espacio lo permita.',
      ],
      cites: [CITE.karakolis, CITE.kozakHairdressing],
    },
    {
      h2: '¿Qué ejercicios puedes hacer entre clientes?',
      keyFact: 'La guía clínica de 2023 para el dolor de talón le da al estiramiento de pantorrilla y de fascia plantar una A, su grado más alto, y al trabajo de fuerza una B (Koc y colegas, 2023).',
      paragraphs: [
        'Los ejercicios son los mismos que se usan para la [fascitis plantar](/es/fascitis-plantar/) y para el dolor general por estar de pie: estiramientos de pantorrilla, elevaciones de talón y un estiramiento de la fascia plantar. Lo que cambia para los estilistas es el momento. **Tienes ratos cortos entre clientes, así que elige uno o dos ejercicios por rato en lugar de una rutina completa.** Ningún estudio ha probado pausas con ejercicio para los pies de los estilistas, así que las dosis de aquí vienen de la guía principal sobre dolor de talón.',
        'La pantorrilla es lo que más importa. En un estudio de casos y controles, una pantorrilla tensa multiplicó por 23,3 las probabilidades de fascitis plantar, más que cualquier otro factor. Si algún ejercicio sube tu dolor a 6 de 10 o más, detente por ese día.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento una A, su grado más alto.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Apoya las manos en una pared o en el respaldo de tu estación. Mantén la pierna de atrás estirada, el talón de atrás pegado al piso y la cadera hacia adelante. Dos series en cada pierna toman unos dos minutos, así que caben en un rato entre clientes.',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón de atrás en el piso, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada y la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento una A, su grado más alto.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'En la misma posición, con el talón de atrás en el piso, dobla la rodilla de atrás hasta que sientas el estiramiento más abajo, cerca del talón. El sóleo, el músculo profundo de la pantorrilla, es el que te sostiene cuando estás de pie sin moverte, y solo se suelta con la rodilla doblada.',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás en el piso, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al trabajo de fuerza una B. Este paso no se probó por sí solo.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate sobre los dos pies, sube en línea recta sobre los dedos gordos y luego baja despacio. Sostente de la estación para mantener el equilibrio. Además de dar fuerza, esto hace que la pantorrilla bombee la sangre de regreso hacia arriba por la pierna, algo que no pasa cuando estás de pie sin moverte.',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube en línea recta sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie que sube sobre las puntas de los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al trabajo de fuerza una B. Este paso no se probó por sí solo.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Siéntate en tu banco con los pies planos y empuja hacia arriba con la parte delantera de los pies. Las manos sobre las rodillas agregan resistencia. Con la rodilla doblada, esto trabaja sobre todo el sóleo, casi sin carga sobre el talón. Es una buena opción cuando ya te duelen los talones.',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja hacia arriba con la parte delantera de los pies',
          alt: 'Una figura sentada que levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Movilidad de tobillo',
          evidence: { level: 'early', why: 'Trabaja la flexibilidad del tobillo, el factor de riesgo más fuerte de fascitis plantar en un estudio de casos y controles de 2003. No se probó por sí sola en un ensayo.' },
          dose: '2\u00A0series de 15, cada pierna',
          how: 'Con un pie adelante y otro atrás y las manos en una pared, lleva la rodilla de adelante hacia el frente, por encima de los dedos, mientras el talón se queda en el piso. Hazlo despacio, unos dos segundos en cada sentido. Mueve el tobillo después de un buen rato de pie sin moverte.',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla avanza por encima de los dedos y el talón se queda en el piso',
          alt: 'Una figura con un pie adelante y otro atrás que lleva la rodilla de adelante por encima de los dedos, con el tobillo resaltado',
        },
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar una A.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          how: 'Siéntate y cruza un pie sobre la rodilla contraria. Jala los dedos hacia atrás con suavidad hasta que sientas el estiramiento a lo largo del arco. Hazlo en un descanso en el que puedas sentarte, y antes de los primeros pasos de la mañana si es cuando más te duele el talón.',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás con suavidad hasta sentirlo en el arco',
          alt: 'Una figura sentada que jala hacia atrás los dedos de un pie, con el arco resaltado',
        },
      ],
      table: {
        caption: 'Qué ejercicio cabe en cada rato',
        head: ['Rato', 'Ejercicio', 'Dosis'],
        rows: [
          ['Mientras actúa el tinte', 'Estiramiento de pantorrilla', '2 x 30\u00A0s, cada pierna'],
          ['El siguiente rato libre', 'Estiramiento de sóleo', '2 x 30\u00A0s, cada pierna'],
          ['Cliente en el lavacabezas', 'Elevaciones de talón', '3 x 10, los dos pies'],
          ['Sentado en tu banco', 'Elevaciones de talón sentado', '3 x 10, los dos pies'],
          ['Antes de un corte largo', 'Movilidad de tobillo', '2 x 15, cada pierna'],
          ['Hora de comida', 'Estiramiento plantar', '2 x 30\u00A0s, cada pie'],
        ],
      },
      after: [
        'Las elevaciones de talón con dos pies y las elevaciones de talón sentado son el mismo trabajo de fuerza, así que elige una por día. Hacer el trabajo de fuerza un día sí y un día no le da tiempo a la pantorrilla para recuperarse.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Las medias de compresión ayudan a los estilistas?',
      keyFact: 'En un ensayo cruzado aleatorizado con 108 estilistas, las medias de 15 a 20\u00A0mmHg bajaron en un 12\u00A0% la puntuación de dolor e hinchazón de piernas y en 19\u00A0mL el volumen de la parte baja de la pierna (Blazek y colegas, 2013).',
      paragraphs: [
        '**Las medias de compresión son una de las pocas cosas que se han probado en estilistas.** En un ensayo cruzado aleatorizado en Suiza, 108 estilistas usaron medias de baja presión (15 a 20\u00A0mmHg) durante un periodo y nada durante otro. Con las medias, la puntuación de dolor de piernas y sensación de hinchazón bajó un 12\u00A0% en promedio, y el volumen de la parte baja de la pierna bajó 19\u00A0mL. Las puntuaciones de sueño y de estado de ánimo también mejoraron.',
        'Un estudio más pequeño en Brasil, con 38 estilistas, midió el tobillo. Sin medias, el contorno pasó de 21,1\u00A0cm en la mañana a 22,1\u00A0cm al final del día. Con medias, al final del día medía 21,2\u00A0cm, casi lo mismo que en la mañana.',
        'Los efectos fueron modestos, y los estudios midieron la hinchazón y los síntomas de las piernas, no problemas del pie como la fascitis plantar. Un ensayo de 2023 en guardias de seguridad encontró resultados parecidos en turnos largos de pie. **Las medias ayudan con la hinchazón y las piernas pesadas, pero la pantorrilla y el arco siguen necesitando su propio ejercicio.** Si tienes diabetes, mala circulación o los pies adormecidos, consulta a un profesional de la salud antes de usar compresión.',
      ],
      sourceNote:
        'Blazek y colegas (2013): ensayo cruzado aleatorizado, 108 estilistas, medias de compresión médicas de 15 a 20\u00A0mmHg frente a nada, escala de síntomas de 0 a 4 (baja media de 0,22). Agle y colegas (2020): 38 estilistas sin enfermedad venosa, contorno del tobillo en el punto B, en la mañana y en la tarde, con y sin medias.',
      cites: [CITE.blazekHosiery, CITE.agleHosiery, CITE.garcia],
    },
    {
      h2: '¿Podría ser fascitis plantar, várices u otra cosa?',
      paragraphs: [
        'El dolor general y las piernas pesadas al final de un día en el salón son comunes y suelen aliviarse durante la noche. Algunos patrones apuntan a algo más específico:',
        {
          list: [
            'Un dolor agudo en el talón en los primeros pasos de la mañana o después de estar sentado apunta a [fascitis plantar](/es/fascitis-plantar/). La rutina completa está en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
            'El ardor o dolor debajo de la parte delantera de la planta encaja con el [dolor en la planta del pie](/es/metatarsalgia-dolor-planta-del-pie/), común con suelas delgadas o tacones.',
            'Un arco que duele o se ve más bajo al final del día encaja con el [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/).',
            'Las venas hinchadas, torcidas o abultadas en las piernas pueden ser várices. En una encuesta a 182 estilistas en Taiwán, el 24,2\u00A0% las tenía, y en los mayores de 45 años, muchas horas de pie al mes fueron un factor de riesgo (Chen y Guo, 2014).',
          ],
        },
        'Si no sabes bien qué es el dolor, [dónde me duele el pie](/es/donde-me-duele-el-pie/) puede ayudarte a acotarlo, y un profesional de la salud te lo puede confirmar. **Si el dolor cambia, se extiende o deja de aliviarse con el descanso, haz que lo revisen antes de cargarlo con ejercicio.**',
      ],
      cites: [CITE.chenVaricose],
    },
  ],
  faq: [
    {
      q: '¿Por qué les duelen tanto los pies a los estilistas?',
      a: 'Los estilistas pasan mucho tiempo de pie en un solo lugar, lo que carga el talón y el arco sin el bombeo de la pantorrilla que da caminar. En un estudio con 384 estilistas, el 49,5\u00A0% reportó dolor de rodilla o de pie en 12\u00A0meses, frente al 38,3\u00A0% de personas de otros trabajos. Inclinarse hacia adelante, los pisos duros y los zapatos sin soporte suman carga.',
      cites: [CITE.mishraHairdressers, CITE.waters],
    },
    {
      q: '¿Cuáles son los mejores zapatos para estilistas con dolor de pies?',
      a: 'Ningún estudio ha comparado tipos de zapato para estilistas, así que no hay un zapato que haya demostrado ser el mejor. Busca una suela acolchada, algo de soporte para el arco, un tacón bajo, espacio para los dedos y una suela antideslizante. Una revisión de 2018 con 10 estudios encontró evidencia moderada de que las plantillas acolchadas y los pisos más blandos reducen las molestias en quienes trabajan de pie.',
      cites: [CITE.speedCushioning],
    },
    {
      q: '¿Funcionan los tapetes antifatiga para estilistas?',
      a: 'Ayudan con la comodidad. En un estudio de laboratorio con cuatro horas de pie, tres de cuatro tapetes antifatiga redujeron las molestias en comparación con un piso duro. Un estudio pequeño y más antiguo encontró que los tapetes reducían el cansancio de los músculos de la espalda, pero no el de las piernas. Vale la pena tener un tapete junto a tu silla, pero no reemplaza estirarte y moverte entre clientes.',
      cites: [CITE.wiggermannMats, CITE.kimMats],
    },
    {
      q: '¿Los estilistas deberían usar calcetas de compresión?',
      a: 'La compresión de baja presión es una de las pocas opciones probadas en estilistas. En un ensayo cruzado con 108 estilistas, las medias de 15 a 20\u00A0mmHg bajaron en un 12\u00A0% la puntuación de dolor e hinchazón de piernas y en 19\u00A0mL el volumen de la parte baja de la pierna. El efecto fue modesto. Consulta primero a un profesional de la salud si tienes diabetes o mala circulación.',
      cites: [CITE.blazekHosiery],
    },
    {
      q: '¿Es mejor que los estilistas se sienten en un banco?',
      a: 'Sentarte parte del día le quita carga a los pies, pero ningún estudio ha probado los bancos para el dolor de pies en estilistas. Un estudio de postura encontró que quienes usaban banco inclinaban más la zona lumbar y levantaban las manos por encima del hombro más seguido. Usa un banco a una altura que mantenga tus brazos abajo, y quédate de pie para lo demás.',
      cites: [CITE.kozakHairdressing, CITE.karakolis],
    },
    {
      q: '¿Qué estiramientos pueden hacer los estilistas entre clientes?',
      a: 'El estiramiento de pantorrilla y el de sóleo, 2\u00A0series de 30\u00A0segundos en cada pierna, caben en un rato entre clientes. Las elevaciones de talón, 3\u00A0series de 10, vuelven a poner a bombear la pantorrilla después de estar de pie sin moverte. La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla y de fascia plantar una A, su grado más alto, para la fascitis plantar.',
      cites: [CITE.guideline],
    },
    {
      q: '¿El trabajo de estilista puede causar fascitis plantar?',
      a: 'Estar de pie la mayor parte de la jornada multiplicó por 3,6 las probabilidades de fascitis plantar en un estudio de casos y controles con 50 casos y 100 controles, y una pantorrilla tensa las multiplicó por 23,3. Ningún estudio ha medido la fascitis plantar en estilistas en particular, pero el trabajo en el salón implica justo ese tipo de estar de pie durante mucho tiempo.',
      cites: [CITE.riddle],
    },
    {
      q: '¿Cuánto tiempo puede estar de pie un estilista antes de tomar un descanso?',
      a: 'No hay un límite probado para estilistas. En una revisión de estudios de laboratorio, los síntomas lumbares se volvieron clínicamente relevantes después de unos 71\u00A0minutos de pie en promedio y después de 42\u00A0minutos en personas propensas al dolor por estar de pie. Cortar los servicios largos con un estiramiento corto, unas elevaciones de talón o un minuto en el banco es una forma razonable de hacerlo.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una caída, una torcedura o de que algo te cayera en el pie',
      'no puedes apoyar el pie o estás cojeando',
      'el pie está adormecido, con hormigueo o con ardor',
      'una pierna se hinchó de repente y está adolorida, roja o caliente',
      'el pie está rojo o caliente, o tienes fiebre o te sientes mal',
      'el dolor te despierta en la noche o está ahí incluso en reposo',
      'tienes diabetes, mala circulación o menos sensibilidad en los pies',
      'el dolor no ha mejorado después de varias semanas con mejores zapatos, un tapete, descansos y los ejercicios de esta página',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text:
      'No tienes que decidir el orden, las dosis ni cuándo pasar a una versión más difícil. [Walkito](/es/programa/) es una app de ejercicios para el talón y el pie que arma tu plan semana por semana, y las sesiones son lo bastante cortas para hacerlas antes del trabajo o en un descanso.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas tu dolor de talón, y el plan se ajusta a él. Walkito no hace diagnósticos.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['standing', 'nurses', 'standingDesk'],
  crumb: 'Dolor de pies en estilistas',
  campaign: 'guide-hairdressers-foot-pain-es',
};
