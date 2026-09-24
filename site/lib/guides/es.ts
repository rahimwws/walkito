import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Written in Spanish around the Spanish queries — «pie plano», «fascitis
 * plantar», «espolón calcáneo» — rather than translated line by line. Figures,
 * doses and qualifiers are identical to `en.ts`; exercise names follow the
 * app's Spanish catalogue. Neutral Spanish with `tú`, as the app uses.
 */

const RED_FLAGS = {
  h2: 'Consulta antes a un profesional si',
  bullets: [
    'el dolor empezó tras una lesión o una caída',
    'hay entumecimiento, hormigueo, ardor, hinchazón o calor',
    'te despierta por la noche',
    'un arco se ha aplanado de repente en la edad adulta',
  ],
} as const;

export const FLAT_FEET_ES: Guide = {
  lang: 'es',
  page: 'flatFeet',
  title: 'Ejercicios para pie plano: qué funciona y durante cuánto tiempo',
  description:
    'Pie corto, separación de dedos, equilibrio y trabajo de cadera para el pie plano flexible — con dosis de inicio y lo que dicen los ensayos sobre cuánto tarda el arco en responder.',
  h1: 'Ejercicios para pie plano',
  lede: 'Si tu pie plano es flexible — el arco reaparece cuando el pie no toca el suelo —, los ejercicios con respaldo de ensayos son el pie corto, la separación de dedos, el equilibrio a una pierna, el fortalecimiento de cadera y el estiramiento de pantorrilla. Dales más de seis semanas: un metaanálisis de 2024 encontró que solo los programas de más de seis semanas cambiaban de forma medible la altura del arco.',
  sections: [
    {
      h2: 'Primero, comprueba: ¿flexible o rígido?',
      paragraphs: [
        'Mira tu pie de pie, y luego levántalo del suelo o ponte de puntillas. Si el arco reaparece, el pie plano es **flexible**: el tipo con el que se hicieron todos los estudios de esta página.',
        'Si el arco sigue plano incluso sin apoyo, es rígido. Es una cuestión estructural que el ejercicio no va a cambiar, y conviene consultar a un profesional antes que empezar un programa.',
      ],
    },
    {
      h2: 'Los ejercicios, con dosis de inicio',
      paragraphs: [
        'Son los ejercicios para el arco que usa Walkito, con las dosis con las que empieza. Hazlos descalzo.',
      ],
      exercises: [
        {
          name: 'Pie corto, sentado',
          dose: '3 × 10, mantén 5 s, cada pie',
          how: 'Pie apoyado en el suelo. Lleva la parte delantera del pie hacia el talón para que el arco suba. No encojas los dedos: es el error más común.',
        },
        {
          name: 'Pie corto, de pie',
          dose: '3 × 10, mantén 5 s',
          how: 'El mismo movimiento con el peso en los dos pies. Los dedos siguen planos y largos; solo sube el arco.',
        },
        {
          name: 'Pie corto, una pierna',
          dose: '3 × 10, mantén 5 s, cada pie',
          how: 'Sobre un solo pie. El dedo gordo se queda abajo: si se levanta, el arco está haciendo trampa. Con un pie cada vez se ve qué lado es el débil.',
        },
        {
          name: 'Separación de dedos',
          dose: '3 × 10, mantén 5 s',
          how: 'Separa los dedos todo lo que puedas y mantén. Unos dedos que se separan reparten la carga con el arco; levantarlos no es el objetivo.',
        },
        {
          name: 'Equilibrio a una pierna',
          dose: '3 × 30 s, cada pierna',
          how: 'Sobre un pie, con la mirada en un punto fijo. Deja que el pie oscile: es lo que toca, es el pie haciendo el equilibrio.',
        },
        {
          name: 'Abducción de cadera',
          dose: '3 × 15, cada lado',
          how: 'Tumbado de lado, sube la pierna de arriba hacia fuera, empujando con el talón y no con los dedos. Una cadera que cede deja caer la carga sobre el arco.',
        },
        {
          name: 'Estiramiento de pantorrilla y sóleo',
          dose: '3 × 30 s cada uno, cada pierna',
          how: 'Manos en la pared, pierna de atrás recta, talón abajo, cadera hacia delante. Después dobla la rodilla de atrás hasta notarlo más abajo, cerca del talón: ese es el sóleo.',
        },
      ],
    },
    {
      h2: '¿Cuánto tarda el arco en cambiar?',
      paragraphs: [
        'En un ensayo aleatorizado con 52 personas con pie plano **flexible**, un programa de seis semanas de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos mejoró la caída del navicular en **0,4 cm** y el ángulo del arco en **16 grados** más que el grupo de control.',
        'Un metaanálisis de 2024 sobre el ejercicio de pie corto encontró que **solo los programas de más de seis semanas** mejoraban de forma significativa la caída del navicular; los más cortos no mostraron efecto medible. Planifica más de seis semanas, no menos.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: '¿Quitan el dolor estos ejercicios?',
      paragraphs: [
        'Por sí solos, no. Entrenar los músculos pequeños del pie mejora el equilibrio, la fuerza y la postura del arco, pero una revisión sistemática de 2022 encontró que no reduce el dolor por sí mismo.',
        'Si te duele el talón o el arco, la evidencia sobre el dolor está en la fuerza de pantorrilla con carga: mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Por eso Walkito trabaja las dos cosas a la vez; el razonamiento está en [la página de evidencia](/science/) (en inglés).',
      ],
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'el arco sigue plano cuando el pie no toca el suelo'],
  },
  program: {
    h2: 'Hacerlo como programa',
    text: `Walkito lo convierte en un plan de ${PROGRAM.weeks} semanas de ${PROGRAM.sessionMinutesMin} a ${PROGRAM.sessionMinutesMax} minutos al día. Cada ${PROGRAM.blockDays} días repite unas pruebas — elevaciones de talón, sostener el arco y equilibrio a una pierna — para que veas si el trabajo del arco está sirviendo, en vez de adivinarlo.`,
  },
  crumb: 'Ejercicios para pie plano',
  campaign: 'guide-flat-feet-es',
};

export const HEEL_PAIN_ES: Guide = {
  lang: 'es',
  page: 'heelPain',
  title: 'Ejercicios para la fascitis plantar y el dolor de talón',
  description:
    'Elevaciones de talón y estiramientos de fascia y pantorrilla para el dolor de talón, con las dosis de los ensayos, y lo que recomienda (y desaconseja) la guía clínica de 2023.',
  h1: 'Ejercicios para la fascitis plantar',
  lede: 'Para el dolor de talón por fascitis plantar, la guía clínica de 2023 da su nota más alta al estiramiento de la fascia plantar y de la pantorrilla, y una B al entrenamiento de fuerza. En un ensayo con 48 personas, las elevaciones lentas de talón a una pierna con una toalla bajo los dedos mejoraron el dolor antes que el estiramiento solo, aunque a los doce meses los dos grupos se habían igualado.',
  sections: [
    {
      h2: '¿Espolón calcáneo o fascitis?',
      paragraphs: [
        'Mucha gente llama «espolón» a cualquier dolor de talón. Los estudios y la guía de esta página se refieren a la **fascitis plantar**: dolor donde la fascia plantar se une al talón. Qué tienes tú lo dirá un profesional; aquí está lo que la guía recomienda hacer por tu cuenta cuando es fascitis plantar.',
      ],
    },
    {
      h2: 'Los ejercicios, con dosis de inicio',
      paragraphs: [
        'Son los ejercicios para el dolor de talón que usa Walkito, con las dosis con las que empieza.',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          dose: '10 × 10 s, cada pie — el primero antes de levantarte',
          how: 'Sentado, cruza el pie sobre la otra rodilla y tira de los dedos hacia ti hasta notar el arco, no la pantorrilla.',
        },
        {
          name: 'Estiramiento de pantorrilla',
          dose: '3 × 30 s, cada pierna',
          how: 'Manos en la pared, pierna de atrás recta, talón abajo, cadera hacia delante. Una pantorrilla tensa tira del talón todo el día.',
        },
        {
          name: 'Estiramiento de sóleo',
          dose: '3 × 30 s, cada pierna',
          how: 'La misma posición con la rodilla de atrás doblada, hasta notarlo más abajo, cerca del talón. El músculo profundo de la pantorrilla solo se suelta con la rodilla doblada.',
        },
        {
          name: 'Elevación de talones con toalla',
          dose: '3 × 12, cada pierna, en días alternos',
          how: 'En un escalón, sobre un pie, con una toalla enrollada bajo los dedos. Tres segundos arriba, dos mantenidos, tres abajo. La toalla es lo que hace trabajar a la fascia y no solo a la pantorrilla.',
        },
        {
          name: 'Elevación a una pierna',
          dose: '3 × 15, cada pierna',
          how: 'La versión que conviene mantener cuando el dolor se calma. Despacio: tres arriba, tres abajo. La velocidad es lo que la vuelve inútil.',
        },
      ],
    },
    {
      h2: '¿Fuerza o estiramiento?',
      paragraphs: [
        'En un ensayo aleatorizado con 48 personas con fascitis plantar confirmada por ecografía, un grupo hizo elevaciones de talón con carga y el otro estiramientos específicos de la fascia. A los tres meses, el grupo de fuerza puntuó **29 puntos mejor** en el Foot Function Index (IC 95 % 6–52, p = 0,016).',
        'A los doce meses los grupos se habían igualado: 22 frente a 16, sin diferencia significativa. La fuerza **adelanta** la mejoría; no la hace mayor. La guía respalda hacer las dos cosas.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Lo que recomienda la guía de 2023, y lo que no',
      bullets: [
        'Estiramiento de la fascia plantar y de la pantorrilla — **grado A**',
        'Vendaje funcional durante 1–6 semanas — **grado A**',
        'Férulas nocturnas durante 1–3 meses, para el dolor de los primeros pasos de la mañana — **grado A**',
        'Entrenamiento de fuerza y resistencia — **grado B**',
        'Plantillas — **grado B**, pero no como única medida',
        'Ultrasonido terapéutico — **grado A en contra** de usarlo',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Hay que hacer reposo total?',
      paragraphs: [
        'No. La guía desaconseja el reposo total, que aumenta la rigidez. Cambia la carga en su lugar: en una mañana mala, mantén los estiramientos y deja las elevaciones de talón para otro día.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Por qué vuelve',
      paragraphs: [
        'El dolor de talón vuelve a menudo, y lo habitual es que vuelva cuando se dejan los ejercicios la misma semana que deja de doler. Por eso Walkito mantiene dos sesiones por semana después de las doce semanas.',
        'Si además tienes pie plano, el arco tiene sus propios ejercicios y sus propios plazos: mira [ejercicios para pie plano](/es/ejercicios-pie-plano/).',
      ],
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Hacerlo como programa',
    text: `Walkito lo convierte en un plan de ${PROGRAM.weeks} semanas que lee tu dolor de la mañana: una mañana mala quita las elevaciones de talón y acorta la sesión; una buena nunca lo acelera. Cada ${PROGRAM.blockDays} días repite pruebas de resistencia de pantorrilla, sostén del arco y equilibrio a una pierna.`,
  },
  crumb: 'Ejercicios para la fascitis plantar',
  campaign: 'guide-heel-pain-es',
};
