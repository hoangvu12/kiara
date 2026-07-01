import type {
  DimensionDef,
  LikertScale,
  Question,
  QuestionStructure,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { scaleMidpoint, scoreLikertDimensions } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure + scoring for the Optimism test (the Life
 * Orientation Test-Revised, LOT-R).
 *
 * The LOT-R (Scheier, Carver & Bridges, 1994) is the standard measure of
 * dispositional optimism: the general expectation that good rather than bad
 * things will happen. The published scale has ten statements, but only six are
 * scored: three worded toward optimism (1, 4, 10) and three worded toward
 * pessimism (3, 7, 9). The other four (2, 5, 6, 8) are fillers that measure
 * nothing, added only to soften the scale's purpose; like the Drive test does
 * with its fillers, we leave them out rather than ask questions that don't count.
 *
 * The authors' headline score is a single total: reverse the three pessimism
 * items, add all six, and read the 0-24 result as one optimism dimension. But a
 * large body of factor-analytic work (and Scheier & Carver's own note that the
 * two can be scored apart) finds the optimism and pessimism items form two
 * separate, negatively correlated factors: some people strongly expect good AND
 * strongly brace for bad. So rather than collapse the two into one number, we
 * keep them as two bars and cross them on a 2x2 map, the same shape the Meaning
 * and Attachment tests use.
 *
 * Items are reproduced verbatim from Carver's published instrument, which he
 * posts publicly and, like his BIS/BAS scales, makes free to use without charge
 * or permission (see sources). Item ids keep the original LOT-R numbering
 * (lotr1 ... lotr10, fillers omitted) so the wording stays traceable to source.
 *
 * Scoring: each facet is the mean of its three items on the 1 to 5 scale, with
 * NO reverse-keying (each bar is one-directional: a higher optimism bar means
 * more optimism, a higher pessimism bar means more pessimism). We then split each
 * facet at the scale midpoint (3) and cross them into four outlook profiles. The
 * pessimism items are only reversed when you want the authors' single 0-24 total,
 * which we describe in the copy but don't use for the quadrant.
 */

/** 1 = Strongly disagree ... 5 = Strongly agree. Agreeing raises that facet. */
export const optimismScale = { min: 1, max: 5 }

export const optimismDimensions = [
  { id: "optimism", colorVar: "--color-optimism" },
  { id: "pessimism", colorVar: "--color-pessimism" },
]

/**
 * The six scored items in original LOT-R order (fillers 2, 5, 6, 8 omitted).
 * Neither facet is reverse-keyed: both bars run in their own direction (more
 * agreement = more of that outlook). Order matters only for matching the
 * verbatim wording in the content files; the mean scorer is order-independent.
 *   Optimism:  1, 4, 10
 *   Pessimism: 3, 7, 9
 */
export const optimismQuestions: QuestionStructure[] = [
  { id: "lotr1", dimension: "optimism" }, // in uncertain times, expect the best
  { id: "lotr3", dimension: "pessimism" }, // if something can go wrong, it will
  { id: "lotr4", dimension: "optimism" }, // always optimistic about my future
  { id: "lotr7", dimension: "pessimism" }, // hardly ever expect things to go my way
  { id: "lotr9", dimension: "pessimism" }, // rarely count on good things happening
  { id: "lotr10", dimension: "optimism" }, // expect more good than bad
]

/**
 * Optimism (x) by Pessimism (y). Four cells:
 *   high optimism + low pessimism  = optimist   (expects good, doesn't brace for bad)
 *   high optimism + high pessimism = realist    (expects good yet braces for bad)
 *   low optimism + high pessimism  = pessimist  (expects the worst)
 *   low optimism + low pessimism   = neutral    (few strong expectations either way)
 */
export const optimismQuadrant = {
  xDimension: "optimism",
  yDimension: "pessimism",
  quadrants: {
    lowXLowY: "neutral",
    highXLowY: "optimist",
    lowXHighY: "pessimist",
    highXHighY: "realist",
  },
}

export const optimismSources: Source[] = [
  {
    label:
      "Scheier, Carver & Bridges (1994), the Life Orientation Test-Revised (LOT-R), Journal of Personality and Social Psychology",
    url: "https://psycnet.apa.org/doi/10.1037/0022-3514.67.6.1063",
  },
  {
    label:
      "Charles Carver's site: the full LOT-R, its items, and scoring key (posted free to use, like his other instruments)",
    url: "https://www.psy.miami.edu/faculty/ccarver/lot-r.html",
  },
  {
    label:
      "Herzberg, Glaesmer & Hoyer (2006), separating optimism and pessimism as two factors of the LOT-R",
    url: "https://psycnet.apa.org/doi/10.1037/1040-3590.18.4.433",
  },
]

/**
 * Score the two facets and pick the outlook quadrant. Language-neutral: dimension
 * labels are filled in later by the locale resolver, so we pass empty label
 * placeholders here.
 */
export function scoreOptimism(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...optimismScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = optimismQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = optimismDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const scored = scoreLikertDimensions(answers, questions, dims, scale)
  const optimism = scored.find((d) => d.id === "optimism")!
  const pessimism = scored.find((d) => d.id === "pessimism")!
  const mid = scaleMidpoint(scale) // 3 on a 1 to 5 scale

  const highOptimism = optimism.raw >= mid
  const highPessimism = pessimism.raw >= mid

  let outcomeId: string
  if (highOptimism && !highPessimism) outcomeId = "optimist"
  else if (highOptimism && highPessimism) outcomeId = "realist"
  else if (!highOptimism && highPessimism) outcomeId = "pessimist"
  else outcomeId = "neutral"

  return { outcomeId, dimensions: scored }
}
