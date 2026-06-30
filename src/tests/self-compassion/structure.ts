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
 * Language-neutral structure + scoring for the Self-Compassion Scale (SCS).
 *
 * The SCS (Neff, 2003) measures how kindly you treat yourself when you fail,
 * struggle, or feel inadequate. Twenty-six statements, answered on a five-point
 * scale from 1 (Almost never) to 5 (Almost always). Items are reproduced word
 * for word from Neff's published instrument, which she makes free to use for
 * research, teaching, and clinical work (see sources).
 *
 * Neff frames self-compassion as three tensions, each between a compassionate
 * pole and the uncompassionate one it stands in for:
 *   Self-Kindness  vs  Self-Judgment
 *   Common Humanity vs Isolation
 *   Mindfulness    vs  Over-Identification
 * So we model each tension as ONE bipolar axis. The uncompassionate items are
 * reverse-keyed, so each axis becomes a single 1 to 5 mean where a high score
 * leans toward the compassionate pole and a low score toward its opposite. The
 * results page renders each axis as a centered slider.
 *
 * Scoring (faithful to Neff): reverse-score the three negative components, take
 * each subscale mean, then take the grand mean of the six subscale means for the
 * overall self-compassion score. Because each axis pairs two subscales of equal
 * item count (Self-Kindness 5 / Self-Judgment 5, Common Humanity 4 / Isolation
 * 4, Mindfulness 4 / Over-Identification 4), an axis mean equals the average of
 * its two subscale means, and the mean of the three axis means equals Neff's
 * grand mean of the six subscale means. So the overall band is the mean of the
 * three axis scores.
 *
 * Bands follow the rough guide Neff gives (no formal norms exist): a total of
 * 2.4 or below reads as low, 2.4 to 3.6 as moderate, 3.6 or above as high. The
 * copy presents these as a reflective read, not a clinical cutoff.
 */

/** 1 = Almost never ... 5 = Almost always. */
export const compassionScale = { min: 1, max: 5 }

export const compassionDimensions = [
  { id: "kindness", colorVar: "--color-kindness" },
  { id: "humanity", colorVar: "--color-humanity" },
  { id: "mindfulness", colorVar: "--color-mindfulness" },
]

/**
 * The 26 items in Neff's published order. Each loads onto one of the three
 * bipolar axes. `reverse` marks the uncompassionate items (the Self-Judgment,
 * Isolation, and Over-Identification subscales), which are reverse-keyed so the
 * axis reads as a single self-compassion score.
 *   kindness   = Self-Kindness (5,12,19,23,26) + Self-Judgment (1,8,11,16,21, rev)
 *   humanity   = Common Humanity (3,7,10,15) + Isolation (4,13,18,25, rev)
 *   mindfulness = Mindfulness (9,14,17,22) + Over-Identification (2,6,20,24, rev)
 * Order matters only for matching the verbatim wording in the content files;
 * the mean scorer is order-independent.
 */
export const compassionQuestions: QuestionStructure[] = [
  { id: "scs1", dimension: "kindness", reverse: true }, // SJ: disapproving and judgmental
  { id: "scs2", dimension: "mindfulness", reverse: true }, // OI: obsess and fixate
  { id: "scs3", dimension: "humanity" }, // CH: part of life everyone goes through
  { id: "scs4", dimension: "humanity", reverse: true }, // IS: separate and cut off
  { id: "scs5", dimension: "kindness" }, // SK: loving toward myself
  { id: "scs6", dimension: "mindfulness", reverse: true }, // OI: consumed by inadequacy
  { id: "scs7", dimension: "humanity" }, // CH: lots of other people feeling like I am
  { id: "scs8", dimension: "kindness", reverse: true }, // SJ: tough on myself
  { id: "scs9", dimension: "mindfulness" }, // MI: keep emotions in balance
  { id: "scs10", dimension: "humanity" }, // CH: inadequacy shared by most people
  { id: "scs11", dimension: "kindness", reverse: true }, // SJ: intolerant and impatient
  { id: "scs12", dimension: "kindness" }, // SK: caring and tenderness I need
  { id: "scs13", dimension: "humanity", reverse: true }, // IS: others probably happier
  { id: "scs14", dimension: "mindfulness" }, // MI: balanced view
  { id: "scs15", dimension: "humanity" }, // CH: failings part of the human condition
  { id: "scs16", dimension: "kindness", reverse: true }, // SJ: get down on myself
  { id: "scs17", dimension: "mindfulness" }, // MI: keep things in perspective
  { id: "scs18", dimension: "humanity", reverse: true }, // IS: others having an easier time
  { id: "scs19", dimension: "kindness" }, // SK: kind to myself when suffering
  { id: "scs20", dimension: "mindfulness", reverse: true }, // OI: carried away with feelings
  { id: "scs21", dimension: "kindness", reverse: true }, // SJ: cold-hearted toward myself
  { id: "scs22", dimension: "mindfulness" }, // MI: curiosity and openness
  { id: "scs23", dimension: "kindness" }, // SK: tolerant of my own flaws
  { id: "scs24", dimension: "mindfulness", reverse: true }, // OI: blow the incident out of proportion
  { id: "scs25", dimension: "humanity", reverse: true }, // IS: feel alone in my failure
  { id: "scs26", dimension: "kindness" }, // SK: understanding and patient
]

export const compassionSources: Source[] = [
  {
    label:
      "Neff, K. D. (2003), the Development and Validation of a Scale to Measure Self-Compassion, Self and Identity",
    url: "https://self-compassion.org/wp-content/uploads/publications/empirical.article.pdf",
  },
  {
    label:
      "Kristin Neff's site: the Self-Compassion Scale, its scoring key, and free permission to use it",
    url: "https://self-compassion.org/self-compassion-scales-for-researchers/",
  },
  {
    label:
      "Neff et al., the Self-Compassion Scale (SCS) book chapter: full item list, scoring, and the total-vs-subscale guidance",
    url: "https://self-compassion.org/wp-content/uploads/2020/02/Chapter-36-Neff-et-al-self-compassion-in-press.pdf",
  },
  {
    label:
      "Neff (2016), the SCS is a valid and theoretically coherent measure, on the single-score vs six-factor debate",
    url: "https://self-compassion.org/wp-content/uploads/2015/12/ScaleMindfulness.pdf",
  },
]

/** Neff's rough guide on the 1 to 5 grand mean; no formal norms exist. */
function bandFor(total: number): string {
  if (total <= 2.4) return "low"
  if (total >= 3.6) return "high"
  return "moderate"
}

/**
 * Score the three bipolar axes and pick the overall band. Language-neutral:
 * dimension labels are filled in later by the locale resolver, so we pass empty
 * placeholders here. Each axis is the mean of its items (uncompassionate items
 * reverse-keyed), and the overall self-compassion score is the mean of the three
 * axis means, which equals Neff's grand mean of the six subscale means.
 */
export function scoreSelfCompassion(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...compassionScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = compassionQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = compassionDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const scored = scoreLikertDimensions(answers, questions, dims, scale)
  const total =
    scored.reduce((sum, d) => sum + d.raw, 0) / (scored.length || 1)

  return { outcomeId: bandFor(total), dimensions: scored }
}
