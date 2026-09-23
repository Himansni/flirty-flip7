import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const PREFERRED_HOST = "https://www.flirtyflip.com";
const SEO_PAGES = [
  {
    slug: "couple-games-online",
    file: "couple-games-online/index.html",
    expectedCanonical: `${PREFERRED_HOST}/couple-games-online`,
    expectedTitleSnippet: "Couple Games Online Free",
    expectedH1Snippet: "Free Couple Games Online"
  },
  {
    slug: "long-distance-couple-games",
    file: "long-distance-couple-games/index.html",
    expectedCanonical: `${PREFERRED_HOST}/long-distance-couple-games`,
    expectedTitleSnippet: "Long Distance Couple Games Online",
    expectedH1Snippet: "Long Distance Couple Games"
  },
  {
    slug: "would-you-rather-for-couples",
    file: "would-you-rather-for-couples/index.html",
    expectedCanonical: `${PREFERRED_HOST}/would-you-rather-for-couples`,
    expectedTitleSnippet: "Would You Rather for Couples",
    expectedH1Snippet: "Would You Rather for Couples"
  },
  {
    slug: "questions-for-couples",
    file: "questions-for-couples/index.html",
    expectedCanonical: `${PREFERRED_HOST}/questions-for-couples`,
    expectedTitleSnippet: "Questions for Couples",
    expectedH1Snippet: "Questions for Couples"
  },
  {
    slug: "date-night-games",
    file: "date-night-games/index.html",
    expectedCanonical: `${PREFERRED_HOST}/date-night-games`,
    expectedTitleSnippet: "Date Night Games for Couples at Home",
    expectedH1Snippet: "Date Night Games for Couples"
  }
];

test("SEO Phase 1: All five landing pages exist with unique server-rendered metadata and self canonicals", () => {
  const titles = new Set();
  const descriptions = new Set();
  const canonicals = new Set();

  for (const page of SEO_PAGES) {
    const filePath = new URL(`../${page.file}`, import.meta.url);
    assert.ok(fs.existsSync(filePath), `File ${page.file} must exist`);
    const content = fs.readFileSync(filePath, "utf8");

    // Title
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    assert.ok(titleMatch, `${page.file} must have a <title>`);
    const title = titleMatch[1].trim();
    assert.ok(title.includes(page.expectedTitleSnippet), `${page.file} title must include "${page.expectedTitleSnippet}"`);
    assert.ok(!titles.has(title), `Title "${title}" must be unique`);
    titles.add(title);

    // Meta description
    const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
    assert.ok(descMatch, `${page.file} must have a meta description`);
    const desc = descMatch[1].trim();
    assert.ok(desc.length > 50, `${page.file} description must be substantial`);
    assert.ok(!descriptions.has(desc), `Description for ${page.file} must be unique`);
    descriptions.add(desc);

    // Canonical
    const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
    assert.ok(canonicalMatch, `${page.file} must have a canonical tag`);
    const canonical = canonicalMatch[1].trim();
    assert.equal(canonical, page.expectedCanonical, `Canonical must match ${page.expectedCanonical}`);
    canonicals.add(canonical);

    // H1
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    assert.ok(h1Match, `${page.file} must have an <h1>`);
    assert.ok(h1Match[1].includes(page.expectedH1Snippet), `H1 must include "${page.expectedH1Snippet}"`);

    // Structured Data JSON-LD
    const jsonLdMatch = content.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(jsonLdMatch, `${page.file} must contain JSON-LD structured data`);
    const schema = JSON.parse(jsonLdMatch[1]);
    assert.ok(schema["@graph"], `${page.file} schema must contain @graph array`);

    // WebPage & BreadcrumbList checks
    const webPage = schema["@graph"].find((e) => e["@type"] === "WebPage");
    assert.ok(webPage, `${page.file} schema must include WebPage`);
    assert.equal(webPage.url, page.expectedCanonical);

    const breadcrumbs = schema["@graph"].find((e) => e["@type"] === "BreadcrumbList");
    assert.ok(breadcrumbs, `${page.file} schema must include BreadcrumbList`);

    // FAQPage schema check
    const faq = schema["@graph"].find((e) => e["@type"] === "FAQPage");
    assert.ok(faq, `${page.file} schema must include FAQPage`);
    assert.ok(Array.isArray(faq.mainEntity) && faq.mainEntity.length >= 4, "FAQ must have at least 4 items");

    // Check that FAQ questions in schema exist visibly in HTML
    for (const item of faq.mainEntity) {
      assert.ok(content.includes(item.name), `FAQ question "${item.name}" must be visible in HTML`);
    }

    // GA4 Tracking
    assert.ok(content.includes("seo_landing_view"), `${page.file} must track seo_landing_view`);
    assert.ok(content.includes("seo_play_cta_click"), `${page.file} must track seo_play_cta_click`);
  }
});

