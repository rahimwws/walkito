/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_IT = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Preparati',
  'player.countIn.nextUp': 'Il prossimo',
  'player.countIn.go': 'Via!',
  'player.countIn.tapToStart': 'Tocca per iniziare subito',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': 'Avresti potuto fare altre 2 ripetizioni fatte bene?',
  'player.feedback.purpose': 'La tua risposta regola le prossime sessioni.',
  'player.feedback.easy': 'Sì, facilmente',
  'player.feedback.right': 'Più o meno',
  'player.feedback.hard': 'No',
  'player.feedback.hurt': 'Ha fatto male',
  'player.feedback.adjusts': 'Ricevuto. Il piano si adatta.',
  'player.feedback.keeps': 'Ricevuto. Il piano mantiene questo ritmo.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Segnato. Un po’ di indolenzimento dopo questo lavoro è normale. Se c’è ancora domattina, il check-in alleggerisce il piano.',
  'player.afterPain.highHint':
    'È più di quanto questo lavoro dovrebbe causare. La prossima sessione riparte un passo indietro.',
  'player.afterPain.save': 'Salva',
  'player.cantDo.button': 'Non riesco a farlo',
  'player.cantDo.title': 'Cosa te lo impedisce?',
  'player.cantDo.blurb': 'Lo cambiamo adesso e lo togliamo dal tuo piano.',
  'player.cantDo.noStep': 'Niente gradino',
  'player.cantDo.noBand': 'Niente elastico',
  'player.cantDo.noTowel': 'Niente asciugamano',
  'player.cantDo.noPillow': 'Niente cuscino',
  'player.cantDo.noBall': 'Niente pallina',
  'player.cantDo.hurts': 'Fa male',
  'player.cantDo.swapped': 'Sostituito con {name}.',
  'player.cantDo.skipped': 'Oggi qui non c’è un’alternativa adatta, quindi lo saltiamo.',
  'player.load.backpack': 'Aggiungi uno zaino con circa il 5-10% del tuo peso corporeo. Se 12 ripetizioni lente ti sembrano facili, aggiungi un po’ di peso.',
  'player.painRule.title': 'Quanto dolore va bene?',
  'player.painRule.body': '0-3 va bene. 4-5 va bene se passa entro la mattina dopo. 6 o più: fermati.',
  'player.painRule.ok': 'Ho capito',
  'player.painRule.a11y': 'Quanto dolore va bene',
  'player.tempo.on': 'Audio attivo',
  'player.tempo.off': 'Audio disattivato',
  'player.voice.replay': 'Riascolta la spiegazione',

  // ── The player's own chrome ───────────────────────────────────────────────
  'player.header.meta': '{minutes} · {moves}',
  'player.chip.position': '{index} di {total}',
  'player.cta.pause': 'Pausa',
  'player.cta.resume': 'Riprendi',
  'player.cta.done': 'Fatto',
};
