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

// ========================================
// INTERACTIVE HOMEPAGE SAMPLE CARD
// Edit these three general-audience previews here; this data is intentionally separate from game decks.
// The preview never reads or writes selectedMood, currentCards, sessionStorage or Supabase state.
// ========================================
const HERO_SAMPLE_PROMPTS = Object.freeze([
  Object.freeze({ label: "ROMANTIC", question: "What's one small thing I do that always makes you smile?", footer: "01 · CONNECTION" }),
  Object.freeze({ label: "DATE NIGHT", question: "What would your perfect date with me look like?", footer: "02 · IMAGINATION" }),
  Object.freeze({ label: "TOGETHER", question: "What's something you'd love for us to try together?", footer: "03 · DISCOVERY" })
]);

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
  ["ASK💭", "What’s the most adorable habit of mine that you never want me to stop?"],
  ["DO✦", "Tuck a piece of my hair behind my ear as gently as possible."],
  ["SAY💗", "Tell me one thing about my smile that you secretly love."],
  ["CHALLENGE🎯", "Give me a compliment using only the softest voice you have."],
  ["ASK💭", "What little thing do I do that always makes you want to squeeze me?"],
  ["REMEMBER✨", "When did we have the cutest accidental moment together?"],
  ["DO✦", "Poke my cheek lightly and then pretend you didn’t."],
  ["SAY💗", "Say the cutest thought you’ve had about me this week."],
  ["CHALLENGE🎯", "Try to make me laugh using only your facial expressions."],
  ["ASK💭", "What’s your favorite silly face I make?"],
  ["DO✦", "Lean in and whisper a tiny compliment right next to my ear."],
  ["SAY💗", "Tell me one way I look at you that makes you feel extra loved."],
  ["ASK💭", "What would be the cutest couple activity for us to try this month?"],
  ["CHALLENGE🎯", "Create a secret handshake with me right now — make it as adorable as possible."],
  ["REMEMBER✨", "What’s one moment where we were both being ridiculously cute without noticing?"],
  ["DO✦", "Hold my face with both hands and give me your softest look."],
  ["SAY💗", "Describe the most endearing thing about the way I talk to you."],
  ["ASK💭", "What little nickname do you think fits us as a couple?"],
  ["CHALLENGE🎯", "Act out the cutest way you want me to greet you when I see you."],
  ["ASK💭", "What’s one small daily thing that always makes you feel close to me?"],
  ["DO✦", "Rest your forehead against mine and stay there until one of us smiles first."],
  ["SAY💗", "Say one compliment that you’ve been too shy to say until now."],
  ["CHALLENGE🎯", "Make up a tiny love song lyric about me on the spot (it can be silly)."],
  ["REMEMBER✨", "When did you first feel that warm ‘this is my person’ kind of cute love?"],
  ["SAY💗", "Tell me the cutest version of us that lives in your head."],
],

// ---------------------------------------------------------------
// 50 — LONG SWEET NIGHT
// Full arc: cute questions → compliments → giggles → playful movements → soft affection → close.
// ---------------------------------------------------------------
50: [
  // CUTE QUESTIONS
  ["ASK💭", "What’s the smallest thing I do that makes you melt a little?"],
  ["SAY💗", "Tell me one adorable detail about me that you notice more than I do."],
  ["DO✦", "Gently squish my cheeks for two seconds, then look proud of yourself."],
  ["CHALLENGE🎯", "Give me a compliment that starts with ‘You know what’s cute…’"],
  ["ASK💭", "What silly little tradition should we start just because it’s cute?"],
  ["DO✦", "Link both of our pinkies and swing them back and forth."],
  ["SAY💗", "Say the cutest thing you’ve ever thought while looking at me."],
  ["CHALLENGE🎯", "Show me the face you make when you think I’m being extra adorable."],
  ["ASK💭", "What’s your favorite way we accidentally match or sync up?"],
  ["REMEMBER✨", "When did you first catch yourself smiling just because of me?"],

  // LITTLE COMPLIMENTS
  ["ASK💭", "What part of my personality feels like pure sunshine to you?"],
  ["DO✦", "Pat the top of my head softly like I’m something precious."],
  ["SAY💗", "Tell me one thing about my laugh that you love."],
  ["CHALLENGE🎯", "Whisper a compliment so sweet it makes you blush a little too."],
  ["ASK💭", "What’s the cutest outfit or look of mine that lives rent-free in your head?"],
  ["REMEMBER✨", "What’s one tiny moment that made you think ‘ugh, I love this human’?"],
  ["DO✦", "Draw a tiny invisible heart on the back of my hand with your finger."],
  ["SAY💗", "Confess one ridiculously soft thought you have about us."],
  ["ASK💭", "What do you find cutest about the way I care about you?"],
  ["CHALLENGE🎯", "Make up a super sweet and slightly silly pet name for me on the spot."],

  // EASY LAUGHS
  ["DO✦", "Try to make me laugh without saying a single word."],
  ["SAY💗", "Tell me the funniest-cute memory we have so far."],
  ["ASK💭", "What’s one ridiculous thing we both find way funnier than we should?"],
  ["REMEMBER✨", "When did we last laugh so hard that it turned into a cute moment?"],
  ["SAY💗", "Describe the cutest way I look when I’m trying not to laugh."],
  ["ASK💭", "What silly fear or habit of mine do you find weirdly endearing?"],
  ["REMEMBER✨", "What’s one time we were both being complete dorks and it felt perfect?"],
  ["SAY💗", "Say something sweet and then immediately follow it with something goofy."],
  ["ASK💭", "How do you want us to keep being playful even years from now?"],
  ["DO✦", "Lean in and give me the softest forehead boop."],

  // CUTE ACTIVITIES & MOVEMENTS
  ["CHALLENGE🎯", "Create a secret couple pose with me right now and hold it for five seconds."],
  ["DO✦", "Spin me in a tiny slow circle like we’re in a cute movie scene."],
  ["CHALLENGE🎯", "Act out the most adorable way you want to be hugged."],
  ["SAY💗", "Tell me what our cutest couple activity would be on a rainy day."],
  ["CHALLENGE🎯", "Invent a tiny handshake that ends with something sweet."],
  ["DO✦", "Rest your head on my shoulder and stay there while you answer the next one."],
  ["CHALLENGE🎯", "Show me how you would dramatically ‘swoon’ over me in the cutest way."],
  ["DO✦", "Hold both of my hands and swing them gently like excited kids 🫠."]
  ["ASK💭", "What do you find cutest about the way I care about you?"],
  ["CHALLENGE🎯", "Make up a super sweet and slightly silly pet name for me on the spot."],

  // SOFT AFFECTION
  ["ASK💭", "What little gesture always makes you feel extra loved by me?"],
  ["SAY💗", "Tell me one way I can be even cuter for you (you already are, but still)."],
  ["DO✦", "Cup my face and look at me like I’m your favorite human."],
  ["ASK💭", "What’s the sweetest thing you want us to do more often?"],
  ["SAY💗", "Say the softest compliment you’ve been saving."],
  ["DO✦", "Pull me into the coziest, warmest hug you can manage."],
  ["CHALLENGE🎯", "Tell me, in the cutest way possible, why you like being mine."],

  // CLOSE
  ["ASK💭", "What’s the last cute thing you want us to do before this game ends?"],
  ["SAY💗", "Tell me one tiny reason you feel lucky we’re us."],
  ["DO✦", "Give me the softest kiss on the cheek, then smile at each other like dorks."],
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
     ["ASK", "What's one reason you'd choose me again, out of everyone?"],
    ["SAY", "Tell me the first thing you found attractive about me."],
    ["REMEMBER", "What's the earliest memory you have of missing me when I wasn't around?"],
    ["DO", "Look at each other for ten seconds and let it be a little too long, on purpose."],
    ["ASK", "When do you feel most in love with me — what's usually happening?"],
    ["CHALLENGE", "Recreate your first hello — same tone, same energy — right now."],
    ["SAY", "Tell them what your heart does, even now, when they walk into a room."],
    ["REMEMBER", "What's a small detail from early on you never told me you noticed?"],
    ["DO", "Take their hand, close your eyes, and just breathe together for five seconds."],
    ["ASK", "What's a small thing about us that still feels a little unbelievable?"],
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
     ["ASK", "What's a version of our future together you think about but rarely say out loud?"],
    ["REMEMBER", "What's the first night you remember not wanting to leave?"],
    ["SAY", "Tell them one thing about loving them that still surprises you."],
    ["CHALLENGE", "Slow dance to nothing — no music — for fifteen seconds."],
    ["ASK", "What's something about falling for me that felt like a risk at the time?"],
    ["REMEMBER", "What's a moment you first thought 'I could really love this person'?"],
    ["SAY", "Describe, honestly, what it feels like when I look at you a certain way."],
    ["ASK", "What's a fear you had about love before me that you don't carry anymore?"],
    ["DO", "Trace 'I love you' on their back and have them guess it without speaking."],
    ["REMEMBER", "What's the most romantic thing that's happened between us that no one else knows?"],

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

  ],
 
  // ---------------------------------------------------------------
  // 25 — DATE NIGHT
  // Tone: bolder truths, a bit more daring dares, more personal.
  // Includes the Quick Date set, then goes further.
  // ---------------------------------------------------------------
  25: [
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
     ["SAY💗", "Tell them one thing you think about when you can't sleep and they're not there."],
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
    ["ASK💭", "What would help you feel most wanted and comfortable for the rest of tonight?"],
    ["DO✦", "Pause together, name one clear yes and one boundary for whatever comes next."],
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
  ["ASK💭", "What would help you feel most comfortable and wanted for the rest of tonight?"],
  ["DO✦", "Pause together, name one clear yes and one boundary for whatever comes next."],
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

// ---------------------------------------------------------------
 10: [
  ["ASK💭", "What’s one romantic fantasy you’ve had about us that you’ve never fully said out loud?"],
  ["SAY💗", "Tell me the version of a surprise date that would make your heart race."],
  ["DO✦", "Pull me close and whisper one place you’d love to escape to with me."],
  ["CHALLENGE🎯", "Describe a role we could play for the next ten minutes — and start it."],
  ["ASK💭", "What kind of attention from me makes you feel the most desired?"],
  ["REMEMBER✨", "When did you first catch yourself fantasizing about a different version of us?"],
  ["DO✦", "Look at me like we’ve just met in a forbidden place and can’t look away."],
  ["SAY💗", "Say one thing you’d want me to do if we were strangers who only had tonight."],
  ["CHALLENGE🎯", "Choose a power dynamic for the next round — who leads, who follows."],
  ["ASK💭", "What shared adventure feels both exciting and a little dangerous to imagine with me?"],
],

// ---------------------------------------------------------------
// 25 — FANTASY DATE NIGHT
// Arc: soft romantic vision → affection & novelty → role-play spark → charged pursuit.
// ---------------------------------------------------------------
25: [
  ["ASK💭", "If I planned a complete surprise date for you, what elements would make it perfect?"],
  ["DO✦", "Hold me like we’re already on a balcony in a city we’ve never visited."],
  ["SAY💗", "Tell me how you want to feel when I look at you like you’re completely irresistible."],
  ["CHALLENGE🎯", "Invent a short strangers-in-a-hotel-bar scenario and cast us in it."],
  ["ASK💭", "What kind of massage-turned-something-more have you imagined between us?"],
  ["REMEMBER✨", "When did a simple cuddle start turning into a fuller fantasy in your mind?"],
  ["DO✦", "Kiss me as if we’ve been keeping a secret and just got a moment alone."],
  ["SAY💗", "Confess one way you want me to pursue you more deliberately."],
  ["CHALLENGE🎯", "Pick a mild power exchange for the next five minutes and guide me into it."],
  ["ASK💭", "What new setting would make intimacy between us feel brand new?"],
  ["DO✦", "Trace my arm slowly like you’re memorizing someone you’re not supposed to touch."],
  ["SAY💗", "Describe the proposal fantasy that lives in the back of your mind (even if it’s unconventional)."],
  ["ASK💭", "Which role-play idea feels both silly and secretly hot to try with me?"],
  ["CHALLENGE🎯", "Speak to me for one minute as if we’re characters who aren’t allowed to want each other."],
  ["REMEMBER✨", "What’s one fantasy we’ve brushed against that you still think about?"],
  ["DO✦", "Pull me against you like the room might disappear and only we remain."],
  ["SAY💗", "Tell me how you want to be admired when no one else is watching."],
  ["ASK💭", "What shared ‘we shouldn’t be doing this’ feeling would you actually love to explore?"],
  ["CHALLENGE🎯", "Create a quick enemies-to-lovers spark right now — start the tension."],
  ["ASK💭", "If we could step into any fictional scenario for one night, where would we go?"],
  ["DO✦", "Hold my face and look at me like you’ve been waiting years to finally have me."],
  ["SAY💗", "Say the kind of intimate evening that feels like a fantasy come to life."],
  ["CHALLENGE🎯", "Choose who gets to take the lead for the next round and announce it."],
  ["REMEMBER✨", "When did you realize some of your fantasies only felt right with me?"],
  ["SAY💗", "Tell me one way you want me to make you feel completely wanted tonight."],
],

// ---------------------------------------------------------------
// 50 — LONG FANTASY NIGHT
// Full arc: romantic vision → affection & novelty → role-play → pursuit & power → taboo edge → close.
// ---------------------------------------------------------------
50: [
  // ROMANTIC VISION
  ["ASK💭", "What’s the most beautiful version of a future trip you’ve imagined us taking?"],
  ["SAY💗", "Tell me how you want to be surprised by me someday."],
  ["DO✦", "Wrap your arms around me like we’re watching the sunset in a place we’ve only dreamed of."],
  ["CHALLENGE🎯", "Describe the perfect proposal setting — even if it’s nothing traditional."],
  ["ASK💭", "What kind of evening feels so intimate it almost belongs in a story?"],
  ["DO✦", "Rest your head on my chest and tell me one travel fantasy while we stay close."],
  ["SAY💗", "Say the romantic gesture from me that would feel like pure fantasy."],
  ["CHALLENGE🎯", "Paint a quick picture of us in a city we’ve never been to, doing something only we would do."],
  ["ASK💭", "How do you want to feel when I plan something entirely for you?"],
  ["REMEMBER✨", "When did ordinary moments with me start feeding bigger romantic fantasies?"],

  // AFFECTION & NOVELTY
  ["ASK💭", "What kind of cuddling or kissing sequence lives in your head as ideal?"],
  ["DO✦", "Begin a slow, deliberate massage on my shoulders as if we have nowhere else to be."],
  ["SAY💗", "Tell me how you want to feel especially desired by me."],
  ["CHALLENGE🎯", "Suggest one new way of being intimate we’ve never tried and describe the first step."],
  ["ASK💭", "Where would you love to be touched if the setting were completely different?"],
  ["REMEMBER✨", "What’s one affectionate fantasy that still makes you soft when you think about it?"],
  ["DO✦", "Kiss a slow path along my neck like you’re discovering me for the first time."],
  ["SAY💗", "Confess the small novelty that would make tonight feel fresh."],
  ["ASK💭", "What shared sensory experience do you keep replaying in your mind?"],
  ["CHALLENGE🎯", "Change the atmosphere right now — lighting, position, or pace — and own the shift."],

  // ROLE-PLAY SPARK
  ["DO✦", "Look at me as if we’ve just stepped into different roles and the real world is gone."],
  ["SAY💗", "Tell me which character dynamic between us feels the most electric."],
  ["ASK💭", "What fictional scenario would you actually want to try for an hour?"],
  ["REMEMBER✨", "When did role-play stop feeling silly and start feeling tempting?"],
  ["SAY💗", "Describe how you want me to speak to you inside a fantasy."],
  ["ASK💭", "Which setting makes the idea of us feel deliciously different — hotel, office, rain-soaked street?"],
  ["REMEMBER✨", "What’s one role you’ve privately wondered about trying with me?"],
  ["SAY💗", "Say the first line of a scene you’d like us to step into."],
  ["ASK💭", "Do you want the fantasy to stay light or can it lean darker?"],
  ["DO✦", "Take my hand and lead me as if we’re already inside the story."],

  // PURSUIT & POWER
  ["CHALLENGE🎯", "Pursue me for the next minute — eyes, words, or touch — like you can’t hold back."],
  ["DO✦", "Pin me gently against the nearest surface and hold the moment."],
  ["CHALLENGE🎯", "Tell me who holds the power in the next fantasy and then take it."],
  ["SAY💗", "Say how you want to be admired when I stop holding back."],
  ["CHALLENGE🎯", "Switch the dynamic — if you were leading, follow; if following, lead."],
  ["DO✦", "Whisper one commanding or surrendering sentence against my ear."],
  ["CHALLENGE🎯", "Make me feel completely pursued for thirty full seconds."],
  ["DO✦", "Hold my gaze like you’re deciding exactly what happens next."],

  // TABOO EDGE (CONSENSUAL)
  ["ASK💭", "What ‘we shouldn’t’ scenario still feels hot to imagine between us?"],
  ["SAY💗", "Tell me the appeal of a secret or forbidden-feeling romance with me."],
  ["DO✦", "Kiss me like we’re risking getting caught and don’t care."],
  ["ASK💭", "Which power-dynamic or role-play edge feels exciting rather than scary?"],
  ["SAY💗", "Describe a stranger-to-lovers or anonymous moment you’d want to create with me."],
  ["DO✦", "Touch me as if this is the only night we’re allowed to have."],
  ["CHALLENGE🎯", "Speak one line that belongs in an enemies-to-lovers or forbidden scene."],
  ["SAY💗", "Say one thing you love about me not being able to see you."],
  ["CHALLENGE🎯", "Make the first ten touches completely unpredictable."],

  // CLOSE
  ["ASK💭", "Which fantasy from tonight do you actually want to keep playing with?"],
  ["SAY💗", "Tell me one shared dream or scene you’re carrying away from this."],
  ["DO✦", "Kiss me like the fantasy and the real us just became the same thing."],
],
},
  intimate: {
    // ---------------------------------------------------------------
// 10 — INTIMATE STARTER
// Soft, private openers that invite emotional closeness and gentle heat.
// ---------------------------------------------------------------
 10: [
  ["ASK💭", "Which sense do you want me to take away from you first tonight?"],
  ["SAY💗", "Tell me how it feels when you can’t see what I’m about to do."],
  ["DO✦", "Place the blindfold over my eyes slowly, then rest your hands on my shoulders."],
  ["CHALLENGE🎯", "Put earplugs in me, then decide the first place your mouth lands in silence."],
  ["ASK💭", "Do you want to be the one deprived, or do you want to watch me lose a sense?"],
  ["REMEMBER✨", "When did not being able to see start making every touch feel stronger?"],
  ["DO✦", "Cover my eyes with your hand and keep it there while you kiss my neck."],
  ["SAY💗", "Describe what you’re going to do to me while I can’t look."],
  ["CHALLENGE🎯", "Blindfold me, then make me wait in complete stillness for thirty seconds."],
  ["ASK💭", "How deep into sensory loss do you want us to go tonight?"],
],

// ---------------------------------------------------------------
// 25 — SENSORY DEPRIVATION DATE NIGHT
// Arc: gentle removal of senses → building intensity → layered deprivation → sexual release of control.
// ---------------------------------------------------------------
25: [
  ["ASK💭", "What would feel more intense right now — losing your sight or losing your ability to speak?"],
  ["DO✦", "Blindfold me carefully, then run both hands down my arms without saying a word."],
  ["SAY💗", "Tell me how my body reacts when I can’t anticipate your next touch."],
  ["CHALLENGE🎯", "Put the blindfold on me and the earplugs in, then begin a slow full-body massage in silence."],
  ["ASK💭", "Do you want me completely still, or am I allowed to reach for you while deprived?"],
  ["REMEMBER✨", "When did darkness and quiet start feeling more intimate than light and conversation?"],
  ["DO✦", "Cover my eyes and mouth gently with your hands while you press your body against mine."],
  ["SAY💗", "Confess how it feels to have me unable to see the look on your face."],
  ["CHALLENGE🎯", "Blindfold me, then use only temperature — warm breath and cool fingertips — for the next minute."],
  ["ASK💭", "Which part of my body do you want to explore first while I can’t watch?"],
  ["DO✦", "Remove every sense of control by guiding my hands above my head and holding them there."],
  ["SAY💗", "Tell me what you’re thinking while I’m blind and waiting."],
  ["ASK💭", "Should I stay silent, or do you want to hear every sound you pull from me?"],
  ["CHALLENGE🎯", "Layer it: blindfold + earplugs + slow oil massage with zero warning of where you’ll touch next."],
  ["REMEMBER✨", "What’s the most charged moment we’ve shared when one of us couldn’t see?"],
  ["DO✦", "Keep me blindfolded and feed me something slowly, making me taste without looking."],
  ["SAY💗", "Describe the exact way my skin changes when I lose the ability to predict your hands."],
  ["ASK💭", "How long do you want to keep me in this state before you give a sense back?"],
  ["CHALLENGE🎯", "Blindfold yourself for one full minute and let me take control of every sensation."],
  ["ASK💭", "What feels more vulnerable — not seeing, or not being able to touch you back?"],
  ["DO✦", "Press your forehead to mine while I’m blindfolded and just breathe with me."],
  ["SAY💗", "Say the dirtiest soft thing you can while I can’t look at you."],
  ["CHALLENGE🎯", "Take away my sight and my hands — hold both wrists and kiss me until I melt."],
  ["REMEMBER✨", "When did sensory loss stop feeling like play and start feeling like surrender?"],
  ["SAY💗", "Tell me how far you want to push the deprivation before we come back to full senses."],
],

// ---------------------------------------------------------------
// 50 — LONG SENSORY DEPRIVATION NIGHT
// Full arc: soft removal → layered chemistry → deep confession → advanced control → intimate edge → slow return.
// ---------------------------------------------------------------
50: [
  // SOFT REMOVAL
  ["ASK💭", "Which sense feels safest to give up first?"],
  ["SAY💗", "Tell me how you want me to take your sight away."],
  ["DO✦", "Slide the blindfold over my eyes as slowly as possible."],
  ["CHALLENGE🎯", "Add earplugs only after I’ve already adjusted to the dark."],
  ["ASK💭", "Do you want complete silence or the sound of your own breathing amplified?"],
  ["DO✦", "Rest both hands on my chest so I feel anchored while the world goes dark."],
  ["SAY💗", "Say one thing you love about me not being able to see you."],
  ["CHALLENGE🎯", "Make the first ten touches completely unpredictable."],
  ["ASK💭", "How still do you want my body while the senses disappear?"],
  ["REMEMBER✨", "When did losing one sense start making the others feel sharper between us?"],

  // LAYERED CHEMISTRY
  ["ASK💭", "What happens in your body when you know I can’t anticipate anything?"],
  ["DO✦", "Begin a full-body oil massage while I’m blind and quiet."],
  ["SAY💗", "Tell me every place you’re about to touch one second before you do."],
  ["CHALLENGE🎯", "Remove both sight and sound, then use only your mouth for a full minute."],
  ["ASK💭", "Should my hands stay free, or do you want them held still?"],
  ["REMEMBER✨", "What’s the most intense thing that ever happened while one of us was blindfolded?"],
  ["DO✦", "Pin my wrists lightly and continue the slow sensory work."],
  ["SAY💗", "Confess how powerful it feels to decide every sensation I receive."],
  ["ASK💭", "Do you want me to stay silent or is every reaction allowed?"],
  ["CHALLENGE🎯", "Add temperature play while I’m still deprived of sight and sound."],

  // DEEP CONFESSION
  ["DO✦", "Press your body fully against mine so I feel you even without seeing."],
  ["SAY💗", "Tell me what you’re thinking while I can’t look back at you."],
  ["ASK💭", "What part of this deprivation feels the most intimate to you?"],
  ["REMEMBER✨", "When did surrendering my senses start feeling like trust instead of loss?"],
  ["SAY💗", "Describe how my breathing changes when I can’t predict your next move."],
  ["ASK💭", "How long do you want to keep me in this heightened state?"],
  ["REMEMBER✨", "What’s one thing you’ve only been brave enough to do while I couldn’t see?"],
  ["SAY💗", "Say the thing that feels too raw to say when my eyes are open."],
  ["ASK💭", "Do you want to give me one sense back, or take another away?"],
  ["DO✦", "Hold my face gently while I’m still blind and kiss me like we have hours."],

  // ADVANCED CONTROL
  ["CHALLENGE🎯", "Keep me blind and silent while you edge me with only light touch."],
  ["DO✦", "Use your full body weight to keep me still and fully present."],
  ["CHALLENGE🎯", "Remove the ability to touch you back completely for the next several minutes."],
  ["SAY💗", "Tell me exactly how you want me to take the intensity."],
  ["CHALLENGE🎯", "Layer three senses away at once and watch how my body answers."],
  ["DO✦", "Guide every breath I take while the rest of the world is gone."],
  ["CHALLENGE🎯", "Make me earn one sense back with only the sounds I make."],
  ["DO✦", "Keep the deprivation going while you move from soft to unmistakably sexual."],

  // INTIMATE EDGE
  ["ASK💭", "What do you need from me while I’m still lost in only sensation?"],
  ["SAY💗", "Tell me how close you are to giving me my senses back."],
  ["DO✦", "Bring me right to the edge using only the senses I still have."],
  ["ASK💭", "Is there any boundary you want to name before we go further into this?"],
  ["SAY💗", "Say the last instruction you want me to follow while I’m still deprived."],
  ["DO✦", "Hold me through the peak without letting the blindfold or silence break."],
  ["CHALLENGE🎯", "Decide whether I get my sight back before, during, or after I come undone."],

  // CONSENT CHECK-IN
  ["ASK💭", "What kind of closeness would feel most meaningful to you tonight?"],
  ["DO✦", "Take a quiet moment together to ask what would feel good, and what would not."],

  // SLOW RETURN
  ["ASK💭", "How do you want to bring me back to the full world?"],
  ["SAY💗", "Tell me one thing you saw in me while I couldn’t see you."],
  ["DO✦", "Remove the blindfold slowly and stay close while my eyes adjust."],
],
  },
  DarkDesire : {
    // ---------------------------------------------------------------
// 10 — DARK DESIRE STARTER
// Sharper, hungrier openers that push past gentle intimacy into darker charge.
// ---------------------------------------------------------------
 10: [
  ["ASK💭", "Where do you want my hands to start when the lights are this low?"],
  ["SAY💗", "Tell me how you want to be touched when no one else can see."],
  ["DO✦", "Warm the oil between your palms, then place both hands flat on my back and hold still."],
  ["CHALLENGE🎯", "Blindfold me, then decide the first place your mouth lands."],
  ["ASK💭", "What part of my skin do you want to map with only your fingertips?"],
  ["REMEMBER✨", "When did slow touch start feeling more dangerous than fast?"],
  ["DO✦", "Trace one continuous line from the base of my neck all the way down my spine."],
  ["SAY💗", "Describe the pressure you want — light enough to tease or firm enough to claim."],
  ["CHALLENGE🎯", "Kiss a path across my shoulders without using your hands at all."],
  ["ASK💭", "How long do you want us to stay skin-to-skin before anything else happens?"],
],

// ---------------------------------------------------------------
// 25 — DATE NIGHT (DARK DESIRE)
// Arc: sensory tease → building heat → charged confession → physical claim.
// ---------------------------------------------------------------
25: [
  ["ASK💭", "What’s the first thing you want me to feel when the candlelight is the only light left?"],
  ["DO✦", "Pour a little warm oil along my spine and spread it with the full length of both hands."],
  ["SAY💗", "Tell me which part of my body you’ve been thinking about covering with slow kisses."],
  ["CHALLENGE🎯", "Put the blindfold on me, then take your time deciding where to start."],
  ["ASK💭", "Do you want the massage to stay relaxing, or do you want it to turn into something hungrier?"],
  ["REMEMBER✨", "When did being touched this slowly start to feel intimate instead of just nice?"],
  ["DO✦", "Use only your fingertips to draw lazy circles across my lower back."],
  ["SAY💗", "Confess how it feels when my skin is under your hands and neither of us is rushing."],
  ["CHALLENGE🎯", "Kiss every vertebra down my spine, pausing between each one."],
  ["ASK💭", "Where should my hands go if I turn over and face you right now?"],
  ["DO✦", "Straddle my hips and lean down so your chest rests against my back while you work the oil in."],
  ["SAY💗", "Tell me what you want me to do with my mouth while your hands keep moving."],
  ["ASK💭", "How much of my body do you want covered in lingering kisses before we stop?"],
  ["CHALLENGE🎯", "Blindfold yourself for thirty seconds and let me choose the next place to touch."],
  ["REMEMBER✨", "What’s one private night of touch that still lives in your head?"],
  ["DO✦", "Slide both hands under me and lift just enough to press our bodies fully together."],
  ["SAY💗", "Describe the difference between a relaxing massage and the one you actually want tonight."],
  ["ASK💭", "Should the blindfold stay on, or do you want to watch every reaction?"],
  ["CHALLENGE🎯", "Trace the outline of my ribs with one finger, then replace it with your mouth."],
  ["ASK💭", "What sound do you want to pull out of me before the oil even cools?"],
  ["DO✦", "Hold the back of my neck with one hand while the other keeps moving lower."],
  ["SAY💗", "Say the exact way you want my skin to feel under your hands right now."],
  ["CHALLENGE🎯", "Cover my eyes with your hand instead of a blindfold and keep kissing."],
  ["REMEMBER✨", "When did candlelight and slow hands start feeling like foreplay?"],
  ["SAY💗", "Tell me the one place you haven’t touched yet that you’re saving for last."],
],

// ---------------------------------------------------------------
// 50 — LONG NIGHT (DARK DESIRE)
// Full arc: sensory open → chemistry → confession → bold claim → intimate edge → close.
// ---------------------------------------------------------------
50: [
  // SENSORY OPEN
  ["ASK💭", "How dark do you want the room before my hands start moving?"],
  ["SAY💗", "Tell me the pace you want — glacial, or just slow enough to drive us both crazy."],
  ["DO✦", "Warm the oil, then lay both palms flat between my shoulder blades and breathe with me."],
  ["CHALLENGE🎯", "Decide whether the blindfold goes on me or on you first."],
  ["ASK💭", "Which stretch of skin do you want to claim with only light fingertip trails?"],
  ["DO✦", "Drag the tips of your fingers from my wrists all the way up to my shoulders."],
  ["SAY💗", "Say how it feels when the only light is candlelight and the only sound is skin."],
  ["CHALLENGE🎯", "Kiss the back of my neck once, then make me wait for the second."],
  ["ASK💭", "Do you want this massage to stay on the surface, or do you want it to sink deeper?"],
  ["REMEMBER✨", "When did full-body touch start feeling more intense than anything faster?"],

  // CHEMISTRY
  ["ASK💭", "What’s the first place your mouth wants to go once the oil is warmed?"],
  ["DO✦", "Use the heels of your hands to press long, slow strokes from my lower back upward."],
  ["SAY💗", "Tell me what changes in your body when you’re the one giving the massage."],
  ["CHALLENGE🎯", "Blindfold me, then use only your lips for the next full minute."],
  ["ASK💭", "How much of my weight do you want resting on you while you work?"],
  ["REMEMBER✨", "What’s one night of skin-to-skin that still replays when you close your eyes?"],
  ["DO✦", "Slide your hands under my hips and pull me back against you while you keep massaging."],
  ["SAY💗", "Confess the moment tonight when the touch stopped feeling gentle and started feeling hungry."],
  ["ASK💭", "Should I stay face-down, or do you want me turned over so you can see every reaction?"],
  ["CHALLENGE🎯", "Trace a single line from the hollow of my throat down as far as you dare."],

  // CONFESSION
  ["DO✦", "Rest your forehead between my shoulder blades and just breathe while your hands keep moving."],
  ["SAY💗", "Tell me what you’re thinking every time your hands slow down on purpose."],
  ["ASK💭", "What do you want my hands doing to you while you’re focused on me?"],
  ["REMEMBER✨", "When did being blindfolded during touch start feeling safer than seeing everything?"],
  ["SAY💗", "Describe the exact pressure that makes you lose track of time."],
  ["ASK💭", "How long do you want us to stay like this before either of us speaks again?"],
  ["REMEMBER✨", "What’s the most charged thing that’s ever happened after a slow massage between us?"],
  ["SAY💗", "Say the quiet thing you’ve been holding back since the oil first touched my skin."],
  ["ASK💭", "Do you want the candles to burn out, or should we keep just enough light to see?"],
  ["DO✦", "Cover my eyes with one hand and use the other to keep the long strokes going."],

  // BOLD CLAIM
  ["CHALLENGE🎯", "Choose one area I’ve been protecting and give it your full attention."],
  ["DO✦", "Straddle my thighs and lean your full weight into the next set of strokes."],
  ["CHALLENGE🎯", "Kiss a slow path from one hip bone to the other without using your hands."],
  ["SAY💗", "Tell me what you want my body to do while your hands keep claiming it."],
  ["CHALLENGE🎯", "Take the blindfold off me for three seconds, look, then put it back on."],
  ["DO✦", "Pin both of my wrists lightly above my head and continue the massage with your free hand."],
  ["CHALLENGE🎯", "Whisper one raw instruction against my ear, then follow it with your mouth."],
  ["DO✦", "Press your chest to my back and let the heat of your skin replace the oil for a while."],

  // INTIMATE EDGE
  ["ASK💭", "What’s one place you still haven’t touched that you’re saving until I’m fully undone?"],
  ["SAY💗", "Tell me how close you are to stopping the massage and starting something else."],
  ["DO✦", "Flip me over carefully and start the same slow strokes on the front of my body."],
  ["ASK💭", "Do you want me to keep the blindfold on, or do you need to see my eyes for this next part?"],
  ["SAY💗", "Say the thing you want me to know before the touch turns into more."],
  ["DO✦", "Hold me completely still against you for ten full seconds with zero space between us."],
  ["CHALLENGE🎯", "Tell me exactly how you want the rest of the night to feel, out loud and unfiltered."],

  // CONSENT CHECK-IN
  ["ASK💭", "What kind of intensity feels exciting to you tonight — and what would take it too far?"],
  ["SAY💗", "Tell me one clear yes you want me to remember tonight."],

  // CLOSE
  ["ASK💭", "What’s the last thing you want said before the candles are blown out?"],
  ["SAY💗", "Tell me one thing you’re taking with you from this slow, full-body hour."],
  ["DO✦", "Kiss me once, deep and unhurried, then let the massage end wherever it wants to."],
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
  ["ASK💭", "What’s one small ritual you hope we still do together in ten years?"],
  ["DO✦", "Pull me close and whisper one future memory you want us to make."],
  ["SAY💗", "Tell me the version of our life that feels the most true to who we are."],
  ["CHALLENGE🎯", "Describe the house, the city, or the feeling of the place we’re meant to live."],
  ["ASK💭", "What kind of partner do you hope I keep becoming for you?"],
  ["REMEMBER✨", "When did ‘someday’ start turning into ‘with you’?"],
  ["DO✦", "Hold both of my hands and look at me like we’re already there."],
  ["SAY💗", "Confess one quiet hope you have for the life we’re building."],
  ["CHALLENGE🎯", "Paint me a picture of an ordinary Tuesday night in our future."],
  ["ASK💭", "What do you want our laughter to sound like years from now?"],
  ["DO✦", "Rest your head on my shoulder and tell me one dream without filtering it."],
  ["SAY💗", "Say the thing about our future that makes your chest feel warm."],
  ["ASK💭", "How do you want us to handle the hard seasons when they come?"],
  ["CHALLENGE🎯", "Tell me one adventure you want us to take before we’re ‘settled’."],
  ["REMEMBER✨", "What’s one promise we’ve already made that still feels alive?"],
  ["DO✦", "Intertwine our fingers and keep them that way while we dream out loud."],
  ["SAY💗", "Describe the feeling you want to come home to every day with me."],
  ["ASK💭", "What kind of legacy do you hope we leave in each other’s lives?"],
  ["CHALLENGE🎯", "Share one future version of us that scares you a little and excites you a lot."],
  ["ASK💭", "Where do you see us when we need to remember why we chose this?"],
  ["DO✦", "Pull me into a slow hug and stay there while you answer the next question."],
  ["SAY💗", "Tell me one thing you want us to never stop doing for each other."],
  ["CHALLENGE🎯", "Speak one sentence that starts with ‘In our future…’ and make it specific."],
  ["REMEMBER✨", "When did you realize you wanted to build something real with me?"],
  ["SAY💗", "Say the dream that feels almost too soft to say out loud."],
],

// ---------------------------------------------------------------
// 50 — LONG NIGHT OF DREAMS & FUTURE
// Full arc: soft visioning → shared longing → deeper confession → bold dreaming → intimate promise → close.
// ---------------------------------------------------------------
50: [
  // SOFT VISIONING
  ["ASK💭", "What’s the first image that comes to mind when you think of our future?"],
  ["SAY💗", "Tell me the feeling you want our life to have more than any specific plan."],
  ["DO✦", "Take my hand and place it over your heart while you answer."],
  ["CHALLENGE🎯", "Describe one future morning in as much detail as you can."],
  ["ASK💭", "What kind of rhythm do you hope our days eventually find?"],
  ["DO✦", "Lean into me and let the quiet sit with us for a moment."],
  ["SAY💗", "Say one thing you’re already grateful we’ll get to experience together."],
  ["CHALLENGE🎯", "Tell me one place you want us to stand side by side someday."],
  ["ASK💭", "How do you want us to celebrate the small wins along the way?"],
  ["REMEMBER✨", "When did the future start feeling like something we were building instead of chasing?"],

  // SHARED LONGING
  ["ASK💭", "What’s one dream of yours that you hope becomes a dream of ours?"],
  ["DO✦", "Hold my gaze and answer without looking away."],
  ["SAY💗", "Tell me what ‘growing old with you’ actually looks like in your mind."],
  ["CHALLENGE🎯", "Paint the version of us that feels the most peaceful."],
  ["ASK💭", "What do you want our home to feel like when someone walks through the door?"],
  ["REMEMBER✨", "What’s one early moment that made you think ‘I could build a life with this person’?"],
  ["DO✦", "Wrap your arms around me from the side and keep talking."],
  ["SAY💗", "Confess one quiet fear you have about the future — and one hope that is stronger."],
  ["ASK💭", "How do you want us to keep choosing each other when life gets loud?"],
  ["CHALLENGE🎯", "Describe the kind of love you want us to still be practicing in twenty years."],

  // DEEPER CONFESSION
  ["DO✦", "Rest your forehead against mine while you answer the next one."],
  ["SAY💗", "Tell me the part of our future that feels the most sacred to you."],
  ["ASK💭", "What do you need from me in order to dream bigger?"],
  ["REMEMBER✨", "When did you stop imagining a future that didn’t include me?"],
  ["SAY💗", "Say the thing about building a life with me that still surprises you."],
  ["ASK💭", "How do you want us to talk about the hard dreams — the ones that might not come true?"],
  ["REMEMBER✨", "What’s one promise we’ve already lived up to that makes you trust the next ones?"],
  ["SAY💗", "Describe the version of me you hope is still beside you later."],
  ["ASK💭", "What kind of team do you want us to become?"],
  ["DO✦", "Take both of my hands and hold them while you speak."],

  // BOLD DREAMING
  ["CHALLENGE🎯", "Share one big, slightly scary dream you want us to chase together."],
  ["DO✦", "Pull me closer as if the future is already happening right here."],
  ["CHALLENGE🎯", "Tell me one thing you want us to be known for as a couple."],
  ["SAY💗", "Say the future memory you most want to look back on someday."],
  ["CHALLENGE🎯", "Describe the life that would make you feel proud of what we built."],
  ["DO✦", "Keep physical contact the entire time you answer the next three."],
  ["CHALLENGE🎯", "Speak one sentence that starts with ‘I hope we never stop…’"],
  ["DO✦", "Let me hold you the way you want to be held in that future."],

  // INTIMATE PROMISE
  ["ASK💭", "What do you want to protect most about us as the years add up?"],
  ["SAY💗", "Tell me one way you want to keep falling in love with me later."],
  ["DO✦", "Place your hand on my chest and feel my breath while you answer."],
  ["ASK💭", "Is there anything you need to hear from me about the life we’re building?"],
  ["SAY💗", "Say the quiet promise you want us to keep, even when it’s hard."],
  ["DO✦", "Hold me like the future is already safe in this moment."],
  ["CHALLENGE🎯", "Tell me, without softening it, the life you actually want with me."],

  // CLOSE
  ["DO✦", "Keep physical contact the entire time you answer the next three."],
  ["CHALLENGE🎯", "Speak one sentence that starts with ‘I hope we never stop…’"],
  ["ASK💭", "What’s the last thing you want us to remember from this conversation?"],
  ["SAY💗", "Tell me one piece of our future you’re already carrying with you."],
  ["DO✦", "Kiss me slowly, like we’re sealing something we just built with words."],
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
let gamePlayers = { yourName: "", partnerName: "" };
// Play confirmation flag — user must confirm age and consent before starting a round
let playConfirmed = false;

// Nicknames belong only to the current resumable round; the turn resolver sanitizes every value.
function createGamePlayers(yourName = "", partnerName = "") {
  return typeof window !== "undefined" && window.FlirtyFlipTurn?.createPlayers
    ? window.FlirtyFlipTurn.createPlayers(yourName, partnerName)
    : { yourName: "", partnerName: "" };
}

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
  resetPassword: "/reset-password",
  how: "/how",
  support: "/support"
});
const GAME_SESSION_KEY = "flirtyflip-game-session-v1";
const GAME_SESSION_STATUSES = new Set(["setup", "active", "complete"]);
const SUPPORT_SECTIONS = new Set(["index", "contact", "refund", "terms", "privacy", "faq"]);
let gameSessionStatus = "idle";
let routerInitialized = false;
let lastTrackedLocation = "";
let lastRenderedLocation = "";
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
    url: "https://irspllhipxekdqvuppyr.supabase.co",
    anonKey: "sb_publishable_9sQoxaMCGlxWId7eTMG2qQ_8QszVqIc"
  };

