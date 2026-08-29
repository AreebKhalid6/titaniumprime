import { ABOUT_MISSION } from "@/lib/about";
import AboutContainer from "./AboutContainer";

export default function AboutMission() {
  return (
    <section id="mission" className="relative w-full overflow-hidden bg-black">
      {/* Full-width background */}
      <div
        className="absolute inset-0 bg-[#0a0a0a] bg-no-repeat"
        style={
          ABOUT_MISSION.image
            ? {
                backgroundImage: `url(${ABOUT_MISSION.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }
            : undefined
        }
        role="img"
        aria-label={ABOUT_MISSION.imageAlt}
      />
      {/* Content */}
      <AboutContainer className="relative z-10 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="max-w-[520px]">
          <p className="font-display text-[9px] font-light uppercase tracking-[0.42em] text-[#b89b62] md:text-[10px] md:tracking-[0.46em]">
            {ABOUT_MISSION.label}
          </p>

          <h2 className="mt-6 font-display text-[22px] font-extralight uppercase leading-[1.22] tracking-[0.03em] text-white/92 md:mt-7 md:text-[28px] lg:text-[30px] xl:text-[33px]">
            {ABOUT_MISSION.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-8 h-px w-[88px] bg-[#b89b62]/45 md:mt-9 md:w-[104px]" />

          <div className="mt-6 space-y-2 md:mt-7">
            {ABOUT_MISSION.lines.map((line) => (
              <p
                key={line}
                className="text-[12px] font-light leading-[1.85] text-[#a1a1a1] md:text-[12.5px]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </AboutContainer>
    </section>
  );
}
