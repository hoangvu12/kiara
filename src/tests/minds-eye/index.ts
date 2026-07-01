import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  mindsEyeDimensions,
  mindsEyeQuestions,
  mindsEyeScale,
  mindsEyeSources,
  scoreMindsEye,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * The Mind's Eye test (VVIQ-2, Marks 1995). Thirty-two items, reproduced verbatim
 * from the freely posted instrument, measure how vividly a person forms voluntary
 * visual mental images. One unidimensional spectrum, reported as a single score
 * with five bands from aphantasia (no mind's eye) to hyperphantasia (imagery as
 * vivid as real seeing).
 */
export const mindsEyeTest: LocalizedTestDefinition = {
  id: "minds-eye",
  slug: "minds-eye",
  estimatedMinutes: 6,
  scale: mindsEyeScale,
  dimensions: mindsEyeDimensions,
  questions: mindsEyeQuestions,
  sources: mindsEyeSources,
  score: scoreMindsEye,
  content: { en, vi },
}
