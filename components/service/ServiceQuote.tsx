"use client";

import { motion } from "framer-motion";
import { SERVICE_QUOTE } from "@/lib/service";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceQuote() {
  return (
    <section
      id="service-quote"
      className="relative w-full overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0">
        <FallbackImage
          src={SERVICE_QUOTE.background}
          alt=""
          className="object-cover object-center opacity-70"
        />
      </div>
      <div className="absolute inset-0 bg-black/45" />

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease }}
        className="relative z-10 flex flex-col items-center px-6 py-14 text-center md:py-16"
      >
        <span className="font-display text-[12px] leading-none text-[#b89b62]">
          &ldquo;&ldquo;
        </span>

        <p className="font-display mt-4 text-[17px] font-extralight uppercase leading-[1.6] tracking-[0.08em] text-white md:text-[23px] lg:text-[25px]">
          {SERVICE_QUOTE.lines.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i === SERVICE_QUOTE.lines.length - 1 && (
                <span className="text-[#b89b62]">&rdquo;</span>
              )}
            </span>
          ))}
        </p>

        <footer className="mt-6 flex items-center gap-3">
          <span className="h-px w-5 bg-[#b89b62]/60" />
          <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/55 md:text-[10px]">
            {SERVICE_QUOTE.attribution}
          </span>
          <span className="h-px w-5 bg-[#b89b62]/60" />
        </footer>

        <span className="font-display mt-4 text-[12px] leading-none text-[#b89b62]">
          &rdquo;&rdquo;
        </span>
      </motion.blockquote>
    </section>
  );
}
