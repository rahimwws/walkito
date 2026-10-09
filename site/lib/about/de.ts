import { PAIN_GOAL_MAX, PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** `3, 5 oder 7`: the plan's options as a German list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} oder ${options[options.length - 1]}`;
}

/*
 * Translated from `en.ts` (2026-10-08). Informal «du», like the German chrome
 * in `lib/i18n.ts`. Nothing here is invented: no reviewer is named because
 * none has reviewed the guides yet. When one does, their name, credentials and
 * what they checked replace that paragraph in every language. Pages that exist
 * only in English keep their English path and say «(auf Englisch)».
 */
export const ABOUT_DE: About = {
  lang: 'de',
  title: 'Über Walkito: So entstehen unsere Ratgeber',
  description:
    'Was Walkito ist, wie die Ratgeber zu Fersenschmerzen und Plattfuß geschrieben und belegt werden, was Walkito nicht tut und wie du einen Fehler meldest.',
  h1: 'Über Walkito',
  lede: 'Walkito ist ein persönlicher Übungsplan bei Schmerzen in Ferse, Fuß und Bein, der sich jeden Tag daran anpasst, wie sich deine Füße anfühlen. Diese Seite erklärt, wie die Ratgeber auf dieser Website geschrieben werden und woher ihre Zahlen kommen. Sie sagt auch, was Walkito nicht tut und wie du uns Bescheid gibst, wenn etwas nicht stimmt.',
  sections: [
    {
      h2: 'Was ist Walkito?',
      paragraphs: [
        `Walkito ist eine iPhone-App, die deinen Übungsplan Woche für Woche rund um Ziele baut, die du messen kannst. Es gibt fünf Ziele: schmerzfreie Morgen (Morgenschmerz bei ${PAIN_GOAL_MAX}/10 oder weniger an ${PROGRAM.painFreeDays}\u00A0Tagen am Stück), das Gewölbe ${PROGRAM.goals.archHoldSeconds}\u00A0Sekunden halten, ${PROGRAM.goals.calfRaises}-mal einbeiniges Fersenheben, ${PROGRAM.goals.balanceSeconds}\u00A0Sekunden Gleichgewicht auf einem Bein und weniger als ${PROGRAM.goals.gapPercent}\u00A0% Unterschied zwischen deiner linken und rechten Seite. Du startest mit bis zu drei davon. Wenn etwas wehtut, kommt der Schmerz zuerst.`,
        `Du wählst ${either(PROGRAM.daysPerWeek)} Trainingstage pro Woche und Einheiten von ${either(PROGRAM.sessionMinutes)}\u00A0Minuten. Die Einheit jedes Tages passt sich daran an, wie dein Morgen war. Alle ${PROGRAM.testEveryDays}\u00A0Tage zeigt ein kurzer Test, ob sich deine Zahlen bewegen. Sobald du dein erstes Ziel erreichst, kommt der Test alle ${PROGRAM.testEveryDaysAfterGoal}\u00A0Tage.`,
        'Der Plan hat keine feste Dauer. Wenn du ein Ziel erreichst, geht es in geringerer Dosis in die Erhaltung über, und das nächste Ziel rückt nach. Das geht so lange weiter, wie du Walkito nutzt. [So funktioniert der Plan](/program/) (auf Englisch).',
        'Walkito gibt es auf Englisch, Russisch, Spanisch, Portugiesisch, Französisch, Italienisch und Deutsch.',
      ],
    },
    {
      h2: 'Wie wir recherchieren',
      id: 'how-we-research',
      paragraphs: [
        'Walkito Research schreibt die Ratgeber auf dieser Website: [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/), [Übungen bei Plattfuß](/de/plattfuss-uebungen/), [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) und [die Seite zur Studienlage](/science/) (auf Englisch). Wir stützen sie auf klinische Leitlinien, randomisierte Studien und systematische Übersichtsarbeiten. Blogbeiträge, Foren oder Zusammenfassungen anderer Websites nutzen wir nicht als Quelle. Wenn eine Zusammenfassung eine Studie zitiert, gehen wir zur Studie.',
        'Wir lesen die ganze Arbeit, nicht nur die Zusammenfassung, bevor eine Zahl daraus auf eine Seite kommt. Jede Dosis, jede Bewertung und jede Zahl ist mit der Studie dahinter verlinkt, sodass du sie öffnen und prüfen kannst.',
        'Übungen und Aussagen tragen eines von drei Labels zur Studienlage. **Stark** heißt, dass eine klinische Leitlinie sie hoch bewertet oder mehrere gute Studien übereinstimmen. **Mittel** heißt, dass mindestens eine gut angelegte Studie sie stützt. **Vorläufig** heißt, dass die Forschung klein ist oder gerade erst anfängt: einen Versuch wert, und das Label kann sich ändern, wenn mehr dazu erscheint. Eine verbreitete Regel, die eine Studie getestet und nicht bestätigt hat, ist als **Nicht belegt** markiert.',
        'Walkito hat keine Sponsoren, keine Affiliate-Links und keine bezahlten Platzierungen. Nichts steht auf einer Seite, weil jemand dafür bezahlt hat. Wir prüfen eine Seite erneut, wenn neue Forschung zu ihrem Thema erscheint. Jeder Ratgeber folgt fünf Regeln:',
      ],
      bullets: [
        '**Jede Zahl lässt sich auf eine Primärquelle zurückführen.** Das heißt eine randomisierte Studie, eine Metaanalyse oder eine klinische Leitlinie. Die Quelle steht verlinkt auf der Seite, die sie nutzt. Wenn wir eine Zahl auf keine solche Quelle zurückführen können, kommt sie nicht auf die Website. Aus diesem Grund haben wir schon Sätze gestrichen.',
        '**Die klinische Leitlinie von 2023 zu Fersenschmerzen ist der Bezugspunkt.** Sie stammt aus dem Journal of Orthopaedic & Sports Physical Therapy. Sie bewertet jede Maßnahme danach, wie stark ihre Belege sind, auch die, von denen sie abrät.',
        '**Einschränkungen gehören zu den Zahlen.** Ein Ergebnis nach drei Monaten steht immer zusammen mit dem, was nach zwölf Monaten passiert ist. Jede Aussage zur Gewölbeform sagt, an welchen Füßen sie gemessen wurde.',
        '**Die Dosen sind die Startdosen von Walkito.** Sie zeigen, wo die Übungen von Walkito beginnen. Sie sind keine Verordnung für dich.',
        '**Kein Heilversprechen.** Die Seiten sagen, was die Forschung gefunden hat und wo ihre Belege aufhören.',
      ],
    },
    {
      h2: 'Was macht Walkito nicht?',
      paragraphs: [
        'Walkito stellt keine Diagnose, ist keine Behandlung und ersetzt keine medizinische Fachperson. Walkito kann dir nicht sagen, was deinen Schmerz verursacht. Geh zuerst zu einer medizinischen Fachperson, wenn:',
      ],
      // The guides' list (`lib/guides/de.ts`), word for word, plus the arch.
      bullets: [
        'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
        'du den Fuß nicht belasten kannst oder hinkst',
        'Taubheit, Kribbeln, Brennen, eine Schwellung oder Wärme dazukommen',
        'die Ferse gerötet ist oder du Fieber hast oder dich krank fühlst',
        'der Schmerz dich nachts weckt',
        'er stechend ist oder schlimmer wird, obwohl du die Belastung reduziert hast',
        'es wehtut, wenn du die Seiten der Ferse zusammendrückst, oder der Schmerz beim Laufen zunimmt, nachdem du deine Kilometer gesteigert hast; beides kann auf einen Ermüdungsbruch hindeuten',
        'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
        'beide Fersen wehtun und andere Gelenke geschwollen oder steif sind',
        'es nach mehreren Wochen Übungen und weniger Belastung nicht besser geworden ist',
        'sich ein Fußgewölbe im Erwachsenenalter plötzlich abgeflacht hat',
        'das Gewölbe flach bleibt, auch wenn der Fuß nicht auf dem Boden steht',
      ],
    },
    {
      h2: 'Hat eine medizinische Fachperson die Ratgeber von Walkito geprüft?',
      id: 'clinician',
      paragraphs: [
        'Bisher hat keine approbierte medizinische Fachperson die Ratgeber von Walkito geprüft. Walkito Research schreibt sie auf Grundlage der veröffentlichten Forschung, die auf jeder Seite zitiert ist.',
        'Wenn eine medizinische Fachperson sie prüft, nennt diese Seite ihren Namen, ihre Qualifikation und was sie geprüft hat. Bis dahin behauptet keine Seite auf dieser Website eine medizinische Prüfung.',
      ],
    },
    {
      h2: 'Wie melde ich einen Fehler?',
      paragraphs: [
        `Um einen Fehler auf dieser Website zu melden, schreib an ${SUPPORT_EMAIL}. Das kann eine Zahl sein, die nicht zu ihrer Quelle passt, eine Dosis, die falsch klingt, oder ein kaputter Link. Wir korrigieren die Seite selbst.`,
        'Jede Seite zeigt das Datum, an dem sich ihr Inhalt zuletzt geändert hat. Dieses Datum ändert sich nur, wenn sich der Inhalt wirklich ändert.',
      ],
    },
    {
      h2: 'Wie geht Walkito mit meinen Daten um?',
      paragraphs: [
        'Die [Datenschutzerklärung](/de/datenschutz/) von Walkito erklärt, was Walkito speichert, was dein Handy verlässt und wie du es löschst. Kurz gesagt: Dein Plan und deine Check-ins werden in deinem Konto gespeichert, und Daten aus Apple Health bleiben auf deinem Handy.',
      ],
    },
  ],
};
