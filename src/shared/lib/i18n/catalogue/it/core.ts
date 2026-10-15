/**
 * Italian.
 *
 * The app addresses the user as `tu` throughout, the register a coach uses
 * and the one the English copy already has. Sentence case everywhere, and a
 * plain hyphen where English would reach for a dash.
 *
 * The `many` plural form is optional in this catalogue's type and is left out
 * everywhere: in Italian it is the whole-millions form, and no count in this
 * app reaches a million days.
 */
export const CORE_IT = {
  // ── Language picker ──────────────────────────────────────────────────────
  'language.title': 'Lingua',
  'language.system': 'Sistema',
  'language.systemHint': 'Come il dispositivo - {language}',
  'language.note': 'La scelta viene ricordata su questo dispositivo.',
  'language.a11yLabel': 'Lingua, {language}',
  'language.a11yHint': 'Cambia la lingua dell’app',

  'error.title': 'Qualcosa è andato storto',
  'error.body': 'Il tuo piano e i tuoi progressi sono al sicuro. Riprova.',
  'error.retry': 'Riprova',

  // ── Settings ─────────────────────────────────────────────────────────────
  'settings.title': 'Impostazioni',
  'settings.terms': 'Termini d’uso',
  'settings.termsHint': 'Il contratto di abbonamento',
  'settings.privacy': 'Informativa sulla privacy',
  'settings.privacyHint': 'Cosa conserviamo, e dove',
  'settings.unpublished': 'Non ancora pubblicato',
  'settings.email.section': 'Email',
  'settings.email.address': 'Inviate a {email}',
  'settings.email.none': 'Ancora nessun indirizzo email. Accedendo se ne aggiunge uno.',
  'settings.email.unavailable': 'Impossibile caricare le impostazioni email. Controlla la connessione e riprova.',
  'settings.email.tips': 'Consigli e promemoria',
  'settings.email.weekly': 'Riepilogo settimanale',
  'settings.email.unsubscribeAll': 'Annulla tutte le iscrizioni',
  'settings.email.unsubscribed': 'Non riceverai più email. Riattiva un interruttore per ricominciare.',
  'settings.write': 'Scrivi a Rahim',
  'settings.writeHint': 'Ogni messaggio lo legge una persona',
  'settings.writeSubject': 'Walkito',
  'settings.writeBody': '\n\n\n-\nWalkito {version} · {platform}\nID {id}',
  'settings.planSection': 'Il tuo piano',
  'settings.outcome': 'Il tuo obiettivo',
  'settings.outcome.painfree': 'Meno dolore',
  'settings.outcome.flat_feet': 'Arcate più forti',
  'settings.outcome.stronger': 'Gambe più forti',
  'settings.outcome.injury_free': 'Gambe solide',
  'settings.outcome.stable_ankles': 'Caviglie stabili',
  'settings.outcome.jump_higher': 'Saltare più in alto',
  'settings.outcome.race_ready': 'In forma per la gara',
  'settings.outcome.all_day': 'Tutto il giorno in piedi',
  'settings.outcome.comeback': 'Ripartire dopo un infortunio',
  'settings.outcome.steady': 'Passi sicuri',
  'settings.daysPerWeek': 'Giorni a settimana',
  'settings.minutesPerDay': 'Minuti al giorno',
  'settings.whichFoot': 'Quale piede',
  'settings.footLeft': 'Sinistro',
  'settings.footRight': 'Destro',
  'settings.footBoth': 'Entrambi',
  'settings.whereItHurts': 'Dove fa male',
  'settings.whereItHurtsNone': 'Niente segnato',
  'settings.sound.title': 'Suoni della sessione',
  'settings.sound.tempo': 'Audio durante la sessione',
  'settings.sound.tempoHint': 'Ogni esercizio spiegato a voce all’inizio, e un battito per le ripetizioni lente.',
  'settings.sound.voice': 'Conteggio a voce',
  'settings.sound.voiceHint': 'Dice «su, 2, 3, tieni, giù» al posto dei toni.',
  'settings.notifications.title': 'Notifiche',
  'settings.notifications.offers': 'Offerte e sconti',
  'settings.notifications.offersHint': 'Ogni tanto, un prezzo più basso su Walkito Plus.',
  'settings.equipment': 'Cosa ho a casa',
  'settings.equipment.step': 'Un gradino',
  'settings.equipment.band': 'Elastico',
  'settings.equipment.towel': 'Asciugamano',
  'settings.equipment.pillow': 'Cuscino',
  'settings.equipment.ball': 'Pallina da massaggio',
  'settings.account.saveTitle': 'Conserva i tuoi progressi',
  'settings.account.saveBody': 'Accedi con Apple e il tuo piano, i check-in e i test tornano su un nuovo telefono o dopo una reinstallazione.',
  'settings.account.saveBodyGoogle': 'Accedi con Google e il tuo piano, i check-in e i test tornano su un nuovo telefono o dopo una reinstallazione.',
  'settings.account.signedIn': 'Accesso effettuato con Apple. I tuoi progressi sono salvati nel tuo account.',
  'settings.lastSync': 'Ultima sincronizzazione: {time}',
  'settings.lastSyncNever': 'Nessuna sincronizzazione ancora',
  'settings.reminder': 'Ora del promemoria',
  'settings.disclaimer': 'Walkito non è un dispositivo medico e non diagnostica, tratta, cura né previene alcuna patologia. Se il dolore è acuto, peggiora o è accompagnato da gonfiore, intorpidimento o febbre, fermati e consulta un medico.',

  // ── Streak ───────────────────────────────────────────────────────────────
  'streak.title': { one: '{count} giorno di fila', other: '{count} giorni di fila' },
  'streak.milestoneBlurb': 'Ognuno di quei giorni è contato.',
  'streak.milestoneBigBlurb': 'Dieci giorni. È qui che un’abitudine comincia a tenere.',
  'streak.rule':
    'Un giorno conta quando fai il check-in, ti alleni o finisci una routine della libreria. In un giorno di riposo basta il check-in.',
  'streak.total': { one: '{count} giorno finora.', other: '{count} giorni finora.' },
  'streak.dismiss': 'Ho capito',
  'streak.dayCount': { one: '{count} giorno', other: '{count} giorni' },
  'streak.tileA11y': '{label}, {days}',

  // ── Session player ───────────────────────────────────────────────────────
  'session.day': 'Giorno {day}',
  'session.minutes': { one: '{count} min', other: '{count} min' },
  'session.moveCount': { one: '{count} esercizio', other: '{count} esercizi' },
  'session.secondsLeftA11y': {
    one: 'manca {count} secondo',
    other: 'mancano {count} secondi',
  },

  // ── Referral / gift sheet ────────────────────────────────────────────────
  'gift.title': 'Invita un amico',
  'gift.blurb': 'Condividi il tuo codice. Un amico che si iscrive con questo ottiene il {percent}% di sconto sull’abbonamento annuale.',
  'gift.unavailable': 'Gli inviti non sono disponibili in questa versione.',
  'gift.shareMessage':
    'Usa il mio codice {code} su Walkito per avere il {percent}% di sconto sull’abbonamento annuale.',
  'gift.share': 'Condividi il codice',
  'gift.shared': 'Copiato',
  'gift.copy': 'Copia invece',
  'gift.copied': 'Copiato negli appunti',
  'gift.copyA11y': 'Copia il codice {code}',
  'gift.dismiss': 'Magari più tardi',
  'gift.openA11y': 'Ritira il tuo regalo',
  'gift.capsule': 'Regalo',

  // ── Waits ──────────────────────────────────────────────────────────────────
  'time.hoursMinutes': '{hours} h {minutes} min',
  'time.minutes': '{count} min',
  'time.underMinute': '<1 min',

  // ── The next session ───────────────────────────────────────────────────────
  'nextSession.in': 'Prossima sessione tra {time}',
  'nextSession.on': 'Prossima sessione: {day}',

  // ── Dock / cards ───────────────────────────────────────────────────────────
  'dock.startWorkout': 'Inizia la sessione',
  'card.dailyGoal': 'Obiettivo del giorno',
  'card.getStarted': 'Inizia',
  'card.last7Days': 'Ultimi 7 giorni',
  'band.excellent': 'Eccellente',
  'band.strong': 'Forte',
  'band.steady': 'Costante',
  'band.building': 'In crescita',

  // ── Quick actions (long-press the app icon) ────────────────────────────────
  'purchase.unavailable': 'Questo piano non è disponibile in questo momento.',

  'quick.deleteTitle': '{name}, aspetta.',
  'quick.deleteBody': 'Sto per eliminare l’app.\n\nCosa mi ha spinto a farlo:\n\n',
  'quick.deleteSubject': 'Prima di eliminare Walkito',
  'quick.talkSubject': 'Qualcosa non va in Walkito',
  'quick.talkBody': 'Ciao -\n\nCosa succede:\n\n',
  'quick.deleteSubtitle': 'La elimini? Dicci cosa non ha funzionato.',

  // ── Tab bar ──────────────────────────────────────────────────────────────
  'tabs.home': 'Home',
  'tabs.progress': 'Progressi',

  // ── Account / sign-in errors ───────────────────────────────────────────────
  'auth.noServer': 'Questa versione non ha un server per gli account.',
  'auth.missingFields': 'Inserisci sia l’email sia la password.',
  'auth.invalidCredentials': 'Email e password non corrispondono.',
  'auth.notConfirmed':
    'Questo account non è ancora confermato. Conferma l’indirizzo email, poi riprova.',
  'auth.banned': 'Questo account è disattivato.',
  'auth.providerDisabled': 'L’accesso con email è disattivato per questa app.',
  'auth.rateLimited': 'Troppi tentativi. Aspetta un minuto e riprova.',
  'auth.badEmail': 'Non sembra un indirizzo email.',
  'auth.noAccount': 'Non è arrivato nessun account.',
  'auth.generic': 'Non è andato a buon fine.',
  'auth.unreachable': 'Impossibile raggiungere il server.',
  'auth.badCode': 'Il codice non funziona. Controllalo o richiedine uno nuovo.',
  'auth.codeRateLimited': 'Abbiamo appena inviato un codice. Aspetta un minuto prima di chiederne un altro.',
  'auth.emailUndeliverable': 'Ora non siamo riusciti a inviare l’email. Riprova tra poco.',
  'auth.noAccountForEmail': 'Nessun account usa questa email.',

  // ── Maintenance and regression ───────────────────────────────────────────
  'maintenance.throughNamed': '{name}, ce l’hai fatta.',
  'maintenance.through': 'Ce l’hai fatta.',
  'maintenance.calfGain': '{opening} Il tuo polpaccio è passato ↗ da {before} a {after}.',
  'maintenance.relapse': 'Il dolore al tallone spesso resta o ritorna: circa metà delle persone ha ancora sintomi dopo cinque anni.',
  'maintenance.staying': 'Due sessioni a settimana ti aiutano a mantenere i risultati.',
  'maintenance.regression': 'I tuoi numeri sono scesi. Vuoi rifare il blocco «{block}»?',

  // ── Block names ──────────────────────────────────────────────────────────
  'block.settle': 'Assestamento',
  'block.strengthen': 'Rinforzo',
  'block.load': 'Carico',
  'block.build': 'Sviluppo',
  'block.control': 'Controllo',
  'block.sustain': 'Mantenimento',

  // ── Common ───────────────────────────────────────────────────────────────
  'common.back': 'Indietro',
  'common.close': 'Chiudi',
  'common.profile': 'Profilo',
  'common.done': 'Fatto',
  'common.cancel': 'Annulla',
};
