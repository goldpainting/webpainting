import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";

import ColorConsultationForm from "../components/ColorConsultationForm";
import { siteUrl } from "../siteConfig";

export const metadata: Metadata = {
  title: "Color Consultation | Gold Lion Painting Inc",
  description:
    "Luxury color consultation in Manatee County for homeowners who want cohesive palettes, confident finish selections, and designer-inspired guidance.",
  alternates: {
    canonical: "/color-consultation",
  },
  openGraph: {
    title: "Color Consultation | Gold Lion Painting Inc",
    description:
      "Luxury color consultation in Manatee County for homeowners who want cohesive palettes, confident finish selections, and designer-inspired guidance.",
    url: `${siteUrl}/color-consultation`,
    images: [
      {
        url: "/consultation/color-consultation-team.jpeg",
        width: 1024,
        height: 1536,
        alt: "Gold Lion Painting color consultation with homeowners",
      },
    ],
  },
};

const consultationBenefits = [
  {
    title: "Curated color direction",
    description:
      "We help narrow the palette so walls, trim, cabinetry, furnishings, and light all feel connected instead of pieced together.",
  },
  {
    title: "Luxury-minded decision support",
    description:
      "Finish balance, contrast, undertones, and room-to-room flow are reviewed with a cleaner, more elevated end result in mind.",
  },
  {
    title: "Confidence before paint starts",
    description:
      "A consultation helps avoid expensive second-guessing and gives the painting plan a stronger visual direction from the beginning.",
  },
];

const includedItems = [
  "One or two room color palette guidance",
  "Trim and accent coordination",
  "Lighting and undertone recommendations",
  "Suggestions for modern, warm, or luxury finishes",
  "A clearer direction for walls, cabinetry, and connected spaces",
  "Follow-up path for painting estimates and scheduling",
];

const stylingDirections = [
  {
    name: "Soft Coastal Luxe",
    palette: "Cream, linen, sand, muted blue-gray, brushed brass",
    description:
      "A polished Florida palette with soft light bounce, relaxed warmth, and enough contrast to still feel tailored.",
    image: "/consultation/color-consultation-team.jpeg",
    alt: "Gold Lion Painting color consultation with clients around a coffee table",
  },
  {
    name: "Modern Warm Contrast",
    palette: "Mushroom, charcoal, almond, warm white, muted bronze",
    description:
      "For homes that want a richer designer look without feeling dark or heavy, especially in living rooms and dining spaces.",
    image: "/parrish/Lluxury-interior-painting.jpg",
    alt: "Luxury interior room with smooth gray wall paint and dark wood ceiling",
  },
  {
    name: "Crisp Contemporary Calm",
    palette: "Soft white, pale greige, dove blue, satin black, champagne metal",
    description:
      "A lighter, airy direction that keeps the home feeling refined and current while still giving the palette character.",
    image: "/services/house-interior-painting-manatee-county.jpg",
    alt: "Bright painted interior room in Manatee County",
  },
];

