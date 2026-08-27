"use client";

import { useState } from "react";
import { CITIES } from "@/lib/constants";
import FadeIn from "./shared/FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="bg-tp-black py-24 md:py-32">
      <FadeIn className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-light uppercase leading-[1.15] tracking-[0.1em] text-tp-metal md:text-4xl lg:text-5xl">
          Be Part of the
          <br />
          First Chapter
        </h2>
        <p className="mt-6 text-sm font-light leading-relaxed text-tp-body md:text-base">
          Join the Private List for early access to films, events and
          experiences.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-stretch"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 border border-tp-titanium/20 bg-tp-carbon px-6 py-4 font-display text-[10px] font-light uppercase tracking-[0.15em] text-tp-metal placeholder:text-tp-body/50 outline-none transition-colors focus:border-tp-titanium/50"
          />
          <button
            type="submit"
            className="border border-tp-titanium/40 bg-transparent px-8 py-4 font-display text-[10px] font-light uppercase tracking-[0.2em] text-tp-titanium transition-all duration-500 hover:border-tp-metal hover:bg-tp-titanium/10 hover:text-tp-metal"
          >
            Join the List
          </button>
        </form>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6">
        {CITIES.map((city, i) => (
          <span key={city} className="flex items-center gap-4">
            <span className="font-display text-[9px] font-light uppercase tracking-[0.2em] text-tp-titanium/50">
              {city}
            </span>
            {i < CITIES.length - 1 && (
              <span className="text-tp-titanium/20">•</span>
            )}
          </span>
        ))}
      </FadeIn>
    </section>
  );
}
