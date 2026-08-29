type IconProps = { className?: string };

const base = "h-12 w-12 md:h-14 md:w-14";

function Svg({
  className = "",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`${base} ${className}`}
    >
      {children}
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 16s5-7 14-7 14 7 14 7-5 7-14 7-14-7-14-7Z" />
      <circle cx="16" cy="16" r="4" />
    </Svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="7" y="14" width="18" height="13" rx="1.5" />
      <path d="M11 14v-4a5 5 0 0 1 10 0v4" />
      <circle cx="16" cy="20" r="1.4" />
    </Svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="16" cy="16" r="13" />
      <circle cx="16" cy="13" r="4" />
      <path d="M8.5 25a8 8 0 0 1 15 0" />
    </Svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 2c1.2 8.6 5.2 12.6 14 14-8.8 1.4-12.8 5.4-14 14-1.2-8.6-5.2-12.6-14-14 8.8-1.4 12.8-5.4 14-14Z" />
      <circle cx="16" cy="16" r="3" />
    </Svg>
  );
}
