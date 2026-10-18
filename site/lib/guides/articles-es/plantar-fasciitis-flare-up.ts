import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brote de fascitis plantar (ES).
 *
 * Translated from `articles/plantar-fasciitis-flare-up.ts`, written around the
 * Spanish queries «brote de fascitis plantar», «recaída de fascitis plantar»,
 * «qué hacer en una crisis de fascitis plantar». Figures, grades, doses and
 * qualifiers are identical to the English page. No new citations.
 */

export const PF_FLARE_UP_ES: Guide = {
  lang: 'es',
  page: 'pfFlareUp',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Brote de fascitis plantar: causas y primeras 48 horas',
  description:
    'Brote o recaída de fascitis plantar: qué lo desencadena, qué hacer en las primeras 48 horas, cómo retomar los ejercicios y cuándo no es un brote.',
  h1: 'Brote de fascitis plantar: qué lo desencadena y qué hacer en las primeras 48\u00A0horas',
  lede:
    'Un brote de [fascitis plantar](/es/fascitis-plantar/) suele llegar después de un salto en lo que tu talón tiene que cargar: una caminata larga, un día de pie sobre pisos duros o una rutina nueva. La guía de 2023 para el dolor de talón incluye el dolor después de un aumento reciente de la actividad con carga como un rasgo típico, y recomienda dar consejos para ajustar la carga sin aconsejar dejar de moverse, un consejo que califica con **E** porque se basa en la teoría y no en ensayos (Koc y colegas, 2023). Durante las primeras 48\u00A0horas, reduce la carga que lo desencadenó, sigue con tus estiramientos suaves y deja que la mañana siguiente te diga cómo vas.',
  intro: [
    'Ningún estudio ha definido qué es un brote de fascitis plantar ni ha probado qué hacer en los primeros dos días, así que esta página usa las reglas probadas que más se acercan y dice de dónde vienen. Repasa los desencadenantes comunes, un plan corto para las primeras 48\u00A0horas, cómo bajar un nivel en tus ejercicios y volver a subir, y las señales de que el dolor es algo distinto de un brote. Si tu talón duele sobre todo con los primeros pasos del día, [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) trata ese patrón por separado.',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón incluye el dolor de talón después de un aumento reciente de la actividad con carga como un rasgo típico de la fascitis plantar, y recomienda dar consejos para cambiar la carga, con grado **E**, sin aconsejar reposo total (Koc y colegas, 2023).',
    'En un estudio con 50\u00A0personas con fascitis plantar y 100 sin ella, un tobillo rígido (23,3\u00A0veces más probabilidades), un IMC mayor de 30 (5,6\u00A0veces) y estar de pie la mayor parte de la jornada laboral (3,6\u00A0veces) fueron factores de riesgo. Ese estudio analizó quién desarrolla fascitis plantar, no los brotes (Riddle y colegas, 2003).',
    'Una regla de control del dolor permite un dolor de hasta unos 5 de 10 durante la actividad, siempre que se calme para la mañana siguiente. Se probó en 38\u00A0personas con dolor de Aquiles, no con fascitis plantar (Silbernagel y colegas, 2007).',
    'La guía no hace ninguna recomendación sobre el hielo o el calor, así que el hielo es, como mucho, una herramienta para sentirte más cómodo, y ningún estudio muestra que calme un brote (Koc y colegas, 2023).',
    'En un ensayo con 180\u00A0adultos, el consejo de reducir las actividades que provocan brotes y luego volver poco a poco, junto con una talonera, se acompañó de una mejoría clínicamente relevante a los tres meses, aproximadamente (Riel y colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es un brote de fascitis plantar?',
      paragraphs: [
        '**Un brote es una racha de días en que tu dolor de talón de siempre está claramente peor de lo normal.** Los primeros pasos de la mañana duelen más, el talón empieza a doler antes cuando estás de pie, o un dolor que ya se había ido vuelve. No hay una definición médica acordada, y no encontramos ningún estudio que cuente con qué frecuencia ocurren los brotes ni cuánto duran.',
        'El tejido de debajo del talón tolera mal los cambios bruscos de carga. La guía de 2023 describe el dolor de la fascitis plantar como más notorio con los primeros pasos después del reposo, e incluye un aumento reciente de la actividad con carga como parte típica de la historia (Koc y colegas, 2023). Un brote probablemente es lo mismo en pequeño: al talón se le pidió más de lo que estaba listo para dar.',
        'Por eso un brote no tiene por qué significar que vuelves a empezar de cero. Alrededor del 90\u00A0% de las personas con fascitis plantar mejoran con tratamiento no quirúrgico, aunque a menudo tarda meses (Latt y colegas, 2020). En [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/) verás lo que muestran los seguimientos largos.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: '¿Qué desencadena un brote de fascitis plantar?',
      keyFact: 'Estar de pie la mayor parte de la jornada laboral se asoció con 3,6\u00A0veces más probabilidades de tener fascitis plantar, y un tobillo rígido con 23,3\u00A0veces, en un estudio de 50\u00A0casos y 100\u00A0controles (Riddle y colegas, 2003).',
      paragraphs: [
        '**El hilo común es un cambio brusco en la carga.** Ningún estudio ha seguido qué provoca los brotes en personas que ya tienen fascitis plantar. Lo que existe es investigación sobre qué hace que alguien la desarrolle en primer lugar, y apunta en la misma dirección:',
        {
          list: [
            '**Un salto repentino en la actividad.** Unas vacaciones con días largos caminando, un plan nuevo para correr, una excursión o una semana pesada en el trabajo. La guía incluye un aumento reciente de la actividad con carga como algo típico (Koc y colegas, 2023). Si corres, [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) habla de los cambios de kilometraje.',
            '**Muchas horas de pie.** En un estudio con 50\u00A0personas con fascitis plantar y 100 sin ella, estar de pie la mayor parte de la jornada laboral se asoció con 3,6\u00A0veces más probabilidades (Riddle y colegas, 2003). En otro, las personas con dolor de talón eran tan activas como las que no lo tenían, pero pasaban 3,4\u00A0horas más al día de pie (Landorf y colegas, 2023). Mira [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/).',
            '**Descalzo sobre pisos duros.** La guía incluye el trabajo con carga sobre superficies que amortiguan poco como factor de riesgo (Koc y colegas, 2023), aunque un estudio encontró que las personas con dolor de talón no pasaban más tiempo de pie sobre pisos duros que las que no lo tenían (Landorf y colegas, 2023). Una guía de buenas prácticas de 2021 aconseja evitar caminar descalzo y los zapatos planos y sin soporte hasta que desaparezcan los síntomas (Morrissey y colegas, 2021).',
            '**Zapatos nuevos o distintos.** No encontramos ningún estudio que probara los zapatos nuevos como desencadenante. Lo que se sabe: las personas con dolor de talón usaban zapatos con tacones más duros que las que no lo tenían (Landorf y colegas, 2023), y la guía de buenas prácticas prefiere zapatos con soporte y el talón un poco más alto que los dedos (Morrissey y colegas, 2021). Pasarte a zapatos planos, delgados o muy flexibles, o a [zapatos barefoot](/es/zapatos-barefoot/), es un cambio que tu talón va a notar.',
            '**Una pantorrilla tensa.** En el mismo estudio de 2003, las personas cuyo tobillo se doblaba hacia arriba 0\u00A0grados o menos tenían 23,3\u00A0veces más probabilidades que las que llegaban a más de 10\u00A0grados (Riddle y colegas, 2003). Dejar los estiramientos un tiempo puede hacer que esa rigidez vuelva. Mira [pantorrillas tensas](/es/pantorrillas-tensas/).',
          ],
        },
        'El peso corporal también es un factor de riesgo: un IMC mayor de 30 se asoció con 5,6\u00A0veces más probabilidades en el estudio de 2003. El peso cambia despacio, así que es más un factor de fondo que el desencadenante de un brote esta semana. Más en [peso y fascitis plantar](/es/peso-y-fascitis-plantar/).',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.landorfFootwear, CITE.morrisseyBestPractice],
    },
    {
      h2: '¿Qué hacer en las primeras 48\u00A0horas de un brote?',
      keyFact: 'En un ensayo con 180\u00A0adultos, el grupo que recibió solo el consejo de reducir las actividades que provocan brotes y volver poco a poco, junto con una talonera, mejoró de forma clínicamente relevante a los tres meses, aproximadamente (Riel y colegas, 2023).',
      paragraphs: [
        '**Reduce la carga, sigue moviéndote con suavidad y juzga cómo vas por la mañana siguiente.** Ningún ensayo ha probado un plan de 48\u00A0horas para la fascitis plantar. Los pasos de abajo llevan a la práctica la guía y los consejos probados más cercanos:',
        {
          list: [
            '**Encuentra el desencadenante y redúcelo.** Caminatas más cortas, más pausas para sentarte, un descanso de correr o de las cuestas. El consejo que se probó en un ensayo danés fue reducir las actividades que provocan brotes y luego volver poco a poco al nivel de actividad anterior, guiándote por los síntomas (Riel y colegas, 2020).',
            '**No dejes de moverte del todo.** La guía recomienda ajustar la carga y no aconseja reposo total (Koc y colegas, 2023). Lo que caminas para tu vida diaria está bien dentro de la regla del dolor de abajo.',
            '**Sigue con los estiramientos suaves.** Los estiramientos de la fascia plantar y de la pantorrilla tienen grado **A** (Koc y colegas, 2023). Haz el primero antes de que el pie toque el piso por la mañana.',
            '**Usa zapatos dentro de casa.** Zapatos con soporte o pantuflas firmes desde el primer paso del día, en lugar de ir descalzo sobre azulejo o madera (Morrissey y colegas, 2021).',
            '**Interrumpe el tiempo de pie.** La guía de buenas prácticas aconseja cortar los periodos largos de estar de pie sin moverte (Morrissey y colegas, 2021).',
          ],
        },
        'En ese ensayo, cada uno de los 180\u00A0adultos recibió este tipo de consejo más una talonera, y dos de los tres grupos recibieron además entrenamiento con elevaciones de talón, o elevaciones de talón más una inyección de corticoide. Los tres grupos del ensayo mejoraron de forma clínicamente relevante a los tres meses, aproximadamente, incluido el grupo que recibió solo el consejo y la talonera (Riel y colegas, 2023). El consejo fue la base, no un añadido de último momento.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.rielHeelRaiseAdd, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: '¿Cuánto dolor es aceptable durante un brote?',
      keyFact: 'En un ensayo con 38\u00A0personas con dolor de Aquiles, quienes siguieron activos con un dolor de hasta unos 5 de 10 que se calmaba para la mañana siguiente estaban igual de bien a los doce meses que quienes dejaron de correr y saltar (Silbernagel y colegas, 2007).',
      paragraphs: [
        '**Usa la misma regla del dolor que para caminar: moderado como máximo durante la actividad, y de vuelta a tu normal a la mañana siguiente.** La regla viene de un ensayo de 2007 con 38\u00A0personas con dolor en el tendón de Aquiles. Se permitía un dolor de hasta unos 5 de 10 durante la actividad, siempre que se calmara para la mañana siguiente y no aumentara de una semana a otra. Mantenerse activo así no llevó a peores resultados a los doce meses que dejar de correr y saltar durante seis semanas (Silbernagel y colegas, 2007). No se ha probado en la fascitis plantar, así que úsala como una guía prestada.',
        'Para el dolor de talón, la guía de buenas prácticas de 2021 recomienda con fuerza el control del dolor y enseñar a las personas a leer cómo responde su dolor a la actividad, sin dar un número (Morrissey y colegas, 2021). Durante los ejercicios, Walkito termina la sesión si el dolor llega a 6 de 10.',
      ],
      table: {
        caption: 'Cómo leer tu talón durante un brote (escala de dolor de 0 a 10)',
        head: ['Lo que notas', 'Qué hacer'],
        rows: [
          ['De 0 a 5 durante la actividad, normal a la mañana siguiente', 'Mantén esa carga'],
          ['Más de 5 durante la actividad', 'Para o acórtala hoy'],
          ['La mañana siguiente, peor de lo habitual', 'Vuelve a reducir uno o dos días'],
          ['Mejor cada mañana', 'Empieza a retomar'],
          ['Peor cada día aunque hayas reducido', 'Consulta a un profesional de la salud'],
        ],
      },
      after: [
        'La versión completa de esta regla, con una columna para la próxima caminata, está en [caminar con fascitis plantar](/es/caminar-con-fascitis-plantar/). Lo que más importa es la revisión de la mañana, porque el dolor del primer paso muestra cómo aguantó tu pie el día anterior.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0personas por grupo, tendinopatía de Aquiles, no fascitis plantar.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: '¿Hay que ponerle hielo a un brote de fascitis plantar?',
      paragraphs: [
        '**El hielo está bien si hace que el talón se sienta mejor, pero ningún estudio muestra que calme un brote.** La guía de 2023 encontró muy poca evidencia para recomendar el calor o el frío superficial en la fascitis plantar (Koc y colegas, 2023).',
        'Incluso en las lesiones deportivas recientes, donde más se usa el hielo, una revisión de 22\u00A0ensayos no encontró evidencia de una mejor forma ni de un mejor tiempo para aplicarlo (Bleakley y colegas, 2004). Así que no existe una regla probada de «hielo durante X\u00A0minutos» para un talón adolorido. Si lo usas, pon un trapo entre el hielo y la piel, deja de usarlo si la piel se adormece, y no lo uses si tienes diabetes o poca sensibilidad en los pies.',
        'Úsalo junto con tus estiramientos, no en lugar de ellos. [Hielo o calor para la fascitis plantar](/es/hielo-o-calor-fascitis-plantar/) repasa lo que encontraron los pocos estudios y cómo proteger tu piel.',
      ],
      cites: [CITE.guideline, CITE.bleakleyIce],
    },
    {
      h2: '¿Cómo retomar los ejercicios después de un brote?',
      keyFact: 'En un ensayo con 48\u00A0personas, las elevaciones de talón con carga aliviaron el dolor y mejoraron la función diaria más rápido que los estiramientos, y a los doce meses los dos grupos estaban más o menos igual (Rathleff y colegas, 2015).',
      paragraphs: [
        '**Baja un nivel en tu trabajo de fuerza y vuelve a subir cuando las mañanas se calmen.** Ningún estudio ha probado cómo retomar después de un brote. La guía de 2023 califica el trabajo de fuerza de la pantorrilla con **B** (Koc y colegas, 2023), y en un ensayo con 48\u00A0personas, las elevaciones de talón con carga y una toalla bajo los dedos ayudaron más rápido que los estiramientos (Rathleff y colegas, 2015). Vale la pena mantener el trabajo de fuerza, solo que a un nivel que tu talón aguante esta semana.',
        'El trabajo de pantorrilla de Walkito sube por niveles: elevaciones de talón sentado, luego elevaciones de talón con dos pies, luego la elevación de talón sostenida, y solo más adelante la elevación de talones con toalla, que es la que más carga la fascia plantar. Durante un brote:',
        {
          list: [
            'Baja un nivel. Si estabas en la elevación de talones con toalla, vuelve a la elevación sostenida o a las elevaciones con dos pies. Si estabas en las de dos pies, vuelve a las de sentado.',
            'Sigue con los estiramientos como siempre.',
            'Vuelve a subir un nivel cuando las dos últimas sesiones en el nivel más bajo se hayan sentido fáciles y tus mañanas hayan vuelto a la normalidad.',
            'Recupera la actividad que provocó el brote en partes pequeñas, cambiando una sola cosa a la vez: distancia, ritmo, cuestas o superficie.',
          ],
        },
        'Estas son las dosis iniciales de Walkito, no una indicación médica. La serie completa y la tabla están en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/), y la escalera de fuerza se explica en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento plantar',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pie',
          often: 'En la mayoría de las sesiones, y antes de los primeros pasos del día',
          feel: 'Un estiramiento a lo largo del arco',
          how: 'Siéntate y cruza el pie sobre la otra rodilla. Jala los dedos hacia atrás hasta sentir el estiramiento en el arco, no en la pantorrilla. Haz el primero en la orilla de la cama, antes de que el pie toque el piso.',
          stop: 'Dolor agudo en el talón',
          image: 'Ejercicio: estiramiento plantar',
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás hasta sentirlo en el arco',
          alt: 'Una figura jala hacia atrás los dedos de un pie, con la planta del pie resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'En la mayoría de las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás bien apoyado en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
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
          often: 'En la mayoría de las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición, con el talón de atrás bien apoyado en el piso, y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
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
          often: 'Días de fuerza; es el nivel al que bajar durante un brote',
          feel: 'Trabajo en la parte baja de la pantorrilla',
          how: 'Siéntate con los pies apoyados y empuja hacia arriba con la parte delantera del pie. Las manos en las rodillas añaden resistencia. Con la rodilla doblada trabajas sobre todo el sóleo, el músculo más profundo de la pantorrilla, casi sin carga en el talón.',
          stop: 'Dolor de talón que llega a 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón sentado',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: 'Días de fuerza, cuando las elevaciones sentado vuelvan a sentirse fáciles',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio. Los dos pies comparten la carga. Apóyate en una pared para mantener el equilibrio.',
          stop: 'Dolor de talón que llega a 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con la pantorrilla resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: '¿Qué es lo peor que puedes hacer durante un brote?',
      paragraphs: [
        '**Ningún estudio clasifica qué es lo peor, pero hay dos errores opuestos que son los más comunes: forzar sin parar y dejarlo todo.** Esto es lo que dice la evidencia sobre cada uno:',
        {
          list: [
            '**Forzar con un dolor que va en aumento.** Mantener las mismas caminatas o carreras largas mientras el talón empeora cada mañana es ignorar justo la señal en la que se basa la regla del dolor probada (Silbernagel y colegas, 2007). Los expertos detrás de la guía de buenas prácticas de 2021 señalaron un cambio en la carga total como factor de riesgo de los brotes, así que más carga es la dirección equivocada (Morrissey y colegas, 2021).',
            '**Dejar toda la actividad y todos los ejercicios.** La guía recomienda ajustar la carga y no aconseja reposo total (Koc y colegas, 2023), y en el ensayo de Aquiles mantenerse activo dentro de un límite de dolor dio el mismo resultado que dejar de correr y saltar durante seis semanas (Silbernagel y colegas, 2007). Dejar los estiramientos y el trabajo de pantorrilla también es tirar a la basura las opciones con grado **A** y **B**.',
            '**Andar descalzo sobre pisos duros,** sobre todo en los primeros pasos del día (Morrissey y colegas, 2021).',
            '**Confiar solo en una plantilla.** Las plantillas usadas solas para un alivio a corto plazo tienen grado **B en contra** en la guía, aunque pueden ayudar combinadas con ejercicio (Koc y colegas, 2023). Mira [plantillas o ejercicios](/es/plantillas-o-ejercicios/).',
          ],
        },
        'Un brote no es la prueba de que tu plan falló. Si los brotes vuelven una y otra vez o cada uno es peor que el anterior, ese es el momento de consultar a un profesional de la salud, no de esforzarte más.',
      ],
      cites: [CITE.silbernagel, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: '¿Cuándo no es un brote?',
      keyFact: 'Las radiografías simples suelen pasar por alto las fracturas por estrés tempranas: una revisión calculó su sensibilidad en la primera consulta en alrededor del 10\u00A0%, y de 30 a 70\u00A0% después de tres semanas (Patel y colegas, 2011).',
      paragraphs: [
        '**Si el dolor se comporta distinto de tu fascitis plantar de siempre, no des por hecho que es un brote.** El dolor de la fascitis plantar es peor con los primeros pasos después del reposo, a menudo se calma una vez que te mueves y puede volver tras pasar mucho tiempo de pie (Koc y colegas, 2023). Otros patrones apuntan a otra cosa:',
        {
          list: [
            '**Un dolor que aumenta cuanto más caminas,** a menudo después de un salto en la actividad, o dolor al apretar los lados del talón, puede ser una fractura por estrés (Tu, 2018). Mira [fascitis plantar o fractura por estrés](/es/fascitis-plantar-o-fractura-por-estres/).',
            '**Dolor de noche o en reposo,** o ardor, hormigueo y adormecimiento, sugieren algo distinto de la fascia plantar. Mira [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/).',
            '**Un chasquido repentino o un dolor agudo** debajo del pie durante la actividad, o moretones o hinchazón nuevos, necesitan un profesional de la salud, no un plan para brotes.',
            '**Un dolor profundo en el centro del talón** que empeora sobre suelo duro puede venir de la almohadilla de grasa del talón. Mira [síndrome de la almohadilla grasa del talón](/es/sindrome-almohadilla-grasa-talon/).',
          ],
        },
        '¿No sabes bien dónde encaja tu dolor? El [identificador de dolor de pie](/es/donde-me-duele-el-pie/) repasa los patrones comunes, aunque no diagnostica.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: '¿Qué provoca un brote de fascitis plantar?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Normalmente, un aumento repentino de la carga sobre el talón: caminar o correr más de lo habitual, muchas horas de pie o andar descalzo sobre pisos duros. La guía de 2023 incluye un aumento reciente de la actividad con carga como algo típico. En un estudio, estar de pie la mayor parte de la jornada laboral se asoció con 3,6\u00A0veces más probabilidades de desarrollar fascitis plantar.',
    },
    {
      q: '¿Cuánto dura un brote de fascitis plantar?',
      cites: [CITE.latt],
      a: 'Ningún estudio ha medido cuánto dura un brote, así que cualquier número fijo de días es una suposición. Usa tus mañanas como guía: si el dolor del primer paso se calma en unos días después de reducir la carga, vas bien. La fascitis plantar en sí a menudo tarda meses, y alrededor del 90\u00A0% de las personas mejoran con tratamiento no quirúrgico.',
    },
    {
      q: '¿Qué hago cuando tengo un brote de fascitis plantar?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Reduce la actividad que lo provocó, sigue con los estiramientos suaves de la fascia plantar y de la pantorrilla, usa zapatos con soporte dentro de casa y juzga cómo vas por el dolor de la mañana siguiente. La guía de 2023 recomienda ajustar la carga y no aconseja reposo total. En un ensayo con 180\u00A0adultos, ese tipo de consejo más una talonera se acompañó de una mejoría relevante a los tres meses, aproximadamente.',
    },
    {
      q: '¿Debo hacer reposo total durante un brote de fascitis plantar?',
      cites: [CITE.guideline, CITE.silbernagel],
      a: 'Ningún estudio muestra que el reposo total sea necesario. La guía de 2023 recomienda ajustar la carga y no aconseja dejar de moverse. En un ensayo sobre dolor de Aquiles, las personas que siguieron activas con un dolor de hasta unos 5 de 10, que se calmaba para la mañana, estaban igual de bien a los doce meses que quienes dejaron de correr y saltar durante seis semanas. Si hasta las caminatas cortas te causan un dolor agudo o te hacen cojear, consulta a un profesional de la salud.',
    },
    {
      q: '¿Qué es lo peor que puedes hacer con la fascitis plantar?',
      cites: [CITE.guideline, CITE.morrisseyBestPractice],
      a: 'Ningún estudio lo clasifica, pero forzar con un dolor que empeora cada mañana es el error más claro, ya que los expertos de una guía de buenas prácticas de 2021 señalaron los cambios de carga como factor de riesgo de los brotes. Dejar toda la actividad y tus ejercicios es el error opuesto. También conviene evitar andar descalzo sobre pisos duros hasta que los síntomas se calmen.',
    },
    {
      q: '¿Sigo con mis ejercicios durante un brote?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Sí, a un nivel más ligero. Mantén los estiramientos de la fascia plantar y de la pantorrilla, que la guía de 2023 califica con A, y baja un nivel en tu trabajo de fuerza de pantorrilla, por ejemplo de las elevaciones de talón de pie a las de sentado. El trabajo de fuerza tiene grado B, y las elevaciones de talón con carga ayudaron más rápido que los estiramientos en un ensayo con 48\u00A0personas. Detente si el dolor llega a 6 de 10.',
    },
    {
      q: '¿El hielo es bueno para un brote de fascitis plantar?',
      cites: [CITE.guideline, CITE.bleakleyIce],
      a: 'El hielo está bien para sentirte más cómodo, pero no hay evidencia de que calme un brote. La guía de 2023 para el dolor de talón no hace ninguna recomendación sobre el hielo o el calor, y una revisión de 22\u00A0ensayos en lesiones recientes no encontró una mejor forma ni un mejor tiempo para aplicarlo. Protege tu piel, y no lo uses si tienes poca sensibilidad en los pies.',
    },
    {
      q: '¿Unos zapatos nuevos pueden provocar un brote de fascitis plantar?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Pueden, aunque ningún estudio ha probado los zapatos nuevos como desencadenante. Las personas con dolor de talón usaban zapatos con tacones más duros que las que no lo tenían, y una guía de buenas prácticas aconseja zapatos con soporte y el talón un poco más alto que los dedos. Pasarte a zapatos planos, delgados o muy flexibles es un cambio que tu talón puede notar.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó tras una caída, un salto o una torcedura, o no puedes apoyar el pie',
      'sentiste un chasquido o un dolor agudo repentino debajo del pie, o hay moretones o hinchazón nuevos',
      'el dolor aumenta cuanto más caminas, o te duele al apretar los lados del talón (posible fractura por estrés)',
      'el talón te duele de noche o en reposo, no solo con los primeros pasos',
      'tienes adormecimiento, hormigueo o ardor en el pie',
      'el talón está rojo, caliente o hinchado, o te sientes mal o tienes fiebre',
      'tienes diabetes o mala circulación y el pie te duele o se ve distinto',
      'el dolor sigue empeorando durante más de unos días aunque hayas reducido la carga, o los brotes vuelven una y otra vez',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie. Lee un brote igual que esta página: por cómo se siente tu talón por la mañana.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta: una mala mañana convierte la sesión en una más ligera, y el trabajo de pantorrilla vuelve a subir de nivel a medida que las mañanas mejoran. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['walkingPf', 'heelPain', 'pfDuration'],
  crumb: 'Brote de fascitis plantar',
  campaign: 'guide-plantar-fasciitis-flare-up-es',
};
