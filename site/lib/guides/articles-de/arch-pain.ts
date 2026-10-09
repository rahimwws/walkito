import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/arch-pain.ts`, written around the German queries
 * «Schmerzen im Fußgewölbe», «Fußgewölbe schmerzt beim Gehen», «Schmerzen
 * Fußsohle Mitte». Informal «du», terminology and exercise names as in
 * `lib/guides/de.ts`. Figures, doses, grades and qualifiers are identical to
 * the English page. No new citations.
 */

export const ARCH_PAIN_DE: Guide = {
  lang: 'de',
  page: 'archPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Schmerzen im Fußgewölbe: Ursachen, Übungen, wann zum Arzt',
  description:
    'Schmerzen im Fußgewölbe beim Gehen: Plantarfasziitis, Plattfuß, Tibialis-posterior-Insuffizienz, Hohlfuß oder Nerven. Unterschiede, Übungen, wann zum Arzt.',
  h1: 'Schmerzen im Fußgewölbe: woher sie kommen und was du tun kannst',
  lede:
    'Schmerzen im Fußgewölbe kommen meist von einer Handvoll Erkrankungen: Plantarfasziitis, Plattfuß oder Senkfuß, Tibialis-posterior-Insuffizienz, ein Hohlfuß, der Stöße schlecht abfängt, Überlastung oder eine Nervenreizung wie das Tarsaltunnelsyndrom. Die Ursache bestimmt, was du dagegen tun kannst. Diese Seite ordnet die häufigsten ein, verweist auf die vollständigen Übungsratgeber, wo es sie gibt, und zeigt die Übungen, die dem Gewölbe direkt helfen.',
  takeaways: [
    'Plantarfasziitis ist die häufigste einzelne Ursache für Schmerzen in Gewölbe und Ferse. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A und Krafttraining mit B (Koc und Kollegen, 2023).',
    'Die Tibialis-posterior-Insuffizienz, eine Schwächung der Sehne, die das Gewölbe stützt, ist die häufigste Ursache eines im Erwachsenenalter erworbenen Plattfußes (Ross und Kollegen, 2018).',
    'Plattfuß und Hohlfuß verändern beide, wie Kraft beim Gehen durch das Gewölbe läuft, aber die Schmerzmuster und die Übungen unterscheiden sich.',
    'Eingeschränkte Dorsalflexion im Sprunggelenk, also eine verkürzte Wade, war in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen der stärkste unabhängige Risikofaktor für Plantarfasziitis (Riddle und Kollegen, 2003).',
    'Schmerzen im Gewölbe mit Taubheit, Kribbeln, Brennen oder Schwäche sollte eine medizinische Fachperson abklären, um einen eingeklemmten Nerv oder eine neurologische Ursache auszuschließen, bevor du trainierst.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Woher kommen Schmerzen im Fußgewölbe?',
      paragraphs: [
        'Das Gewölbe wird von der Plantarfaszie, der Tibialis-posterior-Sehne, den kleinen Fußmuskeln sowie den Knochen und Bändern des Mittelfußes getragen. Schmerz im Gewölbe heißt, dass eine oder mehrere dieser Strukturen stärker belastet werden, als sie verkraften. Die häufigsten Ursachen lassen sich in ein paar Muster einteilen.',
        '**Plantarfasziitis** ist die häufigste einzelne Ursache. Die Plantarfaszie, ein dickes Gewebeband von der Ferse bis zum Ansatz der Zehen, wird durch wiederholte Belastung gereizt. Der Schmerz ist meist nahe der Ferse am stärksten, zieht aber oft ins Gewölbe, vor allem wenn der Teil der Faszie am Gewölbe betroffen ist. Das Kennzeichen ist stechender Schmerz bei den ersten Schritten nach einer Ruhephase. Den vollständigen Ratgeber findest du unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) und [Plantarfasziitis im Überblick](/de/plantarfasziitis/).',
        '**Plattfuß und Senkfuß** verursachen Schmerzen im Gewölbe, weil Plantarfaszie und Tibialis-posterior-Sehne überdehnt werden. Wenn das Gewölbe beim Stehen und Gehen absinkt, tragen diese Strukturen eine Last, für die sie auf Dauer nicht gebaut sind. Lies [Übungen bei Plattfuß](/de/plattfuss-uebungen/) und [Plattfuß im Überblick](/de/plattfuss/).',
        '**Tibialis-posterior-Insuffizienz** ist die häufigste Ursache eines im Erwachsenenalter erworbenen Plattfußes. Die Tibialis-posterior-Sehne verläuft hinter dem Innenknöchel und unter das Gewölbe und hält es hoch. Wenn diese Sehne schwächer wird oder reißt, sinkt das Gewölbe allmählich ab. Der Schmerz ist entlang des Innenknöchels und im Gewölbe spürbar und wird bei Aktivität schlimmer. Eine systematische Übersichtsarbeit von 2018 zu Übungen bei Tibialis-posterior-Insuffizienz fand begrenzte, aber vielversprechende Belege für Kräftigen und Dehnen. Lies [Übungen bei Tibialis-posterior-Insuffizienz](/de/tibialis-posterior-insuffizienz/).',
        '**Hohlfuß (Pes cavus)** verursacht Schmerzen im Gewölbe auf andere Weise. Ein steifes, hohes Gewölbe gibt nicht genug nach, um Stöße abzufangen, deshalb konzentriert sich die Kraft unter der Ferse und dem Fußballen, statt sich über den Mittelfuß zu verteilen. Schmerz unter dem Gewölbe kommt bei einem Hohlfuß oft von einer verkürzten Plantarfaszie. Lies [Übungen bei Hohlfuß](/de/hohlfuss-uebungen/).',
        '**Überlastung** ohne eine benannte Erkrankung ist häufig bei Menschen, die plötzlich mehr gehen, laufen oder stehen. Die Gewölbemuskeln und die Plantarfaszie sind für die neue Anforderung noch nicht kräftig genug und melden sich. Meist wird das besser, wenn du schrittweise zur vorherigen Belastung zurückkehrst und dazu Wade und Gewölbe kräftigst.',
        '**Eine Nervenreizung** wie das Tarsaltunnelsyndrom kann Brennen, Kribbeln oder Taubheit entlang des Gewölbes verursachen. Der Schienbeinnerv (Nervus tibialis) verläuft hinter dem Innenknöchel in die Fußsohle. Wenn er eingeklemmt wird, kann der Schmerz einer Plantarfasziitis ähneln, kommt aber mit Gefühlsstörungen, die eine Fasziitis nicht macht. Das gehört zu einer medizinischen Fachperson.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview, CITE.riddle],
    },
    {
      h2: 'Wie unterscheidest du die Ursachen?',
      paragraphs: [
        'Wo der Schmerz sitzt, zu welcher Tageszeit er am schlimmsten ist und was ihn besser oder schlimmer macht, gibt die klarsten Hinweise.',
      ],
      table: {
        caption: 'Schmerzen im Fußgewölbe: Muster nach Ursache',
        head: ['Ursache', 'Wo es wehtut', 'Wann es am schlimmsten ist', 'Wichtigster Hinweis'],
        rows: [
          ['Plantarfasziitis', 'Unter der Ferse, zieht ins Gewölbe', 'Erste Schritte nach einer Ruhephase, vor allem morgens', 'Stechender Schmerz lässt nach ein paar Minuten Gehen nach'],
          ['Plattfuß / Senkfuß', 'Entlang des inneren Gewölbes, manchmal am Innenknöchel', 'Nach langem Stehen oder Gehen', 'Gewölbe sinkt im Stehen sichtbar ab, Schmerz lässt ohne Belastung nach'],
          ['Tibialis-posterior-Insuffizienz', 'Innenknöchel und Gewölbe', 'Bei und nach Aktivität', 'Einbeiniges Fersenheben ist auf der betroffenen Seite schwach oder schmerzhaft'],
          ['Hohlfuß', 'Unter dem Mittelfuß oder entlang des äußeren Gewölbes', 'Beim Gehen oder Laufen, vor allem auf hartem Boden', 'Gewölbe bleibt auch im Stehen hoch, schlechte Stoßdämpfung'],
          ['Überlastung', 'Allgemeiner Schmerz im Gewölbe', 'Nach einer plötzlichen Steigerung der Belastung', 'Kein Muster mit Morgenschmerz, wird mit Ruhe besser'],
          ['Nerv (Tarsaltunnel)', 'Entlang des Gewölbes mit Kribbeln oder Brennen', 'Unterschiedlich, manchmal in Ruhe', 'Taubheit, Kribbeln oder Brennen, die eine Plantarfasziitis nicht verursacht'],
        ],
      },
      after: [
        'Wenn dein Schmerz im Gewölbe dem Muster des Morgenschmerzes folgt und nahe der Ferse sitzt, fang mit der Seite [Plantarfasziitis](/de/plantarfasziitis/) an. Wenn das Gewölbe beim Stehen absinkt, lies [Übungen bei Plattfuß](/de/plattfuss-uebungen/). Wenn der Schmerz mit Taubheit oder Brennen einhergeht oder einbeiniges Fersenheben auf einer Seite schwach oder unmöglich ist, geh zu einer medizinischen Fachperson, bevor du mit Übungen anfängst.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview],
    },
    {
      h2: 'Welche Übungen helfen bei Schmerzen im Fußgewölbe?',
      keyFact: 'In der Leitlinie von 2023 zu Fersenschmerzen bekommt das Dehnen von Plantarfaszie und Wade die beste Bewertung, A, Krafttraining eine Stufe darunter, B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Die Übungen unten zielen auf das Gewölbe selbst und auf die Wadenmuskeln, die daran ziehen. Sie passen am besten, wenn der Schmerz im Gewölbe mit Plantarfasziitis, Plattfuß oder allgemeiner Überlastung zusammenhängt. Bei Tibialis-posterior-Insuffizienz oder nervenbedingten Schmerzen im Gewölbe sollte eine medizinische Fachperson den Übungsplan bestimmen. Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf.',
        'Das sind die Startdosen von Walkito, keine Dosen aus Studienprotokollen. Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade mit A und Krafttraining mit B. Für den kurzen Fuß und das Fußrollen allein sind die Belege dünner. [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen der Plantarfaszie mit A, ihrer besten Bewertung.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin und leg den betroffenen Fuß über das andere Knie. Zieh die Zehen zurück, bis du eine Dehnung entlang des Gewölbes spürst, nicht in der Wade. Wenn dein Gewölbe morgens am schlimmsten ist, mach diese Dehnung, bevor dein Fuß den Boden berührt.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung an der Unterseite des Gewölbes',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du das Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, das Gewölbe ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 bewertet das Wadendehnen mit A. Eine verkürzte Wade ist der stärkste Risikofaktor für Plantarfasziitis (Riddle 2003).' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand, das hintere Bein gestreckt, die Ferse unten, die Hüfte nach vorn. Der Gastrocnemius, der oberflächlichere Wadenmuskel, wird nur mit gestrecktem Knie gedehnt.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (Knie gebeugt)',
          evidence: { level: 'strong', why: 'Dieselbe Bewertung A in der Leitlinie. Zielt auf den Soleus, den tieferen Wadenmuskel.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand, dann beug das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Der Soleus, der tiefere Wadenmuskel, wird nur mit gebeugtem Knie gedehnt.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung nahe der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis die Dehnung tiefer wandert',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: { level: 'early', why: 'Eine Übersichtsarbeit von 2024 fand, dass Kurzer-Fuß-Training in manchen Studien die Gewölbeform veränderte, aber die Belege für weniger Schmerz allein durch diese Übung sind dünn.' },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt. Krall die Zehen nicht ein. Der kurze Fuß trainiert die kleinen Fußmuskeln, die das Gewölbe halten.',
          often: 'Krafttage',
          feel: 'Das Gewölbe hebt sich, die Zehen bleiben flach',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: Zieh den Fußballen Richtung Ferse',
          alt: 'Ein Fuß im Sitzen, das Gewölbe hebt sich, die Zehen liegen locker am Boden',
        },
        {
          name: 'Einwärtsdrehen mit Band (Tibialis posterior)',
          evidence: { level: 'moderate', why: 'Gezielte Aktivierung des Tibialis posterior per MRT bestätigt (Kulig 2004). In der Übersichtsarbeit von 2018 für die Reha bei Tibialis-posterior-Insuffizienz empfohlen.' },
          dose: '3\u00A0Sätze à 15, jeder Fuß',
          how: 'Setz dich hin, ein Widerstandsband liegt um den Vorfuß und ist seitlich befestigt. Dreh den Fuß gegen das Band nach innen. Halt das Knie still, damit die Bewegung aus dem Sprunggelenk kommt, nicht aus dem Bein. Das zielt auf die Tibialis-posterior-Sehne, die Sehne, die das Gewölbe hochhält.',
          often: 'Krafttage',
          feel: 'Arbeit entlang des Innenknöchels und unter dem Gewölbe',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'band_inversion',
          caption: 'Einwärtsdrehen mit Band: Beweg den Fuß, nicht das Bein',
          alt: 'Eine sitzende Figur dreht den Fuß gegen ein Band nach innen, der Innenknöchel ist hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Für das Wohlgefühl zwischen den Einheiten.' },
          dose: '2\u00A0Minuten, jeder Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam über einen Massageball oder eine gefrorene Wasserflasche. Der Druck ist fest, aber nie so stark, dass du zusammenzuckst. Das beruhigt das Gewebe, nachdem es gearbeitet hat.',
          often: 'Erholungstage',
          feel: 'Fester Druck unter dem Fuß',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'foot_roll',
          caption: 'Fußrollen: langsam und fest, bei stechendem Schmerz Druck rausnehmen',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.posteriorTibialReview, CITE.kulig, CITE.cheng],
    },
    {
      h2: 'Wann sind Schmerzen im Fußgewölbe ein Zeichen für etwas anderes?',
      paragraphs: [
        'Die meisten Schmerzen im Gewölbe sprechen auf Dehnen, angepasste Belastung und Zeit an. Aber manche Muster deuten auf Erkrankungen hin, die eine medizinische Fachperson abklären sollte, bevor du trainierst.',
        'Schmerz mit Taubheit, Kribbeln oder Brennen kann vom Tarsaltunnelsyndrom kommen, bei dem der Schienbeinnerv hinter dem Innenknöchel eingeklemmt ist. Das braucht eine klinische Diagnose, nicht nur Übungen.',
        'Schmerz im Gewölbe, bei dem der Fuß zunehmend flacher wird, vor allem auf einer Seite, kann auf eine fortgeschrittene Tibialis-posterior-Insuffizienz hindeuten. Ein Test mit einbeinigem Fersenheben ist eine einfache Prüfung: Wenn du auf einem Fuß nicht vollständig auf die Zehen kommst oder es auf einer Seite deutlich stärker wehtut, sollte eine medizinische Fachperson die Sehne beurteilen, bevor du sie weiter belastest.',
        'Schmerz an einer bestimmten Stelle, der bei Aktivität stetig schlimmer wird und bei normaler Ruhe nicht nachlässt, kann ein Ermüdungsbruch eines der kleinen Knochen im Mittelfuß sein. Das braucht Bildgebung, kein Dehnen.',
        'Schmerz im Gewölbe bei Kindern von 8 bis 15\u00A0Jahren kann eine [Apophysitis calcanei (Morbus Sever)](/de/morbus-sever/) sein, die die Wachstumsfuge betrifft und nicht die Faszie. Diese Seite erklärt, was bei Kindern hilft. Walkito ist für Erwachsene gemacht.',
      ],
      cites: [CITE.posteriorTibialReview],
    },
    {
      h2: 'Beeinflusst die Fußform Schmerzen im Fußgewölbe?',
      figure: { id: 'arches', caption: 'Dieselben Fußknochen bei einem Plattfuß, einem typischen Gewölbe und einem Hohlfuß, von der Innenseite gesehen.', alt: 'Drei Füße von der Innenseite auf ebenem Boden: ein Plattfuß, dessen Gewölbe auf dem Boden aufliegt, ein typisches Gewölbe mit einem kleinen Spalt darunter und ein Hohlfuß mit einem großen Spalt unter der Fußmitte.' },
      paragraphs: [
        'Ja. Plattfuß und Hohlfuß verändern beide, wie Kraft durch den Fuß läuft, aber in entgegengesetzter Weise.',
        'Bei einem Plattfuß sinkt das Gewölbe unter Last ab, und Plantarfaszie und Tibialis-posterior-Sehne werden über ihren angenehmen Bereich hinaus gedehnt. Die Übungen bei Plattfuß setzen auf Kräftigung der Gewölbemuskeln (kurzer Fuß, Zehenspreizen, Einwärtsdrehen mit Band) und der Hüfte (Hüftabduktion), weil eine Hüfte, die im Einbeinstand nachgibt, das Gewölbe nach innen drückt. Lies [Übungen bei Plattfuß](/de/plattfuss-uebungen/).',
        'Ein Hohlfuß (Pes cavus) ist steif und gibt nicht genug nach, um den Aufprall zu verteilen. Die Kraft konzentriert sich an der Ferse und am Fußballen. Die Plantarfaszie ist bei einem Hohlfuß oft verkürzt. Die Übungen setzen auf das Dehnen von Wade und Plantarfaszie plus Stabilitätstraining für das Sprunggelenk. Gedämpfte oder maßgefertigte Einlagen haben die besten Belege bei Schmerzen durch einen Hohlfuß. Lies [Übungen bei Hohlfuß](/de/hohlfuss-uebungen/).',
        'Ein normales Gewölbe mit plötzlicher Überlastung, zum Beispiel einer Woche mit viel mehr Gehen als sonst, macht einen allgemeinen Schmerz im Gewölbe, der gut auf die Übungen auf dieser Seite und eine schrittweise Rückkehr zur normalen Belastung anspricht.',
      ],
    },
    {
      h2: 'Und Einlagen und Schuhe bei Schmerzen im Fußgewölbe?',
      paragraphs: [
        'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Einlagen als alleinige Maßnahme bei kurzfristigen Schmerzen durch Plantarfasziitis mit **B dagegen**. Einlagen in Kombination mit anderer Behandlung, etwa Dehnen, bekommen ein C dafür. Stützende Schuhe werden häufig empfohlen und können Beschwerden verringern, aber keine große Studie hat gezeigt, dass sie besser sind als Dehnen und Krafttraining.',
        'Bei Plattfuß kann eine Gewölbestütze an der Innenseite das Absinken des Gewölbes beim Stehen und Gehen verringern, sodass Tibialis-posterior-Sehne und Plantarfaszie weniger Arbeit haben. Bei Hohlfuß fängt eine gedämpfte Einlage die Stöße ab, die das steife Gewölbe nicht abfängt. In einer Studie von 2006 mit 154\u00A0Menschen mit Fußschmerzen durch Hohlfuß verbesserten maßgefertigte Einlagen Schmerz und Funktion nach drei Monaten stärker als eine Schein-Einlage (Burns und Kollegen, 2006).',
        'Schuhe und Einlagen helfen, die Beschwerden in den Griff zu bekommen, während Übungen die Belastbarkeit aufbauen, die der Fuß braucht. Das eine ersetzt nicht das andere.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Was ist die häufigste Ursache für Schmerzen im Fußgewölbe?',
      cites: [CITE.guideline],
      a: 'Plantarfasziitis ist die häufigste einzelne Ursache. Sie entsteht, wenn die Plantarfaszie, ein dickes Gewebeband unter dem Fuß, durch wiederholte Belastung gereizt wird. Der Schmerz sitzt meist nahe der Ferse, zieht aber oft ins Gewölbe, vor allem wenn der Teil der Faszie am Gewölbe betroffen ist. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A und Krafttraining mit B.',
    },
    {
      q: 'Warum tut mein Fußgewölbe beim Gehen weh?',
      a: 'Schmerzen im Gewölbe beim Gehen kommen meist von einer von wenigen Quellen: Plantarfasziitis, ein Plattfuß, bei dem das Gewölbe unter Last absinkt, Tibialis-posterior-Insuffizienz, eine verkürzte Wade, die Belastung auf das Gewölbe überträgt, oder einfach mehr Gehen, als dein Fuß gewohnt ist. Das Schmerzmuster, vor allem ob es morgens oder nach Aktivität am schlimmsten ist, hilft, die Ursache einzugrenzen.',
    },
    {
      q: 'Kann ein Plattfuß Schmerzen im Fußgewölbe verursachen?',
      a: 'Ja. Wenn das Gewölbe beim Stehen und Gehen absinkt, werden Plantarfaszie und Tibialis-posterior-Sehne über ihren normalen Bereich hinaus gedehnt. Diese Dehnung macht Schmerzen im Gewölbe und manchmal entlang des Innenknöchels. Die kleinen Fußmuskeln mit Übungen wie dem kurzen Fuß und dem Einwärtsdrehen mit Band zu kräftigen, kann das Gewölbe von innen stützen.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Kann ein Hohlfuß Schmerzen im Fußgewölbe verursachen?',
      a: 'Ja, aber aus dem entgegengesetzten Grund. Ein hohes Gewölbe ist steif und fängt Stöße schlecht ab. Der Aufprall konzentriert sich an Ferse und Fußballen, und die verkürzte Plantarfaszie eines Hohlfußes kann entlang ihrer ganzen Länge schmerzen. Dehnen von Wade und Plantarfaszie plus gedämpfte Einlagen sind die wichtigsten Ansätze. Mehr dazu unter [Übungen bei Hohlfuß](/de/hohlfuss-uebungen/).',
    },
    {
      q: 'Wann sollte ich mit Schmerzen im Fußgewölbe zum Arzt?',
      a: 'Geh zu einer medizinischen Fachperson, wenn der Schmerz mit Taubheit, Kribbeln oder Brennen einhergeht, was auf einen eingeklemmten Nerv hindeuten kann. Auch wenn das Gewölbe auf einer Seite flacher wird, wenn einbeiniges Fersenheben auf einem Fuß schwach oder unmöglich ist, wenn der Schmerz an einem bestimmten Punkt sitzt und schlimmer wird oder wenn er nach mehreren Wochen Dehnen und angepasster Belastung nicht besser geworden ist.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Helfen Einlagen bei Schmerzen im Fußgewölbe?',
      cites: [CITE.guideline],
      a: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Einlagen als alleinige Maßnahme bei Plantarfasziitis mit B dagegen. Einlagen in Kombination mit Dehnen und Krafttraining können helfen, die Beschwerden in den Griff zu bekommen, während der Fuß Belastbarkeit aufbaut. Beim Hohlfuß haben gedämpfte oder maßgefertigte Einlagen bessere Belege, darunter eine randomisierte Studie, die nach drei Monaten eine Verbesserung gegenüber einer Schein-Einlage zeigte.',
    },
    {
      q: 'Sind Schmerzen im Fußgewölbe dasselbe wie Plantarfasziitis?',
      a: 'Nicht immer. Plantarfasziitis ist eine bestimmte Ursache für Schmerzen im Gewölbe, die häufigste. Aber Schmerzen im Gewölbe können auch von Plattfuß, Tibialis-posterior-Insuffizienz, Hohlfuß, Überlastung oder einer Nervenreizung kommen. Jede Plantarfasziitis geht mit Schmerzen in Gewölbe oder Ferse einher, aber nicht jeder Schmerz im Gewölbe ist eine Plantarfasziitis. Das Schmerzmuster, vor allem der Zeitpunkt, hilft bei der Unterscheidung.',
    },
    {
      q: 'Was verursacht Schmerzen am äußeren Fußgewölbe?',
      a: 'Die Übungen hier zielen auf das innere Gewölbe, Schmerzen am äußeren Gewölbe haben also meist eine andere Ursache. Sie können von einer Reizung der Peronealsehnen (die Sehnen hinter dem Außenknöchel) oder einem Kuboid-Syndrom kommen, bei dem sich ein kleiner Knochen im Mittelfuß leicht verschiebt, oft nach einem Umknicken oder einer Überlastung. Beides braucht eine andere Untersuchung und einen anderen Plan als Faszien-Dehnen, geh also zu einer medizinischen Fachperson.',
    },
    {
      q: 'Gehen Schmerzen im Fußgewölbe von selbst weg?',
      a: 'Manchmal. Ein kurzer Schub durch Überlastung lässt oft innerhalb von Tagen nach, sobald du die Belastung reduzierst, die ihn ausgelöst hat. Schmerzen durch Plantarfasziitis, Plattfuß oder Tibialis-posterior-Insuffizienz bleiben ohne Dehnen und Krafttraining eher bestehen oder kommen wieder. Wenn es nach mehreren Wochen Ruhe und weniger Belastung nicht besser geworden ist, geh zu einer medizinischen Fachperson.',
    },
    {
      q: 'Soll ich das schmerzende Fußgewölbe massieren?',
      a: 'Sanftes Rollen kann zwischen den Einheiten helfen, auch wenn keine Studie hier Massage allein getestet hat. Roll die Sohle langsam über einen Massageball oder eine gefrorene Wasserflasche, mit festem Druck, aber nie so stark, dass du zusammenzuckst. Das ist eine Maßnahme fürs Wohlgefühl. An der Ursache selbst ändert es nichts. Wenn Druck auf eine Stelle den Schmerz stechend auslöst, lass das abklären, statt fester zu drücken.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz mit Taubheit, Kribbeln oder Brennen einhergeht, was auf einen eingeklemmten Nerv hindeuten kann',
      'das Gewölbe auf einer Seite sichtbar flacher wird, was auf eine fortschreitende Tibialis-posterior-Insuffizienz hindeuten kann',
      'du auf der betroffenen Seite kein einbeiniges Fersenheben schaffst oder es deutlich schwächer ist als auf der anderen',
      'der Schmerz an einem bestimmten Punkt sitzt und bei Aktivität schlimmer wird, was ein Ermüdungsbruch sein kann',
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'Fuß oder Sprunggelenk geschwollen, gerötet oder warm sind',
      'der Schmerz nach mehreren Wochen Dehnen und angepasster Belastung nicht besser wird',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Wenn dein Schmerz im Gewölbe dem Muster der Plantarfasziitis folgt, baut Walkito einen Plan rund um jeweils ein Ziel. Das erste Ziel ist ein besserer Morgen: Schmerz bei 1/10 oder weniger an 14\u00A0Tagen am Stück. Das Gewölbe bekommt ein eigenes Ziel und eigene Übungen. Wenn dein Schmerz im Gewölbe von einem Plattfuß kommt, kann die App an Schmerz und Gewölbe als getrennten Zielen arbeiten.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn du nicht sicher bist, woher dein Schmerz im Gewölbe kommt, geh zu einer medizinischen Fachperson, bevor du es mit Übungen belastest.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Schmerzen im Fußgewölbe',
  campaign: 'guide-arch-pain-de',
};
