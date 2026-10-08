/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_RU = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Приготовьтесь',
  'player.countIn.nextUp': 'Далее',
  'player.countIn.go': 'Старт',
  'player.countIn.tapToStart': 'Нажмите, чтобы начать сразу',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': 'Смогли бы сделать ещё 2 хороших повтора?',
  'player.feedback.purpose': 'По ответу мы настроим следующие сессии.',
  'player.feedback.easy': 'Да, легко',
  'player.feedback.right': 'Примерно так',
  'player.feedback.hard': 'Нет',
  'player.feedback.hurt': 'Было больно',
  'player.feedback.adjusts': 'Понятно. План подстроится.',
  'player.feedback.keeps': 'Понятно. Продолжаем в том же темпе.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Записали. Лёгкая болезненность после таких упражнений нормальна. Если к утру не пройдёт, утренняя отметка облегчит план.',
  'player.afterPain.highHint':
    'Это больше, чем должны давать такие упражнения. Следующая сессия начнётся на шаг легче.',
  'player.afterPain.save': 'Сохранить',
  'player.cantDo.button': 'Не могу это сделать',
  'player.cantDo.title': 'Что мешает?',
  'player.cantDo.blurb': 'Заменим сейчас и уберём из вашего плана.',
  'player.cantDo.noStep': 'Нет ступеньки',
  'player.cantDo.noBand': 'Нет резинки',
  'player.cantDo.noTowel': 'Нет полотенца',
  'player.cantDo.noPillow': 'Нет подушки',
  'player.cantDo.noBall': 'Нет мячика',
  'player.cantDo.hurts': 'Больно',
  'player.cantDo.swapped': 'Заменили на «{name}».',
  'player.cantDo.skipped': 'Сегодня заменить нечем, поэтому пропускаем.',
  'player.load.backpack': 'Наденьте рюкзак весом около 5-10% от вашего веса. Если 12 медленных повторов даются легко, добавьте ещё немного.',
  'player.painRule.title': 'Какая боль допустима?',
  'player.painRule.body': '0-3 - нормально. 4-5 - допустимо, если к следующему утру проходит. 6 и выше - остановитесь.',
  'player.painRule.ok': 'Понятно',
  'player.painRule.a11y': 'Какая боль допустима',
  'player.tempo.on': 'Звуки темпа включены',
  'player.tempo.off': 'Звуки темпа выключены',

  // ── The player's own chrome ───────────────────────────────────────────────
  'player.header.meta': '{minutes} · {moves}',
  'player.chip.position': '{index} из {total}',
  'player.cta.pause': 'Пауза',
  'player.cta.resume': 'Продолжить',
  'player.cta.done': 'Готово',
};
