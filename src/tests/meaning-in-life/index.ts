import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  meaningDimensions,
  meaningQuadrant,
  meaningQuestions,
  meaningScale,
  meaningSources,
  scoreMeaning,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Meaning in Life Questionnaire (MLQ). A ten-item self-report with two separate
 * subscales, presence of meaning and search for meaning, reproduced verbatim from
 * the published instrument. The two scores are never summed; they're placed on a
 * presence-by-search quadrant, so the result is a pairing (anchored, deepening,
 * seeking, adrift) rather than one number.
 */
export const meaningInLifeTest: LocalizedTestDefinition = {
  id: "meaning-in-life",
  slug: "meaning-in-life",
  estimatedMinutes: 3,
  scale: meaningScale,
  dimensions: meaningDimensions,
  questions: meaningQuestions,
  quadrant: meaningQuadrant,
  sources: meaningSources,
  score: scoreMeaning,
  content: { en, vi },
}
