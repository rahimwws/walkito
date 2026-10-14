/** Cancelling: Settings → Subscription and the flow behind "Manage subscription". Filled per domain; see
 * `../en/cancel.ts` for the rules (no prices, "Cancel anyway" means the store's own page, "Walkito Plus" stays as it is). */

export const CANCEL_DE = {
  'cancel.row.section': 'Abo',
  'cancel.row.manage': 'Abo verwalten',
  'cancel.row.manageHint': 'Walkito Plus',
  'cancel.row.renewsAnnual': 'Jahresabo, verlängert sich am {date}',
  'cancel.row.renewsMonthly': 'Monatsabo, verlängert sich am {date}',
  'cancel.row.renewsWeekly': 'Wochenabo, verlängert sich am {date}',
  'cancel.row.trial': 'Gratis-Testphase bis {date}, danach verlängert sich dein Abo',
  'cancel.row.ends': 'Die Verlängerung ist aus. Walkito Plus läuft bis {date}.',
  'cancel.row.lifetime': 'Lebenslang',
  'cancel.row.lifetimeHint': 'Walkito Plus gehört dir für immer. Nichts verlängert sich.',

  'cancel.title': 'Warum möchtest du gehen?',
  'cancel.sub': 'Wähle die Antwort, die am besten passt. Das hilft uns, Walkito besser zu machen.',
  'cancel.reason.budget': 'Es passt nicht in mein Budget',
  'cancel.reason.better': 'Meinen Füßen geht es besser',
  'cancel.reason.pause': 'Ich mache eine Pause',
  'cancel.reason.notHelping': 'Es hilft nicht, oder es tut weh',
  'cancel.reason.noTime': 'Ich habe keine Zeit',
  'cancel.anyway': 'Trotzdem kündigen',
  'cancel.anywayHintIos': 'Öffnet deine Abos im App Store',
  'cancel.anywayHintAndroid': 'Öffnet deine Abos in Google Play',

  'cancel.budget.title': 'Machen wir es leichter für dein Budget',
  'cancel.budget.noneTitle': 'Wir verstehen das',
  'cancel.budget.none': 'Alles, was du eingetragen hast, bleibt in Walkito, und dein Plan wartet auf dich, wenn du zurückkommst.',

  'cancel.better.title': 'Wie schön, das zu hören',
  'cancel.better.body': 'So weit bist du gekommen.',
  'cancel.better.plain':
    'Wir freuen uns sehr, dass es deinen Füßen besser geht. Danke, dass du einen Teil des Weges mit uns gegangen bist.',
  'cancel.better.pain': 'Schmerz bei den ersten Schritten, 0 bis 10',
  'cancel.better.calf': 'Fersenheben',
  'cancel.better.arch': 'Gewölbe halten, Sekunden',
  'cancel.better.balance': 'Balance, Sekunden',
  'cancel.better.firstWeek': 'Erste Woche',
  'cancel.better.lastWeek': 'Letzte 7 Tage',
  'cancel.better.firstTest': 'Erster Test',
  'cancel.better.latestTest': 'Letzter Test',
  'cancel.better.changeA11y': '{label}: damals {from}, jetzt {to}',
  'cancel.better.reviewAsk': 'Wenn Walkito dir geholfen hat, helfen ein paar Worte in einer Bewertung anderen, es zu finden.',
  'cancel.better.review': 'Bewertung schreiben',

  'cancel.pause.title': 'Manchmal braucht man eine Pause',
  'cancel.pause.freeMonthTitle': 'Einen Monat gratis',
  'cancel.pause.freeMonthBody':
    'Behalte deinen Plan, und dein nächster Monat kostet nichts. Danach verlängert sich Walkito Plus wie bisher.',
  'cancel.pause.freeMonthCta': 'Gratismonat nehmen',
  'cancel.pause.freeMonthTerms':
    'Der Gratismonat beginnt mit deiner nächsten Verlängerung. Du kannst jederzeit in deinen Abo-Einstellungen kündigen.',
  'cancel.pause.playTitle': 'Bis zu 3 Monate pausieren',
  'cancel.pause.playBody':
    'Google Play kann dein Abo pausieren, statt es zu beenden. Während der Pause wird nichts berechnet, und dein Plan wartet auf dich, wenn es weitergeht.',
  'cancel.pause.playCta': 'In Google Play pausieren',
  'cancel.pause.none': 'Dein Plan wartet auf dich, wenn du zurück bist, mit allem, was du eingetragen hast.',

  'cancel.notHelping.title': 'Es tut uns leid, dass es sich nicht gut anfühlt',
  'cancel.notHelping.body': 'Das können wir jetzt gleich tun.',
  'cancel.notHelping.lighter': 'Meinen Plan leichter machen',
  'cancel.notHelping.lighterCaption': 'Kürzere oder weniger Einheiten, ab heute',
  'cancel.notHelping.lightest': 'Dein Plan ist schon so leicht, wie es geht.',
  'cancel.notHelping.doctor': 'Wann zum Arzt',
  'cancel.notHelping.doctorCaption': 'Ein kurzer Check der Anzeichen, die man ärztlich ansehen lassen sollte',
  'cancel.notHelping.write': 'Schreib uns',
  'cancel.notHelping.writeCaption': 'Jede Nachricht liest ein Mensch',

  'cancel.noTime.title': 'Lass es uns in deinen Tag einpassen',
  'cancel.noTime.body': {
    one: 'Einheiten können nur {count} Minute dauern, und deine Erinnerung kann auf eine Zeit wandern, die dir passt.',
    other: 'Einheiten können nur {count} Minuten dauern, und deine Erinnerung kann auf eine Zeit wandern, die dir passt.',
  },
  'cancel.noTime.short': {
    one: 'Zu Einheiten mit {count} Minute wechseln',
    other: 'Zu Einheiten mit {count} Minuten wechseln',
  },
  'cancel.noTime.shortCaption': 'Jede Einheit, ab heute. Zurückstellen kannst du es in den Einstellungen.',
  'cancel.noTime.already': 'Deine Einheiten sind schon so kurz, wie es geht.',
  'cancel.noTime.reminder': 'Erinnerungszeit ändern',
  'cancel.noTime.reminderCaption': 'Dein täglicher Anstoß, wann es dir passt',

  'cancel.done.title': 'Alles erledigt',
  'cancel.done.freeMonth': 'Dein nächster Monat ist gratis. Danke, dass du bleibst.',
  'cancel.done.lighter': 'Dein Plan ist ab heute leichter. Du kannst das jederzeit in den Einstellungen ändern.',
  'cancel.done.short': {
    one: 'Deine Einheiten dauern ab heute {count} Minute. Du kannst das jederzeit in den Einstellungen ändern.',
    other: 'Deine Einheiten dauern ab heute {count} Minuten. Du kannst das jederzeit in den Einstellungen ändern.',
  },
  'cancel.done.pending': 'Der Store bestätigt es noch. Es erscheint hier, sobald es durch ist.',
  'cancel.done.back': 'Zurück zu Walkito',
};
