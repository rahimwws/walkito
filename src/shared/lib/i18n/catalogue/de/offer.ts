/**
 * Offer, in German - the paywall and the session player.
 *
 * `du` throughout, lowercase, as is usual in German apps. Nothing here is a
 * price: every amount arrives as `{price}` or `{perWeek}`, already formatted
 * for the user's storefront - see the note in `../en/offer.ts`.
 *
 * Settings paths in the billing terms follow the names German iOS and Google
 * Play use ("Abos", "Zahlungen und Abos").
 *
 * German has `one` and `other` only.
 */
export const OFFER_DE = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  'offer.featurePlanTitle': 'Dein Plan, keine Vorlage',
  'offer.featurePlanBlurb': 'Aus deinen Antworten gebaut und neu gebaut, wenn sie sich ändern.',
  'offer.featureAdaptiveTitle': 'Einheiten, die sich anpassen',
  'offer.featureAdaptiveBlurb': 'Jede Einheit richtet sich danach, wie die letzte wirklich lief.',
  'offer.featureProgressTitle': 'Fortschritt, den du siehst',
  'offer.featureProgressBlurb': 'Sieh zu, wie deine Bereitschaft Woche für Woche steigt.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  'offer.comebackBadge': 'Rückkehrpreis',
  'offer.inviteBadge': 'Dein Einladungspreis',
  'offer.headline': 'Walkito Premium freischalten',
  'offer.headlineInvite': 'Dein Einladungspreis für ein Jahr Walkito Premium',
  'offer.headlineComeback': 'Dein Rückkehrpreis für ein Jahr Walkito Premium',
  'offer.sub': 'Dein Plan und alles drumherum.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Jährlich',
  'offer.annualPrice': '{price} pro Jahr',
  'offer.annualNote': '{perWeek} pro Woche, jährlich abgerechnet',
  'offer.annualNoteSave': '{perWeek} pro Woche · {percent}% günstiger als wöchentlich',
  'offer.weeklyTitle': 'Wöchentlich',
  'offer.weeklyPrice': '{price} pro Woche',
  'offer.weeklyNote': 'Wöchentlich abgerechnet · Jederzeit kündbar',
  'offer.badgeBest': 'Bestes Angebot',
  'offer.badgeOff': '{percent}% Rabatt',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} pro Jahr, verlängert sich automatisch. Jederzeit kündbar.',
  'offer.ctaWeekly': '{price} pro Woche, verlängert sich automatisch. Jederzeit kündbar.',
  'offer.termsIncluded':
    'Walkito Premium gibt dir vollen Zugang: deinen anpassbaren Plan, alle Einheiten und Routinen, Tests und Fortschrittsverlauf.',
  'offer.termsAnnual': 'Jahresabo: {price} pro Jahr.',
  'offer.termsWeekly': 'Wochenabo: {price} pro Woche.',
  'offer.termsRenewal':
    'Die Zahlung wird bei Bestätigung des Kaufs über deinen Apple Account abgerechnet. Dein Abo verlängert sich automatisch um denselben Zeitraum zum selben Preis, wenn du es nicht spätestens 24 Stunden vor Ende des aktuellen Zeitraums kündigst. Die Verlängerung wird innerhalb der 24 Stunden vor dem Ende abgerechnet. Verwalten oder kündigen kannst du unter Einstellungen → Apple Account → Abos.',
  'offer.termsRenewalAndroid':
    'Die Zahlung wird bei Bestätigung des Kaufs über dein Google Play-Konto abgerechnet. Dein Abo verlängert sich automatisch um denselben Zeitraum zum selben Preis, wenn du es nicht spätestens 24 Stunden vor Ende des aktuellen Zeitraums kündigst. Verwalten oder kündigen kannst du unter Google Play → Zahlungen und Abos → Abos.',
  'offer.linkTerms': 'Nutzungsbedingungen',
  'offer.linkPrivacy': 'Datenschutz',
  'offer.restore': 'Käufe wiederherstellen',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Dieser Plan ist gerade nicht verfügbar. Versuch den anderen.',
  'offer.storeUnreachable': 'Der Store ist gerade nicht erreichbar. Versuch es gleich noch mal.',
  'offer.nothingRestored': 'Kein früherer Kauf gefunden.',
  'offer.restoreFailed': 'Das hat nicht geklappt. Es wurde nichts abgebucht.',
  'offer.purchaseFailed': 'Das hat nicht geklappt. Es wurde nichts abgebucht.',
  'offer.purchaseNotAllowed': 'Käufe sind auf diesem Gerät ausgeschaltet.',
  'offer.alreadyOwned': 'Das hast du schon. Tippe auf „Käufe wiederherstellen“.',
  'offer.pending': 'Wartet auf Freigabe. Sobald sie da ist, bekommst du Zugang.',
  'offer.notUnlocked': 'Der Kauf ist durch, hat aber nichts freigeschaltet. Tippe auf „Käufe wiederherstellen“.',
  'offer.continue': 'Weiter',
  'offer.processing': 'Wird bearbeitet…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'Du bist dabei.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb': 'Dein Plan ist freigeschaltet und passt sich ab deiner nächsten Einheit an.',
  'offer.restoredTitle': 'Schön, dass du wieder da bist.',
  'offer.restoredBlurb': 'Dein Abo ist wieder aktiv. Alles ist da, wo du es gelassen hast.',
  'offer.start': 'Los geht’s',

  // ── Paywall: the two steps before it, after onboarding ──────────────────
  'offer.stepA11y': 'Schritt {step} von {total}',
  'offer.next': 'Weiter',
  'offer.introTitle': 'So startet dein Plan',
  'offer.introTitleNamed': '{name}, so startet dein Plan',
  // Under the title: the goal they picked in onboarding, quoted back as theirs.
  'offer.introWhy': '„{why}.“',
  'offer.introTodayWhen': 'Heute',
  'offer.introTodayTitle': { one: 'Ein Test von {count} Minute', other: 'Ein Test von {count} Minuten' },
  'offer.introTodayBody': 'Waden, Fußgewölbe und Gleichgewicht. Dein Plan startet bei diesen Werten.',
  'offer.introWeekWhen': 'Diese Woche',
  'offer.introWeekTitle': 'Erst mal zur Ruhe kommen',
  'offer.introWeekBody': {
    one: '{minutes} Min. am Tag, {count} Tag pro Woche. Krafttraining startet nächste Woche.',
    other: '{minutes} Min. am Tag, {count} Tage pro Woche. Krafttraining startet nächste Woche.',
  },
  'offer.introSundayWhen': 'Jeden Sonntag',
  'offer.introSundayTitle': 'Eine neue Woche, gebaut aus der letzten',
  'offer.introSundayBody': 'Leichter, wenn es schwer war, etwas mehr, wenn es leicht war.',
  'offer.introCheckTitle': 'Dein erster Fortschritts-Check',
  'offer.introCheckBody': 'Derselbe Test noch mal. Sieh, was sich verändert hat, dann kommt der nächste Schritt.',
  'offer.howTitle': 'Ein paar Minuten am Tag. So funktioniert es.',
  'offer.howCheckinTitle': 'Jeden Morgen einchecken',
  'offer.howCheckinBody': 'Zehn Sekunden dazu, wie sich deine Füße anfühlen. Danach richtet sich der Tag.',
  'offer.howSessionTitle': 'Die heutige Einheit machen',
  'offer.howSessionBody': '3 bis 10 Minuten. Schwerer wird es nur, wenn die letzte leicht war.',
  'offer.howTestTitle': 'Alle zwei Wochen testen',
  'offer.howTestBody': 'Waden, Fußgewölbe und Gleichgewicht, gemessen. Sieh zu, wie sich die Werte bewegen.',
  'offer.howQuote': '„Die Übungen, die helfen, sind bekannt. Nur sagt dir niemand, welche und wie viele. Genau das haben wir gebaut.“',
  'offer.howQuoteBy': 'Rahim, der Walkito mit seinem Freund Rahman macht',
  'offer.startTitle': 'Starte deinen Plan heute',
  'offer.startSub': 'Deine erste Woche steht. Sie beginnt mit einem kurzen Test.',
  'offer.chipWeekly': 'Dein Wochenplan',
  'offer.chipSessions': 'Kurze Einheiten',
  'offer.chipTests': 'Alle zwei Wochen ein Test',
  'offer.chipRoutines': 'Routinen für Schübe und Läufe',
  'offer.chipReminders': 'Erinnerungen',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Dein Abo ist abgelaufen',
  'widgets.sessionLockedBody':
    'Alles, was du eingetragen hast, kannst du weiter lesen. Um wieder Einheiten zu machen, mach da weiter, wo du aufgehört hast.',
  'widgets.sessionLockedCta': 'Optionen ansehen',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Dein Ziel',
  'widgets.retestGoal.painfree': 'Du bist wegen Morgen ohne Fersenschmerz hier. Diese Werte zeigen, wie dein Fuß dorthin kommt.',
  'widgets.retestGoal.race': 'Du trainierst auf einen Wettkampf hin. Eine stärkere Wade und ein stabilerer Fuß bringen dich an die Startlinie.',
  'widgets.retestGoal.consistent': 'Dein Ziel war Beständigkeit. Das ist es, was Dranbleiben ausmacht.',
  'widgets.retestGoal.stronger': 'Du wolltest stärker werden. Hier zeigt es sich zuerst.',
  'widgets.retestGoal.injuryfree': 'Du wolltest verletzungsfrei bleiben. Ein Fuß, der stärker testet, ist schwerer zu verletzen.',

  'widgets.retestGoal.flatfeet': 'Du bist wegen deiner Plattfüße hier. Am Halten des Gewölbes und am stabileren Gleichgewicht zeigt sich das Training.',
  'widgets.retestGoal.ankles': 'Du wolltest stabilere Knöchel. Beim Gleichgewicht zeigt sich das zuerst.',
  'widgets.retestGoal.jump': 'Du wolltest höher springen. Eine stärkere Wade ist die Feder dahinter.',
  'widgets.retestGoal.allday': 'Du wolltest gut durch den Tag auf den Beinen kommen. Genau die Muskeln, die dein Gewölbe stützen, trainierst du hier.',
  'widgets.retestGoal.comeback': 'Du kommst nach einer Verletzung zurück. Der Unterschied zwischen deinen Beinen ist der Wert, auf den du achten solltest.',
  'widgets.retestGoal.steady': 'Du wolltest sicher gehen. Gleichgewicht und ein starker Fuß fühlen sich genau so an.',
  // ── Session player: the counter line ─────────────────────────────────────
  'widgets.phaseUp': 'Hoch',
  'widgets.phaseHold': 'Halten',
  'widgets.phaseDown': 'Runter',
  'widgets.sideRight': 'Rechter Fuß',
  'widgets.sideLeft': 'Linker Fuß',

  'widgets.sessionRepLine': '{phase} · Wdh. {rep} von {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Wdh. {rep} von {reps}',
  'widgets.sessionRepSpoken': '{phase}, Wiederholung {rep} von {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, Wiederholung {rep} von {reps}',
  'widgets.sessionPositionShort': 'Übung {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Übung {index}/{total}',
  'widgets.sessionPositionLong': 'Übung {index} von {total}',
  'widgets.sessionPositionLongSided': '{side}. Übung {index} von {total}',
  'widgets.sessionDone': 'Fertig.',
  'widgets.sessionDoneSpoken': 'Fertig',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'Das Video hat nicht geladen. Die Anleitung gilt trotzdem.',
  'widgets.lockScreenHint': 'Sperr dein Handy - der Timer läuft weiter',
  'widgets.expandDemo': 'Vorführung vergrößern',
  'widgets.collapseDemo': 'Vorführung verkleinern',
  'widgets.sessionContinue': 'Weiter',
  'widgets.sessionFinish': 'Abschließen',
  'widgets.scrubberPrevious': 'Vorherige Übung',
  'widgets.scrubberNext': 'Nächste Übung',
  'widgets.scrubberPlay': 'Abspielen',
  'widgets.scrubberPause': 'Pause',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Gut gemacht.',
  'widgets.sessionStoppedTitle': 'Wir hören hier auf.',
  'widgets.sessionStoppedBlurb': 'Sie zählt trotzdem als heutige Einheit. Morgen geht es eine Stufe leichter weiter.',

  // ── Session player: "it hurts" ───────────────────────────────────────────
  'widgets.painButton': 'Tut weh',
  'widgets.painTitle': 'Wie stark, gerade jetzt?',
  'widgets.painCarryOn': 'Mach sanft weiter. Hör auf, wenn es stärker wird.',
  'widgets.painPick': 'Tippe auf eine Zahl, um zu sehen, wie es weitergeht.',
  'widgets.painLowHint': 'Leichtes Unbehagen ist bei dieser Arbeit in Ordnung. Die Einheit geht da weiter, wo du pausiert hast - mach einfach sanft weiter und tippe wieder aufs Pflaster, wenn es stärker wird.',
  'widgets.painHighHint': 'Das ist zu viel, um weiterzutrainieren. Wir beenden die Einheit hier - sie zählt trotzdem für heute - und der Plan für morgen wird eine Stufe leichter.',
  'widgets.painResume': 'Sanft weitermachen',
  'widgets.painEnd': 'Einheit beenden',
  'widgets.painCancel': 'Doch nicht',
  'widgets.painClose': 'Schließen',
  'widgets.sessionDoneStreak': { one: '{count} Tag in Folge', other: '{count} Tage in Folge' },
  'widgets.sessionDoneBlurb': {
    one: '{count} Übung geschafft. Wenig und oft bringt hier die Bewegung rein.',
    other: 'Alle {count} Übungen geschafft. Wenig und oft bringt hier die Bewegung rein.',
  },
};
