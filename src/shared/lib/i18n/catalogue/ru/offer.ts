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
  'offer.limited': 'ТОЛЬКО СЕЙЧАС — ОДИН РАЗ',
  'offer.inviteBadge': 'ЦЕНА ПО ПРИГЛАШЕНИЮ',
  'offer.headlineInvite': 'Ваша цена по приглашению: 12-недельная программа',
  'offer.headlineComeback': 'Ваша цена за возвращение: 12-недельная программа',
  'offer.headlineSave': {
    one: 'Заплатите один раз за {count} месяц и сэкономьте {percent}%',
    few: 'Заплатите один раз за {count} месяца и сэкономьте {percent}%',
    many: 'Заплатите один раз за {count} месяцев и сэкономьте {percent}%',
  },
  'offer.headlinePlain': {
    one: 'Заплатите один раз за {count} месяц — или платите помесячно',
    few: 'Заплатите один раз за {count} месяца — или платите помесячно',
    many: 'Заплатите один раз за {count} месяцев — или платите помесячно',
  },
  'offer.subWeeks': {
    one: 'Ваш план на {count} неделю и всё, что вокруг него.',
    few: 'Ваш план на {count} недели и всё, что вокруг него.',
    many: 'Ваш план на {count} недель и всё, что вокруг него.',
  },
  'offer.sub': 'Ваш план и всё, что вокруг него.',

  // ── Paywall: the two rows ────────────────────────────────────────────────
  'offer.programTitle': '12-недельная программа',
  'offer.programPrice': '{price} разово',
  'offer.programNote': {
    one: '{count} месяц доступа · {perWeek}/нед. · Без подписки',
    few: '{count} месяца доступа · {perWeek}/нед. · Без подписки',
    many: '{count} месяцев доступа · {perWeek}/нед. · Без подписки',
  },
  // Согласовано с «программой» в названии строки.
  'offer.programActive': 'Активна',
  'offer.programActiveUntil': 'До {date}',
  'offer.badgeOff': 'СКИДКА {percent}%',
  'offer.badgeSave': 'ЭКОНОМИЯ {percent}%',
  'offer.monthlyTitle': 'Помесячно',
  'offer.monthlyPrice': '{price}/мес.',
  'offer.monthlyNote': '{perWeek}/нед. · Отмена в любой момент',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  'offer.termsProgram':
    '12-недельная программа: разовый платёж {price} за 12 недель доступа. Не продлевается, повторно деньги не списываются.',
  'offer.termsMonthly':
    'Помесячно: {price} в месяц. Продлевается автоматически, если не отменить подписку не позднее чем за 24 часа до конца текущего периода. Управлять подпиской или отменить её можно в настройках учётной записи App Store.',
  'offer.linkTerms': 'Условия',
  'offer.linkPrivacy': 'Конфиденциальность',
  'offer.restore': 'Восстановить покупки',

  // ── Paywall: what the store said ─────────────────────────────────────────
  'offer.planUnavailable': 'Этот вариант сейчас недоступен. Выберите другой.',
  'offer.storeUnreachable': 'App Store сейчас недоступен. Попробуйте через минуту.',
  'offer.nothingRestored': 'На этом Apple ID покупок не найдено.',
  'offer.restoreFailed': 'Не получилось. Деньги не списаны.',
  'offer.continue': 'Продолжить',
  'offer.processing': 'Обработка…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'Вы в деле.',
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb': 'План открыт и начнёт подстраиваться уже со следующей сессии.',
  'offer.restoredTitle': 'С возвращением.',
  'offer.restoredBlurb': 'Подписка снова активна. Всё осталось на своих местах.',
  'offer.start': 'Начать',

  // ── Session player: the locked state ─────────────────────────────────────
  'widgets.sessionLockedTitle': 'Ваша программа завершилась',
  'widgets.sessionLockedBody':
    'Всё, что вы записали, осталось здесь — читать можно по-прежнему. Чтобы снова проводить сессии, продолжите с того места, где остановились.',
  'widgets.sessionLockedCta': 'Посмотреть варианты',

  // ── Session player: the retest ───────────────────────────────────────────
  'widgets.retestCalfRaises': 'Подъёмы на носки до отказа',
  'widgets.retestArchHold': 'Удержание свода стопы',
  'widgets.retestBalance': 'Баланс на одной ноге',

  'widgets.retestEntryTitle': 'Ваши результаты',
  'widgets.retestEntryBlurb': 'Запишите, сколько получилось. Чем честнее цифры, тем полезнее сравнение.',
  'widgets.retestLeft': 'Левая нога',
  'widgets.retestRight': 'Правая нога',
  'widgets.retestLeftSore': 'Левая нога — та, что болит',
  'widgets.retestRightSore': 'Правая нога — та, что болит',
  'widgets.retestSeconds': 'Секунды',
  'widgets.retestLess': 'Меньше',
  'widgets.retestMore': 'Больше',
  'widgets.retestSave': 'Сохранить',
  'widgets.retestResultTitle': 'Ваш результат',
  'widgets.retestResultBlurb': 'Сравниваем только с вами прошлыми.',
  'widgets.retestChange': '{from} → {to}',
  'widgets.retestLevel': 'Ур. {level}',
  'widgets.retestDone': 'Готово',
  'widgets.retestUnitReps': 'раз',
  'widgets.retestUnitSeconds': 'сек',
  'widgets.retestUnitPercent': '%',
  'widgets.retestGapNote': 'разница между ногами',
  'widgets.retestYourGoal': 'Ваша цель',
  'widgets.retestFirstCaption': 'Это ваша точка отсчёта. Через две недели увидите, что изменилось.',
  'widgets.retestGoal.painfree': 'Вы хотели утро без боли в пятке. Эти цифры — шаг к нему.',
  'widgets.retestGoal.race': 'Вы готовитесь к забегу. Сильные икры и крепкая стопа — это то, что вам нужно.',
  'widgets.retestGoal.consistent': 'Вы хотели заниматься регулярно. Вот что это даёт.',
  'widgets.retestGoal.stronger': 'Вы хотели стать сильнее. Здесь это видно первым делом.',
  'widgets.retestGoal.injuryfree': 'Вы хотели без травм. Крепкую стопу травмировать труднее.',

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
  'widgets.lockScreenHint': 'Заблокируйте телефон — таймер продолжит идти',
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
  'widgets.painBlurb': 'До 5 можно продолжать. От 5 и выше остановимся, а завтра будет легче.',
  'widgets.painCarryOn': 'Продолжайте аккуратно. Остановитесь, если станет сильнее.',
  'widgets.painClose': 'Закрыть',
  'widgets.sessionDoneStreak': {
    one: '{count} день подряд',
    few: '{count} дня подряд',
    many: '{count} дней подряд',
  },
  'widgets.sessionDoneBlurb': {
    one: '{count} упражнение сделано. Понемногу и регулярно — так это и сдвигается.',
    few: 'Все {count} упражнения сделаны. Понемногу и регулярно — так это и сдвигается.',
    many: 'Все {count} упражнений сделаны. Понемногу и регулярно — так это и сдвигается.',
  },
};
