import { ABOUT_STORY, ABOUT_STORY_LABEL } from "@/lib/about";
import { ABOUT_MAX_WIDTH } from "./AboutContainer";

// Keeps first/last panel text aligned with the 1450px grid while the
// panels themselves run edge to edge.
const EDGE_PAD = `max(2.5rem, calc((100vw - ${ABOUT_MAX_WIDTH}px) / 2 + 3rem))`;

export default function AboutStory() {
  const lastIndex = ABOUT_STORY.length - 1;

  return (
    <section id="our-story" className="relative w-full bg-black">
      {/* Centered label */}
      <div className="relative z-20 flex flex-col items-center pt-10 md:pt-12">
        <p className="font-display text-[9px] font-light uppercase tracking-[0.44em] text-white/85 md:text-[10px] md:tracking-[0.48em]">
          {ABOUT_STORY_LABEL}
        </p>
        <span className="mt-3 block h-[5px] w-[5px] rotate-45 border border-[#b89b62]/70 md:mt-4" />
      </div>

      {/* Three panels — full bleed */}
      <div className="mt-8 grid w-full grid-cols-1 md:mt-10 md:grid-cols-3">
        {ABOUT_STORY.map((item, i) => (
          <article
            key={item.num}
            className="relative min-h-[340px] overflow-hidden border-t border-white/[0.06] md:min-h-[420px] md:border-l md:border-t-0 md:first:border-l-0 lg:min-h-[460px]"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-[#0a0a0a] bg-cover bg-center bg-no-repeat"
              style={
                item.image ? { backgroundImage: `url(${item.image})` } : undefined
              }
              role="img"
              aria-label={item.imageAlt}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />

            {/* Content */}
            <div
              className="relative z-10 flex h-full flex-col px-8 py-10 md:px-9 md:py-12 lg:px-10"
              style={{
                paddingLeft: i === 0 ? EDGE_PAD : undefined,
                paddingRight: i === lastIndex ? EDGE_PAD : undefined,
              }}
            >
              <span className="font-display text-[10px] font-light tracking-[0.2em] text-[#b89b62]/80">
                {item.num}
              </span>

              <h3 className="font-display mt-5 text-[17px] font-extralight uppercase tracking-[0.24em] text-white md:mt-6 md:text-[19px] md:tracking-[0.26em]">
                {item.title}
              </h3>

              <div className="mt-5 h-px w-[52px] bg-[#b89b62]/40 md:mt-6 md:w-[60px]" />

              <div className="mt-6 space-y-5 md:mt-7">
                {item.paragraphs.map((text) => (
                  <p
                    key={text}
                    className="max-w-[280px] text-[12px] font-light leading-[1.9] text-[#a8a8a8] md:text-[12.5px]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