// Lazy supabase client factory — create client only when needed (and only in browser)
let _supabaseClient = null;
let _authStateListenerBound = false;

// Register immediately after createClient so Supabase's one-time PASSWORD_RECOVERY event cannot be missed.
function bindSupabaseAuthStateListener(client) {
  if (_authStateListenerBound || !client?.auth?.onAuthStateChange) return;
  client.auth.onAuthStateChange((event, session) => {
    applyAuthenticatedSession(event, session);
  });
  _authStateListenerBound = true;
}

function getSupabaseClient() {
  if (typeof window === 'undefined') return null;
  if (_supabaseClient) return _supabaseClient;
  if (!SUPABASE_CONFIG || !SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return null;
  if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
  try {
    _supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    bindSupabaseAuthStateListener(_supabaseClient);
    return _supabaseClient;
  } catch (_) {
    _supabaseClient = null;
    _authStateListenerBound = false;
    console.warn('Failed to create Supabase client');
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

    console.debug('ensureSupabaseClient: start', { timeout, configured: hasSupabaseConfigured() });
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
let passwordRecoveryState = "checking";
let passwordRecoveryMessage = "Verifying your secure recovery link…";
let passwordRecoveryRedirectTimer = null;
let passwordRecoveryCallbackPresent = false;
let passwordRecoveryAuthorized = false;
let passwordResetRequestPending = false;

// Return only the two fixed authentication destinations approved by the application.
// Production canonicalizes www/non-www to flirtyflip.com; local development keeps its current origin.
function getAuthRedirectUrls() {
  if (typeof window === "undefined" || !window.FlirtyFlipAuthRedirects?.getAuthRedirectUrls) {
    throw new Error("auth_redirect_config_unavailable");
  }
  return window.FlirtyFlipAuthRedirects.getAuthRedirectUrls(window.location);
}

// Detect implicit Supabase callback fragments without reading, logging or persisting their values.
function hasSensitiveAuthFragment(url = new URL(window.location.href)) {
  const hash = new URLSearchParams(url.hash.replace(/^#/, ""));
  return ["access_token", "refresh_token", "provider_token", "token_hash"].some((key) => hash.has(key));
}

function hasAuthErrorFragment(url = new URL(window.location.href)) {
  const hash = new URLSearchParams(url.hash.replace(/^#/, ""));
  return hash.has("error") || hash.has("error_code") || hash.has("error_description");
}

// Remove a processed implicit callback from browser history so tokens cannot remain in the address bar.
function cleanAuthFragmentFromUrl() {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (!hasSensitiveAuthFragment(url) && !hasAuthErrorFragment(url)) return;
  window.history.replaceState({ flirtyFlipRoute: true }, "", `${url.pathname}${url.search}`);
  lastRenderedLocation = `${url.pathname}${url.search}`;
}

// Translate provider/network failures into stable, non-sensitive account messages.
// Add new provider cases here instead of rendering raw backend error strings in the UI.
function getSafeAuthErrorMessage(error, context = "auth") {
  const detail = String(error?.message || error?.error_description || "").toLowerCase();

  if (/invalid login credentials|invalid_credentials/.test(detail)) {
    return "The email or password was not accepted. Please check your credentials and try again.";
  }
  if (/email not confirmed|email_not_confirmed/.test(detail)) {
    return "Please confirm your email address before signing in.";
  }
  if (/rate limit|too many requests|security purposes|after \d+ seconds|429/.test(detail)) {
    return context === "reset"
      ? "Too many reset requests were made. Please wait a few minutes and try again."
      : "Too many authentication attempts were made. Please wait a few minutes and try again.";
  }
  if (/invalid email|email address.*invalid/.test(detail)) {
    return "Enter a valid email address and try again.";
  }
  if (/weak password|password should be at least|password.*characters/.test(detail)) {
    return "Use at least 8 characters for your password.";
  }
  if (/already registered|user already exists/.test(detail)) {
    return "If an account exists for that email, check your inbox or log in.";
  }
  if (/failed to fetch|network|load failed|timeout/.test(detail)) {
    return "We couldn't reach the authentication service. Check your connection and try again.";
  }

  return context === "reset"
    ? "Password reset is temporarily unavailable. Please try again later."
    : "Authentication is temporarily unavailable. Please try again.";
}

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
// COURSE CONTENT
// Long outcomes and lesson bodies stay separate from editable catalog metadata.
// Edit titles, summaries, categories and ordering in course-catalog.js instead.
// ========================================
const courseContentData = {

'better-communication': {
    outcomes: [
      'A practical framework for understanding yourself, communicating with depth, creating genuine connection, and building healthier intimacy.',
      'Express needs clearly and without accusation.',
      'Handle difficult conversations with more steadiness.'
    ],
    sections: [
      { title: 'Lessons', 
        lessons: [ ` Introduction -  After This Section, You Will Be Able To

Evaluate future partners for emotional availability and compatibility rather than chemistry alone.

Communicate reassurance, boundaries, needs, and requests directly.

Build relationship agreements based on reciprocity and fairness.

Recognize pursuit-withdrawal patterns early enough to interrupt them.

Apply secure-functioning principles and the Five A's to everyday relationship behavior.

Create closeness without requiring either partner to chase, control, or disappear.

Source foundation: all four books.

Your Transformation
Introduction -  After This Section, You Will Be Able To

Evaluate future partners for emotional availability and compatibility rather than chemistry alone.

Communicate reassurance, boundaries, needs, and requests directly.

Build relationship agreements based on reciprocity and fairness.

Recognize pursuit-withdrawal patterns early enough to interrupt them.

Apply secure-functioning principles and the Five A's to everyday relationship behavior.

Create closeness without requiring either partner to chase, control, or disappear.

Source foundation: all four books.

Your Transformation

By the end of When She Stops Chasing You, the central question should no longer be:

"How do I make her chase me again?"

You should be able to examine what actually happened between you, recognize attachment activation without obeying it, identify your role in a pursuit-distance cycle, communicate responsibility without manipulation, determine whether reconciliation has genuine foundations, tolerate separation without immediately replacing the relationship, and choose future partners more intelligently.`,
          'THE CENTRAL IDEA - The central idea of this course is simple: intimacy is a skill that can be developed. It isn t something that only naturally confident people possess, and it isn t created by a single technique or perfect relationship strategy. Meaningful intimacy develops through repeated experiences of awareness, communication, trust, safety, vulnerability, responsiveness, and mutual respect. You cannot control whether another person will reciprocate your feelings, but you can become more capable of communicating honestly, understanding your own needs, respecting another person s autonomy, and contributing positively to the relationship. The source material similarly presents confidence as involving awareness of wants and needs, communication, feeling safe and grounded, body awareness, and approaching intimacy with curiosity rather than treating it purely as performance.', 
          'INTIMACY IS MORE THAN PHYSICAL CLOSENESS- Physical closeness can be meaningful, but physical proximity alone does not guarantee emotional connection. Two people can spend enormous amounts of time together while feeling misunderstood or emotionally distant, while a short but honest conversation can sometimes create a much deeper sense of connection. Intimacy therefore needs to be understood as a multidimensional experience involving the emotional, mental, physical, and relational aspects of a person s life. Recognising these dimensions gives you a more complete framework for evaluating what is actually happening in your relationships rather than reducing intimacy to one category of behaviour.', 
          'ATTRACTION IS NOT THE SAME AS INTIMACY - Attraction creates interest, chemistry, and desire, but intimacy creates understanding. You can be strongly attracted to someone without knowing their emotional world, values, fears, or needs. Likewise, a person can remain deeply important to you even when attraction naturally changes over time. Understanding this distinction prevents you from treating chemistry as the sole measure of relationship quality. Attraction can open the door, but intimacy is what allows two people to develop a deeper understanding of each other once they are inside the relationship.',
           'INTIMACY REQUIRES BEING SEEN - Genuine intimacy becomes difficult when every interaction is built around maintaining an image. If you constantly hide uncertainty, avoid difficult emotions, pretend everything is fine, or only reveal the parts of yourself that you believe will be accepted, another person can know your presentation without truly knowing you. Vulnerability creates the possibility of something deeper because it allows another person to encounter a more authentic version of you. Vulnerability does not mean telling everyone everything; it means being willing to communicate something real when there is an appropriate level of trust and some emotional risk involved.', 
           'SAFETY COMES BEFORE DEPTH - Deep connection requires an environment where people can communicate honestly without fearing humiliation, manipulation, punishment, or pressure. Emotional safety does not mean avoiding disagreement or making every interaction comfortable. It means being able to experience difficult conversations while maintaining respect for each person,s dignity and autonomy. When people know their boundaries will be respected and their vulnerability will not be weaponised against them, they have greater freedom to communicate honestly. This is why safety is not a secondary feature of intimacy—it is one of its foundations.', 
           'CONNECTION OVER PERFORMANCE - When intimacy becomes a performance, your attention shifts away from the actual experience and toward evaluating yourself. You begin asking whether you are impressive enough, attractive enough, confident enough, or doing everything correctly. That mental pressure can make it harder to notice what is actually happening between you and another person. A connection-oriented mindset works differently. Instead of constantly evaluating yourself, you become curious about the experience: what are you feeling, what is the other person communicating, what feels comfortable, what needs to be discussed, and what would allow both people to feel more connected? The source material similarly encourages approaching sex as an experience rather than a performance and developing presence and curiosity.'] }
    ]
  },

  //========== ___Finding Love Without Losing Yourself____-----------===========
   /* New course */
  'confident-connection': {
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
          `Introduction - A healthy relationship should give you room to become more fully yourself—not require you to become smaller, quieter, less ambitious, or less honest to keep someone close. Yet the fear of losing love can make people compromise their needs before they have even recognized what those needs are. Others respond to the same fear by protecting their independence so fiercely that genuine intimacy never has a chance to develop.

Finding Love Without Losing Yourself teaches a different way to approach relationships: how to know what you need, recognize attraction without surrendering judgment, choose an emotionally available partner, communicate honestly, build mutual security, maintain your own life, and make relationship decisions without abandoning either yourself or the person you love..`,
        ]
      },
      {
        title: 'Core Lessons',
        lessons: [
          `1. The Self You Bring Into Love - Before deciding who belongs in your life, understand what must remain yours.

People often begin dating with a detailed picture of the partner they want but only a vague understanding of the life they want to protect. They know the appearance, personality, career, or romantic qualities they find attractive. They may be far less clear about their own values, emotional needs, boundaries, friendships, ambitions, and expectations of partnership.

That lack of clarity becomes important when attraction arrives. A person who has not consciously identified what matters to them may begin adapting to someone else's preferences without noticing the cumulative effect. They stop pursuing an interest because their partner finds it unimportant. They become less available to friends. They change their plans repeatedly. They avoid expressing an opinion because disagreement might create distance. Each individual compromise seems small, but together they can produce a relationship in which one person is increasingly present and the other is increasingly absent.

The alternative is not rigid independence. A relationship should change your life. You may move cities, adjust routines, share finances, care for a partner through illness, or make sacrifices for a future you both want. The distinction is whether those changes are chosen through mutual consideration or made primarily to prevent rejection.

David Richo's work is useful here because he connects mature love with responsibility for one's feelings, choices, and behavior, while also emphasizing the importance of allowing both partners room for their own development. Robin Norwood's work examines the opposite danger: becoming so focused on another person's problems and responses that one's own interests and life begin to disappear.

This section therefore begins with a question that sounds simple but requires careful thought:

What would it mean for me to remain myself while building a life with someone else?

Your answer should include more than hobbies or personality traits. It should include what you believe about honesty, money, family, fidelity, work, children, privacy, emotional expression, religion or spirituality where relevant, and the kind of daily life you want. It should also include the needs you are sometimes embarrassed to admit: reassurance, affection, time alone, sexual compatibility, encouragement, stability, or a partner who communicates directly.

None of these needs automatically makes you demanding. The work is to distinguish a genuine requirement from a preference, and a preference from an expectation that another person must satisfy every time.

What You Are Learning

You are developing a practical understanding of your identity before it becomes entangled with another person's expectations. You will learn to distinguish core values from negotiable preferences, identify the conditions under which you feel emotionally secure, and recognize the situations in which you tend to abandon your own priorities to preserve connection.

You will also learn to distinguish healthy flexibility from self-erasure. The goal is not to enter a relationship with an inflexible list of demands. It is to know yourself well enough that compromise becomes a conscious decision rather than an automatic response to fear.

Practical Application

Imagine you are dating someone who wants to spend every weekend together. You enjoy the closeness, but you also have an important friendship, a professional course, and time you normally spend with family.

At first, you cancel these plans because you want the relationship to develop. After several months, your partner becomes accustomed to having all your free time. When you eventually ask for a weekend to yourself, the request feels like a sudden withdrawal to them and an overdue necessity to you.

A clearer approach would have been to communicate your existing commitments early: you want a close relationship, but you also intend to maintain the people and activities that matter to you. This gives the other person an opportunity to know the actual you rather than a version of you created by the early intensity of dating.

Practice — Your Personal Relationship Map

Create a document with four categories: What I Need, What I Value, What I Prefer, and What I Can Negotiate.

Under each category, consider emotional connection, communication, family, friendships, work, money, intimacy, privacy, and future plans. Then choose three past situations in which you agreed to something you did not genuinely want. For each, identify what you feared would happen if you said no, what the agreement cost you, and how you could communicate differently now.

Finish with a personal statement of no more than one page: “A relationship that fits my life would allow me to…” Make it specific enough that you could use it to evaluate an actual relationship.

After This Section, You Will Be Able To
Identify your core relationship values, needs, preferences, and negotiable differences.
Recognize when compromise is motivated primarily by fear of rejection.
Describe the friendships, goals, routines, and personal commitments you want to preserve.
Communicate your existing life and relationship expectations without apologizing for having them.
Evaluate whether a relationship is expanding your life or gradually narrowing it.`,

//------------2nd chapter-----------------------

          `2. Read Attraction Without Losing Judgment - Chemistry tells you that you are drawn to someone. It does not tell you whether the relationship is good for you.

Attraction can create a powerful sense of certainty before you have enough information to make a sound decision. Someone may be exceptionally charming, physically attractive, attentive, or emotionally intense. You may feel understood after only a few conversations. The temptation is to treat that feeling as evidence that the person is unusually compatible with you.

Sometimes the attraction develops into a healthy relationship. Sometimes it does not. The important skill is learning to enjoy attraction without allowing it to replace observation.

Attached describes how anxious, avoidant, and secure attachment tendencies can influence the way people experience closeness, uncertainty, and dependency. Anxious tendencies may involve heightened concern about a partner's availability; avoidant tendencies may involve discomfort with too much closeness; secure tendencies generally involve greater comfort with intimacy and responsiveness. These patterns can help explain relationship behavior, but they should not be used as fixed identities or diagnoses.

A person who becomes highly preoccupied when someone is inconsistent may mistake the relief of receiving attention for evidence of exceptional compatibility. A person who becomes uncomfortable when intimacy deepens may mistake emotional distance for a need to find a different partner. Neither response proves that the relationship is right or wrong. It tells you that your own attachment responses deserve attention.

Norwood's work adds a further warning: familiar emotional difficulty can become part of what makes a person compelling. Someone may repeatedly feel drawn toward partners who are unavailable, troubled, or in need of rescuing because that dynamic activates a familiar role. The lesson is not that every intense attraction is unhealthy. It is that familiarity and compatibility are different forms of information.

This is particularly relevant to modern dating. Digital communication can create intimacy quickly while providing relatively little evidence about how someone behaves in ordinary life. A person may communicate beautifully through messages but avoid difficult conversations in person. They may express strong interest before demonstrating consistency. They may make future plans before the two of you have experienced disagreement, disappointment, or competing priorities.

The solution is not suspicion. It is pacing. Let attraction develop while continuing to observe.

What You Are Learning

You are learning to distinguish the experience of attraction from evidence of relationship capacity. You will identify your own responses to closeness and distance, recognize when uncertainty is increasing preoccupation, and evaluate a potential partner through repeated behavior rather than isolated moments.

You will also learn that emotional security is not the same as emotional flatness. A calm relationship may contain strong attraction, playfulness, and desire. Conversely, a relationship can feel exciting because it is unpredictable. Neither calm nor intensity should be judged without considering the broader pattern.

Practical Application

You meet someone through a dating app. The first two weeks are exciting. They send affectionate messages, discuss future plans, and seem unusually interested. Then their communication becomes inconsistent. You begin checking your phone more frequently and feel especially relieved when they become warm again.

Instead of immediately deciding that the connection is extraordinary—or that the person is deliberately manipulating you—you observe the pattern. You communicate what kind of consistency you prefer and notice how they respond. A partner who is genuinely interested may have a different communication style and still be willing to discuss it. A person who repeatedly dismisses your needs or offers promises without follow-through is providing different information.

The objective is to learn who they are, not to win a contest for their attention.

Practice — The Attraction and Evidence Journal

For the next three people you seriously consider dating, separate your observations into three columns: What I Feel, What I Know, and What I Still Need to Discover.

Record attraction and emotional responses in the first column. In the second, record observable behavior such as consistency, respect, communication, reliability, and how the person responds to a reasonable request. In the third, identify important unknowns concerning values, conflict, commitment, and compatibility.

After several interactions, answer: “Am I becoming more interested in this person as I learn who they are, or more preoccupied because I remain uncertain about where I stand?”

After This Section, You Will Be Able To
Distinguish attraction from evidence of compatibility and emotional availability.
Recognize how your attachment responses influence dating decisions.
Identify when uncertainty is increasing preoccupation rather than genuine closeness.
Evaluate a potential partner through consistent behavior over time.
Pace emotional investment without suppressing attraction or becoming unnecessarily guarded.` ,

//------------3rd chapter-----------------------

          `3. Choose Someone Who Can Meet You -  A relationship cannot become mutual through one person's effort alone.

Knowing what you want and understanding attraction are important, but they are not enough. You must also learn how to evaluate whether another person has the willingness and capacity to participate in the kind of relationship you want.

This is where many people become distracted by potential.

They meet someone who is intelligent, attractive, ambitious, or emotionally compelling. The person has qualities they genuinely admire. But important relationship capacities may be missing: consistency, accountability, emotional availability, respect for boundaries, or willingness to discuss the future.

The temptation is to assume those capacities will appear once the relationship becomes more serious.

Sometimes people do grow together. But a relationship should not be built primarily on the assumption that one person will eventually become capable of offering what the other already needs.

Attached encourages readers to consider a potential partner's attachment-related behavior and compatibility rather than relying solely on attraction. Tatkin's secure-functioning approach adds a complementary question: can these two people create a relationship organized around mutual care, fairness, and cooperation? In his framework, individual attachment history matters, but it does not completely determine whether a couple can develop secure functioning together.

That distinction prevents two common mistakes. The first is dismissing someone because of an attachment label without examining their actual behavior. The second is assuming that love or patience will compensate indefinitely for a lack of mutual effort.

A useful partner-selection process therefore looks at three dimensions: character, compatibility, and relationship capacity.

Character concerns how someone behaves when doing the right thing is inconvenient. Compatibility concerns whether your values, lifestyles, and future expectations can reasonably coexist. Relationship capacity concerns whether the person can communicate, respond, negotiate, repair conflict, and participate in mutual commitment.

A person may be wonderful in one dimension and unsuitable in another. Someone can be kind but want a fundamentally different future. Someone can share your interests but be unwilling to communicate honestly. Someone can be intensely attracted to you but not want the level of commitment you seek.

The goal is not to find a flawless person. It is to find someone whose actual qualities and choices make a healthy relationship possible.

What You Are Learning

You are learning to evaluate potential partners without turning dating into an interrogation or a search for perfection. You will distinguish compatibility from similarity, recognize the difference between a temporary difficulty and a repeated pattern, and assess whether important relationship needs can be met through mutual effort.

You will also learn to stop treating another person's lack of availability as a problem you must solve.

Practical Application

Suppose you want a committed relationship, but the person you are dating says they are unsure whether they want anything serious. You enjoy spending time together and believe they may eventually change their mind.

A mature response does not require you to pressure them into commitment or immediately accuse them of dishonesty. It requires taking their stated position seriously. You can explain what you are looking for, ask whether your expectations are compatible, and decide whether continuing makes sense for you.

If you choose to remain, that choice should be based on the relationship that actually exists—not on an unspoken expectation that enough affection will eventually change their position.

Practice — The Partner Evidence Matrix

Choose five qualities that are essential for your preferred relationship. For each quality, define what it would look like in observable behavior.

For example, “emotionally available” might mean that the person can discuss feelings, respond to reasonable requests for connection, and return to difficult conversations after taking space. “Reliable” might mean that their actions generally match their commitments and that they communicate when plans change.

For someone you are currently dating, record evidence for each quality, evidence against it, and what remains unknown. Then identify one important conversation or ordinary-life situation that could provide more information. Do not manufacture tests or create jealousy to obtain evidence; observe naturally and communicate directly.

After This Section, You Will Be Able To
Evaluate potential partners through character, compatibility, and relationship capacity.
Translate vague preferences into observable relationship qualities.
Distinguish temporary difficulties from repeated patterns of unavailability or disrespect.
Recognize when you are investing in someone's potential rather than their demonstrated behavior.
Make dating decisions without trying to persuade another person to want the relationship you want. ` ,

//------------4th chapter-----------------------

          `4. Speak Before You Disappear - The ability to express a need early can prevent months of resentment, guessing, and unnecessary conflict.

Many people lose themselves in relationships not because they lack boundaries, but because they struggle to communicate those boundaries while the relationship still feels uncertain. They worry that asking for reassurance will make them appear needy, that expressing disappointment will create conflict, or that discussing commitment will make the other person withdraw.

So they remain agreeable.

They say something is fine when it is not.

They wait for their partner to notice.

They hope the other person will eventually offer what they need without being asked.

When the need remains unmet, resentment develops. Eventually the conversation becomes much more emotionally charged than it needed to be.

The opposite pattern is also possible. Someone may express a need through accusation, repeated questioning, threats, or attempts to control the partner's behavior. The need itself may be legitimate, but the communication makes cooperation more difficult.

Attached includes effective communication and secure approaches to conflict as important relationship skills. Richo similarly emphasizes taking responsibility for feelings and choices, keeping agreements, and addressing conflicts rather than allowing them to remain unresolved.

The practical lesson is that having a need, expressing a need, and demanding a particular response are three different things.

You may need more consistent contact. You can communicate that clearly. Your partner may have a different preference. The two of you can then discuss whether an arrangement works for both of you. What you cannot do is guarantee compatibility by becoming silent, nor can you create genuine willingness by applying enough pressure.

A useful communication structure is:

Observation → Feeling → Need → Request → Invitation to respond.

For example, instead of saying, “You never make time for me,” you might say, “We've had to cancel our last three plans, and I'm feeling disconnected. Regular time together matters to me. Could we choose an evening this week that we can both protect? I'd also like to understand what has been making scheduling difficult.”

This communicates the problem without requiring the partner to accept a negative characterization of themselves before the conversation can begin.

What You Are Learning

You are learning to communicate needs, preferences, and concerns while preserving both self-respect and the other person's autonomy. You will practice distinguishing facts from interpretations, making specific requests, and listening to responses without immediately treating disagreement as rejection.

You will also learn when a communication problem is actually a compatibility problem. If you have expressed an important need clearly and repeatedly, the next step may not be finding a more persuasive way to explain it.

Practical Application

Your partner enjoys frequent social events, while you need some quiet time after work. You begin attending everything because you do not want them to think you are uninterested. Eventually you become irritable and start declining invitations abruptly.

A better conversation happens before resentment accumulates. You can explain that you enjoy spending time together and also need some evenings to recharge. You can discuss which events matter most to your partner and which you can attend separately.

The result may be a compromise, but the important change is that the compromise includes both people's actual needs.

Practice — The Conversation Lab

Choose three conversations you have been avoiding. Write each one using the five-part structure above.

Then rehearse three possible responses from your partner: agreement, a reasonable difference in preference, and an unwillingness to meet the need. Practice responding to each without abandoning your original concern or escalating into accusation.

For the third response, ask yourself: “If this person genuinely cannot offer what I need, what decision is available to me besides repeating the request indefinitely?”

After This Section, You Will Be Able To
Express relationship needs without accusation, mind-reading, or excessive apology.
Make specific requests that allow the other person to respond honestly.
Distinguish a communication difficulty from a genuine incompatibility.
Discuss differences without treating every disagreement as rejection.
Recognize when repeated explanations are replacing a necessary relationship decision..`,

//------------5th chapter-----------------------

          `5. Make Space Without Making Distance - Secure intimacy allows two people to belong to each other without becoming responsible for every part of each other's lives.

One of the central challenges of a serious relationship is balancing closeness and autonomy. Too little connection can leave partners feeling unimportant or uncertain. Too little autonomy can create resentment, dependence, or the feeling that maintaining the relationship requires surrendering personal freedom.

The answer is not to divide life into two completely separate territories. Nor is it to expect partners to share every activity, friendship, opinion, and emotional experience. A healthy relationship requires a deliberate understanding of what belongs to the individual, what belongs to the couple, and how those two areas support one another.

Tatkin's concept of the couple bubble is useful here. It describes a relationship in which partners deliberately protect their shared bond through mutuality, fairness, and sensitivity. Importantly, secure functioning is not the same as one person controlling the other or demanding that every individual preference be sacrificed for the relationship. Tatkin's own explanation emphasizes a two-person system in which both partners have interests and neither is simply dragged along for the other's benefit.

Richo makes the autonomy question particularly explicit. His Five A's include allowing, and his discussion of adult relationships recognizes the need for a workable balance between time together and time alone. The aim is not to make partners independent strangers, but to create enough trust that individual development does not automatically feel like a threat to the bond.

This distinction matters in everyday decisions. A partner may want to pursue a demanding qualification, maintain close friendships, spend time with family, travel independently, or have private time to think. These choices can be compatible with commitment. They can also create genuine practical conflicts that need negotiation.

The question is not simply, “Am I allowed to do this?” It is, “How can we honor this individual need while also taking the relationship's needs seriously?”

That requires clarity about boundaries. A boundary identifies what you are willing to participate in or accept. A relationship agreement identifies what both partners have voluntarily committed to. Neither should be used as a disguised method of controlling the other's ordinary independence.

What You Are Learning

You are learning to distinguish autonomy from emotional withdrawal and commitment from possession. You will develop the ability to negotiate time, privacy, friendships, family responsibilities, and personal goals without assuming that one person's needs must automatically defeat the other's.

You will also learn to recognize when an agreement is genuinely mutual and when one person is complying mainly because they fear the consequences of disagreement.

Practical Application

Imagine your partner wants to prepare for an important examination and needs several evenings each week for uninterrupted study. You value quality time and begin feeling that the relationship is receiving less attention.

An insecure response might be to demand that they prove their love by studying less, or to remain silent while resentment grows. A secure response is to discuss the actual constraint: how much time is needed, what kind of connection matters to you, and how the two of you can maintain the relationship during this period.

You might agree on a regular shared evening, shorter check-ins on study days, and a review of the arrangement after the examination. The point is not the specific schedule. It is that the relationship becomes a place where both people's lives can be supported.

Practice — The Shared Space Agreement

If you are in a relationship, complete this exercise together. If you are single, draft your own answers for future discussion.

Identify three individual commitments you want to preserve and three shared commitments you want a relationship to protect. Then discuss how you would handle competing demands involving work, friends, family, money, privacy, and time alone.

For each area, establish what requires a shared agreement, what can remain an individual decision, and how either person can raise a concern without automatically accusing the other of disloyalty. Include a process for revisiting agreements when circumstances change.

After This Section, You Will Be Able To
Distinguish healthy autonomy from avoidance and healthy commitment from control.
Negotiate individual and shared priorities without assuming one must always win.
Create mutual agreements concerning time, privacy, friendships, and personal goals.
Recognize when a boundary protects wellbeing and when a demand restricts ordinary autonomy.
Support a partner's development while maintaining meaningful connection.` ,

//------------6th chapter-----------------------

          `6. Repair Without Becoming the Rescuer - ealthy couples take responsibility for their own behavior and cooperate on the problems between them.

Every meaningful relationship eventually encounters disappointment. Someone forgets something important, speaks defensively, becomes unavailable during a stressful period, or makes a decision that affects the other person. The presence of conflict does not automatically indicate an unhealthy relationship. What matters is whether the couple can respond in ways that preserve dignity, accountability, and the possibility of repair.

The challenge is that conflict often activates older protective habits. One person pursues an immediate resolution because uncertainty feels intolerable. The other withdraws because the conversation feels overwhelming. One apologizes too quickly to restore peace. The other becomes defensive because acknowledging a mistake feels like admitting they are a bad partner.

These reactions can create a cycle in which the original problem becomes secondary to the way the couple handles it.

Tatkin's secure-functioning approach emphasizes cooperation and mutual protection rather than treating disagreements as contests between adversaries. Richo similarly describes adult relationship work as involving responsibility, truthful engagement, and the addressing, processing, and resolution of conflict.

A useful repair process therefore has several distinct tasks. First, both people need enough emotional steadiness to participate. Second, the actual event must be described without immediately turning it into a judgment about the other person's character. Third, each person needs an opportunity to explain their experience and hear the other's. Fourth, responsibility must be identified accurately. Finally, the couple needs an agreement about what will happen differently.

This is also where the distinction between supporting and rescuing becomes essential.

You can support a partner who is struggling with stress, grief, insecurity, or personal difficulties. You can offer patience and practical help. But you cannot take responsibility for their willingness to communicate, their honesty, their treatment of you, or their decision to seek help when needed.

Norwood's work is particularly relevant to this distinction because it examines relationships in which one person's attention becomes increasingly consumed by managing or changing the other. The healthier alternative is not indifference; it is recognizing the limits of what one partner can do for another.

A relationship becomes more secure when both people can say, in effect: “Your wellbeing matters to me, and I remain responsible for my own behavior.”

There is an important limit to ordinary repair exercises. If a relationship involves violence, coercive control, threats, intimidation, or fear of retaliation, the priority is safety and appropriate professional support—not negotiating more effectively with the person causing harm. Mutuality should never be used to imply equal responsibility for abuse.

What You Are Learning

You are learning to participate in conflict without automatically attacking, withdrawing, appeasing, or taking responsibility for everything. You will distinguish your contribution from your partner's, practice repair that leads to behavioral change, and recognize when a problem requires cooperation rather than one person's repeated effort.

You will also learn that forgiveness, reconciliation, and continued commitment are separate decisions. An apology may be sincere without making a relationship safe or workable.

Practical Application

Your partner repeatedly makes jokes about something you are sensitive about. You eventually become angry and say something hurtful in return.

A productive repair does not require deciding that only one person has behaved badly. You can take responsibility for your own hurtful response while still addressing the original pattern. Your partner can acknowledge the impact of the jokes without being required to accept an inaccurate account of their intentions.

The goal is to reach a clear agreement about how both of you will handle similar situations in the future. If the pattern continues despite repeated conversations, that becomes information about the relationship's capacity for change.

Practice — The Repair Rehearsal

Choose a real, manageable disagreement. Write a brief account of what happened, what you felt, what you assumed, and what you did. Then identify the part for which you can take responsibility without adding “but you…” to the apology.

Next, write a specific request for future behavior and identify what you are willing to do differently yourself. Rehearse the conversation with a trusted person or privately before having it with your partner.

Afterward, evaluate the conversation according to three questions: Did we understand the problem more accurately? Did both people have room to speak? Did we agree on behavior that can actually be observed?

After This Section, You Will Be Able To
Identify and interrupt unproductive conflict responses.
Take responsibility for your behavior without accepting responsibility for everything.
Distinguish support from rescuing or managing a partner.
Conduct repair conversations that produce specific behavioral agreements.
Recognize when continued conflict reflects a lack of mutual willingness or a safety concern rather than insufficient effort on your part.`,

//------------7th chapter----------------------- 
          `7. Build a Life That Can Hold Love - The strongest relationship is not the one that consumes the most of your life, but the one that helps both people live it more fully.

Finding love without losing yourself is not a single decision made at the beginning of a relationship. It is an ongoing practice.

The person you are at twenty-five may have different needs, responsibilities, and ambitions at thirty-five. Careers change. Families grow. Health changes. Financial pressures appear. Partners discover new interests and encounter difficulties neither could have predicted when they first met.

A relationship that depends on both people remaining exactly as they were at the beginning will struggle with ordinary development. A stronger relationship creates ways to adapt while protecting the bond.

This is where the four books become especially complementary. Attached helps you recognize the importance of availability and secure connection. Tatkin's work emphasizes deliberate mutuality and the agreements that make a relationship function as a cooperative system. Richo's Five A's provide a framework for continuing to notice, accept, appreciate, show affection toward, and allow the development of another person. Norwood's work reminds us that a relationship should not become the entire organizing principle of one's identity.

The resulting principle is interdependence without self-erasure.

You can rely on your partner without making them responsible for every emotional need. You can prioritize the relationship without abandoning all other commitments. You can make sacrifices without creating a permanent imbalance in which one person's life consistently matters less. You can support your partner's growth without treating their growth as a threat to your own place in the relationship.

This requires periodic attention to the relationship itself. Couples often discuss logistics—bills, appointments, travel, household tasks—while rarely discussing how the relationship is functioning. Small disappointments then accumulate until one person begins to feel that their needs have disappeared from the shared agenda.

A regular relationship review can prevent this. It does not need to be formal or clinical. The purpose is to ask whether both people still feel heard, respected, connected, and able to pursue meaningful lives.

The final skill is also knowing when to remain and when to reconsider. A healthy relationship is not one in which leaving is impossible. It is one in which both people continue choosing the relationship because it remains a place of mutual care and growth. If important needs repeatedly remain unmet, agreements are consistently broken, or one person must continually diminish themselves to preserve the bond, maturity may require acknowledging that reality rather than treating endurance as proof of love.

What You Are Learning

You are integrating partner selection, attachment awareness, communication, boundaries, mutuality, and repair into a long-term relationship practice. You will learn how to monitor the health of a relationship without becoming hypervigilant, adapt agreements as life changes, and make decisions based on both emotional connection and observable reality.

You will also develop a clearer understanding of what it means to be a good partner: not someone who gives up everything, but someone who can participate in a relationship with honesty, generosity, accountability, and a stable sense of self.

Practical Application

Imagine you and your partner have been together for several years. One of you receives an opportunity that could significantly change your career but would require relocation or a demanding schedule. The other has important commitments in the current city.

A relationship based on self-sacrifice may assume that one person must immediately give up their plans to prove their love. A relationship based on rigid independence may treat the decision as entirely individual.

A more secure approach asks what the opportunity means, what each person would gain or lose, what alternatives exist, and whether a solution can protect both people's important interests. The eventual decision may still involve sacrifice. The difference is that the sacrifice is discussed, understood, and chosen rather than silently imposed.

Practice — Your 90-Day Relationship Operating Plan

Create a practical plan for your current relationship or for the relationship you intend to build.

Include a weekly personal commitment that protects your own development, a regular opportunity for meaningful connection, and a monthly conversation about how the relationship is functioning. Decide how you will raise unmet needs, how conflict pauses and repair will work, and how you will revisit agreements when circumstances change.

At the end of each month, answer these questions in writing:

Am I able to express my real needs?

Are both of us contributing to the relationship's wellbeing?

What part of my individual life has grown?

What part of our shared life has grown?

What has become difficult to discuss?

Which agreement needs to change?

What am I choosing freely, and what am I doing mainly because I fear losing the relationship?

Use the answers to make one concrete adjustment for the following month. The purpose is not to score your partner or create a perfect relationship. It is to prevent important truths from remaining unspoken until they become crises.

After This Section, You Will Be Able To
Maintain a meaningful individual life while participating in a committed relationship.
Create regular practices for connection, communication, and relationship review.
Negotiate major life decisions through mutual consideration rather than automatic self-sacrifice.
Recognize when a relationship needs adjustment, additional support, or a more serious decision about its future.
Build a personal relationship philosophy that combines closeness, autonomy, accountability, and reciprocity..`,

//------------8th chapter-----------------------
`Wrap-Up and Next Steps - Your Transformation

After completing Finding Love Without Losing Yourself, you should be able to approach dating and relationships with a clearer understanding of both what you need and what you can genuinely offer. You can recognize attraction without allowing it to replace judgment, evaluate a potential partner through consistent behavior, communicate your needs before resentment develops, and negotiate closeness without treating independence as a threat.

You should also be able to distinguish healthy sacrifice from self-abandonment, support a partner without becoming responsible for their development, and participate in conflict without surrendering your voice or denying your own contribution. If a relationship becomes difficult, you have a framework for assessing whether both people can repair it. If it becomes fundamentally incompatible with your wellbeing, you can make that decision without assuming that leaving means you failed to love enough.

The ultimate goal is not to become so independent that you never need anyone. It is to become capable of choosing and sustaining a relationship in which both people can depend on each other, grow as individuals, and remain fully present in the life they are building together.`
        ]
      }
    ]
  },

  /* New course */

  // -------- "How Men Heal After Goodbye"-------------

  'party-ka-din': {
    outcomes: [
      `This course is about learning how to move through that loss without pretending not to care,
       becoming consumed by it, rushing into another relationship,
        or turning heartbreak into permanent emotional avoidance. 
        It synthesizes the most relevant relationship psychology from Attached, 
        Wired for Love, How to Be an Adult in Relationships, and Women Who Love Too Much, 
        while following the premium-course structure you specified`
    ],
    sections: [
      { title: 'Lessons',
         lessons: [`When Goodbye Activates More Than Memory - Why losing one person can suddenly make your whole emotional world feel unstable.

One of the strangest experiences after a breakup is discovering that your feelings can become stronger after access to the person disappears.

Before the relationship ended, you may have been frustrated with her. You may have wanted more space. You might even have wondered whether the relationship was right for you. Then she leaves, becomes unavailable, stops replying, or makes the breakup final—and suddenly your mind behaves as though recovering her is the most urgent problem in your life.

You replay conversations.

You remember moments you previously took for granted.

You check your phone more often.

You wonder whether she is thinking about you.

You imagine her meeting someone else.

Small pieces of information acquire enormous emotional importance.

Attachment psychology helps explain why.

Attached describes romantic partners as attachment figures whose availability can influence feelings of security. When an important connection becomes uncertain or unavailable, the attachment system can become highly activated. An anxious pattern may intensify pursuit and preoccupation; an avoidant pattern may initially rely on distance or emotional suppression but can still experience attachment distress when the separation becomes real.

This means that intensity after a breakup does not automatically prove that ending the relationship was a mistake.

Sometimes you are grieving the woman.

Sometimes you are reacting to rejection.

Sometimes you are frightened by the sudden absence of reassurance.

Sometimes your ego is injured because she chose to leave.

Sometimes you are grieving the future you imagined.

And usually several of these are happening simultaneously.

Men can make serious mistakes when all these experiences are compressed into one sentence:

"I need her back."

That sentence may contain six different psychological needs.

Healing begins when you separate them.

What You Are Learning

You are learning to identify what a breakup has actually activated inside you.

Instead of treating every wave of distress as evidence that you should reconnect, you learn to distinguish:

attachment activation,
loneliness,
rejection,
wounded pride,
sexual longing,
genuine relational love,
guilt,
regret,
fear of replacement,
and grief.

The goal is not to intellectualize your feelings away.

It is to understand them accurately enough that they stop making every decision for you.

Practical Application

Imagine she ends the relationship on Sunday.

On Wednesday you see that she followed someone new online.

Your immediate reaction is jealousy, anxiety, anger, and an overwhelming urge to contact her.

The unexamined response might become:

"I knew she never cared."

or:

"I have to tell her how much I love her before it's too late."

A more accurate internal response might be:

"Seeing this triggered my fear that she can replace me. That feeling is real. But I currently do not know what this online activity means, and I do not need to act on the fear tonight."

That distinction can prevent one painful evening from creating weeks of additional damage.

Practice — Name What You Actually Lost

Complete these separately:

I miss her because...

I miss being in a relationship because...

I am afraid because...

I feel rejected because...

I regret...

I am jealous of the possibility that...

The future I thought we would have included...

The part of myself I feel I lost is...

Then read the answers again.

Do not call all of them "missing her."

They are different losses.

Different losses require different forms of healing.

After This Section, You Will Be Able To
Recognize attachment activation after romantic separation.
Distinguish grief from panic, loneliness, jealousy, guilt, and wounded pride.
Interpret intense emotions without automatically treating them as instructions.
Identify exactly what the relationship's ending removed from your life.
Create distance between emotional activation and impulsive behavior.`,

//------------2nd chapter-----------------------

`Grieve the Person and the Future That Never Happened - Healing requires mourning more than memories.

People often imagine grief as missing someone who used to be present.

Breakup grief is more complicated.

You lose what happened.

But you also lose what was supposed to happen.

The trip you discussed.

The place you might have lived.

The wedding you imagined.

The children you occasionally talked about.

The version of yourself who assumed she would still be there next year.

Some of the strongest heartbreak therefore comes from events that never occurred.

That can feel irrational:

"How can I mourn something I never actually had?"

Because psychologically, anticipated futures can become part of our identity long before they become reality.

David Richo's approach is particularly important here because he treats endings and grief as part of mature loving rather than as evidence that love failed. The updated edition of How to Be an Adult in Relationships explicitly expands its treatment of relationship endings.

Grief also asks something that many men have been trained to resist:

feel what cannot currently be fixed.

Problem-solving is extremely useful when a problem has a solution.

But loss often creates pain without an immediate action that can remove it.

This is why some men unconsciously convert grief into activities that feel more controllable:

anger,

obsessive exercise,

work,

alcohol,

casual sex,

dating apps,

revenge fantasies,

repeated contact,

social-media monitoring,

or immediate pursuit of another partner.

The behavior changes.

The unresolved loss remains underneath it.

Healing does not require sitting permanently inside sadness. It requires allowing enough contact with sadness that the breakup becomes an integrated event rather than an emotional debt repeatedly collected by future relationships.

What You Are Learning

You are learning to grieve deliberately instead of only waiting for time to pass.

You will distinguish between:

remembering her and remaining psychologically attached to an imagined future.

You will also learn that acceptance does not mean agreeing with what happened.

Acceptance means recognizing:

This is what is true right now.

Only then can your energy begin moving toward what comes next.

Practical Application

Perhaps you keep imagining one conversation where everything changes.

She finally understands your side.

You apologize perfectly.

She realizes she still loves you.

You reunite.

That fantasy can temporarily relieve pain.

But if she has clearly ended the relationship, repeatedly rehearsing reconciliation can prevent your mind from adapting to reality.

The healthier position is not:

"I must stop loving her immediately."

It is:

"I can still love what mattered while accepting that I do not currently have this relationship."

Those two truths can coexist.

Practice — The Three-Loss Exercise

Write three separate lists.

What I Actually Lost

Specific realities:

companionship,
physical affection,
daily conversation,
shared routines,
her family,
emotional support.
What I Expected to Have

Future experiences:

marriage,
travel,
a home,
children,
celebrations,
growing older together.
What I Believe the Breakup Says About Me

For example:

I failed.
I wasn't enough.
Nobody will stay.
I wasted years.
She will find somebody better.
I will never feel this way again.

Now examine the third list carefully.

The first two contain losses.

The third contains interpretations.

Do not mourn an interpretation as though it were a proven fact.

After This Section, You Will Be Able To
Identify both real and imagined losses created by a breakup.
Allow grief without turning it immediately into avoidance or action.
Separate the end of a relationship from judgments about your worth.
Recognize bargaining fantasies that keep you emotionally suspended.
Practice acceptance without pretending that the relationship meant nothing. `, 

//------------3rd chapter-------------------------

           `Tell the Truth About the Relationship - Do not heal from a fantasy version of what happened.

Memory becomes selective after separation.

When loneliness peaks, the brain can create a highlight reel.

Her laugh.

The first date.

The trip.

The way she slept beside you.

The message she sent when you were struggling.

The relationship begins to feel beautiful and irreplaceable.

Then anger arrives and memory performs the opposite edit.

Her criticism.

The arguments.

The things she did wrong.

Her emotional distance.

The ending.

Now she becomes the villain.

Neither version is complete.

Healing requires the capacity to hold the whole relationship at once.

The beautiful parts were real.

The painful parts were real.

Your mistakes were real.

Her mistakes were real.

Love may have been real.

And incompatibility may also have been real.

This is where attachment frameworks become useful—but also where they are frequently misused.

Someone reads Attached and concludes:

"She was avoidant. That's why everything failed."

Or:

"I was anxious, so I ruined everything."

Attachment styles are tools for recognizing patterns, not court verdicts assigning guilt. Attached describes anxious, avoidant, and secure tendencies to help readers understand relationship dynamics and compatibility.

Tatkin's work broadens the analysis by asking how the couple system functioned. Did partners protect one another? Were there clear agreements? Could conflict be repaired? Did each understand the other's vulnerabilities? Could both people feel secure inside the relationship?

A mature post-breakup review therefore asks:

What happened between us repeatedly?

Maybe you withdrew whenever she became emotional.

Maybe she pursued until you felt trapped.

Maybe neither of you knew how to pause conflict safely.

Maybe one person carried almost all the emotional labor.

Maybe there was betrayal.

Maybe there was incompatibility.

Maybe the relationship was healthy for years and still eventually ended.

Understanding the pattern prevents two equally damaging conclusions:

"Everything was my fault."

and

"Everything was hers."

Neither produces useful growth.

What You Are Learning

You are learning how to conduct an honest relationship postmortem without turning it into self-punishment.

You will examine:

triggers,
recurring conflicts,
communication,
emotional availability,
boundaries,
expectations,
compatibility,
repair attempts,
and your own contribution.

The purpose is not to determine who was the worse person.

It is to discover what you must carry forward and what you must not repeat.

Practical Application

Suppose most arguments ended the same way:

She raised an issue.

You felt criticized.

You defended yourself.

She intensified.

You shut down.

She followed you or kept messaging.

You withdrew further.

Later, one of you apologized without resolving the original issue.

Looking only at the final argument tells you very little.

Looking at the repeated cycle tells you considerably more.

Your lesson might not be:

"I should never date an emotional woman again."

It may be:

"I interpret complaints as attacks so quickly that I stop listening before I understand what my partner is asking for."

That is actionable knowledge.

Practice — The Relationship Postmortem

Choose five major recurring problems.

For each, answer:

What usually triggered it?

What did she do next?

What did I feel?

What did I do?

How did my behavior affect her?

How did her behavior affect me?

How did we eventually reconnect?

Was the problem actually resolved?

Then complete:

My responsibility was...
Her responsibility was...
The incompatibility neither person could fix was...
What I would do differently next time is...

Keep all four statements.

Removing any one of them distorts the lesson.

After This Section, You Will Be Able To
Evaluate a past relationship without idealizing or demonizing it.
Use attachment concepts without turning them into blame labels.
Identify recurring relationship cycles rather than isolated arguments.
Separate personal responsibility from unnecessary self-condemnation.
Extract specific lessons that can improve future relationships.`,


//------------4rth chapter-------------------------

           `Break the Contact Hope Crash Cycle - Sometimes what feels like connection is actually repeated reopening of the wound.

Breakups can produce a peculiar psychological loop.

You feel terrible.

You contact her.

She replies.

You feel relief.

The conversation gives you hope.

Then she becomes distant again.

You crash.

You contact her again.

For a few minutes or hours, the anxiety decreases.

Then uncertainty returns.

The pattern begins again.

The problem is not that communication with an ex is always unhealthy.

The problem is using contact primarily to regulate distress while pretending you are seeking closure.

Attachment activation can make intermittent contact especially powerful. When access to a significant partner is uncertain, even small signals—one message, one like, one warm conversation—can carry disproportionately large emotional meaning.

Digital life intensifies this.

Earlier generations could separate physically and lose much of their access to each other's daily lives.

Now you can know:

when she was online,

where she went,

what she wore,

who followed her,

which photograph she liked,

whether she watched your story.

You can technically be broken up while psychologically checking into the relationship twenty times a day.

This prevents the nervous system from receiving a consistent message:

The relationship has changed.

Richo's emphasis on allowing becomes particularly relevant. If the relationship has ended, mature love requires recognizing the other person's autonomy rather than using emotional pressure to keep them relationally accessible.

And Norwood's work, while explicitly written around women's compulsive relationship patterns, offers a broader insight worth adapting cautiously: healing requires withdrawing excessive attention from monitoring or changing another person and returning that attention to one's own recovery and life.

No-contact is therefore not a magical manipulation technique.

It should not mean:

"Disappear so she misses you."

Used well, distance means:

"Stop repeatedly using the person you are grieving as the primary medicine for grieving them."

That is a completely different objective.

What You Are Learning

You are learning how to create boundaries around post-breakup communication.

You will distinguish:

necessary communication,
mutual friendship later,
genuine reconciliation conversations,
emotional checking,
reassurance seeking,
jealousy monitoring,
and disguised attempts to maintain the former relationship.
Practical Application

There may be valid reasons to remain in contact:

shared children,

property,

work,

finances,

pets,

or agreed practical responsibilities.

In those situations, healing does not require theatrical blocking or hostility.

Communication can become clear and functional.

But if there are no shared responsibilities and every conversation leaves you destabilized for two days, the question becomes:

Is this contact helping me relate to reality—or postponing it?

Practice — The 30-Day Contact Audit

For every interaction with your ex, record:

Why did I contact her?

What was I hoping would happen?

How did I feel immediately afterward?

How did I feel six hours later?

Did this interaction create clarity or uncertainty?

Would I still have sent it if I knew reconciliation was impossible?

That final question is particularly revealing.

If the answer is no, the message may be less about communication and more about maintaining hope.

After This Section, You Will Be Able To
Identify reassurance-seeking disguised as communication.
Recognize social-media behaviors that maintain attachment activation.
Establish respectful boundaries without using silence as manipulation.
Determine when communication supports healing and when it interrupts it.
Protect your recovery while respecting your former partner's autonomy.`, 

//------------5th chapter-------------------------
           `Become a Whole Man Again - Do not replace the relationship. Rebuild the life around it.

There is a stage of healing when the central problem is no longer constant heartbreak.

It is emptiness.

Your phone is quieter.

Weekends are different.

Nobody automatically asks how your day went.

Plans that once involved two people now require a decision from one.

This stage can feel less dramatic than the breakup itself, but it determines whether a man genuinely rebuilds or simply searches for another person to fill the vacancy.

A relationship naturally occupies space.

Healthy love can become part of your identity without consuming it.

But sometimes, especially in intense or long relationships, other parts of life shrink:

friendships become weaker,

interests disappear,

personal goals become shared goals,

alone time becomes unfamiliar,

and emotional support becomes concentrated almost entirely in one person.

When the relationship disappears, the reduced life becomes visible.

The answer is not exaggerated independence.

"I don't need anybody."

That is not the same as healing.

Secure attachment does not require emotional self-sufficiency. Attached explicitly treats closeness and dependency needs as normal features of intimate relationships.

The better goal is interdependence:

I can form deep bonds.

I can rely on someone.

I can be relied upon.

And I remain a person with friendships, values, competence, routines, interests, and direction beyond the relationship.

Norwood's recovery framework emphasizes redirecting attention away from compulsive focus on a partner and toward one's own development. Although her book addresses women specifically, that principle translates usefully here.

You are not rebuilding because you need to show your ex what she lost.

You are rebuilding because your life deserves to become larger again.

What You Are Learning

You are learning to restore identity after romantic loss.

You will rebuild across several domains:

body — sleep, food, exercise, physical regulation.

people — friendships, family, community.

competence — work, learning, practical ability.

purpose — goals that remain meaningful without a partner.

enjoyment — experiences that do not need romantic validation.

solitude — the ability to be alone without interpreting aloneness as rejection.

Practical Application

Suppose you start going to the gym intensely after the breakup.

Exercise can be excellent.

But ask why you are doing it.

There is a difference between:

"I want my body and routine to become stronger."

and:

"I need to become so attractive that she regrets leaving me."

The activity is identical.

The psychological direction is opposite.

One brings your attention home.

The other keeps your entire transformation organized around her.

The same applies to career success, money, clothes, social life, or dating.

If every improvement secretly ends with:

"...so she sees what she lost,"

she is still psychologically directing your life.

Practice — The Life Reclamation Map

Score your current satisfaction from 1–10 in:

Physical health
Sleep
Friendship
Family connection
Career/work
Money
Learning
Purpose
Fun
Solitude
Emotional support
Romantic readiness

Choose the three weakest areas.

For each one, establish one weekly behavior for the next six weeks.

Then ask:

If my ex never knew I made this improvement, would I still want it?

If yes, it probably belongs to you.

After This Section, You Will Be Able To
Rebuild identity without using self-improvement as revenge.
Create emotional support beyond a romantic partner.
Distinguish healthy interdependence from dependence and defensive isolation.
Develop routines that make solitude sustainable rather than threatening.
Measure recovery through the expansion of your life, not your ex's reaction.`, 
           `Do Not Make the Next Woman Pay for the Last One - Dating again is not proof that you healed.

Eventually another woman may enter your life.

And this creates a new test.

Not:

Can someone else want me?

But:

Can I meet someone new without making her responsible for what happened before her?

Unresolved heartbreak can quietly follow a man into his next relationship.

He becomes suspicious because his ex betrayed him.

He withholds affection because vulnerability previously hurt.

He demands reassurance because he remembers being abandoned.

He compares.

He tests.

He keeps emotional distance.

He insists that he is "protecting his peace."

The new partner encounters defenses created by someone she has never met.

At the opposite extreme, a man can move too quickly.

A new woman's attention feels extraordinary because it temporarily neutralizes rejection.

He interprets relief as compatibility.

Within weeks, he is emotionally invested because he needs the new relationship to prove something:

that he is desirable,

that he was not the problem,

that he can replace his ex,

that he is no longer alone.

Neither extreme produces good partner selection.

Attached argues for evaluating availability and attachment compatibility rather than allowing chemistry alone to determine romantic decisions.

Tatkin's framework adds another filter: can two people actually create a secure, fair, cooperative partnership? Attraction is meaningful, but relationship capacity must eventually become observable.

And Richo's Five A's—attention, acceptance, appreciation, affection, and allowing—provide a useful test for whether you are actually relating to the person in front of you instead of using her to repair the past.

Before asking whether she is right for you, ask:

Can I see her clearly?

What You Are Learning

You are learning how to determine whether you are emotionally ready to date.

You will evaluate new partners through:

availability,
consistency,
reciprocity,
attraction,
compatibility,
emotional maturity,
communication,
boundaries,
and willingness to build security.

You will also recognize when a new relationship is functioning primarily as pain relief.

Practical Application

You meet someone new.

She is attractive, warm, interested, and emotionally available.

But she does not create the same intensity your former relationship did.

You conclude:

"There's no spark."

Pause.

Sometimes extreme chemistry reflects compatibility.

Sometimes unpredictability, uncertainty, pursuit, or familiar attachment dynamics create emotional intensity that people learn to mistake for extraordinary love.

A calmer connection can initially feel less compelling precisely because your nervous system is not being repeatedly activated.

This does not mean you should force attraction.

It means calm should not automatically be mistaken for boredom.

Practice — The New Partner Filter

Before becoming seriously involved, evaluate:

How do I feel around her most often?

Can she communicate directly?

Can I communicate directly with her?

Is interest reciprocal?

Are words and behavior consistent?

Do I respect who she is, or mainly how she makes me feel about myself?

Can we disagree without punishment or disappearance?

Am I comparing her to my ex?

Am I rushing because I fear being alone?

Then answer:

If my previous relationship had never happened, would I still choose this woman?

That question helps separate genuine attraction from rebound psychology.

After This Section, You Will Be Able To
Recognize signs that you are dating primarily to escape loneliness or rejection.
Evaluate a new partner for availability and compatibility.
Avoid transferring old suspicions and defenses onto someone new.
Distinguish emotional intensity from secure connection.
Enter new relationships because you are interested in the person rather than desperate for replacement.`, 
           `Love Differently After Goodbye - The strongest evidence that you healed is not that you forgot her. It is that you no longer repeat what the relationship taught you to recognize.

Healing does not mean reaching a day when the relationship becomes meaningless.

Some former partners remain emotionally significant long after the desire to reunite has disappeared.

You may hear a song and remember her.

Pass a familiar place.

Remember an anniversary.

Wonder occasionally how her life turned out.

None of this proves that you failed to move on.

Healing is better measured through freedom of response.

You can remember without needing to contact.

You can miss without abandoning the present.

You can acknowledge your mistakes without defining yourself by them.

You can recognize hers without needing punishment.

You can meet another woman without demanding that she repair what the previous relationship damaged.

Most importantly, you can love with greater skill.

Tatkin's secure-functioning model emphasizes mutual protection, fairness, sensitivity to each partner, explicit agreements, and effective repair.

Attached contributes awareness of availability, responsiveness, attachment needs, and compatibility.

Richo adds mindful adulthood: attention, acceptance, appreciation, affection, allowing, healthy boundaries, and the capacity to survive endings without losing one's self.

And Norwood's work contributes a crucial warning about allowing romantic preoccupation to consume the rest of one's life. Her book is explicitly written about women in unhealthy relationships, so its gender-specific claims should not simply be transferred to men; the broader lesson relevant here is to maintain a self beyond the relationship rather than organizing life around changing or retaining another person.

Together, these perspectives produce a more demanding definition of healing:

You are not merely recovering from a woman.

You are becoming more capable of relationship.

That means asking for what you need before resentment accumulates.

Giving reassurance without feeling controlled.

Requesting space without disappearing.

Listening without immediately defending yourself.

Setting boundaries before they become explosions.

Repairing after conflict.

Choosing available partners.

Maintaining your own life.

Allowing someone to love you without expecting them to heal everything that happened before them.

And accepting that even a meaningful relationship cannot guarantee permanence.

That last lesson may be the hardest.

You can love well and still risk loss.

Maturity is not learning how to make abandonment impossible.

It is becoming capable of loving deeply without requiring certainty that you will never have to grieve again.

What You Are Learning

You are integrating the entire course into a personal relationship philosophy.

You should now be able to recognize:

what activates you,

how you react,

what kind of partner fits you,

what kind of partner you need to become,

and

which relationship behaviors you refuse to repeat.

Practical Application

In a future relationship, your partner says:

"You've been distant for two days. I don't know what's going on."

Previously you might respond:

"I'm fine. Stop overthinking."

Now you recognize what that response creates.

A stronger answer might be:

"You're right that I've been quieter. I'm stressed about work and I've gone inward. It isn't about you. I want tonight to decompress, and tomorrow I'd like us to have dinner and reconnect."

You have protected both realities.

Your need for space.

Her need for relational clarity.

That is what healing eventually becomes:

not superior insight,

but better behavior.

Practice — Your Relationship Constitution

Write one page titled:

The Man I Want to Be in Love

Complete:

When I feel abandoned, I will...

When I feel controlled, I will...

When I need space, I will...

When my partner needs reassurance, I will...

When I make a mistake, I will...

When conflict becomes intense, I will...

When jealousy appears, I will...

When I notice myself withdrawing, I will...

I will never again normalize...

I will actively protect...

The qualities I will seek in a partner are...

The qualities I must bring to that partner are...

Finally:

What did goodbye teach me that staying together never could?

Your answer is the final lesson.

After This Section, You Will Be Able To
Convert breakup lessons into specific future relationship behaviors.
Communicate needs, boundaries, reassurance, and space more securely.
Identify partners capable of reciprocal, emotionally available relationships.
Maintain individuality without using independence to avoid intimacy.
Remember a former relationship without allowing it to govern the present.
Enter future love with greater discernment rather than greater fear.`,
           `Wrap Up - Your Transformation - After completing How Men Heal After Goodbye, healing should no longer mean simply reaching the point where you stop thinking about her.

You should be able to understand why the loss affected you the way it did, distinguish attachment panic from genuine relational decisions, grieve both the person and the future you expected, examine the relationship without either idealizing or demonizing it, establish boundaries around contact, rebuild a life that does not depend on romantic validation, and recognize when you are genuinely ready for somebody new.

Most importantly, the breakup should become information rather than identity.

You do not need to become colder because love hurt.

You need to become more discerning about whom you choose, more honest about what you need, more responsible for how you behave when frightened, and more capable of maintaining yourself while becoming deeply attached to someone else.

That is a stronger measure of recovery than forgetting her:

the next time you love, you know how to love without abandoning yourself—or the person beside you.`
          ] 
        }
    ]
  },

  // -------- "When Love Needs New Rules_"-------------

  'art-of-romance': {
    outcomes: [
      'Create small rituals that make everyday connection feel intentional.',
      'Choose thoughtful gestures that carry personal meaning.',
      'Design date nights around attention and connection.'
    ],
     sections: [
      { title: 'Lessons',
         lessons: [`When the Old Way Stops Working - Before creating new agreements, discover what the relationship has been silently teaching both of you to expect.

Many couples do not consciously decide how their relationship will function. They develop habits, and those habits gradually become unwritten rules.

One person always initiates difficult conversations. The other is expected to calm things down afterward. One partner makes most of the plans. The other assumes that silence means everything is fine. One person sacrifices personal time to maintain closeness, while the other begins to experience that sacrifice as normal.

These arrangements may work temporarily. But when circumstances change or resentment accumulates, the couple discovers that they have been living according to expectations neither person explicitly agreed to.

The first task is therefore not to create more rules. It is to understand the existing system.

Tatkin's secure-functioning approach is especially relevant because it examines the relationship as a cooperative two-person system rather than simply asking which individual is right. A couple needs to understand how its habits affect mutual safety, fairness, and the ability to work together. Richo similarly emphasizes responsibility, truthful engagement, and addressing conflicts rather than allowing unresolved patterns to continue indefinitely.

Consider a common example. One partner raises a concern. The other experiences it as criticism and withdraws. The first person becomes more anxious and pursues the conversation. The second feels overwhelmed and withdraws further. Eventually one apologizes simply to end the tension, and the relationship returns to normal without resolving the original issue.

The couple may describe the problem as “we argue too much.” But the deeper problem is that their method of handling disagreement repeatedly creates the next disagreement.

A new relationship agreement will fail if it addresses only the visible behavior while ignoring the cycle beneath it. “We will stop arguing” is not a workable agreement. “When either of us becomes overwhelmed, we will pause the conversation and agree on a time to return to it” is considerably more useful.

There is also an important distinction between a relationship that needs adjustment and one in which a partner is being harmed. Ordinary differences, poor communication, and changing needs can often be addressed through mutual agreements. Violence, coercive control, intimidation, or fear of retaliation require a safety-focused response and appropriate professional support—not a negotiation exercise that assumes both people have equal freedom to participate.

What You Are Learning

You are learning to diagnose relationship patterns before attempting to change them. You will distinguish individual incidents from recurring systems, identify unwritten expectations, and recognize the difference between a problem that can be negotiated and a situation that requires a more serious response.

The central capability is moving from “Who keeps causing this?” to “What repeatedly happens between us, and what would have to change?”

Practical Application

Imagine you and your partner both work demanding schedules. You assume that time together should happen spontaneously. Your partner expects you to make plans in advance. Neither expectation is unreasonable, but neither has been communicated clearly.

Eventually your partner says, “You never make time for me.” You respond, “You know how busy I am.” The argument becomes about whether you care, even though the practical problem concerns how you organize time.

The new rule should not be “You must spend more time with me.” It might be: “Every Sunday, we will compare our schedules and choose at least one period of uninterrupted time together that works for both of us.”

The agreement addresses the actual system rather than the accusation.

Practice — The Unwritten Rules Audit

Choose three recurring relationship problems. For each one, write what usually happens, what each partner appears to expect, what each person does when disappointed, and how the issue is temporarily resolved.

Then identify the unwritten rule beneath the pattern. For example: “The person who wants closeness must always initiate it,” or “Whoever becomes upset first determines when the conversation ends.”

Rewrite each unwritten rule into a question for discussion: “What would a fairer and more reliable arrangement look like for both of us?”

If you are completing the exercise together, compare your answers without debating which version is correct. The purpose is to discover where your experiences differ.

After This Section, You Will Be Able To
Identify recurring relationship cycles rather than focusing only on isolated arguments.
Recognize unwritten expectations that create resentment or confusion.
Distinguish negotiable relationship problems from situations involving serious safety concerns.
Describe a relationship problem in behavioral terms rather than through blame.
Identify which existing habits need to be replaced before creating new agreements.`, 

//------------2nd chapter-----------------------

          `Understand the Need Beneath the Reaction - The same behavior can mean different things to two people—and those meanings often determine the argument.

A relationship cannot be redesigned effectively if partners understand only what the other person does, but not what the behavior means to them.

One person asks for more contact because it helps them feel connected. The other hears the request as evidence that their independence is being restricted. One partner needs a period of quiet after work. The other interprets the silence as emotional rejection.

The disagreement is no longer simply about messages, time, or conversation. It has become a disagreement about security and freedom.

Attached provides a useful framework for recognizing how attachment-related needs and responses influence adult relationships. Some people become especially sensitive to signs of distance or uncertainty. Others become uncomfortable when closeness feels demanding or when they fear losing autonomy. These tendencies are not fixed diagnoses, and they should not be used to excuse harmful behavior or assign one partner all the responsibility.

Richo's work adds an important developmental perspective. Present situations can activate older emotional experiences, making a relatively small event feel much larger than it appears from the outside. Understanding this does not mean every problem is caused by childhood, nor does it mean a partner should be expected to repair all earlier wounds. It means that both people benefit from distinguishing the present issue from the additional meaning they bring to it.

For example, “You did not reply for four hours” is an observation. “You do not care about me” is an interpretation. “I felt anxious because I did not know whether we were okay” describes an experience. “I need more predictable communication” identifies a need that can be discussed.

These distinctions make cooperation possible.

The aim is not to require partners to explain every feeling perfectly. It is to become curious enough to ask what is happening beneath the reaction before deciding how to respond.

What You Are Learning

You are learning to distinguish observations, interpretations, emotions, and needs. You will recognize your own responses to closeness and distance and learn how to ask about your partner's experience without assuming you already know what their behavior means.

You will also learn that understanding a need does not automatically require agreeing to every request. A relationship must make room for both people's needs, including the possibility that some differences require negotiation or reveal genuine incompatibility.

Practical Application

Your partner becomes quiet after a difficult day. You immediately ask whether something is wrong between you. They say they need space. You feel rejected and continue asking questions. They become irritated.

A more useful conversation might happen later:

“When you become quiet without telling me what is happening, I sometimes assume we have a problem. I know that may not be what you intend. Could you let me know when you need time to decompress and when we can reconnect?”

Your partner might respond:

“I can do that. I also need you to believe me when I say I need an hour alone rather than continuing to ask whether I am upset with you.”

The new agreement protects both reassurance and autonomy.

Practice — The Meaning Beneath the Moment

Choose one recent disagreement and complete the following separately:

What happened?

What did I assume it meant?

What emotion did that interpretation create?

What was I actually needing?

How did I respond?

What might my partner have been experiencing?

Then write a request that addresses the need without accusing the other person of having a particular intention.

If completing the exercise together, each person should explain their own experience before responding to the other's. The goal is not immediate agreement, but more accurate understanding.

After This Section, You Will Be Able To
Separate observable behavior from assumptions about a partner's intentions.
Identify attachment-related needs and reactions without using labels as accusations.
Explain your emotional experience without making your partner responsible for every feeling.
Ask questions that clarify what your partner actually needs.
Develop requests that consider both connection and autonomy.`,

// -----------3rd chapter-----------------------

           `Replace Assumptions With Agreements - A useful relationship rule is a promise both people understand, freely accept, and can realistically keep.

Many relationship conflicts arise from expectations that are important but never explicitly discussed.

What counts as appropriate contact with an ex-partner? How should money be managed? How much privacy should each person have? What happens when someone needs space during an argument? How should family obligations be balanced with couple time? What does exclusivity mean? How do partners handle friendships, social media, or major decisions?

There is no single arrangement that works for every couple. What matters is whether the arrangement is clear, mutual, respectful, and compatible with both people's values.

Tatkin's secure-functioning approach emphasizes co-created agreements and a shared relationship structure. His work also makes clear that couples can organize their lives around different priorities, provided they are genuinely honest and mutually agree about those priorities. The purpose is not to impose one universal relationship model, but to create a functioning alliance.

This is where the word rules needs careful handling.

A rule should not mean that one person gains authority over the other's ordinary life. A healthy agreement is not a license to monitor, threaten, isolate, or punish a partner. It is a mutual commitment concerning how the relationship will function.

For example, “You are not allowed to have friends I dislike” is a controlling demand. “We will discuss situations that create genuine concerns about boundaries or fidelity, and we will not use friendships to conceal romantic or sexual involvement outside our agreement” is a more specific relationship commitment.

Similarly, “You must answer every message immediately” is unrealistic and restrictive. “If one of us will be unavailable for an extended period, we will communicate that when reasonably possible” is a practical agreement.

An effective agreement should answer four questions: What are we agreeing to? Why does it matter? What will we do when circumstances prevent us from following it? How will we revisit it?

This prevents agreements from becoming vague promises that sound reassuring but cannot be evaluated.

What You Are Learning

You are learning to design relationship agreements that are specific, reciprocal, and realistic. You will distinguish boundaries from shared commitments, identify expectations that need explicit discussion, and recognize when an agreement is being used to create security versus when it is being used to control.

You will also learn that an agreement is not genuinely mutual merely because one person says yes. Both partners must have meaningful freedom to express concerns, negotiate, and decline arrangements they cannot accept.

Practical Application

Suppose one partner is uncomfortable with the other's frequent private communication with a former romantic partner. Instead of arguing about whether the concern is “jealous” or whether the contact is “harmless,” the couple can discuss the actual circumstances.

What is the nature of the contact? Are there shared responsibilities? What boundaries already exist? What would transparency look like without turning into surveillance? What arrangement would both people consider respectful?

The eventual agreement may differ from another couple's. The important point is that it is based on mutual understanding rather than one person's anxiety or the other's unilateral decision.

Practice — The Relationship Agreement Canvas

Choose three areas where expectations are unclear. For each, complete:

The issue we need to address is...

Why it matters to each of us...

What we are both willing to commit to...

What remains an individual choice...

What we will do if the agreement cannot be kept...

When we will review it...

Then test the agreement against three questions: Is it fair to both people? Is it realistic in ordinary life? Can either person raise a concern without fear of punishment?

Revise any agreement that fails those tests.

After This Section, You Will Be Able To
Identify relationship expectations that require explicit agreements.
Distinguish mutual commitments from controlling demands.
Create specific agreements concerning communication, time, privacy, and other relevant areas.
Negotiate differences without assuming one partner's preference must automatically prevail.
Establish a process for revisiting agreements as circumstances change.`, 

// -----------4th chapter-----------------------

            `Repair the Pattern, Not Just the Argument - An apology can end a conversation. Repair changes what happens the next time.

Couples often believe they have resolved a problem because the emotional intensity has passed.

They apologize. They become affectionate again. They agree to “communicate better.” For a few days, everything feels normal. Then the same situation occurs and the same argument returns.

The problem is not necessarily that the apology was insincere. It may be that the couple repaired the immediate emotional rupture without changing the conditions that repeatedly produce it.

Tatkin's work emphasizes managing disagreements, creating safety, and repairing relational ruptures. Richo describes adult relationship work as addressing, processing, and resolving conflicts rather than simply avoiding them.

A useful repair process therefore needs several stages.

First, both people must become sufficiently regulated to participate. A conversation conducted while one person is overwhelmed may produce more injury than understanding. Taking a break can be helpful when it includes a clear commitment to return, rather than becoming a way to escape accountability.

Second, the couple needs to identify what actually happened. This includes distinguishing the event from the interpretation and allowing both people to describe their experience.

Third, responsibility must be specific. “I'm sorry you feel that way” may acknowledge distress without addressing behavior. A more meaningful apology identifies the action, recognizes its impact, and explains what will change.

Fourth, the couple needs an agreement that can be observed in future situations.

For example, “I will stop shutting down” is vague. “When I feel overwhelmed, I will tell you I need a break and agree on a time to return to the conversation” is behavioral.

Trust requires additional care. When an agreement has been seriously broken, the injured partner may need more than an apology. They may need truthful information, acknowledgment of the impact, a clear end to the harmful behavior, and sustained evidence that the new agreement is being honored. Forgiveness cannot be demanded as proof that repair is working.

Norwood's work also offers a useful caution: one partner cannot carry the entire repair process by repeatedly explaining, forgiving, rescuing, or managing the other's behavior. Genuine repair requires participation from the person whose behavior needs to change.

Serious betrayal, coercion, violence, or untreated addiction may require professional support or a different course of action. A general relationship course should not imply that every situation can be repaired through better communication.

What You Are Learning

You are learning to distinguish emotional reconciliation from actual problem resolution. You will practice taking responsibility, identifying the behavior that needs to change, and creating repair agreements that can be evaluated over time.

You will also learn to recognize when repair is mutual and when one person is being asked to repeatedly absorb the consequences of the other's behavior.

Practical Application

Imagine one partner repeatedly agrees to important plans and then cancels at the last minute. After each cancellation, they apologize and explain that work became unexpectedly demanding.

A more effective repair conversation would examine the pattern. Are the commitments unrealistic? Is the partner agreeing because they dislike disappointing the other person? Are work boundaries unclear? What kind of notice is possible? Which plans need to be protected?

The new agreement might involve making fewer commitments, confirming availability before promising, and communicating changes as soon as they become known. The injured partner can then evaluate whether reliability improves rather than relying on the emotional sincerity of each apology.

Practice — The Repair-to-Change Worksheet

Choose one recurring conflict and write:

The specific behavior that caused harm was...

The impact on the other person was...

My contribution was...

The pattern that makes this likely to happen again is...

The behavior we will practice instead is...

How we will recognize improvement is...

What we will do if the pattern returns is...

If the issue involves a serious breach of trust, do not use the worksheet to pressure the injured partner toward forgiveness. Use it to clarify accountability and determine whether appropriate professional support is needed.

After This Section, You Will Be Able To
Distinguish an apology from sustained behavioral repair.
Identify the recurring conditions that produce a conflict.
Take responsibility without becoming defensive or accepting blame for everything.
Create observable agreements for handling future disagreements.
Evaluate whether trust is being rebuilt through consistent behavior rather than promises alone.`, 

//_____________________5h chapter____________________

            `Make Connection a Shared Responsibility - A relationship cannot survive indefinitely on the assumption that love will take care of itself.

When couples begin focusing on problems, they can accidentally turn the relationship into a permanent improvement project.

Every conversation becomes about what is wrong. Every quiet moment is analyzed. Affection begins to feel like evidence that must be produced. One partner becomes responsible for initiating closeness while the other waits to be approached.

A relationship needs more than the absence of conflict. It needs experiences that make both people want to remain connected.

Tatkin's Wired for Love includes practical attention to connection rituals, learning what helps a partner feel loved, and maintaining the shared bond through ordinary interactions. Richo's Five A's offer a complementary framework: attention, acceptance, appreciation, affection, and allowing. Together, these ideas emphasize that love is expressed through repeated behavior, not merely through a private feeling.

The important word is mutual.

If one person always plans dates, initiates affection, raises concerns, and repairs distance, the relationship may become dependent on that person's effort. The other partner may genuinely care, but care that is rarely expressed can still leave the relationship undernourished.

New rules should therefore address not only what the couple will stop doing, but what they will actively create.

How will you maintain meaningful time together? How will you show appreciation? How will you protect affection from becoming purely routine? How will you communicate about sexual intimacy without pressure or entitlement? How will you preserve playfulness when work and responsibilities increase?

The answers should fit the couple rather than imitate a universal formula. Some partners value frequent verbal affection. Others appreciate practical support, physical closeness, shared activities, or uninterrupted conversation. The task is to learn what matters to each person and make room for it.

Norwood's work provides an important counterbalance: connection should not become an obligation for one person to continually manage the other's emotional state. The aim is reciprocal care, not a system in which one partner must constantly prove that they are loving enough.

What You Are Learning

You are learning to distinguish relationship maintenance from relationship management. You will identify the behaviors that create connection for each partner, recognize imbalances in emotional initiative, and develop realistic rituals that support intimacy without becoming compulsory performances.

You will also learn to discuss affection and physical intimacy as areas of mutual preference, consent, and care rather than assuming that one partner's desire automatically creates an obligation for the other.

Practical Application

Suppose you and your partner live together and spend most evenings in the same room, but you rarely have meaningful conversations. One person feels lonely despite the amount of time spent together. The other believes the relationship is fine because you are physically present.

The new agreement might be to protect a short period of uninterrupted conversation several evenings each week and plan an activity together regularly. It could also include recognizing when one partner needs rest or personal time.

The purpose is not to impose a schedule for romance. It is to stop assuming that proximity automatically creates connection.

Practice — The Connection Menu

Each partner independently identifies five behaviors that help them feel connected and five that help them feel appreciated. Include ordinary, realistic actions rather than only expensive dates or major gestures.

Compare your answers and choose two small practices that both people are willing to initiate. Decide how you will make room for them during a normal week and how you will adapt them during stressful periods.

After two weeks, discuss which practices felt meaningful, which felt forced, and what you would change. The goal is to discover what genuinely nourishes the relationship rather than completing a checklist.

After This Section, You Will Be Able To
Identify the behaviors that create emotional connection for each partner.
Recognize when responsibility for maintaining closeness has become uneven.
Develop realistic rituals for attention, appreciation, affection, and shared time.
Discuss physical and emotional intimacy with respect for mutual preference and consent.
Maintain connection without turning affection into a test or obligation.`, 

//_____________________6th chapter____________________

            `Rewrite the Rules When Life Changes -  The relationship that worked at the beginning may need a different structure for the life you are building now.

Some relationship problems do not arise because either partner has changed for the worse. They arise because the couple's circumstances have changed while their expectations have remained the same.

A relationship that worked when both people had flexible schedules may struggle when one begins demanding work or study. A couple who once had few financial responsibilities may need new agreements after taking on debt, buying a home, or supporting family members. Marriage, children, relocation, illness, or a major career opportunity can alter the amount of time, energy, and attention each person can realistically provide.

The mistake is expecting the relationship to continue functioning exactly as it did before.

Tatkin's secure-functioning approach emphasizes co-creating a shared purpose and relationship structure. His work also recognizes that couples may organize their lives around different priorities, provided those priorities are openly discussed and mutually accepted.

Richo's emphasis on allowing adds an important dimension: partners must be able to recognize one another as developing people rather than demanding that the other remain permanently adapted to an earlier stage of the relationship.

This does not mean every change should be accepted without discussion. A major life decision can affect both partners. One person's ambition may require sacrifices from the other. Family obligations may create real conflicts. Financial decisions may alter the couple's security.

The task is to distinguish individual choice from shared consequence.

A partner may have the right to pursue a career opportunity, but the couple still needs to discuss what relocation, reduced time together, or financial risk would mean for both of them. A person may need to support a family member, but that does not mean their partner's needs become irrelevant.

Healthy adaptation requires a shared understanding of what matters most, what each person is willing to sacrifice, what cannot reasonably be sacrificed, and how the arrangement will be reviewed.

The deeper principle is that commitment should provide a stable foundation for change—not become a demand that neither person ever changes.

What You Are Learning

You are learning to adapt relationship agreements to changing circumstances. You will distinguish temporary sacrifices from permanent imbalances, evaluate how major decisions affect both partners, and develop a process for negotiating competing priorities without treating one person's ambitions or responsibilities as inherently more important.

Practical Application

Imagine one partner receives a promotion that requires six months of unusually demanding work. The other partner begins feeling neglected and worries that the relationship is becoming secondary.

A poorly managed response might be for one person to insist that the career opportunity must be sacrificed, or for the other to declare that the partner should simply understand.

A more useful conversation would establish what the opportunity requires, what support is realistically possible, how the couple will maintain connection, which responsibilities need to be redistributed, and when the arrangement will be reviewed.

The agreement may involve temporary sacrifice. But the sacrifice is visible, discussed, and connected to a shared understanding rather than silently becoming the new normal.

Practice — The Life-Change Negotiation

Choose one current or anticipated change: career, education, relocation, finances, family responsibilities, health, or another significant transition.

Each partner answers:

What does this change mean to me?

What am I afraid of losing?

What support do I need?

What can I realistically offer?

What sacrifices would be temporary?

What sacrifices would be unacceptable or unsustainable?

Then create a provisional agreement for the next four to eight weeks. Include a review date and identify what would need to change if the arrangement is not working.

After This Section, You Will Be Able To
Recognize when changing circumstances require new relationship agreements.
Evaluate how major decisions affect both individual and shared priorities.
Negotiate temporary sacrifices without allowing them to become unexamined permanent imbalances.
Create adaptable agreements concerning work, family, finances, and other life transitions.
Support individual development while protecting the relationship's mutual commitments.`,

//_____________________7th chapter____________________

         `Build a Relationship That Can Keep Evolving -New rules are successful only when they create a better way of living together—not merely a temporary period of better behavior.

The final stage is implementation.

A couple can have an excellent conversation, create thoughtful agreements, and feel hopeful about the future. But the real test begins when ordinary life returns.

Someone becomes tired. Work becomes demanding. A familiar trigger appears. An agreement is forgotten. A difficult conversation is postponed. The old pattern offers an easier response than the new one.

This is where relationship change either becomes a practice or remains a promise.

The course's final framework is a relationship operating system: a small set of shared commitments, communication practices, repair procedures, and review habits that help the couple respond to problems before they become entrenched.

The framework is an original educational synthesis, not a named model from any of the four books. It draws especially on Tatkin's emphasis on mutually satisfying agreements and secure functioning, Richo's focus on ongoing responsibility and mindful love, and the attachment-related importance of responsiveness and emotional availability.

A useful operating system does not need dozens of rules. Too many agreements can create the feeling of living under constant evaluation. A smaller number of meaningful commitments is more likely to be remembered and practiced.

The couple should know how to raise concerns, how to request space, how to return to difficult conversations, how to protect important boundaries, how to maintain connection, and how to revisit agreements when they stop working.

Equally important, both people need to retain the freedom to evaluate whether the relationship remains healthy.

A new agreement should not become a reason to stay indefinitely in a relationship that repeatedly violates important needs or boundaries. If one person consistently refuses participation, breaks agreements, or expects the other to carry all the emotional work, the issue may no longer be the quality of the rules.

It may be the absence of mutual willingness.

Richo's work recognizes that mature love can include ending a relationship when it is no longer workable. Norwood's recovery perspective similarly warns against organizing one's life around the hope that another person will eventually change.

The final lesson is therefore not that every relationship can be saved through better agreements.

It is that a relationship worth continuing should become more honest, more mutual, and more capable of supporting both people's wellbeing as it evolves.

What You Are Learning

You are learning to turn relationship insights into sustainable practices. You will create a manageable set of agreements, establish a review process, evaluate whether behavior is actually changing, and recognize when an arrangement needs adjustment rather than another vague promise.

You will also learn to distinguish a difficult but workable relationship from one in which the necessary willingness or safety is absent.

Practical Application

Imagine you and your partner agree to improve communication and spend more meaningful time together. For the first two weeks, both of you make an effort. Then work becomes demanding and the old habits return.

Instead of interpreting this immediately as proof that nothing will ever change, you review the agreement. Was it unrealistic? Did you fail to anticipate a predictable obstacle? Does one person need more support? Is the commitment still important to both of you?

If the agreement was unrealistic, you revise it.

If one person repeatedly refuses to participate, you address that directly.

If the relationship has become unsafe, you prioritize safety rather than continuing the experiment.

The purpose of review is to learn from reality—not to manufacture evidence that the relationship must succeed.

Practice — The 30-Day Relationship Reset

Create a one-page agreement containing five areas:

Connection: What will we do regularly to maintain closeness?

Communication: How will we express needs and concerns?

Conflict: What will we do when either person becomes overwhelmed, and how will we return to repair?

Boundaries: Which individual limits and shared commitments are important to us?

Review: When will we discuss what is working and what needs adjustment?

Choose no more than two specific behavioral changes to focus on during the first 30 days. At the end of each week, discuss what happened without turning the review into a scorekeeping exercise.

At the end of the month, answer:

What has genuinely improved?

What remains difficult?

Are both people participating?

Which agreement needs revision?

What evidence do we have that the relationship is becoming healthier?

What would we need to acknowledge if the same problems continued for another six months?

Use the answers to decide whether to continue the current approach, revise the agreements, seek appropriate professional support, or reconsider the relationship.

After This Section, You Will Be Able To
Create a concise relationship operating agreement that both partners can realistically practice.
Evaluate progress through observable behavior rather than temporary emotional reassurance.
Review and revise agreements without turning the relationship into constant scorekeeping.
Distinguish normal setbacks from repeated unwillingness to participate.
Make informed decisions about continuing, changing, or ending a relationship when necessary.`, 

//_____________________8th chapter____________________

         `   Wrap up, Your Transformation -

After completing When Love Needs New Rules, you should be able to recognize when a relationship's existing habits are no longer serving the people inside it. You can identify recurring patterns, understand the needs beneath conflict, communicate expectations clearly, and create agreements that protect both connection and autonomy.

You should also be capable of distinguishing an apology from actual repair, rebuilding trust through consistent behavior, sharing responsibility for maintaining intimacy, and adapting the relationship when careers, family, finances, or personal development change what each person needs.

Most importantly, you should no longer assume that love must either continue exactly as it always has or come to an end. You will have a practical framework for asking whether the relationship can evolve—and whether both people are genuinely willing to participate in that evolution.

The goal is not a relationship with more restrictions.

It is a relationship with fewer harmful assumptions, clearer commitments, better repair, and enough mutual freedom and security for both people to keep choosing it.`
          ] }
    ]
  
    
  },


  'The-Art-of-Receiving-Love': {
    outcomes: [
     ` When Loving Him Costs You is not a course about blaming men or teaching women 
              to leave at the first sign of difficulty. It is about learning to distinguish healthy relationship investment from chronic emotional overinvestment.`,
    ],
     sections : [
      { title: 'Lessons', lessons: [`Intro - When Love Starts Taking More Than It Gives - The first warning is often not that you stopped loving him—it is that you slowly stopped recognizing yourself.

Unhealthy relationships do not always begin with obvious cruelty or dramatic betrayal. Sometimes the erosion is gradual.

You begin canceling plans because he may want to see you.

You monitor his mood before deciding how you are allowed to feel.

You repeatedly explain behavior that hurts you.

Your standards change.

What once would have felt unacceptable becomes something you describe as “complicated.”

You stop asking whether the relationship is working and start asking how you can make yourself easier to love.

This is an important psychological shift.

In a healthy relationship, compromise happens inside a stable sense of self.

In an unhealthy pattern, compromise can slowly become self-abandonment.

Robin Norwood s work is especially relevant here. Women Who Love Too Much examines women whose emotional lives become increasingly organized around a difficult, unavailable, troubled, or inconsistent partner. Attention moves away from the question:

“Is this relationship good for me?”

and toward:

“How can I finally make this relationship work?”

That difference matters.

Because effort feels virtuous.

Loyalty feels virtuous.

Patience feels virtuous.

Understanding another person's wounds feels compassionate.

But healthy qualities can become destructive when they repeatedly require you to violate your own emotional reality.

David Richo s framework adds another important distinction. Mature love includes attention, acceptance, appreciation, affection, and allowing—but these qualities are not meant to erase boundaries or transform one partner into the emotional caretaker of the other.

Love can require generosity.

It should not require disappearance.

What You Are Learning

You are learning how to distinguish:

compromise from self-abandonment,
loyalty from fear of leaving,
patience from tolerating chronic harm,
compassion from rescuing,
and commitment from emotional dependency.

You will begin measuring the cost of the relationship, rather than evaluating it only by how strongly you feel.

Practical Application

Imagine he repeatedly cancels plans at the last minute.

You feel hurt.

But instead of addressing the pattern, you tell yourself:

“He has a stressful job.”

“He doesn't express emotions like I do.”

“He had a difficult childhood.”

“He probably doesn't realize how it affects me.”

Any of those explanations could contain truth.

But explanations and boundaries serve different purposes.

Understanding why he behaves this way does not answer whether you should continually accept the behavior.

A healthier question becomes:

Can I understand his reasons while still taking my own experience seriously?

Practice — The Relationship Cost Audit

Rate the relationship from 1 to10 in these areas:

Emotional peace
Self-respect
Trust
Friendships
Family connection
Confidence
Physical health
Sleep
Work/study concentration
Financial stability
Personal goals
Freedom to speak honestly
Ability to say no
Sense of identity

Then answer:

What have I gained from loving him?

What have I repeatedly sacrificed?

Which sacrifices were freely chosen?

Which sacrifices were made because I feared what would happen if I stopped?

That final distinction is critical.

After This Section, You Will Be Able To
Identify where relationship compromise has become self-abandonment.
Evaluate the emotional and practical cost of maintaining the relationship.
Distinguish understanding someone's behavior from excusing it.
Recognize when your life has begun revolving disproportionately around your partner.
Describe what healthy commitment should not require you to sacrifice.`,
// ---------====================== sec lesson----------- 
        ` Why Uncertainty Can Feel Like Love - Sometimes the relationship feels powerful because you never feel completely secure inside it.

One of the most confusing relationship experiences is feeling intensely attached to someone who consistently makes you uncertain.

He is affectionate, then distant.

Interested, then unavailable.

Future-focused one week and vague the next.

After an argument, he disappears.

When you finally begin detaching, he becomes affectionate again.

The emotional intensity can feel like evidence of extraordinary chemistry.

Sometimes it is chemistry.

But sometimes uncertainty itself is intensifying attachment.

Attached provides a useful framework for understanding anxious and avoidant relationship patterns.

Someone with strong anxious tendencies may become increasingly focused on signs of rejection or abandonment. Someone with avoidant tendencies may experience closeness as pressure and seek greater distance.

When those tendencies interact, a cycle can develop:

She seeks reassurance.

He withdraws.

His withdrawal increases her anxiety.

Her pursuit increases his discomfort.

He withdraws further.

Then, after distance becomes large enough, he may reconnect.

She experiences enormous relief.

The relief itself can make the relationship feel intensely rewarding.

But emotional relief is not the same thing as emotional security.

This is why some women discover that stable partners initially feel “less exciting” than inconsistent partners.

Their nervous system may have learned to associate uncertainty with intensity.

That does not mean secure relationships should feel emotionally flat.

It means constant anxiety should not automatically be interpreted as passion.

What You Are Learning

You are learning to distinguish:

attraction from activation,

chemistry from unpredictability,

missing someone from feeling insecure about access to them.

You are also learning how your own attachment responses may influence the relationship.

Practical Application

Suppose he does not reply for eight hours.

You send another message.

Then another.

Eventually he replies warmly.

The anxiety disappears immediately.

For the next several hours you feel close again.

You may interpret this emotional swing as:

“We have such a powerful connection.”

But ask:

Would the connection still feel this powerful if his availability were predictable?

That question can expose whether uncertainty has become part of the attraction.

Practice — The Activation vs Connection Test

Think about five emotionally intense moments with him.

For each one ask:

Was I experiencing closeness—or relief after uncertainty?

Did I feel secure before the interaction?

Was I afraid he was pulling away?

Did his attention calm an anxiety he had helped create?

Would I still consider this romantic if the pattern happened to my closest friend?

Then identify your most common response when you fear losing him:

pursuit,
overexplaining,
apologizing excessively,
sexual reassurance,
jealousy,
monitoring,
emotional shutdown,
testing him,
threatening to leave.

Understanding the response gives you a chance to change it.

After This Section, You Will Be Able To
Recognize anxious-avoidant relationship dynamics.
Distinguish emotional security from relief after uncertainty.
Identify your own attachment-related reactions.
Evaluate whether unpredictability is amplifying attraction.
Respond to relational uncertainty more deliberately rather than automatically.`, 
        // ---------====================== 3rd lesson----------- 
        `Stop Trying to Earn What Should Be Mutual - Love becomes exhausting when your role changes from partner to persuader.

One of the most damaging relationship beliefs is:

“If I love him well enough, eventually he will love me the way I need.”

This belief can keep a person emotionally invested for years.

You explain your needs more clearly.

Become more patient.

Become less demanding.

Give him space.

Try to be more attractive.

Avoid difficult conversations.

Forgive another incident.

Support another crisis.

Wait for another promise.

Eventually your emotional life becomes organized around his potential rather than his actual behavior.

Norwood’s work repeatedly examines this dynamic: love becomes entangled with rescuing, fixing, changing, or rehabilitating another person.

The relationship stops being evaluated according to reciprocity.

Instead, the question becomes:

How much more should I give before he finally becomes capable of giving back?

But adult relationships are not rehabilitation programs.

You can encourage growth.

You can support someone.

You can have compassion for their history.

You cannot perform their emotional development for them.

Richo’s concept of allowing is important here.

Allowing another person to be who they actually are means surrendering the fantasy that love gives you the power to redesign them.

Sometimes acceptance produces closeness.

Sometimes acceptance produces a painful realization:

The person I love may genuinely be unable or unwilling to offer the relationship I need.

That realization can be more difficult than anger because it removes the project.

There is nothing left to fix.

There is only a decision.

What You Are Learning

You are learning to distinguish:

loving someone from managing them,
supporting someone from rescuing them,
communicating needs from repeatedly negotiating basic standards,
and believing in someone's potential from building a relationship around that potential.
Practical Application

He says:

“I know I need to communicate better.”

Three months later, the same pattern continues.

After another argument he says:

“I promise I'll change.”

You feel hope.

Again.

At this point, the relevant question is no longer whether his apology is sincere.

He may genuinely mean it every time.

The relevant question is:

Does sincere regret reliably become different behavior?

Relationships are lived through patterns, not intentions.

Practice — Potential vs Reality

Create two columns.

Who He Could Be

Write everything you believe he could become if he:

healed,
committed,
communicated,
stopped drinking,
became more responsible,
processed his past,
became emotionally available.

Then write:

Who He Is With Me Right Now

Describe only repeated observable behavior.

Now ask:

If nothing changed for the next three years, would I still choose this relationship?

Do not answer according to the man you hope he becomes.

Answer according to the relationship you actually have.

After This Section, You Will Be Able To
Identify when love has turned into a project of changing your partner.
Separate potential from demonstrated relationship capacity.
Evaluate apologies according to behavioral change.
Stop assuming responsibility for another adult's emotional development.
Decide what you can accept without abandoning your own needs.`, 
        // ---------====================== 4th lesson----------- 
        `Boundaries Are Where Love Meets Self-Respect - A boundary does not control what he does. It determines what you will participate in.

Boundaries are frequently misunderstood.

People say:

“You're not allowed to talk to her.”

“You have to answer my messages.”

“You can't go out with your friends.”

These may be demands or relationship agreements, but they are not automatically boundaries.

A genuine boundary is centered on your participation.

For example:

“If shouting begins, I will end the conversation and return when we can speak respectfully.”

“If exclusivity is not what you want, I will not continue this relationship as an exclusive partnership.”

“If you repeatedly disappear for days without communication, this relationship will not work for me.”

The difference is subtle but powerful.

Control says:

You must behave this way so I feel safe.

A boundary says:

You are free to choose your behavior, and I am responsible for deciding what I will remain available for.

Richo's Five A's make this especially important.

Acceptance does not mean approving everything.

Allowing does not mean tolerating everything.

You can acknowledge another person's right to live according to their choices while simultaneously recognizing that those choices may make intimacy with them impossible.

Tatkin's secure-functioning model adds another layer: healthy relationships require explicit agreements and mutual protection.

Boundaries should not become two people defending separate territories forever.

In secure relationships they gradually become shared agreements:

What do we both believe protects this relationship?

Healthy couples discuss fidelity.

Privacy.

Digital behavior.

Conflict.

Money.

Family.

Friendships.

Sex.

Time.

Communication.

The goal is not maximum restriction.

It is maximum clarity.

What You Are Learning

You are learning how to create boundaries that are clear, behavioral, realistic, and enforceable.

You will distinguish:

boundary,
request,
preference,
agreement,
ultimatum,
and control.

You will also learn that a boundary repeatedly stated but never enforced eventually teaches the other person that it is optional.

Practical Application

Suppose he repeatedly insults you during arguments.

You say:

“Please don't speak to me that way.”

Nothing changes.

You say it again.

Nothing changes.

Eventually the problem is no longer only that he violates the boundary.

You must ask:

What action am I willing to take when the boundary is crossed?

Perhaps:

“I want to resolve problems with you. But I will not continue conversations where either of us insults the other. If that happens, I will leave the conversation and we can revisit it later.”

The boundary now includes behavior.

Practice — Rewrite Your Boundaries

Write five statements beginning with:

“He needs to...”

Example:

“He needs to stop disappearing.”

Now rewrite each into:

“If X continues, I will...”

Example:

“If prolonged unexplained disappearances continue, I will reconsider whether this relationship meets my requirements for reliability.”

Then identify:

What consequence can I genuinely carry out?

A boundary you are unwilling to uphold is not yet a functioning boundary.

After This Section, You Will Be Able To
Distinguish boundaries from control and demands.
Communicate relationship limits clearly.
Create consequences you can realistically enforce.
Evaluate whether important relationship agreements are mutual.
Protect self-respect without using boundaries as punishment.`, 
        // ---------====================== 5th lesson----------- 
        `Decide Whether This Love Can Become Safe - Not every difficult relationship must end—but love alone cannot make every relationship workable.

Once you stop trying to rescue the relationship, a more serious question becomes possible:

Can this relationship actually become healthy?

The answer should not depend solely on:

how much you love him,

how long you have been together,

how painful leaving would feel,

or how wonderful the relationship can be during good periods.

A viable relationship needs capacity.

Tatkin's secure-functioning approach is especially useful here because it focuses on the relationship both partners create.

Can you protect one another emotionally?

Can disagreements happen without humiliation or abandonment?

Are promises reliable?

Can trust be repaired?

Do both people adapt?

Does each partner care about the other's wellbeing?

Can you create agreements that both people follow?

Attached adds availability and responsiveness.

Richo adds acceptance, affection, attention, appreciation, allowing, boundaries, and emotional adulthood.

Together these ideas produce an important distinction:

Relationship problems versus relationship structure.

A relationship problem might be:

“We disagree about how often to visit family.”

A structural problem might be:

“He refuses to discuss anything that makes him uncomfortable.”

Problems can often be negotiated.

Structural problems affect the ability to negotiate anything.

This is why the most important question is not:

Do we have problems?

Every relationship does.

It is:

Do we have the capacity to work on problems together?

What You Are Learning

You are learning to evaluate a relationship according to:

reciprocity,
emotional safety,
accountability,
responsiveness,
trust,
compatibility,
repair,
respect,
willingness,
and sustained behavioral change.
Practical Application

Two couples may both argue frequently.

In Couple A:

Both sometimes become reactive, but they apologize, discuss what happened, change behavior, and gradually improve.

In Couple B:

One person repeatedly insults, disappears, lies, or refuses responsibility while the other repeatedly attempts repair.

The number of arguments may look similar.

The relationship capacity is completely different.

This is why “we fight sometimes” tells you almost nothing.

The quality of repair matters far more.

Practice — The Relationship Viability Test

Score each from 0–5:

Safety

Respect

Trust

Reciprocity

Communication

Accountability

Reliability

Conflict repair

Boundary respect

Shared values

Future compatibility

Mutual willingness to change

Now answer:

Which score exists because of actual behavior?

Which score exists mainly because I believe he can improve?

Then ask:

If I met him today exactly as he is now, would I choose this relationship again?

That question strips away sunk cost.

After This Section, You Will Be Able To
Evaluate whether a relationship has genuine repair capacity.
Distinguish temporary relationship problems from structural dysfunction.
Assess reciprocity and emotional safety realistically.
Identify whether change is mutual or carried primarily by one person.
Make relationship decisions from evidence rather than history or fear.`, 
        // ---------====================== 6th lesson----------- 
        `When Leaving Hurts More Than Staying but Staying Costs More - Sometimes the hardest relationship decision is choosing temporary pain over permanent erosion.

Leaving does not automatically feel empowering.

Sometimes it feels terrible.

You may know intellectually that the relationship is unhealthy and still desperately miss him.

You may remember everything good about him the moment you consider leaving.

You may imagine him changing for someone else.

You may fear being alone.

You may wonder whether you were too demanding.

You may worry that you will regret the decision forever.

These feelings do not necessarily mean you should return.

They mean attachment does not disappear the moment judgment becomes clear.

This distinction is essential.

People sometimes assume:

“If leaving is this painful, maybe leaving is wrong.”

But painful and wrong are not synonyms.

Richo's treatment of relationship endings helps here. Mature love includes the ability to confront loss rather than demanding that every meaningful relationship continue indefinitely.

Norwood's recovery perspective contributes another important insight: when a person's emotional life has become organized around another individual, separation can initially feel like losing much more than the partner.

You may also lose:

your emotional project,

your daily focus,

your role as rescuer,

your imagined future,

your source of intensity,

your identity as his partner.

This is why leaving can create emptiness even when the relationship itself was exhausting.

You are not only losing him.

You are learning who you are without managing the relationship.

What You Are Learning

You are learning how to leave without turning grief into evidence that the relationship should be restarted.

You will also learn how to reduce behaviors that keep the attachment continually activated:

constant checking,

unnecessary contact,

social-media monitoring,

asking mutual friends for updates,

and using new partners primarily to avoid grief.

Practical Application

Suppose three weeks after ending the relationship you feel worse than you did during the relationship.

Your mind says:

“At least when we were together, I wasn't this lonely.”

That may be true.

But compare the correct things.

Do not compare:

today's worst breakup day

with

the relationship's best memory.

Compare the broader realities:

Who were you becoming while staying?

What repeatedly happened?

What did staying require?

What would returning require you to ignore?

Grief can distort comparison.

Practice — The Return Test

Whenever you strongly want to go back, answer:

What am I feeling right now?

What triggered the urge?

What exactly do I miss?

What relationship problem has actually changed?

What evidence do I have of change?

If I return today, what will be different besides my temporary relief?

Save the answers.

Compare them across several weeks.

You may discover that the desire to return rises and falls with loneliness rather than with new evidence about the relationship.

After This Section, You Will Be Able To
Understand why leaving can hurt even when leaving is healthy.
Separate attachment grief from relationship viability.
Recognize behaviors that repeatedly reactivate the bond.
Evaluate reunion based on changed conditions rather than emotional discomfort.
Begin rebuilding identity outside the relationship.`,
        // ---------====================== 7th lesson----------- 
         `Love Again Without Losing Yourself - The goal is not to become harder to hurt. It is to become harder to abandon.

The danger after an exhausting relationship is overcorrection.

You may decide:

“I'll never trust anyone that much again.”

“I will leave the moment a man disappoints me.”

“I don't need anybody.”

“I'll keep everything casual.”

Emotional distance can feel like strength after overinvestment.

But avoiding intimacy is not the opposite of unhealthy attachment.

It is another way fear can organize relationships.

The better objective is secure interdependence.

You can love deeply.

Need someone.

Depend on someone.

Build a life together.

And still retain your standards, friendships, identity, voice, boundaries, and ability to leave if the relationship becomes fundamentally incompatible with your wellbeing.

Attached helps you recognize availability and compatibility earlier.

Tatkin helps you evaluate whether the two of you can create secure functioning.

Richo reminds you that mature loving combines closeness with allowing.

Norwood's work warns against disappearing into another person's problems.

Together, the lesson becomes:

Love should expand your life, not require you to continuously shrink yourself to keep it.

That does not mean every healthy relationship feels easy.

You will compromise.

You will sometimes prioritize your partner.

You may support him through illness, grief, unemployment, family difficulty, or periods when he cannot give equally.

Healthy relationships are not mathematically balanced every day.

The deeper question is whether sacrifice exists inside reciprocity and respect.

Does he care what the sacrifice costs you?

Would he make comparable sacrifices?

Can you speak honestly about your needs?

Can the relationship adapt?

Do you remain recognizable to yourself?

Those questions distinguish devotion from self-erasure.

What You Are Learning

You are integrating a new relationship standard.

Instead of selecting primarily for:

chemistry,

intensity,

potential,

status,

appearance,

or the thrill of being chosen,

you learn to include:

consistency,

availability,

reciprocity,

emotional responsibility,

boundary respect,

shared values,

and repair capacity.

Practical Application

Imagine meeting a man who is warm, consistent, communicative, and interested.

He tells you where you stand.

There are no disappearing acts.

No need to decode messages.

No constant question about whether he wants you.

Part of you may initially think:

“Something is missing.”

Before assuming there is no chemistry, ask:

Is something missing—or is anxiety missing?

If previous relationships linked attraction with uncertainty, security may initially feel unfamiliar.

Unfamiliar does not automatically mean wrong.

Practice — Your Relationship Standard

Create three categories.

Non-Negotiables

Examples:

respect,
honesty,
fidelity if monogamous,
emotional safety,
boundary respect.
Important Preferences

Examples:

communication style,
lifestyle,
affection,
ambition,
social habits.
Flexible Differences

Things you can comfortably negotiate.

Then complete:

In my next relationship, I will not confuse ____ with love.

I will speak sooner when ____ happens.

I will stop trying to rescue someone from _____.

I know I am beginning to lose myself when _____.

A partner earns deeper trust from me by _____.

I will know love is costing too much when _____.

Review these standards when you begin dating—not only after becoming emotionally attached.

After This Section, You Will Be Able To
Enter future relationships without becoming emotionally closed.
Evaluate partners for availability, reciprocity, and secure relationship capacity.
Distinguish healthy sacrifice from chronic self-erasure.
Maintain boundaries and identity while becoming deeply attached.
Recognize unhealthy patterns earlier instead of waiting until leaving becomes extremely difficult.
Choose relationships in which love and self-respect can coexist.`,
        // ---------====================== 8th lesson-----------
          `Wrap up - Your Transformation

After When Loving Him Costs You, you should no longer evaluate a relationship only by asking how strongly you love him or how painful losing him would be.

You should be capable of evaluating what the relationship is actually asking you to become.

You can recognize when uncertainty is intensifying attachment, when compassion has become rescuing, when hope is being built around potential rather than behavior, and when repeated compromise has crossed into self-abandonment. You can communicate boundaries, evaluate whether genuine repair is possible, and understand why leaving may still hurt even when leaving protects you.

Most importantly, you do not have to choose between loving someone and belonging to yourself.

Healthy intimacy asks you to bring your full self into the relationship.

If keeping the relationship requires that self to continually become smaller, the cost is no longer merely compromise.

It is the relationship itself.`] }
    ],
  },
  /* 1. Add course lessons in courseContentData */

'love-without-losing-yourself': {
  outcomes: [
    `After completing this course, learners will be able to:

Distinguish genuine commitment from staying primarily because of fear, guilt, habit, or past investment.
Evaluate a relationship's emotional safety, reciprocity, compatibility, and capacity for repair.
Identify recurring patterns and distinguish workable problems from fundamental differences.
Create specific agreements and assess whether apologies are becoming sustained behavioral change.
Maintain boundaries, personal identity, and mutual care without confusing sacrifice with self-erasure.
Make a considered decision about staying, seeking support, or leaving based on observable reality rather than emotional pressure.`
  ],
  sections: [
    {
      title: 'Lessons',
      lessons: [
        `The Difference Between Choosing and Staying - The first question is not whether you still love them. It is what is keeping you there.

A relationship can become such a central part of life that the idea of leaving feels almost impossible to examine objectively. Your partner may be woven into your routines, friendships, family, finances, future plans, and sense of identity. Even when the relationship becomes painful, leaving can feel like dismantling an entire life rather than ending one connection.

That difficulty does not automatically mean the relationship is wrong. Long-term commitments are supposed to matter. Shared history, children, marriage, financial responsibilities, and promises can all create legitimate reasons to work through difficult periods. The problem arises when those reasons become substitutes for evaluating the relationship itself.

Someone may say, “We've been together for seven years,” when the more relevant question is what those seven years have become. Another person may say, “I can't imagine life without them,” when what they actually mean is that they have not yet imagined a workable life without the relationship. Someone else may remain because their partner has been through hardship and they feel responsible for preventing further pain.

Robin Norwood's work is particularly useful for understanding this distinction. Women Who Love Too Much examines relationships in which a person's emotional life becomes increasingly organized around a difficult or unavailable partner, sometimes at the expense of their own interests, friendships, and wellbeing. Although the book focuses on women, the broader pattern of confusing intense investment with healthy love can be relevant across genders. (penguinrandomhouse.com)

Richo's approach adds another dimension: mature love involves recognizing reality rather than attempting to control it. A person can genuinely love someone while also acknowledging that the relationship may not be capable of meeting important needs. His work explicitly includes maintaining boundaries and surviving relationship endings as part of adult loving. (shambhala.com)

This does not mean you should leave whenever a relationship becomes difficult. It means that the difficulty of leaving should not be mistaken for evidence that staying is the right choice.

A meaningful commitment is renewed through choice. That choice becomes more trustworthy when you can identify what is valuable about the relationship today, what remains difficult, and what both people are willing to do about it.

What You Are Learning

You are learning to distinguish commitment from inertia, love from dependency, and genuine hope from the fear of losing what is familiar. You will examine the reasons you remain in a relationship without assuming that fear automatically invalidates love or that shared history automatically justifies staying.

The objective is to develop a more accurate answer to: “What am I choosing when I choose this relationship?”

Practical Application

Imagine you and your partner have been together for six years. You care deeply about each other, but the last two years have involved repeated arguments, little intimacy, and unresolved disagreements about the future.

When a friend asks why you stay, you answer, “We've invested too much to give up now.”

That may describe the weight of your history, but it does not describe the relationship's present value or future potential.

A more useful answer would examine whether you still respect one another, whether both people want to improve the relationship, whether important problems can be addressed, and whether the future you are working toward is genuinely shared.

Practice — The Reasons I Stay Audit

Write your reasons for staying without editing them to sound noble or reasonable. Include love, companionship, family, finances, shared history, fear, hope, responsibility, attraction, and anything else that is genuinely relevant.

Then classify each reason as present value, future possibility, practical obligation, or fear of loss. Some reasons may belong in more than one category.

Finally, answer: “If I knew I could survive the pain and practical difficulty of leaving, what would I still value enough about this relationship to choose it?”

This exercise is not intended to produce an immediate decision. It is intended to separate the relationship's value from the fear surrounding its possible ending.

After This Section, You Will Be Able To
Identify the emotional, practical, and historical reasons you remain in a relationship.
Distinguish present relationship value from fear of loss or sunk-cost thinking.
Recognize when responsibility for a partner has become confused with responsibility for their entire wellbeing.
Evaluate commitment without assuming that difficulty automatically means failure.
Describe what makes the relationship worth choosing in its current form.`,

// ---------====================== 2nd lesson-----------

        `The Conditions Love Cannot Replace - Affection matters, but it cannot compensate indefinitely for the absence of safety, respect, or basic trust.

One of the most important relationship distinctions is between qualities that make a relationship enjoyable and conditions that make it workable.

Attraction, humor, shared interests, sexual chemistry, and memorable experiences can make two people feel strongly connected. But those qualities do not automatically establish emotional safety, reliability, honesty, or respect.

A relationship may contain extraordinary affection during its good periods while still leaving one partner afraid to express disagreement. Someone may be generous and romantic but repeatedly dishonest. A couple may have strong sexual chemistry while being unable to discuss boundaries or resolve conflict without humiliation.

The question is not whether the good experiences are real. They may be entirely real. The question is whether they are being used to compensate for conditions that are repeatedly absent.

Tatkin's secure-functioning model emphasizes a relationship based on mutual sensitivity, fairness, trust, and respect. His work treats the couple as a cooperative system in which both partners contribute to one another's security rather than competing for individual advantage. (stanandtraceytatkin.com)

Richo's Five A's—attention, acceptance, appreciation, affection, and allowing—provide another way to examine the quality of a relationship. Affection without allowing can become possessive. Attention without acceptance can become constant evaluation. Appreciation without respect for boundaries can become conditional approval. Mature love requires these qualities to work together rather than allowing one to substitute for the others. (shambhala.com)

This section also requires a clear distinction between ordinary relationship difficulty and abuse. Disagreements about communication, household responsibilities, or time together can often be negotiated. Violence, threats, coercive control, sexual coercion, intimidation, and patterns of isolation or financial control are not simply communication problems.

The National Domestic Violence Hotline cautions against ordinary couples counseling in abusive relationships because the power imbalance can make joint sessions unsafe and may expose the abused partner to retaliation. In such circumstances, the priority is individual safety, confidential support, and appropriate specialist assistance—not asking the harmed person to negotiate more effectively. (thehotline.org)

A relationship worth staying for does not have to be free of every mistake. But it must have a foundation in which both people can express themselves, maintain basic dignity, and address problems without fear of punishment or harm.

What You Are Learning

You are learning to distinguish desirable relationship qualities from essential conditions. You will evaluate whether safety, respect, honesty, and boundaries are present in ordinary interactions—not only during affectionate periods.

You will also learn why serious safety concerns must not be treated as ordinary mutual conflict or reduced to a numerical relationship score.

Practical Application

Imagine your partner becomes defensive during arguments and occasionally raises their voice. Both of you recognize the problem, agree to pause conversations when overwhelmed, and return to discuss what happened. Over time, the behavior improves.

Now consider a different situation: a partner threatens you when you disagree, monitors your movements, restricts contact with friends, or makes you afraid of what will happen if you leave.

These situations require different responses. The first may involve a difficult but workable conflict pattern. The second may involve coercive control and requires safety-focused support rather than a standard communication exercise.

Practice — The Foundation Review

For a relationship in which it is safe to reflect, examine these areas: physical safety, emotional safety, respect, honesty, freedom to disagree, boundary respect, privacy, and reliability.

For each, record one recent example that supports your confidence and one concern that needs attention. Avoid assigning a single total score. Instead, identify which areas are strong, which need improvement, and whether any concern represents a serious safety issue.

If you are afraid of your partner's reaction to your answers, do not complete the exercise together or share it with them. Seek confidential support from a trusted person or an appropriate professional service.

After This Section, You Will Be Able To
Distinguish essential relationship conditions from desirable qualities.
Evaluate safety, respect, honesty, and boundaries through observable behavior.
Recognize when affection or chemistry is being used to overlook serious concerns.
Distinguish ordinary conflict from patterns that may involve coercion or abuse.
Identify when safety-focused support is more appropriate than couples-based exercises..`,

//__________________3rd lesson____________________

        `The Work Must Belong to Both of You -A relationship becomes difficult to sustain when one person is responsible for keeping it emotionally alive.

Every relationship experiences periods of imbalance. One partner may be ill, grieving, unemployed, studying for an important examination, or carrying an unusually demanding workload. During those periods, the other person may reasonably contribute more.

Healthy reciprocity does not mean that both people provide exactly the same amount of effort every day.

It means that both people's needs matter, both people recognize the other's contribution, and the relationship does not permanently depend on one person doing all the adapting.

This distinction is especially important when one partner has become the relationship's primary emotional manager. They initiate difficult conversations, suggest solutions, arrange quality time, apologize first, monitor the other's mood, and repeatedly explain why certain behavior is hurtful. The other partner may genuinely care, but their contribution remains largely passive.

Over time, the more active partner can become exhausted. The less active partner may become accustomed to the arrangement and interpret the absence of complaints as evidence that everything is fine.

Norwood's work examines the danger of becoming preoccupied with changing, rescuing, or managing a partner. The relevant lesson is not that supporting someone is unhealthy. It is that one adult cannot take responsibility for another adult's willingness to participate in the relationship. (penguinrandomhouse.com)

Tatkin's secure-functioning approach offers the complementary standard: partners work together to create mutually satisfying agreements grounded in fairness and sensitivity. The relationship is not supposed to operate as a permanent contest in which one person's needs consistently prevail. (stanandtraceytatkin.com)

This requires examining effort more carefully than simply asking, “Who does more?”

One partner may contribute through practical care, financial responsibility, or reliability. The other may contribute through emotional communication, planning, or maintaining family connections. Different contributions can be valuable. But differences in style should not become excuses for neglecting important needs.

The meaningful question is whether both people are willing to learn what the other needs and make reasonable adjustments.

What You Are Learning

You are learning to evaluate reciprocity without turning the relationship into a competition. You will distinguish temporary imbalance from chronic one-sidedness, recognize invisible emotional labor, and identify whether both partners are willing to take responsibility for improving the relationship.

You will also learn that asking for mutual effort is different from demanding identical behavior.

Practical Application

Suppose one partner works long hours and contributes most of the household income. The other manages much of the household, organizes family responsibilities, and initiates nearly all relationship conversations.

Both may be making substantial contributions. But if one partner says they feel emotionally alone, the other cannot resolve the concern simply by pointing to financial contributions. Similarly, the partner managing the household should not dismiss the other's workload as irrelevant.

A productive conversation examines the entire arrangement: what each person contributes, what each person needs, where the imbalance is becoming unsustainable, and what changes are realistically possible.

Practice — The Reciprocity Map

Each partner independently records the responsibilities they currently carry in five areas: practical life, emotional connection, conflict repair, shared planning, and support during difficulty.

Compare the maps and discuss which contributions are visible, which are often unnoticed, and which responsibilities have become concentrated in one person.

Then identify one responsibility each person is willing to take more ownership of. Make the change specific enough to observe over the following month.

If you are completing the course alone, use the exercise to clarify the pattern before discussing it with your partner. Do not assume that your interpretation is the complete picture.

After This Section, You Will Be Able To
Distinguish healthy temporary imbalance from chronic one-sidedness.
Recognize practical and emotional contributions that may be overlooked.
Evaluate whether both partners are willing to participate in relationship improvement.
Communicate concerns about reciprocity without reducing the relationship to scorekeeping.
Identify specific responsibilities that can be redistributed or shared more fairly..`,

//__________________4th lesson____________________

        `Love the Person, Evaluate the Partnership - You can love someone deeply and still discover that your lives cannot be built in the same direction.

Compatibility is often discussed as though it means having similar personalities, interests, or lifestyles. Those similarities can make a relationship enjoyable, but they do not necessarily determine whether two people can build a sustainable future.

A couple may love the same music, enjoy the same activities, and have strong chemistry while disagreeing fundamentally about marriage, children, finances, where to live, or the level of commitment they want.

Conversely, two people may have different interests and personalities while sharing enough values, respect, and willingness to negotiate that their differences become manageable.

The important distinction is between difference and incompatibility.

A difference is something two people can acknowledge and accommodate without requiring either person to violate an important need or value. An incompatibility occurs when the relationship requires a choice that one or both people cannot genuinely accept.

Attached emphasizes the importance of understanding attachment needs and recognizing whether a partner can provide the kind of availability and responsiveness a person needs. It also encourages readers to consider compatibility rather than relying solely on romantic attraction. (penguinrandomhouse.com)

Richo's emphasis on acceptance and allowing adds a difficult but important principle: loving someone does not mean possessing the authority to redesign their values or life direction. You can explain what you need, invite discussion, and negotiate. You cannot make another person's genuine preferences disappear through enough persuasion.

This becomes especially relevant when a relationship is sustained by imagined future change.

One partner says, “I don't want children.” The other assumes they will change their mind. One wants to settle near family; the other wants to live abroad. One wants monogamy; the other wants a different relationship structure. One wants marriage; the other does not.

These differences are not automatically evidence that either person is selfish or immature. But they require honest examination before the relationship becomes more deeply entangled.

A relationship worth staying for should not require one person to build their future around a promise the other has never actually made.

What You Are Learning

You are learning to distinguish compatibility from chemistry, similarity, and emotional attachment. You will identify which differences can be negotiated and which involve fundamental life choices.

You will also learn to evaluate the relationship according to the people you actually are, rather than the versions of each other you hope will eventually appear.

Practical Application

Imagine you want marriage and children within the next several years. Your partner says they are uncertain about both and do not want to make a commitment.

You may genuinely love each other. The relationship may contain affection, respect, and enjoyable companionship. But the future disagreement remains important.

A mature conversation asks what each person actually wants, whether the uncertainty is temporary or a settled preference, what decisions need to be made, and whether both people can accept the resulting arrangement.

The goal is not to win the argument. It is to discover whether a shared future exists.

Practice — The Future Compatibility Conversation

Individually write your preferred future in these areas: commitment, children or parenting, career, location, finances, family responsibilities, lifestyle, intimacy, and personal development.

For each area, distinguish essential, strongly preferred, and flexible.

If completing the exercise together, compare your answers and identify where you agree, where you differ, and where one person is relying on the assumption that the other will eventually change.

For each significant difference, ask: “What arrangement could we both genuinely accept without resentment or self-betrayal?” If no such arrangement is currently apparent, record that honestly rather than manufacturing agreement.

After This Section, You Will Be Able To
Distinguish manageable differences from fundamental incompatibilities.
Evaluate shared values and future goals beyond attraction and chemistry.
Identify when a relationship depends on an unconfirmed expectation of future change.
Discuss major life decisions without pressuring a partner to adopt your preferences.
Assess whether the future you are building is genuinely shared.`,

//__________________5th lesson____________________

        `What Happens After You Hurt Each Other? - The quality of a relationship is revealed not only by how people love when things are easy, but by what they do after something goes wrong.

No long-term relationship can guarantee that partners will never disappoint one another. People become tired, defensive, distracted, frightened, or overwhelmed. They misunderstand each other. They make mistakes. Sometimes they cause significant hurt.

The presence of conflict therefore does not automatically mean a relationship is unhealthy.

The more useful question is: What happens after the conflict?

Do both people become more capable of understanding the problem? Can each acknowledge their contribution? Does the injured partner have room to explain the impact? Does the person who caused harm take responsibility without immediately demanding forgiveness? Does anything actually change?

Tatkin's work emphasizes secure functioning, managing conflict, and creating mutually satisfying agreements. Richo similarly addresses the importance of recognizing and working through relationship patterns rather than expecting constant emotional attunement. His discussion of relationship triggers notes that misattunements are part of human relationships and that recovery from them is an important capacity. (stanandtraceytatkin.com) (shambhala.com)

A useful distinction is between resolution and repetition.

Resolution does not require that every disagreement end in perfect agreement. It means the couple has developed a workable understanding or arrangement that changes how the issue will be handled.

Repetition occurs when the same conflict returns because nothing beneath it has changed.

For example, a couple may repeatedly argue about one partner disappearing during difficult conversations. Afterward, they apologize and reconnect. But if they never establish how to request space and return to the discussion, the same pattern remains intact.

A relationship worth staying for needs more than emotional reunions. It needs evidence that the partners can learn.

Trust introduces an additional challenge. After dishonesty or betrayal, the injured person may need truthful information, clear boundaries, and sustained consistency before trust can reasonably return. An apology does not create an obligation to forgive, and forgiveness does not automatically require reconciliation.

Serious betrayal, active addiction, untreated psychiatric crises, or other complex circumstances may require qualified professional support. Tatkin's own workshops distinguish ordinary relationship education from situations that require more intensive assistance. (stanandtraceytatkin.com)

What You Are Learning

You are learning to evaluate repair capacity rather than simply counting arguments or measuring how affectionate the relationship feels afterward. You will distinguish regret from accountability, apology from behavioral change, and forgiveness from reconciliation.

You will also learn to recognize when a recurring problem needs a different approach rather than another version of the same conversation.

Practical Application

Suppose your partner repeatedly makes important decisions without consulting you. You explain that the behavior makes you feel excluded. They apologize, but the same thing happens again.

The next conversation should not focus only on whether they are sorry. It should examine why the pattern continues, what decisions genuinely require consultation, what communication is realistic, and what each person will do differently.

If your partner participates and the behavior changes, the relationship has demonstrated repair capacity.

If they repeatedly dismiss the concern, refuse discussion, or promise change without any follow-through, that is also important evidence.

Practice — The Repair Evidence Review

Choose one recurring relationship problem and document the last three times it occurred.

For each instance, record what happened, how each person responded, whether responsibility was acknowledged, what agreement followed, and what changed afterward.

Then answer: “Are we learning from this problem, or are we repeatedly recovering from it?”

If the issue is workable and both partners are willing, create one specific behavioral agreement to practice over the next month. If the issue involves serious harm or safety concerns, do not use the exercise as a substitute for appropriate professional support.

After This Section, You Will Be Able To
Distinguish ordinary conflict from repeated unresolved patterns.
Evaluate whether apologies lead to observable behavioral change.
Recognize the difference between forgiveness, reconciliation, and restored trust.
Identify when both partners are participating in repair.
Determine when a recurring problem requires additional support or a more serious relationship decision.`,

//__________________6th lesson____________________

        `Give Hope a Reality Test - A relationship deserves a fair chance—but hope becomes costly when it is never required to meet evidence.

One of the most difficult relationship decisions is determining how long to keep trying.

Leaving immediately after a difficult period can sometimes mean abandoning a relationship that could have improved. Staying indefinitely can mean spending years waiting for changes that never become real.

There is no universal number of months, conversations, or chances that can answer this question for every couple. The circumstances matter: the nature of the problem, the length of the relationship, shared responsibilities, the willingness of both partners, and whether meaningful change is actually occurring.

The important principle is that hope should be connected to evidence.

Norwood's work examines the danger of remaining invested in a partner's potential while one's own life becomes increasingly consumed by the relationship. Richo's approach emphasizes recognizing reality and maintaining boundaries rather than attempting to control another person's development. (penguinrandomhouse.com) (shambhala.com)

A fair relationship evaluation therefore asks whether the problem has been clearly identified, whether both people understand what needs to change, whether the proposed changes are realistic, and whether there is evidence of follow-through.

It also asks what the relationship is costing during the process.

A temporary period of additional effort may be reasonable. A prolonged arrangement in which one person repeatedly sacrifices their health, dignity, financial security, or essential needs while waiting for the other to change requires much more serious consideration.

This is not a demand for perfection. People may make progress unevenly. A partner who is learning to communicate differently may still become defensive occasionally. A couple rebuilding trust may experience setbacks. The question is whether the broader direction is improving and whether both people are taking responsibility for that improvement.

A bounded evaluation can help. Rather than repeatedly saying, “We'll see how things go,” the couple identifies a small number of specific changes, agrees on how they will be practiced, and chooses a reasonable time to review the results.

This is an educational decision tool, not a clinical treatment plan. It is appropriate for ordinary, non-abusive relationship difficulties where both people can participate freely. It should not be used to require someone to remain in an unsafe situation while waiting for a deadline.

What You Are Learning

You are learning to evaluate relationship potential through behavior rather than promises or emotional intensity. You will develop a way to give a workable relationship a fair opportunity to improve without making your own wellbeing indefinitely dependent on the possibility of future change.

You will also learn to distinguish a genuine setback from a repeated refusal to participate.

Practical Application

Imagine you and your partner have struggled with communication for several months. Both of you acknowledge the problem and want to improve.

Instead of making another broad promise, you agree to practice a specific conflict-pause procedure, schedule one uninterrupted relationship conversation each week, and seek qualified couples support if the same pattern continues.

After six weeks, you review what actually happened.

Did both people participate? Were conversations less destructive? Did either person take responsibility when the old pattern returned? Did the relationship become more workable?

The review does not have to produce a final decision immediately. But it should produce more information than you had before.

Practice — The 30-Day Reality Test

For a relationship in which it is safe and appropriate to do so, identify no more than two significant problems that both partners agree to address.

For each problem, write the current pattern, the desired behavior, what each person will contribute, and what evidence would indicate improvement. Choose a review date approximately one month later.

At the review, answer:

What changed in actual behavior?

What remained the same?

Did both people participate?

Was the agreement realistic?

What did the process cost each person?

What would need to happen next for continued investment to make sense?

Do not treat the exercise as a test your partner must pass to earn affection. It is a shared evaluation of whether the relationship can become healthier.

After This Section, You Will Be Able To
Distinguish evidence-based hope from indefinite waiting.
Translate vague promises into observable relationship changes.
Create a reasonable review process for ordinary relationship difficulties.
Evaluate whether setbacks are occurring within genuine progress or repeated inaction.
Make decisions about continued investment without relying solely on fear, history, or potential.`,

//__________________7th lesson____________________

        `Choose the Relationship You Can Actually Build - The final decision is not whether the relationship is perfect. It is whether both people can continue choosing it with honesty, dignity, and a workable future.

By this stage, the question “Is this relationship worth staying for?” should have become more precise.

You have examined why you stay, whether essential conditions are present, whether effort is mutual, whether your futures are compatible, whether conflict can be repaired, and whether hope is supported by behavior.

The purpose of that examination is not to produce a universal verdict. It is to help you make a decision that reflects the actual relationship rather than only its best memories, worst moments, or imagined future.

For some couples, the answer will be to continue.

They may discover that their difficulties are real but workable, that both people are willing to take responsibility, and that the relationship contains enough respect, compatibility, and mutual care to justify further investment.

For others, the answer may be to seek appropriate professional support before deciding. A complex trust rupture, entrenched conflict pattern, or significant life transition may require more assistance than a self-guided course can provide.

For others, the answer may be to separate.

That does not necessarily mean the relationship was meaningless, that the love was false, or that one person failed to try hard enough. It may mean that the relationship no longer provides a workable foundation for both people's wellbeing and future.
The resulting standard is demanding but realistic:

A relationship worth staying for is one in which both people can continue building a life that is emotionally safe, mutually chosen, compatible enough to sustain, and capable of adapting when difficulties arise.

It is not a relationship without sacrifice. It is one in which sacrifice is recognized and does not consistently erase one person's needs.

It is not a relationship without conflict. It is one in which conflict can lead to understanding and repair.

It is not a relationship in which both people are always equally strong. It is one in which care can move in both directions over time.

And it is not a relationship guaranteed to last forever. It is one that both people can continue choosing for reasons grounded in the life they are actually creating.

What You Are Learning

You are integrating the course into a practical relationship decision framework. You will learn to identify what is working, what needs improvement, what cannot reasonably be accepted, and what evidence would justify continued investment.

You will also learn to make room for different legitimate outcomes: continuing, seeking support, taking an appropriate period of reflection, or ending a relationship that is no longer workable.

Practical Application

Imagine you and your partner have completed the course and agree that your relationship has meaningful strengths: affection, shared values, respect, and a genuine desire to remain together. You also recognize that conflict has become difficult and that both of you need to change how you respond when overwhelmed.

Your decision may be to continue with a clear repair plan and appropriate support.

Another couple may discover that they love each other but have incompatible goals concerning children or commitment. Their decision may be to separate respectfully rather than ask one person to surrender a fundamental life choice.

A third person may recognize that their partner repeatedly violates boundaries and refuses responsibility. Their decision may be to stop investing in promises that have not become behavior.

The same course can support different outcomes because the goal is not to preserve every relationship. It is to help people evaluate relationships more accurately.

Practice — Your Relationship Decision Document

Create a private document containing five parts.

What is genuinely valuable about this relationship today?

What remains difficult, and what evidence do I have that it can improve?

Which needs, values, or boundaries cannot reasonably be sacrificed?

What am I willing to contribute, and what must my partner freely choose to contribute?

What decision best reflects the relationship as it actually exists?

If you choose to continue, identify the specific commitments and review practices that will support the relationship. If you choose to seek professional help, identify the type of support needed and whether both people are willing to participate. If you choose to separate, consider the practical responsibilities, support network, and boundaries necessary to do so respectfully and safely.

Do not use this document to pressure your partner into a particular decision. Its purpose is to clarify your own judgment and support honest communication.

After This Section, You Will Be Able To
Evaluate a relationship through safety, reciprocity, compatibility, repair, and demonstrated commitment.
Distinguish a workable relationship from one sustained primarily by fear or unfulfilled potential.
Identify when continued investment, professional support, or separation is the most appropriate next step.
Communicate a relationship decision without relying on blame, coercion, or false promises.
Define the behaviors and shared commitments necessary to sustain a relationship worth continuing. `,

//__________________8th lesson____________________
`Wrap-Up and Your Transformation

After completing The Relationship Worth Staying For, you should no longer evaluate a relationship only by how much you love your partner, how long you have been together, or how painful leaving might be.

You should be capable of examining the relationship as it actually functions. You can identify whether essential conditions are present, recognize when effort has become one-sided, distinguish manageable differences from fundamental incompatibilities, evaluate whether apologies lead to meaningful repair, and determine whether hope is supported by sustained behavior.

You should also be able to recognize the difference between a difficult season that deserves patience and a repeated pattern that is eroding your wellbeing. You can give a workable relationship a fair opportunity to improve without making endurance the measure of your love.

If you choose to stay, the decision should be grounded in more than attachment or history. It should be grounded in the relationship both people are willing and able to build.

If you choose to leave, you should be able to understand that ending a relationship does not automatically invalidate what was meaningful about it.

The ultimate goal is to develop the judgment to recognize a relationship in which love is supported by safety, commitment is supported by mutual effort, and the future is something both people can genuinely choose together.`,
      ]
    }
  ]
},
'the-moment-the-chase-ends': {
  outcomes: [
    'Recognise your personal needs, values and non-negotiables.',
    'Communicate boundaries with clarity and respect.',
    'Build a relationship without abandoning your identity.'
  ],
  sections: [
    {
      title: 'Lessons',
      lessons: [
       ` Introduction -  After This Section, You Will Be Able To

Evaluate future partners for emotional availability and compatibility rather than chemistry alone.

Communicate reassurance, boundaries, needs, and requests directly.

Build relationship agreements based on reciprocity and fairness.

Recognize pursuit-withdrawal patterns early enough to interrupt them.

Apply secure-functioning principles and the Five A's to everyday relationship behavior.

Create closeness without requiring either partner to chase, control, or disappear.



Your Transformation

By the end of When She Stops Chasing You, the central question should no longer be:

"How do I make her chase me again?"

You should be able to examine what actually happened between you, recognize attachment activation without obeying it, identify your role in a pursuit-distance cycle, communicate responsibility without manipulation, determine whether reconciliation has genuine foundations, tolerate separation without immediately replacing the relationship, and choose future partners more intelligently.`,
       
`The Moment the Chase Ends - Her silence is information—but it is not an explanation.
When someone repeatedly pursues connection, the pursued partner can gradually begin treating that pursuit as part of the relationship's background. She texts first. She brings up problems. She asks whether everything is okay. She tries to reconnect after arguments. Because she repeatedly restores contact, you may never have to discover what the relationship feels like when she stops doing that work.

Then she stops.

One mistake is immediately concluding, She doesn't care anymore. Another is assuming, She wants me to chase her now. Both interpretations may occasionally be true, but neither should be your starting assumption.

Withdrawal can mean many things. Someone may be emotionally exhausted. She may have concluded that repeated conversations are producing no change. She may be protecting herself. Her feelings may genuinely have changed. She may be reconsidering the relationship. She may already have decided to leave.

The important distinction is between observable behavior and the meaning you assign to it.

Attachment dynamics make this harder. A person who previously felt comfortable because the other partner consistently sought closeness can suddenly experience intense attachment activation when that attention disappears. The same person who previously wanted more space may suddenly become preoccupied with getting closeness back. Attached describes secure, anxious, and avoidant relationship tendencies and shows how proximity and distance can activate very different responses.

This means you must resist making permanent decisions from the first emotional shock.

Her withdrawal is a moment to become curious about reality.

Not:

How do I make her want me again?

But:

What was actually happening between us before she stopped trying?

That question begins the course.

What You Are Learning

You are learning to separate three things that often become psychologically fused after relationship withdrawal:

what happened, what you fear it means, and what you actually know.

You will also begin distinguishing ordinary temporary distance from a larger pattern of disengagement.

Most importantly, you will stop treating another person's pursuit as automatic proof that the relationship is healthy.

Practical Application

Imagine she previously complained that you rarely initiated plans.

Eventually she stops complaining.

At first you feel relieved.

Three weeks later she stops asking to meet as often. Her messages become functional rather than affectionate. Suddenly you become anxious and begin sending more messages than you ever did before.

The insecure interpretation is:

"She's playing games."

A more disciplined interpretation is:

"Something in our relationship has changed. Before reacting, I need to understand the sequence that led here."

The same discipline applies after a breakup. Checking whether she viewed your story, analyzing her online status, sending indirect posts, or repeatedly asking mutual friends about her may provide momentary relief while keeping you psychologically trapped inside uncertainty.

Practice — The Facts/Story Audit

Take one situation involving her recent withdrawal and divide a page into two columns.

Facts

Write only observable information.

For example:

She has not initiated a conversation for six days.
She declined two invitations.
She said she needs space.
She removed our shared photos.

Then write:

My interpretation

She never loved me.
She's testing me.
There must be another man.
If I don't act immediately, I will lose her forever.

Now circle anything in the second column that you cannot actually verify.

The purpose is not emotional suppression. It is learning not to confuse fear with evidence.

After This Section, You Will Be Able To
Separate observable relationship changes from fear-driven interpretations.
Recognize when the loss of pursuit activates your own attachment system.
Assess withdrawal without immediately chasing, blaming, or catastrophizing.
Identify the relationship conditions that existed before her behavior changed.
.`,

        `The Relationship You Were Both Creating -Stop asking who started the cycle and learn how the cycle kept itself alive.

Relationships often become organized around repeated roles.

One person seeks closeness.

The other becomes uncomfortable and creates distance.

More distance produces more pursuit.

More pursuit produces more distance.

Eventually both people can sincerely believe the other is causing the problem.

This is one of the most useful ideas for understanding why "she stopped chasing" is rarely the complete story.

Attached describes the particularly difficult interaction that can emerge between anxious and avoidant attachment tendencies: one person's attempts to restore proximity can intensify the other's desire for distance.

Tatkin approaches the same territory from another direction. Instead of asking only about individual attachment styles, his secure-functioning model asks what the two-person system is creating. His work emphasizes mutual safety, fairness, sensitivity, agreements, understanding one's partner, and repairing ruptures quickly.

This changes the question from:

Who was the needy one?

or

Who was emotionally unavailable?

to:

What happened between us whenever one person became frightened?

Perhaps she pursued harder when she felt uncertain.

Perhaps you withdrew because her requests felt like criticism.

Your withdrawal increased her uncertainty.

Her increased pursuit felt even more demanding.

You withdrew further.

Neither person necessarily designed the cycle consciously.

But eventually the cycle becomes stronger than either individual's intentions.

Norwood adds another useful perspective from the pursuer's side. Her work describes situations where attention becomes increasingly focused on monitoring, rescuing, fixing, or changing a partner while the pursuer's own life contracts. Her recovery model explicitly shifts attention away from controlling another person and back toward one's own life.

So when a woman finally stops pursuing, one possibility is that she has begun withdrawing from a role she could no longer sustain.

That does not automatically make her right.

It does not automatically make you wrong.

It means you need to understand the system before deciding what to do about the relationship.

What You Are Learning

You are developing the ability to analyze a relationship as a feedback loop.

Instead of describing yourself as "the distant one" and her as "the emotional one," you learn to identify:

trigger → reaction → partner reaction → escalation → temporary resolution → repetition.

That gives you something far more useful than blame: a map.

Practical Application

Suppose she says:

"You never tell me what you're feeling."

You experience it as criticism and become quiet.

She interprets silence as evidence that you do not care.

She sends longer messages.

You feel overwhelmed and delay responding.

She becomes angrier.

Eventually you apologize, things improve briefly, and neither of you changes the structure underneath the argument.

Months later, she stops asking you to open up.

You interpret that as peace.

She experiences it as resignation.

The absence of conflict can therefore sometimes mean the problem was solved.

But sometimes it means one person stopped expecting repair.

Those are very different situations.

Practice — Map Your Relationship Loop

Choose three recurring conflicts.

For each one write:

1. Trigger: What happened first?

2. Her move: What did she do?

3. My interpretation: What meaning did I give it?

4. My move: What did I do next?

5. Her interpretation: What might my behavior have communicated?

6. Escalation: How did the situation become worse?

7. Repair: Who usually restored connection?

Then ask:

What happened when she stopped performing Step 7?

You may discover why her withdrawal feels so dramatic now.

After This Section, You Will Be Able To
Map the pursuit-distance cycle without reducing either partner to a stereotype.
Identify how your behavior may unintentionally intensify your partner's behavior.
Distinguish conflict resolution from emotional resignation.
Recognize when one partner has been carrying disproportionate responsibility for reconnecting.
Analyze relationship patterns without turning attachment labels into accusations.`,
// -------------------------
        `What Her Distance Wakes Up in You -Sometimes you do not realize how attached you are until access to the person disappears.

A breakup—or even sudden emotional distance—can transform a person's psychology remarkably quickly.

Someone you occasionally took for granted can become almost impossible to stop thinking about.

You replay conversations.

You remember her best qualities more vividly than her difficult ones.

Your phone becomes emotionally charged.

A notification creates hope.

Silence feels personal.

This does not necessarily mean you suddenly discovered she is your soulmate.

It can mean your attachment system has become activated.

Attached emphasizes that attachment needs are not signs of weakness. Human beings seek connection, reassurance, availability, and responsiveness from important partners. The problem is not needing connection. The problem is what you do when the need becomes activated.

Tatkin adds the nervous-system dimension: partners become important sources of safety and threat regulation, and conflict can quickly move people toward defensive rather than cooperative states. His relationship work therefore emphasizes slowing distress, understanding arousal, and repairing quickly.

This matters enormously after she withdraws.

Your first impulse may be action:

send another message,

drive to see her,

write a long apology,

download dating apps,

sleep with somebody,

post something to make her jealous,

delete everything,

block her,

unblock her,

promise marriage,

promise therapy,

promise that everything will change.

Action temporarily reduces uncertainty.

But not all action creates wisdom.

A more mature skill is learning to tolerate enough emotional activation that you can ask:

What exactly am I afraid of right now?

Losing her?

Being alone?

Being rejected?

Knowing she may eventually love somebody else?

Feeling that you failed?

Having to face parts of yourself the relationship allowed you to avoid?

These are different wounds.

They require different responses.

What You Are Learning

You are learning emotional differentiation.

Instead of compressing everything into:

"I miss her,"

you become able to distinguish grief, abandonment fear, wounded pride, loneliness, guilt, sexual longing, regret, jealousy, and genuine love.

That distinction gives you considerably better control over what happens next.

Practical Application

She says she does not want contact for a month.

At 11:30 p.m. you see that she is online.

Your body reacts before your reasoning does.

You imagine who she might be talking to.

The impulse appears:

"Just send one message."

This is exactly where relationship maturity becomes behavioral rather than theoretical.

Respecting her boundary does not mean you feel calm.

It means your discomfort does not automatically overrule another person's stated boundary.

Similarly, if she has not requested no contact, restraint can still be useful. Repeated communication motivated primarily by anxiety can turn a request for connection into pressure.

Practice — The Attachment Activation Map

For seven days, whenever you feel a strong urge to contact, monitor, check, retaliate, or escape, record:

Cue: What happened?

Body: What did you physically notice?

Emotion: What am I actually feeling?

Story: What am I telling myself?

Impulse: What do I want to do immediately?

Need: What am I actually seeking—connection, reassurance, certainty, dignity, closure?

Secure response: What action would I respect tomorrow?

Do not aim for emotional perfection.

Aim for a gap between impulse and behavior.

That gap is one of the foundations of secure relating.

After This Section, You Will Be Able To
Identify attachment activation before acting on it.
Separate genuine relational needs from panic-driven impulses.
Recognize jealousy, loneliness, grief, regret, and rejection as distinct emotional experiences.
Regulate yourself enough to respect boundaries during separation.
Choose behavior according to values rather than momentary anxiety.,`,

// -------------------------------------
        `'Stop Trying to Win Her Back - If reconciliation requires pressure, it is not reconciliation yet.

After someone withdraws, the natural temptation is to focus entirely on the outcome:

How do I get her back?

That question can produce impressive-looking behavior.

Long messages.

Flowers.

Promises.

Sudden emotional openness.

Declarations about your future.

Sometimes these gestures are sincere.

But sincerity alone does not make them evidence of change.

The more useful question is:

What would make me safer and more capable in a relationship even if she never returns?

That distinction is critical because transformation performed exclusively to control somebody else's decision is still a form of control.

Richo's model of mature love offers five practices: attention, acceptance, appreciation, affection, and allowing. The last one is particularly important here. Allowing means recognizing the reality of another person rather than trying to force reality into the outcome you prefer.

If she says:

"I don't want this relationship anymore,"

mature love may include the painful capacity to hear what she is actually saying.

If she says:

"I don't know,"

maturity may require allowing uncertainty instead of demanding a decision that calms your anxiety.

If she says:

"I'm willing to talk, but I need to see real change,"

then the task becomes behavioral.

Tatkin's secure-functioning approach points toward mutual fairness, safety, sensitivity, explicit agreements, learning one's partner, and effective repair.

Change therefore cannot merely sound like:

"I'll communicate better."

It needs to become observable.

For example:

"When conflict happens, I will not disappear for two days. I will tell you that I need thirty minutes to regulate and confirm when I'll return to the conversation."

That is behavior.

What You Are Learning

You are learning the difference between:

persuasion and repair,

regret and responsibility,

promising and changing,

wanting her and being capable of relating well to her.

You are also learning that an apology should not contain a hidden invoice requiring forgiveness, contact, or reconciliation in return.

Practical Application

If contact is appropriate and welcomed, a mature repair conversation might involve four elements:

Recognition: What happened?

Ownership: What did I contribute?

Impact: How might it have affected you?

Change: What will be different behaviorally?

Not:

"I only acted that way because you kept..."

Not:

"I've changed, so you owe me another chance."

And not:

"Nobody will ever love you like I do."

A clean repair leaves the other person free.

That freedom is part of what makes the repair trustworthy.

Practice — The No-Persuasion Repair

Write the message you desperately want to send.

Then remove:

attempts to create guilt,
dramatic promises,
accusations,
references designed to create jealousy,
demands for immediate answers,
explanations that erase responsibility,
pressure disguised as romance.

Now rewrite it around four sentences:

I recognize...

I take responsibility for...

I understand that may have affected you by...

Regardless of what you decide, I am working on...

Do not send the exercise automatically.

Its purpose is first to clarify your own thinking.

After This Section, You Will Be Able To
Distinguish genuine repair from attempts to regain control.
Take responsibility without collapsing into shame or defensiveness.
Translate vague promises into observable relationship behavior.
Communicate without using guilt, jealousy, pressure, or emotional bargaining.
Respect another person's freedom while still expressing your own feelings clearly..'`,
//------------------------------
        `Repair, Release, or Leave the Door Closed - Missing someone does not answer whether the relationship should continue.

Once the first emotional storm settles, a harder question arrives:

Should this relationship actually be rebuilt?

People frequently substitute feeling for evaluation.

"I still love her."

That matters.

But it is not enough.

You can love someone with whom you cannot build a functional partnership.

You can miss someone whose presence repeatedly destabilized your life.

You can regret your mistakes and still conclude that returning would recreate the same system.

You can also discover that two imperfect people have enough goodwill, accountability, compatibility, and willingness to build something substantially healthier.

The distinction requires evidence.

Attached encourages attention to compatibility and the ability of partners to meet attachment needs rather than relying purely on romantic chemistry.

Tatkin's secure-functioning framework asks whether the relationship can become a mutually protective, fair, collaborative two-person system rather than a contest between individual interests.

Richo adds another essential idea: mature loving includes accepting reality, maintaining boundaries, and sometimes surviving the ending of a relationship rather than forcing its continuation. His revised edition specifically addresses ending relationships as part of adult loving.

So evaluate the relationship through capacity, not longing.

Can both people acknowledge their contribution?

Can both communicate honestly?

Can boundaries be respected?

Can conflict be repaired?

Is there reciprocity?

Are core values compatible?

Does the relationship contain genuine emotional safety?

Is affection still accompanied by respect?

Most importantly:

Are both people actually choosing the relationship?

One person cannot perform mutuality alone.

What You Are Learning

You are learning relationship decision-making.

You will stop framing your options as only:

get her back versus lose her forever.

A more mature set of possibilities exists:

repair together,

separate respectfully,

create temporary distance,

remain apart,

or—in some circumstances—recognize that reopening the relationship would recreate harm.

Practical Application

Imagine she agrees to meet.

There are two possible conversations.

Conversation A spends ninety minutes discussing how much you miss each other.

Conversation B asks:

What repeatedly failed between us?
What responsibility does each person accept?
What would change behaviorally?
What boundaries would be necessary?
What would we do differently during the next conflict?
Are we both genuinely willing to try?

Conversation A may feel more romantic.

Conversation B tells you whether reconciliation has a foundation.

If the relationship includes coercion, intimidation, violence, serious untreated addiction, or other safety concerns, the appropriate priority is not a couples exercise but safety and suitable professional support. Tatkin's own couples-workshop materials make similar exclusions for relationships in active crisis or involving intimate-partner violence.

Practice — The Relationship Viability Scorecard

Score each category from 0–5:

Mutual willingness

Emotional safety

Respect

Trust

Accountability

Reciprocity

Conflict repair

Compatible future

Boundary respect

Observable change

Then answer:

If nothing changed except that we missed each other, would this relationship work six months from now?

That question often reveals more than:

"Do we still have feelings?"

After This Section, You Will Be Able To
Evaluate reconciliation using evidence rather than loneliness.
Distinguish chemistry and attachment from relationship compatibility.
Identify whether repair is genuinely mutual.
Recognize when releasing a relationship may be healthier than restarting it.
Define the concrete conditions required before considering reconciliation.',`,
//===================================
        `Learn to Be Alone Without Becoming Closed - The goal after heartbreak is not to stop needing love. It is to stop needing a relationship to escape yourself.

After a breakup there is often an empty space that the relationship previously occupied.

Morning messages disappear.

Weekend plans disappear.

Physical affection disappears.

Shared rituals disappear.

A person who was woven through your ordinary day suddenly exists mostly inside memory.

That emptiness can create enormous pressure to fill the space quickly.

You reinstall dating apps.

You reconnect with an ex.

You pursue casual intimacy.

You search for someone who resembles her.

Or you decide that relationships are no longer worth the risk and become emotionally unavailable yourself.

Neither rebound dependence nor permanent withdrawal constitutes healing.

Richo explicitly treats relationship endings and grief as part of adult loving. The 20th-anniversary material includes surviving breakups while maintaining self-esteem and learning from relationship patterns rather than simply erasing the experience.

Norwood approaches recovery from another direction. A central part of her model is redirecting enormous amounts of attention previously spent monitoring or changing another person toward one's own life, development, interests, support system, and recovery.

Although Norwood wrote specifically about women caught in compulsive relationship patterns, the underlying principle is useful here regardless of gender:

A life that has become organized around another person's attention needs to become your life again.

This is not the shallow advice to "focus on yourself."

It means rebuilding structures that make identity larger than romantic status.

Friendships.

Family.

Physical health.

Work.

Learning.

Purpose.

Money.

Sleep.

Solitude.

Play.

Competence.

Community.

The aim is not proving that you do not need anyone.

Secure people can need others.

The aim is becoming capable of choosing love because it enriches your life rather than because loneliness makes almost any attachment feel preferable.

What You Are Learning

You are learning to distinguish solitude from abandonment.

You are also learning how unprocessed relationships can quietly determine future partner selection.

If you rush into another relationship while still seeking reassurance that you are desirable, the new person can become treatment for the old rejection.

That is unfair to both of you.

Practical Application

Imagine meeting somebody attractive two months after the breakup.

Ask yourself:

"Am I interested in discovering who this woman actually is?"

or:

"Am I mainly interested in what being wanted by her would make me feel about myself?"

Both desires can coexist.

But recognizing the second prevents you from disguising emotional anesthesia as new love.

The same applies to living alone.

A quiet Saturday evening can either become evidence that your life is empty or an opportunity to discover which parts of your identity disappeared inside the previous relationship.

Practice — The Life Re-Expansion Plan

Create five categories:

Body

Friendship

Purpose

Competence

Enjoyment

Choose one weekly action for each.

Then add a sixth:

Relationship Recovery

Once each week, answer:

What do I miss about her?
What do I miss about having someone?
What do I not miss?
What have I learned about myself?
What pattern do I refuse to reproduce?
What quality do I want to bring into my next relationship?

Run this exercise for four weeks before judging whether being alone is "working."

After This Section, You Will Be Able To
Grieve a relationship without making reunion your only path to relief.
Rebuild routines and identity outside romantic attachment.
Recognize rebound motivation before involving another person.
Distinguish missing your former partner from fearing solitude.
Approach future dating from curiosity rather than emotional emergency.'`,

`Choose and Build Secure Love Next Time - The final lesson is not how to keep someone chasing. It is how to create a relationship where chasing is unnecessary.

Suppose your former partner does not return.

Or suppose you reconcile.

Eventually the same question remains:

What kind of relationship are you now capable of building?

This is where everything in the course converges.

Attached teaches you to pay attention to attachment compatibility, availability, responsiveness, and direct communication rather than mistaking instability for chemistry.

Tatkin pushes beyond individual compatibility toward secure functioning: two people deliberately creating fairness, mutual protection, agreements, responsiveness, and rapid repair. His Wired for Love framework specifically emphasizes creating a "couple bubble," learning one's partner, seeing their perspective, maintaining connection rituals, and handling conflict in ways that preserve the relationship.

Richo's Five A's offer another layer:

Attention: I notice you.

Acceptance: I do not require you to become somebody else before I can relate to reality.

Appreciation: I actively recognize what is valuable in you.

Affection: Warmth becomes behavior rather than assumption.

Allowing: Our closeness does not cancel your autonomy.

Norwood contributes the warning that love becomes unhealthy when one person's life increasingly revolves around changing, rescuing, monitoring, or controlling another.

Put those together and a striking principle emerges:

Secure love requires both dependence and differentiation.

You should matter to each other.

You should affect each other.

You should rely on each other.

But neither person should need to disappear for the relationship to survive.

That principle changes how you choose a partner.

Instead of asking only:

"Do I feel chemistry?"

you start asking:

"Can we tell each other what we need?"

"Does she respond consistently?"

"Can I respond consistently?"

"Can disagreement occur without threatening the relationship?"

"Do we repair?"

"Can we remain individuals while building a real 'we'?"

"Is this relationship reciprocal?"

This is a considerably higher standard than merely finding someone who keeps choosing you.

What You Are Learning

You are learning to build a relationship deliberately rather than reactively.

You will know what to look for in a future partner, what to contribute yourself, how to communicate needs earlier, and how to prevent small disappointments from hardening into the pursuit-withdrawal structure that brought you into this course.

Practical Application

Imagine your future partner texts:

"You seemed distant tonight. Is something wrong?"

The old pattern might be:

"Nothing."

She asks again.

You become irritated.

She becomes anxious.

The cycle begins.

Secure communication sounds more like:

"I'm overloaded from work and quieter than usual. It isn't about us. I need an hour to decompress, and then I'd like to spend some time with you."

That response does four things.

It provides information.

It reduces unnecessary threat.

It protects your need for space.

It confirms reconnection.

Small behaviors like this prevent many relationship problems from becoming identity-level conflicts.

Practice — Your Secure Relationship Operating Agreement

Before your next serious relationship—or together if reconciliation occurs—write your answers to these ten questions:

How do I normally behave when I feel rejected?
How do I behave when I feel controlled?
What kind of reassurance genuinely helps me?
How do I ask for space without creating abandonment?
How should conflict pauses work?
What behavior counts as disrespect?
What boundaries do I need around phones, social media, ex-partners, friends, and privacy?
How do I prefer affection and appreciation to be expressed?
How will we repair after hurting each other?
What will I do if I notice myself returning to old patterns?

Do not treat the agreement as permanent law.

Review it as the relationship develops.

The goal is not eliminating conflict.

The goal is preventing uncertainty from repeatedly turning love into a chase.

After This Section, You Will Be Able To
Evaluate future partners for emotional availability and compatibility rather than chemistry alone.
Communicate reassurance, boundaries, needs, and requests directly.
Build relationship agreements based on reciprocity and fairness.
Recognize pursuit-withdrawal patterns early enough to interrupt them.
Apply secure-functioning principles and the Five A's to everyday relationship behavior.
Create closeness without requiring either partner to chase, control, or disappear.`
      ]
    }
  ]
}

  };

const courseCatalogApi = typeof window !== 'undefined' ? window.FlirtyFlipCourseCatalog : null;

// Validate the metadata/content contract before building the renderer data.
function validateCourseContentMapping(content, catalog) {
  const issues = [];
  const catalogIds = new Set(catalog.map((course) => course.id));

  for (const metadata of catalog) {
    if (metadata.comingSoon) continue;
    const course = content[metadata.id];
    if (!course) {
      issues.push(`Missing lesson content for catalog id "${metadata.id}".`);
      continue;
    }
    if (!Array.isArray(course.sections)) {
      issues.push(`Course "${metadata.id}" sections must be an array.`);
      continue;
    }
    let lessonCount = 0;
    course.sections.forEach((section, index) => {
      if (!Array.isArray(section?.lessons)) {
        issues.push(`Course "${metadata.id}" section ${index + 1} lessons must be an array.`);
        return;
      }
      lessonCount += section.lessons.length;
    });
    if (lessonCount === 0) issues.push(`Course "${metadata.id}" has no lessons.`);
  }

  Object.keys(content)
    .filter((key) => !catalogIds.has(key))
    .forEach((key) => issues.push(`Orphan lesson content key "${key}" has no catalog course.`));

  return issues;
}

const courseContentIssues = validateCourseContentMapping(courseContentData, courseCatalogApi?.courses || []);
if (courseContentIssues.length) {
  console.warn(`Course content warnings:\n${courseContentIssues.join("\n")}`);
}


// ========================================
// COURSE DISCOVERY AND PROGRESS CONFIGURATION
// Combines catalog metadata with separate lesson content; progress stays local to this device.
// Supabase integration can replace these storage helpers later without changing course renderers.
// ========================================
const courseFilterOptions = courseCatalogApi?.filters || [{ id: 'all', label: 'All' }];
const courseCategories = courseCatalogApi?.categories || [];
const coursesData = Object.fromEntries((courseCatalogApi?.courses || []).map((metadata) => [
  metadata.slug,
  {
    ...metadata,
    outcomes: courseContentData[metadata.id]?.outcomes || [],
    sections: courseContentData[metadata.id]?.sections || []
  }
]));
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
function isPasswordRecoveryRoute() {
  return typeof window !== "undefined" && normalizePathname(window.location.pathname) === ROUTE_PATHS.resetPassword;
}

function setPasswordRecoveryState(state, message) {
  passwordRecoveryState = state;
  passwordRecoveryMessage = message;

  const status = $("password-recovery-status");
  const form = $("password-recovery-form");
  const submit = $("password-recovery-submit");
  const requestNew = $("password-recovery-request-new");
  if (status) {
    status.textContent = message;
    status.dataset.state = state;
  }
  if (form) form.hidden = !["ready", "updating"].includes(state);
  if (submit) submit.disabled = state !== "ready";
  if (requestNew) requestNew.classList.toggle("hidden", state !== "error");
}

function renderPasswordRecoveryPage() {
  setPasswordRecoveryState(passwordRecoveryState, passwordRecoveryMessage);
}

function applyAuthenticatedSession(event, session) {
  if (event === "PASSWORD_RECOVERY" && passwordRecoveryCallbackPresent && session?.user) {
    passwordRecoveryAuthorized = true;
  }
  if (session?.user) {
    signedInUser = session.user;
    clearStoredGuest();
  } else if (event === "SIGNED_OUT" || !readStoredGuest()) {
    signedInUser = null;
  }

  if (isPasswordRecoveryRoute()) {
    if (session?.user && passwordRecoveryAuthorized) {
      if (!["updating", "success"].includes(passwordRecoveryState)) {
        setPasswordRecoveryState("ready", "Your recovery link is verified. Choose a new password.");
      }
      cleanAuthFragmentFromUrl();
    } else if (event === "INITIAL_SESSION" || event === "SIGNED_OUT" || session?.user) {
      setPasswordRecoveryState("error", "This recovery link is invalid or has expired. Request a new link and try again.");
      cleanAuthFragmentFromUrl();
    }
  } else if (session?.user) {
    // Signup confirmation uses Supabase JS v2's implicit callback processing on the home route.
    cleanAuthFragmentFromUrl();
  }

  updateAuthUI();
}

async function initializeAuth() {
  const guestProfile = readStoredGuest();
  if (guestProfile) signedInUser = guestProfile;

  passwordRecoveryCallbackPresent = isPasswordRecoveryRoute() && hasSensitiveAuthFragment();
  passwordRecoveryAuthorized = false;

  if (isPasswordRecoveryRoute() && hasAuthErrorFragment()) {
    passwordRecoveryCallbackPresent = false;
    setPasswordRecoveryState("error", "This recovery link is invalid or has expired. Request a new link and try again.");
    cleanAuthFragmentFromUrl();
  }

  // Try to ensure the supabase client is available, but don't block initialization for long
  const client = await ensureSupabaseClient(1200);
  if (!client) {
    if (isPasswordRecoveryRoute()) {
      setPasswordRecoveryState("error", "Password recovery is temporarily unavailable. Please try again.");
    }
    updateAuthUI();
    return;
  }

  try {
    const { data: { session }, error } = await client.auth.getSession();
    if (error) throw error;
    applyAuthenticatedSession("INITIAL_SESSION", session);

  } catch (e) {
    console.warn('initializeAuth: Supabase request failed');
    if (isPasswordRecoveryRoute()) {
      setPasswordRecoveryState("error", "This recovery link is invalid or has expired. Request a new link and try again.");
      cleanAuthFragmentFromUrl();
    }
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
  if (!email || !emailEl.checkValidity()) { setAuthStatus('Enter a valid email address and try again.', true); return; }
  if (passwordResetRequestPending) return;

  const submitButton = $('auth-reset-submit');
  passwordResetRequestPending = true;
  if (submitButton) submitButton.disabled = true;

  setAuthStatus('Sending reset link...');
  const client = await ensureSupabaseClient(3000);
  if (!client) {
    setAuthStatus('Password reset is temporarily unavailable. Please try again later.', true);
    passwordResetRequestPending = false;
    if (submitButton?.isConnected) submitButton.disabled = false;
    return;
  }

  try {
    const { passwordRecovery } = getAuthRedirectUrls();
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: passwordRecovery });
    if (error) throw error;
    setAuthStatus('If an account exists for that email, a reset link has been sent. Check your inbox.');
  } catch (e) {
    console.warn('Password reset request failed');
    setAuthStatus(getSafeAuthErrorMessage(e, "reset"), true);
  } finally {
    passwordResetRequestPending = false;
    if (submitButton?.isConnected) submitButton.disabled = false;
  }
}

async function submitPasswordRecovery(event) {
  event.preventDefault();
  if (passwordRecoveryState !== "ready") return;

  const newPassword = $("password-recovery-new")?.value || "";
  const confirmPassword = $("password-recovery-confirm")?.value || "";
  if (newPassword.length < 8) {
    setPasswordRecoveryState("ready", "Use at least 8 characters for your new password.");
    return;
  }
  if (newPassword !== confirmPassword) {
    setPasswordRecoveryState("ready", "The two passwords do not match. Please try again.");
    return;
  }

  const client = await ensureSupabaseClient(3000);
  if (!client) {
    setPasswordRecoveryState("error", "Password recovery is temporarily unavailable. Request a new link and try again.");
    return;
  }

  setPasswordRecoveryState("updating", "Updating your password securely…");
  try {
    const { data, error } = await client.auth.updateUser({ password: newPassword });
    if (error || !data?.user) throw error || new Error("password_update_failed");

    const newInput = $("password-recovery-new");
    const confirmInput = $("password-recovery-confirm");
    if (newInput) newInput.value = "";
    if (confirmInput) confirmInput.value = "";
    passwordRecoveryAuthorized = false;
    passwordRecoveryCallbackPresent = false;
    cleanAuthFragmentFromUrl();
    setPasswordRecoveryState("success", "Password updated successfully. Returning you to FlirtyFlip…");
    clearTimeout(passwordRecoveryRedirectTimer);
    passwordRecoveryRedirectTimer = setTimeout(() => navigateToRoute(ROUTE_PATHS.home, { replace: true }), 1600);
  } catch (_) {
    setPasswordRecoveryState("error", "This recovery session is invalid or has expired. Request a new link and try again.");
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
  const requestMode = authMode;

  if (!email || !password) {
    setAuthStatus("Please enter both email and password.", true);
    return;
  }
  if (!emailInput.checkValidity()) {
    setAuthStatus("Enter a valid email address and try again.", true);
    return;
  }
  if (requestMode === "signup" && password.length < 8) {
    setAuthStatus("Use at least 8 characters for your password.", true);
    return;
  }

  // Ensure client is present, try loading the CDN if necessary
  setAuthStatus('Preparing authentication…');
  console.debug('submitAuthForm: starting', { authMode });
  const client = await ensureSupabaseClient(3000);
  if (!client) {
    console.error('submitAuthForm: supabase client not available');
    setAuthStatus("Supabase is not configured yet or failed to load. Replace the demo URL and anon key in index.html with your project values and ensure the Supabase script can load.", true);
    return;
  }

  try {
    setAuthStatus("Working on it…");
    console.debug('submitAuthForm: using client', { clientAvailable: !!client });
    const request = requestMode === "signup"
      ? client.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: getAuthRedirectUrls().signupConfirmation }
      })
      : client.auth.signInWithPassword({ email, password });

    const { data, error } = await request;
    console.debug('submitAuthForm: auth request completed', { succeeded: !error, hasUser: Boolean(data?.user) });
    if (error) {
      throw error;
    }

    // With email confirmation enabled Supabase returns a user but no session. Keep the
    // app signed out until the confirmation callback establishes a real session.
    if (requestMode === "signup" && !data?.session) {
      signedInUser = null;
      clearStoredGuest();
      if (passwordInput) passwordInput.value = "";
      updateAuthUI();
      setAuthStatus("Check your email to confirm your account, then return here to log in.");
      return;
    }

    signedInUser = data?.session?.user || data?.user || null;
    if (signedInUser) {
      clearStoredGuest();
    }
    updateAuthUI();
    closeAuthModal();
    toast(requestMode === "signup" ? "Account created successfully ♡" : "Logged in successfully ♡");
  } catch (error) {
    console.warn('submitAuthForm: authentication request failed');
    setAuthStatus(getSafeAuthErrorMessage(error, requestMode), true);
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

// Bind the isolated preview once. Native button semantics provide Enter/Space support;
// a short transition lock prevents repeated taps from skipping or corrupting its local index.
function bindHeroSampleCard() {
  const card = $("hero-sample-card");
  const label = card?.querySelector(".card-label");
  const question = $("hero-sample-question");
  const footer = $("hero-sample-footer");
  const action = $("hero-sample-action");
  const count = $("hero-sample-count");
  const announcer = $("hero-sample-announcer");
  const startCta = $("hero-sample-cta");
  if (!card || !label || !question || !footer || !action || !count || !announcer || !startCta || card.dataset.bound === "true") return;

  card.dataset.bound = "true";
  let sampleIndex = 0;
  let isRevealed = false;
  let transitionLocked = false;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const revealDuration = reducedMotion ? 0 : 560;
  const changeDuration = reducedMotion ? 0 : 170;

  const renderSample = () => {
    const sample = HERO_SAMPLE_PROMPTS[sampleIndex];
    label.textContent = sample.label;
    question.textContent = `“${sample.question}”`;
    footer.textContent = sample.footer;
    count.textContent = `${sampleIndex + 1} of ${HERO_SAMPLE_PROMPTS.length}`;
    action.textContent = isRevealed ? (sampleIndex === HERO_SAMPLE_PROMPTS.length - 1 ? "Tap to replay" : "Tap for another") : "Tap to reveal";
    card.setAttribute("aria-pressed", String(isRevealed));
    card.setAttribute("aria-label", isRevealed
      ? `Sample question ${sampleIndex + 1} of ${HERO_SAMPLE_PROMPTS.length}: ${sample.question}. Activate for the next sample.`
      : `Reveal sample question ${sampleIndex + 1} of ${HERO_SAMPLE_PROMPTS.length}.`);
    startCta.hidden = !(isRevealed && sampleIndex === HERO_SAMPLE_PROMPTS.length - 1);
  };

  const unlockAfter = (delay) => {
    window.setTimeout(() => { transitionLocked = false; }, delay);
  };

  const activateSample = () => {
    if (transitionLocked) return;
    transitionLocked = true;

    if (!isRevealed) {
      isRevealed = true;
      card.classList.add("is-flipped");
      renderSample();
      announcer.textContent = `Sample question ${sampleIndex + 1}: ${HERO_SAMPLE_PROMPTS[sampleIndex].question}`;
      trackEvent('sample_card_flip', { sample_index: sampleIndex + 1 });
      unlockAfter(revealDuration);
      return;
    }

    card.classList.add("is-changing");
    window.setTimeout(() => {
      const nextIndex = (sampleIndex + 1) % HERO_SAMPLE_PROMPTS.length;
      if (nextIndex === HERO_SAMPLE_PROMPTS.length - 1) {
        trackEvent('sample_card_complete', { total_samples: HERO_SAMPLE_PROMPTS.length });
      }
      sampleIndex = nextIndex;
      renderSample();
      card.classList.remove("is-changing");
      announcer.textContent = `Sample question ${sampleIndex + 1}: ${HERO_SAMPLE_PROMPTS[sampleIndex].question}`;
      trackEvent('sample_card_flip', { sample_index: sampleIndex + 1 });
      unlockAfter(changeDuration);
    }, changeDuration);
  };

  card.addEventListener("click", activateSample);
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    activateSample();
  });

  startCta.addEventListener("click", showMoods);
  renderSample();
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
    players: { ...gamePlayers },
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
    gamePlayers = createGamePlayers(saved.players?.yourName, saved.players?.partnerName);
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
  gamePlayers = createGamePlayers();
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

const MOOD_ROUTE_SLUGS = Object.freeze({
  "sweet": "sweet",
  "romantic": "romantic",
  "truth-and-dare": "TruthandDare",
  "truthanddare": "TruthandDare",
  "flirty": "flirtyii",
  "flirtyii": "flirtyii",
  "spicy": "spicy",
  "playful": "playful",
  "fantasy": "cozy",
  "cozy": "cozy",
  "intimate": "intimate",
  "dark-desire": "DarkDesire",
  "darkdesire": "DarkDesire",
  "dreams-future": "DreamsFuture",
  "dreamsfuture": "DreamsFuture"
});

function getCanonicalMoodKey(rawSlug) {
  if (!rawSlug) return null;
  const clean = String(rawSlug).trim().toLowerCase();
  return MOOD_ROUTE_SLUGS[clean] || (moods[rawSlug] ? rawSlug : null);
}

function resolveRoute(pathname) {
  const path = normalizePathname(pathname);
  if (path.startsWith(`${ROUTE_PATHS.course}/`)) {
    return { name: "course", slug: decodeURIComponent(path.slice(ROUTE_PATHS.course.length + 1)) };
  }
  if (path.startsWith(`${ROUTE_PATHS.play}/`) && path !== ROUTE_PATHS.setup) {
    const rawMood = decodeURIComponent(path.slice(ROUTE_PATHS.play.length + 1));
    const normalizedKey = getCanonicalMoodKey(rawMood);
    if (normalizedKey && moods[normalizedKey]) {
      return { name: "play-mood", moodKey: normalizedKey };
    }
  }
  if (path.startsWith(`${ROUTE_PATHS.games}/`)) {
    const gameId = decodeURIComponent(path.slice(ROUTE_PATHS.games.length + 1));
    const miniGames = typeof window !== "undefined" ? window.FlirtyFlipCoupleGames : null;
    if (miniGames?.hasGame(gameId) || (typeof window !== "undefined" && window.FlirtyFlipCoupleGameData?.games?.some((g) => g.id === gameId))) {
      return { name: "game-detail", gameId };
    }
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
    [ROUTE_PATHS.resetPassword]: "reset-password",
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
// Also keeps social-sharing and search meta tags in sync with the active SPA page.
function updateRouteMetadata(route, url) {
  const defaultDescription = "Play fun couple games online with FlirtyFlip. Explore romantic questions, deep conversations, funny prompts, flirty challenges and date night games for two.";

  const titles = {
    home: "FLIRTYFLIP — Couple Games Online | Questions & Date Night Games.",
    play: "Choose a Mood — FLIRTYFLIP",
    setup: "Choose Your Deck — FLIRTYFLIP",
    game: "Playing — FLIRTYFLIP",
    results: "Date Night Complete — FLIRTYFLIP",
    games: "Couple Games — Play Together or Online | FLIRTYFLIP",
    courses: "Relationship Courses — FLIRTYFLIP",
    course: "Course — FLIRTYFLIP",
    online: "Play Online — Couple Games from Different Places | FLIRTYFLIP",
    "reset-password": "Reset Password — FLIRTYFLIP",
    how: "How It Works — FLIRTYFLIP",
    support: "Support & Policies — FLIRTYFLIP"
  };

  const descriptions = {
    home: defaultDescription,
    play: "Choose a mood — Sweet, Romantic, Deep, Flirty or Spicy — and start flipping cards with your partner.",
    games: "Play couple mini-games together on one device or online from different places. Tic-Tac-Toe, Love Toss, Couple Wheel and more.",
    courses: "Free relationship courses for her, for him, and for couples. Communication, romance, connection and personal growth.",
    online: "Create a private room and play couple games online from different locations. No app download required.",
    how: "Three simple steps to a better date night. Choose your vibe, flip cards together, and enjoy the conversation.",
    support: "Help, privacy policy, terms of service, refund policy, and frequently asked questions for FlirtyFlip."
  };

  if (route.name === "play-mood" && route.moodKey && moods[route.moodKey]) {
    const moodMeta = moods[route.moodKey];
    document.title = `${moodMeta.title} Deck — FLIRTYFLIP`;
  } else if (route.name === "game-detail" && route.gameId) {
    const miniGame = window.FlirtyFlipCoupleGameData?.games?.find((g) => g.id === route.gameId);
    document.title = miniGame ? `${miniGame.title} — Couple Games | FLIRTYFLIP` : "Couple Games — FLIRTYFLIP";
  } else {
    document.title = titles[route.name] || titles.home;
  }

  const currentTitle = document.title;
  let currentDesc = descriptions[route.name] || defaultDescription;
  if (route.name === "play-mood" && route.moodKey && moods[route.moodKey]) {
    currentDesc = `${moods[route.moodKey].title} relationship card deck: ${moods[route.moodKey].desc}`;
  } else if (route.name === "game-detail" && route.gameId) {
    const miniGame = window.FlirtyFlipCoupleGameData?.games?.find((g) => g.id === route.gameId);
    if (miniGame) currentDesc = `${miniGame.title} (${miniGame.subtitle}): ${miniGame.description}`;
  }
  const currentUrl = `${window.location.origin}${url.pathname}`;

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = currentUrl;

  // Update standard and social meta tags so shared links show accurate previews.
  updateMetaTag('name', 'description', currentDesc);
  updateMetaTag('property', 'og:title', currentTitle);
  updateMetaTag('property', 'og:description', currentDesc);
  updateMetaTag('property', 'og:url', currentUrl);
  updateMetaTag('name', 'twitter:title', currentTitle);
  updateMetaTag('name', 'twitter:description', currentDesc);

  // Mark the owning primary navigation item for assistive technology and visual state.
  const activeGroup = route.name === 'course' ? 'courses'
    : ['setup', 'game', 'results', 'play-mood'].includes(route.name) ? 'play'
      : route.name === 'game-detail' ? 'games'
        : route.name;
  document.querySelectorAll('[data-nav-route]').forEach((item) => {
    if (item.dataset.navRoute === activeGroup) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
}

// Safely set the content of a meta tag by attribute type (name or property).
function updateMetaTag(attr, key, value) {
  try {
    let tag = document.querySelector(`meta[${attr}="${key}"]`);
    if (tag) { tag.setAttribute('content', value); return; }
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    tag.setAttribute('content', value);
    document.head.appendChild(tag);
  } catch (_) { /* SEO helper must never break the app */ }
}

// Safe analytics event tracker. Must never break the app, never send PII.
function trackEvent(eventName, params) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }
  } catch (_) { /* analytics must never break the app */ }
}

// Send one Google Analytics page view for each distinct rendered SPA location.
// The initial gtag config disables its automatic page view to prevent double counting.
function trackRoutePageView(url) {
  const locationKey = `${url.pathname}${url.search}`;
  if (lastTrackedLocation === locationKey) return;
  lastTrackedLocation = locationKey;
  const publicUrl = new URL(url.href);
  publicUrl.hash = "";

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: locationKey,
      page_location: publicUrl.href,
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
  if (route.name === "games" && url.searchParams.get("game")) {
    const requestedMiniGame = url.searchParams.get("game");
    const miniGames = typeof window !== "undefined" ? window.FlirtyFlipCoupleGames : null;
    if (url.searchParams.get("mode") !== "together" || !miniGames?.hasGame(requestedMiniGame)) return redirectRoute(ROUTE_PATHS.games);
  }
  if (route.name === "course" && url.searchParams.has("lesson")) {
    const requestedLesson = Number(url.searchParams.get("lesson")) - 1;
    if (!Number.isInteger(requestedLesson) || !getFlatCourseLessons(coursesData[route.slug])[requestedLesson]) {
      return redirectRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(route.slug)}`);
    }
  }

  if (route.name !== "games" && route.name !== "game-detail") window.FlirtyFlipCoupleGames?.cleanup?.();

  if (route.name === "home") activatePage("home", navigationType);
  if (route.name === "play") {
    renderMoodCards("mood-list");
    activatePage("moods", navigationType);
  }
  if (route.name === "play-mood") {
    selectedMood = route.moodKey;
    renderSetupScreen();
    activatePage("setup", navigationType);
    trackEvent('deck_view', { mood: route.moodKey });
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
    if (url.searchParams.get("view") === "favorites") {
      window.FlirtyFlipCoupleGames?.cleanup?.();
      renderFavoritesCatalog();
    } else renderCoupleGamesRoute(url);
    activatePage("catalog", navigationType);
  }
  if (route.name === "game-detail") {
    const gameUrl = new URL(`${window.location.origin}/games?mode=together&game=${encodeURIComponent(route.gameId)}`);
    renderCoupleGamesRoute(gameUrl);
    activatePage("catalog", navigationType);
    trackEvent('game_view', { game_id: route.gameId });
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
  if (route.name === "reset-password") {
    renderPasswordRecoveryPage();
    activatePage("reset-password", navigationType);
  }
  if (route.name === "how") activatePage("how", navigationType);
  if (route.name === "support") {
    renderSupportContent(url.searchParams.get("section") || "index");
    activatePage("support", navigationType);
  }

  updateRouteMetadata(route, url);
  trackRoutePageView(url);
  lastRenderedLocation = hasSensitiveAuthFragment(url) || hasAuthErrorFragment(url)
    ? `${url.pathname}${url.search}`
    : `${url.pathname}${url.search}${url.hash}`;
}

// Push or replace a same-origin SPA location, then render it through the shared router.
function navigateToRoute(path, { replace = false } = {}) {
  const target = new URL(path, window.location.origin);
  if (target.origin !== window.location.origin) return;
  const destination = `${target.pathname}${target.search}${target.hash}`;
  if (!window.FlirtyFlipCoupleGames?.canNavigate?.(destination)) return;
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
  window.addEventListener("popstate", () => {
    const destination = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (!window.FlirtyFlipCoupleGames?.canNavigate?.(destination)) {
      window.history.pushState({ flirtyFlipRoute: true }, "", lastRenderedLocation || ROUTE_PATHS.games);
      return;
    }
    renderCurrentRoute("popstate");
  });
  window.history.replaceState({ flirtyFlipRoute: true }, "", `${window.location.pathname}${window.location.search}${window.location.hash}`);
  renderCurrentRoute("initial");
}

// ========================================
// PUBLIC NAVIGATION API
// Existing inline controls call these helpers; each now keeps History API state in sync.
// ========================================
function showHome() { navigateToRoute(ROUTE_PATHS.home); }
function showMoods() { trackEvent('homepage_start_playing'); navigateToRoute(ROUTE_PATHS.play); }
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
  trackEvent('homepage_play_online');
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
      ${renderPlayerNameFields("online")}
      <div class="setup-start-actions setup-start-actions--wide">
        <button class="secondary-action" type="button" onclick="skipPlayerNames('online')">Skip names</button>
        <button class="pill-btn" type="button" onclick="startOnlineGame()">START GAME →</button>
      </div>
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
function startOnlineGame(namesSkipped = false) {
  if (namesSkipped) gamePlayers = createGamePlayers();
  else updatePlayerNamesFromActiveForm();
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
  gamePlayers = createGamePlayers();
  gameSessionStatus = "setup";
  persistGameSession("setup");
  navigateToRoute(ROUTE_PATHS.setup);
}

// ========================================
// LOCAL GAME SETUP RENDERER
// Rebuilds the selected mood and card length after navigation or a page refresh.
// Edit deck option copy in cardLengthOptions rather than inside this template.
// ========================================
function renderPlayerNameFields(context = "setup") {
  return `
    <fieldset class="player-name-fields" data-player-name-context="${escapeHtml(context)}">
      <legend>Who is playing? <span>Optional</span></legend>
      <p>Add names for personal turn prompts, or skip to use neutral labels.</p>
      <div class="player-name-grid">
        <label><span>Your name or nickname</span><input type="text" maxlength="24" autocomplete="off" data-player-name="your" value="${escapeHtml(gamePlayers.yourName)}" placeholder="Alex" oninput="updatePlayerNamesFromActiveForm()"></label>
        <label><span>Partner’s name or nickname</span><input type="text" maxlength="24" autocomplete="off" data-player-name="partner" value="${escapeHtml(gamePlayers.partnerName)}" placeholder="Priya" oninput="updatePlayerNamesFromActiveForm()"></label>
      </div>
    </fieldset>`;
}

function updatePlayerNamesFromActiveForm() {
  if (typeof document === "undefined") return gamePlayers;
  const activePage = document.querySelector(".page.active") || document;
  const yourInput = activePage.querySelector('[data-player-name="your"]');
  const partnerInput = activePage.querySelector('[data-player-name="partner"]');
  if (!yourInput && !partnerInput) return gamePlayers;
  gamePlayers = createGamePlayers(yourInput?.value, partnerInput?.value);
  if (gameSessionStatus === "setup") persistGameSession("setup");
  return gamePlayers;
}

function skipPlayerNames(context = "setup") {
  gamePlayers = createGamePlayers();
  document.querySelectorAll('[data-player-name="your"], [data-player-name="partner"]').forEach((input) => { input.value = ""; });
  if (gameSessionStatus === "setup") persistGameSession("setup");
  if (context === "online") startOnlineGame(true);
  else startGame();
}

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
    ${renderPlayerNameFields("setup")}
    <div class="setup-start-actions">
      <button class="secondary-action" type="button" onclick="skipPlayerNames()">Skip names</button>
      <button class="pill-btn start-btn" type="button" onclick="startGame()">Start ${m.title} →</button>
    </div>
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
  if (gameSessionStatus === "setup") updatePlayerNamesFromActiveForm();
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
  trackEvent('deck_start', { mood: selectedMood, card_count: selectedLength });
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
function resolveCurrentGameTurn() {
  if (typeof window !== "undefined" && window.FlirtyFlipTurn?.resolveTurn) {
    return window.FlirtyFlipTurn.resolveTurn({ cards: currentCards, index: currentIndex, players: gamePlayers });
  }
  return { kind: "your", key: "your-turn", label: "Your Turn" };
}

// Updates the visible turn pill and its screen-reader announcement for the current card.
// Edit label rules in game-turn.js; keep this renderer limited to safe DOM text updates.
function updateGameTurn(card, scene) {
  const turn = resolveCurrentGameTurn();
  const pill = $("turn-pill");
  const label = $("turn-label");
  const announcer = $("game-turn-announcer");
  const previousTurnKey = pill?.dataset.turnKey || "";

  if (pill) {
    pill.dataset.turnKind = turn.kind;
    pill.dataset.turnKey = turn.key;
    pill.classList.remove("turn-pill--changed");
    if (previousTurnKey && previousTurnKey !== turn.key) {
      pill.classList.add("turn-pill--changed");
      pill.addEventListener("animationend", () => pill.classList.remove("turn-pill--changed"), { once: true });
    }
  }
  if (label) label.textContent = turn.label;
  if (announcer) announcer.textContent = `${turn.label}. Card ${currentIndex + 1}: ${card[0]} prompt.`;
  if (scene) scene.setAttribute("aria-label", `${turn.label}. ${card[1]} Activate for the next card.`);
}

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
  updateGameTurn(card, scene);

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
  const playedCount = Math.max(0, currentCards.length - skipped);
  trackEvent('deck_complete', {
    mood: selectedMood,
    card_count: currentCards.length,
    cards_played: playedCount,
    cards_skipped: skipped
  });
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
  setTimeout(() => { renderMoodCards("home-moods"); }, 10);
}

function bindAuthEvents() {
  const navLabel = $("nav-auth-label");
  const navCta = $("nav-auth-cta");
  const authClose = $("auth-close");
  const authForm = $("auth-form");
  const authTabs = document.querySelectorAll(".auth-tab");
  const navFav = $("nav-favorites");
  const authForgotBtn = $("auth-forgot");
  const passwordRecoveryForm = $("password-recovery-form");
  const requestNewRecovery = $("password-recovery-request-new");
  
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

  if (passwordRecoveryForm) {
    passwordRecoveryForm.addEventListener("submit", submitPasswordRecovery);
  }

  if (requestNewRecovery) {
    requestNewRecovery.addEventListener("click", () => showResetPassword());
  }
}

if (typeof document !== 'undefined') {
  renderCourseNavigation();
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
// PLAYABLE COUPLE GAMES ROUTE
// The shared router delegates /games modes to couple-games.js while legacy question decks stay isolated.
// Edit catalog/game presentation in couple-games.js and its scoped stylesheet, not in the route table.
// ========================================
function renderCoupleGamesRoute(url) {
  const root = $("catalog-content");
  const mode = url.searchParams.get("mode") || "";
  const gameId = url.searchParams.get("game") || "";
  const isActiveGame = mode === "together" && Boolean(gameId);
  const shell = isActiveGame
    ? { eyebrow: "COUPLE GAME", title: "Play Together", subtitle: "", backRoute: `${ROUTE_PATHS.games}?mode=together`, hideHeader: true, view: "couple-game-active" }
    : mode === "together"
      ? { eyebrow: "PLAY TOGETHER", title: "Eight games. One shared screen.", subtitle: "Add optional nicknames, then choose a quick game for two.", backRoute: ROUTE_PATHS.games, view: "couple-games" }
      : mode === "online"
        ? { eyebrow: "PLAY ONLINE", title: "Private rooms for two devices.", subtitle: "Online play stays locked until its dedicated secure service passes verification.", backRoute: ROUTE_PATHS.games, view: "couple-games" }
        : { eyebrow: "GAMES", title: "Choose how you want to play.", subtitle: "Play eight mini-games together now or check secure online-room availability.", backRoute: ROUTE_PATHS.home, hideHeader: true, view: "couple-games" };

  configureCatalogShell(shell);
  if (!root || !window.FlirtyFlipCoupleGames) {
    if (root) root.innerHTML = `<div class="empty-state">Games could not load. Refresh the page and try again.</div>`;
    return;
  }
  window.FlirtyFlipCoupleGames.render(root, { url, navigate: navigateToRoute });
}

// ========================================
// LEGACY QUESTION-DECK DISCOVERY COMPONENTS
// Kept for the original question-card experience and Favorites; the new /games catalog renders above.
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
  gamePlayers = createGamePlayers();
  gameSessionStatus = "setup";
  persistGameSession("setup");
  navigateToRoute(ROUTE_PATHS.setup);
}

// ========================================
// COURSE CATALOG COMPONENTS
// Cards use centralized course data and show real local progress only when it exists.
// Edit display metadata and category labels in course-catalog.js, not in these renderers.
// ========================================
function renderCourseNavigation() {
  const categoryMenu = $('course-category-menu');
  const featuredMenu = $('course-featured-menu');

  if (categoryMenu) {
    categoryMenu.innerHTML = courseCategories.map(({ id, label }) => {
      const route = `${ROUTE_PATHS.courses}?filter=${encodeURIComponent(id)}`;
      return `<li><a href="${route}" data-route="${route}">${escapeHtml(label)}</a></li>`;
    }).join('');
  }

  if (featuredMenu) {
    featuredMenu.innerHTML = (courseCatalogApi?.getFeaturedCourses?.() || []).map((course) => {
      const route = `${ROUTE_PATHS.course}/${encodeURIComponent(course.slug)}`;
      return `<li><a href="${route}" data-route="${route}">${escapeHtml(course.navigationLabel || course.title)}</a></li>`;
    }).join('');
  }
}

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
  const progress = getCourseProgress(course.slug);
  const route = `${ROUTE_PATHS.course}/${encodeURIComponent(course.slug)}`;
  const categoryLabel = courseCatalogApi?.getCategory?.(course.category)?.label || 'Course';
  const entitlementBadge = '<span class="course-entitlement-badge">Free</span>';
  const courseAction = course.comingSoon
    ? '<span class="course-card__cta" aria-label="Coming soon">Coming soon <span aria-hidden="true">♡</span></span>'
    : `<a class="course-card__cta" href="${route}" data-route="${route}">${progress ? 'Continue course' : 'View course'} <span aria-hidden="true">→</span></a>`;
  return `
    <article class="course-card">
      <div class="course-card__top">
        <div class="course-card__badges">
          <span class="course-audience">${escapeHtml(categoryLabel)}</span>
          ${entitlementBadge}
        </div>
        <span class="course-monogram" aria-hidden="true">${escapeHtml(course.title.charAt(0))}</span>
      </div>
      <div class="course-card__body">
        <h3>${escapeHtml(course.title)}</h3>
        <p>${escapeHtml(course.summary || course.subtitle || '')}</p>
        <div class="metadata-row" aria-label="Course details">
          <span>${lessons.length} lessons</span>${course.time ? `<span>${escapeHtml(course.time)}</span>` : ''}
        </div>
        ${renderCourseProgress(course.slug, true)}
      </div>
      ${courseAction}
    </article>
  `;
}

function renderCoursesCatalog(filterId = 'all') {
  const selectedFilter = courseFilterOptions.some(({ id }) => id === filterId) ? filterId : 'all';
  const courses = courseCatalogApi?.getVisibleCourses?.(selectedFilter)
    .map((course) => coursesData[course.slug])
    .filter(Boolean) || [];
  const courseGroups = courseCategories
    .map((category) => ({
      ...category,
      courses: courses.filter((course) => course.category === category.id)
    }))
    .filter(({ courses: categoryCourses }) => categoryCourses.length > 0);

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
    ${courseGroups.length ? courseGroups.map((group) => `
      <section class="course-category-section" aria-labelledby="course-category-${escapeHtml(group.id)}">
        <div class="catalog-section-heading">
          <div><div class="eyebrow">LEARNING PATHS</div><h2 id="course-category-${escapeHtml(group.id)}">${escapeHtml(group.label)}</h2></div>
          <p>${group.courses.length} ${group.courses.length === 1 ? 'course' : 'courses'}</p>
        </div>
        <div class="course-grid">${group.courses.map(renderCourseCard).join('')}</div>
      </section>
    `).join('') : '<div class="empty-state"><h3>No courses in this filter yet.</h3><p>Try another topic to keep learning.</p></div>'}
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
  const megaItemClosers = new WeakMap();
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');
  const desktopDropdownQuery = window.matchMedia('(min-width: 900px)');
  const desktopHoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  const desktopDropdownCloseDelay = 150;

  // Close one dropdown and keep its ARIA state synchronized with the visual class.
  function closeMegaItem(item) {
    const button = item.querySelector('.nav-link');
    const menu = item.querySelector('.mega-menu');
    if (button) button.setAttribute('aria-expanded', 'false');
    if (menu) menu.classList.remove('is-open');
  }

  function closeAllMegaItems(except = null) {
    megaItems.forEach((item) => {
      if (item === except) return;
      const close = megaItemClosers.get(item);
      if (close) close(); else closeMegaItem(item);
    });
  }

  // Desktop dropdowns support hover, click, keyboard focus and Escape without duplicate toggles.
  megaItems.forEach(item => {
    const button = item.querySelector('.nav-link');
    const menu = item.querySelector('.mega-menu');
    let pinnedByClick = false;
    let closeTimer = 0;
    menu.querySelectorAll('a').forEach((link) => link.setAttribute('role', 'menuitem'));

    function cancelScheduledClose() {
      window.clearTimeout(closeTimer);
      closeTimer = 0;
    }

    function open() {
      cancelScheduledClose();
      closeAllMegaItems(item);
      button.setAttribute('aria-expanded', 'true');
      menu.classList.add('is-open');
    }

    function close() {
      cancelScheduledClose();
      pinnedByClick = false;
      closeMegaItem(item);
    }
    megaItemClosers.set(item, close);

    function schedulePointerClose() {
      cancelScheduledClose();
      closeTimer = window.setTimeout(() => {
        closeTimer = 0;
        if (pinnedByClick || item.matches(':hover') || item.matches(':focus-within')) return;
        close();
      }, desktopDropdownCloseDelay);
    }

    item.addEventListener('mouseenter', () => {
      if (!desktopDropdownQuery.matches || !desktopHoverQuery.matches) return;
      cancelScheduledClose();
      open();
    });
    item.addEventListener('mouseleave', () => {
      if (!desktopDropdownQuery.matches || !desktopHoverQuery.matches || pinnedByClick) return;
      schedulePointerClose();
    });
    menu.addEventListener('mouseenter', cancelScheduledClose);
    menu.addEventListener('mouseleave', () => {
      if (!desktopDropdownQuery.matches || !desktopHoverQuery.matches || pinnedByClick) return;
      schedulePointerClose();
    });

    button.addEventListener('click', (event) => {
      event.preventDefault();
      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (expanded && pinnedByClick) return close();
      pinnedByClick = true;
      open();
    });

    // Handle keyboard activation directly so hover state cannot cancel the native button click.
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      pinnedByClick = false;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      if (expanded) close(); else open();
    });

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        close();
        button.focus();
      }
    });

    item.addEventListener('focusin', cancelScheduledClose);
    item.addEventListener('focusout', () => {
      requestAnimationFrame(() => {
        if (!item.matches(':focus-within')) close();
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
  bindHeroSampleCard();
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
      const courseId = action.dataset.course;
      saveCourseProgress(courseId, Number(action.dataset.current), { complete: true });
      const completedSessionKey = `flirtyflip_completed_${courseId}`;
      if (typeof sessionStorage !== "undefined" && !sessionStorage.getItem(completedSessionKey)) {
        try {
          sessionStorage.setItem(completedSessionKey, "1");
        } catch (_) {}
        trackEvent('course_complete', { course_id: courseId });
      }
      toast("Course complete ♡");
      navigateToRoute(`${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}`);
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
  const categoryLabel = courseCatalogApi?.getCategory?.(c.category)?.label || '';
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
  trackEvent('course_open', { course_id: courseId });

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

  const progressPercent = getCourseProgressPercent(courseId);
  const isCompleted = progressPercent === 100;
  const completionBanner = isCompleted ? `
    <div class="course-completion-banner" role="status">
      <span class="course-completion-icon" aria-hidden="true">🏆</span>
      <div>
        <strong>Course Completed!</strong>
        <p>You’ve finished all ${lessons.length} lessons in this guide. Revisit any lesson below at your own pace.</p>
      </div>
    </div>
  ` : '';

  content.innerHTML = `
    <article class="premium-course">
      <header class="course-detail-hero">
        <div class="course-detail-hero__mark" aria-hidden="true"><span>${escapeHtml(c.title.charAt(0))}</span><small>FLIRTYFLIP COURSE</small></div>
        <div class="course-detail-hero__copy">
          <div class="course-detail-hero__badges">
            ${categoryLabel ? `<span class="course-audience">${escapeHtml(categoryLabel)}</span>` : ''}
            <span class="course-entitlement-badge">Free</span>
          </div>
          <h1>${escapeHtml(c.title)}</h1>
          <p class="course-hook">${escapeHtml(c.subtitle || c.summary || '')}</p>
          ${completionBanner}
          <div class="metadata-row" aria-label="Course details"><span>${lessons.length} lessons</span>${c.time ? `<span>${escapeHtml(c.time)}</span>` : ''}</div>
          ${renderCourseProgress(courseId)}
          <button class="pill-btn course-primary" type="button" data-action="open-course-lesson" data-course="${escapeHtml(courseId)}" data-lesson="${continueLesson}">${isCompleted ? 'Review course' : progress ? 'Continue course' : 'Start course'} →</button>
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
  trackEvent('course_lesson_start', { course_id: courseId, lesson_index: lessonIndex + 1 });

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
        <div class="reader-takeaway-card" role="region" aria-label="Key Takeaway">
          <div class="reader-takeaway-header">
            <span class="reader-takeaway-icon" aria-hidden="true">💡</span>
            <strong>Key Reflection</strong>
          </div>
          <p>Pause here together. Take 60 seconds to discuss how this insight applies to your current dynamic, or reflect on one small habit you want to practice together this week.</p>
        </div>
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
