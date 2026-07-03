"use client";

import { useState } from "react";

export default function SafeImage({ src, alt = "", className = "" }: { src: string, alt?: string, className?: string }) {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return <div className={`bg-[#e8e6e1] ${className}`} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} block object-cover text-transparent`}
      onError={() => setError(true)}
    />
  );
}