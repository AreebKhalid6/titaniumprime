"use client";

import { motion } from "framer-motion";
import { ROOM_INTRO } from "@/lib/room";

const ease = [0.22, 1, 0.36, 1] as const;

export default function RoomIntro() {
  return (
    <section id="room-intro" className="w-full bg-[#0a0908]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="mx-auto flex w-full max-w-[1450px] flex-col items-center px-6 py-12 text-center md:py-14"
      >
        <p className="font-display text-[9px] uppercase tracking-[0.34em] text-white/45 md:text-[10px]">
          {ROOM_INTRO.label}
        </p>

        <h2 className="font-display mt-5 text-[17px] font-extralight uppercase leading-[1.6] tracking-[0.08em] text-white md:text-[23px] lg:text-[25px]">
          {ROOM_INTRO.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <span className="mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#b89b62]/50" />
          <span className="block h-1.5 w-1.5 rotate-45 border border-[#b89b62]" />
          <span className="h-px w-10 bg-[#b89b62]/50" />
        </span>
      </motion.div>
    </section>
  );
}
