"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { htmlFromClipboard } from "@/lib/paste-html";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Unlink,
  Heading2,
  Heading3,
  Quote,
  Undo2,
  Redo2,
  RemoveFormatting,
  Highlighter,
  X,
} from "lucide-react";

const FONTS = [
  { label: "Default", value: "" },
  { label: "Sans", value: "ui-sans-serif, system-ui, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
  { label: "Mono", value: "ui-monospace, 'SFMono-Regular', monospace" },
];

type LinkModal = {
  text: string;
  url: string;
  external: boolean;
  nofollow: boolean;
};

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(!value);
  const [linkModal, setLinkModal] = useState<LinkModal | null>(null);
  // Saved before the modal opens so we can restore selection on insert.
  const savedRangeRef = useRef<Range | null>(null);

  // contentEditable is uncontrolled: writing innerHTML on every keystroke would
  // reset the caret. Seed it once, then only push changes outward.
  useEffect(() => {
    const el = ref.current;
    if (el && el.innerHTML !== value && document.activeElement !== el) {
      el.innerHTML = value;
      setIsEmpty(!el.textContent?.trim());
    }
  }, [value]);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setIsEmpty(!el.textContent?.trim());
    onChange(el.innerHTML);
  }, [onChange]);

  // execCommand is deprecated but remains the only dependency-free API that
  // works across all current browsers for contentEditable formatting.
  const exec = useCallback(
    (command: string, arg?: string) => {
      ref.current?.focus();
      document.execCommand(command, false, arg);
      sync();
    },
    [sync]
  );

  // ── Link handling ───────────────────────────────────────────────────────────

  const openLinkModal = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      alert("Select the text you want to turn into a link first.");
      return;
    }
    // Clone the range now — once the modal renders and the input receives focus
    // the selection inside contentEditable is lost.
    savedRangeRef.current = selection.getRangeAt(0).cloneRange();
    setLinkModal({
      text: selection.toString(),
      url: "https://",
      external: false,
      nofollow: false,
    });
  }, []);

  const insertLink = useCallback(() => {
    if (!linkModal || !savedRangeRef.current) return;
    const { url, external, nofollow } = linkModal;

    if (!/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(url)) {
      alert("Use an http(s), mailto:, tel:, # or a relative (/) link.");
      return;
    }

    // Build rel attribute combining security tokens and nofollow as needed.
    const relParts: string[] = [];
    if (external) relParts.push("noopener", "noreferrer");
    if (nofollow) relParts.push("nofollow");

    // Capture the existing inline HTML inside the selection (preserves bold
    // etc.) before we replace it.
    const fragment = savedRangeRef.current.cloneContents();
    const tmp = document.createElement("div");
    tmp.appendChild(fragment);
    const innerHtml = tmp.innerHTML;

    const escapedUrl = url.replace(/"/g, "&quot;");
    const attrParts = [`href="${escapedUrl}"`];
    if (external) attrParts.push('target="_blank"');
    if (relParts.length) attrParts.push(`rel="${relParts.join(" ")}"`);

    const html = `<a ${attrParts.join(" ")}>${innerHtml}</a>`;

    // Restore the saved selection, then replace it with the anchor.
    const el = ref.current;
    if (!el) return;
    el.focus();
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
    document.execCommand("insertHTML", false, html);

    setLinkModal(null);
    savedRangeRef.current = null;
    sync();
  }, [linkModal, sync]);

  const cancelLinkModal = useCallback(() => {
    setLinkModal(null);
    savedRangeRef.current = null;
  }, []);

  // ── Highlight ───────────────────────────────────────────────────────────────

  const toggleHighlight = useCallback(() => {
    document.execCommand("styleWithCSS", false, "true");
    ref.current?.focus();
    // If the selection already has a yellow background, remove it.
    document.execCommand("hiliteColor", false, "#fef08a");
    sync();
  }, [sync]);

  const btn =
    "w-8 h-8 shrink-0 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white hover:text-primary hover:shadow-sm transition-colors";
  const divider = <span className="w-px h-5 bg-slate-200 mx-1 shrink-0" />;

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition-colors">
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 flex-wrap bg-slate-50 border-b border-slate-200 px-2 py-1.5">
        <select
          aria-label="Font"
          defaultValue=""
          onChange={(e) => {
            // styleWithCSS makes fontName emit inline styles rather than <font>.
            document.execCommand("styleWithCSS", false, "true");
            exec("fontName", e.target.value);
          }}
          className="h-8 px-2 rounded-lg bg-transparent text-slate-600 text-xs font-semibold hover:bg-white cursor-pointer focus:outline-none"
        >
          {FONTS.map((f) => (
            <option key={f.label} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>

        <select
          aria-label="Text style"
          defaultValue="p"
          onChange={(e) => exec("formatBlock", `<${e.target.value}>`)}
          className="h-8 px-2 rounded-lg bg-transparent text-slate-600 text-xs font-semibold hover:bg-white cursor-pointer focus:outline-none"
        >
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>

        {divider}

        <button type="button" title="Bold" onClick={() => exec("bold")} className={btn}>
          <Bold className="w-4 h-4" />
        </button>
        <button type="button" title="Italic" onClick={() => exec("italic")} className={btn}>
          <Italic className="w-4 h-4" />
        </button>
        <button type="button" title="Underline" onClick={() => exec("underline")} className={btn}>
          <Underline className="w-4 h-4" />
        </button>
        <button type="button" title="Highlight text (yellow)" onClick={toggleHighlight} className={btn}>
          <Highlighter className="w-4 h-4" />
        </button>

        {divider}

        <button type="button" title="Heading 2" onClick={() => exec("formatBlock", "<h2>")} className={btn}>
          <Heading2 className="w-4 h-4" />
        </button>
        <button type="button" title="Heading 3" onClick={() => exec("formatBlock", "<h3>")} className={btn}>
          <Heading3 className="w-4 h-4" />
        </button>
        <button type="button" title="Quote" onClick={() => exec("formatBlock", "<blockquote>")} className={btn}>
          <Quote className="w-4 h-4" />
        </button>

        {divider}

        <button type="button" title="Bullet list" onClick={() => exec("insertUnorderedList")} className={btn}>
          <List className="w-4 h-4" />
        </button>
        <button type="button" title="Numbered list" onClick={() => exec("insertOrderedList")} className={btn}>
          <ListOrdered className="w-4 h-4" />
        </button>

        {divider}

        <button type="button" title="Add / edit link" onClick={openLinkModal} className={btn}>
          <Link2 className="w-4 h-4" />
        </button>
        <button type="button" title="Remove link" onClick={() => exec("unlink")} className={btn}>
          <Unlink className="w-4 h-4" />
        </button>

        {divider}

        <button type="button" title="Clear formatting" onClick={() => exec("removeFormat")} className={btn}>
          <RemoveFormatting className="w-4 h-4" />
        </button>
        <button type="button" title="Undo" onClick={() => exec("undo")} className={btn}>
          <Undo2 className="w-4 h-4" />
        </button>
        <button type="button" title="Redo" onClick={() => exec("redo")} className={btn}>
          <Redo2 className="w-4 h-4" />
        </button>
      </div>

      {/* ── Link panel (shown inline below toolbar) ─────────────────────────── */}
      {linkModal && (
        <div className="border-b border-blue-100 bg-blue-50 px-3 py-3 space-y-2">
          {/* URL row */}
          <div className="flex items-center gap-2">
            <input
              autoFocus
              type="text"
              value={linkModal.url}
              onChange={(e) => setLinkModal({ ...linkModal, url: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") { e.preventDefault(); insertLink(); }
                if (e.key === "Escape") cancelLinkModal();
              }}
              placeholder="https://example.com  or  /internal-page"
              className="flex-1 px-3 py-1.5 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="button"
              onClick={insertLink}
              className="px-3 py-1.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-lg transition-colors"
            >
              Insert
            </button>
            <button
              type="button"
              onClick={cancelLinkModal}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
              title="Cancel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options row */}
          <div className="flex items-center gap-5 flex-wrap">
            <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={linkModal.external}
                onChange={(e) => setLinkModal({ ...linkModal, external: e.target.checked })}
                className="rounded"
              />
              Open in new tab
              <span className="text-slate-400">(external link)</span>
            </label>
            <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={linkModal.nofollow}
                onChange={(e) => setLinkModal({ ...linkModal, nofollow: e.target.checked })}
                className="rounded"
              />
              No follow
              <span className="text-slate-400">(rel=&quot;nofollow&quot;)</span>
            </label>
            {linkModal.text && (
              <span className="text-xs text-slate-400 truncate max-w-[200px]">
                Linking: &ldquo;{linkModal.text.slice(0, 50)}{linkModal.text.length > 50 ? "…" : ""}&rdquo;
              </span>
            )}
          </div>
        </div>
      )}

      {/* Editable surface */}
      <div className="relative">
        {isEmpty && placeholder && (
          <p className="absolute top-4 left-4 text-slate-300 text-sm pointer-events-none select-none">
            {placeholder}
          </p>
        )}
        <div
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label="Post content"
          onInput={sync}
          onBlur={sync}
          // Keep headings, bold, italic, lists and links from the clipboard;
          // discard the fonts, colours and wrappers Word and Docs bring along.
          onPaste={(e) => {
            e.preventDefault();
            const html = e.clipboardData.getData("text/html");
            if (html) {
              document.execCommand("insertHTML", false, htmlFromClipboard(html));
            } else {
              document.execCommand(
                "insertText",
                false,
                e.clipboardData.getData("text/plain")
              );
            }
            sync();
          }}
          className="admin-rte min-h-[380px] max-h-[70vh] overflow-y-auto px-4 py-4 text-slate-800 text-sm leading-relaxed focus:outline-none"
        />
      </div>
    </div>
  );
}
