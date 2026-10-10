import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/haglunds.ts`, written around the German queries
 * «Haglundferse», «Haglund-Exostose», «Knochenvorsprung hinten an der Ferse».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts`.
 * Figures, doses, grades and qualifiers are identical to the English page.
 * No new citations.
 */

export const HAGLUNDS_DE: Guide = {
  lang: 'de',
  page: 'haglunds',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Haglundferse: Ursachen, Übungen und was hilft',
  description:
    'Die Haglundferse ist ein Knochenvorsprung hinten an der Ferse, oft mit Schleimbeutelentzündung und Achillesschmerz. Ursachen, Übungen, wann operiert wird.',
  h1: 'Haglundferse: der Höcker hinten an der Ferse, woher er kommt und was hilft',
  lede:
    'Die Haglundferse (Haglund-Exostose) ist ein knöcherner Vorsprung oben an der Rückseite des Fersenbeins. Sie sitzt genau dort, wo die Achillessehne ansetzt, und wenn Schuhe darauf drücken, wird der Schleimbeutel zwischen Knochen und Sehne gereizt. Die Folge sind Schmerzen hinten an der Ferse, Schwellung und manchmal ein sichtbarer Höcker, den manche „pump bump“ nennen. Konservative Behandlung ist der erste Schritt, aber die Belege dafür beruhen vor allem auf Expertenmeinungen, nicht auf Studien.',
  intro: [
    'Diese Seite erklärt die Anatomie, den Zusammenhang mit der insertionalen Achillessehnen-Tendinopathie und der Bursitis retrocalcanea, welche konservativen Schritte es gibt und wann eine Operation zur Sprache kommt. Wenn dein Schmerz weiter oben an der Sehne sitzt statt am Knochen, ist [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/) der bessere Ausgangspunkt. Wenn der Schmerz unter der Ferse sitzt, lies [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) oder [Fersenschmerzen am Morgen](/de/fersenschmerzen-morgens/).',
  ],
  takeaways: [
    'Die Haglundferse ist ein abnormer Knochenvorsprung am oberen hinteren Fersenbein, erstmals 1927 von Patrick Haglund beschrieben. Sie kann zu einer Bursitis retrocalcanea und einer insertionalen Achillessehnen-Tendinopathie führen (Yuen und Kollegen, 2022).',
    'Zur konservativen Behandlung gehören andere Schuhe (keine starren Fersenkappen), Fersenkeile, Dehnen und Krafttraining der Wade. Keine randomisierte Studie hat konservative Behandlung speziell bei der Haglundferse getestet (Choo und Kollegen, 2020).',
    'Bei insertionalem Achillesschmerz mit Haglundferse sollte das exzentrische Fersenabsenken auf Bodenhöhe bleiben. Eine tiefe Dorsalflexion drückt die Sehne gegen den Höcker (Jonsson und Kollegen, 2008).',
    'Eine Operation kommt infrage, wenn mindestens sechs Monate konservative Behandlung nicht geholfen haben. Eine systematische Übersichtsarbeit von 2022 fand, dass sowohl offene als auch endoskopische Verfahren die Funktionswerte verbesserten, wobei die endoskopischen Techniken eine kürzere Erholung zeigten (Yuen und Kollegen, 2022).',
    'Die Leitlinie von 2024 zur Achillessehnen-Tendinopathie bewertet Training bei der Tendinopathie im mittleren Sehnenabschnitt mit **A**, aber insertionale Fälle, zu denen die Haglundferse gehört, brauchen Anpassungen, um eine provozierende Dorsalflexion zu vermeiden (Chimenti und Kollegen, 2024).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Was ist eine Haglundferse?',
      figure: { id: 'haglund', caption: 'Die Haglundferse ist ein Knochenhöcker an der oberen hinteren Ecke des Fersenbeins. Der Schleimbeutel zwischen ihm und der Achillessehne kann eingeklemmt werden.', alt: 'Seitenansicht von Sprunggelenk und Ferse mit der Achillessehne, einem Knochenhöcker an der oberen hinteren Ecke des Fersenbeins und einem kleinen, mit Flüssigkeit gefüllten Beutel dazwischen.' },
      paragraphs: [
        'Die Haglundferse ist ein Knochenhöcker am oberen hinteren Teil des Calcaneus, der oberen hinteren Ecke des Fersenbeins. Zwischen diesem Höcker und der Achillessehne liegt ein kleiner, mit Flüssigkeit gefüllter Beutel, der Schleimbeutel hinter dem Fersenbein (Bursa retrocalcanea). Wenn der Höcker ausgeprägt ist, wird der Schleimbeutel zwischen Knochen und Sehne eingeklemmt, was eine Entzündung (Bursitis retrocalcanea) und Schmerzen hinten an der Ferse verursacht.',
        'Der Höcker selbst ist eine Variante der Knochenform. Manche Menschen haben ein ausgeprägteres Fersenbein als andere. Zum Problem wird er, wenn Schuhdruck, Belastung der Sehne oder beides den Schleimbeutel und den Sehnenansatz reizen. Die Kombination aus Knochenvorsprung, Bursitis und insertionaler Achillessehnen-Tendinopathie wird manchmal Haglund-Syndrom genannt.',
        'Im Englischen heißt der Höcker auch „pump bump“, nach Schuhen mit starrer Rückseite wie Pumps oder Anzugschuhen, die direkt auf den Vorsprung drücken. Aber er entsteht nicht nur durch Schuhe. Die Mechanik des Fußes, verkürzte Waden und die Belastung der Sehne spielen alle eine Rolle.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Wie hängt die Haglundferse mit der insertionalen Achillessehnen-Tendinopathie zusammen?',
      paragraphs: [
        'Haglundferse und insertionale Achillessehnen-Tendinopathie treten oft zusammen auf, **sind aber nicht dasselbe.** Die insertionale Tendinopathie ist Schmerz an der Stelle, wo die Achillessehne am Fersenbein ansetzt, meist durch Überlastung. Die Haglundferse ist eine Form des Knochens. Der Höcker kann die Sehne von hinten reizen, und der Sehnenansatz kann durch denselben Druck betroffen sein, der auch den Schleimbeutel entzündet.',
        'Der praktische Zusammenhang: Wenn du eine Haglundferse und Schmerzen hinten an der Ferse hast, kann der Schmerz vom Schleimbeutel, vom Sehnenansatz oder von beidem kommen. Eine medizinische Fachperson kann das unterscheiden, indem sie prüft, wo der Druckschmerz am stärksten ist und ob Dehnen oder Belasten den Schmerz auslöst.',
        'Die Leitlinie von 2024 zur Achillessehnen-Tendinopathie trennt klar zwischen Beschwerden im mittleren Sehnenabschnitt und am Ansatz. Bei Problemen am Ansatz, zu denen auch Fälle mit Haglundferse gehören, muss das übliche Protokoll mit exzentrischem Fersenabsenken angepasst werden. Eine tiefe Dorsalflexion, bei der die Ferse unter die Stufenkante sinkt, drückt die Sehne gegen den Knochen und kann die Beschwerden verschlimmern.',
      ],
      cites: [CITE.achillesGuideline, CITE.jonsson],
    },
    {
      h2: 'Was ist eine Bursitis retrocalcanea?',
      paragraphs: [
        'Der Schleimbeutel hinter dem Fersenbein liegt im Raum zwischen Calcaneus und Achillessehne. Seine Aufgabe ist es, Reibung zu verringern. Wenn die Haglundferse ausgeprägt ist, wird der Schleimbeutel bei der Dorsalflexion (wenn sich das Sprunggelenk so beugt, dass der Fuß nach oben kommt) zusammengedrückt. Die Folge sind Schwellung, Schmerzen und manchmal Rötung hinten an der Ferse.',
        'Eine Bursitis retrocalcanea kann auch ohne Haglundferse auftreten, zum Beispiel nach einer plötzlichen Steigerung beim Laufen oder beim Bergauflaufen. Aber der Knochenvorsprung macht sie wahrscheinlicher. Schuhe mit starrer Fersenkappe, die auf den Höcker drücken, sind ein direkter mechanischer Reiz.',
        'Der Schmerz bei einer Bursitis retrocalcanea sitzt hinten an der Ferse, tief zwischen Sehne und Knochen. Er unterscheidet sich von einer oberflächlichen Bursitis (eine empfindliche, weiche Schwellung direkt unter der Haut) und vom Schmerz an der Innenseite der Ferse bei Plantarfasziitis.',
      ],
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
    },
    {
      h2: 'Welche konservativen Möglichkeiten gibt es bei der Haglundferse?',
      paragraphs: [
        'Eine narrative Übersichtsarbeit von 2020 nennt die ersten konservativen Schritte:',
        {
          list: [
            '**Andere Schuhe:** keine Schuhe mit starrer Fersenkappe, Schuhe ohne Rückseite oder eine Polsterung im Fersenbereich.',
            '**Fersenkeile:** um die Spannung auf die Achillessehne zu verringern.',
            '**Dehnen:** von Gastrocnemius und Soleus.',
            '**Krafttraining:** der Wade.',
            '**Angepasste Aktivität.**',
          ],
        },
        'Keine randomisierte kontrollierte Studie hat eine dieser Maßnahmen speziell bei der Haglundferse getestet. Die Belege sind Expertenmeinungen und Fallserien. Die Übersichtsarbeit von 2022 zur Operation merkte an, dass die meisten Autoren mindestens sechs Monate konservative Behandlung empfehlen, bevor eine Operation erwogen wird.',
        '**Die schnellste Änderung ist oft der Schuh.** Wenn eine starre Fersenkappe auf den Höcker drückt, kann es die Beschwerden rasch verringern, diesen Druck wegzunehmen. Schuhe ohne Rückseite, Schuhe mit weicher oder flexibler Fersenkappe oder eine Polsterung im Schuh rund um den Höcker (nicht darüber) sind praktische Möglichkeiten.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
    {
      h2: 'Welche Übungen helfen bei einer Haglundferse?',
      keyFact: 'In einer Pilotstudie mit 27\u00A0Menschen mit insertionalem Achillesschmerz brachte exzentrische Belastung auf Bodenhöhe, die eine tiefe Dorsalflexion vermied, in 67\u00A0% der Fälle gute Ergebnisse (Jonsson und Kollegen, 2008).',
      paragraphs: [
        'Übungen bei der Haglundferse haben zwei Ziele: verkürzte Waden lockern, die an der Ferse ziehen, und Wadenkraft aufbauen, damit die Sehne Belastung besser verträgt. Beides ist aus der Forschung zur Achillessehnen-Tendinopathie übernommen. Keine Studie hat es speziell bei der Haglundferse getestet.',
        'Die wichtigste Anpassung: nur auf Bodenhöhe. Bei insertionalem Achillesschmerz testete eine Pilotstudie von 2008 mit 27\u00A0Menschen exzentrische Belastung ohne Dorsalflexion über die Neutralstellung hinaus, die Ferse sank also nie unter den Boden. In 67\u00A0% der Fälle wurden gute Ergebnisse berichtet. Das übliche Fersenabsenken über eine Stufenkante, bei dem die Ferse unter die Kante sinkt und das Sprunggelenk in eine tiefe Dorsalflexion kommt, kann die Sehne gegen den Höcker drücken und die Beschwerden verschlimmern.',
        'Die Seite [exzentrisches Fersenabsenken](/de/uebungen/exzentrisches-fersenabsenken/) erklärt die Bewegung genauer. Bei Haglundferse und Schmerz am Ansatz machst du jedes Fersenheben und -absenken auf Bodenhöhe. Senk dich nicht unter die Stufenkante ab. Auch das Wadendehnen sollte sanft sein und aufhören, bevor eine tiefe Dorsalflexion die Rückseite der Ferse reizt.',
      ],
      exercises: [
        {
          name: 'Exzentrisches Fersenabsenken (auf Bodenhöhe)',
          evidence: { level: 'early', why: 'Jonsson 2008 war eine kleine, unkontrollierte Pilotstudie (27\u00A0Patientinnen und Patienten, keine Vergleichsgruppe): Exzentrische Belastung nur auf Bodenhöhe, ohne Dorsalflexion über die Neutralstellung hinaus, brachte bei 67\u00A0% der Menschen mit insertionalem Achillesschmerz gute Ergebnisse. Keine kontrollierte Studie hat das bei der Haglundferse getestet, deshalb bleibt die Beleglage früh statt mittel.' },
          dose: 'Walkito beginnt mit 3 x 10, jedes Bein. Jonsson-Protokoll: 3 x 15, zweimal täglich, drei Monate',
          how: 'Stell dich auf ebenen Boden (nicht auf eine Stufenkante). Komm auf beiden Füßen hoch, verlagere das Gewicht auf das betroffene Bein und senk dich über drei Sekunden langsam ab. Die Ferse kehrt auf Bodenhöhe zurück, nicht darunter. Mit beiden Füßen wieder hoch. Zuerst mit gestrecktem Knie, Sätze mit gebeugtem Knie kommen dazu, sobald die mit gestrecktem Knie gut machbar sind.',
          often: 'Krafttage. Jonsson-Protokoll: zweimal täglich.',
          feel: 'Arbeit in der Wade beim Absenken. Etwas Unbehagen an der Sehne ist in Ordnung, wenn es bis zum nächsten Morgen abklingt.',
          stop: 'Schmerz hinten an der Ferse über 5/10 oder Schmerz, der über Nacht nicht abklingt',
          media: 'heel_drop_straight',
          caption: 'Exzentrisches Fersenabsenken auf Bodenhöhe: auf beiden Füßen hoch, auf einem langsam runter, die Ferse bleibt auf Bodenhöhe',
          alt: 'Eine Figur senkt eine Ferse langsam vom Zehenstand zurück auf Bodenhöhe, die Achillessehne ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Von der Leitlinie als Teil der Belastungssteigerung bei Achillessehnenbeschwerden gestützt. Nicht direkt bei der Haglundferse getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          how: 'Stell dich mit beiden Füßen auf ebenen Boden. Komm gerade über die großen Zehen hoch und senk dich über drei Sekunden langsam ab. Beide Füße teilen sich die Last. Das ist der Einstieg mit weniger Last vor dem einbeinigen exzentrischen Training.',
          often: 'An den meisten Tagen der Woche, solange diese Stufe noch fordernd ist',
          feel: 'Die Waden arbeiten zusammen, ein leichter Zug an der Sehne',
          stop: 'Schmerz hinten an der Ferse über 5/10',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig auf Bodenhöhe',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Wadendehnung (Knie gestreckt, sanft)',
          evidence: { level: 'early', why: 'Laut Expertenempfehlung Teil der konservativen Behandlung der Haglundferse. Keine randomisierte Studie zu dieser Erkrankung. Tiefe Dorsalflexion vermeiden.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Hände an die Wand. Mach mit einem Fuß einen Schritt zurück, das hintere Bein bleibt gestreckt, die Ferse unten. Lehn dich nach vorn, bis du eine Dehnung in der oberen Wade spürst. Hör auf, bevor die Dehnung die Rückseite des Fersenbeins erreicht. Drück das Sprunggelenk nicht in eine tiefe Beugung.',
          often: 'Täglich, nach dem Krafttraining',
          feel: 'Eine Dehnung in der Wade, kein Schmerz am Ansatz der Achillessehne',
          stop: 'Jede Reizung hinten am Fersenbein',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: sanft bleiben, aufhören, bevor die Rückseite der Ferse gereizt wird',
          alt: 'Eine Figur lehnt sich an eine Wand, ein Bein gestreckt hinten, die Wadenmuskeln sind hervorgehoben',
        },
        {
          name: 'Soleusdehnung (Knie gebeugt, sanft)',
          evidence: { level: 'early', why: 'Zielt auf den tieferen Wadenmuskel. Dieselbe Vorsicht: Bei Schmerz am Ansatz tiefe Dorsalflexion vermeiden.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          how: 'Dieselbe Position an der Wand, beug das hintere Knie, bis die Dehnung tiefer wandert. Hör vor dem Punkt auf, an dem die Rückseite der Ferse zusammengedrückt wird. Der Soleus lässt nur mit gebeugtem Knie los.',
          often: 'Täglich, nach der Wadendehnung',
          feel: 'Eine Dehnung in der unteren Wade, nicht am Fersenbein',
          stop: 'Schmerz am Ansatz der Achillessehne oder am Höcker',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bleib an der Ferse sanft',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die untere Wade ist hervorgehoben',
        },
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline, CITE.chooRearfoot],
    },
    {
      h2: 'Wie viel Schmerz ist bei den Übungen in Ordnung?',
      keyFact: 'Das Schmerz-Monitoring-Modell erlaubt bei Belastung Schmerz bis etwa 5 von 10, solange er bis zum nächsten Morgen auf den Ausgangswert zurückgeht und nicht von Woche zu Woche schlimmer wird (Silbernagel und Kollegen, 2007).',
      paragraphs: [
        'Das Schmerz-Monitoring-Modell von Silbernagel 2007 für die Achillessehnen-Tendinopathie erlaubte bei Belastung Schmerz bis etwa 5 von 10, vorausgesetzt, er ging bis zum nächsten Morgen auf den Ausgangswert zurück und wurde nicht von Woche zu Woche schlimmer. Dieses Modell wurde bei Achillesschmerz im mittleren Sehnenabschnitt getestet, nicht speziell bei Haglundferse oder Schmerz am Ansatz, aber es ist die am häufigsten zitierte Schmerzgrenze in der Forschung zur Achillessehne.',
        'Bei Problemen am Ansatz mit Haglundferse solltest du vorsichtiger sein. Der Höcker bringt ein mechanisches Element mit, das die Tendinopathie im mittleren Sehnenabschnitt nicht hat: Schleimbeutel und Sehne werden gegen den Knochen gedrückt. Wenn die Übungen einen stechenden Schmerz hinten an der Ferse auslösen, der nicht schnell abklingt, nimm Last raus oder wechsle zu isometrischem Halten, bevor du das exzentrische Training wieder versuchst.',
      ],
      cites: [CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Wann wird bei einer Haglundferse eine Operation erwogen?',
      keyFact: 'Eine systematische Übersichtsarbeit von 2022 mit 20\u00A0Studien fand, dass sowohl offene als auch endoskopische Operationen die AOFAS-Funktionswerte verbesserten, wobei die endoskopischen Techniken eine kürzere Erholung zeigten (Yuen und Kollegen, 2022).',
      paragraphs: [
        'Über eine Operation wird gesprochen, wenn mindestens sechs Monate konservative Behandlung keine ausreichende Linderung gebracht haben. Die systematische Übersichtsarbeit von 2022 von Yuen und Kollegen umfasste 20\u00A0Studien und fand, dass sowohl offene als auch endoskopische Techniken die AOFAS-Werte (American Orthopaedic Foot and Ankle Society) verbesserten. Endoskopische Verfahren zeigten kürzere Erholungszeiten.',
        'Bei der Operation wird meist:',
        {
          list: [
            'Der Knochenvorsprung entfernt (Kalkaneoplastik).',
            'Der entzündete Schleimbeutel herausgenommen.',
            'In manchen Fällen die Achillessehne gereinigt oder neu befestigt.',
          ],
        },
        'Zu den Komplikationen können Wundheilungsstörungen, Nervenverletzungen und eine geschwächte Sehne gehören. Die Entscheidung triffst du gemeinsam mit deiner Chirurgin oder deinem Chirurgen.',
        'Diese Seite empfiehlt eine Operation weder noch rät sie davon ab. Die konservativen Schritte oben sind der Anfang für die meisten, und viele sprechen gut genug darauf an, um eine Operation zu vermeiden. Wenn sechs Monate mit anderen Schuhen, Übungen und angepasster Aktivität nicht geholfen haben, kann eine Fachärztin oder ein Facharzt für Fuß und Sprunggelenk operative Möglichkeiten besprechen.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Können Schuhe eine Haglundferse verursachen?',
      paragraphs: [
        'Schuhe erzeugen den Knochenvorsprung nicht. Die Form des Fersenbeins ist teilweise genetisch bedingt. Aber Schuhe mit starrer, unnachgiebiger Fersenkappe können einen Höcker reizen, der sonst schmerzlos wäre. Daher kommt der englische Name „pump bump“, nach der starren Rückseite von Pumps.',
        'Schuhe, die du meiden solltest: alles mit einer steifen, engen Fersenkappe, die hinten auf die Ferse drückt. Schuhe, nach denen du suchen solltest: weiche oder gepolsterte Fersenränder, leicht offene oder flexible Rückseiten und genug Platz, damit die Fersenkappe nicht einschneidet. Fersenkeile im Schuh können die Achillessehne auch ein wenig vom Höcker wegbewegen.',
        'Andere Schuhe sind der Schritt, den du am schnellsten umsetzen kannst, und der, der in den Expertenmeinungen am einheitlichsten empfohlen wird. **Wenn du den Druck wegnehmen kannst, kannst du den Schmerz oft verringern.**',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
  ],
  faq: [
    {
      q: 'Was ist ein Haglund-Höcker?',
      cites: [CITE.yuenHaglund],
      a: 'Haglund-Höcker oder im Englischen „pump bump“ ist ein umgangssprachlicher Name für die Haglundferse, einen knöchernen Vorsprung oben an der Rückseite des Fersenbeins. Der englische Name kommt von Schuhen mit starrer Ferse (Pumps), die auf den Höcker drücken und das Gewebe zwischen Knochen und Achillessehne reizen, was Schmerzen und Schwellung verursacht.',
    },
    {
      q: 'Ist die Haglundferse dasselbe wie eine Achillessehnenentzündung?',
      cites: [CITE.achillesGuideline, CITE.yuenHaglund],
      a: 'Nein. Die Haglundferse ist ein Knochenvorsprung am Fersenbein. Eine Achillessehnenentzündung ist Schmerz in der Sehne selbst, meist durch Überlastung. Beide treten oft zusammen auf, weil der Höcker die Sehne an ihrem Ansatz reizen kann. Die Leitlinie von 2024 behandelt die insertionale Achillessehnen-Tendinopathie, zu der die Haglundferse gehören kann, getrennt von Beschwerden im mittleren Sehnenabschnitt.',
    },
    {
      q: 'Geht eine Haglundferse ohne Operation weg?',
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
      a: 'Der Knochenhöcker geht ohne Operation nicht weg. Der Schmerz aber schon. Viele bekommen die Beschwerden mit anderen Schuhen, Fersenkeilen, Dehnen und Kräftigen der Wade und angepasster Aktivität in den Griff. Über eine Operation wird gesprochen, wenn mindestens sechs Monate konservative Behandlung keine Linderung gebracht haben.',
    },
    {
      q: 'Welche Übungen sollte man bei einer Haglundferse vermeiden?',
      cites: [CITE.jonsson],
      a: 'Vermeide Übungen, die das Sprunggelenk in eine tiefe Dorsalflexion bringen, bei der sich der Fuß über die Neutralstellung hinaus Richtung Schienbein beugt. Das übliche exzentrische Fersenabsenken über eine Stufenkante, bei dem die Ferse unter die Stufe sinkt, drückt die Sehne gegen den Höcker. Mach Fersenheben und -absenken nur auf Bodenhöhe. Vermeide kräftiges Wadendehnen, das die Rückseite der Ferse reizt.',
    },
    {
      q: 'Muss eine Haglundferse operiert werden?',
      cites: [CITE.yuenHaglund],
      a: 'Nicht immer. Konservative Behandlung ist der erste Schritt. Eine systematische Übersichtsarbeit von 2022 merkte an, dass die meisten Autoren mindestens sechs Monate konservative Behandlung empfehlen, bevor eine Operation erwogen wird. Bei der Operation werden der Knochenhöcker und der entzündete Schleimbeutel entfernt und manchmal die Sehne gereinigt. Sowohl offene als auch endoskopische Verfahren verbessern die Ergebnisse.',
    },
    {
      q: 'Welche Schuhe sind bei einer Haglundferse am besten?',
      cites: [CITE.chooRearfoot],
      a: 'Schuhe mit weicher, gepolsterter oder flexibler Fersenkappe. Meide Schuhe mit starrer Rückseite, die auf den Höcker drücken. Schuhe ohne Rückseite, Clogs oder Schuhe mit eingekerbtem Fersenrand können den direkten Druck verringern. Fersenkeile im Schuh können die Sehne ein wenig vom Vorsprung wegbewegen.',
    },
    {
      q: 'Was ist eine Bursitis retrocalcanea?',
      cites: [CITE.yuenHaglund],
      a: 'Eine Bursitis retrocalcanea ist eine Entzündung des mit Flüssigkeit gefüllten Schleimbeutels zwischen Achillessehne und Fersenbein. Eine Haglundferse macht sie wahrscheinlicher, weil der vorstehende Knochen den Schleimbeutel bei Bewegungen im Sprunggelenk einklemmt. Der Schmerz ist tief, sitzt hinten an der Ferse und wird oft durch Schuhe und Dorsalflexion schlimmer.',
    },
    {
      q: 'Was passiert, wenn man eine Haglundferse nicht behandelt?',
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
      a: 'Ohne Änderungen wird der Höcker nicht kleiner, und die Reibung durch den Schuh, die ihn gereizt hat, geht meist weiter. Schmerzen und Bursitis retrocalcanea können sich also weiter aufbauen. Eine lang anhaltende Reizung erhöht auch das Risiko einer insertionalen Achillessehnen-Tendinopathie. Der Knochenvorsprung selbst bildet sich mit konservativer Behandlung nicht zurück, die Beschwerden lassen aber oft nach, sobald Schuhe und Belastung angepasst sind.',
    },
    {
      q: 'Ist Gehen bei einer Haglundferse schlecht?',
      cites: [CITE.chooRearfoot],
      a: 'Gehen an sich schadet nicht, und aktiv zu bleiben ist meist in Ordnung. Entscheidend ist der Schuh: Eine starre oder niedrig geschnittene Fersenkappe, die am Höcker reibt, kann Schmerzen und Bursitis mit jedem Schritt verschlimmern. Auf Schuhe mit weicher oder offener Ferse umzusteigen, bringt meist mehr als völlige Ruhe.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'du ein plötzliches Knallen oder Schnappen gespürt hast oder das Gefühl hattest, jemand hätte dir hinten gegen das Bein getreten. Das kann auf einen Riss der Achillessehne hindeuten',
      'es hinten an der Ferse deutlich geschwollen, gerötet oder warm ist, vor allem mit Fieber',
      'der Schmerz trotz anderer Schuhe und konservativer Schritte über mehrere Wochen stetig schlimmer wird',
      'du dich nicht über die Zehen abdrücken oder normal gehen kannst',
      'der Schmerz in Ruhe da ist oder dich nachts weckt, was auf einen Ermüdungsbruch oder eine andere Erkrankung als eine Bursitis hindeuten kann',
      'Taubheit oder Kribbeln zu den Fersenschmerzen dazukommen',
      'du kürzlich Fluorchinolon-Antibiotika (wie Ciprofloxacin) genommen hast und neue Sehnenschmerzen hast',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Die Belastungssteigerung für die Wade bei Walkito geht vom Fersenheben im Sitzen über das beidbeinige Fersenheben, das Halten und das exzentrische Fersenabsenken bis zu weiteren Stufen. Bei Haglundferse und insertionalem Achillesschmerz bleibt jede Stufe auf Bodenhöhe, statt unter eine Stufenkante abzusinken. Walkito bringt dich eine Stufe höher, sobald sich zwei Einheiten auf einer Stufe leicht angefühlt haben, nicht nach festem Zeitplan.',
    more: [
      'Die Einheiten dauern 3, 5 oder 10\u00A0Minuten. Alle 14\u00A0Tage prüft ein Test Wadenausdauer und Gleichgewicht. Walkito ist ein Übungsprogramm. Es stellt keine Diagnose. Wenn du einen sichtbaren Höcker hinten an der Ferse hast und nicht sicher bist, woher der Schmerz kommt, lass ihn von einer medizinischen Fachperson untersuchen, bevor du anfängst zu belasten.',
    ],
    cta: 'Fang mit 3\u00A0Minuten am Tag an.',
  },
  crumb: 'Haglundferse',
  campaign: 'guide-haglunds-de',
};
