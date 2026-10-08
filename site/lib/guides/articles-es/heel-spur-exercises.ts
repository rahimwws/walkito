import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Ejercicios para el espolón calcáneo (ES) ──────────────────────────
 *
 * Translated from `articles/heel-spur-exercises.ts`. Written around the
 * Spanish queries «ejercicios espolón calcáneo», «espolón calcáneo
 * ejercicios», «estiramientos espolón calcáneo». Figures, doses, grades
 * and qualifiers are identical to the English page. No new citations.
 */

export const HEEL_SPUR_EXERCISES_ES: Guide = {
  lang: 'es',
  page: 'heelSpurExercises',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicios para el espolón calcáneo: estiramientos y fuerza',
  description:
    'Ejercicios para el espolón calcáneo: rutina de fascia plantar y pantorrilla, dosis y progresión que alivian el dolor sin disolver el espolón.',
  h1: 'Ejercicios para el espolón calcáneo: estiramientos y fortalecimiento para el dolor alrededor de un espolón',
  lede:
    'El ejercicio no disuelve un espolón calcáneo. El espolón es hueso, y el hueso no se encoge con estiramientos. Pero el dolor que sienten las personas con un espolón casi siempre viene de la fascia plantar y la pantorrilla a su alrededor, no del hueso en sí. Los ejercicios de abajo trabajan esos tejidos blandos. Son los mismos que la guía clínica de 2023 para el dolor de talón recomienda para la fascitis plantar.',
  intro: [
    'Si primero quieres entender la diferencia entre un espolón calcáneo y la fascitis plantar, mira [fascitis plantar vs espolón calcáneo](/es/fascitis-plantar-vs-espolon-calcaneo/). Esta página es la rutina práctica: qué ejercicios, cuántos, cómo progresar y cuándo parar.',
  ],
  takeaways: [
    'Los ejercicios para el espolón calcáneo funcionan porque trabajan la fascia plantar y los músculos de la pantorrilla alrededor del espolón, no porque cambien el espolón en sí.',
    'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**, y al entrenamiento de fuerza una **B** (Koc y colegas, 2023).',
    'En un ensayo con 48\u00A0personas con fascitis plantar, las elevaciones de talón con carga y una toalla bajo los dedos aliviaron el dolor más rápido que solo estirar a los tres meses, aunque a los doce meses los dos grupos estaban igualados (Rathleff y colegas, 2015).',
    'Una pantorrilla tensa, medida como dorsiflexión de tobillo reducida, fue el factor de riesgo independiente más fuerte para la fascitis plantar en un estudio de casos y controles pareados con 50\u00A0casos y 100\u00A0controles (Riddle y colegas, 2003).',
    'Una revisión sistemática y metaanálisis encontró que tanto el estiramiento de la pantorrilla como el de la fascia plantar redujeron el dolor en comparación con no estirar, con una leve ventaja del estiramiento de la fascia plantar (Siriphorn y Eksakulkla, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Por qué los ejercicios ayudan con un espolón calcáneo?',
      keyFact: 'En un estudio con 530\u00A0personas con dolor de pie, un espolón apareció solo en el 6\u00A0% de los pies, por lo general junto con una fascia plantar engrosada (Menz y colegas, 2019).',
      paragraphs: [
        'El espolón calcáneo es un crecimiento de hueso en la parte inferior del hueso del talón. En un estudio con 530\u00A0personas de 50\u00A0años o más con dolor de pie, un espolón calcáneo solo era raro (6\u00A0% de los pies), y el dolor de talón se asoció con un espolón junto con una fascia plantar engrosada, la banda de tejido bajo el pie (Menz y colegas, 2019). El dolor viene del tejido blando, y eso es lo que el ejercicio puede alcanzar.',
        'Estirar la fascia plantar y la pantorrilla reduce la tensión en la unión del talón. Fortalecer la pantorrilla aumenta la capacidad de la cadena que absorbe la carga cada vez que el talón golpea el piso. Juntos, bajan el estrés diario sobre el tejido alrededor del espolón.',
        'Ningún programa de ejercicios va a hacer que un espolón desaparezca de la radiografía. Pero la mayoría de las personas con un espolón calcáneo no necesitan que el espolón desaparezca. Necesitan que el dolor se calme, y eso viene de que la fascia y la pantorrilla se vuelvan más fuertes y más flexibles.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
    {
      h2: '¿Qué estiramientos ayudan con el espolón calcáneo?',
      keyFact: 'Una revisión sistemática encontró que tanto estirar la pantorrilla como estirar la fascia plantar alivian el dolor de la fascitis plantar en comparación con no estirar (Siriphorn y Eksakulkla, 2020).',
      paragraphs: [
        'El estiramiento es el punto de partida. La guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla un grado **A**, el más alto. Una revisión sistemática y metaanálisis de estiramiento para la fascitis plantar encontró que tanto el estiramiento de la pantorrilla como el de la fascia plantar redujeron el dolor en comparación con no estirar (Siriphorn y Eksakulkla, 2020). Empieza con estos tres.',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'Grado A en la guía. Un ensayo de 2003 con 101\u00A0personas encontró que este estiramiento fue más eficaz que estirar solo la pantorrilla a las 8\u00A0semanas.' },
          dose: '10\u00A0repeticiones de 10\u00A0segundos, cada pie',
          how: 'Siéntate y cruza un tobillo sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. Mantén y suelta. Hazlo antes del primer paso en la mañana y después de estar sentado mucho rato.',
          often: 'Cada mañana y después de estar sentado',
          feel: 'Un estiramiento a lo largo del arco, no dolor agudo',
          stop: 'Dolor de 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás antes de pararte',
          alt: 'Una figura sentada jala los dedos hacia atrás para estirar el arco, con la fascia plantar resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'Grado A en la guía. Un gastrocnemio tenso fue el factor de riesgo más fuerte para la fascitis plantar en un estudio de casos y controles de 2003.' },
          dose: '2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared. Pierna de atrás estirada, talón en el piso, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla. El gastrocnemio, el músculo más grande y superficial de la pantorrilla, solo se estira con la rodilla estirada.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor de 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, inclínate hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada y la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'strong', why: 'Grado A en la guía. Trabaja el sóleo, el músculo más profundo de la pantorrilla, que solo se suelta con la rodilla doblada.' },
          dose: '2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'En la misma posición en la pared, dobla la rodilla de atrás hasta que el estiramiento baje, cerca del talón. El sóleo está debajo del gastrocnemio y se une más cerca del talón.',
          often: 'La mayoría de las sesiones, después del estiramiento con rodilla estirada',
          feel: 'Un estiramiento más abajo en la pantorrilla, cerca del talón',
          stop: 'Dolor de 6/10',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura en posición de paso con las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.digiovanni2003, CITE.riddle],
    },
    {
      h2: '¿Qué ejercicios de fortalecimiento ayudan con el espolón calcáneo?',
      keyFact: 'En un ensayo con 48\u00A0personas, el grupo de las elevaciones de talón anotó 29\u00A0puntos mejor en el Foot Function Index que el grupo que solo estiraba, a los tres meses (Rathleff y colegas, 2015).',
      paragraphs: [
        'El estiramiento solo suele ser suficiente en las primeras semanas. Cuando el dolor de la mañana empiece a ceder, añadir fortalecimiento de la pantorrilla aumenta la capacidad que la cadena del talón necesita. La guía le da al entrenamiento de fuerza un grado **B**, el segundo más alto. En el único ensayo diseñado para probar las elevaciones de talón en la fascitis plantar, 48\u00A0personas se dividieron en un grupo de elevaciones con carga y un grupo de solo estiramientos. El grupo de elevaciones de talón mejoró 29\u00A0puntos más en el Foot Function Index a los tres meses (Rathleff y colegas, 2015).',
        'Empieza en el nivel más fácil y sube solo cuando se sienta fácil durante dos sesiones seguidas. La progresión de abajo va desde el trabajo sentado hasta la elevación con toalla y carga del ensayo.',
      ],
      exercises: [
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'El grado B de la guía cubre el trabajo de fuerza en general. Este paso inicial de poca carga no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Siéntate con los pies apoyados en el piso. Empuja hacia arriba con la parte delantera de los dos pies. Las manos en las rodillas añaden resistencia suave. Es la forma de menor carga para empezar a trabajar la pantorrilla.',
          often: 'Días de fuerza',
          feel: 'Trabajo ligero en las pantorrillas, casi sin carga en el talón',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'Grado B en la guía. Un paso previo al trabajo con una pierna y carga.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga. Agárrate de una pared o barandal para el equilibrio.',
          often: 'Días de fuerza, cuando las elevaciones sentado se sientan fáciles durante dos sesiones',
          feel: 'Las pantorrillas trabajando juntas',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talón sostenida (isométrica)',
          evidence: { level: 'moderate', why: 'Grado B en la guía. Mantenimiento isométrico en el punto más alto. No se probó en un ensayo aislado de fascitis plantar.' },
          dose: '3\u00A0repeticiones de 20\u00A0segundos, los dos pies',
          how: 'Sube en puntas con los dos pies y quédate quieto arriba. No te dejes caer. Mantenerlo carga el tendón sin el rebote de una repetición completa.',
          often: 'Días de fuerza, el paso después de las elevaciones con dos pies',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura mantiene una posición elevada con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con toalla (una pierna)',
          evidence: { level: 'strong', why: 'El ejercicio del ensayo de Rathleff de 2015. Grado B en la guía.' },
          dose: 'Protocolo de investigación: 3\u00A0series de 12RM, progresando a 5\u00A0series de 8RM. Walkito empieza con 3\u00A0series de 12, cada pierna',
          how: 'Párate en un pie en la orilla de un escalón, con una toalla enrollada bajo los cinco dedos. Tres segundos para subir, dos segundos arriba, tres segundos para bajar. La toalla activa el mecanismo de molinete, cargando la fascia plantar junto con la pantorrilla. Añade peso con una mochila cuando la última repetición deje de costar.',
          often: 'Cada dos días en el ensayo. Walkito lo programa en días de fuerza, nunca dos seguidos.',
          feel: 'Trabajo fuerte en la pantorrilla y un tirón bajo el arco',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_towel',
          caption: 'Elevación de talón con toalla: tres segundos para subir, mantén arriba, tres segundos para bajar',
          alt: 'Una figura en un escalón sube en puntas con una toalla enrollada bajo el pie',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: '¿Cómo progresar en los ejercicios para el espolón calcáneo?',
      paragraphs: [
        'Progresa por cómo se siente, no por el calendario. La regla es: si el nivel actual se sintió fácil durante dos sesiones seguidas, sube un paso. Si el dolor de la mañana es peor después de una sesión, quédate en el nivel actual o baja un paso.',
      ],
      table: {
        caption: 'Progresión de ejercicios para el espolón calcáneo',
        head: ['Nivel', 'Ejercicio', 'Cuándo subir'],
        rows: [
          ['1', 'Estiramiento de la fascia plantar + estiramientos de pantorrilla solamente', 'El dolor de la mañana va cediendo y quieres añadir fuerza'],
          ['2', 'Elevaciones de talón sentado (3 x 10)', 'Fácil durante dos sesiones seguidas'],
          ['3', 'Elevaciones de talón con dos pies (3 x 10)', 'Fácil durante dos sesiones seguidas'],
          ['4', 'Elevación de talón sostenida (3 x 20\u00A0segundos)', 'Fácil durante dos sesiones seguidas'],
          ['5', 'Elevación con toalla, una pierna (3 x 12)', 'Progresa la carga con una mochila cuando el peso corporal se siente fácil'],
        ],
      },
      after: [
        'Añade el estiramiento de la fascia plantar y los estiramientos de pantorrilla en todos los niveles. El estiramiento no es algo que dejas cuando empiezas a fortalecer. La guía califica ambos de forma independiente.',
        'Para más detalle sobre el protocolo de elevación con toalla y la investigación detrás, mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Ejercicios de apoyo opcionales',
      paragraphs: [
        'Los estiramientos y las elevaciones de talón de arriba son lo principal. Los siguientes ejercicios no son específicos para el espolón calcáneo, pero trabajan los músculos del pie y el tobillo que sostienen el arco y absorben el impacto. La evidencia detrás de cada uno es más limitada.',
      ],
      exercises: [
        {
          name: 'Automasaje plantar',
          evidence: { level: 'early', why: 'No se probó en los estudios de esta página. Es una medida de confort entre sesiones.' },
          dose: '2\u00A0minutos, cada pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje o una botella de agua congelada. Mantén la presión firme pero sin que te haga torcer la cara. Rodar después de un día largo de pie puede calmar el tejido.',
          often: 'Días de descanso o después de un día largo',
          feel: 'Presión firme bajo el pie, nunca dolor agudo',
          stop: 'Dolor de 6/10',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota',
        },
        {
          name: 'Pie corto, sentado',
          evidence: { level: 'early', why: 'Una revisión de 2024 encontró que el ejercicio de pie corto cambió la forma del arco pero no el dolor. Parte de un programa que mejoró las medidas del arco en un ensayo de 2023.' },
          dose: '3\u00A0series de 10, manteniendo 5\u00A0segundos, cada pie',
          how: 'Siéntate con el pie apoyado en el piso. Jala la parte delantera del pie hacia el talón para que el arco suba. No dobles los dedos. Esto entrena el músculo pequeño dentro del arco.',
          often: 'Días de fuerza',
          feel: 'El arco subiendo, dedos relajados',
          stop: 'Dolor de 6/10',
          media: 'short_foot_seated',
          caption: 'Pie corto: jala la parte delantera del pie hacia el talón',
          alt: 'Una pierna sentada con el pie en el piso, con el arco resaltado mientras sube',
        },
        {
          name: 'Equilibrio en una pierna',
          evidence: { level: 'early', why: 'No hay estudio específico para el espolón calcáneo. Trabajo de equilibrio general para el pie y el tobillo.' },
          dose: '3\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Párate en un pie y mira un punto fijo. Deja que el pie se tambalee. El tambaleo es el pie haciendo el equilibrio. Ponte cerca de una pared por seguridad.',
          often: 'Días de equilibrio',
          feel: 'Correcciones pequeñas en el pie y el tobillo',
          stop: 'Dolor de 6/10',
          media: 'single_leg_hold',
          caption: 'Equilibrio en una pierna: párate en un pie y déjalo hacer correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
      ],
      cites: [CITE.cheng, CITE.brijwasi],
    },
    {
      h2: '¿Cómo deben sentirse los ejercicios y cuándo debes parar?',
      paragraphs: [
        'El estiramiento debe sentirse como un tirón, no como una puñalada. Un estiramiento de pantorrilla que produce una tensión cómoda en la parte alta o baja de la pantorrilla va por buen camino. Un estiramiento de la fascia plantar que jala suavemente a lo largo del arco va por buen camino. Si el estiramiento reproduce el dolor agudo que sientes en los primeros pasos, afloja.',
        'Las elevaciones de talón deben sentirse como trabajo de pantorrilla. La versión con toalla también produce un tirón bajo el arco, que es la fascia cargándose. Ese tirón es lo esperado y es el objetivo de la toalla.',
        'Detente por el resto del día si el dolor llega a **6/10 o más** durante cualquier ejercicio, o si los primeros pasos a la mañana siguiente son claramente peores de lo normal. Esa regla de parar y bajar un nivel es la que usa la app. Un poco de molestia que se calma en un día es normal, sobre todo en las primeras dos semanas. Un dolor que se mantiene elevado por días o que empeora semana a semana es razón para bajar un nivel o consultar a un profesional de la salud.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Cuánto tarda el dolor del espolón en mejorar con ejercicio?',
      paragraphs: [
        'No hay un ensayo que mida los resultados del ejercicio específicamente para personas con espolón calcáneo. Los tiempos de abajo vienen de estudios de fascitis plantar, que es la afección que produce el dolor alrededor del espolón en la mayoría de los casos.',
        'Una revisión de la evidencia clínica indica que cerca del 90\u00A0% de las personas con fascitis plantar mejora con cuidados sin cirugía, como estiramientos y plantillas, a menudo en varios meses (Latt y colegas, 2020). En el ensayo de Rathleff de 2015, el grupo de elevaciones de talón con carga iba significativamente adelante del grupo de solo estiramientos a los tres meses.',
        'Ningún programa de ejercicios puede prometer un plazo para ninguna persona. Lo que sí puedes medir es si las cosas están cambiando. El dolor de la mañana en una escala de 0 a 10, anotado antes del primer paso, es la señal más clara en el día a día. La resistencia de la pantorrilla, medida por cuántas elevaciones de talón a una pierna puedes hacer, sigue la fuerza a lo largo de semanas. Las dos son más útiles que adivinar.',
      ],
      cites: [CITE.latt, CITE.rathleff],
    },
    {
      h2: '¿Se puede eliminar un espolón calcáneo de forma natural?',
      paragraphs: [
        'El ejercicio, el estiramiento y los cambios de alimentación no disuelven un espolón calcáneo. El espolón es hueso calcificado. Se queda en la radiografía estires o no.',
        'Pero «eliminar el espolón» rara vez es la meta correcta. En el estudio de 2019, el espolón casi siempre venía con una fascia plantar engrosada, y el tejido blando es la parte que el ejercicio puede cambiar. El dolor viene del tejido blando. Los ejercicios de esta página trabajan el tejido blando. Si el dolor se calma, el espolón no es un problema que haga falta resolver.',
        'Si alguien te ha prometido un suplemento, crema o aparato que disuelve espolones calcáneos, desconfía. No hay evidencia publicada que respalde esa afirmación. El enfoque que recomienda la guía es estiramiento, fortalecimiento de la pantorrilla y manejo de la carga.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Qué ejercicios ayudan con el dolor de un espolón calcáneo?',
      cites: [CITE.guideline],
      a: 'Los ejercicios que ayudan con el dolor del espolón calcáneo son los mismos que la guía de 2023 recomienda para la fascitis plantar: estiramiento de la fascia plantar (grado A en la guía), estiramiento de la pantorrilla (grado A) y fortalecimiento gradual de la pantorrilla con elevaciones de talón (grado B). Trabajan la fascia plantar y los músculos de la pantorrilla alrededor del espolón, que son los que suelen producir el dolor.',
    },
    {
      q: '¿Los ejercicios para el espolón disuelven el espolón?',
      a: 'No. Un espolón calcáneo es hueso calcificado y el ejercicio no lo disuelve. Los ejercicios trabajan la fascia plantar y la pantorrilla, los tejidos blandos alrededor del espolón que casi siempre son la fuente del dolor. Si el dolor se calma con el ejercicio, el espolón en la radiografía no es un problema que haga falta resolver.',
    },
    {
      q: '¿Con qué frecuencia debo hacer los estiramientos para el espolón?',
      cites: [CITE.guideline, CITE.digiovanni2003],
      a: 'El estiramiento de la fascia plantar funciona mejor si lo haces cada mañana antes de pararte y después de estar sentado mucho rato. Los estiramientos de pantorrilla encajan en la mayoría de las sesiones. En un ensayo con 101\u00A0personas con dolor de talón crónico, el grupo que hizo el estiramiento de la fascia plantar reportó mejores resultados a las 8\u00A0semanas que el grupo que solo estiró la pantorrilla (DiGiovanni y colegas, 2003).',
    },
    {
      q: '¿Cuánto tarda en mejorar el dolor del espolón calcáneo?',
      cites: [CITE.latt, CITE.rathleff],
      a: 'La mayoría de los plazos vienen de estudios de fascitis plantar, ya que la irritación de la fascia suele ser lo que duele. Una revisión indica que cerca del 90\u00A0% de las personas con fascitis plantar mejora con cuidados sin cirugía, a menudo en varios meses (Latt y colegas, 2020). En un ensayo con 48\u00A0personas, las elevaciones de talón con carga mostraron beneficios sobre solo estirar a los tres meses (Rathleff y colegas, 2015). Ningún programa puede prometer un plazo para ninguna persona.',
    },
    {
      q: '¿Debo dejar de hacer ejercicio si tengo un espolón calcáneo?',
      cites: [CITE.guideline],
      a: 'No necesariamente. La guía recomienda el ejercicio como parte del enfoque, no el descanso completo. Detente por el resto del día si el dolor llega a 6 de 10 o más en algún ejercicio, o si la mañana siguiente está claramente peor. Baja un nivel en lugar de parar del todo. Si el dolor empeora semana a semana a pesar de ajustar, consulta a un profesional de la salud.',
    },
    {
      q: '¿Caminar es bueno para el espolón calcáneo?',
      cites: [CITE.guideline],
      a: 'Caminar en sí no es el problema. Caminar con zapatos de buen soporte a un ritmo cómodo por lo general está bien y es mejor que el descanso total. El dolor viene de la fascia plantar y la pantorrilla bajo el espolón, y caminar con moderación mantiene activa la bomba de la pantorrilla. Si caminar empeora tu dolor de la mañana al día siguiente, acorta la distancia y recupérala poco a poco.',
    },
    {
      q: '¿Qué ejercicios debo evitar si tengo un espolón calcáneo?',
      cites: [CITE.guideline],
      a: 'Evita movimientos de alto impacto como correr, saltar y la pliometría mientras el talón esté irritado; el golpeteo repetido sobre una superficie dura tensiona el tejido junto al espolón. Los descensos profundos de talón desde la orilla de un escalón también pueden sobrecargar una fascia irritada. La guía de 2023 respalda ajustar la carga en lugar de prohibir ejercicios; la prueba es si el talón se siente peor a la mañana siguiente.',
    },
    {
      q: '¿Qué dispara el dolor de un espolón calcáneo?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'El golpeteo repetido sobre una superficie dura es el disparador más común: correr, saltar o estar de pie varias horas irrita el tejido blando junto al espolón igual que irrita la fascitis plantar normal. Un aumento repentino de actividad, zapatos gastados y caminar descalzo sobre baldosa también pueden provocarlo. Ajustar la carga, no el hueso, es lo que calma un brote.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída',
      'no puedes apoyar el pie, o cojeas',
      'te duele al apretar los lados del talón, lo que puede apuntar a una fractura por estrés',
      'viene con entumecimiento, hormigueo o ardor',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'te duelen los dos talones y la rigidez de la mañana dura más de 30\u00A0minutos, sobre todo si otras articulaciones están afectadas',
      'el dolor te despierta por la noche o está presente en reposo',
      'no ha mejorado después de varias semanas de estiramiento diario y trabajo de pantorrilla',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'No tienes que llevar la cuenta de los niveles, las series ni cuándo progresar. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta es dolor de la mañana de 1/10 o menos durante 14\u00A0días seguidos. Los estiramientos empiezan desde el día uno. La cadena de pantorrilla, de elevaciones sentado hasta la elevación con toalla y carga, avanza a tu ritmo.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que se cumple la meta de la mañana), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Ejercicios para el espolón calcáneo',
  campaign: 'guide-heel-spur-exercises-es',
};
