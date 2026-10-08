import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/pttd.ts` (2026-10-07), written around the
 * Spanish queries «disfunción del tendón tibial posterior ejercicios» and
 * «tendón tibial posterior ejercicios». Figures, doses, grades and qualifiers
 * are identical to the English page.
 */

export const PTTD_ES: Guide = {
  lang: 'es',
  page: 'pttd',
  mainSource: CITE.posteriorTibialReview,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicios para la disfunción del tendón tibial posterior',
  description:
    'Ejercicios para la disfunción del tendón tibial posterior: inversión con banda, elevaciones de talón, pie corto, etapas y qué dice la evidencia.',
  h1: 'Ejercicios para la disfunción del tendón tibial posterior: qué ayuda y cuándo',
  lede:
    'La disfunción del tendón tibial posterior, conocida como DTTP, ocurre cuando el tendón que sostiene el arco en la cara interna del tobillo se debilita o se inflama. Es la causa más común de pie plano adquirido del adulto. El ejercicio puede ayudar en las etapas iniciales, pero no todas las etapas responden igual, y la evidencia todavía es limitada. Esta página cubre las etapas, los ejercicios con mejor respaldo y cuándo entran una bota o la cirugía.',
  intro: [
    'El tendón tibial posterior pasa por detrás del hueso del tobillo interno y se une bajo el pie. Sostiene el arco al caminar. Cuando degenera, el arco se aplana, el talón se inclina hacia afuera y el dolor se instala a lo largo de la cara interna del tobillo o de la parte media del pie. Una revisión sistemática de 2018 encontró solo tres ensayos aleatorizados o controlados con 93\u00A0personas en total, así que la evidencia sobre el ejercicio aquí es mucho más escasa que para la [fascitis plantar](/es/ejercicios-fascitis-plantar/) o la tendinitis de Aquiles.',
  ],
  toc: true,
  takeaways: [
    'Una revisión sistemática de 2018 encontró efectos moderados (DME 0,6 a 1,2) del fortalecimiento excéntrico más ortesis y estiramientos, comparado con ortesis y estiramientos solos, en tres estudios con 93\u00A0participantes en total (Ross y colegas, 2018).',
    'En un ensayo aleatorizado con 36\u00A0personas, un programa de tres meses de ortesis, estiramientos y ejercicio excéntrico redujo el dolor y mejoró la función más que las ortesis y los estiramientos solos. El grupo excéntrico alcanzó cargas 3,3\u00A0veces mayores que el grupo concéntrico al final del programa (Kulig y colegas, 2009).',
    'La DTTP se clasifica en cuatro etapas. El ejercicio y las ortesis son el enfoque principal en las etapas I y II, donde la deformidad todavía es flexible. Las etapas III y IV implican una deformidad rígida o cambios en la articulación del tobillo y normalmente requieren evaluación quirúrgica.',
    'El tendón tibial posterior se activa durante las elevaciones de talón cuando el pie gira hacia adentro y el arco sube, por eso las elevaciones de talón con énfasis en el arco aparecen en los programas para la DTTP.',
  ],
  sections: [
    {
      h2: '¿Qué es la disfunción del tendón tibial posterior?',
      paragraphs: [
        'El tibial posterior es un músculo en la parte profunda de la pantorrilla. Su tendón pasa por detrás del hueso del tobillo interno, el maléolo medial, y se abre en abanico debajo del pie para unirse a varios huesos de la parte media del pie. Al caminar, levanta el arco y controla cuánto rueda el pie hacia adentro. Cuando el tendón degenera o se rompe, ese soporte se pierde.',
        'La DTTP es la causa más común de pie plano adquirido del adulto. Es más frecuente en mujeres, en personas mayores de 40\u00A0años y en quienes tienen un IMC más alto. Los factores de riesgo incluyen la hipertensión, la diabetes y las inyecciones previas de corticosteroides cerca del tendón. El dolor suele situarse detrás o debajo del hueso del tobillo interno y empeora con la actividad, sobre todo al caminar cuesta arriba o en superficies irregulares.',
        'El nombre clínico que puedes ver es tendinopatía del tibial posterior. Fuentes más antiguas a veces dicen tendinitis del tibial posterior cuando el problema es sobre todo inflamación, o insuficiencia del tendón tibial posterior cuando el tendón se ha alargado y el arco ha empezado a caer. Los tres términos describen el mismo espectro.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: '¿Cuáles son las etapas de la DTTP?',
      paragraphs: [
        'Los profesionales de la salud clasifican la DTTP en cuatro etapas. La etapa determina si el ejercicio y las ortesis probablemente ayuden, o si conviene hablar de una bota, una tobillera o cirugía.',
        '**Etapa I** significa que el tendón está inflamado pero todavía intacto. El arco se ve normal. Hay dolor y a veces una hinchazón leve detrás del tobillo interno. La fuerza en una elevación de talón a una pierna suele estar reducida en comparación con el otro lado, pero la forma del pie no ha cambiado. El ejercicio y las ortesis de soporte son el enfoque principal.',
        '**Etapa II** significa que el tendón se ha alargado o roto parcialmente. El arco se ha aplanado y el talón se inclina hacia afuera, pero la deformidad todavía es flexible, lo que quiere decir que un profesional de la salud puede empujar el pie de vuelta a su posición. Esta es la etapa que cubre la mayor parte de la investigación sobre ejercicio. Ortesis, estiramientos y fortalecimiento progresivo son el programa conservador estándar.',
        '**Etapa III** significa que la deformidad se ha vuelto rígida. El pie no puede llevarse de vuelta a una posición corregida, y muchas veces hay cambios artríticos en las articulaciones debajo del tobillo. El ejercicio solo difícilmente cambiará la forma del pie en esta etapa. La evaluación quirúrgica suele discutirse.',
        '**Etapa IV** agrega la afectación de la articulación del tobillo. El tobillo se inclina en valgo, es decir, se va hacia afuera. Es la etapa más avanzada y normalmente requiere intervención quirúrgica.',
        'La mayoría de las personas que buscan ejercicios para la DTTP están en la etapa I o II. Si no sabes cuál etapa aplica en tu caso, un profesional de la salud puede decírtelo con un examen físico y, si es necesario, estudios de imagen. La prueba de elevación de talón a una pierna, donde intentas subir en puntas con un solo pie, es una herramienta rápida: si te cuesta subir, si duele al hacerlo, o si el talón no gira hacia adentro arriba, todo eso apunta a debilidad del tibial posterior.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué dice la evidencia sobre el ejercicio?',
      keyFact: 'Al reunir tres ensayos pequeños con 93 personas en total, una revisión de 2018 encontró que el fortalecimiento excéntrico sumado a ortesis y estiramientos produjo mejorías de tamaño moderado frente a ortesis y estiramientos solos (Ross y colegas, 2018).',
      paragraphs: [
        'Una revisión sistemática de 2018 identificó tres ensayos aleatorizados controlados con 93\u00A0participantes en total. Dos probaron el fortalecimiento añadido a ortesis y estiramientos; el tercero probó fortalecimiento y entrenamiento de equilibrio contra ninguna intervención. La revisión encontró tamaños de efecto moderados (DME 0,6 a 1,2) para el fortalecimiento excéntrico en la reducción del dolor y la discapacidad, comparado con ortesis y estiramientos solos.',
        'El más grande de los tres estudios fue un ensayo aleatorizado de 2009 con 36\u00A0personas con DTTP en etapa I o II. Los participantes fueron asignados a uno de tres grupos durante tres meses: ortesis y estiramientos solos, ortesis más estiramientos más ejercicio concéntrico, u ortesis más estiramientos más ejercicio excéntrico. Los dos grupos de ejercicio mejoraron más que el grupo de solo ortesis. El grupo excéntrico alcanzó cargas 3,3\u00A0veces mayores que el grupo concéntrico al final del programa, aunque los dos tipos de ejercicio redujeron el dolor.',
        'Un segundo ensayo aleatorizado, publicado en 2015, asignó a 39\u00A0personas con DTTP en etapa II a ortesis más estiramientos o a ortesis más estiramientos más fortalecimiento (incluyendo ejercicios con banda y elevaciones de talón). Los dos grupos mejoraron, pero el grupo de fortalecimiento no se separó de forma significativa del grupo de estiramientos en el desenlace principal. Los autores sugirieron que la dosis de fortalecimiento pudo no haber sido suficiente.',
        'Los autores de la revisión concluyeron que la evidencia respalda añadir ejercicio de resistencia progresiva a las ortesis para la DTTP en las etapas iniciales, pero pidieron ensayos más grandes. Esta es un área donde la investigación todavía va por detrás de la práctica clínica.',
      ],
      sourceNote:
        'Ross 2018: 3\u00A0estudios, n\u00A0=\u00A093. Kulig 2009: n\u00A0=\u00A036, 3\u00A0brazos, 3\u00A0meses, Foot Function Index, EVA de dolor. Houck 2015: n\u00A0=\u00A039, 2\u00A0brazos, 3\u00A0meses, FAAM.',
      cites: [CITE.posteriorTibialReview, CITE.kuligRCT, CITE.houckPTTD],
    },
    {
      h2: 'Los ejercicios',
      paragraphs: [
        'Los ejercicios de abajo trabajan el músculo tibial posterior y los músculos que sostienen el arco. La inversión con banda entrena el tibial posterior directamente. Las elevaciones de talón con énfasis en el arco cargan el tendón durante un movimiento funcional. El pie corto fortalece los músculos intrínsecos del pie que ayudan al arco. El estiramiento de pantorrilla aborda el hallazgo común de dorsiflexión reducida en personas con DTTP.',
        'Los programas de ejercicio de los ensayos también incluían estiramiento de pantorrilla y ortesis. Las ortesis no eran opcionales en ningún estudio. Si tienes DTTP, una ortesis con soporte de arco es parte del programa, no un sustituto del ejercicio ni al revés.',
      ],
      exercises: [
        {
          name: 'Inversión con banda (giro hacia adentro con resistencia)',
          dose: '3\u00A0series de 15, cada pie. Walkito empieza con 3\u00A0series de 15.',
          how: 'Siéntate con las piernas estiradas y una banda de resistencia enrollada alrededor de la parte delantera del pie. Ancla el otro extremo a la pata de una mesa o pide que alguien lo sostenga hacia afuera. Gira el pie hacia adentro contra la banda, manteniendo la rodilla quieta. El movimiento sale del tobillo, no de la pierna.',
          often: 'Días de fuerza',
          feel: 'Trabajo a lo largo de la cara interna del tobillo y del arco',
          stop: 'Dolor agudo detrás del hueso del tobillo interno',
          evidence: { level: 'moderate', why: 'La inversión con resistencia fue parte del protocolo de ejercicio del ensayo de Kulig 2009. El tibial posterior se activa de forma selectiva durante la inversión (estudio con RM de Kulig 2004).' },
          media: 'band_inversion',
          caption: 'Inversión con banda: gira el pie hacia adentro contra la resistencia, la rodilla se queda quieta',
          alt: 'Una figura sentada gira el pie hacia adentro contra una banda de resistencia, con el músculo tibial posterior resaltado',
        },
        {
          name: 'Elevaciones de talón (con pelota entre los tobillos)',
          dose: '3\u00A0series de 10, los dos pies. Progresa a una pierna.',
          how: 'Párate con los dos pies y una pelota pequeña o una toalla enrollada entre los huesos internos de los tobillos. Sube en puntas apretando la pelota hacia adentro. Apretar hace que el tibial posterior se active. Progresa a elevaciones con una pierna cuando la versión con dos pies se sienta cómoda por dos sesiones seguidas.',
          often: 'Días de fuerza',
          feel: 'Trabajo de pantorrilla más un tirón a lo largo del arco interno',
          stop: 'Dolor detrás del tobillo interno por encima de 6/10',
          evidence: { level: 'moderate', why: 'Las elevaciones de talón con activación del arco fueron parte del ensayo de Houck 2015. La RM muestra activación moderada del tibial posterior durante las elevaciones de talón (Kulig 2004).' },
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: aprieta una pelota entre los tobillos para activar el arco',
          alt: 'Una figura sube en puntas con una pelota entre los huesos internos de los tobillos, con el tibial posterior resaltado',
        },
        {
          name: 'Pie corto (sentado)',
          dose: '3\u00A0series de 10, mantén cada una 5\u00A0segundos',
          how: 'Siéntate con el pie apoyado en el piso. Sin doblar los dedos, lleva la parte delantera de la planta hacia el talón. El arco debe subir un poco. Esto entrena los músculos intrínsecos del pie que trabajan junto al tibial posterior para sostener el arco.',
          often: 'La mayoría de las sesiones',
          feel: 'Una tensión debajo del arco',
          stop: 'Dolor en el arco o en la cara interna del tobillo',
          evidence: { level: 'moderate', why: 'El ejercicio de pie corto fue parte del programa combinado en estudios sobre la corrección del pie plano. Una revisión de 2024 encontró que mejoró la postura del pie en programas de más de seis semanas.' },
          media: 'short_foot_seated',
          caption: 'Pie corto: sube el arco sin doblar los dedos',
          alt: 'Una figura sentada con un pie en el piso, el arco subiendo un poco, con los músculos intrínsecos del pie resaltados',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Manos en la pared. Pierna de atrás estirada, talón abajo, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla. La dorsiflexión reducida es común en la DTTP y puede contribuir a una pronación compensatoria.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor en el tendón de Aquiles',
          evidence: { level: 'moderate', why: 'El estiramiento de pantorrilla se incluyó en los tres ensayos de ejercicio para la DTTP como intervención de base.' },
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
      ],
      cites: [CITE.kuligRCT, CITE.houckPTTD, CITE.kulig, CITE.cheng],
    },
    {
      h2: '¿Las ortesis ayudan, y hay que usarlas durante el ejercicio?',
      paragraphs: [
        'Todos los ensayos de ejercicio para la DTTP usaron ortesis como parte de la intervención de base. Las ortesis no se compararon contra el ejercicio; se probó el ejercicio añadido a las ortesis. El ensayo de 2009 encontró que las ortesis y los estiramientos solos mejoraban la función, y que añadir ejercicio la mejoraba más.',
        'Una ortesis rígida o semirrígida con soporte de arco evita que el arco se desplome al estar de pie y al caminar. Para los ejercicios de esta página, puedes hacer la inversión con banda y el pie corto sin zapatos, pero las elevaciones de talón conviene hacerlas con los mismos zapatos de soporte con los que caminas, porque el arco necesita soporte bajo carga.',
        'Las plantillas de soporte de arco de venta libre pueden ser suficientes para la etapa I. Las ortesis a la medida son más comunes para la etapa II, donde la deformidad es mayor. Un profesional de la salud o un podólogo puede ayudarte a decidir cuál es la adecuada.',
      ],
      cites: [CITE.kuligRCT, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Cuándo se habla de una bota o de cirugía?',
      paragraphs: [
        'Una bota ortopédica o una tobillera a veces se usa en la etapa I o II de la DTTP cuando el dolor es demasiado alto para hacer ejercicio. La bota inmoviliza el tendón para dejar que la inflamación aguda ceda. Es una medida a corto plazo, no un programa a largo plazo. Cuando el dolor baja lo suficiente, el ejercicio y las ortesis toman el lugar.',
        'La cirugía suele discutirse cuando el manejo conservador no ha mejorado los síntomas después de varios meses, o cuando la deformidad ha progresado a la etapa III o IV. Las opciones quirúrgicas van desde la reparación y la transferencia del tendón en etapas más tempranas hasta la fusión articular en etapas más avanzadas. La decisión depende de la etapa, el grado de la deformidad y la persona.',
        'Esta página no cubre las opciones quirúrgicas a detalle. Si estás en la etapa III o IV, o si los síntomas de la etapa II no han respondido al ejercicio y a las ortesis después de varios meses, un especialista en pie y tobillo puede discutir los siguientes pasos.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: '¿Cómo se relaciona la DTTP con el pie plano?',
      paragraphs: [
        'La DTTP es la causa más común de pie plano adquirido del adulto, es decir, un pie plano que se desarrolla en la edad adulta en vez de estar presente desde la infancia. Si tenías arcos normales y han empezado a caer de un lado, con dolor detrás del tobillo interno, la DTTP es la explicación más probable.',
        'El pie plano flexible congénito, el que está presente desde la infancia, es una situación diferente. Puede que nunca cause síntomas. Los ejercicios se superponen: el pie corto, la inversión con banda y las elevaciones de talón aparecen tanto en los [ejercicios para el pie plano](/es/ejercicios-pie-plano/) como en los programas para la DTTP. Pero el contexto clínico es diferente, y la DTTP normalmente necesita ortesis y un seguimiento más cercano porque el tendón está degenerando, no simplemente laxo.',
        'Si no estás seguro de si tu pie plano es de toda la vida o nuevo, un profesional de la salud puede comparar los dos pies, revisar el tendón y mirar la alineación del talón cuando estás de pie.',
      ],
      cites: [CITE.ling, CITE.zarali],
    },
    {
      h2: '¿Cuánto tarda la mejoría?',
      keyFact: 'Un pequeño estudio piloto de diez pacientes con carga excéntrica dos veces al día durante unos dos meses y medio encontró mejoría de los síntomas junto con algunos cambios del tendón en la ecografía (Kulig y colegas, 2009).',
      paragraphs: [
        'Los dos ensayos aleatorizados duraron tres meses. Los dos mostraron mejoría al final del programa, pero ninguno siguió a los participantes a largo plazo. Un pequeño estudio piloto de diez pacientes del mismo grupo también duró unos dos meses y medio de carga excéntrica dos veces al día y encontró mejoría en los síntomas junto con algunos cambios del tendón en la ecografía.',
        'En la práctica clínica, la mejoría de la DTTP en etapa I o II con ejercicio y ortesis se mide en meses, no en semanas. La degeneración del tendón no se revierte rápido. Una expectativa razonable es menos dolor y mejor función a lo largo de tres a seis meses, con ejercicio de mantenimiento después de eso. Si no hay mejoría después de tres meses de ejercicio constante y ortesis, vale la pena volver al profesional de la salud para reevaluar la etapa.',
      ],
      cites: [CITE.kuligRCT, CITE.kuligEccentric],
    },
  ],
  faq: [
    {
      q: '¿Qué ejercicios ayudan con la disfunción del tendón tibial posterior?',
      cites: [CITE.posteriorTibialReview, CITE.kuligRCT],
      a: 'Una revisión sistemática de 2018 de tres estudios con 93\u00A0personas encontró que los ejercicios de fortalecimiento excéntrico y concéntrico, añadidos a ortesis y estiramientos, redujeron el dolor y mejoraron la función más que las ortesis y los estiramientos solos (Ross 2018). Los ejercicios probados incluyen la inversión del pie con banda, elevaciones de talón progresivas y estiramiento de pantorrilla.',
    },
    {
      q: '¿Se puede revertir la DTTP con ejercicio?',
      cites: [CITE.ling],
      a: 'En las etapas I y II, donde el tendón está inflamado o alargado pero el pie todavía es flexible, el ejercicio y las ortesis pueden reducir el dolor y mejorar la función. Ningún estudio ha demostrado que el ejercicio revierta la degeneración del tendón ni restaure un arco caído a su altura original. En las etapas III y IV, donde la deformidad es rígida, el ejercicio solo difícilmente cambiará la forma del pie.',
    },
    {
      q: '¿Cuál es la diferencia entre la DTTP y el pie plano?',
      a: 'La DTTP es la causa más común de pie plano adquirido del adulto, un pie plano que se desarrolla en la edad adulta porque el tendón tibial posterior se debilita. El pie plano congénito, presente desde la infancia, es una situación diferente. Puede que nunca cause dolor. La DTTP suele afectar un solo lado, empeora con el tiempo y viene con dolor detrás del tobillo interno.',
    },
    {
      q: '¿Cómo se siente el dolor del tendón tibial posterior?',
      cites: [CITE.ling],
      a: 'El dolor suele situarse detrás o debajo del hueso del tobillo interno. Puede extenderse a lo largo del arco interno. Empeora con la actividad, sobre todo al caminar cuesta arriba, en superficies irregulares o al mantener el equilibrio a una pierna. La zona puede hincharse. Una señal temprana común es la dificultad para hacer una elevación de talón a una pierna del lado afectado.',
    },
    {
      q: '¿Necesito ortesis para la DTTP?',
      cites: [CITE.kuligRCT],
      a: 'Todos los ensayos de ejercicio para la DTTP usaron ortesis como parte del programa de base. Las ortesis sostienen el arco y reducen la carga sobre el tendón al caminar. La evidencia no respalda hacer ejercicio sin ortesis para la DTTP. Las plantillas de soporte de arco de venta libre pueden funcionar en casos leves, mientras que las ortesis a la medida son más comunes para la etapa II.',
    },
    {
      q: '¿La DTTP es lo mismo que el dolor de tobillo interno?',
      a: 'La DTTP es una de las causas más comunes de dolor en la cara interna del tobillo, pero no es la única. Otras posibilidades incluyen un esguince del ligamento deltoideo, una fractura por estrés del navicular o el síndrome del túnel tarsiano (compresión de un nervio). Un profesional de la salud puede distinguirlas con un examen físico. La DTTP suele acompañarse de un arco que se aplana y dificultad con las elevaciones de talón a una pierna.',
    },
    {
      q: '¿Cuándo necesita cirugía la DTTP?',
      cites: [CITE.ling],
      a: 'La cirugía suele discutirse cuando el manejo conservador, es decir, ejercicio, ortesis y a veces una bota ortopédica, no ha mejorado los síntomas después de varios meses, o cuando la deformidad ha progresado a la etapa III o IV, donde el pie está rígidamente plano o la articulación del tobillo está afectada. La mayoría de los casos en etapa I y II responden al manejo conservador.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el arco de un lado ha caído visiblemente o el talón se inclina hacia afuera al estar de pie',
      'no puedes hacer una elevación de talón a una pierna del lado afectado',
      'la cara interna del tobillo está hinchada, roja o caliente',
      'el dolor apareció de golpe después de una lesión o un giro del tobillo',
      'hay hormigueo o entumecimiento a lo largo de la cara interna del pie, lo que puede sugerir un síndrome del túnel tarsiano en vez de DTTP',
      'el dolor no mejora después de varias semanas de ejercicio y soporte de arco',
      'los dos pies están afectados y otras articulaciones están hinchadas o rígidas, lo que puede apuntar a una artritis inflamatoria',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito incluye inversión con banda, pie corto y elevaciones de talón en su biblioteca de ejercicios, y los programa en días de fuerza como parte de un plan de arco y equilibrio. Cuando marcas la cara interna del tobillo o el arco en el mapa de dolor durante un check-in, la sesión se ajusta en torno a esa información. La app está construida para la fascitis plantar y el pie plano. La DTTP se superpone con los dos, pero la app no diagnostica DTTP y no reemplaza las ortesis ni la clasificación clínica.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, la sujeción del arco y el equilibrio, para que veas qué está cambiando. Si te han diagnosticado DTTP, usa la app junto con ortesis y confirma con tu profesional de la salud que la etapa es adecuada para el ejercicio.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Ejercicios para el tendón tibial posterior',
  campaign: 'guide-pttd-es',
};
