import type { TestContent } from "@/lib/test-engine/types"

/**
 * English content for the Drive test (BIS/BAS Scales). Items are verbatim from
 * Carver's published instrument; the structure and scoring live in structure.ts.
 * This is the scientific reference language.
 */

export const en: TestContent = {
  title: "Drive Test",
  tagline: "What actually moves you: the pull toward reward and the brake on risk",
  description:
    "Two systems run underneath almost everything you do. One is the gas: a pull toward what you want, the lift you get from a win, the urge to chase something good. The other is the brake: an alarm that notices what could go wrong and slows you down before you act. This test measures both. It won't tell you whether you're a good or bad person. It shows you how strong each system runs in you, because the mix of the two shapes how you make decisions, take chances, and react when things go right or wrong.",
  category: "Motivation",
  scientificBasis:
    "This is the BIS/BAS Scales, built by Charles Carver and Teri White in 1994 and one of the standard ways psychology measures motivation. It rests on a simple, well-supported idea: behavior is driven by two separate systems. The Behavioral Activation System (BAS) responds to reward and pushes you toward what you want; the Behavioral Inhibition System (BIS) responds to threat and pulls you back from what could hurt. The two are independent, so a person can run high on both, low on both, or high on one and low on the other, and that pairing is the whole point. Carver's data split the reward side into three flavors (drive, fun seeking, and reward responsiveness) and left the threat side as one scale. All twenty items are kept word for word, and Carver posts the scale publicly and lets anyone use it free, without charge or permission. The two-system model lines up with decades of research on brain systems for approach and avoidance, and the scales are reliable and widely replicated. One thing to keep clear: a high threat-sensitivity score is not anxiety or a disorder. It's a finely tuned alarm, and a sharp alarm has real strengths.",
  disclaimer:
    "This is a tool for reflection, not a clinical assessment or a diagnosis. Neither system is the good one. A strong brake isn't anxiety and a strong drive isn't recklessness; each is just a tendency with its own strengths and its own costs. There are no official cutoffs for the BIS/BAS, so the high and low readings here are relative to the midpoint of the scale, not a clinical line, and your scores can shift with what's going on in your life. Read this as a snapshot of how you're wired right now, not a verdict on who you are. If threat sensitivity has tipped into worry that runs your days, or chasing rewards keeps costing you more than you mean to spend, that's worth talking through with someone you trust or a mental-health professional.",
  instructions:
    "Each statement is something a person might agree or disagree with. For each one, pick how true it is for you, from very false to very true. Answer for how you actually are, not how you think you should be. There are no right or wrong answers, and no answer is better than another.",
  resultKicker: "Your motivation profile",
  scoresTitle: "Your two systems, in four bars",
  scoresHint:
    "The first three bars are sides of your reward system, the gas: how hard you chase a goal, how much you go after novelty and fun, and how strongly good things land when they happen. The last bar is your threat system, the brake: how early you sense that something could go wrong, and how much it affects you. The two systems are separate, so there's no single combined score here. A high bar isn't good and a low bar isn't bad; each just shows how strongly that drive runs in you.",
  insightsTitle: "How each drive tends to show up",
  insightsIntro:
    "For the drives that came out stronger in you, here's how they often play out day to day, the upside and the catch. Read these as common tendencies, not a verdict. Some may fit you closely and others not at all, and a strong drive is something to work with, not fix.",
  scale: {
    minLabel: "Very false for me",
    maxLabel: "Very true for me",
    pointLabels: [
      "Very false for me",
      "Somewhat false for me",
      "Somewhat true for me",
      "Very true for me",
    ],
  },
  dimensions: {
    basDrive: {
      label: "Drive: how hard you chase what you want",
      description:
        "Part of your reward system. How strongly you pursue a goal once you've set your sights on it. A high bar means that when you want something, you go after it head-on and keep at it.",
      lowLabel: "Holds back",
      highLabel: "Goes all in",
      insight:
        "When you want something, you commit and keep pushing until it's yours. That single-mindedness gets a lot done and makes you hard to stop. The catch is it can be hard to let go of a goal that has quietly stopped being worth the chase, and easy to run past your own limits without noticing the cost.",
    },
    basFun: {
      label: "Fun seeking: your pull toward novelty",
      description:
        "Part of your reward system. How much new and exciting things draw you in, and whether you act on the urge or wait. A high bar means you're drawn to what's new and tend to move on it in the moment.",
      lowLabel: "Sticks to the plan",
      highLabel: "Chases the new",
      insight:
        "You're drawn to what's new and exciting, and you'll often act on the impulse rather than think it all the way through. That makes you spontaneous, up for things, and good company. It's also the side of drive most tied to impulsiveness, so it can steer you toward the fun option when the sensible one would have served you better.",
    },
    basReward: {
      label: "Reward response: how strongly good things land",
      description:
        "Part of your reward system. How much of a lift you get when something good happens. A high bar means a win, a treat, or good news gives you a real surge of energy.",
      lowLabel: "Stays level",
      highLabel: "Lights up",
      insight:
        "Good things hit you hard, in the best sense: a win or a bit of good news gives you a genuine jolt of energy. That makes success feel sweet and keeps you coming back for more. The flip side is that your mood can ride pretty closely on how things are going, so a flat stretch with no wins in it can feel heavier for you than it does for other people.",
    },
    bis: {
      label: "Threat sensitivity: your brake on risk",
      description:
        "Your other system, the brake. How early you sense that something could go wrong, and how much the possibility affects you. A high bar means you notice risk before most people and feel it, which slows you down before you act.",
      lowLabel: "Rarely rattled",
      highLabel: "Senses risk early",
      insight:
        "You pick up on what could go wrong before most people do, and the chance of a bad outcome genuinely lands on you. This isn't weakness or being too anxious: it's a sharp alarm that makes you careful, prepared, and quick to take a real risk seriously, which is exactly the person you want watching the downside. The cost is that the alarm can go off when nothing is actually wrong, leaving you worried or braced for trouble that never shows up.",
    },
  },
  outcomes: {
    driven: {
      name: "The Go-Getter",
      tagline: "Strong gas, light brake. You see what you want and you move",
      summary:
        "Your reward system runs hot and your threat alarm stays quiet, so when you want something you go for it without much hesitation. You're drawn to wins, to action, to the next good thing, and you don't spend long worrying about what might go wrong. That's a powerful setup for getting things done and going after a big life.",
      longDescription:
        "With a strong drive and a light brake, you lead with appetite. Opportunities catch your eye, good things give you a real lift, and the fear of a bad outcome rarely talks you out of acting. People like you tend to start things, take chances other people sit out, and recover quickly when something doesn't pan out, because you're already looking at the next move. The thing to keep an eye on is the part of you that hardly ever says wait. A quiet brake means the warning signs other people feel in their gut may not reach you, so the risks you take are worth a second, deliberate look, the kind your wiring won't prompt on its own. Borrowing some caution on the big calls (a person you trust, a night to sleep on it) lets you keep the momentum without the occasional expensive surprise.",
      strengths: [
        "You act while other people are still deliberating",
        "Setbacks don't sink you; you're already onto the next thing",
        "Good at spotting and seizing an opportunity",
        "Bold in a way that opens doors caution would leave shut",
      ],
      growth: [
        "On the big, hard-to-reverse decisions, build in a deliberate pause; your gut won't supply one",
        "Keep someone around who'll name the risk you're skating past, and actually hear them",
        "Notice when chasing the next thing is costing you something you already have",
        "Let a goal go when it's stopped being worth it, instead of pushing on principle",
      ],
    },
    intense: {
      name: "The Striver",
      tagline: "Strong gas and strong brake, both at once. You want it badly and you feel the risk",
      summary:
        "Both systems run high in you, so you live with the gas and the brake pressed together. You want things intensely and you feel sharply what it would cost to lose them. That can be a lot to hold at once, and it's also the engine behind people who care deeply and prepare well, chasing hard while watching the downside more closely than anyone.",
      longDescription:
        "Running high on both drive and threat sensitivity is the most charged of the four profiles. You're pulled hard toward what you want and pulled back just as hard by what could go wrong, so you might throw yourself at a goal and lie awake over it the same week. It can feel like wanting and worrying are wired to the same switch. Handled well, this is a real strength: the people who both care intensely and see the risks clearly are often the ones who do careful, ambitious work and don't get blindsided. The trap is friction, getting stuck between go and stop until the wanting turns into stress. What helps is keeping the two systems from fighting in your head: decide the risk is acceptable, then let yourself fully chase the thing, rather than relitigating the danger the whole way there. Your caution has done its job once the call is made.",
      strengths: [
        "You go after what you want and see the risks clearly, a rare combination",
        "You prepare for what could go wrong instead of being blindsided by it",
        "You care deeply, which shows in how much effort you put in",
        "Ambitious and careful at the same time, which builds real trust",
      ],
      growth: [
        "Once you've decided a risk is worth it, stop relitigating the danger and let yourself commit",
        "Notice when wanting something has curdled into worrying about it, and name the difference",
        "Use the brake to plan, not to punish yourself for wanting things",
        "Give the tension somewhere to go (movement, talking it out) so it doesn't just sit and grind",
      ],
    },
    cautious: {
      name: "The Sentinel",
      tagline: "Light gas, strong brake. You read the risk before you move",
      summary:
        "Your threat system runs strong and your reward pull is gentler, so you tend to look before you leap and feel the downside more than the upside. You're the one who notices what could go wrong while everyone else is excited, and that's not a flaw. It's foresight. You keep yourself, and often other people, out of trouble they'd have walked straight into.",
      longDescription:
        "With a strong brake and a lighter gas, you're tuned to risk. You weigh things carefully, you don't get swept up in the rush of a shiny new prospect, and you sense trouble early enough to step around it. The world needs this wiring; a lot of avoidable disasters were avoided by someone who felt uneasy and said so. The honest cost is that the same alarm can hold you back from things that were actually safe, and a quieter reward pull means wins might not light you up enough to feel worth the worry they cost. So the work isn't to silence the caution, which is doing real good, but to check it: when the alarm fires, ask whether this is genuine danger or just the alarm being sensitive, and let yourself go after the good things that pass the test. You don't have to feel fearless to act, only clear that the risk is one you can live with.",
      strengths: [
        "You see trouble coming while other people are still celebrating",
        "Careful with risks, so you avoid messes that catch bolder people out",
        "You take other people's worries seriously instead of waving them off",
        "Thoughtful and prepared; you rarely get blindsided",
      ],
      growth: [
        "When the alarm fires, ask whether it's real danger or just a sensitive alarm",
        "Let yourself chase the good things that clearly pass the risk check",
        "Remember that not acting is a choice with costs too, not the safe default",
        "Let small wins actually count, so the upside starts to register as much as the downside",
      ],
    },
    easygoing: {
      name: "The Even Keel",
      tagline: "Light gas, light brake. Not much rattles you, not much rushes you",
      summary:
        "Both systems run on the gentle side, so you're not pushed hard toward rewards and not braked hard by risks. You take things as they come. Highs don't send you over the moon and threats don't keep you up at night, which makes you steady, hard to fluster, and easy to be around when everyone else is spun up.",
      longDescription:
        "Running low on both drive and threat sensitivity gives you an even, unflappable quality. You're not chasing the next big win and you're not bracing for the next disaster, so you tend to stay level while other people swing between excitement and dread. That steadiness is genuinely calming to be around, and it means you can make decisions without your emotions yanking the wheel. The thing worth watching is that a gentle gas can read as drift: if nothing pulls strongly at you, it's easy to coast and let time pass without going after much. So the useful question for you isn't how to calm down, it's what you actually want enough to move for. Steadiness plus one thing you genuinely care about is a strong combination; steadiness with nothing behind it can quietly become a life you didn't really choose. The good news is you can pick the goal deliberately, since you won't be dragged into one by appetite or scared out of one by risk.",
      strengths: [
        "Steady and hard to fluster when other people are spun up",
        "You don't get yanked around by every high and low",
        "Calm under pressure, which other people lean on",
        "Free to choose your aims deliberately, not driven into them",
      ],
      growth: [
        "Pick something you genuinely want and aim at it on purpose; appetite won't pick it for you",
        "Watch for coasting, where steady quietly turns into drifting",
        "Let yourself fully enjoy the wins, not just take them in stride",
        "Set a few deadlines or stakes from the outside, since your own urgency runs low",
      ],
    },
  },
  questionHelpers: {
    bisbas16:
      "Like when you sense something bad coming, you get tense and on edge, not calm, kind of wound up about it before it even happens.",
    bisbas18:
      "Like when something good happens, it really lifts you, not just a small nice feeling but a real boost to your mood.",
    bisbas21:
      "Like when you want something, you throw everything at it and hold nothing back, going at it full force rather than carefully.",
  },
  questions: {
    bisbas2: "Even if something bad is about to happen to me, I rarely experience fear or nervousness.",
    bisbas3: "I go out of my way to get things I want.",
    bisbas4: "When I'm doing well at something I love to keep at it.",
    bisbas5: "I'm always willing to try something new if I think it will be fun.",
    bisbas7: "When I get something I want, I feel excited and energized.",
    bisbas8: "Criticism or scolding hurts me quite a bit.",
    bisbas9: "When I want something I usually go all-out to get it.",
    bisbas10: "I will often do things for no other reason than that they might be fun.",
    bisbas12: "If I see a chance to get something I want I move on it right away.",
    bisbas13: "I feel pretty worried or upset when I think or know somebody is angry at me.",
    bisbas14: "When I see an opportunity for something I like I get excited right away.",
    bisbas15: "I often act on the spur of the moment.",
    bisbas16: "If I think something unpleasant is going to happen I usually get pretty \"worked up.\"",
    bisbas18: "When good things happen to me, it affects me strongly.",
    bisbas19: "I feel worried when I think I have done poorly at something important.",
    bisbas20: "I crave excitement and new sensations.",
    bisbas21: "When I go after something I use a \"no holds barred\" approach.",
    bisbas22: "I have very few fears compared to my friends.",
    bisbas23: "It would excite me to win a contest.",
    bisbas24: "I worry about making mistakes.",
  },
}
