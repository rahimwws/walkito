import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Ejercicios de pies para corredores (ES).
 *
 * Translated from `articles/foot-exercises-for-runners.ts`, written around the
 * Spanish query «ejercicios de pies para corredores» (also «ejercicios para
 * fortalecer los pies corredores»). Figures, grades, doses and hedges are
 * identical to the English page. No new citations.
 */

export const RUNNERS_FOOT_EXERCISES_ES: Guide = {
  lang: 'es',
  page: 'runnersFootExercises',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Ejercicios de pies para corredores: rutina, dosis y datos',
  description:
    'Ejercicios de pies para corredores: rutina corta para el core del pie, pantorrillas, dedos y equilibrio, con dosis, valores normales y datos de ensayos.',
  h1: 'Ejercicios de pies para corredores: una rutina corta y lo que muestra la investigación',
  lede:
    'Una buena rutina de pies para corredores entrena cuatro cosas: los músculos pequeños del arco (el ejercicio de pie corto), la resistencia de la pantorrilla y del sóleo (elevaciones de talón), la fuerza de los dedos y el equilibrio a una pierna. Toma unos 10\u00A0minutos, de dos a cinco veces por semana, después de una carrera suave o en un día de descanso. En un ensayo con 118\u00A0corredores recreativos, quienes no hicieron un programa de core del pie tuvieron 2,42\u00A0veces más probabilidades de sufrir una lesión por correr en 12\u00A0meses (Taddei y colegas, 2020). Es un solo ensayo, así que tómalo como algo prometedor, no como algo resuelto.',
  intro: [
    'Esta página es para corredores sin lesiones, o con una molestia leve que les deja seguir corriendo. Si ya te duele el talón al correr, empieza por [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/). Para la progresión completa de cada ejercicio de pie, de sentado a una pierna, consulta [ejercicios para fortalecer los pies](/es/ejercicios-para-fortalecer-los-pies/).',
  ],
  toc: true,
  takeaways: [
    'En un ensayo de 2020 con 118\u00A0corredores recreativos de larga distancia, el grupo sin entrenamiento del core del pie tuvo 2,42\u00A0veces más probabilidades de sufrir una lesión por correr en 12\u00A0meses. El efecto apareció después de unos cuatro a ocho meses de entrenamiento (Taddei y colegas, 2020).',
    'En un ensayo de 2019 con 57\u00A0corredores, unos dos meses de ejercicios de pie, hechos al menos cinco veces por semana, hicieron más grandes y más fuertes todos los músculos del pie que se midieron (Ridge y colegas, 2019).',
    'Los adultos sanos hacen una mediana de unas 23 a 24\u00A0elevaciones de talón a una pierna por lado, y se ha propuesto 25 como referencia de lo normal (Hebert-Losier y colegas, 2017; Lunsford y Perry, 1995).',
    'Un programa autoguiado de fuerza para cadera, muslo y core en 720\u00A0corredores de su primer maratón no redujo las lesiones por sobrecarga que les impidieron terminar la carrera: 7,1\u00A0% frente a 7,3\u00A0% (Toresdahl y colegas, 2020). Ahí, el trabajo de fuerza por sí solo no previno lesiones.',
    'En los estudios con corredores de larga distancia, entre el 19,4\u00A0% y el 79,3\u00A0% sufrieron una lesión en la pierna, y una lesión previa fue uno de los factores de riesgo más claros (van Gent y colegas, 2007).',
  ],
  sections: [
    {
      h2: '¿Los ejercicios de pie ayudan a los corredores a evitar lesiones?',
      keyFact: 'En un ensayo de 2020 con 118\u00A0corredores recreativos, quienes no hicieron entrenamiento del core del pie tuvieron 2,42\u00A0veces más probabilidades de lesionarse en 12\u00A0meses (Taddei y colegas).',
      paragraphs: [
        '**Un buen ensayo dice que sí, pero sigue siendo un solo ensayo.** En 2020, Taddei y colegas, en Brasil, dividieron al azar a 118\u00A0corredores recreativos de larga distancia en un grupo de core del pie (57\u00A0corredores) y un grupo control (61\u00A0corredores). El grupo de core del pie hizo unos dos meses de entrenamiento supervisado de los músculos del pie y del tobillo, y después siguió con supervisión a distancia. Todos reportaron cada semana lo que corrían y cualquier lesión, durante un año.',
        'En 12\u00A0meses, el grupo control tuvo 2,42\u00A0veces más probabilidades de sufrir una lesión por correr. La diferencia apareció después de cuatro a ocho meses de entrenamiento, no en las primeras semanas. Los corredores cuya fuerza del pie aumentó más tardaron más en lesionarse.',
        'Un ensayo anterior y más pequeño del mismo equipo, con 28\u00A0corredores, encontró que unos dos meses de entrenamiento del pie hicieron más grandes los músculos pequeños del pie y aumentaron la fuerza de impulso al correr (Taddei y colegas, 2020).',
        'Lo que esto no nos dice: los dos ensayos vienen de un mismo grupo de investigación, con corredores recreativos con experiencia que no estaban lesionados al empezar. No incluyeron a principiantes ni a corredores que ya tenían dolor, así que no sabemos si los resultados aplican a ellos.',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med): el grupo control tuvo 2,42\u00A0veces más probabilidades de sufrir una lesión relacionada con correr (IC del 95\u00A0%: 1,98 a 3,62), p = 0,035, ensayo aleatorizado simple ciego, seguimiento de 12\u00A0meses. Taddei 2020 (Phys Ther Sport): ensayo aleatorizado simple ciego de prueba de concepto, 28\u00A0corredores, volumen muscular por resonancia magnética, después de unos dos meses.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: '¿Qué debe incluir la rutina de pies de un corredor?',
      paragraphs: [
        'Cuatro partes, cada una con uno o dos ejercicios. Las dosis de abajo son las dosis iniciales de Walkito. Hazlos descalzo, y para por ese día si el dolor pasa de 6 sobre 10.',
        {
          list: [
            '**Core del pie:** el [ejercicio de pie corto](/es/ejercicios/pie-corto/), primero de pie y luego en una pierna. Entrena los músculos pequeños que sostienen el arco.',
            '**Pantorrilla y sóleo:** elevaciones de talón con la rodilla recta para la pantorrilla, y con la rodilla doblada para el sóleo, el músculo más profundo de la pantorrilla.',
            '**Dedos:** elevaciones del dedo gordo. El dedo gordo es la última parte del pie que deja el suelo cuando te impulsas.',
            '**Equilibrio:** pararte en una pierna, porque correr es una serie de aterrizajes sobre una sola pierna.',
          ],
        },
        'Esto sigue la idea del programa de Taddei, que entrenó primero los músculos pequeños del pie y luego los usó de pie y con carga. No es una copia de ese programa. Para más trabajo de dedos, consulta [ejercicios para fortalecer los dedos del pie](/es/ejercicios-para-fortalecer-los-dedos-del-pie/).',
      ],
      exercises: [
        {
          name: 'Pie corto, de pie',
          evidence: { level: 'moderate', why: 'Parte del programa de core del pie en los ensayos con corredores (Taddei 2020). No se probó por sí solo para prevenir lesiones.' },
          dose: '3\u00A0series de 10, sostén 5\u00A0segundos, los dos pies',
          often: 'De 2 a 5\u00A0días a la semana',
          feel: 'Una tensión bajo el arco, con los dedos relajados',
          how: 'Párate con el peso en los dos pies. Sin encoger los dedos, lleva la parte delantera del pie hacia el talón para que el arco suba un poco. Sostén y luego relaja. Si los dedos se aferran al suelo, afloja.',
          stop: 'Un calambre que no cede, o dolor por encima de 6 sobre 10',
          media: 'short_foot_double',
          caption: 'Pie corto, de pie: el arco sube, los dedos siguen planos',
          alt: 'Dos pies descalzos en el suelo con los arcos elevados y los dedos planos',
        },
        {
          name: 'Pie corto, una pierna',
          evidence: { level: 'early', why: 'El paso a una pierna de la progresión de pie corto. No se probó por sí solo en corredores.' },
          dose: '3\u00A0series de 10, sostén 5\u00A0segundos, cada pie',
          often: 'Cuando la versión de pie ya te resulte fácil',
          feel: 'El arco trabajando mientras mantienes el equilibrio',
          how: 'Párate en un pie, con una mano cerca de la pared. Sube el arco como arriba y sostenlo mientras mantienes el equilibrio. Esto se parece más a lo que hace el pie cuando aterrizas.',
          stop: 'Dolor por encima de 6 sobre 10, o pierdes el equilibrio en cada repetición',
          media: 'short_foot_single',
          caption: 'Pie corto, una pierna: sostén el arco mientras te equilibras',
          alt: 'Una figura parada sobre un pie descalzo con el arco elevado',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'early', why: 'La resistencia de la pantorrilla fue menor en atletas con periostitis tibial (Madeley 2007). No se probó como prevención de lesiones en corredores.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'De 2 a 3\u00A0días a la semana, no dos días seguidos',
          feel: 'Trabajo en las pantorrillas y en la parte delantera del pie',
          how: 'Sostente de una pared. Sube sobre la parte delantera de los dos pies en unos 3\u00A0segundos, con el peso hacia el dedo gordo, y baja en 3\u00A0segundos. Cuando te resulte fácil, pasa a una pierna. Más en la página de [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/).',
          stop: 'Dolor en el talón o en el tendón de Aquiles por encima de 6 sobre 10, o peor a la mañana siguiente',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: sube despacio, baja despacio, con el peso sobre el dedo gordo',
          alt: 'Una figura apoyada en la pared que sube sobre la parte delantera de los dos pies',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'early', why: 'Trabaja el sóleo con la rodilla doblada. No se probó por sí solo en corredores.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'De 2 a 3\u00A0días a la semana',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies planos y empuja hacia arriba con la parte delantera del pie. Con la rodilla doblada, el sóleo hace la mayor parte del trabajo. Una mochila o pesas sobre las rodillas añaden carga cuando se vuelve fácil.',
          stop: 'Dolor por encima de 6 sobre 10',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: rodilla doblada para cargar el sóleo',
          alt: 'Una figura sentada que levanta los dos talones, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevación del dedo gordo',
          evidence: { level: 'early', why: 'Un estudio con resonancia magnética muestra que activa los músculos pequeños del pie (Gooding 2016). No se probó por sí solo en un ensayo de resultados.' },
          dose: '3\u00A0series de 8, sostén 5\u00A0segundos, cada pie',
          often: 'De 2 a 5\u00A0días a la semana',
          feel: 'Esfuerzo en el empeine y bajo el arco',
          how: 'Mantén los cuatro dedos pequeños en el suelo y levanta solo el dedo gordo. Luego prueba al revés: dedo gordo abajo, dedos pequeños arriba. Al principio basta con un movimiento pequeño.',
          stop: 'Dolor en la articulación del dedo gordo',
          media: 'big_toe_lift',
          caption: 'Elevación del dedo gordo: solo sube el dedo gordo',
          alt: 'Un pie descalzo con el dedo gordo levantado y los demás dedos planos',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: { level: 'early', why: 'Parte de la mayoría de los programas para el pie. No se probó por sí solo como prevención de lesiones en corredores.' },
          dose: '3\u00A0series de 30\u00A0segundos, cada lado',
          often: 'De 2 a 5\u00A0días a la semana',
          feel: 'Pequeñas correcciones en el pie y el tobillo',
          how: 'Párate en un pie, con la rodilla suelta, cerca de una pared. Cuando 30\u00A0segundos te resulten fáciles, cierra los ojos o párate sobre una almohada. Más en la página de [equilibrio a una pierna](/es/ejercicios/equilibrio-a-una-pierna/).',
          stop: 'No puedes mantenerte sin agarrarte de la pared',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: rodilla suelta, la pared al alcance',
          alt: 'Una figura parada en una pierna junto a una pared',
        },
      ],
      cites: [CITE.taddeiRRI, CITE.madeley, CITE.gooding],
    },
    {
      h2: '¿Por qué los corredores necesitan fuerza en la pantorrilla y el sóleo?',
      keyFact: 'Hasta unos 7\u00A0metros por segundo, correr más rápido depende sobre todo de empujar más fuerte contra el suelo, y el sóleo y el gastrocnemio tienen un papel clave en ese impulso (Schache y colegas, 2014).',
      paragraphs: [
        '**Los músculos de la pantorrilla hacen buena parte del impulso cuando corres.** Una revisión de 2014 sobre cómo trabajan los músculos de la pierna al correr encontró que, a velocidades de hasta unos 7\u00A0metros por segundo, lo que cubre casi toda la carrera recreativa, los corredores van más rápido sobre todo empujando más fuerte contra el suelo para dar una zancada más larga. Los dos músculos de la pantorrilla, el sóleo y el gastrocnemio, tienen un papel especialmente importante en ese impulso (Schache y colegas, 2014).',
        'El sóleo está debajo del gastrocnemio y trabaja más cuando la rodilla está doblada, por eso la rutina tiene una elevación de talón sentado, con la rodilla doblada, además de la de pie. Si tus pantorrillas se sienten tensas a menudo después de correr, [pantorrillas tensas](/es/pantorrillas-tensas/) explica los estiramientos y el [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/).',
        'La resistencia de la pantorrilla también aparece en el dolor de espinilla. En un estudio de casos y controles, los atletas con periostitis tibial hicieron menos elevaciones de talón hasta la fatiga que los atletas sin ella (Madeley y colegas, 2007). Eso muestra una relación, no que unas pantorrillas débiles causen periostitis tibial. Más en [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/).',
      ],
      cites: [CITE.schache, CITE.madeley],
    },
    {
      h2: '¿Cuántas elevaciones de talón debería poder hacer un corredor?',
      keyFact: 'En 566\u00A0adultos de 20 a 81\u00A0años, la mediana fue de 24\u00A0elevaciones de talón a una pierna con la derecha y 23 con la izquierda (Hebert-Losier y colegas, 2017).',
      paragraphs: [
        'No hay una norma específica para corredores, así que usa las cifras generales de adultos como mínimo. En un estudio con 566\u00A0adultos, la mediana fue de 24\u00A0elevaciones de talón a una pierna con la pierna derecha y 23 con la izquierda, a un ritmo de un tiempo para subir y otro para bajar, con un metrónomo a 60\u00A0tiempos por minuto. Las cifras bajan con la edad, y las personas más activas hicieron más (Hebert-Losier y colegas, 2017). Un estudio más antiguo propuso 25 como referencia de lo normal (Lunsford y Perry, 1995).',
        'Compara también tus dos piernas. Una diferencia de más del 10\u00A0% entre lados es el umbral habitual de una diferencia importante en la rehabilitación de la pierna (Silbernagel y colegas, 2010). El protocolo completo, una versión para casa y una calculadora están en la página del [test de elevación de talón](/es/test-de-elevacion-de-talon/).',
      ],
      table: {
        caption: 'Mediana de elevaciones de talón a una pierna por edad, actividad moderada (Hebert-Losier 2017)',
        head: ['Edad', 'Hombres', 'Mujeres'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
        ],
      },
      after: [
        'Son estimaciones de un modelo para un adulto moderadamente activo con un índice de masa corporal de 24,2, no líneas de aprobado o reprobado. Repite el test cada pocas semanas y fíjate en la tendencia y en la diferencia entre izquierda y derecha.',
      ],
      sourceNote: 'Hebert-Losier 2017, tabla 4: estimaciones del modelo para un índice de masa corporal de 24,2 y un nivel de actividad física 4, promedio de las dos piernas, redondeado. Lunsford y Perry 1995: 203\u00A0adultos de 20 a 59\u00A0años.',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry, CITE.silbernagelHeelRise],
    },
    {
      h2: '¿Cuándo y con qué frecuencia deben hacer ejercicios de pie los corredores?',
      paragraphs: [
        '**Ningún estudio ha comparado hacer los ejercicios de pie después de correr con hacerlos en un día de descanso,** así que el horario de abajo es práctico, no probado.',
        {
          list: [
            '**Después de una carrera suave o en un día de descanso.** Los ejercicios cansan los músculos pequeños del pie, así que encajan mejor después de una carrera corta y suave que antes de una sesión dura o una tirada larga.',
            '**No justo antes de un entrenamiento de velocidad o una carrera.** Para eso quieres las pantorrillas frescas.',
            '**Elevaciones de talón de 2 a 3\u00A0días a la semana,** con un día libre entre ellas, como cualquier trabajo de fuerza.',
            '**Core del pie, dedos y equilibrio de 2 a 5\u00A0días a la semana.** En el ensayo de 2019, los corredores hicieron ejercicios de pie al menos cinco veces por semana y ganaron fuerza en unos dos meses (Ridge y colegas, 2019).',
          ],
        },
        'Date tiempo. El tamaño muscular cambió en unos dos meses en los ensayos, pero la reducción de lesiones del ensayo de Taddei solo apareció después de cuatro a ocho meses. Una rutina que mantienes durante meses importa más que una dura que dejas a las tres semanas.',
      ],
      table: {
        caption: 'Una semana de ejemplo para un corredor',
        head: ['Día', 'Carrera', 'Rutina de pies'],
        rows: [
          ['Lun', 'Descanso', 'Rutina completa'],
          ['Mar', 'Velocidad', 'Nada'],
          ['Mié', 'Suave', 'Core del pie, dedos, equilibrio'],
          ['Jue', 'Descanso', 'Rutina completa'],
          ['Vie', 'Suave', 'Core del pie, equilibrio'],
          ['Sáb', 'Tirada larga', 'Nada'],
          ['Dom', 'Suave o descanso', 'Rutina completa'],
        ],
      },
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
    },
    {
      h2: '¿Puedes hacer ejercicios de pie con una molestia leve?',
      paragraphs: [
        'Normalmente sí, si la molestia es leve y estable, y si haces ajustes. Usa la misma regla que en el resto de este sitio: algo de incomodidad está bien, pero para por ese día si el dolor pasa de 6 sobre 10, y baja la intensidad si está peor a la mañana siguiente.',
        'Algunas molestias cambian el plan:',
        {
          list: [
            '**Dolor de talón en los primeros pasos de la mañana** apunta a fascitis plantar. Ahí importan más las elevaciones de talón y los estiramientos: consulta [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) y [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
            '**Dolor en la parte de atrás del talón o en el tendón de Aquiles** necesita un plan de pantorrilla más gradual, a menudo con bajadas lentas de talón: consulta [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
            '**Dolor a lo largo de la parte interna de la espinilla** puede ser periostitis tibial: consulta [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/).',
            '**Dolor en un punto de un hueso** que crece con cada carrera es una señal de alerta de fractura por estrés. Deja de correr y haz que te lo revisen.',
          ],
        },
      ],
    },
    {
      h2: 'Lo que los ejercicios de pie no hacen',
      paragraphs: [
        '**No sustituyen un entrenamiento sensato.** En los estudios con corredores de larga distancia, entre el 19,4\u00A0% y el 79,3\u00A0% sufrieron una lesión en la pierna, y una distancia semanal larga en los hombres y una lesión previa estuvieron entre los factores de riesgo más claros (van Gent y colegas, 2007). En un estudio danés con 874\u00A0corredores principiantes, quienes aumentaron su distancia semanal en más del 30\u00A0% parecieron más propensos a algunas lesiones por sobrecarga, aunque el resultado se quedó justo por debajo de la significación estadística (Nielsen y colegas, 2014).',
        '**El trabajo de fuerza no protege de forma automática.** En un ensayo con 720\u00A0corredores que debutaban en el Maratón de Nueva York, un programa autoguiado de 10\u00A0minutos para cadera, muslos y core, tres veces por semana durante unos tres meses, no redujo las lesiones por sobrecarga que impidieron a los corredores terminar el maratón: 7,1\u00A0% en el grupo de fuerza frente a 7,3\u00A0% en los demás (Toresdahl y colegas, 2020). Ese programa no entrenaba los pies, pero recuerda que una rutina en el papel no es lo mismo que un resultado.',
        '**Cambian la forma del arco solo un poco.** En un estudio pequeño de 21\u00A0personas sin grupo control, el arco bajó 1,8\u00A0mm menos después de un mes de entrenamiento de pie corto (Mulligan y Cook, 2013). Espera un pie más fuerte y más estable, no un arco nuevo. El calzado y correr descalzo son otro tema, que se trata en [zapatos barefoot](/es/zapatos-barefoot/).',
      ],
      sourceNote: 'Toresdahl 2020: aleatorizado, 720\u00A0inscritos, razón de riesgo 0,97 (IC del 95\u00A0%: 0,57 a 1,63), p = 0,90. El programa trabajaba cuádriceps, abductores de cadera y core; instrucciones escritas y en video.',
      cites: [CITE.vanGent, CITE.nielsen, CITE.toresdahl, CITE.mulliganCook],
    },
  ],
  faq: [
    {
      q: '¿Cuáles son los mejores ejercicios de pie para corredores?',
      cites: [CITE.taddeiRRI],
      a: 'Una serie corta que cubra cuatro cosas: el ejercicio de pie corto para el arco, elevaciones de talón con la rodilla recta y doblada para la pantorrilla y el sóleo, elevaciones del dedo gordo para el impulso, y equilibrio a una pierna. Un programa de core del pie basado en la misma idea redujo las lesiones por correr en un ensayo con 118\u00A0corredores.',
    },
    {
      q: '¿Los ejercicios para fortalecer los pies previenen lesiones al correr?',
      cites: [CITE.taddeiRRI],
      a: 'Puede que sí. En un ensayo de 2020 con 118\u00A0corredores recreativos, el grupo sin entrenamiento del core del pie tuvo 2,42\u00A0veces más probabilidades de lesionarse en 12\u00A0meses, y el efecto apareció después de cuatro a ocho meses. Es un solo ensayo de un solo grupo de investigación, así que la evidencia es prometedora pero no está resuelta.',
    },
    {
      q: '¿Con qué frecuencia deben hacer ejercicios de pie los corredores?',
      cites: [CITE.ridgeMinimalist],
      a: 'De dos a cinco días a la semana para el core del pie, los dedos y el equilibrio, y de dos a tres días a la semana para las elevaciones de talón, con un día libre entre ellas. En un ensayo de 2019, los corredores que hicieron ejercicios de pie al menos cinco veces por semana ganaron fuerza en unos dos meses.',
    },
    {
      q: '¿Debo hacer los ejercicios de pie antes o después de correr?',
      a: 'Después de una carrera suave o en un día de descanso es la opción práctica, porque los ejercicios cansan los músculos pequeños del pie. Ningún estudio ha comparado el momento. Evita la rutina completa justo antes de un entrenamiento de velocidad, una tirada larga o una carrera, cuando quieres los pies y las pantorrillas frescos.',
    },
    {
      q: '¿Cuántas elevaciones de talón a una pierna debería hacer un corredor?',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry],
      a: 'No hay una cifra específica para corredores. Los adultos sanos hacen una mediana de unas 23 a 24 por pierna a un ritmo fijo, y se ha propuesto 25 como normal. Muchos corredores activos hacen más. Vale la pena seguir una diferencia de más del 10\u00A0% entre piernas. La página del test de elevación de talón tiene el protocolo completo.',
    },
    {
      q: '¿Cuánto tardan los ejercicios de pie en notarse?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'En los ensayos, los músculos del pie se hicieron más grandes y más fuertes en unos dos meses. La reducción de lesiones del ensayo con corredores tardó más y apareció después de cuatro a ocho meses. Planea mantener una rutina corta durante meses, no semanas.',
    },
    {
      q: '¿Puedo seguir corriendo mientras hago ejercicios de pie?',
      a: 'Sí. La rutina está pensada para ir junto con tus carreras. Si tienes una molestia leve, deja un ejercicio por ese día si el dolor pasa de 6 sobre 10, y mantén las carreras suaves si el dolor está peor a la mañana siguiente. Un dolor que crece con cada carrera, o que está en un punto de un hueso, necesita un profesional de la salud.',
    },
    {
      q: '¿Correr descalzo o usar zapatos minimalistas fortalece los pies?',
      cites: [CITE.ridgeMinimalist],
      a: 'En un ensayo de 2019 con corredores, caminar con zapatos minimalistas, con un aumento lento y gradual, fortaleció los pies más o menos igual que los ejercicios. Cambiar tus zapatos de correr de golpe es otra cosa y tiene sus propios riesgos, así que si lo pruebas, ve aumentando poco a poco.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor está en un punto de un hueso del pie o de la espinilla y empeora con cada carrera, lo que puede ser una fractura por estrés',
      'no puedes apoyar peso en el pie, o cojeas al caminar',
      'el dolor empezó con un chasquido, una caída o una torcedura de tobillo',
      'el pie o el tobillo están hinchados, rojos o calientes, o tienes fiebre',
      'sientes entumecimiento, hormigueo o ardor en el pie',
      'el talón o el pie duelen por la noche o en reposo',
      'el dolor sigue empeorando durante dos a tres semanas a pesar de correr más suave',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie con los ejercicios de esta página: el pie corto de sentado a una pierna, elevaciones de talón, elevaciones del dedo gordo, separación de dedos y equilibrio a una pierna. No planifica tus carreras, así que mantén tu propio plan de entrenamiento y pon las sesiones en los días suaves.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas cómo sientes los pies, y el plan se ajusta. Cada 14\u00A0días, una prueba corta revisa las elevaciones de talón, el sostén del arco y el equilibrio, izquierda frente a derecha. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['footStrengthening', 'calfRaiseTest', 'shinSplints'],
  crumb: 'Ejercicios de pies para corredores',
  campaign: 'guide-foot-exercises-for-runners-es',
};
