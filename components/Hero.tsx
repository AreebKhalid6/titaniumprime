"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { IMAGES } from "@/lib/constants";
import { PlayIcon } from "./shared/Icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Cinematic luxury steak branding with fire"
          fill
          priority
          className="object-cover object-[72%_center] scale-105"
          sizes="100vw"
        />
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 hidden md:left-14 md:block lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-20">
        <div className="flex flex-col items-center gap-3">
          <span
            className="font-display text-[8px] font-light uppercase tracking-[0.35em] text-white/40"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ height: [0, 40, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-white/25"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full items-center px-8 pt-[90px] md:px-14 lg:px-20 xl:px-24"
      >
        <div className="w-full max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-[10px] font-light uppercase tracking-[0.32em] text-white/75 md:text-[11px] md:tracking-[0.38em]"
          >
            Dining. Culture. Power.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="metallic-heading font-display mt-5 text-[2.75rem] font-semibold uppercase leading-[1.02] tracking-[0.06em] md:mt-6 md:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Rare By
            <br />
            Design.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-7 max-w-[420px] text-[13px] font-light leading-[1.85] text-white/55 md:mt-8 md:text-sm md:leading-[1.9]"
          >
            A luxury hospitality and culture house where exceptional taste
            meets intentional experience. The first chapter is being written.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-9 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-8"
          >
            <a
              href="#experience"
              className="hero-ghost-btn font-display inline-flex items-center px-7 py-3.5 text-[10px] font-normal uppercase tracking-[0.22em] text-white md:text-[11px]"
            >
              Enter the Experience
            </a>

            <a
              href="#film"
              className="hero-film-link group inline-flex items-center gap-3 font-display text-[10px] font-light uppercase tracking-[0.22em] text-white md:text-[11px]"
            >
              Watch the Film
              <PlayIcon className="h-[18px] w-[18px] text-white/90 transition-transform group-hover:scale-110" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
