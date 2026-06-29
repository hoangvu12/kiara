import type {
  DimensionDef,
  LikertScale,
  Question,
  QuestionStructure,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { scoreLikertDimensions } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure + scoring for the 16-type personality test.
 *
 * This is an INDEPENDENT instrument built on the public-domain Jungian theory of
 * psychological types (Carl Jung, Psychological Types, 1921) and the Big Five /
 * Five-Factor Model. It is NOT the MBTI® and has no affiliation with it; the
 * four-letter codes describe an idea/system, not a branded product. See the
 * disclaimer in content/<locale>.ts.
 *
 * Design choices, grounded in the research (see research/mbti/RESEARCH.md):
 *  - Four bipolar dichotomies, scored from balanced agree/disagree Likert items
 *    (half of each scale reverse-keyed against acquiescence bias).
 *  - Each axis maps to a Big Five factor: Mind↔Extraversion, Energy↔Openness,
 *    Nature↔Agreeableness, Tactics↔Conscientiousness (McCrae & Costa, 1989).
 *  - We store CONTINUOUS scores and show a slider per axis; the four-letter type
 *    is a friendly summary, and the copy is honest that a near-midpoint axis can
 *    tip either way. We deliberately avoid the unstable "you ARE this type"
 *    framing the MBTI is criticized for.
 *
 * Items are original wording (our copyright), not taken from any licensed bank.
 *
 * Axis orientation (score 0..100): higher score = the second pole below.
 *   mind:    0 = Introversion (I) ........ 100 = Extraversion (E)
 *   energy:  0 = Sensing (S) ............. 100 = Intuition (N)
 *   nature:  0 = Thinking (T) ............ 100 = Feeling (F)
 *   tactics: 0 = Judging (J) ............. 100 = Perceiving (P)
 * A non-reversed item pushes toward the HIGH pole; a reversed item toward the LOW.
 */

export const sixteenScale = { min: 1, max: 5 }

export const sixteenDimensions = [
  { id: "mind", colorVar: "--color-mind" },
  { id: "energy", colorVar: "--color-energy" },
  { id: "nature", colorVar: "--color-nature" },
  { id: "tactics", colorVar: "--color-tactics" },
]

/** The letter each axis yields at the low / high end of its score. */
const AXIS_LETTERS: Record<string, { low: string; high: string }> = {
  mind: { low: "I", high: "E" },
  energy: { low: "S", high: "N" },
  nature: { low: "T", high: "F" },
  tactics: { low: "J", high: "P" },
}

/** Order the letters are assembled into the four-letter code. */
const CODE_ORDER = ["mind", "energy", "nature", "tactics"]

/** 8 items per axis: 4 toward the high pole, 4 reverse-keyed toward the low. */
const mindItems: QuestionStructure[] = [
  { id: "mind1", dimension: "mind" },
  { id: "mind2", dimension: "mind" },
  { id: "mind3", dimension: "mind" },
  { id: "mind4", dimension: "mind" },
  { id: "mind5", dimension: "mind", reverse: true },
  { id: "mind6", dimension: "mind", reverse: true },
  { id: "mind7", dimension: "mind", reverse: true },
  { id: "mind8", dimension: "mind", reverse: true },
]

const energyItems: QuestionStructure[] = [
  { id: "energy1", dimension: "energy" },
  { id: "energy2", dimension: "energy" },
  { id: "energy3", dimension: "energy" },
  { id: "energy4", dimension: "energy" },
  { id: "energy5", dimension: "energy", reverse: true },
  { id: "energy6", dimension: "energy", reverse: true },
  { id: "energy7", dimension: "energy", reverse: true },
  { id: "energy8", dimension: "energy", reverse: true },
]

const natureItems: QuestionStructure[] = [
  { id: "nature1", dimension: "nature" },
  { id: "nature2", dimension: "nature" },
  { id: "nature3", dimension: "nature" },
  { id: "nature4", dimension: "nature" },
  { id: "nature5", dimension: "nature", reverse: true },
  { id: "nature6", dimension: "nature", reverse: true },
  { id: "nature7", dimension: "nature", reverse: true },
  { id: "nature8", dimension: "nature", reverse: true },
]

const tacticsItems: QuestionStructure[] = [
  { id: "tactics1", dimension: "tactics" },
  { id: "tactics2", dimension: "tactics" },
  { id: "tactics3", dimension: "tactics" },
  { id: "tactics4", dimension: "tactics" },
  { id: "tactics5", dimension: "tactics", reverse: true },
  { id: "tactics6", dimension: "tactics", reverse: true },
  { id: "tactics7", dimension: "tactics", reverse: true },
  { id: "tactics8", dimension: "tactics", reverse: true },
]

/** Interleave one item per axis at a time, so the test never feels repetitive. */
function interleave(): QuestionStructure[] {
  const lanes = [mindItems, energyItems, natureItems, tacticsItems]
  const out: QuestionStructure[] = []
  const max = Math.max(...lanes.map((l) => l.length))
  for (let i = 0; i < max; i++) {
    for (const lane of lanes) {
      if (lane[i]) out.push(lane[i])
    }
  }
  return out
}

export const sixteenQuestions: QuestionStructure[] = interleave()

export const sixteenSources: Source[] = [
  {
    label: "Carl Jung (1921), Psychological Types, the theory the four axes come from",
    url: "https://en.wikipedia.org/wiki/Psychological_Types",
  },
  {
    label:
      "McCrae & Costa (1989), reinterpreting Jungian type through the Big Five (Five-Factor Model)",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-6494.1989.tb00759.x",
  },
  {
    label:
      "Pittenger (1993), on why four-letter types are unstable on retest, the reason we show continuous scores",
    url: "https://www.researchgate.net/publication/232494957_Cautionary_comments_regarding_the_Myers-Briggs_Type_Indicator",
  },
  {
    label: "Open-Source Psychometrics Project, open Jungian type scales and data",
    url: "https://openpsychometrics.org/tests/OEJTS/",
  },
]

/**
 * Score the four axes and assemble the four-letter code. Language-neutral: labels
 * are filled in later by the locale resolver, so we pass empty placeholders here.
 * The midpoint of a 1-5 scale normalizes to 50; at or above 50 an axis takes its
 * high-pole letter, below it the low-pole letter.
 */
export function scoreSixteen(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...sixteenScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = sixteenQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = sixteenDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const scored = scoreLikertDimensions(answers, questions, dims, scale)
  const byId = new Map(scored.map((s) => [s.id, s]))

  const code = CODE_ORDER.map((axis) => {
    const s = byId.get(axis)
    const letters = AXIS_LETTERS[axis]
    return s && s.score >= 50 ? letters.high : letters.low
  }).join("")

  return { outcomeId: code.toLowerCase(), dimensions: scored }
}
