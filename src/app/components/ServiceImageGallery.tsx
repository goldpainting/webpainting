"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

export type ServiceGalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type ServiceImageGalleryProps = {
  images: ServiceGalleryImage[];
};

export default function ServiceImageGallery({
  images,
}: ServiceImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            className="scroll-reveal group overflow-hidden border border-[#e4ad42]/35 bg-[#1f2124] text-left shadow-[0_18px_38px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-[#e4ad42]"
            style={{ animationDelay: `${imageIndex * 90}ms` }}
            onClick={() => {
              setIndex(imageIndex);
              setOpen(true);
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/78 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-xl font-black text-[#e4ad42]">
                {image.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#dddddd]">
                {image.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          title: image.title,
          description: image.description,
        }))}
      />
    </>
  );
}
