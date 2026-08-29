import Image from "next/image";
import { type ReactNode } from "react";
import ExperienceContainer from "./ExperienceContainer";
import SectionLink from "./SectionLink";

type ExperienceRowProps = {
  id: string;
  num: string;
  title: string;
  body?: string;
  headline?: readonly string[];
  cta: string;
  ctaHref: string;
  children: ReactNode;
};

export default function ExperienceRow({
  id,
  num,
  title,
  body,
  headline,
  cta,
  ctaHref,
  children,
}: ExperienceRowProps) {
  return (
    <section id={id} className="border-y border-white/10 bg-black">
      <ExperienceContainer>
        <div className="flex flex-col items-stretch lg:flex-row lg:items-stretch">
          <div className="relative z-10 flex w-full flex-col justify-center bg-black px-5 py-12 md:px-10 md:py-16 lg:w-[34%] lg:min-h-[420px] lg:px-10 lg:py-14 xl:w-[32%]">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[11px] font-light tracking-[0.12em] text-white/35 md:text-[12px]">
              {num}
            </span>
            <h2 className="font-display text-[9px] font-light uppercase tracking-[0.32em] text-[#a0a0a0] md:text-[10px]">
              {title}
            </h2>
          </div>

          {headline ? (
            <div className="mt-6 space-y-0.5 md:mt-8">
              {headline.map((line) => (
                <p
                  key={line}
                  className="font-display text-[22px] font-light uppercase leading-[1.1] tracking-[0.04em] text-white md:text-[28px] lg:text-[32px]"
                >
                  <span className="metallic-heading">{line}</span>
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-6 max-w-[340px] text-[12px] font-light leading-[1.85] text-[#a0a0a0] md:mt-8 md:text-[13px] md:leading-[1.9] lg:max-w-[380px]">
              {body}
            </p>
          )}

          <SectionLink href={ctaHref}>{cta}</SectionLink>
        </div>

        <div className="relative w-full shrink-0 lg:w-[66%] xl:w-[68%]">
          {children}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-black to-transparent md:w-24 lg:w-28" />
        </div>
        </div>
      </ExperienceContainer>
    </section>
  );
}

export function SingleImagePanel({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative min-h-[280px] w-full md:min-h-[380px] lg:min-h-[480px] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 66vw"
      />
    </div>
  );
}




export function SoundGallery({
  images,
}: {
  images: readonly { src: string; alt: string }[];
}) {
  return (
    <div className="grid min-h-[280px] grid-cols-1 gap-1 bg-black sm:grid-cols-3 md:min-h-[380px] lg:min-h-[480px]">
      {images.map((img) => (
        <div key={img.src} className="relative min-h-[180px] sm:min-h-full">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 22vw"
          />
        </div>
      ))}
    </div>
  );
}
