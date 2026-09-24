/**
 * Onboarding, Russian.
 *
 * The register is `../ru/core.ts`'s: lowercase «вы», warm rather than formal —
 * a coach who respects you, not a form that addresses you.
 *
 * Three places where the Russian is not a transposition of the English and
 * could not be:
 *
 * - `onboarding.plan.reflectionBoth` joins the two facts with «и» and no comma,
 *   because Russian does not put one before a two-item conjunction. The English
 *   ", and " has nowhere to go.
 * - `onboarding.contract.stampLine1/2` reverse. «БЕГ БЕЗ БОЛИ» is running-
 *   without-pain; the qualifier follows the noun here and precedes it in
 *   English, so the two stamped rows hold the opposite halves.
 * - The testimonials re-split. Each language bolds the clause that carries the
 *   claim in *its* sentence, and the claim does not sit in the same half twice.
 *
 * The Garmin steps name the menus as Garmin Connect's own Russian build labels
 * them; the Whoop ones stay in English because that app ships no Russian
 * interface, and a translated path would send the user looking for a menu that
 * is not there.
 */
export const ONBOARDING_RU = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  'onboarding.act.about': 'О вас',
  'onboarding.act.sport': 'Ваш спорт',
  'onboarding.act.health': 'Ваше здоровье',
  'onboarding.act.plan': 'Ваш план',

  // ── Shared buttons ───────────────────────────────────────────────────────
  'onboarding.cta.next': 'Далее',
  'onboarding.cta.continue': 'Продолжить',
  'onboarding.cta.done': 'Готово',
  'onboarding.cta.skip': 'Пропустить',
  'onboarding.cta.skipForNow': 'Пока пропустить',
  'onboarding.cta.checking': 'Проверяем…',
  'onboarding.cta.applyCode': 'Применить код',
  'onboarding.cta.startPlan': 'Начать план',
  'onboarding.cta.seeOffer': 'Показать предложение',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Бегайте без сомнений',
  'onboarding.intro.blurb': 'Ежедневный план, который меняется вместе с вашими ногами.',
  'onboarding.intro.greeting': 'Привет, я Walkito',
  'onboarding.intro.headline': 'Давайте разберёмся, почему всё ещё болит.',
  'onboarding.intro.cta': 'Продолжить с Apple',
  'onboarding.intro.footnote': 'Настройка ~2 мин',
  'onboarding.intro.signInFailed': 'Вход не завершился. Попробуйте ещё раз.',
  'onboarding.intro.emailCta': 'Войти по почте',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Вход',
  'onboarding.email.blurb': 'Введите почту и пароль от вашей учётной записи.',
  'onboarding.email.address': 'Почта',
  'onboarding.email.password': 'Пароль',
  'onboarding.email.submit': 'Войти',
  'onboarding.email.submitting': 'Входим…',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.name.title': 'Как к вам\nобращаться?',
  'onboarding.name.blurb': 'Всё дальше будет написано для вас, а не для бегунов вообще.',
  'onboarding.name.placeholder': 'например, Алекс',

  // ── Sex ──────────────────────────────────────────────────────────────────
  'onboarding.sex.title': 'Мужчина или женщина, {name}?',
  'onboarding.sex.blurb':
    'Переносимость нагрузки и типичные травмы разные — план тоже получится разным.',
  'onboarding.sex.female': 'Женщина',
  'onboarding.sex.male': 'Мужчина',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'Какой вы спортсмен, {name}?',
  'onboarding.runner.blurb':
    'Отсюда стартует ваш план. Если приуменьшить, первая неделя выйдет слишком лёгкой.',
  'onboarding.runner.new': 'Только начинаю',
  'onboarding.runner.casual': 'Время от времени',
  'onboarding.runner.regular': 'Регулярно',
  'onboarding.runner.racing': 'Готовлюсь к старту',
  'onboarding.runner.serious': 'Отношусь серьёзно',

  // ── Age ──────────────────────────────────────────────────────────────────
  'onboarding.age.title': 'Сколько вам лет?',
  'onboarding.age.blurb':
    'С возрастом сухожилия адаптируются медленнее. Это задаёт темп, с которым растёт план.',
  'onboarding.age.years': 'лет',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'Ещё немного о вас, {name}',
  'onboarding.body.blurb': 'Сухожилия несут ваш вес. Отсюда стартовая нагрузка.',
  'onboarding.body.kg': 'кг',
  'onboarding.body.lb': 'фнт',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': 'Какой у вас размер, {name}?',
  'onboarding.size.blurb':
    'Размер обуви говорит о длине рычага, который приходится двигать вашей икре.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, к чему вы идёте?',
  'onboarding.goal.blurb': 'Выберите то, что важнее всего сейчас. Потом можно поменять.',
  'onboarding.goal.painfree': 'Бегать без боли',
  'onboarding.goal.race': 'Готовиться к старту',
  'onboarding.goal.consistent': 'Бегать регулярнее',
  'onboarding.goal.stronger': 'Укрепить ноги',
  'onboarding.goal.injuryfree': 'Обойтись без травм',

  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Что вам мешает, {name}?',
  'onboarding.pain.blurb': 'Отметьте всё, что подходит. Обычно выбирают не одно.',
  'onboarding.pain.foot': 'Стопа',
  'onboarding.pain.heel': 'Пятка',
  'onboarding.pain.achilles': 'Ахилл',
  'onboarding.pain.shin': 'Голень',
  'onboarding.pain.knee': 'Колено',
  'onboarding.pain.hip': 'Бедро',
  'onboarding.pain.none': 'Сейчас ничего',

  'onboarding.side.title': 'С какой стороны, {name}?',
  'onboarding.side.blurb': 'Тесты сравнивают одну ногу с другой, поэтому важно знать, с какой мы работаем.',
  'onboarding.side.left': 'Слева',
  'onboarding.side.right': 'Справа',
  'onboarding.side.both': 'С обеих',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': 'Что нагружает ваши ноги, {name}?',
  'onboarding.sport.blurb': 'От этого зависит, как будут заданы следующие вопросы.',
  'onboarding.sport.running': 'Бег',
  'onboarding.sport.tennis': 'Теннис',
  'onboarding.sport.gym': 'Зал',
  'onboarding.sport.football': 'Футбол',
  'onboarding.sport.basketball': 'Баскетбол',
  'onboarding.sport.cycling': 'Велосипед',
  'onboarding.sport.hiking': 'Походы',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.title': 'Сколько вы сейчас делаете?',
  'onboarding.load.blurb': 'Честная текущая неделя, а не лучшая.',
  'onboarding.load.blurbMonth': 'Честный текущий месяц, а не лучший.',
  'onboarding.load.titleRunning': 'Сколько вы сейчас бегаете, {name}?',
  'onboarding.load.titleTennis': 'Сколько вы сейчас на корте, {name}?',
  'onboarding.load.blurbTennis': 'Матчи и занятия вместе — честная неделя.',
  'onboarding.load.titleGym': 'Сколько вы сейчас тренируетесь, {name}?',
  'onboarding.load.blurbGym': 'Время под нагрузкой, а не время в зале.',
  'onboarding.load.titleFootball': 'Сколько вы сейчас играете, {name}?',
  'onboarding.load.blurbFootball': 'Матчи и тренировки вместе — честная неделя.',
  'onboarding.load.titleBasketball': 'Сколько вы сейчас играете, {name}?',
  'onboarding.load.blurbBasketball': 'Игры и тренировки вместе — честная неделя.',
  'onboarding.load.titleCycling': 'Сколько вы сейчас катаетесь, {name}?',
  'onboarding.load.titleHiking': 'Сколько вы сейчас ходите в походы, {name}?',
  'onboarding.load.km0': '0–5 {unit}',
  'onboarding.load.km1': '5–15 {unit}',
  'onboarding.load.km2': '15–30 {unit}',
  'onboarding.load.km3': '30–50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'км',
  'onboarding.load.hours0': 'Меньше 1 часа',
  'onboarding.load.hours1': '1–3 часа',
  'onboarding.load.hours2': '3–5 часов',
  'onboarding.load.hours3': '5–8 часов',
  'onboarding.load.hours4': '8+ часов',
  'onboarding.load.perWeek': 'в неделю',
  'onboarding.load.runsPerWeek': 'Пробежек в неделю',
  'onboarding.load.sessionsPerWeek': 'Тренировок в неделю',
  'onboarding.load.ridesPerWeek': 'Заездов в неделю',
  'onboarding.load.hikesPerMonth': 'Походов в месяц',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': 'Что сейчас даётся тяжелее всего, {name}?',
  'onboarding.challenge.blurb': 'Не больше двух. План склонится к тому, что выберете.',
  'onboarding.challenge.painfree': 'Обходиться без боли',
  'onboarding.challenge.back': 'Вернуться к бегу',
  'onboarding.challenge.distance': 'Увеличить дистанцию',
  'onboarding.challenge.recovery': 'Быстрее восстанавливаться',
  'onboarding.challenge.strength': 'Стать сильнее',
  'onboarding.challenge.injury': 'Избежать новой травмы',
  'onboarding.challenge.swapped': 'Не больше {count} за раз — «{label}» убрали.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Подключите данные Здоровья',
  'onboarding.health.blurb': 'Чтобы план стартовал с того, что вы действительно делали.',
  'onboarding.health.askNamed': 'Расскажите о себе, {name}!',
  'onboarding.health.ask': 'Расскажите о себе!',
  'onboarding.health.askBlurb':
    'Walkito читает шаги, энергию и пульс, чтобы план стартовал с того, что вы действительно делали, а не с того, что собирались.',
  'onboarding.health.steps': 'Шаги',
  'onboarding.health.calories': 'Активная энергия',
  'onboarding.health.heartRate': 'Пульс',
  'onboarding.health.notShared': 'Не передано',
  'onboarding.health.thousands': '{value} тыс.',
  'onboarding.health.kcal': '{value} ккал',
  'onboarding.health.bpm': '{value} уд/мин',
  'onboarding.health.connect': 'Подключить Здоровье',
  'onboarding.health.opening': 'Открываем Здоровье…',
  'onboarding.health.promise': 'Данные о здоровье не покидают это устройство.',
  'onboarding.health.unavailable': 'Здесь Здоровье недоступно — можно продолжить без него.',
  'onboarding.health.declined': 'Доступ к Здоровью отклонён. План будет работать и без него.',
  'onboarding.health.empty':
    'Подключено — данных пока нет. Они появятся, как только вы начнёте двигаться.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': 'Вы носите часы?',
  'onboarding.watch.blurb': 'Только чтобы понять, нужно ли что-то подключать.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Уже всё работает',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'Один переключатель',
  'onboarding.watch.none': 'Без часов',
  'onboarding.watch.noneCaption': 'Телефона в кармане достаточно',

  // ── Watch sync ───────────────────────────────────────────────────────────
  'onboarding.watchSync.title': 'Включите синхронизацию со Здоровьем',
  'onboarding.watchSync.blurb': 'Один переключатель в приложении, которым вы уже пользуетесь.',
  'onboarding.watchSync.open': 'Открыть {app}',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Откройте Garmin Connect и перейдите в «Ещё».',
  'onboarding.watchSync.garmin2': 'Нажмите «Настройки», затем «Apple Здоровье».',
  'onboarding.watchSync.garmin3': 'Включите категории, которыми хотите делиться.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Откройте Whoop и нажмите More.',
  'onboarding.watchSync.whoop2': 'Откройте App Settings, затем Integrations.',
  'onboarding.watchSync.whoop3': 'Нажмите Apple Health и включите его.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Включите уведомления',
  'onboarding.notify.blurb': 'Чтобы план мог сказать, когда вы ему нужны.',
  'onboarding.notify.askNamed': '{name}, не надо в одиночку',
  'onboarding.notify.ask': 'Не надо в одиночку',
  'onboarding.notify.askBlurb':
    'План работает, только если о нём помнят. Пусть Walkito скажет, когда на сегодня есть занятие.',
  'onboarding.notify.promise1': 'Напоминание в дни, когда в плане есть занятие',
  'onboarding.notify.promise2': 'Предупреждение, когда план меняет то, что вы делаете',
  'onboarding.notify.promise3': 'И больше ничего. Никаких серий, которые возвращают через вину.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'сейчас',
  'onboarding.notify.bannerBody': 'Сегодня сила стопы — 7 минут. Голени скажут спасибо.',
  'onboarding.notify.turnOn': 'Включить уведомления',
  'onboarding.notify.opening': 'Открываем…',
  'onboarding.notify.notNow': 'Не сейчас',
  'onboarding.notify.declined': 'Ничего страшного — их можно включить позже в Настройках.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Собираем ваш план',
  'onboarding.building.blurb': 'Складываем всё, что вы рассказали, в первую неделю.',
  'onboarding.building.line1': 'Знакомимся с вами',
  'onboarding.building.line3': 'Ваш план готов',
  'onboarding.building.cta': 'Начать тренировки',
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  'onboarding.pattern.heel': 'Самый частый сценарий из всех. И отзывается он быстрее остальных.',
  'onboarding.pattern.foot': 'Слаб не сам свод. Слабо то, что его держит.',
  'onboarding.pattern.achilles':
    'Нагрузка росла быстрее, чем успевало адаптироваться сухожилие. Это поправимо.',
  'onboarding.pattern.shin': 'Объём обогнал ваши ноги. План отматывает назад, а потом наращивает.',
  'onboarding.pattern.knee': 'Колено — там, где болит. Редко там, где началось.',
  'onboarding.pattern.hip': 'Что-то ниже бедра перестало нести свою часть.',
  'onboarding.pattern.none': 'Вы здесь до того, как заболело. Это самый дешёвый путь.',
  'onboarding.building.promise': 'Первые изменения: с 12-го по 16-й день.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Боль в пятке',
  'onboarding.reflection.painFoot': 'Боль в стопе',
  'onboarding.reflection.painAchilles': 'Боль в ахилле',
  'onboarding.reflection.painShin': 'Боль в голени',
  'onboarding.reflection.painKnee': 'Боль в колене',
  'onboarding.reflection.painHip': 'Боль в бедре',
  'onboarding.reflection.volumeWeekly': '{band} в неделю',
  'onboarding.reflection.volumeMonthly': '{band} в месяц',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.plan.title': 'Ваш план',
  'onboarding.plan.blurb': 'Собран из ваших ответов.',
  'onboarding.plan.meta': {
    one: '{count} неделя · {sessions} тренировки в неделю',
    few: '{count} недели · {sessions} тренировки в неделю',
    many: '{count} недель · {sessions} тренировки в неделю',
  },
  'onboarding.plan.week': 'Неделя {n}',
  'onboarding.plan.weeks': 'Недели {from}–{to}',
  'onboarding.plan.phaseSettle': 'успокаиваем раздражение',
  'onboarding.plan.phaseBuild': 'строим свод',
  'onboarding.plan.phaseLoad': 'возвращаем полную нагрузку',
  'onboarding.plan.reflectionBoth':
    '{pain} и {volume}. Первые две недели всё успокаиваем — до любой нагрузки.',
  'onboarding.plan.reflectionPain':
    '{pain}. Первые две недели всё успокаиваем — до любой нагрузки.',
  'onboarding.plan.reflectionVolume':
    '{volume}. Первые две недели строим базу — до любой нагрузки.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Давайте заключим договор, {name}',
  'onboarding.contract.blurb': 'Не со мной. С собой.',
  'onboarding.contract.hint': 'Распишитесь здесь',
  'onboarding.contract.stampTop': '★ WALKITO ★',
  'onboarding.contract.stampText': 'ОБЯЗУЮСЬ',
  'onboarding.contract.stampLine1': 'БЕГ',
  'onboarding.contract.stampLine2': 'БЕЗ БОЛИ',
  'onboarding.contract.noteNamed': '{name}, ваша подпись останется на этом устройстве.',
  'onboarding.contract.note': 'Ваша подпись останется на этом устройстве.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Добро пожаловать, {name}',
  'onboarding.social.welcome': 'Добро пожаловать на борт',
  'onboarding.social.crest': 'Присоединяйтесь к 40 000+ бегунов,\nкоторые тренируются без боли',
  'onboarding.testimonial1.before': 'Полгода болели голени, а через восемь недель я пробежала',
  'onboarding.testimonial1.lead': 'десятку без боли',
  'onboarding.testimonial1.after': '.',
  'onboarding.testimonial1.name': 'Марта К.',
  'onboarding.testimonial2.before': 'Он нашёл',
  'onboarding.testimonial2.lead': 'икры, а не колени.',
  'onboarding.testimonial2.after': ' Силовая работа наконец обрела смысл.',
  'onboarding.testimonial2.name': 'Даниэль Р.',
  'onboarding.testimonial3.before': 'Вернулся после травмы ахилла,',
  'onboarding.testimonial3.lead': 'не потеряв дистанцию,',
  'onboarding.testimonial3.after': ' которую уже набрал.',
  'onboarding.testimonial3.name': 'Прия С.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Есть код приглашения?',
  'onboarding.referral.blurb': 'Введите его — и вы оба получите скидку {percent}% на план.',
  'onboarding.referral.applied': 'Скидка {percent}% применена.',
  'onboarding.referral.unknown': 'Мы не знаем такой код. Проверьте и попробуйте ещё раз.',
  'onboarding.referral.own': 'Это ваш собственный код. Отправьте его кому-нибудь другому.',
  'onboarding.referral.already': 'Вы уже использовали код.',
  'onboarding.referral.unavailable': 'В этой сборке приглашения недоступны.',
  'onboarding.referral.failed': 'Не удалось связаться с сервером. Попробуйте через минуту.',

  // ── The note at the end of onboarding ────────────────────────────────────
  // Черновик — см. комментарий в en/onboarding.ts.
  'onboarding.note.title': 'Пара слов от нас',
  'onboarding.note.body1':
    'Привет, я Рахим. Мы с другом делаем Walkito вдвоём. У кучи людей болит пятка: стельки, третьи кроссовки - а по утрам всё равно хромают. Упражнения, которые помогают, известны давно. Просто никто не говорит, какие и сколько. Вот это мы и сделали.',
  'onboarding.note.body2':
    'Было бы круто, если бы ты написал отзыв. Нам правда важно. Спасибо, что ты здесь.',
  'onboarding.note.signature': 'Рахим и Рахман',
  'onboarding.note.cta': 'Оценить Walkito',
};
