/**
 * Brazilian Portuguese.
 *
 * Written for Brazil: `você` throughout, which is the register a coach uses
 * and the one the English copy already has, and Brazilian vocabulary (`tela`,
 * `celular`, `panturrilha`), never the European forms.
 *
 * The `many` plural form is optional in this catalogue's type and is left out
 * everywhere - in Portuguese it is the whole-millions form, and no count in
 * this app reaches a million days. `one` is exactly 1; zero takes `other`.
 */
export const CORE_PT = {
  // ── Language picker ──────────────────────────────────────────────────────
  'language.title': 'Idioma',
  'language.system': 'Sistema',
  'language.systemHint': 'Seguir o aparelho - {language}',
  'language.note': 'A escolha fica salva neste aparelho.',
  'language.a11yLabel': 'Idioma, {language}',
  'language.a11yHint': 'Muda o idioma do app',

  'error.title': 'Algo deu errado',
  'error.body': 'Seu plano e seu progresso estão seguros. Tente de novo.',
  'error.retry': 'Tentar de novo',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Ajustes',
  'settings.terms': 'Termos de uso',
  'settings.termsHint': 'O contrato da assinatura',
  'settings.privacy': 'Política de privacidade',
  'settings.privacyHint': 'O que guardamos, e onde',
  'settings.unpublished': 'Ainda não publicado',
  'settings.email.section': 'E-mail',
  'settings.email.address': 'Enviado para {email}',
  'settings.email.none': 'Ainda não há endereço de e-mail. Entrar na conta adiciona um.',
  'settings.email.unavailable': 'Não foi possível carregar os ajustes de e-mail. Tente de novo com conexão.',
  'settings.email.tips': 'Dicas e lembretes',
  'settings.email.weekly': 'Resumo semanal',
  'settings.email.unsubscribeAll': 'Cancelar todos',
  'settings.email.unsubscribed': 'Você não vai receber nenhum e-mail. Ative uma opção de novo para voltar a receber.',
  'settings.write': 'Escrever para o Rahim',
  'settings.writeHint': 'Uma pessoa lê cada mensagem',
  'settings.writeSubject': 'Walkito',
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  'settings.planSection': 'Seu plano',
  'settings.outcome': 'Seu objetivo',
  'settings.outcome.painfree': 'Sem dor',
  'settings.outcome.flat_feet': 'Arcos mais fortes',
  'settings.outcome.stronger': 'Pernas mais fortes',
  'settings.outcome.injury_free': 'Pernas firmes',
  'settings.outcome.stable_ankles': 'Tornozelos firmes',
  'settings.outcome.jump_higher': 'Pular mais alto',
  'settings.outcome.race_ready': 'Pronto para a prova',
  'settings.outcome.all_day': 'O dia todo de pé',
  'settings.outcome.comeback': 'Volta após lesão',
  'settings.outcome.steady': 'Passos confiantes',
  'settings.daysPerWeek': 'Dias por semana',
  'settings.minutesPerDay': 'Minutos por dia',
  'settings.whichFoot': 'Qual pé',
  'settings.footLeft': 'Esquerdo',
  'settings.footRight': 'Direito',
  'settings.footBoth': 'Os dois',
  'settings.whereItHurts': 'Onde dói',
  'settings.whereItHurtsNone': 'Nada marcado',
  'settings.sound.title': 'Sons da sessão',
  'settings.sound.tempo': 'Som na sessão',
  'settings.sound.tempoHint': 'Cada exercício explicado em voz alta ao começar, e uma batida para as repetições lentas.',
  'settings.sound.voice': 'Contagem em voz alta',
  'settings.sound.voiceHint': 'Diz “sobe, 2, 3, segura, desce” em vez de tons.',
  'settings.equipment': 'O que tenho em casa',
  'settings.equipment.step': 'Um degrau',
  'settings.equipment.band': 'Faixa elástica',
  'settings.equipment.towel': 'Toalha',
  'settings.equipment.pillow': 'Travesseiro',
  'settings.equipment.ball': 'Bolinha de massagem',
  'settings.account.saveTitle': 'Guarde seu progresso',
  'settings.account.saveBody': 'Entre com a Apple e seu plano, registros e testes voltam em um celular novo ou depois de reinstalar.',
  'settings.account.saveBodyGoogle': 'Entre com o Google e seu plano, registros e testes voltam em um celular novo ou depois de reinstalar.',
  'settings.account.signedIn': 'Conectado com a Apple. Seu progresso fica salvo na sua conta.',
  'settings.lastSync': 'Última sincronização: {time}',
  'settings.lastSyncNever': 'Ainda não sincronizado',
  'settings.reminder': 'Horário do lembrete',
  'settings.disclaimer': 'O Walkito não é um dispositivo médico e não diagnostica, trata, cura nem previne nenhuma condição de saúde. Se a dor for aguda, estiver piorando ou vier com inchaço, dormência ou febre, pare e procure um médico.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'streak.title': { one: '{count} dia seguido', other: '{count} dias seguidos' },
  'streak.milestoneBlurb': 'Cada um desses dias contou.',
  'streak.milestoneBigBlurb': 'Dez dias. É aqui que um hábito começa a se firmar.',
  'streak.rule':
    'Um dia conta quando você faz o registro, treina, termina uma rotina da biblioteca ou o plano te dá um dia de descanso.',
  'streak.total': { one: '{count} dia até agora.', other: '{count} dias até agora.' },
  'streak.dismiss': 'Entendi',
  'streak.dayCount': { one: '{count} dia', other: '{count} dias' },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  'session.day': 'Dia {day}',
  'session.minutes': { one: '{count} min', other: '{count} min' },
  'session.moveCount': { one: '{count} exercício', other: '{count} exercícios' },
  'session.secondsLeftA11y': {
    one: 'falta {count} segundo',
    other: 'faltam {count} segundos',
  },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Convide um amigo',
  'gift.blurb': 'Compartilhe seu código. Um amigo que entrar com ele ganha {percent}% de desconto na assinatura anual.',
  'gift.unavailable': 'Os convites não estão disponíveis nesta versão.',
  'gift.shareMessage':
    'Use meu código {code} no Walkito e ganhe {percent}% de desconto na assinatura anual.',
  'gift.share': 'Compartilhar código',
  'gift.shared': 'Copiado',
  'gift.copy': 'Copiar em vez disso',
  'gift.copied': 'Copiado para a área de transferência',
  'gift.copyA11y': 'Copiar o código {code}',
  'gift.dismiss': 'Talvez depois',
  'gift.openA11y': 'Pegue seu presente',
  'gift.capsule': 'Presente',

  // ── Waits ──────────────────────────────────────────────────────────────────
  'time.hoursMinutes': '{hours} h {minutes} min',
  'time.minutes': '{count} min',
  'time.underMinute': '<1 min',

  // ── The next session ───────────────────────────────────────────────────────
  'nextSession.in': 'Próxima sessão em {time}',
  'nextSession.on': 'Próxima sessão: {day}',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Começar sessão',
  'card.dailyGoal': 'Meta do dia',
  'card.getStarted': 'Começar',
  'card.last7Days': 'Últimos 7 dias',
  'band.excellent': 'Excelente',
  'band.strong': 'Forte',
  'band.steady': 'Constante',
  'band.building': 'Em construção',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  'purchase.unavailable': 'Esse plano não está disponível agora.',

  'quick.deleteTitle': '{name}, espere.',
  'quick.deleteBody': 'Estou prestes a apagar o app.\n\nO que me fez desistir:\n\n',
  'quick.deleteSubject': 'Antes de apagar o Walkito',
  'quick.talkSubject': 'Algo não está certo no Walkito',
  'quick.talkBody': 'Oi -\n\nO que está acontecendo:\n\n',
  'quick.deleteSubtitle': 'Vai apagar? Conte o que deu errado.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Início',
  'tabs.progress': 'Progresso',

  // ── Account / sign-in errors ───────────────────────────────────────────────
  'auth.noServer': 'Esta versão não tem servidor de contas. Use Continuar com a Apple.',
  'auth.missingFields': 'Digite o e-mail e a senha.',
  'auth.invalidCredentials': 'O e-mail e a senha não conferem.',
  'auth.notConfirmed':
    'Essa conta ainda não foi confirmada. Confirme o endereço de e-mail e tente de novo.',
  'auth.banned': 'Essa conta está desativada.',
  'auth.providerDisabled':
    'O login por e-mail está desativado neste app. Use Continuar com a Apple.',
  'auth.rateLimited': 'Tentativas demais. Espere um minuto e tente de novo.',
  'auth.badEmail': 'Isso não parece um endereço de e-mail.',
  'auth.noAccount': 'Nenhuma conta foi retornada.',
  'auth.generic': 'Não deu certo.',
  'auth.unreachable': 'Não foi possível conectar ao servidor.',

  // ── Maintenance and regression ───────────────────────────────────────────
  'maintenance.throughNamed': '{name}, você concluiu.',
  'maintenance.through': 'Você concluiu.',
  'maintenance.calfGain': '{opening} Sua panturrilha foi ↗ de {before} para {after}.',
  'maintenance.relapse': 'Cerca de metade das pessoas perde isso de novo em até cinco anos.',
  'maintenance.staying': 'Duas sessões por semana é como você fica na outra metade.',
  'maintenance.regression': 'Seus números caíram um pouco. Quer fazer {block} de novo?',

  // ── Block names ──────────────────────────────────────────────────────────
  'block.settle': 'Acalmar',
  'block.strengthen': 'Fortalecer',
  'block.load': 'Carga',
  'block.build': 'Construir',
  'block.control': 'Controle',
  'block.sustain': 'Manter',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Voltar',
  'common.close': 'Fechar',
  'common.profile': 'Perfil',
  'common.done': 'Pronto',
  'common.cancel': 'Cancelar',
};
