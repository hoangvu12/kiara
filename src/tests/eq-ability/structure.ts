import type {
  DimensionStructure,
  QuestionStructure,
  ScoredDimension,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { levelFromScore } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure + scoring for the ability-EQ test.
 *
 * Two performance subtests, the most psychometrically defensible branches of
 * the Mayer–Salovey ability model:
 *   - Understanding (STEU-B, 19 items): pick the emotion an appraisal produces.
 *     Dichotomous, keyed by Roseman (2001) appraisal theory.
 *   - Managing (STEM-B, 18 items): pick the most effective action. Partial
 *     credit from expert ratings (best option ~0.83–1.0, plausible second-best
 *     gets a fraction, poor options 0).
 *
 * Items + keys are reproduced from the open-access instrument library on OSF
 * (osf.io/mqp2x) and the source papers (see sources). Wording lives in
 * content/<locale>.ts; ids here are the keys those files translate.
 *
 * Note: scores are PERCENT CORRECT, not norm-referenced percentiles — we have
 * no normative sample, so the bands below are interpretive, not clinical.
 */

export const eqScale = { min: 0, max: 1 } // unused by choice items; kept for the type

export const eqDimensions: DimensionStructure[] = [
  { id: "understanding", colorVar: "--color-understanding" },
  { id: "managing", colorVar: "--color-managing" },
  { id: "overall" }, // falls back to --primary
]

const STEU_OPTIONS = ["a", "b", "c", "d", "e"]
const STEM_OPTIONS = ["a", "b", "c", "d"]

/** STEU-B: correct option letter per item (theory-keyed, dichotomous). */
const STEU_KEY: Record<string, string> = {
  steu1: "b", steu2: "d", steu3: "c", steu4: "c", steu5: "a",
  steu6: "b", steu7: "d", steu8: "c", steu9: "c", steu10: "d",
  steu11: "e", steu12: "e", steu13: "b", steu14: "d", steu15: "d",
  steu16: "b", steu17: "d", steu18: "a", steu19: "a",
}

/** STEM-B: expert-rated effectiveness credit per option (missing = 0). */
const STEM_CREDIT: Record<string, Record<string, number>> = {
  stem1: { c: 0.9167, d: 0.0833 },
  stem2: { a: 0.75, b: 0.25 },
  stem3: { c: 0.8333, b: 0.1667 },
  stem4: { b: 1 },
  stem5: { c: 0.75, b: 0.1667, d: 0.0833 },
  stem6: { b: 0.8333, c: 0.1667 },
  stem7: { b: 0.9167, a: 0.0833 },
  stem8: { c: 0.75, b: 0.25 },
  stem9: { a: 0.75, c: 0.1667, d: 0.0833 },
  stem10: { a: 0.75, c: 0.25 },
  stem11: { a: 0.9167, d: 0.0833 },
  stem12: { d: 0.9167, c: 0.0833 },
  stem13: { d: 0.8333, a: 0.1667 },
  stem14: { d: 0.9167, b: 0.0833 },
  stem15: { c: 0.8333, a: 0.1667 },
  stem16: { d: 0.75, c: 0.25 },
  stem17: { b: 0.75, c: 0.25 },
  stem18: { c: 0.9167, d: 0.0833 },
}

const understandingItems: QuestionStructure[] = Object.keys(STEU_KEY).map((id) => ({
  id,
  dimension: "understanding",
  optionIds: STEU_OPTIONS,
}))

const managingItems: QuestionStructure[] = Object.keys(STEM_CREDIT).map((id) => ({
  id,
  dimension: "managing",
  optionIds: STEM_OPTIONS,
}))

/** Understanding block first, then managing — each has its own instructions. */
export const eqQuestions: QuestionStructure[] = [
  ...understandingItems,
  ...managingItems,
]

export const eqSources: Source[] = [
  {
    label: "MacCann & Roberts (2008), New Paradigms for Assessing EI (STEU & STEM), Emotion",
    url: "https://pubmed.ncbi.nlm.nih.gov/18729584/",
  },
  {
    label: "Allen et al. (2014), STEU-Brief via Item Response Theory, Pers. & Individual Differences",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0191886914000713",
  },
  {
    label: "Allen et al. (2015), STEM-Brief via IRT & latent class analysis",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0191886915000902",
  },
  {
    label: "Open-access item bank (full + brief STEU/STEM), OSF",
    url: "https://osf.io/mqp2x/",
  },
  {
    label: "Roseman (2001), appraisal theory of emotion (scoring basis for STEU)",
    url: "https://en.wikipedia.org/wiki/Appraisal_theory",
  },
]

function proportion(
  answers: Record<string, number>,
  items: QuestionStructure[],
  creditOf: (item: QuestionStructure, chosenLetter: string) => number
): number {
  if (items.length === 0) return 0
  let sum = 0
  for (const item of items) {
    const value = answers[item.id]
    if (value == null) continue // unanswered scores 0
    const chosenLetter = item.optionIds?.[value - 1]
    if (chosenLetter) sum += creditOf(item, chosenLetter)
  }
  return sum / items.length
}

function bandFor(overall: number): string {
  if (overall < 45) return "developing"
  if (overall < 62) return "capable"
  if (overall < 78) return "strong"
  return "exceptional"
}

function scored(id: string, score: number, raw: number): ScoredDimension {
  return { id, label: "", description: "", score, raw, level: levelFromScore(score) }
}

/** Pure scorer: answers (questionId -> 1-based option index) -> result. */
export function scoreEq(answers: Record<string, number>): TestResult {
  const uProp = proportion(answers, understandingItems, (item, letter) =>
    STEU_KEY[item.id] === letter ? 1 : 0
  )
  const mProp = proportion(
    answers,
    managingItems,
    (item, letter) => STEM_CREDIT[item.id]?.[letter] ?? 0
  )
  const overallProp = (uProp + mProp) / 2

  const understanding = Math.round(uProp * 100)
  const managing = Math.round(mProp * 100)
  const overall = Math.round(overallProp * 100)

  return {
    outcomeId: bandFor(overall),
    dimensions: [
      scored("understanding", understanding, Math.round(uProp * 100) / 100),
      scored("managing", managing, Math.round(mProp * 100) / 100),
      scored("overall", overall, Math.round(overallProp * 100) / 100),
    ],
  }
}
