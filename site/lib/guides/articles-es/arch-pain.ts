import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/arch-pain.ts` (2026-10-07), written around the
 * Spanish queries «dolor en el arco del pie», «dolor arco del pie al caminar».
 * Figures, grades and qualifiers are identical to the English page. No new
 * citations.
 */

export const ARCH_PAIN_ES: Guide = {
  lang: 'es',
  page: 'archPain',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Dolor en el arco del pie: causas y qué hacer',
  description:
    'Dolor en el arco del pie al caminar: fascitis plantar, pie plano, DTTP, pie cavo o nervio. Cómo distinguirlas, ejercicios y cuándo consultar.',
  h1: 'Dolor en el arco del pie: qué lo causa y qué hacer',
  lede:
    'El dolor en el arco del pie normalmente viene de una de unas pocas condiciones: fascitis plantar, pie plano o arcos caídos, disfunción del tendón tibial posterior, arcos altos que no absorben bien el impacto, sobreuso, o irritación de un nervio como el síndrome del túnel del tarso. La causa cambia lo que conviene hacer. Esta página muestra las más comunes, enlaza a las guías completas de ejercicios donde existen, y cubre los ejercicios que le sirven al arco directamente.',
  takeaways: [
    'La fascitis plantar es la causa individual más común del dolor de arco y de talón. La guía de 2023 para el dolor de talón le da al estiramiento una A y al entrenamiento de fuerza una B (Koc y colegas, 2023).',
    'La disfunción del tendón tibial posterior (DTTP), un debilitamiento del tendón que sostiene el arco, es la causa más común de pie plano adquirido en adultos (Ross y colegas, 2018).',
    'Tanto el pie plano como el pie cavo alteran la forma en que la fuerza viaja por el arco al caminar, pero los patrones de dolor y los ejercicios son distintos.',
    'Una menor flexibilidad de tobillo en dorsiflexión, es decir, una pantorrilla rígida, fue el factor de riesgo independiente más fuerte de la fascitis plantar en un estudio de casos y controles con 50\u00A0casos y 100\u00A0controles (Riddle y colegas, 2003).',
    'El dolor de arco que viene con entumecimiento, hormigueo, ardor o debilidad necesita un profesional de la salud para descartar un atrapamiento de nervio u otra causa neurológica antes de hacer ejercicio.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué causa el dolor en el arco del pie?',
      paragraphs: [
        'El arco se sostiene por la fascia plantar, el tendón tibial posterior, los músculos intrínsecos del pie y los huesos y ligamentos del mediopié. Dolor en el arco significa que una o más de estas estructuras están bajo más estrés del que pueden manejar. Las causas más comunes se agrupan en unos pocos patrones.',
        '**Fascitis plantar** es la causa individual más frecuente. La fascia plantar, una banda gruesa de tejido que va del talón a la base de los dedos, se irrita por la carga repetida. El dolor suele ser peor cerca del talón pero muchas veces se extiende hacia el arco, sobre todo cuando la parte del arco de la fascia está involucrada. La señal típica es un dolor agudo en los primeros pasos después de descansar. Mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) y [fascitis plantar: síntomas, causas y qué ayuda](/es/fascitis-plantar/) para la guía completa.',
        '**Pie plano y arcos caídos** causan dolor de arco al estirar de más la fascia plantar y el tendón tibial posterior. Cuando el arco colapsa al pararte y caminar, esas estructuras reciben una carga para la que no están diseñadas durante periodos largos. Mira [ejercicios para pie plano](/es/ejercicios-pie-plano/) y [pie plano: qué es y qué ayuda](/es/pie-plano/).',
        '**Disfunción del tendón tibial posterior (DTTP)** es la causa más común de pie plano adquirido en adultos. El tendón tibial posterior pasa detrás del tobillo interno y por debajo del arco, sosteniéndolo. Cuando este tendón se debilita o se rompe, el arco va colapsando poco a poco. El dolor se siente a lo largo del tobillo interno y hacia el arco, y empeora con la actividad. Una revisión sistemática de 2018 sobre ejercicio para la DTTP encontró evidencia limitada pero prometedora para el fortalecimiento y el estiramiento. Mira [ejercicios para la disfunción del tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/).',
        '**Pie cavo (arcos altos)** causa dolor de arco de forma diferente. Un arco rígido y alto no se flexiona lo suficiente para absorber el impacto, así que la fuerza se concentra bajo el talón y la parte delantera del pie en vez de repartirse por el mediopié. El dolor bajo el arco en un pie de arco alto muchas veces viene de una fascia plantar tensa. Mira [ejercicios para pie cavo](/es/ejercicios-pie-cavo/).',
        '**Sobreuso** sin una condición con nombre es común en personas que suben de golpe la cantidad de caminata, carrera o tiempo de pie. Los músculos del arco y la fascia plantar todavía no son lo bastante fuertes para la nueva exigencia, y protestan. Esto suele mejorar con una vuelta gradual a la carga anterior más fortalecimiento de la pantorrilla y del arco.',
        '**Irritación nerviosa** como el síndrome del túnel del tarso puede causar ardor, hormigueo o entumecimiento a lo largo del arco. El nervio tibial posterior pasa detrás del hueso interno del tobillo y entra a la planta del pie. Si se comprime, el dolor puede parecerse a la fascitis plantar pero viene con síntomas sensoriales que la fascitis no produce. Esto necesita un profesional de la salud.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview, CITE.riddle],
    },
    {
      h2: '¿Cómo se distinguen unas de otras?',
      paragraphs: [
        'La ubicación del dolor, la hora del día en que es peor y qué lo mejora o lo empeora dan las pistas más claras.',
      ],
      table: {
        caption: 'Dolor de arco: patrones según la causa',
        head: ['Causa', 'Dónde duele', 'Cuándo es peor', 'Pista clave'],
        rows: [
          ['Fascitis plantar', 'Bajo el talón, extendiéndose al arco', 'Primeros pasos después de descansar, sobre todo en la mañana', 'El dolor agudo se calma después de unos minutos caminando'],
          ['Pie plano / arcos caídos', 'A lo largo del arco interno y a veces el tobillo interno', 'Después de mucho rato de pie o caminando', 'El arco colapsa de forma visible al pararse; el dolor se calma sin peso'],
          ['DTTP', 'Tobillo interno y arco', 'Durante y después de la actividad', 'La elevación de talón a una pierna es débil o dolorosa del lado afectado'],
          ['Pie cavo', 'Bajo el mediopié o a lo largo del arco externo', 'Al caminar o correr, sobre todo en superficies duras', 'El arco se mantiene alto incluso de pie; poca absorción del impacto'],
          ['Sobreuso', 'Dolor general en el arco', 'Después de un aumento repentino de carga', 'Sin patrón de dolor matutino; mejora con descanso'],
          ['Nervio (túnel del tarso)', 'A lo largo del arco con hormigueo o ardor', 'Variable, a veces en reposo', 'Entumecimiento, hormigueo o ardor que la fascitis plantar no causa'],
        ],
      },
      after: [
        'Si tu dolor de arco sigue el patrón de dolor matutino y está centrado cerca del talón, empieza con la página de [fascitis plantar](/es/fascitis-plantar/). Si el arco colapsa cuando te paras, mira [ejercicios para pie plano](/es/ejercicios-pie-plano/). Si el dolor viene con entumecimiento o ardor, o si la elevación de talón a una pierna es débil o imposible de un lado, consulta a un profesional de la salud antes de empezar ejercicios.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué ejercicios ayudan con el dolor de arco?',
      keyFact: 'La guía de 2023 para el dolor de talón le da a la fascia plantar y a la pantorrilla una A, su grado más alto, y al entrenamiento de fuerza un grado más bajo, B (Koc y colegas, 2023).',
      paragraphs: [
        'Los ejercicios de abajo se enfocan en el arco y en los músculos de la pantorrilla que tiran de él. Aplican mejor cuando el dolor de arco está relacionado con fascitis plantar, pie plano o sobreuso general. Para la DTTP o el dolor de arco por un nervio, un profesional de la salud debe dirigir el plan de ejercicios. Si algún ejercicio lleva tu dolor a **6/10 o más**, para por el día.',
        'Estas son las dosis de inicio de Walkito, no las dosis de los protocolos de investigación. La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla una A, y al entrenamiento de fuerza una B. El ejercicio de pie corto y el masaje plantar con pelota tienen evidencia más delgada por sí solos. [Cómo escribimos estas guías](/es/sobre-walkito/).',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar una A, su grado más alto.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          how: 'Siéntate y cruza el pie afectado sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir un estiramiento a lo largo del arco, no de la pantorrilla. Si tu arco está peor en la mañana, haz este ejercicio antes de que el pie toque el piso.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo de la parte de abajo del arco',
          stop: 'El dolor llega a 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás hasta sentir el arco',
          alt: 'Una figura jalando los dedos de un pie hacia atrás, con el arco resaltado',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'La guía de 2023 le da al estiramiento de la pantorrilla una A. Una pantorrilla rígida es el factor de riesgo más fuerte de la fascitis plantar (Riddle, 2003).' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared, pierna de atrás estirada, talón abajo, cadera hacia adelante. El gastrocnemio, el músculo más grande y externo de la pantorrilla, solo se estira con la rodilla estirada.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'strong', why: 'Mismo grado A de la guía. Trabaja el sóleo, el músculo más profundo de la pantorrilla.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'La misma posición en la pared, después dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Pie corto, sentado',
          evidence: { level: 'early', why: 'Una revisión de 2024 encontró que el entrenamiento de pie corto cambió la forma del arco en algunos estudios, pero la evidencia de que reduzca el dolor por sí solo es delgada.' },
          dose: '3\u00A0series de 10\u00A0mantenciones de 5\u00A0segundos, cada pie',
          how: 'Siéntate con el pie apoyado en el piso. Jala la parte delantera del pie hacia el talón para que el arco suba. No dobles los dedos. El ejercicio de pie corto entrena los músculos intrínsecos que sostienen el arco.',
          often: 'Días de fuerza',
          feel: 'El arco que sube mientras los dedos se quedan planos',
          stop: 'El dolor llega a 6/10',
          media: 'short_foot_seated',
          caption: 'Pie corto: jala la parte delantera del pie hacia el talón',
          alt: 'Un pie sentado con el arco subiendo, los dedos relajados en el piso',
        },
        {
          name: 'Inversión con banda (tibial posterior)',
          evidence: { level: 'moderate', why: 'La activación selectiva del tibial posterior fue confirmada por resonancia magnética (Kulig, 2004). Recomendado para la rehabilitación de la DTTP en la revisión de 2018.' },
          dose: '3\u00A0series de 15, cada pie',
          how: 'Siéntate con una banda de resistencia alrededor de la parte delantera del pie, anclada al lado. Gira el pie hacia adentro contra la banda. Mantén la rodilla quieta para que el movimiento venga del tobillo, no de la pierna. Esto trabaja el tendón tibial posterior, el tendón que sostiene el arco.',
          often: 'Días de fuerza',
          feel: 'Trabajo a lo largo del tobillo interno y bajo el arco',
          stop: 'El dolor llega a 6/10',
          media: 'band_inversion',
          caption: 'Inversión con banda: mueve el pie, no la pierna',
          alt: 'Una figura sentada girando el pie hacia adentro contra una banda, con el tobillo interno resaltado',
        },
        {
          name: 'Masaje plantar con pelota',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Es una medida de confort entre sesiones.' },
          dose: '2\u00A0minutos, cada pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje o una botella de agua congelada. Presión firme, nunca suficiente como para hacerte encogerte. Esto calma el tejido después de haber trabajado.',
          often: 'Días de recuperación',
          feel: 'Presión firme bajo el pie',
          stop: 'El dolor llega a 6/10',
          media: 'foot_roll',
          caption: 'Masaje plantar con pelota: despacio y firme, alivia cualquier punto agudo',
          alt: 'Una figura sentada rodando la planta de un pie sobre una pelota',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.posteriorTibialReview, CITE.kulig, CITE.cheng],
    },
    {
      h2: '¿Cuándo el dolor de arco es señal de otra cosa?',
      paragraphs: [
        'La mayoría del dolor de arco responde al estiramiento, al ajuste de la carga y al tiempo. Pero algunos patrones apuntan a condiciones que necesitan un profesional de la salud antes de hacer ejercicio.',
        'El dolor con entumecimiento, hormigueo o ardor puede venir del síndrome del túnel del tarso, donde el nervio tibial posterior se comprime detrás del tobillo interno. Esto necesita un diagnóstico clínico, no ejercicio solo.',
        'El dolor de arco que viene con un aplanamiento progresivo del pie, sobre todo de un solo lado, puede señalar una disfunción del tendón tibial posterior en una etapa avanzada. La prueba de elevación de talón a una pierna es un chequeo sencillo: si no puedes subir del todo sobre los dedos en un pie, o si duele mucho más de un lado, un profesional de la salud debe evaluar el tendón antes de que lo cargues más.',
        'El dolor en un punto muy específico que empeora de forma constante con la actividad y no se calma con el descanso normal puede ser una fractura por estrés de uno de los huesos pequeños del mediopié. Esto necesita estudios de imagen, no estiramientos.',
        'El dolor de arco en niños de 8 a 15\u00A0años puede ser [apofisitis calcánea (enfermedad de Sever)](/es/enfermedad-de-sever/), que involucra la placa de crecimiento en vez de la fascia. Esa página cubre lo que ayuda en niños. Walkito está diseñado para adultos.',
      ],
      cites: [CITE.posteriorTibialReview],
    },
    {
      h2: '¿El tipo de pie afecta el dolor de arco?',
      paragraphs: [
        'Sí. Tanto el pie plano como el pie cavo cambian la forma en que la fuerza viaja por el pie, pero en sentidos opuestos.',
        'Un pie plano deja que el arco colapse bajo la carga, estirando la fascia plantar y el tendón tibial posterior más allá de su rango cómodo. Los ejercicios para pie plano se enfocan en fortalecer los músculos del arco (pie corto, separar los dedos, inversión con banda) y la cadera (abducción de cadera), porque una cadera que cede durante el apoyo en una pierna empuja el arco hacia adentro. Mira [ejercicios para pie plano](/es/ejercicios-pie-plano/).',
        'Un pie con arco alto (pie cavo) es rígido y no se flexiona lo suficiente para repartir el impacto. La fuerza se concentra en el talón y la parte delantera del pie. La fascia plantar en un pie de arco alto suele estar tensa. Los ejercicios se enfocan en estirar la pantorrilla y la fascia plantar, más trabajo de estabilidad de tobillo. Las plantillas acolchadas o a medida tienen la mejor evidencia para el dolor por pie cavo. Mira [ejercicios para pie cavo](/es/ejercicios-pie-cavo/).',
        'Un arco normal con sobreuso repentino, por ejemplo una semana con mucha más caminata de lo habitual, causa un dolor general de arco que responde bien a los ejercicios de esta página más una vuelta gradual a la carga normal.',
      ],
    },
    {
      h2: '¿Qué pasa con las plantillas y el calzado para el dolor de arco?',
      paragraphs: [
        'La guía de 2023 para el dolor de talón le da a las plantillas una B en contra de usarlas solas para el dolor a corto plazo de la fascitis plantar. Las plantillas combinadas con otros cuidados, como estiramientos, reciben una C a favor. El calzado con buen soporte se recomienda con frecuencia y puede reducir la molestia, pero ningún ensayo grande ha demostrado que sea mejor que el estiramiento y el trabajo de fuerza.',
        'Para el pie plano, un soporte de arco medial puede reducir el colapso del arco al pararse y caminar, dándole menos trabajo al tendón tibial posterior y a la fascia plantar. Para el pie cavo, una plantilla acolchada absorbe el impacto que el arco rígido no absorbe. En un ensayo de 2006 con 154\u00A0personas con dolor de pie por pie cavo, las plantillas a medida mejoraron el dolor y la función más que una plantilla falsa a los tres meses (Burns y colegas, 2006).',
        'Los zapatos y las plantillas ayudan a manejar los síntomas mientras el ejercicio construye la capacidad que el pie necesita. No son un sustituto el uno del otro.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la causa más común del dolor de arco?',
      cites: [CITE.guideline],
      a: 'La fascitis plantar es la causa individual más común. Ocurre cuando la fascia plantar, una banda gruesa de tejido bajo el pie, se irrita por la carga repetida. El dolor suele estar cerca del talón pero muchas veces se extiende al arco, sobre todo cuando la parte del arco de la fascia está involucrada. La guía de 2023 para el dolor de talón le da al estiramiento una A y al entrenamiento de fuerza una B.',
    },
    {
      q: '¿Por qué me duele el arco del pie al caminar?',
      a: 'El dolor de arco al caminar normalmente viene de una de estas fuentes: fascitis plantar, pie plano que deja que el arco colapse bajo la carga, disfunción del tendón tibial posterior, una pantorrilla rígida que transfiere estrés al arco, o simplemente caminar más de lo que tu pie está acondicionado para hacer. El patrón del dolor, sobre todo si es peor en la mañana o después de la actividad, ayuda a definir cuál es.',
    },
    {
      q: '¿El pie plano puede causar dolor de arco?',
      a: 'Sí. Cuando el arco colapsa al pararse y caminar, la fascia plantar y el tendón tibial posterior se estiran más allá de su rango normal. Ese estiramiento produce dolor en el arco, y a veces a lo largo del tobillo interno. Fortalecer los músculos intrínsecos del pie con ejercicios como el pie corto y la inversión con banda puede ayudar a sostener el arco desde adentro.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: '¿El pie cavo puede causar dolor de arco?',
      a: 'Sí, pero por la razón opuesta. Un arco alto es rígido y no absorbe bien el impacto. La fuerza se concentra en el talón y la parte delantera del pie, y la fascia plantar tensa en un pie de arco alto puede doler a lo largo de toda su longitud. Estirar la pantorrilla y la fascia plantar, más plantillas acolchadas, son los enfoques principales. Mira [ejercicios para pie cavo](/es/ejercicios-pie-cavo/) para más detalle.',
    },
    {
      q: '¿Cuándo debo ir al médico por dolor de arco?',
      a: 'Consulta a un profesional de la salud si el dolor viene con entumecimiento, hormigueo o ardor, lo que puede apuntar a un atrapamiento de nervio. También si el arco se está aplanando de un solo lado, si la elevación de talón a una pierna es débil o imposible en un pie, si el dolor está en un punto preciso y empeorando, o si no ha mejorado después de varias semanas de estiramiento y ajuste de la carga.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: '¿Las plantillas ayudan con el dolor de arco?',
      cites: [CITE.guideline],
      a: 'La guía de 2023 para el dolor de talón le da a las plantillas una B en contra de usarlas solas para la fascitis plantar. Las plantillas combinadas con estiramiento y trabajo de fuerza pueden ayudar a manejar los síntomas mientras el pie gana capacidad. Para el pie cavo, las plantillas acolchadas o a medida tienen mejor evidencia, incluyendo un ensayo aleatorizado que mostró mejoría frente a una plantilla falsa a los tres meses.',
    },
    {
      q: '¿El dolor de arco es lo mismo que la fascitis plantar?',
      a: 'No siempre. La fascitis plantar es una causa específica del dolor de arco, la más común. Pero el dolor de arco también puede venir del pie plano, la disfunción del tendón tibial posterior, el pie cavo, el sobreuso o la irritación de un nervio. Toda fascitis plantar involucra dolor de arco o de talón, pero no todo dolor de arco es fascitis plantar. El patrón del dolor, sobre todo su horario, ayuda a distinguirlas.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor viene con entumecimiento, hormigueo o ardor, lo que puede apuntar a un atrapamiento de nervio',
      'el arco se está aplanando de forma visible de un solo lado, lo que puede señalar una DTTP progresiva',
      'no puedes hacer una elevación de talón a una pierna del lado afectado, o es claramente más débil que el otro',
      'el dolor está en un punto muy específico y empeora con la actividad, lo que puede ser una fractura por estrés',
      'el dolor vino después de una lesión o una caída',
      'hay hinchazón, enrojecimiento o calor alrededor del pie o del tobillo',
      'el dolor no mejora después de varias semanas de estiramiento y ajuste de la carga',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Si tu dolor de arco sigue el patrón de la fascitis plantar, Walkito arma un plan en torno a una meta a la vez. La primera meta es una mejor mañana: dolor de 1/10 o menos durante 14\u00A0días seguidos. El arco tiene su propia meta y sus ejercicios. Si tu dolor de arco viene del pie plano, la app puede trabajar el dolor y el arco como metas separadas.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si no estás seguro de qué causa tu dolor de arco, consulta a un profesional de la salud antes de cargarlo con ejercicio.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor en el arco del pie',
  campaign: 'guide-arch-pain-es',
};
