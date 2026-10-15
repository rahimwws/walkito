/** The sticker album: stickers earned for showing up, never for a number. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const STICKERS_RU = {
  'stickers.ribbon': 'Наклейки',
  'stickers.sign': '{count} / {total}',
  // `total` is always 20, so the noun is the one 20 takes.
  'stickers.collected': '{count} из {total} наклеек',
  'stickers.cardHint': 'Открывает альбом наклеек',

  'stickers.albumTitle': 'Ваши наклейки',
  'stickers.albumBlurb':
    'Каждая - за то, что вы пришли: отметка, занятие, день отдыха. Тяжёлый день считается так же, как лёгкий.',
  'stickers.earnedA11y': '{name}, получена',
  'stickers.newA11y': '{name}, новая',
  'stickers.lockedA11y': '{name}, пока нет',

  'stickers.firstCheckin': 'Первая отметка',
  'stickers.firstSession': 'Первое занятие',
  'stickers.firstRest': 'Первый день отдыха',
  'stickers.firstTest': 'Первый тест',
  'stickers.firstWeek': 'Первая неделя',
  'stickers.comeback': 'Рады вас видеть',
  'stickers.ownTime': 'Своё время',
  'stickers.streak': {
    one: '{count} день подряд',
    few: '{count} дня подряд',
    many: '{count} дней подряд',
  },
  'stickers.sessions': {
    one: '{count} занятие',
    few: '{count} занятия',
    many: '{count} занятий',
  },
  'stickers.checkins': {
    one: '{count} отметка',
    few: '{count} отметки',
    many: '{count} отметок',
  },
  'stickers.restDays': {
    one: '{count} день отдыха',
    few: '{count} дня отдыха',
    many: '{count} дней отдыха',
  },
  'stickers.care': {
    one: '{count} день заботы',
    few: '{count} дня заботы',
    many: '{count} дней заботы',
  },
};
