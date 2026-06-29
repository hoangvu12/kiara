# Kiara: Psychology & Philosophy Tests

An extensible platform for research-grounded self-assessment tests. The app ships
with four: a validated **Attachment Style Test** (ECR-R), an ability-based
**Emotional Intelligence Test** (STEU-B + STEM-B), a **Childhood Experiences
Profile** (adapted from the MACE scale), and a **16 Personality Types** test (an
independent Jungian + Big Five instrument, not affiliated with the MBTI®).

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

The app is a generic **test engine** that renders any test from a single config
object. The pages (catalog, intro, runner, results) never hard-code a specific
test. Adding a test means adding one definition and registering it; no engine
code changes.

```
src/
  lib/
    test-engine/
      types.ts      # TestDefinition + structure/content (localized) types
      scoring.ts    # Likert helpers (reverse-keying, normalize, levelFromScore)
      localize.ts   # merges neutral structure + one locale's content
      registry.ts   # the list of all tests  <- register new tests here
      storage.ts    # localStorage persistence (answers + chosen perspective)
    i18n/
      config.ts     # supported locales + detection
      ui.ts         # interface-chrome strings per locale
      LocaleProvider.tsx  # <LocaleProvider>, useLocale()
  tests/
    attachment-style/   # ECR-R, Likert
    eq-ability/         # STEU-B + STEM-B, multiple-choice
    childhood-trauma/   # MACE, yes/no severity profile
    sixteen-types/      # Jungian + Big Five, 16-type Likert
      structure.ts  # language-neutral: ids, scoring, dimensions
      index.ts      # assembles structure + content per language
      content/
        en.ts       # all English strings (questions, outcomes, ...)
        vi.ts       # Vietnamese translation
  components/        # Layout, LikertScale, ChoiceInput, DimensionQuadrant, toggles, ui/*
  pages/             # CatalogPage, TestIntroPage, TestRunnerPage, ResultsPage
```

## The tests

- **Attachment Style** (`/attachment-style`, ~6 min). The ECR-R, scored on the
  two-dimension model (anxiety, avoidance) with a quadrant visual. Likert items.
- **Emotional Intelligence** (`/emotional-intelligence`, ~12 min). Two ability
  subtests where you pick the best answer rather than rate agreement. Scored as
  percent correct.
- **Childhood Experiences Profile** (`/childhood-experiences`, ~8 min). Ten
  maltreatment types from the MACE, each shown as a severity bar with an
  interpretive read when a type is elevated. Yes/no items.
- **16 Personality Types** (`/16-personality-types`, ~7 min). Four bipolar axes
  (Mind, Energy, Nature, Tactics) scored from balanced Likert items combine into
  one of 16 four-letter types. Built on Jung's type theory and the Big Five; an
  independent instrument, **not** the MBTI®. Scores are shown as sliding scales
  and the copy is explicit that a near-midpoint axis can tip either way.

Each test is split into a language-neutral **structure** (ids, scoring,
dimensions, reverse flags) and one **content** block per language. The pages
render whatever the active locale resolves to.

## Answer formats

A question renders one of two inputs, picked automatically from its shape:

- **Likert** (default). Set the test's `scale` (min/max + anchor labels) and tag
  each question with a `dimension` and optional `reverse`. Used by the attachment
  and childhood tests.
- **Multiple choice.** Give the question an `optionIds` array in the structure
  and the matching option text in each locale's `content.options`. The runner
  shows a choice list, and the stored answer is the 1-based index of the chosen
  option. This is how the ability EQ test works (pick the most effective action),
  and the same path handles simple yes/no items.

Scoring is just a function from answers to a result, so a test isn't limited to
the built-in Likert math. For the common case, reuse `scoreLikertDimensions` and
`levelFromScore` from `scoring.ts`. When a test needs its own logic it writes its
own scorer: the EQ test awards partial credit from expert ratings, and the MACE
test sets each dimension's level from the published per-type cutoffs.

## Adding a new test

1. Create `src/tests/<your-test>/structure.ts` with the ids, `dimensions`,
   `questions` (each tagged with a `dimension`, plus `reverse` or `optionIds` as
   needed), and a `score(answers)` function. Reuse `scoreLikertDimensions` for the
   common Likert pattern, or write a scorer that fits the instrument.
2. Add `content/en.ts` (and any other languages) exporting a `TestContent`: the
   title, outcomes, every question text keyed by id, and `options` text for any
   choice items.
3. Assemble both in `index.ts` as a `LocalizedTestDefinition`, then add it to the
   array in `src/lib/test-engine/registry.ts`:
   ```ts
   import { yourTest } from "@/tests/your-test"
   export const tests = [attachmentStyleTest, eqAbilityTest, childhoodTraumaTest, yourTest]
   ```

The catalog card, question flow, progress, results page, score breakdown, and
sources all come from the definition. A test can also opt into a few extra
results-page fields when the defaults don't fit: `resultKicker`, `scoresTitle`,
`scoresHint`, `insightsTitle`, and `insightsIntro` for copy, and a per-dimension
`insight` line that only shows when that dimension comes out elevated. Set
`bipolar: true` when the dimensions are two-sided axes (Introversion vs
Extraversion, say): the results page then renders each one as a centered slider
with a pole label at each end and the share toward the side you lean to, instead
of the one-directional fill bar the unipolar tests use.

