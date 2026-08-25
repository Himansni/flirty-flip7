// ========================================
// MOOD DATA
// Add, remove or edit game moods here.
// Each mood contains its own cards and theme color.
// ========================================



if (typeof window !== 'undefined') {
  try { console.log('PAIRPLAY script loaded'); window.__pairplay_loaded = true; } catch(e){}
}
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
    title: "Fantsy",
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
    desc: "Upgrde the level, private prompts to deepen emotional closeness (18+ optional).",
    intensity: "★★★☆☆",
    color: "#f5d7e0",
    questions: [
      
    ]
  },
   DreamsFuture :{
     title: "Dreams&Future ",
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
// function getQuestionPool(moodKey, length = 10) {
//   const mood = moods[moodKey];
//   const lengthSet = moodQuestionSets[moodKey];

//   if (length >= 50 && Array.isArray(lengthSet?.[50])) return lengthSet[50];
//   if (length >= 25 && Array.isArray(lengthSet?.[25])) return lengthSet[25];
//   if (Array.isArray(mood?.questions)) return mood.questions;
//   return [];
//}

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
    console.debug('ensureSupabaseClient: start', { timeout, SUPABASE_CONFIG });
    const existing = getSupabaseClient();
    if (existing) {
      console.debug('ensureSupabaseClient: existing client found');
      return resolve(existing);
    }
    // If supabase object already exists later, wait for it    let waited = 0;
    const interval = 100;

    const tryCreate = () => {
      const client = getSupabaseClient();
      if (client) return resolve(client);
      waited += interval;
      if (waited >= timeout) return resolve(null);
    };

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
        if (client) return resolve(client);
      };
      s.onerror = (e) => {
        console.error('ensureSupabaseClient: failed to load supabase script', e);
        return resolve(null);
      };
      document.head.appendChild(s);
    }

    const watcher = setInterval(() => {
      const client = getSupabaseClient();
      if (client) {
        clearInterval(watcher);
        console.debug('ensureSupabaseClient: client ready');
        return resolve(client);
      }
      waited += interval;
      if (waited >= timeout) {
        clearInterval(watcher);
        console.warn('ensureSupabaseClient: timeout waiting for client');
        return resolve(null);
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
// COURSES DATA
// Structured course data for the catalog and course detail views.
// Edit course title → subtitle → category → chapters → lessons.
// Keep content here for easy editing by a normal-level coder.
// ========================================
const coursesData = {
  'confident-connection': {
    id: 'confident-connection',
    title: '1.  Confident Connection click ▼ ' ,
   // category: 'For Him',
    subtitle: 'Build confidence & presence',
    chapters: 8,
   // time: '~25 min',
    summary: 'Courses focused on confidence, communication, intimacy, and being a better partner.',
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
    title: '2.  Better Communication ▼',
    category: 'For Him',
    subtitle: 'Listen & express clearly',
    chapters: 7,
// time: '~22 min',
    summary: 'Learn how to listen, express yourself, and handle difficult conversations.',
    sections: [
      { title: 'Lessons', lessons: ['Intro', 'Listening', 'Non-defensive speech', 'Asking vs accusing', 'Practical exercises', 'Practice', 'Final challenge'] }
    ]
  },
  'art-of-romance': {
    id: 'art-of-romance',
    title: '3.  The Art of Romance ▼',
    category: 'For Him',
    subtitle: 'Create small romantic moments',
    chapters: 8,
   // time: '~25 min',
    summary: 'Turn everyday moments into meaningful romantic experiences.',
    sections: [
      { title: 'Lessons', lessons: ['Intro', 'Small rituals', 'Gifts that mean more', 'Date design', 'Connection techniques', 'Practice', 'Final challenge', 'Wrap up'] }
    ]
  }
};

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

  if (signedInUser && signedInUser.email) {
    const displayName = signedInUser.email.split("@")[0];
    label.textContent = `Hi, ${displayName}`;
    cta.textContent = "Log out";
    return;
  }

  if (signedInUser && signedInUser.id && signedInUser.id.startsWith("guest-")) {
    label.textContent = "Guest mode";
    cta.textContent = "Switch account";
    return;
  }

  label.textContent = "Log in";
  cta.textContent = "Continue as guest";
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
    const { data, error } = await client.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + window.location.pathname });
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

function hidePages() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  window.scrollTo({top:0, behavior:"smooth"});
}
function showPage(id) {
  hidePages();
  $(id).classList.add("active");
}
function showHome(){ showPage("home"); }
function showMoods(){ renderMoodCards("mood-list"); showPage("moods"); }
function showHow(){ showPage("how"); }

