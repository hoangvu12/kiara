import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  scoreSixteen,
  sixteenDimensions,
  sixteenQuestions,
  sixteenScale,
  sixteenSources,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * The 16-type personality test, assembled from its language-neutral structure
 * plus one content block per language. An independent Jungian + Big Five
 * instrument that reports a four-letter type as a friendly summary of four
 * continuous axes. Not affiliated with the MBTI® (see the content disclaimers).
 */
export const sixteenTypesTest: LocalizedTestDefinition = {
  id: "sixteen-types",
  slug: "16-personality-types",
  estimatedMinutes: 7,
  scale: sixteenScale,
  dimensions: sixteenDimensions,
  questions: sixteenQuestions,
  sources: sixteenSources,
  bipolar: true,
  score: scoreSixteen,
  content: { en, vi },
}
