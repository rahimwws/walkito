import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const ICE_HEAT_ES: Guide = {
  lang: 'es',
  page: 'iceHeat',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: '¿Hielo o calor para la fascitis plantar? Qué ayuda',
  description:
    '¿Hielo o calor para la fascitis plantar? Qué hace cada uno, qué hallaron los pocos ensayos, cómo usarlos con seguridad y por qué el ejercicio es la base.',
  h1: 'Hielo o calor para la fascitis plantar: cuál ayuda y cuándo',
  lede:
    'Para la fascitis plantar, el hielo y el calor sirven los dos como alivio a corto plazo. El hielo suele ir mejor con un talón adolorido después de un día largo de pie. El calor suele ir mejor con un pie rígido antes de estirar. Ninguno tiene evidencia fuerte de ensayos, y la guía de 2023 para el dolor de talón no hace ninguna recomendación sobre ninguno de los dos. Los estiramientos y la fuerza de pantorrilla son lo que hace el trabajo de verdad.',
  intro: [
    'Así que elige el que se sienta mejor, úsalo con seguridad y ponlo junto a tus ejercicios, no en su lugar. Abajo: por qué la regla de «está inflamado, ponle hielo» es dudosa, qué encontraron los pocos estudios y cómo proteger tu piel. Para la afección en sí, mira [fascitis plantar](/es/fascitis-plantar/).',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón encontró solo 1\u00A0ensayo pequeño sobre calor y concluyó que una recomendación sobre el frío o el calor superficial «no se puede hacer» (Koc y colegas, 2023).',
    'En tejido de 50\u00A0casos de cirugía de talón por fascitis plantar de larga duración, los investigadores encontraron una fascia desgastada y degenerada, sin signos de inflamación (Lemont y colegas, 2003).',
    'Una revisión de 22\u00A0ensayos de hielo para lesiones agudas calificó su calidad en 3,4 de 10 en promedio y no encontró evidencia de una mejor forma ni de un mejor tiempo para aplicar hielo (Bleakley y colegas, 2004).',
    'Una revisión de 36\u00A0estudios en personas sin lesiones encontró que el calor más estiramiento mejoró el rango de movimiento más que solo estirar, aunque todos los estudios tenían un alto riesgo de sesgo (Bleakley y Costello, 2013).',
    'El estiramiento recibe el grado más alto de la guía, **A**, y el entrenamiento de fuerza una **B**. El hielo y el calor son herramientas de alivio para usar junto con ellos.',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es mejor para la fascitis plantar, hielo o calor?',
      keyFact: 'La guía de 2023 para el dolor de talón encontró 1\u00A0ensayo pequeño sobre calor y dijo que no se puede hacer una recomendación sobre los agentes térmicos superficiales (Koc y colegas, 2023).',
      paragraphs: [
        'Ni el hielo ni el calor es claramente mejor para la fascitis plantar, porque ninguno se ha probado lo suficiente como para elegir un ganador. La guía de 2023 para el dolor de talón de la American Physical Therapy Association (la asociación de fisioterapia de Estados Unidos) revisó la investigación sobre los «agentes térmicos», es decir, compresas frías y calientes y similares. Encontró un solo ensayo pequeño y de menor calidad sobre calor y concluyó que una recomendación «no se puede hacer».',
        'Eso no significa que no sirvan. Significa que son herramientas de alivio, y puedes elegir según cómo sientas el pie en ese momento. La tabla de abajo es una guía práctica, no una regla salida de un ensayo.',
      ],
      table: {
        caption: 'Hielo o calor: una guía práctica',
        head: ['Situación', 'Suele ser más cómodo', 'Por qué'],
        rows: [
          ['El talón punza después de una caminata larga o un turno de trabajo', 'Hielo', 'El frío adormece las señales de dolor por un rato'],
          ['El pie se siente rígido y tenso, antes de estirar', 'Calor', 'El tejido caliente suele estirarse con más facilidad'],
          ['Los primeros pasos de la mañana', 'Calor o nada, y luego estirar', 'La meta es aflojar antes de cargar el pie'],
          ['El dolor empezó de repente después de una lesión, con hinchazón o moretón', 'Hielo, y consulta a un profesional de la salud', 'Puede que no sea fascitis plantar'],
          ['Tienes diabetes, pies entumecidos o mala circulación', 'Pregunta primero a un profesional de la salud', 'Puede que no sientas una quemadura o una lesión por frío'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: '¿La fascitis plantar está inflamada y necesita hielo?',
      keyFact: 'En 50\u00A0casos quirúrgicos de fascitis plantar de larga duración, la fascia mostró degeneración sin inflamación (Lemont y colegas, 2003).',
      figure: {
        id: 'plantar-fascia',
        caption: 'La fascia plantar va del hueso del talón a la base de los dedos.',
        alt: 'Un pie visto desde el lado interno, con la fascia plantar resaltada como una banda del talón a los dedos.',
      },
      paragraphs: [
        'La fascitis plantar de larga duración por lo general no es un tejido inflamado como lo es un esguince reciente. El «-itis» del nombre significa inflamación, y por eso tantas páginas te dicen que le pongas hielo. Pero cuando Lemont y colegas analizaron en 2003 tejido de 50\u00A0casos de cirugía por fascitis plantar crónica, encontraron una fascia desgastada, deshilachada y degenerada, y ningún signo de inflamación. Propusieron llamarla fasciosis, es decir, una banda degenerada, no inflamada.',
        'Ese hallazgo viene con dos matices. Eran los casos más difíciles, tan graves que necesitaron cirugía, así que el dolor de talón en etapas tempranas puede verse distinto. Y el estudio solo describió el tejido. No probó el hielo.',
        'Lo que sí cambia es la razón para poner hielo. Si la fascia está sobre todo desgastada y sobrecargada, el frío no está «apagando un incendio». Adormece el dolor por un rato, lo cual sigue siendo útil. Lo que ayuda a que un tejido desgastado se adapte es la carga gradual: estiramientos y trabajo de fuerza.',
      ],
      cites: [CITE.lemontFasciosis],
    },
    {
      h2: '¿El hielo ayuda con la fascitis plantar? Lo que encontraron los ensayos',
      keyFact: 'En un ensayo con 30\u00A0personas, el dolor bajó de 7,7 a 3,5 de 10 con una pelota de tenis congelada más estiramientos, frente a 7,6 a 6,7 con solo estiramientos (Shinde y Patil, 2026).',
      paragraphs: [
        'El hielo probablemente alivia el dolor de la fascitis plantar por un tiempo corto, pero muy pocos ensayos lo han probado, y ninguno comparó el hielo con no hacer nada. Esto es lo que existe.',
        'En un ensayo de 2014 con 102\u00A0personas con fascitis plantar de más de seis meses, los dos grupos recibieron 10\u00A0sesiones diarias de 20\u00A0minutos con un aparato de clínica: frío solo, o frío más ultrasonido. Los dos mejoraron, y el grupo combinado salió mejor hasta los 18\u00A0meses (Costantino y colegas). El frío era la comparación, así que el ensayo no puede decir cuánto hizo el frío en sí. Un ensayo de 2023 con 36\u00A0personas tuvo la misma limitación: un grupo de «crioestiramiento», que rodaba el pie sobre una pelota de tenis congelada, mejoró en 7\u00A0días, pero también los dos grupos sin frío (Jadhav y Gurudut).',
        'La prueba más directa es pequeña. En un estudio de 2026 con 30\u00A0personas, el grupo que añadió una pelota de tenis congelada a los estiramientos durante dos meses pasó de 7,7 a 3,5 en una escala de dolor de 0 a 10, mientras que el grupo de solo estiramientos pasó de 7,6 a 6,7 (Shinde y Patil). Parece una gran diferencia, pero el artículo no explica con claridad cómo se asignó a las personas a los grupos, y el grupo de la pelota congelada también recibió presión al rodar, así que no se pueden separar el frío y el masaje.',
        'Fuera del pie, el panorama es parecido. Una revisión de 2004 de 22\u00A0ensayos de hielo para lesiones recientes, como los esguinces de tobillo, calificó su calidad promedio en 3,4 de 10 y no encontró un mejor método ni un mejor tiempo para aplicar hielo. La única señal, apenas marginal, favoreció el hielo más ejercicio después de esguinces de tobillo y cirugías (Bleakley y colegas).',
      ],
      sourceNote: 'Costantino 2014: ensayo aleatorizado simple ciego, crioultrasonido frente a crioterapia, dolor en una escala visual analógica. Jadhav 2023: ensayo aleatorizado, 12 por grupo, Numerical Pain Rating Scale y Foot Function Index al día 7. Shinde 2026: 15 por grupo, NPRS y Foot Function Index, asignación descrita como «random sampling technique» (técnica de muestreo aleatorio). Bleakley 2004: puntuación PEDro media de 3,4/10.',
      cites: [CITE.costantinoCryo, CITE.jadhavCryostretch, CITE.shindeFrozenBall, CITE.bleakleyIce],
    },
    {
      h2: '¿El calor es bueno para la fascitis plantar?',
      keyFact: 'Una revisión Cochrane de 9\u00A0ensayos con 1\u00A0117\u00A0personas encontró evidencia moderada, a partir de algunos de esos ensayos, de un pequeño beneficio a corto plazo en el dolor con compresas térmicas para el dolor lumbar, y muy poca evidencia para juzgar el frío (French y colegas, 2006).',
      paragraphs: [
        'El calor está bien para la fascitis plantar si se siente bien, y la idea de que «empeora la inflamación» no tiene ningún ensayo detrás. El único ensayo de calor que encontró la guía de 2023 fue pequeño: 20\u00A0personas con dolor en la planta del pie recibieron al azar un parche de calor o un parche falso sobre puntos gatillo (zonas sensibles dentro del músculo). El dolor bajó en el grupo con calor, pero no en el del parche falso (Petrofsky y colegas, 2020). El parche se dejó puesto unas cuatro horas y el dolor se midió justo después, así que solo habla del alivio a corto plazo.',
        'La mejor evidencia general sobre el calor viene del dolor de espalda, no de los pies. Una revisión Cochrane (un resumen cuidadoso de ensayos) de 9\u00A0ensayos con 1\u00A0117\u00A0personas encontró evidencia moderada, a partir de algunos de esos ensayos, de que las compresas térmicas dan una baja pequeña y de corto plazo en el dolor lumbar reciente, y de que añadir ejercicio ayudó más. Para el frío solo encontró tres estudios de baja calidad y no sacó conclusiones (French y colegas, 2006).',
        'El calor lleva más sangre a la zona y hace el tejido un poco más flexible. El frío reduce el flujo de sangre y adormece el dolor. Una revisión de 2015 señaló que la mayoría de los consejos sobre los dos se basan en la experiencia, con evidencia limitada de ensayos (Malanga y colegas).',
      ],
      cites: [CITE.petrofskyHeat, CITE.guideline, CITE.frenchHeatCold, CITE.malangaHeatCold],
    },
    {
      h2: '¿Conviene aplicar calor antes de estirar?',
      keyFact: 'En 36\u00A0estudios con 1\u00A0301\u00A0personas sin lesiones, el calor más estiramiento mejoró el rango de movimiento más que solo estirar (Bleakley y Costello, 2013).',
      paragraphs: [
        'Calentar el pie antes de estirar es una opción razonable, y tiene más respaldo que ponerle hielo antes de estirar. Una revisión de 2013 de 36\u00A0estudios con 1\u00A0301\u00A0personas sin lesiones encontró que el calor aumentó el rango de movimiento, y que el calor más estiramiento funcionó mejor que solo estirar. Los datos sobre el frío fueron contradictorios. Todos los estudios tenían un alto riesgo de sesgo y ninguno incluyó a personas con dolor de talón, así que tómalo como una idea sensata, no como un plan probado para la fascitis plantar.',
        'Calentar puede ser sencillo. Un baño caliente, o unos minutos con los pies en agua tibia, antes del estiramiento de la fascia plantar y el estiramiento de pantorrilla. En la mañana, eso sí, no esperes a calentar para estirar. El estiramiento de los primeros pasos se hace antes de que el pie cargue peso, sentado en la orilla de la cama. [Dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) explica esa rutina paso a paso.',
      ],
      cites: [CITE.bleakleyThermal],
    },
    {
      h2: '¿Los baños de contraste ayudan con la fascitis plantar?',
      paragraphs: [
        'Los baños de contraste, es decir, pasar el pie de agua tibia a agua fría y al revés, no tienen ningún ensayo para la fascitis plantar que hayamos podido encontrar. Una revisión sistemática de 2009 sobre baños de contraste incluyó 10\u00A0estudios en voluntarios sin lesiones y en personas con artritis reumatoide, diabetes o lesiones de pie y tobillo. Encontró que alternar temperaturas puede aumentar el flujo de sangre en la piel, pero no se demostró ninguna relación con una mejor función (Breger Stanton y colegas).',
        'En internet vas a ver muchas recetas distintas: dos minutos de frío y 30\u00A0segundos de calor, un minuto de frío y tres minutos de calor, terminar siempre con frío. Ninguno de esos tiempos viene de un estudio. Si te gustan los baños de contraste, son de bajo riesgo para la mayoría de las personas con sensibilidad normal en los pies. Solo no esperes más de ellos que del calor o el frío solos.',
      ],
      cites: [CITE.bregerContrast],
    },
    {
      h2: '¿Cómo poner hielo o calor en el talón con seguridad?',
      paragraphs: [
        'El hielo y el calor son de bajo riesgo para la mayoría de las personas, pero los dos pueden lastimar la piel, y el riesgo es mayor en un pie que no siente con normalidad. Ningún ensayo ha establecido el mejor tiempo para aplicar hielo (Bleakley y colegas, 2004), así que los límites de abajo son práctica habitual, no cifras de investigación.',
      ],
      bullets: [
        'Pon un trapo delgado entre el hielo y la piel. Nunca pongas hielo directo sobre la piel.',
        'La mayoría de los consejos limita el hielo a unos 10 a 20\u00A0minutos cada vez, y luego deja que la piel recupere por completo su temperatura antes de la siguiente vez.',
        'Quita el hielo si la piel se pone blanca, dura o entumecida, o si sientes un hormigueo fuerte.',
        'Para el calor, usa tibio, no caliente. Una compresa térmica o el agua tibia deben sentirse agradables, nunca arder.',
        'Nunca te duermas sobre una almohadilla eléctrica ni con una bolsa de hielo en el pie.',
        'No pongas calor en un talón rojo, caliente e hinchado, sobre todo si tienes fiebre. Eso necesita a un profesional de la salud, no una compresa caliente.',
        'Si tienes diabetes, entumecimiento en los pies, mala circulación o Raynaud (dedos de las manos o de los pies que se ponen blancos con el frío), pregunta a un profesional de la salud antes de usar cualquiera de los dos.',
      ],
      after: [
        'Ese último punto importa. En una serie de casos de cinco personas con diabetes y daño en los nervios de los pies, usar calor en los pies les causó quemaduras e infecciones que necesitaron cirugía para limpiar las heridas (Thng y colegas, 1999). Un pie que no siente bien el calor no te puede avisar.',
        'Una botella de agua congelada rodada bajo el arco combina frío con masaje. Tiene su propia página: [pelota de masaje y botella congelada para la fascitis plantar](/es/pelota-de-masaje-fascitis-plantar/), con la técnica en [masaje plantar con pelota](/es/ejercicios/masaje-plantar-con-pelota/).',
      ],
      cites: [CITE.bleakleyIce, CITE.thngBurns],
    },
    {
      h2: '¿Qué ayuda de verdad con la fascitis plantar a largo plazo?',
      keyFact: 'En un ensayo con 48\u00A0personas, las elevaciones de talón lentas con una toalla bajo los dedos aliviaron el dolor más rápido que solo estirar a los tres meses, y a los doce meses los dos grupos estaban igualados (Rathleff y colegas, 2015).',
      paragraphs: [
        'La parte del manejo de la fascitis plantar con la evidencia más fuerte es el ejercicio, no la temperatura. La guía de 2023 le da al estiramiento de la fascia plantar y de la pantorrilla su grado más alto, **A**, y al entrenamiento de fuerza del pie y el tobillo una **B**. En un ensayo de 2003 con 101\u00A0personas, un estiramiento de la fascia plantar ayudó más que solo un estiramiento de pantorrilla después de unos dos meses (DiGiovanni y colegas). En un ensayo de 2015 con 48\u00A0personas, las elevaciones de talón lentas con una toalla bajo los dedos aliviaron el dolor más rápido que solo estirar a los tres meses, aunque a los doce meses los dos grupos estaban más o menos igualados (Rathleff y colegas).',
        'Usa el hielo o el calor alrededor de estos ejercicios: calor antes de estirar, hielo después de un día largo, si alguno te ayuda. Walkito funciona igual: los estiramientos y el trabajo de pantorrilla son el plan, y el masaje con pelota es un paso de recuperación de 60\u00A0segundos, no lo principal. La lista completa está en [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          dose: 'En el ensayo: 10\u00A0repeticiones de 10\u00A0segundos. Walkito empieza con 2\u00A0repeticiones de 30\u00A0segundos, cada pie',
          often: 'Cada mañana antes del primer paso, y después de estar sentado',
          feel: 'Un tirón a lo largo del arco, no dolor agudo',
          stop: 'Dolor de 6/10',
          how: 'Siéntate y cruza un tobillo sobre la otra rodilla. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. Mantén y suelta. Un pie caliente puede estirarse con más facilidad.',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás con suavidad antes de pararte',
          alt: 'Una figura sentada jala los dedos hacia atrás para estirar el arco',
          evidence: { level: 'strong', why: 'Grado A en la guía. Un ensayo de 2003 con 101\u00A0personas lo favoreció sobre solo un estiramiento de pantorrilla.' },
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          dose: 'Walkito empieza con 2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          often: 'La mayoría de los días',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor de 6/10',
          how: 'Manos en una pared, pierna de atrás estirada, talón abajo, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla.',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, inclínate hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada',
          evidence: { level: 'strong', why: 'Grado A en la guía para el estiramiento de pantorrilla y de fascia plantar.' },
        },
        {
          name: 'Elevaciones de talón con dos pies',
          dose: 'Walkito empieza con 3\u00A0series de 10',
          often: 'Días de fuerza, nunca dos seguidos',
          feel: 'Trabajo en las dos pantorrillas',
          stop: 'Dolor de 6/10, o la mañana siguiente está claramente peor',
          how: 'Párate agarrado de una pared, sube en puntas en unos tres segundos y baja en unos tres segundos. Es el primer paso hacia la elevación de talones con toalla del ensayo con 48\u00A0personas, que se explica en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: sube despacio, baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies',
          evidence: { level: 'moderate', why: 'Grado B en la guía para el entrenamiento de fuerza. Esta versión con dos pies no se probó por separado.' },
        },
        {
          name: 'Automasaje plantar',
          dose: 'Walkito empieza con 1\u00A0ronda de 60\u00A0segundos',
          often: 'Después de una sesión o de un día largo',
          feel: 'Presión firme bajo el arco, nunca dolor agudo',
          stop: 'Te hace torcer la cara, o la planta está más adolorida a la mañana siguiente',
          how: 'Siéntate y rueda la planta despacio sobre una pelota. Una botella de agua congelada añade frío, si así se siente mejor.',
          media: 'foot_roll',
          caption: 'Automasaje plantar: presión lenta y firme bajo el arco',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota',
          evidence: { level: 'early', why: 'Un paso de alivio. Rodar el pie, con o sin frío, solo tiene detrás estudios pequeños y preliminares.' },
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Debo ponerle hielo o calor a la fascitis plantar?',
      cites: [CITE.guideline],
      a: 'Usa el que se sienta mejor, porque ninguno tiene evidencia fuerte para la fascitis plantar. La guía de 2023 para el dolor de talón encontró solo un ensayo pequeño sobre calor y no hizo ninguna recomendación sobre el calor ni el frío. A mucha gente le gusta el hielo después de un día largo de pie y el calor antes de estirar. Los dos son alivio a corto plazo. Los estiramientos y el trabajo de fuerza de pantorrilla son lo que recomienda la guía.',
    },
    {
      q: '¿Cuánto tiempo debo ponerme hielo en el talón por la fascitis plantar?',
      cites: [CITE.bleakleyIce],
      a: 'Lo habitual es unos 10 a 20\u00A0minutos cada vez, con un trapo delgado entre el hielo y la piel, y luego dejar que la piel recupere por completo su temperatura antes de volver a ponerlo. Ningún ensayo ha encontrado un tiempo ideal: una revisión de 22\u00A0ensayos de hielo no encontró evidencia de una duración óptima. Quítalo antes si la piel se pone blanca, entumecida o dura.',
    },
    {
      q: '¿El calor empeora la fascitis plantar?',
      cites: [CITE.petrofskyHeat, CITE.lemontFasciosis],
      a: 'No hay ningún ensayo que muestre que el calor empeora la fascitis plantar. Esa advertencia viene de la idea de que la fascia está inflamada, pero el tejido de casos de larga duración mostró degeneración sin inflamación. En un ensayo pequeño con 20\u00A0personas con dolor en la planta del pie, el dolor bajó con un parche de calor, pero no con un parche falso. Evita el calor en un talón rojo, caliente e hinchado.',
    },
    {
      q: '¿Está bien ponerle hielo a la fascitis plantar en la mañana?',
      cites: [CITE.guideline],
      a: 'Puedes, pero en la mañana el pie está más rígido, y el frío no lo va a aflojar. El paso más útil en la mañana es un estiramiento de la fascia plantar antes del primer paso. La guía de 2023 le da al estiramiento un grado A, su grado más alto. Un baño caliente o calcetines calientitos antes de estirar pueden sentirse mejor que el hielo. Deja el hielo para más tarde, después de pasar tiempo de pie.',
    },
    {
      q: '¿Rodar una botella de agua congelada ayuda con la fascitis plantar?',
      cites: [CITE.shindeFrozenBall],
      a: 'Puede aliviar el dolor, pero la evidencia es escasa. En un estudio pequeño con 30\u00A0personas, añadir una pelota de tenis congelada a los estiramientos durante dos meses bajó el dolor más que solo estirar, pero la asignación a los grupos no quedó clara y no se puede separar el frío del rodar. Es un paso de alivio razonable junto con los estiramientos y el trabajo de pantorrilla, no un reemplazo de ellos.',
    },
    {
      q: '¿Puedo usar hielo o calor si tengo diabetes?',
      cites: [CITE.thngBurns],
      a: 'Pregunta primero a un profesional de la salud. La diabetes puede reducir la sensibilidad en los pies, así que puede que no notes que la piel se está calentando o enfriando demasiado hasta que ya está dañada. En una serie de casos de cinco personas con daño en los nervios por diabetes que usaron calor en los pies, todas tuvieron quemaduras que necesitaron cirugía para limpiarlas. La misma precaución aplica si tienes mala circulación o entumecimiento.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída, o vino con hinchazón o moretón repentinos',
      'no puedes apoyar el pie, o cojeas',
      'apretar los lados del talón reproduce el dolor, lo que puede apuntar a una fractura por estrés',
      'viene con entumecimiento, hormigueo o ardor',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'tienes diabetes, entumecimiento en los pies, mala circulación o Raynaud, antes de usar hielo o calor',
      'la piel se queda blanca, entumecida, con ampollas o muy roja después del hielo o el calor',
      'no ha mejorado después de varias semanas de estiramiento diario y menos carga',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'El hielo y el calor pueden quitarle lo peor a un mal día. El plan de ejercicios es la parte que respalda la guía. Walkito arma ese plan una semana a la vez en torno a una meta principal. Para el dolor de talón, la primera meta es una mejor mañana: dolor de 1 de 10 o menos durante 14\u00A0días seguidos. Los estiramientos están en el plan desde la primera semana, y el masaje con pelota aparece como un paso corto de recuperación.',
    more: [
      'Cada semana, solo el ejercicio de tu meta principal puede cambiar. Sube un nivel cuando tus últimas dos sesiones con él se sintieron fáciles y el dolor de la mañana no subió, y baja un nivel si una sesión se sintió difícil o el dolor de la mañana subió 2\u00A0puntos o más.',
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio cada 14\u00A0días al principio, y luego cada 28 una vez que alcanzas una meta, para que veas qué está cambiando. Walkito es un programa de ejercicios para adultos. No diagnostica y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Hielo o calor',
  campaign: 'guide-ice-heat-es',
};
