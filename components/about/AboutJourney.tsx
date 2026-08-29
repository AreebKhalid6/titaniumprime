import { ABOUT_JOURNEY, ABOUT_JOURNEY_LABEL } from "@/lib/about";
import AboutContainer from "./AboutContainer";

export default function AboutJourney() {
  return (
    <section id="journey" className="relative w-full bg-black">
      <AboutContainer className="px-6 py-9 md:px-10 md:py-10 lg:px-12 lg:py-12">
        {/* Label */}
        <p className="text-center font-display text-[9px] font-light uppercase tracking-[0.44em] text-white/85 md:text-[10px] md:tracking-[0.48em]">
          {ABOUT_JOURNEY_LABEL}
        </p>

        {/* Timeline */}
        <div className="relative mt-6 md:mt-7">
          {/* Horizontal rail — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[5px] hidden h-px bg-white/[0.12] lg:block" />

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {ABOUT_JOURNEY.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center px-4 text-center md:px-5 ${
                  i > 0 ? "lg:border-l lg:border-white/[0.07]" : ""
                }`}
              >
                {/* Dot */}
                <span className="relative z-10 block h-[9px] w-[9px] rounded-full bg-[#b89b62] ring-4 ring-black md:h-[10px] md:w-[10px]" />

                <h3 className="font-display mt-4 text-[10px] font-medium uppercase tracking-[0.24em] text-white md:mt-5 md:text-[11px] md:tracking-[0.26em]">
                  {step.title}
                </h3>

                <div className="mt-3 space-y-1 md:mt-4">
                  {step.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[11.5px] font-light leading-[1.8] text-[#8f8f8f] md:text-[12px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AboutContainer>
    </section>
  );
}
