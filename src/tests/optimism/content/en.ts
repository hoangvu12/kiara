import type { TestContent } from "@/lib/test-engine/types"

/**
 * English content for the Optimism test (LOT-R). Items are verbatim from
 * Scheier, Carver & Bridges (1994); the structure and scoring live in
 * structure.ts. This is the scientific reference language.
 */

export const en: TestContent = {
  title: "Optimism Test",
  tagline: "Whether you expect life to go well, brace for it to go wrong, or both",
  description:
    "Optimism isn't about being cheerful or pretending nothing is wrong. It's a quieter thing: the expectation you carry into an uncertain situation about how it will turn out. Some people lean toward expecting the best; others brace for the worst; plenty do both at once. This short test measures the two sides separately, your pull toward expecting good and your pull toward expecting bad, because how strongly each one runs in you shapes how you face what you can't yet see coming.",
  category: "Outlook",
  scientificBasis:
    "This is the Life Orientation Test-Revised (LOT-R), built by Michael Scheier, Charles Carver, and Michael Bridges in 1994 and the standard measure of dispositional optimism in psychology. It defines optimism plainly, as the generalized expectation that good things will happen, and measures it with six scored statements: three worded toward optimism, three toward pessimism. (The published scale mixes in four filler items that measure nothing, meant to disguise its purpose; we leave those out.) The authors' original scoring adds all six into one 0-to-24 optimism score. But a lot of later research, and a note from the authors themselves, finds the optimistic and pessimistic items don't just mirror each other: they form two related but separate tendencies, so a person can genuinely run high on both. That's why this version reports them as two bars rather than one number. All items are kept word for word from Carver's published instrument, which he posts publicly and lets anyone use free, without charge or permission. The LOT-R is reliable, holds up when people retake it, and optimism measured this way predicts real outcomes: better coping under stress, and in health studies, slower decline and longer life, even after accounting for the obvious explanations.",
  disclaimer:
    "This is a tool for reflection, not a clinical assessment or a diagnosis. Optimism isn't a virtue and pessimism isn't a flaw; each is a way of meeting uncertainty, with its own strengths and its own costs, and a bit of both is often the healthiest mix. There's no official cutoff for the LOT-R, so the readings here are relative to the middle of the scale, not a clinical line, and your outlook can shift with what's going on in your life. Read this as a snapshot of how you're leaning right now, not a fixed fact about you. If a bleak, hopeless view of the future has settled in and won't lift, that's worth talking through with someone you trust or a mental-health professional, since it can be a sign of something more than temperament.",
  instructions:
    "For each statement, pick how much you agree or disagree with it as a description of how you generally are, not how you feel on one unusually good or bad day. There are no right or wrong answers, so just answer honestly.",
  resultKicker: "Your outlook profile",
  scoresTitle: "Your two sides, in two bars",
  scoresHint:
    "One bar is your pull toward expecting good, the other your pull toward expecting bad. They're measured separately on purpose: this isn't a single slider from optimist to pessimist, because plenty of people run high or low on both at once. On the scale's own points the six items also add up to a 0-to-24 optimism total, but the two bars tell you more than one number can. A high bar isn't good and a low bar isn't bad; each just shows how strongly that expectation runs in you.",
  insightsTitle: "How each side tends to show up",
  insightsIntro:
    "For whichever side came out stronger in you, here's how it often plays out day to day, the upside and the catch. Read these as common tendencies, not a verdict. One may fit you closely and the other not at all.",
  scale: {
    minLabel: "Strongly disagree",
    maxLabel: "Strongly agree",
    pointLabels: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
  },
  dimensions: {
    optimism: {
      label: "Optimism: your pull toward expecting good",
      description:
        "How strongly you go into an uncertain situation expecting it to work out. A high bar means hope is your default: when you don't know how something will land, you lean toward the good version.",
      lowLabel: "Rarely expects the best",
      highLabel: "Expects the best",
      insight:
        "When the outcome is still up in the air, you lean toward the good version, and that pull does real work: it keeps you trying when things are hard, it makes you easier to be around, and hope itself tends to help you cope. The catch is that expecting the best can slide into not planning for the rest, so it's worth pairing your optimism with a plain look at what could go wrong, not to dampen it, but so a setback doesn't catch you flat-footed.",
    },
    pessimism: {
      label: "Pessimism: your pull toward expecting bad",
      description:
        "How strongly you go into an uncertain situation braced for it to go wrong. A high bar means your mind reaches for the bad version first: you assume things may not go your way and prepare for it.",
      lowLabel: "Rarely braces for the worst",
      highLabel: "Braces for the worst",
      insight:
        "Your mind reaches for what could go wrong before it reaches for what could go right. That isn't just gloom: expecting trouble makes you prepared, hard to blindside, and sometimes it's plain accurate. Used deliberately, bracing for the worst is a planning tool. The cost is when it runs on its own, it can talk you out of things that would have gone fine, and steady expecting-the-worst wears on your mood and drains the pleasure out of good stretches that have no problem in them at all.",
    },
  },
  outcomes: {
    optimist: {
      name: "The Optimist",
      tagline: "You expect the best, and you don't spend long bracing for the worst",
      summary:
        "You go into the unknown expecting it to work out, and you don't carry much dread about what might go wrong. That hopeful default is a genuine strength: it keeps you trying, it lifts the people around you, and decades of research tie it to coping better under stress and even to better health. Your growth edge is simply not letting the bright expectation skip the part where you plan for the version that goes sideways.",
      longDescription:
        "With a strong pull toward expecting good and a light one toward expecting bad, hope is your resting state. When something's uncertain, you assume it'll land well, so you're quicker to start things, slower to be discouraged, and steadier through rough patches, because you genuinely believe the rough patch ends. This is the profile most closely tied to the benefits people mean when they praise optimism: persistence, resilience, and in the long health studies, a real edge. The one thing to keep honest is that expecting the best can quietly mean not preparing for the rest. Optimism and a clear-eyed look at what could go wrong aren't opposites; the strongest version of your outlook is the one that keeps hoping while still asking, just in case, what's my move if this doesn't work. That way a setback is a detour, not a shock.",
      strengths: [
        "You keep going when things are hard, because you believe they'll improve",
        "Setbacks don't sink you; you expect the next thing to go better",
        "Your outlook lifts the people around you",
        "Optimism like this is tied to coping better under stress and to better long-term health",
      ],
      growth: [
        "Pair the hope with a quick \"what if this doesn't work\" plan, so a setback doesn't catch you flat-footed",
        "Let other people's worries land instead of waving them off with \"it'll be fine\"",
        "Notice the difference between real confidence and just not wanting to look at the downside",
        "When it matters, check that your optimism is reading the situation, not just skipping past it",
      ],
    },
    realist: {
      name: "The Realist",
      tagline: "You expect good and brace for bad at the same time",
      summary:
        "Both sides run strong in you: you genuinely hope things will go well and you genuinely prepare for them not to. That can feel like mixed wiring, but handled well it's one of the most grounded outlooks there is, hopeful enough to keep moving, wary enough not to get blindsided. The trick is keeping the two working together instead of the bracing quietly eating the hope.",
      longDescription:
        "Running high on both expecting good and expecting bad is more common than the neat optimist-versus-pessimist split suggests. You hope, and you hedge. You'll pour yourself into something you believe in and, in the same breath, map out what happens if it falls apart. At its best this is exactly the mindset researchers call defensive optimism or strategic pessimism: you use the worry as fuel to prepare, then let the hope carry you forward, and you get the upside of both, the drive of optimism and the readiness of caution. The trap is when the two fight instead of cooperate, when bracing for the worst doesn't make you prepared, it just makes you anxious, and the hope never gets to do its job. What helps is giving the pessimism a defined role: let it plan, then hand the wheel back to the part of you that expects things to work. Prepared and hopeful is a strong place to stand; prepared and dreading is the same preparation costing you far more than it should.",
      strengths: [
        "You prepare for what could go wrong without losing the will to go after what you want",
        "Hard to blindside; you've usually thought about the bad version",
        "You can hope and plan at once, which builds real trust",
        "At its best, this is the mindset that turns worry into readiness",
      ],
      growth: [
        "Give the bracing a job (a plan, a backup) and then stop, so it doesn't just circle as worry",
        "Once you've prepared for the worst, let yourself actually expect the best",
        "Watch for when caution stops protecting you and just steals the calm out of good stretches",
        "Name which one is talking, the planner or the dread; they feel similar and do very different work",
      ],
    },
    pessimist: {
      name: "The Pessimist",
      tagline: "You brace for the worst more than you expect the best",
      summary:
        "You tend to go into the unknown expecting it to go wrong, and you don't lean much on hope to get you there. That's not just gloom, and it isn't a character flaw: bracing for the worst makes you prepared, realistic, and hard to catch off guard, and sometimes it's simply the accurate read. The work isn't to force cheerfulness, it's to notice when the expectation of bad is protecting you and when it's just costing you.",
      longDescription:
        "With a strong pull toward expecting bad and a lighter one toward expecting good, your mind reaches for what could go wrong first. Handled well, this has real value: you plan for problems other people ignore, you're rarely blindsided, and you don't get swept up in hype that's about to collapse. Some of the most careful, prepared people in any room are running this outlook. The honest cost is twofold. It wears on you, since living braced for trouble drains the ease out of stretches that had no trouble in them. And it quietly shrinks your life, because expecting the worst talks you out of things that would actually have gone fine. Optimism isn't a personality you have to fake; it's closer to a habit of attention, and it can be built. You don't have to believe everything will go well. It's enough to catch the automatic worst-case, ask how often it's actually come true, and let yourself try the things that pass that test. If the bleakness is heavy and constant rather than just a cautious streak, that's worth taking seriously, since a persistently hopeless view of the future can be more than temperament.",
      strengths: [
        "You plan for problems other people walk right into",
        "Hard to blindside; you've already pictured the bad version",
        "You don't get swept up in hype that's about to fall apart",
        "You take real risks seriously instead of waving them off",
      ],
      growth: [
        "When the worst-case fires, ask how often it's actually come true; usually less than it feels",
        "Treat optimism as a habit you can build, not a personality you'd have to fake",
        "Let yourself try the things that clearly pass the risk check, even without feeling sure",
        "If the bleakness is heavy and won't lift, talk it through with someone; it can be more than outlook",
      ],
    },
    neutral: {
      name: "The Even Keel",
      tagline: "You don't lean hard toward expecting good or bad",
      summary:
        "Neither expecting the best nor bracing for the worst pulls strongly on you. You tend to take situations as they come rather than going in with a strong forecast either way. That gives you a certain evenness, you're not riding high on hope or weighed down by dread, though it can also mean you meet the future with a bit of a shrug when a clearer stance would serve you better.",
      longDescription:
        "Running low on both expecting good and expecting bad gives you a level, wait-and-see quality. You don't inflate your hopes and you don't rehearse disasters; you'd rather just see how things actually go. There's a real steadiness in that. You're hard to disappoint and hard to panic, and you're not spending energy on forecasts that may never come true. The thing worth noticing is that a forecast, hopeful or wary, does useful work: optimism fuels persistence, and even pessimism fuels preparation, and running low on both can leave you a little passive in the face of things you could actually shape. The useful question for you usually isn't how to feel more one way or the other, it's where a deliberate stance would help, leaning into hope to keep yourself moving on something that matters, or into caution to prepare for something that's genuinely at risk. Evenness is a good baseline; it's strongest when you can still pick up either tool when the situation calls for it.",
      strengths: [
        "Hard to disappoint and hard to panic; you don't swing on every forecast",
        "You take situations as they come instead of prejudging them",
        "You don't burn energy on hopes or fears that never materialize",
        "A steady baseline that other people find easy to be around",
      ],
      growth: [
        "Notice where a hopeful stance would keep you moving on something you care about, and lean in",
        "When something's genuinely at risk, let yourself prepare instead of just waiting to see",
        "Watch that even-keeled doesn't quietly become passive about things you could shape",
        "Pick the outlook the situation calls for, rather than defaulting to no forecast at all",
      ],
    },
  },
  questions: {
    lotr1: "In uncertain times, I usually expect the best.",
    lotr3: "If something can go wrong for me, it will.",
    lotr4: "I'm always optimistic about my future.",
    lotr7: "I hardly ever expect things to go my way.",
    lotr9: "I rarely count on good things happening to me.",
    lotr10: "Overall, I expect more good things to happen to me than bad.",
  },
}
