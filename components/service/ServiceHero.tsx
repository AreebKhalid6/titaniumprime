"use client";

import { motion } from "framer-motion";
import { SERVICE_HERO } from "@/lib/service";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceHero() {
  return (
    <section
      id="service-hero"
      className="relative w-full overflow-hidden bg-[#050505] pt-[80px] md:pt-[90px]"
    >
      <div className="relative min-h-[70vh] w-full md:min-h-[78vh]">
        <div className="absolute inset-0">
          <FallbackImage
            src={SERVICE_HERO.image}
            alt={SERVICE_HERO.imageAlt}
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/45 to-transparent md:via-[#050505]/30 md:via-40%" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative z-10 flex min-h-[70vh] items-center px-6 py-16 md:min-h-[78vh] md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="max-w-xl"
          >
            <p className="font-display text-[9px] uppercase tracking-[0.3em] text-[#b89b62] md:text-[10px]">
              {SERVICE_HERO.breadcrumb[0]}
              <span className="text-white/35">
                {" "}
                / {SERVICE_HERO.breadcrumb[1]} /{" "}
              </span>
              {SERVICE_HERO.breadcrumb[2]}
            </p>

            <h1 className="font-display mt-6 text-[36px] font-extralight uppercase leading-[1.05] tracking-[0.12em] text-white md:text-[52px] md:tracking-[0.14em] lg:text-[58px]">
              {SERVICE_HERO.title}
            </h1>

            <p className="font-display mt-7 text-[12px] font-light uppercase leading-[1.9] tracking-[0.2em] text-white/85 md:text-[13px]">
              {SERVICE_HERO.subhead.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <div className="mt-8 space-y-1">
              {SERVICE_HERO.body.map((line) => (
                <p
                  key={line}
                  className="text-[12px] font-light leading-[1.9] text-[#9a9a9a] md:text-[12.5px]"
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
