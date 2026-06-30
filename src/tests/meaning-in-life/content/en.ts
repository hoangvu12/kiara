import type { TestContent } from "@/lib/test-engine/types"

export const en: TestContent = {
  title: "Meaning in Life Test",
  tagline: "How much meaning you feel, and how hard you're looking for it",
  description:
    "The Meaning in Life Questionnaire, a widely used measure of meaning and purpose. Ten short statements sort into two scores: how much your life already feels meaningful, and how actively you're searching for meaning. Read together, they map where you stand right now.",
  category: "Meaning",
  scientificBasis:
    "This is the Meaning in Life Questionnaire (MLQ), developed by Michael Steger and colleagues in 2006 and now one of the standard tools for measuring meaning. All ten items are kept word for word, and the author makes the scale free for educational and research use. It pulls apart two things people often treat as one: presence, how much you already feel your life is meaningful, and search, how hard you're working to find or deepen that meaning. The two-factor structure has held up across many studies and cultures, both subscales are reliable (internal consistency around .82 to .88), and scores are fairly stable over a month (about .70). Presence is one of the stronger predictors of well-being in psychology; search has a more mixed link with it, which is part of what makes the two interesting to read side by side.",
  disclaimer:
    "This is a tool for reflection, not a clinical assessment or a diagnosis. A sense of meaning rises and falls with what's happening in your life, so this is a snapshot of right now, not a verdict on your future. A high search score is not a problem to fix; for a lot of people it's a sign of growth, and the two scales are meant to be read together rather than boiled down to one good-or-bad number. If life has felt empty or pointless for a long stretch and that's weighing on your mood, that's worth talking through with someone you trust or a mental-health professional.",
  instructions:
    "Take a moment to think about what makes your life and your existence feel important and significant to you. For each statement, pick how true or untrue it feels for you right now. These are personal questions with no right or wrong answers, so just answer honestly.",
  resultKicker: "Your meaning profile",
  scoresTitle: "Your two scores",
  scoresHint:
    "Meaning here is two separate scores, not one. Presence is how much you already feel your life is meaningful; search is how actively you're looking. They're meant to be read together, and a high search score isn't a worse result than a low one.",
  scale: {
    minLabel: "Absolutely untrue",
    maxLabel: "Absolutely true",
    pointLabels: [
      "Absolutely untrue",
      "Mostly untrue",
      "Somewhat untrue",
      "Can't say true or false",
      "Somewhat true",
      "Mostly true",
      "Absolutely true",
    ],
  },
  dimensions: {
    presence: {
      label: "Presence of meaning",
      description:
        "How much you feel your life right now has meaning and a clear sense of purpose. High scores mean your life already feels like it's about something.",
      lowLabel: "Still unclear",
      highLabel: "Feels meaningful",
    },
    search: {
      label: "Search for meaning",
      description:
        "How actively you're looking for meaning, purpose, or a deeper sense of what your life is about. High scores mean the question is wide open and you're chasing it.",
      lowLabel: "Not searching",
      highLabel: "Actively searching",
    },
  },
  outcomes: {
    anchored: {
      name: "Anchored",
      tagline: "You know what your life is about, and you're living it",
      summary:
        "You feel your life has a clear meaning, and you're not anxiously hunting for more. You've landed somewhere that feels right, and on most days you could say what your life is for.",
      longDescription:
        "High presence with a low drive to search is the most settled spot on this map. You have a working answer to what makes your life matter, whether that's people, work, faith, a craft, or something quieter, and you're not losing sleep trying to trade it in for a better one. Research ties a strong sense of presence to steadier moods, more life satisfaction, and a better bounce-back when things go wrong. The one thing to keep in view is that meaning isn't a trophy you win once. Lives change, and what felt central at twenty can feel thin at forty. A little ongoing curiosity is what keeps a sense of purpose from quietly going stale.",
      strengths: [
        "A clear, steady sense of what your life is for",
        "Less rattled by setbacks, since your footing doesn't ride on them",
        "Able to give the people around you a sense of direction",
      ],
      growth: [
        "Keep a thread of curiosity alive so your purpose grows as you do",
        "Notice if 'settled' ever quietly turns into 'closed off' to new directions",
        "Share how you found your footing; people who feel lost learn a lot from it",
      ],
    },
    deepening: {
      name: "Deepening",
      tagline: "Sure of your footing, still reaching for more",
      summary:
        "You already feel your life has meaning, and you keep exploring anyway. Having found your purpose isn't a reason to stop looking for you, it's a reason to go deeper.",
      longDescription:
        "Scoring high on both presence and search is the mark of someone who has meaning and treats it as a living thing rather than a closed question. You're not searching because something is missing; you're searching because you're curious, you're growing, and you're open to your sense of purpose getting bigger. In the research this combination tends to come with high well-being plus genuine openness to experience, which is a rare and good pairing. The thing to watch is restlessness for its own sake. Searching is at its best when it deepens what you already have, not when it quietly whispers that what you've built isn't enough.",
      strengths: [
        "Grounded and growing at the same time",
        "Open to new ideas without losing your footing",
        "Treats purpose as something you keep building, not a box you tick once",
      ],
      growth: [
        "Let yourself enjoy what you've already found instead of always chasing the next layer",
        "Check that the searching is adding to your life, not quietly discounting it",
        "Bring people along; grounded, open curiosity like yours is contagious",
      ],
    },
    seeking: {
      name: "Seeking",
      tagline: "In the thick of the search, not yet at the answer",
      summary:
        "You're actively looking for what makes your life meaningful, and you haven't quite landed yet. That open question can feel unsettling, but the looking itself is how people find their way.",
      longDescription:
        "A strong drive to search alongside a lower sense of presence is where a lot of people sit during the big transitions: your twenties, a career change, the aftermath of a loss, any stretch where the old answers stopped fitting. It can feel uncomfortable, and in Western samples this mix does tend to track with a little more anxiety and lower satisfaction in the moment. But searching is not a failure state. It's the active ingredient of growth, and people who keep asking the question tend to arrive at a sturdier sense of meaning than people who never asked it at all. The work right now is to treat the search as worthwhile in itself, and to follow what genuinely pulls you rather than what's supposed to matter.",
      strengths: [
        "Honest enough to admit the big questions are still open",
        "Actively engaged with your own life instead of running on autopilot",
        "Primed to grow, since searching is how a real sense of meaning gets built",
      ],
      growth: [
        "Treat the looking as progress, not proof that something's wrong with you",
        "Follow what actually moves you, not what you think is meant to",
        "Try meaning on by doing, like volunteering, making things, or time with people, instead of only thinking it through",
      ],
    },
    adrift: {
      name: "Adrift",
      tagline: "The big questions are quiet right now, and so is the search",
      summary:
        "Right now you don't feel a strong sense of meaning, and you're not actively looking for one either. This often shows up in flat or worn-down stretches, and it's far more common than people let on.",
      longDescription:
        "Low presence with low search usually surfaces when you're running on empty: burnt out, low, numb, or just going through the motions. It reads less like a personality and more like a season, and it's worth being gentle with yourself about. Meaning tends to feel out of reach exactly when you have the least energy to chase it, which is the cruel part. The way back rarely starts with a grand answer to what your life is for. It usually starts small, with one thing that's even slightly worth doing, one person worth showing up for, one moment of being genuinely absorbed in something. If the flatness has hung around for a while and dragged your mood down with it, that's a real reason to talk to someone you trust or a professional, because a lasting emptiness can be part of depression, and depression responds to support.",
      strengths: [
        "Not faking a sense of purpose you don't actually feel",
        "Plenty of room to build meaning from here, usually more than you'd guess",
        "Sometimes a flat patch is what clears the ground for something truer",
      ],
      growth: [
        "Start tiny: one small thing worth doing today beats waiting on a grand answer",
        "Reconnect with people, since meaning gets built with others more than alone",
        "If the emptiness has lasted and pulled your mood down, reach out to someone you trust or a professional",
      ],
    },
  },
  questions: {
    mlq1: "I understand my life's meaning.",
    mlq2: "I am looking for something that makes my life feel meaningful.",
    mlq3: "I am always looking to find my life's purpose.",
    mlq4: "My life has a clear sense of purpose.",
    mlq5: "I have a good sense of what makes my life meaningful.",
    mlq6: "I have discovered a satisfying life purpose.",
    mlq7: "I am always searching for something that makes my life feel significant.",
    mlq8: "I am seeking a purpose or mission for my life.",
    mlq9: "My life has no clear purpose.",
    mlq10: "I am searching for meaning in my life.",
  },
}
