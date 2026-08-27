"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import FadeIn from "./shared/FadeIn";
import LuxuryButton from "./shared/LuxuryButton";
import { ArrowIcon } from "./shared/Icons";

export default function NightsSection() {
  return (
    <section id="nights" className="relative min-h-[500px] overflow-hidden py-24 md:min-h-[600px] md:py-32">
      <Image
        src={IMAGES.nightsBg}
        alt="Concert and fashion event atmosphere"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-tp-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-tp-black/90 via-tp-black/70 to-transparent" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        <FadeIn className="max-w-2xl">
          <p className="font-display text-[9px] font-light uppercase tracking-[0.3em] text-tp-champagne">
            Titanium Prime Nights
          </p>
          <h2 className="font-display mt-6 text-4xl font-light uppercase leading-[1.1] tracking-[0.1em] text-tp-metal md:text-5xl lg:text-6xl">
            Culture Meets
            <br />
            The Table
          </h2>
          <p className="mt-8 max-w-lg text-sm font-light leading-[1.9] text-tp-body md:text-base">
            Private dinners. Iconic artists. Unforgettable moments. More than
            an event. It&apos;s a movement.
          </p>
          <div className="mt-10">
            <LuxuryButton href="#nights" icon={<ArrowIcon />}>
              Explore Nights
            </LuxuryButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
