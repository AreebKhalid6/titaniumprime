"use client";

import { motion } from "framer-motion";
import { SERVICE_PHILOSOPHY } from "@/lib/service";
import { CompassIcon, EyeIcon, LockIcon, PersonIcon } from "./ServiceIcons";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS = {
  eye: EyeIcon,
  lock: LockIcon,
  person: PersonIcon,
  compass: CompassIcon,
} as const;

export default function ServicePhilosophy() {
  return (
    <section id="service-philosophy" className="w-full bg-[#0a0908]">
      <div className="mx-auto w-full max-w-[1450px] px-6 py-14 md:px-14 md:py-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-display text-[9px] uppercase tracking-[0.32em] text-white/45 md:text-[10px]">
            {SERVICE_PHILOSOPHY.label}
          </p>

          <h2 className="font-display mt-6 text-[18px] font-extralight uppercase leading-[1.6] tracking-[0.1em] text-white md:text-[24px] lg:text-[26px]">
            {SERVICE_PHILOSOPHY.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <span className="mt-8 block h-px w-16 bg-white/20" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {SERVICE_PHILOSOPHY.pillars.map((pillar, i) => {
            const Icon = ICONS[pillar.icon];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.09, ease }}
                className={`flex flex-col items-center px-6 text-center ${
                  i > 0 ? "lg:border-l lg:border-white/[0.08]" : ""
                }`}
              >
                <Icon className="text-[#b89b62]" />

                <h3 className="font-display mt-5 text-[10px] font-medium uppercase tracking-[0.26em] text-white md:text-[11px]">
                  {pillar.title}
                </h3>

                <div className="mt-4">
                  {pillar.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[11px] font-light leading-[1.85] text-[#8b8b8b] md:text-[11.5px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
