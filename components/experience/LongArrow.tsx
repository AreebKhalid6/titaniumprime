export default function LongArrow({ className = "text-white/70" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
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
