import { ABOUT_VALUES } from "@/lib/about";
import AboutContainer from "./AboutContainer";
import {
  CirclesIcon,
  CrownIcon,
  DiamondIcon,
  FlameIcon,
  StarIcon,
} from "./AboutValueIcons";

const ICONS = {
  diamond: DiamondIcon,
  flame: FlameIcon,
  circles: CirclesIcon,
  crown: CrownIcon,
  star: StarIcon,
} as const;

export default function AboutValues() {
  return (
    <section id="values" className="relative w-full bg-black">
      <AboutContainer className="px-6 py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          {ABOUT_VALUES.map((value, i) => {
            const Icon = ICONS[value.icon];

            return (
              <div
                key={value.title}
                className={`flex flex-col items-center px-4 text-center md:px-6 ${
                  i > 0 ? "lg:border-l lg:border-white/[0.08]" : ""
                }`}
              >
                <Icon className="text-[#b89b62]" />

                <h3 className="font-display mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-white md:mt-7 md:text-[11px] md:tracking-[0.3em]">
                  {value.title}
                </h3>

                <div className="mt-4 space-y-1 md:mt-5">
                  {value.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[11.5px] font-light leading-[1.8] text-[#8f8f8f] md:text-[12px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </AboutContainer>
    </section>
  );
}
