export default function ChromeDrawBorder({
  gradId,
  className = "",
}: {
  gradId: string;
  className?: string;
}) {
  return (
    <svg
      className={`chrome-draw-border pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#d0d4da" />
          <stop offset="50%" stopColor="#8a9098" />
          <stop offset="72%" stopColor="#f2f3f5" />
          <stop offset="100%" stopColor="#a8aeb6" />
        </linearGradient>
      </defs>
      <rect
        className="chrome-draw-path"
        x="0.6"
        y="0.6"
        width="98.8"
        height="98.8"
        rx="0.8"
        ry="0.8"
        pathLength="100"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="0.7"
      />
    </svg>
  );
}
