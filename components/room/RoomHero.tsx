"use client";

import { motion } from "framer-motion";
import { ROOM_HERO } from "@/lib/room";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function RoomHero() {
  return (
    <section
      id="room-hero"
      className="relative w-full overflow-hidden bg-[#050505] pt-[80px] md:pt-[90px]"
    >
      <div className="relative min-h-[70vh] w-full md:min-h-[80vh]">
        <div className="absolute inset-0">
          <FallbackImage
            src={ROOM_HERO.image}
            alt={ROOM_HERO.imageAlt}
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/45 to-transparent md:via-[#050505]/30 md:via-40%" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 flex min-h-[70vh] items-center px-6 py-16 md:min-h-[80vh] md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="max-w-lg"
          >
            <p className="font-display text-[9px] uppercase tracking-[0.3em] text-[#b89b62] md:text-[10px]">
              {ROOM_HERO.breadcrumb[0]}
              <span className="text-white/35">
                {" "}
                / {ROOM_HERO.breadcrumb[1]} /{" "}
              </span>
              {ROOM_HERO.breadcrumb[2]}
            </p>

            <h1 className="font-display mt-6 text-[36px] font-extralight uppercase leading-[1.05] tracking-[0.12em] text-white md:text-[52px] md:tracking-[0.14em] lg:text-[58px]">
              {ROOM_HERO.title}
            </h1>

            <p className="font-display mt-6 text-[12px] font-light uppercase tracking-[0.26em] text-[#b89b62] md:text-[13px]">
              {ROOM_HERO.subhead}
            </p>

            <div className="mt-7 space-y-1">
              {ROOM_HERO.body.map((line) => (
                <p
                  key={line}
                  className="text-[12px] font-light leading-[1.9] text-[#9a9a9a] md:text-[12.5px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <a
              href={ROOM_HERO.ctaHref}
              className="group mt-10 inline-flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 transition-colors duration-500 group-hover:border-[#b89b62]">
                <svg
                  viewBox="0 0 12 14"
                  fill="currentColor"
                  aria-hidden
                  className="ml-0.5 h-2.5 w-2.5 text-white transition-colors duration-500 group-hover:text-[#b89b62]"
                >
                  <path d="M0 0l12 7-12 7V0Z" />
                </svg>
              </span>
              <span className="font-display text-[9px] uppercase tracking-[0.24em] text-white md:text-[10px]">
                {ROOM_HERO.cta}
              </span>
              <span className="text-[10px] text-[#b89b62] transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
