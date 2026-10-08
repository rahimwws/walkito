/**
 * Home, German.
 *
 * Two exports, mirroring `../en/home.ts`: the phrases numbers arrive in, and
 * the sentences themselves as ordered segments.
 *
 * `du` throughout. German capitalises nouns, so "lowercase-first" applies only
 * to words that are not nouns: a frame that opens on "heute" or "deine" is
 * written lowercase and `buildBrief` restores the capital, while one that
 * opens on a noun ("Kraft", "Tag") keeps its capital as German always would.
 * After a full stop inside a line, the next frame starts with a capital.
 *
 * **Different segment counts from English, where the verb moves.** German puts
 * the finite verb second and sends particles and participles to the end, so
 * several lines move a word from before a metric to after it ("heute steht
 * {work} an") or drop a tail comma English needs and German does not
 * (`on-feet`). Every placeholder, icon and tone is kept; variant counts match
 * English.
 *
 * `{work}` is a noun phrase that has to read after "für" and before "an":
 * "für Fuß- und Wadenkraft", "heute steht Dehnen an". `{backTo}` carries its
 * preposition: "zum Laufen", "aufs Rad".
 *
 * **Register:** a coach. The health lines compare the person to themselves and
 * never to a norm - "über deinem eigenen Schnitt", never "hoch", never
 * "hinken". Stairs are "Etagen", the word Health uses in German, so the figure
 * matches what the user can check.
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

export const HOME_DE = {
  'home.greeting.morning': 'Guten Morgen',
  'home.greeting.afternoon': 'Guten Tag',
  'home.greeting.evening': 'Guten Abend',

  // ── The kind of work a day is ────────────────────────────────────────────
  'home.workStrength': 'Fuß- und Wadenkraft',
  'home.workMobility': 'Dehnen',
  'home.workBalance': 'Gleichgewichtstraining',
  'home.workRecovery': 'lockere Regeneration',
  'home.fallbackMove': 'Fersenheben',

  // ── Counted phrases ──────────────────────────────────────────────────────
  'home.minutes': { one: '{count} Minute', other: '{count} Minuten' },
  'home.moves': { one: '{count} Übung', other: '{count} Übungen' },
  'home.tests': { one: '{count} Test', other: '{count} Tests' },
  'home.weeks': { one: '{count} Woche', other: '{count} Wochen' },
  'home.points': { one: '{count} Punkt', other: '{count} Punkte' },
  'home.flights': { one: '{count} Etage', other: '{count} Etagen' },
  'home.hoursOnFeet': { one: '{count} Stunde', other: '{count} Stunden' },
  'home.thresholdHours': { one: '{count} Stunde', other: '{count} Stunden' },
  'home.daysInARow': { one: '{count} Tag in Folge', other: '{count} Tage in Folge' },
  'home.dayNumber': 'Tag {count}',
  'home.dayOfPlan': 'Tag {day} von {total}',
  'home.steps': { one: '{steps} Schritt', other: '{steps} Schritte' },

  // With the preposition, contracted where German contracts it.
  'home.backTo.running': 'zum Laufen',
  'home.backTo.tennis': 'zum Tennis',
  'home.backTo.gym': 'ins Studio',
  'home.backTo.football': 'zum Fußball',
  'home.backTo.basketball': 'zum Basketball',
  'home.backTo.cycling': 'aufs Rad',
  'home.backTo.hiking': 'auf die Wanderwege',

  // ── Units ────────────────────────────────────────────────────────────────
  'home.km': '{value} km',
  'home.percent': '{value}%',
  'home.duration': '{hours} Std. {minutes} Min.',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Aufgaben heute',
  'home.libraryTitle': 'Für jetzt gerade',
  'home.allDoneTitle': 'Fertig für heute',
  'home.allDoneBlurb': 'Heute ist nichts weiter nötig.',
  'home.doneSummary': '{minutes} · {work}',
  'home.doneMoves': { one: '{count} Übung geschafft', other: '{count} Übungen geschafft' },
  'home.doneTests': { one: '{count} Test geschafft', other: '{count} Tests geschafft' },
  'home.doneStreak': 'Tag {count} in Folge',
  'home.doneStreakStart': 'Deine Serie beginnt heute',
  'home.weekDoneA11y': { one: '{count} Tag diese Woche geschafft', other: '{count} Tage diese Woche geschafft' },
  'home.retestTask': 'Test',
  'home.retestTaskSub': 'Check · {tests}',
  'home.seeResults': 'Ergebnisse ansehen',
  'home.nothingScheduled': 'Heute ist nichts geplant. Pause zählt auch.',
  'home.markDone': 'Als erledigt markieren',
  'home.markNotDone': 'Als nicht erledigt markieren',
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  'home.chipSeconds': '{count} s',
  'home.chipMinutes': '{count} Min.',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'Heute tut es weh',
  'home.noPain': 'Heute kein Schmerz',
  'home.logCheckIn': 'Heutigen Check-in eintragen',
  'home.checkInAgain': 'Noch mal einchecken',
  'home.checkInTitle': 'Check-in heute',
  'home.checkInSub': 'Wie fühlt sich der Fuß an?',
  'home.checkInSubMorning': 'Wie schlimm waren heute Morgen die ersten Schritte nach dem Aufstehen?',
  'home.checkInSubDay': 'Wie geht’s deinem Fuß heute?',
  'home.somethingNew': 'Etwas Neues? (Schwellung, Taubheit, ein Knall)',
  'home.checkInKickerMorning': 'Check-in am Morgen · 10 Sek.',
  'home.checkInKickerDay': 'Check-in heute · 10 Sek.',
  'home.somethingNewTitle': 'Etwas Neues?',
  'home.somethingNewSub': 'Schwellung, Taubheit, ein Knall',
  'safety.title': 'Etwas Neues?',
  'safety.sub': 'Tippe an, was gerade zutrifft.',
  'safety.a1': 'Meine Wade ist auf einer Seite geschwollen, warm oder gerötet, oder ich bekomme schlecht Luft oder habe Brustschmerzen',
  'safety.a2': 'Ich habe einen plötzlichen Knall hinten am Knöchel gespürt und kann auf dem Bein nicht auf die Zehenspitzen',
  'safety.a3': 'Ich habe Diabetes und mein Fuß ist heiß, gerötet, geschwollen oder hat eine offene Wunde',
  'safety.b1': 'Es begann nach einem Sturz, Umknicken oder einer Verletzung und ich kann nicht voll auftreten',
  'safety.b2': 'Ich kann mit einem Finger auf eine schmerzende Stelle am Knochen zeigen, oder Zusammendrücken der Fersenseiten tut weh',
  'safety.b3': 'Es weckt mich nachts oder bleibt in Ruhe schlimm',
  'safety.b4': 'Ich habe Fieber oder fühle mich krank dabei',
  'safety.c1': 'Brennen, Kribbeln oder Taubheit im Fuß',
  'safety.c2': 'Beide Fersen tun weh und andere Gelenke sind morgens geschwollen oder steif',
  'safety.c3': 'Ein Fußgewölbe ist im Erwachsenenalter von selbst flacher geworden',
  'safety.c4': 'Ich habe Diabetes oder weniger Gefühl in den Füßen',
  'safety.c5': 'Ich hatte in den letzten 3 Wochen eine Kortisonspritze in die Ferse oder Achillessehne',
  'safety.common': 'Wund oder humpelig nach einem langen Tag? Das ist bei Fersenschmerz häufig - du kannst weitermachen.',
  'safety.none': 'Nichts davon',
  'safety.check': 'Fertig',
  'safety.resultA': 'Bitte trainiere heute nicht. Das braucht jetzt ärztliche Hilfe - ruf den Notruf oder geh in die Notaufnahme.',
  'safety.resultB1': 'Bitte lass das bald abklären. Bis dahin alles sanft.',
  'safety.resultB2': 'Erwähne es bei Gelegenheit bei einer Ärztin oder einem Arzt.',
  'safety.resultNone': 'Nichts davon braucht gerade ärztliche Hilfe. Mach wie geplant weiter.',
  'safety.close': 'Schließen',
  'home.save': 'Speichern',
  'home.saved': 'Gespeichert',
  // Nothing here congratulates a number: warmth for reporting a seven teaches
  // people to stop reporting honestly.
  'home.ackGood': 'Gut.',
  'home.ackLogged': 'Eingetragen.',
  'home.ackLoggedShorter': 'Eingetragen. Deshalb ist die Einheit heute kürzer.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Wo es wehtut',
  'home.zonesEmpty': 'Tippe, wo es wehtut - bis zu {count}',
  'home.zonesFull': 'Bis zu {count} gleichzeitig - tippe eine an, um sie zu tauschen',
  'home.zonesPicked': '{zones} - als Nächstes {move}',
  'home.zoneJoin': ' · ',

  /** Names the person finds on their own leg, not labels from an anatomy chart. */
  'home.zone.calf': 'Wade',
  'home.zone.soleus': 'Schollenmuskel',
  'home.zone.tibia': 'Schienbein',
  'home.zone.tibAnt': 'Vorderes Schienbein',
  'home.zone.ankle': 'Knöchel',
  'home.zone.achilles': 'Achillessehne',
  'home.zone.heel': 'Ferse',
  'home.zone.dorsum': 'Fußrücken',
  'home.zone.arch': 'Fußgewölbe',
  'home.zone.ball': 'Fußballen',
  'home.zone.toes': 'Zehen',
  'home.zone.innerAnkle': 'Innenknöchel',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Schmerz heute',
  'home.morePain': 'Mehr Schmerz',
  'home.lessPain': 'Weniger Schmerz',
  'home.painValueA11y': '{score} von {max}, {band}',
  // Always against this person's own range, never a norm.
  'home.rangeAbove': 'Über deinem üblichen Bereich',
  'home.rangeBelow': 'Unter deinem üblichen Bereich',
  'home.rangeWithin': 'In deinem üblichen Bereich',
  // Shorter than the full line: the chip is narrow and VoiceOver reads the
  // full meaning.
  'home.rangeAboveChip': 'Darüber',
  'home.rangeBelowChip': 'Darunter',
  'home.rangeWithinChip': 'Wie üblich',
  'home.usualRangeLegend': 'Üblich {low}-{high}',
  'home.usualRangeA11y': 'Üblicher Bereich, {low} bis {high}',

  /** What each score means, as what the pain stops you doing. They describe,
   * they do not grade. */
  'home.bandNothing': 'Nichts',
  'home.bandNothingBlurb': 'Heute kein Schmerz zu melden.',
  'home.bandBarely': 'Kaum da',
  'home.bandBarelyBlurb': 'Du würdest es vergessen, wenn niemand fragt.',
  'home.bandNoticeable': 'Spürbar',
  'home.bandNoticeableBlurb': 'Du spürst es, aber es ändert nichts an dem, was du tust.',
  'home.bandSore': 'Störend',
  'home.bandSoreBlurb': 'Du arbeitest drumherum, ohne nachzudenken.',
  'home.bandHurts': 'Tut weh',
  'home.bandHurtsBlurb': 'Es entscheidet gerade Dinge für dich.',
  'home.bandSevere': 'Stark',
  'home.bandSevereBlurb': 'Schon das Stehen ist das Problem, nicht das Laufen.',
};

