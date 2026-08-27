"use client";

import { type ReactNode } from "react";
import ChromeDrawBorder from "./ChromeDrawBorder";

interface LuxuryButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "outline" | "ghost" | "fill";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  gradId?: string;
}

export default function LuxuryButton({
  children,
  href = "#",
  variant = "outline",
  icon,
  className = "",
  onClick,
  gradId = "luxury-btn-draw",
}: LuxuryButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 font-display text-[10px] font-light uppercase tracking-[0.2em] transition-all duration-500 md:text-[11px]";

  const variants = {
    outline:
      "border border-tp-titanium/30 bg-transparent px-8 py-4 text-tp-titanium hover:border-transparent hover:text-tp-metal",
    ghost: "px-2 py-2 text-tp-titanium hover:text-tp-metal line-reveal",
    fill:
      "border border-tp-titanium/30 bg-tp-carbon px-8 py-4 text-tp-metal hover:border-transparent hover:bg-tp-titanium/10 hover:text-tp-metal",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const showDraw = variant === "outline" || variant === "fill";

  const content = (
    <>
      {showDraw ? <ChromeDrawBorder gradId={gradId} /> : null}
      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
        {icon}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
