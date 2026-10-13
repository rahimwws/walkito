/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const STREAKS_RU = {
  'streakSheet.inARow': {
    one: '{count} день подряд',
    few: '{count} дня подряд',
    many: '{count} дней подряд',
  },

  'streakSheet.current': 'Текущая серия',
  // «Всего дней», not «Занимались»: rest days the plan gave count here too.
  'streakSheet.showedUp': 'Всего дней',
  // «Лучшая», not «самая длинная»: the tile clips to one line.
  'streakSheet.longest': 'Лучшая серия',
  'streakSheet.currentA11y': {
    one: 'Текущая серия: {count} день',
    few: 'Текущая серия: {count} дня',
    many: 'Текущая серия: {count} дней',
  },
  'streakSheet.showedUpA11y': {
    one: 'Вы были здесь {count} день',
    few: 'Вы были здесь {count} дня',
    many: 'Вы были здесь {count} дней',
  },
  'streakSheet.longestA11y': {
    one: 'Лучшая серия: {count} день',
    few: 'Лучшая серия: {count} дня',
    many: 'Лучшая серия: {count} дней',
  },

  'streakSheet.allCount': 'Дни отдыха, тяжёлые дни и дни по 2 минуты тоже считаются.',

  'streakSheet.dayDone': '{day}: день засчитан',
  'streakSheet.dayRest': '{day}: день отдыха',
  'streakSheet.dayToday': 'Сегодня, {day}',
  'streakSheet.dayTodayDone': 'Сегодня, {day}: день засчитан',
  'streakSheet.dayAhead': '{day}: ещё впереди',

  'streakSheet.milestoneReached': {
    one: '{count} день подряд: пройдено',
    few: '{count} дня подряд: пройдено',
    many: '{count} дней подряд: пройдено',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} день подряд: впереди',
    few: '{count} дня подряд: впереди',
    many: '{count} дней подряд: впереди',
  },
};
