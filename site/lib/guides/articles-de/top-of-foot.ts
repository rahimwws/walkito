import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/top-of-foot.ts` (2026-10-08).
 * Figures, doses and qualifiers are identical to the English page.
 */

export const TOP_OF_FOOT_DE: Guide = {
  lang: 'de',
  page: 'topOfFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Schmerzen am Fußrücken: Ursachen und Warnzeichen',
  description:
    'Schmerzen am Fußrücken: Strecksehnenentzündung durch enge Schnürung, Ermüdungsbruch, Knochensporn, Gicht und Nervenreizung. Und wann du zum Arzt solltest.',
  h1: 'Schmerzen am Fußrücken: Ursachen und wann du zu einer Fachperson solltest',
  lede:
    'Schmerzen oben auf dem Fuß sind seltener als Fersen- oder Gewölbeschmerzen, können aber jeden Schritt unangenehm machen, vor allem in Schuhen. Die häufigste Ursache ist eine Strecksehnenentzündung, eine Reizung der Sehnen, die die Zehen anheben, oft durch eine zu enge Schnürung oder eine plötzliche Steigerung der Aktivität. Andere Ursachen sind Ermüdungsbrüche, Knochensporne, Gicht und eingeklemmte Nerven. Die meisten sprechen auf einfache Änderungen an, aber einige brauchen Bildgebung oder einen Besuch bei einer Fachperson, um sie zu klären.',
  intro: [
    'Die Oberseite des Fußes heißt Fußrücken (Dorsum). Dort liegen mehrere Sehnen, Nerven und kleine Knochen direkt unter der Haut, deshalb ist die Stelle anfällig für Druck von Schuhen und für Überlastung. Diese Seite erklärt die häufigsten Ursachen, was du zu Hause tun kannst, was die Forschung zu Übungen für diesen Bereich sagt und wo es ehrliche Lücken gibt.',
  ],
  toc: true,
  takeaways: [
    'Eine Strecksehnenentzündung, also eine Entzündung der Sehnen, die die Zehen anheben, ist die häufigste Ursache für Schmerzen am Fußrücken. Eine enge Schnürung und eine plötzliche Steigerung der Aktivität sind die üblichen Auslöser.',
    'Ein Ermüdungsbruch eines Mittelfußknochens ist die wichtigste Ursache, die ausgeschlossen werden muss. Der Schmerz sitzt an einer Stelle, wird im Lauf des Tages schlimmer und ist auf einem Röntgenbild zwei bis drei Wochen lang vielleicht nicht zu sehen.',
    'Die Schnürung zu ändern und die Öse über der schmerzenden Stelle auszulassen, ist bei einer Strecksehnenentzündung oft der schnellste erste Schritt.',
    'Keine randomisierte Studie hat Übungen speziell bei Schmerzen am Fußrücken getestet. Übungen setzen an beitragenden Faktoren an, etwa einer verkürzten Wade und einem schwachen Tibialis anterior, nicht direkt am Schmerz am Fußrücken.',
  ],
  sections: [
    {
      h2: 'Was verursacht Schmerzen am Fußrücken?',
      keyFact: 'Ein Ermüdungsbruch eines Mittelfußknochens ist auf einem normalen Röntgenbild in den ersten zwei bis drei Wochen nach Beginn der Beschwerden vielleicht nicht zu sehen, ein MRT kann ihn früher bestätigen (Patel und Kollegen, 2011).',
      paragraphs: [
        '**Strecksehnenentzündung** ist die häufigste Ursache. Die Strecksehnen laufen oben über den Fuß vom Schienbein zu den Zehen. Sie heben beim Gehen die Zehen und den Fuß an. Wenn sie gereizt sind, spürst du einen Schmerz entlang des Fußrückens, der bei Belastung schlimmer wird und oft wehtut, wenn du die Zehen gegen Widerstand nach oben ziehst. Die üblichen Auslöser sind zu eng geschnürte Schuhe, die direkt auf die Sehnen drücken, eine plötzliche Steigerung der Geh- oder Laufstrecke oder Schuhe mit einer steifen Zunge.',
        '**Ermüdungsbruch eines Mittelfußknochens** ist ein kleiner Riss in einem der langen Knochen des Fußes, meist im zweiten oder dritten Mittelfußknochen. Der Schmerz ist enger begrenzt als bei einer Sehnenentzündung, sitzt über einer bestimmten Stelle und wird im Lauf des Tages eher schlimmer. Eine Schwellung oben auf dem Fuß ist häufig. Ermüdungsbrüche können zwei bis drei Wochen brauchen, bis sie auf einem normalen Röntgenbild zu sehen sind, deshalb braucht eine frühe Bildgebung eventuell ein MRT. Hier ist Ruhe gefragt, keine Übungen.',
        '**Knochensporn am Fußrücken** (auch Exostose genannt) ist ein knöcherner Höcker, der sich oben auf den Gelenken des Mittelfußes bildet, meist dort, wo die Mittelfußknochen auf die Keilbeine treffen. Er entsteht langsam durch jahrelangen Druck auf diese Gelenke. Der Sporn selbst muss nicht wehtun, kann aber gegen die Schuhzunge drücken oder einen Nerv reizen, der darüber verläuft.',
        '**Gicht** kann plötzliche, starke Schmerzen oben auf dem Fuß auslösen, am häufigsten am Großzehengrundgelenk. Das Gelenk wird rot, geschwollen, heiß und extrem druckempfindlich. Gicht entsteht durch Ablagerungen von Harnsäurekristallen und braucht ärztliche Behandlung. Übungen helfen bei einem akuten Gichtanfall nicht.',
        '**Nervenreizung** kann vom tiefen oder oberflächlichen Wadenbeinnerv (Nervus peroneus profundus oder superficialis) kommen, wenn er durch enge Schuhe, eine Schwellung oder einen Knochensporn eingeengt wird. Der Schmerz ist eher brennend oder kribbelnd als ein tiefer Schmerz und kann in die Zehen oder hoch zum Sprunggelenk ausstrahlen.',
        '**Arthrose im Mittelfuß** betrifft die kleinen Gelenke oben auf dem Fuß, meist durch Verschleiß oder eine frühere Verletzung. Der Schmerz ist steif und dumpf, schlimmer nach langem Stehen oder Gehen, und kann mit einer sichtbaren Verdickung über den Gelenken einhergehen.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Wie unterscheidest du diese Ursachen?',
      paragraphs: [
        'Ort und Muster sind die ersten Hinweise. Eine Strecksehnenentzündung macht einen breiten Schmerz entlang der Sehnen, der schlimmer wird, wenn du die Zehen nach oben ziehst. Ein Ermüdungsbruch tut an einer bestimmten Stelle weh und wird im Lauf des Tages schlimmer. Gicht kommt plötzlich, meist am Großzehengrundgelenk, mit Rötung und Wärme. Nervenschmerz ist eher brennend oder kribbelnd, kein tiefer Schmerz.',
        'Eine Fachperson kann den Unterschied oft mit einer körperlichen Untersuchung erkennen. Das Strecken der Zehen gegen Widerstand (die Zehen gegen Druck nach oben ziehen) löst den Schmerz einer Sehnenentzündung aus. Ein punktueller Druckschmerz über einem Knochen mit einer begrenzten Schwellung deutet auf einen Ermüdungsbruch hin. Bei Verdacht auf einen Ermüdungsbruch ist Bildgebung wichtig, weil weitere Belastung eines gebrochenen Knochens ihn verschlimmern kann.',
        'Wenn der Schmerz nur in Schuhen da ist und barfuß verschwindet, ist Druck vom Schuh der wahrscheinlichste Grund. Wenn er in Ruhe bleibt oder dich nachts weckt, lohnt es sich, nach mehr als einer einfachen Sehnenentzündung zu suchen.',
      ],
    },
    {
      h2: 'Was hilft bei einer Strecksehnenentzündung?',
      paragraphs: [
        'Der schnellste erste Schritt ist meist eine andere Schnürung. Lass die Öse direkt über der schmerzenden Stelle aus. Viele Sportschuhe haben genug Ösen, sodass du den Schnürsenkel um die empfindliche Stelle herumführen kannst, ohne anderswo Halt zu verlieren. Das nimmt den direkten Druck weg, mit dem das Problem angefangen hat.',
        'Schuhe mit einer gepolsterten oder weichen Zunge drücken weniger auf die Sehnen. Wenn du Stiefel, Stollenschuhe oder Anzugschuhe mit einem steifen Obermaterial trägst, ist der Druck von oben oft schon die ganze Erklärung.',
        'Die Aktivität, die den Schmerz ausgelöst hat, vorübergehend zu reduzieren, hilft. Wenn der Schmerz angefangen hat, als du deine Geh- oder Laufstrecke gesteigert hast, geh für ein bis zwei Wochen auf das vorherige Niveau zurück und steigere dann langsam wieder.',
        'Eis auf den schmerzenden Sehnen für 10 bis 15\u00A0Minuten nach Belastung kann in den ersten Tagen helfen, die Reizung zu beruhigen. Entzündungshemmende Schmerzmittel sind eine kurzfristige Möglichkeit, wenn der Schmerz den Alltag stört, beschleunigen aber die eigentliche Erholung nicht.',
      ],
    },
    {
      h2: 'Helfen Übungen bei Schmerzen am Fußrücken?',
      paragraphs: [
        'Keine randomisierte Studie hat Übungen speziell bei Schmerzen am Fußrücken oder bei einer Strecksehnenentzündung getestet. Die ehrliche Antwort lautet: Wir wissen nicht, ob Übungen die Erholung von einer Strecksehnenentzündung im Vergleich zu einer anderen Schnürung und Schonung allein beschleunigen.',
        'Was Übungen angehen können, sind beitragende Faktoren. Der Tibialis anterior, der Muskel vorn am Schienbein, der den Fuß anhebt, ist ebenfalls ein Strecker. Wenn er im Vergleich zur Wade schwach ist, übernehmen die kleineren Strecksehnen oben auf dem Fuß beim Gehen mehr Last. Den Tibialis anterior mit Zehenheben zu kräftigen (den Vorfuß im Stehen an einer Wand anheben) ist eine Möglichkeit, dieses Ungleichgewicht zu verringern. Mehr zum Tibialis anterior findest du unter [Übungen beim Schienbeinkantensyndrom](/de/schienbeinkantensyndrom-uebungen/).',
        'Wadendehnung ist wichtig, wenn die Dorsalflexion des Sprunggelenks eingeschränkt ist. Wenn sich das Sprunggelenk nicht weit genug beugen kann, gleicht der Fuß auf eine Weise aus, die die Strukturen am Fußrücken stärker belasten kann. Eine verkürzte Wade ist außerdem ein gemeinsamer Risikofaktor für [Plantarfasziitis](/de/plantarfasziitis-uebungen/) und Überlastung des Vorfußes.',
        'Bei Knochenspornen am Fußrücken und Arthrose im Mittelfuß ändern Übungen nichts an den Knochen. Übungen für die Beweglichkeit des Sprunggelenks können helfen, den Bewegungsumfang zu erhalten, und Kräftigung kann Beschwerden verringern, aber der Sporn oder der Gelenkverschleiß bleiben. Bei Ermüdungsbrüchen sind Übungen der falsche Ansatz, bis der Knochen verheilt ist.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'Übungen für beitragende Faktoren',
      paragraphs: [
        'Diese Übungen zielen nicht direkt auf den Fußrücken. Sie setzen an einer verkürzten Wade und einem schwachen Schienbeinmuskel an, die zur Überlastung der Strecksehnen beitragen. Wenn deine Schmerzen am Fußrücken von einem Ermüdungsbruch, Gicht oder einem akuten Nervenproblem kommen, lass diese Übungen weg und geh zuerst zu einer Fachperson.',
      ],
      exercises: [
        {
          name: 'Zehenheben',
          dose: '3\u00A0Sätze à 15',
          how: 'Stell dich mit dem Rücken an eine Wand, die Füße etwa eine Fußlänge vor dir. Heb den Vorfuß beider Füße vom Boden und zieh die Zehen Richtung Schienbein. Langsam absenken. Das kräftigt den Tibialis anterior, den wichtigsten Muskel, der den Fuß anhebt.',
          often: 'Krafttage',
          feel: 'Arbeit vorn am Schienbein',
          stop: 'Schmerz oben auf dem Fuß über 4/10',
          evidence: { level: 'early', why: 'Keine Studie zur Strecksehnenentzündung. Die Übung kräftigt den Tibialis anterior, der sich die Last der Dorsalflexion mit den Strecksehnen teilt.' },
          media: 'tibialis_raise',
          caption: 'Zehenheben: Zieh die Zehen Richtung Schienbein, der Rücken lehnt an der Wand',
          alt: 'Eine Figur steht an einer Wand und hebt die Zehen an, der Tibialis anterior ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (gestrecktes Knie)',
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Das hintere Bein bleibt gestreckt, die Ferse unten und die Hüfte nach vorn. Halte, bis du die Dehnung in der oberen Wade spürst. Eine verkürzte Wade schränkt die Dorsalflexion des Sprunggelenks ein, was die Belastung auf den Fußrücken verlagern kann.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Schmerz in der Achillessehne',
          evidence: { level: 'strong', why: 'Wadendehnung hat bei verwandten Beschwerden am Unterschenkel die Leitlinienbewertung A. Nicht speziell bei Strecksehnenentzündung getestet.' },
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Sprunggelenk-Wippen',
          dose: '10-mal langsam wippen, jeder Fuß',
          how: 'Stell dich mit dem Gesicht zur Wand, ein Fuß vorn, die Hände an der Wand. Schieb das Knie über die Zehen nach vorn, die Ferse bleibt am Boden. Zurückwippen und wiederholen. Das verbessert sanft den Bewegungsumfang der Dorsalflexion.',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung vorn am Sprunggelenk',
          stop: 'Schmerz oben auf dem Fuß beim Wippen',
          evidence: { level: 'early', why: 'Beweglichkeitsübungen für das Sprunggelenk gehören zur allgemeinen Reha des Unterschenkels. Keine Studie speziell zu Schmerzen am Fußrücken.' },
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Das Knie geht über die Zehen, die Ferse bleibt unten',
          alt: 'Eine Figur schiebt an einer Wand das Knie über die Zehen nach vorn, das Sprunggelenk ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Wann ist ein Schmerz am Fußrücken ein Ermüdungsbruch?',
      paragraphs: [
        'Ein Ermüdungsbruch eines Mittelfußknochens ist die Ursache, die du am dringendsten ausschließen musst, weil weitere Belastung eines gebrochenen Knochens aus einem kleinen Riss einen vollständigen Bruch machen kann.',
        'Ermüdungsbrüche entstehen meist langsam durch wiederholte Stoßbelastung. Sie sind häufiger bei Läufern, Rekruten beim Militär und bei Menschen, die ihre Aktivität plötzlich gesteigert haben. Der Schmerz sitzt an einer Stelle, wird bei Belastung schlimmer und kann nachts wehtun. Eine Schwellung oben auf dem Fuß über dem schmerzenden Knochen ist häufig.',
        'Ein normales Röntgenbild zeigt einen Ermüdungsbruch in den ersten zwei bis drei Wochen vielleicht nicht. Wenn eine Fachperson einen vermutet, kann ein MRT oder eine Knochenszintigrafie ihn früher bestätigen. Der Ansatz ist Ruhe und geschützte Belastung, keine Übungen. Wer zu früh wieder aktiv wird, riskiert einen vollständigen Bruch.',
        'Wenn der Schmerz nach einer Steigerung des Trainingsumfangs angefangen hat, an einer Stelle sitzt und im Lauf des Tages schlimmer wird, geh zu einer Fachperson, bevor du irgendeine Übung auf dieser Seite machst.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Und was ist mit Gicht am Fußrücken?',
      paragraphs: [
        'Gicht ist eine entzündliche Erkrankung, bei der sich Harnsäurekristalle in einem Gelenk ablagern. Klassisch betrifft sie das Großzehengrundgelenk (das erste Metatarsophalangealgelenk), sie kann aber jedes Gelenk im Fuß treffen, auch im Mittelfuß.',
        'Ein Gichtanfall kommt schnell, oft über Nacht. Das Gelenk wird stark schmerzhaft, rot, heiß und geschwollen. Das sieht anders aus und fühlt sich anders an als eine Sehnenentzündung oder ein Ermüdungsbruch. Wenn du plötzlich starke Schmerzen in einem einzelnen Gelenk mit Rötung und Wärme hast, ist das ein Grund, zügig zu einer Fachperson zu gehen. Bluttests und manchmal eine Untersuchung der Gelenkflüssigkeit bestätigen die Diagnose.',
        'Gicht braucht ärztliche Behandlung. Übungen, andere Schuhe und Dehnen helfen bei einem akuten Anfall nicht. Zwischen den Anfällen ist es sinnvoll, die Beweglichkeit von Fuß und Sprunggelenk zu erhalten, aber das eigentliche Harnsäureproblem wird mit Medikamenten und einer Ernährungsumstellung behandelt.',
      ],
    },
  ],
  faq: [
    {
      q: 'Warum tut mein Fußrücken beim Gehen weh?',
      a: 'Die häufigste Ursache ist eine Strecksehnenentzündung, bei der die Sehnen, die die Zehen anheben, durch enge Schuhe, drückende Schnürsenkel oder eine plötzliche Steigerung der Gehstrecke gereizt sind. Andere Ursachen sind Ermüdungsbrüche, Knochensporne und eingeklemmte Nerven. Wenn der Schmerz nur in Schuhen da ist und barfuß verschwindet, ist Druck vom Schuh der wahrscheinlichste Grund.',
    },
    {
      q: 'Kann eine zu enge Schnürung Schmerzen am Fußrücken verursachen?',
      a: 'Ja. Die Strecksehnen liegen oben auf dem Fuß direkt unter der Haut, und eine enge Schnürung drückt direkt auf sie. Die Öse über der schmerzenden Stelle auszulassen oder Schuhe mit einer weicheren Zunge zu tragen, lässt den Schmerz oft innerhalb weniger Tage abklingen. Das ist eine der häufigsten und am leichtesten zu behebenden Ursachen für Schmerzen am Fußrücken.',
    },
    {
      q: 'Woran erkenne ich, ob der Schmerz am Fußrücken ein Ermüdungsbruch ist?',
      cites: [CITE.patelStressFracture],
      a: 'Ein Ermüdungsbruch tut meist an einer bestimmten Stelle weh, wird im Lauf des Tages und bei Belastung schlimmer und kann oben auf dem Fuß anschwellen. Oft folgt er auf eine plötzliche Steigerung des Trainingsumfangs. Frühe Ermüdungsbrüche sind auf einem Röntgenbild zwei bis drei Wochen lang vielleicht nicht zu sehen. Wenn der Schmerz begrenzt ist, zunimmt und mit Belastung zusammenhängt, lass ihn von einer Fachperson mit Bildgebung abklären, statt weiter zu trainieren.',
    },
    {
      q: 'Helfen Übungen bei Schmerzen am Fußrücken?',
      a: 'Keine Studie hat Übungen speziell bei Schmerzen am Fußrücken getestet. Übungen können beitragende Faktoren angehen: Kräftigung des Tibialis anterior senkt die Last auf die kleineren Strecksehnen, und Wadendehnung verbessert die Beweglichkeit des Sprunggelenks. Bei Ermüdungsbrüchen, Gicht oder Nervenproblemen sind Übungen aber wirkungslos oder sogar schädlich. Die Ursache entscheidet, ob Übungen sinnvoll sind.',
    },
    {
      q: 'Wie fühlt sich eine Strecksehnenentzündung an?',
      a: 'Eine Strecksehnenentzündung fühlt sich wie ein breiter Schmerz entlang des Fußrückens an, vom Sprunggelenk Richtung Zehen. Er wird schlimmer, wenn du die Zehen nach oben ziehst, beim Gehen oder Laufen oder in engen Schuhen. Anders als bei einem Ermüdungsbruch verteilt sich der Schmerz entlang der Sehnen, statt an einem knöchernen Punkt zu sitzen.',
    },
    {
      q: 'Kann Gicht Schmerzen am Fußrücken verursachen?',
      a: 'Ja. Gicht trifft klassisch das Großzehengrundgelenk, kann aber auch die Gelenke im Mittelfuß betreffen. Ein Gichtanfall kommt plötzlich, oft über Nacht, mit starken Schmerzen, Rötung, Wärme und Schwellung in einem Gelenk. Das sieht anders aus als eine Sehnenentzündung oder ein Ermüdungsbruch. Gicht braucht ärztliche Behandlung, keine Übungen.',
    },
    {
      q: 'Sollte ich mit Schmerzen am Fußrücken zum Arzt?',
      a: 'Geh zu einer Fachperson, wenn der Schmerz an einer Stelle sitzt und schlimmer wird, wenn die schmerzende Stelle rot oder warm ist, wenn der Schmerz nach einer Woche Schonung und anderen Schuhen bleibt, wenn er plötzlich nach einer Verletzung angefangen hat oder wenn Taubheit oder Kribbeln dazukommen. Ermüdungsbrüche, Gicht und Nervenprobleme profitieren alle von einer frühen Abklärung.',
    },
    {
      q: 'Kann ich mit einer Strecksehnenentzündung noch gehen?',
      a: 'Ja, Gehen mit einer Strecksehnenentzündung ist meist in Ordnung, wenn der Schmerz leicht bleibt und nicht schlimmer wird. Wähl Schuhe mit einer weichen, nachgiebigen Zunge und lockere die Schnürung oder schnür neu, um den Druck von den schmerzenden Sehnen zu nehmen. Wenn Gehen den Schmerz deutlich verstärkt oder er danach stundenlang anhält, verkürz die Strecke, bis eine andere Schnürung und Schonung ihn senken.',
    },
    {
      q: 'Wie lange dauert es, bis eine Strecksehnenentzündung am Fuß heilt?',
      a: 'Keine Studie hat die Erholungszeit speziell bei einer Strecksehnenentzündung verfolgt, es gibt also keinen getesteten Zeitrahmen. Leichte Fälle durch eine enge Schnürung klingen oft ab, sobald der Druck weg ist. Fälle, die mit einer Trainingssteigerung oder anhaltendem Druck vom Schuh zusammenhängen, können länger dauern, manchmal mehrere Wochen, vor allem wenn der Auslöser nicht ganz beseitigt ist.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz an einer Stelle oben auf dem Fuß sitzt und im Lauf des Tages schlimmer wird, was auf einen Ermüdungsbruch hindeuten kann',
      'ein einzelnes Gelenk geschwollen, gerötet oder warm ist, was auf Gicht oder eine Infektion hindeuten kann',
      'der Schmerz plötzlich nach einer Verletzung, einem Sturz oder einem Umknicken angefangen hat',
      'Taubheit, Kribbeln oder Brennen dazukommen, was auf einen eingeklemmten Nerv hindeuten kann',
      'der Schmerz nach ein bis zwei Wochen Schonung und anderen Schuhen nicht besser wird',
      'du den Fuß nicht belasten kannst oder hinkst',
      'oben auf dem Fuß ein sichtbarer Knoten ist, der wächst',
      'du Diabetes, ein vermindertes Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist für Fersenschmerzen und Plattfüße gebaut, nicht speziell für Schmerzen am Fußrücken. Wenn aber eine Überlastung der Strecksehnen zu deinem Bild gehört, setzen die Kräftigung des Tibialis anterior (Zehenheben) und die Wadendehnung in der App an den beitragenden muskulären Ungleichgewichten an. Wenn du beim Check-in den Fußrücken als schmerzend markierst, kann die App verfolgen, ob sich der Schmerz zusammen mit deinen Übungen verändert.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht. Walkito stellt keine Diagnose bei Schmerzen am Fußrücken. Wenn du einen Ermüdungsbruch, Gicht oder ein Nervenproblem vermutest, geh zu einer Fachperson, bevor du mit einem Übungsprogramm anfängst.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Schmerzen am Fußrücken',
  campaign: 'guide-top-of-foot-de',
};
