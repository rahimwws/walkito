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
  'progress.scoreNote': 'Так держать - на этой неделе цель «{goal}».',
  'progress.scoreNoteNoGoal': 'Так держать - план подстраивается по ходу.',

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
  'progress.strengthTitle': 'Сила и баланс',
  'progress.strengthEmpty': 'Эти цифры появятся после первого теста.',
  'progress.strengthSince': 'Первый тест и последний.',
  'progress.strengthOnce': 'Первый тест. Следующий покажет изменения.',
  'progress.calfChange': 'Подъёмы на носок {from} → {to}',
  'progress.balanceChange': 'Баланс {from} с → {to} с',
  'progress.archChange': 'Удержание свода {from} с → {to} с',
  'progress.calfOnce': 'Подъёмы на носок: {value}',
  'progress.balanceOnce': 'Баланс: {value} с',
  'progress.archOnce': 'Удержание свода: {value} с',
  'progress.painTitle': 'Боль по утрам',
  'progress.painNow': '{value} / 10 за неделю',
  'progress.painEmpty': 'Линия появится после нескольких утренних отметок.',
  'progress.painCaption': 'Скачки день ото дня - это нормально. Смотрите на линию.',
  'progress.goalsTitle': 'Цели',
  'progress.goalsEmpty': 'Цели появятся после первого теста.',
  'progress.goalReached': 'Достигнута',
  'progress.streakCaption': 'Дни отдыха, тяжёлые дни и дни по 2 минуты тоже считаются.',
  // ── The redesigned screen ────────────────────────────────────────────────
  'progress.avgWeek': 'В среднем за последние 7 дней',
  'progress.avgMonth': 'В среднем за последний месяц',
  'progress.avgQuarter': 'В среднем за последние 3 месяца',
  'progress.painOutOf': '/10',
  'progress.deltaWeek': '{delta} к прошлой неделе',
  'progress.deltaMonth': '{delta} к прошлому месяцу',
  'progress.deltaQuarter': '{delta} к трём месяцам до этого',
  'progress.deltaSame': 'Без изменений',
  'progress.startLine': 'Старт {value}',
  'progress.tooltipRange': '{from} - {to}',
  'progress.painChartA11y': 'График утренней боли, в среднем {value} из 10',
  'progress.painBarA11y': '{date}: {value} из 10',
  'progress.painBarEmptyA11y': '{date}: нет отметки',
  'progress.painNoneInRange': 'За этот период утренних отметок пока нет.',
  'progress.painToGo': { one: 'Ещё {count} утренняя отметка, и появится график.', few: 'Ещё {count} утренние отметки, и появится график.', many: 'Ещё {count} утренних отметок, и появится график.' },
  'progress.painToGoSteps': '{done} из {total} отметок',
  'progress.calfName': 'Подъёмы на носок',
  'progress.balanceName': 'Баланс',
  'progress.archName': 'Удержание свода',
  'progress.repsUnit': { one: 'повтор', few: 'повтора', many: 'повторов' },
  'progress.secondsUnit': 'с',
  'progress.repsDelta': { one: '{delta} повтор', few: '{delta} повтора', many: '{delta} повторов' },
  'progress.secondsDelta': '{delta} с',
  'progress.baseline': 'Первый тест',
  'progress.noChange': 'Без изменений',
  'progress.strengthNoTest': 'Пока без теста',
  'progress.strengthDeltaCaption': 'Изменения считаются от первого теста.',
  'progress.nextTest': 'Следующий тест {date}',
  'progress.nextTestToday': 'Следующий тест сегодня',
  // Under the next test's date: how far off it is.
  'progress.nextTestIn': { one: 'через {count} день', few: 'через {count} дня', many: 'через {count} дней' },
  // On the day the test is due: the button that starts it from the Progress tab.
  'progress.startTest': 'Начать',
  'progress.strengthRowA11y': '{name}: {value} {unit}, {change}',
  'progress.goalPercent': '{pct} %',
  'progress.goalA11y': '{goal}, пройдено {pct} %',
  'progress.consistencyTitle': 'Регулярность',
  'progress.last4Weeks': 'Последние 4 недели',
  'progress.heatDone': 'Занимались',
  'progress.heatRest': 'День отдыха',
  'progress.heatA11y': '{done} из {total} дней за последние 4 недели',
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
