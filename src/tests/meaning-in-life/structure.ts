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
 * Language-neutral structure + scoring for the Meaning in Life Questionnaire (MLQ).
 *
 * The MLQ (Steger, Frazier, Oishi & Kaler, 2006) measures two separate things that
 * people often blur together: the Presence of meaning (how much you already feel
 * your life is meaningful) and the Search for meaning (how actively you are looking
 * for it). The two subscales are reported separately and are NOT summed into a
 * single score: a person can be high on one and low on the other, and that pairing
 * is the whole point.
 *
 * Ten items, five per subscale, answered on a 7-point scale from 1 (Absolutely
 * untrue) to 7 (Absolutely true). One Presence item ("My life has no clear
 * purpose", item 9) is reverse worded and is reverse-keyed. Items are reproduced
 * verbatim from the published instrument, which the author makes free for
 * educational and research use (see sources).
 *
 * Scoring (faithful to the original): each subscale = the mean of its five items on
 * the 1 to 7 scale, with item 9 reversed first. We then place the result on a 2x2
 * map of Presence (high/low) by Search (high/low), splitting each scale at its
 * midpoint of 4, the same midpoint rule the attachment test uses. The four cells
 * are the four outcomes.
 */

/** 1 = Absolutely untrue ... 7 = Absolutely true. Agreeing raises that subscale. */
export const meaningScale = { min: 1, max: 7 }

export const meaningDimensions = [
  { id: "presence", colorVar: "--color-presence" },
  { id: "search", colorVar: "--color-search" },
]

/**
 * The ten items in published order. `reverse` marks the single reverse-worded
 * Presence item (item 9). Order matters only for matching the verbatim wording in
 * the content files; the mean scorer is order-independent.
 *   Presence of meaning: 1, 4, 5, 6, 9 (9 reversed)
 *   Search for meaning:  2, 3, 7, 8, 10
 */
export const meaningQuestions: QuestionStructure[] = [
  { id: "mlq1", dimension: "presence" }, // I understand my life's meaning
  { id: "mlq2", dimension: "search" }, // looking for something that makes life feel meaningful
  { id: "mlq3", dimension: "search" }, // always looking to find my life's purpose
  { id: "mlq4", dimension: "presence" }, // my life has a clear sense of purpose
  { id: "mlq5", dimension: "presence" }, // good sense of what makes my life meaningful
  { id: "mlq6", dimension: "presence" }, // discovered a satisfying life purpose
  { id: "mlq7", dimension: "search" }, // always searching for something that feels significant
  { id: "mlq8", dimension: "search" }, // seeking a purpose or mission for my life
  { id: "mlq9", dimension: "presence", reverse: true }, // my life has no clear purpose
  { id: "mlq10", dimension: "search" }, // searching for meaning in my life
]

/**
 * Presence (y) by Search (x). Four cells:
 *   high presence + low search  = anchored  (you found it, not restlessly looking)
 *   high presence + high search = deepening (you found it and keep reaching)
 *   low presence + high search  = seeking   (actively looking, not landed yet)
 *   low presence + low search   = adrift    (not feeling it, not looking either)
 */
export const meaningQuadrant = {
  xDimension: "search",
  yDimension: "presence",
  quadrants: {
    lowXLowY: "adrift",
    highXLowY: "seeking",
    lowXHighY: "anchored",
    highXHighY: "deepening",
  },
}

/** Neutral sources (English labels); content files may override per locale. */
export const meaningSources: Source[] = [
  {
    label:
      "Steger, Frazier, Oishi & Kaler (2006), the Meaning in Life Questionnaire, Journal of Counseling Psychology",
    url: "https://psycnet.apa.org/doi/10.1037/0022-0167.53.1.80",
  },
  {
    label:
      "Michael F. Steger's lab: the MLQ measure and its terms of free educational and research use",
    url: "https://www.michaelfsteger.com/?page_id=13",
  },
  {
    label:
      "Fetzer Institute, Meaning in Life Questionnaire: full item list, scale, and scoring",
    url: "https://backend.fetzer.org/sites/default/files/images/stories/pdf/selfmeasures/PURPOSE_MEANING-MeaninginLife.pdf",
  },
]

/**
 * Score answers into the two subscales and pick the quadrant. Language-neutral:
 * dimension labels are filled in later by the locale resolver, so we pass empty
 * label placeholders here.
 */
export function scoreMeaning(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...meaningScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = meaningQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = meaningDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const scored = scoreLikertDimensions(answers, questions, dims, scale)
  const presence = scored.find((d) => d.id === "presence")!
  const search = scored.find((d) => d.id === "search")!
  const mid = scaleMidpoint(scale) // 4 on a 1 to 7 scale

  const highPresence = presence.raw >= mid
  const highSearch = search.raw >= mid

  let outcomeId: string
  if (highPresence && !highSearch) outcomeId = "anchored"
  else if (highPresence && highSearch) outcomeId = "deepening"
  else if (!highPresence && highSearch) outcomeId = "seeking"
  else outcomeId = "adrift"

  return { outcomeId, dimensions: scored }
}
