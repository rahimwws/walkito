import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/high-arches.ts` (2026-10-07), written around the
 * Spanish queries «ejercicios pie cavo», «pie cavo ejercicios», «pie cavo
 * dolor». Figures, grades and qualifiers are identical to the English page.
 * No new citations.
 */

export const HIGH_ARCHES_ES: Guide = {
  lang: 'es',
  page: 'highArches',
  mainSource: CITE.burnsCavus,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicios pie cavo: qué ayuda con el dolor',
  description:
    'Ejercicios para pie cavo: estiramientos de pantorrilla y fascia plantar, estabilidad de tobillo, plantillas a medida y señales de alerta neurológicas.',
  h1: 'Ejercicios para pie cavo: qué ayuda y qué necesita un profesional',
  lede:
    'Un pie con arco alto, llamado pie cavo, es rígido y no se flexiona lo suficiente para absorber el impacto. La fuerza se concentra en el talón y la parte delantera del pie, y la fascia plantar suele estar tensa. Cerca del 60\u00A0por ciento de las personas con pie cavo reportan dolor de pie. La evidencia más fuerte es para las plantillas acolchadas o a medida. El ejercicio se enfoca en estirar la pantorrilla y la fascia plantar, mejorar la movilidad del tobillo y construir estabilidad.',
  intro: [
    'El pie cavo afecta a cerca de 1 de cada 10 personas (Burns y colegas, 2007). Muchas personas con arcos altos nunca tienen dolor de pie. Para quienes sí, el dolor suele estar bajo el talón, la parte delantera del pie o a lo largo de la fascia plantar tensa. La causa importa: la mayoría de los arcos altos son idiopáticos (sin causa conocida), pero un subgrupo se debe a condiciones neurológicas como la enfermedad de Charcot-Marie-Tooth. Un pie cavo progresivo o de un solo lado siempre necesita un profesional de la salud.',
  ],
  takeaways: [
    'En un ensayo con 154\u00A0adultos con pie cavo doloroso, las plantillas a medida mejoraron el dolor de pie 8,3\u00A0puntos más que una plantilla falsa a los tres meses, y la función 9,5\u00A0puntos más (Burns y colegas, 2006).',
    'El mismo ensayo encontró que las plantillas a medida redujeron la presión plantar un 26\u00A0por ciento, frente al 9\u00A0por ciento de la plantilla falsa.',
    'Cerca del 60\u00A0por ciento de las personas con pie cavo reportan dolor de pie, comúnmente bajo el talón, la parte delantera del pie o el arco (Burns y colegas, 2005).',
    'El pie cavo puede ser la primera señal de una condición neurológica como la enfermedad de Charcot-Marie-Tooth. Un arco alto progresivo o de un solo lado necesita una evaluación neurológica, no solo ejercicio.',
    'Ningún ensayo ha probado un programa de ejercicios diseñado específicamente para el dolor de pie por pie cavo. Los ejercicios de esta página se enfocan en las estructuras tensas y las articulaciones inestables comunes en los pies de arco alto.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es el pie cavo y por qué causa dolor?',
      figure: { id: 'arches', caption: 'Los mismos huesos del pie con pie plano, arco típico y arco alto, vistos desde el lado interior.', alt: 'Tres pies vistos desde el lado interior sobre un suelo plano: un pie plano con el arco apoyado en el suelo, un arco típico con un pequeño espacio debajo y un arco alto con un gran espacio bajo el centro del pie.' },
      paragraphs: [
        'El pie cavo es un pie con un arco longitudinal medial excesivamente alto. El arco se mantiene alto incluso cuando el pie está cargando peso. A diferencia de un pie plano, que colapsa bajo la carga y reparte el impacto sobre una superficie amplia, un pie de arco alto es rígido y concentra la fuerza en una superficie más pequeña: el talón y la parte delantera del pie.',
        'La fascia plantar en un pie cavo suele ser corta y tensa, lo que mantiene el arco en su posición alta pero reduce la capacidad del pie de flexionarse y absorber el impacto. La parte delantera del pie muchas veces queda más baja que la trasera (un primer metatarsiano plantarflexionado), y los dedos pueden engarrotarse. Estos cambios mueven la presión hacia las cabezas de los metatarsianos y el talón, y la alejan del mediopié.',
        'El dolor de pie en el pie cavo se presenta comúnmente como metatarsalgia (dolor bajo la parte delantera del pie), dolor de talón o dolor a lo largo de la fascia plantar tensa. Los esguinces de tobillo también son más frecuentes porque el pie rígido e invertido es menos estable sobre superficies irregulares.',
      ],
      cites: [CITE.burnsCavusCochrane, CITE.burnsCavusPain, CITE.burnsCavus],
    },
    {
      h2: '¿Qué causa los arcos altos?',
      paragraphs: [
        'La mayoría de los arcos altos son idiopáticos, es decir, no se encuentra una causa específica. Estos suelen ser bilaterales (los dos pies), estables con el tiempo y presentes desde la infancia.',
        'Un grupo más pequeño pero clínicamente importante se debe a condiciones neurológicas. La más común es la enfermedad de Charcot-Marie-Tooth (CMT), una neuropatía hereditaria motora y sensitiva que causa debilidad muscular progresiva y pérdida de masa, empezando en los pies y las piernas. El pie cavovaro en la CMT se desarrolla porque ciertos músculos se debilitan más rápido que otros, jalando el pie hacia una posición de arco alto e invertido.',
        'Otras causas neurológicas incluyen anomalías de la médula espinal, la poliomielitis, la espina bífida, la parálisis cerebral y otras neuropatías periféricas. El pie cavo también puede aparecer después de un evento vascular cerebral o una lesión de la médula espinal.',
        'La distinción importa para el ejercicio. El pie cavo idiopático suele ser estable: el pie tiene esa forma y se queda así. El pie cavo neurológico puede ser progresivo: el arco sube más, la debilidad empeora y el pie se vuelve menos estable con el tiempo. Los ejercicios pueden mantener la movilidad y la estabilidad en un pie cavo neurológico, pero no pueden revertir la condición de base, y un profesional de la salud debe estar involucrado.',
      ],
    },
    {
      h2: '¿Cuándo debe revisar un profesional de la salud los arcos altos?',
      paragraphs: [
        'No todo pie de arco alto necesita un estudio neurológico. Pero ciertos patrones sí deben evaluarse siempre.',
        'Un arco alto progresivo, es decir, que va subiendo con los meses o los años, es una señal de alerta de una causa neurológica. El pie cavo de un solo lado, donde un pie tiene un arco mucho más alto que el otro, es otra. Debilidad en el pie o la pierna, dificultad para levantar el pie al caminar (pie caído), dedos engarrotados que van empeorando, o antecedentes familiares de CMT u otra neuropatía son razones para consultar a un neurólogo o a un especialista del pie y tobillo.',
        'Si tus arcos altos son bilaterales, estables y así han sido desde la infancia, y no tienes debilidad ni cambios sensoriales, lo más probable es que sean idiopáticos. Los ejercicios de abajo y una conversación con un podólogo sobre plantillas son un punto de partida razonable.',
      ],
    },
    {
      h2: '¿Las plantillas ayudan con el dolor de pie cavo?',
      keyFact: 'Un ensayo aleatorizado con 154 adultos con dolor de pie por pie cavo encontró que las plantillas a medida superaron a una plantilla falsa por 8,3 puntos en dolor y 9,5 puntos en función a los tres meses (Burns y colegas, 2006).',
      paragraphs: [
        'Las plantillas a medida tienen la evidencia más fuerte para el dolor de pie por pie cavo. En el único ensayo aleatorizado, Burns y colegas asignaron a 154\u00A0adultos con dolor crónico de pie y pie cavo bilateral a plantillas de polipropileno hechas a medida o a una plantilla plana falsa. A los tres meses, el grupo de plantillas a medida reportó una mejoría de 8,3\u00A0puntos más en dolor de pie en el Foot Health Status Questionnaire que el grupo con plantilla falsa. La función mejoró 9,5\u00A0puntos más. La presión plantar bajó un 26\u00A0por ciento con las plantillas a medida, frente al 9\u00A0por ciento con la plantilla falsa.',
        'El ensayo incluyó personas con pie cavo tanto idiopático como neuromuscular (133\u00A0idiopáticos, 21\u00A0neuromusculares incluyendo 16\u00A0con enfermedad de Charcot-Marie-Tooth). Las plantillas tenían una forma moldeada al pie con una cubierta superior acolchada de largo completo.',
        'Las plantillas acolchadas de venta libre son un primer paso razonable antes de invertir en plantillas a medida, que son más caras. La característica clave que el ensayo encontró eficaz fue moldear la base al contorno exacto del pie, no solo agregar amortiguación plana.',
      ],
      sourceNote:
        'Burns 2006: 154 adultos, seguimiento a 3 meses, diferencia en dolor del Foot Health Status Questionnaire 8,3 puntos (IC 95\u00A0% 1,2-15,3, p=0,022), diferencia en función 9,5 puntos (IC 95\u00A0% 2,9-16,1, p=0,005).',
      cites: [CITE.burnsCavus],
    },
    {
      h2: '¿Qué ejercicios ayudan con el pie cavo?',
      keyFact: 'La guía de 2023 da una A al estiramiento de pantorrilla y fascia plantar y una B al entrenamiento de fuerza para el dolor de talón, el punto de dolor más común en el pie cavo (Koc y colegas, 2023).',
      paragraphs: [
        'Ningún ensayo ha probado un programa de ejercicios diseñado específicamente para el dolor de pie por pie cavo. Los ejercicios de abajo se enfocan en las estructuras que suelen estar tensas o inestables en un pie de arco alto: la pantorrilla, la fascia plantar, el tobillo y los músculos intrínsecos del pie. Están tomados de la evidencia para la fascitis plantar, la inestabilidad de tobillo y el acondicionamiento general del pie, y están etiquetados de acuerdo a eso.',
        'La guía de 2023 para el dolor de talón le da al estiramiento de la pantorrilla y de la fascia plantar una A y al entrenamiento de fuerza una B para el dolor de talón, que es uno de los puntos de dolor más comunes en el pie cavo. No existe una guía comparable específica para el pie cavo.',
        'Si algún ejercicio lleva tu dolor a **6/10 o más**, para por el día.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'moderate', why: 'Grado A de la guía para el dolor de talón. Una pantorrilla rígida es frecuente en el pie cavo y aumenta la carga sobre el talón.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared, pierna de atrás estirada, talón abajo, cadera hacia adelante. Un gastrocnemio rígido es común en el pie cavo y suma carga al arco rígido.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'moderate', why: 'Mismo mecanismo. Trabaja el músculo más profundo de la pantorrilla.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'La misma posición en la pared, después dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo solo se suelta con la rodilla doblada.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'moderate', why: 'Grado A de la guía para el dolor de talón. La fascia plantar suele estar tensa en el pie cavo.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          how: 'Siéntate y cruza el pie afectado sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. La fascia plantar en un pie de arco alto suele ser corta y tensa.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          stop: 'El dolor llega a 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás hasta sentir el arco',
          alt: 'Una figura jalando los dedos de un pie hacia atrás, con el arco resaltado',
        },
        {
          name: 'Movilidad de tobillo',
          evidence: { level: 'early', why: 'No hay ensayo específico para pie cavo. Trabaja la dorsiflexión del tobillo, que suele estar limitada en los pies de arco alto.' },
          dose: '2\u00A0series de 15, cada pierna',
          how: 'Párate frente a una pared con un pie adelante. Empuja la rodilla sobre los dedos mientras el talón se queda en el piso. Esto abre la dorsiflexión del tobillo, que muchas veces está restringida en un pie cavo.',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la parte delantera del tobillo',
          stop: 'El dolor llega a 6/10',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla viaja sobre los dedos, el talón se queda en el piso',
          alt: 'Una figura junto a una pared empujando la rodilla hacia adelante sobre los dedos',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: { level: 'early', why: 'No hay ensayo para pie cavo. Los esguinces de tobillo son más frecuentes en el pie cavo; el trabajo de equilibrio aborda la estabilidad del tobillo.' },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Párate en un pie y mira un punto fijo. Deja que el pie oscile. Los pies cavos son menos estables en superficies irregulares, y el trabajo de equilibrio entrena los músculos que corrigen esas oscilaciones. Párate cerca de una pared.',
          often: 'Días de equilibrio',
          feel: 'Correcciones pequeñas en el pie y el tobillo',
          stop: 'El dolor llega a 6/10',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: deja que el pie haga las correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con el tobillo resaltado',
        },
        {
          name: 'Masaje plantar con pelota',
          evidence: { level: 'early', why: 'No se ha probado para pie cavo. Es una medida de confort para la fascia plantar tensa.' },
          dose: '2\u00A0minutos, cada pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje. Presión firme, no suficiente como para hacerte encogerte. Es una medida de confort para la fascia tensa, no un ejercicio correctivo.',
          often: 'Días de recuperación',
          feel: 'Presión firme bajo el pie',
          stop: 'El dolor llega a 6/10',
          media: 'foot_roll',
          caption: 'Masaje plantar con pelota: despacio y firme, alivia cualquier punto agudo',
          alt: 'Una figura sentada rodando la planta de un pie sobre una pelota',
        },
      ],
      cites: [CITE.guideline, CITE.burnsCavus],
    },
    {
      h2: '¿Qué calzado conviene para el pie cavo?',
      paragraphs: [
        'El calzado para pie cavo debe amortiguar en vez de controlar. A diferencia del pie plano, donde un poste medial firme evita el colapso, un pie de arco alto necesita lo opuesto: un zapato que absorba el impacto porque el pie por sí solo no lo hace.',
        'Busca una suela acolchada, una puntera amplia (los dedos engarrotados necesitan espacio) y nada de soporte de arco agresivo. Una almohadilla de arco rígida hecha para un pie normal empuja contra un arco cavo en el lugar equivocado. Los tenis neutros con buena amortiguación en el talón y la parte delantera son una recomendación frecuente.',
        'Si los zapatos y las plantillas de venta libre no alcanzan, un podólogo puede evaluar si las plantillas a medida valen la inversión. El ensayo de Burns de 2006 encontró que lo que hace funcionar a una plantilla para pie cavo es una base moldeada al contorno del pie con una cubierta acolchada, no un dispositivo rígido de corrección.',
      ],
      cites: [CITE.burnsCavus],
    },
    {
      h2: '¿Walkito ayuda con el pie cavo?',
      paragraphs: [
        'Walkito está construido en torno al dolor de talón y el dolor de arco en adultos. Incluye estiramiento de pantorrilla, estiramiento de fascia plantar, masaje plantar con pelota y trabajo de estabilidad de tobillo, todo relevante para un pie cavo. Cuando señalas el arco en el mapa corporal de la app, la sesión de alivio ofrece el ejercicio de pie corto, el estiramiento de la fascia plantar y el masaje plantar con pelota.',
        'Lo que la app no tiene es una meta específica de pie cavo ni un programa para pie cavo. Los ejercicios que aparecen son los mismos que se prescriben para la fascitis plantar y el pie plano. Para alguien con arcos altos y dolor de talón, esos ejercicios coinciden con lo que esta página recomienda. Para alguien cuyo dolor por pie cavo está principalmente bajo la parte delantera del pie, o que tiene una causa neurológica, la app no es una buena opción y un profesional de la salud debe dirigir el plan de ejercicios.',
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué ejercicios ayudan con el pie cavo?',
      cites: [CITE.guideline],
      a: 'Ningún ensayo ha probado ejercicios específicamente para el pie cavo. Los ejercicios con la mejor evidencia para los patrones de dolor comunes en los arcos altos son el estiramiento de pantorrilla y el de fascia plantar, los dos con grado A en la guía de 2023 para el dolor de talón. El trabajo de estabilidad de tobillo y el masaje plantar con pelota abordan la inestabilidad y la tensión de la fascia comunes en el pie cavo.',
    },
    {
      q: '¿Las plantillas ayudan con el dolor de pie cavo?',
      cites: [CITE.burnsCavus],
      a: 'En un ensayo con 154\u00A0adultos con pie cavo doloroso, las plantillas a medida mejoraron el dolor de pie 8,3\u00A0puntos y la función 9,5\u00A0puntos más que una plantilla falsa a los tres meses (Burns, 2006). La presión plantar bajó un 26\u00A0por ciento con las plantillas a medida. Es la evidencia más fuerte para cualquier intervención individual para el dolor de pie por pie cavo.',
    },
    {
      q: '¿Se pueden corregir los arcos altos con ejercicio?',
      a: 'El ejercicio no puede cambiar la forma ósea de un pie cavo. Lo que sí puede hacer es estirar las estructuras tensas (pantorrilla, fascia plantar), mejorar la movilidad del tobillo y construir estabilidad para reducir los esguinces de tobillo y el dolor. El arco seguirá alto. La meta es reducir el dolor y mejorar la función, no aplanar el arco.',
    },
    {
      q: '¿Los arcos altos son señal de un problema neurológico?',
      a: 'Pueden serlo. La mayoría de los arcos altos son idiopáticos y estables. Pero un pie cavo progresivo o de un solo lado puede ser la primera señal de la enfermedad de Charcot-Marie-Tooth u otra condición neurológica. Si tus arcos están subiendo, si un pie está más afectado que el otro, o si tienes debilidad o cambios sensoriales en los pies, consulta a un neurólogo.',
    },
    {
      q: '¿Qué zapatos son mejores para los arcos altos?',
      cites: [CITE.burnsCavus],
      a: 'Zapatos acolchados con una puntera amplia y sin soporte de arco agresivo. Un arco alto no colapsa, así que no necesita control de movimiento. Necesita amortiguación para absorber el impacto que el arco rígido no absorbe. Los tenis neutros con buena amortiguación en el talón y la parte delantera son un punto de partida frecuente. Las plantillas a medida con una base moldeada al pie y cubierta acolchada tienen la mejor evidencia de ensayo.',
    },
    {
      q: '¿Pie cavo es lo mismo que arcos altos?',
      a: 'Sí. Pie cavo es el término médico para un pie con un arco excesivamente alto. Describe una forma del pie, no una enfermedad. Cerca de 1 de cada 10 personas tiene pie cavo, y muchos nunca tienen dolor de pie. Cuando el dolor se desarrolla, suele estar bajo el talón, la parte delantera del pie o a lo largo de la fascia plantar tensa.',
      cites: [CITE.burnsCavusCochrane],
    },
    {
      q: '¿El pie cavo puede causar fascitis plantar?',
      cites: [CITE.guideline],
      a: 'Los arcos altos se mencionan como factor de riesgo de la fascitis plantar. El pie rígido pone más tensión en la fascia plantar con cada paso, y la fascia ya suele estar tensa de por sí. Si tu pie de arco alto tiene dolor bajo el talón que es peor en la mañana, ese patrón es compatible con fascitis plantar y los ejercicios de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) aplican.',
    },
    {
      q: '¿Cómo saber si tengo el arco muy alto?',
      a: 'Prueba la huella mojada: humedece la planta descalza y pisa sobre una superficie plana y seca. Un arco alto deja poca o ninguna huella en el borde externo, a veces solo el talón y la parte delantera del pie, mientras que un pie plano deja casi toda la planta marcada. Una diferencia grande entre tus dos pies vale la pena mencionarla a un profesional de la salud.',
    },
    {
      q: '¿Es mejor tener pie plano o arcos altos?',
      cites: [CITE.burnsCavusPain],
      a: 'Ninguno es claramente mejor. Un pie plano reparte la carga en un área más amplia, pero puede sobreestirar la fascia plantar y el tendón tibial posterior. Un arco alto es rígido y concentra la fuerza en el talón y la parte delantera del pie. Cerca del 60 por ciento de las personas con pie cavo reportan dolor de pie, así que la forma del pie sola no predice cómo se sentirán tus pies.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'tus arcos están subiendo con el tiempo, lo que puede señalar una causa neurológica',
      'un pie tiene un arco mucho más alto que el otro',
      'tienes debilidad en el pie o la pierna, o dificultad para levantar la parte delantera del pie',
      'hay entumecimiento, hormigueo o ardor en los pies',
      'los dedos se engarrotan más de lo que solían',
      'los esguinces de tobillo son frecuentes y van empeorando',
      'hay antecedentes familiares de enfermedad de Charcot-Marie-Tooth u otra neuropatía',
      'el dolor de pie no mejora después de varias semanas de estiramiento, mejor calzado y plantillas acolchadas',
      'tienes dolor en un punto muy específico que empeora con la actividad, lo que puede ser una fractura por estrés o una sesamoiditis en vez de un patrón general de pie cavo',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito incluye estiramiento de pantorrilla, estiramiento de fascia plantar, trabajo de estabilidad de tobillo y masaje plantar con pelota, todo relevante para los arcos altos. Cuando señalas el arco en el mapa corporal, la app ofrece ejercicios para esa zona. Pero la app no tiene una meta ni un programa específico para pie cavo. Si tus arcos altos causan dolor de talón, las metas de dolor de talón de la app pueden encajar. Si tu dolor está principalmente bajo la parte delantera del pie o se relaciona con una condición neurológica, un profesional de la salud debe dirigir tu plan de ejercicios.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
  },
  crumb: 'Ejercicios para pie cavo',
  campaign: 'guide-high-arches-es',
};
