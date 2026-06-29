# MBTI Research Briefing (for building a Kiara 16-type test)

Compiled 2026-06-29. Four research streams: theory & history · scientific validity ·
existing online tests & item design · open item banks & licensing. Sources at the end
of each section. This is research, not legal advice — get counsel to sign off on naming
and disclaimers before launch.

---

## 1. What the MBTI is (theory & history)

- **Theory root:** Carl Jung, *Psychological Types* (1921 German / 1923 English). Jung
  described Extraversion/Introversion, the perceiving functions (Sensing/Intuition),
  the judging functions (Thinking/Feeling), and the dominant–inferior function idea.
- **Authors of the instrument:** Katharine Cook Briggs (began ~1917) and her daughter
  Isabel Briggs Myers, who operationalized Jung into a questionnaire during WWII to help
  people find suitable work. First version 1943; first handbook 1944. Briggs/Myers added
  the **Judging–Perceiving (J/P)** dichotomy that Jung only implied.
- **Publishers:** ETS (1962) → Consulting Psychologists Press / CPP (1975) → rebranded
  **The Myers-Briggs Company** (~2018–19). Legacy stewarded by the Myers & Briggs
  Foundation (CAPT merged in 2023).
- **Forms:** Form G (1977, 126 items) → **Form M / Step I** (1998, **93** forced-choice
  items, the standard) → **Form Q / Step II** (2001, **144** items, 20 facets) → Step III
  (developmental). All paid; typically delivered by a certified practitioner.

### The four dichotomies (each a binary preference → 4-letter code)
- **E / I — where you get energy.** Outer world of people/things vs. inner world of
  ideas/reflection. *Not* sociability vs. shyness.
- **S / N — how you take in information.** Concrete/sensory/present (S) vs.
  patterns/possibilities/future (N). Intuition is abbreviated **N** (I = Introversion).
- **T / F — how you decide.** Impersonal logic (T) vs. person-centered values (F). Both
  are *rational*; F ≠ "emotional", T ≠ "smarter".
- **J / P — how you deal with the outer world.** Structure/closure (J) vs.
  flexibility/openness (P). J/P also determines which function a person extraverts.

### The 16 types (code → common nickname → Jungian function stack)
- ISTJ Logistician — Si-Te-Fi-Ne · ISFJ Defender — Si-Fe-Ti-Ne
- INFJ Advocate — Ni-Fe-Ti-Se · INTJ Architect — Ni-Te-Fi-Se
- ISTP Virtuoso — Ti-Se-Ni-Fe · ISFP Adventurer — Fi-Se-Ni-Te
- INFP Mediator — Fi-Ne-Si-Te · INTP Logician — Ti-Ne-Si-Fe
- ESTP Entrepreneur — Se-Ti-Fe-Ni · ESFP Entertainer — Se-Fi-Te-Ni
- ENFP Campaigner — Ne-Fi-Te-Si · ENTP Debater — Ne-Ti-Fe-Si
- ESTJ Executive — Te-Si-Ne-Fi · ESFJ Consul — Fe-Si-Ne-Ti
- ENFJ Protagonist — Fe-Ni-Se-Ti · ENTJ Commander — Te-Ni-Se-Fi

(Nicknames are Keirsey / 16Personalities marketing, not from the Foundation. "Rarity"
and "income by type" stats online come from self-selected web samples — use cautiously.)

### Cognitive functions (the "type dynamics" layer)
Eight functions (Se, Si, Ne, Ni, Te, Ti, Fe, Fi) ordered per type as
Dominant > Auxiliary > Tertiary > Inferior. Mapping rules: the middle two letters give
the preferred perceiving & judging functions; J/P says which one you extravert; E/I says
which is dominant. Consequence: types one letter apart (e.g. INFJ vs INFP) can share
*zero* functions. **This layer is theoretically rich but the least empirically supported**
(Reynierse and others find the presumed function order rarely appears in data). Treat it
as an optional "advanced" interpretation, not the scoring core.

### How "type" is framed
Preferences (not abilities), inborn but developed, **categorical/binary**, with "no
good/bad types." The categorical claim is the biggest scientific vulnerability (§2).

Sources: myersbriggs.org (preferences, 16 types, type dynamics); themyersbriggs.com
(history, MBTI facts); en.wikipedia.org/wiki/Myers–Briggs_Type_Indicator; truity.com;
StatPearls/NCBI NBK554596; simplypsychology.org.

