import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Fersensporn-Übungen (DE) ──────────────────────────────────────────
 *
 * Translated from `articles/heel-spur-exercises.ts`, written around the
 * German queries «Fersensporn Übungen», «Fersensporn dehnen»,
 * «Fersensporn was hilft». Informal «du», exercise names as in
 * `lib/guides/de.ts`. Figures, doses, grades and qualifiers are identical
 * to the English page. No new citations.
 */

export const HEEL_SPUR_EXERCISES_DE: Guide = {
  lang: 'de',
  page: 'heelSpurExercises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersensporn: Übungen und Dehnungen gegen die Schmerzen',
  description:
    'Übungen und Dehnungen bei Fersensporn für Plantarfaszie und Wade: Routine, Dosis und Steigerung, die Schmerzen lindern, ohne den Sporn aufzulösen.',
  h1: 'Übungen bei Fersensporn: Dehnen und Kräftigen gegen den Schmerz rund um den Sporn',
  lede:
    'Übungen lösen keinen Fersensporn auf. Der Sporn ist Knochen, und Knochen schrumpft nicht durch Dehnen. Aber der Schmerz, den Menschen mit Fersensporn spüren, kommt fast immer von der Plantarfaszie am Sporn und von der Wade, die über die Achillessehne an der Ferse zieht, nicht vom Knochen selbst. Die Übungen unten zielen auf diese Weichteile. Es sind dieselben, die die Leitlinie von 2023 zu Fersenschmerzen bei Plantarfasziitis empfiehlt.',
  intro: [
    'Wenn du zuerst den Unterschied zwischen Fersensporn und Plantarfasziitis verstehen willst, lies [Plantarfasziitis oder Fersensporn](/de/plantarfasziitis-oder-fersensporn/). Diese Seite ist die praktische Routine: welche Übungen, wie viele, wie du steigerst und wann du aufhörst.',
  ],
  takeaways: [
    'Übungen bei Fersensporn wirken, indem sie an der Plantarfaszie am Sporn und an den Wadenmuskeln ansetzen, die über die Achillessehne an der Ferse ziehen, nicht indem sie den Sporn selbst verändern.',
    'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, **A**, und Krafttraining ein **B** (Koc und Kollegen, 2023).',
    'In einer Studie mit 48\u00A0Personen mit Plantarfasziitis linderte schweres Fersenheben mit einem Handtuch unter den Zehen die Schmerzen nach drei Monaten schneller als Dehnen allein, nach zwölf Monaten lagen beide Gruppen aber gleichauf (Rathleff und Kollegen, 2015).',
    'Eine verkürzte Wade, gemessen als eingeschränkte Dorsalflexion im Sprunggelenk, war in einer gematchten Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen der stärkste unabhängige Risikofaktor für Plantarfasziitis (Riddle und Kollegen, 2003).',
    'Eine systematische Übersichtsarbeit mit Metaanalyse fand, dass sowohl Waden- als auch Plantarfaszien-Dehnung die Schmerzen stärker linderten als kein Dehnen (Siriphorn und Eksakulkla, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Warum helfen Übungen bei Fersensporn?',
      keyFact: 'In einer Studie mit 530\u00A0Menschen mit Fußschmerzen kam ein Fersensporn nur an 6\u00A0% der Füße allein vor, meist zusammen mit einer verdickten Plantarfaszie (Menz und Kollegen, 2019).',
      paragraphs: [
        'Der Fersensporn ist ein knöcherner Auswuchs an der Unterseite des Fersenbeins. In einer Studie mit 530\u00A0Menschen ab 50 mit Fußschmerzen war ein Fersensporn allein selten (6\u00A0% der Füße), und Fersenschmerzen hingen mit einem Sporn zusammen mit einer verdickten Plantarfaszie zusammen, dem Gewebeband unter dem Fuß (Menz und Kollegen, 2019). Der Schmerz kommt aus dem Weichgewebe, und genau das können Übungen erreichen.',
        'Dehnen von Plantarfaszie und Wade senkt die Spannung am Ansatz an der Ferse. Kräftigen der Wade baut die Belastbarkeit der Kette auf, die bei jedem Fersenaufsatz die Last abfängt. Zusammen senken sie die tägliche Belastung des Gewebes rund um den Sporn.',
        'Kein Übungsprogramm lässt einen Sporn auf dem Röntgenbild verschwinden. Aber die meisten Menschen mit Fersensporn brauchen das auch nicht. Sie brauchen, dass der Schmerz abklingt, und das kommt daher, dass Faszie und Wade kräftiger und beweglicher werden.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
    {
      h2: 'Welche Dehnungen helfen bei Fersensporn-Schmerzen?',
      keyFact: 'Eine systematische Übersichtsarbeit fand, dass sowohl Waden- als auch Plantarfaszien-Dehnung die Schmerzen bei Plantarfasziitis stärker linderten als kein Dehnen (Siriphorn und Eksakulkla, 2020).',
      paragraphs: [
        'Dehnen ist der Ausgangspunkt. Die Leitlinie von 2023 bewertet das Dehnen von Plantarfaszie und Wade mit **A**, ihrer besten Bewertung. Eine systematische Übersichtsarbeit mit Metaanalyse zum Dehnen bei Plantarfasziitis fand, dass sowohl Waden- als auch Plantarfaszien-Dehnung die Schmerzen stärker linderten als kein Dehnen (Siriphorn und Eksakulkla, 2020). Fang mit diesen drei an.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie. Eine Studie von 2003 mit 101\u00A0Personen (82 davon ausgewertet) fand diese Dehnung nach 8\u00A0Wochen wirksamer als Wadendehnung allein.' },
          dose: '10-mal 10\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg einen Knöchel über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Halte, dann lass los. Mach das jeden Morgen vor dem ersten Schritt und nach langem Sitzen.',
          often: 'Jeden Morgen und nach dem Sitzen',
          feel: 'Eine Dehnung entlang des Gewölbes, kein stechender Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft zurück, bevor du aufstehst',
          alt: 'Eine sitzende Figur zieht die Zehen zurück, um das Gewölbe zu dehnen, die Plantarfaszie ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie. Eine eingeschränkte Dorsalflexion im Sprunggelenk war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor für Plantarfasziitis.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Das hintere Bein bleibt gestreckt, die Ferse am Boden, die Hüfte nach vorn. Halte, bis du die Dehnung in der oberen Wade spürst. Der Gastrocnemius, der größere, oberflächlichere Wadenmuskel, lässt sich nur mit gestrecktem Knie dehnen.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, nach vorn lehnen',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (Knie gebeugt)',
          evidence: { level: 'strong', why: 'Bewertung A in der Leitlinie. Zielt auf den Soleus, den tieferen Wadenmuskel, der nur mit gebeugtem Knie loslässt.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand wie bei der Wadendehnung, dann beug das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Der Soleus liegt unter dem Gastrocnemius und setzt näher an der Ferse an.',
          often: 'Die meisten Einheiten, nach der Dehnung mit gestrecktem Knie',
          feel: 'Eine Dehnung tiefer in der Wade, nahe der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis du die Dehnung tiefer spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.digiovanni2003, CITE.riddle],
    },
    {
      h2: 'Welche Kräftigungsübungen helfen bei Fersensporn-Schmerzen?',
      keyFact: 'In einer Studie mit 48\u00A0Personen schnitt die Fersenheben-Gruppe nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab als die Gruppe, die nur dehnte (Rathleff und Kollegen, 2015).',
      paragraphs: [
        'In den ersten Wochen reicht Dehnen allein oft aus. Sobald der Morgenschmerz nachlässt, baut Wadenkrafttraining die Belastbarkeit auf, die die Kette rund um die Ferse braucht. Die Leitlinie bewertet Krafttraining mit **B**, ihrer zweitbesten Bewertung. In der einzigen Studie, die gezielt Fersenheben bei Plantarfasziitis getestet hat, wurden 48\u00A0Personen in eine Gruppe mit belastetem Fersenheben und eine Gruppe nur mit Dehnen aufgeteilt. Die Fersenheben-Gruppe schnitt nach drei Monaten im Foot Function Index um 29\u00A0Punkte besser ab (Rathleff und Kollegen, 2015).',
        'Fang auf der leichtesten Stufe an und geh erst eine Stufe höher, wenn sie sich zwei Einheiten hintereinander leicht angefühlt hat. Die Steigerung unten reicht von der Übung im Sitzen bis zum belasteten Fersenheben mit Handtuch aus der Studie.',
      ],
      exercises: [
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Bewertung B gilt für Krafttraining allgemein. Diese Einstiegsstufe mit wenig Last wurde nicht einzeln getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Setz dich hin, die Füße stehen flach auf dem Boden. Drück dich über die Fußballen beider Füße nach oben. Hände auf den Knien geben sanften Widerstand. So fängst du mit der geringsten Last an, die Wade zu trainieren.',
          often: 'Krafttage',
          feel: 'Leichte Arbeit in den Waden, fast ohne Last auf der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: Drück dich über die Fußballen nach oben',
          alt: 'Eine sitzende Figur hebt beide Fersen, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Bewertung B in der Leitlinie. Eine Zwischenstufe auf dem Weg zum belasteten Training auf einem Bein.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last. Halt dich zum Gleichgewicht an einer Wand oder einem Geländer fest.',
          often: 'Krafttage, sobald sich das Fersenheben im Sitzen zwei Einheiten lang leicht angefühlt hat',
          feel: 'Die Waden arbeiten zusammen',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: hochkommen, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Halten (isometrisch)',
          evidence: { level: 'moderate', why: 'Bewertung B in der Leitlinie. Isometrisches Halten in der Endposition. In keiner eigenen Studie zur Plantarfasziitis getestet.' },
          dose: '3-mal 20\u00A0Sekunden halten, beide Füße',
          how: 'Komm auf beiden Füßen auf die Zehen und bleib oben ruhig. Sink nicht wieder ab. Das Halten belastet die Sehne ohne das Federn einer vollen Wiederholung.',
          often: 'Krafttage, die Stufe nach dem beidbeinigen Fersenheben',
          feel: 'Die Waden arbeiten, um ruhig zu bleiben',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hochkommen, dann oben ruhig bleiben',
          alt: 'Eine Figur hält sich auf den Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch (einbeinig)',
          evidence: { level: 'strong', why: 'Die Übung aus der randomisierten Studie von Rathleff 2015. Bewertung B in der Leitlinie.' },
          dose: 'Studienprotokoll: 3\u00A0Sätze mit 12RM, gesteigert auf 5\u00A0Sätze mit 8RM. Walkito beginnt mit 3\u00A0Sätzen à 12, jedes Bein',
          how: 'Stell dich mit einem Fuß auf die Kante einer Stufe, ein zusammengerolltes Handtuch liegt unter allen fünf Zehen. Drei Sekunden hoch, zwei Sekunden halten, drei Sekunden runter. Das Handtuch aktiviert den Windlass-Mechanismus und belastet so die Plantarfaszie zusammen mit der Wade. Nimm mit einem Rucksack Gewicht dazu, wenn die letzte Wiederholung nicht mehr schwer ist.',
          often: 'In der Studie jeden zweiten Tag. Walkito plant es an Krafttagen ein, nie zwei hintereinander.',
          feel: 'Harte Arbeit in der Wade und ein Zug unter dem Gewölbe',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, oben halten, drei Sekunden runter',
          alt: 'Eine Figur kommt auf einer Stufe mit einem zusammengerollten Handtuch unter dem Fuß auf die Zehen',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Wie steigerst du die Übungen bei Fersensporn?',
      paragraphs: [
        'Steigere nach Gefühl, nicht nach Kalender. Die Regel: Wenn sich die aktuelle Stufe zwei Einheiten hintereinander leicht angefühlt hat, geh eine Stufe höher. Wenn der Morgenschmerz nach einer Einheit schlimmer ist, bleib auf der aktuellen Stufe oder geh eine zurück.',
      ],
      table: {
        caption: 'Steigerung der Übungen bei Fersensporn',
        head: ['Stufe', 'Übung', 'Wann du höher gehst'],
        rows: [
          ['1', 'Nur Plantarfaszien-Dehnung und Wadendehnungen', 'Der Morgenschmerz lässt nach, du willst Krafttraining dazunehmen'],
          ['2', 'Fersenheben im Sitzen (3 x 10)', 'Zwei Einheiten hintereinander leicht'],
          ['3', 'Fersenheben beidbeinig (3 x 10)', 'Zwei Einheiten hintereinander leicht'],
          ['4', 'Fersenheben mit Halten (3 x 20\u00A0Sekunden)', 'Zwei Einheiten hintereinander leicht'],
          ['5', 'Fersenheben mit Handtuch, einbeinig (3 x 12)', 'Last mit einem Rucksack steigern, sobald das eigene Körpergewicht leicht ist'],
        ],
      },
      after: [
        'Mach die Plantarfaszien-Dehnung und die Wadendehnungen auf jeder Stufe. Dehnen lässt du nicht weg, wenn du mit dem Kräftigen anfängst. Die Leitlinie bewertet beides unabhängig voneinander.',
        'Mehr Details zum Fersenheben mit Handtuch und der Forschung dahinter findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Ergänzende Übungen, wenn du magst',
      paragraphs: [
        'Die Dehnungen und das Fersenheben oben sind der Kern. Die folgenden Übungen sind nicht speziell für den Fersensporn, aber sie zielen auf die Fuß- und Sprunggelenkmuskeln, die das Gewölbe stützen und Stöße abfangen. Die Belege für jede davon sind dünner.',
      ],
      exercises: [
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Für das Wohlgefühl zwischen den Einheiten.' },
          dose: '2\u00A0Minuten, jeder Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam über einen Massageball oder eine gefrorene Wasserflasche. Der Druck ist fest, aber nie so stark, dass du zusammenzuckst. Rollen nach einem langen Tag auf den Beinen kann das Gewebe beruhigen.',
          often: 'Erholungstage oder nach einem langen Tag',
          feel: 'Fester Druck unter dem Fuß, nie stechender Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'early', why: 'Eine Übersichtsarbeit von 2024 fand, dass Kurzer-Fuß-Training die Gewölbeform veränderte, aber nicht den Schmerz. Teil eines Programms, das in einer Studie von 2023 die Gewölbemaße verbesserte.' },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt. Krall die Zehen nicht ein. Das trainiert den kleinen Muskel im Gewölbe.',
          often: 'Krafttage',
          feel: 'Das Gewölbe hebt sich, die Zehen bleiben locker',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: Zieh den Fußballen Richtung Ferse',
          alt: 'Ein Bein im Sitzen, der Fuß am Boden, das Gewölbe hervorgehoben, während es sich hebt',
        },
        {
          name: 'Einbeinstand',
          evidence: { level: 'early', why: 'Keine Studie speziell zum Fersensporn. Allgemeines Gleichgewichtstraining für Fuß und Sprunggelenk.' },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Stell dich auf einen Fuß und schau auf einen festen Punkt. Lass den Fuß wackeln. Das Wackeln ist der Fuß, der das Gleichgewicht hält. Steh zur Sicherheit nahe an einer Wand.',
          often: 'Gleichgewichtstage',
          feel: 'Kleine Korrekturen in Fuß und Sprunggelenk',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Steh auf einem Fuß und lass ihn kleine Korrekturen machen',
          alt: 'Eine Figur balanciert auf einem Bein, die Unterschenkelmuskeln sind hervorgehoben',
        },
      ],
      cites: [CITE.cheng, CITE.brijwasi],
    },
    {
      h2: 'Wie sollen sich die Übungen anfühlen, und wann hörst du auf?',
      paragraphs: [
        'Dehnen soll sich wie ein Ziehen anfühlen, nicht wie ein Stechen. Eine Wadendehnung mit angenehmer Spannung in der oberen oder unteren Wade sitzt richtig. Eine Plantarfaszien-Dehnung, die sanft entlang des Gewölbes zieht, sitzt richtig. Wenn das Dehnen den stechenden Schmerz der ersten Schritte auslöst, nimm Spannung raus.',
        'Fersenheben soll sich wie Wadenarbeit anfühlen. Die Variante mit Handtuch bringt zusätzlich einen Zug unter dem Gewölbe, das ist die Belastung der Faszie. Dieser Zug ist erwünscht und der Sinn des Handtuchs.',
        'Hör für heute auf, wenn der Schmerz bei einer Übung **6/10 oder mehr** erreicht oder deine ersten Schritte am nächsten Morgen deutlich schlimmer sind als sonst. Nach dieser Regel, aufhören und eine Stufe zurück, arbeitet auch die App. Leichter Muskelkater, der innerhalb eines Tages abklingt, ist normal, vor allem in den ersten zwei Wochen. Schmerz, der tagelang erhöht bleibt oder von Woche zu Woche schlimmer wird, ist ein Grund, eine Stufe zurückzugehen oder zu einer medizinischen Fachperson zu gehen.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wie lange dauert es, bis Fersensporn-Schmerzen mit Übungen besser werden?',
      paragraphs: [
        'Es gibt keine Studie, die Übungsergebnisse speziell bei Menschen mit Fersensporn misst. Die Zeiträume unten stammen aus Studien zur Plantarfasziitis, der Erkrankung, die in den meisten Fällen den Schmerz rund um den Sporn verursacht.',
        'Eine Übersicht über die klinischen Belege berichtet, dass es etwa 90\u00A0% der Menschen mit Plantarfasziitis mit nicht-operativer Behandlung wie Dehnen und Schuheinlagen besser geht, oft innerhalb einiger Monate (Latt und Kollegen, 2020). In der Studie von Rathleff 2015 lag die Gruppe mit belastetem Fersenheben nach drei Monaten signifikant vor der Gruppe, die nur dehnte.',
        'Kein Übungsprogramm kann einem einzelnen Menschen einen Zeitrahmen versprechen. Was du messen kannst, ist, ob sich etwas verändert. Der Morgenschmerz auf einer Skala von 0 bis 10, vor dem ersten Schritt eingeschätzt, ist das klarste Signal von Tag zu Tag. Die Wadenausdauer, gemessen daran, wie viele einbeinige Fersenheben du schaffst, zeigt die Kraft über Wochen. Beides ist nützlicher als Raten.',
      ],
      cites: [CITE.latt, CITE.rathleff],
    },
    {
      h2: 'Kann man einen Fersensporn auf natürliche Weise loswerden?',
      paragraphs: [
        'Übungen, Dehnen und eine andere Ernährung lösen keinen Fersensporn auf. Der Sporn ist verkalkter Knochen. Er bleibt auf dem Röntgenbild, ob du dehnst oder nicht.',
        'Aber „den Sporn loswerden“ ist selten das richtige Ziel. In der Studie von 2019 kam der Sporn fast immer zusammen mit einer verdickten Plantarfaszie vor, und das Weichgewebe ist der Teil, den Übungen verändern können. Der Schmerz kommt aus dem Weichgewebe. Die Übungen auf dieser Seite zielen auf das Weichgewebe. Wenn der Schmerz abklingt, ist der Sporn kein Problem, das gelöst werden muss.',
        'Wenn dir jemand ein Nahrungsergänzungsmittel, eine Creme oder ein Gerät versprochen hat, das Fersensporne auflöst, sei skeptisch. Keine veröffentlichten Belege stützen diese Behauptung. Das von der Leitlinie empfohlene Vorgehen ist Dehnen, Wadenkrafttraining und Belastungssteuerung.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Welche Übungen helfen bei Fersensporn?',
      cites: [CITE.guideline],
      a: 'Bei Fersensporn-Schmerzen helfen dieselben Übungen, die die Leitlinie von 2023 zu Fersenschmerzen bei Plantarfasziitis empfiehlt: Plantarfaszien-Dehnung (Bewertung A in der Leitlinie), Wadendehnung (Bewertung A) und schrittweises Wadenkrafttraining mit Fersenheben (Bewertung B). Sie zielen auf die Plantarfaszie am Sporn und die Wadenmuskeln, die über die Achillessehne an der Ferse ziehen. Diese Weichteile verursachen meist den Schmerz.',
    },
    {
      q: 'Lösen Übungen den Fersensporn auf?',
      a: 'Nein. Ein Fersensporn ist verkalkter Knochen, und Übungen lösen ihn nicht auf. Die Übungen setzen an der Plantarfaszie am Sporn und an der Wade an, die über die Achillessehne an der Ferse zieht. Diese Weichteile sind fast immer die Quelle des Schmerzes. Wenn der Schmerz mit den Übungen abklingt, ist der Sporn auf dem Röntgenbild kein Problem, das gelöst werden muss.',
    },
    {
      q: 'Wie oft sollte ich bei Fersensporn dehnen?',
      cites: [CITE.guideline, CITE.digiovanni2003],
      a: 'Die Plantarfaszien-Dehnung wirkt am besten jeden Morgen vor dem Aufstehen und nach langem Sitzen. Wadendehnungen passen in die meisten Einheiten. In einer Studie mit 101\u00A0Personen (82 davon ausgewertet) mit chronischen Fersenschmerzen berichtete die Gruppe mit der Plantarfaszien-Dehnung nach 8\u00A0Wochen bessere Ergebnisse als die Gruppe, die nur die Wade dehnte (DiGiovanni und Kollegen, 2003).',
    },
    {
      q: 'Wie lange dauert es, bis Fersensporn-Schmerzen weggehen?',
      cites: [CITE.latt, CITE.rathleff],
      a: 'Die meisten Zeitangaben stammen aus Studien zur Plantarfasziitis, weil meist die gereizte Faszie wehtut. Eine Übersichtsarbeit berichtet, dass es etwa 90\u00A0% der Menschen mit Plantarfasziitis mit nicht-operativer Behandlung besser geht, oft innerhalb einiger Monate (Latt 2020). In einer Studie mit 48\u00A0Personen lag belastetes Fersenheben nach drei Monaten vor Dehnen allein (Rathleff 2015). Kein Programm kann einem einzelnen Menschen einen Zeitrahmen versprechen.',
    },
    {
      q: 'Sollte ich mit Fersensporn auf Sport verzichten?',
      cites: [CITE.guideline],
      a: 'Nicht unbedingt. Die Leitlinie empfiehlt Übungen als Teil des Vorgehens, nicht Schonung allein. Lass eine bestimmte Übung für heute weg, wenn der Schmerz 6 von 10 oder mehr erreicht oder der nächste Morgen deutlich schlimmer ist. Geh eine Stufe zurück, statt ganz aufzuhören. Wenn der Schmerz trotz Anpassung von Woche zu Woche schlimmer wird, geh zu einer medizinischen Fachperson.',
    },
    {
      q: 'Ist Gehen gut bei Fersensporn?',
      cites: [CITE.guideline],
      a: 'Gehen an sich ist nicht das Problem. Gehen in stützenden Schuhen in angenehmem Tempo ist meist in Ordnung und besser als komplette Schonung. Der Schmerz kommt von der Plantarfaszie am Sporn und von der Wade, die über die Achillessehne an der Ferse zieht, und maßvolles Gehen hält die Wadenpumpe aktiv. Wenn Gehen deinen Morgenschmerz am nächsten Tag verschlimmert, verkürze die Strecke und bau sie schrittweise wieder auf.',
    },
    {
      q: 'Welche Übungen sollte man bei Fersensporn vermeiden?',
      cites: [CITE.guideline],
      a: 'Lass Bewegungen mit harten Stößen wie Laufen, Springen und Sprungtraining weg, solange die Ferse gereizt ist; wiederholtes Aufprallen auf hartem Boden belastet das Gewebe neben dem Sporn. Tiefes Absenken der Ferse über eine Stufenkante kann eine gereizte Faszie ebenfalls überlasten. Die Leitlinie von 2023 setzt auf angepasste Belastung statt auf Verbote; der Test ist, ob sich deine Ferse am nächsten Morgen schlimmer anfühlt.',
    },
    {
      q: 'Was lässt Fersensporn-Schmerzen aufflammen?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Wiederholtes Aufprallen auf hartem Boden ist der häufigste Auslöser: Laufen, Springen oder stundenlanges Stehen reizt das Weichgewebe neben dem Sporn genauso wie bei einer Plantarfasziitis ohne Sporn. Ein plötzlicher Sprung bei der Aktivität, ausgetretene Schuhe und Barfußgehen auf Fliesen können die Schmerzen auslösen. Was einen Schub beruhigt, ist angepasste Belastung, nicht der Knochen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst, was auf einen Ermüdungsbruch hindeuten kann',
      'Taubheit, Kribbeln oder Brennen dazukommen',
      'die Ferse gerötet, warm oder geschwollen ist oder du Fieber hast',
      'beide Fersen wehtun und die Morgensteifigkeit länger als 30\u00A0Minuten anhält, vor allem wenn andere Gelenke betroffen sind',
      'der Schmerz dich nachts wach hält oder auch in Ruhe da ist',
      'es nach mehreren Wochen täglichen Dehnens und Wadentrainings nicht besser geworden ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst dir Stufen, Sätze und den Zeitpunkt zum Steigern nicht merken. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Fersenschmerzen ist das erste Ziel ein Morgenschmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück. Das Dehnen beginnt am ersten Tag. Die Wadenkette, vom Fersenheben im Sitzen bis zum belasteten Fersenheben mit Handtuch, geht in deinem Tempo voran.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald das Morgenziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Übungen bei Fersensporn',
  campaign: 'guide-heel-spur-exercises-de',
};
