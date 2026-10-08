/** progress strings, French. Filled per domain; see `../en/core.ts` for the rules. */

export const PROGRESS_FR = {
  // ── Range control ────────────────────────────────────────────────────────
  'progress.range7Days': '7 jours',
  'progress.rangeMonth': '1 mois',
  'progress.range3Months': '3 mois',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // The article and «dernier» travel with the noun - «les 7 derniers jours»
  // against «le dernier mois» - so they live here and the brief contributes
  // only the «sur».
  'progress.window7Days': 'les 7 derniers jours',
  'progress.windowMonth': 'le dernier mois',
  'progress.window3Months': 'les 3 derniers mois',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Score',
  'progress.scoreA11y': '{score} sur 100',
  'progress.scoreTitle': 'Tu t’en sors très bien !',
  'progress.scoreStreak': { one: '{count} jour d’affilée !', other: '{count} jours d’affilée !' },
  'progress.scoreNote': 'Continue comme ça - cette semaine travaille sur « {goal} ».',
  'progress.scoreNoteNoGoal': 'Continue comme ça - le plan s’adapte au fur et à mesure.',

  // ── Performance card ─────────────────────────────────────────────────────
  'progress.performance': 'Performance',
  'progress.performanceA11y': '{value} sur {max}',
  'progress.performanceA11yBand': '{value} sur {max}, {band}',
  // Feminine, agreeing with «performance».
  'progress.bandVeryLow': 'Très faible',
  'progress.bandLow': 'Faible',
  'progress.bandMedium': 'Moyenne',
  'progress.bandHigh': 'Élevée',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  'progress.currentStreak': 'Série actuelle',
  'progress.longestStreak': 'Meilleure série',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Réévaluation aujourd’hui',
  'progress.todayMinutes': 'Aujourd’hui · {minutes} min',
  'progress.retest': 'Réévaluation',
  'progress.blockDivider': 'Bloc {block} · {name}',
  'progress.weekDivider': 'Semaine {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Légère',
  'progress.painSore': 'Gênante',
  'progress.painSharp': 'Vive',
  'progress.painLegend': 'L’anneau autour d’un jour montre la douleur que tu as notée ce jour-là.',
  'progress.painLegendDismiss': 'Masquer',
  'progress.strengthTitle': 'Force et équilibre',
  'progress.strengthEmpty': 'Ton premier test fixe ces chiffres.',
  'progress.strengthSince': 'Ton premier test face au plus récent.',
  'progress.strengthOnce': 'D’après ton premier test. Le suivant montrera le changement.',
  'progress.calfChange': 'Montées sur pointes {from} → {to}',
  'progress.balanceChange': 'Équilibre {from} s → {to} s',
  'progress.archChange': 'Maintien de la voûte {from} s → {to} s',
  'progress.calfOnce': 'Montées sur pointes : {value}',
  'progress.balanceOnce': 'Équilibre : {value} s',
  'progress.archOnce': 'Maintien de la voûte : {value} s',
  'progress.painTitle': 'Douleur du matin',
  'progress.painNow': '{value} / 10 cette semaine',
  'progress.painEmpty': 'Quelques matins de bilan suffisent à tracer la courbe.',
  'progress.painCaption': 'Les hauts et les bas d’un jour à l’autre sont normaux - regarde la courbe.',
  'progress.goalsTitle': 'Objectifs',
  'progress.goalsEmpty': 'Tes objectifs apparaissent après ton premier test.',
  'progress.goalReached': 'Atteint',
  'progress.streakCaption': 'Les jours de repos, les jours difficiles et les jours à 2 minutes comptent tous.',
};

/**
 * The brief sentences, as ordered segments. See `../en/progress.ts` for what
 * this export is and why it sits outside `PROGRESS_FR`.
 */
export const PROGRESS_BRIEF_FR = {
  trendBetter: [
    { k: 'frame', text: 'sur' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'ta douleur du matin a baissé' },
    { k: 'metric', icon: 'down', text: 'de {from} à {to}', tail: '.', tone: 'good' },
  ],
  trendWorse: [
    { k: 'frame', text: 'sur' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'ta douleur du matin est montée' },
    { k: 'metric', icon: 'up', text: 'de {from} à {to}', tail: '.', tone: 'warn' },
  ],
  week: [
    { k: 'metric', icon: 'window', text: '{logged} jours sur 7' },
    { k: 'frame', text: 'notés cette semaine.' },
  ],
  /** Three segments, as in Spanish: the span is carried by «ça fait», so the
   * emphasis sits on it and the second sentence stands on its own. */
  tooEarly: [
    { k: 'frame', text: 'ça fait' },
    { k: 'metric', icon: 'window', text: '{days}', tail: '.' },
    { k: 'frame', text: 'Trop tôt pour parler de tendance.' },
  ],
} as const;
