import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const CALF_RAISES_ES: Guide = {
  lang: 'es',
  page: 'calfRaises',
  mainSource: CITE.rathleff,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Elevaciones de talón para fascitis plantar: cómo y cuántas',
  description:
    'Elevaciones de talón para la fascitis plantar: dosis del protocolo de Rathleff, técnica con toalla, cuántas hacer, cuándo avanzar y cómo empieza Walkito.',
  h1: 'Elevaciones de talón para la fascitis plantar: cómo hacerlas y cuántas',
  lede:
    'Las elevaciones de talón son uno de los [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/), y son el ejercicio detrás del único ensayo aleatorizado diseñado para comparar el trabajo de fuerza con el estiramiento en la fascitis plantar. En un estudio con 48\u00A0personas, las elevaciones de talón con carga alta aliviaron el dolor más rápido que solo estirar durante tres meses. Esta página explica ese ejercicio a fondo: el protocolo exacto, la toalla, cómo avanzar y dónde encaja junto al estiramiento.',
  intro: [
    'La guía de 2023 para el dolor de talón le da al entrenamiento de fuerza un grado **B**, un paso por debajo del estiramiento, que tiene **A**. Recomienda los dos. La elevación de talón es la parte de fuerza de esa pareja. Si tu dolor es reciente y buscas la lista completa de ejercicios, empieza en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Esta página da por hecho que quieres los detalles de la elevación en sí.',
  ],
  takeaways: [
    'En un ensayo con 48\u00A0personas, las elevaciones de talón con carga y una toalla bajo los dedos aliviaron el dolor de la fascitis plantar más rápido que solo estirar a los tres meses, aunque a los doce meses los dos grupos estaban igualados (Rathleff y colegas, 2015).',
    'La guía de 2023 para el dolor de talón le da al entrenamiento de fuerza una B, su segundo grado más alto, y al estiramiento una A (Koc y colegas, 2023).',
    'Una dorsiflexión de tobillo reducida, es decir, cuánto se dobla el pie hacia arriba, hacia la tibia, muchas veces por un gastrocnemio tenso, el músculo más grande y externo de la pantorrilla, es un factor de riesgo independiente para la fascitis plantar (Riddle y colegas, 2003).',
    'La toalla bajo los dedos activa el mecanismo de molinete (windlass), que carga la fascia plantar junto con la pantorrilla.',
    'Una cifra de elevaciones de talón a una pierna de unas 20 y pocas, en promedio unas 23-24, es una referencia común en adultos, útil para seguir tu avance semana a semana (Hebert-Losier y colegas, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Las elevaciones de talón de verdad ayudan con la fascitis plantar?',
      keyFact: 'En un ensayo con 48\u00A0personas, el grupo de elevaciones de talón quedó 29\u00A0puntos mejor en el Foot Function Index a los tres meses, aunque los dos grupos se igualaron a los doce meses (Rathleff y colegas, 2015).',
      paragraphs: [
        'Las elevaciones de talón ayudan con la fascitis plantar porque fortalecen la cadena pantorrilla, tendón de Aquiles y fascia, que absorbe la carga cada vez que el talón toca el piso.',
        'El único ensayo aleatorizado que probó este ejercicio directamente en la fascitis plantar es Rathleff 2015. En ese ensayo, 48\u00A0personas con fascitis plantar confirmada por ecografía se dividieron en dos grupos. Los dos usaron plantillas. Un grupo hizo una elevación de talón lenta y con carga, con una toalla enrollada bajo los dedos. El otro estiró la fascia plantar. A los tres meses, el grupo de elevaciones de talón tenía 29\u00A0puntos mejor en el Foot Function Index. A los doce meses, los dos grupos estaban igualados.',
        'O sea, las elevaciones de talón adelantaron la mejora. No dieron una mejora más grande a largo plazo. La guía clínica de 2023 le da al entrenamiento de fuerza una B y al estiramiento una A. Recomienda los dos. Nada en la evidencia sugiere que debas elegir uno y saltarte el otro.',
      ],
      sourceNote:
        'Rathleff 2015: Foot Function Index 29\u00A0puntos más bajo en el grupo de elevaciones de talón a los 3\u00A0meses (IC del 95\u00A0%: 6-52, p = 0,016). A los 12\u00A0meses, 22 frente a 16, sin diferencia significativa.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: '¿Cómo se hace la elevación de talones con toalla para la fascitis plantar?',
      paragraphs: [
        'La elevación de talones con toalla es el ejercicio del ensayo de Rathleff. Es una elevación de talón a una pierna sobre un escalón, con una toalla enrollada bajo los dedos. La toalla lleva los dedos hacia arriba al final de la subida, y eso activa el mecanismo de molinete (windlass): la forma en que la fascia plantar se tensa cuando el dedo gordo se dobla hacia atrás. Sin la toalla, entrenas la pantorrilla pero cargas mucho menos la fascia.',
        'Párate en un pie en la orilla de un escalón, con una toalla de mano enrollada bajo los cinco dedos. La parte delantera del pie se queda sobre el escalón. Apóyate en una pared o un barandal para el equilibrio. Sube en tres segundos, mantén arriba dos y baja en tres segundos. Al bajar, deja que el talón quede un poco por debajo del escalón. En el ensayo, los participantes añadían peso con una mochila cuando su propio peso ya se volvía demasiado fácil.',
        'Empieza con los dos pies si ahora mismo las elevaciones a una pierna son demasiado difíciles. Las elevaciones con los dos pies en el piso, sin escalón, son donde empieza la cadena de la pantorrilla. La toalla y el escalón llegan después, cuando las elevaciones de pie se sienten fáciles dos sesiones seguidas.',
      ],
      exercises: [
        {
          name: 'Elevación de talones con toalla (a una pierna)',
          evidence: { level: 'strong', why: 'Es el ejercicio del único ensayo aleatorizado de elevaciones de talón en fascitis plantar (Rathleff 2015). Grado B en la guía.' },
          dose: 'Protocolo de investigación: 12RM (la carga más pesada que puedes levantar en 12\u00A0repeticiones controladas) x 3\u00A0series, avanzando a 8RM x 5\u00A0series. Dosis de inicio: 3\u00A0series de 12, cada pierna',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tres segundos para subir, dos segundos arriba, tres segundos para bajar. Añade peso con una mochila cuando la última repetición deje de costar.',
          often: 'Un día sí y otro no en el ensayo. Walkito lo pone en los días de fuerza, nunca dos seguidos.',
          feel: 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos arriba, mantén, tres segundos abajo',
          alt: 'Una figura sobre un escalón sube en puntas con una toalla enrollada bajo el pie, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'La guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla una A, su grado más alto.' },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Pon las manos en una pared. Pierna de atrás estirada, talón abajo, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'strong', why: 'El mismo grado A de la guía. Trabaja el sóleo, el músculo más profundo de la pantorrilla.' },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Ponte en la misma posición del estiramiento de pantorrilla y dobla la rodilla de atrás hasta sentirlo más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'El grado B de la guía cubre el trabajo de fuerza en general. Este paso más suave no se probó por sí solo.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Siéntate con los pies apoyados en el piso. Empuja hacia arriba con la parte delantera de los dos pies. Las manos en las rodillas añaden resistencia. Es una forma de poca carga para empezar a trabajar la pantorrilla cuando las elevaciones de pie son demasiado.',
          often: 'Días de fuerza, mientras sea tu nivel',
          feel: 'Trabajo suave en las pantorrillas, casi sin carga en el talón',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'Grado B en la guía. Un paso intermedio antes del trabajo con carga a una pierna.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga.',
          often: 'Días de fuerza, cuando las elevaciones sentado se sienten fáciles dos sesiones',
          feel: 'Las pantorrillas trabajando juntas',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talón sostenida',
          evidence: { level: 'moderate', why: 'Grado B en la guía. Contracción isométrica al final del recorrido; no se probó en un ensayo aislado de fascitis plantar.' },
          dose: '3\u00A0series de 20\u00A0segundos, los dos pies',
          how: 'Sube en puntas con los dos pies y quédate quieto arriba. No te dejes caer. Sostener arriba carga el tendón sin el rebote de una repetición completa.',
          often: 'Días de fuerza, el paso después de las elevaciones con dos pies',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene en puntas con los dos pies, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: '¿Cuántas elevaciones de talón debes hacer y cómo añadir carga?',
      paragraphs: [
        'El protocolo de Rathleff usa un sistema de repetición máxima (RM) en lugar de un número fijo de repeticiones. «12RM» significa la carga más pesada que puedes levantar en exactamente 12\u00A0repeticiones controladas: la repetición número doce debe ser la última que puedes hacer con buena técnica. Para la mayoría de las personas que empiezan, su propio peso en una pierna basta. Cuando no basta, una mochila con libros o botellas de agua añade peso.',
      ],
      table: {
        caption: 'Progresión de elevaciones de talón de Rathleff 2015',
        head: ['Semanas', 'Series x repeticiones', 'Ritmo', 'Frecuencia'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s arriba / 2\u00A0s sostenido / 3\u00A0s abajo', 'Un día sí y otro no'],
          ['3-4', '4 x 10RM', '3\u00A0s arriba / 2\u00A0s sostenido / 3\u00A0s abajo', 'Un día sí y otro no'],
          ['5-12', '5 x 8RM', '3\u00A0s arriba / 2\u00A0s sostenido / 3\u00A0s abajo', 'Un día sí y otro no'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: '¿Con qué empieza Walkito?',
      paragraphs: [
        'Walkito no te mete en el protocolo de Rathleff el primer día. La app empieza con elevaciones de talón sentado (3\u00A0series de 10, los dos pies), después pasa a elevaciones de pie con los dos pies, después a una elevación de talón sostenida, y solo entonces a la elevación a una pierna con toalla. Cada paso se abre cuando dos sesiones en el nivel actual se sintieron fáciles. Esa escalera es el ritmo propio de la app, no un protocolo publicado, y existe porque la mayoría de las personas que empiezan un plan de ejercicios para el dolor de talón no están listas para una elevación a una pierna con peso en la primera sesión.',
        'La cadena de pantorrilla en la app va así: elevaciones de talón sentado, elevaciones de talón con dos pies, elevación de talón sostenida, elevación de talones con toalla, descensos de talón (bajar despacio desde un escalón, en excéntrico) y saltos pogo. La elevación con toalla es el nivel 4 de 6. Llegar a la meta de pantorrilla de 25\u00A0elevaciones de talón a una pierna no termina el trabajo de pantorrilla. Pasa a mantenimiento, y una meta nueva ocupa su lugar.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: '¿Por qué importa una pantorrilla tensa en el dolor de talón?',
      keyFact: 'En una serie de 254\u00A0personas con fascitis plantar, entre el 52 y el 60\u00A0% tenía una contractura limitada al gastrocnemio, y otro 23 a 30\u00A0% tenía una contractura combinada de gastrocnemio y sóleo (Patel y colegas, 2011).',
      paragraphs: [
        'Una pantorrilla tensa jala del talón a través del tendón de Aquiles, y la fascia plantar comparte la carga en el otro extremo. Cuando el tobillo no se dobla lo suficiente, cada paso pone más tensión en la fascia.',
        'En una serie de 254\u00A0personas con fascitis plantar, entre el 52 y el 60\u00A0por ciento tenía una contractura solo del gastrocnemio, el músculo externo de la pantorrilla, y otro 23 a 30\u00A0por ciento tenía una contractura combinada de gastrocnemio y sóleo. Por otro lado, un estudio de casos y controles emparejados, con 50\u00A0casos y 100\u00A0controles, encontró que una dorsiflexión de tobillo reducida, cuánto se dobla el pie hacia arriba, hacia la tibia, era el factor de riesgo independiente más fuerte para la fascitis plantar.',
        'Por eso en la lista aparecen tanto el estiramiento como el fortalecimiento de la pantorrilla. Estirar le da más rango al tobillo. Fortalecer le da a la pantorrilla suficiente capacidad para que no se tense con la carga normal del día. La guía recomienda los dos. El mismo mecanismo de la pantorrilla tensa aparece en otros dolores de la pierna: mira [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/) y [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) si tu dolor se parece más a alguno de esos.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle, CITE.guideline],
    },
    {
      h2: '¿En qué se diferencia la elevación de talón para la fascitis plantar de la de la tendinitis de Aquiles?',
      paragraphs: [
        'El movimiento es casi el mismo, pero cambian la intención, la toalla y la regla del dolor. Para la fascitis plantar, la toalla bajo los dedos carga la fascia a través del mecanismo de molinete. El ritmo es 3\u00A0segundos arriba, 2\u00A0segundos sostenido y 3 abajo, un día sí y otro no. La regla del dolor en esta página es: detente si el dolor llega a 6/10 o más.',
        'Para la tendinitis de Aquiles, el protocolo clásico es un descenso excéntrico de talón (solo la bajada, y la subida se hace con los dos pies), que originalmente se hacía dos veces al día, siete días a la semana, y con dolor de hasta unos 5/10 siempre que se calme para la mañana siguiente. No se usa la toalla, porque cargar la fascia no es el objetivo. Y para el dolor de Aquiles insercional, justo en la parte de atrás del hueso del talón, los descensos de talón deben quedarse a nivel del piso en lugar de bajar por debajo de la orilla del escalón, porque una dorsiflexión profunda aprieta el tendón contra el hueso.',
        'Los dos ejercicios son parientes cercanos. Si tu dolor está en la parte de atrás del talón o en el tendón por encima, y no bajo el pie, mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
    {
      h2: '¿Cuántas elevaciones de talón a una pierna deberías poder hacer?',
      keyFact: 'Un estudio normativo con 566\u00A0adultos sanos encontró un promedio de unas 23 a 24\u00A0repeticiones en la prueba de elevación de talón a una pierna (Hebert-Losier y colegas, 2017).',
      paragraphs: [
        'Una referencia común en adultos para la prueba de resistencia de elevación de talón a una pierna está en unas 20 y pocas, en promedio unas 23-24\u00A0repeticiones, según datos normativos de 566\u00A0adultos sanos. Esa cifra cambia con la edad, el sexo, el IMC y el nivel de actividad, así que es un punto de referencia, no una línea de aprobado o reprobado. Para seguir tu avance con la fascitis plantar importa más si el número sube semana a semana y si los dos lados están más o menos parejos.',
        'La meta de pantorrilla en la app es de 25\u00A0elevaciones de talón a una pierna. La prueba se repite cada 14\u00A0días mientras la meta de pantorrilla está activa, y después cada 28\u00A0días una vez que la alcanzas, así puedes ver la tendencia sin adivinar.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: '¿Qué debes sentir y cuándo debes parar?',
      paragraphs: [
        'Una elevación de talón para la fascitis plantar debe sentirse como trabajo fuerte en la pantorrilla. La versión con toalla también da un tirón bajo el arco. Esa es la fascia recibiendo carga, y es justo el objetivo del ejercicio.',
        'Detente por hoy si el dolor llega a **6/10 o más** durante el ejercicio, o si tus primeros pasos de la mañana siguiente son claramente peores que de costumbre. Es el mismo límite que usa la app para terminar una sesión. No es un modelo de dolor para el Aquiles (ese usa 5/10, de otro ensayo). Esta es la regla para parar en la fascitis plantar.',
        'Un dolor muscular leve que se calma en un día es normal, sobre todo en las dos primeras semanas. Un dolor que sigue alto por días o empeora semana a semana es una razón para bajar un nivel o consultar a un profesional de la salud.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué va primero en la fascitis plantar, estirar o fortalecer?',
      paragraphs: [
        'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla un grado **A** y al entrenamiento de fuerza un grado **B**. O sea, recomienda los dos, y la evidencia del estiramiento es un poco más amplia. En el ensayo de Rathleff, el grupo de fuerza mejoró más rápido en los primeros tres meses, pero a los doce meses los dos grupos estaban igualados.',
        'Nada en la evidencia dice que tengas que terminar uno antes de empezar el otro. La app empieza a estirar desde el primer día y añade el primer ejercicio de fuerza para la pantorrilla cuando la meta pasa de calmar el dolor a ganar capacidad. Hacer el estiramiento plantar antes de tus primeros pasos cada mañana es el consejo que más se repite en la guía.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Cuántas elevaciones de talón debo hacer para la fascitis plantar?',
      cites: [CITE.rathleff],
      a: 'El único ensayo que probó un protocolo concreto de elevaciones de talón para la fascitis plantar empezó con 3\u00A0series a 12\u00A0repeticiones máximas, pasó a 4\u00A0series de 10RM en la semana 2 y a 5\u00A0series de 8RM en la semana 4, un día sí y otro no, durante hasta 3\u00A0meses (Rathleff 2015). «12RM» significa la carga más pesada que puedes levantar en 12\u00A0repeticiones controladas, no un número fijo para todos.',
    },
    {
      q: '¿Las elevaciones de talón empeoran la fascitis plantar?',
      cites: [CITE.rathleff],
      a: 'En el ensayo de Rathleff 2015, el grupo que hizo elevaciones de talón con carga mejoró más rápido que el grupo que solo estiró. En ese estudio, la carga mejoró las cosas, no las empeoró. Si un ejercicio sube tu dolor a 6/10 o más, bájale por hoy, pero el ejercicio en sí no es el problema cuando la dosis es la correcta.',
    },
    {
      q: '¿Para qué sirve la toalla en la elevación de talones con toalla?',
      cites: [CITE.rathleff],
      a: 'La toalla va enrollada bajo los dedos para que se doblen hacia arriba al final de la subida. Eso activa el mecanismo de molinete (windlass), la conexión entre el tendón de Aquiles y la fascia plantar. Sin la toalla, el ejercicio trabaja sobre todo la pantorrilla. Con ella, la fascia recibe parte de la carga, y por eso el ensayo la usó.',
    },
    {
      q: '¿Qué hago primero para la fascitis plantar, estirar o fortalecer?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'La guía de 2023 para el dolor de talón le da al estiramiento su grado más alto, A, y al entrenamiento de fuerza una B, así que recomienda los dos. En el ensayo de Rathleff, fortalecer bajó el dolor más rápido en los primeros 3\u00A0meses, pero a los 12\u00A0meses los dos grupos estaban igualados. Nada en la evidencia dice que tengas que terminar uno antes de empezar el otro.',
    },
    {
      q: '¿Cuánto tardan las elevaciones de talón en aliviar la fascitis plantar?',
      cites: [CITE.rathleff],
      a: 'En el ensayo de Rathleff 2015 con 48\u00A0personas, el grupo de elevaciones de talón con carga iba claramente por delante del grupo que solo estiraba a los 3\u00A0meses. A los 12\u00A0meses los dos grupos estaban igualados. Ningún ensayo ha mostrado un número de semanas garantizado para cada persona. La recuperación se mide en meses.',
    },
    {
      q: '¿Cuántas elevaciones de talón a una pierna son normales?',
      cites: [CITE.hebertLosier],
      a: 'Un estudio normativo con 566\u00A0adultos sanos encontró una mediana de unas 23-24\u00A0repeticiones como cifra típica en adultos, que cambia con la edad, el sexo y el nivel de actividad (Hebert-Losier 2017). El número sirve para comparar una pierna con la otra o para ver cambios con las semanas, no como una línea estricta de aprobado o reprobado.',
    },
    {
      q: '¿Es normal sentir el ejercicio en la pantorrilla y no en el talón?',
      a: 'Sí. Las elevaciones de talón sentado y con dos pies están pensadas para sentirse como trabajo de pantorrilla con poca carga en el talón, y por eso van antes de la versión a una pierna con toalla. La elevación con toalla es la que también carga el arco, así que en esa etapa es normal sentir un tirón cerca del talón, siempre que se quede por debajo de 6/10.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída, lo que puede indicar una rotura de la fascia plantar y no una fascitis',
      'no puedes apoyar el pie, o cojeas',
      'viene con entumecimiento, hormigueo o ardor, lo que puede apuntar a un nervio atrapado y no a una fascitis plantar',
      'el talón está rojo, o tienes fiebre o te sientes mal',
      'te despierta por la noche o duele en reposo, lo que puede encajar más con una fractura por estrés',
      'te duele al apretar los lados del talón, o el dolor aumenta durante tus carreras después de subir el kilometraje',
      'te duelen los dos talones y tienes otras articulaciones hinchadas o rígidas, lo que puede apuntar a una artritis inflamatoria',
      'no ha mejorado después de varias semanas de ejercicio y menos carga',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'No tienes que calcular las series, el peso ni cuándo pasar al siguiente paso. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta es una mañana mejor: dolor de 1/10 o menos durante 14\u00A0días seguidos. La escalera de elevaciones de talón (sentado, con dos pies, sostenida, con toalla, descensos de talón) avanza a tu ritmo, no con un calendario fijo.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas esa meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver qué está cambiando. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Elevaciones de talón para fascitis plantar',
  campaign: 'guide-calf-raises-es',
};
