import { EXPERIENCE_SECTIONS } from "@/lib/experience";
import ExperienceSplitLayout from "./ExperienceSplitLayout";
import SectionLink from "./SectionLink";

const arrival = EXPERIENCE_SECTIONS[1];

export default function ArrivalSection() {
  return (
    <ExperienceSplitLayout
      id={arrival.id}
      textWidth="narrow"
      image={arrival.image}
      imageAlt={arrival.imageAlt}
      imageClassName="min-h-[200px] md:min-h-[280px] lg:min-h-[360px]"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[12px] font-light tracking-[0.1em] text-tp-champagne md:text-[13px]">
          {arrival.num}
        </span>
        <h2 className="font-display text-[11px] font-light uppercase tracking-[0.34em] text-white/85 md:text-[13px] md:tracking-[0.38em]">
          {arrival.title}
        </h2>
      </div>

      <p className="mt-6 max-w-[280px] font-display text-[20px] font-extralight leading-[1.35] text-white/92 md:mt-8 md:max-w-[300px] md:text-[24px] lg:text-[26px] lg:leading-[1.3]">
        {arrival.body}
      </p>

      <SectionLink href={arrival.ctaHref} variant="gold">
        {arrival.cta}
      </SectionLink>
    </ExperienceSplitLayout>
  );
}
