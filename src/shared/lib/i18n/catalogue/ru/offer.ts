/**
 * Offer, in Russian — the paywall and the session player.
 *
 * Addressed as «вы», the register `core.ts` already established: warm, but a
 * coach rather than a friend. The one exception is the counter line inside a
 * running session, where the words are shouted at two metres and are single
 * directions rather than sentences.
 *
 * Nothing here is a price. Every amount arrives as `{price}` or `{perWeek}`,
 * already formatted for the user's storefront — see the note in `../en/offer.ts`.
 *
 * Plan titles are «На год» / «На неделю» rather than «Годовая» / «Недельная»:
 * the adjective alone leaves the reader to supply «подписка».
 */
export const OFFER_RU = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  'offer.featurePlanTitle': 'План под вас, а не шаблон',
  'offer.featurePlanBlurb': 'Собран по вашим ответам и пересобирается, когда они меняются.',
  'offer.featureAdaptiveTitle': 'Сессии, которые подстраиваются',
  'offer.featureAdaptiveBlurb': 'Каждая сессия учитывает, как прошла предыдущая.',
  'offer.featureProgressTitle': 'Прогресс, который видно',
  'offer.featureProgressBlurb': 'Смотрите, как готовность растёт неделя за неделей.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  'offer.comebackBadge': 'Цена за возвращение',
  'offer.inviteBadge': 'Цена по приглашению',
  'offer.headline': 'Откройте Walkito Premium',
  'offer.headlineInvite': 'Ваша цена по приглашению на год Walkito Premium',
  'offer.headlineComeback': 'Ваша цена за возвращение на год Walkito Premium',
  'offer.sub': 'Ваш план и всё, что вокруг него.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  'offer.annualTitle': 'На год',
  'offer.annualPrice': '{price} в год',
  'offer.annualNote': '{perWeek} в неделю, оплата раз в год',
  'offer.annualNoteSave': '{perWeek} в неделю · На {percent}% выгоднее, чем по неделям',
  'offer.weeklyTitle': 'На неделю',
  'offer.weeklyPrice': '{price} в неделю',
  'offer.weeklyNote': 'Оплата каждую неделю · Отмена в любой момент',
  'offer.badgeBest': 'Выгоднее всего',
  'offer.badgeOff': 'Скидка {percent}%',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.ctaAnnual': '{price} в год, продлевается автоматически. Отменить можно в любой момент.',
  'offer.ctaWeekly': '{price} в неделю, продлевается автоматически. Отменить можно в любой момент.',
  'offer.termsIncluded':
    'Walkito Premium открывает полный доступ: адаптивный план, все сессии и комплексы, ретесты и отслеживание прогресса.',
  'offer.termsAnnual': 'Подписка на год: {price} в год.',
  'offer.termsWeekly': 'Подписка на неделю: {price} в неделю.',
  'offer.termsRenewal':
    'Оплата списывается с вашего аккаунта Apple при подтверждении покупки. Подписка продлевается автоматически на тот же срок и по той же цене, если не отменить её не позднее чем за 24 часа до конца текущего периода; оплата за продление списывается в течение 24 часов до его окончания. Управлять подпиской и отменить её можно в Настройках → Аккаунт Apple → Подписки.',
  'offer.termsRenewalAndroid':
    'Оплата списывается с вашего аккаунта Google Play при подтверждении покупки. Подписка продлевается автоматически на тот же срок и по той же цене, если не отменить её не позднее чем за 24 часа до конца текущего периода. Управлять подпиской и отменить её можно в Google Play → Платежи и подписки → Подписки.',
  'offer.linkTerms': 'Условия использования',
  'offer.linkPrivacy': 'Политика конфиденциальности',
  'offer.restore': 'Восстановить покупки',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Этот вариант сейчас недоступен. Выберите другой.',
  'offer.storeUnreachable': 'Магазин сейчас недоступен. Попробуйте через минуту.',
  'offer.nothingRestored': 'Предыдущих покупок не найдено.',
  'offer.restoreFailed': 'Не получилось. Деньги не списаны.',
  'offer.purchaseFailed': 'Не получилось. Деньги не списаны.',
  'offer.purchaseNotAllowed': 'Покупки на этом устройстве отключены.',
  'offer.alreadyOwned': 'Это у вас уже есть. Нажмите «Восстановить покупки».',
  'offer.pending': 'Ждём подтверждения. Доступ откроется, как только оплата пройдёт.',
  'offer.notUnlocked': 'Оплата прошла, но доступ не открылся. Нажмите «Восстановить покупки».',
  'offer.continue': 'Продолжить',
  'offer.processing': 'Обработка…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'Вы в деле.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb': 'План открыт и начнёт подстраиваться уже со следующей сессии.',
  'offer.restoredTitle': 'С возвращением.',
  'offer.restoredBlurb': 'Подписка снова активна. Всё осталось на своих местах.',
  'offer.start': 'Начать',

  'offer.stepA11y': 'Шаг {step} из {total}',
  'offer.next': 'Далее',
  'offer.introTitle': 'Вот как начнётся ваш план',
  'offer.introTitleNamed': '{name}, вот как начнётся ваш план',
  'offer.introTodayWhen': 'Сегодня',
  'offer.introTodayTitle': { one: 'Тест на {count} минуту', few: 'Тест на {count} минуты', many: 'Тест на {count} минут' },
  'offer.introTodayBody': 'Икры, свод стопы и баланс. План начнётся с этих цифр.',
  'offer.introWeekWhen': 'Эта неделя',
  'offer.introWeekTitle': 'Спокойное начало',
  'offer.introWeekBody': {
    one: '{minutes} мин в день, {count} день в неделю. Силовые начнутся со следующей недели.',
    few: '{minutes} мин в день, {count} дня в неделю. Силовые начнутся со следующей недели.',
    many: '{minutes} мин в день, {count} дней в неделю. Силовые начнутся со следующей недели.',
  },
  'offer.introSundayWhen': 'Каждое воскресенье',
  'offer.introSundayTitle': 'Новая неделя по итогам прошлой',
  'offer.introSundayBody': 'Легче, если было тяжело, чуть больше, если было легко.',
  'offer.introCheckTitle': 'Первая проверка прогресса',
  'offer.introCheckBody': 'Тот же тест ещё раз. Видно, что изменилось, а дальше следующий шаг.',
  'offer.howTitle': 'Несколько минут в день. Вот как это работает.',
  'offer.howCheckinTitle': 'Отмечайтесь каждое утро',
  'offer.howCheckinBody': 'Десять секунд о том, как чувствуют себя стопы. По этому строится день.',
  'offer.howSessionTitle': 'Сделайте сессию дня',
  'offer.howSessionBody': 'От 3 до 10 минут. Сложнее становится, только когда прошлая далась легко.',
  'offer.howTestTitle': 'Тест каждые две недели',
  'offer.howTestBody': 'Икры, свод и баланс, в цифрах. Смотрите, как они меняются.',
  'offer.howQuote': '«Упражнения, которые помогают, известны давно. Просто никто не говорит, какие и сколько. Вот это мы и сделали.»',
  'offer.howQuoteBy': 'Рахим, делает Walkito вместе с другом Рахманом',
  'offer.startTitle': 'Начните план сегодня',
  'offer.startSub': 'Первая неделя готова. Она начинается с короткого теста.',
  'offer.chipWeekly': 'План на неделю',
  'offer.chipSessions': 'Короткие сессии',
  'offer.chipTests': 'Тест раз в две недели',
  'offer.chipRoutines': 'Комплексы при обострении и для бега',
  'offer.chipReminders': 'Напоминания',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Ваша подписка закончилась',
  'widgets.sessionLockedBody':
    'Всё, что вы записали, осталось здесь - читать можно по-прежнему. Чтобы снова проводить сессии, продолжите с того места, где остановились.',
  'widgets.sessionLockedCta': 'Посмотреть варианты',

  // ── Test day: the results ────────────────────────────────────────────────
  'widgets.retestYourGoal': 'Ваша цель',
  'widgets.retestGoal.painfree': 'Вы хотели утро без боли в пятке. Эти цифры - шаг к нему.',
  'widgets.retestGoal.race': 'Вы готовитесь к забегу. Сильные икры и крепкая стопа - это то, что вам нужно.',
  'widgets.retestGoal.consistent': 'Вы хотели заниматься регулярно. Вот что это даёт.',
  'widgets.retestGoal.stronger': 'Вы хотели стать сильнее. Здесь это видно первым делом.',
  'widgets.retestGoal.injuryfree': 'Вы хотели без травм. Крепкую стопу травмировать труднее.',

  'widgets.retestGoal.flatfeet': 'Вы пришли, чтобы взять плоскостопие под контроль. Сильный свод и устойчивый баланс - вот где это видно.',
  'widgets.retestGoal.ankles': 'Вы хотели устойчивые лодыжки. Баланс - первое, где это видно.',
  'widgets.retestGoal.jump': 'Вы хотели прыгать выше. Сильная икра - это пружина прыжка.',
  'widgets.retestGoal.allday': 'Вы хотели выдерживать день на ногах. Сильный свод держит час за часом.',
  'widgets.retestGoal.comeback': 'Вы возвращаетесь после травмы. Главная цифра - разница между ногами.',
  'widgets.retestGoal.steady': 'Вы хотели ходить уверенно. Баланс и сильная стопа - вот как это ощущается.',
  // ── Session player: the counter line ─────────────────────────────────────
  // Одно слово на каждую фазу: это читают с двух метров, стоя на одной ноге.
  'widgets.phaseUp': 'Вверх',
  'widgets.phaseHold': 'Держите',
  'widgets.phaseDown': 'Вниз',
  // «Нога», а не «стопа» — так это говорят вслух.
  'widgets.sideRight': 'Правая нога',
  'widgets.sideLeft': 'Левая нога',

  'widgets.sessionRepLine': '{phase} · Повтор {rep} из {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Повтор {rep} из {reps}',
  'widgets.sessionRepSpoken': '{phase}, повтор {rep} из {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, повтор {rep} из {reps}',
  'widgets.sessionPositionShort': 'Упражнение {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Упражнение {index}/{total}',
  'widgets.sessionPositionLong': 'Упражнение {index} из {total}',
  'widgets.sessionPositionLongSided': '{side}. Упражнение {index} из {total}',
  'widgets.sessionDone': 'Готово.',
  'widgets.sessionDoneSpoken': 'Готово',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'Видео не загрузилось. Указания остаются в силе.',
  'widgets.lockScreenHint': 'Заблокируйте телефон - таймер продолжит идти',
  'widgets.expandDemo': 'Развернуть демонстрацию',
  'widgets.collapseDemo': 'Свернуть демонстрацию',
  'widgets.sessionContinue': 'Продолжить',
  'widgets.sessionFinish': 'Завершить',
  'widgets.scrubberPrevious': 'Предыдущее упражнение',
  'widgets.scrubberNext': 'Следующее упражнение',
  'widgets.scrubberPlay': 'Воспроизвести',
  'widgets.scrubberPause': 'Пауза',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Хорошая работа.',
  'widgets.sessionStoppedTitle': 'Остановимся здесь.',
  'widgets.sessionStoppedBlurb': 'Сегодняшняя сессия всё равно засчитана. Завтра начнём на ступень легче.',

  'widgets.painButton': 'Болит',
  'widgets.painTitle': 'Насколько сильно сейчас?',
  'widgets.painCarryOn': 'Продолжайте аккуратно. Остановитесь, если станет сильнее.',
  'widgets.painPick': 'Выберите число - и мы скажем, что будет дальше.',
  'widgets.painLowHint': 'Лёгкий дискомфорт в этих упражнениях нормален. Сессия продолжится с того же места - двигайтесь мягче и нажмите на пластырь снова, если станет сильнее.',
  'widgets.painHighHint': 'Через такую боль тренироваться не стоит. Завершим сессию здесь - она засчитается за сегодня, а завтра план станет на шаг легче.',
  'widgets.painResume': 'Продолжить аккуратно',
  'widgets.painEnd': 'Завершить сессию',
  'widgets.painCancel': 'Отмена',
  'widgets.painClose': 'Закрыть',
  'widgets.sessionDoneStreak': {
    one: '{count} день подряд',
    few: '{count} дня подряд',
    many: '{count} дней подряд',
  },
  'widgets.sessionDoneBlurb': {
    one: '{count} упражнение сделано. Понемногу и регулярно - так это и сдвигается.',
    few: 'Все {count} упражнения сделаны. Понемногу и регулярно - так это и сдвигается.',
    many: 'Все {count} упражнений сделаны. Понемногу и регулярно - так это и сдвигается.',
  },
};
