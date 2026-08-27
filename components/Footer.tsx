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
      className="text-[#888]"
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

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="newsletter" className="bg-black">
      {/* Newsletter — Be Part of the First Chapter */}
      <div className="relative overflow-hidden px-6 pb-12 pt-24 md:px-10 md:pb-14 md:pt-32 lg:px-14">
        {/* subtle grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display whitespace-nowrap text-[1.15rem] font-medium uppercase leading-[1.2] tracking-[0.1em] text-white sm:text-[1.45rem] md:text-[2rem] md:tracking-[0.14em] lg:text-[2.15rem] lg:tracking-[0.16em]">
            Be Part of the First Chapter
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[12px] font-light leading-relaxed text-[#9a9a9a] md:mt-4 md:text-[13px]">
            Join the Private List for early access to films, events, and
            experiences.
          </p>

          {/* Single bordered form bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="mx-auto mt-12 flex w-full max-w-[420px] flex-col border border-[#5a5a5a] sm:mt-14 sm:flex-row sm:items-stretch"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="min-w-0 flex-1 border-0 bg-transparent px-5 py-3.5 text-[13px] font-light text-white outline-none placeholder:text-[#6a6a6a] sm:py-4"
            />
            <div className="hidden w-px self-stretch bg-[#5a5a5a] sm:block" />
            <button
              type="submit"
              className="shrink-0 border-t border-[#5a5a5a] bg-transparent px-6 py-3.5 font-display text-[10px] font-normal uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/5 sm:border-t-0 sm:py-4 md:text-[11px]"
            >
              Join the List
            </button>
          </form>
        </div>

        {/* Cities row — full width */}
        <div className="relative mx-auto mt-20 flex w-full max-w-6xl flex-col items-center gap-5 md:mt-24 md:flex-row md:justify-between md:gap-8">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start md:gap-x-5 lg:gap-x-7">
            {CITIES.map((city, i) => (
              <span key={city} className="flex items-center gap-3 md:gap-5 lg:gap-7">
                {i > 0 && (
                  <span className="text-[10px] text-[#555]" aria-hidden>
                    •
                  </span>
                )}
                <span className="font-display text-[10px] font-light uppercase tracking-[0.22em] text-[#9a9a9a] md:text-[11px] md:tracking-[0.24em]">
                  {city}
                </span>
              </span>
            ))}
          </div>

          <a
            href="#newsletter"
            className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <span className="font-display text-[9px] font-light uppercase tracking-[0.2em] text-[#9a9a9a] md:text-[10px]">
              Future Destinations
            </span>
            <ThinArrow />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-[#222] md:mx-12 lg:mx-16" />

      {/* Main footer */}
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="flex shrink-0 items-center gap-3">
            <Image
              src="/images/logo/sidelogo.png"
              alt="Titanium Prime"
              width={36}
              height={36}
              className="h-8 w-auto object-contain md:h-9"
            />
            <Image
              src="/images/logo/mainlogo.png"
              alt="Titanium Prime"
              width={160}
              height={20}
              className="h-3 w-auto object-contain md:h-3.5"
            />
          </div>

          {/* Nav columns */}
          <nav className="grid grid-cols-3 gap-x-8 gap-y-3 sm:gap-x-12 md:gap-x-16">
            {NAV_COLS.map((col, i) => (
              <div key={i} className="flex flex-col gap-3">
                {col.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-display text-[10px] font-light uppercase tracking-[0.16em] text-[#aaa] transition-colors hover:text-white md:text-[11px]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          {/* Social + legal */}
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="font-display text-[10px] font-light uppercase tracking-[0.18em] text-white md:text-[11px]">
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
            <div className="mt-2 flex gap-5 lg:mt-6">
              <a
                href="#"
                className="font-display text-[8px] font-light uppercase tracking-[0.14em] text-[#666] transition-colors hover:text-[#aaa] md:text-[9px]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-display text-[8px] font-light uppercase tracking-[0.14em] text-[#666] transition-colors hover:text-[#aaa] md:text-[9px]"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1a1a1a] px-6 py-5 md:px-12 lg:px-16">
        <p className="text-center text-[9px] font-light uppercase tracking-[0.12em] text-[#555]">
          © 2024 Titanium Prime. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
