import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/top-of-foot.ts` (2026-10-07), written around the
 * Spanish queries «dolor en el empeine del pie» and «dolor empeine pie causas».
 * Figures, grades and qualifiers are identical to the English page.
 */

export const TOP_OF_FOOT_ES: Guide = {
  lang: 'es',
  page: 'topOfFoot',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Dolor en el empeine del pie: causas y cuándo preocuparse',
  description:
    'Dolor en el empeine del pie: tendinitis de los extensores por cordones apretados, fractura por estrés, espolones óseos, gota y nervios. Cuándo consultar.',
  h1: 'Dolor en el empeine del pie: qué lo causa y cuándo consultar a un profesional de la salud',
  lede:
    'El dolor en el empeine del pie es menos común que el dolor de talón o de arco, pero puede hacer que cada paso moleste, sobre todo con zapatos. La causa más frecuente es la tendinitis de los extensores, una irritación de los tendones que levantan los dedos, muchas veces por cordones apretados o un aumento repentino de actividad. Otras causas incluyen la fractura por estrés, los espolones óseos, la gota y la compresión de un nervio. La mayoría responde a cambios sencillos, pero algunas necesitan estudios de imagen o una visita a un profesional de la salud.',
  intro: [
    'El empeine del pie se llama dorso. Varios tendones, nervios y huesos pequeños están justo debajo de la superficie, lo que hace que la zona sea vulnerable a la presión de los zapatos y al sobreuso. Esta página cubre las causas más comunes, qué puedes hacer en casa, qué dice la evidencia sobre el ejercicio para esta zona y dónde están los vacíos reales de la investigación.',
  ],
  toc: true,
  takeaways: [
    'La tendinitis de los extensores, una inflamación de los tendones que levantan los dedos, es la causa más frecuente de dolor en el empeine. Los cordones apretados y un aumento repentino de actividad son los detonantes habituales.',
    'La fractura por estrés de un metatarsiano es la causa más importante que hay que descartar. El dolor está en un solo punto, empeora a lo largo del día y puede no verse en una radiografía durante las primeras dos o tres semanas.',
    'Cambiar la forma de atar los cordones, saltándote el ojal justo sobre el punto que duele, suele ser el primer paso más rápido para la tendinitis de los extensores.',
    'Ningún ensayo aleatorizado ha probado el ejercicio específicamente para el dolor en el empeine. El ejercicio aborda factores que contribuyen, como la rigidez de pantorrilla y la debilidad del tibial anterior, no el dolor del empeine directamente.',
  ],
  sections: [
    {
      h2: '¿Qué causa el dolor en el empeine del pie?',
      keyFact: 'Una fractura por estrés de un metatarsiano puede no aparecer en una radiografía simple hasta dos o tres semanas después de empezar los síntomas, por lo que una resonancia magnética puede confirmarla antes (Patel y colegas, 2011).',
      paragraphs: [
        '**Tendinitis de los extensores** es la causa más común. Los tendones extensores recorren el empeine del pie desde la tibia hasta los dedos. Levantan los dedos y el pie al caminar. Cuando se irritan, sientes un dolor a lo largo del empeine que empeora con la actividad y muchas veces duele cuando jalas los dedos hacia arriba contra resistencia. Los detonantes habituales son cordones de zapato que presionan directo sobre los tendones, un aumento repentino en la distancia que caminas o corres, o zapatos con una lengüeta rígida.',
        '**Fractura por estrés de un metatarsiano** es una pequeña fisura en uno de los huesos largos del pie, casi siempre en el segundo o el tercero. El dolor está más localizado que el de la tendinitis, se centra en un solo punto y tiende a empeorar a lo largo del día. La hinchazón en el empeine es común. Las fracturas por estrés pueden tardar dos o tres semanas en aparecer en una radiografía simple, así que los estudios tempranos pueden necesitar una resonancia magnética. Este caso requiere reposo, no ejercicio.',
        '**Espolón óseo dorsal** (también llamado exostosis metatarsal) es un bulto de hueso que se forma en la parte de arriba de las articulaciones del pie medio, normalmente donde los metatarsianos se juntan con los cuneiformes. Se desarrolla gradualmente por años de compresión en esas articulaciones. El espolón en sí puede no doler, pero puede presionar contra la lengüeta del zapato o irritar un nervio que pasa por encima.',
        '**Gota** puede causar un dolor repentino e intenso en el empeine del pie, casi siempre en la articulación del dedo gordo. La articulación se pone roja, hinchada, caliente y extremadamente sensible. La gota se produce por depósitos de cristales de ácido úrico y necesita manejo médico. El ejercicio no ayuda durante un episodio agudo de gota.',
        '**Irritación de un nervio** puede venir de la compresión del nervio peroneo profundo o del nervio peroneo superficial por zapatos apretados, hinchazón o un espolón óseo. El dolor tiende a ser tipo ardor u hormigueo más que un dolor profundo y sordo, y puede irradiarse hacia los dedos o subir por el tobillo.',
        '**Artritis del pie medio** involucra las articulaciones pequeñas en la parte de arriba del pie, normalmente por desgaste o una lesión previa. El dolor es rígido y sordo, empeora después de estar de pie o caminar mucho rato, y puede venir con un engrosamiento visible sobre las articulaciones.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: '¿Cómo distinguir estas causas?',
      paragraphs: [
        'La ubicación y el patrón son las primeras pistas. La tendinitis de los extensores produce un dolor amplio a lo largo de los tendones que empeora cuando jalas los dedos hacia arriba. Una fractura por estrés duele en un solo punto y empeora a lo largo del día. La gota aparece de golpe, normalmente en la articulación del dedo gordo, con enrojecimiento y calor. El dolor de nervio tiende a ser tipo ardor u hormigueo, no un dolor profundo y sordo.',
        'Un profesional de la salud muchas veces puede notar la diferencia con un examen físico. La extensión de los dedos contra resistencia (jalar los dedos hacia arriba contra presión) reproduce el dolor de la tendinitis. Un punto muy sensible sobre un hueso con hinchazón localizada sugiere una fractura por estrés. Si se sospecha una fractura por estrés, los estudios de imagen son importantes porque seguir cargando un hueso fracturado puede empeorarlo.',
        'Si el dolor solo está presente con zapatos y se va al andar descalzo, la presión del zapato es el factor más probable. Si persiste en reposo o te despierta por la noche, vale la pena investigar algo más allá de una simple tendinitis.',
      ],
    },
    {
      h2: '¿Qué ayuda con la tendinitis de los extensores?',
      paragraphs: [
        'El primer paso más rápido suele ser cambiar la forma de atar los cordones. Sáltate el ojal justo sobre el punto que duele. Muchos zapatos deportivos tienen suficientes ojales para pasar el cordón alrededor de la zona sensible sin perder soporte en el resto. Esto quita la presión directa que empezó el problema.',
        'Los zapatos con una lengüeta acolchada o flexible comprimen menos los tendones. Si usas botas, tacos o zapatos de vestir con un empeine rígido, la presión desde arriba del zapato muchas veces es toda la historia.',
        'Reducir temporalmente la actividad que detonó el dolor ayuda. Si el dolor empezó cuando aumentaste la distancia que caminas o corres, baja al nivel anterior por una o dos semanas y después sube de nuevo gradualmente.',
        'Hielo sobre los tendones adoloridos por 10 a 15\u00A0minutos después de la actividad puede ayudar a calmar la irritación en los primeros días. Los antiinflamatorios son una opción a corto plazo si el dolor interfiere con la vida diaria, pero no aceleran la recuperación de fondo.',
      ],
    },
    {
      h2: '¿El ejercicio ayuda con el dolor en el empeine?',
      paragraphs: [
        'Ningún ensayo aleatorizado ha probado el ejercicio específicamente para el dolor en el empeine o la tendinitis de los extensores. La verdad es que no sabemos si el ejercicio acelera la recuperación de la tendinitis de los extensores comparado con cambiar los cordones y descansar.',
        'Lo que el ejercicio puede abordar son los factores que contribuyen. El tibial anterior, el músculo del frente de la tibia que levanta el pie, también es un extensor. Cuando está débil en comparación con la pantorrilla, los tendones extensores más pequeños del empeine cargan más al caminar. Fortalecer el tibial anterior con elevaciones de la punta del pie (levantar la parte delantera del pie estando de pie contra una pared) es una forma de reducir ese desequilibrio. Mira [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/) para más sobre el tibial anterior.',
        'El estiramiento de pantorrilla es relevante si la dorsiflexión del tobillo está limitada. Cuando el tobillo no se dobla lo suficiente, el pie compensa de formas que pueden aumentar el estrés en las estructuras del empeine. La pantorrilla rígida también es un factor de riesgo compartido con la [fascitis plantar](/es/ejercicios-fascitis-plantar/) y la sobrecarga de la parte delantera del pie.',
        'Para los espolones óseos y la artritis del pie medio, el ejercicio no cambia la anatomía ósea. El trabajo de movilidad del tobillo puede ayudar a mantener el rango, y el fortalecimiento puede reducir los síntomas, pero el espolón o la degeneración articular se quedan. Para las fracturas por estrés, el ejercicio no es el camino hasta que el hueso se haya recuperado.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'Ejercicios que abordan los factores que contribuyen',
      paragraphs: [
        'Estos ejercicios no trabajan el empeine directamente. Abordan la rigidez de pantorrilla y la debilidad de la tibia, que son factores que contribuyen a la sobrecarga de los tendones extensores. Si tu dolor en el empeine es por una fractura por estrés, gota o un problema activo de nervio, sáltalos y consulta primero a un profesional de la salud.',
      ],
      exercises: [
        {
          name: 'Elevaciones de tibial anterior',
          dose: '3\u00A0series de 15',
          how: 'Párate con la espalda contra una pared y los pies como a un pie de distancia. Levanta la parte delantera de los dos pies del piso, jalando los dedos hacia las tibias. Baja despacio. Esto fortalece el tibial anterior, el músculo principal que levanta el pie.',
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
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Manos en la pared. Pierna de atrás estirada, talón abajo, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla. Una pantorrilla rígida limita la dorsiflexión del tobillo, lo que puede pasar estrés al empeine.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Dolor en el tendón de Aquiles',
          evidence: { level: 'strong', why: 'El estiramiento de pantorrilla tiene grado A en la guía para condiciones de la pierna relacionadas. No se ha probado para la tendinitis de los extensores específicamente.' },
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Movilidad de tobillo',
          dose: '10\u00A0movimientos lentos, cada pie',
          how: 'Párate frente a una pared con un pie adelante, manos en la pared. Lleva la rodilla hacia adelante sobre los dedos manteniendo el talón en el piso. Regresa y repite. Esto mejora suavemente el rango de dorsiflexión.',
          often: 'La mayoría de las sesiones',
          feel: 'Un estiramiento en la parte delantera del tobillo',
          stop: 'Dolor en el empeine durante el movimiento',
          evidence: { level: 'early', why: 'El trabajo de movilidad del tobillo forma parte de la rehabilitación general de la pierna. No hay ensayo para el dolor en el empeine específicamente.' },
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: la rodilla viaja sobre los dedos, el talón se queda abajo',
          alt: 'Una figura empuja la rodilla hacia adelante sobre los dedos en una pared, con el tobillo resaltado',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Cuándo el dolor en el empeine es una fractura por estrés?',
      paragraphs: [
        'La fractura por estrés de un metatarsiano es la causa que más importa descartar, porque seguir cargando un hueso fracturado puede convertir una fisura pequeña en una fractura completa.',
        'Las fracturas por estrés suelen desarrollarse gradualmente por impacto repetitivo. Son más comunes en corredores, reclutas militares y personas que aumentaron su actividad de golpe. El dolor está en un solo punto, empeora con la actividad que carga peso y puede doler de noche. La hinchazón en el empeine sobre el hueso que duele es común.',
        'Una radiografía simple puede no mostrar una fractura por estrés en las primeras dos o tres semanas. Si un profesional de la salud sospecha una, una resonancia magnética o una gammagrafía ósea puede confirmarla antes. El enfoque es reposo y carga de peso protegida, no ejercicio. Volver a la actividad demasiado pronto puede llevar a una fractura completa.',
        'Si el dolor apareció después de un salto en el volumen de entrenamiento, está en un solo punto y empeora a lo largo del día, consulta a un profesional de la salud antes de hacer cualquiera de los ejercicios de esta página.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: '¿Y la gota en el empeine?',
      paragraphs: [
        'La gota es una condición inflamatoria causada por cristales de ácido úrico que se depositan en una articulación. Clásicamente afecta la articulación del dedo gordo (la primera metatarsofalángica), pero puede afectar cualquier articulación del pie, incluido el pie medio.',
        'Un episodio de gota aparece rápido, muchas veces de la noche a la mañana. La articulación se vuelve intensamente dolorosa, roja, caliente e hinchada. Se ve y se siente diferente de la tendinitis o de una fractura por estrés. Si tienes un dolor repentino e intenso en una sola articulación con enrojecimiento y calor, es una razón para consultar a un profesional de la salud pronto. Los análisis de sangre y a veces el análisis del líquido articular confirman el diagnóstico.',
        'La gota necesita manejo médico. El ejercicio, los cambios de zapatos y los estiramientos no ayudan durante un episodio agudo. Entre episodios, mantener la movilidad del pie y el tobillo es razonable, pero el problema de fondo con el ácido úrico se maneja con medicamentos y cambios en la alimentación.',
      ],
    },
  ],
  faq: [
    {
      q: '¿Por qué me duele el empeine del pie al caminar?',
      a: 'La causa más común es la tendinitis de los extensores, donde los tendones que levantan los dedos se irritan por zapatos apretados, cordones que presionan sobre los tendones o un aumento repentino en la distancia que caminas. Otras causas incluyen la fractura por estrés, los espolones óseos y la compresión de un nervio. Si el dolor solo está con zapatos y desaparece al andar descalzo, la presión del zapato es el factor más probable.',
    },
    {
      q: '¿Los cordones apretados pueden causar dolor en el empeine?',
      a: 'Sí. Los tendones extensores pasan justo debajo de la superficie del empeine, y los cordones apretados presionan directo sobre ellos. Saltarte el ojal sobre el punto que duele o cambiar a zapatos con una lengüeta más suave muchas veces resuelve el dolor en pocos días. Es una de las causas más comunes y más fáciles de corregir del dolor en el empeine.',
    },
    {
      q: '¿Cómo saber si el dolor en el empeine es una fractura por estrés?',
      cites: [CITE.patelStressFracture],
      a: 'Una fractura por estrés tiende a doler en un punto específico, empeora a lo largo del día y con la actividad, y puede hincharse en el empeine. Muchas veces sigue a un aumento repentino en el volumen de entrenamiento. Las fracturas por estrés tempranas pueden no verse en una radiografía durante dos o tres semanas. Si el dolor es localizado, progresivo y relacionado con la actividad, consulta a un profesional de la salud para que te hagan estudios de imagen en vez de seguir haciendo ejercicio.',
    },
    {
      q: '¿El ejercicio ayuda con el dolor en el empeine?',
      a: 'Ningún ensayo ha probado el ejercicio para el dolor en el empeine específicamente. El ejercicio puede abordar factores que contribuyen: el fortalecimiento del tibial anterior reduce la carga sobre los tendones extensores más pequeños, y el estiramiento de pantorrilla mejora la movilidad del tobillo. Pero para las fracturas por estrés, la gota o los problemas de nervios, el ejercicio es ineficaz o contraproducente. La causa determina si el ejercicio tiene sentido.',
    },
    {
      q: '¿Cómo se siente la tendinitis de los extensores?',
      a: 'La tendinitis de los extensores se siente como un dolor amplio a lo largo del empeine del pie, del tobillo hacia los dedos. Empeora cuando jalas los dedos hacia arriba, al caminar o correr, o al usar zapatos apretados. A diferencia de una fractura por estrés, el dolor se reparte a lo largo de los tendones en vez de concentrarse en un solo punto óseo.',
    },
    {
      q: '¿La gota puede causar dolor en el empeine?',
      a: 'Sí. La gota clásicamente afecta la articulación del dedo gordo, pero también puede afectar las articulaciones del pie medio. Un episodio de gota aparece de golpe, muchas veces de la noche a la mañana, con dolor intenso, enrojecimiento, calor e hinchazón en una sola articulación. Se ve diferente de la tendinitis o de una fractura por estrés. Necesita manejo médico, no ejercicio.',
    },
    {
      q: '¿Debo ir al médico por dolor en el empeine?',
      a: 'Consulta a un profesional de la salud si el dolor está en un solo punto y empeora, si hay enrojecimiento o calor sobre la zona que duele, si el dolor sigue después de una semana de reposo y cambio de zapatos, si apareció de golpe después de una lesión, o si hay entumecimiento u hormigueo. Las fracturas por estrés, la gota y los problemas de nervios se benefician de una evaluación temprana.',
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
    h2: 'Hacerlo como un plan',
    text: 'Walkito está construido alrededor del dolor de talón y el pie plano, no del dolor en el empeine específicamente. Pero si la sobrecarga de los tendones extensores es parte de tu panorama, el fortalecimiento del tibial anterior (elevaciones de la punta del pie) y el estiramiento de pantorrilla en la app abordan los desequilibrios musculares que contribuyen. Marcar el empeine en el mapa de dolor durante un check-in le permite a la app rastrear si el dolor está cambiando junto con tus ejercicios.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba corta mide la resistencia de la pantorrilla, la sujeción del arco y el equilibrio. Walkito no diagnostica el dolor en el empeine. Si sospechas una fractura por estrés, gota o un problema de nervio, consulta a un profesional de la salud antes de empezar cualquier programa de ejercicio.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor en el empeine',
  campaign: 'guide-top-of-foot-es',
};
