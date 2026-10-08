import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dolor de talón por la noche (ES) ──────────────────────────────────
 *
 * Translated from `articles/heel-pain-at-night.ts`, written around the
 * Spanish queries «dolor de talón por la noche», «dolor de talón en reposo»,
 * «dolor de talón al dormir». Figures, grades and qualifiers are identical
 * to the English page. No new citations.
 */

export const HEEL_PAIN_AT_NIGHT_ES: Guide = {
  lang: 'es',
  page: 'heelPainAtNight',
  mainSource: CITE.guideline,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Dolor de talón por la noche: causas y señales de alerta',
  description:
    'El dolor de talón por la noche o en reposo puede indicar fracturas por estrés, nervios atrapados o artritis. Señales de alerta y cuándo consultar.',
  h1: 'Dolor de talón por la noche: qué lo causa y cuándo es una señal de alerta',
  lede:
    'El dolor de talón que aparece por la noche, en la cama o en reposo es un patrón distinto al tirón clásico del primer paso de la mañana de la fascitis plantar. El dolor nocturno y en reposo puede indicar una fractura por estrés del calcáneo, un nervio atrapado, una artritis inflamatoria u otra afección que necesita un profesional de la salud. Esta página repasa las causas comunes y las que no debes dejar pasar.',
  intro: [
    'Si tu talón duele sobre todo con los primeros pasos de la mañana y después se calma, el mejor punto de partida es [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/). Esta página es para el dolor que persiste en reposo, te despierta, o llega después de un rato sin apoyar el pie y no sigue el patrón típico de la fascitis plantar.',
  ],
  takeaways: [
    'El dolor de la fascitis plantar es peor con los primeros pasos después del reposo y suele calmarse una vez que te mueves. Un dolor que se queda en reposo, te despierta o empeora durante la noche es un patrón de alerta que merece investigación (Tu, 2018).',
    'Las fracturas por estrés del calcáneo pueden doler o latir de noche y normalmente empeoran con la actividad continua en lugar de «entrar en calor» (Patel y colegas, 2011).',
    'El síndrome del túnel del tarso y el atrapamiento del nervio de Baxter, compresión de ramas del nervio tibial, producen ardor u hormigueo en el talón, un carácter distinto al de la fascitis (Tu, 2018). El atrapamiento del nervio de Baxter en particular podría representar hasta el 20\u00A0% del dolor crónico de talón y puede aparecer en reposo (Tedeschi, 2025).',
    'Un dolor bilateral de talón con rigidez matutina prolongada puede apuntar a una artritis inflamatoria como una espondiloartropatía. En una cohorte de 174\u00A0personas con fascitis plantar, el dolor bilateral fue un predictor significativo de mayor duración de los síntomas (Hansen y colegas, 2018).',
    'La guía de 2023 para el dolor de talón le da a las férulas nocturnas un grado **A** para la fascitis plantar persistente, pero su función es evitar que la fascia se acorte durante la noche, no abordar los tipos de dolor nocturno que se describen en esta página (Koc y colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: '¿Por qué te duele el talón por la noche o en reposo?',
      paragraphs: [
        'La fascitis plantar causa dolor porque la fascia se pone rígida mientras duermes y se estira de golpe cuando te paras. Ese dolor llega al máximo en el primer paso y mejora conforme te mueves. Si te duele el talón estando acostado en la cama sin apoyar peso, normalmente hay otro mecanismo detrás.',
        'Una revisión de 2018 en American Family Physician lista varias causas de dolor de talón que se comportan de forma distinta a la fascitis plantar. La distinción clave: el dolor de la fascitis plantar mejora con la actividad, mientras que el dolor de las fracturas por estrés, los nervios atrapados, los tumores y las afecciones inflamatorias no sigue ese patrón.',
        'El pie también queda apuntando hacia abajo (flexión plantar) durante el sueño. Esa posición puede acortar el tendón de Aquiles y la pantorrilla, lo que a veces causa molestias en el talón. Las férulas nocturnas abordan esto manteniendo el tobillo en ángulo neutro. Pero una férula nocturna es una herramienta para la fascitis plantar, no un sustituto de la investigación de un dolor que genuinamente empeora en reposo.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: '¿Podría ser una fractura por estrés del calcáneo?',
      paragraphs: [
        'Una fractura por estrés del calcáneo, una fisura pequeña en el hueso del talón por carga repetitiva, puede producir un dolor profundo que late de noche. A diferencia de la fascitis plantar, el dolor suele empeorar con la actividad y no «entra en calor». Es común que aparezca después de un aumento repentino en la carrera, la caminata o el tiempo de pie sobre superficies duras.',
        'La «prueba del apretón», presionar los dos lados del hueso del talón entre sí, es la señal clínica clásica. El dolor con el apretón es inusual en la fascitis plantar y común en las fracturas por estrés. Las radiografías simples suelen pasar por alto las fracturas tempranas. Normalmente se necesita una resonancia magnética o una gammagrafía ósea para confirmarla.',
        'Una revisión de 2011 en American Family Physician señaló que las fracturas por estrés del calcáneo producen un dolor que empeora progresivamente después de un aumento de actividad o un cambio a superficies más duras para caminar. El dolor nocturno y el dolor en reposo se mencionaron entre las características que distinguen las fracturas por estrés de la fascitis.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
    },
    {
      h2: '¿Qué pasa con los nervios atrapados: túnel del tarso y nervio de Baxter?',
      keyFact: 'Una revisión narrativa de 2025 encontró que el atrapamiento del nervio de Baxter podría explicar hasta el 20\u00A0% de los casos de dolor crónico de talón (Tedeschi, 2025).',
      paragraphs: [
        'El nervio tibial pasa por un espacio detrás del tobillo interno llamado túnel del tarso. La compresión ahí, el síndrome del túnel del tarso, causa ardor, hormigueo o entumecimiento en la planta y el talón. Tu (2018) describe el dolor del túnel del tarso como uno que normalmente empeora al estar de pie, caminar o correr, y se alivia con el reposo y la elevación. Ese patrón difiere de la fascitis plantar, pero no es lo mismo que un dolor verdaderamente en reposo, así que el túnel del tarso no siempre encaja con el patrón del que habla esta página.',
        'El nervio de Baxter es la primera rama del nervio plantar lateral, un nervio más pequeño cerca de la parte interna del talón. Cuando se comprime, produce un dolor agudo o ardiente en la parte medial del talón. El dolor suele empeorar con la actividad a lo largo del día, pero también puede aparecer en reposo. Una revisión de 2025 indica que el atrapamiento del nervio de Baxter podría representar hasta el 20\u00A0% de los casos de dolor crónico de talón (Tedeschi, 2025).',
        'El atrapamiento de nervios se confunde con frecuencia con la fascitis plantar porque ambos causan dolor en la parte medial del talón. La diferencia es el carácter: ardor, hormigueo o entumecimiento son señales de un nervio. Los estudios de imagen y de conducción nerviosa pueden ayudar a un profesional de la salud a confirmar el diagnóstico.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
    },
    {
      h2: '¿Puede la artritis inflamatoria causar dolor de talón por la noche?',
      keyFact: 'En un seguimiento de 5 a 15\u00A0años de 174\u00A0personas con fascitis plantar, el dolor bilateral de talón fue un predictor significativo de mayor duración de los síntomas (Hansen y colegas, 2018).',
      paragraphs: [
        'Las espondiloartropatías, un grupo de afecciones inflamatorias que incluyen la espondilitis anquilosante y la artritis psoriásica, pueden causar entesitis, inflamación donde un tendón o ligamento se une al hueso. El talón es un sitio frecuente. El dolor suele ser bilateral, puede estar en la inserción del Aquiles o bajo el talón, y va acompañado de rigidez matutina prolongada (más de 30\u00A0minutos) que mejora con el movimiento.',
        'En un seguimiento de 5 a 15\u00A0años de 174\u00A0personas con fascitis plantar, el dolor bilateral de talón fue un predictor significativo de mayor duración de los síntomas. Los autores señalaron que una enfermedad inflamatoria sistémica no reconocida podría explicar en parte ese hallazgo.',
        'La artritis reumatoide y la gota también pueden producir dolor de talón. Si tu dolor es bilateral, si la rigidez dura más de 30\u00A0minutos cada mañana, o si hay otras articulaciones afectadas, un profesional de la salud debe evaluar si hay una causa inflamatoria.',
      ],
      cites: [CITE.hansen, CITE.tuHeelPain],
    },
    {
      h2: '¿La fascitis plantar puede empeorar por la noche?',
      paragraphs: [
        'La fascitis plantar a veces molesta en la noche después de un día largo de pie. Ese es dolor por la actividad, por la carga acumulada, no lo mismo que un dolor que te despierta o que aparece cuando estás acostado sin peso sobre el pie.',
        'Algunas personas también notan molestias en el talón cuando el pie queda apuntando hacia abajo durante el sueño, jalando la fascia plantar. Para eso son las férulas nocturnas. La guía de 2023 les da un grado **A**, su grado más alto de evidencia, para la fascitis plantar persistente. Mantienen el tobillo en ángulo neutro para que la fascia no se acorte durante la noche.',
        'Si el dolor de verdad está peor por la noche y en reposo, en lugar de mejorar con el movimiento a la mañana siguiente, ese patrón apunta en dirección contraria a la fascitis plantar y hacia las afecciones de arriba. No asumas que es fascitis y sigas como si nada.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Las férulas nocturnas ayudan con el dolor de talón?',
      keyFact: 'La guía de 2023 para el dolor de talón les da a las férulas nocturnas un grado A, su grado más alto de evidencia, para la fascitis plantar, usadas normalmente de uno a tres meses (Koc y colegas, 2023).',
      paragraphs: [
        'Una férula nocturna es un aparato que mantiene el tobillo a 90\u00A0grados mientras duermes. La idea es evitar que la pantorrilla y la fascia plantar se acorten durante la noche, para que el primer paso de la mañana duela menos.',
        'La guía de 2023 para el dolor de talón les da a las férulas nocturnas un grado **A** para la fascitis plantar. Se recomiendan normalmente durante 1 a 3\u00A0meses cuando el dolor del primer paso no ha mejorado solo con estiramientos y ejercicios de carga. No abordan el dolor de nervios, las fracturas por estrés ni las afecciones inflamatorias.',
        'Las férulas nocturnas no son un dispositivo a largo plazo para la mayoría de las personas. Son incómodas para dormir y el beneficio es específico del patrón de rigidez matutina. Si tu dolor nocturno no es del tipo de acortamiento y estiramiento, una férula probablemente no ayude y puede retrasar el diagnóstico correcto.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: '¿Qué estiramientos y ejercicios puedes hacer antes de dormir?',
      paragraphs: [
        'Si tu dolor encaja con el patrón de la fascitis plantar, estirar suavemente la pantorrilla y la fascia plantar antes de dormir puede reducir la rigidez de la mañana siguiente. El mismo estiramiento específico de la fascia plantar que la guía califica con **A** para el dolor del primer paso se puede hacer antes de dormir: jala los dedos hacia atrás con la mano hasta sentir el arco, mantén 10\u00A0segundos, repite 10\u00A0veces.',
        'Los ejercicios con carga como las elevaciones de talón son más adecuados para momentos más temprano en el día. La lista completa de ejercicios está en la página de [ejercicios para la fascitis plantar](/es/ejercicios-fascitis-plantar/).',
        'Si tu dolor no es fascitis plantar o no estás seguro, estirar por la noche no es el primer paso. Obtener el diagnóstico correcto sí lo es.',
      ],
      exercises: [
        {
          name: 'Estiramiento de la fascia plantar (sentado)',
          evidence: { level: 'strong', why: 'Grado A en la guía. El ensayo de DiGiovanni de 2003 con 101\u00A0personas (82 completaron el seguimiento) encontró que el estiramiento específico del tejido fue superior al estiramiento de pantorrilla para el dolor del primer paso.' },
          dose: '10\u00A0estiramientos de 10\u00A0segundos, cada pie',
          how: 'Siéntate en la orilla de la cama. Cruza el pie afectado sobre la rodilla contraria. Jala los dedos hacia atrás, hacia la tibia, hasta sentir un estiramiento a lo largo del arco. Mantén 10\u00A0segundos. Este es también el estiramiento matutino que la guía recomienda hacer antes de que el pie toque el piso.',
          often: 'Antes de dormir y antes de pararte por la mañana',
          feel: 'Un estiramiento firme a lo largo del arco, no un dolor agudo',
          stop: 'Dolor agudo en el talón, o cualquier ardor u hormigueo',
          media: 'fascia_stretch',
          caption: 'Estiramiento de la fascia plantar: jala los dedos hacia atrás hasta sentir el arco',
          alt: 'Una figura sentada jala los dedos de un pie hacia atrás, hacia la tibia, con la fascia plantar resaltada a lo largo del arco',
        },
        {
          name: 'Estiramiento de pantorrilla (rodilla estirada)',
          evidence: { level: 'strong', why: 'Grado A en la guía para la fascitis plantar como parte de un programa de estiramiento de pantorrilla.' },
          dose: '2\u00A0estiramientos de 30\u00A0segundos, cada pierna',
          how: 'Manos en una pared. Lleva un pie hacia atrás, pierna estirada, talón abajo. Inclínate hacia adelante hasta sentir un estiramiento en la parte alta de la pantorrilla. Mantén 30\u00A0segundos. Cambia de lado.',
          often: 'Antes de dormir si la tensión de la pantorrilla contribuye al dolor de la mañana',
          feel: 'Un estiramiento en la parte alta de la pantorrilla, no en el talón',
          stop: 'Dolor en el talón o en el Aquiles que no se calma en unos segundos',
          media: 'calf_stretch_straight',
          caption: 'Estiramiento de pantorrilla: pierna de atrás estirada, talón abajo, inclínate hacia adelante',
          alt: 'Una figura apoyada en una pared con una pierna estirada detrás, con los músculos de la pantorrilla resaltados',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003],
    },
    {
      h2: '¿En qué se diferencia el dolor nocturno del dolor matutino de talón?',
      paragraphs: [
        'El dolor de talón por la mañana y el dolor nocturno suenan parecidos pero apuntan en direcciones distintas. El dolor matutino, el tirón agudo del primer paso que se calma después de unos minutos caminando, es la presentación clásica de la fascitis plantar. El tejido se puso rígido durante la noche y se estira de golpe bajo la carga.',
        'El dolor nocturno, es decir, el dolor que aparece o empeora cuando estás en la cama sin apoyar peso, sugiere algo más allá de la simple rigidez de la fascia. Las afecciones más asociadas con el dolor verdaderamente en reposo son las fracturas por estrés, el atrapamiento de nervios, la artritis inflamatoria y, en casos raros, los tumores óseos o las infecciones.',
        'Si no estás seguro de cuál es tu patrón, una prueba sencilla: ¿el dolor mejora después de caminar de 5 a 10\u00A0minutos? Si sí, el patrón de fascitis plantar es más probable, y la página de [dolor de talón al levantarse](/es/dolor-de-talon-al-levantarse/) es mejor punto de partida. Si no, sigue leyendo aquí y piensa en consultar a un profesional de la salud.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain],
    },
  ],
  faq: [
    {
      q: '¿El dolor de talón por la noche es señal de algo serio?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Puede serlo. El dolor en reposo o el dolor que te despierta es un patrón de alerta. Las fracturas por estrés del calcáneo, el atrapamiento de nervios (túnel del tarso o nervio de Baxter) y la artritis inflamatoria pueden producir dolor nocturno de talón. Estas afecciones necesitan un profesional de la salud para diagnosticarse y manejarse. No asumas que es fascitis plantar si no sigue el patrón típico del primer paso.',
    },
    {
      q: '¿Por qué me duele el talón cuando me acuesto?',
      cites: [CITE.tuHeelPain],
      a: 'El dolor en el talón al estar acostado, sin peso sobre el pie, puede deberse a la compresión de un nervio, una fractura por estrés o inflamación. La fascitis plantar a veces causa molestias cuando el pie queda apuntando hacia abajo en la cama, pero eso es rigidez posicional, no dolor verdadero en reposo. El ardor o el hormigueo en reposo apuntan hacia un problema de nervio.',
    },
    {
      q: '¿Las férulas nocturnas ayudan con el dolor de talón por la noche?',
      cites: [CITE.guideline],
      a: 'Las férulas nocturnas mantienen el tobillo a 90\u00A0grados para evitar que la pantorrilla y la fascia se acorten. La guía de 2023 para el dolor de talón les da un grado **A** para la fascitis plantar persistente. Ayudan con el patrón de rigidez matutina. No abordan el dolor de nervios, las fracturas por estrés ni las afecciones inflamatorias.',
    },
    {
      q: '¿Cómo saber si mi dolor de talón es fascitis plantar o una fractura por estrés?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'El dolor de la fascitis plantar es más fuerte en el primer paso y mejora conforme caminas. Una fractura por estrés del calcáneo suele empeorar con la actividad continua y no entra en calor. La prueba del apretón, presionar los dos lados del hueso del talón, sugiere más una fractura que una fascitis. Muchas veces se necesita una resonancia magnética porque las radiografías simples pueden pasar por alto las fracturas tempranas.',
    },
    {
      q: '¿La fascitis plantar puede doler de noche?',
      cites: [CITE.guideline],
      a: 'La fascitis plantar puede molestar en la noche después de un día largo de pie o caminando. Eso es carga acumulada, no dolor en reposo. El pie también queda apuntando hacia abajo durante el sueño, lo que acorta la fascia y puede causar molestias. Si el dolor genuinamente te despierta, ese patrón no es fascitis típica y debe revisarse.',
    },
    {
      q: '¿Qué es el atrapamiento del nervio de Baxter?',
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
      a: 'El nervio de Baxter es la primera rama del nervio plantar lateral. Cuando se comprime cerca de la parte interna del talón, causa un dolor agudo o ardiente, a veces con entumecimiento. Una revisión de 2025 indica que podría representar hasta el 20\u00A0% del dolor crónico de talón (Tedeschi, 2025). A diferencia de la fascitis plantar, el dolor suele empeorar más avanzado el día o en reposo y no se alivia con el movimiento.',
    },
    {
      q: '¿Debo ir al médico por dolor de talón por la noche?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Sí. El dolor nocturno de talón que te despierta, que no mejora con el movimiento, que incluye ardor u hormigueo, o que está en los dos talones con rigidez prolongada, debe ser evaluado por un profesional de la salud. Estos patrones pueden indicar una fractura por estrés, un nervio atrapado o una enfermedad inflamatoria que el ejercicio solo no va a resolver.',
    },
    {
      q: '¿Qué me puedo poner en el talón para el dolor por la noche?',
      a: 'El hielo es el primer paso más común: una compresa fría o una botella de agua congelada aplicada en la zona adolorida puede aliviar la molestia superficial. Nada de esto trata una fractura por estrés, un nervio atrapado o una artritis inflamatoria, las afecciones más relacionadas con el dolor nocturno verdadero, así que una compresa fría no sustituye encontrar la causa.',
    },
    {
      q: '¿Qué no se debe hacer si el talón duele por la noche?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'No asumas que es fascitis plantar y sigas con la actividad si el dolor no encaja con el patrón de primer paso que después mejora. No ignores un dolor que te despierta, que empeora al seguir caminando, o que viene con ardor, hormigueo o hinchazón. Tratar por tu cuenta un dolor en reposo con estiramientos o férulas nocturnas puede retrasar el diagnóstico de una fractura por estrés, un nervio atrapado o una artritis inflamatoria.',
    },
  ],
  redFlags: {
    h2: 'Consulta primero a un profesional de la salud si',
    bullets: [
      'el dolor te despierta o está presente en reposo sin peso sobre el pie',
      'el dolor empeora con la caminata continua y no entra en calor después de unos minutos',
      'sientes ardor, hormigueo o entumecimiento en el talón o la planta',
      'la «prueba del apretón» (presionar los dos lados del hueso del talón entre sí) reproduce el dolor',
      'te duelen los dos talones, sobre todo con rigidez matutina prolongada (más de 30\u00A0minutos) o dolor en otras articulaciones',
      'el dolor apareció después de un aumento repentino en el kilometraje de carrera, un cambio a superficies más duras o un traumatismo',
      'el talón está rojo, caliente o hinchado, o tienes fiebre',
      'el dolor lleva más de seis semanas y no está mejorando',
    ],
  },
  program: {
    h2: 'Cuándo el ejercicio es el paso correcto',
    text: 'Si un profesional de la salud ha confirmado fascitis plantar y ha descartado las afecciones de arriba, el ejercicio es el enfoque con el grado más alto de la guía. Walkito arma un plan diario alrededor de la carga de pantorrilla y fascia, empezando con estiramientos y subiendo a ejercicios de fuerza a tu ritmo.',
    more: [
      'Eliges 3, 5 o 7\u00A0días a la semana y sesiones de 3, 5 o 10\u00A0minutos. Cada 14\u00A0días, una prueba mide la resistencia de la pantorrilla y el equilibrio. Walkito es un programa de ejercicios. No diagnostica. Si tu dolor de talón empeora por la noche o en reposo, consulta a un profesional de la salud antes de empezar a cargar el pie.',
    ],
    cta: 'Empieza con 3\u00A0minutos al día.',
  },
  crumb: 'Dolor de talón por la noche',
  campaign: 'guide-heel-night-es',
};
