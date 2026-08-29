"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { IMAGES } from "@/lib/constants";
import { PlayIcon } from "./shared/Icons";
import HeroSmoke from "./HeroSmoke";
import DrawBorderBtn from "./shared/DrawBorderBtn";

const TAGLINE_WORDS = ["Dining.", "Culture.", "Power."] as const;

function TaglineTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "deleting">("typing");

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    const word = TAGLINE_WORDS[wordIndex];

    if (phase === "typing") {
      if (text.length < word.length) {
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          setText(word.slice(0, text.length + 1));
        }, 55);
      } else {
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          setPhase("hold");
        }, 650);
      }
    }

    if (phase === "hold") {
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        setPhase("deleting");
      }, 500);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          setText(text.slice(0, -1));
        }, 30);
      } else {
        timeoutId = setTimeout(() => {
          if (cancelled) return;
          setWordIndex((i) => (i + 1) % TAGLINE_WORDS.length);
          setPhase("typing");
        }, 120);
      }
    }

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [text, phase, wordIndex]);

  return (
    <p className="font-display min-h-[1.2em] text-[14px] font-light uppercase tracking-[0.28em] text-white/80 md:text-[16px] md:tracking-[0.34em]">
      {text}
    </p>
  );
}

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
      className="relative h-[75svh] min-h-[480px] overflow-hidden bg-black md:h-[100svh] md:min-h-[700px]"
    >
      {/* Video — right side */}
      <motion.div
        style={{ y }}
        className="absolute inset-y-0 right-0 w-[62%] sm:w-[58%] md:w-[54%] lg:w-[50%]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.hero}
          className="h-full w-full scale-105 object-cover object-center"
        >
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Black overlay — left side + fade into video */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black from-35% via-black/85 via-55% to-transparent to-85% sm:from-40% sm:via-50% md:from-45% md:via-55% md:to-80%" />

      {/* Left texture — subtle hex mesh, visible on black */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[62%] sm:w-[58%] md:w-[54%] lg:w-[50%]">
        <Image
          src={IMAGES.heroTexture}
          alt=""
          fill
          aria-hidden
          className="object-cover object-center opacity-[0.28] brightness-125 contrast-110 mix-blend-screen"
          sizes="55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
      </div>

      {/* Smoke from right — particle puffs */}
      <HeroSmoke />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-3 hidden md:left-4 md:block lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-6">
        <div className="flex flex-col items-center gap-3">
          <span
            className="font-display text-[11px] font-light uppercase tracking-[0.35em] text-white/50 md:text-[12px]"
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
        className="relative z-10 flex h-full items-center justify-start px-5 pt-[80px] md:px-14 md:pt-[90px] lg:px-20 xl:px-24"
      >
        <div className="w-full max-w-xl lg:max-w-2xl">
          <TaglineTypewriter />

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="chrome-shine mt-4 w-full max-w-[260px] md:mt-6 md:max-w-[440px] lg:max-w-[520px]"
            style={
              {
                ["--shine-mask"]: `url(${IMAGES.homeHeading})`,
              } as CSSProperties
            }
          >
            <Image
              src={IMAGES.homeHeading}
              alt="Rare By Design."
              width={1100}
              height={400}
              priority
              className="relative z-0 h-auto w-full mix-blend-screen"
            />
            <span className="chrome-shine-glint" aria-hidden />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-5 max-w-[420px] text-[12px] font-light leading-[1.75] text-white/55 md:mt-8 md:text-sm md:leading-[1.9]"
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
            <DrawBorderBtn
              href="#experience"
              gradId="hero-enter-btn"
              className="hero-ghost-btn font-display px-7 py-3.5 text-[10px] font-normal uppercase tracking-[0.22em] text-white md:text-[11px]"
            >
              Enter the Experience
            </DrawBorderBtn>

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
