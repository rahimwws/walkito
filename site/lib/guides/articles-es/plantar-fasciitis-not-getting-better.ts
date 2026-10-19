import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Fascitis plantar que no mejora (ES).
 *
 * Translated from `articles/plantar-fasciitis-not-getting-better.ts`, written around
 * the Spanish queries «fascitis plantar que no mejora», «fascitis plantar crónica»,
 * «fascitis plantar no se quita». Figures, grades, doses and qualifiers are identical
 * to the English page. No new citations. The link to the app vs physical therapy page
 * was removed (no Spanish version); the words stay.
 */

export const PF_NOT_BETTER_ES: Guide = {
  lang: 'es',
  page: 'pfNotBetter',
  mainSource: CITE.hansen,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascitis plantar que no mejora: qué cambiar',
  description:
    '¿Tu fascitis plantar no mejora? Seis motivos comunes por los que se estanca, cómo reconocerlos, qué cambiar y qué opciones hay si el ejercicio no basta.',
  h1: '¿La fascitis plantar no mejora? Motivos y qué cambiar',
  lede:
    'Cuando la fascitis plantar no mejora, los motivos habituales son un plan que solo incluye estiramientos, una carga que nunca sube, dejarlo cuando el dolor se calma o algo que lo sigue provocando. A veces ni siquiera es fascitis plantar. Rara vez significa que nada puede cambiar: en un estudio que siguió a 174\u00A0personas durante unos diez años, el 54\u00A0% ya no tenía síntomas y la mayoría del resto solo tenía molestias leves (Hansen y colegas, 2018).',
  intro: [
    'Esta página es para la fase de estancamiento: ya probaste los estiramientos, quizá plantillas, quizá una infiltración, y los primeros pasos todavía duelen. Cuánto suele tardar la recuperación se explica en [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/). Aquí repasamos los motivos comunes por los que se estanca, cómo se ve cada uno, qué cambiar y cuándo volver a revisarte.',
  ],
  takeaways: [
    'De 174\u00A0personas seguidas durante una media de 9,7\u00A0años desde el inicio de los síntomas, el 54\u00A0% no tenía síntomas y el 46\u00A0% seguía con alguno, casi siempre leve. Casi todas (93\u00A0%) recibieron una infiltración de corticoide en algún momento, así que eran casos más difíciles (Hansen y colegas, 2018).',
    'Los altibajos son normales: el 31,9\u00A0% de quienes mejoraron tuvo al menos una recaída antes, y el 77,5\u00A0% de quienes seguían con dolor había tenido en algún momento un periodo sin dolor (Hansen y colegas, 2018).',
    'En un ensayo con 48\u00A0personas, las elevaciones de talón con carga adelantaron la mejoría frente a los estiramientos a los tres meses. Al año, los dos grupos estaban más o menos igual (Rathleff y colegas, 2015).',
    'La guía de 2023 para el dolor de talón califica los estiramientos, la terapia manual, el vendaje y las férulas nocturnas con **A**, y el trabajo de fuerza, la punción seca y el láser de baja intensidad con **B**. Recomienda no usar plantillas solas para el alivio a corto plazo (Koc y colegas, 2023).',
    'La misma guía dice que hay que buscar otros diagnósticos cuando los síntomas no se calman, como una artritis inflamatoria, la atrofia de la almohadilla grasa o un bulto en la fascia (Koc y colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿La fascitis plantar es permanente si no mejora?',
      keyFact: 'En un grupo de 174\u00A0personas seguidas durante una media de 9,7\u00A0años, el 54\u00A0% no tenía síntomas y el 46\u00A0% seguía con alguno, la mayoría leves (Hansen y colegas, 2018).',
      paragraphs: [
        '**Para la mayoría, no.** Una revisión de 2020 indica que más del 90\u00A0% de las personas mejora con tratamiento no quirúrgico, aunque puede tardar de tres a seis meses (Latt y colegas, 2020). La pregunta difícil es qué pasa con quienes siguen estancados después de ese tiempo.',
        'Los mejores datos a largo plazo vienen de un estudio danés que siguió a 174\u00A0personas con fascitis plantar confirmada por ecografía. A una media de 9,7\u00A0años del inicio de los síntomas, el 54\u00A0% no tenía ningún síntoma. El otro 46\u00A0% todavía tenía alguno, pero la mayoría lo describía como leve. En promedio, habían probado 3,8 tratamientos distintos (Hansen y colegas, 2018).',
        'Dos cosas hacen que este estudio sea más esperanzador de lo que parece. Era un grupo de una clínica especializada con dolor difícil de manejar: el 93\u00A0% recibió una infiltración de corticoide en algún momento, y eso no es un primer paso. Además, «seguir con síntomas» significaba cualquier puntuación por encima de 0 sobre 10, así que incluye a personas con molestias leves de vez en cuando.',
        'El estudio también encontró que la fascia se adelgazó con el tiempo tanto si las personas seguían con dolor como si no, y solo el 24\u00A0% del grupo sin dolor tenía una fascia de aspecto totalmente normal en la ecografía. Es decir, una ecografía que sigue viéndose alterada no significa que no puedas sentirte mejor. Para la evolución completa, consulta [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/).',
      ],
      sourceNote:
        'Hansen 2018: 269\u00A0personas diagnosticadas entre 2001 y 2011, 174 participaron (91\u00A0mujeres, 83\u00A0hombres), 137 tuvieron una ecografía de seguimiento. Sin síntomas = 0 en todas las escalas de dolor (reposo, caminar, correr, presión). El grosor de la fascia bajó de 6,9\u00A0mm y 6,7\u00A0mm a 4,3\u00A0mm en ambos grupos. A las mujeres y a las personas con dolor en los dos talones les fue peor (ambos P < 0,01). Los autores señalan que el estudio no permite juzgar qué tratamientos funcionaron.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: '¿Qué motivo encaja contigo?',
      paragraphs: [
        'La mayoría de los casos estancados encaja en uno o dos de estos patrones. Lee la columna del medio, mira cuál se parece a lo tuyo y ve a esa sección.',
      ],
      table: {
        caption: 'Motivos comunes por los que la fascitis plantar se estanca',
        head: ['Motivo', 'Cómo se ve', 'Qué cambiar'],
        rows: [
          ['Solo estiramientos', 'Semanas estirando, los primeros pasos siguen punzantes', 'Añade fuerza de pantorrilla'],
          ['La carga nunca sube', 'Las mismas elevaciones fáciles durante meses', 'Sube poco a poco, que siga siendo pesado'],
          ['Lo dejaste muy pronto', 'Mejoraste, paraste y volvió', 'Mantén una dosis más ligera'],
          ['Brote y luego parar', 'Un mal día, una semana sin hacer nada', 'Baja de nivel, no abandones'],
          ['Desencadenantes que siguen', 'Turnos largos, carreras o un tobillo rígido', 'Cambia la carga que puedas'],
          ['No es fascitis plantar', 'Dolor nocturno, hormigueo, los dos talones', 'Vuelve a revisarte'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen],
    },
    {
      h2: '¿Solo estás estirando?',
      keyFact: 'En un ensayo con 48\u00A0personas, el grupo de elevaciones de talón obtuvo una puntuación 29\u00A0puntos mejor en el Foot Function Index que el grupo de estiramientos a los tres meses (Rathleff y colegas, 2015).',
      paragraphs: [
        '**Vale la pena seguir estirando, pero solo con eso puede no bastar.** La guía de 2023 para el dolor de talón califica el estiramiento de la fascia plantar y de la pantorrilla con **A**, su grado más alto. También califica el trabajo de fuerza para el pie y el tobillo con **B** (Koc y colegas, 2023). Muchos planes para hacer en casa solo incluyen lo primero.',
        'En un ensayo con 48\u00A0personas, un grupo hizo elevaciones de talón lentas y pesadas con una toalla bajo los dedos y el otro estiró la fascia plantar. A los tres meses, el grupo de elevaciones de talón obtuvo una puntuación 29\u00A0puntos mejor en el Foot Function Index. Al año, los dos grupos estaban más o menos igual (Rathleff y colegas, 2015). Es decir, hacer elevaciones de talón en lugar de estiramientos no cambió el punto al que llegaron las personas al año, pero las llevó ahí antes.',
        'Cómo se ve: llevas un mes o más estirando con constancia, el estiramiento se siente más fácil, pero los primeros pasos del día siguen siendo punzantes. Qué cambiar: mantén los estiramientos y añade el trabajo de pantorrilla de la siguiente sección. [Elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) explica en detalle la rutina del ensayo.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: '¿La carga ha subido alguna vez?',
      keyFact: 'En un ensayo con 70\u00A0personas que hicieron elevaciones de talón durante tres meses, solo 4 llegaron a un punto en el que sentían que no necesitaban más tratamiento (Riel y colegas, 2019).',
      paragraphs: [
        '**El trabajo de fuerza solo ayuda si se vuelve más difícil con el tiempo.** Diez elevaciones fáciles con los dos pies, hechas durante meses, son un calentamiento, no una carga. Los pasos de abajo van de los dos pies a un pie y luego añaden peso. La rutina del ensayo era de elevaciones de talón a una pierna con una toalla bajo los dedos, un ritmo lento y una mochila para añadir peso (Rathleff y colegas, 2015).',
        'Cómo fijas la carga importa menos de lo que se cree. Un ensayo de 2019 dio a 70\u00A0personas un plan de elevaciones de talón fijo, paso a paso, o les pidió que eligieran sus propias series y su peso, tan pesado como pudieran. Los dos grupos mejoraron de forma parecida. Elegir la propia dosis no llevó a hacer más (Riel y colegas, 2019).',
        'El mismo ensayo sirve para poner los pies en la tierra: después de tres meses de elevaciones de talón, 44 de las 65\u00A0personas que respondieron dijeron que estaban mejor, pero solo 4 de 70 sentían que no necesitaban más tratamiento. Si a los tres meses estás mejor pero no del todo, estás en el grupo común, no en el que fracasó.',
        'Qué cambiar: sube un paso cuando el actual se sienta fácil dos sesiones seguidas y tu mañana siguiente no sea peor. Las tarjetas de abajo son los pasos, en orden.',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'Dolor agudo en el talón que sigue después de soltar',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Con la rodilla doblada trabajas sobre todo el sóleo, el músculo más profundo de la pantorrilla, casi sin carga en el talón. Empieza aquí si las elevaciones de pie te duelen.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga mientras la pantorrilla se acostumbra al trabajo.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Elevación de talón sostenida',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 20\u00A0segundos, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando para quedarse quietas',
          how: 'Sube en puntas con los dos pies y quédate quieto arriba. No te dejes caer. Es un paso útil los días en que las repeticiones con movimiento se sienten demasiado.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevación de talón sostenida',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talones con toalla',
          evidence: { level: 'moderate', why: 'Es la rutina de un ensayo con 48\u00A0personas, y la guía de 2023 califica el trabajo de fuerza con B.' },
          dose: '4\u00A0series de 10, cada pierna, con peso extra',
          often: 'Días de fuerza',
          feel: 'Trabajo fuerte en la pantorrilla',
          how: 'Párate en un pie sobre un escalón, con una toalla enrollada bajo los dedos. Tarda tres segundos en subir, mantén dos arriba y tarda tres en bajar. En este nivel, añade peso, por ejemplo una mochila. La toalla es lo que hace que este ejercicio trabaje la fascia plantar y no solo la pantorrilla.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevación de talones con toalla',
          media: 'heel_raise_towel',
          caption: 'Elevación de talones con toalla: tres segundos para subir, dos arriba, tres para bajar',
          alt: 'Una figura sube en puntas sobre un escalón con una toalla enrollada, con las pantorrillas resaltadas',
        },
      ],
      sourceNote:
        'Riel 2019: 70\u00A0personas con fasciopatía plantar en ecografía, elevaciones de talón de pie durante tres meses. Dolor en el Foot Health Status Questionnaire: diferencia media ajustada de 6,9\u00A0puntos, IC del 95\u00A0% de menos 15,5 a más 1,7, no significativa. Mejoría en la Global Rating of Change: 24 de 33 (dosis propia) y 20 de 32 (plan fijo). Patient Acceptable Symptom State: 3 de 35 y 1 de 35.',
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.guideline],
    },
    {
      h2: '¿Lo dejaste cuando empezó a mejorar, o después de un brote?',
      keyFact: 'En un estudio a largo plazo, el 31,9\u00A0% de las personas que quedaron sin síntomas tuvo al menos una recaída antes (Hansen y colegas, 2018).',
      paragraphs: [
        '**Las recaídas son parte del camino normal, no la prueba de que nada funciona.** En el estudio danés a largo plazo, el 31,9\u00A0% de las personas que terminaron sin síntomas tuvo al menos una recaída antes de que el dolor se fuera del todo. Entre quienes seguían con síntomas, el 77,5\u00A0% había tenido un periodo sin dolor en algún momento (Hansen y colegas, 2018).',
        'De ahí salen dos patrones:',
        {
          list: [
            '**Dejarlo muy pronto.** El dolor se calma, los ejercicios desaparecen y unas semanas después el talón vuelve a estar como al principio. Qué cambiar: cuando las mañanas vayan bien, baja a una dosis de mantenimiento más ligera, por ejemplo menos días de fuerza, en lugar de parar.',
            '**Brote y luego parar.** Un día largo de pie o unos zapatos nuevos provocan una mala mañana, y lo dejas todo una semana. Qué cambiar: vuelve un paso atrás en las tarjetas de arriba y sigue. Parar por completo hace que pierdas la fuerza que ganaste.',
          ],
        },
        'Una regla sencilla te ayuda a distinguir un brote de un retroceso: un dolor de hasta unos 6 de 10 durante el ejercicio está bien si se calma y tu mañana siguiente no es peor. Es la regla que usa Walkito. No se ha probado como regla por separado, así que si tus mañanas empeoran semana tras semana, consulta a un profesional de la salud.',
        'Ningún estudio ha probado cuánto tiempo mantener una dosis de mantenimiento después de que la fascitis plantar se calma. La guía de 2023 no fija una fecha de fin para el trabajo de fuerza (Koc y colegas, 2023).',
      ],
      cites: [CITE.hansen, CITE.guideline],
    },
    {
      h2: '¿Algo lo sigue provocando?',
      keyFact: 'Un tobillo que se doblaba 0\u00A0grados o menos multiplicaba por unas 23 las probabilidades de fascitis plantar frente a un tobillo que se doblaba más de 10\u00A0grados, en un estudio con 50\u00A0casos y 100\u00A0controles (Riddle y colegas, 2003).',
      paragraphs: [
        '**La carga que pones sobre el pie el resto del día puede superar lo que logran los ejercicios.** En un estudio pareado con 50\u00A0personas con fascitis plantar y 100 sin ella, un tobillo rígido fue el factor de riesgo más fuerte: un tobillo que se doblaba 0\u00A0grados o menos multiplicaba las probabilidades por 23,3. Un índice de masa corporal por encima de 30 las multiplicaba por unas 5,6, y pasar la mayor parte de la jornada laboral de pie por unas 3,6 (Riddle y colegas, 2003).',
        'La guía de 2023 menciona los mismos factores, más correr, y añade que las superficies duras con poca amortiguación hacen que estar de pie y caminar en el trabajo sea un riesgo mayor (Koc y colegas, 2023). Algunos los puedes cambiar y otros no:',
        {
          list: [
            '**Un tobillo rígido o una pantorrilla tensa.** Sigue con los estiramientos de pantorrilla y de sóleo; [pantorrillas tensas](/es/pantorrillas-tensas/) tiene la serie completa.',
            '**Turnos largos sobre pisos duros.** Zapatos con amortiguación, un tapete donde te paras y pausas para sentarte cuando puedas. Consulta [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/).',
            '**Cuánto caminas o corres.** Reduce la distancia o el ritmo en lugar de parar. Si tus primeros pasos de la mañana siguiente son claramente peores, fue demasiado. Consulta [caminar con fascitis plantar](/es/caminar-con-fascitis-plantar/).',
            '**El peso corporal.** En el estudio a largo plazo, el peso no se relacionó con cuánto duraron los síntomas (Hansen y colegas, 2018), así que no se trata de culpas. [Peso y fascitis plantar](/es/peso-y-fascitis-plantar/) resume lo que se sabe.',
          ],
        },
        'Las plantillas pueden quitarle algo de presión al talón mientras ganas fuerza, pero la guía recomienda no depender solo de ellas para el alivio a corto plazo (grado **B**) y las admite junto con otros tratamientos (grado **C**). [Plantillas o ejercicios](/es/plantillas-o-ejercicios/) compara las dos opciones.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.hansen],
    },
    {
      h2: '¿Podría ser algo distinto de la fascitis plantar?',
      paragraphs: [
        '**Sí, y la guía les pide a los profesionales de la salud que lo revisen cuando los síntomas no se calman.** La guía de 2023 para el dolor de talón dice que se deben buscar otros diagnósticos, como la artritis inflamatoria de la columna y las articulaciones (espondiloartritis), el adelgazamiento de la almohadilla grasa del talón y un bulto benigno en la fascia (fibroma plantar), cuando el cuadro no encaja o los síntomas no se resuelven con el tratamiento (Koc y colegas, 2023).',
        'Una revisión de 2020 menciona otras causas de dolor bajo el talón, como un nervio atrapado (síndrome del túnel del tarso o nervio de Baxter), una fractura por estrés del calcáneo, una rotura de la fascia y la artritis inflamatoria (Latt y colegas, 2020). Pistas que apuntan a algo distinto de la fascitis plantar:',
        {
          list: [
            '**Ardor, hormigueo o adormecimiento**, o dolor que se extiende al arco o a los dedos: posible problema de un nervio.',
            '**Dolor que aumenta cuanto más caminas**, en lugar de calmarse después de los primeros pasos, y que duele al apretar los lados del talón: consulta [fascitis plantar o fractura por estrés](/es/fascitis-plantar-o-fractura-por-estres/).',
            '**Dolor en la parte de atrás del talón** y no debajo: consulta [fascitis plantar o tendinitis de Aquiles](/es/fascitis-plantar-o-tendinitis-de-aquiles/).',
            '**Un dolor profundo, como de moretón, en el centro de la almohadilla del talón**, peor en pisos duros y descalzo: consulta [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
            '**Dolor por la noche o en reposo**: consulta [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/).',
            '**Los dos talones, con rigidez matutina prolongada u otras articulaciones adoloridas.** En el estudio a largo plazo, el dolor en los dos talones se asoció con una recuperación más lenta, y los autores sugirieron que podría indicar una afección inflamatoria que no se buscó (Hansen y colegas, 2018).',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.hansen],
    },
    {
      h2: '¿Qué opciones menciona la guía cuando el ejercicio solo no ha bastado?',
      keyFact: 'En un ensayo con 180\u00A0personas, añadir una infiltración de corticoide a las elevaciones de talón, los consejos y una talonera no produjo ninguna diferencia que los pacientes notaran en ningún momento hasta el año (Riel y colegas, 2023).',
      paragraphs: [
        'Son opciones para hablar con un profesional de la salud, no cosas para probar en casa. Todos los grados son de la guía de 2023 para el dolor de talón, donde **A** es su recomendación más fuerte (Koc y colegas, 2023):',
        {
          list: [
            '**Terapia manual** (trabajo con las manos sobre articulaciones y tejidos blandos): **A**.',
            '**Vendaje**, rígido o elástico, junto con otros tratamientos, para el alivio a corto plazo: **A**. Consulta [vendaje para la fascitis plantar](/es/vendaje-fascitis-plantar/).',
            '**Férulas nocturnas durante uno a tres meses**, si los primeros pasos siguen doliendo: **A**. Consulta [férula nocturna](/es/ferula-nocturna-fascitis-plantar/).',
            '**Punción seca** de los músculos de la pantorrilla y el pie: **B**.',
            '**Láser de baja intensidad** como parte de un programa de rehabilitación, para el dolor a corto plazo: **B**.',
            '**Plantillas combinadas con otros tratamientos**: **C**.',
          ],
        },
        'La guía recomienda **no** usar plantillas como lo único que haces para el alivio a corto plazo (**B**) y no añadir ultrasonido terapéutico a los estiramientos (**A**). La versión de 2023 no hace ninguna recomendación sobre las ondas de choque.',
        '**Las infiltraciones de corticoide** alivian el dolor a corto plazo en algunas personas, pero la evidencia para añadirlas es débil. En un ensayo con 180\u00A0personas, todas recibieron consejos y una talonera; un grupo añadió elevaciones de talón y otro elevaciones de talón más una infiltración. Las diferencias entre grupos nunca llegaron al tamaño que los pacientes notarían, en ningún momento hasta el año (Riel y colegas, 2023). El mismo ensayo no encontró un beneficio extra claro por añadir las elevaciones de talón, lo que recuerda que ningún añadido por sí solo funciona siempre.',
        'Una revisión de 2020 dice que a las personas que siguen con dolor después de al menos seis meses de tratamiento no quirúrgico se les pueden ofrecer opciones mínimamente invasivas, como infiltraciones u ondas de choque, o en algunos casos cirugía (Latt y colegas, 2020). Son decisiones para tomar con un especialista. Un fisioterapeuta también puede revisar en persona tu técnica y tu carga: consulta [app o fisioterapia](/es/app-vs-fisioterapia-fascitis-plantar/).',
      ],
      sourceNote:
        'Riel 2023: consejos + talonera (n = 62), más elevaciones de talón pesadas y lentas con dosis propia (n = 59), más una infiltración de triamcinolona guiada por ecografía (n = 59). Dolor en el Foot Health Status Questionnaire, diferencia mínima importante de 14,1\u00A0puntos. Grupo con infiltración frente a solo consejos: diferencia ajustada de 9,1\u00A0puntos a los tres meses (p = 0,023) y de 5,2\u00A0puntos a lo largo de 52\u00A0semanas (p = 0,045), por debajo de la diferencia mínima importante. Sin diferencia significativa entre ejercicio y ejercicio más infiltración, ni entre consejos y ejercicio, en ningún momento.',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.latt],
    },
    {
      h2: '¿Cuándo deberías volver a revisarte?',
      paragraphs: [
        '**Vuelve a revisarte si unos meses de ejercicio constante y progresivo no han cambiado tu dolor de la mañana, o antes si el patrón cambia.** Una revisión de 2020 dice que las pruebas de imagen se reservan para los casos poco habituales y para quienes no responden al tratamiento de primera línea (Latt y colegas, 2020), y la guía dice que se deben buscar otros diagnósticos cuando los síntomas no se resuelven (Koc y colegas, 2023).',
        'Para aprovechar la consulta, lleva:',
        {
          list: [
            'Tus puntuaciones de dolor de la mañana (primeros pasos, de 0 a 10) de las últimas semanas, para que se vea la tendencia.',
            'Lo que has hecho, con qué frecuencia y con cuánto peso: «elevaciones de talón» le dice menos a un profesional que «a una pierna, 4\u00A0series de 10, con mochila».',
            'Lo que lo empeora: un turno, una carrera, zapatos nuevos, andar descalzo.',
            'Todo lo que no encaje con la fascitis plantar: dolor nocturno, hormigueo, los dos talones, otras articulaciones adoloridas.',
          ],
        },
        'Pregunta si el diagnóstico sigue encajando, si una prueba de imagen cambiaría algo y cuáles de las opciones de la guía de arriba te convienen.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
  ],
  faq: [
    {
      q: '¿Por qué mi fascitis plantar no mejora?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Los motivos comunes son un plan solo de estiramientos sin trabajo de fuerza de pantorrilla, una carga que nunca se vuelve más difícil, dejarlo cuando el dolor se calma o después de un brote, y la carga diaria, como turnos largos o carreras. A veces no es fascitis plantar. La guía de 2023 califica los estiramientos con A y el trabajo de fuerza con B, así que la mayoría de los planes necesita los dos.',
    },
    {
      q: '¿La fascitis plantar es permanente?',
      cites: [CITE.hansen, CITE.latt],
      a: 'Normalmente no. Alrededor del 90\u00A0% de las personas mejora con tratamiento no quirúrgico. En un grupo difícil de manejar de 174\u00A0personas seguidas durante una media de 9,7\u00A0años, el 54\u00A0% no tenía síntomas y la mayoría del resto solo tenía síntomas leves. Algunas personas sí conservan síntomas leves durante años, así que vale la pena volver a revisarte si estás estancado.',
    },
    {
      q: '¿La fascitis plantar crónica todavía puede mejorar?',
      cites: [CITE.hansen],
      a: 'Sí. En un estudio a largo plazo, las personas siguieron quedando sin síntomas mucho después del primer año, y el 77,5\u00A0% de quienes seguían con dolor había tenido en algún momento un periodo sin dolor. La fascia también se adelgazó con el tiempo, con o sin dolor. Lento no es lo mismo que estancado para siempre.',
    },
    {
      q: '¿Debo dejar de hacer ejercicio si tengo un brote de dolor de talón?',
      cites: [CITE.hansen],
      a: 'Normalmente no del todo. Vuelve un paso atrás, por ejemplo de elevaciones a una pierna a elevaciones con dos pies, y sigue. Las recaídas son comunes: el 31,9\u00A0% de las personas que quedaron sin síntomas en un estudio a largo plazo tuvo al menos una antes. Consulta a un profesional de la salud si tus mañanas siguen empeorando semana tras semana.',
    },
    {
      q: '¿Basta con estirar para la fascitis plantar?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Para algunas personas sí, pero añadir trabajo de fuerza de pantorrilla puede ayudar antes. La guía de 2023 califica los estiramientos con A y el trabajo de fuerza con B. En un ensayo con 48\u00A0personas, las elevaciones de talón pesadas dieron mejor resultado que los estiramientos a los tres meses, aunque al año los grupos estaban más o menos igual.',
    },
    {
      q: '¿Las infiltraciones de corticoide ayudan con la fascitis plantar que no se quita?',
      cites: [CITE.rielHeelRaiseAdd],
      a: 'Pueden aliviar el dolor un tiempo, pero el beneficio añadido parece pequeño. En un ensayo con 180\u00A0personas, añadir una infiltración a las elevaciones de talón, los consejos y una talonera no produjo ninguna diferencia que los pacientes notaran en ningún momento hasta el año. Si te conviene o no es una decisión para tu médico.',
    },
    {
      q: '¿Cuándo se considera la cirugía para la fascitis plantar?',
      cites: [CITE.latt],
      a: 'Solo después de un periodo largo de tratamiento no quirúrgico. Una revisión de 2020 dice que la cirugía se considera cuando el dolor y las limitaciones persisten a pesar de al menos seis meses de tratamiento no quirúrgico, y que en esa etapa también pueden considerarse opciones mínimamente invasivas, como infiltraciones u ondas de choque. Esa decisión la toma contigo un especialista en pie y tobillo.',
    },
    {
      q: '¿Mi dolor de talón podría ser algo distinto de la fascitis plantar?',
      cites: [CITE.guideline, CITE.latt],
      a: 'Sí. La guía de 2023 les pide a los profesionales de la salud que busquen otras causas cuando los síntomas no se calman, como una artritis inflamatoria o el adelgazamiento de la almohadilla grasa del talón. Otras causas son un nervio atrapado y una fractura por estrés del calcáneo. El ardor, el hormigueo, el dolor nocturno o un dolor que aumenta al caminar son motivos para revisarte.',
    },
    {
      q: '¿Las plantillas ayudan si la fascitis plantar no mejora?',
      cites: [CITE.guideline],
      a: 'Pueden ayudar como parte de un plan más amplio. La guía de 2023 recomienda no usar plantillas como único tratamiento para el alivio a corto plazo (grado B) y dice que pueden usarse combinadas con otros tratamientos (grado C). Combínalas con estiramientos y trabajo de fuerza de pantorrilla en lugar de depender solo de ellas.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empeora semana tras semana, no solo se mantiene igual',
      'empezó después de una caída, un salto o un chasquido repentino, o no puedes apoyar el pie',
      'duele al apretar los lados del talón, o aumenta cuanto más caminas',
      'sientes ardor, hormigueo o adormecimiento en el talón, el arco o los dedos',
      'te despierta por la noche o duele en reposo',
      'te duelen los dos talones con rigidez matutina prolongada, u otras articulaciones están adoloridas o hinchadas',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie. No puede decirte por qué tu talón está estancado ni reemplaza la revisión de un profesional de la salud, pero cubre las partes que suelen faltar: trabajo de fuerza de pantorrilla que se vuelve más difícil con el tiempo, y una sesión más ligera en las malas mañanas en lugar de una semana sin hacer nada.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta. Cada 14\u00A0días una prueba corta revisa la fuerza de la pantorrilla, el control del arco y el equilibrio, para que veas si las cosas avanzan. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['pfDuration', 'calfRaises', 'heelPain'],
  crumb: 'Fascitis plantar que no mejora',
  campaign: 'guide-plantar-fasciitis-not-getting-better-es',
};
