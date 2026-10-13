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

  'streakSheet.allCount': 'Ruhetage, schwere Tage und 2-Minuten-Tage zählen alle.',

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
};
