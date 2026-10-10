import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/calf-raise-test.ts`, written around the German
 * queries «Fersenheben Test», «Wadenheben Test Normwerte», «wie viele
 * Wadenheben auf einem Bein». Informal «du». Norm table, reliability values
 * and thresholds identical to the English page.
 */

export const CALF_RAISE_TEST_DE: Guide = {
  lang: 'de',
  page: 'calfRaiseTest' as any,
  mainSource: CITE.hebertLosier,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersenheben-Test: Normwerte nach Alter und Ablauf',
  description:
    'Der Fersenheben-Test auf einem Bein misst die Wadenausdauer: Ablauf, Normwerte nach Alter und Geschlecht, was dein Ergebnis heißt, wie du es verbesserst.',
  h1: 'Fersenheben-Test: Wie oft solltest du es schaffen, und was sagt dein Ergebnis?',
  lede:
    'Der Fersenheben-Test auf einem Bein, auch Wadenheben-Test genannt, misst die Ausdauer deiner Wadenmuskeln. Du stehst auf einem Fuß und kommst in einem festen Takt so oft wie möglich auf die Zehen. Die Zahl zeigt dir, wie viel ermüdungsresistente Kraft die Wade auf jeder Seite hat, und das zählt fürs Gehen, fürs Laufen und für die Erholung nach Verletzungen an Ferse oder Achillessehne.',
  intro: [
    'Eine Studie von 2017 mit 566\u00A0gesunden Erwachsenen fand einen Median von insgesamt etwa 23 bis 24\u00A0Wiederholungen pro Bein, der sich mit Alter, Geschlecht und Aktivität verschiebt. Diese Seite zeigt den Ablauf aus der Forschung, eine Version für zu Hause, Normwerte nach Alter, was ein Unterschied zwischen links und rechts bedeutet und wie der Test mit Fersenschmerzen und Laufen zusammenhängt.',
  ],
  takeaways: [
    'Der Median bei gesunden Erwachsenen liegt bei 24\u00A0Wiederholungen mit dem rechten und 23 mit dem linken Bein, aus einer Studie mit 566\u00A0Personen zwischen 20 und 81\u00A0Jahren (Hebert-Losier und Kollegen, 2017).',
    'Männer schafften insgesamt mehr Wiederholungen als Frauen (Median 24 gegenüber 21), aber Frauen über 60 schnitten besser ab als Männer im selben Alter (Hebert-Losier und Kollegen, 2017).',
    'Ein Unterschied zwischen links und rechts von mehr als 10\u00A0% ist in der Reha der unteren Extremität die übliche Schwelle für eine bedeutsame Asymmetrie (Silbernagel und Kollegen, 2010).',
    'Der Test ist sehr zuverlässig: ICC von 0,96, typischer Messfehler von etwa zwei Wiederholungen (Hebert-Losier und Kollegen, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was misst der Fersenheben-Test auf einem Bein?',
      keyFact: 'In einer Fall-Kontroll-Studie mit 20\u00A0Sportlerinnen und Sportlern hatten diejenigen mit medialem tibialem Stresssyndrom (Schienbeinkantensyndrom) eine geringere Wadenausdauer als gesunde Kontrollen (Madeley und Kollegen, 2007).',
      paragraphs: [
        'Der Test misst die Ausdauer der Plantarflexoren, der Muskeln, die den Fuß nach unten drücken und die Ferse vom Boden heben. Die wichtigsten sind der Gastrocnemius (der größere, oberflächlichere Wadenmuskel) und der Soleus (der tiefere darunter). Zusammen setzen sie über die Achillessehne am Fersenbein an.',
        'Ausdauer heißt hier, wie viele Wiederholungen du schaffst, bevor die Wade ermüdet und die Ferse nicht mehr hoch genug kommt oder den Takt nicht mehr halten kann. Die Zahl erfasst die Fähigkeit, Arbeit über Dutzende Zyklen durchzuhalten, und das liegt näher an dem, was die Wade beim Gehen und Laufen tut, als ein einzelner schwerer Stoß.',
        'Medizinische Fachpersonen nutzen den Test:',
        {
          list: [
            'Um die Erholung nach einem Achillessehnenriss zu verfolgen.',
            'Um bei Menschen mit Fersenschmerzen oder Schienbeinkantensyndrom nach einer schwachen Wade zu suchen.',
            'Um ein Bein mit dem anderen zu vergleichen.',
          ],
        },
        'Sportlerinnen und Sportler mit medialem tibialem Stresssyndrom (Schienbeinkantensyndrom) hatten in einer Fall-Kontroll-Studie mit 20\u00A0Sportlerinnen und Sportlern eine geringere Wadenausdauer als gesunde Kontrollen.',
      ],
      cites: [CITE.hebertLosier, CITE.madeley],
    },
    {
      h2: 'Wie läuft der Fersenheben-Test ab? Das Protokoll aus der Forschung',
      paragraphs: [
        'Das Protokoll aus Hebert-Losier 2017 ist die am häufigsten zitierte Version und die Quelle der Normwerte auf dieser Seite. In dieser Studie machten 566\u00A0gesunde Erwachsene zwischen 20 und 81\u00A0Jahren einbeiniges Fersenheben bis zur Erschöpfung, mit jedem Bein.',
        'Die Person steht barfuß oder in flachen Schuhen auf einem um 10\u00A0Grad geneigten Brett, ein Fuß nach dem anderen. Fingerspitzen an der Wand in Schulterhöhe sind nur fürs Gleichgewicht erlaubt. Ein Metronom ist auf 60\u00A0Schläge pro Minute eingestellt: ein Schlag hoch, ein Schlag runter, jede ganze Wiederholung dauert also zwei Sekunden. Die Anweisung lautet, die Ferse so hoch wie möglich zu heben, mit gestrecktem Knie und aufrechtem Oberkörper.',
        'Der Test endet, wenn:',
        {
          list: [
            'Sich die Ferse nicht mehr vom Brett hebt.',
            'Der Takt des Metronoms nicht mehr gehalten werden kann.',
            'Das Knie sich beugt oder der Oberkörper sich neigt.',
            'Die Person sich gegen die Wand drückt, statt sie nur mit den Fingerspitzen zu berühren.',
          ],
        },
        'Vor dem Abbruch gibt es eine mündliche Erinnerung. Zum Aufwärmen gibt es 10\u00A0Minuten zügiges Gehen und danach 10-mal Fersenheben beidbeinig. Zwischen den Beinen liegen zwei Minuten Pause.',
      ],
      sourceNote:
        'Hebert-Losier 2017: ICC 0,96 (rechts) und 0,96 (links); mittlere Differenz zwischen den Testtagen 0,2\u00A0Wiederholungen (95-%-Übereinstimmungsgrenzen -6,2 bis 6,5) rechts und 0,1\u00A0Wiederholungen (95-%-Übereinstimmungsgrenzen -6,1 bis 6,2) links.',
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Wie machst du den Fersenheben-Test zu Hause?',
      paragraphs: [
        'Du brauchst kein Schrägbrett. Auf flachem Boden ist der Test etwas leichter, deine Zahl liegt also vielleicht ein paar Wiederholungen über den veröffentlichten Normwerten. Um Veränderungen über die Zeit zu verfolgen und links mit rechts zu vergleichen, ist das in Ordnung.',
        'Stell dich nah an eine Wand, die Fingerspitzen berühren sie in Schulterhöhe. Heb einen Fuß an. Stell eine Metronom-App auf 60\u00A0Schläge pro Minute.',
        'Beim ersten Schlag kommst du so hoch wie möglich auf die Zehen. Beim zweiten Schlag senkst du die Ferse wieder auf den Boden. Mach weiter, bis du den Takt nicht mehr halten kannst, die Ferse kaum noch hochkommt oder dein Knie sich beugt.',
        'Zähl alle Wiederholungen. Mach zwei Minuten Pause und wiederhole es dann mit dem anderen Bein. Schreib beide Zahlen und das Datum auf. Der typische Messfehler liegt bei etwa zwei Wiederholungen, eine kleine Verschiebung zwischen zwei Testtagen ist also Rauschen. **Was zählt, ist der Trend über Wochen.**',
      ],
      exercises: [
        {
          name: 'Fersenheben-Test auf einem Bein (Version für zu Hause)',
          dose: 'Maximale Wiederholungen bei 60\u00A0Schlägen pro Minute, ein Satz pro Bein',
          how: 'Stell dich auf einen Fuß nah an eine Wand, die Fingerspitzen berühren sie fürs Gleichgewicht. Komm in einer Sekunde auf die Zehen, senk dich in einer Sekunde ab, im Takt eines Metronoms mit 60\u00A0Schlägen pro Minute. Mach weiter, bis du den Takt nicht mehr halten kannst oder die Ferse kaum noch hochkommt. Zähl die Wiederholungen. 2\u00A0Minuten Pause, dann das andere Bein.',
          feel: 'Ein zunehmendes Brennen in der Wade, je mehr Wiederholungen du machst',
          stop: 'Du die Ferse nicht mehr heben kannst, den Takt des Metronoms nicht mehr hältst oder dein Knie sich beugt',
          media: 'heel_raise_double',
          mediaIsStandIn: true,
          caption: 'Fersenheben-Test: Komm bei jedem Schlag so hoch wie möglich, Fingerspitzen fürs Gleichgewicht',
          alt: 'Eine Figur kommt auf die Zehen eines Fußes, die Fingerspitzen an einer Wand fürs Gleichgewicht',
        },
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Wie oft solltest du einbeiniges Fersenheben schaffen?',
      tool: 'calf-raise-calculator',
      keyFact: 'Eine Studie von 1995 mit 203\u00A0Erwachsenen zwischen 20 und 59\u00A0Jahren schlug 25\u00A0Wiederholungen als Richtwert für ein normales Ergebnis beim einbeinigen Fersenheben vor (Lunsford und Perry, 1995).',
      paragraphs: [
        'Die Tabelle unten zeigt den Median der Wiederholungen beim einbeinigen Fersenheben nach Alter und Geschlecht, aus Hebert-Losier 2017. Es sind Schätzwerte aus einem Modell für eine Person mit mittlerer körperlicher Aktivität (Stufe 4 auf einer 6-stufigen Skala) und einem Body-Mass-Index von 24,2, gemittelt über beide Beine.',
        'Höhere Aktivität bringt etwa fünf bis neun Wiederholungen mehr im Median. 1995 testeten Lunsford und Perry 203\u00A0Erwachsene zwischen 20 und 59\u00A0Jahren und empfahlen 25\u00A0Wiederholungen als Kriterium für ein normales Ergebnis. Die Daten von Hebert-Losier stützen diese Zahl als vernünftigen Richtwert für Erwachsene, auch wenn sie ein Median für die Bevölkerung ist, keine Grenze zum Bestehen oder Durchfallen. **Dein eigener Ausgangswert und die Richtung der Veränderung zählen mehr als jede einzelne Zahl.**',
      ],
      table: {
        caption: 'Median der Wiederholungen beim einbeinigen Fersenheben nach Alter und Geschlecht (Hebert-Losier 2017)',
        head: ['Alter', 'Männer', 'Frauen'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
          ['70', '15', '16'],
          ['80', '10', '14'],
        ],
      },
      sourceNote:
        'Schätzwerte aus dem Modell für BMI 24,2 und Aktivitätsstufe 4. Die Werte sind der Mittelwert aus linker und rechter Seite, auf ganze Zahlen gerundet. Aus Tabelle 4 von Hebert-Losier 2017 (n = 566).',
      cites: [CITE.lunsfordPerry, CITE.hebertLosier],
    },
    {
      h2: 'Sollten linkes und rechtes Bein gleich abschneiden?',
      keyFact: 'In einer Studie mit 78\u00A0Personen nach einem Achillessehnenriss lag die mittlere Symmetrie der Beine nach sechs Monaten bei 84\u00A0% nach Wiederholungen, aber nur bei 61\u00A0% nach geleisteter Gesamtarbeit, was zeigt, dass die Zahl der Wiederholungen allein ein Defizit unterschätzen kann (Silbernagel und Kollegen, 2010).',
      paragraphs: [
        'Ungefähr gleich, ja. In der Studie von Hebert-Losier lag der mittlere Unterschied zwischen rechts und links bei einer Wiederholung, und der typische Messfehler bei etwa zwei. Ein so kleiner Unterschied ist Rauschen.',
        'In der Reha der unteren Extremität ist ein Limb Symmetry Index (LSI) von 90\u00A0% oder mehr der übliche Richtwert für normale Funktion. Der LSI ist die schwächere Seite geteilt durch die stärkere Seite, mal 100. Unter 90\u00A0% heißt, dass eine Seite mehr als 10\u00A0% schwächer ist.',
        'Silbernagel und Kollegen nutzten diese Schwelle bei 78\u00A0Patientinnen und Patienten nach einem Achillessehnenriss: Nach 6\u00A0Monaten lag der LSI im Schnitt bei 84\u00A0% nach Wiederholungen und nur bei 61\u00A0% nach Gesamtarbeit, was zeigt, dass Wiederholungen zu zählen allein ein Defizit unterschätzen kann.',
        'Ohne Verletzung **lohnt es sich, einen Unterschied von mehr als 10\u00A0% festzuhalten und zu verfolgen.** Das heißt nicht, dass etwas nicht stimmt. Aber wenn der Unterschied über mehrere Tests bestehen bleibt und du auf der schwächeren Seite auch Schmerzen hast, ist das für eine medizinische Fachperson ein nützlicher Hinweis.',
      ],
      cites: [CITE.hebertLosier, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Was bedeutet ein niedriges Ergebnis, und was bedeutet es nicht?',
      paragraphs: [
        'Eine niedrige Zahl beim Fersenheben sagt dir, dass die Wade auf dieser Seite früher ermüdet als der Median der Bevölkerung für dein Alter, dein Geschlecht und deine Aktivität. Sie sagt dir nicht, warum. All das kann zu einer niedrigen Zahl führen:',
        {
          list: [
            'Mangelndes Training.',
            'Eine frische Verletzung.',
            'Ein Problem mit der Achillessehne.',
            'Schonung wegen Schmerzen.',
            'Fehlende Übung mit dem Test.',
          ],
        },
        '**Der Test ist keine Diagnose.** Ein Ergebnis von 15 bei einem 30-jährigen Mann heißt nicht, dass er eine Plantarfasziitis oder Achillessehnenentzündung hat. Es heißt, dass seine Wadenausdauer unter dem Median von 33 für diese Gruppe liegt.',
        'Eine medizinische Fachperson kombiniert die Zahl mit anderen Befunden, um zu entscheiden, ob sie ein Symptom erklärt. Als Trend sagt der Test mehr als ein einzelner Messwert: Von 14 auf 22 in zwei Monaten ist ein klareres Signal als jede einzelne Zahl im Vergleich mit einer Tabelle.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Wie hängt die Wadenausdauer mit Fersenschmerzen, Problemen an der Achillessehne und Laufen zusammen?',
      paragraphs: [
        'Wade und Plantarfaszie sind über das Fersenbein verbunden. Die Achillessehne zieht von hinten, die Faszie von unten. **Schwache oder schnell ermüdende Waden bringen bei jedem Schritt mehr Spannung auf beide.**',
        'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Wade und Plantarfaszie ihre beste Bewertung, A, und Krafttraining die Bewertung B. Die Rathleff-Studie, die Fersenheben mit Zusatzgewicht bei Plantarfasziitis getestet hat, nutzte Wadenheben als Hauptübung, und die Teilnehmenden verbesserten ihre Schmerzwerte über drei Monate schneller als mit Dehnen allein. Das ganze Protokoll findest du unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/).',
        'Bei Achillessehnenentzündung ist der Fersenheben-Test eines der üblichen Messinstrumente. Menschen mit Achillessehnen-Tendinopathie im mittleren Abschnitt (Schmerz in der Mitte der Sehne, nicht am Fersenbein) zeigen typischerweise eine geringere Wadenausdauer auf der betroffenen Seite. Zur exzentrischen Arbeit lies [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
        'Beim Laufen fängt die Wade bei jedem Schritt das Zwei- bis Dreifache des Körpergewichts ab. Eine Wade, die früh ermüdet, verlagert Last auf Knie, Schienbein und Fuß. Das Ergebnis zu steigern, kann Teil eines Plans für den Wiedereinstieg ins Laufen sein. Das größere Bild zeigt [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch).',
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.achillesGuideline, CITE.madeley],
    },
    {
      h2: 'Wie verbesserst du ein niedriges Ergebnis beim Fersenheben-Test?',
      paragraphs: [
        'Die Übungen, die in der Reha die Wadenausdauer aufbauen, sind dieselben, die dein Testergebnis steigern. Fang auf der Stufe an, die zu deinem jetzigen Stand passt, und **geh eine Stufe höher, sobald sich zwei Einheiten hintereinander leicht angefühlt haben.**',
        'Wenn du weniger als 10-mal einbeiniges Fersenheben schaffst, fang mit Fersenheben im Sitzen oder beidbeinig im Stehen an. Geh dann zum Fersenheben mit Halten, um isometrische Ausdauer aufzubauen, und danach zum einbeinigen Fersenheben auf dem Boden. Eine Stufe vergrößert den Bewegungsumfang. Ein Rucksack erhöht die Last.',
        'Die Grundbewegung findest du unter [Fersenheben](/de/uebungen/fersenheben/), die Variante, die auch die Plantarfaszie belastet, unter [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/) und die Variante mit Fokus auf die Achillessehne unter [exzentrisches Fersenabsenken](/de/uebungen/exzentrisches-fersenabsenken/).',
      ],
      exercises: [
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Bewertung B der Leitlinie für Krafttraining. Eine Zwischenstufe auf dem Weg zum einbeinigen Training mit Zusatzgewicht.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last.',
          feel: 'Die Waden arbeiten zusammen',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben mit Halten',
          evidence: { level: 'moderate', why: 'Bewertung B der Leitlinie. Isometrisches Halten baut Zeit unter Spannung in der Endposition auf.' },
          dose: '3-mal 20\u00A0Sekunden halten, beide Füße',
          how: 'Komm auf beiden Füßen auf die Zehen und bleib oben ruhig. Sink nicht wieder ab. Das Halten belastet die Wade ohne das Federn einer ganzen Wiederholung.',
          feel: 'Die Waden arbeiten, um ruhig zu bleiben',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'heel_raise_hold',
          caption: 'Fersenheben mit Halten: hochkommen, dann oben bleiben',
          alt: 'Eine Figur hält sich auf den Zehen beider Füße, die Waden sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },

  ],
  faq: [
    {
      q: 'Wie oft sollte ich einbeiniges Fersenheben schaffen?',
      cites: [CITE.hebertLosier],
      a: 'Der Median insgesamt lag in einer Studie mit 566\u00A0gesunden Erwachsenen bei etwa 23 bis 24\u00A0Wiederholungen pro Bein. Männer kamen im Median auf 24, Frauen auf 21. Die Zahl sinkt pro Lebensjahrzehnt um etwa vier bis fünf Wiederholungen. Höhere Aktivität bringt fünf bis neun Wiederholungen mehr. Nutze diese Werte als Bezugspunkte, um Fortschritte zu verfolgen, nicht als Grenze zum Bestehen oder Durchfallen (Hebert-Losier 2017).',
    },
    {
      q: 'Ist der Wadenheben-Test dasselbe wie der Fersenheben-Test?',
      a: 'Ja. „Heel-Rise-Test“ ist der Name in der Fachliteratur, auf Deutsch sagt man Fersenheben-Test oder Wadenheben-Test. Die Bewegung ist dieselbe: einbeiniges Heben auf die Zehen bis zur Erschöpfung in einem festen Takt.',
    },
    {
      q: 'Was ist ein gutes Ergebnis beim einbeinigen Fersenheben-Test nach Alter?',
      cites: [CITE.hebertLosier],
      a: 'Für eine mäßig aktive Person: etwa 37 bei einem 20-jährigen Mann (30 bei einer Frau), 28 bei einem 40-jährigen Mann (25 bei einer Frau) und 19 bei 60-Jährigen beider Geschlechter. Die Aktivität verschiebt diese Mediane um fünf bis neun Wiederholungen (Hebert-Losier 2017).',
    },
    {
      q: 'Wie oft sollte ich den Test wiederholen?',
      a: 'Alle zwei bis vier Wochen reicht, um eine echte Veränderung zu sehen, ohne zu oft zu testen. Die Forschung testete im Abstand von einer Woche erneut und fand eine sehr hohe Zuverlässigkeit. Walkito testet alle 14\u00A0Tage erneut, solange das Wadenziel aktiv ist, danach alle 28\u00A0Tage, sobald es erreicht ist.',
    },
    {
      q: 'Was bedeutet es, wenn ein Bein viel schwächer ist als das andere?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Ein Unterschied von mehr als 10\u00A0% gilt in der Reha häufig als mögliches Defizit. Bei gesunden Erwachsenen liegt der typische Unterschied bei ein bis zwei Wiederholungen. Ein anhaltender Unterschied mit Schmerzen auf der schwächeren Seite ist ein Grund, zu einer medizinischen Fachperson zu gehen. Ohne Schmerzen: verfolgen und trainieren (Silbernagel 2010).',
    },
    {
      q: 'Brauche ich für den Test ein Metronom?',
      a: 'Das Protokoll aus der Forschung nutzt ein Metronom mit 60\u00A0Schlägen pro Minute. Kostenlose Metronom-Apps funktionieren gut. Ohne Metronom zählst du „einundzwanzig“ beim Hochkommen und beim Absenken. Deine Zahl ist dann weniger gut mit den veröffentlichten Normwerten vergleichbar, aber es zählt mehr, den Test immer gleich zu machen, als den Aufbau der Forschung genau nachzustellen.',
    },
    {
      q: 'Kann ein Fersenheben-Test eine Plantarfasziitis oder Achillessehnenentzündung diagnostizieren?',
      a: 'Nein. Ein niedriges Ergebnis sagt dir, dass die Wade früh ermüdet, nicht warum. Plantarfasziitis, Achillessehnenentzündung, mangelndes Training und eine frische Verletzung können alle zu einer niedrigen Zahl führen. Medizinische Fachpersonen kombinieren das Ergebnis mit einer körperlichen Untersuchung und der Vorgeschichte. Der Test misst die Wadenausdauer, keine bestimmte Erkrankung.',
    },
    {
      q: 'Woran erkennt man schwache Waden?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Schwache Waden zeigen sich oft durch schnelle Ermüdung auf Treppen oder am Berg, einen schwächeren Abdruck beim Gehen oder Laufen oder Wackeln im Einbeinstand. Das klarste objektive Zeichen ist der einbeinige Fersenheben-Test: Einem deutlichen Unterschied zwischen linkem und rechtem Bein kannst du eher trauen als dem, wie die Wade aussieht oder sich anfühlt.',
    },
    {
      q: 'Wo sollte man Wadenheben spüren?',
      a: 'Du solltest die Arbeit in der Wade spüren, sowohl im kräftigeren Gastrocnemius weiter oben als auch im Soleus weiter unten nahe der Achillessehne, nicht am Fersenbein, im Gewölbe oder im Knie. Wenn du statt Ermüdung in der Wade einen stechenden Schmerz an der Ferse oder Achillessehne spürst, musst du Technik oder Last anpassen, bevor du weiter Wiederholungen zählst.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'die Wade oder Achillessehne geschwollen, warm oder druckempfindlich ist, was auf einen frischen Riss oder ein Problem mit der Sehne hindeuten kann',
      'du bei einer Aktivität ein plötzliches Knallen oder Reißen in der Wade gespürt hast',
      'du den Fuß nicht belasten kannst oder hinkst',
      'der Schmerz stechend und auf eine Stelle begrenzt ist statt eines allgemeinen Schmerzes',
      'Taubheit, Kribbeln oder Brennen im Fuß oder Unterschenkel auftreten',
      'der Test genau den Schmerz auslöst, den du abklären willst, und zwar stärker als leicht',
      'du einen bekannten Achillessehnenriss hast oder vor Kurzem operiert wurdest',
      'eine Wade sichtbar dünner ist als die andere und du deswegen noch bei keiner medizinischen Fachperson warst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito macht den einbeinigen Fersenheben-Test alle 14\u00A0Tage und verfolgt beide Beine. Das Wadenziel ist 25-mal einbeiniges Fersenheben. Das Symmetrieziel ist ein Unterschied zwischen links und rechts unter 10\u00A0%. Die App berechnet den Unterschied als Differenz zwischen stärkerer und schwächerer Seite, geteilt durch die stärkere Seite. Sobald beide Ziele erreicht sind, wird der Test auf alle 28\u00A0Tage ausgeweitet, und der Plan wechselt zum nächsten aktiven Ziel.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Die Wadenarbeit beginnt mit Fersenheben im Sitzen und steigt in deinem Tempo über beidbeiniges Fersenheben, Halten und Fersenheben mit Handtuch bis zum exzentrischen Fersenabsenken und zu Pogo-Sprüngen auf. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  crumb: 'Fersenheben-Test',
  campaign: 'calf-raise-test-de',
};
