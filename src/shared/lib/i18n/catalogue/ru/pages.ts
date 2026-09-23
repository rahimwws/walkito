/**
 * Russian. See `../en/pages.ts` for what this domain covers and `../ru/core.ts`
 * for the register — «вы», warm but not familiar.
 *
 * Dates are not here for the reason given in the English file: `Intl` knows
 * them, and it knows that Russian writes «вт, 12 авг.» in lower case where
 * English writes "Tue, Aug 12".
 */

export const PAGES_RU = {
  // ── Day sheet ────────────────────────────────────────────────────────────
  'pages.day.notInPlan': 'Этого дня нет в вашем плане.',

  'pages.day.retestEyebrow': 'Ретест · День {day}',
  'pages.day.blockTitle': 'Блок {block} · {name}',
  'pages.day.retestResultSubtitle': 'Где вы были к концу блока',
  'pages.day.share': 'Поделиться',
  'pages.day.shareRow': '{zone}: {from} → {to} ({level})',

  'pages.day.retestTodayTitle': 'Пора проверить прогресс',
  'pages.day.retestMeta': '{tests} · {minutes}',
  'pages.day.retestTodayNote':
    'Сегодня ничего не тренируем. Тесты показывают, к чему привёл блок, и только они меняют уровень.',
  'pages.day.startRetest': 'Начать ретест',
  'pages.day.retestMissed': 'Этот ретест не был пройден. Уровни остались с прошлого раза.',
  'pages.day.retestClosesBlock': 'Ретест · закрывает блок {block}',
  'pages.day.retestOpensOn': 'Откроется {date}. До тех пор уровни не меняются.',

  'pages.day.sessionTitle': '{kind} · {minutes}',
  'pages.day.sessionSubtitle': 'День {day} · Блок {block} · {name}',
  'pages.day.missedNote':
    'Сессия не отмечена. Навёрстывать нечего — программа идёт по датам, и следующий день просто следующий.',
  'pages.day.painLabel': 'Боль в тот день',
  'pages.day.painOutOf': '/ {max}',
  // «Будет вт, 12 авг.» would need a preposition the short date cannot take, so
  // the line states the plan instead of the arrival.
  'pages.day.comesUpOn': 'По плану — {date}.',

  // ── Program ──────────────────────────────────────────────────────────────
  'pages.program.closeA11y': 'Закрыть программу',
  'pages.program.headerMeta': '{date} · Блок {block} из {total}',

  'pages.program.kindStrength': 'Сила',
  // Same word as `exercises.category.mobility`, on purpose: the card and the
  // chip inside it must not name the same work two ways.
  'pages.program.kindMobility': 'Подвижность',
  'pages.program.kindBalance': 'Баланс',
  'pages.program.kindRecovery': 'Восстановление',
  'pages.program.retest': 'Ретест',

  'pages.program.testCount': {
    one: '{count} тест',
    few: '{count} теста',
    many: '{count} тестов',
  },
  'pages.program.minuteCount': {
    one: '{count} минута',
    few: '{count} минуты',
    many: '{count} минут',
  },

  'pages.program.dayCardA11y': 'День {day}, {kind}, {minutes}',
  'pages.program.moveWithDose': '{title} · {dose}',
  'pages.program.zoneCalf': 'Икра',
  'pages.program.zoneArch': 'Свод',
  'pages.program.zoneBalance': 'Баланс',
  'pages.program.zoneSymmetry': 'Симметрия',

  'pages.program.statSession': 'Сессия',
  'pages.program.statTests': 'Тесты',
  'pages.program.statExercises': 'Упражнения',
  'pages.program.getStarted': 'Начать',
  'pages.program.startNow': 'Начать сейчас',

  'pages.program.blockSeam': 'БЛОК {index} · {name}',
  // The participle agrees with the count, which is why all three forms differ:
  // «1 день пройден», but «2 дня пройдено».
  'pages.program.blockAllDone': {
    one: '{count} день пройден',
    few: '{count} дня пройдено',
    many: '{count} дней пройдено',
  },
  'pages.program.blockProgress': '{done} из {length} пройдено',
  'pages.program.blockDays': 'Дни {start}–{end}',
  'pages.program.blockAbout1':
    'Успокаиваем стопу. Растяжки и мягкое движение — никакой нагрузки.',
  'pages.program.blockAbout2':
    'Начинается силовая работа. Подъёмы на носок с полотенцем двигают боль, короткая стопа сидя меняет свод. Обычно к 20-му дню приходит первое заметное облегчение.',
  'pages.program.blockAbout3':
    'Нагрузка растёт: подъёмы 4 × 10 с рюкзаком, а короткая стопа встаёт со стула — теперь свод работает под весом тела. Первые изменения свода обычно видны с шестой недели.',
  'pages.program.blockAbout4':
    'Подъёмы доходят до 5 × 8 — это максимум программы. Короткая стопа переходит на одну ногу, и появляется резинка — только теперь, когда закрепились мышцы внутри стопы.',
  'pages.program.blockAbout5':
    'Подключается бедро. Слабая ягодичная опускает свод, поэтому контроль поднимается выше по цепи, а нагрузка на стопу остаётся как в блоке 4.',
  'pages.program.blockAbout6':
    'Это уже не лечение, а поддержка. Полотенце убирается, подъёмы становятся легче — 3 × 15, и добавляется время босиком дома. Это режим, который остаётся с вами.',
  'pages.program.finishDay': 'ДЕНЬ {day}',
  'pages.program.finishCaption': 'Программа пройдена',

  // ── Welcome ──────────────────────────────────────────────────────────────
  'pages.welcome.hint': 'Проведите вверх, чтобы войти',
  'pages.welcome.a11yHint': 'Проведите вверх, чтобы открыть экран, и вниз, чтобы закрыть',

  // «Тренируйте ~~поддерживайте~~ свои стопы» — the struck verb is what the
  // insole aisle promises, and Russian can cross out a verb in exactly the same
  // place English does, so the three parts map one to one here.
  'pages.welcome.headline': 'Тренируйте',
  'pages.welcome.struck': 'поддерживайте',
  'pages.welcome.kept': 'свои стопы',

  // Each phrase continues «…свои стопы», so they are relative clauses agreeing
  // with «стопы» rather than the bare fragments English gets away with.
  'pages.welcome.phrase1': 'которые болят каждое утро',
  'pages.welcome.phrase2': 'после трёх пар стелек',
  'pages.welcome.phrase3': 'чтобы долгая пробежка не стоила вам недели',
  'pages.welcome.phrase4': 'чтобы снова бегать',
  'pages.welcome.cta': 'Поехали',

  // ── Expired ──────────────────────────────────────────────────────────────
  'pages.expired.title': 'Ваши 12 недель пройдены',
  'pages.expired.lede': {
    one: '{count} сессия. Вот что изменилось.',
    few: '{count} сессии. Вот что изменилось.',
    many: '{count} сессий. Вот что изменилось.',
  },
  'pages.expired.ledeNoSessions': 'Вот с чем вы закончили.',
  // The exercise's own name, as `exercises.heelRaiseTowel.title` writes it.
  'pages.expired.calfRaises': 'Подъёмы на носки',
  'pages.expired.morningPain': 'Утренняя боль',
  'pages.expired.nothingMeasured': 'Ваши записи и ретесты никуда не делись.',
  'pages.expired.keeps': 'История сохранится в любом случае.',
  'pages.expired.storeUnreachable': 'App Store сейчас недоступен. Попробуйте через минуту.',
  'pages.expired.busy': 'Секунду…',
  'pages.expired.monthly': 'Продлить помесячно · {price}',
  'pages.expired.program': 'Ещё 12 недель · {price}',
  'pages.expired.programInvite': 'Ещё 12 недель по цене приглашения · {price}',
  'pages.expired.notNow': 'Не сейчас',
};
