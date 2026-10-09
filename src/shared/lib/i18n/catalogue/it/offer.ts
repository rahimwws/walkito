/**
 * Offer, in Italian - the paywall and the session player.
 *
 * `tu` throughout. "Bentornato/a" is avoided in the restore celebration for
 * the same reason a coach avoids it: it forces a gender onto somebody the app
 * has never asked. The same goes for any adjective that would agree with the
 * reader.
 *
 * Nothing here is a price. Every amount arrives as `{price}` or `{perWeek}`,
 * already formatted for the user's storefront - see the note in `../en/offer.ts`.
 *
 * The `many` plural form is left out everywhere: in Italian it is the
 * whole-millions form, and no count on these screens reaches a million.
 */
export const OFFER_IT = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  'offer.featurePlanTitle': 'Il tuo piano, non un modello',
  'offer.featurePlanBlurb': 'Costruito sulle risposte che hai appena dato, e ricostruito quando cambiano.',
  'offer.featureAdaptiveTitle': 'Sessioni che si adattano',
  'offer.featureAdaptiveBlurb': 'Ogni allenamento tiene conto di come è andato davvero il precedente.',
  'offer.featureProgressTitle': 'Progressi che si vedono',
  'offer.featureProgressBlurb': 'Guarda la tua preparazione crescere settimana dopo settimana.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  'offer.comebackBadge': 'Prezzo di ritorno',
  'offer.inviteBadge': 'Il tuo prezzo su invito',
  'offer.headline': 'Sblocca Walkito Premium',
  'offer.headlineInvite': 'Il tuo prezzo su invito per un anno di Walkito Premium',
  'offer.headlineComeback': 'Il tuo prezzo di ritorno per un anno di Walkito Premium',
  'offer.sub': 'Il tuo piano, e tutto quello che gli sta intorno.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Annuale',
  'offer.annualPrice': '{price} all’anno',
  'offer.annualNote': '{perWeek} a settimana, addebito annuale',
  'offer.annualNoteSave': '{perWeek} a settimana · Risparmi il {percent}% rispetto al settimanale',
  'offer.weeklyTitle': 'Settimanale',
  'offer.weeklyPrice': '{price} a settimana',
  'offer.weeklyNote': 'Addebito settimanale · Disdici quando vuoi',
  'offer.badgeBest': 'Più conveniente',
  'offer.badgeOff': 'Sconto del {percent}%',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} all’anno, si rinnova automaticamente. Disdici quando vuoi.',
  'offer.ctaWeekly': '{price} a settimana, si rinnova automaticamente. Disdici quando vuoi.',
  'offer.termsIncluded':
    'Walkito Premium ti dà accesso completo: il tuo piano adattivo, tutte le sessioni e le routine, le verifiche e il monitoraggio dei progressi.',
  'offer.termsAnnual': 'Abbonamento annuale: {price} all’anno.',
  'offer.termsWeekly': 'Abbonamento settimanale: {price} a settimana.',
  'offer.termsRenewal':
    'Il pagamento viene addebitato sul tuo Account Apple alla conferma dell’acquisto. L’abbonamento si rinnova automaticamente per lo stesso periodo e allo stesso prezzo, a meno che non venga disdetto almeno 24 ore prima della fine del periodo in corso; il rinnovo viene addebitato nelle 24 ore precedenti alla scadenza. Gestiscilo o disdicilo in Impostazioni → Account Apple → Abbonamenti.',
  'offer.termsRenewalAndroid':
    'Il pagamento viene addebitato sul tuo account Google Play alla conferma dell’acquisto. L’abbonamento si rinnova automaticamente per lo stesso periodo e allo stesso prezzo, a meno che non venga disdetto almeno 24 ore prima della fine del periodo in corso. Gestiscilo o disdicilo in Google Play → Pagamenti e abbonamenti → Abbonamenti.',
  'offer.linkTerms': 'Termini di utilizzo',
  'offer.linkPrivacy': 'Informativa sulla privacy',
  'offer.restore': 'Ripristina acquisti',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Questo piano non è disponibile al momento. Prova l’altro.',
  'offer.storeUnreachable': 'Lo store non è raggiungibile al momento. Riprova tra poco.',
  'offer.nothingRestored': 'Nessun acquisto precedente trovato.',
  'offer.restoreFailed': 'Non è andato a buon fine. Non ti è stato addebitato nulla.',
  'offer.purchaseFailed': 'Non è andato a buon fine. Non ti è stato addebitato nulla.',
  'offer.purchaseNotAllowed': 'Gli acquisti sono disattivati su questo dispositivo.',
  'offer.alreadyOwned': 'Ce l’hai già. Tocca «Ripristina acquisti».',
  'offer.pending': 'In attesa di approvazione. Avrai accesso appena sarà confermato.',
  'offer.notUnlocked': 'Il pagamento è andato a buon fine, ma l’accesso non si è sbloccato. Tocca «Ripristina acquisti».',
  'offer.continue': 'Continua',
  'offer.processing': 'Elaborazione…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'Ci sei.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb':
    'Il tuo piano è sbloccato e inizierà ad adattarsi dalla prossima sessione.',
  'offer.restoredTitle': 'Che bello rivederti.',
  'offer.restoredBlurb': 'Il tuo abbonamento è di nuovo attivo. Tutto è dove l’avevi lasciato.',
  'offer.start': 'Inizia',

  'offer.stepA11y': 'Passaggio {step} di {total}',
  'offer.next': 'Avanti',
  'offer.introTitle': 'Ecco come inizia il tuo piano',
  'offer.introTitleNamed': '{name}, ecco come inizia il tuo piano',
  // Under the title: the goal they picked in onboarding, quoted back as theirs.
  'offer.introWhy': '«{why}».',
  'offer.introTodayWhen': 'Oggi',
  'offer.introTodayTitle': { one: 'Un test di {count} minuto', other: 'Un test di {count} minuti' },
  'offer.introTodayBody': 'Polpacci, arco ed equilibrio. Il tuo piano parte da questi numeri.',
  'offer.introWeekWhen': 'Questa settimana',
  'offer.introWeekTitle': 'Un inizio tranquillo',
  'offer.introWeekBody': {
    one: '{minutes} min al giorno, {count} giorno a settimana. La forza inizia la settimana prossima.',
    other: '{minutes} min al giorno, {count} giorni a settimana. La forza inizia la settimana prossima.',
  },
  'offer.introSundayWhen': 'Ogni domenica',
  'offer.introSundayTitle': 'Una nuova settimana, costruita sulla precedente',
  'offer.introSundayBody': 'Più leggera se è stata dura, un po’ di più se è stata facile.',
  'offer.introCheckTitle': 'La tua prima verifica dei progressi',
  'offer.introCheckBody': 'Lo stesso test di nuovo. Vedi cosa è cambiato, poi il passo successivo.',
  'offer.howTitle': 'Pochi minuti al giorno. Ecco come funziona.',
  'offer.howCheckinTitle': 'Fai il check-in ogni mattina',
  'offer.howCheckinBody': 'Dieci secondi su come stanno i piedi. La giornata si regola su questo.',
  'offer.howSessionTitle': 'Fai la sessione di oggi',
  'offer.howSessionBody': 'Da 3 a 10 minuti. Diventa più impegnativa solo quando la precedente è stata facile.',
  'offer.howTestTitle': 'Una verifica ogni due settimane',
  'offer.howTestBody': 'Polpacci, arco ed equilibrio, misurati. Guarda i numeri muoversi.',
  'offer.howQuote': '«Gli esercizi che aiutano sono ben noti. Nessuno ti dice quali, né quanti. Così l’abbiamo fatto noi.»',
  'offer.howQuoteBy': 'Rahim, che crea Walkito con il suo amico Rahman',
  'offer.startTitle': 'Inizia il tuo piano oggi',
  'offer.startSub': 'La tua prima settimana è pronta. Si comincia con un breve test.',
  'offer.chipWeekly': 'Il tuo piano settimanale',
  'offer.chipSessions': 'Sessioni brevi',
  'offer.chipTests': 'Un test ogni due settimane',
  'offer.chipRoutines': 'Routine per le riacutizzazioni e per la corsa',
  'offer.chipReminders': 'Promemoria',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Il tuo abbonamento è terminato',
  'widgets.sessionLockedBody':
    'Tutto quello che hai registrato è ancora qui da consultare. Per tornare ad allenarti, riprendi da dove avevi lasciato.',
  'widgets.sessionLockedCta': 'Vedi le opzioni',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Il tuo obiettivo',
  'widgets.retestGoal.painfree': 'Sei qui per mattine che non iniziano con il dolore al tallone. Questi numeri sono il piede che ci si avvicina.',
  'widgets.retestGoal.race': 'Ti stai preparando per una gara. Polpacci più forti e un piede più stabile sono ciò che ti porta alla partenza.',
  'widgets.retestGoal.consistent': 'Hai detto che l’obiettivo era la costanza. Ecco a cosa porta esserci.',
  'widgets.retestGoal.stronger': 'Volevi diventare più forte. È qui che si vede per primo.',
  'widgets.retestGoal.injuryfree': 'Volevi evitare infortuni. Un piede che risulta più forte è più difficile da ferire.',

  'widgets.retestGoal.flatfeet': 'Sei qui per i tuoi piedi piatti. La tenuta dell’arco e un equilibrio più stabile sono dove si vede il lavoro.',
  'widgets.retestGoal.ankles': 'Volevi caviglie più stabili. È nell’equilibrio che si vede per primo.',
  'widgets.retestGoal.jump': 'Volevi saltare più in alto. Un polpaccio forte è la molla dietro il salto.',
  'widgets.retestGoal.allday': 'Volevi reggere la giornata in piedi. Qui si allenano i muscoli che sostengono l’arco.',
  'widgets.retestGoal.comeback': 'Torni da un infortunio. La differenza tra le due gambe è il numero da seguire.',
  'widgets.retestGoal.steady': 'Volevi camminare con sicurezza. Equilibrio e un piede forte sono la sensazione che cerchi.',
  // ── Session player: the counter line ─────────────────────────────────────
  // One word per phase: read at two metres, changes every three seconds.
  'widgets.phaseUp': 'Su',
  'widgets.phaseHold': 'Tieni',
  'widgets.phaseDown': 'Giù',
  'widgets.sideRight': 'Piede destro',
  'widgets.sideLeft': 'Piede sinistro',

  'widgets.sessionRepLine': '{phase} · Rip. {rep} di {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Rip. {rep} di {reps}',
  'widgets.sessionRepSpoken': '{phase}, ripetizione {rep} di {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, ripetizione {rep} di {reps}',
  'widgets.sessionPositionShort': 'Esercizio {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Esercizio {index}/{total}',
  'widgets.sessionPositionLong': 'Esercizio {index} di {total}',
  'widgets.sessionPositionLongSided': '{side}. Esercizio {index} di {total}',
  'widgets.sessionDone': 'Fatto.',
  'widgets.sessionDoneSpoken': 'Fatto',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'Il video non si è caricato. Le istruzioni restano valide.',
  'widgets.lockScreenHint': 'Blocca il telefono: il timer continua',
  'widgets.expandDemo': 'Espandi la dimostrazione',
  'widgets.collapseDemo': 'Riduci la dimostrazione',
  'widgets.sessionContinue': 'Continua',
  'widgets.sessionFinish': 'Fine',
  'widgets.scrubberPrevious': 'Esercizio precedente',
  'widgets.scrubberNext': 'Esercizio successivo',
  'widgets.scrubberPlay': 'Riproduci',
  'widgets.scrubberPause': 'Pausa',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Ottimo lavoro.',
  'widgets.sessionStoppedTitle': 'Ci fermiamo qui.',
  'widgets.sessionStoppedBlurb': 'Conta comunque come sessione di oggi. Domani si riparte un passo indietro.',

  'widgets.painButton': 'Fa male',
  'widgets.painTitle': 'Quanto, in questo momento?',
  'widgets.painCarryOn': 'Continua con delicatezza. Fermati se aumenta.',
  'widgets.painPick': 'Tocca un numero per vedere cosa succede dopo.',
  'widgets.painLowHint': 'Un leggero fastidio è normale in questo lavoro. La sessione riprende da dove l’hai messa in pausa - vai piano, e tocca di nuovo il cerotto se aumenta.',
  'widgets.painHighHint': 'È troppo per continuare ad allenarsi. Chiudiamo la sessione qui - conta comunque per oggi - e domani il piano sarà un passo più leggero.',
  'widgets.painResume': 'Continua con delicatezza',
  'widgets.painEnd': 'Termina la sessione',
  'widgets.painCancel': 'Lascia stare',
  'widgets.painClose': 'Chiudi',
  'widgets.sessionDoneStreak': {
    one: '{count} giorno di fila',
    other: '{count} giorni di fila',
  },
  'widgets.sessionDoneBlurb': {
    one: '{count} esercizio fatto. Poco e spesso: è così che si va avanti.',
    other: 'Tutti i {count} esercizi fatti. Poco e spesso: è così che si va avanti.',
  },
};
