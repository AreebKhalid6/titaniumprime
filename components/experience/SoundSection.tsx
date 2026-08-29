import { EXPERIENCE_SECTIONS } from "@/lib/experience";
import ExperienceSplitLayout from "./ExperienceSplitLayout";
import SectionLink from "./SectionLink";

const sound = EXPERIENCE_SECTIONS[4];

export default function SoundSection() {
  return (
    <ExperienceSplitLayout
      id={sound.id}
      textWidth="narrow"
      image={sound.image}
      imageAlt={sound.imageAlt}
      imageClassName="min-h-[200px] md:min-h-[280px] lg:min-h-[360px]"
      overlayClassName="bg-black/25"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[13px] font-light tracking-[0.1em] text-tp-champagne md:text-[14px]">
          {sound.num}
        </span>
        <h2 className="font-display text-[13px] font-light uppercase tracking-[0.34em] text-[#8a8a8a] md:text-[15px] md:tracking-[0.38em]">
          {sound.title}
        </h2>
      </div>

      <p className="mt-6 max-w-[400px] text-[13px] font-light leading-[1.9] text-white/90 md:mt-8 md:max-w-[440px] md:text-[14px] md:leading-[2]">
        {sound.body}
      </p>

      <SectionLink href={sound.ctaHref} variant="gold">
        {sound.cta}
      </SectionLink>
    </ExperienceSplitLayout>
  );
}
