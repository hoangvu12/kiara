/**
 * Generic test-engine types.
 *
 * Every test in the app is a single `TestDefinition` object. The catalog,
 * runner, and results pages are fully generic and render whatever a test
 * declares here — so adding a new test means adding one definition file and
 * registering it. No engine code changes required.
 */

export type LikertScale = {
  /** Lowest selectable value (e.g. 1). */
  min: number
  /** Highest selectable value (e.g. 7). */
  max: number
  /** Short label for the low anchor, e.g. "Strongly disagree". */
  minLabel: string
  /** Short label for the high anchor, e.g. "Strongly agree". */
  maxLabel: string
  /** Optional per-point labels (length must equal max - min + 1). */
  pointLabels?: string[]
}

/** One selectable answer in a multiple-choice (ability) item. */
export type ChoiceOption = {
  /** Stable id, e.g. "a". The stored answer is the 1-based index of this option. */
  id: string
  text: string
}

export type Question = {
  id: string
  text: string
  /** Which dimension this item loads onto (matches a DimensionDef.id). */
  dimension: string
  /** If true, the answer is reverse-keyed before scoring. */
  reverse?: boolean
  /**
   * Multiple-choice options. When present, the runner renders a choice list
   * (one correct/best answer) instead of the Likert scale, and the stored
   * answer is the 1-based index of the chosen option. Used by ability tests.
   */
  options?: ChoiceOption[]
}

export type DimensionDef = {
  id: string
  label: string
  /** One-line explanation shown on the results page. */
  description: string
  lowLabel: string
  highLabel: string
  /**
   * Optional "how this can show up" interpretation, shown on the results page
   * only when this dimension comes out elevated (level above "low"). Worded as
   * a common tendency, not a verdict. Used by tests that pair each score with a
   * behavioral read (e.g. the childhood-experiences profile).
   */
  insight?: string
  /** CSS custom-property name used to color this dimension, e.g. "--color-anxiety". */
  colorVar?: string
}

export type ScoreLevel = "low" | "medium" | "high"

export type ScoredDimension = {
  id: string
  label: string
  description: string
  /** Normalized 0–100 score. */
  score: number
  /** Mean on the original scale (e.g. 1–7). */
  raw: number
  level: ScoreLevel
}

export type Outcome = {
  id: string
  name: string
  tagline: string
  summary: string
  longDescription: string
  strengths: string[]
  growth: string[]
  /** Optional situation-specific framing, keyed by ResultContext.id. */
  contexts?: Record<string, string>
}

export type ResultContext = {
  id: string
  label: string
}

/**
 * An answering lens. Lets one instrument be framed different ways, e.g. for
 * romantic relationships vs. close relationships in general (useful for people
 * who have never been in a romantic relationship).
 */
export type Perspective = {
  id: string
  label: string
  /** Framing shown above each question while this lens is selected. */
  instruction: string
  /** Optional reassurance / context shown on the intro for this lens. */
  note?: string
}

export type TestResult = {
  outcomeId: string
  dimensions: ScoredDimension[]
}

/** Optional 2-axis visualization (e.g. anxiety × avoidance quadrant). */
export type QuadrantConfig = {
  xDimension: string
  yDimension: string
  /** outcomeId for each quadrant. */
  quadrants: {
    lowXLowY: string
    highXLowY: string
    lowXHighY: string
    highXHighY: string
  }
}

export type Source = { label: string; url: string }

export type TestDefinition = {
  id: string
  /** URL slug, e.g. "attachment-style". */
  slug: string
  title: string
  tagline: string
  description: string
  category: string
  estimatedMinutes: number
  /** Optional framing shown at the top of every question (e.g. who to think about). */
  instructions?: string
  /** Optional kicker above the outcome name on the results page. */
  resultKicker?: string
  /** Optional heading for the score breakdown card (defaults to a UI string). */
  scoresTitle?: string
  /** Optional one-line hint under the score breakdown heading. */
  scoresHint?: string
  /** Optional heading for the per-dimension interpretation card. */
  insightsTitle?: string
  /** Optional framing line shown under the interpretation heading. */
  insightsIntro?: string
  /** Short note on what instrument / theory the test is based on. */
  scientificBasis: string
  sources: Source[]
  disclaimer: string
  scale: LikertScale
  dimensions: DimensionDef[]
  questions: Question[]
  /** Optional "your situation" selector that reframes the outcome copy. */
  contexts?: ResultContext[]
  outcomes: Record<string, Outcome>
  quadrant?: QuadrantConfig
  /**
   * When true, each dimension is a two-sided axis (e.g. Introversion ↔
   * Extraversion) rather than a one-directional amount. The results page then
   * renders a centered slider with a pole label at each end and a marker, so a
   * low score reads as "strongly the left pole" instead of "barely anything".
   */
  bipolar?: boolean
  /** Optional answering lenses (e.g. romantic vs. general relationships). */
  perspectives?: Perspective[]
  /**
   * Optional per-perspective question wording overrides:
   * perspectiveId -> (questionId -> text). Items not listed keep their default
   * `questions` text. Used so e.g. a "general" lens can drop romantic-specific
   * phrasing on the few items that hard-code it. Scoring is unaffected.
   */
  questionsByPerspective?: Record<string, Record<string, string>>
  /**
   * Optional per-perspective question subset: perspectiveId -> ordered question
   * ids to actually ask under that lens. When set for the active perspective,
   * the runner shows only those items (in this order) and scoring averages just
   * the answered ones. Lets one test carry two instruments — e.g. the full
   * 36-item romantic ECR-R for a partner, but the short 9-item ECR-RS for a
   * parent or friend. Perspectives not listed ask the full `questions` set.
   */
  perspectiveQuestionIds?: Record<string, string[]>
  /** Pure scoring function: answers (questionId -> raw value) -> result. */
  score: (answers: Record<string, number>) => TestResult
}