// ========================================
// ONLINE LOBBY ENTRY
// If a room code exists in the URL, the visitor is treated as the partner.
// ========================================
function showOnline() {
  const params = new URLSearchParams(window.location.search);
  const room = params.get("room");
  onlineRole = room ? "guest" : "host";
  onlineRoomCode = room || "";
  renderOnlineMoodStep();
  showPage("online");
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
  const url = `${window.location.origin}${window.location.pathname}?room=${onlineRoomCode}`;
  history.replaceState({}, "", url);
  renderOnlineWaiting(url);
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
  startGame();
}

function selectMood(key) {
  selectedMood = key;
  applyHeroMood(key);
  const m = moods[key];
  // Render setup screen using cardLengthOptions so each option's text is easy to edit.
  const lengthButtons = cardLengthOptions.map((opt, i) => `
    <button class="length-btn ${i === 0 ? 'selected' : ''}" onclick="chooseLength(this,${opt.count})">${opt.title}<br><small>${opt.subtitle}</small></button>
  `).join('');

  $("setup-content").innerHTML = `
    <div class="setup-icon">${m.icon}</div>
    <div class="eyebrow">${m.title.toUpperCase()} MODE</div>
    <h2 class="setup-title">${m.title}</h2>
    <p class="setup-desc">${m.desc}</p>
    ${key === "spicy" ? `<p class="setup-desc"><strong>18+ only.</strong> Every card is optional. Consent first, always.</p>` : ""}
    <div class="length-options">
      ${lengthButtons}
    </div>
    <button class="pill-btn start-btn" onclick="startGame()">Start ${m.title} →</button>
  `;
  selectedLength = cardLengthOptions[0].count;
  showPage("setup");
}

function chooseLength(btn, length) {
  document.querySelectorAll(".length-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  selectedLength = length;
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - .5);
}

