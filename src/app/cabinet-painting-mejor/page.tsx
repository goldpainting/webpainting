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

export default function CabinetPaintingMejorPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(0);

  const processSteps = [
    {
      number: '01',
      title: 'Door Removal and Project Setup',
      description:
        'We label doors, drawers, and hardware for an organized refinishing process and accurate reinstallation once the project is complete.',
      image:
        '/anamaria/kitchen-cabinet-painting-anna-maria-.jpg',
      alt: 'Gold Lion Painting built-in cabinet project used to represent cabinet refinishing setup',
    },
    {
      number: '02',
      title: 'Cleaning, Degreasing, and Surface Prep',
      description:
        'Cabinet surfaces are cleaned, degreased, sanded, and deglossed to remove residue and create the right foundation for long-term adhesion.',
      image:
        '/services/custom-cabinet-painting-manatee-county.jpg',
      alt: 'Gold Lion Painting kitchen cabinets before refinishing',
    },
    {
      number: '03',
      title: 'Repairs, Priming, and Surface Refinement',
      description:
        'Minor wood repairs, detail corrections, and bonding primer help stabilize the finish and create a smoother, more refined final look.',
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/IMG-20240811-WA0116.jpg',
      alt: 'Gold Lion Painting custom built-in cabinetry after detail work and refinishing',
    },
    {
      number: '04',
      title: 'Professional Cabinet Paint Application',
      description:
        'We apply cabinet-grade coatings for smooth coverage, cleaner edges, and a durable finish that looks sharper than a basic brush-and-roll repaint.',
      image:
        '/parrish/Luxury-cabinets-painting-dif.png',
      alt: 'Gold Lion Painting finished white kitchen cabinets after refinishing',
    },
    {
      number: '05',
      title: 'Reassembly and Final Detail Review',
      description:
        'After curing and detail checks, doors and hardware are reinstalled so the final presentation looks clean, aligned, and professionally finished.',
      image:
        '/services/professional-cabinet-painters-manatee-county.jpg',
      alt: 'Gold Lion Painting completed kitchen refinishing project ready for final walkthrough',
    },
  ];

  const highlights = [
    'Lower cost than full cabinet replacement',
    'Controlled prep for better adhesion and durability',
    'Cabinet-grade finishes with a smoother, cleaner look',
    'Ideal for kitchens, bathrooms, and built-in cabinetry',
    'Real Gold Lion Painting project photos throughout the page',
  ];

  const gallery = [
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//assets.cdn.filesafe.space/9eKS5YhMm2c6qgFRolMv/media/69864fed7b947f45e6e3ea08.webp',
      alt: 'Gold Lion Painting kitchen cabinets before refinishing',
    },
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/698a401a634d0a4f8037000f.webp',
      alt: 'Gold Lion Painting finished white kitchen cabinet refinishing project',
    },
    {
      image:
        'https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/IMG-20240811-WA0116.jpg',
      alt: 'Gold Lion Painting refinished built-in cabinetry project',
    },
  ];

  const faqs = [
    {
      q: "Do you spray cabinet doors and drawer fronts?",
      a: "Yes. Spray application is commonly used because it creates a smoother and more even finish than basic brushing or rolling.",
    },
    {
      q: "Can hardware be replaced during the project?",
      a: "Yes. Pulls, knobs, soft-close hinges, and alignment improvements can be included.",
    },
    {
      q: "Is cabinet refinishing cheaper than replacing cabinets?",
      a: "In many cases, yes. It is often significantly more cost-effective when structure and layout are still usable.",
    },
    {
      q: "Can bathroom vanities be refinished too?",
      a: "Yes. It uses a similar preparation and coating approach.",
    },
    {
      q: "How long does consultation usually take?",
      a: "It depends on kitchen size, finish expectations, hardware changes, and whether light remodeling elements are included.",
    },
    {
      q: "Are you insured?",
      a: "Yes.",
    },
  ];

  const cabinetSignals = [
    "A kitchen that feels redesigned without full replacement",
    "Cleaner cabinet lines, smoother finish, and stronger visual consistency",
    "A project flow that feels controlled in the most used room of the house",
  ];

  return (
    <main className="min-h-screen bg-[#ebe5db] text-[#2d2117] font-sans py-12 px-4 flex flex-col items-center">
      <FaqSchema faqs={faqs} id="cabinet-painting-faq-schema" />
      <div className="max-w-5xl w-full">
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="lux-panel relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#fbf4e8] via-[#efe2d2] to-[#f8f2e8] p-8 md:p-10">
            <div className="texture-grid pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60" />
            <p className="editorial-kicker relative">
              Cabinet Refinishing Upgrade
            </p>
            <h1 className="relative mt-4 text-4xl font-bold leading-[1.04] text-[#8f6220] md:text-5xl">
              Cabinet Refinishing & Kitchen Painting Services
            </h1>
            <h2 className="relative mt-4 text-2xl font-semibold text-[#2d2117]">
              Kitchen Transformation Without Full Renovation
            </h2>
            <p className="relative mt-5 text-lg leading-8 text-[#5c4937]">
              Professional cabinet refinishing is one of the strongest ways to transform a kitchen without the cost,
              dust, and disruption of a full cabinet replacement. When the cabinet layout still works but the finish
              looks dated, worn, yellowed, or inconsistent, a structured refinishing project can completely change
              the room.
            </p>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">Refinish</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Keep the layout and upgrade the visible finish</p>
              </div>
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">Spray</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Cleaner cabinet-grade finish systems</p>
              </div>
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">Modernize</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">A stronger kitchen presentation without full replacement</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-sm">
              <div className="relative h-72">
                <Image
                  src="/services/custom-cabinet-painting-manatee-county.jpg"
                  alt="Professional cabinet refinishing project in a bright kitchen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="project-overlay absolute inset-0" />
                <div className="absolute left-5 top-5 rounded-full border border-[#e9cb88] bg-[#f2d493]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c3d16]">
                  Kitchen Finish Upgrade
                </div>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] p-4 text-sm leading-6 text-[#5d4f42]">
                  Controlled prep and cabinet-grade coatings deliver a cleaner look than a basic repaint.
                </div>
                <div className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] p-4 text-sm leading-6 text-[#5d4f42]">
                  Strong option for kitchens, vanities, and built-ins that are structurally sound but visually dated.
                </div>
              </div>
            </div>
          </div>
          <ServiceEstimateCard
            title="Start Your Cabinet Refinishing Estimate"
            description="Share your kitchen size, finish goals, and whether you are considering hardware upgrades. We will open your email app with a ready-to-send cabinet estimate request."
          />
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lux-panel rounded-[2rem] p-7">
            <p className="editorial-kicker">Why This Feels Premium</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#34261b]">
              Cabinet refinishing should feel like a kitchen upgrade, not just repainting doors.
            </h2>
            <p className="mt-4 leading-7 text-[#64584c]">
              The strongest cabinet projects modernize the room visually, tighten the finish quality up close, and reduce the disruption that usually comes with a full remodel.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {cabinetSignals.map((signal, index) => (
              <article
                key={signal}
                className={`lux-panel rounded-[2rem] p-6 ${index === 1 ? "md:translate-y-5" : ""}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                  Cabinet Priority
                </p>
                <p className="mt-4 text-lg leading-7 text-[#4f4338]">{signal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Professional Cabinet Refinishing</h2>
          <p className="text-[#615447] mb-4">
            Cabinet refinishing and kitchen modernization are ideal for homeowners who want a high-end visual update
            without removing perfectly usable cabinetry. Existing doors, drawer fronts, and frames are cleaned,
            sanded, repaired, primed, and coated with cabinet-grade finishes.
          </p>
          <p className="text-[#615447] mb-4">
            Done correctly, the final result looks cleaner, sharper, and far more refined than a basic repaint.
            It also avoids the longer timeline and higher budget associated with full remodeling.
          </p>
          <p className="text-[#615447]">
            This service works especially well in homes where cabinet layout and storage function are still strong,
            but style, color, or finish quality no longer reflects the rest of the property. Refinishing solves that
            gap by updating visible surfaces while preserving useful framework.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Our Cabinet Refinishing Process</h2>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1.4fr] gap-8 items-start">
            <div className="space-y-6 lg:sticky lg:top-8">
              <div className="bg-[#f4efe7] border border-[#cdb99a] rounded-[28px] p-6 md:p-8 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-[#a66f09] mb-5">
                  Why Homeowners Choose Cabinet Refinishing
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

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {gallery.map((item) => (
                  <div
                    key={item.image}
                    className="overflow-hidden rounded-3xl border border-[#ccb89b] bg-[#f7f2ea] shadow-sm"
                  >
                    <div className="relative h-48 w-full md:h-56">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 24vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-[#f7f2ea] border border-[#ccb89b] rounded-[30px] shadow-sm p-6 md:p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-[#2d2117] mb-4">
                  Our Refinishing Process
                </h3>
                <p className="text-base md:text-lg leading-8 text-[#5c4937] max-w-3xl">
                  Cabinets are high-touch surfaces exposed to grease, humidity, food residue, and repeated cleaning. Because of that, prep work and coating control have to be far more disciplined than a standard interior repaint.
                </p>
              </div>

              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="overflow-hidden bg-[#f7f2ea] border border-[#ccb89b] rounded-[30px] shadow-sm"
                >
                  <div className="grid md:grid-cols-[260px_1fr] items-stretch">
                    <div
                      className="relative h-64 w-full cursor-pointer transition-opacity hover:opacity-80 md:h-full"
                      onClick={() => {
                        setLightboxSlide(parseInt(step.number) - 1);
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
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-[#d8c39f] bg-[#fffaf2] p-6">
            <h2 className="text-xl font-bold text-[#8f6220] mb-3">Surface Preparation & Detail Work</h2>
            <p className="text-[#615447] mb-3">
              Preparation determines quality. A disciplined prep phase improves adhesion, cleaner lines,
              fewer imperfections, and more polished results. It also improves how final color reads under bright lighting.
            </p>
            <p className="text-[#615447]">
              If edges are rough, grease remains, or glossy surfaces are not conditioned correctly, the coating
              system is compromised before color is even applied. Strong prep protects both immediate appearance
              and long-term durability.
            </p>
          </div>
          <div className="rounded-xl border border-[#d8c39f] bg-[#fffaf2] p-6">
            <h2 className="text-xl font-bold text-[#8f6220] mb-3">Spray Application & Finish Options</h2>
            <p className="text-[#615447] mb-3">
              Light neutrals brighten kitchens and pair with most materials. Darker tones can create a custom look.
              Two-tone layouts remain a strong option, and sheen selection should match both style and daily use.
            </p>
            <p className="text-[#615447]">
              Matte can feel soft and contemporary, while satin and semi-gloss are commonly selected for better
              cleanability and resistance in high-traffic kitchens. The right finish should align with both design
              goals and daily lifestyle.
            </p>
          </div>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-[#d8c39f] bg-[#fffaf2] p-6">
            <h2 className="text-xl font-bold text-[#8f6220] mb-3">Hardware Upgrades & Minor Carpentry</h2>
            <p className="text-[#615447] mb-3">
              New pulls, knobs, and hinges can dramatically improve final presentation. Even well-painted cabinets
              can feel dated with old hardware. Upgrades improve both appearance and daily usability.
            </p>
            <p className="text-[#615447]">
              Soft-close hinges, simplified pulls, and better alignment help complete the transformation and support
              the visual quality expected in a true kitchen modernization project.
            </p>
          </div>
          <div className="rounded-xl border border-[#d8c39f] bg-[#fffaf2] p-6">
            <h2 className="text-xl font-bold text-[#8f6220] mb-3">Bathroom Vanity Refinishing</h2>
            <p className="text-[#615447] mb-3">
              Vanity refinishing follows the same controlled prep and coating logic, helping bathrooms feel cleaner,
              more updated, and visually aligned with kitchen improvements.
            </p>
            <p className="text-[#615447]">
              This expands the value of the service by applying the same refinement principles across interior
              cabinetry, not only kitchen cabinets.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Cabinet Services for Different Property Levels</h2>
          <p className="text-[#615447] mb-4">
            Not every project has the same goal. Some homeowners want a clean, budget-conscious refresh,
            while others want a design-driven upgrade with premium finish expectations. A professional cabinet service
            should align finish level, scope, and detail with property type and homeowner priorities.
          </p>
          <p className="text-[#615447]">
            For that reason, cabinet refinishing can be adapted for entry-level homes, mid-range properties,
            executive residences, and luxury interiors. The process stays disciplined while specification depth
            can be tailored.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Durability, Maintenance & Project Coordination</h2>
          <p className="text-[#615447] mb-4">
            Properly refinished cabinets reduce premature replacement and support cleaner long-term presentation.
            Longevity depends on preparation quality, product compatibility, and disciplined application.
          </p>
          <p className="text-[#615447]">
            On the operational side, clear scheduling, floor protection, surface masking, and organized communication
            make the project easier for homeowners from start to finish.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Why Homeowners Choose This Type of Service</h2>
          <p className="text-[#615447] mb-4">
            Cabinet projects succeed through preparation, cleanliness, coordination, and consistency. Countertops,
            appliances, and adjacent surfaces must be protected correctly, and communication must stay clear throughout
            each phase.
          </p>
          <p className="text-[#615447]">
            Homeowners are not only hiring for visual improvement. They are hiring for a controlled process,
            reliable execution, and confidence that the finish will perform.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Planning, Expectations & Design Considerations</h2>
          <p className="text-[#615447] mb-4">
            Some homeowners prioritize appearance, some prioritize minimal disruption, and others prioritize long-term
            value. A strong cabinet landing should address all three and explain how refinishing improves style,
            protects function, and keeps project flow organized.
          </p>
          <p className="text-[#615447]">
            Strong expectation setting matters. The quality of final results depends on preparation, compatible products,
            jobsite control, and realistic design decisions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Refinishing vs Replacement</h2>
          <p className="text-[#615447] mb-4">
            Full replacement usually means highest price, longest timeline, and most disruption.
            Refinishing keeps the existing cabinet structure and updates the finish system, often providing
            the best ratio of cost, speed, and visual impact when cabinets are structurally sound.
            Pair your cabinet refinishing with <Link href="/interior-painting-upgrade" className="text-[#8f6220] hover:text-[#a36a14] underline">Interior Painting Services</Link> for a complete home transformation.
          </p>
          <p className="text-[#615447]">
            If cabinetry is structurally failing or layout is no longer functional, replacement may be justified.
            But for many homes with solid cabinet boxes, refinishing offers excellent performance with less disruption.
          </p>
        </section>

        <section className="mb-10">
          <ServiceReviewHighlights
            title="Cabinet Refinishing Review Highlights"
            description="Cabinet projects are usually judged on finish smoothness, how modern the kitchen feels afterward, and whether the process stayed clean and organized."
            googleReviewsHref={googleReviewsHref}
            reviews={[
              {
                label: "Kitchen Upgrade",
                quote: "Our kitchen looked completely different when the cabinets were finished.",
                note: "A strong cabinet project creates the visual jump of a renovation without replacing the whole layout.",
              },
              {
                label: "Modern Finish",
                quote: "The cabinet finish gave us the modern look we wanted without replacing everything.",
                note: "This is the value homeowners are usually after: cleaner style, less disruption, and a better-looking room.",
              },
              {
                label: "Project Experience",
                quote: "Professional from prep to final touch-up.",
                note: "Cabinet refinishing feels premium when masking, schedule control, and final detailing are handled carefully.",
              },
            ]}
          />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-3">Frequently Asked Questions</h2>
          <div className="space-y-3 text-[#615447]">
            <p><span className="font-semibold text-[#8f6220]">Do you spray cabinet doors and drawer fronts?</span> Yes. Spray application is commonly used because it creates a smoother and more even finish than basic brushing or rolling.</p>
            <p><span className="font-semibold text-[#8f6220]">Can hardware be replaced during the project?</span> Yes. Pulls, knobs, soft-close hinges, and alignment improvements can be included.</p>
            <p><span className="font-semibold text-[#8f6220]">Is cabinet refinishing cheaper than replacing cabinets?</span> In many cases, yes. It is often significantly more cost-effective when structure and layout are still usable.</p>
            <p><span className="font-semibold text-[#8f6220]">Can bathroom vanities be refinished too?</span> Yes. It uses a similar preparation and coating approach.</p>
            <p><span className="font-semibold text-[#8f6220]">How long does consultation usually take?</span> It depends on kitchen size, finish expectations, hardware changes, and whether light remodeling elements are included.</p>
            <p><span className="font-semibold text-[#8f6220]">Are you insured?</span> Yes.</p>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#8f6220] mt-8 mb-2">Service Areas</h3>
          <p className="mb-4 text-[#615447]">We proudly serve cabinet painting and refinishing projects throughout Manatee County, including:</p>
          <ul className="list-disc list-inside mb-4 pl-4 text-lg grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
            <li><Link href="/lakewood-ranch" className="text-[#8f6220] hover:text-[#a36a14] underline">Lakewood Ranch</Link></li>
            <li><Link href="/bradenton" className="text-[#8f6220] hover:text-[#a36a14] underline">Bradenton</Link></li>
            <li><Link href="/parrish" className="text-[#8f6220] hover:text-[#a36a14] underline">Parrish</Link></li>
            <li><Link href="/palmetto" className="text-[#8f6220] hover:text-[#a36a14] underline">Palmetto</Link></li>
            <li><Link href="/ellenton" className="text-[#8f6220] hover:text-[#a36a14] underline">Ellenton</Link></li>
            <li><Link href="/anna-maria" className="text-[#8f6220] hover:text-[#a36a14] underline">Anna Maria Island</Link></li>
            <li><Link href="/holmes-beach" className="text-[#8f6220] hover:text-[#a36a14] underline">Holmes Beach</Link></li>
          </ul>
          <div className="bg-[#fffaf2] rounded-lg border border-[#d8c39f] p-4 mb-4 text-center text-[#8f6220] font-semibold">
            Cabinet painting requires calibrated spray pressure, controlled overlap, and uniform film thickness to prevent sagging or uneven sheen.
            Environmental conditions are monitored to maintain curing integrity, and high-touch zones receive reinforced application control.
            For complete exterior protection, explore our <Link href="/exterior-painting-upgrade" className="text-[#8f6220] hover:text-[#a36a14] underline">Exterior House Painting Systems</Link>.
          </div>
        </section>

        <section className="rounded-xl border border-[#d8c39f] bg-[#fffaf2] p-6 text-center mb-4">
          <h2 className="text-2xl font-bold text-[#8f6220] mb-2">Request a Consultation</h2>
          <p className="text-[#615447] mb-4">
            Cabinet refinishing can modernize a kitchen when layout still works but appearance no longer matches the home.
            With the right prep, primer, spray finish, detail work, and project coordination, existing cabinets can become a cleaner focal point.
          </p>
          <p className="text-[#64584c] mb-5">
            Homeowners gain visual improvement, functional upgrades, and a more polished interior without the
            disruption of full replacement. Ready to plan your project? We can define finish path, scope, timeline,
            and next steps with a structured consultation.
          </p>
          <Link href="/contact-us" className="inline-block bg-[#d4a038] text-[#2d2117] px-6 py-3 rounded font-bold hover:bg-[#c7942f] transition">
            Get a Free Estimate
          </Link>
        </section>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={processSteps.map((step) => ({
          src: step.image,
          alt: step.alt,
          title: step.title,
        }))}
        index={lightboxSlide}
      />
    </main>
  );
}
