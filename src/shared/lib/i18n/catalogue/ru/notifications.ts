/**
 * Notifications, Russian.
 *
 * Warm but respectful — «вы» throughout, the same register as `core.ts`. A
 * lock-screen line that switches to «ты» would read as a different app from the
 * one the user agreed to hear from.
 *
 * The plural entries here are the reason this catalogue is shaped the way it
 * is. Minutes run 3, 5 and 7, so a set missing `few` renders "3 минут" on two
 * days out of three; asymmetry runs are never fewer than three days; and the
 * streak row reaches 21 and 22, which take `one` and `few` again after fifteen
 * days of `many`.
 *
 * `{steps}` is a number already grouped for the locale, while `count` is the
 * same number raw — that pair is what makes "14 201 шаг" and "14 205 шагов"
 * both come out right.
 *
 * `{block}` arrives in English: block names live in `@/entities/program` and
 * are not translated anywhere yet.
 */

export const NOTIFICATIONS_RU = {
  // ── What kind of day it is ───────────────────────────────────────────────
  // Whole noun phrases, because "{kind} work" has no Russian shape — the noun
  // has to carry the case itself.
  'notifications.kindStrength': 'Силовая работа',
  'notifications.kindMobility': 'Работа на мобильность',
  'notifications.kindBalance': 'Работа на баланс',
  'notifications.kindRecovery': 'Восстановление',
  'notifications.kindFoot': 'Работа со стопой',

  // ── The morning nudge ────────────────────────────────────────────────────
  'notifications.sessionStrength': {
    one: 'Сегодня сила стопы. {count} минута.',
    few: 'Сегодня сила стопы. {count} минуты.',
    many: 'Сегодня сила стопы. {count} минут.',
  },
  'notifications.sessionDay': {
    one: 'День {day}. {kind}. {count} минута.',
    few: 'День {day}. {kind}. {count} минуты.',
    many: 'День {day}. {kind}. {count} минут.',
  },
  'notifications.sessionShort': {
    one: 'Сегодня короткая сессия — {count} минута, сидя.',
    few: 'Сегодня короткая сессия — {count} минуты, сидя.',
    many: 'Сегодня короткая сессия — {count} минут, сидя.',
  },
  'notifications.sessionHeelRaises':
    'Сегодня подъёмы на носки. То самое, что действительно сдвигает дело.',
  'notifications.sessionRace': {
    one: '{kind} сегодня. До старта {count} день.',
    few: '{kind} сегодня. До старта {count} дня.',
    many: '{kind} сегодня. До старта {count} дней.',
  },
  'notifications.sessionBackTo': {
    one: 'Сегодня {count} минута. Ещё шаг обратно {backTo}.',
    few: 'Сегодня {count} минуты. Ещё шаг обратно {backTo}.',
    many: 'Сегодня {count} минут. Ещё шаг обратно {backTo}.',
  },
  'notifications.sessionCalves': {
    one: '{count} минута. Сегодня всё про икры.',
    few: '{count} минуты. Сегодня всё про икры.',
    many: '{count} минут. Сегодня всё про икры.',
  },
  'notifications.sessionMobility': 'Сегодня мобильность. Ничего тяжёлого.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  'notifications.maintenanceDay': {
    one: 'День поддержки. {count} минута.',
    few: 'День поддержки. {count} минуты.',
    many: 'День поддержки. {count} минут.',
  },
  'notifications.maintenanceCheckpoint':
    'Ежемесячная проверка. Посмотрим, что ничего не откатилось.',
  'notifications.maintenanceFourWeeks': 'Ровно четыре недели. В этом и смысл.',

  // ── The morning after a bad day ──────────────────────────────────────────
  // Ни одного восклицательного знака и ни одной похвалы: вчера человеку было
  // плохо, и бодрый тон здесь означал бы, что приложение ему не верит.
  'notifications.flareRough': {
    one: 'Вчера было тяжело. Сегодня {count} минута, сидя.',
    few: 'Вчера было тяжело. Сегодня {count} минуты, сидя.',
    many: 'Вчера было тяжело. Сегодня {count} минут, сидя.',
  },
  'notifications.flarePain': {
    one: 'Боль была {pain}. Сегодня план отходит в сторону — {count} минута.',
    few: 'Боль была {pain}. Сегодня план отходит в сторону — {count} минуты.',
    many: 'Боль была {pain}. Сегодня план отходит в сторону — {count} минут.',
  },
  'notifications.flareNothingHeavy': 'Вчера был плохой день. Сегодня ничего тяжёлого.',

  // ── A big day on their feet ──────────────────────────────────────────────
  'notifications.loadSteps': {
    one: '{steps} шаг вчера — на {percent}% больше обычного. Сегодня восстановление.',
    few: '{steps} шага вчера — на {percent}% больше обычного. Сегодня восстановление.',
    many: '{steps} шагов вчера — на {percent}% больше обычного. Сегодня восстановление.',
  },
  'notifications.loadBigDay': 'Вчера вы много были на ногах. План подстроился.',
  'notifications.loadBackOff': 'Вчера было долго. Сегодня план сбавляет.',

  // ── Проверка по шагам ────────────────────────────────────────────────────
  'notifications.stepsCheck': {
    one: 'Сегодня уже {steps} шаг — долгий день на ногах. Как пятка?',
    few: 'Сегодня уже {steps} шага — долгий день на ногах. Как пятка?',
    many: 'Сегодня уже {steps} шагов — долгий день на ногах. Как пятка?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  // Только изменение относительно собственной нормы человека. Никакой хромоты,
  // никаких компенсаций, никакого риска травмы и никаких сравнений с другими.
  'notifications.gaitUneven': {
    one: 'Ваши шаги неровные уже {count} день.',
    few: 'Ваши шаги неровные уже {count} дня.',
    many: 'Ваши шаги неровные уже {count} дней.',
  },
  'notifications.gaitChanged': 'На этой неделе что-то изменилось в вашей походке.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Две недели. Пора посмотреть, что сдвинулось. 3 теста, 4 минуты.',
  'notifications.retestCheckpoint': 'Сегодня контрольная точка. Без тренировки — только три замера.',
  'notifications.retestDay': 'День {day}. Посмотрим, работает ли это.',
  'notifications.retestFollowUp': 'Тесты всё ещё ждут. Четыре минуты.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'Сегодня новый блок: {block}. Начинаются подъёмы на носки.',
  'notifications.blockLoadUp': 'Блок {block}. Дальше нагрузка растёт.',
  'notifications.blockOpens': 'Сегодня открывается {block}.',

  // ── The plan changed, and why ────────────────────────────────────────────
  'notifications.planFlare': 'На этой неделе боль выросла, поэтому сегодня на ступень легче.',
  'notifications.planSpike': 'Вчера был большой день. Сегодня начинаем полегче.',
  'notifications.planHeavyDay': 'Вчера вы долго были на ногах. Сегодня меняем на восстановление.',
  'notifications.planReturn': 'Пять дней перерыва. Сегодня начинаем на ступень легче.',
  'notifications.planBackUp': 'Болезненности больше нет — сегодня нагрузка возвращается.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'Как стопа сегодня?',
  'notifications.checkinOneTap': 'Одно касание перед сном — как ощущалось?',
  'notifications.checkinLog': 'Отметьте сегодня — и план будет знать, что делать завтра.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // Обе строки говорят, что касание сохраняет, и ни одна — что можно потерять.
  'notifications.streakKeep': {
    one: 'Одно касание сохраняет {count} день.',
    few: 'Одно касание сохраняет {count} дня.',
    many: 'Одно касание сохраняет {count} дней.',
  },
  'notifications.streakTap': {
    one: '{count} день. Одно касание.',
    few: '{count} дня. Одно касание.',
    many: '{count} дней. Одно касание.',
  },

  // ── Win-back ─────────────────────────────────────────────────────────────
  'notifications.winbackDay3': 'День {day} на месте, когда захотите.',
  'notifications.winbackDay10': 'План идёт по датам, а не по посещаемости. Сегодня день {day}.',
  'notifications.winbackDay30': 'Мы здесь, если стопа снова даст о себе знать.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  // Растянутые гласные — намеренно: это человек, который окликает вас вслед.
  'notifications.offerPleaNamed': '{name}, стоооп',
  'notifications.offerPlea': 'Стоооп',
  'notifications.offerPleaBody': 'Пожалуйстаа.',
  'notifications.offerDiscountTitle': 'Скидка {percent}% на 12-недельную программу',
  'notifications.offerDiscountBody': 'Нажмите, чтобы забрать.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  'notifications.expiryTitle': 'Доступ к программе закончится через неделю',
  'notifications.expiryBody': 'Ваш прогресс останется в любом случае.',
};