function startGame() {
  // Require explicit confirmation before starting a play session
  if (!playConfirmed) {
    showPlayConfirmation();
    return;
  }

  // const pool = getQuestionPool(selectedMood, selectedLength);
  // currentCards = [];
  // while (currentCards.length < selectedLength) {
  //   currentCards = [...currentCards, ...shuffle(pool)];
  // }
  // currentCards = currentCards.slice(0, selectedLength);

// ========================================
// LOAD CARDS IN EXACT ARRAY ORDER
// ----------------------------------------
// Question #1 in the deck → Card 1
// Question #2 in the deck → Card 2
// Question #3 in the deck → Card 3
// etc.
// ========================================

const pool = getQuestionPool(selectedMood, selectedLength);

currentCards = [...pool].slice(0, selectedLength);
  currentIndex = 0;
  skipped = 0;
  flipped = false;
  favorite = false;
  $("favorite-btn").textContent = "♡";
  $("game-mood-label").textContent = moods[selectedMood].title.toUpperCase();
  updateGame(true);
  showPage("game");
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
  const card = currentCards[currentIndex];
  const scene = $("card-scene");
  $("game-count").textContent = `${currentIndex + 1} / ${selectedLength}`;
  $("progress-fill").style.width = `${((currentIndex + 1) / selectedLength) * 100}%`;
  $("front-category").textContent = moods[selectedMood].title.toUpperCase();
  $("front-number").textContent = String(currentIndex + 1).padStart(2,"0");
  $("prompt-type").textContent = card[0];
  $("question-text").textContent = card[1];
  $("game-hint").textContent = reveal ? "Tap the card or NEXT CARD for another prompt" : "Tap the card to reveal the next prompt";

  // Update favorite button state based on persisted favorites for this card
  const currentText = card ? card[1] : null;
  const isFav = isFavoriteCard(currentText);
  favorite = isFav;
  const favBtn = $("favorite-btn");
  if (favBtn) favBtn.textContent = isFav ? "♥" : "♡";

  // Apply the selected mood to the card so its pattern and glow change with the deck.
  scene.className = `card-scene mood-${selectedMood}${reveal ? " revealed" : ""}`;
  flipped = reveal;
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
// The current card lifts/slides away, then the next prompt enters revealed.
// ========================================
function advanceCardWithSweep() {
  if (cardTransitioning) return;
  if (currentIndex >= selectedLength - 1) {
    finishGame();
    return;
  }

  cardTransitioning = true;
  const scene = $("card-scene");
  scene.classList.add("sweeping");
  $("game-hint").textContent = "Next card…";

  setTimeout(() => {
    currentIndex++;
    updateGame(true);
    scene.classList.remove("sweeping");
    scene.classList.add("card-enter");

    setTimeout(() => {
      scene.classList.remove("card-enter");
      cardTransitioning = false;
    }, 420);
  }, 360);
}

// Go to previous card with a mirrored sweep animation. Keeps the same UX but moves backward.
function retreatCardWithSweep() {
  if (cardTransitioning) return;
  if (currentIndex <= 0) return; // nothing to go back to

  cardTransitioning = true;
  const scene = $("card-scene");
  scene.classList.add("sweeping-back");
  $("game-hint").textContent = "Previous card…";

  setTimeout(() => {
    currentIndex--;
    updateGame(true);
    scene.classList.remove("sweeping-back");
    scene.classList.add("card-enter-back");

    setTimeout(() => {
      scene.classList.remove("card-enter-back");
      cardTransitioning = false;
    }, 420);
  }, 360);
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
  skipped++;
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
  $("favorite-btn").textContent = added ? "♥" : "♡";
  toast(added ? "Saved to favorites ♡" : "Removed from favorites");
}

// ========================================
// GAME COMPLETION
// Show the final stats after the last card.
// ========================================
function finishGame() {
  $("stat-played").textContent = selectedLength - skipped;
  $("stat-skipped").textContent = skipped;
  $("stat-mood").textContent = moods[selectedMood].icon;
  $("complete-copy").textContent = `You played ${selectedLength - skipped} cards together. The best part was probably the conversation after them.`;
  showPage("complete");
}

function restartGame(){ startGame(); }

function confirmExit(){ $("modal").classList.remove("hidden"); }
function closeModal(){ $("modal").classList.add("hidden"); }

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
    navFav.addEventListener('click', () => {
      const favs = readFavorites();
      const target = $('catalog-content');
      if (!target) {
        toast(`You have ${favs.length} favorites`);
        return;
      }
      if (!favs || favs.length === 0) {
        toast('No favorites saved yet ♡');
        return;
      }
      const items = favs.map((t, i) => `<div class="catalog-item"><h3>Favorite ${i+1}</h3><p>${t}</p></div>`);
      document.getElementById('catalog-heading').textContent = 'Favorites';
      target.innerHTML = `
        <div class="catalog-grid">
          ${items.join('')}
        </div>
        <div class="catalog-actions"><button class="pill-btn" onclick="showMoods()">Play a mood →</button></div>
      `;
      showPage('catalog');
    });
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
}

// Flush queued actions from early wrapper (if any)
if (typeof window !== 'undefined' && Array.isArray(window.__pairplay_pendingActions)) {
  setTimeout(() => {
    window.__pairplay_pendingActions.forEach(call => {
      try {
        if (typeof window[call.fn] === 'function') window[call.fn].apply(null, call.args);
      } catch (e) { console.warn('Flushing queued action failed', call.fn, e); }
    });
    window.__pairplay_pendingActions = [];
  }, 60);
}

