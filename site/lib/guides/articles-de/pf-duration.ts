import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/pf-duration.ts`, written around the German
 * queries «wie lange dauert Plantarfasziitis», «Plantarfasziitis Dauer»,
 * «Plantarfasziitis geht nicht weg». Informal «du», terminology as in
 * `lib/guides/de.ts`. Figures, grades, intervals and qualifiers are
 * identical to the English page. No new citations.
 */

export const PF_DURATION_DE: Guide = {
  lang: 'de',
  page: 'pfDuration',
  mainSource: CITE.hansen,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Wie lange dauert Plantarfasziitis? Was Studien zeigen',
  description:
    'Wie lange eine Plantarfasziitis dauert, was die Erholung bremst, was du tun kannst, wenn es nicht besser wird, und woran du Fortschritt erkennst.',
  h1: 'Wie lange dauert Plantarfasziitis? Was die Studienlage wirklich sagt',
  lede:
    'Die ehrliche Antwort: Es kommt darauf an, und die meisten Quellen unterschätzen, wie stark das schwankt. Eine Übersichtsarbeit von 2020 berichtet, dass es etwa 90\u00A0% der Menschen mit nicht-operativer Behandlung wie Dehnen und Schuheinlagen besser geht. Eine längere Beobachtung von 174\u00A0Menschen zeichnet ein differenzierteres Bild: Nach fünf Jahren war etwa die Hälfte beschwerdefrei, und 46\u00A0% hatten nach durchschnittlich zehn Jahren noch etwas Schmerz, wobei die meisten davon nur leichte Beschwerden angaben.',
  intro: [
    'Die Seite [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) erklärt die Übungen, die Belege und die Bewertungen der Leitlinie. Diese Seite beantwortet die Frage, die danach kommt: Wie lange dauert das alles, was lässt es länger dauern, und welche Möglichkeiten gibt es, wenn es nicht besser wird?',
  ],
  takeaways: [
    'Eine Übersichtsarbeit von 2020 berichtet, dass etwa 90\u00A0% der Fälle von Plantarfasziitis auf nicht-operative Behandlung ansprechen, oft innerhalb einiger Monate (Latt und Kollegen, 2020).',
    'Eine längerfristige Kohorte von 174\u00A0Patientinnen und Patienten fand, dass das Risiko, noch eine Plantarfasziitis zu haben, ab Beginn der Beschwerden nach einem Jahr bei 80,5\u00A0%, nach fünf Jahren bei 50,0\u00A0% und nach zehn Jahren bei 45,6\u00A0% lag (Hansen und Kollegen, 2018).',
    'Signifikante Prognosefaktoren für eine langsamere Erholung in dieser Kohorte waren weibliches Geschlecht und Fersenschmerzen auf beiden Seiten. BMI, Alter, Dicke der Faszie und Fersensporn hatten keinen signifikanten Einfluss auf die Prognose (Hansen und Kollegen, 2018).',
    'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen die Bewertung **A** und Krafttraining ein **B**. Nachtschienen bei anhaltendem Morgenschmerz bekommen ein **A**, Low-Level-Laser oder Dry Needling durch eine Fachperson ein **B** (Koc und Kollegen, 2023).',
    'Der Morgenschmerz auf einer Skala von 0 bis 10, täglich festgehalten, ist der praktischste Weg zu sehen, ob die Erholung in die richtige Richtung geht.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Wie lange dauert eine Plantarfasziitis meistens?',
      keyFact: 'In einer Kohorte von 174\u00A0Menschen lag das Risiko, noch Beschwerden einer Plantarfasziitis zu haben, nach einem Jahr bei 80,5\u00A0% und sank bis zum zehnten Jahr auf 45,6\u00A0% (Hansen und Kollegen, 2018).',
      paragraphs: [
        'Eine einzelne Zahl gibt es nicht. Die Erholung hängt davon ab, wie lange du die Beschwerden schon hast, was du dagegen tust, und von einigen Faktoren, die du nicht beeinflussen kannst.',
        'Eine Übersichtsarbeit von 2020 hält fest, dass nicht-operative Ansätze bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wirken, meist innerhalb von drei bis sechs Monaten (Latt und Kollegen, 2020).',
        'Eine Kohortenstudie von 2018 zeigt den längeren Blick. Hansen und Kollegen begleiteten 174\u00A0Patientinnen und Patienten mit per Ultraschall diagnostizierter Plantarfasziitis durchschnittlich 9,7\u00A0Jahre ab Beginn der Beschwerden. Bei der Nachuntersuchung waren 54\u00A0% beschwerdefrei, und 46\u00A0% hatten noch etwas Schmerz.',
        'Die Kaplan-Meier-Analyse zeigte, dass das Risiko, noch eine Plantarfasziitis zu haben, nach einem Jahr bei 80,5\u00A0%, nach fünf Jahren bei 50,0\u00A0% und nach zehn Jahren bei 45,6\u00A0% lag. Bei denen, die beschwerdefrei wurden, dauerten die Beschwerden im Durchschnitt 725\u00A0Tage, also etwa zwei Jahre (Hansen und Kollegen, 2018).',
        'Diese Zahlen klingen schlechter als das übliche „das geht in ein paar Monaten weg“. Zwei Dinge erklären den Unterschied. Erstens war die Kohorte von Hansen eine überwiesene Gruppe: 93\u00A0% hatten eine Kortisonspritze bekommen, was darauf hindeutet, dass es schwerer zu behandelnde Fälle waren und nicht Menschen, deren Schmerz mit Dehnen und besseren Schuhen abklang.',
        'Zweitens berichteten die Patientinnen und Patienten, die bei der Nachuntersuchung noch Beschwerden hatten, im Durchschnitt nur von leichten Schmerzen, etwa 2 bis 3 von 10 beim Gehen. „Nach zehn Jahren noch Beschwerden“ heißt also nicht unbedingt „kann nicht gehen“. Für viele hieß es gelegentliches Unbehagen statt des stechenden Schmerzes bei den ersten Schritten, mit dem sie angefangen hatten.',
      ],
      sourceNote:
        'Hansen 2018: Kaplan-Meier-Risiko für PF: 80,5\u00A0% (95-%-KI 73,5-85,6) nach 1\u00A0Jahr, 50,0\u00A0% (42,4-57,1) nach 5\u00A0Jahren, 45,6\u00A0% (37,9-53,0) nach 10\u00A0Jahren, 44,0\u00A0% (35,9-51,8) nach 15\u00A0Jahren. Mittlere Beschwerdedauer in der beschwerdefreien Gruppe: 725\u00A0Tage (Spanne 41-4018). NRS in der Gruppe mit Beschwerden bei der Nachuntersuchung: 0,7 in Ruhe, 1,8 beim Gehen, 2,8 beim Laufen, 2,1 bei Druck.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Geht Plantarfasziitis von allein weg?',
      paragraphs: [
        'Manchmal. Manche wachen eines Morgens auf, und der Schmerz ist weg, ohne dass sie etwas Bestimmtes getan haben. Aber „das geht von allein weg“ ist für den einzelnen Menschen keine nützliche Vorhersage, weil man vorher nicht wissen kann, ob man zu dieser Gruppe gehört.',
        'Was die Belege sagen: Etwas dagegen zu tun, also Dehnen, die Wade kräftigen und stützende Schuhe tragen, zieht die Besserung meist vor. In der Studie von Rathleff wurden 48\u00A0Menschen mit Plantarfasziitis in zwei Gruppen aufgeteilt: Eine machte belastetes Fersenheben mit einem Handtuch unter den Zehen, die andere dehnte die Plantarfaszie.',
        'Die Fersenheben-Gruppe besserte sich nach drei Monaten schneller. Nach einem Jahr lagen beide Gruppen etwa gleichauf (Rathleff und Kollegen, 2015). Die Übungen haben die Besserung also beschleunigt, aber nicht verstärkt. Ob es ohne beide Maßnahmen genauso schnell gegangen wäre, ist nicht bekannt.',
        'Die Leitlinie von 2023 empfiehlt Dehnen (Bewertung A) und Krafttraining (Bewertung B) als das, was du zuerst ausprobieren solltest, zusammen mit Beratung zu Schuhen. Die Leitlinie sagt nicht „abwarten“. Sie sagt „damit anfangen und beobachten“ (Koc und Kollegen, 2023). Wenn der Schmerz hinten an der Ferse sitzt und nicht darunter, lies stattdessen [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Was spricht für eine langsamere Erholung?',
      keyFact: 'In einer Kohorte von 174\u00A0Menschen wurden Frauen etwa halb so schnell beschwerdefrei wie Männer, und Menschen mit Schmerzen in beiden Fersen erholten sich etwa ein Drittel so schnell wie Menschen mit einseitigen Schmerzen (Hansen und Kollegen, 2018).',
      paragraphs: [
        'Die Kohorte von Hansen 2018 hat mehrere Ausgangsfaktoren daraufhin geprüft, wie lange die Beschwerden anhielten. Zwei davon waren signifikant.',
        '**Weibliches Geschlecht.** Auf 100\u00A0Männer, die pro Jahr beschwerdefrei wurden, kamen nur 49\u00A0Frauen (Hazard Rate Ratio 0,49, P kleiner als 0,01). Der Grund ist nicht geklärt. Die Autoren nannten hormonelle Unterschiede, Schuhgewohnheiten und körperliche Faktoren als Möglichkeiten, ohne Belege, um sich für eine davon zu entscheiden (Hansen und Kollegen, 2018).',
        '**Fersenschmerzen auf beiden Seiten.** Menschen, die zu Beginn in beiden Fersen Schmerzen hatten, wurden pro Jahr nur etwa ein Drittel so häufig beschwerdefrei wie Menschen mit einseitigen Schmerzen (Hazard Rate Ratio 0,33, P kleiner als 0,01).',
        'Die Autoren merkten an, dass Schmerzen auf beiden Seiten auf eine unerkannte entzündliche Erkrankung hindeuten könnten, weil Schmerzen an Sehnenansätzen auf beiden Seiten ein Merkmal mancher Formen von Arthritis sind. Niemand in ihrer Kohorte hatte eine bekannte entzündliche Diagnose, aber es wurde auch kein Bluttest gemacht (Hansen und Kollegen, 2018).',
        'BMI, Alter, Rauchen, körperlich schwere Arbeit, Dicke der Faszie im Ultraschall und ein Fersensporn hatten in dieser Studie alle keinen signifikanten Einfluss auf die Prognose. Der letzte Befund überrascht viele: Ein Fersensporn ließ die Beschwerden weder länger noch kürzer dauern (P = 0,88). Auch frühere Studien fanden keinen Zusammenhang zwischen Fersenspornen und Beschwerden.',
        'Wenn beide Fersen wehtun und die Morgensteifigkeit lange anhält oder andere Gelenke betroffen sind, solltest du das einer medizinischen Fachperson sagen, auch wenn die Übungen helfen. Mehr dazu, wann Schmerzen auf beiden Seiten ein Warnzeichen sind, steht unter [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/).',
      ],
      sourceNote:
        'Hansen 2018, Cox-Regression: weibliches Geschlecht HRR 0,49 (95-%-KI 0,30-0,80, P < 0,01), Schmerzen auf beiden Seiten HRR 0,33 (0,15-0,72, P < 0,01). BMI (>25 gegenüber ≤25): HRR 0,65 (0,40-1,06, P = 0,09). Alter (>40 gegenüber ≤40): HRR 1,93 (0,99-3,73, P = 0,05). Fersensporn: HRR 0,96 (0,56-1,63, P = 0,88).',
      cites: [CITE.hansen],
    },
    {
      h2: 'Was heißt „chronische“ Plantarfasziitis?',
      paragraphs: [
        'Eine einheitliche Definition gibt es nicht. Manche Quellen nennen eine Plantarfasziitis chronisch, wenn sie länger als drei Monate besteht, andere setzen sechs Monate an. Die Leitlinie von 2023 zieht keine Grenze. Eine Übersichtsarbeit von 2020 beschreibt die chronische Plantarfasziitis als „die häufigste Ursache chronischer Fersenschmerzen bei Erwachsenen“, ohne eine Grenze in Monaten zu nennen (Latt und Kollegen, 2020).',
        'Wichtiger als der Begriff ist das Muster. Chronische Plantarfasziitis heißt meist, dass aus dem stechenden Schmerz bei den ersten Schritten am Morgen ein dumpferer, gleichmäßigerer Schmerz geworden ist. Auch das Gewebe verändert sich mit der Zeit: Das Wort „Fasziitis“ deutet auf eine Entzündung hin, aber chronische Fälle werden meist eher als degenerativer und nicht als entzündlicher Prozess beschrieben. Deshalb helfen Kortisonspritzen, die auf die Entzündung zielen, oft kurzfristig, aber nicht langfristig.',
        'Wenn du schon seit mehreren Monaten eine Plantarfasziitis hast und sie nicht deutlich besser wird, erklärt der nächste Abschnitt, was die Leitlinie empfiehlt.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
    {
      h2: 'Welche Meilensteine sind realistisch?',
      keyFact: 'In der Studie von Rathleff schnitt die Fersenheben-Gruppe nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser (niedriger) ab als die Dehngruppe, ein Unterschied, der als groß und messbar beschrieben wurde (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'Keine Studie liefert einen Zeitplan Woche für Woche, der für alle gilt, und jeder Artikel, der das tut, spekuliert. Was die Belege bieten, sind ein paar Wegmarken, die die meisten wiedererkennen werden.',
        '**Die ersten Wochen.** Der Morgenschmerz verändert sich vielleicht kaum. Die Studie von Rathleff zeigte einen deutlichen Unterschied zwischen den Gruppen nach drei Monaten, nicht nach drei Wochen. Am Anfang ist die wichtigste Veränderung, dass die Übungen leichter fallen und sich die Wade weniger verspannt anfühlt. Das ist es wert, bemerkt zu werden, auch wenn die Ferse noch wehtut.',
        '**Ein bis drei Monate.** In der Studie von Rathleff schnitt die Fersenheben-Gruppe nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab als die Gruppe, die nur dehnte. Das ist ein großer, messbarer Unterschied. Viele merken jetzt, dass der Morgenschmerz meistens etwas niedriger ist, oder dass die ersten Schritte steif statt stechend sind (Rathleff und Kollegen, 2015).',
        '**Drei bis sechs Monate.** Die Spanne „oft innerhalb von drei bis sechs Monaten“ aus der Übersichtsarbeit von 2020 legt die Mitte der Besserung für die meisten, die die empfohlenen Übungen machen und stützende Schuhe tragen, in diesen Zeitraum (Latt und Kollegen, 2020).',
        '**Sechs Monate und mehr.** Die Leitlinie von 2023 schlägt vor, andere Optionen in Betracht zu ziehen, wenn mehrere Monate Dehnen, Kräftigen und andere Schuhe nicht genug geholfen haben. Die Kohorte von Hansen zeigt, dass Besserung auch nach einem Jahr und später noch möglich ist: Die Überlebenskurve fiel bis ins fünfte Jahr langsam weiter, aber das Tempo der Besserung nimmt ab. Wenn der Schmerz gleich bleibt oder steigt, nicht nur langsam sinkt, lies den nächsten Abschnitt.',
        'Die nützliche Zahl ist nicht „wie viele Wochen noch, bis ich durch bin“, sondern „ist mein Morgenschmerz diesen Monat niedriger als letzten Monat?“ Dieser Trend ist der Meilenstein.',
      ],
      cites: [CITE.rathleff, CITE.latt, CITE.hansen],
    },
    {
      h2: 'Was kannst du tun, wenn die Plantarfasziitis nicht besser wird?',
      paragraphs: [
        'Wenn mehrere Monate tägliches Dehnen, Wadenkrafttraining und stützende Schuhe nichts bewegt haben, nennt die Leitlinie von 2023 zu Fersenschmerzen weitere Optionen mit ihren Bewertungen. Sie werden unten sachlich beschrieben. Keine davon garantiert etwas, und für alle brauchst du eine medizinische Fachperson.',
      ],
      table: {
        caption: 'Optionen und Bewertungen der Leitlinie von 2023 bei anhaltenden Fersenschmerzen unter dem Fuß',
        head: ['Option', 'Bewertung', 'Was das einfach gesagt heißt'],
        rows: [
          ['Manuelle Therapie (Mobilisation von Gelenken und Weichteilen)', '**A**', 'Die beste Bewertung der Leitlinie, durch eine Fachperson, bei eingeschränkter Beweglichkeit von Gelenken und Gewebe.'],
          ['Dehnen von Plantarfaszie und Wade', '**A**', 'Die beste Bewertung der Leitlinie. Empfohlen als Kern der konservativen Behandlung.'],
          ['Tapen des Fußes (starr oder elastisch)', '**A**', 'Beste Bewertung für kurzfristig weniger Schmerz und bessere Funktion, zusammen mit anderer Behandlung.'],
          ['Nachtschienen für 1 bis 3\u00A0Monate (anhaltender Morgenschmerz)', '**A**', 'Beste Bewertung für Menschen, deren erste Schritte weiter wehtun. Siehe [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/).'],
          ['Widerstands- und Krafttraining (z.\u00A0B. belastetes Fersenheben)', '**B**', 'Zweitbeste Bewertung. Hat die Besserung in einer Studie mit 48\u00A0Personen beschleunigt. Siehe [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).'],
          ['Low-Level-Lasertherapie und Dry Needling (durch eine Fachperson)', '**B**', 'Zweitbeste Bewertung. Beides sind Behandlungen in der Praxis.'],
          ['Einlagen allein zur kurzfristigen Schmerzlinderung', '**B dagegen**', 'Die Leitlinie rät **davon ab**, sich kurzfristig allein auf Einlagen zu verlassen.'],
          ['Einlagen in Kombination mit anderer Behandlung', '**C**', 'Schwache Belege. Kann als Teil eines breiteren Programms helfen.'],
          ['Therapeutischer Ultraschall zusätzlich zum Dehnen', '**A dagegen**', 'Die Leitlinie rät **davon ab**. Die Belege sprechen nicht dafür, ihn zum Dehnen hinzuzunehmen.'],
          ['Kortisonspritze', 'In der Leitlinie von 2023 für die langfristige Anwendung nicht bewertet', 'Kann kurzfristig Schmerzen lindern. Die Kohorte von Hansen zeigte keinen langfristigen Vorteil für die Prognose durch Spritzen, und die Leitlinie empfiehlt sie nicht als alleinige Maßnahme.'],
          ['Stoßwellentherapie', 'Besprochen, Belege uneinheitlich', 'Manche Studien berichten einen Nutzen bei hartnäckigen Fällen. Die Belege reichen nicht für eine klare Bewertung in der Leitlinie.'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Wann solltest du zu einer medizinischen Fachperson, wenn die Plantarfasziitis nicht besser wird?',
      paragraphs: [
        'Das Muster in der Tabelle oben ist klar: Dehnen und Krafttraining haben die breiteste Unterstützung. Die Behandlungen in der Praxis (Laser, Dry Needling, Stoßwelle) haben einige Belege, stehen in der Rangfolge der Leitlinie aber hinter den Übungen. Eine Operation bleibt dem kleinen Teil der Fälle vorbehalten, die auf nichts anderes ansprechen, und die Leitlinie gibt ihr keine prominente Rolle.',
        'Wenn du die Übungen mehrere Monate regelmäßig gemacht hast und der Morgenschmerz nicht besser wird, ist das ein vernünftiger Zeitpunkt, mit einer medizinischen Fachperson über die Optionen oben zu sprechen. Es ist auch ein vernünftiger Zeitpunkt, zu prüfen, ob die Diagnose stimmt: Unter [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/) findest du andere Ursachen mit demselben Muster.',
        'Beim Laufen ist die Belastung oft ein Teil des Bildes: [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) und [Fußschmerzen vom langen Stehen](/feet-hurt-standing-all-day/) (auf Englisch) behandeln diesen Blickwinkel.',
      ],
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Wie zeigt dir der Morgenschmerz deinen Fortschritt?',
      paragraphs: [
        'Der Morgenschmerz ist das verlässlichste tägliche Signal, wie es dem Fuß geht. Er misst dasselbe (die Steifigkeit bei den ersten Schritten), unter denselben Bedingungen (gerade aufgewacht, unbelasteter Fuß), jeden Tag ungefähr zur selben Zeit. Das macht ihn zu einer viel besseren Trendlinie als „wie sich mein Fuß tagsüber angefühlt hat“, was sich mit Aktivität, Schuhen und Untergrund verschiebt.',
        'Ein täglicher Wert von 0 bis 10 für deine ersten Schritte, über Wochen festgehalten, zeigt Muster, die dir sonst nicht auffallen würden. Ein Wert, der über einen Monat von 5 auf 3 sinkt, ist echter Fortschritt, auch wenn einzelne Morgen noch wehtun. Ein Wert, der am Morgen nach einem langen Lauf oder einem Tag auf den Beinen in die Höhe schießt, zeigt dir genau, welche Belastung zu viel war.',
        'Walkito fragt vor jeder Einheit nach deinem Morgenschmerz und passt damit die Übungen des Tages an. Das erste Ziel bei Fersenschmerzen ist ein Morgenschmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück. Sobald dieses Ziel erreicht ist, geht es in die Erhaltung über, und das nächste Ziel (meist Wadenkraft oder Gleichgewicht) rückt nach. Dieser Wechsel von „die Morgen leichter machen“ zu „Belastbarkeit aufbauen“ ist der eigentliche Meilenstein.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Wie lange dauert es, bis Plantarfasziitis weggeht?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Eine Übersichtsarbeit von 2020 berichtet, dass es etwa 90\u00A0% der Menschen mit nicht-operativer Behandlung besser geht, oft innerhalb einiger Monate (Latt und Kollegen, 2020). In einer Kohorte von 174\u00A0Patientinnen und Patienten waren nach fünf Jahren 50\u00A0% beschwerdefrei, und 46\u00A0% hatten nach zehn Jahren noch Beschwerden, die meisten aber nur noch leichte Schmerzen (Hansen und Kollegen, 2018). Die Erholung dauert Monate, nicht Wochen, und kein Programm kann einen bestimmten Zeitrahmen versprechen.',
    },
    {
      q: 'Geht Plantarfasziitis jemals ganz weg?',
      cites: [CITE.hansen],
      a: 'Bei vielen Menschen ja. In der Kohorte von Hansen 2018 waren nach durchschnittlich 9,7\u00A0Jahren 54\u00A0% vollständig beschwerdefrei. Bei denen, die sich erholten, dauerten die Beschwerden im Durchschnitt etwa 725\u00A0Tage. Manche hatten noch gelegentlich leichtes Unbehagen, kamen aber auf allen Schmerzskalen auf 0. Langsamer war die Erholung bei Frauen und bei Menschen mit Fersenschmerzen auf beiden Seiten.',
    },
    {
      q: 'Warum wird meine Plantarfasziitis nicht besser?',
      cites: [CITE.guideline],
      a: 'Dafür gibt es mehrere Möglichkeiten. Vielleicht machst du die Übungen nicht regelmäßig genug, die Schuhe stützen nicht gut, oder die tägliche Last auf dem Fuß (Schritte, Stunden im Stehen, Laufkilometer) ist größer, als das Gewebe verkraften kann. Es ist auch möglich, dass es gar keine Plantarfasziitis ist. Wenn Dehnen und Kräftigen nach mehreren Monaten nicht geholfen haben, empfiehlt die Leitlinie von 2023, mit einer medizinischen Fachperson über Optionen wie Nachtschienen, Lasertherapie oder Dry Needling zu sprechen.',
    },
    {
      q: 'Dauert Plantarfasziitis mit Fersensporn länger?',
      cites: [CITE.hansen],
      a: 'Nicht laut der Studie von Hansen 2018. Ein Fersensporn zu Beginn hatte keinen signifikanten Einfluss darauf, wie lange die Beschwerden anhielten (P = 0,88). Viele Menschen haben einen Fersensporn ohne Schmerzen, und viele mit Schmerzen haben keinen Sporn. Der Sporn ist oft da, aber er ist nicht das, was die Beschwerden antreibt.',
    },
    {
      q: 'Ist Gehen gut bei Plantarfasziitis?',
      cites: [CITE.guideline],
      a: 'Maßvolles Gehen in stützenden Schuhen ist meist in Ordnung, und die Leitlinie sagt nicht, dass du aufhören sollst, dich zu bewegen. Entscheidend ist, ob der nächste Morgen schlimmer ist. Ist der Schmerz bei den ersten Schritten am Morgen nach einem Spaziergang deutlich höher als sonst, war dieser Spaziergang mehr, als der Fuß verkraften konnte. Verkürze Strecke oder Zeit, statt ganz aufzuhören.',
    },
    {
      q: 'Wann sollte ich zum Arzt, wenn die Plantarfasziitis nicht besser wird?',
      a: 'Geh zu einer medizinischen Fachperson, wenn der Schmerz nach mehreren Monaten täglichen Dehnens und Wadentraining nicht deutlich besser ist, wenn er schlimmer wird statt gleich zu bleiben, wenn beide Fersen wehtun und andere Gelenke steif oder geschwollen sind, wenn Taubheit oder Kribbeln dazukommen oder wenn der Schmerz dich nachts weckt. Diese Muster können auf eine andere Ursache hindeuten oder Optionen über Übungen hinaus nötig machen.',
    },
    {
      q: 'Kann Plantarfasziitis wiederkommen?',
      cites: [CITE.hansen],
      a: 'Ja. In der Kohorte von Hansen 2018 hatten 32\u00A0% der beschwerdefreien Gruppe mindestens einen Rückfall, bevor sie dauerhaft beschwerdefrei wurden. Das Muster aus Besserung, Rückfall und weiterer Besserung ist häufig. Mit Wadentraining und Dehnen in einer Erhaltungsdosis weiterzumachen, nachdem der Schmerz weg ist, ist eine Möglichkeit, die Wahrscheinlichkeit eines Rückfalls zu senken.',
    },
    {
      q: 'Woran merkt man, dass Plantarfasziitis besser wird?',
      cites: [CITE.rathleff],
      a: 'Das klarste Zeichen ist weniger Morgenschmerz: Die ersten Schritte fühlen sich steif statt stechend an, und der Schmerz verschwindet schneller, wenn du losgehst. Viele bemerken diese Veränderung, bevor der Schmerz ganz weg ist. In der Studie von Rathleff schnitten die Teilnehmenden mit Fersenheben nach drei Monaten messbar besser ab, und um diese Zeit zeigt sich die Veränderung oft.',
    },
    {
      q: 'Was sollte man nicht tun, wenn die Plantarfasziitis nicht besser wird?',
      cites: [CITE.guideline],
      a: 'Hör nicht mit den Übungen auf, sobald der Morgenschmerz nachlässt, und jag keiner einzelnen Abkürzung nach statt der Grundlagen. Mit den Übungen aufzuhören, bevor sich die Faszie angepasst hat, ist ein häufiger Grund, warum die Beschwerden zurückkommen. Wenn der Schmerz trotz Dehnen, Kräftigen und stützenden Schuhen mehrere Monate gleich bleibt oder schlimmer wird, braucht es eine medizinische Fachperson, nicht längeres Warten.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach mehreren Monaten regelmäßigen Dehnens und Kräftigens nicht besser geworden ist',
      'er von Woche zu Woche schlimmer wird und nicht nur gleich bleibt',
      'beide Fersen wehtun und die Morgensteifigkeit länger als 30\u00A0Minuten anhält oder andere Gelenke steif oder geschwollen sind',
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst',
      'Taubheit, Kribbeln oder Brennen dazukommen',
      'die Ferse gerötet ist, sich warm anfühlt oder du Fieber hast',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Die Erholung braucht Zeit, und das Schwierigste ist zu wissen, ob diese Zeit etwas bringt. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Fersenschmerzen ist das erste Ziel ein besserer Morgen: Schmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück. Jeden Morgen trägst du deinen Schmerz ein, und alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, wie sich die Zahlen bewegen.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Sobald das Morgenziel erreicht ist, geht es in die Erhaltung über, und das nächste Ziel rückt nach. Es gibt kein festes Enddatum, weil der Fuß das Tempo vorgibt.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn der Schmerz nach mehreren Monaten nicht besser wird, lass bei einer medizinischen Fachperson die Diagnose prüfen und sprich über die Optionen auf dieser Seite.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Wie lange dauert Plantarfasziitis',
  campaign: 'guide-pf-duration-de',
};