export default function ColorConsultationPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#0c0d0e]">
      <section className="relative overflow-hidden border-b border-[#e4ad42]/35 bg-[#0c0d0e]">
        <div className="texture-grid absolute inset-0 opacity-35" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_26rem] lg:items-start lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-[#e4ad42]/50 bg-[#1f2124] px-4 py-2 text-xs font-black tracking-[0.24em] text-[#e4ad42] uppercase shadow-[0_12px_24px_rgba(0,0,0,0.24)]">
              Luxury Color Consultation
            </p>
            <h1 className="font-heading mt-5 max-w-4xl text-5xl leading-tight font-black text-white md:text-6xl">
              Custom color consultation for homeowners who want a cleaner, more
              elevated finish story.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dddddd] md:text-xl">
              We help define palettes for one or two rooms with real-world
              guidance around undertones, lighting, trim contrast, and overall
              room harmony so the final paint selections feel confident and
              intentional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border border-[#e4ad42]/45 bg-[#1f2124] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
                <p className="font-heading text-3xl font-black text-[#e4ad42]">
                  1:1
                </p>
                <p className="mt-2 text-sm tracking-[0.18em] text-[#dddddd] uppercase">
                  Personalized guidance
                </p>
              </div>
              <div className="border border-[#e4ad42]/45 bg-[#1f2124] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
                <p className="font-heading text-3xl font-black text-[#e4ad42]">
                  1-2
                </p>
                <p className="mt-2 text-sm tracking-[0.18em] text-[#dddddd] uppercase">
                  Rooms per palette focus
                </p>
              </div>
              <div className="border border-[#e4ad42]/45 bg-[#1f2124] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.22)]">
                <p className="font-heading text-3xl font-black text-[#e4ad42]">
                  Luxury
                </p>
                <p className="mt-2 text-sm tracking-[0.18em] text-[#dddddd] uppercase">
                  Designer-inspired direction
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="rounded-full bg-[#d90000] px-6 py-3 text-base font-black text-white shadow-[0_16px_30px_rgba(0,0,0,0.28)] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Book Your Consultation
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-[#e4ad42] bg-[#0c0d0e] px-6 py-3 text-base font-black text-[#e4ad42] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                View Styling Directions
              </a>
            </div>

            <div className="mt-10 overflow-hidden border border-[#e4ad42]/45 bg-[#1f2124] shadow-[0_20px_48px_rgba(0,0,0,0.34)]">
              <div className="relative h-[26rem]">
                <Image
                  src="/consultation/color-consultation-team.jpeg"
                  alt="Gold Lion Painting color consultation with clients at a glass coffee table"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241c14]/60 via-transparent to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-semibold tracking-[0.18em] text-[#f5e4b0] uppercase">
                    Consultation In Action
                  </p>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-[#f9f3e8]">
                    Real samples, room-specific discussion, and practical
                    guidance that helps clients move forward with more
                    certainty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="consultation"
            className="border border-[#e4ad42]/45 bg-white p-7 shadow-[0_22px_50px_rgba(0,0,0,0.28)]"
          >
            <p className="text-sm font-black tracking-[0.18em] text-[#a97a36] uppercase">
              Book Now
            </p>
            <h2 className="font-heading mt-2 text-3xl font-black text-[#0c0d0e]">
              Request a custom consultation
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#1f2124]">
              Share the rooms, style goals, and finishes you are considering. We
              will send the consultation request directly to our team.
            </p>
            <div className="mt-6 border border-[#e4ad42]/45 bg-[#f7f7f7] p-4">
              <p className="text-sm font-black tracking-[0.18em] text-[#a97a36] uppercase">
                Ideal For
              </p>
              <p className="mt-2 text-sm leading-6 text-[#1f2124]">
                Homeowners choosing wall colors, trim contrast, accent
                directions, or a more cohesive palette before painting begins.
              </p>
            </div>
            <div className="mt-6">
              <ColorConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4ad42]/35 bg-[#f3f3f3] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 md:px-10">
          {consultationBenefits.map((item) => (
            <article
              key={item.title}
              className="border border-[#e4ad42]/45 bg-white p-8 shadow-[0_16px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#e4ad42] hover:shadow-[0_18px_35px_rgba(0,0,0,0.16)]"
            >
              <h2 className="font-heading text-2xl font-black text-[#0c0d0e]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[#1f2124]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.22em] text-[#a97a36] uppercase">
              Styling Directions
            </p>
            <h2 className="font-heading mt-3 text-4xl font-black text-[#0c0d0e]">
              A more luxurious palette starts with a stronger room story.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#1f2124]">
              These consultation directions are designed for homes that want
              warmth, polish, and a more intentional relationship between paint,
              finishes, and furnishings.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stylingDirections.map((style) => (
              <article
                key={style.name}
                className="group overflow-hidden border border-[#e4ad42]/45 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition hover:border-[#e4ad42]"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241c14]/70 via-transparent to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-5">
                    <p className="text-sm font-semibold tracking-[0.18em] text-[#f5e4b0] uppercase">
                      {style.palette}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {style.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="leading-7 text-[#1f2124]">
                    {style.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4ad42]/35 bg-[#0c0d0e] py-16 text-[#dddddd]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-sm font-black tracking-[0.22em] text-[#e4ad42] uppercase">
              What Is Included
            </p>
            <h2 className="font-heading mt-3 text-4xl font-black text-white">
              One or two rooms planned with more confidence and cohesion.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#dddddd]">
              This service is meant to reduce hesitation, clarify the palette,
              and help the next painting step feel more intentional from day
              one.
            </p>
            <div className="mt-8 overflow-hidden border border-[#e4ad42]/45 bg-[#1f2124] shadow-[0_20px_44px_rgba(0,0,0,0.32)]">
              <div className="relative h-80">
                <Image
                  src="/consultation/color-consultation-team.jpeg"
                  alt="Color consultation sample fan and clients reviewing palette options"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {includedItems.map((item) => (
              <div
                key={item}
                className="border border-[#e4ad42]/35 bg-[#1f2124] p-5 text-sm leading-6 text-[#dddddd] shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="border border-[#e4ad42]/45 bg-white p-8 shadow-[0_20px_48px_rgba(0,0,0,0.12)]">
            <p className="text-sm font-black tracking-[0.22em] text-[#a97a36] uppercase">
              Why It Helps
            </p>
            <h2 className="font-heading mt-3 text-4xl font-black text-[#0c0d0e]">
              Better color decisions usually lead to better finished rooms.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1f2124]">
              Color consultation is not just about choosing a swatch. It is
              about creating a room that feels balanced in natural light, works
              with existing finishes, and still looks strong once the paint is
              on the wall every day.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#1f2124]">
              If you already know you want Gold Lion Painting to complete the
              project, this consultation also helps streamline the painting
              estimate and keeps the finish direction aligned from start to
              finish.
            </p>
          </div>

          <div className="border border-[#e4ad42]/45 bg-[#0c0d0e] p-7 text-[#dddddd] shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
            <p className="text-sm font-black tracking-[0.18em] text-[#e4ad42] uppercase">
              Next Step
            </p>
            <h3 className="font-heading mt-2 text-3xl font-black text-white">
              Ready to define your palette?
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#dddddd]">
              Book a consultation, then move into your painting estimate with a
              clearer color direction and a more polished result in mind.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#consultation"
                className="rounded-full bg-[#d90000] px-5 py-3 text-center font-black text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Request Consultation
              </a>
              <Link
                href="/contact-us"
                className="rounded-full border border-[#e4ad42] bg-[#0c0d0e] px-5 py-3 text-center font-black text-[#e4ad42] transition hover:bg-[#e4ad42] hover:text-[#0c0d0e]"
              >
                Contact Gold Lion Painting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