// -----------------------------
// Navigation behaviors (mega menus + mobile drawer)
// -----------------------------

// Render a simple catalog page for games or courses based on the clicked heading
function showCatalog(type = 'games', heading = '') {
  const target = $('catalog-content');
  if (!target) return;
  const title = heading || (type === 'courses' ? 'Courses' : 'Games');
  document.getElementById('catalog-heading').textContent = title;
  const items = [];

  if (type === 'courses') {
    // Use the structured coursesData to render course cards
    const courseSamples = Object.values(coursesData).map(c => ({ id: c.id, title: c.title, subtitle: c.subtitle, chapters: c.chapters || (c.sections ? c.sections.length : 0), time: c.time || '' }));
    courseSamples.forEach(c => items.push(`<div class="catalog-item" onclick="showCourseDetail('${c.id}')"><h3>${c.title}</h3><p>${c.subtitle}</p><small>${c.chapters} chapters · ${c.time}</small></div>`));

    target.innerHTML = `
      <div class="catalog-grid">
        ${items.join('')}
      </div>
      <div class="catalog-actions"><button class="pill-btn" onclick="showMoods()">Play related mood</button></div>
    `;
  } else {
    // Games: synthesize a few related lists using the link text as a hint
    items.push(`<div class="catalog-item"><h3>${title}</h3><p>Collection of ${title.toLowerCase()} — tap to start a sample night.</p></div>`);
    items.push(`<div class="catalog-item"><h3>Quick ${title}</h3><p>Short 10-card rounds for a playful evening.</p></div>`);
    items.push(`<div class="catalog-item"><h3>Deep ${title}</h3><p>Longer 50-card sessions for meaningful conversations.</p></div>`);

    target.innerHTML = `
      <div class="catalog-grid">
        ${items.join('')}
      </div>
      <div class="catalog-actions"><button class="pill-btn" onclick="showMoods()">Play related mood</button></div>
    `;
  }

  showPage('catalog');
}

