import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ball-of-foot.ts` (2026-10-07), written around the
 * Spanish queries «metatarsalgia ejercicios» and «dolor en la planta del pie».
 * Figures, doses, grades and qualifiers are identical to the English page.
 */

export const BALL_OF_FOOT_ES: Guide = {
  lang: 'es',
  page: 'ballOfFoot',
  mainSource: CITE.amaha,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Metatarsalgia: ejercicios para el dolor en la planta del pie',
  description:
    'Dolor en la planta del pie, detrás de los dedos: causas, metatarsalgia o neuroma de Morton, ejercicios, almohadillas metatarsales y cuándo consultar.',
  h1: 'Dolor en la planta del pie (metatarsalgia): causas y qué ayuda',
  lede:
    'Das un paso, te impulsas y ahí está: un dolor agudo justo detrás de los dedos, como si pisaras una piedrita. La parte delantera de la planta del pie carga todo tu peso en cada paso, y varios problemas distintos pueden hacer que duela. Esta página explica cuáles son, qué dice la evidencia sobre el ejercicio y el calzado, y dónde están los vacíos reales de la investigación.',
  intro: [
    'El término clínico general es metatarsalgia, que significa dolor alrededor de las cabezas de los metatarsianos, los nudillos de hueso que tienes detrás de los dedos. Pero la metatarsalgia describe dónde duele, no es un diagnóstico. Bajo ese nombre hay varios problemas distintos, y no todos responden a lo mismo.',
  ],
  toc: true,
  takeaways: [
    'En un estudio con 41\u00A0personas con metatarsalgia primaria, un programa de ejercicios de dedos de 8\u00A0semanas bajó el dolor en promedio 2,7\u00A0puntos en una escala de 10. El estudio no tenía grupo de control (Amaha y colegas, 2020).',
    'Un gastrocnemio rígido, el músculo más grande y externo de la pantorrilla, pasa el peso hacia adelante, a la parte delantera del pie. En una serie de 254\u00A0personas con fascitis plantar, entre el 52 y el 60\u00A0% tenían una contractura aislada del gastrocnemio (Patel y DiGiovanni, 2011).',
    'Las almohadillas metatarsales, colocadas justo detrás de las cabezas de los metatarsianos, son el enfoque conservador más estudiado para el dolor en la parte delantera del pie.',
    'El neuroma de Morton y la metatarsalgia tienen síntomas parecidos, pero duelen en lugares distintos: el dolor del neuroma suele estar entre el tercer y el cuarto dedo, con hormigueo, mientras que la metatarsalgia ocupa una zona más amplia.',
  ],
  sections: [
    {
      h2: '¿Qué es la planta delantera del pie?',
      figure: { id: 'ball', caption: 'La parte delantera de la planta está bajo el extremo de los metatarsianos. El dolor de la metatarsalgia suele estar bajo el segundo y el tercero.', alt: 'Vista superior de los huesos del pie con el extremo del segundo, tercer y cuarto metatarsiano resaltado en rojo.' },
      paragraphs: [
        'Es la zona acolchada de la planta, justo detrás de los dedos. Debajo están las cabezas de los cinco metatarsianos, huesos largos que van desde la mitad del pie hasta la base de cada dedo. Al caminar, esta zona soporta más o menos el doble de tu peso en el momento en que te impulsas.',
        'Los músculos que doblan y separan los dedos se llaman músculos intrínsecos del pie. Ayudan a repartir esa carga cuando te impulsas. Cuando se debilitan, o cuando cambia la estructura del pie, cae más fuerza sobre las cabezas de los metatarsianos, y muchas veces ahí empieza el dolor.',
      ],
    },
    {
      h2: '¿Qué causa el dolor en la planta del pie?',
      paragraphs: [
        '**Metatarsalgia** es el nombre más común. Describe dolor e inflamación alrededor de una o más cabezas de los metatarsianos, casi siempre la segunda y la tercera. El sobreuso, un segundo metatarsiano largo, el arco alto y la pantorrilla rígida pueden contribuir.',
        '**Neuroma de Morton** es un engrosamiento del nervio que pasa entre las cabezas de los metatarsianos, casi siempre entre el tercer y el cuarto dedo. Produce ardor, hormigueo o entumecimiento más que un dolor sordo. Los zapatos angostos o de tacón aprietan el nervio y lo empeoran.',
        '**Sesamoiditis** es la inflamación de los dos huesitos que están dentro del tendón, debajo de la articulación del dedo gordo. El dolor está justo debajo del dedo gordo, no en el centro de la parte delantera del pie.',
        '**Fractura por estrés de un metatarsiano** es una pequeña fisura en uno de los metatarsianos, casi siempre el segundo o el tercero. El dolor está en un punto concreto, suele empeorar a lo largo del día y puede doler de noche. Es común que se hinche la parte de arriba del pie. Este caso necesita estudios de imagen y reposo.',
        '**Dedos en garra y dedos en martillo** doblan las articulaciones de los dedos hacia abajo, lo que levanta el dedo del piso y pasa su carga al impulsarte a la cabeza del metatarsiano que está detrás.',
        '**Los tacones y los zapatos angostos** llevan el peso hacia la parte delantera del pie y aprietan las cabezas de los metatarsianos entre sí. Por eso el neuroma de Morton es más común en quienes los usan.',
        '**El arco alto** (pie cavo, un pie con el arco alto y rígido) reduce la superficie de apoyo de la planta y concentra la presión en el talón y en la parte delantera del pie. En el otro extremo, el [pie plano](/es/ejercicios-pie-plano/) también puede contribuir al dolor en la parte delantera del pie, porque cambia cómo rueda el pie al impulsarte.',
        '**La pantorrilla rígida** es una causa poco valorada. Cuando el gastrocnemio, el músculo más grande y externo de la pantorrilla, está rígido, el tobillo no se dobla lo suficiente al caminar. El cuerpo compensa levantando el talón antes de tiempo, y eso pasa más carga a la parte delantera del pie. Es el mismo mecanismo que hay detrás de la [fascitis plantar](/es/ejercicios-fascitis-plantar/) y de la [tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/).',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: '¿Cómo distinguir estos problemas?',
      paragraphs: [
        'La ubicación es la primera pista. Un dolor amplio debajo de la segunda y la tercera cabeza de los metatarsianos apunta a metatarsalgia. Un dolor entre el tercer y el cuarto dedo, con hormigueo, sugiere neuroma de Morton. Un dolor justo debajo de la articulación del dedo gordo encaja más con sesamoiditis. Un punto concreto en la parte de arriba del pie, con hinchazón, hace pensar en una fractura por estrés.',
        'Las fracturas por estrés muchas veces no se ven en una radiografía simple durante las primeras dos o tres semanas y pueden necesitar una resonancia magnética. Vale la pena ver a un profesional de la salud si el dolor sigue después de dos semanas a pesar del reposo y del cambio de zapatos, o si hay hormigueo, dolor nocturno o hinchazón visible.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: '¿El ejercicio ayuda con la metatarsalgia?',
      keyFact: 'En un estudio antes y después de 2020 con 41 personas con metatarsalgia primaria, un programa de ejercicios de dedos de 8 semanas bajó el dolor en promedio 2,7 puntos en una escala de 10, sin grupo de control (Amaha y colegas, 2020).',
      paragraphs: [
        'La respuesta honesta es que la evidencia sobre el ejercicio en la metatarsalgia es inicial y limitada. Es mucho más escasa que la evidencia para la [fascitis plantar](/es/ejercicios-fascitis-plantar/) o la tendinitis de Aquiles, donde sí hay ensayos aleatorizados.',
        'El mejor estudio hasta ahora es un estudio antes y después de 2020 con 41\u00A0personas (56\u00A0pies) con metatarsalgia primaria. Un programa de ejercicios de dedos de 8\u00A0semanas, sobre todo recoger la toalla y levantar canicas, bajó el dolor en promedio 2,7\u00A0puntos en una escala de 10 y mejoró la fuerza de agarre de los dedos. Pero no hubo grupo de control, así que parte de la mejora podría deberse a la recuperación natural. Los autores pidieron ensayos aleatorizados.',
        'La lógica es simple: al impulsarte, los dedos ayudan a repartir la carga con las cabezas de los metatarsianos. Cuando los músculos que doblan los dedos están débiles, cae más fuerza sobre los metatarsianos. El estudio de 2020 apoya esa idea, pero un solo estudio sin control no es una prueba. Las personas que tenían síntomas desde hacía más de un año mejoraron menos, igual que las que tenían un IMC más alto.',
      ],
      sourceNote:
        'Amaha 2020: 41\u00A0pacientes, 56\u00A0pies, edad promedio 63,4\u00A0años. Diseño antes y después. La EVA bajó de 5,2 a 2,5 (p < 0,01). Mejoraron la escala AOFAS, la prueba de levantar canicas y el tiempo de apoyo en una pierna (todos p < 0,01). Sin grupo de control.',
      cites: [CITE.amaha],
    },
    {
      h2: '¿Una pantorrilla rígida empeora el dolor en la parte delantera del pie?',
      keyFact: 'En 254 personas con fascitis plantar, entre el 52 y el 60 % tenía una contractura aislada del gastrocnemio, la pantorrilla rígida también vinculada a la sobrecarga de la parte delantera del pie (Patel y DiGiovanni, 2011).',
      paragraphs: [
        'Es muy probable. Cuando el gastrocnemio está rígido, el tobillo no se dobla lo suficiente al caminar. El cuerpo levanta el talón antes de tiempo, y eso carga más peso sobre la parte delantera de la planta. El término clínico es equino funcional, y es una causa reconocida de metatarsalgia.',
        'Los números vienen de la investigación sobre la fascitis plantar, pero el mecanismo es el mismo. En 254\u00A0personas con fascitis plantar, entre el 52 y el 60\u00A0% tenían una contractura aislada del gastrocnemio. Un estudio de casos y controles con 50\u00A0casos y 100\u00A0controles encontró que la menor dorsiflexión del tobillo (cuánto sube el pie hacia la tibia) era el factor de riesgo independiente más fuerte, con 23,3\u00A0veces más probabilidades.',
        'Ningún ensayo ha probado el estiramiento de pantorrilla específicamente para la metatarsalgia, pero la relación está reconocida en la clínica. Mira [elevaciones de talón para la fascitis plantar](/es/elevaciones-de-talon-fascitis-plantar/) para saber más sobre la relación entre la pantorrilla y el tobillo.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: '¿Y las almohadillas metatarsales, las plantillas y los zapatos?',
      paragraphs: [
        'Las almohadillas metatarsales son el enfoque conservador más usado. Una almohadilla colocada justo detrás de las cabezas de los metatarsianos levanta un poco el hueso y reparte la presión en una zona más amplia. La posición importa. Si queda muy adelante, justo debajo de la cabeza, puede empeorar el dolor.',
        'Los zapatos con suela balancín bajan la presión en la parte delantera del pie porque dejan que el pie ruede al impulsarte sin doblarse en las articulaciones de los metatarsianos. Una puntera ancha evita que las cabezas de los metatarsianos se aprieten entre sí. Dejar los zapatos angostos o de tacón suele ser el primer paso más sencillo.',
        'Las almohadillas y los zapatos cambian cómo se reparte la carga. El ejercicio construye la fuerza y la flexibilidad para soportarla. Cuando [estar de pie todo el día](/es/dolor-de-pies-por-estar-de-pie/) es parte del problema, las dos cosas importan.',
      ],
    },
    {
      h2: '¿Qué ejercicios ayudan con el dolor en la planta del pie (metatarsalgia)?',
      paragraphs: [
        'Estos ejercicios atacan dos lados del problema: la fuerza de los dedos y de los músculos intrínsecos del pie (para repartir la carga al impulsarte) y la flexibilidad de la pantorrilla (para que la parte delantera del pie no se sobrecargue). Ninguno se ha probado en un ensayo aleatorizado específicamente para la metatarsalgia. Cuando tocas la zona de la planta delantera en el mapa de dolor de Walkito durante un check-in, la sesión de alivio te da separación de dedos y estiramiento plantar. La zona de los dedos te da separación de dedos y pie corto sentado.',
      ],
      exercises: [
        {
          name: 'Separación de dedos',
          dose: '3\u00A0series de 10 separaciones',
          how: 'Siéntate o párate con el pie apoyado. Separa los cinco dedos todo lo que puedas, mantén 2 o 3\u00A0segundos y relaja. Trabaja los músculos pequeños que están entre los metatarsianos.',
          feel: 'Un estiramiento entre los dedos y un esfuerzo suave en la parte de arriba del pie',
          stop: 'Te duele la planta delantera del pie durante el ejercicio',
          evidence: { level: 'early', why: 'No hay un ensayo para la metatarsalgia. El ejercicio trabaja los músculos intrínsecos del pie, que ayudan a repartir la carga en la parte delantera del pie.' },
          media: 'toe_spread',
          caption: 'Separación de dedos: abre los cinco dedos, mantén y relaja',
          alt: 'Un pie con los cinco dedos bien separados, con los músculos entre los metatarsianos resaltados',
        },
        {
          name: 'Recoger la toalla',
          dose: '3\u00A0series de 10, cada pie',
          how: 'Siéntate con el pie apoyado sobre una toalla. Dobla los dedos para arrugar la toalla y atraerla hacia ti. Suelta y repite. Es lo más parecido a lo que usó el estudio de 2020.',
          feel: 'Los músculos bajo el arco y los dedos trabajando',
          stop: 'Te duele la planta delantera del pie durante el ejercicio',
          evidence: { level: 'early', why: 'El estudio de Amaha de 2020 usó un programa de ejercicios de dedos parecido y encontró menos dolor en 41\u00A0personas, pero no tenía grupo de control.' },
          media: 'towel_scrunch',
          caption: 'Recoger la toalla: dobla los dedos para atraer la toalla hacia ti',
          alt: 'Un pie sobre una toalla, con los dedos doblados arrugando la toalla y los músculos intrínsecos del pie resaltados',
        },
        {
          name: 'Pie corto, sentado',
          dose: '3\u00A0series de 10, mantén cada una 5\u00A0segundos',
          how: 'Siéntate con el pie apoyado en el piso. Sin doblar los dedos, intenta acortar el pie llevando la parte delantera de la planta hacia el talón. El arco debe subir un poco. Trabaja los músculos intrínsecos del pie que sostienen el arco y la parte delantera del pie desde abajo.',
          feel: 'Una tensión debajo del arco',
          stop: 'Te duele la planta delantera del pie durante el ejercicio',
          evidence: { level: 'moderate', why: 'Un metaanálisis de 2024 sobre el entrenamiento de pie corto encontró mejoras en la postura del pie. No se ha probado específicamente para la metatarsalgia.' },
          media: 'short_foot_seated',
          caption: 'Pie corto: sube el arco sin doblar los dedos',
          alt: 'Una figura sentada con un pie en el piso, el arco subiendo un poco, con los músculos intrínsecos del pie resaltados',
        },
        {
          name: 'Elevación del dedo gordo',
          dose: '3\u00A0series de 10, cada pie',
          how: 'Párate o siéntate con el pie apoyado. Levanta solo el dedo gordo y deja los otros cuatro en el piso. Después al revés: presiona el dedo gordo hacia abajo y levanta los otros cuatro. Cuando el dedo gordo no se puede estirar bien, pasa más carga a las cabezas de los metatarsianos de al lado.',
          feel: 'Cuesta al principio, y después vas ganando control',
          stop: 'Te duele debajo de la articulación del dedo gordo, lo que sugiere sesamoiditis',
          evidence: { level: 'early', why: 'No hay un ensayo directo para la metatarsalgia. Se basa en el papel biomecánico del dedo gordo en el reparto de la carga en la parte delantera del pie.' },
          media: 'big_toe_lift',
          caption: 'Elevación del dedo gordo: levanta solo el dedo gordo, los otros cuatro siguen apoyados',
          alt: 'Un pie en el piso con el dedo gordo levantado y los otros cuatro apoyados, con el músculo extensor resaltado',
        },
        {
          name: 'Estiramiento plantar',
          dose: '2\u00A0series de 30\u00A0segundos, cada pie',
          how: 'Siéntate y cruza el pie que te duele sobre la rodilla contraria. Jala los dedos hacia atrás con suavidad hasta sentir un estiramiento a lo largo del arco. La fascia plantar va del talón a la base de los dedos y pasa justo por la parte delantera de la planta.',
          feel: 'Un estiramiento a lo largo del arco y de la planta del pie',
          stop: 'Sientes un dolor agudo, no un estiramiento',
          evidence: { level: 'strong', why: 'La guía clínica de 2023 para el dolor de talón le da al estiramiento de la fascia plantar su grado más alto, A. No se ha probado específicamente para la metatarsalgia, pero la fascia es parte de la misma estructura que carga el peso.' },
          media: 'fascia_stretch',
          caption: 'Estiramiento plantar: jala los dedos hacia atrás con suavidad',
          alt: 'Una figura jala hacia atrás los dedos del pie cruzado, con la fascia plantar resaltada',
        },
        {
          name: 'Estiramiento de pantorrilla, rodilla estirada',
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'Manos en la pared. Pierna de atrás estirada, talón abajo, cadera hacia adelante. Mantén hasta sentir el estiramiento en la parte alta de la pantorrilla.',
          feel: 'Un estiramiento en la parte alta de la pantorrilla',
          stop: 'Te duele el tendón de Aquiles',
          evidence: { level: 'strong', why: 'Grado A en la guía clínica de 2023 para el dolor de talón para el estiramiento de pantorrilla. La pantorrilla rígida es una causa reconocida de sobrecarga en la parte delantera del pie.' },
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, cadera hacia adelante',
          alt: 'Una figura apoyada en una pared con la pierna de atrás estirada, con el gastrocnemio resaltado',
        },
        {
          name: 'Estiramiento de pantorrilla, rodilla doblada',
          dose: '2\u00A0series de 30\u00A0segundos, cada pierna',
          how: 'En la misma posición que el estiramiento con la rodilla estirada, dobla la rodilla de atrás hasta que el estiramiento baje, cerca del tendón de Aquiles. Trabaja el sóleo, el músculo más profundo de la pantorrilla, que solo se suelta con la rodilla doblada.',
          feel: 'Un estiramiento más abajo en la pantorrilla, cerca del talón',
          stop: 'Te duele el tendón de Aquiles',
          evidence: { level: 'strong', why: 'El mismo grado A de la guía. Trabaja el sóleo, que también contribuye a la rigidez del tobillo.' },
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás hasta que el estiramiento baje',
          alt: 'Una figura con un pie adelante y otro atrás y las rodillas dobladas, con el sóleo resaltado',
        },
      ],
      cites: [CITE.amaha, CITE.guideline, CITE.cheng],
    },
    {
      h2: 'Lo que la evidencia dice y lo que no',
      paragraphs: [
        'La evidencia sobre el ejercicio para el dolor en la planta delantera del pie es más escasa que para la [fascitis plantar](/es/ejercicios-fascitis-plantar/) o la tendinitis de Aquiles, donde sí hay ensayos aleatorizados. Para la metatarsalgia hay un estudio antes y después con 41\u00A0personas y sin grupo de control. El razonamiento biomecánico tiene sentido, y el riesgo de unos ejercicios suaves de dedos y estiramientos de pantorrilla es bajo, pero falta una prueba directa de un ensayo controlado.',
        'El ejercicio solo puede no ser suficiente. Las almohadillas metatarsales, los zapatos con puntera ancha y usar menos tacones tienen un consenso clínico más amplio. Para el neuroma de Morton, cambiar de zapatos y usar almohadillas suele funcionar mejor que el ejercicio. Para una fractura por estrés de un metatarsiano, el ejercicio no es el camino hasta que el hueso se haya recuperado. Si el dolor dura más de unas semanas, o viene con entumecimiento o hinchazón, que te revisen primero. [Dolor de talón al correr](/es/dolor-de-talon-en-corredores/) explica cómo manejar la carga si corres.',
      ],
      cites: [CITE.amaha, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: '¿Qué es la metatarsalgia?',
      cites: [CITE.amaha],
      a: 'La metatarsalgia es dolor e inflamación alrededor de las cabezas de los metatarsianos, los nudillos de hueso de la parte delantera de la planta del pie. Describe dónde duele, no es un diagnóstico único. Las causas comunes incluyen el sobreuso, el arco alto, la pantorrilla rígida y la debilidad de los músculos que doblan los dedos. En un estudio con 41\u00A0personas, los ejercicios de dedos bajaron el dolor en promedio 2,7\u00A0puntos en una escala de 10 (Amaha 2020).',
    },
    {
      q: '¿Cómo saber si es metatarsalgia o neuroma de Morton?',
      a: 'La metatarsalgia es un dolor, de sordo a agudo, repartido debajo de la parte delantera de la planta. El neuroma de Morton es más concreto: ardor, hormigueo o entumecimiento entre el tercer y el cuarto dedo, a veces con un chasquido al apretar la parte delantera del pie. Un profesional de la salud puede distinguirlos con un examen físico y una ecografía.',
    },
    {
      q: '¿Los ejercicios de dedos sirven para el dolor en la planta del pie?',
      cites: [CITE.amaha],
      a: 'La evidencia es inicial. Un estudio con 41\u00A0personas encontró que 8\u00A0semanas de ejercicios de dedos mejoraron el dolor y la fuerza de agarre, pero no tenía grupo de control y sus autores pidieron ensayos aleatorizados (Amaha 2020). La idea tiene sentido: unos dedos más fuertes deberían repartir más carga al impulsarte. Pero falta una prueba directa de un ensayo controlado.',
    },
    {
      q: '¿Por qué una pantorrilla rígida hace que me duela la planta del pie?',
      cites: [CITE.patelGastrocnemius, CITE.riddle],
      a: 'Cuando el gastrocnemio, el músculo más grande y externo de la pantorrilla, está rígido, el tobillo no se dobla lo suficiente al caminar. El cuerpo compensa levantando el talón antes de tiempo, y eso pasa más peso a la parte delantera de la planta. En personas con fascitis plantar, entre el 52 y el 60\u00A0% tenían una contractura aislada del gastrocnemio (Patel y DiGiovanni, 2011). El mismo mecanismo contribuye a sobrecargar la parte delantera del pie.',
    },
    {
      q: '¿Las almohadillas metatarsales funcionan?',
      a: 'Las almohadillas metatarsales son el enfoque conservador más usado para el dolor en la parte delantera del pie. Levantan el metatarsiano justo detrás de la zona que duele y reparten la presión en una superficie más amplia. La posición importa: la almohadilla debe quedar justo detrás de las cabezas de los metatarsianos, no directamente debajo, o puede aumentar el dolor.',
    },
    {
      q: '¿El dolor en la planta del pie puede ser una fractura por estrés?',
      cites: [CITE.patelStressFracture],
      a: 'Sí. Las fracturas por estrés de los metatarsianos, casi siempre en el segundo o el tercero, causan un dolor en un punto concreto que empeora a lo largo del día y puede doler de noche. Es común que se hinche la parte de arriba del pie. Una fractura por estrés muchas veces no se ve en una radiografía simple durante las primeras dos o tres semanas y puede necesitar una resonancia magnética. Es una de las razones para ver a un profesional de la salud si el dolor en la parte delantera del pie no se va.',
    },
    {
      q: '¿Qué zapatos son mejores para el dolor en la planta del pie?',
      a: 'Zapatos con puntera ancha, suela acolchada y tacón bajo. Los zapatos con suela balancín ayudan porque dejan que el pie ruede al impulsarte sin doblarse en las articulaciones de los metatarsianos. Los zapatos angostos y los tacones hacen lo contrario. Sobre todo para el neuroma de Morton, cambiar de zapatos suele ser el paso más eficaz por sí solo.',
    },
    {
      q: '¿Cuánto dura un brote de metatarsalgia?',
      a: 'No hay un tiempo fijo. Un brote leve suele calmarse en cuanto reduces la actividad que lo provoca, cambias a zapatos acolchados y más anchos, y agregas una almohadilla metatarsal. Los brotes ligados a una causa que sigue activa, como tacones altos, dedos en garra o una pantorrilla tensa, pueden durar meses, porque ningún plazo único se ajusta a todas las causas.',
    },
    {
      q: '¿Cuáles son las complicaciones de una metatarsalgia sin tratar?',
      a: 'Si no se atiende, la metatarsalgia puede cambiar tu forma de caminar, porque de forma natural quitas peso del punto dolorido y lo pasas a otras partes del pie, lo que puede crear dolor en zonas nuevas. La presión constante sobre las cabezas de los metatarsianos también puede contribuir a callos o, con menos frecuencia, a deformidades como el dedo en martillo. Cambiar de calzado y usar almohadillas metatarsales a tiempo reduce este riesgo.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'tienes hormigueo, ardor o entumecimiento en los dedos, lo que puede indicar un problema de nervio como el neuroma de Morton',
      'el dolor está en un solo punto y empeora a lo largo del día, lo que puede sugerir una fractura por estrés',
      'hay hinchazón visible en la parte de arriba del pie',
      'el dolor empezó después de un aumento repentino de actividad, una caída o un golpe',
      'la articulación del dedo gordo está rígida, trabada o no se dobla hacia atrás',
      'el dolor no mejora después de dos semanas de reposo, cambio de zapatos y almohadillas',
      'tienes diabetes, menos sensibilidad en los pies o mala circulación',
      'te duelen los dos pies y tienes otras articulaciones hinchadas o rígidas',
      'te despierta por la noche o te duele en reposo',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'Puedes hacer los ejercicios de esta página por tu cuenta, o dejar que Walkito los organice por ti. La app arma un plan una semana a la vez. Cuando marcas la planta delantera del pie en el mapa de dolor, la sesión del check-in se enfoca en la separación de dedos y el estiramiento plantar. El programa completo agrega estiramiento y fortalecimiento de pantorrilla a medida que pasan las semanas.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días (y después cada 28 una vez que alcanzas esa meta), una prueba corta mide tu avance para que veas qué está cambiando. Walkito es un programa de ejercicios. No diagnostica y no reemplaza a un profesional de la salud. Si el dolor en la parte delantera del pie viene con entumecimiento, hinchazón o un bulto, consulta primero a un profesional de la salud.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor en la planta del pie',
  campaign: 'guide-ball-of-foot-es',
};
