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
      ["QUESTION","hellooooo?"],
     
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
  deep: {
    title: "Deep",
    icon: "🧠",
    desc: "Questions that slow the night down and open the real conversations.",
    intensity: "★★★☆☆",
    color: "#dcd3f1",
    questions: [
    ]
  },
 
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
    title: "Playful",
    icon: "😜",
    desc: "Light teasing, silly prompts and easy dares for a playful evening.",
    intensity: "★★☆☆☆",
    color: "#ffd1e6",
    questions: [
    
    ]
  },
  cozy: {
    title: "Cozy",
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
      ["DEEP","When do you feel most seen by me?"],
      ["QUESTION","What is a small vulnerability you wish I noticed more often?"],
      ["FUTURE","What quiet ritual could we add to strengthen our connection?"],
      ["CHALLENGE","Sit back-to-back and share one thing you appreciate about the other."]
    ]
  }
};

// Separate 25-card and 50-card prompt pools so each deck length can be edited independently.
const moodQuestionSets = {
  sweet: {
    
    10: [
      ["QUESTION","helllllooo ?"],
      ["COMPLIMENT","Give me a compliment you have never said out loud."],
      ["MEMORY","What was your favorite little moment from our first few dates?"],
      ["QUESTION","What nickname would you give our relationship?"],
      ["CHALLENGE","Hold hands for 20 seconds without saying anything."],
      ["QUESTION","What song instantly makes you think of me?"],
      ["COMPLIMENT","Tell me one thing you think I am really good at."],
      ["MEMORY","What is a silly memory of us that you secretly love?"],
      ["QUESTION","What is your ideal lazy Sunday with me?"],
      ["CHALLENGE","Look at each other and try not to smile for 15 seconds."]
    ],
  
    25: [
      ["QUESTION"," Fuckkkkkk offf bsdk?"],
      ["COMPLIMENT","Give me a compliment you have never said out loud."],
      ["MEMORY","What was your favorite little moment from our first few dates?"],
      ["QUESTION","What nickname would you give our relationship?"],
      ["CHALLENGE","Hold hands for 20 seconds without saying anything."],
      ["QUESTION","What song instantly makes you think of me?"],
      ["COMPLIMENT","Tell me one thing you think I am really good at."],
      ["MEMORY","What is a silly memory of us that you secretly love?"],
      ["QUESTION","What is your ideal lazy Sunday with me?"],
      ["CHALLENGE","Look at each other and try not to smile for 15 seconds."],
      ["QUESTION","What is something about us that feels easy and natural?"],
      ["COMPLIMENT","What is one quality in me that makes you feel safe?"],
      ["MEMORY","Which date made you feel happiest with me?"],
      ["QUESTION","If we had a tiny tradition together, what would it be?"],
      ["CHALLENGE","Take turns saying one sweet thing you appreciate about the other."],
      ["QUESTION","What small act of love would make your week feel easier?"],
      ["COMPLIMENT","Describe the way I make you feel when we are together."],
      ["MEMORY","What is the cutest thing you have ever caught me doing?"],
      ["QUESTION","What is a tiny way I could surprise you that would still feel very me?"],
      ["CHALLENGE","Tell each other your favorite thing about the other person's laugh."],
      ["QUESTION","What would your dream low-key date with me look like?"],
      ["COMPLIMENT","Say one compliment you think I deserve but don't hear often enough."],
      ["MEMORY","What is a moment from our relationship that still makes you smile when you think about it?"],
      ["QUESTION","What is something adorable about us as a couple?"],
      ["CHALLENGE","Give each other a 10-second forehead kiss and then say what it made you feel."],
    ],
    50: [
      ["QUESTION","What is one tiny thing I do that always makes you smile?"],
      ["COMPLIMENT","Give me a compliment you have never said out loud."],
      ["MEMORY","What was your favorite little moment from our first few dates?"],
      ["QUESTION","What nickname would you give our relationship?"],
      ["CHALLENGE","Hold hands for 20 seconds without saying anything."],
      ["QUESTION","What song instantly makes you think of me?"],
      ["COMPLIMENT","Tell me one thing you think I am really good at."],
      ["MEMORY","What is a silly memory of us that you secretly love?"],
      ["QUESTION","What is your ideal lazy Sunday with me?"],
      ["CHALLENGE","Look at each other and try not to smile for 15 seconds."],
      ["QUESTION","What is something about us that feels easy and natural?"],
      ["COMPLIMENT","What is one quality in me that makes you feel safe?"],
      ["MEMORY","Which date made you feel happiest with me?"],
      ["QUESTION","If we had a tiny tradition together, what would it be?"],
      ["CHALLENGE","Take turns saying one sweet thing you appreciate about the other."],
      ["QUESTION","What small act of love would make your week feel easier?"],
      ["COMPLIMENT","Describe the way I make you feel when we are together."],
      ["MEMORY","What is the cutest thing you have ever caught me doing?"],
      ["QUESTION","What is a tiny way I could surprise you that would still feel very me?"],
      ["CHALLENGE","Tell each other your favorite thing about the other person's laugh."],
      ["QUESTION","What would your dream low-key date with me look like?"],
      ["COMPLIMENT","Say one compliment you think I deserve but don't hear often enough."],
      ["MEMORY","What is a moment from our relationship that still makes you smile when you think about it?"],
      ["QUESTION","What is something adorable about us as a couple?"],
      ["CHALLENGE","Give each other a 10-second forehead kiss and then say what it made you feel."],
      ["QUESTION","What is a small habit of mine that makes the day feel brighter?"],
      ["COMPLIMENT","Tell me one thing that feels genuinely special about the way we connect."],
      ["MEMORY","When did you feel most proud to be with me?"],
      ["QUESTION","What is a cute little symbol or inside joke that represents our relationship?"],
      ["CHALLENGE","Give one silly, affectionate nickname to your partner and explain why it fits."],
      ["QUESTION","What is one thing you wish we did more often just because it makes us happy?"],
      ["COMPLIMENT","What is something you admire about how I care for the people I love?"],
      ["MEMORY","What is one moment with me that felt surprisingly intimate even without being romantic?"],
      ["QUESTION","What would your perfect rainy-day date with me include?"],
      ["CHALLENGE","Do an exaggerated cheesy pose together and laugh at yourselves for 15 seconds."],
      ["QUESTION","When you think about us, what feels most beautiful to you?"],
      ["COMPLIMENT","Tell me something I do that makes you trust me more."],
      ["MEMORY","What is a memory you never want to lose from the early days of us?"],
      ["QUESTION","What is a sweet gesture you would love to receive more often?"],
      ["CHALLENGE","Tell your partner what it feels like to be loved by them in one sentence."],
      ["QUESTION","If our relationship had a mood board, what would be on it?"],
      ["COMPLIMENT","Name one trait in me that makes your heart feel at home."],
      ["MEMORY","What is the most comforting moment we have shared?"],
      ["QUESTION","What is something about the way we love each other that feels easy and healing?"],
      ["CHALLENGE","Take turns describing each other's best qualities without interrupting."],
    ],
  },
  romantic: {
    10 : [
      ["QUESTION","BHAi tu romentic hai When did you first realize you were falling for me?"],
      ["MEMORY","What is one moment with me you wish you could relive?"],
      ["QUESTION","What is your favorite thing about the way we love each other?"],
      ["COMPLIMENT","Tell me something about me that still gives you butterflies."],
      ["QUESTION","What does your perfect date night with me look like?"],
      ["MEMORY","What is one ordinary day with me that became special?"],
      ["QUESTION","What is something about us you never want to change?"],
      ["CHALLENGE","Give your partner a 20-second hug without speaking."],
      ["QUESTION","What little gesture from me makes you feel most loved?"],
      ["FUTURE","What is one place you would love for us to visit together?"],
      ["COMPLIMENT","Describe your partner in three words — then explain each one."],
      ["MEMORY","What was your favorite moment from the last month together?"]
    ],
    25: [
      ["QUESTION","djdo When did you realize you were falling for me?"],
      ["MEMORY","What is one moment with me you wish you could relive?"],
      ["QUESTION","What is your favorite thing about the way we love each other?"],
      ["COMPLIMENT","Tell me something about me that still gives you butterflies."],
      ["QUESTION","What does your perfect date night with me look like?"],
      ["MEMORY","What is one ordinary day with me that became special?"],
      ["QUESTION","What is something about us you never want to change?"],
      ["CHALLENGE","Give your partner a 20-second hug without speaking."],
      ["QUESTION","What little gesture from me makes you feel most loved?"],
      ["FUTURE","What is one place you would love for us to visit together?"],
      ["COMPLIMENT","Describe your partner in three words — then explain each one."],
      ["MEMORY","What was your favorite moment from the last month together?"],
      ["QUESTION","What part of being with me makes you feel most emotionally safe?"],
      ["FUTURE","What is a dream we could build together over the next year?"],
      ["CHALLENGE","Look into each other's eyes for 15 seconds and then tell each other what you noticed."],
      ["QUESTION","What is a romantic moment that felt surprisingly effortless to you?"],
      ["COMPLIMENT","What do you think I do in a relationship that makes me especially lovable?"],
      ["MEMORY","When did I make you feel the most cared for?"],
      ["QUESTION","What is one thing you would love for us to do more often in our relationship?"],
      ["FUTURE","Where do you picture us being happiest in five years?"],
      ["CHALLENGE","Give each other a slow, sincere compliment you have not said before."],
      ["QUESTION","What makes you feel truly chosen by me?"],
      ["COMPLIMENT","What is something about me that still feels new and exciting to you?"],
      ["MEMORY","What is the most romantic thing we have already done together?"],
      ["QUESTION","What kind of affection makes you feel the most loved after a long day?"],
    ],
    50: [
      ["QUESTION","When did you first realize you were falling for me?"],
      ["MEMORY","What is one moment with me you wish you could relive?"],
      ["QUESTION","What is your favorite thing about the way we love each other?"],
      ["COMPLIMENT","Tell me something about me that still gives you butterflies."],
      ["QUESTION","What does your perfect date night with me look like?"],
      ["MEMORY","What is one ordinary day with me that became special?"],
      ["QUESTION","What is something about us you never want to change?"],
      ["CHALLENGE","Give your partner a 20-second hug without speaking."],
      ["QUESTION","What little gesture from me makes you feel most loved?"],
      ["FUTURE","What is one place you would love for us to visit together?"],
      ["COMPLIMENT","Describe your partner in three words — then explain each one."],
      ["MEMORY","What was your favorite moment from the last month together?"],
      ["QUESTION","What part of being with me makes you feel most emotionally safe?"],
      ["FUTURE","What is a dream we could build together over the next year?"],
      ["CHALLENGE","Look into each other's eyes for 15 seconds and then tell each other what you noticed."],
      ["QUESTION","What is a romantic moment that felt surprisingly effortless to you?"],
      ["COMPLIMENT","What do you think I do in a relationship that makes me especially lovable?"],
      ["MEMORY","When did I make you feel the most cared for?"],
      ["QUESTION","What is one thing you would love for us to do more often in our relationship?"],
      ["FUTURE","Where do you picture us being happiest in five years?"],
      ["CHALLENGE","Give each other a slow, sincere compliment you have not said before."],
      ["QUESTION","What makes you feel truly chosen by me?"],
      ["COMPLIMENT","What is something about me that still feels new and exciting to you?"],
      ["MEMORY","What is the most romantic thing we have already done together?"],
      ["QUESTION","What kind of affection makes you feel the most loved after a long day?"],
      ["FUTURE","What kind of home or space would make you feel deeply connected to us?"],
      ["CHALLENGE","Give your partner a gentle hand squeeze and tell them what it means to you."],
      ["QUESTION","What do you think is the most attractive quality in how I love you?"],
      ["COMPLIMENT","Tell me one thing you always want me to remember about us."],
      ["MEMORY","When did you feel most proud to be my person?"],
      ["QUESTION","What part of our dynamic makes it feel especially romantic to you?"],
      ["FUTURE","What celebration or milestone would you love for us to make together?"],
      ["CHALLENGE","Slow dance or sway together for 20 seconds without speaking."],
      ["QUESTION","What is a memory of us that feels like a quiet love song?"],
      ["COMPLIMENT","Name one way I make you feel emotionally settled and centered."],
      ["MEMORY","What ordinary moment with me has become a favorite memory?"],
      ["QUESTION","What is one romance habit you want us to keep forever?"],
      ["FUTURE","What would you love for our future adventures to include?"],
      ["CHALLENGE","Tell your partner what you hope they feel when they are with you."],
      ["QUESTION","What do you appreciate most about the way we communicate our love?"],
      ["COMPLIMENT","Describe how your heart changes when I am near."],
      ["MEMORY","Which chapter of our relationship feels most precious to you?"],
      ["QUESTION","What is one thing you would love to do with me that feels deeply intimate and simple?"],
      ["FUTURE","What kind of future version of us are you most excited to meet?"],
      ["CHALLENGE","Take turns saying the nicest thing you can honestly think about the other person's character."],
    ],
  },
  deep: {
    10 : [
      ["DEEP","its deep babe?"],
      ["DEEP","What are you most afraid of losing in life?"],
      ["FUTURE","What kind of life would make you feel genuinely fulfilled?"],
      ["DEEP","When do you feel safest with me?"],
      ["DEEP","What is something you are still learning about yourself?"],
      ["FUTURE","What do you hope our relationship feels like five years from now?"],
      ["DEEP","What is one thing you want us to get better at together?"],
      ["DEEP","What is something you rarely tell people but want me to know?"],
      ["MEMORY","Which moment changed the way you see our relationship?"],
      ["DEEP","When you are having a hard day, what do you need from me most?"]
    ],
    25: [
      ["DEEP","jblsh I understood better about you?"],
      ["DEEP","What are you most afraid of losing in life?"],
      ["FUTURE","What kind of life would make you feel genuinely fulfilled?"],
      ["DEEP","When do you feel safest with me?"],
      ["DEEP","What is something you are still learning about yourself?"],
      ["FUTURE","What do you hope our relationship feels like five years from now?"],
      ["DEEP","What is one thing you want us to get better at together?"],
      ["DEEP","What is something you rarely tell people but want me to know?"],
      ["MEMORY","Which moment changed the way you see our relationship?"],
      ["DEEP","When you are having a hard day, what do you need from me most?"],
      ["QUESTION","What is a part of your past that still shapes the way you love?"],
      ["FUTURE","What values do you want our relationship to protect?"],
      ["DEEP","When do you feel most like yourself around me?"],
      ["QUESTION","What do you think makes a person feel truly understood?"],
      ["CHALLENGE","Take 30 seconds to share one thing you have been carrying quietly."],
      ["DEEP","What is something you have had to grow through that changed your perspective?"],
      ["FUTURE","What does emotional safety look like in a partnership to you?"],
      ["QUESTION","What kind of support makes you feel closest to someone?"],
      ["DEEP","What are you still learning to believe about yourself?"],
      ["FUTURE","What kind of life would you want us to build if we were both deeply content?"],
      ["CHALLENGE","Tell each other one fear you can trust the other person with."],
      ["QUESTION","What is something you want to be better at for your own growth?"],
      ["DEEP","What is a truth about your heart that you rarely say out loud?"],
      ["MEMORY","What moment in our relationship made you feel seen for the first time?"],
      ["QUESTION","What would it look like to love each other more gently?"],
    ],
    50: [
      ["DEEP","What is something you wish I understood better about you?"],
      ["DEEP","What are you most afraid of losing in life?"],
      ["FUTURE","What kind of life would make you feel genuinely fulfilled?"],
      ["DEEP","When do you feel safest with me?"],
      ["DEEP","What is something you are still learning about yourself?"],
      ["FUTURE","What do you hope our relationship feels like five years from now?"],
      ["DEEP","What is one thing you want us to get better at together?"],
      ["DEEP","What is something you rarely tell people but want me to know?"],
      ["MEMORY","Which moment changed the way you see our relationship?"],
      ["DEEP","When you are having a hard day, what do you need from me most?"],
      ["QUESTION","What is a part of your past that still shapes the way you love?"],
      ["FUTURE","What values do you want our relationship to protect?"],
      ["DEEP","When do you feel most like yourself around me?"],
      ["QUESTION","What do you think makes a person feel truly understood?"],
      ["CHALLENGE","Take 30 seconds to share one thing you have been carrying quietly."],
      ["DEEP","What is something you have had to grow through that changed your perspective?"],
      ["FUTURE","What does emotional safety look like in a partnership to you?"],
      ["QUESTION","What kind of support makes you feel closest to someone?"],
      ["DEEP","What are you still learning to believe about yourself?"],
      ["FUTURE","What kind of life would you want us to build if we were both deeply content?"],
      ["CHALLENGE","Tell each other one fear you can trust the other person with."],
      ["QUESTION","What is something you want to be better at for your own growth?"],
      ["DEEP","What is a truth about your heart that you rarely say out loud?"],
      ["MEMORY","What moment in our relationship made you feel seen for the first time?"],
      ["QUESTION","What would it look like to love each other more gently?"],
      ["FUTURE","What kind of legacy would you love to build with me?"],
      ["CHALLENGE","Take turns describing a moment you felt deeply accepted by the other person."],
      ["QUESTION","What is something you wish the world understood better about you?"],
      ["DEEP","What does being 'loved well' look like to you?"],
      ["MEMORY","Which conversation with me changed how you see us?"],
      ["QUESTION","What part of you still needs more softness and care?"],
      ["FUTURE","What kind of partnership would help you feel both challenged and safe?"],
      ["DEEP","What is a boundary you are learning to honor more clearly?"],
      ["QUESTION","How do you know when you are ready to be fully vulnerable with someone?"],
      ["CHALLENGE","Share one feeling you are still learning how to name."],
      ["DEEP","What is something you have never truly asked for that you wish you could?"],
      ["FUTURE","What does a healthy, fulfilling future together feel like to you?"],
      ["QUESTION","What part of your dream life would feel more complete with me in it?"],
      ["MEMORY","When did you feel closest to me without saying much at all?"],
      ["QUESTION","What is something you think you have been hiding from yourself?"],
      ["DEEP","What is a fear you feel less afraid of because of me?"],
      ["FUTURE","What kind of healing would you like this relationship to bring you?"],
      ["CHALLENGE","Tell your partner one truth you have been practicing to say with more honesty."],
      ["QUESTION","What kind of devotion feels like a gift to you, not a burden?"],
      ["MEMORY","What moment made you realize you could trust me with your whole heart?"],
      ["DEEP","What do you need more of from us as a couple?"],
      ["FUTURE","What would it look like if we kept choosing each other with intention?"],
    ],
  },
  flirtyii: {
     10 : [
      ["FLIRTY","dont tell me fairytell story?"],
      ["CHALLENGE","Give me your best flirtatious look for 10 seconds."],
      ["QUESTION","What outfit of mine do you secretly love?"],
      ["COMPLIMENT","Describe my smile in the most dramatic way possible."],
      ["CHALLENGE","Whisper one sweet thing in your partner's ear."],
      ["FLIRTY","What was your first 'okay, they're really attractive' moment?"],
      ["CHALLENGE","Slow dance together for one song — no talking."],
      ["QUESTION","What kind of date makes you feel most attracted to me?"],
      ["FLIRTY","What is one innocent thing I do that you find irresistible?"],
      ["CHALLENGE","Give your partner three compliments without using the words 'cute' or 'beautiful'."]
    ] ,
    25: [
      ["FLIRTY","What is the most attractive thing I do without realizing it?"],
      ["CHALLENGE","Give me your best flirtatious look for 10 seconds."],
      ["QUESTION","What outfit of mine do you secretly love?"],
      ["COMPLIMENT","Describe my smile in the most dramatic way possible."],
      ["CHALLENGE","Whisper one sweet thing in your partner's ear."],
      ["FLIRTY","What was your first 'okay, they're really attractive' moment?"],
      ["CHALLENGE","Slow dance together for one song — no talking."],
      ["QUESTION","What kind of date makes you feel most attracted to me?"],
      ["FLIRTY","What is one innocent thing I do that you find irresistible?"],
      ["CHALLENGE","Give your partner three compliments without using the words 'cute' or 'beautiful'."],
      ["QUESTION","What is something about me that instantly turns you on?"],
      ["FLIRTY","What would you do if I unexpectedly flirted with you in public?"],
      ["COMPLIMENT","Tell me the most intoxicating thing about the way I look at you."],
      ["CHALLENGE","Take turns making each other laugh while trying to look sexy."],
      ["QUESTION","What is the sexiest thing I do when I am being confident?"],
      ["FLIRTY","What kind of text from me would make your heart skip a beat?"],
      ["COMPLIMENT","What is the first thing you notice when I walk into a room?"],
      ["MEMORY","What was your favorite moment of chemistry between us so far?"],
      ["QUESTION","What kind of touch makes you feel most desired?"],
      ["FLIRTY","If we were both in a movie scene, what kind of flirtation would happen?"],
      ["CHALLENGE","Give your partner a 10-second stare without breaking eye contact."],
      ["QUESTION","What is your favorite way for me to tease you?"],
      ["COMPLIMENT","Tell me what is most attractive about how I make you feel."],
      ["MEMORY","What moment between us made you realize the chemistry was real?"],
      ["QUESTION","What kind of body language says 'I want you' to you?"],
    ],
    50: [
      ["FLIRTY","What is the most attractive thing I do without realizing it?"],
      ["CHALLENGE","Give me your best flirtatious look for 10 seconds."],
      ["QUESTION","What outfit of mine do you secretly love?"],
      ["COMPLIMENT","Describe my smile in the most dramatic way possible."],
      ["CHALLENGE","Whisper one sweet thing in your partner's ear."],
      ["FLIRTY","What was your first 'okay, they're really attractive' moment?"],
      ["CHALLENGE","Slow dance together for one song — no talking."],
      ["QUESTION","What kind of date makes you feel most attracted to me?"],
      ["FLIRTY","What is one innocent thing I do that you find irresistible?"],
      ["CHALLENGE","Give your partner three compliments without using the words 'cute' or 'beautiful'."],
      ["QUESTION","What is something about me that instantly turns you on?"],
      ["FLIRTY","What would you do if I unexpectedly flirted with you in public?"],
      ["COMPLIMENT","Tell me the most intoxicating thing about the way I look at you."],
      ["CHALLENGE","Take turns making each other laugh while trying to look sexy."],
      ["QUESTION","What is the sexiest thing I do when I am being confident?"],
      ["FLIRTY","What kind of text from me would make your heart skip a beat?"],
      ["COMPLIMENT","What is the first thing you notice when I walk into a room?"],
      ["MEMORY","What was your favorite moment of chemistry between us so far?"],
      ["QUESTION","What kind of touch makes you feel most desired?"],
      ["FLIRTY","If we were both in a movie scene, what kind of flirtation would happen?"],
      ["CHALLENGE","Give your partner a 10-second stare without breaking eye contact."],
      ["QUESTION","What is your favorite way for me to tease you?"],
      ["COMPLIMENT","Tell me what is most attractive about how I make you feel."],
      ["MEMORY","What moment between us made you realize the chemistry was real?"],
      ["QUESTION","What kind of body language says 'I want you' to you?"],
      ["FLIRTY","What kind of scene would you love for us to recreate in real life?"],
      ["CHALLENGE","Describe your partner in a way that sounds like a sensual compliment."],
      ["QUESTION","What is something you have never said aloud that you secretly like about me?"],
      ["COMPLIMENT","What is the sexiest part of my personality?"],
      ["MEMORY","When did you first know I was your type?"],
      ["QUESTION","How do you know when someone is flirting with you in a way that feels irresistible?"],
      ["FLIRTY","What turn-on would you never expect from me but secretly hope for?"],
      ["CHALLENGE","Give each other a slow look that says you are attracted but you are not moving yet."],
      ["QUESTION","What makes you feel wanted without a single word being spoken?"],
      ["COMPLIMENT","Tell me the most seductive thing about the way I smile at you."],
      ["MEMORY","What time in our relationship felt the most magnetic?"],
      ["QUESTION","What kind of physical presence makes you feel instantly turned on?"],
      ["FLIRTY","What do you think is my most irresistible feature?"],
      ["CHALLENGE","Whisper to your partner one thing you would love to do to them tonight."],
      ["QUESTION","What is the most attractive thing a person can do while being completely relaxed?"],
      ["COMPLIMENT","Say the hottest thing you can truthfully think about me."],
      ["MEMORY","What memory of us makes your pulse race a little?"],
      ["QUESTION","What is one thing I do that makes you want me closer?"],
      ["FLIRTY","What would hook you instantly if I did it in a low, playful voice?"],
      ["CHALLENGE","Take turns giving a 15-second flirt without smiling."],
    ],
  },
  spicy: {
    10 : [
      ["its spicy"]
      ["18+ · DIRTY TALK", "Look at me and tell me exactly what you want me to do to you tonight — use the filthiest words you can."],
  ["18+ · DIRTY TALK", "Describe, in detail, how you want me to talk to you while I’m inside you (or while you’re inside me)."],
  ["18+ · CHALLENGE", "Whisper three filthy things you want to do to me later… while slowly running your hand up my thigh."],
  ["18+ · QUESTION", "What dirty nickname or phrase do you secretly want me to call you (or call me) during sex?"],
  ["18+ · DIRTY TALK", "Tell me what you fantasize about me saying while I’m teasing you and refusing to let you come yet."],
  ["18+ · CHALLENGE", "Sit close, lock eyes, and describe in graphic detail how you want me to fuck you the next time we’re alone."],
  ["18+ · QUESTION", "What’s the dirtiest thing you’ve ever wanted to hear me say but were too shy to ask for?"],
  ["18+ · DIRTY TALK", "Talk to me like you’re already deep inside me (or I’m deep inside you) — describe every thrust, every sound, every filthy thought."],
  ["18+ · CHALLENGE", "Put your lips to my ear and tell me exactly how wet/hard I make you right now, using the nastiest words you know."],
  ["18+ · FLIRTY", "Describe the dirtiest text you wish I would send you in the middle of a normal day."] 
    ],

    25: [
      ["18+ · FLIRTY", "What is one romantic fantasy date you would love us to try?"],
      ["18+ · CHALLENGE", "Give your partner a slow, affectionate kiss and then pull away with a soft smile."],
      ["18+ · QUESTION", "What makes you feel most desired by your partner?"],
      ["18+ · CHALLENGE", "Take turns giving each other one full minute of undivided attention — eyes only, no phones."],
      ["18+ · FLIRTY", "Describe your ideal atmosphere for a very romantic night together."],
      ["18+ · QUESTION", "What kind of affection makes you feel closest to me?"],
      ["18+ · CHALLENGE", "Give your partner a long hug and tell them one thing you deeply appreciate about them."],
      ["18+ · FLIRTY", "What is something playful and sweet you would like us to do on a future date?"],
      ["18+ · QUESTION", "What makes a night together feel unforgettable to you?"],
      ["18+ · CHALLENGE", "Choose one and do it slowly: forehead kiss, cheek kiss, hand kiss, or long tight hug."],
      ["18+ · FLIRTY", "Whisper one romantic thing you’ve been wanting to tell me all day."],
      ["18+ · QUESTION", "When do you feel most loved and safe with me?"],
      ["18+ · CHALLENGE", "Hold your partner’s face gently and kiss them like you mean it for at least 20 seconds."],
      ["18+ · FLIRTY", "Describe the perfect slow morning in bed with me."],
      ["18+ · QUESTION", "What little romantic gesture from me melts you the most?"],
      ["18+ · CHALLENGE", "Trace your partner’s lips with your finger, then kiss them softly."],
      ["18+ · FLIRTY", "What song or playlist would make our next romantic night perfect?"],
      ["18+ · QUESTION", "What is one memory of us that still makes your heart race?"],
      ["18+ · CHALLENGE", "Give your partner a slow back hug and rest your chin on their shoulder for one full minute."],
      ["18+ · FLIRTY", "If we could escape somewhere romantic for 48 hours, where would you take me and why?"],
      ["18+ · QUESTION", "What does ‘making love’ mean to you versus just having sex?"],
      ["18+ · CHALLENGE", "Look into your partner’s eyes and tell them three things you find irresistible about them."],
      ["18+ · FLIRTY", "Describe how you want me to wake you up with kisses one morning."],
      ["18+ · QUESTION", "What makes you feel most connected to me during intimate moments?"],
      ["18+ · CHALLENGE", "Kiss your partner’s neck slowly while holding them close, then whisper something sweet."],
    ],
    50: [
      ["18+ · DIRTY TALK", "Tell me exactly how you want me to talk to you while I’m inside you."],
      ["18+ · CHALLENGE", "Whisper the dirtiest thing you’ve ever thought about doing to me… right in my ear."],
      ["18+ · QUESTION", "What is the filthiest fantasy you’ve had about us that you’ve never said out loud?"],
      ["18+ · DIRTY TALK", "Describe in detail how you want me to use my mouth on you tonight."],
      ["18+ · CHALLENGE", "Bite your partner’s lower lip gently, then tell them something filthy while looking them in the eyes."],
      ["18+ · FLIRTY", "Tell me what you want me to do to you the second we get home."],
      ["18+ · QUESTION", "Where do you most want my hands right now, and what should they be doing?"],
      ["18+ · DIRTY TALK", "Say the word ‘fuck’ in the sexiest way you can while looking at me."],
      ["18+ · CHALLENGE", "Press yourself against your partner and slowly grind while whispering what you want next."],
      ["18+ · QUESTION", "What dirty nickname do you secretly want me to call you in bed?"],
      ["18+ · DIRTY TALK", "Tell me how wet/hard you are right now and what caused it."],
      ["18+ · CHALLENGE", "Kiss down your partner’s neck and collarbone while saying one filthy sentence between each kiss."],
      ["18+ · FLIRTY", "Describe the exact position you want me to put you in later."],
      ["18+ · QUESTION", "What is one thing I could say during sex that would make you lose control?"],
      ["18+ · DIRTY TALK", "Tell me how you want me to fuck you — slow and deep, or hard and rough?"],
      ["18+ · CHALLENGE", "Take your partner’s hand and guide it somewhere private while locking eyes with them."],
      ["18+ · QUESTION", "What part of my body do you want to taste the most right now?"],
      ["18+ · DIRTY TALK", "Whisper what you’re going to do to me the moment we’re alone."],
      ["18+ · CHALLENGE", "Give your partner a slow, deep kiss with tongue, then pull back and say something filthy."],
      ["18+ · FLIRTY", "Tell me the dirtiest thing you’ve ever done (or wanted to do) with me."],
      ["18+ · QUESTION", "How do you want me to wake you up with my mouth one morning?"],
      ["18+ · DIRTY TALK", "Describe how you want me to tease you until you’re begging."],
      ["18+ · CHALLENGE", "Put your lips against your partner’s ear and tell them exactly how you’re going to make them come."],
      ["18+ · QUESTION", "What is your favorite dirty thing I do with my hands?"],
      ["18+ · DIRTY TALK", "Say out loud how much you want me inside you right now."],
      ["18+ · CHALLENGE", "Slowly run your hands under your partner’s clothes (or over them) while talking dirty."],
      ["18+ · FLIRTY", "Tell me which fantasy of ours you want to act out next."],
      ["18+ · QUESTION", "What sound do you make when you’re closest to coming, and what pushes you there?"],
      ["18+ · DIRTY TALK", "Describe in detail how you want me to fuck your mouth."],
      ["18+ · CHALLENGE", "Pin your partner against a wall or couch and kiss them hard while saying something filthy."],
      ["18+ · QUESTION", "Where do you want me to finish, and how do you want me to tell you I’m about to?"],
      ["18+ · DIRTY TALK", "Tell me how badly you want me to bend you over right now."],
      ["18+ · CHALLENGE", "Trace your fingers along your partner’s inner thigh and describe what you’re going to do next."],
      ["18+ · FLIRTY", "What is the nastiest compliment you can give my body right now?"],
      ["18+ · QUESTION", "What dirty talk from me makes you the wettest/hardest?"],
      ["18+ · DIRTY TALK", "Say the filthiest sentence you can think of about what you want me to do to you tonight."],
      ["18+ · CHALLENGE", "Kiss your partner’s stomach (or lower) and keep going until they stop you or let you continue."],
      ["18+ · QUESTION", "How do you want me to look at you while I’m between your legs?"],
      ["18+ · DIRTY TALK", "Tell me exactly how you want me to use my fingers on you."],
      ["18+ · CHALLENGE", "Hold eye contact and slowly describe the last time you came thinking about me."],
      ["18+ · FLIRTY", "What is one thing you’ve always wanted me to say while I’m deep inside you?"],
      ["18+ · QUESTION", "Do you prefer when I talk dirty the whole time, or when I go quiet and just fuck you hard?"],
      ["18+ · DIRTY TALK", "Whisper how much you love the way I feel when I’m inside you."],
      ["18+ · CHALLENGE", "Bite your partner’s neck softly and tell them they’re mine for the night."],
      ["18+ · QUESTION", "What is the most intense orgasm you’ve had with me, and what made it that good?"],
      ["18+ · DIRTY TALK", "Tell me how you want me to ruin you tonight."],
      ["18+ · CHALLENGE", "Pull your partner close by the hips and grind against them while talking pure filth."],
      ["18+ · FLIRTY", "Describe the exact moment you knew you wanted to fuck me."],
      ["18+ · QUESTION", "What is one boundary you want to push with me next time we’re alone?"],
      ["18+ · DIRTY TALK", "Look at me and say the dirtiest thing you’ve been holding back."],
    ],
  },
  playful: {
    10 : [

      [" Lets play some playfull game "]
      ["QUESTION","What is one silly thing I do that makes you laugh?"],
      ["CHALLENGE","Give me your best playful dare — do it now for 10 seconds."],
      ["QUESTION","If our relationship had a mascot, what would it be?"],
      ["FLIRTY","Tell me one thing you find adorably mischievous about me."]
    ],
    25: [
      ["QUESTION","What is one silly thing I do that makes you laugh?"],
      ["CHALLENGE","Give me your best playful dare — do it now for 10 seconds."],
      ["QUESTION","If our relationship had a mascot, what would it be?"],
      ["FLIRTY","Tell me one thing you find adorably mischievous about me."],
      ["QUESTION","What would our perfect chaotic weekend look like?"],
      ["CHALLENGE","Try to make the other person laugh without speaking."],
      ["QUESTION","What silly inside joke should we keep forever?"],
      ["FLIRTY","Would you rather be the cute one or the chaotic one in our relationship?"],
      ["MEMORY","What is the funniest thing we have done together so far?"],
      ["QUESTION","What would be your most ridiculous fake job title for us as a couple?"],
      ["CHALLENGE","Give your partner a silly challenge and make them do it."],
      ["QUESTION","What is the most unserious way you think we could spend a date night?"],
      ["FLIRTY","What is the cutest thing about me when I am being goofy?"],
      ["MEMORY","What moment made you laugh hardest with me?"],
      ["QUESTION","What prank would be playful enough to be funny without being mean?"],
      ["CHALLENGE","Pretend to be your partner's first crush and flirt in the most dramatic way."],
      ["QUESTION","If we had to have a song for our relationship, what would it sound like?"],
      ["FLIRTY","Tell me the most mischievous thing you have ever wanted to do with me."],
      ["MEMORY","What is the funniest small argument we have ever had?"],
      ["QUESTION","What kind of playful competition would you want to win against me?"],
      ["CHALLENGE","Do your best dramatic movie kiss scene impression for 10 seconds."],
      ["QUESTION","What is the cutest title you would give our dynamic?"],
      ["FLIRTY","What is one thing you find irresistibly funny about me?"],
      ["MEMORY","What is the most chaotic but adorable moment we have shared?"],
      ["QUESTION","What would be your ultimate silly challenge for us as a couple?"],
    ],
    50: [
      ["QUESTION","What is one silly thing I do that makes you laugh?"],
      ["CHALLENGE","Give me your best playful dare — do it now for 10 seconds."],
      ["QUESTION","If our relationship had a mascot, what would it be?"],
      ["FLIRTY","Tell me one thing you find adorably mischievous about me."],
      ["QUESTION","What would our perfect chaotic weekend look like?"],
      ["CHALLENGE","Try to make the other person laugh without speaking."],
      ["QUESTION","What silly inside joke should we keep forever?"],
      ["FLIRTY","Would you rather be the cute one or the chaotic one in our relationship?"],
      ["MEMORY","What is the funniest thing we have done together so far?"],
      ["QUESTION","What would be your most ridiculous fake job title for us as a couple?"],
      ["CHALLENGE","Give your partner a silly challenge and make them do it."],
      ["QUESTION","What is the most unserious way you think we could spend a date night?"],
      ["FLIRTY","What is the cutest thing about me when I am being goofy?"],
      ["MEMORY","What moment made you laugh hardest with me?"],
      ["QUESTION","What prank would be playful enough to be funny without being mean?"],
      ["CHALLENGE","Pretend to be your partner's first crush and flirt in the most dramatic way."],
      ["QUESTION","If we had to have a song for our relationship, what would it sound like?"],
      ["FLIRTY","Tell me the most mischievous thing you have ever wanted to do with me."],
      ["MEMORY","What is the funniest small argument we have ever had?"],
      ["QUESTION","What kind of playful competition would you want to win against me?"],
      ["CHALLENGE","Do your best dramatic movie kiss scene impression for 10 seconds."],
      ["QUESTION","What is the cutest title you would give our dynamic?"],
      ["FLIRTY","What is one thing you find irresistibly funny about me?"],
      ["MEMORY","What is the most chaotic but adorable moment we have shared?"],
      ["QUESTION","What would be your ultimate silly challenge for us as a couple?"],
      ["CHALLENGE","Take turns making the other person laugh with the worst possible pickup line."],
      ["QUESTION","If we had to create a secret couple handshake, what would it be?"],
      ["FLIRTY","What would you do if I told you I had a hidden silly side?"],
      ["MEMORY","What is a ridiculous little thing we have done that still makes you grin?"],
      ["QUESTION","What is your most dramatic possible answer to being asked, 'How do you know you are in love?'"],
      ["CHALLENGE","Create the funniest fake award you would give your partner tonight."],
      ["QUESTION","What would our relationship's mascot sound like?"],
      ["FLIRTY","Tell me something silly you would absolutely never tell anyone else about us."],
      ["MEMORY","What was the funniest misunderstanding between us?"],
      ["QUESTION","If we had a family game night, what would be our signature move?"],
      ["CHALLENGE","Pick a ridiculous duo name for yourselves and explain it."],
      ["QUESTION","What is the most absurd idea for a date you would secretly love to try?"],
      ["FLIRTY","Which one of us would win at being the most charming troublemaker?"],
      ["MEMORY","What moment made you laugh so hard you almost cried?"],
      ["QUESTION","What silly habit of ours is actually kind of adorable?"],
      ["CHALLENGE","Do your best brave face while trying to say one affectionate sentence without giggling."],
      ["QUESTION","What is a silly little ritual we should start to make life more fun?"],
      ["FLIRTY","Tell me the weirdest compliment you could imagine giving me and why it would work."],
      ["MEMORY","When have you felt the most childlike joy with me?"],
      ["QUESTION","If our relationship had a theme song, what would the chorus say?"],
      ["CHALLENGE","Give your partner a fake serious business proposal to be a couple and make it hilarious."],
    ],
  },
  cozy: {
10 : [
  ["cozy day its funny day"]
      ["QUESTION","Describe your perfect cozy evening with me."],
      ["MEMORY","What small habit of mine makes you feel at home?"],
      ["QUESTION","What comfort food would you cook for us on a rainy night?"],
],
    25: [
      ["QUESTION","Describe your perfect cozy evening with me."],
      ["MEMORY","What small habit of mine makes you feel at home?"],
      ["QUESTION","What comfort food would you cook for us on a rainy night?"],
      ["CHALLENGE","Slowly share one memory you love about us while holding hands."],
      ["QUESTION","What is something that makes our time together feel calm and safe?"],
      ["MEMORY","What has become your favorite restful moment with me?"],
      ["QUESTION","What is the ideal soundtrack for a quiet night in with you?"],
      ["CHALLENGE","Tell each other one thing that makes you feel grounded around the other person."],
      ["QUESTION","What kind of atmosphere makes you feel most comfortable and open?"],
      ["MEMORY","What small detail from our time together feels warm and comforting?"],
      ["QUESTION","What is a cozy ritual you would love to turn into a tradition?"],
      ["CHALLENGE","Sit together without talking for 20 seconds and notice what feels good."],
      ["QUESTION","What do you love most about slowing down with me?"],
      ["MEMORY","When did you feel the most content simply being near me?"],
      ["QUESTION","What turn of phrase or vibe makes you feel instantly at ease with someone?"],
      ["CHALLENGE","Give a slow, comfortable compliment about the way the other person makes you feel."],
      ["QUESTION","What would your ideal lazy Sunday with me include?"],
      ["MEMORY","What small thing from our relationship makes you feel at peace?"],
      ["QUESTION","What kind of touch or reassurance helps you feel most relaxed?"],
      ["CHALLENGE","Tell your partner one thing you appreciate about their calm energy."],
      ["QUESTION","What is one part of home you want to build with me?"],
      ["MEMORY","Which moment with me feels the most like warmth and safety?"],
      ["QUESTION","What would a perfect cozy date in winter or rainy weather look like for us?"],
      ["CHALLENGE","Take turns saying one sentence that describes how you feel when you are with the other person."],
      ["QUESTION","What is a small act of love that always feels comforting to receive?"],
    ],
    50: [
      ["QUESTION","Describe your perfect cozy evening with me."],
      ["MEMORY","What small habit of mine makes you feel at home?"],
      ["QUESTION","What comfort food would you cook for us on a rainy night?"],
      ["CHALLENGE","Slowly share one memory you love about us while holding hands."],
      ["QUESTION","What is something that makes our time together feel calm and safe?"],
      ["MEMORY","What has become your favorite restful moment with me?"],
      ["QUESTION","What is the ideal soundtrack for a quiet night in with you?"],
      ["CHALLENGE","Tell each other one thing that makes you feel grounded around the other person."],
      ["QUESTION","What kind of atmosphere makes you feel most comfortable and open?"],
      ["MEMORY","What small detail from our time together feels warm and comforting?"],
      ["QUESTION","What is a cozy ritual you would love to turn into a tradition?"],
      ["CHALLENGE","Sit together without talking for 20 seconds and notice what feels good."],
      ["QUESTION","What do you love most about slowing down with me?"],
      ["MEMORY","When did you feel the most content simply being near me?"],
      ["QUESTION","What turn of phrase or vibe makes you feel instantly at ease with someone?"],
      ["CHALLENGE","Give a slow, comfortable compliment about the way the other person makes you feel."],
      ["QUESTION","What would your ideal lazy Sunday with me include?"],
      ["MEMORY","What small thing from our relationship makes you feel at peace?"],
      ["QUESTION","What kind of touch or reassurance helps you feel most relaxed?"],
      ["CHALLENGE","Tell your partner one thing you appreciate about their calm energy."],
      ["QUESTION","What is one part of home you want to build with me?"],
      ["MEMORY","Which moment with me feels the most like warmth and safety?"],
      ["QUESTION","What would a perfect cozy date in winter or rainy weather look like for us?"],
      ["CHALLENGE","Take turns saying one sentence that describes how you feel when you are with the other person."],
      ["QUESTION","What is a small act of love that always feels comforting to receive?"],
      ["MEMORY","What is a quiet memory of us that you want to keep forever?"],
      ["QUESTION","What kind of setting makes it easiest for you to relax and be fully present?"],
      ["CHALLENGE","Describe the exact kind of attention that helps you feel calm and supported."],
      ["QUESTION","What is the coziest version of a night in with you?"],
      ["MEMORY","When did I make you feel more at ease than you expected?"],
      ["QUESTION","What part of our relationship feels like a safe place for you?"],
      ["CHALLENGE","Tell your partner one thing that helps them feel emotionally held."],
      ["QUESTION","What is something comforting you want more of in our daily life?"],
      ["MEMORY","What moment with me made you feel especially loved without a single grand gesture?"],
      ["QUESTION","What would a weekend of maximum rest and closeness look like for us?"],
      ["CHALLENGE","Hold hands and say one nice thing you are grateful for in the relationship."],
      ["QUESTION","What is a gentle way you like to be cared for?"],
      ["MEMORY","What is a memory that feels like a soft blanket to you?"],
      ["QUESTION","What makes a moment with you feel emotionally restful to me?"],
      ["CHALLENGE","Take turns naming one thing that makes the other person feel safe."],
      ["QUESTION","What is one little habit we could add to make our days feel sweeter?"],
      ["MEMORY","What ordinary evening with us feels like your favorite place to be?"],
      ["QUESTION","What is the environmental comfort that makes you feel most at home?"],
      ["CHALLENGE","Give a budget-free answer to what would make this next date feel perfect."],
      ["QUESTION","What is something soothing that you wish we made time for more often?"],
      ["MEMORY","When has being with me felt like a deep exhale?"],
      ["QUESTION","What do you most want me to understand about how you feel comfortable and cared for?"],
    ],
  },
  intimate: {
     10: [
       ["very deep bro ","when you feel horny?"],
      ["DEEP","When do you feel most seen by me?"],
      ["QUESTION","What is a small vulnerability you wish I noticed more often?"],
      ["FUTURE","What quiet ritual could we add to strengthen our connection?"],
      ["CHALLENGE","Sit back-to-back and share one thing you appreciate about the other."]
    ],
    25: [
      ["DEEP","When do you feel most seen by me?"],
      ["QUESTION","What is a small vulnerability you wish I noticed more often?"],
      ["FUTURE","What quiet ritual could we add to strengthen our connection?"],
      ["CHALLENGE","Sit back-to-back and share one thing you appreciate about the other."],
      ["QUESTION","What is one way I make you feel emotionally close to me?"],
      ["DEEP","What does intimacy feel like to you when it is healthy and safe?"],
      ["MEMORY","What moment has felt the most intimate to you so far?"],
      ["QUESTION","What is something you want to feel more comfortable sharing with me?"],
      ["FUTURE","What would an even deeper version of our intimacy look like?"],
      ["CHALLENGE","Tell each other one thing you want to understand more deeply about the other person."],
      ["QUESTION","What is a small way you want to be cherished more often?"],
      ["DEEP","When do you feel most emotionally available with someone?"],
      ["MEMORY","What is a memory of us that still feels tender?"],
      ["QUESTION","What helps you feel safe enough to be fully honest?"],
      ["FUTURE","What kind of daily ritual could help us feel closer?"],
      ["CHALLENGE","Hold hands and say one thing you want to protect about your connection."],
      ["QUESTION","What is a part of yourself you trust me with more than most people?"],
      ["DEEP","What is a gesture that makes you feel truly loved emotionally?"],
      ["MEMORY","When did you feel most connected to me without saying much?"],
      ["QUESTION","What do you wish you heard more often in a relationship?"],
      ["FUTURE","What does a deeply intentional relationship feel like to you?"],
      ["CHALLENGE","Take turns describing a moment that made you feel cherished."],
      ["QUESTION","What is something you want more of from us in private and in public?"],
      ["DEEP","What would make you feel more seen, safe, and relaxed with me?"],
      ["MEMORY","What has already made you feel deeply connected to me?"],
      ["QUESTION","What is one little thing you want us to keep doing because it makes intimacy easier?"],
    ],
    50: [
      ["DEEP","When do you feel most seen by me?"],
      ["QUESTION","What is a small vulnerability you wish I noticed more often?"],
      ["FUTURE","What quiet ritual could we add to strengthen our connection?"],
      ["CHALLENGE","Sit back-to-back and share one thing you appreciate about the other."],
      ["QUESTION","What is one way I make you feel emotionally close to me?"],
      ["DEEP","What does intimacy feel like to you when it is healthy and safe?"],
      ["MEMORY","What moment has felt the most intimate to you so far?"],
      ["QUESTION","What is something you want to feel more comfortable sharing with me?"],
      ["FUTURE","What would an even deeper version of our intimacy look like?"],
      ["CHALLENGE","Tell each other one thing you want to understand more deeply about the other person."],
      ["QUESTION","What is a small way you want to be cherished more often?"],
      ["DEEP","When do you feel most emotionally available with someone?"],
      ["MEMORY","What is a memory of us that still feels tender?"],
      ["QUESTION","What helps you feel safe enough to be fully honest?"],
      ["FUTURE","What kind of daily ritual could help us feel closer?"],
      ["CHALLENGE","Hold hands and say one thing you want to protect about your connection."],
      ["QUESTION","What is a part of yourself you trust me with more than most people?"],
      ["DEEP","What is a gesture that makes you feel truly loved emotionally?"],
      ["MEMORY","When did you feel most connected to me without saying much?"],
      ["QUESTION","What do you wish you heard more often in a relationship?"],
      ["FUTURE","What does a deeply intentional relationship feel like to you?"],
      ["CHALLENGE","Take turns describing a moment that made you feel cherished."],
      ["QUESTION","What is something you want more of from us in private and in public?"],
      ["DEEP","What would make you feel more seen, safe, and relaxed with me?"],
      ["MEMORY","What has already made you feel deeply connected to me?"],
      ["QUESTION","What is one little thing you want us to keep doing because it makes intimacy easier?"],
      ["FUTURE","What does a grounded, intimate future with me include?"],
      ["CHALLENGE","Tell your partner one way they have made you feel emotionally held."],
      ["QUESTION","What is a conversation that has made you feel more connected recently?"],
      ["DEEP","What does being emotionally close look like to you in practice?"],
      ["MEMORY","What part of our relationship feels most precious to you?"],
      ["QUESTION","What helps you trust someone more deeply?"],
      ["FUTURE","What would a deeper level of closeness allow us to do together?"],
      ["CHALLENGE","Say one thing you are learning to be more honest about with your partner."],
      ["QUESTION","What is something you want us to protect and nurture together?"],
      ["DEEP","When do you feel most emotionally relaxed around me?"],
      ["MEMORY","What has become one of your favorite private moments with us?"],
      ["QUESTION","What is a small gesture that makes you feel deeply cared for?"],
      ["FUTURE","What quiet practice would deepen intimacy for both of us?"],
      ["CHALLENGE","Take turns saying what being emotionally close to the other person means."],
      ["QUESTION","What is something you have not said out loud yet but wish you could?"],
      ["DEEP","What does tenderness mean to you in a relationship?"],
      ["MEMORY","What memory makes you feel the most at home with me?"],
      ["QUESTION","What part of being with me lets you soften and be honest?"],
      ["FUTURE","What would make you feel like we are building something beautiful, secure, and lasting?"],
      ["CHALLENGE","Give each other a 15-second pause and then tell the other person what you noticed."],
      ["QUESTION","What is something about us that you want to keep protected through hard seasons?"],
      ["DEEP","What helps you feel both seen and safe in a romantic dynamic?"],
      ["MEMORY","Which moment with me feels like the most intimate version of us so far?"],
      ["QUESTION","What do you want me to better understand about how you feel close to people?"],
    ],
  },
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
    title: 'Confident Connection',
    category: 'For Him',
    subtitle: 'Build confidence & presence',
    chapters: 8,
    time: '~25 min',
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
    title: 'Better Communication',
    category: 'For Him',
    subtitle: 'Listen & express clearly',
    chapters: 7,
    time: '~22 min',
    summary: 'Learn how to listen, express yourself, and handle difficult conversations.',
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
