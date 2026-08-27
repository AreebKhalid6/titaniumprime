import { EXPERIENCE_SECTIONS } from "@/lib/experience";
import ExperienceSplitLayout from "./ExperienceSplitLayout";
import SectionLink from "./SectionLink";

const service = EXPERIENCE_SECTIONS[3];

export default function ServiceSection() {
  return (
    <ExperienceSplitLayout
      id={service.id}
      textWidth="half"
      image={service.image}
      imageAlt={service.imageAlt}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[13px] font-light tracking-[0.1em] text-tp-champagne md:text-[14px]">
          {service.num}
        </span>
        <h2 className="font-display text-[13px] font-light uppercase tracking-[0.34em] text-[#8a8a8a] md:text-[15px] md:tracking-[0.38em]">
          {service.title}
        </h2>
      </div>

      <p className="mt-6 max-w-[400px] text-[13px] font-light leading-[1.9] text-white/90 md:mt-8 md:max-w-[440px] md:text-[14px] md:leading-[2]">
        {service.body}
      </p>

      <SectionLink href={service.ctaHref} variant="gold">
        {service.cta}
      </SectionLink>
    </ExperienceSplitLayout>
  );
}
