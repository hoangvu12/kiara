import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  maceDimensions,
  maceQuestions,
  maceScale,
  maceSources,
  scoreMace,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Childhood-experiences profile, adapted from the MACE scale. A yes/no
 * self-report that measures ten distinct types of childhood maltreatment and
 * presents them as a severity profile rather than a single label. The most
 * clinically sensitive test in the suite — see the disclaimer/crisis resources
 * in the content files.
 */
export const childhoodTraumaTest: LocalizedTestDefinition = {
  id: "childhood-trauma",
  slug: "childhood-experiences",
  estimatedMinutes: 8,
  scale: maceScale,
  dimensions: maceDimensions,
  questions: maceQuestions,
  sources: maceSources,
  score: scoreMace,
  content: { en, vi },
}
