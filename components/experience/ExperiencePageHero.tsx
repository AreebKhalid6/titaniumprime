import { EXPERIENCE_HERO } from "@/lib/experience";
import ExperienceContainer from "./ExperienceContainer";

export default function ExperiencePageHero() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black">
      {/* Full-width background */}
      <div
        className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat"
        style={
          EXPERIENCE_HERO.image
            ? { backgroundImage: `url(${EXPERIENCE_HERO.image})` }
            : undefined
        }
        role="img"
        aria-label="Titanium Prime dining room"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />

      {/* Content — 1400px aligned with other sections */}
      <ExperienceContainer className="relative z-10 flex min-h-[58svh] flex-col justify-start pb-14 pt-[108px] md:min-h-[62svh] md:pt-[120px] lg:min-h-[68svh] lg:pt-[128px]">
        <div className="relative w-fit max-w-[480px] px-5 py-6 md:px-8 md:py-8">
          <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 bg-gradient-to-r from-black/85 via-black/70 to-transparent md:-inset-x-6 md:-inset-y-4" />

          <div className="relative z-10">
            <p className="font-display text-[9px] font-extralight uppercase tracking-[0.38em] text-[#9a9a9a] md:text-[10px] md:tracking-[0.42em]">
              {EXPERIENCE_HERO.label}
            </p>

            <h1 className="mt-5 max-w-[300px] font-display text-[26px] font-extralight uppercase leading-[1.12] tracking-[0.04em] text-white/92 md:mt-6 md:max-w-[380px] md:text-[34px] lg:max-w-[440px] lg:text-[40px] xl:text-[44px]">
              {EXPERIENCE_HERO.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <div className="mt-10 flex items-center gap-2 md:mt-12">
              <div className="h-px w-[72px] bg-white/25 md:w-[88px]" />
              <span className="font-display text-[11px] font-extralight text-white/35 md:text-[12px]">
                /
              </span>
            </div>
          </div>
        </div>
      </ExperienceContainer>
    </section>
  );
}
