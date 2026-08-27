"use client";

import Image from "next/image";
import { useState } from "react";
import { CITIES } from "@/lib/constants";

const NAV_COLS = [
  ["Steakhouse", "Private", "Nights"],
  ["Media", "Goods", "Locations"],
  ["About", "Careers", "Contact"],
] as const;

function ThinArrow() {
  return (
    <svg
      width="18"
      height="8"
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 4H14M14 4L10 1M14 4L10 7"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="square"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 9.5L15.5 12L10 14.5V9.5Z" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 3c.4 2.2 1.8 3.8 4 4.2v2.6c-1.5-.1-2.9-.6-4-1.5v6.4c0 3.3-2.6 5.8-5.8 5.8S5 17.9 5 14.7c0-3.1 2.4-5.6 5.5-5.8v2.7c-1.5.2-2.7 1.5-2.7 3.1 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3h2.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.9 3H21.5l-7.2 8.2L22.5 21h-6.2l-4.9-6.4L5.8 21H3.2l7.7-8.8L1.5 3h6.4l4.4 5.8L18.9 3zm-1.1 16.2h1.7L6.3 4.7H4.5l13.3 14.5z" />
    </svg>
  );
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="newsletter" className="relative overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{ backgroundImage: GRAIN }}
      />

      {/* Newsletter + cities */}
      <div className="relative px-4 pb-14 pt-16 md:px-12 md:pb-24 md:pt-36 lg:px-16">
        <div className="mx-auto flex w-full max-w-[36rem] flex-col items-stretch text-center md:w-max md:max-w-none">
          <h2 className="metallic-text font-display text-[1.05rem] uppercase leading-[1.25] tracking-[0.08em] sm:text-[1.6rem] md:whitespace-nowrap md:text-[1.85rem] md:tracking-[0.16em] lg:text-[2.15rem] lg:tracking-[0.18em]">
            Be Part of the First Chapter
          </h2>

          <p className="mt-5 w-full text-[13px] font-light leading-relaxed text-[#c4c4c4] md:mt-6 md:text-[14px]">
          Join the Titanium Prime Private List for exclusive early access to original films, cultural events, private dining experiences.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="mt-8 flex w-full flex-col overflow-hidden rounded-[5px] border border-[#3d3d3d] sm:mt-12 sm:flex-row sm:items-stretch"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="min-w-0 flex-[2] border-0 bg-transparent px-6 py-4 text-[13px] font-light text-white outline-none placeholder:text-[#6a6a6a] sm:py-[17px]"
            />
            <button
              type="submit"
              className="shrink-0 border-t border-[#3d3d3d] bg-transparent px-7 py-4 font-display text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/[0.05] sm:border-t-0 sm:border-l sm:border-[#3d3d3d] sm:px-8 sm:py-[17px] md:text-[11px]"
            >
              Join the List
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 md:mt-20 md:gap-x-3">
          {CITIES.map((city, i) => (
            <span key={city} className="flex items-center gap-2 md:gap-3">
              {i > 0 && (
                <span className="text-[11px] text-[#8a8a8a]" aria-hidden>
                  ·
                </span>
              )}
              <span className="font-display text-[10px] font-normal uppercase tracking-[0.18em] text-[#d4d4d4] md:text-[11px] md:tracking-[0.2em]">
                {city}
              </span>
            </span>
          ))}
          <span className="flex items-center gap-2 md:gap-3">
            <span className="text-[11px] text-[#8a8a8a]" aria-hidden>
              ·
            </span>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 font-display text-[10px] font-normal uppercase tracking-[0.18em] text-[#d4d4d4] transition-opacity hover:opacity-70 md:text-[11px] md:tracking-[0.2em]"
            >
              Future Destinations
              <ThinArrow />
            </a>
          </span>
        </div>
      </div>

      {/* 3. Brand + nav + socials */}
      <div className="relative mx-4 border-t border-[#2a2a2a] px-0 py-10 md:mx-12 md:py-14 lg:mx-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex shrink-0 items-center gap-4">
            <Image
              src="/images/logo/sidelogo.png"
              alt="Titanium Prime"
              width={72}
              height={72}
              className="h-14 w-auto object-contain md:h-16"
            />
            <div className="flex flex-col leading-[1.15]">
              <span className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-white md:text-[16px]">
                Titanium
              </span>
              <span className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-white md:text-[16px]">
                Prime
              </span>
            </div>
          </div>

          <nav className="grid grid-cols-3 gap-x-4 sm:gap-x-14 md:gap-x-20">
            {NAV_COLS.map((col, i) => (
              <div key={i} className="flex flex-col gap-3.5">
                {col.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-display text-[9px] font-normal uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-60 md:text-[11px] md:tracking-[0.16em]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
            <p className="font-display text-[10px] font-normal uppercase tracking-[0.18em] text-white md:text-[11px]">
              Follow the World
            </p>
            <div className="flex items-center gap-5 text-white">
              <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-60">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-60">
                <YoutubeIcon />
              </a>
              <a href="#" aria-label="TikTok" className="transition-opacity hover:opacity-60">
                <TikTokIcon />
              </a>
              <a href="#" aria-label="X" className="transition-opacity hover:opacity-60">
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Legal bar */}
      <div className="relative mx-4 flex flex-col items-center gap-3 border-t border-[#2a2a2a] py-5 text-center md:mx-12 md:flex-row md:justify-between md:text-left lg:mx-16">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo/sidelogo.png"
            alt=""
            width={16}
            height={16}
            className="h-3.5 w-auto object-contain opacity-70"
          />
          <span className="font-display text-[9px] font-normal uppercase tracking-[0.18em] text-[#888]">
            Dreamit
          </span>
        </div>

        <p className="text-[9px] font-light uppercase tracking-[0.14em] text-[#777]">
          © 2026 Titanium Prime. All Rights Reserved.
        </p>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="font-display text-[9px] font-light uppercase tracking-[0.14em] text-[#888] transition-colors hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-display text-[9px] font-light uppercase tracking-[0.14em] text-[#888] transition-colors hover:text-white"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
