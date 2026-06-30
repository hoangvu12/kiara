import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  compassionDimensions,
  compassionQuestions,
  compassionScale,
  compassionSources,
  scoreSelfCompassion,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Self-Compassion Scale (SCS). A twenty-six item self-report, reproduced verbatim
 * from Neff's published instrument, on how kindly you respond to yourself when you
 * fail or struggle. Neff's three components are modeled as three bipolar axes
 * (self-kindness vs self-judgment, common humanity vs isolation, mindfulness vs
 * over-identification), and the named result is the overall band, low / moderate /
 * high, from the grand mean of the three.
 */
export const selfCompassionTest: LocalizedTestDefinition = {
  id: "self-compassion",
  slug: "self-compassion",
  estimatedMinutes: 6,
  scale: compassionScale,
  dimensions: compassionDimensions,
  questions: compassionQuestions,
  bipolar: true,
  sources: compassionSources,
  score: scoreSelfCompassion,
  content: { en, vi },
}