// Show an expanded course detail view (local sample)
function showCourseDetail(courseId) {
  const content = $('catalog-content');
  if (!content) return;
  // Simple local course data store
  const courses = {
    'confident-connection': {
      title: 'Confident Connection',
      category: 'For Him',
      subtitle: 'Build confidence & presence',
      chapters: 8,
      time: '~25 min',
      summary: 'Courses focused on confidence, communication, intimacy, and being a better partner.',
      lessons: [
        'Introduction - You ve likely consumed advice before Youve likely consumed advice before — tips, tricks, techniques promising to make you better in bed. Most of it treats sex like a mechanical problem to be solved. This course starts from a different premise: what happens between you and a partner is a direct reflection of whats happening inside you  Your nervous system, your attention, your self-trust — these shape the room before a single touch occurs What This Course Actually TeachesYou will not find checklists of moves here. You will find a way of being — grounded, attentive, unhurried — that makes technique almost irrelevant. A man who is genuinely present will outperform a man executing a flawless routine while mentally absent, every time. Women feel the difference immediately, even if they cant name it.',
        
        '1.  Presence & Confidence- Confidence, as most men understand it, is an act — a mask worn to hide uncertainty. Real presence is the opposite: its what remains when you stop performing and simply occupy the moment you re in. This lesson introduces the state youll return to throughout the course Core Teaching The Anchor State Think of your nervous system as either anchored or adrift." Adrift means your attention is scattered — replaying past encounters, predicting outcomes, monitoring your own performance. Anchored means your attention is fully in your body, in the room, with the person in front of you. Anchored men are rarely described as "confident" by their partners — theyre described as calm, solid, there. That s the actual currency Confidence Is Downstream of Attention, Not the Other Way Around You dont need to manufacture confidence before intimacy. You need to redirect attention — away from self-monitoring, toward sensation, breath, and your partners responses. Confidence follows naturally once your mind stops auditing you.'
        
        , '2. Reading emotions- Most men either overthink a partner emotional state or ignore it entirely and rely on assumption. Neither works. Reading emotions accurately is a trainable skill, not an innate gift some men have and others do not Core TeachingThe Signal Layers Emotional signals arrive on three layers at once: words, tone, and body. Most men only track words. Tone tells you the emotional charge behind the words. Body — breathing, muscle tension, stillness versus movement — tells you what is happening underneath, often before she has language for it herself.Reading without narrating The goal is not to build a private theory about what she is feeling and silently act on it. It is to notice a signal, and let that noticing shape your pace and attention in the moment, without needing to be right about the exact emotion. You do not need a diagnosis. You need responsiveness.', 
        
        '3. Asking better questions -  Most advice tells men to talk more in bed. That is incomplete. What actually builds trust is asking questions that open a partner up rather than putting her on the spot — and knowing when silence is the better question.Core Teaching The Curiosity Frame A question asked from genuine curiosity feels completely different from one asked from anxiety, even if the words are identical. Asking what feels good right now to reassure yourself lands as pressure. The same question asked because you are genuinely interested in her experience lands as attention. The tone underneath the question matters more than the question itself.Questions that build, questions that break Closed, performance-anchored questions — asking whether you are doing well — pull a partner into evaluating you, which breaks her own immersion. Open, experience-anchored questions — asking what she is noticing, or what she would like more of — keep her inside her own body instead of pulling her into managing yours.When not to ask Not every moment calls for a question. Sometimes the better move is a small physical check — slowing down, maintaining eye contact, adjusting pressure — and reading the response, rather than interrupting a moment with words. Timing matters as much as wording.Practice / Reflection Recall one question you have asked a partner before, out of your own anxiety rather than curiosity about her experience. Reframe it from a place of genuine interest in her, rather than reassurance for yourself. Notice how different the tone feels, even though the topic stays the same.',
        
        '4. Practical techniques - Technique matters, but only once it sits on top of presence and reading. Without those two, technique becomes mechanical. With them, even simple technique feels attentive and deliberate.Core Teaching Pace, Pressure, Pause These three variables account for most of what makes physical touch feel attentive rather than routine. Pace is how quickly you move. Pressure is how firmly you touch. Pause is your willingness to stop, hold, and let a moment build instead of rushing past it. Most men default to one setting for all three and never adjust. Small, deliberate changes in these three variables communicate attentiveness more than any specific move. Reading response, not seeking approval After any adjustment in pace, pressure, or pause, give it a few seconds and watch for a response — breathing, movement, sound, stillness — before deciding whether to continue that adjustment or shift again. This turns technique into a two-way conversation rather than something done to a partner. The role of your own breath Your breathing rate sets a tempo that a partner will often unconsciously match. If your breathing is shallow and rushed, the whole encounter tends to speed up and flatten. Deliberately slowing your own breath is one of the simplest ways to slow and deepen a moment without saying a word.', 
        '5. Building comfort - Comfort is not a mood you create in a single evening. It is built across many small moments, and it is what allows a partner to be physically and emotionally open rather than guarded.Core Teaching The Comfort Corridor Think of comfort as a corridor that widens or narrows based on how safe a partner feels being seen — physically, emotionally, and in terms of judgment. Rushing, joking at the wrong moment, or reacting visibly to something unexpected all narrow the corridor. Steady, unhurried attention widens it.', 
        '6. Practice Core Teaching - Why low-stakes repetition matters Skills built only under high-stakes conditions tend to collapse under pressure. Practicing presence, reading, and pacing in ordinary, non-intimate moments builds a foundation that holds up when it actually matters. The Field Practice method Choose one lesson from this course each day and apply it in a completely non-intimate setting — a conversation with a colleague, a phone call, a meal with your partner. The context does not need to match. What you are training is the underlying capacity: staying present, reading signals, adjusting pace.',
         '7. Final challenge - This is where the course closes and your own practice begins. There is no new theory here — only an application of everything you have already learned.Core Teaching The challenge Over your next intimate encounter with a partner, choose one focus only: staying anchored in your own body instead of monitoring your performance, as covered in Lesson 2. Do not try to apply all eight lessons at once. Depth comes from doing one thing fully, not many things partially. what to watch for Notice the moments where your attention pulls toward self-monitoring, and notice what it takes to bring it back to your partner and the present moment. You are not aiming for perfection. You are building the habit of returning.'
      ]
    },
    'better-communication': {
      title: 'Better Communication',
      category: 'For Him',
      subtitle: 'Listen & express clearly',
      chapters: 7,
      time: '~22 min',
      summary: 'Learn how to listen, express yourself, and handle difficult conversations.',
      lessons: ['Intro', 'Listening', 'Non-defensive speech', 'Asking vs accusing', 'Practical exercises', 'Practice', 'Final challenge']
    },
    'art-of-romance': {
      title: 'The Art of Romance',
      category: 'For Him',
      subtitle: 'Create small romantic moments',
      chapters: 8,
      time: '~25 min',
      summary: 'Turn everyday moments into meaningful romantic experiences.',
      lessons: ['Intro', 'Small rituals', 'Gifts that mean more', 'Date design', 'Connection techniques', 'Practice', 'Final challenge', 'Wrap up']
    }
  };

  const c = courses[courseId];
  if (!c) return showCatalog('courses');

  content.innerHTML = `
    <div class="course-hero">
      <div class="eyebrow">${c.category}</div>
      <h2>${c.title}</h2>
      <p class="course-sub">${c.subtitle} · ${c.chapters} chapters · ${c.time}</p>
      <p>${c.summary}</p>
    </div>
    <div class="course-lessons">
      <h3>Chapters</h3>
      <ol>
        ${c.lessons.map(l => `<li>${l}</li>`).join('')}
      </ol>
    </div>
    <div class="catalog-actions">
      <button class="pill-btn" onclick="showMoods()">Start a related game</button>
      <button class="ghost-btn" onclick="showCatalog('courses')">Back to courses</button>
    </div>
  `;
  showPage('catalog');
}

