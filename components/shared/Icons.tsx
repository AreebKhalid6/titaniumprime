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
      className="group flex h-3 w-5 cursor-pointer flex-col justify-between text-tp-metal"
    >
      <span className="block h-px w-full bg-current transition-opacity group-hover:opacity-50" />
      <span className="block h-px w-full bg-current transition-opacity group-hover:opacity-50" />
      <span className="block h-px w-full bg-current transition-opacity group-hover:opacity-50" />
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
