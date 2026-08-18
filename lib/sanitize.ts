import DOMPurify from "isomorphic-dompurify";

// Post bodies are authored by admins, but they are still stored in a database
// and rendered with dangerouslySetInnerHTML — sanitize on the way out so a
// compromised token or a bad paste can never inject script into the site.
const ALLOWED_TAGS = [
  "p", "br", "strong", "b", "em", "i", "u", "s",
  "h2", "h3", "h4",
  "ul", "ol", "li",
  "blockquote",
  "a", "span", "div",
];

const ALLOWED_ATTR = ["href", "target", "rel", "style"];

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    // Blocks javascript:, data: and other unsafe schemes on href.
    ALLOWED_URI_REGEXP: /^(?:https?:|mailto:|tel:|\/|#)/i,
  });
}

/**
 * True when the stored content is HTML from the rich-text editor rather than
 * the plain-text/markdown format the form used previously.
 */
export function isHtmlContent(content: string): boolean {
  return /<(p|h2|h3|h4|ul|ol|li|strong|em|u|a|br|blockquote|div|span)\b/i.test(
    content
  );
}
