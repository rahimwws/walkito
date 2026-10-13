import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Traducido de `articles/ex-single-leg-balance.ts` (2026-10-07). Consulta
 * principal: «ejercicios de equilibrio a una pierna». Cifras, dosis, grados y
 * citas idénticos al inglés (decimales con coma).
 */

export const EX_SINGLE_LEG_BALANCE_ES: Guide = {
  lang: 'es',
  page: 'exSingleLegBalance',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Equilibrio a una pierna: cómo hacerlo y por qué importa',
  description:
    'Ejercicios de equilibrio a una pierna: técnica, tiempos normales por edad, la versión con ojos cerrados, qué mide y errores comunes.',
  h1: 'Equilibrio a una pierna: cómo hacerlo, tiempos normales y la versión con ojos cerrados',
  lede:
    'Pararte en una pierna es una de las pruebas más simples del control del tobillo y del pie. También es un ejercicio. Cada segundo que mantienes la posición, los músculos pequeños del pie y del tobillo trabajan para mantenerte de pie. Un estudio de 2007 con 549\u00A0adultos sanos encontró que la capacidad de pararse en una pierna, con ojos abiertos y cerrados, baja de forma constante con la edad, y un metanálisis de 2018 encontró que el entrenamiento de equilibrio redujo el riesgo de esguince de tobillo un 46\u00A0% en deportistas.',
  takeaways: [
    'Los adultos sanos de 18 a 39\u00A0años aguantaron en promedio 43,3\u00A0segundos en una pierna con ojos abiertos y 9,4\u00A0segundos con ojos cerrados. De los 60 a los 69\u00A0años, el promedio con ojos abiertos fue de 26,9\u00A0segundos y con ojos cerrados bajó a 2,8\u00A0segundos (Springer y colegas, 2007).',
    'Un metanálisis con 3577\u00A0deportistas encontró que el entrenamiento de equilibrio redujo el riesgo de esguince de tobillo un 46\u00A0% frente a no hacer nada (Bellows y Wong, 2018).',
    'La meta de equilibrio de Walkito son 30\u00A0segundos en una pierna. La prueba se hace cada 14\u00A0días mientras la meta de equilibrio está activa.',
    'Cerrar los ojos quita la vista como ayuda para el equilibrio y obliga al pie y al tobillo a hacer más trabajo. La app incluye el equilibrio con ojos cerrados como el paso siguiente después de hacerlo con ojos abiertos.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Cómo hacer el equilibrio a una pierna?',
      paragraphs: [
        'Párate cerca de una pared o una barra de cocina. Levanta un pie del piso doblando un poco la rodilla. Mira un punto fijo al frente. Deja que el pie de apoyo se tambalee. Ese tambaleo es justo el ejercicio: los músculos pequeños del pie y del tobillo están trabajando para mantenerte de pie.',
        'Aguanta todo lo que puedas, hasta 30\u00A0segundos, y cambia de lado. Tres veces por lado es una dosis común. Si no aguantas más de unos segundos, deja las puntas de los dedos en la pared y ve subiendo poco a poco.',
      ],
      exercises: [
        {
          name: 'Equilibrio a una pierna',
          evidence: {
            level: 'moderate',
            why: 'El entrenamiento de equilibrio reduce el riesgo de esguince de tobillo (metanálisis de Bellows, 2018). Pararse en una pierna es una medida clínica estándar con valores normales publicados (Springer, 2007).',
          },
          dose: 'Walkito empieza con 3\u00A0series de 30\u00A0segundos, cada lado',
          how: 'Párate en un pie cerca de una pared. Mira un punto fijo. Deja que el tobillo se tambalee. Aguanta hasta 30\u00A0segundos.',
          often: 'Casi todas las sesiones',
          feel: 'El pie y el tobillo trabajando para quedarse quietos',
          stop: 'Dolor agudo en el pie o el tobillo, no solo tambaleo',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: deja que el pie se tambalee, ese es el ejercicio',
          alt: 'Una figura parada en una pierna cerca de una pared, con el pie y el tobillo resaltados',
        },
      ],
      cites: [CITE.springer, CITE.bellows],
    },
    {
      h2: '¿Cuánto tiempo deberías aguantar en una pierna?',
      paragraphs: [
        'Un estudio de 2007 midió a 549\u00A0adultos sanos de distintas edades. Los resultados son una referencia aproximada, no una línea de aprobado o reprobado.',
      ],
      table: {
        caption: 'Tiempo promedio en una pierna, con ojos abiertos y cerrados (Springer, 2007)',
        head: ['Edad', 'Ojos abiertos (segundos)', 'Ojos cerrados (segundos)'],
        rows: [
          ['18-39', '43,3', '9,4'],
          ['40-49', '40,3', '7,3'],
          ['50-59', '37,0', '4,8'],
          ['60-69', '26,9', '2,8'],
          ['70-79', '15,0', '2,0'],
          ['80-99', '6,2', '1,3'],
        ],
      },
      after: [
        'Los números bajan mucho al cerrar los ojos, sobre todo después de los 50. Por eso la versión con ojos cerrados es una prueba mucho más sensible del control del tobillo y del pie. También es la razón por la que la app de Walkito incluye la versión con ojos cerrados después de la de ojos abiertos.',
        'Más que igualar una tabla, importa si tu tiempo mejora con las semanas y si los dos lados están más o menos parejos. Una diferencia grande entre piernas puede indicar un déficit de fuerza o de estabilidad en un lado.',
      ],
      cites: [CITE.springer],
    },
    {
      h2: 'La versión con ojos cerrados',
      paragraphs: [
        'Cerrar los ojos quita la información visual que el cerebro normalmente usa para el equilibrio. Eso obliga a los propioceptores del pie y del tobillo, los sensores que detectan la posición y el movimiento, a hacer más trabajo. Es una versión más difícil del mismo ejercicio, no un ejercicio distinto.',
        'Párate cerca de una pared por seguridad. Cierra los ojos y aguanta todo lo que puedas. A la mayoría el tiempo le baja a una pequeña parte de lo que aguanta con ojos abiertos. Esa diferencia se acorta con la práctica.',
        'La app de Walkito incluye el equilibrio con ojos cerrados como un ejercicio aparte: 3\u00A0series de 20\u00A0segundos, los dos pies (alternando). Se abre como progresión cuando la meta de equilibrio con ojos abiertos ya está firme.',
      ],
    },
    {
      h2: '¿Por qué importa el equilibrio para el dolor de pies?',
      keyFact: 'En los esguinces de tobillo, un metanálisis de 8 estudios y 3577 deportistas encontró que el entrenamiento de equilibrio reduce el riesgo de esguince un 46 % frente a no intervenir (Bellows y colegas, 2018).',
      paragraphs: [
        'El equilibrio no está separado de la fuerza del pie. Cuando te paras en una pierna, los músculos intrínsecos del pie (los músculos pequeños dentro del pie que sostienen el arco), los músculos de la pantorrilla, el tibial anterior y los estabilizadores de la cadera trabajan juntos. Un déficit en cualquier punto de esa cadena hace que el pie compense.',
        'En la fascitis plantar y el pie plano, el entrenamiento de equilibrio aparece en los programas junto con estiramientos y fortalecimiento porque entrena toda la cadena a la vez. Un ensayo de 2023 con 52\u00A0personas con pie plano flexible encontró que un programa que combinaba ejercicios de pie corto, trabajo de tobillo, fortalecimiento de cadera, estiramientos y equilibrio cambió la forma del arco más que un grupo de control. El equilibrio no se probó por separado en ese ensayo, pero era parte del programa que funcionó.',
        'Para los esguinces de tobillo en concreto, un metanálisis de 2018 con 8\u00A0estudios y 3577\u00A0deportistas encontró que el entrenamiento de equilibrio redujo el riesgo de esguince de tobillo un 46\u00A0% frente a no hacer nada. Es el resultado individual más fuerte detrás de incluir el equilibrio en un programa para los pies.',
      ],
      cites: [CITE.bellows, CITE.brijwasi],
    },
    {
      h2: '¿Cuáles son los errores comunes en el equilibrio a una pierna?',
      paragraphs: [
        'Mirar al piso. Tus ojos deben estar en un punto fijo a la altura de la vista. Mirar hacia abajo lleva tu peso hacia adelante y hace el ejercicio más fácil, y así pierde su sentido.',
        'Bloquear la rodilla de apoyo. Una ligera flexión mantiene activos los músculos. Con la rodilla bloqueada, la carga pasa a la articulación en lugar de a los músculos que la rodean.',
        'Intentar no tambalearte. El tambaleo es el ejercicio. Las pequeñas correcciones que hace tu pie para mantenerte de pie son las que entrenan la propiocepción y el control del tobillo. Agarrarte al piso encogiendo los dedos o ponerte tenso para eliminar todo movimiento reduce el efecto del entrenamiento.',
        'Pararte demasiado lejos de la pared. Tienes que estar lo bastante cerca para sostenerte si pierdes el equilibrio, sobre todo en la versión con ojos cerrados. La seguridad va primero.',
      ],
    },
    {
      h2: 'Versiones más fáciles y más difíciles',
      paragraphs: [
        'Si no aguantas más de unos segundos en una pierna, deja las puntas de los dedos en una pared y ve subiendo. Incluso un toque ligero le da al cerebro más información para el equilibrio. Quita un dedo a la vez a medida que mejoras.',
        'Si 30\u00A0segundos sobre un piso duro se sienten fáciles, prueba pararte sobre una toalla doblada o una almohada. La superficie blanda hace que el tobillo trabaje más con cada tambaleo. La app incluye el equilibrio sobre almohada como una progresión más.',
        'La progresión más difícil es el equilibrio a una pierna con ojos cerrados sobre una superficie blanda. Quita la información visual y también el piso estable, así que el pie y el tobillo hacen casi todo el trabajo.',
        'Para ejercicios relacionados que fortalecen la cadena, mira las [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/), las [elevaciones de tibial anterior](/es/ejercicios/elevaciones-de-tibial-anterior/) y el [ejercicio de pie corto](/es/ejercicios/pie-corto/).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto tiempo deberías aguantar parado en una pierna?',
      cites: [CITE.springer],
      a: 'Un estudio de valores normales de 2007 con 549\u00A0adultos sanos encontró que las personas de 18 a 39\u00A0años aguantaban en promedio 43,3\u00A0segundos con ojos abiertos y 9,4\u00A0segundos con ojos cerrados. De los 60 a los 69\u00A0años, eran 26,9\u00A0segundos con ojos abiertos y 2,8 con ojos cerrados (Springer, 2007). La meta de equilibrio de Walkito son 30\u00A0segundos por lado.',
    },
    {
      q: '¿El equilibrio a una pierna ayuda con los esguinces de tobillo?',
      cites: [CITE.bellows],
      a: 'Un metanálisis de 2018 con 8\u00A0estudios y 3577\u00A0deportistas encontró que el entrenamiento de equilibrio redujo el riesgo de esguince de tobillo un 46\u00A0% frente a no hacer nada (Bellows y Wong, 2018). La mayoría de los programas estudiados incluían ejercicios de equilibrio como pararse en una pierna, junto con otro entrenamiento.',
    },
    {
      q: '¿Por qué cuesta más el equilibrio a una pierna con los ojos cerrados?',
      cites: [CITE.springer],
      a: 'Tu cerebro usa a la vez la vista, las señales del oído interno y la propiocepción (los sensores del pie y del tobillo) para el equilibrio. Al cerrar los ojos quitas una de las tres fuentes, y las otras dos tienen que cargar más. En los datos de Springer de 2007, los tiempos con ojos cerrados eran una pequeña parte de los tiempos con ojos abiertos en todas las edades.',
    },
    {
      q: '¿Cada cuánto hay que practicar el equilibrio a una pierna?',
      a: 'Practicarlo todos los días está bien porque la carga es baja. Walkito lo pone en la mayoría de los días de sesión. Incluso unos minutos de práctica al día pueden mejorar los tiempos con las semanas. La clave es la constancia, no la duración.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'pierdes el equilibrio seguido o tienes caídas que no se explican por el piso o el calzado',
      'un tobillo se te dobla una y otra vez, sobre todo después de un esguince anterior',
      'tienes entumecimiento, hormigueo o pérdida de sensibilidad en el pie o en la parte baja de la pierna',
      'sientes mareo o que todo da vueltas cuando cambias de posición',
      'notas un cambio repentino en tu equilibrio que no puedes explicar',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito incluye el equilibrio a una pierna y el equilibrio con ojos cerrados como parte de un plan, junto con elevaciones de talón, estiramientos y ejercicios de pie. La meta de equilibrio son 30\u00A0segundos en cada pierna. Cada 14\u00A0días, una prueba corta mide cuánto aguantas, y también se sigue la diferencia entre los dos lados.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cuando alcanzas la meta de equilibrio, la prueba pasa a hacerse cada 28\u00A0días y una nueva meta ocupa su lugar. Walkito es un programa de ejercicio. No diagnostica.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Equilibrio a una pierna',
  campaign: 'ex-single-leg-balance-es',
};
