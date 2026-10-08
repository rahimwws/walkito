import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Fascitis plantar (ES) ────────────────────────────────────────
 *
 * Translated from `articles/hub-plantar-fasciitis.ts`, written around the
 * Spanish queries «fascitis plantar», «fascitis plantar síntomas»,
 * «fascitis plantar causas». Figures, grades and qualifiers are identical to
 * the English page. No new citations.
 */

export const HUB_PLANTAR_FASCIITIS_ES: Guide = {
  lang: 'es',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Fascitis plantar: síntomas, causas y qué ayuda',
  description:
    'Qué es la fascitis plantar, sus síntomas y causas, qué recomienda la guía clínica de 2023, cuánto dura y qué ejercicios ayudan.',
  h1: 'Fascitis plantar: síntomas, causas y qué ayuda según la evidencia',
  lede:
    'La fascitis plantar es dolor bajo el talón por una sobrecarga de la fascia plantar, la banda gruesa de tejido que va del hueso del talón a los dedos. Es la causa más común de dolor de talón bajo el pie. La guía clínica de 2023 para el dolor de talón le da al estiramiento su grado más alto y al entrenamiento de fuerza el segundo más alto, y cerca del 90\u00A0% de las personas mejora sin cirugía.',
  takeaways: [
    'La guía de 2023 para el dolor de talón le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, A, y al entrenamiento de fuerza una B (Koc y colegas, 2023).',
    'Cerca del 90\u00A0% de las personas con fascitis plantar mejora con cuidados sin cirugía, como estiramientos, trabajo de fuerza y zapatos con buen soporte, a menudo en varios meses (Latt y colegas, 2020).',
    'Una dorsiflexión de tobillo reducida, es decir, cuánto puede subir el pie hacia la tibia, fue el factor de riesgo independiente más fuerte en un estudio de casos y controles con 50\u00A0casos y 100\u00A0controles, con una razón de probabilidades (odds ratio) de 23,3 (Riddle y colegas, 2003).',
    'El dolor de talón en los primeros pasos de la mañana, que se calma después de caminar unos minutos, es el patrón de síntomas más fácil de reconocer (Koc y colegas, 2023).',
    'En un seguimiento a largo plazo de 174\u00A0pacientes, cerca de la mitad ya no tenía síntomas a los cinco años. Entre quienes seguían con síntomas, la mayoría tenía solo un dolor leve (Hansen y colegas, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es la fascitis plantar?',
      paragraphs: [
        'La fascitis plantar es una sobrecarga de la fascia plantar. La fascia plantar es una banda resistente de tejido conectivo que recorre la planta del pie, desde el hueso del talón (el calcáneo) hasta la base de los dedos. Sostiene el arco y absorbe el impacto cada vez que das un paso.',
        'Cuando la fascia recibe más carga de la que puede recuperar, el tejido se irrita cerca de donde se une al talón. El nombre termina en «-itis», que hace pensar en inflamación, pero hoy se cree que es más bien un proceso degenerativo del tejido, no una inflamación que sigue activa. Algunos profesionales prefieren decir «fasciopatía plantar». El nombre no cambia los síntomas ni lo que se recomienda hacer.',
        'La guía clínica de 2023 del Journal of Orthopaedic & Sports Physical Therapy la llama la causa más reconocida del dolor de talón bajo el pie.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: '¿Cómo se siente la fascitis plantar?',
      paragraphs: [
        'El síntoma típico es dolor bajo el talón en los primeros pasos de la mañana. La guía lo describe como un dolor «más notorio al apoyar el peso a primera hora de la mañana o después de un rato de reposo». Suele calmarse cuando caminas unos minutos, y vuelve cuando te sientas un rato y te vuelves a parar.',
        'El dolor suele estar en la parte interna y delantera del talón, donde la fascia se une al hueso. Puede extenderse por el arco. Suele ser peor después de descansar, no durante la actividad, que es lo contrario de lo que la mayoría espera.',
        'El dolor se nota más claro a la mañana siguiente. Si la mañana siguiente es peor, el día anterior le pidió demasiado al pie. Por eso anotar el dolor de la mañana es la forma más útil de saber si vas mejorando. En [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) está el patrón de la mañana con detalle.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué causa la fascitis plantar y a quién le da?',
      keyFact: 'En un estudio de casos y controles pareados con 50\u00A0personas con fascitis plantar y 100\u00A0controles, la dorsiflexión de tobillo reducida multiplicó por 23,3 las probabilidades de fascitis plantar, el factor de riesgo más fuerte medido (Riddle y colegas, 2003).',
      paragraphs: [
        'La fascitis plantar aparece cuando la fascia recibe más carga de la que puede aguantar y recuperar. La carga puede ser mucha de golpe (subir de repente los kilómetros que corres) o constante en el tiempo (estar de pie en un piso duro todo el día).',
        'Un estudio de casos y controles pareados, con 50\u00A0personas con fascitis plantar y 100\u00A0controles, encontró que una dorsiflexión de tobillo reducida era el factor de riesgo independiente más fuerte, con una razón de probabilidades de 23,3. En otra serie de 254\u00A0personas con fascitis plantar, entre el 52 y el 60\u00A0% tenía una contractura solo en el gastrocnemio, el músculo más grande y externo de la pantorrilla. Estar mucho tiempo de pie en el trabajo multiplicó por 3,6 las probabilidades. Un índice de masa corporal más alto también las aumentó.',
        'La guía menciona otros factores de riesgo: tener entre 40 y 60\u00A0años, correr o hacer actividades con saltos, y trabajos en los que pasas mucho tiempo de pie. El pie plano o el arco alto pueden cambiar cómo viaja la carga por la fascia, pero ninguno de los dos garantiza que aparezca.',
        'La fascitis plantar suele venir de una combinación: una pantorrilla tensa, una carga para la que el pie no estaba listo y poco tiempo de recuperación.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: '¿Cómo se diagnostica la fascitis plantar?',
      paragraphs: [
        'La fascitis plantar la suele diagnosticar un profesional de la salud a partir de tu historia y una exploración física. Lo más importante es el dolor al presionar la parte interna y delantera del talón, el dolor en los primeros pasos de la mañana, y un dolor que se calma con la actividad y vuelve después de descansar.',
        'En un caso típico no hacen falta estudios de imagen. La guía recomienda pensar en ellos si el patrón no encaja, si los síntomas no mejoran después de varias semanas de cuidados conservadores, o si hay que descartar otro diagnóstico (por ejemplo, una fractura por estrés o un nervio atrapado). El ultrasonido y la resonancia magnética pueden mostrar una fascia engrosada, pero una fascia engrosada en un estudio, sin el patrón de síntomas que la acompaña, no es fascitis plantar.',
        'Walkito no diagnostica. Si no sabes si tu dolor de talón es fascitis plantar, lo mejor es empezar con un profesional de la salud.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué ayuda con la fascitis plantar?',
      keyFact: 'En un ensayo con 48\u00A0personas, las elevaciones de talón con carga y una toalla aliviaron el dolor más rápido que solo estirar a los tres meses, aunque a los doce meses los dos grupos estaban igualados (Rathleff y colegas, 2015).',
      paragraphs: [
        'La guía clínica de 2023 califica cada opción según la fuerza de la evidencia que la respalda. Las recomendaciones más fuertes son el estiramiento, el vendaje, la terapia manual hecha por un profesional y las férulas nocturnas para el dolor de la mañana que no se va. Después viene el entrenamiento de fuerza. La tabla de abajo muestra las opciones principales con su grado en la guía.',
        'Ninguna opción le funciona a todo el mundo. La mayoría empieza con estiramientos y zapatos con buen soporte, añade trabajo de fuerza cuando el dolor inicial baja, y habla con un profesional de la salud sobre las demás opciones si el avance se frena. En un ensayo con 48\u00A0personas, las elevaciones de talón con carga y una toalla bajo los dedos aliviaron el dolor más rápido que solo estirar a los tres meses, aunque a los doce meses los dos grupos estaban igualados. La guía recomienda no usar plantillas ortopédicas solas como única opción a corto plazo, y no añadir ultrasonido terapéutico al estiramiento.',
      ],
      table: {
        caption: 'Grados de la guía de 2023 para el dolor de talón bajo el pie',
        head: ['Opción', 'Grado', 'Notas'],
        rows: [
          ['Estiramiento de la fascia plantar y de la pantorrilla', '**A**', 'Grado más alto. La base de los cuidados conservadores.'],
          ['Terapia manual (trabajo sobre articulaciones y tejidos blandos)', '**A**', 'Grado más alto. La hace un profesional para la rigidez de las articulaciones y la falta de flexibilidad.'],
          ['Vendaje del pie (rígido o elástico)', '**A**', 'Grado más alto para el dolor y la función a corto plazo, junto con otros cuidados.'],
          ['Férulas nocturnas de 1 a 3\u00A0meses', '**A**', 'Grado más alto para el dolor de la mañana que no se va. Mira [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/).'],
          ['Entrenamiento de fuerza (elevaciones de talón con carga)', '**B**', 'Adelantó la mejora en un ensayo con 48\u00A0personas. Mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).'],
          ['Láser de baja intensidad', '**B**', 'Procedimiento en consultorio.'],
          ['Punción seca', '**B**', 'Procedimiento en consultorio.'],
          ['Plantillas ortopédicas combinadas con otros cuidados', '**C**', 'Evidencia débil. Pueden ayudar como parte de un programa más amplio.'],
          ['Plantillas ortopédicas solas, a corto plazo', '**B en contra**', 'La guía recomienda **no** usarlas como única opción.'],
          ['Ultrasonido terapéutico añadido al estiramiento', '**A en contra**', 'La evidencia no respalda añadirlo.'],
        ],
      },
      sourceNote:
        'Grados de Koc y colegas, 2023, guía de práctica clínica para el dolor de talón del Journal of Orthopaedic & Sports Physical Therapy.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: '¿Cuánto dura la fascitis plantar?',
      keyFact: 'En un seguimiento de 174 pacientes, cerca de la mitad ya no tenía síntomas a los cinco años, y el 46 % todavía tenía algo de dolor a los diez años, casi siempre leve (Hansen y colegas, 2018).',
      paragraphs: [
        'Una revisión de 2020 indica que cerca del 90\u00A0% de las personas mejora con cuidados sin cirugía, a menudo en varios meses. Un seguimiento más largo de 174\u00A0pacientes da una imagen más detallada: cerca de la mitad ya no tenía síntomas a los cinco años, y el 46\u00A0% todavía tenía algo de dolor a una media de diez años, aunque la mayoría de ellos solo tenía síntomas leves.',
        'La recuperación depende de cuánto tiempo llevas con ella, de lo que haces al respecto y de algunos factores que no puedes controlar. La cohorte de Hansen de 2018 encontró que ser mujer y tener dolor en los dos talones predecían de forma significativa una recuperación más lenta. El IMC, la edad, el grosor de la fascia y tener un espolón calcáneo no.',
        'La pregunta útil no es «cuántas semanas faltan para que se acabe», sino «¿mi dolor de la mañana está más bajo este mes que el mes pasado?». Esa tendencia es la verdadera señal de avance. En [¿cuánto dura la fascitis plantar?](/es/cuanto-dura-la-fascitis-plantar/) está toda la evidencia sobre los tiempos.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: '¿Qué ejercicios y estiramientos ayudan con la fascitis plantar?',
      paragraphs: [
        'Los ejercicios que respalda la guía son de dos tipos: estiramiento (grado A) y entrenamiento de fuerza (grado B). El estiramiento trabaja la fascia plantar y la pantorrilla. El entrenamiento de fuerza le da a la pantorrilla la capacidad de aguantar la carga del día sin sobrecargar la fascia.',
        'En [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/) está la lista completa con dosis de inicio, qué debe sentirse en cada uno y cuándo parar. [Elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) explica a fondo el ejercicio del ensayo principal de fuerza. Cada ejercicio tiene su propia página:',
      ],
      bullets: [
        'El [estiramiento plantar](/es/ejercicios/estiramiento-fascia-plantar/) jala los dedos hacia atrás para cargar la fascia con suavidad antes de pararte.',
        'El [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/) y el [estiramiento de sóleo](/es/ejercicios/estiramiento-de-soleo/) trabajan la pantorrilla tensa que jala del talón.',
        'La [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/) es la elevación de talón con carga del ensayo de Rathleff.',
        'El [automasaje plantar](/es/ejercicios/masaje-plantar-con-pelota/) calma el tejido entre sesiones.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Por qué las mañanas son lo peor?',
      paragraphs: [
        'La fascia plantar se pone rígida y se acorta mientras duermes. En reposo, el pie suele quedar apuntando hacia abajo. Cuando te paras y el pie se aplana bajo todo tu peso, el tejido acortado se estira de golpe. Ese es el tirón agudo de los primeros pasos.',
        'Lo más útil que puedes hacer pasa antes de que el pie toque el piso. Siéntate en la orilla de la cama, cruza un tobillo sobre la otra rodilla y jala los dedos hacia atrás con suavidad unos 10\u00A0segundos, 10\u00A0veces con cada pie. La guía le da a este estiramiento su grado más alto.',
        'Las férulas nocturnas mantienen el pie en ángulo recto durante la noche, para que la fascia se quede suavemente estirada. La guía también les da una A para las personas cuyo dolor en los primeros pasos sigue a pesar de estirar. En [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) está la rutina de la mañana, las férulas nocturnas y otras condiciones con el mismo patrón de dolor en los primeros pasos.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Fascitis plantar en el trabajo y al correr',
      paragraphs: [
        'Estar mucho tiempo de pie sobre superficies duras es uno de los factores de riesgo del estudio de Riddle de 2003: multiplicó por 3,6 las probabilidades de tener fascitis plantar. Una revisión de 2015 sobre salud laboral relacionó estar mucho tiempo de pie en el trabajo con molestias musculares y articulares, cansancio y dolor de piernas. Si te duelen los pies al final del turno, sirven los mismos estiramientos de pantorrilla y el mismo trabajo de fuerza.',
        'Para quienes corren, la guía de 2023 aconseja cambiar la carga en lugar de dejarlo todo. Eso significa bajar los kilómetros o la intensidad, no llegar a cero. La recomendación se basa en la opinión de expertos (grado E) porque ningún ensayo la ha probado, pero coincide con cómo las guías para el tendón de Aquiles y la periostitis tibial manejan también las lesiones por sobrecarga.',
      ],
      bullets: [
        '[Dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) explica los ejercicios y el calzado para quienes trabajan de pie.',
        '[Dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/) habla de los turnos largos sobre pisos duros.',
        '[Dolor de pies con escritorio de pie](/es/escritorio-de-pie-dolor-de-pies/) explica cómo pasar de estar sentado a estar de pie.',
        '[Dolor de talón al correr](/es/dolor-de-talon-en-corredores/) explica cómo ajustar el entrenamiento cuando duele el talón.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: '¿El dolor podría ser otra cosa y no fascitis plantar?',
      paragraphs: [
        'Varias condiciones duelen en el mismo lugar o siguen el mismo patrón de la mañana. Dónde está el dolor y cómo se comporta ayudan a distinguirlas.',
        '**Tendinitis de Aquiles.** Dolor en la parte de atrás del talón o en el tendón que está arriba, no bajo el pie. La rigidez en los primeros pasos es común, pero el dolor está más arriba. Mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
        '**Síndrome de la almohadilla grasa del talón.** Un dolor profundo en el centro del talón, peor sobre superficies duras y descalzo. Una revisión exploratoria de 2022 señaló que puede ser difícil de distinguir de la fascitis plantar sin estudios de imagen. El dolor de la almohadilla grasa está justo en el centro, y el de la fascitis en la parte interna y delantera.',
        '**Espolón calcáneo.** Un crecimiento de hueso en la parte de abajo del hueso del talón. Mucha gente tiene uno sin ningún dolor. En la cohorte de Hansen de 2018, con 174\u00A0pacientes, tener un espolón al inicio no cambió de forma significativa cuánto duraron los síntomas. El espolón suele estar ahí, pero no es lo que causa el dolor.',
        '**Fractura por estrés del calcáneo.** Un dolor que aumenta con la actividad en lugar de calmarse cuando entras en calor. Puede doler en reposo o de noche. Apretar los lados del talón suele provocar el dolor. Consulta a un profesional de la salud antes de ejercitar el pie.',
        '**Artritis inflamatoria.** Cuando duelen los dos talones, la rigidez de la mañana dura más de 30\u00A0minutos y otras articulaciones están rígidas o hinchadas, el patrón apunta a algo que afecta a todo el cuerpo. Debe revisarlo un profesional de la salud.',
        'Si no estás seguro, un profesional de la salud puede distinguirlas por la ubicación, el comportamiento del dolor y, si hace falta, estudios de imagen.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'Apps para la fascitis plantar',
      paragraphs: [
        'Varias apps incluyen ejercicios para la fascitis plantar. Se diferencian en si se ajustan a tu nivel de dolor, si suben la carga de forma progresiva y si incluyen tanto estiramiento como trabajo de fuerza. [La mejor app para la fascitis plantar](/es/mejor-app-fascitis-plantar/) compara siete, una al lado de la otra, incluida Walkito.',
      ],
    },
    {
      h2: 'Todas las guías sobre fascitis plantar de este sitio',
      bullets: [
        '[Ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/) tiene la lista completa de ejercicios con dosis y grados de evidencia.',
        '[Elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) explica el protocolo de elevaciones de talón del ensayo de Rathleff.',
        '[Dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) explica el dolor de la mañana, las férulas nocturnas y otras condiciones con dolor en los primeros pasos.',
        '[¿Cuánto dura la fascitis plantar?](/es/cuanto-dura-la-fascitis-plantar/) explica los tiempos de recuperación, qué la hace más lenta y qué hacer si el avance se frena.',
        '[Dolor de talón al correr](/es/dolor-de-talon-en-corredores/) explica cómo manejar la carga y cambiar el entrenamiento.',
        '[Dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) explica los ejercicios y el calzado para cuando pasas mucho tiempo de pie.',
        '[Dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/) habla de los turnos largos sobre pisos duros.',
        '[Dolor de pies con escritorio de pie](/es/escritorio-de-pie-dolor-de-pies/) explica cómo pasar de estar sentado a estar de pie.',
        '[La mejor app para la fascitis plantar](/es/mejor-app-fascitis-plantar/) compara siete apps para la fascitis plantar.',
        'Páginas de ejercicios: [estiramiento plantar](/es/ejercicios/estiramiento-fascia-plantar/), [estiramiento de pantorrilla](/es/ejercicios/estiramiento-de-pantorrilla/), [elevación de talones con toalla](/es/ejercicios/elevacion-de-talones-con-toalla/), [automasaje plantar](/es/ejercicios/masaje-plantar-con-pelota/).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la forma más rápida de superar la fascitis plantar?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'No hay atajos, pero la evidencia apunta a empezar pronto con estiramientos (grado A en la guía) y añadir trabajo de fuerza para la pantorrilla (grado B). En un ensayo con 48\u00A0personas, las elevaciones de talón con carga alta adelantaron la mejora a los tres meses (Rathleff y colegas, 2015). Lo básico es estirar todos los días, usar zapatos con buen soporte y no sobrecargar el pie.',
    },
    {
      q: '¿La fascitis plantar se quita sola?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Puede pasar, pero suele tardar mucho. Una revisión de 2020 indica que cerca del 90\u00A0% de las personas mejora con cuidados conservadores (Latt y colegas, 2020). En una cohorte de 174\u00A0pacientes, cerca de la mitad ya no tenía síntomas a los cinco años (Hansen y colegas, 2018). Hacer algo activo al respecto adelanta esos tiempos.',
    },
    {
      q: '¿Caminar es bueno o malo para la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'Caminar con zapatos de buen soporte a un ritmo cómodo suele estar bien. La guía no dice que dejes de moverte. La prueba es cómo se siente tu talón a la mañana siguiente. Si el dolor de los primeros pasos después de una caminata es claramente más alto de lo normal, esa caminata fue demasiado. Acorta la distancia antes de dejarlo del todo.',
    },
    {
      q: '¿El espolón calcáneo causa la fascitis plantar?',
      cites: [CITE.hansen],
      a: 'No como la mayoría cree. Un espolón calcáneo es un crecimiento de hueso en la parte de abajo del hueso del talón, y mucha gente tiene uno sin dolor. En un seguimiento de 174\u00A0pacientes, tener un espolón al inicio no cambió de forma significativa cuánto duraron los síntomas (Hansen y colegas, 2018). El problema es la sobrecarga de la fascia, no el espolón.',
    },
    {
      q: '¿Puedo hacer ejercicio con fascitis plantar?',
      cites: [CITE.guideline],
      a: 'Sí, pero importan el tipo y la dosis. La guía recomienda seguir activo con ajustes de carga, no el reposo total. Los ejercicios que cargan la pantorrilla y la fascia (estiramientos, elevaciones de talón) son parte del enfoque, no una contradicción. Las actividades de alto impacto quizá tengas que bajarlas. La prueba siempre es la mañana siguiente: si está peor, el día anterior fue demasiado.',
    },
    {
      q: '¿Qué zapatos ayudan con la fascitis plantar?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La guía recomienda aprender sobre calzado como parte del enfoque, pero no nombra marcas. Un zapato con algo de amortiguación, soporte para el arco y una pequeña diferencia de altura entre talón y punta ayuda a compensar una pantorrilla tensa. Una menor flexibilidad del tobillo es el factor de riesgo más fuerte de la fascitis plantar (Riddle y colegas, 2003). Evita andar descalzo en pisos duros, sobre todo en la mañana.',
    },
    {
      q: '¿Cuándo debo ir al médico por dolor de talón?',
      a: 'Consulta a un profesional de la salud si el dolor empezó después de una lesión, si no puedes apoyar el pie, si te duelen los dos talones y tienes otras articulaciones rígidas, si hay entumecimiento u hormigueo, si el talón está rojo o caliente, si te despierta por la noche, o si no mejora después de varios meses de estiramientos y trabajo de pantorrilla. Estos patrones pueden apuntar a otra condición.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída',
      'no puedes apoyar el pie, o cojeas',
      'viene con entumecimiento, hormigueo, ardor, hinchazón o calor',
      'el talón está rojo, o tienes fiebre o te sientes mal',
      'te despierta por la noche o duele en reposo',
      'te duele al apretar los lados del talón',
      'te duelen los dos talones y tienes otras articulaciones hinchadas o rígidas',
      'no ha mejorado después de varias semanas de ejercicio y menos carga',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'No tienes que decidir qué ejercicios hacer, en qué orden ni cuándo subir de nivel. Walkito arma un plan una semana a la vez en torno a una meta. Para la fascitis plantar, la primera meta es una mejor mañana: dolor de 1/10 o menos durante 14\u00A0días seguidos.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio. Cuando alcanzas la meta de la mañana, pasa a mantenimiento y la siguiente meta ocupa su lugar.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Fascitis plantar',
  campaign: 'hub-plantar-fasciitis-es',
};
