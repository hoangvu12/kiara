import type { TestContent } from "@/lib/test-engine/types"

/**
 * English content for the childhood-experiences (MACE-adapted) profile.
 * Wording is naturalized for plain reading; the structure and scoring live in
 * structure.ts. This is the reference language.
 */

const questions: Record<string, string> = {
  // Parental verbal abuse
  pv1: "A parent or the person raising you swore at you, called you names, or put you down.",
  pv2: "A parent said things that left you feeling humiliated or worthless.",
  pv3: "A parent acted in a way that made you afraid you might be physically hurt.",
  pv4: "A parent threatened to leave you or send you away.",
  // Non-verbal emotional abuse
  ne1: "A parent shut you somewhere frightening as punishment, like locking you in a room, closet, or basement.",
  ne2: "No matter what you did, a parent was almost impossible to please.",
  ne3: "Your parents had little time for you or seemed uninterested in your life.",
  ne4: "You had to take on grown-up responsibilities before you were really old enough.",
  ne5: "You carried the weight of your family's money worries.",
  ne6: "Your parents kept important things from you that you had a right to know.",
  // Parental physical maltreatment
  pp1: "A parent pushed, grabbed, pinched, slapped, or kicked you on purpose.",
  pp2: "A parent hit you hard enough to leave a mark that lasted more than a few minutes.",
  pp3: "A parent hurt you badly enough that you needed medical care, or should have.",
  pp4: "A parent spanked you on the bottom, arms, or legs.",
  pp5: "A parent spanked you on your bare bottom.",
  pp6: "A parent hit you with an object, like a belt, paddle, or stick.",
  // Emotional neglect (en3–en5 are reverse-worded)
  en1: "Your mother, or the woman who raised you, was emotionally distant when there was no real reason for it.",
  en2: "Your father, or the man who raised you, was emotionally distant when there was no real reason for it.",
  en3: "There was someone in your family who made you feel loved.",
  en4: "Someone in your family helped you feel that you mattered and were special.",
  en5: "Your family was a real source of strength and support for you.",
  // Physical neglect (pn1, pn2, pn5 are reverse-worded)
  pn1: "There was someone at home who looked after you and kept you safe.",
  pn2: "If you got hurt or sick, someone would take you to a doctor or hospital if you needed it.",
  pn3: "There were times you didn't have enough to eat.",
  pn4: "You sometimes had to wear dirty clothes because no one took care of them.",
  pn5: "The people in your family looked out for one another.",
  // Sexual abuse
  sa1: "A parent or caregiver made sexual comments to you that felt wrong.",
  sa2: "A parent or caregiver touched you in a sexual way.",
  sa3: "A parent or caregiver had you touch them in a sexual way.",
  sa4: "Another adult touched you in a sexual way.",
  sa5: "Another adult had sexual intercourse with you.",
  sa6: "Someone your own age forced you into sexual activity against your will.",
  sa7: "Someone your own age pressured or forced you to do sexual things you didn't want to do.",
  // Peer emotional abuse
  pe1: "Other kids swore at you, called you names, or insulted you more than a couple of times a year.",
  pe2: "Other kids said things that left you feeling humiliated more than a couple of times a year.",
  pe3: "Other kids talked about you behind your back or spread rumors.",
  pe4: "Other kids deliberately left you out of things.",
  pe5: "Other kids acted in a way that made you afraid you might be hurt.",
  // Peer physical bullying
  pb1: "Another kid threatened you to take your money or belongings.",
  pb2: "Another kid forced you to do things you didn't want to do.",
  pb3: "Another kid pushed, shoved, punched, or kicked you on purpose.",
  pb4: "Another kid hit you hard enough to leave a mark that lasted more than a few minutes.",
  pb5: "Another kid hurt you badly enough that you needed medical care.",
  // Witnessing violence between parents
  wi1: "You saw an adult at home push, slap, or throw something at your mother (or the woman raising you).",
  wi2: "You saw your mother get hit hard enough to leave a mark that lasted more than a few minutes.",
  wi3: "You saw your mother hurt badly enough to need medical care.",
  wi4: "You saw an adult at home push, slap, or throw something at your father (or the man raising you).",
  wi5: "You saw your father get hit hard enough to leave a mark that lasted more than a few minutes.",
  // Witnessing violence to a sibling
  ws1: "You saw a parent or adult hit your brother or sister hard enough to leave a mark.",
  ws2: "You saw a parent or adult hurt your sibling badly enough to need medical care.",
  ws3: "You saw a parent or adult make sexual comments to your sibling that felt wrong.",
  ws4: "You saw a parent or adult touch your sibling in a sexual way.",
}

