import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const ACHILLES_ES: Guide = {
  lang: 'es',
  page: 'achilles',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Ejercicios para tendinitis de Aquiles: excéntricos y más',
  description:
    'Ejercicios para la tendinitis de Aquiles con dosis: excéntricos de talón, resistencia pesada y lenta, insercional vs. porción media y cuándo parar.',
  h1: 'Ejercicios para la tendinitis de Aquiles: excéntricos de talón, dosis y qué dice la investigación',
  lede:
    'Los ejercicios para la tendinitis de Aquiles funcionan mejor cuando entiendes el descenso de talón como trabajo de fuerza, no como un estiramiento. La guía clínica de 2024 le da al ejercicio su grado más alto, **A**, y un metaanálisis en red de 2021 con 29\u00A0ensayos no encontró ningún protocolo claramente mejor que otro. Lo que importa es cargar el tendón de forma constante durante semanas.',
  intro: [
    'Esta página explica esos ejercicios a fondo. Si te duele bajo el pie y no en la parte de atrás del talón, lo que buscas son [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/). La página de [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) resume los dos. Si el dolor está a lo largo de la tibia y no en el talón, mira [ejercicios para la periostitis tibial](/es/ejercicios-periostitis-tibial/); si solo aparece después de un día largo de pie y no al correr, mira [dolor de pies por estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/). La mayoría de la gente usa «tendinitis» y «tendinopatía» como si fueran lo mismo. Las guías actuales usan «tendinopatía» porque el problema suele ser de carga, no pura inflamación. Esta página usa «tendinitis» en los títulos y «tendinopatía» donde la guía lo hace.',
  ],
  takeaways: [
    'La guía clínica de 2024 le da al ejercicio (cualquier tipo que cargue el tendón) un grado **A**, su grado más alto, para la tendinopatía de Aquiles en la porción media (Chimenti y colegas, 2024).',
    'Un metaanálisis en red de 29\u00A0ensayos aleatorizados no encontró una diferencia clínicamente relevante entre tipos de ejercicio a los 3 ni a los 12\u00A0meses (van der Vlist y colegas, 2021).',
    'En un ensayo con 58\u00A0personas, la resistencia pesada y lenta 3\u00A0días a la semana dio resultados igual de buenos que los excéntricos dos veces al día (Beyer y colegas, 2015).',
    'Para el dolor de Aquiles insercional (justo en el hueso del talón), los descensos de talón deben quedarse a nivel del piso y no bajar por debajo de la orilla del escalón, porque una dorsiflexión profunda, doblar el tobillo para que los dedos suban hacia la tibia, aprieta el tendón contra el hueso (Jonsson y colegas, 2008).',
    'Un dolor durante la carga de hasta unos 5/10, que se calma para la mañana siguiente y no empeora semana a semana, fue la regla probada en un ensayo aleatorizado que permitía seguir haciendo deporte durante la rehabilitación (Silbernagel y colegas, 2007).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Es tendinitis o tendinopatía, y eso cambia los ejercicios?',
      paragraphs: [
        '«Tendinitis» sugiere inflamación. «Tendinopatía» describe un tendón que cambió por la carga, muchas veces engrosado, sin que la inflamación sea lo principal. La guía de 2024 usa «tendinopatía». Para los ejercicios, el nombre no cambia lo que haces. Los dos describen el mismo problema: un tendón que duele con la carga, normalmente unos centímetros por encima del hueso del talón (porción media) o justo donde se inserta (insercional).',
        'Dónde te duele en el tendón sí cambia los ejercicios. Esa diferencia está explicada más abajo.',
      ],
      cites: [CITE.achillesGuideline],
    },
    {
      h2: '¿Qué es el descenso excéntrico de talón y por qué no es un estiramiento?',
      paragraphs: [
        'El descenso excéntrico de talón es un ejercicio de fuerza, no un estiramiento de flexibilidad. Subes con los dos pies, pasas el peso al lado que duele y bajas despacio con un solo pie, dejando que el talón baje por debajo de la orilla del escalón. La bajada es la contracción excéntrica: el músculo de la pantorrilla se alarga mientras carga peso. Esa bajada controlada es lo que le da capacidad al tendón con las semanas.',
        'El error más común es quedarse abajo como en un estiramiento de pantorrilla. Eso lo convierte en un estiramiento estático, que es otro estímulo. Lo que cuenta es la bajada lenta y con carga. Tres segundos para bajar, con el músculo trabajando todo el tiempo.',
        'En el ensayo de Alfredson de 1998, 15\u00A0atletas con dolor de Aquiles de mucho tiempo en la mitad del tendón hicieron descensos excéntricos de talón dos veces al día, 7\u00A0días a la semana, durante tres meses, con la rodilla estirada y doblada. Los 15 volvieron a su nivel anterior de carrera. Fue un ensayo pequeño y sin grupo de control, pero dio inicio a toda una línea de investigación.',
      ],
      exercises: [
        {
          name: 'Descensos excéntricos de talón (rodilla estirada)',
          evidence: { level: 'strong', why: 'El protocolo original de Alfredson; respaldado por la guía de 2024, que le da al ejercicio una A.' },
          dose: 'Alfredson: 3 x 15, dos veces al día, tres meses. Walkito: 3 x 10, cada pierna',
          how: 'Párate en la orilla de un escalón. Sube con los dos pies, pasa el peso a la pierna que duele y baja despacio en tres segundos. El talón baja por debajo del escalón. Vuelve a subir con los dos pies. Con la rodilla estirada trabajas el gastrocnemio, el músculo más grande y externo de la pantorrilla.',
          often: 'Dos veces al día en el protocolo de Alfredson. Walkito: días de fuerza.',
          feel: 'Trabajo fuerte en la pantorrilla durante la bajada, no un estiramiento abajo',
          stop: 'Dolor por encima de 5/10 que no se calma para la mañana siguiente, o dolor que empeora semana a semana',
          media: 'heel_drop_straight',
          caption: 'Descenso excéntrico de talón: sube con los dos pies, baja despacio con uno, talón por debajo del escalón',
          alt: 'Una figura sobre un escalón baja un talón por debajo de la orilla con la rodilla estirada, con la pantorrilla y el tendón de Aquiles resaltados',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: '¿La resistencia pesada y lenta funciona igual que los excéntricos?',
      keyFact: 'Un ensayo de 2015 con 58\u00A0personas encontró que la resistencia pesada y lenta tres días a la semana dio resultados duraderos igual de buenos que el protocolo excéntrico clásico de dos veces al día (Beyer y colegas, 2015).',
      paragraphs: [
        'Sí, según la evidencia actual. Un ensayo de 2015 con 58\u00A0personas comparó la resistencia pesada y lenta (HSR, por sus siglas en inglés), hecha 3\u00A0días a la semana, con el protocolo excéntrico clásico de dos veces al día. La conclusión: «Tanto el ECC tradicional como el HSR dan resultados clínicos positivos, igual de buenos y duraderos en pacientes con tendinopatía de Aquiles».',
        'Un metaanálisis en red de 2021 con 29\u00A0ensayos no encontró una diferencia clínicamente relevante entre ningún tipo de ejercicio activo a los 3 ni a los 12\u00A0meses. Todos fueron mejores que no hacer nada. Ningún ensayo tenía bajo riesgo de sesgo. Los autores recomendaron empezar con un programa de ejercicios para la pantorrilla porque es barato y tiene pocos riesgos.',
        'La forma del protocolo importa menos que cargar el tendón de forma constante. Los excéntricos son los más estudiados, la HSR funciona igual de bien y pide menos sesiones a la semana, y los dos son buenos puntos de partida. Para la versión de esta misma lógica de fuerza de pantorrilla en la fascitis plantar, mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/).',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
    {
      h2: '¿Qué ejercicios ayudan con la tendinitis de Aquiles y cuánto hacer?',
      paragraphs: [
        'Los ejercicios de abajo van de poca carga a mucha carga, empezando con elevaciones de talón sentado y subiendo por la escalera. Son las dosis de inicio de Walkito junto a los protocolos de investigación. [Cómo escribimos estas guías](/es/sobre-walkito/).',
        'Para el dolor de Aquiles insercional, todo ejercicio que use un escalón se debe hacer a nivel del piso. Ese cambio está explicado en la sección sobre el dolor insercional, más abajo.',
      ],
      table: {
        caption: 'Ejercicios para la tendinitis de Aquiles: dosis de investigación y dosis de inicio de Walkito',
        head: ['Ejercicio', 'Dosis del protocolo de investigación', 'Dosis de inicio de Walkito', 'Evidencia'],
        rows: [
          ['Elevaciones de talón sentado', 'Silbernagel fase 1: 3 x 10, sentado', '3 x 10, los dos pies', '**Sólida**: coincide con el protocolo publicado de la fase 1'],
          ['Elevaciones de talón con dos pies', 'Silbernagel fase 1: 3 x 10-15, de pie', '3 x 10, los dos pies', '**Sólida**: coincide directamente con la fase 1'],
          ['Elevación de talón sostenida (isométrica)', 'La guía de 2024 menciona lo isométrico como eficaz; en la práctica se sugieren 3-5 x 30-45\u00A0s', '3 x 20\u00A0s, los dos pies', '**Moderada**: la guía incluye la carga isométrica; no hay un ensayo aleatorizado solo isométrico en Aquiles'],
          ['Descensos excéntricos de talón (rodilla estirada)', 'Alfredson: 3 x 15, 2 veces al día, 7\u00A0días a la semana, tres meses', '3 x 10, cada pierna', '**Sólida**: el protocolo original; grado A en la guía'],
          ['Estiramiento de pantorrilla (rodilla estirada)', 'No forma parte de los ensayos de carga; es un complemento de movilidad', '3 x 30\u00A0s, cada pierna', '**Inicial**: planteado como movilidad, no como ejercicio de carga para el Aquiles'],
          ['Estiramiento de sóleo (rodilla doblada)', 'No forma parte de los ensayos de carga; es un complemento de movilidad', '3 x 30\u00A0s, cada pierna', '**Inicial**: la misma salvedad; evita estirar a fondo con dolor insercional'],
        ],
      },
      exercises: [
        {
          name: 'Elevaciones de talón sentado',
          evidence: { level: 'strong', why: 'Coincide con la dosis de la fase 1 de Silbernagel 2007. El grado A de la guía cubre todos los tipos de carga del tendón.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Siéntate con los pies apoyados. Empuja hacia arriba con la parte delantera de los dos pies. Las manos en las rodillas añaden resistencia. Es una forma de poca carga para empezar cuando el trabajo de pie duele demasiado.',
          often: 'Días de fuerza, mientras sea tu nivel',
          feel: 'Trabajo en las pantorrillas, con muy poco estiramiento en el tendón',
          stop: 'Dolor por encima de 5/10 que no se calma para la mañana siguiente',
          media: 'heel_raise_seated',
          caption: 'Elevaciones de talón sentado: empuja con la parte delantera del pie, las manos añaden carga',
          alt: 'Una figura sentada levanta los dos talones, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'strong', why: 'Coincide directamente con la fase 1 de Silbernagel 2007. Grado A en la guía.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies, sube recto sobre los dedos gordos y baja despacio en tres segundos. Los dos pies comparten la carga.',
          often: 'Días de fuerza, cuando las elevaciones sentado se sienten fáciles',
          feel: 'Las pantorrillas trabajando juntas, con un tirón suave en el tendón',
          stop: 'Dolor por encima de 5/10 que no se calma para la mañana siguiente',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies: sube recto y baja despacio',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Elevación de talón sostenida (isométrica)',
          evidence: { level: 'moderate', why: 'La guía de 2024 menciona lo isométrico como uno de los tipos de carga del tendón que funcionan. No hay un ensayo aleatorizado isométrico aislado en Aquiles.' },
          dose: '3\u00A0series de 20\u00A0segundos, los dos pies (investigación: 3-5 x 30-45\u00A0segundos)',
          how: 'Sube en puntas con los dos pies y quédate quieto arriba. No te dejes caer. Es una contracción isométrica, o sea, el músculo trabaja sin moverse, y carga el tendón sin el sube y baja que puede molestar en las primeras etapas del dolor de Aquiles.',
          often: 'Se puede hacer a diario en las etapas iniciales e irritables, antes de pasar al trabajo excéntrico completo',
          feel: 'Las pantorrillas trabajando para quedarse quietas; un dolor sordo en el tendón es aceptable',
          stop: 'Dolor por encima de 5/10 que no se calma para la mañana siguiente',
          media: 'heel_raise_hold',
          caption: 'Elevación de talón sostenida: sube y quédate quieto arriba',
          alt: 'Una figura se mantiene en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Descensos excéntricos de talón (rodilla estirada)',
          evidence: { level: 'strong', why: 'El protocolo original de Alfredson de 1998. Grado A en la guía de 2024.' },
          dose: 'Alfredson: 3 x 15, dos veces al día. Walkito: 3 x 10, cada pierna',
          how: 'Párate en la orilla de un escalón. Sube con los dos pies, pasa el peso a la pierna que duele y baja despacio con la rodilla estirada. El talón baja por debajo del escalón. Vuelve arriba con los dos pies.',
          often: 'Dos veces al día en el protocolo original. Walkito: días de fuerza.',
          feel: 'Trabajo fuerte en la pantorrilla durante la bajada',
          stop: 'Dolor por encima de 5/10 que no se calma para la mañana siguiente',
          media: 'heel_drop_straight',
          caption: 'Descenso excéntrico de talón: sube con los dos, baja despacio con uno, rodilla estirada',
          alt: 'Una figura sobre un escalón baja un talón por debajo de la orilla con la rodilla estirada, con el tendón de Aquiles resaltado',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'early', why: 'No forma parte de los ensayos de carga del Aquiles. Es un complemento de movilidad. Evita estirar a fondo con dolor insercional.' },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Pon las manos en una pared. Pierna de atrás estirada, talón abajo, cadera hacia adelante. No rebotes. Con dolor insercional, hazlo suave y para si molesta en la inserción.',
          often: 'Después de las sesiones con carga',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Cualquier tirón agudo donde el tendón se une al hueso del talón',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con la pantorrilla resaltada',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada)',
          evidence: { level: 'early', why: 'No forma parte de los ensayos de carga del Aquiles. Es un complemento de movilidad. Evita la dorsiflexión profunda con dolor insercional.' },
          dose: '3\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'En la misma posición en la pared, dobla la rodilla de atrás hasta que el estiramiento baje, cerca del talón. El sóleo solo se suelta con la rodilla doblada.',
          often: 'Después de las sesiones con carga',
          feel: 'Un estiramiento cerca del talón',
          stop: 'Cualquier tirón agudo en la inserción del Aquiles',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
      ],
      cites: [CITE.alfredson, CITE.silbernagel, CITE.achillesGuideline],
    },
    {
      h2: '¿Cuánto dolor es normal en los ejercicios para el Aquiles?',
      keyFact: 'En un ensayo con 38\u00A0personas, quienes siguieron corriendo bajo una regla de control del dolor, permitiendo hasta unos 5 de 10 que se calmaba para la mañana, mejoraron tanto a los doce meses como quienes descansaron primero (Silbernagel y colegas, 2007).',
      paragraphs: [
        'En Silbernagel 2007, 38\u00A0personas con dolor de Aquiles se dividieron en dos grupos. Uno siguió corriendo y saltando durante la rehabilitación, con la regla de que el dolor durante y después de la carga podía llegar a unos **5 de 10**, siempre que volviera a su nivel habitual para la mañana siguiente y no empeorara semana a semana. El otro grupo primero descansó. Los dos mejoraron de forma significativa a los 12\u00A0meses, sin diferencia entre ellos.',
        'Este límite es distinto de la regla de parar en 6/10 de la página de [fascitis plantar](/es/ejercicios-fascitis-plantar/), que viene de otra guía. La cifra de 5/10 es de un solo estudio, no un estándar universal, pero es el modelo de dolor más citado en la rehabilitación del Aquiles.',
        'Algo de molestia durante la carga es normal y era aceptable en el ensayo. Un dolor que no se calma en la noche, que empeora semana a semana o que llega de golpe como un dolor agudo no lo es.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: '¿Tu dolor está en la mitad del tendón o en el hueso del talón, y por qué eso cambia el ejercicio?',
      figure: { id: 'achilles', caption: 'El dolor del tendón de Aquiles suele estar en uno de dos sitios: la parte media del tendón o donde se une al hueso del talón.', alt: 'Vista lateral de un pie y un tobillo con el tendón de Aquiles desde la pantorrilla hasta la parte de atrás del hueso del talón, y una zona roja en la parte media del tendón.' },
      keyFact: 'En un estudio piloto de 27\u00A0personas con dolor insercional del Aquiles, la carga excéntrica a nivel del piso sin dorsiflexión profunda dio buenos resultados en el 67\u00A0% de los casos (Jonsson y colegas, 2008).',
      paragraphs: [
        'La tendinopatía de Aquiles en la porción media está en el cuerpo del tendón, normalmente de 2 a 6\u00A0centímetros por encima del hueso del talón. Los excéntricos clásicos y la resistencia pesada y lenta tienen su mejor evidencia aquí. Los descensos de talón desde la orilla de un escalón son adecuados para el dolor en la porción media.',
        'La tendinopatía de Aquiles insercional es dolor justo donde el tendón se une al hueso. En un estudio piloto de 2008 con 27\u00A0personas (34\u00A0tendones) con dolor insercional crónico, un protocolo modificado con carga excéntrica solo a nivel del piso, sin dorsiflexión más allá de la posición neutra, reportó buenos resultados en el 67\u00A0por ciento de los casos. Una dorsiflexión profunda aprieta el tendón contra el hueso del talón, y eso irrita la inserción.',
        'Si te duele en la parte de atrás del hueso del talón y no más arriba en el tendón, haz todas las elevaciones y los descensos de talón a nivel del piso. No bajes por debajo de la orilla del escalón. Evita los estiramientos fuertes por la misma razón. Es el cambio más importante en los programas para el Aquiles, y el que más se pasa por alto.',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: '¿Cuántas elevaciones de talón a una pierna deberías poder hacer?',
      paragraphs: [
        'La guía de 2024 incluye la prueba de resistencia de elevación de talón a una pierna como parte de la forma recomendada de medir la fuerza de la pantorrilla y seguir la recuperación. Un estudio normativo con 566\u00A0adultos sanos pone una cifra típica de unas 25\u00A0repeticiones, ajustada por edad, sexo y nivel de actividad. Lo que importa es la tendencia con el tiempo y la diferencia entre tus dos lados.',
        'La meta de pantorrilla en la app es de 25\u00A0elevaciones de talón a una pierna. La prueba se hace cada 14\u00A0días mientras la meta de pantorrilla está activa, y después cada 28\u00A0días. También se sigue la diferencia entre piernas, porque una diferencia que no se va puede indicar una recuperación incompleta.',
      ],
      cites: [CITE.hebertLosier, CITE.achillesGuideline],
    },
    {
      h2: '¿Puedes seguir corriendo durante la rehabilitación del Aquiles?',
      paragraphs: [
        'En Silbernagel 2007, los pacientes que siguieron corriendo durante la rehabilitación con el modelo de control del dolor no estuvieron peor que los que primero descansaron. Los dos grupos mejoraron a los 12\u00A0meses. El ensayo concluyó que seguir activo, vigilando el dolor, «podría ser una opción valiosa» durante la rehabilitación.',
        'Eso no significa que correr sea inofensivo en todos los casos. Si el dolor no se calma en la noche, o si cada semana va peor, bájale. El dolor donde el tendón se une al hueso del talón pide más cuidado que el dolor en la mitad del tendón. Cualquier chasquido o tronido repentino es una razón para parar y consultar a un profesional de la salud.',
        'La página de [dolor de talón en corredores](/es/dolor-de-talon-en-corredores/) explica con más detalle cómo manejar la carga al correr.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: '¿Cuánto tardan en ayudar los ejercicios para el Aquiles?',
      paragraphs: [
        'La recuperación de la tendinopatía de Aquiles se mide en meses. Los principales ensayos de carga duraron unos tres meses y siguieron los resultados hasta los 12\u00A0meses. La guía de 2024 señala que la función puede mejorar desde las 2\u00A0semanas, pero una recuperación más completa tarda bastante más.',
        'Ningún ensayo promete un plazo fijo. Algunas personas responden más rápido y otras más despacio, y los casos insercionales suelen tardar más que los de la porción media. Lo que tienen en común es cargar el tendón de forma constante con el tiempo.',
      ],
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer, CITE.silbernagel],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la diferencia entre tendinitis y tendinopatía de Aquiles?',
      cites: [CITE.achillesGuideline],
      a: '«Tendinitis» da a entender inflamación, pero la mayoría del dolor crónico de Aquiles es un problema de carga más que de inflamación. La guía de 2024 usa «tendinopatía». Para el ejercicio, el nombre no cambia lo que haces. Los ejercicios de esta página sirven para los dos términos.',
    },
    {
      q: '¿Qué son los ejercicios excéntricos de talón para la tendinitis de Aquiles?',
      cites: [CITE.alfredson],
      a: 'Los descensos excéntricos de talón son un ejercicio de fuerza: subes con los dos pies y bajas despacio con uno, con el talón bajando por debajo de la orilla de un escalón. Lo importante es la bajada. En un ensayo de 1998, 15\u00A0atletas que lo hicieron dos veces al día durante tres meses volvieron todos a su nivel anterior de carrera. Investigaciones posteriores muestran que otros tipos de carga funcionan igual de bien.',
    },
    {
      q: '¿La resistencia pesada y lenta es tan buena como los excéntricos de talón?',
      cites: [CITE.beyer, CITE.vanDerVlist],
      a: 'Un ensayo de 2015 con 58\u00A0personas concluyó que los dos dan «resultados clínicos positivos, igual de buenos y duraderos». Un metaanálisis de 2021 con 29\u00A0ensayos no encontró una diferencia clínicamente relevante entre tipos de ejercicio activo a los 3 ni a los 12\u00A0meses. Lo que importa es cargar el tendón de forma constante, no el protocolo concreto.',
    },
    {
      q: '¿Cuánto dolor es normal al hacer ejercicios para el Aquiles?',
      cites: [CITE.silbernagel],
      a: 'Un ensayo permitió un dolor de hasta unos 5/10 durante la carga, siempre que se calmara para la mañana siguiente y no empeorara semana a semana. A los pacientes con ese modelo les fue igual de bien que a los que primero descansaron (Silbernagel 2007). Un dolor que sigue alto durante la noche o empeora cada semana es la señal para bajarle.',
    },
    {
      q: '¿Los ejercicios para el Aquiles insercional son diferentes?',
      cites: [CITE.jonsson],
      a: 'Sí. El protocolo clásico con descensos profundos de talón dio malos resultados para el dolor donde el tendón se une al hueso del talón. Un estudio piloto de 2008 probó la carga excéntrica solo a nivel del piso, sin dorsiflexión más allá de la posición neutra, y reportó buenos resultados en el 67\u00A0por ciento de 27\u00A0pacientes. Con dolor insercional, evita los descensos profundos y los estiramientos fuertes.',
    },
    {
      q: '¿Debo estirar el tendón de Aquiles si me duele?',
      cites: [CITE.alfredson, CITE.silbernagel, CITE.beyer],
      a: 'Estirar no es el ejercicio principal para la tendinopatía de Aquiles. Los ensayos de esta página son todos protocolos de carga (elevaciones y descensos de talón), no programas de estiramiento. Puedes hacer movilidad suave de pantorrilla después de las sesiones con carga, pero estirar fuerte puede empeorar los síntomas, sobre todo con dolor insercional, donde la dorsiflexión aprieta la inserción.',
    },
    {
      q: '¿Cuánto tardan en funcionar los ejercicios para la tendinitis de Aquiles?',
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer],
      a: 'La recuperación se mide en meses. Los principales ensayos hicieron programas de carga de unos tres meses y siguieron los resultados hasta los 12\u00A0meses. La guía de 2024 señala que la función puede empezar a mejorar desde las 2\u00A0semanas, pero una recuperación más completa tarda bastante más. Ningún ensayo promete un plazo fijo.',
    },
    {
      q: '¿Qué no se debe hacer con tendinitis de Aquiles?',
      cites: [CITE.jonsson, CITE.silbernagel],
      a: 'Evita aumentos repentinos en el volumen de carrera o la intensidad de los sprints, el estiramiento profundo de pantorrilla si el dolor está en la inserción con el hueso del talón, y seguir forzando con dolor que sigue alto a la mañana siguiente. Un chasquido o tronido repentino necesita atención de un profesional de inmediato. El reposo total tampoco es obligatorio; la actividad guiada por el dolor suele ser mejor que detenerse por completo.',
    },
    {
      q: '¿Caminar empeora la tendinitis de Aquiles?',
      cites: [CITE.silbernagel],
      a: 'Generalmente no. Caminar es de menor impacto que correr, y muchas personas con tendinopatía de Aquiles pueden seguir caminando sin que se les dispare el dolor. Vigila si el dolor sigue alto a la mañana siguiente o va empeorando semana a semana; esa es la señal para bajarle la distancia o el ritmo, no para dejar de moverte del todo. Las subidas pronunciadas y caminar rápido sobre superficies duras son más propensas a irritarlo.',
    },
    {
      q: '¿Qué se confunde con la tendinitis de Aquiles?',
      cites: [CITE.chooRearfoot],
      a: 'La bursitis retrocalcánea, la deformidad de Haglund y un desgarro parcial del Aquiles pueden causar un dolor parecido en la parte de atrás del talón. Un bulto óseo visible apunta más a la deformidad de Haglund, mientras que la hinchazón justo en la línea de atrás del zapato sugiere bursitis. Cualquier dolor agudo repentino con un chasquido, o la incapacidad de pararte en puntas, necesita evaluación urgente para descartar una rotura del tendón.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'sentiste un chasquido o tronido repentino, o como si te hubieran pateado en la parte de atrás de la pierna, sobre todo si de inmediato te cuesta impulsarte o caminar de puntas: puede indicar una rotura del tendón de Aquiles',
      'estás tomando o tomaste hace poco un antibiótico del grupo de las fluoroquinolonas (como ciprofloxacino o levofloxacino) y tienes dolor de tendón nuevo o que empeora: estos medicamentos tienen una advertencia de recuadro negro de la FDA por tendinitis y rotura de tendón',
      'el dolor y la hinchazón aparecieron de golpe con fiebre, enrojecimiento o calor sobre el tendón',
      'hay mucha hinchazón, un moretón o un hueco que se siente al tocar el tendón',
      'el dolor está justo donde el tendón se une al hueso del talón y empeora con los estiramientos o los descensos profundos de talón en lugar de mejorar: apunta a una tendinopatía insercional que necesita un enfoque modificado o la opinión de un profesional de la salud',
      'el dolor o la rigidez empeoran poco a poco durante semanas aunque cargues el tendón de forma constante',
      'duele en reposo o te despierta por la noche',
      'no puedes apoyar el pie, o cojeas',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'No tienes que adivinar el orden, las dosis ni cuándo añadir carga. Walkito arma un plan una semana a la vez en torno a una meta. La cadena de pantorrilla va de elevaciones sentado a elevaciones con dos pies, una elevación sostenida, elevaciones con toalla, descensos excéntricos de talón y saltos pogo. Cada paso se abre cuando dos sesiones en el nivel actual se sintieron fáciles.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas la meta de pantorrilla), una prueba mide la resistencia de la pantorrilla y el equilibrio. Walkito es un programa de ejercicios. No diagnostica. Si el dolor está justo donde el tendón se une al hueso del talón, pide a un profesional de la salud que lo revise antes de cargarlo fuerte.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Ejercicios para tendinitis de Aquiles',
  campaign: 'guide-achilles-es',
};
