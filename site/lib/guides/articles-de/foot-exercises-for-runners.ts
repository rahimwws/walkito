import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/foot-exercises-for-runners.ts (2026-10-18),
 * written around «Fußübungen für Läufer» and «Fußmuskulatur stärken Laufen».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts` and
 * the other articles-de pages. Figures, doses, qualifiers and sources are
 * identical to the English page after its fact-check. Same CITE keys and
 * media ids. The English link to /heel-pain-runners/ has no German version,
 * so the words stay without a link.
 */

export const RUNNERS_FOOT_EXERCISES_DE: Guide = {
  lang: 'de',
  page: 'runnersFootExercises',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fußübungen für Läufer: Routine, Dosierung und Studien',
  description:
    'Fußübungen für Läufer: eine kurze Routine für Fußmuskeln, Waden, Zehen und Gleichgewicht, mit Dosierung, Normwerten zum Fersenheben und Studienlage.',
  h1: 'Fußübungen für Läuferinnen und Läufer: eine kurze Routine und was die Forschung zeigt',
  lede:
    'Eine gute Fußroutine fürs Laufen trainiert vier Dinge: die kleinen Muskeln des Fußgewölbes (die Übung Kurzer Fuß), die Ausdauer von Wade und Soleus (Fersenheben), die Kraft der Zehen und das Gleichgewicht auf einem Bein. Sie dauert etwa 10\u00A0Minuten, zwei- bis fünfmal pro Woche, nach einem lockeren Lauf oder an einem Ruhetag. In einer Studie mit 118\u00A0Freizeitläuferinnen und -läufern hatten diejenigen ohne Fuß-Core-Programm eine 2,42-mal so hohe Wahrscheinlichkeit, sich innerhalb von 12\u00A0Monaten beim Laufen zu verletzen (Taddei und Kollegen, 2020). Das ist eine einzige Studie, also vielversprechend, aber noch nicht gesichert.',
  intro: [
    'Diese Seite ist für Läuferinnen und Läufer, die nicht verletzt sind oder ein leichtes Zwicken haben, mit dem sie weiterlaufen können. Wenn deine Ferse beim Laufen schon wehtut, kümmere dich zuerst um diese Fersenschmerzen beim Laufen. Den kompletten Aufbau jeder Fußübung, vom Sitzen bis zum Stand auf einem Bein, findest du unter [Fuß kräftigen: Übungen](/de/fuss-kraeftigen-uebungen/).',
  ],
  toc: true,
  takeaways: [
    'In einer Studie von 2020 mit 118\u00A0Freizeitläuferinnen und -läufern auf langen Strecken hatte die Gruppe ohne Fuß-Core-Training eine 2,42-mal so hohe Wahrscheinlichkeit, sich innerhalb von 12\u00A0Monaten beim Laufen zu verletzen. Der Effekt zeigte sich nach etwa vier bis acht Monaten Training (Taddei und Kollegen, 2020).',
    'In einer Studie von 2019 mit 57\u00A0Läuferinnen und Läufern wurden durch etwa zwei Monate Fußübungen, mindestens fünfmal pro Woche, alle gemessenen Fußmuskeln größer und kräftiger (Ridge und Kollegen, 2019).',
    'Gesunde Erwachsene schaffen im Median etwa 23 bis 24\u00A0einbeinige Fersenheber pro Bein, und 25 wurde als Richtwert für normal vorgeschlagen (Hebert-Losier und Kollegen, 2017; Lunsford und Perry, 1995).',
    'Ein selbst angeleitetes Kraftprogramm für Hüfte, Oberschenkel und Rumpf bei 720\u00A0Erstmarathonläuferinnen und -läufern senkte die Überlastungsverletzungen, die das Finish verhinderten, nicht: 7,1\u00A0% gegenüber 7,3\u00A0% (Toresdahl und Kollegen, 2020). Krafttraining allein hat dort keine Verletzungen verhindert.',
    'In Studien mit Langstreckenläuferinnen und -läufern verletzten sich je nach Studie zwischen 19,4\u00A0% und 79,3\u00A0% am Bein, und eine frühere Verletzung war einer der klarsten Risikofaktoren (van Gent und Kollegen, 2007).',
  ],
  sections: [
    {
      h2: 'Helfen Fußübungen Läufern, Verletzungen zu vermeiden?',
      keyFact: 'In einer Studie von 2020 mit 118\u00A0Freizeitläuferinnen und -läufern hatten diejenigen ohne Fuß-Core-Training eine 2,42-mal so hohe Wahrscheinlichkeit, sich innerhalb von 12\u00A0Monaten zu verletzen (Taddei und Kollegen).',
      paragraphs: [
        '**Eine gute Studie sagt ja, und es ist trotzdem nur eine Studie.** 2020 teilten Taddei und Kollegen in Brasilien 118\u00A0Freizeitläuferinnen und -läufer auf langen Strecken per Zufall in eine Fuß-Core-Gruppe (57\u00A0Personen) und eine Kontrollgruppe (61\u00A0Personen) ein. Die Fuß-Core-Gruppe trainierte etwa zwei Monate lang unter Anleitung die Fuß- und Sprunggelenkmuskeln und machte dann mit Betreuung aus der Ferne weiter. Alle meldeten ein Jahr lang jede Woche ihr Lauftraining und jede Verletzung.',
        'Über 12\u00A0Monate hatte die Kontrollgruppe eine 2,42-mal so hohe Wahrscheinlichkeit, sich beim Laufen zu verletzen. Der Unterschied zeigte sich nach vier bis acht Monaten Training, nicht in den ersten Wochen. Wessen Fußkraft am stärksten zunahm, der lief länger ohne Verletzung.',
        'Eine frühere, kleinere Studie desselben Teams mit 28\u00A0Läuferinnen und Läufern fand, dass etwa zwei Monate Fußtraining die kleinen Fußmuskeln vergrößerten und die Abdruckkraft beim Laufen steigerten (Taddei und Kollegen, 2020).',
        'Was das nicht zeigt: Beide Studien stammen von einer Forschungsgruppe und wurden mit erfahrenen Freizeitläuferinnen und -läufern gemacht, die zu Beginn nicht verletzt waren. Anfänger und Menschen, die schon Schmerzen hatten, waren nicht dabei. Ob die Ergebnisse für sie gelten, wissen wir also nicht.',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med): Kontrollgruppe mit 2,42-mal so hoher Wahrscheinlichkeit einer laufbedingten Verletzung (95-%-KI 1,98 bis 3,62), p = 0,035, einfach verblindete randomisierte Studie, Nachbeobachtung über 12\u00A0Monate. Taddei 2020 (Phys Ther Sport): einfach verblindete randomisierte Machbarkeitsstudie, 28\u00A0Läuferinnen und Läufer, Muskelvolumen per MRT, nach etwa zwei Monaten.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: 'Was gehört in die Fußroutine für Läufer?',
      paragraphs: [
        'Vier Teile mit je ein oder zwei Übungen. Die Dosierungen unten sind die Startdosen von Walkito. Mach die Übungen barfuß und hör für den Tag auf, wenn der Schmerz über 6 von 10 steigt.',
        {
          list: [
            '**Fuß-Core:** die Übung [Kurzer Fuß](/de/uebungen/kurzer-fuss/), erst im Stehen, dann auf einem Bein. Sie trainiert die kleinen Muskeln, die das Gewölbe halten.',
            '**Wade und Soleus:** Fersenheben mit gestrecktem Knie für die Wade und mit gebeugtem Knie für den Soleus, den tieferen Wadenmuskel.',
            '**Zehen:** Großzehenheben. Der große Zeh verlässt beim Abdruck als letzter Teil des Fußes den Boden.',
            '**Gleichgewicht:** Stand auf einem Bein, denn Laufen ist eine Folge von Landungen auf einem Bein.',
          ],
        },
        'Das folgt dem Gedanken hinter dem Programm von Taddei, das zuerst die kleinen Fußmuskeln trainierte und sie dann im Stehen und unter Last einsetzte. Eine Kopie dieses Programms ist es nicht. Mehr Übungen für die Zehen findest du unter [Zehen kräftigen: Übungen](/de/zehen-kraeftigen-uebungen/).',
      ],
      exercises: [
        {
          name: 'Kurzer Fuß im Stehen',
          evidence: { level: 'moderate', why: 'Teil des Fuß-Core-Programms in den Läuferstudien (Taddei 2020). Nicht allein auf Verletzungen getestet.' },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, beide Füße',
          often: '2 bis 5\u00A0Tage pro Woche',
          feel: 'Eine Anspannung unter dem Gewölbe, die Zehen bleiben locker',
          how: 'Stell dich mit dem Gewicht auf beide Füße. Zieh den Fußballen in Richtung Ferse, ohne die Zehen einzukrallen, sodass sich das Gewölbe ein wenig hebt. Halten, dann lösen. Wenn sich die Zehen in den Boden krallen, nimm etwas zurück.',
          stop: 'Ein Krampf, der nicht nachlässt, oder Schmerz über 6 von 10',
          media: 'short_foot_double',
          caption: 'Kurzer Fuß im Stehen: Das Gewölbe hebt sich, die Zehen bleiben flach',
          alt: 'Zwei nackte Füße auf dem Boden, die Gewölbe heben sich, die Zehen liegen flach',
        },
        {
          name: 'Kurzer Fuß auf einem Bein',
          evidence: { level: 'early', why: 'Die einbeinige Stufe beim Kurzen Fuß. Bei Läufern nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Sobald es im Stehen leicht geht',
          feel: 'Das Gewölbe arbeitet, während du das Gleichgewicht hältst',
          how: 'Stell dich auf einen Fuß, eine Hand nah an der Wand. Heb das Gewölbe wie oben an und halte es, während du balancierst. Das kommt dem näher, was der Fuß bei der Landung tut.',
          stop: 'Schmerz über 6 von 10, oder du verlierst bei jeder Wiederholung das Gleichgewicht',
          media: 'short_foot_single',
          caption: 'Kurzer Fuß auf einem Bein: Halte das Gewölbe, während du balancierst',
          alt: 'Eine Figur steht auf einem nackten Fuß mit angehobenem Gewölbe',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'early', why: 'Die Wadenausdauer war bei Sportlern mit Schienbeinkantensyndrom geringer (Madeley 2007). Nicht als Verletzungsvorbeugung bei Läufern getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: '2 bis 3\u00A0Tage pro Woche, nicht an zwei Tagen hintereinander',
          feel: 'Arbeit in den Waden und den Fußballen',
          how: 'Halt dich an einer Wand fest. Geh in etwa 3\u00A0Sekunden auf die Fußballen beider Füße hoch, das Gewicht eher über dem großen Zeh, und senk dich in 3\u00A0Sekunden wieder ab. Wenn das leicht geht, wechsel auf ein Bein. Mehr auf der Seite [Fersenheben](/de/uebungen/fersenheben/).',
          stop: 'Schmerz an Ferse oder Achillessehne über 6 von 10 oder am nächsten Morgen schlimmer',
          media: 'heel_raise_double',
          caption: 'Fersenheben: langsam hoch, langsam runter, Gewicht über dem großen Zeh',
          alt: 'Eine Figur hält sich an einer Wand fest und geht auf die Fußballen beider Füße hoch',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'early', why: 'Trainiert den Soleus bei gebeugtem Knie. Bei Läufern nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: '2 bis 3\u00A0Tage pro Woche',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Mit gebeugtem Knie leistet der Soleus den Großteil der Arbeit. Ein Rucksack oder Gewichte auf den Knien machen es schwerer, sobald es leicht geht.',
          stop: 'Schmerz über 6 von 10',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: Knie gebeugt, um den Soleus zu belasten',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Großzehenheben',
          evidence: { level: 'early', why: 'Eine MRT-Studie zeigt, dass es die kleinen Fußmuskeln aktiviert (Gooding 2016). Nicht allein in einer Studie mit klinischen Ergebnissen getestet.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: '2 bis 5\u00A0Tage pro Woche',
          feel: 'Anstrengung oben auf dem Fuß und unter dem Gewölbe',
          how: 'Lass die vier kleinen Zehen auf dem Boden und heb nur den großen Zeh an. Dann probier es umgekehrt: großer Zeh unten, kleine Zehen oben. Am Anfang reicht eine kleine Bewegung.',
          stop: 'Schmerz am Großzehengrundgelenk',
          media: 'big_toe_lift',
          caption: 'Großzehenheben: Nur der große Zeh geht nach oben',
          alt: 'Ein nackter Fuß, der große Zeh ist angehoben, die anderen Zehen liegen flach',
        },
        {
          name: 'Einbeinstand',
          evidence: { level: 'early', why: 'Teil der meisten Fußprogramme. Bei Läufern nicht allein als Verletzungsvorbeugung getestet.' },
          dose: '3-mal 30\u00A0Sekunden halten, jede Seite',
          often: '2 bis 5\u00A0Tage pro Woche',
          feel: 'Kleine Korrekturen in Fuß und Sprunggelenk',
          how: 'Stell dich auf einen Fuß, das Knie leicht gebeugt, nah an einer Wand. Wenn 30\u00A0Sekunden leicht gehen, schließ die Augen oder stell dich auf ein Kissen. Mehr auf der Seite [Einbeinstand](/de/uebungen/einbeinstand/).',
          stop: 'Du kannst dich nicht halten, ohne nach der Wand zu greifen',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Knie leicht gebeugt, eine Wand in Reichweite',
          alt: 'Eine Figur steht auf einem Bein neben einer Wand',
        },
      ],
      cites: [CITE.taddeiRRI, CITE.madeley, CITE.gooding],
    },
    {
      h2: 'Warum brauchen Läufer Kraft in Wade und Soleus?',
      keyFact: 'Bis etwa 7\u00A0Meter pro Sekunde entsteht schnelleres Laufen vor allem durch kräftigeres Abdrücken vom Boden, und Soleus und Gastrocnemius spielen bei diesem Abdruck eine Schlüsselrolle (Schache und Kollegen, 2014).',
      paragraphs: [
        '**Die Wadenmuskeln leisten beim Laufen einen großen Teil des Abdrucks.** Eine Übersichtsarbeit von 2014 dazu, wie die Beinmuskeln beim Laufen arbeiten, fand: Bei Geschwindigkeiten bis etwa 7\u00A0Meter pro Sekunde, was fast jedes Laufen in der Freizeit abdeckt, werden Läuferinnen und Läufer vor allem schneller, indem sie sich kräftiger vom Boden abdrücken und so einen längeren Schritt machen. Die beiden Wadenmuskeln, Soleus und Gastrocnemius, spielen bei diesem Abdruck eine besonders wichtige Rolle (Schache und Kollegen, 2014).',
        'Der Soleus liegt unter dem Gastrocnemius und arbeitet am meisten bei gebeugtem Knie. Deshalb enthält die Routine neben dem Fersenheben im Stehen auch eines im Sitzen mit gebeugtem Knie. Wenn sich deine Waden nach dem Laufen oft fest anfühlen, findest du unter [verspannte Waden](/de/verspannte-waden/) Dehnungen und das [Soleus-Dehnen](/de/uebungen/soleus-dehnen/).',
        'Die Wadenausdauer spielt auch bei Schienbeinschmerzen eine Rolle. In einer Fall-Kontroll-Studie schafften Sportler mit Schienbeinkantensyndrom bis zur Ermüdung weniger Fersenheber als Sportler ohne (Madeley und Kollegen, 2007). Das zeigt einen Zusammenhang, nicht, dass schwache Waden ein Schienbeinkantensyndrom verursachen. Mehr unter [Schienbeinkantensyndrom: Übungen](/de/schienbeinkantensyndrom-uebungen/).',
      ],
      cites: [CITE.schache, CITE.madeley],
    },
    {
      h2: 'Wie viele einbeinige Fersenheber sollte ein Läufer schaffen?',
      keyFact: 'Bei 566\u00A0Erwachsenen im Alter von 20 bis 81\u00A0Jahren lag der Median bei 24\u00A0einbeinigen Fersenhebern rechts und 23 links (Hebert-Losier und Kollegen, 2017).',
      paragraphs: [
        'Es gibt keinen eigenen Normwert für Läufer. Nimm deshalb die allgemeinen Werte für Erwachsene als Untergrenze. In einer Studie mit 566\u00A0Erwachsenen lag der Median bei 24\u00A0einbeinigen Fersenhebern mit dem rechten Bein und 23 mit dem linken, im Takt von einem Schlag hoch und einem Schlag runter bei 60\u00A0Schlägen pro Minute. Die Zahl sinkt mit dem Alter, und aktivere Menschen schafften mehr (Hebert-Losier und Kollegen, 2017). Eine ältere Studie schlug 25 als Richtwert für normal vor (Lunsford und Perry, 1995).',
        'Vergleich auch deine Beine. Ein Unterschied von mehr als 10\u00A0Prozent zwischen den Seiten ist die übliche Schwelle für einen bedeutsamen Unterschied in der Reha der Beine (Silbernagel und Kollegen, 2010). Das vollständige Protokoll, eine Version für zu Hause und einen Rechner findest du auf der Seite [Fersenheben-Test](/de/fersenheben-test/).',
      ],
      table: {
        caption: 'Median der einbeinigen Fersenheber nach Alter, mäßige Aktivität (Hebert-Losier 2017)',
        head: ['Alter', 'Männer', 'Frauen'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
        ],
      },
      after: [
        'Das sind Modellschätzungen für einen mäßig aktiven Erwachsenen mit einem Body-Mass-Index von 24,2, keine Grenzen für Bestehen oder Durchfallen. Teste dich alle paar Wochen neu und achte auf den Verlauf und den Unterschied zwischen links und rechts.',
      ],
      sourceNote: 'Hebert-Losier 2017, Tabelle 4: Modellschätzungen für einen BMI von 24,2 und Aktivitätsniveau 4, gemittelt über beide Beine, gerundet. Lunsford und Perry 1995: 203\u00A0Erwachsene im Alter von 20 bis 59\u00A0Jahren.',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Wann und wie oft solltest du als Läufer Fußübungen machen?',
      paragraphs: [
        '**Keine Studie hat verglichen, ob Fußübungen nach einem Lauf oder an einem Ruhetag besser sind.** Der Zeitplan unten ist also praktisch gedacht, nicht getestet.',
        {
          list: [
            '**Nach einem lockeren Lauf oder an einem Ruhetag.** Die Übungen ermüden die kleinen Fußmuskeln. Sie passen deshalb besser nach einem kurzen, lockeren Lauf als vor einer harten Einheit oder einem langen Lauf.',
            '**Nicht direkt vor Tempotraining oder einem Wettkampf.** Dafür willst du frische Waden.',
            '**Fersenheben an 2 bis 3\u00A0Tagen pro Woche,** mit einem freien Tag dazwischen, wie bei jedem Krafttraining.',
            '**Fuß-Core, Zehen und Gleichgewicht an 2 bis 5\u00A0Tagen pro Woche.** In der Studie von 2019 machten die Läuferinnen und Läufer mindestens fünfmal pro Woche Fußübungen und wurden in etwa zwei Monaten kräftiger (Ridge und Kollegen, 2019).',
          ],
        },
        'Gib dir Zeit. Die Muskelgröße veränderte sich in den Studien innerhalb von etwa zwei Monaten, aber weniger Verletzungen zeigten sich in der Studie von Taddei erst nach vier bis acht Monaten. Eine Routine, die du monatelang durchhältst, bringt mehr als eine harte, die du nach drei Wochen aufgibst.',
      ],
      table: {
        caption: 'Eine Beispielwoche für Läuferinnen und Läufer',
        head: ['Tag', 'Lauf', 'Fußroutine'],
        rows: [
          ['Mo', 'Ruhetag', 'Ganze Routine'],
          ['Di', 'Tempo', 'Keine'],
          ['Mi', 'Locker', 'Fuß-Core, Zehen, Gleichgewicht'],
          ['Do', 'Ruhetag', 'Ganze Routine'],
          ['Fr', 'Locker', 'Fuß-Core, Gleichgewicht'],
          ['Sa', 'Lang', 'Keine'],
          ['So', 'Locker oder Ruhetag', 'Ganze Routine'],
        ],
      },
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
    },
    {
      h2: 'Kannst du Fußübungen machen, wenn es irgendwo zwickt?',
      paragraphs: [
        'Meist ja, wenn das Zwicken leicht und stabil ist und du die Übungen anpasst. Es gilt dieselbe Regel wie überall auf dieser Website: Etwas Unbehagen ist in Ordnung, aber hör für den Tag auf, wenn der Schmerz über 6 von 10 steigt, und mach es leichter, wenn es am nächsten Morgen schlimmer ist.',
        'Einige Beschwerden ändern den Plan:',
        {
          list: [
            '**Fersenschmerz bei den ersten Schritten am Morgen** deutet auf eine Plantarfasziitis hin. Fersenheben und Dehnungen sind dann wichtiger: siehe [Plantarfasziitis: Übungen](/de/plantarfasziitis-uebungen/).',
            '**Schmerz hinten an der Ferse oder in der Achillessehne** braucht einen langsameren Aufbau für die Wade, oft mit langsamem Fersenabsenken: siehe [Achillessehnenentzündung: Übungen](/de/achillessehnenentzuendung-uebungen/).',
            '**Schmerz entlang der Innenseite des Schienbeins** kann ein Schienbeinkantensyndrom sein: siehe [Schienbeinkantensyndrom: Übungen](/de/schienbeinkantensyndrom-uebungen/).',
            '**Schmerz an einer Stelle eines Knochens**, der mit jedem Lauf zunimmt, ist ein Warnzeichen für einen Ermüdungsbruch. Hör mit dem Laufen auf und lass es ärztlich abklären.',
          ],
        },
      ],
    },
    {
      h2: 'Was Fußübungen nicht leisten',
      paragraphs: [
        '**Sie ersetzen kein vernünftiges Training.** In Studien mit Langstreckenläuferinnen und -läufern verletzten sich je nach Studie zwischen 19,4\u00A0% und 79,3\u00A0% am Bein, und eine lange Wochenstrecke bei Männern sowie eine frühere Verletzung gehörten zu den klarsten Risikofaktoren (van Gent und Kollegen, 2007). In einer dänischen Studie mit 874\u00A0Laufanfängerinnen und -anfängern schienen diejenigen, die ihre Wochenstrecke um mehr als 30\u00A0% steigerten, anfälliger für einige Überlastungsverletzungen zu sein, auch wenn das Ergebnis die statistische Signifikanz knapp verfehlte (Nielsen und Kollegen, 2014).',
        '**Krafttraining ist kein automatischer Schutz.** In einer Studie mit 720\u00A0Erstmarathonläuferinnen und -läufern beim New-York-City-Marathon senkte ein selbst angeleitetes 10-Minuten-Programm für Hüfte, Oberschenkel und Rumpf, dreimal pro Woche über etwa drei Monate, die Überlastungsverletzungen nicht, die das Finish verhinderten: 7,1\u00A0% in der Kraftgruppe gegenüber 7,3\u00A0% bei den anderen (Toresdahl und Kollegen, 2020). Dieses Programm trainierte die Füße nicht, aber es erinnert daran, dass eine Routine auf dem Papier noch kein Ergebnis ist.',
        '**Die Form des Gewölbes ändern sie nur wenig.** In einer kleinen Studie mit 21\u00A0Personen ohne Kontrollgruppe sank das Gewölbe nach einem Monat Training mit dem Kurzen Fuß um 1,8\u00A0mm weniger ab (Mulligan und Cook, 2013). Rechne mit einem kräftigeren, stabileren Fuß, nicht mit einem neuen Gewölbe. Schuhe und Barfußlaufen sind eine eigene Frage, die unter [Barfußschuhe](/de/barfussschuhe/) behandelt wird.',
      ],
      sourceNote: 'Toresdahl 2020: randomisiert, 720\u00A0Teilnehmende, relatives Risiko 0,97 (95-%-KI 0,57 bis 1,63), p = 0,90. Das Programm zielte auf Quadrizeps, Hüftabduktoren und Rumpf, mit schriftlicher Anleitung und Videoanleitung.',
      cites: [CITE.vanGent, CITE.nielsen, CITE.toresdahl, CITE.mulliganCook],
    },
  ],
  faq: [
    {
      q: 'Welche Fußübungen sind für Läufer am besten?',
      cites: [CITE.taddeiRRI],
      a: 'Eine kurze Auswahl, die vier Dinge abdeckt: Kurzer Fuß für das Gewölbe, Fersenheben mit gestrecktem und mit gebeugtem Knie für Wade und Soleus, Großzehenheben für den Abdruck und Einbeinstand. Ein Fuß-Core-Programm, das auf derselben Idee aufbaut, senkte in einer Studie mit 118\u00A0Läuferinnen und Läufern die Laufverletzungen.',
    },
    {
      q: 'Beugen Übungen zur Fußkräftigung Laufverletzungen vor?',
      cites: [CITE.taddeiRRI],
      a: 'Vielleicht. In einer Studie von 2020 mit 118\u00A0Freizeitläuferinnen und -läufern hatte die Gruppe ohne Fuß-Core-Training eine 2,42-mal so hohe Wahrscheinlichkeit, sich innerhalb von 12\u00A0Monaten zu verletzen, und der Effekt zeigte sich nach vier bis acht Monaten. Es ist eine einzige Studie von einer Forschungsgruppe. Die Belege sind also vielversprechend, aber noch nicht gesichert.',
    },
    {
      q: 'Wie oft sollten Läufer Fußübungen machen?',
      cites: [CITE.ridgeMinimalist],
      a: 'An 2 bis 5\u00A0Tagen pro Woche für Fuß-Core, Zehen und Gleichgewicht und an 2 bis 3\u00A0Tagen pro Woche für Fersenheben, mit einem freien Tag dazwischen. In einer Studie von 2019 wurden Läuferinnen und Läufer, die mindestens fünfmal pro Woche Fußübungen machten, in etwa zwei Monaten kräftiger.',
    },
    {
      q: 'Sollte ich Fußübungen vor oder nach dem Laufen machen?',
      a: 'Nach einem lockeren Lauf oder an einem Ruhetag ist die praktische Wahl, weil die Übungen die kleinen Fußmuskeln ermüden. Keine Studie hat den Zeitpunkt verglichen. Mach keine ganze Routine direkt vor Tempotraining, einem langen Lauf oder einem Wettkampf, denn dafür willst du frische Füße und Waden.',
    },
    {
      q: 'Wie viele einbeinige Fersenheber sollte ein Läufer schaffen?',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry],
      a: 'Es gibt keine eigene Zahl für Läufer. Gesunde Erwachsene schaffen im Median etwa 23 bis 24 pro Bein in einem festen Takt, und 25 wurde als normal vorgeschlagen. Viele aktive Läuferinnen und Läufer schaffen mehr. Einen Unterschied von mehr als 10\u00A0Prozent zwischen den Beinen solltest du im Blick behalten. Auf der Seite zum Fersenheben-Test findest du das vollständige Protokoll.',
    },
    {
      q: 'Wie lange dauert es, bis Fußübungen etwas bringen?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'Die Fußmuskeln wurden in den Studien in etwa zwei Monaten größer und kräftiger. Weniger Verletzungen zeigten sich in der Läuferstudie später, nach vier bis acht Monaten. Plane, eine kurze Routine über Monate beizubehalten, nicht über Wochen.',
    },
    {
      q: 'Kann ich weiterlaufen, während ich Fußübungen mache?',
      a: 'Ja. Die Routine ist als Ergänzung zu deinem Lauftraining gedacht. Wenn es irgendwo zwickt, hör mit einer Übung für den Tag auf, sobald der Schmerz über 6 von 10 steigt, und lauf locker, wenn der Schmerz am nächsten Morgen schlimmer ist. Schmerz, der mit jedem Lauf zunimmt oder an einer Stelle eines Knochens sitzt, solltest du ärztlich abklären lassen.',
    },
    {
      q: 'Kräftigen Barfußlaufen oder Minimalschuhe die Füße?',
      cites: [CITE.ridgeMinimalist],
      a: 'Gehen in Minimalschuhen baute in einer Studie von 2019 mit Läuferinnen und Läufern die Fußkraft etwa so gut auf wie Übungen, bei langsamer, schrittweiser Steigerung. Die Laufschuhe schnell zu wechseln ist etwas anderes und hat eigene Risiken. Steigere dich also langsam, wenn du es ausprobierst.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Schmerz an einer Stelle eines Knochens in Fuß oder Schienbein sitzt und mit jedem Lauf schlimmer wird, denn das kann ein Ermüdungsbruch sein',
      'du den Fuß nicht belasten kannst oder beim Gehen hinkst',
      'der Schmerz mit einem Knall, einem Sturz oder einem Umknicken begann',
      'Fuß oder Sprunggelenk geschwollen, gerötet oder warm sind oder du Fieber hast',
      'du Taubheit, Kribbeln oder Brennen im Fuß spürst',
      'Ferse oder Fuß nachts oder in Ruhe wehtun',
      'der Schmerz über zwei bis drei Wochen immer schlimmer wird, obwohl du lockerer läufst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß mit den Übungen von dieser Seite: Kurzer Fuß vom Sitzen bis auf einem Bein, Fersenheben, Großzehenheben, Zehenspreizen und Einbeinstand. Sie plant dein Lauftraining nicht. Behalte also deinen eigenen Trainingsplan und leg die Einheiten auf lockere Tage.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du, wie sich deine Füße anfühlen, und der Plan passt sich daran an. Ein kurzer Test alle 14\u00A0Tage prüft Fersenheben, Halten des Gewölbes und Gleichgewicht, links gegen rechts. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['footStrengthening', 'calfRaiseTest', 'shinSplints'],
  crumb: 'Fußübungen für Läufer',
  campaign: 'guide-foot-exercises-for-runners-de',
};
