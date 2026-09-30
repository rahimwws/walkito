/**
 * Russian.
 *
 * Typed as `CatalogueFor<'ru'>`, which is what enforces the two things a
 * translator forgets: every key present, and every plural entry carrying its
 * `few` form. Omitting `few` is a compile error here — it is the form that
 * covers 2, 3, 4, 22, 23, 24, and without it the app renders "2 дней".
 *
 * Sentences are rewritten rather than transposed. `streak.title` is the
 * clearest case: English's "3 Days Streak" has no Russian word order, so the
 * idiom Russians actually use for a streak — "{count} дней подряд", days in a
 * row — is what is written, and the fact that it shares no structure with the
 * English is the point of holding whole templates per language.
 */
export const CORE_RU = {
  // ── Language picker ──────────────────────────────────────────────────────
  'language.title': 'Язык',
  'language.system': 'Системный',
  'language.systemHint': 'Как на устройстве - {language}',
  'language.note': 'Выбор сохранится на этом устройстве.',
  'language.a11yLabel': 'Язык, {language}',
  'language.a11yHint': 'Меняет язык приложения',

  'error.title': 'Что-то пошло не так',
  'error.body': 'Ваш план и прогресс на месте. Попробуйте ещё раз.',
  'error.retry': 'Попробовать ещё раз',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Настройки',
  'settings.terms': 'Условия использования',
  'settings.termsHint': 'Соглашение о подписке',
  'settings.privacy': 'Политика конфиденциальности',
  'settings.privacyHint': 'Что мы храним и где',
  'settings.unpublished': 'Ещё не опубликовано',
  'settings.email.section': 'Письма',
  'settings.email.address': 'Приходят на {email}',
  'settings.email.none': 'Адреса пока нет. Он появится после входа.',
  'settings.email.unavailable': 'Не удалось загрузить настройки писем. Попробуйте, когда будет интернет.',
  'settings.email.tips': 'Советы и напоминания',
  'settings.email.weekly': 'Итоги недели',
  'settings.email.unsubscribeAll': 'Отписаться от всех писем',
  'settings.email.unsubscribed': 'Писем не будет. Включите любой переключатель, чтобы вернуть их.',
  'settings.write': 'Написать Рахиму',
  'settings.writeHint': 'Каждое письмо читает человек',
  'settings.writeSubject': 'Walkito',
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  'settings.planSection': 'Ваш план',
  'settings.outcome': 'Ваша цель',
  'settings.outcome.painfree': 'Без боли',
  'settings.outcome.flat_feet': 'Плоскостопие',
  'settings.outcome.stronger': 'Сильные ноги',
  'settings.outcome.injury_free': 'Крепкие ноги',
  'settings.outcome.stable_ankles': 'Устойчивые лодыжки',
  'settings.outcome.jump_higher': 'Прыгать выше',
  'settings.outcome.race_ready': 'К забегу',
  'settings.outcome.all_day': 'Весь день на ногах',
  'settings.outcome.comeback': 'После травмы',
  'settings.outcome.steady': 'Уверенный шаг',
  'settings.daysPerWeek': 'Дней в неделю',
  'settings.minutesPerDay': 'Минут в день',
  'settings.whichFoot': 'Какая стопа',
  'settings.footLeft': 'Левая',
  'settings.footRight': 'Правая',
  'settings.footBoth': 'Обе',
  'settings.whereItHurts': 'Где болит',
  'settings.whereItHurtsNone': 'Ничего не отмечено',
  'settings.equipment': 'Что есть дома',
  'settings.equipment.step': 'Ступенька',
  'settings.equipment.band': 'Эспандер-лента',
  'settings.equipment.towel': 'Полотенце',
  'settings.equipment.pillow': 'Подушка',
  'settings.equipment.ball': 'Массажный мяч',
  'settings.account.saveTitle': 'Сохраните прогресс',
  'settings.account.saveBody': 'Войдите через Apple, и план, отметки и тесты вернутся на новом телефоне или после переустановки.',
  'settings.account.saveBodyGoogle': 'Войдите через Google, и план, отметки и тесты вернутся на новом телефоне или после переустановки.',
  'settings.account.signedIn': 'Вход через Apple выполнен. Прогресс сохраняется в аккаунте.',
  'settings.lastSync': 'Последняя синхронизация: {time}',
  'settings.lastSyncNever': 'Ещё не синхронизировано',
  'settings.reminder': 'Время напоминания',
  'settings.disclaimer':
    'Walkito - помощник в тренировках, а не медицинская рекомендация. Приложение не ставит диагнозов и не лечит. Если боль острая, усиливается или сопровождается отёком, онемением или температурой, остановитесь и обратитесь к врачу.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'streak.title': {
    one: '{count} день подряд',
    few: '{count} дня подряд',
    many: '{count} дней подряд',
  },
  'streak.milestoneBlurb': 'Каждый из этих дней засчитан.',
  'streak.milestoneBigBlurb': 'Десять дней. Здесь привычка начинает держаться.',
  'streak.rule':
    'День засчитан, если вы отметили боль, провели сессию, прошли комплекс из библиотеки или план сам назначил отдых.',
  'streak.total': {
    one: 'Всего {count} день.',
    few: 'Всего {count} дня.',
    many: 'Всего {count} дней.',
  },
  'streak.dismiss': 'Понятно',
  'streak.dayCount': {
    one: '{count} день',
    few: '{count} дня',
    many: '{count} дней',
  },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  'session.day': 'День {day}',
  // Abbreviated, so all three forms are the same word — but still a plural
  // entry, because the type forbids flattening one and the abbreviation is a
  // Russian decision rather than a shared fact.
  'session.minutes': { one: '{count} мин', few: '{count} мин', many: '{count} мин' },
  'session.moveCount': {
    one: '{count} упражнение',
    few: '{count} упражнения',
    many: '{count} упражнений',
  },
  'session.secondsLeftA11y': {
    one: 'осталась {count} секунда',
    few: 'осталось {count} секунды',
    many: 'осталось {count} секунд',
  },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Пригласить друга',
  'gift.blurb': {
    one: 'Другу - {percent}% скидки. Вам - {count} бесплатная неделя за каждого друга.',
    few: 'Другу - {percent}% скидки. Вам - {count} бесплатные недели за каждого друга.',
    many: 'Другу - {percent}% скидки. Вам - {count} бесплатных недель за каждого друга.',
  },
  'gift.cap': { one: 'До {count} друга.', few: 'До {count} друзей.', many: 'До {count} друзей.' },
  'gift.unavailable': 'В этой сборке приглашения недоступны.',
  'gift.shareMessage': 'Введите мой код {code} в Walkito - и получите скидку {percent}% на 12-недельную программу.',
  'gift.share': 'Поделиться кодом',
  'gift.shared': 'Скопировано',
  'gift.copy': 'Просто скопировать',
  'gift.copied': 'Скопировано в буфер',
  'gift.copyA11y': 'Скопировать код {code}',
  'gift.dismiss': 'Может быть позже',
  'gift.openA11y': 'Забрать подарок',
  'gift.capsule': 'Подарок',

  // ── Waits ──────────────────────────────────────────────────────────────────
  // Сокращения не склоняются, поэтому и не множественные формы: «через 2 ч
  // 5 мин» и «2 ч 5 мин» пишутся одинаково.
  'time.hoursMinutes': '{hours} ч {minutes} мин',
  'time.minutes': '{count} мин',
  'time.underMinute': '<1 мин',

  // ── The next session ───────────────────────────────────────────────────────
  'nextSession.in': 'Следующее занятие через {time}',
  // После двоеточия день недели стоит в именительном падеже: «понедельник».
  'nextSession.on': 'Следующее занятие: {day}',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Начать занятие',
  'card.dailyGoal': 'Цель на день',
  'card.getStarted': 'Начать',
  'card.last7Days': 'Последние 7 дней',
  'band.excellent': 'Отлично',
  'band.strong': 'Сильно',
  'band.steady': 'Ровно',
  'band.building': 'Набираете',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  'purchase.unavailable': 'Этот план сейчас недоступен.',

  'quick.deleteTitle': '{name}, стоп.',
  'quick.deleteBody': 'Собираюсь удалить приложение.\n\nЧто меня оттолкнуло:\n\n',
  'quick.deleteSubject': 'Перед тем как удалить Walkito',
  'quick.talkSubject': 'Что-то не так в Walkito',
  'quick.talkBody': 'Здравствуйте -\n\nЧто происходит:\n\n',
  'quick.deleteSubtitle': 'Удаляете? Расскажите, что не сработало.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Главная',
  'tabs.progress': 'Прогресс',


  // ── Account / sign-in errors ───────────────────────────────────────────────
  'auth.noServer': 'В этой сборке нет сервера аккаунтов. Войдите через Apple.',
  'auth.missingFields': 'Введите и почту, и пароль.',
  'auth.invalidCredentials': 'Почта и пароль не совпадают.',
  'auth.notConfirmed':
    'Аккаунт ещё не подтверждён. Подтвердите адрес почты и попробуйте снова.',
  'auth.banned': 'Этот аккаунт отключён.',
  'auth.providerDisabled': 'Вход по почте в этом приложении выключен. Войдите через Apple.',
  'auth.rateLimited': 'Слишком много попыток. Подождите минуту и попробуйте снова.',
  'auth.badEmail': 'Это не похоже на адрес почты.',
  'auth.noAccount': 'Аккаунт не вернулся.',
  'auth.generic': 'Не получилось.',
  'auth.unreachable': 'Сервер недоступен.',

  // ── Maintenance and regression ───────────────────────────────────────────
  'maintenance.throughNamed': '{name}, вы прошли программу.',
  'maintenance.through': 'Вы прошли программу.',
  'maintenance.calfGain': '{opening} Икра выросла ↗ с {before} до {after}.',
  'maintenance.relapse': 'Примерно половина людей теряет результат в течение пяти лет.',
  'maintenance.staying': 'Две сессии в неделю - то, что оставляет вас во второй половине.',
  'maintenance.regression': 'Показатели просели. Пройти блок «{block}» ещё раз?',

  // ── Block names ──────────────────────────────────────────────────────────
  // Отглагольные существительные, а не императивы: это названия этапов плана,
  // а не команды пользователю.
  'block.settle': 'Успокоение',
  'block.strengthen': 'Укрепление',
  'block.load': 'Нагрузка',
  'block.build': 'Рост',
  'block.control': 'Контроль',
  'block.sustain': 'Поддержание',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Назад',
  'common.close': 'Закрыть',
  'common.profile': 'Профиль',
  'common.done': 'Готово',
  'common.cancel': 'Отмена',
};
