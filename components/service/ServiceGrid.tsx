"use client";

import { motion } from "framer-motion";
import { SERVICE_GRID } from "@/lib/service";
import FallbackImage from "../shared/FallbackImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceGrid() {
  return (
    <section id="service-grid" className="w-full bg-[#050505]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICE_GRID.map((cell, i) => (
          <motion.div
            key={cell.type === "image" ? cell.src : cell.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease }}
            className={
              cell.type === "image"
                ? "group relative aspect-[4/3] w-full overflow-hidden bg-[#0b0b0b]"
                : "flex aspect-[4/3] w-full flex-col justify-center border border-white/[0.06] bg-[#0a0a0a] px-6 py-8 md:px-8"
            }
          >
            {cell.type === "image" ? (
              <FallbackImage
                src={cell.src}
                alt={cell.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
            ) : (
              <>
                <h3 className="font-display text-[11px] font-normal uppercase leading-[1.5] tracking-[0.24em] text-white md:text-[12px]">
                  {cell.title}
                </h3>

                <div className="mt-5">
                  {cell.lines.map((line, li) =>
                    line === "" ? (
                      <span key={`gap-${li}`} className="block h-3" />
                    ) : (
                      <p
                        key={line}
                        className="text-[11px] font-light leading-[1.9] text-[#8b8b8b] md:text-[11.5px]"
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
