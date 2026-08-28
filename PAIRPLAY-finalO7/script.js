// ========================================
// MOOD DATA
// Add, remove or edit game moods here.
// Each mood contains its own cards and theme color.
// ========================================
const moods = {
  sweet: {
    title: "Sweet",
    icon: "💕",
    desc: "Cute questions, little compliments and easy laughs.",
    intensity: "★☆☆☆☆",
    color: "#f7d7e2",
    questions: [
    ]
  },
  romantic: {
    title: "Romantic",
    icon: "❤️",
    desc: "The butterflies, the memories and the reasons you chose each other.",
    intensity: "★★☆☆☆",
    color: "#f1c8da",
    questions: [
    
    ]
  },
  TruthandDare: {
    title: "Truth & Dare",
    icon: "🧠",
    desc: "Confessions you've been sitting on and dares you won't say no to.",
    intensity: "★★★☆☆",
    color: "#dcd3f1",
    questions: [
    ]
  },
 //"Teasing, tension, and the kind of energy that doesn't stay in the room.",

   flirtyii: {
    title: "Flirty",
    icon: "🔥",
    desc: "Playful teasing, confidence and challenges that turn up the energy.",
    intensity: "★★★★☆",
    color: "#f4c2ca",
    questions: [
  
    ]
  },
  spicy: {
    title: "Spicy 18+",
    icon: "🌶️",
    desc: "For consenting adults who want a bolder, more intimate date night.",
    intensity: "★★★★★",
    color: "#e7b9bf",
    questions: [
      
    ]
  },
  playful: {
    title: "How Well Do You Know Me? 🧠",
    icon: "😜",
    desc: "Light teasing, silly prompts and easy dares for a playful evening.",
    intensity: "★★☆☆☆",
    color: "#ffd1e6",
    questions: [
    
    ]
  },
  cozy: {
    title: "Fantasy",
    icon: "🕯️",
    desc: "Slow, warm prompts for comfortable closeness and easy intimacy.",
    intensity: "★★☆☆☆",
    color: "#efe0de",
    questions: [
    
    ]
  },
  intimate: {
    title: "Intimate",
    icon: "🌙",
    desc: "Gentle, private prompts to deepen emotional closeness (18+ optional).",
    intensity: "★★★☆☆",
    color: "#f5d7e0",
    questions: [
      
    ]
  },
   DarkDesire : {
    title: "Dark Desire ",
    icon: "🌙",
    desc: "Turn up the intensity with private prompts for deeper emotional closeness (18+ optional).",
    intensity: "★★★☆☆",
    color: "#f5d7e0",
    questions: [
      
    ]
  },
   DreamsFuture :{
     title: "Dreams & Future",
    icon: "🌙",
    desc: "The life you're building together, before it's built.",
    intensity: "★★★☆☆",
    color: "#f5d7e0",
    questions: [
      
    ]
   },
};

