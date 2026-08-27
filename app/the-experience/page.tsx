import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceSections from "@/components/experience/ExperienceSections";

export const metadata: Metadata = {
  title: "The Experience | Titanium Prime",
  description:
    "A higher standard, made physical. Explore the philosophy, arrival, room, service, and sound of Titanium Prime.",
};

export default function TheExperiencePage() {
  return (
    <main className="overflow-x-hidden bg-tp-black">
      <Navbar />
      <ExperienceSections />
      <Footer />
    </main>
  );
}
