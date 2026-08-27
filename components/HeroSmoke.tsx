"use client";

import { useEffect, useState } from "react";

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

function makeParticle(id: number): SmokeParticle {
  const size = 220 + Math.random() * 380;
  return {
    id,
    left: 48 + Math.random() * 52,
    bottom: -15 + Math.random() * 40,
    size,
    duration: 8 + Math.random() * 7,
    delay: Math.random() * -12,
    opacity: 0.35 + Math.random() * 0.45,
  };
}

export default function HeroSmoke() {
  const [particles, setParticles] = useState<SmokeParticle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: PARTICLE_COUNT }, (_, i) => makeParticle(i + 1)),
    );
  }, []);

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
