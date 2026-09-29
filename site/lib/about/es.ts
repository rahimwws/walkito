import { PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/*
 * «Sobre Walkito». Written in Spanish, not translated from `en.ts`, with the
 * same structure: what the app is, how the guides are written and sourced,
 * what the app does not do, where clinical review stands, and how to report a
 * mistake. Nothing on it is invented — no founder biography, no reviewer, no
 * user counts. Every number about the plan is read from `PROGRAM`.
 */

/** `3, 5 o 7` — the plan's options as a Spanish list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} o ${options[options.length - 1]}`;
}

export const ABOUT_ES: About = {
  lang: 'es',
  title: 'Sobre Walkito: qué es y cómo escribimos las guías',
  description:
    'Qué es Walkito, cómo se escriben y se citan sus guías sobre dolor de talón y pie plano, qué no hace la app y cómo avisarnos de un error.',
  h1: 'Sobre Walkito',
  lede: 'Walkito es una app para iPhone con un programa de ejercicios para el dolor de talón (fascitis plantar), el dolor en el arco y el pie plano flexible, pensada para corredores. No diagnostica ni trata: propone ejercicios, los ajusta a cómo amaneces cada día y mide con pruebas físicas si avanzas.',
  sections: [
    {
      h2: 'Qué es Walkito',
      paragraphs: [
        'Una app para iPhone, muy pronto en el App Store, en inglés, ruso y español. Reúne en un solo plan los ejercicios de las dos guías de este sitio: los de [la fascitis plantar y el dolor de talón](/es/ejercicios-fascitis-plantar/) y los del [pie plano](/es/ejercicios-pie-plano/).',
        'No tiene una duración fija. Arma **una semana cada vez** alrededor de un objetivo medible; cuando lo alcanzas, pasa a mantenimiento con una dosis menor y el siguiente ocupa su lugar. El plan sigue mientras lo uses.',
      ],
    },
    {
      h2: 'Cómo funciona el plan',
      paragraphs: [
        `Eliges ${either(PROGRAM.daysPerWeek)} días de entrenamiento a la semana y sesiones de ${either(PROGRAM.sessionMinutes)} minutos (${PROGRAM.defaultMinutes} si no eliges), con 2 a 4 ejercicios cada una. El ejercicio del objetivo principal nunca se recorta.`,
        'La primera semana es de adaptación: nada que cargue la fascia plantar y nada por encima del nivel 2. Después, los ejercicios avanzan por cadenas (pantorrilla, arco, equilibrio, cadera y movilidad) de cinco niveles, y la del objetivo principal sube de uno en uno.',
        'Cada mañana el día se ajusta. Una mañana con mucho dolor, un día de muchos pasos o una noche corta acortan o suavizan la sesión; un dolor de 6 sobre 10 o más durante un ejercicio la termina, y las dos sesiones siguientes dan un paso atrás.',
        `Cada ${PROGRAM.testEveryDays} días, ${PROGRAM.retestTests} pruebas físicas de unos ${PROGRAM.retestMinutes} minutos (elevaciones de talón a una pierna hasta no poder más, sostener el arco y equilibrio a una pierna) miden el progreso. Tras alcanzar el primer objetivo, las pruebas pasan a ser cada ${PROGRAM.testEveryDaysAfterGoal} días.`,
      ],
    },
    {
      h2: 'Los cinco objetivos',
      paragraphs: [
        'Al empezar tienes como mucho tres, y si hay dolor, el primero es el dolor. Si tu arco sigue plano sin apoyo, consulta a un profesional antes de hacer los ejercicios del arco.',
      ],
      bullets: [
        `**Mañanas sin dolor:** el dolor al levantarte en 1 sobre 10 o menos durante ${PROGRAM.painFreeDays} días seguidos.`,
        `**Arco:** sostenerlo ${PROGRAM.goals.archHoldSeconds} segundos.`,
        `**Pantorrilla:** ${PROGRAM.goals.calfRaises} elevaciones de talón a una pierna.`,
        `**Equilibrio:** ${PROGRAM.goals.balanceSeconds} segundos sobre una pierna.`,
        `**Simetría:** menos de un ${PROGRAM.goals.gapPercent} % de diferencia entre la pierna izquierda y la derecha.`,
      ],
    },
    {
      h2: 'Cómo escribimos las guías',
      paragraphs: [
        'Cada guía responde a una pregunta concreta, y la respuesta está en su primer párrafo. Las firma el equipo editorial de Walkito y muestran cuándo se actualizaron por última vez; esa fecha solo cambia cuando cambia el contenido.',
        'Las dosis son las dosis de inicio de la propia app, y así se dice. Cada idioma se escribe en ese idioma, alrededor de lo que la gente busca en él, en lugar de traducirse frase a frase.',
        'Escribimos con cautela: «se asocia a menudo con», nunca «tienes». Ninguna guía promete resultados, y cada cifra va con su matiz: cada afirmación sobre la forma del arco dice en qué pies se midió, y el resultado a los tres meses va siempre junto al de los doce.',
        'Cada cifra sale de una de estas cuatro fuentes publicadas, citada bajo la sección que la usa y reunida en [la página de evidencia](/science/) (en inglés). Una cifra sin fuente no entra en el sitio.',
      ],
      bullets: [
        'Rathleff y cols., 2015: ensayo aleatorizado de fuerza con carga en la fascitis plantar, con seguimiento a 12 meses.',
        'Brijwasi y Borkar, 2023: ensayo aleatorizado de un programa de ejercicio en el pie plano flexible.',
        'Cheng y cols., 2024: revisión sistemática y metaanálisis del ejercicio de pie corto en el pie plano.',
        'Koc y cols., 2023: guía de práctica clínica sobre el dolor de talón y la fascitis plantar (JOSPT).',
      ],
    },
    {
      h2: 'Lo que Walkito no hace',
      bullets: [
        'No diagnostica: no puede decirte si tu dolor es fascitis plantar, un espolón u otra cosa.',
        'No trata ni sustituye la valoración de un profesional sanitario. Es un programa de ejercicios.',
        'No promete que el dolor desaparezca ni que el arco cambie en un plazo concreto.',
        'No comprueba si tu pie plano es flexible o rígido. Si tu arco sigue plano sin apoyo, consulta a un profesional antes de hacer los ejercicios del arco.',
      ],
    },
    {
      h2: 'Cuándo consultar antes a un profesional',
      paragraphs: ['Walkito no puede decirte qué causa tu dolor. Consulta a un profesional antes de empezar si:'],
      // The guides' list (`lib/guides/es.ts`), word for word, plus the arch.
      bullets: [
        'el dolor empezó tras una lesión o una caída',
        'no puedes apoyar el pie, o cojeas',
        'hay entumecimiento, hormigueo, ardor, hinchazón o calor',
        'el talón está rojo, o tienes fiebre o te encuentras mal',
        'te despierta por la noche',
        'es un dolor agudo, o va a peor aunque hayas reducido la carga',
        'duele al apretar los lados del talón, o el dolor aumenta al correr después de haber subido el kilometraje: las dos cosas pueden ser signos de una fractura por estrés',
        'tienes diabetes, menos sensibilidad en los pies o mala circulación',
        'te duelen los dos talones y tienes otras articulaciones hinchadas o rígidas',
        'no ha mejorado tras varias semanas de ejercicio y menos carga',
        'un arco se ha aplanado de repente en la edad adulta',
        'el arco sigue plano incluso cuando el pie no toca el suelo',
      ],
    },
    {
      h2: 'Revisión clínica',
      paragraphs: [
        'Todavía no ha revisado estas guías ningún profesional sanitario. Preferimos decirlo a poner un nombre que no ha revisado nada.',
        'Cuando alguien las revise, su nombre, su titulación y lo que comprobó aparecerán en esta página. Mientras tanto, cada cifra lleva su fuente al lado, para que puedas comprobarla tú.',
      ],
    },
    {
      h2: 'Correcciones y contacto',
      paragraphs: [
        `Si ves un error (una cifra que no coincide con su fuente, una dosis mal escrita o una frase que promete más de lo que la evidencia sostiene), escríbenos a ${SUPPORT_EMAIL}. Corregimos la página y actualizamos su fecha.`,
        'La misma dirección sirve para cualquier pregunta sobre la app. Para empezar por algún sitio, la [página principal](/es/) resume cómo funciona Walkito.',
      ],
    },
  ],
};
