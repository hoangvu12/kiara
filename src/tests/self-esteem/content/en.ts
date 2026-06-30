import type { TestContent } from "@/lib/test-engine/types"

export const en: TestContent = {
  title: "Self-Esteem Test",
  tagline: "How much you value and accept yourself",
  description:
    "The Rosenberg Self-Esteem Scale, the most widely used measure of global self-esteem in psychology. Ten short statements about how you see yourself add up to one overall score, from the way you talk about your own worth to how easily you accept your flaws.",
  category: "Self-esteem",
  scientificBasis:
    "This is the Rosenberg Self-Esteem Scale (RSE), built by the sociologist Morris Rosenberg in 1965 and still the standard self-esteem measure decades on. All ten items are kept word for word; the University of Maryland placed the scale in the public domain. It treats self-esteem as one thing, not several. Five items are worded positively and five negatively to cancel out a tendency to just agree, but they add up to a single score. Reliability is high (internal consistency around .77 to .88, and .85 to .88 when people retake it two weeks later), and the score moves as you'd expect with depression, anxiety, and other measures of self-worth.",
  disclaimer:
    "This is a tool for thinking about yourself, not a clinical assessment or a diagnosis. Self-esteem rises and falls with what's going on in your life, so one sitting is a snapshot, not a fixed trait. The low, typical, and high bands follow cutoffs people commonly use with this scale, but they're a guide for reflection, not a clinical line, since Rosenberg never set one. If a sense of low self-worth has been weighing on you for a while, that's worth talking through with someone you trust or a mental-health professional.",
  instructions:
    "For each statement, pick how much you agree or disagree as a description of how you generally feel about yourself, not how you wish you felt or how you feel on one off day. There are no right or wrong answers, so just answer honestly.",
  resultKicker: "Your self-esteem result",
  scoresTitle: "Your score",
  scoresHint:
    "Self-esteem here is one overall score. The bar shows it out of 100. On the scale's own points it runs 0 to 30, where below 15 usually reads as low self-esteem, 15 to 25 as the normal range, and 26 to 30 as high. It says how you feel about yourself right now, not for good.",
  scale: {
    minLabel: "Strongly disagree",
    maxLabel: "Strongly agree",
    pointLabels: ["Strongly disagree", "Disagree", "Agree", "Strongly agree"],
  },
  dimensions: {
    selfEsteem: {
      label: "Global self-esteem",
      description:
        "Your overall sense of your own worth: how much you respect, value, and accept yourself once the good and the bad are taken together.",
      lowLabel: "Low",
      highLabel: "High",
    },
  },
  outcomes: {
    low: {
      name: "Low self-esteem",
      tagline: "Right now you judge yourself harshly",
      summary:
        "Your answers point to a low sense of self-worth at the moment. You tend to dwell on your shortcomings, doubt your value, and give yourself less credit than you'd give a friend standing in your shoes. This is common, it hurts, and it doesn't last forever.",
      longDescription:
        "A low score means the voice that sizes you up is leaning negative. You can probably list what's wrong with you in seconds, but a compliment or a win is hard to take in. Self-esteem isn't a fixed fact about you. It's a habit of judging yourself, and habits shift. It usually tracks what's happening in your life, like a rough patch, a loss, or an unkind environment, more than it tracks the truth about your worth. The thing that actually helps isn't telling yourself you're great. It's giving yourself the same fairness you'd give someone you love, and letting small things you do well pile up into evidence.",
      strengths: [
        "Honest with yourself instead of puffing yourself up to feel safe",
        "Often quick to feel for what other people are going through",
        "Plenty of room to grow, and the lift in well-being can be big",
      ],
      growth: [
        "When you tear into yourself, ask if you'd say it to a good friend, then try that gentler version",
        "Write down small things you did well, since low self-esteem quietly deletes them",
        "Catch all-or-nothing labels like \"I'm a failure\" and swap in what actually happened",
        "If the heaviness sticks around, think about talking to a therapist, since self-esteem responds well to support",
      ],
    },
    typical: {
      name: "Typical self-esteem",
      tagline: "Mostly steady, with the usual dips",
      summary:
        "Your self-esteem sits in the normal range. You can own your strengths and your flaws without either one running the show. Most of the time you feel alright about yourself, with the expected dips when things go wrong.",
      longDescription:
        "A score in this range is the most common result, and it's a healthy place to be. You hold a view of yourself that's positive but realistic: confident enough to take on a challenge or a letdown without it deciding who you are, grounded enough to admit a mistake. Self-esteem here still moves with circumstances, so expect it to wobble in hard stretches and settle when life is going well. The growth edge is usually steadiness: not letting your sense of worth ride on a single outcome, one relationship, or whether other people approve.",
      strengths: [
        "A balanced read on yourself, aware of your strengths without inflating them",
        "Can take criticism and setbacks without coming apart",
        "Able to admit a mistake and still feel okay about who you are",
      ],
      growth: [
        "Notice what your self-worth is hooked to, like a job or a relationship, and widen the base",
        "Take a compliment with a plain thank-you instead of brushing it off",
        "Build the habit of backing yourself before things go wrong, not only after",
      ],
    },
    high: {
      name: "High self-esteem",
      tagline: "You hold yourself in genuine regard",
      summary:
        "Your answers show solid, positive regard for yourself. You value who you are, take your flaws in stride, and don't lean hard on other people's approval to feel okay. That's a real asset.",
      longDescription:
        "A high score means you genuinely think well of yourself. You can name your strengths, weather criticism, and come back from a setback without your core sense of worth taking the hit. Healthy high self-esteem is quiet and secure rather than loud, and it doesn't need constant proof. The one thing to watch is the gap between secure self-esteem, which stays put whether or not you win, and a more fragile kind that has to defend itself the moment it's challenged. Secure regard lets you hear hard feedback and stay open, and keeping that openness is what stops confidence from turning brittle.",
      strengths: [
        "Holds up under criticism and setbacks",
        "Comfortable in your own skin without needing constant reassurance",
        "Willing to take on challenges and risks other people back away from",
      ],
      growth: [
        "Stay open to feedback that stings, since secure confidence can hear it without getting defensive",
        "Keep self-respect and humility side by side; valuing yourself doesn't mean ranking above other people",
        "Use your steadiness to back up people whose sense of worth is shakier",
      ],
    },
  },
  questions: {
    rse1: "On the whole, I am satisfied with myself.",
    rse2: "At times I think I am no good at all.",
    rse3: "I feel that I have a number of good qualities.",
    rse4: "I am able to do things as well as most other people.",
    rse5: "I feel I do not have much to be proud of.",
    rse6: "I certainly feel useless at times.",
    rse7: "I feel that I am a person of worth, at least on an equal plane with others.",
    rse8: "I wish I could have more respect for myself.",
    rse9: "All in all, I am inclined to feel that I am a failure.",
    rse10: "I take a positive attitude toward myself.",
  },
}
