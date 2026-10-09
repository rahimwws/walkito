/**
 * Onboarding, French.
 *
 * `tu` throughout. Several lines are rewritten to stay gender-neutral, because
 * this flow asks the user their sex and could guess wrong before it does:
 * `onboarding.notify.ask` avoids «seul/seule», the welcome is «Bienvenue»,
 * which does not agree, and no adjective in the flow describes the user.
 *
 * Whoop's menu names stay in English, as its app shows them; Garmin Connect's
 * are the ones its French build uses. Apple Health is «Santé», the name Apple
 * gives it in French.
 *
 * The `many` plural form is left out everywhere - in French it is the whole-
 * millions form, and no count in this flow reaches a million.
 */
export const ONBOARDING_FR = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  'onboarding.act.about': 'À propos de toi',
  'onboarding.act.sport': 'Ton sport',
  'onboarding.act.health': 'Ta santé',
  'onboarding.act.plan': 'Ton plan',

  // ── Shared buttons ───────────────────────────────────────────────────────
  'onboarding.cta.next': 'Suivant',
  'onboarding.cta.continue': 'Continuer',
  'onboarding.cta.done': 'Terminé',
  'onboarding.cta.skip': 'Passer',
  'onboarding.cta.skipForNow': 'Passer pour l’instant',
  'onboarding.cta.checking': 'Vérification…',
  'onboarding.cta.applyCode': 'Appliquer le code',
  'onboarding.cta.startPlan': 'Commencer mon plan',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Cours sans douter de chaque pas',
  'onboarding.intro.blurb': 'Un plan quotidien qui change quand tes jambes changent.',
  'onboarding.intro.greeting': 'Salut, moi c’est Walkito',
  'onboarding.intro.headline': 'Voyons pourquoi ça fait encore mal.',
  'onboarding.intro.cta': 'Continuer avec Apple',
  'onboarding.intro.ctaGoogle': 'Continuer avec Google',
  'onboarding.intro.signInFailed': 'La connexion n’a pas abouti. Réessaie.',
  'onboarding.intro.emailCta': 'Se connecter par e-mail',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Connexion',
  'onboarding.email.blurb': 'Utilise l’e-mail et le mot de passe de ton compte.',
  'onboarding.email.address': 'E-mail',
  'onboarding.email.password': 'Mot de passe',
  'onboarding.email.submit': 'Se connecter',
  'onboarding.email.submitting': 'Connexion…',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.name.title': 'Comment veux-tu\nqu’on t’appelle ?',
  'onboarding.name.blurb': 'Il ira sur ton passeport du pied.',
  'onboarding.name.placeholder': 'ex. Alex',
  // The Foot Passport: a stamp per answer, folded above the questions and
  // open on the halfway screen. Labels are short: each sits beside its value.
  'onboarding.passport.title': 'Passeport du pied',
  'onboarding.passport.owner': 'Passeport du pied de {name}',
  'onboarding.passport.empty': 'Tes réponses s’afficheront ici',
  'onboarding.passport.issued': 'Délivré le {date}',
  'onboarding.passport.edit': 'Quelque chose à corriger ? Touche pour modifier.',
  'onboarding.passport.heading': 'Ton passeport du pied, {name}',
  // Who they are, in the passport's words: the role question's own
  // answers ("Both") mean nothing out of it.
  'onboarding.passport.role.running': 'Coureur',
  'onboarding.passport.role.feet': 'Debout au travail',
  'onboarding.passport.role.both': 'Coureur, debout au travail',
  'onboarding.passport.role.walking': 'Marche au quotidien',
  'onboarding.passport.who': 'Qui',
  'onboarding.passport.toe': 'Lever le gros orteil',
  'onboarding.passport.bunion': 'Oignon',
  'onboarding.passport.where': 'Où ça fait mal',
  'onboarding.passport.since': 'Depuis',
  'onboarding.passport.mornings': 'Premiers pas',
  'onboarding.passport.goal': 'Objectif',
  'onboarding.passport.load': 'Charge',
  'onboarding.passport.habit': 'Avec',
  'onboarding.passport.plan': 'Plan',
  'onboarding.passport.morningsValue': '{score}/10',
  'onboarding.passport.planValue': '{days} · {minutes}',

  'onboarding.toe.title': 'Arrives-tu à lever seulement le gros orteil ?',
  'onboarding.toe.blurb': 'Debout, garde les quatre autres orteils au sol et essaie.',
  'onboarding.toe.yes': 'Oui, facilement',
  'onboarding.toe.little': 'Un peu',
  'onboarding.toe.no': 'Non, il ne se lève pas',
  'onboarding.bunion.title': 'As-tu un oignon (hallux valgus) ?',
  'onboarding.bunion.blurb': 'Une bosse osseuse à la base du gros orteil, souvent avec l’orteil qui penche vers les autres.',
  'onboarding.bunion.straight': 'Gros orteil droit',
  'onboarding.bunion.example': 'Avec un oignon',
  'onboarding.bunion.no': 'Non',
  'onboarding.bunion.little': 'Un léger',
  'onboarding.bunion.yes': 'Oui',
  'onboarding.bunion.unsure': 'Je ne sais pas',
  'onboarding.bunion.note': 'Une image pour comparer, pas un diagnostic.',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'Quel est ton profil sportif, {name} ?',
  'onboarding.runner.blurb':
    'C’est le point de départ de ton plan. Te sous-estimer ici rend juste la première semaine trop facile.',
  'onboarding.runner.new': 'Je débute',
  'onboarding.runner.casual': 'De temps en temps',
  'onboarding.runner.regular': 'Régulièrement',
  'onboarding.runner.racing': 'Je prépare un objectif',
  'onboarding.runner.serious': 'Je m’y mets à fond',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'Encore un peu sur toi, {name}',
  'onboarding.body.blurb': 'Les tendons portent ton poids. Ça fixe ta charge de départ.',
  'onboarding.body.kg': 'kg',
  'onboarding.body.lb': 'lb',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': 'Quelle pointure portes-tu pour courir, {name} ?',
  'onboarding.size.blurb':
    'La pointure donne la longueur du levier que ton mollet doit mettre en mouvement.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, vers quoi tu travailles ?',
  'onboarding.goal.blurb': 'Choisis ce qui compte le plus en ce moment. Tu pourras changer plus tard.',
  'onboarding.goal.painfree': 'Courir sans douleur',
  'onboarding.goal.race': 'Préparer une course',
  'onboarding.goal.consistent': 'Courir plus régulièrement',
  'onboarding.goal.stronger': 'Renforcer mes jambes',
  'onboarding.goal.injuryfree': 'Éviter les blessures',
  'onboarding.goal.flatfeet': 'Des voûtes plus fortes',
  'onboarding.goal.ankles': 'Des chevilles plus stables',
  'onboarding.goal.jump': 'Sauter plus haut',
  'onboarding.goal.allday': 'Tenir debout toute la journée',
  'onboarding.goal.comeback': 'Reprendre après une blessure',
  'onboarding.goal.steady': 'Marcher avec assurance',
  // Days and minutes, one screen: a heading over two short lists.
  'onboarding.schedule.title': 'Combien de temps as-tu, {name} ?',
  'onboarding.schedule.days': 'Jours par semaine',
  'onboarding.schedule.minutes': 'Minutes par séance',
  'onboarding.schedule.kit': 'Chez toi ?',
  // Under the kit: the exercises it brings into the plan, as they are picked.
  'onboarding.schedule.adds': 'S’ajoute à ton plan',
  'onboarding.days.days3': '3 jours',
  'onboarding.days.days3Caption': 'Un départ en douceur',
  'onboarding.days.days5': '5 jours',
  'onboarding.days.days5Caption': 'Recommandé',
  'onboarding.days.days7': 'Tous les jours',
  'onboarding.days.days7Caption': 'Court et quotidien',
  'onboarding.minutes.blurb': 'Change-le quand tu veux - les jours chargés comptent aussi.',
  'onboarding.minutes.min3': '3 minutes',
  'onboarding.minutes.min3Caption': 'Même les jours chargés',
  'onboarding.minutes.min5': '5 minutes',
  'onboarding.minutes.min5Caption': 'Recommandé',
  'onboarding.minutes.min10': '10 minutes',
  'onboarding.minutes.min10Caption': 'Pour progresser plus vite',
  'onboarding.equipment.title': 'Qu’as-tu à la maison ?',
  'onboarding.equipment.blurb': 'Coche tout ce que tu as.',
  'onboarding.equipment.step': 'Une marche ou un escalier',
  'onboarding.equipment.band': 'Élastique de résistance',
  'onboarding.equipment.towel': 'Serviette',
  'onboarding.equipment.pillow': 'Coussin',
  'onboarding.equipment.ball': 'Balle de massage',
  'onboarding.equipment.none': 'Rien de tout ça',
  'onboarding.reminder.title': 'Quand veux-tu qu’on te le rappelle ?',
  'onboarding.reminder.blurb': 'Un rappel par jour. Choisis une heure où tu as souvent cinq minutes de libre.',
  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Où as-tu mal d’habitude, {name} ?',
  'onboarding.pain.blurb': 'Touche les points sur la jambe, jusqu’à {count}.',
  'onboarding.pain.full': 'Jusqu’à {count} à la fois. Touches-en un pour l’échanger.',
  'onboarding.pain.none': 'Rien ne me fait mal en ce moment',
  'onboarding.pain.disclaimer':
    'Ce n’est pas un avis médical. Si la douleur est vive, s’aggrave, ou s’accompagne de gonflement ou d’engourdissement, consulte un médecin.',

  'onboarding.side.title': 'De quel côté, {name} ?',
  'onboarding.side.blurb': 'Les tests comparent une jambe à l’autre, alors on doit savoir sur laquelle on travaille.',
  'onboarding.side.left': 'Gauche',
  'onboarding.side.right': 'Droite',
  'onboarding.side.both': 'Les deux',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': 'Qu’est-ce qui sollicite tes jambes, {name} ?',
  'onboarding.sport.blurb': 'Ça décide comment les questions suivantes sont posées.',
  'onboarding.sport.running': 'Course à pied',
  'onboarding.sport.tennis': 'Tennis',
  'onboarding.sport.gym': 'Salle de sport',
  'onboarding.sport.football': 'Football',
  'onboarding.sport.basketball': 'Basket',
  'onboarding.sport.cycling': 'Vélo',
  'onboarding.sport.hiking': 'Randonnée',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.title': 'Tu en fais combien en ce moment ?',
  'onboarding.load.blurb': 'Ta vraie semaine actuelle, pas ta meilleure.',
  'onboarding.load.blurbMonth': 'Ton vrai mois actuel, pas ton meilleur.',
  'onboarding.load.titleRunning': 'Combien cours-tu par semaine ?',
  'onboarding.load.titleTennis': 'Combien de temps passes-tu sur le court, {name} ?',
  'onboarding.load.blurbTennis': 'Matchs et entraînements ensemble - la vraie semaine.',
  'onboarding.load.titleGym': 'Combien t’entraînes-tu en ce moment, {name} ?',
  'onboarding.load.blurbGym': 'Le temps sous charge, pas le temps passé à la salle.',
  'onboarding.load.titleFootball': 'Combien joues-tu en ce moment, {name} ?',
  'onboarding.load.blurbFootball': 'Matchs et entraînements ensemble - la vraie semaine.',
  'onboarding.load.titleBasketball': 'Combien joues-tu en ce moment, {name} ?',
  'onboarding.load.blurbBasketball': 'Matchs et entraînements ensemble - la vraie semaine.',
  'onboarding.load.titleCycling': 'Combien roules-tu en ce moment, {name} ?',
  'onboarding.load.titleHiking': 'Combien randonnes-tu en ce moment, {name} ?',
  'onboarding.load.km0': '0–5 {unit}',
  'onboarding.load.km1': '5–15 {unit}',
  'onboarding.load.km2': '15–30 {unit}',
  'onboarding.load.km3': '30–50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'km',
  'onboarding.load.hours0': 'Moins d’1 heure',
  'onboarding.load.hours1': '1–3 heures',
  'onboarding.load.hours2': '3–5 heures',
  'onboarding.load.hours3': '5–8 heures',
  'onboarding.load.hours4': '8+ heures',
  'onboarding.load.perWeek': 'par semaine',
  'onboarding.load.runsPerWeek': 'Sorties par semaine',
  'onboarding.load.sessionsPerWeek': 'Séances par semaine',
  'onboarding.load.ridesPerWeek': 'Sorties vélo par semaine',
  'onboarding.load.hikesPerMonth': 'Randonnées par mois',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': 'Qu’est-ce qui est le plus dur en ce moment, {name} ?',
  'onboarding.challenge.blurb': 'Jusqu’à deux. Le plan penche vers ce que tu choisis.',
  'onboarding.challenge.painfree': 'Rester sans douleur',
  'onboarding.challenge.back': 'Reprendre la course',
  'onboarding.challenge.distance': 'Augmenter la distance',
  'onboarding.challenge.recovery': 'Récupérer plus vite',
  'onboarding.challenge.strength': 'Gagner en force',
  'onboarding.challenge.injury': 'Éviter une nouvelle blessure',

  'onboarding.source.title': 'Comment as-tu découvert Walkito ?',
  'onboarding.source.blurb': 'Un seul toucher. Ça nous aide à toucher des gens comme toi.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'On me l’a recommandé',
  'onboarding.source.appStore': 'En parcourant l’App Store',
  'onboarding.source.playStore': 'En parcourant Google Play',
  'onboarding.source.google': 'Recherche Google',
  'onboarding.source.other': 'Ailleurs',
  'onboarding.challenge.swapped': 'Seulement {count} à la fois - « {label} » a été retiré.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Connecte tes données Santé',
  'onboarding.health.blurb': 'Pour que ton plan parte de ce que tu fais vraiment.',
  'onboarding.health.askNamed': 'Mets-moi au courant, {name} !',
  'onboarding.health.ask': 'Mets-moi au courant !',
  'onboarding.health.askBlurbAndroid':
    'Walkito lit tes pas, tes courses et ton sommeil pour que le plan parte de ce que tu as vraiment fait - pas de ce que tu comptais faire.',
  'onboarding.health.askBlurb':
    'Walkito lit tes pas, ton énergie et ta fréquence cardiaque pour que le plan parte de ce que tu as vraiment fait - pas de ce que tu comptais faire.',
  'onboarding.health.steps': 'Pas',
  'onboarding.health.calories': 'Énergie active',
  'onboarding.health.heartRate': 'Fréquence cardiaque',
  'onboarding.health.notShared': 'Non partagé',
  'onboarding.health.thousands': '{value} k',
  'onboarding.health.kcal': '{value} kcal',
  'onboarding.health.bpm': '{value} bpm',
  'onboarding.health.connect': 'Connecter à Santé',
  'onboarding.health.opening': 'Ouverture de Santé…',
  'onboarding.health.connectAndroid': 'Connecter Health Connect',
  'onboarding.health.openingAndroid': 'Ouverture de Health Connect…',
  'onboarding.health.promise': 'Tes données de santé ne quittent jamais cet appareil.',
  'onboarding.health.unavailable': 'Santé n’est pas disponible ici - tu peux continuer sans.',
  'onboarding.health.declined': 'L’accès à Santé a été refusé. Ton plan fonctionnera sans.',
  'onboarding.health.empty': 'Connecté - pas encore de données. Elles arriveront à mesure que tu bouges.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': 'Tu portes une montre ?',
  'onboarding.watch.blurb': 'Juste pour savoir s’il y a quelque chose à connecter.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Tout fonctionne déjà',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'Un interrupteur à activer',
  'onboarding.watch.none': 'Pas de montre',
  'onboarding.watch.noneCaption': 'Ton téléphone dans la poche suffit',

  // ── Watch sync ───────────────────────────────────────────────────────────
  'onboarding.watchSync.title': 'Active la synchro avec Santé',
  'onboarding.watchSync.blurb': 'Un interrupteur dans l’app que tu utilises déjà.',
  'onboarding.watchSync.open': 'Ouvrir {app}',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Ouvre Garmin Connect et va dans Plus.',
  'onboarding.watchSync.garmin2': 'Touche Paramètres, puis Apple Santé.',
  'onboarding.watchSync.garmin3': 'Active les catégories que tu veux partager.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Ouvre Whoop et touche More.',
  'onboarding.watchSync.whoop2': 'Ouvre App Settings, puis Integrations.',
  'onboarding.watchSync.whoop3': 'Touche Apple Health et active-le.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Active les notifications',
  'onboarding.notify.blurb': 'Pour que ton plan puisse te prévenir quand il a besoin de toi.',
  'onboarding.notify.askNamed': '{name}, on avance ensemble',
  'onboarding.notify.ask': 'On avance ensemble',
  'onboarding.notify.askBlurb': 'Seulement les jours où ton plan a une séance.',
  'onboarding.notify.promise1': 'Un petit rappel les jours où ton plan a une séance',
  'onboarding.notify.promise2': 'Un mot quand ce que tu fais change',
  'onboarding.notify.promise3': 'Et de temps en temps une réduction - rien de plus.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'maintenant',
  'onboarding.notify.bannerBody':
    'Aujourd’hui, renforcement du pied - 7 minutes. Tes tibias te remercieront.',
  'onboarding.notify.turnOn': 'Activer les notifications',
  'onboarding.notify.opening': 'Ouverture…',
  'onboarding.notify.notNow': 'Pas maintenant',
  'onboarding.notify.declined': 'Pas de souci - tu pourras les activer plus tard dans Réglages.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Création de ton plan',
  'onboarding.building.blurb': 'Je glisse tout ce que tu m’as dit dans la première semaine.',
  'onboarding.building.line1': 'On fait connaissance',
  'onboarding.building.line3': 'Ton plan est prêt',
  'onboarding.building.cta': 'Commencer l’entraînement',
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  'onboarding.pattern.heel': 'C’est le schéma le plus courant qui soit. C’est aussi celui qui répond le plus vite.',
  'onboarding.pattern.foot': 'La voûte n’est pas faible en soi. Ce qui la soutient, si.',
  'onboarding.pattern.achilles':
    'La charge a augmenté plus vite que le tendon ne s’est adapté. Ça se travaille.',
  'onboarding.pattern.shin':
    'Le volume est allé plus vite que tes jambes. Le plan revient un peu en arrière, puis construit.',
  'onboarding.pattern.calf': 'Le mollet tire sur tout ce qui est en dessous. Assouplis-le et le reste suit.',
  'onboarding.pattern.none': 'Tu es là avant que ça fasse mal. C’est la façon la plus simple de s’y prendre.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Douleur au talon',
  'onboarding.reflection.painFoot': 'Douleur au pied',
  'onboarding.reflection.painAchilles': 'Douleur au tendon d’Achille',
  'onboarding.reflection.painShin': 'Douleur au tibia',
  'onboarding.reflection.painCalf': 'Douleur au mollet',
  'onboarding.reflection.volumeWeekly': '{band} par semaine',
  'onboarding.reflection.volumeMonthly': '{band} par mois',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.sendPlan.title': 'On t’envoie ton plan\npar e-mail ?',
  'onboarding.sendPlan.blurb': 'Facultatif. Quelques e-mails courts pendant les deux premières semaines, et tu peux les couper quand tu veux.',
  'onboarding.sendPlan.placeholder': 'toi@exemple.com',
  'onboarding.sendPlan.send': 'Envoyer',
  'onboarding.plan.title': 'Ton plan',
  'onboarding.plan.blurb': 'Construit à partir de tes réponses.',
  'onboarding.plan.wordmarkMomentum': 'Élan',
  'onboarding.plan.wordmarkFoundations': 'Fondations',
  'onboarding.plan.meta': {
    one: '{count} séance par semaine',
    other: '{count} séances par semaine',
  },
  'onboarding.plan.week': 'Semaine {n}',
  'onboarding.plan.weeks': 'Semaines {from}–{to}',
  'onboarding.plan.weeksOn': 'Semaines {from}+',
  'onboarding.plan.phaseSettle': 'apaiser l’irritation',
  'onboarding.plan.phaseBuild': 'construire la voûte',
  'onboarding.plan.phaseLoad': 'retour à la pleine charge',
  'onboarding.plan.reflectionBoth':
    '{pain}, et {volume}. Les deux premières semaines calment les choses avant toute charge.',
  'onboarding.plan.reflectionPain':
    '{pain}. Les deux premières semaines calment les choses avant toute charge.',
  'onboarding.plan.reflectionVolume':
    '{volume}. Les deux premières semaines posent une base avant toute charge.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Faisons un contrat, {name}',
  'onboarding.contract.blurb': 'Pas avec moi. Avec toi-même.',
  'onboarding.contract.hint': 'Signe ici',
  'onboarding.contract.stampTop': '★ Walkito ★',
  'onboarding.contract.stampText': 'Engagement',
  'onboarding.contract.stampLine1': 'Jour un',
  'onboarding.contract.stampLine2': 'Lancé',
  'onboarding.contract.noteNamed': '{name}, ta signature reste sur cet appareil.',
  'onboarding.contract.note': 'Ta signature reste sur cet appareil.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Bienvenue, {name}',
  'onboarding.social.welcome': 'Bienvenue à bord',
  'onboarding.social.crest': 'Quelques minutes par jour.\nSans salle, sans deviner.',
  'onboarding.testimonial1.before': 'Dis comment va ton pied, et',
  'onboarding.testimonial1.lead': 'la séance du jour s’adapte',
  'onboarding.testimonial1.after': ' en conséquence.',
  'onboarding.testimonial1.name': 'Chaque matin',
  'onboarding.testimonial2.before': 'Des exercices courts et guidés',
  'onboarding.testimonial2.lead': 'à la maison ou au travail',
  'onboarding.testimonial2.after': ' - un sol et un mur suffisent.',
  'onboarding.testimonial2.name': 'Chaque séance',
  'onboarding.testimonial3.before': 'Une réévaluation d’une minute',
  'onboarding.testimonial3.lead': 'montre ce qui a vraiment changé',
  'onboarding.testimonial3.after': ', en chiffres plutôt qu’en sensations.',
  'onboarding.testimonial3.name': 'Toutes les deux semaines',

  // ── Outlook ──────────────────────────────────────────────────────────────
  'onboarding.outlook.title': '{name}, voici où ça mène',
  'onboarding.outlook.blurb': 'Ce qui fait mal aujourd’hui, et ce que le plan fait pour ça.',
  'onboarding.outlook.blurbNone': 'Tes jambes aujourd’hui, et où le plan les emmène.',
  'onboarding.outlook.today': 'Aujourd’hui',
  'onboarding.outlook.month': 'Mois {n}',
  'onboarding.outlook.pain0': 'Sensible',
  'onboarding.outlook.pain1': 'S’apaise',
  'onboarding.outlook.pain2': 'Se détend',
  'onboarding.outlook.pain3': 'Plus calme',
  'onboarding.outlook.strength0': 'Départ',
  'onboarding.outlook.strength1': 'Se réveille',
  'onboarding.outlook.strength2': 'Progresse',
  'onboarding.outlook.strength3': 'Plus solide',
  'onboarding.outlook.footnote': 'Une illustration de la progression du plan, pas une prédiction. Chacun récupère à son rythme.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Tu as un code de parrainage ?',
  'onboarding.referral.blurb': 'Saisis-le pour avoir {percent} % de réduction sur l’abonnement annuel.',
  'onboarding.referral.applied': '{percent} % de réduction sur l’abonnement annuel appliqués.',
  'onboarding.referral.unlocked': 'Code accepté. Walkito Premium est activé.',
  'onboarding.referral.unknown': 'On ne connaît pas ce code. Vérifie-le et réessaie.',
  'onboarding.referral.own': 'Celui-là, c’est le tien. Envoie-le à quelqu’un d’autre.',
  'onboarding.referral.already': 'Tu as déjà utilisé un code.',
  'onboarding.referral.unavailable': 'Les invitations ne sont pas disponibles dans cette version.',
  'onboarding.referral.failed': 'Impossible de joindre le serveur. Réessaie dans un instant.',

  // ── The note at the end of onboarding ────────────────────────────────────
  // Draft - see the comment in en/onboarding.ts.
  'onboarding.note.title': 'Un mot de notre part',
  'onboarding.note.body1':
    'Salut, moi c’est Rahim. Mon ami et moi faisons Walkito, rien que nous deux. Beaucoup de gens ont mal au talon : des semelles, une troisième paire de chaussures - et ils boitent encore le matin. Les exercices qui aident sont bien connus. Personne ne te dit lesquels, ni combien. Alors c’est ce qu’on a fait.',
  'onboarding.note.body2':
    'Ça nous ferait vraiment plaisir que tu laisses un avis. Ça compte beaucoup pour nous. Merci d’être là.',
  'onboarding.note.signature': 'Rahim et Rahman',
  'onboarding.note.cta': 'Noter Walkito',
  'onboarding.note.later': 'Pas maintenant',
};
