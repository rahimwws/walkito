import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/shin-splints.ts` (2026-10-07), written around the
 * Spanish queries «periostitis tibial ejercicios» and «síndrome de estrés
 * tibial medial». Figures, doses, grades and qualifiers are identical to the
 * English page. Never «espinilla» (on the web it mostly means a pimple):
 * «tibia».
 */

/** `3, 5 o 7`: the plan's options as a Spanish list. */
const either = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}`;
const DAYS = either(PROGRAM.daysPerWeek);
const MINUTES = either(PROGRAM.sessionMinutes);

export const SHIN_SPLINTS_ES: Guide = {
  lang: 'es',
  page: 'shinSplints',
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicios para la periostitis tibial: qué ayuda y qué no',
  description:
    'Periostitis tibial en corredores: ejercicios, dosis de inicio, qué dice la investigación, cómo distinguirla de una fractura por estrés y cuándo consultar.',
  h1: 'Ejercicios para la periostitis tibial: qué ayuda y qué no',
  lede:
    'La periostitis tibial es un dolor a lo largo del borde interno de la tibia, repartido en varios centímetros y no en un solo punto. Su nombre clínico es síndrome de estrés tibial medial (SETM). La mayoría de las páginas presentan los ejercicios como si estuviera probado que aceleran la recuperación. Una revisión sistemática de 2013 sobre todos los ensayos de tratamiento encontró que no se ha demostrado que los estiramientos ni los ejercicios de fuerza la acorten.',
  intro: [
    'Eso no quiere decir que el ejercicio no sirva. Los ejercicios de abajo trabajan la resistencia de la pantorrilla, la fuerza de la parte delantera de la pierna y el control de la cadera, las zonas donde los investigadores encontraron diferencias entre personas con y sin periostitis tibial. Un estudio de casos y controles encontró que los corredores con periostitis tibial hacían menos elevaciones de talón hasta el fallo que controles comparables sin ella.',
    'Si recuperar esa resistencia acorta la recuperación sigue siendo una pregunta abierta. Lo más seguro, en todos los ensayos hasta ahora, es bajar la carga de carrera que la causó. Las elevaciones de talón, incluidas cuántas repeticiones hacer y cuándo agregar peso, están explicadas con más detalle en [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/). Si pasas todo el día de pie en lugar de correr, [dolor de pies por estar de pie](/es/dolor-de-pies-por-estar-de-pie/) cubre los mismos ejercicios de pantorrilla y arco para esa causa.',
  ],
  toc: true,
  takeaways: [
    'Una revisión sistemática de 2013 sobre 11\u00A0ensayos de tratamiento encontró que no está demostrado que los estiramientos y los ejercicios de fuerza aceleren la recuperación del síndrome de estrés tibial medial (Winters y colegas, 2013).',
    'En el único ensayo aleatorizado con ejercicio para la periostitis tibial, agregar estiramiento y fortalecimiento de pantorrilla a un programa de carrera progresivo no acortó la recuperación frente al programa de carrera solo, en un estudio con 74\u00A0deportistas (Moen y colegas, 2012).',
    'Los corredores con periostitis tibial hacían menos elevaciones de talón hasta el fallo que controles comparables, lo que sugiere una falta de resistencia en la pantorrilla (Madeley y colegas, 2007).',
    'Un dolor muy localizado, en un solo punto pequeño, y no repartido en varios centímetros de hueso, puede ser una fractura por estrés y necesita un profesional de la salud, no más ejercicio.',
  ],
  sections: [
    {
      h2: '¿Qué es la periostitis tibial y qué ejercicios ayudan de verdad?',
      paragraphs: [
        'La periostitis tibial, o síndrome de estrés tibial medial, es una lesión por sobreuso de la tibia y del tejido que la rodea. El dolor suele ser difuso, repartido a lo largo del borde interno de la tibia en varios centímetros, y casi siempre empieza durante o después de correr. Una revisión de 2020 sobre corredores principiantes y recreativos encontró que las relaciones más claras estaban en cómo se mueven los corredores, por ejemplo más rotación de cadera y un pie que se va hacia adentro más de lo normal.',
        'La respuesta honesta sobre los ejercicios para la periostitis tibial es que ningún programa de ejercicios concreto ha demostrado acelerar la recuperación en un ensayo controlado. Una revisión sistemática de 2013 analizó 11\u00A0estudios de tratamiento y concluyó que el estiramiento y el fortalecimiento «no han demostrado ser eficaces para tratar el SETM». En el único ensayo aleatorizado con un grupo de ejercicio, 74\u00A0deportistas se dividieron en tres grupos: un programa de carrera progresivo solo, el mismo programa más estiramiento y fortalecimiento de pantorrilla, y el mismo programa más medias de compresión. Los tres grupos mejoraron a un ritmo parecido.',
        'Así que los ejercicios de abajo no son un protocolo específico para la periostitis tibial. Son ejercicios generales de pierna y cadera que ya están en el catálogo y que trabajan los músculos y articulaciones que los investigadores estudiaron en personas con periostitis tibial. Lo más útil sigue siendo bajar la carga de carrera y volver a subirla poco a poco.',
      ],
      cites: [CITE.mtssReview, CITE.winters, CITE.moen],
    },
    {
      h2: 'Los ejercicios, con dosis de inicio',
      paragraphs: [
        'Son ejercicios del catálogo de la app que coinciden con los músculos y factores de riesgo que aparecen en la investigación sobre la periostitis tibial. Los estiramientos de pantorrilla y las elevaciones de talón son los mismos de [ejercicios y estiramientos para la fascitis plantar](/es/ejercicios-fascitis-plantar/), y trabajan los mismos tejidos. Son dosis de inicio, no una indicación médica. Todas las etiquetas de evidencia de abajo son **inicial**, porque ningún ejercicio de esta lista ha demostrado acortar la recuperación de la periostitis tibial en un ensayo. [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'Si marcas la tibia como adolorida en el check-in, Walkito te da movilidad de tobillo y automasaje plantar. Las elevaciones de dedos aparecen en el plan general como ejercicio complementario a partir del nivel 2, turnándose con la movilidad de tobillo. No hay un programa específico para la periostitis tibial. Si algún ejercicio sube tu dolor a **6/10 o más**, detente por hoy.',
      ],
      table: {
        head: ['Ejercicio', 'Dosis', 'Con qué frecuencia', 'Qué debes sentir', 'Detente si'],
        rows: [
          ['Estiramiento de pantorrilla', '2\u00A0series de 30\u00A0segundos, cada pierna', 'Casi todas las sesiones', 'Un estiramiento en la pantorrilla de la pierna de atrás, estirada', 'El dolor llega a 6/10'],
          ['Estiramiento de sóleo', '2\u00A0series de 30\u00A0segundos, cada pierna', 'Casi todas las sesiones', 'Un estiramiento en la parte baja de la pantorrilla, cerca del talón', 'El dolor llega a 6/10'],
          ['Elevaciones de puntas', '3\u00A0series de 10, los dos pies', 'Días de fuerza', 'El músculo de la parte delantera de la pierna trabajando al subir los dedos', 'El dolor llega a 6/10'],
          ['Elevaciones de talón con dos pies', '3\u00A0series de 10, los dos pies', 'Días de fuerza', 'Las pantorrillas trabajando, con los dos pies compartiendo la carga', 'El dolor llega a 6/10'],
          ['Abducción de cadera', '3\u00A0series de 15, cada pierna', 'Días de fuerza', 'Trabajo en la parte externa de la cadera', 'El dolor llega a 6/10'],
          ['Equilibrio a una pierna', '3\u00A0series de 30\u00A0segundos, cada pierna', 'Días de equilibrio', 'El pie y el tobillo haciendo pequeñas correcciones', 'El dolor llega a 6/10'],
          ['Movilidad de tobillo', '2\u00A0series de 15, cada pierna', 'Casi todas las sesiones', 'El tobillo doblándose más, con el talón abajo', 'El dolor llega a 6/10'],
          ['Automasaje plantar', '2\u00A0minutos', 'Días de recuperación', 'Presión firme bajo el pie, nunca una mueca de dolor', 'El dolor llega a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Estiramiento de pantorrilla',
          evidence: {
            level: 'early',
            why: 'Se recomienda mucho para la periostitis tibial. Una revisión sistemática de 2013 encontró que no está demostrado que el estiramiento acelere la recuperación.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento en la pantorrilla',
          how: 'Pon las manos en una pared. Deja la pierna de atrás estirada, el talón abajo y la cadera hacia adelante. La pantorrilla y la parte delantera de la pierna se reparten el trabajo de controlar el pie cuando corres, así que una pantorrilla rígida pasa más carga a la tibia.',
          image: 'Ejercicio: estiramiento de pantorrilla',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo',
          evidence: {
            level: 'early',
            why: 'El mismo razonamiento que el estiramiento de pantorrilla. No se ha probado por sí solo para la periostitis tibial.',
          },
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'Un estiramiento cerca del talón',
          how: 'Ponte en la misma posición contra la pared y dobla la rodilla de atrás hasta sentir el estiramiento más abajo, cerca del talón. El sóleo, el músculo más profundo de la pantorrilla, solo se suelta con la rodilla doblada.',
          image: 'Ejercicio: estiramiento de sóleo',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta sentirlo cerca del talón',
          alt: 'Una figura estirando contra la pared con la rodilla de atrás doblada, con la parte baja de la pantorrilla resaltada',
        },
        {
          name: 'Elevaciones de puntas',
          evidence: {
            level: 'early',
            why: 'Trabaja el tibial anterior, el músculo de la parte delantera de la pierna. No hay un ensayo específico para la periostitis tibial, pero es justo el músculo que duele.',
          },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'El músculo de la parte delantera de la pierna trabajando al subir los dedos',
          how: 'Párate con la espalda contra una pared. Levanta los dedos y la parte delantera de los dos pies del piso, con los talones abajo. Baja despacio. Es el músculo que va por delante de la tibia, el que duele cuando la periostitis tibial se activa.',
          image: 'Ejercicio: elevaciones de dedos',
          media: 'tibialis_raise',
          caption: 'Elevaciones de puntas: espalda contra la pared, sube los dedos, los talones no se mueven',
          alt: 'Una figura de pie contra una pared levanta los dedos del piso, con los músculos de la parte delantera de la pierna resaltados',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: {
            level: 'early',
            why: 'Los corredores con periostitis tibial tenían menos resistencia en la pantorrilla en un estudio de casos y controles. No se ha probado como tratamiento para la periostitis tibial.',
          },
          dose: '3\u00A0series de 10, los dos pies',
          often: 'Días de fuerza',
          feel: 'Las pantorrillas trabajando juntas',
          how: 'Párate sobre los dos pies, sube en línea recta sobre los dedos gordos y baja despacio. Los corredores con periostitis tibial tenían menos resistencia en la pantorrilla que controles comparables, y por eso la fuerza de pantorrilla está en esta lista.',
          image: 'Ejercicio: elevaciones de talón con dos pies',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón: sube en línea recta y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Abducción de cadera',
          evidence: {
            level: 'early',
            why: 'La rotación externa de cadera es un factor de riesgo confirmado en dos metaanálisis. Ningún ensayo ha probado el fortalecimiento de cadera como tratamiento para la periostitis tibial.',
          },
          dose: '3\u00A0series de 15, cada pierna',
          often: 'Días de fuerza',
          feel: 'Trabajo en la parte externa de la cadera',
          how: 'Párate con una banda elástica alrededor de los tobillos y lleva una pierna hacia el lado contra la banda. Empuja con el talón, no con los dedos. Dos metaanálisis encontraron que el rango de rotación de cadera es distinto entre personas con y sin periostitis tibial, y por eso se incluye trabajo de cadera.',
          image: 'Ejercicio: abducción de cadera',
          media: 'hip_abduction',
          caption: 'Abducción de cadera: lleva una pierna hacia el lado contra la banda',
          alt: 'Una figura de pie con una banda alrededor de los tobillos lleva una pierna hacia el lado, con la parte externa de la cadera resaltada',
        },
        {
          name: 'Equilibrio a una pierna',
          evidence: {
            level: 'early',
            why: 'Trabajo general de equilibrio. No hay un estudio específico para la periostitis tibial que lo respalde.',
          },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          often: 'Días de equilibrio',
          feel: 'Pequeñas correcciones en el pie y el tobillo',
          how: 'Párate en un pie y mira un punto fijo. Deja que el pie se tambalee. Ese tambaleo es el pie haciendo el trabajo de equilibrio. Ponte cerca de una pared si necesitas una red de seguridad.',
          image: 'Ejercicio: equilibrio a una pierna',
          media: 'single_leg_hold',
          caption: 'Equilibrio a una pierna: párate en un pie y deja que haga pequeñas correcciones',
          alt: 'Una figura en equilibrio sobre una pierna, con los músculos de la parte baja de la pierna resaltados',
        },
        {
          name: 'Movilidad de tobillo',
          evidence: {
            level: 'early',
            why: 'Es lo que la app te da cuando marcas la tibia como adolorida. No hay un ensayo específico para la periostitis tibial.',
          },
          dose: '2\u00A0series de 15, cada pierna',
          often: 'Casi todas las sesiones',
          feel: 'El tobillo doblándose más, con el talón abajo',
          how: 'Ponte con un pie adelante y otro atrás, cerca de una pared. Lleva la rodilla de adelante hacia adelante, por encima de los dedos, con el talón pegado al piso. Un tobillo que se dobla bien deja que la tibia absorba el impacto de forma más pareja cuando corres.',
          image: 'Ejercicio: movilidad de tobillo',
          media: 'ankle_rocks',
          caption: 'Movilidad de tobillo: rodilla por encima de los dedos, el talón no se levanta',
          alt: 'Una figura con un pie adelante y otro atrás lleva la rodilla por encima de los dedos, con el tobillo resaltado',
        },
        {
          name: 'Automasaje plantar',
          evidence: {
            level: 'early',
            why: 'Es lo que la app te da cuando marcas la tibia como adolorida. Es una medida de alivio, no una intervención probada para la periostitis tibial.',
          },
          dose: '2\u00A0minutos',
          often: 'Días de recuperación',
          feel: 'Presión firme bajo el pie',
          how: 'Siéntate y rueda la planta del pie despacio sobre una pelota de masaje, con presión firme. Si haces muecas de dolor, afloja. El automasaje plantar no trabaja la tibia directamente, pero suelta los tejidos de la planta, que comparten la carga con la pierna.',
          image: 'Ejercicio: automasaje plantar',
          media: 'foot_roll',
          caption: 'Automasaje plantar: rueda la planta despacio sobre una pelota, con presión firme',
          alt: 'Una figura sentada rueda la planta de un pie sobre una pelota, con la planta resaltada',
        },
      ],
      cites: [CITE.winters, CITE.madeley, CITE.newman, CITE.hamstraWright],
    },
    {
      h2: '¿Cómo distinguir la periostitis tibial de una fractura por estrés?',
      paragraphs: [
        'Distinguir la periostitis tibial de una fractura por estrés importa porque cada una necesita una respuesta distinta. El síndrome de estrés tibial medial y las fracturas por estrés de la tibia están en un mismo continuo de lesión ósea por estrés. Si sigues cargando la pierna, la periostitis tibial puede avanzar hacia una fractura por estrés, y esa es la razón principal para cambiar la carga de entrenamiento pronto en lugar de seguir corriendo con un dolor difuso en la tibia.',
        'La periostitis tibial suele causar una sensibilidad difusa, repartida en varios centímetros de la parte interna de la tibia. Una fractura por estrés causa sensibilidad en un solo punto pequeño, a menudo con hinchazón. Un dolor que se calma cuando entras en calor apunta más a periostitis tibial. Un dolor que sigue subiendo durante la carrera, o que aparece en reposo o de noche, apunta más a una fractura por estrés. Si el dolor está en la parte de atrás del talón y no en la tibia, es otro problema, casi siempre del tendón de Aquiles: mira [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/) si ahí es donde te duele.',
        'Una prueba casera que se menciona mucho es saltar en una pierna: si reproduce un dolor agudo y localizado, sugiere una fractura. Pero una revisión de 2011 en American Family Physician no encontró evidencia reciente que confirme su precisión, y casi la mitad de los pacientes con periostitis tibial confirmada también tuvieron un salto positivo. Así que un salto positivo es una razón para ver a un profesional de la salud, no una forma confiable de confirmar o descartar una fractura por tu cuenta.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: '¿Puedes seguir corriendo con periostitis tibial?',
      paragraphs: [
        'No hay un ensayo que te diga exactamente cuánto bajar. Lo que tiene algo de respaldo es la forma de un programa de carrera progresivo: en el único ensayo aleatorizado, los tres grupos siguieron un regreso gradual a correr, y los tres mejoraron más o menos al mismo ritmo. El programa de carrera, no los ejercicios agregados ni la compresión, fue lo que tuvieron en común.',
        'Un dolor agudo durante la carrera, un dolor que empeora mientras corres o un dolor en reposo son razones para parar y que te revisen, en lugar de seguir corriendo con él. Si el dolor se calma al entrar en calor y sigue siendo manejable, correr menos, más suave y menos veces es un punto medio razonable mientras la tibia se adapta. Los días de descanso entre carreras le dan tiempo al hueso para responder a la carga.',
        'La regla del 10\u00A0%, no subir más de un 10\u00A0% el kilometraje semanal, se menciona mucho, pero no está demostrada. Un ensayo de 2008 con 532\u00A0corredores nuevos no encontró diferencia en la tasa de lesiones entre un programa basado en la regla del 10\u00A0% y uno más rápido. Lo que sí mostró un estudio de 2014 con 874\u00A0corredores es que los saltos grandes y repentinos de distancia vienen con más lesiones. Gradual es mejor que repentino, pero un porcentaje concreto no tiene respaldo de ensayos. [Dolor de talón al correr](/heel-pain-runners/) (en inglés) explica la misma forma de manejar la carga con más detalle.',
      ],
      cites: [CITE.moen, CITE.buist, CITE.nielsen],
    },
    {
      h2: '¿Qué cambios en el entrenamiento evitan que la periostitis tibial vuelva?',
      paragraphs: [
        'Ningún ejercicio concreto ha demostrado prevenir la periostitis tibial en un ensayo. Los factores de riesgo que encontraron dos metaanálisis independientes apuntan a manejar la carga de entrenamiento en general y avanzar poco a poco, no a un estiramiento o ejercicio de fuerza en particular. Los factores de riesgo que se repitieron en las dos revisiones fueron un IMC más alto, una mayor caída del navicular (cuánto se aplana el arco bajo carga), ser mujer, tener menos años corriendo y haber tenido periostitis tibial antes.',
        'Un patrón general para volver a correr: primero caminar sin dolor, después trotar suave en superficies blandas con días de descanso entre medio, y después carreras más largas poco a poco mientras las mañanas sigan sin dolor. Cualquier día que reproduzca un dolor agudo o en un solo punto, o un dolor que sube durante la carrera en lugar de calmarse al entrar en calor, es una señal para parar, no para aguantar.',
      ],
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      h2: '¿Cuánto dura la periostitis tibial?',
      paragraphs: [
        'Las fuentes varían y ninguna apunta a un número único respaldado por un ensayo. La orientación general para lesiones por sobreuso es que los casos leves se calman en unas semanas con menos actividad, mientras que los casos ligados a errores de entrenamiento que se repiten pueden tardar más si vuelve la misma carga antes de que el tejido se adapte.',
        'En el ensayo aleatorizado con 74\u00A0deportistas con periostitis tibial, el tiempo promedio para completar el programa de carrera fue de unos 102 a 118\u00A0días según el grupo (promedio general de 105\u00A0días), aunque el rango fue amplio.',
        'Como la periostitis tibial y las fracturas por estrés de la tibia están en el mismo continuo, un dolor que no mejora después de unas semanas corriendo menos y con días de descanso es una razón para que te revisen, en lugar de esperar más. La señal más clara de recuperación es caminar sin dolor y después trotar suave sin dolor, en ese orden, antes de volver a subir el kilometraje.',
      ],
      cites: [CITE.moen],
    },
  ],
  faq: [
    {
      q: '¿Cómo quitar la periostitis tibial lo más rápido posible?',
      a: 'Ningún ensayo ha demostrado que un ejercicio o estiramiento acelere la recuperación de la periostitis tibial. La evidencia más cercana viene de un ensayo aleatorizado con 74\u00A0deportistas, donde agregar estiramiento y fortalecimiento de pantorrilla a un programa de carrera progresivo no acortó la recuperación frente al programa de carrera solo. Bajar la carga de carrera que la causó sigue siendo lo principal, no un ejercicio concreto.',
      cites: [CITE.moen],
    },
    {
      q: '¿Los estiramientos sirven para la periostitis tibial?',
      a: 'Una revisión sistemática de 2013 sobre 11\u00A0ensayos de tratamiento encontró que el estiramiento y el fortalecimiento «no han demostrado ser eficaces» para la periostitis tibial con la evidencia disponible. Eso no quiere decir que estirar haga daño, solo que ningún ensayo de buena calidad ha mostrado que cambie el curso de la lesión. Los estiramientos de pantorrilla se siguen recomendando mucho y es poco probable que empeoren las cosas.',
      cites: [CITE.winters],
    },
    {
      q: '¿Puedo seguir corriendo con periostitis tibial?',
      a: 'Nada en la evidencia de los ensayos te dice a cuánto kilometraje exacto bajar. Lo que mostró el único ensayo aleatorizado es que un regreso gradual y progresivo a correr funcionó más o menos igual de bien en los tres grupos del estudio. Un dolor agudo durante la carrera, un dolor que empeora mientras corres o un dolor en reposo son razones para parar y que te revisen, en lugar de aguantar.',
      cites: [CITE.moen],
    },
    {
      q: '¿La periostitis tibial puede convertirse en una fractura por estrés?',
      a: 'La periostitis tibial y las fracturas por estrés de la tibia se suelen describir como puntos distintos de un mismo continuo de lesión ósea por estrés. Si no se maneja, la periostitis tibial puede avanzar hacia una fractura por estrés si sigues cargando la pierna. Esa es la razón principal para cambiar la carga de entrenamiento pronto en lugar de seguir corriendo con dolor.',
    },
    {
      q: '¿Por qué me duele la tibia al correr?',
      a: 'Dos metaanálisis independientes encontraron un grupo constante de factores de riesgo para la periostitis tibial: un IMC más alto, una mayor caída del navicular (cuánto se aplana el arco bajo carga), ser mujer, tener menos años corriendo y haberla tenido antes. Otro estudio de casos y controles encontró que los corredores con periostitis tibial tenían menos resistencia en la pantorrilla, lo que sugiere que una falta de fuerza en los músculos que empujan el pie hacia abajo puede ser parte del problema.',
      cites: [CITE.newman, CITE.hamstraWright, CITE.madeley],
    },
    {
      q: '¿Hay algún ejercicio que evite que la periostitis tibial vuelva?',
      a: 'Ningún ejercicio concreto tiene evidencia de ensayos para prevenir la periostitis tibial. Los factores de riesgo de dos metaanálisis, como el IMC, la caída del arco y los años corriendo, apuntan a manejar la carga de entrenamiento poco a poco y a un acondicionamiento general de la pierna, no a un ejercicio en particular. Es una respuesta menos satisfactoria que el nombre de un ejercicio, pero es lo que respalda la investigación.',
      cites: [CITE.newman, CITE.hamstraWright],
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor está en un solo punto pequeño del hueso, en lugar de repartido en varios centímetros',
      'el dolor sube durante la carrera en lugar de calmarse al entrar en calor',
      'te duele en reposo o por la noche',
      'la tibia está hinchada en un punto concreto',
      'saltar en una pierna reproduce un dolor agudo y localizado',
      'sientes tensión, entumecimiento u hormigueo en la pierna o el pie que aumenta con el ejercicio y se va a los pocos minutos de parar, lo que puede ser una señal de síndrome compartimental',
      'el dolor no se ha calmado después de varias semanas corriendo menos y con días de descanso',
      'no puedes apoyar la pierna, o cojeas',
      'la pierna está roja o caliente, o tienes fiebre o te sientes mal',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: `Walkito no tiene un programa específico para la periostitis tibial, y esta página explica por qué: ningún programa de ejercicios ha demostrado acelerar la recuperación de la periostitis tibial en un ensayo. Lo que sí tiene Walkito es trabajo de pantorrilla, tobillo y equilibrio que apunta a los mismos músculos que estudiaron los investigadores, más un plan que se adapta a cómo te sientes cada mañana.`,
    more: [
      `Eliges ${DAYS} días a la semana y sesiones de ${MINUTES}\u00A0minutos. Cada ${PROGRAM.testEveryDays}\u00A0días (y después cada ${PROGRAM.testEveryDaysAfterGoal} una vez que alcanzas tu primera meta), una prueba corta mide la resistencia de la pantorrilla, cuánto mantienes el arco y el equilibrio, así puedes ver si el trabajo de la pierna está sirviendo de algo.`,
      'Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si el dolor en la tibia está en un solo punto, va empeorando o aparece en reposo, consulta a un profesional de la salud antes de cargarla más.',
    ],
    cta: `Empieza con ${PROGRAM.sessionMinutes[0]}\u00A0minutos al día.`,
  },
  crumb: 'Ejercicios para la periostitis tibial',
  campaign: 'guide-shin-splints-es',
};
