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
    'Сессия не отмечена. Навёрстывать нечего - программа идёт по датам, и следующий день просто следующий.',
  'pages.day.painLabel': 'Боль в тот день',
  'pages.day.painOutOf': '/ {max}',
  // «Будет вт, 12 авг.» would need a preposition the short date cannot take, so
  // the line states the plan instead of the arrival.
  'pages.day.comesUpOn': 'По плану - {date}.',

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

  'pages.program.blockSeam': 'Блок {index} · {name}',
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
    'Успокаиваем стопу. Растяжки и мягкое движение - никакой нагрузки.',
  'pages.program.blockAbout2':
    'Начинается силовая работа. Подъёмы на носок с полотенцем двигают боль, короткая стопа сидя меняет свод. Обычно к 20-му дню приходит первое заметное облегчение.',
  'pages.program.blockAbout3':
    'Нагрузка растёт: подъёмы 4 × 10 с рюкзаком, а короткая стопа встаёт со стула - теперь свод работает под весом тела. Первые изменения свода обычно видны с шестой недели.',
  'pages.program.blockAbout4':
    'Подъёмы доходят до 5 × 8 - это максимум программы. Короткая стопа переходит на одну ногу, и появляется резинка - только теперь, когда закрепились мышцы внутри стопы.',
  'pages.program.blockAbout5':
    'Подключается бедро. Слабая ягодичная опускает свод, поэтому контроль поднимается выше по цепи, а нагрузка на стопу остаётся как в блоке 4.',
  'pages.program.blockAbout6':
    'Это уже не лечение, а поддержка. Полотенце убирается, подъёмы становятся легче - 3 × 15, и добавляется время босиком дома. Это режим, который остаётся с вами.',
  'pages.program.finishDay': 'День {day}',
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
  'pages.expired.title': 'Ваша подписка закончилась',
  'pages.expired.titlePass': 'Ваши 3 месяца закончились',
  'pages.expired.lede': {
    one: '{count} сессия. Вот что изменилось.',
    few: '{count} сессии. Вот что изменилось.',
    many: '{count} сессий. Вот что изменилось.',
  },
  'pages.expired.ledeNoSessions': 'Вот на чём вы остановились.',
  // The exercise's own name, as `exercises.heelRaiseTowel.title` writes it.
  'pages.expired.calfRaises': 'Подъёмы на носки',
  'pages.expired.morningPain': 'Утренняя боль',
  'pages.expired.nothingMeasured': 'Ваши записи и ретесты никуда не делись.',
  'pages.expired.keeps': 'История сохранится в любом случае.',
  'pages.expired.busy': 'Секунду…',
  'pages.expired.plansTitle': 'Продолжите с того же места',
  'pages.expired.renew': 'Возобновить подписку',
  'pages.expired.keepGoing': 'Продолжить',
  'pages.expired.notNow': 'Не сейчас',
  'pages.week.headerMeta': '{date} · Неделя {n}',
  'pages.week.seam': 'Эта неделя · {goal}',
  'pages.week.goal.pain_free_mornings': 'Лёгкие утра',
  'pages.week.goal.arch_hold': 'Сильный свод',
  'pages.week.goal.calf_raises': 'Сильные икры',
  'pages.week.goal.balance': 'Лучше баланс',
  'pages.week.goal.symmetry': 'Ровные стопы',
  'pages.week.line.pain_free_mornings': 'Боль утром {current} → {target}',
  'pages.week.line.arch_hold': 'Удержание свода {current} с → {target} с',
  'pages.week.line.calf_raises': 'Подъёмы на носок {current} → {target}',
  'pages.week.line.balance': 'Баланс {current} с → {target} с',
  'pages.week.line.symmetry': 'Разница левой и правой {current}% → меньше {target}%',
  'pages.week.lineUnmeasured': '{goal} - измерим на следующем тесте',
  'pages.week.rationale.first': 'Эта неделя успокаивает стопу. Силовая работа начнётся со следующей.',
  'pages.week.rationale.painUp': 'На этой неделе боль выросла, поэтому план делает шаг назад.',
  'pages.week.rationale.hard': 'Прошлая неделя далась тяжело. Эта будет легче.',
  'pages.week.rationale.easy': 'Прошлая неделя далась легко. Пора чуть добавить.',
  'pages.week.rationale.painLow': 'Всю неделю боль оставалась слабой, поэтому добавляем нагрузку.',
  'pages.week.rationale.newFocus': 'Новая цель: {goal}. {line}.',
  'pages.week.rationale.default': 'На этой неделе работаем над целью «{goal}»: {line}.',
  'pages.week.newThisWeek': 'Новое на этой неделе: {exercise}',
  'pages.week.testIn': { one: 'Тест через {count} день', few: 'Тест через {count} дня', many: 'Тест через {count} дней' },
  'pages.week.testToday': 'Тест сегодня',
  'pages.week.adjusts': 'Подстроится под то, как стопа будет в тот день.',
  'pages.week.skipped': 'Пропущено - догонять не нужно.',
  'pages.week.rest': 'День отдыха',
  'pages.week.shortVersion': 'Версия на 2 минуты',
  'pages.plan.notUpForIt': 'Нет сил? Сделайте версию на 2 минуты',
  'pages.plan.reasonHeavyDay': 'Вчера был большой день - сегодня полегче, без шага вперёд.',
  'pages.plan.reasonShortSleep': 'Мало спали - сегодня на шаг легче.',
  'pages.exerciseSheet.why': 'Зачем это в плане',
  'pages.week.nextWeek': 'Следующая неделя',
  'pages.week.nextWeekFocus': 'Цель: {goal}',
  'pages.week.nextGoal': 'Следующая цель: {goal}',
  'pages.week.dayCardA11y': '{day}, {kind}, {minutes}',
  'pages.plan.title': 'Ваш план',
  'pages.plan.goalEyebrow': 'Ваша цель',
  'pages.plan.short.pain_free_mornings': 'утро',
  'pages.plan.short.arch_hold': 'свод',
  'pages.plan.short.calf_raises': 'икры',
  'pages.plan.short.balance': 'баланс',
  'pages.plan.short.symmetry': 'обе стопы',
  'pages.plan.todayEyebrow': 'Сегодня',
  'pages.plan.todayTitle': '{kind} · {goal}',
  'pages.plan.easyDay': 'Лёгкий день · сидя',
  'pages.plan.start': 'Начать',
  'pages.plan.testTitle': 'День теста',
  'pages.plan.testBody': {
    one: '{count} короткий тест на время, всего около {minutes} мин. Он покажет, что дали тренировки, и план подстроится под результат.',
    few: '{count} коротких теста на время, всего около {minutes} мин. Они покажут, что дали тренировки, и план подстроится под результаты.',
    many: '{count} коротких тестов на время, всего около {minutes} мин. Они покажут, что дали тренировки, и план подстроится под результаты.',
  },
  'pages.plan.rest': 'День отдыха. Если хочется - растяжка на 2 минуты.',
  'pages.plan.nextSessionOn': 'Следующее занятие: {day}, {kind}.',
  'pages.plan.seeResults': 'Посмотреть результаты',
  'pages.plan.upcoming': 'Дальше',
  'pages.plan.upcomingEnd': 'Это вся неделя. План на следующую придёт в воскресенье.',
  'pages.plan.row': '{day} · {kind}',
  'pages.plan.rowGoal': '{day} · {kind} · {goal}',
  'pages.plan.stripToday': 'сегодня',
  'pages.plan.stripRest': 'отдых',
  'pages.plan.reached': '{goal} - готово. Дальше: {next}.',
  'pages.plan.seeNextGoal': 'К следующей цели',
  'pages.plan.chipPreviewA11y': '{name}, просмотр',
  'pages.plan.outcome.sport.running': 'Бег',
  'pages.plan.outcome.sport.tennis': 'Теннис',
  'pages.plan.outcome.sport.gym': 'Зал',
  'pages.plan.outcome.sport.football': 'Футбол',
  'pages.plan.outcome.sport.basketball': 'Баскетбол',
  'pages.plan.outcome.sport.cycling': 'Велосипед',
  'pages.plan.outcome.sport.hiking': 'Походы',
  'pages.plan.outcome.sport.none': 'Каждый день',
  'pages.plan.outcome.sportFor.running': 'бега',
  'pages.plan.outcome.sportFor.tennis': 'тенниса',
  'pages.plan.outcome.sportFor.gym': 'зала',
  'pages.plan.outcome.sportFor.football': 'футбола',
  'pages.plan.outcome.sportFor.basketball': 'баскетбола',
  'pages.plan.outcome.sportFor.cycling': 'велосипеда',
  'pages.plan.outcome.sportFor.hiking': 'походов',
  'pages.plan.outcome.sportFor.none': 'каждого дня',
  'pages.plan.outcome.painfree': '{sport} [без боли]',
  'pages.plan.outcome.injury_free': '[Крепкие] ноги для {sport}',
  'pages.plan.outcome.flat_feet': 'Мышцы, которые [держат] свод',
  'pages.plan.outcome.stronger': '[Сильные] ноги для {sport}',
  'pages.plan.outcome.stable_ankles': '[Устойчивые] лодыжки',
  'pages.plan.outcome.jump_higher': 'Прыгать [выше]',
  'pages.plan.outcome.race_ready': 'Ноги, [готовые] к забегу',
  'pages.plan.outcome.all_day': 'На ногах [весь день]',
  'pages.plan.outcome.comeback': '[Вернуться] после травмы',
  'pages.plan.outcome.steady': '[Уверенный] шаг',
  'pages.plan.outcome.done': 'Все шаги пройдены. Теперь держим результат.',
  'pages.plan.nextWeek': 'Следующая неделя',
  'pages.plan.nextWeekHow': 'Каждое воскресенье вечером план на новую неделю собирается заново - по вашим отметкам боли, тестам и тому, насколько тяжело шли занятия.',
  'pages.plan.nextWeekSummary': '{sessions} · фокус: {goal}',
  'pages.plan.sessionCount': { one: '{count} занятие', few: '{count} занятия', many: '{count} занятий' },
  'pages.plan.restDay': 'Отдых',

  // ── Упражнения на сегодня и награды ─────────────────────────────────────
  'pages.plan.movesTitle': 'Упражнения на сегодня',
  'pages.plan.movesProgress': '{done} / {total}',
  'pages.plan.movesDoneA11y': 'Сделано {done} из {total}',
  'pages.plan.moveDoneA11y': '{name}, сделано',
  'pages.plan.rewardTitle': 'Награды',
  'pages.plan.rewardStreakStart': 'Закончите сегодня - и начнётся отсчёт дней подряд.',
  'pages.plan.rewardStreak': {
    one: 'Закончите сегодня - и будет {count} день подряд.',
    few: 'Закончите сегодня - и будет {count} дня подряд.',
    many: 'Закончите сегодня - и будет {count} дней подряд.',
  },
  'pages.plan.rewardSticker': 'Следующая наклейка: {name}.',
  'pages.plan.rewardStickerLast': 'Закончите сегодня - и получите наклейку: {name}.',
  'pages.plan.rewardStickerCount': '{have} / {need}',
  'pages.plan.rewardStickerCountA11y': '{have} из {need}',

  // ── Законченный день: что он принёс, и завтра ──────────────────────────
  'pages.plan.earnedMinutes': 'Минуты',
  'pages.plan.earnedMoves': 'Упражнения',
  'pages.plan.earnedTests': 'Тесты',
  'pages.plan.earnedStreak': 'Дней подряд',
  'pages.plan.earnedMinutesA11y': {
    one: 'Сегодня {count} минута',
    few: 'Сегодня {count} минуты',
    many: 'Сегодня {count} минут',
  },
  'pages.plan.earnedMovesA11y': {
    one: 'Сегодня сделано {count} упражнение',
    few: 'Сегодня сделано {count} упражнения',
    many: 'Сегодня сделано {count} упражнений',
  },
  'pages.plan.earnedTestsA11y': {
    one: 'Сегодня пройден {count} тест',
    few: 'Сегодня пройдено {count} теста',
    many: 'Сегодня пройдено {count} тестов',
  },
  'pages.plan.earnedStickerLast': 'Ещё одно занятие - и наклейка ваша: {name}.',
  'pages.plan.tomorrowEyebrow': 'Завтра',
  'pages.plan.opensIn': 'Откроется через {time}',
  'pages.plan.doneToday': 'На сегодня всё',

  // ── Недели цели: эта и следующая на линии, дни теста между ними ───────
  'pages.plan.path.now': 'Сейчас',
  'pages.plan.path.done': 'Пройден',
  'pages.plan.path.testToday': 'День теста · сегодня',
  'pages.plan.path.testTomorrow': 'День теста · завтра',
  'pages.plan.path.testIn': {
    one: 'День теста · через {count} день',
    few: 'День теста · через {count} дня',
    many: 'День теста · через {count} дней',
  },
  'pages.plan.path.testOn': 'День теста · {date}',
  'pages.plan.weeks.about.pain_free_mornings': 'Ежедневная растяжка и мягкая нагрузка для первых шагов утром.',
  'pages.plan.weeks.about.arch_hold': 'Тренируем мелкие мышцы стопы, которые держат свод.',
  'pages.plan.weeks.about.calf_raises': 'Наращиваем выносливость икры и ахиллова сухожилия.',
  'pages.plan.weeks.about.balance': 'Тренируем, как стопа и голеностоп чувствуют опору.',
  'pages.plan.weeks.about.symmetry': 'Больше работы для слабой ноги, чтобы сократить разницу с другой.',
  'pages.plan.weeks.this': 'Эта неделя',
  'pages.plan.weeks.nextFrom': 'Следующая неделя · с {date}',
  'pages.plan.weeks.title.settling': 'Успокоить стопу',
  'pages.plan.weeks.title.pain_free_mornings': 'Облегчить утро',
  'pages.plan.weeks.title.arch_hold': 'Укрепить свод',
  'pages.plan.weeks.title.calf_raises': 'Укрепить икры',
  'pages.plan.weeks.title.balance': 'Тренировать равновесие',
  'pages.plan.weeks.title.symmetry': 'Выровнять ноги',
  'pages.plan.weeks.title.keep': 'Сохранить результат',
  'pages.plan.weeks.change.settling': 'Только мягкие упражнения, пока стопы привыкают к нагрузке.',
  'pages.plan.weeks.change.settlingSeated': 'Только упражнения сидя, пока стопы привыкают к нагрузке.',
  'pages.plan.weeks.change.down': 'На уровень легче, чем неделей раньше, чтобы было комфортно.',
  'pages.plan.weeks.change.up': 'Шаг вверх: {exercise}.',
  'pages.plan.weeks.change.newMove': 'Новое упражнение: {exercise}.',
  'pages.plan.weeks.change.opens': 'Привыкание позади: упражнения могут усложниться, когда два занятия подряд покажутся лёгкими.',
  'pages.plan.weeks.change.same': 'Тот же уровень, что неделей раньше, чтобы работа закрепилась.',
  'pages.plan.weeks.change.keep': 'Работа полегче, чтобы сохранить достигнутое.',
  'pages.plan.weeks.days': { one: '{count} день', few: '{count} дня', many: '{count} дней' },
  'pages.plan.weeks.minutes': 'по {minutes} мин',
  'pages.plan.weeks.newTag': 'Новое',
  'pages.plan.weeks.more': 'Ещё {n}',
  'pages.plan.weeks.after':
    'Следующие недели планируются по одной, каждое воскресенье вечером, по вашим отметкам, тестам и тому, как шли занятия.',
};
