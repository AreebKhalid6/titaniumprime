import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CityBar from "@/components/CityBar";
import DivisionCards from "@/components/DivisionCards";
import ExperienceSection from "@/components/ExperienceSection";
import FilmSection from "@/components/FilmSection";
import VideoStrip from "@/components/VideoStrip";
import NightsSection from "@/components/NightsSection";
import PrivateSection from "@/components/PrivateSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-tp-black">
      <Navbar />
      <Hero />
      <CityBar />
      <DivisionCards />
      <ExperienceSection />
      <FilmSection />
      <VideoStrip />
      <NightsSection />
      <Footer />
    </main>
  );
}
