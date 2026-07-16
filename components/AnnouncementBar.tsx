const SEP = "\u00A0\u00A0\u00A0\u2014\u00A0\u00A0\u00A0";

// One full cycle of all three languages, joined into a single string
const CYCLE =
  "Your child's first word, first step, first look into your eyes — we wait for these moments as eagerly as you do." +
  SEP +
  "మీ బిడ్డను అమ్మలా చూసుకుంటాం — ప్రతి చిన్న అడుగూ మాకు పండుగే." +
  SEP +
  "इसमें आपकी कोई गलती नहीं है, और आप अकेली नहीं हैं — सही साथ मिले तो हर बच्चा आगे बढ़ता है।" +
  SEP;

// Duplicate enough times so the strip is always full and the loop is seamless
const REPEATS = 4;

export default function AnnouncementBar() {
  return (
    <div
      className="bg-accent overflow-hidden py-1"
      aria-label="Announcement ticker"
      role="marquee"
    >
      <p className="flex whitespace-nowrap animate-marquee" aria-live="off">
        {Array.from({ length: REPEATS }).map((_, i) => (
          <span
            key={i}
            className="text-white text-[11px] font-semibold tracking-wide shrink-0"
          >
            {CYCLE}
          </span>
        ))}
      </p>
    </div>
  );
}
