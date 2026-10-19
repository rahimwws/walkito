import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/can-plantar-fasciitis-cause-knee-pain.ts
 * (2026-10-19), written around «Plantarfasziitis Knieschmerzen»,
 * «Fersensporn Knieschmerzen», «Plantarfasziitis Hüftschmerzen» and
 * «Plantarfasziitis Rückenschmerzen». Informal «du», terminology and exercise
 * names as in `lib/guides/de.ts` and the other articles-de pages. Figures,
 * grades, hedges and sources are identical to the English page after its
 * fact-check, decimals with a comma. Same CITE keys and media ids. All links
 * have German targets.
 */

export const PF_KNEE_HIP_BACK_DE: Guide = {
  lang: 'de',
  page: 'pfKneeHipBack',
  mainSource: CITE.kamonseki,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Plantarfasziitis und Knieschmerzen: auch Hüfte und Rücken?',
  description:
    'Kann eine Plantarfasziitis Knie-, Hüft- oder Rückenschmerzen auslösen? Was Gangstudien zeigen, was unbewiesen ist, Übungen mit Dosierung, Warnzeichen.',
  h1: 'Kann eine Plantarfasziitis Knie-, Hüft- oder Rückenschmerzen verursachen?',
  lede:
    'Sie kann dazu beitragen, aber bewiesen hat das niemand. Eine schmerzende Ferse verändert, wie du gehst: Studien zur [Plantarfasziitis](/de/plantarfasziitis/) zeigen, dass Betroffene weniger Gewicht über die Ferse und mehr über den vorderen Fuß abgeben (Phillips und McClinton, 2017), und diese Verlagerung kann Knie, Hüfte und Rücken anders belasten. Keine Studie hat Menschen mit Fersenschmerzen begleitet, um zu sehen, ob später Knie-, Hüft- oder Rückenschmerzen beginnen. Die Belege sind also Zusammenhänge, kein Beweis für eine Ursache.',
  intro: [
    'Diese Seite geht Knie, Hüfte, Rücken, Wade und Sprunggelenk einzeln durch, sagt, was Studien gefunden haben und wie groß sie waren, erklärt, was die einzige Studie zum Hüftkrafttraining bei Plantarfasziitis bedeutet (Kamonseki und Kollegen, 2016), und nennt die passenden Übungen und Dosierungen. Wenn deine Knie- oder Rückenschmerzen zuerst da waren oder du Plattfüße hast, lies stattdessen [Plattfuß und Knieschmerzen](/de/plattfuss-knieschmerzen/) und [Plattfuß und Rückenschmerzen](/de/plattfuss-rueckenschmerzen/).',
  ],
  takeaways: [
    'In einer Übersichtsarbeit über 19\u00A0Gangstudien belasteten Menschen mit Schmerzen unter der Ferse die Ferse weniger und Mittelfuß und Vorfuß mehr, während die Standzeit auf jedem Fuß etwa gleich blieb (Phillips und McClinton, 2017).',
    'Bei 18\u00A0Menschen ohne Fußschmerzen reichte eine schmerzhafte Perle unter der Ferse, damit sie bei jedem Schritt kürzer auf diesem Bein standen (Levins und Kollegen, 1998).',
    'Von 40\u00A0Menschen mit Kniearthrose hatten 52\u00A0% Fersenschmerzen und 62\u00A0% eine verdickte Plantarfaszie im Ultraschall. Die Studie hatte keine Vergleichsgruppe und kann deshalb nicht zeigen, was was verursacht hat (Miladi und Kollegen, 2023).',
    'In einer Studie mit 83\u00A0Menschen mit Plantarfasziitis senkte Kräftigung von Fuß und Hüfte zusätzlich zum Dehnen die Fersenschmerzen über acht Wochen nicht stärker als Dehnen allein. Alle drei Gruppen besserten sich (Kamonseki und Kollegen, 2016).',
    'Eine verkürzte Wade ist der am besten untersuchte Zusammenhang: Menschen mit einer Beugung im Sprunggelenk von 0\u00A0Grad oder weniger hatten eine 23,3-fach höhere Chance auf eine Plantarfasziitis als Menschen mit mehr als 10\u00A0Grad (Riddle und Kollegen, 2003).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Kann eine Plantarfasziitis Schmerzen an anderen Stellen des Beins verursachen?',
      keyFact: 'Eine Übersichtsarbeit über 19\u00A0Gangstudien fand, dass Menschen mit Schmerzen unter der Ferse die Last von der Ferse zu Mittelfuß und Vorfuß verlagern (Phillips und McClinton, 2017).',
      paragraphs: [
        '**Wahrscheinlich manchmal, über die Art, wie du gehst.** Eine Plantarfasziitis wandert nicht das Bein hinauf. Was sich ändert, ist dein Gang. Wenn die Ferse wehtut, setzt du sanfter auf, drückst dich weniger kräftig ab und verlagerst das Gewicht auf den vorderen Fuß. Eine Übersichtsarbeit von 2017 über 19\u00A0Studien fand genau dieses Muster: weniger Last über die Ferse beim ersten Bodenkontakt und mehr Zeit und Last auf Mittelfuß und Vorfuß.',
        'Die Veränderung kann so klein sein, dass du sie nicht bemerkst. In dieser Übersichtsarbeit war die Gesamtzeit, die jeder Fuß am Boden verbrachte, etwa gleich wie bei Menschen ohne Fersenschmerzen. In einer Laborstudie gingen 18\u00A0Menschen ohne Fußschmerzen mit einer Perle unter der Ferse, und mit den größeren Perlen standen sie kürzer auf diesem Bein (Levins und Kollegen, 1998). Das ist ein leichtes Hinken, zumindest in einem kurzen Labortest mit plötzlichem Schmerz.',
        'So steht es um die Belege für jeden Bereich:',
      ],
      table: {
        caption: 'Plantarfasziitis und Schmerzen an anderen Stellen: was Studien zeigen',
        head: ['Bereich', 'Direkte Studien', 'Stärke'],
        rows: [
          ['Wade', 'Verkürzte Wade hängt mit Plantarfasziitis zusammen', 'Mäßig'],
          ['Sprunggelenk und Achillessehne', 'Dickere Faszie bei Veränderungen der Achillessehne', 'Gering'],
          ['Knie', 'Fersenschmerzen häufig bei Kniearthrose', 'Gering'],
          ['Hüfte', 'Andere Hüftkontrolle bei Läufern', 'Gering'],
          ['Rücken', 'Keine Studie bei Plantarfasziitis', 'Keine'],
        ],
      },
      after: [
        '„Gering“ heißt: kleine Studien, die beides zum selben Zeitpunkt gemessen haben. Sie zeigen, dass die beiden Probleme oft zusammen auftreten. Sie können nicht zeigen, dass die Ferse den anderen Schmerz verursacht hat oder umgekehrt.',
      ],
      cites: [CITE.phillipsGait, CITE.levinsGait],
    },
    {
      h2: 'Kann eine Plantarfasziitis Knieschmerzen verursachen?',
      keyFact: 'Von 40\u00A0Menschen mit Kniearthrose hatten 52\u00A0% Fersenschmerzen und 62\u00A0% eine verdickte Plantarfaszie im Ultraschall (Miladi und Kollegen, 2023).',
      paragraphs: [
        '**Beides tritt oft zusammen auf, aber keine Studie zeigt, dass die Ferse die Knieschmerzen verursacht.** Die Studie, die am nächsten herankommt, untersuchte 40\u00A0Menschen mit Kniearthrose. 21 von ihnen (52\u00A0%) hatten Fersenschmerzen, und ein Ultraschall zeigte bei 25 (62\u00A0%) eine verdickte Plantarfaszie. Menschen mit Plantarfasziitis hatten häufiger ein steifes Sprunggelenk, das sich schlecht nach oben beugen ließ (Miladi und Kollegen, 2023).',
        'Diese Studie hatte keine Vergleichsgruppe ohne Kniearthrose und kann deshalb nicht sagen, ob Fersenschmerzen häufiger sind als sonst. Die Autoren weisen darauf hin, dass beide Probleme Risikofaktoren teilen: höheres Alter, Gewicht, die Art der Arbeit und schlecht sitzende Schuhe. Ein steifes Sprunggelenk könnte das gemeinsame Bindeglied sein, statt dass ein Gelenk das andere verursacht.',
        'Wenn dein Knie auf derselben Seite zu schmerzen begann, nachdem die Fersenschmerzen angefangen hatten, und es besser wird, wenn sich die Ferse beruhigt, ist ein veränderter Gang eine vernünftige Vermutung. Wenn das Knie anschwillt, blockiert, hakt oder wegknickt, hat es ein eigenes Problem und braucht eine eigene Abklärung.',
        'Bei Schmerzen rund um die Kniescheibe empfiehlt die Leitlinie von 2019 zum patellofemoralen Schmerzsyndrom Übungen, die Hüfte und Knie kombinieren (Willy und Kollegen, 2019). Wenn du auch Plattfüße hast, steht die Fußseite des Themas Knie unter [Plattfuß und Knieschmerzen](/de/plattfuss-knieschmerzen/).',
      ],
      cites: [CITE.miladiKneeOa, CITE.willyPfpGuideline],
    },
    {
      h2: 'Kann eine Plantarfasziitis Hüftschmerzen verursachen?',
      keyFact: 'Läufer mit Plantarfasziitis zeigten eine geringere Aktivität des Gluteus medius und ein stärkeres Absinken des Beckens als Läufer ohne, in einer Studie mit 15 gegenüber 15 (Kongtong und Khongprasert, 2025).',
      paragraphs: [
        '**Es gibt einen Zusammenhang mit der Hüfte, aber was zuerst kommt, ist unbekannt.** Eine Laborstudie von 2025 verglich 15\u00A0Langstreckenläufer mit Plantarfasziitis mit 15 ohne. Die Läufer mit Fersenschmerzen setzten Gluteus medius und Gluteus maximus, die seitlichen und hinteren Hüftmuskeln, an bestimmten Punkten des Schritts weniger ein. Ihr Becken sank auf der anderen Seite stärker ab, und Knie und Ferse kippten stärker nach innen (Kongtong und Khongprasert, 2025).',
        'Das passt zu zwei Erklärungen, und die Studie kann nicht zwischen ihnen entscheiden. Eine schwache Hüftkontrolle könnte das Bein nach innen rollen lassen und das Gewölbe stärker belasten. Oder die Fersenschmerzen verändern, wie du läufst, und die Hüfte folgt. Keine Studie hat Hüftschmerzen bei Menschen mit Plantarfasziitis gemessen.',
        'Eine Studie von 2009 mit 25\u00A0Läuferinnen mit früherer Plantarfasziitis und 25 passenden Vergleichsläuferinnen fand, dass die Gruppe mit Plantarfasziitis mit einem schnelleren Kraftanstieg aufsetzte und niedrigere Gewölbe hatte, aber keinen Unterschied in der Bewegung des Rückfußes und, anders als in den Studien zur Wade, eine stärkere Beugung im Sprunggelenk (Pohl und Kollegen, 2009). Wer läuft, findet mehr unter [Fußübungen für Läufer](/de/fussuebungen-fuer-laeufer/).',
      ],
      cites: [CITE.kongtongHip, CITE.pohlRunners],
    },
    {
      h2: 'Kann eine Plantarfasziitis Rückenschmerzen verursachen?',
      keyFact: 'Keine Studie hat gemessen, ob eine Plantarfasziitis zu Schmerzen im unteren Rücken führt. Für Plattfüße fand die Framingham Foot Study mit 1.930\u00A0Erwachsenen keinen Zusammenhang mit der Fußhaltung im Stand (Menz und Kollegen, 2013).',
      paragraphs: [
        '**Wir haben keine Studie gefunden, die prüft, ob eine Plantarfasziitis zu Rückenschmerzen führt.** Manche Praxisseiten schreiben, dass ein Hinken durch Fersenschmerzen „häufig“ Rückenschmerzen verursacht. Das ist eine mögliche Kette, keine gemessene.',
        'Die nächstliegenden Belege betreffen die Fußform, nicht Fersenschmerzen. In der Framingham Foot Study hing eine flache Fußhaltung nicht mit Schmerzen im unteren Rücken zusammen, nur ein Fuß, der beim Gehen nach innen rollte, zeigte einen kleinen Zusammenhang, und zwar bei Frauen (Menz und Kollegen, 2013). Die Einzelheiten stehen unter [Plattfuß und Rückenschmerzen](/de/plattfuss-rueckenschmerzen/), deshalb wiederholen wir sie hier nicht.',
        'Schmerzen im unteren Rücken sind sehr häufig, und bei den meisten Menschen lässt sich keine einzelne Ursache finden (Hartvigsen und Kollegen, 2018). Wenn dein Rücken wehtut, ist die Ferse also ein möglicher Beitrag unter vielen. Bewegung ist bei lang anhaltenden Rückenschmerzen der am besten belegte Ansatz: Ein Cochrane-Review von 2021 über 249\u00A0Studien fand, dass Übungen den Schmerz um etwa 15\u00A0Punkte auf einer Skala von 100 senkten (Hayden und Kollegen, 2021).',
      ],
      cites: [CITE.menz, CITE.hartvigsen, CITE.haydenExercise],
    },
    {
      h2: 'Kann eine Plantarfasziitis Waden- oder Sprunggelenkschmerzen verursachen?',
      keyFact: 'Bei 254\u00A0Menschen mit Plantarfasziitis hatten 52 bis 60\u00A0Prozent einen isoliert verkürzten Gastrocnemius, den größeren Wadenmuskel (Patel und DiGiovanni, 2011).',
      paragraphs: [
        '**Die Wade ist der am besten untersuchte Zusammenhang, und er könnte von der Wade zur Ferse verlaufen.** Eine verkürzte Wade begrenzt, wie weit sich das Sprunggelenk beugt. In einer Fall-Kontroll-Studie mit 50\u00A0Menschen mit Plantarfasziitis und 100 ohne hatten Menschen mit einer Beugung im Sprunggelenk von 0\u00A0Grad oder weniger eine 23,3-fach höhere Chance auf eine Plantarfasziitis als Menschen mit mehr als 10\u00A0Grad (Riddle und Kollegen, 2003). Bei 254\u00A0Menschen mit Plantarfasziitis hatten 52 bis 60\u00A0Prozent einen isoliert verkürzten Gastrocnemius (Patel und DiGiovanni, 2011).',
        'Eine verkürzte Wade zusammen mit Fersenschmerzen ist also häufig, und sie zu dehnen gehört zum Plan bei Fersenschmerzen. Mehr dazu unter [verspannte Waden](/de/verspannte-waden/).',
        'Auch Plantarfaszie und Achillessehne hängen zusammen. In 52\u00A0MRT-Aufnahmen hatten Menschen mit Veränderungen der Achillessehne eine dickere Plantarfaszie, im Mittel 3,43\u00A0mm gegenüber 2,09\u00A0mm (Stecco und Kollegen, 2013). Wenn der Schmerz hinten an der Ferse sitzt statt darunter, lies [Plantarfasziitis oder Achillessehne](/de/plantarfasziitis-oder-achillessehne/).',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.steccoPfAchilles],
    },
    {
      h2: 'Hilft Hüftkrafttraining bei Plantarfasziitis?',
      keyFact: 'Bei 83\u00A0Menschen mit Plantarfasziitis besserten sich Schmerz und Funktion über acht Wochen mit Dehnen allein, mit Dehnen plus Fußkräftigung und mit Dehnen plus Fuß- und Hüftkräftigung, ohne Unterschied zwischen den Gruppen (Kamonseki und Kollegen, 2016).',
      paragraphs: [
        '**Für die Ferse selbst schnitt zusätzliches Hüfttraining in der einzigen Studie, die es getestet hat, nicht besser ab als Dehnen.** 2016 teilten Kamonseki und Kollegen 83\u00A0Menschen mit Plantarfasziitis für acht Wochen in drei Gruppen ein:',
        {
          list: [
            'Nur Dehnen.',
            'Dehnen plus Fußkräftigung.',
            'Dehnen plus Fußkräftigung und Hüftkräftigung (die Muskeln, die das Bein zur Seite heben und nach außen drehen).',
          ],
        },
        'Alle drei Gruppen besserten sich bei Fersenschmerzen, Alltagsfunktion und einem Reich- und Gleichgewichtstest, und keine Gruppe schnitt besser ab als die anderen.',
        'Was das in der Praxis bedeutet:',
        {
          list: [
            'Dehnen bleibt die Basis. Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade mit **A**, ihrem höchsten Empfehlungsgrad, und Krafttraining mit **B** (Koc und Kollegen, 2023).',
            'Hüfttraining ist keine Abkürzung für die Ferse. Eine Studie mit acht Wochen und 83\u00A0Menschen reicht nicht, um einen Nutzen auszuschließen, aber sie hat keinen gezeigt.',
            'Die Studie hat Knie-, Hüft- und Rückenschmerzen nicht gemessen. Wenn diese wehtun, ist Hüftkrafttraining trotzdem eine sinnvolle Ergänzung, und bei Schmerzen an der Kniescheibe stützt die Leitlinie für diese Beschwerde Übungen für Hüfte und Knie (Willy und Kollegen, 2019).',
          ],
        },
      ],
      cites: [CITE.kamonseki, CITE.guideline, CITE.willyPfpGuideline],
    },
    {
      h2: 'Welche Übungen helfen, wenn der Fersenschmerz das Bein hinaufzieht?',
      paragraphs: [
        'Fang bei der Ferse an: mit den Dehnungen und dem Wadentraining aus der Anleitung [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/). Nimm dann Hüft- und Gleichgewichtsübungen für das Bein darüber dazu. Die Dosierungen unten sind die Startdosierungen von Walkito aus den Anleitungen zu Fersenschmerzen und Plattfüßen.',
        'Bleib auf einem Niveau, bei dem die Ferse am nächsten Morgen nicht schlimmer ist. Wenn das Gehen selbst der Auslöser ist, erklärt [Gehen bei Plantarfasziitis](/de/gehen-bei-plantarfasziitis/), wie du in Bewegung bleibst, ohne einen Schub auszulösen.',
      ],
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse, deshalb ist diese Dehnung wichtig, auch wenn du sie weiter oben spürst.',
          stop: 'Stechender Fersenschmerz oder Wadenschmerz, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'In den meisten Einheiten',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Stechender Fersenschmerz oder Wadenschmerz, der bleibt, nachdem du aufgehört hast',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde nicht allein getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'An Krafttagen',
          feel: 'Beide Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, drück dich gerade über die großen Zehen nach oben und senk dich langsam ab. Beide Füße teilen sich die Last, während die Wade in Gang kommt.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben beidbeinig: gerade über die großen Zehen nach oben, dann langsam absenken',
          alt: 'Eine stehende Figur hebt sich auf die Zehen beider Füße, die Wade ist hervorgehoben',
        },
        {
          name: 'Hüftabduktion',
          evidence: { level: 'early', why: 'Hüftkräftigung war Teil einer Studie zur Plantarfasziitis (Kamonseki 2016), brachte bei Fersenschmerzen über acht Wochen aber keinen Zusatznutzen zum Dehnen.' },
          dose: '3\u00A0Sätze à 10, jedes Bein',
          often: 'An Krafttagen',
          feel: 'Arbeit an der Außenseite der Hüfte',
          how: 'Stell dich mit einem Widerstandsband hin und heb ein Bein gegen das Band zur Seite. Drück über die Ferse, nicht über die Zehen. Halt den Oberkörper aufrecht und lehn dich nicht zur Seite. Eine Hüfte, die nachgibt, verlagert die Last aufs Gewölbe.',
          stop: 'Stechender Schmerz in Hüfte oder Leiste',
          image: 'Übung: Hüftabduktion',
          media: 'hip_abduction',
          caption: 'Hüftabduktion: ein Bein gegen das Band zur Seite heben',
          alt: 'Eine stehende Figur mit einem Band um beide Beine hebt ein Bein zur Seite, die äußere Hüfte ist hervorgehoben',
        },
        {
          name: 'Einbeinstand',
          evidence: { level: 'early', why: 'Eigene Ergänzung von Walkito. Das Gleichgewicht verbesserte sich in allen Gruppen der Studie von 2016, aber dieses Halten wurde nicht allein getestet.' },
          dose: '3-mal 20\u00A0Sekunden halten, jedes Bein',
          often: 'An Gleichgewichtstagen',
          feel: 'Kleine Korrekturen in Fuß, Sprunggelenk und Hüfte',
          how: 'Stell dich auf einen Fuß und schau auf einen Punkt vor dir. Lass den Fuß wackeln. Das soll er, denn dieses Wackeln ist der Fuß, der das Gleichgewicht hält. Halt das Becken waagerecht, damit die Hüfte auf der Standseite mitarbeitet. Berühr eine Arbeitsplatte oder Wand leicht mit den Fingerspitzen, wenn du es brauchst. Mehr unter [Einbeinstand](/de/uebungen/einbeinstand/).',
          stop: 'Stechender Schmerz in Fuß oder Sprunggelenk, nicht nur Wackeln',
          image: 'Übung: Einbeinstand',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: auf einem Fuß stehen und ihn kleine Korrekturen machen lassen',
          alt: 'Eine Figur balanciert auf einem Bein, die Muskeln des Unterschenkels sind hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.kamonseki],
    },
    {
      h2: 'Woran erkennst du, dass Knie-, Hüft- oder Rückenschmerzen nicht von der Ferse kommen?',
      keyFact: 'Ernste Ursachen von Rückenschmerzen sind selten, und ein internationaler Rahmen nennt die Warnzeichen, auf die Ärztinnen und Ärzte zuerst achten (Finucane und Kollegen, 2020).',
      paragraphs: [
        'Ein veränderter Gang ist nur eine Erklärung. Diese Zeichen sprechen für ein eigenes Problem, das eine eigene Abklärung braucht:',
        {
          list: [
            '**Der andere Schmerz war zuerst da** oder hat nichts damit zu tun, wie viel du gehst.',
            '**Das Knie schwillt an, blockiert, hakt oder knickt weg.** Das sind Zeichen für ein Problem im Knie selbst.',
            '**Der Schmerz sitzt in der Leiste,** oder die Hüfte ist steif, wenn du Socken oder Schuhe anziehst.',
            '**Schmerz zieht unterhalb des Knies ins Bein, mit Taubheit, Kribbeln oder Schwäche.** Das kann von einem Nerv im Rücken kommen, und Fersenschmerz mit Brennen oder Kribbeln kann ebenfalls Nervenschmerz sein.',
            '**Schmerz nachts oder in Ruhe,** der nicht nachlässt, wenn du die Position wechselst. Siehe auch [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/).',
          ],
        },
        'Ärztinnen und Ärzte nutzen eine kurze Liste von Warnzeichen, um seltene ernste Probleme der Wirbelsäule auszuschließen (Finucane und Kollegen, 2020). Sie stehen in der Liste unten.',
      ],
      cites: [CITE.finucaneRedFlags],
    },
  ],
  faq: [
    {
      q: 'Kann eine Plantarfasziitis Knieschmerzen verursachen?',
      cites: [CITE.phillipsGait, CITE.miladiKneeOa],
      a: 'Sie kann dazu beitragen, aber bewiesen ist es nicht. Fersenschmerzen verlagern die Last beim Gehen zum vorderen Fuß, und das verändert, wie das Knie belastet wird. Von 40\u00A0Menschen mit Kniearthrose hatten 52\u00A0% Fersenschmerzen, aber ohne Vergleichsgruppe kann die Studie nicht zeigen, dass das eine das andere verursacht hat.',
    },
    {
      q: 'Kann eine Plantarfasziitis Hüftschmerzen verursachen?',
      cites: [CITE.kongtongHip],
      a: 'Möglicherweise, aber keine Studie hat Hüftschmerzen bei Menschen mit Plantarfasziitis gemessen. Eine Studie von 2025 mit 15\u00A0Läufern mit Plantarfasziitis und 15 ohne fand in der Gruppe mit Fersenschmerzen eine geringere Aktivität der seitlichen Hüftmuskeln und ein stärkeres Absinken des Beckens. Was zuerst kam, konnte sie nicht klären.',
    },
    {
      q: 'Kann eine Plantarfasziitis Schmerzen im unteren Rücken verursachen?',
      cites: [CITE.menz, CITE.hartvigsen],
      a: 'Keine Studie hat das getestet. Ein Hinken durch Fersenschmerzen könnte zusätzlich belasten, aber diese Kette wurde nicht gemessen. Bei den meisten Menschen mit Schmerzen im unteren Rücken findet sich keine einzelne Ursache, und in der Framingham Foot Study hing eine flache Fußhaltung nicht mit Rückenschmerzen zusammen.',
    },
    {
      q: 'Kann eine Plantarfasziitis Wadenschmerzen verursachen?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Eine verkürzte Wade geht oft mit einer Plantarfasziitis einher, und der Zusammenhang könnte von der Wade zur Ferse verlaufen. Die Studien haben die Verkürzung gemessen, nicht Wadenschmerzen. Menschen mit einer Beugung im Sprunggelenk von 0\u00A0Grad oder weniger hatten eine 23,3-fach höhere Chance auf eine Plantarfasziitis, und 52 bis 60\u00A0Prozent von 254\u00A0Betroffenen hatten einen verkürzten Gastrocnemius.',
    },
    {
      q: 'Können Fersenschmerzen Schmerzen im anderen Bein verursachen?',
      cites: [CITE.levinsGait],
      a: 'Theoretisch ja. Wenn eine Ferse wehtut, stehst du vielleicht kürzer auf diesem Bein, wie ein kurzer Labortest mit 18\u00A0Menschen und einer schmerzhaften Perle unter der Ferse gezeigt hat. Keine Studie hat Schmerzen im anderen Bein bei Menschen mit Plantarfasziitis gemessen.',
    },
    {
      q: 'Helfen Hüftübungen bei meiner Plantarfasziitis?',
      cites: [CITE.kamonseki],
      a: 'Für die Ferse selbst nicht, soweit die einzige Studie dazu zeigt. Bei 83\u00A0Menschen über acht Wochen senkte Fuß- und Hüftkräftigung zusätzlich zum Dehnen die Fersenschmerzen nicht stärker als Dehnen allein, und alle Gruppen besserten sich. Hüfttraining kann trotzdem sinnvoll sein, wenn auch dein Knie oder deine Hüfte wehtut.',
    },
    {
      q: 'Soll ich zuerst an der Ferse oder am Knie arbeiten?',
      cites: [CITE.guideline, CITE.willyPfpGuideline],
      a: 'Du kannst an beidem gleichzeitig arbeiten. Dehnungen für die Ferse und Wadenkraft haben in der Leitlinie von 2023 zu Fersenschmerzen Empfehlungsgrad A und B, und bei Schmerzen an der Kniescheibe werden Übungen für Hüfte und Knie empfohlen. Wenn das Knie anschwillt, blockiert oder wegknickt, lass es abklären, statt zu warten, bis sich die Ferse beruhigt.',
    },
    {
      q: 'Kann eine Plantarfasziitis Schmerzen am Sprunggelenk verursachen?',
      cites: [CITE.steccoPfAchilles],
      a: 'Schmerzen hinten an der Ferse oder rund um die Achillessehne können mit einer Plantarfasziitis einhergehen. In 52\u00A0MRT-Aufnahmen hatten Menschen mit Veränderungen der Achillessehne eine dickere Plantarfaszie, im Mittel 3,43\u00A0mm gegenüber 2,09\u00A0mm. Schmerzen seitlich am Sprunggelenk nach einem Umknicken sind ein anderes Problem.',
    },
  ],
  redFlags: {
    h2: 'Lass es zuerst ärztlich abklären, wenn',
    bullets: [
      'die Knie-, Hüft- oder Rückenschmerzen zuerst da waren oder sich nicht danach richten, wie viel du gehst',
      'das Knie anschwillt, blockiert, hakt oder wegknickt oder du es nicht ganz beugen oder strecken kannst',
      'Schmerz unterhalb des Knies ins Bein zieht oder du Taubheit, Kribbeln, Brennen oder Schwäche in Bein oder Fuß hast',
      'der Schmerz dich nachts aufweckt oder in Ruhe da ist und bei einem Positionswechsel nicht nachlässt',
      'du Rückenschmerzen mit Fieber, ungewolltem Gewichtsverlust oder einer Krebserkrankung in der Vorgeschichte hast',
      'du Taubheit im Bereich von Leiste oder Gesäß hast oder neue Probleme, Blase oder Darm zu kontrollieren: Geh sofort in die Notaufnahme',
      'der Schmerz nach einem Sturz, einem Umknicken oder einem Knacken begann oder du das Bein nicht belasten kannst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß mit den Übungen von dieser Seite: Waden- und Soleusdehnung, Fersenheben, Hüftabduktion und Einbeinstand. Sie arbeitet an der Ferse und am Bein darüber. Knie, Hüfte oder Rücken beurteilt sie nicht. Lass diese also abklären, wenn sie eigene Warnzeichen haben.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deine Fersenschmerzen am Morgen, und der Plan passt sich daran an. Ein Test alle 14\u00A0Tage vergleicht deine linke und rechte Seite. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['heelPain', 'flatFeetKneePain', 'flatFeetBackPain'],
  crumb: 'Plantarfasziitis und Knie-, Hüft- oder Rückenschmerzen',
  campaign: 'guide-can-plantar-fasciitis-cause-knee-pain-de',
};
