import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/nurses.ts`, written around the German queries
 * «Fußschmerzen Pflege», «Fußschmerzen Krankenschwester», «Schuhe Pflege
 * 12-Stunden-Schicht». Informal «du». Numbers, doses and evidence levels
 * identical to the English page.
 */

export const NURSES_DE: Guide = {
  lang: 'de',
  page: 'nurses',
  mainSource: CITE.reedNurse,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fußschmerzen in der Pflege: 12-Stunden-Schichten',
  description:
    'Warum Pflegekräfte in 12-Stunden-Schichten Fußschmerzen bekommen: Schuhe, Kompressionsstrümpfe, Übungen und wie du sie in den Schichtdienst einbaust.',
  h1: 'Fußschmerzen in der Pflege: was in 12-Stunden-Schichten hilft',
  lede:
    'Pflegekräfte gehen in einer einzigen Schicht mehr als die meisten Menschen an einem ganzen Tag, und das auf harten Böden in Schuhen, die vielleicht nicht gut passen. Probleme an Fuß und Sprunggelenk gehören zu den häufigsten Beschwerden am Bewegungsapparat in der Pflege: In einer Umfrage berichtete mehr als die Hälfte der Pflegekräfte im Krankenhaus über einen Zeitraum von 12\u00A0Monaten davon. Das meiste, was hilft, Wadendehnungen, Übungen fürs Gewölbe und Kompressionsstrümpfe, geht in ein paar Minuten vor oder nach einer Schicht.',
  intro: [
    'Diese Seite behandelt Fußschmerzen, die aus den Anforderungen der Pflegearbeit kommen: langes Stehen, weite Wege und wechselnde Schichten. Wenn dein Schmerz stechend ist und bei den ersten Schritten nach einer Pause am schlimmsten, deutet dieses Muster auf eine Plantarfasziitis hin, und die Übungen unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) sind der ausführlichere Ratgeber. Wenn du nicht sicher bist, zeigt [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/), wo sich allgemeine Schmerzen vom Stehen und bestimmte Erkrankungen überschneiden.',
  ],
  toc: true,
  takeaways: [
    'In einer Umfrage unter 312\u00A0Pflegekräften in Kinderkliniken in Australien berichteten 55,3\u00A0% über Probleme an Fuß oder Sprunggelenk in den letzten 12\u00A0Monaten, und der Anteil war höher bei denen, die 12-Stunden-Schichten auf der Intensivstation arbeiteten (Reed und Kollegen, 2014).',
    'In einer Studie mit Schrittzählern gingen Pflegekräfte im Schnitt 9.360\u00A0Schritte pro Schicht, etwa 5,8\u00A0km in einer Schicht von 9,4\u00A0Stunden, eine Belastung deutlich über dem Durchschnitt von Erwachsenen (Chang und Cho, 2022).',
    'In einer Querschnittstudie mit 636\u00A0japanischen Pflegekräften im Krankenhaus berichteten 51\u00A0% über Fußschmerzen oder Einschränkungen im letzten Monat, und bei 17\u00A0% störte der Schmerz den Alltag (Tojo und Kollegen, 2018).',
    'Eine eingeschränkte Beweglichkeit im Sprunggelenk, also eine verkürzte Wade, war in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen der stärkste einzelne Vorhersagefaktor für Plantarfasziitis, mit einer 23,3-fachen Chance. Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache (Riddle und Kollegen, 2003).',
    'In einer Studie mit 40\u00A0Sicherheitskräften in 12-Stunden-Schichten im Stehen verhinderten Kompressionsstrümpfe mit 15-20\u00A0mmHg und mit 20-30\u00A0mmHg den Anstieg von Beschwerden und Schwellung, der mit normalen Socken auftrat (Garcia und Kollegen, 2023).',
  ],
  sections: [
    {
      h2: 'Wie häufig sind Fußschmerzen in der Pflege?',
      paragraphs: [
        'Schmerzen an Fuß und Sprunggelenk gehören bei Pflegekräften zu den drei häufigsten Beschwerden am Bewegungsapparat, neben Kreuz- und Nackenschmerzen. In einer Umfrage unter 312\u00A0Pflegekräften in Kinderkliniken berichteten 55,3\u00A0% über Probleme an Fuß oder Sprunggelenk in den letzten 12\u00A0Monaten, und 43,8\u00A0% hatten allein in den letzten sieben Tagen Beschwerden. Eine von sechs Pflegekräften sagte, der Schmerz schränke ihre körperliche Aktivität ein. 12-Stunden-Schichten auf der Intensivstation waren der einzige Faktor der Arbeit, der die Chance auf einschränkende Fußprobleme unabhängig erhöhte.',
        'Eine andere Studie mit 636\u00A0Pflegekräften im Krankenhaus in Japan fand, dass 51\u00A0% im letzten Monat über Fußschmerzen oder Einschränkungen berichteten, erfasst mit einem validierten Fragebogen. Der Anteil mit Schmerzen, die normales Arbeiten verhinderten, lag bei 17\u00A0%. Eine Studie mit Schrittzählern bei koreanischen Pflegekräften fand im Schnitt 5,8\u00A0km Gehstrecke pro Schicht, eine körperliche Belastung deutlich über der Allgemeinbevölkerung.',
        'Eine Querschnittstudie mit 411\u00A0finnischen Pflegekräften fand trockene Haut, Fußschmerzen und Hornhaut als häufigste Fußbeschwerden, und Fußprobleme waren mit einer geringeren Arbeitsfähigkeit verbunden. Die Autoren forderten, der Vorbeugung von Fußproblemen in der Pflege Vorrang zu geben.',
      ],
      cites: [CITE.changCho, CITE.reedNurse, CITE.tojo, CITE.stoltNurse],
    },
    {
      h2: 'Warum bekommen Pflegekräfte in 12-Stunden-Schichten Fußschmerzen?',
      paragraphs: [
        'In einer Pflegeschicht kommen drei Dinge zusammen: langes Stehen, weite Wege und harte Böden. Ruhiges Stehen belastet Plantarfaszie, Wadenmuskeln und Fersenpolster ohne die Pumpwirkung, die das Gehen bringt. Gehen hilft dem Blut, aus den Beinen zurückzufließen, aber Pflegekräfte wechseln unvorhersehbar zwischen ruhigem Stehen am Bett und Gehen auf langen Fluren, sodass die Wadenpumpe nie in einen gleichmäßigen Rhythmus kommt.',
        'Eine Übersichtsarbeit von 2015 zur arbeitsmedizinischen Forschung fand langes Stehen bei der Arbeit in vielen Berufen verbunden mit Beschwerden am Bewegungsapparat, Ermüdung und Beinschmerzen, und nannte Pflegekräfte als eine der Gruppen mit dem höchsten Risiko. Die Übersicht hielt fest, dass Belastung für Herz und Kreislauf und geschwollene Beine mit der Stehdauer zunehmen.',
        'Auf der Ebene der Gewebe ist eine verkürzte Wade ein zentrales Stück. Eine Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0passenden Kontrollen fand, dass eine eingeschränkte Beweglichkeit im Sprunggelenk, also dass sich das Sprunggelenk wegen einer verkürzten Wade nicht so weit nach oben beugen lässt, wie es sollte, der stärkste einzelne unabhängige Risikofaktor für Plantarfasziitis war, mit einer 23,3-fachen Chance. Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache. Pflegekräfte haben beide Risikofaktoren gleichzeitig.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Welche Übungen helfen Pflegekräften bei Fußschmerzen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Wade und Plantarfaszie mit A, ihrer besten Bewertung, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Die Übungen, die helfen, sind dieselben, die bei Plantarfasziitis und Fußschmerzen vom Stehen ansetzen: Wadendehnungen, eine Plantarfaszien-Dehnung, Fersenheben für die Kraft der Wade und eine Übung fürs Gewölbe, der kurze Fuß. Der Unterschied in der Pflege ist, sie rund um die wechselnden Schichten einzubauen, nicht während der Schicht. Ein paar Minuten vor oder nach einer Schicht reichen für die wichtigsten.',
        'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Wade und Plantarfaszie ihre beste Bewertung, A, und Krafttraining ein B. Beide Bewertungen gelten speziell für Plantarfasziitis, aber die beteiligten Gewebe sind dieselben, die in einer Pflegeschicht die Last tragen. Wenn eine Übung deinen Schmerz auf 6 von 10 oder mehr bringt, hör für heute auf.',
      ],
      exercises: [
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Wadendehnung bei Plantarfasziitis mit A. Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die Ferse unten und die Hüfte nach vorn. Das zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel. Das geht im Pausenraum oder an jeder anderen Wand.',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (gebeugtes Knie)',
          evidence: {
            level: 'moderate',
            why: 'Dieselbe Unterstützung durch die Leitlinie wie die Variante mit gestrecktem Knie. Zielt auf den Soleus, den tieferen Wadenmuskel.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand, aber beug das hintere Knie, bis du die Dehnung tiefer spürst, näher an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt nur los, wenn das Knie gebeugt ist.',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis du es nahe der Ferse spürst',
          alt: 'Eine Figur in der Dehnung an der Wand mit gebeugtem hinteren Knie, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Plantarfaszien-Dehnung mit A.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg einen Fuß über das andere Knie. Zieh die Zehen sanft nach hinten, bis du eine Dehnung entlang des Gewölbes spürst. Wenn deine Ferse bei den ersten Schritten des Tages am schlimmsten ist, mach diese Dehnung morgens, bevor deine Füße den Boden berühren.',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft nach hinten, bis du es im Gewölbe spürst',
          alt: 'Eine sitzende Figur zieht die Zehen eines Fußes nach hinten, das Gewölbe ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Krafttraining bei Plantarfasziitis mit B. Baut die Kraft in der Wade auf, die in einer Schicht die Stöße abfängt.',
          },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm in etwa drei Sekunden gerade über die großen Zehen hoch und senk dich dann in drei Sekunden langsam ab. Halt dich zum Ausbalancieren an einer Wand oder einem Geländer fest. Alle Details zu dieser Übung, auch wie du steigerst und die Variante mit Handtuch, findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
          media: 'heel_raise_double',
          caption: 'Fersenheben: über die großen Zehen hoch, langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: {
            level: 'early',
            why: 'Eine Übersichtsarbeit von 2024 fand, dass Kurzer-Fuß-Training die Gewölbeform veränderte, aber nicht den Schmerz. Walkito nutzt die Übung als Teil eines breiteren Programms.',
          },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt, ohne die Zehen einzurollen. Das trainiert die kleinen Muskeln im Gewölbe, die es über einen langen Tag auf den Beinen stützen.',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt',
          alt: 'Ein Bein im Sitzen, der Fuß auf dem Boden, das Gewölbe ist beim Anheben hervorgehoben',
        },
        {
          name: 'Zehenspreizen',
          evidence: {
            level: 'early',
            why: 'Nicht Teil der getesteten Programme auf dieser Seite. Zielt auf die kurzen Fußmuskeln, die in Arbeitsschuhen zusammengedrückt werden.',
          },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten',
          how: 'Setz oder stell dich hin, spreiz alle fünf Zehen so weit auseinander, wie du kannst, und halte. Nach einer Schicht in engen Schuhen weckt das die kleinen Muskeln zwischen den Zehen auf.',
          media: 'toe_spread',
          caption: 'Zehenspreizen: alle fünf Zehen auseinanderspreizen und halten',
          alt: 'Ein Fuß von oben mit weit auseinandergespreizten Zehen',
        },
      ],
      table: {
        caption: 'Startdosen für Pflegekräfte mit Fußschmerzen',
        head: ['Übung', 'Dosis', 'Wann', 'Was du spüren solltest'],
        rows: [
          ['Wadendehnung (gestrecktes Knie)', '2 x 30\u00A0Sekunden, jedes Bein', 'Vor oder nach der Schicht', 'Eine Dehnung in der oberen Wade'],
          ['Wadendehnung (gebeugtes Knie)', '2 x 30\u00A0Sekunden, jedes Bein', 'Vor oder nach der Schicht', 'Eine Dehnung tief in der Wade, nahe der Ferse'],
          ['Plantarfaszien-Dehnung', '2 x 30\u00A0Sekunden, jeder Fuß', 'Vor der Schicht oder nach dem Aufwachen', 'Eine Dehnung entlang des Gewölbes'],
          ['Fersenheben', '3 x 10, beide Füße', 'An freien Tagen oder nach der Schicht', 'Die Waden arbeiten, kein stechender Schmerz'],
          ['Kurzer Fuß', '3 x 10 (5\u00A0Sekunden halten), jeder Fuß', 'An freien Tagen oder nach der Schicht', 'Das Gewölbe hebt sich, die Zehen bleiben locker'],
          ['Zehenspreizen', '3 x 10 (5\u00A0Sekunden halten)', 'Nach der Schicht', 'Die Zehen spreizen sich, kein Schmerz'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Wie baust du Übungen in den Schichtdienst ein?',
      paragraphs: [
        'Eine 12-Stunden-Schicht lässt wenig Zeit für ein eigenes Übungsprogramm, und der Wechsel zwischen Tag- und Nachtschicht macht die Planung noch schwerer. Die Dehnungen auf dieser Seite dauern etwa 3\u00A0Minuten, am einfachsten machst du sie also direkt vor oder direkt nach einer Schicht, jedes Mal an derselben Stelle in deiner Routine. Zum Beispiel, nachdem du in deine Arbeitsschuhe geschlüpft bist oder sie ausgezogen hast.',
        'An freien Tagen kommen die Kraftübungen dazu: Fersenheben und kurzer Fuß. Das dauert etwa 5 bis 10\u00A0Minuten. Wenn du das Krafttraining an freien Tagen machst statt nach einer anstrengenden Schicht, haben Wade und Gewölbe Zeit zur Erholung vor dem nächsten Einsatz auf den Beinen.',
        'Drei Einheiten pro Woche sind ein vernünftiger Anfang. Wenn du drei 12-Stunden-Schichten mit vier freien Tagen arbeitest, passt das Krafttraining auf jeden freien Tag. Wenn du zwischen Tag- und Nachtschicht wechselst, spielt die Tageszeit keine Rolle. Es zählt die Regelmäßigkeit, nicht die Uhrzeit.',
      ],
    },
    {
      h2: 'Machen Arbeitsschuhe in der Pflege einen Unterschied: Clogs, Sneaker oder etwas anderes?',
      paragraphs: [
        'Schuhe sind eines der meistdiskutierten Themen unter Pflegekräften, aber die Belege für einen Typ gegenüber einem anderen sind begrenzt. Eine Untersuchung von 2007 zu drei Marken professioneller Pflegeschuhe fand, dass der Schuh mit der stärker gedämpften Innensohle und besserer Gewölbestütze die Muskelarbeit in den Beinen im Vergleich zu den anderen beiden verringerte, aber die Studie war klein und auf bestimmte Marken bezogen.',
        'Was die Forschung breiter stützt: Bequeme Schuhe zählen. In einer Umfrage unter 125\u00A0Pflegekräften in Notaufnahme und Ambulanz berichteten 72\u00A0% derer, die ihre Schuhe als wenig bequem empfanden, auch über Fuß- und Fersenschmerzen, verglichen mit 28\u00A0% derer, die sie als sehr bequem empfanden. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Einlagen allein mit B dagegen für die kurzfristige Linderung bei Plantarfasziitis, die Belege sprechen also eher dagegen, sie als alleinige Maßnahme zu nutzen.',
        'Ein praktischer Weg: Wähl einen Schuh, der gut passt, etwas Dämpfung hat und die Zehen nicht einklemmt. Wenn du schon Schmerzen an Ferse oder Gewölbe hast, setzen die Übungen auf dieser Seite direkt an den Geweben an. Schuhe und Einlagen können den Komfort während einer Schicht verbessern, aber sie ersetzen weder Dehnen noch Krafttraining.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Helfen Kompressionsstrümpfe Pflegekräften bei Schmerzen in Fuß und Bein?',
      keyFact: 'In einer Studie mit 40\u00A0Sicherheitskräften in Schichten von etwa 12\u00A0Stunden im Stehen verhinderten Kompressionsstrümpfe mit 15-20\u00A0mmHg und mit 20-30\u00A0mmHg den Anstieg der Beschwerden in Fuß und Bein, der mit normalen Socken auftrat (Garcia und Kollegen, 2023).',
      paragraphs: [
        'Kompressionsstrümpfe haben eine der besser kontrollierten Studien zu Beschwerden vom Stehen. In einer randomisierten Studie mit 40\u00A0Sicherheitskräften in Schichten von etwa 12\u00A0Stunden im Stehen blieb in beiden Gruppen mit Kompressionsstrümpfen, 15-20\u00A0mmHg und 20-30\u00A0mmHg, der deutliche Anstieg von Beschwerden, Ermüdung und Schwellung in Fuß und Bein aus, den die Gruppe mit normalen Socken hatte. Viele Teilnehmer sagten, der Strumpf mit dem niedrigeren Druck sei leichter anzuziehen.',
        'Eine randomisierte Pilotstudie mit 20\u00A0Pflegeschülerinnen und Pflegeschülern verglich knielange und oberschenkellange Kompressionsstrümpfe, getragen in klinischen Ausbildungsschichten von 9\u00A0Stunden. Beide Gruppen waren sehr zufrieden, aber die Stichprobe war zu klein, um klare Unterschiede zwischen den beiden Längen zu zeigen.',
        'Die Garcia-Studie umfasste nur männliche Sicherheitskräfte, keine Pflegekräfte, und keine der beiden Studien war groß. Aber Kompressionsstrümpfe sind eine der wenigen Maßnahmen speziell gegen Beschwerden vom Stehen mit randomisierten Belegen. Eine arbeitsmedizinische Übersichtsarbeit von 2015 nennt sie neben Bodenmatten und stützenden Schuhen als Maßnahmen mit gewissen Belegen dafür, Beschwerden bei langer Arbeit im Stehen zu verringern. Sie ersetzen weder Dehnen noch Krafttraining. Sie helfen gegen Schwellung und Ermüdung, während Wade und Faszie trotzdem ihre eigene Aufmerksamkeit brauchen.',
      ],
      sourceNote:
        'Garcia und Kollegen (2023): Parallelgruppen-Design, 40\u00A0männliche Sicherheitskräfte, zufällig drei Gruppen zugeteilt (normale Socken, 15-20\u00A0mmHg, 20-30\u00A0mmHg), jeweils über eine ganze Arbeitsschicht getragen. Beschwerden, Ermüdung und Ödeme vor und nach der Schicht gemessen.',
      cites: [CITE.garcia, CITE.waters],
    },
    {
      h2: 'Was kannst du vor und nach einer Schicht in 3, 5 oder 10\u00A0Minuten tun?',
      paragraphs: [
        'Wenn du 3\u00A0Minuten hast: Mach die beiden Wadendehnungen (gestrecktes und gebeugtes Knie, je 30\u00A0Sekunden pro Seite). Das deckt den stärksten einzelnen beeinflussbaren Risikofaktor ab, eine verkürzte Wade, und dauert so lange wie Schuhe binden.',
        'Wenn du 5\u00A0Minuten hast: Nimm die Plantarfaszien-Dehnung dazu (30\u00A0Sekunden pro Fuß). Das ist die Kombination, die die Leitlinie von 2023 bei Plantarfasziitis mit A bewertet. Wenn deine Ferse bei den ersten Schritten des Tages am schlimmsten ist, mach die Faszien-Dehnung, bevor deine Füße den Boden berühren.',
        'Wenn du 10\u00A0Minuten hast: Nimm das Fersenheben (3\u00A0Sätze à 10) und den kurzen Fuß (3\u00A0Sätze à 10 mit 5\u00A0Sekunden Halten) dazu. Das deckt die Kraftseite ab, in der Leitlinie mit B bewertet. An freien Tagen reichen 10\u00A0Minuten für alles auf dieser Seite.',
        'Regelmäßigkeit zählt mehr als Länge. Drei Minuten Wadendehnung an jedem Schichttag, immer an derselben Stelle in deiner Routine, bringen mehr als eine längere Einheit, die du ausfallen lässt, wenn sich der Dienstplan ändert.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Könnten Fußschmerzen nach einer Pflegeschicht eine Plantarfasziitis oder etwas anderes sein?',
      paragraphs: [
        'Allgemeine Schmerzen und Müdigkeit nach einer langen Schicht sind häufig und vergehen meist mit Ruhe. Plantarfasziitis ist eine bestimmte Erkrankung: ein stechender Schmerz nahe der Ferse, am schlimmsten bei den ersten Schritten nach einer Pause (beim Aufstehen aus dem Bett oder nach langem Sitzen). Wenn dein Schmerz diesem Muster folgt, sind die Übungen unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) der ausführlichere Ratgeber, und die Details zum Fersenheben stehen unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
        'Wenn sich deine Gewölbe am Ende einer Schicht flach oder nach innen gekippt anfühlen, zielen die Übungen unter [Übungen bei Plattfuß und abgesunkenem Gewölbe](/de/plattfuss-uebungen/) auf die Muskeln, die das Gewölbe oben halten. Schmerz am Schienbein entlang könnte ein Schienbeinkantensyndrom sein. Schmerz in der Achillessehne hinten an der Ferse ist ein anderes Problem.',
        'Wenn Schmerzen vom Stehen deine Hauptfrage sind und du nicht in der Pflege arbeitest, behandelt [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/) dieselben Übungen für alle. Für die Version dieses Problems am Stehschreibtisch lies [Fußschmerzen am Stehschreibtisch](/de/stehschreibtisch-fussschmerzen/). Wenn du nicht sicher bist, woher der Schmerz kommt, geh zu einer medizinischen Fachperson, bevor du ihn mit Übungen belastest.',
      ],
    },
  ],
  faq: [
    {
      q: 'Wie viele Schritte gehen Pflegekräfte in einer 12-Stunden-Schicht?',
      a: 'In einer Studie mit Schrittzählern bei koreanischen Pflegekräften im Krankenhaus lag der Schnitt bei etwa 9.360\u00A0Schritten pro Schicht, rund 5,8\u00A0km in 9,4\u00A0Stunden. Das liegt deutlich über der durchschnittlichen täglichen Schrittzahl von Erwachsenen, und das anhaltende Gehen auf harten Böden trägt viel zu Fußschmerzen in der Pflege bei.',
      cites: [CITE.changCho, CITE.tojo],
    },
    {
      q: 'Sind 12-Stunden-Schichten schlimmer für die Füße als 8-Stunden-Schichten?',
      a: 'In einer Umfrage unter Pflegekräften in Kinderkliniken waren 12-Stunden-Schichten auf der Intensivstation der einzige Faktor der Arbeit, der die Chance auf einschränkende Probleme an Fuß und Sprunggelenk unabhängig erhöhte. Die Gesamtlast auf dem Fuß steigt mit der Schichtlänge, und die Erholungszeit zwischen den Schichten ist kürzer, wenn die Schichten selbst länger sind. Trotzdem zählen auch die Art der Arbeit und der Boden, nicht nur die Stunden.',
      cites: [CITE.reedNurse],
    },
    {
      q: 'Clogs oder Sneaker in der Pflege bei Fußschmerzen?',
      a: 'Es gibt keine große Studie, die Pflege-Clogs und Sneaker für die Füße vergleicht. Was die Belege stützen: Bequeme Schuhe hängen stark mit Fußschmerzen zusammen. In einer Umfrage berichteten 72\u00A0% der Pflegekräfte, die ihre Schuhe als wenig bequem empfanden, auch über Fuß- und Fersenschmerzen. Wähl einen Schuh, der gut passt, etwas Dämpfung hat und die Zehen nicht einklemmt. Schuhe allein ersetzen nicht das Dehnen und Krafttraining auf dieser Seite.',
    },
    {
      q: 'Helfen Kompressionsstrümpfe Pflegekräften in langen Schichten?',
      a: 'In einer randomisierten Studie mit 40\u00A0Sicherheitskräften in 12-Stunden-Schichten im Stehen verhinderten Kompressionsstrümpfe mit 15-20\u00A0mmHg und mit 20-30\u00A0mmHg den Anstieg von Beschwerden und Schwellung, der mit normalen Socken auftrat. Die Studie war nicht speziell mit Pflegekräften, aber der Mechanismus ist derselbe: Kompression hilft dem Blut, in langen Zeiten auf den Beinen aus den Unterschenkeln zurückzufließen. Die meisten Teilnehmer fanden den Strumpf mit dem niedrigeren Druck leichter anzuziehen.',
      cites: [CITE.garcia],
    },
    {
      q: 'Muss man mit Fußschmerzen in der Pflege einfach leben?',
      a: 'Fußschmerzen vom Stehen und Gehen sind in der Pflege häufig, aber „häufig“ heißt nicht unvermeidlich. Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Wade und Faszie mit A und Krafttraining mit B. Kompressionsstrümpfe haben randomisierte Belege bei Beschwerden vom Stehen. Ein paar Minuten Wadendehnung vor oder nach jeder Schicht, kombiniert mit Krafttraining an freien Tagen, setzen an den Geweben an, die am meisten aushalten müssen.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Kann man durch die Arbeit in der Pflege eine Plantarfasziitis bekommen?',
      a: 'Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf eine Plantarfasziitis in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0passenden Kontrollen um das 3,6-Fache. Eine eingeschränkte Beweglichkeit im Sprunggelenk erhöhte sie um das 23,3-Fache. Pflegekräfte haben beide Risikofaktoren, langes Stehen und wenig Pausenzeit zum Dehnen, deshalb überschneiden sich die Übungen auf dieser Seite stark mit denen im Ratgeber zur Plantarfasziitis.',
      cites: [CITE.riddle],
    },
    {
      q: 'Was sollte ich als Pflegekraft bei Fußschmerzen als Erstes tun?',
      a: 'Unter den Optionen auf dieser Seite hat die tägliche Wadendehnung die stärkste Unterstützung durch die Leitlinie (Bewertung A bei Plantarfasziitis) und zielt auf den stärksten einzelnen beeinflussbaren Risikofaktor, eine verkürzte Wade. Sie dauert etwa 2\u00A0Minuten, braucht keine Ausrüstung und geht im Pausenraum oder zu Hause. Kompressionsstrümpfe an Schichttagen decken die Seite von Schwellung und Ermüdung ab.',
      cites: [CITE.guideline, CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer bestimmten Verletzung oder einem Sturz bei der Arbeit angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'der Fuß taub ist, kribbelt, brennt, geschwollen oder warm ist',
      'die Ferse oder der Fuß gerötet ist oder du Fieber hast oder dich krank fühlst',
      'der Schmerz dich nachts weckt',
      'der Schmerz stechend ist oder schlimmer wird, obwohl du die Belastung verringerst',
      'der Schmerz an einem genauen Punkt sitzt und bei Aktivität zunimmt, was eher zum Muster eines Ermüdungsbruchs passen kann als zu Ermüdung vom Stehen',
      'ein Bein oder ein Fuß plötzlich angeschwollen ist und wehtut, gerötet oder warm ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
      'der Schmerz nach mehreren Wochen mit leichteren Schichten, besseren Schuhen und den Übungen auf dieser Seite nicht nachgelassen hat',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text:
      'Du musst dir Reihenfolge, Dosis und den Zeitpunkt für die schwerere Variante nicht selbst überlegen. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Wenn deine Fußschmerzen dem Muster der Plantarfasziitis mit Schmerzen am Morgen folgen, ist das erste Ziel Morgenschmerz bei oder unter 1 von 10 an 14\u00A0Tagen am Stück.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald dein erstes Ziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, ob die Arbeit etwas bringt. Im Schichtdienst spielt die Tageszeit keine Rolle. Es zählt, die Einheiten regelmäßig zu machen.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn der Schmerz stechend ist, schlimmer wird oder dich nachts wach hält, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fußschmerzen in der Pflege',
  campaign: 'guide-nurses-de',
};
