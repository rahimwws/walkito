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
  'offer.comebackBadge': 'Offerta per chi torna',
  'offer.inviteBadge': 'Il tuo prezzo su invito',
  'offer.headline': 'Sblocca Walkito Premium',
  'offer.headlineInvite': 'Il tuo prezzo su invito per un anno di Walkito Premium',
  'offer.headlineComeback': 'La tua offerta per il ritorno: un anno di Walkito Premium',
  'offer.sub': 'Il tuo piano, e tutto quello che gli sta intorno.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'Annuale',
  'offer.annualPrice': '{price} all’anno',
  'offer.annualNote': '{perWeek} a settimana, addebito annuale',
  'offer.annualNoteSave': '{perWeek} a settimana · Risparmi il {percent}% rispetto al settimanale',
  'offer.weeklyTitle': 'Settimanale',
  'offer.weeklyPrice': '{price} a settimana',
  'offer.monthlyPrice': '{price} al mese',
  'offer.lifetimePrice': '{price} una tantum',
  'offer.weeklyNote': 'Addebito settimanale · Disdici quando vuoi',
  'offer.badgeBest': 'Più conveniente',
  'offer.badgeRecommended': 'Consigliato',
  'offer.badgeOff': 'Sconto del {percent}%',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} all’anno, si rinnova automaticamente. Disdici quando vuoi.',
  'offer.ctaWeekly': '{price} a settimana, si rinnova automaticamente. Disdici quando vuoi.',
  'offer.ctaMonthly': '{price} al mese, si rinnova automaticamente. Disdici quando vuoi.',
  'offer.ctaLifetime': '{price} una sola volta. Nessun abbonamento, non si rinnova nulla.',
  'offer.termsAnnual': 'Abbonamento annuale: {price} all’anno.',
  'offer.termsWeekly': 'Abbonamento settimanale: {price} a settimana.',
  'offer.termsMonthly': 'Abbonamento mensile: {price} al mese.',
  'offer.termsLifetime':
    'Accesso a vita: un unico pagamento di {price}, addebitato alla conferma dell’acquisto. Non si rinnova nulla.',
  'offer.termsRenewal': 'Si rinnova automaticamente. Puoi disdire quando vuoi in Impostazioni.',
  'offer.termsRenewalAndroid': 'Si rinnova automaticamente. Puoi disdire quando vuoi in Google Play.',
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
  'offer.chipRoutines': 'Routine per quando fa male e per la corsa',
  'offer.chipReminders': 'Promemoria',

  // ── Paywall: the plans (Walkito Plus) ───────────────────────────────────
  // See `../en/offer.ts`. The words in square brackets in the headline are
  // drawn in the Plus colour: put them round the word that carries it here.
  'offer.plans.brand': 'Walkito',
  'offer.plans.badge': 'Plus',
  'offer.plans.name': 'Walkito Plus',
  'offer.plans.headline': 'I tuoi piedi, [più forti] ogni giorno',
  'offer.plans.headlineComeback': 'Walkito Plus, ora [costa meno]',
  'offer.plans.mostPopular': 'Il più scelto',
  'offer.plans.yearly': 'Annuale',
  'offer.plans.monthly': 'Mensile',
  'offer.plans.lifetime': 'A vita',
  'offer.plans.perYear': 'all’anno',
  'offer.plans.perMonth': 'al mese',
  'offer.plans.perWeek': 'a settimana',
  'offer.plans.once': 'una volta sola',
  'offer.plans.firstYear': 'primo anno',
  'offer.plans.yearlyNote': '{perMonth} al mese, addebito annuale',
  'offer.plans.monthlyNote': 'Addebito mensile',
  'offer.plans.weeklyNote': 'Addebito settimanale',
  'offer.plans.lifetimeNote': 'Un solo pagamento, tuo per sempre',
  'offer.plans.upfrontNote': 'Poi {price} all’anno',
  'offer.plans.trialNote': '{period} gratis, poi {price} all’anno',
  'offer.plans.days': { one: '{count} giorno', other: '{count} giorni' },
  'offer.plans.weeks': { one: '{count} settimana', other: '{count} settimane' },
  'offer.plans.months': { one: '{count} mese', other: '{count} mesi' },
  'offer.plans.years': { one: '{count} anno', other: '{count} anni' },
  'offer.plans.showAll': 'Mostra tutti i piani',
  'offer.plans.tableTitle': 'Cosa ottieni',
  'offer.plans.rowPlan': 'Un piano quotidiano che si adatta a te',
  'offer.plans.rowSessions': 'Tutte le sessioni guidate, con video',
  'offer.plans.rowTests': 'Un test dei progressi ogni due settimane',
  'offer.plans.rowStreaks': 'Serie e figurine',
  'offer.plans.rowMorning': 'Lo stretching del mattino',
  'offer.plans.rowA11y': '{feature}. Incluso in Plus.',
  'offer.plans.ctaLifetime': 'Ottieni Walkito Plus',
  'offer.plans.ctaTrial': 'Inizia la prova gratuita',
  'offer.plans.renewsYearly': 'Si rinnova a {price} all’anno.',
  'offer.plans.renewsMonthly': 'Si rinnova a {price} al mese.',
  'offer.plans.renewsWeekly': 'Si rinnova a {price} a settimana.',
  'offer.plans.renewsUpfront': '{intro} il primo anno, poi {price} all’anno.',
  'offer.plans.renewsTrial': 'Nessun pagamento ora. {period} gratis, poi {price} all’anno.',
  'offer.plans.cancel': 'Disdici quando vuoi in Impostazioni.',
  'offer.plans.cancelAndroid': 'Disdici quando vuoi su Google Play.',
  'offer.plans.oneTime': 'Un solo pagamento, nessun abbonamento.',
  'offer.plans.skip': 'Non ora',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Il tuo abbonamento è terminato',
  'widgets.sessionLockedBody':
    'Tutto quello che hai registrato è ancora qui da consultare. Per tornare ad allenarti, riprendi da dove avevi lasciato.',
  'widgets.sessionLockedCta': 'Vedi le opzioni',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Il tuo obiettivo',
  'widgets.retestGoal.painfree': 'Sei qui per mattine con meno dolore al tallone. Questi numeri mostrano che il piede è sulla buona strada.',
  'widgets.retestGoal.race': 'Ti stai preparando per una gara. Polpacci più forti e un piede più stabile sono ciò che ti porta alla partenza.',
  'widgets.retestGoal.consistent': 'Hai detto che l’obiettivo era la costanza. Ecco a cosa porta esserci.',
  'widgets.retestGoal.stronger': 'Volevi diventare più forte. È qui che si vede per primo.',
  'widgets.retestGoal.injuryfree': 'Volevi evitare infortuni. Un piede che nei test risulta più forte regge meglio i carichi.',

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
  'widgets.sessionStoppedBlurb': 'Conta comunque come sessione di oggi. Domani si riparte con un livello più leggero.',

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
