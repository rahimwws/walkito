import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of articles/weight-and-plantar-fasciitis.ts (2026-10-18),
 * written around «fascitis plantar y sobrepeso» («¿el sobrepeso causa fascitis
 * plantar?», «bajar de peso fascitis plantar»). Latin American Spanish with
 * «tú», like the rest of /es/. Figures, grades, hedges and sources are
 * identical to the English page after its fact-check. Respectful, non-blaming
 * tone kept: weight is presented as one factor among several, never as fault.
 * All internal links have Spanish versions.
 */

export const WEIGHT_PF_ES: Guide = {
  lang: 'es',
  page: 'weightPf',
  mainSource: CITE.vanLeeuwenBmi,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascitis plantar y sobrepeso: qué dice la evidencia',
  description:
    '¿El peso causa fascitis plantar y bajar de peso ayuda? Lo que muestran los estudios, por qué importa la carga y ejercicios en silla para un peso más alto.',
  h1: 'Peso y fascitis plantar: qué muestra la investigación y qué ayuda desde hoy',
  lede:
    'Un peso corporal más alto es uno de los factores de riesgo más claros de la [fascitis plantar](/es/fascitis-plantar/) en personas que no son deportistas. En una revisión de 51\u00A0estudios, un índice de masa corporal (IMC) mayor de 27 se asoció con 3,7\u00A0veces más probabilidades de fascitis plantar (van Leeuwen y colegas, 2016). Si bajar de peso alivia el dolor de talón está menos claro: ningún ensayo aleatorizado lo ha probado en personas con dolor de talón, así que los estiramientos y el trabajo de fuerza que la guía de 2023 califica más alto son el punto de partida, con cualquier peso.',
  intro: [
    'El peso es un factor entre varios, no una sentencia. En el mismo estudio de casos y controles que relacionó un IMC mayor de 30 con la fascitis plantar, un tobillo rígido fue un factor mucho más fuerte (Riddle y colegas, 2003). A personas de todos los tamaños les duele el talón, y personas de todos los tamaños mejoran. Esta página repasa lo que encontraron los estudios, lo que se sabe sobre bajar de peso, por qué importa la carga y ejercicios que puedes hacer sentado o con apoyo.',
  ],
  takeaways: [
    'En un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100 sin ella, un IMC mayor de 30 se asoció con 5,6\u00A0veces más probabilidades de fascitis plantar, comparado con un IMC de 25 o menos. Un tobillo rígido fue el factor más fuerte, con 23,3\u00A0veces (Riddle y colegas, 2003).',
    'Una revisión de 51\u00A0estudios encontró que un IMC mayor de 27 fue el único factor clínico, entre los que se pudieron combinar, claramente relacionado con la fascitis plantar, con 3,7\u00A0veces más probabilidades, y la relación fue más fuerte en personas que no son deportistas (van Leeuwen y colegas, 2016).',
    'Ningún ensayo aleatorizado ha probado bajar de peso para el dolor de talón. Una revisión de 2012 encontró solo dos estudios sobre pérdida de peso y dolor de pie, ambos después de una cirugía para bajar de peso, y calificó la evidencia de limitada (Butterworth y colegas, 2012).',
    'La guía de 2023 para el dolor de talón califica con **A** los estiramientos de fascia plantar y de pantorrilla, y con **B** el trabajo de fuerza. El consejo de mantener una masa corporal magra saludable recibe una **E**, lo que significa que se basa en teoría, no en ensayos (Koc y colegas, 2023).',
    'En un seguimiento de 174\u00A0personas, el IMC no predijo quién seguía con dolor de talón años después. Ser mujer y tener dolor en los dos talones sí lo predijeron (Hansen y colegas, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿El peso influye en la fascitis plantar?',
      keyFact: 'En una revisión de 51\u00A0estudios, un IMC mayor de 27 se asoció con 3,7\u00A0veces más probabilidades de fascitis plantar, y la relación fue más fuerte en personas que no son deportistas (van Leeuwen y colegas, 2016).',
      paragraphs: [
        '**Sí: en personas que no son deportistas, un IMC más alto se relaciona con la fascitis plantar en un estudio tras otro.** El IMC es el peso dividido entre la estatura al cuadrado. Es una medida aproximada, pero es la que usaron estos estudios.',
        'El estudio más conocido comparó a 50\u00A0personas con fascitis plantar en un talón con 100\u00A0personas de la misma edad y sexo sin ella. Un IMC mayor de 30 se asoció con 5,6\u00A0veces más probabilidades de fascitis plantar, comparado con un IMC de 25 o menos (Riddle y colegas, 2003).',
        'Una revisión de 2016 combinó 51\u00A0estudios. De todos los factores clínicos que los autores pudieron combinar, un IMC mayor de 27 fue el único claramente relacionado con la fascitis plantar, con 3,7\u00A0veces más probabilidades, y la relación fue más fuerte en personas que no son deportistas (van Leeuwen y colegas, 2016). Dos revisiones anteriores llegaron a la misma conclusión, y ninguna de las dos encontró relación entre el IMC y el dolor de talón en deportistas (Irving y colegas, 2006; Butterworth y colegas, 2012).',
        'La guía de 2023 para el dolor de talón incluye el IMC alto en personas que no son deportistas como factor de riesgo, junto con un tobillo rígido, correr y pasar muchas horas de pie, sobre todo en superficies duras (Koc y colegas, 2023).',
      ],
      sourceNote:
        'Riddle 2003: IMC > 30 frente a ≤ 25, razón de probabilidades 5,6 (IC del 95\u00A0%: 1,9 a 16,6). van Leeuwen 2016: IMC > 27, razón de probabilidades 3,7 (IC del 95\u00A0%: 2,93 a 5,62); 46 de los 51\u00A0estudios eran de casos y controles.',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi, CITE.irvingHeelPain, CITE.butterworthBmi, CITE.guideline],
    },
    {
      h2: '¿El peso es la causa o solo un factor más?',
      keyFact: 'En el mismo estudio, un tobillo rígido se asoció con 23,3\u00A0veces más probabilidades de fascitis plantar y pasar la mayor parte de la jornada de pie con 3,6\u00A0veces, frente a 5,6\u00A0veces para un IMC mayor de 30 (Riddle y colegas, 2003).',
      paragraphs: [
        '**Un factor entre varios, y no el más fuerte.** En el estudio de casos y controles de 2003, tres factores contaron cada uno por separado:',
        {
          list: [
            'Un tobillo rígido (el pie apenas se dobla hacia arriba, hacia la espinilla): 23,3\u00A0veces más probabilidades.',
            'Un IMC mayor de 30: 5,6\u00A0veces más probabilidades.',
            'Pasar la mayor parte de la jornada de trabajo de pie: 3,6\u00A0veces más probabilidades.',
          ],
        },
        'Los autores señalaron el tobillo rígido como el más importante de los tres (Riddle y colegas, 2003). Eso importa, porque la rigidez del tobillo muchas veces viene de [pantorrillas tensas](/es/pantorrillas-tensas/), y estirar la pantorrilla es algo que puedes empezar hoy.',
        'La mayoría de estos estudios son de casos y controles o transversales: comparan a personas que ya tienen dolor de talón con personas que no lo tienen. Muestran una relación, no una prueba de que el peso cause la fascitis plantar (van Leeuwen y colegas, 2016). Si además trabajas de pie, [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) cubre esa parte de la carga.',
      ],
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
    },
    {
      h2: '¿Por qué importa la carga para el talón?',
      paragraphs: [
        '**La fascia plantar es la banda bajo el pie que sostiene el arco, y recibe carga con cada paso.** Más peso corporal significa más carga por paso, así que la misma caminata o el mismo turno le exigen más al tejido. El consejo de la guía para el dolor de talón se basa en esta idea: ajustar la carga sobre los pies en el trabajo, en el tiempo libre y en la vida diaria. Califica ese consejo con **E**, porque se basa en teoría, no en ensayos (Koc y colegas, 2023).',
        'Bajar de peso sí reduce la presión bajo el pie. En un ensayo con 41\u00A0adultos con un IMC promedio cercano a 36, el grupo con un plan de alimentación bajó 5,9\u00A0kg en tres meses, frente a 1,9\u00A0kg en el grupo de comparación, y tuvo menos presión máxima bajo algunas partes del pie. La forma del pie y la manera de caminar no cambiaron (Song y colegas, 2015). Ese ensayo no midió el dolor de talón.',
        'La presión tampoco lo explica todo. En un estudio con personas con dolor de pie que esperaban una cirugía para bajar de peso, el dolor bajó después de la cirugía, pero la reducción de la presión en el pie no se relacionó con la reducción del dolor. El estado de ánimo sí: las personas con más síntomas depresivos reportaron más dolor de pie, antes y después (Walsh y colegas, 2018). El dolor depende de más cosas que la mecánica, y esa es una razón más para no culparte por él.',
      ],
      cites: [CITE.guideline, CITE.songWeightLoss, CITE.walshBariatric],
    },
    {
      h2: '¿Bajar de peso ayuda con la fascitis plantar?',
      keyFact: 'Una revisión de 2012 encontró solo dos estudios prospectivos sobre pérdida de peso y síntomas en el pie, ambos después de una cirugía, y concluyó que la evidencia de que bajar de peso reduce el dolor de pie era limitada (Butterworth y colegas, 2012).',
      paragraphs: [
        '**Puede ayudar, pero ningún ensayo aleatorizado lo ha probado en personas con dolor de talón.** Esa es la respuesta honesta. Todo lo que tenemos viene de estudios sin un grupo de comparación justo, sobre todo después de una cirugía para bajar de peso. Esto es lo que existe:',
      ],
      table: {
        caption: 'Estudios sobre pérdida de peso y dolor de pie o de talón',
        head: ['Estudio', 'Quiénes', 'Qué encontró'],
        rows: [
          ['Boules, 2018', '163\u00A0personas con fascitis plantar, después de una cirugía para bajar de peso', 'Los síntomas de talón desaparecieron en el 90\u00A0%, según los expedientes'],
          ['Walsh, 2018', '45\u00A0personas con dolor de pie: 29 se operaron, 16 esperaron', 'El dolor de pie bajó después de la cirugía'],
          ['Song, 2015', '41\u00A0adultos, plan de alimentación o espera', 'Menos presión en el pie; el dolor no se midió'],
          ['Yang, 2025', '92\u00A0personas que usaban semaglutida, entre 2902 con dolor de talón', 'Mayor mejoría del dolor que quienes no la usaban; no aleatorizado'],
        ],
      },
      after: [
        'El estudio más grande revisó los expedientes de 163\u00A0personas con fascitis plantar que se hicieron una cirugía para bajar de peso. Su IMC promedio bajó de 45 a cerca de 35, y en 146 de ellas (el 90\u00A0%) desaparecieron los síntomas de talón (Boules y colegas, 2018). No hubo grupo de comparación, y cerca del 90\u00A0% de las personas con fascitis plantar mejoran de todos modos con tratamiento sin cirugía (Latt y colegas, 2020), así que este estudio no puede mostrar cuánto aportó la pérdida de peso en sí.',
        'El estudio de semaglutida siguió a personas con dolor de talón de larga duración. Las 92 que tomaban el medicamento para la diabetes o para bajar de peso reportaron más mejoría que las que no lo tomaban, pero no se eligieron al azar, y los autores piden un ensayo aleatorizado (Yang y colegas, 2025). Los medicamentos y la cirugía para bajar de peso son decisiones que tomas con tu médico, no algo que se empiece solo por el dolor de talón.',
        'La guía no les dice a los profesionales que receten bajar de peso para el dolor de talón. Dice que pueden dar consejos sobre ejercicio para ganar o mantener una masa corporal magra saludable, y derivarte a un especialista en nutrición, con grado **E** (Koc y colegas, 2023).',
      ],
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.walshBariatric, CITE.songWeightLoss, CITE.yangSemaglutide, CITE.latt, CITE.guideline],
    },
    {
      h2: '¿Qué ejercicios son adecuados con un peso corporal más alto?',
      paragraphs: [
        'Los ejercicios con las mejores calificaciones en la guía de 2023, los estiramientos (**A**) y el trabajo de fuerza de pantorrilla (**B**), no dependen de tu peso (Koc y colegas, 2023). Lo que cambia es cómo empiezas. Las versiones sentado y con apoyo ponen menos carga sobre el talón y exigen menos a las rodillas y al equilibrio, así que aquí van primero.',
        'Son las mismas dosis iniciales de la guía principal de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Haz el primer estiramiento de la fascia plantar sentado en la orilla de la cama, antes de pararte: en un ensayo con 82\u00A0personas, un estiramiento de la fascia plantar hecho antes de pararse alivió el dolor del primer paso de la mañana más que el estiramiento de pantorrilla solo (DiGiovanni y colegas, 2003). Si algún ejercicio lleva tu dolor de talón a 6 de 10, para por ese día.',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su calificación más alta.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pie',
          often: 'La mayoría de los días en que haces ejercicio',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Si te cuesta cruzar la pierna, deja el pie en el piso, pasa una toalla por la parte delantera de la planta y jala con suavidad.',
          stop: 'Dolor agudo en el talón, o dolor que llega a 6 de 10',
          image: 'Ejercicio: estiramiento de la fascia plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su calificación más alta.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'La mayoría de los días en que haces ejercicio',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Apoya las manos en una pared o en la barra de la cocina. Mantén la pierna de atrás estirada, el talón de atrás pegado al piso y la cadera hacia adelante. La pared recibe parte de tu peso, así que puedes inclinarte solo hasta donde te sientas estable.',
          stop: 'Dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su calificación más alta.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          often: 'La mayoría de los días en que haces ejercicio',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición frente a la pared, con el talón de atrás pegado al piso, y luego dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se estira con la rodilla doblada.',
          stop: 'Dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás abajo, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: '3\u00A0días a la semana, nunca dos seguidos',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera de la planta. Las manos sobre las rodillas añaden resistencia. Con la rodilla doblada trabaja sobre todo el sóleo, el músculo más profundo de la pantorrilla, casi sin carga en el talón. Es el primer paso del trabajo de pantorrilla, sea cual sea tu peso.',
          stop: 'Dolor de talón que llega a 6 de 10, o que está peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja hacia arriba con la parte delantera de la planta',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies, apoyado en una barra',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza, cuando las elevaciones sentado ya se sientan fáciles',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate frente a la barra de la cocina o al respaldo de una silla firme, con las manos apoyadas. Sube en línea recta sobre los dedos gordos y baja despacio. Las manos pueden recibir algo de peso en un día de dolor, y menos conforme te fortaleces. Los dos pies comparten la carga.',
          stop: 'Dolor de talón que llega a 6 de 10, o que está peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube en línea recta sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie se eleva sobre las puntas de los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Pie corto, sentado',
          evidence: { level: 'moderate', why: 'Forma parte del programa que mejoró la forma del arco en un ensayo de 2023. Solo, el ejercicio de pie corto tiene resultados más débiles. No se ha probado para el dolor de talón.' },
          dose: '3\u00A0series de 8, mantén 5\u00A0segundos, cada pie',
          often: 'La mayoría de los días en que haces ejercicio',
          feel: 'El arco que se eleva',
          how: 'Siéntate con el pie apoyado en el piso. Lleva la parte delantera de la planta hacia el talón para que el arco se eleve, y mantén. Deja el borde externo del pie en el piso. No encojas los dedos. Encogerlos es el error más común en este ejercicio.',
          stop: 'Un calambre en el pie que no se quita al parar',
          image: 'Ejercicio: pie corto, sentado',
          media: 'short_foot_seated',
          caption: 'Pie corto, sentado: eleva el arco sin encoger los dedos',
          alt: 'Una figura sentada eleva el arco de un pie, con el arco resaltado',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: '¿Qué actividades cargan menos el talón?',
      paragraphs: [
        '**Las actividades en las que tus pies no reciben todo tu peso en cada paso.** La guía aconseja cambiar la carga sobre los pies en lugar de dejar la actividad (Koc y colegas, 2023). Ningún estudio ha comparado actividades en personas con dolor de talón y un peso más alto, así que estas son opciones prácticas, no probadas:',
        {
          list: [
            '**Bicicleta fija o reclinada.** Sigues en movimiento mientras el asiento carga tu peso.',
            '**Nadar o caminar dentro del agua.** El agua quita a tus pies buena parte del peso.',
            '**Ejercicio sentado o de la parte superior del cuerpo.** El ergómetro de brazos, las bandas elásticas o las rutinas en silla te mantienen activo los días en que el talón está adolorido.',
            '**Caminatas más cortas y más frecuentes.** Varias caminatas cortas pueden ser más fáciles para un talón adolorido que una larga.',
          ],
        },
        'Una comprobación sencilla sirve para cualquier actividad: si tus primeros pasos de la mañana siguiente están claramente peor, ese día fue más de lo que el talón podía aguantar, así que la próxima vez haz un poco menos. [Caminar con fascitis plantar](/es/caminar-con-fascitis-plantar/) explica cómo volver a aumentar las caminatas paso a paso.',
        'Si estás empezando a hacer ejercicio para sentirte mejor o para bajar de peso, comenzar con actividades de bajo impacto te permite seguir mientras el talón se calma. La guía incluye correr y pasar muchas horas de pie, sobre todo en superficies duras, como factores de riesgo del dolor de talón (Koc y colegas, 2023).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Los zapatos y las plantillas importan más con un peso más alto?',
      paragraphs: [
        'Ningún estudio ha probado zapatos o plantillas para el dolor de talón específicamente en personas con un peso más alto. Para el dolor de talón en general, la guía de 2023 califica las plantillas solas con **B en contra**: la evidencia dice que no hay que confiar solo en ellas. Combinadas con estiramientos y fuerza, reciben una **C** (Koc y colegas, 2023). [¿Plantillas o ejercicios?](/es/plantillas-o-ejercicios/) compara las dos opciones.',
        'La guía sí recomienda dar consejos sobre calzado como parte del manejo de la carga, e incluye el trabajo de pie sobre superficies duras con poca amortiguación como factor de riesgo (Koc y colegas, 2023). Una opción práctica, no probada en ensayos, es usar zapatos con soporte y amortiguación sobre pisos duros, también en casa.',
        'Después de bajar mucho de peso, los pies pueden cambiar. En el estudio de cirugía, los autores sugirieron que perder grasa bajo la parte media del pie puede cambiar cómo quedan los zapatos y las plantillas, y que vale la pena revisarlo después de una pérdida de peso grande (Walsh y colegas, 2018).',
      ],
      cites: [CITE.guideline, CITE.walshBariatric],
    },
    {
      h2: '¿Se quita la fascitis plantar si no bajo de peso?',
      paragraphs: [
        '**En la mayoría de las personas, sí: se alivia con el tiempo y con tratamiento sin cirugía.** Cerca del 90\u00A0% de las personas con fascitis plantar mejoran con tratamiento sin cirugía, como estiramientos y plantillas, muchas veces en un plazo de 3 a 6\u00A0meses (Latt y colegas, 2020).',
        'En un seguimiento largo de 174\u00A0personas, los investigadores analizaron si el IMC, la edad, fumar, el trabajo físico y otros factores predecían quién seguía con dolor de talón años después. Solo ser mujer y tener dolor en los dos talones lo predijeron. El IMC no (Hansen y colegas, 2018). Por qué afecta más a las mujeres alrededor de los 50\u00A0años se explica en [fascitis plantar y menopausia](/es/fascitis-plantar-menopausia/).',
        'Así que un peso más alto puede hacer más probable que la fascitis plantar empiece, pero no significa que te vayas a quedar con ella. Los estiramientos y el trabajo de pantorrilla de arriba son los mismos que ayudan a personas de cualquier tamaño. [Cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/) tiene la línea de tiempo completa.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
  ],
  faq: [
    {
      q: '¿El sobrepeso puede causar fascitis plantar?',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
      a: 'Un peso más alto se relaciona con la fascitis plantar, pero ningún estudio demuestra que la cause. En un estudio, un IMC mayor de 30 se asoció con 5,6\u00A0veces más probabilidades, y una revisión de 51\u00A0estudios encontró 3,7\u00A0veces más probabilidades por encima de un IMC de 27, con la relación más fuerte en personas que no son deportistas. Un tobillo rígido fue un factor todavía más fuerte.',
    },
    {
      q: '¿Bajar de peso ayuda con la fascitis plantar?',
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.latt],
      a: 'Puede ayudar, pero ningún ensayo aleatorizado lo ha probado en personas con dolor de talón. En un estudio de expedientes de 163\u00A0personas con fascitis plantar que se hicieron una cirugía para bajar de peso, los síntomas de talón desaparecieron en el 90\u00A0%, pero no hubo grupo de comparación, y la mayoría de las personas con fascitis plantar mejoran de todos modos con tratamiento sin cirugía (Latt y colegas, 2020). Una revisión de 2012 calificó la evidencia de limitada.',
    },
    {
      q: '¿Cuánto peso tengo que bajar para que ayude con la fascitis plantar?',
      cites: [CITE.butterworthBmi],
      a: 'Ningún estudio ha calculado una cantidad. No hay ningún ensayo de pérdida de peso para el dolor de talón, así que cualquier número que leas es una suposición. Si quieres bajar de peso por tu salud, habla con tu médico. Para el talón en sí, los estiramientos y el trabajo de fuerza de pantorrilla tienen la evidencia más sólida, con cualquier peso.',
    },
    {
      q: '¿El IMC es un factor de riesgo de fascitis plantar en corredores?',
      cites: [CITE.irvingHeelPain, CITE.butterworthBmi],
      a: 'En general, no. Dos revisiones sistemáticas encontraron que el IMC se relacionaba con el dolor crónico de talón en personas que no son deportistas, pero no en deportistas. Mira [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) para conocer los factores que pesan más en quienes corren.',
    },
    {
      q: '¿Qué ejercicio puedo hacer con fascitis plantar si tengo sobrepeso?',
      cites: [CITE.guideline],
      a: 'Los ejercicios sentado y con apoyo son un buen comienzo: un estiramiento de la fascia plantar sentado, estiramientos de pantorrilla en la pared y elevaciones de talón sentado. Para la condición física, la bicicleta fija, nadar o caminar dentro del agua te mantienen en movimiento con menos carga en el talón. La guía de 2023 aconseja cambiar la carga sobre los pies en lugar de dejar la actividad.',
    },
    {
      q: '¿Los medicamentos para bajar de peso ayudan con la fascitis plantar?',
      cites: [CITE.yangSemaglutide],
      a: 'Hay un estudio observacional. Las personas con dolor de talón de larga duración que tomaban semaglutida reportaron más mejoría que las que no la tomaban, pero no se asignaron al azar, y los autores piden un ensayo aleatorizado. Es una decisión que tomas con tu médico, no algo que se empiece solo por el dolor de talón.',
    },
    {
      q: '¿Por qué me duelen más los talones después de subir de peso?',
      cites: [CITE.guideline, CITE.songWeightLoss],
      a: 'Más peso corporal significa más carga sobre la fascia plantar con cada paso, y el dolor de talón suele empezar después de que aumenta la carga sobre los pies. En un ensayo con 41\u00A0adultos, bajar de peso redujo la presión bajo algunas partes del pie. Ese ensayo no midió el dolor de talón, así que la relación con el dolor es probable, pero no está demostrada.',
    },
    {
      q: '¿La fascitis plantar se quita sin bajar de peso?',
      cites: [CITE.latt, CITE.hansen],
      a: 'En la mayoría de las personas, sí. Cerca del 90\u00A0% mejoran con tratamiento sin cirugía, como estiramientos y plantillas, muchas veces en un plazo de 3 a 6\u00A0meses. En un seguimiento largo de 174\u00A0personas, el IMC no predijo quién seguía con dolor de talón años después. Ser mujer y tener dolor en los dos talones sí lo predijeron.',
    },
    {
      q: '¿Las plantillas son más importantes si peso más?',
      cites: [CITE.guideline],
      a: 'Ningún estudio lo ha probado. Para el dolor de talón en general, la guía de 2023 aconseja no confiar solo en las plantillas (B en contra) y les da una C combinadas con estiramientos y fuerza. Los zapatos con amortiguación sobre pisos duros son una opción práctica, aunque no se han probado en ensayos. Mira [¿plantillas o ejercicios?](/es/plantillas-o-ejercicios/).',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'tienes diabetes y notas entumecimiento, hormigueo, una herida o cambios en la piel o en la forma del pie',
      'el dolor empezó después de una caída, un salto o una torcedura, o no puedes apoyar el pie',
      'el talón está hinchado, rojo o caliente, o tienes fiebre',
      'el dolor es peor por la noche o en reposo, o viene con ardor o entumecimiento',
      'duele al apretar los lados del talón, o el dolor sigue aumentando con la actividad (posible fractura por estrés)',
      'una pantorrilla está adolorida e hinchada (posible coágulo): busca atención el mismo día',
      'te duelen los dos talones y además tienes dolor o rigidez en otras articulaciones',
      'estás pensando en medicamentos o cirugía para bajar de peso: eso es algo para hablar con tu médico',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie. No registra tu peso ni da consejos de alimentación. Arma un plan con los estiramientos y el trabajo de fuerza de pantorrilla de esta página y empieza con las versiones sentado y con apoyo.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta a él. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['heelPain', 'walkingPf', 'standing'],
  crumb: 'Peso y fascitis plantar',
  campaign: 'guide-weight-and-plantar-fasciitis-es',
};
