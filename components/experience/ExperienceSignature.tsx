import { EXPERIENCE_SIGNATURE } from "@/lib/experience";
import ExperienceContainer from "./ExperienceContainer";
import SectionLink from "./SectionLink";

export default function ExperienceSignature() {
  return (
    <section
      id="signature"
      className="relative w-full overflow-hidden border-y border-white/10 bg-black"
    >
      {/* Full-width background */}
      <div
        className="absolute inset-0 bg-[#121212] bg-cover bg-center bg-no-repeat"
        style={
          EXPERIENCE_SIGNATURE.background
            ? { backgroundImage: `url(${EXPERIENCE_SIGNATURE.background})` }
            : undefined
        }
        role="img"
        aria-label="Titanium Prime signature"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      {/* Content — 1400px aligned */}
      <ExperienceContainer className="relative z-10 flex min-h-[280px] items-center justify-center py-12 md:min-h-[320px] md:py-14 lg:min-h-[360px] lg:py-16">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="font-display text-[10px] font-extralight text-[#c4a574]/70 md:text-[11px]">
              —
            </span>
            <p className="font-display text-[9px] font-light uppercase tracking-[0.38em] text-white/70 md:text-[10px] md:tracking-[0.42em]">
              {EXPERIENCE_SIGNATURE.title}
            </p>
            <span className="font-display text-[10px] font-extralight text-[#c4a574]/70 md:text-[11px]">
              /
            </span>
          </div>

          <h2 className="mt-5 font-display text-[28px] font-extralight uppercase leading-[1.05] tracking-[0.18em] text-white/95 md:mt-6 md:text-[40px] md:tracking-[0.22em] lg:text-[48px] lg:tracking-[0.24em]">
            {EXPERIENCE_SIGNATURE.brand}
          </h2>

          <div className="mt-4 flex items-center gap-4 md:mt-5 md:gap-5">
            <div className="h-px w-10 bg-white/25 md:w-14" />
            <p className="font-display text-[11px] font-light uppercase tracking-[0.32em] text-white/60 md:text-[12px] md:tracking-[0.36em]">
              {EXPERIENCE_SIGNATURE.tagline}
            </p>
            <div className="h-px w-10 bg-white/25 md:w-14" />
          </div>

          <div className="mt-8 flex justify-center md:mt-10">
            <SectionLink href={EXPERIENCE_SIGNATURE.ctaHref} variant="gold">
              {EXPERIENCE_SIGNATURE.cta}
            </SectionLink>
          </div>
        </div>
      </ExperienceContainer>
    </section>
  );
}
