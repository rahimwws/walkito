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
  'notifications.kindBalance': 'Gleichgewichtstraining',
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
  'notifications.flareCheckIn': 'Gestern war hart. Trag dich nach dem Aufstehen ein - ist es noch schlimm, bleibt heute kurz und im Sitzen.',

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
  'notifications.retestCheckpoint': 'Heute ist Check. Kein Training - nur drei Messungen.',
  'notifications.retestDay': 'Tag {day}. Schauen wir, ob es wirkt.',
  'notifications.retestFollowUp': 'Die Tests sind noch offen. Vier Minuten.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Heute beginnt eine neue Woche. Fokus: {block}.',
  'notifications.blockLoadUp': 'Diese Woche geht es um „{block}“.',
  'notifications.blockOpens': 'Neue Woche, derselbe Fuß. Diesmal: {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'Der Schmerz ist diese Woche gestiegen, deshalb geht es heute eine Stufe zurück.',
  'notifications.planSpike': 'Gestern war viel los. Heute geht es leichter weiter.',
  'notifications.planHeavyDay': 'Gestern ein langer Tag auf den Beinen. Heute gibt es Regeneration.',
  'notifications.planReturn': 'Fünf Tage Pause. Heute geht es eine Stufe leichter weiter.',
  'notifications.planBackUp': 'Kein Muskelkater mehr - heute geht die Belastung wieder hoch.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'Wie war der Fuß heute?',
  'notifications.checkinOneTap': 'Ein Tipp vor dem Schlafen - wie hat es sich angefühlt?',
  'notifications.checkinLog': 'Trag den Tag ein, dann weiß der Plan, was morgen dran ist.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // Both lines say what one tap keeps, never what is about to be lost.
  'notifications.streakKeep': {
    one: 'Ein Tipp hält {count} Tag am Laufen.',
    other: 'Ein Tipp hält {count} Tage am Laufen.',
  },
  'notifications.streakTap': { one: '{count} Tag. Ein Tipp.', other: '{count} Tage. Ein Tipp.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'Tag {day} wartet noch auf dich, wann immer du willst.',
  'notifications.winbackDay10': 'Der Plan läuft nach Datum, nicht nach Anwesenheit. Heute ist Tag {day}.',
  'notifications.winbackDay30': 'Wir sind noch da, falls sich der Fuß wieder meldet.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  'notifications.offerWaitNamed': '{name}, bevor du gehst - {percent}% Rabatt',
  'notifications.offerWait': 'Bevor du gehst - {percent}% Rabatt',
  'notifications.offerWaitBody': 'Das Jahresabo wartet zu einem niedrigeren Preis. Tipp, um es zu sehen.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Dein Zugang zum Programm endet in einer Woche',
  'notifications.expiryBody': 'Dein Fortschritt bleibt so oder so erhalten.',
};
