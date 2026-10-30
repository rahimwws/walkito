import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/teachers-foot-pain.ts (2026-10-18), written around
 * «Fußschmerzen Lehrer», «Fußschmerzen Lehrerin» and «Schuhe für Lehrer».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts` and
 * the other articles-de pages. Figures, doses, grades, qualifiers and sources
 * are identical to the English page after its fact-check. Same CITE keys and
 * media ids. Links without a German page (best insoles, foot pain identifier,
 * program) are removed and the wording kept.
 */

export const TEACHERS_DE: Guide = {
  lang: 'de',
  page: 'teachers',
  mainSource: CITE.tahernejadTeachers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fußschmerzen als Lehrer oder Lehrerin: Übungen und Schuhe',
  description:
    'Warum ein Schultag die Füße belastet, 3-Minuten-Übungen für die Pause, was bei Schuhen und Böden hilft und wann es Plantarfasziitis ist.',
  h1: 'Fußschmerzen bei Lehrkräften: was ein Schultag mit deinen Füßen macht und was hilft',
  lede:
    'Fußschmerzen bei Lehrkräften kommen vor allem von stundenlangem Stehen und Gehen durch die Klasse auf harten Böden. Die Maßnahmen mit den besten Belegen, Dehnungen für Wade und Plantarfaszie und Krafttraining für die Wade, dauern 3 bis 5\u00A0Minuten und passen zwischen zwei Stunden. Die Leitlinie von 2023 zu Fersenschmerzen bewertet diese Dehnungen mit **A**, ihrem höchsten Empfehlungsgrad, und Krafttraining mit **B** (Koc und Kollegen, 2023). Zu den Füßen von Lehrkräften gibt es wenig Forschung: In einer Übersichtsarbeit von 2024 berichteten 27\u00A0Studien über Schmerzen in der Sprunggelenksregion, meist zusammen mit dem Fuß gezählt, und der zusammengefasste Wert lag bei 30\u00A0% der Lehrkräfte (Tahernejad und Kollegen, 2024).',
  intro: [
    'Diese Seite handelt vom Schultag: Stehen an der Tafel, Gehen zwischen den Tischen, Pausenaufsicht auf dem Flur und im Hof und was du in der Pause zwischen zwei Stunden oder nach dem letzten Klingeln tun kannst. Wenn du in einem anderen Beruf den ganzen Tag stehst, ist [Fußschmerzen vom Stehen](/de/fussschmerzen-vom-stehen/) der allgemeine Ratgeber, und [Fußschmerzen in der Pflege](/de/fussschmerzen-vom-stehen/) behandelt lange Schichten im Krankenhaus. Wenn deine Ferse bei den ersten Schritten am Morgen am meisten wehtut, lies weiter bei [Plantarfasziitis](/de/plantarfasziitis/).',
  ],
  toc: true,
  takeaways: [
    'In einer Übersichtsarbeit von 2024 mit 44\u00A0Studien und 15.972\u00A0Lehrkräften lag der zusammengefasste Wert für Schmerzen in der Sprunggelenksregion (meist zusammen mit dem Fuß gezählt) bei 30\u00A0% in 27\u00A0Studien, unter Nacken und unterem Rücken mit je 47\u00A0%. Die Ergebnisse unterschieden sich stark zwischen den Studien (Tahernejad und Kollegen, 2024).',
    'In einer Umfrage unter 1.439\u00A0Lehrkräften in einer einzigen Region Saudi-Arabiens berichteten 85,5\u00A0% über Fußschmerzen in den letzten 12\u00A0Monaten, und sie waren häufiger bei Lehrkräften mit 16 oder mehr Stunden pro Woche (Alqahtani, 2020). Andere Umfragen fanden deutlich niedrigere Werte, lies das also als Ergebnis aus einer Region.',
    'Wir haben keine Studie gefunden, die gemessen hat, wie viele Stunden eine typische Lehrkraft steht. In einer Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen erhöhte Stehen über den größten Teil des Arbeitstags die Chance auf eine Plantarfasziitis um das 3,6-Fache, und eine stark eingeschränkte Beweglichkeit im Sprunggelenk, meist durch eine verkürzte Wade, um das 23,3-Fache (Riddle und Kollegen, 2003).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Plantarfaszie und Wade mit Empfehlungsgrad **A** und Krafttraining mit **B**. Einlagen allein bekommen **Empfehlungsgrad B gegen die Anwendung** (Koc und Kollegen, 2023).',
    'Bei 50\u00A0Menschen mit Fersenschmerzen und 25 ohne standen die mit Fersenschmerzen 3,4\u00A0Stunden am Tag länger und trugen Schuhe mit härteren Fersen. Das ist ein Zusammenhang, kein Beweis für eine Ursache (Landorf und Kollegen, 2023).',
  ],
  sections: [
    {
      h2: 'Was macht ein Schultag mit deinen Füßen?',
      keyFact: 'Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf eine Plantarfasziitis um das 3,6-Fache und eine eingeschränkte Beweglichkeit im Sprunggelenk um das 23,3-Fache, in einer Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen (Riddle und Kollegen, 2003).',
      paragraphs: [
        '**Ein Schultag mischt ruhiges Stehen mit kurzen Wegen, meist auf harten Böden.** Du stehst an der Tafel oder am Pult, gehst durch die Reihen, während die Klasse arbeitet, und stehst dann wieder bei der Pausenaufsicht auf dem Flur oder im Hof. Ruhiges Stehen belastet Ferse, Plantarfaszie (das Band unter dem Fuß, das das Gewölbe trägt) und Wade über lange Zeit ohne die Pumpwirkung, die das Gehen bringt.',
        'Wir haben keine Studie gefunden, die gemessen hat, wie viele Stunden eine typische Lehrkraft steht, deshalb nennt diese Seite keine Zahl. Untersucht wurde langes Stehen im Allgemeinen. Eine Übersichtsarbeit von 2015 zur Arbeit im Stehen brachte es mit Beschwerden in Beinen und Füßen, Ermüdung und geschwollenen Beinen in Verbindung und zählte Bodenmatten, stützende Schuhe, Kompressionsstrümpfe und Möglichkeiten zum Wechsel zwischen Sitzen und Stehen zu den Maßnahmen mit gewissen Belegen (Waters und Dick, 2015).',
        'In einer Übersichtsarbeit von 2017 mit 25\u00A0Laborstudien nahmen Beschwerden im unteren Rücken und in den Beinen zu, je länger die Menschen ohne Pause standen. Die Autoren schlugen vor, nicht länger als etwa 40\u00A0Minuten am Stück zu stehen (Coenen und Kollegen, 2017). Das ist ungefähr eine Unterrichtsstunde.',
        'Auch die Wade zählt. In einer Studie von 2003 war eine [verkürzte Wade](/de/verspannte-waden/) der stärkste Risikofaktor für Plantarfasziitis, mit einer 23,3-fachen Chance, und Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache (Riddle und Kollegen, 2003). Eine Lehrkraft, die den ganzen Tag auf den Beinen ist und verkürzte Waden hat, hat beides.',
      ],
      cites: [CITE.waters, CITE.coenen, CITE.riddle],
    },
    {
      h2: 'Wie häufig sind Fußschmerzen bei Lehrkräften?',
      keyFact: 'Schmerzen in der Sprunggelenksregion, meist zusammen mit dem Fuß gezählt, lagen zusammengefasst bei 30\u00A0% in 27\u00A0Studien mit 8.634\u00A0Lehrkräften (Tahernejad und Kollegen, 2024).',
      paragraphs: [
        '**Häufig, aber weniger untersucht als Rücken und Nacken von Lehrkräften.** Eine Übersichtsarbeit von 2024 fasste 44\u00A0Studien mit 15.972\u00A0Lehrkräften zusammen. Nacken- und Kreuzschmerzen lagen vorn, mit je 47\u00A0%. Schmerzen in der Sprunggelenksregion, die die meisten Studien zusammen mit dem Fuß zählten, lagen zusammengefasst bei 30\u00A0% in 27\u00A0Studien mit 8.634\u00A0Lehrkräften. Die Studien unterschieden sich stark voneinander, und die Autoren fanden für den Wert zum Sprunggelenk Hinweise auf einen Publikationsbias. Lies 30\u00A0% also als grobe Mitte, nicht als genaue Rate.',
        'Eine frühere Übersichtsarbeit fand, dass nur wenige Studien überhaupt Beine und Füße von Lehrkräften untersucht hatten und dass Bein- und Fußschmerzen seltener angegeben wurden als Schmerzen in Rücken, Nacken und Armen (Erick und Smith, 2011).',
        'Die größte Umfrage speziell zum Fuß, die wir gefunden haben, befragte 1.439\u00A0Lehrkräfte in einer Region Saudi-Arabiens. 85,5\u00A0% berichteten über Fußschmerzen in den letzten 12\u00A0Monaten. Sie waren häufiger bei Lehrkräften mit 16 oder mehr Stunden pro Woche (88\u00A0%) als bei denen mit weniger (81,4\u00A0%) und bei denen mit mehr als 10\u00A0Jahren im Beruf (86,8\u00A0% gegenüber 82,6\u00A0%). Es war ein Fragebogen mit Selbstauskunft in einer einzigen Region, und die meisten Befragten waren Frauen. Das Ergebnis passt also vielleicht nicht zu deiner Schule (Alqahtani, 2020).',
      ],
      cites: [CITE.tahernejadTeachers, CITE.erickTeachers, CITE.alqahtaniTeachers],
    },
    {
      h2: 'Welche Übungen passen zwischen zwei Stunden?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Plantarfaszie und Wade mit A, ihrem höchsten Empfehlungsgrad, und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Die Übungen unten stammen aus der Leitlinie zur Plantarfasziitis. Sie wurden nicht bei Lehrkräften getestet, aber sie setzen an den Geweben an, die ein Tag im Stehen belastet: Wade, Plantarfaszie und Ferse. Für die meisten brauchst du nur eine Wand oder einen Tisch, sie passen also in die Pause zwischen zwei Stunden oder in eine Freistunde. Das sind die Startdosen von Walkito, keine Verordnung. [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
        'Dehnungen bekommen den höchsten Empfehlungsgrad der Leitlinie, **A**. Krafttraining für die Wade bekommt ein **B**. Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf.',
      ],
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Bei Lehrkräften nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Tagen, zwischen den Stunden',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an die Wand oder an den Rahmen der Tafel. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse, deshalb zählt diese Dehnung, auch wenn du sie weiter oben spürst.',
          stop: 'Der Schmerz 6/10 erreicht',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Bei Lehrkräften nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Tagen, zwischen den Stunden',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position an der Wand, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Der Schmerz 6/10 erreicht',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Bei Lehrkräften nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'An den meisten Tagen, nach dem Aufwachen und nach dem Sitzen',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt, und eine weitere am Schreibtisch, bevor du nach einer Freistunde aufstehst.',
          stop: 'Der Schmerz 6/10 erreicht',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage, 3 pro Woche, nie zwei hintereinander',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich an dein Pult, die Füße flach am Boden, und drück dich über die Fußballen nach oben. Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, und die Ferse wird kaum belastet. Das geht unter dem Tisch, während die Klasse still arbeitet.',
          stop: 'Der Schmerz 6/10 erreicht',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: Drück dich über die Fußballen nach oben',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage, sobald das Fersenheben im Sitzen leicht fällt',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, eine Hand am Tisch, steig gerade über die großen Zehen nach oben und senk dich langsam ab. Beide Füße teilen sich die Last. Mehr dazu, wie du steigerst: [Fersenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
          stop: 'Der Schmerz 6/10 erreicht',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur steigt auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Die Übung steht hier für mehr Wohlbefinden nach einem langen Tag.' },
          dose: '1\u00A0Minute',
          often: 'Nach der Schule, an Erholungstagen',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam und mit festem Druck über einen Massageball. Wenn du das Gesicht verziehst, nimm Druck weg. Mit einem Ball in der Schreibtischschublade wird das zur Gewohnheit nach dem Unterricht. Mehr unter [Massageball bei Plantarfasziitis](/de/massageball-plantarfasziitis/).',
          stop: 'Du verziehst das Gesicht, oder die Ferse ist gerötet, warm oder geschwollen',
          image: 'Übung: Fußrollen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam und mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Sohle ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Wie baust du Fußübungen in einen Schultag ein?',
      paragraphs: [
        'Du brauchst kein eigenes Training. Knüpf jede Übung an einen Moment, den es im Schultag sowieso gibt. Die Dosen sind dieselben wie oben, die Tabelle sagt nur, wann sie passen.',
      ],
      table: {
        caption: 'Eine Möglichkeit, die Übungen über einen Schultag zu verteilen',
        head: ['Wann', 'Was', 'Zeit'],
        rows: [
          ['Vor dem Aufstehen', 'Plantarfaszien-Dehnung', '2\u00A0Minuten'],
          ['Vor dem ersten Klingeln', 'Waden- und Soleusdehnung an einer Wand', '4\u00A0Minuten'],
          ['Während die Klasse arbeitet', 'Hinsetzen, Fersenheben im Sitzen', '1 bis 2\u00A0Minuten'],
          ['Pause zwischen den Stunden', 'Wadendehnung, pro Pause eine Seite', '1\u00A0Minute'],
          ['Nach der Schule', 'Fersenheben beidbeinig, Fußrollen', '2 bis 3\u00A0Minuten'],
        ],
      },
      after: [
        'Mach das Krafttraining (das Fersenheben) an 3\u00A0Tagen pro Woche, nie an zwei Tagen hintereinander. Die Dehnungen gehen an den meisten Tagen. Wenn du nur eine Sache schaffst, nimm die Wadendehnung: Sie setzt am stärksten Risikofaktor aus der Studie von 2003 an.',
        'Die 40\u00A0Minuten aus den Studien zum Stehen sind ein guter Anhaltspunkt. Wenn die Klasse mit der Stillarbeit beginnt, setz dich ein paar Minuten hin, auch auf einen Hocker vorn im Raum. So unterbrichst du das Stehen, ohne die Klasse zu verlassen (Coenen und Kollegen, 2017).',
      ],
      cites: [CITE.coenen, CITE.riddle],
    },
    {
      h2: 'Welche Schuhe sind die besten für Lehrkräfte, die den ganzen Tag stehen?',
      paragraphs: [
        '**Keine Studie hat Schuhe für Lehrkräfte verglichen, und keine Studie spricht für eine bestimmte Marke oder Form.** Die Leitlinie von 2023 zu Fersenschmerzen bewertet keine Schuharten. Die vorhandenen Belege sprechen für Dämpfung unter der Ferse und für eine gute Passform.',
        'In einer Studie von 2023 wurden 50\u00A0Menschen mit Fersenschmerzen unter der Ferse mit 25 passenden Menschen ohne diese Schmerzen verglichen. Die mit Fersenschmerzen standen 3,4\u00A0Stunden am Tag länger und trugen Schuhe mit härteren Fersen. Schuhform, Absatzhöhe und Stehen auf harten Böden unterschieden sich zwischen den Gruppen nicht (Landorf und Kollegen, 2023). Das zeigt einen Zusammenhang, nicht dass weiche Fersen Schmerzen verhindern, aber es spricht für einen Schuh mit gedämpfter Ferse für lange Tage an der Tafel.',
        'Eine praktische Checkliste, die auf Passform und Komfort beruht, nicht auf einer Studie:',
        {
          list: [
            'eine gedämpfte Ferse und eine feste Fersenkappe (die Rückseite des Schuhs knickt nicht ein, wenn du sie zusammendrückst)',
            'Platz, damit sich die Zehen ausbreiten können, ohne Drücken am Ende des Tages',
            'ein niedriger, stabiler Absatz statt eines hohen oder sehr dünnen',
            'ein zweites Paar zum Wechseln, damit du nicht jeden Tag dasselbe abgetragene Paar trägst',
          ],
        },
        '**Einlagen können einen Tag angenehmer machen, aber verlass dich nicht nur auf sie.** Die Leitlinie von 2023 bewertet Einlagen allein mit **Empfehlungsgrad B gegen die Anwendung** und in Kombination mit Dehnen und Krafttraining mit **C** (Koc und Kollegen, 2023). [Einlagen oder Übungen](/de/einlagen-oder-uebungen/) vergleicht beides und erklärt, worauf du bei Einlagen für Plantarfasziitis achten solltest.',
        'Kompressionsstrümpfe sind eine weitere Möglichkeit, wenn sich deine Beine am Ende des Tages schwer und geschwollen anfühlen. In einer Studie mit 40\u00A0Sicherheitskräften in langen Schichten im Stehen verhinderten Strümpfe mit 15 bis 20\u00A0mmHg und mit 20 bis 30\u00A0mmHg beide den Anstieg von Beschwerden und Schwellung in den Beinen, der mit normalen Socken auftrat (Garcia und Kollegen, 2023). Lehrkräfte wurden darin nicht untersucht.',
      ],
      cites: [CITE.landorfFootwear, CITE.guideline, CITE.garcia],
    },
    {
      h2: 'Machen Böden und Matten im Klassenzimmer einen Unterschied?',
      paragraphs: [
        'Die meisten Klassenzimmer haben harte Böden: Fliesen, Vinyl auf Beton oder dünnen Teppich. Keine Studie hat Böden im Klassenzimmer und die Füße von Lehrkräften untersucht. Die Übersichtsarbeit von 2015 zur Arbeit im Stehen zählt Bodenmatten zu den Maßnahmen mit gewissen Belegen für weniger Beschwerden, neben Schuhen und Möglichkeiten zum Wechsel zwischen Sitzen und Stehen (Waters und Dick, 2015).',
        'Eine Matte hilft nur dort, wo du wirklich stehst. Wenn du von einem festen Platz aus unterrichtest, etwa an der Tafel, am Beamer oder an einem Labortisch, lohnt sich dort ein Versuch mit einer Anti-Ermüdungsmatte. Wenn du durch die Klasse gehst, ist der Schuh deine Matte.',
        'Bewegung ist die andere Hälfte. Die Studien zum Stehen fanden, dass Beschwerden mit der Zeit im ruhigen Stehen zunehmen (Coenen und Kollegen, 2017). Gehen zwischen den Tischen, Sitzen während der Stillarbeit und das Gewicht verlagern unterbrechen die gleichbleibende Belastung.',
        'Geh zu Hause morgens als Erstes nicht barfuß auf harten Böden, wenn deine Ferse wehtut. [Fersenschmerzen morgens](/de/fersenschmerzen-morgens/) erklärt, warum die ersten Schritte zählen.',
      ],
      cites: [CITE.waters, CITE.coenen],
    },
    {
      h2: 'Wann ist der Fersenschmerz einer Lehrkraft eine Plantarfasziitis?',
      keyFact: 'Von den Lehrkräften mit Fußschmerzen in einer Umfrage sagten 25,8\u00A0%, der Schmerz komme früh am Morgen und nach einer Pause, ein typisches Muster der Plantarfasziitis, auch wenn in der Umfrage niemand eine Diagnose bekam (Alqahtani, 2020).',
      paragraphs: [
        'Allgemeine Schmerzen am Ende eines Schultags, die am nächsten Morgen weg sind, sind Ermüdung vom Stehen. **Die Plantarfasziitis hat ein typisches Muster: stechender Schmerz unter der Ferse bei den ersten Schritten am Morgen oder nach dem Sitzen, der beim Gehen nachlässt und nach einem langen Tag auf den Beinen zurückkommt.** In der Umfrage aus Saudi-Arabien sagten 25,8\u00A0% der Lehrkräfte mit Fußschmerzen, der Schmerz komme früh am Morgen und nach einer Pause (Alqahtani, 2020). In dieser Umfrage wurde niemand diagnostiziert. Das ist also ein Muster, keine Zahl von Plantarfasziitis-Fällen.',
        'Wenn du dich darin wiedererkennst, fang mit [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) an. Etwa 90\u00A0% der Menschen mit Plantarfasziitis werden mit nichtoperativer Behandlung besser, auch wenn das drei bis sechs Monate dauern kann (Latt und Kollegen, 2020). [Wie lange dauert eine Plantarfasziitis](/de/wie-lange-dauert-plantarfasziitis/) hat die Einzelheiten.',
        'Andere Muster deuten auf etwas anderes hin:',
        {
          list: [
            'ein tiefer Schmerz in der Mitte der Ferse, schlimmer barfuß auf harten Böden: [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/)',
            'Schmerz entlang des Gewölbes, der im Lauf des Tages zunimmt: [Schmerzen im Fußgewölbe](/de/schmerzen-im-fussgewoelbe/)',
            'Schmerz unter dem Fußballen: [Vorfußschmerzen](/de/metatarsalgie-vorfussschmerzen/)',
            'Schmerz an der Rückseite der Ferse, in der Sehne: [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/)',
          ],
        },
        'Nicht sicher, welches Muster es ist? Achte darauf, wo und wann es wehtut. **Wenn du dann noch unsicher bist, lass es ärztlich abklären, bevor du den Fuß mit Übungen belastest.**',
      ],
      cites: [CITE.alqahtaniTeachers, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Warum tun meine Füße nach einem ganzen Schultag so weh?',
      cites: [CITE.waters, CITE.coenen],
      a: 'Im Unterricht stehst und gehst du den größten Teil des Tages auf harten Böden, und das belastet Ferse, Gewölbe und Wade fast ohne Pause. Übersichtsarbeiten zur Arbeit im Stehen bringen langes Stehen mit Beschwerden in Beinen und Füßen und mit Ermüdung in Verbindung, und Laborstudien fanden, dass die Beschwerden zunehmen, je länger Menschen ruhig stehen. Pausen im Sitzen, Wadendehnungen und gedämpfte Schuhe helfen.',
    },
    {
      q: 'Wie häufig sind Fußschmerzen bei Lehrkräften?',
      cites: [CITE.tahernejadTeachers, CITE.alqahtaniTeachers],
      a: 'Eine Übersichtsarbeit von 2024 kam für Schmerzen in der Sprunggelenksregion, meist zusammen mit dem Fuß gezählt, auf zusammengefasst 30\u00A0% der Lehrkräfte in 27\u00A0Studien, mit sehr unterschiedlichen Ergebnissen zwischen den Studien. Eine Umfrage unter 1.439\u00A0Lehrkräften in einer einzigen Region Saudi-Arabiens fand bei 85,5\u00A0% Fußschmerzen im letzten Jahr. Nacken- und Kreuzschmerzen werden häufiger angegeben als Fußschmerzen.',
    },
    {
      q: 'Welche Schuhe sind die besten für Lehrkräfte, die den ganzen Tag stehen?',
      cites: [CITE.landorfFootwear, CITE.guideline],
      a: 'Keine Studie hat Schuhe für Lehrkräfte getestet. Achte auf eine gedämpfte Ferse, eine feste Fersenkappe, Platz für die Zehen und einen niedrigen, stabilen Absatz. In einer Studie trugen Menschen mit Fersenschmerzen Schuhe mit härteren Fersen und standen jeden Tag länger. Einlagen allein bekommen in der Leitlinie von 2023 zu Fersenschmerzen Empfehlungsgrad B gegen die Anwendung, kombiniere sie also mit Dehnen.',
    },
    {
      q: 'Welche Dehnungen können Lehrkräfte zwischen den Stunden machen?',
      cites: [CITE.guideline],
      a: 'Eine Wadendehnung und eine Soleusdehnung an der Wand dauern etwa eine Minute pro Seite: 2-mal 30\u00A0Sekunden halten pro Bein. Die Plantarfaszien-Dehnung geht im Sitzen am Pult, 2-mal 30\u00A0Sekunden halten pro Fuß. Die Leitlinie von 2023 zu Fersenschmerzen bewertet diese Dehnungen mit A, sie wurde aber für Plantarfasziitis geschrieben, nicht für Lehrkräfte.',
    },
    {
      q: 'Kann ständiges Stehen im Lehrerberuf eine Plantarfasziitis auslösen?',
      cites: [CITE.riddle],
      a: 'Es kann das Risiko erhöhen. In einer Studie von 2003 mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne erhöhte Stehen über den größten Teil des Arbeitstags die Chance um das 3,6-Fache und eine stark eingeschränkte Beweglichkeit im Sprunggelenk, meist durch eine verkürzte Wade, um das 23,3-Fache. Die Studie hat keine Lehrkräfte untersucht, und keine Studie hat Plantarfasziitis speziell bei Lehrkräften gezählt.',
    },
    {
      q: 'Helfen Anti-Ermüdungsmatten Lehrkräften?',
      cites: [CITE.waters],
      a: 'Vielleicht, wenn du an einem festen Platz stehst. Eine Übersichtsarbeit von 2015 zur Arbeit im Stehen zählt Bodenmatten zu den Maßnahmen mit gewissen Belegen für weniger Beschwerden. Keine Studie hat Matten im Klassenzimmer getestet. Wenn du die meiste Zeit der Stunde durch die Klasse gehst, sind deine Schuhe wichtiger als eine Matte.',
    },
    {
      q: 'Sollten Lehrkräfte Kompressionsstrümpfe tragen?',
      cites: [CITE.garcia],
      a: 'Ein Versuch lohnt sich, wenn sich deine Beine am Ende des Tages schwer oder geschwollen anfühlen. In einer Studie mit 40\u00A0Sicherheitskräften in langen Schichten im Stehen verhinderten Strümpfe mit 15 bis 20\u00A0mmHg und mit 20 bis 30\u00A0mmHg beide den Anstieg von Beschwerden und Schwellung in den Beinen, der mit normalen Socken auftrat. Lehrkräfte waren nicht dabei.',
    },
    {
      q: 'Wie lange sollte eine Lehrkraft stehen, bevor sie sich hinsetzt?',
      cites: [CITE.coenen],
      a: 'Für Lehrkräfte gibt es keine getestete Grenze. Eine Übersichtsarbeit von 2017 zu Laborstudien über das Stehen fand, dass die Beschwerden mit der Zeit zunehmen, und schlug vor, nicht länger als etwa 40\u00A0Minuten am Stück zu stehen. Praktisch heißt das: Setz dich ein paar Minuten hin, wenn die Klasse mit der Stillarbeit beginnt, und geh durch die Klasse, statt an einer Stelle ruhig zu stehen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Schmerz nach einem Sturz, einem Umknicken oder einem Stoß begann, zum Beispiel bei der Pausenaufsicht oder auf der Treppe',
      'du den Fuß nicht belasten kannst oder humpelst',
      'der Fuß taub ist, kribbelt, brennt, geschwollen oder warm ist',
      'die Ferse oder der Fuß gerötet ist oder du Fieber hast oder dich krank fühlst',
      'der Schmerz dich nachts weckt oder in Ruhe da ist',
      'der Schmerz an einer punktgenauen Stelle sitzt und bei Belastung schlimmer wird, was auf einen Ermüdungsbruch hindeuten kann',
      'eine Wade oder ein Bein plötzlich angeschwollen ist und schmerzt, gerötet oder warm ist',
      'du Diabetes, ein vermindertes Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst die Reihenfolge, die Dosen und den Zeitpunkt für eine schwerere Variante nicht selbst herausfinden. Walkito baut Woche für Woche einen Plan rund um ein Ziel. Wenn deine Ferse dem morgendlichen Muster der Plantarfasziitis folgt, ist das erste Ziel ein Morgenschmerz von 1 von 10 oder weniger an 14\u00A0Tagen hintereinander.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten, so passt eine Einheit vor das erste Klingeln oder nach dem letzten. Vor jeder Einheit bewertest du deinen Fersenschmerz am Morgen, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['nurses', 'standing', 'heelPain'],
  crumb: 'Fußschmerzen bei Lehrkräften',
  campaign: 'guide-teachers-foot-pain-de',
};
