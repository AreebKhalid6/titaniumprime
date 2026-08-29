import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageHero from "@/components/about/AboutPageHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutMission from "@/components/about/AboutMission";
import AboutJourney from "@/components/about/AboutJourney";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Us | Titanium Prime",
  description:
    "More than dining. A movement. Titanium Prime is the intersection of culinary mastery, design, entertainment, and culture.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-tp-black">
      <Navbar />
      <AboutPageHero />
      <AboutStory />
      <AboutValues />
      <AboutMission />
      <AboutJourney />
      <AboutCta />
      <Footer />
    </main>
  );
}
