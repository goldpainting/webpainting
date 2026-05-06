"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExpandAlt } from "react-icons/fa";

import ImageLightbox, { type LightboxGalleryImage } from "./ImageLightbox";

type ProcessStepImageProps = {
  images: LightboxGalleryImage[];
  index: number;
  number: string;
  title: string;
};

export default function ProcessStepImage({
  images,
  index,
  number,
  title,
}: ProcessStepImageProps) {
  const [open, setOpen] = useState(false);
  const image = images[index];

  if (!image) return null;

  return (
    <>
      <button
        type="button"
        className="group/image relative h-56 w-full overflow-hidden text-left"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/78 via-[#0c0d0e]/16 to-transparent opacity-90" />
        <div className="font-heading absolute top-4 left-4 border border-[#e4ad42]/60 bg-[#0c0d0e]/88 px-3 py-1 text-sm font-black text-[#e4ad42] shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          {number}
        </div>
        <span className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-[#0c0d0e]/88 px-3 py-2 text-xs font-black text-[#e4ad42] shadow-[0_10px_28px_rgba(0,0,0,0.38)] backdrop-blur-sm">
          <FaExpandAlt aria-hidden="true" />
          Expand
        </span>
        <h3 className="font-heading absolute right-4 bottom-4 left-4 text-3xl leading-tight font-black text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
          {title}
        </h3>
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
