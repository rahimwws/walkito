/**
 * The exercise catalogue, in Russian.
 *
 * Anatomy uses the terms a Russian physiotherapist writes on a programme
 * sheet, not calques of the English:
 *
 * - plantar fascia → подошвенная фасция (фасция alone once the app's subject
 *   is established; апоневроз is the anatomy-textbook register and is not what
 *   a clinician says to a patient)
 * - arch → свод стопы
 * - gastrocnemius → икроножная мышца, soleus → камбаловидная мышца
 * - ball of the foot → подушечка стопы
 * - **ankle → голеностоп**, never лодыжка or щиколотка. Those name the
 *   malleolus — the bony bump — and using them for the joint reads as a
 *   translation error to anyone who knows the difference.
 * - the short-foot exercise → «короткая стопа», an established calque in
 *   Russian physio literature and conventionally quoted.
 *
 * Cues are rewritten rather than transposed. They are instructions somebody
 * follows with a foot that hurts, so where the English leans on a pun or an
 * ellipsis — "the arch is cheating", "the lift is not the point" — the Russian
 * says the physical thing plainly and keeps the warmth in the sentence around
 * it. «Вы», throughout: a coach who is encouraging without being familiar.
 */
export const EXERCISES_RU = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Растяжка фасции',
  'exercises.fasciaStretch.rationale': 'Первый подход сделайте до того, как встанете на ногу.',
  'exercises.fasciaStretch.cue':
    'Тяните пальцы на себя, пока не почувствуете свод стопы, а не икру.',

  'exercises.calfStretchStraight.title': 'Растяжка икры',
  'exercises.calfStretchStraight.rationale': 'Зажатая икра весь день тянет за пятку.',
  'exercises.calfStretchStraight.cue': 'Задняя нога прямая, пятка на полу, таз вперёд.',

  'exercises.calfStretchBent.title': 'Растяжка камбаловидной',
  'exercises.calfStretchBent.rationale':
    'Камбаловидная мышца лежит глубже и отпускает только при согнутом колене.',
  'exercises.calfStretchBent.cue':
    'Согните заднее колено, пока не почувствуете натяжение ниже, ближе к пятке.',

  'exercises.ankleRocks.title': 'Качания в голеностопе',
  'exercises.ankleRocks.rationale': 'Подвижный голеностоп позволяет пятке оставаться на полу.',
  'exercises.ankleRocks.cue': 'Колено уходит вперёд за пальцы, пятка остаётся на полу.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Подъёмы на носки',
  'exercises.heelRaiseTowel.rationale': 'Именно это упражнение быстрее всего снимает боль.',
  'exercises.heelRaiseTowel.cue': 'Полотенце под пальцами. Без него вы просто качаете икры.',

  'exercises.heelRaisePlain.title': 'Подъёмы на одной ноге',
  'exercises.heelRaisePlain.rationale': 'Этот вариант останется с вами после конца программы.',
  'exercises.heelRaisePlain.cue':
    'Три секунды вверх, три вниз. Быстрый темп сводит упражнение на нет.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Короткая стопа',
  'exercises.shortFootSeated.rationale': 'Свод держат мышцы внутри самой стопы.',
  'exercises.shortFootSeated.cue': 'Не поджимайте пальцы. Подтягивайте подушечку стопы к пятке.',

  'exercises.shortFootDouble.title': 'Короткая стопа стоя',
  'exercises.shortFootDouble.rationale': 'Те же мышцы, только теперь они держат ваш вес.',
  'exercises.shortFootDouble.cue':
    'Пальцы остаются плоскими и вытянутыми. Поднимается только свод.',

  'exercises.shortFootSingle.title': 'Короткая стопа, одна нога',
  'exercises.shortFootSingle.rationale': 'На одной ноге сразу видно, какая сторона слабее.',
  'exercises.shortFootSingle.cue':
    'Большой палец остаётся прижатым. Если он поднимается — свод схитрил.',

  'exercises.toeSpread.title': 'Разведение пальцев',
  'exercises.toeSpread.rationale':
    'Пальцы, которые умеют расходиться, берут часть нагрузки со свода.',
  'exercises.toeSpread.cue': 'Разведите пальцы широко и удержите. Поднимать их не нужно.',

  'exercises.bandInversion.title': 'Поворот стопы внутрь',
  'exercises.bandInversion.rationale':
    'Поворот стопы внутрь тренирует мышцу, которая проходит под сводом.',
  'exercises.bandInversion.cue':
    'Двигается только стопа против резинки, а не вся нога. Колено остаётся на месте.',

  'exercises.hipAbduction.title': 'Отведение бедра',
  'exercises.hipAbduction.rationale': 'Когда бедро проваливается, нагрузка уходит на свод стопы.',
  'exercises.hipAbduction.cue': 'Отталкивайтесь пяткой, а не пальцами.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Стойка на одной ноге',
  'exercises.singleLegHold.rationale':
    'Стойка на одной ноге — первый тест, который стопа перестаёт проходить.',
  'exercises.singleLegHold.cue': 'Смотрите в одну точку. Пусть стопа покачивается — так и нужно.',

  'exercises.eyesClosedStand.title': 'Стойка с закрытыми глазами',
  'exercises.eyesClosedStand.rationale': 'С закрытыми глазами равновесие держит сама стопа.',
  'exercises.eyesClosedStand.cue': 'Встаньте рядом со стеной. Опереться на неё — нормально.',

  'exercises.heelToeWalk.title': 'Ходьба с пятки на носок',
  'exercises.heelToeWalk.rationale':
    'Перекат с пятки на носок — это свод, который по порядку нагружается и разгружается.',
  'exercises.heelToeWalk.cue':
    'Сначала опускается пятка, затем идёт перекат. Медленно — так, чтобы можно было остановиться на середине шага.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Прокатывание стопы',
  'exercises.footRoll.rationale': 'Прокатывание успокаивает ткань после нагрузки.',
  'exercises.footRoll.cue': 'Медленно и с нажимом. Если морщитесь от боли — ослабьте нажим.',

  'exercises.barefootHome.title': 'Босиком дома',
  'exercises.barefootHome.rationale': 'Часы босиком — это часы, которые стопа проводит в работе.',
  'exercises.barefootHome.cue': 'Только дома, на ровном полу, и увеличивайте время постепенно.',

  'exercises.breathingReset.title': 'Дыхательная пауза',
  'exercises.breathingReset.rationale': 'Минута медленного дыхания правильно завершает сессию.',
  'exercises.breathingReset.cue': 'Выдох длиннее вдоха. Вот и всё.',

  // ── The morning stretch ──────────────────────────────────────────────────
  'exercises.morningStretch.copy':
    'Прежде чем встать: потяните пальцы на себя — 10 секунд, 10 раз.',

  // ── Load notes ───────────────────────────────────────────────────────────
  'exercises.loadNote.backpack':
    'Наденьте рюкзак. Такой тяжёлый, чтобы последнее повторение было действительно последним.',
  'exercises.loadNote.heavier': 'Добавьте веса. Восемь повторений должны даваться на пределе.',
  'exercises.loadNote.towelOff':
    'Полотенце убираем. Только свой вес. Этот вариант останется с вами.',

  // ── Categories ───────────────────────────────────────────────────────────
  // «Тренировка» rather than «Сила»: the bucket holds balance and intrinsic
  // foot work alongside the loaded lifts, and calling a one-legged stand
  // "strength" would be naming it wrong to sound tidier.
  'exercises.category.fitness': 'Тренировка',
  'exercises.category.mobility': 'Подвижность',
  'exercises.category.recovery': 'Восстановление',
  'exercises.category.habit': 'Привычка',

  // ── Dose ─────────────────────────────────────────────────────────────────
  // Seconds are «с» with a space, which is the Russian convention and not the
  // English "30s" with the letter pushed against the digit.
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds} с',
  'exercises.dose.hold': '{seconds} с',
  'exercises.dose.holdMinutes': '{minutes} мин',
  'exercises.dose.sets': {
    one: '{count} подход',
    few: '{count} подхода',
    many: '{count} подходов',
  },
  'exercises.dose.bothFeet': '{dose} · на обе стопы',
};
