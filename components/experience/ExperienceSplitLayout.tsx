import { type ReactNode } from "react";

const TEXT_PL =
  "px-5 md:px-10 lg:pl-[max(1.25rem,calc((100vw-1400px)/2))] lg:pr-10";

type ExperienceSplitLayoutProps = {
  id: string;
  textWidth?: "half" | "narrow";
  image: string;
  imageAlt: string;
  imageClassName?: string;
  overlayClassName?: string;
  children: ReactNode;
};

export default function ExperienceSplitLayout({
  id,
  textWidth = "half",
  image,
  imageAlt,
  imageClassName = "min-h-[220px] md:min-h-[280px] lg:min-h-[380px]",
  overlayClassName = "bg-black/30",
  children,
}: ExperienceSplitLayoutProps) {
  const textWidthClass =
    textWidth === "narrow" ? "lg:w-[448px]" : "lg:w-[700px]";

  return (
    <section id={id} className="overflow-hidden border-y border-white/10 bg-black">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div
          className={`flex w-full flex-col justify-center py-10 md:py-14 lg:shrink-0 lg:py-16 ${TEXT_PL} ${textWidthClass}`}
        >
          {children}
        </div>

        <div
          className={`relative w-full lg:min-w-0 lg:flex-1 ${imageClassName}`}
        >
          <div
            className="absolute inset-0 bg-[#0a0a0a] bg-cover bg-center bg-no-repeat"
            style={image ? { backgroundImage: `url(${image})` } : undefined}
            role="img"
            aria-label={imageAlt}
          />
          <div
            className={`pointer-events-none absolute inset-0 ${overlayClassName}`}
          />
        </div>
      </div>
    </section>
  );
}
