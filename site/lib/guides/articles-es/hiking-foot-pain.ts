import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Dolor de pies después del senderismo (ES). Translated from
 * `articles/hiking-foot-pain.ts`, written around the Spanish queries
 * «dolor de pies después de hacer senderismo», «dolor de pies después de
 * caminar mucho», «dolor de pies en la montaña». Figures, grades, doses and
 * hedges are identical to the English page. Pounds kept as in the source
 * surveys, with approximate kilograms in parentheses. No new citations.
 */

export const HIKERS_ES: Guide = {
  lang: 'es',
  page: 'hikers',
  mainSource: CITE.chruschHikers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolor de pies después del senderismo: causas y ejercicios',
  description:
    'Dolor de pies después del senderismo: qué hallaron las encuestas, talón, Aquiles y antepié, peso de la mochila, botas o zapatillas y una rutina breve.',
  h1: 'Dolor de pies después del senderismo: por qué te duelen y qué hacer',
  lede:
    'Terminar una caminata larga con los pies adoloridos es común, y en gran parte se debe a la sobrecarga: más distancia, más bajada o una mochila más pesada de lo que tus pies están acostumbrados a soportar. En una encuesta a 1295 senderistas de larga distancia del sendero de los Apalaches, el 29\u00A0% reportó lesión o dolor en el pie y el 12\u00A0% dolor en el Aquiles (Chrusch y Kavin, 2021). El dolor de talón con los primeros pasos a la mañana siguiente apunta a una [fascitis plantar](/es/fascitis-plantar/); un dolor en un punto concreto de un hueso que aumenta con cada caminata puede ser una fractura por estrés y necesita un profesional de la salud.',
  intro: [
    'Esta página trata del senderismo y las caminatas largas por senderos: qué suele doler, qué encontraron las encuestas a senderistas sobre mochilas, calzado y entrenamiento, y una rutina breve para antes y después de caminar. Si el talón te duele después de tus caminatas de todos los días, empieza por [dolor de talón al caminar](/es/dolor-de-talon-al-caminar/), y para saber cuánto caminar con el talón adolorido, consulta [caminar con fascitis plantar](/es/caminar-con-fascitis-plantar/).',
  ],
  toc: true,
  takeaways: [
    'De 1295 senderistas de larga distancia del sendero de los Apalaches, el 61\u00A0% reportó una molestia muscular, articular u ósea, el 37\u00A0% dolor de rodilla, el 29\u00A0% dolor de pie y el 12\u00A0% dolor en el Aquiles, y el 11\u00A0% abandonó el sendero por ese motivo (Chrusch y Kavin, 2021).',
    'Los senderistas que no entrenaron antes del sendero reportaron dolor de pie con más frecuencia, 38\u00A0% frente a 28\u00A0%, y cualquier lesión de este tipo con más frecuencia, 80\u00A0% frente a 58\u00A0%. Es una asociación en una encuesta, no una prueba de que entrenar evite lesiones (Chrusch y Kavin, 2021).',
    'Las ampollas en los pies fueron la molestia más común entre 280 senderistas del sendero de los Apalaches: las reportó el 64\u00A0% (Boulware y colegas, 2003).',
    'El entumecimiento o el hormigueo aumentaron con el peso de la mochila en 128 senderistas de larga distancia, del 35\u00A0% con mochilas de 10 a 20\u00A0libras (unos 4,5 a 9\u00A0kg) al 69\u00A0% por encima de 31\u00A0libras (unos 14\u00A0kg). El tipo de calzado y el peso de la mochila no se asociaron con otras lesiones musculares y articulares (Anderson y colegas, 2009).',
    'Los bastones de senderismo redujeron la carga sobre el tobillo, la rodilla y la cadera cuando 15 senderistas experimentados caminaron cuesta abajo, con y sin mochila (Bohne y Abendroth-Smith, 2007).',
  ],
  sections: [
    {
      h2: '¿Por qué te duelen los pies después de una caminata?',
      keyFact: 'En una encuesta a 1295 senderistas de larga distancia del sendero de los Apalaches, el 29\u00A0% reportó lesión o dolor en el pie y el 37\u00A0% dolor de rodilla (Chrusch y Kavin, 2021).',
      paragraphs: [
        '**Sobre todo porque el senderismo carga los pies más, y durante más tiempo, que caminar en el día a día.** Caminas durante horas, por terreno irregular, subiendo y bajando, a menudo con mochila. Cada una de esas cosas suma trabajo para el talón, el arco, la pantorrilla y el tendón de Aquiles.',
        'Los mejores datos vienen de senderistas de larga distancia. En una encuesta de 2018 a 2019 a 1295 senderistas del sendero de los Apalaches, el 61\u00A0% reportó una molestia muscular, articular u ósea. El dolor de rodilla fue el más común, con un 37\u00A0%, seguido del dolor de pie con un 29\u00A0%, los esguinces de tobillo con un 13\u00A0%, el dolor en el Aquiles con un 12\u00A0% y el dolor de espinilla con un 11\u00A0%. Estas molestias hicieron que el 11\u00A0% abandonara el sendero (Chrusch y Kavin, 2021).',
        'Los problemas por sobreuso, que se acumulan a lo largo de días de carga repetida, fueron más comunes que las lesiones repentinas: 28\u00A0% frente a 18\u00A0% en la misma encuesta. Eso también importa para quienes hacen caminatas de un día. Una primera caminata larga de la temporada, o un fin de semana con dos días intensos seguidos, sigue el mismo patrón a menor escala.',
        'Son encuestas basadas en lo que reportan personas que caminan cientos de kilómetros. Ningún estudio ha medido el dolor de pie en senderistas de un día, así que las cifras exactas no se aplican a quien camina el fin de semana. Lo útil es el patrón de qué duele.',
      ],
      sourceNote: 'Chrusch y Kavin 2021: encuesta electrónica transversal añadida a la encuesta de fin de temporada de la Appalachian Trail Conservancy, tasa de respuesta del 52\u00A0%. Sobreuso o crónico 28\u00A0% (n=363), agudo 18\u00A0% (n=238).',
      cites: [CITE.chruschHikers],
    },
    {
      h2: '¿Dónde te duele y qué puede ser?',
      paragraphs: [
        'El lugar del dolor es la pista más rápida. La tabla es un punto de partida, no un diagnóstico. La herramienta [¿dónde me duele el pie?](/es/donde-me-duele-el-pie/) hace algunas preguntas más.',
      ],
      table: {
        caption: 'Dolor de pies después del senderismo: dónde duele y el primer paso habitual',
        head: ['Dónde y cuándo', 'A menudo', 'Primer paso'],
        rows: [
          ['Bajo el talón, peor con los primeros pasos a la mañana siguiente', 'Fascitis plantar', 'Estiramientos de pantorrilla y arco, elevaciones de talón'],
          ['Parte de atrás del talón o el tendón sobre él', 'Tendinopatía de Aquiles', 'Caminatas más cortas, elevaciones de talón lentas'],
          ['Planta delantera, detrás de los dedos', 'Metatarsalgia', 'Revisar el ajuste, estirar la pantorrilla'],
          ['Un punto de un hueso, peor en cada caminata', 'Posible fractura por estrés', 'Deja de caminar, consulta a un profesional de la salud'],
          ['Ardor u hormigueo en los dedos', 'Nervio comprimido', 'Aflojar los cordones, mochila más ligera'],
          ['Uñas oscuras o adoloridas tras las bajadas', 'Dedos que chocan con el zapato', 'Zapato más largo, uñas cortas'],
        ],
      },
      after: [
        '**Bajo el talón.** La fascitis plantar suele doler más con los primeros pasos después del reposo. La guía de 2023 para el dolor de talón menciona como rasgo típico el dolor que empezó tras un aumento reciente de la actividad con carga de peso (Koc y colegas, 2023), que es justo lo que supone una caminata más larga. Una pantorrilla rígida es el factor de riesgo más fuerte que se conoce: en un estudio de 50 personas con fascitis plantar y 100 sin ella, quienes menos podían flexionar el tobillo tenían 23,3 veces más probabilidades (Riddle y colegas, 2003).',
        '**Parte de atrás del talón.** El dolor en el Aquiles puede empeorar en las subidas largas, donde la pantorrilla y el tendón te impulsan hacia arriba en cada paso. Consulta [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
        '**Planta delantera.** Las bajadas largas y una pantorrilla rígida pueden desplazar la carga hacia la parte delantera del pie. Consulta [metatarsalgia](/es/metatarsalgia-dolor-planta-del-pie/).',
        '**Ampollas y uñas.** El 64\u00A0% de 280 senderistas del sendero de los Apalaches reportó ampollas, más que cualquier otra molestia (Boulware y colegas, 2003). Las uñas oscuras o adoloridas después de un día de bajadas suelen indicar que los dedos chocan con la punta del zapato. Ambos son problemas de piel y de ajuste, no algo que cambie con ejercicio.',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.boulwareHikers],
    },
    {
      h2: '¿Por qué duelen más los pies al bajar?',
      keyFact: 'En 15 senderistas experimentados que caminaron cuesta abajo sin mochila, con mochila de día y con mochila pesada, los bastones redujeron la carga en el tobillo, la rodilla y la cadera (Bohne y Abendroth-Smith, 2007).',
      paragraphs: [
        '**Al bajar, tus piernas trabajan como frenos.** En cada paso hacia abajo, la pantorrilla, la parte delantera de la espinilla y los músculos del muslo controlan la caída mientras se alargan. Además, el pie se desliza hacia delante dentro del zapato, así que los dedos y la planta delantera reciben más presión. Por eso mucha gente se siente bien en la subida y adolorida después de la bajada.',
        'En un estudio de laboratorio, 15 senderistas varones experimentados caminaron cuesta abajo sin mochila, con una mochila de día del 15\u00A0% de su peso corporal y con una mochila de expedición del 30\u00A0%. Usar bastones redujo las fuerzas de giro en el tobillo, la rodilla y la cadera, y el trabajo máximo de frenado en el tobillo y la rodilla, con todas las mochilas (Bohne y Abendroth-Smith, 2007). En la encuesta del sendero de los Apalaches, el 70\u00A0% llevaba bastones o un palo, y los bastones se asociaron con menos molestias (Chrusch y Kavin, 2021). Esa asociación en una encuesta no demuestra que los bastones eviten lesiones.',
        'Consejos prácticos, ninguno probado para prevenir el dolor de pie: da pasos más cortos en las bajadas empinadas, ajusta bien los cordones sobre el empeine para que el pie no se deslice hacia delante y mantén las uñas cortas.',
      ],
      sourceNote: 'Bohne 2007: 10 ensayos por condición, momentos articulares en el plano sagital reducidos en las tres articulaciones con bastones; absorción máxima de potencia reducida en el tobillo y la rodilla. Se midieron fuerzas, no dolor ni lesiones.',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
    },
    {
      h2: '¿Una mochila más pesada empeora el dolor de pies?',
      keyFact: 'En 128 senderistas de larga distancia, el 35\u00A0% con mochilas de 10 a 20\u00A0libras (unos 4,5 a 9\u00A0kg) y el 69\u00A0% con mochilas de más de 31\u00A0libras (unos 14\u00A0kg) reportó entumecimiento u hormigueo (Anderson y colegas, 2009).',
      paragraphs: [
        '**Una mochila más pesada significa más carga en cada paso, pero los estudios con senderistas solo muestran una asociación clara con el entumecimiento y el hormigueo.** En una encuesta de 2006 a 128 senderistas que habían caminado más de 500\u00A0millas (unos 800\u00A0km) por el sendero de los Apalaches o el Pacific Crest Trail, el entumecimiento o el hormigueo aumentaron con el peso de la mochila: 35\u00A0% con mochilas de 10 a 20\u00A0libras, 50\u00A0% con 21 a 30\u00A0libras y 69\u00A0% por encima de 31\u00A0libras (Anderson y colegas, 2009).',
        'La misma encuesta encontró que el peso de la mochila y el tipo de calzado no se asociaron con otras lesiones musculares y articulares, como esguinces, dolor de larga duración o lesiones musculares. Así que nadie ha demostrado que una mochila más ligera signifique menos dolor de talón o de arco. Aun así, es un buen punto de partida si los pies solo te duelen los días en que cargas la mochila completa.',
        'Si los dedos te arden o te hormiguean, afloja los cordones sobre el empeine y revisa el cinturón de cadera y las correas de los hombros, y consulta a un profesional de la salud si no se te pasa después de quitarte la mochila.',
      ],
      cites: [CITE.andersonPack],
    },
    {
      h2: 'Botas o zapatillas de trail: ¿qué es mejor para el dolor de pies?',
      paragraphs: [
        '**Ningún ensayo ha comparado botas y zapatillas de trail para el dolor de pies, así que nadie puede decir cuál es mejor.** Lo que existe son encuestas:',
        {
          list: [
            'En la encuesta de 2006 a 128 senderistas de larga distancia, reportaron entumecimiento u hormigueo el 29\u00A0% con sandalias, el 36\u00A0% con zapatillas para correr, el 42\u00A0% con zapatos de senderismo y el 68\u00A0% con botas. Al tener en cuenta el peso de la mochila, el tipo de calzado dejó de importar, lo que sugiere que quienes usaban botas también llevaban mochilas más pesadas (Anderson y colegas, 2009).',
            'En la encuesta de 2018 a 2019 del sendero de los Apalaches, el 58\u00A0% usaba zapatillas para correr o de trail y el 24\u00A0% botas. Ambos se asociaron con menos molestias que otro calzado, como las sandalias (Chrusch y Kavin, 2021).',
          ],
        },
        'Así que elige el calzado que te quede bien, con el que ya hayas caminado y que se adapte al terreno. Para el dolor de talón en general, la guía de 2023 recomienda no usar plantillas solas para un alivio a corto plazo, grado B, y las acepta junto con otros tratamientos, grado C (Koc y colegas, 2023). Más en [plantillas o ejercicios](/es/plantillas-o-ejercicios/). Si quieres pasarte a un calzado más ligero o más plano, hazlo a lo largo de semanas, no en la primera caminata larga; [zapatos barefoot](/es/zapatos-barefoot/) explica por qué.',
      ],
      cites: [CITE.andersonPack, CITE.chruschHikers, CITE.guideline],
    },
    {
      h2: '¿Qué tan rápido puedes aumentar la distancia?',
      keyFact: 'Los senderistas que no entrenaron antes del sendero de los Apalaches reportaron cualquier lesión muscular, articular u ósea con más frecuencia, 80\u00A0% frente a 58\u00A0% (Chrusch y Kavin, 2021).',
      paragraphs: [
        '**Ningún estudio da un aumento semanal seguro para senderistas.** La evidencia más cercana es la encuesta del sendero de los Apalaches: el 13\u00A0% de los senderistas que no entrenaron antes del sendero reportó más lesiones en general (80\u00A0% frente a 58\u00A0%), más dolor de pie (38\u00A0% frente a 28\u00A0%), más dolor en el Aquiles (18\u00A0% frente a 11\u00A0%) y más fracturas por estrés en la parte baja de la pierna (5\u00A0% frente a 2\u00A0%). El entrenamiento de fuerza, los estiramientos o el yoga, y el entrenamiento de resistencia se asociaron cada uno con menos lesiones (Chrusch y Kavin, 2021). Es una encuesta, así que puede que las personas más en forma o más cuidadosas simplemente entrenaran más.',
        'Una forma práctica de progresar, no una forma probada:',
        {
          list: [
            'Cambia una sola cosa a la vez: más distancia, más subida y bajada, o una mochila más pesada, no las tres el mismo día.',
            'Usa la mañana siguiente como control. Un dolor que se calma para la mañana siguiente y no va aumentando semana tras semana es una señal razonable de que la carga está bien. Esa regla viene de un ensayo sobre el Aquiles, no de senderistas (Silbernagel y colegas, 2007).',
            'Después de un día intenso, planea uno suave. La [Appalachian Trail Conservancy](https://appalachiantrail.org/experience/hike-the-trail/essential-skills/health-hygiene/common-injuries/) (en inglés) da un consejo parecido a los senderistas de larga distancia: detente por ese día si los pies empiezan a dolerte, se hinchan o los sientes tensos después de haber caminado más de lo normal.',
          ],
        },
        'Vale la pena fortalecer la pantorrilla entre caminatas, porque hace buena parte del trabajo en las subidas y bajadas. Las elevaciones de talón de abajo son las mismas de la guía de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      cites: [CITE.chruschHikers, CITE.silbernagel],
    },
    {
      h2: '¿Qué rutina conviene antes y después de una caminata?',
      paragraphs: [
        'Que sea breve. Antes de la caminata, uno o dos minutos para mover los tobillos. Después, los estiramientos para el talón y la pantorrilla. Los días entre caminatas, elevaciones de talón para ganar fuerza. Son las dosis iniciales de Walkito, tomadas de las guías principales. Suspende el ejercicio por ese día si el dolor pasa de 6 sobre 10.',
        'Seamos claros sobre lo que hace estirar antes de caminar. En un ensayo con 1538 reclutas del ejército durante tres meses de entrenamiento, estirar seis grupos musculares de las piernas antes de cada sesión no redujo las lesiones de forma relevante (Pope y colegas, 2000). Los estiramientos de aquí son para el dolor de talón y de pantorrilla, donde la guía de 2023 califica los estiramientos con **A**, y el trabajo de fuerza para la pantorrilla recibe una **B** (Koc y colegas, 2023).',
      ],
      exercises: [
        {
          name: 'Movilidad de tobillo (antes)',
          evidence: { level: 'early', why: 'Dosis propia de Walkito. No hay un protocolo publicado para senderistas.' },
          dose: '2 series de 15, cada pierna',
          often: 'Antes de la caminata',
          feel: 'Un estiramiento en la parte delantera del tobillo y un tirón en la parte baja de la pantorrilla',
          how: 'Ponte con un pie adelantado y las manos en una pared, un árbol o tus bastones. Lleva la rodilla delantera hacia delante por encima de los dedos, con el talón apoyado. Despacio, unos dos segundos en cada sentido. Cambia de pierna después de cada serie.',
          stop: 'El dolor llega a 6 sobre 10',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla avanza por encima de los dedos, el talón se queda apoyado',
          alt: 'Una figura con un pie adelantado que lleva la rodilla delantera hacia delante por encima de los dedos, con el tobillo resaltado',
        },
        {
          name: 'Estiramiento de pantorrilla (después)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto. No se estudió en senderistas.' },
          dose: '2 repeticiones de 30\u00A0segundos, cada pierna',
          often: 'Después de la caminata',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Apoya las manos en una pared. Mantén la pierna de atrás recta, el talón de atrás apoyado en el suelo y la cadera hacia delante. Una pantorrilla rígida tira del talón, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'Dolor agudo en el talón o en el Aquiles',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás recta, talón de atrás apoyado, cadera hacia delante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás recta, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (después)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto. No se estudió en senderistas.' },
          dose: '2 repeticiones de 30\u00A0segundos, cada pierna',
          often: 'Después de la caminata',
          feel: 'Un estiramiento cerca del talón',
          how: 'Toma la misma posición, mantén el talón de atrás apoyado en el suelo y luego dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor agudo en el talón o en el Aquiles',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelantado y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Estiramiento plantar (después y a la mañana siguiente)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto. No se estudió en senderistas.' },
          dose: '2 repeticiones de 30\u00A0segundos, cada pie',
          often: 'Después de la caminata y antes de tus primeros pasos a la mañana siguiente',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Tira de los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. A la mañana siguiente, haz el primero sentado en el borde de la cama, antes de que el pie toque el suelo.',
          stop: 'Dolor agudo en el talón',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: tira de los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura que tira hacia atrás de los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Automasaje plantar (después)',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Está aquí por comodidad.' },
          dose: '1\u00A0minuto, cada pie',
          often: 'Después de la caminata o por la noche',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y haz rodar la planta del pie despacio sobre una pelota de masaje, con presión firme. Si haces muecas de dolor, afloja. ¿No tienes pelota? También sirven pasadas firmes con el pulgar del talón a los dedos.',
          stop: 'Un dolor que te hace hacer muecas, o un punto adolorido en un hueso',
          media: 'foot_roll',
          caption: 'Automasaje plantar: haz rodar la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada que hace rodar la planta de un pie sobre una pelota, con la planta resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies (entre caminatas)',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Un programa de elevaciones de talón mejoró el dolor de talón más rápido que los estiramientos en un ensayo con 48\u00A0personas (Rathleff 2015).' },
          dose: '3 series de 10, con los dos pies',
          often: 'De 2 a 3 días por semana, no el día después de una caminata intensa',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies, sube en línea recta sobre los dedos gordos y luego baja despacio. Cuando te resulte fácil, pasa a una pierna o a la [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/). Para el dolor en el Aquiles, el ejercicio principal es bajar despacio en un escalón: consulta [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
          stop: 'Dolor en el talón o en el Aquiles por encima de 6 sobre 10, o peor a la mañana siguiente',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube en línea recta sobre los dedos gordos y luego baja despacio',
          alt: 'Una figura de pie que se eleva sobre las puntas de los dos pies, con la pantorrilla resaltada',
        },
      ],
      cites: [CITE.popeStretching, CITE.guideline, CITE.rathleff],
    },
    {
      h2: '¿Cuándo debes dejar de caminar y consultar a un profesional de la salud?',
      keyFact: 'En una revisión sobre fracturas por estrés, el 81\u00A0% de los pacientes tenía dolor al caminar, y una radiografía temprana detectó solo alrededor del 10\u00A0% (Patel y colegas, 2011).',
      paragraphs: [
        '**Deja de caminar y hazte revisar si el dolor está en un punto concreto de un hueso y empeora con cada caminata.** Es el patrón clásico de una fractura por estrés, normalmente en los metatarsianos detrás de los dedos o en el hueso del talón. En una revisión sobre fracturas por estrés, el 81\u00A0% de los pacientes tenía dolor al caminar, y se encontró un punto doloroso en el hueso en el 65,9 al 100\u00A0%. Una radiografía en la primera consulta detectó solo alrededor del 10\u00A0%, así que una radiografía normal no la descarta (Patel y colegas, 2011). Si no estás seguro de qué es, deja de caminar hasta que lo revise un profesional de la salud.',
        'Detente también si no puedes apoyar el pie, si el dolor empezó con una torcedura, una caída o un chasquido, o si el pie está rojo, caliente e hinchado. La lista completa está abajo.',
        'La mayoría de los dolores de talón son menos dramáticos. En la fascitis plantar, alrededor del 90\u00A0% de las personas mejora con tratamiento no quirúrgico, aunque puede tardar meses (Latt y colegas, 2020). Consulta [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/).',
      ],
      sourceNote: 'Las cifras de Patel 2011 son para fracturas por estrés en cualquier localización, no en senderistas. La sensibilidad de la radiografía sube al 30 a 70\u00A0% después de unas tres semanas.',
      cites: [CITE.patelStressFracture, CITE.latt],
    },
  ],
  faq: [
    {
      q: '¿Es normal que te duelan los pies después de hacer senderismo?',
      cites: [CITE.chruschHikers],
      a: 'Cierto dolor después de una caminata larga o empinada es común y a menudo se calma en uno o dos días. En una encuesta a 1295 senderistas del sendero de los Apalaches, el 29\u00A0% reportó dolor de pie. Vale la pena revisar un dolor agudo, que está en un punto concreto de un hueso o que sigue ahí después de unos días tranquilos.',
    },
    {
      q: '¿Por qué me duele el talón después de una caminata?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La causa más común es la fascitis plantar, que duele bajo el talón y suele ser peor con los primeros pasos a la mañana siguiente. La guía de 2023 menciona un aumento reciente de la actividad con carga de peso como desencadenante típico, y una pantorrilla rígida es el factor de riesgo más fuerte que se conoce. El dolor en la parte de atrás del talón apunta al Aquiles.',
    },
    {
      q: '¿Puedo seguir haciendo senderismo con fascitis plantar?',
      cites: [CITE.silbernagel],
      a: 'Mucha gente puede, en rutas más cortas y más planas, si el dolor se mantiene moderado durante la caminata y se calma para la mañana siguiente. Esa regla de la mañana siguiente viene de un ensayo sobre el Aquiles, no de un estudio con senderistas. Si el talón está peor cada mañana, reduce primero la distancia y la bajada. Nuestra guía sobre caminar con fascitis plantar explica cómo volver a aumentar.',
    },
    {
      q: '¿Son mejores las botas o las zapatillas de trail para el dolor de pies?',
      cites: [CITE.andersonPack, CITE.chruschHikers],
      a: 'Nadie lo sabe con seguridad, porque ningún ensayo las ha comparado. En encuestas a senderistas de larga distancia, tanto las botas como las zapatillas de trail se asociaron con menos molestias que las sandalias, y la asociación entre botas y entumecimiento desapareció al tener en cuenta el peso de la mochila. Elige el par que te quede bien y con el que ya hayas caminado.',
    },
    {
      q: '¿Una mochila pesada causa dolor de pies?',
      cites: [CITE.andersonPack],
      a: 'Suma carga a cada paso, pero las encuestas a senderistas solo muestran una asociación clara con el entumecimiento y el hormigueo. En 128 senderistas de larga distancia, pasó del 35\u00A0% con mochilas de 10 a 20\u00A0libras (unos 4,5 a 9\u00A0kg) al 69\u00A0% por encima de 31\u00A0libras (unos 14\u00A0kg). En esa encuesta, el peso de la mochila no se asoció con otras lesiones musculares y articulares.',
    },
    {
      q: '¿Por qué me duelen más los pies al bajar?',
      cites: [CITE.bohnePoles],
      a: 'En una bajada, los músculos de las piernas trabajan como frenos mientras se alargan, y el pie se desliza hacia delante dentro del zapato, cargando los dedos y la planta delantera. En un estudio de laboratorio con 15 senderistas que caminaron cuesta abajo, los bastones redujeron la carga en el tobillo, la rodilla y la cadera, con y sin mochila.',
    },
    {
      q: '¿Ayudan los bastones de senderismo con el dolor de pies?',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
      a: 'Reducen la carga sobre las piernas. En 15 senderistas experimentados que caminaron cuesta abajo, los bastones redujeron las fuerzas en el tobillo, la rodilla y la cadera, y en una encuesta a senderistas del sendero de los Apalaches los bastones se asociaron con menos molestias. Ningún ensayo ha probado si los bastones evitan el dolor de pie en sí, así que tómalos como un complemento sensato, no como algo seguro.',
    },
    {
      q: '¿Cuánto tiempo pueden dolerte los pies después de una caminata larga?',
      a: 'El dolor normal de un día intenso suele desaparecer en uno o dos días de actividad tranquila. Si el dolor de talón con los primeros pasos vuelve cada mañana, o el dolor sigue ahí después de una semana de caminatas más cortas, es más probable que se trate de un problema por sobreuso, como la fascitis plantar o el dolor en el Aquiles, y vale la pena que lo revise un profesional de la salud.',
    },
    {
      q: '¿Debo estirar antes de una caminata?',
      cites: [CITE.popeStretching, CITE.guideline],
      a: 'Un calentamiento breve, como la movilidad de tobillo, está bien, pero no esperes que estirar antes de caminar evite lesiones. En un ensayo con 1538 reclutas del ejército, estirar antes del entrenamiento no redujo las lesiones de forma relevante. Los estiramientos de pantorrilla y de arco después de la caminata son más útiles si te duele el talón, y ahí la guía de 2023 los califica con A.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor está en un punto concreto de un hueso y empeora con cada caminata, lo que puede ser una fractura por estrés',
      'no puedes apoyar el pie o estás cojeando',
      'el dolor empezó con una torcedura, una caída o un chasquido, sobre todo en la parte de atrás del talón',
      'el pie o el tobillo está rojo, caliente o hinchado, o tienes fiebre',
      'una ampolla o una uña parece infectada: enrojecimiento que se extiende, pus o líneas rojas',
      'el entumecimiento, el hormigueo o el ardor no se van después de quitarte la mochila y el calzado',
      'el pie te duele por la noche o en reposo',
      'el dolor sigue empeorando durante dos o tres semanas a pesar de hacer caminatas más cortas',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie con los estiramientos y las elevaciones de talón de esta página. No planifica tus caminatas, así que lleva tu propio plan de rutas y encaja las sesiones a su alrededor, con sesiones más suaves después de un día intenso.',
    more: [
      'Eliges 3, 5 o 7\u00A0días por semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión valoras cómo sientes los pies, y el plan se ajusta. Walkito no hace diagnósticos.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['heelPainAfterWalking', 'achilles', 'ballOfFoot'],
  crumb: 'Dolor de pies después del senderismo',
  campaign: 'guide-hiking-foot-pain-es',
};
