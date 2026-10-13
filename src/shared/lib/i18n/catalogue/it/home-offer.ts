/** Home offer: the one-time trial, the comeback and the plans after the paywall's "Not now", and their pushes. Filled per domain; see
 * `../en/home-offer.ts` for the rules (no prices, `**…**` marks the heavier words, "Walkito Plus" stays as it is). */

export const HOME_OFFER_IT = {
  'homeOffer.trial.title': 'Aspetta, questa è un’offerta unica',
  'homeOffer.trial.bodyWeek': '**Walkito Plus per un anno**, e **la prima settimana è gratis**.',
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus per un anno**, con **{count} settimana gratis** per iniziare.',
    other: '**Walkito Plus per un anno**, con **{count} settimane gratis** per iniziare.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus per un anno**, con **{count} giorno gratis** per iniziare.',
    other: '**Walkito Plus per un anno**, con **{count} giorni gratis** per iniziare.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus per un anno**, con **{count} mese gratis** per iniziare.',
    other: '**Walkito Plus per un anno**, con **{count} mesi gratis** per iniziare.',
  },
  'homeOffer.trial.ctaDays': { one: 'Prova gratis per {count} giorno', other: 'Prova gratis per {count} giorni' },
  'homeOffer.trial.ctaMonths': { one: 'Prova gratis per {count} mese', other: 'Prova gratis per {count} mesi' },
  'homeOffer.trial.reminder': {
    one: 'Ti avviseremo {count} giorno prima della fine della prova.',
    other: 'Ti avviseremo {count} giorni prima della fine della prova.',
  },

  'homeOffer.comeback.title': 'Offerta limitata',
  'homeOffer.comeback.endsIn': 'Termina tra {time}',
  'homeOffer.comeback.bodyBoth': 'Tieni **Walkito Plus** come preferisci: **un anno a meno** o **per sempre**.',
  'homeOffer.comeback.bodyYear': '**Un anno di Walkito Plus** a un prezzo più basso, solo per poco.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus per sempre** con un solo pagamento, solo per poco.',
  'homeOffer.comeback.cta': 'Approfitta dell’offerta',

  'homeOffer.card.off': 'Sconto {percent}%',
  'homeOffer.card.onlyOnce': 'Solo per questa volta',
  'homeOffer.card.wasNow': 'Prima {was}, ora {now}',
  'homeOffer.card.perMonthFirstYear': 'Sono {price} al mese il primo anno',
  'homeOffer.card.perMonth': 'Sono {price} al mese',
  'homeOffer.card.lifetime': 'Un solo pagamento ed è tuo per sempre',

  'homeOffer.standard.title': 'Continua con Walkito Plus',
  'homeOffer.standard.body': 'Il tuo piano, tutte le sessioni e tutte le verifiche. **Scegli la formula che fa per te.**',
  'homeOffer.standard.cta': 'Continua',

  'homeOffer.plan.yearly': 'Annuale',
  'homeOffer.plan.monthly': 'Mensile',
  'homeOffer.plan.weekly': 'Settimanale',
  'homeOffer.plan.lifetime': 'A vita',
  'homeOffer.tab.year': 'Anno',
  'homeOffer.tab.month': 'Mese',
  'homeOffer.tab.week': 'Settimana',
  'homeOffer.tab.lifetime': 'A vita',

  'homeOffer.price.perYear': '{price}/anno',
  'homeOffer.price.perMonth': '{price}/mese',
  'homeOffer.price.perWeek': '{price}/sett.',
  'homeOffer.price.once': '{price} una volta',
  'homeOffer.price.firstYear': '{price} il primo anno',
  'homeOffer.price.lifetimeNote': 'Paghi una volta ed è tuo per sempre. Non si rinnova nulla.',

  'homeOffer.badge.freeDays': { one: '{count} giorno gratis', other: '{count} giorni gratis' },
  'homeOffer.badge.freeWeeks': { one: '{count} settimana gratis', other: '{count} settimane gratis' },
  'homeOffer.badge.freeMonths': { one: '{count} mese gratis', other: '{count} mesi gratis' },
  'homeOffer.badge.save': 'Risparmi il {percent}%',

  'homeOffer.terms.trialDays': {
    one: 'Gratis per {count} giorno, poi {price} all’anno. Oggi non paghi nulla.',
    other: 'Gratis per {count} giorni, poi {price} all’anno. Oggi non paghi nulla.',
  },
  'homeOffer.terms.trialMonths': {
    one: 'Gratis per {count} mese, poi {price} all’anno. Oggi non paghi nulla.',
    other: 'Gratis per {count} mesi, poi {price} all’anno. Oggi non paghi nulla.',
  },
  'homeOffer.terms.trialCancel': 'Disdici in Impostazioni prima della fine della prova e non paghi nulla.',
  'homeOffer.terms.trialCancelAndroid': 'Disdici in Google Play prima della fine della prova e non paghi nulla.',
  'homeOffer.terms.introYear': 'Abbonamento annuale: {introPrice} il primo anno, poi {price} all’anno.',
  'homeOffer.terms.monthly': 'Abbonamento mensile: {price} al mese.',
  'homeOffer.terms.lifetime': 'Un solo pagamento di {price}. Nessun rinnovo.',

  'homeOffer.push.lastChanceTitle': 'Niente paura, ecco un’ultima possibilità',
  'homeOffer.push.lastChanceBoth': 'Un anno di Walkito Plus a un prezzo più basso, o tienilo per sempre.',
  'homeOffer.push.lastChanceYear': 'Un anno di Walkito Plus a un prezzo più basso, solo per poco.',
  'homeOffer.push.lastChanceLifetime': 'Walkito Plus per sempre con un solo pagamento, solo per poco.',
  'homeOffer.push.endsSoonTitle': 'La tua offerta sta per finire',
  'homeOffer.push.endsSoonBody': 'Il tuo prezzo più basso per Walkito Plus sparisce tra poche ore.',
  'homeOffer.push.trialEndsTitle': {
    one: 'La tua prova gratuita finisce tra {count} giorno',
    other: 'La tua prova gratuita finisce tra {count} giorni',
  },
  'homeOffer.push.trialEndsBody':
    'Dopo, Walkito Plus si rinnova a {price} all’anno. Se non fa per te, disdici prima nelle impostazioni degli abbonamenti.',
};
