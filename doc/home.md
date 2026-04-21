export default function GoldLionHomePage() {
  const serviceAreas = [
    "Lakewood Ranch",
    "Bradenton",
    "Parrish",
    "Palmetto",
    "Ellenton",
    "Anna Maria Island",
    "Holmes Beach",
  ];

  const trustBadges = [
    "Fully Insured",
    "10+ Years Experience",
    "5-Year Workmanship Warranty",
    "Sherwin-Williams Systems",
    "Residential Specialists",
  ];

  const services = [
    {
      title: "Interior Painting Services",
      description:
        "Interior painting for walls, ceilings, trim, doors, crown molding, and occupied homes that need cleaner finishes, better durability, and a more updated look.",
      bullets: [
        "Full interior repainting",
        "Drywall repair, patching, sanding, and caulking",
        "Ceilings, walls, doors, baseboards, and trim",
        "Clean jobsite standards and structured scheduling",
      ],
      href: "/interior-painting-manatee-county",
    },
    {
      title: "Exterior Painting Services",
      description:
        "Exterior house painting built for Florida exposure, with strong preparation, crack repair, surface stabilization, and durable coating systems for long-term protection.",
      bullets: [
        "Stucco painting and full house repainting",
        "Fascia, soffits, trim, garage doors, and entry doors",
        "Pressure washing, prep, caulking, and crack repair",
        "UV, humidity, and moisture-focused protection",
      ],
      href: "/exterior-painting-manatee-county",
    },
    {
      title: "Cabinet Painting & Refinishing",
      description:
        "Cabinet refinishing and cabinet painting that modernize kitchens and bathrooms without full replacement, using controlled prep and finish systems for a cleaner result.",
      bullets: [
        "Kitchen cabinet painting and refinishing",
        "Bathroom vanity refinishing",
        "Bonding primer and spray-applied finish systems",
        "Hardware upgrade coordination and color modernization",
      ],
      href: "/cabinet-painting-manatee-county",
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

  const process = [
    "Consultation and project evaluation",
    "Scope planning and surface review",
    "Protection, preparation, and repair",
    "Professional coating application",
    "Final inspection and walkthrough",
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
      q: "What areas do you serve?",
      a: "We serve Lakewood Ranch, Bradenton, Parrish, Palmetto, Ellenton, Anna Maria Island, Holmes Beach, and surrounding Manatee County areas.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative min-h-screen flex items-center" style={{backgroundImage: 'url(/home/luxury-exterior-painting-holmes-beach-02.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-[#ebe5db]"></div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3 text-sm font-semibold text-[#8f6220]">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#d39a1d]/30 bg-[#d39a1d]/10 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6220]">
              Gold Lion Painting Inc
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
              Professional Residential Painting Services in Manatee County
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c4937] sm:text-xl">
              Interior painting, exterior house painting, and cabinet refinishing for homeowners who want clean execution, durable finishes, and a more polished home without unnecessary stress.
            </p>

            <div className="mt-8 grid gap-3 text-base text-[#2d2117] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#d39a1d]/20 bg-[#d39a1d]/10 p-4">
                Interior painting, exterior painting, and cabinet refinishing built around preparation quality and long-term results.
              </div>
              <div className="rounded-2xl border border-[#d39a1d]/20 bg-[#d39a1d]/10 p-4">
                Serving homeowners across Lakewood Ranch, Bradenton, Parrish, Palmetto, Ellenton, Anna Maria Island, and Holmes Beach.
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#estimate"
                className="rounded-2xl bg-[#d39a1d] px-6 py-4 text-base font-bold text-white transition hover:scale-[1.02]"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:9414625894"
                className="rounded-2xl border border-[#8f6220]/20 bg-white px-6 py-4 text-base font-bold text-[#8f6220] transition hover:bg-[#ebe5db]"
              >
                Call 941-462-5894
              </a>
            </div>
          </div>

          <div
            id="estimate"
            className="rounded-3xl border border-[#d39a1d]/30 bg-white p-6 shadow-2xl shadow-black/10"
          >
            <h2 className="text-3xl font-extrabold text-[#8f6220]">Request Your Free Estimate</h2>
            <p className="mt-3 text-[#5c4937]">
              Tell us about your project and we will help define the right service, scope, and next steps.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-2xl border border-[#d39a1d]/20 bg-[#ebe5db] px-4 py-4 text-[#2d2117] outline-none transition placeholder:text-[#8f6220]/50 focus:border-[#d39a1d]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-[#d39a1d]/20 bg-[#ebe5db] px-4 py-4 text-[#2d2117] outline-none transition placeholder:text-[#8f6220]/50 focus:border-[#d39a1d]"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-2xl border border-[#d39a1d]/20 bg-[#ebe5db] px-4 py-4 text-[#2d2117] outline-none transition placeholder:text-[#8f6220]/50 focus:border-[#d39a1d]"
              />
              <textarea
                rows={5}
                placeholder="Tell us about your painting project"
                className="w-full rounded-2xl border border-[#d39a1d]/20 bg-[#ebe5db] px-4 py-4 text-[#2d2117] outline-none transition placeholder:text-[#8f6220]/50 focus:border-[#d39a1d]"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#d39a1d] px-6 py-4 text-lg font-extrabold text-white transition hover:scale-[1.01]"
              >
                Send Request
              </button>
            </form>

            <div className="mt-4 rounded-2xl bg-[#d39a1d]/10 p-4 text-sm text-[#5c4937]">
              Free estimate. Residential-focused. Clean scheduling and clear communication.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Why Homeowners Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Built Around Preparation, Durability, and Clean Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-300">
            Homeowners are not just hiring painters for color. They are hiring for preparation quality, reliable communication, cleaner project coordination, and finishes that hold up over time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-bold text-yellow-400">{reason.title}</h3>
              <p className="mt-3 leading-7 text-neutral-300">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Core Services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Residential Painting Services Designed for Real Property Improvement
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Our services are built around the three areas homeowners most often want to upgrade: interior spaces, exterior protection, and cabinet refinishing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-yellow-500/20 bg-neutral-950 p-6 shadow-xl shadow-black/20"
              >
                <h3 className="text-2xl font-bold text-yellow-400">{service.title}</h3>
                <p className="mt-4 leading-7 text-neutral-300">{service.description}</p>
                <ul className="mt-5 space-y-3 text-neutral-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="mt-6 inline-flex w-fit rounded-2xl bg-yellow-400 px-5 py-3 font-bold text-black transition hover:scale-[1.02]"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Our Process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Our Structured Painting Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              Strong painting results come from disciplined planning, preparation, product selection, and execution. Our process is designed to improve finish quality, cleanliness, and long-term durability.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-yellow-400">What You Can Expect</h3>
              <ul className="mt-4 space-y-3 text-neutral-200">
                <li>Clear project evaluation and scope definition</li>
                <li>Organized protection and surface preparation</li>
                <li>Professional coating application and detail control</li>
                <li>Final walkthrough and completion review</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-lg font-extrabold text-black">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{step}</h3>
                  <p className="mt-2 leading-7 text-neutral-300">
                    A clean and professional process helps create more reliable results and a better homeowner experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Manatee County Service Areas
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Painting Services Throughout Manatee County
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                Gold Lion Painting Inc proudly serves homeowners throughout Manatee County with interior painting, exterior house painting, and cabinet refinishing services tailored to local property conditions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <a
                    key={area}
                    href="/areas"
                    className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3 font-semibold text-yellow-300 transition hover:bg-yellow-500/20"
                  >
                    {area}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-bold text-yellow-400">Local SEO Support Copy</h3>
              <p className="mt-4 leading-8 text-neutral-300">
                If you are looking for interior painters in Lakewood Ranch, exterior house painters in Bradenton, cabinet refinishing in Parrish, or residential painting services anywhere in Manatee County, Gold Lion Painting Inc provides structured, high-quality solutions designed for both appearance and long-term performance.
              </p>
              <div className="mt-6 grid gap-3 text-neutral-200 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-950 p-4">Interior painting in Manatee County</div>
                <div className="rounded-2xl bg-neutral-950 p-4">Exterior house painters in Bradenton</div>
                <div className="rounded-2xl bg-neutral-950 p-4">Cabinet refinishing in Lakewood Ranch</div>
                <div className="rounded-2xl bg-neutral-950 p-4">Residential painters near Parrish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Real Gold Lion Painting Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-300">
            A selection of recent interior, cabinet, and exterior projects showing the quality and attention to detail we bring to every home.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-6.jpg"
                alt="Modern interior accent wall painting project"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950 to-transparent p-6">
              <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-300">
                INTERIOR DETAIL
              </span>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A//storage.googleapis.com/msgsndr/9eKS5YhMm2c6qgFRolMv/media/698a401a634d0a4f8037000f.webp"
                alt="White kitchen cabinet painting and refinishing project"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950 to-transparent p-6">
              <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-300">
                CABINET REFINISHING
              </span>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://lionpaintingservicesfl.com/wp-content/uploads/2024/09/Gold-Lion-Paiting-Inc-Painters-Bradenton-3.jpg"
                alt="Luxury exterior house painting project in coastal area"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-950 to-transparent p-6">
              <span className="inline-block rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-semibold text-yellow-300">
                EXTERIOR PAINTING
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Social Proof
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            What Homeowners Appreciate About Working With Us
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            "The project was clean, organized, and the finish quality made the whole house feel updated.",
            "The cabinets looked smoother and more modern than we expected, and the process was far less disruptive than replacing them.",
            "The exterior repaint gave the house a completely different presence, and the prep work clearly showed in the final result.",
          ].map((quote) => (
            <blockquote
              key={quote}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-lg leading-8 text-neutral-200"
            >
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Answers Homeowners Want Before Hiring a Painting Company
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">
                Clear answers help homeowners compare painting companies more confidently and understand what to expect from the process.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-bold text-yellow-400">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-neutral-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-4xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500/15 to-white/5 p-8 shadow-2xl shadow-black/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Final Call To Action
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Get a Professional Painting Estimate for Your Home
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-200">
                Whether you need interior repainting, exterior protection, or cabinet refinishing, the right process makes the difference. Gold Lion Painting Inc helps homeowners improve their homes with less stress, cleaner execution, and better long-term results.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="#estimate"
                className="inline-flex rounded-2xl bg-yellow-400 px-6 py-4 text-base font-extrabold text-black transition hover:scale-[1.02]"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:9414625894"
                className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-extrabold text-white transition hover:bg-white/10"
              >
                Call 941-462-5894
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
