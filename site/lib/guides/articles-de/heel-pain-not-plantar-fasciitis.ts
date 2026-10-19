import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/heel-pain-not-plantar-fasciitis.ts (2026-10-19),
 * written around «Fersenschmerzen keine Plantarfasziitis», «Fersenschmerzen
 * andere Ursachen» and «Fersenschmerzen Nerv». Informal «du», terminology and
 * exercise names as in `lib/guides/de.ts` and the other articles-de pages.
 * Figures, grades, hedges and sources are identical to the English page after
 * its fact-check. Same CITE keys and media ids. Link to /foot-pain-identifier/
 * removed (no German version), the words kept as plain text.
 */

export const HEEL_NOT_PF_DE: Guide = {
  lang: 'de',
  page: 'heelNotPf',
  mainSource: CITE.latt,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fersenschmerzen, aber keine Plantarfasziitis? 9 Ursachen',
  description:
    'Fersenschmerzen ohne Plantarfasziitis: Fettpolster, Nerven, Ermüdungsbruch, Achillessehne, Haglund, Sever, PTTD, Arthritis und Rücken im Vergleich.',
  h1: 'Fersenschmerzen, die keine Plantarfasziitis sind: ähnliche Beschwerden und wie sie sich unterscheiden',
  lede:
    'Wenn deine Fersenschmerzen nicht dem typischen Muster einer [Plantarfasziitis](/de/plantarfasziitis/) folgen, also am schlimmsten bei den ersten Schritten am Morgen und besser, sobald du warm wirst, kann etwas anderes dahinterstecken. Unter der Ferse sind die häufigsten Doppelgänger ein geprelltes oder dünnes Fersenfettpolster, ein gereizter Nerv, auch einer, der im unteren Rücken eingeklemmt ist, ein Ermüdungsbruch des Fersenbeins und eine entzündliche Arthritis (Latt und Kollegen, 2020). Schmerzen hinten an der Ferse haben eigene Ursachen, etwa die Achillessehne. Bei 250\u00A0Menschen mit Schmerzen unter der Ferse erklärte die Plantarfasziitis 53,2\u00A0% der Fälle und ein Schwund des Fettpolsters 14,8\u00A0% (Yi und Kollegen, 2011).',
  intro: [
    'Diese Seite stellt neun ähnliche Beschwerden nebeneinander: wo jede wehtut, wann, was sie schlimmer macht und was als Nächstes sinnvoll ist. Sie ist keine Diagnose. Mehrere davon fühlen sich ähnlich an, zwei können gleichzeitig vorliegen, und nur eine Ärztin, ein Arzt oder eine Physiotherapeutin, die deinen Fuß untersucht, kann sie auseinanderhalten. Diese Seite erklärt die Unterschiede, nach denen dabei sortiert wird.',
  ],
  takeaways: [
    'Typische Schmerzen bei Plantarfasziitis sitzen nah an der Innenseite der Ferse, sind bei den ersten Schritten am Morgen oder nach dem Sitzen am schlimmsten, werden mit Bewegung besser und dann bei längerer Belastung wieder schlimmer (Latt und Kollegen, 2020).',
    'Bei 250\u00A0Menschen mit Schmerzen unter der Ferse entfielen 53,2\u00A0% auf eine Plantarfasziitis, 14,8\u00A0% auf einen Schwund des Fettpolsters und 9,2\u00A0% auf beides zusammen (Yi und Kollegen, 2011).',
    'Brennende, elektrisierende oder kribbelnde Fersenschmerzen sprechen oft für einen Nerv. Eine Übersichtsarbeit schätzt, dass ein eingeklemmter Baxter-Nerv bis zu 20\u00A0% der chronischen Fersenschmerzen erklären könnte (Tedeschi, 2025).',
    'Ein Ermüdungsbruch des Fersenbeins schmerzt meist bei Belastung, nicht beim ersten Schritt, und bei 30\u00A0Rekruten war er auf einem normalen Röntgenbild nur in 15\u00A0% der Fälle zu sehen (Latt und Kollegen, 2020; Sormaala und Kollegen, 2006).',
    'Schmerzen in beiden Fersen zusammen mit anderen schmerzenden oder steifen Gelenken oder einem steifen Rücken sprechen für eine entzündliche Ursache, die ärztlich abgeklärt werden muss, nicht nur gedehnt (Latt und Kollegen, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was kann außer einer Plantarfasziitis Fersenschmerzen verursachen?',
      keyFact: 'Bei 250\u00A0Menschen mit Schmerzen unter der Ferse erklärte die Plantarfasziitis 53,2\u00A0% der Fälle, ein Schwund des Fettpolsters allein 14,8\u00A0% und beides zusammen 9,2\u00A0% (Yi und Kollegen, 2011).',
      paragraphs: [
        '**Die Plantarfasziitis ist die häufigste Ursache für Fersenschmerzen, aber längst nicht die einzige.** Eine Leitlinie US-amerikanischer Fußchirurgen beschreibt Fersenschmerzen als überwiegend mechanisch, sagt aber, dass auch Ursachen an Nerven, Gelenken (Arthritis), durch Verletzungen, Tumoren, Infektionen und Blutgefäße bedacht werden müssen (Thomas und Kollegen, 2010). Eine Übersichtsarbeit von 2020 teilt die Ursachen von Schmerzen unter der Ferse in Nervenprobleme, Verletzungen wie einen Ermüdungsbruch oder einen Riss der Faszie, entzündliche Arthritis und Verschleiß des Fettpolsters oder der Faszie selbst ein (Latt und Kollegen, 2020).',
        'Die Tabelle stellt die neun häufigsten Doppelgänger neben die Plantarfasziitis. Lies sie als Landkarte von Mustern, nicht als Checkliste: Die Zellen beschreiben das Typische, und deine Ferse muss sich nicht ans Lehrbuch halten.',
      ],
      table: {
        caption: 'Doppelgänger der Plantarfasziitis: typische Muster. Was du hast, kann nur eine Untersuchung bestätigen.',
        head: ['Beschwerde', 'Wo es wehtut', 'Wann', 'Schlimmer bei', 'Nächster Schritt'],
        rows: [
          ['[Plantarfasziitis](/de/plantarfasziitis/)', 'Innen unter der Ferse', 'Erste Schritte morgens, nach dem Sitzen', 'Langem Stehen und Gehen', 'Dehnen und Wadenkraft'],
          ['[Fettpolster-Syndrom](/de/fersenfettpolster-syndrom/)', 'Mitte des Fersenpolsters, wie ein tiefer Bluterguss', 'Beim Stehen und Gehen', 'Harten Böden, barfuß', 'Dämpfung, ärztlich abklären'],
          ['Nerv (Baxter, Tarsaltunnel)', 'Innere Ferse oder Sohle, kann ausstrahlen', 'Nicht an erste Schritte gebunden, auch in Ruhe', 'Brennen, Kribbeln, Taubheit', 'Ärztlich abklären'],
          ['[Ermüdungsbruch](/de/plantarfasziitis-oder-ermuedungsbruch/)', 'Ganzes Fersenbein, Seiten druckempfindlich', 'Nimmt mit Belastung zu', 'Laufen, Springen, mehr Strecke', 'Entlasten, bald ärztlich abklären'],
          ['[Achillessehne am Ansatz](/de/plantarfasziitis-oder-achillessehne/)', 'Hinten an der Ferse, am Knochen', 'Während und nach Belastung', 'Bergauf, Treppen, tiefe Wadendehnung', 'Wade belasten, Absenken nur bis zum Boden'],
          ['[Haglundferse](/de/haglundferse/)', 'Höcker oben hinten an der Ferse', 'In Schuhen', 'Steifen Fersenkappen', 'Weichere Fersenkappe, Fersenkeil'],
          ['[Morbus Sever (Kinder)](/de/morbus-sever/)', 'Hinten oder seitlich an der Ferse', 'Während und nach dem Sport', 'Laufen, Springen, Wachstumsschüben', 'Weniger Belastung, ärztlich abklären'],
          ['[PTTD](/de/tibialis-posterior-insuffizienz/)', 'Innenknöchel und Gewölbe', 'Gehen, Stehen', 'Unebenem Boden, bergauf', 'Ärztlich abklären, dann Übungen'],
          ['Entzündliche Arthritis', 'Beide Fersen, dazu andere Gelenke', 'Morgensteifigkeit über 30\u00A0Minuten', 'Andere steife Gelenke, steifer Rücken', 'Zum Arzt oder zur Ärztin'],
          ['Vom Rücken ausstrahlend', 'Ferse oder Sohle, mit Beinschmerzen', 'Wechselnd, mit Rückenschmerzen', 'Rücken- oder Beinschmerzen, Taubheit', 'Zum Arzt oder zur Ärztin'],
        ],
      },
      after: [
        'Die Zeilen zu Nerven, Rücken und Arthritis haben keinen Link, weil wir dazu keine Seite haben: Sie brauchen eine ärztliche Untersuchung, keine Übungsanleitung. Jede Zeile wird in den Abschnitten unten erklärt.',
      ],
      cites: [CITE.yiFatPad, CITE.thomasCpg, CITE.latt],
    },
    {
      h2: 'Wie fühlt sich eine Plantarfasziitis normalerweise an?',
      paragraphs: [
        '**Wer das übliche Muster kennt, merkt am leichtesten, wann die eigene Ferse nicht dazu passt.** Eine typische Plantarfasziitis ist ein dumpfer oder pochender Schmerz vorn an der Innenseite der Ferse, dort, wo die Faszie ansetzt. Er ist beim ersten Schritt am Morgen und beim Aufstehen nach dem Sitzen am schlimmsten, wird oft besser, sobald du in Bewegung bist, und dann wieder schlimmer, je länger du stehst oder gehst (Latt und Kollegen, 2020). Mehr zu diesem Muster unter [Fersenschmerzen morgens](/de/fersenschmerzen-morgens/).',
        'Dieselbe Übersichtsarbeit sagt: Wenn jemand diese klassischen Merkmale nicht beschreibt, sollte nach anderen Ursachen gesucht werden. Sie hält auch fest, dass eine Plantarfasziitis meist einen Fuß betrifft, etwa 30\u00A0% der Menschen sie aber an beiden haben (Latt und Kollegen, 2020). Zwei schmerzende Fersen schließen eine Plantarfasziitis also nicht aus, sind aber ein Grund, genauer hinzuschauen.',
        'Die Plantarfasziitis ist außerdem die häufigste Ursache. Eine Ferse, die zum größten Teil ins Muster passt, hat also trotzdem am wahrscheinlichsten eine Plantarfasziitis. Bei den 250\u00A0Menschen oben erklärte sie allein etwa die Hälfte der Fälle und lag bei weiteren 9,2\u00A0% zusammen mit einem Schwund des Fettpolsters vor (Yi und Kollegen, 2011).',
      ],
      cites: [CITE.latt, CITE.yiFatPad],
    },
    {
      h2: 'Kann es ein Nerv sein oder ein Schmerz, der vom Rücken kommt?',
      keyFact: 'Eine Übersichtsarbeit von 2025 schätzt, dass ein eingeklemmter Baxter-Nerv bis zu 20\u00A0% der chronischen Fersenschmerzen ausmachen könnte und oft für eine Plantarfasziitis gehalten wird (Tedeschi, 2025).',
      paragraphs: [
        '**Schmerz, der als brennend oder wie ein Stromschlag beschrieben wird, kommt oft von einem Nerv** (Latt und Kollegen, 2020). Drei Nervenquellen sind die üblichen Verdächtigen:',
        {
          list: [
            '**Der Baxter-Nerv**, ein kleiner Ast, der unter der Ferse verläuft. Wird er eingeengt, gibt er einen chronischen, brennenden Schmerz quer über das Fersenpolster (Latt und Kollegen, 2020). Eine Übersichtsarbeit schätzt, dass er bis zu 20\u00A0% der chronischen Fersenschmerzen erklären könnte, und sagt, dass er oft für eine Plantarfasziitis gehalten wird (Tedeschi, 2025), eine andere nennt ihn selten (Latt und Kollegen, 2020).',
            '**Das Tarsaltunnelsyndrom**, bei dem der Schienbeinnerv (Nervus tibialis) hinter dem Innenknöchel eingeengt ist. Es bringt meist brennende oder einschießende Schmerzen entlang der Sohle, oft mit Taubheit (Latt und Kollegen, 2020). Mehr zu Nervenschmerzen im Gewölbe unter [Schmerzen im Fußgewölbe](/de/schmerzen-im-fussgewoelbe/).',
            '**Ein eingeklemmter Nerv im unteren Rücken**, auf Höhe L5 oder S1. Das ist relativ häufig und kommt meist mit Rückenschmerzen, Schmerzen, die ins Bein ziehen, oder Taubheit in Fuß oder Bein (Latt und Kollegen, 2020).',
          ],
        },
        'Eine Übersichtsarbeit zu nervenbedingten Fersenschmerzen kam zu dem Schluss, dass eingeengte Nerven sowohl früh als auch bei Fersenschmerzen, die nicht besser werden, eine Rolle spielen können, dass aber noch umstritten ist, wie das zustande kommt und wie man es am besten testet (Alshami und Kollegen, 2008). Schmerzen nachts oder in Ruhe mit Kribbeln behandelt die Seite [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/).',
        'Das ist eine Gruppe, bei der Übungen zur Selbsthilfe nicht der erste Schritt sind. Eine Ärztin oder ein Arzt untersucht den Fuß, zum Beispiel durch Beklopfen entlang des Schienbeinnervs, und setzt eventuell Ultraschall, Nervenmessungen oder ein MRT ein (Latt und Kollegen, 2020; Tedeschi, 2025).',
      ],
      cites: [CITE.latt, CITE.tedeschiBaxter, CITE.alshami],
    },
    {
      h2: 'Kann es ein Ermüdungsbruch oder das Fettpolster sein?',
      keyFact: 'Bei 30\u00A0Rekruten, bei denen das MRT eine Stressverletzung des Fersenbeins zeigte, war sie auf einem normalen Röntgenbild nur in 15\u00A0% der Fälle zu sehen (Sormaala und Kollegen, 2006).',
      paragraphs: [
        '**Beide schmerzen eher bei Belastung als beim ersten Schritt am Morgen.** Ein Ermüdungsbruch des Fersenbeins verursacht typischerweise einen Schmerz quer über den hinteren Teil des Fersenbeins, der an Belastung gebunden ist, nicht ans Aufstehen. Er ist wahrscheinlicher, wenn du schon einmal eine geringe Knochendichte oder einen Ermüdungsbruch hattest (Latt und Kollegen, 2020). Meist folgt er auf einen Sprung beim Gehen oder Laufen oder einen Wechsel auf einen härteren Untergrund (Tu, 2018).',
        'Ein normales Röntgenbild schließt ihn nicht aus: Bei 30\u00A0Rekruten mit einer Stressverletzung des Fersenbeins im MRT zeigten normale Röntgenbilder sie nur in 15\u00A0% der Fälle (Sormaala und Kollegen, 2006). Den direkten Vergleich findest du unter [Plantarfasziitis oder Ermüdungsbruch](/de/plantarfasziitis-oder-ermuedungsbruch/).',
        'Schmerzen am Fettpolster werden meist als tiefer Schmerz wie bei einem Bluterguss in der Mitte des Fersenpolsters beschrieben, schlimmer auf harten Böden und barfuß. Wie ein Ermüdungsbruch hängt er eher mit Belastung zusammen (Latt und Kollegen, 2020), und in einer Klinik betraf er häufiger beide Fersen und wurde durch Stehen schlimmer (Yi und Kollegen, 2011). Bei den 250\u00A0Menschen oben war er mit 14,8\u00A0% die zweithäufigste Ursache (Yi und Kollegen, 2011). Eine Übersichtsarbeit von 2022 fand nur sieben Originalstudien dazu, viele Ratschläge beruhen also auf Erfahrung, nicht auf Studien (Chang und Kollegen, 2022). Mehr unter [Fersenfettpolster-Syndrom](/de/fersenfettpolster-syndrom/) und dazu, wie ein Fersensporn ins Bild passt, unter [Plantarfasziitis oder Fersensporn](/de/plantarfasziitis-oder-fersensporn/).',
      ],
      cites: [CITE.latt, CITE.tuHeelPain, CITE.sormaalaCalcaneus, CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'Was, wenn der Schmerz hinten an der Ferse sitzt?',
      paragraphs: [
        '**Eine Plantarfasziitis tut unter der Ferse weh. Schmerz hinten an der Ferse kommt meist von der Achillessehne, vom Knochen an ihrem Ansatz oder bei Kindern von der Wachstumsfuge.** Hier gibt es drei Doppelgänger:',
        {
          list: [
            '**Achillessehnen-Tendinopathie am Ansatz**, Schmerz genau dort, wo die Achillessehne auf das Fersenbein trifft, statt weiter oben an der Sehne (Jonsson und Kollegen, 2008). Siehe [Plantarfasziitis oder Achillessehne](/de/plantarfasziitis-oder-achillessehne/) und [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
            '**Haglundferse**, ein knöcherner Höcker oben hinten an der Ferse, an dem Schuhe reiben. Das kann den Schleimbeutel und die Sehne reizen (Yuen und Kollegen, 2022). Siehe [Haglundferse](/de/haglundferse/).',
            '**Morbus Sever** bei Kindern, die noch wachsen: Die Wachstumsfuge hinten an der Ferse wird beim Laufen und Springen schmerzhaft. Bei Kindern spricht Schmerz, wenn die Ferse von beiden Seiten zusammengedrückt wird, dafür (Tu, 2018). Siehe [Morbus Sever](/de/morbus-sever/).',
          ],
        },
        'Schmerz am Ansatz der Achillessehne verändert, wie du übst: Das Fersenabsenken endet auf Bodenhöhe, statt die Ferse unter die Stufe sinken zu lassen, weil eine tiefe Dehnung die Sehne gegen den Knochen drücken kann (Jonsson und Kollegen, 2008).',
      ],
      cites: [CITE.jonsson, CITE.yuenHaglund, CITE.tuHeelPain],
    },
    {
      h2: 'Was, wenn beide Fersen wehtun oder auch andere Gelenke steif sind?',
      paragraphs: [
        '**Schmerzen in beiden Fersen, Fersenschmerzen zusammen mit mehreren schmerzenden oder steifen Gelenken oder ein steifer Rücken sprechen für eine entzündliche Ursache**, etwa eine Psoriasis-Arthritis, eine reaktive Arthritis oder eine Spondyloarthritis (Latt und Kollegen, 2020). Die Gruppe der Spondyloarthritiden ist bei jungen Männern am häufigsten, die Plantarfasziitis dagegen im mittleren Alter und häufiger bei Frauen (Latt und Kollegen, 2020).',
        'Dieselbe Übersichtsarbeit nennt die Hinweise, bei denen eine Ärztin oder ein Arzt Blutuntersuchungen veranlasst: Beschwerden an anderen Stellen des Körpers, beide Füße betroffen, mehrere Gelenke beteiligt, vor allem kleine, und Morgensteifigkeit, die länger als 30\u00A0Minuten anhält (Latt und Kollegen, 2020).',
        'Auch bei einer Plantarfasziitis können beide Fersen wehtun. In einer Nachbeobachtung über 5 bis 15\u00A0Jahre bei 174\u00A0Menschen mit Plantarfasziitis hingen Schmerzen in beiden Fersen mit länger anhaltenden Beschwerden zusammen (Hansen und Kollegen, 2018). Deshalb sind zwei schmerzende Fersen ein Grund, dich untersuchen zu lassen, aber kein Beweis für eine Arthritis.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Was, wenn es innen am Knöchel und im Gewölbe wehtut?',
      paragraphs: [
        '**Schmerz hinter oder unter dem Innenknöchel und entlang des Gewölbes, statt unter der Ferse, kann von der Sehne des Tibialis posterior kommen.** Sie ist die wichtigste aktive Stütze des inneren Gewölbes, und Menschen mit einem Problem hier haben Schmerzen am Innenknöchel und einen Fuß, der langsam flacher wird (Deu und Kollegen, 2022). In einer Umfrage unter 582\u00A0Frauen über 40 in England hatten 3,3\u00A0% eine PTTD im Frühstadium, und bei keiner war sie diagnostiziert worden (Kohls-Gatzoulis und Kollegen, 2009).',
        'Ein Gewölbe, das auf einer Seite flacher wird, oder Mühe, dich auf diesem Fuß auf die Zehen zu stellen, ist ein Grund, es ärztlich oder physiotherapeutisch abklären zu lassen. Für Übungen in frühen Stadien gibt es gewisse Belege, aber nur drei kleine Studien mit insgesamt 93\u00A0Menschen haben sie getestet (Ross und Kollegen, 2018). Mehr unter [Tibialis-posterior-Insuffizienz](/de/tibialis-posterior-insuffizienz/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'Was solltest du als Nächstes tun, und wann passen die Übungen?',
      paragraphs: [
        '**Wenn deine Ferse zum Muster der Plantarfasziitis passt und keines der Warnzeichen unten zutrifft, sind Dehnen und Wadenkraft die erste Wahl.** Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade bei Plantarfasziitis mit **Empfehlungsgrad A** und Krafttraining mit **B** (Koc und Kollegen, 2023). Diese Übungen sind nur für die Plantarfasziitis gedacht. Sie sind nicht für einen vermuteten Bruch, ein Nervenproblem oder eine Arthritis gemacht.',
        'Wenn dein Schmerz zu einer anderen Zeile der Tabelle passt oder du unsicher bist, geh zur Hausärztin oder zum Hausarzt, in die Physiotherapie oder zur Podologie. Nimm eine kurze Notiz mit: wo es wehtut, wann es am schlimmsten ist, was es schlimmer macht, ob ein Fuß oder beide betroffen sind und was sonst noch dazukam, etwa Taubheit, Schwellung oder Rückenschmerzen. Genau damit werden die Doppelgänger in der Untersuchung auseinandergehalten.',
        'Wenn du schon mehrere Wochen Übungen bei Plantarfasziitis machst und sich nichts verändert hat, lohnt sich ein Termin ebenfalls. Versorgung ohne Operation bringt bei etwa 90\u00A0% der Menschen mit Plantarfasziitis volle Linderung, auch wenn das drei bis sechs Monate dauern kann. Schmerz, der sich gar nicht bewegt, ist also ein Grund, die Diagnose zu überprüfen (Latt und Kollegen, 2020). Siehe [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/) und die vollständigen [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung (nur bei Plantarfasziitis)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad. Nicht für die Doppelgänger auf dieser Seite.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Brennen oder Kribbeln, Schmerz im Fersenbein selbst oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (nur bei Plantarfasziitis)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad. Nicht für die Doppelgänger auf dieser Seite.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse, deshalb ist diese Dehnung wichtig, auch wenn du sie weiter oben spürst.',
          stop: 'Schmerz hinten an der Ferse, wo die Achillessehne ansetzt, oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (nur bei Plantarfasziitis)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen bei Plantarfasziitis mit A, ihrem höchsten Empfehlungsgrad. Nicht für die Doppelgänger auf dieser Seite.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Schmerz hinten an der Ferse, wo die Achillessehne ansetzt, oder Schmerz, der 6 von 10 erreicht',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen (nur bei Plantarfasziitis)',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining bei Plantarfasziitis mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: '3\u00A0Tage pro Woche, nie zwei Tage hintereinander',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, der tiefere Wadenmuskel, und die Ferse wird kaum belastet. Die Studie zum Fersenheben auf dieser Website hat eine schwerere Variante im Stehen getestet (Rathleff und Kollegen, 2015).',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Was wird häufig mit einer Plantarfasziitis verwechselt?',
      cites: [CITE.latt, CITE.yiFatPad],
      a: 'Die häufigsten Doppelgänger sind das Fersenfettpolster-Syndrom, eingeklemmte Nerven wie der Baxter-Nerv oder ein Tarsaltunnelsyndrom, ein Ermüdungsbruch des Fersenbeins und Schmerzen am Ansatz der Achillessehne. Es kann auch eine entzündliche Arthritis oder ein im unteren Rücken eingeklemmter Nerv sein. Bei 250\u00A0Menschen mit Schmerzen unter der Ferse erklärte ein Schwund des Fettpolsters 14,8\u00A0% der Fälle.',
    },
    {
      q: 'Woran erkenne ich, dass meine Fersenschmerzen keine Plantarfasziitis sind?',
      cites: [CITE.latt],
      a: 'Sicher wissen kannst du es ohne Untersuchung nicht, aber manche Merkmale passen nicht. Eine Plantarfasziitis ist meist bei den ersten Schritten am Morgen am schlimmsten und lässt in Bewegung nach. Brennen oder Kribbeln, Schmerz, der mit Belastung zunimmt, Schmerz hinten an der Ferse oder beide Fersen mit steifen Gelenken sprechen für etwas anderes. Eine Ärztin oder ein Arzt kann das klären.',
    },
    {
      q: 'Können Fersenschmerzen vom Rücken kommen?',
      cites: [CITE.latt],
      a: 'Ja. Ein im unteren Rücken auf Höhe L5 oder S1 eingeklemmter Nerv kann Schmerzen, Taubheit oder Kribbeln in Ferse und Sohle verursachen. Das ist relativ häufig und kommt meist mit Rückenschmerzen oder Schmerzen, die ins Bein ziehen. Schwäche im Fuß oder Taubheit, die sich ausbreitet, sollte zügig ärztlich abgeklärt werden.',
    },
    {
      q: 'Wie fühlen sich Nervenschmerzen in der Ferse an?',
      cites: [CITE.latt, CITE.tedeschiBaxter],
      a: 'Nervenschmerzen in der Ferse sind oft brennend, einschießend oder wie ein Stromschlag, manchmal mit Kribbeln oder Taubheit in der Sohle. Ein eingeklemmter Baxter-Nerv gibt einen brennenden Schmerz quer über das Fersenpolster, und eine Übersichtsarbeit schätzt, dass er bis zu 20\u00A0% der chronischen Fersenschmerzen erklären könnte. Das gehört ärztlich untersucht.',
    },
    {
      q: 'Sind Fersenschmerzen an beiden Füßen eine Plantarfasziitis?',
      cites: [CITE.latt],
      a: 'Das kann sein: Etwa 30\u00A0% der Menschen mit Plantarfasziitis haben sie an beiden Füßen. Schmerzen in beiden Fersen können aber auch auf eine entzündliche Arthritis hinweisen, vor allem mit anderen schmerzenden oder steifen Gelenken, einem steifen Rücken oder Morgensteifigkeit, die länger als 30\u00A0Minuten anhält. Diese Kombination ist ein Grund, zum Arzt oder zur Ärztin zu gehen.',
    },
    {
      q: 'Kann ein Röntgenbild zeigen, woher meine Fersenschmerzen kommen?',
      cites: [CITE.sormaalaCalcaneus, CITE.guideline],
      a: 'Manchmal, aber ein normales Röntgenbild schließt weniger aus, als viele denken. Bei 30\u00A0Rekruten mit einer Stressverletzung des Fersenbeins im MRT zeigten normale Röntgenbilder sie nur in 15\u00A0% der Fälle. Bei einer typischen Plantarfasziitis ist Bildgebung laut der Leitlinie von 2023 meist nicht nötig. Ob Ultraschall, MRT oder Nervenmessungen sinnvoll sind, entscheidet die Ärztin oder der Arzt.',
    },
    {
      q: 'Warum wird meine Plantarfasziitis nicht besser?',
      cites: [CITE.latt],
      a: 'Dafür gibt es mehrere mögliche Gründe, und einer ist, dass es vielleicht gar keine Plantarfasziitis ist. Bei etwa 90\u00A0% der Menschen mit Plantarfasziitis wird es mit Versorgung ohne Operation besser. Schmerz, der sich nach mehreren Wochen regelmäßigen Dehnens und Krafttrainings nicht verändert hat, ist also ein guter Grund, die Diagnose ärztlich überprüfen zu lassen.',
    },
    {
      q: 'Was verursacht Fersenschmerzen bei Kindern, wenn es keine Plantarfasziitis ist?',
      cites: [CITE.tuHeelPain],
      a: 'Bei Kindern, die noch wachsen, ist die häufigste Ursache der Morbus Sever, eine gereizte Wachstumsfuge hinten am Fersenbein. Er tut während und nach Sportarten mit Laufen und Springen weh, und eine Ferse, die schmerzt, wenn man sie von beiden Seiten zusammendrückt, spricht dafür. Fersenschmerzen bei einem Kind, die nicht abklingen, sollten ärztlich abgeklärt werden.',
    },
    {
      q: 'Kann ich Übungen bei Plantarfasziitis machen, wenn ich nicht sicher bin, was es ist?',
      cites: [CITE.guideline],
      a: 'Die Leitlinie von 2023 bewertet Dehnungen von Plantarfaszie und Wade bei Plantarfasziitis mit A, und sie sind sanft. Wenn du aber Brennen oder Taubheit, eine Schwellung, Schmerz, der mit Belastung zunimmt, oder Schmerz nach einer Verletzung hast, lass es zuerst abklären. Hör mit jeder Übung auf, die die Ferse deutlich schlimmer macht.',
    },
  ],
  redFlags: {
    h2: 'Lass es zuerst ärztlich abklären, wenn',
    bullets: [
      'du Brennen, Kribbeln, Stromschläge oder Taubheit in Ferse oder Sohle spürst',
      'die Fersenschmerzen mit Rückenschmerzen, Schmerzen, die ins Bein ziehen, oder Schwäche im Fuß einhergehen',
      'der Schmerz zunimmt, je länger du gehst oder läufst, oder es wehtut, wenn du das Fersenbein seitlich zusammendrückst',
      'die Ferse geschwollen, gerötet, warm oder blau verfärbt ist oder du Fieber hast',
      'beide Fersen wehtun und andere Gelenke schmerzen oder steif sind oder die Morgensteifigkeit länger als 30\u00A0Minuten anhält',
      'der Schmerz nach einem Sturz, einem Umknicken oder einem plötzlichen Knall begann oder du den Fuß nicht belasten kannst',
      'die Ferse in Ruhe wehtut oder dich nachts aufweckt',
      'ein Kind Fersenschmerzen hat, die mit weniger Sport nicht abklingen',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App bei Fersen- und Fußschmerzen. Ihr Plan ist für Fersenschmerzen vom Typ Plantarfasziitis gebaut, nicht für die Doppelgänger auf dieser Seite. Wenn dein Schmerz zu einem anderen Muster passt, lass ihn also abklären, bevor du anfängst.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deine Fersenschmerzen am Morgen, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['hubPlantarFasciitis', 'heelFatPad', 'heelPainAtNight'],
  crumb: 'Fersenschmerzen ohne Plantarfasziitis',
  campaign: 'guide-heel-pain-not-plantar-fasciitis-de',
};
