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
 * Language-neutral structure + scoring for the Drive test (the BIS/BAS Scales).
 *
 * The BIS/BAS Scales (Carver & White, 1994) measure the two motivation systems
 * that sit underneath behavior. The Behavioral Activation System (BAS) is the
 * gas: sensitivity to reward, the pull toward things you want. The Behavioral
 * Inhibition System (BIS) is the brake: sensitivity to threat and punishment,
 * the alarm that slows you down when something could go wrong. The two systems
 * are independent, not two ends of one axis, so we report them as separate bars
 * and never sum them into one number.
 *
 * Carver's empirical factors give three BAS facets and one BIS scale:
 *   BAS Drive (3, 9, 12, 21)              persistent pursuit of what you want
 *   BAS Fun Seeking (5, 10, 15, 20)       pull toward novelty and spur-of-moment
 *   BAS Reward Responsiveness (4,7,14,18,23) how strongly good things land
 *   BIS (2, 8, 13, 16, 19, 22, 24)        sensitivity to threat and punishment
 * That is 20 scored items. Carver's full scale has 24, with items 1, 6, 11, and
 * 17 as fillers that don't load on anything; we leave the fillers out of this
 * self-reflection version rather than ask four questions that measure nothing.
 *
 * Items are reproduced word for word from Carver's published instrument, which
 * he posts publicly and makes free to use without charge or permission (see
 * sources). Item ids keep Carver's original numbering (bisbas2 ... bisbas24) so
 * the wording stays traceable to the source.
 *
 * The response scale is presented the conventional way: 1 = "very false for me"
 * on the left to 4 = "very true for me" on the right, so agreeing is the high
 * end. This matches the red-to-green direction of the shared Likert input (left
 * end reads as disagree, right as agree), so a person's honest answers never look
 * like they were marked wrong. It is a presentation flip of Carver's printed
 * anchors (he prints 1 = very true ... 4 = very false and reverse-scores every
 * item except 2 and 22); flipping the displayed direction and the reverse flags
 * together leaves every subscale score identical. On this direction, only the two
 * low-threat BIS items, 2 ("I rarely experience fear") and 22 ("I have very few
 * fears"), are reverse-keyed, because agreeing with them means LESS threat
 * sensitivity. Every other item is worded trait-positive, so agreeing already
 * points the right way. After keying, each subscale is the mean of its items on
 * the 1 to 4 scale, where a higher score means more of that drive.
 *
 * There are no official clinical cutoffs, so the named result is a relative
 * read: we split BIS and the overall BAS at the scale midpoint (2.5) and cross
 * them into four motivational profiles. Overall BAS is the mean of the three BAS
 * facet means.
 */

/** 1 = Very false for me ... 4 = Very true for me. The high end is "agree". */
export const driveScale = { min: 1, max: 4 }

/**
 * Four bars: the three BAS facets together, then BIS on its own. Order here only
 * sets the order of the bars on the results page; the scorer is order-free.
 */
export const driveDimensions = [
  { id: "basDrive", colorVar: "--color-bas-drive" },
  { id: "basFun", colorVar: "--color-bas-fun" },
  { id: "basReward", colorVar: "--color-bas-reward" },
  { id: "bis", colorVar: "--color-bis" },
]

/**
 * The 20 scored items in Carver's numbering order (fillers 1, 6, 11, 17 left
 * out). On the conventional "false to true" direction we present, only the two
 * low-threat BIS items (bisbas2 and bisbas22) are reverse-keyed; every other item
 * is worded trait-positive, so agreeing already counts the right way. (This is the
 * inverse of Carver's own reverse list, which goes with his opposite anchor order.
 * See the scale note above.) Order matters only for matching the verbatim wording
 * in the content files; the mean scorer is order-independent.
 */
export const driveQuestions: QuestionStructure[] = [
  { id: "bisbas2", dimension: "bis", reverse: true }, // rarely experience fear (low-BIS worded)
  { id: "bisbas3", dimension: "basDrive" },
  { id: "bisbas4", dimension: "basReward" },
  { id: "bisbas5", dimension: "basFun" },
  { id: "bisbas7", dimension: "basReward" },
  { id: "bisbas8", dimension: "bis" },
  { id: "bisbas9", dimension: "basDrive" },
  { id: "bisbas10", dimension: "basFun" },
  { id: "bisbas12", dimension: "basDrive" },
  { id: "bisbas13", dimension: "bis" },
  { id: "bisbas14", dimension: "basReward" },
  { id: "bisbas15", dimension: "basFun" },
  { id: "bisbas16", dimension: "bis" },
  { id: "bisbas18", dimension: "basReward" },
  { id: "bisbas19", dimension: "bis" },
  { id: "bisbas20", dimension: "basFun" },
  { id: "bisbas21", dimension: "basDrive" },
  { id: "bisbas22", dimension: "bis", reverse: true }, // very few fears (low-BIS worded)
  { id: "bisbas23", dimension: "basReward" },
  { id: "bisbas24", dimension: "bis" },
]

export const driveSources: Source[] = [
  {
    label:
      "Carver & White (1994), the BIS/BAS Scales, Journal of Personality and Social Psychology",
    url: "https://psycnet.apa.org/doi/10.1037/0022-3514.67.2.319",
  },
  {
    label:
      "Charles Carver's site: the full BIS/BAS scale, its scoring key, and free permission to use it",
    url: "https://psy.miami.edu/faculty/ccarver/bisbas.html",
  },
  {
    label:
      "Charles Carver's self-report instruments index, with the no-charge, no-permission notice",
    url: "https://www.psy.miami.edu/faculty/ccarver/",
  },
]

/**
 * Pick the motivational profile from BIS (high/low) crossed with overall BAS
 * (high/low), splitting each at the scale midpoint. Language-neutral: dimension
 * labels are filled in later by the locale resolver, so we pass empty
 * placeholders here. Overall BAS is the mean of the three BAS facet means.
 */
export function scoreDrive(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...driveScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = driveQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = driveDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const scored = scoreLikertDimensions(answers, questions, dims, scale)
  const bis = scored.find((d) => d.id === "bis")!
  const basFacets = scored.filter((d) => d.id !== "bis")
  const basOverall =
    basFacets.reduce((sum, d) => sum + d.raw, 0) / (basFacets.length || 1)

  const mid = scaleMidpoint(scale) // 2.5 on a 1 to 4 scale
  const highBis = bis.raw >= mid
  const highBas = basOverall >= mid

  let outcomeId: string
  if (highBas && !highBis) outcomeId = "driven"
  else if (highBas && highBis) outcomeId = "intense"
  else if (!highBas && highBis) outcomeId = "cautious"
  else outcomeId = "easygoing"

  return { outcomeId, dimensions: scored }
}
