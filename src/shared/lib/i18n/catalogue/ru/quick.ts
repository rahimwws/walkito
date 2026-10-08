/** Quick-tab strings. Filled per domain; see `../en/core.ts` for the rules. */

export const QUICK_RU = {
  'quick.tab': 'Быстро',
  'quick.title': 'Быстро',
  'quick.subtitle': 'Когда нужно прямо сейчас',
  'quick.featured': 'Сейчас подойдёт',

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

  'quick.stepsLabel': 'Движения',
  'quick.positionLabel': 'Положение',

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

  'quick.kicker': 'Комплекс',
  'quick.whyTitle': 'Зачем это',
  'quick.flare.why':
    'Три движения сидя, которые почти не нагружают больное место. Прокатка и мягкая растяжка снимают напряжение, а вес при этом не ложится на стопу.',
  'quick.preRun.why':
    'Две минуты, чтобы разбудить голеностоп и мелкие мышцы под сводом. Стопа готова с первого шага.',
  'quick.postRun.why':
    'После пробежки икры и подошва зажимаются. Медленная растяжка с удержанием, пока мышцы ещё тёплые, помогает им успокоиться.',
  'quick.atWork.why':
    'Часы на ногах даются стопам тяжело. Несколько незаметных движений держат свод в работе, а голеностоп в движении, и никуда не нужно уходить.',
  'quick.morning.why':
    'Первые шаги за день часто самые трудные. Растяжка подошвы до того, как встать, даёт ей мягкое начало.',
  'quick.moves': {
    one: '{count} движение',
    few: '{count} движения',
    many: '{count} движений',
  },
  'quick.stepSeconds': {
    one: '{count} секунда',
    few: '{count} секунды',
    many: '{count} секунд',
  },
  'quick.stepSwitch': {
    one: '{count} секунда, на середине смени ногу',
    few: '{count} секунды, на середине смени ногу',
    many: '{count} секунд, на середине смени ногу',
  },
  'quick.startMinutes': {
    one: 'Начать · {count} минута',
    few: 'Начать · {count} минуты',
    many: 'Начать · {count} минут',
  },
};