---

## 2. Scientific standing (the honest part)

Most academic personality psychologists regard the MBTI as weak. Key findings:

- **Reliability — type instability.** Pittenger (1993): **39–76%** of people get a
  *different* four-letter type on retest after ~5 weeks. Whole-type stability ~50% within
  9 months. Cause = dichotomizing at a midpoint: near-midpoint scores flip on noise.
  Internal consistency, by contrast, is decent (α ≈ .84–.92; Capraro & Capraro 2002) —
  the scales reliably measure something *continuous*.
- **Validity.** McCrae & Costa (1989): "no support for the view that the MBTI measures
  truly dichotomous preferences or qualitatively distinct types." National Academy of
  Sciences (1991): insufficient evidence for career-counseling use. No defensible
  meta-analytic predictive validity for job performance; major selection meta-analyses
  (Schmidt & Hunter 1998; Sackett et al. 2022) exclude it. The publisher itself forbids
  use in hiring.
- **The bimodality problem.** If real types existed, each dimension would be bimodal
  (two clusters). Empirically scores are unimodal/normal — most people are near the
  middle. So the midpoint cut is an artifact, not a discovery (Bess & Harvey 2002).
- **It's a less complete Big Five.** McCrae & Costa correlations:
  E/I ↔ Extraversion (r ≈ −0.74), S/N ↔ Openness (r ≈ 0.72),
  T/F ↔ Agreeableness (r ≈ 0.44), J/P ↔ Conscientiousness (r ≈ −0.49).
  MBTI has **no analog for Neuroticism / Emotional Stability** — the omission is widely
  read as "positive framing" (Neuroticism is unflattering).
- **Why it stays popular:** Barnum/Forer effect, uniformly flattering descriptions,
  scientific-sounding legitimacy, decades of HR/corporate lock-in, identity-badge appeal.

Critics/sources: Pittenger (1993, 2005); McCrae & Costa (1989); Adam Grant (Psych Today
2013); Robert Hogan; Merve Emre *The Personality Brokers* (2018); Bess & Harvey (2002);
NAS (1991); Erford et al. (2025, JCD 25-yr synthesis); Vox/Scientific American/Smithsonian.

**Implication for us:** don't ship a hard binary type pretending it's definitive. Store
continuous scores, show percentages/sliders, flag borderline dimensions, include an
emotional-stability axis, and frame results as self-reflection, not diagnosis.

---

## 3. How the popular online tests are actually built

| Test | Items | Format | Scoring | Output | Model | Cost |
|---|---|---|---|---|---|---|
| **16Personalities (NERIS)** | ~60 | single statement, **7-pt agree/disagree** | continuous %, side of 50% sets letter | 4 letters **+ Identity** (e.g. INFJ-T), % bars, Roles + Strategies | MBTI letters relabeled as **Big Five traits + 5th axis** | free + paid ($29–49) |
| **Official MBTI Form M** | 93 | forced-choice A/B | weighted points + clarity index | 16 types | true Jungian dichotomies | paid, certified |
| **Official MBTI Form Q** | 144 | forced-choice | type + 20 facets | 16 types + facets | same | paid, practitioner |
| **OEJTS 1.2** | **32** (8/scale) | bipolar word-pairs, 5-pt | signed sum per scale, split at 24 | 16 types | Jungian 4 dichotomies | **free, CC BY-NC-SA** |
| **Keirsey KTS-II** | 70 | forced-choice A/B | 20/20/20 + 10 (I/E) | 4 temperaments + 16 types | Keirsey→MBTI | free + paid |
| **HumanMetrics** | 64 | Yes/No | tally → % per axis | 16 types + % | Jung+Briggs-Myers | free |

**16Personalities is the template to beat.** Under the hood it is **not** MBTI: it
borrows the four letters but measures them as continuous Big Five traits, drops cognitive
functions, and adds a **5th "Identity" axis — Assertive (-A) / Turbulent (-T) ≈ reversed
Neuroticism**. Groupings: **Roles** by middle two letters (Analysts NT, Diplomats NF,
Sentinels SJ, Explorers SP) and **Strategies** by Mind × Identity (Confident
Individualism, People Mastery, Constant Improvement, Social Engagement).

