"use client";

import { motion } from "framer-motion";
import { ARRIVAL_JOURNEY } from "@/lib/arrival";
import ArrivalImage from "./ArrivalImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArrivalJourney() {
  return (
    <section id="arrival-journey" className="w-full bg-[#050505]">
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-12 px-6 py-16 md:px-14 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] lg:gap-16 lg:px-24">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="lg:pt-6"
        >
          <p className="font-display text-[9px] uppercase tracking-[0.3em] text-white/40 md:text-[10px]">
            {ARRIVAL_JOURNEY.label}
          </p>

          <h2 className="font-display mt-6 text-[26px] font-extralight uppercase leading-[1.25] tracking-[0.1em] text-white md:text-[32px]">
            {ARRIVAL_JOURNEY.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-7 space-y-1">
            {ARRIVAL_JOURNEY.body.map((line) => (
              <p
                key={line}
                className="text-[12px] font-light leading-[1.9] text-[#8f8f8f] md:text-[12.5px]"
              >
                {line}
              </p>
            ))}
          </div>

          <a
            href={ARRIVAL_JOURNEY.ctaHref}
            className="group mt-9 inline-flex items-center gap-3 border-b border-white/25 pb-2 transition-colors duration-500 hover:border-[#b89b62]"
          >
            <span className="font-display text-[9px] uppercase tracking-[0.26em] text-white/90 md:text-[10px]">
              {ARRIVAL_JOURNEY.cta}
            </span>
            <span className="text-[10px] text-[#b89b62] transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Step cards */}
        <div className="grid grid-cols-2 gap-6 md:gap-7 lg:grid-cols-4">
          {ARRIVAL_JOURNEY.steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className="group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0b0b0b]">
                <ArrivalImage
                  src={step.image}
                  alt={step.title}
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 transition-colors duration-700 group-hover:bg-black/10" />
              </div>

              <p className="font-display mt-5 text-[9px] tracking-[0.22em] text-[#b89b62]">
                {step.num}
              </p>

              <h3 className="font-display mt-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white md:text-[11px]">
                {step.title}
              </h3>

              <p className="mt-3 text-[11.5px] font-light leading-[1.85] text-[#8b8b8b] md:text-[12px]">
                {step.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
