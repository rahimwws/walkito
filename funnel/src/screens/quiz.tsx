import { useState, type ReactNode } from 'react';

import bedMorning from '../assets/photos/bed-morning.jpg';
import chairWindow from '../assets/photos/chair-window.jpg';
import hero from '../assets/photos/hero-socks-morning.jpg';
import { DEFAULT_VARIANT, money, PRICE_VARIANTS, url, yearlyPerMonth } from '../config';
import { moveOf } from '../engine/plan';
import { adOf, anchorsFor, FIRST_STEP_MOVES, paidFor, PROGRESS, STEP, WAKE_TIMES, wakeOf, type Ad } from '../flow';
import { meta, track } from '../lib/analytics';
import { go } from '../router';
import { answer, useFunnel, type Answers } from '../state';
import { ADVANCE_MS, Choice, Cta, MultiChoice, Page, type IconName } from '../ui';

type Option<V> = { value: V; label: string; icon?: IconName; hint?: string; tag?: string };

/** One question, one tap: the answer is saved and the next screen follows. */
function Single<K extends keyof Answers>({
  path,
  field,
  title,
  sub,
  options,
  next,
}: {
  path: string;
  field: K;
  title: string;
  sub?: ReactNode;
  options: ReadonlyArray<Option<NonNullable<Answers[K]>>>;
  next: string | ((value: NonNullable<Answers[K]>) => string | null);
}) {
  const s = useFunnel();
  const [picked, setPicked] = useState<Answers[K] | undefined>(s.answers[field]);
  const pick = (value: NonNullable<Answers[K]>) => {
    setPicked(value);
    answer({ [field]: value } as Partial<Answers>);
    track('step_completed', { step: path });
    const target = typeof next === 'string' ? next : next(value);
    if (target != null) setTimeout(() => go(target), ADVANCE_MS);
  };
  return (
    <Page progress={PROGRESS[path]}>
      <div className="stack gap-s">
        <h2>{title}</h2>
        {sub != null && <p className="small">{sub}</p>}
      </div>
      <div className="stack">
        {options.map((o) => (
          <Choice key={String(o.value)} selected={picked === o.value} icon={o.icon} hint={o.hint} tag={o.tag} onClick={() => pick(o.value)}>
            {o.label}
          </Choice>
        ))}
      </div>
    </Page>
  );
}

const AGES: ReadonlyArray<Option<NonNullable<Answers['age']>>> = [
  { value: 'under50', label: 'Under 50' },
  { value: '50-59', label: '50–59' },
  { value: '60-69', label: '60–69' },
  { value: '70+', label: '70 or older' },
];

type Entry = {
  title: ReactNode;
  sub: string;
  /** The photograph, and the part of it the band keeps. Left out: Ad 3's receipt. */
  photo?: { src: string; at: string };
};

/**
 * The first screen, one per ad: it starts with the words and the picture the
 * ad she tapped ended on. The question under it is the same for everyone.
 */
const ENTRY: Readonly<Record<Ad | 'default', Entry>> = {
  ad2_v1morning: {
    title: (
      <>
        That first step out of bed. <em>You know the one.</em>
      </>
    ),
    sub: '2 minutes on the edge of the bed, before your feet touch the floor.',
    photo: { src: bedMorning, at: '50% 88%' },
  },
  ad3_receipt: {
    title: (
      <>
        Insoles. Splints. New shoes. <em>And the first step still hurts?</em>
      </>
    ),
    sub: 'You didn’t do anything wrong. Nobody showed you how to make your feet stronger. Start here, sitting down.',
  },
  ad1_plancard: {
    title: (
      <>
        Your 7-day foot plan, <em>sitting down</em>.
      </>
    ),
    sub: 'A few minutes a day from a chair. Answer a few questions and we’ll build your first week.',
    photo: { src: chairWindow, at: '50% 72%' },
  },
  default: {
    title: (
      <>
        Foot exercises you do <em>sitting down</em>.
      </>
    ),
    sub: 'A few minutes a day. Answer a few questions and we’ll build your plan.',
    photo: { src: hero, at: '50% 60%' },
  },
};

/** Ad 3's receipt, carried on: three things bought and crossed out, and the one line still open. */
function Receipt() {
  return (
    <ul className="receipt">
      {['Insoles', 'Night splint', 'New shoes'].map((bought) => (
        <li key={bought}>
          <s>{bought}</s>
          <span>tried</span>
        </li>
      ))}
      <li>
        Training your feet
        <span>not yet</span>
      </li>
    </ul>
  );
}

