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
  alt: {
    heroCenter: 'Der Heute-Bildschirm von Walkito: eine Begrüßung, der Morgen-Check-in und die heutige Einheit',
  },
  storyH2: 'Es ist nicht deine Schuld.',
  storyP:
    'Einlagen, neue Schuhe, fünfzig Videos, die sich alle widersprechen. Nichts davon trainiert den Fuß. Was fehlt, ist ein klarer Plan, für gute und für schlechte Tage.',
  storyChipsAfter: ['widersprechen.', 'Fuß.', 'Plan,', 'Tage.'],
  storyAccent: 'ein klarer Plan,',
  whoH2: 'Ist das was für mich?',
  whoKicker: 'Für dich',
  whoLead:
    'Wähl, was am besten zu dir passt. Der Plan fängt dort an und passt sich jeden Tag daran an, wie sich deine Füße anfühlen.',
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
      goal: `Ziel: ${calfRaises}-mal einbeiniges Fersenheben`,
    },
  },
  whoMore: 'Zum Ratgeber',
  whoMoreEn: 'Lesen (auf Englisch)',
  how: [
    {
      title: 'Woche für Woche, rund um ein Ziel',
      text: `Jede Woche dreht sich um ein Ziel, das du messen kannst: morgendlicher Fersenschmerz bei ${PAIN_GOAL_MAX}/10 oder weniger an ${painFreeDays}\u00A0Tagen am Stück, das Gewölbe ${archHoldSeconds}\u00A0Sekunden halten, ${calfRaises}-mal einbeiniges Fersenheben, ${balanceSeconds}\u00A0Sekunden Gleichgewicht auf einem Bein oder links und rechts weniger als ${gapPercent}\u00A0% auseinander. Erreichst du eins, geht es in die Erhaltung über und das nächste rückt nach.`,
      link: 'So funktioniert der Plan (auf Englisch)',
    },
    {
      title: `Ein Test alle ${testEveryDays}\u00A0Tage, dann alle ${testEveryDaysAfterGoal}`,
      text: `${retestTests} körperliche Tests in etwa ${retestMinutes}\u00A0Minuten: Wadenheben bis zur Erschöpfung, Gewölbe halten und Gleichgewicht auf einem Bein, beide Seiten. Alle ${testEveryDays}\u00A0Tage, bis du dein erstes Ziel erreichst, danach alle ${testEveryDaysAfterGoal}. Fortschritt wird gemessen, nicht danach geraten, wie sich die Woche angefühlt hat.`,
      link: 'Was die Tests messen (auf Englisch)',
    },
    {
      title: 'Ausgewählt anhand veröffentlichter Forschung',
      text: 'Übungen, ausgewählt anhand veröffentlichter Forschung und Leitlinien. Walkito selbst wurde nicht in einer Studie getestet.',
      link: 'Zur Studienlage (auf Englisch)',
    },
  ],
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
};
