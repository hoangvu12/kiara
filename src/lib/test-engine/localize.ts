import { FALLBACK_LOCALE } from "@/lib/i18n/config"
import type {
  LocalizedTestDefinition,
  TestContent,
  TestDefinition,
} from "./types"

/**
 * Merge a language-neutral test structure with one locale's content to produce
 * the TestDefinition that the catalog/runner/results pages render. Falls back
 * to the English content for any missing locale.
 */
export function resolveTest(
  def: LocalizedTestDefinition,
  locale: string
): TestDefinition {
  const c: TestContent = def.content[locale] ?? def.content[FALLBACK_LOCALE]

  return {
    id: def.id,
    slug: def.slug,
    title: c.title,
    tagline: c.tagline,
    description: c.description,
    category: c.category,
    estimatedMinutes: def.estimatedMinutes,
    instructions: c.instructions,
    resultKicker: c.resultKicker,
    scoresTitle: c.scoresTitle,
    scoresHint: c.scoresHint,
    scientificBasis: c.scientificBasis,
    sources: c.sources ?? def.sources,
    disclaimer: c.disclaimer,
    scale: { min: def.scale.min, max: def.scale.max, ...c.scale },
    dimensions: def.dimensions.map((d) => ({
      id: d.id,
      colorVar: d.colorVar,
      ...c.dimensions[d.id],
    })),
    questions: def.questions.map((q) => ({
      id: q.id,
      dimension: q.dimension,
      reverse: q.reverse,
      text: c.questions[q.id] ?? "",
      options: q.optionIds?.map((oid) => ({
        id: oid,
        text: c.options?.[q.id]?.[oid] ?? "",
      })),
    })),
    contexts: def.contexts?.map((id) => ({
      id,
      label: c.contexts?.[id] ?? id,
    })),
    perspectives: def.perspectiveIds?.map((id) => ({
      id,
      ...(c.perspectives?.[id] ?? { label: id, instruction: "" }),
    })),
    questionsByPerspective: c.questionsByPerspective,
    outcomes: Object.fromEntries(
      Object.entries(c.outcomes).map(([id, o]) => [id, { id, ...o }])
    ),
    quadrant: def.quadrant,
    // Wrap scoring so the returned dimension labels are localized too.
    score: (answers) => {
      const result = def.score(answers)
      return {
        ...result,
        dimensions: result.dimensions.map((sd) => ({
          ...sd,
          label: c.dimensions[sd.id]?.label ?? sd.label,
          description: c.dimensions[sd.id]?.description ?? sd.description,
        })),
      }
    },
  }
}
