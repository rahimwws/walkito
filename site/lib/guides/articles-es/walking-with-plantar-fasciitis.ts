import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of articles/walking-with-plantar-fasciitis.ts (2026-10-17),
 * written around «caminar con fascitis plantar» («¿puedo caminar con fascitis
 * plantar?», «cuántos pasos al día con fascitis plantar»). Latin American
 * Spanish with «tú», like the rest of /es/. Figures, grades and sources are
 * identical to the English page after its fact-check. The link to the best
 * insoles page was dropped (no Spanish version); the words stay.
 */

export const WALKING_PF_ES: Guide = {
  lang: 'es',
  page: 'walkingPf',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Caminar con fascitis plantar: ¿cuánto se puede?',
  description:
    'Caminar con fascitis plantar: una regla de dolor para durante y la mañana siguiente, la verdad sobre los pasos, zapatos, superficies y cómo ir aumentando.',
  h1: '¿Cuánto puedes caminar con fascitis plantar?',
  lede:
    'Por lo general puedes seguir caminando con [fascitis plantar](/es/fascitis-plantar/), siempre que el dolor se mantenga moderado mientras caminas y se calme para la mañana siguiente. La guía de 2023 para el dolor de talón recomienda dar consejos para ajustar la carga sobre el pie y no les dice a las personas que dejen de caminar, aunque califica ese consejo con **E**, lo que significa que se basa en teoría, no en ensayos (Koc y colegas, 2023). Ningún estudio da un número seguro de pasos, así que revisar cómo amanece el talón es mejor guía que una meta de pasos.',
  intro: [
    'Esta página trata de cuánto caminar mientras te duele el talón y de cómo ir aumentando poco a poco. Si tu pregunta principal es por qué te duele el talón después de caminar, mira [dolor de talón al caminar](/es/dolor-de-talon-al-caminar/). Si te duelen los pies por estar de pie en un mismo lugar, mira [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/).',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón incluye consejos para cambiar la carga sobre el pie en el trabajo, en el tiempo libre y en la vida diaria, además de consejos sobre calzado, con grado **E**: basados en teoría, no en ensayos (Koc y colegas, 2023).',
    'En un ensayo con 180\u00A0adultos con fasciopatía plantar, un grupo que recibió solo el consejo de mantenerse activo, reducir las actividades que aumentan el dolor y usar una talonera mejoró de forma clínicamente relevante en unos tres meses (Riel y colegas, 2023).',
    'Una regla de control del dolor permite un dolor de hasta unos 5 de 10 durante la actividad, siempre que se calme para la mañana siguiente y no aumente de una semana a otra. Se probó en 38\u00A0personas con dolor de Aquiles, no con fascitis plantar (Silbernagel y colegas, 2007).',
    'Ningún estudio da una cantidad de pasos al día para la fascitis plantar. En 50\u00A0personas con dolor de talón y 25 sin él, el nivel de actividad no fue distinto, pero el grupo con dolor de talón pasaba 3,4\u00A0horas más al día de pie (Landorf y colegas, 2023).',
    'Una guía de buenas prácticas de 2021 para el dolor de talón aconseja zapatos con poca diferencia de altura entre el talón y la punta, y evitar caminar descalzo y los zapatos planos y sin soporte hasta que los síntomas desaparezcan (Morrissey y colegas, 2021).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Caminar es bueno o malo para la fascitis plantar?',
      keyFact: 'En un ensayo con 180\u00A0adultos, el grupo que recibió el consejo de mantenerse activo pero reducir las actividades que aumentan el dolor, más una talonera, mejoró de forma clínicamente relevante en unos tres meses (Riel y colegas, 2023).',
      paragraphs: [
        '**Caminar no es el enemigo, pero caminar demasiado de una vez puede irritar el talón.** La guía de 2023 para el dolor de talón no les dice a las personas que dejen de caminar. Su resumen incluye educación sobre formas de cambiar la carga sobre el pie en el trabajo, en el tiempo libre y en la vida diaria, y sobre el calzado. Califica ese consejo con **E**, lo que significa que lo respaldan la teoría y la ciencia básica, pero ningún ensayo lo ha probado (Koc y colegas, 2023).',
        'La guía también menciona, como rasgo típico de la fascitis plantar, un dolor de talón que empezó después de un aumento reciente de la actividad de pie o caminando. Así que la pregunta casi nunca es si caminar. Es cuánto, y qué tan rápido aumentas.',
        'Un ensayo danés comparó un consejo simple con tratamientos añadidos. 180\u00A0adultos con fasciopatía plantar (otro nombre de la fascitis plantar) se dividieron en tres grupos. Uno recibió solo consejos y una talonera; los otros dos añadieron entrenamiento de elevaciones de talón, y uno de ellos recibió además una infiltración con corticoides. El consejo fue reducir las actividades que provocan crisis y luego volver poco a poco al nivel de actividad anterior, guiándose por los síntomas. Los tres grupos mejoraron de forma clínicamente relevante en unos tres meses (Riel y colegas, 2023).',
        'Puede que caminar en sí no sea lo que se relaciona con el dolor de talón. En un estudio de 2023, 50\u00A0personas con dolor de talón y 25\u00A0personas comparables sin él reportaron una actividad física parecida. La diferencia estuvo en estar de pie: el grupo con dolor de talón pasaba 3,4\u00A0horas más al día de pie (Landorf y colegas, 2023). Ese estudio muestra una relación, no una causa. Si tu día es sobre todo estar de pie, [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) cubre esa parte.',
      ],
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.rielFixHeelProtocol, CITE.landorfFootwear],
    },
    {
      h2: '¿Cuánto puedes caminar? Una regla simple de dolor',
      keyFact: 'En un ensayo con 38\u00A0personas con dolor de Aquiles, quienes siguieron activos con un dolor de unos 5 de 10 como máximo, que se calmaba para la mañana siguiente, estaban igual de bien a los doce meses que quienes dejaron de correr y saltar durante seis semanas (Silbernagel y colegas, 2007).',
      paragraphs: [
        '**Usa tu dolor como medidor de la dosis, y revísalo dos veces: durante la caminata y a la mañana siguiente.** Ningún estudio ha probado una regla para caminar con fascitis plantar. La regla probada más cercana viene de la rehabilitación de tendones, así que úsala como una guía prestada, no como un límite comprobado para el talón.',
        'En un ensayo de 2007, 38\u00A0personas con dolor en el tendón de Aquiles se dividieron en dos grupos. Un grupo siguió corriendo y saltando con un modelo de control del dolor: se permitía un dolor de hasta unos 5 de 10 durante la actividad, siempre que se calmara para la mañana siguiente y no aumentara de una semana a otra. El otro grupo dejó esas actividades durante las primeras seis semanas. Los dos grupos mejoraron, y mantenerse activo no llevó a peores resultados a los doce meses (Silbernagel y colegas, 2007). Hay más sobre ese ensayo en [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
        'Para el dolor de talón, una guía de buenas prácticas de 2021, basada en una revisión de 51\u00A0ensayos, entrevistas con 14\u00A0expertos y una encuesta a pacientes, dice que el control del dolor se recomendó con fuerza y que hay que enseñar a las personas a leer cómo responde su dolor a la actividad (Morrissey y colegas, 2021). No da un número. La tabla de abajo aplica la regla probada a caminar, con una escala de 0 (sin dolor) a 10 (el peor dolor). La columna de la próxima caminata es una lectura práctica de esa regla, no un protocolo probado.',
      ],
      table: {
        caption: 'Cómo leer tu talón después de caminar (escala de dolor de 0 a 10)',
        head: ['Lo que notas', 'Qué significa', 'Próxima caminata'],
        rows: [
          ['De 0 a 2 al caminar, mañana siguiente normal', 'Bien dentro del límite', 'Mantenla o añade un poco'],
          ['De 3 a 5 al caminar, se calma para la mañana siguiente', 'Carga aceptable', 'Repite la misma caminata'],
          ['Más de 5 durante la caminata', 'Demasiado para hoy', 'Acórtala o baja el ritmo'],
          ['Primeros pasos de la mañana siguiente peores que de costumbre', 'Demasiado ayer', 'Reduce y luego vuelve a aumentar poco a poco'],
          ['Peor cada semana', 'La carga va subiendo sin que lo notes', 'Da un paso atrás y consulta a un profesional de la salud si sigue'],
        ],
      },
      after: [
        'La revisión de la mañana es la que más importa. El dolor en los primeros pasos es el síntoma clásico de la fascitis plantar, y es la señal más clara de cómo aguantó tu pie el día anterior. [Dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) explica ese patrón y los estiramientos que conviene hacer antes de pararte.',
        'Un dolor agudo que te hace cojear, un dolor que aumenta con cada caminata y no mejora con el reposo, o un dolor por la noche quedan fuera de esta regla. Cojear también puede cargar la rodilla, la cadera y la espalda de otra forma: mira [fascitis plantar y dolor de rodilla, cadera o espalda](/es/fascitis-plantar-dolor-de-rodilla/). Revisa la lista al final de esta página.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0personas por grupo; la puntuación VISA-A-S pasó de 57 a 85 en el grupo activo y de 57 a 91 en el grupo de reposo a los doce meses, sin diferencia significativa en el ritmo de mejora.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: '¿Cuántos pasos al día se pueden dar con fascitis plantar?',
      keyFact: 'Ningún estudio da una cantidad de pasos al día para la fascitis plantar. En un análisis conjunto de 47\u00A0471\u00A0adultos, la reducción del riesgo de muerte se estabilizó entre 6000 y 8000\u00A0pasos al día en personas de 60\u00A0años o más (Paluch y colegas, 2022).',
      paragraphs: [
        '**No hay un número de pasos basado en evidencia para la fascitis plantar.** No encontramos ningún ensayo que fijara una cantidad de pasos o una distancia para personas con dolor de talón y midiera el resultado. Cualquier página que te dé una cifra fija para el dolor de talón está adivinando.',
        'Los famosos 10\u00A0000\u00A0pasos son una meta de salud general, no una cifra de la investigación sobre el pie, y aun ahí la evidencia que los respalda es escasa. Un análisis de 2022 de 15\u00A0estudios y 47\u00A0471\u00A0adultos encontró que más pasos al día iban con un menor riesgo de muerte, pero el beneficio se estabilizó en unos 6000 a 8000\u00A0pasos al día en adultos de 60\u00A0años o más, y en 8000 a 10\u00A0000 en adultos más jóvenes (Paluch y colegas, 2022). Eso habla de la salud a largo plazo, no de lo que un talón irritado aguanta esta semana.',
        'Un número más útil es el tuyo. La mayoría de los celulares cuentan pasos. Mira una semana normal antes de que empezara el dolor y una semana normal ahora. Eso te da un punto de partida, y la regla de dolor de arriba te dice si mantener, añadir o reducir.',
        'Repartir lo que caminas puede ayudar más que el total. La guía de buenas prácticas de 2021 aconseja cortar los periodos largos de carga estática, como estar de pie (Morrissey y colegas, 2021). Varias caminatas cortas repartidas en el día le dan al talón menos carga continua que una larga, aunque ningún estudio ha comparado las dos opciones en la fascitis plantar.',
      ],
      cites: [CITE.paluchSteps, CITE.morrisseyBestPractice],
    },
    {
      h2: '¿Cómo vuelves a caminar más?',
      paragraphs: [
        'El consejo que se probó en el ensayo danés fue reducir las actividades que provocan crisis y luego volver poco a poco al nivel de actividad anterior, guiándose por los síntomas (Riel y colegas, 2020). No fijó un porcentaje semanal, y ningún estudio ha probado uno para la fascitis plantar. Esta es una forma de llevar ese consejo a la práctica:',
        {
          list: [
            'Busca una caminata que pase la regla de dolor: como mucho un dolor moderado durante ella, y una mañana siguiente normal. Si ni siquiera una caminata corta la pasa, empieza con menos.',
            'Repite esa caminata durante unos días. Un solo día bueno no basta para juzgar.',
            'Añade un poco, por ejemplo cinco minutos más, y deja todo lo demás igual. Cambia una sola cosa a la vez: distancia, ritmo, subidas o superficie.',
            'Si la mañana siguiente está peor, vuelve a la última caminata que pasó la regla y quédate ahí más tiempo.',
          ],
        },
        'Los cinco minutos son una sugerencia práctica, no una cifra probada. Lo que importa es que cada aumento sea lo bastante pequeño para que la mañana siguiente te diga con claridad si funcionó.',
        'La recuperación de la fascitis plantar suele ser lenta. Cerca del 90\u00A0% de las personas mejora con tratamiento sin cirugía, como estiramientos, trabajo de pantorrilla y manejo de la carga (Latt y colegas, 2020), pero puede tardar meses. Mira [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/). Si además corres, [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) explica el kilometraje y los cambios de carga.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.latt],
    },
    {
      h2: '¿Qué zapatos ayudan a caminar con fascitis plantar?',
      keyFact: 'La guía de 2023 califica las plantillas usadas solas para aliviar el dolor a corto plazo con B en contra, y con C cuando se combinan con otros tratamientos, incluida la amortiguación del talón (Koc y colegas, 2023).',
      paragraphs: [
        '**Los zapatos cómodos y amortiguados con poca diferencia de altura entre el talón y la punta son el consejo de los expertos, pero ningún ensayo ha probado un zapato concreto para caminar.** La guía de buenas prácticas de 2021 dice que los zapatos deben dar soporte y ser cómodos, tener una pequeña caída del talón a la punta (el talón queda un poco más alto que los dedos) y ser algo que de verdad te vayas a poner. También aconseja evitar caminar descalzo y los zapatos planos y sin soporte hasta que los síntomas hayan desaparecido por completo (Morrissey y colegas, 2021).',
        'La guía de 2023 incluye el consejo sobre calzado en su recomendación de educación con grado **E**. Sobre las plantillas es más concreta: no las uses como único tratamiento (**B** en contra), pero pueden ayudar combinadas con otros tratamientos (**C**). Eso incluye una talonera de farmacia o zapatos que amortigüen el talón (Koc y colegas, 2023).',
        'La dureza del zapato puede importar. En el estudio de 2023 con 50\u00A0personas con dolor de talón y 25 sin él, el grupo con dolor de talón usaba zapatos con el talón más duro y decía tener más problemas para encontrar zapatos adecuados (Landorf y colegas, 2023). De nuevo, es una relación, no una prueba de que los zapatos blandos ayuden.',
        'Para ver qué muestran los ensayos sobre las plantillas para la fascitis plantar, mira [¿plantillas o ejercicios?](/es/plantillas-o-ejercicios/). ¿Estás pensando en zapatos minimalistas? [Zapatos barefoot](/es/zapatos-barefoot/) explica por qué no encajan bien mientras el talón está adolorido.',
      ],
      cites: [CITE.morrisseyBestPractice, CITE.guideline, CITE.landorfFootwear],
    },
    {
      h2: '¿Importa la superficie sobre la que caminas?',
      paragraphs: [
        '**Probablemente, pero la evidencia es indirecta.** La guía menciona la actividad de pie o caminando en el trabajo, sobre todo en condiciones con poca absorción del impacto, como factor de riesgo de la fascitis plantar (Koc y colegas, 2023). Eso apunta al suelo duro y a los zapatos duros como una carga para el talón.',
        'La evidencia directa es escasa. En el estudio comparativo de 2023, las personas con y sin dolor de talón no se diferenciaron en si estaban de pie sobre pisos duros (Landorf y colegas, 2023). Una serie de casos de 20\u00A0corredores reportó menos dolor después de alrededor de un mes y medio de correr descalzos sobre pasto, pero no tenía grupo de comparación (MacGabhann y colegas, 2022). Ningún ensayo ha comparado superficies para caminar con fascitis plantar.',
        'Opciones prácticas mientras el talón está adolorido:',
        {
          list: [
            'Elige pasto, un camino de parque o una pista en lugar de concreto para las caminatas largas, si así te sientes mejor.',
            'No te quites los zapatos en casa sobre loseta o madera, sobre todo en los primeros pasos del día.',
            'Ve con calma en las bajadas largas y en las cuestas empinadas hasta que la caminata en plano pase la regla de dolor. Más sobre bajadas, mochilas y bastones en [dolor de pies después del senderismo](/es/dolor-de-pies-senderismo/).',
          ],
        },
        'Un dolor profundo justo en el centro del talón que empeora claramente sobre suelo duro puede venir de la almohadilla de grasa del talón y no de la fascia plantar. Mira [síndrome de la almohadilla de grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
      ],
      cites: [CITE.guideline, CITE.landorfFootwear, CITE.macgabhannGrass],
    },
    {
      h2: '¿Qué ejercicios hacen más fácil caminar?',
      keyFact: 'La guía de 2023 califica con A los estiramientos de fascia plantar y de pantorrilla, y con B el entrenamiento de fuerza (Koc y colegas, 2023).',
      paragraphs: [
        'Los ejercicios pueden ayudar a que el talón tolere más carga, de modo que con el tiempo la misma caminata pase la regla de dolor con más facilidad, aunque ningún estudio lo ha probado para caminar. La guía de 2023 califica los estiramientos de fascia plantar y de pantorrilla con **A**, su grado más alto, y el entrenamiento de fuerza con **B**.',
        'Una pantorrilla tensa es parte del cuadro. En un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100 sin ella, la flexión limitada del tobillo fue el factor de riesgo más fuerte, y pasar de pie la mayor parte de la jornada laboral también aumentó la probabilidad (Riddle y colegas, 2003). Mira [pantorrillas tensas](/es/pantorrillas-tensas/).',
        'En un ensayo con 48\u00A0personas, las elevaciones de talón con carga aliviaron el dolor y mejoraron la función diaria más rápido que los estiramientos, y a los doce meses los dos grupos estaban más o menos igual (Rathleff y colegas, 2015). Las tarjetas de abajo son las dosis iniciales de Walkito, no una indicación médica. La serie completa está en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pie',
          often: 'En la mayoría de las sesiones, y antes de los primeros pasos del día',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'Dolor agudo en el talón',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'En la mayoría de las sesiones, y antes de una caminata más larga',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás bien apoyado en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'Dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'En la mayoría de las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición, con el talón de atrás bien apoyado en el piso, y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Con la rodilla doblada trabajas sobre todo el sóleo, casi sin carga en el talón, algo que conviene en los días en que lo que caminas ya está cerca de tu límite.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga. Apóyate en una pared para mantener el equilibrio.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Elevación de talones con toalla',
          evidence: { level: 'moderate', why: 'Es la rutina de un ensayo con 48\u00A0personas, y la guía de 2023 califica el trabajo de fuerza con B.' },
          dose: '4 series de 10, cada pierna, con peso extra',
          often: 'Días de fuerza, cuando el dolor de la mañana ya haya bajado',
          feel: 'Trabajo fuerte en la pantorrilla',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tarda tres segundos en subir, mantén dos arriba y tarda tres en bajar. En este nivel Walkito añade peso, por ejemplo una mochila. La toalla es lo que hace que este ejercicio trabaje la fascia plantar y no solo la pantorrilla. Más sobre la [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/).',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevación de talones con toalla',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos arriba, dos arriba quieto, tres abajo',
          alt: 'Una figura sube en puntas sobre un escalón con una toalla enrollada, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Debo caminar si tengo fascitis plantar?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Por lo general sí, en la cantidad que tu talón aguante. La guía de 2023 para el dolor de talón recomienda ajustar la carga sobre el pie y no aconseja dejar de caminar, aunque ese consejo se basa en teoría (grado E). En un ensayo con 180\u00A0adultos, el consejo de mantenerse activo pero reducir las actividades que aumentan el dolor, más una talonera, se acompañó de una mejora relevante en unos tres meses.',
    },
    {
      q: '¿Caminar es bueno para la fascitis plantar?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Caminar en cantidades moderadas en general está bien, aunque ningún estudio ha probado cuánto es lo mejor. En un estudio, las personas con dolor de talón eran tan activas como las que no lo tenían, pero pasaban 3,4\u00A0horas más al día de pie. Una guía de buenas prácticas aconseja aprender a controlar cómo responde tu dolor a la actividad.',
    },
    {
      q: '¿Cuántos pasos al día se pueden dar con fascitis plantar?',
      cites: [CITE.paluchSteps],
      a: 'Ningún estudio da un número de pasos para la fascitis plantar. La cifra de 10\u00A0000 es una meta de salud general, y en la investigación sobre mortalidad el beneficio se estabilizó entre 6000 y 8000\u00A0pasos al día en adultos de 60\u00A0años o más. Para un talón irritado, parte de tu cantidad habitual y deja que el dolor de la mañana siguiente decida si añadir o reducir.',
    },
    {
      q: '¿Cuánto dolor es aceptable al caminar con fascitis plantar?',
      cites: [CITE.silbernagel],
      a: 'Una regla probada permite un dolor de hasta unos 5 de 10 durante la actividad, siempre que se calme para la mañana siguiente y no aumente de una semana a otra. Viene de un ensayo con 38\u00A0personas con dolor de Aquiles, no con fascitis plantar, así que úsala como guía. Un dolor mayor, o una mañana peor, significa que toca reducir.',
    },
    {
      q: '¿Caminar puede empeorar la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'Sí, si haces mucho más de lo que tu talón está acostumbrado a hacer. La guía de 2023 menciona el dolor de talón después de un aumento reciente de la actividad de pie o caminando como rasgo típico de la fascitis plantar. Una caminata larga de repente, una ruta nueva con cuestas o un día sobre pisos duros pueden [provocar una crisis](/es/brote-de-fascitis-plantar/). Los aumentos pequeños y constantes son más fáciles para el talón.',
    },
    {
      q: '¿Debo dejar de caminar por completo para que se calme la fascitis plantar?',
      cites: [CITE.silbernagel, CITE.guideline],
      a: 'Ningún estudio muestra que haga falta reposo total. La guía de 2023 recomienda ajustar la carga y no aconseja dejar de caminar. En un ensayo sobre dolor de Aquiles, quienes siguieron activos dentro de un límite de dolor estaban igual de bien a los doce meses que quienes dejaron de correr y saltar durante seis semanas. Si incluso las caminatas cortas te causan un dolor agudo o te hacen cojear, consulta a un profesional de la salud.',
    },
    {
      q: '¿Qué zapatos son mejores para caminar con fascitis plantar?',
      cites: [CITE.morrisseyBestPractice, CITE.guideline],
      a: 'Los zapatos cómodos y amortiguados, con el talón un poco más alto que los dedos, son el consejo de los expertos. Una guía de buenas prácticas de 2021 aconseja evitar caminar descalzo y los zapatos planos y sin soporte hasta que los síntomas desaparezcan. La guía de 2023 dice que las plantillas o las taloneras pueden ayudar combinadas con otros tratamientos, pero no solas.',
    },
    {
      q: '¿Es mejor caminar sobre pasto o sobre concreto con fascitis plantar?',
      cites: [CITE.guideline, CITE.macgabhannGrass],
      a: 'El suelo más blando puede ser más fácil, pero ningún ensayo ha comparado superficies para caminar con fascitis plantar. La guía de 2023 relaciona el trabajo de pie sobre superficies que absorben mal el impacto con el riesgo de fascitis plantar. Una pequeña serie de casos de corredores sobre pasto reportó menos dolor, pero no tenía grupo de comparación. Guíate por cómo amanece tu talón.',
    },
    {
      q: '¿Puedo caminar descalzo en casa con fascitis plantar?',
      cites: [CITE.morrisseyBestPractice],
      a: 'Es mejor evitarlo mientras te duela el talón, sobre todo sobre loseta o madera a primera hora de la mañana. Una guía de buenas prácticas de 2021 para el dolor de talón desaconseja caminar descalzo y el calzado plano y sin soporte hasta que los síntomas hayan desaparecido por completo. Lo habitual es usar zapatos con soporte o pantuflas firmes para los primeros pasos del día.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor de talón empezó después de una caída, un salto o una torcedura, o no puedes apoyar el pie',
      'el dolor aumenta con cada caminata y no mejora con el reposo, o te duele al apretar los lados del talón (posible fractura por estrés)',
      'el talón te duele de noche o en reposo, no solo al caminar',
      'tienes adormecimiento, hormigueo o ardor en el pie',
      'el talón está rojo, caliente o hinchado, o te sientes mal o tienes fiebre',
      'te duelen los dos talones junto con otras articulaciones, o tienes rigidez por la mañana en otras partes del cuerpo',
      'tienes diabetes o mala circulación y el pie te duele o se ve distinto',
      'el dolor empeora semana tras semana aunque hayas reducido la actividad',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie. No fija una meta de pasos ni planea tus caminatas, pero lee tu talón igual que esta página: por cómo se siente tu pie a la mañana siguiente.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta: un día largo de pie hace que la siguiente sesión de fuerza sea más ligera. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['heelPainAfterWalking', 'heelPain', 'standing'],
  crumb: 'Caminar con fascitis plantar',
  campaign: 'guide-walking-with-plantar-fasciitis-es',
};
