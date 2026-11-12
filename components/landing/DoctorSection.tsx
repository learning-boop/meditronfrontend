import { Camera } from "lucide-react";
import { DOCTOR, DOCTOR_PHOTO, FACTS, TE } from "./content";
import { Telugu, Voice } from "./ui";

/*
 * Phones: her question → photo → letter.
 * Desktop: photo held on the left while the letter scrolls on the right.
 */
export default function DoctorSection() {
  return (
    <section aria-labelledby="doctor-heading" className="bg-[var(--lp-sand)] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1240px] gap-x-16 gap-y-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="max-w-[620px] md:col-start-2 md:row-start-1">
          <Voice>Who will help us?</Voice>
          <h2 id="doctor-heading" className="text-[1.875rem] font-semibold leading-[1.15] text-[var(--lp-teal)] md:text-[2.75rem]">
            Meet Dr. Sirisha. She starts by listening to you.
          </h2>
        </div>

        <div className="md:sticky md:top-8 lg:top-24 md:col-start-1 md:row-span-2 md:row-start-1 md:self-start">
          {DOCTOR_PHOTO ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`${DOCTOR_PHOTO}-520.webp`}
              srcSet={`${DOCTOR_PHOTO}-520.webp 520w, ${DOCTOR_PHOTO}-800.webp 800w`}
              sizes="(min-width: 768px) 40vw, 100vw"
              alt={`${DOCTOR.name}, founder of Meditron Child Development Centre`}
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[28px] object-cover object-[50%_25%]"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-[#b8cdd2] bg-[var(--lp-cream)] text-center">
              <span className="lp-serif text-[5rem] font-semibold leading-none text-[var(--lp-sage)]">VS</span>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] text-[var(--lp-muted)]">
                <Camera className="h-4 w-4" aria-hidden="true" />
                Dr. Sirisha&rsquo;s photo goes here
              </span>
            </div>
          )}
          <div className="mt-5">
            <p className="text-[1.0625rem] font-bold text-[var(--lp-teal)]">{DOCTOR.name}</p>
            <p className="text-[0.9375rem] text-[var(--lp-muted)]">{DOCTOR.role}</p>
          </div>
        </div>

        <div className="max-w-[620px] md:col-start-2 md:row-start-2">
          <article className="lp-serif space-y-5 text-[1.1875rem] leading-[1.75] text-[var(--lp-ink)] md:text-[1.25rem]">
            <p className="font-semibold text-[var(--lp-teal)]">Dear Amma,</p>
            <p>
              Every day, a mother sits in front of me and asks the same question with the same eyes: &ldquo;Doctor,
              will my child be okay?&rdquo;
            </p>
            <p>
              I never answer with statistics first. I answer with what I&rsquo;ve seen for {FACTS.years}{" "}years in
              this room: children who wouldn&rsquo;t look up, now calling out to their friends. Children who
              couldn&rsquo;t hold a pencil, now writing their names and showing it to everyone twice.
            </p>
            <p>
              Your child is not a case file to me. Therapy doesn&rsquo;t start with a diagnosis. It starts with
              understanding one particular child. Yours.
            </p>
            <p>Bring your questions. Bring your fears. Bring your child. We&rsquo;ll take it from there, together.</p>
            <p className="pt-1 italic text-[var(--lp-teal)]">Venkata Sirisha Matla</p>
          </article>

          <Telugu className="mt-8 text-[var(--lp-teal)]">{TE.doctor}</Telugu>
          <p className="mt-1 text-[0.9375rem] text-[var(--lp-muted)]">
            We care for your child the way a mother would. Every small step is a celebration for us.
          </p>

          <div className="mt-10 border-t border-[#c8d8dc] pt-8">
            <p className="lp-serif text-[1.375rem] leading-snug text-[var(--lp-teal)]">
              {FACTS.years} years of practice, and {FACTS.families} families guided so far.
            </p>
            <ul className="mt-5 grid gap-2 text-[1rem] text-[var(--lp-ink)] sm:grid-cols-2 sm:gap-x-8">
              {DOCTOR.credentials.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lp-sage-deep)]" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