// Support pages rendering. Accepts: index, contact, refund, terms, privacy, faq
function showSupport(section = 'index') {
  const target = $('support-content');
  if (!target) return;

  if (section === 'contact') {
    target.innerHTML = `
      <h3>Contact Us</h3>
      <p>For support, refunds or questions email: <a href="mailto:craftares.business@gmail.com">craftares.business@gmail.com</a></p>
    `;
  } else if (section === 'refund') {
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
  } else if (section === 'terms') {
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
  } else if (section === 'privacy') {
    target.innerHTML = `
      <h3>Privacy Policy</h3>
      <p>Last updated: August 2026</p>
      <p>We respect your privacy. We collect account info, payment processor data (we do not store card numbers), and usage data to improve the service. We do not sell personal data.</p>
      <p>Contact: <a href="mailto:craftares.business@gmail.com">craftares.business@gmail.com</a></p>
    `;
  } else if (section === 'faq') {
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

  showPage('support');
}

function bindNavEvents() {
  // Desktop mega menu: open on hover, toggle on click for keyboard accessibility
  document.querySelectorAll('.nav-item.has-mega').forEach(item => {
    const button = item.querySelector('.nav-link');
    const menu = item.querySelector('.mega-menu');

    // show/hide helpers
    function open() {
      button.setAttribute('aria-expanded', 'true');
      menu.style.display = 'block';
    }
    function close() {
      button.setAttribute('aria-expanded', 'false');
      menu.style.display = 'none';
    }

    // hover (desktop)
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);

    // click toggles (keyboard users)
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (expanded) close(); else open();
    });
    // keyboard activation (Enter / Space)
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const expanded = button.getAttribute('aria-expanded') === 'true';
        if (expanded) close(); else open();
      }
    });
  });

  // Allow clicking mega-menu links to open the catalog or courses
  document.querySelectorAll('.mega-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const navItem = link.closest('.nav-item');
      const key = navItem ? navItem.dataset.key : null;
      const text = link.textContent.trim();
      if (key === 'games') showCatalog('games', text);
      else if (key === 'courses') showCatalog('courses', text);
      else showSupport('index');
    });
  });

  // Close mega menus when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-item.has-mega')) return;
    document.querySelectorAll('.nav-item.has-mega').forEach(item => {
      const button = item.querySelector('.nav-link');
      const menu = item.querySelector('.mega-menu');
      if (button) button.setAttribute('aria-expanded', 'false');
      if (menu) menu.style.display = 'none';
    });
  });

  // Mobile drawer toggles
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      const wasOpen = hamburger.getAttribute('aria-expanded') === 'true';
      const nowOpen = !wasOpen;
      hamburger.setAttribute('aria-expanded', String(nowOpen));
      drawer.setAttribute('aria-hidden', String(!nowOpen));

      if (nowOpen) {
        // Move focus into the drawer for keyboard users
        setTimeout(() => {
          const focusable = drawer.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable) focusable.focus();
        }, 40);

        // Close on Escape while drawer is open
        const escHandler = (e) => { if (e.key === 'Escape') { hamburger.setAttribute('aria-expanded','false'); drawer.setAttribute('aria-hidden','true'); document.removeEventListener('keydown', escHandler); if (drawer._trapHandler) drawer.removeEventListener('keydown', drawer._trapHandler); } };
        document.addEventListener('keydown', escHandler);

        // Trap focus inside drawer
        const trapHandler = (e) => {
          if (e.key !== 'Tab') return;
          const focusables = Array.from(drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(el=>!el.disabled);
          if (focusables.length === 0) return;
          const first = focusables[0], last = focusables[focusables.length - 1];
          if (!drawer.contains(document.activeElement)) { first.focus(); e.preventDefault(); return; }
          if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
          else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
        };
        drawer.addEventListener('keydown', trapHandler);
        drawer._escHandler = escHandler;
        drawer._trapHandler = trapHandler;
      } else {
        // cleanup handlers when closing
        if (drawer._escHandler) document.removeEventListener('keydown', drawer._escHandler);
        if (drawer._trapHandler) drawer.removeEventListener('keydown', drawer._trapHandler);
      }
    });
  }
  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      // cleanup any focus handlers
      if (drawer._escHandler) document.removeEventListener('keydown', drawer._escHandler);
      if (drawer._trapHandler) drawer.removeEventListener('keydown', drawer._trapHandler);
    });
  }

  // Drawer action wiring
  document.querySelectorAll('.drawer-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.dataset.target;
      // Close drawer
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      if (drawer) drawer.setAttribute('aria-hidden', 'true');

      // Route to appropriate screen
      if (target === 'play') showMoods();
      else if (target === 'support') showSupport('index');
      else if (target === 'cards') showCatalog('games', 'Cards');
      else if (target === 'courses') showCatalog('courses', 'Courses');
      else if (target === 'games') showCatalog('games', 'All Games');
    });
  });

  // Drawer login/guest buttons
  const drawerLogin = document.getElementById('drawer-login');
  const drawerGuest = document.getElementById('drawer-guest');
  if (drawerLogin) drawerLogin.addEventListener('click', () => { showAuthModal('login'); if (drawer) drawer.setAttribute('aria-hidden','true'); });
  if (drawerGuest) drawerGuest.addEventListener('click', () => { showAuthModal('guest'); if (drawer) drawer.setAttribute('aria-hidden','true'); });
}

