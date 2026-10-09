import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/morning-heel-pain.ts`, written around the German
 * queries «Fersenschmerzen morgens», «Fersenschmerzen nach dem Aufstehen»,
 * «Anlaufschmerz Ferse». Informal «du», terminology and exercise names as in
 * `lib/guides/de.ts`. Figures, doses, grades and qualifiers are identical to
 * the English page. No new citations.
 */

export const MORNING_HEEL_PAIN_DE: Guide = {
  lang: 'de',
  page: 'morningHeelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fersenschmerzen morgens: Ursachen und was du tun kannst',
  description:
    'Warum die Ferse morgens nach dem Aufstehen wehtut, welche Ursachen es außer Plantarfasziitis gibt und was du vor dem ersten Schritt tun kannst.',
  h1: 'Fersenschmerzen am Morgen: woher sie kommen und was du vor dem ersten Schritt tun kannst',
  lede:
    'Die ersten Schritte aus dem Bett sind das Schlimmste am Tag. Dieses stechende Ziehen an der Ferse, bevor du überhaupt richtig stehst, ist das Muster, das die meisten beschreiben, wenn sie nach Fersenschmerzen suchen. Die häufigste Ursache ist Plantarfasziitis, aber nicht die einzige, und der Morgen ist der nützlichste Moment, um etwas dagegen zu tun.',
  intro: [
    'Die Seite [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) hat die vollständige Übungsliste, die Belege hinter jeder Übung und die Bewertungen der Leitlinie. Diese Seite geht tiefer auf den Morgen selbst ein: warum der erste Schritt wehtut, welche anderen Ursachen dasselbe Muster haben, was du tun kannst, bevor dein Fuß den Boden berührt, und wie dir dein Morgenschmerz zeigt, ob es besser wird.',
  ],
  takeaways: [
    'Fersenschmerzen am Morgen sind das Kennzeichen der Plantarfasziitis: Die Leitlinie von 2023 zu Fersenschmerzen beschreibt sie als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ auffällt (Koc und Kollegen, 2023).',
    'Die Plantarfaszie vor dem Aufstehen zu dehnen, bekommt ein **A**, die beste Bewertung der Leitlinie. Nachtschienen, 1 bis 3\u00A0Monate getragen, bekommen bei anhaltendem Schmerz bei den ersten Schritten ebenfalls ein **A** (Koc und Kollegen, 2023).',
    'Weitere Ursachen für Schmerzen am Morgen sind die Achillessehnenentzündung (hinten an der Ferse), ein dünner werdendes Fersenpolster (tiefer Schmerz in der Mitte), ein Ermüdungsbruch des Fersenbeins (nimmt bei Belastung zu, kann in Ruhe wehtun) und entzündliche Gelenkerkrankungen (beide Fersen plus lange Morgensteifigkeit in anderen Gelenken).',
    'In einer Kohorte von 174\u00A0Menschen mit Plantarfasziitis sagten Fersenschmerzen auf beiden Seiten eine längere Beschwerdedauer signifikant voraus, und die Autoren merkten an, dass unerkannte systemische Entzündungserkrankungen diesen Befund teilweise erklären könnten (Hansen und Kollegen, 2018).',
    'Der Morgenschmerz auf einer Skala von 0 bis 10 ist das klarste Signal von Tag zu Tag, ob der Fuß besser wird oder nicht.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Warum sind Fersenschmerzen morgens schlimmer?',
      figure: { id: 'heel-side', caption: 'Seitenansicht: Die Plantarfaszie setzt unten am Fersenbein an, dort beginnt der Schmerz bei Plantarfasziitis meist.', alt: 'Fuß von der Innenseite mit durchsichtiger Haut: Fersenbein, Plantarfaszie unter dem Gewölbe und eine rote Stelle unter der Ferse, wo der Schmerz meist beginnt.' },
      paragraphs: [
        'Die Plantarfaszie, das dicke Gewebeband vom Fersenbein bis zu deinen Zehen, wird im Schlaf steif. In Ruhe zeigt dein Fuß meist nach unten, und die Faszie kann sich verkürzen. Wenn du aufstehst und der Fuß sich unter deinem vollen Gewicht abflacht, wird das verkürzte Gewebe plötzlich gedehnt. Das Ergebnis ist ein stechendes Ziehen an der Innenseite der Ferse.',
        'Die Leitlinie von 2023 zu Fersenschmerzen beschreibt das als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ auffällt. Dasselbe Muster zeigt sich, wenn du eine Weile gesessen hast und dann aufstehst, aus demselben Grund: Das Gewebe verkürzt sich in Ruhe und wird dann abrupt belastet.',
        'Das ist kein neuer Schaden, der jeden Morgen entsteht. Das Gewebe ist steif, es reißt nicht. Sobald du ein paar Schritte gegangen bist und die Faszie warm wird, lässt der Schmerz meist nach. Dieser Aufwärmeffekt ist eines der Dinge, die die Plantarfasziitis von manchen der anderen Ursachen unten unterscheidet.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Was verursacht morgens sonst noch Fersenschmerzen?',
      keyFact: 'In einer Kohorte von 174\u00A0Menschen mit Plantarfasziitis, die durchschnittlich 9,7\u00A0Jahre beobachtet wurden, sagten Fersenschmerzen auf beiden Seiten einen schlechteren Langzeitverlauf voraus, was laut den Autoren auf unerkannte systemische Entzündungserkrankungen hindeuten könnte (Hansen und Kollegen, 2018).',
      paragraphs: [
        'Plantarfasziitis ist die häufigste Ursache für Fersenschmerzen am Morgen, aber nicht die einzige. Wo der Schmerz sitzt und wie er sich verhält, hilft, die Ursachen auseinanderzuhalten.',
        '**Achillessehnenentzündung.** Schmerz hinten an der Ferse oder in der Sehne darüber, nicht unter dem Fuß. Die Achillessehne wird über Nacht genauso steif wie die Plantarfaszie, deshalb ist Steifheit bei den ersten Schritten häufig. Meist wird es beim Gehen besser und bei langer Belastung wieder schlimmer. Wenn dein Schmerz hinten an der Ferse sitzt und nicht darunter, lies [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/).',
        '**Dünner werdendes Fersenpolster.** Das Fettpolster unter deinem Fersenbein wirkt wie ein Kissen. Wenn es dünner wird oder sich verschiebt, bekommt der Knochen mehr Stöße direkt ab.',
        'Ein Scoping Review von 2022 stellte fest, dass Schmerz durch das Fersenpolster eher ein tiefer, dumpfer Schmerz mitten in der Ferse ist, sich auf hartem Boden und barfuß schlimmer anfühlt und sich ohne Bildgebung schwer von einer Plantarfasziitis unterscheiden lässt (Chang und Kollegen, 2022). Der wichtigste Unterschied: Der Schmerz bei Plantarfasziitis ist meist vorn an der Innenseite der Ferse am stärksten, der Schmerz durch das Fersenpolster sitzt genau in der Mitte darunter.',
        '**Ermüdungsbruch des Fersenbeins.** Schmerz, der allmählich kommt, meist nach einem Sprung bei der Belastung. Anders als bei der Plantarfasziitis nimmt der Schmerz bei einem Ermüdungsbruch eher bei Belastung zu, statt nach dem Aufwärmen nachzulassen, und er kann in Ruhe oder nachts wehtun. Wenn es wehtut, wenn du die Seiten der Ferse zusammendrückst, geh zu einer medizinischen Fachperson, bevor du den Fuß trainierst. [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) erklärt, wie plötzliche Belastungsänderungen die Ferse treffen.',
        '**Entzündliche Gelenkerkrankung (ein Warnzeichen).** Wenn beide Fersen morgens wehtun, die Steifigkeit länger als 30\u00A0Minuten anhält und auch andere Gelenke steif oder geschwollen sind, entfernt sich das Muster von der Plantarfasziitis hin zu etwas, das eine medizinische Fachperson abklären sollte. Erkrankungen wie Psoriasis-Arthritis oder Morbus Bechterew können Schmerzen dort verursachen, wo Sehnen am Knochen ansetzen, auch an der Ferse.',
        'In einer Kohorte von 174\u00A0Menschen mit Plantarfasziitis, die durchschnittlich 9,7\u00A0Jahre beobachtet wurden, sagten Fersenschmerzen auf beiden Seiten eine signifikant schlechtere Langzeitprognose voraus, und die Autoren merkten an, dass unerkannte systemische Entzündungserkrankungen diesen Befund teilweise erklären könnten (Hansen und Kollegen, 2018). Wenn beide Fersen wehtun und andere Gelenke betroffen sind, geh zuerst zu einer medizinischen Fachperson.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.patelStressFracture, CITE.hansen],
    },
    {
      h2: 'Was kannst du vor dem ersten Schritt tun?',
      paragraphs: [
        'Das Nützlichste, was du gegen Fersenschmerzen am Morgen tun kannst, passiert, bevor dein Fuß den Boden berührt. Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, **A**, und am häufigsten empfiehlt sie das Dehnen für den Morgen.',
        'Setz dich auf die Bettkante. Leg einen Knöchel über das andere Knie und zieh die Zehen mit einer Hand sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Halte etwa 10\u00A0Sekunden, dann lass los. Mach das 10-mal pro Fuß. So belastest du die Faszie langsam und kontrolliert, bevor sie dein volles Gewicht tragen muss.',
        'Danach kommt eine Wadendehnung. Stell dich neben das Bett oder an eine Wand, ein Fuß hinter dem anderen, die hintere Ferse am Boden, und lehn dich nach vorn, bis du die Dehnung in der oberen Wade spürst. Halte 30\u00A0Sekunden pro Seite.',
        'Verkürzte Waden ziehen über die Achillessehne an der Ferse, und eingeschränkte Beweglichkeit im Sprunggelenk ist einer der stärksten unabhängigen Risikofaktoren für Plantarfasziitis: In einer gematchten Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen hatte sie die höchste Odds Ratio aller gemessenen Faktoren (Riddle und Kollegen, 2003).',
        'Zieh dann stützende Schuhe oder Hausschuhe mit fester Sohle an, bevor du in die Küche gehst. Barfuß auf hartem Boden ist die schlechteste Kombination für eine steife Faszie. Diese Dehnungen am Morgen sind der Anfang. Der längerfristige Plan nimmt Krafttraining dazu: [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/) ist die Übung mit den direktesten Studienbelegen.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung (im Sitzen, vor dem Aufstehen)',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 bewertet das Dehnen von Plantarfaszie und Wade mit A, ihrer besten Bewertung.' },
          dose: '10-mal 10\u00A0Sekunden halten, jeder Fuß',
          how: 'Setz dich aufs Bett. Leg einen Knöchel über das andere Knie. Zieh die Zehen sanft zurück, bis du eine Dehnung entlang des Gewölbes spürst. Halte, dann lass los.',
          often: 'Jeden Morgen vor dem Aufstehen und nach langem Sitzen',
          feel: 'Eine Dehnung entlang des Gewölbes, kein Schmerz',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen sanft zurück, bevor dein Fuß den Boden berührt',
          alt: 'Eine sitzende Figur zieht die Zehen zurück, um das Gewölbe zu dehnen, die Plantarfaszie ist hervorgehoben',
        },
        {
          name: 'Wadendehnung (Knie gestreckt)',
          evidence: { level: 'strong', why: 'Dieselbe Bewertung A in der Leitlinie. Zielt auf den Gastrocnemius, den größeren, oberflächlicheren Wadenmuskel.' },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Das hintere Bein bleibt gestreckt, die Ferse unten, die Hüfte nach vorn. Halte, bis du die Dehnung in der oberen Wade spürst.',
          often: 'Nach der Faszien-Dehnung, an den meisten Morgen',
          feel: 'Eine Dehnung in der oberen Wade',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, nach vorn lehnen',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung (Knie gebeugt)',
          evidence: { level: 'strong', why: 'Dieselbe Bewertung A in der Leitlinie. Zielt auf den Soleus, den tieferen Wadenmuskel.' },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position wie bei der Wadendehnung, dann beug das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt nur mit gebeugtem Knie los.',
          often: 'Nach der Dehnung mit gestrecktem Knie',
          feel: 'Eine Dehnung tiefer in der Wade, nahe der Ferse',
          stop: 'Der Schmerz 6/10 erreicht',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis du die Dehnung tiefer spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Helfen Nachtschienen bei Fersenschmerzen am Morgen?',
      keyFact: 'Die Leitlinie von 2023 gibt Nachtschienen, ein bis drei Monate getragen, ihre beste Bewertung, A, für Menschen, deren Schmerz bei den ersten Schritten am Morgen trotz Dehnen immer wiederkommt (Koc und Kollegen, 2023).',
      paragraphs: [
        'Nachtschienen halten den Fuß im Schlaf im rechten Winkel, sodass Plantarfaszie und Wade sanft gedehnt bleiben, statt sich über Nacht zu verkürzen. Die Idee ist einfach: Wenn der Morgenschmerz daher kommt, dass die Faszie in Ruhe steif wird, sollte es den Schock beim ersten Schritt verringern, sie gedehnt zu halten.',
        'Die Leitlinie von 2023 zu Fersenschmerzen gibt Nachtschienen die Bewertung **A** für Menschen, deren erste Schritte am Morgen trotz Dehnen und anderer konservativer Behandlung weiter wehtun. Die empfohlene Dauer ist 1 bis 3\u00A0Monate. Die meisten Nachtschienen sind ein fester oder halbfester Stiefel, der den Fuß hochhält.',
        'Manche finden es unbequem, damit zu schlafen, und die Leitlinie schlägt sie nicht als ersten Schritt für alle vor. Sie sind für die Gruppe gedacht, die schon dehnt und trotzdem mit Schmerzen aufwacht.',
        'Über Nachtschienen sprichst du am besten mit einer medizinischen Fachperson. Sie sind keine Übung, und keine App kann sie bereitstellen. Aber es lohnt sich, sie zu kennen, weil sie eine der stärksten Bewertungen der Leitlinie haben, und zwar genau für das Problem, um das es auf dieser Seite geht: Schmerz bei den ersten Schritten, der nicht abklingt.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Solltest du zu Hause Schuhe tragen, wenn deine Fersen wehtun?',
      paragraphs: [
        'Barfuß auf hartem Boden zu gehen bringt die Plantarfaszie in ihre maximale Dehnung, ohne Dämpfung darunter. Wenn deine Faszie schon gereizt ist, ist das die schlechteste Kombination, und sie passiert meist direkt nach der Morgendehnung, wenn das Gewebe noch warm wird.',
        'Stützende Schuhe oder Hausschuhe mit fester Sohle halten das Gewölbe zu Hause leicht angehoben und dämpfen die Ferse. Die Leitlinie von 2023 empfiehlt Beratung zu Schuhen als Teil des Gesamtvorgehens, und eingeschränkte Beweglichkeit im Sprunggelenk, also wie weit sich der Fuß Richtung Schienbein anziehen lässt, ist einer der stärksten Risikofaktoren für Plantarfasziitis. Ein Schuh mit einer kleinen Sprengung (Höhenunterschied zwischen Ferse und Zehen) gleicht eine verkürzte Wade teilweise aus.',
        'Das muss kein besonderer Schuh sein. Jeder Turnschuh oder Hausschuh mit fester Sohle und etwas Gewölbestütze ist besser als nackte Füße auf Fliesen oder Parkett. Wenn dein Schmerz zu Hause schlimmer ist als draußen, liegt es oft daran. Den ganzen Tag auf harten Böden zu stehen, macht ein verwandtes Problem: [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) behandelt die Übungen und Schuhe dafür.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Wie zeigt der Morgenschmerz, ob es besser wird?',
      paragraphs: [
        'Der Morgenschmerz ist das klarste Signal von Tag zu Tag, wie es einem Fuß geht. Ein Lauf kann sich gut anfühlen und die Faszie trotzdem überlasten, und du merkst es erst am nächsten Morgen. Eine lange Schicht auf den Beinen kann erträglich wirken, aber der nächste Morgen zeigt dir, ob sie zu viel war. Das Muster ist einfach: Wenn deine ersten Schritte am nächsten Morgen schlimmer sind als sonst, hat der Vortag dem Fuß mehr abverlangt, als er verkraften konnte.',
        'Deshalb ist ein täglicher Wert für den Morgenschmerz, 0 bis 10, nützlicher, als den Schmerz tagsüber zu prüfen. Der Schmerz tagsüber steigt und fällt mit Aktivität, Haltung und Schuhen. Der Morgenschmerz misst dasselbe, auf dieselbe Weise, jeden Tag ungefähr zur selben Zeit. Wenn die Zahl über Wochen sinkt, macht der Fuß Fortschritte. Wenn sie in die Höhe schießt, war in den letzten ein, zwei Tagen etwas zu viel.',
        'Walkito fragt vor jeder Einheit nach deinem Morgenschmerz. Liegt der Wert bei 7 oder höher, wird der Tag zu einer sanften Einheit: nur Übungen im Sitzen mit wenig Last, die die Faszie nicht belasten, höchstens 3\u00A0Minuten. Liegt der Wert 3 oder mehr Punkte über dem Durchschnitt der letzten 7\u00A0Tage, stuft die App jede Übung eine Stufe herunter. Wenn du gestern mehr Stunden auf den Beinen warst als sonst, wird aus einer Krafteinheit eine leichtere Erholungseinheit.',
        'Das Ziel ist ein Morgenschmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück. Dieser Trend, nicht ein einzelner Wert, zeigt dir, dass der Fuß bereit für die nächste Stufe ist.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Warum tut meine Ferse nur morgens weh?',
      cites: [CITE.guideline],
      a: 'Die Plantarfaszie, das dicke Gewebeband unter deinem Fuß, wird im Schlaf steif und verkürzt sich. Deine ersten Schritte dehnen sie unter deinem vollen Gewicht. Die Leitlinie von 2023 zu Fersenschmerzen beschreibt das als Schmerz, der „am stärksten bei Belastung direkt am Morgen oder nach einer Ruhephase“ auffällt. Wenn du ein paar Minuten gehst, wird das Gewebe warm, und der Schmerz lässt meist nach.',
    },
    {
      q: 'Sollte ich vor dem Aufstehen dehnen?',
      cites: [CITE.guideline],
      a: 'Ja. Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, A, und der Morgen ist der Zusammenhang, den sie am häufigsten nennt. Setz dich auf die Bettkante, leg einen Knöchel über das andere Knie und zieh die Zehen etwa 10\u00A0Sekunden sanft zurück, 10-mal pro Fuß. So belastest du die Faszie langsam, bevor sie dein volles Gewicht tragen muss.',
    },
    {
      q: 'Ist Fersenschmerz am Morgen immer Plantarfasziitis?',
      cites: [CITE.fatPadReview, CITE.achillesGuideline],
      a: 'Nicht immer. Achillessehnenentzündung (Schmerz hinten an der Ferse), ein dünner werdendes Fersenpolster (tiefer Schmerz in der Mitte, schlimmer barfuß auf hartem Boden), ein Ermüdungsbruch des Fersenbeins (nimmt bei Belastung zu, kann in Ruhe wehtun) und entzündliche Gelenkerkrankungen (beide Fersen, lange Steifigkeit, andere Gelenke betroffen) können alle Schmerzen am Morgen machen. Ort und Verhalten helfen bei der Unterscheidung, die Entscheidung trifft aber eine medizinische Fachperson.',
    },
    {
      q: 'Helfen Nachtschienen gegen Fersenschmerzen am Morgen?',
      cites: [CITE.guideline],
      a: 'Die Leitlinie von 2023 zu Fersenschmerzen gibt Nachtschienen die Bewertung A, ihre beste, für Menschen, deren erste Schritte trotz Dehnen weiter wehtun. Nachtschienen halten den Fuß über Nacht im rechten Winkel, sodass die Faszie sanft gedehnt bleibt, statt sich zu verkürzen. Die empfohlene Dauer ist 1 bis 3\u00A0Monate. Wenn Dehnen allein nicht reicht, lohnt sich ein Gespräch mit einer medizinischen Fachperson.',
    },
    {
      q: 'Warum tut meine Ferse nach dem Sitzen wieder weh?',
      cites: [CITE.guideline],
      a: 'Aus demselben Grund wie am Morgen. Die Plantarfaszie verkürzt sich und wird steif, wenn der Fuß entlastet ist, ob du schläfst oder nur am Schreibtisch sitzt. Wenn du aufstehst, wird sie plötzlich gedehnt. Die Leitlinie nennt das „Schmerz bei den ersten Schritten nach einer Ruhephase“. Eine kurze Faszien-Dehnung vor dem Aufstehen kann helfen.',
    },
    {
      q: 'Wann sollte ich mit Fersenschmerzen am Morgen zum Arzt?',
      a: 'Geh zu einer medizinischen Fachperson, wenn beide Fersen wehtun und die Morgensteifigkeit länger als 30\u00A0Minuten anhält, wenn der Schmerz nach einer Verletzung begann, von Woche zu Woche schlimmer wird, dich nachts wach hält, beim Zusammendrücken der Fersenseiten auftritt oder mit Taubheit, Schwellung oder Wärme einhergeht. Diese Muster können auf etwas anderes als Plantarfasziitis hindeuten.',
    },
    {
      q: 'Wie lange dauert es, bis der Anlaufschmerz an der Ferse besser wird?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Eine Übersichtsarbeit von 2020 berichtet, dass es etwa 90\u00A0% der Menschen mit Plantarfasziitis mit nicht-operativer Behandlung besser geht, oft innerhalb einiger Monate (Latt und Kollegen, 2020). In einer längeren Beobachtung von 174\u00A0Patientinnen und Patienten hatte nach 5\u00A0Jahren etwa die Hälfte noch Beschwerden, die meisten aber nur noch leichte Schmerzen (Hansen und Kollegen, 2018). Kein Übungsprogramm kann einen Zeitrahmen versprechen. [Wie lange dauert Plantarfasziitis](/de/wie-lange-dauert-plantarfasziitis/) erklärt die Belege genauer.',
    },
    {
      q: 'Was sollte man vermeiden, wenn die Ferse morgens wehtut?',
      cites: [CITE.guideline],
      a: 'Geh direkt nach dem Aufwachen nicht barfuß auf hartem Boden, und lass die Dehnung vor dem Aufstehen nicht weg. Die Faszie ist in diesem Moment am steifsten, deshalb ist ein Schritt auf Fliesen oder Parkett ohne Dämpfung ein häufiger Auslöser für stechenden Schmerz beim ersten Schritt. Zieh stützende Schuhe oder feste Hausschuhe an, bevor du das Schlafzimmer verlässt, und dehne, solange du noch auf dem Bett sitzt.',
    },
    {
      q: 'Welche Hausmittel helfen bei Fersenschmerzen am Morgen?',
      cites: [CITE.guideline],
      a: 'Hausmittel bei Fersenschmerzen am Morgen sind Dehnen, Kühlen und stützende Schuhe, jeden Tag statt nur einmal. Dehne Faszie und Wade vor dem Aufstehen und zieh dann stützende Schuhe an, bevor du auf harten Böden gehst. Die Fußsohle ein paar Minuten über eine gefrorene Wasserflasche zu rollen, lindert die Steifigkeit, ersetzt aber nicht den Gang zu einer medizinischen Fachperson, wenn der Schmerz nicht besser wird.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'beide Fersen wehtun und die Morgensteifigkeit länger als 30\u00A0Minuten anhält, vor allem wenn andere Gelenke steif oder geschwollen sind',
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat, was auf einen Riss der Plantarfaszie hindeuten kann',
      'du den Fuß nicht belasten kannst oder hinkst',
      'es wehtut, wenn du die Seiten der Ferse zusammendrückst, was auf einen Ermüdungsbruch hindeuten kann',
      'Taubheit, Kribbeln oder Brennen dazukommen, was auf einen eingeklemmten Nerv hindeuten kann',
      'die Ferse gerötet ist, sich warm anfühlt oder du Fieber hast',
      'der Schmerz dich nachts weckt oder auch in Ruhe da ist, nicht nur bei den ersten Schritten',
      'es nach mehreren Wochen täglichen Dehnens und weniger Belastung nicht besser geworden ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst dir die Dehnungen, die Dosis und den Zeitpunkt für die schwerere Variante nicht merken. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei Fersenschmerzen ist das erste Ziel ein besserer Morgen: Schmerz bei oder unter 1/10 an 14\u00A0Tagen am Stück. Jeden Morgen trägst du deinen Schmerz vor dem ersten Schritt ein, und die Einheit des Tages passt sich diesem Wert an.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald das Morgenziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, was sich verändert.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn der Morgenschmerz stechend ist, schlimmer wird oder in beiden Fersen sitzt und andere Gelenke betroffen sind, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Fersenschmerzen am Morgen',
  campaign: 'guide-morning-heel-de',
};
