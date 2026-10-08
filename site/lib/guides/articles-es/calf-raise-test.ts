import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of `articles/calf-raise-test.ts`. Same citations
 * (`CITE.silbernagelHeelRise`, `CITE.lunsfordPerry`, see the note in the
 * English file). Statistics use decimal commas, as `es.ts` does.
 */

export const CALF_RAISE_TEST_ES: Guide = {
  lang: 'es',
  page: 'calfRaiseTest' as any,
  mainSource: CITE.hebertLosier,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Test de elevación de talón: valores por edad y cómo hacerlo',
  description:
    'Test de elevación de talón a una pierna: cómo hacerlo, valores normales por edad y sexo, y qué significa tu resultado.',
  h1: 'Test de elevación de talón: ¿cuántas deberías hacer y qué significa tu resultado?',
  lede:
    'El test de elevación de talón a una pierna mide la resistencia de los músculos de la pantorrilla. Te paras en un pie y subes en puntas tantas veces como puedas a un ritmo fijo. El número te dice cuánta fuerza resistente a la fatiga tiene la pantorrilla de cada lado, algo que importa para caminar, correr y recuperarte de lesiones del talón o del tendón de Aquiles.',
  intro: [
    'Un estudio de 2017 con 566 adultos sanos encontró una mediana general de unas 23 a 24 repeticiones por pierna, que cambia según la edad, el sexo y el nivel de actividad. Esta página explica el protocolo de la investigación, una versión para hacer en casa, los valores normales por edad, qué significa una diferencia entre izquierda y derecha, y cómo se relaciona el test con el dolor de talón y con correr.',
  ],
  takeaways: [
    'La mediana general en adultos sanos es de 24 repeticiones en la pierna derecha y 23 en la izquierda, según un estudio con 566 personas de 20 a 81 años (Hebert-Losier y colegas, 2017).',
    'En general, los hombres hicieron más repeticiones que las mujeres (mediana de 24 frente a 21), pero las mujeres de más de 60 años superaron a los hombres de la misma edad (Hebert-Losier y colegas, 2017).',
    'Una diferencia entre izquierda y derecha de más del 10\u00A0% es el umbral habitual para considerar una asimetría importante en la rehabilitación de la pierna (Silbernagel y colegas, 2010).',
    'El test es muy confiable: ICC de 0,96 y un error de medición típico de unas dos repeticiones (Hebert-Losier y colegas, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué mide el test de elevación de talón a una pierna?',
      keyFact: 'En un estudio de casos y controles con 20\u00A0atletas, los que tenían síndrome de estrés tibial medial (periostitis tibial) mostraron menos resistencia de pantorrilla que los controles sanos (Madeley y colegas, 2007).',
      paragraphs: [
        'El test mide la resistencia de los flexores plantares, los músculos que empujan el pie hacia abajo y levantan el talón del piso. Los principales son el gastrocnemio (el músculo más grande y externo de la pantorrilla) y el sóleo (el más profundo, debajo de él). Juntos se unen al hueso del talón a través del tendón de Aquiles.',
        'Aquí, resistencia quiere decir cuántas repeticiones puedes hacer antes de que la pantorrilla se canse y el talón ya no suba lo suficiente o no siga el ritmo. El número muestra la capacidad de aguantar el trabajo durante decenas de repeticiones, que se parece más a lo que hace la pantorrilla al caminar y correr que un solo empujón con mucho peso.',
        'Los profesionales de la salud usan el test para seguir la recuperación de una rotura del tendón de Aquiles, para detectar debilidad de pantorrilla en personas con dolor de talón o periostitis tibial, y para comparar una pierna con la otra. En un estudio de casos y controles con 20 atletas, los que tenían síndrome de estrés tibial medial (periostitis tibial) tenían menos resistencia en la pantorrilla que los controles sanos.',
      ],
      cites: [CITE.hebertLosier, CITE.madeley],
    },
    {
      h2: '¿Cómo se hace el test de elevación de talón? El protocolo de la investigación',
      paragraphs: [
        'El protocolo de Hebert-Losier 2017 es la versión más citada y la fuente de los valores normales de esta página. En ese estudio, 566 adultos sanos de 20 a 81 años hicieron elevaciones de talón a una pierna hasta la fatiga, con cada pierna.',
        'La persona se para descalza o con zapatos planos sobre una tabla inclinada a 10\u00A0grados, un pie a la vez. Se permite apoyar la punta de los dedos en una pared a la altura del hombro, solo para el equilibrio. Un metrónomo marca 60\u00A0pulsaciones por minuto: un pulso para subir y uno para bajar, así que cada repetición completa dura dos segundos. La indicación es subir el talón lo más alto posible, con la rodilla estirada y el tronco derecho.',
        'El test termina cuando el talón ya no se despega de la tabla, cuando ya no se puede seguir el ritmo del metrónomo, cuando la rodilla se dobla o el tronco se inclina, o cuando la persona empuja la pared en vez de solo tocarla con la punta de los dedos. Se da un aviso verbal antes de terminar. El calentamiento es de 10\u00A0minutos de caminata rápida y después 10 elevaciones de talón con los dos pies. Hay dos minutos de descanso entre una pierna y la otra.',
      ],
      sourceNote:
        'Hebert-Losier 2017: ICC 0,96 (derecha) y 0,96 (izquierda); diferencia media entre días de 0,2\u00A0repeticiones (LDA 95\u00A0%: -6,2 a 6,5) en la derecha y 0,1\u00A0repeticiones (LDA 95\u00A0%: -6,1 a 6,2) en la izquierda.',
      cites: [CITE.hebertLosier],
    },
    {
      h2: '¿Cómo hacer el test de elevación de talón en casa?',
      paragraphs: [
        'No necesitas una tabla inclinada. En el piso plano el test es un poco más fácil, así que tu número puede salir unas repeticiones más alto que los valores publicados. No pasa nada: sirve igual para ver cómo cambias con el tiempo y para comparar izquierda y derecha.',
        'Párate cerca de una pared y toca la pared con la punta de los dedos a la altura del hombro. Levanta un pie. Pon una app de metrónomo a 60\u00A0pulsaciones por minuto. En el primer pulso, sube en puntas lo más alto que puedas. En el segundo, baja el talón al piso. Sigue hasta que no puedas mantener el ritmo, el talón apenas suba o se te doble la rodilla.',
        'Cuenta el total de repeticiones. Descansa dos minutos y repite con la otra pierna. Anota los dos números y la fecha. El error de medición típico es de unas dos repeticiones, así que un cambio pequeño entre un día de test y otro es ruido. Lo que importa es la tendencia a lo largo de las semanas.',
      ],
      exercises: [
        {
          name: 'Test de elevación de talón a una pierna (versión en casa)',
          dose: 'Máximo de repeticiones a 60\u00A0pulsaciones por minuto, una serie por pierna',
          how: 'Párate en un pie cerca de una pared, con la punta de los dedos tocándola para el equilibrio. Sube en puntas en un segundo y baja en un segundo, al ritmo de un metrónomo a 60\u00A0pulsaciones por minuto. Sigue hasta que no puedas mantener el ritmo o el talón apenas suba. Cuenta las repeticiones. Descansa 2\u00A0minutos y repite con la otra pierna.',
          feel: 'Un ardor en la pantorrilla que crece con las repeticiones',
          stop: 'No puedes levantar el talón, no puedes seguir el ritmo del metrónomo o se te dobla la rodilla',
          media: 'heel_raise_double',
          mediaIsStandIn: true,
          caption: 'Test de elevación de talón: sube lo más alto que puedas en cada pulso, con la punta de los dedos en la pared para el equilibrio',
          alt: 'Una figura sube en puntas sobre un pie, con la punta de los dedos en una pared para el equilibrio',
        },
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: '¿Cuántas elevaciones de talón a una pierna deberías poder hacer?',
      keyFact: 'En 1995, un estudio con 203\u00A0adultos de 20 a 59\u00A0años propuso 25\u00A0repeticiones como referencia de un rendimiento normal en la elevación de talón a una pierna (Lunsford y Perry, 1995).',
      paragraphs: [
        'La tabla de abajo muestra la mediana de repeticiones de elevación de talón a una pierna según la edad y el sexo, de Hebert-Losier 2017. Son estimaciones del modelo para una persona con un nivel de actividad física moderado (nivel 4 en una escala de 6 puntos) y un índice de masa corporal de 24,2, con el promedio de las dos piernas.',
        'Los niveles de actividad más altos suman de cinco a nueve repeticiones a la mediana. En 1995, Lunsford y Perry evaluaron a 203 adultos de 20 a 59 años y recomendaron 25 repeticiones como criterio de un resultado normal. Los datos de Hebert-Losier respaldan esa cifra como una referencia razonable para adultos, aunque es una mediana de la población, no una línea de aprobado o reprobado. Tu propio punto de partida y hacia dónde vas importan más que cualquier número suelto.',
      ],
      table: {
        caption: 'Mediana de repeticiones de elevación de talón a una pierna por edad y sexo (Hebert-Losier 2017)',
        head: ['Edad', 'Hombres', 'Mujeres'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
          ['70', '15', '16'],
          ['80', '10', '14'],
        ],
      },
      sourceNote:
        'Estimaciones del modelo para un IMC de 24,2 y un nivel de actividad física 4. Los valores son el promedio del lado izquierdo y el derecho, redondeados al entero más cercano. De la tabla 4 de Hebert-Losier 2017 (n = 566).',
      cites: [CITE.lunsfordPerry, CITE.hebertLosier],
    },
    {
      h2: '¿Tu pierna izquierda y la derecha deberían dar lo mismo?',
      keyFact: 'En un estudio con 78\u00A0personas tras una rotura del tendón de Aquiles, la simetría promedio a los seis meses fue del 84\u00A0% en repeticiones pero solo del 61\u00A0% en trabajo total, lo que muestra que contar repeticiones puede subestimar un déficit (Silbernagel y colegas, 2010).',
      paragraphs: [
        'Casi lo mismo, sí. En el estudio de Hebert-Losier, la mediana de la diferencia entre la derecha y la izquierda fue de una repetición, y el error de medición típico fue de unas dos repeticiones. Una diferencia tan pequeña es ruido.',
        'En la rehabilitación de la pierna, un índice de simetría entre extremidades (LSI) del 90\u00A0% o más es la referencia habitual de una función normal. El LSI es el lado más débil dividido entre el más fuerte, por 100. Menos del 90\u00A0% quiere decir que un lado es más de un 10\u00A0% más débil. Silbernagel y colegas usaron este umbral en 78 pacientes después de una rotura del tendón de Aquiles: a los 6\u00A0meses, los pacientes tenían en promedio un LSI del 84\u00A0% en repeticiones y solo del 61\u00A0% en trabajo total, lo que muestra que contar solo las repeticiones puede subestimar un déficit.',
        'Sin una lesión, una diferencia de más del 10\u00A0% vale la pena anotarla y seguirla. No quiere decir que algo esté mal. Pero si la diferencia se mantiene en varios tests y además tienes dolor en el lado más débil, le da a un profesional de la salud un contexto útil.',
      ],
      cites: [CITE.hebertLosier, CITE.silbernagelHeelRise],
    },
    {
      h2: '¿Qué significa un resultado bajo, y qué no significa?',
      paragraphs: [
        'Un número bajo de elevaciones de talón te dice que la pantorrilla de ese lado se cansa antes que la mediana de la población para tu edad, sexo y nivel de actividad. No te dice por qué. Estar fuera de forma, una lesión reciente, un problema del tendón de Aquiles, evitar el dolor o no estar acostumbrado al test pueden dar un número bajo.',
        'El test no es un diagnóstico. Un resultado de 15 en un hombre de 30 años no quiere decir que tenga fascitis plantar o tendinitis de Aquiles. Quiere decir que la resistencia de su pantorrilla está por debajo de la mediana de 33 para ese grupo. Un profesional de la salud combina el número con otros hallazgos para decidir si explica un síntoma. El test dice más como tendencia que como dato suelto: pasar de 14 a 22 en dos meses es una señal más clara que cualquier número comparado con una tabla.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: '¿Qué tiene que ver la resistencia de la pantorrilla con el dolor de talón, el Aquiles y correr?',
      paragraphs: [
        'La pantorrilla y la fascia plantar están conectadas a través del hueso del talón. El tendón de Aquiles tira por detrás; la fascia tira por debajo. Una pantorrilla débil o que se cansa rápido pone más tensión en los dos con cada paso.',
        'La guía clínica de 2023 para el dolor de talón le da al estiramiento de la pantorrilla y de la fascia plantar su grado más alto, A, y al entrenamiento de fuerza una B. El ensayo de Rathleff, que probó elevaciones de talón con carga para la fascitis plantar, usó una elevación de talón como ejercicio principal, y los participantes mejoraron su dolor más rápido que solo con estiramientos durante tres meses. Mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) para el protocolo completo.',
        'Para la tendinitis de Aquiles, el test de elevación de talón es una de las medidas de resultado habituales. Las personas con tendinopatía de Aquiles en la parte media (dolor en el medio del tendón, no donde se une al hueso del talón) suelen tener menos resistencia en la pantorrilla del lado afectado. Mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/) para el trabajo excéntrico.',
        'Al correr, la pantorrilla absorbe de dos a tres veces tu peso corporal en cada zancada. Una pantorrilla que se cansa pronto pasa la carga a la rodilla, la tibia y el pie. Subir tu número puede ser parte de un plan para volver a correr. Mira [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) para ver el panorama completo.',
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.achillesGuideline, CITE.madeley],
    },
    {
      h2: '¿Cómo mejorar un resultado bajo en el test de elevación de talón?',
      paragraphs: [
        'Los ejercicios que construyen la resistencia de la pantorrilla en la rehabilitación son los mismos que suben tu resultado en el test. Empieza en el nivel que va con dónde estás ahora, y sube cuando dos sesiones seguidas se sientan fáciles.',
        'Si puedes hacer menos de 10 elevaciones a una pierna, empieza con elevaciones sentado o de pie con los dos pies. Pasa a la elevación de talón sostenida para construir resistencia isométrica, y después a elevaciones a una pierna en el piso. Hacerlas en un escalón aumenta el rango. Ponerte una mochila aumenta la carga. Mira [elevaciones de talón](/es/ejercicios/elevaciones-de-talon/) para el movimiento básico, [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/) para la versión que además carga la fascia plantar, y [excéntricos de talón](/es/ejercicios/excentricos-de-talon/) para la variante enfocada en el Aquiles.',
      ],
      exercises: [
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'Grado B en la guía para el trabajo de fuerza. Un paso previo a las elevaciones a una pierna con carga.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga.',
          feel: 'Las pantorrillas trabajando juntas',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talón sostenida',
          evidence: { level: 'moderate', why: 'Grado B en la guía. Sostener la posición arriba suma tiempo bajo tensión al final del rango.' },
          dose: '3\u00A0series de 20\u00A0segundos, los dos pies',
          how: 'Sube en puntas con los dos pies y quédate quieto arriba. No te dejes caer. Sostener carga la pantorrilla sin el rebote de una repetición completa.',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          stop: 'El dolor llega a 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene en puntas con los dos pies, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },

  ],
  faq: [
    {
      q: '¿Cuántas elevaciones de talón debería poder hacer?',
      cites: [CITE.hebertLosier],
      a: 'En un estudio con 566 adultos sanos, la mediana general fue de unas 23 a 24 repeticiones por pierna. Los hombres tuvieron una mediana de 24 y las mujeres de 21. El número baja unas cuatro o cinco repeticiones por cada década de edad. Los niveles de actividad más altos suman de cinco a nueve. Úsalos como puntos de referencia para seguir tu progreso, no como una línea de aprobado o reprobado (Hebert-Losier 2017).',
    },
    {
      q: '¿El test de elevación de talón es lo mismo que el heel-rise test?',
      a: 'Sí. «Heel-rise test» es el nombre que se usa en la investigación, en inglés. «Calf raise test» o test de elevación de talón es más común fuera de las clínicas. El movimiento es el mismo: subir en puntas sobre una pierna hasta la fatiga, a un ritmo fijo.',
    },
    {
      q: '¿Cuál es un buen resultado en el test de elevación de talón según la edad?',
      cites: [CITE.hebertLosier],
      a: 'Para una persona moderadamente activa: unas 37 para un hombre de 20 años (30 para una mujer), 28 para un hombre de 40 años (25 para una mujer) y 19 para una persona de 60 años de cualquier sexo. El nivel de actividad mueve estas medianas de cinco a nueve repeticiones (Hebert-Losier 2017).',
    },
    {
      q: '¿Cada cuánto debería repetir el test?',
      a: 'Cada dos a cuatro semanas basta para ver un cambio real sin hacer el test de más. La investigación repitió el test con una semana de diferencia y encontró una confiabilidad excelente. Walkito repite el test cada 14\u00A0días mientras la meta de pantorrilla está activa, y cada 28\u00A0días una vez que la alcanzas.',
    },
    {
      q: '¿Qué significa si una pierna es mucho más débil que la otra?',
      cites: [CITE.silbernagelHeelRise],
      a: 'En la rehabilitación, una diferencia de más del 10\u00A0% suele marcarse como un posible déficit. En adultos sanos, la diferencia típica es de una o dos repeticiones. Una diferencia que se mantiene, con dolor en el lado más débil, es motivo para consultar a un profesional de la salud. Sin dolor, anótala y entrénala (Silbernagel 2010).',
    },
    {
      q: '¿Necesito un metrónomo para el test?',
      a: 'El protocolo de la investigación usa un metrónomo a 60\u00A0pulsaciones por minuto. Las apps de metrónomo gratis funcionan bien. Sin una, cuenta «mil uno» al subir y al bajar. Tu número se podrá comparar menos con los valores publicados, pero hacer el test siempre igual importa más que copiar exactamente el montaje de la investigación.',
    },
    {
      q: '¿El test de elevación de talón puede diagnosticar fascitis plantar o tendinitis de Aquiles?',
      a: 'No. Un resultado bajo te dice que la pantorrilla se cansa pronto, no por qué. La fascitis plantar, la tendinitis de Aquiles, estar fuera de forma y una lesión reciente pueden dar un número bajo. Los profesionales de la salud combinan el resultado con un examen físico y tu historia. El test mide la resistencia de la pantorrilla, no un problema concreto.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'la pantorrilla o el Aquiles está hinchado, caliente o duele al tocarlo, lo que puede indicar un desgarro agudo o un problema del tendón',
      'sentiste un chasquido o un golpe repentino en la pantorrilla durante una actividad',
      'no puedes apoyar el pie, o cojeas',
      'el dolor es agudo y en un punto concreto, no una molestia general',
      'tienes entumecimiento, hormigueo o ardor en el pie o en la parte baja de la pierna',
      'el test te provoca exactamente el dolor que quieres evaluar, con una intensidad más que leve',
      'sabes que tienes una rotura del tendón de Aquiles o te operaron hace poco',
      'una pantorrilla se ve más pequeña que la otra y no lo has consultado con un profesional de la salud',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito hace el test de elevación de talón a una pierna cada 14\u00A0días y registra las dos piernas. La meta de pantorrilla es de 25 elevaciones a una pierna. La meta de simetría es una diferencia entre izquierda y derecha de menos del 10\u00A0%. La app calcula la diferencia como la resta entre el lado más fuerte y el más débil, dividida entre el lado más fuerte. Cuando cumples las dos metas, el test pasa a ser cada 28\u00A0días y el plan se mueve a la siguiente meta activa.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. El trabajo de pantorrilla empieza con elevaciones sentado y avanza, a tu ritmo, por elevaciones con dos pies, elevación sostenida, elevación con toalla, excéntricos de talón y saltos cortos. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  crumb: 'Test de elevación de talón',
  campaign: 'calf-raise-test-es',
};
