/** testday strings, French (the guided test day: intro, the three tests, results). Filled per domain; see `../en/core.ts` for the rules. */

export const TESTDAY_FR = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Fermer',
  'testday.leave.title': 'Quitter le test ?',
  'testday.leave.body': 'Rien n’est enregistré avant la fin du dernier test. Le test reste à faire.',
  'testday.leave.stay': 'Continuer le test',
  'testday.leave.confirm': 'Quitter',

  // ── Intro ─────────────────────────────────────────────────────────────────
  'testday.intro.eyebrow': 'Jour de test',
  'testday.intro.title': 'Trois tests courts',
  'testday.intro.body': {
    one: 'Environ {count} minute.',
    other: 'Environ {count} minutes.',
  },
  'testday.intro.nowSeconds': 'Maintenant {now} s · objectif {goal} s',
  'testday.intro.nowRaises': {
    one: 'Maintenant {now} · objectif {count} montée',
    other: 'Maintenant {now} · objectif {count} montées',
  },
  'testday.intro.firstSeconds': 'Première mesure · objectif {goal} s',
  'testday.intro.firstRaises': {
    one: 'Première mesure · objectif {count} montée',
    other: 'Première mesure · objectif {count} montées',
  },
  'testday.intro.need': 'Il te faut',
  'testday.intro.needBarefoot': 'Les pieds nus',
  'testday.intro.needWall': 'Un mur à toucher pour l’équilibre',
  'testday.intro.needPhone': 'Le téléphone à portée de vue',
  'testday.intro.checkin': 'Comment va ton pied, là ?',
  'testday.intro.checkinHint': 'Ça compte comme ton bilan du jour.',
  'testday.intro.painNone': 'Aucune douleur',
  'testday.intro.painWorst': 'Pire',
  'testday.intro.painA11y': '{score} sur 10',
  'testday.intro.sore':
    'Un jour où ça fait mal, les chiffres sortent plus bas que ce dont ton pied est vraiment capable, et les deux semaines suivantes seraient planifiées à partir d’eux. Le test peut attendre demain.',
  'testday.intro.start': 'Commencer',
  'testday.intro.anyway': 'Faire le test quand même',
  'testday.intro.tomorrow': 'Faire le test demain',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Test {current} sur {total}',
  'testday.test.calf.name': 'Montées sur pointes',
  'testday.test.arch.name': 'Maintien de la voûte',
  'testday.test.balance.name': 'Équilibre',

  'testday.side.left': 'Jambe gauche',
  'testday.side.right': 'Jambe droite',
  'testday.side.leftSore': 'Jambe gauche - celle qui fait mal',
  'testday.side.rightSore': 'Jambe droite - celle qui fait mal',

  // The button on the picture before a test: opens the clip at full size.

  'testday.watch': 'Voir la vidéo',

  'testday.calf.step1': 'Sur une jambe, doigts contre le mur.',
  'testday.calf.step2': 'Monte tout en haut et redescends, au rythme du clic.',
  'testday.calf.step3': 'Arrête quand tu perds le rythme ou la hauteur.',
  'testday.calf.stopHint': 'Touche quand tu ne tiens plus le rythme ou la pleine hauteur',
  'testday.calf.up': 'Monte',
  'testday.calf.down': 'Descends',
  'testday.calf.otherTitle': 'Maintenant l’autre jambe',
  'testday.calf.otherBody': 'Même rythme, même pleine hauteur, le bout des doigts au mur.',

  'testday.arch.step1': 'Debout sur les deux pieds.',
  'testday.arch.step2': 'Ramène l’avant du pied vers le talon.',
  'testday.arch.step3': 'Arrête quand la voûte retombe.',
  'testday.arch.stopHint': 'Touche dès que la voûte retombe',

  'testday.balance.step1': 'Sur une jambe, mains sur les hanches.',
  'testday.balance.step2': 'Ferme les yeux au départ.',
  'testday.balance.step3': 'Arrête dès que l’autre pied touche le sol.',
  'testday.balance.stopHint': 'Touche quand l’autre pied touche le sol',

  'testday.start': 'Commencer',
  'testday.stop': 'Stop',
  'testday.timeLeft': 'Encore {time}',
  'testday.secondsLeft': { one: 'seconde restante', other: 'secondes restantes' },
  'testday.held': 'Tenu {n} s',

  'testday.paused.title': 'En pause',
  'testday.paused.body': 'Le chrono s’est arrêté pendant que l’app était en arrière-plan.',
  'testday.paused.resume': 'Reprendre',
  'testday.paused.restart': 'Recommencer ce test',

  'testday.confirm.raises': {
    one: '{count} montée - c’est bien ça ?',
    other: '{count} montées - c’est bien ça ?',
  },
  'testday.confirm.seconds': {
    one: '{count} seconde - c’est bien ça ?',
    other: '{count} secondes - c’est bien ça ?',
  },
  'testday.confirm.hint': 'Corrige si le compte n’est pas bon.',
  'testday.confirm.holdHint': 'Si tu as mis un moment à atteindre le téléphone, retire ces secondes.',
  'testday.confirm.less': 'Moins',
  'testday.confirm.more': 'Plus',
  'testday.confirm.again': 'Refaire ce test',
  'testday.confirm.next': 'Test suivant',
  'testday.confirm.finish': 'Voir les résultats',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.firstBlurb': 'Le prochain test montrera tout le chemin parcouru.',
  'testday.results.name.arch_hold': 'Maintien de la voûte',
  'testday.results.name.calf_raises': 'Montées sur pointes',
  'testday.results.name.balance': 'Équilibre',
  'testday.results.name.symmetry': 'Symétrie',
  'testday.results.unitSeconds': { one: 'seconde', other: 'secondes' },
  'testday.results.unitRaises': { one: 'montée', other: 'montées' },
  'testday.results.percent': '{n} %',
  'testday.results.gapUnit': 'd’écart entre les jambes',
  'testday.results.legs': 'Gauche {left} · droite {right}',
  'testday.results.goalGap': 'Objectif : moins de {n} %',
  'testday.results.toGoSeconds': { one: 'Encore {count} s', other: 'Encore {count} s' },
  'testday.results.toGoRaises': { one: 'Encore {count} montée', other: 'Encore {count} montées' },
  'testday.results.toGoGap': { one: 'Encore {count} point', other: 'Encore {count} points' },
  'testday.results.reached': 'Objectif atteint',
  'testday.results.moreSeconds': {
    one: '{count} s de plus que la dernière fois',
    other: '{count} s de plus que la dernière fois',
  },
  'testday.results.fewerSeconds': {
    one: '{count} s de moins que la dernière fois',
    other: '{count} s de moins que la dernière fois',
  },
  'testday.results.moreRaises': {
    one: '{count} montée de plus que la dernière fois',
    other: '{count} montées de plus que la dernière fois',
  },
  'testday.results.fewerRaises': {
    one: '{count} montée de moins que la dernière fois',
    other: '{count} montées de moins que la dernière fois',
  },
  'testday.results.gapSmaller': {
    one: 'Écart réduit de {count} point depuis la dernière fois',
    other: 'Écart réduit de {count} points depuis la dernière fois',
  },
  'testday.results.gapLarger': {
    one: 'Écart augmenté de {count} point depuis la dernière fois',
    other: 'Écart augmenté de {count} points depuis la dernière fois',
  },
  'testday.results.same': 'Comme la dernière fois',
  'testday.results.first': 'Première mesure',
  'testday.results.nextTest': 'Prochain test : {date}',
  'testday.results.planUpdated': 'Ton plan pour les deux semaines à venir est à jour.',
  'testday.results.done': 'Terminé',

  'testday.results.verdictFirst': 'Trois chiffres à battre',
  'testday.results.verdictSteady': 'Les trois tiennent bon',
  'testday.results.verdictUp.calf_raises': 'Plus de montées que la dernière fois',
  'testday.results.verdictUp.arch_hold': 'Ta voûte a tenu plus longtemps',
  'testday.results.verdictUp.balance': 'Tu as tenu l’équilibre plus longtemps',
  'testday.results.verdictUpTwo': 'Deux sur trois ont progressé',
  'testday.results.verdictUpAll': 'Les trois ont progressé',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'Nouveau record',
  'testday.results.heroEyebrowFirst': 'Ton point de départ',
  'testday.results.heroEyebrowSteady': 'Tests terminés',
  'testday.results.verdictGoal.calf_raises': 'Objectif de montées sur pointes atteint',
  'testday.results.verdictGoal.arch_hold': 'Objectif de maintien de la voûte atteint',
  'testday.results.verdictGoal.balance': 'Objectif d’équilibre atteint',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Tous tes tests',
  'testday.results.showDetails': 'Voir le détail',
  'testday.results.hideDetails': 'Masquer le détail',
  'testday.results.share': 'Partager',
  'testday.results.shareTitle': 'Mon test des pieds',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'Mon test des pieds sur Walkito : montées sur pointes {calf} · voûte {arch} s · équilibre {balance} s',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 's',
  'testday.results.valueSeconds': '{n} s',
  'testday.results.dateVs': {
    one: '{date} · comparé à il y a {count} jour',
    other: '{date} · comparé à il y a {count} jours',
  },
  'testday.results.dateFirst': '{date} · votre point de départ',
  'testday.results.chipBaseline': 'Point de départ',
  'testday.results.chipSame': 'Identique',
  'testday.results.chipSeconds': '{delta} s',
  'testday.results.chipRaises': { one: '{delta} montée', other: '{delta} montées' },
  'testday.results.gapBetween': 'Écart entre les jambes {n} %',
  'testday.results.explain.calf_raises':
    'Les montées sur pointes montrent combien de travail votre mollet et votre tendon d’Achille fournissent avant de fatiguer. Plus de montées veut dire que le mollet porte une plus grande part de chaque pas lors des longues marches et sorties de course.',
  'testday.results.explain.arch_hold':
    'Le maintien de la voûte montre combien de temps les petits muscles sous le pied gardent la voûte levée. Un maintien plus long veut dire que le pied reste soutenu plus longtemps dans la journée.',
  'testday.results.explain.balance':
    'Tenir sur une jambe les yeux fermés montre à quel point votre pied et votre cheville sentent le sol. Plus de secondes veut dire des pas plus sûrs sur un terrain inégal et quand vous êtes fatigué.',
  'testday.results.explainA11y': 'Ce que cela montre',
};
