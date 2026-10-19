import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/walking-with-plantar-fasciitis.ts (2026-10-17),
 * written around «Gehen bei Plantarfasziitis», «Plantarfasziitis wie viel
 * laufen» and «Plantarfasziitis Schritte pro Tag». Informal «du», terminology
 * and exercise names as in `lib/guides/de.ts`. Figures, doses, grades, hedges
 * and sources are identical to the English page after its fact-check. Same
 * CITE keys and media ids. Links to /heel-pain-runners/ and
 * /best-insoles-for-plantar-fasciitis/ removed (no German version).
 */

export const WALKING_PF_DE: Guide = {
  lang: 'de',
  page: 'walkingPf',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Gehen bei Plantarfasziitis: Wie viel ist in Ordnung?',
  description:
    'Gehen bei Plantarfasziitis: eine einfache Schmerzregel für unterwegs und den nächsten Morgen, was Schrittzahlen taugen, Schuhe, Untergrund und Aufbau.',
  h1: 'Wie viel Gehen ist bei Plantarfasziitis in Ordnung?',
  lede:
    'Mit einer [Plantarfasziitis](/de/plantarfasziitis/) kannst du meistens weitergehen, solange der Schmerz beim Gehen mäßig bleibt und bis zum nächsten Morgen abklingt. Die Leitlinie von 2023 zu Fersenschmerzen empfiehlt eine Beratung dazu, wie du die Belastung im Stehen und Gehen anpasst, und rät nicht dazu, mit dem Gehen aufzuhören. Sie bewertet diese Beratung allerdings mit **E**, das heißt, sie beruht auf Theorie, nicht auf Studien (Koc und Kollegen, 2023). Keine Studie nennt eine sichere Zahl an Schritten. Der Blick auf den nächsten Morgen ist deshalb ein besserer Maßstab als ein Schrittziel.',
  intro: [
    'Auf dieser Seite geht es darum, wie viel du gehen kannst, während die Ferse wehtut, und wie du das Gehen wieder aufbaust. Wenn du vor allem wissen willst, warum die Ferse nach einem Spaziergang schmerzt, lies [Fersenschmerzen nach dem Gehen](/de/fersenschmerzen-nach-dem-gehen/). Wenn deine Füße vom Stehen an einem Ort wehtun, lies [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/).',
  ],
  takeaways: [
    'Die Leitlinie von 2023 zu Fersenschmerzen führt die Beratung zur Anpassung der Belastung bei der Arbeit, in der Freizeit und im Alltag sowie die Beratung zu Schuhen mit Empfehlungsgrad **E** auf: Sie beruht auf Theorie, nicht auf Studien (Koc und Kollegen, 2023).',
    'In einer Studie mit 180\u00A0Erwachsenen mit Plantarfasziopathie wurde die Gruppe, die nur den Rat bekam, aktiv zu bleiben, schmerzverstärkende Aktivitäten zu reduzieren und ein Fersenkissen zu tragen, nach etwa drei Monaten klinisch bedeutsam besser (Riel und Kollegen, 2023).',
    'Eine Regel zum Schmerz-Monitoring erlaubt bei Belastung Schmerz bis etwa 5 von 10, solange er bis zum nächsten Morgen abklingt und nicht von Woche zu Woche zunimmt. Getestet wurde sie bei 38\u00A0Personen mit Achillessehnenschmerzen, nicht bei Plantarfasziitis (Silbernagel und Kollegen, 2007).',
    'Keine Studie nennt eine tägliche Schrittzahl für Plantarfasziitis. Bei 50\u00A0Personen mit Fersenschmerzen und 25 ohne unterschied sich die körperliche Aktivität nicht, aber die Gruppe mit Fersenschmerzen stand täglich 3,4\u00A0Stunden länger (Landorf und Kollegen, 2023).',
    'Ein Best-Practice-Leitfaden von 2021 zu Fersenschmerzen rät zu Schuhen mit geringer Sprengung und dazu, Barfußgehen und flache Schuhe ohne Halt zu meiden, bis die Beschwerden weg sind (Morrissey und Kollegen, 2021).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Ist Gehen bei Plantarfasziitis gut oder schlecht?',
      keyFact: 'In einer Studie mit 180\u00A0Erwachsenen wurde die Gruppe, die den Rat bekam, aktiv zu bleiben, aber schmerzverstärkende Aktivitäten zu reduzieren, und dazu ein Fersenkissen bekam, nach etwa drei Monaten klinisch bedeutsam besser (Riel und Kollegen, 2023).',
      paragraphs: [
        '**Gehen ist nicht der Feind, aber zu viel auf einmal kann die Ferse reizen.** Die Leitlinie von 2023 zu Fersenschmerzen rät nicht dazu, mit dem Gehen aufzuhören. In ihrer Übersicht steht eine Aufklärung darüber, wie du die Belastung bei der Arbeit, in der Freizeit und im Alltag verändern kannst, und über Schuhe. Sie bewertet diese Beratung mit **E**: Theorie und Grundlagenforschung stützen sie, aber keine Studie hat sie getestet (Koc und Kollegen, 2023).',
        'Die Leitlinie nennt außerdem Fersenschmerz, der nach einer kürzlichen Steigerung der Belastung im Stehen und Gehen begonnen hat, als typisches Merkmal der Plantarfasziitis. Die Frage ist also selten, ob du gehen solltest, sondern wie viel und wie schnell du steigerst.',
        'Eine dänische Studie hat einfache Beratung mit zusätzlichen Behandlungen verglichen. 180\u00A0Erwachsene mit Plantarfasziopathie (ein anderer Name für Plantarfasziitis) wurden in drei Gruppen eingeteilt. Eine bekam nur Beratung und ein Fersenkissen, die beiden anderen zusätzlich ein Training mit Fersenheben, und eine davon außerdem eine Kortisonspritze. Der Rat lautete, Aktivitäten zu reduzieren, die die Beschwerden auslösen, und dann langsam, nach den Beschwerden gerichtet, zum früheren Aktivitätsniveau zurückzukehren. Alle drei Gruppen wurden nach etwa drei Monaten klinisch bedeutsam besser (Riel und Kollegen, 2023).',
        'Möglicherweise hängt gar nicht das Gehen selbst mit Fersenschmerzen zusammen. In einer Studie von 2023 gaben 50\u00A0Personen mit Fersenschmerzen und 25 passende Personen ohne Fersenschmerzen eine ähnliche körperliche Aktivität an. Der Unterschied lag im Stehen: Die Gruppe mit Fersenschmerzen stand täglich 3,4\u00A0Stunden länger (Landorf und Kollegen, 2023). Die Studie zeigt einen Zusammenhang, keine Ursache. Wenn du den Tag vor allem im Stehen verbringst, geht es unter [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/) um diesen Aspekt.',
      ],
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.rielFixHeelProtocol, CITE.landorfFootwear],
    },
    {
      h2: 'Wie viel Gehen ist in Ordnung? Eine einfache Schmerzregel',
      keyFact: 'In einer Studie mit 38\u00A0Personen mit Achillessehnenschmerzen schnitten diejenigen, die aktiv blieben und den Schmerz bei etwa 5 von 10 hielten, abklingend bis zum nächsten Morgen, nach zwölf Monaten genauso gut ab wie diejenigen, die sechs Wochen lang aufs Laufen und Springen verzichteten (Silbernagel und Kollegen, 2007).',
      paragraphs: [
        '**Nimm deinen Schmerz als Dosierhilfe und prüf ihn zweimal: beim Gehen und am nächsten Morgen.** Keine Studie hat eine Gehregel für Plantarfasziitis getestet. Die am nächsten liegende getestete Regel stammt aus der Sehnen-Reha. Nutze sie also als geliehene Orientierung, nicht als belegte Grenze für die Ferse.',
        'In einer Studie von 2007 wurden 38\u00A0Personen mit Achillessehnenschmerzen in zwei Gruppen eingeteilt. Eine Gruppe lief und sprang weiter und folgte dabei einem Schmerz-Monitoring-Modell: Schmerz bis etwa 5 von 10 war bei Belastung erlaubt, solange er bis zum nächsten Morgen abklang und nicht von Woche zu Woche zunahm. Die andere Gruppe verzichtete in den ersten sechs Wochen auf diese Aktivitäten. Beide Gruppen wurden besser, und aktiv zu bleiben führte nach zwölf Monaten nicht zu schlechteren Ergebnissen (Silbernagel und Kollegen, 2007). Mehr zu dieser Studie unter [Achillessehnenentzündung: Übungen](/de/achillessehnenentzuendung-uebungen/).',
        'Für Fersenschmerzen sagt ein Best-Practice-Leitfaden von 2021, der auf einer Auswertung von 51\u00A0Studien, Interviews mit 14\u00A0Fachleuten und einer Befragung von Betroffenen beruht, dass Schmerz-Monitoring dringend empfohlen wurde und dass Betroffene lernen sollten, ihre Schmerzreaktion auf Belastung zu lesen (Morrissey und Kollegen, 2021). Eine Zahl nennt er nicht. Die Tabelle unten überträgt die getestete Regel aufs Gehen, bewertet von 0 (kein Schmerz) bis 10 (stärkster Schmerz). Die Spalte zum nächsten Spaziergang ist eine praktische Auslegung dieser Regel, kein getestetes Protokoll.',
      ],
      table: {
        caption: 'So liest du deine Ferse nach einem Spaziergang (Schmerzskala von 0 bis 10)',
        head: ['Was du bemerkst', 'Was es bedeutet', 'Nächster Spaziergang'],
        rows: [
          ['0 bis 2 beim Gehen, nächster Morgen normal', 'Gut im Rahmen', 'So lassen oder etwas mehr'],
          ['3 bis 5 beim Gehen, bis zum nächsten Morgen abgeklungen', 'Vertretbare Belastung', 'Denselben Weg wiederholen'],
          ['Über 5 beim Gehen', 'Zu viel für heute', 'Kürzer oder langsamer gehen'],
          ['Erste Schritte am nächsten Morgen schlimmer als sonst', 'Gestern war es zu viel', 'Reduzieren, dann neu aufbauen'],
          ['Jede Woche schlimmer', 'Die Belastung steigt schleichend', 'Einen Schritt zurück und ärztlich abklären lassen, wenn es so weitergeht'],
        ],
      },
      after: [
        'Am wichtigsten ist der Blick am Morgen. Schmerz bei den ersten Schritten ist das klassische Zeichen der Plantarfasziitis und das deutlichste Signal dafür, wie dein Fuß den gestrigen Tag verkraftet hat. Unter [Fersenschmerzen morgens](/de/fersenschmerzen-morgens/) geht es um dieses Muster und um die Dehnungen, die du vor dem Aufstehen machst.',
        'Stechender Schmerz, durch den du hinkst, Schmerz, der mit jedem Spaziergang zunimmt und in Ruhe nicht nachlässt, oder Schmerz in der Nacht fallen nicht unter diese Regel. Hinken kann außerdem Knie, Hüfte und Rücken anders belasten. Sieh dir die Liste am Ende dieser Seite an.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0Personen pro Gruppe. Der VISA-A-S-Wert stieg nach zwölf Monaten in der Aktivitätsgruppe von 57 auf 85 und in der Ruhegruppe von 57 auf 91, ohne signifikanten Unterschied in der Geschwindigkeit der Verbesserung.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Wie viele Schritte am Tag sind bei Plantarfasziitis in Ordnung?',
      keyFact: 'Keine Studie nennt eine tägliche Schrittzahl für Plantarfasziitis. In einer gepoolten Auswertung von 47.471\u00A0Erwachsenen flachte der Rückgang des Sterberisikos bei Menschen ab 60 bei 6.000 bis 8.000 Schritten am Tag ab (Paluch und Kollegen, 2022).',
      paragraphs: [
        '**Für Plantarfasziitis gibt es keine belegte Schrittzahl.** Wir haben keine Studie gefunden, die Menschen mit Fersenschmerzen eine Schrittzahl oder Gehstrecke vorgegeben und das Ergebnis gemessen hat. Jede Seite, die dir für Fersenschmerzen eine feste Zahl nennt, rät.',
        'Die bekannten 10.000 Schritte sind ein allgemeines Gesundheitsziel, keine Zahl aus der Fußforschung, und selbst dafür sind die Belege dünn. Eine Auswertung von 2022 mit 15\u00A0Studien und 47.471\u00A0Erwachsenen fand, dass mehr Schritte am Tag mit einem geringeren Sterberisiko einhergingen. Der Nutzen flachte aber bei Erwachsenen ab 60 bei etwa 6.000 bis 8.000 Schritten am Tag ab und bei jüngeren Erwachsenen bei 8.000 bis 10.000 (Paluch und Kollegen, 2022). Dabei geht es um die langfristige Gesundheit, nicht darum, was eine gereizte Ferse diese Woche verträgt.',
        'Nützlicher ist deine eigene Zahl. Die meisten Handys zählen Schritte. Schau dir eine normale Woche an, bevor die Ferse angefangen hat, und eine normale Woche jetzt. Das ist dein Ausgangspunkt, und die Schmerzregel oben sagt dir, ob du dabei bleibst, steigerst oder reduzierst.',
        'Das Gehen aufzuteilen hilft vielleicht mehr als die Gesamtmenge. Der Best-Practice-Leitfaden von 2021 rät, lange Phasen statischer Belastung, etwa langes Stehen, zu unterbrechen (Morrissey und Kollegen, 2021). Mehrere kurze Spaziergänge über den Tag verteilt belasten die Ferse weniger am Stück als ein langer, auch wenn keine Studie die beiden Varianten bei Plantarfasziitis verglichen hat.',
      ],
      cites: [CITE.paluchSteps, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Wie baust du das Gehen wieder auf?',
      paragraphs: [
        'Der Rat, der in der dänischen Studie getestet wurde, lautete: Aktivitäten reduzieren, die die Beschwerden auslösen, und dann langsam, nach den Beschwerden gerichtet, zum früheren Aktivitätsniveau zurückkehren (Riel und Kollegen, 2020). Einen wöchentlichen Prozentsatz hat er nicht festgelegt, und keine Studie hat einen solchen bei Plantarfasziitis getestet. So kannst du diesen Rat zum Beispiel umsetzen:',
        {
          list: [
            'Such dir einen Spaziergang, der die Schmerzregel besteht: höchstens mäßiger Schmerz dabei und ein normaler nächster Morgen. Wenn schon ein kurzer Spaziergang nicht besteht, fang mit weniger an.',
            'Wiederhol diesen Spaziergang ein paar Tage lang. Ein guter Tag reicht nicht, um es zu beurteilen.',
            'Nimm ein kleines Stück dazu, etwa fünf Minuten mehr, und lass den Rest gleich. Ändere immer nur eine Sache: Strecke, Tempo, Steigungen oder Untergrund.',
            'Wenn der nächste Morgen schlimmer ist, geh zurück zum letzten Spaziergang, der bestanden hat, und bleib länger dabei.',
          ],
        },
        'Die fünf Minuten sind ein praktischer Vorschlag, keine getestete Zahl. Wichtig ist, dass jede Steigerung klein genug ist, damit dir der nächste Morgen klar zeigt, ob sie funktioniert hat.',
        'Die Erholung von einer Plantarfasziitis verläuft meist langsam. Bei etwa 90\u00A0% der Menschen wird es mit Behandlung ohne Operation besser, etwa mit Dehnen, Wadentraining und angepasster Belastung (Latt und Kollegen, 2020), aber es kann Monate dauern. Mehr unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/). Wenn du auch läufst, spielen bei Fersenschmerzen zusätzlich der Laufumfang und Änderungen der Belastung eine Rolle.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.latt],
    },
    {
      h2: 'Welche Schuhe helfen beim Gehen mit Plantarfasziitis?',
      keyFact: 'Die Leitlinie von 2023 bewertet Einlagen allein zur kurzfristigen Schmerzlinderung mit Empfehlungsgrad B gegen die Anwendung und kombiniert mit anderen Maßnahmen, auch mit Fersenpolsterung, mit C (Koc und Kollegen, 2023).',
      paragraphs: [
        '**Bequeme, gedämpfte Schuhe mit geringer Sprengung sind der Rat der Fachleute, aber keine Studie hat einen bestimmten Schuh fürs Gehen getestet.** Der Best-Practice-Leitfaden von 2021 sagt, Schuhe sollten Halt geben und bequem sein, eine geringe Sprengung haben (die Ferse sitzt etwas höher als die Zehen) und so sein, dass du sie auch wirklich trägst. Er rät außerdem, Barfußgehen und flache Schuhe ohne Halt zu meiden, bis die Beschwerden ganz weg sind (Morrissey und Kollegen, 2021).',
        'Die Leitlinie von 2023 nimmt die Beratung zu Schuhen in ihre Empfehlung zur Aufklärung mit Empfehlungsgrad **E** auf. Bei Einlagen ist sie genauer: nicht als einzige Maßnahme verwenden (**B** gegen die Anwendung), aber in Kombination mit anderen Maßnahmen können sie helfen (**C**). Dazu gehören ein rezeptfreies Fersenkissen oder Schuhe mit Fersendämpfung (Koc und Kollegen, 2023).',
        'Die Härte des Schuhs könnte eine Rolle spielen. In der Studie von 2023 mit 50\u00A0Personen mit Fersenschmerzen und 25 ohne trug die Gruppe mit Fersenschmerzen Schuhe mit härteren Fersen und hatte nach eigenen Angaben mehr Mühe, passende Schuhe zu finden (Landorf und Kollegen, 2023). Auch hier gilt: ein Zusammenhang, kein Beweis, dass weiche Schuhe helfen.',
        'Was die Studien zu Einlagen zeigen, liest du unter [Einlagen oder Übungen](/de/einlagen-oder-uebungen/). Du denkst über Minimalschuhe nach? Unter [Barfußschuhe](/de/barfussschuhe/) steht, warum sie nicht gut passen, solange die Ferse wehtut.',
      ],
      cites: [CITE.morrisseyBestPractice, CITE.guideline, CITE.landorfFootwear],
    },
    {
      h2: 'Spielt der Untergrund beim Gehen eine Rolle?',
      paragraphs: [
        '**Wahrscheinlich, aber die Belege sind indirekt.** Die Leitlinie nennt Belastung im Stehen und Gehen bei der Arbeit, besonders auf Untergründen mit schlechter Stoßdämpfung, als Risikofaktor für Plantarfasziitis (Koc und Kollegen, 2023). Das deutet darauf hin, dass harter Boden und harte Schuhe die Ferse belasten.',
        'Direkte Belege gibt es kaum. In der passend zusammengestellten Studie von 2023 unterschieden sich Menschen mit und ohne Fersenschmerzen nicht darin, ob sie auf harten Böden standen (Landorf und Kollegen, 2023). Eine Fallserie mit 20\u00A0Läuferinnen und Läufern berichtete nach etwa anderthalb Monaten Barfußlaufen auf Gras von weniger Schmerz, hatte aber keine Vergleichsgruppe (MacGabhann und Kollegen, 2022). Keine Studie hat Untergründe fürs Gehen bei Plantarfasziitis verglichen.',
        'Praktische Möglichkeiten, solange die Ferse wehtut:',
        {
          list: [
            'Nimm für längere Spaziergänge lieber Gras, einen Parkweg oder eine Laufbahn statt Beton, wenn es sich besser anfühlt.',
            'Lass zu Hause auf Fliesen oder Holz die Schuhe an, vor allem bei den ersten Schritten des Tages.',
            'Geh lange Abstiege und steile Hügel vorsichtig an, bis der Spaziergang in der Ebene die Schmerzregel besteht. Mehr zu Abstiegen, Rucksack und Stöcken unter [Fußschmerzen nach dem Wandern](/de/fussschmerzen-nach-wanderung/).',
          ],
        },
        'Ein tiefer, dumpfer Schmerz genau in der Mitte der Ferse, der auf hartem Boden deutlich schlimmer ist, kann eher vom Fettpolster der Ferse kommen als von der Plantarfaszie. Lies dazu [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/).',
      ],
      cites: [CITE.guideline, CITE.landorfFootwear, CITE.macgabhannGrass],
    },
    {
      h2: 'Welche Übungen machen das Gehen leichter?',
      keyFact: 'Die Leitlinie von 2023 bewertet die Dehnung von Plantarfaszie und Wade mit Empfehlungsgrad A und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Übungen helfen der Ferse vielleicht, mehr Belastung zu vertragen, sodass derselbe Spaziergang die Schmerzregel mit der Zeit leichter besteht, auch wenn keine Studie das fürs Gehen getestet hat. Die Leitlinie von 2023 bewertet die Dehnung von Plantarfaszie und Wade mit **A**, ihrem höchsten Empfehlungsgrad, und Krafttraining mit **B**.',
        'Eine verspannte Wade gehört mit zum Bild. In einer Fall-Kontroll-Studie mit 50\u00A0Personen mit Plantarfasziitis und 100 ohne war eine eingeschränkte Beugung im Sprunggelenk der stärkste Risikofaktor, und auch langes Stehen während des größten Teils des Arbeitstags erhöhte die Chance darauf (Riddle und Kollegen, 2003). Lies dazu [verspannte Waden](/de/verspannte-waden/).',
        'In einer Studie mit 48\u00A0Personen linderte schweres Fersenheben den Schmerz und verbesserte die Alltagsfunktion schneller als Dehnen, und nach zwölf Monaten lagen beide Gruppen etwa gleichauf (Rathleff und Kollegen, 2015). Die Karten unten zeigen die Startdosen von Walkito, keine Verordnung. Das vollständige Programm findest du unter [Plantarfasziitis: Übungen](/de/plantarfasziitis-uebungen/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen den höchsten Empfehlungsgrad A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'Die meisten Einheiten und vor den ersten Schritten des Tages',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Stechender Fersenschmerz',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen den höchsten Empfehlungsgrad A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten und vor einem längeren Spaziergang',
          feel: 'Eine Dehnung in der Wade',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden und die Hüfte nach vorn. Eine verspannte Wade zieht den ganzen Tag an der Ferse, deshalb zählt diese Dehnung, auch wenn du sie weiter oben spürst.',
          stop: 'Schmerz in der Wade, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen vergibt für Dehnen den höchsten Empfehlungsgrad A.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung nahe der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Den Schollenmuskel (Musculus soleus), den tiefer liegenden Wadenmuskel, erreichst du nur mit gebeugtem Knie.',
          stop: 'Schmerz in der Wade, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nahe der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B. Diese Stufe wurde nicht einzeln getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Arbeit im unteren Teil der Wade',
          how: 'Setz dich hin, die Füße stehen flach, und drück dich über die Fußballen nach oben. Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Schollenmuskel, fast ohne Last auf der Ferse. Das passt zu Tagen, an denen das Gehen schon nah an deiner Grenze liegt.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: Drück dich über die Fußballen nach oben',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B. Diese Stufe wurde nicht einzeln getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last. Halt dich zum Ausbalancieren an einer Wand fest.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch',
          evidence: { level: 'moderate', why: 'Das ist die Routine aus einer Studie mit 48\u00A0Personen, und die Leitlinie von 2023 vergibt für Krafttraining Empfehlungsgrad B.' },
          dose: '4\u00A0Sätze à 10, jedes Bein, mit Zusatzgewicht',
          often: 'Krafttage, sobald der Schmerz am Morgen nachgelassen hat',
          feel: 'Harte Arbeit in der Wade',
          how: 'Stell dich mit einem Fuß auf eine Stufe, ein zusammengerolltes Handtuch liegt unter deinen Zehen. Nimm dir drei Sekunden zum Hochkommen, halte oben zwei und nimm dir drei zum Absenken. Auf dieser Stufe nimmt Walkito Gewicht dazu, zum Beispiel einen Rucksack. Durch das Handtuch trainiert diese Übung die Plantarfaszie und nicht nur die Wade. Mehr zum [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/).',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben mit Handtuch',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, zwei oben, drei runter',
          alt: 'Eine Figur kommt auf einer Stufe mit einem zusammengerollten Handtuch auf die Zehen, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Sollte ich mit Plantarfasziitis gehen?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Meistens ja, in Mengen, die deine Ferse verträgt. Die Leitlinie von 2023 zu Fersenschmerzen empfiehlt, die Belastung anzupassen, und rät nicht dazu aufzuhören, auch wenn dieser Rat auf Theorie beruht (Empfehlungsgrad E). In einer Studie mit 180\u00A0Erwachsenen gingen der Rat, aktiv zu bleiben, aber schmerzverstärkende Aktivitäten zu reduzieren, und ein Fersenkissen nach etwa drei Monaten mit einer bedeutsamen Besserung einher.',
    },
    {
      q: 'Ist Gehen gut bei Plantarfasziitis?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Gehen in mäßigen Mengen ist im Allgemeinen in Ordnung, auch wenn keine Studie getestet hat, wie viel Gehen am besten ist. In einer Studie waren Menschen mit Fersenschmerzen genauso aktiv wie Menschen ohne, standen aber täglich 3,4\u00A0Stunden länger. Ein Best-Practice-Leitfaden rät, zu lernen, wie du deine Schmerzreaktion auf Belastung beobachtest.',
    },
    {
      q: 'Wie viele Schritte am Tag sind bei Plantarfasziitis in Ordnung?',
      cites: [CITE.paluchSteps],
      a: 'Keine Studie nennt eine Schrittzahl für Plantarfasziitis. Die 10.000 sind ein allgemeines Gesundheitsziel, und in der Forschung zur Sterblichkeit flachte der Nutzen bei Erwachsenen ab 60 bei 6.000 bis 8.000 Schritten am Tag ab. Bei einer gereizten Ferse gehst du von deiner eigenen üblichen Zahl aus und lässt den Schmerz am nächsten Morgen entscheiden, ob du steigerst oder reduzierst.',
    },
    {
      q: 'Wie viel Schmerz ist beim Gehen mit Plantarfasziitis in Ordnung?',
      cites: [CITE.silbernagel],
      a: 'Eine getestete Regel erlaubt bei Belastung Schmerz bis etwa 5 von 10, solange er bis zum nächsten Morgen abklingt und nicht von Woche zu Woche zunimmt. Sie stammt aus einer Studie mit 38\u00A0Personen mit Achillessehnenschmerzen, nicht mit Plantarfasziitis. Nutze sie also als Orientierung. Mehr Schmerz oder ein schlimmerer Morgen heißt: reduzieren.',
    },
    {
      q: 'Kann Gehen eine Plantarfasziitis verschlimmern?',
      cites: [CITE.guideline],
      a: 'Ja, wenn du deutlich mehr machst, als deine Ferse gewohnt ist. Die Leitlinie von 2023 nennt Fersenschmerz nach einer kürzlichen Steigerung der Belastung im Stehen und Gehen als typisches Merkmal der Plantarfasziitis. Ein plötzlicher langer Spaziergang, eine neue hügelige Strecke oder ein Tag auf harten Böden kann die Beschwerden verstärken. Kleinere, gleichmäßige Steigerungen sind schonender für die Ferse.',
    },
    {
      q: 'Sollte ich ganz aufhören zu gehen, damit sich die Plantarfasziitis beruhigt?',
      cites: [CITE.silbernagel, CITE.guideline],
      a: 'Keine Studie zeigt, dass völlige Ruhe nötig ist. Die Leitlinie von 2023 empfiehlt, die Belastung anzupassen, und rät nicht dazu aufzuhören. In einer Studie zu Achillessehnenschmerzen schnitten Menschen, die innerhalb einer Schmerzgrenze aktiv blieben, nach zwölf Monaten genauso gut ab wie Menschen, die sechs Wochen lang aufs Laufen und Springen verzichteten. Wenn schon kurze Spaziergänge stechend wehtun oder du hinkst, lass es ärztlich abklären.',
    },
    {
      q: 'Welche Schuhe sind am besten zum Gehen mit Plantarfasziitis?',
      cites: [CITE.morrisseyBestPractice, CITE.guideline],
      a: 'Bequeme, gedämpfte Schuhe, bei denen die Ferse etwas höher sitzt als die Zehen, sind der Rat der Fachleute. Ein Best-Practice-Leitfaden von 2021 rät, Barfußgehen und flache Schuhe ohne Halt zu meiden, bis die Beschwerden weg sind. Die Leitlinie von 2023 sagt, dass Einlagen oder Fersenkissen in Kombination mit anderen Maßnahmen helfen können, aber nicht allein.',
    },
    {
      q: 'Ist es bei Plantarfasziitis besser, auf Gras oder auf Beton zu gehen?',
      cites: [CITE.guideline, CITE.macgabhannGrass],
      a: 'Weicherer Boden ist vielleicht angenehmer, aber keine Studie hat Untergründe fürs Gehen mit Plantarfasziitis verglichen. Die Leitlinie von 2023 bringt Belastung bei der Arbeit auf Untergründen mit schlechter Stoßdämpfung mit dem Risiko für Plantarfasziitis in Verbindung. Eine kleine Fallserie mit Läuferinnen und Läufern auf Gras berichtete von weniger Schmerz, hatte aber keine Vergleichsgruppe. Richte dich danach, wie sich deine Ferse am nächsten Morgen anfühlt.',
    },
    {
      q: 'Ist Barfußgehen zu Hause bei Plantarfasziitis in Ordnung?',
      cites: [CITE.morrisseyBestPractice],
      a: 'Solange deine Ferse wehtut, meidest du es besser, vor allem morgens als Erstes auf Fliesen oder Holz. Ein Best-Practice-Leitfaden von 2021 zu Fersenschmerzen rät von Barfußgehen und flachen Schuhen ohne Halt ab, bis die Beschwerden ganz weg sind. Der übliche Rat sind Schuhe mit Halt oder feste Hausschuhe für die ersten Schritte des Tages.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Fersenschmerz nach einem Sturz, einem Sprung oder einem Umknicken begann oder du den Fuß nicht belasten kannst',
      'der Schmerz mit jedem Spaziergang zunimmt und in Ruhe nicht nachlässt oder es wehtut, wenn du die Ferse seitlich zusammendrückst (möglicher Ermüdungsbruch)',
      'die Ferse nachts oder in Ruhe wehtut, nicht nur beim Gehen',
      'du Taubheit, Kribbeln oder Brennen im Fuß spürst',
      'die Ferse gerötet, heiß oder geschwollen ist oder du dich krank fühlst oder Fieber hast',
      'beide Fersen zusammen mit anderen Gelenken wehtun oder du auch anderswo Morgensteifigkeit hast',
      'du Diabetes oder eine schlechte Durchblutung hast und dein Fuß wehtut oder anders aussieht',
      'der Schmerz trotz Reduzieren von Woche zu Woche schlimmer wird',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß. Sie gibt kein Schrittziel vor und plant deine Spaziergänge nicht, aber sie liest deine Ferse genauso wie diese Seite: daran, wie sich dein Fuß am nächsten Morgen anfühlt.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deinen Fersenschmerz am Morgen, und der Plan passt sich daran an: Nach einem langen Tag auf den Beinen wird die nächste Krafteinheit leichter. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['heelPainAfterWalking', 'heelPain', 'standing'],
  crumb: 'Gehen bei Plantarfasziitis',
  campaign: 'guide-walking-with-plantar-fasciitis-de',
};
