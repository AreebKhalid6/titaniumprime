"use client";

import { motion } from "framer-motion";
import { ROOM_STATS } from "@/lib/room";
import {
  ChairStatIcon,
  CompassStatIcon,
  DiamondStatIcon,
  GlassStatIcon,
  LayersStatIcon,
} from "./RoomStatIcons";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  diamond: DiamondStatIcon,
  chair: ChairStatIcon,
  glass: GlassStatIcon,
  layers: LayersStatIcon,
  compass: CompassStatIcon,
} as const;

export default function RoomStats() {
  return (
    <section id="room-stats" className="w-full bg-[#0a0908]">
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-2 gap-y-10 px-6 py-12 sm:grid-cols-3 md:px-14 md:py-14 lg:grid-cols-5 lg:gap-y-0 lg:px-20">
        {ROOM_STATS.map((stat, i) => {
          const Icon = ICONS[stat.icon];

          return (
            <motion.div
              key={stat.value + stat.lines[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className={`flex flex-col items-center px-4 text-center ${
                i > 0 ? "lg:border-l lg:border-white/[0.08]" : ""
              }`}
            >
              <Icon className="text-[#b89b62]" />

              <p className="font-display mt-4 text-[20px] font-extralight tracking-[0.08em] text-white md:text-[24px]">
                {stat.value}
              </p>

              <div className="mt-2">
                {stat.lines.map((line) => (
                  <p
                    key={line}
                    className="font-display text-[8.5px] uppercase leading-[1.8] tracking-[0.2em] text-[#8b8b8b] md:text-[9px]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
