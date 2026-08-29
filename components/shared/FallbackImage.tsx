"use client";

import Image from "next/image";
import { useState } from "react";

type FallbackImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Renders a dark gradient placeholder while artwork for a slot is missing. */
export default function FallbackImage({
  src,
  alt,
  className = "object-cover",
  sizes = "100vw",
  priority = false,
}: FallbackImageProps) {
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