/**
 * Ad 2 promised a move to do before standing up, so its visitors see that move
 * first: the clip, its name and how to do it. Then the question.
 */
function BedMove() {
  const move = moveOf({ id: FIRST_STEP_MOVES[0] });
  return (
    <div className="card move-mini">
      {move.clip != null ? (
        <video src={move.clip} poster={move.poster} muted playsInline loop autoPlay preload="metadata" aria-label={`${move.title}: ${move.cue}`} />
      ) : (
        <img src={move.poster} alt="" />
      )}
      <div>
        <div style={{ fontWeight: 700 }}>Before you stand up: {move.title.toLowerCase()}</div>
        <div className="caption">{move.cue}</div>
      </div>
    </div>
  );
}

/**
 * The first screen is the first question. v8: the ad's promise in one line,
 * then the four big age buttons straight away, so it reads as "tap here", not
 * as a page to read. Ad 2's visitors see the bed move it promised before the
 * question. The photo, the receipt and the small print sit under the buttons.
 * Answering is the quiz's first real step, and it is what Meta learns from
 * (View content), because the price page is too far down to teach it anything.
 */
export function Age() {
  const s = useFunnel();
  const ad = adOf(s);
  const entry = ENTRY[ad ?? 'default'];
  const price = PRICE_VARIANTS[s.variant] ?? PRICE_VARIANTS[DEFAULT_VARIANT]!;
  const pick = (value: NonNullable<Answers['age']>) => {
    const first = s.answers.age == null;
    answer({ age: value });
    track('step_completed', { step: STEP.age });
    // Once per visitor: she started the quiz. Never which age she picked.
    if (first) meta('ViewContent', `start-${crypto.randomUUID()}`);
    setTimeout(() => go(STEP.focus), ADVANCE_MS);
  };
  return (
    <Page footer>
      <h1 className="entry-title">{entry.title}</h1>
      {ad === 'ad2_v1morning' && <BedMove />}
      <div className="stack gap-s">
        <h3>First, how old are you?</h3>
        <div className="grid2 big">
          {AGES.map((o) => (
            <Choice key={o.value} selected={s.answers.age === o.value} onClick={() => pick(o.value)}>
              {o.label}
            </Choice>
          ))}
        </div>
        <p className="caption">We ask so your plan starts at the right pace.</p>
      </div>
      <div className="stack gap-s">
        <p className="small">{entry.sub}</p>
        {ad === 'ad2_v1morning' ? null : entry.photo != null ? (
          <img className="photo small-photo" src={entry.photo.src} alt="" style={{ objectPosition: entry.photo.at }} />
        ) : (
          <Receipt />
        )}
      </div>
      <div className="stack gap-s fine-print">
        {ad === 'ad3_receipt' ? (
          // Her ad named a price, so this screen does too.
          <p className="caption">
            The quiz is free. The plan is {money(price.yearly.price)} a year (that’s {money(yearlyPerMonth(price))} a month), or{' '}
            {money(price.monthly.intro)} for the first month for new members and {money(price.monthly.price)} a month after that. You’ll see everything
            before you decide.
          </p>
        ) : (
          <p className="caption">The quiz is free. The plan is a paid subscription, and you’ll see the price before you decide.</p>
        )}
        <p className="caption">
          By choosing your age you agree to our <a href={url('/terms')}>Terms</a> and <a href={url('/privacy')}>Privacy Policy</a>.
        </p>
      </div>
    </Page>
  );
}

export function Focus() {
  return (
    <Single
      path={STEP.focus}
      field="focus"
      title="What bothers your feet most?"
      options={[
        { value: 'heel', label: 'My heel or the bottom of my foot', icon: 'foot' },
        { value: 'flat', label: 'Flat or tired arches', icon: 'sandal' },
        { value: 'allday', label: 'Sore after a day on my feet', icon: 'briefcase' },
        { value: 'moving', label: 'Stiff feet or ankles', icon: 'runningShoe' },
        { value: 'steady', label: 'Feeling unsteady on my feet', icon: 'balance' },
      ]}
      next={STEP.when}
    />
  );
}

