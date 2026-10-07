import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Deformidad de Haglund (ES) ────────────────────────────────────────
 *
 * Translated from `articles/haglunds.ts`, written around the Spanish queries
 * «deformidad de Haglund», «bulto en la parte de atrás del talón»,
 * «pump bump». Figures, grades and qualifiers are identical to the English
 * page. No new citations.
 */

export const HAGLUNDS_ES: Guide = {
  lang: 'es',
  page: 'haglunds',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Deformidad de Haglund: qué es, causas y qué hacer',
  description:
    'La deformidad de Haglund es un bulto óseo en la parte de atrás del talón, ligado a bursitis y dolor de Aquiles. Ejercicios y cuándo se habla de cirugía.',
  h1: 'Deformidad de Haglund: el bulto en la parte de atrás del talón, qué lo causa y qué ayuda',
  lede:
    'La deformidad de Haglund es un agrandamiento óseo en la parte superior trasera del hueso del talón. Está justo donde se inserta el tendón de Aquiles, y cuando los zapatos presionan ahí, la bursa entre el hueso y el tendón se irrita. El resultado es dolor en la parte de atrás del talón, hinchazón y a veces un bulto visible que algunas personas llaman pump bump. El manejo conservador es el enfoque de primera línea, pero la evidencia detrás es mayormente opinión de expertos, no ensayos.',
  intro: [
    'Esta página cubre la anatomía, la relación con la tendinopatía insercional del Aquiles y la bursitis retrocalcánea, qué pasos conservadores existen y cuándo entra la cirugía en la conversación. Si tu dolor está más arriba en el tendón y no en el hueso, la página de [ejercicios para la tendinitis de Aquiles](/es/ejercicios-tendinitis-aquiles/) es el mejor punto de partida. Si el dolor está debajo del talón, mira [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/) o [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/).',
  ],
  takeaways: [
    'La deformidad de Haglund es una prominencia ósea anormal en la parte posterosuperior del calcáneo, descrita por primera vez por Patrick Haglund en 1927. Puede llevar a bursitis retrocalcánea y tendinopatía insercional del Aquiles (Yuen y colegas, 2022).',
    'El manejo conservador incluye modificación del calzado (evitar contrafuertes rígidos), alzas de talón, estiramiento y fortalecimiento de la pantorrilla. Ningún ensayo controlado aleatorizado ha probado el manejo conservador para la deformidad de Haglund específicamente (Choo y colegas, 2020).',
    'Para el dolor insercional del Aquiles asociado a la deformidad de Haglund, los descensos excéntricos de talón deben quedarse a nivel del piso. La dorsiflexión profunda comprime el tendón contra el bulto (Jonsson y colegas, 2008).',
    'La cirugía se considera después de al menos seis meses de manejo conservador sin mejoría suficiente. Una revisión sistemática de 2022 encontró que tanto las técnicas abiertas como las endoscópicas mejoraron los puntajes funcionales, con las endoscópicas mostrando una recuperación más corta (Yuen y colegas, 2022).',
    'La guía de 2024 para la tendinopatía de Aquiles le da al ejercicio un grado **A** para la tendinopatía de la porción media, pero los casos insercionales, que incluyen la deformidad de Haglund, necesitan modificaciones para evitar la dorsiflexión provocativa (Chimenti y colegas, 2024).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Qué es la deformidad de Haglund?',
      paragraphs: [
        'La deformidad de Haglund es un bulto óseo en la parte posterosuperior del calcáneo, la esquina superior trasera del hueso del talón. Entre este bulto y el tendón de Aquiles hay un pequeño saco lleno de líquido llamado bursa retrocalcánea. Cuando el bulto es prominente, la bursa se comprime entre el hueso y el tendón, causando inflamación (bursitis retrocalcánea) y dolor en la parte de atrás del talón.',
        'El bulto en sí es una variación estructural. Algunas personas tienen un calcáneo más prominente que otras. Se vuelve un problema cuando la presión del zapato, la carga del tendón, o ambas, irritan la bursa y la inserción del tendón. La combinación de la prominencia ósea, la bursitis y la tendinopatía insercional del Aquiles a veces se llama síndrome de Haglund.',
        'El término «pump bump» viene de la asociación con zapatos de parte de atrás rígida, como los pumps o zapatos de vestir, que presionan directamente sobre la prominencia. Pero no es solo causada por los zapatos. La mecánica del pie, la tensión de la pantorrilla y la carga del tendón también juegan un papel.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: '¿Cómo se relaciona la deformidad de Haglund con la tendinopatía insercional del Aquiles?',
      paragraphs: [
        'La deformidad de Haglund y la tendinopatía insercional del Aquiles suelen aparecer juntas, pero no son la misma condición. La tendinopatía insercional es dolor en el punto donde el tendón de Aquiles se une al hueso del talón, normalmente por sobrecarga. La deformidad de Haglund es una forma del hueso. El bulto puede irritar el tendón desde atrás, y la inserción del tendón puede verse afectada por la misma compresión que inflama la bursa.',
        'El vínculo práctico: si tienes un bulto de Haglund y dolor en la parte de atrás del talón, el dolor puede venir de la bursa, de la inserción del tendón, o de los dos. Un profesional de la salud puede distinguirlo examinando dónde está la mayor sensibilidad y si el estiramiento o la carga reproducen el dolor.',
        'La guía de 2024 para la tendinopatía de Aquiles hace una separación clara entre la enfermedad de la porción media y la insercional. Para los problemas insercionales, que incluyen los casos asociados a la deformidad de Haglund, el protocolo estándar de descensos excéntricos de talón necesita modificación. La dorsiflexión profunda, dejar que el talón baje por debajo del escalón, comprime el tendón contra el hueso y puede empeorar los síntomas.',
      ],
      cites: [CITE.achillesGuideline, CITE.jonsson],
    },
    {
      h2: '¿Qué es la bursitis retrocalcánea?',
      paragraphs: [
        'La bursa retrocalcánea está en el espacio entre el calcáneo y el tendón de Aquiles. Su función es reducir la fricción. Cuando el bulto de Haglund es prominente, la bursa se comprime durante la dorsiflexión (doblar el tobillo para que el pie suba). El resultado es hinchazón, dolor y a veces enrojecimiento en la parte de atrás del talón.',
        'La bursitis retrocalcánea puede ocurrir sin la deformidad de Haglund, por ejemplo por aumentos repentinos en la carrera o el trabajo cuesta arriba. Pero la prominencia ósea la hace más probable. Los zapatos con contrafuertes rígidos que presionan sobre el bulto son un irritante mecánico directo.',
        'El dolor de la bursitis retrocalcánea está en la parte de atrás del talón, profundo entre el tendón y el hueso. Es distinto de la bursitis superficial (una hinchazón blanda y sensible en la superficie de la piel) y del dolor en la parte medial del talón de la fascitis plantar.',
      ],
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
    },
    {
      h2: '¿Cuáles son las opciones conservadoras para la deformidad de Haglund?',
      paragraphs: [
        'Una revisión narrativa de 2020 lista los pasos conservadores de primera línea: modificación del calzado (evitar zapatos con contrafuertes rígidos, usar zapatos abiertos por atrás o acolchar la zona del talón), alzas de talón para reducir la tensión del Aquiles, estiramiento del gastrocnemio y del sóleo, fortalecimiento de la pantorrilla y modificación de la actividad.',
        'Ningún ensayo controlado aleatorizado ha probado ninguna de estas intervenciones específicamente para la deformidad de Haglund. La evidencia es opinión de expertos y series de casos. La revisión quirúrgica de 2022 señaló que la mayoría de los autores recomienda al menos seis meses de manejo conservador antes de considerar la cirugía.',
        'El cambio más inmediato suele ser el zapato. Si un contrafuerte rígido está presionando sobre el bulto, quitar esa presión puede reducir los síntomas rápidamente. Los zapatos abiertos por atrás, los zapatos con contrafuerte blando o flexible, o una almohadilla colocada dentro del zapato alrededor (no encima) del bulto son opciones prácticas.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
    {
      h2: '¿Qué ejercicios ayudan con la deformidad de Haglund?',
      paragraphs: [
        'El ejercicio para la deformidad de Haglund tiene dos objetivos: reducir la tensión de la pantorrilla que jala del talón, y desarrollar la fuerza de la pantorrilla que ayuda al tendón a tolerar la carga. Los dos están tomados de la literatura sobre la tendinopatía de Aquiles. Ningún ensayo los ha probado para la deformidad de Haglund específicamente.',
        'La modificación clave es: solo a nivel del piso. Para el dolor insercional del Aquiles, un estudio piloto de 2008 con 27\u00A0personas probó la carga excéntrica sin dorsiflexión más allá de la posición neutra, es decir, el talón nunca bajó por debajo del piso. Se reportaron buenos resultados en el 67\u00A0% de los casos. Los descensos de talón estándar sobre la orilla de un escalón, que dejan que el talón baje por debajo y empujan el tobillo hacia una dorsiflexión profunda, pueden comprimir el tendón contra el bulto y empeorar los síntomas.',
        'La página de [excéntricos de talón](/es/ejercicios/excentricos-de-talon/) explica el movimiento en detalle. Para la deformidad de Haglund y el dolor insercional, haz cada elevación y descenso de talón a nivel del piso. No bajes por debajo de la orilla del escalón. El estiramiento de pantorrilla también debe ser suave, parando antes de que la dorsiflexión profunda provoque la parte de atrás del talón.',
      ],
      exercises: [
        {
          name: 'Descensos excéntricos de talón (a nivel del piso)',
          evidence: { level: 'early', why: 'El estudio piloto de Jonsson 2008 fue un estudio pequeño y sin control (27\u00A0pacientes, sin grupo de comparación): carga excéntrica solo a nivel del piso, sin dorsiflexión más allá de la posición neutra, reportó buenos resultados en el 67\u00A0% de los pacientes con dolor insercional del Aquiles. Ningún ensayo controlado lo ha probado para la deformidad de Haglund, así que la evidencia se queda en inicial.' },
          dose: 'Walkito empieza con 3 x 10, cada pierna. Protocolo de Jonsson: 3 x 15, dos veces al día, tres meses',
          how: 'Párate en un piso plano (no en la orilla de un escalón). Sube con los dos pies, pasa el peso a la pierna afectada y baja despacio en tres segundos. El talón vuelve al nivel del piso, no más abajo. Sube de vuelta con los dos pies. Rodilla estirada primero; agrega series con rodilla doblada una vez que las de rodilla estirada se sientan manejables.',
          often: 'Días de fuerza. Protocolo de Jonsson: dos veces al día.',
          feel: 'Trabajo en la pantorrilla durante la bajada. Algo de molestia en el tendón es aceptable si se calma para la mañana siguiente.',
          stop: 'Dolor en la parte de atrás del talón por encima de 5/10, o dolor que no se calma durante la noche',
          media: 'heel_drop_straight',
          caption: 'Descenso excéntrico de talón a nivel del piso: sube con los dos pies, baja despacio con uno, el talón se queda a nivel del piso',
          alt: 'Una figura baja un talón despacio desde la punta hasta el nivel del piso, con el tendón de Aquiles resaltado',
        },
        {
          name: 'Elevaciones de talón con dos pies',
          evidence: { level: 'moderate', why: 'Respaldadas por la guía como parte de la progresión de carga del Aquiles. No probadas directamente para la deformidad de Haglund.' },
          dose: '3\u00A0series de 10, los dos pies',
          how: 'Párate en los dos pies en un piso plano. Sube recto sobre los dedos gordos y baja despacio en tres segundos. Los dos pies comparten la carga. Este es el punto de partida de poca carga antes del trabajo excéntrico con una pierna.',
          often: 'La mayoría de los días de la semana, mientras este nivel siga siendo un reto',
          feel: 'Las pantorrillas trabajando juntas, un tirón suave en el tendón',
          stop: 'Dolor en la parte de atrás del talón por encima de 5/10',
          media: 'heel_raise_double',
          caption: 'Elevaciones de talón con dos pies a nivel del piso',
          alt: 'Una figura de pie sube en puntas con los dos pies, con las pantorrillas resaltadas',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada, suave)',
          evidence: { level: 'early', why: 'Parte del manejo conservador de la deformidad de Haglund según la recomendación de expertos. No hay ensayo controlado aleatorizado para esta condición. Evita la dorsiflexión profunda.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared. Lleva un pie hacia atrás, pierna estirada, talón abajo. Inclínate hacia adelante hasta sentir un estiramiento en la parte alta de la pantorrilla. Para antes de que el estiramiento llegue a la parte de atrás del hueso del talón. No fuerces una dorsiflexión profunda.',
          often: 'A diario, después del trabajo de fuerza',
          feel: 'Un estiramiento en la pantorrilla, no dolor en la inserción del Aquiles',
          stop: 'Cualquier molestia provocada en la parte de atrás del hueso del talón',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: mantenlo suave, para antes de que moleste la parte de atrás del talón',
          alt: 'Una figura apoyada en una pared con una pierna estirada detrás, con los músculos de la pantorrilla resaltados',
        },
        {
          name: 'Estiramiento de sóleo (rodilla doblada, suave)',
          evidence: { level: 'early', why: 'Trabaja el músculo más profundo de la pantorrilla. Misma precaución: evita la dorsiflexión profunda con dolor insercional.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          how: 'En la misma posición contra la pared, dobla la rodilla de atrás hasta que el estiramiento baje. Para antes del punto donde se comprime la parte de atrás del talón. El sóleo solo se suelta con la rodilla doblada.',
          often: 'A diario, después del estiramiento de pantorrilla',
          feel: 'Un estiramiento cerca de la parte baja de la pantorrilla, no en el hueso del talón',
          stop: 'Dolor en la inserción del Aquiles o en el bulto',
          media: 'calf_stretch_bent',
          caption: 'Estiramiento de sóleo: dobla la rodilla de atrás, mantenlo suave en el talón',
          alt: 'Una figura en posición de paso con las rodillas dobladas, con la parte baja de la pantorrilla resaltada',
        },
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline, CITE.chooRearfoot],
    },
    {
      h2: '¿Cuánto dolor es aceptable durante los ejercicios?',
      paragraphs: [
        'El modelo de control del dolor de Silbernagel 2007 para la tendinopatía de Aquiles permitía un dolor de hasta unos 5 de 10 durante la carga, siempre que volviera a su nivel habitual para la mañana siguiente y no empeorara semana a semana. Este modelo se probó para el dolor de la porción media del Aquiles, no específicamente para la deformidad de Haglund ni los casos insercionales, pero es el umbral de dolor más citado en la literatura del Aquiles.',
        'Para los problemas insercionales asociados a la deformidad de Haglund, sé más cauteloso. El bulto añade un elemento mecánico que la tendinopatía de la porción media no tiene: compresión de la bursa y el tendón contra el hueso. Si los ejercicios provocan un dolor agudo en la parte de atrás del talón que no se calma rápido, baja la carga o cambia a contracciones isométricas antes de volver a intentar el trabajo excéntrico.',
      ],
      cites: [CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: '¿Cuándo se considera la cirugía para la deformidad de Haglund?',
      paragraphs: [
        'La cirugía se habla después de al menos seis meses de manejo conservador sin mejoría suficiente. La revisión sistemática de 2022 de Yuen y colegas incluyó 20\u00A0estudios y encontró que tanto las técnicas abiertas como las endoscópicas mejoraron los puntajes AOFAS (American Orthopaedic Foot and Ankle Society). Las técnicas endoscópicas mostraron tiempos de recuperación más cortos.',
        'La cirugía normalmente implica quitar la prominencia ósea (calcaneoplastia), extirpar la bursa inflamada, y en algunos casos desbridar o reinsertar el tendón de Aquiles. Las complicaciones pueden incluir problemas de cicatrización, lesión de nervios y debilitamiento del tendón. La decisión es entre tú y tu cirujano.',
        'Esta página no recomienda a favor ni en contra de la cirugía. Los pasos conservadores de arriba son donde empieza la mayoría de las personas, y muchas responden lo suficiente como para evitar una operación. Si seis meses de modificación de calzado, ejercicio y cambios de actividad no han ayudado, un especialista en pie y tobillo puede hablar sobre las opciones quirúrgicas.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: '¿Los zapatos pueden causar la deformidad de Haglund?',
      paragraphs: [
        'Los zapatos no crean la prominencia ósea. La forma del calcáneo es en parte genética. Pero los zapatos con un contrafuerte rígido e inflexible pueden irritar un bulto que de otra forma sería indoloro. Este es el origen del nombre «pump bump», por las partes traseras rígidas de los zapatos tipo pump.',
        'Zapatos a evitar: cualquiera con un contrafuerte rígido y angosto que presione la parte de atrás del talón. Zapatos a buscar: cuello del talón blando o acolchado, parte trasera ligeramente abierta o flexible, y suficiente espacio para que el contrafuerte no se clave. Las alzas de talón dentro del zapato también pueden desplazar el tendón de Aquiles ligeramente lejos del bulto.',
        'La modificación del calzado es el paso más inmediato y el más recomendado de forma consistente en la literatura basada en opinión de expertos. Si quitas la presión, muchas veces puedes reducir el dolor.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
  ],
  faq: [
    {
      q: '¿Qué es un pump bump?',
      cites: [CITE.yuenHaglund],
      a: 'Pump bump es un nombre coloquial para la deformidad de Haglund, un agrandamiento óseo en la parte superior trasera del hueso del talón. El nombre viene de los zapatos de tacón rígido (pumps) que presionan sobre el bulto e irritan el tejido entre el hueso y el tendón de Aquiles, causando dolor e hinchazón.',
    },
    {
      q: '¿La deformidad de Haglund es lo mismo que la tendinitis de Aquiles?',
      cites: [CITE.achillesGuideline, CITE.yuenHaglund],
      a: 'No. La deformidad de Haglund es una prominencia ósea en el hueso del talón. La tendinitis de Aquiles es dolor en el tendón mismo, normalmente por sobrecarga. Suelen aparecer juntas porque el bulto puede irritar el tendón donde se inserta. La guía de 2024 considera la tendinopatía insercional del Aquiles, que puede involucrar la deformidad de Haglund, como distinta de la enfermedad de la porción media.',
    },
    {
      q: '¿La deformidad de Haglund puede desaparecer sin cirugía?',
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
      a: 'El bulto óseo no desaparece sin cirugía. Pero el dolor sí puede irse. Muchas personas manejan los síntomas con cambios de calzado, alzas de talón, estiramiento y fortalecimiento de pantorrilla, y modificación de la actividad. La cirugía se habla después de al menos seis meses de manejo conservador sin mejoría.',
    },
    {
      q: '¿Qué ejercicios hay que evitar con la deformidad de Haglund?',
      cites: [CITE.jonsson],
      a: 'Evita los ejercicios que empujen el tobillo hacia una dorsiflexión profunda, es decir, que el pie se doble hacia arriba, hacia la tibia, más allá de la posición neutra. Los descensos excéntricos de talón estándar en la orilla de un escalón, donde el talón baja por debajo, comprimen el tendón contra el bulto. Haz las elevaciones y los descensos de talón solo a nivel del piso. Evita el estiramiento agresivo de pantorrilla que provoque la parte de atrás del talón.',
    },
    {
      q: '¿La deformidad de Haglund necesita cirugía?',
      cites: [CITE.yuenHaglund],
      a: 'No siempre. El enfoque conservador es la primera línea. Una revisión sistemática de 2022 señaló que la mayoría de los autores recomienda al menos seis meses de manejo conservador antes de considerar la cirugía. La cirugía implica quitar el bulto óseo, la bursa inflamada, y a veces desbridar el tendón. Tanto las técnicas abiertas como las endoscópicas mejoran los resultados.',
    },
    {
      q: '¿Qué zapatos son mejores para la deformidad de Haglund?',
      cites: [CITE.chooRearfoot],
      a: 'Zapatos con contrafuerte blando, acolchado o flexible. Evita los zapatos de parte trasera rígida que presionen sobre el bulto. Los zapatos abiertos por atrás, los zuecos, o los zapatos con cuello del talón recortado pueden reducir la presión directa. Las alzas de talón dentro del zapato pueden desplazar el tendón ligeramente lejos de la prominencia.',
    },
    {
      q: '¿Qué es la bursitis retrocalcánea?',
      cites: [CITE.yuenHaglund],
      a: 'La bursitis retrocalcánea es la inflamación del saco lleno de líquido (bursa) entre el tendón de Aquiles y el hueso del talón. La deformidad de Haglund la hace más probable porque el hueso prominente comprime la bursa durante el movimiento del tobillo. El dolor es profundo, en la parte de atrás del talón, y suele empeorar con los zapatos y la dorsiflexión.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'sentiste un chasquido o tronido repentino, o como si te hubieran pateado en la parte de atrás de la pierna: puede indicar una rotura del tendón de Aquiles',
      'hay mucha hinchazón, enrojecimiento o calor en la parte de atrás del talón, sobre todo con fiebre',
      'el dolor empeora poco a poco a pesar de los cambios de calzado y los pasos conservadores durante varias semanas',
      'no puedes impulsarte con los dedos ni caminar con normalidad',
      'el dolor está presente en reposo o te despierta por la noche, lo que puede indicar una fractura por estrés u otra condición más allá de la bursitis',
      'hay entumecimiento u hormigueo junto con el dolor de talón',
      'tomaste hace poco un antibiótico del grupo de las fluoroquinolonas (como ciprofloxacino) y tienes dolor de tendón nuevo',
    ],
  },
  program: {
    h2: 'Hacerlo como un plan',
    text: 'La progresión de carga de pantorrilla de Walkito va de elevaciones sentado a elevaciones con dos pies, una elevación sostenida, descensos excéntricos de talón y más. Para la deformidad de Haglund y el dolor insercional del Aquiles, cada paso se queda a nivel del piso en lugar de bajar por debajo de la orilla de un escalón. Walkito te sube de nivel una vez que dos sesiones en el nivel actual se sintieron fáciles, en lugar de seguir un calendario fijo.',
    more: [
      'Las sesiones son de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba mide la resistencia de la pantorrilla y el equilibrio. Walkito es un programa de ejercicios. No diagnostica. Si tienes un bulto visible en la parte de atrás del talón y no estás seguro de qué está causando el dolor, pide a un profesional de la salud que lo revise antes de empezar a cargarlo.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Deformidad de Haglund',
  campaign: 'guide-haglunds-es',
};
