import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of articles/plantar-fasciitis-vs-stress-fracture.ts
 * (2026-10-18), written around the Spanish queries «fascitis plantar o
 * fractura por estrés», «fractura por estrés del calcáneo», «fractura por
 * estrés en el talón». Latin American Spanish, «tú». Figures, grades,
 * hedges and sources are identical to the English page after its
 * fact-check. The only addition is a km conversion next to the 25 miles
 * (unos 40 km), because Spanish readers run in kilometres.
 */

export const PF_VS_STRESS_FRACTURE_ES: Guide = {
  lang: 'es',
  page: 'pfVsStressFracture',
  mainSource: CITE.patelStressFracture,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascitis plantar o fractura por estrés: cómo diferenciarlas',
  description:
    '¿Fascitis plantar o fractura por estrés del calcáneo? Compara el dolor, la prueba de compresión, el riesgo, por qué falla la radiografía y qué hacer.',
  h1: 'Fascitis plantar o fractura por estrés del talón: cómo diferenciarlas',
  lede:
    'La [fascitis plantar](/es/fascitis-plantar/) duele más en los primeros pasos después del reposo y suele calmarse cuando caminas unos minutos. Una fractura por estrés del talón hace lo contrario: el dolor aumenta cuanto más caminas o corres, muchas veces después de un salto en la actividad, y apretar los lados del talón suele doler (Tu, 2018). Una radiografía temprana puede verse normal: en 30\u00A0reclutas militares con una lesión por estrés del talón en la resonancia magnética, la radiografía simple solo la mostró en el 15\u00A0% (Sormaala y colegas, 2006).',
  intro: [
    'Las dos afecciones están en el mismo talón y pueden empezar por lo mismo: caminar, correr o estar de pie más de lo habitual. Pero necesitan respuestas opuestas: la fascitis plantar responde bien a los estiramientos y al trabajo de fuerza, mientras que una fractura por estrés primero necesita menos carga. Esta página compara las dos lado a lado, explica qué puede y qué no puede decirte la prueba de compresión, quién tiene más riesgo de fractura, por qué el estudio de imagen suele ser una resonancia y qué hacer mientras esperas a saberlo.',
  ],
  takeaways: [
    'El dolor de la fascitis plantar es «más notable al apoyar peso a primera hora de la mañana o después de un periodo de reposo» y se calma al caminar (Koc y colegas, 2023). El dolor de una fractura por estrés empieza con la actividad y más adelante puede aparecer también en reposo (Tu, 2018).',
    'El dolor al apretar los lados del hueso del talón sugiere una fractura por estrés (Tu, 2018), pero no encontramos ningún estudio que haya medido qué tan precisa es la prueba de compresión para el talón, y también duele en la enfermedad de Sever en niños.',
    'La radiografía simple a menudo no detecta las fracturas por estrés tempranas: una revisión calculó su sensibilidad en la primera consulta en alrededor del 10\u00A0%, y de 30 a 70\u00A0% después de tres semanas (Patel y colegas, 2011). La resonancia magnética fue la prueba más precisa en una revisión sistemática de 2016 (Wright y colegas, 2016).',
    'Un aumento repentino del entrenamiento es el desencadenante clásico. Los corredores que promedian más de 25\u00A0millas (unos 40\u00A0km) por semana, las mujeres y las personas con baja disponibilidad de energía o huesos débiles tienen más riesgo (Patel y colegas, 2011; Mountjoy y colegas, 2023).',
    'Los estiramientos y los ejercicios de fuerza tienen grado **A** y **B** para la fascitis plantar (Koc y colegas, 2023). No son un plan para una sospecha de fractura, que primero necesita menos carga y un profesional de la salud.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Cómo diferenciar la fascitis plantar de una fractura por estrés del talón?',
      keyFact: 'El dolor de una fractura por estrés del calcáneo suele empezar después de un aumento de la actividad con carga o de un cambio a una superficie más dura, al principio aparece solo con la actividad y más adelante puede aparecer en reposo (Tu, 2018).',
      paragraphs: [
        '**La pista más clara es lo que le pasa al dolor cuando caminas.** La fascitis plantar es peor en los primeros pasos después de dormir o de estar sentado, se calma a los pocos minutos y puede volver después de un día largo de pie (Tu, 2018). La guía de 2023 para el dolor de talón la describe como un dolor «más notable al apoyar peso a primera hora de la mañana o después de un periodo de reposo» (Koc y colegas, 2023).',
        'Una fractura por estrés del calcáneo es una pequeña grieta en el hueso del talón por carga repetida. Su dolor suele empezar después de que aumentas lo que caminas, corres o estás de pie, o de que cambias a una superficie más dura. Al principio duele solo durante la actividad y aumenta a medida que sigues. Más adelante puede doler en reposo (Tu, 2018). En una revisión sobre fracturas por estrés en general, el 81\u00A0% de los pacientes refirió dolor al caminar, de 65,9 a 100\u00A0% un punto doloroso sobre el hueso y de 18 a 44\u00A0% hinchazón (Patel y colegas, 2011).',
        'La tabla resume los patrones habituales. Ninguna fila decide por sí sola, y algunas personas no encajan del todo en ninguna columna.',
      ],
      table: {
        caption: 'Patrones típicos, no un diagnóstico',
        head: ['', 'Fascitis plantar', 'Fractura por estrés del talón'],
        rows: [
          ['Peor momento', 'Primeros pasos después del reposo', 'Durante y después de la actividad'],
          ['Después de unos minutos caminando', 'Suele calmarse', 'Aumenta'],
          ['Dónde duele', 'Debajo del talón, lado interno', 'A lo ancho del hueso del talón, a menudo en la mitad de atrás'],
          ['Al apretar los lados del talón', 'Normalmente no duele', 'A menudo duele'],
          ['Hinchazón', 'No es un signo habitual', 'A veces'],
          ['Desencadenante habitual', 'Muchas horas de pie, pantorrillas tensas', 'Un salto en el entrenamiento o una superficie más dura'],
          ['Radiografía temprana', 'No hace falta', 'A menudo normal'],
        ],
      },
      after: [
        'El dolor que aparece sobre todo de noche o en reposo tiene su propia lista de causas, que se explica en [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/). El dolor que aumenta a lo largo de una caminata se explica en [dolor de talón al caminar](/es/dolor-de-talon-al-caminar/).',
      ],
      sourceNote: 'Ubicación: en Sormaala 2006, 19 de 34 lesiones por estrés del calcáneo estaban en la parte posterior del hueso, 6 en la parte media y 9 en la parte anterior. Las cifras de dolor a la palpación, dolor al caminar e hinchazón de Patel 2011 corresponden a fracturas por estrés de cualquier localización, no solo del talón.',
      cites: [CITE.tuHeelPain, CITE.guideline, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: '¿Qué es la prueba de compresión y cuánto puede decirte?',
      paragraphs: [
        '**La prueba de compresión (o del apretón) consiste en presionar entre sí el lado interno y el lado externo del hueso del talón, con las palmas o entre el pulgar y los demás dedos.** Un profesional de la salud la hace con el pie relajado. Según una revisión de 2018 en American Family Physician, el dolor al apretar «sugiere el diagnóstico» de fractura por estrés del calcáneo (Tu, 2018). La fascitis plantar, en cambio, duele cuando presionas debajo de la parte delantera interna del talón, donde se inserta la fascia.',
        'Sus límites son reales:',
        {
          list: [
            '**Nadie ha medido qué tan precisa es para el talón.** No encontramos ningún estudio que diga con qué frecuencia la prueba de compresión sale positiva en personas con una fractura por estrés del calcáneo confirmada, ni con qué frecuencia sale positiva sin ella. La misma revisión sobre fracturas por estrés señala que la prueba del salto, otra prueba común en consulta, tampoco se ha validado (Patel y colegas, 2011).',
            '**Que no duela al apretar no descarta una fractura.** Algunas lesiones por estrés del talón están hacia la parte delantera o media del hueso: en un estudio con resonancia, 15 de 34 no estaban en la parte de atrás (Sormaala y colegas, 2006).',
            '**Otras cosas también duelen al apretar.** En niños y adolescentes jóvenes, el dolor al apretar es un signo frecuente de la [enfermedad de Sever](/es/enfermedad-de-sever/), una irritación del cartílago de crecimiento (Tu, 2018). Otros problemas del hueso del talón también pueden doler, así que un profesional de la salud tiene que revisarlo.',
          ],
        },
        'Si presionas los lados de tu propio talón y duele, tómalo como un motivo para que te revisen, no como un diagnóstico. No saltes sobre ese pie para probarlo.',
      ],
      cites: [CITE.tuHeelPain, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: '¿Quién tiene más riesgo de una fractura por estrés del talón?',
      keyFact: 'Los corredores recreativos que promedian más de 25\u00A0millas (unos 40\u00A0km) por semana tienen más riesgo de fracturas por estrés, y las mujeres tienen más riesgo que los hombres (Patel y colegas, 2011).',
      paragraphs: [
        'Una fractura por estrés aparece cuando el hueso recibe más carga repetida de la que puede reparar. El riesgo sube cuando aumenta la carga, cuando el hueso la tolera peor, o las dos cosas (Warden y colegas, 2014).',
        {
          list: [
            '**Un aumento repentino del entrenamiento.** Un salto grande en lo que caminas, corres, marchas o estás de pie, o sesiones intensas repetidas con poco descanso, es la historia clásica (Patel y colegas, 2011). Cambiar a una superficie más dura para caminar es un desencadenante común en el talón (Tu, 2018).',
            '**Mucho volumen de carrera.** Los corredores recreativos que promedian más de 25\u00A0millas (unos 40\u00A0km) por semana tienen más riesgo, igual que quienes practican atletismo, básquetbol, fútbol o danza (Patel y colegas, 2011). Hay más información para corredores en [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/).',
            '**Baja disponibilidad de energía.** Comer demasiado poco para lo que entrenas puede afectar las hormonas y el hueso. El Comité Olímpico Internacional incluye la mala salud ósea, con las lesiones óseas por estrés, entre los efectos de este patrón, llamado deficiencia relativa de energía en el deporte (REDs), tanto en mujeres como en hombres (Mountjoy y colegas, 2023).',
            '**Salud ósea.** Las mujeres con la tríada de la atleta femenina (alimentación alterada, falta de menstruación y baja densidad ósea) tienen más riesgo, y un estudio encontró niveles más bajos de vitamina D en reclutas con fracturas por estrés (Patel y colegas, 2011). El hueso debilitado por osteoporosis puede romperse con cargas normales, lo que se llama fractura por insuficiencia.',
            '**Ser mujer.** Las mujeres tienen más riesgo que los hombres, sobre todo en el entrenamiento militar, aunque los datos en atletas mujeres son mixtos (Patel y colegas, 2011).',
          ],
        },
        'La fascitis plantar tiene otro perfil de riesgo. En un estudio de 50\u00A0personas con fascitis y 100 sin ella, quienes tenían 0\u00A0grados o menos de flexión del tobillo hacia arriba (dorsiflexión) tenían 23,3 veces más probabilidades que quienes tenían más de 10\u00A0grados, y estar de pie la mayor parte de la jornada laboral multiplicaba las probabilidades por 3,6 (Riddle y colegas, 2003).',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.wardenBSI, CITE.mountjoyREDs, CITE.riddle],
    },
    {
      h2: '¿Por qué una radiografía puede verse normal con una fractura por estrés?',
      keyFact: 'En 30\u00A0reclutas militares cuya resonancia mostró una lesión por estrés del talón, la lesión se veía en la radiografía simple solo en el 15\u00A0% (Sormaala y colegas, 2006).',
      paragraphs: [
        '**Una fractura por estrés temprana suele ser demasiado pequeña para verse en una radiografía.** El hueso primero reacciona con un edema (hinchazón) en su interior que la radiografía no puede ver. Los signos de reparación aparecen después. Una revisión calculó la sensibilidad de la radiografía en la primera consulta en alrededor del 10\u00A0%, y de 30 a 70\u00A0% después de tres semanas (Patel y colegas, 2011).',
        'En el caso concreto del talón, un estudio finlandés analizó a reclutas militares con dolor de talón o tobillo relacionado con el ejercicio a quienes se les hizo una resonancia. De 30\u00A0reclutas con lesiones por estrés del talón, solo el 15\u00A0% tenía una lesión visible en la radiografía simple. En 22 de los 34 talones lesionados también estaban afectados huesos cercanos del pie (Sormaala y colegas, 2006).',
        'Una revisión sistemática de 2016 sobre fracturas por estrés en la pierna y el pie encontró una sensibilidad de la radiografía del 12\u00A0% al 56\u00A0%, frente al 68\u00A0% al 99\u00A0% de la resonancia. Los autores señalaron la resonancia como la prueba más sensible y específica y advirtieron que la radiografía probablemente da falsos negativos al principio (Wright y colegas, 2016).',
        'Por eso, un profesional de la salud que sospecha una fractura puede repetir la radiografía después de dos o tres semanas o pedir directamente una resonancia si importa tener una respuesta rápida (Patel y colegas, 2011). Para la fascitis plantar, la guía de 2023 dice que la imagen «normalmente no está indicada en pacientes que cumplen los criterios de la exploración clínica para fascitis plantar hasta que fallan las intervenciones conservadoras» (Koc y colegas, 2023). La [página sobre el espolón calcáneo](/es/fascitis-plantar-vs-espolon-calcaneo/) explica por qué un espolón en la radiografía tampoco resuelve la duda.',
      ],
      sourceNote: 'Wright 2016 agrupó fracturas por estrés de toda la extremidad inferior, no solo del talón. Los rangos son la sensibilidad más baja y la más alta reportadas entre los estudios incluidos, no estimaciones combinadas.',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture, CITE.wrightImaging, CITE.guideline],
    },
    {
      h2: '¿Qué hacer mientras esperas a saberlo?',
      keyFact: 'Modificar la actividad, con poco o ningún apoyo de peso hasta seis semanas si el dolor es intenso, suele dar buen resultado en las fracturas por estrés del calcáneo (Tu, 2018).',
      paragraphs: [
        '**Si tu dolor encaja con la columna de la fractura por estrés, quita carga al talón y pide una cita con un profesional de la salud.** No esperes a ver si unas cuantas carreras más lo arreglan. Empezar pronto importa: una revisión señala que el retraso se ha asociado con una vuelta más larga a la actividad (Patel y colegas, 2011).',
        {
          list: [
            '**Reduce la carga hasta lo que no duela.** Normalmente eso significa dejar por ahora de correr, saltar y hacer caminatas largas. Algunas personas necesitan muletas o una bota ortopédica por un tiempo (Patel y colegas, 2011; Tu, 2018).',
            '**Mantente en forma sin cargar el talón,** por ejemplo nadando o en bicicleta, si no te duele (Patel y colegas, 2011).',
            '**Pregunta por los analgésicos.** La misma revisión dice que los antiinflamatorios deben usarse con precaución en una fractura por estrés, porque algunos estudios en animales sugieren que podrían retrasar la reparación del hueso (Patel y colegas, 2011).',
            '**No empieces todavía un plan de estiramientos o de fuerza para el talón.** Espera a que un profesional de la salud haya descartado una fractura o te haya dado el visto bueno.',
          ],
        },
        'Las fracturas por estrés del talón suelen recuperarse bien en personas por lo demás sanas (Tu, 2018). En las fracturas por estrés en general, la recuperación tarda de cuatro semanas a tres meses o más desde que se reduce la actividad, y luego la actividad se retoma poco a poco una vez que ya no hay dolor (Patel y colegas, 2011).',
        'Si tu dolor encaja más bien con la columna de la fascitis plantar, normalmente no necesitas estudios de imagen para empezar los ejercicios de abajo (Koc y colegas, 2023). Si no tienes claro en qué columna estás, consulta primero a un profesional de la salud.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: '¿Por qué los planes de ejercicio son para la fascitis plantar y no para una fractura?',
      paragraphs: [
        '**Los estiramientos y la carga ayudan en la fascitis plantar porque el tejido se adapta a la carga. Un hueso con una grieta primero necesita que se le quite la carga.** Las lesiones óseas por estrés forman una escala: una reacción por estrés puede avanzar a una fractura por estrés y, si la carga continúa, a una fractura completa (Warden y colegas, 2014).',
        'La evidencia sobre el ejercicio es específica de la fascitis plantar. La guía de 2023 para el dolor de talón le da a los estiramientos de la fascia plantar y de la pantorrilla un grado **A** y al entrenamiento de fuerza un grado **B** para esta afección (Koc y colegas, 2023). El programa de elevaciones de talón del ensayo más conocido se probó en 48\u00A0personas con fascitis plantar, no en personas con una fractura (Rathleff y colegas, 2015).',
        'En las fracturas por estrés la evidencia apunta en otra dirección. Dos ensayos aleatorizados por conglomerados encontraron que estirar las piernas durante el calentamiento no prevenía las fracturas por estrés (Patel y colegas, 2011). Lo que sí importa es reducir la carga y luego volver poco a poco, con la guía de un profesional de la salud. Una vez recuperada la fractura, fortalecer los músculos alrededor del hueso pasa a ser parte de la prevención de la siguiente (Warden y colegas, 2014).',
        'Por eso los ejercicios de esta página son solo para la fascitis plantar. Si te dijeron que tienes una fractura por estrés, sigue el plan de regreso de tu profesional de la salud.',
      ],
      cites: [CITE.wardenBSI, CITE.guideline, CITE.rathleff, CITE.patelStressFracture],
    },
    {
      h2: 'Solo para la fascitis plantar: ¿qué ejercicios sirven una vez descartada la fractura?',
      paragraphs: [
        '**Hazlos solo si tu dolor encaja con la fascitis plantar o si un profesional de la salud descartó una fractura.** Si apretar el talón duele, el dolor aumenta con cada caminata o el talón está hinchado, sáltalos y haz que te revisen primero.',
        'Son los primeros pasos de nuestra guía de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/): primero los estiramientos y después una elevación de talón sentado que casi no carga el talón. La progresión completa, hasta la elevación de talones con toalla del ensayo, está en esa guía.',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar (solo fascitis plantar)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da a los estiramientos un grado A, su grado más alto, para la fascitis plantar. No es para una sospecha de fractura.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pie',
          often: 'En la mayoría de las sesiones',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'Dolor en el propio hueso del talón, o un dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla (solo fascitis plantar)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da a los estiramientos un grado A, su grado más alto, para la fascitis plantar. No es para una sospecha de fractura.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'En la mayoría de las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás apoyado en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'Dolor en el propio hueso del talón, o un dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (solo fascitis plantar)',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón le da a los estiramientos un grado A, su grado más alto, para la fascitis plantar. No es para una sospecha de fractura.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'En la mayoría de las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición, mantén el talón de atrás apoyado en el piso y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor en el propio hueso del talón, o un dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón sentado (solo fascitis plantar)',
          evidence: { level: 'moderate', why: 'La guía de 2023 le da al trabajo de fuerza un grado B para la fascitis plantar. Este paso no se probó por separado. No es para una sospecha de fractura.' },
          dose: '3\u00A0series de 10, con los dos pies',
          often: '3\u00A0días a la semana, nunca dos seguidos',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos sobre las rodillas agregan resistencia. Con la rodilla doblada, trabaja sobre todo el sóleo, el músculo más profundo de la pantorrilla, casi sin carga sobre el talón.',
          stop: 'Dolor de talón que pasa de 6 de 10, o que está peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Cómo sé si mi dolor de talón es una fractura por estrés o fascitis plantar?',
      cites: [CITE.tuHeelPain, CITE.guideline],
      a: 'Fíjate en qué pasa con el dolor al caminar. La fascitis plantar duele más en los primeros pasos después del reposo y se calma a los pocos minutos. Una fractura por estrés del talón suele llegar después de un salto en la actividad, aumenta cuanto más caminas o corres y a menudo duele cuando se aprietan los lados del talón. Si tu dolor encaja con el patrón de fractura, consulta a un profesional de la salud.',
    },
    {
      q: '¿Una radiografía puede no detectar una fractura por estrés del talón?',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture],
      a: 'Sí, a menudo. En 30\u00A0reclutas militares con una lesión por estrés del talón vista en la resonancia, la radiografía simple solo la mostró en el 15\u00A0%. Una revisión calculó la sensibilidad de la radiografía en la primera consulta en alrededor del 10\u00A0%, y de 30 a 70\u00A0% después de tres semanas. Una radiografía temprana normal no descarta una fractura por estrés.',
    },
    {
      q: '¿Necesito una resonancia magnética para el dolor de talón?',
      cites: [CITE.guideline, CITE.wrightImaging],
      a: 'No para una fascitis plantar típica: la guía de 2023 dice que normalmente no hacen falta estudios de imagen cuando la exploración encaja. Si un profesional de la salud sospecha una fractura por estrés, la resonancia es la prueba más precisa. Una revisión sistemática de 2016 encontró una sensibilidad de la resonancia del 68\u00A0% al 99\u00A0%, frente al 12\u00A0% al 56\u00A0% de la radiografía simple.',
    },
    {
      q: '¿Qué significa una prueba de compresión positiva?',
      cites: [CITE.tuHeelPain],
      a: 'El dolor al presionar entre sí el lado interno y el externo del hueso del talón sugiere una fractura por estrés del calcáneo o, en niños, la enfermedad de Sever. Es un motivo para consultar a un profesional de la salud, no un diagnóstico. No encontramos ningún estudio que haya medido qué tan precisa es la prueba de compresión para las fracturas por estrés del talón, así que, aunque no duela al apretar, la fractura no queda descartada.',
    },
    {
      q: '¿Se puede caminar con una fractura por estrés del talón?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Puede que sí, pero normalmente no deberías seguir cargándolo. El cuidado consiste en reducir la actividad hasta lo que no duela y, si el dolor es intenso, apoyar poco o nada de peso en el pie hasta seis semanas, a veces con muletas o una bota ortopédica. Un profesional de la salud debe indicarte cuánto puedes caminar sin riesgo.',
    },
    {
      q: '¿Cuánto tarda en mejorar una fractura por estrés del talón?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'En las fracturas por estrés en general, la recuperación tarda de cuatro semanas a tres meses o más desde que se reduce la actividad. Las fracturas por estrés del talón suelen recuperarse bien en personas por lo demás sanas. Después, la actividad se retoma poco a poco una vez que ya no hay dolor. Para los tiempos de la fascitis plantar, consulta [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/).',
    },
    {
      q: '¿Debo estirar si podría tener una fractura por estrés?',
      cites: [CITE.patelStressFracture, CITE.guideline],
      a: 'No, no hasta que un profesional de la salud la haya descartado. Los estiramientos y el trabajo de fuerza tienen grado A y B para la fascitis plantar, pero una sospecha de fractura primero necesita menos carga. Dos ensayos aleatorizados por conglomerados encontraron que estirar las piernas durante el calentamiento no prevenía las fracturas por estrés, así que estirar no es la herramienta para el hueso.',
    },
    {
      q: '¿La fascitis plantar puede convertirse en una fractura por estrés?',
      cites: [CITE.wardenBSI],
      a: 'Ningún estudio muestra que la fascitis plantar se convierta en una fractura. Son lesiones distintas, una en la fascia y otra en el hueso. Pueden compartir un desencadenante, como un aumento repentino de lo que caminas o corres, y una reacción ósea por estrés puede avanzar a fractura si la carga continúa. Vale la pena revisar un dolor que cambia de patrón.',
    },
    {
      q: '¿Quién tiene fracturas por estrés del talón?',
      cites: [CITE.patelStressFracture, CITE.mountjoyREDs],
      a: 'Sobre todo personas que de repente entrenan más: corredores, reclutas militares y atletas. Los corredores que promedian más de 25\u00A0millas (unos 40\u00A0km) por semana tienen más riesgo, y las mujeres más que los hombres. La baja disponibilidad de energía, la falta de menstruación y la baja densidad ósea aumentan el riesgo, y un estudio encontró niveles más bajos de vitamina D en reclutas con fracturas por estrés.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor de talón aumenta cuanto más caminas o corres en lugar de calmarse',
      'apretar los lados del hueso del talón duele',
      'el talón está hinchado o con un moretón, o un punto del hueso duele mucho al tocarlo',
      'el dolor empezó después de un salto repentino en el entrenamiento o de un cambio a una superficie más dura',
      'duele en reposo o te despierta por la noche',
      'ya tuviste una fractura por estrés, o tienes o tuviste ausencia de menstruación, un trastorno alimentario o baja densidad ósea',
      'no puedes apoyar todo el peso en el pie, o el dolor empezó después de una caída o una torcedura',
      'sientes ardor, hormigueo o entumecimiento en el talón o la planta',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el dolor de talón y de pie. Su plan está pensado para el dolor de talón tipo fascitis plantar, no para una fractura por estrés, así que si tu dolor encaja con el patrón de fractura, consulta a un profesional de la salud antes de empezar.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas tu dolor de talón de la mañana y el plan se ajusta. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['heelPainAtNight', 'hubPlantarFasciitis', 'heelPainAfterWalking'],
  crumb: 'Fascitis plantar o fractura por estrés',
  campaign: 'guide-plantar-fasciitis-vs-stress-fracture-es',
};