export const BRIEF_DE = {
  // ── Pain, the user's own report ──────────────────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'heute nur' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'im Sitzen. Das ist alles.' },
    ],
    [
      { k: 'frame', text: 'harter Morgen. Heute nur' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Mehr nicht.' },
    ],
    [
      { k: 'frame', text: 'heute entlasten wir -' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'ganz ohne Stehen.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'deine Morgen sind um' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'schmerzhafter als letzte Woche. Heute machen wir es leichter.' },
    ],
    [
      { k: 'frame', text: 'diese Woche ist um' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'schlechter als die davor. Ein leichterer Tag.' },
    ],
    [
      { k: 'frame', text: 'der Schmerz liegt' },
      { k: 'metric', icon: 'warn', text: 'über deinem eigenen Schnitt', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'Heute schalten wir zurück.' },
    ],
  ],

  // ── The programme's own structure ────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'heute kein Training, sondern' },
      { k: 'metric', icon: 'retest', text: '{tests}' },
      { k: 'frame', text: '- damit wir später etwas zum Vergleichen haben.' },
    ],
    [
      { k: 'frame', text: 'Tag eins:' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'etwa vier Minuten. Das ist dein Ausgangspunkt.' },
    ],
    [
      { k: 'frame', text: 'wir starten mit' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: '.' },
      { k: 'frame', text: 'In zwei Wochen sehen wir, was sich verändert hat.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'schon' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'Zeit zu sehen, was sich getan hat.' },
    ],
    [
      { k: 'frame', text: 'Check-Tag -' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'lass uns messen.' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}' },
      { k: 'frame', text: 'und wir wissen, wo du stehst.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'heute beginnt eine neue Woche. Fokus:' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
    ],
    // The hedge stays: "die meisten" and "meist".
    [
      { k: 'frame', text: 'neue Woche ab heute. Die meisten merken leichtere Morgen nach' },
      { k: 'metric', icon: 'level', text: '4-6 Wochen', tail: '.' },
      { k: 'frame', text: 'Die größte Veränderung kommt meist innerhalb von 3 Monaten.' },
    ],
    [
      { k: 'frame', text: 'diese Woche geht es um' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'Der Plan ist darauf aufgebaut.' },
    ],
  ],

  // ── The weekly plan ──────────────────────────────────────────────────────
  'goal-reached': [
    [
      { k: 'metric', icon: 'up', text: '{goalDone}' },
      { k: 'frame', text: '- geschafft. Als Nächstes:' },
      { k: 'metric', icon: 'level', text: '{nextGoal}', tail: '.' },
    ],
  ],
  'missed-yesterday': [
    [
      { k: 'frame', text: 'gestern war gestern. Damit es nicht zwei werden -' },
      { k: 'metric', icon: 'session', text: '2 Minuten', tail: ' heute?' },
    ],
  ],
  'test-soon': [
    [
      { k: 'frame', text: 'noch' },
      { k: 'metric', icon: 'retest', text: '{testIn}' },
      { k: 'frame', text: 'bis zu deinem nächsten Test.' },
    ],
  ],
  'new-this-week': [
    [
      { k: 'frame', text: 'neu diese Woche:' },
      { k: 'metric', icon: 'session', text: '{newMove}', tail: '.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Heute' },
      { k: 'metric', icon: 'tasks', text: '{moves}' },
      { k: 'frame', text: 'für {work} -' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'die ersten Tage -' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ':' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'für {work}. Kurz und oft schlägt lang und selten.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      { k: 'frame', text: 'Heute steht {work} an. In der ersten Woche geht es ums Dranbleiben, nicht um Anstrengung.' },
    ],
  ],

  // ── Load, from what actually happened ────────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'gestern war dein' },
      { k: 'metric', icon: 'feet', text: 'längster Lauf seit einem Monat', tail: ' -' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Heute bleibt es' },
      { k: 'metric', icon: 'rest', text: 'locker', tail: '.' },
    ],
    [
      { k: 'frame', text: 'das waren' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'weiter als alles in vier Wochen. Heute erholen wir uns.' },
    ],
    [
      { k: 'frame', text: 'gestern der längste Lauf seit einem Monat. Heute gibt es' },
      { k: 'metric', icon: 'rest', text: 'Erholung', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      { k: 'frame', text: 'gestern - mehr als in deiner üblichen Woche. Ein lockerer Tag lohnt sich.' },
    ],
    [
      { k: 'frame', text: 'gestern mehr' },
      { k: 'metric', icon: 'level', text: 'Treppen' },
      { k: 'frame', text: 'als sonst. Treppen ziehen stark am Fußgewölbe.' },
    ],
    [
      { k: 'frame', text: 'gestern gab es viele' },
      { k: 'metric', icon: 'level', text: 'Treppen', tail: '.' },
      { k: 'frame', text: 'Heute geht es leichter.' },
    ],
  ],

  'on-feet': [
    [
      { k: 'frame', text: 'du bist schon' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'auf den Beinen. Die letzten zwei Male über' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'war der Morgen danach' },
      { k: 'metric', icon: 'warn', text: 'hart.', tone: 'warn' },
    ],
    [
      { k: 'frame', text: 'das sind heute' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'auf den Beinen. Mehr als' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tone: 'warn' },
      { k: 'frame', text: 'hat dich schon mal den nächsten Morgen gekostet.' },
    ],
    [
      { k: 'frame', text: 'schon ein langer Tag -' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Setz dich ruhig zehn Minuten hin.' },
    ],
  ],

  // A question, never a milestone.
  'steps-today': [
    [
      { k: 'frame', text: 'schon' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'heute. Wie geht’s der Ferse?' },
    ],
    [
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'bisher - eine Menge. Wenn die Ferse schmerzt, setz dich kurz hin.' },
    ],
    [
      { k: 'frame', text: 'heute sind es schon' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Dehn heute Abend den Fuß - morgen früh dankt er es dir.' },
    ],
    [
      { k: 'frame', text: 'ein langer Tag auf den Beinen -' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Trag ein, wie sich die Ferse anfühlt, damit der Plan es weiß.' },
    ],
  ],

  // ── Recovery, watch only ─────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'diese Woche im Schnitt' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'Schlaf. Sehnen bauen sich nachts auf - heute wird es' },
      { k: 'metric', icon: 'rest', text: 'leichter', tail: '.' },
    ],
    [
      { k: 'frame', text: 'kurze Nächte die ganze Woche -' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'im Schnitt. Heute nehmen wir etwas raus.' },
    ],
    [
      { k: 'frame', text: 'du hast' },
      { k: 'metric', icon: 'sleep', text: 'unter sieben Stunden' },
      { k: 'frame', text: 'geschlafen. Heute ist es mit Absicht leichter.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'dein Ruhepuls ist' },
      { k: 'metric', icon: 'level', text: 'etwas höher als sonst', tail: '.' },
      { k: 'frame', text: 'Heute eher Erholung.' },
    ],
    [
      { k: 'frame', text: 'der Ruhepuls liegt' },
      { k: 'metric', icon: 'level', text: 'über deinem üblichen Wert', tail: '.' },
      { k: 'frame', text: 'Wir machen es sanft.' },
    ],
    [
      { k: 'frame', text: 'dein Körper holt noch auf -' },
      { k: 'metric', icon: 'level', text: 'Ruhepuls höher', tail: '.' },
      { k: 'frame', text: 'Heute leichter.' },
    ],
  ],

  // ── Gait, demoted ────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'du gehst' },
      { k: 'metric', icon: 'gait', text: 'langsamer als sonst' },
      { k: 'frame', text: 'schon die ganze Woche. Das passt oft zu einem schmerzenden Fuß.' },
    ],
    [
      { k: 'frame', text: 'dein Gehtempo liegt' },
      { k: 'metric', icon: 'gait', text: 'unter deinem eigenen Schnitt', tail: '.' },
      { k: 'frame', text: 'Gut zu wissen, kein Grund zur Sorge.' },
    ],
    [
      { k: 'frame', text: 'diese Woche langsamere Schritte als sonst.' },
      { k: 'metric', icon: 'gait', text: 'Nichts Beunruhigendes' },
      { k: 'frame', text: '- aber heute bleibt es locker.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'deine Schritte sind' },
      { k: 'metric', icon: 'gait', text: 'ungleichmäßiger', tone: 'warn' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'statt sonst' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'diese Woche weniger gleichmäßig als sonst -' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'gegenüber deinen üblichen' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'an deinem Gang hat sich etwas verändert.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'gegenüber sonst' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'Das passiert oft, wenn etwas wehtut.' },
    ],
  ],

  // ── Done, and coming back ────────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'für heute erledigt.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Bis morgen.' },
    ],
    [
      { k: 'frame', text: 'heute ist geschafft -' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'und es geht weiter.' },
    ],
    [
      { k: 'frame', text: 'Einheit erledigt - das ist' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'am Stück.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'schön, dass du wieder da bist. Du hast' },
      { k: 'metric', icon: 'session', text: 'eine kurze Einheit' },
      { k: 'frame', text: 'zum Reinkommen.' },
    ],
    [
      { k: 'frame', text: 'schön, dich zu sehen. Wir starten heute' },
      { k: 'metric', icon: 'session', text: 'klein', tail: '.' },
    ],
    [
      { k: 'frame', text: 'wieder da - wir machen da weiter, wo du aufgehört hast, nur' },
      { k: 'metric', icon: 'session', text: 'leichter', tail: '.' },
    ],
  ],

  // ── Good news, gated behind a quiet morning ──────────────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'deine Morgen werden' },
      { k: 'metric', icon: 'up', text: 'leichter', tone: 'good' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'weniger in diesem Monat.' },
    ],
    [
      { k: 'frame', text: 'diesen Monat' },
      { k: 'metric', icon: 'up', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'weniger. Das ist eine echte Veränderung, kein Zufall.' },
    ],
    [
      { k: 'frame', text: 'die letzten zwei Wochen waren' },
      { k: 'metric', icon: 'up', text: 'ruhiger', tone: 'good' },
      { k: 'frame', text: 'als die zwei davor.' },
    ],
  ],

  'walk-back': [
    [
      { k: 'frame', text: 'dein Gehtempo ist' },
      { k: 'metric', icon: 'done', text: 'wieder wie gewohnt', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Gutes Zeichen.' },
    ],
    [
      { k: 'frame', text: 'das Tempo hat sich' },
      { k: 'metric', icon: 'done', text: 'wieder eingependelt', tail: ',', tone: 'good' },
      { k: 'frame', text: 'da, wo es sonst liegt.' },
    ],
    [
      { k: 'frame', text: 'du gehst wieder in' },
      { k: 'metric', icon: 'done', text: 'deinem eigenen üblichen Tempo', tail: '.', tone: 'good' },
    ],
  ],

  'gait-recovered': [
    [
      { k: 'frame', text: 'dein Gang ist' },
      { k: 'metric', icon: 'done', text: 'wieder gleichmäßig', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Zurück bei' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'deine Schritte sind' },
      { k: 'metric', icon: 'done', text: 'wieder im Gleichgewicht', tone: 'good' },
      { k: 'frame', text: '- zwei Tage in Folge.' },
    ],
    [
      { k: 'frame', text: 'das hat sich ausgeglichen.' },
      { k: 'metric', icon: 'done', text: 'Wieder wie gewohnt', tail: '.', tone: 'good' },
    ],
  ],

  // ── Honest emptiness ─────────────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'ich lerne noch, wie du gehst. Gib mir' },
      { k: 'metric', icon: 'window', text: 'noch ein paar Tage' },
      { k: 'frame', text: 'mit dem Handy in der Hosentasche.' },
    ],
    [
      { k: 'frame', text: 'ich lerne noch, was für dich üblich ist -' },
      { k: 'metric', icon: 'window', text: 'noch ein paar Tage' },
      { k: 'frame', text: 'sollten reichen.' },
    ],
    [
      { k: 'frame', text: 'noch zu wenig eigene Daten.' },
      { k: 'metric', icon: 'window', text: 'Noch ein paar Tage' },
      { k: 'frame', text: 'und ich kann vergleichen.' },
    ],
  ],

  // ── Their goal ───────────────────────────────────────────────────────────
  // A direction, never a promise about the outcome.
  'goal-back': [
    [
      { k: 'frame', text: 'jede Einheit ist ein weiterer Schritt zurück' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
      { k: 'frame', text: 'Heute:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'zurück' },
      { k: 'metric', icon: 'session', text: '{backTo}' },
      { k: 'frame', text: 'kommt man mit Tagen wie diesem. Heute:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'heute' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: '- und du kommst ein Stück weiter zurück' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'jeden Tag ein bisschen - so kommt man zurück' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
  ],

  'goal-consistent': [
    [
      { k: 'frame', text: 'schon' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Bleib dran.' },
    ],
    [
      { k: 'frame', text: 'du wolltest Beständigkeit - hier ist sie:' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Die Einheit heute dauert nur' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-stronger': [
    [
      { k: 'frame', text: 'Kraft kommt durch Wiederholung. Heute:' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'heute steht' },
      { k: 'metric', icon: 'level', text: '{work}' },
      { k: 'frame', text: 'an. Je öfter, desto stärker.' },
    ],
    [
      { k: 'frame', text: 'stärker heißt: wenig, aber oft. Heute:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-injuryfree': [
    [
      { k: 'frame', text: 'der beste Schutz vor Verletzungen ist jeden Tag ein bisschen. Heute:' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'ein starker Fuß verletzt sich seltener. Heute bekommt er' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'am Tag helfen, Verletzungen vorzubeugen.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'ich kann deinen Gang nicht lesen - steck dein Handy in die' },
      { k: 'metric', icon: 'pocket', text: 'Hosentasche', tail: ',' },
      { k: 'frame', text: 'nicht in eine Tasche, dann erkenne ich ihn.' },
    ],
    [
      { k: 'frame', text: 'es kommen keine Gehdaten an. Ein Handy in der' },
      { k: 'metric', icon: 'pocket', text: 'Hosentasche' },
      { k: 'frame', text: 'auf ebenem Boden ist alles, was es braucht.' },
    ],
    [
      { k: 'frame', text: 'noch nichts zu lesen - die Sensoren brauchen das Handy in der' },
      { k: 'metric', icon: 'pocket', text: 'Hosentasche' },
      { k: 'frame', text: 'beim Gehen.' },
    ],
  ],

  // ── Most days ────────────────────────────────────────────────────────────
  'quiet-session': [
    [
      { k: 'frame', text: 'heute steht' },
      { k: 'metric', icon: 'session', text: '{move}' },
      { k: 'frame', text: 'an - die Übung, die diesen Plan trägt.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Der schwerste Teil des Anfangens liegt hinter dir.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'gestern ein großer Tag auf den Beinen -' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Zur Einordnung, kein Urteil.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'gestern ein' },
      { k: 'metric', icon: 'feet', text: 'leichterer Tag' },
      { k: 'frame', text: 'auf den Beinen. Ein guter Tag, um etwas mehr zu belasten.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'ein Gedanke zu Schuhen: eine' },
      { k: 'metric', icon: 'level', text: 'festere Fersenkappe' },
      { k: 'frame', text: 'und etwas mehr Sprengung nehmen Last vom Fußgewölbe.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'wenn du heute läufst, halte deine Schrittfrequenz etwa' },
      { k: 'metric', icon: 'up', text: '{cadence} über deinem üblichen Wert', tail: '.' },
      { k: 'frame', text: 'Kürzere Schritte, weniger Last auf der Ferse.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'die meisten Veränderungen zeigen sich hier' },
      { k: 'metric', icon: 'window', text: 'früh', tail: '.' },
      { k: 'frame', text: 'Du bist genau in diesem Zeitraum.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
