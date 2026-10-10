import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const NIGHT_SPLINTS_ES: Guide = {
  lang: 'es',
  page: 'nightSplints',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Férula nocturna para fascitis plantar: ¿funciona?',
  description:
    'Férula nocturna para fascitis plantar: qué dicen la guía de 2023 y los ensayos, bota o calcetín, cuánto tiempo usarla y por qué tanta gente la deja.',
  h1: 'Férula nocturna para la fascitis plantar: qué hace, qué muestran los ensayos y cómo usarla',
  lede:
    'Una férula nocturna para la fascitis plantar mantiene el tobillo en un ángulo más o menos recto mientras duermes, para que la fascia plantar y la pantorrilla no se acorten durante la noche. La guía de 2023 para el dolor de talón le da un grado **A** por uno a tres meses cuando los primeros pasos siguen doliendo. Los ensayos son pequeños y con resultados mixtos, y a mucha gente le cuesta dormir con una.',
  intro: [
    'Esta página habla de la férula en sí: qué encontraron los estudios, qué tipo elegir y cómo acostumbrarte a usarla. Para la rutina completa de la mañana, mira [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/).',
  ],
  takeaways: [
    'La guía de 2023 para el dolor de talón le da a la férula nocturna su grado más alto, **A**, en un programa de uno a tres meses para personas que tienen dolor constante en los primeros pasos de la mañana (Koc y colegas, 2023).',
    'Ese grado se mantuvo de la guía de 2014: la revisión de 2023 no encontró estudios nuevos sobre férulas nocturnas, así que la evidencia es más antigua y escasa (Koc y colegas, 2023).',
    'En un ensayo aleatorizado con 116\u00A0personas, agregar una férula nocturna durante tres meses a pastillas antiinflamatorias, estiramientos y consejos sobre calzado no hizo una diferencia clara: el 68\u00A0% mejoró en general, con o sin férula (Probe y colegas, 1999).',
    'El punto débil es la constancia: en un ensayo con 43\u00A0personas, solo 1 de las 28 que recibieron una férula nocturna la seguía usando al año, frente a 19 de 23 que seguían usando sus plantillas (Roos y colegas, 2006).',
    'El estiramiento matutino de la fascia plantar y de la pantorrilla tiene el mismo grado **A** y no cuesta nada, así que suele ser el primer paso antes de una férula (Koc y colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué hace una férula nocturna en la fascitis plantar?',
      figure: {
        id: 'plantar-fascia',
        caption: 'La fascia plantar va del talón a la base de los dedos. Una férula nocturna evita que descanse en una posición acortada.',
        alt: 'Vista lateral de un pie con la fascia plantar resaltada desde el hueso del talón hasta los dedos',
      },
      paragraphs: [
        'Una férula nocturna para la fascitis plantar es un soporte que usas en la cama y que **evita que el pie apunte hacia abajo mientras duermes.** Cuando estás acostado sin moverte, el pie suele irse a flexión plantar (con los dedos apuntando lejos de ti). En esa posición, la fascia plantar, la banda gruesa de tejido debajo del pie, y la pantorrilla descansan acortadas durante horas.',
        'La férula mantiene el tobillo en posición neutra o en una ligera flexión dorsal (con los dedos un poco jalados hacia la espinilla). La idea es que el tejido se quede con un largo suave durante la noche, para que tus primeros pasos no sean un estirón repentino sobre una fascia rígida y acortada. Ese estirón repentino es la explicación habitual del dolor agudo en los primeros pasos que hace tan reconocible a la fascitis plantar.',
        'La guía de 2023 para el dolor de talón define las férulas nocturnas como «órtesis prefabricadas de plástico que se usan para evitar la flexión plantar del tobillo mientras se duerme». Las versiones más blandas, como las correas y los calcetines, buscan la misma posición con menos estructura.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿La férula nocturna funciona para la fascitis plantar?',
      keyFact: 'La guía de 2023 para el dolor de talón le da un grado **A** a un programa de férula nocturna de uno a tres meses para personas con dolor constante en los primeros pasos de la mañana, pero su actualización de la evidencia no encontró estudios nuevos desde 2014 (Koc y colegas, 2023).',
      paragraphs: [
        'La férula nocturna le funciona a algunas personas con fascitis plantar, sobre todo para el dolor de los primeros pasos de la mañana, pero la investigación que la respalda es más escasa de lo que sugiere su grado. La guía de 2023 para el dolor de talón de la American Physical Therapy Association dice que los profesionales de la salud «deberían indicar un programa de férulas nocturnas de 1 a 3\u00A0meses» a las personas que tienen dolor constante en el primer paso de la mañana. Es un grado **A**, el más alto de la guía.',
        'Pero hay que leer la letra chica. La actualización de la evidencia de la guía dice que no se encontraron estudios nuevos sobre férulas nocturnas desde 2014, así que la recomendación se mantuvo sin cambios. El grado se apoya en unos cuantos ensayos de los años 1990 y 2000.',
        'Dos revisiones dan un panorama más prudente:',
        {
          list: [
            '**Una revisión sistemática de 2023** encontró solo tres ensayos aleatorizados que cumplían sus criterios, y consideró que los tres tenían un riesgo alto de sesgo, es decir, que su diseño podía inclinar los resultados. Concluyó que las férulas parecen mejorar el dolor y la función, pero que hacen falta más estudios.',
            '**Una revisión de 2020 sobre opciones mecánicas** encontró que las férulas combinadas con plantillas funcionaron mejor que cualquiera de las dos por separado.',
          ],
        },
        'Un resumen justo sería este: la férula nocturna es una opción razonable si tus mañanas siguen siendo malas a pesar de estirar, pero no es algo seguro, y los ensayos que existen son pequeños.',
      ],
      cites: [CITE.guideline, CITE.bendoSplintReview, CITE.schuitemaMechanical],
    },
    {
      h2: '¿Qué muestran en realidad los ensayos con férula nocturna?',
      keyFact: 'En el ensayo más grande con férula nocturna, de 116\u00A0personas, agregar una férula durante tres meses no hizo una diferencia clara: el 68\u00A0% mejoró en general de cualquier forma (Probe y colegas, 1999).',
      paragraphs: [
        'Los ensayos con férula nocturna para la fascitis plantar apuntan en direcciones distintas, y la mayoría son pequeños. La tabla de abajo resume los principales en palabras sencillas. Ninguno usó una férula falsa (simulada), y en varios las personas hacían otras cosas al mismo tiempo, así que es difícil aislar lo que aportó la férula.',
      ],
      table: {
        caption: 'Principales estudios de férula nocturna para la fascitis plantar',
        head: ['Estudio', 'Quiénes y qué', 'Qué pasó'],
        rows: [
          ['Batt y colegas, 1996 (aleatorizado)', '40\u00A0personas entraron, 32 terminaron. Pastillas, cojín para el talón y estiramiento de pantorrilla, con o sin férula a medida', 'Los 16\u00A0pies del grupo con férula alcanzaron la meta del estudio (volver a las actividades normales con poca o ninguna molestia), en unos tres meses en promedio. En el grupo sin férula, la alcanzaron 6 de 17.'],
          ['Powell y colegas, 1998 (aleatorizado cruzado)', '37\u00A0personas con fascitis plantar de larga duración. Un mes de férula, nada más', 'El 88\u00A0% de los que terminaron mejoró, y la mejoría se mantuvo el resto del estudio de seis meses.'],
          ['Probe y colegas, 1999 (aleatorizado)', '116\u00A0personas. Pastillas, estiramiento del Aquiles y consejos sobre calzado, con o sin férula durante tres meses', 'El 68\u00A0% mejoró en general. Sin diferencia clara con o sin férula.'],
          ['Martin y colegas, 2001 (aleatorizado)', '255\u00A0personas. Plantillas a medida, soportes de arco comprados en tienda o férulas nocturnas, tres meses', 'Sin diferencia clara en el dolor de los primeros pasos. En algunos grupos abandonaron más personas al principio, en parte porque no toleraban el aparato.'],
          ['Roos y colegas, 2006 (aleatorizado)', '43\u00A0personas. Plantillas, plantillas más férula o solo férula', 'Todos los grupos mejoraron. Al año, el dolor bajó un 62\u00A0% en los grupos con plantillas y un 48\u00A0% con solo la férula.'],
          ['Lee y colegas, 2012 (pequeño, dos grupos)', '28\u00A0personas. Solo plantillas o plantillas más una férula blanda ajustable', 'El dolor bajó en el grupo de plantillas más férula. El grupo de solo plantillas no mostró un cambio claro.'],
        ],
      },
      after: [
        'Fíjate en quiénes participaron en cada estudio. Powell y Batt vieron beneficios claros, y el grupo de Powell tenía un dolor de talón persistente y de larga duración. Probe, el ensayo más grande, se propuso estudiar síntomas más recientes (agudos) y encontró que la férula no agregó nada a lo básico. Una posible lectura, que no se ha probado directamente, es que las férulas ayudan más cuando los primeros pasos habituales no han sido suficientes.',
      ],
      sourceNote: 'Batt 1996: el grupo con férula tardó unos tres meses en promedio en alcanzar el objetivo, y los 6\u00A0pacientes de control que lo alcanzaron, unos dos meses; 8 de 11\u00A0pacientes de control que pasaron a usar férula lo alcanzaron después. Probe 1999: evaluación ciega hasta los tres meses, SF-36 a un promedio de 19\u00A0meses. Roos 2006: 34 de 43 tenían datos a los tres meses y 38 al año; la férula era anterior (delantera). Lee 2012: Foot Function Index a los dos meses, p < 0,001 en el grupo combinado.',
      cites: [CITE.battSplint, CITE.powellSplint, CITE.probeSplint, CITE.martinMechanical, CITE.roosOrthoses, CITE.leeSplint],
    },
    {
      h2: 'Bota, férula dorsal o calcetín Strassburg: ¿qué férula nocturna es mejor?',
      keyFact: 'En una comparación preliminar, dos tercios de las personas dijeron que el dolor y la rigidez de la mañana fueron menores con una férula nocturna, pero el tipo rígido por detrás de la pierna fue menos cómodo y alteró el sueño (Attard y Singh, 2012).',
      paragraphs: [
        'Hay tres tipos comunes de férula nocturna para la fascitis plantar, y ningún buen ensayo muestra que uno sea claramente mejor para el dolor. Se diferencian sobre todo en la comodidad, y eso importa mucho, porque una férula solo hace algo mientras la tienes puesta.',
      ],
      bullets: [
        '**Férula tipo bota (posterior).** Una carcasa rígida detrás de la pantorrilla y debajo del pie, sujeta con correas. Es la que sostiene con más firmeza y muchas veces es ajustable. También es la más voluminosa y la más difícil para dormir, sobre todo de lado.',
        '**Férula dorsal (anterior).** Una carcasa más pequeña sobre el frente de la espinilla y el empeine, que deja libres la planta y el talón. Por lo general mantiene el pie en un ángulo más o menos recto en vez de jalarlo más hacia arriba.',
        '**Tipo calcetín, como el calcetín Strassburg.** Un calcetín largo con una correa de los dedos a la espinilla que evita que el pie apunte hacia abajo. Es ligero y fácil para dormir. No encontramos ningún ensayo aleatorizado que lo haya probado para la fascitis plantar.',
      ],
      after: [
        'La única comparación directa que encontramos es un estudio preliminar pequeño de 2012. Dos tercios de las personas dijeron que el dolor y la rigidez de la mañana fueron menores después de usar una férula. El tipo bota fue más incómodo y alteró el sueño, y el tipo de frente de espinilla bajó más el dolor de talón en promedio. Los autores dijeron que las férulas nocturnas en general se «toleran mal».',
        'Si vas a elegir tú, **la indicada probablemente es la que de verdad vas a mantener puesta toda la noche.** Un médico o un fisioterapeuta puede ayudarte con el ajuste.',
      ],
      cites: [CITE.attardSplint, CITE.guideline],
    },
    {
      h2: '¿Cuánto tiempo hay que usar la férula nocturna para la fascitis plantar?',
      keyFact: 'La guía de 2023 para el dolor de talón recomienda un programa de férula nocturna de uno a tres meses (Koc y colegas, 2023).',
      paragraphs: [
        '**La guía de 2023 recomienda usar una férula nocturna de uno a tres meses.** En los ensayos, las personas la usaron de noche durante un mes (Powell) o tres meses (Probe, Martin).',
        'Cuántas horas por noche está menos claro. No encontramos ningún ensayo que comparara horas de uso. Los fabricantes y las clínicas suelen sugerir empezar con unas horas e ir subiendo hasta toda la noche, lo cual es sensato pero no está probado. Si te despiertas y la férula es insoportable, es mejor quitártela y volver a ponértela la noche siguiente que rendirte la primera noche.',
      ],
      bullets: [
        'Ajústala lo suficiente para sostener el pie, nunca tan apretada que los dedos te hormigueen, se te duerman o cambien de color.',
        'Empieza con un ángulo suave. Mantener el pie en un ángulo más o menos recto es la meta habitual. Más estiramiento no es claramente mejor y hace más difícil dormir.',
        'Usa un calcetín ligero debajo de una férula rígida y revisa tu piel cada mañana por si hay marcas rojas o roces.',
        'Quítatela antes de caminar. Las férulas no están hechas para pararse, y las carcasas pueden ser resbalosas.',
        'Lleva un registro de tus primeros pasos. Califica cada mañana el dolor de tus primeros pasos del 0 al 10. Después de un mes más o menos, sabrás si la férula está cambiando algo.',
      ],
      cites: [CITE.guideline, CITE.powellSplint, CITE.probeSplint, CITE.martinMechanical],
    },
    {
      h2: '¿Por qué la gente deja la férula nocturna y qué ayuda a dormir con ella?',
      keyFact: 'Al año, 1 de las 28\u00A0personas que recibieron una férula nocturna la seguía usando, frente a 19 de 23 que seguían usando plantillas (Roos y colegas, 2006).',
      paragraphs: [
        'La mayoría de las personas dejan de usar la férula nocturna porque es incómodo dormir con ella. En el ensayo de 2006 de Roos y colegas, solo 1 de las 28\u00A0personas que recibieron una férula la seguía usando al año, mientras que 19 de 23 seguían usando sus plantillas. Ese ensayo también encontró menos efectos secundarios y mejor constancia con las plantillas. En el ensayo de Martin de 2001 con 255\u00A0personas, algunas abandonaron al principio porque no toleraban su aparato o seguían con dolor fuerte.',
        '**Que cueste ser constante es normal, no un fracaso personal.** La férula es para uno a tres meses, no para siempre. Algunas cosas prácticas lo hacen más fácil:',
      ],
      bullets: [
        'Si duermes de lado o boca abajo, un tipo calcetín o una férula dorsal pequeña suele acomodarse mejor que una bota.',
        'Si te duele un solo pie, úsala solo en ese pie.',
        'Si la férula no te deja dormir, úsala la primera parte de la noche y quítatela cuando te despiertes, y al día siguiente intenta un poco más de tiempo.',
        'Si te da calor, ayuda un calcetín delgado que absorba el sudor debajo de las correas.',
        'Si después de una o dos semanas sigue arruinando tu sueño, déjala. Dormir mal tiene un costo real, y los estiramientos de la mañana son una alternativa gratis con el mismo grado en la guía.',
      ],
      cites: [CITE.roosOrthoses, CITE.martinMechanical],
    },
    {
      h2: 'Férula nocturna, plantillas o estiramientos: ¿qué probar primero?',
      keyFact: 'En un ensayo con 43\u00A0personas, al año el dolor bajó un 62\u00A0% en los grupos con plantillas y un 48\u00A0% con solo la férula nocturna (Roos y colegas, 2006).',
      paragraphs: [
        '**Por lo general, primero van los estiramientos de la mañana**, porque tienen el mismo grado **A** que la férula nocturna, no cuestan nada y no alteran el sueño. La guía de 2023 le da un grado **A** al estiramiento de la fascia plantar y de la pantorrilla, y un grado **B** al trabajo de fuerza para los músculos del pie y del tobillo. Un metaanálisis de 2020 de ocho ensayos encontró que los estiramientos aliviaron el dolor, con evidencia de calidad moderada de que el estiramiento de la fascia plantar lo alivió más que un estiramiento de pantorrilla.',
        'La férula nocturna y las plantillas parecen funcionar mejor juntas que por separado:',
        {
          list: [
            'En el ensayo de Roos, los dos grupos con plantillas tuvieron más alivio del dolor al año que el grupo de solo férula.',
            'El estudio pequeño de Lee de 2012 encontró que plantillas más férula funcionaron mejor que solo plantillas.',
            'La revisión de 2020 sobre opciones mecánicas llegó a la misma conclusión.',
          ],
        },
        'La guía también recomienda no usar plantillas como lo único que haces para aliviar el dolor a corto plazo. Para más sobre esa pregunta, mira [plantillas o ejercicios](/es/plantillas-o-ejercicios/).',
        'Un orden común es empezar con estiramientos y trabajo de pantorrilla. Si después de un mes más o menos tus primeros pasos siguen siendo malos, agrega una férula de uno a tres meses. Mucha gente usa plantillas al mismo tiempo. Ese orden es una lectura razonable de la guía, no algo que un ensayo haya probado.',
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.roosOrthoses, CITE.leeSplint, CITE.schuitemaMechanical],
    },
    {
      h2: '¿Qué estiramientos de la mañana van con una férula nocturna?',
      paragraphs: [
        'Los dos estiramientos que mejor van con una férula nocturna son el estiramiento de la fascia plantar, en la orilla de la cama antes del primer paso, y un estiramiento de pantorrilla con la rodilla estirada una vez que te levantas. La férula mantiene el tejido alargado durante la noche, y los estiramientos siguen haciéndolo cuando te la quitas. La rutina completa, con trabajo de fuerza y cómo progresar, está en [ejercicios para fascitis plantar](/es/ejercicios-fascitis-plantar/).',
        'Walkito empieza estos estiramientos con 2\u00A0repeticiones de 30\u00A0segundos y puede incluirlos en una sesión corta los días que elijas. No usa ni da férulas.',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar',
          evidence: { level: 'strong', why: 'Grado A en la guía para los estiramientos. En un ensayo de 2003 con 101\u00A0personas con dolor de talón de larga duración, este estiramiento funcionó mejor que un estiramiento de pantorrilla de pie para el dolor de los primeros pasos a los dos meses.' },
          dose: 'Walkito empieza con 2\u00A0repeticiones de 30\u00A0segundos, cada pie',
          how: 'Siéntate en la orilla de la cama después de quitarte la férula. Cruza el pie adolorido sobre la otra rodilla, toma los dedos y jálalos hacia la espinilla hasta sentir un estiramiento a lo largo del arco. Mantén, suelta y repite. Después párate.',
          often: 'Cada mañana antes del primer paso, y después de estar sentado mucho rato',
          feel: 'Un estiramiento a lo largo del arco, no dolor agudo',
          stop: 'El dolor llega a 6/10, o la mañana siguiente está claramente peor',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: dedos jalados hacia atrás, antes del primer paso',
          alt: 'Una figura sentada jala los dedos hacia atrás para estirar el arco, con la fascia plantar resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'Grado A en la guía para el estiramiento de pantorrilla. Un metaanálisis de 2020 encontró que los estiramientos aliviaron el dolor, aunque la evidencia del estiramiento de pantorrilla frente a un estiramiento simulado fue de muy baja calidad.' },
          dose: 'Walkito empieza con 2\u00A0repeticiones de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared, la pierna adolorida atrás y estirada, talón en el piso. Lleva la cadera hacia adelante hasta sentir el estiramiento en la parte alta de la pantorrilla. Mantén estirada la rodilla de atrás.',
          often: 'Una vez que te levantas, y en la mayoría de las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'El dolor llega a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, inclínate hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada y la pantorrilla resaltada',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.siriphorn],
    },
    {
      h2: '¿A quién le puede servir una férula nocturna y quién debería evitarla?',
      paragraphs: [
        '**Una férula nocturna encaja mejor si tu fascitis plantar sigue el patrón clásico**: los primeros pasos al salir de la cama son lo peor del día, y eso sigue pasando a pesar de estirar con regularidad. Es justo el grupo que menciona la guía. En el ensayo de Powell, la respuesta a la férula no dependió del tipo de pie, del peso corporal ni de si se veía un espolón en la radiografía.',
        'Una férula tiene menos sentido si el talón te duele sobre todo mientras estás acostado en la cama, o si te despierta. Es otro patrón, y [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/) explica las causas que vale la pena descartar. Una férula tampoco es buena idea si tienes poca sensibilidad o mala circulación en los pies, porque las correas y las carcasas pueden rozar piel que no sientes.',
        'La fascitis plantar muchas veces se calma con los meses, uses lo que uses, y es una de las razones por las que los ensayos con férulas son difíciles de interpretar. Para tiempos realistas, mira [cuánto dura la fascitis plantar](/es/cuanto-dura-la-fascitis-plantar/).',
      ],
      cites: [CITE.guideline, CITE.powellSplint],
    },
  ],
  faq: [
    {
      q: '¿De verdad funciona la férula nocturna para la fascitis plantar?',
      cites: [CITE.guideline, CITE.probeSplint, CITE.powellSplint],
      a: 'La férula nocturna ayuda a algunas personas con fascitis plantar, sobre todo con el dolor de los primeros pasos de la mañana. La guía de 2023 para el dolor de talón le da un grado A por uno a tres meses cuando los primeros pasos siguen doliendo. Pero los ensayos son pequeños y con resultados mixtos: un ensayo con 37\u00A0personas encontró mejoras claras, mientras que uno con 116\u00A0personas encontró que agregar una férula a los estiramientos y las pastillas no hizo una diferencia clara.',
    },
    {
      q: '¿Cuántas horas por noche debo usar la férula nocturna?',
      cites: [CITE.guideline],
      a: 'Ningún ensayo ha comparado horas de uso, así que no hay una cifra probada. Los ensayos usaron férulas de noche durante uno a tres meses, lo que coincide con la guía de 2023. Mucha gente empieza con unas horas y va subiendo hasta toda la noche. Quítatela si los dedos te hormiguean, se te duermen o cambian de color.',
    },
    {
      q: '¿El calcetín Strassburg es tan bueno como una férula tipo bota?',
      cites: [CITE.attardSplint],
      a: 'Nadie lo sabe con certeza, porque no encontramos ningún ensayo aleatorizado que haya probado el calcetín Strassburg para la fascitis plantar. Un estudio pequeño de 2012 que comparó dos tipos de férula rígida encontró que el tipo bota era menos cómodo y alteraba más el sueño. Como una férula solo ayuda mientras está puesta, un calcetín que sigues usando podría superar a una bota que te quitas.',
    },
    {
      q: '¿Por qué me sigue doliendo el talón en la mañana aunque uso férula nocturna?',
      cites: [CITE.probeSplint, CITE.guideline],
      a: 'La férula no le funciona a todo el mundo, y en el ensayo más grande, con 116\u00A0personas, no agregó un beneficio claro a los estiramientos y otras medidas básicas. Revisa que mantenga tu pie en un ángulo más o menos recto y que se quede puesta la mayor parte de la noche. Sigue haciendo el estiramiento de la fascia plantar antes del primer paso. Si nada cambia después de uno a tres meses, consulta a un profesional de la salud.',
    },
    {
      q: '¿Puedo caminar con la férula nocturna puesta?',
      a: 'No. Las férulas nocturnas están hechas para estar acostado, no para pararse ni caminar. Las carcasas y las suelas pueden ser resbalosas y el ángulo fijo del tobillo te desequilibra, lo que hace más probable una caída, sobre todo de noche. Quítate la férula antes de levantarte, haz el estiramiento de la fascia plantar en la orilla de la cama y después párate.',
    },
    {
      q: '¿La férula nocturna es mejor que las plantillas para la fascitis plantar?',
      cites: [CITE.roosOrthoses, CITE.schuitemaMechanical],
      a: 'No por sí sola. En un ensayo con 43\u00A0personas, al año el dolor bajó un 62\u00A0% en los grupos que usaban plantillas y un 48\u00A0% con solo la férula, y la gente siguió usando las plantillas mucho más tiempo. Una revisión de 2020 encontró que férulas y plantillas juntas funcionaron mejor que cualquiera de las dos sola. Muchos profesionales de la salud usan las dos, junto con estiramientos diarios.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor empezó después de una lesión o una caída, o no puedes apoyar peso en el pie',
      'el dolor de talón te despierta o está presente mientras descansas en la cama',
      'tienes entumecimiento, hormigueo o ardor en el pie o el talón',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación, antes de usar cualquier férula o correa',
      'una férula te deja marcas rojas, ampollas o zonas adoloridas que no desaparecen en una hora después de quitártela',
      'te duelen los dos talones y la rigidez de la mañana dura más de 30\u00A0minutos, sobre todo si tienes otras articulaciones rígidas o hinchadas',
      'nada ha cambiado después de uno a tres meses de estiramientos y férula',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'La férula trabaja de noche. El ejercicio pasa de día. Walkito arma un plan una semana a la vez en torno a una meta. Para el dolor de talón, la primera meta son mañanas más fáciles: dolor en los primeros pasos de 1 de 10 o menos durante 14\u00A0días seguidos. Estiramientos como estos están en el plan desde la primera semana, y el trabajo de fuerza de pantorrilla avanza a tu ritmo.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas la meta de la mañana), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, para que veas qué está cambiando. Walkito es un programa de ejercicios para adultos. No diagnostica, no da férulas y no reemplaza a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Férula nocturna',
  campaign: 'guide-night-splints-es',
};
