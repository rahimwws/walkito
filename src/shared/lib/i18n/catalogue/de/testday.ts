/** testday strings (the guided test day: intro, the three tests, results), German. Filled per domain; see `../en/core.ts` for the rules. */

export const TESTDAY_DE = {
  // ── Chrome ────────────────────────────────────────────────────────────────
  'testday.close': 'Schließen',
  'testday.leave.title': 'Test verlassen?',
  'testday.leave.body': 'Gespeichert wird erst nach dem letzten Test. Der Test bleibt offen.',
  'testday.leave.stay': 'Weiter testen',
  'testday.leave.confirm': 'Verlassen',

  // ── Intro ─────────────────────────────────────────────────────────────────
  'testday.intro.eyebrow': 'Testtag',
  'testday.intro.title': 'Drei kurze Tests',
  'testday.intro.body': {
    one: 'Etwa {count} Minute.',
    other: 'Etwa {count} Minuten.',
  },
  'testday.intro.nowSeconds': 'Jetzt {now} s · Ziel {goal} s',
  'testday.intro.nowRaises': {
    one: 'Jetzt {now} · Ziel {count} Wiederholung',
    other: 'Jetzt {now} · Ziel {count} Wiederholungen',
  },
  'testday.intro.firstSeconds': 'Erste Messung · Ziel {goal} s',
  'testday.intro.firstRaises': {
    one: 'Erste Messung · Ziel {count} Wiederholung',
    other: 'Erste Messung · Ziel {count} Wiederholungen',
  },
  'testday.intro.need': 'Du brauchst',
  'testday.intro.needBarefoot': 'Nackte Füße',
  'testday.intro.needWall': 'Eine Wand zum Festhalten',
  'testday.intro.needPhone': 'Das Handy in Sichtweite',
  'testday.intro.checkin': 'Wie geht es dem Fuß gerade?',
  'testday.intro.checkinHint': 'Das zählt als heutiger Check-in.',
  'testday.intro.painNone': 'Kein Schmerz',
  'testday.intro.painWorst': 'Am stärksten',
  'testday.intro.painA11y': '{score} von 10',
  'testday.intro.sore':
    'An einem gereizten Tag fallen die Zahlen niedriger aus, als dein Fuß wirklich ist, und die nächsten zwei Wochen würden danach geplant. Der Test kann bis morgen warten.',
  'testday.intro.start': 'Starten',
  'testday.intro.anyway': 'Trotzdem testen',
  'testday.intro.tomorrow': 'Morgen testen',

  // ── The three tests ───────────────────────────────────────────────────────
  'testday.test.eyebrow': 'Test {current} von {total}',
  'testday.test.calf.name': 'Fersenheben',
  'testday.test.arch.name': 'Gewölbe halten',
  'testday.test.balance.name': 'Balance',

  'testday.side.left': 'Linkes Bein',
  'testday.side.right': 'Rechtes Bein',
  'testday.side.leftSore': 'Linkes Bein - das gereizte',
  'testday.side.rightSore': 'Rechtes Bein - das gereizte',

  // The button on the picture before a test: opens the clip at full size.

  'testday.watch': 'Video ansehen',

  'testday.calf.step1': 'Auf einem Bein, Fingerspitzen an der Wand.',
  'testday.calf.step2': 'Ganz hoch und wieder runter, im Takt.',
  'testday.calf.step3': 'Stopp, wenn du Takt oder Höhe verlierst.',
  'testday.calf.stopHint': 'Tippen, wenn du Tempo oder volle Höhe nicht mehr hältst',
  'testday.calf.up': 'Hoch',
  'testday.calf.down': 'Runter',
  'testday.calf.otherTitle': 'Jetzt das andere Bein',
  'testday.calf.otherBody': 'Gleiches Tempo, gleiche volle Höhe, Fingerspitzen an der Wand.',

  'testday.arch.step1': 'Auf beiden Füßen stehen.',
  'testday.arch.step2': 'Zieh den Fußballen zur Ferse.',
  'testday.arch.step3': 'Stopp, wenn das Gewölbe absinkt.',
  'testday.arch.stopHint': 'Tippen, sobald das Gewölbe absinkt',

  'testday.balance.step1': 'Auf einem Bein, Hände in die Hüften.',
  'testday.balance.step2': 'Beim Start die Augen schließen.',
  'testday.balance.step3': 'Stopp, sobald der andere Fuß aufsetzt.',
  'testday.balance.stopHint': 'Tippen, wenn der andere Fuß den Boden berührt',

  'testday.start': 'Starten',
  'testday.stop': 'Stopp',
  'testday.timeLeft': 'Noch {time}',
  'testday.secondsLeft': { one: 'Sekunde übrig', other: 'Sekunden übrig' },
  'testday.held': '{n} s gehalten',

  'testday.paused.title': 'Pausiert',
  'testday.paused.body': 'Der Timer hat angehalten, während die App im Hintergrund war.',
  'testday.paused.resume': 'Fortsetzen',
  'testday.paused.restart': 'Diesen Test neu starten',

  'testday.confirm.raises': {
    one: '{count} Wiederholung - stimmt das?',
    other: '{count} Wiederholungen - stimmt das?',
  },
  'testday.confirm.seconds': {
    one: '{count} Sekunde - stimmt das?',
    other: '{count} Sekunden - stimmt das?',
  },
  'testday.confirm.hint': 'Pass es an, wenn die Zählung nicht gestimmt hat.',
  'testday.confirm.holdHint': 'Wenn du kurz zum Handy gebraucht hast, zieh diese Sekunden ab.',
  'testday.confirm.less': 'Weniger',
  'testday.confirm.more': 'Mehr',
  'testday.confirm.again': 'Diesen Test wiederholen',
  'testday.confirm.next': 'Nächster Test',
  'testday.confirm.finish': 'Ergebnisse ansehen',

  // ── Results ───────────────────────────────────────────────────────────────
  'testday.results.firstBlurb': 'Der nächste Test zeigt, wie weit du gekommen bist.',
  'testday.results.name.arch_hold': 'Gewölbe halten',
  'testday.results.name.calf_raises': 'Fersenheben',
  'testday.results.name.balance': 'Balance',
  'testday.results.name.symmetry': 'Symmetrie',
  'testday.results.unitSeconds': { one: 'Sekunde', other: 'Sekunden' },
  'testday.results.unitRaises': { one: 'Wiederholung', other: 'Wiederholungen' },
  'testday.results.percent': '{n} %',
  'testday.results.gapUnit': 'zwischen den Beinen',
  'testday.results.legs': 'Links {left} · rechts {right}',
  'testday.results.goalGap': 'Ziel unter {n} %',
  'testday.results.toGoSeconds': { one: 'Noch {count} s', other: 'Noch {count} s' },
  'testday.results.toGoRaises': { one: 'Noch {count} Wiederholung', other: 'Noch {count} Wiederholungen' },
  'testday.results.toGoGap': { one: 'Noch {count} Punkt', other: 'Noch {count} Punkte' },
  'testday.results.reached': 'Ziel erreicht',
  'testday.results.moreSeconds': {
    one: '{count} s mehr als beim letzten Mal',
    other: '{count} s mehr als beim letzten Mal',
  },
  'testday.results.fewerSeconds': {
    one: '{count} s weniger als beim letzten Mal',
    other: '{count} s weniger als beim letzten Mal',
  },
  'testday.results.moreRaises': {
    one: '{count} Wiederholung mehr als beim letzten Mal',
    other: '{count} Wiederholungen mehr als beim letzten Mal',
  },
  'testday.results.fewerRaises': {
    one: '{count} Wiederholung weniger als beim letzten Mal',
    other: '{count} Wiederholungen weniger als beim letzten Mal',
  },
  'testday.results.gapSmaller': {
    one: 'Unterschied {count} Punkt kleiner als beim letzten Mal',
    other: 'Unterschied {count} Punkte kleiner als beim letzten Mal',
  },
  'testday.results.gapLarger': {
    one: 'Unterschied {count} Punkt größer als beim letzten Mal',
    other: 'Unterschied {count} Punkte größer als beim letzten Mal',
  },
  'testday.results.same': 'Gleich wie beim letzten Mal',
  'testday.results.first': 'Erste Messung',
  'testday.results.nextTest': 'Nächster Test: {date}',
  'testday.results.planUpdated': 'Dein Plan für die nächsten zwei Wochen ist aktualisiert.',
  'testday.results.done': 'Fertig',

  'testday.results.verdictFirst': 'Drei Zahlen zum Schlagen',
  'testday.results.verdictSteady': 'Alle drei halten sich',
  'testday.results.verdictUp.calf_raises': 'Mehr Fersenheben als beim letzten Mal',
  'testday.results.verdictUp.arch_hold': 'Dein Gewölbe hielt länger',
  'testday.results.verdictUp.balance': 'Du hast länger die Balance gehalten',
  'testday.results.verdictUpTwo': 'Zwei von drei sind gestiegen',
  'testday.results.verdictUpAll': 'Alle drei sind gestiegen',
  // The line over the headline, and the headline when a goal was reached.
  'testday.results.heroEyebrowUp': 'Neue Bestleistung',
  'testday.results.heroEyebrowFirst': 'Dein Ausgangspunkt',
  'testday.results.heroEyebrowSteady': 'Tests geschafft',
  'testday.results.verdictGoal.calf_raises': 'Ziel beim Fersenheben erreicht',
  'testday.results.verdictGoal.arch_hold': 'Ziel beim Gewölbehalten erreicht',
  'testday.results.verdictGoal.balance': 'Ziel bei der Balance erreicht',
  // A test's row opened: every test so far, and the share card.
  'testday.results.history': 'Alle Tests',
  'testday.results.showDetails': 'Details zeigen',
  'testday.results.hideDetails': 'Details ausblenden',
  'testday.results.share': 'Teilen',
  'testday.results.shareTitle': 'Mein Fußtest',
  'testday.results.shareBrand': 'Walkito',
  'testday.results.shareMessage': 'Mein Fußtest mit Walkito: Fersenheben {calf} · Gewölbe {arch} s · Balance {balance} s',
  // A figure in seconds on its own: the unit beside the big number, and the share card.
  'testday.results.secondsShort': 's',
  'testday.results.valueSeconds': '{n} s',
  'testday.results.dateVs': {
    one: '{date} · verglichen mit vor {count} Tag',
    other: '{date} · verglichen mit vor {count} Tagen',
  },
  'testday.results.dateFirst': '{date} · dein Ausgangspunkt',
  'testday.results.chipBaseline': 'Ausgangswert',
  'testday.results.chipSame': 'Gleich',
  'testday.results.chipSeconds': '{delta} s',
  'testday.results.chipRaises': { one: '{delta} Wiederholung', other: '{delta} Wiederholungen' },
  'testday.results.gapBetween': 'Unterschied zwischen den Beinen {n} %',
  'testday.results.explain.calf_raises':
    'Fersenheben zeigt, wie viel Arbeit Wade und Achillessehne leisten, bevor sie ermüden. Mehr Wiederholungen heißt, dass die Wade bei langen Spaziergängen und Läufen mehr von jedem Schritt trägt.',
  'testday.results.explain.arch_hold':
    'Das Gewölbehalten zeigt, wie lange die kleinen Muskeln unter dem Fuß das Gewölbe oben halten. Längeres Halten heißt, dass der Fuß über mehr vom Tag gestützt bleibt.',
  'testday.results.explain.balance':
    'Auf einem Bein mit geschlossenen Augen zeigt sich, wie gut Fuß und Knöchel den Boden spüren. Mehr Sekunden heißt sicherere Schritte auf unebenem Weg und wenn du müde bist.',
  'testday.results.explainA11y': 'Was das zeigt',
};
