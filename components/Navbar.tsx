"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { MenuIcon } from "./shared/Icons";

const SIDE_LOGO = "/images/logo/sidelogo.png";
const MAIN_LOGO = "/images/logo/mainlogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        scrolled
          ? "glass-dark"
          : "bg-gradient-to-b from-black/75 via-black/45 to-transparent"
      }`}
    >
      <div className="relative flex h-[80px] items-center justify-between px-4 md:h-[90px] md:px-12 lg:px-16">
        <div className="flex min-w-0 flex-1 items-center">
          <div
            className="chrome-shine relative"
            style={
              {
                ["--shine-mask"]: `url(${SIDE_LOGO})`,
              } as CSSProperties
            }
          >
            <Image
              src={SIDE_LOGO}
              alt="Titanium Prime"
              width={80}
              height={80}
              priority
              className="relative z-0 h-8 w-auto object-contain md:h-8"
            />
            <span className="chrome-shine-glint" aria-hidden />
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 max-w-[52%] -translate-x-1/2 -translate-y-1/2 sm:max-w-none">
          <div
            className="chrome-shine relative"
            style={
              {
                ["--shine-mask"]: `url(${MAIN_LOGO})`,
              } as CSSProperties
            }
          >
            <Image
              src={MAIN_LOGO}
              alt="Titanium Prime"
              width={420}
              height={48}
              priority
              className="relative z-0 h-[26px] w-auto object-contain md:h-[30px] lg:h-[34px]"
            />
            <span className="chrome-shine-glint" aria-hidden />
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-6 md:gap-8">
          <a
            href="#newsletter"
            className="font-display hidden text-[9px] font-light uppercase tracking-[0.18em] text-white underline decoration-white/70 underline-offset-[4px] transition-opacity hover:opacity-60 sm:inline sm:text-[9px] md:text-[10px] md:tracking-[0.22em]"
          >
            Join the Private List
          </a>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
