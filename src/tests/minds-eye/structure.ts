import type {
  DimensionDef,
  LikertScale,
  Question,
  QuestionStructure,
  ScoredDimension,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { scoreLikertDimensions } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure + scoring for the Mind's Eye test (the Vividness of
 * Visual Imagery Questionnaire, version 2, VVIQ-2).
 *
 * The VVIQ-2 (Marks, 1995) measures how vividly a person can form voluntary
 * visual mental images: the "mind's eye". It is a single spectrum, from no image
 * at all (aphantasia) up to imagery as vivid as real seeing (hyperphantasia).
 * Thirty-two items span eight everyday scenes (a friend, the rising sun, a shop,
 * a country scene, a car ride, a beach, a railway station, a garden), four items
 * each, rated 1 to 5. VVIQ-2 reversed the original VVIQ's direction so that a
 * higher rating means a more vivid image; there is no reverse-keying, and every
 * item loads on the one dimension `vividness`.
 *
 * Marks posts the VVIQ-2 free to use without permission (see sources), so the 32
 * items are reproduced verbatim. Two obvious source typos are corrected in the
 * content ("lightning", "an urgent expression"); the fix does not touch scoring.
 *
 * Scoring: the score is the per-item MEAN across all 32 items on the 1 to 5
 * scale. The mean is version-agnostic, which lets the well-known 16-item VVIQ
 * cutoffs (they are scale-anchored, 1 to 5) transfer directly. We band the mean
 * into five outcomes:
 *   mean <= 2.00              aphantasia      (little to no voluntary imagery)
 *   > 2.00 to <= 3.00         faint           (dim, effortful imagery)
 *   > 3.00 to <= 4.00         typical         (average vividness, where most land)
 *   > 4.00 to <  4.75         vivid           (above-average, clear imagery)
 *   >= 4.75                   hyperphantasia  (imagery as vivid as real seeing)
 *
 * These cutoffs come from published work: Dance et al. (2022) operationalize
 * aphantasia as VVIQ <= 32/80 (mean <= 2.0), prevalence ~3-4%, matching Zeman's
 * estimate; Zeman et al. (2020) recruited hyperphantasia at the top tail; the
 * middle bands follow population norms. No quadrant, no bipolar.
 */

/** 1 = No image at all ... 5 = As vivid as real sight. Higher = more vivid. */
export const mindsEyeScale = { min: 1, max: 5 }

export const mindsEyeDimensions = [{ id: "vividness", colorVar: "--color-vividness" }]

/**
 * The 32 items in published order, grouped into eight scenes of four. All load on
 * the single `vividness` dimension with no reverse-keying. Order matters only for
 * matching the verbatim wording in the content files; the mean scorer is
 * order-independent. The first item of each scene (1, 5, 9, 13, 17, 21, 25, 29)
 * carries that scene's framing as its questionHelper in the content files.
 */
export const mindsEyeQuestions: QuestionStructure[] = Array.from(
  { length: 32 },
  (_, i) => ({ id: `vviq${i + 1}`, dimension: "vividness" })
)

export const mindsEyeSources: Source[] = [
  {
    label:
      "Marks, D. F. (1995), the VVIQ-2, posted free to use without permission by the author",
    url: "https://davidfmarks.net/vividness-of-visual-imagery-questionnaire-2/",
  },
  {
    label:
      "Marks, D. F. (1973), the original Vividness of Visual Imagery Questionnaire, British Journal of Psychology",
    url: "https://en.wikipedia.org/wiki/Vividness_of_Visual_Imagery_Questionnaire",
  },
  {
    label:
      "Zeman, A. et al. (2020), Phantasia: the psychological significance of lifelong visual imagery vividness extremes, Cortex",
    url: "https://medicine-vet-medicine.ed.ac.uk/sites/default/files/2025-10/Research%20article%20-%20Zeman%20et%20al%20-%20Cortex%20-%202020.pdf",
  },
  {
    label:
      "Dance, C. J. et al. (2022), the prevalence of aphantasia (VVIQ <= 32), estimating ~3-4% of people",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10403065/",
  },
  {
    label: "Meadows Research, the VVIQ interpretive bands (population norms table)",
    url: "https://docs.meadows-research.com/presets/vviq/",
  },
]

/** Five interpretive bands on the per-item mean (1.00 to 5.00). */
function bandFor(mean: number): string {
  if (mean <= 2.0) return "aphantasia"
  if (mean <= 3.0) return "faint"
  if (mean <= 4.0) return "typical"
  if (mean < 4.75) return "vivid"
  return "hyperphantasia"
}

/**
 * Score the single vividness dimension and pick the band. The engine's Likert
 * mean gives us both the 0 to 100 bar and the raw mean; we band on that mean and
 * override `level` so the bar colors with the band (aphantasia/faint low, typical
 * medium, vivid/hyperphantasia high) rather than the generic 40/60 cutoffs.
 */
export function scoreMindsEye(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...mindsEyeScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = mindsEyeQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = mindsEyeDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const [scored] = scoreLikertDimensions(answers, questions, dims, scale)
  const band = bandFor(scored.raw)
  const level =
    band === "aphantasia" || band === "faint"
      ? "low"
      : band === "typical"
        ? "medium"
        : "high"

  const dimension: ScoredDimension = { ...scored, level }

  return { outcomeId: band, dimensions: [dimension] }
}
