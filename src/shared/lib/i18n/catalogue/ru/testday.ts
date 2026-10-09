/** testday strings (the guided test day: intro, the three tests, results). Filled per domain; see `../en/core.ts` for the rules. */

export const TESTDAY_RU = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Закрыть',
  'testday.leave.title': 'Выйти из теста?',
  'testday.leave.body': 'Ничего не сохранится, пока не пройден последний тест. Тест останется в плане.',
  'testday.leave.stay': 'Продолжить',
  'testday.leave.confirm': 'Выйти',

  // ── Intro ─────────────────────────────────────────────────────────────────
  'testday.intro.eyebrow': 'День тестов',
  'testday.intro.title': 'Три коротких теста',
  'testday.intro.body': {
    one: 'Около {count} минуты.',
    few: 'Около {count} минут.',
    many: 'Около {count} минут.',
  },
  'testday.intro.nowSeconds': 'Сейчас {now} с · цель {goal} с',
  'testday.intro.nowRaises': {
    one: 'Сейчас {now} · цель {count} подъём',
    few: 'Сейчас {now} · цель {count} подъёма',
    many: 'Сейчас {now} · цель {count} подъёмов',
  },
  'testday.intro.firstSeconds': 'Первое измерение · цель {goal} с',
  'testday.intro.firstRaises': {
    one: 'Первое измерение · цель {count} подъём',
    few: 'Первое измерение · цель {count} подъёма',
    many: 'Первое измерение · цель {count} подъёмов',
  },
  'testday.intro.need': 'Понадобится',
  'testday.intro.needBarefoot': 'Босые ноги',
  'testday.intro.needWall': 'Стена, чтобы держать равновесие',
  'testday.intro.needPhone': 'Телефон перед глазами',
  'testday.intro.checkin': 'Как стопа сейчас?',
  'testday.intro.checkinHint': 'Это засчитается как сегодняшняя отметка.',
  'testday.intro.painNone': 'Не болит',
  'testday.intro.painWorst': 'Очень сильно',
  'testday.intro.painA11y': '{score} из 10',
  'testday.intro.sore':
    'Когда стопа болит, цифры выходят ниже, чем она может на самом деле, а следующие две недели будут спланированы по ним. Тест может подождать до завтра.',
  'testday.intro.start': 'Начать',
  'testday.intro.anyway': 'Всё равно пройти',
  'testday.intro.tomorrow': 'Пройти завтра',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Тест {current} из {total}',
  'testday.test.calf.name': 'Подъёмы на носок',
  'testday.test.arch.name': 'Удержание свода',
  'testday.test.balance.name': 'Баланс',

  'testday.side.left': 'Левая нога',
  'testday.side.right': 'Правая нога',
  'testday.side.leftSore': 'Левая нога - та, что болит',
  'testday.side.rightSore': 'Правая нога - та, что болит',

  // The button on the picture before a test: opens the clip at full size.

  'testday.watch': 'Смотреть видео',

  'testday.calf.step1': 'На одной ноге, пальцы касаются стены.',
  'testday.calf.step2': 'Вверх до конца и вниз, под щелчок.',
  'testday.calf.step3': 'Стоп, когда теряете темп или высоту.',
  'testday.calf.stopHint': 'Нажмите, когда не сможете держать темп или полную высоту',
  'testday.calf.up': 'Вверх',
  'testday.calf.down': 'Вниз',
  'testday.calf.otherTitle': 'Теперь другая нога',
  'testday.calf.otherBody': 'Тот же темп, та же полная высота, пальцы на стене.',

  'testday.arch.step1': 'Встаньте на обе ноги.',
  'testday.arch.step2': 'Подтяните подушечку стопы к пятке.',
  'testday.arch.step3': 'Стоп, когда свод опускается.',
  'testday.arch.stopHint': 'Нажмите, как только свод опустится',

  'testday.balance.step1': 'На одной ноге, руки на поясе.',
  'testday.balance.step2': 'По сигналу закройте глаза.',
  'testday.balance.step3': 'Стоп, когда вторая нога коснётся пола.',
  'testday.balance.stopHint': 'Нажмите, когда другая нога коснётся пола',

  'testday.start': 'Начать',
  'testday.stop': 'Стоп',
  'testday.timeLeft': 'Осталось {time}',
  'testday.secondsLeft': { one: 'секунда осталась', few: 'секунды осталось', many: 'секунд осталось' },
  'testday.held': 'Уже {n} с',

  'testday.paused.title': 'Пауза',
  'testday.paused.body': 'Таймер остановился, пока приложение было в фоне.',
  'testday.paused.resume': 'Продолжить',
  'testday.paused.restart': 'Начать этот тест заново',

  'testday.confirm.raises': {
    one: '{count} подъём - верно?',
    few: '{count} подъёма - верно?',
    many: '{count} подъёмов - верно?',
  },
  'testday.confirm.seconds': {
    one: '{count} секунда - верно?',
    few: '{count} секунды - верно?',
    many: '{count} секунд - верно?',
  },
  'testday.confirm.hint': 'Поправьте, если сбились со счёта.',
  'testday.confirm.holdHint': 'Если вы не сразу дотянулись до телефона, уберите эти секунды.',
  'testday.confirm.less': 'Меньше',
  'testday.confirm.more': 'Больше',
  'testday.confirm.again': 'Пройти этот тест ещё раз',
  'testday.confirm.next': 'Следующий тест',
  'testday.confirm.finish': 'Посмотреть результаты',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.firstBlurb': 'Следующий тест покажет, насколько вы продвинулись.',
  'testday.results.name.arch_hold': 'Удержание свода',
  'testday.results.name.calf_raises': 'Подъёмы на носок',
  'testday.results.name.balance': 'Баланс',
  'testday.results.name.symmetry': 'Симметрия',
  'testday.results.unitSeconds': { one: 'секунда', few: 'секунды', many: 'секунд' },
  'testday.results.unitRaises': { one: 'подъём', few: 'подъёма', many: 'подъёмов' },
  'testday.results.percent': '{n} %',
  // Genitive: it follows the figure, «17 % разницы между ногами».
  'testday.results.gapUnit': 'разницы между ногами',
  'testday.results.legs': 'Левая {left} · правая {right}',
  'testday.results.goalGap': 'Цель - меньше {n} %',
  'testday.results.toGoSeconds': { one: 'Ещё {count} с', few: 'Ещё {count} с', many: 'Ещё {count} с' },
  'testday.results.toGoRaises': {
    one: 'Ещё {count} подъём',
    few: 'Ещё {count} подъёма',
    many: 'Ещё {count} подъёмов',
  },
  'testday.results.toGoGap': {
    one: 'Ещё {count} пункт',
    few: 'Ещё {count} пункта',
    many: 'Ещё {count} пунктов',
  },
  'testday.results.reached': 'Цель достигнута',
  'testday.results.moreSeconds': {
    one: 'На {count} с больше, чем в прошлый раз',
    few: 'На {count} с больше, чем в прошлый раз',
    many: 'На {count} с больше, чем в прошлый раз',
  },
  'testday.results.fewerSeconds': {
    one: 'На {count} с меньше, чем в прошлый раз',
    few: 'На {count} с меньше, чем в прошлый раз',
    many: 'На {count} с меньше, чем в прошлый раз',
  },
  'testday.results.moreRaises': {
    one: 'На {count} подъём больше, чем в прошлый раз',
    few: 'На {count} подъёма больше, чем в прошлый раз',
    many: 'На {count} подъёмов больше, чем в прошлый раз',
  },
  'testday.results.fewerRaises': {
    one: 'На {count} подъём меньше, чем в прошлый раз',
    few: 'На {count} подъёма меньше, чем в прошлый раз',
    many: 'На {count} подъёмов меньше, чем в прошлый раз',
  },
  'testday.results.gapSmaller': {
    one: 'Разница на {count} пункт меньше, чем в прошлый раз',
    few: 'Разница на {count} пункта меньше, чем в прошлый раз',
    many: 'Разница на {count} пунктов меньше, чем в прошлый раз',
  },
  'testday.results.gapLarger': {
    one: 'Разница на {count} пункт больше, чем в прошлый раз',
    few: 'Разница на {count} пункта больше, чем в прошлый раз',
    many: 'Разница на {count} пунктов больше, чем в прошлый раз',
  },
  'testday.results.same': 'Как в прошлый раз',
  'testday.results.first': 'Первое измерение',
  'testday.results.nextTest': 'Следующий тест: {date}',
  'testday.results.planUpdated': 'План на следующие две недели обновлён.',
  'testday.results.done': 'Готово',

  'testday.results.verdictFirst': 'Три числа, которые предстоит побить',
  'testday.results.verdictSteady': 'Все три результата держатся',
  'testday.results.verdictUp.calf_raises': 'Больше подъёмов, чем в прошлый раз',
  'testday.results.verdictUp.arch_hold': 'Свод держится дольше',
  'testday.results.verdictUp.balance': 'Вы дольше держите баланс',
  'testday.results.verdictUpTwo': 'Два из трёх выросли',
  'testday.results.verdictUpAll': 'Все три выросли',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'Новый рекорд',
  'testday.results.heroEyebrowFirst': 'Ваша точка отсчёта',
  'testday.results.heroEyebrowSteady': 'Тесты пройдены',
  'testday.results.verdictGoal.calf_raises': 'Цель по подъёмам на носок достигнута',
  'testday.results.verdictGoal.arch_hold': 'Цель по удержанию свода достигнута',
  'testday.results.verdictGoal.balance': 'Цель по балансу достигнута',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Все тесты',
  'testday.results.showDetails': 'Подробнее',
  'testday.results.hideDetails': 'Скрыть подробности',
  'testday.results.share': 'Поделиться',
  'testday.results.shareTitle': 'Мой тест стопы',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'Мой тест стопы в Walkito: подъёмы на носок {calf} · свод {arch} с · баланс {balance} с',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 'с',
  'testday.results.valueSeconds': '{n} с',
  'testday.results.dateVs': {
    one: '{date} · в сравнении с тестом {count} день назад',
    few: '{date} · в сравнении с тестом {count} дня назад',
    many: '{date} · в сравнении с тестом {count} дней назад',
  },
  'testday.results.dateFirst': '{date} · ваша точка отсчёта',
  'testday.results.chipBaseline': 'Старт',
  'testday.results.chipSame': 'Без изменений',
  'testday.results.chipSeconds': '{delta} с',
  'testday.results.chipRaises': { one: '{delta} подъём', few: '{delta} подъёма', many: '{delta} подъёмов' },
  'testday.results.gapBetween': 'Разница между ногами {n} %',
  'testday.results.explain.calf_raises':
    'Подъёмы на носок показывают, сколько работы икра и ахиллово сухожилие выдерживают, пока не устанут. Больше подъёмов - значит, икра берёт на себя больше каждого шага на долгой прогулке или пробежке.',
  'testday.results.explain.arch_hold':
    'Удержание свода показывает, как долго маленькие мышцы стопы держат свод поднятым. Чем дольше удержание, тем дольше стопа остаётся опорой в течение дня.',
  'testday.results.explain.balance':
    'Стойка на одной ноге с закрытыми глазами показывает, насколько хорошо стопа и голеностоп чувствуют опору. Больше секунд - значит, шаг увереннее на неровной дороге и когда вы устали.',
  'testday.results.explainA11y': 'Что это показывает',
};
