import { useEffect, type ComponentType } from 'react';

import { missingStep, RETIRED, STEP } from './flow';
import { markScreen, track } from './lib/analytics';
import { go, usePath } from './router';
import { Cancel, Me } from './screens/account';
import { Code, Email } from './screens/email';
import { HealthData, Privacy, Terms } from './screens/legal';
import { Plan } from './screens/plan';
import { Price } from './screens/price';
import { Age, AnchorStep, Day, Focus, Minutes, Safety, SafetyNote, Since, Spent, Start, Tried, Wake, When } from './screens/quiz';
import { StartDay1 } from './screens/start';
import { Commit, Goals, HeardTried, HeardWhen, Life, Name, Pattern, Summary } from './screens/story';
import { After, Building, FeltAnswer, Routine, TryMove } from './screens/try-it';
import { useFunnel } from './state';

export const ROUTES: Readonly<Record<string, ComponentType>> = {
  '/': Age,
  [STEP.age]: Age,
  [STEP.focus]: Focus,
  [STEP.when]: When,
  [STEP.heardWhen]: HeardWhen,
  [STEP.since]: Since,
  [STEP.tried]: Tried,
  [STEP.spent]: Spent,
  [STEP.heardTried]: HeardTried,
  [STEP.day]: Day,
  [STEP.start]: Start,
  [STEP.safety]: Safety,
  '/s/7/note': SafetyNote,
  [STEP.minutes]: Minutes,
  [STEP.summary]: Summary,
  [STEP.life]: Life,
  [STEP.proof]: Pattern,
  [STEP.goals]: Goals,
  [STEP.move]: TryMove,
  [STEP.after]: After,
  [STEP.felt]: FeltAnswer,
  [STEP.wake]: Wake,
  [STEP.routine]: Routine,
  [STEP.anchor]: AnchorStep,
  [STEP.commit]: Commit,
  [STEP.building]: Building,
  [STEP.name]: Name,
  [STEP.plan]: Plan,
  [STEP.email]: Email,
  [STEP.code]: Code,
  [STEP.price]: Price,
  [STEP.start1]: StartDay1,
  [STEP.me]: Me,
  [STEP.cancel]: Cancel,
  '/terms': Terms,
  '/privacy': Privacy,
  '/health-data': HealthData,
};

export function App() {
  const path = usePath();
  const s = useFunnel();
  const redirect = RETIRED[path] ?? missingStep(path, s);
  useEffect(() => {
    if (redirect != null) go(redirect, { replace: true });
  }, [redirect]);
  useEffect(() => {
    if (redirect == null) {
      const step = ROUTES[path] != null ? path : 'unknown';
      track('step_viewed', { step });
      markScreen(step);
    }
  }, [path, redirect]);
  const Screen = ROUTES[path] ?? Age;
  if (redirect != null) return null;
  return <Screen />;
}
