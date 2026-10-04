import { PAIN_GOAL_MAX, PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** `3, 5 o 7`: the plan's options as a Spanish list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} o ${options[options.length - 1]}`;
}

/*
 * Translated from `en.ts` (2026-09-28). Latin American / US Spanish with `tú`.
 * Nothing here is invented: no reviewer is named because none has reviewed the
 * guides yet. When one does, their name, credentials and what they checked
 * replace that paragraph in every language.
 */
export const ABOUT_ES: About = {
  lang: 'es',
  title: 'Sobre Walkito: cómo escribimos nuestras guías',
  description:
    'Qué es Walkito, cómo se escriben y documentan sus guías sobre dolor de talón y pie plano, qué no hace Walkito y cómo avisarnos de un error.',
  h1: 'Sobre Walkito',
  lede: 'Walkito es un plan de ejercicios personalizado para el dolor de talón, pie y pierna que se ajusta cada día a cómo se sienten tus pies. Esta página explica cómo se escriben las guías de este sitio y de dónde salen sus números. También dice qué no hace Walkito y cómo avisarnos cuando algo está mal.',
  sections: [
    {
      h2: '¿Qué es Walkito?',
      paragraphs: [
        `Walkito es una app para iPhone que arma tu plan de ejercicios una semana a la vez, en torno a metas que se pueden medir. Hay cinco metas: mañanas más fáciles (dolor por la mañana de ${PAIN_GOAL_MAX}/10 o menos durante ${PROGRAM.painFreeDays}\u00A0días seguidos), mantener el arco ${PROGRAM.goals.archHoldSeconds}\u00A0segundos, ${PROGRAM.goals.calfRaises} elevaciones de talón a una pierna, ${PROGRAM.goals.balanceSeconds}\u00A0segundos de equilibrio en una pierna y menos de un ${PROGRAM.goals.gapPercent}\u00A0% de diferencia entre tu lado izquierdo y el derecho. Empiezas con hasta tres de ellas. Si algo te duele, el dolor va primero.`,
        `Eliges ${either(PROGRAM.daysPerWeek)} días de entrenamiento por semana y sesiones de ${either(PROGRAM.sessionMinutes)}\u00A0minutos. La sesión de cada día se adapta a cómo fue tu mañana. Cada ${PROGRAM.testEveryDays}\u00A0días, una prueba corta muestra si tus números se mueven. Cuando alcanzas tu primera meta, la prueba pasa a ser cada ${PROGRAM.testEveryDaysAfterGoal}\u00A0días.`,
        'El plan no tiene una duración fija. Cuando alcanzas una meta, pasa a mantenimiento con una dosis menor y la siguiente ocupa su lugar. Y así sigue mientras uses Walkito. [Cómo funciona el plan](/program/) (en inglés).',
        'Walkito está en inglés, ruso y español.',
      ],
    },
    {
      h2: 'Cómo investigamos',
      id: 'how-we-research',
      paragraphs: [
        'Las guías de Walkito se escriben a partir de investigación publicada, y cada número tiene una fuente que puedes revisar. Las guías son [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/) y [ejercicios para el pie plano](/es/ejercicios-pie-plano/). Ellas y [la página de evidencia](/science/) (en inglés) siguen las mismas cinco reglas:',
      ],
      bullets: [
        '**Cada cifra viene de una fuente primaria.** Es decir, un ensayo aleatorizado, un metaanálisis o una guía clínica. La fuente aparece con su enlace en la página que la usa. Si no podemos rastrear un número hasta una fuente, no va en el sitio. Ya hemos quitado frases por esa razón.',
        '**La guía de práctica clínica de 2023 sobre dolor de talón es el punto de referencia.** Se publicó en el Journal of Orthopaedic & Sports Physical Therapy. Califica cada intervención según qué tan sólida es su evidencia, incluidas las que desaconseja.',
        '**Los matices van con las cifras.** Un resultado a tres meses siempre aparece junto con lo que pasó a los doce meses. Cada afirmación sobre la forma del arco dice en qué pies se midió.',
        '**Las dosis son las dosis iniciales de Walkito.** Muestran dónde empiezan los ejercicios de Walkito. No son una indicación médica para ti.',
        '**Ninguna promesa de curación.** Las páginas dicen lo que encontró la investigación y hasta dónde llega su evidencia.',
      ],
    },
    {
      h2: '¿Qué no hace Walkito?',
      paragraphs: [
        'Walkito no diagnostica, no trata y no sustituye a un profesional de la salud. Walkito no puede decirte qué causa tu dolor. Consulta primero a un profesional de la salud si:',
      ],
      bullets: [
        'el dolor empezó después de una lesión o una caída',
        'no puedes apoyar el pie o estás cojeando',
        'viene con entumecimiento, hormigueo, ardor, hinchazón o calor',
        'el talón está rojo, o tienes fiebre o te sientes mal',
        'te despierta por la noche',
        'es agudo o empeora aunque hayas bajado la carga',
        'te duele al apretar los lados del talón, o el dolor aumenta al correr después de subir tu kilometraje; las dos cosas pueden ser señales de una fractura por estrés',
        'tienes diabetes, menos sensibilidad en los pies o mala circulación',
        'te duelen los dos talones y otras articulaciones están hinchadas o rígidas',
        'no ha mejorado después de varias semanas de ejercicio y menos carga',
        'un arco se aplanó de repente en la edad adulta',
        'el arco sigue plano incluso cuando el pie no toca el piso',
      ],
    },
    {
      h2: '¿Un profesional de la salud revisó las guías de Walkito?',
      paragraphs: [
        'Ningún profesional de la salud con licencia ha revisado todavía las guías de Walkito. El equipo de Walkito las escribe a partir de la investigación publicada que se cita en cada página.',
        'Cuando un profesional las revise, esta página mostrará su nombre, sus credenciales y lo que revisó. Hasta entonces, ninguna página de este sitio dice tener un revisor médico.',
      ],
    },
    {
      h2: '¿Cómo aviso de un error?',
      paragraphs: [
        `Para avisar de un error en este sitio, escribe a ${SUPPORT_EMAIL}. Puede ser una cifra que no coincide con su fuente, una dosis que se lee mal o un enlace roto. Corregimos la página misma.`,
        'Cada página muestra la fecha del último cambio de su contenido. Esa fecha solo cambia cuando el contenido de verdad cambia.',
      ],
    },
    {
      h2: '¿Cómo maneja Walkito mis datos?',
      paragraphs: [
        'La [política de privacidad](/es/privacidad/) de Walkito explica qué guarda Walkito, qué sale de tu teléfono y cómo borrarlo. En resumen: tu plan y tus registros se guardan en tu cuenta, y los datos de Salud de Apple se quedan en tu teléfono.',
      ],
    },
  ],
};
