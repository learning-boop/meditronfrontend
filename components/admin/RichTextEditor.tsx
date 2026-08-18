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
} from "lucide-react";

const FONTS = [
  { label: "Default", value: "" },
  { label: "Sans", value: "ui-sans-serif, system-ui, sans-serif" },
  { label: "Serif", value: "Georgia, 'Times New Roman', serif" },
  { label: "Mono", value: "ui-monospace, 'SFMono-Regular', monospace" },
];

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(!value);

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

  const addLink = useCallback(() => {
    const selection = window.getSelection()?.toString();
    if (!selection) {
      alert("Select the text you want to turn into a link first.");
      return;
    }
    const url = prompt("Link URL", "https://");
    if (!url) return;
    // Block javascript: and data: URLs at entry, not just at render time.
    if (!/^(https?:\/\/|mailto:|tel:|\/)/i.test(url)) {
      alert("Use an http(s), mailto:, tel: or relative (/) link.");
      return;
    }
    exec("createLink", url);
  }, [exec]);

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

        <button type="button" title="Add link" onClick={addLink} className={btn}>
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