export function When() {
  return (
    <Single
      path={STEP.when}
      field="when"
      title="When do you notice it most?"
      options={[
        { value: 'morning', label: 'First steps in the morning', icon: 'sunrise' },
        { value: 'sitting', label: 'Standing up after sitting', icon: 'couch' },
        { value: 'evening', label: 'By the evening', icon: 'moon' },
        { value: 'running', label: 'During or after a walk or run', icon: 'runningShoe' },
        { value: 'allday', label: 'All day', icon: 'sun' },
        { value: 'varies', label: 'It varies', icon: 'leafInWind' },
      ]}
      next={STEP.heardWhen}
    />
  );
}

/**
 * When she gets up, asked where it is used: right before the routine it sets.
 * One tap on an hour, or an exact time for anyone who wants one.
 */
export function Wake() {
  const s = useFunnel();
  const [picked, setPicked] = useState(s.answers.wake);
  const [exact, setExact] = useState(false);
  const [time, setTime] = useState(wakeOf(s.answers));
  const save = (wake: string) => {
    setPicked(wake);
    answer({ wake });
    track('wake_time_set');
    track('step_completed', { step: STEP.wake });
  };
  return (
    <Page progress={PROGRESS[STEP.wake]}>
      <div className="stack gap-s">
        <h2>What time do you usually get up?</h2>
        <p className="small">Your plan has a 2-minute routine for before your first steps. We’ll set it for this time.</p>
      </div>
      {exact ? (
        <>
          <input
            className="field time"
            type="time"
            aria-label="Usual wake-up time"
            autoFocus
            value={time}
            onChange={(e) => e.target.value !== '' && setTime(e.target.value)}
          />
          <Cta>
            <button className="btn" type="button" onClick={() => (save(time), go(STEP.routine))}>
              Continue
            </button>
          </Cta>
        </>
      ) : (
        <div className="stack">
          {WAKE_TIMES.map((o) => (
            <Choice key={o.value} selected={picked === o.value} onClick={() => (save(o.value), setTimeout(() => go(STEP.routine), ADVANCE_MS))}>
              {o.label}
            </Choice>
          ))}
          <button className="btn quiet" type="button" onClick={() => setExact(true)}>
            Pick an exact time
          </button>
        </div>
      )}
    </Page>
  );
}

export function Since() {
  return (
    <Single
      path={STEP.since}
      field="since"
      title="How long has this been going on?"
      options={[
        { value: 'new', label: 'Less than 3 months' },
        { value: 'months', label: '3 to 12 months' },
        { value: 'year', label: '1 to 3 years' },
        { value: 'years', label: 'More than 3 years' },
      ]}
      next={STEP.tried}
    />
  );
}

/**
 * In her words, the things she names most often first. `shoes` and `shot` are
 * new in v7; `insoles` was "Insoles or new shoes" until then, so what is said
 * back about it never mentions shoes (words.ts).
 */
const TRIED: ReadonlyArray<Option<string>> = [
  { value: 'shoes', label: 'Special shoes or slippers' },
  { value: 'insoles', label: 'Insoles or orthotics' },
  { value: 'stretching', label: 'Stretching or exercises on my own' },
  { value: 'roller', label: 'A ball, a roller or massage' },
  { value: 'pt', label: 'A doctor, a podiatrist or physical therapy' },
  { value: 'shot', label: 'A shot in my foot' },
  { value: 'splint', label: 'A night splint' },
  { value: 'videos', label: 'Videos online' },
  { value: 'nothing', label: 'Nothing yet' },
];

export function Tried() {
  const s = useFunnel();
  const [picked, setPicked] = useState<string[]>(s.answers.tried ?? []);
  const toggle = (value: string) =>
    setPicked((now) => {
      if (value === 'nothing') return now.includes('nothing') ? [] : ['nothing'];
      const rest = now.filter((v) => v !== 'nothing');
      return rest.includes(value) ? rest.filter((v) => v !== value) : [...rest, value];
    });
  return (
    <Page progress={PROGRESS[STEP.tried]}>
      <div className="stack gap-s">
        <h2>What have you already tried?</h2>
        <p className="small">Choose all that apply.</p>
      </div>
      <div className="stack">
        {TRIED.map((o) => (
          <MultiChoice key={o.value} checked={picked.includes(o.value)} onToggle={() => toggle(o.value)}>
            {o.label}
          </MultiChoice>
        ))}
      </div>
      <Cta>
        <button
          className="btn"
          type="button"
          disabled={picked.length === 0}
          onClick={() => {
            answer({ tried: picked });
            track('step_completed', { step: STEP.tried });
            // What it all cost is only asked of someone who paid for some of it.
            go(paidFor(picked) ? STEP.spent : STEP.heardTried);
          }}
        >
          Continue
        </button>
      </Cta>
    </Page>
  );
}

