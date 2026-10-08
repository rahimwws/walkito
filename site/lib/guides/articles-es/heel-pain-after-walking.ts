import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dolor de talón al caminar (ES) ────────────────────────────────────
 *
 * Translated from `articles/heel-pain-after-walking.ts`. Written around the
 * Spanish queries «dolor de talón al caminar», «dolor de talón después de
 * caminar», «por qué me duele el talón al caminar». Figures, doses, grades
 * and qualifiers are identical to the English page. No new citations.
 */

export const HEEL_PAIN_AFTER_WALKING_ES: Guide = {
  lang: 'es',
  page: 'heelPainAfterWalking',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Dolor de talón al caminar: por qué pasa y qué hacer',
  description:
    'Dolor de talón al caminar o después de caminar: por qué te duele el talón, qué condiciones lo causan, cuándo preocuparte y qué ejercicios ayudan más.',
  h1: 'Dolor de talón al caminar: por qué te duele y qué hacer al respecto',
  lede:
    'Tu talón estaba bien mientras caminabas, pero ahora que te detuviste te duele. O el dolor empezó a mitad de una caminata larga y fue empeorando con cada paso. Los dos patrones apuntan a lo mismo: los tejidos bajo el talón recibieron más carga de la que podían aguantar ese día. La causa más común es la fascitis plantar, y la respuesta más útil es estirar y fortalecer la pantorrilla de forma gradual.',
  intro: [
    'Esta página es sobre el dolor de talón que aparece durante o después de caminar. Si tu talón duele más en los primerísimos pasos de la mañana, ese patrón se explica en [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/). Si tus pies duelen después de estar de pie en un mismo lugar por horas, [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) cubre el lado de la carga estática. Los tres se cruzan, pero cada uno tiene un ángulo distinto.',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón describe el dolor de la fascitis plantar como «más notorio al apoyar el peso a primera hora de la mañana o después de un rato de reposo», pero también menciona que el dolor empeora con la actividad prolongada que implica apoyar el peso como un rasgo clave (Koc y colegas, 2023).',
    'En un estudio de casos y controles pareados con 50\u00A0personas con fascitis plantar y 100\u00A0controles, una dorsiflexión de tobillo reducida (cuánto puede subir el pie hacia la tibia) fue el factor de riesgo independiente más fuerte, por delante de un índice de masa corporal mayor de 30 y de estar de pie la mayor parte de la jornada laboral (Riddle y colegas, 2003).',
    'La guía le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**, y al entrenamiento de fuerza una **B** (Koc y colegas, 2023).',
    'Cerca del 90\u00A0% de las personas con fascitis plantar mejora con cuidados sin cirugía, como estiramientos, trabajo de pantorrilla y manejo de la carga (Latt y colegas, 2020).',
    'Un dolor de talón después de caminar que aumenta con cada sesión y no se calma con el descanso puede apuntar a una fractura por estrés en lugar de fascitis plantar. Apretar los lados del talón es una señal clínica.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Por qué te duele el talón después de caminar?',
      keyFact: 'En un estudio de casos y controles pareados con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la dorsiflexión de tobillo reducida fue el factor de riesgo más fuerte, por delante de un índice de masa corporal alto y estar de pie mucho tiempo en el trabajo (Riddle y colegas, 2003).',
      paragraphs: [
        'Caminar carga la fascia plantar, la banda gruesa de tejido bajo el pie, con cada paso. Cada vez que el talón golpea el piso y el pie rueda hacia adelante, la fascia se estira y absorbe fuerza. En un pie sano esto no es problema. Pero cuando la fascia está irritada o la pantorrilla está demasiado tensa para absorber su parte, la carga se concentra en la unión del talón.',
        'El resultado es un dolor que aumenta durante o después de una caminata, sobre todo si es más larga de lo habitual. La guía de 2023 describe dos patrones típicos de la fascitis plantar: dolor en los primeros pasos después de descansar, y dolor que aumenta con la actividad prolongada que implica apoyar el peso. Caminar es la actividad prolongada con carga de peso más común que existe.',
        'Una pantorrilla tensa es una parte importante del problema. En un estudio de casos y controles pareados con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la dorsiflexión de tobillo reducida tuvo la razón de probabilidades más alta de todos los factores de riesgo medidos. Cuando el tobillo no puede doblarse lo suficiente, cada paso le pide a la fascia que compense la diferencia.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: '¿El dolor de talón al caminar siempre es fascitis plantar?',
      paragraphs: [
        'La fascitis plantar es la causa más común, pero no es la única. La ubicación y el momento del dolor ayudan a distinguirlas.',
        '**Atrofia de la almohadilla grasa del talón.** La almohadilla grasa bajo el hueso del talón amortigua cada paso. Cuando se adelgaza o se desplaza, el hueso recibe más impacto directo. Una revisión exploratoria de 2022 señaló que el dolor de la almohadilla grasa tiende a ser un dolor profundo y sordo en el centro del talón, peor sobre superficies duras y al caminar descalzo (Chang y colegas, 2022). El dolor de la fascitis plantar suele estar en la parte interna y delantera del talón. El dolor de la almohadilla grasa está justo en el centro. Si caminar descalzo sobre azulejo o concreto es claramente peor que caminar con zapatos amortiguados, la atrofia de la almohadilla grasa vale la pena considerarla. Mira [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/) para más información.',
        '**Tendinitis de Aquiles.** Dolor en la parte de atrás del talón o en el tendón que está arriba, no bajo el pie. El tendón de Aquiles puede doler después de una caminata larga, sobre todo cuesta arriba. Si tu dolor está en la parte de atrás del talón y no debajo, mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
        '**Fractura por estrés del calcáneo.** Un dolor que aparece poco a poco después de un salto en la distancia o intensidad de las caminatas. A diferencia de la fascitis plantar, el dolor de la fractura por estrés tiende a aumentar con la actividad y no aliviarse mucho con el descanso. Apretar los lados del talón puede reproducir el dolor. Si eso encaja con tu patrón, consulta a un profesional de la salud antes de ejercitar el pie.',
        '**Dolor referido de la espalda baja o atrapamiento nervioso.** Un dolor de talón que viene con entumecimiento, hormigueo o ardor puede apuntar a un problema nervioso, no a un problema de carga del tejido. Esta es una razón para consultar a un profesional de la salud primero.',
      ],
      cites: [CITE.fatPadReview, CITE.achillesGuideline, CITE.patelStressFracture],
    },
    {
      h2: '¿En qué se diferencia el dolor de talón al caminar del dolor de talón en la mañana?',
      paragraphs: [
        'El dolor de talón en la mañana y el dolor después de caminar son dos caras de la misma condición en la mayoría de los casos. El dolor de la mañana ocurre porque la fascia se pone rígida y se acorta durante la noche, y luego se estira de golpe cuando te paras. El dolor después de caminar ocurre porque la fascia recibió carga repetitiva durante la caminata y el tejido te está diciendo que fue suficiente.',
        'La diferencia importa para el momento de los ejercicios. El dolor de la mañana responde mejor a un estiramiento de la fascia plantar hecho antes del primer paso. El dolor después de caminar responde a manejar la carga: caminar una distancia que el pie pueda aguantar, aumentar esa distancia poco a poco, y usar estiramientos y trabajo de pantorrilla para subir el umbral. En [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) están los estiramientos de la mañana y las férulas nocturnas con detalle.',
        'Si tienes tanto dolor en la mañana como dolor después de caminar, ese es el patrón típico de la fascitis plantar. Los ejercicios se cruzan. El estiramiento de la mañana y los estiramientos de pantorrilla ayudan con los dos. El fortalecimiento de la pantorrilla sube la capacidad de toda la cadena para que la carga de caminar cada día quede dentro de lo que los tejidos pueden manejar.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿En qué se diferencia del dolor de pie por estar de pie?',
      paragraphs: [
        'Estar de pie quieto y caminar son cargas distintas. Estar de pie mantiene los mismos tejidos bajo un estrés constante y estático, sin la bomba de la pantorrilla que caminar proporciona. Caminar alterna entre cargar y descargar, lo que es más fácil para las venas y la almohadilla grasa, pero más exigente para la fascia en la unión del talón por el estiramiento repetido al impulsarte.',
        'Si tus pies duelen después de estar de pie por horas pero se sienten bien después de caminar, lo más probable es que el problema sea fatiga por la carga estática. [Dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) cubre ese patrón, incluyendo medias de compresión y tapetes para el piso, que son menos relevantes aquí. Si tu talón específicamente duele después de caminar pero no después de estar de pie, el problema de carga está en la unión de la fascia y los ejercicios de pantorrilla de abajo son el punto de partida.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: '¿Qué ejercicios ayudan con el dolor de talón al caminar?',
      keyFact: 'Una revisión sistemática encontró que tanto el estiramiento de la fascia plantar como el de la pantorrilla redujeron más el dolor de la fascitis plantar que no estirar en absoluto (Siriphorn y Eksakulkla, 2020).',
      paragraphs: [
        'Los ejercicios son los mismos que la guía de 2023 recomienda para la fascitis plantar. La guía le da al estiramiento su grado más alto, **A**, y al entrenamiento de fuerza una **B**. Se recomiendan los dos. Una revisión sistemática encontró que tanto el estiramiento de la fascia plantar como el de la pantorrilla redujeron el dolor en comparación con no estirar (Siriphorn y Eksakulkla, 2020).',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'Grado A en la guía. La recomendación más repetida en la guía de 2023.' },
          dose: '10\u00A0repeticiones de 10\u00A0segundos, cada pie',
          how: 'Siéntate y cruza un tobillo sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. Hazlo antes de pararte en la mañana, después de estar sentado y después de una caminata larga.',
          often: 'Cada mañana y después de actividad prolongada',
          feel: 'Un estiramiento a lo largo del arco, no dolor agudo',
          stop: 'Dolor de 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás con suavidad',
          alt: 'Una figura sentada jala los dedos hacia atrás para estirar el arco',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'Grado A en la guía. Aborda la pantorrilla tensa que fue el factor de riesgo más fuerte en un estudio de casos y controles de 2003.' },
          dose: '2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared. Pierna de atrás estirada, talón en el piso, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla.',
          often: 'La mayoría de las sesiones y antes de una caminata larga',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor de 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, inclínate hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada y la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'strong', why: 'Grado A en la guía. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.' },
          dose: '2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'En la misma posición en la pared, dobla la rodilla de atrás hasta que el estiramiento baje, cerca del talón.',
          often: 'Después del estiramiento con rodilla estirada',
          feel: 'Un estiramiento más abajo en la pantorrilla, cerca del talón',
          stop: 'Dolor de 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura en posición de paso con las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'Grado B en la guía para el entrenamiento de fuerza. Un paso previo al trabajo con carga a una pierna.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga. Agárrate de una pared o barandal para el equilibrio.',
          often: 'Días de fuerza, cuando solo estirar ya no es suficiente',
          feel: 'Las pantorrillas trabajando juntas',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con toalla (una pierna)',
          evidence: { level: 'strong', why: 'El ejercicio del único ensayo de elevaciones de talón específico para la fascitis plantar (Rathleff 2015). Grado B en la guía.' },
          dose: 'Walkito empieza con 3\u00A0series de 12, cada pierna. El protocolo de investigación progresa a 5\u00A0series de 8RM.',
          how: 'Párate en un pie en un escalón, con una toalla enrollada bajo los dedos. Tres segundos para subir, dos segundos arriba, tres segundos para bajar. La toalla carga la fascia plantar a través del mecanismo de molinete.',
          often: 'Días de fuerza, cuando las elevaciones con dos pies se sientan fáciles durante dos sesiones',
          feel: 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_towel',
          caption: 'Elevación con toalla: tempo lento, toalla bajo los dedos',
          alt: 'Una figura en un escalón sube en puntas con una toalla enrollada bajo el pie',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.rathleff, CITE.riddle],
    },
    {
      h2: '¿Cuánto deberías caminar si te duele el talón?',
      paragraphs: [
        'La meta no es dejar de caminar. Es encontrar la distancia que tu talón puede aguantar sin que empeore a la mañana siguiente, y después construir desde ahí.',
        'Un enfoque práctico: camina una distancia que mantenga el dolor de la mañana del día siguiente igual o por debajo de su nivel habitual. Si tu puntuación normal de la mañana es 4 de 10 y una caminata de 30\u00A0minutos la sube a 6 a la mañana siguiente, esa caminata fue demasiado. Acórtala hasta que la puntuación de la mañana se mantenga estable. Después añade cinco minutos cada una o dos semanas, siempre que el dolor de la mañana no se dispare.',
        'Esto es manejo de la carga, no descanso. El descanso total rara vez ayuda con la fascitis plantar. La guía recomienda modificar la actividad, no dejar de moverse. Caminar con zapatos de buen soporte sobre una superficie más suave es más fácil para la fascia que caminar descalzo sobre concreto.',
        'Si también corres, el mismo principio aplica a otra escala. [Dolor de talón al correr](/es/dolor-de-talon-en-corredores/) cubre los picos de carga y los cambios de kilometraje con más detalle.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Cuánto tiempo hasta que el talón deje de doler después de caminar?',
      keyFact: 'En datos normativos con 566\u00A0adultos sanos, el número promedio de elevaciones de talón a una pierna fue de unas 23 a 24\u00A0repeticiones, un punto de referencia para seguir la resistencia de la pantorrilla con el tiempo (Hebert-Losier y colegas, 2017).',
      paragraphs: [
        'No hay un plazo fijo. Una revisión de la evidencia clínica indica que cerca del 90\u00A0% de las personas con fascitis plantar mejora con cuidados sin cirugía, a menudo en varios meses (Latt y colegas, 2020). En un seguimiento más largo de 174\u00A0personas, cerca de la mitad todavía tenía algunos síntomas a los 5\u00A0años, aunque la mayoría eran leves para ese momento (Hansen y colegas, 2018).',
        'Lo que sí puedes medir más pronto es si los ejercicios están funcionando. El dolor de la mañana en una escala de 0 a 10 es la señal diaria más clara. La resistencia de la pantorrilla, medida contando cuántas elevaciones de talón a una pierna puedes hacer, sigue la fuerza a lo largo de semanas. Un dato normativo comúnmente citado para adultos es de unas 23 a 24\u00A0repeticiones en promedio, de datos normativos con 566\u00A0adultos sanos (Hebert-Losier y colegas, 2017). Lo que importa es si tu número está subiendo, no si coincide con ese dato.',
        'Para más información sobre el plazo general, mira [¿cuánto dura la fascitis plantar?](/es/cuanto-dura-la-fascitis-plantar/).',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.hebertLosier],
    },
  ],
  faq: [
    {
      q: '¿Por qué me duele el talón después de una caminata larga?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La causa más común es la fascitis plantar. Cada paso carga la fascia plantar donde se une al hueso del talón. Una caminata larga le pide más a ese tejido que una corta. Cuando la pantorrilla está tensa o la fascia ya está irritada, la carga supera lo que el tejido puede manejar y el dolor aparece. Una pantorrilla tensa fue el factor de riesgo independiente más fuerte en un estudio de casos y controles de 2003.',
    },
    {
      q: '¿Debo dejar de caminar si me duele el talón?',
      cites: [CITE.guideline],
      a: 'El descanso total por lo general no es necesario. La guía de 2023 recomienda modificar la actividad, no dejar de moverse. Camina una distancia que tu talón pueda manejar sin empeorar la mañana siguiente. Acorta la distancia si hace falta y después recupérala poco a poco. Zapatos de buen soporte y una superficie más suave ayudan.',
    },
    {
      q: '¿El dolor de talón al caminar es fascitis plantar?',
      cites: [CITE.guideline, CITE.fatPadReview],
      a: 'Es la causa más común, pero no la única. El dolor de la fascitis plantar se ubica en la parte interna y delantera del talón y también es peor en los primeros pasos después de descansar. La atrofia de la almohadilla grasa causa un dolor profundo y central, peor sobre superficies duras. La tendinitis de Aquiles duele en la parte de atrás del talón. Una fractura por estrés aumenta con la actividad y puede doler en reposo. Consulta a un profesional de la salud si no estás seguro.',
    },
    {
      q: '¿Cuál es el mejor ejercicio para el dolor de talón al caminar?',
      cites: [CITE.guideline, CITE.siriphorn],
      a: 'El estiramiento de la fascia plantar y los estiramientos de pantorrilla llevan el grado de evidencia más alto (A) en la guía de 2023. Un metaanálisis encontró que los dos redujeron el dolor en comparación con no estirar. Haz el estiramiento de la fascia plantar después de caminar y los estiramientos de pantorrilla en la mayoría de las sesiones. El fortalecimiento de la pantorrilla (grado B en la guía) aumenta la capacidad que la cadena necesita para manejar caminatas más largas.',
    },
    {
      q: '¿El dolor de talón al caminar significa que necesito una radiografía?',
      cites: [CITE.guideline],
      a: 'Por lo general no. La guía de 2023 dice que los estudios de imagen no hacen falta cuando la exploración clínica apunta a fascitis plantar. Si el dolor no ha mejorado después de varias semanas de estiramientos y manejo de la carga, si está empeorando, o si apretar los lados del talón reproduce el dolor (una señal de posible fractura por estrés), los estudios de imagen se vuelven útiles.',
    },
    {
      q: '¿Por qué me duele el talón después de estar de pie pero no después de caminar?',
      cites: [CITE.waters],
      a: 'Estar de pie carga el pie de forma estática, sin la bomba de la pantorrilla que caminar proporciona. La sangre se acumula, la almohadilla grasa se comprime y el arco se fatiga. Caminar alterna entre cargar y descargar, lo que es más fácil para las venas. Si estar de pie es lo que te molesta, [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) cubre ese patrón, incluyendo medias de compresión y tapetes para el piso.',
    },
    {
      q: '¿Cómo puedo saber si mi dolor de talón es una fractura por estrés?',
      cites: [CITE.patelStressFracture],
      a: 'El dolor de la fractura por estrés normalmente aumenta con la actividad, apareció después de un aumento repentino en el volumen de caminata o carrera, y no se alivia mucho con el descanso. Apretar los lados del talón puede reproducirlo. El dolor de la fascitis plantar suele calmarse cuando entras en calor y es peor en los primeros pasos después de descansar. Si el patrón encaja con una fractura, consulta a un profesional de la salud antes de hacer ejercicios.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída',
      'no puedes apoyar el pie, o cojeas',
      'te duele al apretar los lados del talón, lo que puede apuntar a una fractura por estrés',
      'el dolor de talón sigue empeorando con cada caminata a pesar de acortar la distancia',
      'viene con entumecimiento, hormigueo o ardor',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'te duelen los dos talones y la rigidez de la mañana dura más de 30\u00A0minutos, sobre todo si otras articulaciones están afectadas',
      'el dolor te despierta por la noche o está presente en reposo',
      'no ha mejorado después de varias semanas de estiramientos, trabajo de pantorrilla y manejo de la carga',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'No tienes que adivinar los ejercicios, las dosis ni cuándo subir de nivel. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta es dolor de la mañana de 1/10 o menos durante 14\u00A0días seguidos. Si ayer caminaste más de lo habitual y la puntuación de la mañana sube, la sesión se ajusta sola.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que se cumple la meta de la mañana), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, para que puedas ver si el trabajo está subiendo tu umbral al caminar.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si el dolor de talón al caminar sigue empeorando a pesar de los ejercicios, consulta a un profesional de la salud primero.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor de talón al caminar',
  campaign: 'guide-heel-after-walking-es',
};
