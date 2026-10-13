import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/ex-ankle-rocks.ts`, written around the query
 * «movilidad de tobillo» (the app's Spanish name for ankle rocks). Figures,
 * doses and qualifiers are identical to the English page. Uses existing keys:
 * CITE.guideline, CITE.riddle, CITE.patelGastrocnemius
 */

export const EX_ANKLE_ROCKS_ES: Guide = {
  lang: 'es',
  page: 'exAnkleRocks',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicio de movilidad de tobillo: rodilla sobre los dedos',
  description:
    'Cómo hacer el ejercicio de movilidad de tobillo con la rodilla sobre los dedos: técnica, series, por qué importa que el tobillo se doble y cómo medirlo.',
  h1: 'Movilidad de tobillo: cómo hacer el balanceo de rodilla y por qué importa',
  lede:
    'La movilidad de tobillo de esta página es un ejercicio de pie en el que la rodilla avanza por encima de los dedos mientras el talón se queda plano en el piso. Trabaja la dorsiflexión del tobillo, es decir, cuánto se dobla el tobillo con el pie apoyado. En un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la menor dorsiflexión fue el factor de riesgo más fuerte, con 23,3\u00A0veces más probabilidades.',
  takeaways: [
    'La menor dorsiflexión del tobillo fue el factor de riesgo independiente más fuerte para la fascitis plantar en un estudio de casos y controles emparejados, con 23,3\u00A0veces más probabilidades (Riddle y colegas, 2003).',
    'El balanceo de tobillo trabaja la dorsiflexión cargando el final del rango con el peso del cuerpo, a diferencia de un estiramiento pasivo en la pared.',
    'La prueba de rodilla a la pared mide cuánto avanza la rodilla más allá de los dedos con el talón abajo. Walkito incluye un ejercicio de rodilla a la pared (2\u00A0repeticiones de 30\u00A0segundos, cada pierna) y usa la prueba en su revisión periódica.',
    'Walkito empieza la movilidad de tobillo con 2\u00A0series de 15, cada pierna.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Cómo se hace el ejercicio de movilidad de tobillo?',
      paragraphs: [
        'Párate con un pie adelante y otro atrás, con las manos en una pared o en el marco de una puerta para tener equilibrio. Con el talón de adelante plano en el piso, lleva despacio la rodilla de adelante por encima de los dedos. Deja que la rodilla avance todo lo que pueda mientras el talón sigue abajo. Después vuelve al inicio. Esa es una repetición.',
        'El movimiento es lento y controlado. No rebotas. Cada balanceo debe tomar unos dos segundos hacia adelante y dos hacia atrás. La pierna de atrás solo está para el equilibrio. Todo el trabajo del tobillo pasa en la pierna de adelante.',
        'Mantén el pie de adelante apuntando recto. Si el pie gira hacia afuera, el tobillo encuentra un atajo y te pierdes el rango que quieres ganar.',
      ],
      exercises: [
        {
          name: 'Movilidad de tobillo',
          evidence: {
            level: 'moderate',
            why: 'Trabaja la dorsiflexión del tobillo, el factor de riesgo independiente más fuerte para la fascitis plantar en un estudio de casos y controles de 2003. No se ha probado como ejercicio aislado en un ensayo sobre fascitis plantar.',
          },
          dose: 'Walkito empieza con 2\u00A0series de 15, cada pierna',
          how: 'Un pie adelante y otro atrás, manos en una pared. Lleva la rodilla de adelante por encima de los dedos, el talón se queda plano. Despacio, unos dos segundos en cada sentido. Cambia de pierna después de cada serie.',
          often: 'Sesiones de movilidad',
          feel: 'Un estiramiento en la parte de adelante del tobillo y un tirón en la parte baja de la pantorrilla',
          stop: 'El dolor llega a 6/10',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla avanza por encima de los dedos, el talón se queda plano',
          alt: 'Una figura con un pie adelante y otro atrás lleva la rodilla de adelante por encima de los dedos, con el tobillo resaltado',
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: '¿Por qué importa la movilidad de tobillo para el dolor de talón?',
      keyFact: 'En un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la menor dorsiflexión del tobillo pesó más que el índice de masa corporal o el tiempo de pie, con 23,3\u00A0veces más probabilidades (Riddle y colegas, 2003).',
      paragraphs: [
        'La dorsiflexión del tobillo es cuánto se puede doblar el pie hacia arriba, hacia la tibia, mientras el talón sigue en el piso. Cada paso que das necesita algo de dorsiflexión. Cuando el tobillo no se dobla lo suficiente, el cuerpo compensa. El pie puede irse hacia adentro, la pantorrilla recibe más tensión y la fascia plantar absorbe fuerzas para las que no está hecha.',
        'En el estudio de casos y controles de Riddle de 2003, la menor dorsiflexión del tobillo fue la variable con el mayor efecto independiente, con 23,3\u00A0veces más probabilidades de desarrollar fascitis plantar. Pesó más que el índice de masa corporal, el tiempo de pie o la distancia que se corría. En otra revisión, una pantorrilla tensa, en concreto el gastrocnemio, estaba presente en entre el 52 y el 60\u00A0% de 254\u00A0personas con fascitis plantar.',
        'Estirar la pantorrilla de forma pasiva (como en el [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) y el [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/)) atiende una parte del problema: la longitud del músculo. La movilidad de tobillo atiende la otra: el control activo al final del rango. Llevar la rodilla por encima de los dedos con el peso del cuerpo le enseña al tobillo a usar el rango que tiene, no solo a alcanzarlo de forma pasiva.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Movilidad de tobillo o estiramiento de pantorrilla: ¿cuál es la diferencia?',
      paragraphs: [
        'El [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) es una posición pasiva que mantienes. Te inclinas hacia la pared y esperas a que el músculo se alargue. La pierna de atrás está estirada, y eso trabaja el gastrocnemio. El [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/) hace lo mismo con la rodilla doblada.',
        'La movilidad de tobillo es un movimiento activo y repetido. Llevas la rodilla hacia adelante, vuelves y vuelves a empujar. Cargas el tobillo a lo largo de su rango en lugar de quedarte quieto al final. Así ganas la capacidad de usar la dorsiflexión con carga, que es lo que de verdad piden caminar y correr.',
        'Los dos sirven. Estirar abre el rango. La movilidad de tobillo te entrena a usarlo. La guía le da una A al estiramiento de pantorrilla. La movilidad de tobillo es parte del trabajo de movilidad que Walkito pone junto con esos estiramientos.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'La prueba de rodilla a la pared y cómo se relaciona',
      paragraphs: [
        'La prueba de rodilla a la pared, también llamada prueba de estocada con carga, es una forma sencilla de medir la dorsiflexión del tobillo. Te paras frente a una pared, con un pie unos centímetros atrás, y llevas la rodilla hacia adelante hasta que toque la pared. Si el talón se levanta antes de que la rodilla llegue, acerca el pie. Tu resultado es la distancia entre el dedo gordo y la pared en el punto en el que la rodilla apenas toca, con el talón todavía plano.',
        'Walkito incluye en la app un ejercicio de rodilla a la pared (2\u00A0repeticiones de 30\u00A0segundos, cada pierna) y usa la prueba en su revisión periódica. Seguir esta distancia durante semanas te dice si el rango de tu tobillo de verdad está mejorando. Ganar uno o dos centímetros en unas semanas es importante.',
        'La movilidad de tobillo y el ejercicio de rodilla a la pared trabajan el mismo rango desde ángulos distintos. El balanceo son repeticiones a lo largo del rango. Rodilla a la pared es una carga sostenida al final del rango. Los dos ayudan. Walkito los pone en los días de movilidad.',
      ],
    },
    {
      h2: '¿Cuáles son los errores comunes en la movilidad de tobillo?',
      paragraphs: [
        'Dejar que el talón se levante. El talón tiene que quedarse plano en cada repetición. Si se levanta, ya pasaste el final de tu rango y el ejercicio pierde su sentido. Avanza solo hasta donde el talón te deje.',
        'Girar el pie hacia afuera. El pie debe apuntar recto. Si gira hacia afuera, el tobillo esquiva su punto tenso. Mantén el segundo dedo apuntando a la pared.',
        'Ir demasiado rápido. Rebotar o hacer las repeticiones con prisa no da un rango controlado. Dos segundos hacia adelante, dos hacia atrás. Deja que el tobillo sienta el final de su rango en cada repetición.',
        'Olvidarte de la postura con un pie atrás. Algunas personas intentan hacer el ejercicio con las dos piernas a la vez, solo agachándose. Eso reparte la carga y reduce el rango que tiene que trabajar el tobillo de adelante. Ponte con un pie adelante y otro atrás para que un solo tobillo haga el trabajo.',
      ],
    },
    {
      h2: 'Versiones más fáciles y más difíciles',
      paragraphs: [
        'Si hacerlo de pie te cuesta demasiado, pruébalo sentado. Siéntate con el pie plano en el piso y lleva la rodilla hacia adelante por encima de los dedos. Es el mismo movimiento con menos carga. Funciona bien después de una crisis de dolor, cuando los ejercicios de pie son demasiado.',
        'Una versión más difícil es con peso. Sostén una pesa rusa o un libro pesado contra el pecho mientras avanzas. El peso extra lleva la rodilla más lejos en la dorsiflexión. Solo añade peso cuando la versión con tu peso se haya sentido fácil dos sesiones seguidas.',
        'Para más trabajo de tobillo y pierna, mira [elevaciones de tibial anterior](/es/ejercicios/elevaciones-de-tibial-anterior/) (fuerza de la parte de adelante de la pierna) y [equilibrio a una pierna](/es/ejercicios/equilibrio-a-una-pierna/) (estabilidad del tobillo). El programa completo está en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuántas repeticiones de movilidad de tobillo hay que hacer?',
      a: 'Walkito empieza con 2\u00A0series de 15 por pierna. Son 30\u00A0repeticiones por pierna en cada sesión. No hay un protocolo publicado de este ejercicio para la fascitis plantar en concreto, así que esta dosis viene de la app. Sube las series o añade peso cuando la dosis actual se sienta fácil durante dos sesiones.',
    },
    {
      q: '¿La movilidad de tobillo ayuda con la fascitis plantar?',
      cites: [CITE.riddle],
      a: 'Este ejercicio trabaja la dorsiflexión del tobillo, que fue el factor de riesgo independiente más fuerte para la fascitis plantar en un estudio de casos y controles (23,3\u00A0veces más probabilidades). Ningún ensayo lo ha probado como ejercicio aislado para la fascitis plantar, pero mejorar ese rango atiende el mayor factor de riesgo biomecánico que ha identificado la investigación.',
    },
    {
      q: '¿Qué es la prueba de rodilla a la pared?',
      a: 'Una forma sencilla de medir la dorsiflexión del tobillo. Párate frente a una pared y lleva la rodilla hacia adelante hasta que la toque, con el talón plano. La distancia entre el dedo gordo y la pared es tu resultado. Walkito la incluye como prueba periódica y como ejercicio aparte (2\u00A0repeticiones de 30\u00A0segundos por pierna) para ganar control al final del rango.',
    },
    {
      q: '¿Es lo mismo que el balanceo de rodilla sobre los dedos?',
      a: 'Sí. «Movilidad de tobillo», «balanceo de rodilla sobre los dedos» y «balanceo de dorsiflexión de tobillo» son nombres del mismo movimiento. La rodilla avanza por encima de los dedos mientras el talón se queda plano. El ejercicio trabaja el rango de tobillo que necesitas para caminar, agacharte y correr.',
    },
    {
      q: '¿La rodilla debe pasar los dedos del pie?',
      a: 'Sí. Ese es el punto del ejercicio. La idea de que la rodilla nunca debe pasar los dedos es un mito que no aplica a la marcha normal ni al trabajo de movilidad de tobillo. En cada paso que das, la rodilla pasa los dedos. Este ejercicio entrena ese rango con control. Mantén el talón plano y detente donde el rango termine de forma natural.',
    },
  ],
  redFlags: {
    h2: 'Detente y consulta a un profesional de la salud si',
    bullets: [
      'sientes un pellizco agudo en la parte de adelante del tobillo que no se va entre repeticiones',
      'el tobillo se traba o se atora durante el movimiento',
      'aparece hinchazón en la parte de adelante o en los lados del tobillo después del ejercicio',
      'el dolor sube como un disparo por la tibia o baja hacia el pie',
      'el tobillo se dobló o se lesionó hace poco',
      'no ha mejorado después de varias semanas de trabajo de movilidad constante',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito pone la movilidad de tobillo en los días de movilidad, junto con los estiramientos de pantorrilla y de sóleo. Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. La app sigue el rango de tu tobillo con la prueba de rodilla a la pared cada 14\u00A0días.',
    more: [
      'Ganar un centímetro en la prueba de rodilla a la pared en unas semanas es importante y fácil de ver en la gráfica. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Movilidad de tobillo',
  campaign: 'ex-ankle-rocks-es',
};
