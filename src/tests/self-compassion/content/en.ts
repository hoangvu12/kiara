import type { TestContent } from "@/lib/test-engine/types"

export const en: TestContent = {
  title: "Self-Compassion Test",
  tagline: "How kindly you treat yourself when things go wrong",
  description:
    "The Self-Compassion Scale, the standard measure of how you respond to yourself when you fail, struggle, or feel like you're not enough. Twenty-six short statements sort into three sides of self-compassion: whether you meet your own pain with kindness or harsh judgment, whether you feel connected to other people or alone in it, and whether you hold hard feelings in balance or get swept away by them.",
  category: "Self-compassion",
  scientificBasis:
    "This is the Self-Compassion Scale (SCS), developed by Kristin Neff in 2003 and now the most widely used measure of self-compassion in psychology. All twenty-six items are kept word for word, and Neff makes the scale free to use for research, teaching, and clinical work. It looks at three things that move together when you're having a hard time: self-kindness versus self-judgment, a sense of common humanity versus feeling isolated, and mindful balance versus being swallowed by your feelings. The subscales are reliable and the six-part structure holds up across many studies and cultures, while more than ninety percent of the meaningful variation in answers is captured by a single overall score, which is why self-compassion is usually read both as one thing and as its parts. It overlaps with self-esteem but isn't the same: self-esteem is about whether you judge yourself as good or worthy, often by doing well or beating other people, while self-compassion is simply how you treat yourself when you're suffering, and it asks nothing of you except a kinder response.",
  disclaimer:
    "This is a tool for reflection, not a clinical assessment or a diagnosis. How much self-compassion you feel shifts with what you're going through, so this is a snapshot of right now, not a fixed trait or a verdict on the kind of person you are. If your score comes out low, please read it gently: it doesn't mean anything is wrong with you, only that you've learned to be hard on yourself, and that habit can be unlearned. The low, moderate, and high bands follow the rough guide Neff suggests, not a clinical line, since no formal cutoff exists. If you've been suffering for a long stretch and struggling to be kind to yourself, that's worth talking through with someone you trust or a mental-health professional.",
  instructions:
    "Think about how you typically act toward yourself in difficult times. For each statement, pick how often you behave that way, from almost never to almost always. Try to answer for how you really respond, not how you think you should. There are no right or wrong answers.",
  resultKicker: "Your self-compassion result",
  scoresTitle: "Your three sides",
  scoresHint:
    "Self-compassion has three sides here, each a sliding scale between a kinder response and a harder one. Leaning toward the right end on each means you tend to meet your own struggles with compassion. Your overall result is the balance of all three together, not any single end.",
  scale: {
    minLabel: "Almost never",
    maxLabel: "Almost always",
    pointLabels: [
      "Almost never",
      "Rarely",
      "Sometimes",
      "Often",
      "Almost always",
    ],
  },
  dimensions: {
    kindness: {
      label: "Kindness: self-kindness or self-judgment",
      description:
        "How you talk to yourself when you fall short. Leaning right means you offer yourself warmth and patience; leaning left means you turn critical and cold with yourself just when it hurts most.",
      lowLabel: "Self-judgment",
      highLabel: "Self-kindness",
    },
    humanity: {
      label: "Connection: common humanity or isolation",
      description:
        "Whether your struggles make you feel part of the human crowd or shut out from it. Leaning right means you remember that everyone fails and hurts; leaning left means hard moments make you feel uniquely alone.",
      lowLabel: "Isolation",
      highLabel: "Common humanity",
    },
    mindfulness: {
      label: "Balance: mindfulness or over-identification",
      description:
        "What painful feelings do to you in the moment. Leaning right means you can hold them with some perspective; leaning left means they take over and you get carried away by them.",
      lowLabel: "Over-identification",
      highLabel: "Mindfulness",
    },
  },
  outcomes: {
    low: {
      name: "Low self-compassion",
      tagline: "You're far harder on yourself than you'd ever be on a friend",
      summary:
        "Right now, when you stumble, your first move is to turn on yourself. You judge your flaws sharply, feel alone in your struggles, and get pulled under by hard feelings. That's exhausting to live with, and it's worth knowing it's a learned habit, not the truth about you.",
      longDescription:
        "A low score means the way you treat yourself in hard moments runs critical, isolating, and overwhelming. You'd comfort a friend who failed without a second thought, but when it's you, the kindness vanishes and the criticism takes over. Often this is something you picked up early, from people who were hard on you or from a sense that being tough on yourself is what keeps you in line. It doesn't. Research is clear that self-criticism mostly fuels anxiety and low mood, while self-compassion is what actually helps people recover and try again. Here's the hopeful part, and it's the whole reason this score is worth taking seriously: self-compassion is a skill, not a trait you're born with or without. It grows with practice, and it tends to be steadier and kinder to your mental health than self-esteem, because it doesn't depend on succeeding or measuring up. You can start small, by catching the harsh voice and asking what you'd say to someone you love.",
      strengths: [
        "Honest about your struggles instead of pretending you're fine",
        "Usually generous and warm toward other people who are hurting",
        "The most room to grow of any score here, and the lift in well-being can be large",
      ],
      growth: [
        "When you catch yourself in harsh self-talk, ask what you'd say to a good friend in the same spot, and try saying that to yourself",
        "Put a hand on your own heart or arm in a hard moment; the warm-touch part of self-compassion is physical, not just mental",
        "Remind yourself that failing and struggling are things every single person does, not a flaw that's yours alone",
        "If being so hard on yourself has worn you down for a long time, a therapist can genuinely help, and self-compassion can be taught",
      ],
    },
    moderate: {
      name: "Moderate self-compassion",
      tagline: "Kind to yourself on a good day, tougher when it counts",
      summary:
        "You can be good to yourself, but it's not yet automatic. On steady days you give yourself a fair shake; in the genuinely hard moments the kindness can slip and the old criticism creeps back in. That mix is the most common place to be.",
      longDescription:
        "A moderate score means self-compassion is something you have, just not reliably yet. You probably treat yourself reasonably well most of the time, then find that a real failure or a wave of shame still tips you into harsh judgment, comparing yourself to others, or getting swallowed by the feeling. This is where most people land, and it's a good launch point, because you already know what kindness toward yourself feels like. The work is making it show up when you need it most, which is exactly when it's hardest to reach for. Look at your three sliders: the lowest one is usually where the harshness gets in, and it's the most useful place to put your attention.",
      strengths: [
        "You already know how to be kind to yourself; it's there to build on",
        "Balanced enough to take a setback without it always knocking you flat",
        "Aware of your own patterns, which is half of changing them",
      ],
      growth: [
        "Notice which of the three sliders sits lowest; that's where you're hardest on yourself",
        "In a bad moment, name what you're feeling plainly instead of spiraling into it or shoving it away",
        "Treat a mistake as proof you're human, not proof you're uniquely flawed",
        "Build the kind response as a habit now, while things are calm, so it's easier to reach when they aren't",
      ],
    },
    high: {
      name: "High self-compassion",
      tagline: "You stay on your own side, even when you fall short",
      summary:
        "When life knocks you down, you meet yourself with warmth instead of blame. You can own a mistake without tearing into yourself, remember that everyone struggles, and feel hard things without drowning in them. That's a quiet, durable strength.",
      longDescription:
        "A high score means you've got the thing that protects mental health better than almost anything else: you treat yourself like someone worth being kind to, especially when you've failed. You don't pretend setbacks don't sting, but you don't pile self-attack on top of them either, so you recover faster and keep going. Unlike self-esteem, which has to be propped up by winning or comparing well, self-compassion stays with you on the days you fall short, which is exactly why it's the steadier of the two. The one thing to watch is that being kind to yourself never means letting yourself off the hook; real self-compassion includes honestly seeing what went wrong and wanting better for yourself. At its best, the warmth you give yourself is the same warmth you can extend to everyone around you.",
      strengths: [
        "Bounces back from failure without a spiral of self-blame",
        "Holds painful feelings steadily instead of being run by them",
        "A sense of worth that doesn't depend on winning or measuring up",
        "The same kindness usually flows outward to other people too",
      ],
      growth: [
        "Keep self-compassion honest: comfort yourself and still look squarely at what you'd do differently",
        "Use your steadiness to support people who are much harder on themselves",
        "Notice if any one slider lags, since even high scorers have a tougher side",
        "Let yourself fully take in the good moments, not just steady yourself through the bad ones",
      ],
    },
  },
  questionHelpers: {
    scs4: "Like when you think about your weak spots, it feels as if you're the only one and everyone else seems fine, so you feel out of place around people.",
    scs5: "Like when you're hurting, you comfort yourself and go easy on yourself, the way you'd soothe a friend who's upset, instead of being hard on yourself.",
    scs8: "Like when you're struggling, you blame yourself and push yourself to tough it out, not letting yourself be soft or rest.",
  },
  questions: {
    scs1: "I'm disapproving and judgmental about my own flaws and inadequacies.",
    scs2: "When I'm feeling down I tend to obsess and fixate on everything that's wrong.",
    scs3: "When things are going badly for me, I see the difficulties as part of life that everyone goes through.",
    scs4: "When I think about my inadequacies, it tends to make me feel more separate and cut off from the rest of the world.",
    scs5: "I try to be loving towards myself when I'm feeling emotional pain.",
    scs6: "When I fail at something important to me I become consumed by feelings of inadequacy.",
    scs7: "When I'm down, I remind myself that there are lots of other people in the world feeling like I am.",
    scs8: "When times are really difficult, I tend to be tough on myself.",
    scs9: "When something upsets me I try to keep my emotions in balance.",
    scs10: "When I feel inadequate in some way, I try to remind myself that feelings of inadequacy are shared by most people.",
    scs11: "I'm intolerant and impatient towards those aspects of my personality I don't like.",
    scs12: "When I'm going through a very hard time, I give myself the caring and tenderness I need.",
    scs13: "When I'm feeling down, I tend to feel like most other people are probably happier than I am.",
    scs14: "When something painful happens I try to take a balanced view of the situation.",
    scs15: "I try to see my failings as part of the human condition.",
    scs16: "When I see aspects of myself that I don't like, I get down on myself.",
    scs17: "When I fail at something important to me I try to keep things in perspective.",
    scs18: "When I'm really struggling, I tend to feel like other people must be having an easier time of it.",
    scs19: "I'm kind to myself when I'm experiencing suffering.",
    scs20: "When something upsets me I get carried away with my feelings.",
    scs21: "I can be a bit cold-hearted towards myself when I'm experiencing suffering.",
    scs22: "When I'm feeling down I try to approach my feelings with curiosity and openness.",
    scs23: "I'm tolerant of my own flaws and inadequacies.",
    scs24: "When something painful happens I tend to blow the incident out of proportion.",
    scs25: "When I fail at something that's important to me, I tend to feel alone in my failure.",
    scs26: "I try to be understanding and patient towards those aspects of my personality I don't like.",
  },
}
