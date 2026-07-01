import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  optimismDimensions,
  optimismQuadrant,
  optimismQuestions,
  optimismScale,
  optimismSources,
  scoreOptimism,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * Optimism test (Life Orientation Test-Revised, LOT-R). Six scored items from the
 * published instrument (fillers omitted), reproduced verbatim. Rather than sum the
 * optimistic and pessimistic items into the authors' single 0-24 total, we keep
 * them as two separate, research-backed facets and cross them on an optimism-by-
 * pessimism quadrant, so the result is a pairing (optimist, realist, pessimist,
 * even keel) rather than one number.
 */
export const optimismTest: LocalizedTestDefinition = {
  id: "optimism",
  slug: "optimism",
  estimatedMinutes: 2,
  scale: optimismScale,
  dimensions: optimismDimensions,
  questions: optimismQuestions,
  quadrant: optimismQuadrant,
  sources: optimismSources,
  score: scoreOptimism,
  content: { en, vi },
}
