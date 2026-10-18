import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Test de pie plano en casa (ES) ────────────────────────────────────
 *
 * Translated from `articles/flat-feet-test.ts`, written around the Spanish
 * queries «test de pie plano», «cómo saber si tengo pie plano», «prueba de
 * la huella del pie». Figures, grades and qualifiers are identical to the
 * English page. No new citations.
 */

export const FLAT_FEET_TEST_ES: Guide = {
  lang: 'es',
  page: 'flatFeetTest',
  mainSource: CITE.menzMunteanu,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Test de pie plano en casa: 4 pruebas sencillas',
  description:
    '¿Cómo saber si tienes pie plano? 4 pruebas en casa: huella mojada, sentado y de pie, puntillas y dedo gordo, elevación de talón, y lo que muestra cada una.',
  h1: 'Test de pie plano en casa: 4 pruebas sencillas, y lo que pueden y no pueden decirte',
  lede:
    'Puedes revisar si tienes pie plano en casa en unos cinco minutos: mira una huella mojada, compara tu arco sentado y de pie, ponte de puntillas o levanta el dedo gordo para ver si el arco vuelve, y prueba una elevación de talón sobre un pie. La huella es la menos exacta de las cuatro: en 95\u00A0adultos mayores comparados con radiografías, la puntuación de la huella coincidió con la altura real del arco solo de forma moderada (Menz y Munteanu, 2005). Lo que más importa es si el arco vuelve y si un lado se comporta distinto al otro.',
  intro: [
    'Ninguna de estas pruebas es un diagnóstico, y un arco bajo por sí solo normalmente no es un problema. Esta página explica cómo hacer cada prueba, qué dice la investigación sobre cuánto puedes confiar en ella, qué mide un profesional de la salud en su lugar y qué resultados significan que conviene que te revisen el pie. Para saber qué es el pie plano y cuándo importa, empieza por [pie plano](/es/pie-plano/).',
  ],
  takeaways: [
    'Una huella mojada es una guía aproximada. En 95\u00A0personas de 62 a 94\u00A0años, el índice del arco de la huella coincidió con la altura del arco en la radiografía solo de forma moderada, mientras que medir con una regla la altura del hueso del arco coincidió bastante (Menz y Munteanu, 2005).',
    'La grasa bajo la planta puede rellenar la huella: en 24\u00A0adultos con sobrepeso u obesidad, el índice del arco de la huella subió con el porcentaje de grasa corporal (Wearing y colegas, 2004).',
    'Si el arco vuelve cuando te sientas, te pones de puntillas o levantas el dedo gordo, el pie plano es flexible, el tipo común que estudiaron los ensayos de ejercicio (Brijwasi y Borkar, 2023).',
    'Dificultad para subir sobre un pie, dolor detrás del tobillo interno y un arco que se va aplanando de un solo lado son señales de disfunción del tendón tibial posterior. En 582\u00A0mujeres mayores de 40\u00A0años, el 3,3\u00A0% tenía síntomas de etapa temprana (etapa I o II) y ninguna había sido diagnosticada (Kohls-Gatzoulis y colegas, 2009).',
    'Incluso las mediciones de los profesionales varían: cuando dos evaluadores sin experiencia midieron la caída del navicular, coincidieron poco (Picciano y colegas, 1993). En un estudio posterior con 86\u00A0adultos jóvenes, la misma medida fue muy repetible (Zuil-Escobar y colegas, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Cómo saber si tienes pie plano en casa?',
      paragraphs: [
        '**Haz cuatro pruebas, en este orden, descalzo sobre un piso duro.** Las dos primeras te dicen qué tan bajo está tu arco. Las dos últimas te dicen si es flexible y si el tendón que lo sostiene está haciendo su trabajo. Necesitas una toalla, un poco de agua, un trozo de papel kraft o cartulina y una pared para apoyarte.',
        'Revisa los dos pies cada vez. Una diferencia entre el pie izquierdo y el derecho dice más que cualquiera de los dos por separado, porque los pies de la mayoría de las personas son bastante parecidos, y un solo pie plano es una de las señales de alerta al final de esta página.',
      ],
      table: {
        caption: 'Las cuatro pruebas en casa de un vistazo',
        head: ['Prueba', 'Qué miras', 'Qué puede mostrar', 'Qué no puede mostrar'],
        rows: [
          ['Huella mojada', 'Cuánto de la planta queda marcado', 'Un arco bajo, de forma aproximada', 'La altura exacta del arco, o el dolor'],
          ['Sentado y de pie', 'El arco con y sin peso', 'Cuánto baja el arco', 'Por qué baja'],
          ['Puntillas y dedo gordo', 'Si el arco vuelve', 'Flexible o rígido', 'La causa de un pie rígido'],
          ['Elevación de talón sobre un pie', 'Subir sobre un solo pie', 'Debilidad de un lado', 'Qué tendón está involucrado'],
        ],
      },
      after: [
        'Anota lo que ves, o toma una foto de cada pie por el lado interno y por detrás. Repetir las mismas pruebas en unos meses te muestra si algo cambió, y eso importa más que un solo resultado.',
      ],
    },
    {
      h2: '¿Cómo se hace la prueba de la huella mojada y qué tan exacta es?',
      keyFact: 'En 95\u00A0personas de 62 a 94\u00A0años, el índice del arco de la huella coincidió con la altura del arco en la radiografía solo de forma moderada (r = 0,52), frente a r = 0,79 para una medida de la altura del hueso del arco (Menz y Munteanu, 2005).',
      paragraphs: [
        '**Cómo hacerla:** moja la planta de un pie, pisa sobre papel kraft o cartulina seca con todo tu peso, quédate de pie normal un segundo y luego retira el pie. Haz lo mismo con el otro pie. Mira el centro de la huella, la parte entre el talón y la parte delantera del pie:',
        {
          list: [
            '**Una curva clara en el lado interno**, con la franja del centro de más o menos la mitad del ancho de la parte delantera del pie o menos: un arco típico.',
            '**Una franja central ancha con poca o ninguna curva**, de modo que la huella parece una pantufla: un arco bajo.',
            '**Solo se marcan el talón y la parte delantera**, unidos por una franja delgada o sin unir: un arco alto. Consulta [pie cavo](/es/ejercicios-pie-cavo/).',
          ],
        },
        '**Lo que puede decirte:** aproximadamente cuánto de tu planta toca el suelo. Los investigadores convierten esa misma huella en un número, el índice del arco, comparando el tercio medio de la huella con la huella completa (Cavanagh y Rodgers, 1987).',
        '**Lo que no puede decirte:** la altura real de tu arco. En 95\u00A0personas de 62 a 94\u00A0años comparadas con radiografías, el índice de la huella coincidió con la altura del hueso del arco solo de forma moderada (Menz y Munteanu, 2005). Un estudio de 1992 con 115\u00A0hombres encontró que las huellas no podían predecir la altura del arco (Hawes y colegas, 1992), mientras que un estudio de 2009 con 91\u00A0adultos jóvenes encontró una coincidencia de débil a moderada con las radiografías (Murley y colegas, 2009). En 198\u00A0pacientes de consulta, tres puntuaciones de la huella detectaron un pie plano en la radiografía con lo que los autores llamaron una exactitud aceptable (Paecharoen y colegas, 2023).',
        'Una razón es el tejido blando. En un pequeño estudio piloto con 24\u00A0adultos con sobrepeso u obesidad, el índice de la huella al caminar subió con el porcentaje de grasa corporal, así que una huella más llena puede significar más acolchado bajo el arco y no un arco más bajo (Wearing y colegas, 2004). Una huella tampoco dice nada sobre el dolor, que es lo que decide si un pie plano necesita atención.',
      ],
      cites: [CITE.menzMunteanu, CITE.cavanaghArchIndex, CITE.hawesFootprint, CITE.murleyArch, CITE.paecharoen, CITE.wearing],
    },
    {
      h2: '¿Tu arco se ve distinto sentado y de pie?',
      paragraphs: [
        '**Siéntate en una silla con los pies apoyados y relajados, y mira el lado interno de cada pie.** Fíjate en el espacio bajo el arco. Luego ponte de pie con el peso en los dos pies y vuelve a mirar, o pide a alguien que tome una foto de lado a la altura del piso.',
        'Que el arco baje un poco es normal: todo arco desciende algo con tu peso. En datos combinados de 619\u00A0adultos sanos, el pie promedio descansaba ligeramente girado hacia adentro, lo que los autores llaman la posición normal (Redmond y colegas, 2008). Lo que buscas es un cambio grande, un arco que se ve claro cuando estás sentado y desaparece cuando te paras.',
        '**Luego mira desde atrás.** Párate normal y pide a alguien que mire tus talones a la altura del piso. Un talón que se inclina hacia afuera, con el hueso del tobillo interno sobresaliendo hacia adentro, va de la mano con un arco bajo. Si un talón se inclina más que el otro, anótalo.',
        'Esta prueba te dice cuánto baja el arco, lo que un profesional mide con más exactitud como caída del navicular (más abajo). No te dice por qué: un pie laxo de nacimiento y un tendón que se está debilitando pueden verse igual estando quieto. Las dos pruebas siguientes empiezan a distinguirlos.',
      ],
      cites: [CITE.redmondFpi],
    },
    {
      h2: '¿Cómo saber si tu pie plano es flexible?',
      keyFact: 'La coalición tarsal, un puente óseo o fibroso entre huesos del pie que a menudo se asocia con un pie plano rígido y doloroso en adultos jóvenes, se reporta en un 1 a 13\u00A0% de las personas (Mehdi y colegas, 2024).',
      paragraphs: [
        'Un pie plano flexible se aplana con tu peso pero recupera el arco cuando cambia la carga. Dos pruebas rápidas lo muestran:',
        {
          list: [
            '**Prueba de puntillas.** Párate apoyándote en una pared y sube sobre la parte delantera de los dos pies. Mira el lado interno de cada pie, o los talones desde atrás. En un pie flexible, aparece un arco y los talones se inclinan un poco hacia adentro al subir.',
            '**Prueba del dedo gordo (prueba de Jack).** Párate normal. Levanta el dedo gordo lo más que puedas, o pide a alguien que te lo levante, mientras el talón sigue abajo. En un pie flexible, el arco sube al levantar el dedo. La prueba lleva el nombre de Jack, que la describió en 1953 (Jack, 1953).',
          ],
        },
        '**Si el arco vuelve, el pie plano es flexible.** Es el tipo común y el que se estudió en los ensayos de ejercicio: en 52\u00A0personas con pie plano flexible, seis semanas de ejercicios de pie corto, tobillo, cadera y estiramiento mejoraron dos medidas de la forma del arco más que en un grupo control (Brijwasi y Borkar, 2023).',
        '**Si el arco sigue plano y el pie se siente rígido**, el pie plano podría ser rígido. Una causa es la coalición tarsal, un puente de hueso, cartílago o tejido fibroso entre dos huesos del pie, que se encuentra a menudo en adultos jóvenes con un pie plano rígido y doloroso (Mehdi y colegas, 2024). Un pie plano rígido necesita que un profesional de la salud encuentre la causa antes de que empieces cualquier programa de ejercicio.',
        'Seamos honestos sobre lo que son estas pruebas. No encontramos ningún estudio que haya medido qué tan confiable es la prueba de puntillas o la prueba de Jack en adultos cuando las hacen en casa. Son fáciles de hacer y el resultado suele ser claro, pero toma un resultado rígido como motivo para que te revisen, no como un diagnóstico.',
      ],
      cites: [CITE.jack1953, CITE.brijwasi, CITE.mehdiCoalition],
    },
    {
      h2: '¿Qué muestra la elevación de talón sobre un pie en el pie plano?',
      keyFact: 'En una encuesta a 582\u00A0mujeres mayores de 40\u00A0años en Inglaterra, el 3,3\u00A0% tenía disfunción temprana del tendón tibial posterior, y ninguna había sido diagnosticada antes (Kohls-Gatzoulis y colegas, 2009).',
      paragraphs: [
        'El tibial posterior es el músculo cuyo tendón pasa por detrás del hueso del tobillo interno y sostiene el arco. Cuando el tendón se debilita, el arco puede ir bajando de ese lado poco a poco. Esto es la disfunción del tendón tibial posterior, una razón común por la que el arco de un adulto se aplana con el tiempo. Un cuadro típico es dolor en el lado interno del tobillo, un pie que se va aplanando y el talón que gira hacia afuera (Deu y colegas, 2022).',
        '**Cómo hacerla:** párate sobre un pie junto a una pared, con la punta de los dedos en la pared solo para el equilibrio. Sube lo más alto que puedas sobre la parte delantera del pie y luego baja. Haz unas cuantas y cambia de pie. Fíjate en tres cosas:',
        {
          list: [
            'puedes subir sobre un pie con la misma facilidad que sobre el otro',
            'el talón gira hacia adentro arriba del todo, igual de los dos lados',
            'no hay dolor detrás ni debajo del hueso del tobillo interno',
          ],
        },
        'Que te cueste subir de un lado, un talón que no gira hacia adentro o dolor en el tobillo interno son las señales que apuntan al tendón. Un profesional de la salud usa el mismo movimiento como prueba de detección, y el panorama completo está en [ejercicios para la disfunción del tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/).',
        'Esta prueba se trata de la forma y de cómo se siente una sola subida de cada lado, no de cuántas puedes hacer. Si quieres un número para la resistencia de la pantorrilla, con el ritmo de la investigación y las cifras que alcanzan los adultos sanos, usa el [test de elevación de talón](/es/test-de-elevacion-de-talon/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué mide un profesional de la salud en el pie plano?',
      keyFact: 'En 619\u00A0adultos sanos evaluados con el Índice de Postura del Pie, el promedio fue +4 en una escala de -12 a +12, lo que los autores llaman ligeramente pronado y normal (Redmond y colegas, 2008).',
      paragraphs: [
        'Un profesional de la salud mira lo mismo que miraste tú, pero lo puntúa de una forma establecida. Las dos medidas más comunes:',
        {
          list: [
            '**Índice de Postura del Pie (FPI).** Seis revisiones del pie de pie, cada una puntuada de -2 a +2, que incluyen el ángulo del talón, el abultamiento del tobillo interno y la forma del arco. El total va de -12 (arco alto) a +12 (plano). En datos combinados de 619\u00A0adultos sanos, el promedio fue +4, y los autores consideran que las puntuaciones por debajo de -3 o por encima de +10 están claramente fuera del rango normal (Redmond y colegas, 2008).',
            '**Caída del navicular.** El profesional marca el hueso del lado interno del arco, mide su altura sentado con el pie en una posición fija, luego de pie, y registra cuánto baja. Los adultos sanos promedian de 3,6 a 8,1\u00A0milímetros en los estudios, y no se ha confirmado ningún punto de corte para «demasiado» (Nielsen y colegas, 2009).',
          ],
        },
        '**Estas medidas son mejores que una huella, pero no son perfectas.** En adultos mayores, medir con una regla la altura del hueso del arco coincidió bastante con las radiografías (r = 0,79), mientras que el FPI coincidió menos (r = 0,36 a 0,59), porque puntúa todo el pie y no solo el arco (Menz y Munteanu, 2005). El total del FPI mostró una confiabilidad moderada en general, la altura del navicular fue la medida individual más confiable en adultos, y ninguna de las medidas evaluadas fue lo bastante confiable en niños pequeños (Evans y colegas, 2003).',
        'La práctica importa. Cuando dos evaluadores sin experiencia midieron la caída del navicular en 15\u00A0personas, sus resultados coincidieron poco (Picciano y colegas, 1993). En 86\u00A0adultos jóvenes de un estudio posterior, la caída del navicular y las puntuaciones de la huella fueron muy repetibles (Zuil-Escobar y colegas, 2018). Si te están siguiendo el arco con el tiempo, ayuda que mida siempre la misma persona.',
        'Si un profesional sospecha un pie rígido, una coalición o un daño del tendón, puede pedir una radiografía de pie, una tomografía o una resonancia magnética, algo que ninguna prueba en casa puede reemplazar (Mehdi y colegas, 2024).',
      ],
      sourceNote:
        'Menz y Munteanu 2005: r de Pearson frente a la altura radiográfica del navicular, la inclinación del calcáneo y el ángulo entre el calcáneo y el primer metatarsiano; índice del arco r = 0,52 a 0,71, FPI r = 0,36 a 0,59. Picciano 1993: caída del navicular, ICC entre evaluadores 0,57, del mismo evaluador 0,61 y 0,79. Zuil-Escobar 2018: ICC por encima de 0,88.',
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.menzMunteanu, CITE.evansFpiReliability, CITE.picciano, CITE.zuilEscobar, CITE.mehdiCoalition],
    },
    {
      h2: '¿Qué hacer con tu resultado?',
      paragraphs: [
        'Junta las cuatro pruebas:',
        {
          list: [
            '**Arco bajo que vuelve de puntillas, sin dolor, los dos pies iguales:** un pie plano flexible, una variante normal. No hace falta hacer nada. El ejercicio es opcional.',
            '**Arco bajo que vuelve, con arcos cansados o adoloridos después de días largos:** los ejercicios de pie y tobillo son un buen punto de partida. Consulta [ejercicios para el pie plano](/es/ejercicios-pie-plano/) para el programa completo.',
            '**Arco que sigue plano, un pie más plano que el otro o dolor en el tobillo interno:** consulta a un profesional de la salud antes de empezar los ejercicios. La lista de abajo tiene los detalles.',
          ],
        },
        '**Lo que el ejercicio puede y no puede hacer.** En 52\u00A0personas con pie plano flexible, seis semanas de pie corto, tobillo, cadera y estiramiento mejoraron la forma del arco más que solo los movimientos del tobillo hacia arriba y hacia abajo (Brijwasi y Borkar, 2023). Una revisión de 2024 sobre el entrenamiento de pie corto no encontró un cambio claro en la postura general del pie, y solo un cambio en una medida del arco en programas de más de seis semanas (Cheng y colegas, 2024). Los dos midieron la forma, no el dolor.',
        'Las tarjetas de abajo son un punto de partida tomado de [ejercicios para el pie plano](/es/ejercicios-pie-plano/), con las mismas dosis.',
      ],
      exercises: [
        {
          name: 'Pie corto',
          evidence: { level: 'moderate', why: 'Parte del programa que mejoró la forma del arco en un ensayo de 2023. Por sí solo, el trabajo de pie corto tiene resultados más débiles.' },
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El arco subiendo',
          how: 'Siéntate con el pie apoyado en el piso. Lleva la parte delantera del pie hacia el talón para que el arco suba, y mantén. Deja el borde externo del pie en el suelo y sube el arco para formar una pequeña cueva bajo el pie. No encojas los dedos. Encogerlos es el error más común en este ejercicio.',
          stop: 'Un calambre en el arco que no se calma, o dolor en el tobillo interno',
          image: 'Ejercicio: pie corto',
          media: 'short_foot_seated',
          caption: 'Pie corto: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una pierna sentada con el pie apoyado en el piso y los músculos del arco resaltados mientras el arco sube',
        },
        {
          name: 'Elevación del dedo gordo',
          evidence: { level: 'early', why: 'Un añadido propio de Walkito. No formaba parte del programa evaluado en los estudios de esta página.' },
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El dedo gordo moviéndose solo',
          how: 'Siéntate con los pies apoyados. Levanta solo el dedo gordo y mantén. Los otros cuatro dedos siguen apoyados en el piso. Este ejercicio enseña al dedo gordo a moverse solo, que es el primer interruptor del arco.',
          stop: 'Dolor en la base del dedo gordo',
          image: 'Ejercicio: elevación del dedo gordo',
          media: 'big_toe_lift',
          caption: 'Elevación del dedo gordo: levanta solo el dedo gordo, los otros cuatro siguen apoyados',
          alt: 'Un pie en el piso levanta solo el dedo gordo, con el arco resaltado',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al trabajo de fuerza un grado B. Este paso no se evaluó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga mientras la pantorrilla despierta.',
          stop: 'Dolor detrás del tobillo interno, o un lado que no puede seguir el ritmo',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Inversión con banda',
          evidence: { level: 'early', why: 'Un añadido propio de Walkito. No formaba parte del programa evaluado en los estudios de esta página.' },
          dose: '3\u00A0series de 12, cada pie',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte interna del pie y del tobillo',
          how: 'Siéntate con una banda elástica alrededor del pie y gira el pie hacia adentro contra la banda. Mueve el pie, no la pierna. La rodilla no se mueve. Walkito añade la inversión con banda solo después de seis sesiones de pie corto de pie, para que primero trabajen los músculos propios del arco.',
          stop: 'Dolor detrás del tobillo interno que sigue después de la serie',
          image: 'Ejercicio: inversión con banda',
          media: 'band_inversion',
          caption: 'Inversión con banda: gira el pie hacia adentro contra la banda, la rodilla no se mueve',
          alt: 'Una pierna con una banda elástica alrededor del pie, girando el pie hacia adentro, con la parte baja de la pierna resaltada',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Cómo saber si tengo pie plano?',
      cites: [CITE.menzMunteanu, CITE.brijwasi],
      a: 'Mira una huella mojada y luego compara tu arco sentado y de pie. Una huella sin curva en el lado interno y un arco que desaparece cuando te paras sugieren un arco bajo. Después ponte de puntillas: si el arco vuelve, el pie plano es flexible, el tipo común. Una huella por sí sola coincide con la altura real del arco solo de forma moderada.',
    },
    {
      q: '¿Es exacta la prueba de la huella mojada?',
      cites: [CITE.menzMunteanu, CITE.hawesFootprint, CITE.wearing],
      a: 'Solo de forma aproximada. En 95\u00A0adultos mayores comparados con radiografías, la puntuación de la huella coincidió con la altura del arco de forma moderada, y un estudio de 1992 con 115\u00A0hombres encontró que las huellas no podían predecir la altura del arco. La grasa bajo la planta también puede rellenar la huella. Úsala como un primer vistazo, no como un diagnóstico.',
    },
    {
      q: '¿Qué es la prueba del pie plano flexible?',
      cites: [CITE.jack1953],
      a: 'Revisa si el arco vuelve. Ponte de puntillas, o levanta el dedo gordo mientras el talón sigue abajo (la prueba de Jack, descrita en 1953). Si aparece un arco, el pie plano es flexible. Si sigue plano y rígido, un profesional de la salud debería buscar la causa. No encontramos ningún estudio sobre qué tan confiable es cualquiera de las dos pruebas en casa.',
    },
    {
      q: '¿Cómo saber si mi pie plano es rígido?',
      cites: [CITE.mehdiCoalition],
      a: 'Un pie plano rígido no tiene arco cuando te sientas, te pones de puntillas o levantas el dedo gordo, y a menudo se siente rígido. Una causa es la coalición tarsal, un puente entre huesos del pie que se reporta en un 1 a 13\u00A0% de las personas. Un pie plano rígido que duele necesita un profesional de la salud y normalmente estudios de imagen.',
    },
    {
      q: '¿Se puede tener un solo pie plano?',
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence],
      a: 'Sí, y vale la pena revisarlo. Un arco que se va aplanando de un lado, sobre todo con dolor detrás del tobillo interno o dificultad para subir sobre ese pie, es una señal típica de disfunción del tendón tibial posterior. En 582\u00A0mujeres mayores de 40\u00A0años, el 3,3\u00A0% tenía señales tempranas y ninguna había sido diagnosticada. Consulta a un profesional de la salud.',
    },
    {
      q: '¿Cuál es una caída del navicular normal?',
      cites: [CITE.nielsenNavicular, CITE.picciano],
      a: 'En los estudios, los adultos sanos promedian de 3,6 a 8,1\u00A0milímetros de caída del navicular, la distancia que baja el hueso del arco cuando te paras. Se han propuesto puntos de corte de 10, 13 o 15\u00A0milímetros para «demasiado», pero ninguno está confirmado, y los resultados varían entre evaluadores, sobre todo si no tienen experiencia. Es difícil medirla con exactitud en ti mismo.',
    },
    {
      q: '¿Qué es el Índice de Postura del Pie?',
      cites: [CITE.redmondFpi, CITE.evansFpiReliability],
      a: 'Es una revisión de seis partes que hace un profesional de la salud mientras estás de pie, y que puntúa el talón, el tobillo y el arco de -2 a +2 cada uno, para un total de -12 (arco alto) a +12 (plano). En 619\u00A0adultos sanos el promedio fue +4, que es normal. Mostró una confiabilidad moderada en general, y ninguna medida de postura del pie evaluada fue lo bastante confiable en niños pequeños.',
    },
    {
      q: '¿El pie plano necesita tratamiento si no duele?',
      cites: [CITE.menz],
      a: 'Normalmente no. Un pie plano flexible que no causa dolor ni te limita es una variante normal. El Framingham Foot Study, con unas 1900\u00A0personas adultas, no encontró relación entre la postura de pie plano y el dolor lumbar. El dolor, la rigidez o un cambio de un solo lado son los motivos para que te lo revisen.',
    },
    {
      q: '¿Puedo revisar a mi hijo de la misma forma?',
      cites: [CITE.harrisPediatricFlatfoot, CITE.evansFpiReliability],
      a: 'Las pruebas de puntillas y del dedo gordo también sirven en niños, pero la mayoría de los niños pequeños tienen arcos bajos que se forman con la edad, y en un estudio las medidas de postura del pie no fueron lo bastante confiables en niños pequeños. Un pie rígido, el dolor o la cojera son motivos para ir al médico. Más información en [pie plano en niños](/es/pie-plano-en-ninos/).',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el arco sigue plano cuando te sientas, te pones de puntillas o levantas el dedo gordo, y el pie se siente rígido',
      'un pie se ha vuelto más plano que el otro a lo largo de meses, o lo notas de repente',
      'tienes dolor o hinchazón detrás o debajo del hueso del tobillo interno',
      'no puedes subir sobre un pie, o subir de ese lado te duele',
      'el pie plano empezó después de una caída, una torcedura o una lesión',
      'tienes diabetes y el pie está caliente, rojo o hinchado, o su forma está cambiando',
      'sientes entumecimiento, ardor u hormigueo en el pie',
      'el pie plano de un niño es rígido, le duele o viene con cojera',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el dolor de talón y de pie, en iPhone y Android. Arma un plan a partir de tus respuestas, incluido dónde te duele y de qué lado, y repite una prueba sencilla cada 14\u00A0días: elevaciones de talón, sostener el arco, equilibrio sobre un pie, y el lado izquierdo frente al derecho.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión indicas cómo sientes los pies, y el plan se ajusta. Walkito no diagnostica, así que si tu pie plano es rígido, de un solo lado o doloroso, haz que te lo revisen primero.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['hubFlatFeet', 'flatFeet', 'pttd'],
  crumb: 'Test de pie plano',
  campaign: 'guide-flat-feet-test-es',
};
