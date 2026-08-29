import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service/ServiceHero";
import ServicePhilosophy from "@/components/service/ServicePhilosophy";
import ServiceGrid from "@/components/service/ServiceGrid";
import ServiceQuote from "@/components/service/ServiceQuote";
import ServiceCta from "@/components/service/ServiceCta";

export const metadata: Metadata = {
  title: "The Service | Titanium Prime",
  description:
    "Hospitality is in the details. Anticipation without intrusion, discretion without distance, personalization without limits.",
};

export default function TheServicePage() {
  return (
    <main className="overflow-x-hidden bg-tp-black">
      <Navbar />
      <ServiceHero />
      <ServicePhilosophy />
      <ServiceGrid />
      <ServiceQuote />
      <ServiceCta />
      <Footer />
    </main>
  );
}
