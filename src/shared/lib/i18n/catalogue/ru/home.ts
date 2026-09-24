/**
 * Home, Russian.
 *
 * Two exports, mirroring `../en/home.ts`: the phrases numbers arrive in, and
 * the sentences themselves as ordered segments.
 *
 * **The order is not English's.** The `on-feet` line is the clearest case: the
 * English hangs a relative clause off the end ("the last two times you passed
 * 7, the next morning was rough"), Russian fronts the limit clause and closes
 * on the adjective ("Оба раза, когда вы переходили за 7 часов, следующее утро
 * было тяжёлым"). No substitution into the English fragments reaches that —
 * which is why a brief is an array per language and not a string with holes.
 *
 * **Cases are carried by the phrase, not by the template.** `hoursOnFeet` and
 * `thresholdHours` render the same unit and are two keys because one is a bare
 * subject and the other sits behind a preposition; `daysInARow` and
 * `dayNumber` are two keys because "5 дней подряд" and "день 5" share a root
 * and nothing else.
 *
 * Every plural entry carries `few` — the form covering 2, 3, 4, 22, 23, 24.
 * Without it the app says "2 дней", and the type here is what forbids it.
 *
 * **Register:** a coach — warm, on «вы», never clinical. The health lines
 * compare the person to themselves and never to a norm, exactly as the English
 * does: "выше вашего обычного", never "высокий", never "хромаете".
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

export const HOME_RU = {
  // ── The kind of work a day is ────────────────────────────────────────────
  'home.workStrength': 'сила стопы и голени',
  'home.workMobility': 'растяжка',
  'home.workBalance': 'работа на баланс',
  'home.workRecovery': 'лёгкое восстановление',
  'home.fallbackMove': 'подъёмы на носки',

  // ── Counted phrases ──────────────────────────────────────────────────────
  'home.minutes': { one: '{count} минута', few: '{count} минуты', many: '{count} минут' },
  'home.moves': {
    one: '{count} упражнение',
    few: '{count} упражнения',
    many: '{count} упражнений',
  },
  'home.tests': { one: '{count} тест', few: '{count} теста', many: '{count} тестов' },
  'home.weeks': { one: '{count} неделя', few: '{count} недели', many: '{count} недель' },
  'home.points': { one: '{count} балл', few: '{count} балла', many: '{count} баллов' },
  // "Этаж" rather than "пролёт": it is the word Apple Health itself uses for
  // this metric in Russian, so the number matches what the user can go and
  // check in the Health app.
  'home.flights': { one: '{count} этаж', few: '{count} этажа', many: '{count} этажей' },
  'home.hoursOnFeet': { one: '{count} час', few: '{count} часа', many: '{count} часов' },
  'home.thresholdHours': { one: '{count} час', few: '{count} часа', many: '{count} часов' },
  'home.daysInARow': {
    one: '{count} день подряд',
    few: '{count} дня подряд',
    many: '{count} дней подряд',
  },
  'home.dayNumber': 'день {count}',
  'home.dayOfPlan': 'день {day} из {total}',
  'home.steps': { one: '{steps} шаг', few: '{steps} шага', many: '{steps} шагов' },

  // ── Units ────────────────────────────────────────────────────────────────
  'home.km': '{value} км',
  'home.percent': '{value}%',
  'home.duration': '{hours} ч {minutes} мин',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Задачи на сегодня',
  'home.allDoneTitle': 'На сегодня всё',
  'home.allDoneBlurb':
    'Больше ничего не нужно. Следующая сессия откроется через двенадцать часов отдыха.',
  'home.retestDay': 'День замеров. {tests}, примерно {minutes}.',
  'home.nothingScheduled': 'На сегодня ничего не назначено. Отдых тоже засчитан.',
  'home.markDone': 'Отметить выполненным',
  'home.markNotDone': 'Снять отметку',
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  'home.chipSeconds': '{count} с',
  'home.chipMinutes': '{count} мин',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'Сегодня болит',
  'home.noPain': 'Сегодня не болит',
  'home.logCheckIn': 'Отметить сегодняшний день',
  'home.checkInAgain': 'Отметить ещё раз',
  'home.checkInTitle': 'Сегодняшняя отметка',
  'home.checkInSub': 'Как сегодня стопа?',
  'home.save': 'Сохранить',
  'home.saved': 'Сохранено',
  // Ничего из этого не хвалит цифру: тёплый ответ на «семь» учит человека
  // перестать отмечать честно.
  'home.ackGood': 'Хорошо.',
  'home.ackLogged': 'Записали.',
  'home.ackLoggedShorter': 'Записали. Сегодняшняя сессия из-за этого короче.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Где болит',
  'home.zonesEmpty': 'Нажмите, где болит — не больше {count}',
  'home.zonesFull': 'Не больше {count} за раз — нажмите на одну, чтобы заменить',
  'home.zonesPicked': '{zones} — дальше {move}',
  'home.zoneJoin': ' · ',

  /**
   * Названия мест, а не строки из карты обследования: человек должен узнать
   * то место, до которого только что дотронулся.
   *
   * Голеностоп, а не лодыжка: лодыжка — это костный выступ, а болит здесь весь
   * сустав. Та же договорённость действует в `./exercises.ts`.
   */
  'home.zone.calf': 'Икра',
  'home.zone.soleus': 'Камбаловидная',
  'home.zone.tibia': 'Голень',
  'home.zone.tibAnt': 'Голень спереди',
  'home.zone.ankle': 'Голеностоп',
  'home.zone.achilles': 'Ахилл',
  'home.zone.heel': 'Пятка',
  'home.zone.dorsum': 'Подъём стопы',
  'home.zone.arch': 'Свод стопы',
  'home.zone.ball': 'Подушечка стопы',
  'home.zone.toes': 'Пальцы',
  'home.zone.innerAnkle': 'Голеностоп изнутри',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Боль сегодня',
  'home.morePain': 'Больше боли',
  'home.lessPain': 'Меньше боли',
  'home.painValueA11y': '{score} из {max}, {band}',
  // Сравнение только с собственным диапазоном этого человека, никогда с нормой.
  'home.rangeAbove': 'Выше вашего обычного',
  'home.rangeBelow': 'Ниже вашего обычного',
  'home.rangeWithin': 'В пределах вашего обычного',
  // Короче полной фразы: плашка узкая, а смысл целиком уходит в озвучку.
  'home.rangeAboveChip': 'ВЫШЕ ОБЫЧНОГО',
  'home.rangeBelowChip': 'НИЖЕ ОБЫЧНОГО',
  'home.rangeWithinChip': 'КАК ОБЫЧНО',
  'home.usualRangeLegend': 'ОБЫЧНО {low}–{high}',
  'home.usualRangeA11y': 'Обычный диапазон, от {low} до {high}',

  /**
   * Что значит каждая оценка — через то, что боль вам не даёт делать, а не
   * через прилагательное.
   *
   * Человек оценивает собственное тело, поэтому ни одна строка не выносит
   * приговор: они описывают, а не оценивают.
   */
  'home.bandNothing': 'Ничего',
  'home.bandNothingBlurb': 'Сегодня боли нет.',
  'home.bandBarely': 'Еле заметно',
  'home.bandBarelyBlurb': 'Вы бы и не вспомнили, если бы не спросили.',
  'home.bandNoticeable': 'Заметно',
  'home.bandNoticeableBlurb': 'Вы её чувствуете, но она ничего не меняет.',
  'home.bandSore': 'Побаливает',
  'home.bandSoreBlurb': 'Вы под неё подстраиваетесь, уже не задумываясь.',
  'home.bandHurts': 'Больно',
  'home.bandHurtsBlurb': 'Сейчас она решает за вас.',
  'home.bandSevere': 'Сильно',
  'home.bandSevereBlurb': 'Проблема — стоять на ней, а не бегать.',
};

