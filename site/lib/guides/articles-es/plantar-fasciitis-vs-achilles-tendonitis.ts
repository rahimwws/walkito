import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Fascitis plantar o tendinitis de Aquiles (ES). Translated from
 * `articles/plantar-fasciitis-vs-achilles-tendonitis.ts`, written around the Spanish queries
 * «fascitis plantar o tendinitis de aquiles» (main), «dolor de talón o tendón de aquiles» (secondary).
 * Figures, grades, doses, hedges and CITE keys are identical to the English page.
 */

export const PF_VS_ACHILLES_ES: Guide = {
  lang: 'es',
  page: 'pfVsAchilles',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascitis plantar o tendinitis de Aquiles: cómo distinguirlas',
  description:
    '¿Fascitis plantar o tendinitis de Aquiles? Dónde duele, cuándo duele, una tabla comparativa, qué ejercicios van con cada una y qué hacer si tienes las dos.',
  h1: 'Fascitis plantar o tendinitis de Aquiles: cómo distinguir una de otra',
  lede:
    'La forma más rápida de distinguirlas es fijarte en dónde duele. La [fascitis plantar](/es/fascitis-plantar/) duele debajo del talón, sobre todo con los primeros pasos de la mañana (Koc y colegas, 2023). La tendinitis de Aquiles duele en la parte de atrás del talón o en el tendón que está encima, normalmente de 2 a 6\u00A0centímetros por encima del hueso del talón (Chimenti y colegas, 2024). Las dos responden al ejercicio, pero los ejercicios no son los mismos.',
  intro: [
    'Esta página es la comparación lado a lado. No te da un diagnóstico, y hay dolores de talón que no son ninguna de las dos. Para los programas completos de ejercicios, mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) y [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/). Si además tienes un bulto óseo en la parte de atrás del talón, mira [deformidad de Haglund](/es/deformidad-de-haglund/).',
  ],
  takeaways: [
    'El dolor de la fascitis plantar está debajo del talón, hacia el lado interno, y suele ser peor con los primeros pasos después de dormir o de estar sentado (Koc y colegas, 2023).',
    'La tendinopatía de Aquiles de la porción media duele en el propio tendón, normalmente de 2 a 6\u00A0centímetros por encima del hueso del talón. El dolor justo donde el tendón se une al hueso corresponde al tipo insercional (Chimenti y colegas, 2024).',
    'La guía de 2023 para el dolor de talón le da a los estiramientos de la fascia plantar y de la pantorrilla un grado **A**, y al trabajo de fuerza un grado **B**. La guía de 2024 para el tendón de Aquiles le da al ejercicio que carga el tendón un grado **A** (Koc y colegas, 2023; Chimenti y colegas, 2024).',
    'En un ensayo con 101\u00A0personas con dolor crónico de talón, el estiramiento de la fascia plantar superó al estiramiento de pantorrilla solo a las 8\u00A0semanas (DiGiovanni y colegas, 2003). Para el tendón de Aquiles, el grado más alto de la guía es para cargar el tendón, no para estirar (Chimenti y colegas, 2024).',
    'Las dos están conectadas: en 52\u00A0resonancias magnéticas, las personas con cambios en el tendón de Aquiles tenían una fascia plantar más gruesa, y 5 de 27 superaban el umbral habitual de la fascitis plantar (Stecco y colegas, 2013).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Dónde duele: debajo del talón o atrás?',
      figure: { id: 'heel-side', caption: 'La fascitis plantar duele debajo del talón. El dolor de Aquiles está en la parte de atrás del talón o en el tendón que está encima.', alt: 'Vista del lado interno de un pie con el hueso del talón, la fascia plantar bajo el arco y el tendón de Aquiles atrás, con una zona roja debajo del talón.' },
      keyFact: 'El dolor de Aquiles de la porción media suele sentirse de 2 a 6\u00A0centímetros por encima del hueso del talón, mientras que el dolor de la fascitis plantar está debajo del talón, en el lado interno (Chimenti y colegas, 2024; Koc y colegas, 2023).',
      paragraphs: [
        '**La ubicación es la diferencia más clara.** La fascia plantar es la banda gruesa que va por debajo del pie, desde el hueso del talón hasta los dedos. La fascitis plantar duele donde esa banda se inserta, debajo del talón y hacia el lado interno. Al presionar ahí con el pulgar, normalmente duele (Koc y colegas, 2023).',
        'El tendón de Aquiles une los músculos de la pantorrilla con la parte de atrás del hueso del talón. Hay dos tipos de dolor de Aquiles, y el punto exacto los distingue (Chimenti y colegas, 2024; Jonsson y colegas, 2008):',
        {
          list: [
            '**Porción media:** dolor y, muchas veces, un tendón más grueso y sensible de 2 a 6\u00A0centímetros por encima del hueso del talón. Normalmente puedes pellizcar el punto que duele entre el índice y el pulgar.',
            '**Insercional:** dolor justo donde el tendón se une a la parte de atrás del hueso del talón, muchas veces peor cuando el zapato aprieta ahí.',
          ],
        },
        'Un dolor debajo del talón que aparece al apretar los lados del talón, que arde u hormiguea, o que viene con entumecimiento apunta a otras causas, como un nervio, una fractura por estrés o la almohadilla de grasa del talón (Tu, 2018). La página de [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/) explica esas causas.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.jonsson, CITE.tuHeelPain],
    },
    {
      h2: '¿Cuándo duele: con los primeros pasos o durante la actividad?',
      paragraphs: [
        '**La fascitis plantar es un dolor de primeros pasos.** La guía describe un dolor de talón que se nota más con los primeros pasos de la mañana o después de estar sentado, que muchas veces se calma al caminar y vuelve después de mucho tiempo de pie (Koc y colegas, 2023). La página de [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) explica ese patrón.',
        '**La tendinopatía de Aquiles es un dolor de carga.** El tendón también puede estar rígido en la mañana, y por eso se confunden las dos. La diferencia está en lo que lo empeora durante el día: actividades de carga como correr y saltar, y el dolor suele ir de acuerdo con cuánto hiciste (Chimenti y colegas, 2024). Las subidas y los impulsos rápidos cargan todavía más el tendón.',
        'Así que las dos pueden doler en la mañana. Pregúntate dónde, no solo cuándo: una banda rígida y adolorida en la parte de atrás del tobillo apunta al tendón de Aquiles; una punzada debajo del talón apunta a la fascia plantar.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Fascitis plantar o tendinitis de Aquiles: la tabla comparativa',
      paragraphs: [
        'La tabla resume el cuadro típico. Mucha gente no encaja del todo en una sola columna, y solo la exploración de un profesional de la salud puede decirte cuál tienes.',
      ],
      table: {
        caption: 'Fascitis plantar y tendinopatía de Aquiles de un vistazo',
        head: ['', 'Fascitis plantar', 'Tendinopatía de Aquiles'],
        rows: [
          ['Dónde', 'Debajo del talón, lado interno', 'Parte de atrás del talón o de 2 a 6\u00A0cm por encima'],
          ['Peor', 'Primeros pasos después del reposo', 'Impulso, correr, subidas'],
          ['Duele al presionar', 'Debajo del talón', 'Tendón pellizcado atrás'],
          ['Relacionada con', 'Tobillo rígido, peso, estar de pie', 'Deporte en el 35\u00A0% de los casos'],
          ['Ejercicio con mejor grado', 'Estiramiento, grado A', 'Carga del tendón, grado A'],
          ['¿Estirar la pantorrilla?', 'Sí, grado A', 'Opcional, grado C'],
          ['Guía', 'Koc 2023', 'Chimenti 2024'],
        ],
      },
      after: [
        'Los factores de riesgo vienen de estudios distintos. En la fascitis plantar, las personas con 0\u00A0grados de flexión del tobillo o menos tenían 23,3\u00A0veces más probabilidades de tenerla, y un índice de masa corporal mayor de 30 y pasar la mayor parte de la jornada de pie también aumentaban las probabilidades (Riddle y colegas, 2003). En un estudio neerlandés con 57\u00A0725\u00A0personas registradas con un médico de familia, se diagnosticó tendinopatía de Aquiles de la porción media en 2,35 de cada 1000\u00A0adultos de 21 a 60\u00A0años en un año, y el 35\u00A0% de los casos estaba relacionado con el deporte (de Jonge y colegas, 2011).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.riddle, CITE.deJongeIncidence],
    },
    {
      h2: '¿Qué ejercicios van con la fascitis plantar?',
      keyFact: 'En un ensayo con 101\u00A0personas con dolor crónico de talón, el estiramiento de la fascia plantar dio mejores resultados a las 8\u00A0semanas que el estiramiento de pantorrilla solo (DiGiovanni y colegas, 2003).',
      paragraphs: [
        '**En la fascitis plantar, el estiramiento va primero.** La guía de 2023 le da a los estiramientos de la fascia plantar y de la pantorrilla un grado **A**, su grado más alto, y al trabajo de fuerza un grado **B** (Koc y colegas, 2023).',
        'Importa el estiramiento que trabaja el arco. En un ensayo con 101\u00A0personas, el grupo que hizo el estiramiento de la fascia plantar reportó mejores resultados a las 8\u00A0semanas que el grupo que solo estiró la pantorrilla (DiGiovanni y colegas, 2003). Para la fuerza, un ensayo de 2015 con 48\u00A0personas usó elevaciones de talón lentas con una toalla debajo de los dedos, que bajaron el dolor más rápido que el estiramiento solo a los tres meses, aunque a los doce meses los dos grupos estaban más o menos igual (Rathleff y colegas, 2015).',
        'Estas son las dosis iniciales de la guía de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento un grado A, su grado más alto.' },
          dose: '2 sostenidos de 30\u00A0segundos, cada pie',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'Dolor agudo en el talón que no se calma al soltar',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da al estiramiento un grado A, su grado más alto.' },
          dose: '2 sostenidos de 30\u00A0segundos, cada pierna',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Apoya las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás plano en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'Un tirón agudo en la parte de atrás del hueso del talón',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón plano, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Elevación de talones con toalla',
          evidence: { level: 'moderate', why: 'Es la rutina de un ensayo con 48\u00A0personas, y la guía de 2023 le da al trabajo de fuerza un grado B.' },
          dose: '4 series de 10, cada pierna, con peso extra',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada debajo de los dedos. Sube en tres segundos, sostén dos arriba y baja en tres segundos. En este nivel Walkito agrega peso, por ejemplo una mochila. La toalla es lo que hace que este ejercicio trabaje la fascia plantar y no solo la pantorrilla.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevación de talones con toalla',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos arriba, dos sostenido, tres abajo',
          alt: 'Una figura sube de puntas sobre un escalón con una toalla enrollada, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: '¿Qué ejercicios van con la tendinitis de Aquiles?',
      keyFact: 'En un estudio piloto con 27\u00A0personas con dolor de Aquiles insercional, los descensos de talón a nivel del piso dieron buenos resultados en el 67\u00A0% (Jonsson y colegas, 2008).',
      paragraphs: [
        '**En el tendón de Aquiles, la carga va primero, no el estiramiento.** La guía de 2024 le da al ejercicio que carga el tendón un grado **A**: elevaciones de talón, sostenidos y descensos lentos que hacen trabajar al tendón (Chimenti y colegas, 2024). La guía le da al estiramiento de pantorrilla un grado más bajo, **C**, y solo para personas cuyo tobillo no se dobla bien (Chimenti y colegas, 2024).',
        'Se permite algo de dolor. En un ensayo con 38\u00A0personas, un dolor de hasta unos 5 de 10 durante la carga estuvo bien siempre que se calmara para la mañana siguiente y no fuera aumentando semana a semana, y ese grupo estaba igual de bien a los doce meses que el grupo que primero hizo reposo (Silbernagel y colegas, 2007).',
        'Si el dolor está justo en el hueso del talón (insercional), haz todas las elevaciones y los descensos de talón a nivel del piso, y ve con calma con los estiramientos de pantorrilla. Bajar el talón por debajo de un escalón aprieta el tendón contra el hueso. En un estudio piloto con 27\u00A0personas, los descensos de talón a nivel del piso dieron buenos resultados en el 67\u00A0% (Jonsson y colegas, 2008). Más detalles en [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
      ],
      exercises: [
        {
          name: 'Elevación de talón sostenida',
          evidence: { level: 'moderate', why: 'La guía de 2024 para el tendón de Aquiles incluye la carga isométrica. Ningún ensayo aleatorizado ha probado los sostenidos solos como programa completo.' },
          dose: '3 sostenidos de 20\u00A0segundos, con los dos pies',
          often: 'Días de fuerza, o la mayoría de los días mientras el tendón está irritable',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          how: 'Sube de puntas con los dos pies y quédate quieto arriba. No vuelvas a bajar. Sostener arriba carga el tendón sin el rebote.',
          stop: 'Dolor por encima de 5 de 10 que no se calma para la mañana siguiente',
          image: 'Ejercicio: elevación de talón sostenida',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura sostiene la posición de puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Descensos excéntricos de talón (rodilla estirada)',
          evidence: { level: 'strong', why: 'Basado en el protocolo de Alfredson para el dolor de la porción media (3 x 15, dos veces al día); Walkito empieza con 3 x 10. La guía de 2024 le da al ejercicio una A.' },
          dose: '3 series de 10, cada pierna',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla durante la bajada, no un estiramiento abajo',
          how: 'Párate en la orilla de un escalón. Sube con los dos pies, pasa el peso a la pierna que duele y baja despacio en tres segundos. Vuelve a subir con los dos pies. Si el dolor está justo en el hueso del talón, hazlo en el piso plano y no dejes que el talón baje por debajo del escalón.',
          stop: 'Dolor por encima de 5 de 10 que no se calma para la mañana siguiente, o que empeora semana a semana',
          image: 'Ejercicio: descensos excéntricos de talón',
          media: 'heel_drop_straight',
          caption: 'Descenso excéntrico de talón: sube con los dos pies, baja despacio con uno',
          alt: 'Una figura sobre un escalón baja un talón por debajo de la orilla con la rodilla estirada, con la pantorrilla y el tendón de Aquiles resaltados',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: '¿Puedes tener fascitis plantar y tendinitis de Aquiles al mismo tiempo?',
      keyFact: 'En 52\u00A0resonancias magnéticas, la fascia plantar medía 3,43\u00A0mm de grosor en las personas con cambios en el tendón de Aquiles, frente a 2,09\u00A0mm en las personas sin ellos (Stecco y colegas, 2013).',
      paragraphs: [
        '**Sí, y las dos están relacionadas.** En un estudio de 52\u00A0resonancias magnéticas de personas con dolor de pie o de tobillo, las 27 con cambios en el tendón de Aquiles tenían una fascia plantar más gruesa, 3,43\u00A0mm en promedio frente a 2,09\u00A0mm. Cinco de las 27 tenían una fascia plantar de más de 4,5\u00A0mm, un umbral común para la fascitis plantar. Ninguna de las otras 25 pasó de 4\u00A0mm (Stecco y colegas, 2013).',
        'El mismo estudio encontró que la fascia plantar se conecta con la vaina que rodea el tendón de Aquiles a través de la cubierta del hueso del talón. Un estudio en cadáveres mostró que jalar del tendón de Aquiles tensa la fascia plantar, y más todavía cuando los dedos están doblados hacia arriba (Carlson y colegas, 2000). Por eso, una pantorrilla tensa o sobrecargada puede jalar de las dos.',
        'Ningún estudio ha contado con qué frecuencia la gente tiene las dos afecciones juntas, así que no hay una cifra confiable. Ninguna guía cubre el caso de tener las dos. Un enfoque que encaja con las dos guías: trabajo de fuerza de pantorrilla adecuado para el tendón, más el estiramiento de la fascia plantar, que trabaja el arco y no el tendón de Aquiles. Haz los descensos de talón a nivel del piso si te duele la parte de atrás del hueso del talón.',
      ],
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass, CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: '¿Qué más causa un dolor de talón parecido a estos dos?',
      paragraphs: [
        'Varios problemas están cerca y pueden sentirse parecido (Choo y colegas, 2020; Tu, 2018):',
        {
          list: [
            'Un bulto óseo en la parte de atrás del talón con una zona adolorida e inflamada a la altura del zapato: [deformidad de Haglund](/es/deformidad-de-haglund/) o bursitis retrocalcánea, muchas veces junto con dolor de Aquiles insercional.',
            'Un espolón en el talón en una radiografía: es común y normalmente no es la causa del dolor. Mira [fascitis plantar vs espolón calcáneo](/es/fascitis-plantar-vs-espolon-calcaneo/).',
            'Un dolor profundo, como de moretón, en el centro de la almohadilla del talón, peor en pisos duros: [síndrome de la almohadilla de grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
            'Dolor en los dos lados del talón al apretarlo, después de un aumento brusco de caminata o carrera: posible fractura por estrés, que necesita a un profesional de la salud.',
            'Ardor, hormigueo o entumecimiento: posiblemente un nervio atrapado.',
          ],
        },
      ],
      cites: [CITE.chooRearfoot, CITE.tuHeelPain],
    },
    {
      h2: '¿Cuánto tarda en mejorar cada una?',
      paragraphs: [
        'En la fascitis plantar, alrededor del 90\u00A0% de las personas mejora con tratamiento sin cirugía, aunque muchas veces tarda meses (Latt y colegas, 2020). La página [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/) tiene los detalles.',
        'En la tendinopatía de Aquiles, los ensayos principales de carga duraron unos tres meses y siguieron a las personas hasta los doce meses. La guía de 2024 señala que la función puede empezar a mejorar en 2\u00A0semanas, pero la recuperación más completa tarda más (Chimenti y colegas, 2024). El dolor insercional ha sido más difícil de ayudar con los descensos de talón clásicos por debajo de un escalón: solo el 32\u00A0% tuvo buenos resultados en un estudio anterior, y por eso se usan los descensos a nivel del piso (Jonsson y colegas, 2008).',
        'Ningún estudio ha comparado directamente el tiempo de recuperación de las dos.',
      ],
      cites: [CITE.latt, CITE.achillesGuideline, CITE.jonsson],
    },
  ],
  faq: [
    {
      q: '¿Cómo sé si mi dolor de talón es fascitis plantar o tendinitis de Aquiles?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Empieza por dónde duele. La fascitis plantar duele debajo del talón, hacia el lado interno, y es peor con los primeros pasos después del reposo. La tendinitis de Aquiles duele en la parte de atrás del talón o en el tendón, de 2 a 6\u00A0centímetros por encima, y empeora con el impulso, al correr y en las subidas. Un profesional de la salud puede confirmar cuál es.',
    },
    {
      q: '¿La fascitis plantar puede causar dolor en el tendón de Aquiles?',
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass],
      a: 'Están relacionadas, pero ningún estudio muestra que una cause la otra. En 52\u00A0resonancias magnéticas, las personas con cambios en el tendón de Aquiles tenían una fascia plantar más gruesa, 3,43\u00A0mm frente a 2,09\u00A0mm. Un estudio en cadáveres mostró que la tensión en el tendón de Aquiles tensa la fascia plantar. Una pantorrilla tensa y sobrecargada podría cargar las dos.',
    },
    {
      q: '¿La tendinitis de Aquiles es peor en la mañana, como la fascitis plantar?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Puede serlo. Las dos pueden sentirse rígidas y adoloridas con los primeros pasos del día, y por eso se confunden. La fascitis plantar es una punzada debajo del talón que se calma al caminar. El dolor de Aquiles está en la parte de atrás del tobillo y suele aumentar al correr, saltar, subir pendientes y subir escaleras.',
    },
    {
      q: '¿Debo estirar la pantorrilla si tengo tendinitis de Aquiles?',
      cites: [CITE.achillesGuideline, CITE.jonsson],
      a: 'Es opcional. La guía de 2024 para el tendón de Aquiles pone primero el ejercicio que carga el tendón, con grado A, y le da al estiramiento de pantorrilla una C, para personas cuyo tobillo no se dobla bien. Si el dolor está justo en el hueso del talón, los estiramientos profundos de pantorrilla y los descensos de talón por debajo de un escalón aprietan el tendón contra el hueso, así que hazlos suaves y a nivel del piso.',
    },
    {
      q: '¿Los ejercicios para la fascitis plantar y la tendinitis de Aquiles son los mismos?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Se parecen, pero no son los mismos. En la fascitis plantar se empieza con estiramientos de la fascia plantar y de la pantorrilla, con grado A, más elevaciones de talón, con grado B. En la tendinitis de Aquiles se empieza con carga: elevaciones de talón sostenidas, elevaciones de talón y descensos lentos de talón, con grado A. El trabajo de fuerza de pantorrilla sirve para las dos.',
    },
    {
      q: '¿Se pueden tener fascitis plantar y tendinitis de Aquiles juntas?',
      cites: [CITE.steccoPfAchilles],
      a: 'Sí. En un estudio de resonancia magnética con 52\u00A0personas con dolor de pie o de tobillo, 5 de las 27 con cambios en el tendón de Aquiles también tenían una fascia plantar lo bastante gruesa para alcanzar un umbral común de fascitis plantar. Ningún estudio ha contado con qué frecuencia aparecen juntas en la población general.',
    },
    {
      q: '¿El dolor en la parte de atrás del talón es fascitis plantar?',
      cites: [CITE.guideline, CITE.chooRearfoot],
      a: 'Normalmente no. La fascitis plantar duele debajo del talón. El dolor en la parte de atrás del talón suele ser tendinopatía de Aquiles, bursitis retrocalcánea o deformidad de Haglund, un bulto óseo donde se inserta el tendón. Un chasquido repentino en la parte de atrás del talón necesita a un profesional de la salud el mismo día.',
    },
    {
      q: '¿Un espolón calcáneo significa fascitis plantar o tendinitis de Aquiles?',
      cites: [CITE.chooRearfoot],
      a: 'Ninguna de las dos por sí solo. Un espolón debajo del talón está cerca de la fascia plantar, y uno en la parte de atrás está donde se inserta el tendón de Aquiles, pero los espolones son comunes en personas sin dolor. Lo que decide qué causa el dolor es la exploración, no la radiografía sola.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'sentiste un chasquido o tronido repentino en la parte de atrás del tobillo, o como si te hubieran pateado ahí, y ahora te cuesta impulsarte',
      'no puedes subir de puntas del lado que duele, o sientes un hueco en el tendón',
      'estás tomando o tomaste hace poco un antibiótico del grupo de las fluoroquinolonas, como el ciprofloxacino, y tienes un dolor de tendón nuevo',
      'el talón está rojo, caliente e inflamado, o tienes fiebre',
      'el talón duele en los dos lados al apretarlo, o duele de noche o en reposo',
      'sientes ardor, hormigueo o entumecimiento en el talón o en la planta',
      'el dolor empezó después de una caída o una lesión, o no puedes apoyar el pie',
      'el dolor sigue empeorando durante semanas a pesar de hacer ejercicio de forma constante',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie. Le dices dónde te duele, debajo del talón o atrás, y arma el plan a partir de tu respuesta: estiramientos de la fascia plantar y elevaciones de talones con toalla para el dolor de talón, y carga de pantorrilla, desde los sostenidos hasta los descensos lentos de talón, para el dolor de Aquiles.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta. Walkito no diagnostica, así que si no sabes cuál de las dos tienes, primero pide a un profesional de la salud que lo revise.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['achilles', 'hubPlantarFasciitis', 'pfVsHeelSpur'],
  crumb: 'Fascitis plantar o tendinitis de Aquiles',
  campaign: 'guide-plantar-fasciitis-vs-achilles-tendonitis-es',
};
