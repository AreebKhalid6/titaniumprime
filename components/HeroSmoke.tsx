"use client";

import { useMemo } from "react";

type SmokeParticle = {
  id: number;
  left: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const SMOKE_SRC = "/images/homesection/smoke-bright.png";
const PARTICLE_COUNT = 22;

/** Deterministic so server and client markup match without a post-mount update. */
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function makeParticle(id: number): SmokeParticle {
  return {
    id,
    left: 48 + pseudoRandom(id) * 52,
    bottom: -15 + pseudoRandom(id + 100) * 40,
    size: 220 + pseudoRandom(id + 200) * 380,
    duration: 8 + pseudoRandom(id + 300) * 7,
    delay: pseudoRandom(id + 400) * -12,
    opacity: 0.35 + pseudoRandom(id + 500) * 0.45,
  };
}

export default function HeroSmoke() {
  const particles = useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, (_, i) => makeParticle(i + 1)),
    []
  );

  return (
    <div className="hero-smoke-viewport" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="hero-smoke-puff"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: p.size,
            height: p.size,
            ["--smoke-opacity" as string]: String(p.opacity),
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            backgroundImage: `url(${SMOKE_SRC})`,
          }}
        />
      ))}
    </div>
  );
}
