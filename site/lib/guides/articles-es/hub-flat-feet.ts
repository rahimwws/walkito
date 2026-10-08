import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Hub: Pie plano. Spanish translation of `articles/hub-flat-feet.ts`
 * (2026-10-07), written around «pie plano», «pie plano en adultos»,
 * «arcos caídos». Figures, grades and qualifiers are identical to English.
 */

export const HUB_FLAT_FEET_ES: Guide = {
  lang: 'es',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Pie plano: causas, tipos y cuándo prestarle atención',
  description:
    'Qué es el pie plano, flexible o rígido, si causa problemas, pie plano adquirido del adulto, arcos caídos, ejercicios y cuándo ver a un profesional.',
  h1: 'Pie plano: qué es, qué lo causa y cuándo prestarle atención',
  lede:
    'Tener pie plano significa que el arco del pie queda más bajo de lo normal o toca el piso cuando te paras. La mayoría de los pies planos son flexibles, es decir, el arco aparece cuando el pie no toca el piso, y la mayoría no causan ningún dolor. Unos pocos son rígidos o aparecen en la edad adulta porque un tendón se debilita, y esos son los casos a los que vale la pena prestar más atención.',
  takeaways: [
    'Una revisión sistemática de 2023 con 12\u00A0estudios de población calculó que alrededor del 15,6\u00A0% de las personas tiene pie plano, aunque la cifra cambia mucho según la edad, el método de medición y la población (Salinas-Torres y colegas, 2023).',
    'La mayoría de los pies planos son flexibles y de toda la vida. Un pie plano rígido, que sigue plano incluso cuando levantas el pie, es estructural y no va a cambiar con ejercicio.',
    'El Framingham Foot Study, con unos 1900\u00A0adultos, no encontró relación entre el pie plano y el dolor de espalda baja. En mujeres encontró una relación pequeña entre un pie que se va hacia adentro al caminar y el dolor de espalda, y en hombres ninguna (Menz y colegas, 2013).',
    'El pie plano adquirido del adulto, causado casi siempre por un tendón tibial posterior que se debilita, puede traer dolor e hinchazón en la parte interna del tobillo y un arco que se hunde poco a poco (Ling y Lui, 2017).',
    'En un ensayo con 52\u00A0personas con pie plano flexible, seis semanas de ejercicios combinados cambiaron la forma del arco más que en un grupo de control. El ensayo midió la forma del arco, no el dolor (Brijwasi y Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es el pie plano?',
      figure: { id: 'arches', caption: 'Los mismos huesos del pie con pie plano, arco típico y arco alto, vistos desde el lado interior.', alt: 'Tres pies vistos desde el lado interior sobre un suelo plano: un pie plano con el arco apoyado en el suelo, un arco típico con un pequeño espacio debajo y un arco alto con un gran espacio bajo el centro del pie.' },
      keyFact: 'Una revisión sistemática de 2023 con 12 estudios de población y unas 16\u00A0000 personas encontró una frecuencia general del 15,6\u00A0%, más alta con un IMC mayor y una edad mayor (Salinas-Torres y colegas, 2023).',
      paragraphs: [
        'El arco del pie, llamado arco longitudinal medial, lo forman los huesos, ligamentos y tendones de la parte interna del pie. En un pie plano, este arco queda bajo o desaparece cuando te paras. El término médico es pes planus.',
        'El pie plano es común. Una revisión sistemática de 2023 juntó 12\u00A0estudios de población con unas 16\u00A0000\u00A0personas y encontró una frecuencia general del 15,6\u00A0%. Solo en adultos, las cifras van de alrededor del 5 al 27\u00A0%, según la población y el método de medición. Un IMC más alto y una edad mayor se asocian con más casos.',
        '«Arcos caídos» es un nombre común para el pie plano. Casi siempre las dos frases significan lo mismo. A veces «arcos caídos» se usa para un arco que bajó en la edad adulta, que tiene otra causa y se explica más abajo.',
        'Tener pie plano no significa que algo esté mal. Mucha gente con arcos bajos camina, corre y pasa horas de pie sin ningún síntoma. Las preguntas que importan son si el pie plano es flexible o rígido, y si te causa dolor.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: '¿Cómo saber si el pie plano es flexible o rígido?',
      keyFact: 'En un ensayo con 52 personas con pie plano flexible, seis semanas de pie corto, ejercicios de tobillo, fortalecimiento de cadera y estiramientos mejoraron dos medidas de la forma del arco más que en un grupo de control (Brijwasi y Borkar, 2023).',
      paragraphs: [
        'Un pie plano flexible es el que se aplana con tu peso pero recupera el arco cuando el pie no toca el piso. La mayoría de los pies planos son de este tipo. Un pie plano rígido sigue plano estés parado sobre él o no.',
        'Una prueba rápida: siéntate y mira la parte interna del pie. Si ves un arco, párate sobre los dos pies. Si el arco desaparece al pararte pero estaba ahí sentado, el pie plano es flexible. Otra forma: sube en puntas. Si el arco aparece al subir, es flexible.',
        'La diferencia importa porque el ejercicio puede influir en un arco flexible. En un ensayo con 52\u00A0personas con pie plano flexible, seis semanas de ejercicios de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos cambiaron dos medidas de la forma del arco más que en un grupo de control. Un pie plano rígido es estructural (muchas veces por una coalición tarsiana, un puente de hueso entre dos huesos del pie) y el ejercicio no va a cambiar su forma. Un pie plano rígido que duele por lo general necesita que lo revise un profesional de la salud.',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: '¿El pie plano es realmente un problema?',
      keyFact: 'El Framingham Foot Study, con unos 1900 adultos, no encontró relación entre el pie plano y el dolor de espalda, aunque una marcha en pronación mostró una relación pequeña solo en mujeres (Menz y colegas, 2013).',
      paragraphs: [
        'Para la mayoría de las personas, no. Un pie plano flexible que no duele y no te limita es una variación normal en la forma del pie, no algo que haya que arreglar.',
        'La duda más común es el dolor de espalda. El estudio más grande sobre el tema, el Framingham Foot Study, analizó a unos 1900\u00A0adultos. No encontró relación entre el pie plano y el dolor de espalda baja. En mujeres, un pie que se iba hacia adentro al caminar (marcha en pronación) mostró una relación pequeña con el dolor de espalda, pero la forma del pie en sí, plano o no, no. En hombres, ni la forma del pie ni la marcha se relacionaron con el dolor de espalda.',
        'El pie plano puede cambiar cómo viaja la carga por la pierna. Algunos corredores con pies muy pronados desarrollan lesiones por sobrecarga en el tobillo o la rodilla, pero la relación entre la forma del pie y las lesiones es más débil de lo que mucha gente cree. Una revisión de 2024 sobre el entrenamiento de pie corto en pie plano no encontró un cambio claro en la postura del pie en general, y solo un cambio en una medida de cuánto baja el arco en programas de más de seis semanas. El ensayo y la revisión midieron la forma del arco, no el dolor ni las lesiones.',
        'Los casos en los que el pie plano sí importa se explican abajo: el pie plano adquirido del adulto por un tendón que se debilita, y el pie plano que viene con dolor, hinchazón o un cambio repentino en la altura del arco.',
      ],
      cites: [CITE.menz, CITE.cheng],
    },
    {
      h2: '¿Qué es el pie plano adquirido del adulto?',
      paragraphs: [
        'El pie plano adquirido del adulto es cuando un arco que era normal se hunde en la edad adulta, casi siempre porque el tendón tibial posterior (el tendón que sostiene el arco desde la parte interna del tobillo) se debilita y ya no puede hacer su trabajo. El nombre clínico del problema del tendón es disfunción del tendón tibial posterior.',
        'El tendón tibial posterior pasa por detrás del hueso interno del tobillo y se une a los huesos que forman el arco. Cuando se estira o se rompe, el arco baja, el talón se inclina hacia afuera y la parte delantera del pie puede empezar a apuntar hacia afuera. El dolor y la hinchazón en la parte interna del tobillo son señales tempranas comunes. La prueba de elevación de talón a una pierna, en la que intentas pararte en un pie y subir en puntas, puede costar o doler del lado afectado.',
        'Una revisión en The Open Orthopaedics Journal describe cuatro etapas: en la etapa I hay inflamación del tendón pero no hay deformidad visible, en la etapa II hay un pie plano flexible que todavía se puede corregir con la mano, en la etapa III la deformidad es rígida y no se corrige con la mano, y en la etapa IV además hay cambios en la articulación del tobillo.',
        'Una revisión sistemática sobre el ejercicio para la disfunción del tendón tibial posterior encontró poca evidencia de ensayos aleatorizados. La revisión señaló que las guías clínicas recomiendan un manejo sin cirugía, con ejercicio, plantillas ortopédicas y cambios en la actividad, para las primeras etapas (I y II), pero hay pocos ensayos de alta calidad. Las etapas avanzadas muchas veces necesitan la evaluación de un profesional de la salud y pueden requerir una férula o cirugía.',
        'Si un arco se te bajó de adulto, con dolor o hinchazón en la parte interna del tobillo, consulta a un profesional de la salud antes de empezar un programa de ejercicio. No es lo mismo que un pie plano flexible de toda la vida.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué síntomas indican que el pie plano necesita atención?',
      paragraphs: [
        'La mayoría de los pies planos no dan síntomas y no necesitan estudios médicos. Un pie plano flexible que tienes desde niño y que no duele es una variación normal en la forma del pie. Estas son las situaciones que vale la pena revisar con un profesional de la salud:',
      ],
      bullets: [
        'Dolor en la parte interna del tobillo o bajo el arco que no se calma con reposo.',
        'Hinchazón en la parte interna del tobillo, sobre todo si apareció hace poco.',
        'Un arco que se aplanó en la edad adulta mientras el otro no.',
        'Dificultad para pararte en un pie y subir en puntas del lado afectado.',
        'Dolor en la rodilla, la tibia o la cadera que sospechas que tiene que ver con cómo apoya el pie.',
        'Un pie plano rígido (el arco sigue plano incluso cuando el pie no toca el piso).',
        'Entumecimiento, hormigueo o sensación de inestabilidad en el tobillo.',
      ],
    },
    {
      h2: '¿Los zapatos y las plantillas ayudan con el pie plano?',
      paragraphs: [
        'Un zapato con buen soporte, con una suela intermedia firme y algo de soporte para el arco, puede hacer más cómodo estar de pie y caminar si tienes pie plano. No cambia el arco con el tiempo, pero reduce el trabajo que tienen que hacer los músculos del arco durante el día.',
        'Las plantillas para el arco que venden en tiendas son fáciles de conseguir y baratas. Las plantillas ortopédicas a medida, hechas con un molde de tu pie, cuestan más y a veces se recomiendan para la disfunción del tendón tibial posterior. La evidencia sobre plantillas para el pie plano en sí es más escasa de lo que mucha gente cree. Para la fascitis plantar, la guía clínica de 2023 para el dolor de talón recomienda no usar plantillas solas como enfoque a corto plazo (una B en contra), pero le da una C a un tratamiento combinado que incluye plantillas.',
        'Si tu pie plano no duele, no necesitas zapatos especiales. Si estar de pie o caminar te hace doler el arco o el tobillo, un zapato con suela firme y un soporte de arco suave es un primer paso razonable, y vale la pena probarlo antes de gastar más en plantillas a medida. Los zapatos con suela muy plana y sin soporte (sandalias delgadas, tenis gastados) suelen empeorar el cansancio del arco en los días largos.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué ejercicios ayudan con el pie plano?',
      paragraphs: [
        'Los ejercicios para el pie plano se enfocan en los músculos que sostienen el arco desde abajo (los músculos intrínsecos del pie) y en los músculos más arriba que controlan cómo apoya el pie (la pantorrilla, la cadera). La mejor evidencia hasta ahora viene de un ensayo con 52\u00A0personas con pie plano flexible, en el que seis semanas de ejercicios combinados cambiaron la forma del arco más que en un grupo de control. Ese ensayo incluyó pie corto, ejercicios de tobillo, fortalecimiento de cadera y estiramientos, hechos juntos.',
        'Una revisión de 2024 sobre el pie corto por sí solo fue menos alentadora: no encontró un cambio claro en general, y solo una mejora en una medida del arco en programas de más de seis semanas. Esto sugiere que un programa combinado podría funcionar mejor que un solo ejercicio, y que la paciencia importa.',
        'En [ejercicios para pie plano](/es/ejercicios-pie-plano/) está la lista completa, con dosis, qué debes sentir en cada uno y la evidencia detrás. Walkito arma un plan semanal en torno a una meta de mantener el arco: empieza con pie corto sentado, pasa a las versiones de pie y a una pierna, y después suma la banda elástica y el fortalecimiento de cadera. Cada ejercicio tiene su propia página:',
      ],
      bullets: [
        'El [ejercicio de pie corto](/es/ejercicios/pie-corto/) enseña al arco a subir sin encoger los dedos.',
        '[Recoger la toalla con los dedos](/es/ejercicios/recoger-toalla-con-los-dedos/) despierta los músculos pequeños bajo el arco.',
        '[Separar los dedos del pie](/es/ejercicios/separar-los-dedos-del-pie/) trabaja los músculos entre los dedos que comparten la carga con el arco.',
        'La [inversión de tobillo con banda](/es/ejercicios/inversion-de-tobillo-con-banda/) fortalece el músculo tibial posterior, el mismo que participa en el pie plano adquirido del adulto.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Problemas relacionados',
      paragraphs: [
        'El pie plano puede coincidir con otros problemas del pie, sobre todo si pasas mucho tiempo de pie o caminando. Si el dolor está cerca del talón y sigue el patrón de la mañana (agudo en los primeros pasos, y se calma después de unos minutos), encaja más con la fascitis plantar. Mira [fascitis plantar](/es/fascitis-plantar/) para una explicación completa.',
      ],
      bullets: [
        'El [dolor en la planta del pie](/es/metatarsalgia-dolor-planta-del-pie/) puede venir de una carga de más en la parte delantera del pie cuando el arco es bajo. Una pantorrilla tensa lleva el peso hacia adelante.',
        '[Dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) explica los ejercicios y el calzado que ayudan cuando un día largo sobre un piso duro te deja el arco adolorido.',
        '[Dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/) habla de lo que exigen los turnos de 12\u00A0horas.',
      ],
    },
    {
      h2: 'Todas las guías sobre pie plano de este sitio',
      bullets: [
        '[Ejercicios para pie plano](/es/ejercicios-pie-plano/) tiene la lista completa con dosis, progresión y grados de evidencia.',
        '[Ejercicio de pie corto](/es/ejercicios/pie-corto/) explica en detalle el movimiento clave para entrenar el arco.',
        '[Recoger la toalla con los dedos](/es/ejercicios/recoger-toalla-con-los-dedos/) explica el ejercicio de la toalla para los músculos intrínsecos del pie.',
        '[Separar los dedos del pie](/es/ejercicios/separar-los-dedos-del-pie/) explica cómo separar los dedos para compartir la carga con el arco.',
        '[Inversión de tobillo con banda](/es/ejercicios/inversion-de-tobillo-con-banda/) fortalece el músculo tibial posterior.',
        '[Dolor en la planta del pie](/es/metatarsalgia-dolor-planta-del-pie/) explica el dolor en la parte delantera del pie, que se cruza con el pie plano cuando la carga se va hacia adelante.',
        '[Dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) explica los ejercicios y el calzado para los días largos de pie.',
        '[Dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/) habla del dolor de pies propio del personal de salud.',
      ],
    },
  ],
  faq: [
    {
      q: '¿El pie plano es algo por lo que preocuparse?',
      cites: [CITE.menz],
      a: 'Para la mayoría de las personas, no. Un pie plano flexible que no duele y no limita tu actividad es una forma normal del pie, no un trastorno. El Framingham Foot Study, con unos 1900\u00A0adultos, no encontró relación entre el pie plano y el dolor de espalda baja (Menz y colegas, 2013). Los casos que sí necesitan atención son el pie plano rígido y los arcos que se hundieron en la edad adulta con dolor o hinchazón.',
    },
    {
      q: '¿Qué causa el pie plano en adultos?',
      cites: [CITE.ling],
      a: 'La mayoría de los pies planos en adultos son de toda la vida, simplemente así se formó el pie. Cuando un arco que era normal se hunde en la edad adulta, la causa más común es la disfunción del tendón tibial posterior: el tendón de la parte interna del tobillo se debilita, el arco baja y puede aparecer dolor o hinchazón (Ling y Lui, 2017). Otras causas son las lesiones, la artritis inflamatoria y problemas de los nervios.',
    },
    {
      q: '¿El pie plano puede causar dolor de rodilla o de cadera?',
      a: 'Un arco bajo cambia cómo sube la fuerza por la pierna, y algunas personas con pies muy pronados desarrollan molestias por sobrecarga en la rodilla, la tibia o la cadera. Pero la relación es más débil de lo que se suele creer. Mucha gente con pie plano no tiene problemas de rodilla ni de cadera. Si tienes pie plano y dolor de rodilla o cadera, un profesional de la salud puede revisar si las dos cosas tienen que ver en tu caso.',
    },
    {
      q: '¿Los niños dejan de tener pie plano al crecer?',
      cites: [CITE.salinasTorres],
      a: 'La mayoría, sí. Casi todos los niños pequeños tienen pie plano, y el arco suele formarse entre los 6 y los 10\u00A0años. Una revisión sistemática de 2023 señaló que el pie plano es más frecuente entre los 3 y los 5\u00A0años y disminuye hacia la adolescencia (Salinas-Torres y colegas, 2023). Un adolescente que todavía tiene pie plano flexible sin dolor probablemente no tiene un problema que haya que resolver.',
    },
    {
      q: '¿Debo usar plantillas si tengo pie plano?',
      cites: [CITE.guideline],
      a: 'Si tu pie plano no duele, las plantillas son opcionales. Si estar de pie o caminar te hace doler el arco, un zapato con suela firme y un soporte de arco suave es un primer paso razonable. Las plantillas a medida a veces se usan para la disfunción del tendón tibial posterior, pero la evidencia sobre plantillas para el pie plano en sí es limitada. La guía de 2023 para el dolor de talón califica las plantillas solas con una B en contra.',
    },
    {
      q: '¿Qué es el pie plano adquirido del adulto?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'El pie plano adquirido del adulto es un hundimiento progresivo del arco, casi siempre porque se debilita el tendón tibial posterior (Ling y Lui, 2017). Causa dolor e hinchazón en la parte interna del tobillo, dificultad para subir en puntas sobre un pie y un talón que se inclina hacia afuera. Las guías clínicas recomiendan un manejo sin cirugía en las primeras etapas, aunque hay poca evidencia de ensayos de alta calidad (Ross y colegas, 2018).',
    },
    {
      q: '¿Puedo correr si tengo pie plano?',
      a: 'Muchos corredores tienen pie plano y corren sin problemas. Un arco bajo puede aumentar la pronación, y algunos corredores lo manejan con tenis de estabilidad. Si correr te causa dolor en el arco, el tobillo o la rodilla que no se calma entre carreras, un profesional de la salud puede revisar si el pie plano influye. Fortalecer los músculos del arco y de la cadera es un enfoque razonable, cambies de tenis o no.',
    },
    {
      q: '¿El pie plano se considera una discapacidad?',
      a: 'Por lo general, no. La mayoría de los pies planos no causan dolor ni limitan la actividad, así que no cumplen por sí solos los criterios de discapacidad. Un pie plano severo o rígido que causa dolor constante y limita caminar o estar de pie puede, en algunos casos, respaldar un reclamo de discapacidad, pero eso depende del programa específico, como el Seguro Social, y de tu función general, no solo de tener pie plano.',
    },
    {
      q: '¿Qué grupo étnico tiene más pie plano?',
      cites: [CITE.salinasTorres],
      a: 'El pie plano (pes planus) aparece con más frecuencia en algunos grupos, aunque la investigación es limitada. Una revisión sistemática de 2023 sobre estudios de población encontró que, en las personas de origen asiático, la razón de probabilidades de pie plano fue de más del doble, y en las personas blancas, de aproximadamente la mitad, en comparaciones de subgrupos distintas. Son patrones de población, no una predicción sobre los pies de una persona en particular.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'un arco se aplanó de repente en la edad adulta',
      'tienes dolor o hinchazón en la parte interna del tobillo',
      'no puedes pararte en un pie y subir en puntas del lado afectado',
      'el arco sigue plano incluso cuando el pie no toca el piso (pie plano rígido)',
      'el dolor empezó después de una lesión o una caída',
      'tienes entumecimiento, hormigueo o inestabilidad en el tobillo',
      'te duelen los dos pies y tienes otras articulaciones rígidas o hinchadas',
      'el dolor empeora semana tras semana aunque haces ejercicio',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'No tienes que decidir qué ejercicios de arco hacer ni cuándo pasar a una versión más difícil. Walkito arma un plan una semana a la vez en torno a una meta. Para un pie plano flexible, esa meta es mantener el arco: sostenerlo arriba 60\u00A0segundos. Si además te duele el talón, primero van las mañanas más fáciles.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas tu primera meta), una prueba corta mide cuánto mantienes el arco, la resistencia de la pantorrilla y el equilibrio. La meta de mantener el arco sigue en el plan hasta que la alcanzas, tome las semanas que tome.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si un arco se te bajó de adulto con dolor o hinchazón, consulta a un profesional antes de empezar.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Pie plano',
  campaign: 'hub-flat-feet-es',
};
