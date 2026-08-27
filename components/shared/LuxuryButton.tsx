"use client";

import { type ReactNode } from "react";

interface LuxuryButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "outline" | "ghost" | "fill";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function LuxuryButton({
  children,
  href = "#",
  variant = "outline",
  icon,
  className = "",
  onClick,
}: LuxuryButtonProps) {
  const base =
    "group inline-flex items-center gap-3 font-display text-[10px] font-light uppercase tracking-[0.2em] transition-all duration-500 md:text-[11px]";

  const variants = {
    outline:
      "border border-tp-titanium/40 bg-transparent px-8 py-4 text-tp-titanium hover:border-tp-metal hover:bg-tp-titanium/10 hover:text-tp-metal",
    ghost:
      "px-2 py-2 text-tp-titanium hover:text-tp-metal line-reveal",
    fill:
      "border border-tp-titanium/30 bg-tp-carbon px-8 py-4 text-tp-metal hover:bg-tp-titanium hover:text-tp-black",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
        {icon}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
      {icon}
    </a>
  );
}
