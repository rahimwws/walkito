import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Traducido de `articles/ex-hip-abduction.ts` (2026-10-07). Consulta
 * principal: «abducción de cadera». Cifras, dosis, grados y citas idénticos
 * al inglés.
 */

export const EX_HIP_ABDUCTION_ES: Guide = {
  lang: 'es',
  page: 'exHipAbduction',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Abducción de cadera para el pie y el arco',
  description:
    'Cómo hacer abducción de cadera con banda para controlar mejor el pie y el arco: técnica, series, la relación cadera-pie y qué dice la investigación.',
  h1: 'Abducción de cadera: cómo ayuda a tus pies y cómo hacerla',
  lede:
    'La abducción de cadera es el movimiento de llevar una pierna hacia el lado, lejos de la línea media del cuerpo. Cuando los músculos abductores de la cadera están débiles, la rodilla se va hacia adentro al caminar y el pie hace demasiada pronación, lo que aplana el arco. Fortalecer el glúteo medio con abducción de cadera con banda puede reducir ese hundimiento hacia adentro y quitarle tensión al arco, a la fascia plantar y a la parte interna del tobillo.',
  takeaways: [
    'Un ensayo de 2023 con 52\u00A0personas con pie plano flexible encontró que un programa combinado de seis semanas, con fortalecimiento de cadera, ejercicios de pie corto, trabajo de tobillo y estiramientos, mejoró dos medidas de la forma del arco frente a un grupo de control (Brijwasi y colegas, 2023).',
    'El glúteo medio controla la pelvis y el muslo cuando estás apoyado en una pierna. Cuando está débil, la rodilla se va hacia adentro y el pie hace más pronación, cargando la parte interna del arco.',
    'Un estudio transversal de 2013 con unos 1900\u00A0adultos del Framingham Foot Study no encontró relación entre la postura de pie plano y el dolor lumbar, pero sí una relación pequeña entre un pie que se va hacia adentro al caminar y el dolor lumbar en mujeres (Menz y colegas, 2013).',
    'Walkito usa la abducción de cadera de pie con banda. Estar de pie obliga a la pierna de apoyo a estabilizarse mientras la otra pierna sube.',
  ],
  toc: false,
  sections: [
    {
      h2: '¿Qué es la abducción de cadera?',
      paragraphs: [
        'Abducción de cadera significa mover la pierna hacia el lado, lejos del centro del cuerpo. El músculo principal es el glúteo medio, en la parte externa de la cadera. Mantiene la pelvis nivelada cuando te paras en una pierna y evita que la cadera del otro lado se caiga.',
        'Este ejercicio aparece en los programas para los pies porque la cadera, la rodilla y el pie están conectados. Cuando el glúteo medio está débil, el muslo gira hacia adentro al caminar y al estar de pie, la rodilla lo sigue y el pie hace más pronación de la que debería. El arco se aplana bajo esa fuerza hacia adentro. Fortalecer la cadera reduce esa reacción en cadena.',
      ],
    },
    {
      h2: '¿Cómo se hace la abducción de cadera de pie con banda?',
      paragraphs: [
        'Párate con una banda elástica alrededor de los dos tobillos o justo encima de las rodillas. Apóyate en una pared o una silla para no perder el equilibrio. Pasa tu peso a la pierna de apoyo. Lleva la otra pierna recta hacia el lado, con los dedos apuntando al frente y el cuerpo derecho. No te inclines hacia el lado contrario. Baja despacio y repite.',
        'Empuja con el talón de la pierna que trabaja, no con los dedos. El movimiento es en la cadera, no en la cintura. No hace falta subir mucho. Unos 30 a 45\u00A0grados desde el piso es suficiente si la técnica se mantiene limpia. Subir más inclinando el cuerpo hacia el lado hace menos por el glúteo medio.',
      ],
      exercises: [
        {
          name: 'Abducción de cadera, de pie, con banda',
          evidence: { level: 'moderate', why: 'Forma parte del programa combinado que mejoró la forma del arco en un ensayo aleatorizado de 2023 (Brijwasi, 2023). Fortalecer la cadera para la alineación del pie tiene respaldo biomecánico, aunque no se ha probado por separado en un ensayo propio con resultados en el pie.' },
          dose: 'Walkito empieza con 3\u00A0series de 15, cada pierna',
          how: 'Párate con una banda alrededor de los dos tobillos. Apóyate en una pared. Lleva una pierna recta hacia el lado, con los dedos al frente. Empuja con el talón. Baja despacio.',
          often: 'Días de fuerza, cuando la meta de izquierda y derecha está en tu plan',
          feel: 'Trabajo en la parte externa de la cadera',
          stop: 'El dolor llega a 6/10',
          media: 'hip_abduction',
          caption: 'Abducción de cadera: lleva una pierna hacia el lado contra la banda',
          alt: 'Una figura de pie con una banda elástica alrededor de los tobillos lleva una pierna hacia el lado',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: '¿Cómo afecta la cadera al pie y al arco?',
      paragraphs: [
        'La conexión pasa por una cadena biomecánica: cadera, rodilla, tobillo, pie. Cuando el glúteo medio no logra mantener la pelvis nivelada al apoyarte en una pierna, el muslo gira hacia adentro. La rodilla lo sigue y se va hacia la línea media. Ese giro obliga al pie a hacer pronación: el tobillo se va hacia adentro y el arco se aplana.',
        'Por eso muchas personas con pie plano o dolor en el arco también tienen las caderas débiles. El arco no está fallando por sí solo. Está recibiendo demasiada carga desde arriba. Fortalecer la cadera reduce esa carga que baja.',
        'Un estudio transversal de 2013 del Framingham Foot Study analizó a unos 1900\u00A0adultos de la comunidad. La postura de pie plano por sí sola no se relacionó con el dolor lumbar, pero un pie que se iba hacia adentro al caminar mostró una relación pequeña con el dolor lumbar en mujeres, lo que sugiere que la cadena pie-cadera-espalda puede funcionar en los dos sentidos.',
        'El ensayo de pie plano de Brijwasi y colegas (2023) incluyó fortalecimiento de cadera junto con ejercicios de pie corto, trabajo de tobillo y estiramientos. El programa combinado mejoró la forma del arco en seis semanas. El estudio no separó cuánto aportó el fortalecimiento de cadera por sí solo, pero incluirlo refleja la lógica biomecánica.',
      ],
      cites: [CITE.menz, CITE.brijwasi],
    },
    {
      h2: '¿A quién le sirve la abducción de cadera para el dolor de pies?',
      paragraphs: [
        'A las personas con pie plano o con pronación excesiva, porque el ejercicio trabaja una causa común, más arriba en la cadena, del hundimiento del arco. Si tus rodillas tienden a irse hacia adentro cuando haces sentadillas o caminas, es probable que unos abductores de cadera débiles tengan que ver.',
        'A los corredores, porque estar apoyado en una pierna es la postura normal al correr. Cada zancada cae sobre un pie. Un glúteo medio débil en ese lado deja que la rodilla y el pie se vayan hacia adentro, lo que puede contribuir a la periostitis tibial, la fascitis plantar y la rodilla del corredor. Mira [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) y [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/) para más.',
        'A quienes pasan muchas horas de pie, sobre todo enfermeras y personas que trabajan en tiendas. Estar de pie mucho tiempo cansa el glúteo medio, y al final del turno el control de la cadera se debilita. Mira [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) para ejercicios que combinan bien con la abducción de cadera.',
      ],
    },
    {
      h2: 'Errores comunes en la abducción de cadera de pie',
      paragraphs: [
        'Inclinar el cuerpo hacia el lado contrario es el error más común. Cuando te inclinas, el cuerpo usa impulso y flexión lateral en lugar del glúteo medio. Mantente derecho. Es mejor subir menos con el cuerpo recto que subir mucho inclinándote.',
        'Otro error es girar el pie hacia afuera, con los dedos apuntando al techo. Así el trabajo pasa a los flexores de cadera y al tensor de la fascia lata en lugar del glúteo medio. Mantén los dedos apuntando al frente o un poco hacia abajo.',
        'Un tercer problema es balancear la pierna. El ejercicio debe ser lento y controlado, sobre todo al bajar. La fase de bajada (excéntrica) es donde se da buena parte del fortalecimiento. Si la pierna cae rápido, el músculo no está haciendo el trabajo.',
        'Por último, si la cadera de la pierna de apoyo se cae, es señal de que la banda es demasiado fuerte o de que el glúteo medio de ese lado se está cansando. La pelvis debe quedarse nivelada todo el tiempo. Usa una banda más suave o descansa entre series.',
      ],
    },
    {
      h2: '¿Qué dice la investigación?',
      paragraphs: [
        'La lógica biomecánica de la abducción de cadera en los programas para los pies está bien establecida: unos abductores de cadera débiles dejan que la rodilla se vaya hacia adentro, lo que aumenta la pronación del pie y la carga sobre el arco. Varios estudios observacionales confirman la relación entre la debilidad de cadera y los problemas de alineación de la pierna.',
        'En cuanto a resultados clínicos, la evidencia más fuerte viene de programas combinados. El ensayo de 2023 de Brijwasi y colegas incluyó fortalecimiento de cadera como parte de un programa de ejercicio de seis semanas para 52\u00A0personas con pie plano flexible. El programa mejoró la forma del arco. El fortalecimiento de cadera no se ha probado por separado en un ensayo propio de pie plano o de fascitis plantar.',
        'Un ensayo aleatorizado de 2024 con 45\u00A0mujeres con pie plano flexible comparó, durante seis semanas, ejercicios de pie corto, un programa de ejercicio combinado, y ejercicios de pie corto más abducción isométrica de cadera. El grupo que sumó abducción isométrica de cadera al pie corto tuvo una reducción significativamente mayor de la caída del navicular (una medida de cuánto se hunde el arco) que los otros dos grupos (Zarali y colegas, 2024), lo que apoya la idea de que el trabajo de cadera aporta algo que los ejercicios de pie solos no dan.',
        'La evidencia respalda la abducción de cadera como parte de un programa más amplio para los pies. No es un ejercicio aislado para el dolor en el arco, pero cubre un hueco que dejan los ejercicios que trabajan solo el pie. Páginas relacionadas: [ejercicios para el pie plano](/es/ejercicios-pie-plano/), [inversión de tobillo con banda](/es/ejercicios/inversion-de-tobillo-con-banda/), [ejercicio de pie corto](/es/ejercicios/pie-corto/).',
      ],
      cites: [CITE.zarali, CITE.brijwasi, CITE.cheng],
    },
  ],
  faq: [
    {
      q: '¿La abducción de cadera ayuda con el pie plano?',
      cites: [CITE.brijwasi],
      a: 'La abducción de cadera fortalece el glúteo medio, que controla desde arriba la alineación de la rodilla y del pie. Un ensayo de 2023 con 52\u00A0personas con pie plano flexible usó fortalecimiento de cadera dentro de un programa combinado y encontró que la forma del arco mejoró en seis semanas (Brijwasi, 2023). Funciona mejor como parte de un programa más amplio, no sola.',
    },
    {
      q: '¿Cuántas abducciones de cadera debo hacer?',
      a: 'Walkito empieza con 3\u00A0series de 15\u00A0repeticiones con cada pierna, de pie y con una banda elástica alrededor de los tobillos. Es un ejercicio de más repeticiones y menos carga, porque el glúteo medio necesita resistencia para caminar, no fuerza máxima.',
    },
    {
      q: '¿Puedo hacer la abducción de cadera acostado de lado?',
      a: 'La abducción de cadera acostado de lado trabaja el mismo músculo. De pie se suma el reto de mantener el equilibrio sobre la pierna de apoyo, lo que también entrena la cadera de ese lado. Walkito usa la versión de pie porque se parece más a caminar y a apoyarse en una pierna. Si de pie te sientes muy inestable, acostado de lado es un punto de partida razonable.',
    },
    {
      q: '¿Qué banda debo usar para la abducción de cadera?',
      a: 'Lo mejor es una banda elástica de circuito de resistencia suave a media. Ponla alrededor de los dos tobillos o justo encima de las rodillas. La banda debe dar suficiente resistencia para que las últimas repeticiones de cada serie cuesten, pero sin obligarte a inclinarte hacia el lado ni a balancear la pierna.',
    },
    {
      q: '¿Por qué hay abducción de cadera en un programa de ejercicios para los pies?',
      cites: [CITE.menz],
      a: 'La cadera controla lo que pasa en la rodilla y el pie. Un glúteo medio débil deja que la rodilla se vaya hacia adentro, lo que obliga al pie a hacer pronación y aplana el arco. Un estudio de 2013 con unos 1900\u00A0adultos encontró una relación pequeña entre un pie que se va hacia adentro al caminar y el dolor lumbar en mujeres, aunque la postura de pie plano sola no se relacionó con el dolor de espalda (Menz, 2013). Fortalecer la cadera reduce la sobrecarga que baja hacia el arco.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'tienes un dolor agudo de cadera que no te deja apoyar bien el peso',
      'la rodilla se va hacia adentro y no logras controlarla a pesar de practicar',
      'tienes dolor en la ingle o un chasquido en la cadera que empeora con el ejercicio',
      'el dolor de pie o de arco empeora a pesar de hacer ejercicio con regularidad durante varias semanas',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Walkito añade la abducción de cadera en los días de fuerza cuando una meta de equilibrio entre izquierda y derecha entra en tu plan. Va junto con ejercicios intrínsecos del pie y trabajo de pantorrilla, para que el arco tenga apoyo desde arriba y desde abajo. Las sesiones duran 3, 5 o 10\u00A0minutos, y una prueba cada 14\u00A0días sigue tu avance.',
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Abducción de cadera',
  campaign: 'ex-hip-abduction-es',
};
