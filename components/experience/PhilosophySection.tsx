import { EXPERIENCE_SECTIONS } from "@/lib/experience";
import ExperienceSplitLayout from "./ExperienceSplitLayout";
import SectionLink from "./SectionLink";

const philosophy = EXPERIENCE_SECTIONS[0];

export default function PhilosophySection() {
  return (
    <ExperienceSplitLayout
      id={philosophy.id}
      textWidth="half"
      image={philosophy.image}
      imageAlt={philosophy.imageAlt}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[12px] font-light tracking-[0.1em] text-tp-champagne md:text-[13px]">
          {philosophy.num}
        </span>
        <h2 className="font-display text-[11px] font-light uppercase tracking-[0.34em] text-[#8a8a8a] md:text-[13px] md:tracking-[0.38em]">
          {philosophy.title}
        </h2>
      </div>

      <p className="mt-6 max-w-[400px] text-[13px] font-light leading-[1.9] text-white/90 md:mt-8 md:max-w-[440px] md:text-[14px] md:leading-[2]">
        {philosophy.body}
      </p>

      <SectionLink href={philosophy.ctaHref} variant="gold">
        {philosophy.cta}
      </SectionLink>
    </ExperienceSplitLayout>
  );
}
