// ========================================
// COUPLE MINI-GAME CATALOG AND CONTENT
// Edit titles, rewards and consent-friendly prompts here; game mechanics live in couple-games.js.
// Keep every challenge optional, public-safe and suitable for two consenting adults.
// ========================================
(function configureCoupleGameData(global) {
  "use strict";

  const games = [
    { id: "tic-tac-toe", title: "Tic-Tac-Toe", subtitle: "Couple Edition", icon: "♡ × 🔥", duration: "2–5 min", accent: "#ff4565", description: "Heart and Flame face off on a cinematic 3×3 board." },
    { id: "love-toss", title: "Love Toss", subtitle: "Coin Toss", icon: "◐", duration: "1 min", accent: "#d6ad62", description: "Give each side an outcome, then leave the choice to a fair cryptographic toss." },
    { id: "couple-wheel", title: "Couple Wheel", subtitle: "Spin the Wheel", icon: "✦", duration: "3–10 min", accent: "#ff6a7e", description: "Spin through questions, dares, kisses, compliments, laughs and wild cards." },
    { id: "rapid-fire", title: "Rapid Fire", subtitle: "10 Seconds", icon: "10", duration: "2–8 min", accent: "#ff2449", description: "Three seconds to get ready. Ten seconds to answer together." },
    { id: "mystery-box", title: "Mystery Box", subtitle: "Pick and Reveal", icon: "□?", duration: "4–10 min", accent: "#c83f5b", description: "Eight sealed boxes hide warm questions, playful challenges and bonuses." },
    { id: "reaction-test", title: "Who’s Faster?", subtitle: "Reaction Test", icon: "⚡", duration: "2–5 min", accent: "#f24f65", description: "Wait for the signal, then race for the quickest honest tap." },
    { id: "couple-dice", title: "Couple Dice", subtitle: "Roll for Two", icon: "⚄", duration: "2–8 min", accent: "#e0b76d", description: "Every roll unlocks a different kind of connection prompt." },
    { id: "choose-a-door", title: "Choose a Door", subtitle: "Three Mysteries", icon: "▥", duration: "2–6 min", accent: "#a92f4a", description: "Three doors. One choice. A new shared surprise every round." },
    { id: "would-you-rather", title: "Would You Rather", subtitle: "Couples Edition", icon: "⚖️", duration: "3–10 min", accent: "#ff6b8b", description: "Choose between two captivating dilemmas and see how your partner thinks." }
  ];

  const wheel = [
    { id: "question", label: "Question", color: "#7e1830", outcomes: ["What tiny moment with me made you smile recently?", "What would make tonight feel especially good for you?", "What is one thing you want us to make more time for?"] },
    { id: "dare", label: "Dare", color: "#d72c4d", outcomes: ["Give a ten-second dramatic compliment—or skip freely.", "Recreate your funniest shared photo pose together.", "Invent a ridiculous secret handshake in twenty seconds."] },
    { id: "kiss", label: "Kiss", color: "#f06a7d", outcomes: ["Offer a kiss; your partner chooses whether and where.", "Ask for the kind of kiss that would feel welcome right now.", "Share a forehead kiss, a hand kiss, or choose to pass."] },
    { id: "compliment", label: "Compliment", color: "#c99d4e", outcomes: ["Name one quality in your partner that makes life warmer.", "Compliment something they do that often goes unnoticed.", "Tell them what makes their presence feel special."] },
    { id: "funny", label: "Funny", color: "#5a2234", outcomes: ["Do your best two-second impression of each other.", "Describe your first date as if it were a movie trailer.", "Make up a terrible couple slogan together."] },
    { id: "wild-card", label: "Wild Card", color: "#291b22", outcomes: ["Choose any category together—or take a free pass.", "Swap seats and let your partner choose the next move.", "Both share one small wish for the rest of tonight."] }
  ];

  const rapidPrompts = [
    "Name five things you love doing together.",
    "Describe your dream lazy Sunday in five details.",
    "Name four songs that belong on your couple playlist.",
    "List five tiny things that make a date feel special.",
    "Name three places you would happily revisit together.",
    "Describe each other using only warm, ridiculous adjectives.",
    "Name five snacks you would bring to a midnight picnic.",
    "List four moments that always make you laugh.",
    "Name three traditions you would like to start.",
    "Give each other as many genuine compliments as you can."
  ];

  const mysteryOutcomes = [
    { type: "Question", text: "What is something small I do that helps you feel cared for?" },
    { type: "Challenge", text: "Create a twenty-second dance together—or choose another box." },
    { type: "Bonus", text: "You choose who picks the next game." },
    { type: "Compliment", text: "Say one thing your partner handled beautifully this week." },
    { type: "Wild Card", text: "Choose any gentle question you have been wanting to ask." },
    { type: "Question", text: "What kind of adventure would feel perfect for us right now?" },
    { type: "Challenge", text: "Hold eye contact for ten comfortable seconds—or pass." },
    { type: "Compliment", text: "Tell them what makes their laugh unmistakably theirs." },
    { type: "Bonus", text: "Both players earn a free skip for the next outcome." },
    { type: "Wild Card", text: "Turn this into a shared snack break if that feels better." }
  ];

  const dice = {
    1: { type: "Question", text: "What is one thing you are looking forward to with us?" },
    2: { type: "Compliment", text: "Name one strength your partner brings to the relationship." },
    3: { type: "Funny", text: "Act out your partner ordering their usual drink." },
    4: { type: "Challenge", text: "Create a five-second celebration together—or pass." },
    5: { type: "Connection", text: "Share one moment this week when you felt like a team." },
    6: { type: "Wild Card", text: "Choose any outcome from one through five together." }
  };

  const doors = [
    { type: "Question", text: "What would make our next date feel memorable?" },
    { type: "Challenge", text: "Plan a one-minute imaginary holiday together—or choose another game." },
    { type: "Wild Card", text: "Your partner chooses the next gentle prompt." },
    { type: "Reward", text: "Winner’s privilege: choose the next song or snack." },
    { type: "Compliment", text: "Share the first kind thought you had about your partner today." },
    { type: "Bonus", text: "Both players get a no-questions-asked skip." }
  ];

  const wouldYouRatherPrompts = [
    { a: "A spontaneous midnight road trip to nowhere", b: "A cozy whole-weekend cabin stay with no cell phones", topic: "Getaway" },
    { a: "Wake up together to breakfast in bed every weekend", b: "Have a candlelit dinner cooked together every week", topic: "Daily Romance" },
    { a: "Read each other's minds for just five minutes", b: "Know with 100% certainty what the other loves most about you", topic: "Connection" },
    { a: "A passionate slow dance in the living room in pajamas", b: "A dressed-up glamorous cocktail evening out in the city", topic: "Vibe" },
    { a: "Relive the first hour we ever met with fresh butterflies", b: "Fast forward 10 years to see our happiest memory together", topic: "Time Travel" },
    { a: "Have a playful whisper conversation in a crowded room", b: "Have an intense heart-to-heart conversation on a deserted beach", topic: "Intimacy" },
    { a: "Never run out of playful banter and witty teasing", b: "Never run out of comforting silence and gentle cuddles", topic: "Communication" },
    { a: "Spend a rainy day watching our favorite movies in a blanket fort", b: "Spend a sunny day exploring a hidden spot in a new town", topic: "Adventure" },
    { a: "Receive an unexpected handwritten love letter tucked into your coat", b: "Receive a surprise playlist where every single song has a hidden meaning", topic: "Love Language" },
    { a: "Always have to hold hands whenever we are walking anywhere", b: "Always get a forehead kiss before falling asleep every night", topic: "Affection" },
    { a: "Cook an ambitious new five-course recipe together from scratch", b: "Order takeout from three different places and feast on the floor", topic: "Date Night" },
    { a: "Give up all romantic movies forever", b: "Give up all romantic slow songs forever", topic: "Culture" },
    { a: "Have our partner plan every date night as a complete surprise", b: "Plan every date night together with meticulous excitement", topic: "Planning" },
    { a: "Spend an evening answering deep childhood questions", b: "Spend an evening imagining our dream house down to the smallest detail", topic: "Curiosity" },
    { a: "Be stranded on a luxury island together for two weeks with only each other", b: "Go on a whirlwind backpack tour across four countries in two weeks", topic: "Travel" },
    { a: "Know the exact gift your partner wants for every celebration", b: "Always be completely surprised by whatever thoughtful gift they chose", topic: "Gifts" },
    { a: "Have a secret couple language that nobody else in the world understands", b: "Have a secret couple handshake that we do before any big event", topic: "Playfulness" },
    { a: "Have a 30-minute massage every Sunday evening", b: "Have a 30-minute coffee walk with uninterrupted talk every Saturday morning", topic: "Rituals" },
    { a: "Always know when your partner needs a warm hug without asking", b: "Always know when your partner needs ten minutes of quiet space without asking", topic: "Empathy" },
    { a: "Take a dance class together where we both stumble and laugh", b: "Take a pottery/cooking class where we make something to keep forever", topic: "Shared Hobby" },
    { a: "Have a date night where we can only talk in compliments", b: "Have a date night where we can only ask each other questions", topic: "Playful Game" },
    { a: "Keep our favorite couple inside-joke forever even if it makes no sense to others", b: "Have a shared song that always makes both of us immediately smile", topic: "Memories" },
    { a: "Get a surprise kiss every time you finish cooking or washing dishes", b: "Get a surprise slow-dance request whenever a good song plays", topic: "Spontaneity" },
    { a: "Spend tonight dreaming out loud about our biggest dreams", b: "Spend tonight sharing the funniest moments that ever happened to us", topic: "Conversation" }
  ];

  const coinDefaults = Object.freeze({
    heads: "Choose the next question or game",
    tails: "Choose the next shared snack or song"
  });

  // Every mini-game prompt carries an explicit category and audience tag.
  // Keep this catalog public-safe; 18+ deck content remains behind its existing consent gate elsewhere.
  const tagPrompt = (category, text, audience = "all-couples") => Object.freeze({ category, audience, text });
  const taggedWheel = wheel.map((category) => Object.freeze({
    ...category,
    outcomes: Object.freeze(category.outcomes.map((text) => tagPrompt(category.label, text)))
  }));
  const taggedRapidPrompts = rapidPrompts.map((text) => tagPrompt("Rapid Fire", text));
  const taggedMysteryOutcomes = mysteryOutcomes.map((outcome) => Object.freeze({ ...outcome, category: outcome.type, audience: "all-couples" }));
  const taggedDice = Object.fromEntries(Object.entries(dice).map(([face, outcome]) => [face, Object.freeze({ ...outcome, category: outcome.type, audience: "all-couples" })]));
  const taggedDoors = doors.map((outcome) => Object.freeze({ ...outcome, category: outcome.type, audience: "all-couples" }));
  const taggedWouldYouRather = wouldYouRatherPrompts.map((item) => Object.freeze({
    ...item,
    category: item.topic,
    audience: "all-couples",
    text: `Would you rather: ${item.a} — OR — ${item.b}?`
  }));

  global.FlirtyFlipCoupleGameData = Object.freeze({
    coinDefaults,
    coinPrompts: Object.freeze({
      heads: tagPrompt("Reward", coinDefaults.heads),
      tails: tagPrompt("Reward", coinDefaults.tails)
    }),
    dice: Object.freeze(taggedDice),
    doors: Object.freeze(taggedDoors),
    games: Object.freeze(games),
    mysteryOutcomes: Object.freeze(taggedMysteryOutcomes),
    rapidPrompts: Object.freeze(taggedRapidPrompts),
    reactionRewards: Object.freeze([
      tagPrompt("Reward", "Winner chooses the next song or shared snack."),
      tagPrompt("Reward", "Winner chooses the next question or mini-game."),
      tagPrompt("Reward", "Winner receives one enthusiastic compliment from their partner.")
    ]),
    ticTacToeReward: tagPrompt("Reward", "Choose the next question or game"),
    wheel: Object.freeze(taggedWheel),
    wouldYouRather: Object.freeze(taggedWouldYouRather)
  });
})(window);
