import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Traducido de `articles/ex-eccentric-heel-drops.ts` (2026-10-07). Consulta
 * principal: «excéntricos de talón aquiles». Cifras, dosis, grados y citas
 * idénticos al inglés.
 */

export const EX_ECCENTRIC_HEEL_DROPS_ES: Guide = {
  lang: 'es',
  page: 'exEccentricHeelDrops',
  mainSource: CITE.alfredson,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Excéntricos de talón para el Aquiles: cómo hacerlos',
  description:
    'Cómo hacer excéntricos de talón para el tendón de Aquiles: el protocolo de Alfredson, series, repeticiones, ritmo y errores comunes.',
  h1: 'Excéntricos de talón para el Aquiles: cómo hacerlos, series, repeticiones y qué dice la investigación',
  lede:
    'Un excéntrico de talón es un ejercicio de fuerza en el que subes con los dos pies y bajas despacio con uno, dejando que el talón baje más allá de la orilla de un escalón. Lo importante es la fase de bajada, llamada contracción excéntrica. Se diseñó para la tendinopatía de Aquiles y se probó por primera vez en un ensayo de 1998 de Alfredson, en el que 15\u00A0atletas volvieron a correr después de hacerlo dos veces al día durante tres meses.',
  takeaways: [
    'La guía de 2024 para el tendón de Aquiles le da al ejercicio (todos los tipos de carga del tendón) una **A**, su grado más alto, en la tendinopatía de Aquiles de la porción media (Chimenti y colegas, 2024).',
    'Un metanálisis en red de 2021 con 29\u00A0ensayos aleatorizados no encontró un protocolo de ejercicio claramente mejor que otro; todos fueron mejores que no hacer ejercicio (van der Vlist y colegas, 2021).',
    'Si el dolor de Aquiles es insercional (justo en el hueso del talón), los excéntricos de talón deben quedarse a nivel del piso, no por debajo de la orilla del escalón, porque la dorsiflexión profunda comprime el tendón contra el hueso (Jonsson y colegas, 2008).',
    'El protocolo de Alfredson pide 3\u00A0series de 15 dos veces al día, siete días a la semana, durante unos tres meses. Walkito empieza con 3\u00A0series de 10, cada pierna, en los días de fuerza.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué es un excéntrico de talón?',
      paragraphs: [
        'Una contracción excéntrica es cuando el músculo se alarga bajo carga. En un excéntrico de talón, la pantorrilla se alarga mientras bajas el talón por debajo del escalón. Esa bajada controlada es lo que, con las semanas, aumenta la capacidad del tendón. La subida se hace con los dos pies para quitarle el esfuerzo concéntrico al lado lesionado.',
        'La confusión más común es entre un excéntrico de talón y un estiramiento de pantorrilla. Un estiramiento se queda abajo. Un excéntrico de talón pasa por esa posición despacio, con el músculo trabajando todo el tiempo. Quedarte abajo como en un estiramiento quita el estímulo de carga que hace que el ejercicio funcione. El beneficio está en la bajada lenta y controlada.',
      ],
      cites: [CITE.alfredson],
    },
    {
      h2: 'Cómo hacer excéntricos de talón (rodilla estirada)',
      paragraphs: [
        'Párate en la orilla de un escalón, con la parte delantera de los pies sobre el escalón y los talones afuera. Sube con los dos pies. Pasa el peso a la pierna que trabaja. Baja ese talón despacio, en unos tres segundos, dejando que baje por debajo del escalón. Mantén la rodilla estirada. Usa los dos pies para volver arriba.',
        'El excéntrico de talón con la rodilla estirada trabaja el gastrocnemio, el músculo más grande y externo de la pantorrilla. Alfredson también indicó una versión con la rodilla doblada para trabajar el sóleo, el músculo más profundo de la pantorrilla. Es el mismo movimiento, con la rodilla doblada a unos 30 a 45\u00A0grados durante la bajada.',
      ],
      exercises: [
        {
          name: 'Excéntricos de talón (rodilla estirada)',
          evidence: {
            level: 'strong',
            why: 'El protocolo original de Alfredson de 1998. La guía de 2024 le da una A al ejercicio en la tendinopatía de Aquiles de la porción media.',
          },
          dose: 'Alfredson: 3\u00A0series de 15, dos veces al día, unos tres meses. Walkito empieza con 3\u00A0series de 10, cada pierna',
          how: 'Párate en la orilla de un escalón. Sube con los dos pies, pasa el peso a una pierna y baja despacio en tres segundos. El talón baja por debajo del escalón. Vuelve arriba con los dos pies. Rodilla estirada.',
          often: 'Dos veces al día en el protocolo de Alfredson. En Walkito: días de fuerza.',
          feel: 'Trabajo fuerte en la pantorrilla durante la bajada, no un estiramiento abajo',
          stop: 'Dolor de más de 5/10 que no se calma para la mañana siguiente',
          media: 'heel_drop_straight',
          caption: 'Excéntrico de talón: sube con los dos pies, baja despacio con uno',
          alt: 'Una figura sobre un escalón baja un talón por debajo de la orilla con la rodilla estirada, con la pantorrilla y el tendón de Aquiles resaltados',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'El protocolo de Alfredson: series, repeticiones y progresión',
      paragraphs: [
        'El protocolo original son 3\u00A0series de 15\u00A0repeticiones con la rodilla estirada, más 3\u00A0series de 15 con la rodilla doblada, dos veces al día, siete días a la semana, durante unos tres meses. Son 180\u00A0repeticiones al día. Cuando el ejercicio ya no duele con tu peso corporal, se añade carga con una mochila.',
        'Walkito empieza con menos volumen: 3\u00A0series de 10, cada pierna, en los días de fuerza. La dosis de Alfredson es alta y cuesta cumplirla. Un ensayo de 2014 de Stevens y Tan encontró que un protocolo excéntrico «según tolerancia», con menos repeticiones, logró mejoras iguales en dolor y función. Por eso las guías más nuevas son menos rígidas con llegar a las 180 diarias.',
      ],
      table: {
        caption: 'Protocolo de excéntricos de talón de Alfredson, 1998',
        head: ['Variante', 'Series x repeticiones', 'Sesiones al día', 'Frecuencia'],
        rows: [
          ['Rodilla estirada', '3 x 15', '2', 'Todos los días, unos tres meses'],
          ['Rodilla doblada', '3 x 15', '2', 'Todos los días, unos tres meses'],
        ],
      },
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: '¿Cuánto dolor es normal con los excéntricos de talón?',
      paragraphs: [
        'En un ensayo con 38\u00A0personas de Silbernagel (2007), un grupo siguió corriendo y cargando durante la rehabilitación con una regla de control del dolor: el dolor durante y después de la carga podía llegar a cerca de **5 de 10**, siempre que se calmara para la mañana siguiente y no empeorara semana tras semana. A los doce meses, a ese grupo le fue igual de bien que al grupo que primero descansó.',
        'Esto es distinto del límite de 6/10 que se usa en la página de [fascitis plantar](/es/ejercicios-fascitis-plantar/). La cifra de 5/10 viene de un solo estudio específico del Aquiles, no de un estándar universal, pero es el modelo de dolor más citado en la rehabilitación del Aquiles. Un dolor que no se calma durante la noche o que empeora cada semana significa que la carga es demasiada.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Insercional o de porción media: ¿cambia el ejercicio?',
      paragraphs: [
        'La tendinopatía de Aquiles de la porción media está en el cuerpo del tendón, normalmente de 2 a 6\u00A0centímetros por encima del hueso del talón. Aquí sirven los excéntricos normales sobre la orilla de un escalón.',
        'La tendinopatía de Aquiles insercional es dolor justo donde el tendón se une al hueso. En un estudio piloto de 2008 con 27\u00A0personas con dolor insercional crónico, un protocolo modificado con carga excéntrica solo a nivel del piso, sin bajar por debajo de la posición neutra, reportó buenos resultados en el 67\u00A0% de los casos. La dorsiflexión profunda comprime el tendón contra el hueso del talón, así que las bajadas profundas normales son contraproducentes en el dolor insercional.',
        'Si tu dolor está justo en la parte de atrás del hueso del talón, haz todos los excéntricos de talón en el piso. No bajes por debajo de la orilla del escalón. No estires con fuerza. Es el ajuste que más se pasa por alto en los programas para el Aquiles. Para la página completa, mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Errores comunes en los excéntricos de talón',
      paragraphs: [
        'Quedarte abajo como en un estiramiento. El beneficio está en la bajada lenta, no en quedarte colgado abajo. Baja en tres segundos y vuelve arriba enseguida con los dos pies.',
        'Bajar demasiado. El talón debe bajar hasta su rango natural por debajo del escalón. Forzarlo más, inclinando el pie hacia adentro o hacia afuera para ganar rango, tensa los tendones de la parte interna o externa del tobillo. De 3 a 5\u00A0centímetros por debajo del escalón es suficiente.',
        'Ir demasiado rápido. La velocidad quita la carga excéntrica en la que se basa el ejercicio. Si no puedes controlar la bajada en unos tres segundos, pasa primero a la versión con dos pies.',
        'Saltarte la versión con la rodilla doblada. El excéntrico con la rodilla estirada trabaja el gastrocnemio. La versión con la rodilla doblada trabaja el sóleo. Los dos músculos llegan al tendón de Aquiles. El protocolo original incluye los dos.',
      ],
    },
    {
      h2: 'Versiones más fáciles y más difíciles',
      paragraphs: [
        'Si un excéntrico a una pierna duele demasiado o te cuesta mucho por ahora, vuelve a las [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/) con dos pies o a una [elevación de talón sostenida](/es/ejercicios/elevaciones-de-talon/). Construyen la fuerza de base que necesitas para el trabajo excéntrico.',
        'Si tu peso corporal se queda corto, añade carga. El protocolo original usaba una mochila. Un chaleco con peso o una máquina de pantorrilla también sirven. La guía también nombra la resistencia pesada y lenta (3\u00A0días a la semana, cargas más pesadas, menos repeticiones) como igual de eficaz, a partir de un ensayo de 2015 con 58\u00A0personas.',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
  ],
  faq: [
    {
      q: '¿Los excéntricos de talón son lo mismo que las elevaciones de talón?',
      cites: [CITE.alfredson],
      a: 'No. Una elevación de talón incluye la subida y la bajada. En un excéntrico de talón subes con los dos pies y bajas despacio con uno. Solo la bajada (fase excéntrica) se hace con el lado lesionado. La subida (fase concéntrica) se reparte. Esta diferencia importa porque controla cuánta carga recibe el tendón en cada repetición.',
    },
    {
      q: '¿Se pueden hacer excéntricos de talón en el piso, sin escalón?',
      cites: [CITE.jonsson],
      a: 'Sí, y deberías hacerlo así si tu dolor está donde el tendón se une al hueso del talón (insercional). Un estudio piloto de 2008 encontró buenos resultados con carga excéntrica a nivel del piso, sin bajar por debajo de la posición neutra. Para el dolor de la porción media, un escalón da más rango, pero el piso igual da una carga excéntrica.',
    },
    {
      q: '¿Es normal que duelan los excéntricos de talón?',
      cites: [CITE.silbernagel],
      a: 'Se espera algo de molestia. Un ensayo permitió dolor de hasta cerca de 5 de 10 durante la carga, siempre que se calmara para la mañana siguiente y no empeorara de una semana a otra (Silbernagel, 2007). Si el dolor sigue alto durante la noche o sube cada semana, es la señal para bajar la carga.',
    },
    {
      q: '¿Cuánto tardan en funcionar los excéntricos de talón?',
      cites: [CITE.achillesGuideline, CITE.alfredson],
      a: 'La recuperación de la tendinopatía de Aquiles se mide en meses. El ensayo original hizo el protocolo durante unos tres meses. La guía de 2024 señala que la función puede mejorar desde las dos semanas, pero una recuperación más completa toma mucho más. Ningún ensayo promete un plazo fijo.',
    },
    {
      q: '¿Los excéntricos de talón sirven para la fascitis plantar?',
      cites: [CITE.rathleff],
      a: 'Los excéntricos de talón se diseñaron para el tendón de Aquiles, no para la fascia plantar. Para la fascitis plantar, el ejercicio probado es la [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/), que añade una toalla bajo los dedos para trabajar la fascia. En la cadena de pantorrilla de Walkito, los excéntricos de talón vienen después de la elevación con toalla.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'sentiste un chasquido o un tirón repentino, o como si te hubieran pateado en la parte de atrás de la pierna',
      'la zona del tendón está hinchada, roja, caliente o tiene un hueco visible',
      'estás tomando o tomaste hace poco un antibiótico del grupo de las fluoroquinolonas y tienes dolor nuevo en un tendón',
      'el dolor está donde el tendón se une al hueso del talón y empeora con la carga en lugar de mejorar',
      'te duele en reposo o el dolor te despierta por la noche',
      'no puedes subir en puntas para nada con el lado que duele',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Los excéntricos de talón son un paso de la cadena de pantorrilla que Walkito arma en un plan semanal. La cadena empieza con elevaciones sentado y sube por las elevaciones con dos pies, la elevación sostenida, la elevación de talones con toalla, los excéntricos de talón y los saltos pogo. Cada paso se abre cuando dos sesiones en el nivel actual se sintieron fáciles.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla y el equilibrio. Si el dolor está justo donde el tendón se une al hueso del talón, pide a un profesional de la salud que lo revise antes de cargarlo fuerte. Walkito es un programa de ejercicio. No diagnostica.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Excéntricos de talón',
  campaign: 'ex-eccentric-heel-drops-es',
};
