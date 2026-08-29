"use client";

import { motion } from "framer-motion";
import { ARRIVAL_ATMOSPHERE } from "@/lib/arrival";
import ArrivalImage from "./ArrivalImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArrivalAtmosphere() {
  return (
    <section
      id="arrival-atmosphere"
      className="grid w-full grid-cols-1 bg-[#050505] lg:grid-cols-2"
    >
      {/* Image */}
      <div
        className="relative aspect-[16/11] w-full lg:aspect-auto lg:min-h-[520px]"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 70%, transparent 100%)",
        }}
      >
        <ArrivalImage
          src={ARRIVAL_ATMOSPHERE.image}
          alt={ARRIVAL_ATMOSPHERE.imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-20 lg:px-20"
      >
        <p className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40 md:text-[10px]">
          {ARRIVAL_ATMOSPHERE.label}
        </p>

        <h2 className="font-display mt-6 text-[26px] font-extralight uppercase leading-[1.25] tracking-[0.1em] text-white md:text-[32px]">
          {ARRIVAL_ATMOSPHERE.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-7 space-y-1">
          {ARRIVAL_ATMOSPHERE.body.map((line) => (
            <p
              key={line}
              className="text-[12px] font-light leading-[1.9] text-[#8f8f8f] md:text-[12.5px]"
            >
              {line}
            </p>
          ))}
        </div>

        <a
          href={ARRIVAL_ATMOSPHERE.ctaHref}
          className="group mt-10 flex flex-col items-center gap-3 self-center lg:self-start"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 transition-colors duration-500 group-hover:border-[#b89b62]">
            <svg
              viewBox="0 0 12 14"
              fill="currentColor"
              aria-hidden
              className="ml-0.5 h-3 w-3 text-white transition-colors duration-500 group-hover:text-[#b89b62]"
            >
              <path d="M0 0l12 7-12 7V0Z" />
            </svg>
          </span>
          <span className="font-display text-[8px] uppercase tracking-[0.26em] text-white/70 md:text-[9px]">
            {ARRIVAL_ATMOSPHERE.cta}
          </span>
        </a>
      </motion.div>
    </section>
  );
}
