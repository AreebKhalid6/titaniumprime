"use client";

import Image from "next/image";
import { DIVISIONS } from "@/lib/constants";
import ChromeDrawBorder from "./shared/ChromeDrawBorder";

function ExploreArrow() {
  return (
    <svg
      width="18"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 4H16M16 4L12 1M16 4L12 7"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function DivisionCards() {
  return (
    <section id="divisions" className="bg-black py-10 md:py-14 lg:py-16">
      <div className="grid grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 md:px-10 lg:grid-cols-5 lg:gap-6 lg:px-12 xl:gap-8 xl:px-16">
        {DIVISIONS.map((card) => (
          <article
            key={card.title}
            className="group relative flex flex-col rounded-[4px] p-2.5 md:p-3"
          >
            <ChromeDrawBorder gradId={`chrome-border-${card.num}`} />

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[4px] bg-[#111]">
              {card.image ? (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[#0a0a0a]" />
              )}
              <span className="metallic-gold font-display pointer-events-none absolute bottom-2 left-2.5 z-10 text-[28px] font-semibold leading-none tracking-[0.06em] md:bottom-3 md:left-3 md:text-[32px]">
                {card.num}
              </span>
            </div>

            <h3 className="font-display mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white md:mt-5 md:text-[14px]">
              {card.title}
            </h3>

            <div className="mt-2.5">
              {card.lines.map((line) => (
                <p
                  key={line}
                  className="division-desc-text text-[11px] font-light leading-[1.7] md:text-[12px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <a
              href={`#${card.title.toLowerCase()}`}
              className="relative mt-5 inline-flex w-fit items-center gap-2 px-2 py-1.5 font-display text-[9px] font-normal uppercase tracking-[0.2em] text-[#c09e6b] md:mt-6 md:text-[10px]"
            >
              <ChromeDrawBorder gradId={`explore-draw-${card.num}`} />
              <span className="relative z-10 inline-flex items-center gap-2 underline decoration-[#c09e6b]/70 underline-offset-[5px]">
                Explore
                <ExploreArrow />
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
