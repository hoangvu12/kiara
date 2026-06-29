import type { LocalizedTestDefinition } from "@/lib/test-engine/types"
import {
  attachmentContexts,
  attachmentDimensions,
  attachmentPerspectiveIds,
  attachmentPerspectiveQuestionIds,
  attachmentQuadrant,
  attachmentQuestions,
  attachmentScale,
  attachmentSources,
  scoreAttachment,
} from "./structure"
import { en } from "./content/en"
import { vi } from "./content/vi"

/**
 * The attachment test, assembled from its language-neutral structure plus one
 * content block per language. To add a language, add a content file and list it
 * here. To translate nothing else changes.
 */
export const attachmentStyleTest: LocalizedTestDefinition = {
  id: "attachment-style",
  slug: "attachment-style",
  estimatedMinutes: 6,
  scale: attachmentScale,
  dimensions: attachmentDimensions,
  questions: attachmentQuestions,
  contexts: attachmentContexts,
  perspectiveIds: attachmentPerspectiveIds,
  perspectiveQuestionIds: attachmentPerspectiveQuestionIds,
  quadrant: attachmentQuadrant,
  sources: attachmentSources,
  score: scoreAttachment,
  content: { en, vi },
}
