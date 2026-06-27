# Kiara — Psychology & Philosophy Tests

A minimal, extensible platform for research-grounded self-assessment tests.
First test: a validated **Attachment Style Test** (ECR-R).

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **shadcn/ui**-style components (`src/components/ui`)
- **react-router-dom** for routing

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
```

## How it's structured

The app is a generic **test engine** that renders any test from a single
config object. Pages (catalog → intro → runner → results) never hard-code a
specific test.

```
src/
  lib/
    test-engine/
      types.ts      # TestDefinition + structure/content (localized) types
      scoring.ts    # reusable Likert scoring helpers (reverse-keying, normalize)
      localize.ts   # merges neutral structure + one locale's content
      registry.ts   # the list of all tests  <- register new tests here
      storage.ts    # localStorage persistence (answers + chosen perspective)
    i18n/
      config.ts     # supported locales + detection
      ui.ts         # interface-chrome strings per locale
      LocaleProvider.tsx  # <LocaleProvider>, useLocale()
  tests/
    attachment-style/
      structure.ts  # language-neutral: ids, reverse flags, scoring, quadrant
      index.ts      # assembles structure + content per language
      content/
        en.ts       # all English strings (questions, outcomes, ...)
        vi.ts       # Vietnamese translation
  components/        # Layout, LikertScale, DimensionQuadrant, Language/ThemeToggle, ui/*
  pages/             # CatalogPage, TestIntroPage, TestRunnerPage, ResultsPage
```

## Adding a new test

A test is split into a language-neutral **structure** (ids, reverse flags,
scoring, quadrant) and one **content** block per language. The pages render
whatever the active locale resolves to.

1. Create `src/tests/<your-test>/structure.ts` with the ids, `dimensions`,
   `questions` (each tagged with a `dimension` and optional `reverse`), and a
   `score(answers)` function. Reuse `scoreLikertDimensions` from
   `lib/test-engine/scoring.ts` for the common Likert pattern.
2. Add `content/en.ts` (and any other languages) exporting a `TestContent`:
   the title, outcomes, and every question text keyed by id.
3. Assemble both in `index.ts` as a `LocalizedTestDefinition`, then register it
   in `src/lib/test-engine/registry.ts`:
   ```ts
   import { yourTest } from "@/tests/your-test"
   export const tests = [attachmentStyleTest, yourTest]
   ```

That's it — the catalog card, question flow, progress, results page, quadrant
visual, context switcher, and sources are all generated from the definition.

## Languages

The header has a language toggle; the choice is saved and the browser language
is used on first visit. To add a language:

1. Add its code to `src/lib/i18n/config.ts` and a dictionary in `ui.ts`.
2. Add a matching `content/<code>.ts` to each test and list it in the test's
   `index.ts`.

English is the fallback for anything a locale hasn't translated. Ships with
**English** and **Vietnamese** (`vi`). The English ECR-R remains the scientific
reference; the Vietnamese is a careful translation, not a formally validated
instrument.

## Answering perspectives

A test can offer answering **lenses** (`perspectiveIds` + per-locale
`perspectives`). The attachment test offers *romantic relationships* and *close
relationships in general*. The "general" lens lets people who have never been in
a romantic relationship answer about close friends and family instead, mirroring
the approach of the ECR-RS (Fraley et al., 2011). The chosen lens sets the
instruction shown above each question and is remembered per test.

## The Attachment Style Test

Based on the **Experiences in Close Relationships-Revised (ECR-R)**
(Fraley, Waller & Brennan, 2000) — one of the most validated adult-attachment
measures (internal reliability typically > .90). All 36 items are verbatim from
the instrument, with correct reverse-keying.

Scoring follows the modern **two-dimension model**:

- **Anxiety** — fear of abandonment / a partner's unavailability
- **Avoidance** — discomfort with closeness and depending on others

The four "styles" are quadrants of these axes (secure, anxious-preoccupied,
dismissive-avoidant, fearful-avoidant). Per the instrument authors' guidance,
results **lead with the continuous dimension scores** and present the style as a
friendly summary — not a clinical label.

**Sources**
- ECR-R — http://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm
- ECR-RS (attachment in relationships generally) — https://labs.psychology.illinois.edu/~rcfraley/measures/relstructures.htm
- Adult attachment measures — http://labs.psychology.illinois.edu/~rcfraley/measures/measures.html
- Bartholomew & Horowitz (1991) four-category model

This is an educational self-reflection tool, **not** a clinical diagnosis.
