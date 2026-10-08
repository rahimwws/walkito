/** progress strings, Italian. Filled per domain; see `../en/core.ts` for the rules. */

export const PROGRESS_IT = {
  // ── Range control ────────────────────────────────────────────────────────
  'progress.range7Days': '7 giorni',
  'progress.rangeMonth': '1 mese',
  'progress.range3Months': '3 mesi',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // Italian fuses the preposition with the article («negli ultimi», «nell'ultimo»),
  // and the article agrees with the noun, so the finished phrase lives here,
  // preposition included, and the brief contributes nothing in front of it.
  'progress.window7Days': 'negli ultimi 7 giorni',
  'progress.windowMonth': 'nell’ultimo mese',
  'progress.window3Months': 'negli ultimi 3 mesi',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Punteggio',
  'progress.scoreA11y': '{score} su 100',
  'progress.scoreTitle': 'Stai andando alla grande!',
  'progress.scoreStreak': { one: '{count} giorno di fila!', other: '{count} giorni di fila!' },
  'progress.scoreNote': 'Continua così - questa settimana lavora su «{goal}».',
  'progress.scoreNoteNoGoal': 'Continua così - il piano si adatta strada facendo.',

  // ── Performance card ─────────────────────────────────────────────────────
  'progress.performance': 'Prestazione',
  'progress.performanceA11y': '{value} su {max}',
  'progress.performanceA11yBand': '{value} su {max}, {band}',
  // Feminine, agreeing with «prestazione».
  'progress.bandVeryLow': 'Molto bassa',
  'progress.bandLow': 'Bassa',
  'progress.bandMedium': 'Media',
  'progress.bandHigh': 'Alta',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  'progress.currentStreak': 'Serie attuale',
  'progress.longestStreak': 'Serie migliore',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Retest oggi',
  'progress.todayMinutes': 'Oggi · {minutes} min',
  'progress.retest': 'Retest',
  'progress.blockDivider': 'Blocco {block} · {name}',
  'progress.weekDivider': 'Settimana {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Lieve',
  'progress.painSore': 'Fastidioso',
  'progress.painSharp': 'Acuto',
  'progress.painLegend': 'L’anello intorno a un giorno mostra il dolore che hai registrato quel giorno.',
  'progress.painLegendDismiss': 'Nascondi',
  'progress.strengthTitle': 'Forza ed equilibrio',
  'progress.strengthEmpty': 'Il tuo primo test fissa questi numeri.',
  'progress.strengthSince': 'Il tuo primo test confrontato con l’ultimo.',
  'progress.strengthOnce': 'Dal tuo primo test. Il prossimo mostra il cambiamento.',
  'progress.calfChange': 'Sollevamenti sui talloni {from} → {to}',
  'progress.balanceChange': 'Equilibrio {from} s → {to} s',
  'progress.archChange': 'Tenuta dell’arco {from} s → {to} s',
  'progress.calfOnce': 'Sollevamenti sui talloni: {value}',
  'progress.balanceOnce': 'Equilibrio: {value} s',
  'progress.archOnce': 'Tenuta dell’arco: {value} s',
  'progress.painTitle': 'Dolore al mattino',
  'progress.painNow': '{value} / 10 questa settimana',
  'progress.painEmpty': 'Qualche mattina di check-in e la linea prende forma.',
  'progress.painCaption': 'Gli alti e bassi di ogni giorno sono normali - guarda la linea.',
  'progress.goalsTitle': 'Obiettivi',
  'progress.goalsEmpty': 'I tuoi obiettivi compaiono dopo il primo test.',
  'progress.goalReached': 'Raggiunto',
  'progress.streakCaption': 'I giorni di riposo, quelli difficili e quelli da 2 minuti contano tutti.',
};

/**
 * The brief sentences, as ordered segments. See `../en/progress.ts` for what
 * this export is and why it sits outside `PROGRESS_IT`.
 *
 * The trend sentences open on the window itself: `{window}` already carries
 * its preposition («negli ultimi 7 giorni»), so there is no frame in front of
 * it, and the builder capitalises the first segment.
 */
export const PROGRESS_BRIEF_IT = {
  trendBetter: [
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'il tuo dolore al mattino è sceso' },
    { k: 'metric', icon: 'down', text: 'da {from} a {to}', tail: '.', tone: 'good' },
  ],
  trendWorse: [
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'il tuo dolore al mattino è salito' },
    { k: 'metric', icon: 'up', text: 'da {from} a {to}', tail: '.', tone: 'warn' },
  ],
  week: [
    { k: 'metric', icon: 'window', text: '{logged} giorni su 7' },
    { k: 'frame', text: 'registrati questa settimana.' },
  ],
  tooEarly: [
    { k: 'frame', text: 'finora' },
    { k: 'metric', icon: 'window', text: '{days}', tail: '.' },
    { k: 'frame', text: 'È troppo presto per parlare di una tendenza.' },
  ],
} as const;
