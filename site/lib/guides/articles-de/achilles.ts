import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const ACHILLES_DE: Guide = {
  lang: 'de',
  page: 'achilles',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Achillessehnenentzündung: Übungen, exzentrisch und mehr',
  description:
    'Übungen bei Achillessehnenentzündung mit Dosis: exzentrisches Fersenabsenken, Heavy Slow Resistance, Ansatz oder Mittelteil der Sehne und wann du aufhörst.',
  h1: 'Übungen bei Achillessehnenentzündung: exzentrisches Fersenabsenken, Dosis und was die Forschung sagt',
  lede:
    'Übungen bei Achillessehnenentzündung wirken am besten, wenn du das Fersenabsenken als Krafttraining verstehst, nicht als Dehnung. Die klinische Leitlinie von 2024 gibt Übungen ihre beste Bewertung, **A**, und eine Netzwerk-Metaanalyse von 2021 mit 29\u00A0Studien fand kein Protokoll, das klar besser war als ein anderes. Entscheidend ist, die Sehne über Wochen gleichmäßig zu belasten.',
  intro: [
    'Diese Seite geht bei diesen Übungen in die Tiefe. Wenn dein Schmerz unter dem Fuß sitzt und nicht hinten an der Ferse, suchst du eher [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/). Die Seite zu [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) fasst beides zusammen. Wenn der Schmerz am Schienbein entlang sitzt statt an der Ferse, lies [Übungen beim Schienbeinkantensyndrom](/de/schienbeinkantensyndrom-uebungen/). Wenn er nur nach einem langen Tag auf den Beinen kommt und nicht beim Laufen, lies [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/). Die meisten verwenden „Achillessehnenentzündung“ und „Tendinopathie“ gleichbedeutend. Aktuelle Leitlinien sprechen von „Tendinopathie“, weil das Problem meist eine Frage der Belastung ist und keine reine Entzündung. Diese Seite sagt „Achillessehnenentzündung“ in den Überschriften und „Tendinopathie“ dort, wo die Leitlinie es tut.',
  ],
  takeaways: [
    'Die klinische Leitlinie von 2024 bewertet Übungen (jede Art, die die Sehne belastet) bei Tendinopathie im Mittelteil der Achillessehne mit **A**, ihrer besten Bewertung (Chimenti und Kollegen, 2024).',
    'Eine Netzwerk-Metaanalyse von 29\u00A0randomisierten Studien fand nach 3 oder 12\u00A0Monaten keinen klinisch relevanten Unterschied zwischen den Übungsansätzen (van der Vlist und Kollegen, 2021).',
    'In einer Studie mit 58\u00A0Personen brachte Heavy Slow Resistance an 3\u00A0Tagen pro Woche genauso gute Ergebnisse wie exzentrisches Training zweimal am Tag (Beyer und Kollegen, 2015).',
    'Bei Schmerzen am Ansatz der Achillessehne (direkt am Fersenbein) sollte das Fersenabsenken auf Bodenhöhe bleiben und nicht unter die Stufenkante gehen, weil eine tiefe Dorsalflexion, also das Beugen des Sprunggelenks, bei dem die Zehen Richtung Schienbein kommen, die Sehne gegen den Knochen drückt (Jonsson und Kollegen, 2008).',
    'Schmerz bei Belastung bis etwa 5/10, der bis zum nächsten Morgen abklingt und nicht von Woche zu Woche schlimmer wird, war die Regel in einer randomisierten Studie, in der Sport während der Reha weiter erlaubt war (Silbernagel und Kollegen, 2007).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Entzündung oder Tendinopathie, und ändert das die Übungen?',
      paragraphs: [
        '„Entzündung“ klingt nach einem entzündlichen Prozess. „Tendinopathie“ beschreibt eine Sehne, die sich unter Belastung verändert hat, oft verdickt, ohne dass eine Entzündung der Hauptgrund ist. Die Leitlinie von 2024 spricht von „Tendinopathie“. Für die Übungen ändert der Name nichts an dem, was du machst. Beide beschreiben dasselbe Problem: eine Sehne, die bei Belastung wehtut, meist ein paar Zentimeter über dem Fersenbein (Mittelteil) oder direkt dort, wo sie ansetzt (insertional, am Ansatz).',
        'Wo die Sehne wehtut, ändert die Übungen aber schon. Diese Unterscheidung kommt weiter unten.',
      ],
      cites: [CITE.achillesGuideline],
    },
    {
      h2: 'Was ist exzentrisches Fersenabsenken, und warum ist es keine Dehnung?',
      paragraphs: [
        'Exzentrisches Fersenabsenken ist eine Kraftübung, keine Dehnung für die Beweglichkeit. Du kommst auf beiden Füßen hoch, verlagerst das Gewicht auf die schmerzende Seite und senkst dich langsam auf einem Fuß ab, wobei die Ferse unter die Stufenkante sinkt. Die Absenkphase ist die exzentrische Kontraktion: Der Wadenmuskel wird unter Last länger. Dieses kontrollierte Absenken baut über Wochen die Belastbarkeit der Sehne auf.',
        'Der häufigste Fehler ist, unten zu verharren wie bei einer Wadendehnung. Dann wird daraus eine statische Dehnung, und das ist ein anderer Reiz. Es geht um das langsame Absenken unter Last. Drei Sekunden nach unten, und der Muskel arbeitet die ganze Zeit.',
        'In der Alfredson-Studie von 1998 machten 15\u00A0Sportler mit lange bestehenden Schmerzen im Mittelteil der Achillessehne drei Monate lang zweimal am Tag, 7\u00A0Tage pro Woche, exzentrisches Fersenabsenken, mit gestrecktem und gebeugtem Knie. Alle 15 kehrten auf ihr früheres Laufniveau zurück. Eine kleine Studie ohne Kontrollgruppe, aber sie hat eine ganze Forschungsrichtung angestoßen.',
      ],
      exercises: [
        {
          name: 'Exzentrisches Fersenabsenken (gestrecktes Knie)',
          evidence: { level: 'strong', why: 'Das ursprüngliche Alfredson-Protokoll, gestützt durch die Leitlinie von 2024, die Übungen mit A bewertet.' },
          dose: 'Alfredson: 3 x 15, zweimal täglich, drei Monate. Walkito: 3 x 10, jedes Bein',
          how: 'Stell dich auf eine Stufenkante. Komm auf beiden Füßen hoch, verlagere das Gewicht auf das schmerzende Bein und senk dich über drei Sekunden langsam ab. Die Ferse sinkt unter die Stufe. Mit beiden Füßen wieder hoch. Das gestreckte Knie zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel.',
          often: 'Im Alfredson-Protokoll zweimal täglich. Walkito: Krafttage.',
          feel: 'Harte Arbeit in der Wade beim Absenken, keine Dehnung unten',
          stop: 'Schmerz über 5/10, der bis zum nächsten Morgen nicht abklingt, oder Schmerz, der von Woche zu Woche schlimmer wird',
          media: 'heel_drop_straight',
          caption: 'Exzentrisches Fersenabsenken: auf beiden Füßen hoch, auf einem langsam runter, Ferse unter die Stufe',
          alt: 'Eine Figur auf einer Stufe senkt mit gestrecktem Knie eine Ferse unter die Stufenkante, Wade und Achillessehne sind hervorgehoben',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'Wirkt Heavy Slow Resistance genauso gut wie exzentrisches Absenken?',
      keyFact: 'Eine Studie von 2015 mit 58\u00A0Personen fand, dass Heavy Slow Resistance an drei Tagen pro Woche genauso gute, anhaltende Ergebnisse brachte wie das klassische exzentrische Protokoll zweimal am Tag (Beyer und Kollegen, 2015).',
      paragraphs: [
        'Ja, nach heutiger Studienlage. Eine Studie von 2015 mit 58\u00A0Personen verglich Heavy Slow Resistance (HSR, schweres, langsames Krafttraining) an 3\u00A0Tagen pro Woche mit dem klassischen exzentrischen Protokoll zweimal am Tag. Das Fazit: „Sowohl klassisches exzentrisches Training als auch HSR führen bei Patienten mit Achillessehnen-Tendinopathie zu positiven, gleich guten, anhaltenden klinischen Ergebnissen.“',
        'Eine Netzwerk-Metaanalyse von 2021 mit 29\u00A0Studien fand nach 3 oder 12\u00A0Monaten keinen klinisch relevanten Unterschied zwischen den aktiven Übungsansätzen. Alle waren besser, als nichts zu tun. Keine Studie hatte ein geringes Risiko für Verzerrung. Die Autoren empfahlen, mit einem Übungsprogramm für die Wadenmuskeln zu beginnen, weil es wenig kostet und kaum schadet.',
        'Die Form des Protokolls zählt weniger als die gleichmäßige Belastung der Sehne. Exzentrisches Absenken ist am besten untersucht, HSR wirkt genauso und braucht weniger Einheiten pro Woche, und beides ist ein guter Startpunkt. Dieselbe Logik der Wadenkräftigung bei Plantarfasziitis findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
    {
      h2: 'Welche Übungen helfen bei Achillessehnenentzündung, und wie viel solltest du machen?',
      paragraphs: [
        'Die Übungen unten steigern sich von wenig zu viel Last, beginnend mit Fersenheben im Sitzen, Stufe für Stufe nach oben. Das sind die Startdosen von Walkito neben den Protokollen aus der Forschung. [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
        'Bei Schmerzen am Ansatz der Achillessehne solltest du jede Übung, die eine Stufe benutzt, stattdessen auf Bodenhöhe machen. Diese Anpassung wird im Abschnitt zum Ansatz unten erklärt.',
      ],
      table: {
        caption: 'Übungen bei Achillessehnenentzündung: Dosen aus der Forschung und Startdosen von Walkito',
        head: ['Übung', 'Dosis im Studienprotokoll', 'Startdosis in Walkito', 'Evidenz'],
        rows: [
          ['Fersenheben im Sitzen', 'Silbernagel Phase 1: 3 x 10, im Sitzen', '3 x 10, beide Füße', '**Stark**: entspricht dem veröffentlichten Protokoll für Phase 1'],
          ['Fersenheben beidbeinig', 'Silbernagel Phase 1: 3 x 10-15, im Stehen', '3 x 10, beide Füße', '**Stark**: entspricht direkt Phase 1'],
          ['Fersenheben mit Halten (isometrisch)', 'Die Leitlinie von 2024 nennt isometrisches Training als wirksam; in der Praxis werden 3-5 x 30-45\u00A0s vorgeschlagen', '3 x 20\u00A0s, beide Füße', '**Mittel**: Die Leitlinie schließt isometrische Belastung ein; keine randomisierte Studie nur mit isometrischem Training an der Achillessehne'],
          ['Exzentrisches Fersenabsenken (gestrecktes Knie)', 'Alfredson: 3 x 15, 2-mal am Tag, 7\u00A0Tage pro Woche, drei Monate', '3 x 10, jedes Bein', '**Stark**: das ursprüngliche Protokoll; Bewertung A der Leitlinie'],
          ['Wadendehnung (gestrecktes Knie)', 'Nicht Teil der Belastungsstudien; eine Ergänzung für die Beweglichkeit', '3 x 30\u00A0s halten, jedes Bein', '**Vorläufig**: als Beweglichkeit gedacht, nicht als Belastungsübung für die Achillessehne'],
          ['Soleusdehnung (gebeugtes Knie)', 'Nicht Teil der Belastungsstudien; eine Ergänzung für die Beweglichkeit', '3 x 30\u00A0s halten, jedes Bein', '**Vorläufig**: derselbe Vorbehalt; bei Schmerzen am Ansatz kein tiefes Dehnen'],
        ],
      },
      exercises: [
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'strong', why: 'Entspricht der Dosis von Phase 1 in Silbernagel 2007. Die Bewertung A der Leitlinie gilt für alle Arten der Sehnenbelastung.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Setz dich hin, die Füße stehen flach. Drück dich über die Ballen beider Füße nach oben. Hände auf den Knien geben zusätzlichen Widerstand. Ein Einstieg mit wenig Last, wenn Übungen im Stehen zu schmerzhaft sind.',
          often: 'Krafttage, solange es dein Level ist',
          feel: 'Arbeit in den Waden, kaum Dehnung an der Sehne',
          stop: 'Schmerz über 5/10, der bis zum nächsten Morgen nicht abklingt',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen hoch, die Hände geben Last',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'strong', why: 'Entspricht direkt Phase 1 in Silbernagel 2007. Bewertung A der Leitlinie.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich über drei Sekunden langsam ab. Beide Füße teilen sich die Last.',
          often: 'Krafttage, sobald sich das Fersenheben im Sitzen leicht anfühlt',
          feel: 'Die Waden arbeiten zusammen, mit einem leichten Zug an der Sehne',
          stop: 'Schmerz über 5/10, der bis zum nächsten Morgen nicht abklingt',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Halten (isometrisch)',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2024 nennt isometrisches Training als eine der wirksamen Arten der Sehnenbelastung. Keine randomisierte Studie nur mit isometrischem Training an der Achillessehne.' },
          dose: '3-mal 20\u00A0Sekunden halten, beide Füße (Forschung: 3-5 x 30-45\u00A0Sekunden)',
          how: 'Komm auf beiden Füßen auf die Zehen und bleib oben ruhig. Sink nicht ab. Das ist isometrisches Halten, der Muskel arbeitet also, ohne sich zu bewegen. So wird die Sehne ohne das Auf und Ab belastet, das Achillessehnenschmerzen in einer frühen Phase reizen kann.',
          often: 'Kann in frühen, gereizten Phasen täglich genutzt werden, bevor du zum vollen exzentrischen Training übergehst',
          feel: 'Die Waden arbeiten, um ruhig zu bleiben, ein dumpfer Schmerz in der Sehne ist in Ordnung',
          stop: 'Schmerz über 5/10, der bis zum nächsten Morgen nicht abklingt',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hochkommen, dann oben ruhig bleiben',
          alt: 'Eine Figur hält sich auf den Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Exzentrisches Fersenabsenken (gestrecktes Knie)',
          evidence: { level: 'strong', why: 'Das ursprüngliche Alfredson-Protokoll von 1998. Bewertung A der Leitlinie von 2024.' },
          dose: 'Alfredson: 3 x 15, zweimal täglich. Walkito: 3 x 10, jedes Bein',
          how: 'Stell dich auf eine Stufenkante. Komm auf beiden Füßen hoch, verlagere das Gewicht auf das schmerzende Bein und senk dich mit gestrecktem Knie langsam ab. Die Ferse sinkt unter die Stufe. Mit beiden Füßen zurück nach oben.',
          often: 'Im ursprünglichen Protokoll zweimal täglich. Walkito: Krafttage.',
          feel: 'Harte Arbeit in der Wade beim Absenken',
          stop: 'Schmerz über 5/10, der bis zum nächsten Morgen nicht abklingt',
          media: 'heel_drop_straight',
          caption: 'Exzentrisches Fersenabsenken: auf beiden hoch, auf einem langsam runter, Knie gestreckt',
          alt: 'Eine Figur auf einer Stufe senkt mit gestrecktem Knie eine Ferse unter die Kante, die Achillessehne ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          evidence: { level: 'early', why: 'Nicht Teil der Belastungsstudien zur Achillessehne. Eine Ergänzung für die Beweglichkeit. Bei Schmerzen am Ansatz kein tiefes Dehnen.' },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die Ferse unten und die Hüfte nach vorn. Nicht federn. Bei Schmerzen am Ansatz bleib sanft und hör auf, wenn es den Ansatz reizt.',
          often: 'Nach Einheiten mit Belastung',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Jeder stechende Zug am Ansatz am Fersenbein',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (gebeugtes Knie)',
          evidence: { level: 'early', why: 'Nicht Teil der Belastungsstudien zur Achillessehne. Eine Ergänzung für die Beweglichkeit. Bei Schmerzen am Ansatz keine tiefe Dorsalflexion.' },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand, dann beug das hintere Knie, bis die Dehnung tiefer wandert, nahe der Ferse. Der Soleus lässt nur mit gebeugtem Knie los.',
          often: 'Nach Einheiten mit Belastung',
          feel: 'Eine Dehnung nahe der Ferse',
          stop: 'Jeder stechende Zug am Ansatz der Achillessehne',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis die Dehnung tiefer wandert',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.alfredson, CITE.silbernagel, CITE.achillesGuideline],
    },
    {
      h2: 'Wie viel Schmerz ist bei Übungen für die Achillessehne in Ordnung?',
      keyFact: 'In einer Studie mit 38\u00A0Personen verbesserten sich diejenigen, die mit Schmerz bis etwa 5 von 10 weiterliefen, der bis zum Morgen abklang, nach zwölf Monaten genauso wie diejenigen, die zuerst pausierten (Silbernagel und Kollegen, 2007).',
      paragraphs: [
        'In Silbernagel 2007 wurden 38\u00A0Personen mit Achillessehnenschmerzen in zwei Gruppen aufgeteilt. Eine lief und sprang während der Reha weiter, nach der Regel, dass der Schmerz während und nach der Belastung bis etwa **5 von 10** gehen durfte, solange er bis zum nächsten Morgen auf sein übliches Niveau zurückging und nicht von Woche zu Woche schlimmer wurde. Die andere Gruppe pausierte zuerst. Beide verbesserten sich nach 12\u00A0Monaten deutlich, ohne Unterschied zwischen ihnen.',
        'Das ist eine andere Schwelle als die Stoppregel bei 6/10 auf der Seite zur [Plantarfasziitis](/de/plantarfasziitis-uebungen/). Das ist die Grenze, die Walkito bei Fersenschmerzen verwendet. Die 5/10 stammen aus einer einzigen Studie und sind kein allgemeiner Standard, aber es ist das am häufigsten zitierte Schmerzmodell in der Reha der Achillessehne.',
        'Etwas Schmerz bei Belastung ist zu erwarten und war in der Studie in Ordnung. Schmerz, der über Nacht nicht abklingt, von Woche zu Woche schlimmer wird oder plötzlich stechend einschießt, ist es nicht.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Sitzt dein Schmerz im Mittelteil der Sehne oder am Fersenbein, und warum ändert das die Übung?',
      figure: { id: 'achilles', caption: 'Schmerzen an der Achillessehne sitzen meist an einer von zwei Stellen: im Mittelteil der Sehne oder dort, wo sie am Fersenbein ansetzt.', alt: 'Fuß und Sprunggelenk von der Seite: die Achillessehne von der Wade bis zur Rückseite des Fersenbeins, mit einer roten Stelle im Mittelteil der Sehne.' },
      keyFact: 'In einer Pilotstudie mit 27\u00A0Personen mit Schmerzen am Ansatz der Achillessehne brachte exzentrische Belastung nur auf Bodenhöhe, ohne tiefe Dorsalflexion, in 67\u00A0% der Fälle gute Ergebnisse (Jonsson und Kollegen, 2008).',
      paragraphs: [
        'Eine Tendinopathie im Mittelteil der Achillessehne sitzt im Körper der Sehne, meist 2 bis 6\u00A0Zentimeter über dem Fersenbein. Klassisches exzentrisches Absenken und Heavy Slow Resistance haben hier ihre besten Belege. Fersenabsenken über eine Stufenkante passt bei Schmerzen im Mittelteil.',
        'Eine insertionale Tendinopathie der Achillessehne ist Schmerz direkt am Übergang von Sehne zu Knochen. In einer Pilotstudie von 2008 mit 27\u00A0Personen (34\u00A0Sehnen) mit chronischen Schmerzen am Ansatz berichtete ein angepasstes Protokoll mit exzentrischer Belastung nur auf Bodenhöhe, ohne Dorsalflexion über die Neutralstellung hinaus, in 67\u00A0% der Fälle gute Ergebnisse. Eine tiefe Dorsalflexion drückt die Sehne gegen das Fersenbein und reizt den Ansatz.',
        'Wenn dein Schmerz hinten am Fersenbein sitzt und nicht höher in der Sehne, mach alles Fersenheben und Fersenabsenken auf Bodenhöhe. Geh nicht unter die Stufenkante. Verzichte aus demselben Grund auf kräftiges Dehnen. Das ist die wichtigste Anpassung in Programmen für die Achillessehne, und die, die am häufigsten übersehen wird.',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Wie oft solltest du einbeiniges Fersenheben schaffen?',
      paragraphs: [
        'Die Leitlinie von 2024 nennt den einbeinigen Ausdauertest mit Fersenheben als Teil der empfohlenen Art, die Wadenkraft zu messen und die Erholung zu verfolgen. Eine Normwertstudie mit 566\u00A0gesunden Erwachsenen setzt eine typische Zahl bei etwa 23 bis 24\u00A0Wiederholungen an, angepasst an Alter, Geschlecht und Aktivität. Wichtig sind der Trend über die Zeit und der Unterschied zwischen deinen beiden Seiten.',
        'Das Wadenziel in der App ist 25-mal einbeiniges Fersenheben. Der Test läuft alle 14\u00A0Tage, solange das Wadenziel aktiv ist, danach alle 28\u00A0Tage. Auch ein Unterschied zwischen den Beinen wird verfolgt, weil ein anhaltender Seitenunterschied auf eine unvollständige Erholung hindeuten kann.',
      ],
      cites: [CITE.hebertLosier, CITE.achillesGuideline],
    },
    {
      h2: 'Kannst du während der Reha der Achillessehne weiterlaufen?',
      paragraphs: [
        'In Silbernagel 2007 schnitten Patienten, die während der Reha mit dem Schmerz-Monitoring-Modell weiterliefen, nicht schlechter ab als die, die zuerst pausierten. Beide Gruppen verbesserten sich nach 12\u00A0Monaten. Die Studie kam zu dem Schluss, dass weitere Aktivität mit Schmerzüberwachung während der Reha „daher eine wertvolle Option sein könnte“.',
        'Das heißt nicht, dass Laufen in jedem Fall harmlos ist. Wenn der Schmerz über Nacht nicht abklingt oder jede Woche schlimmer ist, fahr zurück. Schmerz am Ansatz am Fersenbein braucht mehr Vorsicht als Schmerz im Mittelteil der Sehne. Ein plötzliches Knallen oder Schnappen ist ein Grund, aufzuhören und zu einer medizinischen Fachperson zu gehen.',
        'Die Seite zu [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) geht genauer auf die Belastungssteuerung beim Laufen ein.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Wie lange dauert es, bis Übungen für die Achillessehne helfen?',
      paragraphs: [
        'Die Erholung von einer Tendinopathie der Achillessehne wird in Monaten gemessen. Die wichtigsten Belastungsstudien liefen etwa drei Monate und verfolgten die Ergebnisse bis 12\u00A0Monate. Die Leitlinie von 2024 hält fest, dass sich die Funktion schon nach 2\u00A0Wochen verbessern kann, die vollständige Erholung aber deutlich länger dauert.',
        'Keine Studie verspricht einen festen Zeitrahmen. Manche sprechen schneller an, manche langsamer, und Fälle am Ansatz dauern meist länger als Fälle im Mittelteil. Gleichmäßige Belastung über die Zeit ist der gemeinsame Nenner.',
      ],
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer, CITE.silbernagel],
    },
  ],
  faq: [
    {
      q: 'Was ist der Unterschied zwischen Achillessehnenentzündung und Tendinopathie?',
      cites: [CITE.achillesGuideline],
      a: '„Entzündung“ deutet auf einen entzündlichen Prozess hin, während die meisten chronischen Achillessehnenschmerzen eher eine Frage der Belastung sind als vor allem eine Entzündung. Die Leitlinie von 2024 spricht von „Tendinopathie“. Für die Übungen ändert der Name nichts an dem, was du machst. Die Übungen auf dieser Seite gelten für beide Begriffe.',
    },
    {
      q: 'Was ist exzentrisches Fersenabsenken bei Achillessehnenentzündung?',
      cites: [CITE.alfredson],
      a: 'Exzentrisches Fersenabsenken ist eine Kraftübung: auf beiden Füßen hoch, auf einem langsam absenken, die Ferse sinkt unter eine Stufenkante. Im Mittelpunkt steht das Absenken. In einer Studie von 1998 kehrten 15\u00A0Sportler, die das drei Monate lang zweimal täglich machten, alle auf ihr früheres Laufniveau zurück. Spätere Forschung zeigt, dass andere Arten der Belastung genauso gut wirken.',
    },
    {
      q: 'Ist Heavy Slow Resistance so gut wie exzentrisches Fersenabsenken?',
      cites: [CITE.beyer, CITE.vanDerVlist],
      a: 'Eine Studie von 2015 mit 58\u00A0Personen kam zu dem Schluss, dass beide „positive, gleich gute, anhaltende klinische Ergebnisse“ bringen. Eine Metaanalyse von 2021 mit 29\u00A0Studien fand nach 3 oder 12\u00A0Monaten keinen klinisch relevanten Unterschied zwischen den aktiven Übungsarten. Entscheidend ist gleichmäßige Belastung, nicht das konkrete Protokoll.',
    },
    {
      q: 'Wie viel Schmerz ist bei Achillessehnen-Übungen okay?',
      cites: [CITE.silbernagel],
      a: 'Eine Studie erlaubte bei Belastung Schmerz bis etwa 5/10, solange er bis zum nächsten Morgen abklang und nicht von Woche zu Woche schlimmer wurde. Patienten mit diesem Modell schnitten genauso gut ab wie die, die zuerst pausierten (Silbernagel 2007). Schmerz, der über Nacht erhöht bleibt oder jede Woche schlimmer wird, ist das Signal zum Zurückfahren.',
    },
    {
      q: 'Sind die Übungen bei Schmerzen am Ansatz der Achillessehne anders?',
      cites: [CITE.jonsson],
      a: 'Ja. Das klassische Protokoll mit tiefem Fersenabsenken brachte bei Schmerzen am Ansatz am Fersenbein schlechte Ergebnisse. Eine Pilotstudie von 2008 testete exzentrische Belastung nur auf Bodenhöhe, ohne Dorsalflexion über die Neutralstellung hinaus, und berichtete bei 67\u00A0% von 27\u00A0Patienten gute Ergebnisse. Tiefes Absenken und kräftiges Dehnen solltest du bei Schmerzen am Ansatz meiden.',
    },
    {
      q: 'Sollte ich eine schmerzende Achillessehne dehnen?',
      cites: [CITE.alfredson, CITE.silbernagel, CITE.beyer],
      a: 'Dehnen ist nicht die Hauptübung bei Tendinopathie der Achillessehne. Die Studien auf dieser Seite sind alle Belastungsprotokolle (Fersenheben und Fersenabsenken), keine Dehnprogramme. Sanfte Beweglichkeitsübungen für die Wade können nach Einheiten mit Belastung folgen, aber kräftiges Dehnen kann die Beschwerden verstärken, vor allem bei Schmerzen am Ansatz, wo die Dorsalflexion den Ansatz zusammendrückt.',
    },
    {
      q: 'Wie lange dauert es, bis Übungen bei Achillessehnenentzündung wirken?',
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer],
      a: 'Die Erholung wird in Monaten gemessen. Die wichtigsten Studien liefen mit Belastungsprogrammen über etwa drei Monate und verfolgten die Ergebnisse bis 12\u00A0Monate. Die Leitlinie von 2024 hält fest, dass sich die Funktion ab 2\u00A0Wochen verbessern kann, die vollständige Erholung aber deutlich länger dauert. Keine Studie verspricht einen festen Zeitrahmen.',
    },
    {
      q: 'Was sollte man bei Achillessehnenentzündung nicht machen?',
      cites: [CITE.jonsson, CITE.silbernagel],
      a: 'Meide plötzliche Steigerungen beim Laufumfang oder bei Sprints, tiefes Wadendehnen, wenn dein Schmerz am Ansatz am Fersenbein sitzt, und das Weitermachen trotz Schmerz, der am nächsten Morgen erhöht bleibt oder von Woche zu Woche schlimmer wird. Ein plötzliches Knallen oder Schnappen braucht sofort eine medizinische Fachperson. Komplette Ruhe ist aber auch nicht nötig; Aktivität mit Schmerzüberwachung ist meist besser, als ganz aufzuhören.',
    },
    {
      q: 'Verschlimmert Gehen eine Achillessehnenentzündung?',
      cites: [CITE.silbernagel],
      a: 'Meist nicht. Gehen belastet weniger als Laufen, und viele mit Tendinopathie der Achillessehne können weitergehen, ohne dass es aufflammt. Achte auf Schmerz, der am nächsten Morgen erhöht bleibt oder von Woche zu Woche schlimmer wird; das ist das Signal, Strecke oder Tempo zu reduzieren, nicht ganz mit Bewegung aufzuhören. Steile Hügel und schnelles Gehen auf hartem Untergrund reizen eher.',
    },
    {
      q: 'Was wird mit einer Achillessehnenentzündung verwechselt?',
      cites: [CITE.chooRearfoot],
      a: 'Eine Bursitis retrocalcanea (Schleimbeutelentzündung hinter der Ferse), eine Haglund-Ferse und ein Teilriss der Achillessehne können ähnliche Schmerzen hinten an der Ferse verursachen. Ein sichtbarer knöcherner Höcker deutet eher auf eine Haglund-Ferse hin, eine Schwellung direkt hinten auf Höhe des Schuhrands eher auf eine Bursitis. Jeder plötzliche stechende Schmerz mit einem Knall, oder wenn du nicht mehr auf die Zehen kommst, muss dringend auf einen Sehnenriss untersucht werden.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du ein plötzliches Knallen oder Schnappen gespürt hast oder ein Gefühl, als hätte dich jemand hinten ans Bein getreten, vor allem wenn du dich danach sofort schwer abdrücken oder auf den Zehen gehen kannst. Das kann auf einen Riss der Achillessehne hindeuten',
      'du gerade ein Fluorchinolon-Antibiotikum nimmst oder vor Kurzem genommen hast (etwa Ciprofloxacin oder Levofloxacin) und neue oder zunehmende Sehnenschmerzen hast. Für diese Medikamente gibt es einen Warnhinweis der FDA im schwarzen Kasten (Boxed Warning) zu Sehnenentzündung und Sehnenriss',
      'Schmerz und Schwellung plötzlich mit Fieber, Rötung oder Wärme über der Sehne aufgetreten sind',
      'die Sehne deutlich geschwollen ist, ein Bluterguss da ist oder du eine Lücke in der Sehne tasten kannst',
      'der Schmerz direkt am Ansatz am Fersenbein sitzt und mit Dehnen oder tiefem Fersenabsenken schlimmer wird, nicht besser. Das deutet auf eine insertionale Tendinopathie hin, die einen angepassten Ansatz oder den Rat einer Fachperson braucht',
      'Schmerz oder Steifigkeit über Wochen stetig schlimmer werden, obwohl du gleichmäßig trainierst',
      'der Schmerz in Ruhe da ist oder dich nachts weckt',
      'du den Fuß nicht belasten kannst oder hinkst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst Reihenfolge, Dosis und den Zeitpunkt für mehr Last nicht erraten. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Die Wadenkette reicht vom Fersenheben im Sitzen über das Fersenheben beidbeinig, das Halten und das Fersenheben mit Handtuch bis zum exzentrischen Fersenabsenken und zu Pogo-Sprüngen. Jede Stufe öffnet sich, sobald sich zwei Einheiten auf der aktuellen Stufe leicht angefühlt haben.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald das Wadenziel erreicht ist) prüft ein Test Wadenausdauer und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose. Wenn der Schmerz direkt am Ansatz am Fersenbein sitzt, lass ihn von einer medizinischen Fachperson prüfen, bevor du ihn stark belastest.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Übungen bei Achillessehnenentzündung',
  campaign: 'guide-achilles-de',
};
