import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  esteemDimensions,
  esteemQuestions,
  esteemScale,
  esteemSources,
  scoreEsteem,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Rosenberg Self-Esteem Scale (RSE). A ten-item self-report measuring global
 * self-esteem as a single score, with the items reproduced verbatim from the
 * public-domain instrument. One unidimensional construct, so it reports one score
 * with low / typical / high bands rather than a profile of dimensions.
 */
export const selfEsteemTest: LocalizedTestDefinition = {
  id: "self-esteem",
  slug: "self-esteem",
  estimatedMinutes: 3,
  scale: esteemScale,
  dimensions: esteemDimensions,
  questions: esteemQuestions,
  sources: esteemSources,
  score: scoreEsteem,
  content: { en, vi },
}
