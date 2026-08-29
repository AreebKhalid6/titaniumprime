type IconProps = { className?: string };

const base = "h-16 w-16 md:h-[72px] md:w-[72px]";

function Svg({
  className = "",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`${base} ${className}`}
    >
      {children}
    </svg>
  );
}

export function DiamondIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 18h24l-12 16L12 18Z" />
      <path d="M12 18l5-6h14l5 6" />
      <path d="M17 12l1.5 6L24 34l5.5-16L31 12" />
      <path d="M18.5 18h11" />
    </Svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M24 8c1 6-4 8-5.5 12.5-1 3 .5 5.5 2 6.5-2.5.5-5-1.5-5.5-4.5-2 2.5-3 5.5-3 8 0 5.5 5.5 10 12 10s12-4.5 12-10c0-8-8-11.5-12-22.5Z" />
      <path d="M24 38c-3 0-5.5-2-5.5-4.5 0-3 3-4 5.5-8 2.5 4 5.5 5 5.5 8C29.5 36 27 38 24 38Z" />
    </Svg>
  );
}

export function CirclesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="19" cy="24" r="10" />
      <circle cx="29" cy="24" r="10" />
    </Svg>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10 34h28" />
      <path d="M10 34l-1-16 9 7 6-12 6 12 9-7-1 16" />
      <circle cx="24" cy="10" r="2" />
    </Svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M24 8c1.5 10 5.5 14 15.5 16-10 2-14 6-15.5 16-1.5-10-5.5-14-15.5-16 10-2 14-6 15.5-16Z" />
    </Svg>
  );
}
