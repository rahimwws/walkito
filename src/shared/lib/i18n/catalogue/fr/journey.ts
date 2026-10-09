/**
 * The rebuilt onboarding and the screens after the first purchase, French.
 *
 * `tu`, as in `./core.ts`. Places and sides are whole names because French
 * puts the side after the noun: « talon gauche ». The iOS labels in
 * `setup.widget.mock*` are the system's own French ones.
 *
 * Gendered agreement about the user is avoided rather than guessed at: the
 * seated start is "sur une chaise", not "assis/assise", and "not sure" is
 * "je ne sais pas". The mascot speaks of himself in the masculine.
 *
 * Never a diagnosis, never a promised result, no figures we cannot stand
 * behind, no doctors and no refusals: see the header of `../en/journey.ts`.
 */
export const JOURNEY_FR = {
  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.ctaStart': 'C’est parti',
  'onboarding.intro.haveAccount': 'Déjà un compte ? Connecte-toi',
  'onboarding.signIn.title': 'Content de te revoir',
  'onboarding.signIn.blurb': 'Connecte-toi au compte où ton plan est enregistré.',
  'onboarding.signIn.apple': 'Continuer avec Apple',
  'onboarding.signIn.google': 'Continuer avec Google',
  'onboarding.signIn.email': 'Utiliser un e-mail',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.react.nameNamed': 'Ravi de te rencontrer, {name}.',

  // ── Who they are ─────────────────────────────────────────────────────────
  'onboarding.role.title': 'Qu’est-ce qui te garde sur tes pieds, {name} ?',
  'onboarding.role.blurb': 'Pour que le plan colle à ta journée, pas à celle de quelqu’un d’autre.',
  'onboarding.role.running': 'La course',
  'onboarding.role.feet': 'Je travaille debout toute la journée',
  'onboarding.role.both': 'Les deux',
  'onboarding.role.walking': 'La marche au quotidien',
  'onboarding.runner.titleRunning': 'Comment cours-tu, {name} ?',

  'onboarding.react.runningTitle': 'Les coureurs, vous êtes en bonne compagnie.',
  'onboarding.react.runningBody': 'Ton plan s’organise autour de tes sorties.',
  'onboarding.react.feetTitle': 'Les longues journées usent les pieds.',
  'onboarding.react.feetBody': 'Ton plan se cale avant ou après le travail.',
  'onboarding.react.bothTitle': 'Courir en plus d’une journée entière.',
  'onboarding.react.bothBody': 'Ton plan compte les deux.',
  'onboarding.react.walkingTitle': 'Chaque pas compte.',
  'onboarding.react.walkingBody': 'Ton plan est construit autour de la marche.',

  // ── Where it hurts ───────────────────────────────────────────────────────
  'onboarding.react.areaHeel': 'Le plus courant ici.',
  'onboarding.react.areaFoot': 'C’est là que le plan commence.',
  'onboarding.react.areaAchilles': 'Il répond bien à une charge lente.',
  'onboarding.react.areaCalf': 'Il tire sur tout ce qui est en dessous.',
  'onboarding.react.areaShin': 'La charge a augmenté plus vite que les jambes.',
  'onboarding.react.areaNone': 'Bon moment pour se renforcer.',

  'onboarding.where.heelLeft': 'Talon gauche',
  'onboarding.where.heelRight': 'Talon droit',
  'onboarding.where.heelBoth': 'Les deux talons',
  'onboarding.where.footLeft': 'Pied gauche',
  'onboarding.where.footRight': 'Pied droit',
  'onboarding.where.footBoth': 'Les deux pieds',
  'onboarding.where.achillesLeft': 'Achille gauche',
  'onboarding.where.achillesRight': 'Achille droit',
  'onboarding.where.achillesBoth': 'Les deux Achille',
  'onboarding.where.calfLeft': 'Mollet gauche',
  'onboarding.where.calfRight': 'Mollet droit',
  'onboarding.where.calfBoth': 'Les deux mollets',
  'onboarding.where.shinLeft': 'Tibia gauche',
  'onboarding.where.shinRight': 'Tibia droit',
  'onboarding.where.shinBoth': 'Les deux tibias',

  // ── How long ─────────────────────────────────────────────────────────────
  'onboarding.duration.title': 'Depuis combien de temps as-tu mal ?',
  'onboarding.duration.blurb': 'À peu près, ça suffit.',
  'onboarding.duration.weeks': 'Moins de 6 semaines',
  'onboarding.duration.months': 'De 6 semaines à 3 mois',
  'onboarding.duration.year': 'De 3 à 12 mois',
  'onboarding.duration.longer': 'Plus d’un an',

  'onboarding.react.weeksTitle': 'Tôt, c’est le meilleur moment.',
  'onboarding.react.weeksBody': 'On commence en douceur.',
  'onboarding.react.monthsTitle': 'Ça ne passera pas tout seul.',
  'onboarding.react.monthsBody': 'On commence par ce qui aide en premier.',
  'onboarding.react.yearTitle': 'C’est long.',
  'onboarding.react.yearBody': 'En général, la charge n’a jamais changé. On va la changer.',
  'onboarding.react.longerTitle': 'Plus d’un an. C’est bien réel.',
  'onboarding.react.longerBody': 'Il faut une autre charge, pas plus de repos.',

  // ── Morning pain ─────────────────────────────────────────────────────────
  'onboarding.morning.title': 'Douleur aux premiers pas aujourd’hui ?',
  'onboarding.morning.blurb': 'La même question que chaque matin.',
  'onboarding.morning.min': 'Ça va',
  'onboarding.morning.max': 'Le pire',
  'onboarding.morning.a11y': 'Premiers pas ce matin, {score} sur 10',
  'onboarding.react.painZero': 'Gardons ça comme ça.',
  'onboarding.react.painMild': 'Peu, mais chaque matin.',
  'onboarding.react.painMiddle': 'Assez pour changer ta journée.',
  'onboarding.react.painHard': 'C’est dur de commencer la journée comme ça. Les premières séances seront douces.',
  // Under the morning reaction: the same date the first progress check is on.
  'onboarding.react.painRecheck': 'Ton point de départ. On le revérifie le {date}.',

  // ── Safety check ─────────────────────────────────────────────────────────
  'onboarding.safety.title': 'L’un de ces points en ce moment ?',
  'onboarding.safety.blurb': 'Une petite vérification de sécurité.',
  'onboarding.safety.calf': 'Mollet gonflé, chaud ou rouge d’un côté',
  'onboarding.safety.pop': 'Un claquement soudain à l’arrière de la cheville',
  'onboarding.safety.diabetes': 'Diabète avec un pied chaud et rouge ou une plaie ouverte',
  'onboarding.safety.fall': 'Je me suis fait mal en tombant et je ne peux pas poser le pied',
  'onboarding.safety.numb': 'Engourdissement, fourmillements ou brûlure',
  'onboarding.safety.none': 'Rien de tout ça',
  'onboarding.react.safetySeated': 'La première semaine se fait sur une chaise.',
  'onboarding.react.safetyNumb': 'Noté. On va surveiller ça.',

  // ── What they tried ──────────────────────────────────────────────────────
  'onboarding.tried.title': 'Qu’as-tu déjà essayé ?',
  'onboarding.tried.blurb': 'Choisis tout ce qui s’applique.',
  'onboarding.tried.insoles': 'Semelles ou orthèses',
  'onboarding.tried.stretching': 'Étirements',
  'onboarding.tried.shoes': 'Nouvelles chaussures',
  'onboarding.tried.rest': 'Repos',
  'onboarding.tried.physio': 'Kiné',
  'onboarding.tried.none': 'Rien pour l’instant',

  'onboarding.react.insolesTitle': 'Les semelles soulagent la charge.',
  'onboarding.react.insolesBody': 'Ton plan ajoute la force qu’elles ne donnent pas.',
  'onboarding.react.restTitle': 'Le repos calme les choses.',
  'onboarding.react.restBody': 'Ton plan ajoute la force que le repos ne donne pas.',
  'onboarding.react.stretchingTitle': 'S’étirer, c’est un bon début.',
  'onboarding.react.stretchingBody': 'Ton plan y ajoute de la force.',
  'onboarding.react.shoesTitle': 'De bonnes chaussures aident.',
  'onboarding.react.shoesBody': 'Ton plan renforce ce qui porte la charge.',
  'onboarding.react.physioTitle': 'Un kiné, c’est un très bon début.',
  'onboarding.react.physioBody': 'Ton plan prend le relais chaque jour.',
  'onboarding.react.nothingTitle': 'Tu es au bon endroit.',
  'onboarding.react.nothingBody': 'On commence par ce qui aide le plus.',
  'onboarding.react.tap': 'Touche pour continuer',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.titleShort': 'Qu’est-ce qui compte le plus ?',
  'onboarding.goal.mornings': 'Des matins plus faciles',
  'onboarding.goal.backToRunning': 'Reprendre la course',
  'onboarding.goal.shift': 'Tenir une journée de travail sans douleur',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.titleFeet': 'Combien d’heures debout par jour ?',
  'onboarding.load.blurbFeet': 'Une journée habituelle, pas la plus longue.',
  'onboarding.load.feet0': 'Moins de 4 heures',
  'onboarding.load.feet1': '4-8 heures',
  'onboarding.load.feet2': '8-12 heures',
  'onboarding.load.feet3': '12 heures et plus',
  'onboarding.reflection.feetDaily': '{band} debout par jour',

  // ── Halfway ──────────────────────────────────────────────────────────────
  'onboarding.midway.nothing': 'Rien ne fait mal en ce moment',

  // ── Why it still hurts ───────────────────────────────────────────────────
  'onboarding.why.title': 'Pourquoi ça fait encore mal, {name}',
  'onboarding.why.patternHead': 'Le schéma',
  'onboarding.why.lingersHead': 'Pourquoi ça dure',
  'onboarding.why.helpsHead': 'Ce qui aide',
  'onboarding.why.patternHeel': 'Pire aux premiers pas. Très courant.',
  'onboarding.why.patternFoot': 'Les muscles de la voûte fatiguent avant la fin de la journée.',
  'onboarding.why.patternAchilles': 'La charge a augmenté plus vite que le tendon ne s’est adapté.',
  'onboarding.why.patternCalf': 'Un mollet raide tire sur le talon et le pied.',
  'onboarding.why.patternShin': 'La charge a augmenté plus vite que les jambes.',
  'onboarding.why.lingersWeeks': 'Seulement quelques semaines. Le plus simple à inverser.',
  'onboarding.why.lingersMonths': 'Déjà des mois. Ça ne passera pas tout seul.',
  'onboarding.why.lingersYear': 'Déjà des mois. La charge n’a jamais changé.',
  'onboarding.why.lingersLonger': 'Plus d’un an. La charge n’a jamais changé.',
  'onboarding.why.triedInsoles': 'Les semelles soulagent, mais ne renforcent pas.',
  'onboarding.why.triedRest': 'Le repos calme, mais ne renforce pas.',
  'onboarding.why.triedStretching': 'S’étirer seul ne renforce pas.',
  'onboarding.why.triedShoes': 'Les chaussures changent la charge, pas ce qui la porte.',
  'onboarding.why.triedPhysio': 'Ce qui manque, c’est de le faire chaque jour.',
  'onboarding.why.triedNone': 'Un nouveau départ.',
  'onboarding.why.helpsFoot': 'Un étirement le matin, puis du renforcement lent du mollet et du pied.',
  'onboarding.why.helpsAchilles': 'Une charge lente du mollet, semaine après semaine.',
  'onboarding.why.helpsCalf': 'Assouplir le mollet, puis le renforcer.',
  'onboarding.why.helpsShin': 'Alléger la charge, puis renforcer.',
  'onboarding.why.footer': 'Ce n’est pas un diagnostic.',
  'onboarding.why.cta': 'Créer mon plan',

  // ── When ─────────────────────────────────────────────────────────────────
  'onboarding.habit.title': 'Quand vas-tu le faire ?',
  'onboarding.habit.blurb': 'Accroche-le à quelque chose que tu fais déjà chaque jour.',
  'onboarding.habit.wake': 'Au réveil, avant de me lever',
  'onboarding.habit.coffee': 'Avec mon café du matin',
  'onboarding.habit.shift': 'Après le travail',
  'onboarding.habit.bed': 'Avant de dormir',
  'onboarding.habit.reminder': 'Rappel : {time}',
  'onboarding.habit.change': 'Modifier',
  'onboarding.react.habitWake': 'C’est là que le pied est le plus raide.',
  'onboarding.react.habitCoffee': 'Chaque jour, comme le café.',
  'onboarding.react.habitShift': 'Quand les pieds en ont le plus besoin.',
  'onboarding.react.habitBed': 'Quelques minutes au calme.',
  'onboarding.react.equipmentNone': 'Rien à prévoir.',
  'onboarding.react.equipmentSome': 'On en tiendra compte.',

  // ── The 30-second check ──────────────────────────────────────────────────
  'onboarding.test.introTitle': 'Petit test : lève-toi',
  'onboarding.test.introBody': 'Deux tests, 30 secondes.',
  'onboarding.test.introBalance': 'Sur une jambe',
  'onboarding.test.start': 'Commencer le test',
  'onboarding.test.notNow': 'Passer',
  'onboarding.test.meta': 'Test {n} sur {total}',
  'onboarding.test.toeStep1': 'Tiens-toi debout, pieds à plat et détendus.',
  'onboarding.test.toeStep2': 'Lève seulement le gros orteil. Les autres restent au sol.',
  'onboarding.test.toeQuestion': 'Une voûte apparaît-elle sous ton pied ?',
  'onboarding.test.toeYes': 'Oui, une voûte apparaît',
  'onboarding.test.toeNo': 'Non',
  'onboarding.test.toeUnsure': 'Je ne sais pas',
  'onboarding.test.balanceBody': 'Lève un pied. Touche Stop quand il retouche le sol.',
  'onboarding.test.startLeft': 'Commencer jambe gauche',
  'onboarding.test.startRight': 'Commencer jambe droite',
  'onboarding.test.stop': 'Stop',
  'onboarding.test.left': 'Gauche',
  'onboarding.test.right': 'Droite',
  'onboarding.test.seconds': '{count} s',
  'onboarding.test.resultTitle': 'Ton point de départ',
  'onboarding.test.archYes': 'Pied souple. Il répond bien au renforcement.',
  'onboarding.test.archNo': 'Pas de voûte. On se concentre sur le mollet et la cheville.',
  'onboarding.test.archUnsure': 'Difficile à dire. Ton premier retest le mesurera.',
  'onboarding.test.balanceHead': 'Sur une jambe',
  'onboarding.test.resultFoot': 'Ton plan s’en sert dès le premier jour.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.heading': 'Création de ton plan',
  'onboarding.building.where': '{where} · matins {score}/10',
  // Under the place, on the building screen's first card.
  'onboarding.building.mornings': 'Premiers pas {score}/10',
  'onboarding.building.safety': 'Vérification de sécurité validée',
  'onboarding.building.seated': 'La première semaine commence sur une chaise',
  'onboarding.building.kitAll': 'Tout ce qu’il faut à la maison',
  'onboarding.building.kitWithout': 'Prévu sans : {items}',
  'onboarding.building.kitNone': 'Aucun matériel nécessaire',
  'onboarding.building.choosing': 'Choix de ta première semaine…',
  'onboarding.building.ctaWeek': 'Voir ma première semaine',

  // ── First week ───────────────────────────────────────────────────────────
  'onboarding.week.title': 'Ta première semaine',
  'onboarding.week.blurb': 'Des séances courtes les jours que tu as choisis. Chacune s’ajuste à l’état de ton pied ce matin-là.',
  'onboarding.week.morningMeta': 'Chaque matin, avant de te lever · 2 min',
  'onboarding.week.sessionMeta': 'Dans tes séances cette semaine',

  // ── After the first purchase ─────────────────────────────────────────────
  'setup.save.titleNamed': 'C’est parti, {name}',
  'setup.save.title': 'C’est parti',
  'setup.save.blurb': 'Pour le retrouver sur un nouveau téléphone.',
  'setup.save.later': 'Pas maintenant',
  // After the purchase, for anyone with no address on file: the welcome and
  // the first fortnight's emails go to it.
  'setup.email.title': 'T’envoyer ton plan par email ?',
  'setup.email.placeholder': 'toi@exemple.com',
  'setup.email.note': 'Facultatif. Quelques emails courts pendant les deux premières semaines.',
  'setup.email.send': 'Envoyer',
  'setup.widget.title': 'Ton bilan sur l’écran d’accueil',
  'setup.widget.blurb': 'Une touche avant de te lever.',
  'setup.widget.add': 'Ajouter le widget',
  'setup.widget.later': 'Pas maintenant',
  'setup.widget.stepOf': 'Étape {n} sur {total}',
  'setup.widget.holdTitle': 'Maintiens ton écran d’accueil',
  'setup.widget.holdBody': 'Appuie longuement sur un espace vide.',
  'setup.widget.editTitle': 'Touche Modifier, puis Ajouter un widget',
  'setup.widget.editBody': 'Dans le coin en haut, puis Ajouter un widget.',
  'setup.widget.searchTitle': 'Cherche Walkito',
  'setup.widget.searchBody': 'Choisis la petite taille, touche Ajouter un widget.',
  'setup.widget.mockEdit': 'Modifier',
  'setup.widget.mockAdd': 'Ajouter un widget',
  'setup.widget.mockSearch': 'Rechercher des widgets',
  'setup.next': 'Suivant',
  'setup.done': 'OK',
  'setup.finish': 'Commencer ma première séance',

  // ── The paywall ──────────────────────────────────────────────────────────
  'offer.stripMornings': 'Matins {score}/10',
  'offer.introTomorrowWhen': 'Demain, avant de te lever',
  'offer.introTomorrowBody': 'Deux minutes, avant que ton pied touche le sol.',
  'offer.howTitleShort': 'Voici comment ça marche',
  'offer.howCheckinShort': 'Un bilan de 10 secondes le matin',
  'offer.howSessionShort': 'Une séance de 3-10 minutes, ajustée chaque jour',
  'offer.howRetestShort': 'Le même test toutes les deux semaines',
  'offer.builtTitle': 'Sur quoi ça repose',
  'offer.builtBody':
    'Des exercices issus de la recherche publiée et des recommandations de 2023 sur la douleur au talon. Walkito lui-même n’a pas été testé dans un essai.',
  'offer.freeLine': 'Si tu annules un jour, l’étirement du matin reste gratuit.',
  'offer.haveCode': 'Tu as un code ?',
  'offer.startPlan': 'Commencer mon plan',
};
