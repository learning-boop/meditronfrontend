export default function DoctorInterview() {
  return (
    <section
      className="bg-white py-10 sm:py-14"
      aria-labelledby="doctor-interview-heading"
    >
      {/* Heading — constrained width */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <span className="text-accent font-semibold text-xs uppercase tracking-[0.2em]">
          In the Media
        </span>
        <h2
          id="doctor-interview-heading"
          className="mt-2 text-confident-navy font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight"
        >
          Hear Directly From Our Doctor
        </h2>
        <p className="mt-2 text-dusty-blue text-base leading-relaxed max-w-xl">
          Our founder speaks about child development and early intervention in
          this media interview. Sound is off by default — unmute whenever
          you&apos;re ready.
        </p>
      </div>

      {/* Full-width video */}
      <div className="w-full aspect-video">
        <iframe
          src="https://www.youtube.com/embed/esjArlWgycw?start=16&mute=1&controls=1&rel=0&modestbranding=1"
          title="Media interview with Meditron's founder — Child Development Centre Vijayawada"
          allow="accelerometer; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