// Separate 25-card and 50-card prompt pools so each deck length can be edited independently.
const moodQuestionSets = {
  sweet: {
    
    10: [
    ["ASK", "What nickname would you give us, right now, off the top of your head?"],
    ["DO", "Hold hands for twenty seconds. No talking, no phones — just this."],
    ["SAY", "Tell them one small thing about today that they made better."],
    ["REMEMBER", "Describe the exact moment you knew you liked them."],
    ["ASK", "If tonight had a soundtrack, what's the first song on it?"],
    ["DO", "Look at each other and try not to smile for fifteen seconds. Loser picks dessert."],
    ["SAY", "Say the compliment you almost gave them last week but didn't."],
    ["REMEMBER", "What's the smallest detail from your first date you still remember?"],
    ["ASK", "What's your idea of a perfect lazy Sunday with me in it?"],
    ["DO", "Trade one thank-you for something the other doesn't usually get thanked for."],
  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Tone: more personal, a little flirtier, still light on its feet.
  // Includes the Quick Date set, then goes further.
  // ---------------------------------------------------------------
  25: [
    ["ASK", "What nickname would you give us, right now, off the top of your head?"],
    ["DO", "Hold hands for twenty seconds. No talking, no phones — just this."],
    ["SAY", "Tell them one small thing about today that they made better."],
    ["REMEMBER", "Describe the exact moment you knew you liked them."],
    ["ASK", "If tonight had a soundtrack, what's the first song on it?"],
    ["DO", "Look at each other and try not to smile for fifteen seconds. Loser picks dessert."],
    ["SAY", "Say the compliment you almost gave them last week but didn't."],
    ["REMEMBER", "What's the smallest detail from your first date you still remember?"],
    ["ASK", "What's your idea of a perfect lazy Sunday with me in it?"],
    ["DO", "Trade one thank-you for something the other doesn't usually get thanked for."],
    ["ASK", "What's something about us that just feels easy?"],
    ["SAY", "Name one thing about them that makes you feel safe, and say it like you mean it."],
    ["REMEMBER", "Which date with me are you still a little proud of?"],
    ["ASK", "If we had one tiny tradition just for us, what would it be?"],
    ["DO", "Take turns finishing the sentence 'I like that you...' three times each."],
    ["ASK", "What's one small thing I could do this week that would make your life easier?"],
    ["SAY", "Describe, out loud, exactly how it feels when we're together."],
    ["REMEMBER", "What's the most ridiculous thing you've ever caught me doing?"],
    ["DO", "Hold their gaze for ten seconds, then tell them what you noticed."],
    ["ASK", "What would your ideal low-key night in with me actually look like?"],
    ["SAY", "Give one compliment you think I deserve but don't hear enough."],
    ["REMEMBER", "What's a moment with me you replay when you're having a rough day?"],
    ["ASK", "What's something about us as a pair that you'd call adorable?"],
    ["DO", "Ten-second forehead kiss. Then each say one word for how it felt."],
    ["SAY", "Tell them the thing about their laugh that gets you every time."],
  ],
 
  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Designed as an arc, not a list:
  //   1–10   playful      (low stakes, warm-up)
  //   11–20  curious       (getting into how each other thinks)
  //   21–30  cute          (small affectionate specifics)
  //   31–38  flirty        (charged but still Sweet-tier)
  //   39–45  personal      (real vulnerability, still gentle)
  //   46–48  affectionate  (direct, unguarded)
  //   49–50  ending        (reflection on the night itself)
  // ---------------------------------------------------------------
  50: [
    // PLAYFUL
    ["ASK", "What nickname would you give us, right now, off the top of your head?"],
    ["DO", "Hold hands for twenty seconds. No talking, no phones — just this."],
    ["SAY", "Tell them one small thing about today that they made better."],
    ["REMEMBER", "Describe the exact moment you knew you liked them."],
    ["ASK", "If tonight had a soundtrack, what's the first song on it?"],
    ["DO", "Look at each other and try not to smile for fifteen seconds. Loser picks dessert."],
    ["SAY", "Say the compliment you almost gave them last week but didn't."],
    ["REMEMBER", "What's the smallest detail from your first date you still remember?"],
    ["ASK", "What's your idea of a perfect lazy Sunday with me in it?"],
    ["DO", "Trade one thank-you for something the other doesn't usually get thanked for."],
 
    // CURIOUS
    ["ASK", "What's something about us that just feels easy?"],
    ["REMEMBER", "Which date with me are you still a little proud of?"],
    ["ASK", "If we had one tiny tradition just for us, what would it be?"],
    ["DO", "Take turns finishing the sentence 'I like that you...' three times each."],
    ["ASK", "What's one small thing I could do this week that would make your life easier?"],
    ["REMEMBER", "What's the most ridiculous thing you've ever caught me doing?"],
    ["ASK", "What would your ideal low-key night in with me actually look like?"],
    ["DO", "Hold their gaze for ten seconds, then tell them what you noticed."],
    ["ASK", "What's something about the way we argue or make up that you secretly appreciate?"],
    ["REMEMBER", "What's a normal, unremarkable moment with me that somehow stuck with you?"],
 
    // CUTE
    ["SAY", "Give one compliment you think I deserve but don't hear enough."],
    ["ASK", "What's something about us as a pair that you'd call adorable?"],
    ["DO", "Ten-second forehead kiss. Then each say one word for how it felt."],
    ["SAY", "Tell them the thing about their laugh that gets you every time."],
    ["REMEMBER", "What's the cutest thing I've done without realizing it?"],
    ["ASK", "If our relationship had a mascot, what would it be and why?"],
    ["DO", "Do your most exaggerated 'we're a couple' pose and hold it for five seconds."],
    ["SAY", "Name one habit of mine you didn't expect to fall for, but did."],
    ["ASK", "What's a tiny surprise that would still feel very 'us'?"],
    ["REMEMBER", "What's the first thing you told a friend about me after we met?"],
 
    // FLIRTY
    ["SAY", "Tell them, without hedging, one thing you find attractive about them tonight."],
    ["DO", "Trace one word on their palm and have them guess it."],
    ["ASK", "What's a small thing I do that you find more charming than you'd admit?"],
    ["SAY", "Describe the first time you remember being genuinely drawn to them physically."],
    ["DO", "Whisper one compliment instead of saying it out loud."],
    ["ASK", "What's a version of me — a mood, a moment — that you're especially fond of?"],
    ["SAY", "Tell them one thing about tonight, specifically, that you're enjoying."],
    ["DO", "Hold their hand and trace slow circles on it while they talk about their day."],
 
    // PERSONAL
    ["ASK", "What's something I do that makes you feel like you can be fully yourself?"],
    ["REMEMBER", "When did you feel most proud to be with me, even quietly?"],
    ["SAY", "Tell them one way they've made you a better version of yourself."],
    ["ASK", "What's a fear about relationships you've felt less afraid of since being with me?"],
    ["REMEMBER", "What's a moment that felt surprisingly intimate, even though nothing 'happened'?"],
    ["ASK", "What's something you needed from someone before, that you now get from me without asking?"],
    ["SAY", "Say one thing about how I handle hard days that you've never told me."],
 
    // AFFECTIONATE
    ["SAY", "Tell them, plainly, what being loved by them feels like."],
    ["DO", "Say each other's names, then just look at one another for five seconds before continuing."],
    ["SAY", "Name one trait in me that makes you feel like you're home."],
 
    // ENDING
    ["REMEMBER", "Out of everything from tonight, what's the one moment you'll remember tomorrow?"],
    ["DO", "Hold hands, take a breath together, and just sit in it for a few seconds before you close the app."],
  ],
  },
  romantic: {
  // ROMANTIC MODE — ★★☆☆☆
// Format unchanged: [LABEL, "prompt text"]
// Labels: ASK (conversation) · SAY (spoken aloud, no question mark) ·
//         REMEMBER (storytelling) · DO (shared quiet moment) ·
//         CHALLENGE (interactive, a little bolder than DO)


// render as: `${LABEL_ICONS[label]} ${label}`  →  "💭 ASK"



  // ---------------------------------------------------------------
  // 10 — QUICK DATE
  // Tone: butterflies, first-spark energy, still easy to answer.
  // ---------------------------------------------------------------
  10: [
    ["ASK ", "What was the exact moment you realized this was becoming something real?"],
    ["SAY", "Tell them the first thing you found attractive about them, before you knew them at all."],
    ["REMEMBER", "What's the earliest memory you have of missing me when I wasn't around?"],
    ["DO", "Look at each other for ten seconds and let it be a little too long, on purpose."],
    ["ASK", "What's one reason you'd choose me again, out of everyone?"],
    ["CHALLENGE", "Recreate your first hello — same tone, same energy — right now."],
    ["SAY", "Tell them what your heart does, even now, when they walk into a room."],
    ["REMEMBER", "What's a small detail from early on you never told me you noticed?"],
    ["ASK", "When do you feel the most in love with me — what's usually happening?"],
    ["DO", "Take their hand, close your eyes, and just breathe together for five seconds."],
  ],

  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Tone: deeper butterflies + real memory-mining, a little bolder.
  // Includes the Quick Date set, then goes further.
  // ---------------------------------------------------------------
  25: [
    ["ASK", "What was the exact moment you realized this was becoming something real?"],
    ["SAY", "Tell them the first thing you found attractive about them, before you knew them at all."],
    ["REMEMBER", "What's the earliest memory you have of missing me when I wasn't around?"],
    ["DO", "Look at each other for ten seconds and let it be a little too long, on purpose."],
    ["ASK", "What's one reason you'd choose me again, out of everyone?"],
    ["CHALLENGE", "Recreate your first hello — same tone, same energy — right now."],
    ["SAY", "Tell them what your heart does, even now, when they walk into a room."],
    ["REMEMBER", "What's a small detail from early on you never told me you noticed?"],
    ["ASK", "When do you feel the most in love with me — what's usually happening?"],
    ["DO", "Take their hand, close your eyes, and just breathe together for five seconds."],
    ["ASK", "What's a version of our future together that you think about but rarely say out loud?"],
    ["REMEMBER", "What's the first night you remember not wanting to leave?"],
    ["SAY", "Tell them one thing about loving them that still surprises you."],
    ["CHALLENGE", "Slow dance to nothing — no music — for fifteen seconds."],
    ["ASK", "What's something about falling for me that felt like a risk at the time?"],
    ["REMEMBER", "What's a moment you first thought 'I could really love this person'?"],
    ["SAY", "Describe, honestly, what it feels like when I look at you a certain way."],
    ["ASK", "What's a fear you had about love before me that you don't carry anymore?"],
    ["DO", "Trace 'I love you' on their back and have them guess it without speaking."],
    ["REMEMBER", "What's the most romantic thing that's happened between us that no one else knows about?"],
    ["SAY", "Tell them what your future looks like with them still in it."],
    ["ASK", "What's a quiet, ordinary moment with me you'd replay if you could?"],
    ["CHALLENGE", "Whisper the story of how you fell for them, in under thirty seconds."],
    ["SAY", "Say the thing you feel about them that you don't say often enough out loud."],
    ["DO", "Hold each other and don't speak for ten seconds — let the silence say it."],
  ],

  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Designed as an arc:
  //   1–10   butterflies    (first-spark energy, low pressure)
  //   11–20  memory          (mining the relationship's early story)
  //   21–30  affection        (present-tense, why-I-love-you)
  //   31–38  bold             (physical/interactive, still Romantic-tier)
  //   39–45  vulnerable       (fears, risks, real honesty)
  //   46–48  future            (where this is headed)
  //   49–50  ending            (reflection on the night itself)
  // ---------------------------------------------------------------
  50: [
    // BUTTERFLIES
    ["ASK", "What was the exact moment you realized this was becoming something real?"],
    ["SAY", "Tell them the first thing you found attractive about them, before you knew them at all."],
    ["REMEMBER", "What's the earliest memory you have of missing me when I wasn't around?"],
    ["DO", "Look at each other for ten seconds and let it be a little too long, on purpose."],
    ["ASK", "What's one reason you'd choose me again, out of everyone?"],
    ["CHALLENGE", "Recreate your first hello — same tone, same energy — right now."],
    ["SAY", "Tell them what your heart does, even now, when they walk into a room."],
    ["REMEMBER", "What's a small detail from early on you never told me you noticed?"],
    ["ASK", "When do you feel the most in love with me — what's usually happening?"],
    ["DO", "Take their hand, close your eyes, and just breathe together for five seconds."],

    // MEMORY
    ["ASK", "What's a version of our future together that you think about but rarely say out loud?"],
    ["REMEMBER", "What's the first night you remember not wanting to leave?"],
    ["ASK", "What's something about falling for me that felt like a risk at the time?"],
    ["REMEMBER", "What's a moment you first thought 'I could really love this person'?"],
    ["ASK", "What almost stopped you from letting this happen, and why didn't it?"],
    ["REMEMBER", "What's the most romantic thing that's happened between us that no one else knows about?"],
    ["CHALLENGE", "Tell the story of your favorite date with me using only three sentences."],
    ["REMEMBER", "What's a fight or hard moment that somehow brought us closer instead of apart?"],
    ["ASK", "Which one of my flaws did you decide you could love anyway — and when?"],
    ["REMEMBER", "What's the moment you knew you were done pretending you weren't serious about this?"],

    // AFFECTION
    ["SAY", "Tell them one thing about loving them that still surprises you."],
    ["SAY", "Describe, honestly, what it feels like when I look at you a certain way."],
    ["ASK", "What's a quiet, ordinary moment with me you'd replay if you could?"],
    ["SAY", "Say the thing you feel about them that you don't say often enough out loud."],
    ["ASK", "What's something I do without realizing it that makes you fall for me again?"],
    ["SAY", "Tell them exactly what makes their love feel different from anyone else's."],
    ["REMEMBER", "What's a time I showed up for you in a way you didn't expect?"],
    ["ASK", "What does being chosen by me feel like, on a good day?"],
    ["SAY", "Name the one thing about their heart that you trust completely."],
    ["ASK", "What's a love language you didn't know you needed until I gave it to you?"],

    // BOLD
    ["CHALLENGE", "Slow dance to nothing — no music — for fifteen seconds."],
    ["DO", "Trace 'I love you' on their back and have them guess it without speaking."],
    ["CHALLENGE", "Whisper the story of how you fell for them, in under thirty seconds."],
    ["DO", "Hold each other and don't speak for ten seconds — let the silence say it."],
    ["CHALLENGE", "Give them a slow, ten-second kiss on the forehead, then tell them what you felt."],
    ["DO", "Sit knee to knee, hold both their hands, and just look at each other for fifteen seconds."],
    ["CHALLENGE", "Say 'I choose you' out loud, then explain in one sentence why it's still true."],
    ["DO", "Trade one real compliment each, eye contact only, no looking away."],

    // VULNERABLE
    ["ASK", "What's a fear you had about love before me that you don't carry anymore?"],
    ["SAY", "Tell them one way you feel safer loving them than you expected to."],
    ["ASK", "What's something about being loved by me that took you time to trust?"],
    ["REMEMBER", "What's a moment you let your guard down with me for the first time?"],
    ["SAY", "Say one thing about your heart that only they get to know."],
    ["ASK", "What's the bravest thing love has ever asked of you, with me?"],
    ["SAY", "Tell them what it means that they stayed, even on the hard days."],

    // FUTURE
    ["ASK", "What's one thing about growing old with me that excites you?"],
    ["SAY", "Tell them what forever sounds like when you picture it with them."],
    ["ASK", "What's a tradition you hope we're still doing years from now?"],

    // ENDING
    ["REMEMBER", "Out of everything from tonight, what's the one moment you'll carry with you?"],
    ["DO", "Hold each other, say 'I love you' once more, and just sit in it before you close the app."],
  ],
} ,

  TruthandDare: {
  10: [
     ["ASK💭", "What's a small lie you've told me that you're finally ready to correct?"],
    ["DO✦", "Do your best impression of me for ten seconds."],
    ["SAY💗", "Confess one thing you find irresistible about them that you rarely say."],
    ["CHALLENGE🎯", "Let them pick your next song and you have to dance to it, seated, for ten seconds."],
    ["ASK💭", "What's something you pretended to like early on just to impress me?"],
    ["DO✦", "Send a text to a friend right now saying only 'I'm having a great time.'"],
    ["REMEMBER✨", "What's the most embarrassing thing that's happened on one of our dates?"],
    ["CHALLENGE🎯", "Let them draw something on your arm with their finger — guess what it is."],
    ["ASK💭", "What's a habit of mine you find weirdly endearing but never mention?"],
    ["DO✦", "Give your best flirty one-liner, in character, like you're meeting me for the first time."],
    ["ASK💭", "What's a small lie you've told me that you're finally ready to correct?"],
    ["DO✦", "Do your best impression of me for ten seconds."],
    ["SAY💗", "Confess one thing you find irresistible about them that you rarely say."],
    ["CHALLENGE🎯", "Let them pick your next song and you have to dance to it, seated, for ten seconds."],
    ["ASK💭", "What's something you pretended to like early on just to impress me?"],
    ["DO✦", "Send a text to a friend right now saying only 'I'm having a great time.'"],
    ["REMEMBER✨", "What's the most embarrassing thing that's happened on one of our dates?"],
    ["CHALLENGE🎯", "Let them draw something on your arm with their finger — guess what it is."],
    ["ASK💭", "What's a habit of mine you find weirdly endearing but never mention?"],
    ["DO✦", "Give your best flirty one-liner, in character, like you're meeting me for the first time."],
  
  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Tone: bolder truths, a bit more daring dares, more personal.
  // Includes the Quick Date set, then goes further.
  // ---------------------------------------------------------------
  25: [
    ["ASK💭", "What's a small lie you've told me that you're finally ready to correct?"],
    ["DO✦", "Do your best impression of me for ten seconds."],
    ["SAY💗", "Confess one thing you find irresistible about them that you rarely say."],
    ["CHALLENGE🎯", "Let them pick your next song and you have to dance to it, seated, for ten seconds."],
    ["ASK💭", "What's something you pretended to like early on just to impress me?"],
    ["DO✦", "Send a text to a friend right now saying only 'I'm having a great time.'"],
    ["REMEMBER✨", "What's the most embarrassing thing that's happened on one of our dates?"],
    ["CHALLENGE🎯", "Let them draw something on your arm with their finger — guess what it is."],
    ["ASK💭", "What's a habit of mine you find weirdly endearing but never mention?"],
    ["DO✦", "Give your best flirty one-liner, in character, like you're meeting me for the first time."],
    ["ASK💭", "What's something you've never admitted you're a little jealous of?"],
    ["SAY💗", "Tell them the truth about what you thought the very first time you saw them."],
    ["CHALLENGE🎯", "Let them pick an outfit from your closet, describe it, no vetoes allowed."],
    ["ASK💭", "What's a moment you wanted to say 'I love you' before you actually did?"],
    ["DO✦", "Hold eye contact and describe them out loud like you're meeting them for the first time."],
    ["REMEMBER✨", "What's a secret you kept from me early on that you can finally tell me?"],
    ["CHALLENGE🎯", "Do your best slow-motion 'dramatic movie reunion' walk toward them."],
    ["ASK💭", "What's something about our relationship you'd never post online but wish you could?"],
    ["SAY💗", "Confess the most attractive thing you've ever seen me do without trying."],
    ["DO✦", "Let them give you a nickname right now, and answer to it for the rest of the game."],
    ["ASK💭", "What's a fear you've never said out loud about us?"],
    ["CHALLENGE🎯", "Recreate the face you made the first time you realized you liked me."],
    ["REMEMBER✨", "What's a moment you almost messed this up, and how close did it get?"],
    ["SAY💗", "Tell them one thing you think about when you can't sleep and they're not there."],
    ["DO✦", "Whisper the cheesiest pickup line you can think of, dead serious."],
  ],
 
  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Designed as an arc:
  //   1–10   cheeky        (easy truths, silly dares)
  //   11–20  playful-bold   (funnier dares, lighter confessions)
  //   21–30  honest         (real truths start surfacing)
  //   31–38  daring          (bigger dares, more performative)
  //   39–45  vulnerable      (truths with real weight)
  //   46–48  charged         (flirtier truths + dares, still tasteful)
  //   49–50  ending          (closing the game, not escalating it)
  // ---------------------------------------------------------------
  50: [
    // CHEEKY
    ["ASK💭", "What's a small lie you've told me that you're finally ready to correct?"],
    ["DO✦", "Do your best impression of me for ten seconds."],
    ["SAY💗", "Confess one thing you find irresistible about them that you rarely say."],
    ["CHALLENGE🎯", "Let them pick your next song and you have to dance to it, seated, for ten seconds."],
    ["ASK💭", "What's something you pretended to like early on just to impress me?"],
    ["DO✦", "Send a text to a friend right now saying only 'I'm having a great time.'"],
    ["REMEMBER✨", "What's the most embarrassing thing that's happened on one of our dates?"],
    ["CHALLENGE🎯", "Let them draw something on your arm with their finger — guess what it is."],
    ["ASK💭", "What's a habit of mine you find weirdly endearing but never mention?"],
    ["DO✦", "Give your best flirty one-liner, in character, like you're meeting me for the first time."],
 
    // PLAYFUL-BOLD
    ["ASK💭", "What's something you've never admitted you're a little jealous of?"],
    ["CHALLENGE🎯", "Let them pick an outfit from your closet, describe it, no vetoes allowed."],
    ["DO✦", "Hold eye contact and describe them out loud like you're meeting them for the first time."],
    ["CHALLENGE🎯", "Do your best slow-motion 'dramatic movie reunion' walk toward them."],
    ["ASK💭", "What's something about our relationship you'd never post online but wish you could?"],
    ["DO✦", "Let them give you a nickname right now, and answer to it for the rest of the game."],
    ["CHALLENGE🎯", "Recreate the face you made the first time you realized you liked me."],
    ["SAY💗", "Confess the most attractive thing you've ever seen me do without trying."],
    ["DO✦", "Whisper the cheesiest pickup line you can think of, dead serious."],
    ["ASK💭", "What's a small thing you do specifically to get my attention?"],
 
    // HONEST
    ["SAY💗", "Tell them the truth about what you thought the very first time you saw them."],
    ["ASK💭", "What's a moment you wanted to say 'I love you' before you actually did?"],
    ["REMEMBER✨", "What's a secret you kept from me early on that you can finally tell me?"],
    ["ASK💭", "What's a fear you've never said out loud about us?"],
    ["REMEMBER✨", "What's a moment you almost messed this up, and how close did it get?"],
    ["SAY💗", "Tell them one thing you think about when you can't sleep and they're not there."],
    ["ASK💭", "What's something you've changed your mind about since being with me?"],
    ["SAY💗", "Confess a moment you were more nervous about us than you let on."],
    ["ASK💭", "What's a compliment about you that you don't fully believe yet, but I do?"],
    ["REMEMBER✨", "What's a time I said something that stuck with you for way longer than I realized?"],
 
    // DARING
    ["CHALLENGE🎯", "Give them a slow dance with no music, your choice how close."],
    ["DO✦", "Let them ask you anything for the next thirty seconds — no passing."],
    ["CHALLENGE🎯", "Act out how you'd propose, right now, exaggerated and dramatic."],
    ["DO✦", "Trace three words on their skin and have them guess all three."],
    ["CHALLENGE🎯", "Give your best 'seduction voice' reading of tomorrow's weather forecast."],
    ["DO✦", "Hold their face gently and just look at them for ten full seconds."],
    ["CHALLENGE🎯", "Whisper the most romantic thing you can think of directly in their ear."],
    ["DO✦", "Let them pick anywhere on your hand or arm for a slow kiss."],
 
    // VULNERABLE
    ["ASK💭", "What's the bravest thing you've done for this relationship that I never fully thanked you for?"],
    ["SAY💗", "Tell them one insecurity of yours that loving them has quieted."],
    ["ASK💭", "What's something about being loved by me you had to learn to accept?"],
    ["REMEMBER✨", "What's the closest you've come to telling me something and chickening out?"],
    ["SAY💗", "Say the truest thing you know about how much they mean to you."],
    ["ASK💭", "What's a version of the future with me that scares you a little, in a good way?"],
    ["SAY💗", "Confess the thing you're most afraid of losing if you lost me."],
 
    // CHARGED
    ["CHALLENGE🎯", "Give them one slow compliment while maintaining eye contact the entire time."],
    ["DO✦", "Let your knees touch, lean in close, and just breathe together for five seconds."],
    ["SAY💗", "Tell them, plainly and without joking, what you find most attractive about them right now."],
 
    // ENDING
    ["REMEMBER✨", "Out of every truth and dare tonight, which one surprised you most?"],
    ["DO✦", "Hold each other, say one word for how tonight felt, and close the game there."],
  ],

  },
  flirtyii: {
      10: [
    ["ASK💭", "What's the first thing you notice about me when I walk into a room?"],
    ["SAY💗", "Tell them, without hedging, what you find most attractive about them tonight."],
    ["DO✦", "Hold eye contact for ten seconds and don't look away first."],
    ["CHALLENGE🎯", "Whisper one thing you'd want me to do later, and nothing else."],
    ["ASK💭", "What's an outfit of mine you secretly hope I wear again soon?"],
    ["REMEMBER✨", "What's the moment you first felt real chemistry between us?"],
    ["DO✦", "Trace one word on their palm and let them guess what it means."],
    ["SAY💗", "Say the thing about their body language that pulls you in every time."],
    ["CHALLENGE🎯", "Bite your lip and hold their gaze for five seconds. No laughing."],
    ["ASK💭", "What's something you think about me when I'm not around?"],
  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Its own arc: tease → building heat → charged confession.
  // ---------------------------------------------------------------
  25: [
    ["ASK💭", "What's the last thing I did that you couldn't stop thinking about afterward?"],
    ["DO✦", "Run one finger slowly along their jawline, no words."],
    ["SAY💗", "Tell them exactly what your favorite part of tonight has been so far."],
    ["CHALLENGE🎯", "Describe, in detail, the outfit you'd want me in for the rest of the night."],
    ["ASK💭", "What's a small thing I do that you find more magnetic than you'd admit?"],
    ["REMEMBER✨", "What's the moment you first wanted to kiss me?"],
    ["DO✦", "Hold their hand and slowly trace circles on their palm while they talk."],
    ["SAY💗", "Confess one thing about the way I move that you've never told me."],
    ["CHALLENGE🎯", "Whisper the first thing you want to do the second this game ends."],
    ["ASK💭", "What's a version of me — a mood, a look — that gets to you every time?"],
    ["DO✦", "Kiss their neck once, slowly, then say nothing and wait for their reaction."],
    ["SAY💗", "Tell them what your heartbeat does when they get close to you."],
    ["ASK💭", "What's something you'd want me to whisper to you right now?"],
    ["CHALLENGE🎯", "Let them choose exactly where your next kiss lands."],
    ["REMEMBER✨", "What's the most charged moment we've shared that no one else knows about?"],
    ["DO✦", "Lean in close enough to feel their breath, and stay there for five seconds."],
    ["SAY💗", "Describe, honestly, what tension between us feels like right now."],
    ["ASK💭", "What's one thing about tonight you're hoping doesn't end when this game does?"],
    ["CHALLENGE🎯", "Give them a slow kiss on the collarbone, then say one word for how it felt."],
    ["ASK💭", "What's the boldest thing you've ever wanted to say to me but didn't?"],
    ["DO✦", "Hold their face and kiss them slowly, no rushing it."],
    ["SAY💗", "Tell them, plainly, what you want from the rest of tonight."],
    ["CHALLENGE🎯", "Let them pick one place to kiss you — anywhere above the collar."],
    ["REMEMBER✨", "What's a night with me you still think about when you want to feel something?"],
    ["SAY💗", "Say the thing you've been thinking since this card game started."],
  ],
 
  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Full arc: tease → chemistry → confession → bold → intimate → close (fade to private).
  // ---------------------------------------------------------------
  50: [
    // TEASE
    ["ASK💭", "What's the first thing you notice about me when I walk into a room?"],
    ["SAY💗", "Tell them, without hedging, what you find most attractive about them tonight."],
    ["DO✦", "Hold eye contact for ten seconds and don't look away first."],
    ["CHALLENGE🎯", "Whisper one thing you'd want me to do later, and nothing else."],
    ["ASK💭", "What's an outfit of mine you secretly hope I wear again soon?"],
    ["DO✦", "Trace one word on their palm and let them guess what it means."],
    ["SAY💗", "Say the thing about their body language that pulls you in every time."],
    ["CHALLENGE🎯", "Bite your lip and hold their gaze for five seconds. No laughing."],
    ["ASK💭", "What's something you think about me when I'm not around?"],
    ["REMEMBER✨", "What's the moment you first felt real chemistry between us?"],
 
    // CHEMISTRY
    ["ASK💭", "What's the last thing I did that you couldn't stop thinking about afterward?"],
    ["DO✦", "Run one finger slowly along their jawline, no words."],
    ["SAY💗", "Tell them exactly what your favorite part of tonight has been so far."],
    ["CHALLENGE🎯", "Describe, in detail, the outfit you'd want me in for the rest of the night."],
    ["ASK💭", "What's a small thing I do that you find more magnetic than you'd admit?"],
    ["REMEMBER✨", "What's the moment you first wanted to kiss me?"],
    ["DO✦", "Hold their hand and slowly trace circles on their palm while they talk."],
    ["SAY💗", "Confess one thing about the way I move that you've never told me."],
    ["ASK💭", "What's a version of me — a mood, a look — that gets to you every time?"],
    ["CHALLENGE🎯", "Whisper the first thing you want to do the second this game ends."],
 
    // CONFESSION
    ["DO✦", "Kiss their neck once, slowly, then say nothing and wait for their reaction."],
    ["SAY💗", "Tell them what your heartbeat does when they get close to you."],
    ["ASK💭", "What's something you'd want me to whisper to you right now?"],
    ["REMEMBER✨", "What's the most charged moment we've shared that no one else knows about?"],
    ["SAY💗", "Describe, honestly, what tension between us feels like right now."],
    ["ASK💭", "What's the boldest thing you've ever wanted to say to me but didn't?"],
    ["REMEMBER✨", "What's a night with me you still think about when you want to feel something?"],
    ["SAY💗", "Say the thing you've been thinking since this game started."],
    ["ASK💭", "What's one thing about tonight you're hoping doesn't end when this game does?"],
    ["DO✦", "Lean in close enough to feel their breath, and stay there for five seconds."],
 
    // BOLD
    ["CHALLENGE🎯", "Let them choose exactly where your next kiss lands."],
    ["DO✦", "Hold their face and kiss them slowly, no rushing it."],
    ["CHALLENGE🎯", "Give them a slow kiss on the collarbone, then say one word for how it felt."],
    ["SAY💗", "Tell them, plainly, what you want from the rest of tonight."],
    ["CHALLENGE🎯", "Let them pick one place to kiss you — anywhere above the collar."],
    ["DO✦", "Pull them close and let your foreheads touch, breathing together, no words."],
    ["CHALLENGE🎯", "Whisper exactly what you're thinking right now, unfiltered."],
    ["DO✦", "Let your hand rest on their waist and hold it there for ten slow seconds."],
 
    // INTIMATE
    ["ASK💭", "What's something you want from me tonight that you haven't said yet?"],
    ["SAY💗", "Tell them one thing your body has been telling you all night."],
    ["DO✦", "Kiss them somewhere unexpected and let them react before you speak."],
    ["ASK💭", "What's one boundary you'd want us to talk about before this goes further?"],
    ["SAY💗", "Say the thing you want them to know before the night goes any further."],
    ["DO✦", "Hold each other close, still, for ten seconds — let the anticipation build."],
    ["CHALLENGE🎯", "Tell them exactly how you want the rest of tonight to go, out loud."],
 
    // CLOSE (fade to private)
    ["ASK💭", "What's the last thing you want said between us before we put the phones away?"],
    ["SAY💗", "Tell them one thing you're looking forward to about the rest of tonight."],
    ["DO✦", "Kiss them slowly, then set the game down — you two can take it from here."],
  ],
  },
  spicy: {
   10: [
  ["ASK💭", "What’s the first place on my body your eyes (or hands) go when no one’s watching?"],
  ["SAY💗", "Tell me, without softening it, what you most want to do to me tonight."],
  ["DO✦", "Pull me in by the hips and hold me against you for ten full seconds."],
  ["CHALLENGE🎯", "Whisper the dirtiest thing you’ve thought about me in the last hour — nothing else."],
  ["ASK💭", "What piece of clothing of mine do you most want to take off first?"],
  ["REMEMBER✨", "When did you first imagine us crossing the line from flirty to something more?"],
  ["DO✦", "Trace a slow path from my collarbone down toward my chest with one finger, then stop."],
  ["SAY💗", "Say out loud the thing about my body that makes you lose focus."],
  ["CHALLENGE🎯", "Bite your lip, lock eyes, and tell me one thing you want me to do with my mouth."],
  ["ASK💭", "What’s something you’ve wanted to try with me that still feels a little risky?"],
],

// ---------------------------------------------------------------
// 25 — DATE NIGHT (SPICY)
// Arc: tease → building heat → charged confession → physical.
// ---------------------------------------------------------------
25: [
  ["ASK💭", "What’s the last thing I did that left you thinking about me naked?"],
  ["DO✦", "Run one finger slowly along my jaw, down my neck, and stop just above my chest."],
  ["SAY💗", "Tell me exactly what part of tonight has made you the most turned on so far."],
  ["CHALLENGE🎯", "Describe, in detail, how you want me dressed — or undressed — for the rest of the night."],
  ["ASK💭", "What’s a small thing I do that makes you want to pull me somewhere private?"],
  ["REMEMBER✨", "When did you first want more than a kiss from me?"],
  ["DO✦", "Take my hand and guide it slowly under your shirt (or mine) while we keep talking."],
  ["SAY💗", "Confess one thing about the way I move that you’ve never said out loud."],
  ["CHALLENGE🎯", "Whisper the first thing you want to do the second this game ends — be specific."],
  ["ASK💭", "What’s a version of me (look, mood, outfit) that makes you want to skip the talking?"],
  ["DO✦", "Kiss my neck once, slowly, then stay close enough that I can feel your breath."],
  ["SAY💗", "Tell me what your body does when I get this close."],
  ["ASK💭", "What do you want me to whisper against your skin right now?"],
  ["CHALLENGE🎯", "Let me choose exactly where the next kiss lands — anywhere above the waist."],
  ["REMEMBER✨", "What’s the most charged private moment we’ve shared that no one else knows?"],
  ["DO✦", "Lean in until our bodies are almost touching and hold still for five slow seconds."],
  ["SAY💗", "Describe, honestly, the tension between us right now — no filters."],
  ["ASK💭", "What’s one thing about tonight you’re hoping continues after the cards are put away?"],
  ["CHALLENGE🎯", "Give me a slow kiss on the collarbone, then say one raw word for how it felt."],
  ["ASK💭", "What’s the boldest thing you’ve ever wanted to say (or do) to me but held back?"],
  ["DO✦", "Hold my face and kiss me like you mean it — no rushing."],
  ["SAY💗", "Tell me, plainly, what you want from the rest of tonight."],
  ["CHALLENGE🎯", "Let me pick one place to kiss you — anywhere you allow above the waist."],
  ["REMEMBER✨", "What’s a night with me you still replay when you want to feel something intense?"],
  ["SAY💗", "Say the thing you’ve been thinking since this game started — uncensored."],
],

// ---------------------------------------------------------------
// 50 — LONG NIGHT (SPICY)
// Full arc: tease → chemistry → confession → bold → intimate → close (fade to private).
// ---------------------------------------------------------------
50: [
  // TEASE
  ["ASK💭", "What’s the first place on my body your attention goes when no one’s looking?"],
  ["SAY💗", "Tell me, without hedging, what you most want to do to me tonight."],
  ["DO✦", "Pull me close by the hips and hold me there for ten seconds."],
  ["CHALLENGE🎯", "Whisper one filthy thing you’ve thought about me today — nothing else."],
  ["ASK💭", "What piece of clothing of mine do you most want gone first?"],
  ["DO✦", "Trace one slow word on my palm, then let me guess what it means."],
  ["SAY💗", "Say the thing about my body language that makes you want more."],
  ["CHALLENGE🎯", "Bite your lip, hold my gaze, and tell me one thing you want my mouth to do."],
  ["ASK💭", "What’s something you think about me when you’re alone that you’d never say in public?"],
  ["REMEMBER✨", "When did you first feel the shift from attraction into wanting more?"],

  // CHEMISTRY
  ["ASK💭", "What’s the last thing I did that left you replaying it later?"],
  ["DO✦", "Run one finger slowly along my jawline, down my neck, and pause."],
  ["SAY💗", "Tell me exactly what part of tonight has made you the most turned on."],
  ["CHALLENGE🎯", "Describe in detail the outfit — or lack of one — you want me in for the rest of the night."],
  ["ASK💭", "What’s a small thing I do that hits harder than you’d normally admit?"],
  ["REMEMBER✨", "When did you first want to go further than kissing with me?"],
  ["DO✦", "Hold my hand and slowly guide it under fabric while we keep talking."],
  ["SAY💗", "Confess one thing about the way I move that you’ve never said out loud."],
  ["ASK💭", "What’s a look or mood of mine that makes you want to skip the conversation?"],
  ["CHALLENGE🎯", "Whisper the first thing you want the second this game ends — be specific."],

  // CONFESSION
  ["DO✦", "Kiss my neck once, slowly, then say nothing and wait for my reaction."],
  ["SAY💗", "Tell me what happens in your body when I get this close."],
  ["ASK💭", "What do you want me to whisper against your skin right now?"],
  ["REMEMBER✨", "What’s the most charged private moment we’ve shared that no one else knows?"],
  ["SAY💗", "Describe, honestly, the tension between us right now."],
  ["ASK💭", "What’s the boldest thing you’ve ever wanted to say or do to me but didn’t?"],
  ["REMEMBER✨", "What’s a night with me you still think about when you want to feel something intense?"],
  ["SAY💗", "Say the thing you’ve been thinking since this game started — no filters."],
  ["ASK💭", "What’s one thing about tonight you’re hoping doesn’t stop when the cards are put down?"],
  ["DO✦", "Lean in close enough that I can feel your breath and stay there for five seconds."],

  // BOLD
  ["CHALLENGE🎯", "Let me choose exactly where the next kiss lands — anywhere you allow."],
  ["DO✦", "Hold my face and kiss me slowly, like you mean to keep going."],
  ["CHALLENGE🎯", "Give me a slow kiss on the collarbone, then say one raw word for how it felt."],
  ["SAY💗", "Tell me, plainly, what you want from the rest of tonight."],
  ["CHALLENGE🎯", "Let me pick one place to kiss you — anywhere above the waist you allow."],
  ["DO✦", "Pull me close so our foreheads touch and just breathe together, no words."],
  ["CHALLENGE🎯", "Whisper exactly what you’re thinking right now — unfiltered."],
  ["DO✦", "Let your hand rest on my waist (or lower) and hold it there for ten slow seconds."],

  // INTIMATE
  ["ASK💭", "What’s something you want from me tonight that you haven’t said yet?"],
  ["SAY💗", "Tell me one thing your body has been signaling all night."],
  ["DO✦", "Kiss me somewhere unexpected and wait for my reaction before you speak."],
  ["ASK💭", "What’s one boundary or preference you’d want us to check in on before this goes further?"],
  ["SAY💗", "Say the thing you want me to know before the night goes any further."],
  ["DO✦", "Hold each other close and still for ten seconds — let the anticipation build."],
  ["CHALLENGE🎯", "Tell me exactly how you want the rest of tonight to go, out loud."],

  // CLOSE (fade to private)
  ["ASK💭", "What’s the last thing you want said between us before we put the phones (and cards) away?"],
  ["SAY💗", "Tell me one thing you’re looking forward to about the rest of tonight."],
  ["DO✦", "Kiss me slowly, then set the game down — we can take it from here."],
  ]
},
  playful: {
    10: [
    ["GUESS💭", "What's my go-to coffee or drink order?"],
    ["TRUE OR FALSE✨", "I've never broken a bone."],
    ["PICK🎯", "Would I rather stay in or go out on a free Saturday?"],
    ["NUMBER✦", "How many siblings do I have?"],
    ["GUESS💭", "What's my comfort food when I'm having a bad day?"],
    ["PICK🎯", "Am I a morning person or a night owl?"],
    ["TRUE OR FALSE✨", "I know how to swim."],
    ["NUMBER✦", "How many countries have I been to?"],
    ["GUESS💭", "What's the first thing I do when I get home?"],
    ["PICK🎯", "Would I rather get a massage or sleep in?"],
  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Deeper facts — preferences, small habits, a few surprises.
  // ---------------------------------------------------------------
  25: [
    ["GUESS💭", "What's a movie I could rewatch endlessly?"],
    ["TRUE OR FALSE✨", "I've cried during a commercial."],
    ["PICK🎯", "Would I rather win an argument or avoid one entirely?"],
    ["NUMBER✦", "How many years did I do a sport, instrument, or hobby as a kid?"],
    ["GUESS💭", "What's a food I claim to hate but would actually try again?"],
    ["PICK🎯", "Am I more likely to plan ahead or wing it?"],
    ["TRUE OR FALSE✨", "I've stalked an ex on social media in the last year."],
    ["NUMBER✦", "How many hours of sleep do I function best on?"],
    ["GUESS💭", "What's a small thing that instantly puts me in a bad mood?"],
    ["PICK🎯", "Would I rather be famous or invisible for a day?"],
    ["GUESS💭", "What's my actual biggest fear, not the joke answer?"],
    ["TRUE OR FALSE✨", "I've pretended to like a gift I actually didn't."],
    ["PICK🎯", "Do I hold grudges or let things go quickly?"],
    ["NUMBER✦", "How many close friends would I call at 2am?"],
    ["GUESS💭", "What's a compliment I secretly love hearing?"],
    ["PICK🎯", "Would I rather have more time or more money?"],
    ["TRUE OR FALSE✨", "I've never told a lie to get out of plans."],
    ["GUESS💭", "What's something I'm quietly insecure about?"],
    ["NUMBER✦", "How many times have I moved in my life?"],
    ["PICK🎯", "Am I more scared of failure or of being average?"],
    ["GUESS💭", "What's my ideal way to be comforted when I'm upset?"],
    ["TRUE OR FALSE✨", "I've kept a journal at some point in my life."],
    ["PICK🎯", "Would I rather travel alone or never travel again?"],
    ["GUESS💭", "What's a habit of mine you find kind of annoying but never say?"],
    ["NUMBER✦", "How many jobs have I had, including the weird ones?"],
  ],
 
  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Full arc:
  //   1–10   easy facts        (warm-up, low stakes)
  //   11–20  preferences        (this-or-that, small habits)
  //   21–30  history             (past, background, formative stuff)
  //   31–40  inner world          (fears, insecurities, real opinions)
  //   41–47  us-specific          (how well they know the relationship)
  //   48–50  closing                (reflection on how the round went)
  // ---------------------------------------------------------------
  50: [
    // EASY FACTS
    ["GUESS💭", "What's my go-to order at a coffee shop?"],
    ["TRUE OR FALSE✨", "I've never broken a bone."],
    ["PICK🎯", "Would I rather stay in or go out on a free Saturday?"],
    ["NUMBER✦", "How many siblings do I have?"],
    ["GUESS💭", "What's my comfort food on a bad day?"],
    ["PICK🎯", "Am I a morning person or a night owl?"],
    ["TRUE OR FALSE✨", "I know how to swim."],
    ["NUMBER✦", "How many countries have I visited?"],
    ["GUESS💭", "What's the first thing I do when I get home?"],
    ["PICK🎯", "Would I rather get a massage or sleep in?"],
 
    // PREFERENCES
    ["GUESS💭", "What's a movie I could rewatch endlessly?"],
    ["PICK🎯", "Would I rather win an argument or avoid one entirely?"],
    ["TRUE OR FALSE✨", "I've cried during a commercial."],
    ["NUMBER✦", "How many hours of sleep do I function best on?"],
    ["GUESS💭", "What's a food I claim to hate but would actually try again?"],
    ["PICK🎯", "Am I more likely to plan ahead or wing it?"],
    ["GUESS💭", "What's a small thing that instantly puts me in a bad mood?"],
    ["PICK🎯", "Would I rather be famous or invisible for a day?"],
    ["TRUE OR FALSE✨", "I've pretended to like a gift I actually didn't."],
    ["NUMBER✦", "How many close friends would I call at 2am?"],
 
    // HISTORY
    ["NUMBER✦", "How many years did I do a sport, instrument, or hobby as a kid?"],
    ["GUESS💭", "What was my first job?"],
    ["TRUE OR FALSE✨", "I got in real trouble at school at least once."],
    ["NUMBER✦", "How many times have I moved in my life?"],
    ["GUESS💭", "What's a subject I was actually good at in school?"],
    ["PICK🎯", "Was I more of a rule-follower or a rule-bender growing up?"],
    ["TRUE OR FALSE✨", "I've had the same best friend since childhood."],
    ["GUESS💭", "What's a hobby I used to love but stopped doing?"],
    ["NUMBER✦", "How many serious relationships did I have before you?"],
    ["GUESS💭", "What did I want to be when I grew up, before reality set in?"],
 
    // INNER WORLD
    ["GUESS💭", "What's my actual biggest fear, not the joke answer?"],
    ["TRUE OR FALSE✨", "I've never told a lie to get out of plans."],
    ["GUESS💭", "What's something I'm quietly insecure about?"],
    ["PICK🎯", "Am I more scared of failure or of being average?"],
    ["GUESS💭", "What's my ideal way to be comforted when I'm upset?"],
    ["TRUE OR FALSE✨", "I've kept a journal at some point in my life."],
    ["GUESS💭", "What's a compliment I secretly love hearing?"],
    ["PICK🎯", "Do I hold grudges or let things go quickly?"],
    ["GUESS💭", "What's a habit of mine you find kind of annoying but never say?"],
    ["TRUE OR FALSE✨", "I've cried in front of a stranger before."],
 
    // US-SPECIFIC
    ["GUESS💭", "What's the first thing I noticed about you?"],
    ["NUMBER✦", "How many dates did it take before I knew I liked you?"],
    ["TRUE OR FALSE✨", "I was more nervous than you on our first date."],
    ["GUESS💭", "What's a small thing you do that I've never told you I love?"],
    ["PICK🎯", "Am I more likely to remember or forget our anniversary details?"],
    ["GUESS💭", "What's the thing I complain about most when it comes to you, jokingly?"],
    ["NUMBER✦", "How many times have I said 'I love you' first versus you?"],
 
    // CLOSING
    ["GUESS💭", "What's one thing you learned about me tonight that you didn't know before?"],
    ["TRUE OR FALSE✨", "You knew more about me tonight than you expected to."],
    ["NUMBER✦", "Out of everything you guessed tonight, how many do you think you got right?"],
  ],


 
  },
  cozy: {
10: [
    ["ASK💭", "What's a fantasy you've had about me that you've never said out loud?"],
    ["SAY💗", "Name one thing you want more of from me, no context needed."],
    ["CHALLENGE🎯", "Describe, in one sentence, a version of tonight you'd want instead of this one."],
    ["ASK💭", "What's something you'd want me to do that you've never asked for directly?"],
    ["DO✦", "Whisper one word for what you're thinking right now."],
    ["REMEMBER✨", "What's the most desire you've ever felt for me in one moment?"],
    ["SAY💗", "Tell them one thing about themselves that fuels your imagination."],
    ["ASK💭", "If I asked you to be in charge tonight, what's the first thing you'd do?"],
    ["CHALLENGE🎯", "Say the sentence you'd want to hear from me right now."],
    ["DO✦", "Hold their gaze and let them see exactly what you're thinking."],
  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Building specificity — scenario starters, roleplay openers, deeper naming.
  // ---------------------------------------------------------------
  25: [
    ["ASK💭", "What's a scenario you've imagined for us that we've never actually tried?"],
    ["SAY💗", "Tell them one power dynamic you're curious about between us."],
    ["CHALLENGE🎯", "Start a scene: say the first line you'd use if we were strangers meeting tonight."],
    ["ASK💭", "What's a setting — somewhere specific — where you've imagined us together?"],
    ["DO✦", "Take control of the next thirty seconds however you want, no explanation."],
    ["REMEMBER✨", "What's a real moment between us that felt like your fantasy come true?"],
    ["SAY💗", "Name one thing you want to hear me say more often, in the moment."],
    ["ASK💭", "If we swapped who leads tonight, what would you want from that?"],
    ["CHALLENGE🎯", "Give one instruction and see if I follow it."],
    ["DO✦", "Trace where you'd want my hands to go next, slowly, without saying it."],
    ["ASK💭", "What's an outfit, prop, or setup you've thought about for us?"],
    ["SAY💗", "Tell them what patience versus urgency does for you in the moment."],
    ["CHALLENGE🎯", "Play a character for one line — who are you, and what do you say?"],
    ["ASK💭", "What's something you'd want to be told to do, rather than asked?"],
    ["REMEMBER✨", "What's the boldest thing either of us has ever initiated?"],
    ["DO✦", "Whisper exactly what you want, one sentence, no follow-up needed."],
    ["SAY💗", "Confess one fantasy you've had that has nothing to do with anyone specific — just a feeling."],
    ["ASK💭", "What's a version of 'in charge' that actually appeals to you?"],
    ["CHALLENGE🎯", "Set one rule for the rest of the night and enforce it."],
    ["DO✦", "Let them undress one part of the moment however they choose — pace, touch, silence."],
    ["ASK💭", "What's something you'd want to explore together that you've never brought up?"],
    ["SAY💗", "Tell them what 'losing control a little' means to you."],
    ["REMEMBER✨", "What's a time we both wanted the same thing without saying it?"],
    ["CHALLENGE🎯", "Give them a command using only your eyes and one gesture."],
    ["ASK💭", "What's one boundary you'd want to name clearly before we go further tonight?"],
  ],
 
  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Full arc:
  //   1–10   curiosity        (naming what you want, low stakes)
  //   11–20  scenario           (settings, roles, small scenes)
  //   21–30  power                (leading/following, control, instruction)
  //   31–40  specific desire        (direct naming, less abstraction)
  //   41–46  consent + boundaries    (checking in, staying honest)
  //   47–50  handoff                 (the game steps back, you two take over)
  // ---------------------------------------------------------------
  50: [
    // CURIOSITY
    ["ASK💭", "What's a fantasy you've had about me that you've never said out loud?"],
    ["SAY💗", "Name one thing you want more of from me, no context needed."],
    ["ASK💭", "What's something you'd want me to do that you've never asked for directly?"],
    ["DO✦", "Whisper one word for what you're thinking right now."],
    ["REMEMBER✨", "What's the most desire you've ever felt for me in one moment?"],
    ["SAY💗", "Tell them one thing about themselves that fuels your imagination."],
    ["ASK💭", "If I asked you to be in charge tonight, what's the first thing you'd do?"],
    ["CHALLENGE🎯", "Say the sentence you'd want to hear from me right now."],
    ["DO✦", "Hold their gaze and let them see exactly what you're thinking."],
    ["ASK💭", "What's a fantasy that surprised even you the first time you had it?"],
 
    // SCENARIO
    ["ASK💭", "What's a scenario you've imagined for us that we've never actually tried?"],
    ["CHALLENGE🎯", "Start a scene: say the first line you'd use if we were strangers meeting tonight."],
    ["ASK💭", "What's a setting — somewhere specific — where you've imagined us together?"],
    ["REMEMBER✨", "What's a real moment between us that felt like your fantasy come true?"],
    ["ASK💭", "What's an outfit, prop, or setup you've thought about for us?"],
    ["CHALLENGE🎯", "Play a character for one line — who are you, and what do you say?"],
    ["SAY💗", "Tell them what patience versus urgency does for you in the moment."],
    ["ASK💭", "If we could set a scene from scratch tonight, what's the first detail you'd choose?"],
    ["DO✦", "Set the mood however you want for the next minute — lighting, distance, silence."],
    ["REMEMBER✨", "What's a night that felt like it was written just for us?"],
 
    // POWER
    ["ASK💭", "If we swapped who leads tonight, what would you want from that?"],
    ["CHALLENGE🎯", "Give one instruction and see if I follow it."],
    ["DO✦", "Take control of the next thirty seconds however you want, no explanation."],
    ["ASK💭", "What's a version of 'in charge' that actually appeals to you?"],
    ["CHALLENGE🎯", "Set one rule for the rest of the night and enforce it."],
    ["DO✦", "Let them undress one part of the moment however they choose — pace, touch, silence."],
    ["ASK💭", "What's something you'd want to be told to do, rather than asked?"],
    ["CHALLENGE🎯", "Give them a command using only your eyes and one gesture."],
    ["SAY💗", "Tell them what 'losing control a little' means to you."],
    ["ASK💭", "Do you want to lead or be led tonight — say it plainly."],
 
    // SPECIFIC DESIRE
    ["DO✦", "Trace where you'd want my hands to go next, slowly, without saying it."],
    ["SAY💗", "Confess one fantasy you've had that has nothing to do with anyone specific — just a feeling."],
    ["ASK💭", "What's something you'd want to explore together that you've never brought up?"],
    ["DO✦", "Whisper exactly what you want, one sentence, no follow-up needed."],
    ["REMEMBER✨", "What's a time we both wanted the same thing without saying it?"],
    ["SAY💗", "Name one thing you want to hear me say more often, in the moment."],
    ["ASK💭", "What's a fantasy you've kept private because it felt too specific to say?"],
    ["DO✦", "Show, don't tell — one gesture for what you want right now."],
    ["SAY💗", "Tell them exactly how you want to be touched right now, plainly."],
    ["ASK💭", "What's something you want tonight that you haven't asked for yet?"],
 
    // CONSENT + BOUNDARIES
    ["ASK💭", "What's one boundary you'd want to name clearly before we go further tonight?"],
    ["SAY💗", "Tell them one thing that's an enthusiastic yes for you tonight."],
    ["ASK💭", "What's a word we should use if either of us wants to slow down?"],
    ["SAY💗", "Say one thing you need to feel fully comfortable right now."],
    ["ASK💭", "Is there anything on the table tonight you'd rather set aside?"],
    ["SAY💗", "Tell them what checking in mid-way means to you — do you want it or not?"],
 
    // HANDOFF
    ["ASK💭", "What's the one thing you want most right now, out of everything we've said tonight?"],
    ["SAY💗", "Tell them plainly what you want to happen next."],
    ["DO✦", "Kiss them slowly and let it answer the last card for you."],
    ["CHALLENGE🎯", "Set the game down. Whatever happens next is between the two of you."],
  ],
},
  intimate: {
    // ---------------------------------------------------------------
// 10 — INTIMATE STARTER
// Soft, private openers that invite emotional closeness and gentle heat.
// ---------------------------------------------------------------
 10: [
  ["ASK💭", "What’s one thing about me that makes you feel safest when we’re alone?"],
  ["SAY💗", "Tell me, without softening it, how you want to feel with me tonight."],
  ["DO✦", "Take my hand and hold it against your chest for ten full seconds."],
  ["CHALLENGE🎯", "Whisper one private thing you’ve been wanting to say to me all day."],
  ["ASK💭", "What part of being close to me feels the most intimate to you?"],
  ["REMEMBER✨", "When did you first feel like you could fully let your guard down with me?"],
  ["DO✦", "Trace a slow, soft line from my wrist up my arm, then stop and look at me."],
  ["SAY💗", "Say out loud the feeling you get when we’re this close and quiet."],
  ["CHALLENGE🎯", "Look into my eyes and tell me one thing you want from my touch right now."],
  ["ASK💭", "What’s something you’ve wanted to share with me that still feels a little tender?"],
],

// ---------------------------------------------------------------
// 25 — DATE NIGHT (INTIMATE)
// Arc: soft curiosity → growing closeness → quiet confession → gentle physical.
// ---------------------------------------------------------------
25: [
  ["ASK💭", "What’s the last thing I did that made you feel deeply wanted?"],
  ["DO✦", "Run one finger slowly along my jaw, down my neck, and rest it there."],
  ["SAY💗", "Tell me exactly what part of tonight has made you feel closest to me so far."],
  ["CHALLENGE🎯", "Describe, in detail, how you want us to be with each other for the rest of the night."],
  ["ASK💭", "What’s a small thing I do that makes you want to pull me closer?"],
  ["REMEMBER✨", "When did you first realize you wanted more than just time with me?"],
  ["DO✦", "Take my hand and place it over your heart while we keep talking."],
  ["SAY💗", "Confess one thing about the way I look at you that you’ve never said out loud."],
  ["CHALLENGE🎯", "Whisper the first soft thing you want the second this game ends — be specific."],
  ["ASK💭", "What’s a version of me (look, mood, quiet moment) that makes you melt a little?"],
  ["DO✦", "Kiss my forehead once, slowly, then stay close enough that I can feel your breath."],
  ["SAY💗", "Tell me what your body does when I get this close and stay."],
  ["ASK💭", "What do you want me to whisper against your skin right now?"],
  ["CHALLENGE🎯", "Let me choose exactly where the next soft kiss lands — anywhere you allow."],
  ["REMEMBER✨", "What’s the most private, charged moment we’ve shared that no one else knows?"],
  ["DO✦", "Lean in until our foreheads touch and hold still for five slow seconds."],
  ["SAY💗", "Describe, honestly, the quiet tension between us right now — no filters."],
  ["ASK💭", "What’s one thing about tonight you’re hoping continues after the cards are put away?"],
  ["CHALLENGE🎯", "Give me a slow kiss on the collarbone, then say one soft word for how it felt."],
  ["ASK💭", "What’s the boldest gentle thing you’ve ever wanted to say (or do) to me but held back?"],
  ["DO✦", "Hold my face and kiss me like you mean it — slow, no rushing."],
  ["SAY💗", "Tell me, plainly, what you want from the rest of tonight."],
  ["CHALLENGE🎯", "Let me pick one place to kiss you — anywhere above the waist you allow."],
  ["REMEMBER✨", "What’s a night with me you still replay when you want to feel close and warm?"],
  ["SAY💗", "Say the thing you’ve been thinking since this game started — uncensored and soft."],
],

// ---------------------------------------------------------------
// 50 — LONG NIGHT (INTIMATE)
// Full arc: soft curiosity → chemistry → confession → bold gentleness → intimate → close (fade to private).
// ---------------------------------------------------------------
50: [
  // TEASE / SOFT OPEN
  ["ASK💭", "What’s the first place on my body your attention goes when no one’s looking?"],
  ["SAY💗", "Tell me, without hedging, how you most want to feel with me tonight."],
  ["DO✦", "Pull me close by the waist and hold me there for ten seconds."],
  ["CHALLENGE🎯", "Whisper one private, charged thing you’ve thought about me today — nothing else."],
  ["ASK💭", "What piece of clothing of mine do you most want to slowly take off first?"],
  ["DO✦", "Trace one slow word on my palm, then let me guess what it means."],
  ["SAY💗", "Say the thing about my presence that makes you want to stay close."],
  ["CHALLENGE🎯", "Bite your lip, hold my gaze, and tell me one thing you want my mouth to do gently."],
  ["ASK💭", "What’s something you think about me when you’re alone that you’d never say in public?"],
  ["REMEMBER✨", "When did you first feel the shift from liking me into wanting this kind of closeness?"],

  // CHEMISTRY
  ["ASK💭", "What’s the last thing I did that left you replaying it later in a warm way?"],
  ["DO✦", "Run one finger slowly along my jawline, down my neck, and pause."],
  ["SAY💗", "Tell me exactly what part of tonight has made you feel the most turned on and close."],
  ["CHALLENGE🎯", "Describe in detail the way you want me dressed — or undressed — for the rest of the night."],
  ["ASK💭", "What’s a small thing I do that hits harder than you’d normally admit?"],
  ["REMEMBER✨", "When did you first want to go further than kissing with me?"],
  ["DO✦", "Hold my hand and slowly guide it under fabric while we keep talking."],
  ["SAY💗", "Confess one thing about the way I move that you’ve never said out loud."],
  ["ASK💭", "What’s a look or mood of mine that makes you want to skip the conversation and just be close?"],
  ["CHALLENGE🎯", "Whisper the first soft thing you want the second this game ends — be specific."],

  // CONFESSION
  ["DO✦", "Kiss my neck once, slowly, then say nothing and wait for my reaction."],
  ["SAY💗", "Tell me what happens in your body when I get this close."],
  ["ASK💭", "What do you want me to whisper against your skin right now?"],
  ["REMEMBER✨", "What’s the most charged private moment we’ve shared that no one else knows?"],
  ["SAY💗", "Describe, honestly, the tension and tenderness between us right now."],
  ["ASK💭", "What’s the boldest gentle thing you’ve ever wanted to say or do to me but didn’t?"],
  ["REMEMBER✨", "What’s a night with me you still think about when you want to feel something deep and warm?"],
  ["SAY💗", "Say the thing you’ve been thinking since this game started — no filters."],
  ["ASK💭", "What’s one thing about tonight you’re hoping doesn’t stop when the cards are put down?"],
  ["DO✦", "Lean in close enough that I can feel your breath and stay there for five seconds."],

  // BOLD GENTLE
  ["CHALLENGE🎯", "Let me choose exactly where the next kiss lands — anywhere you allow."],
  ["DO✦", "Hold my face and kiss me slowly, like you mean to keep going."],
  ["CHALLENGE🎯", "Give me a slow kiss on the collarbone, then say one raw, soft word for how it felt."],
  ["SAY💗", "Tell me, plainly, what you want from the rest of tonight."],
  ["CHALLENGE🎯", "Let me pick one place to kiss you — anywhere above the waist you allow."],
  ["DO✦", "Pull me close so our foreheads touch and just breathe together, no words."],
  ["CHALLENGE🎯", "Whisper exactly what you’re thinking right now — unfiltered and honest."],
  ["DO✦", "Let your hand rest on my waist (or lower) and hold it there for ten slow seconds."],

  // INTIMATE
  ["ASK💭", "What’s something you want from me tonight that you haven’t said yet?"],
  ["SAY💗", "Tell me one thing your body has been signaling all night."],
  ["DO✦", "Kiss me somewhere unexpected and wait for my reaction before you speak."],
  ["ASK💭", "What’s one boundary or preference you’d want us to check in on before this goes further?"],
  ["SAY💗", "Say the thing you want me to know before the night goes any further."],
  ["DO✦", "Hold each other close and still for ten seconds — let the anticipation build."],
  ["CHALLENGE🎯", "Tell me exactly how you want the rest of tonight to go, out loud and gently."],

  // CLOSE (fade to private)
  ["ASK💭", "What’s the last thing you want said between us before we put the phones (and cards) away?"],
  ["SAY💗", "Tell me one thing you’re looking forward to about the rest of tonight."],
  ["DO✦", "Kiss me slowly, then set the game down — we can take it from here."],
],
  },
  DarkDesire : {
    // ---------------------------------------------------------------
// 10 — DARK DESIRE STARTER
// Sharper, hungrier openers that push past gentle intimacy into darker charge.
// ---------------------------------------------------------------
 10: [
  ["ASK💭", "What’s the first place on my body your mind goes when you stop holding back?"],
  ["SAY💗", "Tell me, without softening it, the darkest thing you want to do to me tonight."],
  ["DO✦", "Pull me in by the hips hard enough that I feel owned for ten full seconds."],
  ["CHALLENGE🎯", "Whisper the filthiest thing you’ve thought about me in the last hour — nothing else."],
  ["ASK💭", "What piece of clothing of mine do you most want to rip or force off first?"],
  ["REMEMBER✨", "When did you first imagine crossing the line from wanting me into needing to claim me?"],
  ["DO✦", "Trace a slow, deliberate path from my collarbone down toward my chest with one finger, then stop like you’re deciding."],
  ["SAY💗", "Say out loud the thing about my body that makes you lose control."],
  ["CHALLENGE🎯", "Bite your lip, lock eyes, and tell me one thing you want me to do with my mouth — no polite version."],
  ["ASK💭", "What’s something you’ve wanted to try with me that still feels a little dangerous?"],
],

// ---------------------------------------------------------------
// 25 — DATE NIGHT (DARK DESIRE)
// Arc: sharp tease → building hunger → raw confession → physical claim.
// ---------------------------------------------------------------
25: [
  ["ASK💭", "What’s the last thing I did that left you thinking about me completely under you?"],
  ["DO✦", "Run one finger slowly along my jaw, down my neck, and stop just above my chest like you own the next move."],
  ["SAY💗", "Tell me exactly what part of tonight has made you the most dangerously turned on so far."],
  ["CHALLENGE🎯", "Describe, in detail, how you want me dressed — or undressed and restrained — for the rest of the night."],
  ["ASK💭", "What’s a small thing I do that makes you want to drag me somewhere private and keep me there?"],
  ["REMEMBER✨", "When did you first want more than a kiss from me — when the want turned darker?"],
  ["DO✦", "Take my hand and guide it slowly under your shirt (or mine) while we keep talking, no permission asked."],
  ["SAY💗", "Confess one thing about the way I move that you’ve never said out loud because it felt too possessive."],
  ["CHALLENGE🎯", "Whisper the first thing you want to do the second this game ends — be specific and unfiltered."],
  ["ASK💭", "What’s a version of me (look, mood, outfit) that makes you want to skip the talking and take what you want?"],
  ["DO✦", "Kiss my neck once, slowly and deliberately, then stay close enough that I can feel the heat of your breath."],
  ["SAY💗", "Tell me what your body does when I get this close and you stop pretending you’re in control."],
  ["ASK💭", "What do you want me to whisper against your skin right now — the version that makes me shiver?"],
  ["CHALLENGE🎯", "Let me choose exactly where the next kiss lands — anywhere above the waist, and make it count."],
  ["REMEMBER✨", "What’s the most charged, private moment we’ve shared that no one else knows and still makes you hungry?"],
  ["DO✦", "Lean in until our bodies are almost touching and hold still for five slow seconds — make me feel the restraint."],
  ["SAY💗", "Describe, honestly, the darker tension between us right now — no filters."],
  ["ASK💭", "What’s one thing about tonight you’re hoping continues after the cards are put away, even if it’s intense?"],
  ["CHALLENGE🎯", "Give me a slow, claiming kiss on the collarbone, then say one raw word for how it felt."],
  ["ASK💭", "What’s the boldest, darkest thing you’ve ever wanted to say (or do) to me but held back?"],
  ["DO✦", "Hold my face and kiss me like you mean to keep going — no rushing, no softness unless I earn it."],
  ["SAY💗", "Tell me, plainly, what you want from the rest of tonight — the version that scares you a little."],
  ["CHALLENGE🎯", "Let me pick one place to kiss you — anywhere above the waist you allow, and don’t look away."],
  ["REMEMBER✨", "What’s a night with me you still replay when you want to feel something intense and a little dangerous?"],
  ["SAY💗", "Say the thing you’ve been thinking since this game started — uncensored and darker."],
],

// ---------------------------------------------------------------
// 50 — LONG NIGHT (DARK DESIRE)
// Full arc: sharp tease → chemistry → raw confession → bold claim → intimate edge → close (fade to private).
// ---------------------------------------------------------------
50: [
  // TEASE
  ["ASK💭", "What’s the first place on my body your attention goes when no one’s looking and you stop being careful?"],
  ["SAY💗", "Tell me, without hedging, the darkest thing you most want to do to me tonight."],
  ["DO✦", "Pull me close by the hips and hold me there for ten seconds like you’re deciding how far to take it."],
  ["CHALLENGE🎯", "Whisper one filthy, possessive thing you’ve thought about me today — nothing else."],
  ["ASK💭", "What piece of clothing of mine do you most want gone first — preferably not gently?"],
  ["DO✦", "Trace one slow word on my palm, then let me guess what it means while you watch my reaction."],
  ["SAY💗", "Say the thing about my body language that makes you want to push further."],
  ["CHALLENGE🎯", "Bite your lip, hold my gaze, and tell me one thing you want my mouth to do — no soft version."],
  ["ASK💭", "What’s something you think about me when you’re alone that you’d never say in public?"],
  ["REMEMBER✨", "When did you first feel the shift from attraction into wanting to claim me?"],

  // CHEMISTRY
  ["ASK💭", "What’s the last thing I did that left you replaying it later in a darker way?"],
  ["DO✦", "Run one finger slowly along my jawline, down my neck, and pause like the next move is yours."],
  ["SAY💗", "Tell me exactly what part of tonight has made you the most turned on and hungry."],
  ["CHALLENGE🎯", "Describe in detail the outfit — or lack of one — you want me in for the rest of the night, including how restricted."],
  ["ASK💭", "What’s a small thing I do that hits harder than you’d normally admit?"],
  ["REMEMBER✨", "When did you first want to go further than kissing with me — when the want turned sharper?"],
  ["DO✦", "Hold my hand and slowly guide it under fabric while we keep talking, no asking."],
  ["SAY💗", "Confess one thing about the way I move that you’ve never said out loud because it felt too possessive."],
  ["ASK💭", "What’s a look or mood of mine that makes you want to skip the conversation and take control?"],
  ["CHALLENGE🎯", "Whisper the first thing you want the second this game ends — be specific and unfiltered."],

  // CONFESSION
  ["DO✦", "Kiss my neck once, slowly and deliberately, then say nothing and wait for my reaction."],
  ["SAY💗", "Tell me what happens in your body when I get this close and you stop holding back."],
  ["ASK💭", "What do you want me to whisper against your skin right now — the version that makes it harder to stay gentle?"],
  ["REMEMBER✨", "What’s the most charged private moment we’ve shared that no one else knows and still makes you hungry?"],
  ["SAY💗", "Describe, honestly, the darker tension between us right now."],
  ["ASK💭", "What’s the boldest, most possessive thing you’ve ever wanted to say or do to me but didn’t?"],
  ["REMEMBER✨", "What’s a night with me you still think about when you want to feel something intense and a little dangerous?"],
  ["SAY💗", "Say the thing you’ve been thinking since this game started — no filters, no softening."],
  ["ASK💭", "What’s one thing about tonight you’re hoping doesn’t stop when the cards are put down, even if it edges darker?"],
  ["DO✦", "Lean in close enough that I can feel your breath and stay there for five seconds — make the restraint obvious."],

  // BOLD
  ["CHALLENGE🎯", "Let me choose exactly where the next kiss lands — anywhere you allow, and make it count."],
  ["DO✦", "Hold my face and kiss me slowly, like you mean to keep going and you’re not asking."],
  ["CHALLENGE🎯", "Give me a slow, claiming kiss on the collarbone, then say one raw word for how it felt."],
  ["SAY💗", "Tell me, plainly, what you want from the rest of tonight — the version that scares you a little."],
  ["CHALLENGE🎯", "Let me pick one place to kiss you — anywhere above the waist you allow, and don’t look away."],
  ["DO✦", "Pull me close so our foreheads touch and just breathe together, no words — feel the hunger."],
  ["CHALLENGE🎯", "Whisper exactly what you’re thinking right now — unfiltered and darker."],
  ["DO✦", "Let your hand rest on my waist (or lower) and hold it there for ten slow seconds like you’re claiming the space."],

  // INTIMATE EDGE
  ["ASK💭", "What’s something you want from me tonight that you haven’t said yet because it felt too dark?"],
  ["SAY💗", "Tell me one thing your body has been signaling all night that you’ve been trying to hide."],
  ["DO✦", "Kiss me somewhere unexpected and deliberately, then set the game down — we can take it from here."],
],
  },
  DreamsFuture:{
    // ---------------------------------------------------------------
  // 10 — QUICK DATE
  // Light, near-future dreaming. Easy to answer, still meaningful.
  // ---------------------------------------------------------------
  10: [
    ["ASK💭", "What's a trip we haven't taken yet that you want to plan first?"],
    ["SAY💗", "Tell them one thing about our future you're genuinely excited about."],
    ["ASK💭", "What's your idea of a perfect ordinary Tuesday, five years from now?"],
    ["REMEMBER✨", "What's a future you used to imagine for yourself before you met me?"],
    ["ASK💭", "If we moved somewhere new together, where would you pick?"],
    ["DO✦", "Hold hands and each name one word for what you want next year to feel like."],
    ["ASK💭", "What's a small tradition you want us to start but haven't yet?"],
    ["SAY💗", "Say one thing you're looking forward to that involves both of us."],
    ["CHALLENGE🎯", "Describe our future home in exactly three details."],
    ["ASK💭", "What's something you want to learn together someday?"],
  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Deeper — home, growth, milestones, and what you want from each other long-term.
  // ---------------------------------------------------------------
  25: [
    ["ASK💭", "What does a typical Sunday look like in the life you picture for us?"],
    ["SAY💗", "Tell them what kind of partner you want to become for them over time."],
    ["ASK💭", "What's a career or personal goal you want me to help you chase?"],
    ["REMEMBER✨", "What's a future you two talked about early on that still feels true?"],
    ["ASK💭", "If we could guarantee one thing about our future, what would you ask for?"],
    ["DO✦", "Close your eyes and describe the sound of our future home."],
    ["ASK💭", "What's a milestone — big or small — you're most looking forward to?"],
    ["SAY💗", "Say one way you hope we grow closer as the years go on."],
    ["CHALLENGE🎯", "Plan our next big trip in sixty seconds, out loud, together."],
    ["ASK💭", "What kind of home do you picture us in — describe the feeling, not just the place."],
    ["ASK💭", "What's something about getting older together that doesn't scare you at all?"],
    ["REMEMBER✨", "What's a moment that made you first picture 'forever' with me?"],
    ["SAY💗", "Tell them what kind of support you hope to give them during hard years."],
    ["ASK💭", "What's a value you want to make sure we build our life around?"],
    ["DO✦", "Take turns finishing 'In ten years, I hope we...' three times each."],
    ["ASK💭", "What's a routine or rhythm you want our future household to have?"],
    ["CHALLENGE🎯", "Describe our future in one sentence, like a movie logline."],
    ["ASK💭", "What's something you'd want us to prioritize that we don't talk about enough?"],
    ["SAY💗", "Say one thing you trust about our future, even without knowing the details."],
    ["REMEMBER✨", "What's a version of the future you were afraid to want before me?"],
    ["ASK💭", "If we threw a party to celebrate 'us' in twenty years, what would it look like?"],
    ["ASK💭", "What's a fear about the future you'd want to say out loud, just to let it go?"],
    ["DO✦", "Hold hands and each describe the other, twenty years from now, in one sentence."],
    ["SAY💗", "Tell them what 'growing old together' actually means to you."],
    ["ASK💭", "What's one thing about our future you never want to change, no matter what?"],
  ],
 
  // ---------------------------------------------------------------
  // 50 — LONG NIGHT
  // Full arc:
  //   1–10   near future        (next year, small plans)
  //   11–20  home & rhythm        (daily life, where you live, routines)
  //   21–30  growth & goals         (careers, values, becoming who you want to be)
  //   31–38  milestones                (big life moments, timing, hopes)
  //   39–45  fears & honesty              (what worries you, said out loud)
  //   46–50  legacy & closing               (old age, what you leave behind, reflection)
  // ---------------------------------------------------------------
  50: [
    // NEAR FUTURE
    ["ASK💭", "What's a trip we haven't taken yet that you want to plan first?"],
    ["SAY💗", "Tell them one thing about our future you're genuinely excited about."],
    ["ASK💭", "What's your idea of a perfect ordinary Tuesday, five years from now?"],
    ["DO✦", "Hold hands and each name one word for what you want next year to feel like."],
    ["ASK💭", "What's a small tradition you want us to start but haven't yet?"],
    ["CHALLENGE🎯", "Describe our future home in exactly three details."],
    ["ASK💭", "What's something you want to learn together someday?"],
    ["REMEMBER✨", "What's a future you used to imagine for yourself before you met me?"],
    ["SAY💗", "Say one thing you're looking forward to that involves both of us."],
    ["ASK💭", "If we moved somewhere new together, where would you pick?"],
 
    // HOME & RHYTHM
    ["ASK💭", "What does a typical Sunday look like in the life you picture for us?"],
    ["DO✦", "Close your eyes and describe the sound of our future home."],
    ["ASK💭", "What kind of home do you picture us in — describe the feeling, not just the place."],
    ["CHALLENGE🎯", "Plan our next big trip in sixty seconds, out loud, together."],
    ["ASK💭", "What's a routine or rhythm you want our future household to have?"],
    ["REMEMBER✨", "What's a small domestic moment you already love that you hope stays forever?"],
    ["ASK💭", "What's something about how we live now that you'd want to keep no matter where we end up?"],
    ["SAY💗", "Tell them what 'home' means to you when they're the one defining it."],
    ["ASK💭", "What's a pet, plant, or tiny responsibility you'd want us to take on together?"],
    ["DO✦", "Take turns describing our future kitchen table and who usually sits where."],
 
    // GROWTH & GOALS
    ["ASK💭", "What's a career or personal goal you want me to help you chase?"],
    ["SAY💗", "Tell them what kind of partner you want to become for them over time."],
    ["ASK💭", "What's a value you want to make sure we build our life around?"],
    ["SAY💗", "Say one way you hope we grow closer as the years go on."],
    ["ASK💭", "What's something you'd want us to prioritize that we don't talk about enough?"],
    ["REMEMBER✨", "What's a goal of mine you've watched change since we met?"],
    ["ASK💭", "What's a version of yourself you're hoping to grow into, with me beside you?"],
    ["SAY💗", "Tell them what kind of support you hope to give them during hard years."],
    ["ASK💭", "What's something you want us to get better at together?"],
    ["DO✦", "Take turns finishing 'In ten years, I hope we...' three times each."],
 
    // MILESTONES
    ["ASK💭", "What's a milestone — big or small — you're most looking forward to?"],
    ["REMEMBER✨", "What's a moment that made you first picture 'forever' with me?"],
    ["ASK💭", "If we threw a party to celebrate 'us' in twenty years, what would it look like?"],
    ["CHALLENGE🎯", "Describe our future in one sentence, like a movie logline."],
    ["ASK💭", "What's a milestone you want us to take our time with instead of rushing?"],
    ["SAY💗", "Tell them what you hope our wedding, or whatever marks us, would feel like."],
    ["ASK💭", "What's a chapter of life you're most curious to go through with me?"],
    ["REMEMBER✨", "What's a moment recently that already felt like a milestone, even a quiet one?"],
 
    // FEARS & HONESTY
    ["ASK💭", "What's a fear about the future you'd want to say out loud, just to let it go?"],
    ["SAY💗", "Say one thing you trust about our future, even without knowing the details."],
    ["REMEMBER✨", "What's a version of the future you were afraid to want before me?"],
    ["ASK💭", "What's something about getting older together that doesn't scare you at all?"],
    ["SAY💗", "Tell them one worry you'd want to carry together instead of alone."],
    ["ASK💭", "What's a hard season you think we'd handle well together, and why?"],
    ["SAY💗", "Say what steadiness from you would look like during a hard year."],
 
    // LEGACY & CLOSING
    ["ASK💭", "What's one thing about our future you never want to change, no matter what?"],
    ["DO✦", "Hold hands and each describe the other, twenty years from now, in one sentence."],
    ["SAY💗", "Tell them what 'growing old together' actually means to you."],
    ["ASK💭", "What's something you'd want people to say about us, decades from now?"],
    ["REMEMBER✨", "Out of everything you've imagined tonight, what's the one future you want most?"],
  ],
  }
};
// ========================================
// GET EXACT CARD DECK
// ----------------------------------------
// Mood + card count selects one exact deck.
//
// 10 → moodQuestionSets[mood].10
// 25 → moodQuestionSets[mood].25
// 50 → moodQuestionSets[mood].50
//
// Each deck is independent.
// ========================================
function getQuestionPool(moodKey, length) {
  return moodQuestionSets[moodKey]?.[length] || [];
}

// ========================================
// GAMEPLAY STATE
// Runtime-only values for the selected deck and current round; edit card content in moodQuestionSets above.
// Persisted equivalents are managed in the GAME SESSION STORAGE block below.
// ========================================
let selectedMood = "romantic";
let selectedLength = 10;
let currentCards = [];
let currentIndex = 0;
let skipped = 0;
let flipped = false;
let favorite = false;
// Play confirmation flag — user must confirm age and consent before starting a round
let playConfirmed = false;

// ========================================
// ONLINE ROOM STATE
// These values control the front-end online lobby.
// Real cross-device presence requires a realtime backend.
// ========================================
let onlineMood = "romantic";
let onlineLength = 10;
let onlineRoomCode = "";
let onlineRole = "host";

// Safe DOM helper — returns null when run outside the browser (Node tooling)
const $ = (id) => (typeof document !== 'undefined' ? document.getElementById(id) : null);

// ========================================
// ROUTE AND SESSION CONFIGURATION
// Keep public URL changes and session schema changes centralized here.
// The version suffix lets future migrations ignore incompatible saved rounds.
// ========================================
const ROUTE_PATHS = Object.freeze({
  home: "/",
  play: "/play",
  setup: "/play/setup",
  game: "/game",
  results: "/results",
  games: "/games",
  courses: "/courses",
  course: "/course",
  online: "/online",
  how: "/how",
  support: "/support"
});
const GAME_SESSION_KEY = "flirtyflip-game-session-v1";
const GAME_SESSION_STATUSES = new Set(["setup", "active", "complete"]);
const SUPPORT_SECTIONS = new Set(["index", "contact", "refund", "terms", "privacy", "faq"]);
let gameSessionStatus = "idle";
let routerInitialized = false;
let lastTrackedLocation = "";
let catalogBackRoute = ROUTE_PATHS.home;

// ========================================
// SUPABASE AND AUTHENTICATION INTEGRATION
// Edit provider configuration in index.html; client readiness and account/guest behavior live in this area.
// Keep publishable browser configuration separate from privileged server credentials.
// ========================================
// Safe access to `window` so running this file in Node (syntax checks, tooling) won't throw.
const SUPABASE_CONFIG = (typeof window !== 'undefined' && window.PAIRPLAY_SUPABASE_CONFIG)
  ? window.PAIRPLAY_SUPABASE_CONFIG
  : {
    url: "https://irspllhipxekdqvuppyr.supabase.co/rest/v1/",
    anonKey: "sb_publishable_9sQoxaMCGlxWId7eTMG2qQ_8QszVqIc"
  };

// Lazy supabase client factory — create client only when needed (and only in browser)
let _supabaseClient = null;
function getSupabaseClient() {
  if (typeof window === 'undefined') return null;
  if (_supabaseClient) return _supabaseClient;
  if (!SUPABASE_CONFIG || !SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return null;
  if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
  try {
    _supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    return _supabaseClient;
  } catch (e) {
    console.warn('Failed to create supabase client', e);
    return null;
  }
}

function hasSupabaseConfigured() {
  return Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.url !== "https://YOUR_PROJECT_REF.supabase.co" && SUPABASE_CONFIG.anonKey && SUPABASE_CONFIG.anonKey !== "YOUR_ANON_KEY");
}

// Ensure supabase client is ready. If window.supabase is missing, attempt to load CDN script (if not present)
// Returns a Promise that resolves to the client or null after timeout
function ensureSupabaseClient(timeout = 4000) {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(null);
    let waited = 0;
    let watcher = null;
    let finished = false;

    const finish = (client) => {
      if (finished) return;
      finished = true;
      if (watcher !== null) clearInterval(watcher);
      resolve(client || null);
    };

    console.debug('ensureSupabaseClient: start', { timeout, SUPABASE_CONFIG });
    const existing = getSupabaseClient();
    if (existing) {
      console.debug('ensureSupabaseClient: existing client found');
      return finish(existing);
    }
    const interval = 100;

    // If no supabase script tag, inject one
    const hasScript = !!document.querySelector('script[src*="supabase-js"]');
    console.debug('ensureSupabaseClient: hasScript', hasScript);
    if (!hasScript) {
      console.debug('ensureSupabaseClient: injecting supabase script tag');
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      s.onload = () => {
        console.debug('ensureSupabaseClient: supabase script loaded');
        const client = getSupabaseClient();
        if (client) finish(client);
      };
      s.onerror = (e) => {
        console.error('ensureSupabaseClient: failed to load supabase script', e);
        finish(null);
      };
      document.head.appendChild(s);
    }

    watcher = setInterval(() => {
      const client = getSupabaseClient();
      if (client) {
        console.debug('ensureSupabaseClient: client ready');
        finish(client);
        return;
      }
      waited += interval;
      if (waited >= timeout) {
        console.warn('ensureSupabaseClient: timeout waiting for client');
        finish(null);
      }
    }, interval);
  });
}

let authMode = "login";
let signedInUser = null;

// -----------------------------
// EDITABLE CONFIG
// Change these values to customize the card length options shown throughout the app.
// Each entry has its own text blocks so you can edit labels independently.
// -----------------------------
const cardLengthOptions = [
  { count: 10, title: "10 cards", subtitle: "Quick date", description: "A short, fun round for busy nights." },
  { count: 25, title: "25 cards", subtitle: "Date night", description: "A fuller evening of conversation and play." },
  { count: 50, title: "50 cards", subtitle: "Long night", description: "Take your time — lots to explore together." }
];

// ========================================
// GAME DISCOVERY DATA
// Catalog metadata points to existing playable mood decks; it never duplicates question content.
// Update categories or merchandising copy here while keeping mood keys aligned with moods above.
// ========================================
const gameCatalogData = [
  { id: "romantic", categories: ["romantic", "conversation"], duration: "15–20 min", deckSize: 10, featured: true },
  { id: "sweet", categories: ["quick", "conversation"], duration: "10–15 min", deckSize: 10 },
  { id: "TruthandDare", categories: ["truth-dare", "challenges"], duration: "15–20 min", deckSize: 10 },
  { id: "flirtyii", categories: ["flirty", "challenges"], duration: "15–20 min", deckSize: 10 },
  { id: "spicy", categories: ["flirty", "18-plus"], duration: "15–25 min", deckSize: 10 },
  { id: "playful", categories: ["quick", "conversation"], duration: "15–20 min", deckSize: 10 },
  { id: "cozy", categories: ["romantic", "conversation"], duration: "15–20 min", deckSize: 10 },
  { id: "intimate", categories: ["deep", "conversation"], duration: "20–30 min", deckSize: 10 },
  { id: "DarkDesire", categories: ["deep", "18-plus"], duration: "20–30 min", deckSize: 10 },
  { id: "DreamsFuture", categories: ["deep", "conversation"], duration: "20–30 min", deckSize: 10 },
  { id: "online", title: "Play Online", icon: "↗", description: "Create a room link and invite your partner into a shared lobby.", categories: ["online"], duration: "You decide", deckSize: "10 / 25 / 50", online: true }
];

const gameFilterOptions = [
  { id: "all", label: "All" },
  { id: "quick", label: "Quick" },
  { id: "romantic", label: "Romantic" },
  { id: "conversation", label: "Conversation" },
  { id: "truth-dare", label: "Truth & Dare" },
  { id: "challenges", label: "Challenges" },
  { id: "deep", label: "Deep" },
  { id: "flirty", label: "Flirty" },
  { id: "18-plus", label: "18+" },
  { id: "online", label: "Online" }
];

function getGameCatalogItem(gameId) {
  const config = gameCatalogData.find(({ id }) => id === gameId);
  if (!config) return null;
  const mood = moods[gameId];
  return {
    ...config,
    title: config.title || mood?.title || "Game",
    icon: config.icon || mood?.icon || "♡",
    description: config.description || mood?.desc || "A FlirtyFlip game for two.",
    intensity: mood?.intensity || "",
    moodKey: mood ? gameId : null
  };
}

function isValidCard(card) {
  return Array.isArray(card)
    && card.length >= 2
    && typeof card[0] === "string"
    && typeof card[1] === "string";
}

function validateMoodDecks() {
  const issues = [];

  Object.keys(moods).forEach((moodKey) => {
    cardLengthOptions.forEach(({ count }) => {
      const deck = getQuestionPool(moodKey, count);

      if (!Array.isArray(deck)) {
        issues.push(`${moodKey}/${count}: deck is missing`);
        return;
      }

      if (deck.length !== count) {
        issues.push(`${moodKey}/${count}: expected ${count} cards, found ${deck.length}`);
      }

      deck.forEach((card, index) => {
        if (!isValidCard(card)) {
          issues.push(`${moodKey}/${count}: invalid card at position ${index + 1}`);
        }
      });
    });
  });

  if (issues.length > 0) {
    console.warn("Deck validation warnings:\n" + issues.join("\n"));
  }

  return issues;
}

validateMoodDecks();

// ========================================
// COURSES DATA
// Structured course data for the catalog and course detail views.
// Edit course title → subtitle → category → chapters → lessons.
// Keep content here for easy editing by a normal-level coder.
// ========================================
const coursesData = {
  'confident-connection': {
    id: 'confident-connection',
    title: 'Confident Connection',
    category: 'For Him',
    subtitle: 'Build confidence & presence',
    chapters: 8,
    time: '~25 min',
    tags: ['for-him', 'connection'],
    summary: 'Courses focused on confidence, communication, intimacy, and being a better partner.',
    outcomes: [
      'Practice grounded presence instead of performing confidence.',
      'Notice emotional signals through words, tone and body language.',
      'Ask clearer questions and respond with more attention.',
      'Build comfort through steady, low-pressure connection.'
    ],
    sections: [
      {
        title: 'Overview',
        lessons: [
          'Introduction - You ve likely consumed advice before Youve likely consumed advice before — tips, tricks, techniques promising to make you better in bed. Most of it treats sex like a mechanical problem to be solved. This course starts from a different premise: what happens between you and a partner is a direct reflection of whats happening inside you  Your nervous system, your attention, your self-trust — these shape the room before a single touch occurs What This Course Actually TeachesYou will not find checklists of moves here. You will find a way of being — grounded, attentive, unhurried — that makes technique almost irrelevant. A man who is genuinely present will outperform a man executing a flawless routine while mentally absent, every time. Women feel the difference immediately, even if they cant name it.'
        ]
      },
      {
        title: 'Core Lessons',
        lessons: [
          '1. Presence & Confidence- Confidence, as most men understand it, is an act — a mask worn to hide uncertainty. Real presence is the opposite: its what remains when you stop performing and simply occupy the moment you re in. This lesson introduces the state youll return to throughout the course Core Teaching The Anchor State Think of your nervous system as either anchored or adrift.' ,
          '2. Reading emotions- Most men either overthink a partner emotional state or ignore it entirely and rely on assumption. Neither works. Reading emotions accurately is a trainable skill, not an innate gift some men have and others do not.' ,
          '3. Asking better questions -  Most advice tells men to talk more in bed. That is incomplete. What actually builds trust is asking questions that open a partner up rather than putting her on the spot — and knowing when silence is the better question.' ,
          '4. Practical techniques - Technique matters, but only once it sits on top of presence and reading.' ,
          '5. Building comfort - Comfort is not a mood you create in a single evening. It is built across many small moments.' ,
          '6. Practice Core Teaching - Why low-stakes repetition matters',
          '7. Final challenge - This is where the course closes and your own practice begins.'
        ]
      }
    ]
  },
  'better-communication': {
    id: 'better-communication',
    title: 'Better Communication',
    category: 'For Him',
    subtitle: 'Listen & express clearly',
    chapters: 7,
    time: '~22 min',
    tags: ['for-him', 'communication'],
    summary: 'Learn how to listen, express yourself, and handle difficult conversations.',
    outcomes: [
      'Listen without preparing a defensive response.',
      'Express needs clearly and without accusation.',
      'Handle difficult conversations with more steadiness.'
    ],
    sections: [
      { title: 'Lessons', lessons: ['Intro', 'Listening', 'Non-defensive speech', 'Asking vs accusing', 'Practical exercises', 'Practice', 'Final challenge'] }
    ]
  },
  'art-of-romance': {
    id: 'art-of-romance',
    title: 'The Art of Romance',
    category: 'For Him',
    subtitle: 'Create small romantic moments',
    chapters: 8,
    time: '~25 min',
    tags: ['for-him', 'romance'],
    summary: 'Turn everyday moments into meaningful romantic experiences.',
    outcomes: [
      'Create small rituals that make everyday connection feel intentional.',
      'Choose thoughtful gestures that carry personal meaning.',
      'Design date nights around attention and connection.'
    ],
    sections: [
      { title: 'Lessons', lessons: ['Intro', 'Small rituals', 'Gifts that mean more', 'Date design', 'Connection techniques', 'Practice', 'Final challenge', 'Wrap up'] }
    ]
  },
  'How to last longer': {
    id: 'art-of-romance',
    title: 'The Art of Romance',
    category: 'For Him',
    subtitle: 'Create small romantic moments',
    chapters: 8,
    time: '~25 min',
    tags: ['for-him', 'romance'],
    summary: 'Turn everyday moments into meaningful romantic experiences.',
    outcomes: [
      'Create small rituals that make everyday connection feel intentional.',
      'Choose thoughtful gestures that carry personal meaning.',
      'Design date nights around attention and connection.'
    ],
    sections: [
      { title: 'Lessons', lessons: ['Intro', 'Small rituals', 'Gifts that mean more', 'Date design', 'Connection techniques', 'Practice', 'Final challenge', 'Wrap up'] }
    ]
  }
};

// ========================================
// COURSE DISCOVERY AND PROGRESS CONFIGURATION
// Filters reflect categories actually present in coursesData; progress stays local to this device.
// Supabase integration can replace these storage helpers later without changing course renderers.
// ========================================
const courseFilterOptions = [
  { id: 'all', label: 'All' },
  { id: 'for-him', label: 'For Him' },
  { id: 'communication', label: 'Communication' },
  { id: 'romance', label: 'Romance' },
  { id: 'connection', label: 'Connection' }
];
const COURSE_PROGRESS_KEY = 'flirtyflip-course-progress-v1';

function getFlatCourseLessons(course) {
  if (!course || !Array.isArray(course.sections)) return [];
  return course.sections.flatMap((section, sectionIndex) => section.lessons.map((content, lessonIndex) => ({
    content,
    sectionTitle: section.title,
    sectionIndex,
    lessonIndex
  })));
}

function readCourseProgress() {
  try {
    const raw = localStorage.getItem(COURSE_PROGRESS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
}

function writeCourseProgress(progress) {
  try {
    localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn('Unable to save course progress.', error);
  }
}

function getCourseProgress(courseId) {
  const progress = readCourseProgress()[courseId];
  if (!progress || !Array.isArray(progress.completed)) return null;
  return {
    lastLesson: Math.max(0, Number(progress.lastLesson) || 0),
    completed: [...new Set(progress.completed.map(Number).filter(Number.isInteger))]
  };
}

function saveCourseProgress(courseId, lessonIndex, { complete = false } = {}) {
  const course = coursesData[courseId];
  const lessons = getFlatCourseLessons(course);
  if (!course || !lessons[lessonIndex]) return;

  const allProgress = readCourseProgress();
  const current = getCourseProgress(courseId) || { lastLesson: 0, completed: [] };
  current.lastLesson = lessonIndex;
  if (complete && !current.completed.includes(lessonIndex)) current.completed.push(lessonIndex);
  current.completed = current.completed.filter((index) => index >= 0 && index < lessons.length);
  allProgress[courseId] = current;
  writeCourseProgress(allProgress);
}

function getCourseProgressPercent(courseId) {
  const course = coursesData[courseId];
  const total = getFlatCourseLessons(course).length;
  const progress = getCourseProgress(courseId);
  if (!progress || total === 0) return null;
  return Math.round((progress.completed.length / total) * 100);
}

function getGuestKey() {
  return "flirtyflip-guest";
}

function readStoredGuest() {
  try {
    const raw = localStorage.getItem(getGuestKey());
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function writeStoredGuest(user) {
  localStorage.setItem(getGuestKey(), JSON.stringify(user));
}

function clearStoredGuest() {
  localStorage.removeItem(getGuestKey());
}

// -----------------------------
// Favorites persistence (simple localStorage set of card texts)
// -----------------------------
function getFavoritesKey() { return 'flirtyflip-favorites'; }
function readFavorites() {
  try {
    const raw = localStorage.getItem(getFavoritesKey());
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function writeFavorites(list) {
  try { localStorage.setItem(getFavoritesKey(), JSON.stringify(list)); } catch (e) { /* ignore */ }
}
function isFavoriteCard(text) {
  if (!text) return false;
  const favs = readFavorites();
  return favs.indexOf(text) !== -1;
}
function toggleFavoriteForCard(text) {
  if (!text) return false;
  const favs = readFavorites();
  const i = favs.indexOf(text);
  let added = false;
  if (i === -1) { favs.push(text); added = true; }
  else { favs.splice(i, 1); added = false; }
  writeFavorites(favs);
  updateFavoritesBadge();
  return added;
}
function updateFavoritesBadge() {
  const el = $('favorites-count');
  if (!el) return;
  const favs = readFavorites();
  el.textContent = String(favs.length);
  el.classList.toggle('hidden', favs.length === 0);
}

// ========================================
// AUTHENTICATION WORKFLOW
// Initializes Supabase or guest sessions and owns login, signup, reset and logout behavior.
// Edit account-provider behavior here; edit modal fields and provider configuration in index.html.
// ========================================
async function initializeAuth() {
  const guestProfile = readStoredGuest();
  if (guestProfile) signedInUser = guestProfile;

  // Try to ensure the supabase client is available, but don't block initialization for long
  const client = await ensureSupabaseClient(1200);
  if (!client) {
    updateAuthUI();
    return;
  }

  try {
    const { data: { session } } = await client.auth.getSession();
    if (session?.user) {
      signedInUser = session.user;
    }

    client.auth.onAuthStateChange((_event, session) => {
      signedInUser = session?.user || null;
      if (session?.user) {
        clearStoredGuest();
      }
      updateAuthUI();
    });
  } catch (e) {
    console.warn('initializeAuth supabase error', e);
  }

  updateAuthUI();
}

function updateAuthUI() {
  const label = $("nav-auth-label");
  const cta = $("nav-auth-cta");
  if (!label || !cta) return;

  // Mobile header labels stay concise without changing the full desktop account action.
  // Edit display wording here; authentication behavior remains in the event handlers below.
  const setCtaLabels = (desktopLabel, mobileLabel = desktopLabel) => {
    cta.textContent = desktopLabel;
    cta.dataset.mobileLabel = mobileLabel;
  };

  if (signedInUser && signedInUser.email) {
    const displayName = signedInUser.email.split("@")[0];
    label.textContent = `Hi, ${displayName}`;
    setCtaLabels("Log out");
    return;
  }

  if (signedInUser && signedInUser.id && signedInUser.id.startsWith("guest-")) {
    label.textContent = "Guest mode";
    setCtaLabels("Switch account", "Switch");
    return;
  }

  label.textContent = "Log in";
  setCtaLabels("Continue as guest", "Guest");
}

function showAuthModal(mode = "login") {
  authMode = mode;
  const modal = $("auth-modal");
  if (!modal) return;

  const title = $("auth-title");
  const status = $("auth-status");
  const submitButton = $("auth-submit");
  const emailInput = $("auth-email");
  const passwordInput = $("auth-password");

  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.mode === mode);
  });

  if (title) {
    if (mode === "signup") title.textContent = "Create your account";
    else if (mode === "guest") title.textContent = "Continue as guest";
    else title.textContent = "Welcome back";
  }

  if (submitButton) {
    if (mode === "guest") {
      submitButton.textContent = "Enter guest mode";
    } else if (mode === "signup") {
      submitButton.textContent = "Create account";
    } else {
      submitButton.textContent = "Log in";
    }
  }

  if (emailInput) {
    emailInput.required = mode !== "guest";
    emailInput.placeholder = mode === "guest" ? "Guest mode doesn’t need an email" : "you@example.com";
  }

  if (passwordInput) {
    passwordInput.required = mode !== "guest";
    passwordInput.placeholder = mode === "guest" ? "No password needed" : "Enter a secure password";
  }

  status.textContent = mode === "guest"
    ? "Guest mode works instantly and keeps your session local to this device."
    : "Use your Supabase email and password to sign in or create an account.";

  // If a reset flow was open previously, restore the standard login form
  if (mode !== 'reset' && document.getElementById('auth-reset-marker')) {
    // rebuild default form (simpler than tracking partial edits)
    const form = $("auth-form");
    if (form) {
      form.innerHTML = `
        <label class="auth-field">
          <span>Email</span>
          <input id="auth-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
        </label>
        <label class="auth-field">
          <span>Password</span>
          <input id="auth-password" name="password" type="password" placeholder="Enter a secure password" autocomplete="current-password" required />
        </label>
        <div style="display:flex; justify-content:flex-end; margin-top:6px;">
          <button id="auth-forgot" class="text-btn" type="button">Forgot password?</button>
        </div>
        <button class="pill-btn wide auth-submit" id="auth-submit" type="submit">Continue</button>
      `;
      // rebind forgot button handler after rebuilding
      const fbtn = document.getElementById('auth-forgot');
      if (fbtn) fbtn.addEventListener('click', (e) => { e.preventDefault(); showResetPassword(); });
    }
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  if (mode === "guest") {
    if (emailInput) emailInput.value = "";
    if (passwordInput) passwordInput.value = "";
  }

  setTimeout(() => {
    const firstField = mode === "guest" ? $("auth-submit") : $("auth-email");
    if (firstField) firstField.focus();
  }, 40);
}

// Show the password reset UI inside the auth modal
function showResetPassword() {
  const modal = $('auth-modal');
  if (!modal) return;
  authMode = 'reset';
  const title = $('auth-title');
  const status = $('auth-status');
  const form = $('auth-form');
  if (title) title.textContent = 'Reset password';
  if (status) status.textContent = 'Enter your email and we will send a password reset link.';
  if (form) {
    form.innerHTML = `
      <div id="auth-reset-marker"></div>
      <label class="auth-field">
        <span>Email</span>
        <input id="auth-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required />
      </label>
      <div style="display:flex; gap:8px; margin-top:8px;">
        <button class="pill-btn wide" id="auth-reset-submit" type="button">Send reset link</button>
        <button class="ghost-btn" id="auth-reset-back" type="button">Back</button>
      </div>
    `;

    const submit = document.getElementById('auth-reset-submit');
    const back = document.getElementById('auth-reset-back');
    if (submit) submit.addEventListener('click', sendPasswordReset);
    if (back) back.addEventListener('click', () => showAuthModal('login'));
  }

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  setTimeout(() => { const e = $('auth-email'); if (e) e.focus(); }, 40);
}

async function sendPasswordReset() {
  const emailEl = $('auth-email');
  if (!emailEl) return;
  const email = emailEl.value.trim();
  if (!email) { setAuthStatus('Please enter your email address.', true); return; }

  setAuthStatus('Sending reset link...');
  const client = await ensureSupabaseClient(3000);
  if (!client) { setAuthStatus('Password reset is not available: Supabase not configured or failed to load.', true); return; }

  try {
    // Always return recovery links to the SPA root so a deep current route cannot become a broken callback URL.
    const passwordResetUrl = new URL(ROUTE_PATHS.home, window.location.origin).href;
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: passwordResetUrl });
    if (error) throw error;
    setAuthStatus('If an account exists for that email, a reset link has been sent. Check your inbox.');
  } catch (e) {
    console.error('Password reset error', e);
    setAuthStatus((e && e.message) ? `Error: ${e.message}` : 'Failed to send reset link. Please try again later.', true);
  }
}

function closeAuthModal() {
  const modal = $("auth-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  const status = $("auth-status");
  if (status) status.textContent = "";
}

function switchAuthMode(mode) {
  showAuthModal(mode);
}

function setAuthStatus(message, isError = false) {
  const status = $("auth-status");
  if (!status) return;
  status.textContent = message;
  status.style.color = isError ? "#ff8b9a" : "#d7d0d1";
}

async function submitAuthForm(event) {
  event.preventDefault();

  if (authMode === "guest") {
    const guestName = `Guest-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    signedInUser = {
      id: `guest-${Date.now()}`,
      email: null,
      user_metadata: { name: guestName }
    };
    writeStoredGuest(signedInUser);
    updateAuthUI();
    closeAuthModal();
    toast("Guest mode enabled ♡");
    return;
  }

  const emailInput = $("auth-email");
  const passwordInput = $("auth-password");
  const email = emailInput?.value.trim();
  const password = passwordInput?.value;

  if (!email || !password) {
    setAuthStatus("Please enter both email and password.", true);
    return;
  }

  // Ensure client is present, try loading the CDN if necessary
  setAuthStatus('Preparing authentication…');
  console.debug('submitAuthForm: starting', { authMode, email });
  const client = await ensureSupabaseClient(3000);
  if (!client) {
    console.error('submitAuthForm: supabase client not available', { SUPABASE_CONFIG });
    setAuthStatus("Supabase is not configured yet or failed to load. Replace the demo URL and anon key in index.html with your project values and ensure the Supabase script can load.", true);
    return;
  }

  try {
    setAuthStatus("Working on it…");
    console.debug('submitAuthForm: using client', { clientAvailable: !!client });
    const request = authMode === "signup"
      ? client.auth.signUp({ email, password })
      : client.auth.signInWithPassword({ email, password });

    const { data, error } = await request;
    console.debug('submitAuthForm: auth result', { data, error });
    if (error) {
      // Supabase v2 may return error objects with message or status
      const message = error?.message || error?.error_description || (error?.status ? `HTTP ${error.status}` : 'Authentication failed');
      throw new Error(message);
    }

    signedInUser = data?.user || null;
    if (signedInUser) {
      clearStoredGuest();
    }
    updateAuthUI();
    closeAuthModal();
    toast(authMode === "signup" ? "Account created successfully ♡" : "Logged in successfully ♡");
  } catch (error) {
    console.error('submitAuthForm: caught error', error);
    setAuthStatus((error && error.message) || "Something went wrong while authenticating.", true);
  }
}

async function logoutCurrentUser() {
  const storageGuest = readStoredGuest();
  if (storageGuest) clearStoredGuest();

  const client = getSupabaseClient();
  if (client) {
    try { await client.auth.signOut(); } catch (e) { console.warn('logout error', e); }
  }

  signedInUser = null;
  updateAuthUI();
  toast("Signed out");
}

// ========================================
// MOOD CARD RENDERING
// The mood class lets CSS change the pattern, glow and typography per mood.
// ========================================
function renderMoodCards(targetId) {
  const target = $(targetId);
  if (!target) return; // guarded for non-browser environments or missing elements
  target.innerHTML = Object.entries(moods).map(([key,m]) => `
    <button class="mood-card mood-${key}" style="--mood:${m.color}; --mood-title:${m.color};" onclick="selectMood('${key}')">
      <div class="mood-pattern-label">${m.title.toUpperCase()}</div>
      <div>
        <div class="mood-icon">${m.icon}</div>
        <h3 class="mood-title">${m.title}</h3>
        <div class="mood-desc">${m.desc}</div>
      </div>
      <div class="mood-bottom">
        <span class="intensity">${m.intensity}</span>
        <span class="play-link">PLAY →</span>
      </div>
    </button>
  `).join("");
}

// Apply a mood class to the large hero front card so it visually matches the mood palette.
function applyHeroMood(key) {
  if (typeof document === 'undefined') return;
  try {
    const el = document.querySelector('.hero-card.front-card');
    if (!el) return;
    // remove existing mood- classes
    Array.from(el.classList).filter(c => c.startsWith('mood-')).forEach(c => el.classList.remove(c));
    el.classList.add(`mood-${key}`);
    // Update label and hero sample question for visual consistency
    const lbl = el.querySelector('.card-label');
    if (lbl && moods[key]) {
      try {
        lbl.style.transition = 'opacity .28s ease';
        lbl.style.opacity = 0;
        setTimeout(() => { lbl.textContent = moods[key].title.toUpperCase(); lbl.style.opacity = 1; }, 140);
      } catch (e) { lbl.textContent = moods[key].title.toUpperCase(); }
    }
    const heroQ = el.querySelector('.hero-question');
    if (heroQ && moods[key] && Array.isArray(moods[key].questions) && moods[key].questions.length > 0) {
      try {
        heroQ.style.transition = 'opacity .32s ease';
        heroQ.style.opacity = 0;
        setTimeout(() => { heroQ.textContent = moods[key].questions[0][1]; heroQ.style.opacity = 1; }, 160);
      } catch (e) { heroQ.textContent = moods[key].questions[0][1]; }
    }
  } catch (e) { /* ignore errors in non-ideal DOM states */ }
}

// ========================================
// GAME SESSION STORAGE
// Persists only navigation-critical round state for refreshes in this tab.
// Card content remains sourced from moodQuestionSets and is never duplicated in storage.
// ========================================
function persistGameSession(status = gameSessionStatus) {
  if (typeof sessionStorage === "undefined" || !GAME_SESSION_STATUSES.has(status)) return;

  gameSessionStatus = status;
  const snapshot = {
    mood: selectedMood,
    length: selectedLength,
    index: currentIndex,
    skipped,
    playConfirmed,
    status
  };

  try {
    sessionStorage.setItem(GAME_SESSION_KEY, JSON.stringify(snapshot));
  } catch (error) {
    console.warn("Unable to persist the active game session.", error);
  }
}

// Restore a saved setup/round only when every required value is valid.
// Invalid or outdated data is removed so route guards can recover safely.
function restoreGameSession() {
  if (typeof sessionStorage === "undefined") return false;

  try {
    const raw = sessionStorage.getItem(GAME_SESSION_KEY);
    if (!raw) return false;

    const saved = JSON.parse(raw);
    const hasMood = Boolean(saved && moods[saved.mood]);
    const hasLength = cardLengthOptions.some(({ count }) => count === Number(saved?.length));
    const hasStatus = GAME_SESSION_STATUSES.has(saved?.status);
    if (!hasMood || !hasLength || !hasStatus) throw new Error("Invalid saved game state");

    const pool = getQuestionPool(saved.mood, Number(saved.length));
    const restoredCards = Array.isArray(pool)
      ? pool.slice(0, Number(saved.length)).filter(isValidCard)
      : [];
    if (restoredCards.length === 0) throw new Error("Saved deck is unavailable");

    selectedMood = saved.mood;
    selectedLength = Number(saved.length);
    currentCards = restoredCards;
    currentIndex = Math.max(0, Math.min(Number(saved.index) || 0, restoredCards.length - 1));
    skipped = Math.max(0, Math.min(Number(saved.skipped) || 0, restoredCards.length));
    playConfirmed = Boolean(saved.playConfirmed);
    gameSessionStatus = saved.status;
    return true;
  } catch (error) {
    sessionStorage.removeItem(GAME_SESSION_KEY);
    gameSessionStatus = "idle";
    console.warn("Discarded an invalid saved game session.", error);
    return false;
  }
}

// Clear only the current round. Guest identity and favorites use separate storage keys.
function clearGameSession() {
  if (typeof sessionStorage !== "undefined") sessionStorage.removeItem(GAME_SESSION_KEY);
  currentCards = [];
  currentIndex = 0;
  skipped = 0;
  flipped = false;
  favorite = false;
  playConfirmed = false;
  gameSessionStatus = "idle";
}

// ========================================
// ROUTE RESOLUTION
// Maps browser paths to existing SPA screens without changing the page markup.
// Add future public routes here before adding navigation calls elsewhere.
// ========================================
function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return ROUTE_PATHS.home;
  const normalized = pathname.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  return normalized || ROUTE_PATHS.home;
}

function resolveRoute(pathname) {
  const path = normalizePathname(pathname);
  if (path.startsWith(`${ROUTE_PATHS.course}/`)) {
    return { name: "course", slug: decodeURIComponent(path.slice(ROUTE_PATHS.course.length + 1)) };
  }

  const routeNames = {
    [ROUTE_PATHS.home]: "home",
    [ROUTE_PATHS.play]: "play",
    [ROUTE_PATHS.setup]: "setup",
    [ROUTE_PATHS.game]: "game",
    [ROUTE_PATHS.results]: "results",
    [ROUTE_PATHS.games]: "games",
    [ROUTE_PATHS.courses]: "courses",
    [ROUTE_PATHS.online]: "online",
    [ROUTE_PATHS.how]: "how",
    [ROUTE_PATHS.support]: "support"
  };

  return routeNames[path] ? { name: routeNames[path] } : { name: "not-found" };
}

// ========================================
// SCREEN ACTIVATION
// This is the only low-level function that changes which existing section is visible.
// Public show* functions below update browser history before reaching this boundary.
// ========================================
function activatePage(id, navigationType = "navigate") {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  const target = $(id);
  if (!target) return false;
  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: navigationType === "navigate" ? "smooth" : "auto" });
  return true;
}

// Update browser metadata after a route succeeds so deep pages and analytics stay accurate.
function updateRouteMetadata(route, url) {
  const titles = {
    home: "FLIRTYFLIP — Couple Games Online | Questions & Date Night Games.",
    play: "Choose a Mood — FLIRTYFLIP",
    setup: "Choose Your Deck — FLIRTYFLIP",
    game: "Playing — FLIRTYFLIP",
    results: "Date Night Complete — FLIRTYFLIP",
    games: "Games — FLIRTYFLIP",
    courses: "Courses — FLIRTYFLIP",
    course: "Course — FLIRTYFLIP",
    online: "Play Online — FLIRTYFLIP",
    how: "How It Works — FLIRTYFLIP",
    support: "Support — FLIRTYFLIP"
  };
  document.title = titles[route.name] || titles.home;

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = `${window.location.origin}${url.pathname}`;

  // Mark the owning primary navigation item for assistive technology and visual state.
  const activeGroup = route.name === 'course' ? 'courses'
    : ['setup', 'game', 'results'].includes(route.name) ? 'play'
      : route.name;
  document.querySelectorAll('[data-nav-route]').forEach((item) => {
    if (item.dataset.navRoute === activeGroup) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
}

// Send one Google Analytics page view for each distinct rendered SPA location.
// The initial gtag config disables its automatic page view to prevent double counting.
function trackRoutePageView(url) {
  const locationKey = `${url.pathname}${url.search}`;
  if (lastTrackedLocation === locationKey) return;
  lastTrackedLocation = locationKey;

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: locationKey,
      page_location: url.href,
      page_title: document.title
    });
  }
}

// Replace a blocked or unknown URL and immediately render its safe destination.
function redirectRoute(path) {
  window.history.replaceState({ flirtyFlipRoute: true }, "", path);
  renderCurrentRoute("replace");
}

// ========================================
// ROUTE RENDERER AND GUARDS
// Renders existing screens for the current URL. /game and /results require valid session state.
// Back, Forward, direct links and refreshes all pass through this function.
// ========================================
function renderCurrentRoute(navigationType = "navigate") {
  const url = new URL(window.location.href);
  const route = resolveRoute(url.pathname);

  if (route.name === "not-found") return redirectRoute(ROUTE_PATHS.home);
  if (route.name === "setup" && gameSessionStatus === "idle") return redirectRoute(ROUTE_PATHS.play);
  if (route.name === "game" && !["active", "complete"].includes(gameSessionStatus)) return redirectRoute(ROUTE_PATHS.play);
  if (route.name === "results" && gameSessionStatus !== "complete") return redirectRoute(ROUTE_PATHS.play);
  if (route.name === "course" && !coursesData[route.slug]) return redirectRoute(ROUTE_PATHS.courses);
  if (route.name === "games" && url.searchParams.get("game") && !getGameCatalogItem(url.searchParams.get("game"))) return redirectRoute(ROUTE_PATHS.games);
  if (route.name === "course" && url.searchParams.has("lesson")) {
    const requestedLesson = Number(url.searchParams.get("lesson")) - 1;
    if (!Number.isInteger(requestedLesson) || !getFlatCourseLessons(coursesData[route.slug])[requestedLesson]) {
      return redirectRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(route.slug)}`);
    }
  }

  if (route.name === "home") activatePage("home", navigationType);
  if (route.name === "play") {
    renderMoodCards("mood-list");
    activatePage("moods", navigationType);
  }
  if (route.name === "setup") {
    renderSetupScreen();
    activatePage("setup", navigationType);
  }
  if (route.name === "game") {
    $("game-mood-label").textContent = moods[selectedMood].title.toUpperCase();
    updateGame(true);
    activatePage("game", navigationType);
  }
  if (route.name === "results") {
    renderResultsScreen();
    activatePage("complete", navigationType);
  }
  if (route.name === "games") {
    if (url.searchParams.get("view") === "favorites") renderFavoritesCatalog();
    else if (url.searchParams.get("game")) renderGameDetail(url.searchParams.get("game"));
    else renderGamesCatalog(url.searchParams.get("filter") || "all");
    activatePage("catalog", navigationType);
  }
  if (route.name === "courses") {
    renderCoursesCatalog(url.searchParams.get("filter") || "all");
    activatePage("catalog", navigationType);
  }
  if (route.name === "course") {
    const requestedLesson = url.searchParams.has("lesson") ? Number(url.searchParams.get("lesson")) - 1 : null;
    if (requestedLesson === null) renderCourseDetail(route.slug);
    else renderCourseLesson(route.slug, requestedLesson);
    activatePage("catalog", navigationType);
  }
  if (route.name === "online") {
    renderOnlineRoute(url);
    activatePage("online", navigationType);
  }
  if (route.name === "how") activatePage("how", navigationType);
  if (route.name === "support") {
    renderSupportContent(url.searchParams.get("section") || "index");
    activatePage("support", navigationType);
  }

  updateRouteMetadata(route, url);
  trackRoutePageView(url);
}

// Push or replace a same-origin SPA location, then render it through the shared router.
function navigateToRoute(path, { replace = false } = {}) {
  const target = new URL(path, window.location.origin);
  if (target.origin !== window.location.origin) return;
  const destination = `${target.pathname}${target.search}${target.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const method = replace || destination === current ? "replaceState" : "pushState";
  window.history[method]({ flirtyFlipRoute: true }, "", destination);
  renderCurrentRoute(method === "pushState" ? "navigate" : "replace");
}

// Initialize route state once after all screen data and handlers are available.
function initializeRouter() {
  if (routerInitialized) return;
  routerInitialized = true;
  restoreGameSession();
  window.addEventListener("popstate", () => renderCurrentRoute("popstate"));
  window.history.replaceState({ flirtyFlipRoute: true }, "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
  renderCurrentRoute("initial");
}

// ========================================
// PUBLIC NAVIGATION API
// Existing inline controls call these helpers; each now keeps History API state in sync.
// ========================================
function showHome() { navigateToRoute(ROUTE_PATHS.home); }
function showMoods() { navigateToRoute(ROUTE_PATHS.play); }
function showHow() { navigateToRoute(ROUTE_PATHS.how); }

// ========================================
// ONLINE LOBBY ENTRY
// If a room code exists in the URL, the visitor is treated as the partner.
// ========================================
function renderOnlineRoute(url) {
  const room = url.searchParams.get("room");
  onlineRole = room ? "guest" : "host";
  onlineRoomCode = room || "";
  renderOnlineMoodStep();
}

function showOnline() {
  const currentUrl = new URL(window.location.href);
  const room = currentUrl.pathname === ROUTE_PATHS.online ? currentUrl.searchParams.get("room") : "";
  navigateToRoute(room ? `${ROUTE_PATHS.online}?room=${encodeURIComponent(room)}` : ROUTE_PATHS.online);
}


// ========================================
// ONLINE FLOW
// Step 1: choose mood.
// ========================================
function renderOnlineMoodStep() {
  const roomLabel = onlineRole === "guest" ? `<div class="join-badge">ROOM ${onlineRoomCode} · JOINING AS PARTNER</div>` : "";
  $("online-content").innerHTML = `
    ${roomLabel}
    <div class="online-card-grid">
      ${Object.entries(moods).map(([key,m]) => `
        <button class="online-mood mood-${key} ${onlineMood === key ? "selected" : ""}" style="--mood:${m.color}; --mood-title:${m.color};" onclick="chooseOnlineMood('${key}')">
          <span>${m.icon}</span><strong>${m.title}</strong><small>${m.intensity}</small>
        </button>
      `).join("")}
    </div>
    <button class="pill-btn wide" onclick="renderOnlineLengthStep()">Continue →</button>
  `;
  updateOnlineSteps(1);
}

// ========================================
// ONLINE FLOW
// Step 2: choose number of cards.
// ========================================
function chooseOnlineMood(key) {
  onlineMood = key;
  renderOnlineMoodStep();
}

function renderOnlineLengthStep() {
  // Use cardLengthOptions so each button's text can be edited from the config above.
  const buttonsHtml = cardLengthOptions.map(opt => `
    <button class="length-btn ${onlineLength === opt.count ? "selected" : ""}" onclick="chooseOnlineLength(this,${opt.count})">${opt.title}<br><small>${opt.subtitle}</small></button>
  `).join("");

  $("online-content").innerHTML = `
    <div class="selected-vibe">${moods[onlineMood].icon} ${moods[onlineMood].title} mode</div>
    <h3 class="online-title">How long should your night be?</h3>
    <div class="length-options online-lengths">
      ${buttonsHtml}
    </div>
    <button class="pill-btn wide" onclick="createOnlineRoom()">Create room →</button>
  `;
  updateOnlineSteps(2);
}

// ========================================
// ONLINE FLOW
// Step 2 selection helper.
// ========================================
function chooseOnlineLength(btn, length) {
  document.querySelectorAll(".online-lengths .length-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  onlineLength = length;
}

// ========================================
// ONLINE FLOW
// Step 3: create or join a shareable room.
// ========================================
function createOnlineRoom() {
  if (!onlineRoomCode) onlineRoomCode = Math.random().toString(36).slice(2, 8).toUpperCase();
  const roomUrl = new URL(ROUTE_PATHS.online, window.location.origin);
  roomUrl.searchParams.set("room", onlineRoomCode);
  window.history.replaceState({ flirtyFlipRoute: true }, "", `${roomUrl.pathname}${roomUrl.search}`);
  updateRouteMetadata({ name: "online" }, roomUrl);
  trackRoutePageView(roomUrl);
  renderOnlineWaiting(roomUrl.href);
}

function renderOnlineWaiting(url) {
  const guestText = onlineRole === "guest" ? "You joined the shared room." : "Send this link to your partner. When the realtime connection is added, this screen will update automatically.";
  $("online-content").innerHTML = `
    <div class="room-card">
      <div class="room-orb">♡</div>
      <div class="eyebrow">ROOM READY</div>
      <div class="room-code">${onlineRoomCode}</div>
      <p>${guestText}</p>
      <div class="share-row">
        <input id="share-link" readonly value="${url}">
        <button class="pill-btn" onclick="copyRoomLink()">Copy link</button>
      </div>
      <div class="connection-status" id="connection-status">
        <span class="status-dot"></span> WAITING FOR PARTNER
      </div>
      <div class="connected-preview" id="connected-preview">❤️ BOTH CONNECTED</div>
      <button class="pill-btn wide" onclick="startOnlineGame()">START GAME →</button>
    </div>
  `;
  updateOnlineSteps(3);
}

// ========================================
// ONLINE SHARE ACTION
// Copies the room URL without needing an external service.
// ========================================
async function copyRoomLink() {
  const input = $("share-link");
  try {
    await navigator.clipboard.writeText(input.value);
    toast("Room link copied ♡");
  } catch (error) {
    input.select();
    document.execCommand("copy");
    toast("Room link copied ♡");
  }
}

// ========================================
// ONLINE FLOW
// Visual step indicator.
// ========================================
function updateOnlineSteps(activeStep) {
  document.querySelectorAll(".online-step").forEach((step, index) => {
    step.classList.toggle("active", index < activeStep);
  });
}

// ========================================
// ONLINE GAME START
// Reuses the existing game engine so online play feels identical to local play.
// ========================================
function startOnlineGame() {
  selectedMood = onlineMood;
  selectedLength = onlineLength;
  gameSessionStatus = "setup";
  persistGameSession("setup");
  startGame();
}

function selectMood(key) {
  if (!moods[key]) return;
  selectedMood = key;
  selectedLength = cardLengthOptions[0].count;
  currentCards = [];
  currentIndex = 0;
  skipped = 0;
  gameSessionStatus = "setup";
  applyHeroMood(key);
  persistGameSession("setup");
  navigateToRoute(ROUTE_PATHS.setup);
}

// ========================================
// LOCAL GAME SETUP RENDERER
// Rebuilds the selected mood and card length after navigation or a page refresh.
// Edit deck option copy in cardLengthOptions rather than inside this template.
// ========================================
function renderSetupScreen() {
  const m = moods[selectedMood];
  if (!m) return;

  // Render setup screen using cardLengthOptions so each option's text is easy to edit.
  const lengthButtons = cardLengthOptions.map((opt) => `
    <button class="length-btn ${selectedLength === opt.count ? 'selected' : ''}" onclick="chooseLength(this,${opt.count})">${opt.title}<br><small>${opt.subtitle}</small></button>
  `).join('');

  $("setup-content").innerHTML = `
    <div class="setup-icon">${m.icon}</div>
    <div class="eyebrow">${m.title.toUpperCase()} MODE</div>
    <h2 class="setup-title">${m.title}</h2>
    <p class="setup-desc">${m.desc}</p>
    ${selectedMood === "spicy" ? `<p class="setup-desc"><strong>18+ only.</strong> Every card is optional. Consent first, always.</p>` : ""}
    <div class="length-options">
      ${lengthButtons}
    </div>
    <button class="pill-btn start-btn" onclick="startGame()">Start ${m.title} →</button>
  `;
}

function chooseLength(btn, length) {
  if (!cardLengthOptions.some(({ count }) => count === Number(length))) return;
  document.querySelectorAll("#setup .length-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedLength = Number(length);
  persistGameSession("setup");
}

// ========================================
// GAME STARTUP
// Validates confirmation and deck availability, initializes round state, then enters /game.
// Edit startup rules here; edit selectable deck labels in cardLengthOptions above.
// ========================================
function startGame() {
  // Require explicit confirmation before starting a play session
  if (!playConfirmed) {
    showPlayConfirmation();
    return;
  }

// ========================================
// LOAD CARDS IN EXACT ARRAY ORDER
// ----------------------------------------
// Question #1 in the deck → Card 1
// Question #2 in the deck → Card 2
// Question #3 in the deck → Card 3
// etc.
// ========================================

const pool = getQuestionPool(selectedMood, selectedLength);

  if (!Array.isArray(pool) || pool.length === 0) {
    console.error(`Cannot start game: ${selectedMood}/${selectedLength} has no cards.`);
    toast("This deck is not available yet.");
    return;
  }

  currentCards = pool.slice(0, selectedLength).filter(isValidCard);
  if (currentCards.length === 0) {
    console.error(`Cannot start game: ${selectedMood}/${selectedLength} has no valid cards.`);
    toast("This deck is not available yet.");
    return;
  }

  currentIndex = 0;
  skipped = 0;
  flipped = false;
  favorite = false;
  $("favorite-btn").textContent = "♡";
  $("favorite-btn").setAttribute("aria-label", "Save this card to favorites");
  $("game-mood-label").textContent = moods[selectedMood].title.toUpperCase();
  updateGame(true);
  persistGameSession("active");
  navigateToRoute(ROUTE_PATHS.game);
}

// Show the play confirmation modal (age + consent checks)
function showPlayConfirmation() {
  const modal = document.getElementById('play-confirm-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  // reset inputs
  const age = modal.querySelector('#confirm-age');
  const consent = modal.querySelector('#confirm-consent');
  if (age) age.checked = false;
  if (consent) consent.checked = false;
  setTimeout(() => { if (age) age.focus(); }, 40);
}

function closePlayConfirm() {
  const modal = document.getElementById('play-confirm-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function confirmAndStart() {
  const modal = document.getElementById('play-confirm-modal');
  if (!modal) return;
  const age = modal.querySelector('#confirm-age');
  const consent = modal.querySelector('#confirm-consent');
  if (!age || !consent) return;
  if (!age.checked || !consent.checked) {
    toast('Please confirm both statements to continue.');
    return;
  }
  playConfirmed = true;
  closePlayConfirm();
  // start the game now that the user confirmed
  startGame();
}

// ========================================
// GAME CARD RENDERING
// Every new card starts revealed so there is never a second click just to open it.
// ========================================
function updateGame(reveal = true) {
  const totalCards = currentCards.length;
  if (totalCards === 0) {
    console.error("Cannot update game without an active deck.");
    return;
  }

  currentIndex = Math.max(0, Math.min(currentIndex, totalCards - 1));
  const card = currentCards[currentIndex];
  if (!isValidCard(card)) {
    console.error(`Invalid card at position ${currentIndex + 1}.`);
    return;
  }

  const scene = $("card-scene");
  $("game-count").textContent = `${currentIndex + 1} / ${totalCards}`;
  $("progress-fill").style.width = `${((currentIndex + 1) / totalCards) * 100}%`;
  const progress = $("game-progress");
  if (progress) {
    progress.setAttribute("aria-valuemax", String(totalCards));
    progress.setAttribute("aria-valuenow", String(currentIndex + 1));
  }
  $("front-category").textContent = moods[selectedMood].title.toUpperCase();
  $("front-number").textContent = String(currentIndex + 1).padStart(2,"0");
  $("prompt-type").textContent = card[0];
  $("question-text").textContent = card[1];
  $("game-hint").textContent = reveal ? "Tap for the next card" : "Tap to reveal";

  // Update favorite button state based on persisted favorites for this card
  const currentText = card ? card[1] : null;
  const isFav = isFavoriteCard(currentText);
  favorite = isFav;
  const favBtn = $("favorite-btn");
  if (favBtn) {
    favBtn.textContent = isFav ? "♥" : "♡";
    favBtn.setAttribute("aria-label", isFav ? "Remove this card from favorites" : "Save this card to favorites");
  }

  // Apply the selected mood to the card so its pattern and glow change with the deck.
  scene.className = `card-scene mood-${selectedMood}${reveal ? " revealed" : ""}`;
  flipped = reveal;

  const previousButton = $("previous-card-btn");
  const nextButton = $("next-card-btn");
  if (previousButton) previousButton.disabled = currentIndex === 0;
  if (nextButton) nextButton.innerHTML = currentIndex === totalCards - 1 ? 'FINISH <span>→</span>' : 'NEXT CARD <span>→</span>';

  if (gameSessionStatus === "active") persistGameSession("active");
}

// ========================================
// GAME CARD INTERACTION
// Tap card -> sweep away -> next card appears already revealed.
// ========================================
function flipCard() {
  if (!flipped || cardTransitioning) return nextCard();
  advanceCardWithSweep();
}

let cardTransitioning = false;

// ========================================
// CARD SWEEP TRANSITION
// Uses animationend instead of chained timers so state changes match the actual rendered motion.
// Both directions share this controller; CSS owns timing and reduced-motion behavior.
// ========================================
function setGameControlsDisabled(disabled) {
  [$("previous-card-btn"), $("skip-card-btn"), $("next-card-btn")].filter(Boolean).forEach((button) => {
    button.disabled = disabled;
  });
}

function transitionCard(direction) {
  if (cardTransitioning || ![-1, 1].includes(direction)) return;
  if (direction > 0 && currentIndex >= currentCards.length - 1) return finishGame();
  if (direction < 0 && currentIndex <= 0) return;

  const scene = $("card-scene");
  if (!scene) return;
  const exitClass = direction > 0 ? "sweeping" : "sweeping-back";
  const enterClass = direction > 0 ? "card-enter" : "card-enter-back";
  let phase = "exit";

  cardTransitioning = true;
  setGameControlsDisabled(true);
  scene.setAttribute("aria-busy", "true");
  $("game-hint").textContent = direction > 0 ? "Next card…" : "Previous card…";

  const handleAnimationEnd = (event) => {
    if (event.target !== scene) return;

    if (phase === "exit") {
      phase = "enter";
      currentIndex += direction;
      updateGame(true);
      scene.classList.add(enterClass);
      return;
    }

    scene.classList.remove(enterClass);
    scene.removeEventListener("animationend", handleAnimationEnd);
    scene.removeAttribute("aria-busy");
    cardTransitioning = false;
    setGameControlsDisabled(false);
    const previousButton = $("previous-card-btn");
    if (previousButton) previousButton.disabled = currentIndex === 0;
  };

  scene.addEventListener("animationend", handleAnimationEnd);
  scene.classList.add(exitClass);
}

function advanceCardWithSweep() {
  transitionCard(1);
}

function retreatCardWithSweep() {
  transitionCard(-1);
}

function prevCard() {
  retreatCardWithSweep();
}

// ========================================
// NEXT CARD BUTTON
// Uses the exact same sweep animation as tapping the card.
// ========================================
function nextCard() {
  advanceCardWithSweep();
}

function skipCard() {
  if (cardTransitioning) return;
  skipped++;
  persistGameSession("active");
  toast("Card skipped — no pressure ♡");
  nextCard();
}

// ========================================
// FAVORITES
// Toggle the current prompt as a favorite.
// ========================================
function toggleFavorite() {
  const card = currentCards[currentIndex];
  const text = card ? card[1] : null;
  const added = toggleFavoriteForCard(text);
  const favBtn = $("favorite-btn");
  if (favBtn) {
    favBtn.textContent = added ? "♥" : "♡";
    favBtn.setAttribute("aria-label", added ? "Remove this card from favorites" : "Save this card to favorites");
  }
  toast(added ? "Saved to favorites ♡" : "Removed from favorites");
}

// ========================================
// GAME COMPLETION
// Show the final stats after the last card.
// ========================================
function renderResultsScreen() {
  const played = Math.max(0, currentCards.length - skipped);
  $("stat-played").textContent = played;
  $("stat-skipped").textContent = skipped;
  $("stat-mood").textContent = moods[selectedMood].icon;
  $("complete-copy").textContent = `You played ${played} cards together. The best part was probably the conversation after them.`;
}

function finishGame() {
  renderResultsScreen();
  persistGameSession("complete");
  navigateToRoute(ROUTE_PATHS.results);
}

function restartGame() { startGame(); }

function confirmExit(){ $("modal").classList.remove("hidden"); }
function closeModal(){ $("modal").classList.add("hidden"); }

// Confirmed exits remove the resumable round before returning to mood selection.
function exitGameToMoods() {
  closeModal();
  clearGameSession();
  showMoods();
}

let toastTimer;
function toast(message){
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove("show"), 1800);
}

// ========================================
// INITIAL PAGE SETUP
// Render the mood choices as soon as the page loads (only in browser).
// ========================================
if (typeof document !== 'undefined') {
  // render after a short delay to let other scripts set up
  setTimeout(() => { renderMoodCards("home-moods"); applyHeroMood(selectedMood); }, 10);
}

function bindAuthEvents() {
  const navLabel = $("nav-auth-label");
  const navCta = $("nav-auth-cta");
  const authClose = $("auth-close");
  const authForm = $("auth-form");
  const authTabs = document.querySelectorAll(".auth-tab");
  const navFav = $("nav-favorites");
  const authForgotBtn = $("auth-forgot");
  
  if (navLabel) {
    navLabel.addEventListener("click", () => showAuthModal("login"));
  }
  
  if (navCta) {
    navCta.addEventListener("click", () => {
      if (signedInUser && signedInUser.email) {
        logoutCurrentUser();
        return;
      }
      if (signedInUser && signedInUser.id && signedInUser.id.startsWith("guest-")) {
        showAuthModal("login");
        return;
      }
      showAuthModal("guest");
    });
  }

  if (authForgotBtn) {
    authForgotBtn.addEventListener('click', (e) => { e.preventDefault(); showResetPassword(); });
  }

  if (navFav) {
    navFav.addEventListener('click', showFavorites);
  }

  if (authClose) {
    authClose.addEventListener("click", closeAuthModal);
  }

  authTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchAuthMode(tab.dataset.mode));
  });

  if (authForm) {
    authForm.addEventListener("submit", submitAuthForm);
  }
}

if (typeof document !== 'undefined') {
  bindGlobalUI();
  bindAuthEvents();
  // Initialize favorites badge from storage
  updateFavoritesBadge();
  initializeAuth();
  bindNavEvents();
  bindCatalogEvents();
  initializeRouter();
}

// ========================================
// HEADER AND MOBILE NAVIGATION
// Desktop dropdowns, the focus-trapped mobile drawer and shared route links are bound here once.
// Edit navigation destinations in index.html; edit interaction behavior in bindNavEvents().
// ========================================

// ========================================
// SHARED CATALOG SHELL
// Configures the reusable header and Back action for games, courses and detail views.
// Renderers should call this once before writing catalog-content.
// ========================================
function configureCatalogShell({ eyebrow, title, subtitle, backRoute = ROUTE_PATHS.home, hideHeader = false, view = "catalog" }) {
  const page = $("catalog");
  const heading = page?.querySelector(".page-heading");
  if (!page || !heading) return;

  page.dataset.catalogView = view;
  heading.hidden = hideHeader;
  $("catalog-eyebrow").textContent = eyebrow;
  $("catalog-heading").textContent = title;
  $("catalog-sub").textContent = subtitle;
  catalogBackRoute = backRoute;
}

// ========================================
// GAMES CATALOG COMPONENTS
// Visual discovery cards are generated from gameCatalogData and existing mood metadata.
// Filters and detail links stay in the URL so reload and browser history remain deterministic.
// ========================================
function renderIntensity(intensity) {
  if (!intensity) return "";
  const level = (intensity.match(/★/g) || []).length;
  return `<span class="intensity-meter" aria-label="Intensity ${level} out of 5">${escapeHtml(intensity)}</span>`;
}

function renderGameCard(game) {
  const route = `${ROUTE_PATHS.games}?game=${encodeURIComponent(game.id)}`;
  return `
    <article class="discovery-card" style="--game-accent:${escapeHtml(moods[game.moodKey]?.color || '#ff2449')}">
      <div class="discovery-card__art" aria-hidden="true"><span>${escapeHtml(game.icon)}</span></div>
      <div class="discovery-card__body">
        <div class="card-kicker">${escapeHtml(game.categories[0].replace(/-/g, ' '))}</div>
        <h3>${escapeHtml(game.title)}</h3>
        <p>${escapeHtml(game.description)}</p>
        <div class="metadata-row" aria-label="Game details">
          <span>2 players</span><span>${escapeHtml(game.duration)}</span><span>${escapeHtml(String(game.deckSize))} cards</span>
        </div>
      </div>
      <div class="discovery-card__footer">
        ${renderIntensity(game.intensity)}
        <a class="card-cta" href="${route}" data-route="${route}">View game <span aria-hidden="true">→</span></a>
      </div>
    </article>
  `;
}

function renderFeaturedGame(game) {
  const route = `${ROUTE_PATHS.games}?game=${encodeURIComponent(game.id)}`;
  return `
    <article class="featured-game" style="--game-accent:${escapeHtml(moods[game.moodKey]?.color || '#ff2449')}">
      <div class="featured-game__art" aria-hidden="true"><span>${escapeHtml(game.icon)}</span><small>FEATURED</small></div>
      <div class="featured-game__content">
        <div class="card-kicker">Date-night favorite</div>
        <h2>${escapeHtml(game.title)}</h2>
        <p>${escapeHtml(game.description)}</p>
        <div class="metadata-row" aria-label="Featured game details">
          <span>2 players</span><span>${escapeHtml(game.duration)}</span><span>${escapeHtml(String(game.deckSize))} cards</span>
        </div>
        <div class="featured-game__actions">
          ${renderIntensity(game.intensity)}
          <a class="pill-btn" href="${route}" data-route="${route}">Explore game →</a>
        </div>
      </div>
    </article>
  `;
}

function renderGamesCatalog(filterId = "all") {
  const selectedFilter = gameFilterOptions.some(({ id }) => id === filterId) ? filterId : "all";
  const games = gameCatalogData.map(({ id }) => getGameCatalogItem(id)).filter(Boolean);
  const filteredGames = selectedFilter === "all"
    ? games
    : games.filter(({ categories }) => categories.includes(selectedFilter));
  const featured = filteredGames.find(({ featured }) => featured);
  const gridGames = featured ? filteredGames.filter(({ id }) => id !== featured.id) : filteredGames;

  configureCatalogShell({
    eyebrow: "GAMES",
    title: "Find your next date-night game.",
    subtitle: "Choose a quick laugh, a deeper conversation or something with more spark.",
    view: "games"
  });

  $("catalog-content").innerHTML = `
    <div class="filter-strip" role="toolbar" aria-label="Filter games">
      ${gameFilterOptions.map(({ id, label }) => `
        <button class="filter-chip" type="button" data-action="filter-games" data-filter="${id}" aria-pressed="${selectedFilter === id}">${escapeHtml(label)}</button>
      `).join("")}
    </div>
    ${featured ? renderFeaturedGame(featured) : ""}
    <div class="catalog-section-heading">
      <div><div class="eyebrow">${selectedFilter === "all" ? "ALL GAMES" : escapeHtml(gameFilterOptions.find(({ id }) => id === selectedFilter)?.label || "GAMES")}</div><h2>Pick what feels right tonight.</h2></div>
      <p>${filteredGames.length} playable ${filteredGames.length === 1 ? "experience" : "experiences"}</p>
    </div>
    <div class="discovery-grid">
      ${gridGames.length ? gridGames.map(renderGameCard).join("") : '<div class="empty-state"><h3>No games in this filter yet.</h3><p>Try another category to keep exploring.</p></div>'}
    </div>
  `;
}

// ========================================
// GAME DETAIL EXPERIENCE
// Uses existing mood descriptions and real deck previews; Start Game enters the current engine.
// Online is routed to the lobby because it does not use a local question deck.
// ========================================
function renderGameDetail(gameId) {
  const game = getGameCatalogItem(gameId);
  if (!game) return;
  const previewCards = game.moodKey ? getQuestionPool(game.moodKey, Number(game.deckSize)).slice(0, 3).filter(isValidCard) : [];

  configureCatalogShell({
    eyebrow: "GAME",
    title: game.title,
    subtitle: game.description,
    backRoute: ROUTE_PATHS.games,
    hideHeader: true,
    view: "game-detail"
  });

  $("catalog-content").innerHTML = `
    <article class="game-detail" style="--game-accent:${escapeHtml(moods[game.moodKey]?.color || '#ff2449')}">
      <div class="game-detail__art" aria-hidden="true"><span>${escapeHtml(game.icon)}</span><small>FLIRTYFLIP</small></div>
      <div class="game-detail__hero">
        <div class="card-kicker">${escapeHtml(game.categories[0].replace(/-/g, ' '))}</div>
        <h1>${escapeHtml(game.title)}</h1>
        <p class="game-detail__hook">${escapeHtml(game.description)}</p>
        <div class="detail-stats">
          <div><span>Players</span><strong>2</strong></div>
          <div><span>Duration</span><strong>${escapeHtml(game.duration)}</strong></div>
          <div><span>Deck</span><strong>${escapeHtml(String(game.deckSize))}${game.online ? '' : ' cards'}</strong></div>
          <div><span>Intensity</span><strong>${game.intensity ? renderIntensity(game.intensity) : 'Flexible'}</strong></div>
        </div>
        <button class="pill-btn detail-primary" type="button" data-action="start-catalog-game" data-game="${escapeHtml(game.id)}">${game.online ? 'Open lobby' : 'Start game'} →</button>
      </div>
      <section class="expect-panel">
        <div class="eyebrow">WHAT TO EXPECT</div>
        <h2>${game.online ? 'A simple room setup for two.' : 'A focused deck with room to talk.'}</h2>
        <p>${game.online ? 'Choose a mood and deck length, then share the generated room link with your partner.' : 'Cards appear in a deliberate order. Take turns reading them aloud, skip anything freely and save prompts you want to revisit.'}</p>
      </section>
      ${previewCards.length ? `
        <section class="prompt-preview">
          <div class="catalog-section-heading"><div><div class="eyebrow">CARD PREVIEW</div><h2>A glimpse inside the deck.</h2></div></div>
          <div class="prompt-preview__grid">
            ${previewCards.map((card, index) => `<article><span>${escapeHtml(card[0])} · ${String(index + 1).padStart(2, '0')}</span><p>${escapeHtml(card[1])}</p></article>`).join('')}
          </div>
        </section>
      ` : ''}
    </article>
  `;
}

function launchCatalogGame(gameId) {
  const game = getGameCatalogItem(gameId);
  if (!game) return;
  if (game.online) return showOnline();

  selectedMood = game.moodKey;
  selectedLength = Number(game.deckSize);
  currentCards = [];
  currentIndex = 0;
  skipped = 0;
  gameSessionStatus = "setup";
  applyHeroMood(selectedMood);
  persistGameSession("setup");
  startGame();
}

// ========================================
// COURSE CATALOG COMPONENTS
// Cards use centralized course data and show real local progress only when it exists.
// Discovery filters include subject areas so gender is never the sole navigation path.
// ========================================
function renderCourseProgress(courseId, compact = false) {
  const percent = getCourseProgressPercent(courseId);
  if (percent === null) return "";
  return `
    <div class="course-progress ${compact ? 'course-progress--compact' : ''}">
      <div class="course-progress__label"><span>Course progress</span><strong>${percent}%</strong></div>
      <div class="course-progress__track"><span style="width:${percent}%"></span></div>
    </div>
  `;
}

function renderCourseCard(course) {
  const lessons = getFlatCourseLessons(course);
  const progress = getCourseProgress(course.id);
  const route = `${ROUTE_PATHS.course}/${encodeURIComponent(course.id)}`;
  return `
    <article class="course-card">
      <div class="course-card__top">
        <span class="course-audience">${escapeHtml(course.category || 'Course')}</span>
        <span class="course-monogram" aria-hidden="true">${escapeHtml(course.title.charAt(0))}</span>
      </div>
      <div class="course-card__body">
        <h3>${escapeHtml(course.title)}</h3>
        <p>${escapeHtml(course.summary || course.subtitle || '')}</p>
        <div class="metadata-row" aria-label="Course details">
          <span>${lessons.length} lessons</span>${course.time ? `<span>${escapeHtml(course.time)}</span>` : ''}
        </div>
        ${renderCourseProgress(course.id, true)}
      </div>
      <a class="course-card__cta" href="${route}" data-route="${route}">${progress ? 'Continue course' : 'View course'} <span aria-hidden="true">→</span></a>
    </article>
  `;
}

function renderCoursesCatalog(filterId = 'all') {
  const selectedFilter = courseFilterOptions.some(({ id }) => id === filterId) ? filterId : 'all';
  const courses = Object.values(coursesData).filter((course) => selectedFilter === 'all' || course.tags?.includes(selectedFilter));

  configureCatalogShell({
    eyebrow: 'COURSES',
    title: 'Build a stronger relationship.',
    subtitle: 'Short, focused learning paths for better communication, romance and connection.',
    view: 'courses'
  });

  $('catalog-content').innerHTML = `
    <div class="filter-strip" role="toolbar" aria-label="Filter courses">
      ${courseFilterOptions.map(({ id, label }) => `
        <button class="filter-chip" type="button" data-action="filter-courses" data-filter="${id}" aria-pressed="${selectedFilter === id}">${escapeHtml(label)}</button>
      `).join('')}
    </div>
    <div class="catalog-section-heading">
      <div><div class="eyebrow">LEARNING PATHS</div><h2>Grow closer, one lesson at a time.</h2></div>
      <p>${courses.length} ${courses.length === 1 ? 'course' : 'courses'}</p>
    </div>
    <div class="course-grid">
      ${courses.length ? courses.map(renderCourseCard).join('') : '<div class="empty-state"><h3>No courses in this filter yet.</h3><p>Try another topic to keep learning.</p></div>'}
    </div>
  `;
}

// ========================================
// COURSE LESSON PARSING
// Extracts a readable title and paragraphs from existing lesson strings without rewriting content.
// Future structured lesson fields can replace this helper while keeping the reader component intact.
// ========================================
function parseCourseLesson(content, fallbackTitle = 'Lesson') {
  const value = String(content || '').trim();
  const match = value.match(/^\s*(?:\d+\.\s*)?([^–—-]+?)\s*-\s*(.*)$/s);
  return {
    title: (match?.[1] || value || fallbackTitle).trim(),
    body: (match?.[2] || '').trim()
  };
}

function getLessonSummary(content) {
  const lesson = parseCourseLesson(content);
  if (!lesson.body) return 'Open this lesson to read the available material.';
  const firstSentence = lesson.body.match(/^.*?[.!?](?:\s|$)/)?.[0] || lesson.body;
  return firstSentence.length > 170 ? `${firstSentence.slice(0, 167).trim()}…` : firstSentence.trim();
}

function formatLessonParagraphs(body) {
  if (!body) return '<p class="lesson-unavailable">Detailed lesson content is not available yet.</p>';
  const sentences = body.split(/(?<=[.!?])\s+/).filter(Boolean);
  const paragraphs = [];

  for (let index = 0; index < sentences.length; index += 2) {
    paragraphs.push(sentences.slice(index, index + 2).join(' '));
  }

  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
}

// ========================================
// CATALOG ROUTING AND RENDERING
// Public catalog actions encode optional headings in the URL; renderCatalog builds existing markup.
// This separation lets /games and /courses survive refreshes without pushing history during render.
// ========================================
function showCatalog(type = 'games', heading = '') {
  const path = type === 'courses' ? ROUTE_PATHS.courses : ROUTE_PATHS.games;
  navigateToRoute(path);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}

function renderCatalog(type = 'games') {
  if (type === 'courses') renderCoursesCatalog('all');
  else renderGamesCatalog('all');
}

// Favorites reuse the games catalog route so Back, Forward and refresh remain consistent.
function showFavorites() {
  const favorites = readFavorites();
  if (favorites.length === 0) {
    toast('No favorites saved yet ♡');
    return;
  }
  navigateToRoute(`${ROUTE_PATHS.games}?view=favorites`);
}

function renderFavoritesCatalog() {
  const target = $('catalog-content');
  if (!target) return;
  const favorites = readFavorites();
  const items = favorites.map((text, index) => `
    <div class="catalog-item"><h3>Favorite ${index + 1}</h3><p>${escapeHtml(text)}</p></div>
  `);
  configureCatalogShell({
    eyebrow: 'SAVED CARDS',
    title: 'Favorites',
    subtitle: 'Prompts you saved during your FlirtyFlip games.',
    view: 'favorites'
  });
  target.innerHTML = `
    <div class="catalog-grid">
      ${items.length ? items.join('') : '<div class="catalog-item"><h3>No favorites yet</h3><p>Save a card during a game to see it here.</p></div>'}
    </div>
    <div class="catalog-actions"><button class="pill-btn" onclick="showMoods()">Play a mood →</button></div>
  `;
}

// ========================================
// SUPPORT ROUTING AND CONTENT
// Policies use a query parameter under /support so direct links and refreshes retain the section.
// Add future support sections to SUPPORT_SECTIONS and this renderer together.
// ========================================
function showSupport(section = 'index') {
  const safeSection = SUPPORT_SECTIONS.has(section) ? section : 'index';
  const suffix = safeSection === 'index' ? '' : `?section=${encodeURIComponent(safeSection)}`;
  navigateToRoute(`${ROUTE_PATHS.support}${suffix}`);
}

function renderSupportContent(section = 'index') {
  const target = $('support-content');
  if (!target) return;
  const safeSection = SUPPORT_SECTIONS.has(section) ? section : 'index';

  if (safeSection === 'contact') {
    target.innerHTML = `
      <h3>Contact Us</h3>
      <p>For support, refunds or questions email: <a href="mailto:craftares.business@gmail.com">craftares.business@gmail.com</a></p>
    `;
  } else if (safeSection === 'refund') {
    target.innerHTML = `
      <h3>Refund & Cancellation Policy</h3>
      <p>Last updated: August 2026</p>
      <p>Thank you for choosing our platform. Since we offer digital products (card packs and premium access), please read our refund policy carefully:</p>
      <ul>
        <li>All purchases of digital content are final and non-refundable once the content has been accessed or unlocked.</li>
        <li>Refunds will only be considered for technical delivery errors or duplicate payments and must be requested within 48 hours.</li>
        <li>If approved, refunds are processed within 5–7 business days to the original payment method.</li>
      </ul>
      <p>Contact: <a href="mailto:craftares.business@gmail.com">craftares.business@gmail.com</a></p>
    `;
  } else if (safeSection === 'terms') {
    target.innerHTML = `
      <h3>Terms & Conditions</h3>
      <p>Last updated: August 2026</p>
      <ol>
        <li><strong>Age Restriction:</strong> This site is for adults 18+.</li>
        <li><strong>Nature of Content:</strong> Adult-themed couple games for consenting adults.</li>
        <li><strong>User Accounts:</strong> Keep your credentials private.</li>
        <li><strong>Digital Products:</strong> Non-returnable once accessed.</li>
        <li><strong>Acceptable Use:</strong> No illegal or non-consensual activities.</li>
      </ol>
      <p>Contact: <a href="mailto:craftares.business@gmail.com">craftares.business@gmail.com</a></p>
    `;
  } else if (safeSection === 'privacy') {
    target.innerHTML = `
      <h3>Privacy Policy</h3>
      <p>Last updated: August 2026</p>
      <p>We respect your privacy. We collect account info, payment processor data (we do not store card numbers), and usage data to improve the service. We do not sell personal data.</p>
      <p>Contact: <a href="mailto:craftares.business@gmail.com">craftares.business@gmail.com</a></p>
    `;
  } else if (safeSection === 'faq') {
    target.innerHTML = `
      <h3>FAQ</h3>
      <ul>
        <li><strong>How do I play?</strong> Choose a mood, pick the length, and start flipping cards.</li>
        <li><strong>Is this safe for kids?</strong> No — the site is intended for adults 18+.</li>
        <li><strong>How do I request a refund?</strong> Email craftares.business@gmail.com within 48 hours with proof of purchase.</li>
      </ul>
    `;
  } else {
    // index: show links
    target.innerHTML = `
      <div class="support-grid">
        <button class="pill-btn" onclick="showSupport('contact')">Contact Us</button>
        <button class="pill-btn" onclick="showSupport('refund')">Refund & Cancellation Policy</button>
        <button class="pill-btn" onclick="showSupport('terms')">Terms & Conditions</button>
        <button class="pill-btn" onclick="showSupport('privacy')">Privacy Policy</button>
        <button class="pill-btn" onclick="showSupport('faq')">FAQ</button>
      </div>
    `;
  }

}

function bindNavEvents() {
  const megaItems = Array.from(document.querySelectorAll('.nav-item.has-mega'));
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  // Close one dropdown and keep its ARIA state synchronized with the visual class.
  function closeMegaItem(item) {
    const button = item.querySelector('.nav-link');
    const menu = item.querySelector('.mega-menu');
    if (button) button.setAttribute('aria-expanded', 'false');
    if (menu) menu.classList.remove('is-open');
  }

  function closeAllMegaItems(except = null) {
    megaItems.forEach((item) => { if (item !== except) closeMegaItem(item); });
  }

  // Desktop dropdowns support hover, click, keyboard focus and Escape without duplicate toggles.
  megaItems.forEach(item => {
    const button = item.querySelector('.nav-link');
    const menu = item.querySelector('.mega-menu');
    let openedByPointerHover = false;
    menu.querySelectorAll('a').forEach((link) => link.setAttribute('role', 'menuitem'));

    function open() {
      closeAllMegaItems(item);
      button.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
    }

    function close() {
      openedByPointerHover = false;
      closeMegaItem(item);
    }

    item.addEventListener('mouseenter', () => {
      if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
      openedByPointerHover = true;
      open();
    });
    item.addEventListener('mouseleave', close);

    button.addEventListener('click', (event) => {
      event.preventDefault();
      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (openedByPointerHover) {
        openedByPointerHover = false;
        open();
        return;
      }
      if (expanded) close(); else open();
    });

    // Handle keyboard activation directly so hover state cannot cancel the native button click.
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openedByPointerHover = false;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (expanded) close(); else open();
    });

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        close();
        button.focus();
      }
    });

    item.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!item.contains(document.activeElement)) close();
      });
    });
  });

  // Cleanly close the mobile drawer and detach its temporary keyboard handlers.
  function closeDrawer({ returnFocus = false } = {}) {
    if (!hamburger || !drawer) return;
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    if (drawer._escHandler) document.removeEventListener('keydown', drawer._escHandler);
    if (drawer._trapHandler) drawer.removeEventListener('keydown', drawer._trapHandler);
    if (returnFocus) hamburger.focus();
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const wasOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (wasOpen) return closeDrawer();
      const nowOpen = !wasOpen;
      hamburger.setAttribute('aria-expanded', String(nowOpen));
      drawer.setAttribute('aria-hidden', String(!nowOpen));

      if (nowOpen) {
        requestAnimationFrame(() => {
          const focusable = drawer.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable) focusable.focus();
        });

        const escHandler = (event) => { if (event.key === 'Escape') closeDrawer({ returnFocus: true }); };
        document.addEventListener('keydown', escHandler);

        const trapHandler = (event) => {
          if (event.key !== 'Tab') return;
          const focusables = Array.from(drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el=>!el.disabled);
          if (focusables.length === 0) return;
          const first = focusables[0], last = focusables[focusables.length - 1];
          if (!drawer.contains(document.activeElement)) { first.focus(); event.preventDefault(); return; }
          if (event.shiftKey && document.activeElement === first) { last.focus(); event.preventDefault(); }
          else if (!event.shiftKey && document.activeElement === last) { first.focus(); event.preventDefault(); }
        };
        drawer.addEventListener('keydown', trapHandler);
        drawer._escHandler = escHandler;
        drawer._trapHandler = trapHandler;
      }
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', () => closeDrawer({ returnFocus: true }));
  }

  // All header links share one History API path and close transient navigation UI first.
  document.querySelectorAll('header a[data-route]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      closeAllMegaItems();
      closeDrawer();
      navigateToRoute(link.dataset.route || link.getAttribute('href'));
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-item.has-mega')) closeAllMegaItems();
  });

  // Authentication actions reuse the existing modal and also close the mobile drawer.
  const drawerLogin = document.getElementById('drawer-login');
  const drawerGuest = document.getElementById('drawer-guest');
  if (drawerLogin) drawerLogin.addEventListener('click', () => { closeDrawer(); showAuthModal('login'); });
  if (drawerGuest) drawerGuest.addEventListener('click', () => { closeDrawer(); showAuthModal('guest'); });
}

// -----------------------------
// Bind other global UI controls
// Attaches handlers to top-level buttons so they work even if the user clicks
// before inline onclick handlers are available or if scripts are loaded later.
// -----------------------------
function bindGlobalUI() {
  const supportBtn = $("support-btn");
  const cardScene = $("card-scene");

  if (supportBtn) supportBtn.addEventListener('click', (e) => { e.preventDefault(); showSupport('index'); });
  if (cardScene) {
    cardScene.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        flipCard();
      }
    });
  }
}

// ========================================
// CATALOG EVENT DELEGATION
// One stable handler supports route links, filters and primary actions in dynamic catalog markup.
// Course-specific actions are handled here as those views are rendered into the same shell.
// ========================================
function bindCatalogEvents() {
  const content = $("catalog-content");
  const backButton = $("catalog-back");

  if (backButton) {
    backButton.addEventListener("click", () => navigateToRoute(catalogBackRoute));
  }

  if (!content) return;
  content.addEventListener("click", (event) => {
    const routeLink = event.target.closest("a[data-route]");
    if (routeLink) {
      event.preventDefault();
      navigateToRoute(routeLink.dataset.route || routeLink.getAttribute("href"));
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;

    if (action.dataset.action === "filter-games") {
      const filter = gameFilterOptions.some(({ id }) => id === action.dataset.filter) ? action.dataset.filter : "all";
      const suffix = filter === "all" ? "" : `?filter=${encodeURIComponent(filter)}`;
      navigateToRoute(`${ROUTE_PATHS.games}${suffix}`);
    }

    if (action.dataset.action === "start-catalog-game") {
      launchCatalogGame(action.dataset.game);
    }

    if (action.dataset.action === "filter-courses") {
      const filter = courseFilterOptions.some(({ id }) => id === action.dataset.filter) ? action.dataset.filter : "all";
      const suffix = filter === "all" ? "" : `?filter=${encodeURIComponent(filter)}`;
      navigateToRoute(`${ROUTE_PATHS.courses}${suffix}`);
    }

    // Curriculum accordion and reader actions share this delegated handler because catalog views are dynamic.
    // Edit curriculum markup in renderCourseDetail and lesson navigation markup in renderCourseLesson.
    if (action.dataset.action === "toggle-course-section") {
      const panelId = action.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;
      const expanded = action.getAttribute("aria-expanded") === "true";
      action.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    }

    if (action.dataset.action === "open-course-lesson") {
      const lessonIndex = Number(action.dataset.lesson);
      saveCourseProgress(action.dataset.course, lessonIndex);
      navigateToRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(action.dataset.course)}?lesson=${lessonIndex + 1}`);
    }

    if (action.dataset.action === "course-lesson-previous") {
      const lessonIndex = Number(action.dataset.lesson);
      saveCourseProgress(action.dataset.course, lessonIndex);
      navigateToRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(action.dataset.course)}?lesson=${lessonIndex + 1}`);
    }

    if (action.dataset.action === "course-lesson-next") {
      const lessonIndex = Number(action.dataset.lesson);
      saveCourseProgress(action.dataset.course, Number(action.dataset.current), { complete: true });
      saveCourseProgress(action.dataset.course, lessonIndex);
      navigateToRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(action.dataset.course)}?lesson=${lessonIndex + 1}`);
    }

    if (action.dataset.action === "finish-course") {
      saveCourseProgress(action.dataset.course, Number(action.dataset.current), { complete: true });
      toast("Course complete ♡");
      navigateToRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(action.dataset.course)}`);
    }
  });
}

// ========================================
// COURSE DETAIL ROUTING AND RENDERING
// Course cards navigate to /course/:slug; the renderer reads only the shared coursesData source.
// Missing optional metadata is omitted so direct routes never expose "undefined" values.
// ========================================
function showCourseDetail(courseId) {
  if (!coursesData[courseId]) return showCatalog('courses');
  navigateToRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}`);
}

