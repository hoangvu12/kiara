# Mind's Eye Test (VVIQ-2) — Implementation Spec

Self-contained build spec for the next Kiara test. Everything here is verified
against primary sources (2026-07). You can implement from this file alone after a
context clear. Follow the established test pattern (see `src/tests/self-esteem`
for a single-score/banded test, `src/tests/drive` for the house voice).

---

## 1. What it is & why

A "mind's eye" / **aphantasia** self-test: how vividly a person can form voluntary
visual mental images. This is the **standout novel pick** for Kiara — it measures a
*perceptual/cognitive* trait, unlike everything else in the catalog (all emotional/
personality). Aphantasia ("no mind's eye") is a viral, fascinating, shareable topic,
and the test also captures the opposite extreme, **hyperphantasia** (imagery as vivid
as real seeing). It's a single spectrum from "no image at all" to "as vivid as normal
vision," reported as a single score with 5 bands.

**Instrument:** Vividness of Visual Imagery Questionnaire, version 2 (**VVIQ-2**),
David F. Marks, 1995. 32 items, 8 scenarios × 4 items, rated 1–5.

**Why VVIQ-2 and NOT the original 16-item VVIQ:** the original VVIQ items are
copyright David Marks and are NOT free to reproduce (aphantasia sites explicitly
decline to host them for this reason). The **VVIQ-2 is explicitly free** — see
licensing below. So we host VVIQ-2 and score on the per-item mean, which makes the
established VVIQ cutoffs directly transferable (they're scale-anchored, 1–5).

---

## 2. Licensing — VERIFIED CLEAN ✅

From David Marks' own site (davidfmarks.net/vividness-of-visual-imagery-questionnaire-2/),
verbatim:

> "Researchers and interested individuals are free to use this questionnaire without
> seeking permission from the author."

That is an explicit free-use grant for the full VVIQ-2 (items + instructions). This is
the same footing as our other hosted instruments. Non-commercial educational Kiara use
is squarely covered.

**Marks' important caveat (must shape our disclaimer):** Marks warns that neither VVIQ
nor VVIQ-2 was designed or validated as a **diagnostic/clinical screening tool**, and
calls using it that way "an illegitimate abuse of this instrument," especially
commercially. So our copy must frame results as a **self-assessment of imagery
vividness**, not a diagnosis — use "may indicate aphantasia/hyperphantasia," never "you
have X." All vividness levels are normal variation.

---

## 3. The scale (verbatim, 1–5)

Higher = more vivid (VVIQ-2 reversed the original VVIQ's direction so high = vivid).

- **5** — "Perfectly clear and as vivid as normal vision"
- **4** — "Clear and reasonably vivid"
- **3** — "Moderately clear and vivid"
- **2** — "Vague and dim"
- **1** — "No image at all, you only 'know' that you are thinking of the object"

**Administration (Marks' protocol):** items are imaged **with eyes closed**. Original
wording: *"the question is read, you close your eyes, an image is formed with them
closed, and then open them to write the score."* For a web test, adapt the instruction:
ask the user to read each item, picture it in their mind's eye, then rate how vivid the
image was. Do NOT try to enforce literal eye-closing. Keep the rating meaning intact.

**Preamble (verbatim), show on intro:**
> "Visual imagery refers to the ability to visualize, that is, the ability to form
> mental pictures, or to 'see in the mind's eye'."

---

## 4. The 32 items — VERBATIM

Grouped by 8 scenarios. Each scenario has an intro sentence (show it as framing above
its 4 items — consider using the engine's per-question `helper` or a section framing;
simplest is to prepend the scene context into each item or show the intro once). Item
ids: `vviq1`…`vviq32`. All load on the single dimension `vividness`, **no reverse-keying**.

Two obvious source typos are corrected below (noted); everything else is exact. Keep the
corrections — they don't affect measurement and unfixed typos read as sloppy.

**Scenario 1** — intro: "Think of some relative or friend whom you frequently see (but
who is not with you at present) and consider carefully the picture that comes before
your mind's eye."
1. The exact contour of face, head, shoulders and body.
2. Characteristic poses of head, attitudes of body etc.
3. The precise carriage, length of step, etc. in walking.
4. The different colours worn in some familiar clothes.

**Scenario 2** — intro: "Think of the rising sun. Consider carefully the picture that
comes before your mind's eye."
5. The sun is rising above the horizon into a hazy sky.
6. The sky clears and surrounds the sun with blueness.
7. Clouds. A storm blows up, with flashes of lightning.  ← [corrected: source typo "lightening"]
8. A rainbow appears.

**Scenario 3** — intro: "Think of the front of a shop which you often go to. Consider
the picture that comes before your mind's eye."
9. The overall appearance of the shop from the opposite side of the road.
10. A window display including colours, shape and details of individual items for sale.
11. You are near the entrance. The colour, shape and details of the door.
12. You enter the shop and go to the counter. The counter assistant serves you. Money changes hands.

**Scenario 4** — intro: "Think of a country scene which involves trees, mountains and a
lake. Consider the picture that comes before your mind's eye."
13. The contours of the landscape.
14. The colour and shape of the trees.
15. The colour and shape of the lake.
16. A strong wind blows on the tree and on the lake causing waves.

**Scenario 5** — intro: "Think of being driven in a fast-moving car by a relative or
friend along a major highway. Consider the picture that comes into your mind's eye."
17. You observe the heavy traffic travelling at maximum speed around your car. The overall appearance of vehicles, their colours, sizes and shapes.
18. Your car accelerates to overtake the traffic directly in front of you. You see an urgent expression on the face of the driver and the people in the other vehicles as you pass.  ← [corrected: source typo "and urgent"]
19. A large truck is flashing its headlight directly behind. Your car quickly moves over to let the truck pass. The driver signals with a friendly wave.
20. You see a broken-down vehicle beside the road. Its lights are flashing. The driver is looking concerned and she is using a mobile phone.

**Scenario 6** — intro: "Think of the beach by the ocean on a warm summer's day.
Consider the picture that comes before your mind's eye."
21. The overall appearance and colour of the water, surf, and sky.
22. Bathers are swimming and splashing about in the water. Some are playing with a brightly coloured beach ball.
23. An ocean liner crosses the horizon. It leaves a trail of smoke in the blue sky.
24. A beautiful air balloon appears with four people aboard. The balloon drifts past you, almost directly overhead. The passengers wave and smile. You wave and smile back at them.

**Scenario 7** — intro: "Think of a railway station. Consider the picture that comes
before your mind's eye."
25. The overall appearance of the station viewed from in front of the main entrance.
26. You walk into the station. The colour, shape and details of the entrance hall.
27. You approach the ticket office, go to a vacant counter and purchase your ticket.
28. You walk to the platform and observe other passengers and the railway lines. A train arrives. You climb aboard.

**Scenario 8** — intro: "Finally, think of a garden with lawns, bushes, flowers and
shrubs. Consider the picture that comes before your mind's eye."
29. The overall appearance and design of the garden.
30. The colour and shape of the bushes and shrubs.
31. The colour and appearance of the flowers.
32. Some birds fly down onto the lawn and start pecking for food.

---

## 5. Scoring — single score, 5 bands (VERIFIED, defensible)

**Score = per-item MEAN across all 32 items, on the 1–5 scale.** The per-item mean is
version-agnostic: it makes the well-known 16-item VVIQ cutoffs (which are scale-anchored)
directly usable. VVIQ-2 raw total is 32–160, but we band on the mean (1.00–5.00).

Single dimension `vividness`; the results bar shows `normalize(mean, {min:1,max:5})`
(mean 3.0 → 50/100). Bands drive the outcome:

| Band outcomeId | Per-item mean | 16-item VVIQ equiv | Meaning |
|---|---|---|---|
| `aphantasia`   | **≤ 2.00**            | ≤ 32/80  | Little to no voluntary visual imagery |
| `faint`        | **> 2.00 to ≤ 3.00**  | 33–48/80 | Below-average, dim imagery (hypophantasia) |
| `typical`      | **> 3.00 to ≤ 4.00**  | 49–64/80 | Average / typical vividness |
| `vivid`        | **> 4.00 to < 4.75**  | 65–75/80 | Above-average, vivid imagery |
| `hyperphantasia`| **≥ 4.75**           | ≥ 76/80  | Imagery as vivid as real seeing |

Scoring function (mirror `self-esteem`'s `bandFor`, but 5 bands and mean-based):
```
mean = sum(all 32 answers) / count(answered)   // engine's scoreLikertDimensions gives this as dim.raw
if (mean <= 2.0) return "aphantasia"
if (mean <= 3.0) return "faint"
if (mean <= 4.0) return "typical"
if (mean <  4.75) return "vivid"
return "hyperphantasia"
```
Set the ScoredDimension `level`: aphantasia/faint → "low", typical → "medium",
vivid/hyperphantasia → "high" (for bar coloring). No quadrant, no bipolar.

**Scientific justification of the cutoffs (cite these in `scientificBasis`/sources):**
- **≤ 32 (mean ≤ 2.0) = aphantasia range:** Dance et al. (2022) and later large samples
  (N≈2,872) operationalize aphantasia as VVIQ 16–32; prevalence ≈ 3–4%, matching Zeman's
  2–4% estimate. Within it, 16 (mean 1.0) = complete absence.
- **Zeman et al. (2020, Cortex, "Phantasia")** recruited *extreme* groups at 16–23 (aphantasia)
  and 75–80 (hyperphantasia). These are stricter extreme boundaries; we use the broader
  Dance ≤32 threshold for screening but can mention "extreme aphantasia" (mean ≤1.5).
- **Middle bands from population norms (Meadows Research interpretive table; large
  online datasets):** 33–48 below average, 49–64 typical/average (pop. mean sits here,
  ~mid-50s/80, per-item ~3.5–3.7), 65–75 above average, 76–80 "may indicate hyperphantasia."
- **Hyperphantasia ≥ 76 (mean ≥ 4.75):** Meadows table + Zeman upper tail. Top ≈ 2–4%.

---

## 6. Kiara implementation plan

Create `src/tests/minds-eye/` with the standard 4 files, mirroring `self-esteem`
(single dimension + bands) but with 5 outcomes and mean-based banding.

- **slug:** `minds-eye`  · **id:** `minds-eye`  · **estimatedMinutes:** 6
- **title (EN):** "Mind's Eye Test"  (measures the whole spectrum, so not just "Aphantasia Test")
- **category (EN):** "Imagination"
- **scale:** `{ min: 1, max: 5 }`, pointLabels = the 5 anchors in §3 (short forms OK for
  the Likert buttons, e.g. "No image at all", "Vague and dim", "Moderately vivid",
  "Clear and vivid", "As vivid as real sight"). Keep full anchor text in scale min/max labels.
- **dimensions:** one — `{ id: "vividness", colorVar: "--color-vividness" }`.
  lowLabel "No mind's eye" / highLabel "As vivid as real sight".
- **questions:** `vviq1..vviq32`, all `dimension: "vividness"`, no `reverse`.
- **score:** `scoreMindsEye` — per §5. Use `scoreLikertDimensions` to get the mean as
  `dim.raw`, then band. Set `raw` = mean (round 2dp), pick `level` as above.
- **NO quadrant, NO bipolar.**

**Colors** — add to `src/index.css` in BOTH the `:root` chart block and the
`@theme inline` block (follow how `--color-optimism` was added):
```
--chart-vividness: oklch(0.68 0.16 300);   /* imagination violet */
--color-vividness: var(--chart-vividness);
```

**Register** in `src/lib/test-engine/registry.ts`: import `mindsEyeTest`, add to `tests[]`.

**Scenario framing:** the 8 scenario intros matter for answering. Simplest faithful
option: show each scenario's intro as the question `helper` on its first item, or bake a
short scene tag into each item's display. Recommended: put the scenario intro in the
`questionHelpers` for the first item of each group, and keep the 4 items terse. (If you
want cleaner grouping, that's a possible small engine enhancement — an optional
`section`/`groupIntro` on questions — but it's not required; helpers are enough.)

---

## 7. Content requirements (EN + VI)

Write both languages native-natural (VI must not read like a translation — see the
`natural-translation` memory; warm second-person `bạn`). No em-dashes, straight quotes
(house voice). Items: translate the 32 into natural VI, keeping each scene's imagery
concrete.

**scientificBasis (EN):** explain VVIQ-2 (Marks 1995), the 1–5 vividness scale, that we
score the per-item mean, that the aphantasia (~≤2.0) and hyperphantasia (~≥4.75) bands
come from published cutoffs (Dance 2022; Zeman 2020; population norms), that ~3–4% of
people are aphantasic and ~3–4% hyperphantasic, and that VVIQ-2 is reliable and posted
free by Marks. Note it measures *visual* imagery specifically.

**disclaimer (EN):** reflection tool, not a diagnosis (honor Marks' warning explicitly);
all levels are normal variation; aphantasia is a difference, not a deficit — many
aphantasics have no functional problem and excel in verbal/spatial/analytic domains;
imagery vividness can vary with tiredness/attention; if the user is distressed about
their imagery or noticed a sudden *loss* of previously vivid imagery, that's worth
raising with a professional (sudden acquired loss can rarely follow brain injury/mood
changes). VI keeps Vietnam-appropriate framing; EN lists no hotlines.

**resultKicker (EN):** "Your mind's eye" · **scoresTitle:** "Where your imagery lands" ·
**scoresHint:** explain the 1–5 vividness bar, that most people sit mid-scale, and the
two tails (aphantasia / hyperphantasia) are each ~3–4% of people.

### The 5 outcomes (name + phenomenology to write from)

Use friendly band names (like "The Optimist" style). Suggested EN names — refine freely:

1. **`aphantasia`** — "A Mind's Eye Closed" (or "Picture-Free Mind")
   - Little or no voluntary visual imagery; when you "picture" something you *know* facts
     about it but see nothing, or only the faintest flicker. This is **aphantasia**, ~1 in
     30 people. Not a deficit: aphantasics typically have normal memory and often strong
     verbal, conceptual, spatial or mathematical thinking; many only discover it in
     adulthood, shocked that "picture an apple" was ever literal for others. Dreams may
     still be visual for some. Frame as a fascinating difference. Note it's *visual* —
     other senses (inner voice, spatial sense) may be intact.
2. **`faint`** — "Faint Pictures" (hypophantasia)
   - You can conjure images but they're dim, vague, fleeting, need effort. Below-average
     vividness but real imagery. Common; nothing wrong with it.
3. **`typical`** — "A Working Mind's Eye"
   - Where most people land. You can picture people, places and scenes with moderate,
     reasonable clarity — not photographic, but clearly "there." The everyday mind's eye.
4. **`vivid`** — "Vivid Pictures"
   - Above-average: your mental images are clear, colourful, detailed, easy to summon.
     You likely daydream in rich pictures and find visualization genuinely useful.
5. **`hyperphantasia`** — "Mind's Eye Wide Open" (hyperphantasia)
   - The top tail (~1 in 30): imagery "as vivid as real seeing." Pictures can be almost
     indistinguishable from perception, immersive, sometimes hard to switch off. Tied to
     rich imagination and often creative/artistic pursuits; the flip side can be vivid
     intrusive images. A gift with a volume knob worth knowing about.

Each outcome needs: `name`, `tagline`, `summary`, `longDescription`, `strengths`,
`growth` (per the `Outcome` type). For a spectrum test, "strengths/growth" still work —
e.g. aphantasia strengths = verbal/analytic/low intrusive-imagery; growth = leaning on
lists/words/spatial tools instead of visualization. Vary closers across the 5 (don't
reuse a template). Keep it warm, curious, de-stigmatizing.

---

## 8. Sources (put in structure.ts `sources`, English labels)

- Marks, D. F. (1995). The VVIQ-2. (New Directions… ) — instrument + free-use grant:
  https://davidfmarks.net/vividness-of-visual-imagery-questionnaire-2/
- Marks, D. F. (1973). Original VVIQ, Br. J. Psychology — background:
  https://en.wikipedia.org/wiki/Vividness_of_Visual_Imagery_Questionnaire
- Zeman, A. et al. (2020). "Phantasia: the psychological significance of lifelong visual
  imagery vividness extremes." Cortex. (aphantasia/hyperphantasia extremes)
  https://medicine-vet-medicine.ed.ac.uk/sites/default/files/2025-10/Research%20article%20-%20Zeman%20et%20al%20-%20Cortex%20-%202020.pdf
- Dance, C. J. et al. (2022) — VVIQ ≤32 aphantasia prevalence (~3–4%):
  https://pmc.ncbi.nlm.nih.gov/articles/PMC10403065/
- Meadows Research VVIQ interpretive bands (norms table):
  https://docs.meadows-research.com/presets/vviq/

---

## 9. Verification checklist (before committing)

- [ ] 32 items present, ids `vviq1..32`, all dimension `vividness`, no reverse. Wording
      matches §4 (incl. the 2 typo fixes: "lightning", "an urgent expression").
- [ ] Scale 1–5, pointLabels length 5, high end = most vivid.
- [ ] 5 outcomes defined in EN + VI: aphantasia, faint, typical, vivid, hyperphantasia.
- [ ] Band thresholds exactly per §5 table (≤2.0 / ≤3.0 / ≤4.0 / <4.75 / ≥4.75 on the mean).
- [ ] `--color-vividness` added in both css blocks; dimension references it.
- [ ] Registered in registry.ts.
- [ ] Disclaimer honors Marks' "not a diagnosis" warning; aphantasia framed as difference.
- [ ] VI reads native (no translationese); no em-dashes; straight quotes.
- [ ] Do NOT run the build — the user runs it. Just self-review types.
- [ ] Commit: "Add Mind's Eye test (aphantasia / VVIQ-2)".

After building, update the `test-candidates-research` memory to mark this BUILT (as was
done for Optimism), and Kiara will have 10 tests.
```
