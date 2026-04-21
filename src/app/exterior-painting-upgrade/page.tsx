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

export default function ExteriorPaintingUpgradePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Exterior Surface Assessment',
      description:
        'Before painting begins, we inspect chalking, peeling, blistering, caulk separation, UV fading, cracking, and moisture-related wear so the project starts with a clear plan.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/6986285547d382b6fe49376a.webp',
      alt: 'Gold Lion Painting exterior home project used to represent surface assessment',
    },
    {
      number: '02',
      title: 'Pressure Washing and Surface Cleaning',
      description:
        'Proper washing removes dirt, chalk, mildew, and environmental buildup to create a clean surface and improve paint adhesion.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/6989feb467d749f07913044a.webp',
      alt: 'Gold Lion Painting team member working on an exterior surface preparation stage',
    },
    {
      number: '03',
      title: 'Preparation, Sanding, and Surface Stabilization',
      description:
        'Preparation is one of the most important parts of exterior repainting. We handle sanding, scraping, surface conditioning, minor crack treatment, caulk replacement, and detail correction at transitions.',
      image:
        '/bradenton/professional-exterior-painters-bradenton-03.jpg.jpg',
      alt: 'Gold Lion Painting completed exterior project representing careful preparation and finish quality',
    },
    {
      number: '04',
      title: 'Stucco Crack Repair and Caulk Control',
      description:
        'Hairline stucco cracks and separated joints are addressed before painting to improve continuity, durability, and long-term appearance.',
      image:
        '/LakewoodRanch/stucco-repair-lakewood-ranch.jpg',
      alt: 'Gold Lion Painting residential exterior showing refined trim lines and clean detail work',
    },
    {
      number: '05',
      title: 'Primer and Coating System Selection',
      description:
        'Targeted priming improves adhesion, coverage, and long-term performance based on the substrate, climate exposure, and condition of the home.',
      image:
        '/ellenton/house-exterior-painting-ellenton.jpg',
      alt: 'Gold Lion Painting rear exterior project used to represent system planning and coating selection',
    },
    {
      number: '06',
      title: 'Exterior Paint Application',
      description:
        'Finish coats are applied with attention to coverage, edge control, consistency, and proper film build for a polished, durable result.',
      image:
        '/holmesbeach/luxury-exterior-painting-holmes-beach-02.jpg',
      alt: 'Gold Lion Painting commercial exterior project representing a clean final paint application',
    },
    {
      number: '07',
      title: 'Final Detail Review',
      description:
        'Coverage, lines, surface consistency, and touch-up needs are reviewed to make sure the final presentation looks clean, complete, and professional.',
      image:
        '/holmesbeach/residential-exterior-painting-holmes-beach-04.jpg',
      alt: 'Gold Lion Painting finished exterior home ready for final walkthrough and approval',
    },
  ];

  const highlights = [
    'Thorough inspection before any paint is applied',
    'Proper cleaning and prep for better adhesion',
    'Professional crack repair, caulking, and surface correction',
    'Premium primers and coatings matched to the project',
    'Clean, durable finishes with a polished final review',
  ];

  const gallery = [
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/69864df4aee74006122adce1.webp',
      alt: 'Gold Lion Painting completed residential exterior project',
    },
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/6986285547d382b6fe49376a.webp',
      alt: 'Gold Lion Painting completed custom exterior home project',
    },
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/698a400e65051244563f27e5.jpg',
      alt: 'Gold Lion Painting finished exterior home with coastal color palette',
    },
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/69864f77aee74048f92b28af.webp',
      alt: 'Gold Lion Painting commercial exterior repaint project',
    },
  ];

  const faqs = [
    {
      q: "How long does exterior paint last in Florida?",
      a: "Many homes see repaint cycles between 6 and 10 years, depending on exposure and substrate.",
    },
    {
      q: "Do you pressure wash before painting?",
      a: "Yes. Cleaning is essential for adhesion and finish quality.",
    },
    {
      q: "Do you repair cracks before painting?",
      a: "Yes, crack and caulk correction are part of preparation.",
    },
    {
      q: "Do you paint stucco, trim, soffits, and fascia?",
      a: "Yes, including garage doors and entry components.",
    },
    {
      q: "What paint systems do you use?",
      a: "Sherwin-Williams exterior systems, including Duration and Emerald.",
    },
    {
      q: "Are you insured?",
      a: "Yes.",
    },
    {
      q: "How do I request an estimate?",
      a: "Visit /contact-us or call 941-462-5894.",
    },
  ];

  const exteriorSignals = [
    "Curb appeal that feels cleaner from the street",
    "Protection planning built around Florida exposure",
    "A finish path that balances durability with presentation",
  ];
  return (
    <main className="min-h-screen bg-[#f6f1e7] px-4 py-12 font-sans text-[#2f2a24] flex flex-col items-center">
      <FaqSchema faqs={faqs} id="exterior-painting-faq-schema" />
      <div className="max-w-5xl w-full">
        <section className="mb-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="lux-panel relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#fbf4e8] via-[#efe2d2] to-[#f8f2e8] p-8 md:p-10">
            <div className="texture-grid pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60" />
            <p className="editorial-kicker relative">
              Exterior Painting Upgrade
            </p>
            <h1 className="relative mt-4 text-4xl font-bold leading-[1.04] text-[#8f6220] md:text-5xl">Exterior Painting Services in Manatee County</h1>
            <h2 className="relative mt-4 text-2xl font-semibold text-[#2f2a24]">Residential Exterior House Painters Focused on Protection, Durability, and Curb Appeal</h2>
            <p className="relative mt-5 text-lg leading-8 text-[#615447]">
              Gold Lion Painting Inc provides professional exterior painting services in Manatee County for homeowners who want more than a simple color change.
              A well-executed exterior repaint protects the home from UV exposure, rain, humidity, surface deterioration, and premature coating failure.
            </p>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">Protection</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Prep, crack control, and coating durability</p>
              </div>
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">5-Year</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Workmanship warranty on qualifying jobs</p>
              </div>
              <div className="gold-outline rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4">
                <p className="text-2xl font-extrabold text-[#8f6220]">Curb Appeal</p>
                <p className="mt-2 text-sm leading-6 text-[#5d4f42]">Cleaner lines and more polished presentation</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-sm">
              <div className="relative h-72">
                <Image
                  src="/holmesbeach/luxury-exterior-painting-holmes-beach-02.jpg"
                  alt="Luxury exterior painting project in a coastal neighborhood"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="project-overlay absolute inset-0" />
                <div className="absolute left-5 top-5 rounded-full border border-[#e9cb88] bg-[#f2d493]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c3d16]">
                  Coastal Exterior Standard
                </div>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] p-4 text-sm leading-6 text-[#5d4f42]">
                  Built for UV, humidity, surface movement, and Florida weather cycles.
                </div>
                <div className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] p-4 text-sm leading-6 text-[#5d4f42]">
                  Stronger finish quality starts with inspection, prep, and disciplined application.
                </div>
              </div>
            </div>
          </div>
          <ServiceEstimateCard
            title="Start Your Exterior Painting Estimate"
            description="Share your home type, surface condition, and timeline. We will open your email app with a ready-to-send exterior painting estimate request."
          />
        </section>

        <section className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lux-panel rounded-[2rem] p-7">
            <p className="editorial-kicker">Why This Feels Premium</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#34261b]">
              Exterior work should feel like protection planning with a luxury finish standard.
            </h2>
            <p className="mt-4 leading-7 text-[#64584c]">
              Homeowners are not only buying color. They are buying a stronger surface plan, a sharper visual result, and more confidence that the home will still present well after Florida weather does its work.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {exteriorSignals.map((signal, index) => (
              <article
                key={signal}
                className={`lux-panel rounded-[2rem] p-6 ${index === 1 ? "md:translate-y-5" : ""}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                  Exterior Priority
                </p>
                <p className="mt-4 text-lg leading-7 text-[#4f4338]">{signal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Professional Exterior Painting for Florida Homes</h2>
          <p className="mb-4 text-[#615447]">
            In Florida, exterior painting is not just about appearance. It is a protective maintenance service that helps preserve exposed surfaces
            against intense sun, humidity, rain cycles, and long-term wear.
          </p>
          <ul className="grid list-disc list-inside gap-2 pl-4 text-[#615447]">
            <li>Improve curb appeal</li>
            <li>Protect stucco and trim</li>
            <li>Reduce visible wear and fading</li>
            <li>Slow down moisture-related damage</li>
            <li>Extend repaint cycles</li>
            <li>Support long-term property value</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Exterior House Painters in Manatee County for Full Home Repainting</h2>
          <p className="mb-4 text-[#615447]">
            We provide exterior painting services for the most visible and exposed painted surfaces around the home.
            A strong project depends on inspection, cleaning, repair, surface conditioning, product selection, and controlled application.
          </p>
          <ul className="grid list-disc list-inside gap-2 pl-4 text-[#615447] md:grid-cols-2">
            <li>Stucco exteriors and siding</li>
            <li>Wood trim, fascia, and soffits</li>
            <li>Garage doors and front doors</li>
            <li>Shutters and entry systems</li>
            <li>Eaves and exterior accents</li>
            <li>Previously painted masonry</li>
          </ul>
        </section>

        <section className="mb-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1.4fr] gap-8 items-start">
            <div className="space-y-6 lg:sticky lg:top-8">
              <div className="bg-[#f4efe7] border border-[#cdb99a] rounded-[28px] p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-[#a66f09] mb-5">
                  What Homeowners Can Expect
                </h2>
                <ul className="space-y-4">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d39a1d] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {gallery.map((item, idx) => (
                  <div
                    key={item.image}
                    className="overflow-hidden rounded-3xl border border-[#ccb89b] bg-[#f7f2ea] shadow-sm cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      setLightboxSlide(idx);
                      setLightboxOpen(true);
                    }}
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
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  className="overflow-hidden bg-[#f7f2ea] border border-[#ccb89b] rounded-[30px] shadow-sm"
                >
                  <div className="grid md:grid-cols-[260px_1fr] items-stretch">
                    <div
                      className="relative h-64 w-full cursor-pointer transition-opacity hover:opacity-80 md:h-full"
                      onClick={() => {
                        setLightboxSlide(idx + gallery.length);
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
                        <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                          {step.title}
                        </h3>
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
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Why Exterior Paint Fails in Florida</h2>
            <p className="mb-3 text-[#615447]">Florida coatings are challenged by UV, heat, humidity, rain, expansion cycles, and wind-driven moisture.</p>
            <p className="text-[#615447]">South-facing and west-facing elevations often break down faster due to direct sun exposure and heat load.</p>
          </div>
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Stucco Painting and Moisture Defense</h2>
            <p className="text-[#615447]">A proper stucco strategy evaluates cracking, movement, and moisture risk before finish coats are applied.
              Professional prep and crack control are critical for long-term performance.</p>
          </div>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Wood Trim, Soffits, Fascia, and Entry Components</h2>
            <p className="text-[#615447]">These details are highly visible and weather-exposed. Proper prep and durable finishing improve both protection and curb appeal.</p>
          </div>
          <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-[#8f6220]">Sherwin-Williams Exterior Systems</h2>
            <p className="text-[#615447]">We commonly use Sherwin-Williams Duration and Emerald when they are the right fit for substrate,
              exposure level, coating history, and long-term performance goals.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Exterior Repainting as Structural Protection</h2>
          <p className="mb-4 text-[#615447]">A high-quality exterior repaint helps protect the surfaces that protect the home.</p>
          <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
            <li>Slow down weather-related deterioration</li>
            <li>Protect vulnerable trim and details</li>
            <li>Improve resistance to UV and moisture</li>
            <li>Reduce visual impact of aging</li>
            <li>Support long-term maintenance planning</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Residential Exterior Painting for Occupied Homes</h2>
          <p className="mb-3 text-[#615447]">Most exterior projects happen while homeowners are living in the property, so execution standards matter.</p>
          <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
            <li>Full masking and property protection</li>
            <li>Organized daily workflow</li>
            <li>Controlled application practices</li>
            <li>Cleaner jobsite presentation</li>
            <li>Final walkthrough at completion</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#8f6220]">Why Homeowners Choose Gold Lion Painting Inc</h2>
          <p className="mb-4 text-[#615447]">Homeowners want reliable prep, durable products, clear communication, and strong visual results.</p>
          <h3 className="mb-2 text-xl font-bold text-[#8f6220]">Professional Standards</h3>
          <ul className="grid list-disc list-inside gap-1 pl-4 text-[#615447]">
            <li>Fully insured</li>
            <li>Experienced painters with 10+ years in the trade</li>
            <li>Strong residential focus</li>
            <li>5-year workmanship warranty</li>
            <li>Sherwin-Williams Duration and Emerald systems</li>
            <li>Detailed prep and structured project execution</li>
          </ul>
        </section>

        <section className="mb-10">
          <ServiceReviewHighlights
            title="Exterior Painting Review Highlights"
            description="Exterior painting is judged on curb appeal, durability, and whether the prep work clearly shows in the final presentation. These highlights speak to that result."
            googleReviewsHref={googleReviewsHref}
            reviews={[
              {
                label: "Exterior Refresh",
                quote: "Exterior repaint completely transformed our home.",
                note: "A strong exterior result changes how the whole property feels from the street.",
              },
              {
                label: "Curb Appeal",
                quote: "Exterior repaint looks fantastic.",
                note: "The visible impact homeowners mention most often is how much cleaner and sharper the home looks afterward.",
              },
              {
                label: "Long-Term Impression",
                quote: "Exterior repaint stands up to coastal weather.",
                note: "The prep strategy matters because homeowners want results that feel durable, not just freshly painted.",
              },
            ]}
          />
        </section>

        <section className="mb-10">
          <h3 className="mt-8 mb-2 text-xl font-bold text-[#8f6220]">Integrated Property Upgrades</h3>
          <p className="mb-4 text-[#615447]">Complete your exterior painting with <Link href="/interior-painting-upgrade" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Interior Painting Services</Link> and cabinet painting for full property transformation.</p>

          <h3 className="mt-8 mb-2 text-xl font-bold text-[#8f6220]">FAQ - Exterior Painting</h3>
          <div className="mb-4 text-[#615447]">
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">How long does exterior paint last in Florida?</span> Many homes see repaint cycles between 6 and 10 years, depending on exposure and substrate.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Do you pressure wash before painting?</span> Yes. Cleaning is essential for adhesion and finish quality.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Do you repair cracks before painting?</span> Yes, crack and caulk correction are part of preparation.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Do you paint stucco, trim, soffits, and fascia?</span> Yes, including garage doors and entry components.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">What paint systems do you use?</span> Sherwin-Williams exterior systems, including Duration and Emerald.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">Are you insured?</span> Yes.</p>
            <p className="mb-2"><span className="font-semibold text-[#8f6220]">How do I request an estimate?</span> Visit /contact-us or call 941-462-5894.</p>
          </div>

          <h3 className="mt-8 mb-2 text-xl font-bold text-[#8f6220]">Service Areas</h3>
          <p className="mb-4">We proudly serve exterior painting projects throughout Manatee County, including:</p>
          <ul className="list-disc list-inside mb-4 pl-4 text-lg grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
            <li><Link href="/lakewood-ranch" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Lakewood Ranch</Link></li>
            <li><Link href="/bradenton" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Bradenton</Link></li>
            <li><Link href="/parrish" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Parrish</Link></li>
            <li><Link href="/palmetto" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Palmetto</Link></li>
            <li><Link href="/ellenton" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Ellenton</Link></li>
            <li><Link href="/ana-maria" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Anna Maria Island</Link></li>
            <li><Link href="/holmes-beach" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Holmes Beach</Link></li>
          </ul>

          <p className="mt-8 text-lg text-[#615447]">For complete interior protection and aesthetic enhancement, pair your exterior project with <Link href="/cabinet-painting-mejor" className="font-semibold text-[#8f6220] underline underline-offset-4 transition hover:text-[#a36a14]">Cabinet Refinishing Specialists</Link> to refresh your entire home.</p>
        </section>

        {/* Request a Consultation */}
        <section className="mb-10 rounded-3xl border border-[#d8c39f] bg-linear-to-r from-[#fff7eb] to-[#f4ecdf] p-8 text-center shadow-[0_18px_40px_rgba(120,94,52,0.08)] md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-[#8f6220]">Request a Consultation</h2>
          <p className="mx-auto mb-4 max-w-2xl text-[#615447]">Exterior painting protects your home when surfaces are no longer holding up against Florida&apos;s UV exposure, humidity, and weather cycles. With the right prep, crack control, caulking, coating system, and structured application, existing stucco, trim, fascia, and soffits can become a cleaner and more durable exterior.</p>
          <p className="mx-auto mb-6 max-w-2xl text-[#615447]">Homeowners gain improved curb appeal, stronger surface protection, and a more polished property presentation without the cost of full renovation. Ready to plan your project? We can define finish path, scope, timeline, and next steps with a structured consultation.</p>
          <a href="/contact-us" className="inline-block rounded-xl bg-[#d4a038] px-8 py-3 font-bold text-[#2f2a24] transition hover:bg-[#c7942f]">Get a Free Estimate</a>
        </section>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
      slides={[...gallery, ...steps].map((item) => ({
          src: item.image,
          alt: item.alt,
          title: "title" in item && typeof item.title === "string" ? item.title : item.alt,
        }))}
        index={lightboxSlide}
      />
    </main>
  );
}