test("SEO Phase 1: Canonical host is consistently https://www.flirtyflip.com across all surfaces", () => {
  const indexHtml = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const sitemapXml = fs.readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
  const robotsTxt = fs.readFileSync(new URL("../robots.txt", import.meta.url), "utf8");

  // index.html canonical and OG
  assert.match(indexHtml, /<link rel="canonical" href="https:\/\/www\.flirtyflip\.com\/"/);
  assert.match(indexHtml, /<meta property="og:url" content="https:\/\/www\.flirtyflip\.com\/"/);
  assert.match(indexHtml, /"@id":\s*"https:\/\/www\.flirtyflip\.com\/#website"/);

  // sitemap.xml
  assert.match(sitemapXml, /<loc>https:\/\/www\.flirtyflip\.com\/<\/loc>/);
  assert.ok(!sitemapXml.includes("https://flirtyflip.com/"), "sitemap.xml must not use non-www host");

  // robots.txt
  assert.match(robotsTxt, /Sitemap:\s*https:\/\/www\.flirtyflip\.com\/sitemap\.xml/);
});

test("SEO Phase 1: sitemap.xml contains exactly the verified canonical pages and excludes generic SPA states", () => {
  const sitemapXml = fs.readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
  const locs = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());

  assert.equal(locs.length, 6, "Sitemap must have exactly 6 canonical URLs (root + 5 landing pages)");
  assert.deepEqual(locs, [
    "https://www.flirtyflip.com/",
    "https://www.flirtyflip.com/couple-games-online",
    "https://www.flirtyflip.com/long-distance-couple-games",
    "https://www.flirtyflip.com/would-you-rather-for-couples",
    "https://www.flirtyflip.com/questions-for-couples",
    "https://www.flirtyflip.com/date-night-games"
  ]);
});

test("SEO Phase 1: Product claims are accurate and do not make blanket 'no account' statements", () => {
  for (const page of SEO_PAGES) {
    const filePath = new URL(`../${page.file}`, import.meta.url);
    const content = fs.readFileSync(filePath, "utf8");

    // Online Games must not be claimed as no account
    if (page.slug === "long-distance-couple-games") {
      assert.ok(!content.includes("online rooms without an account"), "Must not claim online rooms are account-free");
      assert.ok(content.includes("sign-in is required") || content.includes("Sign in"), "Must state sign-in is required for online rooms");
    }

    if (page.slug === "would-you-rather-for-couples") {
      assert.ok(content.includes("24"), "WYR page must mention 24 dilemmas");
    }

    if (page.slug === "couple-games-online" || page.slug === "questions-for-couples") {
      assert.ok(content.includes("711"), "Question deck pages must mention 711 cards");
      assert.ok(content.includes("10"), "Question deck pages must mention 10 decks");
    }
  }
});

test("SEO Phase 1: vercel.json includes cleanUrls, trailingSlash false, and SPA rewrite", () => {
  const vercelJson = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  assert.equal(vercelJson.cleanUrls, true);
  assert.equal(vercelJson.trailingSlash, false);
  assert.deepEqual(vercelJson.rewrites, [
    {
      source: "/((?!api/).*)",
      destination: "/index.html"
    }
  ]);
});

test("SEO Phase 1: Footer in index.html includes the Guides column with links to all 5 landing pages", () => {
  const indexHtml = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(indexHtml.includes("<h4>Guides</h4>"), "Footer must have Guides column");

  for (const page of SEO_PAGES) {
    assert.ok(indexHtml.includes(`href="/${page.slug}"`), `Footer must link to /${page.slug}`);
  }
});
