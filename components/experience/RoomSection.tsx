import { EXPERIENCE_SECTIONS } from "@/lib/experience";
import ExperienceSplitLayout from "./ExperienceSplitLayout";
import SectionLink from "./SectionLink";

const room = EXPERIENCE_SECTIONS[2];

export default function RoomSection() {
  return (
    <ExperienceSplitLayout
      id={room.id}
      textWidth="narrow"
      image={room.image}
      imageAlt={room.imageAlt}
      imageClassName="min-h-[200px] md:min-h-[280px] lg:min-h-[360px]"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[12px] font-light tracking-[0.1em] text-tp-champagne md:text-[13px]">
          {room.num}
        </span>
        <h2 className="font-display text-[11px] font-light uppercase tracking-[0.34em] text-white/85 md:text-[13px] md:tracking-[0.38em]">
          {room.title}
        </h2>
      </div>

      <div className="mt-6 space-y-0.5 md:mt-8">
        {room.headline.map((line) => (
          <p
            key={line}
            className="font-display text-[28px] font-light uppercase leading-[1.08] tracking-[0.02em] text-white md:text-[34px] lg:text-[40px] xl:text-[44px]"
          >
            {line}
          </p>
        ))}
      </div>

      <SectionLink href={room.ctaHref} variant="gold">
        {room.cta}
      </SectionLink>
    </ExperienceSplitLayout>
  );
}
