import type { TestContent } from "@/lib/test-engine/types"

export const en: TestContent = {
  title: "Attachment Style Test",
  tagline: "Find out how you connect in close relationships",
  description:
    "Measures your attachment patterns on two scales, anxiety and avoidance. Answer about a romantic partner, a parent, or your best friend.",
  category: "Relationships",
  scientificBasis:
    "Built on the Experiences in Close Relationships-Revised (ECR-R), one of the most validated adult attachment measures in psychology; its two scales each tend to score above .90 for internal reliability. For a parent or a friend it switches to the ECR-RS, a short version from the same lab made for relationships that aren't romantic.",
  disclaimer:
    "This is a tool for learning about yourself, based on a research questionnaire. It is not a clinical diagnosis. Attachment really lives on two sliding scales, so treat the named style as a friendly summary of where you landed. It can change over time, and it can differ from one relationship to another, so take this as being about the person you had in mind.",
  instructions:
    "Answer for how you generally feel in close romantic relationships, whether past, present, or imagined. If you've never been in one, answer how you think you'd feel.",
  resultKicker: "Your attachment style",
  scale: {
    minLabel: "Strongly disagree",
    maxLabel: "Strongly agree",
    pointLabels: [
      "Strongly disagree",
      "Disagree",
      "Slightly disagree",
      "Neutral",
      "Slightly agree",
      "Agree",
      "Strongly agree",
    ],
  },
  dimensions: {
    anxiety: {
      label: "Attachment Anxiety",
      description:
        "How much you worry about whether someone you're close to is really there for you. High scores mean you often fear being abandoned or not mattering enough.",
      lowLabel: "Secure about closeness",
      highLabel: "Fears abandonment",
    },
    avoidance: {
      label: "Attachment Avoidance",
      description:
        "How uncomfortable you are getting close and leaning on people. High scores mean you tend to stay self-reliant and keep some emotional distance.",
      lowLabel: "Comfortable depending",
      highLabel: "Avoids closeness",
    },
  },
  contexts: {
    single: "Single",
    partnered: "In a relationship",
    parent: "As a parent",
  },
  perspectives: {
    romantic: {
      label: "A romantic partner",
      instruction:
        "Answer for how you generally feel in close romantic relationships, whether past, present, or imagined. If you've never been in one, answer how you think you'd feel.",
    },
    mother: {
      label: "Your mother",
      instruction:
        "Answer about your mother, or whoever raised you in a motherly way.",
    },
    father: {
      label: "Your father",
      instruction:
        "Answer about your father, or whoever raised you in a fatherly way.",
    },
    friend: {
      label: "Your best friend",
      instruction: "Answer about your best friend.",
    },
  },
  outcomes: {
    secure: {
      name: "Secure",
      tagline: "Comfortable with closeness and with independence",
      summary:
        "You feel safe getting close to people, and you don't fall apart when you're apart. You can ask for support, and you can also give someone space.",
      longDescription:
        "A secure result means you scored low on both anxiety and avoidance. You mostly trust that the people close to you are there for you, so depending on them (and being depended on) feels okay. You can say what you need, you don't read every disagreement as the end of the relationship, and you bounce back after a fight. Studies link this pattern to more satisfying, steadier relationships. One thing worth knowing: attachment isn't fixed. People move toward security over time through good relationships and a bit of self-awareness.",
      strengths: [
        "Says what they need without a lot of drama",
        "Trusts people without needing constant reassurance",
        "Treats conflict as a problem to solve rather than a threat",
        "Comfortable being close and comfortable being apart",
      ],
      growth: [
        "Remember that someone with a different style might need more reassurance, or more room, than you do",
        "Keep an eye on your own needs instead of only steadying everyone else",
      ],
      contexts: {
        single:
          "Single, you're usually fine on your own and open to meeting someone without forcing it. You tend to go for people who feel steady rather than chasing the intense ones.",
        partnered:
          "In a relationship you tend to be the calm one. You can get close without losing yourself, and give space without feeling left. You're often the person who keeps things honest and direct.",
        parent:
          "As a parent this often looks like being a dependable home base: there when your kid is upset, and happy to let them go explore. Keep in mind your style with a child can be different from your style with a partner.",
      },
    },
    anxious: {
      name: "Anxious-Preoccupied",
      tagline: "Wants closeness, worries it won't be returned",
      summary:
        "You care a lot about connection and you pick up on small shifts in your relationships. The flip side is that you can worry whether the other person feels the same, and reassurance tends to wear off fast.",
      longDescription:
        "This result means high anxiety and low avoidance. You want closeness, sometimes a lot of it, but you're quick to notice signs of distance and can read rejection into things that turn out to be nothing. The upside is real: you often catch what other people miss. The hard part is calming yourself down when you feel the connection slipping. The work here is twofold. First, learning that someone being a bit distant for an evening isn't the same as them leaving. Second, getting better at settling your own nerves before you go looking for reassurance.",
      strengths: [
        "Tuned in to other people and genuinely invested in them",
        "Willing to put effort into a relationship",
        "Warm and openly affectionate",
      ],
      growth: [
        "Try to settle yourself a little before asking for reassurance, so it actually sticks",
        "Ask for what you want straight out (\"some reassurance would help right now\") instead of testing or sulking",
        "When the \"they're pulling away\" story starts, check it against what actually happened",
      ],
      contexts: {
        single:
          "Single, you can really feel the gap when you don't have a partner, and it's tempting to move fast when someone seems promising. Slowing down and watching whether they're consistent tends to pay off.",
        partnered:
          "In a relationship, sensing distance can push you to seek reassurance or to test the other person. A partner who stays warm and predictable helps you settle.",
        parent:
          "As a parent, your sensitivity is a gift, but the same anxiety can tip into hovering. Letting your kid have their own independence is the thing to practice.",
      },
    },
    dismissive: {
      name: "Dismissive-Avoidant",
      tagline: "Very self-reliant, keeps closeness at arm's length",
      summary:
        "You're independent and you handle things yourself. Getting deeply close, or leaning on someone, can feel uncomfortable or just unnecessary.",
      longDescription:
        "This result means low anxiety and high avoidance. You don't really worry about being left, but you do keep your distance and put a high value on not needing anyone. You might play down how much relationships matter, feel crowded when someone wants more, and deal with your feelings on your own. Often this develops when depending on people didn't reliably work out, so handling things solo became the safe bet. The work here is letting a few trusted people in a bit further, and noticing the needs you've gotten good at ignoring.",
      strengths: [
        "Calm and capable when things get stressful",
        "Holds onto a clear sense of independence and boundaries",
        "Not run by a fear of rejection",
      ],
      growth: [
        "Share the small stuff before it piles up into big stuff",
        "When stress makes you want to pull back, try staying in the room instead",
        "When someone reaches for you, read it as connection rather than pressure",
      ],
      contexts: {
        single:
          "Single, you usually feel genuinely fine on your own. That's healthy, but it can quietly turn into a way to dodge the vulnerability of letting someone in.",
        partnered:
          "In a relationship you probably need more space than your partner does, and stress can make you withdraw. Saying you need space, instead of just disappearing into it, keeps them from taking it as rejection.",
        parent:
          "As a parent you may be steady and reliable but find the big emotional moments awkward. Showing up for those moments is what helps your kid feel secure.",
      },
    },
    fearful: {
      name: "Fearful-Avoidant",
      tagline: "Wants closeness and fears it at the same time",
      summary:
        "You want connection, but it can also feel risky, so you swing between reaching for people and backing away. Getting close brings up both hope and the urge to protect yourself.",
      longDescription:
        "This result means high anxiety and high avoidance (it's sometimes called disorganized). You can want closeness badly and distrust it at the same time, which makes relationships feel like a push and pull: getting close stirs up the fear of being hurt, and pulling back stirs up the fear of being alone. Usually this traces back to times when the people you needed were also a source of stress or hurt. It often comes with strong feelings and a quick sense of when something feels unsafe. The good news is that it responds well to slowly building a feeling of safety, and a lot of people find it eases over time, especially with help.",
      strengths: [
        "Capable of real empathy and emotional insight",
        "Very aware of what's happening in a relationship, including your own patterns",
        "Genuinely wants a deep connection",
      ],
      growth: [
        "Build safety slowly, with people who are patient and consistent",
        "When the urge to grab on or bolt hits, try to sit with it before acting",
        "Think about seeing a therapist. This pattern responds especially well to that kind of support",
      ],
      contexts: {
        single:
          "Single, you might want a relationship badly and still feel relief when there's distance. Just noticing that pattern, without beating yourself up over it, is the first step.",
        partnered:
          "In a relationship you may flip between closeness and pulling away, which can leave a partner confused. Patience, predictability, and actually talking about the pattern help a lot.",
        parent:
          "As a parent, strong feelings can be hard to manage in the moment. Working on your own sense of safety, with support, is what most helps your kid.",
      },
    },
  },
  questions: {
    anx1: "I'm afraid that I will lose my partner's love.",
    anx2: "I often worry that my partner will not want to stay with me.",
    anx3: "I often worry that my partner doesn't really love me.",
    anx4: "I worry that romantic partners won't care about me as much as I care about them.",
    anx5: "I often wish that my partner's feelings for me were as strong as my feelings for him or her.",
    anx6: "I worry a lot about my relationships.",
    anx7: "When my partner is out of sight, I worry that he or she might become interested in someone else.",
    anx8: "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.",
    anx9: "I rarely worry about my partner leaving me.",
    anx10: "My romantic partner makes me doubt myself.",
    anx11: "I do not often worry about being abandoned.",
    anx12: "I find that my partner(s) don't want to get as close as I would like.",
    anx13: "Sometimes romantic partners change their feelings about me for no apparent reason.",
    anx14: "My desire to be very close sometimes scares people away.",
    anx15: "I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am.",
    anx16: "It makes me mad that I don't get the affection and support I need from my partner.",
    anx17: "I worry that I won't measure up to other people.",
    anx18: "My partner only seems to notice me when I'm angry.",
    avo1: "I prefer not to show a partner how I feel deep down.",
    avo2: "I feel comfortable sharing my private thoughts and feelings with my partner.",
    avo3: "I find it difficult to allow myself to depend on romantic partners.",
    avo4: "I am very comfortable being close to romantic partners.",
    avo5: "I don't feel comfortable opening up to romantic partners.",
    avo6: "I prefer not to be too close to romantic partners.",
    avo7: "I get uncomfortable when a romantic partner wants to be very close.",
    avo8: "I find it relatively easy to get close to my partner.",
    avo9: "It's not difficult for me to get close to my partner.",
    avo10: "I usually discuss my problems and concerns with my partner.",
    avo11: "It helps to turn to my romantic partner in times of need.",
    avo12: "I tell my partner just about everything.",
    avo13: "I talk things over with my partner.",
    avo14: "I am nervous when partners get too close to me.",
    avo15: "I feel comfortable depending on romantic partners.",
    avo16: "I find it easy to depend on romantic partners.",
    avo17: "It's easy for me to be affectionate with my partner.",
    avo18: "My partner really understands me and my needs.",
    // The 9-item ECR-RS, used for the non-romantic targets (mother/father/friend).
    rsAvo1: "It helps to turn to this person in times of need.",
    rsAvo2: "I usually discuss my problems and concerns with this person.",
    rsAvo3: "I talk things over with this person.",
    rsAvo4: "I find it easy to depend on this person.",
    rsAvo5: "I don't feel comfortable opening up to this person.",
    rsAvo6: "I prefer not to show this person how I feel deep down.",
    rsAnx1: "I often worry that this person doesn't really care for me.",
    rsAnx2: "I'm afraid that this person may abandon me.",
    rsAnx3: "I worry that this person won't care about me as much as I care about him or her.",
  },
  sources: [
    {
      label: "Fraley, Waller & Brennan (2000), the ECR-R measure (UIUC)",
      url: "http://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm",
    },
    {
      label: "Brennan, Clark & Shaver (1998), original ECR and the two-scale model",
      url: "http://labs.psychology.illinois.edu/~rcfraley/measures/measures.html",
    },
    {
      label: "Bartholomew & Horowitz (1991), four-category model of adult attachment",
      url: "https://en.wikipedia.org/wiki/Attachment_in_adults",
    },
  ],
}
