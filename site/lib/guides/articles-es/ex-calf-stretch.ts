import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/ex-calf-stretch.ts`, written around the query
 * «estiramientos de pantorrilla». Figures, doses, grades and qualifiers are
 * identical to the English page. Citations as in English (siriphorn).
 */

export const EX_CALF_STRETCH_ES: Guide = {
  lang: 'es',
  page: 'exCalfStretch',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Estiramiento de pantorrilla para fascitis plantar',
  description:
    'Cómo hacer el estiramiento de pantorrilla con la rodilla estirada para la fascitis plantar y la pantorrilla tensa: técnica, series, tiempo y evidencia.',
  h1: 'Estiramiento de pantorrilla para la fascitis plantar: técnica, series y tiempo',
  lede:
    'El estiramiento de pantorrilla con la rodilla estirada trabaja el gastrocnemio, el músculo grande y externo de la pantorrilla. Un gastrocnemio tenso limita cuánto se dobla el tobillo, y en un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la menor dorsiflexión del tobillo fue el factor de riesgo independiente más fuerte. La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla su grado más alto, A.',
  takeaways: [
    'La menor dorsiflexión del tobillo fue el factor de riesgo independiente más fuerte para la fascitis plantar en un estudio de casos y controles emparejados, con 23,3\u00A0veces más probabilidades (Riddle y colegas, 2003).',
    'En una serie de 254\u00A0personas con fascitis plantar, entre el 52 y el 60\u00A0% tenía una contractura solo en el gastrocnemio (Patel y DiGiovanni, 2011).',
    'La guía de 2023 para el dolor de talón le da una A, su grado más alto, al estiramiento de la fascia plantar y de la pantorrilla (Koc y colegas, 2023).',
    'Un metaanálisis de 2020 encontró un efecto grande del estiramiento de pantorrilla y de fascia plantar, aunque la calidad de la evidencia iba de moderada a muy baja (Siriphorn y Eksakulkla, 2020).',
    'Walkito empieza con 3\u00A0repeticiones de 30\u00A0segundos, cada pierna.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Cómo se hace el estiramiento de pantorrilla con la rodilla estirada?',
      paragraphs: [
        'Párate frente a una pared con las manos apoyadas en ella, más o menos a la altura de los hombros. Lleva un pie hacia atrás, unos 60\u00A0cm. Mantén la pierna de atrás estirada, el talón apoyado en el piso y los dedos apuntando hacia adelante. Lleva la cadera hacia la pared hasta sentir un estiramiento en la parte alta de la pantorrilla de atrás. Mantén 30\u00A0segundos y cambia de pierna.',
        'La clave es mantener la rodilla de atrás bien estirada. Así trabajas el gastrocnemio, que cruza la rodilla y el tobillo. Si doblas la rodilla, el estiramiento pasa al sóleo, el músculo más profundo de la pantorrilla, y ese es otro ejercicio. Para esa versión, mira [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/).',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: {
            level: 'strong',
            why: 'La guía de 2023 le da una A al estiramiento de pantorrilla. La pantorrilla tensa fue el mayor factor de riesgo de fascitis plantar en un estudio de casos y controles de 2003.',
          },
          dose: 'Walkito empieza con 3\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared. Lleva un pie hacia atrás, con esa rodilla estirada y el talón abajo. Lleva la cadera hacia adelante hasta sentir un estiramiento en la parte alta de la pantorrilla. Mantén 30\u00A0segundos.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla de la pierna de atrás',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿Por qué una pantorrilla tensa causa dolor de talón?',
      paragraphs: [
        'El gastrocnemio va desde detrás de la rodilla hasta el talón, a través del tendón de Aquiles. La fascia plantar sigue donde termina el Aquiles: rodea por debajo el hueso del talón y avanza hasta los dedos. Cuando el gastrocnemio está tenso, limita cuánto se puede doblar el tobillo hacia arriba. Eso obliga a la fascia plantar a absorber más tensión en cada paso.',
        'En un estudio de casos y controles emparejados con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la menor dorsiflexión del tobillo multiplicó por 23,3 las probabilidades de tener fascitis plantar. Pesó más que el índice de masa corporal, el tiempo de pie o cualquier otra variable del estudio.',
        'Aparte, una revisión de 254\u00A0personas con fascitis plantar encontró que entre el 52 y el 60\u00A0% tenía una contractura solo en el gastrocnemio, y otro 23 a 30\u00A0% tenía una contractura combinada de gastrocnemio y sóleo. Es decir, la pantorrilla tensa no es un tema secundario. Está presente en la mayoría de las personas con este problema.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: '¿El estiramiento de pantorrilla ayuda con la fascitis plantar?',
      paragraphs: [
        'La guía de 2023 para el dolor de talón revisó los estudios disponibles sobre estiramientos y le dio al estiramiento de la fascia plantar y de la pantorrilla un grado **A**, el más alto. Ese grado cubre juntos el estiramiento de la fascia plantar y el de pantorrilla, porque la mayoría de los protocolos incluyen los dos.',
        'Una revisión sistemática con metaanálisis de 2020 juntó los ensayos sobre estiramientos y encontró un efecto grande tanto del estiramiento de pantorrilla como del de fascia plantar. Los autores calificaron la calidad de la evidencia de moderada a muy baja y pidieron ensayos de mejor calidad. Aun así, el tamaño del efecto fue grande y comparable al de otras intervenciones.',
        'Ningún ensayo estudia por sí solo el estiramiento de pantorrilla con la rodilla estirada para la fascitis plantar. Siempre se prueba como parte de un programa. La guía lo recomienda junto con el [estiramiento de la fascia plantar](/es/ejercicios/estiramiento-fascia-plantar/) y trabajo de fuerza como las [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/).',
      ],
      cites: [CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Errores comunes en el estiramiento de pantorrilla',
      paragraphs: [
        'Doblar la rodilla de atrás. En cuanto la rodilla se dobla, el gastrocnemio se afloja y el estiramiento pasa al sóleo. Mantén la rodilla de atrás bien estirada todo el tiempo.',
        'Dejar que el talón de atrás se levante. Si el talón se despega del piso, la pantorrilla no se está estirando. Primero apoya bien el talón y después inclínate hacia adelante hasta sentir el estiramiento.',
        'Girar el pie de atrás hacia afuera. Cuando el pie gira hacia afuera, el estiramiento se va a la parte externa de la pantorrilla en lugar de a todo el músculo. Mantén los dedos apuntando recto hacia la pared.',
        'Mantener muy poco tiempo. 10\u00A0segundos no alcanzan para que un estiramiento sostenido tenga efecto sobre la longitud del tejido. Mantén al menos 30\u00A0segundos por repetición.',
      ],
    },
    {
      h2: '¿Quién debe hacer este estiramiento y quién no?',
      paragraphs: [
        'Este estiramiento sirve para cualquier persona con dolor de talón, fascitis plantar, pantorrillas tensas por estar de pie todo el día o por un deporte que carga la pantorrilla, como correr. Aparece en las listas de ejercicios de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/), [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) y [dolor de talón al correr](/heel-pain-runners/) (en inglés).',
        'Sáltalo o modifícalo si tienes un problema en el tendón de Aquiles que duele durante el estiramiento. En ese caso, el dolor viene de otra estructura, y cargar el Aquiles con un estiramiento en la pared quizá no sea el mejor punto de partida. Para el enfoque específico del Aquiles, mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
        'Si no llegas a la pared o no puedes estar de pie cómodo, un estiramiento sentado con toalla da un tirón parecido en la pantorrilla. Pasa una toalla por la parte delantera del pie, mantén la rodilla estirada y jala los dedos hacia ti.',
      ],
    },
    {
      h2: 'Cómo se combina con el estiramiento de sóleo',
      paragraphs: [
        'El gastrocnemio y el sóleo forman juntos la pantorrilla. La versión con la rodilla estirada estira el gastrocnemio. La versión con la rodilla doblada estira el sóleo. Son dos ejercicios, no dos versiones del mismo.',
        'La mayoría de los programas para la fascitis plantar incluyen los dos, porque la tensión puede estar en uno de los músculos o en ambos. La guía no los separa. Walkito pone los dos en la misma sesión cuando toca estirar. La página de [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/) explica la versión con la rodilla doblada. Para el programa completo de estiramientos y fuerza, mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Cuánto tiempo hay que mantener el estiramiento de pantorrilla para la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'La mayoría de los protocolos usan repeticiones de 30\u00A0segundos, y con eso empieza Walkito. La guía de 2023 recomienda estirar la pantorrilla sin fijar un tiempo exacto, pero la mayoría de los ensayos en los que se basa usaron 30\u00A0segundos por repetición, de 2 a 3\u00A0veces por pierna.',
    },
    {
      q: '¿Hay que estirar las pantorrillas todos los días para la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'La guía de 2023 recomienda estirar la pantorrilla y la fascia plantar como parte del autocuidado diario en la fascitis plantar. Walkito pone los estiramientos de pantorrilla en casi todas las sesiones. Es un estiramiento de poca carga y poco riesgo, así que hacerlo a diario es razonable mientras el dolor se quede por debajo de 6/10.',
    },
    {
      q: '¿Cuál es la diferencia entre el estiramiento de pantorrilla y el de sóleo?',
      cites: [CITE.patelGastrocnemius],
      a: 'El estiramiento de pantorrilla con la rodilla estirada trabaja el gastrocnemio, el músculo grande y externo de la pantorrilla. El estiramiento de sóleo dobla la rodilla de atrás, lo que afloja el gastrocnemio y deja trabajar al sóleo, más profundo. Se encontró tensión en los dos músculos en la mayoría de las personas con fascitis plantar (Patel y DiGiovanni, 2011).',
    },
    {
      q: '¿Las pantorrillas tensas pueden causar fascitis plantar?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Una pantorrilla tensa limita la dorsiflexión del tobillo, y eso fue el factor de riesgo independiente más fuerte para la fascitis plantar en un estudio de casos y controles (23,3\u00A0veces más probabilidades). Aparte, entre el 52 y el 60\u00A0% de 254\u00A0personas con fascitis plantar tenía una contractura solo en el gastrocnemio. No garantiza la fascitis plantar, pero sube bastante las probabilidades.',
    },
  ],
  redFlags: {
    h2: 'Detente y consulta a un profesional de la salud si',
    bullets: [
      'el dolor está en el propio tendón de Aquiles, no en el músculo de la pantorrilla',
      'sientes un chasquido repentino o una sensación de desgarro durante el estiramiento',
      'la pantorrilla está hinchada, roja o caliente solo de un lado',
      'el dolor empezó después de una lesión o una caída',
      'la pantorrilla tensa viene con entumecimiento, hormigueo o ardor',
      'no ha mejorado después de varias semanas de estiramiento diario',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito pone el estiramiento de pantorrilla junto con el de sóleo y el de la fascia plantar en casi todas las sesiones. Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. La app pasa de los estiramientos al trabajo de fuerza a tu ritmo.',
    more: [
      'Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Una pantorrilla tensa que se suelta con las semanas se nota como más rango en el tobillo en la prueba. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Estiramiento de pantorrilla (gastrocnemio, rodilla estirada)',
  campaign: 'ex-calf-stretch-es',
};
