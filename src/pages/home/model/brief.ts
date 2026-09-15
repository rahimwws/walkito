import { PROGRAM, blockName, movesFor, painFor } from '@/entities/program';
import { NO_SIGNALS } from '@/entities/health/model/metrics';
import { frame, metric, value, type BriefToken } from '@/shared/ui/daily-brief';

import {
  MONTH,
  PAIN_MID,
  bigStepDay,
  briefState,
  meanPain,
  pick,
  quietTopic,
  type BriefInput,
  type BriefState,
} from './brief-state';

export { briefState, quietTopic, type BriefInput, type BriefState } from './brief-state';

/**
 * One decimal only where it earns one: "8%" reads, "8.4%" implies a precision
 * an estimated metric does not have.
 */
function pct(v: number | null): string {
  return v == null ? '—' : String(Math.round(v));
}

function count(v: number | null): string {
  return v == null ? '—' : Math.round(v).toLocaleString('en-US');
}

/** "5h 20m", the way a person says it. */
function duration(min: number | null): string {
  if (min == null) return '—';
  return `${Math.floor(min / 60)}h ${String(Math.round(min % 60)).padStart(2, '0')}m`;
}

function km(v: number | null): string {
  return v == null ? '—' : `${v.toFixed(1)} km`;
}

const ORDINALS = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];

/** Words up to seven, then figures. "It's the third day" is a sentence; "it's
 * the 12th day" is a log line, and by then the number is the point anyway. */
function ordinal(n: number): string {
  return ORDINALS[n] ?? `${n}th`;
}

/**
 * The morning line, as tokens.
 *
 * Grey frame words carry the sentence, emphasised values carry the facts, and
 * the only colour is on the one thing worth acting on.
 *
 * Every health-derived line compares the person to themselves and never to a
 * norm. There is no population baseline for walking asymmetry, Apple labels its
 * mobility metrics *estimated*, and inferring a physical condition from an
 * estimate is diagnostic-adjacent — so the words are "vs your usual", never
 * "high", never "limping", never "compensating".
 */
