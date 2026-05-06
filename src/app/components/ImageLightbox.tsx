"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

export type LightboxGalleryImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

type ImageLightboxProps = {
  images: LightboxGalleryImage[];
  index: number;
  open: boolean;
  onClose: () => void;
};

export default function ImageLightbox({
  images,
  index,
  open,
  onClose,
}: ImageLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      carousel={{ finite: true, padding: 0, preload: 0, spacing: 0 }}
      animation={{ fade: 160, navigation: 180, swipe: 220 }}
      styles={{
        container: { backgroundColor: "rgba(12, 13, 14, 0.76)" },
        slide: { padding: "clamp(20px, 7vw, 84px)" },
        toolbar: { padding: "18px" },
        navigationPrev: {
          top: "50%",
          left: "max(18px, calc(50% - 490px))",
          display: "flex",
          width: "64px",
          height: "64px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          border: "2px solid #e4ad42",
          backgroundColor: "#0c0d0e",
          color: "#e4ad42",
          filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.48))",
          lineHeight: 0,
          padding: 0,
          transform: "translateY(-50%)",
        },
        navigationNext: {
          top: "50%",
          right: "max(18px, calc(50% - 490px))",
          display: "flex",
          width: "64px",
          height: "64px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          border: "2px solid #e4ad42",
          backgroundColor: "#0c0d0e",
          color: "#e4ad42",
          filter: "drop-shadow(0 16px 30px rgba(0,0,0,0.48))",
          lineHeight: 0,
          padding: 0,
          transform: "translateY(-50%)",
        },
      }}
      render={{
        slide: ({ slide }) => (
          <div className="relative max-h-[72vh] w-[min(82vw,860px)]">
            <Image
              src={slide.src}
              alt={slide.alt ?? ""}
              width={1200}
              height={900}
              className="max-h-[72vh] w-full rounded-2xl object-contain shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            />
          </div>
        ),
      }}
      slides={images}
    />
  );
}
