import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoomHero from "@/components/room/RoomHero";
import RoomIntro from "@/components/room/RoomIntro";
import RoomGrid from "@/components/room/RoomGrid";
import RoomQuote from "@/components/room/RoomQuote";
import RoomStats from "@/components/room/RoomStats";
import RoomCta from "@/components/room/RoomCta";

export const metadata: Metadata = {
  title: "The Room | Titanium Prime",
  description:
    "Steel. Stone. Light. A space designed to be felt — architecture that speaks without words.",
};

export default function TheRoomPage() {
  return (
    <main className="overflow-x-hidden bg-tp-black">
      <Navbar />
      <RoomHero />
      <RoomIntro />
      <RoomGrid />
      <RoomQuote />
      <RoomStats />
      <RoomCta />
      <Footer />
    </main>
  );
}
