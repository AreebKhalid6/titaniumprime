"use client";

import Image from "next/image";
import { useState } from "react";

type ArrivalImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Falls back to a dark gradient while artwork for a slot is still missing. */
export default function ArrivalImage({
  src,
  alt,
  className = "object-cover",
  sizes = "100vw",
  priority = false,
}: ArrivalImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#161310] via-[#0c0b0a] to-[#050505]" />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