**Item-design best practice:** Likert (5–7 pt agree/disagree) gives the best UX and clean
continuous data (acquiescence/social-desirability are the trade-off); balance each scale
with reverse-keyed items written as **antonyms, not "not …" negations**; aim for ~6–12
items/scale and α ≥ .70; iterate write→pilot→item-analysis→rewrite.

Sources: 16personalities.com/articles (our-theory, identity, roles, strategies);
myersbriggs.org versions page; openpsychometrics.org (OEJTS); keirsey.com; humanmetrics.com;
Frontiers Psychology 2019.02309 (item writing).

---

## 4. What we can legally use

| Asset | License | Commercial? | Verdict |
|---|---|---|---|
| Names "MBTI", "Myers-Briggs", "Step I/II/III" | registered trademarks | ❌ | Never use to name/describe our test |
| OEJTS 1.2 items + scoring | **CC BY-NC-SA 4.0** | ❌ NonCommercial | Reference/benchmark only, don't ship |
| **IPIP item pool** (Big Five, 3,300+ items) | **public domain** | ✅ always | **Best foundation — ship freely** |
| "16 personality types", "Jungian type", "psychological type", 4-letter codes | generic / public-domain idea | ✅ | Safe to use |
| Our own authored items | our copyright | ✅ | Recommended end state |

- **Trademarks** (Myers & Briggs Foundation): MBTI / Myers-Briggs / Step I–III. Cannot be
  used to name or describe another test. Keep them out of product name, domain, titles,
  ad keywords, meta tags. The **Jungian theory** and the **abstract idea of 16 types / 4
  dichotomies** are NOT protected — this is the gap 16Personalities and Truity operate in.
- **How the big sites stay clean:** coin own model name (NERIS Type Explorer®,
  TypeFinder®), build on Big Five, borrow only the letters, add a differentiating 5th
  axis, and post a "not affiliated with MBTI®" disclaimer.
- **OEJTS** is the only ready-made open Jungian instrument with a published scoring key,
  but **CC BY-NC-SA** (NonCommercial + ShareAlike) disqualifies it from a commercial
  product (ShareAlike would also force our whole test under NC). Use as design reference
  and validation benchmark only.
- **IPIP is the only fully commercial-clean validated source** ("100% public domain – no
  permission required, ever"). No official IPIP→MBTI scale exists, but the Big-Five↔MBTI
  correlations (§2) let us derive four dichotomy percentages from IPIP facets.

### Recommended build path for Kiara
1. **Engine:** score public-domain **IPIP Big Five** items (start ~50-item markers /
   Mini-IPIP; consider IPIP-NEO facets for depth) — OR author our own items validated
   against Big Five.
2. **Mapping:** convert four Big Five factors → four bipolar dichotomy percentages via the
   McCrae–Costa relationships; show **sliders + a 16-type label**; **store continuous
   scores and flag borderline dimensions** (our trust differentiator).
3. **Optional 5th axis:** an emotional-stability / "turbulence" dimension from
   Neuroticism — under **our own name**, not "-A/-T" (that's NERIS branding).
4. **Naming:** distinctive coined name + generic descriptor, e.g. "Kiara 16-Type /
   Jungian personality profile." Add a "not affiliated with MBTI®" disclaimer.
5. **Copy:** be transparent that types summarize underlying continuous traits.

Sources: myersbriggs.org trademark-guidelines; themyersbriggs.com/Support/Trademarks;
openpsychometrics.org OEJTS1.2.pdf; ipip.ori.org (public-domain statement);
16personalities.com/articles/our-theory; truity.com TypeFinder; McCrae & Costa (1989).

---

## 5. How this maps onto the Kiara engine

A test = language-neutral `structure.ts` (item ids, dimension per item, reverse flags,
pure `score()`, optional quadrant) + per-locale `content/{en,vi}.ts`. For a 16-type test:
- **Dimensions:** EI, SN, TF, JP (+ optional stability axis). All Likert, already supported.
- **Outcomes:** 16 `Outcome` records keyed by 4-letter code.
- **score():** assemble the 4-letter code from each dimension's side of the midpoint and
  return it as `outcomeId`; the built-in `quadrant` helper only does 2 axes/4 cells, but
  `score()` is an arbitrary function so building 16 codes is trivial. Keep continuous
  scores in the returned `dimensions` for the slider UI.
- **Borderline flag:** can be surfaced via dimension `level`/insight copy when a score is
  near the midpoint.
