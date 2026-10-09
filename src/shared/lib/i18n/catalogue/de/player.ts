/** player strings (count-in, post-session feedback). Filled per domain; see `../en/core.ts` for the rules. */

export const PLAYER_DE = {
  // ── The count-in ──────────────────────────────────────────────────────────
  'player.countIn.getReady': 'Mach dich bereit',
  'player.countIn.nextUp': 'Als Nächstes',
  'player.countIn.go': 'Los',
  'player.countIn.tapToStart': 'Tippen, um jetzt zu starten',

  // ── How hard was that ─────────────────────────────────────────────────────
  'player.feedback.question': 'Hättest du noch 2 saubere Wiederholungen geschafft?',
  'player.feedback.purpose': 'Deine Antwort stimmt die nächsten Einheiten ab.',
  'player.feedback.easy': 'Ja, locker',
  'player.feedback.right': 'Etwa richtig',
  'player.feedback.hard': 'Nein',
  'player.feedback.hurt': 'Es tat weh',
  'player.feedback.adjusts': 'Verstanden. Der Plan passt sich an.',
  'player.feedback.keeps': 'Verstanden. Der Plan bleibt bei diesem Tempo.',

  // ── "It hurt", after the session ──────────────────────────────────────────
  'player.afterPain.lowHint':
    'Notiert. Etwas Muskelkater nach dieser Arbeit ist normal. Ist er morgen früh noch da, macht der Check-in den Plan leichter.',
  'player.afterPain.highHint':
    'Das ist mehr, als diese Arbeit auslösen sollte. Deine nächste Einheit startet eine Stufe leichter.',
  'player.afterPain.save': 'Speichern',
  'player.cantDo.button': 'Geht gerade nicht',
  'player.cantDo.title': 'Was steht im Weg?',
  'player.cantDo.blurb': 'Wir tauschen sie jetzt aus und lassen sie aus deinem Plan weg.',
  'player.cantDo.noStep': 'Keine Stufe',
  'player.cantDo.noBand': 'Kein Band',
  'player.cantDo.noTowel': 'Kein Handtuch',
  'player.cantDo.noPillow': 'Kein Kissen',
  'player.cantDo.noBall': 'Kein Ball',
  'player.cantDo.hurts': 'Tut weh',
  'player.cantDo.swapped': 'Ersetzt durch {name}.',
  'player.cantDo.skipped': 'Heute passt hier nichts, also lassen wir diese aus.',
  'player.load.backpack': 'Nimm einen Rucksack mit etwa 5-10% deines Körpergewichts. Fühlen sich 12 langsame Wiederholungen leicht an, nimm etwas mehr.',
  'player.painRule.title': 'Wie viel Schmerz ist okay?',
  'player.painRule.body': '0-3 ist in Ordnung. 4-5 ist okay, wenn es bis zum nächsten Morgen abklingt. Ab 6 - aufhören.',
  'player.painRule.ok': 'Verstanden',
  'player.painRule.a11y': 'Wie viel Schmerz ist okay',
  'player.tempo.on': 'Ton an',
  'player.tempo.off': 'Ton aus',
  'player.voice.replay': 'Anleitung noch einmal abspielen',

  // ── The player's own chrome ───────────────────────────────────────────────
  'player.header.meta': '{minutes} · {moves}',
  'player.chip.position': '{index} von {total}',
  'player.cta.pause': 'Pause',
  'player.cta.resume': 'Fortsetzen',
  'player.cta.done': 'Fertig',
};
