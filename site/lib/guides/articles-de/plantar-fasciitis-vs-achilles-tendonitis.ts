import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/plantar-fasciitis-vs-achilles-tendonitis.ts (2026-10-18), written around
 * «Plantarfasziitis oder Achillessehnenentzündung» and «Fersenschmerzen oder Achillessehne».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts` and articles-de/achilles.ts.
 * Figures, doses, grades, qualifiers and sources are identical to the English page after its
 * fact-check. Same CITE keys and media ids. No external links.
 */

export const PF_VS_ACHILLES_DE: Guide = {
  lang: 'de',
  page: 'pfVsAchilles',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantarfasziitis oder Achillessehnenentzündung: Unterschied',
  description:
    'Plantarfasziitis oder Achillessehnenentzündung? Wo und wann es wehtut, eine Vergleichstabelle, passende Übungen für beide und was tun, wenn du beides hast.',
  h1: 'Plantarfasziitis oder Achillessehnenentzündung: So unterscheidest du die beiden',
  lede:
    'Am schnellsten unterscheidest du die beiden danach, wo es wehtut. Eine [Plantarfasziitis](/de/plantarfasziitis/) schmerzt unter der Ferse, am stärksten bei den ersten Schritten am Morgen (Koc und Kollegen, 2023). Eine Achillessehnenentzündung schmerzt hinten an der Ferse oder in der Sehne darüber, meist 2 bis 6\u00A0Zentimeter über dem Fersenbein (Chimenti und Kollegen, 2024). Beide sprechen auf Übungen an, aber es sind nicht dieselben Übungen.',
  intro: [
    'Diese Seite stellt beides nebeneinander. Sie stellt keine Diagnose, und manche Fersenschmerzen sind keins von beiden. Die vollständigen Übungsprogramme findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) und [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/). Wenn ein Knochenvorsprung hinten an der Ferse dazugehört, lies [Haglundferse](/de/haglundferse/).',
  ],
  takeaways: [
    'Der Schmerz bei Plantarfasziitis sitzt unter der Ferse, an der Innenseite, und ist typischerweise bei den ersten Schritten nach dem Schlafen oder Sitzen am stärksten (Koc und Kollegen, 2023).',
    'Eine Tendinopathie im Mittelteil der Achillessehne schmerzt in der Sehne selbst, meist 2 bis 6\u00A0Zentimeter über dem Fersenbein. Schmerz genau dort, wo die Sehne am Knochen ansetzt, ist die Form am Ansatz (Chimenti und Kollegen, 2024).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Plantarfaszie und Wade mit Empfehlungsgrad **A** und Krafttraining mit **B**. Die Leitlinie von 2024 zur Achillessehne bewertet Übungen, die die Sehne belasten, mit **A** (Koc und Kollegen, 2023; Chimenti und Kollegen, 2024).',
    'In einer Studie mit 101\u00A0Menschen mit chronischen Fersenschmerzen war eine Plantarfaszien-Dehnung nach 8\u00A0Wochen besser als eine Wadendehnung allein (DiGiovanni und Kollegen, 2003). Bei der Achillessehne geht der höchste Empfehlungsgrad der Leitlinie an die Belastung der Sehne, nicht an das Dehnen (Chimenti und Kollegen, 2024).',
    'Die beiden hängen zusammen: In 52\u00A0MRT-Aufnahmen hatten Menschen mit Veränderungen an der Achillessehne eine dickere Plantarfaszie, und bei 5 von 27 lag sie über dem üblichen Grenzwert für eine Plantarfasziitis (Stecco und Kollegen, 2013).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Wo tut es weh: unter der Ferse oder hinten?',
      figure: { id: 'heel-side', caption: 'Plantarfasziitis schmerzt unter der Ferse. Achillesschmerz sitzt hinten an der Ferse oder in der Sehne darüber.', alt: 'Fuß von der Innenseite: Fersenbein, Plantarfaszie unter dem Gewölbe und Achillessehne hinten, mit einer roten Stelle unter der Ferse.' },
      keyFact: 'Schmerz im Mittelteil der Achillessehne spürst du meist 2 bis 6\u00A0Zentimeter über dem Fersenbein, Schmerz bei Plantarfasziitis dagegen unter der Ferse an der Innenseite (Chimenti und Kollegen, 2024; Koc und Kollegen, 2023).',
      paragraphs: [
        '**Die Stelle ist der deutlichste Unterschied.** Die Plantarfaszie ist das dicke Band unter deinem Fuß, das vom Fersenbein bis zu den Zehen läuft. Eine Plantarfasziitis schmerzt dort, wo dieses Band ansetzt, unter der Ferse und zur Innenseite hin. Wenn du dort mit dem Daumen drückst, tut es meist weh (Koc und Kollegen, 2023).',
        'Die Achillessehne verbindet die Wadenmuskeln mit der Rückseite des Fersenbeins. Es gibt zwei Formen von Achillesschmerz, und die Stelle unterscheidet sie (Chimenti und Kollegen, 2024; Jonsson und Kollegen, 2008):',
        {
          list: [
            '**Mittelteil:** Schmerz und oft eine verdickte, druckempfindliche Sehne 2 bis 6\u00A0Zentimeter über dem Fersenbein. Die schmerzende Stelle kannst du meist zwischen Daumen und Finger nehmen.',
            '**Am Ansatz:** Schmerz genau dort, wo die Sehne hinten am Fersenbein ansetzt, oft schlimmer, wenn Schuhe dort drücken.',
          ],
        },
        'Schmerz unter der Ferse, der wehtut, wenn man die Ferse seitlich zusammendrückt, der brennt oder kribbelt oder mit Taubheit einhergeht, spricht für andere Ursachen, etwa einen Nerv, einen Ermüdungsbruch oder das Fettpolster der Ferse (Tu, 2018). Darum geht es unter [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.jonsson, CITE.tuHeelPain],
    },
    {
      h2: 'Wann tut es weh: bei den ersten Schritten oder bei Belastung?',
      paragraphs: [
        '**Plantarfasziitis ist ein Schmerz der ersten Schritte.** Die Leitlinie beschreibt Fersenschmerzen, die bei den ersten Schritten am Morgen oder nach dem Sitzen am deutlichsten sind, beim Gehen oft nachlassen und nach langem Stehen oder Gehen wiederkommen (Koc und Kollegen, 2023). [Fersenschmerzen morgens](/de/fersenschmerzen-morgens/) erklärt dieses Muster.',
        '**Tendinopathie der Achillessehne ist ein Belastungsschmerz.** Auch die Sehne kann morgens steif sein, deshalb werden die beiden verwechselt. Der Unterschied ist, was es im Lauf des Tages schlimmer macht: Belastungen wie Laufen und Springen, und der Schmerz richtet sich meist danach, wie viel du gemacht hast (Chimenti und Kollegen, 2024). Steigungen und schnelles Abdrücken belasten die Sehne noch stärker.',
        'Beides kann also morgens wehtun. Frag dich nicht nur, wann, sondern wo: Ein steifes, schmerzendes Band hinten am Sprunggelenk spricht für die Achillessehne, ein Stechen unter der Ferse für die Plantarfaszie.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Plantarfasziitis oder Achillessehnenentzündung: die Vergleichstabelle',
      paragraphs: [
        'Die Tabelle fasst das typische Bild zusammen. Viele Menschen passen nicht sauber in eine Spalte, und welche der beiden du hast, kann nur eine ärztliche Untersuchung klären.',
      ],
      table: {
        caption: 'Plantarfasziitis und Tendinopathie der Achillessehne im Überblick',
        head: ['', 'Plantarfasziitis', 'Tendinopathie der Achillessehne'],
        rows: [
          ['Wo', 'Unter der Ferse, Innenseite', 'Hinten an der Ferse oder 2 bis 6\u00A0cm darüber'],
          ['Am stärksten', 'Erste Schritte nach Ruhe', 'Abdrücken, Laufen, Steigungen'],
          ['Druckschmerz', 'Unter der Ferse', 'Sehne hinten, zwischen den Fingern'],
          ['Verbunden mit', 'Steifes Sprunggelenk, Gewicht, Stehen', 'Sport in 35\u00A0% der Fälle'],
          ['Übung mit höchstem Empfehlungsgrad', 'Dehnen, Empfehlungsgrad A', 'Sehnenbelastung, Empfehlungsgrad A'],
          ['Wade dehnen?', 'Ja, Empfehlungsgrad A', 'Optional, Empfehlungsgrad C'],
          ['Leitlinie', 'Koc 2023', 'Chimenti 2024'],
        ],
      },
      after: [
        'Die Risikofaktoren stammen aus verschiedenen Studien. Bei der Plantarfasziitis hatten Menschen, deren Sprunggelenk sich um 0\u00A0Grad oder weniger beugen ließ, ein 23,3-fach höheres Risiko für die Erkrankung, und auch ein Body-Mass-Index über 30 und Stehen während des größten Teils des Arbeitstags erhöhten das Risiko (Riddle und Kollegen, 2003). In einer niederländischen Studie mit 57.725\u00A0Menschen, die bei einer Hausarztpraxis gemeldet waren, wurde eine Tendinopathie im Mittelteil der Achillessehne in einem Jahr bei 2,35 von 1.000\u00A0Erwachsenen zwischen 21 und 60 Jahren festgestellt, und 35\u00A0% der Fälle hingen mit Sport zusammen (de Jonge und Kollegen, 2011).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.riddle, CITE.deJongeIncidence],
    },
    {
      h2: 'Welche Übungen passen zur Plantarfasziitis?',
      keyFact: 'In einer Studie mit 101\u00A0Menschen mit chronischen Fersenschmerzen brachte eine Plantarfaszien-Dehnung nach 8\u00A0Wochen bessere Ergebnisse als eine Wadendehnung allein (DiGiovanni und Kollegen, 2003).',
      paragraphs: [
        '**Bei Plantarfasziitis steht das Dehnen an erster Stelle.** Die Leitlinie von 2023 bewertet die Dehnung von Plantarfaszie und Wade mit **A**, ihrem höchsten Empfehlungsgrad, und Krafttraining mit **B** (Koc und Kollegen, 2023).',
        'Wichtig ist die Dehnung, die das Gewölbe erreicht. In einer Studie mit 101\u00A0Menschen berichtete die Gruppe mit der Plantarfaszien-Dehnung nach 8\u00A0Wochen bessere Ergebnisse als die Gruppe, die nur die Wade dehnte (DiGiovanni und Kollegen, 2003). Für die Kraft nutzte eine Studie von 2015 mit 48\u00A0Menschen langsames Fersenheben mit einem Handtuch unter den Zehen. Es linderte den Schmerz nach drei Monaten schneller als Dehnen allein, nach zwölf Monaten lagen beide Gruppen aber etwa gleichauf (Rathleff und Kollegen, 2015).',
        'Das sind die Startdosen aus dem Ratgeber [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Stechender Fersenschmerz, der nicht nachlässt, wenn du loslässt',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse, deshalb ist diese Dehnung wichtig, auch wenn du sie weiter oben spürst.',
          stop: 'Ein stechender Zug hinten am Fersenbein',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Fersenheben mit Handtuch',
          evidence: { level: 'moderate', why: 'Das ist das Programm aus einer Studie mit 48\u00A0Menschen, und die Leitlinie von 2023 bewertet Krafttraining mit B.' },
          dose: '4\u00A0Sätze à 10, jedes Bein, mit Zusatzgewicht',
          often: 'Krafttage',
          feel: 'Harte Arbeit in der Wade',
          how: 'Stell dich auf einem Fuß auf eine Stufe, mit einem eingerollten Handtuch unter den Zehen. Nimm dir drei Sekunden für das Hochkommen, halte oben zwei Sekunden und nimm dir drei Sekunden für das Absenken. Auf dieser Stufe nimmt Walkito Zusatzgewicht dazu, etwa einen Rucksack. Erst das Handtuch sorgt dafür, dass die Übung die Plantarfaszie trainiert und nicht nur die Wade.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben mit Handtuch',
          media: 'heel_raise_towel',
          caption: 'Fersenheben mit Handtuch: drei Sekunden hoch, zwei oben, drei runter',
          alt: 'Eine Figur geht auf einer Stufe mit eingerolltem Handtuch auf die Zehenspitzen, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Welche Übungen passen zur Achillessehnenentzündung?',
      keyFact: 'In einer Pilotstudie mit 27\u00A0Menschen mit Schmerzen am Ansatz der Achillessehne brachte Fersenabsenken auf Bodenhöhe in 67\u00A0% der Fälle gute Ergebnisse (Jonsson und Kollegen, 2008).',
      paragraphs: [
        '**Bei der Achillessehne steht die Belastung an erster Stelle, nicht das Dehnen.** Die Leitlinie von 2024 bewertet Übungen, die die Sehne belasten, mit **A**: Fersenheben, Halten und langsames Absenken, bei denen die Sehne arbeiten muss (Chimenti und Kollegen, 2024). Die Wadendehnung bekommt in der Leitlinie einen niedrigeren Empfehlungsgrad, **C**, und nur für Menschen, deren Sprunggelenk sich schlecht beugen lässt (Chimenti und Kollegen, 2024).',
        'Etwas Schmerz ist erlaubt. In einer Studie mit 38\u00A0Menschen war Schmerz bis etwa 5 von 10 während der Belastung in Ordnung, solange er bis zum nächsten Morgen abklang und nicht von Woche zu Woche zunahm. Diese Gruppe stand nach zwölf Monaten genauso gut da wie die Gruppe, die sich zuerst geschont hatte (Silbernagel und Kollegen, 2007).',
        'Wenn der Schmerz direkt am Fersenbein sitzt (am Ansatz), mach jedes Fersenheben und Fersenabsenken auf Bodenhöhe und geh bei Wadendehnungen behutsam vor. Wenn die Ferse unter die Stufe sinkt, drückt das die Sehne gegen den Knochen. In einer Pilotstudie mit 27\u00A0Menschen brachte Fersenabsenken auf Bodenhöhe in 67\u00A0% der Fälle gute Ergebnisse (Jonsson und Kollegen, 2008). Mehr dazu unter [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
      ],
      exercises: [
        {
          name: 'Fersenheben mit Halten',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2024 zur Achillessehne schließt isometrische Belastung ein. Keine randomisierte Studie hat das Halten allein als vollständiges Programm getestet.' },
          dose: '3-mal 20\u00A0Sekunden halten, beide Füße',
          often: 'Krafttage, oder an den meisten Tagen, solange die Sehne gereizt ist',
          feel: 'Die Waden arbeiten, um still zu halten',
          how: 'Geh auf beiden Füßen auf die Zehenspitzen und halte oben still. Sink nicht wieder ab. Oben zu halten belastet die Sehne ohne das Federn.',
          stop: 'Schmerz über 5 von 10, der bis zum nächsten Morgen nicht abklingt',
          image: 'Übung: Fersenheben mit Halten',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hochkommen, dann oben still halten',
          alt: 'Eine Figur hält sich auf den Zehenspitzen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Exzentrisches Fersenabsenken (gestrecktes Knie)',
          evidence: { level: 'strong', why: 'Beruht auf dem Alfredson-Protokoll für Schmerzen im Mittelteil (3 x 15, 2-mal am Tag); Walkito beginnt mit 3 x 10. Die Leitlinie von 2024 bewertet Übungen mit A.' },
          dose: '3\u00A0Sätze à 10, jedes Bein',
          often: 'Krafttage',
          feel: 'Harte Arbeit in der Wade beim Absenken, keine Dehnung unten',
          how: 'Stell dich auf die Kante einer Stufe. Geh auf beiden Füßen hoch, verlagere das Gewicht auf das schmerzende Bein und senk dich über drei Sekunden langsam ab. Komm mit beiden Füßen wieder hoch. Bei Schmerzen direkt am Fersenbein mach die Übung auf flachem Boden und lass die Ferse nicht unter die Stufe sinken.',
          stop: 'Schmerz über 5 von 10, der bis zum nächsten Morgen nicht abklingt oder von Woche zu Woche schlimmer wird',
          image: 'Übung: Exzentrisches Fersenabsenken',
          media: 'heel_drop_straight',
          caption: 'Exzentrisches Fersenabsenken: auf beiden Füßen hoch, auf einem langsam runter',
          alt: 'Eine Figur auf einer Stufe senkt mit gestrecktem Knie eine Ferse unter die Stufenkante, Wade und Achillessehne sind hervorgehoben',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Kann man Plantarfasziitis und Achillessehnenentzündung gleichzeitig haben?',
      keyFact: 'In 52\u00A0MRT-Aufnahmen war die Plantarfaszie bei Menschen mit Veränderungen an der Achillessehne 3,43\u00A0mm dick, bei Menschen ohne 2,09\u00A0mm (Stecco und Kollegen, 2013).',
      paragraphs: [
        '**Ja, und die beiden hängen zusammen.** In einer Studie mit 52\u00A0MRT-Aufnahmen von Menschen mit Fuß- oder Sprunggelenkschmerzen hatten die 27 mit Veränderungen an der Achillessehne eine dickere Plantarfaszie, im Schnitt 3,43\u00A0mm gegenüber 2,09\u00A0mm. Bei 5 der 27 war die Plantarfaszie dicker als 4,5\u00A0mm, ein gängiger Grenzwert für eine Plantarfasziitis. Bei keinem der anderen 25 lag sie über 4\u00A0mm (Stecco und Kollegen, 2013).',
        'Dieselbe Studie fand, dass die Plantarfaszie über die Knochenhaut des Fersenbeins mit der Hülle um die Achillessehne verbunden ist. Eine Studie an Körperspendern zeigte, dass Zug an der Achillessehne die Plantarfaszie spannt, und zwar stärker, wenn die Zehen nach oben gebeugt sind (Carlson und Kollegen, 2000). Eine verkürzte oder überlastete Wade kann also an beiden ziehen.',
        'Keine Studie hat gezählt, wie oft Menschen beide Erkrankungen gleichzeitig haben, es gibt also keine verlässliche Zahl. Keine Leitlinie behandelt beides zusammen. Ein Vorgehen, das zu beiden Leitlinien passt: Krafttraining für die Wade, das der Sehne guttut, dazu die Plantarfaszien-Dehnung, die das Gewölbe dehnt, nicht die Achillessehne. Mach das Fersenabsenken auf Bodenhöhe, wenn die Rückseite des Fersenbeins schmerzt.',
      ],
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass, CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Was verursacht sonst Fersenschmerzen, die ähnlich aussehen?',
      paragraphs: [
        'Mehrere Probleme liegen in der Nähe und können sich ähnlich anfühlen (Choo und Kollegen, 2020; Tu, 2018):',
        {
          list: [
            'Ein Knochenvorsprung hinten an der Ferse mit einer schmerzenden, geschwollenen Stelle am Schuhrand: [Haglundferse](/de/haglundferse/) oder eine Schleimbeutelentzündung hinter dem Fersenbein (retrokalkaneale Bursitis), oft zusammen mit Schmerzen am Ansatz der Achillessehne.',
            'Ein Fersensporn auf dem Röntgenbild: häufig und meist nicht die Ursache des Schmerzes. Siehe [Plantarfasziitis oder Fersensporn](/de/plantarfasziitis-oder-fersensporn/).',
            'Ein tiefer Schmerz wie von einer Prellung mitten im Fersenpolster, schlimmer auf hartem Boden: [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/).',
            'Schmerz an beiden Seiten der Ferse, wenn du sie zusammendrückst, nach einer plötzlichen Steigerung beim Gehen oder Laufen: möglicher Ermüdungsbruch, lass das ärztlich abklären.',
            'Brennen, Kribbeln oder Taubheit: möglicherweise ein eingeklemmter Nerv.',
          ],
        },
      ],
      cites: [CITE.chooRearfoot, CITE.tuHeelPain],
    },
    {
      h2: 'Wie lange dauert es jeweils, bis es besser wird?',
      paragraphs: [
        'Bei Plantarfasziitis wird es bei etwa 90\u00A0% der Menschen mit Behandlung ohne Operation besser, auch wenn das oft Monate dauert (Latt und Kollegen, 2020). Einzelheiten unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
        'Bei Tendinopathie der Achillessehne liefen die wichtigsten Belastungsstudien über etwa drei Monate und begleiteten die Teilnehmenden bis zu zwölf Monate. Die Leitlinie von 2024 hält fest, dass sich die Funktion innerhalb von 2\u00A0Wochen zu bessern beginnen kann, eine weitergehende Erholung aber länger dauert (Chimenti und Kollegen, 2024). Schmerzen am Ansatz ließen sich mit dem klassischen Fersenabsenken unter die Stufe schwerer bessern: In einer früheren Studie hatten nur 32\u00A0% gute Ergebnisse, deshalb wird auf Bodenhöhe abgesenkt (Jonsson und Kollegen, 2008).',
        'Keine Studie hat die Erholungszeit der beiden direkt verglichen.',
      ],
      cites: [CITE.latt, CITE.achillesGuideline, CITE.jonsson],
    },
  ],
  faq: [
    {
      q: 'Woran erkenne ich, ob meine Fersenschmerzen eine Plantarfasziitis oder eine Achillessehnenentzündung sind?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Fang damit an, wo es wehtut. Eine Plantarfasziitis schmerzt unter der Ferse, zur Innenseite hin, und am stärksten bei den ersten Schritten nach Ruhe. Eine Achillessehnenentzündung schmerzt hinten an der Ferse oder in der Sehne 2 bis 6\u00A0Zentimeter darüber und wird beim Abdrücken, Laufen und an Steigungen schlimmer. Was es ist, kann eine ärztliche Untersuchung bestätigen.',
    },
    {
      q: 'Kann eine Plantarfasziitis Achillesschmerzen verursachen?',
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass],
      a: 'Die beiden hängen zusammen, aber keine Studie zeigt, dass das eine das andere verursacht. In 52\u00A0MRT-Aufnahmen hatten Menschen mit Veränderungen an der Achillessehne eine dickere Plantarfaszie, 3,43\u00A0mm gegenüber 2,09\u00A0mm. Eine Studie an Körperspendern zeigte, dass Spannung in der Achillessehne die Plantarfaszie belastet. Eine verkürzte, überlastete Wade belastet vielleicht beide.',
    },
    {
      q: 'Ist eine Achillessehnenentzündung morgens schlimmer, wie eine Plantarfasziitis?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Das kann sein. Beide können sich bei den ersten Schritten des Tages steif und schmerzhaft anfühlen, deshalb werden sie verwechselt. Plantarfasziitis ist ein Stechen unter der Ferse, das beim Gehen nachlässt. Achillesschmerz sitzt hinten am Sprunggelenk und nimmt meist beim Laufen, Springen, an Steigungen und auf Treppen zu.',
    },
    {
      q: 'Sollte ich bei Achillessehnenentzündung die Wade dehnen?',
      cites: [CITE.achillesGuideline, CITE.jonsson],
      a: 'Das ist optional. Die Leitlinie von 2024 zur Achillessehne stellt Übungen, die die Sehne belasten, an die erste Stelle, mit Empfehlungsgrad A, und gibt der Wadendehnung ein C, für Menschen, deren Sprunggelenk sich schlecht beugen lässt. Wenn dein Schmerz direkt am Fersenbein sitzt, drücken tiefe Wadendehnungen und Fersenabsenken unter die Stufe die Sehne gegen den Knochen. Bleib deshalb sanft und auf Bodenhöhe.',
    },
    {
      q: 'Sind die Übungen bei Plantarfasziitis und Achillessehnenentzündung dieselben?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Sie überschneiden sich, sind aber nicht dieselben. Bei Plantarfasziitis stehen Dehnungen von Plantarfaszie und Wade am Anfang, mit Empfehlungsgrad A, dazu Fersenheben mit Empfehlungsgrad B. Bei Achillessehnenentzündung steht die Belastung am Anfang: Fersenheben mit Halten, Fersenheben und langsames Fersenabsenken, mit Empfehlungsgrad A. Krafttraining für die Wade passt zu beiden.',
    },
    {
      q: 'Kann man Plantarfasziitis und Achillessehnenentzündung zusammen haben?',
      cites: [CITE.steccoPfAchilles],
      a: 'Ja. In einer MRT-Studie mit 52\u00A0Menschen mit Fuß- oder Sprunggelenkschmerzen hatten 5 der 27 mit Veränderungen an der Achillessehne auch eine Plantarfaszie, die dick genug war, um einen gängigen Grenzwert für Plantarfasziitis zu erreichen. Keine Studie hat gezählt, wie oft beides in der Allgemeinbevölkerung zusammen vorkommt.',
    },
    {
      q: 'Ist Schmerz hinten an der Ferse eine Plantarfasziitis?',
      cites: [CITE.guideline, CITE.chooRearfoot],
      a: 'Meist nicht. Plantarfasziitis schmerzt unter der Ferse. Schmerz hinten an der Ferse ist häufiger eine Tendinopathie der Achillessehne, eine Schleimbeutelentzündung hinter dem Fersenbein oder eine Haglundferse, ein Knochenvorsprung dort, wo die Sehne ansetzt. Ein plötzliches Knallen hinten an der Ferse musst du noch am selben Tag ärztlich abklären lassen.',
    },
    {
      q: 'Bedeutet ein Fersensporn Plantarfasziitis oder Achillessehnenentzündung?',
      cites: [CITE.chooRearfoot],
      a: 'Für sich allein keins von beiden. Ein Sporn unter der Ferse liegt nahe der Plantarfaszie, ein Sporn hinten dort, wo die Achillessehne ansetzt, aber Sporne sind auch bei Menschen ohne Schmerzen häufig. Was den Schmerz verursacht, entscheidet die Untersuchung, nicht das Röntgenbild allein.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'du hinten am Sprunggelenk ein plötzliches Knallen oder Schnappen gespürt hast oder es sich angefühlt hat, als hätte dich jemand dort getreten, und das Abdrücken jetzt schwerfällt',
      'du auf der schmerzenden Seite nicht auf die Zehenspitzen kommst oder eine Lücke in der Sehne spürst',
      'du ein Fluorchinolon-Antibiotikum wie Ciprofloxacin nimmst oder kürzlich genommen hast und neue Sehnenschmerzen hast',
      'die Ferse rot, heiß und geschwollen ist oder du Fieber hast',
      'die Ferse an beiden Seiten wehtut, wenn du sie zusammendrückst, oder nachts oder in Ruhe schmerzt',
      'du Brennen, Kribbeln oder Taubheit in der Ferse oder Fußsohle spürst',
      'der Schmerz nach einem Sturz oder einer Verletzung begann oder du den Fuß nicht belasten kannst',
      'der Schmerz über Wochen trotz regelmäßiger Übungen immer schlimmer wird',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß. Du sagst ihr, wo es wehtut, unter der Ferse oder hinten, und sie baut den Plan nach deiner Antwort auf: Plantarfaszien-Dehnungen und Fersenheben mit Handtuch bei Fersenschmerzen, Wadenbelastung vom Halten bis zum langsamen Fersenabsenken bei Achillesschmerzen.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deinen Fersenschmerz am Morgen, und der Plan passt sich daran an. Walkito stellt keine Diagnose. Wenn du nicht sicher bist, welche der beiden du hast, lass es zuerst ärztlich abklären.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['achilles', 'hubPlantarFasciitis', 'pfVsHeelSpur'],
  crumb: 'Plantarfasziitis oder Achillessehne',
  campaign: 'guide-plantar-fasciitis-vs-achilles-tendonitis-de',
};
