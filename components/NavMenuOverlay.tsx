"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MAIN_LOGO = "/images/logo/mainlogo.png";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Experience", href: "/the-experience" },
  { label: "The Arrival", href: "/the-arrival" },
] as const;

type NavMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavMenuOverlay({ open, onClose }: NavMenuOverlayProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#050505]/[0.97] backdrop-blur-md"
        >
          {/* Top bar */}
          <div className="relative flex h-[80px] shrink-0 items-center justify-between px-4 md:h-[90px] md:px-12 lg:px-16">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="group flex h-11 w-11 cursor-pointer items-center justify-center text-white/80 transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden
                className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90"
              >
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>

            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={MAIN_LOGO}
                alt="Titanium Prime"
                width={420}
                height={48}
                className="h-[26px] w-auto object-contain opacity-90 md:h-[30px] lg:h-[34px]"
              />
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6 md:gap-8">
            {MENU_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group relative block text-center"
                >
                  <span className="font-display block text-[22px] font-extralight uppercase tracking-[0.3em] text-white/85 transition-colors duration-500 group-hover:text-white md:text-[30px] md:tracking-[0.34em] lg:text-[36px]">
                    {link.label}
                  </span>
                  <span className="mx-auto mt-3 block h-px w-0 bg-[#b89b62] transition-all duration-700 ease-out group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            <motion.a
              href="#newsletter"
              onClick={onClose}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + MENU_LINKS.length * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display mt-6 border border-[#b89b62]/50 px-9 py-3.5 text-[9px] font-normal uppercase tracking-[0.26em] text-[#d8c79b] transition-colors duration-500 hover:border-[#b89b62] hover:bg-[#b89b62]/10 md:mt-8 md:text-[10px]"
            >
              Join the Private List
            </motion.a>
          </nav>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex shrink-0 items-center justify-between px-4 pb-8 md:px-12 lg:px-16"
          >
            <p className="text-[9px] font-light uppercase tracking-[0.2em] text-white/35 md:text-[10px]">
              © Titanium Prime
            </p>
            <p className="text-[9px] font-light uppercase tracking-[0.2em] text-white/35 md:text-[10px]">
              Rare By Design
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
