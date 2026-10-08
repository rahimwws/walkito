/** progress strings, German. Filled per domain; see `../en/core.ts` for the rules. */

export const PROGRESS_DE = {
  // ── Range control ────────────────────────────────────────────────────────
  'progress.range7Days': '7 Tage',
  'progress.rangeMonth': '1 Monat',
  'progress.range3Months': '3 Monate',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // The preposition and its article travel with the noun - "in den letzten 7
  // Tagen" against "im letzten Monat" - so the whole phrase lives here and the
  // brief opens with it.
  'progress.window7Days': 'in den letzten 7 Tagen',
  'progress.windowMonth': 'im letzten Monat',
  'progress.window3Months': 'in den letzten 3 Monaten',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Punkte',
  'progress.scoreA11y': '{score} von 100',
  'progress.scoreTitle': 'Du machst das super!',
  'progress.scoreStreak': { one: '{count} Tag in Folge!', other: '{count} Tage in Folge!' },
  'progress.scoreNote': 'Weiter so - diese Woche geht es um „{goal}“.',
  'progress.scoreNoteNoGoal': 'Weiter so - der Plan passt sich unterwegs an.',

  // ── Performance card ─────────────────────────────────────────────────────
  'progress.performance': 'Leistung',
  'progress.performanceA11y': '{value} von {max}',
  'progress.performanceA11yBand': '{value} von {max}, {band}',
  'progress.bandVeryLow': 'Sehr niedrig',
  'progress.bandLow': 'Niedrig',
  'progress.bandMedium': 'Mittel',
  'progress.bandHigh': 'Hoch',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  // Short on purpose: the tiles clip to one line.
  'progress.currentStreak': 'Aktuelle Serie',
  'progress.longestStreak': 'Beste Serie',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Retest heute',
  'progress.todayMinutes': 'Heute · {minutes} Min.',
  'progress.retest': 'Retest',
  'progress.blockDivider': 'Block {block} · {name}',
  'progress.weekDivider': 'Woche {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Leicht',
  'progress.painSore': 'Gereizt',
  'progress.painSharp': 'Stechend',
  'progress.painLegend': 'Der Ring um einen Tag zeigt den Schmerz, den du an dem Tag eingetragen hast.',
  'progress.painLegendDismiss': 'Ausblenden',
  'progress.strengthTitle': 'Kraft und Balance',
  'progress.strengthEmpty': 'Dein erster Test legt diese Zahlen fest.',
  'progress.strengthSince': 'Dein erster Test im Vergleich zu deinem letzten.',
  'progress.strengthOnce': 'Aus deinem ersten Test. Der nächste zeigt die Veränderung.',
  'progress.calfChange': 'Fersenheben {from} → {to}',
  'progress.balanceChange': 'Balance {from} s → {to} s',
  'progress.archChange': 'Gewölbe halten {from} s → {to} s',
  'progress.calfOnce': 'Fersenheben: {value}',
  'progress.balanceOnce': 'Balance: {value} s',
  'progress.archOnce': 'Gewölbe halten: {value} s',
  'progress.painTitle': 'Morgenschmerz',
  'progress.painNow': '{value} / 10 diese Woche',
  'progress.painEmpty': 'Ein paar Morgen mit Check-in zeichnen die Linie.',
  'progress.painCaption': 'Auf und Ab von Tag zu Tag ist normal - achte auf die Linie.',
  'progress.goalsTitle': 'Ziele',
  'progress.goalsEmpty': 'Deine Ziele erscheinen nach deinem ersten Test.',
  'progress.goalReached': 'Erreicht',
  'progress.streakCaption': 'Ruhetage, schwere Tage und 2-Minuten-Tage zählen alle.',
  // ── The redesigned screen ────────────────────────────────────────────────
  'progress.avgWeek': 'Schnitt der letzten 7 Tage',
  'progress.avgMonth': 'Schnitt des letzten Monats',
  'progress.avgQuarter': 'Schnitt der letzten 3 Monate',
  'progress.painOutOf': '/10',
  'progress.deltaWeek': '{delta} zur Woche davor',
  'progress.deltaMonth': '{delta} zum Monat davor',
  'progress.deltaQuarter': '{delta} zu den 3 Monaten davor',
  'progress.deltaSame': 'Wie zuvor',
  'progress.startLine': 'Start {value}',
  'progress.tooltipRange': '{from} - {to}',
  'progress.painChartA11y': 'Diagramm Morgenschmerz, Schnitt {value} von 10',
  'progress.painBarA11y': '{date}: {value} von 10',
  'progress.painBarEmptyA11y': '{date}: kein Eintrag',
  'progress.painNoneInRange': 'In diesem Zeitraum gibt es noch keine Morgeneinträge.',
  'progress.painToGo': { one: 'Noch {count} Morgeneintrag, dann startet dein Diagramm.', other: 'Noch {count} Morgeneinträge, dann startet dein Diagramm.' },
  'progress.painToGoSteps': '{done} von {total} Einträgen',
  'progress.calfName': 'Fersenheben',
  'progress.balanceName': 'Balance',
  'progress.archName': 'Gewölbe halten',
  'progress.repsUnit': { one: 'Wdh.', other: 'Wdh.' },
  'progress.secondsUnit': 's',
  'progress.repsDelta': { one: '{delta} Wdh.', other: '{delta} Wdh.' },
  'progress.secondsDelta': '{delta} s',
  'progress.baseline': 'Ausgangswert',
  'progress.noChange': 'Unverändert',
  'progress.strengthNoTest': 'Noch nicht getestet',
  'progress.strengthDeltaCaption': 'Veränderungen zählen ab deinem ersten Test.',
  'progress.nextTest': 'Nächster Test am {date}',
  'progress.nextTestToday': 'Dein nächster Test ist heute',
  'progress.strengthRowA11y': '{name}: {value} {unit}, {change}',
  'progress.goalPercent': '{pct} %',
  'progress.goalA11y': '{goal}, {pct} % geschafft',
  'progress.consistencyTitle': 'Regelmäßigkeit',
  'progress.last4Weeks': 'Letzte 4 Wochen',
  'progress.heatDone': 'Trainiert',
  'progress.heatRest': 'Ruhetag',
  'progress.heatA11y': '{done} von {total} Tagen in den letzten 4 Wochen',
};

/**
 * The brief sentences, as ordered segments. See `../en/progress.ts` for what
 * this export is and why it sits outside `PROGRESS_DE`.
 *
 * German puts the participle last, so the trend sentences end on a frame
 * («gesunken.», «gestiegen.») after the figures rather than on the metric's
 * tail. `{window}` carries its own preposition and opens the sentence.
 */
export const PROGRESS_BRIEF_DE = {
  trendBetter: [
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'ist dein Morgenschmerz' },
    { k: 'metric', icon: 'down', text: 'von {from} auf {to}', tone: 'good' },
    { k: 'frame', text: 'gesunken.' },
  ],
  trendWorse: [
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'ist dein Morgenschmerz' },
    { k: 'metric', icon: 'up', text: 'von {from} auf {to}', tone: 'warn' },
    { k: 'frame', text: 'gestiegen.' },
  ],
  week: [
    { k: 'metric', icon: 'window', text: '{logged} von 7 Tagen' },
    { k: 'frame', text: 'diese Woche eingetragen.' },
  ],
  tooEarly: [
    { k: 'frame', text: 'erst' },
    { k: 'metric', icon: 'window', text: '{days}', tail: '.' },
    { k: 'frame', text: 'Für einen Trend ist es noch zu früh.' },
  ],
} as const;
