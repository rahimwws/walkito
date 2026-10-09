import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Fascitis plantar vs espolón calcáneo (ES) ─────────────────────────
 *
 * Translated from `articles/pf-vs-heel-spur.ts`. Written around the Spanish
 * queries «fascitis plantar vs espolón calcáneo», «espolón calcáneo duele»,
 * «espolón calcáneo radiografía». Figures, grades, qualifiers and hedges are
 * identical to the English page. No new citations.
 */

export const PF_VS_HEEL_SPUR_ES: Guide = {
  lang: 'es',
  page: 'pfVsHeelSpur',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Fascitis plantar vs espolón calcáneo: ¿son lo mismo?',
  description:
    'Fascitis plantar vs espolón calcáneo: en qué se diferencian, si el espolón causa dolor, qué dice la investigación y cuándo conviene una radiografía.',
  h1: 'Fascitis plantar vs espolón calcáneo: ¿son la misma afección?',
  lede:
    'Un espolón calcáneo es un crecimiento de hueso en la parte de abajo del hueso del talón. La fascitis plantar es una irritación de la fascia plantar, la banda gruesa de tejido que va de ese hueso hasta los dedos. Suelen aparecer juntos, pero no son la misma afección, y el espolón casi nunca es lo que duele. Muchas personas con espolón en la radiografía no sienten ningún dolor.',
  intro: [
    'Si te dijeron que tienes un espolón calcáneo y quieres saber qué hacer, los ejercicios son los mismos que ayudan con la fascitis plantar. En [ejercicios para el espolón calcáneo](/es/ejercicios-espolon-calcaneo/) está la rutina completa. Esta página explica la diferencia entre las dos afecciones, qué dice la investigación sobre los espolones y el dolor, y cuándo vale la pena pedir estudios de imagen.',
  ],
  takeaways: [
    'En un estudio con 216\u00A0adultos mayores de 62 a 94\u00A0años, el 55\u00A0% tenía al menos un espolón calcáneo plantar en la radiografía, y la presencia de espolón se relacionó con obesidad y artrosis, pero no con la postura del pie (Menz y colegas, 2008). Es una muestra de adultos mayores, no una cifra de la población general.',
    'En un estudio con 530\u00A0personas de 50\u00A0años o más con dolor de pie, los espolones y una fascia plantar engrosada casi siempre aparecían juntos, y un espolón solo era raro (6\u00A0% de los pies). El dolor de talón se asoció con tener los dos hallazgos a la vez (Menz y colegas, 2019).',
    'La guía clínica de 2023 para el dolor de talón se centra en la fascitis plantar como la causa más común de dolor plantar del talón y señala que los estudios de imagen por lo general no hacen falta cuando la exploración clínica ya apunta a fascitis plantar (Koc y colegas, 2023).',
    'El propio estudio de Menz de 2008 señala que investigaciones anteriores en la población general habían puesto la frecuencia del espolón calcáneo entre el 11 y el 16\u00A0%, muy por debajo del 55\u00A0% que encontraron en su muestra de adultos mayores (Menz y colegas, 2008).',
    'Los ejercicios que ayudan con el dolor de la fascitis plantar también trabajan el tejido blando alrededor del espolón. El ejercicio no disuelve un espolón, pero el espolón rara vez es lo que necesita atención.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Un espolón calcáneo es lo mismo que la fascitis plantar?',
      figure: { id: 'heel-side', caption: 'Un espolón, cuando existe, se forma en la parte inferior del hueso del talón, cerca de donde se une la fascia plantar.', alt: 'Vista lateral interior de un pie con la piel transparente que muestra el hueso del talón, la fascia plantar bajo el arco y una zona roja bajo el talón donde suele empezar el dolor.' },
      paragraphs: [
        '**Un espolón calcáneo y la fascitis plantar no son lo mismo.** La fascitis plantar es un problema de tejido blando: la fascia plantar, la banda gruesa que va del hueso del talón a los dedos, se irrita, generalmente donde se une al hueso. Un espolón calcáneo es un crecimiento de hueso en la parte inferior del hueso del talón (el calcáneo). Los dos suelen coexistir, pero cada uno puede aparecer sin el otro.',
        'La fascitis plantar provoca el dolor agudo y punzante que la gente describe en la parte de abajo del talón, sobre todo en los primeros pasos de la mañana o después de estar sentado un rato. La guía de 2023 la define como un dolor «más notorio al apoyar el peso a primera hora de la mañana o después de un rato de reposo». Un espolón calcáneo, en cambio, es un hallazgo estructural en una radiografía. Puede o no producir síntomas por sí solo.',
        'La confusión es comprensible. Durante décadas se pensó que los espolones eran la causa del dolor plantar del talón. Esa visión ha sido reemplazada en gran medida por evidencia que muestra que los espolones son comunes en personas sin dolor, y que muchas personas con fascitis plantar no tienen ningún espolón.',
      ],
      cites: [CITE.ehrmannSpur, CITE.guideline],
    },
    {
      h2: '¿Los espolones calcáneos realmente causan dolor?',
      keyFact: 'En un estudio con 530\u00A0personas con dolor de pie, un espolón solo en la radiografía apareció en apenas el 6\u00A0% de los pies, casi siempre junto con una fascia plantar engrosada (Menz y colegas, 2019).',
      paragraphs: [
        '**La mayoría de los espolones calcáneos no causan dolor.** La investigación muestra de forma consistente que los espolones aparecen en personas sin síntomas de talón, y que quitar el espolón no detiene el dolor de manera confiable.',
        'En un estudio con 530\u00A0personas de 50\u00A0años o más que reportaron dolor de pie:',
        {
          list: [
            'Las radiografías encontraron un espolón calcáneo en el 26,5\u00A0% de los pies.',
            'El ultrasonido encontró una fascia plantar engrosada en el 47,3\u00A0% de los pies.',
            'Los dos hallazgos casi siempre iban juntos, y un espolón solo era raro (6\u00A0% de los pies).',
            'Las personas con dolor de talón tenían el doble de probabilidades de tener los dos hallazgos juntos (Menz y colegas, 2019).',
          ],
        },
        'Dicho de otra forma, el espolón rara vez aparece sin el cambio de tejido blando que lo acompaña.',
        'Por separado, en un estudio con 216\u00A0adultos mayores de 62 a 94\u00A0años, el 55\u00A0% tenía al menos un espolón calcáneo plantar en la radiografía. Los espolones se relacionaron con obesidad, artrosis e historial de dolor de talón, pero no con la postura del pie. Los autores sugirieron que los espolones pueden ser una respuesta adaptativa a la compresión vertical del talón, no un resultado de la fascia plantar jalando del hueso (Menz y colegas, 2008).',
        'El estudio de Menz de 2008 señala que investigaciones anteriores en la población general habían reportado una frecuencia de espolón calcáneo del 11 al 16\u00A0%, muy por debajo del 55\u00A0% que los autores encontraron en su muestra de adultos mayores. En esa misma muestra, cerca de 6 de cada 10\u00A0personas con espolón nunca habían tenido dolor de talón, aunque el dolor de talón sí fue más común en personas con espolón (40\u00A0%) que sin él (12\u00A0%) (Menz y colegas, 2008). Un espolón aumenta las probabilidades, pero no decide quién termina con dolor.',
      ],
      sourceNote:
        'Menz 2019: 530\u00A0participantes de 50\u00A0años o más con dolor de pie, transversal. Espolones en el 26,5\u00A0% de los pies, engrosamiento de la fascia plantar en el 47,3\u00A0%, espolones aislados en el 6,0\u00A0%. Dolor de talón asociado con ambos hallazgos combinados (OR 2,16, IC 95\u00A0% 1,24 a 3,77). Menz 2008: 216\u00A0participantes de 62 a 94\u00A0años, transversal, frecuencia de espolón 55\u00A0%, dolor de talón actual o previo OR 4,6 (IC 95\u00A0% 2,3 a 9,4).',
      cites: [CITE.menzCoexistence, CITE.menzSpur],
    },
    {
      h2: '¿Qué tan común es tener un espolón calcáneo sin dolor?',
      keyFact: 'En un estudio de resonancia magnética con 77\u00A0personas sin síntomas, el 19\u00A0% tenía un espolón calcáneo, lo que muestra que los espolones son comunes incluso sin dolor de talón (Ehrmann y colegas, 2014).',
      paragraphs: [
        'Los espolones calcáneos son comunes. La frecuencia depende del grupo de edad y del método que se use para buscarlos.',
        'El estudio de Menz de 2008 con adultos mayores cita investigaciones anteriores que reportaron una frecuencia de espolón calcáneo del 11 al 16\u00A0% en la población general, un rango muy por debajo del 55\u00A0% que los autores encontraron en su muestra de 216\u00A0personas de 62 a 94\u00A0años. Un estudio de resonancia magnética aparte, con 77\u00A0voluntarios sin síntomas (edad promedio 48, rango de 23 a 83), encontró un espolón calcáneo en 15 de ellos, el 19\u00A0% (Ehrmann y colegas, 2014).',
        'El patrón es consistente: una proporción grande de personas con espolón no tiene síntomas, y **un espolón solo no predice si alguien va a tener dolor de talón.** Por eso la guía de 2023 no incluye el espolón calcáneo como razón para cambiar el enfoque de ejercicios.',
      ],
      cites: [CITE.ehrmannSpur, CITE.menzSpur],
    },
    {
      h2: '¿Qué dice la guía de 2023 sobre los espolones calcáneos?',
      paragraphs: [
        'La guía de práctica clínica de 2023 para el dolor de talón, publicada en el Journal of Orthopaedic and Sports Physical Therapy, se centra en la fascitis plantar como la causa más común de dolor plantar del talón. Menciona el «síndrome de espolón calcáneo» como uno de varios diagnósticos diferenciales, junto con:',
        {
          list: [
            'El síndrome de la almohadilla grasa.',
            'La irritación nerviosa.',
            'La fractura por estrés del calcáneo.',
          ],
        },
        'La guía no recomienda estudios de imagen como primer paso cuando la exploración clínica ya apunta a fascitis plantar. Señala que los estudios de imagen «por lo general no están indicados en pacientes que cumplen los criterios de exploración clínica para fascitis plantar hasta que no responden a intervenciones conservadoras». Cuando se consideran, la radiografía con apoyo es la primera opción, seguida del ultrasonido o la resonancia magnética si hace falta.',
        'En la práctica, esto significa que un profesional que ve el patrón típico, dolor en los primeros pasos de la mañana, sensibilidad al presionar la parte interna del talón y menos flexibilidad del tobillo, puede empezar con estiramientos y trabajo de fuerza sin esperar una radiografía. **Que haya o no un espolón en una radiografía posterior no cambia el plan de ejercicios.**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Necesitas una radiografía para distinguir la fascitis plantar de un espolón?',
      paragraphs: [
        '**Por lo general no necesitas una radiografía para la fascitis plantar.** El diagnóstico es clínico: se basa en dónde está el dolor, cuándo aparece y qué lo empeora. Una radiografía puede mostrar un espolón, pero encontrar uno no cambia lo que haces contra el dolor, y no encontrar uno no descarta la fascitis plantar.',
        'Los estudios de imagen se vuelven útiles:',
        {
          list: [
            'Cuando el dolor no sigue el patrón típico de la fascitis plantar.',
            'Cuando no ha mejorado después de varias semanas de cuidados conservadores.',
            'Cuando el profesional sospecha algo distinto, como una fractura por estrés, un problema nervioso o un desgarro de la fascia plantar.',
          ],
        },
        'El ultrasonido puede medir el grosor de la fascia plantar (una lectura por encima de 4\u00A0mm generalmente se considera engrosada), y la resonancia magnética puede mostrar detalles de tejido blando que la radiografía no capta.',
        'Si ya te dijeron que tienes un espolón en una radiografía, el espolón en sí casi nunca necesita atención aparte. Los ejercicios y estiramientos que ayudan con la fascitis plantar también trabajan el tejido blando alrededor del espolón. En [ejercicios para el espolón calcáneo](/es/ejercicios-espolon-calcaneo/) está la rutina completa.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Si el espolón no es el problema, ¿qué es?',
      paragraphs: [
        'El dolor suele venir de la fascia plantar y los tejidos que la rodean, no del hueso. La fascia plantar se une a la parte inferior del hueso del talón. Cuando se sobrecarga, sobre todo en alguien con la pantorrilla tensa, un IMC alto o muchas horas de pie, ese punto de unión se irrita. Esa irritación es la fascitis plantar.',
        'Una pantorrilla tensa es uno de los factores de riesgo más fuertes. En un estudio de casos y controles pareados con 50\u00A0personas con fascitis plantar y 100\u00A0controles:',
        {
          list: [
            'Una dorsiflexión de tobillo reducida, es decir, cuánto puede subir el pie hacia la tibia, tuvo la razón de probabilidades más alta de todos los factores medidos.',
            'Estar de pie la mayor parte de la jornada laboral también fue significativo, con una razón de probabilidades de 3,6 (Riddle y colegas, 2003).',
          ],
        },
        'El espolón, cuando está, se encuentra cerca. Puede haberse formado a lo largo de meses o años como respuesta al mismo estrés mecánico que irritó la fascia. Pero **es la fascia y la pantorrilla lo que responde al estiramiento y al trabajo de fuerza, no el hueso.** Por eso la guía recomienda ejercicio, no la remoción del espolón.',
        'Para una visión general completa de la fascitis plantar, incluyendo causas, factores de riesgo y lo que recomienda la guía, mira [fascitis plantar](/es/fascitis-plantar/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: '¿Alguna vez es necesario quitar un espolón calcáneo?',
      paragraphs: [
        'La remoción quirúrgica de un espolón calcáneo es rara y no es una opción de primera línea. **La guía de 2023 no recomienda la remoción del espolón para la fascitis plantar.** Varios estudios han demostrado que el dolor de la fascitis plantar puede resolverse con cuidados conservadores aunque el espolón siga en la radiografía. La Academia Americana de Cirujanos Ortopédicos señala directamente que «los espolones del talón no causan el dolor de la fascitis plantar» y que «el dolor de la fascitis plantar puede abordarse sin quitar el espolón».',
        'La cirugía a veces se considera cuando el dolor no ha respondido a meses de cuidados conservadores, pero el procedimiento típico es una liberación parcial de la fascia plantar, no una remoción del espolón. Si el espolón se retira durante esa cirugía, la evidencia sugiere que el beneficio vino de la liberación de la fascia, no de quitar el hueso.',
        'La gran mayoría de las personas con dolor de talón y un espolón mejoran con los mismos estiramientos, trabajo de pantorrilla y manejo de la carga que usan las personas sin espolón. En [ejercicios para el espolón calcáneo](/es/ejercicios-espolon-calcaneo/) está la rutina práctica.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: '¿Qué ejercicios ayudan cuando tienes un espolón calcáneo?',
      paragraphs: [
        'Los ejercicios para el dolor del espolón calcáneo son los mismos que la guía recomienda para la fascitis plantar: estiramiento de la fascia plantar, estiramiento de la pantorrilla y fortalecimiento gradual de la pantorrilla. El ejercicio no disuelve un espolón. Trabaja el tejido blando que realmente produce el dolor.',
        'La guía le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**, y al entrenamiento de fuerza una **B**. Estos grados aplican haya o no un espolón. En [ejercicios para el espolón calcáneo](/es/ejercicios-espolon-calcaneo/) está la rutina completa con series, tiempos y progresión. Aquí hay tres ejercicios de inicio.',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 le da al estiramiento de la fascia plantar una A, su grado más alto.' },
          dose: '10\u00A0repeticiones de 10\u00A0segundos, cada pie',
          how: 'Siéntate y cruza un tobillo sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. Hazlo antes de pararte en la mañana y después de estar sentado mucho rato.',
          often: 'Cada mañana y después de estar sentado',
          feel: 'Un estiramiento a lo largo del arco, no dolor',
          stop: 'Dolor de 6/10',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás antes del primer paso',
          alt: 'Una figura sentada jala los dedos hacia atrás para estirar la fascia plantar',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'Mismo grado A en la guía. Trabaja el gastrocnemio, el músculo más grande y superficial de la pantorrilla.' },
          dose: '2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared. Pierna de atrás estirada, talón en el piso, cadera hacia adelante. Una pantorrilla tensa jala del talón a través del tendón de Aquiles, añadiendo carga a la fascia.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor de 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, inclínate hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada y la pantorrilla resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al entrenamiento de fuerza una B para la fascitis plantar. Es un paso previo a la elevación con toalla y carga.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Esto fortalece la pantorrilla sin una carga pesada sobre el talón.',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          stop: 'Dolor de 6/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Un espolón calcáneo es lo mismo que la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'No. Un espolón calcáneo es un crecimiento de hueso en la parte de abajo del hueso del talón. La fascitis plantar es una irritación de la fascia plantar, la banda gruesa de tejido que va del talón a los dedos. Suelen aparecer juntos, pero un espolón puede existir sin dolor y la fascitis plantar puede darse sin espolón. La guía clínica de 2023 los trata como hallazgos distintos.',
    },
    {
      q: '¿Los espolones calcáneos causan dolor?',
      cites: [CITE.menzCoexistence],
      a: 'La mayoría de los espolones calcáneos no causan dolor. En un estudio con 530\u00A0personas de 50\u00A0años o más con dolor de pie, un espolón solo era raro, y el dolor de talón se asoció con tener un espolón junto con una fascia plantar engrosada (Menz y colegas, 2019). En otro estudio con 216\u00A0adultos mayores, cerca de 6 de cada 10 con espolón no tenían dolor de talón actual ni pasado (Menz y colegas, 2008).',
    },
    {
      q: '¿Se puede tener fascitis plantar sin espolón calcáneo?',
      a: 'Sí. Muchas personas con fascitis plantar no tienen espolón en la radiografía. El dolor viene de la fascia plantar irritada, no del hueso. La guía de 2023 no exige estudios de imagen para diagnosticar fascitis plantar cuando el patrón clínico es claro: dolor en los primeros pasos de la mañana, sensibilidad en el talón y pantorrilla tensa.',
    },
    {
      q: '¿Los ejercicios para el espolón calcáneo disuelven el espolón?',
      cites: [CITE.guideline],
      a: 'No. Los estiramientos y el fortalecimiento no disuelven un espolón calcáneo. Trabajan el tejido blando alrededor de él, sobre todo la fascia plantar y los músculos de la pantorrilla, que suelen ser lo que produce el dolor. El espolón en sí rara vez necesita atención aparte, y la guía recomienda los mismos ejercicios haya o no un espolón.',
    },
    {
      q: '¿Debería hacerme una radiografía si creo que tengo un espolón calcáneo?',
      cites: [CITE.guideline],
      a: 'La guía de 2023 dice que los estudios de imagen por lo general no hacen falta cuando la exploración clínica apunta a fascitis plantar. Una radiografía puede mostrar un espolón, pero encontrar uno no cambia el plan de ejercicios, y no encontrar uno no descarta la fascitis plantar. Los estudios de imagen se vuelven útiles cuando el dolor no mejora después de varias semanas o se sospecha una fractura por estrés o un problema nervioso.',
    },
    {
      q: '¿Qué tan comunes son los espolones calcáneos?',
      cites: [CITE.menzSpur],
      a: 'La frecuencia depende de la edad. Investigaciones anteriores citadas en el estudio de Menz de 2008 reportaron del 11 al 16\u00A0% de la población general con un espolón calcáneo plantar en la radiografía. En un estudio con 216\u00A0personas de 62 a 94\u00A0años, el 55\u00A0% tenía al menos un espolón plantar (Menz y colegas, 2008). Los espolones se vuelven más comunes con la edad, un IMC más alto y la artrosis.',
    },
    {
      q: '¿Cuándo necesita cirugía un espolón calcáneo?',
      cites: [CITE.latt],
      a: 'Casi nunca. La guía no recomienda la remoción del espolón para la fascitis plantar. Cerca del 90\u00A0% de las personas con fascitis plantar mejoran con cuidados no quirúrgicos como estiramientos, fortalecimiento de pantorrilla y manejo de la carga (Latt y colegas, 2020). Cuando se considera la cirugía después de meses de cuidados conservadores sin resultado, normalmente implica liberar la fascia plantar, no quitar el espolón.',
    },
    {
      q: '¿Qué pasa si sigo caminando con un espolón calcáneo?',
      cites: [CITE.menzSpur, CITE.guideline],
      a: 'Caminar no va a meter el espolón más adentro del tejido cercano. El dolor que se dispara al caminar casi siempre viene de la fascia plantar irritada junto al espolón, no del hueso en sí. La guía de 2023 recomienda ajustar la carga, como la distancia o el ritmo, en lugar de dejar de caminar, si al día siguiente el talón empeora.',
    },
    {
      q: '¿Es bueno masajear un espolón calcáneo?',
      cites: [CITE.guideline],
      a: 'Un masaje suave alrededor del espolón calcáneo puede aliviar la tensión del tejido blando, pero no cambia el hueso en sí. Rodar la planta con presión firme, nunca aguda, puede soltar la fascia y la pantorrilla, los tejidos que suelen causar el dolor. La guía califica la terapia manual de un profesional con grado A; el automasaje es solo alivio, no un sustituto del estiramiento.',
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
    text: 'Tenga o no espolón en la radiografía, el enfoque de ejercicio es el mismo. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta es dolor de la mañana de 1/10 o menos durante 14\u00A0días seguidos. Los estiramientos empiezan desde el día uno. El trabajo de fuerza de pantorrilla se agrega una vez que la primera meta pasa de calmar el dolor a construir capacidad.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que se cumple la meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, para que puedas seguir tu progreso en vez de adivinar.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si no estás seguro de si tu dolor de talón es fascitis plantar, un espolón calcáneo u otra cosa, consulta primero a un profesional.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Fascitis plantar vs espolón calcáneo',
  campaign: 'guide-pf-vs-heel-spur-es',
};
