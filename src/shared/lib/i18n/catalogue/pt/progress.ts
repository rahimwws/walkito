/** progress strings. Filled per domain; see `../en/core.ts` for the rules. */

export const PROGRESS_PT = {
  // ── Range control ────────────────────────────────────────────────────────
  'progress.range7Days': '7 dias',
  'progress.rangeMonth': '1 mês',
  'progress.range3Months': '3 meses',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // The preposition contracts with the article - «nos últimos 7 dias» against
  // «no último mês» - so the whole phrase lives here and the brief opens on it.
  'progress.window7Days': 'nos últimos 7 dias',
  'progress.windowMonth': 'no último mês',
  'progress.window3Months': 'nos últimos 3 meses',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Pontos',
  'progress.scoreA11y': '{score} de 100',
  'progress.scoreTitle': 'Você está indo muito bem!',
  'progress.scoreStreak': { one: '{count} dia seguido!', other: '{count} dias seguidos!' },
  'progress.scoreNote': 'Continue assim - esta semana trabalha em «{goal}».',
  'progress.scoreNoteNoGoal': 'Continue assim - o plano se ajusta no caminho.',

  // ── Performance card ─────────────────────────────────────────────────────
  'progress.performance': 'Desempenho',
  'progress.performanceA11y': '{value} de {max}',
  'progress.performanceA11yBand': '{value} de {max}, {band}',
  // Masculine, agreeing with «desempenho».
  'progress.bandVeryLow': 'Muito baixo',
  'progress.bandLow': 'Baixo',
  'progress.bandMedium': 'Médio',
  'progress.bandHigh': 'Alto',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  'progress.currentStreak': 'Sequência atual',
  // «Melhor», not «mais longa»: the tile clips to one line.
  'progress.longestStreak': 'Melhor sequência',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Reavaliação hoje',
  'progress.todayMinutes': 'Hoje · {minutes} min',
  'progress.retest': 'Reavaliação',
  'progress.blockDivider': 'Bloco {block} · {name}',
  'progress.weekDivider': 'Semana {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Leve',
  'progress.painSore': 'Incômoda',
  'progress.painSharp': 'Aguda',
  'progress.painLegend': 'O anel em volta de um dia mostra a dor que você registrou nesse dia.',
  'progress.painLegendDismiss': 'Ocultar',
  'progress.strengthTitle': 'Força e equilíbrio',
  'progress.strengthEmpty': 'Seu primeiro teste define esses números.',
  'progress.strengthSince': 'Seu primeiro teste comparado com o mais recente.',
  'progress.strengthOnce': 'Do seu primeiro teste. O próximo mostra a mudança.',
  'progress.calfChange': 'Elevações de calcanhar {from} → {to}',
  'progress.balanceChange': 'Equilíbrio {from} s → {to} s',
  'progress.archChange': 'Arco sustentado {from} s → {to} s',
  'progress.calfOnce': 'Elevações de calcanhar: {value}',
  'progress.balanceOnce': 'Equilíbrio: {value} s',
  'progress.archOnce': 'Arco sustentado: {value} s',
  'progress.painTitle': 'Dor de manhã',
  'progress.painNow': '{value} / 10 esta semana',
  'progress.painEmpty': 'Algumas manhãs de registro desenham a linha.',
  'progress.painCaption': 'Altos e baixos de um dia para o outro são normais - acompanhe a linha.',
  'progress.goalsTitle': 'Objetivos',
  'progress.goalsEmpty': 'Seus objetivos aparecem depois do primeiro teste.',
  'progress.goalReached': 'Alcançado',
  'progress.streakCaption': 'Dias de descanso, dias difíceis e dias de 2 minutos contam todos.',
};

/**
 * The brief sentences, as ordered segments. See `../en/progress.ts` for what
 * this export is and why it sits outside `PROGRESS_PT`.
 *
 * The trend sentences open on the window, which already carries its
 * contracted preposition («nos últimos 7 dias»), so there is no frame in front
 * of it; the renderer capitalises the first segment.
 */
export const PROGRESS_BRIEF_PT = {
  trendBetter: [
    { k: 'metric', icon: 'window', text: '{window}', tail: ',' },
    { k: 'frame', text: 'sua dor de manhã caiu' },
    { k: 'metric', icon: 'down', text: 'de {from} para {to}', tail: '.', tone: 'good' },
  ],
  trendWorse: [
    { k: 'metric', icon: 'window', text: '{window}', tail: ',' },
    { k: 'frame', text: 'sua dor de manhã subiu' },
    { k: 'metric', icon: 'up', text: 'de {from} para {to}', tail: '.', tone: 'warn' },
  ],
  week: [
    { k: 'metric', icon: 'window', text: '{logged} de 7 dias' },
    { k: 'frame', text: 'registrados esta semana.' },
  ],
  /** Three segments, as in Spanish: the span is carried by a verb («já são»),
   * and the second sentence stands on its own. */
  tooEarly: [
    { k: 'frame', text: 'já são' },
    { k: 'metric', icon: 'window', text: '{days}', tail: '.' },
    { k: 'frame', text: 'Ainda é cedo para falar em tendência.' },
  ],
} as const;
