"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";

import ImageLightbox, { type LightboxGalleryImage } from "./ImageLightbox";

type ProcessStepImageProps = {
  images: LightboxGalleryImage[];
  index: number;
  title: string;
  compact?: boolean;
};

export default function ProcessStepImage({
  images,
  index,
  title,
  compact = false,
}: ProcessStepImageProps) {
  const [open, setOpen] = useState(false);
  const image = images[index];

  if (!image) return null;

  return (
    <>
      <button
        type="button"
        className={`group/image relative w-full overflow-hidden text-left ${
          compact ? "h-40" : "h-56"
        }`}
        onClick={() => setOpen(true)}
        aria-label={`Expand ${title} image`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover/image:scale-105"
        />
        <div className="absolute inset-0 bg-[#0c0d0e]/10 opacity-0 transition group-hover/image:opacity-100" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#0c0d0e]/88 px-2.5 py-1.5 text-[11px] font-black text-[#e4ad42] shadow-[0_10px_24px_rgba(0,0,0,0.34)] backdrop-blur-sm">
          <FaExpandAlt aria-hidden="true" />
          Expand
        </span>
      </button>

      <ImageLightbox
        images={images}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
