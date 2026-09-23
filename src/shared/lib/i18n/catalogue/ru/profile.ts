/** profile strings. Filled per domain; see `../en/core.ts` for the rules. */

export const PROFILE_RU = {
  // ── The person ───────────────────────────────────────────────────────────
  'profile.you': 'Вы',
  // Both tiles are captions under a figure, so they are written as the figure
  // would be read out: "12 — дней подряд", "12 — сессий пройдено".
  'profile.dayStreak': 'Дней подряд',
  'profile.sessionsDone': 'Сессий пройдено',

  // ── Sections ─────────────────────────────────────────────────────────────
  'profile.sectionInvite': 'Приглашения',
  'profile.sectionApp': 'Приложение',
  'profile.sectionEmail': 'Почта',
  'profile.sectionDanger': 'Опасная зона',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Пригласить друга',
  'profile.invitesJoined': {
    one: '{count} присоединился',
    few: '{count} присоединились',
    many: '{count} присоединились',
  },
  'profile.weeksPerFriend': {
    one: '{count} бесплатная неделя за каждого друга',
    few: '{count} бесплатные недели за каждого друга',
    many: '{count} бесплатных недель за каждого друга',
  },
  'profile.weeksEarned': {
    one: 'Заработано: +{count} бесплатная неделя',
    few: 'Заработано: +{count} бесплатные недели',
    many: 'Заработано: +{count} бесплатных недель',
  },
  'profile.weeksEarnedMax': {
    one: 'Заработано: +{count} бесплатная неделя — это максимум',
    few: 'Заработано: +{count} бесплатные недели — это максимум',
    many: 'Заработано: +{count} бесплатных недель — это максимум',
  },
  'profile.contactSupport': 'Написать в поддержку',
  'profile.deleteAccount': 'Удалить аккаунт',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Удалить аккаунт?',
  'profile.deleteBlurb':
    'Будут удалены ваша программа, дневник боли, серия и код приглашения — и с устройства, и с наших серверов. Отменить это будет нельзя.',
  'profile.deleteLocalOnly':
    'Данные удалены с устройства, но сервер оказался недоступен. Откройте приложение при подключении к сети, чтобы завершить, или напишите в поддержку.',
  'profile.deleteConfirm': 'Удалить всё',
  'profile.deleting': 'Удаляем…',
  'profile.keepAccount': 'Оставить аккаунт',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Сбросить до первого экрана',
  'profile.resetHint': 'Только в dev-сборке',
  'profile.resetA11y': 'Сбросить до первого экрана',
  'profile.resetAlertTitle': 'Начать с первого экрана?',
  'profile.resetAlertBody':
    'Очистит онбординг, программу, дневник боли и скачанные ролики на этом устройстве. Аккаунт и код приглашения останутся. Только для разработки.',
  'profile.resetCancel': 'Отмена',
  'profile.resetConfirm': 'Сбросить',
  'profile.notePreviewLabel': 'Посмотреть записку',
  'profile.notePreviewHint': 'Ту, что показывается в конце онбординга',
};
