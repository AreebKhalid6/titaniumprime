"use client";

import { motion } from "framer-motion";
import { ROOM_GRID } from "@/lib/room";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

const SPAN_CLASS: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
};

export default function RoomGrid() {
  return (
    <section id="room-grid" className="w-full bg-[#050505]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {ROOM_GRID.map((cell, i) => (
          <motion.div
            key={cell.type === "image" ? cell.src : cell.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.07, ease }}
            className={`${SPAN_CLASS[cell.span]} ${
              cell.type === "image"
                ? "group relative aspect-[4/3] w-full overflow-hidden bg-[#0b0b0b] lg:aspect-auto lg:min-h-[240px]"
                : "flex aspect-[4/3] w-full flex-col justify-center bg-[#080808] px-6 py-8 md:px-8 lg:aspect-auto lg:min-h-[240px]"
            }`}
          >
            {cell.type === "image" ? (
              <FallbackImage
                src={cell.src}
                alt={cell.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            ) : (
              <>
                <p className="font-display text-[9px] tracking-[0.24em] text-[#b89b62]">
                  {cell.num} /
                </p>

                <h3 className="font-display mt-2 text-[11px] font-normal uppercase tracking-[0.24em] text-white md:text-[12px]">
                  {cell.title}
                </h3>

                <div className="mt-4">
                  {cell.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[11px] font-light leading-[1.9] text-[#8b8b8b] md:text-[11.5px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <a
                  href={cell.ctaHref}
                  className="group/link mt-6 inline-flex items-center gap-2 self-start"
                >
                  <span className="font-display text-[9px] uppercase tracking-[0.24em] text-white/85 transition-colors duration-500 group-hover/link:text-white">
                    {cell.cta}
                  </span>
                  <span className="text-[10px] text-[#b89b62] transition-transform duration-500 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
