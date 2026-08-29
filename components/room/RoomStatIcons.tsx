type IconProps = { className?: string };

const base = "h-8 w-8 md:h-9 md:w-9";

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

export function DiamondStatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 13h20L16 27 6 13Z" />
      <path d="M6 13l4-8h12l4 8" />
      <path d="M10 5l2 8 4 14 4-14 2-8" />
      <path d="M12 13h8" />
    </Svg>
  );
}

export function ChairStatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 18V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9" />
      <rect x="6" y="18" width="20" height="5" rx="1.5" />
      <path d="M9 23v4M23 23v4" />
    </Svg>
  );
}

export function GlassStatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10 5h12l-1.5 8a4.5 4.5 0 0 1-9 0L10 5Z" />
      <path d="M16 17.5V26" />
      <path d="M11 27h10" />
    </Svg>
  );
}

export function LayersStatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 5l11 5.5L16 16 5 10.5 16 5Z" />
      <path d="M5 16l11 5.5L27 16" />
      <path d="M5 21.5L16 27l11-5.5" />
    </Svg>
  );
}

export function CompassStatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 3c1.2 8.4 4.4 11.6 12.8 12.8C20.4 17 17.2 20.2 16 28.6 14.8 20.2 11.6 17 3.2 15.8 11.6 14.6 14.8 11.4 16 3Z" />
      <circle cx="16" cy="15.8" r="2.5" />
    </Svg>
  );
}