function renderCourseDetail(courseId) {
  const content = $('catalog-content');
  if (!content) return;
  const c = (typeof coursesData !== 'undefined') ? coursesData[courseId] : null;
  if (!c) return;
  const lessons = getFlatCourseLessons(c);
  const progress = getCourseProgress(courseId);
  const continueLesson = Math.min(progress?.lastLesson || 0, Math.max(0, lessons.length - 1));
  let lessonNumber = 0;

  configureCatalogShell({
    eyebrow: 'COURSE',
    title: c.title,
    subtitle: c.subtitle,
    backRoute: ROUTE_PATHS.courses,
    hideHeader: true,
    view: 'course-detail'
  });

  const curriculum = c.sections.map((section, sectionIndex) => `
    <section class="curriculum-group">
      <button class="curriculum-toggle" type="button" data-action="toggle-course-section" aria-expanded="${sectionIndex === 0}" aria-controls="course-section-${sectionIndex}">
        <span><small>${String(sectionIndex + 1).padStart(2, '0')}</small>${escapeHtml(section.title)}</span>
        <span class="curriculum-toggle__meta">${section.lessons.length} ${section.lessons.length === 1 ? 'lesson' : 'lessons'} <b aria-hidden="true">+</b></span>
      </button>
      <div class="curriculum-panel" id="course-section-${sectionIndex}" ${sectionIndex === 0 ? '' : 'hidden'}>
        ${section.lessons.map((lesson) => {
          const currentLesson = lessonNumber;
          const parsed = parseCourseLesson(lesson, `Lesson ${currentLesson + 1}`);
          const isComplete = progress?.completed.includes(currentLesson);
          lessonNumber += 1;
          return `
            <article class="curriculum-lesson ${isComplete ? 'is-complete' : ''}">
              <div class="lesson-index">${String(currentLesson + 1).padStart(2, '0')}</div>
              <div class="curriculum-lesson__body">
                <h3>${escapeHtml(parsed.title)}</h3>
                <p>${escapeHtml(getLessonSummary(lesson))}</p>
              </div>
              <button class="lesson-link" type="button" data-action="open-course-lesson" data-course="${escapeHtml(courseId)}" data-lesson="${currentLesson}">${isComplete ? 'Review' : 'Start'} <span aria-hidden="true">→</span></button>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `).join('');

  content.innerHTML = `
    <article class="premium-course">
      <header class="course-detail-hero">
        <div class="course-detail-hero__mark" aria-hidden="true"><span>${escapeHtml(c.title.charAt(0))}</span><small>FLIRTYFLIP COURSE</small></div>
        <div class="course-detail-hero__copy">
          ${c.category ? `<div class="course-audience">${escapeHtml(c.category)}</div>` : ''}
          <h1>${escapeHtml(c.title)}</h1>
          <p class="course-hook">${escapeHtml(c.subtitle || c.summary || '')}</p>
          <div class="metadata-row" aria-label="Course details"><span>${lessons.length} lessons</span>${c.time ? `<span>${escapeHtml(c.time)}</span>` : ''}</div>
          ${renderCourseProgress(courseId)}
          <button class="pill-btn course-primary" type="button" data-action="open-course-lesson" data-course="${escapeHtml(courseId)}" data-lesson="${continueLesson}">${progress ? 'Continue course' : 'Start course'} →</button>
        </div>
      </header>
      <section class="learning-outcomes">
        <div><div class="eyebrow">WHAT YOU'LL LEARN</div><h2>Practical ideas to take into your relationship.</h2></div>
        <ul>${(c.outcomes || []).map((outcome) => `<li><span aria-hidden="true">✓</span>${escapeHtml(outcome)}</li>`).join('')}</ul>
      </section>
      <section class="curriculum">
        <div class="catalog-section-heading"><div><div class="eyebrow">CURRICULUM</div><h2>Course lessons.</h2></div><p>${lessons.length} total</p></div>
        <div class="curriculum-list">${curriculum}</div>
      </section>
    </article>
  `;
}

// ========================================
// FOCUSED COURSE READER
// Displays one existing lesson at a readable line length with deterministic Previous/Next routes.
// Completion is recorded only when the learner advances or finishes the current lesson.
// ========================================
function renderCourseLesson(courseId, lessonIndex) {
  const course = coursesData[courseId];
  const lessons = getFlatCourseLessons(course);
  const lessonRecord = lessons[lessonIndex];
  if (!course || !lessonRecord) return;
  saveCourseProgress(courseId, lessonIndex);

  const lesson = parseCourseLesson(lessonRecord.content, `Lesson ${lessonIndex + 1}`);
  const positionPercent = Math.round(((lessonIndex + 1) / lessons.length) * 100);
  const previousIndex = lessonIndex - 1;
  const nextIndex = lessonIndex + 1;

  configureCatalogShell({
    eyebrow: 'LESSON',
    title: lesson.title,
    subtitle: course.title,
    backRoute: `${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}`,
    hideHeader: true,
    view: 'course-reader'
  });

  $('catalog-content').innerHTML = `
    <article class="course-reader">
      <header class="reader-header">
        <a href="${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}" data-route="${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}" class="reader-course-link">${escapeHtml(course.title)}</a>
        <div class="reader-progress-label"><span>Lesson ${lessonIndex + 1} of ${lessons.length}</span><strong>${positionPercent}%</strong></div>
        <div class="reader-progress-track"><span style="width:${positionPercent}%"></span></div>
        <div class="eyebrow">${escapeHtml(lessonRecord.sectionTitle)}</div>
        <h1>${escapeHtml(lesson.title)}</h1>
      </header>
      <div class="reader-body">
        ${formatLessonParagraphs(lesson.body)}
      </div>
      <nav class="reader-navigation" aria-label="Course lesson navigation">
        ${previousIndex >= 0 ? `<button class="ghost-btn" type="button" data-action="course-lesson-previous" data-course="${escapeHtml(courseId)}" data-lesson="${previousIndex}">← Previous lesson</button>` : '<span></span>'}
        ${nextIndex < lessons.length
          ? `<button class="pill-btn" type="button" data-action="course-lesson-next" data-course="${escapeHtml(courseId)}" data-current="${lessonIndex}" data-lesson="${nextIndex}">Next lesson →</button>`
          : `<button class="pill-btn" type="button" data-action="finish-course" data-course="${escapeHtml(courseId)}" data-current="${lessonIndex}">Complete course →</button>`}
      </nav>
    </article>
  `;
}
