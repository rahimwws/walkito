import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Traducido de `articles/ex-calf-raises.ts` (2026-10-07). Consulta principal:
 * «elevaciones de talón». Cifras, dosis, grados y citas idénticos al inglés.
 */

export const EX_CALF_RAISES_ES: Guide = {
  lang: 'es',
  page: 'exCalfRaises',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Elevaciones de talón: cómo hacerlas bien',
  description:
    'Cómo hacer elevaciones de talón bien: de pie, sentado y sostenidas, qué músculos trabajan, series y repeticiones, errores comunes y para quién sirven.',
  h1: 'Elevaciones de talón: cómo hacerlas bien, con series, repeticiones y variantes',
  lede:
    'Una elevación de talón es un ejercicio, de pie o sentado, en el que subes sobre la parte delantera del pie. Fortalece el gastrocnemio (el músculo más grande y superficial de la pantorrilla) y el sóleo (el más profundo), y en cada repetición pone carga sobre el tendón de Aquiles y la fascia plantar. Esta página explica la elevación de pie con dos pies, la versión sentado y la elevación sostenida arriba.',
  takeaways: [
    'La guía de 2023 para el dolor de talón le da al fortalecimiento de la pantorrilla una B y lo recomienda junto con el estiramiento, al que le da una A (Koc y colegas, 2023).',
    'Un estudio de valores normales con 566\u00A0adultos sanos (de 20 a 81\u00A0años) encontró una mediana de 24\u00A0elevaciones de talón a una pierna en hombres y 21 en mujeres, con cambios según la edad, el sexo y el nivel de actividad (Hébert-Losier y colegas, 2017).',
    'Menos dorsiflexión del tobillo, muchas veces por un gastrocnemio tenso, fue el factor de riesgo independiente más fuerte de fascitis plantar en un estudio de casos y controles con 50\u00A0casos y 100\u00A0controles (Riddle y colegas, 2003).',
    'Las elevaciones de talón de pie cargan sobre todo el gastrocnemio. Sentado, la carga pasa al sóleo, porque la rodilla doblada acorta el gastrocnemio.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué músculos trabajan las elevaciones de talón?',
      paragraphs: [
        'Las elevaciones de talón de pie, con la rodilla estirada, trabajan sobre todo el gastrocnemio, el músculo de dos cabezas que le da a la pantorrilla su forma visible. El gastrocnemio cruza la rodilla y el tobillo, así que trabaja más cuando la rodilla está estirada.',
        'Las elevaciones de talón sentado pasan la carga al sóleo, el músculo más profundo de la pantorrilla, que está debajo. El sóleo solo cruza el tobillo. Por eso, con la rodilla doblada a unos 90\u00A0grados, el gastrocnemio casi sale del movimiento y el sóleo hace el trabajo.',
        'Los dos músculos se unen al talón por el tendón de Aquiles. Cada elevación de talón también carga un poco la fascia plantar, porque el talón es el punto de anclaje que comparten. La [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/) carga todavía más la fascia porque dobla los dedos hacia arriba.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: '¿Cómo hacer elevaciones de talón de pie (con dos pies)?',
      paragraphs: [
        'Párate con los dos pies apoyados en el piso, separados más o menos al ancho de la cadera. Apóyate en una pared o una silla para no perder el equilibrio. Sube sobre la parte delantera del pie, empujando con los dedos gordos. Quédate un momento arriba y baja despacio, en unos tres segundos. Los dos pies comparten la carga.',
        'Si tienes un escalón, párate con la parte delantera del pie en la orilla y deja que los talones bajen un poco más al bajar. Ese rango extra abajo estira la pantorrilla un poco más en cada repetición. En el piso el rango es menor, pero el ejercicio igual funciona.',
      ],
      exercises: [
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2023 le da una B al trabajo de fuerza. Las elevaciones con dos pies son un paso intermedio en programas probados, no se probaron solas.',
          },
          dose: 'Walkito empieza con 3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Apóyate en una pared para no perder el equilibrio.',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cómo hacer elevaciones de talón sentado',
      paragraphs: [
        'Siéntate en una silla con los pies apoyados en el piso y las rodillas dobladas a unos 90\u00A0grados. Empuja con la parte delantera de los dos pies y levanta los dos talones del piso. Baja despacio. Si pones las manos sobre las rodillas y empujas hacia abajo, añades resistencia.',
        'Las elevaciones sentado son el punto de entrada con menos carga en la cadena de pantorrilla. Casi no cargan el talón comparadas con el trabajo de pie, así que son un buen punto de partida cuando las elevaciones de pie duelen demasiado.',
      ],
      exercises: [
        {
          name: 'Elevaciones de talón sentado',
          evidence: {
            level: 'moderate',
            why: 'Forman parte de progresiones de rehabilitación publicadas (Fase 1 de Silbernagel). No se probaron solas en un ensayo aleatorizado.',
          },
          dose: 'Walkito empieza con 3\u00A0series de 10, los dos pies',
          how: 'Siéntate con los pies apoyados. Empuja con la parte delantera de los dos pies. Las manos en las rodillas añaden resistencia.',
          often: 'Días de fuerza, mientras sea tu nivel',
          feel: 'Trabajo en las pantorrillas, muy poca carga en el talón',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.silbernagel, CITE.guideline],
    },
    {
      h2: 'Cómo hacer una elevación de talón sostenida (isométrica)',
      paragraphs: [
        'Sube en puntas con los dos pies y quédate quieto arriba. No dejes que los talones bajen. Un ejercicio isométrico significa que el músculo trabaja sin moverse por un rango. Así cargas el tendón de Aquiles sin el sube y baja que puede molestar en algunos dolores de tendón o de talón en etapa temprana.',
        'La guía de 2024 para el tendón de Aquiles nombra la carga isométrica como uno de los tipos de carga del tendón que funcionan, aunque no se ha publicado ningún ensayo de Aquiles con solo ejercicio isométrico.',
      ],
      exercises: [
        {
          name: 'Elevación de talón sostenida',
          evidence: {
            level: 'moderate',
            why: 'La guía de 2024 para el tendón de Aquiles la nombra como un tipo de carga que funciona. No hay un ensayo aleatorizado solo con isométricos.',
          },
          dose: 'Walkito empieza con 3\u00A0series de 20\u00A0segundos sostenidos, los dos pies',
          how: 'Sube en puntas con los dos pies y quédate arriba sin bajar. Apóyate en una pared para no perder el equilibrio.',
          often: 'Días de fuerza, el paso entre las elevaciones con dos pies y el trabajo a una pierna',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene en puntas con los dos pies, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.guideline],
    },
    {
      h2: '¿Cuántas elevaciones de talón debes hacer?',
      keyFact: 'Un estudio de valores normales con 566\u00A0adultos sanos de 20 a 81\u00A0años encontró que el número de elevaciones a una pierna variaba con la edad, el sexo y la actividad, con una mediana de 21\u00A0repeticiones en mujeres (Hébert-Losier y colegas, 2017).',
      paragraphs: [
        'Depende de en qué paso de la escalera estés y de qué estés trabajando. Para la fuerza general de la pantorrilla, **3\u00A0series de 10 a 15\u00A0repeticiones a ritmo lento es una dosis de inicio común.** En el protocolo para fascitis plantar que se probó en un ensayo, la elevación de talones con toalla empieza con 3\u00A0series a un máximo de 12\u00A0repeticiones (12RM) y sube a 5\u00A0series a 8RM en unas cinco semanas.',
        'Una referencia útil es la prueba de resistencia de elevación de talón a una pierna. Un estudio de valores normales con 566\u00A0adultos sanos encontró una mediana de 24\u00A0repeticiones en hombres y 21 en mujeres, con cambios según la edad, el sexo y la actividad. La meta de pantorrilla en la app de Walkito son 25\u00A0elevaciones de talón a una pierna. Alcanzarla no termina el trabajo. Pasa a mantenimiento.',
        'Para el protocolo específico de fascitis plantar, mira la [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/). Para la versión del tendón de Aquiles, mira los [excéntricos de talón](/es/ejercicios/excentricos-de-talon/).',
      ],
      cites: [CITE.hebertLosier, CITE.rathleff],
    },
    {
      h2: '¿Cuáles son los errores comunes en las elevaciones de talón?',
      paragraphs: [
        {
          list: [
            '**Ir demasiado rápido.** Lo que construye fuerza es bajar despacio (unos tres segundos). Rebotar abajo desperdicia la fase excéntrica, que es la parte que hace la mayor parte del trabajo para que el tendón se adapte.',
            '**Irte hacia el borde externo del pie.** El empuje va por el dedo gordo y la parte delantera del pie. Si el tobillo se va hacia afuera, la pantorrilla no se contrae del todo y los músculos pequeños de la parte externa del tobillo cargan un esfuerzo para el que no están hechos.',
            '**Saltarte la versión sentado.** Si las elevaciones de pie te duelen, pasar directo al trabajo a una pierna en un escalón empeora las cosas. La escalera existe por algo: sentado, después de pie con dos pies, después sostenida, después a una pierna. Cada paso debe sentirse manejable durante dos sesiones antes de avanzar.',
          ],
        },
      ],
    },
    {
      h2: 'Elevaciones de talón para fascitis plantar o para tendinitis de Aquiles',
      paragraphs: [
        'Para la fascitis plantar, la evidencia apunta a la [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/), donde la toalla bajo los dedos carga la fascia junto con la pantorrilla. El límite de dolor es 6/10. La página completa está en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
        'Para la tendinitis de Aquiles, el foco pasa a los [excéntricos de talón](/es/ejercicios/excentricos-de-talon/), donde lo importante es la fase de bajada y no se usa toalla. El modelo de dolor de un ensayo permite cargar hasta cerca de 5/10, siempre que se calme para la mañana siguiente. La página completa está en [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
        'La elevación de talón con dos pies, la versión sentado y la elevación sostenida aparecen en los dos caminos como primeros pasos. Construyen la fuerza de base que hace posible el ejercicio específico con carga.',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
  ],
  faq: [
    {
      q: '¿Las elevaciones de talón trabajan los glúteos?',
      a: 'No. Las elevaciones de talón trabajan el gastrocnemio y el sóleo, en la parte baja de la pierna. Los glúteos estabilizan la cadera en las variantes a una pierna, pero no son el músculo principal que trabaja. Para la fuerza de cadera y glúteos, mira la [abducción de cadera](/es/ejercicios/abduccion-de-cadera/).',
    },
    {
      q: '¿Qué es mejor, elevaciones de talón sentado o de pie?',
      cites: [CITE.patelGastrocnemius],
      a: 'Trabajan músculos distintos. Las elevaciones de pie trabajan sobre todo el gastrocnemio, el músculo más grande de la pantorrilla. Sentado, la carga pasa al sóleo, el más profundo, porque la rodilla doblada saca casi del todo al gastrocnemio del movimiento. Las dos tienen su lugar, y hacerlas juntas cubre toda la pantorrilla.',
    },
    {
      q: '¿Cuántas elevaciones de talón a una pierna son normales?',
      cites: [CITE.hebertLosier],
      a: 'Un estudio de valores normales con 566\u00A0adultos sanos encontró una mediana de 24\u00A0repeticiones en hombres y 21 en mujeres, ajustada por edad, sexo y nivel de actividad (Hébert-Losier, 2017). El número sirve para seguir los cambios con las semanas y comparar una pierna con la otra, no como una línea de aprobado o reprobado.',
    },
    {
      q: '¿Hay que hacer elevaciones de talón todos los días?',
      cites: [CITE.rathleff],
      a: 'El ensayo de Rathleff sobre fascitis plantar las hacía un día sí y un día no. Los músculos y los tendones necesitan recuperarse entre sesiones con carga. Walkito pone las elevaciones de talón en los días de fuerza, con días de descanso entre ellos. Cargar todos los días sin descanso puede frenar el avance o aumentar el dolor.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'sentiste un chasquido o un tirón repentino en la pantorrilla o el tendón de Aquiles durante una elevación',
      'la pantorrilla está hinchada, roja, caliente o dura al tocarla',
      'no puedes subir en puntas para nada con un lado',
      'el dolor no se calma durante la noche y empeora semana tras semana',
      'aparece entumecimiento, hormigueo o ardor en el pie',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito arma un plan que empieza en tu nivel y sube cuando estás listo. La cadena de pantorrilla va de las elevaciones sentado a las elevaciones de pie con dos pies, la elevación sostenida, la elevación de talones con toalla, los excéntricos de talón y los saltos pogo. Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos.',
    more: [
      'Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla y el equilibrio. La meta de pantorrilla son 25\u00A0elevaciones a una pierna. Alcanzarla no termina el trabajo: una nueva meta ocupa su lugar. Walkito es un programa de ejercicio. No diagnostica.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Elevaciones de talón',
  campaign: 'ex-calf-raises-es',
};
