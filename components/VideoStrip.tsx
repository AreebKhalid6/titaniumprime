"use client";

import Image from "next/image";
import { PlayIcon } from "./shared/Icons";

const VIDEO_THUMBS = [
  { id: "01", title: "Chapter 01", image: "/images/homesection/video/one.png" },
  { id: "02", title: "Chapter 02", image: "/images/homesection/video/two.png" },
  { id: "03", title: "Chapter 03", image: "/images/homesection/video/three.png" },
  { id: "04", title: "Chapter 04", image: "/images/homesection/video/four.png" },
  { id: "05", title: "Chapter 05", image: "/images/homesection/video/five.png" },
] as const;

function VideoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {VIDEO_THUMBS.map((thumb) => (
        <button
          key={`${ariaHidden ? "b" : "a"}-${thumb.id}`}
          type="button"
          aria-label={ariaHidden ? undefined : `Play ${thumb.title}`}
          tabIndex={ariaHidden ? -1 : 0}
          className="group relative aspect-[16/10] w-[70vw] shrink-0 overflow-hidden border-0 bg-[#0a0a0a] text-left sm:w-[40vw] md:w-[28vw] lg:w-[20vw]"
        >
          {thumb.image ? (
            <Image
              src={thumb.image}
              alt={ariaHidden ? "" : thumb.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 20vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505]" />
          )}

          <div className="absolute inset-0 bg-black/55 transition-colors duration-500 group-hover:bg-black/40" />

          <span className="absolute inset-0 flex items-center justify-center">
            <PlayIcon className="h-9 w-9 text-white/85 transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10" />
          </span>
        </button>
      ))}
    </div>
  );
}

export default function VideoStrip() {
  return (
    <section id="videos" className="bg-black">
      <div className="video-marquee overflow-hidden">
        <div className="video-marquee-track">
          <VideoTrack />
          <VideoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
