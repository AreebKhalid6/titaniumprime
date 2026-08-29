"use client";

import { motion } from "framer-motion";
import { SERVICE_CTA } from "@/lib/service";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceCta() {
  return (
    <section
      id="service-cta"
      className="relative w-full overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0">
        <FallbackImage
          src={SERVICE_CTA.background}
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
        className="relative z-10 flex flex-col items-center px-6 py-14 text-center md:py-16"
      >
        <h2 className="font-display text-[19px] font-extralight uppercase tracking-[0.16em] text-white md:text-[26px] md:tracking-[0.18em]">
          {SERVICE_CTA.headline}
        </h2>

        <p className="font-display mt-4 text-[11px] font-extralight uppercase tracking-[0.3em] text-white/65 md:text-[13px] md:tracking-[0.34em]">
          {SERVICE_CTA.sub}
        </p>

        <a
          href={SERVICE_CTA.ctaHref}
          className="group mt-8 inline-flex items-center gap-3 border border-[#b89b62]/55 px-8 py-3.5 transition-colors duration-500 hover:border-[#b89b62] hover:bg-[#b89b62]/10 md:mt-9 md:px-10"
        >
          <span className="font-display text-[9px] font-normal uppercase tracking-[0.26em] text-[#d8c79b] md:text-[10px]">
            {SERVICE_CTA.cta}
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
