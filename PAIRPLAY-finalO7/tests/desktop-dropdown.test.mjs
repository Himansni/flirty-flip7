import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const script = fs.readFileSync(new URL("../script.js", import.meta.url), "utf8");
const style = fs.readFileSync(new URL("../style.css", import.meta.url), "utf8");

test("Games and Courses share the complete dropdown parent structure", () => {
  for (const key of ["games", "courses"]) {
    const itemPattern = new RegExp(`<li class="nav-item has-mega" data-key="${key}">[\\s\\S]*?aria-controls="${key}-menu"[\\s\\S]*?<div id="${key}-menu" class="mega-menu`);
    assert.match(html, itemPattern, `${key} trigger and panel must remain inside one hover parent`);
  }
});

test("desktop dropdowns bridge the visual gap without changing mobile breakpoints", () => {
  assert.match(style, /@media \(min-width: 900px\) \{[\s\S]*?\.nav-item\.has-mega > \.mega-menu::before/);
  assert.match(style, /top:-12px;\s*height:12px;/);
  assert.match(style, /@media \(max-width: 900px\) \{\s*\.primary-nav \{ display:none; \}/);
});

test("desktop dropdown state supports delayed hover close and keyboard focus", () => {
  assert.match(script, /desktopDropdownCloseDelay = 150/);
  assert.match(script, /item\.matches\(':hover'\)/);
  assert.match(script, /item\.matches\(':focus-within'\)/);
  assert.match(script, /event\.key === 'Escape'/);
  assert.match(script, /if \(!event\.target\.closest\('\.nav-item\.has-mega'\)\) closeAllMegaItems\(\)/);
});
