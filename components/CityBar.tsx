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

export default function CityBar() {
  return (
    <section className="bg-black">
      <div className="flex h-[76px] items-center px-8 md:h-[80px] md:px-10 lg:px-12">
        {/* Cities — full width spread until Future Destinations */}
        <div className="flex min-w-0 flex-1 items-center justify-between pr-4 md:pr-6 lg:pr-8">
          {CITIES.map((city, i) => (
            <Fragment key={city}>
              {i > 0 && (
                <span
                  className="shrink-0 text-sm text-[#555] md:text-base"
                  aria-hidden
                >
                  •
                </span>
              )}
              <span className="shrink-0 font-display text-[13px] font-normal uppercase tracking-[0.12em] text-[#d4d4d4] md:text-[15px] lg:text-[16px]">
                {city}
              </span>
            </Fragment>
          ))}
        </div>

        {/* Future Destinations */}
        <a
          href="#newsletter"
          className="group flex shrink-0 items-center gap-3 transition-opacity hover:opacity-75 md:gap-4"
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
