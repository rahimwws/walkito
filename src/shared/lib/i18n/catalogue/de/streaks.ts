/** The streak sheet: the big number, the week, the tiles and the milestone ladder. Filled per domain; see
 * `../en/core.ts` for the rules. */

export const STREAKS_DE = {
  'streakSheet.inARow': { one: '{count} Tag in Folge', other: '{count} Tage in Folge' },

  'streakSheet.current': 'Aktuelle Serie',
  'streakSheet.showedUp': 'Tage insgesamt',
  'streakSheet.longest': 'Beste Serie',
  'streakSheet.currentA11y': { one: 'Aktuelle Serie: {count} Tag', other: 'Aktuelle Serie: {count} Tage' },
  'streakSheet.showedUpA11y': { one: 'Insgesamt {count} Tag', other: 'Insgesamt {count} Tage' },
  'streakSheet.longestA11y': { one: 'Beste Serie: {count} Tag', other: 'Beste Serie: {count} Tage' },

  'streakSheet.allCount': 'Schwere Tage und 2-Minuten-Tage zählen alle.',

  'streakSheet.dayDone': '{day}: Tag gezählt',
  'streakSheet.dayRest': '{day}: Ruhetag',
  'streakSheet.dayToday': 'Heute, {day}',
  'streakSheet.dayTodayDone': 'Heute, {day}: Tag gezählt',
  'streakSheet.dayAhead': '{day}: kommt noch',

  'streakSheet.milestoneReached': {
    one: '{count} Tag in Folge: erreicht',
    other: '{count} Tage in Folge: erreicht',
  },
  'streakSheet.milestoneAhead': {
    one: '{count} Tag in Folge: kommt noch',
    other: '{count} Tage in Folge: kommt noch',
  },
  'streakSheet.levelsTitle': 'Zwei Arten, wie ein Tag zählt',
  'streakSheet.levelFull': 'Eine Einheit oder eine Routine aus der Bibliothek lässt den Schuh leuchten.',
  'streakSheet.levelCheckin': 'Nur Einchecken lässt die Flamme leuchten. Deine Serie zählt genauso weiter.',
  'streakSheet.dayCheckin': '{day}: eingecheckt',
  'streakSheet.dayTodayCheckin': 'Heute, {day}: eingecheckt',

  // „Joker“: German has no plural of „Schutz“ that reads well.
  'streakSheet.freezes': { one: '{count} Joker auf Vorrat', other: '{count} Joker auf Vorrat' },
  'streakSheet.freezesRule': 'Du bekommst jede Woche einen, höchstens zwei. Ein Tag ohne alles verbraucht einen, und deine Serie hält.',
  'streakSheet.freezeSpent': 'Diese Woche hat ein Joker einen ruhigen Tag abgedeckt, und deine Serie ging weiter.',

  'weekGoal.progress': { one: '{done} von {count} Einheit diese Woche', other: '{done} von {count} Einheiten diese Woche' },
  'weekGoal.inARow': { one: '{count} Woche in Folge', other: '{count} Wochen in Folge' },

  'accessory.shoe': 'Ab heute trägt Walkito ein Schuh-Abzeichen.',
  'accessory.medal': 'Ab heute trägt Walkito eine Medaille.',
  'accessory.trophy': 'Ab heute steht ein Pokal neben Walkito.',
  'accessory.crown': 'Ab heute trägt Walkito eine Krone.',
};
