/**
 * French.
 *
 * The app addresses the user as `tu` throughout, the register a coach uses and
 * the one the English copy already has. Sentence case everywhere, a plain
 * hyphen where English has a dash, guillemets « » for quoted speech.
 *
 * French plurals: `one` covers 0 and 1, `other` everything from 2. The `many`
 * form is optional in this catalogue's type and is left out everywhere - in
 * French it is the whole-millions form, and no count in this app reaches a
 * million days.
 */
export const CORE_FR = {
  // ── Language picker ──────────────────────────────────────────────────────
  'language.title': 'Langue',
  'language.system': 'Système',
  'language.systemHint': 'Comme l’appareil - {language}',
  'language.note': 'Ce choix est gardé sur cet appareil.',
  'language.a11yLabel': 'Langue, {language}',
  'language.a11yHint': 'Change la langue de l’app',

  'error.title': 'Un souci est survenu',
  'error.body': 'Ton plan et tes progrès sont en sécurité. Réessaie.',
  'error.retry': 'Réessayer',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Réglages',
  'settings.terms': 'Conditions d’utilisation',
  'settings.termsHint': 'Le contrat d’abonnement',
  'settings.privacy': 'Politique de confidentialité',
  'settings.privacyHint': 'Ce que nous gardons, et où',
  'settings.unpublished': 'Pas encore publié',
  'settings.email.section': 'E-mail',
  'settings.email.address': 'Envoyé à {email}',
  'settings.email.none': 'Pas encore d’adresse e-mail. Se connecter en ajoute une.',
  'settings.email.unavailable': 'Les réglages e-mail n’ont pas pu se charger. Réessaie avec une connexion.',
  'settings.email.tips': 'Conseils et rappels',
  'settings.email.weekly': 'Résumé de la semaine',
  'settings.email.unsubscribeAll': 'Se désabonner de tout',
  'settings.email.unsubscribed': 'Tu ne recevras plus d’e-mails. Réactive un interrupteur pour recommencer.',
  'settings.write': 'Écrire à Rahim',
  'settings.writeHint': 'Une vraie personne lit chaque message',
  'settings.writeSubject': 'Walkito',
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  'settings.planSection': 'Ton plan',
  'settings.outcome': 'Ton objectif',
  'settings.outcome.painfree': 'Sans douleur',
  'settings.outcome.flat_feet': 'Des voûtes plus fortes',
  'settings.outcome.stronger': 'Des jambes plus fortes',
  'settings.outcome.injury_free': 'Des jambes solides',
  'settings.outcome.stable_ankles': 'Des chevilles stables',
  'settings.outcome.jump_higher': 'Sauter plus haut',
  'settings.outcome.race_ready': 'En forme pour la course',
  'settings.outcome.all_day': 'Debout toute la journée',
  'settings.outcome.comeback': 'Reprendre après une blessure',
  'settings.outcome.steady': 'Des pas assurés',
  'settings.daysPerWeek': 'Jours par semaine',
  'settings.minutesPerDay': 'Minutes par jour',
  'settings.whichFoot': 'Quel pied',
  'settings.footLeft': 'Gauche',
  'settings.footRight': 'Droit',
  'settings.footBoth': 'Les deux',
  'settings.whereItHurts': 'Où ça fait mal',
  'settings.whereItHurtsNone': 'Rien de marqué',
  'settings.sound.title': 'Sons de la séance',
  'settings.sound.tempo': 'Sons de tempo',
  'settings.sound.tempoHint': 'Un battement pour les répétitions lentes, pour garder le rythme sans regarder.',
  'settings.sound.voice': 'Décompte à voix haute',
  'settings.sound.voiceHint': 'Dit « monte, 2, 3, tiens, descends » au lieu des bips.',
  'settings.equipment': 'Ce que j’ai à la maison',
  'settings.equipment.step': 'Une marche',
  'settings.equipment.band': 'Élastique de résistance',
  'settings.equipment.towel': 'Serviette',
  'settings.equipment.pillow': 'Coussin',
  'settings.equipment.ball': 'Balle de massage',
  'settings.account.saveTitle': 'Garde tes progrès',
  'settings.account.saveBody': 'Connecte-toi avec Apple et ton plan, tes bilans et tes tests reviennent sur un nouveau téléphone ou après une réinstallation.',
  'settings.account.saveBodyGoogle': 'Connecte-toi avec Google et ton plan, tes bilans et tes tests reviennent sur un nouveau téléphone ou après une réinstallation.',
  'settings.account.signedIn': 'Connexion avec Apple active. Tes progrès sont enregistrés dans ton compte.',
  'settings.lastSync': 'Dernière synchro : {time}',
  'settings.lastSyncNever': 'Pas encore synchronisé',
  'settings.reminder': 'Heure du rappel',
  'settings.disclaimer': 'Walkito n’est pas un dispositif médical et ne diagnostique, ne traite, ne guérit ni ne prévient aucune affection. Si la douleur est vive, s’aggrave, ou s’accompagne de gonflement, d’engourdissement ou de fièvre, arrête et consulte un médecin.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'streak.title': { one: '{count} jour d’affilée', other: '{count} jours d’affilée' },
  'streak.milestoneBlurb': 'Chacun de ces jours a compté.',
  'streak.milestoneBigBlurb': 'Dix jours. C’est là qu’une habitude commence à tenir.',
  'streak.rule':
    'Un jour compte quand tu fais ton bilan, t’entraînes, termines une routine de la bibliothèque, ou quand le plan te donne un jour de repos.',
  'streak.total': { one: '{count} jour jusqu’ici.', other: '{count} jours jusqu’ici.' },
  'streak.dismiss': 'Compris',
  'streak.dayCount': { one: '{count} jour', other: '{count} jours' },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  'session.day': 'Jour {day}',
  'session.minutes': { one: '{count} min', other: '{count} min' },
  'session.moveCount': { one: '{count} exercice', other: '{count} exercices' },
  'session.secondsLeftA11y': {
    one: 'encore {count} seconde',
    other: 'encore {count} secondes',
  },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Invite un ami',
  'gift.blurb': 'Partage ton code. Un ami qui s’inscrit avec obtient {percent} % de réduction sur l’abonnement annuel.',
  'gift.unavailable': 'Les invitations ne sont pas disponibles dans cette version.',
  'gift.shareMessage':
    'Utilise mon code {code} dans Walkito pour avoir {percent} % de réduction sur l’abonnement annuel.',
  'gift.share': 'Partager le code',
  'gift.shared': 'Copié',
  'gift.copy': 'Copier plutôt',
  'gift.copied': 'Copié dans le presse-papiers',
  'gift.copyA11y': 'Copier le code {code}',
  'gift.dismiss': 'Peut-être plus tard',
  'gift.openA11y': 'Récupère ton cadeau',
  'gift.capsule': 'Cadeau',

  // ── Waits ──────────────────────────────────────────────────────────────────
  'time.hoursMinutes': '{hours} h {minutes} min',
  'time.minutes': '{count} min',
  'time.underMinute': '<1 min',

  // ── The next session ───────────────────────────────────────────────────────
  'nextSession.in': 'Prochaine séance dans {time}',
  'nextSession.on': 'Prochaine séance : {day}',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Commencer la séance',
  'card.dailyGoal': 'Objectif du jour',
  'card.getStarted': 'Commencer',
  'card.last7Days': '7 derniers jours',
  'band.excellent': 'Excellent',
  'band.strong': 'Solide',
  'band.steady': 'Régulier',
  'band.building': 'En progression',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  'purchase.unavailable': 'Cette formule n’est pas disponible pour le moment.',

  'quick.deleteTitle': '{name}, attends.',
  'quick.deleteBody': 'Je suis sur le point de supprimer l’app.\n\nCe qui m’a fait partir :\n\n',
  'quick.deleteSubject': 'Avant de supprimer Walkito',
  'quick.talkSubject': 'Quelque chose cloche dans Walkito',
  'quick.talkBody': 'Salut -\n\nCe qui se passe :\n\n',
  'quick.deleteSubtitle': 'Tu supprimes ? Dis-nous ce qui n’a pas marché.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Accueil',
  'tabs.progress': 'Progrès',


  // ── Account / sign-in errors ───────────────────────────────────────────────
  'auth.noServer': 'Cette version n’a pas de serveur de comptes. Utilise Continuer avec Apple.',
  'auth.missingFields': 'Saisis un e-mail et un mot de passe.',
  'auth.invalidCredentials': 'Cet e-mail et ce mot de passe ne correspondent pas.',
  'auth.notConfirmed':
    'Ce compte n’est pas encore confirmé. Confirme l’adresse e-mail, puis réessaie.',
  'auth.banned': 'Ce compte est désactivé.',
  'auth.providerDisabled':
    'La connexion par e-mail est désactivée pour cette app. Utilise Continuer avec Apple.',
  'auth.rateLimited': 'Trop de tentatives. Attends une minute et réessaie.',
  'auth.badEmail': 'Ça ne ressemble pas à une adresse e-mail.',
  'auth.noAccount': 'Aucun compte n’a été renvoyé.',
  'auth.generic': 'Ça n’est pas passé.',
  'auth.unreachable': 'Impossible de joindre le serveur.',

  // ── Maintenance and regression ───────────────────────────────────────────
  'maintenance.throughNamed': '{name}, tu as tout terminé.',
  'maintenance.through': 'Tu as tout terminé.',
  'maintenance.calfGain': '{opening} Ton mollet est passé ↗ de {before} à {after}.',
  'maintenance.relapse': 'Environ la moitié des gens perdent cet acquis en cinq ans.',
  'maintenance.staying': 'Deux séances par semaine, c’est comme ça qu’on reste dans l’autre moitié.',
  'maintenance.regression': 'Tes chiffres ont glissé. Tu veux refaire {block} ?',

  // ── Block names ──────────────────────────────────────────────────────────
  'block.settle': 'Apaiser',
  'block.strengthen': 'Renforcer',
  'block.load': 'Charger',
  'block.build': 'Construire',
  'block.control': 'Contrôler',
  'block.sustain': 'Maintenir',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Retour',
  'common.close': 'Fermer',
  'common.profile': 'Profil',
  'common.done': 'Terminé',
  'common.cancel': 'Annuler',
};
