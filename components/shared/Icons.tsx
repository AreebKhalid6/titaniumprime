import { type ReactNode } from "react";

export function Logo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Titanium Prime logo"
      role="img"
    >
      <path
        d="M4 4H24M14 4V24M14 4H22C25.3137 4 28 6.68629 28 10C28 13.3137 25.3137 16 22 16H14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="group flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center text-white"
    >
      <span className="flex h-3 w-5 flex-col justify-between">
        <span className="block h-px w-full bg-current transition-opacity group-hover:opacity-50" />
        <span className="block h-px w-full bg-current transition-opacity group-hover:opacity-50" />
        <span className="block h-px w-full bg-current transition-opacity group-hover:opacity-50" />
      </span>
    </button>
  );
}

export function PlayIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="0.75" />
      <path
        d="M8.5 6.5L13.5 10L8.5 13.5V6.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}

export function LineArrow({ className = "h-2 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 4H20M20 4L15 1M20 4L15 7"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="square"
      />
    </svg>
  );
}

const HEX_PATH = "M16 2.2 L27.5 8.8 L27.5 22.2 L16 28.8 L4.5 22.2 L4.5 8.8 Z";

function HexFrame({
  children,
  className = "h-7 w-7",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d={HEX_PATH} stroke="currentColor" strokeWidth="0.9" />
      {children}
    </svg>
  );
}

export function AccessHexIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <HexFrame className={className}>
      <circle cx="16" cy="13.2" r="2.3" stroke="currentColor" strokeWidth="0.9" />
      <path
        d="M11.8 21.2 C11.8 17.8 13.6 16.2 16 16.2 C18.4 16.2 20.2 17.8 20.2 21.2"
        stroke="currentColor"
        strokeWidth="0.9"
      />
    </HexFrame>
  );
}

export function DiningHexIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <HexFrame className={className}>
      <path
        d="M12.2 11.2 V20.6 M12.2 11.2 C13.6 13.2 13.6 15.2 12.2 16.4 M19.8 11.2 V20.6 M18.4 11.2 V16.2 C18.4 18 19.8 18 19.8 16.2"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="square"
      />
    </HexFrame>
  );
}

export function EventsHexIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <HexFrame className={className}>
      <circle cx="16" cy="12.4" r="1.7" stroke="currentColor" strokeWidth="0.85" />
      <circle cx="11.6" cy="13.4" r="1.4" stroke="currentColor" strokeWidth="0.85" />
      <circle cx="20.4" cy="13.4" r="1.4" stroke="currentColor" strokeWidth="0.85" />
      <path
        d="M13.4 21 C13.4 18.6 14.6 17.4 16 17.4 C17.4 17.4 18.6 18.6 18.6 21 M9.8 21 C9.8 19.2 10.6 18.2 11.6 18.2 M22.2 21 C22.2 19.2 21.4 18.2 20.4 18.2"
        stroke="currentColor"
        strokeWidth="0.85"
      />
    </HexFrame>
  );
}

export function ConciergeHexIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <HexFrame className={className}>
      <circle cx="16" cy="14.2" r="3.4" stroke="currentColor" strokeWidth="0.9" />
      <path
        d="M16 11.6 V14.2 H18.2"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="square"
      />
    </HexFrame>
  );
}