## Languages

The header has a language toggle. The choice is saved, and the browser language
is used on first visit. To add a language:

1. Add its code to `src/lib/i18n/config.ts` and a dictionary in `ui.ts`.
2. Add a matching `content/<code>.ts` to each test and list it in the test's
   `index.ts`.

English is the fallback for anything a locale hasn't translated. The app ships
with **English** and **Vietnamese** (`vi`). The English source instruments stay
the scientific reference; the Vietnamese is a careful translation, not a formally
validated version.

## Answering perspectives

A test can offer answering **lenses** (`perspectiveIds` + per-locale
`perspectives`). The attachment test offers *romantic relationships* and *close
relationships in general*. The "general" lens lets people who have never been in
a romantic relationship answer about close friends and family instead, following
the approach of the ECR-RS (Fraley et al., 2011). The chosen lens sets the
instruction shown above each question and is remembered per test. A lens can also
reword specific items through `questionsByPerspective` without touching the
scoring, so the "general" lens can drop romantic-only phrasing on the few items
that hard-code it.

## Instruments and sources

**Attachment Style.** Based on the **Experiences in Close Relationships-Revised
(ECR-R)** (Fraley, Waller & Brennan, 2000), one of the most validated adult
attachment measures (internal reliability typically above .90). All 36 items are
verbatim from the instrument, with correct reverse-keying. Scoring uses the
two-dimension model: **anxiety** (fear of abandonment) and **avoidance**
(discomfort with closeness). The four named styles are quadrants of those axes.
Per the authors' guidance, the results lead with the continuous scores and treat
the style as a friendly summary, not a clinical label.

- ECR-R: http://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm
- ECR-RS (attachment in relationships generally): https://labs.psychology.illinois.edu/~rcfraley/measures/relstructures.htm
- Adult attachment measures: http://labs.psychology.illinois.edu/~rcfraley/measures/measures.html
- Bartholomew & Horowitz (1991) four-category model

**Emotional Intelligence.** The two most defensible branches of the
Mayer-Salovey ability model: **understanding** emotions (STEU-B, 19 items, keyed
by Roseman's appraisal theory) and **managing** them (STEM-B, 18 items, partial
credit from expert ratings). Scores are percent correct, not norm-referenced
percentiles, so the bands are interpretive rather than clinical.

- MacCann & Roberts (2008), New Paradigms for Assessing EI: https://pubmed.ncbi.nlm.nih.gov/18729584/
- Allen et al. (2014), STEU-Brief via IRT: https://www.sciencedirect.com/science/article/abs/pii/S0191886914000713
- Allen et al. (2015), STEM-Brief via IRT: https://www.sciencedirect.com/science/article/abs/pii/S0191886915000902
- Open-access item bank (full + brief STEU/STEM), OSF: https://osf.io/mqp2x/

**Childhood Experiences Profile.** Adapted from the **MACE** (Maltreatment and
Abuse Chronology of Exposure) scale (Teicher & Parigger, 2015), an open-access
(CC BY) instrument covering ten types of childhood maltreatment. The app uses the
types-and-severity form: each item is yes/no, and each type gets a 0 to 100
severity score. This is an adaptation, not the verbatim instrument. Item wording
is naturalized for plain reading, and the bars show a transparent share of items
rather than MACE's item-response weighting. The one place it stays faithful to
the original numbers is which types get flagged as present, which uses the exact
per-type cutoffs from the paper.

- Teicher & Parigger (2015), the MACE scale, PLOS ONE (open access): https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0117423
- Full text with subscale tables and cutoffs: https://pmc.ncbi.nlm.nih.gov/articles/PMC4340880/
- MACE scoring and translations, Dr. Teicher's lab: https://drteicher.wordpress.com/2017/03/18/maltreatment-and-abuse-chronology-of-exposure-mace-scale-translations/
- Felitti et al. (1998), the original ACE study: https://pubmed.ncbi.nlm.nih.gov/9635069/

**16 Personality Types.** An **independent** instrument built on the public-domain
Jungian theory of psychological types and on the **Big Five**: the four axes line
up with Extraversion, Openness, Agreeableness, and Conscientiousness (McCrae &
Costa, 1989). The 32 items are original wording (our copyright), not taken from any
licensed bank, and each axis is scored as a continuous slider — the four-letter
type is a friendly summary, and the copy is honest that a near-midpoint axis can
tip either way (the well-known retest-instability critique, Pittenger 1993). This
test is **not** the MBTI® and has no affiliation with it; "Myers-Briggs" and "MBTI"
are trademarks of their respective owners and are deliberately avoided. See
`research/mbti/RESEARCH.md` for the full background.

- Jung (1921), Psychological Types: https://en.wikipedia.org/wiki/Psychological_Types
- McCrae & Costa (1989), reinterpreting type via the Big Five: https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-6494.1989.tb00759.x
- Pittenger (1993), on type instability: https://www.researchgate.net/publication/232494957_Cautionary_comments_regarding_the_Myers-Briggs_Type_Indicator
- Open-Source Psychometrics Project, open Jungian scales: https://openpsychometrics.org/tests/OEJTS/

These are educational self-reflection tools, **not** a clinical diagnosis.
</content>
</invoke>
