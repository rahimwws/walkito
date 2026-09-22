/** progress strings. Filled per domain; see `../en/core.ts` for the rules. */

export const PROGRESS_ES = {
  // ── Range control ────────────────────────────────────────────────────────
  'progress.range7Days': '7 días',
  'progress.rangeMonth': '1 mes',
  'progress.range3Months': '3 meses',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // The article travels with the noun — "los últimos 7 días" against "el
  // último mes" — so it lives here and the brief contributes only the "en".
  'progress.window7Days': 'los últimos 7 días',
  'progress.windowMonth': 'el último mes',
  'progress.window3Months': 'los últimos 3 meses',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Puntos',
  'progress.scoreA11y': '{score} de 100',
  'progress.scoreTitle': '¡Lo estás haciendo genial!',
  'progress.scoreStreak': { one: '¡Racha de {count} día!', other: '¡Racha de {count} días!' },
  'progress.scoreNote': 'Sigue así para terminar el bloque {block}.',

  // ── Performance card ─────────────────────────────────────────────────────
  'progress.performance': 'Rendimiento',
  'progress.performanceA11y': '{value} de {max}',
  'progress.performanceA11yBand': '{value} de {max}, {band}',
  // Masculine, agreeing with "rendimiento".
  'progress.bandVeryLow': 'Muy bajo',
  'progress.bandLow': 'Bajo',
  'progress.bandMedium': 'Medio',
  'progress.bandHigh': 'Alto',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  'progress.currentStreak': 'Racha actual',
  // "Mejor", not "más larga": the tile clips to one line.
  'progress.longestStreak': 'Mejor racha',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Reevaluación hoy',
  'progress.todayMinutes': 'Hoy · {minutes} min',
  'progress.retest': 'Reevaluación',
  'progress.blockDivider': 'Bloque {block} · {name}',
  'progress.weekDivider': 'Semana {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Leve',
  'progress.painSore': 'Molesto',
  'progress.painSharp': 'Agudo',
  'progress.painLegend': 'El anillo alrededor de un día muestra el dolor que registraste ese día.',
  'progress.painLegendDismiss': 'Ocultar',
};

/**
 * The brief sentences, as ordered segments. See `../en/progress.ts` for what
 * this export is and why it sits outside `PROGRESS_ES`.
 */
export const PROGRESS_BRIEF_ES = {
  trendBetter: [
    { k: 'frame', text: 'en' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'tu dolor matutino bajó' },
    { k: 'metric', icon: 'down', text: 'de {from} a {to}', tail: '.', tone: 'good' },
  ],
  trendWorse: [
    { k: 'frame', text: 'en' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'tu dolor matutino subió' },
    { k: 'metric', icon: 'up', text: 'de {from} a {to}', tail: '.', tone: 'warn' },
  ],
  week: [
    { k: 'metric', icon: 'window', text: '{logged} de 7 días' },
    { k: 'frame', text: 'registrados esta semana.' },
  ],
  /** Three segments where English uses two: the figure is carried by a verb
   * here ("llevas"), so the emphasis sits on the span rather than on a bare
   * numeral, and the second sentence stands on its own. */
  tooEarly: [
    { k: 'frame', text: 'llevas' },
    { k: 'metric', icon: 'window', text: '{days}', tail: '.' },
    { k: 'frame', text: 'Aún es pronto para hablar de una tendencia.' },
  ],
} as const;
