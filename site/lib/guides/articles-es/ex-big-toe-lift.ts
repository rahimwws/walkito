import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish translation of `articles/ex-big-toe-lift.ts` (2026-10-07), written
 * around «levantar el dedo gordo», «toe yoga» and «ejercicios para el arco
 * del pie». Figures, doses and qualifiers are identical to English.
 */

export const EX_BIG_TOE_LIFT_ES: Guide = {
  lang: 'es',
  page: 'exBigToeLift',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Levantar el dedo gordo del pie (toe yoga): cómo hacerlo',
  description:
    'Cómo levantar el dedo gordo del pie (toe yoga): técnica, qué músculos trabaja, series y repeticiones, errores comunes y por qué importa para el arco.',
  h1: 'Levantar el dedo gordo (toe yoga): cómo hacerlo y por qué importa',
  lede:
    'Levantar el dedo gordo es un ejercicio en el que subes solo el dedo gordo mientras los otros cuatro dedos se quedan planos en el piso. Algunas personas lo llaman toe yoga o yoga de los dedos. Enseña al cerebro a controlar el dedo gordo por separado, y eso importa porque el dedo gordo es la palanca principal del arco al caminar. Cuando el dedo gordo se extiende, tensa la fascia plantar con el mecanismo de molinete (windlass) y vuelve el pie más firme para impulsarte.',
  takeaways: [
    'Un estudio con resonancia magnética de 2016 encontró que extender el dedo gordo activó el flexor corto de los dedos (18,1\u00A0%), el abductor del dedo gordo (16,9\u00A0%) y el flexor corto del quinto dedo (16,3\u00A0%), porque los otros dedos tienen que apoyar hacia abajo para quedarse planos mientras el dedo gordo sube (Gooding y colegas, 2016).',
    'El dedo gordo pone en marcha el mecanismo de molinete: cuando se dobla hacia arriba, la fascia plantar se tensa y el arco se vuelve firme para el impulso. Un control pobre del dedo gordo por separado puede reducir esa firmeza.',
    'Un estudio de 2020 con 41\u00A0personas (56\u00A0pies) con metatarsalgia encontró que, después de ocho semanas de ejercicios de dedos que incluían trabajo del dedo gordo, hubo más fuerza de agarre en los dedos y menos dolor en la parte delantera del pie. El estudio no tuvo grupo de comparación (Amaha y colegas, 2020).',
    'A la mayoría le cuesta más el movimiento contrario (levantar solo los dedos pequeños mientras el dedo gordo se queda abajo). Practicar en las dos direcciones es lo que a veces se llama toe yoga.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué es el ejercicio de levantar el dedo gordo?',
      paragraphs: [
        'Levantar el dedo gordo es un ejercicio de aislamiento. Subes solo el dedo gordo mientras los otros cuatro dedos se quedan apoyados contra el piso. Luego lo inviertes: apoyas el dedo gordo y subes los otros cuatro. Ese ir y venir es lo que le da su nombre popular, toe yoga.',
        'El objetivo no es la fuerza en el sentido de siempre. **Es control motor.** El dedo gordo tiene sus propios músculos (el extensor corto y el extensor largo del dedo gordo para subirlo, el flexor corto y el flexor largo del dedo gordo para apoyarlo), pero la mayoría de la gente perdió la capacidad de moverlo por separado de los otros dedos. El ejercicio recupera ese control independiente.',
      ],
    },
    {
      h2: '¿Cómo se hace el ejercicio de levantar el dedo gordo?',
      paragraphs: [
        'Siéntate descalzo con los pies apoyados en el piso. Empieza con un solo pie. Apoya suave los cuatro dedos pequeños contra el piso y sube solo el dedo gordo todo lo que puedas. Mantén unos segundos y bájalo. Eso es una repetición.',
        'Si no puedes subir el dedo gordo sin que los otros dedos lo sigan, prueba esto: pon un dedo de la mano sobre los dedos pequeños para mantenerlos abajo. Con el tiempo el cerebro aprende a separar los dos movimientos. Otra ayuda es pensar en empujar hacia abajo con la parte delantera del pie y los dedos pequeños mientras el dedo gordo sube.',
      ],
      exercises: [
        {
          name: 'Elevación del dedo gordo',
          evidence: { level: 'early', why: 'La resonancia magnética muestra que activa los músculos intrínsecos del pie (Gooding 2016). Está incluido en programas de ejercicio para pie plano y metatarsalgia, pero no se ha probado por sí solo en un ensayo de resultados.' },
          dose: 'Walkito empieza con 3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          how: 'Siéntate con los pies apoyados. Sube solo el dedo gordo mientras los otros cuatro dedos se quedan planos en el piso. Mantén cinco segundos y bájalo. Después prueba al revés: apoya el dedo gordo y sube los otros cuatro.',
          often: 'Cada sesión, mientras sea tu nivel',
          feel: 'El dedo gordo moviéndose solo, y esfuerzo en los dedos pequeños que apoyan hacia abajo',
          stop: 'El dolor llega a 6/10',
          media: 'big_toe_lift',
          caption: 'Elevación del dedo gordo: sube solo el dedo gordo, los otros cuatro siguen apoyados',
          alt: 'Una figura sentada con el dedo gordo levantado y los cuatro dedos pequeños apoyados planos en el piso',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: '¿Qué músculos trabaja levantar el dedo gordo?',
      keyFact: 'En un estudio de resonancia magnética con un grupo pequeño de deportistas, levantar el dedo gordo activó los tres músculos intrínsecos de la planta medidos, sobre todo el flexor corto de los dedos, con un 18,1 % (Gooding y colegas, 2016).',
      paragraphs: [
        'Los músculos que suben el dedo gordo son el extensor largo del dedo gordo (que viene de la pierna) y el extensor corto del dedo gordo (que está sobre el pie). Pero el ejercicio también trabaja los músculos que mantienen abajo los otros dedos, y ahí es donde está el verdadero entrenamiento.',
        'Un estudio con resonancia magnética de 2016, de Gooding y colegas, encontró que el ejercicio de extensión del dedo gordo activó:',
        {
          list: [
            'El flexor corto de los dedos (18,1\u00A0%).',
            'El abductor del dedo gordo (16,9\u00A0%).',
            'El flexor corto del quinto dedo (16,3\u00A0%).',
          ],
        },
        'Los músculos intrínsecos de la planta trabajaban para mantener planos los dedos pequeños mientras el dedo gordo subía.',
        '**Eso hace que levantar el dedo gordo sea un ejercicio dos en uno.** El lado que sube entrena los extensores. El lado que apoya entrena los músculos intrínsecos de la planta, los mismos que trabaja el [ejercicio de pie corto](/es/ejercicios/pie-corto/).',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: '¿Por qué importa controlar el dedo gordo para el arco?',
      paragraphs: [
        'El dedo gordo es el interruptor del mecanismo de molinete. Cuando el dedo gordo se extiende (se dobla hacia arriba) en la fase de impulso al caminar, tensa la fascia plantar y sube el arco. Esa firmeza convierte al pie de una base flexible que absorbe el impacto en una palanca rígida que te impulsa hacia adelante.',
        'Si el dedo gordo no puede extenderse por separado, el molinete no se activa del todo. El arco queda más plano durante el impulso, y el pie tiene que compensar cargando más otras estructuras. Con el tiempo, eso puede contribuir al cansancio del arco, al [dolor en la planta del pie](/es/metatarsalgia-dolor-planta-del-pie/) y a la tensión en la fascia plantar.',
        'Levantar el dedo gordo no carga el molinete como lo hace la elevación de talones con toalla. Lo que hace es enseñar al cerebro a activar el dedo gordo por sí solo, para que el molinete pueda hacer su trabajo al caminar normal. **Es un ejercicio de coordinación, no de fuerza.**',
      ],
    },
    {
      h2: '¿Cuáles son los errores comunes al levantar el dedo gordo?',
      paragraphs: [
        {
          list: [
            '**El error más común es subir los cinco dedos juntos.** Si todos los dedos suben a la vez, el ejercicio se vuelve una extensión general de los dedos y se pierde el control independiente. Si hace falta, sostén los dedos pequeños con los dedos de la mano hasta que aparezca la separación.',
            '**Otro error es usar el músculo de la tibia (tibial anterior) para subir el dedo gordo, levantando todo el pie.** Mantén el pie apoyado. Solo se mueve el dedo gordo.',
            '**Un tercer problema es hacer las repeticiones con prisa.** Es un ejercicio de control motor. La velocidad le quita el sentido. Mantén cada elevación los cinco segundos completos y enfócate en la calidad más que en la cantidad. Si solo te salen tres repeticiones limpias, tres repeticiones limpias son mejores que ocho descuidadas.',
          ],
        },
        'Los calambres en el arco o bajo el pie son comunes en las primeras sesiones. Por lo general significan que los músculos intrínsecos están débiles y se cansan rápido. Detente, date un masaje en la zona y vuelve a intentarlo la siguiente sesión.',
      ],
    },
    {
      h2: '¿Qué dice la investigación?',
      paragraphs: [
        'Levantar el dedo gordo (extensión del dedo gordo) fue uno de los cuatro ejercicios probados en el estudio con resonancia magnética de 2016 de Gooding y colegas. Los cuatro ejercicios activaron todos los músculos intrínsecos de la planta. Levantar el dedo gordo no fue el que más activó ningún músculo en particular, pero produjo una activación importante en todos, sobre todo en el flexor corto de los dedos.',
        'Un estudio de 2020 de Amaha y colegas siguió a 41\u00A0personas (56\u00A0pies) con metatarsalgia primaria, dolor bajo la parte delantera de la planta del pie, durante ocho semanas de ejercicios de dedos que incluían trabajo del dedo gordo, recoger la toalla y levantar canicas. La fuerza de agarre de los dedos subió y el dolor en la parte delantera del pie bajó de antes a después del programa. El estudio no tuvo grupo de control, así que parte del cambio puede no deberse solo a los ejercicios.',
        '**Ningún estudio ha probado levantar el dedo gordo por sí solo en un ensayo controlado de resultados.** La evidencia lo respalda como parte de un enfoque más amplio para fortalecer el pie. Otros ejercicios: [ejercicio de pie corto](/es/ejercicios/pie-corto/), [separar los dedos del pie](/es/ejercicios/separar-los-dedos-del-pie/), [recoger la toalla con los dedos](/es/ejercicios/recoger-toalla-con-los-dedos/).',
      ],
      cites: [CITE.gooding, CITE.amaha],
    },
  ],
  faq: [
    {
      q: '¿Qué es el toe yoga?',
      a: 'Toe yoga, o yoga de los dedos, es el nombre común de los ejercicios en los que mueves el dedo gordo por separado de los dedos pequeños, y al revés. La versión básica es subir solo el dedo gordo mientras los otros cuatro se quedan abajo, y luego invertirlo. Enseña al cerebro a controlar cada grupo por separado.',
    },
    {
      q: '¿Cuántas veces debo levantar el dedo gordo?',
      a: 'Walkito empieza con 3\u00A0series de 8\u00A0repeticiones por pie, manteniendo cada elevación 5\u00A0segundos. La calidad importa más que la cantidad. Si no logras aislar el dedo gordo en las 8\u00A0repeticiones, haz menos y ve subiendo.',
    },
    {
      q: '¿Por qué no puedo levantar el dedo gordo solo?',
      a: 'La mayoría de la gente no ha practicado mover el dedo gordo por separado desde la infancia, si es que alguna vez lo hizo. La conexión nerviosa está dormida, no dañada. Con práctica diaria, la mayoría logra separar el movimiento en dos a cuatro semanas. Es una habilidad de coordinación, no un problema de fuerza.',
    },
    {
      q: '¿Levantar el dedo gordo ayuda con la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'Levantar el dedo gordo no forma parte de la guía principal para la fascitis plantar, que se enfoca en los estiramientos y en las elevaciones de talón con carga. Puede ayudar como parte de un programa más amplio al mejorar el control del mecanismo de molinete. Mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) para los ejercicios principales.',
    },
    {
      q: '¿Qué es mejor, levantar el dedo gordo o el pie corto?',
      cites: [CITE.gooding],
      a: 'Entrenan habilidades distintas. Levantar el dedo gordo desarrolla el control independiente de los dedos y activa los extensores. El pie corto trabaja los flexores que sostienen el arco con una contracción isométrica. Los dos aparecen en programas para fortalecer el pie y funcionan bien juntos (Gooding 2016).',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'la articulación del dedo gordo está rígida y duele al doblarla, lo que puede indicar hallux rigidus',
      'tienes entumecimiento o pérdida de sensibilidad en el dedo gordo',
      'el dedo gordo se desvió hacia el segundo dedo y se formó un bulto en la articulación',
      'el dolor bajo la parte delantera de la planta del pie es agudo y está empeorando',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito usa la elevación del dedo gordo al inicio de la secuencia para fortalecer el pie, junto con recoger la toalla. Cuando puedes aislar bien el dedo gordo durante dos sesiones, el plan pasa el foco al ejercicio de pie corto y a su progresión de sentado a de pie. Las sesiones son de 3, 5 o 10\u00A0minutos, y una prueba cada 14\u00A0días mide tu avance.',
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Levantar el dedo gordo (toe yoga)',
  campaign: 'ex-big-toe-lift-es',
};
