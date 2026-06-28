import type {
  QuestionStructure,
  ScoredDimension,
  ScoreLevel,
  Source,
  TestResult,
} from "@/lib/test-engine/types"

/**
 * Language-neutral structure + scoring for the childhood-experiences profile.
 *
 * Adapted from the MACE (Maltreatment and Abuse Chronology of Exposure) scale,
 * Teicher & Parigger (2015), PLOS ONE, an open-access (CC BY) instrument that
 * measures ten distinct types of childhood maltreatment. We use the "types +
 * severity" form: each item is answered yes/no, and each of the ten types gets
 * a 0 to 100 severity score (the share of that type's experiences a person reports).
 * We deliberately leave out MACE's full year-by-year chronology grid, which is
 * long and heavy for a self-guided web test.
 *
 * This is an ADAPTATION, not the verbatim validated instrument: item wording is
 * naturalized for plain reading in English and Vietnamese, and each bar shows a
 * transparent share-of-items severity rather than MACE's item-response logit
 * weighting. The one place we stay faithful to the original numbers is which
 * types get flagged as present: that uses the exact per-type cutoffs from the
 * paper (see PRESENT_CUTOFF below). Treat the bars as a reflective profile, not
 * a clinical measurement. Wording lives in content/<locale>.ts; the ids here are
 * the keys those files translate.
 */

export const maceScale = { min: 1, max: 2 } // yes/no choice items; kept for the type

/** The ten maltreatment types. No colorVar → all bars use the primary accent. */
export const maceDimensions = [
  { id: "verbalAbuse" },
  { id: "nonverbalAbuse" },
  { id: "physicalAbuse" },
  { id: "emotionalNeglect" },
  { id: "physicalNeglect" },
  { id: "sexualAbuse" },
  { id: "peerEmotional" },
  { id: "peerPhysical" },
  { id: "witnessParents" },
  { id: "witnessSibling" },
]

const YES_NO = ["no", "yes"]

/**
 * One item: which type it belongs to, and whether it's reverse-worded. Reverse
 * items describe something GOOD (a caring parent, enough food), so a "no" answer
 * is what counts toward that type's severity.
 */
type Item = { id: string; dimension: string; reverse?: boolean }

const ITEMS: Item[] = [
  // Parental verbal abuse (4)
  { id: "pv1", dimension: "verbalAbuse" },
  { id: "pv2", dimension: "verbalAbuse" },
  { id: "pv3", dimension: "verbalAbuse" },
  { id: "pv4", dimension: "verbalAbuse" },
  // Non-verbal emotional abuse (6)
  { id: "ne1", dimension: "nonverbalAbuse" },
  { id: "ne2", dimension: "nonverbalAbuse" },
  { id: "ne3", dimension: "nonverbalAbuse" },
  { id: "ne4", dimension: "nonverbalAbuse" },
  { id: "ne5", dimension: "nonverbalAbuse" },
  { id: "ne6", dimension: "nonverbalAbuse" },
  // Parental physical maltreatment (6)
  { id: "pp1", dimension: "physicalAbuse" },
  { id: "pp2", dimension: "physicalAbuse" },
  { id: "pp3", dimension: "physicalAbuse" },
  { id: "pp4", dimension: "physicalAbuse" },
  { id: "pp5", dimension: "physicalAbuse" },
  { id: "pp6", dimension: "physicalAbuse" },
  // Emotional neglect (5): two direct, three reverse-worded (a loving family)
  { id: "en1", dimension: "emotionalNeglect" },
  { id: "en2", dimension: "emotionalNeglect" },
  { id: "en3", dimension: "emotionalNeglect", reverse: true },
  { id: "en4", dimension: "emotionalNeglect", reverse: true },
  { id: "en5", dimension: "emotionalNeglect", reverse: true },
  // Physical neglect (5): three reverse-worded (being cared for), two direct
  { id: "pn1", dimension: "physicalNeglect", reverse: true },
  { id: "pn2", dimension: "physicalNeglect", reverse: true },
  { id: "pn3", dimension: "physicalNeglect" },
  { id: "pn4", dimension: "physicalNeglect" },
  { id: "pn5", dimension: "physicalNeglect", reverse: true },
  // Sexual abuse (7)
  { id: "sa1", dimension: "sexualAbuse" },
  { id: "sa2", dimension: "sexualAbuse" },
  { id: "sa3", dimension: "sexualAbuse" },
  { id: "sa4", dimension: "sexualAbuse" },
  { id: "sa5", dimension: "sexualAbuse" },
  { id: "sa6", dimension: "sexualAbuse" },
  { id: "sa7", dimension: "sexualAbuse" },
  // Peer emotional abuse (5)
  { id: "pe1", dimension: "peerEmotional" },
  { id: "pe2", dimension: "peerEmotional" },
  { id: "pe3", dimension: "peerEmotional" },
  { id: "pe4", dimension: "peerEmotional" },
  { id: "pe5", dimension: "peerEmotional" },
  // Peer physical bullying (5)
  { id: "pb1", dimension: "peerPhysical" },
  { id: "pb2", dimension: "peerPhysical" },
  { id: "pb3", dimension: "peerPhysical" },
  { id: "pb4", dimension: "peerPhysical" },
  { id: "pb5", dimension: "peerPhysical" },
  // Witnessing violence between parents (5)
  { id: "wi1", dimension: "witnessParents" },
  { id: "wi2", dimension: "witnessParents" },
  { id: "wi3", dimension: "witnessParents" },
  { id: "wi4", dimension: "witnessParents" },
  { id: "wi5", dimension: "witnessParents" },
  // Witnessing violence to a sibling (4)
  { id: "ws1", dimension: "witnessSibling" },
  { id: "ws2", dimension: "witnessSibling" },
  { id: "ws3", dimension: "witnessSibling" },
  { id: "ws4", dimension: "witnessSibling" },
]

