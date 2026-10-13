/** Home offer: the one-time trial, the comeback and the plans after the paywall's "Not now", and their pushes. Filled per domain; see
 * `../en/home-offer.ts` for the rules (no prices, `**…**` marks the heavier words, "Walkito Plus" stays as it is). */

export const HOME_OFFER_DE = {
  'homeOffer.trial.title': 'Moment, das ist ein einmaliges Angebot',
  'homeOffer.trial.bodyWeek': '**Walkito Plus für ein Jahr**, und **die erste Woche ist kostenlos**.',
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus für ein Jahr**, mit **{count} Woche gratis** zum Start.',
    other: '**Walkito Plus für ein Jahr**, mit **{count} Wochen gratis** zum Start.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus für ein Jahr**, mit **{count} Tag gratis** zum Start.',
    other: '**Walkito Plus für ein Jahr**, mit **{count} Tagen gratis** zum Start.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus für ein Jahr**, mit **{count} Monat gratis** zum Start.',
    other: '**Walkito Plus für ein Jahr**, mit **{count} Monaten gratis** zum Start.',
  },
  'homeOffer.trial.ctaDays': { one: '{count} Tag kostenlos testen', other: '{count} Tage kostenlos testen' },
  'homeOffer.trial.ctaMonths': { one: '{count} Monat kostenlos testen', other: '{count} Monate kostenlos testen' },
  'homeOffer.trial.reminder': {
    one: 'Wir erinnern dich {count} Tag vor Ende des Tests.',
    other: 'Wir erinnern dich {count} Tage vor Ende des Tests.',
  },

  'homeOffer.comeback.title': 'Begrenztes Angebot',
  'homeOffer.comeback.endsIn': 'Endet in {time}',
  'homeOffer.comeback.bodyBoth': 'Behalte **Walkito Plus**, wie es dir passt: **ein Jahr günstiger** oder **für immer**.',
  'homeOffer.comeback.bodyYear': '**Ein Jahr Walkito Plus** zum niedrigeren Preis, nur für kurze Zeit.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus für immer** mit einer einzigen Zahlung, nur für kurze Zeit.',
  'homeOffer.comeback.cta': 'Angebot sichern',

  'homeOffer.card.off': '{percent}% Rabatt',
  'homeOffer.card.onlyOnce': 'Nur dieses eine Mal',
  'homeOffer.card.wasNow': 'Vorher {was}, jetzt {now}',
  'homeOffer.card.perMonthFirstYear': 'Das sind {price} im Monat im ersten Jahr',
  'homeOffer.card.perMonth': 'Das sind {price} im Monat',
  'homeOffer.card.lifetime': 'Eine Zahlung, und es gehört dir für immer',

  'homeOffer.standard.title': 'Mach weiter mit Walkito Plus',
  'homeOffer.standard.body': 'Dein Plan, alle Einheiten und alle Tests. **Wähl, was zu dir passt.**',
  'homeOffer.standard.cta': 'Weiter',

  'homeOffer.plan.yearly': 'Jährlich',
  'homeOffer.plan.monthly': 'Monatlich',
  'homeOffer.plan.weekly': 'Wöchentlich',
  'homeOffer.plan.lifetime': 'Lebenslang',
  'homeOffer.tab.year': 'Jahr',
  'homeOffer.tab.month': 'Monat',
  'homeOffer.tab.week': 'Woche',
  'homeOffer.tab.lifetime': 'Lebenslang',

  'homeOffer.price.perYear': '{price}/Jahr',
  'homeOffer.price.perMonth': '{price}/Monat',
  'homeOffer.price.perWeek': '{price}/Woche',
  'homeOffer.price.once': '{price} einmalig',
  'homeOffer.price.firstYear': '{price} im ersten Jahr',
  'homeOffer.price.lifetimeNote': 'Einmal zahlen und für immer behalten. Nichts verlängert sich.',

  'homeOffer.badge.freeDays': { one: '{count} Tag gratis', other: '{count} Tage gratis' },
  'homeOffer.badge.freeWeeks': { one: '{count} Woche gratis', other: '{count} Wochen gratis' },
  'homeOffer.badge.freeMonths': { one: '{count} Monat gratis', other: '{count} Monate gratis' },
  'homeOffer.badge.save': 'Spare {percent}%',

  'homeOffer.terms.trialDays': {
    one: '{count} Tag kostenlos, danach {price} pro Jahr. Heute wird nichts abgebucht.',
    other: '{count} Tage kostenlos, danach {price} pro Jahr. Heute wird nichts abgebucht.',
  },
  'homeOffer.terms.trialMonths': {
    one: '{count} Monat kostenlos, danach {price} pro Jahr. Heute wird nichts abgebucht.',
    other: '{count} Monate kostenlos, danach {price} pro Jahr. Heute wird nichts abgebucht.',
  },
  'homeOffer.terms.trialCancel': 'Kündigst du vor Ende des Tests in den Einstellungen, zahlst du nichts.',
  'homeOffer.terms.trialCancelAndroid': 'Kündigst du vor Ende des Tests in Google Play, zahlst du nichts.',
  'homeOffer.terms.introYear': 'Jahresabo: {introPrice} im ersten Jahr, danach {price} pro Jahr.',
  'homeOffer.terms.monthly': 'Monatsabo: {price} pro Monat.',
  'homeOffer.terms.lifetime': 'Eine Zahlung von {price}. Nichts verlängert sich.',

  'homeOffer.push.lastChanceTitle': 'Keine Sorge, hier ist eine letzte Chance',
  'homeOffer.push.lastChanceBoth': 'Ein Jahr Walkito Plus zum niedrigeren Preis, oder behalte es für immer.',
  'homeOffer.push.lastChanceYear': 'Ein Jahr Walkito Plus zum niedrigeren Preis, nur für kurze Zeit.',
  'homeOffer.push.lastChanceLifetime': 'Walkito Plus für immer mit einer einzigen Zahlung, nur für kurze Zeit.',
  'homeOffer.push.endsSoonTitle': 'Dein Angebot endet bald',
  'homeOffer.push.endsSoonBody': 'Dein niedrigerer Preis für Walkito Plus ist in ein paar Stunden weg.',
  'homeOffer.push.trialEndsTitle': {
    one: 'Dein kostenloser Test endet in {count} Tag',
    other: 'Dein kostenloser Test endet in {count} Tagen',
  },
  'homeOffer.push.trialEndsBody':
    'Danach verlängert sich Walkito Plus für {price} pro Jahr. Wenn es nichts für dich ist, kündige vorher in deinen Abo-Einstellungen.',
};
