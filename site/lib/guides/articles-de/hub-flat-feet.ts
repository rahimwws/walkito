import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Hub: Plattfuß (DE)
 *
 * Translated from `articles/hub-flat-feet.ts`, written around the German
 * queries «Plattfuß», «Senkfuß», «Plattfuß Ursachen», «Plattfuß Erwachsene».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts`.
 * Figures and qualifiers are identical to the English page. No new
 * citations.
 */

export const HUB_FLAT_FEET_DE: Guide = {
  lang: 'de',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Plattfuß: Ursachen, Formen und wann er Beachtung braucht',
  description:
    'Was ein Plattfuß ist, flexibel oder starr, ob er Probleme macht, erworbener Plattfuß und Senkfuß bei Erwachsenen, Übungen und wann du zum Arzt solltest.',
  h1: 'Plattfuß: was er ist, woher er kommt und wann er Beachtung braucht',
  lede:
    'Plattfuß heißt, dass das Fußgewölbe im Stehen tiefer liegt als üblich oder den Boden berührt. Die meisten Plattfüße sind flexibel, das Gewölbe zeigt sich also, wenn der Fuß nicht auf dem Boden steht, und die meisten machen überhaupt keine Schmerzen. Ein kleinerer Teil ist starr oder entsteht im Erwachsenenalter durch eine schwächer werdende Sehne, und auf diese Fälle lohnt es sich, genauer zu achten.',
  takeaways: [
    'Eine systematische Übersichtsarbeit von 2023 über 12\u00A0Bevölkerungsstudien schätzte die Häufigkeit von Plattfüßen insgesamt auf etwa 15,6\u00A0%, wobei der Wert je nach Altersgruppe, Messmethode und Bevölkerung stark schwankt (Salinas-Torres und Kollegen, 2023).',
    'Die meisten Plattfüße sind flexibel und bestehen ein Leben lang. Ein starrer Plattfuß, der auch angehoben flach bleibt, ist strukturell und verändert sich durch Übungen nicht.',
    'Die Framingham Foot Study mit rund 1.900 Erwachsenen fand keinen Zusammenhang zwischen flacher Fußhaltung und Schmerzen im unteren Rücken. Sie fand bei Frauen einen kleinen Zusammenhang zwischen einem Fuß, der beim Gehen nach innen rollt, und Rückenschmerzen, bei Männern keinen (Menz und Kollegen, 2013).',
    'Ein erworbener Plattfuß im Erwachsenenalter, meist durch eine schwächer werdende Tibialis-posterior-Sehne, kann Schmerzen und eine Schwellung an der Innenseite des Sprunggelenks und ein fortschreitendes Absinken des Gewölbes bringen (Ling und Lui, 2017).',
    'In einer Studie mit 52\u00A0Personen mit flexiblen Plattfüßen veränderten sechs Wochen kombinierter Übungen die Form des Gewölbes stärker als in einer Kontrollgruppe. Die Studie hat die Form des Gewölbes gemessen, nicht Schmerzen (Brijwasi und Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist ein Plattfuß?',
      figure: { id: 'arches', caption: 'Dieselben Fußknochen bei Plattfuß, normalem und hohem Gewölbe, von der Innenseite gesehen.', alt: 'Drei Füße von der Innenseite auf ebenem Boden: ein Plattfuß, dessen Gewölbe auf dem Boden aufliegt, ein normales Gewölbe mit kleinem Spalt darunter und ein hohes Gewölbe mit großem Spalt unter der Fußmitte.' },
      keyFact: 'Eine systematische Übersichtsarbeit von 2023, die 12\u00A0Bevölkerungsstudien mit rund 16.000 Menschen zusammenfasste, fand Plattfüße bei insgesamt etwa 15,6\u00A0%, häufiger bei höherem BMI und höherem Alter (Salinas-Torres und Kollegen, 2023).',
      paragraphs: [
        'Das Fußgewölbe, genauer das mediale Längsgewölbe, wird von den Knochen, Bändern und Sehnen an der Innenseite des Fußes gebildet. Bei einem Plattfuß liegt dieses Gewölbe im Stehen tiefer oder fehlt ganz. Der Fachbegriff ist Pes planus.',
        'Plattfüße sind häufig. Eine systematische Übersichtsarbeit von 2023 fasste 12\u00A0Bevölkerungsstudien mit rund 16.000 Menschen zusammen und berichtete eine Gesamthäufigkeit von 15,6\u00A0%. Bei Erwachsenen allein reichen die Schätzungen je nach Bevölkerung und Messmethode von etwa 5 bis 27\u00A0%. Ein höherer BMI und ein höheres Alter gehen mit einer höheren Häufigkeit einher.',
        '„Senkfuß“ und Plattfuß sind genau genommen verschiedene Grade: Beim Senkfuß ist das Längsgewölbe abgesenkt, beim Plattfuß ist es weitgehend abgeflacht. Der Senkfuß ist also die mildere Form. Kippt dazu die Ferse nach innen, spricht man vom Knick-Senkfuß. Im Alltag werden die Begriffe trotzdem oft gemischt. Manchmal ist mit ihnen auch ein Gewölbe gemeint, das im Erwachsenenalter abgesunken ist, und das hat eine andere Ursache, um die es weiter unten geht.',
        'Plattfüße zu haben heißt nicht automatisch, dass etwas nicht stimmt. Viele Menschen mit flachem Gewölbe gehen, laufen und stehen ohne Beschwerden. Entscheidend ist, ob der Plattfuß flexibel oder starr ist und ob er Schmerzen macht.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: 'Woran erkennst du, ob ein Plattfuß flexibel oder starr ist?',
      keyFact: 'In einer Studie mit 52\u00A0Personen mit flexiblen Plattfüßen verbesserten sechs Wochen Kurzer-Fuß-, Sprunggelenk-, Hüft- und Dehnübungen zwei Maße der Gewölbeform stärker als in einer Kontrollgruppe (Brijwasi und Borkar, 2023).',
      paragraphs: [
        'Bei einem flexiblen Plattfuß flacht das Gewölbe unter deinem Gewicht ab, kommt aber zurück, wenn der Fuß nicht auf dem Boden steht. Die meisten Plattfüße sind von dieser Art. Ein starrer Plattfuß bleibt flach, ob du darauf stehst oder nicht.',
        'Ein schneller Check: Setz dich hin und schau dir die Innenseite deines Fußes an. Wenn du ein Gewölbe siehst, stell dich auf beide Füße. Verschwindet das Gewölbe im Stehen, war aber im Sitzen da, ist der Plattfuß flexibel. Eine andere Möglichkeit: Stell dich auf die Zehenspitzen. Zeigt sich das Gewölbe, wenn du hochkommst, ist er flexibel.',
        'Der Unterschied ist wichtig, weil Übungen ein flexibles Gewölbe beeinflussen können. In einer Studie mit 52\u00A0Personen mit flexiblen Plattfüßen veränderten sechs Wochen Kurzer-Fuß-Übungen, Sprunggelenkstraining, Hüftkräftigung und Dehnen zwei Maße der Gewölbeform stärker als in einer Kontrollgruppe. Ein starrer Plattfuß ist strukturell (oft durch eine tarsale Koalition, eine knöcherne Brücke zwischen Fußknochen), und Übungen verändern seine Form nicht. Ein starrer Plattfuß, der Schmerzen macht, braucht meist die Einschätzung einer medizinischen Fachperson.',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Sind Plattfüße wirklich ein Problem?',
      keyFact: 'Die Framingham Foot Study mit rund 1.900 Erwachsenen fand keinen Zusammenhang zwischen flacher Fußhaltung und Rückenschmerzen, ein nach innen rollender Gang zeigte nur bei Frauen einen kleinen Zusammenhang (Menz und Kollegen, 2013).',
      paragraphs: [
        'Für die meisten Menschen nicht. Ein flexibler Plattfuß, der keine Schmerzen macht und dich nicht einschränkt, ist eine normale Variante der Fußform, kein Zustand, der gelöst werden muss.',
        'Die häufigste Sorge sind Rückenschmerzen. Die größte Studie dazu, die Framingham Foot Study, hat rund 1.900 Erwachsene untersucht. Sie fand keinen Zusammenhang zwischen flacher Fußhaltung und Schmerzen im unteren Rücken. Bei Frauen zeigte ein Fuß, der beim Gehen nach innen rollt (Pronation im Gang), einen kleinen Zusammenhang mit Rückenschmerzen, die Fußhaltung selbst, flach oder nicht, aber nicht. Bei Männern hing weder die Haltung noch der Gang mit Rückenschmerzen zusammen.',
        'Plattfüße können verändern, wie die Last durch das Bein läuft. Manche Läuferinnen und Läufer mit stark pronierten Füßen bekommen Überlastungsbeschwerden am Sprunggelenk oder Knie, aber der Zusammenhang zwischen Fußhaltung und Verletzungen ist schwächer, als viele denken. Eine Übersichtsarbeit von 2024 zum Kurzer-Fuß-Training bei Plattfüßen fand insgesamt keine klare Veränderung der Fußhaltung, und eine Veränderung bei einem Maß für das Absinken des Gewölbes nur in Programmen, die länger als sechs Wochen liefen. Sowohl die Studie als auch die Übersichtsarbeit haben die Form des Gewölbes gemessen, nicht Schmerzen oder Verletzungsraten.',
        'Die Fälle, in denen Plattfüße wirklich zählen, kommen weiter unten: der erworbene Plattfuß im Erwachsenenalter durch eine schwächer werdende Sehne und Plattfüße mit Schmerzen, Schwellung oder einer plötzlichen Veränderung der Gewölbehöhe.',
      ],
      cites: [CITE.menz, CITE.cheng],
    },
    {
      h2: 'Was ist ein erworbener Plattfuß im Erwachsenenalter?',
      paragraphs: [
        'Beim erworbenen Plattfuß des Erwachsenen sinkt ein zuvor normales Gewölbe im Erwachsenenalter ab, meist weil die Tibialis-posterior-Sehne (die Sehne, die das Gewölbe von der Innenseite des Sprunggelenks aus hält) schwächer wird und ihre Aufgabe nicht mehr erfüllen kann. Der Fachbegriff für das Sehnenproblem ist Tibialis-posterior-Dysfunktion.',
        'Die Tibialis-posterior-Sehne läuft hinter dem Innenknöchel entlang und setzt an den Knochen an, die das Gewölbe bilden. Wenn sie überdehnt wird oder reißt, sinkt das Gewölbe ab, die Ferse kippt nach außen, und der Vorfuß kann anfangen, von der Mittellinie weg zu zeigen. Schmerzen und Schwellung entlang der Innenseite des Sprunggelenks sind häufige frühe Zeichen. Ein einbeiniger Zehenstandtest, bei dem du auf einem Fuß stehst und auf die Zehen hochkommst, kann auf der betroffenen Seite schwerfallen oder wehtun.',
        'Eine Übersicht im Open Orthopaedics Journal beschreibt vier Stadien: Stadium I mit Entzündung der Sehne, aber ohne sichtbare Fehlstellung, Stadium II mit einer flexiblen Plattfußfehlstellung, die sich von Hand noch korrigieren lässt, Stadium III mit einer starren Fehlstellung, die sich nicht mehr von Hand korrigieren lässt, und Stadium IV mit zusätzlichen Veränderungen am Sprunggelenk.',
        'Eine systematische Übersichtsarbeit zu Übungen bei Tibialis-posterior-Dysfunktion fand nur begrenzte randomisierte Belege. Sie stellte fest, dass klinische Leitlinien für frühe Stadien (Stadium I und II) eine nicht-operative Behandlung mit Übungen, Orthesen und angepasster Aktivität empfehlen, die Zahl hochwertiger Studien aber klein ist. Spätere Stadien brauchen oft die Einschätzung einer medizinischen Fachperson und können eine Orthese oder eine Operation erfordern.',
        'Wenn ein Gewölbe im Erwachsenenalter abgesunken ist, mit Schmerzen oder Schwellung an der Innenseite des Sprunggelenks, geh zu einer medizinischen Fachperson, bevor du ein Übungsprogramm anfängst. Das ist nicht dasselbe wie ein lebenslanger flexibler Plattfuß.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Welche Beschwerden heißen, dass Plattfüße Beachtung brauchen?',
      paragraphs: [
        'Die meisten Plattfüße machen keine Beschwerden und brauchen keine medizinische Abklärung. Ein flexibler Plattfuß, der seit der Kindheit besteht und nicht wehtut, ist eine normale Variante der Fußform. Diese Muster solltest du von einer medizinischen Fachperson abklären lassen:',
      ],
      bullets: [
        'Schmerzen an der Innenseite des Sprunggelenks oder unter dem Gewölbe, die in Ruhe nicht abklingen.',
        'Eine Schwellung an der Innenseite des Sprunggelenks, vor allem wenn sie neu ist.',
        'Ein Gewölbe, das im Erwachsenenalter abgeflacht ist, während das andere gleich geblieben ist.',
        'Schwierigkeiten, auf der betroffenen Seite auf einem Fuß zu stehen und auf die Zehen hochzukommen.',
        'Schmerzen in Knie, Schienbein oder Hüfte, bei denen du vermutest, dass sie damit zusammenhängen, wie dein Fuß aufsetzt.',
        'Ein starrer Plattfuß (das Gewölbe bleibt flach, auch wenn der Fuß nicht auf dem Boden steht).',
        'Taubheit, Kribbeln oder ein Gefühl von Instabilität im Sprunggelenk.',
      ],
    },
    {
      h2: 'Helfen Schuhe und Einlagen bei Plattfüßen?',
      paragraphs: [
        'Stützende Schuhe mit fester Zwischensohle und etwas Gewölbestütze können Stehen und Gehen mit Plattfüßen angenehmer machen. Sie verändern das Gewölbe auf Dauer nicht, aber sie nehmen den Gewölbemuskeln im Laufe des Tages Arbeit ab.',
        'Einlagen von der Stange gibt es überall, und sie sind günstig. Maßeinlagen, nach einem Abdruck deines Fußes gefertigt, kosten mehr und werden manchmal bei Tibialis-posterior-Dysfunktion empfohlen. Die Belege für Einlagen speziell bei Plattfüßen sind dünner, als die meisten denken. Bei Plantarfasziitis rät die Leitlinie von 2023 zu Fersenschmerzen davon ab, Einlagen allein als kurzfristige Lösung einzusetzen (B dagegen), gibt einer kombinierten Behandlung mit Einlagen aber ein C.',
        'Wenn deine Plattfüße nicht wehtun, brauchst du keine besonderen Schuhe. Wenn Stehen oder Gehen das Gewölbe oder das Sprunggelenk schmerzen lässt, ist ein Schuh mit fester Sohle und leichter Gewölbestütze ein vernünftiger erster Schritt, den du ausprobieren kannst, bevor du mehr Geld für Maßeinlagen ausgibst. Schuhe mit sehr flacher Sohle ohne Halt (dünne Sandalen, ausgetretene Turnschuhe) machen die Ermüdung im Gewölbe an langen Tagen meist schlimmer.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Welche Übungen helfen bei Plattfüßen?',
      paragraphs: [
        'Übungen bei Plattfüßen zielen auf die Muskeln, die das Gewölbe von unten stützen (die kleinen Fußmuskeln), und auf die Muskeln weiter oben, die steuern, wie der Fuß aufsetzt (Wade, Hüfte). Die besten Belege bisher kommen aus einer Studie mit 52\u00A0Personen mit flexiblen Plattfüßen, in der sechs Wochen kombinierter Übungen die Form des Gewölbes stärker veränderten als in einer Kontrollgruppe. Diese Studie umfasste Kurzer-Fuß-Übungen, Sprunggelenkstraining, Hüftkräftigung und Dehnen, zusammen gemacht.',
        'Eine Übersichtsarbeit von 2024 zum Kurzer-Fuß-Training allein war weniger ermutigend: Sie fand insgesamt keine klare Veränderung, und eine Verbesserung bei einem Gewölbemaß nur in Programmen über sechs Wochen. Die Schlussfolgerung: Ein kombiniertes Programm funktioniert besser als eine einzelne Übung, und Geduld zählt.',
        '[Plattfuß-Übungen](/de/plattfuss-uebungen/) hat die vollständige Übungsliste, die Dosis, was du jeweils spüren solltest und die Belege hinter jeder Übung. Walkito baut einen Wochenplan rund um das Ziel Gewölbehalten, vom kurzen Fuß im Sitzen über die Varianten im Stehen und auf einem Bein, dann kommen Widerstandsband und Hüftkräftigung dazu. Eigene Übungsseiten gehen tiefer:',
      ],
      bullets: [
        'Die [Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/) trainiert das Gewölbe, sich zu heben, ohne die Zehen einzukrallen.',
        'Das [Handtuchgreifen](/de/uebungen/handtuchgreifen/) weckt die kleinen Muskeln unter dem Gewölbe.',
        'Das [Zehenspreizen](/de/uebungen/zehen-spreizen/) trainiert die Muskeln zwischen den Zehen, die sich die Last mit dem Gewölbe teilen.',
        'Das [Einwärtsdrehen mit Band](/de/uebungen/einwaertsdrehen-mit-band/) kräftigt den Tibialis posterior, denselben Muskel, der beim erworbenen Plattfuß im Erwachsenenalter betroffen ist.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Verwandte Beschwerden',
      paragraphs: [
        'Plattfüße können sich mit anderen Fußproblemen überschneiden, vor allem bei langem Stehen oder Gehen. Wenn der Schmerz nahe der Ferse sitzt und dem Morgenmuster folgt (stechend bei den ersten Schritten, nach ein paar Minuten besser), passt das eher zu einer Plantarfasziitis. Einen vollständigen Überblick gibt [Plantarfasziitis](/de/plantarfasziitis/).',
      ],
      bullets: [
        '[Schmerzen im Fußballen](/de/metatarsalgie-vorfussschmerzen/) können von zu viel Last auf dem Vorfuß kommen, wenn das Gewölbe tief liegt. Eine verkürzte Wade verlagert das Gewicht nach vorn.',
        '[Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) behandelt Übungen und Schuhe, die helfen, wenn nach einem langen Tag auf hartem Boden das Gewölbe schmerzt.',
        '[Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/) geht auf die Belastung von 12-Stunden-Schichten ein.',
      ],
    },
    {
      h2: 'Alle Ratgeber zum Plattfuß auf dieser Seite',
      bullets: [
        '[Plattfuß-Übungen](/de/plattfuss-uebungen/) hat die vollständige Übungsliste mit Dosis, Steigerung und Bewertung der Belege.',
        '[Kurzer-Fuß-Übung](/de/uebungen/kurzer-fuss/) erklärt die wichtigste Bewegung für das Gewölbetraining im Detail.',
        '[Handtuchgreifen](/de/uebungen/handtuchgreifen/) erklärt die Handtuchübung für die kleinen Fußmuskeln.',
        '[Zehenspreizen](/de/uebungen/zehen-spreizen/) erklärt, wie gespreizte Zehen dem Gewölbe Last abnehmen.',
        '[Einwärtsdrehen mit Band](/de/uebungen/einwaertsdrehen-mit-band/) kräftigt den Tibialis posterior.',
        '[Schmerzen im Fußballen](/de/metatarsalgie-vorfussschmerzen/) behandelt Vorfußschmerzen, die sich mit Plattfüßen überschneiden, wenn sich die Last nach vorn verlagert.',
        '[Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) behandelt Übungen und Schuhe für lange Tage auf den Beinen.',
        '[Fußschmerzen in der Pflege](/de/fussschmerzen-pflege/) geht auf Fußschmerzen bei Beschäftigten im Gesundheitswesen ein.',
      ],
    },
  ],
  faq: [
    {
      q: 'Muss man sich wegen Plattfüßen Sorgen machen?',
      cites: [CITE.menz],
      a: 'Für die meisten Menschen nicht. Ein flexibler Plattfuß, der keine Schmerzen macht und dich nicht einschränkt, ist eine normale Fußform, keine Störung. Die Framingham Foot Study mit rund 1.900 Erwachsenen fand keinen Zusammenhang zwischen flacher Fußhaltung und Schmerzen im unteren Rücken (Menz und Kollegen, 2013). Beachtung brauchen starre Plattfüße und Gewölbe, die im Erwachsenenalter mit Schmerzen oder Schwellung abgesunken sind.',
    },
    {
      q: 'Was verursacht Plattfüße bei Erwachsenen?',
      cites: [CITE.ling],
      a: 'Die meisten Plattfüße bei Erwachsenen bestehen ein Leben lang und sind einfach so gewachsen. Wenn ein zuvor normales Gewölbe im Erwachsenenalter absinkt, ist die häufigste Ursache eine Tibialis-posterior-Dysfunktion: Die Sehne an der Innenseite des Sprunggelenks wird schwächer, das Gewölbe sinkt ab, und Schmerzen oder Schwellung können folgen (Ling und Lui, 2017). Weitere Ursachen sind Verletzungen, entzündliche Gelenkerkrankungen und Nervenerkrankungen.',
    },
    {
      q: 'Können Plattfüße Knie- oder Hüftschmerzen verursachen?',
      a: 'Ein tiefes Gewölbe verändert, wie die Kraft durch das Bein nach oben läuft, und manche Menschen mit stark pronierten Füßen bekommen Überlastungsbeschwerden an Knie, Schienbein oder Hüfte. Der Zusammenhang ist aber schwächer, als oft angenommen wird. Viele Menschen mit Plattfüßen haben keine Knie- oder Hüftprobleme. Wenn du beides hast, kann eine medizinische Fachperson prüfen, ob es bei dir zusammenhängt.',
    },
    {
      q: 'Wachsen sich Plattfüße bei Kindern aus?',
      cites: [CITE.salinasTorres],
      a: 'Meistens ja. Fast alle Kleinkinder haben Plattfüße, und das Gewölbe entwickelt sich meist bis zum Alter von etwa 6 bis 10\u00A0Jahren. Eine systematische Übersichtsarbeit von 2023 stellte fest, dass die Häufigkeit bei Kindern zwischen 3 und 5\u00A0Jahren am höchsten ist und bis ins Jugendalter abnimmt (Salinas-Torres und Kollegen, 2023). Ein Kind, das bis ins Teenageralter schmerzfreie, flexible Plattfüße hat, hat sehr wahrscheinlich kein Problem, das gelöst werden muss.',
    },
    {
      q: 'Sollte ich bei Plattfüßen Einlagen tragen?',
      cites: [CITE.guideline],
      a: 'Wenn deine Plattfüße nicht wehtun, sind Einlagen freiwillig. Wenn Stehen oder Gehen das Gewölbe schmerzen lässt, ist ein Schuh mit fester Sohle und leichter Gewölbestütze ein vernünftiger erster Schritt. Maßeinlagen werden manchmal bei Tibialis-posterior-Dysfunktion eingesetzt, aber die Belege für Einlagen bei Plattfüßen allein sind begrenzt. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Einlagen als alleinige Option mit B dagegen.',
    },
    {
      q: 'Was ist ein erworbener Plattfuß im Erwachsenenalter?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'Ein erworbener Plattfuß im Erwachsenenalter ist ein fortschreitendes Absinken des Gewölbes, meist weil die Tibialis-posterior-Sehne schwächer wird (Ling und Lui, 2017). Er bringt Schmerzen und Schwellung an der Innenseite des Sprunggelenks, Schwierigkeiten, auf einem Fuß auf die Zehen hochzukommen, und eine nach außen kippende Ferse. Klinische Leitlinien empfehlen für frühe Stadien eine nicht-operative Behandlung, hochwertige Studien sind aber rar (Ross und Kollegen, 2018).',
    },
    {
      q: 'Kann ich mit Plattfüßen joggen?',
      a: 'Viele Läuferinnen und Läufer haben Plattfüße und laufen ohne Probleme. Ein tiefes Gewölbe kann die Pronation verstärken, was manche mit Stabilitätsschuhen ausgleichen. Wenn Laufen Schmerzen im Gewölbe, im Sprunggelenk oder im Knie macht, die zwischen den Läufen nicht abklingen, kann eine medizinische Fachperson prüfen, ob der Plattfuß mitspielt. Gewölbe- und Hüftmuskeln zu kräftigen ist ein vernünftiger Ansatz, ob du die Schuhe wechselst oder nicht.',
    },
    {
      q: 'Gilt ein Plattfuß als Behinderung?',
      a: 'Meistens nicht. Die meisten Plattfüße machen keine Schmerzen und schränken nicht ein, deshalb erfüllen sie für sich allein keine Kriterien für eine Behinderung. Schwere oder starre Plattfüße, die dauerhaft Schmerzen machen und Gehen oder Stehen einschränken, können manchmal einen Antrag stützen, aber das hängt vom jeweiligen System, etwa beim Grad der Behinderung (GdB) in Deutschland, und von deiner Funktion insgesamt ab, nicht vom Plattfuß allein.',
    },
    {
      q: 'Bei welcher Herkunft sind Plattfüße häufiger?',
      cites: [CITE.salinasTorres],
      a: 'Plattfüße (Pes planus) kommen in manchen Gruppen häufiger vor, die Forschung dazu ist aber begrenzt. Eine systematische Übersichtsarbeit von 2023 zu Bevölkerungsstudien fand in getrennten Untergruppenvergleichen, dass asiatische Herkunft mit mehr als doppelt so hohen Odds für Plattfüße verbunden war und weiße Herkunft mit etwa halb so hohen Odds. Das sind Muster in Bevölkerungen, keine Vorhersage für die Füße eines einzelnen Menschen.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'sich ein Gewölbe im Erwachsenenalter plötzlich abgeflacht hat',
      'du Schmerzen oder eine Schwellung an der Innenseite des Sprunggelenks hast',
      'du auf der betroffenen Seite nicht auf einem Fuß stehen und auf die Zehen hochkommen kannst',
      'das Gewölbe flach bleibt, auch wenn der Fuß nicht auf dem Boden steht (starrer Plattfuß)',
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du Taubheit, Kribbeln oder Instabilität im Sprunggelenk hast',
      'beide Füße wehtun und andere Gelenke steif oder geschwollen sind',
      'der Schmerz trotz Übungen von Woche zu Woche schlimmer wird',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Du musst nicht selbst entscheiden, welche Gewölbeübungen du machst oder wann du zur schwereren Variante wechselst. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Bei einem flexiblen Plattfuß ist dieses Ziel das Gewölbehalten: dein Gewölbe 60\u00A0Sekunden oben halten. Wenn du auch Fersenschmerzen hast, kommen schmerzfreie Morgen zuerst.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage (alle 28, sobald das erste Ziel erreicht ist) prüft ein kurzer Test Gewölbehalten, Wadenausdauer und Gleichgewicht. Das Gewölbeziel bleibt im Plan, bis du es erreichst, egal wie viele Wochen das dauert.',
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn ein Gewölbe im Erwachsenenalter mit Schmerzen oder Schwellung abgesunken ist, geh zu einer medizinischen Fachperson, bevor du anfängst.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Plattfuß',
  campaign: 'hub-flat-feet-de',
};
