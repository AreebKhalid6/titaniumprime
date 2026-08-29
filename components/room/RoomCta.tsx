"use client";

import { motion } from "framer-motion";
import { ROOM_CTA } from "@/lib/room";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function RoomCta() {
  return (
    <section id="room-cta" className="relative w-full overflow-hidden bg-[#050505]">
      <div className="absolute inset-0">
        <FallbackImage
          src={ROOM_CTA.background}
          alt=""
          className="object-cover object-center opacity-55"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="relative z-10 flex flex-col items-center px-6 py-12 text-center md:py-14"
      >
        <p className="font-display text-[9px] uppercase tracking-[0.3em] text-white/45 md:text-[10px]">
          {ROOM_CTA.label}
        </p>

        <h2 className="font-display mt-5 text-[18px] font-extralight uppercase leading-[1.55] tracking-[0.14em] text-white md:text-[24px] md:tracking-[0.16em]">
          {ROOM_CTA.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <a
          href={ROOM_CTA.ctaHref}
          className="group mt-8 inline-flex items-center gap-3 border border-[#b89b62]/55 px-8 py-3.5 transition-colors duration-500 hover:border-[#b89b62] hover:bg-[#b89b62]/10 md:px-10"
        >
          <span className="font-display text-[9px] font-normal uppercase tracking-[0.26em] text-[#d8c79b] md:text-[10px]">
            {ROOM_CTA.cta}
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
