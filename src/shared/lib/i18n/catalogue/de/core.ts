/**
 * German.
 *
 * Addresses the user as `du` throughout, the register a coach uses and the one
 * the English copy already has. Sentence case: only what German grammar
 * capitalises (nouns, the start of a sentence) is capitalised, never a whole
 * label in Title Case. A plain hyphen, never a long dash.
 *
 * German has only `one` and `other`; `one` is exactly 1.
 */
export const CORE_DE = {
  // ── Language picker ──────────────────────────────────────────────────────
  'language.title': 'Sprache',
  'language.system': 'System',
  'language.systemHint': 'Wie das Gerät - {language}',
  'language.note': 'Die Auswahl wird auf diesem Gerät gespeichert.',
  'language.a11yLabel': 'Sprache, {language}',
  'language.a11yHint': 'Ändert die Sprache der App',

  'error.title': 'Etwas ist schiefgelaufen',
  'error.body': 'Dein Plan und dein Fortschritt sind sicher. Versuch es noch einmal.',
  'error.retry': 'Noch einmal',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Einstellungen',
  'settings.terms': 'Nutzungsbedingungen',
  'settings.termsHint': 'Die Abovereinbarung',
  'settings.privacy': 'Datenschutzerklärung',
  'settings.privacyHint': 'Was wir speichern und wo',
  'settings.unpublished': 'Noch nicht veröffentlicht',
  'settings.email.section': 'E-Mail',
  'settings.email.address': 'Geht an {email}',
  'settings.email.none': 'Noch keine E-Mail-Adresse. Mit der Anmeldung kommt eine dazu.',
  'settings.email.unavailable': 'Die E-Mail-Einstellungen konnten nicht laden. Versuch es mit Verbindung noch einmal.',
  'settings.email.tips': 'Tipps und Erinnerungen',
  'settings.email.weekly': 'Wochenrückblick',
  'settings.email.unsubscribeAll': 'Von allem abmelden',
  'settings.email.unsubscribed': 'Du bekommst keine E-Mails mehr. Schalte einen Schalter wieder ein, um neu zu starten.',
  'settings.write': 'Rahim schreiben',
  'settings.writeHint': 'Jede Nachricht liest ein Mensch',
  'settings.writeSubject': 'Walkito',
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  'settings.planSection': 'Dein Plan',
  'settings.outcome': 'Dein Ziel',
  'settings.outcome.painfree': 'Schmerzfrei',
  'settings.outcome.flat_feet': 'Kräftigere Fußgewölbe',
  'settings.outcome.stronger': 'Kräftigere Beine',
  'settings.outcome.injury_free': 'Robuste Beine',
  'settings.outcome.stable_ankles': 'Stabile Knöchel',
  'settings.outcome.jump_higher': 'Höher springen',
  'settings.outcome.race_ready': 'Bereit fürs Rennen',
  'settings.outcome.all_day': 'Den ganzen Tag auf den Beinen',
  'settings.outcome.comeback': 'Zurück nach Verletzung',
  'settings.outcome.steady': 'Sichere Schritte',
  'settings.daysPerWeek': 'Tage pro Woche',
  'settings.minutesPerDay': 'Minuten pro Tag',
  'settings.whichFoot': 'Welcher Fuß',
  'settings.footLeft': 'Links',
  'settings.footRight': 'Rechts',
  'settings.footBoth': 'Beide',
  'settings.whereItHurts': 'Wo es wehtut',
  'settings.whereItHurtsNone': 'Nichts markiert',
  'settings.sound.title': 'Töne in der Einheit',
  'settings.sound.tempo': 'Tempotöne',
  'settings.sound.tempoHint': 'Ein Takt für langsame Wiederholungen, damit du ohne Hinschauen im Rhythmus bleibst.',
  'settings.sound.voice': 'Mitzählen per Stimme',
  'settings.sound.voiceHint': 'Sagt „hoch, 2, 3, halten, runter“ statt Töne.',
  'settings.equipment': 'Was ich zu Hause habe',
  'settings.equipment.step': 'Eine Stufe',
  'settings.equipment.band': 'Widerstandsband',
  'settings.equipment.towel': 'Handtuch',
  'settings.equipment.pillow': 'Kissen',
  'settings.equipment.ball': 'Massageball',
  'settings.account.saveTitle': 'Fortschritt behalten',
  'settings.account.saveBody': 'Melde dich mit Apple an, dann kommen Plan, Check-ins und Tests auf einem neuen Handy oder nach einer Neuinstallation zurück.',
  'settings.account.saveBodyGoogle': 'Melde dich mit Google an, dann kommen Plan, Check-ins und Tests auf einem neuen Handy oder nach einer Neuinstallation zurück.',
  'settings.account.signedIn': 'Mit Apple angemeldet. Dein Fortschritt ist in deinem Konto gespeichert.',
  'settings.lastSync': 'Zuletzt synchronisiert: {time}',
  'settings.lastSyncNever': 'Noch nicht synchronisiert',
  'settings.reminder': 'Erinnerungszeit',
  'settings.disclaimer': 'Walkito ist kein Medizinprodukt und diagnostiziert, behandelt, heilt oder verhindert keine Erkrankung. Wenn der Schmerz stechend ist, schlimmer wird oder mit Schwellung, Taubheit oder Fieber kommt, hör auf und geh zu einer Ärztin oder einem Arzt.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'streak.title': { one: '{count} Tag in Folge', other: '{count} Tage in Folge' },
  'streak.milestoneBlurb': 'Jeder einzelne dieser Tage hat gezählt.',
  'streak.milestoneBigBlurb': 'Zehn Tage. Ab hier beginnt eine Gewohnheit zu halten.',
  'streak.rule':
    'Ein Tag zählt, wenn du eincheckst, trainierst, eine Routine aus der Bibliothek beendest oder der Plan dir einen Ruhetag gibt.',
  'streak.total': { one: 'Bisher {count} Tag.', other: 'Bisher {count} Tage.' },
  'streak.dismiss': 'Verstanden',
  'streak.dayCount': { one: '{count} Tag', other: '{count} Tage' },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  'session.day': 'Tag {day}',
  'session.minutes': { one: '{count} Min.', other: '{count} Min.' },
  'session.moveCount': { one: '{count} Übung', other: '{count} Übungen' },
  'session.secondsLeftA11y': {
    one: 'noch {count} Sekunde',
    other: 'noch {count} Sekunden',
  },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Lade jemanden ein',
  'gift.blurb': 'Teile deinen Code. Wer damit beitritt, bekommt {percent} % Rabatt auf das Jahresabo.',
  'gift.unavailable': 'Einladungen sind in dieser Version nicht verfügbar.',
  'gift.shareMessage': 'Nutze meinen Code {code} in Walkito und bekomm {percent} % Rabatt auf das Jahresabo.',
  'gift.share': 'Code teilen',
  'gift.shared': 'Kopiert',
  'gift.copy': 'Lieber kopieren',
  'gift.copied': 'In die Zwischenablage kopiert',
  'gift.copyA11y': 'Code {code} kopieren',
  'gift.dismiss': 'Vielleicht später',
  'gift.openA11y': 'Hol dir dein Geschenk',
  'gift.capsule': 'Geschenk',

  // ── Waits ──────────────────────────────────────────────────────────────────
  'time.hoursMinutes': '{hours} Std. {minutes} Min.',
  'time.minutes': '{count} Min.',
  'time.underMinute': '<1 Min.',

  // ── The next session ───────────────────────────────────────────────────────
  'nextSession.in': 'Nächste Einheit in {time}',
  'nextSession.on': 'Nächste Einheit: {day}',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Einheit starten',
  'card.dailyGoal': 'Tagesziel',
  'card.getStarted': 'Los geht’s',
  'card.last7Days': 'Letzte 7 Tage',
  'band.excellent': 'Hervorragend',
  'band.strong': 'Stark',
  'band.steady': 'Beständig',
  'band.building': 'Im Aufbau',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  'purchase.unavailable': 'Dieser Plan ist gerade nicht verfügbar.',

  'quick.deleteTitle': '{name}, warte.',
  'quick.deleteBody': 'Ich bin kurz davor, die App zu löschen.\n\nDas hat mich vertrieben:\n\n',
  'quick.deleteSubject': 'Bevor ich Walkito lösche',
  'quick.talkSubject': 'Etwas stimmt nicht in Walkito',
  'quick.talkBody': 'Hallo -\n\nDas ist los:\n\n',
  'quick.deleteSubtitle': 'Löschen? Sag uns, was kaputt ist.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Start',
  'tabs.progress': 'Fortschritt',


  // ── Account / sign-in errors ───────────────────────────────────────────────
  'auth.noServer': 'Diese Version hat keinen Kontoserver. Nutze Mit Apple fortfahren.',
  'auth.missingFields': 'Gib eine E-Mail-Adresse und ein Passwort ein.',
  'auth.invalidCredentials': 'E-Mail und Passwort passen nicht zusammen.',
  'auth.notConfirmed':
    'Dieses Konto ist noch nicht bestätigt. Bestätige die E-Mail-Adresse und versuch es dann noch einmal.',
  'auth.banned': 'Dieses Konto ist deaktiviert.',
  'auth.providerDisabled':
    'Die Anmeldung per E-Mail ist für diese App ausgeschaltet. Nutze Mit Apple fortfahren.',
  'auth.rateLimited': 'Zu viele Versuche. Warte eine Minute und versuch es noch einmal.',
  'auth.badEmail': 'Das sieht nicht nach einer E-Mail-Adresse aus.',
  'auth.noAccount': 'Es kam kein Konto zurück.',
  'auth.generic': 'Das hat nicht geklappt.',
  'auth.unreachable': 'Der Server war nicht erreichbar.',

  // ── Maintenance and regression ───────────────────────────────────────────
  'maintenance.throughNamed': '{name}, du hast es geschafft.',
  'maintenance.through': 'Du hast es geschafft.',
  'maintenance.calfGain': '{opening} Deine Wade ging ↗ von {before} auf {after}.',
  'maintenance.relapse': 'Etwa die Hälfte der Menschen verliert das innerhalb von fünf Jahren wieder.',
  'maintenance.staying': 'Mit zwei Einheiten pro Woche bleibst du in der anderen Hälfte.',
  'maintenance.regression': 'Deine Werte sind gesunken. {block} noch einmal machen?',

  // ── Block names ──────────────────────────────────────────────────────────
  'block.settle': 'Ankommen',
  'block.strengthen': 'Kräftigen',
  'block.load': 'Belasten',
  'block.build': 'Aufbauen',
  'block.control': 'Kontrolle',
  'block.sustain': 'Halten',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Zurück',
  'common.close': 'Schließen',
  'common.profile': 'Profil',
  'common.done': 'Fertig',
  'common.cancel': 'Abbrechen',
};
