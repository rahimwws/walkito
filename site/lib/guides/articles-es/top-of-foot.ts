import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/top-of-foot.ts` (2026-10-07). Rewritten
 * 2026-10-26 answer-first around «dolor en el empeine del pie sin
 * inflamación», «tendinitis pie empeine» and «por qué duele el empeine del
 * pie». Figures, grades and qualifiers are identical to the English page;
 * exercise doses follow the app (src/entities/program/model/exercises.ts).
 */

export const TOP_OF_FOOT_ES: Guide = {
  lang: 'es',
  page: 'topOfFoot',
  published: '2026-10-07',
  updated: '2026-10-26',
  title: 'Dolor en el empeine del pie sin inflamación: causas',
  description:
    'Por qué duele el empeine del pie sin inflamación: tendinitis por cordones apretados, nervios, fractura por estrés. Cómo distinguirlas y qué hacer.',
  h1: 'Dolor en el empeine del pie sin inflamación: por qué duele y qué hacer',
  lede:
    'Si te duele el empeine del pie sin hinchazón ni enrojecimiento, empieza por la causa más frecuente de dolor en el empeine en general, la **tendinitis de los extensores**: los tendones que levantan los dedos se irritan por cordones apretados, una lengüeta rígida o un aumento repentino de actividad. Si el dolor es tipo ardor u hormigueo, apunta a un nervio comprimido. Lo que hay que descartar es una fractura por estrés: dolor en un solo punto que empeora a lo largo del día.',
  intro: [
    'El primer paso más rápido para la tendinitis suele ser cambiar la forma de atar los cordones, saltándote el ojal justo sobre el punto que duele. Abajo están las causas, cómo distinguirlas y cuándo consultar a un profesional de la salud.',
  ],
  toc: true,
  takeaways: [
    'La tendinitis de los extensores, una irritación de los tendones que levantan los dedos, es la causa más frecuente de dolor en el empeine. Los cordones apretados y un aumento repentino de actividad son los detonantes habituales.',
    'Si el empeine solo duele con zapatos y deja de doler al andar descalzo, la presión del zapato es el factor más probable.',
    'La fractura por estrés de un metatarsiano es la causa más importante que hay que descartar: duele en un solo punto, empeora a lo largo del día y puede no verse en una radiografía durante las primeras dos o tres semanas.',
    'Un dolor tipo ardor u hormigueo que se irradia hacia los dedos sugiere la irritación de un nervio, no una tendinitis.',
    'Ningún ensayo aleatorizado ha probado el ejercicio específicamente para el dolor en el empeine. El ejercicio aborda factores que contribuyen, como la rigidez de pantorrilla y la debilidad del tibial anterior.',
  ],
  sections: [
    {
      h2: '¿Por qué duele el empeine del pie?',
      keyFact: 'Una fractura por estrés de un metatarsiano puede no aparecer en una radiografía simple hasta dos o tres semanas después de empezar los síntomas, por lo que una resonancia magnética puede confirmarla antes (Patel y colegas, 2011).',
      paragraphs: [
        '**Tendinitis de los extensores (tendinitis del empeine).** Es la causa más común. Los tendones extensores recorren el empeine desde la tibia hasta los dedos y levantan los dedos y el pie al caminar. Cuando se irritan, sientes un dolor amplio a lo largo del empeine que empeora con la actividad y muchas veces al levantar los dedos contra resistencia. Los detonantes habituales son:',
        {
          list: [
            'Cordones de zapato que presionan directo sobre los tendones.',
            'Un aumento repentino en la distancia que caminas o corres.',
            'Zapatos con una lengüeta rígida.',
          ],
        },
        '**Irritación de un nervio.** El nervio peroneo profundo o el superficial se pueden comprimir por zapatos apretados, hinchazón o un espolón óseo. El dolor es tipo ardor u hormigueo más que un dolor sordo, y puede irradiarse hacia los dedos o subir por el tobillo.',
        '**Fractura por estrés de un metatarsiano.** Es una pequeña fisura en uno de los huesos largos del pie, casi siempre el segundo o el tercero. El dolor se centra en un solo punto y tiende a empeorar a lo largo del día. La hinchazón en el empeine es común. Este caso requiere reposo, no ejercicio (más abajo hay una sección propia).',
        '**Espolón óseo dorsal** (exostosis metatarsal). Es un bulto de hueso en la parte de arriba del pie medio, normalmente donde los metatarsianos se juntan con los cuneiformes, que se forma por años de compresión. Puede no doler por sí mismo, pero presiona contra la lengüeta del zapato o irrita un nervio que pasa por encima.',
        '**Artritis del pie medio.** Afecta las articulaciones pequeñas de la parte de arriba del pie, normalmente por desgaste o una lesión previa. El dolor es rígido y sordo, empeora después de estar de pie o caminar mucho rato y puede venir con un engrosamiento visible sobre las articulaciones.',
        '**Gota.** Aquí sí hay inflamación evidente: un dolor repentino e intenso, muchas veces de la noche a la mañana, con la articulación roja, hinchada y caliente, casi siempre la del dedo gordo, aunque puede afectar el pie medio. Se produce por cristales de ácido úrico, se confirma con análisis de sangre y a veces del líquido articular, y se maneja con medicamentos y cambios en la alimentación. El ejercicio no ayuda durante un episodio.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: '¿Cómo distinguir estas causas?',
      paragraphs: [
        'La ubicación y el patrón del dolor son las primeras pistas:',
        {
          list: [
            '**Tendinitis de los extensores:** dolor amplio a lo largo de los tendones que empeora al levantar los dedos.',
            '**Nervio:** ardor u hormigueo, no un dolor profundo y sordo.',
            '**Fractura por estrés:** un solo punto muy sensible sobre un hueso, que empeora a lo largo del día.',
            '**Gota:** aparece de golpe, con enrojecimiento y calor sobre una articulación.',
          ],
        },
        'Si el dolor solo está presente con zapatos y se va al andar descalzo, **la presión del zapato es el factor más probable.** Si persiste en reposo o te despierta por la noche, vale la pena investigar algo más allá de una simple tendinitis.',
        'Un profesional de la salud muchas veces puede notar la diferencia con un examen físico: la extensión de los dedos contra resistencia reproduce el dolor de la tendinitis, y un punto muy sensible sobre un hueso con hinchazón localizada sugiere una fractura por estrés.',
      ],
    },
    {
      h2: '¿Qué ayuda con la tendinitis del empeine?',
      paragraphs: [
        '**Cambia la forma de atar los cordones.** Sáltate el ojal justo sobre el punto que duele. Muchos zapatos deportivos tienen suficientes ojales para pasar el cordón alrededor de la zona sensible sin perder sujeción en el resto. Así quitas la presión directa que empezó el problema.',
        '**Revisa el zapato.** Una lengüeta acolchada o flexible comprime menos los tendones. Con botas, calzado deportivo de tacos o zapatos de vestir de empeine rígido, la presión desde arriba muchas veces lo explica todo.',
        '**Baja la actividad que lo detonó.** Si el dolor empezó cuando aumentaste la distancia que caminas o corres, vuelve al nivel anterior durante una o dos semanas y después sube de nuevo poco a poco.',
        '**Hielo y antiinflamatorios, a corto plazo.** Hielo sobre los tendones doloridos durante 10 a 15\u00A0minutos después de la actividad puede ayudar con la irritación en los primeros días. Los antiinflamatorios son una opción a corto plazo si el dolor interfiere con la vida diaria, pero no aceleran la recuperación de fondo.',
      ],
    },
    {
      h2: 'Ejercicios para los factores que contribuyen',
      paragraphs: [
        'Ningún ensayo aleatorizado ha probado el ejercicio específicamente para el dolor en el empeine o la tendinitis de los extensores, así que **no sabemos si el ejercicio acelera la recuperación** comparado con cambiar los cordones y descansar. Lo que sí puede abordar son dos factores que contribuyen:',
        {
          list: [
            '**Un tibial anterior débil.** Este músculo del frente de la tibia levanta el pie y también es un extensor. Cuando está débil en comparación con la pantorrilla, los tendones extensores más pequeños del empeine cargan más al caminar. Más sobre él en [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/).',
            '**Una pantorrilla rígida.** Si el tobillo no se dobla lo suficiente, el pie compensa de formas que pueden aumentar el estrés en el empeine. La pantorrilla rígida también es un factor de riesgo compartido con la [fascitis plantar](/es/ejercicios-fascitis-plantar/).',
          ],
        },
        'Si tu dolor en el empeine es por una fractura por estrés, gota o un problema activo de nervio, sáltate estos ejercicios y consulta primero a un profesional de la salud. Para los espolones óseos y la artritis del pie medio, el ejercicio puede ayudar a mantener el rango y reducir síntomas, pero no cambia el hueso.',
      ],
      exercises: [
        {
          name: 'Elevaciones de tibial anterior',
          dose: '3\u00A0series de 10',
          how: 'Ponte de pie con la espalda contra una pared y los pies a unos 30\u00A0cm de ella. Levanta la parte delantera de los dos pies del suelo, llevando los dedos hacia las tibias. Baja despacio. Fortalece el tibial anterior, el músculo principal que levanta el pie.',
          often: 'Días de fuerza',
          feel: 'Trabajo a lo largo del frente de la tibia',
          stop: 'Dolor en el empeine por encima de 4/10',
          evidence: { level: 'early', why: 'No hay ensayo para la tendinitis de los extensores. El ejercicio fortalece el tibial anterior, que comparte la carga de dorsiflexión con los tendones extensores.' },
          media: 'tibialis_raise',
          caption: 'Elevaciones de tibial anterior: levanta los dedos hacia las tibias, espalda contra la pared',
          alt: 'Una figura de pie contra una pared levanta los dedos, con el tibial anterior resaltado',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Manos en la pared. Pierna de atrás estirada, talón abajo, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla. Una pantorrilla rígida limita la dorsiflexión del tobillo, lo que puede pasar estrés al empeine.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor en el tendón de Aquiles',
          evidence: { level: 'strong', why: 'El estiramiento de pantorrilla tiene grado A en la guía para afecciones de la pierna relacionadas. No se ha probado para la tendinitis de los extensores específicamente.' },
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Movilidad de tobillo',
          dose: '2\u00A0series de 15, cada pie',
          how: 'Ponte de pie frente a una pared con un pie adelante, manos en la pared. Lleva la rodilla hacia adelante sobre los dedos manteniendo el talón en el suelo. Vuelve atrás y repite. Mejora suavemente el rango de dorsiflexión.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte delantera del tobillo',
          stop: 'Dolor en el empeine durante el movimiento',
          evidence: { level: 'early', why: 'El trabajo de movilidad del tobillo forma parte de la rehabilitación general de la pierna. No hay ensayo para el dolor en el empeine específicamente.' },
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla viaja sobre los dedos, el talón se queda abajo',
          alt: 'Una figura empuja la rodilla hacia adelante sobre los dedos en una pared, con el tobillo resaltado',
        },
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle, CITE.guideline],
    },
    {
      h2: '¿Cuándo el dolor en el empeine es una fractura por estrés?',
      paragraphs: [
        'Es la causa que más importa descartar, porque seguir cargando un hueso fisurado puede convertir una fisura pequeña en una fractura completa. Suele desarrollarse poco a poco por impacto repetitivo y es más común en corredores, reclutas militares y personas que aumentaron su actividad de golpe.',
        'El dolor está en un solo punto, empeora con la actividad que carga peso y puede doler de noche. Una radiografía simple puede no mostrarla en las primeras dos o tres semanas; si un profesional de la salud la sospecha, una resonancia magnética o una gammagrafía ósea puede confirmarla antes. El enfoque es reposo y carga de peso protegida, no ejercicio, y volver a la actividad demasiado pronto puede llevar a una fractura completa.',
        'Si el dolor apareció después de un salto en el volumen de entrenamiento, está en un solo punto y empeora a lo largo del día, **consulta a un profesional de la salud antes de hacer cualquiera de los ejercicios de esta página.**',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: '¿Dónde está el empeine y qué hay debajo?',
      paragraphs: [
        'El empeine es la parte de arriba del pie, entre el tobillo y el comienzo de los dedos. El [Diccionario de la lengua española](https://dle.rae.es/empeine) lo define como la «parte superior del pie, que está entre la caña de la pierna y el principio de los dedos». En medicina se llama dorso del pie. Debajo de la piel hay:',
        {
          list: [
            '**Huesos:** el navicular, los tres cuneiformes y el cuboides, y la parte de arriba de los cinco metatarsianos, los huesos largos que llegan hasta los dedos.',
            '**Tendones:** el del tibial anterior, que levanta el pie, y los de los músculos que levantan el dedo gordo y los demás dedos.',
            '**Arteria y nervio:** la arteria dorsal del pie y el nervio peroneo profundo, que da la sensibilidad de la piel entre el dedo gordo y el segundo dedo.',
          ],
        },
        'Como todo está justo bajo la piel, un cordón apretado o una lengüeta rígida se notan tanto en esta zona.',
      ],
      cites: [CITE.statpearlsFootBones, CITE.statpearlsFootMuscles, CITE.statpearlsFootArteries, CITE.statpearlsDeepPeroneal],
    },
  ],
  faq: [
    {
      q: '¿Qué puede ser cuando te duele el empeine del pie sin inflamación?',
      a: 'La causa más común de dolor en el empeine en general es la tendinitis de los extensores, una irritación de los tendones que levantan los dedos por cordones apretados, una lengüeta rígida o más actividad de golpe. Un dolor tipo ardor u hormigueo apunta a un nervio comprimido. Si el dolor está en un solo punto y empeora durante el día, conviene descartar una fractura por estrés.',
    },
    {
      q: '¿Cómo quitar el dolor del empeine del pie?',
      a: 'Si es tendinitis de los extensores, el primer paso suele ser atar los cordones saltándote el ojal sobre el punto que duele y usar zapatos con lengüeta suave. Reduce durante una o dos semanas la actividad que lo detonó. Hielo de 10 a 15\u00A0minutos tras la actividad y antiinflamatorios a corto plazo pueden ayudar, pero no aceleran la recuperación.',
    },
    {
      q: '¿Cómo se siente la tendinitis en el empeine?',
      a: 'La tendinitis de los extensores se siente como un dolor amplio a lo largo del empeine, del tobillo hacia los dedos. Empeora al levantar los dedos, al caminar o correr y con zapatos apretados. A diferencia de una fractura por estrés, el dolor se reparte a lo largo de los tendones en vez de concentrarse en un solo punto del hueso.',
    },
    {
      q: '¿Cómo saber si el dolor en el empeine es una fractura por estrés?',
      cites: [CITE.patelStressFracture],
      a: 'Una fractura por estrés duele en un punto concreto, empeora a lo largo del día y con la actividad, y muchas veces sigue a un aumento repentino del entrenamiento. Puede no verse en una radiografía durante dos o tres semanas. Si el dolor es localizado y progresivo, consulta a un profesional de la salud para estudios de imagen en vez de seguir entrenando.',
    },
    {
      q: '¿Puedo seguir caminando con tendinitis de los extensores?',
      a: 'Sí, caminar suele estar bien si el dolor se mantiene leve y no empeora. Elige zapatos con una lengüeta suave y flexible, y afloja o cambia la forma de atar los cordones para quitar presión de los tendones. Si caminar aumenta mucho el dolor o la molestia dura horas después, reduce la distancia hasta que el cambio de cordones y el descanso lo bajen.',
    },
    {
      q: '¿Cuánto tarda en mejorar la tendinitis del empeine?',
      a: 'Ningún ensayo ha medido el tiempo de recuperación de la tendinitis de los extensores, así que no hay un plazo comprobado. Los casos leves causados por cordones apretados suelen calmarse en cuanto se quita la presión. Los ligados a un aumento de entrenamiento o a presión constante del zapato pueden tardar más, a veces varias semanas, sobre todo si el detonante sigue presente.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor está en un solo punto del empeine y empeora a lo largo del día, lo que puede sugerir una fractura por estrés',
      'hay hinchazón, enrojecimiento o calor sobre una sola articulación, lo que puede sugerir gota o infección',
      'el dolor apareció de golpe después de una lesión, caída o torcedura',
      'hay entumecimiento, hormigueo o ardor, lo que puede sugerir compresión de un nervio',
      'el dolor no mejora después de una o dos semanas de reposo y cambio de zapatos',
      'no puedes apoyar el pie o estás cojeando',
      'hay un bulto visible en el empeine que está creciendo',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
    ],
  },
  program: {
    h2: 'Cómo convertirlo en un plan',
    text: 'Walkito está construido alrededor del dolor de talón y el pie plano, no del dolor en el empeine específicamente. Pero si la sobrecarga de los tendones extensores es parte de tu caso, las elevaciones de tibial anterior y el estiramiento de pantorrilla de la app abordan los desequilibrios musculares que contribuyen. Marcar el empeine en el mapa de dolor durante un check-in permite a la app seguir si el dolor cambia junto con tus ejercicios.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, la sujeción del arco y el equilibrio. Walkito no diagnostica el dolor en el empeine. Si sospechas una fractura por estrés, gota o un problema de nervio, consulta a un profesional de la salud antes de empezar cualquier programa de ejercicio.',
    ],
    cta: 'Empieza con una sesión de 3\u00A0minutos.',
  },
  crumb: 'Dolor en el empeine',
  campaign: 'guide-top-of-foot-es',
};
