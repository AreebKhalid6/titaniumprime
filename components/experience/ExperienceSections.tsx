import { EXPERIENCE_SECTIONS } from "@/lib/experience";
import ExperiencePageHero from "@/components/experience/ExperiencePageHero";
import PhilosophySection from "@/components/experience/PhilosophySection";
import ArrivalSection from "@/components/experience/ArrivalSection";
import RoomSection from "@/components/experience/RoomSection";
import ServiceSection from "@/components/experience/ServiceSection";
import SoundSection from "@/components/experience/SoundSection";
import ExperienceSignature from "@/components/experience/ExperienceSignature";

export default function ExperienceSections() {
  return (
    <>
      <ExperiencePageHero />

      {EXPERIENCE_SECTIONS.map((section) => {
        if (section.layout === "philosophy") return <PhilosophySection key={section.id} />;
        if (section.layout === "arrival") return <ArrivalSection key={section.id} />;
        if (section.layout === "room") return <RoomSection key={section.id} />;
        if (section.layout === "service") return <ServiceSection key={section.id} />;
        if (section.layout === "sound") return <SoundSection key={section.id} />;
        return null;
      })}

      <ExperienceSignature />
    </>
  );
}
