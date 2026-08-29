"use client";

import { motion } from "framer-motion";
import { ARRIVAL_QUOTE } from "@/lib/arrival";
import ArrivalImage from "./ArrivalImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArrivalQuote() {
  return (
    <section
      id="arrival-quote"
      className="grid w-full grid-cols-1 bg-[#050505] lg:grid-cols-2"
    >
      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="flex flex-col justify-center px-6 py-10 md:px-14 md:py-12 lg:px-20"
      >
        <p className="font-display relative text-[20px] font-extralight uppercase leading-[1.45] tracking-[0.06em] text-white/95 md:text-[28px] lg:text-[32px]">
          <span className="absolute -left-1 -top-1 text-[26px] leading-none text-[#b89b62] md:-left-2 md:text-[34px]">
            &ldquo;
          </span>
          {ARRIVAL_QUOTE.lines.map((line, i) => (
            <span
              key={line}
              className="block"
              style={{ paddingLeft: `${i * 2.2}rem` }}
            >
              {line}
              {i === ARRIVAL_QUOTE.lines.length - 1 && (
                <span className="ml-1 align-top text-[16px] text-[#b89b62] md:text-[20px]">
                  &rdquo;
                </span>
              )}
            </span>
          ))}
        </p>

        <footer className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-[#b89b62]/60" />
          <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/50 md:text-[10px]">
            {ARRIVAL_QUOTE.attribution}
          </span>
          <span className="h-px w-6 bg-[#b89b62]/60" />
        </footer>
      </motion.blockquote>

      {/* Still */}
      <div className="group relative aspect-[16/9] w-full overflow-hidden lg:aspect-auto lg:min-h-[300px]">
        <ArrivalImage
          src={ARRIVAL_QUOTE.image}
          alt={ARRIVAL_QUOTE.imageAlt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
      </div>
    </section>
  );
}
