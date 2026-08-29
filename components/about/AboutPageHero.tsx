import { ABOUT_HERO } from "@/lib/about";
import AboutContainer from "./AboutContainer";

export default function AboutPageHero() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black">
      {/* Full-width background */}
      <div
        className="absolute inset-0 bg-black bg-no-repeat"
        style={
          ABOUT_HERO.image
            ? {
                backgroundImage: `url(${ABOUT_HERO.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }
            : undefined
        }
        role="img"
        aria-label={ABOUT_HERO.imageAlt}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />

      {/* Content */}
      <AboutContainer className="relative z-10 flex min-h-[58svh] flex-col justify-center px-6 pb-16 pt-[108px] md:min-h-[62svh] md:px-10 md:pt-[120px] lg:min-h-[68svh] lg:px-12 lg:pt-[128px]">
        <div className="max-w-[460px]">
          <p className="font-display text-[9px] font-light uppercase tracking-[0.42em] text-[#b89b62] md:text-[10px] md:tracking-[0.46em]">
            {ABOUT_HERO.label}
          </p>

          <h1 className="mt-6 font-display text-[28px] font-extralight uppercase leading-[1.14] tracking-[0.03em] text-white/92 md:mt-7 md:text-[36px] lg:text-[42px] xl:text-[46px]">
            {ABOUT_HERO.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-9 h-px w-[88px] bg-[#b89b62]/45 md:mt-10 md:w-[104px]" />

          <p className="mt-7 max-w-[380px] text-[12px] font-light leading-[1.95] text-[#a1a1a1] md:mt-8 md:text-[13px]">
            {ABOUT_HERO.body}
          </p>
        </div>
      </AboutContainer>
    </section>
  );
}
