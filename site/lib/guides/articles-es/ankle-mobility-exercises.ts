import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const ANKLE_MOBILITY_ES: Guide = {
  lang: 'es',
  page: 'ankleMobility',
  mainSource: CITE.radfordStretch,
  published: '2026-10-09',
  updated: '2026-10-26',
  title: '4 ejercicios de movilidad de tobillo y una prueba en casa',
  description:
    '4 ejercicios de movilidad de tobillo con dosis y la evidencia de cada uno, más la prueba de rodilla a la pared para medir tu tobillo y ver si mejora.',
  h1: 'Ejercicios de movilidad de tobillo: 4 ejercicios y una prueba sencilla en casa',
  lede:
    'Los ejercicios de movilidad de tobillo buscan aumentar la dorsiflexión, es decir, cuánto puede inclinarse la espinilla hacia adelante sobre el pie con el talón abajo. Los estiramientos de pantorrilla, con rodilla estirada y con rodilla doblada (3\u00A0repeticiones de 30\u00A0segundos por pierna), y los descensos lentos de talón pueden sumar rango, y el balanceo de rodilla (2\u00A0series de 15 por pierna) trabaja el mismo movimiento. Las mejoras son pequeñas, unos 2 a 3\u00A0grados con el estiramiento en una revisión de cinco ensayos, así que mide tu punto de partida con la prueba de rodilla a la pared.',
  intro: [
    'Un tobillo rígido se nota cuando los talones se levantan en la sentadilla, cuando un tobillo se siente trabado en las escaleras o cuando un esguince viejo nunca dejó que se doblara como el otro. Si tu problema principal es una pantorrilla tensa o que se acalambra, mira [pantorrillas tensas](/es/pantorrillas-tensas/). Si el tobillo se te tuerce a menudo, mira [ejercicios para fortalecer el tobillo](/es/ejercicios-para-fortalecer-el-tobillo/).',
  ],
  takeaways: [
    'En una revisión de 2006 de cinco ensayos aleatorizados (161\u00A0personas sanas), el estiramiento estático de pantorrilla sumó unos 2 a 3\u00A0grados de flexión del tobillo frente a no estirar, y los autores no estaban seguros de que ese cambio sea clínicamente importante.',
    'En un ensayo con 74\u00A0personas sanas, la flexión del tobillo aumentó después de un programa de descensos excéntricos de talón, y no en el grupo control (Mahieu y colegas, 2008).',
    'La prueba de rodilla a la pared es confiable, pero una revisión de 2015 de 12\u00A0estudios encontró que un cambio tiene que ser de unos 1,6 a 1,9\u00A0cm para poder confiar en que es real.',
    'Después de un esguince, el estiramiento en casa dio las mayores mejoras de dorsiflexión dos semanas después de un esguince agudo en una revisión de 2013 de nueve estudios.',
    'En un estudio de casos y controles, quienes tenían 0\u00A0grados de flexión del tobillo o menos tenían 23,3\u00A0veces más probabilidades de fascitis plantar que quienes pasaban de 10\u00A0grados.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué ejercicios de movilidad de tobillo funcionan?',
      keyFact: 'Una revisión de 2013 de 23\u00A0estudios en 734\u00A0personas sanas encontró el mayor respaldo para el estiramiento estático para aumentar la dorsiflexión del tobillo (Young y colegas).',
      paragraphs: [
        'Los ejercicios de movilidad de tobillo con investigación detrás caen en dos grupos: estiramientos de pantorrilla, y trabajo de fuerza de pantorrilla con recorrido completo, como los descensos lentos de talón. Una revisión de 2013 de 23\u00A0estudios en 734\u00A0personas sanas encontró el mayor respaldo para el estiramiento estático, algo de respaldo de un solo ensayo para las elevaciones de talón combinadas con estiramiento, y poca evidencia buena para la mayoría de los demás métodos (Young y colegas). Los círculos de tobillo sirven como calentamiento, pero ningún ensayo ha mostrado que aumenten la dorsiflexión por sí solos.',
        '«Walkito empieza con» indica la dosis de inicio de la app. Si algún ejercicio lleva tu dolor a **6/10 o más**, detente por hoy.',
      ],
      exercises: [
        {
          name: 'Balanceo de rodilla (movilidad de tobillo)',
          evidence: { level: 'early', why: 'No hay un ensayo del balanceo de rodilla por sí solo. Trabaja el mismo rango con carga que mide la prueba de rodilla a la pared.' },
          dose: 'Walkito empieza con 2\u00A0series de 15, cada pierna',
          how: 'Un pie adelante y otro atrás, manos en una pared. Mantén el talón de adelante plano y lleva la rodilla despacio hacia adelante sobre el segundo dedo, y luego atrás. Unos dos segundos de ida y dos de vuelta, sin rebotes. La técnica completa está en la página de [movilidad de tobillo](/es/ejercicios/movilidad-de-tobillo/).',
          often: 'Días de movilidad',
          feel: 'Un estiramiento en la parte baja de la pantorrilla o un tope firme al frente del tobillo',
          stop: 'Un pellizco agudo al frente del tobillo, o el dolor llega a 6/10',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla viaja sobre los dedos, el talón se queda plano',
          alt: 'Una figura con un pie adelante y otro atrás frente a una pared, llevando la rodilla de adelante sobre los dedos con el talón abajo',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'moderate', why: 'Una revisión de 2006 de cinco ensayos encontró unos 2 a 3\u00A0grados más de flexión del tobillo que no estirar, en personas sanas.' },
          dose: 'Walkito empieza con 3\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared, pierna de atrás estirada, talón de atrás abajo, cadera hacia adelante hasta sentir la parte alta de la pantorrilla. Mira [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/).',
          often: 'Casi todos los días',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada y el talón en el piso',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'moderate', why: 'En los ensayos de esta página, estirar la pantorrilla en general sumó un poco de flexión del tobillo. La versión con rodilla doblada no se probó por sí sola. Trabaja el músculo que limita la posición con rodilla doblada de la prueba de rodilla a la pared.' },
          dose: 'Walkito empieza con 3\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'La misma posición en la pared, luego dobla la rodilla de atrás hasta que el estiramiento baje hacia el talón. Mantén el talón abajo. Mira [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/).',
          often: 'Casi todos los días',
          feel: 'Un estiramiento en la parte baja de la pantorrilla, cerca del talón',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás frente a una pared, con las dos rodillas dobladas y el talón de atrás abajo',
        },
        {
          name: 'Excéntricos de talón',
          evidence: { level: 'moderate', why: 'Un ensayo aleatorizado con 74\u00A0personas sanas encontró más flexión del tobillo después de un programa de descensos excéntricos de talón. No se ha probado en personas con tobillos rígidos o con dolor.' },
          dose: 'En el ensayo: un programa de descensos de talón durante cerca de mes y medio. En Walkito, los descensos de talón llegan más adelante en la progresión de pantorrilla.',
          how: 'Párate en un escalón con los talones fuera del borde, sube con los dos pies, pasa el peso a uno y baja ese talón despacio por debajo del escalón en unos tres segundos. Usa los dos pies para volver a subir. Mira [excéntricos de talón](/es/ejercicios/excentricos-de-talon/).',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla y un estiramiento abajo',
          stop: 'El dolor en el Aquiles llega a 6/10, o está peor a la mañana siguiente',
          media: 'heel_drop_straight',
          caption: 'Descenso de talón: baja despacio por debajo del escalón con una pierna',
          alt: 'Una figura en un escalón bajando un talón despacio por debajo del borde',
        },
      ],
      cites: [CITE.youngDorsiflexion, CITE.radfordStretch, CITE.mahieuEccentric],
    },
    {
      h2: '¿Cómo medir la movilidad de tobillo en casa?',
      keyFact: 'Una revisión de 2015 de 12\u00A0estudios encontró que la prueba de rodilla a la pared es confiable, y que se necesita un cambio de unos 1,6 a 1,9\u00A0cm para salir del margen de error de la medición (Powden y colegas).',
      paragraphs: [
        'La prueba de rodilla a la pared, también llamada prueba de estocada con carga, mide la distancia más larga entre el dedo gordo y la pared a la que la rodilla todavía puede tocar la pared con el talón plano.',
      ],
      bullets: [
        'Quítate los zapatos y pon una regla o una cinta métrica en el suelo, en ángulo recto con la pared.',
        'Ponte de pie frente a la pared con un pie adelante, con el dedo gordo a unos centímetros de la pared. El otro pie va atrás para equilibrarte.',
        'Dobla la rodilla de adelante e intenta tocar la pared con ella. Mantén el talón abajo y la rodilla alineada con el segundo dedo.',
        'Si la rodilla toca, mueve el pie un poco hacia atrás y vuelve a intentar. Si el talón se levanta antes de que la rodilla toque, acércate.',
        'Tu resultado es la distancia del dedo a la pared en el último punto donde la rodilla tocó con el talón todavía plano. Haz tres intentos de cada lado y anota el mejor.',
        'Anota dónde sentiste que te frenaba: un estiramiento en la parte de atrás de la pantorrilla o un pellizco al frente del tobillo.',
      ],
      after: [
        'La prueba es confiable cuando se hace igual cada vez. En un estudio pequeño de 1998, cuatro evaluadores midieron a 13\u00A0personas sanas y los resultados coincidieron casi perfectamente (Bennell y colegas). Una revisión de 2015 de 12\u00A0estudios coincidió, y encontró que un cambio tiene que ser de unos 1,6 a 1,9\u00A0cm, o más o menos 5\u00A0grados, para que puedas estar razonablemente seguro de que es real (Powden y colegas). Así que **vuelve a medir cada par de semanas** y no persigas unos cuantos milímetros.',
        '**¿Cuál es un resultado normal?** No hay un punto de corte acordado. En un estudio, 30\u00A0adultos sanos promediaron 12,47\u00A0cm y 30\u00A0personas comparables con inestabilidad crónica de tobillo (tobillos que siguen fallando después de esguinces) promediaron 10,73\u00A0cm (Hoch y colegas, 2012). Son promedios de dos grupos pequeños, así que una diferencia clara entre tus dos tobillos, o tu propio cambio con el tiempo, te dice más.',
      ],
      sourceNote:
        'Bennell 1998: ICC intraevaluador 0,97-0,98, ICC interevaluador 0,97 (ángulo) y 0,99 (distancia). Powden 2015: ICC entre profesionales 0,80-0,99, del mismo profesional 0,65-0,99; cambio mínimo detectable de 4,6\u00A0grados o 1,6\u00A0cm entre profesionales, 4,7\u00A0grados o 1,9\u00A0cm para el mismo profesional.',
      cites: [CITE.bennellLunge, CITE.powdenLunge, CITE.hochInstability],
    },
    {
      h2: '¿Cuánto mejoran la movilidad de tobillo el estiramiento y la fuerza?',
      keyFact: 'Una revisión de 2006 de cinco ensayos aleatorizados en 161\u00A0personas sanas encontró que el estiramiento estático de pantorrilla sumó unos 2 a 3\u00A0grados de flexión del tobillo frente a no estirar (Radford y colegas).',
      paragraphs: [
        '**El estiramiento mejora la movilidad de tobillo, pero solo un poco.** Una revisión de 2006 combinó cinco ensayos aleatorizados en 161\u00A0personas sanas y encontró que el estiramiento estático de pantorrilla sumó unos 2 a 3\u00A0grados de dorsiflexión frente a no estirar. La mejora fue parecida tanto con 15\u00A0minutos o menos de estiramiento total como con más de 30\u00A0minutos a lo largo del ensayo, y los autores no estaban seguros de que un cambio de ese tamaño importe a las personas. Ningún ensayo incluyó a personas con una lesión en la pierna o el pie, y la mayoría midió el rango justo después del último estiramiento.',
        '**El trabajo de fuerza con recorrido completo también puede ayudar.** En un ensayo aleatorizado con 74\u00A0personas sanas, un grupo hizo un programa de descensos excéntricos de talón (bajar el talón despacio con carga) durante cerca de mes y medio. La dorsiflexión aumentó solo en ese grupo, y la pantorrilla opuso menos resistencia al estiramiento que antes (Mahieu y colegas, 2008). Además fortalece la pantorrilla, por eso el trabajo de [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) y de [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/) cumple las dos funciones.',
        'Estira durante unas semanas, vuelve a hacer la prueba y juzga por tu propio resultado. Si el freno es un pellizco al frente del tobillo y nada cambia, puede que no sea la pantorrilla lo que te limita.',
      ],
      sourceNote:
        'Radford 2006: diferencia de medias ponderada de 2,07\u00A0grados con 15\u00A0minutos o menos de estiramiento total, 3,03\u00A0grados con más de 15 a 30\u00A0minutos, 2,49\u00A0grados con más de 30\u00A0minutos.',
      cites: [CITE.radfordStretch, CITE.mahieuEccentric],
    },
    {
      h2: '¿Es la pantorrilla tensa o la articulación del tobillo rígida?',
      paragraphs: [
        'Dónde sientes el freno durante la prueba de rodilla a la pared suele ser la pista, aunque ningún ensayo ha probado qué tan precisa es:',
        {
          list: [
            '**Parte de atrás de la pantorrilla:** Un estiramiento cerca del Aquiles o en la parte baja de la pantorrilla apunta a la pantorrilla. El gastrocnemio (el músculo grande de la parte alta de la pantorrilla) te limita más con la rodilla estirada. El sóleo (el músculo más profundo) te limita con la rodilla doblada, la posición de la prueba de rodilla a la pared. Aquí funcionan el estiramiento y los descensos lentos de talón.',
            '**Frente del tobillo:** Una sensación de bloqueo o pellizco al frente, con poco estiramiento en la pantorrilla, apunta más a la articulación: el astrágalo (el hueso del tobillo sobre el que se apoya la espinilla) no se desliza hacia atrás cuando la espinilla avanza. Puede pasar después de esguinces. Empujar más fuerte contra un pellizco al frente rara vez ayuda. Un fisioterapeuta puede revisarlo y usar movilización articular, un deslizamiento suave de la articulación con las manos.',
          ],
        },
        'Una revisión de 2013 de estudios sobre esguinces dijo lo mismo: el enfoque correcto depende de qué está limitando el tobillo (Terada y colegas).',
      ],
      cites: [CITE.teradaSprain],
    },
    {
      h2: '¿Cómo recuperar la movilidad de tobillo después de un esguince?',
      keyFact: 'Una revisión de 2013 encontró que el estiramiento en casa dio las mayores mejoras de dorsiflexión dos semanas después de un esguince agudo de tobillo (Terada y colegas).',
      paragraphs: [
        'Perder algo de flexión del tobillo después de un esguince es común. Una revisión de 2013 de nueve estudios encontró que el estiramiento estático, como parte de un programa de ejercicios en casa, tuvo el mayor efecto en la dorsiflexión dos semanas después de un esguince agudo. La movilización con movimiento, en la que un profesional desliza el tobillo mientras tú lo doblas, tuvo solo efectos pequeños en personas con esguinces repetidos (Terada y colegas).',
        'Una revisión de 2018 de 23\u00A0estudios encontró que la movilización articular mejoró la flexión del tobillo con carga a corto plazo en personas con problemas de esguince de larga duración, pero no justo después de una sola sesión. Los efectos a largo plazo no se han estudiado bien (Weerasekara y colegas).',
        'El rango es solo una parte. En el estudio de Hoch de 2012, las personas con tobillos que seguían fallando también tenían un menor alcance de equilibrio hacia adelante. **Aquí el trabajo de equilibrio y fuerza importa tanto como la movilidad.** Mira [ejercicios para fortalecer el tobillo](/es/ejercicios-para-fortalecer-el-tobillo/).',
      ],
      sourceNote:
        'Terada 2013: estiramiento estático con ejercicio en casa dos semanas después de un esguince agudo, d de Cohen 1,06 (IC 95\u00A0% 0,12 a 2,42); movilización con movimiento en esguinces recurrentes, d 0,14 a 0,39. Weerasekara 2018: dorsiflexión con carga a corto plazo p=0,003, inmediata p=0,16. Hoch 2012: 10,73\u00A0cm frente a 12,47\u00A0cm.',
      cites: [CITE.teradaSprain, CITE.weerasekaraMobilisation, CITE.hochInstability],
    },
    {
      h2: '¿Por qué importa la movilidad de tobillo?',
      keyFact: 'En 1093\u00A0reclutas del ejército seguidos durante tres meses de entrenamiento, el rango de dorsiflexión del tobillo fue un fuerte predictor de lesiones (Pope y colegas, 1998).',
      paragraphs: [
        'Usas la flexión del tobillo en cada paso, en cada escalón y en el fondo de cada sentadilla. Cuando no alcanza, el cuerpo toma prestado rango de otro lado: el talón se levanta antes de tiempo, el pie se va hacia adentro o la rodilla se desvía hacia adentro. Una flexión del tobillo baja se asocia con varios problemas, aunque asociarse no es lo mismo que causar:',
        {
          list: [
            '**Fascitis plantar:** En un estudio de casos y controles con 50\u00A0personas con [fascitis plantar](/es/fascitis-plantar/) y 100 sin ella, quienes tenían 0\u00A0grados de dorsiflexión o menos tenían 23,3\u00A0veces más probabilidades que quienes pasaban de 10\u00A0grados (Riddle y colegas, 2003).',
            '**Lesiones en reclutas:** En 1093\u00A0reclutas varones del ejército seguidos durante tres meses de entrenamiento intenso, el rango del tobillo medido al inicio fue un fuerte predictor de quién se lesionó (Pope y colegas, 1998).',
            '**Sentadillas:** Cuando 30\u00A0personas sanas hicieron sentadillas con una cuña de 12\u00A0grados bajo la parte delantera del pie para imitar un tobillo rígido, sus rodillas se doblaron menos y se fueron más hacia adentro (Macrum y colegas, 2012). Fue una sola sesión simulada, así que solo muestra la mecánica.',
          ],
        },
      ],
      cites: [CITE.riddle, CITE.popeDorsiflexion, CITE.macrumSquat],
    },
    {
      h2: '¿Con qué frecuencia hacer ejercicios de movilidad de tobillo?',
      paragraphs: [
        'La mayoría de las personas los hace desde unas cuantas veces por semana hasta casi todos los días, en sesiones cortas, y vuelve a medir cada par de semanas. La revisión de 2006 sobre estiramiento encontró poca diferencia entre un tiempo total de estiramiento corto y uno largo, así que **las sesiones más largas no parecen sumar mucho.** Un calentamiento de tobillos antes de una sentadilla o una carrera tiene sentido, pero la evidencia es escasa: en la revisión de 2013 vino de un solo estudio pequeño que combinó calentamiento con estiramiento.',
        'En Walkito, los estiramientos de pantorrilla, una posición sostenida de rodilla a la pared y el balanceo de rodilla rotan por tus sesiones, sobre todo en los días de movilidad. Las pruebas propias de la app revisan la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, no tu distancia de rodilla a la pared, así que ese número anótalo tú.',
      ],
      cites: [CITE.radfordStretch, CITE.youngDorsiflexion],
    },
  ],
  faq: [
    {
      q: '¿Se puede mejorar la movilidad de tobillo?',
      cites: [CITE.radfordStretch, CITE.mahieuEccentric],
      a: 'Sí, al menos en personas sanas. En una revisión de 2006 de cinco ensayos, estirar la pantorrilla sumó unos 2 a 3\u00A0grados, y en un ensayo con 74\u00A0personas los descensos excéntricos de talón también aumentaron el rango. Si el límite es un bloqueo óseo, tras una fractura o con artritis, las mejoras pueden ser menores y debe guiarte un profesional de la salud.',
    },
    {
      q: '¿Cómo saber si tengo poca movilidad de tobillo?',
      cites: [CITE.hochInstability, CITE.powdenLunge],
      a: 'Haz la prueba de rodilla a la pared: busca la mayor distancia entre el dedo gordo y la pared a la que la rodilla aún toca la pared con el talón plano. En un estudio, los adultos sanos promediaron 12,47\u00A0cm. Una diferencia clara entre tus dos lados, o talones que se levantan en la sentadilla, también son señales. Vuelve a medir cada par de semanas.',
    },
    {
      q: '¿Cuánto tarda en mejorar la movilidad de tobillo?',
      cites: [CITE.mahieuEccentric, CITE.powdenLunge],
      a: 'Cuenta con semanas, no días. En un ensayo, un programa de descensos excéntricos de talón aumentó la flexión del tobillo en cerca de mes y medio. Las mejoras con el estiramiento son pequeñas, así que repite la prueba cada par de semanas. Hace falta un cambio de unos 1,6 a 1,9\u00A0cm para estar razonablemente seguro de que es real.',
    },
    {
      q: '¿Cuál es un buen resultado en la prueba de rodilla a la pared?',
      cites: [CITE.hochInstability, CITE.powdenLunge],
      a: 'No hay un punto de corte acordado. En un estudio, 30\u00A0adultos sanos promediaron 12,47\u00A0cm y 30\u00A0personas con tobillos inestables promediaron 10,73\u00A0cm. Mejor compara tus dos lados y tus propios resultados con el tiempo. Una revisión de 2015 encontró que un cambio tiene que ser de unos 1,6 a 1,9\u00A0cm para estar seguro de que es real.',
    },
    {
      q: '¿Por qué se me levantan los talones al hacer sentadillas?',
      cites: [CITE.macrumSquat],
      a: 'Suele significar que a los tobillos se les acaba la dorsiflexión antes de llegar abajo. En un estudio de laboratorio con 30\u00A0personas, imitar un tobillo rígido con una cuña hizo que las rodillas se doblaran menos y se fueran hacia adentro. El balanceo de rodilla y los estiramientos de pantorrilla pueden ayudar, y un pequeño realce bajo los talones es una solución temporal.',
    },
    {
      q: '¿Es normal la rigidez del tobillo después de un esguince?',
      cites: [CITE.teradaSprain, CITE.weerasekaraMobilisation],
      a: 'Sí, perder algo de flexión del tobillo tras un esguince es común. En una revisión de 2013, el estiramiento en casa dio las mayores mejoras de dorsiflexión dos semanas después de un esguince agudo. En una de 2018, la movilización articular hecha por un profesional ayudó al rango a corto plazo en esguinces de larga duración. Si la rigidez no mejora, o hay un pellizco al frente, consulta con fisioterapia.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'te torciste el tobillo hace poco y no puedes dar cuatro pasos apoyándolo, o el hueso duele al tocarlo',
      'el tobillo está hinchado, caliente o rojo, o tienes fiebre',
      'la pantorrilla está hinchada, caliente y duele al tocarla, lo que puede ser un coágulo y necesita atención médica el mismo día',
      'sientes un pellizco agudo al frente del tobillo cada vez que lo doblas y no cede con trabajo suave',
      'sentiste un tronido o como una patada en la parte de atrás del tobillo y ahora no puedes impulsarte ni pararte de puntitas, lo que puede ser una ruptura del tendón de Aquiles',
      'el tobillo se traba, se atora o falla con frecuencia',
      'tienes entumecimiento, hormigueo o ardor en el pie',
      'la rigidez viene después de una fractura o una cirugía: sigue el plan de tu cirujano o fisioterapeuta',
      'varias articulaciones amanecen rígidas e hinchadas por más de media hora',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: '[Walkito](/es/programa/) arma un plan semana a semana en torno a una meta, para el dolor de talón, pie y pierna. La movilidad de tobillo es parte de él: los estiramientos de pantorrilla, una posición sostenida de rodilla a la pared y el balanceo de rodilla rotan por tus sesiones, sobre todo en los días de movilidad, junto con trabajo de fuerza de pantorrilla y de equilibrio. Walkito empieza los estiramientos de pantorrilla con 3\u00A0repeticiones de 30\u00A0segundos y el balanceo de rodilla con 2\u00A0series de 15, cada pierna.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta revisa la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Walkito es un programa de ejercicios para adultos. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos, 3\u00A0días a la semana',
  },
  crumb: 'Movilidad de tobillo',
  campaign: 'guide-ankle-mobility-es',
};
