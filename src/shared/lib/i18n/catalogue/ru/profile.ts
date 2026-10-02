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
  'profile.inviteHint': 'Друзьям - скидка {percent}% на годовую подписку',
  'profile.rate': 'Оценить Walkito',
  'profile.contactSupport': 'Написать в поддержку',
  'profile.deleteAccount': 'Удалить аккаунт',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Удалить аккаунт?',
  'profile.deleteBlurb':
    'Будут удалены ваша программа, дневник боли, серия и код приглашения - и с устройства, и с наших серверов. Отменить это будет нельзя.',
  'profile.deleteSubscription':
    'Удаление аккаунта не отменяет подписку. Её оплачивают через Apple, и она продлевается, пока вы не отмените её в Настройках.',
  'profile.deleteSubscriptionAndroid':
    'Удаление аккаунта не отменяет подписку. Её оплачивают через Google Play, и она продлевается, пока вы не отмените её там.',
  'profile.manageSubscription': 'Управление подпиской',
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