export const BRIEF_RU = {
  // ── Боль — то, что сказал сам человек ────────────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'сегодня —' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'сидя. И всё.' },
    ],
    [
      { k: 'frame', text: 'тяжёлое утро. Сегодня только' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Больше ничего.' },
    ],
    [
      { k: 'frame', text: 'сегодня разгружаемся —' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'без нагрузки на стопу.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'по утрам сейчас на' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'больнее, чем на прошлой неделе. Сегодня сбавляем.' },
    ],
    [
      { k: 'frame', text: 'эта неделя тяжелее прошлой на' },
      { k: 'metric', icon: 'warn', text: '{jump}', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'День полегче.' },
    ],
    [
      { k: 'frame', text: 'боль выше' },
      { k: 'metric', icon: 'warn', text: 'вашего обычного уровня', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'Сегодня сбавляем нагрузку.' },
    ],
  ],

  // ── Структура программы ──────────────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'первый день —' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'а не тренировка: дальше каждое изменение будет считаться от вас самих.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'прошло' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'Посмотрим, что изменилось.' },
    ],
    [
      { k: 'frame', text: 'день замеров —' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'измеряемся:' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}', tail: ',' },
      { k: 'frame', text: 'и будет видно, где вы сейчас.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'сегодня начинается новый блок —' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'Другая форма, другая нагрузка.' },
    ],
    // Хедж английского оригинала сохранён: «по исследованиям» и «около».
    [
      { k: 'frame', text: 'сегодня новый блок. По исследованиям, около' },
      { k: 'metric', icon: 'level', text: 'половины' },
      { k: 'frame', text: 'годового улучшения приходится на первые три месяца.' },
    ],
    [
      { k: 'frame', text: 'вы перешли в блок' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'Дальше работа меняет характер.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'сегодня {work} —' },
      { k: 'metric', icon: 'tasks', text: '{moves}', tail: ',' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'первые дни —' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ':' },
      { k: 'frame', text: '{work},' },
      { k: 'value', text: '{minutes}', tail: '.' },
      { k: 'frame', text: 'Часто и понемногу лучше, чем редко и помногу.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      {
        k: 'frame',
        text: 'сегодня {work}. Первая неделя — про то, чтобы просто приходить, а не про усилие.',
      },
    ],
  ],

  // ── Нагрузка ─────────────────────────────────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'вчера была' },
      { k: 'metric', icon: 'feet', text: 'самая длинная пробежка за месяц', tail: ' —' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Сегодня' },
      { k: 'metric', icon: 'rest', text: 'легко', tail: '.' },
    ],
    [
      { k: 'frame', text: 'это' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'больше всего за четыре недели. Сегодня восстанавливаемся.' },
    ],
    [
      { k: 'frame', text: 'вчера — самая длинная пробежка за месяц. Сегодня' },
      { k: 'metric', icon: 'rest', text: 'восстановление', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      {
        k: 'frame',
        text: 'вчера — больше, чем в обычную неделю. Хороший повод сделать день полегче.',
      },
    ],
    [
      { k: 'frame', text: 'вчера было больше' },
      { k: 'metric', icon: 'level', text: 'лестниц', tail: ',' },
      { k: 'frame', text: 'чем обычно. Лестницы сильно тянут свод стопы.' },
    ],
    [
      { k: 'frame', text: 'вчера было много' },
      { k: 'metric', icon: 'level', text: 'лестниц', tail: '.' },
      { k: 'frame', text: 'Сегодня — полегче.' },
    ],
  ],

  'on-feet': [
    // Порядок, которого нет в английском: сначала оговорка о пороге, в конце —
    // сказуемое. Это и есть причина, по которой фраза хранится массивом.
    [
      { k: 'frame', text: 'вы на ногах уже' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Оба раза, когда вы переходили за' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'следующее утро было' },
      { k: 'metric', icon: 'warn', text: 'тяжёлым.', tone: 'warn' },
    ],
    [
      { k: 'frame', text: 'сегодня уже' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'на ногах. После' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'следующее утро у вас уже бывало тяжелее.' },
    ],
    [
      { k: 'frame', text: 'день уже длинный —' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Стоит присесть минут на десять.' },
    ],
  ],

  'steps-today': [
    [
      { k: 'frame', text: 'сегодня уже' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: '— долгий день на ногах. Как пятка?' },
    ],
    [
      { k: 'frame', text: 'за сегодня уже' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Если пятка даёт о себе знать, лучше присесть, чем дохаживать.' },
    ],
  ],

  // ── Восстановление ───────────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'на этой неделе вы спали в среднем по' },
      // Точка висит на значении, а не открывает следующий фрагмент: фрейм
      // разбивается по пробелам, и точка отдельным «словом» уехала бы от того,
      // к чему относится.
      { k: 'metric', icon: 'sleep', text: '{sleep}', tail: '.' },
      { k: 'frame', text: 'Сухожилия восстанавливаются ночью — сегодня' },
      { k: 'metric', icon: 'rest', text: 'полегче', tail: '.' },
    ],
    [
      { k: 'frame', text: 'всю неделю короткие ночи —' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'в среднем. Сегодня немного убавим.' },
    ],
    [
      { k: 'frame', text: 'уже неделю сон' },
      { k: 'metric', icon: 'sleep', text: 'меньше семи часов', tail: '.' },
      { k: 'frame', text: 'Сегодня специально полегче.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'пульс покоя' },
      { k: 'metric', icon: 'level', text: 'немного выше', tail: '.' },
      { k: 'frame', text: 'Сегодня — в сторону восстановления.' },
    ],
    [
      { k: 'frame', text: 'пульс в покое' },
      { k: 'metric', icon: 'level', text: 'выше вашего обычного', tail: '.' },
      { k: 'frame', text: 'Идём аккуратно.' },
    ],
    [
      { k: 'frame', text: 'организм ещё догоняет —' },
      { k: 'metric', icon: 'level', text: 'пульс покоя выше', tail: '.' },
      { k: 'frame', text: 'Сегодня полегче.' },
    ],
  ],

  // ── Походка ──────────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'всю неделю вы ходите' },
      { k: 'metric', icon: 'gait', text: 'медленнее обычного', tail: '.' },
      { k: 'frame', text: 'Так часто бывает, когда стопа побаливает.' },
    ],
    [
      { k: 'frame', text: 'скорость ходьбы' },
      { k: 'metric', icon: 'gait', text: 'ниже вашей обычной', tail: '.' },
      { k: 'frame', text: 'Это стоит заметить, но не тревожиться.' },
    ],
    [
      { k: 'frame', text: 'шаг на этой неделе медленнее вашего обычного.' },
      { k: 'metric', icon: 'gait', text: 'Ничего тревожного' },
      { k: 'frame', text: '— но сегодня оставим полегче.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'шаг стал' },
      { k: 'metric', icon: 'gait', text: 'менее ровным', tone: 'warn' },
      { k: 'frame', text: '—' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'против ваших обычных' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'на этой неделе шаг менее ровный, чем обычно —' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'против ваших обычных' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'что-то изменилось в том, как вы ходите.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'против ваших' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'Так часто бывает, когда что-то болит.' },
    ],
  ],

  // ── Сделано, и возвращение ───────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'на сегодня всё.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Возвращайтесь завтра.' },
    ],
    [
      { k: 'frame', text: 'сегодня сделано —' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'и продолжаем.' },
    ],
    [
      { k: 'frame', text: 'сессия закрыта — это' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'вашей серии.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'с возвращением. Сегодня' },
      { k: 'metric', icon: 'session', text: 'одна короткая сессия', tail: ',' },
      { k: 'frame', text: 'чтобы втянуться.' },
    ],
    [
      { k: 'frame', text: 'рады вас видеть. Начнём' },
      { k: 'metric', icon: 'session', text: 'с малого', tail: '.' },
    ],
    [
      { k: 'frame', text: 'снова здесь — продолжим с того же места, только' },
      { k: 'metric', icon: 'session', text: 'полегче', tail: '.' },
    ],
  ],

  // ── Хорошие новости, только на спокойное утро ────────────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'по утрам' },
      { k: 'metric', icon: 'up', text: 'становится легче', tone: 'good' },
      { k: 'frame', text: '— за месяц на' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'меньше.' },
    ],
    [
      { k: 'frame', text: 'за месяц боль ниже на' },
      { k: 'metric', icon: 'up', text: '{drop}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Это реальное изменение, а не шум.' },
    ],
    [
      { k: 'frame', text: 'последние две недели были' },
      { k: 'metric', icon: 'up', text: 'спокойнее', tone: 'good' },
      { k: 'frame', text: 'предыдущих двух.' },
    ],
  ],

  // Две формулировки, а не три. По-русски третья была бы пересказом первой, а
  // ротация берёт остаток по длине *этого* массива — язык не обязан выдумывать
  // фразу ради счёта.
  'walk-back': [
    [
      { k: 'frame', text: 'скорость ходьбы' },
      { k: 'metric', icon: 'done', text: 'вернулась к вашей обычной', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Хороший знак.' },
    ],
    [
      { k: 'frame', text: 'вы снова ходите' },
      { k: 'metric', icon: 'done', text: 'в своём обычном темпе', tail: '.', tone: 'good' },
    ],
  ],

  'gait-recovered': [
    [
      { k: 'frame', text: 'походка' },
      { k: 'metric', icon: 'done', text: 'снова ровная', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Вернулись к' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'шаг' },
      { k: 'metric', icon: 'done', text: 'снова ровный', tone: 'good' },
      { k: 'frame', text: '— уже второй день.' },
    ],
    [
      { k: 'frame', text: 'всё выровнялось.' },
      { k: 'metric', icon: 'done', text: 'Снова как обычно', tail: '.', tone: 'good' },
    ],
  ],

  // ── Честная пустота ──────────────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'я ещё учусь вашей походке. Дайте мне' },
      { k: 'metric', icon: 'window', text: 'ещё несколько дней' },
      { k: 'frame', text: 'с телефоном в кармане.' },
    ],
    [
      { k: 'frame', text: 'пока собираю картину вашей нормы —' },
      { k: 'metric', icon: 'window', text: 'ещё несколько дней' },
      { k: 'frame', text: 'и будет видно.' },
    ],
    [
      { k: 'frame', text: 'вашей истории пока маловато.' },
      { k: 'metric', icon: 'window', text: 'Ещё несколько дней' },
      { k: 'frame', text: '— и я смогу сравнивать.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'я не вижу вашу походку — носите телефон в' },
      { k: 'metric', icon: 'pocket', text: 'кармане', tail: ',' },
      { k: 'frame', text: 'а не в сумке, и я её поймаю.' },
    ],
    [
      { k: 'frame', text: 'данных о ходьбе не приходит. Нужен телефон в' },
      { k: 'metric', icon: 'pocket', text: 'кармане' },
      { k: 'frame', text: 'и ровная дорога.' },
    ],
    [
      { k: 'frame', text: 'пока читать нечего — датчикам нужен телефон в' },
      { k: 'metric', icon: 'pocket', text: 'кармане' },
      { k: 'frame', text: 'во время ходьбы.' },
    ],
  ],

  // ── Обычные дни ──────────────────────────────────────────────────────────
  'quiet-session': [
    [
      { k: 'frame', text: 'сегодня —' },
      { k: 'metric', icon: 'session', text: '{move}', tail: '.' },
      { k: 'frame', text: 'Именно на этом держится план.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Самое трудное — начать — уже позади.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'вчера был большой день на ногах —' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Это контекст, а не вывод.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'вчера на ногах было' },
      { k: 'metric', icon: 'feet', text: 'полегче', tail: '.' },
      { k: 'frame', text: 'Хороший день, чтобы немного нагрузиться.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'мысль про обувь:' },
      { k: 'metric', icon: 'level', text: 'жёстче задник' },
      { k: 'frame', text: 'и чуть больший перепад снимают нагрузку со свода.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'если сегодня бежите, держите каденс примерно на' },
      { k: 'metric', icon: 'up', text: '{cadence} выше обычного', tail: '.' },
      { k: 'frame', text: 'Шаг короче — меньше нагрузки на пятку.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'большая часть изменений здесь происходит' },
      { k: 'metric', icon: 'window', text: 'рано', tail: '.' },
      { k: 'frame', text: 'Вы как раз в этом окне.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
