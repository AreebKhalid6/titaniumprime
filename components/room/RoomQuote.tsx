"use client";

import { motion } from "framer-motion";
import { ROOM_QUOTE } from "@/lib/room";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function RoomQuote() {
  return (
    <section
      id="room-quote"
      className="grid w-full grid-cols-1 bg-[#050505] lg:grid-cols-2"
    >
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="flex flex-col justify-center px-6 py-10 md:px-14 md:py-12 lg:px-20"
      >
        <p className="font-display relative text-[17px] font-extralight uppercase leading-[1.5] tracking-[0.06em] text-white/95 md:text-[23px] lg:text-[25px]">
          <span className="absolute -left-1 -top-1 text-[22px] leading-none text-[#b89b62] md:-left-2 md:text-[28px]">
            &ldquo;
          </span>
          {ROOM_QUOTE.lines.map((line, i) => (
            <span
              key={line}
              className="block"
              style={{ paddingLeft: `${i * 2}rem` }}
            >
              {line}
              {i === ROOM_QUOTE.lines.length - 1 && (
                <span className="ml-1 align-top text-[15px] text-[#b89b62] md:text-[18px]">
                  &rdquo;
                </span>
              )}
            </span>
          ))}
        </p>

        <footer className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-5 bg-[#b89b62]/60" />
          <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/55 md:text-[10px]">
            {ROOM_QUOTE.attribution}
          </span>
          <span className="h-px w-5 bg-[#b89b62]/60" />
        </footer>
      </motion.blockquote>

      <div
        className="group relative aspect-[16/9] w-full overflow-hidden lg:aspect-auto lg:min-h-[260px]"
        style={{
          maskImage:
            "linear-gradient(to left, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, black 70%, transparent 100%)",
        }}
      >
        <FallbackImage
          src={ROOM_QUOTE.image}
          alt={ROOM_QUOTE.imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
      </div>
    </section>
  );
}
