/**
 * Converts clipboard HTML into the small, clean subset of tags the blog
 * renderer supports.
 *
 * Word and Google Docs do not use semantic tags: bold arrives as
 * `<span style="font-weight:700">`, italic as `<span style="font-style:italic">`,
 * and Docs wraps whole documents in `<b style="font-weight:normal">`. Simply
 * stripping style attributes would therefore delete the formatting the author
 * meant to keep, while keeping them would drag in fonts, colours and spacing
 * that fight the site's design. So styles are translated into semantic tags
 * first, then dropped.
 */

const BLOCK_MAP: Record<string, string> = {
  H1: "h2", // demote: the post title is already the page's h1
  H2: "h2",
  H3: "h3",
  H4: "h3",
  H5: "h3",
  H6: "h3",
  DIV: "p",
  SECTION: "p",
  ARTICLE: "p",
};

const KEEP = new Set([
  "P", "BR", "STRONG", "EM", "U", "S",
  "H2", "H3", "UL", "OL", "LI", "BLOCKQUOTE", "A",
]);

const DROP_ENTIRELY = new Set([
  "SCRIPT", "STYLE", "META", "LINK", "HEAD", "TITLE", "IFRAME", "OBJECT", "EMBED",
]);

function isBold(style: CSSStyleDeclaration): boolean {
  const w = style.fontWeight;
  if (!w) return false;
  if (w === "bold" || w === "bolder") return true;
  const n = parseInt(w, 10);
  return !Number.isNaN(n) && n >= 600;
}

function wrap(doc: Document, el: Element, tagName: string) {
  const wrapper = doc.createElement(tagName);
  el.parentNode?.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

/** Replaces `el` with `tagName`, preserving its children. */
function rename(doc: Document, el: Element, tagName: string): Element {
  const replacement = doc.createElement(tagName);
  while (el.firstChild) replacement.appendChild(el.firstChild);
  el.replaceWith(replacement);
  return replacement;
}

/** Removes an element but keeps its children in place. */
function unwrap(el: Element) {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}

export function htmlFromClipboard(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");

  // Pass 1 — turn visual styling into semantic tags, before any style is lost.
  for (const el of Array.from(doc.body.querySelectorAll<HTMLElement>("*"))) {
    if (!el.isConnected) continue;
    const style = el.style;

    // Google Docs wraps its entire payload in a non-bold <b>; honouring it
    // would bold the whole article.
    const declaredNormal = style.fontWeight === "normal" || style.fontWeight === "400";

    if (isBold(style) && !declaredNormal) wrap(doc, el, "strong");
    if (style.fontStyle === "italic") wrap(doc, el, "em");
    if (style.textDecorationLine?.includes("underline") ||
        style.textDecoration?.includes("underline")) {
      wrap(doc, el, "u");
    }
  }

  // Pass 2 — normalise tag names and strip everything else.
  for (const el of Array.from(doc.body.querySelectorAll("*"))) {
    if (!el.isConnected) continue;
    const tag = el.tagName;

    if (DROP_ENTIRELY.has(tag)) {
      el.remove();
      continue;
    }

    if (tag === "B") {
      // <b style="font-weight:normal"> is Docs' wrapper, not real bold.
      const weight = (el as HTMLElement).style.fontWeight;
      if (weight === "normal" || weight === "400") unwrap(el);
      else rename(doc, el, "strong");
      continue;
    }
    if (tag === "I") { rename(doc, el, "em"); continue; }

    const mapped = BLOCK_MAP[tag];
    if (mapped) {
      // A DIV that only contains block children is a layout wrapper, not a
      // paragraph — unwrapping avoids stacks of empty <p> elements.
      if ((tag === "DIV" || tag === "SECTION" || tag === "ARTICLE") &&
          el.querySelector("p, h2, h3, ul, ol, blockquote, div")) {
        unwrap(el);
      } else {
        rename(doc, el, mapped);
      }
      continue;
    }

    if (!KEEP.has(tag)) unwrap(el);
  }

  // Pass 3 — drop presentational attributes; keep only safe links.
  for (const el of Array.from(doc.body.querySelectorAll("*"))) {
    for (const attr of Array.from(el.attributes)) {
      const keepHref =
        el.tagName === "A" &&
        attr.name === "href" &&
        /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(attr.value);
      if (!keepHref) el.removeAttribute(attr.name);
    }
    if (el.tagName === "A") {
      if (!el.getAttribute("href")) unwrap(el);
      else {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    }
  }

  // Headings are already bold, so Docs' inner <strong> is pure noise.
  for (const h of Array.from(doc.body.querySelectorAll("h2, h3"))) {
    for (const b of Array.from(h.querySelectorAll("strong"))) unwrap(b);
  }

  // Pass 4 — collapse empties left behind by unwrapping.
  for (const el of Array.from(doc.body.querySelectorAll("p, strong, em, u, span"))) {
    if (!el.textContent?.trim() && !el.querySelector("br, img")) el.remove();
  }

  return doc.body.innerHTML.trim();
}
