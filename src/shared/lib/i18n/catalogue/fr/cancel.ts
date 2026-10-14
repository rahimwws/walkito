/** Cancelling: Settings → Subscription and the flow behind "Manage subscription". Filled per domain; see
 * `../en/cancel.ts` for the rules (no prices, "Cancel anyway" means the store's own page, "Walkito Plus" stays as it is). */

export const CANCEL_FR = {
  'cancel.row.section': 'Abonnement',
  'cancel.row.manage': 'Gérer l’abonnement',
  'cancel.row.manageHint': 'Walkito Plus',
  'cancel.row.renewsAnnual': 'Abonnement annuel, renouvelé le {date}',
  'cancel.row.renewsMonthly': 'Abonnement mensuel, renouvelé le {date}',
  'cancel.row.renewsWeekly': 'Abonnement hebdomadaire, renouvelé le {date}',
  'cancel.row.trial': 'Essai gratuit jusqu’au {date}, puis ton abonnement se renouvelle',
  'cancel.row.ends': 'Le renouvellement est désactivé. Walkito Plus reste actif jusqu’au {date}.',
  'cancel.row.lifetime': 'À vie',
  'cancel.row.lifetimeHint': 'Walkito Plus est à toi pour de bon. Rien ne se renouvelle.',

  'cancel.title': 'Pourquoi tu pars ?',
  'cancel.sub': 'Choisis la réponse la plus proche. Ça nous aide à améliorer Walkito.',
  'cancel.reason.budget': 'Ça ne rentre pas dans mon budget',
  'cancel.reason.better': 'Mes pieds vont mieux',
  'cancel.reason.pause': 'Je fais une pause',
  'cancel.reason.notHelping': 'Ça n’aide pas, ou ça fait mal',
  'cancel.reason.noTime': 'Je n’ai pas le temps',
  'cancel.anyway': 'Résilier quand même',
  'cancel.anywayHintIos': 'Ouvre tes abonnements dans l’App Store',
  'cancel.anywayHintAndroid': 'Ouvre tes abonnements dans Google Play',

  'cancel.budget.title': 'Rendons ça plus doux pour ton budget',
  'cancel.budget.nextYearTitle': '{percent} % de réduction sur ton année suivante',
  'cancel.budget.nextYearBody':
    'Ton année suivante coûte {price} au lieu de {regular}. Ton plan et tout ce que tu as noté restent tels quels.',
  'cancel.budget.nextYearCta': 'Profiter de {percent} % de réduction',
  'cancel.budget.nextYearTerms':
    'Le prix réduit commence à ton prochain renouvellement et couvre une année. Ensuite, le prix habituel s’applique. Tu peux toujours résilier à tout moment dans les réglages de tes abonnements.',
  'cancel.budget.yearlyTitle': 'Passer à l’annuel',
  'cancel.budget.yearlyBody': 'Une année de Walkito Plus coûte {price}, soit environ {perMonth} par mois.',
  'cancel.budget.yearlyBodyPlain': 'Une année de Walkito Plus coûte {price}.',
  'cancel.budget.savingMonthly': 'C’est {percent} % de moins que payer mois par mois.',
  'cancel.budget.savingWeekly': 'C’est {percent} % de moins que payer semaine par semaine.',
  'cancel.budget.yearlyCta': 'Passer à l’annuel',
  'cancel.budget.yearlyTerms':
    'Le store t’indique le prix et sa date de début avant que tu confirmes. Ton plan et tout ce que tu as noté restent tels quels.',
  'cancel.budget.noneTitle': 'On comprend',
  'cancel.budget.none': 'Tout ce que tu as noté reste dans Walkito, et ton plan t’attend si tu reviens.',

  'cancel.better.title': 'Quelle bonne nouvelle',
  'cancel.better.body': 'Regarde le chemin parcouru.',
  'cancel.better.plain':
    'On est vraiment contents que tes pieds aillent mieux. Merci d’avoir fait une partie du chemin avec nous.',
  'cancel.better.pain': 'Douleur aux premiers pas, sur 10',
  'cancel.better.calf': 'Montées sur pointes',
  'cancel.better.arch': 'Maintien de la voûte, secondes',
  'cancel.better.balance': 'Équilibre, secondes',
  'cancel.better.firstWeek': 'Première semaine',
  'cancel.better.lastWeek': '7 derniers jours',
  'cancel.better.firstTest': 'Premier test',
  'cancel.better.latestTest': 'Dernier test',
  'cancel.better.changeA11y': '{label} : {from} avant, {to} maintenant',
  'cancel.better.reviewAsk': 'Si Walkito t’a aidé, quelques mots dans un avis aident quelqu’un d’autre à le trouver.',
  'cancel.better.review': 'Laisser un avis',

  'cancel.pause.title': 'Parfois, une pause fait du bien',
  'cancel.pause.freeMonthTitle': 'Un mois offert',
  'cancel.pause.freeMonthBody':
    'Garde ton plan, et ton prochain mois ne coûte rien. Ensuite, Walkito Plus se renouvelle comme aujourd’hui.',
  'cancel.pause.freeMonthCta': 'Profiter du mois offert',
  'cancel.pause.freeMonthTerms':
    'Le mois offert commence à ton prochain renouvellement. Tu peux toujours résilier à tout moment dans les réglages de tes abonnements.',
  'cancel.pause.playTitle': 'Mettre en pause jusqu’à 3 mois',
  'cancel.pause.playBody':
    'Google Play peut mettre ton abonnement en pause au lieu de l’arrêter. Rien n’est facturé pendant la pause, et ton plan t’attend quand il reprend.',
  'cancel.pause.playCta': 'Mettre en pause dans Google Play',
  'cancel.pause.none': 'Ton plan t’attend à ton retour, avec tout ce que tu as noté.',

  'cancel.notHelping.title': 'Désolés que ça ne se passe pas bien',
  'cancel.notHelping.body': 'Voici ce qu’on peut faire tout de suite.',
  'cancel.notHelping.lighter': 'Alléger mon plan',
  'cancel.notHelping.lighterCaption': 'Des séances plus courtes, ou moins nombreuses, dès aujourd’hui',
  'cancel.notHelping.lightest': 'Ton plan est déjà aussi léger que possible.',
  'cancel.notHelping.doctor': 'Quand consulter un médecin',
  'cancel.notHelping.doctorCaption': 'Une vérification rapide des signes qui méritent d’être montrés à un médecin',
  'cancel.notHelping.write': 'Nous écrire',
  'cancel.notHelping.writeCaption': 'Une vraie personne lit chaque message',

  'cancel.noTime.title': 'Faisons en sorte que ça rentre dans ta journée',
  'cancel.noTime.body': {
    one: 'Une séance peut ne durer que {count} minute, et ton rappel peut passer à l’heure qui t’arrange.',
    other: 'Une séance peut ne durer que {count} minutes, et ton rappel peut passer à l’heure qui t’arrange.',
  },
  'cancel.noTime.short': {
    one: 'Passer à des séances de {count} minute',
    other: 'Passer à des séances de {count} minutes',
  },
  'cancel.noTime.shortCaption': 'Chaque séance, dès aujourd’hui. Tu peux revenir en arrière dans les Réglages.',
  'cancel.noTime.already': 'Tes séances sont déjà aussi courtes que possible.',
  'cancel.noTime.reminder': 'Changer l’heure du rappel',
  'cancel.noTime.reminderCaption': 'Ton rappel du jour, quand ça t’arrange',

  'cancel.done.title': 'C’est fait',
  'cancel.done.nextYear': 'Ton année suivante de Walkito Plus est à {percent} % de réduction. Merci de rester.',
  'cancel.done.yearly': 'Tu passes à l’abonnement annuel. Merci de rester.',
  'cancel.done.freeMonth': 'Ton prochain mois est offert. Merci de rester.',
  'cancel.done.lighter': 'Ton plan est plus léger dès aujourd’hui. Tu peux le changer à tout moment dans les Réglages.',
  'cancel.done.short': {
    one: 'Tes séances durent {count} minute dès aujourd’hui. Tu peux le changer à tout moment dans les Réglages.',
    other: 'Tes séances durent {count} minutes dès aujourd’hui. Tu peux le changer à tout moment dans les Réglages.',
  },
  'cancel.done.pending': 'Le store est encore en train de confirmer. Ça apparaîtra ici dès que ce sera validé.',
  'cancel.done.back': 'Revenir à Walkito',
};
