import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { PlayIcon } from "./shared/Icons";
import DrawBorderBtn from "./shared/DrawBorderBtn";

export default function FilmSection() {
  return (
    <section id="film" className="bg-black">
      <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
        {/* Left — text */}
        <div className="relative z-10 flex w-full flex-col justify-center bg-black px-5 py-12 md:px-14 md:py-20 lg:w-[36%] lg:px-14 lg:py-12 xl:px-16">
          <p className="font-display text-[9px] font-light uppercase tracking-[0.32em] text-[#a0a0a0] md:text-[10px] md:tracking-[0.36em]">
            Titanium Prime Media Presents
          </p>

          <h2 className="mt-5 w-full max-w-[260px] md:mt-6 md:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px]">
            <Image
              src={IMAGES.chapterHeading}
              alt="Chapter 01: The Arrival"
              width={900}
              height={400}
              className="h-auto w-full"
            />
          </h2>

          <div className="mt-6 space-y-1 md:mt-8">
            <p className="text-[12px] font-light leading-relaxed text-[#a0a0a0] md:text-[13px]">
              The night begins before the doors open.
            </p>
            <p className="text-[12px] font-light leading-relaxed text-[#a0a0a0] md:text-[13px]">
              A film by Titanium Prime.
            </p>
          </div>

          <DrawBorderBtn
            href="#film"
            gradId="film-watch-btn"
            className="hero-ghost-btn mt-8 w-fit px-7 py-3.5 font-display text-[10px] font-normal uppercase tracking-[0.22em] text-white md:mt-10 md:text-[11px]"
          >
            Watch the Film
            <PlayIcon className="h-[18px] w-[18px] text-white/90" />
          </DrawBorderBtn>
        </div>

        {/* Right — natural image height */}
        <div className="relative w-full shrink-0 lg:-ml-6 lg:w-[64%] xl:-ml-8">
          {IMAGES.film ? (
            <Image
              src={IMAGES.film}
              alt="Chapter 01: The Arrival"
              width={1920}
              height={800}
              className="h-auto w-full object-contain object-left"
              sizes="(max-width: 1024px) 100vw, 64vw"
              priority
            />
          ) : (
            <div className="aspect-[21/9] w-full bg-[#0a0a0a]" />
          )}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent lg:w-28" />
        </div>
      </div>
    </section>
  );
}
