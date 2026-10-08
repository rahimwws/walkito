/**
 * Onboarding, German.
 *
 * `du` throughout. Where English asks with "{name}" at the end, German keeps
 * the slot after a comma too, so `withName` can drop it with its punctuation
 * when the name step was skipped.
 *
 * Two places that avoid gendered forms on a screen that has just asked the
 * user's sex and could get it wrong: `onboarding.social.welcome` is «Schön,
 * dass du da bist» rather than «Willkommen» plus an adjective, and
 * `onboarding.name.blurb` says «Läuferinnen und Läufer».
 *
 * Apple's Health app is called «Health» in German iOS as well, so it keeps
 * that name. Whoop's menus are not localised and stay in English; Garmin
 * Connect's are, and are named as its German build shows them.
 *
 * German has only `one` and `other`.
 */
export const ONBOARDING_DE = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  'onboarding.act.about': 'Über dich',
  'onboarding.act.sport': 'Dein Sport',
  'onboarding.act.health': 'Deine Gesundheit',
  'onboarding.act.plan': 'Dein Plan',

  // ── Shared buttons ───────────────────────────────────────────────────────
  'onboarding.cta.next': 'Weiter',
  'onboarding.cta.continue': 'Weiter',
  'onboarding.cta.done': 'Fertig',
  'onboarding.cta.skip': 'Überspringen',
  'onboarding.cta.skipForNow': 'Erst mal überspringen',
  'onboarding.cta.checking': 'Wird geprüft…',
  'onboarding.cta.applyCode': 'Code einlösen',
  'onboarding.cta.startPlan': 'Plan starten',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Laufen ohne Zweifel',
  'onboarding.intro.blurb': 'Ein Tagesplan, der sich ändert, wenn deine Beine es tun.',
  'onboarding.intro.greeting': 'Hi, ich bin Walkito',
  'onboarding.intro.headline': 'Finden wir heraus, warum es noch wehtut.',
  'onboarding.intro.cta': 'Mit Apple fortfahren',
  'onboarding.intro.ctaGoogle': 'Mit Google fortfahren',
  'onboarding.intro.footnote': 'Etwa 3 Minuten',
  'onboarding.intro.signInFailed': 'Die Anmeldung wurde nicht abgeschlossen. Versuch es noch einmal.',
  'onboarding.intro.emailCta': 'Mit E-Mail anmelden',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Anmelden',
  'onboarding.email.blurb': 'Nutze die E-Mail-Adresse und das Passwort deines Kontos.',
  'onboarding.email.address': 'E-Mail',
  'onboarding.email.password': 'Passwort',
  'onboarding.email.submit': 'Anmelden',
  'onboarding.email.submitting': 'Wird angemeldet…',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.name.title': 'Wie sollen wir\ndich nennen?',
  'onboarding.name.blurb':
    'Alles danach wird für dich geschrieben, nicht für Läuferinnen und Läufer im Allgemeinen.',
  'onboarding.name.placeholder': 'z. B. Alex',

  // ── Sex ──────────────────────────────────────────────────────────────────
  'onboarding.sex.title': 'Männlich oder weiblich, {name}?',
  'onboarding.sex.blurb': 'Belastbarkeit und typische Verletzungen unterscheiden sich, also auch der Plan.',
  'onboarding.sex.female': 'Weiblich',
  'onboarding.sex.male': 'Männlich',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'Was für ein Sporttyp bist du, {name}?',
  'onboarding.runner.blurb':
    'Hier setzt dein Plan an. Wer tiefstapelt, macht sich nur Woche eins zu leicht.',
  'onboarding.runner.new': 'Ich fange gerade an',
  'onboarding.runner.casual': 'Gelegentlich',
  'onboarding.runner.regular': 'Regelmäßig',
  'onboarding.runner.racing': 'Ich trainiere auf etwas hin',
  'onboarding.runner.serious': 'Mit vollem Ernst',

  // ── Age ──────────────────────────────────────────────────────────────────
  'onboarding.age.title': 'Wie alt bist du?',
  'onboarding.age.blurb': 'Sehnen passen sich mit dem Alter langsamer an. Das bestimmt, wie schnell der Plan aufbaut.',
  'onboarding.age.years': 'Jahre',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'Noch ein bisschen mehr über dich, {name}',
  'onboarding.body.blurb': 'Sehnen tragen dein Gewicht. Daraus ergibt sich deine Startlast.',
  'onboarding.body.kg': 'kg',
  'onboarding.body.lb': 'lb',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': 'Welche Schuhgröße hast du, {name}?',
  'onboarding.size.blurb':
    'Die Schuhgröße steht für die Länge des Hebels, den deine Wade bewegen muss.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, worauf arbeitest du hin?',
  'onboarding.goal.blurb': 'Wähl, was dir gerade am wichtigsten ist. Du kannst es später ändern.',
  'onboarding.goal.painfree': 'Schmerzfrei laufen',
  'onboarding.goal.race': 'Für einen Wettkampf trainieren',
  'onboarding.goal.consistent': 'Regelmäßiger laufen',
  'onboarding.goal.stronger': 'Kräftigere Beine',
  'onboarding.goal.injuryfree': 'Verletzungsfrei bleiben',
  'onboarding.goal.flatfeet': 'Kräftigere Fußgewölbe',
  'onboarding.goal.ankles': 'Stabilere Knöchel',
  'onboarding.goal.jump': 'Höher springen',
  'onboarding.goal.allday': 'Den ganzen Tag auf den Beinen',
  'onboarding.goal.comeback': 'Comeback nach Verletzung',
  'onboarding.goal.steady': 'Sicher gehen',
  'onboarding.days.title': 'Wie viele Tage pro Woche, {name}?',
  'onboarding.days.blurb': 'Kurze Einheiten. Ruhetage gehören zum Plan, sie sind keine Lücke.',
  'onboarding.days.days3': '3 Tage',
  'onboarding.days.days3Caption': 'Ein leichter Einstieg',
  'onboarding.days.days5': '5 Tage',
  'onboarding.days.days5Caption': 'Empfohlen',
  'onboarding.days.days7': 'Jeden Tag',
  'onboarding.days.days7Caption': 'Kurz und täglich',
  'onboarding.minutes.title': 'Wie lange pro Einheit?',
  'onboarding.minutes.blurb': 'Jeden Tag änderbar - auch volle Tage zählen.',
  'onboarding.minutes.min3': '3 Minuten',
  'onboarding.minutes.min3Caption': 'Auch an vollen Tagen',
  'onboarding.minutes.min5': '5 Minuten',
  'onboarding.minutes.min5Caption': 'Empfohlen',
  'onboarding.minutes.min10': '10 Minuten',
  'onboarding.minutes.min10Caption': 'Für schnellere Fortschritte',
  'onboarding.equipment.title': 'Was hast du zu Hause?',
  'onboarding.equipment.blurb': 'Wähl alles aus, was du hast.',
  'onboarding.equipment.step': 'Eine Stufe oder Treppe',
  'onboarding.equipment.band': 'Widerstandsband',
  'onboarding.equipment.towel': 'Handtuch',
  'onboarding.equipment.pillow': 'Kissen',
  'onboarding.equipment.ball': 'Massageball',
  'onboarding.equipment.none': 'Nichts davon',
  'onboarding.reminder.title': 'Wann sollen wir dich erinnern?',
  'onboarding.reminder.blurb': 'Eine Erinnerung am Tag. Wähl eine Zeit, zu der du meist fünf Minuten frei hast.',
  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Wo tut es meistens weh, {name}?',
  'onboarding.pain.blurb': 'Tipp die Stellen am Bein an, bis zu {count}.',
  'onboarding.pain.full': 'Bis zu {count} gleichzeitig. Tipp eine an, um sie zu tauschen.',
  'onboarding.pain.none': 'Gerade tut nichts weh',
  'onboarding.pain.disclaimer':
    'Kein medizinischer Rat. Wenn der Schmerz stechend ist, schlimmer wird oder mit Schwellung oder Taubheit kommt, geh zu einer Ärztin oder einem Arzt.',

  'onboarding.side.title': 'Welche Seite, {name}?',
  'onboarding.side.blurb': 'Die Tests vergleichen ein Bein mit dem anderen, also müssen wir wissen, an welchem wir arbeiten.',
  'onboarding.side.left': 'Links',
  'onboarding.side.right': 'Rechts',
  'onboarding.side.both': 'Beide',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': 'Was belastet deine Beine, {name}?',
  'onboarding.sport.blurb': 'Davon hängt ab, wie die nächsten Fragen gestellt werden.',
  'onboarding.sport.running': 'Laufen',
  'onboarding.sport.tennis': 'Tennis',
  'onboarding.sport.gym': 'Fitnessstudio',
  'onboarding.sport.football': 'Fußball',
  'onboarding.sport.basketball': 'Basketball',
  'onboarding.sport.cycling': 'Radfahren',
  'onboarding.sport.hiking': 'Wandern',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.title': 'Wie viel machst du gerade?',
  'onboarding.load.blurb': 'Deine ehrliche aktuelle Woche, nicht deine beste.',
  'onboarding.load.blurbMonth': 'Dein ehrlicher aktueller Monat, nicht dein bester.',
  'onboarding.load.titleRunning': 'Wie viel läufst du pro Woche?',
  'onboarding.load.titleTennis': 'Wie viel stehst du auf dem Platz, {name}?',
  'onboarding.load.blurbTennis': 'Matches und Training zusammen - die ehrliche Woche.',
  'onboarding.load.titleGym': 'Wie viel trainierst du gerade, {name}?',
  'onboarding.load.blurbGym': 'Zeit unter Last, nicht Zeit im Studio.',
  'onboarding.load.titleFootball': 'Wie viel spielst du gerade, {name}?',
  'onboarding.load.blurbFootball': 'Spiele und Training zusammen - die ehrliche Woche.',
  'onboarding.load.titleBasketball': 'Wie viel spielst du gerade, {name}?',
  'onboarding.load.blurbBasketball': 'Spiele und Training zusammen - die ehrliche Woche.',
  'onboarding.load.titleCycling': 'Wie viel fährst du Rad, {name}?',
  'onboarding.load.titleHiking': 'Wie viel wanderst du, {name}?',
  'onboarding.load.km0': '0–5 {unit}',
  'onboarding.load.km1': '5–15 {unit}',
  'onboarding.load.km2': '15–30 {unit}',
  'onboarding.load.km3': '30–50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'km',
  'onboarding.load.hours0': 'Unter 1 Stunde',
  'onboarding.load.hours1': '1–3 Stunden',
  'onboarding.load.hours2': '3–5 Stunden',
  'onboarding.load.hours3': '5–8 Stunden',
  'onboarding.load.hours4': '8+ Stunden',
  'onboarding.load.perWeek': 'pro Woche',
  'onboarding.load.runsPerWeek': 'Läufe pro Woche',
  'onboarding.load.sessionsPerWeek': 'Einheiten pro Woche',
  'onboarding.load.ridesPerWeek': 'Fahrten pro Woche',
  'onboarding.load.hikesPerMonth': 'Wanderungen pro Monat',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': 'Was ist gerade am schwersten, {name}?',
  'onboarding.challenge.blurb': 'Bis zu zwei. Der Plan richtet sich danach, was du wählst.',
  'onboarding.challenge.painfree': 'Schmerzfrei bleiben',
  'onboarding.challenge.back': 'Wieder ins Laufen kommen',
  'onboarding.challenge.distance': 'Die Strecke steigern',
  'onboarding.challenge.recovery': 'Schneller erholen',
  'onboarding.challenge.strength': 'Kräftiger werden',
  'onboarding.challenge.injury': 'Keine neue Verletzung',

  'onboarding.source.title': 'Wie hast du Walkito gefunden?',
  'onboarding.source.blurb': 'Ein Tipp. Es hilft uns, Leute wie dich zu erreichen.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'Jemand hat es mir erzählt',
  'onboarding.source.appStore': 'Im App Store gestöbert',
  'onboarding.source.playStore': 'Bei Google Play gestöbert',
  'onboarding.source.google': 'Google-Suche',
  'onboarding.source.other': 'Woanders',
  'onboarding.challenge.swapped': 'Nur {count} gleichzeitig - „{label}“ wurde ersetzt.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Verbinde deine Health-Daten',
  'onboarding.health.blurb': 'Damit dein Plan bei dem ansetzt, was du wirklich gemacht hast.',
  'onboarding.health.askNamed': 'Erzähl mir mehr, {name}!',
  'onboarding.health.ask': 'Erzähl mir mehr!',
  'onboarding.health.askBlurbAndroid':
    'Walkito liest deine Schritte, Läufe und deinen Schlaf, damit der Plan bei dem ansetzt, was du wirklich gemacht hast - nicht bei dem, was du vorhattest.',
  'onboarding.health.askBlurb':
    'Walkito liest deine Schritte, Energie und Herzfrequenz, damit der Plan bei dem ansetzt, was du wirklich gemacht hast - nicht bei dem, was du vorhattest.',
  'onboarding.health.steps': 'Schritte',
  'onboarding.health.calories': 'Aktivitätsenergie',
  'onboarding.health.heartRate': 'Herzfrequenz',
  'onboarding.health.notShared': 'Nicht geteilt',
  'onboarding.health.thousands': '{value} Tsd.',
  'onboarding.health.kcal': '{value} kcal',
  'onboarding.health.bpm': '{value} S/min',
  'onboarding.health.connect': 'Mit Health verbinden',
  'onboarding.health.opening': 'Health wird geöffnet…',
  'onboarding.health.connectAndroid': 'Health Connect verbinden',
  'onboarding.health.openingAndroid': 'Health Connect wird geöffnet…',
  'onboarding.health.promise': 'Deine Gesundheitsdaten verlassen nie dieses Gerät.',
  'onboarding.health.unavailable': 'Health ist hier nicht verfügbar - du kannst ohne weitermachen.',
  'onboarding.health.declined': 'Der Zugriff auf Health wurde abgelehnt. Dein Plan funktioniert auch so.',
  'onboarding.health.empty': 'Verbunden - noch keine Daten. Sie kommen, sobald du dich bewegst.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': 'Trägst du eine Uhr?',
  'onboarding.watch.blurb': 'Nur damit wir wissen, ob etwas verbunden werden muss.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Alles läuft schon',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'Ein Schalter zum Umlegen',
  'onboarding.watch.none': 'Keine Uhr',
  'onboarding.watch.noneCaption': 'Dein Handy in der Tasche reicht',

  // ── Watch sync ───────────────────────────────────────────────────────────
  'onboarding.watchSync.title': 'Health-Sync einschalten',
  'onboarding.watchSync.blurb': 'Ein Schalter in der App, die du schon nutzt.',
  'onboarding.watchSync.open': '{app} öffnen',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Öffne Garmin Connect und geh zu Mehr.',
  'onboarding.watchSync.garmin2': 'Tipp auf Einstellungen, dann auf Apple Health.',
  'onboarding.watchSync.garmin3': 'Schalte die Kategorien ein, die du teilen willst.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Öffne Whoop und tipp auf More.',
  'onboarding.watchSync.whoop2': 'Öffne App Settings, dann Integrations.',
  'onboarding.watchSync.whoop3': 'Tipp auf Apple Health und schalte es ein.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Mitteilungen einschalten',
  'onboarding.notify.blurb': 'Damit dein Plan dir sagen kann, wann er dich braucht.',
  'onboarding.notify.askNamed': 'Mach das nicht allein, {name}',
  'onboarding.notify.ask': 'Mach das nicht allein',
  'onboarding.notify.askBlurb': 'Nur an Tagen, an denen dein Plan eine Einheit hat.',
  'onboarding.notify.promise1': 'Ein Anstupser an Tagen mit Einheit',
  'onboarding.notify.promise2': 'Ein Hinweis, wenn sich etwas an deinem Training ändert',
  'onboarding.notify.promise3': 'Und ab und zu ein Rabatt - mehr nicht.',
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'jetzt',
  'onboarding.notify.bannerBody': 'Heute steht Fußkraft an - 7 Minuten. Deine Schienbeine werden es dir danken.',
  'onboarding.notify.turnOn': 'Mitteilungen einschalten',
  'onboarding.notify.opening': 'Wird geöffnet…',
  'onboarding.notify.notNow': 'Nicht jetzt',
  'onboarding.notify.declined': 'Kein Problem - du kannst sie später in den Einstellungen einschalten.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Dein Plan entsteht',
  'onboarding.building.blurb': 'Alles, was du mir erzählt hast, fließt in Woche eins.',
  'onboarding.building.line1': 'Ich lerne dich kennen',
  'onboarding.building.line3': 'Dein Plan ist fertig',
  'onboarding.building.cta': 'Training starten',
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  'onboarding.pattern.heel': 'Das ist das häufigste Muster überhaupt. Es spricht auch am schnellsten an.',
  'onboarding.pattern.foot': 'Das Gewölbe ist nicht von sich aus schwach. Was es hält, schon.',
  'onboarding.pattern.achilles': 'Die Last stieg schneller, als die Sehne sich anpassen konnte. Das lässt sich ändern.',
  'onboarding.pattern.shin': 'Der Umfang war deinen Beinen voraus. Der Plan nimmt das zurück und baut dann auf.',
  'onboarding.pattern.calf': 'Die Wade zieht an allem darunter. Lockere sie, und der Rest folgt.',
  'onboarding.pattern.none': 'Du bist hier, bevor es wehtut. Das ist der einfache Weg.',
  'onboarding.building.promise': 'Erste Veränderungen: Tag 12 bis 16.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  'onboarding.reflection.painHeel': 'Fersenschmerz',
  'onboarding.reflection.painFoot': 'Fußschmerz',
  'onboarding.reflection.painAchilles': 'Schmerz an der Achillessehne',
  'onboarding.reflection.painShin': 'Schienbeinschmerz',
  'onboarding.reflection.painCalf': 'Wadenschmerz',
  'onboarding.reflection.volumeWeekly': '{band} pro Woche',
  'onboarding.reflection.volumeMonthly': '{band} pro Monat',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.sendPlan.title': 'Deinen Plan\nper E-Mail schicken?',
  'onboarding.sendPlan.blurb': 'Optional. Ein paar kurze E-Mails in den ersten zwei Wochen, jederzeit abbestellbar.',
  'onboarding.sendPlan.placeholder': 'du@beispiel.de',
  'onboarding.sendPlan.send': 'Schicken',
  'onboarding.plan.title': 'Dein Plan',
  'onboarding.plan.blurb': 'Aus deinen Antworten gebaut.',
  'onboarding.plan.wordmarkMomentum': 'Schwung',
  'onboarding.plan.wordmarkFoundations': 'Fundament',
  'onboarding.plan.meta': {
    one: '{count} Einheit pro Woche',
    other: '{count} Einheiten pro Woche',
  },
  'onboarding.plan.week': 'Woche {n}',
  'onboarding.plan.weeks': 'Wochen {from}–{to}',
  'onboarding.plan.weeksOn': 'Ab Woche {from}',
  'onboarding.plan.phaseSettle': 'die Reizung beruhigen',
  'onboarding.plan.phaseBuild': 'das Gewölbe aufbauen',
  'onboarding.plan.phaseLoad': 'zurück zur vollen Last',
  'onboarding.plan.reflectionBoth':
    '{pain} und {volume}. Die ersten zwei Wochen beruhigen alles, bevor Last dazukommt.',
  'onboarding.plan.reflectionPain':
    '{pain}. Die ersten zwei Wochen beruhigen alles, bevor Last dazukommt.',
  'onboarding.plan.reflectionVolume':
    '{volume}. Die ersten zwei Wochen legen eine Basis, bevor Last dazukommt.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Lass uns einen Vertrag machen, {name}',
  'onboarding.contract.blurb': 'Nicht mit mir. Mit dir selbst.',
  'onboarding.contract.hint': 'Hier unterschreiben',
  'onboarding.contract.stampTop': '★ Walkito ★',
  'onboarding.contract.stampText': 'Verpflichtet',
  'onboarding.contract.stampLine1': 'Tag eins',
  'onboarding.contract.stampLine2': 'Gestartet',
  'onboarding.contract.noteNamed': '{name}, deine Unterschrift bleibt auf diesem Gerät.',
  'onboarding.contract.note': 'Deine Unterschrift bleibt auf diesem Gerät.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Schön, dass du da bist, {name}',
  'onboarding.social.welcome': 'Schön, dass du da bist',
  'onboarding.social.crest': 'Ein paar Minuten am Tag.\nKein Studio, kein Rätselraten.',
  'onboarding.testimonial1.before': 'Sag, wie sich der Fuß anfühlt, und',
  'onboarding.testimonial1.lead': 'die heutige Einheit passt sich',
  'onboarding.testimonial1.after': ' daran an.',
  'onboarding.testimonial1.name': 'Jeden Morgen',
  'onboarding.testimonial2.before': 'Kurze, angeleitete Übungen',
  'onboarding.testimonial2.lead': 'zu Hause oder bei der Arbeit',
  'onboarding.testimonial2.after': ' - ein Boden und eine Wand reichen.',
  'onboarding.testimonial2.name': 'Jede Einheit',
  'onboarding.testimonial3.before': 'Ein Retest in einer Minute',
  'onboarding.testimonial3.lead': 'zeigt, was sich wirklich verändert hat',
  'onboarding.testimonial3.after': ', in Zahlen statt Gefühlen.',
  'onboarding.testimonial3.name': 'Alle zwei Wochen',

  // ── Outlook ──────────────────────────────────────────────────────────────
  'onboarding.outlook.title': '{name}, so geht es weiter',
  'onboarding.outlook.blurb': 'Was heute wehtut, und was der Plan dagegen tut.',
  'onboarding.outlook.blurbNone': 'Deine Beine heute, und wohin der Plan sie bringt.',
  'onboarding.outlook.today': 'Heute',
  'onboarding.outlook.month': 'Monat {n}',
  'onboarding.outlook.pain0': 'Gereizt',
  'onboarding.outlook.pain1': 'Beruhigt sich',
  'onboarding.outlook.pain2': 'Lässt nach',
  'onboarding.outlook.pain3': 'Ruhiger',
  'onboarding.outlook.strength0': 'Ausgangswert',
  'onboarding.outlook.strength1': 'Wird wach',
  'onboarding.outlook.strength2': 'Im Aufbau',
  'onboarding.outlook.strength3': 'Kräftiger',
  'onboarding.outlook.footnote': 'Eine Veranschaulichung, wie der Plan aufbaut, keine Vorhersage. Jeder erholt sich in seinem eigenen Tempo.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Hast du einen Einladungscode?',
  'onboarding.referral.blurb': 'Gib ihn ein für {percent} % Rabatt auf das Jahresabo.',
  'onboarding.referral.applied': '{percent} % Rabatt auf das Jahresabo eingelöst.',
  'onboarding.referral.unlocked': 'Code angenommen. Walkito Premium ist aktiv.',
  'onboarding.referral.unknown': 'Diesen Code kennen wir nicht. Prüf ihn und versuch es noch einmal.',
  'onboarding.referral.own': 'Das ist dein eigener. Schick ihn jemand anderem.',
  'onboarding.referral.already': 'Du hast schon einen Code benutzt.',
  'onboarding.referral.unavailable': 'Einladungen sind in dieser Version nicht verfügbar.',
  'onboarding.referral.failed': 'Der Server war nicht erreichbar. Versuch es gleich noch einmal.',

  // ── The note at the end of onboarding ────────────────────────────────────
  // Draft, see the comment in en/onboarding.ts.
  'onboarding.note.title': 'Ein paar Worte von uns',
  'onboarding.note.body1':
    'Hi, ich bin Rahim. Mein Freund und ich machen Walkito, nur wir zwei. Vielen Menschen tut die Ferse weh: Einlagen, das dritte Paar Schuhe - und morgens humpeln sie trotzdem. Die Übungen, die helfen, sind bekannt. Nur sagt dir niemand, welche und wie viele. Genau das haben wir gebaut.',
  'onboarding.note.body2':
    'Es würde uns viel bedeuten, wenn du eine Bewertung hinterlässt. Das ist uns wirklich wichtig. Danke, dass du da bist.',
  'onboarding.note.signature': 'Rahim und Rahman',
  'onboarding.note.cta': 'Walkito bewerten',
  'onboarding.note.later': 'Nicht jetzt',
};
