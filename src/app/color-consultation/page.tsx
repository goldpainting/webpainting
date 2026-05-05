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
    <main className="min-h-screen bg-[#f6f1e7] font-sans text-[#2f2a24]">
      <section className="relative overflow-hidden border-b border-[#dfcfb5] bg-[radial-gradient(circle_at_top_left,_rgba(212,160,56,0.18),_transparent_28%),linear-gradient(180deg,_#fffaf2_0%,_#f4ead9_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[-4rem] left-[-6rem] h-72 w-72 rounded-full bg-[#f0cd84]/30 blur-3xl" />
          <div className="absolute top-10 right-[-4rem] h-80 w-80 rounded-full bg-[#d9b57a]/18 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_26rem] lg:items-start lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-[#d8c39f] bg-[#fffaf2]/90 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#8f6220] uppercase shadow-sm">
              Luxury Color Consultation
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-tight font-bold text-[#8f6220] md:text-6xl">
              Custom color consultation for homeowners who want a cleaner, more
              elevated finish story.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#615447] md:text-xl">
              We help define palettes for one or two rooms with real-world
              guidance around undertones, lighting, trim contrast, and overall
              room harmony so the final paint selections feel confident and
              intentional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2]/90 p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#8f6220]">1:1</p>
                <p className="mt-2 text-sm tracking-[0.18em] text-[#8f7d6a] uppercase">
                  Personalized guidance
                </p>
              </div>
              <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2]/90 p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#8f6220]">1-2</p>
                <p className="mt-2 text-sm tracking-[0.18em] text-[#8f7d6a] uppercase">
                  Rooms per palette focus
                </p>
              </div>
              <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2]/90 p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#8f6220]">Luxury</p>
                <p className="mt-2 text-sm tracking-[0.18em] text-[#8f7d6a] uppercase">
                  Designer-inspired direction
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="rounded-2xl bg-[#d4a038] px-6 py-3 text-base font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
              >
                Book Your Consultation
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-[#d8c39f] bg-[#fffaf2] px-6 py-3 text-base font-bold text-[#8f6220] transition hover:bg-[#f4ecdf]"
              >
                View Styling Directions
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-[0_20px_48px_rgba(120,94,52,0.14)]">
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
            className="rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2]/95 p-7 shadow-[0_22px_50px_rgba(120,94,52,0.14)]"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-[#8f7d6a] uppercase">
              Book Now
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#8f6220]">
              Request a custom consultation
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#64584c]">
              Share the rooms, style goals, and finishes you are considering. We
              will send the consultation request directly to our team.
            </p>
            <div className="mt-6 rounded-2xl border border-[#eadfcf] bg-[#fff7eb] p-4">
              <p className="text-sm font-semibold tracking-[0.18em] text-[#8f7d6a] uppercase">
                Ideal For
              </p>
              <p className="mt-2 text-sm leading-6 text-[#64584c]">
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

      <section className="border-b border-[#e1d3bd] bg-[#fffaf2] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 md:px-10">
          {consultationBenefits.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#dfcfb5] bg-[#fff7eb] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(120,94,52,0.10)]"
            >
              <h2 className="text-2xl font-bold text-[#8f6220]">
                {item.title}
              </h2>
              <p className="mt-4 leading-7 text-[#615447]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.22em] text-[#a36a14] uppercase">
              Styling Directions
            </p>
            <h2 className="mt-3 text-4xl font-bold text-[#8f6220]">
              A more luxurious palette starts with a stronger room story.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#615447]">
              These consultation directions are designed for homes that want
              warmth, polish, and a more intentional relationship between paint,
              finishes, and furnishings.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stylingDirections.map((style) => (
              <article
                key={style.name}
                className="group overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-[0_18px_40px_rgba(120,94,52,0.12)]"
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
                  <p className="leading-7 text-[#615447]">
                    {style.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfcfb5] bg-[linear-gradient(135deg,_rgba(255,250,242,1)_0%,_rgba(243,228,196,0.75)_100%)] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#a36a14] uppercase">
              What Is Included
            </p>
            <h2 className="mt-3 text-4xl font-bold text-[#8f6220]">
              One or two rooms planned with more confidence and cohesion.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#615447]">
              This service is meant to reduce hesitation, clarify the palette,
              and help the next painting step feel more intentional from day
              one.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-sm">
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
                className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2]/90 p-5 text-sm leading-6 text-[#615447] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] p-8 shadow-[0_20px_48px_rgba(120,94,52,0.12)]">
            <p className="text-sm font-semibold tracking-[0.22em] text-[#a36a14] uppercase">
              Why It Helps
            </p>
            <h2 className="mt-3 text-4xl font-bold text-[#8f6220]">
              Better color decisions usually lead to better finished rooms.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#615447]">
              Color consultation is not just about choosing a swatch. It is
              about creating a room that feels balanced in natural light, works
              with existing finishes, and still looks strong once the paint is
              on the wall every day.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#615447]">
              If you already know you want Gold Lion Painting to complete the
              project, this consultation also helps streamline the painting
              estimate and keeps the finish direction aligned from start to
              finish.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d8c39f] bg-linear-to-br from-[#fffaf2] to-[#f3e4c4] p-7 shadow-[0_20px_45px_rgba(120,94,52,0.14)]">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#8f7d6a] uppercase">
              Next Step
            </p>
            <h3 className="mt-2 text-3xl font-bold text-[#8f6220]">
              Ready to define your palette?
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#64584c]">
              Book a consultation, then move into your painting estimate with a
              clearer color direction and a more polished result in mind.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#consultation"
                className="rounded-2xl bg-[#d4a038] px-5 py-3 text-center font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
              >
                Request Consultation
              </a>
              <Link
                href="/contact-us"
                className="rounded-2xl border border-[#d8c39f] bg-[#fffaf2] px-5 py-3 text-center font-bold text-[#8f6220] transition hover:bg-[#f4ecdf]"
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
