import LongArrow from "./LongArrow";

type SectionLinkProps = {
  href: string;
  children: string;
  variant?: "default" | "gold";
};

export default function SectionLink({
  href,
  children,
  variant = "default",
}: SectionLinkProps) {
  const isGold = variant === "gold";

  return (
    <a
      href={href}
      className={`mt-10 inline-flex items-center gap-3 font-display text-[9px] font-normal uppercase tracking-[0.24em] underline underline-offset-[6px] transition-opacity hover:opacity-60 md:mt-12 md:text-[10px] ${
        isGold
          ? "text-[#c4a574] decoration-[#c4a574]/70"
          : "text-[#a0a0a0] decoration-[#a0a0a0]/50"
      }`}
    >
      {children}
      <LongArrow className={isGold ? "text-[#c4a574]/80" : "text-white/70"} />
    </a>
  );
}
