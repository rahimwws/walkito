import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of articles/heel-pain-not-plantar-fasciitis.ts (2026-10-18),
 * written around «dolor de talón que no es fascitis plantar», «otras causas de
 * dolor de talón». Latin American Spanish with «tú», like the rest of /es/.
 * Figures, grades and sources are identical to the English page after its
 * fact-check.
 */

export const HEEL_NOT_PF_ES: Guide = {
  lang: 'es',
  page: 'heelNotPf',
  mainSource: CITE.latt,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolor de talón que no es fascitis plantar: 9 causas',
  description:
    'Dolor de talón que no es fascitis plantar: almohadilla grasa, nervios, fractura por estrés, Aquiles, Haglund, Sever, artritis y la espalda, en una tabla.',
  h1: 'Dolor de talón que no es fascitis plantar: causas parecidas y cómo se distinguen',
  lede:
    'Si tu dolor de talón no sigue el patrón habitual de la [fascitis plantar](/es/fascitis-plantar/), peor en los primeros pasos de la mañana y mejor a medida que entras en calor, puede que se trate de otra cosa. Debajo del talón, las causas parecidas más comunes son una almohadilla grasa del talón golpeada o adelgazada, un nervio irritado, incluido uno pinzado en la zona lumbar, una fractura por estrés del talón y la artritis inflamatoria (Latt y colegas, 2020). El dolor en la parte de atrás del talón tiene sus propias causas, como el tendón de Aquiles. En 250\u00A0personas con dolor debajo del talón, la fascitis plantar explicó el 53,2\u00A0% de los casos y la atrofia de la almohadilla grasa el 14,8\u00A0% (Yi y colegas, 2011).',
  intro: [
    'Esta página compara nueve causas parecidas lado a lado: dónde duele cada una, cuándo, qué la empeora y qué hacer después. No es un diagnóstico. Varias se sienten parecidas, dos pueden darse al mismo tiempo y solo un profesional que examine tu pie puede distinguirlas. Si quieres una clasificación rápida según dónde te duele, el [identificador de dolor de pie](/es/donde-me-duele-el-pie/) hace eso; esta página explica las diferencias que hay detrás.',
  ],
  takeaways: [
    'El dolor típico de la fascitis plantar está cerca de la parte interna del talón, es peor con el primer paso de la mañana o después de estar sentado, mejora con la actividad y luego empeora a medida que la actividad se alarga (Latt y colegas, 2020).',
    'En 250\u00A0personas con dolor en la planta del talón, la fascitis plantar explicó el 53,2\u00A0%, la atrofia de la almohadilla grasa el 14,8\u00A0% y las dos juntas el 9,2\u00A0% (Yi y colegas, 2011).',
    'Si el dolor de talón arde, se siente como una descarga eléctrica u hormiguea, suele apuntar a un nervio. Una revisión estima que el atrapamiento del nervio de Baxter podría explicar hasta el 20\u00A0% del dolor de talón crónico (Tedeschi, 2025).',
    'Una fractura por estrés del talón suele doler con la actividad, no con el primer paso, y en 30\u00A0reclutas militares solo se vio en la radiografía simple en el 15\u00A0% (Latt y colegas, 2020; Sormaala y colegas, 2006).',
    'El dolor en los dos talones junto con otras articulaciones dolorosas o rígidas, o una espalda rígida, sugiere una causa inflamatoria que requiere atención médica, no solo estiramientos (Latt y colegas, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué más puede causar dolor de talón además de la fascitis plantar?',
      keyFact: 'En 250\u00A0personas con dolor en la planta del talón, la fascitis plantar explicó el 53,2\u00A0% de los casos, la atrofia de la almohadilla grasa sola el 14,8\u00A0% y las dos juntas el 9,2\u00A0% (Yi y colegas, 2011).',
      paragraphs: [
        '**La fascitis plantar es la causa más común de dolor de talón, pero ni de lejos la única.** Una guía de cirujanos de pie de EE.\u00A0UU. describe el dolor de talón como mayormente mecánico, pero dice que también hay que considerar causas nerviosas, de artritis, lesiones, tumores, infecciones y de los vasos sanguíneos (Thomas y colegas, 2010). Una revisión de 2020 agrupa las causas del dolor debajo del talón en problemas de nervios, lesiones como una fractura por estrés o una fascia desgarrada, artritis inflamatoria y desgaste de la almohadilla grasa o de la propia fascia (Latt y colegas, 2020).',
        'La tabla pone las nueve causas parecidas más comunes junto a la fascitis plantar. Léela como un mapa de patrones, no como una lista de verificación: las celdas describen lo típico, y tu talón no tiene por qué seguir el libro de texto.',
      ],
      table: {
        caption: 'Causas parecidas al dolor de talón: patrones típicos. Solo un profesional puede confirmar cuál tienes.',
        head: ['Afección', 'Dónde duele', 'Cuándo', 'Empeora con', 'Siguiente paso'],
        rows: [
          ['[Fascitis plantar](/es/fascitis-plantar/)', 'Parte interna de la planta del talón', 'Primeros pasos de la mañana, después de estar sentado', 'Estar mucho de pie, caminar sin parar', 'Estiramientos y fuerza de pantorrilla'],
          ['[Síndrome de la almohadilla grasa](/es/sindrome-almohadilla-grasa-talon/)', 'Centro de la almohadilla del talón, como un moretón profundo', 'Al estar de pie y caminar', 'Pisos duros, descalzo', 'Amortiguación, consulta a un profesional'],
          ['Nervio (Baxter, túnel tarsiano)', 'Parte interna del talón o planta, puede extenderse', 'No ligado a los primeros pasos, puede ser en reposo', 'Ardor, hormigueo, adormecimiento', 'Consulta a un profesional'],
          ['[Fractura por estrés](/es/fascitis-plantar-o-fractura-por-estres/)', 'Todo el hueso del talón, costados sensibles', 'Aumenta con la actividad', 'Correr, saltar, más kilómetros', 'Quita carga al pie, consulta pronto a un profesional'],
          ['[Aquiles insercional](/es/fascitis-plantar-o-tendinitis-de-aquiles/)', 'Parte de atrás del talón, en el hueso', 'Durante y después de la actividad', 'Subidas, escaleras, estiramiento profundo de pantorrilla', 'Carga la pantorrilla, descensos de talón a nivel del piso'],
          ['[Haglund](/es/deformidad-de-haglund/)', 'Bulto en la parte alta de atrás del talón', 'Con zapatos', 'Contrafuertes rígidos', 'Contrafuerte más suave, alza de talón'],
          ['[Sever (niños)](/es/enfermedad-de-sever/)', 'Parte de atrás o costados del talón', 'Durante y después del deporte', 'Correr, saltar, estirones de crecimiento', 'Menos carga, consulta a un profesional'],
          ['[DTTP](/es/ejercicios-tendon-tibial-posterior/)', 'Parte interna del tobillo y arco', 'Al caminar, de pie', 'Terreno irregular, subidas', 'Consulta a un profesional, luego ejercicio'],
          ['Artritis inflamatoria', 'Los dos talones, con otras articulaciones', 'Rigidez matutina de más de 30\u00A0minutos', 'Otras articulaciones rígidas, espalda rígida', 'Consulta a un médico'],
          ['Referido desde la espalda', 'Talón o planta, con dolor de pierna', 'Varía, con dolor de espalda', 'Dolor de espalda o pierna, adormecimiento', 'Consulta a un médico'],
        ],
      },
      after: [
        'Las filas de nervios, espalda y artritis no tienen enlace porque no tenemos una página sobre ellas: necesitan una evaluación médica, no una guía de ejercicios. Cada fila se explica en las secciones de abajo.',
      ],
      cites: [CITE.yiFatPad, CITE.thomasCpg, CITE.latt],
    },
    {
      h2: '¿Cómo se siente normalmente la fascitis plantar?',
      paragraphs: [
        '**Conocer el patrón habitual es la forma más fácil de notar cuándo tu talón no encaja.** La fascitis plantar típica es un dolor sordo o pulsátil alrededor de la parte delantera interna del talón, donde se inserta la fascia. Es peor con el primer paso de la mañana y al levantarte después de estar sentado, suele mejorar cuando ya estás en movimiento y luego vuelve a empeorar a medida que se alarga el tiempo de pie o caminando (Latt y colegas, 2020). Más sobre ese patrón en [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/).',
        'La misma revisión dice que, cuando alguien no describe estas características clásicas, el profesional debe buscar otras causas. También señala que la fascitis plantar suele afectar un solo pie, aunque cerca del 30\u00A0% de las personas la tiene en los dos (Latt y colegas, 2020). Así que dos talones adoloridos no descartan la fascitis plantar, pero sí son un motivo para buscar más ampliamente.',
        'La fascitis plantar también es la causa más común, así que un talón que encaja con la mayor parte del patrón sigue siendo, con más probabilidad, fascitis plantar. En las 250\u00A0personas de arriba, explicó por sí sola cerca de la mitad de los casos y estaba presente en otro 9,2\u00A0% junto con atrofia de la almohadilla grasa (Yi y colegas, 2011).',
      ],
      cites: [CITE.latt, CITE.yiFatPad],
    },
    {
      h2: '¿Podría ser un nervio, o dolor que viene de la espalda?',
      keyFact: 'Una revisión de 2025 estima que el atrapamiento del nervio de Baxter podría explicar hasta el 20\u00A0% del dolor de talón crónico, y que a menudo se confunde con fascitis plantar (Tedeschi, 2025).',
      paragraphs: [
        '**El dolor que se describe como ardor o como una descarga eléctrica suele venir de un nervio** (Latt y colegas, 2020). Hay tres fuentes nerviosas que son las sospechosas habituales:',
        {
          list: [
            '**El nervio de Baxter**, una pequeña rama que pasa debajo del talón. Cuando está comprimido, da un dolor crónico con ardor a lo largo de la almohadilla del talón (Latt y colegas, 2020). Una revisión estima que podría explicar hasta el 20\u00A0% del dolor de talón crónico y dice que a menudo se confunde con fascitis plantar (Tedeschi, 2025), mientras que otra lo considera poco común (Latt y colegas, 2020).',
            '**El síndrome del túnel tarsiano**, en el que el nervio tibial queda comprimido detrás del hueso interno del tobillo. Suele causar dolor con ardor o punzante a lo largo de la planta, a menudo con adormecimiento (Latt y colegas, 2020). Más sobre el dolor nervioso del arco en [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/).',
            '**Un nervio pinzado en la zona lumbar**, a nivel de L5 o S1. Es relativamente común y suele venir con dolor de espalda, dolor que baja por la pierna o adormecimiento en el pie o la pierna (Latt y colegas, 2020).',
          ],
        },
        'Una revisión sobre el dolor de talón de origen nervioso encontró que el atrapamiento de un nervio podría tener un papel tanto al principio como en el dolor de talón que no mejora, pero que cómo funciona y cuál es la mejor forma de evaluarlo todavía se discute (Alshami y colegas, 2008). El dolor nocturno o en reposo con hormigueo se trata en [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/).',
        'Este es un grupo en el que los ejercicios por tu cuenta no son el primer paso. Un profesional examina el pie, por ejemplo dando golpecitos a lo largo del nervio tibial, y puede usar ecografía, estudios de los nervios o resonancia magnética (Latt y colegas, 2020; Tedeschi, 2025).',
      ],
      cites: [CITE.latt, CITE.tedeschiBaxter, CITE.alshami],
    },
    {
      h2: '¿Podría ser una fractura por estrés o la almohadilla grasa?',
      keyFact: 'En 30\u00A0reclutas militares cuya resonancia magnética mostró una lesión por estrés en el talón, la lesión solo se veía en la radiografía simple en el 15\u00A0% (Sormaala y colegas, 2006).',
      paragraphs: [
        '**Las dos suelen doler con la actividad más que con el primer paso de la mañana.** Una fractura por estrés del talón suele causar un dolor sordo en la parte de atrás del hueso del talón que está ligado a la actividad, no a levantarse de la cama. Es más probable si has tenido baja densidad ósea o una fractura por estrés antes (Latt y colegas, 2020). Suele aparecer tras un aumento brusco de lo que caminas o corres, o tras pasar a una superficie más dura (Tu, 2018).',
        'Una radiografía normal no la descarta: en 30\u00A0reclutas con una lesión por estrés del talón en la resonancia, la radiografía simple la mostró solo en el 15\u00A0% (Sormaala y colegas, 2006). La comparación lado a lado está en [fascitis plantar o fractura por estrés](/es/fascitis-plantar-o-fractura-por-estres/).',
        'El dolor de la almohadilla grasa se suele describir como un dolor profundo, como de moretón, en el centro de la almohadilla del talón, peor en pisos duros y descalzo. Igual que una fractura por estrés, suele estar ligado a la actividad (Latt y colegas, 2020), y en una clínica afectaba con más frecuencia a los dos talones y empeoraba al estar de pie (Yi y colegas, 2011). Fue la segunda causa más común en las 250\u00A0personas de arriba, con el 14,8\u00A0% (Yi y colegas, 2011). Una revisión de 2022 encontró solo siete estudios originales sobre ella, así que gran parte de los consejos se basa en la experiencia, no en ensayos (Chang y colegas, 2022). Más en [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/), y sobre el papel del espolón, en [fascitis plantar o espolón calcáneo](/es/fascitis-plantar-vs-espolon-calcaneo/).',
      ],
      cites: [CITE.latt, CITE.tuHeelPain, CITE.sormaalaCalcaneus, CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: '¿Y si el dolor está en la parte de atrás del talón?',
      paragraphs: [
        '**La fascitis plantar duele debajo del talón. El dolor en la parte de atrás del talón suele venir del tendón de Aquiles, del hueso donde se inserta o, en los niños, del cartílago de crecimiento.** Aquí viven tres causas parecidas:',
        {
          list: [
            '**La tendinopatía insercional de Aquiles**, dolor justo donde el tendón de Aquiles se une al hueso del talón, y no más arriba en el tendón (Jonsson y colegas, 2008). Consulta [fascitis plantar o tendinitis de Aquiles](/es/fascitis-plantar-o-tendinitis-de-aquiles/) y [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
            '**La deformidad de Haglund**, un bulto óseo en la parte alta de atrás del talón contra el que roza el zapato, que puede irritar la bursa y el tendón (Yuen y colegas, 2022). Consulta [deformidad de Haglund](/es/deformidad-de-haglund/).',
            '**La enfermedad de Sever** en niños que todavía están creciendo: el cartílago de crecimiento de la parte de atrás del talón se pone adolorido al correr y saltar. En los niños, el dolor al apretar el talón por los dos lados apunta a ella (Tu, 2018). Consulta [enfermedad de Sever](/es/enfermedad-de-sever/).',
          ],
        },
        'El dolor insercional de Aquiles cambia la forma de hacer ejercicio: los descensos de talón se hacen a nivel del piso en lugar de bajar el talón por debajo del escalón, porque el estiramiento profundo puede apretar el tendón contra el hueso (Jonsson y colegas, 2008).',
      ],
      cites: [CITE.jonsson, CITE.yuenHaglund, CITE.tuHeelPain],
    },
    {
      h2: '¿Y si duelen los dos talones, o también hay otras articulaciones rígidas?',
      paragraphs: [
        '**El dolor en los dos talones, el dolor de talón junto con varias articulaciones dolorosas o rígidas, o una espalda rígida sugieren una causa inflamatoria** como la artritis psoriásica, la artritis reactiva o la espondiloartritis (Latt y colegas, 2020). El grupo de las espondiloartritis es más común en hombres jóvenes, mientras que la fascitis plantar es más común en la mediana edad y con más frecuencia en mujeres (Latt y colegas, 2020).',
        'La misma revisión enumera las pistas que llevan a un médico a pedir análisis de sangre: síntomas en otras partes del cuerpo, los dos pies afectados, varias articulaciones involucradas, sobre todo pequeñas, y rigidez matutina que dura más de 30\u00A0minutos (Latt y colegas, 2020).',
        'Los dos talones también pueden doler con la fascitis plantar. En un seguimiento de 5 a 15\u00A0años de 174\u00A0personas con fascitis plantar, el dolor en los dos talones se asoció con síntomas que duraron más (Hansen y colegas, 2018). Por eso dos talones adoloridos son un motivo para revisarse, no una prueba de artritis.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: '¿Y si duele en la parte interna del tobillo y el arco?',
      paragraphs: [
        '**El dolor que está detrás o debajo del hueso interno del tobillo y a lo largo del arco, y no debajo del talón, puede venir del tendón tibial posterior.** Es el principal soporte activo del arco interno, y las personas con un problema aquí tienen dolor en la parte interna del tobillo y un pie que se va aplanando poco a poco (Deu y colegas, 2022). En una encuesta a 582\u00A0mujeres mayores de 40\u00A0años en Inglaterra, el 3,3\u00A0% tenía DTTP (disfunción del tendón tibial posterior) en etapa temprana, y ninguna había sido diagnosticada (Kohls-Gatzoulis y colegas, 2009).',
        'Un arco que se está aplanando de un lado, o la dificultad para subir en puntas con ese pie, es un motivo para consultar a un profesional. El ejercicio tiene cierto respaldo en las etapas tempranas, pero solo tres ensayos pequeños con 93\u00A0personas en total lo han probado (Ross y colegas, 2018). Más en [ejercicios para el tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué hacer después, y cuándo encajan los ejercicios?',
      paragraphs: [
        '**Si tu talón encaja con el patrón de la fascitis plantar y no aplica ninguna de las señales de alerta de abajo, los estiramientos y el trabajo de fuerza de pantorrilla son las opciones de primera línea.** La guía de 2023 para el dolor de talón califica con **A** los estiramientos de fascia plantar y de pantorrilla, y con **B** el trabajo de fuerza para la fascitis plantar (Koc y colegas, 2023). Estos ejercicios son solo para la fascitis plantar. No están pensados para una sospecha de fractura, un problema de nervios o artritis.',
        'Si tu dolor encaja con otra fila de la tabla, o no estás seguro, consulta a un médico general, fisioterapeuta o podólogo. Lleva una nota corta: dónde duele, cuándo es peor, qué lo empeora, si afecta a uno o a los dos pies y cualquier otra cosa que lo acompañe, como adormecimiento, hinchazón o dolor de espalda. Eso es lo que usa un profesional para distinguir las causas parecidas.',
        'Si llevas varias semanas haciendo ejercicios para la fascitis plantar y nada ha cambiado, eso también merece una consulta. Sin cirugía, cerca del 90\u00A0% de las personas con fascitis plantar logra un alivio completo, aunque puede tardar de tres a seis meses, así que un dolor que no se mueve es un motivo para revisar el diagnóstico (Latt y colegas, 2020). Consulta [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/) y la lista completa de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar (solo fascitis plantar)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto, para la fascitis plantar. No es para las causas parecidas de esta página.' },
          dose: '2 series de 30\u00A0segundos, cada pie',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'Ardor u hormigueo, dolor en el propio hueso del talón, o dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla (solo fascitis plantar)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto, para la fascitis plantar. No es para las causas parecidas de esta página.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás bien apoyado en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'Dolor en la parte de atrás del talón, donde se inserta el Aquiles, o dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (solo fascitis plantar)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto, para la fascitis plantar. No es para las causas parecidas de esta página.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición, con el talón de atrás bien apoyado en el piso, y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor en la parte de atrás del talón, donde se inserta el Aquiles, o dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón sentado (solo fascitis plantar)',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B para la fascitis plantar. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: '3 días a la semana, nunca dos seguidos',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Con la rodilla doblada trabajas sobre todo el sóleo, el músculo más profundo de la pantorrilla, casi sin carga en el talón. El ensayo de elevaciones de talón de este sitio probó una versión de pie más exigente (Rathleff y colegas, 2015).',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Qué se confunde a menudo con la fascitis plantar?',
      cites: [CITE.latt, CITE.yiFatPad],
      a: 'Las causas parecidas más comunes son el síndrome de la almohadilla grasa del talón, el atrapamiento de un nervio, como el nervio de Baxter o el síndrome del túnel tarsiano, una fractura por estrés del talón y el dolor insercional de Aquiles. También puede ser artritis inflamatoria o un nervio pinzado en la zona lumbar. En 250\u00A0personas con dolor debajo del talón, la atrofia de la almohadilla grasa explicó el 14,8\u00A0% de los casos.',
    },
    {
      q: '¿Cómo sé si mi dolor de talón no es fascitis plantar?',
      cites: [CITE.latt],
      a: 'No puedes saberlo con seguridad sin una exploración, pero algunas características no encajan. La fascitis plantar suele ser peor con los primeros pasos de la mañana y se alivia al moverte. El ardor o el hormigueo, el dolor que aumenta con la actividad, el dolor en la parte de atrás del talón o los dos talones con articulaciones rígidas sugieren otra cosa. Un profesional puede aclararlo.',
    },
    {
      q: '¿El dolor de talón puede venir de la espalda?',
      cites: [CITE.latt],
      a: 'Sí. Un nervio pinzado en la zona lumbar a nivel de L5 o S1 puede causar dolor, adormecimiento u hormigueo en el talón y la planta. Es relativamente común y suele venir con dolor de espalda o dolor que baja por la pierna. Si hay debilidad en el pie o un adormecimiento que se extiende, consulta pronto a un médico.',
    },
    {
      q: '¿Cómo se siente el dolor de nervio en el talón?',
      cites: [CITE.latt, CITE.tedeschiBaxter],
      a: 'El dolor de nervio en el talón suele ser con ardor, punzante o como una descarga eléctrica, a veces con hormigueo o adormecimiento en la planta. El atrapamiento del nervio de Baxter da un dolor con ardor a lo largo de la almohadilla del talón, y una revisión estima que podría explicar hasta el 20\u00A0% del dolor de talón crónico. Necesita la evaluación de un profesional.',
    },
    {
      q: '¿El dolor en los dos talones es fascitis plantar?',
      cites: [CITE.latt],
      a: 'Puede serlo: cerca del 30\u00A0% de las personas con fascitis plantar la tiene en los dos pies. Pero el dolor en los dos talones, sobre todo con otras articulaciones dolorosas o rígidas, una espalda rígida o rigidez matutina que dura más de 30\u00A0minutos, puede apuntar a artritis inflamatoria. Esa combinación es un motivo para consultar a un médico.',
    },
    {
      q: '¿Una radiografía puede mostrar qué causa mi dolor de talón?',
      cites: [CITE.sormaalaCalcaneus, CITE.guideline],
      a: 'A veces, pero una radiografía normal descarta menos de lo que la gente cree. En 30\u00A0reclutas con una lesión por estrés del talón en la resonancia, la radiografía simple la mostró solo en el 15\u00A0%. Para la fascitis plantar típica, la guía de 2023 dice que las imágenes no suelen ser necesarias. Un profesional decide si vale la pena hacer una ecografía, una resonancia o estudios de los nervios.',
    },
    {
      q: '¿Por qué mi fascitis plantar no mejora?',
      cites: [CITE.latt],
      a: 'Hay varias razones posibles, y una es que quizá no sea fascitis plantar. Cerca del 90\u00A0% de las personas con fascitis plantar mejora sin cirugía, así que un dolor que no ha cambiado tras varias semanas de estiramientos y trabajo de fuerza constantes es un buen motivo para que un profesional revise el diagnóstico.',
    },
    {
      q: '¿Qué causa dolor de talón en niños si no es fascitis plantar?',
      cites: [CITE.tuHeelPain],
      a: 'En niños que todavía están creciendo, la causa más común es la enfermedad de Sever, una irritación del cartílago de crecimiento en la parte de atrás del hueso del talón. Duele durante y después de deportes con carreras y saltos, y un talón que duele al apretarlo por los dos lados apunta a ella. Si el dolor de talón de un niño no se calma, debe revisarlo un profesional.',
    },
    {
      q: '¿Puedo hacer ejercicios para la fascitis plantar si no estoy seguro de qué es?',
      cites: [CITE.guideline],
      a: 'La guía de 2023 califica con A los estiramientos de fascia plantar y de pantorrilla para la fascitis plantar, y son suaves. Pero si tienes ardor o adormecimiento, hinchazón, dolor que aumenta con la actividad o dolor después de una lesión, consulta primero a un profesional. Deja cualquier ejercicio que empeore mucho el talón.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'sientes ardor, hormigueo, descargas eléctricas o adormecimiento en el talón o la planta',
      'el dolor de talón viene con dolor de espalda, dolor que baja por la pierna o debilidad en el pie',
      'el dolor aumenta cuanto más caminas o corres, o te duele al apretar los costados del hueso del talón',
      'el talón está hinchado, rojo, caliente o amoratado, o tienes fiebre',
      'te duelen los dos talones y otras articulaciones están dolorosas o rígidas, o la rigidez matutina dura más de 30\u00A0minutos',
      'el dolor empezó después de una caída, una torcedura o un chasquido repentino, o no puedes apoyar el pie',
      'el talón te duele en reposo o te despierta por la noche',
      'un niño tiene dolor de talón que no se calma con menos deporte',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el dolor de talón y de pie. Su plan está hecho para el dolor de talón del tipo fascitis plantar, no para las causas parecidas de esta página, así que si tu dolor encaja con otro patrón, consulta a un profesional antes de empezar.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['hubPlantarFasciitis', 'heelFatPad', 'heelPainAtNight'],
  crumb: 'Dolor de talón que no es fascitis plantar',
  campaign: 'guide-heel-pain-not-plantar-fasciitis-es',
};
