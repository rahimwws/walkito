import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Spanish version of articles/can-plantar-fasciitis-cause-knee-pain.ts
 * (2026-10-18), written around «fascitis plantar dolor de rodilla» and
 * «¿la fascitis plantar puede causar dolor de rodilla?», with cadera and
 * espalda as secondary searches. Latin American Spanish with «tú», like the
 * rest of /es/. Figures, grades, doses and sources are identical to the
 * English page after its fact-check.
 */

export const PF_KNEE_HIP_BACK_ES: Guide = {
  lang: 'es',
  page: 'pfKneeHipBack',
  mainSource: CITE.kamonseki,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascitis plantar y dolor de rodilla, cadera o espalda',
  description:
    '¿La fascitis plantar puede causar dolor de rodilla, cadera o espalda? Qué muestran los estudios de la marcha, qué falta probar, ejercicios y alertas.',
  h1: '¿La fascitis plantar puede causar dolor de rodilla, cadera o espalda?',
  lede:
    'Puede contribuir, pero nadie lo ha demostrado. Un talón adolorido cambia tu forma de caminar: los estudios de la [fascitis plantar](/es/fascitis-plantar/) muestran que las personas apoyan menos peso en el talón y más en la parte delantera del pie (Phillips y McClinton, 2017), y ese cambio puede cargar de otra manera la rodilla, la cadera y la espalda. Ningún estudio ha seguido a personas con dolor de talón para ver si después empieza el dolor de rodilla, cadera o espalda, así que la evidencia muestra relaciones, no una causa.',
  intro: [
    'Esta página revisa la rodilla, la cadera, la espalda, la pantorrilla y el tobillo uno por uno, dice qué encontraron los estudios y qué tan grandes fueron, explica qué significa el único ensayo de fortalecimiento de cadera en la fascitis plantar (Kamonseki y colegas, 2016) y da los ejercicios y las dosis que encajan. Si el dolor de rodilla o de espalda llegó primero, o tienes pie plano, mira mejor [pie plano y dolor de rodilla](/es/pie-plano-y-dolor-de-rodilla/) y [pie plano y dolor de espalda](/es/pie-plano-y-dolor-de-espalda/).',
  ],
  takeaways: [
    'En una revisión de 19\u00A0estudios de la marcha, las personas con dolor en la planta del talón cargaban menos el talón y más el mediopié y el antepié, mientras que el tiempo sobre cada pie se mantuvo más o menos igual (Phillips y McClinton, 2017).',
    'En 18\u00A0personas sin dolor de pie, una bolita dolorosa bajo el talón bastó para acortar el tiempo que pasaban apoyadas en esa pierna en cada paso (Levins y colegas, 1998).',
    'Entre 40\u00A0personas con osteoartritis de rodilla, el 52\u00A0% tenía dolor de talón y el 62\u00A0% tenía la fascia plantar engrosada en la ecografía. El estudio no tuvo grupo de comparación, así que no puede mostrar qué causó qué (Miladi y colegas, 2023).',
    'En un ensayo con 83\u00A0personas con fascitis plantar, sumar fortalecimiento de pie y de cadera a los estiramientos no redujo el dolor de talón más que los estiramientos solos en ocho semanas. Los tres grupos mejoraron (Kamonseki y colegas, 2016).',
    'Una pantorrilla tensa es la relación mejor estudiada: las personas con 0\u00A0grados de flexión del tobillo o menos tenían 23,3\u00A0veces más probabilidades de fascitis plantar que las de más de 10\u00A0grados (Riddle y colegas, 2003).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿La fascitis plantar puede causar dolor en otras partes de la pierna?',
      keyFact: 'Una revisión de 19\u00A0estudios de la marcha encontró que las personas con dolor en la planta del talón pasan la carga del talón hacia el mediopié y el antepié (Phillips y McClinton, 2017).',
      paragraphs: [
        '**Probablemente a veces, por la forma de caminar.** La fascitis plantar no se extiende pierna arriba. Lo que cambia es cómo caminas. Cuando el talón duele, lo apoyas con más cuidado, empujas con menos fuerza al despegar y te cargas en la parte delantera del pie. Una revisión de 2017 de 19\u00A0estudios encontró justo ese patrón: menos carga en el talón al primer contacto, y más tiempo y más carga en el mediopié y el antepié.',
        'El cambio puede ser tan pequeño que no lo notes. En esa revisión, el tiempo total que cada pie pasaba en el piso era más o menos el mismo que en personas sin dolor de talón. En un estudio de laboratorio, 18\u00A0personas sin dolor de pie caminaron con una bolita bajo el talón, y con las bolitas más grandes pasaron menos tiempo apoyadas en esa pierna (Levins y colegas, 1998). Eso es una cojera leve, al menos en una prueba corta de laboratorio con un dolor repentino.',
        'Así está la evidencia para cada zona:',
      ],
      table: {
        caption: 'Fascitis plantar y dolor en otras zonas: qué muestran los estudios',
        head: ['Zona', 'Estudios directos', 'Solidez'],
        rows: [
          ['Pantorrilla', 'Pantorrilla tensa relacionada con fascitis plantar', 'Moderada'],
          ['Tobillo y Aquiles', 'Fascia más gruesa con cambios en el Aquiles', 'Baja'],
          ['Rodilla', 'Dolor de talón común en la artrosis de rodilla', 'Baja'],
          ['Cadera', 'Control de cadera distinto en corredores', 'Baja'],
          ['Espalda', 'Ningún estudio en fascitis plantar', 'Ninguna'],
        ],
      },
      after: [
        '«Baja» significa estudios pequeños que midieron las dos cosas en un mismo momento. Muestran que los dos problemas suelen ir juntos. No pueden mostrar que el talón causó el otro dolor, ni al revés.',
      ],
      cites: [CITE.phillipsGait, CITE.levinsGait],
    },
    {
      h2: '¿La fascitis plantar puede causar dolor de rodilla?',
      keyFact: 'Entre 40\u00A0personas con osteoartritis de rodilla, el 52\u00A0% tenía dolor de talón y el 62\u00A0% tenía la fascia plantar engrosada en la ecografía (Miladi y colegas, 2023).',
      paragraphs: [
        '**Los dos suelen aparecer juntos, pero ningún estudio muestra que el talón cause el dolor de rodilla.** El estudio más cercano revisó a 40\u00A0personas con osteoartritis de rodilla. 21 de ellas (52\u00A0%) tenían dolor de talón, y una ecografía mostró la fascia plantar engrosada en 25 (62\u00A0%). Las personas con fascitis plantar tenían con más frecuencia un tobillo rígido que no se doblaba bien hacia arriba (Miladi y colegas, 2023).',
        'Ese estudio no tuvo un grupo de comparación de personas sin artrosis de rodilla, así que no puede decir que el dolor de talón sea más común de lo normal. Los autores señalan que los dos problemas comparten factores de riesgo: la edad, el peso, el tipo de trabajo y los zapatos que no quedan bien. Un tobillo rígido podría ser el vínculo común, más que una articulación causando el problema de la otra.',
        'Si la rodilla del mismo lado empezó a doler después de que comenzó el dolor de talón, y mejora a medida que el talón se calma, un cambio en la forma de caminar es una explicación razonable. Si la rodilla se hincha, se traba, se engancha o falla, tiene su propio problema y necesita su propia revisión.',
        'Para el dolor alrededor de la rótula, la guía de 2019 para el dolor patelofemoral recomienda ejercicio que combine la cadera y la rodilla (Willy y colegas, 2019). Si además tienes pie plano, la parte del pie en el tema de la rodilla está en [pie plano y dolor de rodilla](/es/pie-plano-y-dolor-de-rodilla/).',
      ],
      cites: [CITE.miladiKneeOa, CITE.willyPfpGuideline],
    },
    {
      h2: '¿La fascitis plantar puede causar dolor de cadera?',
      keyFact: 'Los corredores con fascitis plantar mostraron menos actividad del glúteo medio y más caída de la pelvis que los corredores sin ella, en un estudio de 15 frente a 15 (Kongtong y Khongprasert, 2025).',
      paragraphs: [
        '**Hay una relación con la cadera, pero no se sabe qué viene primero.** Un estudio de laboratorio de 2025 comparó a 15\u00A0corredores de larga distancia con fascitis plantar y 15 sin ella. Los corredores con dolor de talón usaban menos el glúteo medio y el glúteo mayor, los músculos del costado y de atrás de la cadera, en ciertos momentos de la zancada. Su pelvis bajaba más del otro lado, y la rodilla y el talón se inclinaban más hacia adentro (Kongtong y Khongprasert, 2025).',
        'Eso encaja con dos explicaciones, y el estudio no puede elegir entre ellas. Un control débil de la cadera podría dejar que la pierna gire hacia adentro y cargue más el arco. O el dolor de talón podría cambiar tu forma de correr, y la cadera lo sigue. Ningún estudio ha medido el dolor de cadera en personas con fascitis plantar.',
        'Un estudio de 2009 con 25\u00A0corredoras con antecedentes de fascitis plantar y 25\u00A0corredoras comparables encontró que el grupo con fascitis plantar aterrizaba con un aumento más rápido de la fuerza y tenía arcos más bajos, pero no hubo diferencia en el movimiento del retropié y, a diferencia de los estudios de la pantorrilla, tenía más flexión del tobillo (Pohl y colegas, 2009). Si corres, encontrarás más en [ejercicios de pies para corredores](/es/ejercicios-de-pies-para-corredores/).',
      ],
      cites: [CITE.kongtongHip, CITE.pohlRunners],
    },
    {
      h2: '¿La fascitis plantar puede causar dolor de espalda?',
      keyFact: 'Ningún estudio ha medido si la fascitis plantar lleva al dolor lumbar. Para el pie plano, el Framingham Foot Study con 1930\u00A0adultos no encontró relación con la postura del pie de pie (Menz y colegas, 2013).',
      paragraphs: [
        '**No encontramos ningún estudio que pruebe si la fascitis plantar lleva al dolor de espalda.** Algunas páginas de clínicas dicen que la cojera por dolor de talón «con frecuencia» causa dolor de espalda. Es una cadena posible, no una medida.',
        'La evidencia más cercana trata de la forma del pie, no del dolor de talón. En el Framingham Foot Study, la postura de pie plano no se relacionó con el dolor lumbar, y solo un pie que giraba hacia adentro al caminar mostró una relación pequeña, en mujeres (Menz y colegas, 2013). Los detalles están en [pie plano y dolor de espalda](/es/pie-plano-y-dolor-de-espalda/), así que no los repetimos aquí.',
        'El dolor lumbar es muy común, y en la mayoría de las personas no se encuentra una sola causa (Hartvigsen y colegas, 2018). Así que, si te duele la espalda, el talón es un posible factor entre muchos. El ejercicio es el enfoque con más respaldo para el dolor de espalda que dura mucho tiempo: una revisión Cochrane de 2021 con 249\u00A0ensayos encontró que bajó el dolor unos 15\u00A0puntos en una escala de 100\u00A0puntos (Hayden y colegas, 2021).',
      ],
      cites: [CITE.menz, CITE.hartvigsen, CITE.haydenExercise],
    },
    {
      h2: '¿La fascitis plantar puede causar dolor de pantorrilla o de tobillo?',
      keyFact: 'En 254\u00A0personas con fascitis plantar, del 52 al 60\u00A0% tenía tenso solo el gastrocnemio, el músculo más grande de la pantorrilla (Patel y DiGiovanni, 2011).',
      paragraphs: [
        '**La pantorrilla es la relación mejor estudiada, y puede ir de la pantorrilla al talón.** Una pantorrilla tensa limita cuánto se dobla el tobillo. En un estudio de casos y controles con 50\u00A0personas con fascitis plantar y 100 sin ella, las personas con 0\u00A0grados de flexión del tobillo o menos tenían 23,3\u00A0veces más probabilidades de fascitis plantar que las de más de 10\u00A0grados (Riddle y colegas, 2003). En 254\u00A0personas con fascitis plantar, del 52 al 60\u00A0% tenía tenso solo el gastrocnemio (Patel y DiGiovanni, 2011).',
        'Así que una pantorrilla tensa junto con dolor de talón es común, y estirarla es parte del plan para el dolor de talón. Más sobre eso en [pantorrillas tensas](/es/pantorrillas-tensas/).',
        'La fascia plantar y el tendón de Aquiles también están relacionados. En 52\u00A0resonancias magnéticas, las personas con cambios en el Aquiles tenían una fascia plantar más gruesa, 3,43\u00A0mm en promedio frente a 2,09\u00A0mm (Stecco y colegas, 2013). Si el dolor está en la parte de atrás del talón y no debajo, lee [fascitis plantar o tendinitis de Aquiles](/es/fascitis-plantar-o-tendinitis-de-aquiles/).',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.steccoPfAchilles],
    },
    {
      h2: '¿Fortalecer la cadera ayuda con la fascitis plantar?',
      keyFact: 'En 83\u00A0personas con fascitis plantar, los estiramientos solos, los estiramientos con fortalecimiento de pie, y los estiramientos con fortalecimiento de pie y de cadera mejoraron el dolor y la función en ocho semanas, sin diferencia entre ellos (Kamonseki y colegas, 2016).',
      paragraphs: [
        '**Para el talón en sí, sumar trabajo de cadera no funcionó mejor que los estiramientos en el único ensayo que lo probó.** En 2016, Kamonseki y colegas dividieron a 83\u00A0personas con fascitis plantar en tres grupos durante ocho semanas:',
        {
          list: [
            'Solo estiramientos.',
            'Estiramientos más fortalecimiento de pie.',
            'Estiramientos más fortalecimiento de pie y de cadera (los músculos que levantan la pierna hacia el costado y la giran hacia afuera).',
          ],
        },
        'Los tres grupos mejoraron en dolor de talón, función en el día a día y una prueba de alcance y equilibrio, y ningún grupo le ganó a los otros.',
        'Lo que esto significa en la práctica:',
        {
          list: [
            'Los estiramientos siguen siendo la base. La guía de 2023 para el dolor de talón califica los estiramientos de fascia plantar y de pantorrilla con **A**, su grado más alto, y el trabajo de fuerza con **B** (Koc y colegas, 2023).',
            'El trabajo de cadera no es un atajo para el talón. Un ensayo, ocho semanas y 83\u00A0personas no bastan para descartar un beneficio, pero no lo mostró.',
            'El ensayo no midió el dolor de rodilla, de cadera ni de espalda. Si te duelen, fortalecer la cadera sigue siendo una adición sensata, y para el dolor de rótula la guía de ese problema respalda el ejercicio de cadera y rodilla (Willy y colegas, 2019).',
          ],
        },
      ],
      cites: [CITE.kamonseki, CITE.guideline, CITE.willyPfpGuideline],
    },
    {
      h2: '¿Qué ejercicios ayudan cuando el dolor de talón sube por la pierna?',
      paragraphs: [
        'Empieza por el talón: los estiramientos y el trabajo de pantorrilla de la guía de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). Después suma trabajo de cadera y de equilibrio para la pierna de arriba. Las dosis de abajo son las dosis iniciales de Walkito de las guías de dolor de talón y de pie plano.',
        'Mantente en un nivel en el que el talón no esté peor a la mañana siguiente. Si caminar es lo que lo provoca, [caminar con fascitis plantar](/es/caminar-con-fascitis-plantar/) explica cómo seguir moviéndote sin un brote.',
      ],
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Mantén la pierna de atrás estirada, el talón de atrás bien apoyado en el piso y la cadera hacia adelante. Una pantorrilla tensa jala del talón todo el día, así que este estiramiento importa aunque lo sientas más arriba.',
          stop: 'Dolor agudo en el talón, o dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón apoyado, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: { level: 'strong', why: 'La guía de 2023 para el dolor de talón califica los estiramientos con A, su grado más alto.' },
          dose: '2 series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición, con el talón de atrás bien apoyado en el piso, y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          stop: 'Dolor agudo en el talón, o dolor en la pantorrilla que sigue después de parar',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: talón de atrás apoyado, dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de las pantorrillas resaltada',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'La guía de 2023 califica el trabajo de fuerza con B. Este paso no se probó por separado.' },
          dose: '3 series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies, sube en línea recta sobre los dedos gordos y baja despacio. Los dos pies se reparten la carga mientras la pantorrilla se activa.',
          stop: 'Dolor de talón por encima de 6 de 10, o peor a la mañana siguiente',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube en línea recta sobre los dedos gordos y baja despacio',
          alt: 'Una figura de pie se eleva sobre las puntas de los dos pies, con la pantorrilla resaltada',
        },
        {
          name: 'Abducción de cadera',
          evidence: { level: 'early', why: 'El fortalecimiento de cadera formó parte de un ensayo en fascitis plantar (Kamonseki 2016), pero no sumó nada a los estiramientos para el dolor de talón en ocho semanas.' },
          dose: '3 series de 10, cada pierna',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte externa de la cadera',
          how: 'Párate con una banda elástica y levanta una pierna hacia el costado contra la banda. Empuja con el talón, no con los dedos. Mantén el cuerpo derecho y no te inclines hacia el otro lado. Una cadera que cede deja caer la carga sobre el arco.',
          stop: 'Dolor agudo en la cadera o en la ingle',
          image: 'Ejercicio: abducción de cadera',
          media: 'hip_abduction',
          caption: 'Abducción de cadera: levanta una pierna hacia el costado contra la banda',
          alt: 'Una figura de pie con una banda alrededor de las dos piernas levanta una pierna hacia el costado, con la parte externa de la cadera resaltada',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: { level: 'early', why: 'Un añadido propio de Walkito. El equilibrio mejoró en todos los grupos del ensayo de 2016, pero este ejercicio no se probó por separado.' },
          dose: '3 series de 20\u00A0segundos, cada pierna',
          often: 'Días de equilibrio',
          feel: 'Pequeñas correcciones en el pie, el tobillo y la cadera',
          how: 'Párate en un pie y mira un punto fijo al frente. Deja que el pie se tambalee. Así debe ser, porque ese tambaleo es el pie haciendo el trabajo de equilibrio. Mantén la pelvis nivelada para que también trabaje la cadera del lado en el que estás parado. Si lo necesitas, toca ligeramente una barra o una pared con la punta de los dedos. Más en [equilibrio a una pierna](/es/ejercicios/equilibrio-a-una-pierna/).',
          stop: 'Dolor agudo en el pie o el tobillo, no solo tambaleo',
          image: 'Ejercicio: equilibrio a una pierna',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: párate en un pie y deja que haga pequeñas correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
      ],
      cites: [CITE.guideline, CITE.kamonseki],
    },
    {
      h2: '¿Cómo saber si el dolor de rodilla, cadera o espalda no viene del talón?',
      keyFact: 'Las causas graves del dolor de espalda son raras, y un marco internacional enumera las señales de alerta que los profesionales revisan primero (Finucane y colegas, 2020).',
      paragraphs: [
        'Un cambio en la forma de caminar es solo una explicación. Estas señales apuntan a un problema aparte que necesita su propia revisión:',
        {
          list: [
            '**El otro dolor llegó primero,** o no tiene nada que ver con cuánto caminas.',
            '**La rodilla se hincha, se traba, se engancha o falla.** Son señales de un problema dentro de la rodilla.',
            '**El dolor está en la ingle,** o sientes la cadera rígida al ponerte calcetines o zapatos.',
            '**El dolor baja por la pierna más abajo de la rodilla, con adormecimiento, hormigueo o debilidad.** Puede venir de un nervio de la espalda, y un dolor de talón con ardor u hormigueo también puede ser dolor de nervio.',
            '**Dolor de noche o en reposo** que no se alivia al cambiar de posición. Mira también [dolor de talón por la noche](/es/dolor-de-talon-por-la-noche/).',
          ],
        },
        'Los profesionales usan una lista corta de señales de alerta para descartar problemas graves y raros de la columna (Finucane y colegas, 2020). Están en la lista de abajo.',
      ],
      cites: [CITE.finucaneRedFlags],
    },
  ],
  faq: [
    {
      q: '¿La fascitis plantar puede causar dolor de rodilla?',
      cites: [CITE.phillipsGait, CITE.miladiKneeOa],
      a: 'Puede contribuir, pero no está demostrado. Al caminar, el dolor de talón pasa la carga hacia la parte delantera del pie, y eso cambia cómo se carga la rodilla. Entre 40\u00A0personas con artrosis de rodilla, el 52\u00A0% tenía dolor de talón, pero sin grupo de comparación el estudio no puede mostrar que uno causó el otro.',
    },
    {
      q: '¿La fascitis plantar puede causar dolor de cadera?',
      cites: [CITE.kongtongHip],
      a: 'Es posible, pero ningún estudio ha medido el dolor de cadera en personas con fascitis plantar. Un estudio de 2025 con 15\u00A0corredores con fascitis plantar y 15 sin ella encontró menos actividad en los músculos del costado de la cadera y más caída de la pelvis en el grupo con dolor de talón. No pudo decir qué vino primero.',
    },
    {
      q: '¿La fascitis plantar puede causar dolor lumbar?',
      cites: [CITE.menz, CITE.hartvigsen],
      a: 'No hay ningún estudio que lo pruebe. Una cojera por dolor de talón podría sumar tensión, pero esa cadena no se ha medido. En la mayoría de las personas con dolor lumbar no se encuentra una sola causa, y en el Framingham Foot Study la postura de pie plano no se relacionó con el dolor de espalda.',
    },
    {
      q: '¿La fascitis plantar puede causar dolor de pantorrilla?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Una pantorrilla tensa suele ir junto con la fascitis plantar, y la relación puede ir de la pantorrilla al talón. Los estudios midieron la tensión, no el dolor de pantorrilla. Las personas con 0\u00A0grados de flexión del tobillo o menos tenían 23,3\u00A0veces más probabilidades de fascitis plantar, y del 52 al 60\u00A0% de 254\u00A0personas con ella tenía el gastrocnemio tenso.',
    },
    {
      q: '¿El dolor de talón puede causar dolor en la otra pierna?',
      cites: [CITE.levinsGait],
      a: 'En teoría, sí. Cuando un talón duele, puedes pasar menos tiempo apoyado en esa pierna, como mostró una prueba corta de laboratorio en 18\u00A0personas con una bolita dolorosa bajo el talón. Ningún estudio ha medido el dolor en la otra pierna en personas con fascitis plantar.',
    },
    {
      q: '¿Los ejercicios de cadera ayudan con mi fascitis plantar?',
      cites: [CITE.kamonseki],
      a: 'Para el talón en sí, no, según el único ensayo que hay. En 83\u00A0personas durante ocho semanas, sumar fortalecimiento de pie y de cadera a los estiramientos no redujo el dolor de talón más que los estiramientos solos, y todos los grupos mejoraron. El trabajo de cadera puede tener sentido si también te duele la rodilla o la cadera.',
    },
    {
      q: '¿Trabajo primero el talón o la rodilla?',
      cites: [CITE.guideline, CITE.willyPfpGuideline],
      a: 'Puedes trabajar los dos al mismo tiempo. Los estiramientos para el talón y la fuerza de pantorrilla reciben A y B en la guía de 2023 para el dolor de talón, y el ejercicio de cadera y rodilla se recomienda para el dolor de rótula. Si la rodilla se hincha, se traba o falla, haz que la revisen en lugar de esperar a que el talón se calme.',
    },
    {
      q: '¿La fascitis plantar puede causar dolor de tobillo?',
      cites: [CITE.steccoPfAchilles],
      a: 'El dolor en la parte de atrás del talón o alrededor del tendón de Aquiles puede ir junto con la fascitis plantar. En 52\u00A0resonancias magnéticas, las personas con cambios en el Aquiles tenían una fascia plantar más gruesa, 3,43\u00A0mm en promedio frente a 2,09\u00A0mm. El dolor en los costados del tobillo después de una torcedura es otro problema.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor de rodilla, cadera o espalda llegó primero, o no cambia con cuánto caminas',
      'la rodilla se hincha, se traba, se engancha o falla, o no puedes doblarla o estirarla por completo',
      'el dolor baja por la pierna más abajo de la rodilla, o tienes adormecimiento, hormigueo, ardor o debilidad en la pierna o el pie',
      'el dolor te despierta de noche o está presente en reposo y no se alivia al cambiar de posición',
      'tienes dolor de espalda con fiebre, pérdida de peso sin explicación o antecedentes de cáncer',
      'tienes adormecimiento alrededor de la ingle o las nalgas, o problemas nuevos para controlar la vejiga o el intestino: ve a urgencias',
      'el dolor empezó después de una caída, una torcedura o un chasquido, o no puedes apoyar peso en la pierna',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito es una app de ejercicios para el talón y el pie con los ejercicios de esta página: estiramientos de pantorrilla y de sóleo, elevaciones de talón, abducción de cadera y equilibrio a una pierna. Trabaja el talón y la pierna de arriba. No evalúa tu rodilla, tu cadera ni tu espalda, así que haz que las revisen si tienen sus propias señales de alerta.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Antes de cada sesión calificas el dolor de talón de esa mañana, y el plan se ajusta. Una prueba cada 14\u00A0días compara tu lado izquierdo con el derecho. Walkito no diagnostica.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  related: ['heelPain', 'flatFeetKneePain', 'flatFeetBackPain'],
  crumb: 'Fascitis plantar y dolor de rodilla, cadera o espalda',
  campaign: 'guide-can-plantar-fasciitis-cause-knee-pain-es',
};