// -----------------------------
// Bind other global UI controls
// Attaches handlers to top-level buttons so they work even if the user clicks
// before inline onclick handlers are available or if scripts are loaded later.
// -----------------------------
function bindGlobalUI() {
  const startBtn = $("start-playing-btn");
  const howBtn = $("see-how-btn");
  const onlineBtn = $("play-online-btn");
  const supportBtn = $("support-btn");

  if (startBtn) startBtn.addEventListener('click', (e) => { e.preventDefault(); showMoods(); });
  if (howBtn) howBtn.addEventListener('click', (e) => { e.preventDefault(); showHow(); });
  if (onlineBtn) onlineBtn.addEventListener('click', (e) => { e.preventDefault(); showOnline(); });
  if (supportBtn) supportBtn.addEventListener('click', (e) => { e.preventDefault(); showSupport('index'); });

  // Delegate for any dynamically-added start buttons
  document.addEventListener('click', (e) => {
    const target = e.target.closest && e.target.closest('.start-btn');
    if (target) {
      e.preventDefault();
      startGame();
    }
  });
}

// ========================================
// OVERRIDE: structured course detail renderer
// This function supersedes any earlier showCourseDetail definitions and
// renders the structured coursesData with collapsible chapters/lessons.
// ========================================
function showCourseDetail(courseId) {
  const content = $('catalog-content');
  if (!content) return;
  const c = (typeof coursesData !== 'undefined') ? coursesData[courseId] : null;
  if (!c) return showCatalog('courses');

  content.innerHTML = `
    <div class="course-hero">
      <div class="eyebrow">${c.category}</div>
      <h2>${c.title}</h2>
      <p class="course-sub">${c.subtitle} · ${c.chapters || (c.sections ? c.sections.length : '')} chapters · ${c.time || ''}</p>
      <p>${c.summary}</p>
    </div>
    <div class="course-structure">
      ${c.sections.map((section, sidx) => `
        <div class="course-section">
          <button class="chapter-toggle" data-section="${sidx}" aria-expanded="false">${section.title} <span class="chapter-count">${section.lessons.length} lessons</span></button>
          <div class="chapter-content" id="chapter-${sidx}" hidden>
            <ol class="chapter-lessons">
              ${section.lessons.map((lesson, lidx) => `
                <li class="lesson-card"><div class="lesson-num">${lidx+1}</div><div class="lesson-body">${lesson}</div></li>
              `).join('')}
            </ol>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="catalog-actions">
      <button class="pill-btn" onclick="showMoods()">Play a related mood</button>
      <button class="ghost-btn" onclick="showCatalog('courses')">Back to courses</button>
    </div>
  `;

  // Attach collapse handlers
  content.querySelectorAll('.chapter-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.dataset.section;
      const panel = document.getElementById(`chapter-${id}`);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) { panel.hidden = false; btn.classList.add('open'); }
      else { panel.hidden = true; btn.classList.remove('open'); }
    });
  });

  showPage('catalog');
}
// const LABEL_ICONS = {
//   ASK: "💭",
//   SAY: "💗",
//   REMEMBER: "✨",
//   DO: "✦",
//   CHALLENGE: "🎯",
// };
// export default romantic;
// export { LABEL_ICONS }; 
let currentTurn = 'A'; // whoever is "you" right now

function renderTurnPill(cardEl) {
  let pill = cardEl.querySelector('.turn-pill');
  if (!pill) {
    pill = document.createElement('div');
    pill.className = 'turn-pill';
    pill.style.cssText =
      'text-align:center;font-size:11px;font-weight:500;' +
      'letter-spacing:.08em;padding:4px 12px;border-radius:999px;' +
      'display:inline-block;margin:0 auto 14px;';
    cardEl.prepend(pill);
  }
  const yourTurn = currentTurn === 'A';
  pill.textContent = yourTurn ? 'YOUR TURN' : 'THEIR TURN';
  pill.style.background = yourTurn ? 'rgba(225,77,99,.15)' : 'rgba(138,122,118,.15)';
  pill.style.color      = yourTurn ? '#e14d63' : '#a08d88';
  pill.style.border     = yourTurn ? '.5px solid rgba(225,77,99,.4)' : '.5px solid rgba(138,122,118,.4)';
}

function passTurn(cardEl) {
  currentTurn = currentTurn === 'A' ? 'B' : 'A';
  renderTurnPill(cardEl);
}
