import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/hiking-foot-pain.ts (2026-10-18), written around
 * «Fußschmerzen nach dem Wandern» and «Fußschmerzen Wandern». Informal «du»,
 * terminology and exercise names as in `lib/guides/de.ts` and the other
 * articles-de pages. Figures, doses, grades, hedges and sources are identical
 * to the English page after its fact-check. Same CITE keys and media ids.
 * Pounds and miles kept as in the source, with approximate kg and km added.
 * Link to /foot-pain-identifier/ removed (no German version). External link
 * (Appalachian Trail Conservancy) marked «(auf Englisch)».
 */

export const HIKERS_DE: Guide = {
  lang: 'de',
  page: 'hikers',
  mainSource: CITE.chruschHikers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fußschmerzen nach dem Wandern: Ursachen und Übungen',
  description:
    'Fußschmerzen nach dem Wandern: was Umfragen unter Wanderern zeigen, Ferse, Achillessehne, Vorfuß, Rucksack, Schuhe und eine kurze Routine mit Dosierung.',
  h1: 'Fußschmerzen nach dem Wandern: warum die Füße wehtun und was du tun kannst',
  lede:
    'Schmerzende Füße nach einer langen Wanderung sind häufig, und meist steckt Überlastung dahinter: mehr Strecke, mehr Abstieg oder ein schwererer Rucksack, als deine Füße gewohnt sind. In einer Umfrage unter 1295 Fernwanderern auf dem Appalachian Trail gaben 29\u00A0% Verletzungen oder Schmerzen am Fuß an und 12\u00A0% Schmerzen an der Achillessehne (Chrusch und Kavin, 2021). Schmerzt die Ferse bei den ersten Schritten am nächsten Morgen, spricht das für eine [Plantarfasziitis](/de/plantarfasziitis/). Schmerz an einer Stelle eines Knochens, der mit jeder Wanderung zunimmt, kann ein Ermüdungsbruch sein: Lass ihn ärztlich abklären.',
  intro: [
    'In diesem Ratgeber geht es um Wandern und lange Gehstrecken im Gelände: was typischerweise wehtut, was die Umfragen unter Wanderern zu Rucksack, Schuhen und Training gefunden haben, und eine kurze Routine für vor und nach der Tour. Wenn deine Ferse nach alltäglichen Spaziergängen wehtut, fang mit [Fersenschmerzen nach dem Gehen](/de/fersenschmerzen-nach-dem-gehen/) an. Wie viel du mit schmerzender Ferse gehen kannst, steht unter [Gehen bei Plantarfasziitis](/de/gehen-bei-plantarfasziitis/).',
  ],
  toc: true,
  takeaways: [
    'Von 1295 Fernwanderern auf dem Appalachian Trail gaben 61\u00A0% Beschwerden an Muskeln, Gelenken oder Knochen an, 37\u00A0% Knieschmerzen, 29\u00A0% Fußschmerzen und 12\u00A0% Schmerzen an der Achillessehne. 11\u00A0% brachen ihre Wanderung deswegen ab (Chrusch und Kavin, 2021).',
    'Wanderer, die vor dem Trail gar nicht trainiert hatten, gaben häufiger Fußschmerzen an, 38\u00A0% gegenüber 28\u00A0%, und häufiger irgendeine Verletzung an Muskeln, Gelenken oder Knochen, 80\u00A0% gegenüber 58\u00A0%. Das ist ein Zusammenhang aus einer Umfrage, kein Beweis, dass Training Verletzungen verhindert (Chrusch und Kavin, 2021).',
    'Blasen an den Füßen waren bei 280\u00A0Wanderern auf dem Appalachian Trail die häufigste Beschwerde, 64\u00A0% gaben sie an (Boulware und Kollegen, 2003).',
    'Taubheit oder Kribbeln nahm bei 128\u00A0Fernwanderern mit dem Rucksackgewicht zu, von 35\u00A0% bei Rucksäcken mit 10 bis 20\u00A0Pfund (etwa 4,5 bis 9\u00A0kg) auf 69\u00A0% über 31\u00A0Pfund (etwa 14\u00A0kg). Schuhtyp und Rucksackgewicht hingen nicht mit anderen Muskel- und Gelenkverletzungen zusammen (Anderson und Kollegen, 2009).',
    'Wanderstöcke verringerten die Belastung von Sprunggelenk, Knie und Hüfte, als 15\u00A0erfahrene Wanderer bergab gingen, mit und ohne Rucksack (Bohne und Abendroth-Smith, 2007).',
  ],
  sections: [
    {
      h2: 'Warum tun die Füße nach einer Wanderung weh?',
      keyFact: 'In einer Umfrage unter 1295 Fernwanderern auf dem Appalachian Trail gaben 29\u00A0% Verletzungen oder Schmerzen am Fuß an und 37\u00A0% Knieschmerzen (Chrusch und Kavin, 2021).',
      paragraphs: [
        '**Vor allem, weil Wandern die Füße stärker und länger belastet als normales Gehen.** Du gehst stundenlang, auf unebenem Boden, bergauf und bergab, oft mit Rucksack. All das bedeutet mehr Arbeit für Ferse, Fußgewölbe, Wade und Achillessehne.',
        'Die besten Zahlen stammen von Fernwanderern. In einer Umfrage aus den Jahren 2018 bis 2019 unter 1295 Wanderern auf dem Appalachian Trail gaben 61\u00A0% Beschwerden an Muskeln, Gelenken oder Knochen an. Am häufigsten waren Knieschmerzen mit 37\u00A0%, dann Fußschmerzen mit 29\u00A0%, Verstauchungen des Sprunggelenks mit 13\u00A0%, Schmerzen an der Achillessehne mit 12\u00A0% und Schienbeinschmerzen mit 11\u00A0%. Wegen dieser Beschwerden brachen 11\u00A0% ihre Wanderung ab (Chrusch und Kavin, 2021).',
        'Überlastungsbeschwerden, die sich über Tage wiederholter Belastung aufbauen, waren häufiger als plötzliche Verletzungen: 28\u00A0% gegenüber 18\u00A0% in derselben Umfrage. Das betrifft auch Tageswanderer. Eine lange erste Tour der Saison oder ein Wochenende mit zwei langen Touren hintereinander folgt demselben Muster, nur in kleinerem Maßstab.',
        'Das sind Umfragen mit Selbstangaben von Menschen, die Hunderte Meilen gegangen sind. Keine Studie hat Fußschmerzen bei gewöhnlichen Tageswanderern gezählt, die genauen Zahlen gelten also nicht für jemanden, der am Wochenende wandert. Nützlich ist vor allem das Muster: was typischerweise wehtut.',
      ],
      sourceNote: 'Chrusch und Kavin 2021: elektronische Querschnittsumfrage, angehängt an die Saisonabschlussumfrage der Appalachian Trail Conservancy, Rücklaufquote 52\u00A0%. Überlastung/chronisch 28\u00A0% (n=363), akut 18\u00A0% (n=238).',
      cites: [CITE.chruschHikers],
    },
    {
      h2: 'Wo tut es weh, und was steckt wahrscheinlich dahinter?',
      paragraphs: [
        'Wo der Schmerz sitzt, ist der schnellste Hinweis. Die Tabelle ist ein Ausgangspunkt, keine Diagnose.',
      ],
      table: {
        caption: 'Fußschmerzen nach dem Wandern: wo es wehtut und der übliche erste Schritt',
        head: ['Wo und wann', 'Häufig', 'Erster Schritt'],
        rows: [
          ['Unter der Ferse, am schlimmsten bei den ersten Schritten am nächsten Morgen', 'Plantarfasziitis', 'Waden- und Gewölbedehnung, Fersenheben'],
          ['Hinten an der Ferse oder an der Sehne darüber', 'Achillessehnen-Tendinopathie', 'Kürzere Touren, langsames Fersenheben'],
          ['Fußballen, hinter den Zehen', 'Metatarsalgie', 'Passform prüfen, Wadendehnung'],
          ['Eine Stelle an einem Knochen, mit jeder Tour schlimmer', 'Möglicher Ermüdungsbruch', 'Nicht weiterwandern, ärztlich abklären lassen'],
          ['Brennende oder kribbelnde Zehen', 'Eingeengter Nerv', 'Schnürung lockern, leichterer Rucksack'],
          ['Zehennägel dunkel oder schmerzhaft nach Abstiegen', 'Zehen stoßen vorn im Schuh an', 'Längerer Schuh, Nägel kürzen'],
        ],
      },
      after: [
        '**Unter der Ferse.** Eine Plantarfasziitis tut typischerweise bei den ersten Schritten nach einer Pause am meisten weh. Die Leitlinie von 2023 zu Fersenschmerzen nennt Schmerz, der nach einer kürzlichen Steigerung der Belastung im Stehen und Gehen begonnen hat, als typisches Merkmal (Koc und Kollegen, 2023), und genau das ist eine größere Wanderung. Eine verkürzte Wade ist der stärkste bekannte Risikofaktor: In einer Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne hatten die Menschen mit der geringsten Beugung im Sprunggelenk eine 23,3-fach höhere Chance auf eine Plantarfasziitis (Riddle und Kollegen, 2003).',
        '**Hinten an der Ferse.** Schmerzen an der Achillessehne können bei langen Anstiegen aufflammen, wo Wade und Sehne dich bei jedem Schritt nach oben drücken. Siehe [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
        '**Fußballen.** Lange Abstiege und eine verkürzte Wade können beide die Last auf den Vorfuß verlagern. Siehe [Metatarsalgie](/de/metatarsalgie-vorfussschmerzen/).',
        '**Blasen und Zehennägel.** Blasen gaben 64\u00A0% von 280\u00A0Wanderern auf dem Appalachian Trail an, mehr als jede andere Beschwerde (Boulware und Kollegen, 2003). Dunkle oder schmerzende Zehennägel nach einem Tag mit vielen Abstiegen bedeuten meist, dass die Zehen vorn im Schuh anstoßen. Beides sind Probleme mit Haut und Passform, an denen Übungen nichts ändern.',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.boulwareHikers],
    },
    {
      h2: 'Warum tun die Füße beim Bergabgehen mehr weh?',
      keyFact: 'Bei 15\u00A0erfahrenen Wanderern, die ohne Rucksack, mit Tagesrucksack und mit schwerem Rucksack bergab gingen, verringerten Wanderstöcke die Belastung von Sprunggelenk, Knie und Hüfte (Bohne und Abendroth-Smith, 2007).',
      paragraphs: [
        '**Beim Abstieg arbeiten deine Beine als Bremse.** Bei jedem Schritt nach unten steuern Wade, vordere Schienbeinmuskulatur und Oberschenkel das Absinken, während sie sich verlängern. Außerdem rutscht der Fuß im Schuh nach vorn, sodass Zehen und Fußballen mehr Druck abbekommen. Deshalb fühlen sich viele beim Aufstieg gut und haben nach dem Abstieg Schmerzen.',
        'In einer Laborstudie gingen 15\u00A0erfahrene männliche Wanderer bergab, ohne Rucksack, mit einem Tagesrucksack von 15\u00A0% ihres Körpergewichts und mit einem Expeditionsrucksack von 30\u00A0%. Mit Stöcken sanken die Drehmomente an Sprunggelenk, Knie und Hüfte und die höchste Bremsarbeit an Sprunggelenk und Knie, bei jedem Rucksack (Bohne und Abendroth-Smith, 2007). In der Umfrage auf dem Appalachian Trail nutzten 70\u00A0% Stöcke oder einen Stab, und Stöcke gingen mit weniger Beschwerden einher (Chrusch und Kavin, 2021). Dieser Zusammenhang aus einer Umfrage beweist nicht, dass Stöcke Verletzungen verhindern.',
        'Praktische Punkte, von denen keiner zur Vorbeugung von Fußschmerzen getestet wurde: Mach bei steilen Abstiegen kürzere Schritte, schnür den Schuh über dem Spann fest, damit der Fuß nicht nach vorn rutscht, und halte die Zehennägel kurz.',
      ],
      sourceNote: 'Bohne 2007: 10\u00A0Versuche pro Bedingung, Gelenkmomente in der Sagittalebene mit Stöcken an allen drei Gelenken verringert; höchste Leistungsabsorption an Sprunggelenk und Knie verringert. Gemessen wurden Kräfte, nicht Schmerz oder Verletzungen.',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
    },
    {
      h2: 'Macht ein schwererer Rucksack Fußschmerzen schlimmer?',
      keyFact: 'Bei 128\u00A0Fernwanderern gaben 35\u00A0% mit Rucksäcken von 10 bis 20\u00A0Pfund (etwa 4,5 bis 9\u00A0kg) und 69\u00A0% mit Rucksäcken über 31\u00A0Pfund (etwa 14\u00A0kg) Taubheit oder Kribbeln an (Anderson und Kollegen, 2009).',
      paragraphs: [
        '**Ein schwererer Rucksack bedeutet mehr Last bei jedem Schritt, aber die Studien mit Wanderern zeigen nur bei Taubheit und Kribbeln einen klaren Zusammenhang.** In einer Umfrage von 2006 unter 128\u00A0Wanderern, die mehr als 500\u00A0Meilen (etwa 800\u00A0km) auf dem Appalachian Trail oder dem Pacific Crest Trail gegangen waren, nahmen Taubheit oder Kribbeln mit dem Rucksackgewicht zu: 35\u00A0% bei Rucksäcken mit 10 bis 20\u00A0Pfund, 50\u00A0% bei 21 bis 30\u00A0Pfund und 69\u00A0% über 31\u00A0Pfund (Anderson und Kollegen, 2009).',
        'Dieselbe Umfrage fand, dass Rucksackgewicht und Schuhtyp nicht mit anderen Muskel- und Gelenkverletzungen zusammenhingen, etwa Verstauchungen, lang anhaltenden Schmerzen oder Muskelverletzungen. Niemand hat also gezeigt, dass ein leichterer Rucksack weniger Schmerzen an Ferse oder Gewölbe bedeutet. Trotzdem ist er ein vernünftiger erster Ansatz, wenn deine Füße nur an den Tagen wehtun, an denen du einen vollen Rucksack trägst.',
        'Wenn deine Zehen brennen oder kribbeln, lockere die Schnürung über dem Fußrücken und prüfe Hüftgurt und Schulterträger. Lass es ärztlich abklären, wenn es nicht weggeht, nachdem du den Rucksack abgesetzt hast.',
      ],
      cites: [CITE.andersonPack],
    },
    {
      h2: 'Wanderschuhe oder Trailrunning-Schuhe: Was ist bei Fußschmerzen besser?',
      paragraphs: [
        '**Keine Studie hat Wanderstiefel und Trailrunning-Schuhe bei Fußschmerzen verglichen, also kann niemand sagen, was besser ist.** Es gibt nur Umfragen:',
        {
          list: [
            'In der Umfrage von 2006 unter 128\u00A0Fernwanderern gaben 29\u00A0% in Sandalen Taubheit oder Kribbeln an, 36\u00A0% in Laufschuhen, 42\u00A0% in Wanderhalbschuhen und 68\u00A0% in Wanderstiefeln. Nach Berücksichtigung des Rucksackgewichts spielte der Schuhtyp keine Rolle mehr. Das spricht dafür, dass die Wanderer in Stiefeln auch schwerere Rucksäcke trugen (Anderson und Kollegen, 2009).',
            'In der Umfrage auf dem Appalachian Trail aus den Jahren 2018 bis 2019 trugen 58\u00A0% Lauf- oder Trailrunning-Schuhe und 24\u00A0% Wanderstiefel. Beide gingen mit weniger Beschwerden einher als anderes Schuhwerk wie Sandalen (Chrusch und Kavin, 2021).',
          ],
        },
        'Nimm also den Schuh, der gut sitzt, in dem du schon gelaufen bist und der zum Gelände passt. Bei Fersenschmerzen im Allgemeinen bewertet die Leitlinie von 2023 Einlagen allein zur kurzfristigen Linderung mit **Empfehlungsgrad B gegen die Anwendung** und lässt sie zusätzlich zu anderer Behandlung mit **Empfehlungsgrad C** zu (Koc und Kollegen, 2023). Mehr unter [Einlagen oder Übungen](/de/einlagen-oder-uebungen/). Wenn du auf leichtere oder flachere Schuhe umsteigen willst, tu das schrittweise über mehrere Wochen, nicht bei der ersten langen Tour. Warum, erklärt [Barfußschuhe](/de/barfussschuhe/).',
      ],
      cites: [CITE.andersonPack, CITE.chruschHikers, CITE.guideline],
    },
    {
      h2: 'Wie schnell kannst du deine Wanderstrecken steigern?',
      keyFact: 'Wanderer, die vor dem Appalachian Trail gar nicht trainiert hatten, gaben häufiger irgendeine Verletzung an Muskeln, Gelenken oder Knochen an, 80\u00A0% gegenüber 58\u00A0% (Chrusch und Kavin, 2021).',
      paragraphs: [
        '**Keine Studie nennt eine sichere wöchentliche Steigerung für Wanderer.** Am nächsten kommt die Umfrage auf dem Appalachian Trail: Die 13\u00A0% der Wanderer, die vor dem Trail gar nicht trainiert hatten, gaben insgesamt mehr Verletzungen an (80\u00A0% gegenüber 58\u00A0%), mehr Fußschmerzen (38\u00A0% gegenüber 28\u00A0%), mehr Schmerzen an der Achillessehne (18\u00A0% gegenüber 11\u00A0%) und mehr Ermüdungsbrüche am Unterschenkel (5\u00A0% gegenüber 2\u00A0%). Krafttraining, Dehnen oder Yoga und Ausdauertraining gingen jeweils mit weniger Verletzungen einher (Chrusch und Kavin, 2021). Es ist eine Umfrage, fittere oder vorsichtigere Menschen haben also vielleicht einfach mehr trainiert.',
        'Eine praktische Art der Steigerung, aber keine getestete:',
        {
          list: [
            'Ändere immer nur eine Sache: mehr Strecke, mehr Auf- und Abstieg oder einen schwereren Rucksack, nicht alle drei am selben Tag.',
            'Nimm den nächsten Morgen als Kontrolle. Schmerz, der bis zum nächsten Morgen abklingt und nicht von Woche zu Woche zunimmt, ist ein vernünftiges Zeichen, dass die Belastung passt. Diese Regel stammt aus einer Studie zur Achillessehne, nicht von Wanderern (Silbernagel und Kollegen, 2007).',
            'Plan nach einem anstrengenden Tag einen leichten ein. Die [Appalachian Trail Conservancy](https://appalachiantrail.org/experience/hike-the-trail/essential-skills/health-hygiene/common-injuries/) (auf Englisch) gibt Fernwanderern einen ähnlichen Rat: für den Tag aufhören, wenn die Füße anfangen wehzutun, anschwellen oder sich eng anfühlen, nachdem du weiter gegangen bist als sonst.',
          ],
        },
        'Zwischen den Touren lohnt es sich, Wadenkraft aufzubauen, weil die Wade bei Auf- und Abstiegen einen großen Teil der Arbeit macht. Das Fersenheben unten ist dasselbe wie in der Anleitung zu [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/).',
      ],
      cites: [CITE.chruschHikers, CITE.silbernagel],
    },
    {
      h2: 'Was ist eine gute Routine vor und nach einer Wanderung?',
      paragraphs: [
        'Halte sie kurz. Vor der Tour ein bis zwei Minuten, um die Sprunggelenke in Bewegung zu bringen. Danach die Dehnungen für Ferse und Wade. An Tagen zwischen den Touren Fersenheben für die Kraft. Die Dosierungen sind die Startdosierungen von Walkito aus den Hauptanleitungen. Hör für den Tag mit einer Übung auf, wenn der Schmerz über 6 von 10 steigt.',
        'Erwarte vom Dehnen vor einer Wanderung nicht zu viel. In einer Studie mit 1538\u00A0Rekruten über drei Monate Grundausbildung senkte das Dehnen von sechs Muskelgruppen der Beine vor jeder Einheit die Verletzungen nicht nennenswert (Pope und Kollegen, 2000). Die Dehnungen hier sind für Fersen- und Wadenschmerzen gedacht, wo die Leitlinie von 2023 Dehnen mit **Empfehlungsgrad A** bewertet und Krafttraining für die Wade mit **B** (Koc und Kollegen, 2023).',
      ],
      exercises: [
        {
          name: 'Sprunggelenk-Wippen (vorher)',
          evidence: { level: 'early', why: 'Eigene Dosierung von Walkito. Kein veröffentlichtes Programm für Wanderer.' },
          dose: '2\u00A0Sätze à 15, jedes Bein',
          often: 'Vor der Tour',
          feel: 'Eine Dehnung vorn am Sprunggelenk und ein Zug unten in der Wade',
          how: 'Schrittstellung, Hände an einer Wand, einem Baum oder deinen Stöcken. Wipp das vordere Knie über die Zehen nach vorn, die Ferse bleibt flach. Langsam, etwa zwei Sekunden in jede Richtung. Wechsle nach jedem Satz das Bein.',
          stop: 'Der Schmerz erreicht 6 von 10',
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Das Knie wandert über die Zehen, die Ferse bleibt flach',
          alt: 'Eine Figur in Schrittstellung wippt das vordere Knie über die Zehen nach vorn, das Sprunggelenk ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (danach)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Bei Wanderern nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Nach der Tour',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht an der Ferse, deshalb ist diese Dehnung wichtig, auch wenn du sie weiter oben spürst.',
          stop: 'Stechender Schmerz an der Ferse oder der Achillessehne',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (danach)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Bei Wanderern nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Nach der Tour',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Stechender Schmerz an der Ferse oder der Achillessehne',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung (danach und am nächsten Morgen)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. Bei Wanderern nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'Nach der Tour und vor den ersten Schritten am nächsten Morgen',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung am nächsten Morgen auf der Bettkante, bevor dein Fuß den Boden berührt.',
          stop: 'Stechender Fersenschmerz',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fußrollen (danach)',
          evidence: { level: 'early', why: 'In den Studien auf dieser Seite nicht getestet. Die Übung ist für das Wohlgefühl da.' },
          dose: '1\u00A0Minute, jeder Fuß',
          often: 'Nach der Tour oder am Abend',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam mit festem Druck über einen Massageball. Wenn du zusammenzuckst, nimm Druck raus. Kein Ball? Fester Daumendruck von der Ferse zu den Zehen geht auch.',
          stop: 'Schmerz, bei dem du zusammenzuckst, oder eine schmerzhafte Stelle an einem Knochen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig (zwischen den Touren)',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Ein Programm mit Fersenheben half in einer Studie mit 48\u00A0Menschen schneller gegen Fersenschmerzen als Dehnen (Rathleff 2015).' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: '2 bis 3\u00A0Tage pro Woche, nicht am Tag nach einer großen Tour',
          feel: 'Beide Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, drück dich gerade über die großen Zehen nach oben und senk dich langsam ab. Wenn das leichtfällt, wechsle auf ein Bein oder zum [Fersenheben mit Handtuch](/de/uebungen/fersenheben-mit-handtuch/). Bei Schmerzen an der Achillessehne ist langsames Absenken auf einer Stufe die Hauptübung: siehe [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
          stop: 'Schmerz an Ferse oder Achillessehne über 6 von 10 oder am nächsten Morgen schlimmer',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.popeStretching, CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Wann solltest du aufhören zu wandern und es ärztlich abklären lassen?',
      keyFact: 'In einer Übersichtsarbeit zu Ermüdungsbrüchen hatten 81\u00A0% der Betroffenen Schmerzen beim Gehen, und ein frühes Röntgenbild zeigte nur etwa 10\u00A0% der Brüche (Patel und Kollegen, 2011).',
      paragraphs: [
        '**Hör auf und lass es abklären, wenn der Schmerz an einer Stelle eines Knochens sitzt und mit jeder Tour schlimmer wird.** Das ist das klassische Muster eines Ermüdungsbruchs, meist an den Mittelfußknochen hinter den Zehen oder am Fersenbein. In einer Übersichtsarbeit zu Ermüdungsbrüchen hatten 81\u00A0% der Betroffenen Schmerzen beim Gehen, und eine druckschmerzhafte Stelle am Knochen fand sich bei 65,9 bis 100\u00A0%. Ein Röntgenbild beim ersten Termin zeigte nur etwa 10\u00A0% davon, ein normales Röntgenbild schließt einen Ermüdungsbruch also nicht aus (Patel und Kollegen, 2011). Wenn du unsicher bist, was es ist, wandere nicht weiter, bis eine Ärztin oder ein Arzt es angeschaut hat.',
        'Hör auch auf, wenn du den Fuß nicht belasten kannst, wenn der Schmerz mit einem Umknicken, einem Sturz oder einem Knall begann oder wenn der Fuß gerötet, warm und geschwollen ist. Die vollständige Liste steht unten.',
        'Die meisten Fersenschmerzen sind weniger dramatisch. Bei Plantarfasziitis wird es bei etwa 90\u00A0% der Menschen mit Behandlung ohne Operation besser, auch wenn das Monate dauern kann (Latt und Kollegen, 2020). Siehe [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
      ],
      sourceNote: 'Die Zahlen von Patel 2011 gelten für Ermüdungsbrüche an allen Stellen, nicht für Wanderer. Die Sensitivität des Röntgenbilds steigt nach etwa drei Wochen auf 30 bis 70\u00A0%.',
      cites: [CITE.patelStressFracture, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Ist es normal, dass die Füße nach dem Wandern wehtun?',
      cites: [CITE.chruschHikers],
      a: 'Leichte Schmerzen nach einer langen oder steilen Tour sind häufig und klingen oft innerhalb von ein bis zwei Tagen ab. In einer Umfrage unter 1295\u00A0Wanderern auf dem Appalachian Trail gaben 29\u00A0% Fußschmerzen an. Schmerz, der stechend ist, an einer Stelle eines Knochens sitzt oder nach ein paar leichten Tagen noch da ist, solltest du abklären lassen.',
    },
    {
      q: 'Warum tut meine Ferse nach dem Wandern weh?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Die häufigste Ursache ist eine Plantarfasziitis. Sie tut unter der Ferse weh, meist am schlimmsten bei den ersten Schritten am nächsten Morgen. Die Leitlinie von 2023 nennt eine kürzliche Steigerung der Belastung im Stehen und Gehen als typischen Auslöser, und eine verkürzte Wade ist der stärkste bekannte Risikofaktor. Schmerz hinten an der Ferse spricht für die Achillessehne.',
    },
    {
      q: 'Kann ich mit Plantarfasziitis weiter wandern?',
      cites: [CITE.silbernagel],
      a: 'Viele können das, auf kürzeren und flacheren Strecken, wenn der Schmerz während der Tour mäßig bleibt und bis zum nächsten Morgen abklingt. Diese Regel für den nächsten Morgen stammt aus einer Studie zur Achillessehne, nicht aus einer Studie zum Wandern. Wenn die Ferse jeden Morgen schlimmer ist, verkürze zuerst Strecke und Abstieg. Unsere Anleitung zum Gehen bei Plantarfasziitis erklärt, wie du dich wieder steigerst.',
    },
    {
      q: 'Sind Wanderstiefel oder Trailrunning-Schuhe bei Fußschmerzen besser?',
      cites: [CITE.andersonPack, CITE.chruschHikers],
      a: 'Niemand weiß es sicher, weil keine Studie sie verglichen hat. In Umfragen unter Fernwanderern gingen sowohl Stiefel als auch Trailschuhe mit weniger Beschwerden einher als Sandalen, und ein Zusammenhang zwischen Stiefeln und Taubheit verschwand, sobald das Rucksackgewicht berücksichtigt wurde. Nimm das Paar, das passt und in dem du schon gegangen bist.',
    },
    {
      q: 'Verursacht ein schwerer Rucksack Fußschmerzen?',
      cites: [CITE.andersonPack],
      a: 'Er erhöht die Last bei jedem Schritt, aber die Umfragen unter Wanderern zeigen nur bei Taubheit und Kribbeln einen klaren Zusammenhang. Bei 128\u00A0Fernwanderern stieg das von 35\u00A0% bei Rucksäcken mit 10 bis 20\u00A0Pfund (etwa 4,5 bis 9\u00A0kg) auf 69\u00A0% über 31\u00A0Pfund (etwa 14\u00A0kg). Das Rucksackgewicht hing in dieser Umfrage nicht mit anderen Muskel- und Gelenkverletzungen zusammen.',
    },
    {
      q: 'Warum tun meine Füße bergab mehr weh?',
      cites: [CITE.bohnePoles],
      a: 'Beim Abstieg arbeiten deine Beinmuskeln als Bremse, während sie sich verlängern, und der Fuß rutscht im Schuh nach vorn und belastet Zehen und Fußballen. In einer Laborstudie mit 15\u00A0Wanderern, die bergab gingen, verringerten Wanderstöcke die Belastung von Sprunggelenk, Knie und Hüfte, mit und ohne Rucksack.',
    },
    {
      q: 'Helfen Wanderstöcke gegen Fußschmerzen?',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
      a: 'Sie verringern die Belastung der Beine. Bei 15\u00A0erfahrenen Wanderern, die bergab gingen, senkten Stöcke die Kräfte an Sprunggelenk, Knie und Hüfte, und in einer Umfrage unter Wanderern auf dem Appalachian Trail gingen Stöcke mit weniger Beschwerden einher. Keine Studie hat getestet, ob Stöcke Fußschmerzen selbst verhindern. Sieh sie als sinnvolle Ergänzung, nicht als sichere Lösung.',
    },
    {
      q: 'Wie lange dürfen die Füße nach einer langen Wanderung wehtun?',
      a: 'Normale Beschwerden nach einem anstrengenden Tag lassen bei leichter Aktivität oft innerhalb von ein bis zwei Tagen nach. Wenn der Fersenschmerz bei den ersten Schritten jeden Morgen wiederkommt oder der Schmerz nach einer Woche mit kürzeren Strecken noch da ist, ist eher eine Überlastung wie eine Plantarfasziitis oder Achillessehnenschmerzen der Grund, und du solltest es richtig abklären lassen.',
    },
    {
      q: 'Sollte ich vor einer Wanderung dehnen?',
      cites: [CITE.popeStretching, CITE.guideline],
      a: 'Ein kurzes Aufwärmen wie Sprunggelenk-Wippen ist in Ordnung, aber erwarte nicht, dass Dehnen vor einer Wanderung Verletzungen verhindert. In einer Studie mit 1538\u00A0Rekruten senkte Dehnen vor dem Training die Verletzungen nicht nennenswert. Waden- und Gewölbedehnungen nach der Tour sind nützlicher, wenn deine Ferse wehtut. Dafür vergibt die Leitlinie von 2023 Empfehlungsgrad A.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zum Arzt oder zur Ärztin, wenn',
    bullets: [
      'der Schmerz an einer Stelle eines Knochens sitzt und mit jeder Tour schlimmer wird (möglicher Ermüdungsbruch)',
      'du den Fuß nicht belasten kannst oder hinkst',
      'der Schmerz mit einem Umknicken, einem Sturz oder einem Knall begann, vor allem hinten an der Ferse',
      'Fuß oder Sprunggelenk gerötet, warm oder geschwollen sind oder du Fieber hast',
      'eine Blase oder ein Zehennagel entzündet aussieht: sich ausbreitende Rötung, Eiter oder rote Streifen',
      'Taubheit, Kribbeln oder Brennen nicht weggehen, nachdem du Rucksack und Schuhe ausgezogen hast',
      'der Fuß nachts oder in Ruhe wehtut',
      'der Schmerz trotz kürzerer Touren über zwei bis drei Wochen immer schlimmer wird',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß mit den Dehnungen und dem Fersenheben von dieser Seite. Sie plant keine Wanderungen. Plane deine Touren also selbst und leg die Einheiten darum herum, mit leichteren Einheiten nach einem anstrengenden Tag.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du, wie sich deine Füße anfühlen, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['heelPainAfterWalking', 'achilles', 'ballOfFoot'],
  crumb: 'Fußschmerzen nach dem Wandern',
  campaign: 'guide-hiking-foot-pain-de',
};
