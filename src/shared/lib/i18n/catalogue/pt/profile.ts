/** profile strings. Filled per domain; see `../en/core.ts` for the rules. */

export const PROFILE_PT = {
  // ── The person ───────────────────────────────────────────────────────────
  'profile.you': 'Você',
  'profile.dayStreak': 'Dias seguidos',
  'profile.sessionsDone': 'Sessões feitas',

  // ── Sections ─────────────────────────────────────────────────────────────
  'profile.sectionInvite': 'Convidar',
  'profile.sectionApp': 'App',
  'profile.sectionEmail': 'E-mail',
  'profile.sectionDanger': 'Zona de risco',

  // ── Rows ─────────────────────────────────────────────────────────────────
  'profile.referFriend': 'Convide um amigo',
  'profile.invitesJoined': { one: '{count} entrou', other: '{count} entraram' },
  'profile.inviteHint': 'Amigos ganham {percent}% de desconto na assinatura anual',
  'profile.rate': 'Avaliar o Walkito',
  'profile.contactSupport': 'Falar com o suporte',
  'profile.deleteAccount': 'Excluir conta',

  // ── Delete account sheet ─────────────────────────────────────────────────
  'profile.deleteTitle': 'Excluir a conta?',
  'profile.deleteBlurb':
    'Isso apaga seu programa, seu registro de dor, sua sequência e seu código de convite, deste aparelho e dos nossos servidores. Não dá para desfazer.',
  'profile.deleteSubscription':
    'Excluir sua conta não cancela sua assinatura. Ela é cobrada pela Apple e se renova até você cancelar em Ajustes.',
  'profile.deleteSubscriptionAndroid':
    'Excluir sua conta não cancela sua assinatura. Ela é cobrada pelo Google Play e se renova até você cancelar lá.',
  'profile.manageSubscription': 'Gerenciar assinatura',
  'profile.deleteLocalOnly':
    'Seus dados foram apagados deste aparelho, mas não foi possível falar com o servidor. Abra o app com conexão para terminar, ou escreva para o suporte.',
  'profile.deleteConfirm': 'Apagar tudo',
  'profile.deleting': 'Apagando…',
  'profile.keepAccount': 'Manter minha conta',

  // ── Reset row (development builds only) ──────────────────────────────────
  'profile.resetLabel': 'Voltar à primeira tela',
  'profile.resetHint': 'Só em versões de desenvolvimento',
  'profile.resetA11y': 'Voltar à primeira tela',
  'profile.resetAlertTitle': 'Começar da primeira tela?',
  'profile.resetAlertBody':
    'Apaga o onboarding, o programa, o registro de dor e os vídeos salvos neste aparelho. Sua conta e seu código de convite continuam. Só para desenvolvimento.',
  'profile.resetCancel': 'Cancelar',
  'profile.resetConfirm': 'Redefinir',
  'profile.notePreviewLabel': 'Ver o recado',
  'profile.notePreviewHint': 'O que aparece no fim do onboarding',
};
