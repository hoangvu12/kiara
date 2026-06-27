import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  eqDimensions,
  eqQuestions,
  eqScale,
  eqSources,
  scoreEq,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Ability-based emotional intelligence test (STEU-B + STEM-B). A performance
 * test with correct/best answers, not a self-report scale — so it uses the
 * engine's "choice" question format rather than the Likert scale.
 */
export const eqAbilityTest: LocalizedTestDefinition = {
  id: "eq-ability",
  slug: "emotional-intelligence",
  estimatedMinutes: 12,
  scale: eqScale,
  dimensions: eqDimensions,
  questions: eqQuestions,
  sources: eqSources,
  score: scoreEq,
  content: { en, vi },
}
