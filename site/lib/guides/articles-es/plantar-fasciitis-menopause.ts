import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of articles/plantar-fasciitis-menopause.ts (2026-10-18),
 * written around «fascitis plantar menopausia», «dolor de talón menopausia».
 * Latin American Spanish with «tú», like the rest of /es/. Figures, grades,
 * hedges and sources are identical to the English page after its fact-check.
 * HRT is rendered as «terapia hormonal (TRH)». No new citations.
 */

export const PF_MENOPAUSE_ES: Guide = {
  lang: 'es',
  page: 'pfMenopause',
  mainSource: CITE.rasenbergIncidence,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascitis plantar y menopausia: dolor de talón de 40 a 60',
  description:
    'La fascitis plantar alcanza su pico en mujeres cerca de los 50, casi al doble que en hombres. Qué se sabe de la menopausia y el talón, qué no y qué ayuda.',
  h1: 'Fascitis plantar y menopausia: por qué el dolor de talón suele empezar entre los 40 y los 60',
  lede:
    'La fascitis plantar es más común en mujeres en la edad de la menopausia: en registros de medicina familiar de los Países Bajos, los casos nuevos en mujeres llegaron a su pico, 11,23 por cada 1000\u00A0pacientes-año, a los 50\u00A0años, frente a un pico de 5,54 en hombres a los 55 (Rasenberg y colegas, 2019). No se sabe si la bajada de las hormonas la causa. La relación es plausible, pero ningún estudio la ha demostrado (Douglas-Harris y colegas, 2026). Lo que sí ayuda es lo mismo que a cualquier edad: los estiramientos de fascia plantar y de pantorrilla, con grado **A** en la guía de 2023 para el dolor de talón, y el trabajo de fuerza para la pantorrilla, con grado **B** (Koc y colegas, 2023).',
  intro: [
    'Si el talón te empezó a doler entre los 40 y los 50 y tantos, estás en el grupo que más lo sufre, y no es por algo que hayas hecho mal. Esta página repasa las cifras por edad y sexo, lo que la investigación dice y no dice sobre las hormonas y la fascia plantar, los otros cambios de la mediana edad que cargan el talón, los ejercicios con mejor evidencia, lo que se sabe de la terapia hormonal y cuándo consultar a un profesional de la salud.',
  ],
  takeaways: [
    'En los registros de cerca de 1,9\u00A0millones de pacientes de los Países Bajos, los casos nuevos de dolor de talón en mujeres llegaron a su pico, 11,23 por cada 1000\u00A0pacientes-año, a los 50\u00A0años. En hombres el pico fue de 5,54, a los 55. El 62\u00A0% de los 18\u00A0004\u00A0casos fueron mujeres (Rasenberg y colegas, 2019).',
    'La guía de 2023 para el dolor de talón dice que la fascitis plantar es más común entre los 40 y los 60\u00A0años, y señala correr y los trabajos con muchas horas de pie como factores de riesgo (Koc y colegas, 2023).',
    'Una relación entre la menopausia y el dolor de talón es plausible pero no está demostrada: ningún estudio ha medido la fascia plantar a lo largo de la menopausia, y en un estudio de grupos focales de 2026, el 76\u00A0% de las 17\u00A0mujeres no había relacionado una cosa con la otra (Douglas-Harris y colegas, 2026).',
    'Ningún ensayo ha probado la terapia hormonal (TRH) para la fascitis plantar. Si la TRH es adecuada para ti depende de tus síntomas de la menopausia y de tu historia de salud, y es una decisión que se toma con tu médico.',
    'Los estiramientos de fascia plantar y de pantorrilla (grado **A**) y el trabajo de fuerza para la pantorrilla (grado **B**) son los ejercicios mejor calificados, tengas la edad que tengas (Koc y colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿La fascitis plantar es más común cerca de la menopausia?',
      keyFact: 'Los casos nuevos de dolor plantar de talón llegaron a su pico, 11,23 por cada 1000\u00A0pacientes-año, en mujeres de 50\u00A0años, frente a 5,54 en hombres de 55 (Rasenberg y colegas, 2019).',
      paragraphs: [
        '**Sí, las edades coinciden.** Un estudio de los Países Bajos revisó los registros de medicina familiar de cerca de 1,9\u00A0millones de pacientes entre 2013 y 2016 y encontró 18\u00A0004\u00A0casos nuevos de dolor plantar de talón, el término general que incluye la fascitis plantar. El 62\u00A0% fueron mujeres. En conjunto, las mujeres tuvieron 4,64\u00A0casos nuevos por cada 1000\u00A0pacientes-año y los hombres 2,98 (Rasenberg y colegas, 2019).',
        'Lo llamativo es el patrón por edad. En mujeres, los casos nuevos llegaron a su pico, **11,23 por cada 1000\u00A0pacientes-año, a los 50\u00A0años**. En hombres, el pico fue más bajo y más tardío: 5,54 a los 55 (Rasenberg y colegas, 2019). La edad promedio de la menopausia en el Reino Unido es de 51\u00A0años, y por eso los investigadores han empezado a preguntarse si las dos cosas están relacionadas (Douglas-Harris y colegas, 2026).',
        'La guía de 2023 para el dolor de talón dice que la fascitis plantar es más común entre los 40 y los 60\u00A0años (Koc y colegas, 2023). Además, en las mujeres suele durar más: en un seguimiento de 5 a 15\u00A0años de 174\u00A0personas, el riesgo de seguir con fascitis plantar fue mayor en las mujeres y en las personas con dolor en los dos talones (Hansen y colegas, 2018).',
      ],
      table: {
        caption: 'Pico de casos nuevos de dolor plantar de talón, medicina familiar en los Países Bajos (Rasenberg y colegas, 2019)',
        head: ['', 'Mujeres', 'Hombres'],
        rows: [
          ['Edad del pico', '50', '55'],
          ['Tasa en el pico por cada 1000\u00A0pacientes-año', '11,23', '5,54'],
          ['Tasa a todas las edades', '4,64', '2,98'],
        ],
      },
      after: [
        'Estas cifras vienen de personas que fueron al médico familiar, así que cuentan el dolor de talón que molestaba lo suficiente como para pedir una cita. Muestran cuándo es más común el dolor de talón. No muestran por qué.',
      ],
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause, CITE.guideline, CITE.hansen],
    },
    {
      h2: '¿La menopausia causa fascitis plantar?',
      keyFact: 'De 17\u00A0mujeres con dolor de talón en la perimenopausia o la posmenopausia, el 76\u00A0% no lo había relacionado con la menopausia, y la mayoría dijo que nadie lo mencionó cuando buscó ayuda (Douglas-Harris y colegas, 2026).',
      paragraphs: [
        '**Todavía nadie lo sabe.** Los autores de un estudio de 2026 centrado en la menopausia y el dolor de talón escriben que no está claro si existe una relación causal (Douglas-Harris y colegas, 2026). Ese estudio fue una serie de grupos focales con 17\u00A0mujeres, no una medición de hormonas ni del tejido del talón. Muchas páginas presentan la relación como un hecho. La evidencia todavía no lo respalda.',
        'Esto es lo que se sabe y lo que no:',
      ],
      table: {
        head: ['Pregunta', 'Lo que muestran los estudios'],
        rows: [
          ['¿El dolor de talón es más común en mujeres cerca de los 50?', '**Se sabe.** Pico a los 50\u00A0años en mujeres (Rasenberg, 2019)'],
          ['¿Las hormonas sexuales afectan la fascia plantar?', '**Algunos indicios.** Se afloja cerca de la ovulación en mujeres jóvenes (Lee, 2018)'],
          ['¿La fascia plantar cambia en la menopausia?', '**No se sabe.** Ningún estudio lo ha medido'],
          ['¿Menos estrógeno causa dolor de talón?', '**No se sabe.** Plausible, sin demostrar'],
          ['¿La TRH alivia el dolor de talón?', '**No se sabe.** Ningún ensayo lo ha probado'],
        ],
      },
      after: [
        'La idea hormonal es razonable. En 15\u00A0mujeres jóvenes, la fascia plantar estaba más floja cerca de la ovulación que durante la menstruación, y el equilibrio era un poco menos estable (Lee y Petrofsky, 2018). Una revisión de estudios de laboratorio sugiere que el estrógeno podría hacer los tendones menos rígidos, un efecto que el entrenamiento podría modificar (Hansen y Kjaer, 2014). Y el dolor musculoesquelético en general es común en la transición a la menopausia: una revisión de 16\u00A0estudios encontró que el 71\u00A0% de las mujeres en la perimenopausia lo reportaba (Lu y colegas, 2020).',
        'Pero ninguno de estos estudios analizó la fascitis plantar en mujeres que pasan por la menopausia. Muchos cambios ocurren a la misma edad, y eso hace difícil separar las hormonas de todo lo demás. La siguiente sección repasa esos otros cambios, porque sobre algunos de ellos sí puedes actuar.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.rasenbergIncidence, CITE.leePetrofskyFascia, CITE.hansenKjaerEstrogen, CITE.luMenopausePain],
    },
    {
      h2: '¿Qué más cambia entre los 40 y los 60 que puede cargar el talón?',
      keyFact: 'En un estudio de casos y controles, un tobillo rígido se asoció con 23,3\u00A0veces más probabilidades de fascitis plantar, y pasar la mayor parte de la jornada de pie con 3,6\u00A0veces más (Riddle y colegas, 2003).',
      paragraphs: [
        'La fascitis plantar suele empezar cuando la carga sobre el talón supera lo que puede tolerar y recuperar. Varias cosas que a menudo cambian en la mediana edad se suman a esa carga:',
        {
          list: [
            '**El peso.** En una revisión de 51\u00A0estudios, un IMC mayor de 27 se asoció con 3,7\u00A0veces más probabilidades de fascitis plantar, y la relación fue más fuerte en personas que no son deportistas (van Leeuwen y colegas, 2016). El peso suele cambiar en la mediana edad; [peso y fascitis plantar](/es/peso-y-fascitis-plantar/) explica lo que se sabe.',
            '**Pantorrillas y tobillos más rígidos.** En un estudio de 50\u00A0personas con fascitis plantar y 100 sin ella, el tobillo rígido fue el factor más fuerte de los que se midieron, con 23,3\u00A0veces más probabilidades (Riddle y colegas, 2003). En 100\u00A0adultos sin problemas de pie, las personas de alrededor de 80\u00A0años tenían los tobillos más rígidos, los pies más planos y los músculos de los dedos más débiles que las de alrededor de 20 (Scott y colegas, 2007).',
            '**Una almohadilla del talón que amortigua menos.** En un estudio con radiografías de 70\u00A0personas con dolor de talón y 200 sin él, la almohadilla del talón perdía elasticidad con la edad, y había perdido más en las personas con dolor (Prichasuk, 1994). Una almohadilla de grasa más delgada causa su propio tipo de dolor de talón, explicado en [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
            '**Un cambio de actividad.** Empezar un plan nuevo de caminata o de correr, un trabajo nuevo de pie o un aumento repentino del ejercicio pueden sumar carga rápido. Una revisión de 2026 incluye los aumentos rápidos de la actividad física entre lo que eleva el riesgo de lesiones por sobreuso, como la fascitis plantar, en mujeres de mediana edad (Ansari y colegas, 2026).',
          ],
        },
        'Las muchas horas de pie también cuentan: pasar la mayor parte de la jornada de pie se asoció con 3,6\u00A0veces más probabilidades en el mismo estudio de casos y controles (Riddle y colegas, 2003). Además, los pies tienden a aplanarse un poco con la edad; mira [pie plano con la edad](/es/pie-plano-con-la-edad/).',
      ],
      cites: [CITE.vanLeeuwenBmi, CITE.riddle, CITE.scottAgeFoot, CITE.prichasukHeelPad, CITE.ansariMenopause, CITE.fatPadReview],
    },
    {
      h2: '¿Qué ejercicios ayudan con la fascitis plantar en la menopausia?',
      paragraphs: [
        'Ningún estudio de ejercicio ha analizado solo a mujeres en la menopausia, así que la mejor guía es la del dolor de talón para adultos en general. Estirar la fascia plantar y la pantorrilla recibe el grado más alto de la guía, **A**, y el trabajo de fuerza para la pantorrilla recibe una **B** (Koc y colegas, 2023). Son las mismas dosis iniciales que en la guía principal de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
        'Haz el primer estiramiento de fascia plantar sentada en la orilla de la cama, antes de ponerte de pie: en un ensayo con 82\u00A0personas, estirar antes de los primeros pasos alivió el dolor de la mañana más que estirar solo la pantorrilla (DiGiovanni y colegas, 2003). En un ensayo con 48\u00A0personas, las elevaciones de talón lentas con una toalla bajo los dedos aliviaron el dolor más rápido que solo estirar a los tres meses, y a los doce meses los dos grupos estaban igual (Rathleff y colegas, 2015). Si algún ejercicio lleva tu dolor de talón a 6 de 10, deja de hacerlo por hoy.',
        'En la mediana edad, el trabajo de fuerza tiene una segunda razón. La masa muscular y el equilibrio tienden a disminuir después de la menopausia (Douglas-Harris y colegas, 2026), y el entrenamiento de fuerza es una de las medidas no hormonales que, según una revisión de 2026, se usan poco (Ansari y colegas, 2026). Las elevaciones de talón y el trabajo de equilibrio son un comienzo pequeño y práctico. [Elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) explica el protocolo con más detalle.',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pie',
          often: 'Casi todos los días que hagas ejercicio',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso. Si te cuesta cruzar la pierna, pasa una toalla por la parte delantera del pie y jala con suavidad.',
          stop: 'Dolor agudo en el talón, o dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'Casi todos los días que hagas ejercicio',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás bien apoyado en el piso y la cadera hacia adelante.',
          stop: 'Dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'Casi todos los días que hagas ejercicio',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición en la pared, con el talón de atrás bien apoyado en el piso, y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: '3 días a la semana, nunca dos seguidos',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Con la rodilla doblada trabajas sobre todo el sóleo, el músculo más profundo de la pantorrilla. Es un primer paso suave antes de las elevaciones de pie.',
          stop: 'Dolor de talón que llega a 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talones con toalla',
          evidence: { level: 'moderate', why: 'Es la rutina de un ensayo con 48\u00A0personas, y la guía de 2023 califica el trabajo de fuerza con B.' },
          dose: '4 series de 10, cada pierna, con peso extra',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tarda tres segundos en subir, mantén dos arriba y tarda tres en bajar. En este nivel Walkito añade peso, por ejemplo una mochila. La toalla es lo que hace que este ejercicio trabaje la fascia plantar y no solo la pantorrilla. Agárrate de un barandal o de la pared para mantener el equilibrio.',
          stop: 'Dolor de talón que llega a 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevación de talones con toalla',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos para subir, dos arriba, tres para bajar',
          alt: 'Una figura sube en puntas sobre un escalón con una toalla enrollada, con las pantorrillas resaltadas',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: { level: 'early', why: 'Un añadido propio de Walkito. No formó parte de los programas probados para el dolor de talón.' },
          dose: '3 series de 20\u00A0segundos, cada pierna',
          often: 'Días de equilibrio',
          feel: 'Pequeñas correcciones en el pie y el tobillo',
          how: 'Párate en un pie junto a una barra de cocina o una mesa firme y mira un punto fijo. Deja que el pie se tambalee. Tiene que hacerlo, porque ese tambaleo es el pie haciendo el trabajo de equilibrio. Si lo necesitas, toca ligeramente la superficie con la punta de los dedos.',
          stop: 'Dolor de talón que llega a 6 de 10, o si no te sientes segura',
          image: 'Ejercicio: equilibrio a una pierna',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: párate en un pie y deja que haga pequeñas correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.douglasHarrisMenopause, CITE.ansariMenopause],
    },
    {
      h2: '¿La terapia hormonal (TRH) ayuda con la fascitis plantar?',
      keyFact: 'En 85\u00A0mujeres después de la menopausia, las mujeres activas que usaban TRH tenían el tendón de Aquiles más delgado que las activas que no la usaban, sin un efecto claro en las mujeres inactivas (Cook y colegas, 2007). Ni este ni ningún otro estudio midió el dolor de talón.',
      paragraphs: [
        '**No hay ningún ensayo de TRH para la fascitis plantar, así que nadie puede decir si ayuda.** Buscamos uno y no encontramos ninguno. La TRH, también llamada terapia hormonal de la menopausia, se usa para los síntomas de la menopausia. No es un tratamiento reconocido para el dolor de talón.',
        'Lo que existe es indirecto. En los grupos focales de 2026, algunas mujeres dijeron que notaban menos dolores de pie con la TRH (Douglas-Harris y colegas, 2026). Es lo que contaron unas pocas personas, no un resultado medido. Dos estudios pequeños del tendón de Aquiles encontraron que las mujeres activas con TRH tenían tendones más pequeños que las activas sin ella: uno con 85\u00A0mujeres (Cook y colegas, 2007) y otro con 14\u00A0pares de gemelas idénticas, en el que la diferencia apareció solo en los 5\u00A0pares físicamente activos (Finni y colegas, 2009). El tamaño del tendón no es dolor, y el tendón de Aquiles no es la fascia plantar.',
        'Una revisión de 2026 señala que la TRH no es adecuada para todas las personas, por las contraindicaciones y por el balance de riesgos y beneficios de cada una (Ansari y colegas, 2026). Usarla o no depende de tus síntomas de la menopausia y de tu historia de salud. **Es una decisión que se toma con tu médico.** Decidas lo que decidas, los estiramientos y el trabajo de fuerza de esta página siguen sirviendo.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles, CITE.finniHrtTwins, CITE.ansariMenopause],
    },
    {
      h2: '¿Cuánto dura la fascitis plantar en la mediana edad?',
      paragraphs: [
        'Cerca del 90\u00A0% de las personas con fascitis plantar mejora sin cirugía, con medidas como estiramientos y plantillas, aunque muchas veces tarda de 3 a 6\u00A0meses (Latt y colegas, 2020). Ningún estudio ha analizado la recuperación en mujeres que pasan por la menopausia en particular.',
        'En algunas personas dura más. En un seguimiento de 174\u00A0personas, el 54\u00A0% no tenía síntomas al final del seguimiento, en promedio unos 9\u00A0años después del diagnóstico, y el riesgo de seguir con ella fue mayor en las mujeres y en las personas con dolor en los dos talones (Hansen y colegas, 2018). Es una razón para empezar pronto con los ejercicios y mantenerlos, no para esperar lo peor. [Cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/) tiene los plazos completos.',
        'Si estás aumentando tu actividad en la mediana edad, por salud o por el peso, súbela paso a paso en lugar de dejarla: la guía señala que la fascitis plantar suele empezar después de un cambio en la actividad con carga (Koc y colegas, 2023). [Caminar con fascitis plantar](/es/caminar-con-fascitis-plantar/) explica cómo retomar la caminata paso a paso.',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.guideline],
    },
    {
      h2: '¿Cuándo el dolor de talón o de pie en la mediana edad es otra cosa?',
      paragraphs: [
        'El dolor bajo el talón que es peor con los primeros pasos de la mañana y se calma al caminar es el patrón típico de la fascitis plantar. Otros patrones apuntan a otra cosa:',
        {
          list: [
            '**Dolor profundo, como un moretón, en el centro del talón, peor descalza sobre pisos duros:** puede ser la almohadilla de grasa. Mira [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
            '**Un arco que baja poco a poco, con dolor o hinchazón en la parte interna del tobillo:** puede ser el tendón tibial posterior. En una encuesta a 582\u00A0mujeres de más de 40\u00A0años, el 3,3\u00A0% tenía signos tempranos de este problema y ninguna tenía diagnóstico (Kohls-Gatzoulis y colegas, 2009). Vale la pena revisarlo pronto.',
            '**Dolor que aumenta con la actividad y duele al apretar los lados del talón:** puede ser una fractura por estrés. Mira [fascitis plantar o fractura por estrés](/es/fascitis-plantar-o-fractura-por-estres/).',
            '**Ardor, hormigueo o adormecimiento, o dolor por la noche:** es más probable un problema de nervio. Mira [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/).',
            '**Dolor en los dos talones junto con articulaciones rígidas e hinchadas en otras partes:** conviene descartar una enfermedad inflamatoria de las articulaciones.',
          ],
        },
        'Si tomas un inhibidor de la aromatasa después de un cáncer de mama, cualquier dolor nuevo en articulaciones, músculos o pies es algo que conviene contarle al equipo que te lo receta. Una revisión de 2026 incluye el uso de inhibidores de la aromatasa entre los factores que aumentan el riesgo de lesiones por sobreuso en la mediana edad (Ansari y colegas, 2026).',
      ],
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.ansariMenopause],
    },
  ],
  faq: [
    {
      q: '¿La menopausia puede causar fascitis plantar?',
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause],
      a: 'Puede que contribuya, pero ningún estudio lo ha demostrado. El dolor plantar de talón es más común en mujeres cerca de los 50\u00A0años, cuando suele llegar la menopausia, y en un estudio grande el pico en mujeres fue cerca del doble que el pico en hombres. Los investigadores describen una relación causal como incierta, y ningún estudio ha medido la fascia plantar a lo largo de la menopausia.',
    },
    {
      q: '¿Por qué la fascitis plantar tiene su pico en mujeres cerca de los 50?',
      cites: [CITE.rasenbergIncidence, CITE.guideline, CITE.vanLeeuwenBmi, CITE.riddle],
      a: 'Nadie lo sabe con certeza. En los registros de los Países Bajos, los casos nuevos en mujeres llegaron a su pico, 11,23 por cada 1000\u00A0pacientes-año, a los 50\u00A0años. Los cambios hormonales pueden influir, pero también cosas que suelen cambiar a la misma edad: el peso, pantorrillas y tobillos más rígidos, una almohadilla del talón que amortigua menos y una actividad nueva o más intensa.',
    },
    {
      q: '¿La perimenopausia puede causar dolor de talón?',
      cites: [CITE.luMenopausePain, CITE.douglasHarrisMenopause],
      a: 'Es posible, pero no se ha demostrado para el dolor de talón en particular. Una revisión de 16\u00A0estudios encontró que el 71\u00A0% de las mujeres en la perimenopausia reporta dolor musculoesquelético, más que las mujeres que aún no llegan a la perimenopausia. Ningún estudio ha analizado la fascitis plantar en la perimenopausia por separado, así que si te duele el talón, aplican las revisiones y los ejercicios de siempre para el dolor de talón.',
    },
    {
      q: '¿La terapia hormonal (TRH) ayuda con la fascitis plantar?',
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles],
      a: 'No se sabe. Ningún ensayo ha probado la TRH para la fascitis plantar. Algunas mujeres de un estudio de grupos focales de 2026 dijeron que notaban menos dolores de pie con la TRH, y estudios pequeños encontraron diferencias en el tamaño del tendón de Aquiles, pero ninguno midió el dolor de talón. Si la TRH es adecuada para ti es una decisión que se toma con tu médico, según tus síntomas y tu salud.',
    },
    {
      q: '¿Cuál es el mejor ejercicio para la fascitis plantar en la menopausia?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Los mismos que a cualquier edad: los estiramientos de fascia plantar y de pantorrilla, que la guía de 2023 para el dolor de talón califica con A, y el trabajo de fuerza para la pantorrilla, con B. En un ensayo con 48\u00A0personas, las elevaciones de talón lentas con una toalla bajo los dedos aliviaron el dolor más rápido que solo estirar. El trabajo de fuerza también ayuda a mantener el músculo y el equilibrio, que tienden a disminuir después de la menopausia.',
    },
    {
      q: '¿Es fascitis plantar o solo dolor de pies por la menopausia?',
      cites: [CITE.guideline],
      a: 'La fascitis plantar tiene un patrón típico: dolor bajo el talón que es peor con los primeros pasos de la mañana o después de estar sentada, y que se calma al caminar. Un dolor general en los dos pies y en otras articulaciones es un patrón distinto. Si no estás segura, o tienes varias articulaciones rígidas e hinchadas, consulta a un profesional de la salud.',
    },
    {
      q: '¿Subir de peso en la menopausia empeora la fascitis plantar?',
      cites: [CITE.vanLeeuwenBmi, CITE.hansen],
      a: 'Un peso más alto se asocia con la fascitis plantar. En una revisión de 51\u00A0estudios, un IMC mayor de 27 se asoció con 3,7\u00A0veces más probabilidades, sobre todo en personas que no son deportistas. Pero el peso es un factor entre varios. En un seguimiento largo de 174\u00A0personas, el IMC no predijo quién seguía con dolor de talón años después.',
    },
    {
      q: '¿La fascitis plantar desaparece después de la menopausia?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Ningún estudio ha seguido el dolor de talón a lo largo de la menopausia, así que no hay una cifra. Para la fascitis plantar en general, cerca del 90\u00A0% de las personas mejora sin cirugía, muchas veces en 3 a 6\u00A0meses. En un seguimiento largo, el riesgo de que durara fue mayor en las mujeres y en las personas con dolor en los dos talones.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó tras una caída, un salto o una torcedura, o no puedes apoyar el pie',
      'te duele al apretar los lados del talón, o el dolor sigue aumentando con la actividad (posible fractura por estrés)',
      'un arco está bajando, o la parte interna del tobillo duele o está hinchada',
      'el talón está hinchado, rojo o caliente, o tienes fiebre',
      'el dolor es peor de noche o en reposo, o viene con ardor, hormigueo o adormecimiento',
      'te duelen los dos talones y además tienes articulaciones rígidas o hinchadas en otras partes',
      'tomas un inhibidor de la aromatasa y empezó un dolor nuevo en articulaciones o pies: cuéntaselo al equipo que te lo receta',
      'una pantorrilla te duele y está hinchada (posible coágulo): busca atención el mismo día',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie. No registra hormonas ni síntomas de la menopausia y no da consejos sobre la TRH. Arma un plan con los estiramientos, el trabajo de fuerza para la pantorrilla y los ejercicios de equilibrio de esta página, y empieza con las versiones sentado los días de más dolor.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['heelPain', 'weightPf', 'heelFatPad'],
  crumb: 'Fascitis plantar y menopausia',
  campaign: 'guide-plantar-fasciitis-menopause-es',
};
