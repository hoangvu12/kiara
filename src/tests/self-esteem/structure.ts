import type {
  DimensionDef,
  LikertScale,
  Question,
  QuestionStructure,
  ScoredDimension,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { reverseValue, scoreLikertDimensions } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure + scoring for the Rosenberg Self-Esteem Scale (RSE).
 *
 * The RSE (Rosenberg, 1965) is the most widely used measure of global self-esteem:
 * ten statements, half positively worded and half negatively worded, answered on a
 * four-point agree/disagree scale. It is a single, unidimensional construct (the
 * positive/negative split is a wording / method artifact, not two subscales), so we
 * report one global score, not a profile of dimensions.
 *
 * Items are reproduced verbatim from the public-domain instrument (the scale was
 * released into the public domain by the University of Maryland; see sources). The
 * five negatively worded items (2, 5, 6, 8, 9) are reverse-keyed.
 *
 * Scoring (faithful to the original):
 *   - Each item: 0 to 3 points. Positive items: Strongly agree = 3 down to
 *     Strongly disagree = 0. Negative items reverse that.
 *   - Total = sum across all ten items, range 0 to 30. Higher = higher self-esteem.
 *   - We compute this through the engine's Likert mean (raw on the 1 to 4 scale,
 *     then total = 10 * (raw - 1)) so reverse-keying is handled in one place.
 *
 * Bands follow the cutoffs commonly used with the RSE: below 15 is typically read
 * as low self-esteem, 15 to 25 within the normal range, and 26 to 30 as high. These are
 * interpretive guidelines (Rosenberg published no clinical cutoff), so the copy
 * presents them as a reflective read, not a diagnosis.
 */

/** 1 = Strongly disagree … 4 = Strongly agree. Agreeing with a positive item raises the score. */
export const esteemScale = { min: 1, max: 4 }

export const esteemDimensions = [{ id: "selfEsteem", colorVar: "--color-esteem" }]

/**
 * The ten items, in the standard published order. `reverse` marks the five
 * negatively worded items. Order matters only for matching the verbatim wording in
 * the content files; scoring is order-independent.
 */
export const esteemQuestions: QuestionStructure[] = [
  { id: "rse1", dimension: "selfEsteem" }, // satisfied with myself
  { id: "rse2", dimension: "selfEsteem", reverse: true }, // think I am no good at all
  { id: "rse3", dimension: "selfEsteem" }, // a number of good qualities
  { id: "rse4", dimension: "selfEsteem" }, // do things as well as most people
  { id: "rse5", dimension: "selfEsteem", reverse: true }, // not much to be proud of
  { id: "rse6", dimension: "selfEsteem", reverse: true }, // feel useless at times
  { id: "rse7", dimension: "selfEsteem" }, // a person of worth
  { id: "rse8", dimension: "selfEsteem", reverse: true }, // wish I had more respect for myself
  { id: "rse9", dimension: "selfEsteem", reverse: true }, // inclined to feel a failure
  { id: "rse10", dimension: "selfEsteem" }, // positive attitude toward myself
]

export const esteemSources: Source[] = [
  {
    label:
      "Rosenberg, M. (1965), Society and the Adolescent Self-Image, the original RSE scale",
    url: "https://en.wikipedia.org/wiki/Rosenberg_self-esteem_scale",
  },
  {
    label:
      "Using the Rosenberg Self-Esteem Scale (University of Maryland): items, scoring, and the public-domain notice",
    url: "https://socy.umd.edu/about-us/using-rosenberg-self-esteem-scale",
  },
  {
    label:
      "Gray-Little, Williams & Hancock (1997), an Item Response Theory analysis of the RSE",
    url: "https://journals.sagepub.com/doi/10.1177/0146167297235001",
  },
]

/** Total 0 to 30 from the keyed (reverse-handled) answers; unanswered items score 0. */
function esteemTotal(answers: Record<string, number>): number {
  const scale: LikertScale = { ...esteemScale, minLabel: "", maxLabel: "" }
  let total = 0
  for (const q of esteemQuestions) {
    const a = answers[q.id]
    if (a == null) continue
    const keyed = q.reverse ? reverseValue(a, scale) : a
    total += keyed - 1 // 1..4 becomes 0..3 points
  }
  return total
}

/** RSE interpretive bands on the 0 to 30 total. */
function bandFor(total: number): string {
  if (total < 15) return "low"
  if (total <= 25) return "typical"
  return "high"
}

/**
 * Score the single global self-esteem dimension. We reuse the engine's Likert mean
 * for the 0 to 100 bar and level, but set the outcome from the canonical 0 to 30
 * total so the bands match the published cutoffs exactly. `raw` carries that total.
 */
export function scoreEsteem(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...esteemScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = esteemQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = esteemDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const [scored] = scoreLikertDimensions(answers, questions, dims, scale)
  const total = esteemTotal(answers)
  const band = bandFor(total)
  const level = band === "low" ? "low" : band === "high" ? "high" : "medium"

  const dimension: ScoredDimension = { ...scored, raw: total, level }

  return { outcomeId: band, dimensions: [dimension] }
}
