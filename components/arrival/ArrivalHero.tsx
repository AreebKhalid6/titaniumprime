"use client";

import { motion } from "framer-motion";
import { ARRIVAL_HERO } from "@/lib/arrival";
import ArrivalImage from "./ArrivalImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArrivalHero() {
  return (
    <section
      id="arrival-hero"
      className="relative w-full overflow-hidden bg-[#050505] pt-[80px] md:pt-[90px]"
    >
      <div className="relative min-h-[86vh] w-full md:min-h-[92vh]">
        {/* Background image */}
        <div className="absolute inset-0">
          <ArrivalImage
            src={ARRIVAL_HERO.image}
            alt={ARRIVAL_HERO.imageAlt}
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic falloff toward the text column */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/45 to-transparent md:via-[#050505]/30 md:via-40%" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[86vh] items-center px-6 py-20 md:min-h-[92vh] md:px-14 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="max-w-xl"
          >
            <p className="font-display text-[9px] uppercase tracking-[0.3em] text-[#b89b62] md:text-[10px]">
              {ARRIVAL_HERO.breadcrumb[0]}{" "}
              <span className="text-white/35">
                / {ARRIVAL_HERO.breadcrumb[1]} /
              </span>{" "}
              {ARRIVAL_HERO.breadcrumb[2]}
            </p>

            <h1 className="font-display mt-6 text-[38px] font-extralight uppercase leading-[1.05] tracking-[0.14em] text-white md:text-[56px] md:tracking-[0.16em] lg:text-[64px]">
              {ARRIVAL_HERO.title}
            </h1>

            <span className="mt-6 block h-px w-14 bg-[#b89b62]" />

            <p className="font-display mt-7 text-[12px] font-light uppercase leading-[1.9] tracking-[0.2em] text-white/85 md:text-[13px]">
              {ARRIVAL_HERO.subhead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <div className="mt-7 space-y-1">
              {ARRIVAL_HERO.body.map((line) => (
                <p
                  key={line}
                  className="text-[12px] font-light leading-[1.9] text-[#9a9a9a] md:text-[13px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <a
              href={ARRIVAL_HERO.ctaHref}
              className="group mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-2 transition-colors duration-500 hover:border-[#b89b62]"
            >
              <span className="font-display text-[9px] font-normal uppercase tracking-[0.26em] text-white md:text-[10px]">
                {ARRIVAL_HERO.cta}
              </span>
              <span className="text-[10px] text-[#b89b62] transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2">
          <span className="font-display text-[8px] uppercase tracking-[0.34em] text-white/40">
            Scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
