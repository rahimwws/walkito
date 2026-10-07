import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Traducido de `articles/ex-band-inversion.ts` (2026-10-07). Cifras, dosis,
 * grados y citas idénticos al inglés.
 */

export const EX_BAND_INVERSION_ES: Guide = {
  lang: 'es',
  page: 'exBandInversion',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Inversión de tobillo con banda para el tibial posterior',
  description:
    'Cómo hacer la inversión de tobillo con banda para fortalecer el tibial posterior: técnica, series, errores comunes y qué dice la investigación.',
  h1: 'Inversión de tobillo con banda: cómo fortalecer el tibial posterior',
  lede:
    'La inversión de tobillo con banda elástica es un ejercicio que fortalece el tibial posterior, el músculo profundo de la pantorrilla cuyo tendón pasa por debajo del tobillo, por el lado interno, y sostiene el arco desde abajo. Giras la planta del pie hacia adentro contra la resistencia de una banda. Un estudio de 2004 con resonancia magnética encontró que un movimiento parecido, la aducción del pie en cadena cerrada, fue el que más activó el tibial posterior de forma aislada entre los tres ejercicios probados.',
  takeaways: [
    'Un estudio de 2004 con resonancia magnética en 5\u00A0adultos sanos encontró que la aducción del pie (girar el pie hacia adentro) aumentó un 50\u00A0% la intensidad de señal del tibial posterior, con menos de un 5\u00A0% de aumento en los músculos de alrededor, lo que la hace el ejercicio más selectivo para ese músculo (Kulig y colegas, 2004).',
    'Una revisión sistemática de 2018 encontró que los programas de ejercicio que incluían fortalecimiento del tibial posterior mejoraron el dolor y la función en personas con disfunción del tendón tibial posterior, aunque la revisión señaló que la mayoría de los estudios eran pequeños (Ross y colegas, 2018).',
    'El tibial posterior es el principal estabilizador dinámico del arco longitudinal interno al estar de pie y al caminar. Cuando se debilita, el arco puede hundirse con el tiempo.',
    'Walkito añade este ejercicio solo después de seis sesiones de pie corto de pie, para que los músculos intrínsecos del arco ya estén trabajando antes de sumar la banda.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué es el ejercicio de inversión de tobillo con banda?',
      paragraphs: [
        'La inversión de tobillo con banda es un ejercicio sentado en el que pasas una banda elástica alrededor de la parte delantera del pie y la sujetas con el otro pie o a un punto fijo. Giras la planta del pie hacia adentro (inversión) contra el tirón de la banda. La rodilla no se mueve. Solo se mueven el pie y el tobillo.',
        'El ejercicio trabaja el tibial posterior, un músculo profundo de la parte de atrás de la pierna cuyo tendón rodea por detrás el hueso interno del tobillo y se abre a lo largo de la planta del pie. Es el músculo extrínseco más importante para sostener el arco al caminar. Cuando se debilita o su tendón se degenera, el arco se aplana y el pie se va hacia adentro. Ese problema se llama disfunción del tendón tibial posterior, o pie plano adquirido del adulto.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: '¿Cómo se hace la inversión de tobillo con banda?',
      paragraphs: [
        'Siéntate con las piernas estiradas al frente o en la orilla de una silla. Pasa una banda elástica alrededor del lado interno de la parte delantera del pie que trabaja. Sujeta el otro extremo bajo el pie contrario o alrededor de la pata de una mesa, para que la banda jale el pie hacia afuera.',
        'Empieza con el pie un poco girado hacia afuera (en eversión). Gira la planta del pie hacia adentro contra la banda, llevando la parte delantera del pie hacia la línea media. Mueve el pie, no toda la pierna. La rodilla apunta al frente todo el tiempo. Vuelve despacio y repite.',
        'Empieza con una banda suave. El movimiento es pequeño. Si la rodilla se tuerce o la cadera gira, la banda es demasiado fuerte o la pierna está compensando.',
      ],
      exercises: [
        {
          name: 'Inversión de tobillo con banda',
          evidence: { level: 'moderate', why: 'La resonancia magnética confirma que la aducción del pie activa de forma selectiva el tibial posterior (Kulig, 2004). En una revisión sistemática de 2018, los programas que incluían trabajo del tibial posterior mejoraron los resultados en la disfunción del tendón.' },
          dose: 'Walkito empieza con 3\u00A0series de 15, cada pie',
          how: 'Siéntate con una banda elástica alrededor de la parte delantera del pie, sujeta de forma que jale el pie hacia afuera. Gira la planta del pie hacia adentro contra la banda. Mueve el pie, no la pierna. La rodilla no se mueve.',
          often: 'Días de fuerza, después de seis sesiones de pie corto de pie',
          feel: 'Trabajo en la parte interna del pie y del tobillo',
          stop: 'El dolor llega a 6/10',
          media: 'band_inversion',
          caption: 'Inversión con banda: gira la planta del pie hacia adentro contra la banda',
          alt: 'Una figura sentada gira la planta del pie hacia adentro contra una banda elástica pasada por la parte delantera del pie',
        },
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué músculo trabaja este ejercicio?',
      paragraphs: [
        'El objetivo principal es el tibial posterior. Es el músculo más profundo de la parte de atrás de la pierna, detrás de la tibia y el peroné. Su tendón pasa por detrás del maléolo medial (el hueso interno del tobillo) y luego se abre en varias bandas que se unen a casi todos los huesos de la parte media del pie.',
        'Un estudio de 2004 con resonancia magnética de Kulig y colegas probó tres ejercicios en 5\u00A0adultos sanos: aducción del pie (girar el pie hacia adentro sobre el piso), elevación de talón a una pierna y supinación del pie en cadena abierta. La aducción del pie logró la mayor activación del tibial posterior (50\u00A0% más de señal) con la menor activación de los músculos de alrededor (menos del 5\u00A0%). La elevación de talón a una pierna también activó el tibial posterior, pero activó mucho el gastrocnemio (99\u00A0%) y el sóleo (39\u00A0%), así que es un ejercicio mucho menos selectivo para el tibial posterior.',
      ],
      cites: [CITE.kulig],
    },
    {
      h2: '¿Por qué importa el tibial posterior para el arco?',
      paragraphs: [
        'El tibial posterior es el principal estabilizador dinámico del arco longitudinal interno. Cada vez que das un paso, se contrae para sostener el arco en la fase media del apoyo, cuando todo tu peso está sobre un pie. Los músculos intrínsecos del pie (que entrenan el [ejercicio de pie corto](/es/ejercicios/pie-corto/) y la [separación de dedos](/es/ejercicios/separar-los-dedos-del-pie/)) dan un sostén local al arco, pero el tibial posterior aporta la fuerza mayor, extrínseca, desde arriba.',
        'Cuando el tendón del tibial posterior se debilita o se degenera, el arco se hunde poco a poco y el pie hace pronación. Una revisión de 2017 de Ling y Lui lo describió como la causa más común del pie plano adquirido del adulto. Una revisión sistemática de 2018 de Ross y colegas encontró que los programas de ejercicio que incluían fortalecimiento del tibial posterior mejoraron el dolor y la función en la disfunción del tendón tibial posterior en etapa temprana.',
        'Por eso los [programas de ejercicios para el pie plano](/es/ejercicios-pie-plano/) incluyen ejercicios intrínsecos del pie y también trabajo del tibial posterior. Los músculos intrínsecos son los estabilizadores locales. El tibial posterior es el principal estabilizador extrínseco. Los dos importan.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Errores comunes en la inversión con banda',
      paragraphs: [
        'El error más común es girar toda la pierna en lugar de solo el pie. Cuando la cadera gira hacia adentro para girar el pie, el tibial posterior casi no trabaja. Mantén la rodilla apuntando al frente. Solo el pie se mueve en el tobillo.',
        'Otro error es usar una banda demasiado fuerte. El tibial posterior es un músculo pequeño y profundo. Una banda pesada hace que los músculos más grandes tomen el control. Empieza con una banda suave y concéntrate en sentir el trabajo a lo largo de la parte interna del tobillo y del arco.',
        'Un tercer problema es dejar que el pie vuelva de golpe entre repeticiones. Controla la vuelta. La fase excéntrica, volver despacio, carga el tendón de una forma que le ayuda a adaptarse. Una vuelta lenta vale más que un tirón rápido.',
        'Por último, algunas personas ponen la banda demasiado arriba en el pie, cerca de la articulación del tobillo. La banda debe ir alrededor de la parte delantera del pie, cerca de la base de los dedos, para que la palanca trabaje en el ángulo correcto.',
      ],
    },
    {
      h2: '¿Qué dice la investigación sobre fortalecer el tibial posterior?',
      paragraphs: [
        'La evidencia más directa sobre el movimiento viene del estudio de 2004 con resonancia magnética de Kulig y colegas. Confirmó que la aducción del pie activa de forma selectiva el tibial posterior, con muy poca activación de los músculos de alrededor. Por eso la inversión contra una banda es el ejercicio de elección cuando el objetivo es fortalecer ese músculo en concreto.',
        'En cuanto a resultados clínicos, una revisión sistemática de 2018 de Ross y colegas analizó programas de ejercicio para la disfunción del tendón tibial posterior. La mayoría de los estudios eran pequeños, pero la revisión concluyó que los programas con ejercicios excéntricos y concéntricos del tibial posterior, muchas veces combinados con fortalecimiento de pantorrilla y plantillas ortopédicas, mejoraron el dolor y la función.',
        'El ejercicio no se ha probado solo en un ensayo grande de fascitis plantar. Su papel en el programa de Walkito es sostener el arco fortaleciendo el estabilizador extrínseco que trabaja junto con los músculos intrínsecos. Páginas relacionadas: [ejercicios para el pie plano](/es/ejercicios-pie-plano/), [ejercicio de pie corto](/es/ejercicios/pie-corto/), [abducción de cadera](/es/ejercicios/abduccion-de-cadera/).',
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
  ],
  faq: [
    {
      q: '¿Qué banda debo usar para la inversión de tobillo?',
      a: 'Empieza con una banda elástica suave. El tibial posterior es un músculo pequeño y profundo y no necesita mucha carga para cansarse. Debes sentir el trabajo a lo largo de la parte interna del tobillo y del arco. Si la rodilla se tuerce o la cadera gira para completar el movimiento, la banda es demasiado fuerte.',
    },
    {
      q: '¿La inversión de tobillo con banda ayuda con el pie plano?',
      cites: [CITE.posteriorTibialReview, CITE.ling],
      a: 'El tibial posterior es el principal estabilizador dinámico del arco. Una revisión sistemática de 2018 encontró que los programas de ejercicio con fortalecimiento del tibial posterior mejoraron el dolor y la función en personas con disfunción del tendón tibial posterior, la causa más común del pie plano adquirido del adulto (Ross, 2018). Fortalecerlo es parte del enfoque habitual para el pie plano.',
    },
    {
      q: '¿Qué diferencia hay entre inversión y eversión de tobillo?',
      a: 'La inversión gira la planta del pie hacia adentro y entrena el tibial posterior, en el lado interno del tobillo. La eversión gira la planta hacia afuera y entrena los músculos peroneos, en el lado externo. Las dos se usan en la rehabilitación del tobillo, pero para sostener el arco, la dirección que importa es la inversión.',
    },
    {
      q: '¿Puedo hacer este ejercicio sin banda?',
      a: 'Sin banda, puedes empujar el lado interno del pie contra una pared o usar la mano para hacer resistencia al movimiento. La banda es mejor porque da una resistencia constante en todo el recorrido. Cualquier banda elástica suave sirve.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'tienes dolor o hinchazón a lo largo del hueso interno del tobillo que empeora con la actividad',
      'no puedes pararte en puntas con un solo pie, lo que puede indicar debilidad del tendón tibial posterior',
      'el arco se hundió hace poco y el pie se ve claramente más plano',
      'tuviste una lesión de tobillo y la parte interna del tobillo sigue sensible',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito añade la inversión de tobillo con banda después de seis sesiones de pie corto de pie. Esa progresión asegura que los músculos intrínsecos del pie estén activos antes de cargar el estabilizador extrínseco. Las sesiones duran 3, 5 o 10\u00A0minutos, y una prueba cada 14\u00A0días sigue cuánto mantienes el arco y la resistencia de la pantorrilla.',
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Inversión de tobillo con banda (tibial posterior)',
  campaign: 'ex-band-inversion-es',
};
