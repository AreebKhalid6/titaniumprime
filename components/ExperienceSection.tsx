import Image from "next/image";
import { IMAGES } from "@/lib/constants";

function LongArrow() {
  return (
    <svg
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-white/70"
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

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-black">
      <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
        {/* Left — text only */}
        <div className="relative z-10 flex w-full flex-col justify-center bg-black px-5 py-12 md:px-14 md:py-20 lg:w-[36%] lg:px-14 lg:py-12 xl:px-16">
          <p className="font-display text-[9px] font-light uppercase tracking-[0.32em] text-[#a0a0a0] md:text-[10px]">
            The Experience
          </p>

          <h2 className="mt-6 w-full max-w-[240px] md:mt-8 md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]">
            <Image
              src={IMAGES.steelHeading}
              alt="Steel. Fire. Presence."
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </h2>

          <p className="mt-8 max-w-[340px] text-[12px] font-light leading-[1.85] text-[#a0a0a0] md:mt-10 md:text-[13px] md:leading-[1.9] lg:max-w-[380px]">
            A cinematic room. Prime cuts. Cold-water seafood. Cocktails with
            structure. Hospitality that knows when to appear—and when to
            disappear.
          </p>

          <a
            href="/the-experience"
            className="mt-10 inline-flex items-center gap-3 font-display text-[9px] font-normal uppercase tracking-[0.22em] text-[#a0a0a0] underline decoration-[#a0a0a0]/50 underline-offset-[6px] transition-opacity hover:opacity-60 md:mt-12 md:text-[10px]"
          >
            Explore the Experience
            <LongArrow />
          </a>
        </div>

        {/* Right — natural image height */}
        <div className="relative w-full shrink-0 lg:-ml-6 lg:w-[64%] xl:-ml-8">
          {IMAGES.experience ? (
            <Image
              src={IMAGES.experience}
              alt="Luxury bar interior with warm fireplace"
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
