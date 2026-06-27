import type {
  DimensionDef,
  LikertScale,
  Question,
  QuestionStructure,
  Source,
  TestResult,
} from "@/lib/test-engine/types"
import { scaleMidpoint, scoreLikertDimensions } from "@/lib/test-engine/scoring"

/**
 * Language-neutral structure of the ECR-R attachment test: item ids, which
 * dimension each loads onto, reverse-keying, scoring, and the quadrant map.
 * All wording lives in content/<locale>.ts. The item ids here are the keys the
 * content files translate.
 *
 * Source: Fraley, Waller & Brennan (2000), the ECR-R; item set from R. C.
 * Fraley's lab. Reverse-keyed: 2 anxiety items (anx9, anx11) and 12 avoidance
 * items. Items are interleaved so the questionnaire doesn't feel repetitive.
 */

export const attachmentScale = { min: 1, max: 7 }

export const attachmentDimensions = [
  { id: "anxiety", colorVar: "--color-anxiety" },
  { id: "avoidance", colorVar: "--color-avoidance" },
]

export const attachmentContexts = ["single", "partnered", "parent"]

export const attachmentPerspectiveIds = ["romantic", "general"]

const anxietyIds: QuestionStructure[] = [
  { id: "anx1", dimension: "anxiety" },
  { id: "anx2", dimension: "anxiety" },
  { id: "anx3", dimension: "anxiety" },
  { id: "anx4", dimension: "anxiety" },
  { id: "anx5", dimension: "anxiety" },
  { id: "anx6", dimension: "anxiety" },
  { id: "anx7", dimension: "anxiety" },
  { id: "anx8", dimension: "anxiety" },
  { id: "anx9", dimension: "anxiety", reverse: true },
  { id: "anx10", dimension: "anxiety" },
  { id: "anx11", dimension: "anxiety", reverse: true },
  { id: "anx12", dimension: "anxiety" },
  { id: "anx13", dimension: "anxiety" },
  { id: "anx14", dimension: "anxiety" },
  { id: "anx15", dimension: "anxiety" },
  { id: "anx16", dimension: "anxiety" },
  { id: "anx17", dimension: "anxiety" },
  { id: "anx18", dimension: "anxiety" },
]

const avoidanceIds: QuestionStructure[] = [
  { id: "avo1", dimension: "avoidance" },
  { id: "avo2", dimension: "avoidance", reverse: true },
  { id: "avo3", dimension: "avoidance" },
  { id: "avo4", dimension: "avoidance", reverse: true },
  { id: "avo5", dimension: "avoidance" },
  { id: "avo6", dimension: "avoidance" },
  { id: "avo7", dimension: "avoidance" },
  { id: "avo8", dimension: "avoidance", reverse: true },
  { id: "avo9", dimension: "avoidance", reverse: true },
  { id: "avo10", dimension: "avoidance", reverse: true },
  { id: "avo11", dimension: "avoidance", reverse: true },
  { id: "avo12", dimension: "avoidance", reverse: true },
  { id: "avo13", dimension: "avoidance", reverse: true },
  { id: "avo14", dimension: "avoidance" },
  { id: "avo15", dimension: "avoidance", reverse: true },
  { id: "avo16", dimension: "avoidance", reverse: true },
  { id: "avo17", dimension: "avoidance", reverse: true },
  { id: "avo18", dimension: "avoidance", reverse: true },
]

/** Interleave anxiety/avoidance items. Order is irrelevant to scoring. */
function interleave(): QuestionStructure[] {
  const out: QuestionStructure[] = []
  const max = Math.max(anxietyIds.length, avoidanceIds.length)
  for (let i = 0; i < max; i++) {
    if (anxietyIds[i]) out.push(anxietyIds[i])
    if (avoidanceIds[i]) out.push(avoidanceIds[i])
  }
  return out
}

export const attachmentQuestions: QuestionStructure[] = interleave()

export const attachmentQuadrant = {
  xDimension: "avoidance",
  yDimension: "anxiety",
  quadrants: {
    lowXLowY: "secure",
    highXLowY: "dismissive",
    lowXHighY: "anxious",
    highXHighY: "fearful",
  },
}

/** Neutral sources (English labels); content files may override per locale. */
export const attachmentSources: Source[] = [
  {
    label: "Fraley, Waller & Brennan (2000), the ECR-R measure (UIUC)",
    url: "http://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm",
  },
  {
    label: "Fraley, Heffernan, Vicary & Brumbaugh (2011), ECR-RS for relationships in general",
    url: "https://labs.psychology.illinois.edu/~rcfraley/measures/relstructures.htm",
  },
  {
    label: "Brennan, Clark & Shaver (1998), original ECR and the two-scale model",
    url: "http://labs.psychology.illinois.edu/~rcfraley/measures/measures.html",
  },
  {
    label: "Bartholomew & Horowitz (1991), four-category model of adult attachment",
    url: "https://en.wikipedia.org/wiki/Attachment_in_adults",
  },
]

/**
 * Score answers into the two dimensions and pick the quadrant. Language-neutral:
 * dimension labels are filled in later by the locale resolver, so we pass empty
 * label placeholders here.
 */
export function scoreAttachment(answers: Record<string, number>): TestResult {
  const scale: LikertScale = { ...attachmentScale, minLabel: "", maxLabel: "" }
  const questions: Question[] = attachmentQuestions.map((q) => ({ ...q, text: "" }))
  const dims: DimensionDef[] = attachmentDimensions.map((d) => ({
    id: d.id,
    label: "",
    description: "",
    lowLabel: "",
    highLabel: "",
    colorVar: d.colorVar,
  }))

  const scored = scoreLikertDimensions(answers, questions, dims, scale)
  const anxiety = scored.find((d) => d.id === "anxiety")!
  const avoidance = scored.find((d) => d.id === "avoidance")!
  const mid = scaleMidpoint(scale) // 4 on a 1 to 7 scale

  const highAnx = anxiety.raw >= mid
  const highAvo = avoidance.raw >= mid

  let outcomeId: string
  if (!highAnx && !highAvo) outcomeId = "secure"
  else if (highAnx && !highAvo) outcomeId = "anxious"
  else if (!highAnx && highAvo) outcomeId = "dismissive"
  else outcomeId = "fearful"

  return { outcomeId, dimensions: scored }
}
