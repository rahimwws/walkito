import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const INSOLES_VS_EXERCISES_ES: Guide = {
  lang: 'es',
  page: 'insolesVsExercises',
  mainSource: CITE.whittakerOrthoses,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Plantillas ortopédicas o ejercicios: ¿qué sirve?',
  description:
    '¿Plantillas ortopédicas o ejercicios? Qué encontraron los ensayos en dolor de talón y pie plano, a medida o de farmacia, y cómo combinarlos.',
  h1: 'Plantillas o ejercicios: ¿necesitas plantillas ortopédicas para el dolor de pie?',
  lede:
    'La mayoría de las personas con dolor de talón o pie plano no necesita plantillas ortopédicas a medida. En los ensayos, las plantillas dan un alivio del dolor pequeño y de corta duración, y las de farmacia funcionan más o menos igual que las hechas a medida. El ejercicio aumenta la capacidad del pie y la pantorrilla, y la guía para el dolor de talón le da un grado más alto. Las plantillas son un complemento razonable, no un reemplazo.',
  takeaways: [
    'Una revisión de 19\u00A0ensayos (1\u00A0660\u00A0personas) encontró que las plantillas aliviaron el dolor de talón más que una plantilla simulada solo a mediano plazo, y por poco, sin diferencia entre plantillas a medida y prefabricadas (Whittaker y colegas, 2018).',
    'En un ensayo con 185\u00A0personas con dolor de talón, las plantillas a medida no funcionaron mejor que las simuladas a los tres meses, y el manejo con el médico general funcionó un poco mejor que las plantillas a medida (Rasenberg y colegas, 2021).',
    'La guía de 2023 para el dolor de talón recomienda **no** usar plantillas ortopédicas solas para el alivio a corto plazo (grado B) y las permite junto con otras medidas (grado C). El estiramiento recibe una **A** y el entrenamiento de fuerza una **B** (Koc y colegas, 2023).',
    'En un estudio pequeño con 18\u00A0adultos jóvenes con pie plano, tres meses de plantillas a medida fueron seguidos de una reducción de entre el 9,6 y el 17,4\u00A0% en el tamaño de músculos pequeños del pie (Protopapas y Perry, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué diferencia hay entre plantillas, plantillas ortopédicas y ejercicios?',
      paragraphs: [
        'Una **plantilla** es cualquier cosa que metes en el zapato. Una **plantilla ortopédica** (ortesis plantar) es una plantilla con forma para sostener el arco y quitarle carga al talón. Las **prefabricadas** se compran hechas. Las **a medida** se fabrican a partir de un escaneo o molde de tu pie, por lo general con un podólogo (especialista en pies), y cuestan mucho más. Las dos cambian la carga sobre el pie mientras las usas. El ejercicio cambia el tejido en sí, para que el pie y la pantorrilla soporten más carga con o sin plantilla.',
      ],
    },
    {
      h2: '¿Las plantillas ayudan con la fascitis plantar?',
      keyFact: 'En una revisión de 19\u00A0ensayos con 1\u00A0660\u00A0personas, las plantillas aliviaron el dolor de talón más que las plantillas simuladas solo a mediano plazo, y las plantillas a medida y las prefabricadas no se diferenciaron en ningún momento (Whittaker y colegas, 2018).',
      paragraphs: [
        'Un poco, por un tiempo. La fascitis plantar es la irritación de la fascia plantar, la banda de tejido bajo el arco. La prueba justa compara una plantilla real con una **simulada**: una plantilla plana y blanda que parece real pero no da soporte.',
        'En un ensayo con 135\u00A0personas, tanto una plantilla prefabricada como una a medida mejoraron la función unos 8\u00A0puntos en una escala de 0 a 100 frente a una simulada a los tres meses (Landorf y colegas, 2006). La diferencia en el dolor fue de tamaño parecido, pero no estadísticamente clara. A los doce meses, ningún grupo se diferenciaba.',
        'Una revisión sistemática juntó 19\u00A0ensayos aleatorizados con 1\u00A0660\u00A0personas (Whittaker y colegas, 2018). A mediano plazo, más o menos el segundo y tercer mes, las plantillas aliviaron el dolor más que una simulada, con evidencia de calidad moderada. El efecto fue pequeño, y los autores dijeron que era «incierto si es un cambio clínicamente importante». A corto plazo y a más largo plazo, no hubo un beneficio claro.',
        'La guía de 2023 para el dolor de talón lo interpreta igual: **no** usar plantillas ortopédicas solas para el alivio a corto plazo (grado B en contra), pero **se pueden** usar junto con otras medidas (grado C).',
      ],
      figure: {
        id: 'plantar-fascia',
        caption: 'La fascia plantar va del talón a los dedos. Una plantilla le quita algo de carga; el ejercicio cambia cuánta carga puede soportar.',
        alt: 'La planta de un pie con la fascia plantar resaltada del talón a los dedos',
      },
      cites: [CITE.landorf2006, CITE.whittakerOrthoses, CITE.guideline],
    },
    {
      h2: '¿Valen la pena las plantillas ortopédicas a medida?',
      keyFact: 'En un ensayo con 185\u00A0personas con dolor de talón, las plantillas a medida no funcionaron mejor que las simuladas a los tres meses, y las personas manejadas por su médico general reportaron un dolor en los primeros pasos 1,48\u00A0puntos menor que las que usaron plantillas a medida (Rasenberg y colegas, 2021).',
      paragraphs: [
        'Para el dolor de talón común, la investigación dice que por lo general no. La revisión de Whittaker **no encontró diferencia entre plantillas a medida y prefabricadas en ningún momento**, y la guía de 2023 señala «una similitud en los resultados entre las ortesis a medida y las prefabricadas».',
        'El ensayo holandés STAP asignó al azar a 185\u00A0adultos con dolor de talón a manejo con el médico general, a una plantilla a medida hecha por un podólogo o a una plantilla simulada (Rasenberg y colegas, 2021). **Todos los grupos recibieron además un folleto con ejercicios.** A los tres meses, las plantillas a medida no funcionaron mejor que las simuladas. El grupo del médico general salió mejor que el de las plantillas a medida: cerca de 1\u00A0punto menos de dolor durante la actividad y 1,5\u00A0puntos menos de dolor en los primeros pasos, en una escala de 0 a 10. Un análisis de costos del mismo ensayo, a lo largo de unos seis meses, concluyó que las plantillas a medida «no son costo-efectivas» frente al manejo con el médico general.',
        'Las plantillas ortopédicas a medida todavía pueden ayudar a algunas personas (mira abajo). Pero si quieres una plantilla para el dolor de talón, un soporte de arco de farmacia que te quede bien es la primera opción razonable.',
      ],
      cites: [CITE.whittakerOrthoses, CITE.guideline, CITE.rasenbergStap, CITE.rasenbergCost],
    },
    {
      h2: '¿Qué hacen los ejercicios que no hacen las plantillas?',
      keyFact: 'En un ensayo con 48\u00A0personas que usaban plantillas, el grupo que añadió elevaciones de talón con carga obtuvo 29\u00A0puntos mejor en el Foot Function Index a los tres meses que el grupo que añadió estiramientos (Rathleff y colegas, 2015).',
      paragraphs: [
        'El ejercicio cambia el tejido, así que el cambio dura después de la sesión. La guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla un grado **A** y al entrenamiento de fuerza una **B**.',
        'En un ensayo, las 48\u00A0personas con fascitis plantar recibieron una plantilla (Rathleff y colegas, 2015). La mitad añadió estiramientos diarios; la otra mitad añadió una elevación de talón con carga y una toalla bajo los dedos, cada dos días. A los tres meses, el grupo de las elevaciones obtuvo 29\u00A0puntos mejor en el Foot Function Index (una puntuación de 0 a 100 de dolor y discapacidad del pie). A los seis y doce meses los grupos estaban igualados. La plantilla era la misma en los dos grupos; el ejercicio marcó la diferencia al principio. La rutina completa está en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'Grado A en la guía para el estiramiento de la fascia plantar y de la pantorrilla.' },
          dose: 'Walkito empieza con 2\u00A0repeticiones de 30\u00A0segundos, cada pie',
          how: 'Siéntate y cruza un tobillo sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. Mantén y suelta. Es más útil antes de tus primeros pasos en la mañana.',
          often: 'Diario',
          feel: 'Un tirón a lo largo del arco, no dolor agudo',
          stop: 'Dolor de 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás con suavidad',
          alt: 'Una figura sentada jala hacia atrás los dedos de un pie, con el arco resaltado',
        },
        {
          name: 'Elevación de talones con toalla',
          evidence: { level: 'strong', why: 'El ejercicio del ensayo de Rathleff de 2015. Grado B en la guía para el entrenamiento de fuerza.' },
          dose: 'En el ensayo, las personas progresaron de 3\u00A0series de 12\u00A0repeticiones pesadas a 5\u00A0series de 8. En Walkito llega después de elevaciones de talón más fáciles, con 4\u00A0series de 10, cada pierna, con el mismo ritmo de 3-2-3 y peso añadido, como una mochila, cuando tienes un escalón',
          how: 'Párate en un pie en un escalón, con una toalla enrollada bajo los dedos. Sube en tres segundos, mantén dos y baja en tres. Agárrate de un barandal. La toalla dobla los dedos hacia arriba, lo que carga la fascia plantar junto con la pantorrilla.',
          often: 'Cada dos días',
          feel: 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco',
          stop: 'Dolor de 6/10, o la mañana siguiente está claramente peor',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos para subir, dos arriba, tres para bajar',
          alt: 'Una figura en un escalón sube en puntas con un pie, con una toalla enrollada bajo los dedos',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: '¿Las plantillas ayudan con el pie plano?',
      paragraphs: [
        'La evidencia es escasa para las dos opciones. El pie plano (un arco bajo) a menudo no causa ningún dolor, y en ese caso no hay nada que corregir. Mira [pie plano](/es/pie-plano/).',
        'Para adultos con pie plano flexible, una revisión encontró 13\u00A0estudios, solo dos de ellos aleatorizados (Banwell y colegas, 2014). No encontró «evidencia de alto nivel» para las plantillas ortopédicas y solo evidencia de bajo nivel de que alivian el dolor. Del lado del ejercicio, en un ensayo con 45\u00A0adultos, cerca de mes y medio de ejercicios de pie mejoró la postura del pie más que las plantillas de arco a medida, y ejercicio más plantillas también superó a solo plantillas (Kirmizi y colegas, 2024). En otro ensayo con 52\u00A0personas, un programa de ejercicios cambió la forma del arco más que un grupo de control (Brijwasi y Borkar, 2023). Ninguno de los dos reportó el dolor como resultado principal.',
        'Para niños, una revisión Cochrane de 16\u00A0ensayos (1\u00A0058\u00A0niños) encontró evidencia de certeza baja a muy baja, y concluyó que las plantillas ortopédicas a medida, que son caras, no tienen evidencia que las respalde en niños con pie plano flexible sin dolor (Evans y colegas, 2022). Mira [pie plano en niños](/es/pie-plano-en-ninos/). Los ejercicios de aquí y la app Walkito son para adultos.',
      ],
      exercises: [
        {
          name: 'Pie corto, sentado',
          evidence: { level: 'early', why: 'Cambió la forma del arco en ensayos pequeños, incluido uno en el que los ejercicios de pie superaron a las plantillas a medida en la postura. El dolor no fue el resultado principal.' },
          dose: 'Walkito empieza con 3\u00A0series de 8, manteniendo 5\u00A0segundos, cada pie',
          how: 'Siéntate con el pie apoyado en el piso. Sin doblar los dedos, jala la parte delantera del pie hacia el talón para que el arco suba un poco. Mantén y relaja. Si los dedos se aferran al piso, estás usando los músculos equivocados.',
          often: 'La mayoría de los días',
          feel: 'El arco subiendo, dedos relajados',
          stop: 'Un calambre que no se quita, o dolor de 6/10',
          media: 'short_foot_seated',
          caption: 'Pie corto: jala la parte delantera del pie hacia el talón',
          alt: 'Una pierna sentada con el pie en el piso, con el arco resaltado mientras sube',
        },
      ],
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot, CITE.brijwasi, CITE.evansCochrane2022],
    },
    {
      h2: '¿Las plantillas ortopédicas debilitan los pies?',
      paragraphs: [
        'Puede que un poco. En un estudio con 18\u00A0adultos jóvenes con pie plano, tres músculos pequeños dentro del pie se redujeron entre un 9,6 y un 17,4\u00A0% después de tres meses de usar plantillas a medida (Protopapas y Perry, 2020). Los grupos no fueron aleatorizados y el estudio fue pequeño, así que tómalo como una señal, no como un hecho comprobado.',
        'El ejercicio parece compensarlo. En un ensayo aleatorizado con 28\u00A0personas con pie plano, todas usaron plantillas ortopédicas durante dos meses y la mitad también hizo el ejercicio de pie corto (Jung y colegas, 2011). El músculo a lo largo del arco interno creció en los dos grupos, pero más con el ejercicio, y la fuerza del dedo gordo también aumentó más. Si usas plantillas todo el día, mantén el pie trabajando con unos minutos de [ejercicios para fortalecer los pies](/es/ejercicios-para-fortalecer-los-pies/).',
      ],
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
    },
    {
      h2: 'Plantillas o ejercicios: comparación rápida',
      table: {
        caption: 'Plantillas y ejercicios comparados, según los estudios de esta página',
        head: ['', 'Plantillas y plantillas ortopédicas', 'Ejercicios'],
        rows: [
          ['Cómo funcionan', 'Cambian la carga sobre el pie mientras las usas', 'Cambian el tejido, para que tolere más carga'],
          ['Evidencia en dolor de talón', 'Beneficio pequeño a mediano plazo frente a la simulada; ninguno a los doce meses', 'Estiramiento grado **A**, fuerza grado **B**'],
          ['Grado de la guía para dolor de talón', '**B en contra** solas; **C** con otras medidas', 'La base del manejo de primera línea'],
          ['A medida o de farmacia', 'Sin diferencia en los ensayos', 'No necesitas equipo'],
          ['Evidencia en pie plano', 'Evidencia de bajo nivel para el dolor', 'Ensayos pequeños muestran cambios en el arco; pocos datos de dolor'],
          ['Costo', 'Bajo las prefabricadas, mucho más alto las a medida', 'Gratis'],
          ['Desventaja', 'Pueden achicar músculos pequeños del pie si se usan solas', 'Pueden avivar el dolor si subes demasiado rápido'],
        ],
      },
      cites: [CITE.whittakerOrthoses, CITE.landorf2006, CITE.guideline, CITE.banwellPlanus, CITE.protopapasOrthotic],
    },
    {
      h2: '¿Cuándo tiene sentido usar plantillas?',
      bullets: [
        '**Turnos largos de pie.** Un soporte de arco firme puede hacer más llevadero el día mientras el ejercicio aumenta la capacidad. Mira [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/).',
        '**Un brote.** Una plantilla o una taloneta pueden quitarle lo peor mientras los primeros pasos duelen mucho. El [vendaje](/es/vendaje-fascitis-plantar/) es otra opción a corto plazo, con un grado más alto en la guía.',
        '**Pie cavo doloroso.** En un ensayo con 154\u00A0adultos con arco alto doloroso (pie cavo), las plantillas a medida aliviaron el dolor más que una simulada a los tres meses (Burns y colegas, 2006). Mira [ejercicios para el pie cavo](/es/ejercicios-pie-cavo/).',
        '**Disfunción del tendón tibial posterior**, cuando se debilita el tendón que sostiene el arco. Los ensayos combinan una plantilla ortopédica con ejercicio (Houck y colegas, 2015). Mira [ejercicios para el tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/).',
        '**Diabetes o menos sensibilidad en los pies.** Aquí, las plantillas que reparten la presión suelen ser parte del cuidado del pie, ajustadas por un profesional de la salud.',
      ],
      cites: [CITE.guideline, CITE.burnsCavus, CITE.houckPTTD],
    },
    {
      h2: '¿Cómo combinar plantillas y ejercicios?',
      paragraphs: [
        'Usa la plantilla para la comodidad y los ejercicios para el cambio. Tanto en el ensayo de Rathleff como en el STAP, todos recibieron indicaciones de ejercicio además de lo que llevaran en el zapato. Usa un soporte de arco de farmacia los días que duele, y empieza los estiramientos y las elevaciones de talón al mismo tiempo. Conforme el dolor de la mañana se calme, prueba ratos cortos sin la plantilla, y luego más largos. Walkito puede organizar la parte del ejercicio como un plan semanal: una vez a la semana sube un nivel tu ejercicio principal cuando calificaste como fáciles tus últimas dos sesiones con él y el dolor de la mañana no ha subido.',
        'Si unos meses de estiramiento y trabajo de fuerza diarios no han ayudado, consulta a un profesional de la salud. Ese es el momento en que vale la pena hablar de una plantilla a medida, entre otras opciones, con alguien que haya revisado tu pie.',
      ],
      cites: [CITE.rathleff, CITE.rasenbergStap],
    },
  ],
  faq: [
    {
      q: '¿Necesito plantillas ortopédicas para la fascitis plantar?',
      cites: [CITE.guideline, CITE.whittakerOrthoses],
      a: 'La mayoría de las personas no. La guía de 2023 para el dolor de talón recomienda no usar plantillas ortopédicas solas para el alivio a corto plazo (grado B) y las permite junto con otras medidas (grado C). Una revisión de 19\u00A0ensayos encontró solo un beneficio pequeño a mediano plazo frente a plantillas simuladas. El estiramiento (grado A) y el fortalecimiento de pantorrilla (grado B) son la base, y una plantilla puede ser un complemento para la comodidad.',
    },
    {
      q: '¿Las plantillas a medida son mejores que las de farmacia?',
      cites: [CITE.whittakerOrthoses, CITE.rasenbergStap],
      a: 'Para el dolor de talón, los ensayos no han encontrado diferencia. Una revisión de 19\u00A0ensayos no encontró diferencia entre plantillas a medida y prefabricadas en ningún momento (Whittaker y colegas, 2018). En un ensayo con 185\u00A0adultos, las plantillas a medida no funcionaron mejor que las simuladas a los tres meses (Rasenberg y colegas, 2021). Un soporte de arco de farmacia que te quede bien es una primera opción razonable.',
    },
    {
      q: '¿Las plantillas ortopédicas debilitan los pies?',
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
      a: 'Hay una pequeña señal de que pueden hacerlo. En un estudio no aleatorizado con 18\u00A0adultos jóvenes con pie plano, tres meses de plantillas a medida fueron seguidos de una reducción de entre el 9,6 y el 17,4\u00A0% en el tamaño de tres músculos pequeños del pie. En un ensayo con 28\u00A0personas, añadir el ejercicio de pie corto a las plantillas aumentó más el músculo y la fuerza del dedo gordo que las plantillas solas.',
    },
    {
      q: '¿Las plantillas ayudan con el pie plano?',
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot],
      a: 'La evidencia es débil. Una revisión de 13\u00A0estudios no encontró evidencia de alto nivel de que las plantillas ortopédicas ayuden a adultos con pie plano flexible, y solo evidencia de bajo nivel para el dolor (Banwell y colegas, 2014). En un ensayo con 45\u00A0adultos, los ejercicios de pie mejoraron la postura del pie más que las plantillas de arco a medida (Kirmizi y colegas, 2024). Un pie plano que no duele no necesita nada.',
    },
    {
      q: '¿Mi hijo con pie plano necesita plantillas?',
      cites: [CITE.evansCochrane2022],
      a: 'Por lo general no, si los pies no le duelen. Una revisión Cochrane de 16\u00A0ensayos con 1\u00A0058\u00A0niños encontró evidencia de certeza baja a muy baja para las plantillas ortopédicas, y concluyó que las plantillas a medida, que son caras, no tienen evidencia que las respalde en niños con pie plano flexible sin dolor (Evans y colegas, 2022). Un niño con dolor de pie, rigidez o que cojea debe ver a un profesional de la salud.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída, o no puedes apoyar el pie',
      'apretar los lados del talón duele mucho, lo que puede apuntar a una fractura por estrés',
      'hay entumecimiento, hormigueo o ardor en el pie',
      'el pie está rojo, caliente o hinchado, o tienes fiebre',
      'un arco se ha caído hace poco, o no puedes subir en puntas con ese pie',
      'tienes diabetes, mala circulación o menos sensibilidad en los pies',
      'un niño tiene pie plano con dolor, rigidez o cojera',
      'el dolor no ha mejorado después de unos meses de estiramiento y trabajo de fuerza diarios',
    ],
  },
  program: {
    h2: 'Hacer los ejercicios como un plan',
    text: 'Una plantilla se mete en el zapato una vez. El ejercicio solo funciona si eres constante. Walkito arma un plan una semana a la vez para el dolor de talón o el pie plano, empezando con estiramientos como el de la fascia plantar (2\u00A0repeticiones de 30\u00A0segundos) y trabajo del arco como el pie corto (3\u00A0series de 8 manteniendo 5\u00A0segundos), y luego sube un nivel tu ejercicio principal cuando lo calificas como fácil dos veces seguidas y el dolor de la mañana se mantiene estable.',
    more: [
      'Eliges sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días al principio (cada 28 una vez que alcanzas una meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Walkito es un programa de ejercicios para adultos. No diagnostica, no reemplaza a un profesional de la salud y funciona bien junto con una plantilla.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Plantillas o ejercicios',
  campaign: 'guide-insoles-vs-exercises-es',
};
