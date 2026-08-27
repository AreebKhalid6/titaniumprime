"use client";

import Image from "next/image";
import { PlayIcon } from "./shared/Icons";

const VIDEO_THUMBS = [
  { id: "01", title: "Chapter 01", image: "" },
  { id: "02", title: "Chapter 02", image: "" },
  { id: "03", title: "Chapter 03", image: "" },
  { id: "04", title: "Chapter 04", image: "" },
  { id: "05", title: "Chapter 05", image: "" },
] as const;

export default function VideoStrip() {
  return (
    <section id="videos" className="bg-black">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {VIDEO_THUMBS.map((thumb) => (
          <button
            key={thumb.id}
            type="button"
            aria-label={`Play ${thumb.title}`}
            className="group relative aspect-[16/10] w-full overflow-hidden border-0 bg-[#0a0a0a] text-left"
          >
            {thumb.image ? (
              <Image
                src={thumb.image}
                alt={thumb.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505]" />
            )}

            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/20" />

            {/* Center play icon */}
            <span className="absolute inset-0 flex items-center justify-center">
              <PlayIcon className="h-9 w-9 text-white/85 transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
