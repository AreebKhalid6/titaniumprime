import { BENEFITS } from "@/lib/constants";
import FadeIn from "./shared/FadeIn";
import LuxuryButton from "./shared/LuxuryButton";

export default function PrivateSection() {
  return (
    <section
      id="private-list"
      className="relative bg-tp-carbon py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(90,30,22,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="left">
            <p className="font-display text-[9px] font-light uppercase tracking-[0.3em] text-tp-champagne">
              Titanium Prime Private
            </p>
            <h2 className="font-display mt-6 text-4xl font-light uppercase leading-[1.1] tracking-[0.1em] text-tp-metal md:text-5xl">
              Access Is
              <br />
              Earned.
            </h2>
            <p className="mt-8 max-w-md text-sm font-light leading-[1.9] text-tp-body md:text-base">
              Titanium Prime Private represents invitation-only experiences
              designed for people who value discretion, connection and
              exceptional detail.
            </p>
            <div className="mt-10">
              <LuxuryButton href="#newsletter">Join the Private List</LuxuryButton>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <ul className="space-y-8">
              {BENEFITS.map((benefit, i) => (
                <li
                  key={benefit}
                  className="group flex items-start gap-5 border-b border-tp-titanium/10 pb-8 last:border-0"
                >
                  <span className="font-display text-[10px] font-light tracking-[0.15em] text-tp-champagne">
                    0{i + 1}
                  </span>
                  <div>
                    <span className="mb-2 block text-tp-titanium">✓</span>
                    <h3 className="font-display text-sm font-light uppercase tracking-[0.15em] text-tp-metal transition-colors group-hover:text-tp-champagne">
                      {benefit}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
