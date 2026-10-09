import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/high-arches.ts`, written around the German
 * queries «Hohlfuß Übungen», «Hohlfuß Schmerzen», «Hohlfuß Einlagen».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts`.
 * Figures, doses, grades and qualifiers are identical to the English page.
 * Same citation keys as the English page; no new citations.
 */

export const HIGH_ARCHES_DE: Guide = {
  lang: 'de',
  page: 'highArches',
  mainSource: CITE.burnsCavus,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Hohlfuß-Übungen: was bei Schmerzen durch Hohlfuß hilft',
  description:
    'Übungen bei Hohlfuß (Pes cavus) mit Fußschmerzen: Waden- und Faszien-Dehnen, Stabilität im Sprunggelenk, Belege zu Einlagen und neurologische Warnzeichen.',
  h1: 'Übungen bei Hohlfuß: was hilft und was eine medizinische Fachperson braucht',
  lede:
    'Ein Hohlfuß, medizinisch Pes cavus, ist steif und gibt nicht genug nach, um Stöße abzufangen. Die Kraft konzentriert sich an der Ferse und am Fußballen, und die Plantarfaszie ist oft verkürzt. Etwa 60\u00A0% der Menschen mit Hohlfuß berichten von Fußschmerzen. Die stärksten Belege gibt es für gedämpfte oder maßgefertigte Einlagen. Die Übungen setzen auf das Dehnen von Wade und Plantarfaszie, mehr Beweglichkeit im Sprunggelenk und den Aufbau von Stabilität.',
  intro: [
    'Ein Hohlfuß betrifft ungefähr 1 von 10\u00A0Menschen (Burns und Kollegen, 2007). Viele Menschen mit Hohlfuß haben nie Fußschmerzen. Wer sie hat, spürt sie meist unter der Ferse, unter dem Fußballen oder entlang der verkürzten Plantarfaszie. Die Ursache ist wichtig: Die meisten Hohlfüße sind idiopathisch (ohne bekannte Ursache), aber ein Teil wird durch neurologische Erkrankungen wie die Charcot-Marie-Tooth-Krankheit verursacht. Ein Hohlfuß, der zunimmt oder nur auf einer Seite auftritt, gehört immer zu einer medizinischen Fachperson.',
  ],
  takeaways: [
    'In einer Studie mit 154\u00A0Erwachsenen mit schmerzhaftem Hohlfuß verbesserten maßgefertigte Einlagen den Fußschmerz nach drei Monaten um 8,3\u00A0Punkte mehr als eine Schein-Einlage und die Funktion um 9,5\u00A0Punkte mehr (Burns und Kollegen, 2006).',
    'Dieselbe Studie fand, dass maßgefertigte Einlagen den Druck unter der Fußsohle um 26\u00A0% senkten, im Vergleich zu 9\u00A0% mit der Schein-Einlage.',
    'Etwa 60\u00A0% der Menschen mit Hohlfuß berichten von Fußschmerzen, häufig unter der Ferse, unter dem Fußballen oder im Gewölbe (Burns und Kollegen, 2005).',
    'Ein Hohlfuß kann das erste Zeichen einer neurologischen Erkrankung wie der Charcot-Marie-Tooth-Krankheit sein. Ein Hohlfuß, der zunimmt oder nur auf einer Seite auftritt, braucht eine neurologische Abklärung, nicht nur Übungen.',
    'Keine Studie hat ein Übungsprogramm speziell bei Fußschmerzen durch Hohlfuß getestet. Die Übungen auf dieser Seite zielen auf die verkürzten Strukturen und instabilen Gelenke, die bei Hohlfüßen häufig sind.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist ein Hohlfuß, und warum macht er Fußschmerzen?',
      figure: { id: 'arches', caption: 'Dieselben Fußknochen bei einem Plattfuß, einem typischen Gewölbe und einem Hohlfuß, von der Innenseite gesehen.', alt: 'Drei Füße von der Innenseite auf ebenem Boden: ein Plattfuß, dessen Gewölbe auf dem Boden aufliegt, ein typisches Gewölbe mit einem kleinen Spalt darunter und ein Hohlfuß mit einem großen Spalt unter der Fußmitte.' },
      paragraphs: [
        'Ein Hohlfuß (Pes cavus) ist ein Fuß mit einem übermäßig hohen inneren Längsgewölbe. Das Gewölbe bleibt auch hoch, wenn der Fuß belastet wird. Anders als ein Plattfuß, der unter Last absinkt und den Aufprall auf eine große Fläche verteilt, ist ein Hohlfuß steif und konzentriert die Kraft auf eine kleinere Fläche: die Ferse und den Fußballen.',
        'Die Plantarfaszie ist bei einem Hohlfuß meist kurz und straff. Das hält das Gewölbe in seiner hohen Position, verringert aber die Fähigkeit des Fußes, nachzugeben und Stöße abzufangen. Der Vorfuß steht oft tiefer als der Rückfuß (ein nach unten geneigter erster Mittelfußknochen), und die Zehen können sich krallen. Diese Veränderungen verlagern den Druck auf die Mittelfußköpfchen und die Ferse und weg vom Mittelfuß.',
        'Fußschmerzen bei Hohlfuß zeigen sich häufig als Metatarsalgie (Schmerz unter dem Fußballen), Schmerz unter der Ferse oder Schmerz entlang der verkürzten Plantarfaszie. Auch Umknicken im Sprunggelenk ist häufiger, weil der steife, nach innen gekippte Fuß auf unebenem Boden weniger stabil ist.',
      ],
      cites: [CITE.burnsCavusCochrane, CITE.burnsCavusPain, CITE.burnsCavus],
    },
    {
      h2: 'Woher kommt ein Hohlfuß?',
      paragraphs: [
        'Die meisten Hohlfüße sind idiopathisch, es wird also keine bestimmte Ursache gefunden. Sie treten meist auf beiden Seiten auf, bleiben über die Zeit stabil und bestehen seit der Kindheit.',
        'Eine kleinere, aber klinisch wichtige Gruppe wird durch neurologische Erkrankungen verursacht. Die häufigste ist die Charcot-Marie-Tooth-Krankheit (CMT), eine erbliche motorische und sensible Neuropathie, die zu fortschreitender Muskelschwäche und Muskelschwund führt, beginnend an Füßen und Unterschenkeln. Der Hohl-Klumpfuß (Pes cavovarus) bei CMT entsteht, weil bestimmte Muskeln schneller schwächer werden als andere und den Fuß in eine hohe, nach innen gekippte Position ziehen.',
        'Weitere neurologische Ursachen sind Fehlbildungen des Rückenmarks, Kinderlähmung, Spina bifida, Zerebralparese und andere periphere Neuropathien. Ein Hohlfuß kann auch nach einem Schlaganfall oder einer Rückenmarksverletzung entstehen.',
        'Der Unterschied ist für die Übungen wichtig. Ein idiopathischer Hohlfuß ist meist stabil: Der Fuß hat diese Form und behält sie. Ein neurologisch bedingter Hohlfuß kann fortschreiten: Das Gewölbe wird höher, die Schwäche nimmt zu und der Fuß wird mit der Zeit instabiler. Übungen können bei einem neurologischen Hohlfuß Beweglichkeit und Stabilität erhalten, aber die zugrunde liegende Erkrankung nicht rückgängig machen, und eine medizinische Fachperson muss eingebunden sein.',
      ],
    },
    {
      h2: 'Wann sollte ein Hohlfuß ärztlich abgeklärt werden?',
      paragraphs: [
        'Nicht jeder Hohlfuß braucht eine neurologische Abklärung. Aber bestimmte Muster sollten immer untersucht werden.',
        'Ein zunehmender Hohlfuß, bei dem das Gewölbe über Monate oder Jahre höher wird, ist ein Warnzeichen für eine neurologische Ursache. Ein einseitiger Hohlfuß, bei dem ein Fuß ein deutlich höheres Gewölbe hat als der andere, ist ein weiteres. Schwäche in Fuß oder Unterschenkel, Schwierigkeiten, den Fuß beim Gehen anzuheben (Fußheberschwäche), Krallenzehen, die schlimmer werden, oder CMT oder eine andere Neuropathie in der Familie sind alles Gründe, zu einer Neurologin, einem Neurologen oder einer Fachärztin bzw. einem Facharzt für Fuß und Sprunggelenk zu gehen.',
        'Wenn deine Hohlfüße auf beiden Seiten auftreten, stabil sind und seit der Kindheit so sind und du keine Schwäche und keine Gefühlsstörungen hast, sind sie höchstwahrscheinlich idiopathisch. Die Übungen unten und ein Gespräch mit einer Podologin oder einem Podologen über Einlagen sind ein vernünftiger Anfang.',
      ],
    },
    {
      h2: 'Helfen Einlagen bei Fußschmerzen durch Hohlfuß?',
      keyFact: 'Eine randomisierte Studie mit 154\u00A0Erwachsenen mit Fußschmerzen durch Hohlfuß fand, dass maßgefertigte Einlagen nach drei Monaten beim Schmerz um 8,3\u00A0Punkte und bei der Funktion um 9,5\u00A0Punkte besser abschnitten als eine Schein-Einlage (Burns und Kollegen, 2006).',
      paragraphs: [
        'Maßgefertigte Einlagen haben die stärksten Belege bei Fußschmerzen durch Hohlfuß. In der einzigen randomisierten Studie teilten Burns und Kollegen 154\u00A0Erwachsene mit chronischen Fußschmerzen und Hohlfuß auf beiden Seiten entweder maßgefertigten Einlagen aus Polypropylen oder einer flachen Schein-Einlage zu. Nach drei Monaten berichtete die Gruppe mit maßgefertigten Einlagen im Foot Health Status Questionnaire eine um 8,3\u00A0Punkte stärkere Verbesserung des Fußschmerzes als die Schein-Gruppe. Die Funktionswerte verbesserten sich um 9,5\u00A0Punkte mehr. Der Druck unter der Fußsohle sank mit den maßgefertigten Einlagen um 26\u00A0%, mit der Schein-Einlage um 9\u00A0%.',
        'Die Studie umfasste Menschen mit idiopathischem und mit neuromuskulärem Hohlfuß (133 idiopathisch, 21 neuromuskulär, davon 16 mit Charcot-Marie-Tooth-Krankheit). Die Einlagen waren der Form des Fußes angepasst und hatten eine gedämpfte Deckschicht über die ganze Länge.',
        'Gedämpfte Einlagen aus dem Handel sind ein vernünftiger erster Schritt, bevor du dich für die teureren maßgefertigten Einlagen entscheidest. Das Merkmal, das sich in der Studie als wirksam erwies, war eine Schale, die genau an die Form des Fußes angepasst war, nicht nur eine flache Dämpfung.',
      ],
      sourceNote:
        'Burns 2006: 154\u00A0Erwachsene, Nachbeobachtung nach 3\u00A0Monaten, Unterschied beim Schmerz im Foot Health Status Questionnaire 8,3\u00A0Punkte (95-%-KI 1,2 bis 15,3, p=0,022), Unterschied bei der Funktion 9,5\u00A0Punkte (95-%-KI 2,9 bis 16,1, p=0,005).',
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Welche Übungen helfen bei Hohlfuß?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Wade und Plantarfaszie bei Schmerzen unter der Ferse, der häufigsten Schmerzstelle bei Hohlfuß, mit A und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Keine Studie hat ein Übungsprogramm speziell für Fußschmerzen durch Hohlfuß getestet. Die Übungen unten zielen auf die Strukturen, die bei einem Hohlfuß häufig verkürzt oder instabil sind: Wade, Plantarfaszie, Sprunggelenk und die kleinen Fußmuskeln. Sie sind aus den Belegen zu Plantarfasziitis, Instabilität im Sprunggelenk und allgemeinem Fußtraining übernommen und entsprechend gekennzeichnet.',
        'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Wade und Plantarfaszie bei Schmerzen unter der Ferse, einer der häufigsten Schmerzstellen bei Hohlfuß, mit A und Krafttraining mit B. Eine vergleichbare Leitlinie speziell zum Hohlfuß gibt es nicht.',
        'Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf.',
      ],
      exercises: [
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'moderate', why: 'Bewertung A der Leitlinie bei Schmerzen unter der Ferse. Eine verkürzte Wade ist bei Hohlfuß häufig und erhöht die Belastung der Ferse.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand, das hintere Bein gestreckt, die Ferse unten, die Hüfte nach vorn. Ein verkürzter Gastrocnemius ist bei Hohlfuß häufig und belastet das steife Gewölbe zusätzlich.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (Knie gebeugt)',
          evidence: { level: 'moderate', why: 'Derselbe Mechanismus. Zielt auf den tieferen Wadenmuskel.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand, dann beug das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Der Soleus lässt nur mit gebeugtem Knie los.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung nahe der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis die Dehnung tiefer wandert',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'moderate', why: 'Bewertung A der Leitlinie bei Schmerzen unter der Ferse. Die Plantarfaszie ist bei Hohlfuß meist verkürzt.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg den betroffenen Fuß über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Die Plantarfaszie ist bei einem Hohlfuß oft kurz und straff.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du das Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, das Gewölbe ist hervorgehoben',
        },
        {
          name: 'Sprunggelenk-Wippen',
          evidence: { level: 'early', why: 'Keine Studie speziell zum Hohlfuß. Zielt auf die Dorsalflexion im Sprunggelenk, die bei Hohlfüßen häufig eingeschränkt ist.' },
          dose: '2\u00A0Sätze à 15, jedes Bein',
          how: 'Stell dich mit Blick zur Wand hin, ein Fuß vorn. Schieb das Knie über die Zehen nach vorn, die Ferse bleibt flach. Das verbessert die Dorsalflexion im Sprunggelenk, die bei einem Hohlfuß oft eingeschränkt ist.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung vorn am Sprunggelenk',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Knie über die Zehen, Ferse bleibt flach',
          alt: 'Eine Figur an einer Wand schiebt das Knie über die Zehen nach vorn',
        },
        {
          name: 'Einbeinstand',
          evidence: { level: 'early', why: 'Keine Studie zum Hohlfuß. Umknicken ist bei Hohlfuß häufiger, und Gleichgewichtstraining zielt auf die Stabilität im Sprunggelenk.' },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Stell dich auf einen Fuß und schau auf einen festen Punkt. Lass den Fuß wackeln. Hohlfüße sind auf unebenem Boden weniger stabil, und Gleichgewichtstraining trainiert die Muskeln, die dieses Wackeln ausgleichen. Steh nahe an einer Wand.',
          often: 'Gleichgewichtstage',
          feel: 'Kleine Korrekturen in Fuß und Sprunggelenk',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Lass den Fuß Korrekturen machen',
          alt: 'Eine Figur balanciert auf einem Bein, das Sprunggelenk ist hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'Bei Hohlfuß nicht getestet. Für das Wohlgefühl bei verkürzter Plantarfaszie.' },
          dose: '2\u00A0Minuten, jeder Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam über einen Massageball. Der Druck ist fest, aber nicht so stark, dass du zusammenzuckst. Das ist eine Maßnahme fürs Wohlgefühl bei verkürzter Faszie, keine korrigierende Übung.',
          often: 'Erholungstage',
          feel: 'Fester Druck unter dem Fuß',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'foot_roll',
          caption: 'Fußrollen: langsam und fest, bei stechendem Schmerz Druck rausnehmen',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball',
        },
      ],
      cites: [CITE.guideline, CITE.burnsCavus],
    },
    {
      h2: 'Welche Schuhe passen bei Hohlfuß?',
      paragraphs: [
        'Schuhe bei Hohlfuß sollten dämpfen statt führen. Anders als beim Plattfuß, wo eine feste Stütze an der Innenseite das Absinken verhindert, braucht ein Hohlfuß das Gegenteil: einen Schuh, der Stöße abfängt, weil der Fuß selbst es nicht tut.',
        'Achte auf eine gedämpfte Sohle, viel Platz im Zehenbereich (Krallenzehen brauchen Raum) und keine starke Gewölbestütze. Eine harte Gewölbestütze, die für einen normalen Fuß gebaut ist, drückt an der falschen Stelle gegen ein hohes Gewölbe. Neutrale Laufschuhe mit guter Dämpfung an Ferse und Vorfuß werden häufig empfohlen.',
        'Wenn Schuhe und Einlagen aus dem Handel nicht reichen, kann eine Podologin oder ein Podologe beurteilen, ob sich maßgefertigte Einlagen lohnen. Die Studie von Burns 2006 fand, dass der Schlüssel zu einer erfolgreichen Einlage bei Hohlfuß eine an den Fuß angepasste Schale mit gedämpfter Deckschicht war, keine starre korrigierende Einlage.',
      ],
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Hilft Walkito bei Hohlfuß?',
      paragraphs: [
        'Walkito ist rund um Schmerzen unter der Ferse und im Gewölbe bei Erwachsenen aufgebaut. Die App enthält Wadendehnen, Plantarfaszien-Dehnen, Fußrollen und Stabilitätstraining für das Sprunggelenk, die alle für einen Hohlfuß relevant sind. Wenn du in der Körperkarte der App auf das Gewölbe zeigst, bietet die Entlastungseinheit den kurzen Fuß, die Plantarfaszien-Dehnung und das Fußrollen an.',
        'Was die App nicht hat, ist ein eigenes Ziel für Hohlfuß oder ein Hohlfuß-Programm. Die Übungen, die erscheinen, sind dieselben wie bei Plantarfasziitis und Plattfuß. Für jemanden mit Hohlfuß und Schmerzen unter der Ferse überschneiden sich diese Übungen mit dem, was diese Seite empfiehlt. Für jemanden, dessen Schmerzen durch den Hohlfuß vor allem unter dem Fußballen sitzen oder eine neurologische Ursache haben, passt die App nicht gut, und eine medizinische Fachperson sollte den Übungsplan bestimmen.',
      ],
    },
  ],
  faq: [
    {
      q: 'Welche Übungen helfen bei Hohlfuß?',
      cites: [CITE.guideline],
      a: 'Keine Studie hat Übungen speziell bei Hohlfuß getestet. Die Übungen mit den besten Belegen für die Schmerzmuster, die bei Hohlfuß häufig sind, sind Wadendehnen und Plantarfaszien-Dehnen, beide von der Leitlinie von 2023 zu Fersenschmerzen bei Schmerzen unter der Ferse mit A bewertet. Stabilitätstraining für das Sprunggelenk und Fußrollen setzen an der Instabilität und der verkürzten Faszie an, die bei Hohlfuß häufig sind.',
    },
    {
      q: 'Helfen Einlagen bei Fußschmerzen durch Hohlfuß?',
      cites: [CITE.burnsCavus],
      a: 'In einer Studie mit 154\u00A0Erwachsenen mit schmerzhaftem Hohlfuß verbesserten maßgefertigte Einlagen nach drei Monaten den Fußschmerz um 8,3\u00A0Punkte und die Funktion um 9,5\u00A0Punkte mehr als eine Schein-Einlage (Burns 2006). Der Druck unter der Fußsohle sank mit den maßgefertigten Einlagen um 26\u00A0%. Das sind die stärksten Belege für eine einzelne Maßnahme bei Fußschmerzen durch Hohlfuß.',
    },
    {
      q: 'Kann man einen Hohlfuß mit Übungen korrigieren?',
      a: 'Übungen können die Knochenform eines Hohlfußes nicht verändern. Sie können verkürzte Strukturen (Wade, Plantarfaszie) dehnen, die Beweglichkeit im Sprunggelenk verbessern und Stabilität aufbauen, um Umknicken und Schmerzen zu verringern. Das Gewölbe selbst bleibt hoch. Das Ziel ist weniger Schmerz und bessere Funktion, nicht ein flacheres Gewölbe.',
    },
    {
      q: 'Ist ein Hohlfuß ein Zeichen für ein neurologisches Problem?',
      a: 'Das kann er sein. Die meisten Hohlfüße sind idiopathisch und stabil. Aber ein zunehmender oder einseitiger Hohlfuß kann das erste Zeichen der Charcot-Marie-Tooth-Krankheit oder einer anderen neurologischen Erkrankung sein. Wenn deine Gewölbe höher werden, ein Fuß stärker betroffen ist als der andere oder du Schwäche oder Gefühlsstörungen in den Füßen hast, geh zu einer Neurologin oder einem Neurologen.',
    },
    {
      q: 'Welche Schuhe sind bei Hohlfuß am besten?',
      cites: [CITE.burnsCavus],
      a: 'Gedämpfte Schuhe mit viel Platz im Zehenbereich und ohne starke Gewölbestütze. Ein hohes Gewölbe sinkt nicht ab, braucht also keine Bewegungskontrolle. Es braucht Dämpfung, um den Aufprall abzufangen, den das steife Gewölbe nicht abfängt. Neutrale Laufschuhe mit guter Dämpfung an Ferse und Vorfuß sind ein häufiger Anfang. Maßgefertigte Einlagen mit angepasster Schale und gedämpfter Deckschicht haben die besten Belege aus Studien.',
    },
    {
      q: 'Ist Pes cavus dasselbe wie ein Hohlfuß?',
      a: 'Ja. Pes cavus ist der medizinische Begriff für einen Fuß mit übermäßig hohem Gewölbe. Er beschreibt eine Fußform, keine Krankheit. Etwa 1 von 10\u00A0Menschen hat einen Hohlfuß, und viele haben nie Fußschmerzen. Wenn Fußschmerzen auftreten, sitzen sie meist unter der Ferse, unter dem Fußballen oder entlang der verkürzten Plantarfaszie.',
      cites: [CITE.burnsCavusCochrane],
    },
    {
      q: 'Kann ein Hohlfuß eine Plantarfasziitis verursachen?',
      cites: [CITE.guideline],
      a: 'Ein Hohlfuß gilt als Risikofaktor für Plantarfasziitis. Der steife Fuß belastet die Plantarfaszie bei jedem Schritt stärker, und die Faszie ist oft schon von vornherein verkürzt. Wenn dein Hohlfuß Schmerzen unter der Ferse macht, die morgens am schlimmsten sind, passt dieses Muster zu einer Plantarfasziitis, und die Übungen unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) gelten für dich.',
    },
    {
      q: 'Wie erkenne ich, ob ich einen Hohlfuß habe?',
      a: 'Probier den Fußabdruck-Test: Mach die Fußsohle nass und stell dich auf eine flache, trockene Fläche. Ein hohes Gewölbe hinterlässt entlang der Außenkante wenig oder gar keinen Abdruck, oft nur Ferse und Fußballen, ein Plattfuß dagegen fast die ganze Sohle. Ein großer Unterschied zwischen deinen beiden Füßen ist es wert, ihn einer medizinischen Fachperson zu zeigen.',
    },
    {
      q: 'Ist ein Plattfuß oder ein Hohlfuß besser?',
      cites: [CITE.burnsCavusPain],
      a: 'Keins von beiden ist klar besser. Ein Plattfuß verteilt die Last breit, kann aber Plantarfaszie und Tibialis-posterior-Sehne überdehnen. Ein Hohlfuß ist steif und konzentriert die Kraft an Ferse und Fußballen. Etwa 60\u00A0% der Menschen mit Hohlfuß berichten von Fußschmerzen, die Fußform allein sagt also nicht voraus, wie sich deine Füße anfühlen werden.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'deine Gewölbe mit der Zeit höher werden, was auf eine neurologische Ursache hindeuten kann',
      'ein Fuß ein deutlich höheres Gewölbe hat als der andere',
      'du Schwäche in Fuß oder Unterschenkel hast oder Schwierigkeiten, den Vorfuß anzuheben',
      'du Taubheit, Kribbeln oder Brennen in den Füßen spürst',
      'sich die Zehen stärker krallen als früher',
      'du häufig umknickst und es schlimmer wird',
      'die Charcot-Marie-Tooth-Krankheit oder eine andere Neuropathie in der Familie vorkommt',
      'die Fußschmerzen nach mehreren Wochen Dehnen, besseren Schuhen und gedämpften Einlagen nicht besser werden',
      'du Schmerzen an einer bestimmten Stelle hast, die bei Aktivität schlimmer werden, was eher ein Ermüdungsbruch oder eine Sesamoiditis sein kann als ein allgemeines Hohlfuß-Muster',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito enthält Wadendehnen, Plantarfaszien-Dehnen, Stabilitätstraining für das Sprunggelenk und Fußrollen, die alle für einen Hohlfuß relevant sind. Wenn du in der Körperkarte auf das Gewölbe zeigst, bietet die App Übungen für diesen Bereich an. Aber die App hat kein eigenes Ziel und kein Programm für Hohlfuß. Wenn dein Hohlfuß Schmerzen unter der Ferse macht, passen vielleicht die Ziele der App für Fersenschmerzen. Wenn dein Schmerz vor allem unter dem Fußballen sitzt oder mit einer neurologischen Erkrankung zusammenhängt, sollte eine medizinische Fachperson deinen Übungsplan bestimmen.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
  },
  crumb: 'Übungen bei Hohlfuß',
  campaign: 'guide-high-arches-de',
};
