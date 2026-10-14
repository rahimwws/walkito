/** Cancelling: Settings → Subscription and the flow behind "Manage subscription". Filled per domain; see
 * `../en/cancel.ts` for the rules (no prices, "Cancel anyway" means the store's own page, "Walkito Plus" stays as it is). */

export const CANCEL_IT = {
  'cancel.row.section': 'Abbonamento',
  'cancel.row.manage': 'Gestisci abbonamento',
  'cancel.row.manageHint': 'Walkito Plus',
  'cancel.row.renewsAnnual': 'Abbonamento annuale, si rinnova il {date}',
  'cancel.row.renewsMonthly': 'Abbonamento mensile, si rinnova il {date}',
  'cancel.row.renewsWeekly': 'Abbonamento settimanale, si rinnova il {date}',
  'cancel.row.trial': 'Prova gratuita fino al {date}, poi il tuo abbonamento si rinnova',
  'cancel.row.ends': 'Il rinnovo è disattivato. Walkito Plus resta attivo fino al {date}.',
  'cancel.row.lifetime': 'A vita',
  'cancel.row.lifetimeHint': 'Walkito Plus è tuo per sempre. Non si rinnova nulla.',

  'cancel.title': 'Perché te ne vai?',
  'cancel.sub': 'Scegli la risposta più vicina. Ci aiuta a migliorare Walkito.',
  'cancel.reason.budget': 'Non rientra nel mio budget',
  'cancel.reason.better': 'I miei piedi stanno meglio',
  'cancel.reason.pause': 'Mi prendo una pausa',
  'cancel.reason.notHelping': 'Non mi aiuta, o fa male',
  'cancel.reason.noTime': 'Non ho tempo',
  'cancel.anyway': 'Annulla comunque',
  'cancel.anywayHintIos': 'Apre i tuoi abbonamenti nell’App Store',
  'cancel.anywayHintAndroid': 'Apre i tuoi abbonamenti in Google Play',

  'cancel.budget.title': 'Rendiamolo più leggero per il tuo budget',
  'cancel.budget.noneTitle': 'Capiamo',
  'cancel.budget.none': 'Tutto ciò che hai registrato resta in Walkito, e il tuo piano ti aspetta se torni.',

  'cancel.better.title': 'Che bella notizia',
  'cancel.better.body': 'Ecco quanta strada hai fatto.',
  'cancel.better.plain':
    'Siamo davvero contenti che i tuoi piedi stiano meglio. Grazie per aver fatto un pezzo di strada con noi.',
  'cancel.better.pain': 'Dolore nei primi passi, su 10',
  'cancel.better.calf': 'Sollevamenti sui talloni',
  'cancel.better.arch': 'Tenuta dell’arco, secondi',
  'cancel.better.balance': 'Equilibrio, secondi',
  'cancel.better.firstWeek': 'Prima settimana',
  'cancel.better.lastWeek': 'Ultimi 7 giorni',
  'cancel.better.firstTest': 'Primo test',
  'cancel.better.latestTest': 'Ultimo test',
  'cancel.better.changeA11y': '{label}: prima {from}, ora {to}',
  'cancel.better.reviewAsk': 'Se Walkito ti ha aiutato, due parole in una recensione aiutano qualcun altro a trovarlo.',
  'cancel.better.review': 'Lascia una recensione',

  'cancel.pause.title': 'A volte serve una pausa',
  'cancel.pause.freeMonthTitle': 'Un mese gratis',
  'cancel.pause.freeMonthBody':
    'Tieni il tuo piano, e il tuo prossimo mese non costa nulla. Dopo, Walkito Plus si rinnova come adesso.',
  'cancel.pause.freeMonthBodyYear':
    'Tieni il tuo piano, e quando finisce l’anno che hai pagato, il mese dopo non costa nulla. Dopo, Walkito Plus si rinnova come adesso.',
  'cancel.pause.freeMonthCta': 'Prendi il mese gratis',
  'cancel.pause.freeMonthTerms':
    'Il mese gratis parte dal tuo prossimo rinnovo. Puoi sempre annullare quando vuoi nelle impostazioni degli abbonamenti.',
  'cancel.pause.playTitle': 'Metti in pausa fino a 3 mesi',
  'cancel.pause.playBody':
    'Google Play può mettere in pausa il tuo abbonamento invece di chiuderlo. Durante la pausa non paghi nulla, e il tuo piano ti aspetta quando riparte.',
  'cancel.pause.playCta': 'Metti in pausa su Google Play',
  'cancel.pause.none': 'Il tuo piano ti aspetta quando torni, con tutto ciò che hai registrato.',

  'cancel.notHelping.title': 'Ci dispiace che non stia andando bene',
  'cancel.notHelping.body': 'Ecco cosa possiamo fare subito.',
  'cancel.notHelping.lighter': 'Rendi il mio piano più leggero',
  'cancel.notHelping.lighterCaption': 'Sessioni più brevi, o meno sessioni, da oggi',
  'cancel.notHelping.lightest': 'Il tuo piano è già il più leggero possibile.',
  'cancel.notHelping.doctor': 'Quando andare dal medico',
  'cancel.notHelping.doctorCaption': 'Un breve controllo dei segnali da far vedere a un medico',
  'cancel.notHelping.write': 'Scrivici',
  'cancel.notHelping.writeCaption': 'Ogni messaggio lo legge una persona',

  'cancel.noTime.title': 'Facciamolo stare nella tua giornata',
  'cancel.noTime.body': {
    one: 'Le sessioni possono durare solo {count} minuto, e il promemoria può spostarsi all’ora che ti va meglio.',
    other: 'Le sessioni possono durare solo {count} minuti, e il promemoria può spostarsi all’ora che ti va meglio.',
  },
  'cancel.noTime.short': {
    one: 'Passa a sessioni da {count} minuto',
    other: 'Passa a sessioni da {count} minuti',
  },
  'cancel.noTime.shortCaption': 'Ogni sessione, da oggi. Puoi tornare indietro nelle Impostazioni.',
  'cancel.noTime.already': 'Le tue sessioni sono già le più brevi possibili.',
  'cancel.noTime.reminder': 'Cambia l’ora del promemoria',
  'cancel.noTime.reminderCaption': 'Il tuo promemoria quotidiano, quando ti va meglio',

  'cancel.done.title': 'Fatto',
  'cancel.done.freeMonth': 'Il tuo prossimo mese è gratis. Grazie di restare.',
  'cancel.done.freeMonthYear': 'Quando finisce l’anno che hai pagato, il mese dopo è gratis. Grazie di restare.',
  'cancel.done.lighter': 'Il tuo piano è più leggero da oggi. Puoi cambiarlo quando vuoi nelle Impostazioni.',
  'cancel.done.short': {
    one: 'Le tue sessioni durano {count} minuto da oggi. Puoi cambiarlo quando vuoi nelle Impostazioni.',
    other: 'Le tue sessioni durano {count} minuti da oggi. Puoi cambiarlo quando vuoi nelle Impostazioni.',
  },
  'cancel.done.pending': 'Lo store lo sta ancora confermando. Comparirà qui appena andrà a buon fine.',
  'cancel.done.back': 'Torna a Walkito',
};
