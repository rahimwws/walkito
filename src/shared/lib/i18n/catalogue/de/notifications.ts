/**
 * Notifications, German.
 *
 * `du` throughout, as everywhere in the app. The same two rules as English
 * hold: nothing cheerful after pain (no exclamation mark, no praise such as
 * "super", "toll" or "weiter so" in the `flare` lines), and no streak count
 * ("Serie") outside `streak.*`.
 *
 * The gait lines say only that something changed against the person's own
 * walking: no "hinken", no "kompensieren", no "Verletzung", no "normal" or
 * "Durchschnitt", no comparison with anyone.
 *
 * German has `one` and `other` only. `{steps}` is already grouped for the
 * locale ("14.200") while `count` is the same number raw.
 *
 * `{block}` arrives in English: block names live in `@/entities/program` and
 * are not translated anywhere yet, so it is quoted rather than inflected.
 */

export const NOTIFICATIONS_DE = {
  // ── What kind of day it is ───────────────────────────────────────────────
  /** Android's name for the app's notification channel, shown in system settings. */
  'notifications.channelName': 'Erinnerungen',
  'notifications.kindStrength': 'Krafttraining',
  'notifications.kindMobility': 'Mobilitätstraining',
  'notifications.kindBalance': 'Balancetraining',
  'notifications.kindRecovery': 'Regeneration',
  'notifications.kindFoot': 'Training für den Fuß',

  // ── The morning nudge ────────────────────────────────────────────────────
  /** The morning reminder, in the words of the intention signed in onboarding. */
  'notifications.morningIntention': 'Wenn du aufwachst, mach vor dem Aufstehen deine Fußdehnung.',
  'notifications.sessionStrength': {
    one: 'Heute Fußkraft. {count} Minute.',
    other: 'Heute Fußkraft. {count} Minuten.',
  },
  'notifications.sessionDay': {
    one: 'Tag {day}. {kind}. {count} Minute.',
    other: 'Tag {day}. {kind}. {count} Minuten.',
  },
  'notifications.sessionShort': {
    one: 'Heute eine kurze Einheit - {count} Minute, im Sitzen.',
    other: 'Heute eine kurze Einheit - {count} Minuten, im Sitzen.',
  },
  'notifications.sessionBackTo': {
    one: 'Heute {count} Minute. Wieder ein Schritt zurück {backTo}.',
    other: 'Heute {count} Minuten. Wieder ein Schritt zurück {backTo}.',
  },
  'notifications.sessionCalves': {
    one: '{count} Minute. Heute sind deine Waden dran.',
    other: '{count} Minuten. Heute sind deine Waden dran.',
  },
  'notifications.sessionMobility': 'Heute Mobilität. Nichts Schweres.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  'notifications.maintenanceDay': {
    one: 'Erhaltungstag. {count} Minute.',
    other: 'Erhaltungstag. {count} Minuten.',
  },
  'notifications.maintenanceCheckpoint': 'Monatlicher Check. Schauen wir, dass nichts nachgelassen hat.',
  'notifications.maintenanceFourWeeks': 'Vier Wochen stabil. Genau darum geht es.',

  // ── The morning after a bad day ──────────────────────────────────────────
  'notifications.flareCheckIn': 'Gestern war hart. Mach nach dem Aufstehen deinen Check-in - tut es noch weh, bleibt die Einheit heute kurz und im Sitzen.',

  // ── A big day on their feet ──────────────────────────────────────────────
  'notifications.loadSteps': {
    one: 'Gestern {steps} Schritt - {percent}% mehr als sonst. Heute ist Regeneration dran.',
    other: 'Gestern {steps} Schritte - {percent}% mehr als sonst. Heute ist Regeneration dran.',
  },
  'notifications.loadBigDay': 'Das war ein langer Tag auf den Beinen. Der Plan hat sich angepasst.',
  'notifications.loadBackOff': 'Gestern war lang. Heute nimmt der Plan Tempo raus.',

  // ── The step check-in ────────────────────────────────────────────────────
  'notifications.stepsCheck': {
    one: 'Heute {steps} Schritt - ein langer Tag auf den Beinen. Wie geht’s der Ferse?',
    other: 'Heute {steps} Schritte - ein langer Tag auf den Beinen. Wie geht’s der Ferse?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  'notifications.gaitUneven': {
    one: 'Deine Schritte sind seit {count} Tag ungleichmäßig.',
    other: 'Deine Schritte sind seit {count} Tagen ungleichmäßig.',
  },
  'notifications.gaitChanged': 'Diese Woche hat sich etwas an deinem Gang verändert.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Zwei Wochen. Zeit zu sehen, was sich getan hat. 3 Tests, 4 Minuten.',
  'notifications.retestCheckpoint': 'Heute ist Testtag. Kein Training - nur drei Messungen.',
  'notifications.retestDay': 'Tag {day}. Schauen wir, was es bringt.',
  'notifications.retestFollowUp': 'Die Tests sind noch offen. Vier Minuten.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Heute beginnt eine neue Woche. Fokus: {block}.',
  'notifications.blockLoadUp': 'Diese Woche geht es um „{block}“.',
  'notifications.blockOpens': 'Neue Woche, derselbe Fuß. Fokus dieser Woche: {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'Der Schmerz ist diese Woche gestiegen, deshalb geht es heute eine Stufe zurück.',
  'notifications.planSpike': 'Gestern war viel los. Heute geht es leichter weiter.',
  'notifications.planHeavyDay': 'Gestern ein langer Tag auf den Beinen. Heute gibt es Regeneration.',
  'notifications.planReturn': 'Fünf Tage Pause. Heute geht es eine Stufe leichter weiter.',
  'notifications.planBackUp': 'Dein Fuß hat sich beruhigt - heute geht die Belastung wieder hoch.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'Wie war der Fuß heute?',
  'notifications.checkinOneTap': 'Einmal tippen vor dem Schlafen - wie war’s?',
  'notifications.checkinLog': 'Trag den Tag ein, dann weiß der Plan, was morgen dran ist.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // Both lines say what one tap keeps, never what is about to be lost.
  'notifications.streakKeep': {
    one: 'Einmal tippen, und deine Serie von {count} Tag läuft weiter.',
    other: 'Einmal tippen, und deine Serie von {count} Tagen läuft weiter.',
  },
  'notifications.streakTap': { one: '{count} Tag. Einmal tippen.', other: '{count} Tage. Einmal tippen.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'Tag {day} wartet noch auf dich, wann immer du willst.',
  'notifications.winbackDay10': 'Der Plan läuft nach Datum, nicht nach Anwesenheit. Heute ist Tag {day}.',
  'notifications.winbackDay30': 'Wir sind noch da, falls sich der Fuß wieder meldet.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  'notifications.offerWaitNamed': '{name}, bevor du gehst - {percent}% Rabatt im ersten Jahr',
  'notifications.offerWait': 'Bevor du gehst - {percent}% Rabatt im ersten Jahr',
  'notifications.offerWaitBody': 'Das Jahresabo wartet zu einem niedrigeren Preis. Tippe, um es anzusehen.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Dein 3-Monats-Pass endet in einer Woche',
  'notifications.expiryBody': 'Dein Fortschritt bleibt so oder so erhalten.',
};
