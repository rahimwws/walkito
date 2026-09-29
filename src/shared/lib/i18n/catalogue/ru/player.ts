/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_RU = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Приготовьтесь',
  'player.countIn.nextUp': 'Далее',
  'player.countIn.go': 'Старт',
  'player.countIn.tapToStart': 'Нажмите, чтобы начать сразу',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': 'Насколько было тяжело?',
  'player.feedback.purpose': 'По ответу мы настроим следующие сессии.',
  'player.feedback.easy': 'Слишком легко',
  'player.feedback.right': 'В самый раз',
  'player.feedback.hard': 'Слишком тяжело',
  'player.feedback.hurt': 'Было больно',
  'player.feedback.adjusts': 'Понятно. План подстроится.',
  'player.feedback.keeps': 'Понятно. Продолжаем в том же темпе.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Записали. Лёгкая болезненность после таких упражнений нормальна. Если к утру не пройдёт, утренняя отметка облегчит план.',
  'player.afterPain.highHint':
    'Это больше, чем должны давать такие упражнения. Следующая сессия начнётся на шаг легче.',
  'player.afterPain.save': 'Сохранить',
};
