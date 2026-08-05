import { IconYouTube } from "@/components/SocialIcons";

const CHANNEL_URL = "https://www.youtube.com/@Meditroncdc";

const shorts = [
  { id: "I-r--1TTvHY", title: "Child therapy session at Meditron, Vijayawada" },
  { id: "LWv9ineHP9Q", title: "Therapy moments at Meditron Child Development Centre" },
  { id: "LqaxEk7BZQU", title: "Real progress, real children — Meditron, Vijayawada" },
  { id: "2rT9HxDzpHs", title: "Inside Meditron — child development therapy in Vijayawada" },
];

export default function YoutubeShortsSection() {
  return (
    <section
      className="hidden md:block bg-confident-navy py-14"
      aria-labelledby="yt-shorts-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#FF0000] flex items-center justify-center">
                <IconYouTube className="w-4 h-4 text-white" />
              </div>
              <span className="text-dusty-blue text-xs font-bold uppercase tracking-[0.2em]">
                YouTube Shorts
              </span>
            </div>
            <h2
              id="yt-shorts-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
            >
              Watch us in action —
              <span className="text-[#FF0000]"> real sessions,</span>
              <br className="hidden sm:block" />
              real children, real progress.
            </h2>
            <p className="text-dusty-blue text-sm mt-3 leading-relaxed">
              Short clips from inside Meditron, posted regularly on our channel.
            </p>
          </div>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start sm:self-auto
              bg-[#FF0000] hover:bg-[#cc0000] transition-colors
              text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg shrink-0"
          >
            <IconYouTube className="w-4 h-4 shrink-0" />
            Subscribe @Meditroncdc
          </a>
        </div>

        {/* ── 4 shorts in a row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {shorts.map((s) => (
            <div key={s.id} className="flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${s.id}?rel=0&playsinline=1`}
                  title={s.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <p className="text-white/60 text-xs leading-snug text-center px-1">
                {s.title}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5
            py-5 mt-8 text-sage hover:text-white text-sm font-semibold
            border-t border-navy hover:border-dusty-blue
            transition-colors duration-200 group"
        >
          <IconYouTube className="w-4 h-4 group-hover:text-[#FF0000] transition-colors" />
          See all Shorts on YouTube · @Meditroncdc
        </a>

      </div>
    </section>
  );
}
