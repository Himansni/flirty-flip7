// ========================================
// FLIRTYFLIP ACADEMY PUBLIC COURSE CATALOG
// Edit public titles, descriptions, outcomes, module names and card artwork tokens here.
// Never place paid lesson bodies, private media URLs, prices or server credentials in this file.
// Authoritative pricing, entitlements and lesson content belong in Supabase and the Vercel API.
// ========================================
(function configureAcademyCatalog(global) {
  "use strict";

  const academyConfig = {
    brand: "FlirtyFlip Academy",
    supportEmail: "craftares.business@gmail.com",
    audiences: [
      { id: "for-him", label: "For Him" },
      { id: "for-her", label: "For Her" },
      { id: "for-couples", label: "For Couples" }
    ],
    legalLinks: {
      privacy: "/support?section=privacy",
      terms: "/support?section=terms",
      refund: "/support?section=refund",
      contact: "/support?section=contact"
    },
    courses: {
      "confident-connection": {
        slug: "confident-connection",
        title: "Confident Connection",
        subtitle: "Build confidence and grounded presence",
        audience: "for-him",
        badge: "Foundations",
        accent: "#d6ad60",
        monogram: "CC",
        description: "A consent-first learning path focused on presence, attention, communication and comfortable connection.",
        duration: "Approximately 25 minutes",
        lessonCount: 8,
        chapterOneFree: false,
        priceMinor: null,
        currency: "INR",
        checkoutEnabled: false,
        outcomes: [
          "Practice grounded presence instead of performing confidence.",
          "Notice emotional signals through words, tone and body language.",
          "Ask clearer questions and respond with more attention.",
          "Build comfort through steady, low-pressure connection."
        ],
        benefits: [
          "Short lessons designed for self-paced reflection.",
          "Consent and personal boundaries included throughout.",
          "Practical prompts that can support respectful conversation."
        ],
        modules: [
          {
            id: "foundations",
            title: "Foundations",
            lessons: [
              { id: "introduction", title: "Introduction", preview: "How presence, attention and self-trust shape connection." },
              { id: "presence-confidence", title: "Presence and confidence", preview: "A grounded alternative to performing confidence." },
              { id: "reading-emotions", title: "Reading emotions", preview: "Notice words, tone and non-verbal signals without assuming." }
            ]
          },
          {
            id: "communication-practice",
            title: "Communication and practice",
            lessons: [
              { id: "asking-better-questions", title: "Asking better questions", preview: "Invite honest conversation without pressure." },
              { id: "practical-techniques", title: "Practical techniques", preview: "Apply attention and communication in everyday moments." },
              { id: "building-comfort", title: "Building comfort", preview: "Use consistency and clear boundaries to reduce pressure." },
              { id: "practice", title: "Practice", preview: "Repeat the core ideas in low-stakes situations." },
              { id: "final-challenge", title: "Final reflection", preview: "Create a respectful personal practice to continue learning." }
            ]
          }
        ],
        faq: [
          { question: "Is this course for adults only?", answer: "Yes. FlirtyFlip Academy is intended for adults aged 18 and over." },
          { question: "Does the course replace professional advice?", answer: "No. It is educational content and is not medical, therapeutic or professional advice." },
          { question: "When will enrollment open?", answer: "Enrollment remains unavailable until the real price, lesson content and payment configuration are supplied." }
        ],
        related: ["better-communication", "art-of-romance"]
      },
      "better-communication": {
        slug: "better-communication",
        title: "Better Communication",
        subtitle: "Listen and express yourself more clearly",
        audience: "for-him",
        badge: "Communication",
        accent: "#d69a60",
        monogram: "BC",
        description: "A focused course about attentive listening, clear requests and steadier difficult conversations.",
        duration: "Approximately 22 minutes",
        lessonCount: 7,
        chapterOneFree: false,
        priceMinor: null,
        currency: "INR",
        checkoutEnabled: false,
        outcomes: [
          "Listen without preparing a defensive response.",
          "Express needs clearly and without accusation.",
          "Handle difficult conversations with more steadiness."
        ],
        benefits: [
          "Compact lessons for individual reflection.",
          "Conversation patterns framed around mutual respect.",
          "Practical exercises without guaranteed-outcome claims."
        ],
        modules: [
          {
            id: "communication-core",
            title: "Communication foundations",
            lessons: [
              { id: "intro", title: "Introduction", preview: "Set expectations for respectful communication practice." },
              { id: "listening", title: "Listening", preview: "Listen for meaning before preparing a reply." },
              { id: "non-defensive-speech", title: "Non-defensive speech", preview: "Express needs without accusation or pressure." },
              { id: "asking-vs-accusing", title: "Asking versus accusing", preview: "Turn assumptions into clearer, answerable questions." }
            ]
          },
          {
            id: "communication-practice",
            title: "Practice",
            lessons: [
              { id: "practical-exercises", title: "Practical exercises", preview: "Try short, low-pressure communication exercises." },
              { id: "practice", title: "Reflection practice", preview: "Notice what helps both people feel heard." },
              { id: "final-challenge", title: "Final reflection", preview: "Choose one communication habit to keep practicing." }
            ]
          }
        ],
        faq: [
          { question: "Is this therapy?", answer: "No. This is general educational content and does not replace qualified professional support." },
          { question: "Can I browse before signing in?", answer: "Yes. Course descriptions and curriculum previews are public; purchasing and paid lessons require an account." },
          { question: "Is a price available?", answer: "Not yet. Checkout stays disabled until the real price is configured server-side." }
        ],
        related: ["confident-connection", "art-of-romance"]
      },
      "art-of-romance": {
        slug: "art-of-romance",
        title: "The Art of Romance",
        subtitle: "Create thoughtful romantic moments",
        audience: "for-him",
        badge: "Romance",
        accent: "#d6606d",
        monogram: "AR",
        description: "A practical course about attention, thoughtful rituals and romantic moments grounded in your partner's preferences.",
        duration: "Approximately 25 minutes",
        lessonCount: 8,
        chapterOneFree: false,
        priceMinor: null,
        currency: "INR",
        checkoutEnabled: false,
        outcomes: [
          "Create small rituals that make everyday connection feel intentional.",
          "Choose thoughtful gestures that carry personal meaning.",
          "Design date nights around attention and connection."
        ],
        benefits: [
          "Ideas centered on attention rather than performance.",
          "Respect for individual preferences and boundaries.",
          "Short lessons designed to be revisited at your pace."
        ],
        modules: [
          {
            id: "romance-foundations",
            title: "Romance foundations",
            lessons: [
              { id: "intro", title: "Introduction", preview: "Define romance through attention and personal meaning." },
              { id: "small-rituals", title: "Small rituals", preview: "Create repeatable moments of care in everyday life." },
              { id: "meaningful-gifts", title: "Gifts that mean more", preview: "Choose gestures based on what your partner values." },
              { id: "date-design", title: "Date design", preview: "Plan around comfort, attention and shared preferences." }
            ]
          },
          {
            id: "romance-practice",
            title: "Connection practice",
            lessons: [
              { id: "connection-techniques", title: "Connection techniques", preview: "Use small moments to stay attentive and responsive." },
              { id: "practice", title: "Practice", preview: "Try a thoughtful action and notice the response." },
              { id: "final-challenge", title: "Final reflection", preview: "Plan one personal, low-pressure romantic moment." },
              { id: "wrap-up", title: "Wrap-up", preview: "Review the principles and choose what to continue." }
            ]
          }
        ],
        faq: [
          { question: "Does this promise a relationship outcome?", answer: "No. The course provides educational ideas without promising a particular result." },
          { question: "Are boundaries discussed?", answer: "Yes. Comfort, communication, consent and personal preferences remain central." },
          { question: "Can I enroll now?", answer: "Not yet. Enrollment will open only after real pricing and secure payment configuration are completed." }
        ],
        related: ["confident-connection", "better-communication"]
      }
    }
  };

  global.FLIRTYFLIP_ACADEMY = Object.freeze(academyConfig);
})(window);
