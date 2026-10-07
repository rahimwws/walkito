import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/ex-foot-roll.ts`, written around the query
 * «masaje plantar con pelota». Figures, doses and qualifiers are identical to
 * the English page. Uses existing key: CITE.guideline
 *
 * Note: no RCT has tested foot rolling (ball or frozen bottle) as an isolated
 * intervention for plantar fasciitis. Evidence level is 'early'. The page says
 * this honestly.
 */

export const EX_FOOT_ROLL_ES: Guide = {
  lang: 'es',
  page: 'exFootRoll',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Masaje plantar con pelota para fascitis plantar',
  description:
    'Cómo hacer el masaje plantar con pelota o botella congelada para la fascitis plantar: técnica, cuánto tiempo rodar y qué hace y qué no hace.',
  h1: 'Masaje plantar con pelota para la fascitis plantar: pelota, botella y técnica',
  lede:
    'Rodar la planta del pie sobre una pelota o una botella es uno de los cuidados en casa más comunes para la fascitis plantar. Se siente bien, y los profesionales de la salud lo recomiendan para calmar el tejido entre sesiones. Pero ningún ensayo aleatorizado ha probado el masaje con pelota por sí solo en la fascitis plantar. Aquí tienes lo que hace, lo que no hace y dónde encaja, siendo honestos, la botella congelada.',
  takeaways: [
    'Ningún ensayo aleatorizado ha probado el masaje plantar con pelota como intervención aislada para la fascitis plantar. Se recomienda mucho como medida de alivio y recuperación, no como intervención principal.',
    'La guía de 2023 para el dolor de talón recomienda los estiramientos (grado A) y el entrenamiento de fuerza (grado B) como la base del ejercicio. El masaje con pelota no tiene un grado propio.',
    'Una botella de agua congelada suma frío al masaje. El frío puede bajar la molestia después de una crisis, pero ningún ensayo muestra que acelere la recuperación de la fascitis plantar más allá de lo que hace rodar el pie.',
    'Walkito usa el automasaje plantar como ejercicio de recuperación al final de una sesión, durante 2\u00A0minutos.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Cómo se hace el masaje plantar con pelota?',
      paragraphs: [
        'Siéntate en una silla con un pie sobre una pelota. Sirve una pelota de tenis, una de lacrosse o una de masaje. Pon la pelota bajo el arco y ruédala despacio desde la parte delantera del pie hacia el talón y de vuelta. Usa presión firme, no ligera. La pelota debe hundirse en el tejido lo suficiente para que sientas una presión profunda y sostenida.',
        'Rueda unos 2\u00A0minutos por pie. Mantén la presión constante y evita los puntos que se sientan agudos. Si un punto te hace hacer muecas de dolor, afloja o sáltalo. La meta es un masaje firme, no dolor.',
      ],
      exercises: [
        {
          name: 'Automasaje plantar',
          evidence: {
            level: 'early',
            why: 'Se recomienda mucho, pero no se ha probado como intervención aislada en un ensayo sobre fascitis plantar.',
          },
          dose: 'Walkito empieza con 2\u00A0minutos',
          how: 'Siéntate con una pelota bajo el arco. Ruédala despacio desde la parte delantera del pie hasta el talón, con presión firme. Si haces muecas de dolor, afloja.',
          often: 'Días de recuperación, o después de cualquier sesión para bajar el ritmo',
          feel: 'Presión firme y sostenida bajo el pie',
          stop: 'El dolor llega a 6/10',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
    },
    {
      h2: '¿Rodar una pelota bajo el pie ayuda con la fascitis plantar?',
      paragraphs: [
        'Fisioterapeutas y podólogos recomiendan mucho rodar el pie como parte del cuidado de la fascitis plantar. La idea es que funciona como un automasaje: presiona a lo largo de la fascia, puede aumentar el flujo de sangre en la zona y puede bajar la sensación de tensión. Es común que las personas sientan alivio por un rato después de rodar el pie.',
        'Aun así, ningún ensayo aleatorizado ha probado el masaje con pelota como intervención única para la fascitis plantar. Aparece en protocolos junto con estiramientos y fortalecimiento, pero nunca es lo que se mide. La guía de 2023 no le da un grado propio. La evidencia está en los estiramientos y el entrenamiento de fuerza.',
        'El masaje con pelota entra en la categoría de recuperación. Sirve después de un día largo de pie, después de una sesión de elevaciones de talón, o cuando sientas la planta tensa y adolorida. No reemplaza el [estiramiento de la fascia plantar](/es/ejercicios/estiramiento-fascia-plantar/), el [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) ni las [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/), que son los que tienen grados en la guía.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Conviene usar una botella de agua congelada?',
      paragraphs: [
        'La botella de agua congelada es uno de los remedios caseros más populares para la fascitis plantar. Su forma te deja rodar toda la planta, y el frío adormece la zona al mismo tiempo. Los profesionales de la salud la recomiendan seguido, y sí se siente bien.',
        'Esto es lo que dice de verdad la evidencia. El frío (hielo, botellas congeladas) es una herramienta general para manejar el dolor. Baja la molestia porque adormece las terminaciones nerviosas y puede bajar la hinchazón por un rato. Pero ningún ensayo aleatorizado ha comparado una botella congelada con una a temperatura ambiente en la fascitis plantar. El alivio que sientes probablemente es una mezcla del masaje (presión sobre la fascia) y del adormecimiento (frío sobre las terminaciones nerviosas). Si el frío acelera la recuperación más allá de lo que hace rodar el pie es una pregunta abierta.',
        'Si una botella congelada te alivia, úsala. Solo no cuentes con el frío como reemplazo de los estiramientos y el trabajo de fuerza. Y no pongas hielo más de 15 a 20\u00A0minutos seguidos. El frío prolongado puede irritar la piel.',
      ],
    },
    {
      h2: '¿Qué pelota usar?',
      paragraphs: [
        'La pelota de tenis es el punto de partida más común. Es lo bastante blanda para hundirse en el arco sin sentirse aguda. Una pelota de lacrosse es más dura y da más presión. Una pelota de golf es pequeña y muy dura, y puede ser demasiado para un talón adolorido.',
        'Empieza con la que tengas. Si después de unas sesiones la pelota de tenis se siente demasiado blanda, prueba una de lacrosse. Si haces muecas de dolor con cualquier pelota, es demasiado dura o estás presionando demasiado. El ejercicio debe sentirse como un masaje profundo, nunca como si apretaras con fuerza sobre una lesión.',
        'Una botella de agua congelada sirve en lugar de una pelota y suma frío. Un rodillo de espuma bajo el pie es todavía más suave. Un rodillo especial para pies de una tienda de deportes hace lo mismo. No está demostrado que ninguno funcione mejor que los otros.',
      ],
    },
    {
      h2: 'Errores comunes en el masaje plantar',
      paragraphs: [
        'Presionar demasiado. Más fuerte no es mejor. Si empujas hasta que el dolor llega a 6/10 o haces muecas, puedes estar irritando la fascia en lugar de calmarla. Vuelve a una presión firme y constante.',
        'Rodar demasiado rápido. Ir y venir rápido pasa por encima del tejido. Rueda despacio, más o menos una pasada completa por segundo, para que cada punto reciba presión sostenida.',
        'Usarlo como único ejercicio. Rodar el pie se siente productivo, y es fácil hacerlo en el escritorio. Pero no fortalece la pantorrilla ni estira la fascia como los ejercicios que tienen grado en la guía. Combínalo con el [estiramiento de la fascia plantar](/es/ejercicios/estiramiento-fascia-plantar/) y las [elevaciones de talón](/es/elevaciones-de-talon-fascitis-plantar/) para cubrirlo todo.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cuándo hacerlo y cuándo no',
      paragraphs: [
        'Rueda el pie después de un día largo de pie, después de una sesión de elevaciones de talón, o cuando sientas la planta tensa. En Walkito, el automasaje plantar aparece en los días de recuperación y al final de las sesiones para bajar el ritmo.',
        'No lo hagas si el talón está muy hinchado, rojo o caliente. Esas señales pueden apuntar a algo distinto de la fascitis plantar, y presionar una zona inflamada puede empeorarla. Consulta primero a un profesional de la salud. Para todos los ejercicios que recomienda la guía, mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) o [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Rodar una botella de agua congelada bajo el pie ayuda con la fascitis plantar?',
      a: 'Una botella de agua congelada combina el masaje (presión sobre la fascia) y el frío (adormece las terminaciones nerviosas). Los dos pueden bajar la molestia a corto plazo. Ningún ensayo ha comparado una botella congelada con una a temperatura ambiente en la fascitis plantar, así que no se sabe si el frío suma algo a la recuperación más allá del masaje. Es seguro probarlo y a mucha gente la alivia.',
    },
    {
      q: '¿Cuánto tiempo hay que hacer el masaje plantar con pelota?',
      a: 'Unos 2\u00A0minutos por pie es una dosis razonable para empezar. Es lo que usa Walkito. Puedes repetirlo unas cuantas veces al día si te alivia. No hay una dosis de investigación concreta, porque el masaje con pelota no se ha probado como intervención única.',
    },
    {
      q: '¿Qué es mejor para la fascitis plantar, una pelota de tenis o una de lacrosse?',
      a: 'Empieza con una pelota de tenis. Es más blanda y es menos probable que cause dolor agudo en un talón adolorido. Una pelota de lacrosse da una presión más firme y puede sentirse mejor cuando el dolor fuerte ya bajó. Ninguna ha demostrado ser mejor. Usa la que te dé presión firme sin hacerte hacer muecas de dolor.',
    },
    {
      q: '¿Rodar el pie puede empeorar la fascitis plantar?',
      a: 'Sí, si presionas demasiado. Frotar con fuerza sobre una fascia adolorida puede aumentar la inflamación en lugar de calmarla. La presión debe sentirse como un masaje profundo, firme pero no aguda. Si el dolor llega a 6/10 o la planta está más adolorida a la mañana siguiente, baja la presión.',
    },
    {
      q: '¿El masaje plantar con pelota reemplaza a los estiramientos?',
      cites: [CITE.guideline],
      a: 'No. La guía de 2023 le da a los estiramientos una A y al entrenamiento de fuerza una B. El masaje con pelota no tiene grado. Funciona como un paso de recuperación junto con los ejercicios que tienen la evidencia, como el estiramiento de la fascia plantar y las elevaciones de talón. Rodar el pie por sí solo no te va a dar el mismo beneficio.',
    },
  ],
  redFlags: {
    h2: 'Detente y consulta a un profesional de la salud si',
    bullets: [
      'la planta está muy hinchada, roja o caliente',
      'rodar el pie te empeora el dolor a la mañana siguiente una y otra vez',
      'el dolor es agudo y está en un solo punto que empeora al presionarlo',
      'sientes entumecimiento, hormigueo o ardor bajo el pie',
      'el dolor empezó después de una lesión, una caída o un chasquido repentino en el arco',
      'no ha mejorado después de varias semanas, aun con el programa completo de ejercicios',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito pone el automasaje plantar al final de las sesiones y en los días de recuperación. La app se encarga del momento y del orden, para que no tengas que acordarte de qué días toca rodar el pie y cuáles estirar o hacer fuerza.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Masaje plantar con pelota',
  campaign: 'ex-foot-roll-es',
};
