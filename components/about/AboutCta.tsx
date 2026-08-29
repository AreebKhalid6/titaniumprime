import Image from "next/image";
import { ABOUT_CTA } from "@/lib/about";

function ChevronIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden
      className="text-[#b89b62]"
    >
      <path d="M3 1.5L6.5 5L3 8.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default function AboutCta() {
  return (
    <section id="about-cta" className="relative w-full overflow-hidden bg-black">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-[#080808] bg-cover bg-center bg-no-repeat"
        style={
          ABOUT_CTA.background
            ? { backgroundImage: `url(${ABOUT_CTA.background})` }
            : undefined
        }
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Left image */}
      <div
        className="pointer-events-none absolute inset-y-0 -left-[6%] hidden w-[38%] md:block lg:-left-[8%] lg:w-[32%]"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
        }}
      >
        <Image
          src={ABOUT_CTA.sideImage}
          alt={ABOUT_CTA.sideImageAlt}
          fill
          className="object-contain object-left"
          sizes="38vw"
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center md:py-14 lg:py-16">
        <h2 className="font-display text-[18px] font-extralight uppercase tracking-[0.14em] text-white/95 md:text-[24px] md:tracking-[0.16em] lg:text-[27px]">
          {ABOUT_CTA.headline}
        </h2>

        <p className="mt-3 font-display text-[11px] font-extralight uppercase tracking-[0.28em] text-white/65 md:mt-4 md:text-[13px] md:tracking-[0.32em]">
          {ABOUT_CTA.sub}
        </p>

        <a
          href={ABOUT_CTA.ctaHref}
          className="group mt-8 inline-flex items-center gap-3 border border-[#b89b62]/55 px-8 py-3.5 transition-colors duration-500 hover:border-[#b89b62] hover:bg-[#b89b62]/10 md:mt-9 md:px-10"
        >
          <span className="font-display text-[9px] font-normal uppercase tracking-[0.26em] text-[#d8c79b] md:text-[10px]">
            {ABOUT_CTA.cta}
          </span>
          <span className="h-3 w-px bg-[#b89b62]/40" />
          <ChevronIcon />
        </a>
      </div>
    </section>
  );
}