export type Answers = Record<string, number>

/* ------------------------------------------------------------------ *
 * Localization
 *
 * A test is split into a language-neutral STRUCTURE (ids, scoring, reverse
 * flags, quadrant) and per-locale CONTENT (all human-readable strings). The
 * resolver in localize.ts merges a structure with one locale's content to
 * produce the TestDefinition the pages render. Adding a language = adding one
 * content block; the structure and scoring never change.
 * ------------------------------------------------------------------ */

export type LocalizedScale = {
  minLabel: string
  maxLabel: string
  pointLabels?: string[]
}

export type LocalizedDimension = {
  label: string
  description: string
  lowLabel: string
  highLabel: string
  /** Optional "how this can show up" read, shown only when elevated. */
  insight?: string
}

export type LocalizedOutcome = {
  name: string
  tagline: string
  summary: string
  longDescription: string
  strengths: string[]
  growth: string[]
  contexts?: Record<string, string>
}

export type LocalizedPerspective = {
  label: string
  instruction: string
  note?: string
}

/** All human-readable strings for one test in one language. */
export type TestContent = {
  title: string
  tagline: string
  description: string
  category: string
  scientificBasis: string
  disclaimer: string
  instructions?: string
  /** Kicker above the outcome name on the results page, e.g. "Your result". */
  resultKicker?: string
  /** Heading + hint for the score breakdown card (optional; UI string fallback). */
  scoresTitle?: string
  scoresHint?: string
  /** Heading + framing line for the per-dimension interpretation card. */
  insightsTitle?: string
  insightsIntro?: string
  scale: LocalizedScale
  /** Keyed by DimensionStructure.id. */
  dimensions: Record<string, LocalizedDimension>
  /** Keyed by context id. */
  contexts?: Record<string, string>
  /** Keyed by perspective id. */
  perspectives?: Record<string, LocalizedPerspective>
  /** Keyed by outcome id. */
  outcomes: Record<string, LocalizedOutcome>
  /** Keyed by question id. */
  questions: Record<string, string>
  /**
   * Localized option text for multiple-choice items:
   * questionId -> (optionId -> text). Only needed for ability/choice tests.
   */
  options?: Record<string, Record<string, string>>
  /**
   * Optional per-perspective wording overrides: perspectiveId -> (questionId ->
   * text). Lets a lens (e.g. "general") reword the few items that hard-code a
   * romantic target. Items not listed fall back to `questions`.
   */
  questionsByPerspective?: Record<string, Record<string, string>>
  /** Optional per-locale source labels; falls back to the structure's sources. */
  sources?: Source[]
}

export type QuestionStructure = {
  id: string
  dimension: string
  reverse?: boolean
  /**
   * Ordered option ids for a multiple-choice item, e.g. ["a","b","c","d","e"].
   * The content file supplies each option's text. The 1-based index of the
   * chosen option is what gets stored and scored.
   */
  optionIds?: string[]
}

export type DimensionStructure = {
  id: string
  colorVar?: string
}

export type TestStructure = {
  id: string
  slug: string
  estimatedMinutes: number
  scale: { min: number; max: number }
  dimensions: DimensionStructure[]
  questions: QuestionStructure[]
  contexts?: string[]
  perspectiveIds?: string[]
  /** Optional per-perspective question subset (see TestDefinition). */
  perspectiveQuestionIds?: Record<string, string[]>
  quadrant?: QuadrantConfig
  /** See TestDefinition.bipolar. Renders dimensions as two-sided sliders. */
  bipolar?: boolean
  sources: Source[]
  score: (answers: Record<string, number>) => TestResult
}

export type LocalizedTestDefinition = TestStructure & {
  content: Record<string, TestContent>
}
