import { Fragment } from "react";
import { CITIES } from "@/lib/constants";

function LongArrow() {
  return (
    <svg
      width="28"
      height="8"
      viewBox="0 0 28 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-[#a8a8a8]"
    >
      <path
        d="M0 4H24M24 4L19 1M24 4L19 7"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function CityTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-6 md:gap-x-10 lg:gap-x-12"
      aria-hidden={ariaHidden || undefined}
    >
      {CITIES.map((city, i) => (
        <Fragment key={`${city}-${i}`}>
          {i > 0 && (
            <span className="shrink-0 text-sm text-[#555] md:text-base" aria-hidden>
              •
            </span>
          )}
          <span className="shrink-0 font-display text-[12px] font-normal uppercase tracking-[0.14em] text-[#d4d4d4] md:text-[15px] lg:text-[16px]">
            {city}
          </span>
        </Fragment>
      ))}
      <span className="shrink-0 text-sm text-[#555] md:text-base" aria-hidden>
        •
      </span>
    </div>
  );
}

export default function CityBar() {
  return (
    <section className="bg-black">
      <div className="flex items-center gap-4 px-0 py-4 md:h-[80px] md:gap-6 md:py-0 md:pr-10 lg:pr-12">
        <div className="city-marquee min-w-0 flex-1 overflow-hidden">
          <div className="city-marquee-track">
            <CityTrack />
            <CityTrack ariaHidden />
          </div>
        </div>

        <a
          href="#newsletter"
          className="group mr-4 flex shrink-0 items-center gap-3 transition-opacity hover:opacity-75 md:mr-0 md:gap-4"
        >
          <div className="flex flex-col leading-[1.2]">
            <span className="font-display text-[10px] font-normal uppercase tracking-[0.14em] text-[#8a8a8a] md:text-[11px]">
              Future
            </span>
            <span className="font-display text-[10px] font-normal uppercase tracking-[0.14em] text-[#8a8a8a] md:text-[11px]">
              Destinations
            </span>
          </div>
          <LongArrow />
        </a>
      </div>
    </section>
  );
}
