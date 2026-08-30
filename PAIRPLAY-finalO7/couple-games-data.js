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
    { id: "choose-a-door", title: "Choose a Door", subtitle: "Three Mysteries", icon: "▥", duration: "2–6 min", accent: "#a92f4a", description: "Three doors. One choice. A new shared surprise every round." }
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

  const coinDefaults = Object.freeze({
    heads: "Choose the next question or game",
    tails: "Choose the next shared snack or song"
  });

  global.FlirtyFlipCoupleGameData = Object.freeze({
    coinDefaults,
    dice: Object.freeze(dice),
    doors: Object.freeze(doors),
    games: Object.freeze(games),
    mysteryOutcomes: Object.freeze(mysteryOutcomes),
    rapidPrompts: Object.freeze(rapidPrompts),
    wheel: Object.freeze(wheel)
  });
})(window);
