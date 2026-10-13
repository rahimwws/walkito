/** Home offer: the one-time trial, the comeback and the plans after the paywall's "Not now", and their pushes. Filled per domain; see
 * `../en/home-offer.ts` for the rules (no prices, `**…**` marks the heavier words, "Walkito Plus" stays as it is). */

export const HOME_OFFER_FR = {
  'homeOffer.trial.title': 'Attends, c’est une offre unique',
  'homeOffer.trial.bodyWeek': '**Walkito Plus pendant un an**, et **la première semaine est offerte**.',
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus pendant un an**, avec **{count} semaine offerte** pour commencer.',
    other: '**Walkito Plus pendant un an**, avec **{count} semaines offertes** pour commencer.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus pendant un an**, avec **{count} jour offert** pour commencer.',
    other: '**Walkito Plus pendant un an**, avec **{count} jours offerts** pour commencer.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus pendant un an**, avec **{count} mois offert** pour commencer.',
    other: '**Walkito Plus pendant un an**, avec **{count} mois offerts** pour commencer.',
  },
  'homeOffer.trial.ctaDays': {
    one: 'Essayer gratuitement {count} jour',
    other: 'Essayer gratuitement {count} jours',
  },
  'homeOffer.trial.ctaMonths': {
    one: 'Essayer gratuitement {count} mois',
    other: 'Essayer gratuitement {count} mois',
  },
  'homeOffer.trial.reminder': {
    one: 'On te le rappellera {count} jour avant la fin de l’essai.',
    other: 'On te le rappellera {count} jours avant la fin de l’essai.',
  },

  'homeOffer.comeback.title': 'Offre limitée',
  'homeOffer.comeback.endsIn': 'Se termine dans {time}',
  'homeOffer.comeback.bodyBoth': 'Garde **Walkito Plus** comme tu veux : **un an moins cher** ou **pour toujours**.',
  'homeOffer.comeback.bodyYear': '**Un an de Walkito Plus** à prix réduit, pour peu de temps.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus pour toujours** en un seul paiement, pour peu de temps.',
  'homeOffer.comeback.cta': 'Profiter de l’offre',

  'homeOffer.card.off': '-{percent} %',
  'homeOffer.card.onlyOnce': 'Cette fois seulement',
  'homeOffer.card.wasNow': 'Avant {was}, maintenant {now}',
  'homeOffer.card.perMonthFirstYear': 'Soit {price} par mois la première année',
  'homeOffer.card.perMonth': 'Soit {price} par mois',
  'homeOffer.card.lifetime': 'Un seul paiement, à toi pour toujours',

  'homeOffer.standard.title': 'Continue avec Walkito Plus',
  'homeOffer.standard.body': 'Ton plan, toutes les séances et tous les retests. **Choisis la formule qui te convient.**',
  'homeOffer.standard.cta': 'Continuer',

  'homeOffer.plan.yearly': 'Annuel',
  'homeOffer.plan.monthly': 'Mensuel',
  'homeOffer.plan.weekly': 'Hebdomadaire',
  'homeOffer.plan.lifetime': 'À vie',
  'homeOffer.tab.year': 'Année',
  'homeOffer.tab.month': 'Mois',
  'homeOffer.tab.week': 'Semaine',
  'homeOffer.tab.lifetime': 'À vie',

  'homeOffer.price.perYear': '{price}/an',
  'homeOffer.price.perMonth': '{price}/mois',
  'homeOffer.price.perWeek': '{price}/sem.',
  'homeOffer.price.once': '{price} une fois',
  'homeOffer.price.firstYear': '{price} la première année',
  'homeOffer.price.lifetimeNote': 'Tu paies une fois et c’est à toi pour toujours. Rien ne se renouvelle.',

  'homeOffer.badge.freeDays': { one: '{count} jour offert', other: '{count} jours offerts' },
  'homeOffer.badge.freeWeeks': { one: '{count} semaine offerte', other: '{count} semaines offertes' },
  'homeOffer.badge.freeMonths': { one: '{count} mois offert', other: '{count} mois offerts' },
  'homeOffer.badge.save': 'Économise {percent} %',

  'homeOffer.terms.trialDays': {
    one: 'Gratuit pendant {count} jour, puis {price} par an. Rien n’est débité aujourd’hui.',
    other: 'Gratuit pendant {count} jours, puis {price} par an. Rien n’est débité aujourd’hui.',
  },
  'homeOffer.terms.trialMonths': {
    one: 'Gratuit pendant {count} mois, puis {price} par an. Rien n’est débité aujourd’hui.',
    other: 'Gratuit pendant {count} mois, puis {price} par an. Rien n’est débité aujourd’hui.',
  },
  'homeOffer.terms.trialCancel': 'Annule dans Réglages avant la fin de l’essai et tu ne paies rien.',
  'homeOffer.terms.trialCancelAndroid': 'Annule dans Google Play avant la fin de l’essai et tu ne paies rien.',
  'homeOffer.terms.introYear': 'Abonnement annuel : {introPrice} la première année, puis {price} par an.',
  'homeOffer.terms.monthly': 'Abonnement mensuel : {price} par mois.',
  'homeOffer.terms.lifetime': 'Un seul paiement de {price}. Rien ne se renouvelle.',

  'homeOffer.push.lastChanceTitle': 'Pas de panique, voici une dernière chance',
  'homeOffer.push.lastChanceBoth': 'Un an de Walkito Plus à prix réduit, ou garde-le pour toujours.',
  'homeOffer.push.lastChanceYear': 'Un an de Walkito Plus à prix réduit, pour peu de temps.',
  'homeOffer.push.lastChanceLifetime': 'Walkito Plus pour toujours en un seul paiement, pour peu de temps.',
  'homeOffer.push.endsSoonTitle': 'Ton offre se termine bientôt',
  'homeOffer.push.endsSoonBody': 'Ton prix réduit sur Walkito Plus disparaît dans quelques heures.',
  'homeOffer.push.trialEndsTitle': {
    one: 'Ton essai gratuit se termine dans {count} jour',
    other: 'Ton essai gratuit se termine dans {count} jours',
  },
  'homeOffer.push.trialEndsBody':
    'Ensuite, Walkito Plus se renouvelle à {price} par an. Si ça ne te convient pas, annule avant dans les réglages de tes abonnements.',
};
