/** Home offer: the one-time trial, the comeback and the plans after the paywall's "Not now", and their pushes. Filled per domain; see
 * `../en/home-offer.ts` for the rules (no prices, `**…**` marks the heavier words, "Walkito Plus" stays as it is). */

export const HOME_OFFER_RU = {
  'homeOffer.trial.title': 'Постойте, это разовое предложение',
  'homeOffer.trial.bodyWeek': '**Walkito Plus на год**, и **первая неделя бесплатно**.',
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus на год**, и **первая {count} неделя бесплатно**.',
    few: '**Walkito Plus на год**, и **первые {count} недели бесплатно**.',
    many: '**Walkito Plus на год**, и **первые {count} недель бесплатно**.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus на год**, и **первый {count} день бесплатно**.',
    few: '**Walkito Plus на год**, и **первые {count} дня бесплатно**.',
    many: '**Walkito Plus на год**, и **первые {count} дней бесплатно**.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus на год**, и **первый {count} месяц бесплатно**.',
    few: '**Walkito Plus на год**, и **первые {count} месяца бесплатно**.',
    many: '**Walkito Plus на год**, и **первые {count} месяцев бесплатно**.',
  },
  'homeOffer.trial.ctaDays': {
    one: 'Попробовать {count} день бесплатно',
    few: 'Попробовать {count} дня бесплатно',
    many: 'Попробовать {count} дней бесплатно',
  },
  'homeOffer.trial.ctaMonths': {
    one: 'Попробовать {count} месяц бесплатно',
    few: 'Попробовать {count} месяца бесплатно',
    many: 'Попробовать {count} месяцев бесплатно',
  },
  'homeOffer.trial.reminder': {
    one: 'Мы напомним за {count} день до конца пробного периода.',
    few: 'Мы напомним за {count} дня до конца пробного периода.',
    many: 'Мы напомним за {count} дней до конца пробного периода.',
  },

  'homeOffer.comeback.title': 'Ограниченное предложение',
  'homeOffer.comeback.endsIn': 'Закончится через {time}',
  'homeOffer.comeback.bodyBoth': 'Оставьте **Walkito Plus** себе как удобно: **год дешевле** или **навсегда**.',
  'homeOffer.comeback.bodyYear': '**Год Walkito Plus** по сниженной цене. Предложение действует недолго.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus навсегда** за один платёж. Предложение действует недолго.',
  'homeOffer.comeback.cta': 'Забрать предложение',

  'homeOffer.card.off': 'Скидка {percent}%',
  'homeOffer.card.onlyOnce': 'Только один раз',
  'homeOffer.card.wasNow': 'Было {was}, теперь {now}',
  'homeOffer.card.perMonthFirstYear': 'Это {price} в месяц в первый год',
  'homeOffer.card.perMonth': 'Это {price} в месяц',
  'homeOffer.card.lifetime': 'Один платёж, и доступ ваш навсегда',

  'homeOffer.standard.title': 'Продолжайте с Walkito Plus',
  'homeOffer.standard.body': 'Ваш план, все сессии и все ретесты. **Выберите, как вам удобнее.**',
  'homeOffer.standard.cta': 'Продолжить',

  'homeOffer.plan.yearly': 'На год',
  'homeOffer.plan.monthly': 'На месяц',
  'homeOffer.plan.weekly': 'На неделю',
  'homeOffer.plan.lifetime': 'Навсегда',
  'homeOffer.tab.year': 'Год',
  'homeOffer.tab.month': 'Месяц',
  'homeOffer.tab.week': 'Неделя',
  'homeOffer.tab.lifetime': 'Навсегда',

  'homeOffer.price.perYear': '{price}/год',
  'homeOffer.price.perMonth': '{price}/мес',
  'homeOffer.price.perWeek': '{price}/нед',
  'homeOffer.price.once': '{price} один раз',
  'homeOffer.price.firstYear': '{price} за первый год',
  'homeOffer.price.lifetimeNote': 'Один платёж, и доступ ваш навсегда. Ничего не продлевается.',

  'homeOffer.badge.freeDays': {
    one: '{count} день бесплатно',
    few: '{count} дня бесплатно',
    many: '{count} дней бесплатно',
  },
  'homeOffer.badge.freeWeeks': {
    one: '{count} неделя бесплатно',
    few: '{count} недели бесплатно',
    many: '{count} недель бесплатно',
  },
  'homeOffer.badge.freeMonths': {
    one: '{count} месяц бесплатно',
    few: '{count} месяца бесплатно',
    many: '{count} месяцев бесплатно',
  },
  'homeOffer.badge.save': 'Выгода {percent}%',

  'homeOffer.terms.trialDays': {
    one: 'Бесплатно {count} день, затем {price} в год. Сегодня ничего не списывается.',
    few: 'Бесплатно {count} дня, затем {price} в год. Сегодня ничего не списывается.',
    many: 'Бесплатно {count} дней, затем {price} в год. Сегодня ничего не списывается.',
  },
  'homeOffer.terms.trialMonths': {
    one: 'Бесплатно {count} месяц, затем {price} в год. Сегодня ничего не списывается.',
    few: 'Бесплатно {count} месяца, затем {price} в год. Сегодня ничего не списывается.',
    many: 'Бесплатно {count} месяцев, затем {price} в год. Сегодня ничего не списывается.',
  },
  'homeOffer.terms.trialCancel': 'Отмените в Настройках до конца пробного периода, и вы ничего не заплатите.',
  'homeOffer.terms.trialCancelAndroid': 'Отмените в Google Play до конца пробного периода, и вы ничего не заплатите.',
  'homeOffer.terms.introYear': 'Подписка на год: {introPrice} за первый год, затем {price} в год.',
  'homeOffer.terms.monthly': 'Подписка на месяц: {price} в месяц.',
  'homeOffer.terms.lifetime': 'Один платёж {price}. Ничего не продлевается.',

  'homeOffer.push.lastChanceTitle': 'Не переживайте, вот последний шанс',
  'homeOffer.push.lastChanceBoth': 'Год Walkito Plus дешевле или доступ навсегда.',
  'homeOffer.push.lastChanceYear': 'Год Walkito Plus по сниженной цене, но только недолго.',
  'homeOffer.push.lastChanceLifetime': 'Walkito Plus навсегда за один платёж, но только недолго.',
  'homeOffer.push.endsSoonTitle': 'Предложение скоро закончится',
  'homeOffer.push.endsSoonBody': 'Сниженная цена на Walkito Plus пропадёт через несколько часов.',
  'homeOffer.push.trialEndsTitle': {
    one: 'Пробный период закончится через {count} день',
    few: 'Пробный период закончится через {count} дня',
    many: 'Пробный период закончится через {count} дней',
  },
  'homeOffer.push.trialEndsBody':
    'Дальше подписка на Walkito Plus продлится за {price} в год. Если она вам не подходит, отмените её до этого в настройках подписок.',
};
