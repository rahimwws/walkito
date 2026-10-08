/**
 * The exercise catalogue, in French.
 *
 * Anatomy is the standard clinical term a kiné would use: aponévrose plantaire,
 * soléaire, tibial postérieur, voûte plantaire, talon, cheville, mollet. Toes
 * are «orteils», the ball of the foot is «l'avant-pied», never a calque.
 *
 * `tu` throughout. Cues are written as the physical instruction first: they
 * are followed by somebody standing on a painful foot, so the verb comes early
 * and the qualifier after it. Imperatives and infinitive titles are kept
 * gender-neutral, so no cue assumes who is standing on the foot.
 */
export const EXERCISES_FR = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Étirement plantaire',
  'exercises.fasciaStretch.rationale': 'Fais la première série avant de poser le pied au sol.',
  'exercises.fasciaStretch.cue': 'Tire les orteils vers toi jusqu’à sentir la voûte, pas le mollet.',

  'exercises.calfStretchStraight.title': 'Étirement du mollet',
  'exercises.calfStretchStraight.rationale': 'Un mollet plus souple soulage un peu le talon.',
  'exercises.calfStretchStraight.cue': 'Jambe arrière tendue, talon au sol, hanches vers l’avant.',

  'exercises.calfStretchBent.title': 'Étirement du soléaire',
  'exercises.calfStretchBent.rationale':
    'Le muscle profond du mollet ne se relâche que genou fléchi.',
  'exercises.calfStretchBent.cue':
    'Fléchis un peu les deux genoux. Garde le talon arrière bien à plat au sol.',

  'exercises.ankleRocks.title': 'Bascules de cheville',
  'exercises.ankleRocks.rationale': 'Une cheville qui plie laisse le talon rester au sol.',
  'exercises.ankleRocks.cue': 'Le genou avance au-dessus des orteils, le talon reste au sol.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Montées sur pointes',
  'exercises.heelRaiseTowel.rationale':
    'Dans une étude, des montées lentes et lourdes ont soulagé la douleur plus vite que les étirements seuls.',
  'exercises.heelRaiseTowel.cue':
    'Serviette sous les orteils. Sans elle, tu ne travailles que le mollet.',

  'exercises.heelRaisePlain.title': 'Montées sur une jambe',
  'exercises.heelRaisePlain.rationale': 'La version simple qui garde la force que tu as construite.',
  'exercises.heelRaisePlain.cue':
    'Trois secondes pour monter, trois pour descendre. C’est la vitesse qui le rend inutile.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Pied court',
  'exercises.shortFootSeated.rationale': 'Le muscle qui tient ta voûte se trouve dans le pied lui-même.',
  'exercises.shortFootSeated.cue':
    'Ne recroqueville pas les orteils. Rapproche l’avant-pied du talon.',

  'exercises.shortFootDouble.title': 'Pied court, debout',
  'exercises.shortFootDouble.rationale': 'Le même muscle, qui porte maintenant ton poids.',
  'exercises.shortFootDouble.cue': 'Les orteils restent à plat et allongés. Seule la voûte se lève.',

  'exercises.shortFootSingle.title': 'Pied court, sur une jambe',
  'exercises.shortFootSingle.rationale': 'Un pied à la fois, c’est là que le côté faible se voit.',
  'exercises.shortFootSingle.cue':
    'Garde le gros orteil au sol. S’il se lève, la voûte triche.',

  'exercises.toeSpread.title': 'Écartement des orteils',
  'exercises.toeSpread.rationale':
    'Des orteils qui s’écartent partagent la charge avec la voûte.',
  'exercises.toeSpread.cue':
    'Écarte les orteils sur le sol, puis appuie le gros orteil et le petit orteil vers le bas.',

  'exercises.bandInversion.title': 'Inversion à l’élastique',
  'exercises.bandInversion.rationale':
    'Tourner le pied vers l’intérieur travaille le muscle qui passe sous la voûte.',
  'exercises.bandInversion.cue': 'Bouge le pied, pas la jambe. Le genou reste immobile.',

  'exercises.hipAbduction.title': 'Élévation latérale de jambe',
  'exercises.hipAbduction.rationale': 'Une hanche qui lâche fait retomber la charge sur la voûte.',
  'exercises.hipAbduction.cue':
    'Allonge-toi sur le côté. Lève la jambe du dessus, un peu vers l’arrière, orteils tournés vers l’avant.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Équilibre sur une jambe',
  'exercises.singleLegHold.rationale':
    'Tenir sur une jambe, c’est le test que ton pied rate en premier.',
  'exercises.singleLegHold.cue': 'Fixe un point. Laisse le pied vaciller - c’est fait pour.',

  'exercises.eyesClosedStand.title': 'Équilibre yeux fermés',
  'exercises.eyesClosedStand.rationale': 'Les yeux fermés, c’est le pied qui fait l’équilibre.',
  'exercises.eyesClosedStand.cue': 'Mets-toi près d’un mur. Le toucher pour te rattraper, c’est permis.',

  'exercises.heelToeWalk.title': 'Marche talon-pointe',
  'exercises.heelToeWalk.rationale':
    'Marcher du talon à la pointe, c’est la voûte qui se charge et se décharge dans l’ordre.',
  'exercises.heelToeWalk.cue':
    'Le talon se pose d’abord, puis tu déroules. Assez lentement pour t’arrêter au milieu du pas.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Roulement du pied',
  'exercises.footRoll.rationale': 'Rouler le pied apaise les tissus après l’effort.',
  'exercises.footRoll.cue': 'Lentement et fermement. Si tu grimaces, relâche.',

  'exercises.barefootHome.title': 'Pieds nus à la maison',
  'exercises.barefootHome.rationale': 'Chaque heure pieds nus est une heure où le pied travaille.',
  'exercises.barefootHome.cue': 'À l’intérieur seulement, sur un sol plat, et augmente petit à petit.',

  'exercises.breathingReset.title': 'Respiration lente',
  'exercises.breathingReset.rationale': 'Une minute de respiration lente clôt bien la séance.',
  'exercises.breathingReset.cue': 'Expire plus longtemps que tu n’inspires. C’est tout.',

  // ── The weekly plan's additions ──────────────────────────────────────────
  'exercises.heelRaiseDouble.title': 'Montées sur pointes, deux pieds',
  'exercises.heelRaiseDouble.rationale': 'Les deux pieds partagent la charge pendant que le mollet se réveille.',
  'exercises.heelRaiseDouble.cue': 'Monte bien droit au-dessus des gros orteils, puis redescends lentement.',

  'exercises.heelRaiseSeated.title': 'Montées sur pointes, en position assise',
  'exercises.heelRaiseSeated.rationale': 'Du travail de mollet presque sans charge sur le talon.',
  'exercises.heelRaiseSeated.cue':
    'Pousse sur l’avant des pieds. Les mains sur les genoux ajoutent de la résistance.',

  'exercises.heelRaiseHold.title': 'Montée sur pointes tenue',
  'exercises.heelRaiseHold.rationale': 'Tenir en haut charge le tendon sans rebond.',
  'exercises.heelRaiseHold.cue': 'Monte, puis reste immobile en haut - ne te laisse pas redescendre.',

  'exercises.bigToeLift.title': 'Lever du gros orteil',
  'exercises.bigToeLift.rationale': 'Apprend au gros orteil à bouger seul.',
  'exercises.bigToeLift.cue': 'Lève seulement le gros orteil. Les quatre autres restent à plat au sol.',

  'exercises.towelScrunch.title': 'Froisser la serviette',
  'exercises.towelScrunch.rationale': 'Réveille les petits muscles sous la voûte.',
  'exercises.towelScrunch.cue': 'Ramène la serviette avec tes orteils. Le talon reste au sol.',

  'exercises.kneeToWall.title': 'Genou au mur',
  'exercises.kneeToWall.rationale': 'Libère la cheville pour que le talon n’encaisse pas la tension.',
  'exercises.kneeToWall.cue': 'Le talon reste à plat. Pousse le genou vers l’avant, au-dessus du deuxième orteil.',

  'exercises.balancePillow.title': 'Équilibre sur un coussin',
  'exercises.balancePillow.rationale': 'Une surface molle fait travailler la cheville à chaque vacillement.',
  'exercises.balancePillow.cue': 'Mets-toi à côté d’un mur. Genou souple, regard droit devant.',

  'exercises.heelDropStraight.title': 'Descentes de talon',
  'exercises.heelDropStraight.rationale': 'Descendre lentement, c’est ce qui reconstruit le mollet et le tendon d’Achille.',
  'exercises.heelDropStraight.cue':
    'Monte sur les deux pieds, descends lentement sur un seul. Laisse le talon passer sous le niveau de la marche.',

  'exercises.tibialisRaise.title': 'Relevés de pointes',
  'exercises.tibialisRaise.rationale': 'Renforce le muscle du tibia qui stabilise chaque pas.',
  'exercises.tibialisRaise.cue': 'Dos contre le mur. Lève les pointes de pied, garde les talons au sol.',

  'exercises.stepDown.title': 'Descente de marche',
  'exercises.stepDown.rationale': 'Contrôle le genou pour que le pied ne réceptionne pas tout seul.',
  'exercises.stepDown.cue': 'Le genou suit l’axe des orteils. Pose le talon en douceur - ne te laisse pas tomber.',

  'exercises.soleMassage.title': 'Massage de la plante',
  'exercises.soleMassage.rationale': 'Détend les tissus après une longue journée.',
  'exercises.soleMassage.cue':
    'Passages fermes du pouce, du talon vers les orteils. Relâche sur tout point qui pique.',

  'exercises.pogoHops.title': 'Sauts pogo',
  'exercises.pogoHops.rationale': 'Réapprend au pied à rebondir - seulement une fois la douleur partie.',
  'exercises.pogoHops.cue': 'Petits sauts rapides, chevilles toniques. Arrête si le talon fait mal.',

  // ── The morning stretch ──────────────────────────────────────────────────
  'exercises.morningStretch.copy':
    'Avant de te lever : tire tes orteils vers toi, 10 secondes, 10 fois.',

  // ── Load notes ───────────────────────────────────────────────────────────
  'exercises.loadNote.backpack':
    'Ajoute un sac à dos. Assez lourd pour que la dernière répétition soit vraiment la dernière.',
  'exercises.loadNote.heavier': 'Ajoute du poids. Huit répétitions devraient être tout ce que tu as.',
  'exercises.loadNote.towelOff':
    'Sans serviette. Au poids du corps. C’est la version que tu vas garder.',

  // ── Categories ───────────────────────────────────────────────────────────
  // «Entraînement» rather than «Force», for the reason the Spanish file gives:
  // the bucket holds balance and foot work as well as the loaded lifts.
  'exercises.category.fitness': 'Entraînement',
  'exercises.category.mobility': 'Mobilité',
  'exercises.category.recovery': 'Récupération',
  'exercises.category.habit': 'Habitude',

  // ── Dose ─────────────────────────────────────────────────────────────────
  // Seconds are «s» with a space, the SI convention French keeps.
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds} s',
  'exercises.dose.hold': '{seconds} s',
  'exercises.dose.holdMinutes': '{minutes} min',
  'exercises.dose.sets': { one: '{count} série', other: '{count} séries' },
  'exercises.dose.bothFeet': '{dose} · les deux pieds',
};
