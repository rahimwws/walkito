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

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Бегайте без сомнений',
  'onboarding.intro.blurb': 'Ежедневный план, который меняется вместе с вашими ногами.',
  'onboarding.intro.greeting': 'Привет, я Walkito',
  'onboarding.intro.headline': 'Давайте разберёмся, почему всё ещё болит.',
  'onboarding.intro.cta': 'Продолжить с Apple',
  'onboarding.intro.ctaGoogle': 'Продолжить с Google',
  'onboarding.intro.footnote': 'Около 3 минут',
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
    'Переносимость нагрузки и типичные травмы разные - план тоже получится разным.',
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
  'onboarding.goal.flatfeet': 'Укрепить своды стоп',
  'onboarding.goal.ankles': 'Устойчивые лодыжки',
  'onboarding.goal.jump': 'Прыгать выше',
  'onboarding.goal.allday': 'Весь день на ногах без усталости',
  'onboarding.goal.comeback': 'Вернуться после травмы',
  'onboarding.goal.steady': 'Уверенно ходить',
  'onboarding.days.title': 'Сколько дней в неделю, {name}?',
  'onboarding.days.blurb': 'Короткие занятия. Дни отдыха - часть плана, а не пропуск.',
  'onboarding.days.days3': '3 дня',
  'onboarding.days.days3Caption': 'Спокойный старт',
  'onboarding.days.days5': '5 дней',
  'onboarding.days.days5Caption': 'Рекомендуем',
  'onboarding.days.days7': 'Каждый день',
  'onboarding.days.days7Caption': 'Коротко и каждый день',
  'onboarding.minutes.title': 'Сколько минут на занятие?',
  'onboarding.minutes.blurb': 'Можно менять в любой день - занятые дни тоже считаются.',
  'onboarding.minutes.min3': '3 минуты',
  'onboarding.minutes.min3Caption': 'Даже в загруженный день',
  'onboarding.minutes.min5': '5 минут',
  'onboarding.minutes.min5Caption': 'Рекомендуем',
  'onboarding.minutes.min10': '10 минут',
  'onboarding.minutes.min10Caption': 'Чтобы прогрессировать быстрее',
  'onboarding.equipment.title': 'Что есть у вас дома?',
  'onboarding.equipment.blurb': 'Отметьте всё, что есть.',
  'onboarding.equipment.step': 'Ступенька или лестница',
  'onboarding.equipment.band': 'Резинка',
  'onboarding.equipment.towel': 'Полотенце',
  'onboarding.equipment.pillow': 'Подушка',
  'onboarding.equipment.ball': 'Массажный мяч',
  'onboarding.equipment.none': 'Ничего из этого',
  'onboarding.reminder.title': 'Когда вам напоминать?',
  'onboarding.reminder.blurb': 'Одно напоминание в день. Выберите время, когда обычно есть пять свободных минут.',
  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Где обычно болит, {name}?',
  'onboarding.pain.blurb': 'Отметьте места на ноге, до {count}.',
  'onboarding.pain.full': 'Не больше {count} сразу. Нажмите на отмеченное, чтобы заменить.',
  'onboarding.pain.none': 'Сейчас ничего не болит',
  'onboarding.pain.disclaimer':
    'Это не медицинская рекомендация. Если боль острая, усиливается или есть отёк либо онемение, обратитесь к врачу.',

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
  'onboarding.load.titleRunning': 'Сколько бегаете в неделю?',
  'onboarding.load.titleTennis': 'Сколько вы сейчас на корте, {name}?',
  'onboarding.load.blurbTennis': 'Матчи и занятия вместе - честная неделя.',
  'onboarding.load.titleGym': 'Сколько вы сейчас тренируетесь, {name}?',
  'onboarding.load.blurbGym': 'Время под нагрузкой, а не время в зале.',
  'onboarding.load.titleFootball': 'Сколько вы сейчас играете, {name}?',
  'onboarding.load.blurbFootball': 'Матчи и тренировки вместе - честная неделя.',
  'onboarding.load.titleBasketball': 'Сколько вы сейчас играете, {name}?',
  'onboarding.load.blurbBasketball': 'Игры и тренировки вместе - честная неделя.',
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

  'onboarding.source.title': 'Как вы узнали о Walkito?',
  'onboarding.source.blurb': 'Одно касание. Так мы найдём людей вроде вас.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'Посоветовали знакомые',
  'onboarding.source.appStore': 'Поиск в App Store',
  'onboarding.source.playStore': 'Поиск в Google Play',
  'onboarding.source.google': 'Поиск в Google',
  'onboarding.source.other': 'Другое',
  'onboarding.challenge.swapped': 'Не больше {count} за раз - «{label}» убрали.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Подключите данные Здоровья',
  'onboarding.health.blurb': 'Чтобы план стартовал с того, что вы действительно делали.',
  'onboarding.health.askNamed': 'Расскажите о себе, {name}!',
  'onboarding.health.ask': 'Расскажите о себе!',
  'onboarding.health.askBlurbAndroid':
    'Walkito читает шаги, пробежки и сон, чтобы план стартовал с того, что вы действительно делали, а не с того, что собирались.',
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
  'onboarding.health.connectAndroid': 'Подключить Health Connect',
  'onboarding.health.openingAndroid': 'Открываю Health Connect…',
  'onboarding.health.promise': 'Данные о здоровье не покидают это устройство.',
  'onboarding.health.unavailable': 'Здесь Здоровье недоступно - можно продолжить без него.',
  'onboarding.health.declined': 'Доступ к Здоровью отклонён. План будет работать и без него.',
  'onboarding.health.empty':
    'Подключено - данных пока нет. Они появятся, как только вы начнёте двигаться.',

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
  'onboarding.notify.askBlurb': 'Только в дни, когда в плане есть занятие.',
  'onboarding.notify.promise1': 'Напоминание в дни, когда в плане есть занятие',
  'onboarding.notify.promise2': 'Предупреждение, когда план меняет то, что вы делаете',
  'onboarding.notify.promise3': 'И иногда скидка - больше ничего.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'сейчас',
  'onboarding.notify.bannerBody': 'Сегодня сила стопы - 7 минут. Голени скажут спасибо.',
  'onboarding.notify.turnOn': 'Включить уведомления',
  'onboarding.notify.opening': 'Открываем…',
  'onboarding.notify.notNow': 'Не сейчас',
  'onboarding.notify.declined': 'Ничего страшного - их можно включить позже в Настройках.',

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
  'onboarding.pattern.calf': 'Икра тянет за собой всё, что ниже. Отпустите её - и остальное пойдёт следом.',
  'onboarding.pattern.none': 'Вы здесь до того, как заболело. Это самый дешёвый путь.',
  'onboarding.building.promise': 'Первые изменения: с 12-го по 16-й день.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Боль в пятке',
  'onboarding.reflection.painFoot': 'Боль в стопе',
  'onboarding.reflection.painAchilles': 'Боль в ахилле',
  'onboarding.reflection.painShin': 'Боль в голени',
  'onboarding.reflection.painCalf': 'Боль в икре',
  'onboarding.reflection.volumeWeekly': '{band} в неделю',
  'onboarding.reflection.volumeMonthly': '{band} в месяц',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.sendPlan.title': 'Прислать план\nна почту?',
  'onboarding.sendPlan.blurb': 'Необязательно. Несколько коротких писем в первые две недели - отключить можно в любой момент.',
  'onboarding.sendPlan.placeholder': 'you@example.com',
  'onboarding.sendPlan.send': 'Прислать',
  'onboarding.plan.title': 'Ваш план',
  'onboarding.plan.blurb': 'Собран из ваших ответов.',
  'onboarding.plan.wordmarkMomentum': 'Разгон',
  'onboarding.plan.wordmarkFoundations': 'Фундамент',
  'onboarding.plan.meta': {
    one: '{count} тренировка в неделю',
    few: '{count} тренировки в неделю',
    many: '{count} тренировок в неделю',
  },
  'onboarding.plan.week': 'Неделя {n}',
  'onboarding.plan.weeks': 'Недели {from}–{to}',
  'onboarding.plan.weeksOn': 'Недели {from}+',
  'onboarding.plan.phaseSettle': 'успокаиваем раздражение',
  'onboarding.plan.phaseBuild': 'строим свод',
  'onboarding.plan.phaseLoad': 'возвращаем полную нагрузку',
  'onboarding.plan.reflectionBoth':
    '{pain} и {volume}. Первые две недели всё успокаиваем - до любой нагрузки.',
  'onboarding.plan.reflectionPain':
    '{pain}. Первые две недели всё успокаиваем - до любой нагрузки.',
  'onboarding.plan.reflectionVolume':
    '{volume}. Первые две недели строим базу - до любой нагрузки.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Давайте заключим договор, {name}',
  'onboarding.contract.blurb': 'Не со мной. С собой.',
  'onboarding.contract.hint': 'Распишитесь здесь',
  'onboarding.contract.stampTop': '★ Walkito ★',
  'onboarding.contract.stampText': 'Обязуюсь',
  'onboarding.contract.stampLine1': 'День первый',
  'onboarding.contract.stampLine2': 'Начат',
  'onboarding.contract.noteNamed': '{name}, ваша подпись останется на этом устройстве.',
  'onboarding.contract.note': 'Ваша подпись останется на этом устройстве.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Добро пожаловать, {name}',
  'onboarding.social.welcome': 'Добро пожаловать на борт',
  'onboarding.social.crest': 'Несколько минут в день.\nБез зала и догадок.',
  'onboarding.testimonial1.before': 'Отметьте, как стопа сегодня, -',
  'onboarding.testimonial1.lead': 'и тренировка подстроится',
  'onboarding.testimonial1.after': ' под самочувствие.',
  'onboarding.testimonial1.name': 'Каждое утро',
  'onboarding.testimonial2.before': 'Короткие упражнения с подсказками -',
  'onboarding.testimonial2.lead': 'дома или на работе',
  'onboarding.testimonial2.after': ': хватит пола и стены.',
  'onboarding.testimonial2.name': 'Каждая тренировка',
  'onboarding.testimonial3.before': 'Минутный ретест',
  'onboarding.testimonial3.lead': 'покажет, что изменилось',
  'onboarding.testimonial3.after': ' - в цифрах, а не в ощущениях.',
  'onboarding.testimonial3.name': 'Каждые две недели',

  // ── Outlook ──────────────────────────────────────────────────────────────
  'onboarding.outlook.title': '{name}, вот что вас ждёт',
  'onboarding.outlook.blurb': 'Что болит сегодня и что с этим сделает план.',
  'onboarding.outlook.blurbNone': 'Ваши ноги сегодня и куда их приведёт план.',
  'onboarding.outlook.today': 'Сегодня',
  'onboarding.outlook.month': 'Месяц {n}',
  'onboarding.outlook.pain0': 'Болит',
  'onboarding.outlook.pain1': 'Стихает',
  'onboarding.outlook.pain2': 'Легче',
  'onboarding.outlook.pain3': 'Спокойнее',
  'onboarding.outlook.strength0': 'Старт',
  'onboarding.outlook.strength1': 'Включается',
  'onboarding.outlook.strength2': 'Крепнет',
  'onboarding.outlook.strength3': 'Сильнее',
  'onboarding.outlook.footnote': 'Иллюстрация того, как строится план, а не прогноз. Каждый восстанавливается в своём темпе.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Есть код приглашения?',
  'onboarding.referral.blurb': 'Введите его - и получите скидку {percent}% на годовую подписку.',
  'onboarding.referral.applied': 'Скидка {percent}% на годовую подписку применена.',
  'onboarding.referral.unlocked': 'Код принят. Walkito Premium включён.',
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
  'onboarding.note.later': 'Не сейчас',
};
