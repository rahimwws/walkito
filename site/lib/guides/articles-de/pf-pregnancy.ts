import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * German version of articles/pf-pregnancy.ts (2026-10-17), written around
 * «Fersenschmerzen Schwangerschaft» and «Plantarfasziitis Schwangerschaft».
 * Informal «du», terminology and exercise names as in `lib/guides/de.ts` and
 * the other articles-de pages. Figures, doses, grades, qualifiers and sources
 * are identical to the English page after its fact-check. Same CITE keys and
 * media ids; external links (FDA, ISMST, NHS) marked «(auf Englisch)».
 */

export const PF_PREGNANCY_DE: Guide = {
  lang: 'de',
  page: 'pfPregnancy',
  mainSource: CITE.segalPregnancy,
  published: '2026-10-17',
  updated: '2026-10-17',
  title: 'Fersenschmerzen in der Schwangerschaft: sichere Übungen',
  description:
    'Plantarfasziitis in der Schwangerschaft: warum sich der Fuß verändert, sichere Dehnungen, welche Schmerzmittel ab Woche 20 tabu sind und Warnzeichen.',
  h1: 'Plantarfasziitis in der Schwangerschaft: warum die Fersen wehtun und was du sicher tun kannst',
  lede:
    'Fersen- und Fußschmerzen sind in der Schwangerschaft häufig, und Dehnungen, die bei [Plantarfasziitis](/de/plantarfasziitis/) zu den Maßnahmen mit dem höchsten Empfehlungsgrad gehören, kannst du im Sitzen oder mit einer Hand an der Wand machen. In einer Studie hatten 31\u00A0% der Frauen, die ein Kind bekommen hatten, Fußschmerzen, gegenüber 22\u00A0% der Frauen, die nie schwanger waren (Vullo und Kollegen, 1996). Die Leitlinie von 2023 zu Fersenschmerzen gibt der Dehnung von Plantarfaszie und Wade ihren höchsten Empfehlungsgrad, **A**, behandelt aber die Schwangerschaft nicht. Sprich deshalb mit deiner Frauenärztin, deinem Frauenarzt oder deiner Hebamme, bevor du anfängst.',
  intro: [
    'Keine Studie hat gemessen, wie oft eine Plantarfasziitis selbst in der Schwangerschaft beginnt. Was Studien zeigen: Der Fuß verändert sich. In einer Gruppe von 49\u00A0Frauen sank das Fußgewölbe, der Fuß wurde länger, und die Veränderung war Monate nach der Geburt noch da (Segal und Kollegen, 2013). Diese Seite fasst zusammen, was bekannt ist, welche Übungen in die Schwangerschaft passen, was du meiden solltest und bei welchen Beschwerden im Bein du noch am selben Tag ärztliche Hilfe brauchst.',
  ],
  takeaways: [
    'Fußschmerzen waren bei Frauen, die ein Kind bekommen hatten, häufiger als bei Frauen, die nie schwanger waren (31\u00A0% gegenüber 22\u00A0%), und die meisten Bein- und Fußschmerzen begannen im zweiten oder dritten Trimester (Vullo und Kollegen, 1996).',
    'Bei 49\u00A0Frauen, gemessen im ersten Trimester und etwa viereinhalb Monate nach der Geburt, sank die Gewölbehöhe und die Fußlänge nahm zu. Der größte Teil der Veränderung ging auf die erste Schwangerschaft zurück (Segal und Kollegen, 2013).',
    'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Dehnung von Plantarfaszie und Wade mit Empfehlungsgrad **A** und Krafttraining mit **B**, erwähnt die Schwangerschaft aber nicht (Koc und Kollegen, 2023).',
    'Ab der 20.\u00A0Woche solltest du beim Training nicht lange flach auf dem Rücken liegen. Hör auf, wenn du Warnzeichen bemerkst, etwa Blutungen, Schwindel oder Schmerzen oder eine Schwellung in der Wade (ACOG, 2020).',
    'Die US-Arzneimittelbehörde FDA rät, NSAR (nichtsteroidale Antirheumatika) wie Ibuprofen ab der 20.\u00A0Schwangerschaftswoche zu meiden, es sei denn, deine Ärztin oder dein Arzt rät dazu (FDA, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Sind Fersenschmerzen in der Schwangerschaft häufig?',
      keyFact: 'Fußschmerzen hatten 31\u00A0% von 107\u00A0Frauen, die ein Kind bekommen hatten, gegenüber 22\u00A0% von 91\u00A0Frauen, die nie schwanger waren (Vullo und Kollegen, 1996).',
      paragraphs: [
        '**Fußschmerzen sind in der Schwangerschaft häufig, aber die Plantarfasziitis allein hat niemand gezählt.** In einer Fragebogenstudie von 1996 hatten 31\u00A0% von 107\u00A0Frauen, die kurz zuvor ein Kind bekommen hatten, Fußschmerzen, gegenüber 22\u00A0% von 91\u00A0Frauen, die nie schwanger waren. Bein- und Fußschmerzen insgesamt gaben 56\u00A0% gegenüber 37\u00A0% an.',
        'Die meisten dieser Schmerzen begannen später in der Schwangerschaft: 82\u00A0% im zweiten oder dritten Trimester. Die Autoren vermuteten, dass dieser Zeitpunkt eher auf die Mechanik eines schwereren, sich verändernden Körpers hindeutet als allein auf Hormone.',
        'In einer Studie von 2010, in der 100\u00A0Frauen nach der Geburt befragt wurden, berichtete mehr als die Hälfte von geschwollenen Füßen, Knöcheln und Beinen, einem unsicheren Gang und breiteren Füßen (Ponnapula und Boberg, 2010).',
        'Wenn deine Ferse bei den ersten Schritten am Morgen oder nach dem Sitzen am meisten wehtut, ist das das typische Muster der Plantarfasziitis. Schmerz, der nachts oder in Ruhe schlimmer ist, ist ein anderes Muster. Mehr dazu unter [Fersenschmerzen nachts](/de/fersenschmerzen-nachts/).',
      ],
      cites: [CITE.vulloPregnancy, CITE.ponnapulaPregnancy],
    },
    {
      h2: 'Warum kann die Schwangerschaft Fersenschmerzen auslösen?',
      keyFact: 'Von 49\u00A0Frauen hatten etwa viereinhalb Monate nach der Geburt 35 ein abgesunkenes Gewölbe und 30 längere Füße (Segal und Kollegen, 2013).',
      paragraphs: [
        '**Der klarste Befund: Das Gewölbe wird flacher und der Fuß länger.** Eine Studie von 2013 hat 49\u00A0Frauen im ersten Trimester und noch einmal etwa viereinhalb Monate nach der Geburt vermessen. Gewölbehöhe und Gewölbesteifigkeit nahmen ab, Fußlänge und Absinken des Gewölbes nahmen zu. 35 der 49 hatten ein abgesunkenes Gewölbe, und 30 hatten längere Füße, die meisten um 2 bis 10\u00A0Millimeter.',
        'Die Ursache ist weniger klar, als viele Websites behaupten. In dieser Studie hingen lockerere Gelenke und die Gewichtszunahme in der Schwangerschaft nicht damit zusammen, wie stark sich die Füße veränderten. [Gewicht](/de/gewicht-und-plantarfasziitis/) und langes Stehen sind bekannte Risikofaktoren für Plantarfasziitis im Allgemeinen (Koc und Kollegen, 2023), aber keine Studie hat sie in der Schwangerschaft untersucht.',
        'Schwellungen, ein schwererer Körper und ein veränderter Gang verändern, wie sich die Last über den Fuß verteilt. Die Plantarfaszie ist das Band unter dem Fuß, das das Gewölbe trägt. Ein flacheres Gewölbe und mehr Last können sie also stärker beanspruchen. Mehr dazu, wie ein flacheres Gewölbe auch nach der Geburt bleiben kann: [Plattfuß im Alter](/de/plattfuss-im-alter/).',
      ],
      cites: [CITE.segalPregnancy, CITE.guideline, CITE.ponnapulaPregnancy],
    },
    {
      h2: 'Welche Übungen bei Fersenschmerzen sind in der Schwangerschaft sicher?',
      paragraphs: [
        'Die Übungen unten stammen aus der Leitlinie zur Plantarfasziitis, die für Erwachsene allgemein geschrieben wurde, nicht für die Schwangerschaft. Alle machst du im Sitzen oder im Stehen mit einer Hand an der Wand, und bei keiner musst du auf dem Rücken liegen oder springen. **Frag zuerst deine Frauenärztin, deinen Frauenarzt oder deine Hebamme**, vor allem, wenn man dir geraten hat, dich weniger zu belasten.',
        'Dehnen gehört in der Leitlinie von 2023 zu den Maßnahmen mit dem höchsten Empfehlungsgrad bei Fersenschmerzen: Die Dehnung von Plantarfaszie und Wade bekommt ein **A**. Krafttraining für die Wade bekommt ein **B**. Die Studie zum Fersenheben, auf die sich diese Website stützt, hat eine Variante im Stehen getestet (Rathleff und Kollegen, 2015). Fersenheben im Sitzen ist ein leichterer Einstieg.',
        'Wenn du dich unsicher fühlst, halte eine Hand an der Wand oder an einer Stuhllehne. In einer Befragung von 2847\u00A0berufstätigen Frauen stürzten 26,6\u00A0% mindestens einmal während der Schwangerschaft (Dunning und Kollegen, 2003). Deshalb lässt diese Seite Einbeinstand und Hüpfen weg, bis deine Frauenärztin, dein Frauenarzt oder deine Hebamme sagt, dass das in Ordnung ist.',
      ],
      exercises: [
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. In der Schwangerschaft nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen zurück, bis du die Dehnung im Gewölbe spürst, nicht in der Wade. Mach die erste Dehnung auf der Bettkante, bevor dein Fuß den Boden berührt. Wenn der Bauch das Übereinanderlegen schwer macht, leg ein Handtuch um den Fußballen und zieh stattdessen sanft daran.',
          stop: 'Stechender Fersenschmerz oder eines der Warnzeichen aus der Liste unten',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen zurück, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes zurück, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Wadendehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. In der Schwangerschaft nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Eine Dehnung in der Wade',
          how: 'Leg die Hände an eine Wand. Das hintere Bein bleibt gestreckt, die hintere Ferse flach am Boden, die Hüfte nach vorn. Mach einen kürzeren Schritt zurück als sonst, wenn sich dein Gleichgewicht anders anfühlt.',
          stop: 'Schmerz in der Wade, der bleibt, nachdem du aufgehört hast, oder eine geschwollene Wade',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, hintere Ferse flach, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich mit gestrecktem hinterem Bein an eine Wand, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: { level: 'strong', why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Dehnen mit A, ihrem höchsten Empfehlungsgrad. In der Schwangerschaft nicht untersucht.' },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Eine Dehnung nah an der Ferse',
          how: 'Geh in dieselbe Position an der Wand, lass die hintere Ferse flach am Boden und beug dann das hintere Knie, bis du die Dehnung weiter unten spürst, nah an der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt sich nur mit gebeugtem Knie dehnen.',
          stop: 'Schmerz in der Wade, der bleibt, nachdem du aufgehört hast, oder eine geschwollene Wade',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: hintere Ferse flach, beug das hintere Knie, bis du es nah an der Ferse spürst',
          alt: 'Eine Figur in Schrittstellung mit gebeugten Knien, die unteren Waden sind hervorgehoben',
        },
        {
          name: 'Fersenheben im Sitzen',
          evidence: { level: 'moderate', why: 'Die Leitlinie von 2023 bewertet Krafttraining mit B. Diese Stufe wurde weder allein noch in der Schwangerschaft getestet.' },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: '3\u00A0Tage pro Woche, nie zwei Tage hintereinander',
          feel: 'Arbeit in der unteren Wade',
          how: 'Setz dich mit den Füßen flach auf den Boden und drück dich über die Fußballen nach oben. Die Hände auf den Knien geben zusätzlichen Widerstand. Mit gebeugtem Knie arbeitet vor allem der Soleus, der tiefere Wadenmuskel. Das ist ein leichterer Einstieg als das Fersenheben im Stehen, das in der Studie getestet wurde.',
          stop: 'Fersenschmerz über 6 von 10 oder am nächsten Morgen schlimmer',
          image: 'Übung: Fersenheben im Sitzen',
          media: 'heel_raise_seated',
          caption: 'Fersenheben im Sitzen: über die Fußballen nach oben drücken',
          alt: 'Eine sitzende Figur hebt beide Fersen an, die Waden sind hervorgehoben',
        },
        {
          name: 'Handtuchgreifen',
          evidence: { level: 'early', why: 'Eine eigene Ergänzung von Walkito. Sie war nicht Teil der getesteten Programme und wurde in der Schwangerschaft nicht untersucht.' },
          dose: '3\u00A0Sätze à 8, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'An den meisten Tagen, an denen du trainierst',
          feel: 'Die kleinen Muskeln unter dem Gewölbe arbeiten',
          how: 'Setz dich hin, ein Handtuch liegt flach unter deinem Fuß auf dem Boden. Zieh das Handtuch mit den Zehen zu dir heran, die Ferse bleibt unten.',
          stop: 'Ein Krampf in Fuß oder Wade, der nicht nachlässt, wenn du aufhörst',
          image: 'Übung: Handtuchgreifen',
          media: 'towel_scrunch',
          caption: 'Handtuchgreifen: Zieh das Handtuch mit den Zehen heran, die Ferse bleibt unten',
          alt: 'Eine sitzende Figur zieht mit den Zehen eines Fußes ein Handtuch heran',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.dunningFalls],
    },
    {
      h2: 'Was solltest du bei Fersenschmerzen in der Schwangerschaft meiden?',
      keyFact: 'Das ACOG rät, ab der 20.\u00A0Woche beim Training nicht lange flach auf dem Rücken zu liegen, weil das den Blutdruck senken kann (ACOG, 2020).',
      paragraphs: [
        '**Ab der 20.\u00A0Woche solltest du beim Training nicht lange flach auf dem Rücken liegen.** Der US-Fachverband der Frauenärztinnen und Frauenärzte, das American College of Obstetricians and Gynecologists (ACOG), erklärt, dass das Gewicht der Gebärmutter auf eine große Vene drücken und den Blutdruck senken kann. Das ACOG rät außerdem von Aktivitäten mit hohem Sturzrisiko ab.',
        '**Frag nach, bevor du ein Schmerzmittel nimmst.** Die US-Arzneimittelbehörde FDA [rät, NSAR zu meiden](https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic) (auf Englisch), etwa Ibuprofen und Naproxen, und zwar ab der 20.\u00A0Schwangerschaftswoche, weil sie in seltenen Fällen schwere Nierenprobleme beim Baby verursachen und das Fruchtwasser verringern können. Die Warnung gilt nicht für niedrig dosiertes Aspirin, das dir deine Ärztin oder dein Arzt verschrieben hat.',
        '**Frag nach, bevor du eine Stoßwellentherapie oder eine Spritze bekommst.** Die Internationale Gesellschaft für medizinische Stoßwellentherapie (ISMST) schließt die Behandlung nur aus, wenn sich [ein Fötus im behandelten Bereich befindet](https://shockwavetherapy.org/indications/) (auf Englisch), nicht wegen der Schwangerschaft selbst. Wir haben keine Studien zur Stoßwellentherapie bei Fersenschmerzen in der Schwangerschaft gefunden. Für Kortisonspritzen gibt es keine Empfehlung zur Schwangerschaft speziell bei Fersenschmerzen. Eine Übersichtsarbeit sagt, dass eine einzelne örtliche Spritze nicht schon wegen der Schwangerschaft selbst ausgeschlossen ist. Die Entscheidung liegt also bei deiner Ärztin oder deinem Arzt (Filippini und Kollegen, 2023).',
        'Hör mit dem Training auf und ruf deine Frauenärztin, deinen Frauenarzt oder deine Hebamme an, wenn du eines der Warnzeichen bemerkst, die das ACOG nennt, darunter Blutungen aus der Scheide, regelmäßige schmerzhafte Wehen, Abgang von Flüssigkeit, Schwindel, Schmerzen in der Brust oder Schmerzen oder eine Schwellung in der Wade.',
      ],
      cites: [CITE.acogExercise, CITE.filippiniInjections],
    },
    {
      h2: 'Helfen Schuhe oder Einlagen bei Fersenschmerzen in der Schwangerschaft?',
      paragraphs: [
        'Keine Studie hat Einlagen oder Schuhe bei Fersenschmerzen in der Schwangerschaft getestet. Die Studie, die dem am nächsten kommt, teilte 72\u00A0Schwangere in zwei Gruppen ein: maßgefertigte Einlagen mit Gewölbestütze oder ihre üblichen Schuhe. Sie hat die Form des Gewölbes gemessen, nicht den Schmerz, und keinen Unterschied zwischen den Gruppen gefunden (Segal und Kollegen, 2018).',
        'Bei Fersenschmerzen im Allgemeinen bewertet die Leitlinie von 2023 Einlagen allein mit **Empfehlungsgrad B gegen die Anwendung**: Die Belege sprechen dagegen, sich nur auf sie zu verlassen. Kombiniert mit Dehnen und Krafttraining bekommen sie ein **C** (Koc und Kollegen, 2023). [Einlagen oder Übungen](/de/einlagen-oder-uebungen/) vergleicht beides.',
        'Ein praktischer Punkt wird von den Fußmessungen gestützt: Bei vielen Frauen wurden die Füße länger, bei den meisten um 2 bis 10\u00A0Millimeter (Segal und Kollegen, 2013). Wenn deine Schuhe jetzt eng sind oder auf die Ferse drücken, lohnt es sich, als Erstes Schuhe zu suchen, die zu deinen Füßen passen, so wie sie jetzt sind.',
      ],
      cites: [CITE.segalInsolesPregnancy, CITE.guideline, CITE.segalPregnancy],
    },
    {
      h2: 'Gehen Fersenschmerzen nach der Schwangerschaft weg?',
      paragraphs: [
        'Wir haben keine Studie gefunden, die Fersenschmerzen oder Plantarfasziitis nach der Geburt verfolgt. Es gibt also keine Zahl dazu, wie viele Frauen wieder beschwerdefrei werden und wie schnell.',
        'Die Veränderungen der Fußform blieben: Etwa viereinhalb Monate nach der Geburt war das Gewölbe noch flacher und der Fuß noch länger als im ersten Trimester, vor allem nach einer ersten Schwangerschaft (Segal und Kollegen, 2013). Bei Plantarfasziitis im Allgemeinen wird es bei etwa 90\u00A0% der Menschen mit Behandlung ohne Operation besser, auch wenn das drei bis sechs Monate dauern kann. Mehr unter [wie lange eine Plantarfasziitis dauert](/de/wie-lange-dauert-plantarfasziitis/).',
        'Nach der Geburt rät das ACOG, die Aktivität schrittweise wieder aufzubauen, sobald deine Frauenärztin, dein Frauenarzt oder deine Hebamme sagt, dass es sicher ist (ACOG, 2020). Die Dehnungen und Kraftübungen auf dieser Seite gelten weiterhin.',
      ],
      cites: [CITE.segalPregnancy, CITE.acogExercise, CITE.latt],
    },
    {
      h2: 'Wann sind Fuß- oder Beinschmerzen in der Schwangerschaft ein Notfall?',
      keyFact: 'Schmerzen und eine Schwellung in einer Wade können ein Blutgerinnsel sein, und eine plötzliche Schwellung von Gesicht, Händen oder Füßen kann eine Präeklampsie sein. Beides braucht noch am selben Tag ärztliche Hilfe (NHS).',
      paragraphs: [
        'Zwei Erkrankungen können aussehen wie gewöhnliche schmerzende, geschwollene Füße und brauchen dringend ärztliche Hilfe:',
        {
          list: [
            '**Ein Blutgerinnsel im Bein (tiefe Venenthrombose).** Pochender Schmerz und eine Schwellung in einem Bein, meist in der Wade oder im Oberschenkel, manchmal mit roter, bläulicher oder dunklerer Haut um die schmerzende Stelle oder geschwollenen Venen. Das Risiko ist in der Schwangerschaft und in den sechs Wochen nach der Geburt höher. Ruf den Notruf 112 an, wenn du außerdem Atemnot oder Schmerzen in der Brust hast. [NHS: Thrombose](https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/) (auf Englisch).',
            '**Präeklampsie.** Plötzliche Schwellung von Gesicht, Händen oder Füßen, starke Kopfschmerzen, verschwommenes Sehen oder Lichtblitze oder Schmerzen direkt unter den Rippen. Sie tritt am ehesten nach der 20.\u00A0Woche auf, und die Beschwerden können auch in den ersten Wochen nach der Geburt anhalten oder erst dann beginnen. [NHS: Präeklampsie](https://www.nhs.uk/conditions/pre-eclampsia/) (auf Englisch).',
          ],
        },
        'Dass beide Füße am Ende des Tages langsam anschwellen, ist in der Schwangerschaft häufig. Eine Schwellung, die plötzlich kommt, nur ein Bein betrifft oder mit den Beschwerden oben auftritt, ist es nicht.',
      ],
    },
  ],
  faq: [
    {
      q: 'Kann eine Schwangerschaft eine Plantarfasziitis auslösen?',
      cites: [CITE.vulloPregnancy, CITE.segalPregnancy],
      a: 'Sie macht sie vielleicht wahrscheinlicher, aber keine Studie hat das belegt. Fußschmerzen waren bei Frauen, die ein Kind bekommen hatten (31\u00A0%), häufiger als bei Frauen, die nie schwanger waren (22\u00A0%), und die Schwangerschaft macht das Gewölbe flacher und den Fuß länger. Keine Studie hat die Plantarfasziitis allein in der Schwangerschaft gezählt.',
    },
    {
      q: 'Sind Fersenschmerzen ein Anzeichen für eine frühe Schwangerschaft?',
      cites: [CITE.vulloPregnancy],
      a: 'Keine Studie bringt Fersenschmerzen mit einer frühen Schwangerschaft in Verbindung. In der Studie von 1996 begannen 82\u00A0% der Bein- und Fußschmerzen in der Schwangerschaft im zweiten oder dritten Trimester, nicht im ersten. Fersenschmerzen in den ersten Wochen haben wahrscheinlich dieselben Ursachen wie zu jeder anderen Zeit.',
    },
    {
      q: 'Darf ich in der Schwangerschaft bei Plantarfasziitis dehnen?',
      cites: [CITE.guideline, CITE.acogExercise],
      a: 'Sanfte Dehnungen von Plantarfaszie und Wade, im Sitzen oder mit einer Hand an der Wand, passen zu den Empfehlungen des ACOG für Bewegung in der Schwangerschaft, und die Leitlinie von 2023 zu Fersenschmerzen bewertet sie mit A. Diese Leitlinie behandelt die Schwangerschaft nicht. Frag deshalb zuerst deine Frauenärztin, deinen Frauenarzt oder deine Hebamme, und lieg ab der 20.\u00A0Woche nicht lange flach auf dem Rücken.',
    },
    {
      q: 'Darf ich in der Schwangerschaft Ibuprofen gegen Fersenschmerzen nehmen?',
      a: 'Frag zuerst deine Frauenärztin, deinen Frauenarzt oder deine Hebamme. Die US-Arzneimittelbehörde FDA rät, NSAR, zu denen Ibuprofen und Naproxen gehören, ab der 20.\u00A0Schwangerschaftswoche zu meiden, es sei denn, eine Ärztin oder ein Arzt rät dazu. Der Grund: Sie können in seltenen Fällen schwere Nierenprobleme beim Baby verursachen und das Fruchtwasser verringern.',
    },
    {
      q: 'Bleiben die Füße nach der Schwangerschaft größer?',
      cites: [CITE.segalPregnancy],
      a: 'Bei vielen Frauen ja, zumindest über Monate. Bei 49\u00A0Frauen waren Fußlänge und Absinken des Gewölbes etwa viereinhalb Monate nach der Geburt noch größer als im ersten Trimester. Die Veränderungen waren meist klein, und den größten Teil machte die erste Schwangerschaft aus.',
    },
    {
      q: 'Helfen Nachtschienen bei Plantarfasziitis in der Schwangerschaft?',
      cites: [CITE.guideline],
      a: 'Nachtschienen wurden in der Schwangerschaft nicht untersucht. Bei Plantarfasziitis im Allgemeinen bewertet die Leitlinie von 2023 sie mit A, getragen über ein bis drei Monate, für Menschen, die bei den ersten Schritten am Morgen regelmäßig Schmerzen haben. Frag deine Frauenärztin, deinen Frauenarzt oder deine Hebamme, bevor du eine kaufst. Mehr unter [Nachtschiene bei Plantarfasziitis](/de/nachtschiene-plantarfasziitis/).',
    },
    {
      q: 'Ist Gehen bei Plantarfasziitis in der Schwangerschaft schlecht?',
      cites: [CITE.acogExercise],
      a: 'Gehen ist eine der Aktivitäten, die das ACOG in der Schwangerschaft vorschlägt, als Teil von mindestens 150\u00A0Minuten mäßiger Bewegung pro Woche. Keine Studie hat [Gehen bei Plantarfasziitis](/de/gehen-bei-plantarfasziitis/) in der Schwangerschaft untersucht. Frag deshalb deine Frauenärztin, deinen Frauenarzt oder deine Hebamme, wie viel für dich passt.',
    },
    {
      q: 'Darf ich in der Schwangerschaft eine Stoßwellentherapie oder eine Kortisonspritze bekommen?',
      cites: [CITE.filippiniInjections],
      a: 'Frag deine Ärztin oder deinen Arzt. Die Internationale Gesellschaft für medizinische Stoßwellentherapie schließt Stoßwellen nur aus, wenn sich ein Fötus im behandelten Bereich befindet, nicht wegen der Schwangerschaft selbst. Wir haben aber keine Studien dazu bei Fersenschmerzen in der Schwangerschaft gefunden. Für Kortisonspritzen gibt es keine Empfehlung zu Fersenschmerzen speziell in der Schwangerschaft, und eine Übersichtsarbeit sagt, dass eine einzelne örtliche Spritze nicht schon wegen der Schwangerschaft selbst ausgeschlossen ist.',
    },
  ],
  redFlags: {
    h2: 'Geh noch am selben Tag zur Frauenärztin, zum Frauenarzt oder zur Hebamme, wenn',
    bullets: [
      'eine Wade oder ein Bein schmerzt und geschwollen ist oder die Haut dort rot oder dunkler aussieht (mögliches Blutgerinnsel)',
      'Gesicht, Hände oder Füße plötzlich anschwellen oder du starke Kopfschmerzen, verschwommenes Sehen oder Schmerzen unter den Rippen hast (mögliche Präeklampsie)',
      'du Atemnot oder Schmerzen in der Brust hast: Ruf den Notruf 112 an',
      'du Blutungen aus der Scheide, regelmäßige schmerzhafte Wehen oder Abgang von Flüssigkeit hast',
      'der Fersenschmerz nach einem Sturz oder Umknicken begann oder du den Fuß nicht belasten kannst',
      'die Ferse nachts oder in Ruhe wehtut oder du Brennen, Kribbeln oder Taubheit spürst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: 'Walkito ist eine Übungs-App für Ferse und Fuß. Sie ist nicht auf die Schwangerschaft ausgelegt und kennt dein Trimester nicht. Sprich deshalb mit deiner Frauenärztin, deinem Frauenarzt oder deiner Hebamme, bevor du anfängst, und lass alles weg, wofür du hüpfen, springen oder auf dem Rücken liegen musst.',
    more: [
      'Du wählst 3, 5 oder 7\u00A0Tage pro Woche und Einheiten von 3, 5 oder 10\u00A0Minuten. Vor jeder Einheit bewertest du deinen Fersenschmerz am Morgen, und der Plan passt sich daran an. Walkito stellt keine Diagnose.',
    ],
    cta: 'Fang mit einer Einheit von 3\u00A0Minuten an.',
  },
  related: ['heelPain', 'morningHeelPain', 'flatFeetAge'],
  crumb: 'Fersenschmerzen in der Schwangerschaft',
  campaign: 'guide-pregnancy-de',
};
