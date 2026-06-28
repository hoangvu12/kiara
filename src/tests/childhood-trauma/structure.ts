import type {
  QuestionStructure,
  ScoredDimension,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { levelFromScore } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure + scoring for the childhood-experiences profile.
 *
 * Adapted from the MACE (Maltreatment and Abuse Chronology of Exposure) scale,
 * Teicher & Parigger (2015), PLOS ONE — an open-access (CC BY) instrument that
 * measures ten distinct types of childhood maltreatment. We use the "types +
 * severity" form: each item is answered yes/no, and each of the ten types gets
 * a 0–100 severity score (the share of that type's experiences a person reports).
 * We deliberately leave out MACE's full year-by-year chronology grid, which is
 * long and heavy for a self-guided web test.
 *
 * This is an ADAPTATION, not the verbatim validated instrument: item wording is
 * naturalized for plain reading in English and Vietnamese, and the scoring is a
 * transparent proportion model rather than MACE's item-response weighting. Treat
 * scores as a reflective profile, not a clinical measurement. Wording lives in
 * content/<locale>.ts; the ids here are the keys those files translate.
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
    label: "MACE scale, scoring and translations — Dr. Martin Teicher's lab",
    url: "https://drteicher.wordpress.com/2017/03/18/maltreatment-and-abuse-chronology-of-exposure-mace-scale-translations/",
  },
  {
    label:
      "Felitti et al. (1998), the original Adverse Childhood Experiences (ACE) study",
    url: "https://pubmed.ncbi.nlm.nih.gov/9635069/",
  },
]

/**
 * A type counts as "present" when a person reports at least a third of that
 * type's experiences. Below that, an item or two still raises the type's bar but
 * isn't counted as a recurring pattern. This keeps a single, isolated answer
 * from being labelled a full "type", while still showing it on the profile.
 */
const PRESENT_THRESHOLD = 1 / 3

/** Did this answer point toward maltreatment? Reverse items flip yes/no. */
function endorsed(item: Item, value: number | undefined): boolean {
  if (value == null) return false
  const choice = YES_NO[value - 1]
  const saidYes = choice === "yes"
  return item.reverse ? !saidYes : saidYes
}

function bandFor(typesPresent: number): string {
  if (typesPresent === 0) return "minimal"
  if (typesPresent <= 2) return "some"
  if (typesPresent <= 4) return "several"
  return "pervasive"
}

function scored(id: string, score: number, raw: number): ScoredDimension {
  return { id, label: "", description: "", score, raw, level: levelFromScore(score) }
}

/** Pure scorer: answers (questionId -> 1-based yes/no index) -> result. */
export function scoreMace(answers: Record<string, number>): TestResult {
  let typesPresent = 0

  const dimensions = maceDimensions.map((dim) => {
    const items = ITEMS.filter((it) => it.dimension === dim.id)
    const hits = items.filter((it) => endorsed(it, answers[it.id])).length
    const proportion = items.length > 0 ? hits / items.length : 0
    if (proportion >= PRESENT_THRESHOLD) typesPresent += 1
    const score = Math.round(proportion * 100)
    return scored(dim.id, score, hits)
  })

  return { outcomeId: bandFor(typesPresent), dimensions }
}
