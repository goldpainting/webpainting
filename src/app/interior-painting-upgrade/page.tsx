'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import FaqSchema from "../components/FaqSchema";
import ServiceEstimateCard from "../components/ServiceEstimateCard";
import ServiceReviewHighlights from "../components/ServiceReviewHighlights";
import { googleReviewsHref } from "../siteConfig";

export default function InteriorPaintingUpgradePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(0);
  const processSteps = [
    {
      number: '01',
      title: 'Surface Evaluation',
      description:
        'Before work begins, we inspect wall condition, ceiling condition, prior paint failure, patch areas, stress cracks, nail pops, drywall imperfections, and transitions between different surfaces.',
      image:
        '/palmeto/Painting-interior-luxury-painters.jpg',
      alt: 'Gold Lion Painting interior room with light blue feature wall and white trim',
    },
    {
      number: '02',
      title: 'Protection of Floors, Furniture, and Adjacent Surfaces',
      description:
        'Floors, furniture, fixtures, counters, and nearby surfaces are covered and protected to keep the project clean, organized, and controlled from start to finish.',
      image:
        '/bradenton/custom-cabinet-painting-bradenton-03.jpg',
      alt: 'Gold Lion Painting finished interior accent wall project in a living room',
    },
    {
      number: '03',
      title: 'Drywall Repair and Surface Correction',
      description:
        'Minor drywall damage, failed patchwork, dents, cracks, and surface irregularities are corrected before painting, especially where interior lighting can expose imperfections.',
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-3.jpg',
      alt: 'Gold Lion Painting finished interior room with blue walls and natural light',
    },
    {
      number: '04',
      title: 'Sanding, Caulking, and Adhesion Preparation',
      description:
        'Glossy surfaces, rough transitions, patch zones, trim edges, and previously painted areas are conditioned to improve adhesion and finish quality.',
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-6.jpg',
      alt: 'Gold Lion Painting finished interior room with soft gray walls and dark doors',
    },
    {
      number: '05',
      title: 'Primer Application When Needed',
      description:
        'Primer helps stabilize repaired areas, improve coverage, support adhesion, and create a stronger foundation for the final finish system.',
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/IMG-20240811-WA0101.jpg',
      alt: 'Gold Lion Painting interior room with light blue feature wall and crown molding',
    },
    {
      number: '06',
      title: 'Finish Coat Application',
      description:
        'Finish coats are applied with attention to consistency, line clarity, coverage, sheen control, and long-term durability for a cleaner, more polished final result.',
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-4.jpg',
      alt: 'Gold Lion Painting finished interior accent wall with shelving and decor',
    },
    {
      number: '07',
      title: 'Final Review and Touch-Ups',
      description:
        'After painting is complete, we review details, coverage, transitions, and touch-up areas so the final presentation feels sharp, complete, and professional.',
      image:
        '/services/house-interior-painting-manatee-county.jpg',
      alt: 'Gold Lion Painting finished interior room with blue walls and bright windows',
    },
  ];

  const highlights = [
    'Detailed prep before any paint is applied',
    'Protection for floors, furniture, and surrounding surfaces',
    'Drywall repairs and smoother wall presentation',
    'Cleaner lines, better sheen consistency, and stronger durability',
    'A process designed for occupied homes and everyday living',
  ];

  const gallery = [
    {
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/IMG-20240811-WA0101.jpg',
      alt: 'Gold Lion Painting interior room with light blue wall and white trim',
    },
    {
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-6.jpg',
      alt: 'Gold Lion Painting finished interior room with soft gray walls and dark doors',
    },
    {
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-3.jpg',
      alt: 'Gold Lion Painting finished interior room with blue walls and windows',
    },
    {
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-4.jpg',
      alt: 'Gold Lion Painting finished interior accent wall with shelves and a mirror',
    },
  ];

  const lightboxSlides = processSteps.map((step) => ({
    src: step.image,
    alt: step.alt,
    title: step.title,
  }));

  const faqs = [
    {
      q: "How long does interior painting take?",
      a: "Timelines depend on square footage, room count, repair needs, trim scope, and occupancy.",
    },
    {
      q: "Do you do drywall repair before painting?",
      a: "Yes, minor drywall repairs and crack correction are included when needed.",
    },
    {
      q: "Do you paint ceilings, trim, and doors?",
      a: "Yes. We include walls, ceilings, baseboards, casings, crown molding, doors, and painted millwork.",
    },
    {
      q: "What paint do you use?",
      a: "We commonly use Sherwin-Williams interior systems, including Duration and Emerald.",
    },
    {
      q: "Are you insured?",
      a: "Yes.",
    },
    {
      q: "How do I get an estimate?",
      a: "Visit /contact-us or call 941-462-5894.",
    },
  ];

  const interiorSignals = [
    "Smoother wall presentation in natural light",
    "Trim and door lines that feel sharper room to room",
    "A calmer, more elevated atmosphere without renovation",
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e7] px-4 py-12 font-sans text-[#2f2a24] flex flex-col items-center">
      <FaqSchema faqs={faqs} id="interior-painting-faq-schema" />
      <div className="max-w-5xl w-full">
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="lux-panel relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#fbf4e8] via-[#efe2d2] to-[#f8f2e8] p-8 md:p-10">
            <div className="texture-grid pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60" />
            <p className="editorial-kicker relative">
              Interior Painting Upgrade
            </p>
            <h1 className="relative mt-4 text-4xl font-bold leading-[1.04] text-[#8f6220] md:text-5xl">Interior Painting Services in Manatee County</h1>
            <h2 className="relative mt-4 text-2xl font-semibold text-[#2f2a24]">Professional Interior House Painters for Clean, Durable, High-End Results</h2>
            <p className="relative mt-5 text-lg leading-8 text-[#615447]">
              Gold Lion Painting Inc provides professional interior painting services in Manatee County for homeowners who want cleaner finishes,
              sharper lines, better durability, and a more updated interior without major remodeling.
            </p>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">10+</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Years across our painting team</p>
              </div>
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">5-Year</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Workmanship warranty on qualifying jobs</p>
              </div>
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">Clean</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Organized workflow for occupied homes</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-sm">
              <div className="relative h-72">
                <Image
                  src="/parrish/Lluxury-interior-painting.jpg"
                  alt="Luxury interior room with smooth gray wall paint and dark wood ceiling"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="project-overlay absolute inset-0" />
                <div className="absolute left-5 top-5 rounded-full border border-[#e9cb88] bg-[#f2d493]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c3d16]">
                  Signature Interior Finish
                </div>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] p-4 text-sm leading-6 text-[#5d4f42]">
                  Detailed prep, drywall correction, and sheen consistency planning.
                </div>
                <div className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] p-4 text-sm leading-6 text-[#5d4f42]">
                  Trim, doors, and walls coordinated for a cleaner visual flow room to room.
                </div>
              </div>
            </div>
          </div>
          <ServiceEstimateCard
            title="Start Your Interior Painting Estimate"
            description="Share your rooms, timeline, and finish goals. We will open your email app with a ready-to-send interior painting estimate request."
          />
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lux-panel rounded-[2rem] p-7">
            <p className="editorial-kicker">Why This Feels Premium</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#34261b]">
              Interior painting should change how the home feels, not just the wall color.
            </h2>
            <p className="mt-4 leading-7 text-[#64584c]">
              The strongest interior projects feel brighter in daylight, cleaner around trim and doors, and more balanced from room to room. That is usually the difference between a repaint and a true finish upgrade.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {interiorSignals.map((signal, index) => (
              <article
                key={signal}
                className={`lux-panel rounded-[2rem] p-6 ${index === 1 ? "md:translate-y-5" : ""}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                  Interior Priority
                </p>
                <p className="mt-4 text-lg leading-7 text-[#4f4338]">{signal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-[#d8c39f] bg-[#fffaf2] p-6 shadow-[0_18px_40px_rgba(120,94,52,0.08)] md:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a36a14]">Featured Interior Projects</p>
            <h2 className="mt-2 text-2xl font-bold text-[#8f6220] md:text-3xl">Premium Interior Finishes With Clean, Modern Presentation</h2>
            <p className="mt-3 text-[#615447]">
              A curated gallery of recent interior projects highlighting smooth wall finishes, crisp trim transitions, and refined color balance.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <article className="group overflow-hidden rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] shadow-sm lg:col-span-7">
              <div className="relative h-72 md:h-80">
                <Image
                  src="/parrish/Lluxury-interior-painting.jpg"
                  alt="Luxury interior room with smooth gray wall paint and dark wood ceiling"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-[#8f6220]">Luxury Living Room Finish</p>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] shadow-sm lg:col-span-5">
              <div className="relative h-72 md:h-80">
                <Image
                  src="/palmeto/Painters-interior-contractor-painting-house.jpg"
                  alt="Coastal-style hallway and stairway with balanced blue interior wall color"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-[#8f6220]">Coastal Blue Interior Palette</p>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] shadow-sm lg:col-span-4">
              <div className="relative h-56">
                <Image
                  src="/services/professional-interior-painting-manatee-county.jpg"
                  alt="Open-concept interior painting with clean neutral walls"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-[#8f6220]">Open-Concept Interior</p>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] shadow-sm lg:col-span-4">
              <div className="relative h-56">
                <Image
                  src="/services/house-interior-painting-manatee-county.jpg"
                  alt="Bright bedroom repaint with crisp trim and uniform coverage"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-[#8f6220]">Bedroom Repaint Detail</p>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] shadow-sm lg:col-span-4">
              <div className="relative h-56">
                <Image
                  src="/services/living-room-painting-manatee-county.jpg"
                  alt="Modern living room interior repaint showcasing premium contrast"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <p className="px-4 py-3 text-sm font-semibold text-[#8f6220]">Modern Living Space</p>
            </article>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Residential Interior Painting That Improves the Entire Home</h2>
          <p className="mb-4 text-[#615447]">
            A professional interior repaint does more than refresh wall color. It can improve brightness, visual consistency,
            perceived cleanliness, architectural definition, and overall property presentation.
          </p>
          <p className="mb-4 text-[#615447]">
            For many homeowners, interior house painting is one of the highest-impact upgrades available without entering
            the cost and disruption of major renovation.
          </p>
          <ul className="grid list-disc list-inside gap-2 pl-4 text-[#615447]">
            <li>Wall color feels outdated</li>
            <li>Ceilings show age or discoloration</li>
            <li>Trim looks worn or yellowed</li>
            <li>Previous paint work has visible flaws</li>
            <li>Drywall repairs are needed before repainting</li>
            <li>Homeowners want a cleaner, more modern interior</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Interior Painters in Manatee County for Walls, Ceilings, Trim, and Doors</h2>
          <p className="mb-4 text-[#615447]">
            We provide interior painting services for the most visible painted surfaces inside the home.
            Durable and attractive results depend on how each surface is prepared, repaired, primed, and finished.
          </p>
          <ul className="grid list-disc list-inside gap-2 pl-4 text-[#615447] md:grid-cols-2">
            <li>Walls and ceilings</li>
            <li>Baseboards and crown molding</li>
            <li>Window trim and door casings</li>
            <li>Interior doors and painted millwork</li>
            <li>Hallways, bedrooms, and living rooms</li>
            <li>Dining rooms, kitchens, and bathrooms</li>
            <li>Laundry rooms and entry areas</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Our Interior Painting Process</h2>

          <div className="px-6 md:px-10 pb-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1.4fr] gap-8 items-start">
              <div className="space-y-6 lg:sticky lg:top-8">
                <div className="bg-[#f4efe7] border border-[#cdb99a] rounded-[28px] p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#a66f09] mb-5">
                    What Homeowners Can Expect
                  </h3>
                  <ul className="space-y-4">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base md:text-lg text-[#5c4937]">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d39a1d] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {gallery.map((item) => (
                    <div
                      key={item.image}
                      className="overflow-hidden rounded-[24px] border border-[#ccb89b] bg-[#f7f2ea] shadow-sm"
                    >
                      <div className="relative h-44 w-full md:h-48">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 50vw, 20vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                {processSteps.map((step, idx) => (
                  <div
                    key={step.number}
                    className="overflow-hidden bg-[#f7f2ea] border border-[#ccb89b] rounded-[30px] shadow-sm"
                  >
                    <div className="grid md:grid-cols-[260px_1fr] items-stretch">
                      <div
                        className="relative h-64 w-full cursor-pointer transition-opacity hover:opacity-80 md:h-full"
                        onClick={() => {
                          setLightboxSlide(idx);
                          setLightboxOpen(true);
                        }}
                      >
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 260px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex gap-5 items-start">
                        <div className="h-14 w-14 rounded-2xl bg-[#d39a1d] text-[#2d2117] font-bold text-lg flex items-center justify-center shrink-0">
                          {step.number}
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-2xl md:text-3xl font-bold leading-snug text-[#2d2117]">
                            {step.title}
                          </h4>
                          <p className="text-base md:text-lg leading-8 text-[#5c4937]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Why Surface Preparation Matters</h2>
            <p className="mb-3 text-[#615447]">
              Preparation determines whether a paint job looks sharp for the long term or loses quality early.
              Even premium products cannot compensate for poor prep.
            </p>
            <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
              <li>Better adhesion</li>
              <li>Improved durability</li>
              <li>Smoother finish quality</li>
              <li>Cleaner cut lines</li>
              <li>Better color and sheen consistency</li>
              <li>Fewer defects under light</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Interior House Painting for Occupied Homes</h2>
            <p className="mb-3 text-[#615447]">
              Most repaint projects happen while homeowners are living in the property. Project organization matters as much as product selection.
            </p>
            <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
              <li>Room-by-room sequencing</li>
              <li>Daily site organization</li>
              <li>Clean containment practices</li>
              <li>Protected walk paths</li>
              <li>Reduced disruption to normal home use</li>
              <li>Clear communication during each phase</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Wall Painting, Ceiling Painting, and Trim Painting</h2>
          <h3 className="mt-6 mb-2 text-xl font-bold text-[#8f6220]">Wall Painting</h3>
          <p className="mb-3 text-[#615447]">
            Walls influence brightness, mood, cleanliness, and how modern the house feels. Proper wall painting depends on prep quality,
            color selection, and finish distribution.
          </p>
          <h3 className="mt-6 mb-2 text-xl font-bold text-[#8f6220]">Ceiling Painting</h3>
          <p className="mb-3 text-[#615447]">
            Ceilings often show age through discoloration, stains, patching marks, and uneven texture. Fresh ceiling paint helps rooms feel brighter.
          </p>
          <h3 className="mt-6 mb-2 text-xl font-bold text-[#8f6220]">Trim Painting</h3>
          <p className="text-[#615447]">
            Baseboards, casings, doors, and crown molding provide structure. Proper trim painting improves edge definition and overall interior refinement.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Sheen Selection, Lighting, and Color Flow</h2>
            <p className="mb-3 text-[#615447]">
              Natural light, artificial lighting, adjacent rooms, and open floor plans all influence paint perception after completion.
            </p>
            <ul className="list-disc list-inside pl-4 text-[#615447]">
              <li>Flatter finishes can soften minor wall imperfections</li>
              <li>Eggshell and satin improve cleanability in active living areas</li>
              <li>Trim and doors often require stronger finish durability</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Sherwin-Williams Interior Paint Systems</h2>
            <p className="text-[#615447]">
              Gold Lion Painting Inc uses Sherwin-Williams systems, including Duration and Emerald, when those products
              are the right match for surface condition, room use, sheen goals, and long-term durability.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Drywall Repair and Interior Repainting</h2>
          <p className="mb-4 text-[#615447]">
            Repainting over dents, hairline cracks, nail pops, rough patches, and failed repairs usually leads to a weaker result.
            For that reason, drywall correction is often part of a professional repaint strategy.
          </p>
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Why Homeowners Choose Repainting Instead of Renovation</h2>
          <p className="mb-3 text-[#615447]">
            A full renovation can be expensive, disruptive, and time-consuming. Interior repainting can deliver major visual improvement without demolition.
          </p>
          <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
            <li>Modernize outdated rooms</li>
            <li>Improve resale presentation</li>
            <li>Refresh worn living areas</li>
            <li>Update color schemes</li>
            <li>Create cohesive interior design</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Interior Painting Services for Different Types of Homes</h2>
          <p className="mb-3 text-[#615447]">
            Some homeowners need a simple refresh before moving in or selling. Others need a design-driven repaint with stronger finish expectations.
            Our process stays disciplined while scope and detail level are tailored to homeowner priorities.
          </p>
          <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
            <li>Home size and room count</li>
            <li>Existing surface condition</li>
            <li>Finish level and durability expectations</li>
            <li>Occupied versus vacant project conditions</li>
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="mt-8 mb-2 text-xl font-bold text-[#8f6220]">Integrated Service Approach</h3>
          <p className="mb-4">
            Explore <Link href="/exterior-painting-upgrade" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Exterior House Painting</Link> and cabinet painting for full property transformation.
          </p>
          <h3 className="mt-8 mb-2 text-xl font-bold text-[#8f6220]">Service Areas</h3>
          <p className="mb-4">We proudly serve interior painting projects throughout Manatee County, including:</p>
          <ul className="list-disc list-inside mb-4 pl-4 text-lg grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
            <li><Link href="/lakewood-ranch" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Lakewood Ranch</Link></li>
            <li><Link href="/bradenton" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Bradenton</Link></li>
            <li><Link href="/parrish" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Parrish</Link></li>
            <li><Link href="/palmetto" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Palmetto</Link></li>
            <li><Link href="/ellenton" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Ellenton</Link></li>
            <li><Link href="/ana-maria" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Anna Maria Island</Link></li>
            <li><Link href="/holmes-beach" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Holmes Beach</Link></li>
          </ul>
        </section>

        <section className="mb-10">
          <ServiceReviewHighlights
            title="Interior Painting Review Highlights"
            description="Interior painting is usually judged on cleanliness, wall smoothness, trim definition, and how much more polished the home feels afterward. These highlights reflect that homeowner perspective."
            googleReviewsHref={googleReviewsHref}
            reviews={[
              {
                label: "Interior Finish",
                quote: "Interior finish looks smooth and professional.",
                note: "A finish-focused result that feels cleaner and more intentional once the rooms are back in use.",
              },
              {
                label: "Room Refresh",
                quote: "Interior finish looks smooth and clean.",
                note: "Exactly the kind of outcome homeowners want when they are updating worn walls, trim, and ceilings without remodeling.",
              },
              {
                label: "Project Experience",
                quote: "Professional and reliable team.",
                note: "Interior projects succeed when the jobsite stays organized and the final result feels worth the disruption.",
              },
            ]}
          />
        </section>

        <section className="mb-10">
          <h3 className="mt-8 mb-2 text-xl font-bold text-[#8f6220]">FAQ - Interior Painting</h3>
          <div className="mb-4 text-[#615447]">
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">How long does interior painting take?</span> Timelines depend on square footage, room count, repair needs, trim scope, and occupancy.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Do you do drywall repair before painting?</span> Yes, minor drywall repairs and crack correction are included when needed.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Do you paint ceilings, trim, and doors?</span> Yes. We include walls, ceilings, baseboards, casings, crown molding, doors, and painted millwork.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">What paint do you use?</span> We commonly use Sherwin-Williams interior systems, including Duration and Emerald.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Are you insured?</span> Yes.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">How do I get an estimate?</span> Visit /contact-us or call 941-462-5894.</p>
          </div>
          <p className="mt-8 text-lg text-[#615447]">For a complete home transformation, consider pairing your interior repaint with our <Link href="/cabinet-painting-mejor" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Cabinet Refinishing</Link> services to refresh your kitchen or bathroom.</p>
        </section>

        {/* Request a Consultation */}
        <section className="mb-10 rounded-3xl border border-[#d8c39f] bg-linear-to-r from-[#fff7eb] to-[#f4ecdf] p-8 text-center shadow-[0_18px_40px_rgba(120,94,52,0.08)] md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-[#8f6220]">Request a Consultation</h2>
          <p className="mx-auto mb-4 max-w-2xl text-[#615447]">Interior painting can modernize every room when the current finish no longer matches how the home looks and feels. With the right prep, product selection, sheen choices, and structured application, existing walls, ceilings, and trim can become a cleaner and more polished backdrop for daily living.</p>
          <p className="mx-auto mb-6 max-w-2xl text-[#615447]">Homeowners gain visual improvement, a fresher interior atmosphere, and better long-term surface protection without the disruption of renovation. Ready to plan your project? We can define color direction, scope, timeline, and next steps with a structured consultation.</p>
          <a href="/contact-us" className="inline-block rounded-xl bg-[#d4a038] px-8 py-3 font-bold text-[#2f2a24] transition hover:bg-[#c7942f]">Get a Free Estimate</a>
        </section>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxSlide}
      />
    </main>
  );
}

