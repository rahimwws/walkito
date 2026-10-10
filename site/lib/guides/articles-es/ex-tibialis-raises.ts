import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Traducido de `articles/ex-tibialis-raises.ts` (2026-10-07). Cifras, dosis,
 * grados y citas idénticos al inglés. Nunca «espinilla»: «tibia». En la app
 * el ejercicio se llama «Elevaciones de puntas».
 */

export const EX_TIBIALIS_RAISES_ES: Guide = {
  lang: 'es',
  page: 'exTibialisRaises',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Elevaciones de tibial anterior: cómo hacerlas',
  description:
    'Cómo hacer elevaciones de tibial anterior (elevaciones de puntas): técnica, series, músculos, evidencia para la periostitis tibial y progresiones.',
  h1: 'Elevaciones de tibial anterior: cómo hacerlas, qué trabajan y qué dice la evidencia',
  lede:
    'Una elevación de tibial anterior es un ejercicio con apoyo en la pared en el que levantas los dedos hacia la tibia mientras los talones se quedan en el piso. Fortalece el tibial anterior, el músculo que baja por la parte delantera de la pierna y ayuda a levantar el pie en cada paso. El ejercicio es sencillo y no necesitas nada más que una pared.',
  takeaways: [
    'El tibial anterior controla la dorsiflexión: levanta la parte delantera del pie para que no roce el piso al caminar y al correr.',
    'Los deportistas con síndrome de estrés tibial medial (periostitis tibial) tenían menos resistencia en elevaciones de talón que controles comparables, lo que apunta a un déficit general de fuerza en la parte baja de la pierna (Madeley y colegas, 2007).',
    'Ningún ensayo aleatorizado ha probado las elevaciones de tibial anterior solas para un problema concreto de pie o tobillo. El ejercicio está en los programas por razonamiento biomecánico, no por evidencia directa de ensayos.',
    'Walkito empieza con 3\u00A0series de 10, los dos pies, con la espalda contra una pared.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué músculos trabajan las elevaciones de tibial anterior?',
      paragraphs: [
        'Las elevaciones de tibial anterior trabajan sobre todo el tibial anterior, el músculo de la parte delantera de la pierna. Se encarga de la dorsiflexión, es decir, de levantar el pie hacia la tibia. Cada vez que das un paso, el tibial anterior levanta los dedos para que el pie no roce el piso. Cuando está débil, el pie puede caer de golpe después de apoyar el talón o engancharse en superficies irregulares.',
        'El ejercicio también trabaja los músculos extensores de los dedos, más pequeños, en la parte delantera de la pierna. No carga los músculos de la pantorrilla, en la parte de atrás, por eso se combina con las [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/) para cubrir los dos lados de la parte baja de la pierna.',
      ],
    },
    {
      h2: '¿Cómo hacer una elevación de tibial anterior?',
      paragraphs: [
        'Párate con la espalda pegada a una pared. Avanza los pies unos 30\u00A0centímetros (más o menos el largo de un pie) desde la pared. Deja los talones en el piso.',
        'Levanta la parte delantera de los dos pies lo más alto que puedas, llevando los dedos hacia la tibia. Quédate un momento arriba. Baja despacio.',
        'La pared sostiene tu peso para que te concentres en el trabajo de la parte delantera de la pierna. Si te separas de la pared, tienes los pies demasiado adelante.',
      ],
      exercises: [
        {
          name: 'Elevaciones de tibial anterior (con apoyo en la pared)',
          evidence: {
            level: 'early',
            why: 'Ningún ensayo aleatorizado ha probado este ejercicio solo para un problema de pie o de tibia. Se incluye por equilibrio biomecánico junto al trabajo de pantorrilla.',
          },
          dose: 'Walkito empieza con 3\u00A0series de 10, los dos pies',
          how: 'Espalda contra una pared, pies un poco adelante. Levanta los dedos hacia la tibia, los talones se quedan abajo. Baja despacio.',
          often: 'Días de fuerza',
          feel: 'Ardor a lo largo de la parte delantera de la pierna',
          stop: 'Dolor agudo en el hueso de la tibia, no solo cansancio muscular',
          media: 'tibialis_raise',
          caption: 'Elevaciones de tibial anterior: sube los dedos, los talones quedan abajo',
          alt: 'Una figura apoyada en una pared levanta los dedos de los dos pies hacia la tibia, con la parte delantera de las piernas resaltada',
        },
      ],
    },
    {
      h2: '¿Las elevaciones de tibial anterior ayudan con la periostitis tibial?',
      keyFact: 'En un estudio de casos y controles de 2007, los deportistas con periostitis tibial tenían menos resistencia en elevaciones de talón que controles comparables, lo que apunta a un déficit general de fuerza, no a un músculo concreto (Madeley y colegas, 2007).',
      paragraphs: [
        'La periostitis tibial, cuyo nombre clínico es síndrome de estrés tibial medial (SETM), es dolor a lo largo del borde interno de la tibia. El tibial anterior está en la parte delantera y externa de la tibia, no en el lugar donde suele doler el SETM, así que la relación es indirecta. La idea es que un tibial anterior más fuerte ayuda a absorber el impacto al correr y caminar, y reduce la tensión sobre la tibia en general.',
        'Un estudio de casos y controles de 2007 encontró que los deportistas con SETM tenían menos resistencia en elevaciones de talón que controles comparables, lo que apunta a un déficit general de fuerza en la parte baja de la pierna, no a la debilidad de un músculo concreto.',
        'Una revisión sistemática de 2013 estudió el tratamiento del SETM ya presente, no su prevención, y no encontró ningún ensayo que mostrara que los estiramientos o los ejercicios de fuerza funcionaran, aunque en general la evidencia detrás de ese resultado era de baja calidad.',
        'Siendo honestos, no tenemos un ensayo que haya probado las elevaciones de tibial anterior solas para la periostitis tibial y que haya mostrado menos síntomas o menos recaídas. **El ejercicio está en los programas porque tiene sentido biomecánico, no porque un ensayo lo haya demostrado.** Por eso su etiqueta de evidencia dice «temprana». Para la página completa, mira [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/).',
      ],
      cites: [CITE.madeley, CITE.winters],
    },
    {
      h2: 'Series, repeticiones y cómo avanzar',
      paragraphs: [
        'Walkito empieza con 3\u00A0series de 10, los dos pies, contra una pared. Es un punto de partida cómodo para la mayoría. Si 10\u00A0repeticiones se sienten fáciles y no te cansan nada, sube a 15 o añade una pausa de 2\u00A0segundos arriba.',
        'Para hacerlo más difícil:',
        {
          list: [
            'Prueba las elevaciones a una pierna: la misma posición contra la pared, un pie a la vez.',
            'Una banda elástica pasada por encima del pie añade carga.',
            'Sostener una mancuerna ligera sobre el empeine es otra opción, aunque incómoda.',
          ],
        },
        'La progresión más simple es hacer más repeticiones con un ritmo controlado.',
        'En la app, este ejercicio se llama «Elevaciones de puntas». El movimiento es el mismo: subes los dedos y los talones se quedan abajo.',
      ],
    },
    {
      h2: 'Elevaciones de tibial anterior o elevaciones de talón',
      paragraphs: [
        'Las elevaciones de tibial anterior y las [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/) son movimientos opuestos. Una elevación de talón lleva el pie hacia abajo (flexión plantar). Una elevación de tibial anterior lleva el pie hacia arriba (dorsiflexión). Los músculos de la pantorrilla y el tibial anterior trabajan juntos para controlar cada paso: absorben el impacto al aterrizar y empujan al despegar los dedos.',
        'Fortalecer un lado sin el otro puede crear un desequilibrio. Los corredores que solo hacen elevaciones de talón pueden seguir teniendo dolor en la tibia porque el tibial anterior no le sigue el ritmo a la pantorrilla cuando suben mucho los kilómetros. **Un programa equilibrado incluye los dos.**',
      ],
    },
    {
      h2: '¿Cuáles son los errores comunes en las elevaciones de tibial anterior?',
      paragraphs: [
        {
          list: [
            '**Pies demasiado lejos de la pared.** Si los talones se deslizan hacia adelante, pierdes el apoyo de la pared y el ejercicio se vuelve un reto de equilibrio en lugar de un ejercicio de fuerza para la parte delantera de la pierna. Para la mayoría, más o menos el largo de un pie desde la pared es lo correcto.',
            '**Apurar las repeticiones.** Subir y bajar despacio y con control hace trabajar más al músculo que las repeticiones rápidas. Dos segundos para subir, un segundo arriba y dos segundos para bajar es un buen ritmo.',
            '**Confundir el ardor del músculo con dolor de hueso.** Sentir ardor a lo largo de los músculos de la parte delantera de la pierna es normal durante la serie. Un dolor agudo y localizado en el propio hueso de la tibia no lo es, y podría ser una reacción por estrés. Detente y pide que te lo revisen.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Para qué sirven las elevaciones de tibial anterior?',
      a: 'Las elevaciones de tibial anterior fortalecen el músculo que levanta la parte delantera del pie. Suelen incluirse en programas para la parte baja de la pierna, junto con las elevaciones de talón, para la estabilidad general de la tibia y el tobillo. Pueden ayudar a quienes sienten cansancio en la tibia al correr o caminar, aunque ningún ensayo las ha probado solas para un problema concreto.',
    },
    {
      q: '¿Las elevaciones de tibial anterior previenen la periostitis tibial?',
      cites: [CITE.madeley, CITE.winters],
      a: 'Suelen incluirse en programas para la periostitis tibial por su lógica biomecánica, no por evidencia de ensayos. Una revisión sistemática de 2013 estudió el tratamiento del SETM, no su prevención, y no encontró ningún ensayo que mostrara que los ejercicios de fuerza funcionaran, aunque la evidencia era de baja calidad. Tampoco se han probado solas para prevenir la periostitis tibial.',
    },
    {
      q: '¿Cada cuánto hay que hacer elevaciones de tibial anterior?',
      a: 'De dos a cuatro veces por semana es un rango común. Walkito las pone en los días de fuerza junto con el trabajo de pantorrilla. Como la carga es bastante baja comparada con las elevaciones de talón pesadas o los excéntricos de talón, la recuperación suele ser rápida y puedes hacerlas en días seguidos si no te causan dolor.',
    },
    {
      q: '¿Las elevaciones de tibial anterior son lo mismo que las elevaciones de puntas?',
      a: 'Sí. «Elevaciones de puntas» y «elevaciones de tibial anterior» describen el mismo movimiento: levantar la parte delantera del pie mientras el talón se queda en el piso. La app de Walkito las llama «Elevaciones de puntas». Algunas fuentes también las llaman «elevaciones de dedos» o «tib raises». Todas se refieren al mismo ejercicio.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'tienes un dolor agudo y localizado en el hueso de la tibia en lugar de un dolor muscular repartido',
      'el dolor aumenta durante tus carreras después de subir el kilometraje, lo que puede ser señal de una fractura por estrés y no de cansancio muscular',
      'hay hinchazón, enrojecimiento o calor sobre la tibia',
      'te cuesta levantar la parte delantera del pie (pie caído)',
      'aparece entumecimiento u hormigueo en el pie o en la parte baja de la pierna',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito combina las elevaciones de tibial anterior con elevaciones de talón, trabajo de equilibrio y ejercicios de pie en un plan armado según tu nivel actual. Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos.',
    more: [
      'Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, el equilibrio y cuánto mantienes el arco. Las elevaciones de tibial anterior forman parte de los días de fuerza. Walkito es un programa de ejercicio. No diagnostica.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Elevaciones de tibial anterior',
  campaign: 'ex-tibialis-raises-es',
};
