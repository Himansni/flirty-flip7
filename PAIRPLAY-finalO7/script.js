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
    "outcomes": [
      "A practical framework for understanding yourself, communicating with depth, creating genuine connection, and building healthier intimacy.",
      "Express needs clearly and without accusation.",
      "Handle difficult conversations with more steadiness."
    ],
    "sections": [
      {
        "title": "Lessons",
        "lessons": [
          {
            "title": "Introduction",
            "subtitle": "After This Section, You Will Be Able To",
            "sourceText": " Introduction -  After This Section, You Will Be Able To\n\nEvaluate future partners for emotional availability and compatibility rather than chemistry alone.\n\nCommunicate reassurance, boundaries, needs, and requests directly.\n\nBuild relationship agreements based on reciprocity and fairness.\n\nRecognize pursuit-withdrawal patterns early enough to interrupt them.\n\nApply secure-functioning principles and the Five A's to everyday relationship behavior.\n\nCreate closeness without requiring either partner to chase, control, or disappear.\n\nSource foundation: all four books.\n\nYour Transformation\nIntroduction -  After This Section, You Will Be Able To\n\nEvaluate future partners for emotional availability and compatibility rather than chemistry alone.\n\nCommunicate reassurance, boundaries, needs, and requests directly.\n\nBuild relationship agreements based on reciprocity and fairness.\n\nRecognize pursuit-withdrawal patterns early enough to interrupt them.\n\nApply secure-functioning principles and the Five A's to everyday relationship behavior.\n\nCreate closeness without requiring either partner to chase, control, or disappear.\n\nSource foundation: all four books.\n\nYour Transformation\n\nBy the end of When She Stops Chasing You, the central question should no longer be:\n\n\"How do I make her chase me again?\"\n\nYou should be able to examine what actually happened between you, recognize attachment activation without obeying it, identify your role in a pursuit-distance cycle, communicate responsibility without manipulation, determine whether reconciliation has genuine foundations, tolerate separation without immediately replacing the relationship, and choose future partners more intelligently.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Evaluate future partners for emotional availability and compatibility rather than chemistry alone."
              },
              {
                "type": "paragraph",
                "text": "Communicate reassurance, boundaries, needs, and requests directly."
              },
              {
                "type": "paragraph",
                "text": "Build relationship agreements based on reciprocity and fairness."
              },
              {
                "type": "paragraph",
                "text": "Recognize pursuit-withdrawal patterns early enough to interrupt them."
              },
              {
                "type": "paragraph",
                "text": "Apply secure-functioning principles and the Five A's to everyday relationship behavior."
              },
              {
                "type": "paragraph",
                "text": "Create closeness without requiring either partner to chase, control, or disappear."
              },
              {
                "type": "paragraph",
                "text": "Source foundation: all four books."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Key Reflection & Takeaway"
              },
              {
                "type": "paragraph",
                "text": "Your Transformation\nIntroduction -  After This Section, You Will Be Able To"
              },
              {
                "type": "paragraph",
                "text": "Evaluate future partners for emotional availability and compatibility rather than chemistry alone."
              },
              {
                "type": "paragraph",
                "text": "Communicate reassurance, boundaries, needs, and requests directly."
              },
              {
                "type": "paragraph",
                "text": "Build relationship agreements based on reciprocity and fairness."
              },
              {
                "type": "paragraph",
                "text": "Recognize pursuit-withdrawal patterns early enough to interrupt them."
              },
              {
                "type": "paragraph",
                "text": "Apply secure-functioning principles and the Five A's to everyday relationship behavior."
              },
              {
                "type": "paragraph",
                "text": "Create closeness without requiring either partner to chase, control, or disappear."
              },
              {
                "type": "paragraph",
                "text": "Source foundation: all four books."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Your Transformation"
              },
              {
                "type": "paragraph",
                "text": "By the end of When She Stops Chasing You, the central question should no longer be:"
              },
              {
                "type": "paragraph",
                "text": "\"How do I make her chase me again?\""
              },
              {
                "type": "paragraph",
                "text": "You should be able to examine what actually happened between you, recognize attachment activation without obeying it, identify your role in a pursuit-distance cycle, communicate responsibility without manipulation, determine whether reconciliation has genuine foundations, tolerate separation without immediately replacing the relationship, and choose future partners more intelligently."
              }
            ]
          },
          {
            "title": "THE CENTRAL IDEA",
            "subtitle": "",
            "sourceText": "THE CENTRAL IDEA - The central idea of this course is simple: intimacy is a skill that can be developed. It isn t something that only naturally confident people possess, and it isn t created by a single technique or perfect relationship strategy. Meaningful intimacy develops through repeated experiences of awareness, communication, trust, safety, vulnerability, responsiveness, and mutual respect. You cannot control whether another person will reciprocate your feelings, but you can become more capable of communicating honestly, understanding your own needs, respecting another person s autonomy, and contributing positively to the relationship. The source material similarly presents confidence as involving awareness of wants and needs, communication, feeling safe and grounded, body awareness, and approaching intimacy with curiosity rather than treating it purely as performance.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "The central idea of this course is simple: intimacy is a skill that can be developed. It isn t something that only naturally confident people possess, and it isn t created by a single technique or perfect relationship strategy. Meaningful intimacy develops through repeated experiences of awareness, communication, trust, safety, vulnerability, responsiveness, and mutual respect. You cannot control whether another person will reciprocate your feelings, but you can become more capable of communicating honestly, understanding your own needs, respecting another person s autonomy, and contributing positively to the relationship. The source material similarly presents confidence as involving awareness of wants and needs, communication, feeling safe and grounded, body awareness, and approaching intimacy with curiosity rather than treating it purely as performance."
              }
            ]
          },
          {
            "title": "INTIMACY IS MORE THAN PHYSICAL CLOSENESS",
            "subtitle": "",
            "sourceText": "INTIMACY IS MORE THAN PHYSICAL CLOSENESS- Physical closeness can be meaningful, but physical proximity alone does not guarantee emotional connection. Two people can spend enormous amounts of time together while feeling misunderstood or emotionally distant, while a short but honest conversation can sometimes create a much deeper sense of connection. Intimacy therefore needs to be understood as a multidimensional experience involving the emotional, mental, physical, and relational aspects of a person s life. Recognising these dimensions gives you a more complete framework for evaluating what is actually happening in your relationships rather than reducing intimacy to one category of behaviour.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Physical closeness can be meaningful, but physical proximity alone does not guarantee emotional connection. Two people can spend enormous amounts of time together while feeling misunderstood or emotionally distant, while a short but honest conversation can sometimes create a much deeper sense of connection. Intimacy therefore needs to be understood as a multidimensional experience involving the emotional, mental, physical, and relational aspects of a person s life. Recognising these dimensions gives you a more complete framework for evaluating what is actually happening in your relationships rather than reducing intimacy to one category of behaviour."
              }
            ]
          },
          {
            "title": "ATTRACTION IS NOT THE SAME AS INTIMACY",
            "subtitle": "",
            "sourceText": "ATTRACTION IS NOT THE SAME AS INTIMACY - Attraction creates interest, chemistry, and desire, but intimacy creates understanding. You can be strongly attracted to someone without knowing their emotional world, values, fears, or needs. Likewise, a person can remain deeply important to you even when attraction naturally changes over time. Understanding this distinction prevents you from treating chemistry as the sole measure of relationship quality. Attraction can open the door, but intimacy is what allows two people to develop a deeper understanding of each other once they are inside the relationship.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Attraction creates interest, chemistry, and desire, but intimacy creates understanding. You can be strongly attracted to someone without knowing their emotional world, values, fears, or needs. Likewise, a person can remain deeply important to you even when attraction naturally changes over time. Understanding this distinction prevents you from treating chemistry as the sole measure of relationship quality. Attraction can open the door, but intimacy is what allows two people to develop a deeper understanding of each other once they are inside the relationship."
              }
            ]
          },
          {
            "title": "INTIMACY REQUIRES BEING SEEN",
            "subtitle": "",
            "sourceText": "INTIMACY REQUIRES BEING SEEN - Genuine intimacy becomes difficult when every interaction is built around maintaining an image. If you constantly hide uncertainty, avoid difficult emotions, pretend everything is fine, or only reveal the parts of yourself that you believe will be accepted, another person can know your presentation without truly knowing you. Vulnerability creates the possibility of something deeper because it allows another person to encounter a more authentic version of you. Vulnerability does not mean telling everyone everything; it means being willing to communicate something real when there is an appropriate level of trust and some emotional risk involved.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Genuine intimacy becomes difficult when every interaction is built around maintaining an image. If you constantly hide uncertainty, avoid difficult emotions, pretend everything is fine, or only reveal the parts of yourself that you believe will be accepted, another person can know your presentation without truly knowing you. Vulnerability creates the possibility of something deeper because it allows another person to encounter a more authentic version of you. Vulnerability does not mean telling everyone everything; it means being willing to communicate something real when there is an appropriate level of trust and some emotional risk involved."
              }
            ]
          },
          {
            "title": "SAFETY COMES BEFORE DEPTH",
            "subtitle": "",
            "sourceText": "SAFETY COMES BEFORE DEPTH - Deep connection requires an environment where people can communicate honestly without fearing humiliation, manipulation, punishment, or pressure. Emotional safety does not mean avoiding disagreement or making every interaction comfortable. It means being able to experience difficult conversations while maintaining respect for each person,s dignity and autonomy. When people know their boundaries will be respected and their vulnerability will not be weaponised against them, they have greater freedom to communicate honestly. This is why safety is not a secondary feature of intimacy—it is one of its foundations.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Deep connection requires an environment where people can communicate honestly without fearing humiliation, manipulation, punishment, or pressure. Emotional safety does not mean avoiding disagreement or making every interaction comfortable. It means being able to experience difficult conversations while maintaining respect for each person,s dignity and autonomy. When people know their boundaries will be respected and their vulnerability will not be weaponised against them, they have greater freedom to communicate honestly. This is why safety is not a secondary feature of intimacy—it is one of its foundations."
              }
            ]
          },
          {
            "title": "CONNECTION OVER PERFORMANCE",
            "subtitle": "",
            "sourceText": "CONNECTION OVER PERFORMANCE - When intimacy becomes a performance, your attention shifts away from the actual experience and toward evaluating yourself. You begin asking whether you are impressive enough, attractive enough, confident enough, or doing everything correctly. That mental pressure can make it harder to notice what is actually happening between you and another person. A connection-oriented mindset works differently. Instead of constantly evaluating yourself, you become curious about the experience: what are you feeling, what is the other person communicating, what feels comfortable, what needs to be discussed, and what would allow both people to feel more connected? The source material similarly encourages approaching sex as an experience rather than a performance and developing presence and curiosity.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "When intimacy becomes a performance, your attention shifts away from the actual experience and toward evaluating yourself. You begin asking whether you are impressive enough, attractive enough, confident enough, or doing everything correctly. That mental pressure can make it harder to notice what is actually happening between you and another person. A connection-oriented mindset works differently. Instead of constantly evaluating yourself, you become curious about the experience: what are you feeling, what is the other person communicating, what feels comfortable, what needs to be discussed, and what would allow both people to feel more connected? The source material similarly encourages approaching sex as an experience rather than a performance and developing presence and curiosity."
              }
            ]
          }
        ]
      }
    ]
  },
  'confident-connection': {
    "outcomes": [
      "Practice grounded presence instead of performing confidence.",
      "Notice emotional signals through words, tone and body language.",
      "Ask clearer questions and respond with more attention.",
      "Build comfort through steady, low-pressure connection."
    ],
    "sections": [
      {
        "title": "Overview",
        "lessons": [
          {
            "title": "Introduction",
            "subtitle": "A healthy relationship should give you room to become more fully yourself—not require you to become smaller, quieter, less ambitious, or less honest to keep someone close. Yet the fear of losing love can make people compromise their needs before they have even recognized what those needs are. Others respond to the same fear by protecting their independence so fiercely that genuine intimacy never has a chance to develop.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Finding Love Without Losing Yourself teaches a different way to approach relationships: how to know what you need, recognize attraction without surrendering judgment, choose an emotionally available partner, communicate honestly, build mutual security, maintain your own life, and make relationship decisions without abandoning either yourself or the person you love.."
              },
              {
                "type": "takeaway",
                "title": "The Core Premise",
                "text": "A healthy relationship should give you room to become more fully yourself—not require you to become smaller, quieter, or less honest to keep someone close."
              },
              {
                "type": "reflection",
                "prompt": "How does introduction show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Introduction\n\nA healthy relationship should give you room to become more fully yourself—not require you to become smaller, quieter, less ambitious, or less honest to keep someone close. Yet the fear of losing love can make people compromise their needs before they have even recognized what those needs are. Others respond to the same fear by protecting their independence so fiercely that genuine intimacy never has a chance to develop.\n\nFinding Love Without Losing Yourself teaches a different way to approach relationships: how to know what you need, recognize attraction without surrendering judgment, choose an emotionally available partner, communicate honestly, build mutual security, maintain your own life, and make relationship decisions without abandoning either yourself or the person you love..\n\nA healthy relationship should give you room to become more fully yourself—not require you to become smaller, quieter, or less honest to keep someone close.\n\nHow does introduction show up in your relationship patterns? Pause, breathe, and reflect."
          }
        ]
      },
      {
        "title": "Core Lessons",
        "lessons": [
          {
            "title": "The Self You Bring Into Love",
            "subtitle": "Before deciding who belongs in your life, understand what must remain yours.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "People often begin dating with a detailed picture of the partner they want but only a vague understanding of the life they want to protect. They know the appearance, personality, career, or romantic qualities they find attractive. They may be far less clear about their own values, emotional needs, boundaries, friendships, ambitions, and expectations of partnership."
              },
              {
                "type": "paragraph",
                "text": "That lack of clarity becomes important when attraction arrives. A person who has not consciously identified what matters to them may begin adapting to someone else's preferences without noticing the cumulative effect. They stop pursuing an interest because their partner finds it unimportant. They become less available to friends. They change their plans repeatedly. They avoid expressing an opinion because disagreement might create distance. Each individual compromise seems small, but together they can produce a relationship in which one person is increasingly present and the other is increasingly absent."
              },
              {
                "type": "paragraph",
                "text": "The alternative is not rigid independence. A relationship should change your life. You may move cities, adjust routines, share finances, care for a partner through illness, or make sacrifices for a future you both want. The distinction is whether those changes are chosen through mutual consideration or made primarily to prevent rejection."
              },
              {
                "type": "quote",
                "text": "David Richo's work is useful here because he connects mature love with responsibility for one's feelings, choices, and behavior, while also emphasizing the importance of allowing both partners room for their own development. Robin Norwood's work examines the opposite danger: becoming so focused on another person's problems and responses that one's own interests and life begin to disappear.",
                "author": "David Richo"
              },
              {
                "type": "paragraph",
                "text": "This section therefore begins with a question that sounds simple but requires careful thought:"
              },
              {
                "type": "paragraph",
                "text": "What would it mean for me to remain myself while building a life with someone else?"
              },
              {
                "type": "paragraph",
                "text": "Your answer should include more than hobbies or personality traits. It should include what you believe about honesty, money, family, fidelity, work, children, privacy, emotional expression, religion or spirituality where relevant, and the kind of daily life you want. It should also include the needs you are sometimes embarrassed to admit: reassurance, affection, time alone, sexual compatibility, encouragement, stability, or a partner who communicates directly."
              },
              {
                "type": "paragraph",
                "text": "None of these needs automatically makes you demanding. The work is to distinguish a genuine requirement from a preference, and a preference from an expectation that another person must satisfy every time."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are developing a practical understanding of your identity before it becomes entangled with another person's expectations. You will learn to distinguish core values from negotiable preferences, identify the conditions under which you feel emotionally secure, and recognize the situations in which you tend to abandon your own priorities to preserve connection."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to distinguish healthy flexibility from self-erasure. The goal is not to enter a relationship with an inflexible list of demands. It is to know yourself well enough that compromise becomes a conscious decision rather than an automatic response to fear."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "Imagine you are dating someone who wants to spend every weekend together. You enjoy the closeness, but you also have an important friendship, a professional course, and time you normally spend with family.",
                "action": "At first, you cancel these plans because you want the relationship to develop. After several months, your partner becomes accustomed to having all your free time. When you eventually ask for a weekend to yourself, the request feels like a sudden withdrawal to them and an overdue necessity to you."
              },
              {
                "type": "paragraph",
                "text": "A clearer approach would have been to communicate your existing commitments early: you want a close relationship, but you also intend to maintain the people and activities that matter to you. This gives the other person an opportunity to know the actual you rather than a version of you created by the early intensity of dating."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Identify your core relationship values, needs, preferences, and negotiable differences.",
                  "Recognize when compromise is motivated primarily by fear of rejection.",
                  "Describe the friendships, goals, routines, and personal commitments you want to preserve.",
                  "Communicate your existing life and relationship expectations without apologizing for having them.",
                  "Evaluate whether a relationship is expanding your life or gradually narrowing it."
                ]
              },
              {
                "type": "worksheet",
                "title": "Your Personal Relationship Map",
                "instructions": "Under each category, consider emotional connection, communication, family, friendships, work, money, intimacy, privacy, and future plans. Then choose three past situations in which you agreed to something you did not genuinely want. For each, identify what you feared would happen if you said no, what the agreement cost you, and how you could communicate differently now.",
                "steps": [
                  "Create a document with four categories: What I Need, What I Value, What I Prefer, and What I Can Negotiate.",
                  "Finish with a personal statement of no more than one page: “A relationship that fits my life would allow me to…” Make it specific enough that you could use it to evaluate an actual relationship."
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "steps",
                "title": "4 Steps to Ground Your Identity in Love",
                "items": [
                  "Clarify what you genuinely need versus what you prefer.",
                  "Distinguish loving compromise from fear-based self-erasure.",
                  "Communicate your existing life commitments early in dating.",
                  "Notice whether the connection expands or narrows your world."
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In the self you bring into love, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does the self you bring into love show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "The Self You Bring Into Love\n\nBefore deciding who belongs in your life, understand what must remain yours.\n\nPeople often begin dating with a detailed picture of the partner they want but only a vague understanding of the life they want to protect. They know the appearance, personality, career, or romantic qualities they find attractive. They may be far less clear about their own values, emotional needs, boundaries, friendships, ambitions, and expectations of partnership.\n\nThat lack of clarity becomes important when attraction arrives. A person who has not consciously identified what matters to them may begin adapting to someone else's preferences without noticing the cumulative effect. They stop pursuing an interest because their partner finds it unimportant. They become less available to friends. They change their plans repeatedly. They avoid expressing an opinion because disagreement might create distance. Each individual compromise seems small, but together they can produce a relationship in which one person is increasingly present and the other is increasingly absent.\n\nThe alternative is not rigid independence. A relationship should change your life. You may move cities, adjust routines, share finances, care for a partner through illness, or make sacrifices for a future you both want. The distinction is whether those changes are chosen through mutual consideration or made primarily to prevent rejection.\n\nDavid Richo's work is useful here because he connects mature love with responsibility for one's feelings, choices, and behavior, while also emphasizing the importance of allowing both partners room for their own development. Robin Norwood's work examines the opposite danger: becoming so focused on another person's problems and responses that one's own interests and life begin to disappear.\n\nThis section therefore begins with a question that sounds simple but requires careful thought:\n\nWhat would it mean for me to remain myself while building a life with someone else?\n\nYour answer should include more than hobbies or personality traits. It should include what you believe about honesty, money, family, fidelity, work, children, privacy, emotional expression, religion or spirituality where relevant, and the kind of daily life you want. It should also include the needs you are sometimes embarrassed to admit: reassurance, affection, time alone, sexual compatibility, encouragement, stability, or a partner who communicates directly.\n\nNone of these needs automatically makes you demanding. The work is to distinguish a genuine requirement from a preference, and a preference from an expectation that another person must satisfy every time.\n\nWhat You Are Learning\n\nYou are developing a practical understanding of your identity before it becomes entangled with another person's expectations. You will learn to distinguish core values from negotiable preferences, identify the conditions under which you feel emotionally secure, and recognize the situations in which you tend to abandon your own priorities to preserve connection.\n\nYou will also learn to distinguish healthy flexibility from self-erasure. The goal is not to enter a relationship with an inflexible list of demands. It is to know yourself well enough that compromise becomes a conscious decision rather than an automatic response to fear.\n\nA clearer approach would have been to communicate your existing commitments early: you want a close relationship, but you also intend to maintain the people and activities that matter to you. This gives the other person an opportunity to know the actual you rather than a version of you created by the early intensity of dating.\n\nIdentify your core relationship values, needs, preferences, and negotiable differences. Recognize when compromise is motivated primarily by fear of rejection. Describe the friendships, goals, routines, and personal commitments you want to preserve. Communicate your existing life and relationship expectations without apologizing for having them. Evaluate whether a relationship is expanding your life or gradually narrowing it.\n\nClarify what you genuinely need versus what you prefer. Distinguish loving compromise from fear-based self-erasure. Communicate your existing life commitments early in dating. Notice whether the connection expands or narrows your world.\n\nGrounded love begins with self-respect. In the self you bring into love, clarity beats anxiety every time.\n\nHow does the self you bring into love show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Read Attraction Without Losing Judgment",
            "subtitle": "Chemistry tells you that you are drawn to someone. It does not tell you whether the relationship is good for you.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Attraction can create a powerful sense of certainty before you have enough information to make a sound decision. Someone may be exceptionally charming, physically attractive, attentive, or emotionally intense. You may feel understood after only a few conversations. The temptation is to treat that feeling as evidence that the person is unusually compatible with you."
              },
              {
                "type": "paragraph",
                "text": "Sometimes the attraction develops into a healthy relationship. Sometimes it does not. The important skill is learning to enjoy attraction without allowing it to replace observation."
              },
              {
                "type": "paragraph",
                "text": "Attached describes how anxious, avoidant, and secure attachment tendencies can influence the way people experience closeness, uncertainty, and dependency. Anxious tendencies may involve heightened concern about a partner's availability; avoidant tendencies may involve discomfort with too much closeness; secure tendencies generally involve greater comfort with intimacy and responsiveness. These patterns can help explain relationship behavior, but they should not be used as fixed identities or diagnoses."
              },
              {
                "type": "paragraph",
                "text": "A person who becomes highly preoccupied when someone is inconsistent may mistake the relief of receiving attention for evidence of exceptional compatibility. A person who becomes uncomfortable when intimacy deepens may mistake emotional distance for a need to find a different partner. Neither response proves that the relationship is right or wrong. It tells you that your own attachment responses deserve attention."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work adds a further warning: familiar emotional difficulty can become part of what makes a person compelling. Someone may repeatedly feel drawn toward partners who are unavailable, troubled, or in need of rescuing because that dynamic activates a familiar role. The lesson is not that every intense attraction is unhealthy. It is that familiarity and compatibility are different forms of information."
              },
              {
                "type": "paragraph",
                "text": "This is particularly relevant to modern dating. Digital communication can create intimacy quickly while providing relatively little evidence about how someone behaves in ordinary life. A person may communicate beautifully through messages but avoid difficult conversations in person. They may express strong interest before demonstrating consistency. They may make future plans before the two of you have experienced disagreement, disappointment, or competing priorities."
              },
              {
                "type": "paragraph",
                "text": "The solution is not suspicion. It is pacing. Let attraction develop while continuing to observe."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish the experience of attraction from evidence of relationship capacity. You will identify your own responses to closeness and distance, recognize when uncertainty is increasing preoccupation, and evaluate a potential partner through repeated behavior rather than isolated moments."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that emotional security is not the same as emotional flatness. A calm relationship may contain strong attraction, playfulness, and desire. Conversely, a relationship can feel exciting because it is unpredictable. Neither calm nor intensity should be judged without considering the broader pattern."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "You meet someone through a dating app. The first two weeks are exciting. They send affectionate messages, discuss future plans, and seem unusually interested. Then their communication becomes inconsistent. You begin checking your phone more frequently and feel especially relieved when they become warm again.",
                "action": "Instead of immediately deciding that the connection is extraordinary—or that the person is deliberately manipulating you—you observe the pattern. You communicate what kind of consistency you prefer and notice how they respond. A partner who is genuinely interested may have a different communication style and still be willing to discuss it. A person who repeatedly dismisses your needs or offers promises without follow-through is providing different information."
              },
              {
                "type": "paragraph",
                "text": "The objective is to learn who they are, not to win a contest for their attention."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Distinguish attraction from evidence of compatibility and emotional availability.",
                  "Recognize how your attachment responses influence dating decisions.",
                  "Identify when uncertainty is increasing preoccupation rather than genuine closeness.",
                  "Evaluate a potential partner through consistent behavior over time.",
                  "Pace emotional investment without suppressing attraction or becoming unnecessarily guarded."
                ]
              },
              {
                "type": "worksheet",
                "title": "The Attraction and Evidence Journal",
                "instructions": "Record attraction and emotional responses in the first column. In the second, record observable behavior such as consistency, respect, communication, reliability, and how the person responds to a reasonable request. In the third, identify important unknowns concerning values, conflict, commitment, and compatibility.",
                "steps": [
                  "For the next three people you seriously consider dating, separate your observations into three columns: What I Feel, What I Know, and What I Still Need to Discover.",
                  "After several interactions, answer: “Am I becoming more interested in this person as I learn who they are, or more preoccupied because I remain uncertain about where I stand?”"
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In read attraction without losing judgment, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does read attraction without losing judgment show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Read Attraction Without Losing Judgment\n\nChemistry tells you that you are drawn to someone. It does not tell you whether the relationship is good for you.\n\nAttraction can create a powerful sense of certainty before you have enough information to make a sound decision. Someone may be exceptionally charming, physically attractive, attentive, or emotionally intense. You may feel understood after only a few conversations. The temptation is to treat that feeling as evidence that the person is unusually compatible with you.\n\nSometimes the attraction develops into a healthy relationship. Sometimes it does not. The important skill is learning to enjoy attraction without allowing it to replace observation.\n\nAttached describes how anxious, avoidant, and secure attachment tendencies can influence the way people experience closeness, uncertainty, and dependency. Anxious tendencies may involve heightened concern about a partner's availability; avoidant tendencies may involve discomfort with too much closeness; secure tendencies generally involve greater comfort with intimacy and responsiveness. These patterns can help explain relationship behavior, but they should not be used as fixed identities or diagnoses.\n\nA person who becomes highly preoccupied when someone is inconsistent may mistake the relief of receiving attention for evidence of exceptional compatibility. A person who becomes uncomfortable when intimacy deepens may mistake emotional distance for a need to find a different partner. Neither response proves that the relationship is right or wrong. It tells you that your own attachment responses deserve attention.\n\nNorwood's work adds a further warning: familiar emotional difficulty can become part of what makes a person compelling. Someone may repeatedly feel drawn toward partners who are unavailable, troubled, or in need of rescuing because that dynamic activates a familiar role. The lesson is not that every intense attraction is unhealthy. It is that familiarity and compatibility are different forms of information.\n\nThis is particularly relevant to modern dating. Digital communication can create intimacy quickly while providing relatively little evidence about how someone behaves in ordinary life. A person may communicate beautifully through messages but avoid difficult conversations in person. They may express strong interest before demonstrating consistency. They may make future plans before the two of you have experienced disagreement, disappointment, or competing priorities.\n\nThe solution is not suspicion. It is pacing. Let attraction develop while continuing to observe.\n\nWhat You Are Learning\n\nYou are learning to distinguish the experience of attraction from evidence of relationship capacity. You will identify your own responses to closeness and distance, recognize when uncertainty is increasing preoccupation, and evaluate a potential partner through repeated behavior rather than isolated moments.\n\nYou will also learn that emotional security is not the same as emotional flatness. A calm relationship may contain strong attraction, playfulness, and desire. Conversely, a relationship can feel exciting because it is unpredictable. Neither calm nor intensity should be judged without considering the broader pattern.\n\nThe objective is to learn who they are, not to win a contest for their attention.\n\nDistinguish attraction from evidence of compatibility and emotional availability. Recognize how your attachment responses influence dating decisions. Identify when uncertainty is increasing preoccupation rather than genuine closeness. Evaluate a potential partner through consistent behavior over time. Pace emotional investment without suppressing attraction or becoming unnecessarily guarded.\n\nGrounded love begins with self-respect. In read attraction without losing judgment, clarity beats anxiety every time.\n\nHow does read attraction without losing judgment show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Choose Someone Who Can Meet You",
            "subtitle": "A relationship cannot become mutual through one person's effort alone.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Knowing what you want and understanding attraction are important, but they are not enough. You must also learn how to evaluate whether another person has the willingness and capacity to participate in the kind of relationship you want."
              },
              {
                "type": "paragraph",
                "text": "This is where many people become distracted by potential."
              },
              {
                "type": "paragraph",
                "text": "They meet someone who is intelligent, attractive, ambitious, or emotionally compelling. The person has qualities they genuinely admire. But important relationship capacities may be missing: consistency, accountability, emotional availability, respect for boundaries, or willingness to discuss the future."
              },
              {
                "type": "paragraph",
                "text": "The temptation is to assume those capacities will appear once the relationship becomes more serious."
              },
              {
                "type": "paragraph",
                "text": "Sometimes people do grow together. But a relationship should not be built primarily on the assumption that one person will eventually become capable of offering what the other already needs."
              },
              {
                "type": "paragraph",
                "text": "Attached encourages readers to consider a potential partner's attachment-related behavior and compatibility rather than relying solely on attraction. Tatkin's secure-functioning approach adds a complementary question: can these two people create a relationship organized around mutual care, fairness, and cooperation? In his framework, individual attachment history matters, but it does not completely determine whether a couple can develop secure functioning together."
              },
              {
                "type": "paragraph",
                "text": "That distinction prevents two common mistakes. The first is dismissing someone because of an attachment label without examining their actual behavior. The second is assuming that love or patience will compensate indefinitely for a lack of mutual effort."
              },
              {
                "type": "paragraph",
                "text": "A useful partner-selection process therefore looks at three dimensions: character, compatibility, and relationship capacity."
              },
              {
                "type": "paragraph",
                "text": "Character concerns how someone behaves when doing the right thing is inconvenient. Compatibility concerns whether your values, lifestyles, and future expectations can reasonably coexist. Relationship capacity concerns whether the person can communicate, respond, negotiate, repair conflict, and participate in mutual commitment."
              },
              {
                "type": "paragraph",
                "text": "A person may be wonderful in one dimension and unsuitable in another. Someone can be kind but want a fundamentally different future. Someone can share your interests but be unwilling to communicate honestly. Someone can be intensely attracted to you but not want the level of commitment you seek."
              },
              {
                "type": "paragraph",
                "text": "The goal is not to find a flawless person. It is to find someone whose actual qualities and choices make a healthy relationship possible."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are learning to evaluate potential partners without turning dating into an interrogation or a search for perfection. You will distinguish compatibility from similarity, recognize the difference between a temporary difficulty and a repeated pattern, and assess whether important relationship needs can be met through mutual effort."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to stop treating another person's lack of availability as a problem you must solve."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "Suppose you want a committed relationship, but the person you are dating says they are unsure whether they want anything serious. You enjoy spending time together and believe they may eventually change their mind.",
                "action": "A mature response does not require you to pressure them into commitment or immediately accuse them of dishonesty. It requires taking their stated position seriously. You can explain what you are looking for, ask whether your expectations are compatible, and decide whether continuing makes sense for you."
              },
              {
                "type": "paragraph",
                "text": "If you choose to remain, that choice should be based on the relationship that actually exists—not on an unspoken expectation that enough affection will eventually change their position."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Evaluate potential partners through character, compatibility, and relationship capacity.",
                  "Translate vague preferences into observable relationship qualities.",
                  "Distinguish temporary difficulties from repeated patterns of unavailability or disrespect.",
                  "Recognize when you are investing in someone's potential rather than their demonstrated behavior.",
                  "Make dating decisions without trying to persuade another person to want the relationship you want."
                ]
              },
              {
                "type": "worksheet",
                "title": "The Partner Evidence Matrix",
                "instructions": "For example, “emotionally available” might mean that the person can discuss feelings, respond to reasonable requests for connection, and return to difficult conversations after taking space. “Reliable” might mean that their actions generally match their commitments and that they communicate when plans change. For someone you are currently dating, record evidence for each quality, evidence against it, and what remains unknown. Then identify one important conversation or ordinary-life situation that could provide more information. Do not manufacture tests or create jealousy to obtain evidence; observe naturally and communicate directly.",
                "steps": [
                  "Choose five qualities that are essential for your preferred relationship. For each quality, define what it would look like in observable behavior."
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In choose someone who can meet you, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does choose someone who can meet you show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Choose Someone Who Can Meet You\n\nA relationship cannot become mutual through one person's effort alone.\n\nKnowing what you want and understanding attraction are important, but they are not enough. You must also learn how to evaluate whether another person has the willingness and capacity to participate in the kind of relationship you want.\n\nThis is where many people become distracted by potential.\n\nThey meet someone who is intelligent, attractive, ambitious, or emotionally compelling. The person has qualities they genuinely admire. But important relationship capacities may be missing: consistency, accountability, emotional availability, respect for boundaries, or willingness to discuss the future.\n\nThe temptation is to assume those capacities will appear once the relationship becomes more serious.\n\nSometimes people do grow together. But a relationship should not be built primarily on the assumption that one person will eventually become capable of offering what the other already needs.\n\nAttached encourages readers to consider a potential partner's attachment-related behavior and compatibility rather than relying solely on attraction. Tatkin's secure-functioning approach adds a complementary question: can these two people create a relationship organized around mutual care, fairness, and cooperation? In his framework, individual attachment history matters, but it does not completely determine whether a couple can develop secure functioning together.\n\nThat distinction prevents two common mistakes. The first is dismissing someone because of an attachment label without examining their actual behavior. The second is assuming that love or patience will compensate indefinitely for a lack of mutual effort.\n\nA useful partner-selection process therefore looks at three dimensions: character, compatibility, and relationship capacity.\n\nCharacter concerns how someone behaves when doing the right thing is inconvenient. Compatibility concerns whether your values, lifestyles, and future expectations can reasonably coexist. Relationship capacity concerns whether the person can communicate, respond, negotiate, repair conflict, and participate in mutual commitment.\n\nA person may be wonderful in one dimension and unsuitable in another. Someone can be kind but want a fundamentally different future. Someone can share your interests but be unwilling to communicate honestly. Someone can be intensely attracted to you but not want the level of commitment you seek.\n\nThe goal is not to find a flawless person. It is to find someone whose actual qualities and choices make a healthy relationship possible.\n\nWhat You Are Learning\n\nYou are learning to evaluate potential partners without turning dating into an interrogation or a search for perfection. You will distinguish compatibility from similarity, recognize the difference between a temporary difficulty and a repeated pattern, and assess whether important relationship needs can be met through mutual effort.\n\nYou will also learn to stop treating another person's lack of availability as a problem you must solve.\n\nIf you choose to remain, that choice should be based on the relationship that actually exists—not on an unspoken expectation that enough affection will eventually change their position.\n\nEvaluate potential partners through character, compatibility, and relationship capacity. Translate vague preferences into observable relationship qualities. Distinguish temporary difficulties from repeated patterns of unavailability or disrespect. Recognize when you are investing in someone's potential rather than their demonstrated behavior. Make dating decisions without trying to persuade another person to want the relationship you want.\n\nGrounded love begins with self-respect. In choose someone who can meet you, clarity beats anxiety every time.\n\nHow does choose someone who can meet you show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Speak Before You Disappear",
            "subtitle": "The ability to express a need early can prevent months of resentment, guessing, and unnecessary conflict.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Many people lose themselves in relationships not because they lack boundaries, but because they struggle to communicate those boundaries while the relationship still feels uncertain. They worry that asking for reassurance will make them appear needy, that expressing disappointment will create conflict, or that discussing commitment will make the other person withdraw."
              },
              {
                "type": "paragraph",
                "text": "So they remain agreeable."
              },
              {
                "type": "paragraph",
                "text": "They say something is fine when it is not."
              },
              {
                "type": "paragraph",
                "text": "They wait for their partner to notice."
              },
              {
                "type": "paragraph",
                "text": "They hope the other person will eventually offer what they need without being asked."
              },
              {
                "type": "paragraph",
                "text": "When the need remains unmet, resentment develops. Eventually the conversation becomes much more emotionally charged than it needed to be."
              },
              {
                "type": "paragraph",
                "text": "The opposite pattern is also possible. Someone may express a need through accusation, repeated questioning, threats, or attempts to control the partner's behavior. The need itself may be legitimate, but the communication makes cooperation more difficult."
              },
              {
                "type": "quote",
                "text": "Attached includes effective communication and secure approaches to conflict as important relationship skills. Richo similarly emphasizes taking responsibility for feelings and choices, keeping agreements, and addressing conflicts rather than allowing them to remain unresolved.",
                "author": "Relationship Psychology"
              },
              {
                "type": "paragraph",
                "text": "The practical lesson is that having a need, expressing a need, and demanding a particular response are three different things."
              },
              {
                "type": "paragraph",
                "text": "You may need more consistent contact. You can communicate that clearly. Your partner may have a different preference. The two of you can then discuss whether an arrangement works for both of you. What you cannot do is guarantee compatibility by becoming silent, nor can you create genuine willingness by applying enough pressure."
              },
              {
                "type": "paragraph",
                "text": "A useful communication structure is:"
              },
              {
                "type": "paragraph",
                "text": "Observation → Feeling → Need → Request → Invitation to respond."
              },
              {
                "type": "paragraph",
                "text": "For example, instead of saying, “You never make time for me,” you might say, “We've had to cancel our last three plans, and I'm feeling disconnected. Regular time together matters to me. Could we choose an evening this week that we can both protect? I'd also like to understand what has been making scheduling difficult.”"
              },
              {
                "type": "paragraph",
                "text": "This communicates the problem without requiring the partner to accept a negative characterization of themselves before the conversation can begin."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are learning to communicate needs, preferences, and concerns while preserving both self-respect and the other person's autonomy. You will practice distinguishing facts from interpretations, making specific requests, and listening to responses without immediately treating disagreement as rejection."
              },
              {
                "type": "paragraph",
                "text": "You will also learn when a communication problem is actually a compatibility problem. If you have expressed an important need clearly and repeatedly, the next step may not be finding a more persuasive way to explain it."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "Your partner enjoys frequent social events, while you need some quiet time after work. You begin attending everything because you do not want them to think you are uninterested. Eventually you become irritable and start declining invitations abruptly.",
                "action": "A better conversation happens before resentment accumulates. You can explain that you enjoy spending time together and also need some evenings to recharge. You can discuss which events matter most to your partner and which you can attend separately."
              },
              {
                "type": "paragraph",
                "text": "The result may be a compromise, but the important change is that the compromise includes both people's actual needs."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Express relationship needs without accusation, mind-reading, or excessive apology.",
                  "Make specific requests that allow the other person to respond honestly.",
                  "Distinguish a communication difficulty from a genuine incompatibility.",
                  "Discuss differences without treating every disagreement as rejection.",
                  "Recognize when repeated explanations are replacing a necessary relationship decision.."
                ]
              },
              {
                "type": "worksheet",
                "title": "The Conversation Lab",
                "instructions": "Choose three conversations you have been avoiding. Write each one using the five-part structure above.",
                "steps": [
                  "Choose three conversations you have been avoiding. Write each one using the five-part structure above.",
                  "Then rehearse three possible responses from your partner: agreement, a reasonable difference in preference, and an unwillingness to meet the need. Practice responding to each without abandoning your original concern or escalating into accusation.",
                  "For the third response, ask yourself: “If this person genuinely cannot offer what I need, what decision is available to me besides repeating the request indefinitely?”"
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In speak before you disappear, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does speak before you disappear show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Speak Before You Disappear\n\nThe ability to express a need early can prevent months of resentment, guessing, and unnecessary conflict.\n\nMany people lose themselves in relationships not because they lack boundaries, but because they struggle to communicate those boundaries while the relationship still feels uncertain. They worry that asking for reassurance will make them appear needy, that expressing disappointment will create conflict, or that discussing commitment will make the other person withdraw.\n\nSo they remain agreeable.\n\nThey say something is fine when it is not.\n\nThey wait for their partner to notice.\n\nThey hope the other person will eventually offer what they need without being asked.\n\nWhen the need remains unmet, resentment develops. Eventually the conversation becomes much more emotionally charged than it needed to be.\n\nThe opposite pattern is also possible. Someone may express a need through accusation, repeated questioning, threats, or attempts to control the partner's behavior. The need itself may be legitimate, but the communication makes cooperation more difficult.\n\nAttached includes effective communication and secure approaches to conflict as important relationship skills. Richo similarly emphasizes taking responsibility for feelings and choices, keeping agreements, and addressing conflicts rather than allowing them to remain unresolved.\n\nThe practical lesson is that having a need, expressing a need, and demanding a particular response are three different things.\n\nYou may need more consistent contact. You can communicate that clearly. Your partner may have a different preference. The two of you can then discuss whether an arrangement works for both of you. What you cannot do is guarantee compatibility by becoming silent, nor can you create genuine willingness by applying enough pressure.\n\nA useful communication structure is:\n\nObservation → Feeling → Need → Request → Invitation to respond.\n\nFor example, instead of saying, “You never make time for me,” you might say, “We've had to cancel our last three plans, and I'm feeling disconnected. Regular time together matters to me. Could we choose an evening this week that we can both protect? I'd also like to understand what has been making scheduling difficult.”\n\nThis communicates the problem without requiring the partner to accept a negative characterization of themselves before the conversation can begin.\n\nWhat You Are Learning\n\nYou are learning to communicate needs, preferences, and concerns while preserving both self-respect and the other person's autonomy. You will practice distinguishing facts from interpretations, making specific requests, and listening to responses without immediately treating disagreement as rejection.\n\nYou will also learn when a communication problem is actually a compatibility problem. If you have expressed an important need clearly and repeatedly, the next step may not be finding a more persuasive way to explain it.\n\nThe result may be a compromise, but the important change is that the compromise includes both people's actual needs.\n\nExpress relationship needs without accusation, mind-reading, or excessive apology. Make specific requests that allow the other person to respond honestly. Distinguish a communication difficulty from a genuine incompatibility. Discuss differences without treating every disagreement as rejection. Recognize when repeated explanations are replacing a necessary relationship decision..\n\nGrounded love begins with self-respect. In speak before you disappear, clarity beats anxiety every time.\n\nHow does speak before you disappear show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Make Space Without Making Distance",
            "subtitle": "Secure intimacy allows two people to belong to each other without becoming responsible for every part of each other's lives.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "One of the central challenges of a serious relationship is balancing closeness and autonomy. Too little connection can leave partners feeling unimportant or uncertain. Too little autonomy can create resentment, dependence, or the feeling that maintaining the relationship requires surrendering personal freedom."
              },
              {
                "type": "paragraph",
                "text": "The answer is not to divide life into two completely separate territories. Nor is it to expect partners to share every activity, friendship, opinion, and emotional experience. A healthy relationship requires a deliberate understanding of what belongs to the individual, what belongs to the couple, and how those two areas support one another."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's concept of the couple bubble is useful here. It describes a relationship in which partners deliberately protect their shared bond through mutuality, fairness, and sensitivity. Importantly, secure functioning is not the same as one person controlling the other or demanding that every individual preference be sacrificed for the relationship. Tatkin's own explanation emphasizes a two-person system in which both partners have interests and neither is simply dragged along for the other's benefit."
              },
              {
                "type": "paragraph",
                "text": "Richo makes the autonomy question particularly explicit. His Five A's include allowing, and his discussion of adult relationships recognizes the need for a workable balance between time together and time alone. The aim is not to make partners independent strangers, but to create enough trust that individual development does not automatically feel like a threat to the bond."
              },
              {
                "type": "paragraph",
                "text": "This distinction matters in everyday decisions. A partner may want to pursue a demanding qualification, maintain close friendships, spend time with family, travel independently, or have private time to think. These choices can be compatible with commitment. They can also create genuine practical conflicts that need negotiation."
              },
              {
                "type": "paragraph",
                "text": "The question is not simply, “Am I allowed to do this?” It is, “How can we honor this individual need while also taking the relationship's needs seriously?”"
              },
              {
                "type": "paragraph",
                "text": "That requires clarity about boundaries. A boundary identifies what you are willing to participate in or accept. A relationship agreement identifies what both partners have voluntarily committed to. Neither should be used as a disguised method of controlling the other's ordinary independence."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish autonomy from emotional withdrawal and commitment from possession. You will develop the ability to negotiate time, privacy, friendships, family responsibilities, and personal goals without assuming that one person's needs must automatically defeat the other's."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to recognize when an agreement is genuinely mutual and when one person is complying mainly because they fear the consequences of disagreement."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "Imagine your partner wants to prepare for an important examination and needs several evenings each week for uninterrupted study. You value quality time and begin feeling that the relationship is receiving less attention.",
                "action": "An insecure response might be to demand that they prove their love by studying less, or to remain silent while resentment grows. A secure response is to discuss the actual constraint: how much time is needed, what kind of connection matters to you, and how the two of you can maintain the relationship during this period."
              },
              {
                "type": "paragraph",
                "text": "You might agree on a regular shared evening, shorter check-ins on study days, and a review of the arrangement after the examination. The point is not the specific schedule. It is that the relationship becomes a place where both people's lives can be supported."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Distinguish healthy autonomy from avoidance and healthy commitment from control.",
                  "Negotiate individual and shared priorities without assuming one must always win.",
                  "Create mutual agreements concerning time, privacy, friendships, and personal goals.",
                  "Recognize when a boundary protects wellbeing and when a demand restricts ordinary autonomy.",
                  "Support a partner's development while maintaining meaningful connection."
                ]
              },
              {
                "type": "worksheet",
                "title": "The Shared Space Agreement",
                "instructions": "For each area, establish what requires a shared agreement, what can remain an individual decision, and how either person can raise a concern without automatically accusing the other of disloyalty. Include a process for revisiting agreements when circumstances change.",
                "steps": [
                  "If you are in a relationship, complete this exercise together. If you are single, draft your own answers for future discussion.",
                  "Identify three individual commitments you want to preserve and three shared commitments you want a relationship to protect. Then discuss how you would handle competing demands involving work, friends, family, money, privacy, and time alone."
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In make space without making distance, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does make space without making distance show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Make Space Without Making Distance\n\nSecure intimacy allows two people to belong to each other without becoming responsible for every part of each other's lives.\n\nOne of the central challenges of a serious relationship is balancing closeness and autonomy. Too little connection can leave partners feeling unimportant or uncertain. Too little autonomy can create resentment, dependence, or the feeling that maintaining the relationship requires surrendering personal freedom.\n\nThe answer is not to divide life into two completely separate territories. Nor is it to expect partners to share every activity, friendship, opinion, and emotional experience. A healthy relationship requires a deliberate understanding of what belongs to the individual, what belongs to the couple, and how those two areas support one another.\n\nTatkin's concept of the couple bubble is useful here. It describes a relationship in which partners deliberately protect their shared bond through mutuality, fairness, and sensitivity. Importantly, secure functioning is not the same as one person controlling the other or demanding that every individual preference be sacrificed for the relationship. Tatkin's own explanation emphasizes a two-person system in which both partners have interests and neither is simply dragged along for the other's benefit.\n\nRicho makes the autonomy question particularly explicit. His Five A's include allowing, and his discussion of adult relationships recognizes the need for a workable balance between time together and time alone. The aim is not to make partners independent strangers, but to create enough trust that individual development does not automatically feel like a threat to the bond.\n\nThis distinction matters in everyday decisions. A partner may want to pursue a demanding qualification, maintain close friendships, spend time with family, travel independently, or have private time to think. These choices can be compatible with commitment. They can also create genuine practical conflicts that need negotiation.\n\nThe question is not simply, “Am I allowed to do this?” It is, “How can we honor this individual need while also taking the relationship's needs seriously?”\n\nThat requires clarity about boundaries. A boundary identifies what you are willing to participate in or accept. A relationship agreement identifies what both partners have voluntarily committed to. Neither should be used as a disguised method of controlling the other's ordinary independence.\n\nWhat You Are Learning\n\nYou are learning to distinguish autonomy from emotional withdrawal and commitment from possession. You will develop the ability to negotiate time, privacy, friendships, family responsibilities, and personal goals without assuming that one person's needs must automatically defeat the other's.\n\nYou will also learn to recognize when an agreement is genuinely mutual and when one person is complying mainly because they fear the consequences of disagreement.\n\nYou might agree on a regular shared evening, shorter check-ins on study days, and a review of the arrangement after the examination. The point is not the specific schedule. It is that the relationship becomes a place where both people's lives can be supported.\n\nDistinguish healthy autonomy from avoidance and healthy commitment from control. Negotiate individual and shared priorities without assuming one must always win. Create mutual agreements concerning time, privacy, friendships, and personal goals. Recognize when a boundary protects wellbeing and when a demand restricts ordinary autonomy. Support a partner's development while maintaining meaningful connection.\n\nGrounded love begins with self-respect. In make space without making distance, clarity beats anxiety every time.\n\nHow does make space without making distance show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Repair Without Becoming the Rescuer",
            "subtitle": "ealthy couples take responsibility for their own behavior and cooperate on the problems between them.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Every meaningful relationship eventually encounters disappointment. Someone forgets something important, speaks defensively, becomes unavailable during a stressful period, or makes a decision that affects the other person. The presence of conflict does not automatically indicate an unhealthy relationship. What matters is whether the couple can respond in ways that preserve dignity, accountability, and the possibility of repair."
              },
              {
                "type": "paragraph",
                "text": "The challenge is that conflict often activates older protective habits. One person pursues an immediate resolution because uncertainty feels intolerable. The other withdraws because the conversation feels overwhelming. One apologizes too quickly to restore peace. The other becomes defensive because acknowledging a mistake feels like admitting they are a bad partner."
              },
              {
                "type": "paragraph",
                "text": "These reactions can create a cycle in which the original problem becomes secondary to the way the couple handles it."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach emphasizes cooperation and mutual protection rather than treating disagreements as contests between adversaries. Richo similarly describes adult relationship work as involving responsibility, truthful engagement, and the addressing, processing, and resolution of conflict."
              },
              {
                "type": "paragraph",
                "text": "A useful repair process therefore has several distinct tasks. First, both people need enough emotional steadiness to participate. Second, the actual event must be described without immediately turning it into a judgment about the other person's character. Third, each person needs an opportunity to explain their experience and hear the other's. Fourth, responsibility must be identified accurately. Finally, the couple needs an agreement about what will happen differently."
              },
              {
                "type": "paragraph",
                "text": "This is also where the distinction between supporting and rescuing becomes essential."
              },
              {
                "type": "paragraph",
                "text": "You can support a partner who is struggling with stress, grief, insecurity, or personal difficulties. You can offer patience and practical help. But you cannot take responsibility for their willingness to communicate, their honesty, their treatment of you, or their decision to seek help when needed."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work is particularly relevant to this distinction because it examines relationships in which one person's attention becomes increasingly consumed by managing or changing the other. The healthier alternative is not indifference; it is recognizing the limits of what one partner can do for another."
              },
              {
                "type": "paragraph",
                "text": "A relationship becomes more secure when both people can say, in effect: “Your wellbeing matters to me, and I remain responsible for my own behavior.”"
              },
              {
                "type": "paragraph",
                "text": "There is an important limit to ordinary repair exercises. If a relationship involves violence, coercive control, threats, intimidation, or fear of retaliation, the priority is safety and appropriate professional support—not negotiating more effectively with the person causing harm. Mutuality should never be used to imply equal responsibility for abuse."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are learning to participate in conflict without automatically attacking, withdrawing, appeasing, or taking responsibility for everything. You will distinguish your contribution from your partner's, practice repair that leads to behavioral change, and recognize when a problem requires cooperation rather than one person's repeated effort."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that forgiveness, reconciliation, and continued commitment are separate decisions. An apology may be sincere without making a relationship safe or workable."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "Your partner repeatedly makes jokes about something you are sensitive about. You eventually become angry and say something hurtful in return.",
                "action": "A productive repair does not require deciding that only one person has behaved badly. You can take responsibility for your own hurtful response while still addressing the original pattern. Your partner can acknowledge the impact of the jokes without being required to accept an inaccurate account of their intentions."
              },
              {
                "type": "paragraph",
                "text": "The goal is to reach a clear agreement about how both of you will handle similar situations in the future. If the pattern continues despite repeated conversations, that becomes information about the relationship's capacity for change."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Identify and interrupt unproductive conflict responses.",
                  "Take responsibility for your behavior without accepting responsibility for everything.",
                  "Distinguish support from rescuing or managing a partner.",
                  "Conduct repair conversations that produce specific behavioral agreements.",
                  "Recognize when continued conflict reflects a lack of mutual willingness or a safety concern rather than insufficient effort on your part."
                ]
              },
              {
                "type": "worksheet",
                "title": "The Repair Rehearsal",
                "instructions": "Choose a real, manageable disagreement. Write a brief account of what happened, what you felt, what you assumed, and what you did. Then identify the part for which you can take responsibility without adding “but you…” to the apology.",
                "steps": [
                  "Choose a real, manageable disagreement. Write a brief account of what happened, what you felt, what you assumed, and what you did. Then identify the part for which you can take responsibility without adding “but you…” to the apology.",
                  "Next, write a specific request for future behavior and identify what you are willing to do differently yourself. Rehearse the conversation with a trusted person or privately before having it with your partner.",
                  "Afterward, evaluate the conversation according to three questions: Did we understand the problem more accurately? Did both people have room to speak? Did we agree on behavior that can actually be observed?"
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In repair without becoming the rescuer, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does repair without becoming the rescuer show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Repair Without Becoming the Rescuer\n\nealthy couples take responsibility for their own behavior and cooperate on the problems between them.\n\nEvery meaningful relationship eventually encounters disappointment. Someone forgets something important, speaks defensively, becomes unavailable during a stressful period, or makes a decision that affects the other person. The presence of conflict does not automatically indicate an unhealthy relationship. What matters is whether the couple can respond in ways that preserve dignity, accountability, and the possibility of repair.\n\nThe challenge is that conflict often activates older protective habits. One person pursues an immediate resolution because uncertainty feels intolerable. The other withdraws because the conversation feels overwhelming. One apologizes too quickly to restore peace. The other becomes defensive because acknowledging a mistake feels like admitting they are a bad partner.\n\nThese reactions can create a cycle in which the original problem becomes secondary to the way the couple handles it.\n\nTatkin's secure-functioning approach emphasizes cooperation and mutual protection rather than treating disagreements as contests between adversaries. Richo similarly describes adult relationship work as involving responsibility, truthful engagement, and the addressing, processing, and resolution of conflict.\n\nA useful repair process therefore has several distinct tasks. First, both people need enough emotional steadiness to participate. Second, the actual event must be described without immediately turning it into a judgment about the other person's character. Third, each person needs an opportunity to explain their experience and hear the other's. Fourth, responsibility must be identified accurately. Finally, the couple needs an agreement about what will happen differently.\n\nThis is also where the distinction between supporting and rescuing becomes essential.\n\nYou can support a partner who is struggling with stress, grief, insecurity, or personal difficulties. You can offer patience and practical help. But you cannot take responsibility for their willingness to communicate, their honesty, their treatment of you, or their decision to seek help when needed.\n\nNorwood's work is particularly relevant to this distinction because it examines relationships in which one person's attention becomes increasingly consumed by managing or changing the other. The healthier alternative is not indifference; it is recognizing the limits of what one partner can do for another.\n\nA relationship becomes more secure when both people can say, in effect: “Your wellbeing matters to me, and I remain responsible for my own behavior.”\n\nThere is an important limit to ordinary repair exercises. If a relationship involves violence, coercive control, threats, intimidation, or fear of retaliation, the priority is safety and appropriate professional support—not negotiating more effectively with the person causing harm. Mutuality should never be used to imply equal responsibility for abuse.\n\nWhat You Are Learning\n\nYou are learning to participate in conflict without automatically attacking, withdrawing, appeasing, or taking responsibility for everything. You will distinguish your contribution from your partner's, practice repair that leads to behavioral change, and recognize when a problem requires cooperation rather than one person's repeated effort.\n\nYou will also learn that forgiveness, reconciliation, and continued commitment are separate decisions. An apology may be sincere without making a relationship safe or workable.\n\nThe goal is to reach a clear agreement about how both of you will handle similar situations in the future. If the pattern continues despite repeated conversations, that becomes information about the relationship's capacity for change.\n\nIdentify and interrupt unproductive conflict responses. Take responsibility for your behavior without accepting responsibility for everything. Distinguish support from rescuing or managing a partner. Conduct repair conversations that produce specific behavioral agreements. Recognize when continued conflict reflects a lack of mutual willingness or a safety concern rather than insufficient effort on your part.\n\nGrounded love begins with self-respect. In repair without becoming the rescuer, clarity beats anxiety every time.\n\nHow does repair without becoming the rescuer show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Build a Life That Can Hold Love",
            "subtitle": "The strongest relationship is not the one that consumes the most of your life, but the one that helps both people live it more fully.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Finding love without losing yourself is not a single decision made at the beginning of a relationship. It is an ongoing practice."
              },
              {
                "type": "paragraph",
                "text": "The person you are at twenty-five may have different needs, responsibilities, and ambitions at thirty-five. Careers change. Families grow. Health changes. Financial pressures appear. Partners discover new interests and encounter difficulties neither could have predicted when they first met."
              },
              {
                "type": "paragraph",
                "text": "A relationship that depends on both people remaining exactly as they were at the beginning will struggle with ordinary development. A stronger relationship creates ways to adapt while protecting the bond."
              },
              {
                "type": "paragraph",
                "text": "This is where the four books become especially complementary. Attached helps you recognize the importance of availability and secure connection. Tatkin's work emphasizes deliberate mutuality and the agreements that make a relationship function as a cooperative system. Richo's Five A's provide a framework for continuing to notice, accept, appreciate, show affection toward, and allow the development of another person. Norwood's work reminds us that a relationship should not become the entire organizing principle of one's identity."
              },
              {
                "type": "paragraph",
                "text": "The resulting principle is interdependence without self-erasure."
              },
              {
                "type": "paragraph",
                "text": "You can rely on your partner without making them responsible for every emotional need. You can prioritize the relationship without abandoning all other commitments. You can make sacrifices without creating a permanent imbalance in which one person's life consistently matters less. You can support your partner's growth without treating their growth as a threat to your own place in the relationship."
              },
              {
                "type": "paragraph",
                "text": "This requires periodic attention to the relationship itself. Couples often discuss logistics—bills, appointments, travel, household tasks—while rarely discussing how the relationship is functioning. Small disappointments then accumulate until one person begins to feel that their needs have disappeared from the shared agenda."
              },
              {
                "type": "paragraph",
                "text": "A regular relationship review can prevent this. It does not need to be formal or clinical. The purpose is to ask whether both people still feel heard, respected, connected, and able to pursue meaningful lives."
              },
              {
                "type": "paragraph",
                "text": "The final skill is also knowing when to remain and when to reconsider. A healthy relationship is not one in which leaving is impossible. It is one in which both people continue choosing the relationship because it remains a place of mutual care and growth. If important needs repeatedly remain unmet, agreements are consistently broken, or one person must continually diminish themselves to preserve the bond, maturity may require acknowledging that reality rather than treating endurance as proof of love."
              },
              {
                "type": "heading",
                "text": "What You Are Learning",
                "level": 2
              },
              {
                "type": "paragraph",
                "text": "You are integrating partner selection, attachment awareness, communication, boundaries, mutuality, and repair into a long-term relationship practice. You will learn how to monitor the health of a relationship without becoming hypervigilant, adapt agreements as life changes, and make decisions based on both emotional connection and observable reality."
              },
              {
                "type": "paragraph",
                "text": "You will also develop a clearer understanding of what it means to be a good partner: not someone who gives up everything, but someone who can participate in a relationship with honesty, generosity, accountability, and a stable sense of self."
              },
              {
                "type": "scenario",
                "title": "Everyday Relationship Scenario",
                "context": "Imagine you and your partner have been together for several years. One of you receives an opportunity that could significantly change your career but would require relocation or a demanding schedule. The other has important commitments in the current city.",
                "action": "A relationship based on self-sacrifice may assume that one person must immediately give up their plans to prove their love. A relationship based on rigid independence may treat the decision as entirely individual."
              },
              {
                "type": "paragraph",
                "text": "A more secure approach asks what the opportunity means, what each person would gain or lose, what alternatives exist, and whether a solution can protect both people's important interests. The eventual decision may still involve sacrifice. The difference is that the sacrifice is discussed, understood, and chosen rather than silently imposed."
              },
              {
                "type": "checklist",
                "title": "What You Will Be Able to Practice",
                "items": [
                  "Maintain a meaningful individual life while participating in a committed relationship.",
                  "Create regular practices for connection, communication, and relationship review.",
                  "Negotiate major life decisions through mutual consideration rather than automatic self-sacrifice.",
                  "Recognize when a relationship needs adjustment, additional support, or a more serious decision about its future.",
                  "Build a personal relationship philosophy that combines closeness, autonomy, accountability, and reciprocity.."
                ]
              },
              {
                "type": "worksheet",
                "title": "Your 90-Day Relationship Operating Plan",
                "instructions": "Include a weekly personal commitment that protects your own development, a regular opportunity for meaningful connection, and a monthly conversation about how the relationship is functioning. Decide how you will raise unmet needs, how conflict pauses and repair will work, and how you will revisit agreements when circumstances change.",
                "steps": [
                  "Create a practical plan for your current relationship or for the relationship you intend to build.",
                  "At the end of each month, answer these questions in writing:",
                  "Am I able to express my real needs?",
                  "Are both of us contributing to the relationship's wellbeing?",
                  "What part of my individual life has grown?",
                  "What part of our shared life has grown?",
                  "What has become difficult to discuss?",
                  "Which agreement needs to change?",
                  "What am I choosing freely, and what am I doing mainly because I fear losing the relationship?",
                  "Use the answers to make one concrete adjustment for the following month. The purpose is not to score your partner or create a perfect relationship. It is to prevent important truths from remaining unspoken until they become crises."
                ],
                "fields": [
                  {
                    "label": "My Current Observation",
                    "placeholder": "Notice what feels true right now..."
                  },
                  {
                    "label": "One Healthy Action",
                    "placeholder": "What I will communicate or practice..."
                  }
                ]
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In build a life that can hold love, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does build a life that can hold love show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Build a Life That Can Hold Love\n\nThe strongest relationship is not the one that consumes the most of your life, but the one that helps both people live it more fully.\n\nFinding love without losing yourself is not a single decision made at the beginning of a relationship. It is an ongoing practice.\n\nThe person you are at twenty-five may have different needs, responsibilities, and ambitions at thirty-five. Careers change. Families grow. Health changes. Financial pressures appear. Partners discover new interests and encounter difficulties neither could have predicted when they first met.\n\nA relationship that depends on both people remaining exactly as they were at the beginning will struggle with ordinary development. A stronger relationship creates ways to adapt while protecting the bond.\n\nThis is where the four books become especially complementary. Attached helps you recognize the importance of availability and secure connection. Tatkin's work emphasizes deliberate mutuality and the agreements that make a relationship function as a cooperative system. Richo's Five A's provide a framework for continuing to notice, accept, appreciate, show affection toward, and allow the development of another person. Norwood's work reminds us that a relationship should not become the entire organizing principle of one's identity.\n\nThe resulting principle is interdependence without self-erasure.\n\nYou can rely on your partner without making them responsible for every emotional need. You can prioritize the relationship without abandoning all other commitments. You can make sacrifices without creating a permanent imbalance in which one person's life consistently matters less. You can support your partner's growth without treating their growth as a threat to your own place in the relationship.\n\nThis requires periodic attention to the relationship itself. Couples often discuss logistics—bills, appointments, travel, household tasks—while rarely discussing how the relationship is functioning. Small disappointments then accumulate until one person begins to feel that their needs have disappeared from the shared agenda.\n\nA regular relationship review can prevent this. It does not need to be formal or clinical. The purpose is to ask whether both people still feel heard, respected, connected, and able to pursue meaningful lives.\n\nThe final skill is also knowing when to remain and when to reconsider. A healthy relationship is not one in which leaving is impossible. It is one in which both people continue choosing the relationship because it remains a place of mutual care and growth. If important needs repeatedly remain unmet, agreements are consistently broken, or one person must continually diminish themselves to preserve the bond, maturity may require acknowledging that reality rather than treating endurance as proof of love.\n\nWhat You Are Learning\n\nYou are integrating partner selection, attachment awareness, communication, boundaries, mutuality, and repair into a long-term relationship practice. You will learn how to monitor the health of a relationship without becoming hypervigilant, adapt agreements as life changes, and make decisions based on both emotional connection and observable reality.\n\nYou will also develop a clearer understanding of what it means to be a good partner: not someone who gives up everything, but someone who can participate in a relationship with honesty, generosity, accountability, and a stable sense of self.\n\nA more secure approach asks what the opportunity means, what each person would gain or lose, what alternatives exist, and whether a solution can protect both people's important interests. The eventual decision may still involve sacrifice. The difference is that the sacrifice is discussed, understood, and chosen rather than silently imposed.\n\nMaintain a meaningful individual life while participating in a committed relationship. Create regular practices for connection, communication, and relationship review. Negotiate major life decisions through mutual consideration rather than automatic self-sacrifice. Recognize when a relationship needs adjustment, additional support, or a more serious decision about its future. Build a personal relationship philosophy that combines closeness, autonomy, accountability, and reciprocity..\n\nGrounded love begins with self-respect. In build a life that can hold love, clarity beats anxiety every time.\n\nHow does build a life that can hold love show up in your relationship patterns? Pause, breathe, and reflect."
          },
          {
            "title": "Wrap",
            "subtitle": "Up and Next Steps - Your Transformation",
            "blocks": [
              {
                "type": "paragraph",
                "text": "After completing Finding Love Without Losing Yourself, you should be able to approach dating and relationships with a clearer understanding of both what you need and what you can genuinely offer. You can recognize attraction without allowing it to replace judgment, evaluate a potential partner through consistent behavior, communicate your needs before resentment develops, and negotiate closeness without treating independence as a threat."
              },
              {
                "type": "paragraph",
                "text": "You should also be able to distinguish healthy sacrifice from self-abandonment, support a partner without becoming responsible for their development, and participate in conflict without surrendering your voice or denying your own contribution. If a relationship becomes difficult, you have a framework for assessing whether both people can repair it. If it becomes fundamentally incompatible with your wellbeing, you can make that decision without assuming that leaving means you failed to love enough."
              },
              {
                "type": "paragraph",
                "text": "The ultimate goal is not to become so independent that you never need anyone. It is to become capable of choosing and sustaining a relationship in which both people can depend on each other, grow as individuals, and remain fully present in the life they are building together."
              },
              {
                "type": "takeaway",
                "title": "Key Takeaway",
                "text": "Grounded love begins with self-respect. In wrap, clarity beats anxiety every time."
              },
              {
                "type": "reflection",
                "prompt": "How does wrap show up in your relationship patterns? Pause, breathe, and reflect.",
                "hint": "Notice whether this insight brings up relief, curiosity, or an urge to protect yourself."
              }
            ],
            "sourceText": "Wrap\n\nUp and Next Steps - Your Transformation\n\nAfter completing Finding Love Without Losing Yourself, you should be able to approach dating and relationships with a clearer understanding of both what you need and what you can genuinely offer. You can recognize attraction without allowing it to replace judgment, evaluate a potential partner through consistent behavior, communicate your needs before resentment develops, and negotiate closeness without treating independence as a threat.\n\nYou should also be able to distinguish healthy sacrifice from self-abandonment, support a partner without becoming responsible for their development, and participate in conflict without surrendering your voice or denying your own contribution. If a relationship becomes difficult, you have a framework for assessing whether both people can repair it. If it becomes fundamentally incompatible with your wellbeing, you can make that decision without assuming that leaving means you failed to love enough.\n\nThe ultimate goal is not to become so independent that you never need anyone. It is to become capable of choosing and sustaining a relationship in which both people can depend on each other, grow as individuals, and remain fully present in the life they are building together.\n\nGrounded love begins with self-respect. In wrap, clarity beats anxiety every time.\n\nHow does wrap show up in your relationship patterns? Pause, breathe, and reflect."
          }
        ]
      }
    ]
  },
  'party-ka-din': {
    "outcomes": [
      "This course is about learning how to move through that loss without pretending not to care,\n       becoming consumed by it, rushing into another relationship,\n        or turning heartbreak into permanent emotional avoidance. \n        It synthesizes the most relevant relationship psychology from Attached, \n        Wired for Love, How to Be an Adult in Relationships, and Women Who Love Too Much, \n        while following the premium-course structure you specified"
    ],
    "sections": [
      {
        "title": "Lessons",
        "lessons": [
          {
            "title": "When Goodbye Activates More Than Memory",
            "subtitle": "Why losing one person can suddenly make your whole emotional world feel unstable.",
            "sourceText": "When Goodbye Activates More Than Memory - Why losing one person can suddenly make your whole emotional world feel unstable.\n\nOne of the strangest experiences after a breakup is discovering that your feelings can become stronger after access to the person disappears.\n\nBefore the relationship ended, you may have been frustrated with her. You may have wanted more space. You might even have wondered whether the relationship was right for you. Then she leaves, becomes unavailable, stops replying, or makes the breakup final—and suddenly your mind behaves as though recovering her is the most urgent problem in your life.\n\nYou replay conversations.\n\nYou remember moments you previously took for granted.\n\nYou check your phone more often.\n\nYou wonder whether she is thinking about you.\n\nYou imagine her meeting someone else.\n\nSmall pieces of information acquire enormous emotional importance.\n\nAttachment psychology helps explain why.\n\nAttached describes romantic partners as attachment figures whose availability can influence feelings of security. When an important connection becomes uncertain or unavailable, the attachment system can become highly activated. An anxious pattern may intensify pursuit and preoccupation; an avoidant pattern may initially rely on distance or emotional suppression but can still experience attachment distress when the separation becomes real.\n\nThis means that intensity after a breakup does not automatically prove that ending the relationship was a mistake.\n\nSometimes you are grieving the woman.\n\nSometimes you are reacting to rejection.\n\nSometimes you are frightened by the sudden absence of reassurance.\n\nSometimes your ego is injured because she chose to leave.\n\nSometimes you are grieving the future you imagined.\n\nAnd usually several of these are happening simultaneously.\n\nMen can make serious mistakes when all these experiences are compressed into one sentence:\n\n\"I need her back.\"\n\nThat sentence may contain six different psychological needs.\n\nHealing begins when you separate them.\n\nWhat You Are Learning\n\nYou are learning to identify what a breakup has actually activated inside you.\n\nInstead of treating every wave of distress as evidence that you should reconnect, you learn to distinguish:\n\nattachment activation,\nloneliness,\nrejection,\nwounded pride,\nsexual longing,\ngenuine relational love,\nguilt,\nregret,\nfear of replacement,\nand grief.\n\nThe goal is not to intellectualize your feelings away.\n\nIt is to understand them accurately enough that they stop making every decision for you.\n\nPractical Application\n\nImagine she ends the relationship on Sunday.\n\nOn Wednesday you see that she followed someone new online.\n\nYour immediate reaction is jealousy, anxiety, anger, and an overwhelming urge to contact her.\n\nThe unexamined response might become:\n\n\"I knew she never cared.\"\n\nor:\n\n\"I have to tell her how much I love her before it's too late.\"\n\nA more accurate internal response might be:\n\n\"Seeing this triggered my fear that she can replace me. That feeling is real. But I currently do not know what this online activity means, and I do not need to act on the fear tonight.\"\n\nThat distinction can prevent one painful evening from creating weeks of additional damage.\n\nPractice — Name What You Actually Lost\n\nComplete these separately:\n\nI miss her because...\n\nI miss being in a relationship because...\n\nI am afraid because...\n\nI feel rejected because...\n\nI regret...\n\nI am jealous of the possibility that...\n\nThe future I thought we would have included...\n\nThe part of myself I feel I lost is...\n\nThen read the answers again.\n\nDo not call all of them \"missing her.\"\n\nThey are different losses.\n\nDifferent losses require different forms of healing.\n\nAfter This Section, You Will Be Able To\nRecognize attachment activation after romantic separation.\nDistinguish grief from panic, loneliness, jealousy, guilt, and wounded pride.\nInterpret intense emotions without automatically treating them as instructions.\nIdentify exactly what the relationship's ending removed from your life.\nCreate distance between emotional activation and impulsive behavior.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "One of the strangest experiences after a breakup is discovering that your feelings can become stronger after access to the person disappears."
              },
              {
                "type": "paragraph",
                "text": "Before the relationship ended, you may have been frustrated with her. You may have wanted more space. You might even have wondered whether the relationship was right for you. Then she leaves, becomes unavailable, stops replying, or makes the breakup final—and suddenly your mind behaves as though recovering her is the most urgent problem in your life."
              },
              {
                "type": "paragraph",
                "text": "You replay conversations."
              },
              {
                "type": "paragraph",
                "text": "You remember moments you previously took for granted."
              },
              {
                "type": "paragraph",
                "text": "You check your phone more often."
              },
              {
                "type": "paragraph",
                "text": "You wonder whether she is thinking about you."
              },
              {
                "type": "paragraph",
                "text": "You imagine her meeting someone else."
              },
              {
                "type": "paragraph",
                "text": "Small pieces of information acquire enormous emotional importance."
              },
              {
                "type": "paragraph",
                "text": "Attachment psychology helps explain why."
              },
              {
                "type": "paragraph",
                "text": "Attached describes romantic partners as attachment figures whose availability can influence feelings of security. When an important connection becomes uncertain or unavailable, the attachment system can become highly activated. An anxious pattern may intensify pursuit and preoccupation; an avoidant pattern may initially rely on distance or emotional suppression but can still experience attachment distress when the separation becomes real."
              },
              {
                "type": "paragraph",
                "text": "This means that intensity after a breakup does not automatically prove that ending the relationship was a mistake."
              },
              {
                "type": "paragraph",
                "text": "Sometimes you are grieving the woman."
              },
              {
                "type": "paragraph",
                "text": "Sometimes you are reacting to rejection."
              },
              {
                "type": "paragraph",
                "text": "Sometimes you are frightened by the sudden absence of reassurance."
              },
              {
                "type": "paragraph",
                "text": "Sometimes your ego is injured because she chose to leave."
              },
              {
                "type": "paragraph",
                "text": "Sometimes you are grieving the future you imagined."
              },
              {
                "type": "paragraph",
                "text": "And usually several of these are happening simultaneously."
              },
              {
                "type": "paragraph",
                "text": "Men can make serious mistakes when all these experiences are compressed into one sentence:"
              },
              {
                "type": "paragraph",
                "text": "\"I need her back.\""
              },
              {
                "type": "paragraph",
                "text": "That sentence may contain six different psychological needs."
              },
              {
                "type": "paragraph",
                "text": "Healing begins when you separate them."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to identify what a breakup has actually activated inside you."
              },
              {
                "type": "paragraph",
                "text": "Instead of treating every wave of distress as evidence that you should reconnect, you learn to distinguish:"
              },
              {
                "type": "paragraph",
                "text": "attachment activation,\nloneliness,\nrejection,\nwounded pride,\nsexual longing,\ngenuine relational love,\nguilt,\nregret,\nfear of replacement,\nand grief."
              },
              {
                "type": "paragraph",
                "text": "The goal is not to intellectualize your feelings away."
              },
              {
                "type": "paragraph",
                "text": "It is to understand them accurately enough that they stop making every decision for you."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine she ends the relationship on Sunday."
              },
              {
                "type": "paragraph",
                "text": "On Wednesday you see that she followed someone new online."
              },
              {
                "type": "paragraph",
                "text": "Your immediate reaction is jealousy, anxiety, anger, and an overwhelming urge to contact her."
              },
              {
                "type": "paragraph",
                "text": "The unexamined response might become:"
              },
              {
                "type": "paragraph",
                "text": "\"I knew she never cared.\""
              },
              {
                "type": "paragraph",
                "text": "or:"
              },
              {
                "type": "paragraph",
                "text": "\"I have to tell her how much I love her before it's too late.\""
              },
              {
                "type": "paragraph",
                "text": "A more accurate internal response might be:"
              },
              {
                "type": "paragraph",
                "text": "\"Seeing this triggered my fear that she can replace me. That feeling is real. But I currently do not know what this online activity means, and I do not need to act on the fear tonight.\""
              },
              {
                "type": "paragraph",
                "text": "That distinction can prevent one painful evening from creating weeks of additional damage."
              },
              {
                "type": "steps",
                "title": "Practice — Name What You Actually Lost",
                "items": [
                  "Complete these separately:",
                  "I miss her because...",
                  "I miss being in a relationship because...",
                  "I am afraid because...",
                  "I feel rejected because...",
                  "I regret...",
                  "I am jealous of the possibility that...",
                  "The future I thought we would have included...",
                  "The part of myself I feel I lost is...",
                  "Then read the answers again.",
                  "Do not call all of them \"missing her.\"",
                  "They are different losses.",
                  "Different losses require different forms of healing."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Recognize attachment activation after romantic separation.",
                  "Distinguish grief from panic, loneliness, jealousy, guilt, and wounded pride.",
                  "Interpret intense emotions without automatically treating them as instructions.",
                  "Identify exactly what the relationship's ending removed from your life.",
                  "Create distance between emotional activation and impulsive behavior."
                ]
              }
            ]
          },
          {
            "title": "Grieve the Person and the Future That Never Happened",
            "subtitle": "Healing requires mourning more than memories.",
            "sourceText": "Grieve the Person and the Future That Never Happened - Healing requires mourning more than memories.\n\nPeople often imagine grief as missing someone who used to be present.\n\nBreakup grief is more complicated.\n\nYou lose what happened.\n\nBut you also lose what was supposed to happen.\n\nThe trip you discussed.\n\nThe place you might have lived.\n\nThe wedding you imagined.\n\nThe children you occasionally talked about.\n\nThe version of yourself who assumed she would still be there next year.\n\nSome of the strongest heartbreak therefore comes from events that never occurred.\n\nThat can feel irrational:\n\n\"How can I mourn something I never actually had?\"\n\nBecause psychologically, anticipated futures can become part of our identity long before they become reality.\n\nDavid Richo's approach is particularly important here because he treats endings and grief as part of mature loving rather than as evidence that love failed. The updated edition of How to Be an Adult in Relationships explicitly expands its treatment of relationship endings.\n\nGrief also asks something that many men have been trained to resist:\n\nfeel what cannot currently be fixed.\n\nProblem-solving is extremely useful when a problem has a solution.\n\nBut loss often creates pain without an immediate action that can remove it.\n\nThis is why some men unconsciously convert grief into activities that feel more controllable:\n\nanger,\n\nobsessive exercise,\n\nwork,\n\nalcohol,\n\ncasual sex,\n\ndating apps,\n\nrevenge fantasies,\n\nrepeated contact,\n\nsocial-media monitoring,\n\nor immediate pursuit of another partner.\n\nThe behavior changes.\n\nThe unresolved loss remains underneath it.\n\nHealing does not require sitting permanently inside sadness. It requires allowing enough contact with sadness that the breakup becomes an integrated event rather than an emotional debt repeatedly collected by future relationships.\n\nWhat You Are Learning\n\nYou are learning to grieve deliberately instead of only waiting for time to pass.\n\nYou will distinguish between:\n\nremembering her and remaining psychologically attached to an imagined future.\n\nYou will also learn that acceptance does not mean agreeing with what happened.\n\nAcceptance means recognizing:\n\nThis is what is true right now.\n\nOnly then can your energy begin moving toward what comes next.\n\nPractical Application\n\nPerhaps you keep imagining one conversation where everything changes.\n\nShe finally understands your side.\n\nYou apologize perfectly.\n\nShe realizes she still loves you.\n\nYou reunite.\n\nThat fantasy can temporarily relieve pain.\n\nBut if she has clearly ended the relationship, repeatedly rehearsing reconciliation can prevent your mind from adapting to reality.\n\nThe healthier position is not:\n\n\"I must stop loving her immediately.\"\n\nIt is:\n\n\"I can still love what mattered while accepting that I do not currently have this relationship.\"\n\nThose two truths can coexist.\n\nPractice — The Three-Loss Exercise\n\nWrite three separate lists.\n\nWhat I Actually Lost\n\nSpecific realities:\n\ncompanionship,\nphysical affection,\ndaily conversation,\nshared routines,\nher family,\nemotional support.\nWhat I Expected to Have\n\nFuture experiences:\n\nmarriage,\ntravel,\na home,\nchildren,\ncelebrations,\ngrowing older together.\nWhat I Believe the Breakup Says About Me\n\nFor example:\n\nI failed.\nI wasn't enough.\nNobody will stay.\nI wasted years.\nShe will find somebody better.\nI will never feel this way again.\n\nNow examine the third list carefully.\n\nThe first two contain losses.\n\nThe third contains interpretations.\n\nDo not mourn an interpretation as though it were a proven fact.\n\nAfter This Section, You Will Be Able To\nIdentify both real and imagined losses created by a breakup.\nAllow grief without turning it immediately into avoidance or action.\nSeparate the end of a relationship from judgments about your worth.\nRecognize bargaining fantasies that keep you emotionally suspended.\nPractice acceptance without pretending that the relationship meant nothing. ",
            "blocks": [
              {
                "type": "paragraph",
                "text": "People often imagine grief as missing someone who used to be present."
              },
              {
                "type": "paragraph",
                "text": "Breakup grief is more complicated."
              },
              {
                "type": "paragraph",
                "text": "You lose what happened."
              },
              {
                "type": "paragraph",
                "text": "But you also lose what was supposed to happen."
              },
              {
                "type": "paragraph",
                "text": "The trip you discussed."
              },
              {
                "type": "paragraph",
                "text": "The place you might have lived."
              },
              {
                "type": "paragraph",
                "text": "The wedding you imagined."
              },
              {
                "type": "paragraph",
                "text": "The children you occasionally talked about."
              },
              {
                "type": "paragraph",
                "text": "The version of yourself who assumed she would still be there next year."
              },
              {
                "type": "paragraph",
                "text": "Some of the strongest heartbreak therefore comes from events that never occurred."
              },
              {
                "type": "paragraph",
                "text": "That can feel irrational:"
              },
              {
                "type": "paragraph",
                "text": "\"How can I mourn something I never actually had?\""
              },
              {
                "type": "paragraph",
                "text": "Because psychologically, anticipated futures can become part of our identity long before they become reality."
              },
              {
                "type": "paragraph",
                "text": "David Richo's approach is particularly important here because he treats endings and grief as part of mature loving rather than as evidence that love failed. The updated edition of How to Be an Adult in Relationships explicitly expands its treatment of relationship endings."
              },
              {
                "type": "paragraph",
                "text": "Grief also asks something that many men have been trained to resist:"
              },
              {
                "type": "paragraph",
                "text": "feel what cannot currently be fixed."
              },
              {
                "type": "paragraph",
                "text": "Problem-solving is extremely useful when a problem has a solution."
              },
              {
                "type": "paragraph",
                "text": "But loss often creates pain without an immediate action that can remove it."
              },
              {
                "type": "paragraph",
                "text": "This is why some men unconsciously convert grief into activities that feel more controllable:"
              },
              {
                "type": "paragraph",
                "text": "anger,"
              },
              {
                "type": "paragraph",
                "text": "obsessive exercise,"
              },
              {
                "type": "paragraph",
                "text": "work,"
              },
              {
                "type": "paragraph",
                "text": "alcohol,"
              },
              {
                "type": "paragraph",
                "text": "casual sex,"
              },
              {
                "type": "paragraph",
                "text": "dating apps,"
              },
              {
                "type": "paragraph",
                "text": "revenge fantasies,"
              },
              {
                "type": "paragraph",
                "text": "repeated contact,"
              },
              {
                "type": "paragraph",
                "text": "social-media monitoring,"
              },
              {
                "type": "paragraph",
                "text": "or immediate pursuit of another partner."
              },
              {
                "type": "paragraph",
                "text": "The behavior changes."
              },
              {
                "type": "paragraph",
                "text": "The unresolved loss remains underneath it."
              },
              {
                "type": "paragraph",
                "text": "Healing does not require sitting permanently inside sadness. It requires allowing enough contact with sadness that the breakup becomes an integrated event rather than an emotional debt repeatedly collected by future relationships."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to grieve deliberately instead of only waiting for time to pass."
              },
              {
                "type": "paragraph",
                "text": "You will distinguish between:"
              },
              {
                "type": "paragraph",
                "text": "remembering her and remaining psychologically attached to an imagined future."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that acceptance does not mean agreeing with what happened."
              },
              {
                "type": "paragraph",
                "text": "Acceptance means recognizing:"
              },
              {
                "type": "paragraph",
                "text": "This is what is true right now."
              },
              {
                "type": "paragraph",
                "text": "Only then can your energy begin moving toward what comes next."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Perhaps you keep imagining one conversation where everything changes."
              },
              {
                "type": "paragraph",
                "text": "She finally understands your side."
              },
              {
                "type": "paragraph",
                "text": "You apologize perfectly."
              },
              {
                "type": "paragraph",
                "text": "She realizes she still loves you."
              },
              {
                "type": "paragraph",
                "text": "You reunite."
              },
              {
                "type": "paragraph",
                "text": "That fantasy can temporarily relieve pain."
              },
              {
                "type": "paragraph",
                "text": "But if she has clearly ended the relationship, repeatedly rehearsing reconciliation can prevent your mind from adapting to reality."
              },
              {
                "type": "paragraph",
                "text": "The healthier position is not:"
              },
              {
                "type": "paragraph",
                "text": "\"I must stop loving her immediately.\""
              },
              {
                "type": "paragraph",
                "text": "It is:"
              },
              {
                "type": "paragraph",
                "text": "\"I can still love what mattered while accepting that I do not currently have this relationship.\""
              },
              {
                "type": "paragraph",
                "text": "Those two truths can coexist."
              },
              {
                "type": "steps",
                "title": "Practice — The Three-Loss Exercise",
                "items": [
                  "Write three separate lists.",
                  "What I Actually Lost",
                  "Specific realities:",
                  "companionship,\nphysical affection,\ndaily conversation,\nshared routines,\nher family,\nemotional support.\nWhat I Expected to Have",
                  "Future experiences:",
                  "marriage,\ntravel,\na home,\nchildren,\ncelebrations,\ngrowing older together.\nWhat I Believe the Breakup Says About Me",
                  "For example:",
                  "I failed.\nI wasn't enough.\nNobody will stay.\nI wasted years.\nShe will find somebody better.\nI will never feel this way again.",
                  "Now examine the third list carefully.",
                  "The first two contain losses.",
                  "The third contains interpretations.",
                  "Do not mourn an interpretation as though it were a proven fact."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify both real and imagined losses created by a breakup.",
                  "Allow grief without turning it immediately into avoidance or action.",
                  "Separate the end of a relationship from judgments about your worth.",
                  "Recognize bargaining fantasies that keep you emotionally suspended.",
                  "Practice acceptance without pretending that the relationship meant nothing."
                ]
              }
            ]
          },
          {
            "title": "Tell the Truth About the Relationship",
            "subtitle": "Do not heal from a fantasy version of what happened.",
            "sourceText": "Tell the Truth About the Relationship - Do not heal from a fantasy version of what happened.\n\nMemory becomes selective after separation.\n\nWhen loneliness peaks, the brain can create a highlight reel.\n\nHer laugh.\n\nThe first date.\n\nThe trip.\n\nThe way she slept beside you.\n\nThe message she sent when you were struggling.\n\nThe relationship begins to feel beautiful and irreplaceable.\n\nThen anger arrives and memory performs the opposite edit.\n\nHer criticism.\n\nThe arguments.\n\nThe things she did wrong.\n\nHer emotional distance.\n\nThe ending.\n\nNow she becomes the villain.\n\nNeither version is complete.\n\nHealing requires the capacity to hold the whole relationship at once.\n\nThe beautiful parts were real.\n\nThe painful parts were real.\n\nYour mistakes were real.\n\nHer mistakes were real.\n\nLove may have been real.\n\nAnd incompatibility may also have been real.\n\nThis is where attachment frameworks become useful—but also where they are frequently misused.\n\nSomeone reads Attached and concludes:\n\n\"She was avoidant. That's why everything failed.\"\n\nOr:\n\n\"I was anxious, so I ruined everything.\"\n\nAttachment styles are tools for recognizing patterns, not court verdicts assigning guilt. Attached describes anxious, avoidant, and secure tendencies to help readers understand relationship dynamics and compatibility.\n\nTatkin's work broadens the analysis by asking how the couple system functioned. Did partners protect one another? Were there clear agreements? Could conflict be repaired? Did each understand the other's vulnerabilities? Could both people feel secure inside the relationship?\n\nA mature post-breakup review therefore asks:\n\nWhat happened between us repeatedly?\n\nMaybe you withdrew whenever she became emotional.\n\nMaybe she pursued until you felt trapped.\n\nMaybe neither of you knew how to pause conflict safely.\n\nMaybe one person carried almost all the emotional labor.\n\nMaybe there was betrayal.\n\nMaybe there was incompatibility.\n\nMaybe the relationship was healthy for years and still eventually ended.\n\nUnderstanding the pattern prevents two equally damaging conclusions:\n\n\"Everything was my fault.\"\n\nand\n\n\"Everything was hers.\"\n\nNeither produces useful growth.\n\nWhat You Are Learning\n\nYou are learning how to conduct an honest relationship postmortem without turning it into self-punishment.\n\nYou will examine:\n\ntriggers,\nrecurring conflicts,\ncommunication,\nemotional availability,\nboundaries,\nexpectations,\ncompatibility,\nrepair attempts,\nand your own contribution.\n\nThe purpose is not to determine who was the worse person.\n\nIt is to discover what you must carry forward and what you must not repeat.\n\nPractical Application\n\nSuppose most arguments ended the same way:\n\nShe raised an issue.\n\nYou felt criticized.\n\nYou defended yourself.\n\nShe intensified.\n\nYou shut down.\n\nShe followed you or kept messaging.\n\nYou withdrew further.\n\nLater, one of you apologized without resolving the original issue.\n\nLooking only at the final argument tells you very little.\n\nLooking at the repeated cycle tells you considerably more.\n\nYour lesson might not be:\n\n\"I should never date an emotional woman again.\"\n\nIt may be:\n\n\"I interpret complaints as attacks so quickly that I stop listening before I understand what my partner is asking for.\"\n\nThat is actionable knowledge.\n\nPractice — The Relationship Postmortem\n\nChoose five major recurring problems.\n\nFor each, answer:\n\nWhat usually triggered it?\n\nWhat did she do next?\n\nWhat did I feel?\n\nWhat did I do?\n\nHow did my behavior affect her?\n\nHow did her behavior affect me?\n\nHow did we eventually reconnect?\n\nWas the problem actually resolved?\n\nThen complete:\n\nMy responsibility was...\nHer responsibility was...\nThe incompatibility neither person could fix was...\nWhat I would do differently next time is...\n\nKeep all four statements.\n\nRemoving any one of them distorts the lesson.\n\nAfter This Section, You Will Be Able To\nEvaluate a past relationship without idealizing or demonizing it.\nUse attachment concepts without turning them into blame labels.\nIdentify recurring relationship cycles rather than isolated arguments.\nSeparate personal responsibility from unnecessary self-condemnation.\nExtract specific lessons that can improve future relationships.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Memory becomes selective after separation."
              },
              {
                "type": "paragraph",
                "text": "When loneliness peaks, the brain can create a highlight reel."
              },
              {
                "type": "paragraph",
                "text": "Her laugh."
              },
              {
                "type": "paragraph",
                "text": "The first date."
              },
              {
                "type": "paragraph",
                "text": "The trip."
              },
              {
                "type": "paragraph",
                "text": "The way she slept beside you."
              },
              {
                "type": "paragraph",
                "text": "The message she sent when you were struggling."
              },
              {
                "type": "paragraph",
                "text": "The relationship begins to feel beautiful and irreplaceable."
              },
              {
                "type": "paragraph",
                "text": "Then anger arrives and memory performs the opposite edit."
              },
              {
                "type": "paragraph",
                "text": "Her criticism."
              },
              {
                "type": "paragraph",
                "text": "The arguments."
              },
              {
                "type": "paragraph",
                "text": "The things she did wrong."
              },
              {
                "type": "paragraph",
                "text": "Her emotional distance."
              },
              {
                "type": "paragraph",
                "text": "The ending."
              },
              {
                "type": "paragraph",
                "text": "Now she becomes the villain."
              },
              {
                "type": "paragraph",
                "text": "Neither version is complete."
              },
              {
                "type": "paragraph",
                "text": "Healing requires the capacity to hold the whole relationship at once."
              },
              {
                "type": "paragraph",
                "text": "The beautiful parts were real."
              },
              {
                "type": "paragraph",
                "text": "The painful parts were real."
              },
              {
                "type": "paragraph",
                "text": "Your mistakes were real."
              },
              {
                "type": "paragraph",
                "text": "Her mistakes were real."
              },
              {
                "type": "paragraph",
                "text": "Love may have been real."
              },
              {
                "type": "paragraph",
                "text": "And incompatibility may also have been real."
              },
              {
                "type": "paragraph",
                "text": "This is where attachment frameworks become useful—but also where they are frequently misused."
              },
              {
                "type": "paragraph",
                "text": "Someone reads Attached and concludes:"
              },
              {
                "type": "paragraph",
                "text": "\"She was avoidant. That's why everything failed.\""
              },
              {
                "type": "paragraph",
                "text": "Or:"
              },
              {
                "type": "paragraph",
                "text": "\"I was anxious, so I ruined everything.\""
              },
              {
                "type": "paragraph",
                "text": "Attachment styles are tools for recognizing patterns, not court verdicts assigning guilt. Attached describes anxious, avoidant, and secure tendencies to help readers understand relationship dynamics and compatibility."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's work broadens the analysis by asking how the couple system functioned. Did partners protect one another? Were there clear agreements? Could conflict be repaired? Did each understand the other's vulnerabilities? Could both people feel secure inside the relationship?"
              },
              {
                "type": "paragraph",
                "text": "A mature post-breakup review therefore asks:"
              },
              {
                "type": "paragraph",
                "text": "What happened between us repeatedly?"
              },
              {
                "type": "paragraph",
                "text": "Maybe you withdrew whenever she became emotional."
              },
              {
                "type": "paragraph",
                "text": "Maybe she pursued until you felt trapped."
              },
              {
                "type": "paragraph",
                "text": "Maybe neither of you knew how to pause conflict safely."
              },
              {
                "type": "paragraph",
                "text": "Maybe one person carried almost all the emotional labor."
              },
              {
                "type": "paragraph",
                "text": "Maybe there was betrayal."
              },
              {
                "type": "paragraph",
                "text": "Maybe there was incompatibility."
              },
              {
                "type": "paragraph",
                "text": "Maybe the relationship was healthy for years and still eventually ended."
              },
              {
                "type": "paragraph",
                "text": "Understanding the pattern prevents two equally damaging conclusions:"
              },
              {
                "type": "paragraph",
                "text": "\"Everything was my fault.\""
              },
              {
                "type": "paragraph",
                "text": "and"
              },
              {
                "type": "paragraph",
                "text": "\"Everything was hers.\""
              },
              {
                "type": "paragraph",
                "text": "Neither produces useful growth."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning how to conduct an honest relationship postmortem without turning it into self-punishment."
              },
              {
                "type": "paragraph",
                "text": "You will examine:"
              },
              {
                "type": "paragraph",
                "text": "triggers,\nrecurring conflicts,\ncommunication,\nemotional availability,\nboundaries,\nexpectations,\ncompatibility,\nrepair attempts,\nand your own contribution."
              },
              {
                "type": "paragraph",
                "text": "The purpose is not to determine who was the worse person."
              },
              {
                "type": "paragraph",
                "text": "It is to discover what you must carry forward and what you must not repeat."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose most arguments ended the same way:"
              },
              {
                "type": "paragraph",
                "text": "She raised an issue."
              },
              {
                "type": "paragraph",
                "text": "You felt criticized."
              },
              {
                "type": "paragraph",
                "text": "You defended yourself."
              },
              {
                "type": "paragraph",
                "text": "She intensified."
              },
              {
                "type": "paragraph",
                "text": "You shut down."
              },
              {
                "type": "paragraph",
                "text": "She followed you or kept messaging."
              },
              {
                "type": "paragraph",
                "text": "You withdrew further."
              },
              {
                "type": "paragraph",
                "text": "Later, one of you apologized without resolving the original issue."
              },
              {
                "type": "paragraph",
                "text": "Looking only at the final argument tells you very little."
              },
              {
                "type": "paragraph",
                "text": "Looking at the repeated cycle tells you considerably more."
              },
              {
                "type": "paragraph",
                "text": "Your lesson might not be:"
              },
              {
                "type": "paragraph",
                "text": "\"I should never date an emotional woman again.\""
              },
              {
                "type": "paragraph",
                "text": "It may be:"
              },
              {
                "type": "paragraph",
                "text": "\"I interpret complaints as attacks so quickly that I stop listening before I understand what my partner is asking for.\""
              },
              {
                "type": "paragraph",
                "text": "That is actionable knowledge."
              },
              {
                "type": "steps",
                "title": "Practice — The Relationship Postmortem",
                "items": [
                  "Choose five major recurring problems.",
                  "For each, answer:",
                  "What usually triggered it?",
                  "What did she do next?",
                  "What did I feel?",
                  "What did I do?",
                  "How did my behavior affect her?",
                  "How did her behavior affect me?",
                  "How did we eventually reconnect?",
                  "Was the problem actually resolved?",
                  "Then complete:",
                  "My responsibility was...\nHer responsibility was...\nThe incompatibility neither person could fix was...\nWhat I would do differently next time is...",
                  "Keep all four statements.",
                  "Removing any one of them distorts the lesson."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Evaluate a past relationship without idealizing or demonizing it.",
                  "Use attachment concepts without turning them into blame labels.",
                  "Identify recurring relationship cycles rather than isolated arguments.",
                  "Separate personal responsibility from unnecessary self-condemnation.",
                  "Extract specific lessons that can improve future relationships."
                ]
              }
            ]
          },
          {
            "title": "Break the Contact Hope Crash Cycle",
            "subtitle": "Sometimes what feels like connection is actually repeated reopening of the wound.",
            "sourceText": "Break the Contact Hope Crash Cycle - Sometimes what feels like connection is actually repeated reopening of the wound.\n\nBreakups can produce a peculiar psychological loop.\n\nYou feel terrible.\n\nYou contact her.\n\nShe replies.\n\nYou feel relief.\n\nThe conversation gives you hope.\n\nThen she becomes distant again.\n\nYou crash.\n\nYou contact her again.\n\nFor a few minutes or hours, the anxiety decreases.\n\nThen uncertainty returns.\n\nThe pattern begins again.\n\nThe problem is not that communication with an ex is always unhealthy.\n\nThe problem is using contact primarily to regulate distress while pretending you are seeking closure.\n\nAttachment activation can make intermittent contact especially powerful. When access to a significant partner is uncertain, even small signals—one message, one like, one warm conversation—can carry disproportionately large emotional meaning.\n\nDigital life intensifies this.\n\nEarlier generations could separate physically and lose much of their access to each other's daily lives.\n\nNow you can know:\n\nwhen she was online,\n\nwhere she went,\n\nwhat she wore,\n\nwho followed her,\n\nwhich photograph she liked,\n\nwhether she watched your story.\n\nYou can technically be broken up while psychologically checking into the relationship twenty times a day.\n\nThis prevents the nervous system from receiving a consistent message:\n\nThe relationship has changed.\n\nRicho's emphasis on allowing becomes particularly relevant. If the relationship has ended, mature love requires recognizing the other person's autonomy rather than using emotional pressure to keep them relationally accessible.\n\nAnd Norwood's work, while explicitly written around women's compulsive relationship patterns, offers a broader insight worth adapting cautiously: healing requires withdrawing excessive attention from monitoring or changing another person and returning that attention to one's own recovery and life.\n\nNo-contact is therefore not a magical manipulation technique.\n\nIt should not mean:\n\n\"Disappear so she misses you.\"\n\nUsed well, distance means:\n\n\"Stop repeatedly using the person you are grieving as the primary medicine for grieving them.\"\n\nThat is a completely different objective.\n\nWhat You Are Learning\n\nYou are learning how to create boundaries around post-breakup communication.\n\nYou will distinguish:\n\nnecessary communication,\nmutual friendship later,\ngenuine reconciliation conversations,\nemotional checking,\nreassurance seeking,\njealousy monitoring,\nand disguised attempts to maintain the former relationship.\nPractical Application\n\nThere may be valid reasons to remain in contact:\n\nshared children,\n\nproperty,\n\nwork,\n\nfinances,\n\npets,\n\nor agreed practical responsibilities.\n\nIn those situations, healing does not require theatrical blocking or hostility.\n\nCommunication can become clear and functional.\n\nBut if there are no shared responsibilities and every conversation leaves you destabilized for two days, the question becomes:\n\nIs this contact helping me relate to reality—or postponing it?\n\nPractice — The 30-Day Contact Audit\n\nFor every interaction with your ex, record:\n\nWhy did I contact her?\n\nWhat was I hoping would happen?\n\nHow did I feel immediately afterward?\n\nHow did I feel six hours later?\n\nDid this interaction create clarity or uncertainty?\n\nWould I still have sent it if I knew reconciliation was impossible?\n\nThat final question is particularly revealing.\n\nIf the answer is no, the message may be less about communication and more about maintaining hope.\n\nAfter This Section, You Will Be Able To\nIdentify reassurance-seeking disguised as communication.\nRecognize social-media behaviors that maintain attachment activation.\nEstablish respectful boundaries without using silence as manipulation.\nDetermine when communication supports healing and when it interrupts it.\nProtect your recovery while respecting your former partner's autonomy.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Breakups can produce a peculiar psychological loop."
              },
              {
                "type": "paragraph",
                "text": "You feel terrible."
              },
              {
                "type": "paragraph",
                "text": "You contact her."
              },
              {
                "type": "paragraph",
                "text": "She replies."
              },
              {
                "type": "paragraph",
                "text": "You feel relief."
              },
              {
                "type": "paragraph",
                "text": "The conversation gives you hope."
              },
              {
                "type": "paragraph",
                "text": "Then she becomes distant again."
              },
              {
                "type": "paragraph",
                "text": "You crash."
              },
              {
                "type": "paragraph",
                "text": "You contact her again."
              },
              {
                "type": "paragraph",
                "text": "For a few minutes or hours, the anxiety decreases."
              },
              {
                "type": "paragraph",
                "text": "Then uncertainty returns."
              },
              {
                "type": "paragraph",
                "text": "The pattern begins again."
              },
              {
                "type": "paragraph",
                "text": "The problem is not that communication with an ex is always unhealthy."
              },
              {
                "type": "paragraph",
                "text": "The problem is using contact primarily to regulate distress while pretending you are seeking closure."
              },
              {
                "type": "paragraph",
                "text": "Attachment activation can make intermittent contact especially powerful. When access to a significant partner is uncertain, even small signals—one message, one like, one warm conversation—can carry disproportionately large emotional meaning."
              },
              {
                "type": "paragraph",
                "text": "Digital life intensifies this."
              },
              {
                "type": "paragraph",
                "text": "Earlier generations could separate physically and lose much of their access to each other's daily lives."
              },
              {
                "type": "paragraph",
                "text": "Now you can know:"
              },
              {
                "type": "paragraph",
                "text": "when she was online,"
              },
              {
                "type": "paragraph",
                "text": "where she went,"
              },
              {
                "type": "paragraph",
                "text": "what she wore,"
              },
              {
                "type": "paragraph",
                "text": "who followed her,"
              },
              {
                "type": "paragraph",
                "text": "which photograph she liked,"
              },
              {
                "type": "paragraph",
                "text": "whether she watched your story."
              },
              {
                "type": "paragraph",
                "text": "You can technically be broken up while psychologically checking into the relationship twenty times a day."
              },
              {
                "type": "paragraph",
                "text": "This prevents the nervous system from receiving a consistent message:"
              },
              {
                "type": "paragraph",
                "text": "The relationship has changed."
              },
              {
                "type": "paragraph",
                "text": "Richo's emphasis on allowing becomes particularly relevant. If the relationship has ended, mature love requires recognizing the other person's autonomy rather than using emotional pressure to keep them relationally accessible."
              },
              {
                "type": "paragraph",
                "text": "And Norwood's work, while explicitly written around women's compulsive relationship patterns, offers a broader insight worth adapting cautiously: healing requires withdrawing excessive attention from monitoring or changing another person and returning that attention to one's own recovery and life."
              },
              {
                "type": "paragraph",
                "text": "No-contact is therefore not a magical manipulation technique."
              },
              {
                "type": "paragraph",
                "text": "It should not mean:"
              },
              {
                "type": "paragraph",
                "text": "\"Disappear so she misses you.\""
              },
              {
                "type": "paragraph",
                "text": "Used well, distance means:"
              },
              {
                "type": "paragraph",
                "text": "\"Stop repeatedly using the person you are grieving as the primary medicine for grieving them.\""
              },
              {
                "type": "paragraph",
                "text": "That is a completely different objective."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning how to create boundaries around post-breakup communication."
              },
              {
                "type": "paragraph",
                "text": "You will distinguish:"
              },
              {
                "type": "paragraph",
                "text": "necessary communication,\nmutual friendship later,\ngenuine reconciliation conversations,\nemotional checking,\nreassurance seeking,\njealousy monitoring,\nand disguised attempts to maintain the former relationship.\nPractical Application"
              },
              {
                "type": "paragraph",
                "text": "There may be valid reasons to remain in contact:"
              },
              {
                "type": "paragraph",
                "text": "shared children,"
              },
              {
                "type": "paragraph",
                "text": "property,"
              },
              {
                "type": "paragraph",
                "text": "work,"
              },
              {
                "type": "paragraph",
                "text": "finances,"
              },
              {
                "type": "paragraph",
                "text": "pets,"
              },
              {
                "type": "paragraph",
                "text": "or agreed practical responsibilities."
              },
              {
                "type": "paragraph",
                "text": "In those situations, healing does not require theatrical blocking or hostility."
              },
              {
                "type": "paragraph",
                "text": "Communication can become clear and functional."
              },
              {
                "type": "paragraph",
                "text": "But if there are no shared responsibilities and every conversation leaves you destabilized for two days, the question becomes:"
              },
              {
                "type": "paragraph",
                "text": "Is this contact helping me relate to reality—or postponing it?"
              },
              {
                "type": "steps",
                "title": "Practice — The 30-Day Contact Audit",
                "items": [
                  "For every interaction with your ex, record:",
                  "Why did I contact her?",
                  "What was I hoping would happen?",
                  "How did I feel immediately afterward?",
                  "How did I feel six hours later?",
                  "Did this interaction create clarity or uncertainty?",
                  "Would I still have sent it if I knew reconciliation was impossible?",
                  "That final question is particularly revealing.",
                  "If the answer is no, the message may be less about communication and more about maintaining hope."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify reassurance-seeking disguised as communication.",
                  "Recognize social-media behaviors that maintain attachment activation.",
                  "Establish respectful boundaries without using silence as manipulation.",
                  "Determine when communication supports healing and when it interrupts it.",
                  "Protect your recovery while respecting your former partner's autonomy."
                ]
              }
            ]
          },
          {
            "title": "Become a Whole Man Again",
            "subtitle": "Do not replace the relationship. Rebuild the life around it.",
            "sourceText": "Become a Whole Man Again - Do not replace the relationship. Rebuild the life around it.\n\nThere is a stage of healing when the central problem is no longer constant heartbreak.\n\nIt is emptiness.\n\nYour phone is quieter.\n\nWeekends are different.\n\nNobody automatically asks how your day went.\n\nPlans that once involved two people now require a decision from one.\n\nThis stage can feel less dramatic than the breakup itself, but it determines whether a man genuinely rebuilds or simply searches for another person to fill the vacancy.\n\nA relationship naturally occupies space.\n\nHealthy love can become part of your identity without consuming it.\n\nBut sometimes, especially in intense or long relationships, other parts of life shrink:\n\nfriendships become weaker,\n\ninterests disappear,\n\npersonal goals become shared goals,\n\nalone time becomes unfamiliar,\n\nand emotional support becomes concentrated almost entirely in one person.\n\nWhen the relationship disappears, the reduced life becomes visible.\n\nThe answer is not exaggerated independence.\n\n\"I don't need anybody.\"\n\nThat is not the same as healing.\n\nSecure attachment does not require emotional self-sufficiency. Attached explicitly treats closeness and dependency needs as normal features of intimate relationships.\n\nThe better goal is interdependence:\n\nI can form deep bonds.\n\nI can rely on someone.\n\nI can be relied upon.\n\nAnd I remain a person with friendships, values, competence, routines, interests, and direction beyond the relationship.\n\nNorwood's recovery framework emphasizes redirecting attention away from compulsive focus on a partner and toward one's own development. Although her book addresses women specifically, that principle translates usefully here.\n\nYou are not rebuilding because you need to show your ex what she lost.\n\nYou are rebuilding because your life deserves to become larger again.\n\nWhat You Are Learning\n\nYou are learning to restore identity after romantic loss.\n\nYou will rebuild across several domains:\n\nbody — sleep, food, exercise, physical regulation.\n\npeople — friendships, family, community.\n\ncompetence — work, learning, practical ability.\n\npurpose — goals that remain meaningful without a partner.\n\nenjoyment — experiences that do not need romantic validation.\n\nsolitude — the ability to be alone without interpreting aloneness as rejection.\n\nPractical Application\n\nSuppose you start going to the gym intensely after the breakup.\n\nExercise can be excellent.\n\nBut ask why you are doing it.\n\nThere is a difference between:\n\n\"I want my body and routine to become stronger.\"\n\nand:\n\n\"I need to become so attractive that she regrets leaving me.\"\n\nThe activity is identical.\n\nThe psychological direction is opposite.\n\nOne brings your attention home.\n\nThe other keeps your entire transformation organized around her.\n\nThe same applies to career success, money, clothes, social life, or dating.\n\nIf every improvement secretly ends with:\n\n\"...so she sees what she lost,\"\n\nshe is still psychologically directing your life.\n\nPractice — The Life Reclamation Map\n\nScore your current satisfaction from 1–10 in:\n\nPhysical health\nSleep\nFriendship\nFamily connection\nCareer/work\nMoney\nLearning\nPurpose\nFun\nSolitude\nEmotional support\nRomantic readiness\n\nChoose the three weakest areas.\n\nFor each one, establish one weekly behavior for the next six weeks.\n\nThen ask:\n\nIf my ex never knew I made this improvement, would I still want it?\n\nIf yes, it probably belongs to you.\n\nAfter This Section, You Will Be Able To\nRebuild identity without using self-improvement as revenge.\nCreate emotional support beyond a romantic partner.\nDistinguish healthy interdependence from dependence and defensive isolation.\nDevelop routines that make solitude sustainable rather than threatening.\nMeasure recovery through the expansion of your life, not your ex's reaction.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "There is a stage of healing when the central problem is no longer constant heartbreak."
              },
              {
                "type": "paragraph",
                "text": "It is emptiness."
              },
              {
                "type": "paragraph",
                "text": "Your phone is quieter."
              },
              {
                "type": "paragraph",
                "text": "Weekends are different."
              },
              {
                "type": "paragraph",
                "text": "Nobody automatically asks how your day went."
              },
              {
                "type": "paragraph",
                "text": "Plans that once involved two people now require a decision from one."
              },
              {
                "type": "paragraph",
                "text": "This stage can feel less dramatic than the breakup itself, but it determines whether a man genuinely rebuilds or simply searches for another person to fill the vacancy."
              },
              {
                "type": "paragraph",
                "text": "A relationship naturally occupies space."
              },
              {
                "type": "paragraph",
                "text": "Healthy love can become part of your identity without consuming it."
              },
              {
                "type": "paragraph",
                "text": "But sometimes, especially in intense or long relationships, other parts of life shrink:"
              },
              {
                "type": "paragraph",
                "text": "friendships become weaker,"
              },
              {
                "type": "paragraph",
                "text": "interests disappear,"
              },
              {
                "type": "paragraph",
                "text": "personal goals become shared goals,"
              },
              {
                "type": "paragraph",
                "text": "alone time becomes unfamiliar,"
              },
              {
                "type": "paragraph",
                "text": "and emotional support becomes concentrated almost entirely in one person."
              },
              {
                "type": "paragraph",
                "text": "When the relationship disappears, the reduced life becomes visible."
              },
              {
                "type": "paragraph",
                "text": "The answer is not exaggerated independence."
              },
              {
                "type": "paragraph",
                "text": "\"I don't need anybody.\""
              },
              {
                "type": "paragraph",
                "text": "That is not the same as healing."
              },
              {
                "type": "paragraph",
                "text": "Secure attachment does not require emotional self-sufficiency. Attached explicitly treats closeness and dependency needs as normal features of intimate relationships."
              },
              {
                "type": "paragraph",
                "text": "The better goal is interdependence:"
              },
              {
                "type": "paragraph",
                "text": "I can form deep bonds."
              },
              {
                "type": "paragraph",
                "text": "I can rely on someone."
              },
              {
                "type": "paragraph",
                "text": "I can be relied upon."
              },
              {
                "type": "paragraph",
                "text": "And I remain a person with friendships, values, competence, routines, interests, and direction beyond the relationship."
              },
              {
                "type": "paragraph",
                "text": "Norwood's recovery framework emphasizes redirecting attention away from compulsive focus on a partner and toward one's own development. Although her book addresses women specifically, that principle translates usefully here."
              },
              {
                "type": "paragraph",
                "text": "You are not rebuilding because you need to show your ex what she lost."
              },
              {
                "type": "paragraph",
                "text": "You are rebuilding because your life deserves to become larger again."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to restore identity after romantic loss."
              },
              {
                "type": "paragraph",
                "text": "You will rebuild across several domains:"
              },
              {
                "type": "paragraph",
                "text": "body — sleep, food, exercise, physical regulation."
              },
              {
                "type": "paragraph",
                "text": "people — friendships, family, community."
              },
              {
                "type": "paragraph",
                "text": "competence — work, learning, practical ability."
              },
              {
                "type": "paragraph",
                "text": "purpose — goals that remain meaningful without a partner."
              },
              {
                "type": "paragraph",
                "text": "enjoyment — experiences that do not need romantic validation."
              },
              {
                "type": "paragraph",
                "text": "solitude — the ability to be alone without interpreting aloneness as rejection."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose you start going to the gym intensely after the breakup."
              },
              {
                "type": "paragraph",
                "text": "Exercise can be excellent."
              },
              {
                "type": "paragraph",
                "text": "But ask why you are doing it."
              },
              {
                "type": "paragraph",
                "text": "There is a difference between:"
              },
              {
                "type": "paragraph",
                "text": "\"I want my body and routine to become stronger.\""
              },
              {
                "type": "paragraph",
                "text": "and:"
              },
              {
                "type": "paragraph",
                "text": "\"I need to become so attractive that she regrets leaving me.\""
              },
              {
                "type": "paragraph",
                "text": "The activity is identical."
              },
              {
                "type": "paragraph",
                "text": "The psychological direction is opposite."
              },
              {
                "type": "paragraph",
                "text": "One brings your attention home."
              },
              {
                "type": "paragraph",
                "text": "The other keeps your entire transformation organized around her."
              },
              {
                "type": "paragraph",
                "text": "The same applies to career success, money, clothes, social life, or dating."
              },
              {
                "type": "paragraph",
                "text": "If every improvement secretly ends with:"
              },
              {
                "type": "paragraph",
                "text": "\"...so she sees what she lost,\""
              },
              {
                "type": "paragraph",
                "text": "she is still psychologically directing your life."
              },
              {
                "type": "steps",
                "title": "Practice — The Life Reclamation Map",
                "items": [
                  "Score your current satisfaction from 1–10 in:",
                  "Physical health\nSleep\nFriendship\nFamily connection\nCareer/work\nMoney\nLearning\nPurpose\nFun\nSolitude\nEmotional support\nRomantic readiness",
                  "Choose the three weakest areas.",
                  "For each one, establish one weekly behavior for the next six weeks.",
                  "Then ask:",
                  "If my ex never knew I made this improvement, would I still want it?",
                  "If yes, it probably belongs to you."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Rebuild identity without using self-improvement as revenge.",
                  "Create emotional support beyond a romantic partner.",
                  "Distinguish healthy interdependence from dependence and defensive isolation.",
                  "Develop routines that make solitude sustainable rather than threatening.",
                  "Measure recovery through the expansion of your life, not your ex's reaction."
                ]
              }
            ]
          },
          {
            "title": "Do Not Make the Next Woman Pay for the Last One",
            "subtitle": "Dating again is not proof that you healed.",
            "sourceText": "Do Not Make the Next Woman Pay for the Last One - Dating again is not proof that you healed.\n\nEventually another woman may enter your life.\n\nAnd this creates a new test.\n\nNot:\n\nCan someone else want me?\n\nBut:\n\nCan I meet someone new without making her responsible for what happened before her?\n\nUnresolved heartbreak can quietly follow a man into his next relationship.\n\nHe becomes suspicious because his ex betrayed him.\n\nHe withholds affection because vulnerability previously hurt.\n\nHe demands reassurance because he remembers being abandoned.\n\nHe compares.\n\nHe tests.\n\nHe keeps emotional distance.\n\nHe insists that he is \"protecting his peace.\"\n\nThe new partner encounters defenses created by someone she has never met.\n\nAt the opposite extreme, a man can move too quickly.\n\nA new woman's attention feels extraordinary because it temporarily neutralizes rejection.\n\nHe interprets relief as compatibility.\n\nWithin weeks, he is emotionally invested because he needs the new relationship to prove something:\n\nthat he is desirable,\n\nthat he was not the problem,\n\nthat he can replace his ex,\n\nthat he is no longer alone.\n\nNeither extreme produces good partner selection.\n\nAttached argues for evaluating availability and attachment compatibility rather than allowing chemistry alone to determine romantic decisions.\n\nTatkin's framework adds another filter: can two people actually create a secure, fair, cooperative partnership? Attraction is meaningful, but relationship capacity must eventually become observable.\n\nAnd Richo's Five A's—attention, acceptance, appreciation, affection, and allowing—provide a useful test for whether you are actually relating to the person in front of you instead of using her to repair the past.\n\nBefore asking whether she is right for you, ask:\n\nCan I see her clearly?\n\nWhat You Are Learning\n\nYou are learning how to determine whether you are emotionally ready to date.\n\nYou will evaluate new partners through:\n\navailability,\nconsistency,\nreciprocity,\nattraction,\ncompatibility,\nemotional maturity,\ncommunication,\nboundaries,\nand willingness to build security.\n\nYou will also recognize when a new relationship is functioning primarily as pain relief.\n\nPractical Application\n\nYou meet someone new.\n\nShe is attractive, warm, interested, and emotionally available.\n\nBut she does not create the same intensity your former relationship did.\n\nYou conclude:\n\n\"There's no spark.\"\n\nPause.\n\nSometimes extreme chemistry reflects compatibility.\n\nSometimes unpredictability, uncertainty, pursuit, or familiar attachment dynamics create emotional intensity that people learn to mistake for extraordinary love.\n\nA calmer connection can initially feel less compelling precisely because your nervous system is not being repeatedly activated.\n\nThis does not mean you should force attraction.\n\nIt means calm should not automatically be mistaken for boredom.\n\nPractice — The New Partner Filter\n\nBefore becoming seriously involved, evaluate:\n\nHow do I feel around her most often?\n\nCan she communicate directly?\n\nCan I communicate directly with her?\n\nIs interest reciprocal?\n\nAre words and behavior consistent?\n\nDo I respect who she is, or mainly how she makes me feel about myself?\n\nCan we disagree without punishment or disappearance?\n\nAm I comparing her to my ex?\n\nAm I rushing because I fear being alone?\n\nThen answer:\n\nIf my previous relationship had never happened, would I still choose this woman?\n\nThat question helps separate genuine attraction from rebound psychology.\n\nAfter This Section, You Will Be Able To\nRecognize signs that you are dating primarily to escape loneliness or rejection.\nEvaluate a new partner for availability and compatibility.\nAvoid transferring old suspicions and defenses onto someone new.\nDistinguish emotional intensity from secure connection.\nEnter new relationships because you are interested in the person rather than desperate for replacement.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Eventually another woman may enter your life."
              },
              {
                "type": "paragraph",
                "text": "And this creates a new test."
              },
              {
                "type": "paragraph",
                "text": "Not:"
              },
              {
                "type": "paragraph",
                "text": "Can someone else want me?"
              },
              {
                "type": "paragraph",
                "text": "But:"
              },
              {
                "type": "paragraph",
                "text": "Can I meet someone new without making her responsible for what happened before her?"
              },
              {
                "type": "paragraph",
                "text": "Unresolved heartbreak can quietly follow a man into his next relationship."
              },
              {
                "type": "paragraph",
                "text": "He becomes suspicious because his ex betrayed him."
              },
              {
                "type": "paragraph",
                "text": "He withholds affection because vulnerability previously hurt."
              },
              {
                "type": "paragraph",
                "text": "He demands reassurance because he remembers being abandoned."
              },
              {
                "type": "paragraph",
                "text": "He compares."
              },
              {
                "type": "paragraph",
                "text": "He tests."
              },
              {
                "type": "paragraph",
                "text": "He keeps emotional distance."
              },
              {
                "type": "paragraph",
                "text": "He insists that he is \"protecting his peace.\""
              },
              {
                "type": "paragraph",
                "text": "The new partner encounters defenses created by someone she has never met."
              },
              {
                "type": "paragraph",
                "text": "At the opposite extreme, a man can move too quickly."
              },
              {
                "type": "paragraph",
                "text": "A new woman's attention feels extraordinary because it temporarily neutralizes rejection."
              },
              {
                "type": "paragraph",
                "text": "He interprets relief as compatibility."
              },
              {
                "type": "paragraph",
                "text": "Within weeks, he is emotionally invested because he needs the new relationship to prove something:"
              },
              {
                "type": "paragraph",
                "text": "that he is desirable,"
              },
              {
                "type": "paragraph",
                "text": "that he was not the problem,"
              },
              {
                "type": "paragraph",
                "text": "that he can replace his ex,"
              },
              {
                "type": "paragraph",
                "text": "that he is no longer alone."
              },
              {
                "type": "paragraph",
                "text": "Neither extreme produces good partner selection."
              },
              {
                "type": "paragraph",
                "text": "Attached argues for evaluating availability and attachment compatibility rather than allowing chemistry alone to determine romantic decisions."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's framework adds another filter: can two people actually create a secure, fair, cooperative partnership? Attraction is meaningful, but relationship capacity must eventually become observable."
              },
              {
                "type": "paragraph",
                "text": "And Richo's Five A's—attention, acceptance, appreciation, affection, and allowing—provide a useful test for whether you are actually relating to the person in front of you instead of using her to repair the past."
              },
              {
                "type": "paragraph",
                "text": "Before asking whether she is right for you, ask:"
              },
              {
                "type": "paragraph",
                "text": "Can I see her clearly?"
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning how to determine whether you are emotionally ready to date."
              },
              {
                "type": "paragraph",
                "text": "You will evaluate new partners through:"
              },
              {
                "type": "paragraph",
                "text": "availability,\nconsistency,\nreciprocity,\nattraction,\ncompatibility,\nemotional maturity,\ncommunication,\nboundaries,\nand willingness to build security."
              },
              {
                "type": "paragraph",
                "text": "You will also recognize when a new relationship is functioning primarily as pain relief."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "You meet someone new."
              },
              {
                "type": "paragraph",
                "text": "She is attractive, warm, interested, and emotionally available."
              },
              {
                "type": "paragraph",
                "text": "But she does not create the same intensity your former relationship did."
              },
              {
                "type": "paragraph",
                "text": "You conclude:"
              },
              {
                "type": "paragraph",
                "text": "\"There's no spark.\""
              },
              {
                "type": "paragraph",
                "text": "Pause."
              },
              {
                "type": "paragraph",
                "text": "Sometimes extreme chemistry reflects compatibility."
              },
              {
                "type": "paragraph",
                "text": "Sometimes unpredictability, uncertainty, pursuit, or familiar attachment dynamics create emotional intensity that people learn to mistake for extraordinary love."
              },
              {
                "type": "paragraph",
                "text": "A calmer connection can initially feel less compelling precisely because your nervous system is not being repeatedly activated."
              },
              {
                "type": "paragraph",
                "text": "This does not mean you should force attraction."
              },
              {
                "type": "paragraph",
                "text": "It means calm should not automatically be mistaken for boredom."
              },
              {
                "type": "steps",
                "title": "Practice — The New Partner Filter",
                "items": [
                  "Before becoming seriously involved, evaluate:",
                  "How do I feel around her most often?",
                  "Can she communicate directly?",
                  "Can I communicate directly with her?",
                  "Is interest reciprocal?",
                  "Are words and behavior consistent?",
                  "Do I respect who she is, or mainly how she makes me feel about myself?",
                  "Can we disagree without punishment or disappearance?",
                  "Am I comparing her to my ex?",
                  "Am I rushing because I fear being alone?",
                  "Then answer:",
                  "If my previous relationship had never happened, would I still choose this woman?",
                  "That question helps separate genuine attraction from rebound psychology."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Recognize signs that you are dating primarily to escape loneliness or rejection.",
                  "Evaluate a new partner for availability and compatibility.",
                  "Avoid transferring old suspicions and defenses onto someone new.",
                  "Distinguish emotional intensity from secure connection.",
                  "Enter new relationships because you are interested in the person rather than desperate for replacement."
                ]
              }
            ]
          },
          {
            "title": "Love Differently After Goodbye",
            "subtitle": "The strongest evidence that you healed is not that you forgot her. It is that you no longer repeat what the relationship taught you to recognize.",
            "sourceText": "Love Differently After Goodbye - The strongest evidence that you healed is not that you forgot her. It is that you no longer repeat what the relationship taught you to recognize.\n\nHealing does not mean reaching a day when the relationship becomes meaningless.\n\nSome former partners remain emotionally significant long after the desire to reunite has disappeared.\n\nYou may hear a song and remember her.\n\nPass a familiar place.\n\nRemember an anniversary.\n\nWonder occasionally how her life turned out.\n\nNone of this proves that you failed to move on.\n\nHealing is better measured through freedom of response.\n\nYou can remember without needing to contact.\n\nYou can miss without abandoning the present.\n\nYou can acknowledge your mistakes without defining yourself by them.\n\nYou can recognize hers without needing punishment.\n\nYou can meet another woman without demanding that she repair what the previous relationship damaged.\n\nMost importantly, you can love with greater skill.\n\nTatkin's secure-functioning model emphasizes mutual protection, fairness, sensitivity to each partner, explicit agreements, and effective repair.\n\nAttached contributes awareness of availability, responsiveness, attachment needs, and compatibility.\n\nRicho adds mindful adulthood: attention, acceptance, appreciation, affection, allowing, healthy boundaries, and the capacity to survive endings without losing one's self.\n\nAnd Norwood's work contributes a crucial warning about allowing romantic preoccupation to consume the rest of one's life. Her book is explicitly written about women in unhealthy relationships, so its gender-specific claims should not simply be transferred to men; the broader lesson relevant here is to maintain a self beyond the relationship rather than organizing life around changing or retaining another person.\n\nTogether, these perspectives produce a more demanding definition of healing:\n\nYou are not merely recovering from a woman.\n\nYou are becoming more capable of relationship.\n\nThat means asking for what you need before resentment accumulates.\n\nGiving reassurance without feeling controlled.\n\nRequesting space without disappearing.\n\nListening without immediately defending yourself.\n\nSetting boundaries before they become explosions.\n\nRepairing after conflict.\n\nChoosing available partners.\n\nMaintaining your own life.\n\nAllowing someone to love you without expecting them to heal everything that happened before them.\n\nAnd accepting that even a meaningful relationship cannot guarantee permanence.\n\nThat last lesson may be the hardest.\n\nYou can love well and still risk loss.\n\nMaturity is not learning how to make abandonment impossible.\n\nIt is becoming capable of loving deeply without requiring certainty that you will never have to grieve again.\n\nWhat You Are Learning\n\nYou are integrating the entire course into a personal relationship philosophy.\n\nYou should now be able to recognize:\n\nwhat activates you,\n\nhow you react,\n\nwhat kind of partner fits you,\n\nwhat kind of partner you need to become,\n\nand\n\nwhich relationship behaviors you refuse to repeat.\n\nPractical Application\n\nIn a future relationship, your partner says:\n\n\"You've been distant for two days. I don't know what's going on.\"\n\nPreviously you might respond:\n\n\"I'm fine. Stop overthinking.\"\n\nNow you recognize what that response creates.\n\nA stronger answer might be:\n\n\"You're right that I've been quieter. I'm stressed about work and I've gone inward. It isn't about you. I want tonight to decompress, and tomorrow I'd like us to have dinner and reconnect.\"\n\nYou have protected both realities.\n\nYour need for space.\n\nHer need for relational clarity.\n\nThat is what healing eventually becomes:\n\nnot superior insight,\n\nbut better behavior.\n\nPractice — Your Relationship Constitution\n\nWrite one page titled:\n\nThe Man I Want to Be in Love\n\nComplete:\n\nWhen I feel abandoned, I will...\n\nWhen I feel controlled, I will...\n\nWhen I need space, I will...\n\nWhen my partner needs reassurance, I will...\n\nWhen I make a mistake, I will...\n\nWhen conflict becomes intense, I will...\n\nWhen jealousy appears, I will...\n\nWhen I notice myself withdrawing, I will...\n\nI will never again normalize...\n\nI will actively protect...\n\nThe qualities I will seek in a partner are...\n\nThe qualities I must bring to that partner are...\n\nFinally:\n\nWhat did goodbye teach me that staying together never could?\n\nYour answer is the final lesson.\n\nAfter This Section, You Will Be Able To\nConvert breakup lessons into specific future relationship behaviors.\nCommunicate needs, boundaries, reassurance, and space more securely.\nIdentify partners capable of reciprocal, emotionally available relationships.\nMaintain individuality without using independence to avoid intimacy.\nRemember a former relationship without allowing it to govern the present.\nEnter future love with greater discernment rather than greater fear.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Healing does not mean reaching a day when the relationship becomes meaningless."
              },
              {
                "type": "paragraph",
                "text": "Some former partners remain emotionally significant long after the desire to reunite has disappeared."
              },
              {
                "type": "paragraph",
                "text": "You may hear a song and remember her."
              },
              {
                "type": "paragraph",
                "text": "Pass a familiar place."
              },
              {
                "type": "paragraph",
                "text": "Remember an anniversary."
              },
              {
                "type": "paragraph",
                "text": "Wonder occasionally how her life turned out."
              },
              {
                "type": "paragraph",
                "text": "None of this proves that you failed to move on."
              },
              {
                "type": "paragraph",
                "text": "Healing is better measured through freedom of response."
              },
              {
                "type": "paragraph",
                "text": "You can remember without needing to contact."
              },
              {
                "type": "paragraph",
                "text": "You can miss without abandoning the present."
              },
              {
                "type": "paragraph",
                "text": "You can acknowledge your mistakes without defining yourself by them."
              },
              {
                "type": "paragraph",
                "text": "You can recognize hers without needing punishment."
              },
              {
                "type": "paragraph",
                "text": "You can meet another woman without demanding that she repair what the previous relationship damaged."
              },
              {
                "type": "paragraph",
                "text": "Most importantly, you can love with greater skill."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning model emphasizes mutual protection, fairness, sensitivity to each partner, explicit agreements, and effective repair."
              },
              {
                "type": "paragraph",
                "text": "Attached contributes awareness of availability, responsiveness, attachment needs, and compatibility."
              },
              {
                "type": "paragraph",
                "text": "Richo adds mindful adulthood: attention, acceptance, appreciation, affection, allowing, healthy boundaries, and the capacity to survive endings without losing one's self."
              },
              {
                "type": "paragraph",
                "text": "And Norwood's work contributes a crucial warning about allowing romantic preoccupation to consume the rest of one's life. Her book is explicitly written about women in unhealthy relationships, so its gender-specific claims should not simply be transferred to men; the broader lesson relevant here is to maintain a self beyond the relationship rather than organizing life around changing or retaining another person."
              },
              {
                "type": "paragraph",
                "text": "Together, these perspectives produce a more demanding definition of healing:"
              },
              {
                "type": "paragraph",
                "text": "You are not merely recovering from a woman."
              },
              {
                "type": "paragraph",
                "text": "You are becoming more capable of relationship."
              },
              {
                "type": "paragraph",
                "text": "That means asking for what you need before resentment accumulates."
              },
              {
                "type": "paragraph",
                "text": "Giving reassurance without feeling controlled."
              },
              {
                "type": "paragraph",
                "text": "Requesting space without disappearing."
              },
              {
                "type": "paragraph",
                "text": "Listening without immediately defending yourself."
              },
              {
                "type": "paragraph",
                "text": "Setting boundaries before they become explosions."
              },
              {
                "type": "paragraph",
                "text": "Repairing after conflict."
              },
              {
                "type": "paragraph",
                "text": "Choosing available partners."
              },
              {
                "type": "paragraph",
                "text": "Maintaining your own life."
              },
              {
                "type": "paragraph",
                "text": "Allowing someone to love you without expecting them to heal everything that happened before them."
              },
              {
                "type": "paragraph",
                "text": "And accepting that even a meaningful relationship cannot guarantee permanence."
              },
              {
                "type": "paragraph",
                "text": "That last lesson may be the hardest."
              },
              {
                "type": "paragraph",
                "text": "You can love well and still risk loss."
              },
              {
                "type": "paragraph",
                "text": "Maturity is not learning how to make abandonment impossible."
              },
              {
                "type": "paragraph",
                "text": "It is becoming capable of loving deeply without requiring certainty that you will never have to grieve again."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are integrating the entire course into a personal relationship philosophy."
              },
              {
                "type": "paragraph",
                "text": "You should now be able to recognize:"
              },
              {
                "type": "paragraph",
                "text": "what activates you,"
              },
              {
                "type": "paragraph",
                "text": "how you react,"
              },
              {
                "type": "paragraph",
                "text": "what kind of partner fits you,"
              },
              {
                "type": "paragraph",
                "text": "what kind of partner you need to become,"
              },
              {
                "type": "paragraph",
                "text": "and"
              },
              {
                "type": "paragraph",
                "text": "which relationship behaviors you refuse to repeat."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "In a future relationship, your partner says:"
              },
              {
                "type": "paragraph",
                "text": "\"You've been distant for two days. I don't know what's going on.\""
              },
              {
                "type": "paragraph",
                "text": "Previously you might respond:"
              },
              {
                "type": "paragraph",
                "text": "\"I'm fine. Stop overthinking.\""
              },
              {
                "type": "paragraph",
                "text": "Now you recognize what that response creates."
              },
              {
                "type": "paragraph",
                "text": "A stronger answer might be:"
              },
              {
                "type": "paragraph",
                "text": "\"You're right that I've been quieter. I'm stressed about work and I've gone inward. It isn't about you. I want tonight to decompress, and tomorrow I'd like us to have dinner and reconnect.\""
              },
              {
                "type": "paragraph",
                "text": "You have protected both realities."
              },
              {
                "type": "paragraph",
                "text": "Your need for space."
              },
              {
                "type": "paragraph",
                "text": "Her need for relational clarity."
              },
              {
                "type": "paragraph",
                "text": "That is what healing eventually becomes:"
              },
              {
                "type": "paragraph",
                "text": "not superior insight,"
              },
              {
                "type": "paragraph",
                "text": "but better behavior."
              },
              {
                "type": "steps",
                "title": "Practice — Your Relationship Constitution",
                "items": [
                  "Write one page titled:",
                  "The Man I Want to Be in Love",
                  "Complete:",
                  "When I feel abandoned, I will...",
                  "When I feel controlled, I will...",
                  "When I need space, I will...",
                  "When my partner needs reassurance, I will...",
                  "When I make a mistake, I will...",
                  "When conflict becomes intense, I will...",
                  "When jealousy appears, I will...",
                  "When I notice myself withdrawing, I will...",
                  "I will never again normalize...",
                  "I will actively protect...",
                  "The qualities I will seek in a partner are...",
                  "The qualities I must bring to that partner are...",
                  "Finally:",
                  "What did goodbye teach me that staying together never could?",
                  "Your answer is the final lesson."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Convert breakup lessons into specific future relationship behaviors.",
                  "Communicate needs, boundaries, reassurance, and space more securely.",
                  "Identify partners capable of reciprocal, emotionally available relationships.",
                  "Maintain individuality without using independence to avoid intimacy.",
                  "Remember a former relationship without allowing it to govern the present.",
                  "Enter future love with greater discernment rather than greater fear."
                ]
              }
            ]
          },
          {
            "title": "Wrap Up",
            "subtitle": "Your Transformation",
            "sourceText": "Wrap Up - Your Transformation - After completing How Men Heal After Goodbye, healing should no longer mean simply reaching the point where you stop thinking about her.\n\nYou should be able to understand why the loss affected you the way it did, distinguish attachment panic from genuine relational decisions, grieve both the person and the future you expected, examine the relationship without either idealizing or demonizing it, establish boundaries around contact, rebuild a life that does not depend on romantic validation, and recognize when you are genuinely ready for somebody new.\n\nMost importantly, the breakup should become information rather than identity.\n\nYou do not need to become colder because love hurt.\n\nYou need to become more discerning about whom you choose, more honest about what you need, more responsible for how you behave when frightened, and more capable of maintaining yourself while becoming deeply attached to someone else.\n\nThat is a stronger measure of recovery than forgetting her:\n\nthe next time you love, you know how to love without abandoning yourself—or the person beside you.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "After completing How Men Heal After Goodbye, healing should no longer mean simply reaching the point where you stop thinking about her."
              },
              {
                "type": "paragraph",
                "text": "You should be able to understand why the loss affected you the way it did, distinguish attachment panic from genuine relational decisions, grieve both the person and the future you expected, examine the relationship without either idealizing or demonizing it, establish boundaries around contact, rebuild a life that does not depend on romantic validation, and recognize when you are genuinely ready for somebody new."
              },
              {
                "type": "paragraph",
                "text": "Most importantly, the breakup should become information rather than identity."
              },
              {
                "type": "paragraph",
                "text": "You do not need to become colder because love hurt."
              },
              {
                "type": "paragraph",
                "text": "You need to become more discerning about whom you choose, more honest about what you need, more responsible for how you behave when frightened, and more capable of maintaining yourself while becoming deeply attached to someone else."
              },
              {
                "type": "paragraph",
                "text": "That is a stronger measure of recovery than forgetting her:"
              },
              {
                "type": "paragraph",
                "text": "the next time you love, you know how to love without abandoning yourself—or the person beside you."
              }
            ]
          }
        ]
      }
    ]
  },
  'art-of-romance': {
    "outcomes": [
      "Create small rituals that make everyday connection feel intentional.",
      "Choose thoughtful gestures that carry personal meaning.",
      "Design date nights around attention and connection."
    ],
    "sections": [
      {
        "title": "Lessons",
        "lessons": [
          {
            "title": "When the Old Way Stops Working",
            "subtitle": "Before creating new agreements, discover what the relationship has been silently teaching both of you to expect.",
            "sourceText": "When the Old Way Stops Working - Before creating new agreements, discover what the relationship has been silently teaching both of you to expect.\n\nMany couples do not consciously decide how their relationship will function. They develop habits, and those habits gradually become unwritten rules.\n\nOne person always initiates difficult conversations. The other is expected to calm things down afterward. One partner makes most of the plans. The other assumes that silence means everything is fine. One person sacrifices personal time to maintain closeness, while the other begins to experience that sacrifice as normal.\n\nThese arrangements may work temporarily. But when circumstances change or resentment accumulates, the couple discovers that they have been living according to expectations neither person explicitly agreed to.\n\nThe first task is therefore not to create more rules. It is to understand the existing system.\n\nTatkin's secure-functioning approach is especially relevant because it examines the relationship as a cooperative two-person system rather than simply asking which individual is right. A couple needs to understand how its habits affect mutual safety, fairness, and the ability to work together. Richo similarly emphasizes responsibility, truthful engagement, and addressing conflicts rather than allowing unresolved patterns to continue indefinitely.\n\nConsider a common example. One partner raises a concern. The other experiences it as criticism and withdraws. The first person becomes more anxious and pursues the conversation. The second feels overwhelmed and withdraws further. Eventually one apologizes simply to end the tension, and the relationship returns to normal without resolving the original issue.\n\nThe couple may describe the problem as “we argue too much.” But the deeper problem is that their method of handling disagreement repeatedly creates the next disagreement.\n\nA new relationship agreement will fail if it addresses only the visible behavior while ignoring the cycle beneath it. “We will stop arguing” is not a workable agreement. “When either of us becomes overwhelmed, we will pause the conversation and agree on a time to return to it” is considerably more useful.\n\nThere is also an important distinction between a relationship that needs adjustment and one in which a partner is being harmed. Ordinary differences, poor communication, and changing needs can often be addressed through mutual agreements. Violence, coercive control, intimidation, or fear of retaliation require a safety-focused response and appropriate professional support—not a negotiation exercise that assumes both people have equal freedom to participate.\n\nWhat You Are Learning\n\nYou are learning to diagnose relationship patterns before attempting to change them. You will distinguish individual incidents from recurring systems, identify unwritten expectations, and recognize the difference between a problem that can be negotiated and a situation that requires a more serious response.\n\nThe central capability is moving from “Who keeps causing this?” to “What repeatedly happens between us, and what would have to change?”\n\nPractical Application\n\nImagine you and your partner both work demanding schedules. You assume that time together should happen spontaneously. Your partner expects you to make plans in advance. Neither expectation is unreasonable, but neither has been communicated clearly.\n\nEventually your partner says, “You never make time for me.” You respond, “You know how busy I am.” The argument becomes about whether you care, even though the practical problem concerns how you organize time.\n\nThe new rule should not be “You must spend more time with me.” It might be: “Every Sunday, we will compare our schedules and choose at least one period of uninterrupted time together that works for both of us.”\n\nThe agreement addresses the actual system rather than the accusation.\n\nPractice — The Unwritten Rules Audit\n\nChoose three recurring relationship problems. For each one, write what usually happens, what each partner appears to expect, what each person does when disappointed, and how the issue is temporarily resolved.\n\nThen identify the unwritten rule beneath the pattern. For example: “The person who wants closeness must always initiate it,” or “Whoever becomes upset first determines when the conversation ends.”\n\nRewrite each unwritten rule into a question for discussion: “What would a fairer and more reliable arrangement look like for both of us?”\n\nIf you are completing the exercise together, compare your answers without debating which version is correct. The purpose is to discover where your experiences differ.\n\nAfter This Section, You Will Be Able To\nIdentify recurring relationship cycles rather than focusing only on isolated arguments.\nRecognize unwritten expectations that create resentment or confusion.\nDistinguish negotiable relationship problems from situations involving serious safety concerns.\nDescribe a relationship problem in behavioral terms rather than through blame.\nIdentify which existing habits need to be replaced before creating new agreements.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Many couples do not consciously decide how their relationship will function. They develop habits, and those habits gradually become unwritten rules."
              },
              {
                "type": "paragraph",
                "text": "One person always initiates difficult conversations. The other is expected to calm things down afterward. One partner makes most of the plans. The other assumes that silence means everything is fine. One person sacrifices personal time to maintain closeness, while the other begins to experience that sacrifice as normal."
              },
              {
                "type": "paragraph",
                "text": "These arrangements may work temporarily. But when circumstances change or resentment accumulates, the couple discovers that they have been living according to expectations neither person explicitly agreed to."
              },
              {
                "type": "paragraph",
                "text": "The first task is therefore not to create more rules. It is to understand the existing system."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach is especially relevant because it examines the relationship as a cooperative two-person system rather than simply asking which individual is right. A couple needs to understand how its habits affect mutual safety, fairness, and the ability to work together. Richo similarly emphasizes responsibility, truthful engagement, and addressing conflicts rather than allowing unresolved patterns to continue indefinitely."
              },
              {
                "type": "paragraph",
                "text": "Consider a common example. One partner raises a concern. The other experiences it as criticism and withdraws. The first person becomes more anxious and pursues the conversation. The second feels overwhelmed and withdraws further. Eventually one apologizes simply to end the tension, and the relationship returns to normal without resolving the original issue."
              },
              {
                "type": "paragraph",
                "text": "The couple may describe the problem as “we argue too much.” But the deeper problem is that their method of handling disagreement repeatedly creates the next disagreement."
              },
              {
                "type": "paragraph",
                "text": "A new relationship agreement will fail if it addresses only the visible behavior while ignoring the cycle beneath it. “We will stop arguing” is not a workable agreement. “When either of us becomes overwhelmed, we will pause the conversation and agree on a time to return to it” is considerably more useful."
              },
              {
                "type": "paragraph",
                "text": "There is also an important distinction between a relationship that needs adjustment and one in which a partner is being harmed. Ordinary differences, poor communication, and changing needs can often be addressed through mutual agreements. Violence, coercive control, intimidation, or fear of retaliation require a safety-focused response and appropriate professional support—not a negotiation exercise that assumes both people have equal freedom to participate."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to diagnose relationship patterns before attempting to change them. You will distinguish individual incidents from recurring systems, identify unwritten expectations, and recognize the difference between a problem that can be negotiated and a situation that requires a more serious response."
              },
              {
                "type": "paragraph",
                "text": "The central capability is moving from “Who keeps causing this?” to “What repeatedly happens between us, and what would have to change?”"
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine you and your partner both work demanding schedules. You assume that time together should happen spontaneously. Your partner expects you to make plans in advance. Neither expectation is unreasonable, but neither has been communicated clearly."
              },
              {
                "type": "paragraph",
                "text": "Eventually your partner says, “You never make time for me.” You respond, “You know how busy I am.” The argument becomes about whether you care, even though the practical problem concerns how you organize time."
              },
              {
                "type": "paragraph",
                "text": "The new rule should not be “You must spend more time with me.” It might be: “Every Sunday, we will compare our schedules and choose at least one period of uninterrupted time together that works for both of us.”"
              },
              {
                "type": "paragraph",
                "text": "The agreement addresses the actual system rather than the accusation."
              },
              {
                "type": "worksheet",
                "title": "Practice — The Unwritten Rules Audit",
                "instructions": "Choose three recurring relationship problems. For each one, write what usually happens, what each partner appears to expect, what each person does when disappointed, and how the issue is temporarily resolved.",
                "steps": [
                  "Then identify the unwritten rule beneath the pattern. For example: “The person who wants closeness must always initiate it,” or “Whoever becomes upset first determines when the conversation ends.”",
                  "Rewrite each unwritten rule into a question for discussion: “What would a fairer and more reliable arrangement look like for both of us?”",
                  "If you are completing the exercise together, compare your answers without debating which version is correct. The purpose is to discover where your experiences differ."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify recurring relationship cycles rather than focusing only on isolated arguments.",
                  "Recognize unwritten expectations that create resentment or confusion.",
                  "Distinguish negotiable relationship problems from situations involving serious safety concerns.",
                  "Describe a relationship problem in behavioral terms rather than through blame.",
                  "Identify which existing habits need to be replaced before creating new agreements."
                ]
              }
            ]
          },
          {
            "title": "Understand the Need Beneath the Reaction",
            "subtitle": "The same behavior can mean different things to two people",
            "sourceText": "Understand the Need Beneath the Reaction - The same behavior can mean different things to two people—and those meanings often determine the argument.\n\nA relationship cannot be redesigned effectively if partners understand only what the other person does, but not what the behavior means to them.\n\nOne person asks for more contact because it helps them feel connected. The other hears the request as evidence that their independence is being restricted. One partner needs a period of quiet after work. The other interprets the silence as emotional rejection.\n\nThe disagreement is no longer simply about messages, time, or conversation. It has become a disagreement about security and freedom.\n\nAttached provides a useful framework for recognizing how attachment-related needs and responses influence adult relationships. Some people become especially sensitive to signs of distance or uncertainty. Others become uncomfortable when closeness feels demanding or when they fear losing autonomy. These tendencies are not fixed diagnoses, and they should not be used to excuse harmful behavior or assign one partner all the responsibility.\n\nRicho's work adds an important developmental perspective. Present situations can activate older emotional experiences, making a relatively small event feel much larger than it appears from the outside. Understanding this does not mean every problem is caused by childhood, nor does it mean a partner should be expected to repair all earlier wounds. It means that both people benefit from distinguishing the present issue from the additional meaning they bring to it.\n\nFor example, “You did not reply for four hours” is an observation. “You do not care about me” is an interpretation. “I felt anxious because I did not know whether we were okay” describes an experience. “I need more predictable communication” identifies a need that can be discussed.\n\nThese distinctions make cooperation possible.\n\nThe aim is not to require partners to explain every feeling perfectly. It is to become curious enough to ask what is happening beneath the reaction before deciding how to respond.\n\nWhat You Are Learning\n\nYou are learning to distinguish observations, interpretations, emotions, and needs. You will recognize your own responses to closeness and distance and learn how to ask about your partner's experience without assuming you already know what their behavior means.\n\nYou will also learn that understanding a need does not automatically require agreeing to every request. A relationship must make room for both people's needs, including the possibility that some differences require negotiation or reveal genuine incompatibility.\n\nPractical Application\n\nYour partner becomes quiet after a difficult day. You immediately ask whether something is wrong between you. They say they need space. You feel rejected and continue asking questions. They become irritated.\n\nA more useful conversation might happen later:\n\n“When you become quiet without telling me what is happening, I sometimes assume we have a problem. I know that may not be what you intend. Could you let me know when you need time to decompress and when we can reconnect?”\n\nYour partner might respond:\n\n“I can do that. I also need you to believe me when I say I need an hour alone rather than continuing to ask whether I am upset with you.”\n\nThe new agreement protects both reassurance and autonomy.\n\nPractice — The Meaning Beneath the Moment\n\nChoose one recent disagreement and complete the following separately:\n\nWhat happened?\n\nWhat did I assume it meant?\n\nWhat emotion did that interpretation create?\n\nWhat was I actually needing?\n\nHow did I respond?\n\nWhat might my partner have been experiencing?\n\nThen write a request that addresses the need without accusing the other person of having a particular intention.\n\nIf completing the exercise together, each person should explain their own experience before responding to the other's. The goal is not immediate agreement, but more accurate understanding.\n\nAfter This Section, You Will Be Able To\nSeparate observable behavior from assumptions about a partner's intentions.\nIdentify attachment-related needs and reactions without using labels as accusations.\nExplain your emotional experience without making your partner responsible for every feeling.\nAsk questions that clarify what your partner actually needs.\nDevelop requests that consider both connection and autonomy.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "and those meanings often determine the argument."
              },
              {
                "type": "paragraph",
                "text": "A relationship cannot be redesigned effectively if partners understand only what the other person does, but not what the behavior means to them."
              },
              {
                "type": "paragraph",
                "text": "One person asks for more contact because it helps them feel connected. The other hears the request as evidence that their independence is being restricted. One partner needs a period of quiet after work. The other interprets the silence as emotional rejection."
              },
              {
                "type": "paragraph",
                "text": "The disagreement is no longer simply about messages, time, or conversation. It has become a disagreement about security and freedom."
              },
              {
                "type": "paragraph",
                "text": "Attached provides a useful framework for recognizing how attachment-related needs and responses influence adult relationships. Some people become especially sensitive to signs of distance or uncertainty. Others become uncomfortable when closeness feels demanding or when they fear losing autonomy. These tendencies are not fixed diagnoses, and they should not be used to excuse harmful behavior or assign one partner all the responsibility."
              },
              {
                "type": "paragraph",
                "text": "Richo's work adds an important developmental perspective. Present situations can activate older emotional experiences, making a relatively small event feel much larger than it appears from the outside. Understanding this does not mean every problem is caused by childhood, nor does it mean a partner should be expected to repair all earlier wounds. It means that both people benefit from distinguishing the present issue from the additional meaning they bring to it."
              },
              {
                "type": "paragraph",
                "text": "For example, “You did not reply for four hours” is an observation. “You do not care about me” is an interpretation. “I felt anxious because I did not know whether we were okay” describes an experience. “I need more predictable communication” identifies a need that can be discussed."
              },
              {
                "type": "paragraph",
                "text": "These distinctions make cooperation possible."
              },
              {
                "type": "paragraph",
                "text": "The aim is not to require partners to explain every feeling perfectly. It is to become curious enough to ask what is happening beneath the reaction before deciding how to respond."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish observations, interpretations, emotions, and needs. You will recognize your own responses to closeness and distance and learn how to ask about your partner's experience without assuming you already know what their behavior means."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that understanding a need does not automatically require agreeing to every request. A relationship must make room for both people's needs, including the possibility that some differences require negotiation or reveal genuine incompatibility."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Your partner becomes quiet after a difficult day. You immediately ask whether something is wrong between you. They say they need space. You feel rejected and continue asking questions. They become irritated."
              },
              {
                "type": "paragraph",
                "text": "A more useful conversation might happen later:"
              },
              {
                "type": "paragraph",
                "text": "“When you become quiet without telling me what is happening, I sometimes assume we have a problem. I know that may not be what you intend. Could you let me know when you need time to decompress and when we can reconnect?”"
              },
              {
                "type": "paragraph",
                "text": "Your partner might respond:"
              },
              {
                "type": "paragraph",
                "text": "“I can do that. I also need you to believe me when I say I need an hour alone rather than continuing to ask whether I am upset with you.”"
              },
              {
                "type": "paragraph",
                "text": "The new agreement protects both reassurance and autonomy."
              },
              {
                "type": "worksheet",
                "title": "Practice — The Meaning Beneath the Moment",
                "instructions": "Choose one recent disagreement and complete the following separately:",
                "steps": [
                  "What happened?",
                  "What did I assume it meant?",
                  "What emotion did that interpretation create?",
                  "What was I actually needing?",
                  "How did I respond?",
                  "What might my partner have been experiencing?",
                  "Then write a request that addresses the need without accusing the other person of having a particular intention.",
                  "If completing the exercise together, each person should explain their own experience before responding to the other's. The goal is not immediate agreement, but more accurate understanding."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Separate observable behavior from assumptions about a partner's intentions.",
                  "Identify attachment-related needs and reactions without using labels as accusations.",
                  "Explain your emotional experience without making your partner responsible for every feeling.",
                  "Ask questions that clarify what your partner actually needs.",
                  "Develop requests that consider both connection and autonomy."
                ]
              }
            ]
          },
          {
            "title": "Replace Assumptions With Agreements",
            "subtitle": "A useful relationship rule is a promise both people understand, freely accept, and can realistically keep.",
            "sourceText": "Replace Assumptions With Agreements - A useful relationship rule is a promise both people understand, freely accept, and can realistically keep.\n\nMany relationship conflicts arise from expectations that are important but never explicitly discussed.\n\nWhat counts as appropriate contact with an ex-partner? How should money be managed? How much privacy should each person have? What happens when someone needs space during an argument? How should family obligations be balanced with couple time? What does exclusivity mean? How do partners handle friendships, social media, or major decisions?\n\nThere is no single arrangement that works for every couple. What matters is whether the arrangement is clear, mutual, respectful, and compatible with both people's values.\n\nTatkin's secure-functioning approach emphasizes co-created agreements and a shared relationship structure. His work also makes clear that couples can organize their lives around different priorities, provided they are genuinely honest and mutually agree about those priorities. The purpose is not to impose one universal relationship model, but to create a functioning alliance.\n\nThis is where the word rules needs careful handling.\n\nA rule should not mean that one person gains authority over the other's ordinary life. A healthy agreement is not a license to monitor, threaten, isolate, or punish a partner. It is a mutual commitment concerning how the relationship will function.\n\nFor example, “You are not allowed to have friends I dislike” is a controlling demand. “We will discuss situations that create genuine concerns about boundaries or fidelity, and we will not use friendships to conceal romantic or sexual involvement outside our agreement” is a more specific relationship commitment.\n\nSimilarly, “You must answer every message immediately” is unrealistic and restrictive. “If one of us will be unavailable for an extended period, we will communicate that when reasonably possible” is a practical agreement.\n\nAn effective agreement should answer four questions: What are we agreeing to? Why does it matter? What will we do when circumstances prevent us from following it? How will we revisit it?\n\nThis prevents agreements from becoming vague promises that sound reassuring but cannot be evaluated.\n\nWhat You Are Learning\n\nYou are learning to design relationship agreements that are specific, reciprocal, and realistic. You will distinguish boundaries from shared commitments, identify expectations that need explicit discussion, and recognize when an agreement is being used to create security versus when it is being used to control.\n\nYou will also learn that an agreement is not genuinely mutual merely because one person says yes. Both partners must have meaningful freedom to express concerns, negotiate, and decline arrangements they cannot accept.\n\nPractical Application\n\nSuppose one partner is uncomfortable with the other's frequent private communication with a former romantic partner. Instead of arguing about whether the concern is “jealous” or whether the contact is “harmless,” the couple can discuss the actual circumstances.\n\nWhat is the nature of the contact? Are there shared responsibilities? What boundaries already exist? What would transparency look like without turning into surveillance? What arrangement would both people consider respectful?\n\nThe eventual agreement may differ from another couple's. The important point is that it is based on mutual understanding rather than one person's anxiety or the other's unilateral decision.\n\nPractice — The Relationship Agreement Canvas\n\nChoose three areas where expectations are unclear. For each, complete:\n\nThe issue we need to address is...\n\nWhy it matters to each of us...\n\nWhat we are both willing to commit to...\n\nWhat remains an individual choice...\n\nWhat we will do if the agreement cannot be kept...\n\nWhen we will review it...\n\nThen test the agreement against three questions: Is it fair to both people? Is it realistic in ordinary life? Can either person raise a concern without fear of punishment?\n\nRevise any agreement that fails those tests.\n\nAfter This Section, You Will Be Able To\nIdentify relationship expectations that require explicit agreements.\nDistinguish mutual commitments from controlling demands.\nCreate specific agreements concerning communication, time, privacy, and other relevant areas.\nNegotiate differences without assuming one partner's preference must automatically prevail.\nEstablish a process for revisiting agreements as circumstances change.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Many relationship conflicts arise from expectations that are important but never explicitly discussed."
              },
              {
                "type": "paragraph",
                "text": "What counts as appropriate contact with an ex-partner? How should money be managed? How much privacy should each person have? What happens when someone needs space during an argument? How should family obligations be balanced with couple time? What does exclusivity mean? How do partners handle friendships, social media, or major decisions?"
              },
              {
                "type": "paragraph",
                "text": "There is no single arrangement that works for every couple. What matters is whether the arrangement is clear, mutual, respectful, and compatible with both people's values."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach emphasizes co-created agreements and a shared relationship structure. His work also makes clear that couples can organize their lives around different priorities, provided they are genuinely honest and mutually agree about those priorities. The purpose is not to impose one universal relationship model, but to create a functioning alliance."
              },
              {
                "type": "paragraph",
                "text": "This is where the word rules needs careful handling."
              },
              {
                "type": "paragraph",
                "text": "A rule should not mean that one person gains authority over the other's ordinary life. A healthy agreement is not a license to monitor, threaten, isolate, or punish a partner. It is a mutual commitment concerning how the relationship will function."
              },
              {
                "type": "paragraph",
                "text": "For example, “You are not allowed to have friends I dislike” is a controlling demand. “We will discuss situations that create genuine concerns about boundaries or fidelity, and we will not use friendships to conceal romantic or sexual involvement outside our agreement” is a more specific relationship commitment."
              },
              {
                "type": "paragraph",
                "text": "Similarly, “You must answer every message immediately” is unrealistic and restrictive. “If one of us will be unavailable for an extended period, we will communicate that when reasonably possible” is a practical agreement."
              },
              {
                "type": "paragraph",
                "text": "An effective agreement should answer four questions: What are we agreeing to? Why does it matter? What will we do when circumstances prevent us from following it? How will we revisit it?"
              },
              {
                "type": "paragraph",
                "text": "This prevents agreements from becoming vague promises that sound reassuring but cannot be evaluated."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to design relationship agreements that are specific, reciprocal, and realistic. You will distinguish boundaries from shared commitments, identify expectations that need explicit discussion, and recognize when an agreement is being used to create security versus when it is being used to control."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that an agreement is not genuinely mutual merely because one person says yes. Both partners must have meaningful freedom to express concerns, negotiate, and decline arrangements they cannot accept."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose one partner is uncomfortable with the other's frequent private communication with a former romantic partner. Instead of arguing about whether the concern is “jealous” or whether the contact is “harmless,” the couple can discuss the actual circumstances."
              },
              {
                "type": "paragraph",
                "text": "What is the nature of the contact? Are there shared responsibilities? What boundaries already exist? What would transparency look like without turning into surveillance? What arrangement would both people consider respectful?"
              },
              {
                "type": "paragraph",
                "text": "The eventual agreement may differ from another couple's. The important point is that it is based on mutual understanding rather than one person's anxiety or the other's unilateral decision."
              },
              {
                "type": "worksheet",
                "title": "Practice — The Relationship Agreement Canvas",
                "instructions": "Choose three areas where expectations are unclear. For each, complete:",
                "steps": [
                  "The issue we need to address is...",
                  "Why it matters to each of us...",
                  "What we are both willing to commit to...",
                  "What remains an individual choice...",
                  "What we will do if the agreement cannot be kept...",
                  "When we will review it...",
                  "Then test the agreement against three questions: Is it fair to both people? Is it realistic in ordinary life? Can either person raise a concern without fear of punishment?",
                  "Revise any agreement that fails those tests."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify relationship expectations that require explicit agreements.",
                  "Distinguish mutual commitments from controlling demands.",
                  "Create specific agreements concerning communication, time, privacy, and other relevant areas.",
                  "Negotiate differences without assuming one partner's preference must automatically prevail.",
                  "Establish a process for revisiting agreements as circumstances change."
                ]
              }
            ]
          },
          {
            "title": "Repair the Pattern, Not Just the Argument",
            "subtitle": "An apology can end a conversation. Repair changes what happens the next time.",
            "sourceText": "Repair the Pattern, Not Just the Argument - An apology can end a conversation. Repair changes what happens the next time.\n\nCouples often believe they have resolved a problem because the emotional intensity has passed.\n\nThey apologize. They become affectionate again. They agree to “communicate better.” For a few days, everything feels normal. Then the same situation occurs and the same argument returns.\n\nThe problem is not necessarily that the apology was insincere. It may be that the couple repaired the immediate emotional rupture without changing the conditions that repeatedly produce it.\n\nTatkin's work emphasizes managing disagreements, creating safety, and repairing relational ruptures. Richo describes adult relationship work as addressing, processing, and resolving conflicts rather than simply avoiding them.\n\nA useful repair process therefore needs several stages.\n\nFirst, both people must become sufficiently regulated to participate. A conversation conducted while one person is overwhelmed may produce more injury than understanding. Taking a break can be helpful when it includes a clear commitment to return, rather than becoming a way to escape accountability.\n\nSecond, the couple needs to identify what actually happened. This includes distinguishing the event from the interpretation and allowing both people to describe their experience.\n\nThird, responsibility must be specific. “I'm sorry you feel that way” may acknowledge distress without addressing behavior. A more meaningful apology identifies the action, recognizes its impact, and explains what will change.\n\nFourth, the couple needs an agreement that can be observed in future situations.\n\nFor example, “I will stop shutting down” is vague. “When I feel overwhelmed, I will tell you I need a break and agree on a time to return to the conversation” is behavioral.\n\nTrust requires additional care. When an agreement has been seriously broken, the injured partner may need more than an apology. They may need truthful information, acknowledgment of the impact, a clear end to the harmful behavior, and sustained evidence that the new agreement is being honored. Forgiveness cannot be demanded as proof that repair is working.\n\nNorwood's work also offers a useful caution: one partner cannot carry the entire repair process by repeatedly explaining, forgiving, rescuing, or managing the other's behavior. Genuine repair requires participation from the person whose behavior needs to change.\n\nSerious betrayal, coercion, violence, or untreated addiction may require professional support or a different course of action. A general relationship course should not imply that every situation can be repaired through better communication.\n\nWhat You Are Learning\n\nYou are learning to distinguish emotional reconciliation from actual problem resolution. You will practice taking responsibility, identifying the behavior that needs to change, and creating repair agreements that can be evaluated over time.\n\nYou will also learn to recognize when repair is mutual and when one person is being asked to repeatedly absorb the consequences of the other's behavior.\n\nPractical Application\n\nImagine one partner repeatedly agrees to important plans and then cancels at the last minute. After each cancellation, they apologize and explain that work became unexpectedly demanding.\n\nA more effective repair conversation would examine the pattern. Are the commitments unrealistic? Is the partner agreeing because they dislike disappointing the other person? Are work boundaries unclear? What kind of notice is possible? Which plans need to be protected?\n\nThe new agreement might involve making fewer commitments, confirming availability before promising, and communicating changes as soon as they become known. The injured partner can then evaluate whether reliability improves rather than relying on the emotional sincerity of each apology.\n\nPractice — The Repair-to-Change Worksheet\n\nChoose one recurring conflict and write:\n\nThe specific behavior that caused harm was...\n\nThe impact on the other person was...\n\nMy contribution was...\n\nThe pattern that makes this likely to happen again is...\n\nThe behavior we will practice instead is...\n\nHow we will recognize improvement is...\n\nWhat we will do if the pattern returns is...\n\nIf the issue involves a serious breach of trust, do not use the worksheet to pressure the injured partner toward forgiveness. Use it to clarify accountability and determine whether appropriate professional support is needed.\n\nAfter This Section, You Will Be Able To\nDistinguish an apology from sustained behavioral repair.\nIdentify the recurring conditions that produce a conflict.\nTake responsibility without becoming defensive or accepting blame for everything.\nCreate observable agreements for handling future disagreements.\nEvaluate whether trust is being rebuilt through consistent behavior rather than promises alone.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Couples often believe they have resolved a problem because the emotional intensity has passed."
              },
              {
                "type": "paragraph",
                "text": "They apologize. They become affectionate again. They agree to “communicate better.” For a few days, everything feels normal. Then the same situation occurs and the same argument returns."
              },
              {
                "type": "paragraph",
                "text": "The problem is not necessarily that the apology was insincere. It may be that the couple repaired the immediate emotional rupture without changing the conditions that repeatedly produce it."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's work emphasizes managing disagreements, creating safety, and repairing relational ruptures. Richo describes adult relationship work as addressing, processing, and resolving conflicts rather than simply avoiding them."
              },
              {
                "type": "paragraph",
                "text": "A useful repair process therefore needs several stages."
              },
              {
                "type": "paragraph",
                "text": "First, both people must become sufficiently regulated to participate. A conversation conducted while one person is overwhelmed may produce more injury than understanding. Taking a break can be helpful when it includes a clear commitment to return, rather than becoming a way to escape accountability."
              },
              {
                "type": "paragraph",
                "text": "Second, the couple needs to identify what actually happened. This includes distinguishing the event from the interpretation and allowing both people to describe their experience."
              },
              {
                "type": "paragraph",
                "text": "Third, responsibility must be specific. “I'm sorry you feel that way” may acknowledge distress without addressing behavior. A more meaningful apology identifies the action, recognizes its impact, and explains what will change."
              },
              {
                "type": "paragraph",
                "text": "Fourth, the couple needs an agreement that can be observed in future situations."
              },
              {
                "type": "paragraph",
                "text": "For example, “I will stop shutting down” is vague. “When I feel overwhelmed, I will tell you I need a break and agree on a time to return to the conversation” is behavioral."
              },
              {
                "type": "paragraph",
                "text": "Trust requires additional care. When an agreement has been seriously broken, the injured partner may need more than an apology. They may need truthful information, acknowledgment of the impact, a clear end to the harmful behavior, and sustained evidence that the new agreement is being honored. Forgiveness cannot be demanded as proof that repair is working."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work also offers a useful caution: one partner cannot carry the entire repair process by repeatedly explaining, forgiving, rescuing, or managing the other's behavior. Genuine repair requires participation from the person whose behavior needs to change."
              },
              {
                "type": "paragraph",
                "text": "Serious betrayal, coercion, violence, or untreated addiction may require professional support or a different course of action. A general relationship course should not imply that every situation can be repaired through better communication."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish emotional reconciliation from actual problem resolution. You will practice taking responsibility, identifying the behavior that needs to change, and creating repair agreements that can be evaluated over time."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to recognize when repair is mutual and when one person is being asked to repeatedly absorb the consequences of the other's behavior."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine one partner repeatedly agrees to important plans and then cancels at the last minute. After each cancellation, they apologize and explain that work became unexpectedly demanding."
              },
              {
                "type": "paragraph",
                "text": "A more effective repair conversation would examine the pattern. Are the commitments unrealistic? Is the partner agreeing because they dislike disappointing the other person? Are work boundaries unclear? What kind of notice is possible? Which plans need to be protected?"
              },
              {
                "type": "paragraph",
                "text": "The new agreement might involve making fewer commitments, confirming availability before promising, and communicating changes as soon as they become known. The injured partner can then evaluate whether reliability improves rather than relying on the emotional sincerity of each apology."
              },
              {
                "type": "worksheet",
                "title": "Practice — The Repair-to-Change Worksheet",
                "instructions": "Choose one recurring conflict and write:",
                "steps": [
                  "The specific behavior that caused harm was...",
                  "The impact on the other person was...",
                  "My contribution was...",
                  "The pattern that makes this likely to happen again is...",
                  "The behavior we will practice instead is...",
                  "How we will recognize improvement is...",
                  "What we will do if the pattern returns is...",
                  "If the issue involves a serious breach of trust, do not use the worksheet to pressure the injured partner toward forgiveness. Use it to clarify accountability and determine whether appropriate professional support is needed."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish an apology from sustained behavioral repair.",
                  "Identify the recurring conditions that produce a conflict.",
                  "Take responsibility without becoming defensive or accepting blame for everything.",
                  "Create observable agreements for handling future disagreements.",
                  "Evaluate whether trust is being rebuilt through consistent behavior rather than promises alone."
                ]
              }
            ]
          },
          {
            "title": "Make Connection a Shared Responsibility",
            "subtitle": "A relationship cannot survive indefinitely on the assumption that love will take care of itself.",
            "sourceText": "Make Connection a Shared Responsibility - A relationship cannot survive indefinitely on the assumption that love will take care of itself.\n\nWhen couples begin focusing on problems, they can accidentally turn the relationship into a permanent improvement project.\n\nEvery conversation becomes about what is wrong. Every quiet moment is analyzed. Affection begins to feel like evidence that must be produced. One partner becomes responsible for initiating closeness while the other waits to be approached.\n\nA relationship needs more than the absence of conflict. It needs experiences that make both people want to remain connected.\n\nTatkin's Wired for Love includes practical attention to connection rituals, learning what helps a partner feel loved, and maintaining the shared bond through ordinary interactions. Richo's Five A's offer a complementary framework: attention, acceptance, appreciation, affection, and allowing. Together, these ideas emphasize that love is expressed through repeated behavior, not merely through a private feeling.\n\nThe important word is mutual.\n\nIf one person always plans dates, initiates affection, raises concerns, and repairs distance, the relationship may become dependent on that person's effort. The other partner may genuinely care, but care that is rarely expressed can still leave the relationship undernourished.\n\nNew rules should therefore address not only what the couple will stop doing, but what they will actively create.\n\nHow will you maintain meaningful time together? How will you show appreciation? How will you protect affection from becoming purely routine? How will you communicate about sexual intimacy without pressure or entitlement? How will you preserve playfulness when work and responsibilities increase?\n\nThe answers should fit the couple rather than imitate a universal formula. Some partners value frequent verbal affection. Others appreciate practical support, physical closeness, shared activities, or uninterrupted conversation. The task is to learn what matters to each person and make room for it.\n\nNorwood's work provides an important counterbalance: connection should not become an obligation for one person to continually manage the other's emotional state. The aim is reciprocal care, not a system in which one partner must constantly prove that they are loving enough.\n\nWhat You Are Learning\n\nYou are learning to distinguish relationship maintenance from relationship management. You will identify the behaviors that create connection for each partner, recognize imbalances in emotional initiative, and develop realistic rituals that support intimacy without becoming compulsory performances.\n\nYou will also learn to discuss affection and physical intimacy as areas of mutual preference, consent, and care rather than assuming that one partner's desire automatically creates an obligation for the other.\n\nPractical Application\n\nSuppose you and your partner live together and spend most evenings in the same room, but you rarely have meaningful conversations. One person feels lonely despite the amount of time spent together. The other believes the relationship is fine because you are physically present.\n\nThe new agreement might be to protect a short period of uninterrupted conversation several evenings each week and plan an activity together regularly. It could also include recognizing when one partner needs rest or personal time.\n\nThe purpose is not to impose a schedule for romance. It is to stop assuming that proximity automatically creates connection.\n\nPractice — The Connection Menu\n\nEach partner independently identifies five behaviors that help them feel connected and five that help them feel appreciated. Include ordinary, realistic actions rather than only expensive dates or major gestures.\n\nCompare your answers and choose two small practices that both people are willing to initiate. Decide how you will make room for them during a normal week and how you will adapt them during stressful periods.\n\nAfter two weeks, discuss which practices felt meaningful, which felt forced, and what you would change. The goal is to discover what genuinely nourishes the relationship rather than completing a checklist.\n\nAfter This Section, You Will Be Able To\nIdentify the behaviors that create emotional connection for each partner.\nRecognize when responsibility for maintaining closeness has become uneven.\nDevelop realistic rituals for attention, appreciation, affection, and shared time.\nDiscuss physical and emotional intimacy with respect for mutual preference and consent.\nMaintain connection without turning affection into a test or obligation.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "When couples begin focusing on problems, they can accidentally turn the relationship into a permanent improvement project."
              },
              {
                "type": "paragraph",
                "text": "Every conversation becomes about what is wrong. Every quiet moment is analyzed. Affection begins to feel like evidence that must be produced. One partner becomes responsible for initiating closeness while the other waits to be approached."
              },
              {
                "type": "paragraph",
                "text": "A relationship needs more than the absence of conflict. It needs experiences that make both people want to remain connected."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's Wired for Love includes practical attention to connection rituals, learning what helps a partner feel loved, and maintaining the shared bond through ordinary interactions. Richo's Five A's offer a complementary framework: attention, acceptance, appreciation, affection, and allowing. Together, these ideas emphasize that love is expressed through repeated behavior, not merely through a private feeling."
              },
              {
                "type": "paragraph",
                "text": "The important word is mutual."
              },
              {
                "type": "paragraph",
                "text": "If one person always plans dates, initiates affection, raises concerns, and repairs distance, the relationship may become dependent on that person's effort. The other partner may genuinely care, but care that is rarely expressed can still leave the relationship undernourished."
              },
              {
                "type": "paragraph",
                "text": "New rules should therefore address not only what the couple will stop doing, but what they will actively create."
              },
              {
                "type": "paragraph",
                "text": "How will you maintain meaningful time together? How will you show appreciation? How will you protect affection from becoming purely routine? How will you communicate about sexual intimacy without pressure or entitlement? How will you preserve playfulness when work and responsibilities increase?"
              },
              {
                "type": "paragraph",
                "text": "The answers should fit the couple rather than imitate a universal formula. Some partners value frequent verbal affection. Others appreciate practical support, physical closeness, shared activities, or uninterrupted conversation. The task is to learn what matters to each person and make room for it."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work provides an important counterbalance: connection should not become an obligation for one person to continually manage the other's emotional state. The aim is reciprocal care, not a system in which one partner must constantly prove that they are loving enough."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish relationship maintenance from relationship management. You will identify the behaviors that create connection for each partner, recognize imbalances in emotional initiative, and develop realistic rituals that support intimacy without becoming compulsory performances."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to discuss affection and physical intimacy as areas of mutual preference, consent, and care rather than assuming that one partner's desire automatically creates an obligation for the other."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose you and your partner live together and spend most evenings in the same room, but you rarely have meaningful conversations. One person feels lonely despite the amount of time spent together. The other believes the relationship is fine because you are physically present."
              },
              {
                "type": "paragraph",
                "text": "The new agreement might be to protect a short period of uninterrupted conversation several evenings each week and plan an activity together regularly. It could also include recognizing when one partner needs rest or personal time."
              },
              {
                "type": "paragraph",
                "text": "The purpose is not to impose a schedule for romance. It is to stop assuming that proximity automatically creates connection."
              },
              {
                "type": "worksheet",
                "title": "Practice — The Connection Menu",
                "instructions": "Each partner independently identifies five behaviors that help them feel connected and five that help them feel appreciated. Include ordinary, realistic actions rather than only expensive dates or major gestures.",
                "steps": [
                  "Compare your answers and choose two small practices that both people are willing to initiate. Decide how you will make room for them during a normal week and how you will adapt them during stressful periods.",
                  "After two weeks, discuss which practices felt meaningful, which felt forced, and what you would change. The goal is to discover what genuinely nourishes the relationship rather than completing a checklist."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify the behaviors that create emotional connection for each partner.",
                  "Recognize when responsibility for maintaining closeness has become uneven.",
                  "Develop realistic rituals for attention, appreciation, affection, and shared time.",
                  "Discuss physical and emotional intimacy with respect for mutual preference and consent.",
                  "Maintain connection without turning affection into a test or obligation."
                ]
              }
            ]
          },
          {
            "title": "Rewrite the Rules When Life Changes",
            "subtitle": "The relationship that worked at the beginning may need a different structure for the life you are building now.",
            "sourceText": "Rewrite the Rules When Life Changes -  The relationship that worked at the beginning may need a different structure for the life you are building now.\n\nSome relationship problems do not arise because either partner has changed for the worse. They arise because the couple's circumstances have changed while their expectations have remained the same.\n\nA relationship that worked when both people had flexible schedules may struggle when one begins demanding work or study. A couple who once had few financial responsibilities may need new agreements after taking on debt, buying a home, or supporting family members. Marriage, children, relocation, illness, or a major career opportunity can alter the amount of time, energy, and attention each person can realistically provide.\n\nThe mistake is expecting the relationship to continue functioning exactly as it did before.\n\nTatkin's secure-functioning approach emphasizes co-creating a shared purpose and relationship structure. His work also recognizes that couples may organize their lives around different priorities, provided those priorities are openly discussed and mutually accepted.\n\nRicho's emphasis on allowing adds an important dimension: partners must be able to recognize one another as developing people rather than demanding that the other remain permanently adapted to an earlier stage of the relationship.\n\nThis does not mean every change should be accepted without discussion. A major life decision can affect both partners. One person's ambition may require sacrifices from the other. Family obligations may create real conflicts. Financial decisions may alter the couple's security.\n\nThe task is to distinguish individual choice from shared consequence.\n\nA partner may have the right to pursue a career opportunity, but the couple still needs to discuss what relocation, reduced time together, or financial risk would mean for both of them. A person may need to support a family member, but that does not mean their partner's needs become irrelevant.\n\nHealthy adaptation requires a shared understanding of what matters most, what each person is willing to sacrifice, what cannot reasonably be sacrificed, and how the arrangement will be reviewed.\n\nThe deeper principle is that commitment should provide a stable foundation for change—not become a demand that neither person ever changes.\n\nWhat You Are Learning\n\nYou are learning to adapt relationship agreements to changing circumstances. You will distinguish temporary sacrifices from permanent imbalances, evaluate how major decisions affect both partners, and develop a process for negotiating competing priorities without treating one person's ambitions or responsibilities as inherently more important.\n\nPractical Application\n\nImagine one partner receives a promotion that requires six months of unusually demanding work. The other partner begins feeling neglected and worries that the relationship is becoming secondary.\n\nA poorly managed response might be for one person to insist that the career opportunity must be sacrificed, or for the other to declare that the partner should simply understand.\n\nA more useful conversation would establish what the opportunity requires, what support is realistically possible, how the couple will maintain connection, which responsibilities need to be redistributed, and when the arrangement will be reviewed.\n\nThe agreement may involve temporary sacrifice. But the sacrifice is visible, discussed, and connected to a shared understanding rather than silently becoming the new normal.\n\nPractice — The Life-Change Negotiation\n\nChoose one current or anticipated change: career, education, relocation, finances, family responsibilities, health, or another significant transition.\n\nEach partner answers:\n\nWhat does this change mean to me?\n\nWhat am I afraid of losing?\n\nWhat support do I need?\n\nWhat can I realistically offer?\n\nWhat sacrifices would be temporary?\n\nWhat sacrifices would be unacceptable or unsustainable?\n\nThen create a provisional agreement for the next four to eight weeks. Include a review date and identify what would need to change if the arrangement is not working.\n\nAfter This Section, You Will Be Able To\nRecognize when changing circumstances require new relationship agreements.\nEvaluate how major decisions affect both individual and shared priorities.\nNegotiate temporary sacrifices without allowing them to become unexamined permanent imbalances.\nCreate adaptable agreements concerning work, family, finances, and other life transitions.\nSupport individual development while protecting the relationship's mutual commitments.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Some relationship problems do not arise because either partner has changed for the worse. They arise because the couple's circumstances have changed while their expectations have remained the same."
              },
              {
                "type": "paragraph",
                "text": "A relationship that worked when both people had flexible schedules may struggle when one begins demanding work or study. A couple who once had few financial responsibilities may need new agreements after taking on debt, buying a home, or supporting family members. Marriage, children, relocation, illness, or a major career opportunity can alter the amount of time, energy, and attention each person can realistically provide."
              },
              {
                "type": "paragraph",
                "text": "The mistake is expecting the relationship to continue functioning exactly as it did before."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach emphasizes co-creating a shared purpose and relationship structure. His work also recognizes that couples may organize their lives around different priorities, provided those priorities are openly discussed and mutually accepted."
              },
              {
                "type": "paragraph",
                "text": "Richo's emphasis on allowing adds an important dimension: partners must be able to recognize one another as developing people rather than demanding that the other remain permanently adapted to an earlier stage of the relationship."
              },
              {
                "type": "paragraph",
                "text": "This does not mean every change should be accepted without discussion. A major life decision can affect both partners. One person's ambition may require sacrifices from the other. Family obligations may create real conflicts. Financial decisions may alter the couple's security."
              },
              {
                "type": "paragraph",
                "text": "The task is to distinguish individual choice from shared consequence."
              },
              {
                "type": "paragraph",
                "text": "A partner may have the right to pursue a career opportunity, but the couple still needs to discuss what relocation, reduced time together, or financial risk would mean for both of them. A person may need to support a family member, but that does not mean their partner's needs become irrelevant."
              },
              {
                "type": "paragraph",
                "text": "Healthy adaptation requires a shared understanding of what matters most, what each person is willing to sacrifice, what cannot reasonably be sacrificed, and how the arrangement will be reviewed."
              },
              {
                "type": "paragraph",
                "text": "The deeper principle is that commitment should provide a stable foundation for change—not become a demand that neither person ever changes."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to adapt relationship agreements to changing circumstances. You will distinguish temporary sacrifices from permanent imbalances, evaluate how major decisions affect both partners, and develop a process for negotiating competing priorities without treating one person's ambitions or responsibilities as inherently more important."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine one partner receives a promotion that requires six months of unusually demanding work. The other partner begins feeling neglected and worries that the relationship is becoming secondary."
              },
              {
                "type": "paragraph",
                "text": "A poorly managed response might be for one person to insist that the career opportunity must be sacrificed, or for the other to declare that the partner should simply understand."
              },
              {
                "type": "paragraph",
                "text": "A more useful conversation would establish what the opportunity requires, what support is realistically possible, how the couple will maintain connection, which responsibilities need to be redistributed, and when the arrangement will be reviewed."
              },
              {
                "type": "paragraph",
                "text": "The agreement may involve temporary sacrifice. But the sacrifice is visible, discussed, and connected to a shared understanding rather than silently becoming the new normal."
              },
              {
                "type": "worksheet",
                "title": "Practice — The Life-Change Negotiation",
                "instructions": "Choose one current or anticipated change: career, education, relocation, finances, family responsibilities, health, or another significant transition.",
                "steps": [
                  "Each partner answers:",
                  "What does this change mean to me?",
                  "What am I afraid of losing?",
                  "What support do I need?",
                  "What can I realistically offer?",
                  "What sacrifices would be temporary?",
                  "What sacrifices would be unacceptable or unsustainable?",
                  "Then create a provisional agreement for the next four to eight weeks. Include a review date and identify what would need to change if the arrangement is not working."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Recognize when changing circumstances require new relationship agreements.",
                  "Evaluate how major decisions affect both individual and shared priorities.",
                  "Negotiate temporary sacrifices without allowing them to become unexamined permanent imbalances.",
                  "Create adaptable agreements concerning work, family, finances, and other life transitions.",
                  "Support individual development while protecting the relationship's mutual commitments."
                ]
              }
            ]
          },
          {
            "title": "Build a Relationship That Can Keep Evolving",
            "subtitle": "New rules are successful only when they create a better way of living together",
            "sourceText": "Build a Relationship That Can Keep Evolving -New rules are successful only when they create a better way of living together—not merely a temporary period of better behavior.\n\nThe final stage is implementation.\n\nA couple can have an excellent conversation, create thoughtful agreements, and feel hopeful about the future. But the real test begins when ordinary life returns.\n\nSomeone becomes tired. Work becomes demanding. A familiar trigger appears. An agreement is forgotten. A difficult conversation is postponed. The old pattern offers an easier response than the new one.\n\nThis is where relationship change either becomes a practice or remains a promise.\n\nThe course's final framework is a relationship operating system: a small set of shared commitments, communication practices, repair procedures, and review habits that help the couple respond to problems before they become entrenched.\n\nThe framework is an original educational synthesis, not a named model from any of the four books. It draws especially on Tatkin's emphasis on mutually satisfying agreements and secure functioning, Richo's focus on ongoing responsibility and mindful love, and the attachment-related importance of responsiveness and emotional availability.\n\nA useful operating system does not need dozens of rules. Too many agreements can create the feeling of living under constant evaluation. A smaller number of meaningful commitments is more likely to be remembered and practiced.\n\nThe couple should know how to raise concerns, how to request space, how to return to difficult conversations, how to protect important boundaries, how to maintain connection, and how to revisit agreements when they stop working.\n\nEqually important, both people need to retain the freedom to evaluate whether the relationship remains healthy.\n\nA new agreement should not become a reason to stay indefinitely in a relationship that repeatedly violates important needs or boundaries. If one person consistently refuses participation, breaks agreements, or expects the other to carry all the emotional work, the issue may no longer be the quality of the rules.\n\nIt may be the absence of mutual willingness.\n\nRicho's work recognizes that mature love can include ending a relationship when it is no longer workable. Norwood's recovery perspective similarly warns against organizing one's life around the hope that another person will eventually change.\n\nThe final lesson is therefore not that every relationship can be saved through better agreements.\n\nIt is that a relationship worth continuing should become more honest, more mutual, and more capable of supporting both people's wellbeing as it evolves.\n\nWhat You Are Learning\n\nYou are learning to turn relationship insights into sustainable practices. You will create a manageable set of agreements, establish a review process, evaluate whether behavior is actually changing, and recognize when an arrangement needs adjustment rather than another vague promise.\n\nYou will also learn to distinguish a difficult but workable relationship from one in which the necessary willingness or safety is absent.\n\nPractical Application\n\nImagine you and your partner agree to improve communication and spend more meaningful time together. For the first two weeks, both of you make an effort. Then work becomes demanding and the old habits return.\n\nInstead of interpreting this immediately as proof that nothing will ever change, you review the agreement. Was it unrealistic? Did you fail to anticipate a predictable obstacle? Does one person need more support? Is the commitment still important to both of you?\n\nIf the agreement was unrealistic, you revise it.\n\nIf one person repeatedly refuses to participate, you address that directly.\n\nIf the relationship has become unsafe, you prioritize safety rather than continuing the experiment.\n\nThe purpose of review is to learn from reality—not to manufacture evidence that the relationship must succeed.\n\nPractice — The 30-Day Relationship Reset\n\nCreate a one-page agreement containing five areas:\n\nConnection: What will we do regularly to maintain closeness?\n\nCommunication: How will we express needs and concerns?\n\nConflict: What will we do when either person becomes overwhelmed, and how will we return to repair?\n\nBoundaries: Which individual limits and shared commitments are important to us?\n\nReview: When will we discuss what is working and what needs adjustment?\n\nChoose no more than two specific behavioral changes to focus on during the first 30 days. At the end of each week, discuss what happened without turning the review into a scorekeeping exercise.\n\nAt the end of the month, answer:\n\nWhat has genuinely improved?\n\nWhat remains difficult?\n\nAre both people participating?\n\nWhich agreement needs revision?\n\nWhat evidence do we have that the relationship is becoming healthier?\n\nWhat would we need to acknowledge if the same problems continued for another six months?\n\nUse the answers to decide whether to continue the current approach, revise the agreements, seek appropriate professional support, or reconsider the relationship.\n\nAfter This Section, You Will Be Able To\nCreate a concise relationship operating agreement that both partners can realistically practice.\nEvaluate progress through observable behavior rather than temporary emotional reassurance.\nReview and revise agreements without turning the relationship into constant scorekeeping.\nDistinguish normal setbacks from repeated unwillingness to participate.\nMake informed decisions about continuing, changing, or ending a relationship when necessary.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "not merely a temporary period of better behavior."
              },
              {
                "type": "paragraph",
                "text": "The final stage is implementation."
              },
              {
                "type": "paragraph",
                "text": "A couple can have an excellent conversation, create thoughtful agreements, and feel hopeful about the future. But the real test begins when ordinary life returns."
              },
              {
                "type": "paragraph",
                "text": "Someone becomes tired. Work becomes demanding. A familiar trigger appears. An agreement is forgotten. A difficult conversation is postponed. The old pattern offers an easier response than the new one."
              },
              {
                "type": "paragraph",
                "text": "This is where relationship change either becomes a practice or remains a promise."
              },
              {
                "type": "paragraph",
                "text": "The course's final framework is a relationship operating system: a small set of shared commitments, communication practices, repair procedures, and review habits that help the couple respond to problems before they become entrenched."
              },
              {
                "type": "paragraph",
                "text": "The framework is an original educational synthesis, not a named model from any of the four books. It draws especially on Tatkin's emphasis on mutually satisfying agreements and secure functioning, Richo's focus on ongoing responsibility and mindful love, and the attachment-related importance of responsiveness and emotional availability."
              },
              {
                "type": "paragraph",
                "text": "A useful operating system does not need dozens of rules. Too many agreements can create the feeling of living under constant evaluation. A smaller number of meaningful commitments is more likely to be remembered and practiced."
              },
              {
                "type": "paragraph",
                "text": "The couple should know how to raise concerns, how to request space, how to return to difficult conversations, how to protect important boundaries, how to maintain connection, and how to revisit agreements when they stop working."
              },
              {
                "type": "paragraph",
                "text": "Equally important, both people need to retain the freedom to evaluate whether the relationship remains healthy."
              },
              {
                "type": "paragraph",
                "text": "A new agreement should not become a reason to stay indefinitely in a relationship that repeatedly violates important needs or boundaries. If one person consistently refuses participation, breaks agreements, or expects the other to carry all the emotional work, the issue may no longer be the quality of the rules."
              },
              {
                "type": "paragraph",
                "text": "It may be the absence of mutual willingness."
              },
              {
                "type": "paragraph",
                "text": "Richo's work recognizes that mature love can include ending a relationship when it is no longer workable. Norwood's recovery perspective similarly warns against organizing one's life around the hope that another person will eventually change."
              },
              {
                "type": "paragraph",
                "text": "The final lesson is therefore not that every relationship can be saved through better agreements."
              },
              {
                "type": "paragraph",
                "text": "It is that a relationship worth continuing should become more honest, more mutual, and more capable of supporting both people's wellbeing as it evolves."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to turn relationship insights into sustainable practices. You will create a manageable set of agreements, establish a review process, evaluate whether behavior is actually changing, and recognize when an arrangement needs adjustment rather than another vague promise."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to distinguish a difficult but workable relationship from one in which the necessary willingness or safety is absent."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine you and your partner agree to improve communication and spend more meaningful time together. For the first two weeks, both of you make an effort. Then work becomes demanding and the old habits return."
              },
              {
                "type": "paragraph",
                "text": "Instead of interpreting this immediately as proof that nothing will ever change, you review the agreement. Was it unrealistic? Did you fail to anticipate a predictable obstacle? Does one person need more support? Is the commitment still important to both of you?"
              },
              {
                "type": "paragraph",
                "text": "If the agreement was unrealistic, you revise it."
              },
              {
                "type": "paragraph",
                "text": "If one person repeatedly refuses to participate, you address that directly."
              },
              {
                "type": "paragraph",
                "text": "If the relationship has become unsafe, you prioritize safety rather than continuing the experiment."
              },
              {
                "type": "paragraph",
                "text": "The purpose of review is to learn from reality—not to manufacture evidence that the relationship must succeed."
              },
              {
                "type": "worksheet",
                "title": "Practice — The 30-Day Relationship Reset",
                "instructions": "Create a one-page agreement containing five areas:",
                "steps": [
                  "Connection: What will we do regularly to maintain closeness?",
                  "Communication: How will we express needs and concerns?",
                  "Conflict: What will we do when either person becomes overwhelmed, and how will we return to repair?",
                  "Boundaries: Which individual limits and shared commitments are important to us?",
                  "Review: When will we discuss what is working and what needs adjustment?",
                  "Choose no more than two specific behavioral changes to focus on during the first 30 days. At the end of each week, discuss what happened without turning the review into a scorekeeping exercise.",
                  "At the end of the month, answer:",
                  "What has genuinely improved?",
                  "What remains difficult?",
                  "Are both people participating?",
                  "Which agreement needs revision?",
                  "What evidence do we have that the relationship is becoming healthier?",
                  "What would we need to acknowledge if the same problems continued for another six months?",
                  "Use the answers to decide whether to continue the current approach, revise the agreements, seek appropriate professional support, or reconsider the relationship."
                ],
                "fields": [
                  {
                    "label": "Observation / Habit",
                    "placeholder": "Describe what usually happens..."
                  },
                  {
                    "label": "The Underlying Dynamic",
                    "placeholder": "Identify the pattern or unwritten rule..."
                  },
                  {
                    "label": "Collaborative Agreement",
                    "placeholder": "Write a new, supportive agreement..."
                  }
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Create a concise relationship operating agreement that both partners can realistically practice.",
                  "Evaluate progress through observable behavior rather than temporary emotional reassurance.",
                  "Review and revise agreements without turning the relationship into constant scorekeeping.",
                  "Distinguish normal setbacks from repeated unwillingness to participate.",
                  "Make informed decisions about continuing, changing, or ending a relationship when necessary."
                ]
              }
            ]
          },
          {
            "title": "Wrap up, Your Transformation",
            "subtitle": "",
            "sourceText": "   Wrap up, Your Transformation -\n\nAfter completing When Love Needs New Rules, you should be able to recognize when a relationship's existing habits are no longer serving the people inside it. You can identify recurring patterns, understand the needs beneath conflict, communicate expectations clearly, and create agreements that protect both connection and autonomy.\n\nYou should also be capable of distinguishing an apology from actual repair, rebuilding trust through consistent behavior, sharing responsibility for maintaining intimacy, and adapting the relationship when careers, family, finances, or personal development change what each person needs.\n\nMost importantly, you should no longer assume that love must either continue exactly as it always has or come to an end. You will have a practical framework for asking whether the relationship can evolve—and whether both people are genuinely willing to participate in that evolution.\n\nThe goal is not a relationship with more restrictions.\n\nIt is a relationship with fewer harmful assumptions, clearer commitments, better repair, and enough mutual freedom and security for both people to keep choosing it.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "After completing When Love Needs New Rules, you should be able to recognize when a relationship's existing habits are no longer serving the people inside it. You can identify recurring patterns, understand the needs beneath conflict, communicate expectations clearly, and create agreements that protect both connection and autonomy."
              },
              {
                "type": "paragraph",
                "text": "You should also be capable of distinguishing an apology from actual repair, rebuilding trust through consistent behavior, sharing responsibility for maintaining intimacy, and adapting the relationship when careers, family, finances, or personal development change what each person needs."
              },
              {
                "type": "paragraph",
                "text": "Most importantly, you should no longer assume that love must either continue exactly as it always has or come to an end. You will have a practical framework for asking whether the relationship can evolve—and whether both people are genuinely willing to participate in that evolution."
              },
              {
                "type": "paragraph",
                "text": "The goal is not a relationship with more restrictions."
              },
              {
                "type": "paragraph",
                "text": "It is a relationship with fewer harmful assumptions, clearer commitments, better repair, and enough mutual freedom and security for both people to keep choosing it."
              }
            ]
          }
        ]
      }
    ]
  },
  'The-Art-of-Receiving-Love': {
    "outcomes": [
      " When Loving Him Costs You is not a course about blaming men or teaching women \n              to leave at the first sign of difficulty. It is about learning to distinguish healthy relationship investment from chronic emotional overinvestment."
    ],
    "sections": [
      {
        "title": "Lessons",
        "lessons": [
          {
            "title": "Intro",
            "subtitle": "When Love Starts Taking More Than It Gives",
            "sourceText": "Intro - When Love Starts Taking More Than It Gives - The first warning is often not that you stopped loving him—it is that you slowly stopped recognizing yourself.\n\nUnhealthy relationships do not always begin with obvious cruelty or dramatic betrayal. Sometimes the erosion is gradual.\n\nYou begin canceling plans because he may want to see you.\n\nYou monitor his mood before deciding how you are allowed to feel.\n\nYou repeatedly explain behavior that hurts you.\n\nYour standards change.\n\nWhat once would have felt unacceptable becomes something you describe as “complicated.”\n\nYou stop asking whether the relationship is working and start asking how you can make yourself easier to love.\n\nThis is an important psychological shift.\n\nIn a healthy relationship, compromise happens inside a stable sense of self.\n\nIn an unhealthy pattern, compromise can slowly become self-abandonment.\n\nRobin Norwood s work is especially relevant here. Women Who Love Too Much examines women whose emotional lives become increasingly organized around a difficult, unavailable, troubled, or inconsistent partner. Attention moves away from the question:\n\n“Is this relationship good for me?”\n\nand toward:\n\n“How can I finally make this relationship work?”\n\nThat difference matters.\n\nBecause effort feels virtuous.\n\nLoyalty feels virtuous.\n\nPatience feels virtuous.\n\nUnderstanding another person's wounds feels compassionate.\n\nBut healthy qualities can become destructive when they repeatedly require you to violate your own emotional reality.\n\nDavid Richo s framework adds another important distinction. Mature love includes attention, acceptance, appreciation, affection, and allowing—but these qualities are not meant to erase boundaries or transform one partner into the emotional caretaker of the other.\n\nLove can require generosity.\n\nIt should not require disappearance.\n\nWhat You Are Learning\n\nYou are learning how to distinguish:\n\ncompromise from self-abandonment,\nloyalty from fear of leaving,\npatience from tolerating chronic harm,\ncompassion from rescuing,\nand commitment from emotional dependency.\n\nYou will begin measuring the cost of the relationship, rather than evaluating it only by how strongly you feel.\n\nPractical Application\n\nImagine he repeatedly cancels plans at the last minute.\n\nYou feel hurt.\n\nBut instead of addressing the pattern, you tell yourself:\n\n“He has a stressful job.”\n\n“He doesn't express emotions like I do.”\n\n“He had a difficult childhood.”\n\n“He probably doesn't realize how it affects me.”\n\nAny of those explanations could contain truth.\n\nBut explanations and boundaries serve different purposes.\n\nUnderstanding why he behaves this way does not answer whether you should continually accept the behavior.\n\nA healthier question becomes:\n\nCan I understand his reasons while still taking my own experience seriously?\n\nPractice — The Relationship Cost Audit\n\nRate the relationship from 1 to10 in these areas:\n\nEmotional peace\nSelf-respect\nTrust\nFriendships\nFamily connection\nConfidence\nPhysical health\nSleep\nWork/study concentration\nFinancial stability\nPersonal goals\nFreedom to speak honestly\nAbility to say no\nSense of identity\n\nThen answer:\n\nWhat have I gained from loving him?\n\nWhat have I repeatedly sacrificed?\n\nWhich sacrifices were freely chosen?\n\nWhich sacrifices were made because I feared what would happen if I stopped?\n\nThat final distinction is critical.\n\nAfter This Section, You Will Be Able To\nIdentify where relationship compromise has become self-abandonment.\nEvaluate the emotional and practical cost of maintaining the relationship.\nDistinguish understanding someone's behavior from excusing it.\nRecognize when your life has begun revolving disproportionately around your partner.\nDescribe what healthy commitment should not require you to sacrifice.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "The first warning is often not that you stopped loving him—it is that you slowly stopped recognizing yourself."
              },
              {
                "type": "paragraph",
                "text": "Unhealthy relationships do not always begin with obvious cruelty or dramatic betrayal. Sometimes the erosion is gradual."
              },
              {
                "type": "paragraph",
                "text": "You begin canceling plans because he may want to see you."
              },
              {
                "type": "paragraph",
                "text": "You monitor his mood before deciding how you are allowed to feel."
              },
              {
                "type": "paragraph",
                "text": "You repeatedly explain behavior that hurts you."
              },
              {
                "type": "paragraph",
                "text": "Your standards change."
              },
              {
                "type": "paragraph",
                "text": "What once would have felt unacceptable becomes something you describe as “complicated.”"
              },
              {
                "type": "paragraph",
                "text": "You stop asking whether the relationship is working and start asking how you can make yourself easier to love."
              },
              {
                "type": "paragraph",
                "text": "This is an important psychological shift."
              },
              {
                "type": "paragraph",
                "text": "In a healthy relationship, compromise happens inside a stable sense of self."
              },
              {
                "type": "paragraph",
                "text": "In an unhealthy pattern, compromise can slowly become self-abandonment."
              },
              {
                "type": "paragraph",
                "text": "Robin Norwood s work is especially relevant here. Women Who Love Too Much examines women whose emotional lives become increasingly organized around a difficult, unavailable, troubled, or inconsistent partner. Attention moves away from the question:"
              },
              {
                "type": "paragraph",
                "text": "“Is this relationship good for me?”"
              },
              {
                "type": "paragraph",
                "text": "and toward:"
              },
              {
                "type": "paragraph",
                "text": "“How can I finally make this relationship work?”"
              },
              {
                "type": "paragraph",
                "text": "That difference matters."
              },
              {
                "type": "paragraph",
                "text": "Because effort feels virtuous."
              },
              {
                "type": "paragraph",
                "text": "Loyalty feels virtuous."
              },
              {
                "type": "paragraph",
                "text": "Patience feels virtuous."
              },
              {
                "type": "paragraph",
                "text": "Understanding another person's wounds feels compassionate."
              },
              {
                "type": "paragraph",
                "text": "But healthy qualities can become destructive when they repeatedly require you to violate your own emotional reality."
              },
              {
                "type": "paragraph",
                "text": "David Richo s framework adds another important distinction. Mature love includes attention, acceptance, appreciation, affection, and allowing—but these qualities are not meant to erase boundaries or transform one partner into the emotional caretaker of the other."
              },
              {
                "type": "paragraph",
                "text": "Love can require generosity."
              },
              {
                "type": "paragraph",
                "text": "It should not require disappearance."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning how to distinguish:"
              },
              {
                "type": "paragraph",
                "text": "compromise from self-abandonment,\nloyalty from fear of leaving,\npatience from tolerating chronic harm,\ncompassion from rescuing,\nand commitment from emotional dependency."
              },
              {
                "type": "paragraph",
                "text": "You will begin measuring the cost of the relationship, rather than evaluating it only by how strongly you feel."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine he repeatedly cancels plans at the last minute."
              },
              {
                "type": "paragraph",
                "text": "You feel hurt."
              },
              {
                "type": "paragraph",
                "text": "But instead of addressing the pattern, you tell yourself:"
              },
              {
                "type": "paragraph",
                "text": "“He has a stressful job.”"
              },
              {
                "type": "paragraph",
                "text": "“He doesn't express emotions like I do.”"
              },
              {
                "type": "paragraph",
                "text": "“He had a difficult childhood.”"
              },
              {
                "type": "paragraph",
                "text": "“He probably doesn't realize how it affects me.”"
              },
              {
                "type": "paragraph",
                "text": "Any of those explanations could contain truth."
              },
              {
                "type": "paragraph",
                "text": "But explanations and boundaries serve different purposes."
              },
              {
                "type": "paragraph",
                "text": "Understanding why he behaves this way does not answer whether you should continually accept the behavior."
              },
              {
                "type": "paragraph",
                "text": "A healthier question becomes:"
              },
              {
                "type": "paragraph",
                "text": "Can I understand his reasons while still taking my own experience seriously?"
              },
              {
                "type": "steps",
                "title": "Practice — The Relationship Cost Audit",
                "items": [
                  "Rate the relationship from 1 to10 in these areas:",
                  "Emotional peace\nSelf-respect\nTrust\nFriendships\nFamily connection\nConfidence\nPhysical health\nSleep\nWork/study concentration\nFinancial stability\nPersonal goals\nFreedom to speak honestly\nAbility to say no\nSense of identity",
                  "Then answer:",
                  "What have I gained from loving him?",
                  "What have I repeatedly sacrificed?",
                  "Which sacrifices were freely chosen?",
                  "Which sacrifices were made because I feared what would happen if I stopped?",
                  "That final distinction is critical."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify where relationship compromise has become self-abandonment.",
                  "Evaluate the emotional and practical cost of maintaining the relationship.",
                  "Distinguish understanding someone's behavior from excusing it.",
                  "Recognize when your life has begun revolving disproportionately around your partner.",
                  "Describe what healthy commitment should not require you to sacrifice."
                ]
              }
            ]
          },
          {
            "title": "Why Uncertainty Can Feel Like Love",
            "subtitle": "Sometimes the relationship feels powerful because you never feel completely secure inside it.",
            "sourceText": " Why Uncertainty Can Feel Like Love - Sometimes the relationship feels powerful because you never feel completely secure inside it.\n\nOne of the most confusing relationship experiences is feeling intensely attached to someone who consistently makes you uncertain.\n\nHe is affectionate, then distant.\n\nInterested, then unavailable.\n\nFuture-focused one week and vague the next.\n\nAfter an argument, he disappears.\n\nWhen you finally begin detaching, he becomes affectionate again.\n\nThe emotional intensity can feel like evidence of extraordinary chemistry.\n\nSometimes it is chemistry.\n\nBut sometimes uncertainty itself is intensifying attachment.\n\nAttached provides a useful framework for understanding anxious and avoidant relationship patterns.\n\nSomeone with strong anxious tendencies may become increasingly focused on signs of rejection or abandonment. Someone with avoidant tendencies may experience closeness as pressure and seek greater distance.\n\nWhen those tendencies interact, a cycle can develop:\n\nShe seeks reassurance.\n\nHe withdraws.\n\nHis withdrawal increases her anxiety.\n\nHer pursuit increases his discomfort.\n\nHe withdraws further.\n\nThen, after distance becomes large enough, he may reconnect.\n\nShe experiences enormous relief.\n\nThe relief itself can make the relationship feel intensely rewarding.\n\nBut emotional relief is not the same thing as emotional security.\n\nThis is why some women discover that stable partners initially feel “less exciting” than inconsistent partners.\n\nTheir nervous system may have learned to associate uncertainty with intensity.\n\nThat does not mean secure relationships should feel emotionally flat.\n\nIt means constant anxiety should not automatically be interpreted as passion.\n\nWhat You Are Learning\n\nYou are learning to distinguish:\n\nattraction from activation,\n\nchemistry from unpredictability,\n\nmissing someone from feeling insecure about access to them.\n\nYou are also learning how your own attachment responses may influence the relationship.\n\nPractical Application\n\nSuppose he does not reply for eight hours.\n\nYou send another message.\n\nThen another.\n\nEventually he replies warmly.\n\nThe anxiety disappears immediately.\n\nFor the next several hours you feel close again.\n\nYou may interpret this emotional swing as:\n\n“We have such a powerful connection.”\n\nBut ask:\n\nWould the connection still feel this powerful if his availability were predictable?\n\nThat question can expose whether uncertainty has become part of the attraction.\n\nPractice — The Activation vs Connection Test\n\nThink about five emotionally intense moments with him.\n\nFor each one ask:\n\nWas I experiencing closeness—or relief after uncertainty?\n\nDid I feel secure before the interaction?\n\nWas I afraid he was pulling away?\n\nDid his attention calm an anxiety he had helped create?\n\nWould I still consider this romantic if the pattern happened to my closest friend?\n\nThen identify your most common response when you fear losing him:\n\npursuit,\noverexplaining,\napologizing excessively,\nsexual reassurance,\njealousy,\nmonitoring,\nemotional shutdown,\ntesting him,\nthreatening to leave.\n\nUnderstanding the response gives you a chance to change it.\n\nAfter This Section, You Will Be Able To\nRecognize anxious-avoidant relationship dynamics.\nDistinguish emotional security from relief after uncertainty.\nIdentify your own attachment-related reactions.\nEvaluate whether unpredictability is amplifying attraction.\nRespond to relational uncertainty more deliberately rather than automatically.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "One of the most confusing relationship experiences is feeling intensely attached to someone who consistently makes you uncertain."
              },
              {
                "type": "paragraph",
                "text": "He is affectionate, then distant."
              },
              {
                "type": "paragraph",
                "text": "Interested, then unavailable."
              },
              {
                "type": "paragraph",
                "text": "Future-focused one week and vague the next."
              },
              {
                "type": "paragraph",
                "text": "After an argument, he disappears."
              },
              {
                "type": "paragraph",
                "text": "When you finally begin detaching, he becomes affectionate again."
              },
              {
                "type": "paragraph",
                "text": "The emotional intensity can feel like evidence of extraordinary chemistry."
              },
              {
                "type": "paragraph",
                "text": "Sometimes it is chemistry."
              },
              {
                "type": "paragraph",
                "text": "But sometimes uncertainty itself is intensifying attachment."
              },
              {
                "type": "paragraph",
                "text": "Attached provides a useful framework for understanding anxious and avoidant relationship patterns."
              },
              {
                "type": "paragraph",
                "text": "Someone with strong anxious tendencies may become increasingly focused on signs of rejection or abandonment. Someone with avoidant tendencies may experience closeness as pressure and seek greater distance."
              },
              {
                "type": "paragraph",
                "text": "When those tendencies interact, a cycle can develop:"
              },
              {
                "type": "paragraph",
                "text": "She seeks reassurance."
              },
              {
                "type": "paragraph",
                "text": "He withdraws."
              },
              {
                "type": "paragraph",
                "text": "His withdrawal increases her anxiety."
              },
              {
                "type": "paragraph",
                "text": "Her pursuit increases his discomfort."
              },
              {
                "type": "paragraph",
                "text": "He withdraws further."
              },
              {
                "type": "paragraph",
                "text": "Then, after distance becomes large enough, he may reconnect."
              },
              {
                "type": "paragraph",
                "text": "She experiences enormous relief."
              },
              {
                "type": "paragraph",
                "text": "The relief itself can make the relationship feel intensely rewarding."
              },
              {
                "type": "paragraph",
                "text": "But emotional relief is not the same thing as emotional security."
              },
              {
                "type": "paragraph",
                "text": "This is why some women discover that stable partners initially feel “less exciting” than inconsistent partners."
              },
              {
                "type": "paragraph",
                "text": "Their nervous system may have learned to associate uncertainty with intensity."
              },
              {
                "type": "paragraph",
                "text": "That does not mean secure relationships should feel emotionally flat."
              },
              {
                "type": "paragraph",
                "text": "It means constant anxiety should not automatically be interpreted as passion."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish:"
              },
              {
                "type": "paragraph",
                "text": "attraction from activation,"
              },
              {
                "type": "paragraph",
                "text": "chemistry from unpredictability,"
              },
              {
                "type": "paragraph",
                "text": "missing someone from feeling insecure about access to them."
              },
              {
                "type": "paragraph",
                "text": "You are also learning how your own attachment responses may influence the relationship."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose he does not reply for eight hours."
              },
              {
                "type": "paragraph",
                "text": "You send another message."
              },
              {
                "type": "paragraph",
                "text": "Then another."
              },
              {
                "type": "paragraph",
                "text": "Eventually he replies warmly."
              },
              {
                "type": "paragraph",
                "text": "The anxiety disappears immediately."
              },
              {
                "type": "paragraph",
                "text": "For the next several hours you feel close again."
              },
              {
                "type": "paragraph",
                "text": "You may interpret this emotional swing as:"
              },
              {
                "type": "paragraph",
                "text": "“We have such a powerful connection.”"
              },
              {
                "type": "paragraph",
                "text": "But ask:"
              },
              {
                "type": "paragraph",
                "text": "Would the connection still feel this powerful if his availability were predictable?"
              },
              {
                "type": "paragraph",
                "text": "That question can expose whether uncertainty has become part of the attraction."
              },
              {
                "type": "steps",
                "title": "Practice — The Activation vs Connection Test",
                "items": [
                  "Think about five emotionally intense moments with him.",
                  "For each one ask:",
                  "Was I experiencing closeness—or relief after uncertainty?",
                  "Did I feel secure before the interaction?",
                  "Was I afraid he was pulling away?",
                  "Did his attention calm an anxiety he had helped create?",
                  "Would I still consider this romantic if the pattern happened to my closest friend?",
                  "Then identify your most common response when you fear losing him:",
                  "pursuit,\noverexplaining,\napologizing excessively,\nsexual reassurance,\njealousy,\nmonitoring,\nemotional shutdown,\ntesting him,\nthreatening to leave.",
                  "Understanding the response gives you a chance to change it."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Recognize anxious-avoidant relationship dynamics.",
                  "Distinguish emotional security from relief after uncertainty.",
                  "Identify your own attachment-related reactions.",
                  "Evaluate whether unpredictability is amplifying attraction.",
                  "Respond to relational uncertainty more deliberately rather than automatically."
                ]
              }
            ]
          },
          {
            "title": "Stop Trying to Earn What Should Be Mutual",
            "subtitle": "Love becomes exhausting when your role changes from partner to persuader.",
            "sourceText": "Stop Trying to Earn What Should Be Mutual - Love becomes exhausting when your role changes from partner to persuader.\n\nOne of the most damaging relationship beliefs is:\n\n“If I love him well enough, eventually he will love me the way I need.”\n\nThis belief can keep a person emotionally invested for years.\n\nYou explain your needs more clearly.\n\nBecome more patient.\n\nBecome less demanding.\n\nGive him space.\n\nTry to be more attractive.\n\nAvoid difficult conversations.\n\nForgive another incident.\n\nSupport another crisis.\n\nWait for another promise.\n\nEventually your emotional life becomes organized around his potential rather than his actual behavior.\n\nNorwood’s work repeatedly examines this dynamic: love becomes entangled with rescuing, fixing, changing, or rehabilitating another person.\n\nThe relationship stops being evaluated according to reciprocity.\n\nInstead, the question becomes:\n\nHow much more should I give before he finally becomes capable of giving back?\n\nBut adult relationships are not rehabilitation programs.\n\nYou can encourage growth.\n\nYou can support someone.\n\nYou can have compassion for their history.\n\nYou cannot perform their emotional development for them.\n\nRicho’s concept of allowing is important here.\n\nAllowing another person to be who they actually are means surrendering the fantasy that love gives you the power to redesign them.\n\nSometimes acceptance produces closeness.\n\nSometimes acceptance produces a painful realization:\n\nThe person I love may genuinely be unable or unwilling to offer the relationship I need.\n\nThat realization can be more difficult than anger because it removes the project.\n\nThere is nothing left to fix.\n\nThere is only a decision.\n\nWhat You Are Learning\n\nYou are learning to distinguish:\n\nloving someone from managing them,\nsupporting someone from rescuing them,\ncommunicating needs from repeatedly negotiating basic standards,\nand believing in someone's potential from building a relationship around that potential.\nPractical Application\n\nHe says:\n\n“I know I need to communicate better.”\n\nThree months later, the same pattern continues.\n\nAfter another argument he says:\n\n“I promise I'll change.”\n\nYou feel hope.\n\nAgain.\n\nAt this point, the relevant question is no longer whether his apology is sincere.\n\nHe may genuinely mean it every time.\n\nThe relevant question is:\n\nDoes sincere regret reliably become different behavior?\n\nRelationships are lived through patterns, not intentions.\n\nPractice — Potential vs Reality\n\nCreate two columns.\n\nWho He Could Be\n\nWrite everything you believe he could become if he:\n\nhealed,\ncommitted,\ncommunicated,\nstopped drinking,\nbecame more responsible,\nprocessed his past,\nbecame emotionally available.\n\nThen write:\n\nWho He Is With Me Right Now\n\nDescribe only repeated observable behavior.\n\nNow ask:\n\nIf nothing changed for the next three years, would I still choose this relationship?\n\nDo not answer according to the man you hope he becomes.\n\nAnswer according to the relationship you actually have.\n\nAfter This Section, You Will Be Able To\nIdentify when love has turned into a project of changing your partner.\nSeparate potential from demonstrated relationship capacity.\nEvaluate apologies according to behavioral change.\nStop assuming responsibility for another adult's emotional development.\nDecide what you can accept without abandoning your own needs.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "One of the most damaging relationship beliefs is:"
              },
              {
                "type": "paragraph",
                "text": "“If I love him well enough, eventually he will love me the way I need.”"
              },
              {
                "type": "paragraph",
                "text": "This belief can keep a person emotionally invested for years."
              },
              {
                "type": "paragraph",
                "text": "You explain your needs more clearly."
              },
              {
                "type": "paragraph",
                "text": "Become more patient."
              },
              {
                "type": "paragraph",
                "text": "Become less demanding."
              },
              {
                "type": "paragraph",
                "text": "Give him space."
              },
              {
                "type": "paragraph",
                "text": "Try to be more attractive."
              },
              {
                "type": "paragraph",
                "text": "Avoid difficult conversations."
              },
              {
                "type": "paragraph",
                "text": "Forgive another incident."
              },
              {
                "type": "paragraph",
                "text": "Support another crisis."
              },
              {
                "type": "paragraph",
                "text": "Wait for another promise."
              },
              {
                "type": "paragraph",
                "text": "Eventually your emotional life becomes organized around his potential rather than his actual behavior."
              },
              {
                "type": "paragraph",
                "text": "Norwood’s work repeatedly examines this dynamic: love becomes entangled with rescuing, fixing, changing, or rehabilitating another person."
              },
              {
                "type": "paragraph",
                "text": "The relationship stops being evaluated according to reciprocity."
              },
              {
                "type": "paragraph",
                "text": "Instead, the question becomes:"
              },
              {
                "type": "paragraph",
                "text": "How much more should I give before he finally becomes capable of giving back?"
              },
              {
                "type": "paragraph",
                "text": "But adult relationships are not rehabilitation programs."
              },
              {
                "type": "paragraph",
                "text": "You can encourage growth."
              },
              {
                "type": "paragraph",
                "text": "You can support someone."
              },
              {
                "type": "paragraph",
                "text": "You can have compassion for their history."
              },
              {
                "type": "paragraph",
                "text": "You cannot perform their emotional development for them."
              },
              {
                "type": "paragraph",
                "text": "Richo’s concept of allowing is important here."
              },
              {
                "type": "paragraph",
                "text": "Allowing another person to be who they actually are means surrendering the fantasy that love gives you the power to redesign them."
              },
              {
                "type": "paragraph",
                "text": "Sometimes acceptance produces closeness."
              },
              {
                "type": "paragraph",
                "text": "Sometimes acceptance produces a painful realization:"
              },
              {
                "type": "paragraph",
                "text": "The person I love may genuinely be unable or unwilling to offer the relationship I need."
              },
              {
                "type": "paragraph",
                "text": "That realization can be more difficult than anger because it removes the project."
              },
              {
                "type": "paragraph",
                "text": "There is nothing left to fix."
              },
              {
                "type": "paragraph",
                "text": "There is only a decision."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish:"
              },
              {
                "type": "paragraph",
                "text": "loving someone from managing them,\nsupporting someone from rescuing them,\ncommunicating needs from repeatedly negotiating basic standards,\nand believing in someone's potential from building a relationship around that potential.\nPractical Application"
              },
              {
                "type": "paragraph",
                "text": "He says:"
              },
              {
                "type": "paragraph",
                "text": "“I know I need to communicate better.”"
              },
              {
                "type": "paragraph",
                "text": "Three months later, the same pattern continues."
              },
              {
                "type": "paragraph",
                "text": "After another argument he says:"
              },
              {
                "type": "paragraph",
                "text": "“I promise I'll change.”"
              },
              {
                "type": "paragraph",
                "text": "You feel hope."
              },
              {
                "type": "paragraph",
                "text": "Again."
              },
              {
                "type": "paragraph",
                "text": "At this point, the relevant question is no longer whether his apology is sincere."
              },
              {
                "type": "paragraph",
                "text": "He may genuinely mean it every time."
              },
              {
                "type": "paragraph",
                "text": "The relevant question is:"
              },
              {
                "type": "paragraph",
                "text": "Does sincere regret reliably become different behavior?"
              },
              {
                "type": "paragraph",
                "text": "Relationships are lived through patterns, not intentions."
              },
              {
                "type": "steps",
                "title": "Practice — Potential vs Reality",
                "items": [
                  "Create two columns.",
                  "Who He Could Be",
                  "Write everything you believe he could become if he:",
                  "healed,\ncommitted,\ncommunicated,\nstopped drinking,\nbecame more responsible,\nprocessed his past,\nbecame emotionally available.",
                  "Then write:",
                  "Who He Is With Me Right Now",
                  "Describe only repeated observable behavior.",
                  "Now ask:",
                  "If nothing changed for the next three years, would I still choose this relationship?",
                  "Do not answer according to the man you hope he becomes.",
                  "Answer according to the relationship you actually have."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify when love has turned into a project of changing your partner.",
                  "Separate potential from demonstrated relationship capacity.",
                  "Evaluate apologies according to behavioral change.",
                  "Stop assuming responsibility for another adult's emotional development.",
                  "Decide what you can accept without abandoning your own needs."
                ]
              }
            ]
          },
          {
            "title": "Boundaries Are Where Love Meets Self",
            "subtitle": "Respect",
            "sourceText": "Boundaries Are Where Love Meets Self-Respect - A boundary does not control what he does. It determines what you will participate in.\n\nBoundaries are frequently misunderstood.\n\nPeople say:\n\n“You're not allowed to talk to her.”\n\n“You have to answer my messages.”\n\n“You can't go out with your friends.”\n\nThese may be demands or relationship agreements, but they are not automatically boundaries.\n\nA genuine boundary is centered on your participation.\n\nFor example:\n\n“If shouting begins, I will end the conversation and return when we can speak respectfully.”\n\n“If exclusivity is not what you want, I will not continue this relationship as an exclusive partnership.”\n\n“If you repeatedly disappear for days without communication, this relationship will not work for me.”\n\nThe difference is subtle but powerful.\n\nControl says:\n\nYou must behave this way so I feel safe.\n\nA boundary says:\n\nYou are free to choose your behavior, and I am responsible for deciding what I will remain available for.\n\nRicho's Five A's make this especially important.\n\nAcceptance does not mean approving everything.\n\nAllowing does not mean tolerating everything.\n\nYou can acknowledge another person's right to live according to their choices while simultaneously recognizing that those choices may make intimacy with them impossible.\n\nTatkin's secure-functioning model adds another layer: healthy relationships require explicit agreements and mutual protection.\n\nBoundaries should not become two people defending separate territories forever.\n\nIn secure relationships they gradually become shared agreements:\n\nWhat do we both believe protects this relationship?\n\nHealthy couples discuss fidelity.\n\nPrivacy.\n\nDigital behavior.\n\nConflict.\n\nMoney.\n\nFamily.\n\nFriendships.\n\nSex.\n\nTime.\n\nCommunication.\n\nThe goal is not maximum restriction.\n\nIt is maximum clarity.\n\nWhat You Are Learning\n\nYou are learning how to create boundaries that are clear, behavioral, realistic, and enforceable.\n\nYou will distinguish:\n\nboundary,\nrequest,\npreference,\nagreement,\nultimatum,\nand control.\n\nYou will also learn that a boundary repeatedly stated but never enforced eventually teaches the other person that it is optional.\n\nPractical Application\n\nSuppose he repeatedly insults you during arguments.\n\nYou say:\n\n“Please don't speak to me that way.”\n\nNothing changes.\n\nYou say it again.\n\nNothing changes.\n\nEventually the problem is no longer only that he violates the boundary.\n\nYou must ask:\n\nWhat action am I willing to take when the boundary is crossed?\n\nPerhaps:\n\n“I want to resolve problems with you. But I will not continue conversations where either of us insults the other. If that happens, I will leave the conversation and we can revisit it later.”\n\nThe boundary now includes behavior.\n\nPractice — Rewrite Your Boundaries\n\nWrite five statements beginning with:\n\n“He needs to...”\n\nExample:\n\n“He needs to stop disappearing.”\n\nNow rewrite each into:\n\n“If X continues, I will...”\n\nExample:\n\n“If prolonged unexplained disappearances continue, I will reconsider whether this relationship meets my requirements for reliability.”\n\nThen identify:\n\nWhat consequence can I genuinely carry out?\n\nA boundary you are unwilling to uphold is not yet a functioning boundary.\n\nAfter This Section, You Will Be Able To\nDistinguish boundaries from control and demands.\nCommunicate relationship limits clearly.\nCreate consequences you can realistically enforce.\nEvaluate whether important relationship agreements are mutual.\nProtect self-respect without using boundaries as punishment.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "A boundary does not control what he does. It determines what you will participate in."
              },
              {
                "type": "paragraph",
                "text": "Boundaries are frequently misunderstood."
              },
              {
                "type": "paragraph",
                "text": "People say:"
              },
              {
                "type": "paragraph",
                "text": "“You're not allowed to talk to her.”"
              },
              {
                "type": "paragraph",
                "text": "“You have to answer my messages.”"
              },
              {
                "type": "paragraph",
                "text": "“You can't go out with your friends.”"
              },
              {
                "type": "paragraph",
                "text": "These may be demands or relationship agreements, but they are not automatically boundaries."
              },
              {
                "type": "paragraph",
                "text": "A genuine boundary is centered on your participation."
              },
              {
                "type": "paragraph",
                "text": "For example:"
              },
              {
                "type": "paragraph",
                "text": "“If shouting begins, I will end the conversation and return when we can speak respectfully.”"
              },
              {
                "type": "paragraph",
                "text": "“If exclusivity is not what you want, I will not continue this relationship as an exclusive partnership.”"
              },
              {
                "type": "paragraph",
                "text": "“If you repeatedly disappear for days without communication, this relationship will not work for me.”"
              },
              {
                "type": "paragraph",
                "text": "The difference is subtle but powerful."
              },
              {
                "type": "paragraph",
                "text": "Control says:"
              },
              {
                "type": "paragraph",
                "text": "You must behave this way so I feel safe."
              },
              {
                "type": "paragraph",
                "text": "A boundary says:"
              },
              {
                "type": "paragraph",
                "text": "You are free to choose your behavior, and I am responsible for deciding what I will remain available for."
              },
              {
                "type": "paragraph",
                "text": "Richo's Five A's make this especially important."
              },
              {
                "type": "paragraph",
                "text": "Acceptance does not mean approving everything."
              },
              {
                "type": "paragraph",
                "text": "Allowing does not mean tolerating everything."
              },
              {
                "type": "paragraph",
                "text": "You can acknowledge another person's right to live according to their choices while simultaneously recognizing that those choices may make intimacy with them impossible."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning model adds another layer: healthy relationships require explicit agreements and mutual protection."
              },
              {
                "type": "paragraph",
                "text": "Boundaries should not become two people defending separate territories forever."
              },
              {
                "type": "paragraph",
                "text": "In secure relationships they gradually become shared agreements:"
              },
              {
                "type": "paragraph",
                "text": "What do we both believe protects this relationship?"
              },
              {
                "type": "paragraph",
                "text": "Healthy couples discuss fidelity."
              },
              {
                "type": "paragraph",
                "text": "Privacy."
              },
              {
                "type": "paragraph",
                "text": "Digital behavior."
              },
              {
                "type": "paragraph",
                "text": "Conflict."
              },
              {
                "type": "paragraph",
                "text": "Money."
              },
              {
                "type": "paragraph",
                "text": "Family."
              },
              {
                "type": "paragraph",
                "text": "Friendships."
              },
              {
                "type": "paragraph",
                "text": "Sex."
              },
              {
                "type": "paragraph",
                "text": "Time."
              },
              {
                "type": "paragraph",
                "text": "Communication."
              },
              {
                "type": "paragraph",
                "text": "The goal is not maximum restriction."
              },
              {
                "type": "paragraph",
                "text": "It is maximum clarity."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning how to create boundaries that are clear, behavioral, realistic, and enforceable."
              },
              {
                "type": "paragraph",
                "text": "You will distinguish:"
              },
              {
                "type": "paragraph",
                "text": "boundary,\nrequest,\npreference,\nagreement,\nultimatum,\nand control."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that a boundary repeatedly stated but never enforced eventually teaches the other person that it is optional."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose he repeatedly insults you during arguments."
              },
              {
                "type": "paragraph",
                "text": "You say:"
              },
              {
                "type": "paragraph",
                "text": "“Please don't speak to me that way.”"
              },
              {
                "type": "paragraph",
                "text": "Nothing changes."
              },
              {
                "type": "paragraph",
                "text": "You say it again."
              },
              {
                "type": "paragraph",
                "text": "Nothing changes."
              },
              {
                "type": "paragraph",
                "text": "Eventually the problem is no longer only that he violates the boundary."
              },
              {
                "type": "paragraph",
                "text": "You must ask:"
              },
              {
                "type": "paragraph",
                "text": "What action am I willing to take when the boundary is crossed?"
              },
              {
                "type": "paragraph",
                "text": "Perhaps:"
              },
              {
                "type": "paragraph",
                "text": "“I want to resolve problems with you. But I will not continue conversations where either of us insults the other. If that happens, I will leave the conversation and we can revisit it later.”"
              },
              {
                "type": "paragraph",
                "text": "The boundary now includes behavior."
              },
              {
                "type": "steps",
                "title": "Practice — Rewrite Your Boundaries",
                "items": [
                  "Write five statements beginning with:",
                  "“He needs to...”",
                  "Example:",
                  "“He needs to stop disappearing.”",
                  "Now rewrite each into:",
                  "“If X continues, I will...”",
                  "Example:",
                  "“If prolonged unexplained disappearances continue, I will reconsider whether this relationship meets my requirements for reliability.”",
                  "Then identify:",
                  "What consequence can I genuinely carry out?",
                  "A boundary you are unwilling to uphold is not yet a functioning boundary."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish boundaries from control and demands.",
                  "Communicate relationship limits clearly.",
                  "Create consequences you can realistically enforce.",
                  "Evaluate whether important relationship agreements are mutual.",
                  "Protect self-respect without using boundaries as punishment."
                ]
              }
            ]
          },
          {
            "title": "Decide Whether This Love Can Become Safe",
            "subtitle": "Not every difficult relationship must end",
            "sourceText": "Decide Whether This Love Can Become Safe - Not every difficult relationship must end—but love alone cannot make every relationship workable.\n\nOnce you stop trying to rescue the relationship, a more serious question becomes possible:\n\nCan this relationship actually become healthy?\n\nThe answer should not depend solely on:\n\nhow much you love him,\n\nhow long you have been together,\n\nhow painful leaving would feel,\n\nor how wonderful the relationship can be during good periods.\n\nA viable relationship needs capacity.\n\nTatkin's secure-functioning approach is especially useful here because it focuses on the relationship both partners create.\n\nCan you protect one another emotionally?\n\nCan disagreements happen without humiliation or abandonment?\n\nAre promises reliable?\n\nCan trust be repaired?\n\nDo both people adapt?\n\nDoes each partner care about the other's wellbeing?\n\nCan you create agreements that both people follow?\n\nAttached adds availability and responsiveness.\n\nRicho adds acceptance, affection, attention, appreciation, allowing, boundaries, and emotional adulthood.\n\nTogether these ideas produce an important distinction:\n\nRelationship problems versus relationship structure.\n\nA relationship problem might be:\n\n“We disagree about how often to visit family.”\n\nA structural problem might be:\n\n“He refuses to discuss anything that makes him uncomfortable.”\n\nProblems can often be negotiated.\n\nStructural problems affect the ability to negotiate anything.\n\nThis is why the most important question is not:\n\nDo we have problems?\n\nEvery relationship does.\n\nIt is:\n\nDo we have the capacity to work on problems together?\n\nWhat You Are Learning\n\nYou are learning to evaluate a relationship according to:\n\nreciprocity,\nemotional safety,\naccountability,\nresponsiveness,\ntrust,\ncompatibility,\nrepair,\nrespect,\nwillingness,\nand sustained behavioral change.\nPractical Application\n\nTwo couples may both argue frequently.\n\nIn Couple A:\n\nBoth sometimes become reactive, but they apologize, discuss what happened, change behavior, and gradually improve.\n\nIn Couple B:\n\nOne person repeatedly insults, disappears, lies, or refuses responsibility while the other repeatedly attempts repair.\n\nThe number of arguments may look similar.\n\nThe relationship capacity is completely different.\n\nThis is why “we fight sometimes” tells you almost nothing.\n\nThe quality of repair matters far more.\n\nPractice — The Relationship Viability Test\n\nScore each from 0–5:\n\nSafety\n\nRespect\n\nTrust\n\nReciprocity\n\nCommunication\n\nAccountability\n\nReliability\n\nConflict repair\n\nBoundary respect\n\nShared values\n\nFuture compatibility\n\nMutual willingness to change\n\nNow answer:\n\nWhich score exists because of actual behavior?\n\nWhich score exists mainly because I believe he can improve?\n\nThen ask:\n\nIf I met him today exactly as he is now, would I choose this relationship again?\n\nThat question strips away sunk cost.\n\nAfter This Section, You Will Be Able To\nEvaluate whether a relationship has genuine repair capacity.\nDistinguish temporary relationship problems from structural dysfunction.\nAssess reciprocity and emotional safety realistically.\nIdentify whether change is mutual or carried primarily by one person.\nMake relationship decisions from evidence rather than history or fear.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "but love alone cannot make every relationship workable."
              },
              {
                "type": "paragraph",
                "text": "Once you stop trying to rescue the relationship, a more serious question becomes possible:"
              },
              {
                "type": "paragraph",
                "text": "Can this relationship actually become healthy?"
              },
              {
                "type": "paragraph",
                "text": "The answer should not depend solely on:"
              },
              {
                "type": "paragraph",
                "text": "how much you love him,"
              },
              {
                "type": "paragraph",
                "text": "how long you have been together,"
              },
              {
                "type": "paragraph",
                "text": "how painful leaving would feel,"
              },
              {
                "type": "paragraph",
                "text": "or how wonderful the relationship can be during good periods."
              },
              {
                "type": "paragraph",
                "text": "A viable relationship needs capacity."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach is especially useful here because it focuses on the relationship both partners create."
              },
              {
                "type": "paragraph",
                "text": "Can you protect one another emotionally?"
              },
              {
                "type": "paragraph",
                "text": "Can disagreements happen without humiliation or abandonment?"
              },
              {
                "type": "paragraph",
                "text": "Are promises reliable?"
              },
              {
                "type": "paragraph",
                "text": "Can trust be repaired?"
              },
              {
                "type": "paragraph",
                "text": "Do both people adapt?"
              },
              {
                "type": "paragraph",
                "text": "Does each partner care about the other's wellbeing?"
              },
              {
                "type": "paragraph",
                "text": "Can you create agreements that both people follow?"
              },
              {
                "type": "paragraph",
                "text": "Attached adds availability and responsiveness."
              },
              {
                "type": "paragraph",
                "text": "Richo adds acceptance, affection, attention, appreciation, allowing, boundaries, and emotional adulthood."
              },
              {
                "type": "paragraph",
                "text": "Together these ideas produce an important distinction:"
              },
              {
                "type": "paragraph",
                "text": "Relationship problems versus relationship structure."
              },
              {
                "type": "paragraph",
                "text": "A relationship problem might be:"
              },
              {
                "type": "paragraph",
                "text": "“We disagree about how often to visit family.”"
              },
              {
                "type": "paragraph",
                "text": "A structural problem might be:"
              },
              {
                "type": "paragraph",
                "text": "“He refuses to discuss anything that makes him uncomfortable.”"
              },
              {
                "type": "paragraph",
                "text": "Problems can often be negotiated."
              },
              {
                "type": "paragraph",
                "text": "Structural problems affect the ability to negotiate anything."
              },
              {
                "type": "paragraph",
                "text": "This is why the most important question is not:"
              },
              {
                "type": "paragraph",
                "text": "Do we have problems?"
              },
              {
                "type": "paragraph",
                "text": "Every relationship does."
              },
              {
                "type": "paragraph",
                "text": "It is:"
              },
              {
                "type": "paragraph",
                "text": "Do we have the capacity to work on problems together?"
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to evaluate a relationship according to:"
              },
              {
                "type": "paragraph",
                "text": "reciprocity,\nemotional safety,\naccountability,\nresponsiveness,\ntrust,\ncompatibility,\nrepair,\nrespect,\nwillingness,\nand sustained behavioral change.\nPractical Application"
              },
              {
                "type": "paragraph",
                "text": "Two couples may both argue frequently."
              },
              {
                "type": "paragraph",
                "text": "In Couple A:"
              },
              {
                "type": "paragraph",
                "text": "Both sometimes become reactive, but they apologize, discuss what happened, change behavior, and gradually improve."
              },
              {
                "type": "paragraph",
                "text": "In Couple B:"
              },
              {
                "type": "paragraph",
                "text": "One person repeatedly insults, disappears, lies, or refuses responsibility while the other repeatedly attempts repair."
              },
              {
                "type": "paragraph",
                "text": "The number of arguments may look similar."
              },
              {
                "type": "paragraph",
                "text": "The relationship capacity is completely different."
              },
              {
                "type": "paragraph",
                "text": "This is why “we fight sometimes” tells you almost nothing."
              },
              {
                "type": "paragraph",
                "text": "The quality of repair matters far more."
              },
              {
                "type": "steps",
                "title": "Practice — The Relationship Viability Test",
                "items": [
                  "Score each from 0–5:",
                  "Safety",
                  "Respect",
                  "Trust",
                  "Reciprocity",
                  "Communication",
                  "Accountability",
                  "Reliability",
                  "Conflict repair",
                  "Boundary respect",
                  "Shared values",
                  "Future compatibility",
                  "Mutual willingness to change",
                  "Now answer:",
                  "Which score exists because of actual behavior?",
                  "Which score exists mainly because I believe he can improve?",
                  "Then ask:",
                  "If I met him today exactly as he is now, would I choose this relationship again?",
                  "That question strips away sunk cost."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Evaluate whether a relationship has genuine repair capacity.",
                  "Distinguish temporary relationship problems from structural dysfunction.",
                  "Assess reciprocity and emotional safety realistically.",
                  "Identify whether change is mutual or carried primarily by one person.",
                  "Make relationship decisions from evidence rather than history or fear."
                ]
              }
            ]
          },
          {
            "title": "When Leaving Hurts More Than Staying but Staying Costs More",
            "subtitle": "Sometimes the hardest relationship decision is choosing temporary pain over permanent erosion.",
            "sourceText": "When Leaving Hurts More Than Staying but Staying Costs More - Sometimes the hardest relationship decision is choosing temporary pain over permanent erosion.\n\nLeaving does not automatically feel empowering.\n\nSometimes it feels terrible.\n\nYou may know intellectually that the relationship is unhealthy and still desperately miss him.\n\nYou may remember everything good about him the moment you consider leaving.\n\nYou may imagine him changing for someone else.\n\nYou may fear being alone.\n\nYou may wonder whether you were too demanding.\n\nYou may worry that you will regret the decision forever.\n\nThese feelings do not necessarily mean you should return.\n\nThey mean attachment does not disappear the moment judgment becomes clear.\n\nThis distinction is essential.\n\nPeople sometimes assume:\n\n“If leaving is this painful, maybe leaving is wrong.”\n\nBut painful and wrong are not synonyms.\n\nRicho's treatment of relationship endings helps here. Mature love includes the ability to confront loss rather than demanding that every meaningful relationship continue indefinitely.\n\nNorwood's recovery perspective contributes another important insight: when a person's emotional life has become organized around another individual, separation can initially feel like losing much more than the partner.\n\nYou may also lose:\n\nyour emotional project,\n\nyour daily focus,\n\nyour role as rescuer,\n\nyour imagined future,\n\nyour source of intensity,\n\nyour identity as his partner.\n\nThis is why leaving can create emptiness even when the relationship itself was exhausting.\n\nYou are not only losing him.\n\nYou are learning who you are without managing the relationship.\n\nWhat You Are Learning\n\nYou are learning how to leave without turning grief into evidence that the relationship should be restarted.\n\nYou will also learn how to reduce behaviors that keep the attachment continually activated:\n\nconstant checking,\n\nunnecessary contact,\n\nsocial-media monitoring,\n\nasking mutual friends for updates,\n\nand using new partners primarily to avoid grief.\n\nPractical Application\n\nSuppose three weeks after ending the relationship you feel worse than you did during the relationship.\n\nYour mind says:\n\n“At least when we were together, I wasn't this lonely.”\n\nThat may be true.\n\nBut compare the correct things.\n\nDo not compare:\n\ntoday's worst breakup day\n\nwith\n\nthe relationship's best memory.\n\nCompare the broader realities:\n\nWho were you becoming while staying?\n\nWhat repeatedly happened?\n\nWhat did staying require?\n\nWhat would returning require you to ignore?\n\nGrief can distort comparison.\n\nPractice — The Return Test\n\nWhenever you strongly want to go back, answer:\n\nWhat am I feeling right now?\n\nWhat triggered the urge?\n\nWhat exactly do I miss?\n\nWhat relationship problem has actually changed?\n\nWhat evidence do I have of change?\n\nIf I return today, what will be different besides my temporary relief?\n\nSave the answers.\n\nCompare them across several weeks.\n\nYou may discover that the desire to return rises and falls with loneliness rather than with new evidence about the relationship.\n\nAfter This Section, You Will Be Able To\nUnderstand why leaving can hurt even when leaving is healthy.\nSeparate attachment grief from relationship viability.\nRecognize behaviors that repeatedly reactivate the bond.\nEvaluate reunion based on changed conditions rather than emotional discomfort.\nBegin rebuilding identity outside the relationship.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Leaving does not automatically feel empowering."
              },
              {
                "type": "paragraph",
                "text": "Sometimes it feels terrible."
              },
              {
                "type": "paragraph",
                "text": "You may know intellectually that the relationship is unhealthy and still desperately miss him."
              },
              {
                "type": "paragraph",
                "text": "You may remember everything good about him the moment you consider leaving."
              },
              {
                "type": "paragraph",
                "text": "You may imagine him changing for someone else."
              },
              {
                "type": "paragraph",
                "text": "You may fear being alone."
              },
              {
                "type": "paragraph",
                "text": "You may wonder whether you were too demanding."
              },
              {
                "type": "paragraph",
                "text": "You may worry that you will regret the decision forever."
              },
              {
                "type": "paragraph",
                "text": "These feelings do not necessarily mean you should return."
              },
              {
                "type": "paragraph",
                "text": "They mean attachment does not disappear the moment judgment becomes clear."
              },
              {
                "type": "paragraph",
                "text": "This distinction is essential."
              },
              {
                "type": "paragraph",
                "text": "People sometimes assume:"
              },
              {
                "type": "paragraph",
                "text": "“If leaving is this painful, maybe leaving is wrong.”"
              },
              {
                "type": "paragraph",
                "text": "But painful and wrong are not synonyms."
              },
              {
                "type": "paragraph",
                "text": "Richo's treatment of relationship endings helps here. Mature love includes the ability to confront loss rather than demanding that every meaningful relationship continue indefinitely."
              },
              {
                "type": "paragraph",
                "text": "Norwood's recovery perspective contributes another important insight: when a person's emotional life has become organized around another individual, separation can initially feel like losing much more than the partner."
              },
              {
                "type": "paragraph",
                "text": "You may also lose:"
              },
              {
                "type": "paragraph",
                "text": "your emotional project,"
              },
              {
                "type": "paragraph",
                "text": "your daily focus,"
              },
              {
                "type": "paragraph",
                "text": "your role as rescuer,"
              },
              {
                "type": "paragraph",
                "text": "your imagined future,"
              },
              {
                "type": "paragraph",
                "text": "your source of intensity,"
              },
              {
                "type": "paragraph",
                "text": "your identity as his partner."
              },
              {
                "type": "paragraph",
                "text": "This is why leaving can create emptiness even when the relationship itself was exhausting."
              },
              {
                "type": "paragraph",
                "text": "You are not only losing him."
              },
              {
                "type": "paragraph",
                "text": "You are learning who you are without managing the relationship."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning how to leave without turning grief into evidence that the relationship should be restarted."
              },
              {
                "type": "paragraph",
                "text": "You will also learn how to reduce behaviors that keep the attachment continually activated:"
              },
              {
                "type": "paragraph",
                "text": "constant checking,"
              },
              {
                "type": "paragraph",
                "text": "unnecessary contact,"
              },
              {
                "type": "paragraph",
                "text": "social-media monitoring,"
              },
              {
                "type": "paragraph",
                "text": "asking mutual friends for updates,"
              },
              {
                "type": "paragraph",
                "text": "and using new partners primarily to avoid grief."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose three weeks after ending the relationship you feel worse than you did during the relationship."
              },
              {
                "type": "paragraph",
                "text": "Your mind says:"
              },
              {
                "type": "paragraph",
                "text": "“At least when we were together, I wasn't this lonely.”"
              },
              {
                "type": "paragraph",
                "text": "That may be true."
              },
              {
                "type": "paragraph",
                "text": "But compare the correct things."
              },
              {
                "type": "paragraph",
                "text": "Do not compare:"
              },
              {
                "type": "paragraph",
                "text": "today's worst breakup day"
              },
              {
                "type": "paragraph",
                "text": "with"
              },
              {
                "type": "paragraph",
                "text": "the relationship's best memory."
              },
              {
                "type": "paragraph",
                "text": "Compare the broader realities:"
              },
              {
                "type": "paragraph",
                "text": "Who were you becoming while staying?"
              },
              {
                "type": "paragraph",
                "text": "What repeatedly happened?"
              },
              {
                "type": "paragraph",
                "text": "What did staying require?"
              },
              {
                "type": "paragraph",
                "text": "What would returning require you to ignore?"
              },
              {
                "type": "paragraph",
                "text": "Grief can distort comparison."
              },
              {
                "type": "steps",
                "title": "Practice — The Return Test",
                "items": [
                  "Whenever you strongly want to go back, answer:",
                  "What am I feeling right now?",
                  "What triggered the urge?",
                  "What exactly do I miss?",
                  "What relationship problem has actually changed?",
                  "What evidence do I have of change?",
                  "If I return today, what will be different besides my temporary relief?",
                  "Save the answers.",
                  "Compare them across several weeks.",
                  "You may discover that the desire to return rises and falls with loneliness rather than with new evidence about the relationship."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Understand why leaving can hurt even when leaving is healthy.",
                  "Separate attachment grief from relationship viability.",
                  "Recognize behaviors that repeatedly reactivate the bond.",
                  "Evaluate reunion based on changed conditions rather than emotional discomfort.",
                  "Begin rebuilding identity outside the relationship."
                ]
              }
            ]
          },
          {
            "title": "Love Again Without Losing Yourself",
            "subtitle": "The goal is not to become harder to hurt. It is to become harder to abandon.",
            "sourceText": "Love Again Without Losing Yourself - The goal is not to become harder to hurt. It is to become harder to abandon.\n\nThe danger after an exhausting relationship is overcorrection.\n\nYou may decide:\n\n“I'll never trust anyone that much again.”\n\n“I will leave the moment a man disappoints me.”\n\n“I don't need anybody.”\n\n“I'll keep everything casual.”\n\nEmotional distance can feel like strength after overinvestment.\n\nBut avoiding intimacy is not the opposite of unhealthy attachment.\n\nIt is another way fear can organize relationships.\n\nThe better objective is secure interdependence.\n\nYou can love deeply.\n\nNeed someone.\n\nDepend on someone.\n\nBuild a life together.\n\nAnd still retain your standards, friendships, identity, voice, boundaries, and ability to leave if the relationship becomes fundamentally incompatible with your wellbeing.\n\nAttached helps you recognize availability and compatibility earlier.\n\nTatkin helps you evaluate whether the two of you can create secure functioning.\n\nRicho reminds you that mature loving combines closeness with allowing.\n\nNorwood's work warns against disappearing into another person's problems.\n\nTogether, the lesson becomes:\n\nLove should expand your life, not require you to continuously shrink yourself to keep it.\n\nThat does not mean every healthy relationship feels easy.\n\nYou will compromise.\n\nYou will sometimes prioritize your partner.\n\nYou may support him through illness, grief, unemployment, family difficulty, or periods when he cannot give equally.\n\nHealthy relationships are not mathematically balanced every day.\n\nThe deeper question is whether sacrifice exists inside reciprocity and respect.\n\nDoes he care what the sacrifice costs you?\n\nWould he make comparable sacrifices?\n\nCan you speak honestly about your needs?\n\nCan the relationship adapt?\n\nDo you remain recognizable to yourself?\n\nThose questions distinguish devotion from self-erasure.\n\nWhat You Are Learning\n\nYou are integrating a new relationship standard.\n\nInstead of selecting primarily for:\n\nchemistry,\n\nintensity,\n\npotential,\n\nstatus,\n\nappearance,\n\nor the thrill of being chosen,\n\nyou learn to include:\n\nconsistency,\n\navailability,\n\nreciprocity,\n\nemotional responsibility,\n\nboundary respect,\n\nshared values,\n\nand repair capacity.\n\nPractical Application\n\nImagine meeting a man who is warm, consistent, communicative, and interested.\n\nHe tells you where you stand.\n\nThere are no disappearing acts.\n\nNo need to decode messages.\n\nNo constant question about whether he wants you.\n\nPart of you may initially think:\n\n“Something is missing.”\n\nBefore assuming there is no chemistry, ask:\n\nIs something missing—or is anxiety missing?\n\nIf previous relationships linked attraction with uncertainty, security may initially feel unfamiliar.\n\nUnfamiliar does not automatically mean wrong.\n\nPractice — Your Relationship Standard\n\nCreate three categories.\n\nNon-Negotiables\n\nExamples:\n\nrespect,\nhonesty,\nfidelity if monogamous,\nemotional safety,\nboundary respect.\nImportant Preferences\n\nExamples:\n\ncommunication style,\nlifestyle,\naffection,\nambition,\nsocial habits.\nFlexible Differences\n\nThings you can comfortably negotiate.\n\nThen complete:\n\nIn my next relationship, I will not confuse ____ with love.\n\nI will speak sooner when ____ happens.\n\nI will stop trying to rescue someone from _____.\n\nI know I am beginning to lose myself when _____.\n\nA partner earns deeper trust from me by _____.\n\nI will know love is costing too much when _____.\n\nReview these standards when you begin dating—not only after becoming emotionally attached.\n\nAfter This Section, You Will Be Able To\nEnter future relationships without becoming emotionally closed.\nEvaluate partners for availability, reciprocity, and secure relationship capacity.\nDistinguish healthy sacrifice from chronic self-erasure.\nMaintain boundaries and identity while becoming deeply attached.\nRecognize unhealthy patterns earlier instead of waiting until leaving becomes extremely difficult.\nChoose relationships in which love and self-respect can coexist.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "The danger after an exhausting relationship is overcorrection."
              },
              {
                "type": "paragraph",
                "text": "You may decide:"
              },
              {
                "type": "paragraph",
                "text": "“I'll never trust anyone that much again.”"
              },
              {
                "type": "paragraph",
                "text": "“I will leave the moment a man disappoints me.”"
              },
              {
                "type": "paragraph",
                "text": "“I don't need anybody.”"
              },
              {
                "type": "paragraph",
                "text": "“I'll keep everything casual.”"
              },
              {
                "type": "paragraph",
                "text": "Emotional distance can feel like strength after overinvestment."
              },
              {
                "type": "paragraph",
                "text": "But avoiding intimacy is not the opposite of unhealthy attachment."
              },
              {
                "type": "paragraph",
                "text": "It is another way fear can organize relationships."
              },
              {
                "type": "paragraph",
                "text": "The better objective is secure interdependence."
              },
              {
                "type": "paragraph",
                "text": "You can love deeply."
              },
              {
                "type": "paragraph",
                "text": "Need someone."
              },
              {
                "type": "paragraph",
                "text": "Depend on someone."
              },
              {
                "type": "paragraph",
                "text": "Build a life together."
              },
              {
                "type": "paragraph",
                "text": "And still retain your standards, friendships, identity, voice, boundaries, and ability to leave if the relationship becomes fundamentally incompatible with your wellbeing."
              },
              {
                "type": "paragraph",
                "text": "Attached helps you recognize availability and compatibility earlier."
              },
              {
                "type": "paragraph",
                "text": "Tatkin helps you evaluate whether the two of you can create secure functioning."
              },
              {
                "type": "paragraph",
                "text": "Richo reminds you that mature loving combines closeness with allowing."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work warns against disappearing into another person's problems."
              },
              {
                "type": "paragraph",
                "text": "Together, the lesson becomes:"
              },
              {
                "type": "paragraph",
                "text": "Love should expand your life, not require you to continuously shrink yourself to keep it."
              },
              {
                "type": "paragraph",
                "text": "That does not mean every healthy relationship feels easy."
              },
              {
                "type": "paragraph",
                "text": "You will compromise."
              },
              {
                "type": "paragraph",
                "text": "You will sometimes prioritize your partner."
              },
              {
                "type": "paragraph",
                "text": "You may support him through illness, grief, unemployment, family difficulty, or periods when he cannot give equally."
              },
              {
                "type": "paragraph",
                "text": "Healthy relationships are not mathematically balanced every day."
              },
              {
                "type": "paragraph",
                "text": "The deeper question is whether sacrifice exists inside reciprocity and respect."
              },
              {
                "type": "paragraph",
                "text": "Does he care what the sacrifice costs you?"
              },
              {
                "type": "paragraph",
                "text": "Would he make comparable sacrifices?"
              },
              {
                "type": "paragraph",
                "text": "Can you speak honestly about your needs?"
              },
              {
                "type": "paragraph",
                "text": "Can the relationship adapt?"
              },
              {
                "type": "paragraph",
                "text": "Do you remain recognizable to yourself?"
              },
              {
                "type": "paragraph",
                "text": "Those questions distinguish devotion from self-erasure."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are integrating a new relationship standard."
              },
              {
                "type": "paragraph",
                "text": "Instead of selecting primarily for:"
              },
              {
                "type": "paragraph",
                "text": "chemistry,"
              },
              {
                "type": "paragraph",
                "text": "intensity,"
              },
              {
                "type": "paragraph",
                "text": "potential,"
              },
              {
                "type": "paragraph",
                "text": "status,"
              },
              {
                "type": "paragraph",
                "text": "appearance,"
              },
              {
                "type": "paragraph",
                "text": "or the thrill of being chosen,"
              },
              {
                "type": "paragraph",
                "text": "you learn to include:"
              },
              {
                "type": "paragraph",
                "text": "consistency,"
              },
              {
                "type": "paragraph",
                "text": "availability,"
              },
              {
                "type": "paragraph",
                "text": "reciprocity,"
              },
              {
                "type": "paragraph",
                "text": "emotional responsibility,"
              },
              {
                "type": "paragraph",
                "text": "boundary respect,"
              },
              {
                "type": "paragraph",
                "text": "shared values,"
              },
              {
                "type": "paragraph",
                "text": "and repair capacity."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine meeting a man who is warm, consistent, communicative, and interested."
              },
              {
                "type": "paragraph",
                "text": "He tells you where you stand."
              },
              {
                "type": "paragraph",
                "text": "There are no disappearing acts."
              },
              {
                "type": "paragraph",
                "text": "No need to decode messages."
              },
              {
                "type": "paragraph",
                "text": "No constant question about whether he wants you."
              },
              {
                "type": "paragraph",
                "text": "Part of you may initially think:"
              },
              {
                "type": "paragraph",
                "text": "“Something is missing.”"
              },
              {
                "type": "paragraph",
                "text": "Before assuming there is no chemistry, ask:"
              },
              {
                "type": "paragraph",
                "text": "Is something missing—or is anxiety missing?"
              },
              {
                "type": "paragraph",
                "text": "If previous relationships linked attraction with uncertainty, security may initially feel unfamiliar."
              },
              {
                "type": "paragraph",
                "text": "Unfamiliar does not automatically mean wrong."
              },
              {
                "type": "steps",
                "title": "Practice — Your Relationship Standard",
                "items": [
                  "Create three categories.",
                  "Non-Negotiables",
                  "Examples:",
                  "respect,\nhonesty,\nfidelity if monogamous,\nemotional safety,\nboundary respect.\nImportant Preferences",
                  "Examples:",
                  "communication style,\nlifestyle,\naffection,\nambition,\nsocial habits.\nFlexible Differences",
                  "Things you can comfortably negotiate.",
                  "Then complete:",
                  "In my next relationship, I will not confuse ____ with love.",
                  "I will speak sooner when ____ happens.",
                  "I will stop trying to rescue someone from _____.",
                  "I know I am beginning to lose myself when _____.",
                  "A partner earns deeper trust from me by _____.",
                  "I will know love is costing too much when _____.",
                  "Review these standards when you begin dating—not only after becoming emotionally attached."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Enter future relationships without becoming emotionally closed.",
                  "Evaluate partners for availability, reciprocity, and secure relationship capacity.",
                  "Distinguish healthy sacrifice from chronic self-erasure.",
                  "Maintain boundaries and identity while becoming deeply attached.",
                  "Recognize unhealthy patterns earlier instead of waiting until leaving becomes extremely difficult.",
                  "Choose relationships in which love and self-respect can coexist."
                ]
              }
            ]
          },
          {
            "title": "Wrap up",
            "subtitle": "",
            "sourceText": "Wrap up - Your Transformation\n\nAfter When Loving Him Costs You, you should no longer evaluate a relationship only by asking how strongly you love him or how painful losing him would be.\n\nYou should be capable of evaluating what the relationship is actually asking you to become.\n\nYou can recognize when uncertainty is intensifying attachment, when compassion has become rescuing, when hope is being built around potential rather than behavior, and when repeated compromise has crossed into self-abandonment. You can communicate boundaries, evaluate whether genuine repair is possible, and understand why leaving may still hurt even when leaving protects you.\n\nMost importantly, you do not have to choose between loving someone and belonging to yourself.\n\nHealthy intimacy asks you to bring your full self into the relationship.\n\nIf keeping the relationship requires that self to continually become smaller, the cost is no longer merely compromise.\n\nIt is the relationship itself.",
            "blocks": [
              {
                "type": "heading",
                "level": 2,
                "text": "Your Transformation"
              },
              {
                "type": "paragraph",
                "text": "After When Loving Him Costs You, you should no longer evaluate a relationship only by asking how strongly you love him or how painful losing him would be."
              },
              {
                "type": "paragraph",
                "text": "You should be capable of evaluating what the relationship is actually asking you to become."
              },
              {
                "type": "paragraph",
                "text": "You can recognize when uncertainty is intensifying attachment, when compassion has become rescuing, when hope is being built around potential rather than behavior, and when repeated compromise has crossed into self-abandonment. You can communicate boundaries, evaluate whether genuine repair is possible, and understand why leaving may still hurt even when leaving protects you."
              },
              {
                "type": "paragraph",
                "text": "Most importantly, you do not have to choose between loving someone and belonging to yourself."
              },
              {
                "type": "paragraph",
                "text": "Healthy intimacy asks you to bring your full self into the relationship."
              },
              {
                "type": "paragraph",
                "text": "If keeping the relationship requires that self to continually become smaller, the cost is no longer merely compromise."
              },
              {
                "type": "paragraph",
                "text": "It is the relationship itself."
              }
            ]
          }
        ]
      }
    ]
  },
  'love-without-losing-yourself': {
    "outcomes": [
      "After completing this course, learners will be able to:\n\nDistinguish genuine commitment from staying primarily because of fear, guilt, habit, or past investment.\nEvaluate a relationship's emotional safety, reciprocity, compatibility, and capacity for repair.\nIdentify recurring patterns and distinguish workable problems from fundamental differences.\nCreate specific agreements and assess whether apologies are becoming sustained behavioral change.\nMaintain boundaries, personal identity, and mutual care without confusing sacrifice with self-erasure.\nMake a considered decision about staying, seeking support, or leaving based on observable reality rather than emotional pressure."
    ],
    "sections": [
      {
        "title": "Lessons",
        "lessons": [
          {
            "title": "The Difference Between Choosing and Staying",
            "subtitle": "The first question is not whether you still love them. It is what is keeping you there.",
            "sourceText": "The Difference Between Choosing and Staying - The first question is not whether you still love them. It is what is keeping you there.\n\nA relationship can become such a central part of life that the idea of leaving feels almost impossible to examine objectively. Your partner may be woven into your routines, friendships, family, finances, future plans, and sense of identity. Even when the relationship becomes painful, leaving can feel like dismantling an entire life rather than ending one connection.\n\nThat difficulty does not automatically mean the relationship is wrong. Long-term commitments are supposed to matter. Shared history, children, marriage, financial responsibilities, and promises can all create legitimate reasons to work through difficult periods. The problem arises when those reasons become substitutes for evaluating the relationship itself.\n\nSomeone may say, “We've been together for seven years,” when the more relevant question is what those seven years have become. Another person may say, “I can't imagine life without them,” when what they actually mean is that they have not yet imagined a workable life without the relationship. Someone else may remain because their partner has been through hardship and they feel responsible for preventing further pain.\n\nRobin Norwood's work is particularly useful for understanding this distinction. Women Who Love Too Much examines relationships in which a person's emotional life becomes increasingly organized around a difficult or unavailable partner, sometimes at the expense of their own interests, friendships, and wellbeing. Although the book focuses on women, the broader pattern of confusing intense investment with healthy love can be relevant across genders. (penguinrandomhouse.com)\n\nRicho's approach adds another dimension: mature love involves recognizing reality rather than attempting to control it. A person can genuinely love someone while also acknowledging that the relationship may not be capable of meeting important needs. His work explicitly includes maintaining boundaries and surviving relationship endings as part of adult loving. (shambhala.com)\n\nThis does not mean you should leave whenever a relationship becomes difficult. It means that the difficulty of leaving should not be mistaken for evidence that staying is the right choice.\n\nA meaningful commitment is renewed through choice. That choice becomes more trustworthy when you can identify what is valuable about the relationship today, what remains difficult, and what both people are willing to do about it.\n\nWhat You Are Learning\n\nYou are learning to distinguish commitment from inertia, love from dependency, and genuine hope from the fear of losing what is familiar. You will examine the reasons you remain in a relationship without assuming that fear automatically invalidates love or that shared history automatically justifies staying.\n\nThe objective is to develop a more accurate answer to: “What am I choosing when I choose this relationship?”\n\nPractical Application\n\nImagine you and your partner have been together for six years. You care deeply about each other, but the last two years have involved repeated arguments, little intimacy, and unresolved disagreements about the future.\n\nWhen a friend asks why you stay, you answer, “We've invested too much to give up now.”\n\nThat may describe the weight of your history, but it does not describe the relationship's present value or future potential.\n\nA more useful answer would examine whether you still respect one another, whether both people want to improve the relationship, whether important problems can be addressed, and whether the future you are working toward is genuinely shared.\n\nPractice — The Reasons I Stay Audit\n\nWrite your reasons for staying without editing them to sound noble or reasonable. Include love, companionship, family, finances, shared history, fear, hope, responsibility, attraction, and anything else that is genuinely relevant.\n\nThen classify each reason as present value, future possibility, practical obligation, or fear of loss. Some reasons may belong in more than one category.\n\nFinally, answer: “If I knew I could survive the pain and practical difficulty of leaving, what would I still value enough about this relationship to choose it?”\n\nThis exercise is not intended to produce an immediate decision. It is intended to separate the relationship's value from the fear surrounding its possible ending.\n\nAfter This Section, You Will Be Able To\nIdentify the emotional, practical, and historical reasons you remain in a relationship.\nDistinguish present relationship value from fear of loss or sunk-cost thinking.\nRecognize when responsibility for a partner has become confused with responsibility for their entire wellbeing.\nEvaluate commitment without assuming that difficulty automatically means failure.\nDescribe what makes the relationship worth choosing in its current form.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "A relationship can become such a central part of life that the idea of leaving feels almost impossible to examine objectively. Your partner may be woven into your routines, friendships, family, finances, future plans, and sense of identity. Even when the relationship becomes painful, leaving can feel like dismantling an entire life rather than ending one connection."
              },
              {
                "type": "paragraph",
                "text": "That difficulty does not automatically mean the relationship is wrong. Long-term commitments are supposed to matter. Shared history, children, marriage, financial responsibilities, and promises can all create legitimate reasons to work through difficult periods. The problem arises when those reasons become substitutes for evaluating the relationship itself."
              },
              {
                "type": "paragraph",
                "text": "Someone may say, “We've been together for seven years,” when the more relevant question is what those seven years have become. Another person may say, “I can't imagine life without them,” when what they actually mean is that they have not yet imagined a workable life without the relationship. Someone else may remain because their partner has been through hardship and they feel responsible for preventing further pain."
              },
              {
                "type": "paragraph",
                "text": "Robin Norwood's work is particularly useful for understanding this distinction. Women Who Love Too Much examines relationships in which a person's emotional life becomes increasingly organized around a difficult or unavailable partner, sometimes at the expense of their own interests, friendships, and wellbeing. Although the book focuses on women, the broader pattern of confusing intense investment with healthy love can be relevant across genders. (penguinrandomhouse.com)"
              },
              {
                "type": "paragraph",
                "text": "Richo's approach adds another dimension: mature love involves recognizing reality rather than attempting to control it. A person can genuinely love someone while also acknowledging that the relationship may not be capable of meeting important needs. His work explicitly includes maintaining boundaries and surviving relationship endings as part of adult loving. (shambhala.com)"
              },
              {
                "type": "paragraph",
                "text": "This does not mean you should leave whenever a relationship becomes difficult. It means that the difficulty of leaving should not be mistaken for evidence that staying is the right choice."
              },
              {
                "type": "paragraph",
                "text": "A meaningful commitment is renewed through choice. That choice becomes more trustworthy when you can identify what is valuable about the relationship today, what remains difficult, and what both people are willing to do about it."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish commitment from inertia, love from dependency, and genuine hope from the fear of losing what is familiar. You will examine the reasons you remain in a relationship without assuming that fear automatically invalidates love or that shared history automatically justifies staying."
              },
              {
                "type": "paragraph",
                "text": "The objective is to develop a more accurate answer to: “What am I choosing when I choose this relationship?”"
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine you and your partner have been together for six years. You care deeply about each other, but the last two years have involved repeated arguments, little intimacy, and unresolved disagreements about the future."
              },
              {
                "type": "paragraph",
                "text": "When a friend asks why you stay, you answer, “We've invested too much to give up now.”"
              },
              {
                "type": "paragraph",
                "text": "That may describe the weight of your history, but it does not describe the relationship's present value or future potential."
              },
              {
                "type": "paragraph",
                "text": "A more useful answer would examine whether you still respect one another, whether both people want to improve the relationship, whether important problems can be addressed, and whether the future you are working toward is genuinely shared."
              },
              {
                "type": "steps",
                "title": "Practice — The Reasons I Stay Audit",
                "items": [
                  "Write your reasons for staying without editing them to sound noble or reasonable. Include love, companionship, family, finances, shared history, fear, hope, responsibility, attraction, and anything else that is genuinely relevant.",
                  "Then classify each reason as present value, future possibility, practical obligation, or fear of loss. Some reasons may belong in more than one category.",
                  "Finally, answer: “If I knew I could survive the pain and practical difficulty of leaving, what would I still value enough about this relationship to choose it?”",
                  "This exercise is not intended to produce an immediate decision. It is intended to separate the relationship's value from the fear surrounding its possible ending."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify the emotional, practical, and historical reasons you remain in a relationship.",
                  "Distinguish present relationship value from fear of loss or sunk-cost thinking.",
                  "Recognize when responsibility for a partner has become confused with responsibility for their entire wellbeing.",
                  "Evaluate commitment without assuming that difficulty automatically means failure.",
                  "Describe what makes the relationship worth choosing in its current form."
                ]
              }
            ]
          },
          {
            "title": "The Conditions Love Cannot Replace",
            "subtitle": "Affection matters, but it cannot compensate indefinitely for the absence of safety, respect, or basic trust.",
            "sourceText": "The Conditions Love Cannot Replace - Affection matters, but it cannot compensate indefinitely for the absence of safety, respect, or basic trust.\n\nOne of the most important relationship distinctions is between qualities that make a relationship enjoyable and conditions that make it workable.\n\nAttraction, humor, shared interests, sexual chemistry, and memorable experiences can make two people feel strongly connected. But those qualities do not automatically establish emotional safety, reliability, honesty, or respect.\n\nA relationship may contain extraordinary affection during its good periods while still leaving one partner afraid to express disagreement. Someone may be generous and romantic but repeatedly dishonest. A couple may have strong sexual chemistry while being unable to discuss boundaries or resolve conflict without humiliation.\n\nThe question is not whether the good experiences are real. They may be entirely real. The question is whether they are being used to compensate for conditions that are repeatedly absent.\n\nTatkin's secure-functioning model emphasizes a relationship based on mutual sensitivity, fairness, trust, and respect. His work treats the couple as a cooperative system in which both partners contribute to one another's security rather than competing for individual advantage. (stanandtraceytatkin.com)\n\nRicho's Five A's—attention, acceptance, appreciation, affection, and allowing—provide another way to examine the quality of a relationship. Affection without allowing can become possessive. Attention without acceptance can become constant evaluation. Appreciation without respect for boundaries can become conditional approval. Mature love requires these qualities to work together rather than allowing one to substitute for the others. (shambhala.com)\n\nThis section also requires a clear distinction between ordinary relationship difficulty and abuse. Disagreements about communication, household responsibilities, or time together can often be negotiated. Violence, threats, coercive control, sexual coercion, intimidation, and patterns of isolation or financial control are not simply communication problems.\n\nThe National Domestic Violence Hotline cautions against ordinary couples counseling in abusive relationships because the power imbalance can make joint sessions unsafe and may expose the abused partner to retaliation. In such circumstances, the priority is individual safety, confidential support, and appropriate specialist assistance—not asking the harmed person to negotiate more effectively. (thehotline.org)\n\nA relationship worth staying for does not have to be free of every mistake. But it must have a foundation in which both people can express themselves, maintain basic dignity, and address problems without fear of punishment or harm.\n\nWhat You Are Learning\n\nYou are learning to distinguish desirable relationship qualities from essential conditions. You will evaluate whether safety, respect, honesty, and boundaries are present in ordinary interactions—not only during affectionate periods.\n\nYou will also learn why serious safety concerns must not be treated as ordinary mutual conflict or reduced to a numerical relationship score.\n\nPractical Application\n\nImagine your partner becomes defensive during arguments and occasionally raises their voice. Both of you recognize the problem, agree to pause conversations when overwhelmed, and return to discuss what happened. Over time, the behavior improves.\n\nNow consider a different situation: a partner threatens you when you disagree, monitors your movements, restricts contact with friends, or makes you afraid of what will happen if you leave.\n\nThese situations require different responses. The first may involve a difficult but workable conflict pattern. The second may involve coercive control and requires safety-focused support rather than a standard communication exercise.\n\nPractice — The Foundation Review\n\nFor a relationship in which it is safe to reflect, examine these areas: physical safety, emotional safety, respect, honesty, freedom to disagree, boundary respect, privacy, and reliability.\n\nFor each, record one recent example that supports your confidence and one concern that needs attention. Avoid assigning a single total score. Instead, identify which areas are strong, which need improvement, and whether any concern represents a serious safety issue.\n\nIf you are afraid of your partner's reaction to your answers, do not complete the exercise together or share it with them. Seek confidential support from a trusted person or an appropriate professional service.\n\nAfter This Section, You Will Be Able To\nDistinguish essential relationship conditions from desirable qualities.\nEvaluate safety, respect, honesty, and boundaries through observable behavior.\nRecognize when affection or chemistry is being used to overlook serious concerns.\nDistinguish ordinary conflict from patterns that may involve coercion or abuse.\nIdentify when safety-focused support is more appropriate than couples-based exercises..",
            "blocks": [
              {
                "type": "paragraph",
                "text": "One of the most important relationship distinctions is between qualities that make a relationship enjoyable and conditions that make it workable."
              },
              {
                "type": "paragraph",
                "text": "Attraction, humor, shared interests, sexual chemistry, and memorable experiences can make two people feel strongly connected. But those qualities do not automatically establish emotional safety, reliability, honesty, or respect."
              },
              {
                "type": "paragraph",
                "text": "A relationship may contain extraordinary affection during its good periods while still leaving one partner afraid to express disagreement. Someone may be generous and romantic but repeatedly dishonest. A couple may have strong sexual chemistry while being unable to discuss boundaries or resolve conflict without humiliation."
              },
              {
                "type": "paragraph",
                "text": "The question is not whether the good experiences are real. They may be entirely real. The question is whether they are being used to compensate for conditions that are repeatedly absent."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning model emphasizes a relationship based on mutual sensitivity, fairness, trust, and respect. His work treats the couple as a cooperative system in which both partners contribute to one another's security rather than competing for individual advantage. (stanandtraceytatkin.com)"
              },
              {
                "type": "paragraph",
                "text": "Richo's Five A's—attention, acceptance, appreciation, affection, and allowing—provide another way to examine the quality of a relationship. Affection without allowing can become possessive. Attention without acceptance can become constant evaluation. Appreciation without respect for boundaries can become conditional approval. Mature love requires these qualities to work together rather than allowing one to substitute for the others. (shambhala.com)"
              },
              {
                "type": "paragraph",
                "text": "This section also requires a clear distinction between ordinary relationship difficulty and abuse. Disagreements about communication, household responsibilities, or time together can often be negotiated. Violence, threats, coercive control, sexual coercion, intimidation, and patterns of isolation or financial control are not simply communication problems."
              },
              {
                "type": "paragraph",
                "text": "The National Domestic Violence Hotline cautions against ordinary couples counseling in abusive relationships because the power imbalance can make joint sessions unsafe and may expose the abused partner to retaliation. In such circumstances, the priority is individual safety, confidential support, and appropriate specialist assistance—not asking the harmed person to negotiate more effectively. (thehotline.org)"
              },
              {
                "type": "paragraph",
                "text": "A relationship worth staying for does not have to be free of every mistake. But it must have a foundation in which both people can express themselves, maintain basic dignity, and address problems without fear of punishment or harm."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish desirable relationship qualities from essential conditions. You will evaluate whether safety, respect, honesty, and boundaries are present in ordinary interactions—not only during affectionate periods."
              },
              {
                "type": "paragraph",
                "text": "You will also learn why serious safety concerns must not be treated as ordinary mutual conflict or reduced to a numerical relationship score."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine your partner becomes defensive during arguments and occasionally raises their voice. Both of you recognize the problem, agree to pause conversations when overwhelmed, and return to discuss what happened. Over time, the behavior improves."
              },
              {
                "type": "paragraph",
                "text": "Now consider a different situation: a partner threatens you when you disagree, monitors your movements, restricts contact with friends, or makes you afraid of what will happen if you leave."
              },
              {
                "type": "paragraph",
                "text": "These situations require different responses. The first may involve a difficult but workable conflict pattern. The second may involve coercive control and requires safety-focused support rather than a standard communication exercise."
              },
              {
                "type": "steps",
                "title": "Practice — The Foundation Review",
                "items": [
                  "For a relationship in which it is safe to reflect, examine these areas: physical safety, emotional safety, respect, honesty, freedom to disagree, boundary respect, privacy, and reliability.",
                  "For each, record one recent example that supports your confidence and one concern that needs attention. Avoid assigning a single total score. Instead, identify which areas are strong, which need improvement, and whether any concern represents a serious safety issue.",
                  "If you are afraid of your partner's reaction to your answers, do not complete the exercise together or share it with them. Seek confidential support from a trusted person or an appropriate professional service."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish essential relationship conditions from desirable qualities.",
                  "Evaluate safety, respect, honesty, and boundaries through observable behavior.",
                  "Recognize when affection or chemistry is being used to overlook serious concerns.",
                  "Distinguish ordinary conflict from patterns that may involve coercion or abuse.",
                  "Identify when safety-focused support is more appropriate than couples-based exercises.."
                ]
              }
            ]
          },
          {
            "title": "The Work Must Belong to Both of You",
            "subtitle": "A relationship becomes difficult to sustain when one person is responsible for keeping it emotionally alive.",
            "sourceText": "The Work Must Belong to Both of You -A relationship becomes difficult to sustain when one person is responsible for keeping it emotionally alive.\n\nEvery relationship experiences periods of imbalance. One partner may be ill, grieving, unemployed, studying for an important examination, or carrying an unusually demanding workload. During those periods, the other person may reasonably contribute more.\n\nHealthy reciprocity does not mean that both people provide exactly the same amount of effort every day.\n\nIt means that both people's needs matter, both people recognize the other's contribution, and the relationship does not permanently depend on one person doing all the adapting.\n\nThis distinction is especially important when one partner has become the relationship's primary emotional manager. They initiate difficult conversations, suggest solutions, arrange quality time, apologize first, monitor the other's mood, and repeatedly explain why certain behavior is hurtful. The other partner may genuinely care, but their contribution remains largely passive.\n\nOver time, the more active partner can become exhausted. The less active partner may become accustomed to the arrangement and interpret the absence of complaints as evidence that everything is fine.\n\nNorwood's work examines the danger of becoming preoccupied with changing, rescuing, or managing a partner. The relevant lesson is not that supporting someone is unhealthy. It is that one adult cannot take responsibility for another adult's willingness to participate in the relationship. (penguinrandomhouse.com)\n\nTatkin's secure-functioning approach offers the complementary standard: partners work together to create mutually satisfying agreements grounded in fairness and sensitivity. The relationship is not supposed to operate as a permanent contest in which one person's needs consistently prevail. (stanandtraceytatkin.com)\n\nThis requires examining effort more carefully than simply asking, “Who does more?”\n\nOne partner may contribute through practical care, financial responsibility, or reliability. The other may contribute through emotional communication, planning, or maintaining family connections. Different contributions can be valuable. But differences in style should not become excuses for neglecting important needs.\n\nThe meaningful question is whether both people are willing to learn what the other needs and make reasonable adjustments.\n\nWhat You Are Learning\n\nYou are learning to evaluate reciprocity without turning the relationship into a competition. You will distinguish temporary imbalance from chronic one-sidedness, recognize invisible emotional labor, and identify whether both partners are willing to take responsibility for improving the relationship.\n\nYou will also learn that asking for mutual effort is different from demanding identical behavior.\n\nPractical Application\n\nSuppose one partner works long hours and contributes most of the household income. The other manages much of the household, organizes family responsibilities, and initiates nearly all relationship conversations.\n\nBoth may be making substantial contributions. But if one partner says they feel emotionally alone, the other cannot resolve the concern simply by pointing to financial contributions. Similarly, the partner managing the household should not dismiss the other's workload as irrelevant.\n\nA productive conversation examines the entire arrangement: what each person contributes, what each person needs, where the imbalance is becoming unsustainable, and what changes are realistically possible.\n\nPractice — The Reciprocity Map\n\nEach partner independently records the responsibilities they currently carry in five areas: practical life, emotional connection, conflict repair, shared planning, and support during difficulty.\n\nCompare the maps and discuss which contributions are visible, which are often unnoticed, and which responsibilities have become concentrated in one person.\n\nThen identify one responsibility each person is willing to take more ownership of. Make the change specific enough to observe over the following month.\n\nIf you are completing the course alone, use the exercise to clarify the pattern before discussing it with your partner. Do not assume that your interpretation is the complete picture.\n\nAfter This Section, You Will Be Able To\nDistinguish healthy temporary imbalance from chronic one-sidedness.\nRecognize practical and emotional contributions that may be overlooked.\nEvaluate whether both partners are willing to participate in relationship improvement.\nCommunicate concerns about reciprocity without reducing the relationship to scorekeeping.\nIdentify specific responsibilities that can be redistributed or shared more fairly..",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Every relationship experiences periods of imbalance. One partner may be ill, grieving, unemployed, studying for an important examination, or carrying an unusually demanding workload. During those periods, the other person may reasonably contribute more."
              },
              {
                "type": "paragraph",
                "text": "Healthy reciprocity does not mean that both people provide exactly the same amount of effort every day."
              },
              {
                "type": "paragraph",
                "text": "It means that both people's needs matter, both people recognize the other's contribution, and the relationship does not permanently depend on one person doing all the adapting."
              },
              {
                "type": "paragraph",
                "text": "This distinction is especially important when one partner has become the relationship's primary emotional manager. They initiate difficult conversations, suggest solutions, arrange quality time, apologize first, monitor the other's mood, and repeatedly explain why certain behavior is hurtful. The other partner may genuinely care, but their contribution remains largely passive."
              },
              {
                "type": "paragraph",
                "text": "Over time, the more active partner can become exhausted. The less active partner may become accustomed to the arrangement and interpret the absence of complaints as evidence that everything is fine."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work examines the danger of becoming preoccupied with changing, rescuing, or managing a partner. The relevant lesson is not that supporting someone is unhealthy. It is that one adult cannot take responsibility for another adult's willingness to participate in the relationship. (penguinrandomhouse.com)"
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach offers the complementary standard: partners work together to create mutually satisfying agreements grounded in fairness and sensitivity. The relationship is not supposed to operate as a permanent contest in which one person's needs consistently prevail. (stanandtraceytatkin.com)"
              },
              {
                "type": "paragraph",
                "text": "This requires examining effort more carefully than simply asking, “Who does more?”"
              },
              {
                "type": "paragraph",
                "text": "One partner may contribute through practical care, financial responsibility, or reliability. The other may contribute through emotional communication, planning, or maintaining family connections. Different contributions can be valuable. But differences in style should not become excuses for neglecting important needs."
              },
              {
                "type": "paragraph",
                "text": "The meaningful question is whether both people are willing to learn what the other needs and make reasonable adjustments."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to evaluate reciprocity without turning the relationship into a competition. You will distinguish temporary imbalance from chronic one-sidedness, recognize invisible emotional labor, and identify whether both partners are willing to take responsibility for improving the relationship."
              },
              {
                "type": "paragraph",
                "text": "You will also learn that asking for mutual effort is different from demanding identical behavior."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose one partner works long hours and contributes most of the household income. The other manages much of the household, organizes family responsibilities, and initiates nearly all relationship conversations."
              },
              {
                "type": "paragraph",
                "text": "Both may be making substantial contributions. But if one partner says they feel emotionally alone, the other cannot resolve the concern simply by pointing to financial contributions. Similarly, the partner managing the household should not dismiss the other's workload as irrelevant."
              },
              {
                "type": "paragraph",
                "text": "A productive conversation examines the entire arrangement: what each person contributes, what each person needs, where the imbalance is becoming unsustainable, and what changes are realistically possible."
              },
              {
                "type": "steps",
                "title": "Practice — The Reciprocity Map",
                "items": [
                  "Each partner independently records the responsibilities they currently carry in five areas: practical life, emotional connection, conflict repair, shared planning, and support during difficulty.",
                  "Compare the maps and discuss which contributions are visible, which are often unnoticed, and which responsibilities have become concentrated in one person.",
                  "Then identify one responsibility each person is willing to take more ownership of. Make the change specific enough to observe over the following month.",
                  "If you are completing the course alone, use the exercise to clarify the pattern before discussing it with your partner. Do not assume that your interpretation is the complete picture."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish healthy temporary imbalance from chronic one-sidedness.",
                  "Recognize practical and emotional contributions that may be overlooked.",
                  "Evaluate whether both partners are willing to participate in relationship improvement.",
                  "Communicate concerns about reciprocity without reducing the relationship to scorekeeping.",
                  "Identify specific responsibilities that can be redistributed or shared more fairly.."
                ]
              }
            ]
          },
          {
            "title": "Love the Person, Evaluate the Partnership",
            "subtitle": "You can love someone deeply and still discover that your lives cannot be built in the same direction.",
            "sourceText": "Love the Person, Evaluate the Partnership - You can love someone deeply and still discover that your lives cannot be built in the same direction.\n\nCompatibility is often discussed as though it means having similar personalities, interests, or lifestyles. Those similarities can make a relationship enjoyable, but they do not necessarily determine whether two people can build a sustainable future.\n\nA couple may love the same music, enjoy the same activities, and have strong chemistry while disagreeing fundamentally about marriage, children, finances, where to live, or the level of commitment they want.\n\nConversely, two people may have different interests and personalities while sharing enough values, respect, and willingness to negotiate that their differences become manageable.\n\nThe important distinction is between difference and incompatibility.\n\nA difference is something two people can acknowledge and accommodate without requiring either person to violate an important need or value. An incompatibility occurs when the relationship requires a choice that one or both people cannot genuinely accept.\n\nAttached emphasizes the importance of understanding attachment needs and recognizing whether a partner can provide the kind of availability and responsiveness a person needs. It also encourages readers to consider compatibility rather than relying solely on romantic attraction. (penguinrandomhouse.com)\n\nRicho's emphasis on acceptance and allowing adds a difficult but important principle: loving someone does not mean possessing the authority to redesign their values or life direction. You can explain what you need, invite discussion, and negotiate. You cannot make another person's genuine preferences disappear through enough persuasion.\n\nThis becomes especially relevant when a relationship is sustained by imagined future change.\n\nOne partner says, “I don't want children.” The other assumes they will change their mind. One wants to settle near family; the other wants to live abroad. One wants monogamy; the other wants a different relationship structure. One wants marriage; the other does not.\n\nThese differences are not automatically evidence that either person is selfish or immature. But they require honest examination before the relationship becomes more deeply entangled.\n\nA relationship worth staying for should not require one person to build their future around a promise the other has never actually made.\n\nWhat You Are Learning\n\nYou are learning to distinguish compatibility from chemistry, similarity, and emotional attachment. You will identify which differences can be negotiated and which involve fundamental life choices.\n\nYou will also learn to evaluate the relationship according to the people you actually are, rather than the versions of each other you hope will eventually appear.\n\nPractical Application\n\nImagine you want marriage and children within the next several years. Your partner says they are uncertain about both and do not want to make a commitment.\n\nYou may genuinely love each other. The relationship may contain affection, respect, and enjoyable companionship. But the future disagreement remains important.\n\nA mature conversation asks what each person actually wants, whether the uncertainty is temporary or a settled preference, what decisions need to be made, and whether both people can accept the resulting arrangement.\n\nThe goal is not to win the argument. It is to discover whether a shared future exists.\n\nPractice — The Future Compatibility Conversation\n\nIndividually write your preferred future in these areas: commitment, children or parenting, career, location, finances, family responsibilities, lifestyle, intimacy, and personal development.\n\nFor each area, distinguish essential, strongly preferred, and flexible.\n\nIf completing the exercise together, compare your answers and identify where you agree, where you differ, and where one person is relying on the assumption that the other will eventually change.\n\nFor each significant difference, ask: “What arrangement could we both genuinely accept without resentment or self-betrayal?” If no such arrangement is currently apparent, record that honestly rather than manufacturing agreement.\n\nAfter This Section, You Will Be Able To\nDistinguish manageable differences from fundamental incompatibilities.\nEvaluate shared values and future goals beyond attraction and chemistry.\nIdentify when a relationship depends on an unconfirmed expectation of future change.\nDiscuss major life decisions without pressuring a partner to adopt your preferences.\nAssess whether the future you are building is genuinely shared.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Compatibility is often discussed as though it means having similar personalities, interests, or lifestyles. Those similarities can make a relationship enjoyable, but they do not necessarily determine whether two people can build a sustainable future."
              },
              {
                "type": "paragraph",
                "text": "A couple may love the same music, enjoy the same activities, and have strong chemistry while disagreeing fundamentally about marriage, children, finances, where to live, or the level of commitment they want."
              },
              {
                "type": "paragraph",
                "text": "Conversely, two people may have different interests and personalities while sharing enough values, respect, and willingness to negotiate that their differences become manageable."
              },
              {
                "type": "paragraph",
                "text": "The important distinction is between difference and incompatibility."
              },
              {
                "type": "paragraph",
                "text": "A difference is something two people can acknowledge and accommodate without requiring either person to violate an important need or value. An incompatibility occurs when the relationship requires a choice that one or both people cannot genuinely accept."
              },
              {
                "type": "paragraph",
                "text": "Attached emphasizes the importance of understanding attachment needs and recognizing whether a partner can provide the kind of availability and responsiveness a person needs. It also encourages readers to consider compatibility rather than relying solely on romantic attraction. (penguinrandomhouse.com)"
              },
              {
                "type": "paragraph",
                "text": "Richo's emphasis on acceptance and allowing adds a difficult but important principle: loving someone does not mean possessing the authority to redesign their values or life direction. You can explain what you need, invite discussion, and negotiate. You cannot make another person's genuine preferences disappear through enough persuasion."
              },
              {
                "type": "paragraph",
                "text": "This becomes especially relevant when a relationship is sustained by imagined future change."
              },
              {
                "type": "paragraph",
                "text": "One partner says, “I don't want children.” The other assumes they will change their mind. One wants to settle near family; the other wants to live abroad. One wants monogamy; the other wants a different relationship structure. One wants marriage; the other does not."
              },
              {
                "type": "paragraph",
                "text": "These differences are not automatically evidence that either person is selfish or immature. But they require honest examination before the relationship becomes more deeply entangled."
              },
              {
                "type": "paragraph",
                "text": "A relationship worth staying for should not require one person to build their future around a promise the other has never actually made."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish compatibility from chemistry, similarity, and emotional attachment. You will identify which differences can be negotiated and which involve fundamental life choices."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to evaluate the relationship according to the people you actually are, rather than the versions of each other you hope will eventually appear."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine you want marriage and children within the next several years. Your partner says they are uncertain about both and do not want to make a commitment."
              },
              {
                "type": "paragraph",
                "text": "You may genuinely love each other. The relationship may contain affection, respect, and enjoyable companionship. But the future disagreement remains important."
              },
              {
                "type": "paragraph",
                "text": "A mature conversation asks what each person actually wants, whether the uncertainty is temporary or a settled preference, what decisions need to be made, and whether both people can accept the resulting arrangement."
              },
              {
                "type": "paragraph",
                "text": "The goal is not to win the argument. It is to discover whether a shared future exists."
              },
              {
                "type": "steps",
                "title": "Practice — The Future Compatibility Conversation",
                "items": [
                  "Individually write your preferred future in these areas: commitment, children or parenting, career, location, finances, family responsibilities, lifestyle, intimacy, and personal development.",
                  "For each area, distinguish essential, strongly preferred, and flexible.",
                  "If completing the exercise together, compare your answers and identify where you agree, where you differ, and where one person is relying on the assumption that the other will eventually change.",
                  "For each significant difference, ask: “What arrangement could we both genuinely accept without resentment or self-betrayal?” If no such arrangement is currently apparent, record that honestly rather than manufacturing agreement."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish manageable differences from fundamental incompatibilities.",
                  "Evaluate shared values and future goals beyond attraction and chemistry.",
                  "Identify when a relationship depends on an unconfirmed expectation of future change.",
                  "Discuss major life decisions without pressuring a partner to adopt your preferences.",
                  "Assess whether the future you are building is genuinely shared."
                ]
              }
            ]
          },
          {
            "title": "What Happens After You Hurt Each Other?",
            "subtitle": "The quality of a relationship is revealed not only by how people love when things are easy, but by what they do after something goes wrong.",
            "sourceText": "What Happens After You Hurt Each Other? - The quality of a relationship is revealed not only by how people love when things are easy, but by what they do after something goes wrong.\n\nNo long-term relationship can guarantee that partners will never disappoint one another. People become tired, defensive, distracted, frightened, or overwhelmed. They misunderstand each other. They make mistakes. Sometimes they cause significant hurt.\n\nThe presence of conflict therefore does not automatically mean a relationship is unhealthy.\n\nThe more useful question is: What happens after the conflict?\n\nDo both people become more capable of understanding the problem? Can each acknowledge their contribution? Does the injured partner have room to explain the impact? Does the person who caused harm take responsibility without immediately demanding forgiveness? Does anything actually change?\n\nTatkin's work emphasizes secure functioning, managing conflict, and creating mutually satisfying agreements. Richo similarly addresses the importance of recognizing and working through relationship patterns rather than expecting constant emotional attunement. His discussion of relationship triggers notes that misattunements are part of human relationships and that recovery from them is an important capacity. (stanandtraceytatkin.com) (shambhala.com)\n\nA useful distinction is between resolution and repetition.\n\nResolution does not require that every disagreement end in perfect agreement. It means the couple has developed a workable understanding or arrangement that changes how the issue will be handled.\n\nRepetition occurs when the same conflict returns because nothing beneath it has changed.\n\nFor example, a couple may repeatedly argue about one partner disappearing during difficult conversations. Afterward, they apologize and reconnect. But if they never establish how to request space and return to the discussion, the same pattern remains intact.\n\nA relationship worth staying for needs more than emotional reunions. It needs evidence that the partners can learn.\n\nTrust introduces an additional challenge. After dishonesty or betrayal, the injured person may need truthful information, clear boundaries, and sustained consistency before trust can reasonably return. An apology does not create an obligation to forgive, and forgiveness does not automatically require reconciliation.\n\nSerious betrayal, active addiction, untreated psychiatric crises, or other complex circumstances may require qualified professional support. Tatkin's own workshops distinguish ordinary relationship education from situations that require more intensive assistance. (stanandtraceytatkin.com)\n\nWhat You Are Learning\n\nYou are learning to evaluate repair capacity rather than simply counting arguments or measuring how affectionate the relationship feels afterward. You will distinguish regret from accountability, apology from behavioral change, and forgiveness from reconciliation.\n\nYou will also learn to recognize when a recurring problem needs a different approach rather than another version of the same conversation.\n\nPractical Application\n\nSuppose your partner repeatedly makes important decisions without consulting you. You explain that the behavior makes you feel excluded. They apologize, but the same thing happens again.\n\nThe next conversation should not focus only on whether they are sorry. It should examine why the pattern continues, what decisions genuinely require consultation, what communication is realistic, and what each person will do differently.\n\nIf your partner participates and the behavior changes, the relationship has demonstrated repair capacity.\n\nIf they repeatedly dismiss the concern, refuse discussion, or promise change without any follow-through, that is also important evidence.\n\nPractice — The Repair Evidence Review\n\nChoose one recurring relationship problem and document the last three times it occurred.\n\nFor each instance, record what happened, how each person responded, whether responsibility was acknowledged, what agreement followed, and what changed afterward.\n\nThen answer: “Are we learning from this problem, or are we repeatedly recovering from it?”\n\nIf the issue is workable and both partners are willing, create one specific behavioral agreement to practice over the next month. If the issue involves serious harm or safety concerns, do not use the exercise as a substitute for appropriate professional support.\n\nAfter This Section, You Will Be Able To\nDistinguish ordinary conflict from repeated unresolved patterns.\nEvaluate whether apologies lead to observable behavioral change.\nRecognize the difference between forgiveness, reconciliation, and restored trust.\nIdentify when both partners are participating in repair.\nDetermine when a recurring problem requires additional support or a more serious relationship decision.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "No long-term relationship can guarantee that partners will never disappoint one another. People become tired, defensive, distracted, frightened, or overwhelmed. They misunderstand each other. They make mistakes. Sometimes they cause significant hurt."
              },
              {
                "type": "paragraph",
                "text": "The presence of conflict therefore does not automatically mean a relationship is unhealthy."
              },
              {
                "type": "paragraph",
                "text": "The more useful question is: What happens after the conflict?"
              },
              {
                "type": "paragraph",
                "text": "Do both people become more capable of understanding the problem? Can each acknowledge their contribution? Does the injured partner have room to explain the impact? Does the person who caused harm take responsibility without immediately demanding forgiveness? Does anything actually change?"
              },
              {
                "type": "paragraph",
                "text": "Tatkin's work emphasizes secure functioning, managing conflict, and creating mutually satisfying agreements. Richo similarly addresses the importance of recognizing and working through relationship patterns rather than expecting constant emotional attunement. His discussion of relationship triggers notes that misattunements are part of human relationships and that recovery from them is an important capacity. (stanandtraceytatkin.com) (shambhala.com)"
              },
              {
                "type": "paragraph",
                "text": "A useful distinction is between resolution and repetition."
              },
              {
                "type": "paragraph",
                "text": "Resolution does not require that every disagreement end in perfect agreement. It means the couple has developed a workable understanding or arrangement that changes how the issue will be handled."
              },
              {
                "type": "paragraph",
                "text": "Repetition occurs when the same conflict returns because nothing beneath it has changed."
              },
              {
                "type": "paragraph",
                "text": "For example, a couple may repeatedly argue about one partner disappearing during difficult conversations. Afterward, they apologize and reconnect. But if they never establish how to request space and return to the discussion, the same pattern remains intact."
              },
              {
                "type": "paragraph",
                "text": "A relationship worth staying for needs more than emotional reunions. It needs evidence that the partners can learn."
              },
              {
                "type": "paragraph",
                "text": "Trust introduces an additional challenge. After dishonesty or betrayal, the injured person may need truthful information, clear boundaries, and sustained consistency before trust can reasonably return. An apology does not create an obligation to forgive, and forgiveness does not automatically require reconciliation."
              },
              {
                "type": "paragraph",
                "text": "Serious betrayal, active addiction, untreated psychiatric crises, or other complex circumstances may require qualified professional support. Tatkin's own workshops distinguish ordinary relationship education from situations that require more intensive assistance. (stanandtraceytatkin.com)"
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to evaluate repair capacity rather than simply counting arguments or measuring how affectionate the relationship feels afterward. You will distinguish regret from accountability, apology from behavioral change, and forgiveness from reconciliation."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to recognize when a recurring problem needs a different approach rather than another version of the same conversation."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose your partner repeatedly makes important decisions without consulting you. You explain that the behavior makes you feel excluded. They apologize, but the same thing happens again."
              },
              {
                "type": "paragraph",
                "text": "The next conversation should not focus only on whether they are sorry. It should examine why the pattern continues, what decisions genuinely require consultation, what communication is realistic, and what each person will do differently."
              },
              {
                "type": "paragraph",
                "text": "If your partner participates and the behavior changes, the relationship has demonstrated repair capacity."
              },
              {
                "type": "paragraph",
                "text": "If they repeatedly dismiss the concern, refuse discussion, or promise change without any follow-through, that is also important evidence."
              },
              {
                "type": "steps",
                "title": "Practice — The Repair Evidence Review",
                "items": [
                  "Choose one recurring relationship problem and document the last three times it occurred.",
                  "For each instance, record what happened, how each person responded, whether responsibility was acknowledged, what agreement followed, and what changed afterward.",
                  "Then answer: “Are we learning from this problem, or are we repeatedly recovering from it?”",
                  "If the issue is workable and both partners are willing, create one specific behavioral agreement to practice over the next month. If the issue involves serious harm or safety concerns, do not use the exercise as a substitute for appropriate professional support."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish ordinary conflict from repeated unresolved patterns.",
                  "Evaluate whether apologies lead to observable behavioral change.",
                  "Recognize the difference between forgiveness, reconciliation, and restored trust.",
                  "Identify when both partners are participating in repair.",
                  "Determine when a recurring problem requires additional support or a more serious relationship decision."
                ]
              }
            ]
          },
          {
            "title": "Give Hope a Reality Test",
            "subtitle": "A relationship deserves a fair chance",
            "sourceText": "Give Hope a Reality Test - A relationship deserves a fair chance—but hope becomes costly when it is never required to meet evidence.\n\nOne of the most difficult relationship decisions is determining how long to keep trying.\n\nLeaving immediately after a difficult period can sometimes mean abandoning a relationship that could have improved. Staying indefinitely can mean spending years waiting for changes that never become real.\n\nThere is no universal number of months, conversations, or chances that can answer this question for every couple. The circumstances matter: the nature of the problem, the length of the relationship, shared responsibilities, the willingness of both partners, and whether meaningful change is actually occurring.\n\nThe important principle is that hope should be connected to evidence.\n\nNorwood's work examines the danger of remaining invested in a partner's potential while one's own life becomes increasingly consumed by the relationship. Richo's approach emphasizes recognizing reality and maintaining boundaries rather than attempting to control another person's development. (penguinrandomhouse.com) (shambhala.com)\n\nA fair relationship evaluation therefore asks whether the problem has been clearly identified, whether both people understand what needs to change, whether the proposed changes are realistic, and whether there is evidence of follow-through.\n\nIt also asks what the relationship is costing during the process.\n\nA temporary period of additional effort may be reasonable. A prolonged arrangement in which one person repeatedly sacrifices their health, dignity, financial security, or essential needs while waiting for the other to change requires much more serious consideration.\n\nThis is not a demand for perfection. People may make progress unevenly. A partner who is learning to communicate differently may still become defensive occasionally. A couple rebuilding trust may experience setbacks. The question is whether the broader direction is improving and whether both people are taking responsibility for that improvement.\n\nA bounded evaluation can help. Rather than repeatedly saying, “We'll see how things go,” the couple identifies a small number of specific changes, agrees on how they will be practiced, and chooses a reasonable time to review the results.\n\nThis is an educational decision tool, not a clinical treatment plan. It is appropriate for ordinary, non-abusive relationship difficulties where both people can participate freely. It should not be used to require someone to remain in an unsafe situation while waiting for a deadline.\n\nWhat You Are Learning\n\nYou are learning to evaluate relationship potential through behavior rather than promises or emotional intensity. You will develop a way to give a workable relationship a fair opportunity to improve without making your own wellbeing indefinitely dependent on the possibility of future change.\n\nYou will also learn to distinguish a genuine setback from a repeated refusal to participate.\n\nPractical Application\n\nImagine you and your partner have struggled with communication for several months. Both of you acknowledge the problem and want to improve.\n\nInstead of making another broad promise, you agree to practice a specific conflict-pause procedure, schedule one uninterrupted relationship conversation each week, and seek qualified couples support if the same pattern continues.\n\nAfter six weeks, you review what actually happened.\n\nDid both people participate? Were conversations less destructive? Did either person take responsibility when the old pattern returned? Did the relationship become more workable?\n\nThe review does not have to produce a final decision immediately. But it should produce more information than you had before.\n\nPractice — The 30-Day Reality Test\n\nFor a relationship in which it is safe and appropriate to do so, identify no more than two significant problems that both partners agree to address.\n\nFor each problem, write the current pattern, the desired behavior, what each person will contribute, and what evidence would indicate improvement. Choose a review date approximately one month later.\n\nAt the review, answer:\n\nWhat changed in actual behavior?\n\nWhat remained the same?\n\nDid both people participate?\n\nWas the agreement realistic?\n\nWhat did the process cost each person?\n\nWhat would need to happen next for continued investment to make sense?\n\nDo not treat the exercise as a test your partner must pass to earn affection. It is a shared evaluation of whether the relationship can become healthier.\n\nAfter This Section, You Will Be Able To\nDistinguish evidence-based hope from indefinite waiting.\nTranslate vague promises into observable relationship changes.\nCreate a reasonable review process for ordinary relationship difficulties.\nEvaluate whether setbacks are occurring within genuine progress or repeated inaction.\nMake decisions about continued investment without relying solely on fear, history, or potential.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "but hope becomes costly when it is never required to meet evidence."
              },
              {
                "type": "paragraph",
                "text": "One of the most difficult relationship decisions is determining how long to keep trying."
              },
              {
                "type": "paragraph",
                "text": "Leaving immediately after a difficult period can sometimes mean abandoning a relationship that could have improved. Staying indefinitely can mean spending years waiting for changes that never become real."
              },
              {
                "type": "paragraph",
                "text": "There is no universal number of months, conversations, or chances that can answer this question for every couple. The circumstances matter: the nature of the problem, the length of the relationship, shared responsibilities, the willingness of both partners, and whether meaningful change is actually occurring."
              },
              {
                "type": "paragraph",
                "text": "The important principle is that hope should be connected to evidence."
              },
              {
                "type": "paragraph",
                "text": "Norwood's work examines the danger of remaining invested in a partner's potential while one's own life becomes increasingly consumed by the relationship. Richo's approach emphasizes recognizing reality and maintaining boundaries rather than attempting to control another person's development. (penguinrandomhouse.com) (shambhala.com)"
              },
              {
                "type": "paragraph",
                "text": "A fair relationship evaluation therefore asks whether the problem has been clearly identified, whether both people understand what needs to change, whether the proposed changes are realistic, and whether there is evidence of follow-through."
              },
              {
                "type": "paragraph",
                "text": "It also asks what the relationship is costing during the process."
              },
              {
                "type": "paragraph",
                "text": "A temporary period of additional effort may be reasonable. A prolonged arrangement in which one person repeatedly sacrifices their health, dignity, financial security, or essential needs while waiting for the other to change requires much more serious consideration."
              },
              {
                "type": "paragraph",
                "text": "This is not a demand for perfection. People may make progress unevenly. A partner who is learning to communicate differently may still become defensive occasionally. A couple rebuilding trust may experience setbacks. The question is whether the broader direction is improving and whether both people are taking responsibility for that improvement."
              },
              {
                "type": "paragraph",
                "text": "A bounded evaluation can help. Rather than repeatedly saying, “We'll see how things go,” the couple identifies a small number of specific changes, agrees on how they will be practiced, and chooses a reasonable time to review the results."
              },
              {
                "type": "paragraph",
                "text": "This is an educational decision tool, not a clinical treatment plan. It is appropriate for ordinary, non-abusive relationship difficulties where both people can participate freely. It should not be used to require someone to remain in an unsafe situation while waiting for a deadline."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to evaluate relationship potential through behavior rather than promises or emotional intensity. You will develop a way to give a workable relationship a fair opportunity to improve without making your own wellbeing indefinitely dependent on the possibility of future change."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to distinguish a genuine setback from a repeated refusal to participate."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine you and your partner have struggled with communication for several months. Both of you acknowledge the problem and want to improve."
              },
              {
                "type": "paragraph",
                "text": "Instead of making another broad promise, you agree to practice a specific conflict-pause procedure, schedule one uninterrupted relationship conversation each week, and seek qualified couples support if the same pattern continues."
              },
              {
                "type": "paragraph",
                "text": "After six weeks, you review what actually happened."
              },
              {
                "type": "paragraph",
                "text": "Did both people participate? Were conversations less destructive? Did either person take responsibility when the old pattern returned? Did the relationship become more workable?"
              },
              {
                "type": "paragraph",
                "text": "The review does not have to produce a final decision immediately. But it should produce more information than you had before."
              },
              {
                "type": "steps",
                "title": "Practice — The 30-Day Reality Test",
                "items": [
                  "For a relationship in which it is safe and appropriate to do so, identify no more than two significant problems that both partners agree to address.",
                  "For each problem, write the current pattern, the desired behavior, what each person will contribute, and what evidence would indicate improvement. Choose a review date approximately one month later.",
                  "At the review, answer:",
                  "What changed in actual behavior?",
                  "What remained the same?",
                  "Did both people participate?",
                  "Was the agreement realistic?",
                  "What did the process cost each person?",
                  "What would need to happen next for continued investment to make sense?",
                  "Do not treat the exercise as a test your partner must pass to earn affection. It is a shared evaluation of whether the relationship can become healthier."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish evidence-based hope from indefinite waiting.",
                  "Translate vague promises into observable relationship changes.",
                  "Create a reasonable review process for ordinary relationship difficulties.",
                  "Evaluate whether setbacks are occurring within genuine progress or repeated inaction.",
                  "Make decisions about continued investment without relying solely on fear, history, or potential."
                ]
              }
            ]
          },
          {
            "title": "Choose the Relationship You Can Actually Build",
            "subtitle": "The final decision is not whether the relationship is perfect. It is whether both people can continue choosing it with honesty, dignity, and a workable future.",
            "sourceText": "Choose the Relationship You Can Actually Build - The final decision is not whether the relationship is perfect. It is whether both people can continue choosing it with honesty, dignity, and a workable future.\n\nBy this stage, the question “Is this relationship worth staying for?” should have become more precise.\n\nYou have examined why you stay, whether essential conditions are present, whether effort is mutual, whether your futures are compatible, whether conflict can be repaired, and whether hope is supported by behavior.\n\nThe purpose of that examination is not to produce a universal verdict. It is to help you make a decision that reflects the actual relationship rather than only its best memories, worst moments, or imagined future.\n\nFor some couples, the answer will be to continue.\n\nThey may discover that their difficulties are real but workable, that both people are willing to take responsibility, and that the relationship contains enough respect, compatibility, and mutual care to justify further investment.\n\nFor others, the answer may be to seek appropriate professional support before deciding. A complex trust rupture, entrenched conflict pattern, or significant life transition may require more assistance than a self-guided course can provide.\n\nFor others, the answer may be to separate.\n\nThat does not necessarily mean the relationship was meaningless, that the love was false, or that one person failed to try hard enough. It may mean that the relationship no longer provides a workable foundation for both people's wellbeing and future.\nThe resulting standard is demanding but realistic:\n\nA relationship worth staying for is one in which both people can continue building a life that is emotionally safe, mutually chosen, compatible enough to sustain, and capable of adapting when difficulties arise.\n\nIt is not a relationship without sacrifice. It is one in which sacrifice is recognized and does not consistently erase one person's needs.\n\nIt is not a relationship without conflict. It is one in which conflict can lead to understanding and repair.\n\nIt is not a relationship in which both people are always equally strong. It is one in which care can move in both directions over time.\n\nAnd it is not a relationship guaranteed to last forever. It is one that both people can continue choosing for reasons grounded in the life they are actually creating.\n\nWhat You Are Learning\n\nYou are integrating the course into a practical relationship decision framework. You will learn to identify what is working, what needs improvement, what cannot reasonably be accepted, and what evidence would justify continued investment.\n\nYou will also learn to make room for different legitimate outcomes: continuing, seeking support, taking an appropriate period of reflection, or ending a relationship that is no longer workable.\n\nPractical Application\n\nImagine you and your partner have completed the course and agree that your relationship has meaningful strengths: affection, shared values, respect, and a genuine desire to remain together. You also recognize that conflict has become difficult and that both of you need to change how you respond when overwhelmed.\n\nYour decision may be to continue with a clear repair plan and appropriate support.\n\nAnother couple may discover that they love each other but have incompatible goals concerning children or commitment. Their decision may be to separate respectfully rather than ask one person to surrender a fundamental life choice.\n\nA third person may recognize that their partner repeatedly violates boundaries and refuses responsibility. Their decision may be to stop investing in promises that have not become behavior.\n\nThe same course can support different outcomes because the goal is not to preserve every relationship. It is to help people evaluate relationships more accurately.\n\nPractice — Your Relationship Decision Document\n\nCreate a private document containing five parts.\n\nWhat is genuinely valuable about this relationship today?\n\nWhat remains difficult, and what evidence do I have that it can improve?\n\nWhich needs, values, or boundaries cannot reasonably be sacrificed?\n\nWhat am I willing to contribute, and what must my partner freely choose to contribute?\n\nWhat decision best reflects the relationship as it actually exists?\n\nIf you choose to continue, identify the specific commitments and review practices that will support the relationship. If you choose to seek professional help, identify the type of support needed and whether both people are willing to participate. If you choose to separate, consider the practical responsibilities, support network, and boundaries necessary to do so respectfully and safely.\n\nDo not use this document to pressure your partner into a particular decision. Its purpose is to clarify your own judgment and support honest communication.\n\nAfter This Section, You Will Be Able To\nEvaluate a relationship through safety, reciprocity, compatibility, repair, and demonstrated commitment.\nDistinguish a workable relationship from one sustained primarily by fear or unfulfilled potential.\nIdentify when continued investment, professional support, or separation is the most appropriate next step.\nCommunicate a relationship decision without relying on blame, coercion, or false promises.\nDefine the behaviors and shared commitments necessary to sustain a relationship worth continuing. ",
            "blocks": [
              {
                "type": "paragraph",
                "text": "By this stage, the question “Is this relationship worth staying for?” should have become more precise."
              },
              {
                "type": "paragraph",
                "text": "You have examined why you stay, whether essential conditions are present, whether effort is mutual, whether your futures are compatible, whether conflict can be repaired, and whether hope is supported by behavior."
              },
              {
                "type": "paragraph",
                "text": "The purpose of that examination is not to produce a universal verdict. It is to help you make a decision that reflects the actual relationship rather than only its best memories, worst moments, or imagined future."
              },
              {
                "type": "paragraph",
                "text": "For some couples, the answer will be to continue."
              },
              {
                "type": "paragraph",
                "text": "They may discover that their difficulties are real but workable, that both people are willing to take responsibility, and that the relationship contains enough respect, compatibility, and mutual care to justify further investment."
              },
              {
                "type": "paragraph",
                "text": "For others, the answer may be to seek appropriate professional support before deciding. A complex trust rupture, entrenched conflict pattern, or significant life transition may require more assistance than a self-guided course can provide."
              },
              {
                "type": "paragraph",
                "text": "For others, the answer may be to separate."
              },
              {
                "type": "paragraph",
                "text": "That does not necessarily mean the relationship was meaningless, that the love was false, or that one person failed to try hard enough. It may mean that the relationship no longer provides a workable foundation for both people's wellbeing and future.\nThe resulting standard is demanding but realistic:"
              },
              {
                "type": "paragraph",
                "text": "A relationship worth staying for is one in which both people can continue building a life that is emotionally safe, mutually chosen, compatible enough to sustain, and capable of adapting when difficulties arise."
              },
              {
                "type": "paragraph",
                "text": "It is not a relationship without sacrifice. It is one in which sacrifice is recognized and does not consistently erase one person's needs."
              },
              {
                "type": "paragraph",
                "text": "It is not a relationship without conflict. It is one in which conflict can lead to understanding and repair."
              },
              {
                "type": "paragraph",
                "text": "It is not a relationship in which both people are always equally strong. It is one in which care can move in both directions over time."
              },
              {
                "type": "paragraph",
                "text": "And it is not a relationship guaranteed to last forever. It is one that both people can continue choosing for reasons grounded in the life they are actually creating."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are integrating the course into a practical relationship decision framework. You will learn to identify what is working, what needs improvement, what cannot reasonably be accepted, and what evidence would justify continued investment."
              },
              {
                "type": "paragraph",
                "text": "You will also learn to make room for different legitimate outcomes: continuing, seeking support, taking an appropriate period of reflection, or ending a relationship that is no longer workable."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine you and your partner have completed the course and agree that your relationship has meaningful strengths: affection, shared values, respect, and a genuine desire to remain together. You also recognize that conflict has become difficult and that both of you need to change how you respond when overwhelmed."
              },
              {
                "type": "paragraph",
                "text": "Your decision may be to continue with a clear repair plan and appropriate support."
              },
              {
                "type": "paragraph",
                "text": "Another couple may discover that they love each other but have incompatible goals concerning children or commitment. Their decision may be to separate respectfully rather than ask one person to surrender a fundamental life choice."
              },
              {
                "type": "paragraph",
                "text": "A third person may recognize that their partner repeatedly violates boundaries and refuses responsibility. Their decision may be to stop investing in promises that have not become behavior."
              },
              {
                "type": "paragraph",
                "text": "The same course can support different outcomes because the goal is not to preserve every relationship. It is to help people evaluate relationships more accurately."
              },
              {
                "type": "steps",
                "title": "Practice — Your Relationship Decision Document",
                "items": [
                  "Create a private document containing five parts.",
                  "What is genuinely valuable about this relationship today?",
                  "What remains difficult, and what evidence do I have that it can improve?",
                  "Which needs, values, or boundaries cannot reasonably be sacrificed?",
                  "What am I willing to contribute, and what must my partner freely choose to contribute?",
                  "What decision best reflects the relationship as it actually exists?",
                  "If you choose to continue, identify the specific commitments and review practices that will support the relationship. If you choose to seek professional help, identify the type of support needed and whether both people are willing to participate. If you choose to separate, consider the practical responsibilities, support network, and boundaries necessary to do so respectfully and safely.",
                  "Do not use this document to pressure your partner into a particular decision. Its purpose is to clarify your own judgment and support honest communication."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Evaluate a relationship through safety, reciprocity, compatibility, repair, and demonstrated commitment.",
                  "Distinguish a workable relationship from one sustained primarily by fear or unfulfilled potential.",
                  "Identify when continued investment, professional support, or separation is the most appropriate next step.",
                  "Communicate a relationship decision without relying on blame, coercion, or false promises.",
                  "Define the behaviors and shared commitments necessary to sustain a relationship worth continuing."
                ]
              }
            ]
          },
          {
            "title": "Wrap",
            "subtitle": "Up and Your Transformation",
            "sourceText": "Wrap-Up and Your Transformation\n\nAfter completing The Relationship Worth Staying For, you should no longer evaluate a relationship only by how much you love your partner, how long you have been together, or how painful leaving might be.\n\nYou should be capable of examining the relationship as it actually functions. You can identify whether essential conditions are present, recognize when effort has become one-sided, distinguish manageable differences from fundamental incompatibilities, evaluate whether apologies lead to meaningful repair, and determine whether hope is supported by sustained behavior.\n\nYou should also be able to recognize the difference between a difficult season that deserves patience and a repeated pattern that is eroding your wellbeing. You can give a workable relationship a fair opportunity to improve without making endurance the measure of your love.\n\nIf you choose to stay, the decision should be grounded in more than attachment or history. It should be grounded in the relationship both people are willing and able to build.\n\nIf you choose to leave, you should be able to understand that ending a relationship does not automatically invalidate what was meaningful about it.\n\nThe ultimate goal is to develop the judgment to recognize a relationship in which love is supported by safety, commitment is supported by mutual effort, and the future is something both people can genuinely choose together.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "After completing The Relationship Worth Staying For, you should no longer evaluate a relationship only by how much you love your partner, how long you have been together, or how painful leaving might be."
              },
              {
                "type": "paragraph",
                "text": "You should be capable of examining the relationship as it actually functions. You can identify whether essential conditions are present, recognize when effort has become one-sided, distinguish manageable differences from fundamental incompatibilities, evaluate whether apologies lead to meaningful repair, and determine whether hope is supported by sustained behavior."
              },
              {
                "type": "paragraph",
                "text": "You should also be able to recognize the difference between a difficult season that deserves patience and a repeated pattern that is eroding your wellbeing. You can give a workable relationship a fair opportunity to improve without making endurance the measure of your love."
              },
              {
                "type": "paragraph",
                "text": "If you choose to stay, the decision should be grounded in more than attachment or history. It should be grounded in the relationship both people are willing and able to build."
              },
              {
                "type": "paragraph",
                "text": "If you choose to leave, you should be able to understand that ending a relationship does not automatically invalidate what was meaningful about it."
              },
              {
                "type": "paragraph",
                "text": "The ultimate goal is to develop the judgment to recognize a relationship in which love is supported by safety, commitment is supported by mutual effort, and the future is something both people can genuinely choose together."
              }
            ]
          }
        ]
      }
    ]
  },
  'the-moment-the-chase-ends': {
    "outcomes": [
      "Recognise your personal needs, values and non-negotiables.",
      "Communicate boundaries with clarity and respect.",
      "Build a relationship without abandoning your identity."
    ],
    "sections": [
      {
        "title": "Lessons",
        "lessons": [
          {
            "title": "Introduction",
            "subtitle": "After This Section, You Will Be Able To",
            "sourceText": " Introduction -  After This Section, You Will Be Able To\n\nEvaluate future partners for emotional availability and compatibility rather than chemistry alone.\n\nCommunicate reassurance, boundaries, needs, and requests directly.\n\nBuild relationship agreements based on reciprocity and fairness.\n\nRecognize pursuit-withdrawal patterns early enough to interrupt them.\n\nApply secure-functioning principles and the Five A's to everyday relationship behavior.\n\nCreate closeness without requiring either partner to chase, control, or disappear.\n\n\n\nYour Transformation\n\nBy the end of When She Stops Chasing You, the central question should no longer be:\n\n\"How do I make her chase me again?\"\n\nYou should be able to examine what actually happened between you, recognize attachment activation without obeying it, identify your role in a pursuit-distance cycle, communicate responsibility without manipulation, determine whether reconciliation has genuine foundations, tolerate separation without immediately replacing the relationship, and choose future partners more intelligently.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Evaluate future partners for emotional availability and compatibility rather than chemistry alone."
              },
              {
                "type": "paragraph",
                "text": "Communicate reassurance, boundaries, needs, and requests directly."
              },
              {
                "type": "paragraph",
                "text": "Build relationship agreements based on reciprocity and fairness."
              },
              {
                "type": "paragraph",
                "text": "Recognize pursuit-withdrawal patterns early enough to interrupt them."
              },
              {
                "type": "paragraph",
                "text": "Apply secure-functioning principles and the Five A's to everyday relationship behavior."
              },
              {
                "type": "paragraph",
                "text": "Create closeness without requiring either partner to chase, control, or disappear."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Your Transformation"
              },
              {
                "type": "paragraph",
                "text": "By the end of When She Stops Chasing You, the central question should no longer be:"
              },
              {
                "type": "paragraph",
                "text": "\"How do I make her chase me again?\""
              },
              {
                "type": "paragraph",
                "text": "You should be able to examine what actually happened between you, recognize attachment activation without obeying it, identify your role in a pursuit-distance cycle, communicate responsibility without manipulation, determine whether reconciliation has genuine foundations, tolerate separation without immediately replacing the relationship, and choose future partners more intelligently."
              }
            ]
          },
          {
            "title": "The Moment the Chase Ends",
            "subtitle": "Her silence is information",
            "sourceText": "The Moment the Chase Ends - Her silence is information—but it is not an explanation.\nWhen someone repeatedly pursues connection, the pursued partner can gradually begin treating that pursuit as part of the relationship's background. She texts first. She brings up problems. She asks whether everything is okay. She tries to reconnect after arguments. Because she repeatedly restores contact, you may never have to discover what the relationship feels like when she stops doing that work.\n\nThen she stops.\n\nOne mistake is immediately concluding, She doesn't care anymore. Another is assuming, She wants me to chase her now. Both interpretations may occasionally be true, but neither should be your starting assumption.\n\nWithdrawal can mean many things. Someone may be emotionally exhausted. She may have concluded that repeated conversations are producing no change. She may be protecting herself. Her feelings may genuinely have changed. She may be reconsidering the relationship. She may already have decided to leave.\n\nThe important distinction is between observable behavior and the meaning you assign to it.\n\nAttachment dynamics make this harder. A person who previously felt comfortable because the other partner consistently sought closeness can suddenly experience intense attachment activation when that attention disappears. The same person who previously wanted more space may suddenly become preoccupied with getting closeness back. Attached describes secure, anxious, and avoidant relationship tendencies and shows how proximity and distance can activate very different responses.\n\nThis means you must resist making permanent decisions from the first emotional shock.\n\nHer withdrawal is a moment to become curious about reality.\n\nNot:\n\nHow do I make her want me again?\n\nBut:\n\nWhat was actually happening between us before she stopped trying?\n\nThat question begins the course.\n\nWhat You Are Learning\n\nYou are learning to separate three things that often become psychologically fused after relationship withdrawal:\n\nwhat happened, what you fear it means, and what you actually know.\n\nYou will also begin distinguishing ordinary temporary distance from a larger pattern of disengagement.\n\nMost importantly, you will stop treating another person's pursuit as automatic proof that the relationship is healthy.\n\nPractical Application\n\nImagine she previously complained that you rarely initiated plans.\n\nEventually she stops complaining.\n\nAt first you feel relieved.\n\nThree weeks later she stops asking to meet as often. Her messages become functional rather than affectionate. Suddenly you become anxious and begin sending more messages than you ever did before.\n\nThe insecure interpretation is:\n\n\"She's playing games.\"\n\nA more disciplined interpretation is:\n\n\"Something in our relationship has changed. Before reacting, I need to understand the sequence that led here.\"\n\nThe same discipline applies after a breakup. Checking whether she viewed your story, analyzing her online status, sending indirect posts, or repeatedly asking mutual friends about her may provide momentary relief while keeping you psychologically trapped inside uncertainty.\n\nPractice — The Facts/Story Audit\n\nTake one situation involving her recent withdrawal and divide a page into two columns.\n\nFacts\n\nWrite only observable information.\n\nFor example:\n\nShe has not initiated a conversation for six days.\nShe declined two invitations.\nShe said she needs space.\nShe removed our shared photos.\n\nThen write:\n\nMy interpretation\n\nShe never loved me.\nShe's testing me.\nThere must be another man.\nIf I don't act immediately, I will lose her forever.\n\nNow circle anything in the second column that you cannot actually verify.\n\nThe purpose is not emotional suppression. It is learning not to confuse fear with evidence.\n\nAfter This Section, You Will Be Able To\nSeparate observable relationship changes from fear-driven interpretations.\nRecognize when the loss of pursuit activates your own attachment system.\nAssess withdrawal without immediately chasing, blaming, or catastrophizing.\nIdentify the relationship conditions that existed before her behavior changed.\n.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "but it is not an explanation.\nWhen someone repeatedly pursues connection, the pursued partner can gradually begin treating that pursuit as part of the relationship's background. She texts first. She brings up problems. She asks whether everything is okay. She tries to reconnect after arguments. Because she repeatedly restores contact, you may never have to discover what the relationship feels like when she stops doing that work."
              },
              {
                "type": "paragraph",
                "text": "Then she stops."
              },
              {
                "type": "paragraph",
                "text": "One mistake is immediately concluding, She doesn't care anymore. Another is assuming, She wants me to chase her now. Both interpretations may occasionally be true, but neither should be your starting assumption."
              },
              {
                "type": "paragraph",
                "text": "Withdrawal can mean many things. Someone may be emotionally exhausted. She may have concluded that repeated conversations are producing no change. She may be protecting herself. Her feelings may genuinely have changed. She may be reconsidering the relationship. She may already have decided to leave."
              },
              {
                "type": "paragraph",
                "text": "The important distinction is between observable behavior and the meaning you assign to it."
              },
              {
                "type": "paragraph",
                "text": "Attachment dynamics make this harder. A person who previously felt comfortable because the other partner consistently sought closeness can suddenly experience intense attachment activation when that attention disappears. The same person who previously wanted more space may suddenly become preoccupied with getting closeness back. Attached describes secure, anxious, and avoidant relationship tendencies and shows how proximity and distance can activate very different responses."
              },
              {
                "type": "paragraph",
                "text": "This means you must resist making permanent decisions from the first emotional shock."
              },
              {
                "type": "paragraph",
                "text": "Her withdrawal is a moment to become curious about reality."
              },
              {
                "type": "paragraph",
                "text": "Not:"
              },
              {
                "type": "paragraph",
                "text": "How do I make her want me again?"
              },
              {
                "type": "paragraph",
                "text": "But:"
              },
              {
                "type": "paragraph",
                "text": "What was actually happening between us before she stopped trying?"
              },
              {
                "type": "paragraph",
                "text": "That question begins the course."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to separate three things that often become psychologically fused after relationship withdrawal:"
              },
              {
                "type": "paragraph",
                "text": "what happened, what you fear it means, and what you actually know."
              },
              {
                "type": "paragraph",
                "text": "You will also begin distinguishing ordinary temporary distance from a larger pattern of disengagement."
              },
              {
                "type": "paragraph",
                "text": "Most importantly, you will stop treating another person's pursuit as automatic proof that the relationship is healthy."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine she previously complained that you rarely initiated plans."
              },
              {
                "type": "paragraph",
                "text": "Eventually she stops complaining."
              },
              {
                "type": "paragraph",
                "text": "At first you feel relieved."
              },
              {
                "type": "paragraph",
                "text": "Three weeks later she stops asking to meet as often. Her messages become functional rather than affectionate. Suddenly you become anxious and begin sending more messages than you ever did before."
              },
              {
                "type": "paragraph",
                "text": "The insecure interpretation is:"
              },
              {
                "type": "paragraph",
                "text": "\"She's playing games.\""
              },
              {
                "type": "paragraph",
                "text": "A more disciplined interpretation is:"
              },
              {
                "type": "paragraph",
                "text": "\"Something in our relationship has changed. Before reacting, I need to understand the sequence that led here.\""
              },
              {
                "type": "paragraph",
                "text": "The same discipline applies after a breakup. Checking whether she viewed your story, analyzing her online status, sending indirect posts, or repeatedly asking mutual friends about her may provide momentary relief while keeping you psychologically trapped inside uncertainty."
              },
              {
                "type": "steps",
                "title": "Practice — The Facts/Story Audit",
                "items": [
                  "Take one situation involving her recent withdrawal and divide a page into two columns.",
                  "Facts",
                  "Write only observable information.",
                  "For example:",
                  "She has not initiated a conversation for six days.\nShe declined two invitations.\nShe said she needs space.\nShe removed our shared photos.",
                  "Then write:",
                  "My interpretation",
                  "She never loved me.\nShe's testing me.\nThere must be another man.\nIf I don't act immediately, I will lose her forever.",
                  "Now circle anything in the second column that you cannot actually verify.",
                  "The purpose is not emotional suppression. It is learning not to confuse fear with evidence."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Separate observable relationship changes from fear-driven interpretations.",
                  "Recognize when the loss of pursuit activates your own attachment system.",
                  "Assess withdrawal without immediately chasing, blaming, or catastrophizing.",
                  "Identify the relationship conditions that existed before her behavior changed.",
                  "."
                ]
              }
            ]
          },
          {
            "title": "The Relationship You Were Both Creating",
            "subtitle": "Stop asking who started the cycle and learn how the cycle kept itself alive.",
            "sourceText": "The Relationship You Were Both Creating -Stop asking who started the cycle and learn how the cycle kept itself alive.\n\nRelationships often become organized around repeated roles.\n\nOne person seeks closeness.\n\nThe other becomes uncomfortable and creates distance.\n\nMore distance produces more pursuit.\n\nMore pursuit produces more distance.\n\nEventually both people can sincerely believe the other is causing the problem.\n\nThis is one of the most useful ideas for understanding why \"she stopped chasing\" is rarely the complete story.\n\nAttached describes the particularly difficult interaction that can emerge between anxious and avoidant attachment tendencies: one person's attempts to restore proximity can intensify the other's desire for distance.\n\nTatkin approaches the same territory from another direction. Instead of asking only about individual attachment styles, his secure-functioning model asks what the two-person system is creating. His work emphasizes mutual safety, fairness, sensitivity, agreements, understanding one's partner, and repairing ruptures quickly.\n\nThis changes the question from:\n\nWho was the needy one?\n\nor\n\nWho was emotionally unavailable?\n\nto:\n\nWhat happened between us whenever one person became frightened?\n\nPerhaps she pursued harder when she felt uncertain.\n\nPerhaps you withdrew because her requests felt like criticism.\n\nYour withdrawal increased her uncertainty.\n\nHer increased pursuit felt even more demanding.\n\nYou withdrew further.\n\nNeither person necessarily designed the cycle consciously.\n\nBut eventually the cycle becomes stronger than either individual's intentions.\n\nNorwood adds another useful perspective from the pursuer's side. Her work describes situations where attention becomes increasingly focused on monitoring, rescuing, fixing, or changing a partner while the pursuer's own life contracts. Her recovery model explicitly shifts attention away from controlling another person and back toward one's own life.\n\nSo when a woman finally stops pursuing, one possibility is that she has begun withdrawing from a role she could no longer sustain.\n\nThat does not automatically make her right.\n\nIt does not automatically make you wrong.\n\nIt means you need to understand the system before deciding what to do about the relationship.\n\nWhat You Are Learning\n\nYou are developing the ability to analyze a relationship as a feedback loop.\n\nInstead of describing yourself as \"the distant one\" and her as \"the emotional one,\" you learn to identify:\n\ntrigger → reaction → partner reaction → escalation → temporary resolution → repetition.\n\nThat gives you something far more useful than blame: a map.\n\nPractical Application\n\nSuppose she says:\n\n\"You never tell me what you're feeling.\"\n\nYou experience it as criticism and become quiet.\n\nShe interprets silence as evidence that you do not care.\n\nShe sends longer messages.\n\nYou feel overwhelmed and delay responding.\n\nShe becomes angrier.\n\nEventually you apologize, things improve briefly, and neither of you changes the structure underneath the argument.\n\nMonths later, she stops asking you to open up.\n\nYou interpret that as peace.\n\nShe experiences it as resignation.\n\nThe absence of conflict can therefore sometimes mean the problem was solved.\n\nBut sometimes it means one person stopped expecting repair.\n\nThose are very different situations.\n\nPractice — Map Your Relationship Loop\n\nChoose three recurring conflicts.\n\nFor each one write:\n\n1. Trigger: What happened first?\n\n2. Her move: What did she do?\n\n3. My interpretation: What meaning did I give it?\n\n4. My move: What did I do next?\n\n5. Her interpretation: What might my behavior have communicated?\n\n6. Escalation: How did the situation become worse?\n\n7. Repair: Who usually restored connection?\n\nThen ask:\n\nWhat happened when she stopped performing Step 7?\n\nYou may discover why her withdrawal feels so dramatic now.\n\nAfter This Section, You Will Be Able To\nMap the pursuit-distance cycle without reducing either partner to a stereotype.\nIdentify how your behavior may unintentionally intensify your partner's behavior.\nDistinguish conflict resolution from emotional resignation.\nRecognize when one partner has been carrying disproportionate responsibility for reconnecting.\nAnalyze relationship patterns without turning attachment labels into accusations.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Relationships often become organized around repeated roles."
              },
              {
                "type": "paragraph",
                "text": "One person seeks closeness."
              },
              {
                "type": "paragraph",
                "text": "The other becomes uncomfortable and creates distance."
              },
              {
                "type": "paragraph",
                "text": "More distance produces more pursuit."
              },
              {
                "type": "paragraph",
                "text": "More pursuit produces more distance."
              },
              {
                "type": "paragraph",
                "text": "Eventually both people can sincerely believe the other is causing the problem."
              },
              {
                "type": "paragraph",
                "text": "This is one of the most useful ideas for understanding why \"she stopped chasing\" is rarely the complete story."
              },
              {
                "type": "paragraph",
                "text": "Attached describes the particularly difficult interaction that can emerge between anxious and avoidant attachment tendencies: one person's attempts to restore proximity can intensify the other's desire for distance."
              },
              {
                "type": "paragraph",
                "text": "Tatkin approaches the same territory from another direction. Instead of asking only about individual attachment styles, his secure-functioning model asks what the two-person system is creating. His work emphasizes mutual safety, fairness, sensitivity, agreements, understanding one's partner, and repairing ruptures quickly."
              },
              {
                "type": "paragraph",
                "text": "This changes the question from:"
              },
              {
                "type": "paragraph",
                "text": "Who was the needy one?"
              },
              {
                "type": "paragraph",
                "text": "or"
              },
              {
                "type": "paragraph",
                "text": "Who was emotionally unavailable?"
              },
              {
                "type": "paragraph",
                "text": "to:"
              },
              {
                "type": "paragraph",
                "text": "What happened between us whenever one person became frightened?"
              },
              {
                "type": "paragraph",
                "text": "Perhaps she pursued harder when she felt uncertain."
              },
              {
                "type": "paragraph",
                "text": "Perhaps you withdrew because her requests felt like criticism."
              },
              {
                "type": "paragraph",
                "text": "Your withdrawal increased her uncertainty."
              },
              {
                "type": "paragraph",
                "text": "Her increased pursuit felt even more demanding."
              },
              {
                "type": "paragraph",
                "text": "You withdrew further."
              },
              {
                "type": "paragraph",
                "text": "Neither person necessarily designed the cycle consciously."
              },
              {
                "type": "paragraph",
                "text": "But eventually the cycle becomes stronger than either individual's intentions."
              },
              {
                "type": "paragraph",
                "text": "Norwood adds another useful perspective from the pursuer's side. Her work describes situations where attention becomes increasingly focused on monitoring, rescuing, fixing, or changing a partner while the pursuer's own life contracts. Her recovery model explicitly shifts attention away from controlling another person and back toward one's own life."
              },
              {
                "type": "paragraph",
                "text": "So when a woman finally stops pursuing, one possibility is that she has begun withdrawing from a role she could no longer sustain."
              },
              {
                "type": "paragraph",
                "text": "That does not automatically make her right."
              },
              {
                "type": "paragraph",
                "text": "It does not automatically make you wrong."
              },
              {
                "type": "paragraph",
                "text": "It means you need to understand the system before deciding what to do about the relationship."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are developing the ability to analyze a relationship as a feedback loop."
              },
              {
                "type": "paragraph",
                "text": "Instead of describing yourself as \"the distant one\" and her as \"the emotional one,\" you learn to identify:"
              },
              {
                "type": "paragraph",
                "text": "trigger → reaction → partner reaction → escalation → temporary resolution → repetition."
              },
              {
                "type": "paragraph",
                "text": "That gives you something far more useful than blame: a map."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Suppose she says:"
              },
              {
                "type": "paragraph",
                "text": "\"You never tell me what you're feeling.\""
              },
              {
                "type": "paragraph",
                "text": "You experience it as criticism and become quiet."
              },
              {
                "type": "paragraph",
                "text": "She interprets silence as evidence that you do not care."
              },
              {
                "type": "paragraph",
                "text": "She sends longer messages."
              },
              {
                "type": "paragraph",
                "text": "You feel overwhelmed and delay responding."
              },
              {
                "type": "paragraph",
                "text": "She becomes angrier."
              },
              {
                "type": "paragraph",
                "text": "Eventually you apologize, things improve briefly, and neither of you changes the structure underneath the argument."
              },
              {
                "type": "paragraph",
                "text": "Months later, she stops asking you to open up."
              },
              {
                "type": "paragraph",
                "text": "You interpret that as peace."
              },
              {
                "type": "paragraph",
                "text": "She experiences it as resignation."
              },
              {
                "type": "paragraph",
                "text": "The absence of conflict can therefore sometimes mean the problem was solved."
              },
              {
                "type": "paragraph",
                "text": "But sometimes it means one person stopped expecting repair."
              },
              {
                "type": "paragraph",
                "text": "Those are very different situations."
              },
              {
                "type": "steps",
                "title": "Practice — Map Your Relationship Loop",
                "items": [
                  "Choose three recurring conflicts.",
                  "For each one write:",
                  "1. Trigger: What happened first?",
                  "2. Her move: What did she do?",
                  "3. My interpretation: What meaning did I give it?",
                  "4. My move: What did I do next?",
                  "5. Her interpretation: What might my behavior have communicated?",
                  "6. Escalation: How did the situation become worse?",
                  "7. Repair: Who usually restored connection?",
                  "Then ask:",
                  "What happened when she stopped performing Step 7?",
                  "You may discover why her withdrawal feels so dramatic now."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Map the pursuit-distance cycle without reducing either partner to a stereotype.",
                  "Identify how your behavior may unintentionally intensify your partner's behavior.",
                  "Distinguish conflict resolution from emotional resignation.",
                  "Recognize when one partner has been carrying disproportionate responsibility for reconnecting.",
                  "Analyze relationship patterns without turning attachment labels into accusations."
                ]
              }
            ]
          },
          {
            "title": "What Her Distance Wakes Up in You",
            "subtitle": "Sometimes you do not realize how attached you are until access to the person disappears.",
            "sourceText": "What Her Distance Wakes Up in You -Sometimes you do not realize how attached you are until access to the person disappears.\n\nA breakup—or even sudden emotional distance—can transform a person's psychology remarkably quickly.\n\nSomeone you occasionally took for granted can become almost impossible to stop thinking about.\n\nYou replay conversations.\n\nYou remember her best qualities more vividly than her difficult ones.\n\nYour phone becomes emotionally charged.\n\nA notification creates hope.\n\nSilence feels personal.\n\nThis does not necessarily mean you suddenly discovered she is your soulmate.\n\nIt can mean your attachment system has become activated.\n\nAttached emphasizes that attachment needs are not signs of weakness. Human beings seek connection, reassurance, availability, and responsiveness from important partners. The problem is not needing connection. The problem is what you do when the need becomes activated.\n\nTatkin adds the nervous-system dimension: partners become important sources of safety and threat regulation, and conflict can quickly move people toward defensive rather than cooperative states. His relationship work therefore emphasizes slowing distress, understanding arousal, and repairing quickly.\n\nThis matters enormously after she withdraws.\n\nYour first impulse may be action:\n\nsend another message,\n\ndrive to see her,\n\nwrite a long apology,\n\ndownload dating apps,\n\nsleep with somebody,\n\npost something to make her jealous,\n\ndelete everything,\n\nblock her,\n\nunblock her,\n\npromise marriage,\n\npromise therapy,\n\npromise that everything will change.\n\nAction temporarily reduces uncertainty.\n\nBut not all action creates wisdom.\n\nA more mature skill is learning to tolerate enough emotional activation that you can ask:\n\nWhat exactly am I afraid of right now?\n\nLosing her?\n\nBeing alone?\n\nBeing rejected?\n\nKnowing she may eventually love somebody else?\n\nFeeling that you failed?\n\nHaving to face parts of yourself the relationship allowed you to avoid?\n\nThese are different wounds.\n\nThey require different responses.\n\nWhat You Are Learning\n\nYou are learning emotional differentiation.\n\nInstead of compressing everything into:\n\n\"I miss her,\"\n\nyou become able to distinguish grief, abandonment fear, wounded pride, loneliness, guilt, sexual longing, regret, jealousy, and genuine love.\n\nThat distinction gives you considerably better control over what happens next.\n\nPractical Application\n\nShe says she does not want contact for a month.\n\nAt 11:30 p.m. you see that she is online.\n\nYour body reacts before your reasoning does.\n\nYou imagine who she might be talking to.\n\nThe impulse appears:\n\n\"Just send one message.\"\n\nThis is exactly where relationship maturity becomes behavioral rather than theoretical.\n\nRespecting her boundary does not mean you feel calm.\n\nIt means your discomfort does not automatically overrule another person's stated boundary.\n\nSimilarly, if she has not requested no contact, restraint can still be useful. Repeated communication motivated primarily by anxiety can turn a request for connection into pressure.\n\nPractice — The Attachment Activation Map\n\nFor seven days, whenever you feel a strong urge to contact, monitor, check, retaliate, or escape, record:\n\nCue: What happened?\n\nBody: What did you physically notice?\n\nEmotion: What am I actually feeling?\n\nStory: What am I telling myself?\n\nImpulse: What do I want to do immediately?\n\nNeed: What am I actually seeking—connection, reassurance, certainty, dignity, closure?\n\nSecure response: What action would I respect tomorrow?\n\nDo not aim for emotional perfection.\n\nAim for a gap between impulse and behavior.\n\nThat gap is one of the foundations of secure relating.\n\nAfter This Section, You Will Be Able To\nIdentify attachment activation before acting on it.\nSeparate genuine relational needs from panic-driven impulses.\nRecognize jealousy, loneliness, grief, regret, and rejection as distinct emotional experiences.\nRegulate yourself enough to respect boundaries during separation.\nChoose behavior according to values rather than momentary anxiety.,",
            "blocks": [
              {
                "type": "paragraph",
                "text": "A breakup—or even sudden emotional distance—can transform a person's psychology remarkably quickly."
              },
              {
                "type": "paragraph",
                "text": "Someone you occasionally took for granted can become almost impossible to stop thinking about."
              },
              {
                "type": "paragraph",
                "text": "You replay conversations."
              },
              {
                "type": "paragraph",
                "text": "You remember her best qualities more vividly than her difficult ones."
              },
              {
                "type": "paragraph",
                "text": "Your phone becomes emotionally charged."
              },
              {
                "type": "paragraph",
                "text": "A notification creates hope."
              },
              {
                "type": "paragraph",
                "text": "Silence feels personal."
              },
              {
                "type": "paragraph",
                "text": "This does not necessarily mean you suddenly discovered she is your soulmate."
              },
              {
                "type": "paragraph",
                "text": "It can mean your attachment system has become activated."
              },
              {
                "type": "paragraph",
                "text": "Attached emphasizes that attachment needs are not signs of weakness. Human beings seek connection, reassurance, availability, and responsiveness from important partners. The problem is not needing connection. The problem is what you do when the need becomes activated."
              },
              {
                "type": "paragraph",
                "text": "Tatkin adds the nervous-system dimension: partners become important sources of safety and threat regulation, and conflict can quickly move people toward defensive rather than cooperative states. His relationship work therefore emphasizes slowing distress, understanding arousal, and repairing quickly."
              },
              {
                "type": "paragraph",
                "text": "This matters enormously after she withdraws."
              },
              {
                "type": "paragraph",
                "text": "Your first impulse may be action:"
              },
              {
                "type": "paragraph",
                "text": "send another message,"
              },
              {
                "type": "paragraph",
                "text": "drive to see her,"
              },
              {
                "type": "paragraph",
                "text": "write a long apology,"
              },
              {
                "type": "paragraph",
                "text": "download dating apps,"
              },
              {
                "type": "paragraph",
                "text": "sleep with somebody,"
              },
              {
                "type": "paragraph",
                "text": "post something to make her jealous,"
              },
              {
                "type": "paragraph",
                "text": "delete everything,"
              },
              {
                "type": "paragraph",
                "text": "block her,"
              },
              {
                "type": "paragraph",
                "text": "unblock her,"
              },
              {
                "type": "paragraph",
                "text": "promise marriage,"
              },
              {
                "type": "paragraph",
                "text": "promise therapy,"
              },
              {
                "type": "paragraph",
                "text": "promise that everything will change."
              },
              {
                "type": "paragraph",
                "text": "Action temporarily reduces uncertainty."
              },
              {
                "type": "paragraph",
                "text": "But not all action creates wisdom."
              },
              {
                "type": "paragraph",
                "text": "A more mature skill is learning to tolerate enough emotional activation that you can ask:"
              },
              {
                "type": "paragraph",
                "text": "What exactly am I afraid of right now?"
              },
              {
                "type": "paragraph",
                "text": "Losing her?"
              },
              {
                "type": "paragraph",
                "text": "Being alone?"
              },
              {
                "type": "paragraph",
                "text": "Being rejected?"
              },
              {
                "type": "paragraph",
                "text": "Knowing she may eventually love somebody else?"
              },
              {
                "type": "paragraph",
                "text": "Feeling that you failed?"
              },
              {
                "type": "paragraph",
                "text": "Having to face parts of yourself the relationship allowed you to avoid?"
              },
              {
                "type": "paragraph",
                "text": "These are different wounds."
              },
              {
                "type": "paragraph",
                "text": "They require different responses."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning emotional differentiation."
              },
              {
                "type": "paragraph",
                "text": "Instead of compressing everything into:"
              },
              {
                "type": "paragraph",
                "text": "\"I miss her,\""
              },
              {
                "type": "paragraph",
                "text": "you become able to distinguish grief, abandonment fear, wounded pride, loneliness, guilt, sexual longing, regret, jealousy, and genuine love."
              },
              {
                "type": "paragraph",
                "text": "That distinction gives you considerably better control over what happens next."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "She says she does not want contact for a month."
              },
              {
                "type": "paragraph",
                "text": "At 11:30 p.m. you see that she is online."
              },
              {
                "type": "paragraph",
                "text": "Your body reacts before your reasoning does."
              },
              {
                "type": "paragraph",
                "text": "You imagine who she might be talking to."
              },
              {
                "type": "paragraph",
                "text": "The impulse appears:"
              },
              {
                "type": "paragraph",
                "text": "\"Just send one message.\""
              },
              {
                "type": "paragraph",
                "text": "This is exactly where relationship maturity becomes behavioral rather than theoretical."
              },
              {
                "type": "paragraph",
                "text": "Respecting her boundary does not mean you feel calm."
              },
              {
                "type": "paragraph",
                "text": "It means your discomfort does not automatically overrule another person's stated boundary."
              },
              {
                "type": "paragraph",
                "text": "Similarly, if she has not requested no contact, restraint can still be useful. Repeated communication motivated primarily by anxiety can turn a request for connection into pressure."
              },
              {
                "type": "steps",
                "title": "Practice — The Attachment Activation Map",
                "items": [
                  "For seven days, whenever you feel a strong urge to contact, monitor, check, retaliate, or escape, record:",
                  "Cue: What happened?",
                  "Body: What did you physically notice?",
                  "Emotion: What am I actually feeling?",
                  "Story: What am I telling myself?",
                  "Impulse: What do I want to do immediately?",
                  "Need: What am I actually seeking—connection, reassurance, certainty, dignity, closure?",
                  "Secure response: What action would I respect tomorrow?",
                  "Do not aim for emotional perfection.",
                  "Aim for a gap between impulse and behavior.",
                  "That gap is one of the foundations of secure relating."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Identify attachment activation before acting on it.",
                  "Separate genuine relational needs from panic-driven impulses.",
                  "Recognize jealousy, loneliness, grief, regret, and rejection as distinct emotional experiences.",
                  "Regulate yourself enough to respect boundaries during separation.",
                  "Choose behavior according to values rather than momentary anxiety.,"
                ]
              }
            ]
          },
          {
            "title": "Stop Trying to Win Her Back",
            "subtitle": "If reconciliation requires pressure, it is not reconciliation yet.",
            "sourceText": "'Stop Trying to Win Her Back - If reconciliation requires pressure, it is not reconciliation yet.\n\nAfter someone withdraws, the natural temptation is to focus entirely on the outcome:\n\nHow do I get her back?\n\nThat question can produce impressive-looking behavior.\n\nLong messages.\n\nFlowers.\n\nPromises.\n\nSudden emotional openness.\n\nDeclarations about your future.\n\nSometimes these gestures are sincere.\n\nBut sincerity alone does not make them evidence of change.\n\nThe more useful question is:\n\nWhat would make me safer and more capable in a relationship even if she never returns?\n\nThat distinction is critical because transformation performed exclusively to control somebody else's decision is still a form of control.\n\nRicho's model of mature love offers five practices: attention, acceptance, appreciation, affection, and allowing. The last one is particularly important here. Allowing means recognizing the reality of another person rather than trying to force reality into the outcome you prefer.\n\nIf she says:\n\n\"I don't want this relationship anymore,\"\n\nmature love may include the painful capacity to hear what she is actually saying.\n\nIf she says:\n\n\"I don't know,\"\n\nmaturity may require allowing uncertainty instead of demanding a decision that calms your anxiety.\n\nIf she says:\n\n\"I'm willing to talk, but I need to see real change,\"\n\nthen the task becomes behavioral.\n\nTatkin's secure-functioning approach points toward mutual fairness, safety, sensitivity, explicit agreements, learning one's partner, and effective repair.\n\nChange therefore cannot merely sound like:\n\n\"I'll communicate better.\"\n\nIt needs to become observable.\n\nFor example:\n\n\"When conflict happens, I will not disappear for two days. I will tell you that I need thirty minutes to regulate and confirm when I'll return to the conversation.\"\n\nThat is behavior.\n\nWhat You Are Learning\n\nYou are learning the difference between:\n\npersuasion and repair,\n\nregret and responsibility,\n\npromising and changing,\n\nwanting her and being capable of relating well to her.\n\nYou are also learning that an apology should not contain a hidden invoice requiring forgiveness, contact, or reconciliation in return.\n\nPractical Application\n\nIf contact is appropriate and welcomed, a mature repair conversation might involve four elements:\n\nRecognition: What happened?\n\nOwnership: What did I contribute?\n\nImpact: How might it have affected you?\n\nChange: What will be different behaviorally?\n\nNot:\n\n\"I only acted that way because you kept...\"\n\nNot:\n\n\"I've changed, so you owe me another chance.\"\n\nAnd not:\n\n\"Nobody will ever love you like I do.\"\n\nA clean repair leaves the other person free.\n\nThat freedom is part of what makes the repair trustworthy.\n\nPractice — The No-Persuasion Repair\n\nWrite the message you desperately want to send.\n\nThen remove:\n\nattempts to create guilt,\ndramatic promises,\naccusations,\nreferences designed to create jealousy,\ndemands for immediate answers,\nexplanations that erase responsibility,\npressure disguised as romance.\n\nNow rewrite it around four sentences:\n\nI recognize...\n\nI take responsibility for...\n\nI understand that may have affected you by...\n\nRegardless of what you decide, I am working on...\n\nDo not send the exercise automatically.\n\nIts purpose is first to clarify your own thinking.\n\nAfter This Section, You Will Be Able To\nDistinguish genuine repair from attempts to regain control.\nTake responsibility without collapsing into shame or defensiveness.\nTranslate vague promises into observable relationship behavior.\nCommunicate without using guilt, jealousy, pressure, or emotional bargaining.\nRespect another person's freedom while still expressing your own feelings clearly..'",
            "blocks": [
              {
                "type": "paragraph",
                "text": "After someone withdraws, the natural temptation is to focus entirely on the outcome:"
              },
              {
                "type": "paragraph",
                "text": "How do I get her back?"
              },
              {
                "type": "paragraph",
                "text": "That question can produce impressive-looking behavior."
              },
              {
                "type": "paragraph",
                "text": "Long messages."
              },
              {
                "type": "paragraph",
                "text": "Flowers."
              },
              {
                "type": "paragraph",
                "text": "Promises."
              },
              {
                "type": "paragraph",
                "text": "Sudden emotional openness."
              },
              {
                "type": "paragraph",
                "text": "Declarations about your future."
              },
              {
                "type": "paragraph",
                "text": "Sometimes these gestures are sincere."
              },
              {
                "type": "paragraph",
                "text": "But sincerity alone does not make them evidence of change."
              },
              {
                "type": "paragraph",
                "text": "The more useful question is:"
              },
              {
                "type": "paragraph",
                "text": "What would make me safer and more capable in a relationship even if she never returns?"
              },
              {
                "type": "paragraph",
                "text": "That distinction is critical because transformation performed exclusively to control somebody else's decision is still a form of control."
              },
              {
                "type": "paragraph",
                "text": "Richo's model of mature love offers five practices: attention, acceptance, appreciation, affection, and allowing. The last one is particularly important here. Allowing means recognizing the reality of another person rather than trying to force reality into the outcome you prefer."
              },
              {
                "type": "paragraph",
                "text": "If she says:"
              },
              {
                "type": "paragraph",
                "text": "\"I don't want this relationship anymore,\""
              },
              {
                "type": "paragraph",
                "text": "mature love may include the painful capacity to hear what she is actually saying."
              },
              {
                "type": "paragraph",
                "text": "If she says:"
              },
              {
                "type": "paragraph",
                "text": "\"I don't know,\""
              },
              {
                "type": "paragraph",
                "text": "maturity may require allowing uncertainty instead of demanding a decision that calms your anxiety."
              },
              {
                "type": "paragraph",
                "text": "If she says:"
              },
              {
                "type": "paragraph",
                "text": "\"I'm willing to talk, but I need to see real change,\""
              },
              {
                "type": "paragraph",
                "text": "then the task becomes behavioral."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning approach points toward mutual fairness, safety, sensitivity, explicit agreements, learning one's partner, and effective repair."
              },
              {
                "type": "paragraph",
                "text": "Change therefore cannot merely sound like:"
              },
              {
                "type": "paragraph",
                "text": "\"I'll communicate better.\""
              },
              {
                "type": "paragraph",
                "text": "It needs to become observable."
              },
              {
                "type": "paragraph",
                "text": "For example:"
              },
              {
                "type": "paragraph",
                "text": "\"When conflict happens, I will not disappear for two days. I will tell you that I need thirty minutes to regulate and confirm when I'll return to the conversation.\""
              },
              {
                "type": "paragraph",
                "text": "That is behavior."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning the difference between:"
              },
              {
                "type": "paragraph",
                "text": "persuasion and repair,"
              },
              {
                "type": "paragraph",
                "text": "regret and responsibility,"
              },
              {
                "type": "paragraph",
                "text": "promising and changing,"
              },
              {
                "type": "paragraph",
                "text": "wanting her and being capable of relating well to her."
              },
              {
                "type": "paragraph",
                "text": "You are also learning that an apology should not contain a hidden invoice requiring forgiveness, contact, or reconciliation in return."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "If contact is appropriate and welcomed, a mature repair conversation might involve four elements:"
              },
              {
                "type": "paragraph",
                "text": "Recognition: What happened?"
              },
              {
                "type": "paragraph",
                "text": "Ownership: What did I contribute?"
              },
              {
                "type": "paragraph",
                "text": "Impact: How might it have affected you?"
              },
              {
                "type": "paragraph",
                "text": "Change: What will be different behaviorally?"
              },
              {
                "type": "paragraph",
                "text": "Not:"
              },
              {
                "type": "paragraph",
                "text": "\"I only acted that way because you kept...\""
              },
              {
                "type": "paragraph",
                "text": "Not:"
              },
              {
                "type": "paragraph",
                "text": "\"I've changed, so you owe me another chance.\""
              },
              {
                "type": "paragraph",
                "text": "And not:"
              },
              {
                "type": "paragraph",
                "text": "\"Nobody will ever love you like I do.\""
              },
              {
                "type": "paragraph",
                "text": "A clean repair leaves the other person free."
              },
              {
                "type": "paragraph",
                "text": "That freedom is part of what makes the repair trustworthy."
              },
              {
                "type": "steps",
                "title": "Practice — The No-Persuasion Repair",
                "items": [
                  "Write the message you desperately want to send.",
                  "Then remove:",
                  "attempts to create guilt,\ndramatic promises,\naccusations,\nreferences designed to create jealousy,\ndemands for immediate answers,\nexplanations that erase responsibility,\npressure disguised as romance.",
                  "Now rewrite it around four sentences:",
                  "I recognize...",
                  "I take responsibility for...",
                  "I understand that may have affected you by...",
                  "Regardless of what you decide, I am working on...",
                  "Do not send the exercise automatically.",
                  "Its purpose is first to clarify your own thinking."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Distinguish genuine repair from attempts to regain control.",
                  "Take responsibility without collapsing into shame or defensiveness.",
                  "Translate vague promises into observable relationship behavior.",
                  "Communicate without using guilt, jealousy, pressure, or emotional bargaining.",
                  "Respect another person's freedom while still expressing your own feelings clearly..'"
                ]
              }
            ]
          },
          {
            "title": "Repair, Release, or Leave the Door Closed",
            "subtitle": "Missing someone does not answer whether the relationship should continue.",
            "sourceText": "Repair, Release, or Leave the Door Closed - Missing someone does not answer whether the relationship should continue.\n\nOnce the first emotional storm settles, a harder question arrives:\n\nShould this relationship actually be rebuilt?\n\nPeople frequently substitute feeling for evaluation.\n\n\"I still love her.\"\n\nThat matters.\n\nBut it is not enough.\n\nYou can love someone with whom you cannot build a functional partnership.\n\nYou can miss someone whose presence repeatedly destabilized your life.\n\nYou can regret your mistakes and still conclude that returning would recreate the same system.\n\nYou can also discover that two imperfect people have enough goodwill, accountability, compatibility, and willingness to build something substantially healthier.\n\nThe distinction requires evidence.\n\nAttached encourages attention to compatibility and the ability of partners to meet attachment needs rather than relying purely on romantic chemistry.\n\nTatkin's secure-functioning framework asks whether the relationship can become a mutually protective, fair, collaborative two-person system rather than a contest between individual interests.\n\nRicho adds another essential idea: mature loving includes accepting reality, maintaining boundaries, and sometimes surviving the ending of a relationship rather than forcing its continuation. His revised edition specifically addresses ending relationships as part of adult loving.\n\nSo evaluate the relationship through capacity, not longing.\n\nCan both people acknowledge their contribution?\n\nCan both communicate honestly?\n\nCan boundaries be respected?\n\nCan conflict be repaired?\n\nIs there reciprocity?\n\nAre core values compatible?\n\nDoes the relationship contain genuine emotional safety?\n\nIs affection still accompanied by respect?\n\nMost importantly:\n\nAre both people actually choosing the relationship?\n\nOne person cannot perform mutuality alone.\n\nWhat You Are Learning\n\nYou are learning relationship decision-making.\n\nYou will stop framing your options as only:\n\nget her back versus lose her forever.\n\nA more mature set of possibilities exists:\n\nrepair together,\n\nseparate respectfully,\n\ncreate temporary distance,\n\nremain apart,\n\nor—in some circumstances—recognize that reopening the relationship would recreate harm.\n\nPractical Application\n\nImagine she agrees to meet.\n\nThere are two possible conversations.\n\nConversation A spends ninety minutes discussing how much you miss each other.\n\nConversation B asks:\n\nWhat repeatedly failed between us?\nWhat responsibility does each person accept?\nWhat would change behaviorally?\nWhat boundaries would be necessary?\nWhat would we do differently during the next conflict?\nAre we both genuinely willing to try?\n\nConversation A may feel more romantic.\n\nConversation B tells you whether reconciliation has a foundation.\n\nIf the relationship includes coercion, intimidation, violence, serious untreated addiction, or other safety concerns, the appropriate priority is not a couples exercise but safety and suitable professional support. Tatkin's own couples-workshop materials make similar exclusions for relationships in active crisis or involving intimate-partner violence.\n\nPractice — The Relationship Viability Scorecard\n\nScore each category from 0–5:\n\nMutual willingness\n\nEmotional safety\n\nRespect\n\nTrust\n\nAccountability\n\nReciprocity\n\nConflict repair\n\nCompatible future\n\nBoundary respect\n\nObservable change\n\nThen answer:\n\nIf nothing changed except that we missed each other, would this relationship work six months from now?\n\nThat question often reveals more than:\n\n\"Do we still have feelings?\"\n\nAfter This Section, You Will Be Able To\nEvaluate reconciliation using evidence rather than loneliness.\nDistinguish chemistry and attachment from relationship compatibility.\nIdentify whether repair is genuinely mutual.\nRecognize when releasing a relationship may be healthier than restarting it.\nDefine the concrete conditions required before considering reconciliation.',",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Once the first emotional storm settles, a harder question arrives:"
              },
              {
                "type": "paragraph",
                "text": "Should this relationship actually be rebuilt?"
              },
              {
                "type": "paragraph",
                "text": "People frequently substitute feeling for evaluation."
              },
              {
                "type": "paragraph",
                "text": "\"I still love her.\""
              },
              {
                "type": "paragraph",
                "text": "That matters."
              },
              {
                "type": "paragraph",
                "text": "But it is not enough."
              },
              {
                "type": "paragraph",
                "text": "You can love someone with whom you cannot build a functional partnership."
              },
              {
                "type": "paragraph",
                "text": "You can miss someone whose presence repeatedly destabilized your life."
              },
              {
                "type": "paragraph",
                "text": "You can regret your mistakes and still conclude that returning would recreate the same system."
              },
              {
                "type": "paragraph",
                "text": "You can also discover that two imperfect people have enough goodwill, accountability, compatibility, and willingness to build something substantially healthier."
              },
              {
                "type": "paragraph",
                "text": "The distinction requires evidence."
              },
              {
                "type": "paragraph",
                "text": "Attached encourages attention to compatibility and the ability of partners to meet attachment needs rather than relying purely on romantic chemistry."
              },
              {
                "type": "paragraph",
                "text": "Tatkin's secure-functioning framework asks whether the relationship can become a mutually protective, fair, collaborative two-person system rather than a contest between individual interests."
              },
              {
                "type": "paragraph",
                "text": "Richo adds another essential idea: mature loving includes accepting reality, maintaining boundaries, and sometimes surviving the ending of a relationship rather than forcing its continuation. His revised edition specifically addresses ending relationships as part of adult loving."
              },
              {
                "type": "paragraph",
                "text": "So evaluate the relationship through capacity, not longing."
              },
              {
                "type": "paragraph",
                "text": "Can both people acknowledge their contribution?"
              },
              {
                "type": "paragraph",
                "text": "Can both communicate honestly?"
              },
              {
                "type": "paragraph",
                "text": "Can boundaries be respected?"
              },
              {
                "type": "paragraph",
                "text": "Can conflict be repaired?"
              },
              {
                "type": "paragraph",
                "text": "Is there reciprocity?"
              },
              {
                "type": "paragraph",
                "text": "Are core values compatible?"
              },
              {
                "type": "paragraph",
                "text": "Does the relationship contain genuine emotional safety?"
              },
              {
                "type": "paragraph",
                "text": "Is affection still accompanied by respect?"
              },
              {
                "type": "paragraph",
                "text": "Most importantly:"
              },
              {
                "type": "paragraph",
                "text": "Are both people actually choosing the relationship?"
              },
              {
                "type": "paragraph",
                "text": "One person cannot perform mutuality alone."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning relationship decision-making."
              },
              {
                "type": "paragraph",
                "text": "You will stop framing your options as only:"
              },
              {
                "type": "paragraph",
                "text": "get her back versus lose her forever."
              },
              {
                "type": "paragraph",
                "text": "A more mature set of possibilities exists:"
              },
              {
                "type": "paragraph",
                "text": "repair together,"
              },
              {
                "type": "paragraph",
                "text": "separate respectfully,"
              },
              {
                "type": "paragraph",
                "text": "create temporary distance,"
              },
              {
                "type": "paragraph",
                "text": "remain apart,"
              },
              {
                "type": "paragraph",
                "text": "or—in some circumstances—recognize that reopening the relationship would recreate harm."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine she agrees to meet."
              },
              {
                "type": "paragraph",
                "text": "There are two possible conversations."
              },
              {
                "type": "paragraph",
                "text": "Conversation A spends ninety minutes discussing how much you miss each other."
              },
              {
                "type": "paragraph",
                "text": "Conversation B asks:"
              },
              {
                "type": "paragraph",
                "text": "What repeatedly failed between us?\nWhat responsibility does each person accept?\nWhat would change behaviorally?\nWhat boundaries would be necessary?\nWhat would we do differently during the next conflict?\nAre we both genuinely willing to try?"
              },
              {
                "type": "paragraph",
                "text": "Conversation A may feel more romantic."
              },
              {
                "type": "paragraph",
                "text": "Conversation B tells you whether reconciliation has a foundation."
              },
              {
                "type": "paragraph",
                "text": "If the relationship includes coercion, intimidation, violence, serious untreated addiction, or other safety concerns, the appropriate priority is not a couples exercise but safety and suitable professional support. Tatkin's own couples-workshop materials make similar exclusions for relationships in active crisis or involving intimate-partner violence."
              },
              {
                "type": "steps",
                "title": "Practice — The Relationship Viability Scorecard",
                "items": [
                  "Score each category from 0–5:",
                  "Mutual willingness",
                  "Emotional safety",
                  "Respect",
                  "Trust",
                  "Accountability",
                  "Reciprocity",
                  "Conflict repair",
                  "Compatible future",
                  "Boundary respect",
                  "Observable change",
                  "Then answer:",
                  "If nothing changed except that we missed each other, would this relationship work six months from now?",
                  "That question often reveals more than:",
                  "\"Do we still have feelings?\""
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Evaluate reconciliation using evidence rather than loneliness.",
                  "Distinguish chemistry and attachment from relationship compatibility.",
                  "Identify whether repair is genuinely mutual.",
                  "Recognize when releasing a relationship may be healthier than restarting it.",
                  "Define the concrete conditions required before considering reconciliation.',"
                ]
              }
            ]
          },
          {
            "title": "Learn to Be Alone Without Becoming Closed",
            "subtitle": "The goal after heartbreak is not to stop needing love. It is to stop needing a relationship to escape yourself.",
            "sourceText": "Learn to Be Alone Without Becoming Closed - The goal after heartbreak is not to stop needing love. It is to stop needing a relationship to escape yourself.\n\nAfter a breakup there is often an empty space that the relationship previously occupied.\n\nMorning messages disappear.\n\nWeekend plans disappear.\n\nPhysical affection disappears.\n\nShared rituals disappear.\n\nA person who was woven through your ordinary day suddenly exists mostly inside memory.\n\nThat emptiness can create enormous pressure to fill the space quickly.\n\nYou reinstall dating apps.\n\nYou reconnect with an ex.\n\nYou pursue casual intimacy.\n\nYou search for someone who resembles her.\n\nOr you decide that relationships are no longer worth the risk and become emotionally unavailable yourself.\n\nNeither rebound dependence nor permanent withdrawal constitutes healing.\n\nRicho explicitly treats relationship endings and grief as part of adult loving. The 20th-anniversary material includes surviving breakups while maintaining self-esteem and learning from relationship patterns rather than simply erasing the experience.\n\nNorwood approaches recovery from another direction. A central part of her model is redirecting enormous amounts of attention previously spent monitoring or changing another person toward one's own life, development, interests, support system, and recovery.\n\nAlthough Norwood wrote specifically about women caught in compulsive relationship patterns, the underlying principle is useful here regardless of gender:\n\nA life that has become organized around another person's attention needs to become your life again.\n\nThis is not the shallow advice to \"focus on yourself.\"\n\nIt means rebuilding structures that make identity larger than romantic status.\n\nFriendships.\n\nFamily.\n\nPhysical health.\n\nWork.\n\nLearning.\n\nPurpose.\n\nMoney.\n\nSleep.\n\nSolitude.\n\nPlay.\n\nCompetence.\n\nCommunity.\n\nThe aim is not proving that you do not need anyone.\n\nSecure people can need others.\n\nThe aim is becoming capable of choosing love because it enriches your life rather than because loneliness makes almost any attachment feel preferable.\n\nWhat You Are Learning\n\nYou are learning to distinguish solitude from abandonment.\n\nYou are also learning how unprocessed relationships can quietly determine future partner selection.\n\nIf you rush into another relationship while still seeking reassurance that you are desirable, the new person can become treatment for the old rejection.\n\nThat is unfair to both of you.\n\nPractical Application\n\nImagine meeting somebody attractive two months after the breakup.\n\nAsk yourself:\n\n\"Am I interested in discovering who this woman actually is?\"\n\nor:\n\n\"Am I mainly interested in what being wanted by her would make me feel about myself?\"\n\nBoth desires can coexist.\n\nBut recognizing the second prevents you from disguising emotional anesthesia as new love.\n\nThe same applies to living alone.\n\nA quiet Saturday evening can either become evidence that your life is empty or an opportunity to discover which parts of your identity disappeared inside the previous relationship.\n\nPractice — The Life Re-Expansion Plan\n\nCreate five categories:\n\nBody\n\nFriendship\n\nPurpose\n\nCompetence\n\nEnjoyment\n\nChoose one weekly action for each.\n\nThen add a sixth:\n\nRelationship Recovery\n\nOnce each week, answer:\n\nWhat do I miss about her?\nWhat do I miss about having someone?\nWhat do I not miss?\nWhat have I learned about myself?\nWhat pattern do I refuse to reproduce?\nWhat quality do I want to bring into my next relationship?\n\nRun this exercise for four weeks before judging whether being alone is \"working.\"\n\nAfter This Section, You Will Be Able To\nGrieve a relationship without making reunion your only path to relief.\nRebuild routines and identity outside romantic attachment.\nRecognize rebound motivation before involving another person.\nDistinguish missing your former partner from fearing solitude.\nApproach future dating from curiosity rather than emotional emergency.'",
            "blocks": [
              {
                "type": "paragraph",
                "text": "After a breakup there is often an empty space that the relationship previously occupied."
              },
              {
                "type": "paragraph",
                "text": "Morning messages disappear."
              },
              {
                "type": "paragraph",
                "text": "Weekend plans disappear."
              },
              {
                "type": "paragraph",
                "text": "Physical affection disappears."
              },
              {
                "type": "paragraph",
                "text": "Shared rituals disappear."
              },
              {
                "type": "paragraph",
                "text": "A person who was woven through your ordinary day suddenly exists mostly inside memory."
              },
              {
                "type": "paragraph",
                "text": "That emptiness can create enormous pressure to fill the space quickly."
              },
              {
                "type": "paragraph",
                "text": "You reinstall dating apps."
              },
              {
                "type": "paragraph",
                "text": "You reconnect with an ex."
              },
              {
                "type": "paragraph",
                "text": "You pursue casual intimacy."
              },
              {
                "type": "paragraph",
                "text": "You search for someone who resembles her."
              },
              {
                "type": "paragraph",
                "text": "Or you decide that relationships are no longer worth the risk and become emotionally unavailable yourself."
              },
              {
                "type": "paragraph",
                "text": "Neither rebound dependence nor permanent withdrawal constitutes healing."
              },
              {
                "type": "paragraph",
                "text": "Richo explicitly treats relationship endings and grief as part of adult loving. The 20th-anniversary material includes surviving breakups while maintaining self-esteem and learning from relationship patterns rather than simply erasing the experience."
              },
              {
                "type": "paragraph",
                "text": "Norwood approaches recovery from another direction. A central part of her model is redirecting enormous amounts of attention previously spent monitoring or changing another person toward one's own life, development, interests, support system, and recovery."
              },
              {
                "type": "paragraph",
                "text": "Although Norwood wrote specifically about women caught in compulsive relationship patterns, the underlying principle is useful here regardless of gender:"
              },
              {
                "type": "paragraph",
                "text": "A life that has become organized around another person's attention needs to become your life again."
              },
              {
                "type": "paragraph",
                "text": "This is not the shallow advice to \"focus on yourself.\""
              },
              {
                "type": "paragraph",
                "text": "It means rebuilding structures that make identity larger than romantic status."
              },
              {
                "type": "paragraph",
                "text": "Friendships."
              },
              {
                "type": "paragraph",
                "text": "Family."
              },
              {
                "type": "paragraph",
                "text": "Physical health."
              },
              {
                "type": "paragraph",
                "text": "Work."
              },
              {
                "type": "paragraph",
                "text": "Learning."
              },
              {
                "type": "paragraph",
                "text": "Purpose."
              },
              {
                "type": "paragraph",
                "text": "Money."
              },
              {
                "type": "paragraph",
                "text": "Sleep."
              },
              {
                "type": "paragraph",
                "text": "Solitude."
              },
              {
                "type": "paragraph",
                "text": "Play."
              },
              {
                "type": "paragraph",
                "text": "Competence."
              },
              {
                "type": "paragraph",
                "text": "Community."
              },
              {
                "type": "paragraph",
                "text": "The aim is not proving that you do not need anyone."
              },
              {
                "type": "paragraph",
                "text": "Secure people can need others."
              },
              {
                "type": "paragraph",
                "text": "The aim is becoming capable of choosing love because it enriches your life rather than because loneliness makes almost any attachment feel preferable."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to distinguish solitude from abandonment."
              },
              {
                "type": "paragraph",
                "text": "You are also learning how unprocessed relationships can quietly determine future partner selection."
              },
              {
                "type": "paragraph",
                "text": "If you rush into another relationship while still seeking reassurance that you are desirable, the new person can become treatment for the old rejection."
              },
              {
                "type": "paragraph",
                "text": "That is unfair to both of you."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine meeting somebody attractive two months after the breakup."
              },
              {
                "type": "paragraph",
                "text": "Ask yourself:"
              },
              {
                "type": "paragraph",
                "text": "\"Am I interested in discovering who this woman actually is?\""
              },
              {
                "type": "paragraph",
                "text": "or:"
              },
              {
                "type": "paragraph",
                "text": "\"Am I mainly interested in what being wanted by her would make me feel about myself?\""
              },
              {
                "type": "paragraph",
                "text": "Both desires can coexist."
              },
              {
                "type": "paragraph",
                "text": "But recognizing the second prevents you from disguising emotional anesthesia as new love."
              },
              {
                "type": "paragraph",
                "text": "The same applies to living alone."
              },
              {
                "type": "paragraph",
                "text": "A quiet Saturday evening can either become evidence that your life is empty or an opportunity to discover which parts of your identity disappeared inside the previous relationship."
              },
              {
                "type": "steps",
                "title": "Practice — The Life Re-Expansion Plan",
                "items": [
                  "Create five categories:",
                  "Body",
                  "Friendship",
                  "Purpose",
                  "Competence",
                  "Enjoyment",
                  "Choose one weekly action for each.",
                  "Then add a sixth:",
                  "Relationship Recovery",
                  "Once each week, answer:",
                  "What do I miss about her?\nWhat do I miss about having someone?\nWhat do I not miss?\nWhat have I learned about myself?\nWhat pattern do I refuse to reproduce?\nWhat quality do I want to bring into my next relationship?",
                  "Run this exercise for four weeks before judging whether being alone is \"working.\""
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Grieve a relationship without making reunion your only path to relief.",
                  "Rebuild routines and identity outside romantic attachment.",
                  "Recognize rebound motivation before involving another person.",
                  "Distinguish missing your former partner from fearing solitude.",
                  "Approach future dating from curiosity rather than emotional emergency.'"
                ]
              }
            ]
          },
          {
            "title": "Choose and Build Secure Love Next Time",
            "subtitle": "The final lesson is not how to keep someone chasing. It is how to create a relationship where chasing is unnecessary.",
            "sourceText": "Choose and Build Secure Love Next Time - The final lesson is not how to keep someone chasing. It is how to create a relationship where chasing is unnecessary.\n\nSuppose your former partner does not return.\n\nOr suppose you reconcile.\n\nEventually the same question remains:\n\nWhat kind of relationship are you now capable of building?\n\nThis is where everything in the course converges.\n\nAttached teaches you to pay attention to attachment compatibility, availability, responsiveness, and direct communication rather than mistaking instability for chemistry.\n\nTatkin pushes beyond individual compatibility toward secure functioning: two people deliberately creating fairness, mutual protection, agreements, responsiveness, and rapid repair. His Wired for Love framework specifically emphasizes creating a \"couple bubble,\" learning one's partner, seeing their perspective, maintaining connection rituals, and handling conflict in ways that preserve the relationship.\n\nRicho's Five A's offer another layer:\n\nAttention: I notice you.\n\nAcceptance: I do not require you to become somebody else before I can relate to reality.\n\nAppreciation: I actively recognize what is valuable in you.\n\nAffection: Warmth becomes behavior rather than assumption.\n\nAllowing: Our closeness does not cancel your autonomy.\n\nNorwood contributes the warning that love becomes unhealthy when one person's life increasingly revolves around changing, rescuing, monitoring, or controlling another.\n\nPut those together and a striking principle emerges:\n\nSecure love requires both dependence and differentiation.\n\nYou should matter to each other.\n\nYou should affect each other.\n\nYou should rely on each other.\n\nBut neither person should need to disappear for the relationship to survive.\n\nThat principle changes how you choose a partner.\n\nInstead of asking only:\n\n\"Do I feel chemistry?\"\n\nyou start asking:\n\n\"Can we tell each other what we need?\"\n\n\"Does she respond consistently?\"\n\n\"Can I respond consistently?\"\n\n\"Can disagreement occur without threatening the relationship?\"\n\n\"Do we repair?\"\n\n\"Can we remain individuals while building a real 'we'?\"\n\n\"Is this relationship reciprocal?\"\n\nThis is a considerably higher standard than merely finding someone who keeps choosing you.\n\nWhat You Are Learning\n\nYou are learning to build a relationship deliberately rather than reactively.\n\nYou will know what to look for in a future partner, what to contribute yourself, how to communicate needs earlier, and how to prevent small disappointments from hardening into the pursuit-withdrawal structure that brought you into this course.\n\nPractical Application\n\nImagine your future partner texts:\n\n\"You seemed distant tonight. Is something wrong?\"\n\nThe old pattern might be:\n\n\"Nothing.\"\n\nShe asks again.\n\nYou become irritated.\n\nShe becomes anxious.\n\nThe cycle begins.\n\nSecure communication sounds more like:\n\n\"I'm overloaded from work and quieter than usual. It isn't about us. I need an hour to decompress, and then I'd like to spend some time with you.\"\n\nThat response does four things.\n\nIt provides information.\n\nIt reduces unnecessary threat.\n\nIt protects your need for space.\n\nIt confirms reconnection.\n\nSmall behaviors like this prevent many relationship problems from becoming identity-level conflicts.\n\nPractice — Your Secure Relationship Operating Agreement\n\nBefore your next serious relationship—or together if reconciliation occurs—write your answers to these ten questions:\n\nHow do I normally behave when I feel rejected?\nHow do I behave when I feel controlled?\nWhat kind of reassurance genuinely helps me?\nHow do I ask for space without creating abandonment?\nHow should conflict pauses work?\nWhat behavior counts as disrespect?\nWhat boundaries do I need around phones, social media, ex-partners, friends, and privacy?\nHow do I prefer affection and appreciation to be expressed?\nHow will we repair after hurting each other?\nWhat will I do if I notice myself returning to old patterns?\n\nDo not treat the agreement as permanent law.\n\nReview it as the relationship develops.\n\nThe goal is not eliminating conflict.\n\nThe goal is preventing uncertainty from repeatedly turning love into a chase.\n\nAfter This Section, You Will Be Able To\nEvaluate future partners for emotional availability and compatibility rather than chemistry alone.\nCommunicate reassurance, boundaries, needs, and requests directly.\nBuild relationship agreements based on reciprocity and fairness.\nRecognize pursuit-withdrawal patterns early enough to interrupt them.\nApply secure-functioning principles and the Five A's to everyday relationship behavior.\nCreate closeness without requiring either partner to chase, control, or disappear.",
            "blocks": [
              {
                "type": "paragraph",
                "text": "Suppose your former partner does not return."
              },
              {
                "type": "paragraph",
                "text": "Or suppose you reconcile."
              },
              {
                "type": "paragraph",
                "text": "Eventually the same question remains:"
              },
              {
                "type": "paragraph",
                "text": "What kind of relationship are you now capable of building?"
              },
              {
                "type": "paragraph",
                "text": "This is where everything in the course converges."
              },
              {
                "type": "paragraph",
                "text": "Attached teaches you to pay attention to attachment compatibility, availability, responsiveness, and direct communication rather than mistaking instability for chemistry."
              },
              {
                "type": "paragraph",
                "text": "Tatkin pushes beyond individual compatibility toward secure functioning: two people deliberately creating fairness, mutual protection, agreements, responsiveness, and rapid repair. His Wired for Love framework specifically emphasizes creating a \"couple bubble,\" learning one's partner, seeing their perspective, maintaining connection rituals, and handling conflict in ways that preserve the relationship."
              },
              {
                "type": "paragraph",
                "text": "Richo's Five A's offer another layer:"
              },
              {
                "type": "paragraph",
                "text": "Attention: I notice you."
              },
              {
                "type": "paragraph",
                "text": "Acceptance: I do not require you to become somebody else before I can relate to reality."
              },
              {
                "type": "paragraph",
                "text": "Appreciation: I actively recognize what is valuable in you."
              },
              {
                "type": "paragraph",
                "text": "Affection: Warmth becomes behavior rather than assumption."
              },
              {
                "type": "paragraph",
                "text": "Allowing: Our closeness does not cancel your autonomy."
              },
              {
                "type": "paragraph",
                "text": "Norwood contributes the warning that love becomes unhealthy when one person's life increasingly revolves around changing, rescuing, monitoring, or controlling another."
              },
              {
                "type": "paragraph",
                "text": "Put those together and a striking principle emerges:"
              },
              {
                "type": "paragraph",
                "text": "Secure love requires both dependence and differentiation."
              },
              {
                "type": "paragraph",
                "text": "You should matter to each other."
              },
              {
                "type": "paragraph",
                "text": "You should affect each other."
              },
              {
                "type": "paragraph",
                "text": "You should rely on each other."
              },
              {
                "type": "paragraph",
                "text": "But neither person should need to disappear for the relationship to survive."
              },
              {
                "type": "paragraph",
                "text": "That principle changes how you choose a partner."
              },
              {
                "type": "paragraph",
                "text": "Instead of asking only:"
              },
              {
                "type": "paragraph",
                "text": "\"Do I feel chemistry?\""
              },
              {
                "type": "paragraph",
                "text": "you start asking:"
              },
              {
                "type": "paragraph",
                "text": "\"Can we tell each other what we need?\""
              },
              {
                "type": "paragraph",
                "text": "\"Does she respond consistently?\""
              },
              {
                "type": "paragraph",
                "text": "\"Can I respond consistently?\""
              },
              {
                "type": "paragraph",
                "text": "\"Can disagreement occur without threatening the relationship?\""
              },
              {
                "type": "paragraph",
                "text": "\"Do we repair?\""
              },
              {
                "type": "paragraph",
                "text": "\"Can we remain individuals while building a real 'we'?\""
              },
              {
                "type": "paragraph",
                "text": "\"Is this relationship reciprocal?\""
              },
              {
                "type": "paragraph",
                "text": "This is a considerably higher standard than merely finding someone who keeps choosing you."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "What You Are Learning"
              },
              {
                "type": "paragraph",
                "text": "You are learning to build a relationship deliberately rather than reactively."
              },
              {
                "type": "paragraph",
                "text": "You will know what to look for in a future partner, what to contribute yourself, how to communicate needs earlier, and how to prevent small disappointments from hardening into the pursuit-withdrawal structure that brought you into this course."
              },
              {
                "type": "heading",
                "level": 2,
                "text": "Practical Application"
              },
              {
                "type": "paragraph",
                "text": "Imagine your future partner texts:"
              },
              {
                "type": "paragraph",
                "text": "\"You seemed distant tonight. Is something wrong?\""
              },
              {
                "type": "paragraph",
                "text": "The old pattern might be:"
              },
              {
                "type": "paragraph",
                "text": "\"Nothing.\""
              },
              {
                "type": "paragraph",
                "text": "She asks again."
              },
              {
                "type": "paragraph",
                "text": "You become irritated."
              },
              {
                "type": "paragraph",
                "text": "She becomes anxious."
              },
              {
                "type": "paragraph",
                "text": "The cycle begins."
              },
              {
                "type": "paragraph",
                "text": "Secure communication sounds more like:"
              },
              {
                "type": "paragraph",
                "text": "\"I'm overloaded from work and quieter than usual. It isn't about us. I need an hour to decompress, and then I'd like to spend some time with you.\""
              },
              {
                "type": "paragraph",
                "text": "That response does four things."
              },
              {
                "type": "paragraph",
                "text": "It provides information."
              },
              {
                "type": "paragraph",
                "text": "It reduces unnecessary threat."
              },
              {
                "type": "paragraph",
                "text": "It protects your need for space."
              },
              {
                "type": "paragraph",
                "text": "It confirms reconnection."
              },
              {
                "type": "paragraph",
                "text": "Small behaviors like this prevent many relationship problems from becoming identity-level conflicts."
              },
              {
                "type": "steps",
                "title": "Practice — Your Secure Relationship Operating Agreement",
                "items": [
                  "Before your next serious relationship—or together if reconciliation occurs—write your answers to these ten questions:",
                  "How do I normally behave when I feel rejected?\nHow do I behave when I feel controlled?\nWhat kind of reassurance genuinely helps me?\nHow do I ask for space without creating abandonment?\nHow should conflict pauses work?\nWhat behavior counts as disrespect?\nWhat boundaries do I need around phones, social media, ex-partners, friends, and privacy?\nHow do I prefer affection and appreciation to be expressed?\nHow will we repair after hurting each other?\nWhat will I do if I notice myself returning to old patterns?",
                  "Do not treat the agreement as permanent law.",
                  "Review it as the relationship develops.",
                  "The goal is not eliminating conflict.",
                  "The goal is preventing uncertainty from repeatedly turning love into a chase."
                ]
              },
              {
                "type": "checklist",
                "title": "After This Section, You Will Be Able To",
                "items": [
                  "Evaluate future partners for emotional availability and compatibility rather than chemistry alone.",
                  "Communicate reassurance, boundaries, needs, and requests directly.",
                  "Build relationship agreements based on reciprocity and fairness.",
                  "Recognize pursuit-withdrawal patterns early enough to interrupt them.",
                  "Apply secure-functioning principles and the Five A's to everyday relationship behavior.",
                  "Create closeness without requiring either partner to chase, control, or disappear."
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};

const courseCatalogApi = (typeof window !== 'undefined' && window.FlirtyFlipCourseCatalog)
  || (typeof globalThis !== 'undefined' && globalThis.FlirtyFlipCourseCatalog)
  || (typeof FlirtyFlipCourseCatalog !== 'undefined' ? FlirtyFlipCourseCatalog : null)
  || { courses: [], categories: [], filters: [] };
const courseCategories = courseCatalogApi?.categories || [];
const courseFilterOptions = courseCatalogApi?.filters || [];

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
  if (typeof document !== "undefined" && document.body && route.name !== "course") {
    document.body.dataset.catalogView = "";
  }

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

  stopSpeaking();
  playSound("flip");

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
  stopSpeaking();
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
  playSound("click");
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
  stopSpeaking();
  playSound("completion");
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
  stopSpeaking();
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
  if (typeof document !== "undefined" && document.body) {
    document.body.dataset.catalogView = view;
  }
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
// COURSE LESSON PARSING & REUSABLE BLOCK ENGINE
// Dual system:
// 1. Explicit structured blocks for new/future courses & prototypes
// 2. Conservative fallback parser for legacy string courses (preserves 100% of raw text)
// ========================================
function getCourseReadingTime(course) {
  if (course.time) return course.time;
  const lessons = getFlatCourseLessons(course);
  let wordCount = 0;
  for (const l of lessons) {
    if (typeof l.content === 'string') {
      wordCount += l.content.split(/\s+/).filter(Boolean).length;
    } else if (l.content && typeof l.content === 'object') {
      if (Array.isArray(l.content.blocks)) {
        for (const b of l.content.blocks) {
          if (b.text) wordCount += b.text.split(/\s+/).filter(Boolean).length;
          if (Array.isArray(b.items)) wordCount += b.items.join(' ').split(/\s+/).filter(Boolean).length;
          if (b.prompt) wordCount += b.prompt.split(/\s+/).filter(Boolean).length;
          if (b.instructions) wordCount += b.instructions.split(/\s+/).filter(Boolean).length;
          if (Array.isArray(b.steps)) wordCount += b.steps.join(' ').split(/\s+/).filter(Boolean).length;
          if (b.context) wordCount += b.context.split(/\s+/).filter(Boolean).length;
          if (b.action) wordCount += b.action.split(/\s+/).filter(Boolean).length;
        }
      } else if (typeof l.content.body === 'string') {
        wordCount += l.content.body.split(/\s+/).filter(Boolean).length;
      }
    }
  }
  if (wordCount > 0) {
    const minutes = Math.max(1, Math.round(wordCount / 200));
    return `~${minutes} min`;
  }
  return null;
}

function getLessonReadingTime(lessonRecord) {
  if (!lessonRecord) return '3 min read';
  let wordCount = 0;
  if (typeof lessonRecord.content === 'string') {
    wordCount = lessonRecord.content.split(/\s+/).filter(Boolean).length;
  } else if (lessonRecord.content && typeof lessonRecord.content === 'object') {
    if (typeof lessonRecord.content.sourceText === 'string') {
      wordCount = lessonRecord.content.sourceText.split(/\s+/).filter(Boolean).length;
    } else if (Array.isArray(lessonRecord.content.blocks)) {
      for (const b of lessonRecord.content.blocks) {
        if (b.text) wordCount += b.text.split(/\s+/).filter(Boolean).length;
        if (Array.isArray(b.items)) wordCount += b.items.join(' ').split(/\s+/).filter(Boolean).length;
        if (b.prompt) wordCount += b.prompt.split(/\s+/).filter(Boolean).length;
        if (b.instructions) wordCount += b.instructions.split(/\s+/).filter(Boolean).length;
        if (Array.isArray(b.steps)) wordCount += b.steps.join(' ').split(/\s+/).filter(Boolean).length;
        if (b.context) wordCount += b.context.split(/\s+/).filter(Boolean).length;
        if (b.action) wordCount += b.action.split(/\s+/).filter(Boolean).length;
      }
    } else if (typeof lessonRecord.content.body === 'string') {
      wordCount = lessonRecord.content.body.split(/\s+/).filter(Boolean).length;
    }
  }
  const minutes = Math.max(1, Math.round((wordCount || 400) / 200));
  return `${minutes} min read`;
}

function parseCourseLesson(content, fallbackTitle = 'Lesson') {
  if (content && typeof content === 'object') {
    return {
      title: content.title || fallbackTitle,
      subtitle: content.subtitle || '',
      body: content.body || '',
      blocks: Array.isArray(content.blocks) ? content.blocks : null
    };
  }
  const value = String(content || '').trim();
  const match = value.match(/^\s*(?:\d+\.\s*)?([^–—-]+?)\s*-\s*(.*)$/s);
  return {
    title: (match?.[1] || value || fallbackTitle).trim(),
    subtitle: '',
    body: (match?.[2] || '').trim(),
    blocks: null
  };
}

function getLessonSummary(content) {
  const lesson = parseCourseLesson(content);
  if (lesson.blocks) {
    const firstP = lesson.blocks.find((b) => b.type === 'paragraph')?.text || lesson.subtitle;
    if (firstP) return firstP.length > 170 ? `${firstP.slice(0, 167).trim()}…` : firstP.trim();
  }
  if (!lesson.body) return 'Open this lesson to read the available material.';
  const firstSentence = lesson.body.match(/^.*?[.!?](?:\s|$)/)?.[0] || lesson.body;
  return firstSentence.length > 170 ? `${firstSentence.slice(0, 167).trim()}…` : firstSentence.trim();
}

function renderCourseBlocks(blocks) {
  if (!Array.isArray(blocks)) return '';
  return blocks.map((block) => {
    if (!block || typeof block !== 'object') return '';
    switch (block.type) {
      case 'paragraph':
        return `<p class="course-editorial-p">${escapeHtml(block.text || '')}</p>`;

      case 'heading': {
        const level = block.level === 3 ? 'h3' : 'h2';
        return `<${level} class="course-editorial-${level}">${escapeHtml(block.text || '')}</${level}>`;
      }

      case 'quote':
        return `
          <figure class="course-pull-quote">
            <span class="course-pull-quote__mark" aria-hidden="true">“</span>
            <blockquote>${escapeHtml(block.text || '')}</blockquote>
            ${block.author ? `<figcaption>— ${escapeHtml(block.author)}</figcaption>` : ''}
          </figure>
        `;

      case 'takeaway':
        return `
          <aside class="course-takeaway-card" role="region" aria-label="Key Takeaway">
            <div class="course-takeaway-card__header">
              <span class="course-takeaway-card__icon" aria-hidden="true">✦</span>
              <strong>${escapeHtml(block.title || 'Key Takeaway')}</strong>
            </div>
            <p>${escapeHtml(block.text || '')}</p>
          </aside>
        `;

      case 'checklist':
        return `
          <div class="course-checklist-card">
            ${block.title ? `<div class="course-checklist-card__title"><span>✓</span><strong>${escapeHtml(block.title)}</strong></div>` : ''}
            <ul class="course-checklist">
              ${(block.items || []).map((item) => `
                <li>
                  <span class="course-checklist__check" aria-hidden="true">✓</span>
                  <span>${escapeHtml(item)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `;

      case 'steps':
        return `
          <div class="course-steps-card">
            ${block.title ? `<h3 class="course-steps-card__title">${escapeHtml(block.title)}</h3>` : ''}
            <ol class="course-steps-list">
              ${(block.items || []).map((item, idx) => `
                <li>
                  <span class="course-steps__num">${String(idx + 1).padStart(2, '0')}</span>
                  <div class="course-steps__body">${escapeHtml(item)}</div>
                </li>
              `).join('')}
            </ol>
          </div>
        `;

      case 'reflection':
        return `
          <div class="course-reflection-card" role="region" aria-label="Reflection Prompt">
            <div class="course-reflection-card__tag">
              <span class="course-reflection-card__icon" aria-hidden="true">💭</span>
              <span>PAUSE & REFLECT</span>
            </div>
            <p class="course-reflection-card__prompt">${escapeHtml(block.prompt || block.text || '')}</p>
            ${block.hint ? `<small class="course-reflection-card__hint">${escapeHtml(block.hint)}</small>` : ''}
          </div>
        `;

      case 'worksheet':
        return `
          <section class="course-worksheet-card" role="region" aria-label="${escapeHtml(block.title || 'Worksheet')}">
            <div class="course-worksheet-card__header">
              <span class="course-worksheet-card__badge">PRACTICE & WORKSHEET</span>
              <h3>${escapeHtml(block.title || 'Self-Guided Exercise')}</h3>
              ${block.instructions ? `<p class="course-worksheet-card__intro">${escapeHtml(block.instructions)}</p>` : ''}
            </div>
            ${Array.isArray(block.steps) && block.steps.length ? `
              <ol class="course-worksheet-card__steps">
                ${block.steps.map((st, sIdx) => `
                  <li>
                    <span class="step-badge">${sIdx + 1}</span>
                    <div class="step-text">${escapeHtml(st)}</div>
                  </li>
                `).join('')}
              </ol>
            ` : ''}
            ${Array.isArray(block.fields) && block.fields.length ? `
              <div class="course-worksheet-card__fields">
                ${block.fields.map((f) => `
                  <div class="worksheet-field">
                    <label>${escapeHtml(f.label || '')}</label>
                    <div class="worksheet-field__placeholder">${escapeHtml(f.placeholder || '')}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </section>
        `;

      case 'scenario':
        return `
          <div class="course-scenario-card" role="region" aria-label="Practical Application Scenario">
            <div class="course-scenario-card__header">
              <span class="course-scenario-card__badge">PRACTICAL APPLICATION</span>
              <h3>${escapeHtml(block.title || 'Everyday Scenario')}</h3>
            </div>
            <div class="course-scenario-card__body">
              ${block.context ? `<div class="scenario-segment"><div class="segment-label">The Situation:</div><p>${escapeHtml(block.context)}</p></div>` : ''}
              ${block.action ? `<div class="scenario-segment scenario-segment--action"><div class="segment-label">The Healthy Response:</div><p>${escapeHtml(block.action)}</p></div>` : ''}
              ${!block.context && !block.action && block.text ? `<p>${escapeHtml(block.text)}</p>` : ''}
            </div>
          </div>
        `;

      default:
        return block.text ? `<p class="course-editorial-p">${escapeHtml(block.text)}</p>` : '';
    }
  }).join('');
}

function formatLessonParagraphs(body) {
  if (!body) return '<p class="lesson-unavailable">Detailed lesson content is not available yet.</p>';
  const rawParagraphs = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return rawParagraphs.map((paragraph) => {
    const singleLine = !paragraph.includes('\n');
    if (singleLine && /^(What You Are Learning|Practical Application|After This Section,? You Will Be Able To|Key Takeaways?)$/i.test(paragraph)) {
      return `<h2 class="course-editorial-h2">${escapeHtml(paragraph)}</h2>`;
    }
    if (singleLine && /^Practice\s*[—–-]/i.test(paragraph)) {
      return `<h3 class="course-editorial-h3">${escapeHtml(paragraph)}</h3>`;
    }
    const lines = paragraph.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length > 1 && lines.every((l) => /^[-•*]\s+/.test(l))) {
      return `
        <ul class="course-checklist">
          ${lines.map((l) => `<li><span class="course-checklist__check" aria-hidden="true">✓</span><span>${escapeHtml(l.replace(/^[-•*]\s+/, ''))}</span></li>`).join('')}
        </ul>
      `;
    }
    return `<p class="course-editorial-p">${escapeHtml(paragraph)}</p>`;
  }).join('');
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
  const soundBtn = $("sound-btn");
  const drawerSoundBtn = $("drawer-sound-btn");
  const voiceBtn = $("voice-btn");
  const themeSelect = $("theme-select");
  const drawerThemeSelect = document.querySelector(".drawer-theme-row .theme-select");

  if (supportBtn) supportBtn.addEventListener('click', (e) => { e.preventDefault(); showSupport('index'); });
  if (soundBtn) soundBtn.addEventListener('click', (e) => { e.preventDefault(); (window.FlirtyFlipSound || { toggle: toggleSound }).toggle(); });
  if (drawerSoundBtn) drawerSoundBtn.addEventListener('click', (e) => { e.preventDefault(); (window.FlirtyFlipSound || { toggle: toggleSound }).toggle(); });
  if (voiceBtn) {
    if (!("speechSynthesis" in window)) {
      voiceBtn.style.display = "none";
    } else {
      voiceBtn.addEventListener('click', () => toggleReadAloud());
    }
  }
  if (themeSelect) themeSelect.addEventListener('change', (e) => setTheme(e.target.value));
  if (drawerThemeSelect) drawerThemeSelect.addEventListener('change', (e) => setTheme(e.target.value));

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

function renderCourseCoverArt(course) {
  if (!course) return '';
  const style = course.coverStyle || 'rose-cards';
  const category = course.category || 'for-her';
  const categoryClass = category === 'for-him'
    ? 'course-cover-art--for-him'
    : (category === 'for-couples' ? 'course-cover-art--for-couples' : '');
  const categoryLabel = courseCatalogApi?.getCategory?.(category)?.label || (category === 'for-him' ? 'For Him' : (category === 'for-couples' ? 'For Couples' : 'For Her'));
  const initial = (course.title || 'F').charAt(0).toUpperCase();

  const motifs = {
    'rose-cards': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="80" cy="80" r="68" stroke="rgba(255,255,255,0.15)" stroke-width="1.2" stroke-dasharray="3 3" />
        <path d="M80 34 C64 16, 32 30, 32 58 C32 86, 68 112, 80 126 C92 112, 128 86, 128 58 C128 30, 96 16, 80 34 Z" stroke="var(--accent)" stroke-width="2" fill="rgba(255,36,73,0.12)" />
        <circle cx="80" cy="62" r="14" stroke="#ffffff" stroke-width="1.5" fill="rgba(255,255,255,0.06)" />
        <path d="M74 58 C77 54, 83 54, 86 58 C88 62, 84 66, 80 70" stroke="#ffffff" stroke-width="1.4" />
        <circle cx="80" cy="80" r="3" fill="var(--accent)" />
      </svg>
    `,
    'blueprint': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="80" cy="80" r="66" stroke="rgba(100,181,246,0.25)" stroke-width="1.2" stroke-dasharray="4 4" />
        <rect x="36" y="36" width="88" height="88" rx="8" stroke="rgba(255,255,255,0.2)" stroke-width="1.4" fill="rgba(100,181,246,0.06)" />
        <line x1="36" y1="80" x2="124" y2="80" stroke="rgba(255,255,255,0.18)" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="80" y1="36" x2="80" y2="124" stroke="rgba(255,255,255,0.18)" stroke-width="1" stroke-dasharray="2 2" />
        <path d="M80 44 L114 116 M80 44 L46 116 M58 92 L102 92" stroke="#64b5f6" stroke-width="2" />
        <circle cx="80" cy="44" r="4" fill="#ffffff" />
        <circle cx="80" cy="80" r="24" stroke="#90caf9" stroke-width="1.5" />
      </svg>
    `,
    'petals': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="80" cy="80" r="68" stroke="rgba(244,143,177,0.25)" stroke-width="1.2" stroke-dasharray="3 3" />
        <path d="M80 24 C95 48, 95 68, 80 80 C65 68, 65 48, 80 24 Z" stroke="#f48fb1" stroke-width="1.8" fill="rgba(244,143,177,0.15)" />
        <path d="M80 136 C95 112, 95 92, 80 80 C65 92, 65 112, 80 136 Z" stroke="#f48fb1" stroke-width="1.8" fill="rgba(244,143,177,0.15)" />
        <path d="M24 80 C48 95, 68 95, 80 80 C68 65, 48 65, 24 80 Z" stroke="#f48fb1" stroke-width="1.8" fill="rgba(244,143,177,0.15)" />
        <path d="M136 80 C112 95, 92 95, 80 80 C92 65, 112 65, 136 80 Z" stroke="#f48fb1" stroke-width="1.8" fill="rgba(244,143,177,0.15)" />
        <circle cx="80" cy="80" r="12" stroke="#ffffff" stroke-width="1.6" fill="rgba(255,255,255,0.1)" />
        <circle cx="80" cy="80" r="3" fill="#f48fb1" />
      </svg>
    `,
    'rings': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="80" cy="80" r="68" stroke="rgba(206,147,216,0.2)" stroke-width="1.2" stroke-dasharray="3 3" />
        <circle cx="64" cy="80" r="34" stroke="#ce93d8" stroke-width="2.2" fill="rgba(206,147,216,0.12)" />
        <circle cx="96" cy="80" r="34" stroke="#f48fb1" stroke-width="2.2" fill="rgba(244,143,177,0.12)" />
        <path d="M64 46 C74 46, 84 54, 88 64 M72 96 C76 106, 86 114, 96 114" stroke="#ffffff" stroke-width="2.4" />
        <circle cx="80" cy="80" r="4" fill="#ffffff" />
      </svg>
    `,
    'horizon': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="80" cy="80" r="68" stroke="rgba(79,195,247,0.2)" stroke-width="1.2" stroke-dasharray="3 3" />
        <line x1="28" y1="96" x2="132" y2="96" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
        <path d="M48 96 A34 34 0 0 1 112 96 Z" stroke="#4fc3f7" stroke-width="2" fill="rgba(79,195,247,0.16)" />
        <line x1="80" y1="52" x2="80" y2="40" stroke="#4fc3f7" stroke-width="2" />
        <line x1="56" y1="62" x2="48" y2="54" stroke="#4fc3f7" stroke-width="1.8" />
        <line x1="104" y1="62" x2="112" y2="54" stroke="#4fc3f7" stroke-width="1.8" />
        <path d="M68 96 L80 126 L92 96" stroke="#ffffff" stroke-width="1.6" />
        <circle cx="80" cy="82" r="6" fill="#ffffff" />
      </svg>
    `,
    'infinity': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="80" cy="80" r="68" stroke="rgba(171,71,188,0.2)" stroke-width="1.2" stroke-dasharray="3 3" />
        <path d="M48 80 C48 64, 28 64, 28 80 C28 96, 48 96, 80 80 C112 64, 132 64, 132 80 C132 96, 112 96, 80 80 C48 64, 28 64, 28 80" stroke="#ba68c8" stroke-width="2.4" />
        <path d="M48 80 C48 70, 36 70, 36 80 C36 90, 48 90, 80 80 C112 70, 124 70, 124 80 C124 90, 112 90, 80 80" stroke="#ffffff" stroke-width="1.4" stroke-dasharray="4 3" />
        <circle cx="80" cy="80" r="4" fill="#ffffff" />
      </svg>
    `,
    'orbit': `
      <svg class="cover-art-motif" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <ellipse cx="80" cy="80" rx="66" ry="28" stroke="rgba(41,182,246,0.3)" stroke-width="1.4" transform="rotate(-25 80 80)" />
        <ellipse cx="80" cy="80" rx="66" ry="28" stroke="rgba(255,255,255,0.25)" stroke-width="1.4" transform="rotate(25 80 80)" />
        <circle cx="80" cy="80" r="16" stroke="#29b6f6" stroke-width="2" fill="rgba(41,182,246,0.18)" />
        <circle cx="80" cy="80" r="6" fill="#ffffff" />
        <circle cx="128" cy="58" r="4" fill="#29b6f6" />
        <circle cx="32" cy="102" r="3" fill="#90caf9" />
      </svg>
    `
  };

  const motifSvg = motifs[style] || motifs['rose-cards'];

  return `
    <div class="course-cover-art ${categoryClass}" aria-hidden="true">
      <div class="cover-deck-layer cover-deck-layer--back"></div>
      <div class="cover-deck-layer cover-deck-layer--mid"></div>
      <div class="cover-art-plate">
        <div class="cover-art-grid-overlay"></div>
        <header class="cover-art-header">
          <span class="cover-art-badge">${escapeHtml(categoryLabel)}</span>
          <span class="cover-art-deck-tag">FLIRTYFLIP ACADEMY</span>
        </header>
        <div class="cover-art-center">
          ${motifSvg}
        </div>
        <footer class="cover-art-footer">
          <div class="cover-seal">
            <span class="cover-seal__initial">${escapeHtml(initial)}</span>
          </div>
          <div class="cover-art-brand">
            <strong>FLIRTYFLIP MASTERCLASS</strong>
            <small>Curated Guide Series</small>
          </div>
        </footer>
      </div>
    </div>
  `;
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
  const readingTime = getCourseReadingTime(c);
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
      <div class="course-completion-body">
        <strong>Course Complete ♡</strong>
        <p>You’ve finished all ${lessons.length} lessons in this guide. Revisit any lesson below at your own pace.</p>
      </div>
    </div>
  ` : '';

  content.innerHTML = `
    <article class="premium-course">
      <header class="course-detail-hero">
        ${renderCourseCoverArt(c)}
        <div class="course-detail-hero__copy">
          <div class="course-meta-chips" aria-label="Course metadata">
            ${categoryLabel ? `<span class="course-chip course-chip--audience">${escapeHtml(categoryLabel)}</span>` : ''}
            <span class="course-chip course-chip--free">Free</span>
            <span class="course-chip">${lessons.length} Lessons</span>
            ${readingTime ? `<span class="course-chip">${escapeHtml(readingTime)}</span>` : ''}
          </div>
          <h1>${escapeHtml(c.title)}</h1>
          <p class="course-hook">${escapeHtml(c.subtitle || c.summary || '')}</p>
          ${completionBanner}
          ${renderCourseProgress(courseId)}
          <button class="pill-btn course-primary" type="button" data-action="open-course-lesson" data-course="${escapeHtml(courseId)}" data-lesson="${continueLesson}">${isCompleted ? 'Review course' : progress ? 'Continue course' : 'Start course'} →</button>
        </div>
      </header>
      <section class="learning-outcomes">
        <div class="learning-outcomes__header">
          <div class="eyebrow">WHAT YOU'LL LEARN</div>
          <h2>Practical ideas to take into your relationship.</h2>
        </div>
        <div class="learning-outcomes__grid">
          ${(c.outcomes || []).map((outcome) => `
            <div class="learning-outcome-card">
              <span class="outcome-check" aria-hidden="true">✓</span>
              <p>${escapeHtml(outcome)}</p>
            </div>
          `).join('')}
        </div>
      </section>
      <section class="curriculum">
        <div class="catalog-section-heading">
          <div><div class="eyebrow">CURRICULUM</div><h2>Course lessons.</h2></div>
          <p>${lessons.length} lessons total</p>
        </div>
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
  const lessonReadingTime = getLessonReadingTime(lessonRecord);

  configureCatalogShell({
    eyebrow: 'LESSON',
    title: lesson.title,
    subtitle: course.title,
    backRoute: `${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}`,
    hideHeader: true,
    view: 'course-reader'
  });

  const bodyContent = lesson.blocks
    ? renderCourseBlocks(lesson.blocks)
    : `
        ${formatLessonParagraphs(lesson.body)}
        <aside class="course-takeaway-card" role="region" aria-label="Key Reflection">
          <div class="course-takeaway-card__header">
            <span class="course-takeaway-card__icon" aria-hidden="true">✦</span>
            <strong>Key Reflection</strong>
          </div>
          <p>Pause here together. Take 60 seconds to discuss how this insight applies to your current dynamic, or reflect on one small habit you want to practice together this week.</p>
        </aside>
      `;

  const isWarmWorkbook = courseId === 'art-of-romance';

  $('catalog-content').innerHTML = `
    <article class="course-reader ${isWarmWorkbook ? 'course-reader--warm-workbook' : ''}">
      <header class="reader-header">
        <div class="reader-top-bar">
          <a href="${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}" data-route="${ROUTE_PATHS.course}/${encodeURIComponent(courseId)}" class="reader-course-link">← ${escapeHtml(course.title)}</a>
          <span class="reader-chapter-badge">Chapter ${lessonIndex + 1} of ${lessons.length}</span>
        </div>
        <div class="reader-progress-label"><span>Progress</span><strong>${positionPercent}%</strong></div>
        <div class="reader-progress-track"><span style="width:${positionPercent}%"></span></div>
        <div class="reader-meta-row">
          <div class="reader-eyebrow">CORE LESSON ${String(lessonIndex + 1).padStart(2, '0')}${lessonRecord.sectionTitle ? ` · ${escapeHtml(lessonRecord.sectionTitle)}` : ''}</div>
          ${lessonReadingTime ? `<div class="reader-time-badge">⏱ ${escapeHtml(lessonReadingTime)}</div>` : ''}
        </div>
        <h1>${escapeHtml(lesson.title)}</h1>
        ${lesson.subtitle ? `<div class="reader-lead-thesis">${escapeHtml(lesson.subtitle)}</div>` : ''}
      </header>
      <div class="reader-sheet">
        <div class="reader-body">
          ${bodyContent}
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

// ========================================
// EXPERIENCE & AMBIENT CONTROLLERS (Adapted from FlirtyFlip-MVP)
// Theme switching, ambient particle dust, synthesized Web Audio sound FX, and optional Web Speech read-aloud.
// ========================================

// 1. THEME CONTROLLER
function initTheme() {
  let savedTheme = "rose";
  try {
    savedTheme = localStorage.getItem("flirtyflip_theme") || "rose";
  } catch (_) {}
  if (!["rose", "amber", "cosmic"].includes(savedTheme)) savedTheme = "rose";
  setTheme(savedTheme, false);
}

function setTheme(theme, persist = true) {
  if (!["rose", "amber", "cosmic"].includes(theme)) theme = "rose";
  if (typeof document !== "undefined") {
    if (document.body) document.body.setAttribute("data-theme", theme);
    if (document.documentElement) document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("#theme-select, .theme-select").forEach((sel) => {
      sel.value = theme;
    });
  }
  if (persist) {
    try {
      localStorage.setItem("flirtyflip_theme", theme);
    } catch (_) {}
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("flirtyflip:themechange", { detail: { theme } }));
  }
}
if (typeof window !== "undefined") {
  window.initTheme = initTheme;
  window.setTheme = setTheme;
}

// 2. AMBIENT PARTICLE SYSTEM (Visible, Romantic, Lightweight)
function initAmbientParticles() {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery && motionQuery.matches) {
    canvas.style.display = "none";
    return;
  }

  let width = window.innerWidth;
  let height = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  const isMobile = width < 768;
  const count = isMobile ? 20 : 38;

  function drawHeart(x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const d = size * 0.6;
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-d, -d * 1.2, -d * 2.2, d * 0.4, 0, d * 2);
    ctx.bezierCurveTo(d * 2.2, d * 0.4, d, -d * 1.2, 0, 0);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  function drawBokeh(x, y, size, color, alpha) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  // Retain helper signatures for test compatibility
  function drawStar(x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const r = size * 0.65;
    const inner = r * 0.28;
    for (let i = 0; i < 8; i++) {
      const radius = i % 2 === 0 ? r : inner;
      const angle = (i * Math.PI) / 4;
      const sx = Math.cos(angle) * radius;
      const sy = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  function drawEmber(x, y, size, color, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.55, size * 0.9, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.restore();
  }

  let particles = [];
  function createParticles() {
    particles = [];
    const currentTheme = (document.body && document.body.getAttribute("data-theme")) || "rose";

    for (let i = 0; i < count; i++) {
      const isHeart = Math.random() > 0.65;
      const size = isHeart ? (Math.random() * 5 + 6) : (Math.random() * 3 + 3);

      let color;
      if (currentTheme === "amber") {
        color = isHeart ? "rgb(245, 194, 120)" : "rgb(230, 152, 56)";
      } else if (currentTheme === "cosmic") {
        color = isHeart ? "rgb(199, 125, 255)" : "rgb(157, 78, 221)";
      } else {
        color = isHeart ? "rgb(255, 117, 143)" : "rgb(230, 57, 86)";
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        speedY: Math.random() * 0.45 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.35 + 0.25,
        isHeart: isHeart,
        color: color
      });
    }
  }

  createParticles();
  window.addEventListener("flirtyflip:themechange", createParticles);

  function render() {
    if (!document.hidden && (!motionQuery || !motionQuery.matches)) {
      ctx.clearRect(0, 0, width, height);

      const isCourseReader = document.body.getAttribute("data-catalog-view") === "course-reader" ||
        document.querySelector('.course-reader');
      const routeDampener = isCourseReader ? 0.05 : 1.0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        const dynamicAlpha = p.opacity * routeDampener;

        if (p.isHeart) {
          drawHeart(p.x, p.y, p.size, p.color, dynamicAlpha);
        } else {
          drawBokeh(p.x, p.y, p.size, p.color, dynamicAlpha);
        }
      }
      ctx.globalAlpha = 1;
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
if (typeof window !== "undefined") {
  window.initAmbientParticles = initAmbientParticles;
}

// 3. AUTHORITATIVE SOUND CONTROLLER (window.FlirtyFlipSound)
// Off by default, zero external audio assets, single source of truth
const soundSubscribers = new Set();
let soundEnabled = false;
try {
  soundEnabled = typeof window !== "undefined" && window.localStorage
    ? localStorage.getItem("flirtyflip_sound_enabled") === "true"
    : false;
} catch (_) {
  soundEnabled = false;
}
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx && typeof window !== "undefined") {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (type === "flip") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(340, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === "click") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(560, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === "reveal") {
      [440.0, 554.37, 659.25].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
        gain.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.38);
      });
    } else if (type === "success" || type === "match") {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.07);
        gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.07 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.07);
        osc.stop(ctx.currentTime + i * 0.07 + 0.5);
      });
    } else if (type === "completion") {
      [349.23, 440.0, 523.25, 698.46].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.6);
      });
    }
  } catch (_) {}
}

const FlirtyFlipSound = {
  isEnabled() {
    return soundEnabled;
  },
  setEnabled(value, skipFeedback = false) {
    const next = Boolean(value);
    if (soundEnabled === next) return soundEnabled;
    soundEnabled = next;
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("flirtyflip_sound_enabled", String(soundEnabled));
      }
    } catch (_) {}
    if (soundEnabled && !skipFeedback) {
      playSound("click");
      if (typeof toast === "function") toast("Sound effects: ON 🔊");
    } else if (!soundEnabled && !skipFeedback) {
      if (typeof toast === "function") toast("Sound effects: OFF 🔇");
    }
    updateSoundButtons();
    soundSubscribers.forEach((cb) => {
      try { cb(soundEnabled); } catch (_) {}
    });
    return soundEnabled;
  },
  toggle() {
    return this.setEnabled(!soundEnabled);
  },
  play(type) {
    playSound(type);
  },
  subscribe(callback) {
    if (typeof callback === "function") {
      soundSubscribers.add(callback);
      try { callback(soundEnabled); } catch (_) {}
      return () => soundSubscribers.delete(callback);
    }
    return () => {};
  }
};

function toggleSound() {
  return FlirtyFlipSound.toggle();
}

function updateSoundButtons() {
  if (typeof document === "undefined") return;
  const isEnabled = FlirtyFlipSound ? FlirtyFlipSound.isEnabled() : soundEnabled;
  document.querySelectorAll("#sound-btn, .sound-toggle-btn").forEach((btn) => {
    btn.textContent = isEnabled ? "🔊" : "🔇";
    btn.setAttribute("aria-label", isEnabled ? "Disable sound effects" : "Enable sound effects");
    btn.setAttribute("aria-pressed", String(isEnabled));
    btn.setAttribute("title", isEnabled ? "Sound Effects (ON 🔊)" : "Sound Effects (Off by default)");
    if (isEnabled) btn.classList.add("is-active");
    else btn.classList.remove("is-active");
  });
  document.querySelectorAll("#drawer-sound-state, .drawer-sound-state").forEach((el) => {
    el.textContent = isEnabled ? "ON 🔊" : "OFF 🔇";
  });
  document.querySelectorAll("#drawer-sound-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(isEnabled));
    if (isEnabled) btn.classList.add("is-active");
    else btn.classList.remove("is-active");
  });
}

if (typeof window !== "undefined") {
  window.FlirtyFlipSound = FlirtyFlipSound;
  window.playSound = playSound;
  window.toggleSound = toggleSound;
  window.updateSoundButtons = updateSoundButtons;
}

// 4. VOICE / READ-ALOUD CONTROLLER (Web Speech API)
let isSpeaking = false;

function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  if (typeof document !== "undefined") {
    const voiceBtn = document.getElementById("voice-btn");
    if (voiceBtn) {
      voiceBtn.classList.remove("is-active");
      voiceBtn.setAttribute("aria-label", "Read prompt aloud");
      voiceBtn.textContent = "🗣️";
    }
  }
}

function toggleReadAloud() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    toast("Voice read-aloud is not supported in this browser.");
    return;
  }
  const voiceBtn = document.getElementById("voice-btn");
  if (window.speechSynthesis.speaking || isSpeaking) {
    stopSpeaking();
    return;
  }
  const qEl = document.getElementById("question-text");
  const turnEl = document.getElementById("turn-label");
  const promptText = qEl ? qEl.textContent.trim() : "";
  if (!promptText) return;
  const text = turnEl && turnEl.textContent ? `${turnEl.textContent}. ${promptText}` : promptText;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1.0;
  try {
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) =>
        v.lang &&
        v.lang.startsWith("en") &&
        (v.name.includes("Natural") ||
          v.name.includes("Samantha") ||
          v.name.includes("Karen") ||
          v.name.includes("Google") ||
          v.name.includes("Victoria"))
    );
    if (naturalVoice) utterance.voice = naturalVoice;
  } catch (_) {}
  utterance.onstart = () => {
    isSpeaking = true;
    if (voiceBtn) {
      voiceBtn.classList.add("is-active");
      voiceBtn.setAttribute("aria-label", "Stop reading aloud");
      voiceBtn.textContent = "⏹️";
    }
  };
  utterance.onend = utterance.onerror = () => {
    stopSpeaking();
  };
  window.speechSynthesis.speak(utterance);
}

if (typeof window !== "undefined") {
  window.toggleReadAloud = toggleReadAloud;
  window.stopSpeaking = stopSpeaking;
}

// Global Application Bootstrap (Runs after all controllers and modules are defined)
if (typeof document !== "undefined") {
  initTheme();
  updateSoundButtons();
  initAmbientParticles();
  renderCourseNavigation();
  bindGlobalUI();
  bindAuthEvents();
  updateFavoritesBadge();
  initializeAuth();
  bindNavEvents();
  bindCatalogEvents();
  initializeRouter();
}

