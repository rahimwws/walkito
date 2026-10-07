import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/severs.ts` (2026-10-07), written around the
 * Spanish queries «enfermedad de Sever», «dolor de talón niños»,
 * «apofisitis calcánea». Figures, grades and qualifiers are identical to
 * the English page. No new citations.
 */

export const SEVERS_ES: Guide = {
  lang: 'es',
  page: 'severs',
  mainSource: CITE.wiegerinck,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Enfermedad de Sever: dolor de talón en niños',
  description:
    'La enfermedad de Sever causa dolor de talón en niños de 8 a 15\u00A0años. Evidencia sobre taloneras, estiramientos, manejo de carga y cuándo consultar.',
  h1: 'Enfermedad de Sever: qué es, qué ayuda y cuándo consultar a un profesional',
  lede:
    'La enfermedad de Sever, también llamada apofisitis calcánea, es la causa más común de dolor de talón en niños. Sucede cuando la placa de crecimiento en la parte de atrás del hueso del talón se irrita por el tirón repetido del tendón de Aquiles, normalmente durante un estirón de crecimiento y un deporte que implica correr o saltar. No es una enfermedad en el sentido habitual. Se resuelve sola cuando la placa de crecimiento se cierra.',
  intro: [
    'Esta página está escrita para padres y madres. Explica qué pasa en el talón, qué dice la investigación sobre las taloneras, los estiramientos, el manejo de la carga y cuándo el dolor necesita un profesional de la salud en vez de solo descanso. Walkito es una app de ejercicios diseñada para adultos con dolor de talón y de arco. No está diseñada para niños, y nada en esta página es una recomendación de usarla con un niño. Si el dolor de talón de tu hijo no mejora con los pasos de abajo, un especialista en medicina deportiva pediátrica o un podólogo es el siguiente paso.',
  ],
  takeaways: [
    'La enfermedad de Sever afecta a niños de 8 a 15\u00A0años, casi siempre durante un estirón, y se resuelve cuando la placa de crecimiento del calcáneo se cierra, normalmente entre los 12 y los 17\u00A0años (revisión de StatPearls, 2024).',
    'En un ensayo con 101\u00A0niños, esperar y observar, una plantilla con elevación de talón y ejercicios excéntricos supervisados redujeron el dolor de talón de forma significativa en tres meses, sin diferencia entre los tres al final del seguimiento (Wiegerinck y colegas, 2016).',
    'En un ensayo cruzado con 51\u00A0niños varones, una talonera redujo el dolor en un 80\u00A0por ciento en comparación con una cuña de talón, medido en la escala Borg CR-10 (Perhamre y colegas, 2011).',
    'Un ensayo factorial de 12\u00A0meses con 124\u00A0niños encontró una ventaja relativa de las elevaciones de talón frente a las plantillas prefabricadas a los 2\u00A0meses, pero no a los 12\u00A0meses (James y colegas, 2016).',
    'La placa de crecimiento suele aparecer entre los 7 y los 9\u00A0años y se fusiona entre los 15 y los 17. Mientras no se cierre, la recurrencia es común, sobre todo durante los estirones y las temporadas deportivas.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es la enfermedad de Sever?',
      paragraphs: [
        'La enfermedad de Sever es una inflamación de la apófisis calcánea, la placa de crecimiento en la parte de atrás del hueso del talón donde se inserta el tendón de Aquiles. En un niño en crecimiento, esta placa de crecimiento es de cartílago, más blando y más vulnerable al estrés que el hueso alrededor. El tendón de Aquiles y la fascia plantar tiran de esta zona. Cuando un niño corre, salta o hace deporte sobre superficies duras, esas fuerzas se repiten cientos de veces por sesión.',
        'Durante un estirón de crecimiento, el hueso del talón puede crecer más rápido que los músculos de la pantorrilla y el tendón de Aquiles, lo que aumenta la tensión sobre la placa de crecimiento. Esa combinación de crecimiento óseo rápido e impacto repetido es lo que causa la irritación.',
        'La enfermedad de Sever no es una fractura y no daña la placa de crecimiento de forma permanente. Se clasifica como una apofisitis por tracción: la placa de crecimiento recibe un tirón, no se rompe. Cuando la placa de crecimiento se cierra y se convierte en hueso sólido, la condición no puede volver.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: '¿A qué edad pasa y a quién le da?',
      paragraphs: [
        'La enfermedad de Sever afecta a niños de entre unos 8 y 15\u00A0años. La apófisis calcánea aparece por primera vez alrededor de los 7 a 9\u00A0años y normalmente se fusiona entre los 15 y los 17. Los niños se ven afectados de dos a tres veces más que las niñas, con un inicio típico alrededor de los 12\u00A0años en niños y los 11 en niñas. Cerca del 60\u00A0por ciento de los casos involucran los dos talones.',
        'Representa entre el 2 y el 16\u00A0por ciento de las consultas de niños en clínicas deportivas. Los deportes más asociados son el fútbol, el basquetbol, el atletismo, el campo traviesa, la gimnasia y el tenis. El patrón es predecible: tiende a aparecer al inicio de una temporada deportiva o durante un estirón, cuando la carga sobre el talón sube de golpe.',
        'Los factores de riesgo incluyen niveles altos de actividad con carrera y salto, pantorrillas tensas, poca flexibilidad de tobillo, un IMC alto, superficies de juego duras y zapatos o tacos con poca amortiguación.',
      ],
      cites: [CITE.nietoGilSever, CITE.micheliSever, CITE.wiegerinck, CITE.jamesSever],
    },
    {
      h2: '¿Cómo se siente la enfermedad de Sever?',
      paragraphs: [
        'El síntoma principal es dolor en la parte de atrás o en los lados del talón, normalmente durante o después de la actividad y sobre todo después de correr o saltar. El dolor suele describirse como un moretón. Rara vez hay hinchazón o moretón visibles. Apretar o comprimir los lados del talón normalmente reproduce el dolor. Esta prueba de compresión es el chequeo clínico habitual.',
        'A diferencia de la fascitis plantar en adultos, que duele más en los primeros pasos después de descansar, el dolor de la enfermedad de Sever tiende a empeorar con la actividad y no mejora al caminar. Algunos niños empiezan a cojear o caminan de puntas para no cargar el talón.',
        'El dolor puede ir de leve, solo notorio durante el deporte, hasta lo bastante fuerte como para que el niño deje de jugar por completo.',
      ],
    },
    {
      h2: '¿Qué ayuda en la enfermedad de Sever? La evidencia',
      paragraphs: [
        'La base de evidencia para la enfermedad de Sever es pequeña pero va creciendo. Las tres opciones principales estudiadas son el manejo de la carga (reducir la actividad que causa dolor), las taloneras o plantillas, y los estiramientos o ejercicios de fortalecimiento. Las tres han mostrado beneficio, y ninguna ha demostrado ser claramente mejor que las otras al final del seguimiento.',
        'En un ensayo de 2016 con 101\u00A0niños de 8 a 15\u00A0años, Wiegerinck y colegas compararon tres enfoques: esperar y observar con el consejo de dejar la actividad dolorosa, una plantilla con elevación de talón y ejercicios excéntricos supervisados. Los tres grupos mejoraron de forma significativa. A las seis semanas, el grupo de la plantilla estaba más satisfecho que los otros dos. A los tres meses, no quedaba una diferencia clínicamente relevante entre los tres.',
        'En un ensayo factorial separado de 2016 con 124\u00A0niños, James y colegas compararon elevaciones de talón frente a plantillas prefabricadas, y reemplazo de calzado frente a no reemplazo. Las elevaciones de talón tuvieron una pequeña ventaja sobre las plantillas prefabricadas a los 2\u00A0meses en el dominio físico del Oxford Ankle Foot Questionnaire. A los 6 y 12\u00A0meses, no quedó diferencia entre ninguna combinación.',
        'En un ensayo cruzado con 51\u00A0niños varones, Perhamre y colegas compararon una talonera de 3\u00A0mm con una cuña de talón de 5\u00A0mm. La talonera redujo el dolor en un 80\u00A0por ciento en la escala Borg CR-10, lo que sugiere que la amortiguación y la absorción del impacto pueden importar más que simplemente levantar el talón.',
      ],
      sourceNote:
        'Wiegerinck 2016: 101 niños, EVA-dolor mejoró de forma significativa en los 3 grupos (p<0,005), sin diferencia entre grupos a los 3 meses. James 2016: 124 niños, efecto principal elevación de talón p=0,04 a 1-2 meses (solo dominio físico), sin efecto a los 6 ni 12 meses. Perhamre 2011: 51 niños varones, cruzado, talonera Borg CR-10 bajó de 7 a 2.',
      cites: [CITE.wiegerinck, CITE.jamesSever, CITE.perhamreHeelCup],
    },
    {
      h2: 'Manejo de la carga y modificación de la actividad',
      paragraphs: [
        'El manejo de la carga es la base del cuidado de la enfermedad de Sever. No significa dejar todo deporte. Significa reducir las actividades que causan dolor, sobre todo correr y saltar en superficies duras, hasta que el dolor se calme. La mayoría de los niños pueden volver al deporte en dos a ocho semanas si la carga se maneja a tiempo.',
        'Los pasos prácticos incluyen reducir los entrenamientos en lugar de parar por completo, evitar los tacos en pisos duros cuando sea posible, cambiar a zapatos con buena amortiguación, y saltarse las partes de la práctica con más carrera y salto. Algunos entrenadores dejan que los niños participen en ejercicios de técnica mientras se saltan los sprints y el acondicionamiento.',
        'Lo más difícil del manejo de la carga es que la enfermedad de Sever tiende a volver. Un niño puede sentirse mejor después de dos semanas de descanso, regresar a la actividad completa y que el dolor regrese. Eso no significa que la primera ronda de descanso falló. Significa que la placa de crecimiento sigue abierta y sigue siendo vulnerable. La recurrencia es normal hasta la madurez esquelética.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Taloneras y plantillas',
      paragraphs: [
        'Las taloneras son una de las intervenciones más prácticas para la enfermedad de Sever. Amortiguan el talón, absorben el impacto y reducen las fuerzas de pico que llegan a la placa de crecimiento. El ensayo cruzado de Perhamre encontró que una talonera redujo el dolor en un 80\u00A0por ciento en comparación con una cuña de talón en 51\u00A0niños, lo que sugiere que la absorción del impacto en el talón importa más que simplemente cambiar el ángulo del talón.',
        'En el ensayo factorial de James, las elevaciones de talón (un tipo de plantilla que levanta el talón) mostraron una pequeña ventaja a corto plazo frente a las plantillas prefabricadas a los 2\u00A0meses, pero no a los 12\u00A0meses. Las plantillas a medida no se probaron en ninguno de estos ensayos.',
        'Un punto de partida razonable es una talonera económica de venta libre, usada en los dos zapatos y durante el deporte. Si no ayuda, un profesional de la salud puede evaluar si una plantilla a medida vale el costo.',
      ],
      cites: [CITE.perhamreHeelCup, CITE.jamesSever],
    },
    {
      h2: 'Estiramiento y fortalecimiento de la pantorrilla',
      paragraphs: [
        'Las pantorrillas tensas aumentan el tirón sobre la placa de crecimiento, y la rigidez de la pantorrilla es uno de los factores de riesgo reconocidos de la apofisitis calcánea. Estirar el gastrocnemio (el músculo más grande y externo de la pantorrilla, que se estira con la rodilla estirada) y el sóleo (el músculo más profundo, que se estira con la rodilla doblada) es una recomendación habitual.',
        'En el ensayo de Wiegerinck, el grupo de ejercicio hizo un programa de fortalecimiento excéntrico de la pantorrilla bajo supervisión de un fisioterapeuta. Este grupo mejoró tanto como los de la plantilla y los de esperar y observar. El estiramiento y el fortalecimiento suave son seguros y pueden ayudar al reducir la tracción sobre la placa de crecimiento, pero la evidencia no muestra que sean mejores que las taloneras o el manejo de la carga por sí solos.',
        'Los ejercicios para niños con apofisitis calcánea deben ser supervisados o enseñados por un profesional de la salud o un fisioterapeuta. La dosis y la progresión dependen de la edad del niño, su nivel de dolor y las exigencias de su deporte. Un niño con dolor agudo que está cojeando necesita descansar primero, no hacer ejercicios.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: '¿Walkito sirve para un niño con enfermedad de Sever?',
      paragraphs: [
        'No. Walkito es una app de ejercicios diseñada para adultos con dolor de talón y de arco. Sus dosis de ejercicio, umbrales de dolor y reglas de progresión están pensados para cuerpos adultos. La placa de crecimiento de un niño es una estructura muy distinta del hueso fusionado del talón de un adulto, y las reglas de carga son diferentes.',
        'Si tu hijo ya fue evaluado por un profesional de la salud y estás buscando orientación de ejercicios, un especialista en medicina deportiva pediátrica o un podólogo puede armar un programa adecuado para la edad y el deporte del niño. Las guías para adultos en este sitio, como [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) y [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/), trabajan los mismos músculos pero con dosis y umbrales de adulto.',
      ],
    },
    {
      h2: '¿Cuánto dura y vuelve a aparecer?',
      paragraphs: [
        'La enfermedad de Sever normalmente se resuelve en semanas a meses con manejo de la carga y cuidados de soporte. La mayoría de los niños pueden volver al deporte en dos a ocho semanas. El dolor suele desaparecer definitivamente cuando la placa de crecimiento se fusiona en hueso sólido, normalmente entre los 12 y los 17\u00A0años dependiendo del sexo y el ritmo de maduración del niño (revisión de StatPearls, 2024).',
        'La recurrencia es común y esperada. Cada estirón de crecimiento y cada nueva temporada deportiva pueden traer el dolor de vuelta. La recurrencia no es señal de que el cuidado anterior falló. Es señal de que la placa de crecimiento sigue abierta. Seguir con taloneras, buen calzado y estiramiento de la pantorrilla durante las temporadas deportivas puede reducir la intensidad y la frecuencia de los brotes.',
        'No se han asociado problemas a largo plazo con la enfermedad de Sever. No daña la placa de crecimiento ni afecta la forma final del hueso.',
      ],
      cites: [CITE.wiegerinck, CITE.jamesSever],
    },
  ],
  faq: [
    {
      q: '¿Qué es la enfermedad de Sever?',
      a: 'La enfermedad de Sever, también llamada apofisitis calcánea, es una inflamación de la placa de crecimiento en la parte de atrás del hueso del talón. Es la causa más común de dolor de talón en niños de 8 a 15\u00A0años, causada por el tirón repetido del tendón de Aquiles al correr, saltar y durante los estirones de crecimiento. No es una enfermedad en sentido estricto y se resuelve cuando la placa de crecimiento se cierra.',
    },
    {
      q: '¿Las taloneras ayudan con la enfermedad de Sever?',
      cites: [CITE.perhamreHeelCup],
      a: 'En un ensayo cruzado con 51\u00A0niños varones, una talonera redujo el dolor de talón en un 80\u00A0por ciento en comparación con una cuña de talón, medido en la escala Borg CR-10 (Perhamre, 2011). Las taloneras amortiguan la placa de crecimiento y absorben el impacto. Una talonera económica de venta libre, usada en los dos zapatos y durante el deporte, es un primer paso razonable.',
    },
    {
      q: '¿Un niño con enfermedad de Sever debe dejar el deporte?',
      cites: [CITE.wiegerinck],
      a: 'No necesariamente. En un ensayo con 101\u00A0niños, reducir la actividad dolorosa fue igual de eficaz que las plantillas de talón o los ejercicios supervisados a los tres meses (Wiegerinck, 2016). La mayoría de los profesionales recomiendan reducir la carrera y el salto en vez de parar todo el deporte. Los ejercicios de técnica que no cargan el talón de forma repetida suelen ser seguros. Se espera volver al deporte completo en dos a ocho semanas.',
    },
    {
      q: '¿La enfermedad de Sever es permanente?',
      a: 'No. La enfermedad de Sever se resuelve por completo cuando la placa de crecimiento del calcáneo se cierra, lo que pasa entre los 12 y los 17\u00A0años según el sexo y la maduración. No se han reportado complicaciones a largo plazo. La recurrencia es común mientras la placa de crecimiento siga abierta, pero cada episodio también se resuelve.',
    },
    {
      q: '¿Los estiramientos ayudan con la enfermedad de Sever?',
      cites: [CITE.wiegerinck],
      a: 'El estiramiento de la pantorrilla es una recomendación habitual porque las pantorrillas tensas aumentan el tirón sobre la placa de crecimiento. En el ensayo de Wiegerinck de 2016, los ejercicios excéntricos supervisados mejoraron el dolor tanto como la plantilla con elevación de talón o esperar y observar. Los estiramientos ayudan, pero no se ha demostrado que sean más rápidos que el manejo de la carga o las taloneras por sí solos.',
    },
    {
      q: '¿En qué se diferencia la enfermedad de Sever de la fascitis plantar?',
      a: 'La enfermedad de Sever afecta la placa de crecimiento en la parte de atrás del talón en niños, mientras que la fascitis plantar es una irritación de la fascia plantar bajo el pie, sobre todo en adultos. El dolor de Sever suele estar en la parte de atrás y en los lados del talón y empeora con la actividad. El de la fascitis plantar suele estar bajo el talón y es peor en los primeros pasos después de descansar. Las dos condiciones tienen causas y caminos de cuidado distintos.',
    },
    {
      q: '¿Walkito puede ayudar a mi hijo con enfermedad de Sever?',
      a: 'Walkito está diseñado para adultos con dolor de talón y de arco. Sus dosis de ejercicio, umbrales de dolor y reglas de progresión están pensados para cuerpos adultos, no para la placa de crecimiento abierta de un niño. Un especialista en medicina deportiva pediátrica o un podólogo es la fuente adecuada para el programa de ejercicios de un niño.',
    },
  ],
  redFlags: {
    h2: 'Consulta a un profesional de la salud si',
    bullets: [
      'el dolor es lo bastante fuerte como para que el niño cojee o no quiera apoyar el talón',
      'el dolor apareció después de un golpe o una caída, lo que podría indicar una fractura en vez de una apofisitis',
      'hay hinchazón visible, enrojecimiento o calor alrededor del talón',
      'el niño tiene fiebre o se siente mal además del dolor de talón',
      'el dolor no mejora después de varias semanas de manejar la carga, usar taloneras y descansar',
      'hay dolor en reposo o el dolor despierta al niño de noche, lo que puede apuntar a algo distinto de la apofisitis',
      'el dolor está en un punto muy específico y va empeorando, lo que puede sugerir una fractura por estrés en vez de una irritación de la placa de crecimiento',
      'el dolor de talón viene acompañado de hinchazón o rigidez en otras articulaciones',
    ],
  },
  program: {
    h2: 'Una nota para padres que buscan una app',
    text: 'Walkito es un programa de ejercicios para adultos con dolor de talón y de arco. No está diseñado para niños, y sus dosis y reglas de progresión asumen un hueso del talón completamente fusionado. Si eres un adulto que lee esta página porque a ti te duele el talón, las guías para adultos pueden ayudar: [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/), [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) o [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/). Para un niño, un profesional de la salud es el punto de partida adecuado.',
  },
  crumb: 'Enfermedad de Sever',
  campaign: 'guide-severs-es',
};
