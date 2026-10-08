import type { HomeCopy } from '@/components/Home';
import { PAIN_GOAL_MAX, PROGRAM } from '@/lib/site';

/*
 * German home page copy, translated from the `en` entry of `COPY` in
 * `components/Home.tsx` (2026-10-08). Informal «du», like the German chrome
 * strings in `lib/i18n.ts`. Every number is read from `PROGRAM`, as in English.
 * The program and evidence pages exist only in English, so their links say
 * «(auf Englisch)».
 */

const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;
const { testEveryDays, testEveryDaysAfterGoal, painFreeDays, retestTests, retestMinutes } = PROGRAM;

export const HOME_DE: HomeCopy = {
  meta: {
    title: 'Walkito: Übungen bei Fersenschmerzen und Plattfuß',
    description:
      'Walkito ist ein persönlicher Übungsplan bei Schmerzen in Ferse, Fuß und Bein, der sich jeden Tag daran anpasst, wie sich deine Füße anfühlen.',
  },
  h1a: 'Schon alles ausprobiert?',
  h1b: 'Probier einen Plan, der zu deinen Füßen passt.',
  lead: 'Walkito ist ein persönlicher Übungsplan bei Schmerzen in Ferse, Fuß und Bein, der sich jeden Tag daran anpasst, wie sich deine Füße anfühlen.',
  small: `${MIN_A}, ${MIN_B} oder ${MIN_C}\u00A0Minuten am Tag, zu Hause.`,
  chips: [
    'Schlechter Morgen? Heute wird es leichter',
    `Ein Test alle ${testEveryDays}\u00A0Tage`,
    `${MIN_A}, ${MIN_B} oder ${MIN_C}\u00A0Min.`,
  ],
  alt: {
    heroLeft: 'Walkito nach einem schlechten Morgen: Die heutige Einheit wird leichter',
    heroCenter: 'Der Heute-Bildschirm von Walkito: eine Begrüßung, der Morgen-Check-in und die heutige Einheit',
    heroRight: 'Walkito spielt ein Übungsvideo mit Hinweis ab',
    checkin: 'Walkito: Nach einem schmerzhaften Morgen gibt es heute drei Minuten Übungen im Sitzen',
    where: 'Walkito: Wo tut es meistens weh? Ferse und Fußgewölbe sind an einem Bein markiert',
    goal: 'Walkito: Ziel auswählen, gewählt ist „den ganzen Tag auf den Beinen bleiben“',
    week: 'Walkito: der Plan für diese Woche, Montag bis Sonntag mit Ruhetagen, und die nächste Woche',
    exercise: 'Walkito: eine Dehnung der Plantarfaszie als Video mit Timer',
    quick: 'Walkito: kurze Routinen für akute Schmerzen, vor und nach dem Laufen, bei der Arbeit und vor dem ersten Schritt',
    tests: 'Walkito: Testergebnisse, Gewölbe halten 11\u00A0Sekunden länger und 4 Wadenheben mehr, links 19 und rechts 22',
  },
  storyH2: 'Es ist nicht deine Schuld.',
  storyP:
    'Einlagen, neue Schuhe, eine Nachtschiene, fünfzig Videos, die alle etwas anderes sagen. Damit fühlen sich deine Füße vielleicht gestützt an, aber nichts davon trainiert den Fuß. Was fehlt, ist ein klarer Plan: welche Übungen, wie viele, in welcher Reihenfolge und was du an einem schlechten Tag machst.',
  whoH2: 'Ist das was für mich?',
  who: {
    heel: {
      title: 'Fersenschmerzen und Plantarfasziitis',
      text: 'Stechende erste Schritte am Morgen, Schmerzen nach dem Sitzen oder nach einem langen Spaziergang.',
      goal: 'Ziel: schmerzfreie Morgen',
    },
    flat: {
      title: 'Plattfuß',
      text: 'Müde, schmerzende Fußgewölbe und Füße, die nach innen knicken.',
      goal: `Ziel: Gewölbe ${archHoldSeconds}\u00A0Sekunden halten`,
    },
    allday: {
      title: 'Den ganzen Tag auf den Beinen',
      text: 'Pflege, Einzelhandel, Lager, Gastronomie. Füße, die am Ende der Schicht wehtun.',
      goal: null,
    },
    run: {
      title: 'Läufer und Sportler',
      text: 'Schmerzen an Ferse, Achillessehne oder Schienbein, die beim Training immer wiederkommen.',
      goal: `Ziel: ${calfRaises}\u00A0Wadenheben auf einem Bein`,
    },
  },
  whoMore: 'Zum Ratgeber',
  whoMoreEn: 'Lesen (auf Englisch)',
  adjustH2: 'Er passt sich deinem Morgen an.',
  adjustP:
    'Jeden Morgen trägst du mit einem Tippen ein, wie sich deine Füße anfühlen. An einem schlechten Morgen wird die heutige Einheit kürzer und leichter. Nach einem langen Tag auf den Beinen fallen die belastenden Übungen weg. An einem guten Tag wird es nie schneller.',
  answersH2: 'Ein Plan aus deinen Antworten.',
  answersP:
    'Sag Walkito, wo es wehtut, auf welcher Seite, was du machst und wozu du zurückwillst. Daraus baut Walkito deinen Plan, Woche für Woche, statt einer Routine für alle.',
  how: [
    {
      title: 'Woche für Woche, rund um ein Ziel',
      text: `Jede Woche dreht sich um ein Ziel, das du messen kannst: morgendlicher Fersenschmerz bei ${PAIN_GOAL_MAX}/10 oder weniger an ${painFreeDays}\u00A0Tagen am Stück, das Gewölbe ${archHoldSeconds}\u00A0Sekunden halten, ${calfRaises}\u00A0Wadenheben auf einem Bein, ${balanceSeconds}\u00A0Sekunden Gleichgewicht auf einem Bein oder links und rechts weniger als ${gapPercent}\u00A0% auseinander. Erreichst du eins, geht es in die Erhaltung über und das nächste rückt nach.`,
      link: 'So funktioniert der Plan (auf Englisch)',
    },
    {
      title: `Ein Test alle ${testEveryDays}\u00A0Tage, dann alle ${testEveryDaysAfterGoal}`,
      text: `${retestTests} körperliche Tests in etwa ${retestMinutes}\u00A0Minuten: Wadenheben bis zur Erschöpfung, Gewölbe halten und Gleichgewicht auf einem Bein, beide Seiten. Alle ${testEveryDays}\u00A0Tage, bis du dein erstes Ziel erreichst, danach alle ${testEveryDaysAfterGoal}. Fortschritt wird gemessen, nicht danach geraten, wie sich die Woche angefühlt hat.`,
      link: 'Was die Tests messen (auf Englisch)',
    },
    {
      title: 'Auf Basis veröffentlichter Forschung',
      text: 'Die klinische Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A und Krafttraining mit B. Eine randomisierte Studie fand, dass Krafttraining mit hoher Last Schmerzen und Funktion schneller verbesserte als Dehnen.',
      link: 'Zur Studienlage (auf Englisch)',
    },
  ],
  insideH2: 'In der App',
  inside: {
    week: 'Deine Woche, mit Ruhetagen',
    video: 'Ein Video zu jeder Übung',
    quick: 'Kurze Routinen für jeden Moment',
    tests: 'Deine Tests, links und rechts',
  },
  faqH2: 'Fragen',
  faq: [
    {
      q: 'Wann merke ich einen Unterschied?',
      a: `Das hängt vom Menschen und vom Schmerz ab. Der Plan entsteht Woche für Woche rund um ein Ziel, das du messen kannst, und ein Test alle ${testEveryDays}\u00A0Tage zeigt dir, was sich wirklich verändert.`,
    },
    {
      q: 'Brauche ich Ausrüstung?',
      a: 'Nein. Für manche Übungen brauchst du ein Handtuch, eine Stufe oder Treppe, ein Widerstandsband, ein Kissen oder einen Massageball, und Walkito fragt, was du hast. Alles, wofür dir etwas fehlt, bleibt aus deinem Plan raus.',
    },
    {
      q: 'Ist es für Plattfüße geeignet?',
      a: 'Ja, für flexible Plattfüße. Wenn sich ein Gewölbe im Erwachsenenalter plötzlich abgeflacht hat, geh zuerst zu einer medizinischen Fachperson.',
    },
    {
      q: 'Ist das medizinischer Rat?',
      a: 'Nein. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    },
    { q: 'In welchen Sprachen gibt es die App?', a: 'Auf Englisch, Russisch und Spanisch.' },
  ],
  finalH2: 'Deine Füße, dein Plan.',
};
