import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/ex-plantar-fascia-stretch.ts`, written around
 * the query «estiramiento fascia plantar». Figures, doses, grades and
 * qualifiers are identical to the English page. Citations as in English
 * (digiovanni2003, digiovanni2006).
 */

export const EX_PLANTAR_FASCIA_STRETCH_ES: Guide = {
  lang: 'es',
  page: 'exPlantarFasciaStretch',
  mainSource: CITE.digiovanni2003,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Estiramiento de fascia plantar: cómo hacerlo y series',
  description:
    'Cómo hacer el estiramiento de la fascia plantar para la fascitis plantar: técnica, cuándo estirar, cuánto tiempo mantener y qué dice la investigación.',
  h1: 'Estiramiento de la fascia plantar: cómo hacerlo, series y repeticiones',
  lede:
    'El estiramiento de la fascia plantar es el único estiramiento que se comparó directamente con el estiramiento del tendón de Aquiles en la fascitis plantar. En un ensayo con 82\u00A0personas con dolor de talón crónico, quienes hicieron el estiramiento de la fascia plantar tuvieron mejores puntajes de dolor y función a las ocho semanas que quienes estiraron el tendón de Aquiles. Aquí tienes la técnica, la dosis y cuándo importa más este estiramiento.',
  takeaways: [
    'En un ensayo con 82\u00A0personas con fascitis plantar crónica, el estiramiento de la fascia plantar dio mejores puntajes de dolor y función a las ocho semanas que un estiramiento del tendón de Aquiles (DiGiovanni y colegas, 2003).',
    'En el seguimiento a dos años, después de que todos los participantes pasaron al estiramiento de la fascia plantar, el 92\u00A0% dijo estar satisfecho con su resultado (DiGiovanni y colegas, 2006).',
    'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A (Koc y colegas, 2023).',
    'El momento más importante para hacerlo es antes de dar el primer paso en la mañana y después de estar sentado mucho tiempo.',
    'Walkito empieza con 10\u00A0repeticiones de 10\u00A0segundos, cada pie. El protocolo del estudio era de 10\u00A0repeticiones de 10\u00A0segundos, tres veces al día.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Cómo se hace el estiramiento de la fascia plantar?',
      paragraphs: [
        'Siéntate y cruza el pie que te duele sobre la rodilla contraria. Con la mano del mismo lado, jala los dedos hacia atrás, hacia la tibia, hasta sentir un estiramiento a lo largo del arco. Mantén 10\u00A0segundos y suelta. Repite 10\u00A0veces.',
        'Para revisar tu posición, presiona el arco con el pulgar mientras mantienes el estiramiento. La fascia plantar, la banda gruesa de tejido bajo el pie, debe sentirse tensa y firme. Si solo lo sientes en la pantorrilla, estás jalando demasiado o demasiado rápido. Afloja hasta que el estiramiento quede bajo el arco.',
        'Es un estiramiento sentado, sin cargar peso. No necesitas pararte ni apoyarte en una pared. Trabaja la fascia plantar directamente, y por eso el ensayo lo probó aparte de los estiramientos de pantorrilla.',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: {
            level: 'strong',
            why: 'Comparado directamente en un ensayo aleatorizado con 82\u00A0personas (DiGiovanni 2003). Grado A en la guía.',
          },
          dose: 'Walkito empieza con 10\u00A0repeticiones de 10\u00A0segundos, cada pie. Protocolo del estudio: 10\u00A0repeticiones de 10\u00A0segundos, 3\u00A0veces al día',
          how: 'Siéntate y cruza el pie afectado sobre la rodilla contraria. Jala los dedos hacia atrás, hacia la tibia, hasta sentir un estiramiento a lo largo del arco, no en la pantorrilla. Mantén 10\u00A0segundos, suelta y repite.',
          often: 'Casi todas las sesiones. Antes de tu primer paso en la mañana es el momento más importante.',
          feel: 'Un estiramiento a lo largo del arco del pie',
          stop: 'El dolor llega a 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura sentada jala hacia la tibia los dedos de un pie, con el arco resaltado',
        },
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: '¿Cuándo estirar la fascia plantar?',
      paragraphs: [
        '**Antes de tu primer paso en la mañana.** Es la indicación que más se repite, tanto en el ensayo como en la guía de 2023. La fascia plantar se acorta durante la noche mientras el pie está relajado. Los primeros pasos del día la jalan de golpe y con fuerza, y por eso el dolor de talón al levantarte es la señal típica de la fascitis plantar.',
        'El segundo momento más importante es antes de pararte después de estar mucho tiempo sentado. En reposo pasa el mismo acortamiento. Estirar la fascia antes de cargarla reduce ese tirón.',
        'En el ensayo, a los participantes se les pidió hacer 10\u00A0repeticiones de 10\u00A0segundos, tres veces al día, durante al menos ocho semanas. Las sesiones clave eran la de la mañana y la de después de estar sentado mucho rato. Si se podía, se animaba a hacer más sesiones durante el día.',
      ],
      cites: [CITE.digiovanni2003, CITE.guideline],
    },
    {
      h2: '¿El estiramiento de la fascia plantar de verdad ayuda con la fascitis plantar?',
      keyFact: 'En un ensayo con 82\u00A0personas con fascitis plantar crónica, el grupo que estiró la fascia plantar tuvo puntajes de dolor mucho mejores a las ocho semanas, tanto en el peor dolor como en los primeros pasos de la mañana (DiGiovanni y colegas, 2003).',
      paragraphs: [
        'En el ensayo original de 2003, 82\u00A0personas con fascitis plantar crónica de más de diez meses se asignaron al azar a un estiramiento de la fascia plantar o a un estiramiento estándar del tendón de Aquiles. A las ocho semanas, el grupo de la fascia plantar tuvo puntajes bastante mejores en el Foot Function Index, que mide el dolor y las limitaciones en la actividad. Los autores lo llamaron una diferencia clínicamente importante.',
        'Un estudio de seguimiento acompañó a los mismos pacientes durante dos años. A las ocho semanas, todos los participantes pasaron al estiramiento de la fascia plantar. A los dos años, el 92\u00A0% de todos los pacientes dijo estar satisfecho con su resultado, y el grupo que al principio estiraba el Aquiles mejoró mucho una vez que empezó con el estiramiento de la fascia plantar.',
        'La guía de 2023 para el dolor de talón revisó la evidencia sobre estiramientos y le dio al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**. Eso no significa que estirar sea suficiente para todos. La guía también le da una **B** al entrenamiento de fuerza y recomienda las dos cosas. Para la parte de fuerza, mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
      ],
      sourceNote:
        'DiGiovanni 2003: la subescala de dolor del Foot Function Index fue significativamente mejor en el grupo del estiramiento de la fascia plantar a las 8\u00A0semanas para el peor dolor (p = 0,02) y para los primeros pasos de la mañana (p = 0,006). DiGiovanni 2006: a los 2\u00A0años, 92\u00A0% de satisfacción general; el grupo que al principio estiraba el Aquiles mejoró mucho después de cambiar de estiramiento.',
      cites: [CITE.digiovanni2003, CITE.digiovanni2006, CITE.guideline],
    },
    {
      h2: '¿En qué se diferencia del estiramiento de pantorrilla?',
      paragraphs: [
        'Trabajan estructuras distintas. El [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) alarga el gastrocnemio, el músculo grande y superficial de la pantorrilla, a través del tendón de Aquiles. El estiramiento de la fascia plantar jala los dedos hacia atrás para cargar la fascia directamente bajo el arco. Los dos se conectan por el hueso del talón, pero responden a posiciones distintas.',
        'Una pantorrilla tensa es por sí sola un factor de riesgo para la fascitis plantar. En un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la menor dorsiflexión del tobillo, es decir, cuánto se dobla el pie hacia arriba, hacia la tibia, fue el factor de riesgo independiente más fuerte. Por eso la guía recomienda los dos estiramientos, no uno u otro.',
        'Para el músculo más profundo de la pantorrilla, el sóleo, el estiramiento cambia: doblas la rodilla de atrás para pasar la carga del gastrocnemio al sóleo. Es otro ejercicio. Mira [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: '¿Cuáles son los errores comunes en el estiramiento de la fascia plantar?',
      paragraphs: [
        {
          list: [
            '**Jalar los dedos con demasiada fuerza.** El estiramiento debe sentirse firme bajo el arco, no doloroso. Si haces muecas de dolor, ya te pasaste del rango útil. Afloja hasta sentir un tirón sin filo.',
            '**Sentirlo en la pantorrilla en vez del arco.** Si el estiramiento se siente sobre todo en la pantorrilla, la rodilla está demasiado estirada o estás jalando muy fuerte. Cruza el pie más arriba sobre la otra rodilla para que el tobillo se relaje, y concéntrate en doblar los dedos hacia atrás, no todo el pie.',
            '**Saltarte el estiramiento de la mañana.** Es la sesión que más efecto tiene sobre el peor momento del día. Deja una nota en la mesa de noche o pon un recordatorio. El estiramiento toma unos dos minutos, y vale la pena hacerlo antes de que el pie toque el piso.',
            '**Rebotar.** Quédate quieto los 10\u00A0segundos completos. Rebotar no le da tiempo a la fascia para alargarse y puede irritar más el tejido.',
          ],
        },
      ],
    },
    {
      h2: 'Versiones más fáciles y más difíciles',
      paragraphs: [
        'Si cruzar la pierna te incomoda, deja los dos pies en el piso y pasa una toalla o un cinturón por la parte delantera del pie. Jala la toalla hacia ti para que los dedos se doblen hacia atrás. Es el mismo estiramiento, solo desde otro ángulo.',
        'Una versión más difícil es el estiramiento de la fascia plantar de pie: apoya la parte delantera del pie contra una pared, con el talón en el piso, e inclínate con suavidad. Así sumas el peso del cuerpo al estiramiento, y es más difícil medir bien la dosis. Funciona cuando la versión sentada ya se siente fácil y no te provoca dolor.',
        '**La versión sentada del ensayo es la que tiene la evidencia detrás.** Empieza por ahí. Todos los estiramientos y ejercicios de fuerza para el dolor de talón están en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Para rodar la planta del pie después de estirar, mira [masaje plantar con pelota](/es/ejercicios/masaje-plantar-con-pelota/).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto tiempo hay que mantener el estiramiento de la fascia plantar?',
      cites: [CITE.digiovanni2003],
      a: 'El ensayo que probó este estiramiento usó repeticiones de 10\u00A0segundos, 10\u00A0veces, al menos tres veces al día (DiGiovanni 2003). Así, cada sesión dura unos dos minutos. Walkito empieza con 10\u00A0repeticiones de 10\u00A0segundos por pie. Mantener más tiempo no es necesariamente mejor. Importa más la constancia durante el día que un solo estiramiento largo.',
    },
    {
      q: '¿Hay que estirar la fascia plantar antes de levantarse de la cama?',
      cites: [CITE.digiovanni2003, CITE.guideline],
      a: 'Sí. Antes del primer paso del día es el momento más importante. La fascia plantar se acorta durante la noche, y los primeros pasos la jalan con fuerza. Estirarla cuando todavía estás sentado en la cama reduce ese tirón. Tanto el ensayo como la guía de 2023 señalan este momento como el clave.',
    },
    {
      q: '¿Estirar puede empeorar la fascitis plantar?',
      cites: [CITE.digiovanni2006],
      a: 'En el ensayo de DiGiovanni, estirar mejoró los resultados, no los empeoró. Si un estiramiento sube el dolor a 6/10 o más, afloja. Demasiada fuerza o los rebotes pueden irritar el tejido. Debe sentirse firme bajo el arco, nunca agudo. Si estirar te empeora el dolor una y otra vez, consulta a un profesional de la salud antes de seguir.',
    },
    {
      q: '¿Qué es mejor para la fascitis plantar, estirar la fascia plantar o la pantorrilla?',
      cites: [CITE.guideline],
      a: 'La guía de 2023 para el dolor de talón le da una A, su grado más alto, tanto al estiramiento de la fascia plantar como al de la pantorrilla, y recomienda los dos. El estiramiento de la fascia plantar trabaja el arco directamente. Los de pantorrilla trabajan una pantorrilla tensa, que es otro factor de riesgo. Hacer los dos cubre más que elegir uno.',
    },
    {
      q: '¿Cuántas veces al día hay que estirar para la fascitis plantar?',
      cites: [CITE.digiovanni2003],
      a: 'El ensayo de DiGiovanni pidió a los participantes estirar tres veces al día: antes del primer paso en la mañana, antes de pararse después de estar mucho rato sentados, y al menos una vez más. Cada sesión era de 10\u00A0repeticiones de 10\u00A0segundos. Si era práctico, se animaba a hacer más sesiones.',
    },
  ],
  redFlags: {
    h2: 'Detente y consulta a un profesional de la salud si',
    bullets: [
      'el dolor es tan agudo que no puedes apoyar el pie',
      'el dolor empezó después de una lesión, una caída o un chasquido repentino en el arco',
      'viene con entumecimiento, hormigueo o ardor, que pueden indicar un nervio atrapado',
      'el talón está rojo, caliente o hinchado',
      'te despierta por la noche o te duele en reposo',
      'estirar te empeora el dolor una y otra vez en lugar de mejorarlo',
      'no ha mejorado después de varias semanas de estiramiento diario y menos carga',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito pone el estiramiento de la fascia plantar en casi todas las sesiones y te lo recuerda antes de tu primer paso cada mañana. No tienes que acordarte del momento ni de cuántas repeticiones. La app arma un plan una semana a la vez, empieza con estiramientos y añade trabajo de fuerza cuando el dolor se calma.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver qué está cambiando. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Estiramiento de la fascia plantar',
  campaign: 'ex-plantar-fascia-stretch-es',
};
