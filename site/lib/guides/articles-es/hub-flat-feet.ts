import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Hub: Pie plano. Spanish version of `articles/hub-flat-feet.ts`
 * (2026-10-07). Rewritten 2026-10-26 to mirror the English hub: short answer
 * to «pie plano» / «pies planos», causes, then routes to
 * /es/ejercicios-pie-plano/, /es/test-pie-plano/, /es/dolor-en-el-arco-del-pie/
 * and /es/ejercicios-tendon-tibial-posterior/ instead of repeating them.
 * Figures, grades and qualifiers are identical to English.
 */

export const HUB_FLAT_FEET_ES: Guide = {
  lang: 'es',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-07',
  updated: '2026-10-26',
  title: 'Pie plano: qué es, causas y cuándo preocuparse',
  description:
    'Qué es el pie plano, qué lo causa, flexible o rígido, cuándo consultar y dónde encontrar el test, los ejercicios y la guía de dolor en el arco.',
  h1: 'Pie plano: qué es, qué lo causa y cuándo prestarle atención',
  lede:
    'Tener pie plano (pes planus) significa que el arco de la parte interna del pie queda bajo o toca el suelo cuando estás de pie. La mayoría de los pies planos son flexibles, de toda la vida y no duelen: una variación normal en la forma del pie. Los casos que merecen atención son el pie plano rígido y el arco que se hunde en la edad adulta, casi siempre porque se debilita el tendón tibial posterior.',
  takeaways: [
    'Una revisión sistemática de 2023 con 12\u00A0estudios de población calculó que alrededor del 15,6\u00A0% de las personas tiene pie plano, más en niños pequeños y personas con obesidad (Salinas-Torres y colegas, 2023).',
    'La mayoría de los pies planos son flexibles: el arco vuelve cuando el pie no toca el suelo. Un pie plano rígido sigue plano y no va a cambiar con ejercicio.',
    'El Framingham Foot Study, con unos 1900\u00A0adultos, no encontró relación entre el pie plano y el dolor de espalda baja (Menz y colegas, 2013).',
    'Un arco que baja en la edad adulta, con dolor o hinchazón en la parte interna del tobillo, suele ser una disfunción del tendón tibial posterior y conviene que lo revise un profesional de la salud (Ling y Lui, 2017).',
    'En un ensayo con 52\u00A0personas con pie plano flexible, seis semanas de ejercicios combinados cambiaron la forma del arco más que en un grupo de control. Midió la forma del arco, no el dolor (Brijwasi y Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es el pie plano?',
      figure: { id: 'arches', caption: 'Los mismos huesos del pie con pie plano, arco típico y arco alto, vistos desde el lado interior.', alt: 'Tres pies vistos desde el lado interior sobre un suelo plano: un pie plano con el arco apoyado en el suelo, un arco típico con un pequeño espacio debajo y un arco alto con un gran espacio bajo el centro del pie.' },
      keyFact: 'Una revisión sistemática de 2023 con 12 estudios de población y unas 16\u00A0000 personas encontró una frecuencia general del 15,6\u00A0%, más alta en niños pequeños, adolescentes y personas con obesidad (Salinas-Torres y colegas, 2023).',
      paragraphs: [
        'El arco de la parte interna del pie, llamado arco longitudinal medial, lo forman huesos, ligamentos y tendones. En un pie plano este arco queda bajo o desaparece cuando estás de pie. El término médico es pes planus y el nombre común, «arcos caídos». A veces «arcos caídos» se usa solo para un arco que bajó en la edad adulta.',
        'Los pies planos son comunes. Solo en adultos, las cifras van de alrededor del 5 al 27\u00A0%, según la población y el método de medición.',
        '**Tener pie plano no significa que algo esté mal.** Mucha gente con arcos bajos camina, corre y pasa horas de pie sin ningún síntoma. Lo que importa es si el pie es flexible o rígido, y si duele.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: '¿Qué causa el pie plano?',
      paragraphs: [
        'El pie plano tiene unas pocas causas, y saber cuál es la tuya indica si importa:',
        {
          list: [
            '**Cómo se formó el pie.** La mayoría de los pies planos son de toda la vida y simplemente la forma del pie. Casi todos los niños pequeños tienen pie plano, y el arco suele formarse entre los 6 y los 10\u00A0años. Mira [pie plano en niños](/es/pie-plano-en-ninos/).',
            '**Un puente de hueso entre dos huesos del pie.** La coalición tarsiana es una causa de pie plano rígido, que sigue plano incluso sin apoyar el pie (Mehdi y colegas, 2024).',
            '**Un tendón que se debilita en la edad adulta.** Cuando el tendón tibial posterior, que sostiene el arco desde la parte interna del tobillo, se estira o se rompe, un arco que era normal puede hundirse. Es el pie plano adquirido del adulto, explicado más abajo.',
            '**Otras causas.** Con menos frecuencia, el arco baja después de una lesión o junto con otro problema de salud, como la artritis inflamatoria o problemas de los nervios. Las señales de alerta de abajo indican cuándo revisarlo.',
          ],
        },
        'Un IMC más alto y una edad mayor se asocian con más casos de pie plano. En [pie plano con la edad](/es/pie-plano-con-la-edad/) se explica si empeora con el tiempo.',
      ],
      cites: [CITE.salinasTorres, CITE.ling, CITE.mehdiCoalition],
    },
    {
      h2: '¿En qué se diferencia el pie plano de un pie normal?',
      keyFact: 'En datos combinados de 619 adultos sanos, el pie promedio en reposo estaba un poco aplanado, así que es normal que el arco baje un poco al ponerte de pie (Redmond y colegas, 2008).',
      paragraphs: [
        '**No hay una línea clara entre un pie plano y un pie normal.** Un arco normal también baja un poco al ponerte de pie. En datos combinados de 619 adultos sanos evaluados con el Foot Posture Index, una revisión de seis puntos que hace un profesional mientras estás de pie, la puntuación promedio fue +4 en una escala de -12 (arco alto) a +12 (pie plano). Los autores llaman a eso una postura un poco pronada, la posición normal en reposo, y consideran claramente fuera de lo normal las puntuaciones por debajo de -3 o por encima de +10.',
        'La caída del navicular, cuánto baja el hueso del lado interno del arco al ponerte de pie, es en promedio de 3,6 a 8,1\u00A0milímetros en adultos sanos. Se han propuesto 10, 13 o 15\u00A0milímetros como límite de lo normal, pero ninguno se ha confirmado (Nielsen y colegas, 2009).',
        'La huella mojada es una comprobación casera aproximada, no un diagnóstico: los estudios no se ponen de acuerdo sobre qué tan bien muestra el arco real (Hawes y colegas, 1992; Murley y colegas, 2009). El [test de pie plano](/es/test-pie-plano/) explica pruebas sencillas que puedes hacer en casa.',
      ],
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.hawesFootprint, CITE.murleyArch],
    },
    {
      h2: '¿Cómo saber si el pie plano es flexible o rígido?',
      paragraphs: [
        'Siéntate y mira la parte interna del pie, y después ponte de pie sobre los dos pies. Si el arco se ve al sentarte y desaparece al ponerte de pie, el pie plano es flexible. Otra forma: ponte de puntillas. Si el arco aparece al subir, es flexible. La mayoría de los pies planos son de este tipo.',
        'Un pie plano rígido sigue plano estés de pie o no. Es estructural, el ejercicio no va a cambiar su forma, y un pie plano rígido que duele por lo general necesita que lo revise un profesional de la salud.',
        '**La diferencia importa porque el ejercicio puede influir en un arco flexible.** En el ensayo con 52\u00A0personas con pie plano flexible, seis semanas de pie corto, trabajo de tobillo, fortalecimiento de cadera y estiramientos cambiaron dos medidas de la forma del arco más que en un grupo de control (Brijwasi y Borkar, 2023).',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: '¿El pie plano es realmente un problema?',
      keyFact: 'El Framingham Foot Study, con unos 1900 adultos, no encontró relación entre el pie plano y el dolor de espalda, aunque una marcha en pronación mostró una relación pequeña solo en mujeres (Menz y colegas, 2013).',
      paragraphs: [
        '**Para la mayoría de las personas, no.** Un pie plano flexible que no duele y no te limita es una variación normal, no un problema que haya que resolver.',
        'La duda más común es el [dolor de espalda](/es/pie-plano-y-dolor-de-espalda/). En el Framingham Foot Study, con unos 1900\u00A0adultos:',
        {
          list: [
            '**En general:** no hubo relación entre el pie plano y el dolor de espalda baja.',
            '**En mujeres:** un pie que se iba hacia adentro al caminar (marcha en pronación) mostró una relación pequeña con el dolor de espalda, pero la forma del pie en sí no.',
            '**En hombres:** ni la forma del pie ni la marcha se relacionaron con el dolor de espalda.',
          ],
        },
        'El pie plano puede cambiar cómo se reparte la carga por la pierna, y algunos corredores con pies muy pronados desarrollan lesiones por sobrecarga en el tobillo o la [rodilla](/es/pie-plano-y-dolor-de-rodilla/), pero la relación entre la forma del pie y las lesiones es más débil de lo que mucha gente cree.',
      ],
      cites: [CITE.menz],
    },
    {
      h2: '¿Qué es el pie plano adquirido del adulto?',
      paragraphs: [
        'Es un arco que era normal y se hunde en la edad adulta, casi siempre porque se debilita el tendón tibial posterior. Este tendón pasa por detrás del hueso interno del tobillo y se une a los huesos del arco. Cuando se estira o se rompe, el arco baja, el talón se inclina hacia afuera y la parte delantera del pie puede empezar a apuntar hacia afuera. El problema del tendón se llama [disfunción del tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/).',
        'El dolor y la hinchazón en la parte interna del tobillo son señales tempranas comunes. Apoyarte en un solo pie y ponerte de puntillas puede costar o doler del lado afectado. Una revisión en The Open Orthopaedics Journal describe cuatro etapas: inflamación del tendón sin deformidad visible (etapa I), un pie plano flexible que todavía se puede llevar a su posición con la mano (etapa II), una deformidad rígida (etapa III) y, además, cambios en la articulación del tobillo (etapa IV).',
        'Una revisión sistemática encontró poca evidencia de ensayos aleatorizados para el ejercicio, pero señaló que las guías clínicas recomiendan un manejo sin cirugía, con ejercicio, plantillas ortopédicas y cambios en la actividad, para las etapas I y II. Las etapas avanzadas muchas veces necesitan la evaluación de un profesional de la salud y pueden requerir una férula o cirugía.',
        '**Si un arco se te bajó de adulto, con dolor o hinchazón en la parte interna del tobillo, consulta a un profesional de la salud antes de empezar un programa de ejercicio.** No es lo mismo que un pie plano flexible de toda la vida.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: '¿Qué síntomas indican que el pie plano necesita atención?',
      paragraphs: [
        'La mayoría de los pies planos no dan síntomas y no necesitan estudios médicos. Estas situaciones vale la pena revisarlas con un profesional de la salud:',
      ],
      bullets: [
        'Dolor en la parte interna del tobillo o bajo el arco que no se calma con reposo (mira [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/)).',
        'Hinchazón en la parte interna del tobillo, sobre todo si apareció hace poco.',
        'Un arco que se aplanó en la edad adulta mientras el otro no.',
        'Dificultad para pararte en un pie y subir en puntas del lado afectado.',
        'Dolor en la rodilla, la tibia o la cadera que sospechas que tiene que ver con cómo apoya el pie.',
        'Un pie plano rígido (el arco sigue plano incluso cuando el pie no toca el piso).',
        'Entumecimiento, hormigueo o sensación de inestabilidad en el tobillo.',
      ],
    },
    {
      h2: '¿Los ejercicios, los zapatos y las plantillas ayudan con el pie plano?',
      paragraphs: [
        'El ejercicio para un pie plano flexible se enfoca en [los músculos pequeños bajo el arco](/es/ejercicios-para-fortalecer-los-pies/) y en los músculos más arriba que controlan cómo apoya el pie (la pantorrilla y la cadera). La mejor evidencia es el ensayo de seis semanas de arriba, que combinó pie corto, [ejercicios de tobillo](/es/ejercicios-para-fortalecer-el-tobillo/), fortalecimiento de cadera y estiramientos. Una revisión de 2024 sobre el pie corto por sí solo no encontró un cambio claro en la postura del pie en general, y solo un cambio en una medida del arco en programas de más de seis semanas. **Un programa combinado podría funcionar mejor que un solo ejercicio, y la paciencia importa.**',
        'En [ejercicios para pie plano](/es/ejercicios-pie-plano/) está la lista completa con dosis, qué debes sentir en cada uno y la evidencia detrás, empezando por el [ejercicio de pie corto](/es/ejercicios/pie-corto/) y la [inversión de tobillo con banda](/es/ejercicios/inversion-de-tobillo-con-banda/).',
        'Un zapato con suela intermedia firme y algo de soporte para el arco puede hacer más cómodo estar de pie y caminar. No cambia el arco con el tiempo, pero reduce el trabajo de los músculos del arco durante el día. La evidencia sobre plantillas para el pie plano en sí es más escasa de lo que mucha gente cree: para la fascitis plantar, la guía de 2023 para el dolor de talón recomienda no usar plantillas solas como enfoque a corto plazo (una B en contra), pero da una C a un manejo combinado que incluye plantillas. Más en [plantillas o ejercicios](/es/plantillas-o-ejercicios/).',
        '**Si tu pie plano no duele, no necesitas zapatos especiales.** Si el arco o el tobillo te duelen en los días largos, un zapato con suela firme y un soporte de arco suave es un primer paso razonable antes de gastar más en plantillas a medida.',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
    {
      h2: 'Más guías sobre pie plano',
      bullets: [
        'Comprobar y entrenar: [test de pie plano](/es/test-pie-plano/), [ejercicios para pie plano](/es/ejercicios-pie-plano/), [recoger la toalla con los dedos](/es/ejercicios/recoger-toalla-con-los-dedos/), [separar los dedos del pie](/es/ejercicios/separar-los-dedos-del-pie/), [fortalecer los dedos de los pies](/es/ejercicios-para-fortalecer-los-dedos-del-pie/), [movilidad de tobillo](/es/ejercicios-de-movilidad-de-tobillo/) y [pantorrillas tensas](/es/pantorrillas-tensas/).',
        'Pie plano y dolor: [dolor en el arco del pie](/es/dolor-en-el-arco-del-pie/), [disfunción del tendón tibial posterior](/es/ejercicios-tendon-tibial-posterior/), [dolor de rodilla](/es/pie-plano-y-dolor-de-rodilla/), [dolor de espalda](/es/pie-plano-y-dolor-de-espalda/) y [dolor en la planta del pie](/es/metatarsalgia-dolor-planta-del-pie/). Un dolor de talón más fuerte en los primeros pasos de la mañana encaja mejor con la [fascitis plantar](/es/fascitis-plantar/).',
        'Días largos de pie: [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) y [dolor de pies en enfermeras](/es/dolor-de-pies-enfermeras/).',
        'Niños y edad: [pie plano en niños](/es/pie-plano-en-ninos/) y [si el pie plano empeora con la edad](/es/pie-plano-con-la-edad/).',
        'Otras formas del pie: [pie cavo](/es/ejercicios-pie-cavo/) y [juanetes](/es/ejercicios-juanetes/).',
        'Calzado y apps: [zapatos barefoot](/es/zapatos-barefoot/), [plantillas o ejercicios](/es/plantillas-o-ejercicios/) y la [mejor app para el pie plano](/es/mejor-app-pie-plano/).',
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es lo que causa el pie plano?',
      cites: [CITE.ling],
      a: 'La mayoría de los pies planos son de toda la vida: así se formó el pie. Cuando un arco normal se hunde en la edad adulta, la causa más común es la disfunción del tendón tibial posterior, que se debilita en la parte interna del tobillo y deja bajar el arco (Ling y Lui, 2017). Con menos frecuencia influye una lesión u otro problema de salud.',
    },
    {
      q: '¿El pie plano es algo por lo que preocuparse?',
      cites: [CITE.menz],
      a: 'Para la mayoría de las personas, no. Un pie plano flexible que no duele y no limita tu actividad es una forma normal del pie. El Framingham Foot Study, con unos 1900\u00A0adultos, no encontró relación entre el pie plano y el dolor de espalda baja (Menz y colegas, 2013). Sí necesitan atención el pie plano rígido y el arco que se hunde en la edad adulta.',
    },
    {
      q: '¿Cómo saber si tengo pies planos?',
      a: 'Mira la parte interna del pie mientras estás de pie: si el arco queda bajo o toca el suelo, tienes pie plano. Después siéntate o ponte de puntillas. Si el arco vuelve, el pie plano es flexible, el tipo más común y por lo general inofensivo. La huella mojada es una comprobación casera aproximada, no un diagnóstico.',
    },
    {
      q: '¿Los ejercicios pueden cambiar el pie plano?',
      cites: [CITE.brijwasi, CITE.cheng],
      a: 'Pueden influir en la forma de un arco flexible, no de uno rígido. En un ensayo con 52\u00A0personas con pie plano flexible, seis semanas de pie corto, tobillo, cadera y estiramientos cambiaron la forma del arco más que en un grupo de control. Según una revisión de 2024, el pie corto por sí solo cambió una medida del arco solo en programas de más de seis semanas.',
    },
    {
      q: '¿Los niños dejan de tener pie plano al crecer?',
      cites: [CITE.salinasTorres],
      a: 'La mayoría, sí. Casi todos los niños pequeños tienen pie plano, y el arco suele formarse entre los 6 y los 10\u00A0años. Una revisión sistemática de 2023 señaló que el pie plano es más frecuente entre los 3 y los 5\u00A0años y disminuye hacia la adolescencia (Salinas-Torres y colegas, 2023). Un pie plano flexible sin dolor que sigue en la adolescencia rara vez es un problema.',
    },
    {
      q: '¿Qué es el pie plano adquirido del adulto?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'Es un hundimiento progresivo del arco, casi siempre porque se debilita el tendón tibial posterior (Ling y Lui, 2017). Causa dolor e hinchazón en la parte interna del tobillo y dificultad para ponerse de puntillas sobre un pie. Las guías clínicas recomiendan un manejo sin cirugía en las primeras etapas, aunque hay poca evidencia de ensayos de alta calidad (Ross y colegas, 2018).',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'un arco se aplanó de repente en la edad adulta',
      'tienes dolor o hinchazón en la parte interna del tobillo',
      'no puedes pararte en un pie y subir en puntas del lado afectado',
      'el arco sigue plano incluso cuando el pie no toca el piso (pie plano rígido)',
      'el dolor empezó después de una lesión o una caída',
      'tienes entumecimiento, hormigueo o inestabilidad en el tobillo',
      'te duelen los dos pies y tienes otras articulaciones rígidas o hinchadas',
      'el dolor empeora semana tras semana aunque haces ejercicio',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'No tienes que decidir qué ejercicios de arco hacer ni cuándo pasar a una versión más difícil. [Walkito](/es/programa/) arma un plan una semana a la vez en torno a una meta. Para un pie plano flexible, esa meta es mantener el arco: sostenerlo arriba 60\u00A0segundos. Si además te duele el talón, primero van las mañanas más fáciles.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas tu primera meta), una prueba corta mide cuánto mantienes el arco, la resistencia de la pantorrilla y el equilibrio. La meta de mantener el arco sigue en el plan hasta que la alcanzas, tome las semanas que tome.',
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si un arco se te bajó de adulto con dolor o hinchazón, consulta a un profesional antes de empezar.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  crumb: 'Pie plano',
  campaign: 'hub-flat-feet-es',
};
