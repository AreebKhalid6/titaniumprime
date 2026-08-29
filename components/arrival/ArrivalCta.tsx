"use client";

import { motion } from "framer-motion";
import { ARRIVAL_CTA } from "@/lib/arrival";
import ArrivalImage from "./ArrivalImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArrivalCta() {
  return (
    <section
      id="arrival-cta"
      className="relative w-full overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0">
        <ArrivalImage
          src={ARRIVAL_CTA.background}
          alt=""
          className="object-cover object-center opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:py-20"
      >
        <h2 className="font-display text-[16px] font-extralight uppercase leading-[1.6] tracking-[0.14em] text-white md:text-[22px] md:tracking-[0.16em]">
          {ARRIVAL_CTA.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <a
          href={ARRIVAL_CTA.ctaHref}
          className="group mt-9 inline-flex items-center gap-3 border border-[#b89b62]/55 px-8 py-3.5 transition-colors duration-500 hover:border-[#b89b62] hover:bg-[#b89b62]/10 md:px-10"
        >
          <span className="font-display text-[9px] font-normal uppercase tracking-[0.26em] text-[#d8c79b] md:text-[10px]">
            {ARRIVAL_CTA.cta}
          </span>
          <span className="h-3 w-px bg-[#b89b62]/40" />
          <span className="text-[10px] text-[#b89b62] transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
