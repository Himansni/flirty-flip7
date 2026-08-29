// ========================================
// FLIRTYFLIP GAME TURN RESOLVER
// Converts optional in-session nicknames and card metadata into inclusive turn labels.
// Edit shared/challenge recognition here; never add account, entitlement or backend behavior.
// ========================================
(function configureGameTurns(global) {
  "use strict";

  const MAX_NAME_LENGTH = 24;

  function sanitizeName(value) {
    return String(value ?? "")
      .replace(/[\u0000-\u001f\u007f]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, MAX_NAME_LENGTH);
  }

  function createPlayers(yourName = "", partnerName = "") {
    return {
      yourName: sanitizeName(yourName),
      partnerName: sanitizeName(partnerName)
    };
  }

  function normalizeType(card) {
    return String(Array.isArray(card) ? card[0] : "")
      .toUpperCase()
      .replace(/[^A-Z ]/g, "")
      .trim();
  }

  function isChallengeCard(card) {
    return normalizeType(card).startsWith("CHALLENGE");
  }

  function isSharedPrompt(card) {
    if (!Array.isArray(card) || isChallengeCard(card)) return false;
    const type = normalizeType(card);
    if (/^(TOGETHER|BOTH|SHARED)/.test(type)) return true;
    if (!type.startsWith("DO")) return false;
    const prompt = String(card[1] || "");
    return /\b(take turns|both of you|each (?:answer|choose|name|say|share|write)|each other|at the same time|together|hold hands|hold each other|trade one|sit knee to knee)\b/i.test(prompt);
  }

  function isGroupCard(card) {
    return isChallengeCard(card) || isSharedPrompt(card);
  }

  function getAlternatingTurnIndex(cards, currentIndex) {
    const safeCards = Array.isArray(cards) ? cards : [];
    let turnIndex = -1;
    for (let index = 0; index <= currentIndex && index < safeCards.length; index += 1) {
      if (!isGroupCard(safeCards[index])) turnIndex += 1;
    }
    return Math.max(0, turnIndex);
  }

  function resolveTurn({ cards = [], index = 0, players = {} } = {}) {
    const safeIndex = Math.max(0, Math.min(Number(index) || 0, Math.max(0, cards.length - 1)));
    const card = cards[safeIndex] || null;
    const names = createPlayers(players.yourName, players.partnerName);

    if (isChallengeCard(card)) {
      return { kind: "challenge", key: "team-challenge", label: "Team Challenge" };
    }
    if (isSharedPrompt(card)) {
      const label = normalizeType(card).startsWith("DO") ? "Both of You" : "Answer Together";
      return { kind: "shared", key: "shared", label };
    }

    const isYourTurn = getAlternatingTurnIndex(cards, safeIndex) % 2 === 0;
    const label = isYourTurn
      ? (names.yourName ? `${names.yourName}’s Turn` : "Your Turn")
      : (names.partnerName ? `${names.partnerName}’s Turn` : "Their Turn");
    return { kind: isYourTurn ? "your" : "partner", key: isYourTurn ? "your-turn" : "partner-turn", label };
  }

  global.FlirtyFlipTurn = Object.freeze({
    MAX_NAME_LENGTH,
    createPlayers,
    isChallengeCard,
    isSharedPrompt,
    resolveTurn,
    sanitizeName
  });
})(window);
