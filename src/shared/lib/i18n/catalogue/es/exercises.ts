/**
 * The exercise catalogue, in Spanish.
 *
 * Neutral across regions, which in this vocabulary is not a stylistic
 * preference — it is three specific traps:
 *
 * - **calf → «pantorrilla»**, never «gemelos». *Gemelos* is the everyday word
 *   in Spain and reads as anatomy-textbook or simply foreign across Latin
 *   America. The specific muscle, where it is needed, is «gastrocnemio».
 * - **toes → «los dedos del pie»**, never «ortejos», which the RAE records as
 *   American usage and does not carry in the dictionary.
 * - **ball of the foot → «la almohadilla del pie»**, never «la bola del pie»,
 *   which is a calque and reads as a translation error.
 *
 * The rest of the anatomy is the standard clinical term and is the same on
 * both sides of the Atlantic: fascia plantar, sóleo, tibial posterior, arco
 * del pie, talón, tobillo.
 *
 * `tú` throughout, and no `vosotros`. Cues are written as the physical
 * instruction first: they are followed by somebody standing on a painful foot,
 * so the verb comes early and the qualifier after it.
 */
export const EXERCISES_ES = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Estiramiento plantar',
  'exercises.fasciaStretch.rationale': 'Haz la primera serie antes de apoyar el pie en el suelo.',
  'exercises.fasciaStretch.cue': 'Tira de los dedos hacia ti hasta notar el arco, no la pantorrilla.',

  'exercises.calfStretchStraight.title': 'Estiramiento de pantorrilla',
  'exercises.calfStretchStraight.rationale': 'Una pantorrilla tensa tira del talón todo el día.',
  'exercises.calfStretchStraight.cue':
    'Pierna de atrás recta, talón en el suelo, cadera hacia delante.',

  'exercises.calfStretchBent.title': 'Estiramiento de sóleo',
  'exercises.calfStretchBent.rationale':
    'El sóleo está más profundo y solo cede con la rodilla flexionada.',
  'exercises.calfStretchBent.cue':
    'Flexiona la rodilla de atrás hasta notarlo más abajo, cerca del talón.',

  'exercises.ankleRocks.title': 'Movilidad de tobillo',
  'exercises.ankleRocks.rationale': 'Un tobillo que flexiona deja que el talón siga apoyado.',
  'exercises.ankleRocks.cue':
    'La rodilla pasa por delante de los dedos y el talón no se despega del suelo.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Elevación de talones',
  'exercises.heelRaiseTowel.rationale': 'Este es el que baja el dolor más rápido.',
  'exercises.heelRaiseTowel.cue':
    'Toalla bajo los dedos. Sin ella solo estás trabajando la pantorrilla.',

  'exercises.heelRaisePlain.title': 'Elevación a una pierna',
  'exercises.heelRaisePlain.rationale': 'La versión que conservas cuando termina el programa.',
  'exercises.heelRaisePlain.cue':
    'Tres segundos al subir y tres al bajar. La velocidad es lo que lo vuelve inútil.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Pie corto',
  'exercises.shortFootSeated.rationale': 'El músculo que sostiene tu arco está dentro del propio pie.',
  'exercises.shortFootSeated.cue':
    'No dobles los dedos. Acerca la almohadilla del pie hacia el talón.',

  'exercises.shortFootDouble.title': 'Pie corto, de pie',
  'exercises.shortFootDouble.rationale': 'El mismo músculo, ahora sosteniendo tu peso.',
  'exercises.shortFootDouble.cue': 'Los dedos siguen planos y largos. Solo sube el arco.',

  'exercises.shortFootSingle.title': 'Pie corto, una pierna',
  'exercises.shortFootSingle.rationale': 'Con un pie a la vez se ve cuál es el lado débil.',
  'exercises.shortFootSingle.cue':
    'Mantén el dedo gordo apoyado. Si se levanta, el arco está haciendo trampa.',

  'exercises.toeSpread.title': 'Separación de dedos',
  'exercises.toeSpread.rationale':
    'Unos dedos que pueden separarse reparten la carga con el arco.',
  'exercises.toeSpread.cue': 'Sepáralos bien y mantén. Levantarlos no es el objetivo.',

  'exercises.bandInversion.title': 'Inversión con banda',
  'exercises.bandInversion.rationale':
    'Girar el pie hacia dentro trabaja el músculo que pasa por debajo del arco.',
  'exercises.bandInversion.cue':
    'Mueve solo el pie contra la banda, no la pierna. La rodilla se queda quieta.',

  'exercises.hipAbduction.title': 'Abducción de cadera',
  'exercises.hipAbduction.rationale': 'Una cadera que cede deja la carga sobre el arco.',
  'exercises.hipAbduction.cue': 'Empuja con el talón, no con los dedos.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Equilibrio a una pierna',
  'exercises.singleLegHold.rationale':
    'Sostenerte en una pierna es la prueba que tu pie falla primero.',
  'exercises.singleLegHold.cue': 'Mira a un punto fijo. Deja que el pie oscile: es lo que toca.',

  'exercises.eyesClosedStand.title': 'Equilibrio con ojos cerrados',
  'exercises.eyesClosedStand.rationale': 'Con los ojos cerrados, el equilibrio lo hace el pie.',
  'exercises.eyesClosedStand.cue': 'Ponte cerca de una pared. Apoyarte en ella está bien.',

  'exercises.heelToeWalk.title': 'Marcha talón-punta',
  'exercises.heelToeWalk.rationale':
    'Caminar de talón a punta es el arco cargándose y descargándose en orden.',
  'exercises.heelToeWalk.cue':
    'Primero apoya el talón y luego rueda el pie. Tan despacio que puedas pararte a mitad de paso.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Automasaje plantar',
  'exercises.footRoll.rationale': 'Rodar el pie calma el tejido después de trabajar.',
  'exercises.footRoll.cue': 'Despacio y con firmeza. Si haces muecas de dolor, afloja.',

  'exercises.barefootHome.title': 'Descalzo en casa',
  'exercises.barefootHome.rationale': 'Las horas descalzo son horas que el pie pasa trabajando.',
  'exercises.barefootHome.cue': 'Solo en casa, sobre suelo liso, y ve aumentando poco a poco.',

  'exercises.breathingReset.title': 'Respiración lenta',
  'exercises.breathingReset.rationale': 'Un minuto de respiración lenta cierra bien la sesión.',
  'exercises.breathingReset.cue': 'Que la exhalación dure más que la inhalación. Eso es todo.',

  // ── The morning stretch ──────────────────────────────────────────────────
  'exercises.morningStretch.copy':
    'Antes de levantarte: tira de los dedos hacia ti, 10 segundos, 10 veces.',

  // ── Load notes ───────────────────────────────────────────────────────────
  'exercises.loadNote.backpack':
    'Ponte una mochila. Lo bastante pesada como para que la última repetición sea de verdad la última.',
  'exercises.loadNote.heavier':
    'Añade más peso. Ocho repeticiones deberían ser todo lo que te queda.',
  'exercises.loadNote.towelOff':
    'Fuera la toalla. Solo tu peso. Esta es la versión que vas a seguir haciendo.',

  // ── Categories ───────────────────────────────────────────────────────────
  // «Entrenamiento» rather than «Fuerza»: the bucket holds balance and
  // intrinsic foot work as well as the loaded lifts, and calling a one-legged
  // stand "strength" would name it wrong to sound tidier.
  'exercises.category.fitness': 'Entrenamiento',
  'exercises.category.mobility': 'Movilidad',
  'exercises.category.recovery': 'Recuperación',
  'exercises.category.habit': 'Hábito',

  // ── Dose ─────────────────────────────────────────────────────────────────
  // Seconds are «s» with a space, which is the SI convention Spanish keeps,
  // rather than the English "30s" with the letter pushed against the digit.
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds} s',
  'exercises.dose.hold': '{seconds} s',
  'exercises.dose.holdMinutes': '{minutes} min',
  'exercises.dose.sets': { one: '{count} serie', other: '{count} series' },
  'exercises.dose.bothFeet': '{dose} · ambos pies',
};
