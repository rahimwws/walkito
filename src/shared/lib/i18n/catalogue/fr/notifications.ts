/**
 * Notifications, French.
 *
 * `tu` throughout, as in `core.ts`. Gendered agreement is avoided rather than
 * guessed at: English's "sitting down" would be "assis/assise" and the app does
 * not know which, so the line says "sur une chaise" and stays true for everyone.
 *
 * The `many` plural form is the whole-millions one and is left out everywhere;
 * no count here reaches a million. French `one` covers 0 and 1. `{steps}` is
 * already grouped for the locale while `count` is the same number raw, which
 * is what selects the form.
 *
 * The flare line carries no exclamation mark and no praise; the gait lines
 * never say "boiter", "compenser", "blessure" or "normal"; the streak lines say
 * what a tap keeps, never what would be lost.
 *
 * `{block}` arrives in English: block names live in `@/entities/program` and
 * are not translated anywhere yet.
 */

export const NOTIFICATIONS_FR = {
  // ── What kind of day it is ───────────────────────────────────────────────
  /** Android's name for the app's notification channel, shown in system settings. */
  'notifications.channelName': 'Rappels',
  'notifications.kindStrength': 'Travail de force',
  'notifications.kindMobility': 'Travail de mobilité',
  'notifications.kindBalance': 'Travail d’équilibre',
  'notifications.kindRecovery': 'Travail de récupération',
  'notifications.kindFoot': 'Travail du pied',

  // ── The morning nudge ────────────────────────────────────────────────────
  /** The morning reminder, in the words of the intention signed in onboarding. */
  'notifications.morningIntention': 'Au réveil, avant de te lever, fais ton étirement du pied.',
  'notifications.sessionStrength': {
    one: 'Force du pied aujourd’hui. {count} minute.',
    other: 'Force du pied aujourd’hui. {count} minutes.',
  },
  'notifications.sessionDay': {
    one: 'Jour {day}. {kind}. {count} minute.',
    other: 'Jour {day}. {kind}. {count} minutes.',
  },
  'notifications.sessionShort': {
    one: 'Séance courte aujourd’hui - {count} minute, sur une chaise.',
    other: 'Séance courte aujourd’hui - {count} minutes, sur une chaise.',
  },
  'notifications.sessionBackTo': {
    one: '{count} minute aujourd’hui. Encore un pas {backTo}.',
    other: '{count} minutes aujourd’hui. Encore un pas {backTo}.',
  },
  'notifications.sessionCalves': {
    one: '{count} minute. Rendez-vous avec tes mollets.',
    other: '{count} minutes. Rendez-vous avec tes mollets.',
  },
  'notifications.sessionMobility': 'Mobilité aujourd’hui. Rien de lourd.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  'notifications.maintenanceDay': {
    one: 'Jour d’entretien. {count} minute.',
    other: 'Jour d’entretien. {count} minutes.',
  },
  'notifications.maintenanceCheckpoint': 'Point mensuel. On vérifie que rien n’a reculé.',
  'notifications.maintenanceFourWeeks': 'Quatre semaines stables. C’est tout l’intérêt.',

  // ── The morning after a bad day ──────────────────────────────────────────
  'notifications.flareCheckIn': 'Journée difficile hier. Fais ton bilan au lever - si ça va toujours mal, aujourd’hui reste court et assis.',

  // ── A big day on their feet ──────────────────────────────────────────────
  'notifications.loadSteps': {
    one: '{steps} pas hier - {percent} % de plus que d’habitude. Aujourd’hui, récupération.',
    other: '{steps} pas hier - {percent} % de plus que d’habitude. Aujourd’hui, récupération.',
  },
  'notifications.loadBigDay': 'Grosse journée debout. Le plan s’est ajusté.',
  'notifications.loadBackOff': 'Longue journée hier. Aujourd’hui, le plan lève le pied.',

  // ── The step check-in ────────────────────────────────────────────────────
  'notifications.stepsCheck': {
    one: '{steps} pas aujourd’hui - une longue journée debout. Comment va le talon ?',
    other: '{steps} pas aujourd’hui - une longue journée debout. Comment va le talon ?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  'notifications.gaitUneven': {
    one: 'Tes pas sont inégaux depuis {count} jour.',
    other: 'Tes pas sont inégaux depuis {count} jours.',
  },
  'notifications.gaitChanged': 'Quelque chose a changé dans ta façon de marcher cette semaine.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Deux semaines. On regarde ce qui a bougé. 3 tests, 4 minutes.',
  'notifications.retestCheckpoint': 'Point d’étape aujourd’hui. Pas d’entraînement - juste trois mesures.',
  'notifications.retestDay': 'Jour {day}. Voyons si ça marche.',
  'notifications.retestFollowUp': 'Les tests t’attendent encore. Quatre minutes.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Une nouvelle semaine commence. Objectif : {block}.',
  'notifications.blockLoadUp': 'Cette semaine travaille sur « {block} ».',
  'notifications.blockOpens': 'Nouvelle semaine, même pied. Celle-ci porte sur {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'La douleur a augmenté cette semaine, donc aujourd’hui descend d’un niveau.',
  'notifications.planSpike': 'Grosse journée hier. Aujourd’hui reprend plus léger.',
  'notifications.planHeavyDay': 'Longue journée debout hier. Aujourd’hui passe en récupération.',
  'notifications.planReturn': 'Cinq jours de pause. Aujourd’hui reprend un cran plus facile.',
  'notifications.planBackUp': 'Plus de gêne - aujourd’hui la charge remonte.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'Comment était le pied aujourd’hui ?',
  'notifications.checkinOneTap': 'Une touche avant de dormir - comment ça s’est passé ?',
  'notifications.checkinLog': 'Note ta journée et le plan saura quoi faire demain.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'notifications.streakKeep': {
    one: 'Une touche garde {count} jour d’affilée.',
    other: 'Une touche garde {count} jours d’affilée.',
  },
  'notifications.streakTap': { one: '{count} jour. Une touche.', other: '{count} jours. Une touche.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'Le jour {day} est toujours là quand tu veux.',
  'notifications.winbackDay10': 'Le plan suit des dates, pas ta présence. Aujourd’hui, c’est le jour {day}.',
  'notifications.winbackDay30': 'Toujours là si le pied se remet à parler.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  'notifications.offerWaitNamed': '{name}, avant de partir - {percent} % de réduction',
  'notifications.offerWait': 'Avant de partir - {percent} % de réduction',
  'notifications.offerWaitBody': 'L’abonnement annuel t’attend à prix réduit. Touche pour le voir.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Ton accès au programme se termine dans une semaine',
  'notifications.expiryBody': 'Tes progrès restent, quoi qu’il arrive.',
};
