import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');

test('SEO facts match repository data', () => {
  const scriptContent = fs.readFileSync(path.join(root, 'script.js'), 'utf-8');
  const gamesContent = fs.readFileSync(path.join(root, 'couple-games-data.js'), 'utf-8');
  const onlineContent = fs.readFileSync(path.join(root, 'couple-games-online.js'), 'utf-8');
  
  const regex = /const\s+moodQuestionSets\s*=\s*({[\s\S]*?^\};)/m;
  const setsMatch = scriptContent.match(regex);
  if (!setsMatch) throw new Error("Could not extract moodQuestionSets");
  const setsObj = new Function('return ' + setsMatch[1])();
  
  let uniqueQuestions = new Set();
  let totalEntries = 0;
  let deckCount = Object.keys(setsObj).length;
  
  Object.keys(setsObj).forEach(k => {
    Object.keys(setsObj[k]).forEach(s => {
       const prompts = setsObj[k][s];
       prompts.forEach((p) => {
         if (!p) return;
         totalEntries++;
         const rawStr = Array.isArray(p) ? p[1] : String(p);
         const text = rawStr.toLowerCase().replace(/[.,!?—\-\u2014\u2013\u201C\u201D"']/g, '').replace(/\s+/g, ' ').trim();
         uniqueQuestions.add(text);
       });
    });
  });
  
  const uniquePromptsCount = uniqueQuestions.size;
  if (uniquePromptsCount === 0) throw new Error("Unique prompts count is 0. Extraction failed.");

  const gamesFnStrMatch = gamesContent.match(/const\s+games\s*=\s*(\[[\s\S]*?\]);/m);
  if (!gamesFnStrMatch) throw new Error("Could not extract games array");
  const gamesObj = new Function('return ' + gamesFnStrMatch[1])();
  const miniGamesCount = gamesObj.length;
  if (miniGamesCount === 0) throw new Error("Mini games count is 0");

  const wyrFnStrMatch = gamesContent.match(/const\s+wouldYouRatherPrompts\s*=\s*(\[[\s\S]*?\]);/m);
  if (!wyrFnStrMatch) throw new Error("Could not extract wouldYouRatherPrompts array");
  const wyrObj = new Function('return ' + wyrFnStrMatch[1])();
  const wyrCount = wyrObj.length;
  if (wyrCount === 0) throw new Error("WYR count is 0");

  const onlineGamesMatch = onlineContent.match(/const\s+GAME_IDS\s*=\s*Object\.freeze\(\[\s*([\s\S]*?)\s*\]\)/);
  if (!onlineGamesMatch) throw new Error("Could not extract ONLINE_GAMES array");
  const onlineGamesCount = onlineGamesMatch[1].split(',').length;
  if (onlineGamesCount === 0) throw new Error("Online games count is 0");

  const pages = [
    'couple-games-online/index.html',
    'date-night-games/index.html',
    'long-distance-couple-games/index.html',
    'questions-for-couples/index.html',
    'would-you-rather-for-couples/index.html'
  ];

  const absolutePrivacyTerms = [
    "completely private",
    "100% private",
    "fully secure",
    "totally secure"
  ];

  pages.forEach(page => {
     const p = path.join(root, page);
     if (!fs.existsSync(p)) return;
     const html = fs.readFileSync(p, 'utf-8').toLowerCase();
     
     absolutePrivacyTerms.forEach(term => {
        if (html.includes(term.toLowerCase())) {
           assert.fail(`Page ${page} contains absolute privacy claim: "${term}"`);
        }
     });

     assert.ok(!html.includes('499'), `Page ${page} still contains old prompt count 499`);
     assert.ok(!html.includes('849'), `Page ${page} still contains old prompt count 849 (should be 711 unique)`);
     
     // Dynamically check against the extracted values if the page mentions these facts
     // Since this is a data-driven test, we just check that the unique prompts count string is found if the page mentions prompts
     if (html.includes('unique prompt')) {
        assert.ok(html.includes(uniquePromptsCount.toString()), `Page ${page} has incorrect unique prompts count, expected ${uniquePromptsCount}`);
     }
  });
});
