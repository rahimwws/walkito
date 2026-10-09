import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/ex-soleus-stretch.ts`, written around the query
 * «estiramientos de pantorrilla» (bent-knee / soleus version). Figures, doses,
 * grades and qualifiers are identical to the English page. Uses existing keys:
 * CITE.guideline, CITE.riddle, CITE.patelGastrocnemius, CITE.rathleff
 */

export const EX_SOLEUS_STRETCH_ES: Guide = {
  lang: 'es',
  page: 'exSoleusStretch',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Estiramiento de sóleo (rodilla doblada): cómo hacerlo',
  description:
    'Cómo hacer el estiramiento de sóleo con la rodilla doblada para la fascitis plantar y la pantorrilla tensa: técnica, por qué va aparte, series y tiempo.',
  h1: 'Estiramiento de sóleo (rodilla doblada): técnica, series y por qué importa',
  lede:
    'El sóleo es el músculo más profundo de la pantorrilla, debajo del gastrocnemio. Solo se estira con la rodilla doblada, porque al doblarla el gastrocnemio queda fuera del estiramiento. En una serie de 254\u00A0personas con fascitis plantar, entre el 23 y el 30\u00A0% tenía una contractura combinada de gastrocnemio y sóleo. Si solo haces el estiramiento con la rodilla estirada, este músculo se queda sin estirar.',
  takeaways: [
    'El sóleo cruza solo el tobillo. El gastrocnemio cruza la rodilla y el tobillo. Al doblar la rodilla, el gastrocnemio se afloja y el sóleo recibe el estiramiento.',
    'En 254\u00A0personas con fascitis plantar, entre el 23 y el 30\u00A0% tenía una contractura en el gastrocnemio y en el sóleo (Patel y DiGiovanni, 2011).',
    'La guía de 2023 para el dolor de talón le da al estiramiento de pantorrilla una A, su grado más alto, sin separar los dos músculos de la pantorrilla (Koc y colegas, 2023).',
    'Walkito empieza con 3\u00A0repeticiones de 30\u00A0segundos, cada pierna, con la rodilla de atrás doblada.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Cómo se hace el estiramiento de sóleo?',
      paragraphs: [
        'Empieza en la misma posición contra la pared que el [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/): manos en la pared, un pie hacia atrás, talón en el piso. Después dobla la rodilla de atrás. Sigue doblándola hasta sentir que el estiramiento baja en la pantorrilla, cerca del tendón de Aquiles y del talón. Ese tirón más abajo es el sóleo.',
        'El talón se queda en el piso todo el tiempo. Si el talón se levanta, el estiramiento desaparece. Este no lo vas a sentir tan arriba en la pantorrilla como la versión con la rodilla estirada. Se siente más cerca del talón, a veces justo arriba de la parte de atrás del tobillo. Mantén 30\u00A0segundos y cambia de pierna.',
      ],
      exercises: [
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: {
            level: 'strong',
            why: 'La guía de 2023 le da una A al estiramiento de pantorrilla. Trabaja el músculo profundo que el estiramiento con la rodilla estirada no alcanza.',
          },
          dose: 'Walkito empieza con 3\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared, un pie atrás, talón abajo. Dobla la rodilla de atrás hasta sentir un estiramiento en la parte baja de la pantorrilla, cerca del talón. Mantén 30\u00A0segundos.',
          often: 'Casi todas las sesiones, junto con el estiramiento de pantorrilla con la rodilla estirada',
          feel: 'Un estiramiento en la parte baja de la pantorrilla, cerca del tendón de Aquiles',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás, apoyada en una pared con la rodilla de atrás doblada, con la parte baja de la pantorrilla resaltada',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Por qué el sóleo necesita su propio estiramiento?',
      keyFact: 'En una revisión de 254\u00A0personas con fascitis plantar, alrededor de una cuarta parte tenía tensos los dos músculos de la pantorrilla, el gastrocnemio y el sóleo (Patel y DiGiovanni, 2011).',
      paragraphs: [
        'El gastrocnemio, el músculo superficial de la pantorrilla, cruza la rodilla y el tobillo. Cuando estiras la rodilla y te inclinas hacia adelante, él recibe el estiramiento. El sóleo está más profundo y cruza solo el tobillo. Con la rodilla estirada, el gastrocnemio hace todo el trabajo y el sóleo casi no se mueve.',
        'Al doblar la rodilla, el gastrocnemio se afloja y deja de resistir. Ahora la dorsiflexión del tobillo jala del sóleo. Ese es todo el sentido de la versión con la rodilla doblada. No es una adaptación. **Es otro ejercicio para otro músculo.**',
        'En una revisión de 254\u00A0personas con fascitis plantar, alrededor de una cuarta parte tenía tensos los dos músculos. El estiramiento con la rodilla estirada por sí solo no habría llegado a la parte de esa tensión que está en el sóleo.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: '¿Cómo saber si lo estás sintiendo en el lugar correcto?',
      paragraphs: [
        'Si sientes el estiramiento arriba en la pantorrilla, detrás de la rodilla, la rodilla está demasiado estirada y el gastrocnemio está tomando el control. Dobla más la rodilla. El estiramiento debe bajar al tercio inferior de la pantorrilla o justo arriba del talón.',
        'Si no sientes nada, acerca el pie de atrás a la pared y dobla más la rodilla. Algunas personas necesitan una postura más corta para cargar el sóleo.',
        'Si el estiramiento se siente en el propio tendón de Aquiles y es agudo en lugar de un tirón, afloja. **Un estiramiento debe sentirse firme y sostenido, no doloroso.** El dolor en el tendón al estirar es distinto de la pantorrilla tensa y puede apuntar a una [tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
      ],
    },
    {
      h2: '¿Cuáles son los errores comunes en el estiramiento de sóleo?',
      paragraphs: [
        {
          list: [
            '**No doblar lo suficiente la rodilla.** Una flexión ligera no alcanza para aflojar el gastrocnemio. Necesitas doblarla de verdad, lo bastante para ver que la rodilla de atrás avanza por encima de los dedos.',
            '**Dejar que el talón se levante.** En cuanto el talón se despega del piso, el estiramiento desaparece. Apoya bien el talón y deja que la rodilla avance por encima del pie.',
            '**Hacerlo con prisa.** 5\u00A0segundos son muy poco para que un estiramiento sostenido tenga efecto sobre la longitud del tejido. Mantén 30\u00A0segundos y trata de relajarte en el estiramiento en lugar de empujar más fuerte.',
            '**Saltártelo porque el estiramiento con la rodilla estirada pareció suficiente.** Son músculos distintos. Si los dos están tensos, necesitas los dos estiramientos.',
          ],
        },
      ],
    },
    {
      h2: 'Cómo encaja el estiramiento de sóleo en un programa',
      paragraphs: [
        'Walkito combina el estiramiento de sóleo con el [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) y el [estiramiento de la fascia plantar](/es/ejercicios/estiramiento-fascia-plantar/) en casi todas las sesiones. Juntos, los tres cubren las principales estructuras que jalan del talón. El orden no importa mucho, pero hacer el estiramiento de la fascia plantar primero, antes del primer paso del día, es la indicación que más se repite.',
        'Para la parte de fuerza de la pantorrilla, mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) o la página de [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/). La guía de 2023 recomienda la fuerza y los estiramientos juntos.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Cómo se siente el estiramiento de sóleo?',
      a: 'Como un tirón en la parte baja de la pantorrilla, cerca del tendón de Aquiles, a veces justo arriba de la parte de atrás del tobillo. Se siente distinto del estiramiento de pantorrilla con la rodilla estirada, que queda más arriba. Si el estiramiento se siente arriba, la rodilla no está lo bastante doblada y el gastrocnemio sigue haciendo el trabajo.',
    },
    {
      q: '¿El estiramiento de sóleo es lo mismo que estirar la pantorrilla con la rodilla doblada?',
      a: 'Sí. «Estiramiento de sóleo» y «estiramiento de pantorrilla con la rodilla doblada» son dos nombres para el mismo ejercicio. Al doblar la rodilla, el gastrocnemio sale del estiramiento y la carga pasa al sóleo, el músculo más profundo de la pantorrilla. La técnica es idéntica.',
    },
    {
      q: '¿Hay que estirar los dos músculos de la pantorrilla para la fascitis plantar?',
      cites: [CITE.patelGastrocnemius, CITE.guideline],
      a: 'En 254\u00A0personas con fascitis plantar, una cuarta parte tenía tensos los dos músculos de la pantorrilla (Patel y DiGiovanni, 2011). La guía le da una A al estiramiento de pantorrilla sin separar los dos. La mayoría de los programas para la fascitis plantar incluyen la versión con la rodilla estirada y la de rodilla doblada, porque saltarse una deja media pantorrilla sin trabajar.',
    },
    {
      q: '¿Cada cuánto hay que hacer el estiramiento de sóleo?',
      cites: [CITE.guideline],
      a: 'Walkito lo pone en casi todas las sesiones, junto con el estiramiento de pantorrilla. La guía de 2023 recomienda estirar la pantorrilla como parte del autocuidado diario en la fascitis plantar. Tres repeticiones de 30\u00A0segundos por pierna toman unos tres minutos. Es de poca carga y se puede repetir a diario sin problema.',
    },
  ],
  redFlags: {
    h2: 'Detente y consulta a un profesional de la salud si',
    bullets: [
      'el dolor es agudo y está en un punto del tendón de Aquiles, no es un tirón en el músculo',
      'sientes un chasquido repentino o un desgarro durante el estiramiento',
      'la pantorrilla o el tobillo están hinchados, rojos o calientes de un lado',
      'el dolor empezó después de una lesión o de un aumento repentino de actividad',
      'sientes entumecimiento u hormigueo que baja por la parte de atrás de la pierna',
      'no ha mejorado después de varias semanas de estiramiento diario',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito pone el estiramiento de sóleo junto con el de pantorrilla y el de la fascia plantar en casi todas las sesiones. Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. La app pasa de los estiramientos a la fuerza a tu ritmo, no con un calendario fijo.',
    more: [
      'Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Si el rango del tobillo mejora con las semanas, es señal de que los estiramientos están sirviendo. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Estiramiento de sóleo (rodilla doblada)',
  campaign: 'ex-soleus-stretch-es',
};
