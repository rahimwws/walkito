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
  'progress.scoreNote': 'Sigue así: esta semana trabaja en «{goal}».',
  'progress.scoreNoteNoGoal': 'Sigue así: el plan se ajusta sobre la marcha.',

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
  'progress.strengthTitle': 'Fuerza y equilibrio',
  'progress.strengthEmpty': 'Tu primera prueba pone estas cifras.',
  'progress.strengthSince': 'Tu primera prueba frente a la última.',
  'progress.strengthOnce': 'De tu primera prueba. La siguiente muestra el cambio.',
  'progress.calfChange': 'Elevaciones de talón {from} → {to}',
  'progress.balanceChange': 'Equilibrio {from} s → {to} s',
  'progress.archChange': 'Arco sostenido {from} s → {to} s',
  'progress.calfOnce': 'Elevaciones de talón: {value}',
  'progress.balanceOnce': 'Equilibrio: {value} s',
  'progress.archOnce': 'Arco sostenido: {value} s',
  'progress.painTitle': 'Dolor por la mañana',
  'progress.painNow': '{value} / 10 esta semana',
  'progress.painEmpty': 'Unas cuantas mañanas registradas dibujan la línea.',
  'progress.painCaption': 'Los altibajos de cada día son normales - fíjate en la línea.',
  'progress.goalsTitle': 'Objetivos',
  'progress.goalsEmpty': 'Tus objetivos aparecen tras tu primera prueba.',
  'progress.goalReached': 'Conseguido',
  'progress.streakCaption': 'Los días de descanso, los días malos y los de 2 minutos también cuentan.',
  // ── The redesigned screen ────────────────────────────────────────────────
  'progress.avgWeek': 'Media de los últimos 7 días',
  'progress.avgMonth': 'Media del último mes',
  'progress.avgQuarter': 'Media de los últimos 3 meses',
  'progress.painOutOf': '/10',
  'progress.deltaWeek': '{delta} frente a la semana anterior',
  'progress.deltaMonth': '{delta} frente al mes anterior',
  'progress.deltaQuarter': '{delta} frente a los 3 meses anteriores',
  'progress.deltaSame': 'Igual que antes',
  'progress.startLine': 'Inicio {value}',
  'progress.tooltipRange': '{from} - {to}',
  'progress.painChartA11y': 'Gráfico del dolor por la mañana, media de {value} sobre 10',
  'progress.painBarA11y': '{date}: {value} sobre 10',
  'progress.painBarEmptyA11y': '{date}: sin registro',
  'progress.painNoneInRange': 'Todavía no hay registros de la mañana en este periodo.',
  'progress.painToGo': { one: 'Te falta {count} registro de la mañana para que empiece tu gráfico.', other: 'Te faltan {count} registros de la mañana para que empiece tu gráfico.' },
  'progress.painToGoSteps': '{done} de {total} registros',
  'progress.calfName': 'Elevaciones de talón',
  'progress.balanceName': 'Equilibrio',
  'progress.archName': 'Arco sostenido',
  'progress.repsUnit': { one: 'rep.', other: 'reps.' },
  'progress.secondsUnit': 's',
  'progress.repsDelta': { one: '{delta} rep.', other: '{delta} reps.' },
  'progress.secondsDelta': '{delta} s',
  'progress.baseline': 'Punto de partida',
  'progress.noChange': 'Sin cambios',
  'progress.strengthNoTest': 'Aún sin prueba',
  'progress.strengthDeltaCaption': 'Los cambios se cuentan desde tu primera prueba.',
  'progress.nextTest': 'Próxima prueba el {date}',
  'progress.nextTestToday': 'Tu próxima prueba es hoy',
  'progress.strengthRowA11y': '{name}: {value} {unit}, {change}',
  'progress.goalPercent': '{pct} %',
  'progress.goalA11y': '{goal}, al {pct} %',
  'progress.consistencyTitle': 'Constancia',
  'progress.last4Weeks': 'Últimas 4 semanas',
  'progress.heatDone': 'Entrenaste',
  'progress.heatRest': 'Descanso',
  'progress.heatA11y': '{done} de {total} días en las últimas 4 semanas',
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
