import type {
  Answers,
  DimensionDef,
  LikertScale,
  Question,
  ScoredDimension,
  ScoreLevel,
} from "./types"

/** Reverse-key a raw value on a scale (e.g. 7-point: 2 -> 6). */
export function reverseValue(value: number, scale: LikertScale): number {
  return scale.min + scale.max - value
}

/** Map a raw mean on [min,max] to a 0–100 score. */
export function normalize(raw: number, scale: LikertScale): number {
  const span = scale.max - scale.min
  if (span <= 0) return 0
  return Math.round(((raw - scale.min) / span) * 100)
}

export function levelFromScore(score: number): ScoreLevel {
  if (score < 40) return "low"
  if (score > 60) return "high"
  return "medium"
}

/**
 * Compute mean-based dimension scores for a Likert test. Handles reverse-keyed
 * items. Returns one ScoredDimension per provided DimensionDef.
 */
export function scoreLikertDimensions(
  answers: Answers,
  questions: Question[],
  dimensions: DimensionDef[],
  scale: LikertScale
): ScoredDimension[] {
  return dimensions.map((dim) => {
    const items = questions.filter((q) => q.dimension === dim.id)
    const values: number[] = []
    for (const q of items) {
      const a = answers[q.id]
      if (a == null) continue
      values.push(q.reverse ? reverseValue(a, scale) : a)
    }
    const raw =
      values.length > 0
        ? values.reduce((sum, v) => sum + v, 0) / values.length
        : scale.min
    const score = normalize(raw, scale)
    return {
      id: dim.id,
      label: dim.label,
      description: dim.description,
      raw: Math.round(raw * 100) / 100,
      score,
      level: levelFromScore(score),
    }
  })
}

/** Midpoint of a scale, used as the high/low threshold for quadrant logic. */
export function scaleMidpoint(scale: LikertScale): number {
  return (scale.min + scale.max) / 2
}
