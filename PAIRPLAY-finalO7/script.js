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
      ["QUESTION","What is one tiny thing I do that always makes you smile?"],
      ["COMPLIMENT","Give me a compliment you have never said out loud."],
      ["MEMORY","What was your favorite little moment from our first few dates?"],
      ["QUESTION","What nickname would you give our relationship?"],
      ["CHALLENGE","Hold hands for 20 seconds without saying anything."],
      ["QUESTION","What song instantly makes you think of me?"],
      ["COMPLIMENT","Tell me one thing you think I am really good at."],
      ["MEMORY","What is a silly memory of us that you secretly love?"],
      ["QUESTION","What is your ideal lazy Sunday with me?"],
      ["CHALLENGE","Look at each other and try not to smile for 15 seconds."]
    ]
  },
  romantic: {
    title: "Romantic",
    icon: "❤️",
    desc: "The butterflies, the memories and the reasons you chose each other.",
    intensity: "★★☆☆☆",
    color: "#f1c8da",
    questions: [
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
      ["MEMORY","What was your favorite moment from the last month together?"]
    ]
  },
  deep: {
    title: "Deep",
    icon: "🧠",
    desc: "Questions that slow the night down and open the real conversations.",
    intensity: "★★★☆☆",
    color: "#dcd3f1",
    questions: [
      ["DEEP","What is something you wish I understood better about you?"],
      ["DEEP","What are you most afraid of losing in life?"],
      ["FUTURE","What kind of life would make you feel genuinely fulfilled?"],
      ["DEEP","When do you feel safest with me?"],
      ["DEEP","What is something you are still learning about yourself?"],
      ["FUTURE","What do you hope our relationship feels like five years from now?"],
      ["DEEP","What is one thing you want us to get better at together?"],
      ["DEEP","What is something you rarely tell people but want me to know?"],
      ["MEMORY","Which moment changed the way you see our relationship?"],
      ["DEEP","When you are having a hard day, what do you need from me most?"]
    ]
  },
 
   flirtyii: {
    title: "Flirty",
    icon: "🔥",
    desc: "Playful teasing, confidence and challenges that turn up the energy.",
    intensity: "★★★★☆",
    color: "#f4c2ca",
    questions: [
      ["FLIRTY","What is the most attractive thing I do without realizing it?"],
      ["CHALLENGE","Give me your best flirtatious look for 10 seconds."],
      ["QUESTION","What outfit of mine do you secretly love?"],
      ["COMPLIMENT","Describe my smile in the most dramatic way possible."],
      ["CHALLENGE","Whisper one sweet thing in your partner's ear."],
      ["FLIRTY","What was your first 'okay, they're really attractive' moment?"],
      ["CHALLENGE","Slow dance together for one song — no talking."],
      ["QUESTION","What kind of date makes you feel most attracted to me?"],
      ["FLIRTY","What is one innocent thing I do that you find irresistible?"],
      ["CHALLENGE","Give your partner three compliments without using the words 'cute' or 'beautiful'."]
    ]
  },
  spicy: {
    title: "Spicy 18+",
    icon: "🌶️",
    desc: "For consenting adults who want a bolder, more intimate date night.",
    intensity: "★★★★★",
    color: "#e7b9bf",
    questions: [
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

     /* ["18+ · FLIRTY","What is one romantic fantasy date you would love us to try?"],
      ["18+ · CHALLENGE","Give your partner a slow, affectionate kiss and then pull away with a smile."],
      ["18+ · QUESTION","What makes you feel most desired by your partner?"],
      ["18+ · CHALLENGE","Take turns giving each other one minute of your full attention — no phones."],
      ["18+ · FLIRTY","Describe your ideal atmosphere for a very romantic night together."],
      ["18+ · QUESTION","What kind of affection makes you feel closest to me?"],
      ["18+ · CHALLENGE","Give your partner a long hug and tell them one thing you appreciate about them."],
      ["18+ · FLIRTY","What is something playful you would like us to do on a future date?"],
      ["18+ · QUESTION","What makes a night together feel unforgettable to you?"],
      ["18+ · CHALLENGE","Choose one: forehead kiss, cheek kiss, hand kiss, or long hug."] */
    ]
  },
  playful: {
    title: "Playful",
    icon: "😜",
    desc: "Light teasing, silly prompts and easy dares for a playful evening.",
    intensity: "★★☆☆☆",
    color: "#ffd1e6",
    questions: [
      ["QUESTION","What is one silly thing I do that makes you laugh?"],
      ["CHALLENGE","Give me your best playful dare — do it now for 10 seconds."],
      ["QUESTION","If our relationship had a mascot, what would it be?"],
      ["FLIRTY","Tell me one thing you find adorably mischievous about me."]
    ]
  },
  cozy: {
    title: "Cozy",
    icon: "🕯️",
    desc: "Slow, warm prompts for comfortable closeness and easy intimacy.",
    intensity: "★★☆☆☆",
    color: "#efe0de",
    questions: [
      ["QUESTION","Describe your perfect cozy evening with me."],
      ["MEMORY","What small habit of mine makes you feel at home?"],
      ["QUESTION","What comfort food would you cook for us on a rainy night?"],
      ["CHALLENGE","Slowly share one memory you love about us while holding hands."]
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

  const pool = moods[selectedMood].questions;
  currentCards = [];
  while (currentCards.length < selectedLength) {
    currentCards = [...currentCards, ...shuffle(pool)];
  }
  currentCards = currentCards.slice(0, selectedLength);
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
