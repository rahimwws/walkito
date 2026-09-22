/** Quick-tab strings. Filled per domain; see `../en/core.ts` for the rules. */

export const QUICK_RU = {
  'quick.tab': 'Быстро',
  'quick.title': 'Быстро',
  'quick.subtitle': 'Когда нужно прямо сейчас',
  'quick.featured': 'СЕЙЧАС ПОДОЙДЁТ',

  'quick.flare.title': 'Болит прямо сейчас',
  'quick.preRun.title': 'Перед пробежкой',
  'quick.postRun.title': 'После пробежки',
  'quick.atWork.title': 'На работе',
  'quick.morning.title': 'Утро до первого шага',

  'quick.flare.cue': 'Мягко. Это облегчение, а не тренировка.',
  'quick.preRun.cue': 'Разбуди стопу. Долго не тяни.',
  'quick.postRun.cue': 'Держи растяжку. Без пружинок.',
  'quick.atWork.cue': 'Никто не заметит. Обувь можно не снимать.',
  'quick.morning.cue': 'До того, как стопа коснётся пола.',

  'quick.seated': 'сидя',
  'quick.standing': 'стоя',
  'quick.inBed': 'в кровати',

  // 11–14 are `many` despite their last digit, which is why 11 минут is right
  // and «11 минута» is the mistake this form exists to prevent.
  'quick.minutes': { one: '{count} минута', few: '{count} минуты', many: '{count} минут' },
  'quick.seconds': { one: '{count} секунда', few: '{count} секунды', many: '{count} секунд' },

  'quick.start': 'Начать',
  'quick.switch': 'Смени ногу',
  'quick.done.title': 'Готово.',
  'quick.done.body': {
    one: '{count} минута для стоп.',
    few: '{count} минуты для стоп.',
    many: '{count} минут для стоп.',
  },
  'quick.close': 'Закрыть',

  'quick.flare.ask': 'Насколько болит сейчас?',
  'quick.flare.skip': 'Не сейчас',

  'quick.locked': 'Закрыто',
  'quick.lockedHint': 'Входит в программу',
};
