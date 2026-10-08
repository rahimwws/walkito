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
  'exercises.calfStretchStraight.rationale': 'Una pantorrilla más suelta quita algo de tensión al talón.',
  'exercises.calfStretchStraight.cue':
    'Pierna de atrás recta, talón en el suelo, cadera hacia delante.',

  'exercises.calfStretchBent.title': 'Estiramiento de sóleo',
  'exercises.calfStretchBent.rationale':
    'El sóleo está más profundo y solo cede con la rodilla flexionada.',
  'exercises.calfStretchBent.cue':
    'Flexiona un poco las dos rodillas. El talón de atrás, apoyado en el suelo.',

  'exercises.ankleRocks.title': 'Movilidad de tobillo',
  'exercises.ankleRocks.rationale': 'Un tobillo que flexiona deja que el talón siga apoyado.',
  'exercises.ankleRocks.cue':
    'La rodilla pasa por delante de los dedos y el talón no se despega del suelo.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Elevación de talones',
  'exercises.heelRaiseTowel.rationale': 'En un estudio, las elevaciones lentas con peso aliviaron el dolor antes que solo estirar.',
  'exercises.heelRaiseTowel.cue':
    'Toalla bajo los dedos. Sin ella solo estás trabajando la pantorrilla.',

  'exercises.heelRaisePlain.title': 'Elevación a una pierna',
  'exercises.heelRaisePlain.rationale': 'La versión sencilla que mantiene la fuerza que has ganado.',
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
  'exercises.toeSpread.cue': 'Separa los dedos por el suelo y luego presiona el dedo gordo y el meñique contra el suelo.',

  'exercises.bandInversion.title': 'Inversión con banda',
  'exercises.bandInversion.rationale':
    'Girar el pie hacia dentro trabaja el músculo que pasa por debajo del arco.',
  'exercises.bandInversion.cue':
    'Mueve solo el pie contra la banda, no la pierna. La rodilla se queda quieta.',

  'exercises.hipAbduction.title': 'Elevación lateral de pierna',
  'exercises.hipAbduction.rationale': 'Una cadera que cede deja la carga sobre el arco.',
  'exercises.hipAbduction.cue': 'Túmbate de lado. Sube la pierna de arriba, un poco hacia atrás, con la punta mirando al frente.',

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

  // ── The weekly plan's additions ──────────────────────────────────────────
  'exercises.heelRaiseDouble.title': 'Elevaciones de talón con dos pies',
  'exercises.heelRaiseDouble.rationale': 'Los dos pies comparten la carga mientras el gemelo despierta.',
  'exercises.heelRaiseDouble.cue': 'Sube recto sobre los dedos gordos y baja despacio.',

  'exercises.heelRaiseSeated.title': 'Elevaciones de talón sentado',
  'exercises.heelRaiseSeated.rationale': 'Trabajo de gemelo casi sin carga en el talón.',
  'exercises.heelRaiseSeated.cue': 'Empuja con la parte delantera del pie. Las manos en las rodillas añaden resistencia.',

  'exercises.heelRaiseHold.title': 'Elevación de talón sostenida',
  'exercises.heelRaiseHold.rationale': 'Sostener arriba carga el tendón sin rebote.',
  'exercises.heelRaiseHold.cue': 'Sube y quédate quieto arriba, sin dejarte caer.',

  'exercises.bigToeLift.title': 'Elevación del dedo gordo',
  'exercises.bigToeLift.rationale': 'Enseña al dedo gordo a moverse solo.',
  'exercises.bigToeLift.cue': 'Levanta solo el dedo gordo. Los otros cuatro siguen apoyados.',

  'exercises.towelScrunch.title': 'Recoger la toalla',
  'exercises.towelScrunch.rationale': 'Despierta los músculos pequeños bajo el arco.',
  'exercises.towelScrunch.cue': 'Atrae la toalla con los dedos. El talón no se levanta.',

  'exercises.kneeToWall.title': 'Rodilla a la pared',
  'exercises.kneeToWall.rationale': 'Libera el tobillo para que el talón no cargue con la tensión.',
  'exercises.kneeToWall.cue': 'El talón queda plano. Lleva la rodilla hacia delante sobre el segundo dedo.',

  'exercises.balancePillow.title': 'Equilibrio sobre almohada',
  'exercises.balancePillow.rationale': 'Una superficie blanda hace trabajar al tobillo en cada vaivén.',
  'exercises.balancePillow.cue': 'Ponte junto a una pared. Rodilla suelta, mirada al frente.',

  'exercises.heelDropStraight.title': 'Descensos de talón',
  'exercises.heelDropStraight.rationale': 'Bajar despacio es lo que reconstruye el gemelo y el Aquiles.',
  'exercises.heelDropStraight.cue': 'Sube con los dos pies y baja despacio con uno. Deja que el talón pase del escalón.',

  'exercises.tibialisRaise.title': 'Elevaciones de puntas',
  'exercises.tibialisRaise.rationale': 'Fortalece el músculo de la espinilla que estabiliza cada paso.',
  'exercises.tibialisRaise.cue': 'Espalda contra la pared. Levanta las puntas y deja los talones abajo.',

  'exercises.stepDown.title': 'Bajada de escalón',
  'exercises.stepDown.rationale': 'Controla la rodilla para que el pie no aterrice solo.',
  'exercises.stepDown.cue': 'La rodilla va sobre los dedos. Toca el suelo con el talón, sin dejarte caer.',

  'exercises.soleMassage.title': 'Masaje de planta',
  'exercises.soleMassage.rationale': 'Suelta el tejido después de un día largo.',
  'exercises.soleMassage.cue': 'Pasadas firmes con el pulgar del talón a los dedos. Afloja si algo duele agudo.',

  'exercises.pogoHops.title': 'Saltos pogo',
  'exercises.pogoHops.rationale': 'Enseña al pie a rebotar de nuevo, solo cuando el dolor ya no está.',
  'exercises.pogoHops.cue': 'Saltos pequeños y rápidos con tobillos firmes. Para si duele el talón.',

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