/** Every item is a plain yes/no. */
const options = Object.fromEntries(
  Object.keys(questions).map((id) => [id, { no: "No", yes: "Yes" }])
)

export const en: TestContent = {
  title: "Childhood Experiences Profile",
  tagline: "A gentle look back at what you lived through growing up",
  description:
    "This walks through different kinds of hard experiences that can happen in childhood — at home, and with other kids — and shows you which ones you went through and how much. It won't hand you a label like “trauma survivor.” What it gives you is an honest map of your early life, so the picture feels clearer and less tangled. Heads-up: the questions name things like physical and sexual abuse directly, so take it only when you feel steady, and step away anytime you need to.",
  category: "Childhood & trauma",
  scientificBasis:
    "Adapted from the MACE scale (Maltreatment and Abuse Chronology of Exposure; Teicher & Parigger, 2015), an open-access research instrument that measures ten separate types of childhood maltreatment instead of lumping everything into one number — which is the main thing that sets it apart from the older ACE questionnaire. Each type gets its own score, so you see a profile rather than a single total. The wording here has been naturalized for easy reading in English and Vietnamese, so treat this as a thoughtful adaptation rather than the verbatim validated scale.",
  disclaimer:
    "This is for self-understanding, not a diagnosis. A high score on any type doesn't mean something is wrong with you, and a low score doesn't erase anything that happened — even one painful experience can matter, no matter where the bars land. How childhood shaped you depends on far more than a questionnaire can capture, including the support you had and have. If any of this brings up a lot, please reach out. In the US you can call or text 988 (Suicide & Crisis Lifeline), or RAINN at 1-800-656-4673 for sexual abuse. In Vietnam, the Ngày Mai emotional-support line is 096 306 1414, and the national child-protection hotline is 111. If you're in immediate danger, contact your local emergency services.",
  instructions:
    "Think back over your whole childhood and teenage years. For each one, answer yes if it happened to you, even once or twice, and no if it didn't. There are no right answers here — just what's true for you. If a question doesn't fit your situation, answer no and keep going.",
  resultKicker: "What your answers suggest",
  scoresTitle: "Your profile across ten types",
  scoresHint:
    "Each bar is one kind of childhood experience, and how high it sits reflects how much of that type you reported. This is a reflection to help you see patterns, not a score to measure yourself by. Please read a low bar gently: it doesn't undo anything you lived through, and a single serious experience counts even when its bar is short.",
  scale: { minLabel: "No", maxLabel: "Yes" },
  dimensions: {
    verbalAbuse: {
      label: "Verbal abuse at home",
      description:
        "Being sworn at, put down, humiliated, or threatened by a parent or caregiver.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
    nonverbalAbuse: {
      label: "Emotional abuse at home",
      description:
        "Being frightened, controlled, ignored, or burdened in ways that weren't physical but still hurt.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
    physicalAbuse: {
      label: "Physical abuse at home",
      description:
        "Being hit, spanked, or physically hurt by a parent or caregiver.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
    emotionalNeglect: {
      label: "Emotional neglect",
      description:
        "Growing up without enough warmth, attention, or the sense that you were loved and mattered.",
      lowLabel: "Felt cared for",
      highLabel: "Often unmet",
    },
    physicalNeglect: {
      label: "Physical neglect",
      description:
        "Not reliably having your basic needs met — food, clean clothes, safety, or care when sick.",
      lowLabel: "Needs were met",
      highLabel: "Often unmet",
    },
    sexualAbuse: {
      label: "Sexual abuse",
      description:
        "Any sexual contact or pressure from an adult or a peer during childhood.",
      lowLabel: "Not reported",
      highLabel: "Reported",
    },
    peerEmotional: {
      label: "Emotional bullying by peers",
      description:
        "Being insulted, excluded, mocked, or targeted with rumors by other kids.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
    peerPhysical: {
      label: "Physical bullying by peers",
      description:
        "Being threatened, forced, or physically hurt by other kids.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
    witnessParents: {
      label: "Seeing violence between parents",
      description:
        "Witnessing one parent or adult at home physically hurt the other.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
    witnessSibling: {
      label: "Seeing harm to a sibling",
      description:
        "Witnessing a parent or adult physically or sexually hurt your brother or sister.",
      lowLabel: "Rarely or never",
      highLabel: "Often",
    },
  },
  outcomes: {
    minimal: {
      name: "A largely steady childhood",
      tagline: "Few of these hard experiences came up for you",
      summary:
        "Across these ten types, you reported little of the harm this test asks about. That points to a childhood that, on these measures, was relatively safe and supported.",
      longDescription:
        "This doesn't mean your childhood was perfect, and no questionnaire could tell you that. Plenty of real pain — loss, loneliness, family stress, things that happened later — sits outside what this particular test covers. What it does suggest is that the specific kinds of abuse and neglect measured here weren't a big part of your early life. If something still feels heavy when you look back, that feeling is valid and worth taking seriously on its own terms.",
      strengths: [
        "Likely had at least some steady, caring relationships growing up",
        "Took an honest look back, which isn't always easy even when the answers are reassuring",
      ],
      growth: [
        "If something painful still lingers that this test didn't name, it's okay to explore that",
        "Notice and value the people who showed up for you, then and now",
      ],
    },
    some: {
      name: "Some hard chapters",
      tagline: "One or two kinds of difficulty stood out",
      summary:
        "You reported a clear pattern in one or two of these areas. That's real, and it's worth acknowledging rather than brushing past — these experiences can shape how you feel and relate, sometimes in ways that are easy to miss.",
      longDescription:
        "Having one or two of these stand out is genuinely common, and it doesn't define you. What tends to help is naming the specific area honestly instead of either minimizing it (“it wasn't that bad”) or letting it color everything. Look at which type came up for you and how it might still echo today, in your relationships, your reactions, or how you treat yourself. Many people find it useful to talk these things through with someone they trust, or a counselor.",
      strengths: [
        "Came through difficulty in some areas with other parts of childhood more intact",
        "Willing to look honestly at what was hard, which is where understanding starts",
      ],
      growth: [
        "Get curious about how the area that stood out might still show up for you today",
        "Be as kind to your younger self as you'd be to a child you cared about",
        "Consider talking it through with someone you trust or a professional",
      ],
    },
    several: {
      name: "Several kinds of adversity",
      tagline: "A few different hard experiences ran through your childhood",
      summary:
        "You reported clear patterns across several of these areas. Carrying more than one kind of early adversity is a lot, and the fact that you're looking at it now takes real courage.",
      longDescription:
        "When several types overlap, they tend to interact rather than just add up, and their effects can reach into adult life — into how safe you feel, how you handle closeness, stress, and self-worth. None of that is a life sentence, and it absolutely isn't your fault. People do heal, especially with support and the kind of self-understanding you're building right now. If you haven't yet, this may be a sign that working with a therapist who knows trauma could really be worth it.",
      strengths: [
        "Showed real resilience to reach where you are after carrying a lot",
        "Facing several hard truths at once takes courage many people avoid",
        "Self-awareness is one of the strongest foundations for healing",
      ],
      growth: [
        "Consider working with a trauma-informed therapist if that's available to you",
        "Go gently — looking back at several hard things can stir a lot up",
        "Build and lean on relationships that feel safe and steady",
      ],
    },
    pervasive: {
      name: "Adversity across many areas",
      tagline: "Hardship touched many parts of your early life",
      summary:
        "You reported clear patterns across many of these types. That points to a childhood with a heavy, wide-ranging load of adversity — and it means a great deal that you've made it here and are willing to look.",
      longDescription:
        "When this many areas are affected, it usually says something about the environment you grew up in, not about you or anything you did. Adversity this broad can leave a real mark on health, relationships, and how you see yourself, and you deserve genuine support in working through it — not a quiz result. Please treat this less as a verdict and more as a nudge toward care. Trauma-informed therapy helps many people with exactly this, and reaching out is a strength, not a weakness. You don't have to carry it alone.",
      strengths: [
        "Survived a great deal and are still here, looking honestly at it",
        "Real courage to face a childhood this hard rather than look away",
        "Reaching for understanding is itself a meaningful step toward healing",
      ],
      growth: [
        "Please consider reaching out to a trauma-informed therapist or counselor",
        "Lean on the support lines above if things feel heavy after this",
        "Take it slowly and gently, and surround yourself with safe people",
      ],
    },
  },
  questions,
  options,
}
