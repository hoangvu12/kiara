import type { TestContent } from "@/lib/test-engine/types"

export const en: TestContent = {
  title: "16 Personality Types",
  tagline: "Find your four-letter personality type",
  description:
    "A modern take on the classic 16-type system. Four quick scales (how you focus, how you take things in, how you decide, and how you run your days) add up to one of sixteen types, with your real scores shown behind it.",
  category: "Personality",
  scientificBasis:
    "Built on Carl Jung's theory of psychological types and on the Big Five, the model academic psychology actually trusts. The four scales line up with Extraversion, Openness, Agreeableness, and Conscientiousness (McCrae & Costa, 1989). This is an independent test with its own questions. It is not the MBTI® and isn't connected to it. We measure each scale as a sliding scale rather than a hard box, because that's what the research supports.",
  disclaimer:
    "This is a tool for thinking about yourself, not a clinical or scientific verdict. Your type is a friendly summary of four scores that really sit on sliding scales. So if a scale lands near the middle, that letter could easily go the other way, and your type may shift over time or with your mood. Take the scores as the real result and the four letters as shorthand. Myers-Briggs® and MBTI® are trademarks of their respective owners and have no connection to this test.",
  instructions:
    "Answer honestly for how you generally are, not how you'd like to be or how you act in one particular situation. There are no right answers, and no type is better than another.",
  resultKicker: "Your personality type",
  scoresTitle: "Your four scales",
  scoresHint:
    "These four scores are the real result. The closer to the middle a bar sits, the more you lean on both sides, and the less sure that letter is.",
  scale: {
    minLabel: "Strongly disagree",
    maxLabel: "Strongly agree",
    pointLabels: [
      "Strongly disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly agree",
    ],
  },
  dimensions: {
    mind: {
      label: "Mind: Introversion or Extraversion",
      description:
        "Where you get your energy. A higher score leans Extraverted (charged up by people and the outside world); a lower score leans Introverted (recharged by quiet and time alone). Land near the middle and you draw on both.",
      lowLabel: "Introversion",
      highLabel: "Extraversion",
    },
    energy: {
      label: "Energy: Sensing or Intuition",
      description:
        "How you take in the world. A higher score leans Intuitive (drawn to patterns, ideas, and what could be); a lower score leans Sensing (grounded in facts, detail, and what's actually there). Near the middle, you use both.",
      lowLabel: "Sensing",
      highLabel: "Intuition",
    },
    nature: {
      label: "Nature: Thinking or Feeling",
      description:
        "How you make decisions. A higher score leans Feeling (led by values and how people will be affected); a lower score leans Thinking (led by logic and consistency). Near the middle, you weigh both.",
      lowLabel: "Thinking",
      highLabel: "Feeling",
    },
    tactics: {
      label: "Tactics: Judging or Perceiving",
      description:
        "How you deal with the outside world. A higher score leans Perceiving (flexible, spontaneous, likes to keep options open); a lower score leans Judging (planned, organized, likes things settled). Near the middle, you do some of each.",
      lowLabel: "Judging",
      highLabel: "Perceiving",
    },
  },
  outcomes: {
    intj: {
      name: "INTJ, the Strategist",
      tagline: "Sees the long game and quietly plays it",
      summary:
        "You see where things are heading and quietly build the plan to get there. You'd rather master a problem on your own terms than be told how to solve it.",
      longDescription:
        "INTJs pair a big-picture vision with the discipline to act on it. You think in systems and timelines, hold yourself to high standards, and trust your own read of things even when it cuts against the crowd. The flip side is that you can come across as cold, or impatient with people who haven't caught up to where your thinking already is. The thing worth practising is treating other people's input, and their feelings, as data worth gathering too.",
      strengths: [
        "Strategic, big-picture thinking",
        "Independent and self-driven",
        "Decisive once you've weighed the evidence",
        "Holds a high bar and follows through",
      ],
      growth: [
        "Let people in earlier instead of presenting a finished plan",
        "Treat emotions, yours and others', as real information",
        "Remember that not every problem needs solving alone",
      ],
    },
    intp: {
      name: "INTP, the Analyst",
      tagline: "Happiest with a hard problem to take apart",
      summary:
        "You love pulling ideas apart to see how they really work. A good problem or a sloppy argument can keep your mind happily busy for hours.",
      longDescription:
        "INTPs are driven by understanding for its own sake. You're precise with logic, quick to spot what doesn't add up, and comfortable leaving a question open until the answer is genuinely earned. That same depth can make it hard to commit to a conclusion, or to the boring follow-through that turns an idea into something real. You're at your best when you let your thinking out into the world instead of polishing it forever in your head.",
      strengths: [
        "Sharp, original analytical thinking",
        "Spots flaws and hidden assumptions others miss",
        "Open-minded and intellectually honest",
        "Stays calm and objective in a debate",
      ],
      growth: [
        "Share your ideas before they feel finished",
        "Watch for analysis that's quietly become avoidance",
        "Remember people aren't problems to be solved",
      ],
    },
    entj: {
      name: "ENTJ, the Director",
      tagline: "Sees what needs doing and takes charge",
      summary:
        "You see what needs to happen and naturally step up to make it happen. Goals, structure, and forward motion are what get you going.",
      longDescription:
        "ENTJs put strategic vision together with the drive to rally people and resources behind it. You're confident, direct, and good at turning a vague ambition into a real plan with dates on it. The risk is steamrolling: moving so fast and so sure of yourself that you miss the quieter voices or bruise people on the way. Your leadership gets sharper the day you pair that decisiveness with patience and some real listening.",
      strengths: [
        "Natural, confident leadership",
        "Turns vision into a concrete plan",
        "Decisive and focused on results",
        "Comes alive with a challenge",
      ],
      growth: [
        "Slow down enough to hear the quieter voices",
        "Let people reach their own conclusions without a push",
        "Soften the directness with a little warmth",
      ],
    },
    entp: {
      name: "ENTP, the Innovator",
      tagline: "Lives for a new idea and a good argument",
      summary:
        "You bounce between ideas and possibilities, and you treat a good argument as a way to think out loud. Routine bores you; something new lights you up.",
      longDescription:
        "ENTPs are idea machines: fast, curious, and happiest turning a problem over from every angle. You poke at assumptions easily and can talk people into a new direction on enthusiasm alone. The catch is the finish. The spark of a fresh idea is a lot more fun than the slog of wrapping up the last one. You do your best work when you point that inventiveness at something you'll actually see through.",
      strengths: [
        "Fast, inventive idea generation",
        "Connects ideas across very different fields",
        "Persuasive and quick on your feet",
        "Energized by change and a good challenge",
      ],
      growth: [
        "Finish what you start before chasing the next idea",
        "Pick your debates; not everything needs arguing",
        "Build a few routines to protect your big projects",
      ],
    },
    infj: {
      name: "INFJ, the Confidant",
      tagline: "Quietly idealistic, reads people deeply",
      summary:
        "You read people and situations deeply, and a private sense of how things ought to be guides you. You want your life to mean something.",
      longDescription:
        "INFJs mix empathy with conviction. You sense what other people feel, and you hold firm beliefs about how they ought to be treated. You tend to give a lot, and you think about long-term meaning more than quick wins. The danger is burning out in silence, or holding yourself and the world to a standard nobody can meet. You're at your steadiest when you let a few trusted people see the real you, not just the helper.",
      strengths: [
        "Deep insight into people and what drives them",
        "Guided by strong, steady values",
        "Warm, but with a backbone",
        "Driven by meaning, not just success",
      ],
      growth: [
        "Guard your energy before you run dry",
        "Let people support you, not just the other way round",
        "Allow the world, and yourself, to be imperfect",
      ],
    },
    infp: {
      name: "INFP, the Dreamer",
      tagline: "Gentle, imaginative, true to their values",
      summary:
        "A deep inner compass and a vivid imagination guide you. What matters most to you is staying true to what you believe.",
      longDescription:
        "INFPs feel things deeply and care about living in a way that's honest and kind. You see the potential in people and ideas, and you're happiest making or standing up for something you believe in. The hard part is that reality rarely matches the picture in your head, which can tip into self-criticism or getting stuck. Things move for you when you turn the ideal into one small, real step instead of waiting for the perfect moment.",
      strengths: [
        "A strong, clear sense of your own values",
        "Deeply empathetic and accepting",
        "Imaginative and creative",
        "Sees the best in people",
      ],
      growth: [
        "Turn ideals into small steps you can take today",
        "Go easier on yourself when reality falls short",
        "Say what you need out loud instead of pulling away",
      ],
    },
    enfj: {
      name: "ENFJ, the Mentor",
      tagline: "Warm, inspiring, tuned in to people",
      summary:
        "You bring out the best in people without much trying, and you care a lot about those around you. Helping someone grow feels close to a calling.",
      longDescription:
        "ENFJs are warm, easy to follow, and genuinely invested in how other people turn out. You read a room well, pull people together around something good, and leave the people near you feeling seen. The risk is losing yourself in everyone else's needs, or taking on feelings that were never yours to fix. You're at your strongest when you look after your own needs as carefully as you look after everyone else's.",
      strengths: [
        "Lifts up and inspires the people around you",
        "Reads the emotional currents in a room",
        "Warm, encouraging, and loyal",
        "Pulls people together around a shared goal",
      ],
      growth: [
        "Tend to your own needs, not only other people's",
        "Let people own their problems and their choices",
        "Accept that you can't keep everyone happy",
      ],
    },
    enfp: {
      name: "ENFP, the Spark",
      tagline: "Curious, warm, sees possibility everywhere",
      summary:
        "You see possibility everywhere and bring a contagious energy to people and ideas. Connection matters to you, and so does your freedom.",
      longDescription:
        "ENFPs are warm, expressive, and endlessly curious about people and what might be. You make friends easily, spot potential others walk right past, and throw yourself into whatever excites you. The challenge is staying with something once that first rush of excitement fades, and not saying yes to everything just to keep people happy. You go furthest when you anchor all that energy to a few commitments you really hold to.",
      strengths: [
        "Contagious enthusiasm and warmth",
        "Sees the potential in people and ideas",
        "Adaptable and spontaneous",
        "Clicks with all kinds of people",
      ],
      growth: [
        "Follow through once the novelty wears off",
        "Don't over-commit just to please people",
        "Build a little structure to hold your ideas",
      ],
    },
    istj: {
      name: "ISTJ, the Steward",
      tagline: "Dependable to the core, does things properly",
      summary:
        "You're the one people count on to get it right and get it done. You value order, responsibility, and keeping your word.",
      longDescription:
        "ISTJs are steady, practical, and about as reliable as people come. You respect facts and proven methods, you do what you said you'd do, and you bring a calm sense of duty to whatever you take on. The flip side is a stiffness with change, or a slowness to trust an approach that hasn't been tested yet. You grow by staying open to new ways of doing things, and by letting the care behind your dependability actually show.",
      strengths: [
        "Reliable, and good for your word",
        "Thorough and careful with detail",
        "Calm, practical, hard to rattle",
        "A strong sense of duty and order",
      ],
      growth: [
        "Stay open to new and untested ways of doing things",
        "Let the warmth behind your dependability show",
        "Loosen your grip on the small stuff",
      ],
    },
    isfj: {
      name: "ISFJ, the Protector",
      tagline: "Looks after people, quietly and well",
      summary:
        "You look after the people around you with steady, practical care. You notice what someone needs and quietly make sure it gets handled.",
      longDescription:
        "ISFJs are warm, conscientious, and deeply loyal. You remember the small things, you show up again and again, and you take real pride in caring for people well. The risk is putting yourself last so often that your own needs quietly go unmet, or sitting on a frustration until it hardens into resentment. You do better when you let yourself be cared for too, and when you name what you need before it boils over.",
      strengths: [
        "Caring and quick to notice what people need",
        "Loyal and dependable",
        "Practical and aware of the details",
        "Patient and steady",
      ],
      growth: [
        "Ask for what you need before resentment builds",
        "Let other people take care of you sometimes",
        "Deal with friction early instead of swallowing it",
      ],
    },
    estj: {
      name: "ESTJ, the Organizer",
      tagline: "Brings order and gets things done",
      summary:
        "You bring structure and a clear sense of direction wherever you go. You like things done properly, on time, and to a standard everyone knows.",
      longDescription:
        "ESTJs are decisive, organized, and good at making things actually run. You set clear expectations, you value reliability and tradition, and you don't flinch from taking responsibility. The downside is a short fuse for ambiguity, or for people who work in a way that isn't yours. You lead best when you balance that high bar with some flexibility and a real ear for how other people see things.",
      strengths: [
        "Organized and dependable",
        "Decisive and direct",
        "A strong sense of responsibility",
        "Gets things done without fuss",
      ],
      growth: [
        "Make room for ways of working that aren't yours",
        "Sit with ambiguity before forcing a decision",
        "Lead with a question now and then, not just a directive",
      ],
    },
    esfj: {
      name: "ESFJ, the Host",
      tagline: "Warm, sociable, holds the group together",
      summary:
        "You create warmth and a sense of belonging wherever you are. You're tuned in to people, generous with help, and happiest when those around you are doing well.",
      longDescription:
        "ESFJs are friendly, organized, and genuinely caring. You keep people connected, you remember what matters to them, and you put real work into harmony and support. The risk is leaning too hard on being liked, or smoothing over a hard conversation just to keep the peace. Your generosity lands best when it comes from your own values rather than a need for everyone's approval.",
      strengths: [
        "Warm, sociable, and generous",
        "Attentive to how people are feeling",
        "Organized and dependable",
        "Builds connection and belonging",
      ],
      growth: [
        "Don't pin your worth on other people's approval",
        "Have the hard conversation instead of papering over it",
        "Let your own values lead, not just the group's mood",
      ],
    },
    istp: {
      name: "ISTP, the Craftsman",
      tagline: "Calm, practical, learns by doing",
      summary:
        "You learn by doing, and you stay calm when things go sideways. Hand you a real problem and some room, and you'll work it out.",
      longDescription:
        "ISTPs are independent, observant, and great at solving practical problems on the spot. You like understanding how things work, you keep a level head under pressure, and you value your freedom over rules that exist for their own sake. The flip side is going quiet or checking out when things get emotional, and bristling at being boxed in. You grow by staying present for the people part, not just the mechanics.",
      strengths: [
        "Calm and capable in a crisis",
        "A skilled, hands-on problem-solver",
        "Independent and adaptable",
        "Realistic and hard to fluster",
      ],
      growth: [
        "Stay in the room when a conversation turns emotional",
        "Say what's going on inside more often",
        "Commit before you've exhausted every last option",
      ],
    },
    isfp: {
      name: "ISFP, the Artist",
      tagline: "Gentle, present, shows more than tells",
      summary:
        "You take the world in through your senses and your values, and you say who you are through what you make and do. You live in the present.",
      longDescription:
        "ISFPs are warm, easygoing, and finely tuned to beauty and to the moment they're in. Your own values guide you, you'd rather avoid conflict, and you tend to show who you are through what you do more than what you say. The challenge is speaking up for yourself, and looking a little past the present to the longer plan. You come into your own when you let people see your inner world and say your quiet convictions out loud.",
      strengths: [
        "Alive to beauty and to the present moment",
        "Warm, accepting, and easy to be around",
        "Guided by genuine personal values",
        "Says it through action and craft",
      ],
      growth: [
        "Speak up for what you want and need",
        "Plan a little past the present moment",
        "Don't dodge conflict until it festers",
      ],
    },
    estp: {
      name: "ESTP, the Dynamo",
      tagline: "Bold, quick, thrives on action",
      summary:
        "You live in the moment and come alive in action. While other people are still thinking it over, you're already moving and adjusting as you go.",
      longDescription:
        "ESTPs are energetic, practical, and bold. You read a situation fast, you'll take a risk where others hesitate, and you keep your cool when the pressure's on. The downside is a thin patience for theory and a pull toward the thrill of right now over what it costs later. You're sharpest when you set that instinct for action next to a quick thought about where it actually leads.",
      strengths: [
        "Bold and quick to act",
        "Reads a situation and adapts fast",
        "Calm and resourceful under pressure",
        "Full of energy and good company",
      ],
      growth: [
        "Pause to weigh the cost before you act",
        "Give theory and planning a fair shot",
        "Watch for the risks you take just out of boredom",
      ],
    },
    esfp: {
      name: "ESFP, the Performer",
      tagline: "Spontaneous, playful, full of life",
      summary:
        "You bring fun, warmth, and energy wherever you go. You love people, you love a good experience, and you make the moment better for everyone in it.",
      longDescription:
        "ESFPs are warm, lively, and generous with their energy. You're spontaneous, tuned in to the people around you, and gifted at lifting the mood and getting everyone together. The risk is dodging the harder, less fun stuff: the long-term plan, the heavy feeling, the boring task that still has to get done. You shine brightest when you let yourself stay with the serious moments too, not only the bright ones.",
      strengths: [
        "Warm, fun, and full of energy",
        "Tuned in to people and to the moment",
        "Generous and spontaneous",
        "Lifts the mood and brings people together",
      ],
      growth: [
        "Face the boring or hard tasks instead of dodging them",
        "Think a step ahead, not just about right now",
        "Stay with a hard feeling instead of reaching for a distraction",
      ],
    },
  },
  questions: {
    mind1: "Meeting new people gives me energy rather than draining it.",
    mind2: "I tend to think out loud, working out what I mean as I talk.",
    mind3: "At a gathering, I'm usually one of the people keeping the conversation going.",
    mind4: "After a long, social day I feel charged up rather than worn out.",
    mind5: "I need a good amount of time alone to recharge.",
    mind6: "I'd rather have a few close friends than a wide circle of acquaintances.",
    mind7: "I usually think things through quietly before I say them.",
    mind8: "Too much socializing leaves me wanting to slip away and be on my own.",
    energy1: "I focus on the big picture more than the small details.",
    energy2: "I like figuring out how things work and why they came to be the way they are.",
    energy3: "I often spot connections between things that seem unrelated.",
    energy4: "When I see how something's usually done, my mind jumps to a totally different way to do it.",
    energy5: "I trust facts and what I've experienced myself more than gut feelings.",
    energy6: "I pay close attention to the practical details right in front of me.",
    energy7: "I'd rather stick with familiar ways I know work than try new, untested ones.",
    energy8: "I focus on what's happening right now, not what might happen later.",
    nature1: "When I make a decision, I care a lot about how the people involved will feel.",
    nature2: "I try to put myself in someone else's shoes before I judge the situation.",
    nature3: "It matters a lot to me that everyone in the group gets along.",
    nature4: "When I decide something, I follow my heart more than my head.",
    nature5: "I'd rather decide with logic, even if it ruffles a few feathers.",
    nature6: "I'd rather stand by what I think is right than just go along to keep people happy.",
    nature7: "I can step back and analyze a problem without my feelings getting in the way.",
    nature8: "I think being honest matters more than being tactful.",
    tactics1: "I like to keep my options open rather than lock in a plan.",
    tactics2: "I tend to work in bursts when I'm inspired, rather than at a steady pace every day.",
    tactics3: "I'm comfortable just diving in and figuring things out as I go.",
    tactics4: "When something changes at the last minute, I find it more exciting than stressful.",
    tactics5: "I feel better once a decision is made and settled.",
    tactics6: "I like to plan ahead and stick to the plan.",
    tactics7: "I keep my tasks and my space tidy and in order.",
    tactics8: "I like to get things done early, not right before the deadline.",
  },
}