export const maceQuestions: QuestionStructure[] = ITEMS.map((it) => ({
  id: it.id,
  dimension: it.dimension,
  reverse: it.reverse,
  optionIds: YES_NO,
}))

export const maceSources: Source[] = [
  {
    label:
      "Teicher & Parigger (2015), the MACE scale, PLOS ONE (open access, CC BY)",
    url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0117423",
  },
  {
    label:
      "Same paper, full text on PubMed Central, with the subscale tables and cutoff thresholds we used",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4340880/",
  },
  {
    label: "MACE scale scoring and translations, from Dr. Martin Teicher's lab",
    url: "https://drteicher.wordpress.com/2017/03/18/maltreatment-and-abuse-chronology-of-exposure-mace-scale-translations/",
  },
  {
    label:
      "Felitti et al. (1998), the original Adverse Childhood Experiences (ACE) study",
    url: "https://pubmed.ncbi.nlm.nih.gov/9635069/",
  },
]

/**
 * How many items a person has to endorse for a type to count as "present".
 * These are the exact cutoffs Teicher and Parigger published for the MACE: they
 * derived them with item-response theory, so each type has its own number
 * rather than one shared rule. Severe types flag early (sexual abuse or
 * witnessing violence count from one or two experiences) while milder types
 * need more, which is why a flat "a third of the items" rule would mislabel
 * most of the ten. See Table 2 to Table 11 of the 2015 PLOS ONE paper, where
 * each subscale states its threshold ("a threshold was set at N selected
 * items"). Below the cutoff an experience still raises the bar but isn't
 * counted as a recurring pattern.
 */
const PRESENT_CUTOFF: Record<string, number> = {
  verbalAbuse: 3, // of 4 items
  nonverbalAbuse: 4, // of 6
  physicalAbuse: 4, // of 6
  emotionalNeglect: 2, // of 5
  physicalNeglect: 2, // of 5
  sexualAbuse: 2, // of 7
  peerEmotional: 4, // of 5
  peerPhysical: 2, // of 5
  witnessParents: 2, // of 5
  witnessSibling: 1, // of 4
}

/** Endorsing two thirds or more of a type's items reads as "high". */
const HIGH_PROPORTION = 2 / 3

/** Did this answer point toward maltreatment? Reverse items flip yes/no. */
function endorsed(item: Item, value: number | undefined): boolean {
  if (value == null) return false
  const choice = YES_NO[value - 1]
  const saidYes = choice === "yes"
  return item.reverse ? !saidYes : saidYes
}

function cutoffFor(dimId: string, total: number): number {
  return PRESENT_CUTOFF[dimId] ?? Math.ceil(total / 3)
}

function bandFor(typesPresent: number): string {
  if (typesPresent === 0) return "minimal"
  if (typesPresent <= 2) return "some"
  if (typesPresent <= 4) return "several"
  return "pervasive"
}

/**
 * Level keyed to the MACE present cutoff rather than the generic 40/60 score
 * cutoffs: a type stays "low" until it reaches its cutoff, then reads "medium",
 * then "high" once endorsement is substantial. This means a type counts as
 * elevated at exactly the point the scorer counts it as present, so the results
 * page surfaces an interpretive note for a type precisely when it is flagged.
 */
function levelFor(dimId: string, hits: number, total: number): ScoreLevel {
  if (hits < cutoffFor(dimId, total)) return "low"
  return total > 0 && hits / total >= HIGH_PROPORTION ? "high" : "medium"
}

function scored(
  id: string,
  score: number,
  raw: number,
  level: ScoreLevel
): ScoredDimension {
  return { id, label: "", description: "", score, raw, level }
}

/** Pure scorer: answers (questionId -> 1-based yes/no index) -> result. */
export function scoreMace(answers: Record<string, number>): TestResult {
  let typesPresent = 0

  const dimensions = maceDimensions.map((dim) => {
    const items = ITEMS.filter((it) => it.dimension === dim.id)
    const hits = items.filter((it) => endorsed(it, answers[it.id])).length
    if (hits >= cutoffFor(dim.id, items.length)) typesPresent += 1
    const score = items.length > 0 ? Math.round((hits / items.length) * 100) : 0
    return scored(dim.id, score, hits, levelFor(dim.id, hits, items.length))
  })

  return { outcomeId: bandFor(typesPresent), dimensions }
}
