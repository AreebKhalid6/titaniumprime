"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MenuIcon } from "./shared/Icons";

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
          ? "glass-dark border-b border-tp-titanium/10"
          : "bg-transparent"
      }`}
    >
      <div className="relative flex h-[90px] items-center justify-between px-6 md:px-12 lg:px-16">
        <div className="flex flex-1 items-center">
          <Image
            src="/images/logo/sidelogo.png"
            alt="Titanium Prime"
            width={80}
            height={80}
            priority
            className="h-11 w-auto object-contain md:h-8"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/logo/mainlogo.png"
            alt="Titanium Prime"
            width={420}
            height={48}
            priority
            className="h-[26px] w-auto object-contain md:h-[30px] lg:h-[34px]"
          />
        </div>

        <div className="flex flex-1 items-center justify-end gap-6 md:gap-8">
          <a
            href="#private-list"
            className="font-display hidden text-[8px] font-light uppercase tracking-[0.18em] text-tp-titanium underline decoration-tp-titanium/60 underline-offset-[5px] transition-opacity hover:opacity-60 sm:block sm:text-[9px] md:text-[10px] md:tracking-[0.22em]"
          >
            Join the Private List
          </a>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
