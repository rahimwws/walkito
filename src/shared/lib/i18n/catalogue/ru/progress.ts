/** progress strings. Filled per domain; see `../en/core.ts` for the rules. */

export const PROGRESS_RU = {
  // ── Range control ────────────────────────────────────────────────────────
  'progress.range7Days': '7 дней',
  'progress.rangeMonth': '1 месяц',
  'progress.range3Months': '3 месяца',

  // ── The window, as it appears inside the trend sentence ───────────────────
  // The qualifier is here rather than in the sentence, because it agrees with
  // the noun it stands in front of: «последние 7 дней», but «последний месяц».
  // The brief contributes only the «за» before it.
  'progress.window7Days': 'последние 7 дней',
  'progress.windowMonth': 'последний месяц',
  'progress.window3Months': 'последние 3 месяца',

  // ── Score card ───────────────────────────────────────────────────────────
  'progress.score': 'Оценка',
  'progress.scoreA11y': '{score} из 100',
  'progress.scoreTitle': 'У вас отлично получается!',
  // Same idiom as `streak.title` — days in a row, not a "streak of days".
  'progress.scoreStreak': {
    one: '{count} день подряд!',
    few: '{count} дня подряд!',
    many: '{count} дней подряд!',
  },
  'progress.scoreNote': 'Продолжайте в том же духе — и блок «{block}» будет пройден.',

  // ── Performance card ─────────────────────────────────────────────────────
  // "Уровень", not "Производительность": the number under this label is the
  // average of the levels the retests measured, and naming it after them keeps
  // the card and the retest sheet saying the same word.
  'progress.performance': 'Уровень',
  'progress.performanceA11y': '{value} из {max}',
  'progress.performanceA11yBand': '{value} из {max}, {band}',
  // Masculine, agreeing with «уровень».
  'progress.bandVeryLow': 'Очень низкий',
  'progress.bandLow': 'Низкий',
  'progress.bandMedium': 'Средний',
  'progress.bandHigh': 'Высокий',

  // ── Streak tiles ─────────────────────────────────────────────────────────
  'progress.currentStreak': 'Текущая серия',
  // «Лучшая», not «самая длинная»: the tile clips to one line, and the longer
  // phrase is the one that gets cut.
  'progress.longestStreak': 'Лучшая серия',

  // ── The path ─────────────────────────────────────────────────────────────
  'progress.retestToday': 'Ретест сегодня',
  'progress.todayMinutes': 'Сегодня · {minutes} мин',
  'progress.retest': 'Ретест',
  'progress.blockDivider': 'Блок {block} · {name}',
  'progress.weekDivider': 'Неделя {week}',

  // ── Pain legend ──────────────────────────────────────────────────────────
  'progress.painEasy': 'Легко',
  'progress.painSore': 'Ноет',
  'progress.painSharp': 'Резко',
  'progress.painLegend': 'Кольцо вокруг дня показывает боль, которую вы отметили в этот день.',
  'progress.painLegendDismiss': 'Скрыть',
};

/**
 * The brief sentences, as ordered segments. See `../en/progress.ts` for what
 * this export is and why it sits outside `PROGRESS_RU`.
 *
 * Russian fronts the window clause and puts the verb before the figures, which
 * is a different array from English rather than a different set of words in the
 * same one — the case the whole segment shape exists for.
 */
export const PROGRESS_BRIEF_RU = {
  trendBetter: [
    { k: 'frame', text: 'за' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'утренняя боль снизилась' },
    { k: 'metric', icon: 'down', text: 'с {from} до {to}', tail: '.', tone: 'good' },
  ],
  trendWorse: [
    { k: 'frame', text: 'за' },
    { k: 'metric', icon: 'window', text: '{window}' },
    { k: 'frame', text: 'утренняя боль выросла' },
    { k: 'metric', icon: 'up', text: 'с {from} до {to}', tail: '.', tone: 'warn' },
  ],
  /** The figures move to the end here: Russian states the week first, then how
   * much of it was logged. English cannot reach this order by substitution. */
  week: [
    { k: 'frame', text: 'на этой неделе отмечено' },
    { k: 'metric', icon: 'window', text: '{logged} из 7 дней', tail: '.' },
  ],
  tooEarly: [
    { k: 'metric', icon: 'window', text: 'прошло {days}', tail: '.' },
    { k: 'frame', text: 'Пока рано говорить о динамике.' },
  ],
} as const;
