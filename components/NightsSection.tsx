"use client";

import Image from "next/image";
import { IMAGES, NIGHTS_FEATURES } from "@/lib/constants";
import FadeIn from "./shared/FadeIn";
import {
  AccessHexIcon,
  ConciergeHexIcon,
  DiningHexIcon,
  EventsHexIcon,
  LineArrow,
} from "./shared/Icons";
import DrawBorderBtn from "./shared/DrawBorderBtn";

const FEATURE_ICONS = {
  access: AccessHexIcon,
  dining: DiningHexIcon,
  events: EventsHexIcon,
  concierge: ConciergeHexIcon,
} as const;

function FeatureList() {
  return (
    <>
      <ul className="space-y-5">
        {NIGHTS_FEATURES.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon];
          return (
            <li key={feature.title} className="flex items-start gap-3.5">
              <Icon className="mt-0.5 h-[26px] w-[26px] shrink-0 text-[#c4a46a]" />
              <div>
                <h3 className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[12px] font-light leading-relaxed text-white/55">
                  {feature.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <a
        href="#newsletter"
        className="mt-6 inline-flex items-center gap-2.5 font-display text-[10px] font-normal uppercase tracking-[0.2em] text-white underline decoration-white/80 underline-offset-[5px] transition-opacity hover:opacity-60"
      >
        Join the Private List
        <LineArrow className="h-2 w-5 text-white" />
      </a>
    </>
  );
}

export default function NightsSection() {
  return (
    <section
      id="nights"
      className="relative flex min-h-0 items-center overflow-hidden bg-black md:min-h-[400px] lg:min-h-[420px]"
    >
      {IMAGES.nightsBg ? (
        <div className="absolute inset-y-0 left-0 w-full opacity-40 sm:w-[58%] sm:opacity-100 lg:w-[50%]">
          <Image
            src={IMAGES.nightsBg}
            alt=""
            fill
            className="object-cover object-left"
            sizes="60vw"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-black" />
        </div>
      ) : null}

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 px-5 py-12 md:px-10 md:py-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:px-12 lg:py-8 xl:px-16">
        <div className="hidden lg:block" aria-hidden />

        <FadeIn className="flex flex-col items-center text-center">
          <p className="font-display text-[9px] font-light uppercase tracking-[0.42em] text-white md:text-[10px] md:tracking-[0.48em]">
            Titanium Prime Nights
          </p>

          <h2 className="metallic-text font-display mt-4 text-[1.5rem] font-normal uppercase leading-[1.15] tracking-[0.08em] md:mt-5 md:text-4xl md:tracking-[0.12em] lg:text-[2.75rem] xl:text-[3.25rem]">
            Culture Meets
            <br />
            The Table
          </h2>

          <p className="mt-4 max-w-[280px] text-[12px] font-light leading-[1.8] text-white/75 md:mt-5 md:max-w-none md:text-[14px]">
            intimate dinners. Iconic artists. Unforgettable moments.
            <br className="hidden sm:block" />{" "}
            More than an event, it&apos;s a movement.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 md:mt-7">
            <DrawBorderBtn
              href="#nights"
              gradId="nights-explore-btn"
              className="hero-ghost-btn font-display px-7 py-3 text-[10px] font-normal uppercase tracking-[0.22em] text-white md:px-8 md:py-3.5 md:text-[11px]"
            >
              Explore Nights
            </DrawBorderBtn>
            <LineArrow className="h-2 w-6 text-white" />
          </div>
        </FadeIn>

        <FadeIn
          delay={0.12}
          className="mx-auto w-full max-w-[280px] lg:mx-0 lg:ml-auto lg:w-auto lg:max-w-none lg:justify-self-end lg:pr-10 xl:pr-16"
        >
          <FeatureList />
        </FadeIn>
      </div>
    </section>
  );
}