export function briefTokens(input: BriefInput): readonly BriefToken[] {
  const { name, cursor, todayPain, streak, health = NO_SIGNALS } = input;
  const state = briefState(input);
  const day = PROGRAM[cursor];
  const pain = todayPain ?? painFor(cursor);

  // The name opens the line when there is one. With no name the sentence simply
  // starts, which is why each branch capitalises its own first frame word.
  const addressed = name.length > 0;
  const lead: readonly BriefToken[] = addressed ? [value(name, { tail: ',' })] : [];
  const open = (text: string) =>
    addressed ? text : text.charAt(0).toUpperCase() + text.slice(1);

  const line = (...tokens: readonly BriefToken[]) => [...lead, ...tokens];
  const v = <T,>(options: readonly T[]) => pick(options, cursor);

  switch (state) {
    // --- pain, the user's own report -------------------------------------
    case 'flare':
      return v([
        line(
          frame(open('today is')),
          metric('rest', '3 minutes', { tail: ',' }),
          frame('sitting down. That’s it.'),
        ),
        line(
          frame(open('rough morning. Today is')),
          metric('rest', '3 minutes', { tail: '.' }),
          frame('Nothing more.'),
        ),
        line(
          frame(open('we’re unloading today —')),
          metric('rest', '3 minutes', { tail: ',' }),
          frame('off your feet.'),
        ),
      ]);

    case 'pain-spike': {
      const week = meanPain(cursor - 7, cursor, cursor);
      const jump = week != null ? Math.round(pain - week) : PAIN_MID;
      return v([
        line(
          frame(open('your mornings are')),
          metric('warn', `${jump} points`, { tone: 'warn' }),
          frame('sharper than last week. Today we ease off.'),
        ),
        line(
          frame(open('this week is')),
          metric('warn', `${jump} points`, { tone: 'warn' }),
          frame('worse than the one before. Lighter day.'),
        ),
        line(
          frame(open('pain is')),
          metric('warn', 'up on your own average', { tail: '.', tone: 'warn' }),
          frame('We back off today.'),
        ),
      ]);
    }

    // --- the programme's own structure ------------------------------------
    case 'retest':
      return v([
        line(frame(open('it’s been')), metric('retest', 'four weeks', { tail: '.' }), frame('Time to see what moved.')),
        line(frame(open('checkpoint day.')), metric('retest', 'Three tests', { tail: ',' }), frame('four minutes.')),
        line(frame(open('let’s measure.')), metric('retest', 'Four minutes', { tail: '' }), frame('and we’ll know where you are.')),
      ]);

    case 'checkpoint-recap':
      return v([
        line(
          frame(open(`${blockName(day?.block ?? 1)} starts today.`)),
          metric('level', 'New block', { tail: ',' }),
          frame('new load.'),
        ),
        line(
          frame(open('new block today. Studies of this say about')),
          metric('level', 'half', { tail: '' }),
          frame('the year’s gain lands in the first three months.'),
        ),
        line(
          frame(open('you’re into')),
          metric('level', blockName(day?.block ?? 1), { tail: '.' }),
          frame('The work changes shape from here.'),
        ),
      ]);

    case 'first-week':
      return v([
        line(frame(open('day')), metric('streak', `${cursor + 1} of 56`, { tail: '.' }), frame(`Today is ${day?.minutes ?? 4} minutes.`)),
        line(frame(open('early days —')), metric('streak', `day ${cursor + 1}`, { tail: '.' }), frame('Short and often beats long and rare.')),
        line(frame(open('day')), metric('streak', String(cursor + 1), { tail: '.' }), frame('The first week is about showing up, not effort.')),
      ]);

    // --- load --------------------------------------------------------------
    case 'big-run':
      return v([
        line(
          frame(open('yesterday was your')),
          metric('feet', `longest run in a month`, { tail: ' —' }),
          value(km(health.longestRunYesterdayKm), { tail: '.' }),
          frame('Today is'),
          metric('rest', 'easy', { tail: '.' }),
        ),
        line(
          frame(open('that was')),
          metric('feet', km(health.longestRunYesterdayKm), { tail: ',' }),
          frame('further than anything in four weeks. Today we recover.'),
        ),
        line(
          frame(open('biggest single run in a month yesterday. Today is')),
          metric('rest', 'recovery', { tail: '.' }),
        ),
      ]);

    case 'stairs':
      return v([
        line(
          frame(open('a lot of')),
          metric('level', `${count(health.flightsYesterday)} flights`, { tail: '' }),
          frame('yesterday — more than your usual week. Worth an easy day.'),
        ),
        line(
          frame(open('more')),
          metric('level', 'stairs', { tail: '' }),
          frame('yesterday than you normally climb. Stairs pull hard on the arch.'),
        ),
        line(
          frame(open('yesterday was heavy on')),
          metric('level', 'stairs', { tail: '.' }),
          frame('Today leans easier.'),
        ),
      ]);

    case 'on-feet': {
      const hours = input.hoursOnFeet ?? 0;
      const limit = input.onFeetThreshold ?? 7;
      return v([
        line(
          frame(open('you’re at')),
          metric('feet', `hour ${Math.floor(hours)}`, { tail: '' }),
          frame('of standing. The last two times you passed'),
          metric('threshold', String(limit), { tail: ',', tone: 'warn' }),
          frame('the next morning was'),
          metric('warn', 'rough.', { tone: 'warn' }),
        ),
        line(
          frame(open('that’s')),
          metric('feet', `${Math.floor(hours)} hours`, { tail: '' }),
          frame('on your feet today. Past'),
          metric('threshold', String(limit), { tail: '', tone: 'warn' }),
          frame('has cost you the next morning before.'),
        ),
        line(
          frame(open('long day already —')),
          metric('feet', `hour ${Math.floor(hours)}`, { tail: '.' }),
          frame('Worth sitting down for ten minutes.'),
        ),
      ]);
    }

    // --- recovery, watch only ---------------------------------------------
    case 'poor-sleep':
      return v([
        line(
          frame(open('you’ve averaged')),
          metric('sleep', duration(health.sleepMeanMin), { tail: '' }),
          frame('this week. Tendons rebuild at night — today is'),
          metric('rest', 'lighter', { tail: '.' }),
        ),
        line(
          frame(open('short nights all week —')),
          metric('sleep', duration(health.sleepMeanMin), { tail: '' }),
          frame('on average. We take a little off today.'),
        ),
        line(
          frame(open('sleep has been')),
          metric('sleep', 'under seven hours', { tail: '' }),
          frame('for a week now. Today is easier on purpose.'),
        ),
      ]);

    case 'resting-hr':
      return v([
        line(frame(open('your resting pulse is')), metric('level', 'up a little', { tail: '.' }), frame('Today leans recovery.')),
        line(frame(open('pulse at rest is')), metric('level', 'above your normal', { tail: '.' }), frame('We go gently.')),
        line(frame(open('your body is still catching up —')), metric('level', 'resting pulse up', { tail: '.' }), frame('Lighter today.')),
      ]);

    // --- gait, demoted -----------------------------------------------------
    case 'slower-walk':
      return v([
        line(
          frame(open('you’ve been walking')),
          metric('gait', 'slower than usual', { tail: '' }),
          frame('all week. That often tracks with a sore foot.'),
        ),
        line(
          frame(open('your walking pace is')),
          metric('gait', 'down on your own average', { tail: '.' }),
          frame('Worth noticing, not worrying about.'),
        ),
        line(
          frame(open('slower steps than your normal this week.')),
          metric('gait', 'Nothing alarming', { tail: '' }),
          frame('— but we’ll keep today easy.'),
        ),
      ]);

    case 'gait-change':
      return v([
        line(
          frame(open('your steps got')),
          metric('gait', 'uneven', { tone: 'warn' }),
          frame('—'),
          value(`${pct(health.asymmetryToday)}%`, { tone: 'warn' }),
          frame('vs your usual'),
          value(`${pct(health.asymmetryBaseline)}%`, { tail: '.' }),
        ),
        line(
          frame(open('less even than your normal this week —')),
          metric('gait', `${pct(health.asymmetryToday)}%`, { tail: '', tone: 'warn' }),
          frame(`against your usual ${pct(health.asymmetryBaseline)}%.`),
        ),
        line(
          frame(open('something changed in how you walk.')),
          metric('gait', `${pct(health.asymmetryToday)}%`, { tail: '', tone: 'warn' }),
          frame(`vs your ${pct(health.asymmetryBaseline)}%. This often happens when something hurts.`),
        ),
      ]);

    // --- done, and coming back ---------------------------------------------
    case 'done':
      return v([
        line(frame(open('done for today.')), metric('done', `${streak} days in a row`, { tail: '.', tone: 'good' }), frame('Come back tomorrow.')),
        line(frame(open('that’s today handled —')), metric('done', `${streak} straight`, { tail: '.', tone: 'good' })),
        line(frame(open('session done.')), metric('done', `Day ${streak}`, { tail: '' }), frame('of the run you’re on.')),
      ]);

    case 'returning':
      return v([
        line(frame(open('welcome back. You have')), metric('session', 'one short session', { tail: '' }), frame('to ease in.')),
        line(frame(open('good to see you. We start')), metric('session', 'small', { tail: '' }), frame('today.')),
        line(frame(open('back again — we pick up where you left off, just')), metric('session', 'lighter', { tail: '.' })),
      ]);

    // --- good news, gated ---------------------------------------------------
    case 'pain-down': {
      const month = meanPain(cursor - MONTH, cursor - MONTH / 2, cursor);
      const recent = meanPain(cursor - MONTH / 2, cursor, cursor);
      const drop = month != null && recent != null ? Math.round(month - recent) : PAIN_MID;
      return v([
        line(frame(open('your mornings are')), metric('up', 'easing', { tone: 'good' }), frame(`— down ${drop} points this month.`)),
        line(frame(open('down')), metric('up', `${drop} points`, { tail: '', tone: 'good' }), frame('on the month. That is a real change, not noise.')),
        line(frame(open('the last two weeks have been')), metric('up', 'quieter', { tail: '', tone: 'good' }), frame('than the two before.')),
      ]);
    }

    case 'walk-back':
      return v([
        line(frame(open('your walking pace is')), metric('done', 'back to your normal', { tail: '.', tone: 'good' }), frame('Good sign.')),
        line(frame(open('pace has')), metric('done', 'settled back', { tail: '', tone: 'good' }), frame('to where it usually sits.')),
        line(frame(open('you’re walking at')), metric('done', 'your own normal speed', { tail: '', tone: 'good' }), frame('again.')),
      ]);

    case 'gait-recovered':
      return v([
        line(frame(open('your walk is')), metric('done', 'even again', { tail: '.', tone: 'good' }), frame(`Back to ${pct(health.asymmetryBaseline)}%.`)),
        line(frame(open('steps are')), metric('done', 'back in balance', { tail: '', tone: 'good' }), frame('— two days running.')),
        line(frame(open('that evened out.')), metric('done', 'Back to your usual', { tail: '.', tone: 'good' })),
      ]);

    // --- honest emptiness ---------------------------------------------------
    case 'learning':
      return v([
        line(frame(open('I’m still learning how you walk. Give me')), metric('window', 'a few more days', { tail: '' }), frame('with your phone in your pocket.')),
        line(frame(open('still building a picture of your normal —')), metric('window', 'a few more days', { tail: '' }), frame('should do it.')),
        line(frame(open('not enough of your own history yet.')), metric('window', 'A few more days', { tail: '' }), frame('and I can compare.')),
      ]);

    case 'no-data':
      return v([
        line(frame(open('I can’t read your walk — keep your phone in a')), metric('pocket', 'pocket', { tail: ',' }), frame('not a bag, and I’ll pick it up.')),
        line(frame(open('no walking data coming through. A phone in your')), metric('pocket', 'pocket', { tail: '' }), frame('on flat ground is what it needs.')),
        line(frame(open('nothing to read yet — the sensors want the phone in a')), metric('pocket', 'pocket', { tail: '' }), frame('while you walk.')),
      ]);

    // --- most days ----------------------------------------------------------
    case 'quiet':
    default: {
      const moves = day != null ? movesFor(day) : [];
      const first = moves[0] ?? 'heel raises';
      switch (quietTopic(cursor)) {
        case 'session':
          return line(frame(open('today is')), metric('session', first, { tail: '' }), frame('— the one that carries this plan.'));
        case 'progress':
          return line(frame(open('day')), metric('streak', `${cursor + 1} of 56`, { tail: '.' }), frame('You’re past the hard part of starting.'));
        case 'load':
          return bigStepDay(health)
            ? line(frame(open('a big day on your feet yesterday —')), metric('feet', `${count(health.stepsYesterday)} steps`, { tail: '.' }), frame('Context, not a verdict.'))
            : line(frame(open('a')), metric('feet', 'lighter day', { tail: '' }), frame('on your feet yesterday. Good day to load a little.'));
        case 'shoes':
          return line(frame(open('a thought on shoes: a')), metric('level', 'firmer heel', { tail: '' }), frame('and a bit more drop takes load off the arch.'));
        case 'cadence':
          return line(frame(open('if you run today, hold your cadence about')), metric('up', '5% above normal', { tail: '.' }), frame('Shorter steps, less heel load.'));
        case 'horizon':
        default:
          return line(frame(open('most of the change in this shows up')), metric('window', 'early', { tail: '.' }), frame('You’re in that window.'));
      }
    }
  }
}
