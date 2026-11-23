/** The session-complete moment: "nice work", the streak pill and the tiles. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const DONE_RU = {
  'sessionDone.tileSession': 'Занятие',
  'sessionDone.tileMoves': 'Упражнения',
  'sessionDone.tileShowedUp': 'Дни заботы',
  'sessionDone.minutes': '{count} мин',

  'sessionDone.tileSessionA11y': {
    one: 'Занятие, {count} минута',
    few: 'Занятие, {count} минуты',
    many: 'Занятие, {count} минут',
  },
  'sessionDone.tileMovesA11y': {
    one: '{count} упражнение сделано',
    few: '{count} упражнения сделаны',
    many: '{count} упражнений сделано',
  },
  'sessionDone.tileShowedUpA11y': {
    one: '{count} день заботы',
    few: '{count} дня заботы',
    many: '{count} дней заботы',
  },

  // ── Redesign v1.1: the Done screen ──
  'sessionDone.dayDone': 'День {day} пройден',
  'sessionDone.title': 'Готово',
  'sessionDone.tileMinutes': 'Минуты',
  'sessionDone.tileWeek': 'Дней на неделе',
  'sessionDone.tileWeekA11y': { one: '{count} день на этой неделе', few: '{count} дня на этой неделе', many: '{count} дней на этой неделе' },
  'sessionDone.feel.question': 'Как ощущения?',
  'sessionDone.feel.easy': 'Легко',
  'sessionDone.feel.right': 'В самый раз',
  'sessionDone.feel.hard': 'Тяжело',
  'sessionDone.feel.hurt': 'Было больно',
  'sessionDone.easier': 'Сделать завтра полегче',
  'sessionDone.easierDone': 'Завтра начнём на шаг легче.',
  'sessionDone.tomorrowAt': 'Завтра в {time}',
  'sessionDone.nextOn': 'Следующее занятие: {day}',
  'sessionDone.complete': 'Занятие завершено',
  'sessionDone.tileSets': 'Подходы',
  'sessionDone.tileSetsA11y': {
    one: '{count} подход сделан',
    few: '{count} подхода сделано',
    many: '{count} подходов сделано',
  },
  'sessionDone.path.day': 'День {day}',
  'sessionDone.path.completed': 'Пройден',
  'sessionDone.month.title': 'Дни в этом месяце',
  'sessionDone.month.unit': { one: 'день', few: 'дня', many: 'дней' },
  'sessionDone.month.a11y': {
    one: '{count} день с занятием в этом месяце',
    few: '{count} дня с занятием в этом месяце',
    many: '{count} дней с занятием в этом месяце',
  },
  'sessionDone.nextLabel': 'Дальше',
};