/**
 * What it has cost her so far, in her own rough figure. Asked only after she
 * ticked something that costs money. She can decline to add it up.
 */
export function Spent() {
  return (
    <Single
      path={STEP.spent}
      field="spent"
      title="Roughly how much have you spent on your feet so far?"
      sub="Shoes, insoles, visits, gadgets. A rough guess is fine."
      options={[
        { value: 'under100', label: 'Under $100' },
        { value: '100-500', label: '$100 to $500' },
        { value: '500-1000', label: '$500 to $1,000' },
        { value: 'over1000', label: 'More than $1,000' },
        { value: 'unsure', label: 'I’d rather not add it up' },
      ]}
      next={STEP.heardTried}
    />
  );
}

/** The moment in her day that her minutes follow: something she already does, the likeliest for her scene first. */
export function AnchorStep() {
  const a = useFunnel().answers;
  return (
    <Single
      path={STEP.anchor}
      field="anchor"
      title={`When will you do your ${a.minutes ?? 5} minutes?`}
      sub="Pick something you already do every day. New habits stick better when they follow an old one."
      options={anchorsFor(a)}
      next={STEP.commit}
    />
  );
}

export function Day() {
  return (
    <Single
      path={STEP.day}
      field="day"
      title="What does a usual day look like?"
      options={[
        { value: 'sit8', label: 'Mostly sitting', icon: 'couch' },
        { value: 'sit4', label: 'Some sitting, some standing', icon: 'briefcase' },
        { value: 'feet', label: 'On my feet most of the day', icon: 'leg' },
        { value: 'run_short', label: 'I run regularly', icon: 'runningShoe' },
      ]}
      next={STEP.start}
    />
  );
}

/** The ad that promises a seated week (Ad 1, "7-day seated foot plan") gets one: no standing start. */
const SEATED_ADS = ['ad1_plancard'];

export function Start() {
  const s = useFunnel();
  const seatedAd = SEATED_ADS.includes(s.utm?.utm_content ?? '');
  return (
    <Single
      path={STEP.start}
      field="start"
      title="Where would you like to do your exercises?"
      options={[
        { value: 'chair', label: 'In a chair', icon: 'couch' },
        { value: 'bed', label: 'On the edge of the bed', icon: 'bed' },
        ...(seatedAd ? [] : [{ value: 'standing' as const, label: 'Standing, with a hand on a counter', icon: 'balance' as const }]),
      ]}
      next={STEP.safety}
    />
  );
}

export function Safety() {
  return (
    <Single
      path={STEP.safety}
      field="safety"
      title="Anything we should plan around?"
      sub="We ask so your first week is safe for you. Choose the one that matters most."
      options={[
        { value: 'surgery', label: 'Recent surgery or injury' },
        { value: 'numb', label: 'Numbness or swelling' },
        { value: 'dizzy', label: 'Dizziness or a fall this year' },
        { value: 'aid', label: 'I use a cane or walker' },
        { value: 'none', label: 'None of these' },
      ]}
      next={(value) => (value === 'none' ? STEP.minutes : '/s/7/note')}
    />
  );
}

export function SafetyNote() {
  return (
    <Page progress={PROGRESS[STEP.safety]}>
      <div className="panel stack">
        <h2>Thanks for telling us</h2>
        <p>We’ll keep your first week seated. Please check with your doctor or physical therapist before you start.</p>
      </div>
      <Cta>
        <button className="btn" type="button" onClick={() => go(STEP.minutes)}>
          Continue
        </button>
      </Cta>
    </Page>
  );
}

export function Minutes() {
  return (
    <Single
      path={STEP.minutes}
      field="minutes"
      title="How much time can you give your feet each day?"
      options={[
        { value: 3, label: '3 minutes', hint: 'A gentle start', icon: 'feather' },
        { value: 5, label: '5 minutes', icon: 'stopwatch', tag: 'Suggested' },
        { value: 10, label: '10 minutes', hint: 'A fuller session', icon: 'strength' },
      ]}
      next={STEP.summary}
    />
  );
}
