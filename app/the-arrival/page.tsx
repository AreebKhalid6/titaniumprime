import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrivalHero from "@/components/arrival/ArrivalHero";
import ArrivalJourney from "@/components/arrival/ArrivalJourney";
import ArrivalAtmosphere from "@/components/arrival/ArrivalAtmosphere";
import ArrivalQuote from "@/components/arrival/ArrivalQuote";
import ArrivalCta from "@/components/arrival/ArrivalCta";

export const metadata: Metadata = {
  title: "The Arrival | Titanium Prime",
  description:
    "The experience begins before the first course. Arrival is the opening chapter of the Titanium Prime story.",
};

export default function TheArrivalPage() {
  return (
    <main className="overflow-x-hidden bg-tp-black">
      <Navbar />
      <ArrivalHero />
      <ArrivalJourney />
      <ArrivalAtmosphere />
      <ArrivalQuote />
      <ArrivalCta />
      <Footer />
    </main>
  );
}
