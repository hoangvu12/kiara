import type { LocalizedTestDefinition, TestDefinition } from "./types"
import { resolveTest } from "./localize"
import { attachmentStyleTest } from "@/tests/attachment-style"
import { eqAbilityTest } from "@/tests/eq-ability"
import { childhoodTraumaTest } from "@/tests/childhood-trauma"
import { sixteenTypesTest } from "@/tests/sixteen-types"
import { selfEsteemTest } from "@/tests/self-esteem"
import { meaningInLifeTest } from "@/tests/meaning-in-life"
import { selfCompassionTest } from "@/tests/self-compassion"

/**
 * The master list of tests in the app. To add a new test:
 *   1. Create a folder under src/tests/<your-test>/ exporting a
 *      LocalizedTestDefinition (neutral structure + per-locale content).
 *   2. Import it and add it to this array.
 * Everything else (catalog card, runner, results) is generated from it, in
 * whatever language is active.
 */
export const tests: LocalizedTestDefinition[] = [
  attachmentStyleTest,
  eqAbilityTest,
  childhoodTraumaTest,
  sixteenTypesTest,
  selfEsteemTest,
  meaningInLifeTest,
  selfCompassionTest,
]

/** Resolve every test into the active locale (for the catalog). */
export function getTests(locale: string): TestDefinition[] {
  return tests.map((t) => resolveTest(t, locale))
}

/** Resolve a single test by slug into the active locale. */
export function getTestBySlug(
  slug: string,
  locale: string
): TestDefinition | undefined {
  const def = tests.find((t) => t.slug === slug)
  return def ? resolveTest(def, locale) : undefined
}
