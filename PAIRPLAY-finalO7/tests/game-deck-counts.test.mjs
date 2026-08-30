import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

// Game deck data is defined in the browser bundle; load only that data and its
// selector so these regression tests do not require a DOM or Supabase client.
const source = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
const deckStart = source.indexOf("const moodQuestionSets =");
const selectorEnd = source.indexOf("// ========================================\n// GAMEPLAY STATE", deckStart);
const context = {};

assert.notEqual(deckStart, -1, "moodQuestionSets must remain present");
assert.notEqual(selectorEnd, -1, "getQuestionPool boundary must remain present");
vm.runInNewContext(
  `${source.slice(deckStart, selectorEnd)}; globalThis.deckData = moodQuestionSets; globalThis.selectDeck = getQuestionPool;`,
  context,
);

const requiredDecks = {
  TruthandDare: 10,
  flirtyii: 50,
  spicy: 50,
  intimate: 50,
  DarkDesire: 50,
};

test("configured game decks have their advertised card counts", () => {
  for (const [moodKey, expectedLength] of Object.entries(requiredDecks)) {
    const cards = context.deckData[moodKey][expectedLength];
    assert.equal(cards.length, expectedLength, `${moodKey}/${expectedLength} must contain ${expectedLength} cards`);
    assert.equal(context.selectDeck(moodKey, expectedLength), cards, `${moodKey}/${expectedLength} must remain selectable`);

    for (const [type, prompt] of cards) {
      assert.equal(typeof type, "string", `${moodKey} card type must be text`);
      assert.ok(type.length > 0, `${moodKey} card type must not be empty`);
      assert.equal(typeof prompt, "string", `${moodKey} card prompt must be text`);
      assert.ok(prompt.trim().length > 0, `${moodKey} card prompt must not be empty`);
    }
  }
});

test("corrected decks retain their established opening and closing cards", () => {
  const expectedBoundaries = {
    TruthandDare: [
      ["ASK💭", "What's a small lie you've told me that you're finally ready to correct?"],
      ["DO✦", "Give your best flirty one-liner, in character, like you're meeting me for the first time."],
    ],
    flirtyii: [
      ["ASK💭", "What's the last thing I did that you couldn't stop thinking about afterward?"],
      ["DO✦", "Kiss them slowly, then set the game down — you two can take it from here."],
    ],
    spicy: [
      ["ASK💭", "What’s the first place on my body your attention goes when no one’s looking?"],
      ["DO✦", "Kiss me slowly, then set the game down — we can take it from here."],
    ],
    intimate: [
      ["ASK💭", "Which sense feels safest to give up first?"],
      ["DO✦", "Remove the blindfold slowly and stay close while my eyes adjust."],
    ],
    DarkDesire: [
      ["ASK💭", "How dark do you want the room before my hands start moving?"],
      ["DO✦", "Kiss me once, deep and unhurried, then let the massage end wherever it wants to."],
    ],
  };

  for (const [moodKey, [firstCard, lastCard]] of Object.entries(expectedBoundaries)) {
    const cards = context.deckData[moodKey][requiredDecks[moodKey]];
    assert.equal(JSON.stringify(cards[0]), JSON.stringify(firstCard), `${moodKey} opening card changed unexpectedly`);
    assert.equal(JSON.stringify(cards.at(-1)), JSON.stringify(lastCard), `${moodKey} closing card changed unexpectedly`);
  }
});
