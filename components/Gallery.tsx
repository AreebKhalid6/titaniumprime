"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import FadeIn from "./shared/FadeIn";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-tp-black py-20 md:py-28">
      <FadeIn className="mb-12 px-6 text-center md:px-12">
        <p className="font-display text-[9px] font-light uppercase tracking-[0.3em] text-tp-champagne">
          Social
        </p>
        <h2 className="font-display mt-4 text-2xl font-light uppercase tracking-[0.15em] text-tp-metal md:text-3xl">
          Follow the World
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6">
        {IMAGES.gallery.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={src}
              alt={`Titanium Prime gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 16vw"
            />
            <div className="absolute inset-0 bg-tp-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      <FadeIn className="mt-10 flex justify-center gap-8 px-6">
        {["Instagram", "YouTube", "TikTok"].map((platform) => (
          <a
            key={platform}
            href="#"
            className="font-display text-[9px] font-light uppercase tracking-[0.2em] text-tp-titanium transition-colors hover:text-tp-champagne"
          >
            {platform}
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
