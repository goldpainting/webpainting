import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";

import FaqSchema from "./components/FaqSchema";
import EstimateRequestForm from "./components/EstimateRequestForm";
import { googleReviewsHref, siteUrl } from "./siteConfig";

export const metadata: Metadata = {
  title: "Gold Lion Painting Inc | House Painters in Manatee County, FL",
  description:
    "Gold Lion Painting Inc provides interior painting, exterior house painting, cabinet refinishing, and color consultation for homeowners across Manatee County, Florida.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gold Lion Painting Inc | House Painters in Manatee County, FL",
    description:
      "Gold Lion Painting Inc provides interior painting, exterior house painting, cabinet refinishing, and color consultation for homeowners across Manatee County, Florida.",
    url: siteUrl,
    images: [
      {
        url: "/home/luxury-exterior-painting-anna-maria.jpg",
        width: 1200,
        height: 900,
        alt: "Gold Lion Painting exterior painting project in Anna Maria",
      },
    ],
  },
};

export default function HomePage() {
  const serviceAreas = [
    { name: "Lakewood Ranch", href: "/lakewood-ranch" },
    { name: "Bradenton", href: "/bradenton" },
    { name: "Parrish", href: "/parrish" },
    { name: "Palmetto", href: "/palmetto" },
    { name: "Ellenton", href: "/ellenton" },
    { name: "Anna Maria Island", href: "/ana-maria" },
    { name: "Holmes Beach", href: "/holmes-beach" },
  ];

  const trustBadges = [
    { label: "Fully Insured" },
    { label: "Experienced Painters With 10+ Years In The Trade" },
    { label: "5-Year Workmanship Warranty", href: "/warranty-service" },
    { label: "Sherwin-Williams Systems" },
    { label: "Residential Specialists" },
  ];

  const proofPoints = [
    {
      value: "10+",
      label: "Years across our painting team",
    },
    {
      value: "5-Year",
      label: "Workmanship warranty on qualifying jobs",
    },
    {
      value: "Local",
      label: "Focused on Manatee County homeowners",
    },
  ];

  const homeownerStandards = [
    "Detailed written estimates before work starts",
    "Daily site protection and organized cleanup",
    "Durable paint systems selected for each surface",
  ];

  const processes = [
    {
      number: '1',
      title: 'Consultation and project evaluation',
      description:
        'We assess the space, listen to your goals, and define the full scope of work to provide a clear and professional proposal.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/69864d09aee740459c2ab5a8.jpg',
      alt: 'Gold Lion Painting project home during consultation and project evaluation',
    },
    {
      number: '2',
      title: 'Scope planning and surface review',
      description:
        'We inspect walls, ceilings, trim, and other surfaces to identify details, needed repairs, and the best painting system for the project.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/6986285547d382b6fe49376a.webp',
      alt: 'Gold Lion Painting exterior project used for scope planning and surface review',
    },
    {
      number: '3',
      title: 'Protection, preparation, and repair',
      description:
        'We protect furniture, floors, and surrounding areas. Then we handle cleaning, sanding, patching, caulking, and surface prep for long-lasting results.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/6989ff097305aa50e3f69a68.webp',
      alt: 'Gold Lion Painting completed exterior area after preparation and protection work',
    },
    {
      number: '4',
      title: 'Professional paint application',
      description:
        'We apply primers and coatings using professional techniques, with close attention to coverage, consistency, detail, and jobsite cleanliness.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/698a401a634d0a4f8037000f.webp',
      alt: 'Gold Lion Painting finished kitchen project showing professional paint application',
    },
    {
      number: '5',
      title: 'Final inspection and walkthrough',
      description:
        'We complete a final review, address any touch-ups if needed, and walk through the finished work with you to ensure everything meets expectations.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/69864f77aee74048f92b28af.webp',
      alt: 'Gold Lion Painting completed commercial project ready for final inspection',
    },
  ];

  const expectations = [
    'Clear project evaluation and scope definition',
    'Organized protection and detailed surface preparation',
    'Professional application with close attention to finish quality',
    'Final walkthrough and complete project review',
  ];

  const gallery = [
    {
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/69864df4aee74006122adce1.webp',
      alt: 'Gold Lion Painting completed residential exterior project',
    },
  ];

  const services = [
    {
      title: "Interior Painting Services",
      eyebrow: "Interior Spaces",
      description:
        "Interior painting for walls, ceilings, trim, doors, crown molding, and occupied homes that need cleaner finishes, better durability, and a more updated look.",
      bullets: [
        "Full interior repainting",
        "Drywall repair, patching, sanding, and caulking",
        "Ceilings, walls, doors, baseboards, and trim",
        "Clean jobsite standards and structured scheduling",
      ],
      result: "Cleaner finishes and a calmer, more polished home.",
      image: "/home/interior-house-painting-anna-maria-.jpg",
      href: "/interior-painting-upgrade",
    },
    {
      title: "Exterior Painting Services",
      eyebrow: "Exterior Protection",
      description:
        "Exterior house painting built for Florida exposure, with strong preparation, crack repair, surface stabilization, and durable coating systems for long-term protection.",
      bullets: [
        "Stucco painting and full house repainting",
        "Fascia, soffits, trim, garage doors, and entry doors",
        "Pressure washing, prep, caulking, and crack repair",
        "UV, humidity, and moisture-focused protection",
      ],
      result: "Stronger curb appeal backed by disciplined prep and weather-focused coatings.",
      image: "/home/luxury-exterior-painting-anna-maria.jpg",
      href: "/exterior-painting-upgrade",
    },
    {
      title: "Cabinet Painting & Refinishing",
      eyebrow: "Kitchen Refresh",
      description:
        "Cabinet refinishing and cabinet painting that modernize kitchens and bathrooms without full replacement, using controlled prep and finish systems for a cleaner result.",
      bullets: [
        "Kitchen cabinet painting and refinishing",
        "Bathroom vanity refinishing",
        "Bonding primer and spray-applied finish systems",
        "Hardware upgrade coordination and color modernization",
      ],
      result: "A more updated kitchen look without the disruption of full replacement.",
      image: "/home/kitchen-cabinet-painting.jpg",
      href: "/cabinet-painting-mejor",
    },
  ];

  const reasons = [
    {
      title: "Clean, Structured Execution",
      text: "We protect surfaces, maintain organized project flow, and keep communication clear from estimate through final walkthrough.",
    },
    {
      title: "Residential-Focused Expertise",
      text: "Our work is centered on residential repainting and refinishing systems for homeowners who want cleaner results and less disruption.",
    },
    {
      title: "Long-Term Durability",
      text: "We use disciplined preparation and Sherwin-Williams systems selected for washability, adhesion, color retention, and finish performance.",
    },
    {
      title: "Local Knowledge",
      text: "We understand the climate, property conditions, and exposure patterns common across Manatee County and nearby coastal areas.",
    },
  ];

  const signatureMoments = [
    {
      title: "Before paint ever opens",
      text: "Homeowners usually notice the difference first in the planning: clearer scope, calmer communication, and better advice on the finish path.",
    },
    {
      title: "While the project is active",
      text: "Protection, jobsite order, and pace matter as much as color. A premium painting experience should feel controlled while the home is still being lived in.",
    },
    {
      title: "After the walkthrough",
      text: "The final result should look sharper in daylight, cleaner up close, and more cohesive room to room or elevation to elevation.",
    },
  ];

  const projectPhotos = [
    {
      src: "/interior-house-painting-anna-maria-.jpg",
      alt: "Modern interior accent wall painting project",
      tag: "Interior Detail",
      href: "/interior-painting-upgrade",
    },
    {
      src: "/kitchen-cabinet-painting.jpg",
      alt: "White kitchen cabinet painting and refinishing project",
      tag: "Cabinet Refinishing",
      href: "/cabinet-painting-mejor",
    },
    {
      src: "/luxury-exterior-painting-anna-maria.jpg",
      alt: "Luxury exterior house painting project in coastal area",
      tag: "Exterior Painting",
      href: "/exterior-painting-upgrade",
    },
  ];

  const reviewHighlights = [
    {
      quote: "Exterior repaint completely transformed our home.",
      area: "Lakewood Ranch",
      focus: "Exterior Painting",
    },
    {
      quote: "Interior finish looks smooth and professional.",
      area: "Lakewood Ranch",
      focus: "Interior Painting",
    },
    {
      quote: "Professional and reliable team.",
      area: "Bradenton",
      focus: "Residential Service",
    },
  ];

  const faqs = [
    {
      q: "Do you provide interior, exterior, and cabinet painting?",
      a: "Yes. We provide interior painting, exterior painting, cabinet painting, and cabinet refinishing services for residential properties throughout Manatee County.",
    },
    {
      q: "Are you insured?",
      a: "Yes. Gold Lion Painting Inc is fully insured.",
    },
    {
      q: "What paint systems do you use?",
      a: "We commonly use Sherwin-Williams Duration and Emerald systems when they are the right fit for the surface, service, and project goals.",
    },
    {
      q: "Do you offer a warranty?",
      a: "Yes. Qualifying residential projects include a 5-year workmanship warranty.",
    },
    {
      q: "How much experience does your team have?",
      a: "Our painting team brings over 10 years of experience to residential interior, exterior, and cabinet projects.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve Lakewood Ranch, Bradenton, Parrish, Palmetto, Ellenton, Anna Maria Island, Holmes Beach, and surrounding Manatee County areas.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e7] text-[#2f2a24]">
      <FaqSchema faqs={faqs} id="home-faq-schema" />
      <section className="relative overflow-hidden border-b border-[#d8c39f]/60 bg-linear-to-br from-[#fbf4e8] via-[#efe2d2] to-[#f8f2e8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#f0cd84]/30 blur-3xl" />
          <div className="absolute right-[-5rem] top-16 h-96 w-96 rounded-full bg-[#d9b57a]/18 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-[#ffffff]/35 blur-3xl" />
        </div>
        <div className="texture-grid pointer-events-none absolute inset-x-0 top-0 h-52 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3 text-sm font-semibold text-[#a36a14]">
              {trustBadges.map((badge) =>
                badge.href ? (
                  <Link
                    key={badge.label}
                    href={badge.href}
                    className="gold-outline rounded-full border border-[#d8c39f] bg-[#fff8ef]/90 px-3 py-1 text-[#8d6121] transition hover:bg-[#f4ecdf] hover:text-[#7a5119]"
                  >
                    {badge.label}
                  </Link>
                ) : (
                  <span
                    key={badge.label}
                    className="gold-outline rounded-full border border-[#d8c39f] bg-[#fff8ef]/90 px-3 py-1 text-[#8d6121]"
                  >
                    {badge.label}
                  </span>
                ),
              )}
            </div>

            <p className="editorial-kicker mb-3">
              Gold Lion Painting Inc
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] text-[#34261b] sm:text-5xl lg:text-6xl">
              Professional Residential Painting Services in Manatee County
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a4d41] sm:text-xl">
              Interior painting, exterior house painting, and cabinet refinishing for homeowners who want clean execution, durable finishes, and a more polished home without unnecessary stress.
            </p>

            <div className="reveal-up mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-[#ddc49f] bg-[#fffaf2]/90 px-4 py-2 text-sm font-semibold text-[#6b5639] shadow-sm">
                Detailed prep-first workflow
              </div>
              <div className="rounded-full border border-[#ddc49f] bg-[#fffaf2]/90 px-4 py-2 text-sm font-semibold text-[#6b5639] shadow-sm">
                Local service across Manatee County
              </div>
              <div className="rounded-full border border-[#ddc49f] bg-[#fffaf2]/90 px-4 py-2 text-sm font-semibold text-[#6b5639] shadow-sm">
                Direct phone and email contact
              </div>
            </div>

            <div className="mt-8 grid gap-4 text-base text-[#43372d] sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label} className="hover-lift reveal-up rounded-2xl border border-[#dbc7aa] bg-[#fffaf2]/95 p-4 shadow-[0_18px_35px_rgba(120,94,52,0.08)]">
                  <p className="text-2xl font-extrabold text-[#8f6220]">{point.value}</p>
                  <p className="mt-2 leading-6 text-[#5d4f42]">{point.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#estimate"
                className="rounded-2xl bg-[#d4a038] px-6 py-4 text-base font-bold text-[#1f1a14] transition hover:scale-[1.02] hover:bg-[#c7942f]"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:9414625894"
                className="rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-6 py-4 text-base font-bold text-[#3a3028] transition hover:bg-[#f5ecde]"
              >
                Call 941-462-5894
              </a>
              <a
                href={googleReviewsHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-6 py-4 text-base font-bold text-[#3a3028] transition hover:bg-[#f5ecde]"
              >
                Read Google Reviews
              </a>
            </div>

            <div className="lux-panel reveal-up mt-8 rounded-3xl p-5">
              <p className="editorial-kicker">
                What makes the first call easier
              </p>
              <div className="mt-4 grid gap-3 text-[#4b4034] sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e6d6bc] bg-[#f6eee1] p-4">
                  Clear estimate scope, prep details, and service recommendations
                </div>
                <div className="rounded-2xl border border-[#e6d6bc] bg-[#f6eee1] p-4">
                  Fast direct contact by phone or email if you prefer not to fill out a long form
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div
              id="estimate"
              className="lux-panel shimmer-panel reveal-up rounded-3xl p-6"
            >
              <h2 className="text-3xl font-extrabold text-[#8f6220]">Request Your Free Estimate</h2>
              <p className="mt-3 text-[#65584a]">
                Share your project details and your email app will open with everything pre-filled for Gold Lion Painting Inc.
              </p>

              <EstimateRequestForm className="mt-6 space-y-4" buttonLabel="Prepare Estimate Email" />

              <div className="mt-4 rounded-2xl bg-[#f4ecdf] p-4 text-sm text-[#6a5d4f]">
                Free estimate. Residential-focused. Clean scheduling, direct contact, and clear communication.
              </div>
            </div>

            <div className="hover-lift reveal-up overflow-hidden rounded-3xl lux-panel">
              <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-72">
                  <Image
                    src="/home/luxury-exterior-painting-anna-maria.jpg"
                    alt="Gold Lion Painting exterior painting project in Anna Maria"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="project-overlay absolute inset-0" />
                  <div className="absolute left-5 top-5 rounded-full border border-[#e9cb88] bg-[#f2d493]/88 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#5c3d16]">
                    Signature Exterior Result
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <p className="editorial-kicker">
                    Recent Project Standards
                  </p>
                  <h3 className="text-2xl font-bold leading-tight text-[#34261b]">
                    The kind of finish homeowners notice immediately from the street
                  </h3>
                  <div className="space-y-3">
                    {homeownerStandards.map((item) => (
                      <div key={item} className="rounded-2xl border border-[#e3d2b7] bg-[#f6eee1] px-4 py-3 text-[#4c4135]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Image
                      src="/BBB logo.jpeg"
                      alt="BBB Accredited Business badge"
                      width={60}
                      height={92}
                      className="animate-float-slow rounded-xl border border-[#dfcfb5] bg-[#111]"
                    />
                    <div className="rounded-2xl border border-[#dfcfb5] bg-[#fff7eb] px-4 py-3 text-sm text-[#5d4f42]">
                      <p className="font-semibold text-[#8f6220]">Trust-first positioning</p>
                      <p className="mt-1">Warranty visibility, direct contact, and homeowner-focused service pages.</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#2c2118] px-4 py-4 text-[#f3e7d2]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4a038]">
                      Premium Outcome
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      The layout now leads with proof, project quality, and a clearer sense of what homeowners gain from working with your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="editorial-kicker">Premium Painting Experience</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
            What should feel different when a painting company is truly premium
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#615447]">
            The best painting companies are remembered for more than color. They feel organized before the estimate, calm while the job is active, and polished in the finished details homeowners live with every day.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {signatureMoments.map((moment, index) => (
            <article
              key={moment.title}
              className={`lux-panel rounded-[2rem] p-7 ${index === 1 ? "lg:translate-y-6" : ""}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                Step 0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-[#34261b]">{moment.title}</h3>
              <p className="mt-4 leading-7 text-[#64584c]">{moment.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
            Why Homeowners Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
            Built Around Preparation, Durability, and Clean Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#615447]">
            Homeowners are not just hiring painters for color. They are hiring for preparation quality, reliable communication, cleaner project coordination, and finishes that hold up over time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-lg shadow-[#b39358]/8"
            >
              <h3 className="text-xl font-bold text-[#8f6220]">{reason.title}</h3>
              <p className="mt-3 leading-7 text-[#64584c]">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dfcfb5] bg-[#ede2d1]/55">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
              Core Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
              Residential Painting Services Designed for Real Property Improvement
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#615447]">
              Our services are built around the three areas homeowners most often want to upgrade: interior spaces, exterior protection, and cabinet refinishing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="hover-lift group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#d8c39f] bg-[#fffaf2] shadow-xl shadow-[#b39358]/10"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#251b13]/75 via-[#251b13]/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-[#fff5e7]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0cf95]">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="flex h-full flex-col p-6">
                <p className="leading-7 text-[#64584c]">{service.description}</p>
                <div className="mt-4 rounded-2xl bg-[#f6eee1] p-4 text-sm font-medium text-[#5f5042]">
                  {service.result}
                </div>
                <ul className="mt-5 space-y-3 text-[#43372d]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-fit rounded-2xl bg-[#d4a038] px-5 py-3 font-bold text-[#1f1a14] transition hover:scale-[1.02] hover:bg-[#c7942f]"
                >
                  Learn More
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-[0_18px_40px_rgba(120,94,52,0.08)] md:grid-cols-3 md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
              Homeowner Priorities
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#34261b]">
              The things people usually want to know before they book
            </h2>
          </div>
          <div className="rounded-3xl bg-[#f6eee1] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
              Before Work Starts
            </p>
            <p className="mt-3 leading-7 text-[#5d4f42]">
              Homeowners want scope clarity, product guidance, and a company that feels organized before the project even begins.
            </p>
          </div>
          <div className="rounded-3xl bg-[#f6eee1] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6220]">
              While The Job Is Running
            </p>
            <p className="mt-3 leading-7 text-[#5d4f42]">
              The biggest anxieties are usually mess, communication, and whether prep work is being done thoroughly and professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#9a6d16] font-semibold">
                Our Process
              </p>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Our Professional Painting Process
              </h2>
              <p className="text-lg leading-8 text-[#5c4937] max-w-xl">
                Strong painting results come from disciplined planning,
                preparation, product selection, and execution. Our process is
                designed to improve finish quality, cleanliness, and long-term
                durability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {gallery.map((item) => (
                <div
                  key={item.image}
                  className="overflow-hidden rounded-[28px] border border-[#cdb99a] bg-[#f4efe7] shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="bg-[#f4efe7] border border-[#cdb99a] rounded-[28px] p-6 md:p-8 shadow-sm max-w-xl">
              <h2 className="text-2xl font-bold text-[#a66f09] mb-5">
                What You Can Expect
              </h2>
              <ul className="space-y-4">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base md:text-lg text-[#2d2117]">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d39a1d] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-4 md:space-y-5">
            {processes.map((process) => (
              <div
                key={process.number}
                className="overflow-hidden bg-[#f7f2ea] border border-[#ccb89b] rounded-[28px] shadow-sm"
              >
                <Image
                  src={process.image}
                  alt={process.alt}
                  width={1200}
                  height={800}
                  className="h-52 w-full object-cover"
                />
                <div className="p-5 md:p-6">
                  <div className="flex gap-4 md:gap-5 items-start">
                    <div className="h-14 w-14 rounded-2xl bg-[#d39a1d] text-[#2d2117] font-bold text-xl flex items-center justify-center shrink-0">
                      {process.number}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold leading-snug">{process.title}</h3>
                      <p className="text-base md:text-lg leading-8 text-[#5c4937]">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="border-y border-[#dfcfb5] bg-[#ede2d1]/55">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
                Manatee County Service Areas
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
                Painting Services Throughout Manatee County
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#615447]">
                Gold Lion Painting Inc proudly serves homeowners throughout Manatee County with interior painting, exterior house painting, and cabinet refinishing services tailored to local property conditions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="rounded-2xl border border-[#d8c39f] bg-[#fff7eb] px-4 py-3 font-semibold text-[#8f6220] transition hover:bg-[#f4eadb]"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#8f6220]">Local Service Focus</h3>
              <p className="mt-4 leading-8 text-[#64584c]">
                If you are looking for interior painters in Lakewood Ranch, exterior house painters in Bradenton, cabinet refinishing in Parrish, or residential painting services anywhere in Manatee County, Gold Lion Painting Inc provides structured, high-quality solutions designed for both appearance and long-term performance.
              </p>
              <div className="mt-6 grid gap-3 text-[#43372d] sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f4ecdf] p-4">Interior painting in Manatee County</div>
                <div className="rounded-2xl bg-[#f4ecdf] p-4">Exterior house painters in Bradenton</div>
                <div className="rounded-2xl bg-[#f4ecdf] p-4">Cabinet refinishing in Lakewood Ranch</div>
                <div className="rounded-2xl bg-[#f4ecdf] p-4">Residential painters near Parrish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
            Real Homes, Clean Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#615447]">
            A quick look at recent interior, cabinet, and exterior transformations completed by our team across Manatee County.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="hover-lift group relative overflow-hidden rounded-[2.2rem] border border-[#dfcfb5] bg-[#fffaf2] shadow-[0_22px_45px_rgba(120,94,52,0.1)] lg:col-span-5">
            <Link href={projectPhotos[0]!.href}>
              <Image
                src={projectPhotos[0]!.src}
                alt={projectPhotos[0]!.alt}
                width={1000}
                height={1300}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06] cursor-pointer"
              />
            </Link>
            <div className="absolute inset-0 bg-linear-to-t from-[#2b2118]/82 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <Link href={projectPhotos[0]!.href} className="inline-flex rounded-full border border-[#e0c48d] bg-[#f2d493]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#533711] transition hover:bg-[#e6c56a]">
                {projectPhotos[0]!.tag}
              </Link>
              <p className="mt-4 max-w-sm text-2xl font-bold text-[#fff4e7]">
                Interior details that feel sharper, brighter, and cleaner
              </p>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-7">
            <article className="hover-lift group relative overflow-hidden rounded-[2.2rem] border border-[#dfcfb5] bg-[#fffaf2] shadow-[0_22px_45px_rgba(120,94,52,0.1)]">
              <Link href={projectPhotos[1]!.href}>
                <Image
                  src={projectPhotos[1]!.src}
                  alt={projectPhotos[1]!.alt}
                  width={1400}
                  height={850}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06] cursor-pointer"
                />
              </Link>
              <div className="absolute inset-0 bg-linear-to-r from-[#241b14]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Link href={projectPhotos[1]!.href} className="inline-flex rounded-full border border-[#e0c48d] bg-[#f2d493]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#533711] transition hover:bg-[#e6c56a]">
                  {projectPhotos[1]!.tag}
                </Link>
                <p className="mt-4 max-w-md text-xl font-bold text-[#fff4e7]">
                  Cabinet refinishing that modernizes the room without a full remodel
                </p>
              </div>
            </article>

            <article className="hover-lift group relative overflow-hidden rounded-[2.2rem] border border-[#dfcfb5] bg-[#fffaf2] shadow-[0_22px_45px_rgba(120,94,52,0.1)]">
              <Link href={projectPhotos[2]!.href}>
                <Image
                  src={projectPhotos[2]!.src}
                  alt={projectPhotos[2]!.alt}
                  width={1400}
                  height={850}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06] cursor-pointer"
                />
              </Link>
              <div className="absolute inset-0 bg-linear-to-t from-[#2b2118]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Link href={projectPhotos[2]!.href} className="inline-flex rounded-full border border-[#e0c48d] bg-[#f2d493]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#533711] transition hover:bg-[#e6c56a]">
                  {projectPhotos[2]!.tag}
                </Link>
                <p className="mt-4 max-w-md text-xl font-bold text-[#fff4e7]">
                  Exterior work designed to improve presence and protect the home longer
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] border border-[#d8c39f] bg-linear-to-br from-[#2a1f17] via-[#38281d] to-[#1f1712] shadow-[0_24px_60px_rgba(49,34,22,0.22)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6 p-8 text-[#f4e9d8] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c776]">
                Google Reviews
              </p>
              <h2 className="text-3xl font-extrabold text-[#fff6ea] sm:text-4xl">
                Stronger review proof, built around visible sources and local context
              </h2>
              <p className="text-lg leading-8 text-[#ddcfbf]">
                These review highlights are pulled from the local service pages already in the site, and the main call to action sends visitors directly to your Google Reviews source.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#5f4733] bg-[#2f241c] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c776]">What visitors want</p>
                  <p className="mt-3 leading-7 text-[#e4d8c8]">A real destination to verify reviews, not just anonymous testimonials sitting on the page.</p>
                </div>
                <div className="rounded-3xl border border-[#5f4733] bg-[#2f241c] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c776]">What this does</p>
                  <p className="mt-3 leading-7 text-[#e4d8c8]">Gives the homepage credible highlights plus direct access to the review platform you already reference elsewhere.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#d4a038] px-6 py-4 font-bold text-[#1f1a14] transition hover:bg-[#c7942f]"
                >
                  Open Google Reviews
                </a>
                <Link
                  href="/warranty-service"
                  className="rounded-2xl border border-[#7e6344] bg-transparent px-6 py-4 font-bold text-[#fff1dc] transition hover:bg-[#3b2b20]"
                >
                  Review Warranty Details
                </Link>
              </div>
            </div>

            <div className="grid gap-5 bg-[#f7f0e5] p-8 sm:p-10">
              {reviewHighlights.map((review, index) => (
                <article
                  key={`${review.area}-${review.focus}`}
                  className={`hover-lift rounded-[1.75rem] border border-[#dec8aa] bg-[#fffaf2] p-6 shadow-[0_16px_35px_rgba(120,94,52,0.08)] ${index === 1 ? "md:translate-x-6" : ""}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a36a14]">
                      {review.focus}
                    </p>
                    <p className="text-lg font-bold text-[#8f6220]">5-star review</p>
                  </div>
                  <p className="mt-4 text-xl leading-8 text-[#40342b]">&ldquo;{review.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center justify-between gap-4 text-sm text-[#6a5d4f]">
                    <span>{review.area} review highlight</span>
                    <a
                      href={googleReviewsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#8f6220] underline underline-offset-4"
                    >
                      Verify source
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfcfb5] bg-[#ede2d1]/55">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
                Answers Homeowners Want Before Hiring a Painting Company
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#615447]">
                Clear answers help homeowners compare painting companies more confidently and understand what to expect from the process.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-[#8f6220]">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-[#64584c]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-4xl border border-[#d8c39f] bg-linear-to-r from-[#efe0bd] via-[#f6eddc] to-[#fff9f0] p-8 shadow-2xl shadow-[#b39358]/10 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a36a14]">
                Final Call To Action
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#34261b] sm:text-4xl">
                Get a Professional Painting Estimate for Your Home
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5c5045]">
                Whether you need interior repainting, exterior protection, cabinet refinishing, or color consultation, the right process makes the difference. Gold Lion Painting Inc helps homeowners improve their homes with less stress, cleaner execution, and better long-term results backed by experienced painters with 10+ years in the trade.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="#estimate"
                className="inline-flex rounded-2xl bg-[#d4a038] px-6 py-4 text-base font-extrabold text-[#1f1a14] transition hover:scale-[1.02] hover:bg-[#c7942f]"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:9414625894"
                className="inline-flex rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-6 py-4 text-base font-extrabold text-[#3a3028] transition hover:bg-[#f5ecde]"
              >
                Call 941-462-5894
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8c39f] bg-[#fffaf2]/95 p-3 shadow-[0_-12px_30px_rgba(120,94,52,0.1)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a
            href="tel:9414625894"
            className="flex-1 rounded-2xl border border-[#cdbba0] bg-[#fffaf2] px-4 py-3 text-center font-bold text-[#3a3028]"
          >
            Call Now
          </a>
          <a
            href="#estimate"
            className="flex-1 rounded-2xl bg-[#d4a038] px-4 py-3 text-center font-bold text-[#1f1a14]"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </main>
  );
}

