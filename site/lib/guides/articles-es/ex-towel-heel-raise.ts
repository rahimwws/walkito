import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Spanish version of `articles/ex-towel-heel-raise.ts`. Figures, doses,
 * grades and qualifiers are identical to the English page.
 *
 * (no new citations - this page uses only existing CITE keys)
 */

export const EX_TOWEL_HEEL_RAISE_ES: Guide = {
  lang: 'es',
  page: 'exTowelHeelRaise',
  mainSource: CITE.rathleff,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Elevación de talones con toalla: protocolo de Rathleff',
  description:
    'Cómo hacer la elevación de talones con toalla del protocolo de Rathleff: series, repeticiones, ritmo, la toalla bajo los dedos, errores y variantes.',
  h1: 'Elevación de talones con toalla: el protocolo de carga alta de Rathleff, paso a paso',
  lede:
    'La elevación de talones con toalla es una elevación de talón a una pierna sobre un escalón, con una toalla enrollada bajo los dedos. Viene de un ensayo de 2015 con 48\u00A0personas con fascitis plantar, en el que este ejercicio alivió el dolor de talón más rápido que solo estirar durante tres meses. La toalla es lo que la hace distinta de una elevación de talón normal: activa la fascia plantar a través del mecanismo de molinete.',
  takeaways: [
    'En un ensayo con 48\u00A0personas, las elevaciones de talones con toalla y peso puntuaron 29\u00A0puntos mejor en el Foot Function Index que solo estirar a los tres meses, aunque los dos grupos se igualaron a los doce meses (Rathleff y colegas, 2015).',
    'La guía de 2023 para el dolor de talón le da una B al entrenamiento de fuerza, un paso por debajo del estiramiento, que tiene A, y recomienda los dos (Koc y colegas, 2023).',
    'La toalla bajo los dedos los dobla hacia arriba y activa el mecanismo de molinete, así la fascia plantar comparte la carga con la pantorrilla.',
    'Walkito empieza con 3\u00A0series de 12, cada pierna, con un ritmo de 3\u00A0segundos para subir, 2 arriba quieto y 3 para bajar.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué trabaja la elevación de talones con toalla?',
      paragraphs: [
        'La elevación de talones con toalla trabaja el gastrocnemio y el sóleo (los dos músculos de la pantorrilla), el tendón de Aquiles y la fascia plantar. La toalla enrollada dobla los dedos hacia arriba cuando estás arriba, y eso jala de la fascia plantar a través del mecanismo de molinete. Sin la toalla, el ejercicio entrena sobre todo la pantorrilla. Con ella, la fascia recibe parte de la carga.',
        'Por eso el ensayo de Rathleff usó la toalla para la fascitis plantar en lugar de una elevación de talón simple. La meta es cargar juntos la pantorrilla, el Aquiles y la fascia. Si te duele el tendón de Aquiles y no la planta del pie, un [excéntrico de talón](/es/ejercicios/excentricos-de-talon/) sin toalla es mejor punto de partida.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Cómo hacer la elevación de talones con toalla',
      paragraphs: [
        'Enrolla una toalla de manos pequeña en forma de cilindro, más o menos del ancho de tu puño. Ponla en la orilla de un escalón. Párate en un pie con los cinco dedos sobre la toalla y la parte delantera del pie sobre el escalón. Agárrate de una pared o un pasamanos para el equilibrio.',
        'Sube en tres segundos, empujando con el dedo gordo. Quédate arriba dos segundos. Baja en tres segundos y deja que el talón baje un poco por debajo del escalón. Ese ritmo lento es parte del protocolo. Las repeticiones rápidas bajan la carga sobre el tendón y la fascia.',
        'En el ensayo de Rathleff, los participantes añadían peso con una mochila cuando su propio peso ya no bastaba para que la última repetición costara. «12RM» significa la carga más pesada que puedes levantar exactamente 12\u00A0veces con control.',
      ],
      exercises: [
        {
          name: 'Elevación de talones con toalla',
          evidence: {
            level: 'strong',
            why: 'El ejercicio del único ensayo aleatorizado de elevaciones de talón en fascitis plantar (Rathleff 2015). Grado B en la guía.',
          },
          dose: 'Walkito empieza con 3 x 12, cada pierna. Protocolo del estudio: 3 x 12RM, hasta llegar a 5 x 8RM',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tres segundos para subir, dos arriba quieto, tres para bajar. Añade peso cuando la última repetición ya no cueste.',
          often: 'Un día sí y un día no en el ensayo. Walkito lo pone en los días de fuerza.',
          feel: 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco',
          stop: 'El dolor llega a 6/10 o más',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos arriba, quieto, tres segundos abajo',
          alt: 'Una figura sobre un escalón sube en puntas con una toalla enrollada bajo el pie, con la pantorrilla y el arco resaltados',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Series, repeticiones y la progresión de Rathleff',
      paragraphs: [
        'El ensayo fue subiendo la carga durante unos tres meses. El ritmo fue el mismo todo el tiempo: tres segundos para subir, dos arriba quieto y tres para bajar.',
      ],
      table: {
        caption: 'Progresión de la elevación de talones con toalla, Rathleff 2015',
        head: ['Semanas', 'Series x repeticiones', 'Ritmo', 'Frecuencia'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s arriba / 2\u00A0s quieto / 3\u00A0s abajo', 'Un día sí y un día no'],
          ['3-4', '4 x 10RM', '3\u00A0s arriba / 2\u00A0s quieto / 3\u00A0s abajo', 'Un día sí y un día no'],
          ['5 en adelante', '5 x 8RM', '3\u00A0s arriba / 2\u00A0s quieto / 3\u00A0s abajo', 'Un día sí y un día no'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'Errores comunes en la elevación de talones con toalla',
      paragraphs: [
        'Ir demasiado rápido es el error más común. Bajar en tres segundos mantiene la pantorrilla en tensión el tiempo suficiente para ganar fuerza. Subir y bajar rebotando lo convierte en un ejercicio de cardio, no de fuerza.',
        'Si la toalla se resbala y solo quedan uno o dos dedos encima, baja la carga sobre la fascia. Los cinco dedos deben estar sobre la toalla. Si la toalla se sigue resbalando, dóblala más gruesa o usa una toalla de manos en vez de una de baño.',
        'Empezar con una pierna cuando las elevaciones con dos pies todavía te cuestan lleva a mala técnica y a compensar. Si una elevación a una pierna sobre un escalón es demasiado por ahora, empieza con [elevaciones de talón con dos pies](/es/ejercicios/elevaciones-de-talon/) en el piso y ve subiendo.',
      ],
    },
    {
      h2: 'Versiones más fáciles y más difíciles',
      paragraphs: [
        'Si la elevación de talones con toalla completa sobre un escalón es demasiado difícil, retrocede por la cadena de pantorrilla. Las [elevaciones de talón sentado](/es/ejercicios/elevaciones-de-talon/) son las de menor carga. Después vienen las elevaciones de pie con dos pies. Después, la elevación de talón sostenida arriba. Después, la elevación a una pierna con toalla sobre un escalón. Cada paso debe sentirse manejable durante dos sesiones antes de subir.',
        'Si tu peso en una pierna es demasiado fácil, añade carga. El ensayo de Rathleff usó una mochila con libros o botellas de agua. En un gimnasio puedes usar una máquina de pantorrilla o un chaleco con peso. La meta es que la última repetición de cada serie sea de verdad la última que puedes hacer con buena técnica.',
      ],
    },
    {
      h2: '¿Qué dice la investigación sobre la elevación de talones con toalla?',
      keyFact: 'En un ensayo con 48\u00A0personas con fascitis plantar confirmada, las elevaciones de talones con toalla puntuaron mejor en el Foot Function Index a los tres meses, pero los resultados se igualaron con solo estirar a los doce meses (Rathleff y colegas, 2015).',
      paragraphs: [
        'El ensayo de Rathleff de 2015 es el único ensayo aleatorizado que probó la elevación de talones con toalla específicamente para la fascitis plantar. En 48\u00A0personas con fascitis plantar confirmada por ultrasonido, el grupo de las elevaciones puntuó 29\u00A0puntos mejor en el Foot Function Index a los tres meses que el grupo que solo estiraba. A los doce meses, los dos grupos estaban igualados.',
        'La guía de 2023 para el dolor de talón revisó esta y otras pruebas y le dio al entrenamiento de fuerza un grado **B** y al estiramiento un grado **A**. Recomienda los dos. La guía no menciona por separado la versión con toalla, pero es el único ejercicio de fuerza probado en su propio ensayo sobre fascitis plantar.',
        'Nada en la evidencia dice que este ejercicio deba reemplazar los estiramientos. Lo más sólido es hacer las dos cosas: un [estiramiento de la fascia plantar](/es/ejercicios/estiramiento-fascia-plantar/) para la rigidez de la mañana y la elevación con carga para ganar capacidad. Para la lista completa de ejercicios y cómo encajan, mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      sourceNote:
        'Rathleff 2015: diferencia en el Foot Function Index de 29\u00A0puntos a los 3\u00A0meses (IC 95\u00A0%: 6-52, p = 0,016). A los 12\u00A0meses: 22 frente a 16, sin diferencia significativa.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: '¿Para quién es la elevación de talones con toalla?',
      paragraphs: [
        'Para cualquier persona con fascitis plantar que tenga suficiente fuerza en la pantorrilla para hacer una elevación a una pierna sobre un escalón. El ensayo incluyó adultos con dolor desde hacía al menos tres meses y que toleraban la carga.',
        'Si tu dolor es reciente y no puedes pararte cómodo en una pierna, empieza más abajo en la escalera: primero elevaciones sentado o con dos pies. Si el dolor está en el tendón de Aquiles y no en la fascia plantar, la idea de cargar es parecida, pero no se usa toalla y el protocolo es otro. Para ese camino, mira [excéntricos de talón](/es/ejercicios/excentricos-de-talon/) o [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
      ],
      cites: [CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Para qué sirve la toalla en la elevación de talones?',
      cites: [CITE.rathleff],
      a: 'La toalla queda enrollada bajo los cinco dedos para que se doblen hacia arriba cuando estás arriba. Eso activa el mecanismo de molinete, una conexión entre el dedo gordo y la fascia plantar. Sin la toalla, el ejercicio carga sobre todo la pantorrilla. Con ella, la fascia comparte la carga, y por eso el ensayo de Rathleff la usó para la fascitis plantar.',
    },
    {
      q: '¿Cuántas elevaciones de talones con toalla debo hacer?',
      cites: [CITE.rathleff],
      a: 'El ensayo de Rathleff empezó con 3\u00A0series de 12\u00A0repeticiones (con la carga más pesada que se podía manejar 12\u00A0veces) y subió a 5\u00A0series de 8\u00A0repeticiones más pesadas hacia la semana 5, un día sí y un día no. Walkito empieza con 3\u00A0series de 12 por pierna y sube cuando dos sesiones en ese nivel se sienten fáciles.',
    },
    {
      q: '¿Puedo hacer la elevación de talones con toalla en el piso en vez de en un escalón?',
      a: 'Sí, pero pierdes el rango extra de abajo, donde el talón baja por debajo del escalón. La versión en el piso igual carga la pantorrilla y la fascia. Es un punto de partida razonable si el escalón se siente inestable o demasiado intenso, y después puedes pasar al escalón.',
    },
    {
      q: '¿Es normal que duela la elevación de talones con toalla?',
      cites: [CITE.guideline],
      a: 'Es normal sentir trabajo fuerte en la pantorrilla y un tirón bajo el arco. Detente por hoy si el dolor llega a 6 de 10 o más, o si a la mañana siguiente estás claramente peor de lo normal. Una molestia leve que se calma en un día es normal, sobre todo en las dos primeras semanas.',
    },
    {
      q: '¿La elevación de talones con toalla es lo mismo que un excéntrico de talón?',
      cites: [CITE.rathleff, CITE.alfredson],
      a: 'No. La elevación de talones con toalla incluye la subida y la bajada, y usa una toalla bajo los dedos para cargar la fascia plantar. El excéntrico de talón se centra solo en la bajada, sin toalla, y se diseñó para la tendinopatía de Aquiles. Atienden problemas distintos con protocolos distintos.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de un chasquido repentino o una lesión, en lugar de aparecer poco a poco',
      'no puedes apoyar el pie, o cojeas',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'el dolor te despierta por la noche o está presente cuando no estás de pie',
      'no ha mejorado después de varias semanas de carga constante',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'La elevación de talones con toalla es un paso en una cadena de pantorrilla que Walkito arma dentro de un plan semanal. La cadena va de las elevaciones de talón sentado a las elevaciones con dos pies, una elevación sostenida, la elevación con toalla, los excéntricos de talón y, al final, los saltos pogo. Cada paso se abre cuando dos sesiones en el nivel actual se sintieron fáciles.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla y el equilibrio. Walkito es un programa de ejercicios, no una herramienta de diagnóstico.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Elevación de talones con toalla',
  campaign: 'ex-towel-heel-raise-es',
};
