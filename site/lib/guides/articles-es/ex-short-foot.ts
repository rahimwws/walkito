import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish translation of `articles/ex-short-foot.ts` (2026-10-07), written
 * around «ejercicio pie corto» and «ejercicios para el arco del pie».
 * Figures, doses and qualifiers are identical to English.
 */

export const EX_SHORT_FOOT_ES: Guide = {
  lang: 'es',
  page: 'exShortFoot',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicio de pie corto: cómo hacerlo para el arco del pie',
  description:
    'Cómo hacer el ejercicio de pie corto para el arco del pie: técnica, series y repeticiones, de sentado a de pie, errores y qué dice la investigación.',
  h1: 'Ejercicio de pie corto: cómo hacerlo, series y progresión',
  lede:
    'El ejercicio de pie corto entrena los músculos pequeños dentro del pie para sostener el arco sin encoger los dedos. Llevas la parte delantera del pie hacia el talón para que el pie se acorte y el arco suba. Una revisión narrativa de 2015 lo llamó la base del entrenamiento del «core del pie», y aparece en la mayoría de los programas para pie plano y fascitis plantar que trabajan los músculos intrínsecos del pie.',
  takeaways: [
    'Un estudio con resonancia magnética de 2016 en 8\u00A0deportistas encontró que el pie corto produjo la activación media más alta (hasta 34,9\u00A0%) en tres de los cuatro músculos intrínsecos de la planta que se midieron, comparado con separar los dedos, extender el dedo gordo y extender los otros cuatro dedos (Gooding y colegas, 2016).',
    'Un estudio de electromiografía encontró que el abductor del dedo gordo, el músculo que sostiene la parte interna del arco, trabajó más de cuatro veces más durante el pie corto que al recoger la toalla con los dedos (Jung y colegas, 2011).',
    'Un metaanálisis de 2024 sobre el entrenamiento de pie corto en personas con pie plano encontró que los programas de más de seis semanas mejoraron la caída del navicular, pero los más cortos no llegaron a un resultado significativo (Cheng y colegas, 2024).',
    'Adultos sanos que hicieron pie corto durante cuatro semanas mejoraron más el equilibrio dinámico que un grupo que recogió la toalla con los dedos el mismo tiempo (Lynn y colegas, 2012).',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué es el ejercicio de pie corto?',
      paragraphs: [
        'El pie corto es una contracción isométrica de los músculos intrínsecos del pie. Acortas la distancia entre la parte delantera del pie y el talón, acercando una al otro, y eso sube el arco. Los dedos quedan planos y relajados todo el tiempo. Una revisión de 2015 de McKeon y colegas lo puso como el ejercicio central de su modelo del «core del pie», y comparó los músculos intrínsecos del pie con los músculos profundos del abdomen.',
        'También se le llama «domo del arco», «cúpula plantar» o ejercicio de acortamiento del pie. No es lo mismo que recoger la toalla o encoger los dedos, porque esos ejercicios doblan los dedos y usan los flexores largos de los dedos, que bajan desde la pierna. El pie corto busca trabajar solo los músculos que están completamente dentro del pie.',
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: '¿Cómo se hace el ejercicio de pie corto?',
      paragraphs: [
        'Siéntate en una silla con los pies apoyados en el piso, descalzo. Coloca el pie de forma que el talón, la parte delantera y los cinco dedos toquen el piso. Sin encoger ni apretar los dedos, intenta llevar la parte delantera del pie hacia atrás, hacia el talón. El arco va a subir. Mantén esa contracción y luego suelta.',
        'Piensa en hacer el pie más corto y más alto, no más ancho y más plano. Los dedos no deben apretar el piso, levantarse ni doblarse hacia abajo. Si ves que los dedos se aferran, estás usando los músculos equivocados. Para empezar, pon un dedo de la mano bajo el arco para sentir cómo sube.',
      ],
      exercises: [
        {
          name: 'Pie corto, sentado',
          evidence: { level: 'moderate', why: 'Parte del programa probado en un ensayo aleatorizado de 2023 sobre pie plano (Brijwasi 2023). Por sí solo, un metaanálisis de 2024 encontró resultados significativos solo después de seis semanas.' },
          dose: 'Walkito empieza con 3\u00A0series de 10, mantén 5\u00A0segundos, cada pie',
          how: 'Siéntate con los pies apoyados en el piso. Lleva la parte delantera del pie hacia el talón para que el arco suba. Los dedos quedan relajados y planos. Mantén cinco segundos y suelta.',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El arco subiendo, con los dedos relajados',
          stop: 'El dolor llega a 6/10',
          media: 'short_foot_seated',
          caption: 'Pie corto, sentado: lleva la parte delantera del pie hacia el talón para que el arco suba',
          alt: 'Una figura sentada contrae el arco de un pie con los dedos planos en el piso',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: '¿Qué músculos trabaja el ejercicio de pie corto?',
      paragraphs: [
        'El pie corto trabaja los músculos intrínsecos de la planta: el abductor del dedo gordo, el flexor corto de los dedos, el cuadrado plantar y el abductor del quinto dedo. Estos músculos están completamente dentro del pie y sostienen el arco longitudinal medial desde abajo.',
        'Un estudio con resonancia magnética de 2016, de Gooding y colegas, midió la activación muscular después de 40\u00A0repeticiones de cuatro ejercicios distintos en 8\u00A0deportistas universitarios. El pie corto produjo la activación media más alta en el abductor del quinto dedo (34,9\u00A0%), el abductor del dedo gordo (29,7\u00A0%) y el flexor corto de los dedos (24,8\u00A0%). Un estudio anterior de electromiografía, de Jung y colegas (2011), encontró que el abductor del dedo gordo trabajó más de cuatro veces más durante el pie corto que al recoger la toalla con los dedos.',
        'Por eso el pie corto se considera mejor que recoger la toalla para trabajar específicamente los músculos intrínsecos. Recoger la toalla usa los flexores largos de los dedos, los músculos extrínsecos que van de la pierna a los dedos. El pie corto mantiene más tranquilos esos músculos extrínsecos.',
      ],
      cites: [CITE.gooding, CITE.jung],
    },
    {
      h2: '¿Cómo pasar de sentado a de pie y a una pierna?',
      paragraphs: [
        'Cuando el pie corto sentado se sienta fácil dos sesiones seguidas, el siguiente paso es hacerlo de pie sobre los dos pies. La misma contracción ahora tiene que cargar tu peso. Después, el pie corto a una pierna suma equilibrio y deja ver cualquier diferencia entre tu lado izquierdo y el derecho.',
        'Cada versión es el mismo movimiento. Lo único que cambia es la carga. De pie, el trabajo de los músculos del arco se duplica. A una pierna se vuelve a duplicar, más o menos, y además tienes que estabilizar el tobillo.',
      ],
      exercises: [
        {
          name: 'Pie corto, de pie',
          evidence: { level: 'moderate', why: 'Parte del programa probado en un ensayo aleatorizado de 2023 sobre pie plano (Brijwasi 2023). No se ha probado por sí solo.' },
          dose: 'Walkito empieza con 3\u00A0series de 10, mantén 5\u00A0segundos, los dos pies',
          how: 'Párate con los dos pies en el piso. Lleva la parte delantera de cada pie hacia el talón para que suban los dos arcos. Los dedos quedan planos y largos. Solo se mueve el arco.',
          often: 'Cada sesión, cuando el pie corto sentado se sienta fácil',
          feel: 'El arco trabajando mientras carga tu peso',
          stop: 'El dolor llega a 6/10',
          media: 'short_foot_double',
          caption: 'Pie corto, de pie: dedos planos y largos, solo sube el arco',
          alt: 'Una figura de pie con los dos arcos levantados y los dedos planos',
        },
        {
          name: 'Pie corto, una pierna',
          evidence: { level: 'moderate', why: 'Parte del programa probado en un ensayo aleatorizado de 2023 sobre pie plano (Brijwasi 2023). No se ha probado por sí solo.' },
          dose: 'Walkito empieza con 3\u00A0series de 10, mantén 5\u00A0segundos, cada pie',
          how: 'Párate en un pie. Sube el arco igual que antes. Mantén el dedo gordo apoyando suave contra el piso. Si el dedo gordo se levanta, el arco está compensando en lugar de trabajar.',
          often: 'Cada sesión, cuando el pie corto de pie se sienta fácil',
          feel: 'Más trabajo en el arco, con el dedo gordo apoyado',
          stop: 'El dolor llega a 6/10',
          media: 'short_foot_single',
          caption: 'Pie corto, una pierna: sube el arco y mantén el dedo gordo abajo',
          alt: 'Una figura parada en un pie con el arco levantado y el dedo gordo plano',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Errores comunes que le quitan efecto al pie corto',
      paragraphs: [
        'El error más común es encoger los dedos. Si los dedos se doblan y se aferran al piso, el ejercicio se vuelve un encogimiento de dedos y los flexores extrínsecos toman el control. Mantén los dedos largos y relajados. A algunas personas les ayuda levantar los dedos un momento, contraer el arco y luego volver a bajar los dedos.',
        'El segundo error es empujar el pie hacia afuera en lugar de acortarlo. El movimiento va derecho hacia atrás, de la parte delantera hacia el talón, no de lado a lado. El tercero es aguantar la respiración. Respira normal en cada repetición.',
        'Si no sientes que el arco sube, pon un dedo o una pluma bajo el arco. La meta es sentir que el arco presiona ese objeto. Pueden pasar varias sesiones antes de que el cerebro aprenda a activar estos músculos cuando quieres. Esa curva de aprendizaje es normal.',
      ],
    },
    {
      h2: '¿Qué dice la investigación sobre el ejercicio de pie corto?',
      paragraphs: [
        'La evidencia más fuerte viene de programas que combinan el pie corto con otros ejercicios, no del pie corto solo. En un ensayo de 2023 con 52\u00A0personas con pie plano flexible, Brijwasi y colegas probaron un programa de seis semanas con pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos. El programa cambió dos medidas de la forma del arco más que en el grupo de control.',
        'Un metaanálisis de 2024 de Cheng y colegas revisó el entrenamiento de pie corto por sí solo en varios ensayos. Juntando los resultados, no hubo una mejora significativa en la caída del navicular ni en el Foot Posture Index en general. Pero cuando los autores analizaron solo los programas de más de seis semanas, la caída del navicular sí mejoró de forma significativa. Cuánto tiempo entrenas importa.',
        'Para el equilibrio, un ensayo aleatorizado de 2012 de Lynn y colegas comparó cuatro semanas de pie corto con cuatro semanas de recoger la toalla en adultos sanos. El grupo de pie corto mejoró el equilibrio dinámico más que el grupo de la toalla.',
        'Ninguno de estos estudios es grande. La evidencia respalda el pie corto como parte de un programa más amplio para fortalecer el pie, sobre todo para el pie plano y el dolor en el arco. No es una solución por sí solo, y no se ha probado como tratamiento principal para la fascitis plantar. Para la lista completa de ejercicios, mira [ejercicios para pie plano](/es/ejercicios-pie-plano/) o [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.lynn],
    },
  ],
  faq: [
    {
      q: '¿Cuánto tarda en funcionar el ejercicio de pie corto?',
      cites: [CITE.cheng],
      a: 'Un metaanálisis de 2024 encontró que los programas de pie corto de menos de seis semanas no cambiaron de forma significativa la altura del arco, pero los de más de seis semanas sí mejoraron la caída del navicular (Cheng 2024). Cuenta con al menos seis a ocho semanas de práctica regular antes de ver cambios medibles.',
    },
    {
      q: '¿El pie corto es lo mismo que el domo del arco?',
      a: 'Sí. Pie corto, domo del arco y cúpula plantar describen el mismo movimiento: llevar la parte delantera del pie hacia el talón para subir el arco sin doblar los dedos. El nombre «pie corto» viene de que el pie se ve más corto cuando el arco sube.',
    },
    {
      q: '¿Puedo hacer el ejercicio de pie corto si tengo fascitis plantar?',
      cites: [CITE.guideline],
      a: 'El pie corto no forma parte de la guía principal para la fascitis plantar, que se enfoca en los estiramientos y en las elevaciones de talón con carga. Pero fortalecer los músculos intrínsecos del pie puede ayudar como parte de un programa más amplio. Mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) para los ejercicios que respalda la guía.',
    },
    {
      q: '¿El pie corto es mejor que recoger la toalla con los dedos?',
      cites: [CITE.jung, CITE.lynn],
      a: 'Para trabajar específicamente los músculos intrínsecos del pie, sí. La electromiografía muestra que el abductor del dedo gordo trabaja más de cuatro veces más con el pie corto que al recoger la toalla (Jung 2011). Otro ensayo aleatorizado encontró que el grupo de pie corto mejoró más el equilibrio que el de la toalla después de cuatro semanas (Lynn 2012). Recoger la toalla sigue siendo útil como ejercicio inicial más sencillo.',
    },
    {
      q: '¿Cuántas series y repeticiones de pie corto debo hacer?',
      cites: [CITE.brijwasi],
      a: 'Walkito empieza con 3\u00A0series de 10\u00A0repeticiones, manteniendo cada una 5\u00A0segundos, en cada pie. El ensayo de 2023 sobre pie plano usó un rango parecido. Para subir la dificultad, pasa de sentado a de pie y a una pierna en lugar de sumar más repeticiones.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor en el arco empezó con una lesión repentina o un chasquido, que puede indicar una rotura de la fascia plantar',
      'tienes entumecimiento, hormigueo o ardor en el pie, que puede indicar que hay un nervio involucrado',
      'un pie es rígido y el arco no sube nada cuando te pones en puntas, lo que puede necesitar estudios de imagen',
      'el dolor empeora semana tras semana aunque haces ejercicio con regularidad',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito arma un plan que incluye el pie corto en una progresión de tres pasos: sentado, de pie y a una pierna. Cada paso se abre cuando dos sesiones en el nivel actual se sintieron fáciles. Eliges sesiones de 3, 5 o 10\u00A0minutos, y una prueba cada 14\u00A0días mide si el tiempo que mantienes el arco está mejorando.',
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Ejercicio de pie corto',
  campaign: 'ex-short-foot-es',
};
