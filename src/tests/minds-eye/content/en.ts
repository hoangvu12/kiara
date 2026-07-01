import type { TestContent } from "@/lib/test-engine/types"

/**
 * English content for the Mind's Eye test (VVIQ-2). Items are verbatim from
 * Marks' freely posted instrument (two source typos corrected: "lightning" in
 * item 7, "an urgent expression" in item 18). Structure and scoring live in
 * structure.ts. This is the scientific reference language.
 */

export const en: TestContent = {
  title: "Mind's Eye Test",
  tagline: "How vividly you can picture things in your head",
  description:
    "Close your eyes and picture a friend's face, or the sun coming up. For some people that summons a clear, colourful scene, almost like watching it happen. For others there's nothing at all, just the knowledge of what a friend looks like with no picture attached. This test measures where you fall on that spectrum, from a mind's eye that draws a blank (aphantasia) to one so vivid it rivals real sight (hyperphantasia). You imagine eight everyday scenes and rate how clearly each one comes to you.",
  category: "Imagination",
  scientificBasis:
    "This is the Vividness of Visual Imagery Questionnaire, version 2 (VVIQ-2), built by the psychologist David Marks in 1995 and one of the standard ways researchers measure visual imagery. You picture thirty-two things across eight familiar scenes and rate each on a five-point scale, from no image at all up to as vivid as normal vision. All thirty-two items are kept word for word; Marks posts the VVIQ-2 free for anyone to use without permission. We read your result as the average across all the items, which puts you on a one to five scale and lets the well-established VVIQ cutoffs apply directly. The lowest band, an average around two or below, is the range researchers use to identify aphantasia, which studies put at roughly three to four percent of people; the same share sit at the vivid top end. The VVIQ is reliable and has been replicated for decades. One thing to keep clear: it measures visual imagery specifically, so it says nothing about your inner voice, your sense of space, or your memory for facts.",
  disclaimer:
    "This is a tool for curiosity and reflection, not a diagnosis or a medical test. Its own author warns that the VVIQ was never built to screen or diagnose anyone, so treat your band as a self-assessment of how vivid your imagery tends to be, not a label. Every level here is normal human variation. A faint mind's eye or none at all is a difference, not a deficit: many people with aphantasia never notice anything is missing and do perfectly well, often with strong verbal, logical, or spatial thinking. Vividness can also dip when you're tired or distracted, so one sitting is a snapshot. The one thing worth raising with a professional is a sudden loss of imagery you clearly used to have, since a change like that can occasionally follow a head injury or a shift in mood; a lifelong quiet mind's eye is simply how some minds are built.",
  instructions:
    "For each item, read it, then try to picture it in your mind's eye and rate how vivid the image was, from no picture at all to as clear as really seeing it. Some people find it easiest to pause and let the image form before rating. Answer for what you actually see in your head, not what you think you should see, and don't worry about picturing the exact same friend or shop each time. There are no right or wrong answers.",
  resultKicker: "Your mind's eye",
  scoresTitle: "Where your imagery lands",
  scoresHint:
    "Your result is one score on a one to five scale of vividness, shown here out of 100. Most people sit around the middle, able to picture things with moderate clarity. The two ends are rarer: an average near the bottom points toward aphantasia, little or no voluntary imagery, and one near the top toward hyperphantasia, imagery as vivid as real seeing. Each tail is only about three to four percent of people. Wherever you land is a normal way for a mind to work.",
  scale: {
    minLabel: "No image at all",
    maxLabel: "As vivid as real sight",
    pointLabels: [
      "No image at all",
      "Vague and dim",
      "Moderately vivid",
      "Clear and vivid",
      "As vivid as real sight",
    ],
  },
  dimensions: {
    vividness: {
      label: "Visual imagery vividness",
      description:
        "How clear and lifelike the pictures in your mind's eye are when you deliberately try to visualize something, from no image at all to one as vivid as really seeing it.",
      lowLabel: "No mind's eye",
      highLabel: "As vivid as real sight",
    },
  },
  outcomes: {
    aphantasia: {
      name: "A Mind's Eye Closed",
      tagline: "You think without pictures",
      summary:
        "When you try to picture something, little or nothing appears. You know exactly what a friend looks like or how the sun rises, but the knowledge comes without an image attached. This is aphantasia, and about one in thirty people share it.",
      longDescription:
        "For you, \"picture an apple\" is more a figure of speech than an instruction. You can think about the apple, describe it, list its colour and shape, but you don't see it on any inner screen; there's the fact of it, and maybe the faintest flicker, but no real picture. This is aphantasia, and for a long time nobody had a name for it. Plenty of people only discover it in adulthood and are genuinely surprised to learn that \"see it in your mind's eye\" was ever meant literally. It is a difference in how your mind works, not something wrong with it. Aphantasia usually comes with completely normal memory and often with real strengths in words, logic, facts, and spatial reasoning, because you lean on those instead of on mental pictures. It's specific to voluntary visual imagery too: some people with aphantasia still have vivid dreams, and your inner voice or your sense of where things are in space may be perfectly intact. Many aphantasics live entire full, creative lives and never feel they're missing a thing.",
      strengths: [
        "You tend to think in words, concepts, and facts, which makes for clear, precise reasoning",
        "Upsetting memories are less likely to replay as vivid images, so they can sting less",
        "You often have strong spatial or logical skills, having leaned on them instead of pictures",
      ],
      growth: [
        "When you plan or remember, use lists, words, and diagrams rather than fighting to visualize",
        "If a task assumes you can picture something, say so and ask for it in words or on paper",
        "Know that this is a well-documented difference, not a flaw, if anyone treats it as one",
        "Get curious rather than worried: notice which senses your imagination does use, like sound or space",
      ],
    },
    faint: {
      name: "Faint Pictures",
      tagline: "Your images are dim and take effort",
      summary:
        "You can call up a mental picture, but it's dim, vague, and doesn't hold still for long. There's something there, just faint, and it usually takes a bit of effort to summon. Your imagery runs below average, and that's a common, ordinary way to be.",
      longDescription:
        "When you picture a friend's face or a familiar shop, an image does form, but it's more like a faded, half-lit sketch than a clear photograph. It may slip away as soon as you reach for detail, or need real concentration to hold. This is sometimes called hypophantasia, the stretch between a blank mind's eye and a typical one. It's genuine imagery, just quieter and more effortful than most people's, and there's nothing wrong with it. You might find you rely on words or logic as much as on pictures, and that visualizing works better when you're rested and unhurried than when you're tired or distracted. Some people in this range barely think about it; others notice it mostly when someone describes their own imagery as vivid and detailed and it doesn't match their experience. Either way, faint pictures are simply one setting a mind can run at.",
      strengths: [
        "You can visualize when you need to, even if it takes a little effort",
        "You likely balance mental pictures with words and logic rather than leaning on images alone",
        "Vivid, unwanted images are less likely to intrude on you than on more visual thinkers",
      ],
      growth: [
        "Give your imagery the conditions it likes: quiet, unhurried, rested, eyes closed",
        "Lean on notes, sketches, or spoken description when a picture won't hold on its own",
        "If you want to, practice: briefly holding and rebuilding an image can slowly sharpen it",
      ],
    },
    typical: {
      name: "A Working Mind's Eye",
      tagline: "You picture things with reasonable clarity",
      summary:
        "You can picture people, places, and scenes with decent, moderate clarity. Not a flawless photograph, but the image is clearly there and you can work with it. This is where most people land, the everyday mind's eye at its ordinary setting.",
      longDescription:
        "Ask you to picture the front of a shop you know and it comes up with reasonable clarity: you can make out the colours, the shape of the door, roughly where things sit, even if it isn't sharp in every corner or perfectly steady. This is the most common result and a comfortable place to be. Your visual imagination is a normal, usable tool. You probably lean on it without much thought when you plan a room, recall a face, follow a story, or daydream, and you can add or drop detail when you try. It isn't as immersive as the vivid top end, where images can feel almost real, and it's a world away from a blank mind's eye, but for nearly everything day to day it does the job well. If you're curious, you can stretch it a little by paying deliberate attention to colour, texture, and detail when you visualize.",
      strengths: [
        "A flexible visual imagination you can use for planning, memory, and daydreaming",
        "You can add or drop detail in a mental image when you deliberately try",
        "Your imagery is vivid enough to be useful without being so intense it intrudes",
      ],
      growth: [
        "Notice when you're already visualizing, like recalling a face or laying out a room, and use it on purpose",
        "To sharpen an image, focus on one sense at a time: colour first, then shape, then movement",
        "Pair pictures with words for the best of both when you're learning or remembering",
      ],
    },
    vivid: {
      name: "Vivid Pictures",
      tagline: "Your mental images are clear and colourful",
      summary:
        "Your mind's eye runs clear, colourful, and detailed, and images come to you easily. You likely daydream in rich pictures and find visualizing genuinely useful. Your imagery sits above average, a real asset for imagination, memory, and creative work.",
      longDescription:
        "When you picture a country scene or a beach, it arrives readily and in colour: the shape of the trees, the light on the water, the details filling themselves in without much effort. Your visual imagination is a strong, ready tool, above where most people sit. You probably think in pictures a fair amount, replay memories as scenes, and find it easy to imagine how a room, an outfit, or a plan would look before it exists. That's a real advantage for creative work, design, navigation, and any kind of vivid recall. You're not quite at the very top end, where imagery can feel indistinguishable from real seeing and occasionally hard to switch off, so you tend to get the upside of rich imagery without it overwhelming you. It's worth appreciating what a clear mind's eye lets you do, since not everyone has one, and putting it to deliberate use in the things you care about.",
      strengths: [
        "A vivid, easily summoned visual imagination that fuels creativity and design",
        "You can mentally rehearse and preview things, from routes to rooms to plans, before they're real",
        "Rich, picture-based memory that makes scenes and experiences easy to relive",
      ],
      growth: [
        "Put it to work on purpose in creative, spatial, or planning tasks where picturing helps",
        "If a vivid worry or memory takes hold, the same skill can gently redirect it toward a calmer image",
        "Remember others may not picture what you describe, so back up vivid mental images with plain words",
      ],
    },
    hyperphantasia: {
      name: "Mind's Eye Wide Open",
      tagline: "Your imagery is as vivid as real seeing",
      summary:
        "Your mental images are about as vivid as real sight, clear and immersive enough to feel almost like the real thing. This is hyperphantasia, the top of the spectrum, shared by roughly one in thirty people. It's a gift, and one worth understanding.",
      longDescription:
        "When you picture something, it can be so vivid it's almost like seeing it: full colour, detail, depth, sometimes movement, occasionally so real it's briefly hard to tell the image from perception. This is hyperphantasia, the far vivid end of the spectrum, and only a small share of people experience imagery this strong. It tends to come with a rich imaginative life and shows up often in people drawn to art, design, writing, and other creative work, where being able to conjure and hold a whole scene is a genuine gift. It has a flip side worth knowing about: when imagery this strong turns to something upsetting, the picture can be just as vivid and just as hard to switch off, so distressing memories or worries may play out in intense detail. The skill itself is neutral and powerful. The most is made of it by aiming it on purpose, at what you want to create or think through, and by learning to steer it gently when it lands somewhere you'd rather it didn't.",
      strengths: [
        "Exceptionally vivid, immersive imagery that's a real engine for creative and artistic work",
        "You can build and hold whole scenes in rich detail, a gift for design, storytelling, and memory",
        "Deep sensory recall that lets you relive experiences almost as if they were happening",
      ],
      growth: [
        "Aim this deliberately at what you want to make or figure out, where vivid imagery is a superpower",
        "Learn a way to steer or soften an image when it turns to something distressing and won't let go",
        "When intrusive vivid pictures weigh on you, grounding techniques help, and it's worth support if they persist",
      ],
    },
  },
  questionHelpers: {
    vviq1:
      "Think of some relative or friend whom you frequently see but who is not with you at present, and consider carefully the picture that comes before your mind's eye.",
    vviq5:
      "Think of the rising sun, and consider carefully the picture that comes before your mind's eye.",
    vviq9:
      "Think of the front of a shop which you often go to, and consider the picture that comes before your mind's eye.",
    vviq13:
      "Think of a country scene which involves trees, mountains and a lake, and consider the picture that comes before your mind's eye.",
    vviq17:
      "Think of being driven in a fast-moving car by a relative or friend along a major highway, and consider the picture that comes into your mind's eye.",
    vviq21:
      "Think of the beach by the ocean on a warm summer's day, and consider the picture that comes before your mind's eye.",
    vviq25:
      "Think of a railway station, and consider the picture that comes before your mind's eye.",
    vviq29:
      "Finally, think of a garden with lawns, bushes, flowers and shrubs, and consider the picture that comes before your mind's eye.",
  },
  questions: {
    vviq1: "The exact contour of face, head, shoulders and body.",
    vviq2: "Characteristic poses of head, attitudes of body etc.",
    vviq3: "The precise carriage, length of step, etc. in walking.",
    vviq4: "The different colours worn in some familiar clothes.",
    vviq5: "The sun is rising above the horizon into a hazy sky.",
    vviq6: "The sky clears and surrounds the sun with blueness.",
    vviq7: "Clouds. A storm blows up, with flashes of lightning.",
    vviq8: "A rainbow appears.",
    vviq9: "The overall appearance of the shop from the opposite side of the road.",
    vviq10:
      "A window display including colours, shape and details of individual items for sale.",
    vviq11: "You are near the entrance. The colour, shape and details of the door.",
    vviq12:
      "You enter the shop and go to the counter. The counter assistant serves you. Money changes hands.",
    vviq13: "The contours of the landscape.",
    vviq14: "The colour and shape of the trees.",
    vviq15: "The colour and shape of the lake.",
    vviq16: "A strong wind blows on the tree and on the lake causing waves.",
    vviq17:
      "You observe the heavy traffic travelling at maximum speed around your car. The overall appearance of vehicles, their colours, sizes and shapes.",
    vviq18:
      "Your car accelerates to overtake the traffic directly in front of you. You see an urgent expression on the face of the driver and the people in the other vehicles as you pass.",
    vviq19:
      "A large truck is flashing its headlight directly behind. Your car quickly moves over to let the truck pass. The driver signals with a friendly wave.",
    vviq20:
      "You see a broken-down vehicle beside the road. Its lights are flashing. The driver is looking concerned and she is using a mobile phone.",
    vviq21: "The overall appearance and colour of the water, surf, and sky.",
    vviq22:
      "Bathers are swimming and splashing about in the water. Some are playing with a brightly coloured beach ball.",
    vviq23:
      "An ocean liner crosses the horizon. It leaves a trail of smoke in the blue sky.",
    vviq24:
      "A beautiful air balloon appears with four people aboard. The balloon drifts past you, almost directly overhead. The passengers wave and smile. You wave and smile back at them.",
    vviq25:
      "The overall appearance of the station viewed from in front of the main entrance.",
    vviq26:
      "You walk into the station. The colour, shape and details of the entrance hall.",
    vviq27:
      "You approach the ticket office, go to a vacant counter and purchase your ticket.",
    vviq28:
      "You walk to the platform and observe other passengers and the railway lines. A train arrives. You climb aboard.",
    vviq29: "The overall appearance and design of the garden.",
    vviq30: "The colour and shape of the bushes and shrubs.",
    vviq31: "The colour and appearance of the flowers.",
    vviq32: "Some birds fly down onto the lawn and start pecking for food.",
  },
}
