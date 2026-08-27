"use client";

import Image from "next/image";
import { DIVISIONS } from "@/lib/constants";

function ExploreArrow() {
  return (
    <svg
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-white/80"
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
    <section id="divisions" className="bg-black py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-5 lg:gap-5 lg:px-12 xl:gap-6 xl:px-16">
        {DIVISIONS.map((card) => (
          <article key={card.title} className="group flex flex-col">
            {/* Image placeholder — replace src in constants later */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111]">
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
            </div>

            {/* Number */}
            <span className="font-display mt-4 text-[28px] font-light leading-none tracking-[0.08em] text-[#b89b62] md:text-[32px]">
              {card.num}
            </span>

            {/* Title */}
            <h3 className="font-display mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white md:text-[14px]">
              {card.title}
            </h3>

            {/* Description */}
            <div className="mt-3 space-y-0">
              {card.lines.map((line) => (
                <p
                  key={line}
                  className="text-[11px] font-light leading-[1.65] text-white/85 md:text-[12px]"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Explore */}
            <a
              href={`#${card.title.toLowerCase()}`}
              className="mt-5 inline-flex items-center gap-2 font-display text-[9px] font-normal uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60 md:text-[10px]"
            >
              Explore
              <ExploreArrow />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
