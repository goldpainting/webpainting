import { type Metadata } from "next";

import { siteUrl } from "../siteConfig";

export type AreaLandingData = {
  slug: string;
  city: string;
  county: string;
  state: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  highlight: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: {
    src: string;
    alt: string;
    label: string;
  }[];
  localFactors: string[];
  localFactorsIntro: string;
  serviceCards: {
    title: string;
    description: string;
    points: string[];
  }[];
  communities: string[];
  reviewHighlights: {
    label: string;
    quote: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
};

export { googleReviewsHref } from "../siteConfig";

export function buildAreaMetadata(area: AreaLandingData): Metadata {
  return {
    title: `House Painters in ${area.city}, ${area.state}`,
    description: area.description,
    alternates: {
      canonical: `/${area.slug}`,
    },
    openGraph: {
      title: `House Painters in ${area.city}, ${area.state} | Gold Lion Painting Inc`,
      description: area.description,
      url: `${siteUrl}/${area.slug}`,
      images: [
        {
          url: area.heroImage,
          alt: area.heroImageAlt,
        },
      ],
    },
  };
}

export const areaLandingData = {
  "ana-maria": {
    slug: "ana-maria",
    city: "Anna Maria Island",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Anna Maria Island, FL",
    heroSubtitle: "Coastal Residential Painting Experts",
    description:
      "Professional house painters in Anna Maria Island, FL specializing in coastal exterior, interior, and cabinet painting with durable prep systems and homeowner-friendly execution.",
    highlight:
      "Homes near the water need paint systems that account for salt air, intense UV, moisture movement, and the visual expectations of high-value coastal properties.",
    heroImage: "/anamaria/luxury-exterior-painting-anna-maria-02.jpg.jpg",
    heroImageAlt: "Luxury coastal exterior painting project in Anna Maria Island",
    gallery: [
      {
        src: "/anamaria/luxury-exterior-painting-anna-maria-02.jpg.jpg",
        alt: "Luxury exterior house painting in Anna Maria Island",
        label: "Coastal Exterior Painting",
      },
      {
        src: "/anamaria/luxury-interior-painting-anna-maria-02.jpg.jpg",
        alt: "Luxury interior painting project in Anna Maria Island",
        label: "Interior Painting",
      },
      {
        src: "/anamaria/kitchen-cabinet-painting-anna-maria-02.jpg.jpg",
        alt: "Kitchen cabinet painting project in Anna Maria Island",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Salt air exposure and coastal corrosion",
      "High UV levels and glare-heavy elevations",
      "Moisture management on exterior surfaces",
      "Visible finish quality on premium homes",
    ],
    localFactorsIntro:
      "Painting on Anna Maria Island is not just about color. It is about how well the finish holds up against coastal wear while still looking refined on high-visibility homes.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior repainting here needs disciplined washing, crack treatment, caulk control, and coatings chosen for coastal weather cycles.",
        points: ["Salt-air exposure planning", "Stucco and trim prep", "UV and humidity-focused systems"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work is designed for cleaner presentation, smoother finishes, and a polished look that suits bright coastal light.",
        points: ["Walls, ceilings, trim, and doors", "Occupied-home workflow", "Professional finish consistency"],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is ideal for kitchens and bathrooms that need a fresher look without a full renovation.",
        points: ["Spray-applied enamel systems", "Controlled prep and curing", "Color updates for modern coastal interiors"],
      },
    ],
    communities: ["Anna Maria", "North End Homes", "Bayfront Homes", "Canal Homes", "Beachside Properties"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint handles the salt air perfectly." },
      { label: "Interior Painting", quote: "Interior finish looks flawless." },
      { label: "Residential Service", quote: "Professional team and polished final result." },
    ],
    faqs: [
      { q: "How long does exterior paint last near the coast?", a: "Exposure varies by elevation and proximity to salt air, but preparation quality is the biggest factor in long-term performance." },
      { q: "Do you work on elevated and coastal homes?", a: "Yes. We plan around access, exposure, and the finish standards expected on coastal residential properties." },
      { q: "How do I request an estimate?", a: "Call 941-462-5894 or use the contact page to start your estimate request." },
    ],
  },
  bradenton: {
    slug: "bradenton",
    city: "Bradenton",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Bradenton, FL",
    heroSubtitle: "Residential Painting Specialists",
    description:
      "Professional house painters in Bradenton, FL specializing in residential exterior, interior, and cabinet painting with prep-focused systems built for Florida homes.",
    highlight:
      "Bradenton homes deal with humidity, UV exposure, stucco movement, and changing neighborhood conditions, so the prep strategy matters as much as the final color.",
    heroImage: "/bradenton/luxury-exterior-painting-bradenton-02.jpg.jpg",
    heroImageAlt: "Luxury exterior house painting project in Bradenton",
    gallery: [
      {
        src: "/bradenton/luxury-exterior-painting-bradenton-02.jpg.jpg",
        alt: "Luxury exterior house painting project in Bradenton",
        label: "Exterior Painting",
      },
      {
        src: "/bradenton/living-room-painting-bradenton-03.jpg.jpg",
        alt: "Interior living room painting project in Bradenton",
        label: "Interior Painting",
      },
      {
        src: "/bradenton/cabinet-painting-bradenton-01.jpg.jpg",
        alt: "Cabinet refinishing and painting process in Bradenton kitchen",
        label: "Cabinet Refinishing",
      },
    ],
    localFactors: [
      "Strong sun exposure and heavy rain cycles",
      "High humidity and stucco hairline cracking",
      "Mixed neighborhood exposure from inland to western Bradenton",
      "Need for clear written estimates and clean execution",
    ],
    localFactorsIntro:
      "Bradenton painting projects often fail early when prep work is rushed. We position the scope around adhesion, crack control, and long-term finish quality instead.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior work includes washing, crack repair, joint sealing, primer where needed, and premium coating systems built for Florida conditions.",
        points: ["Inspection and evaluation", "Surface prep and stabilization", "Sherwin-Williams Duration and Emerald"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior repainting is organized to reduce disruption while improving brightness, finish smoothness, and the overall presentation of the home.",
        points: ["Walls, ceilings, trim, and doors", "Drywall repair and patching", "Clean occupied-home workflow"],
      },
      {
        title: "Cabinet Painting",
        description:
          "Cabinet refinishing gives kitchens a cleaner updated look without full replacement when the layout is already working.",
        points: ["Deep cleaning and prep", "Bonding primer and spray finish", "Controlled curing and reinstallation"],
      },
    ],
    communities: ["Palma Sola", "West Bradenton", "River Strand", "Greyhawk Landing", "Heritage Harbour", "Downtown Bradenton"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint completely refreshed our home." },
      { label: "Interior Painting", quote: "Interior finish looks smooth and clean." },
      { label: "Residential Service", quote: "Professional and reliable team." },
    ],
    faqs: [
      { q: "How long does exterior paint last in Bradenton?", a: "Most homes fall into a multi-year repaint cycle, but exposure and preparation quality have the biggest impact." },
      { q: "Do you repair stucco cracks before painting?", a: "Yes. Crack treatment and joint sealing are part of the preparation plan when the project needs it." },
      { q: "Are you fully insured?", a: "Yes. Gold Lion Painting Inc is fully insured." },
    ],
  },
  ellenton: {
    slug: "ellenton",
    city: "Ellenton",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Ellenton, FL",
    heroSubtitle: "Residential Painting Experts",
    description:
      "Professional house painters in Ellenton, FL specializing in residential exterior, interior, and cabinet painting with systems built for humid Florida conditions.",
    highlight:
      "Ellenton homes need paint work that accounts for heat, rain cycles, humidity, and long-term coating durability instead of just a quick visual refresh.",
    heroImage: "/ellenton/professional-exterior-painter-ellenton.jpg",
    heroImageAlt: "Exterior house painting project in Ellenton",
    gallery: [
      {
        src: "/ellenton/professional-exterior-painter-ellenton.jpg",
        alt: "Exterior house painting project in Ellenton",
        label: "Exterior Painting",
      },
      {
        src: "/ellenton/house-interior-painting-ellenton-fl.jpg",
        alt: "Interior house painting in Ellenton",
        label: "Interior Painting",
      },
      {
        src: "/ellenton/ellenton-cabinet-painting.jpg",
        alt: "Kitchen cabinet refinishing project in Ellenton",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Florida humidity and rain exposure",
      "Long-term coating durability on stucco surfaces",
      "Need for organized prep and cleaner site management",
      "Residential scheduling that works for occupied homes",
    ],
    localFactorsIntro:
      "Ellenton projects benefit from disciplined preparation and a cleaner execution plan, especially on homes where humidity and wear can shorten paint life.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior repainting includes washing, prep, crack treatment, and product selection that matches the substrate and exposure patterns.",
        points: ["Surface cleaning and prep", "Crack repair and caulk control", "Durable exterior coating systems"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work is planned to improve finish quality while protecting floors, furniture, and occupied spaces throughout the project.",
        points: ["Walls, ceilings, trim, and doors", "Patch and repair work", "Clear communication and cleanup"],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is a strong option for kitchens that need a cleaner, updated look without replacing the entire setup.",
        points: ["Degreasing and sanding", "Bonding primer", "Sprayed cabinet enamel finish"],
      },
    ],
    communities: ["Ellenton", "Covered Bridge Estates", "Oakleaf Hammock", "Rye Preserve Area", "North River Communities"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint looks excellent." },
      { label: "Interior Painting", quote: "Interior painting gave the home a cleaner feel." },
      { label: "Residential Service", quote: "Professional and dependable painters." },
    ],
    faqs: [
      { q: "Do you handle full interior and exterior repaints in Ellenton?", a: "Yes. We provide interior painting, exterior painting, and cabinet refinishing for residential properties in Ellenton." },
      { q: "What paint systems do you use?", a: "We commonly use Sherwin-Williams Duration and Emerald systems when they fit the project and surface conditions." },
      { q: "How do I request an estimate?", a: "Call 941-462-5894 or use the contact page to start your estimate request." },
    ],
  },
  "holmes-beach": {
    slug: "holmes-beach",
    city: "Holmes Beach",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Holmes Beach, FL",
    heroSubtitle: "Coastal Residential Painting Specialists",
    description:
      "Professional house painters in Holmes Beach, FL specializing in coastal exterior, interior, and cabinet painting with systems designed for salt air and Gulf exposure.",
    highlight:
      "Holmes Beach properties need paint work that can handle coastal weather, elevated home conditions, wind-driven rain, and the visual expectations of beachside neighborhoods.",
    heroImage: "/holmesbeach/luxury-exterior-painting-holmes-beach-02.jpg",
    heroImageAlt: "Luxury coastal exterior painting project in Holmes Beach",
    gallery: [
      {
        src: "/holmesbeach/luxury-exterior-painting-holmes-beach-02.jpg",
        alt: "Luxury coastal exterior painting project in Holmes Beach",
        label: "Coastal Exterior Painting",
      },
      {
        src: "/holmesbeach/luxury-interior-painting-holmes-beach-.jpg",
        alt: "Luxury interior painting in Holmes Beach home",
        label: "Interior Painting",
      },
      {
        src: "/holmesbeach/kitchen-cabinet-painting-holmes-beach-02.jpg.jpg",
        alt: "Kitchen cabinet painting project in Holmes Beach",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Salt air and Gulf weather exposure",
      "Elevated homes and exposed exterior surfaces",
      "Wind-driven rain and strong UV",
      "High visibility finish standards in beach communities",
    ],
    localFactorsIntro:
      "Holmes Beach painting work needs a coastal-first approach, especially on homes where exterior surfaces take a heavier weather load throughout the year.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior systems are built around washing, prep, crack control, and durable coating selection to protect the home longer.",
        points: ["Coastal exposure planning", "Trim and surface stabilization", "Premium coating systems"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior repainting helps coastal homes feel cleaner, brighter, and more refined, especially in high-light rooms.",
        points: ["Walls, ceilings, trim, and doors", "Cleaner finish presentation", "Organized occupied-home workflow"],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is a practical upgrade for kitchens and baths that need a fresher finish without a full remodel.",
        points: ["Controlled prep and degreasing", "Sprayed finish systems", "Modernized kitchen presentation"],
      },
    ],
    communities: ["Holmes Beach", "Canal Homes", "Beachfront Homes", "Marina District", "North Gulf Drive Area"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint stands up to coastal weather." },
      { label: "Interior Painting", quote: "Interior finish is smooth and clean." },
      { label: "Residential Service", quote: "Professional and reliable throughout the project." },
    ],
    faqs: [
      { q: "Do coastal homes need different prep work?", a: "Yes. Salt exposure, moisture, and UV all affect the prep and coating strategy on coastal properties." },
      { q: "Do you handle elevated and detailed beach homes?", a: "Yes. We work on residential properties where access, finish quality, and exposure planning all matter." },
      { q: "How do I request an estimate?", a: "Call 941-462-5894 or use the contact page to start your estimate request." },
    ],
  },
  "lakewood-ranch": {
    slug: "lakewood-ranch",
    city: "Lakewood Ranch",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Lakewood Ranch, FL",
    heroSubtitle: "Residential Painting Experts",
    description:
      "Professional house painters in Lakewood Ranch, FL specializing in residential exterior, interior, and cabinet painting with clean execution standards for high-value homes.",
    highlight:
      "Lakewood Ranch projects often need a higher finish standard, cleaner scheduling, and careful attention to HOA expectations, color consistency, and architectural detail.",
    heroImage: "/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg",
    heroImageAlt: "Luxury exterior house painting project in Lakewood Ranch",
    gallery: [
      {
        src: "/LakewoodRanch/house-exterior-painting-lakewood-ranch.jpg",
        alt: "Luxury exterior house painting project in Lakewood Ranch",
        label: "Exterior Painting",
      },
      {
        src: "/LakewoodRanch/house-interior-painting-lakewood-ranch-florida.jpg",
        alt: "Interior house painting project in Lakewood Ranch",
        label: "Interior Painting",
      },
      {
        src: "/LakewoodRanch/kitchen-cabinet-painting-lakewood-ranch.jpg",
        alt: "Kitchen cabinet painting result in Lakewood Ranch",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "HOA and community presentation standards",
      "Large homes with detailed trim and architectural lines",
      "Higher expectations for cleanliness and consistency",
      "Need for refined finishes on high-value properties",
    ],
    localFactorsIntro:
      "Painting in Lakewood Ranch is as much about execution quality and presentation as it is about protection. The details need to feel intentional from start to finish.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior projects focus on presentation, durability, and clean execution for homes that need both curb appeal and long-term coating performance.",
        points: ["Detailed inspection and pressure washing", "Stucco crack repair and joint sealing", "Premium fade-resistant systems"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior repainting is structured around cleaner finishes, brighter spaces, and a more polished overall home presentation.",
        points: ["Full interior repainting", "Trim, ceilings, doors, and drywall repair", "Low-disruption scheduling"],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is a high-impact update for kitchens in neighborhoods where finish quality matters just as much as color choice.",
        points: ["Door removal and labeling", "Bonding primer and spray finish", "Controlled reinstallation and final review"],
      },
    ],
    communities: ["The Lake Club", "Waterside", "Esplanade", "Country Club East", "Del Webb"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint completely transformed our home." },
      { label: "Interior Painting", quote: "Interior finish is smooth and professional." },
      { label: "Residential Service", quote: "Highly recommend for Lakewood Ranch homeowners." },
    ],
    faqs: [
      { q: "Do you work with HOA requirements?", a: "Yes. We can coordinate around HOA color and documentation requirements when the project needs it." },
      { q: "What paint brands do you use?", a: "We commonly use Sherwin-Williams Duration and Emerald systems when they are the right fit for the project." },
      { q: "How do I request an estimate?", a: "Call 941-462-5894 or use the contact page to start your estimate request." },
    ],
  },
  palmetto: {
    slug: "palmetto",
    city: "Palmetto",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Palmetto, FL",
    heroSubtitle: "Residential Painting Specialists",
    description:
      "Professional house painters in Palmetto, FL specializing in residential exterior, interior, and cabinet painting with systems built for Florida humidity and coastal influence.",
    highlight:
      "Palmetto homes need paint work that handles humidity, UV exposure, and coastal air while still keeping the project clean and homeowner-friendly.",
    heroImage: "/palmeto/house-exterior-painting-palmetto.jpg",
    heroImageAlt: "Exterior house painting project in Palmetto",
    gallery: [
      {
        src: "/palmeto/house-exterior-painting-palmetto.jpg",
        alt: "Exterior house painting project in Palmetto",
        label: "Exterior Painting",
      },
      {
        src: "/palmeto/Palmetto-interior-painting-contractor.jpg",
        alt: "Interior painting contractor work in Palmetto home",
        label: "Interior Painting",
      },
      {
        src: "/palmeto/cabinet-refinishing-palmetto.jpg",
        alt: "Cabinet refinishing result in Palmetto kitchen",
        label: "Cabinet Refinishing",
      },
    ],
    localFactors: [
      "Humidity and UV exposure",
      "Coastal air influence on some properties",
      "Stucco durability and exterior wear",
      "Need for clean prep and organized execution",
    ],
    localFactorsIntro:
      "Palmetto projects benefit from a straightforward, prep-first approach that protects the surfaces and keeps the finish looking sharp longer.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior repainting is centered on cleaning, prep, crack management, and coating systems that hold up better under Florida exposure.",
        points: ["Surface prep and stabilization", "Trim and stucco attention", "Durable Sherwin-Williams systems"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work improves finish quality and presentation while staying organized for homeowners living in the space during the project.",
        points: ["Walls, ceilings, trim, and doors", "Patch and repair work", "Cleaner occupied-home workflow"],
      },
      {
        title: "Cabinet Painting",
        description:
          "Cabinet refinishing updates kitchens and baths without the cost or disruption of full cabinet replacement.",
        points: ["Degreasing and prep", "Bonding primer and spray finish", "Controlled curing and final alignment"],
      },
    ],
    communities: ["Palmetto Historic District", "North Palmetto", "Canal Communities", "Riverfront Homes", "West Palmetto"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint looks amazing." },
      { label: "Interior Painting", quote: "Interior painting made the home feel cleaner and brighter." },
      { label: "Residential Service", quote: "Professional and dependable from start to finish." },
    ],
    faqs: [
      { q: "Do you handle exterior and interior painting in Palmetto?", a: "Yes. We provide exterior painting, interior painting, and cabinet refinishing for residential properties in Palmetto." },
      { q: "Are you fully insured?", a: "Yes. Gold Lion Painting Inc is fully insured." },
      { q: "How do I request an estimate?", a: "Call 941-462-5894 or use the contact page to start your estimate request." },
    ],
  },
  parrish: {
    slug: "parrish",
    city: "Parrish",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Parrish, FL",
    heroSubtitle: "Residential Painting Experts",
    description:
      "Professional house painters in Parrish, FL specializing in residential exterior, interior, and cabinet painting with prep-driven systems for Florida homes.",
    highlight:
      "Parrish homes need a painting company that understands heat, humidity cycles, stucco surfaces, and the need for cleaner, more organized residential execution.",
    heroImage: "/parrish/house-exterior-painting-parrish.jpg",
    heroImageAlt: "Exterior house painting project in Parrish",
    gallery: [
      {
        src: "/parrish/house-exterior-painting-parrish.jpg",
        alt: "Exterior house painting project in Parrish",
        label: "Exterior Painting",
      },
      {
        src: "/parrish/Painters-contractor-interior-painting.jpg",
        alt: "Interior painting contractor work in Parrish home",
        label: "Interior Painting",
      },
      {
        src: "/parrish/cabinet-painting-parrish.jpg",
        alt: "Kitchen cabinet painting result in Parrish",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Strong sun exposure and humidity cycles",
      "Stucco surfaces and exterior maintenance needs",
      "Large residential neighborhoods with finish expectations",
      "Need for clean job flow in occupied homes",
    ],
    localFactorsIntro:
      "Parrish painting projects benefit from a process that balances durability, cleaner presentation, and smoother homeowner coordination.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior repainting includes inspection, washing, prep, repair, and a topcoat system selected for local exposure conditions.",
        points: ["Surface cleaning and preparation", "Crack repair and caulk control", "Premium topcoat application"],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work helps rooms feel cleaner, brighter, and more current while maintaining organized site protection throughout the project.",
        points: ["Walls, ceilings, trim, and doors", "Drywall patching and repairs", "Low-disruption scheduling"],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting improves kitchens without the cost of replacement when the existing layout still works well.",
        points: ["Prep and deglossing", "Bonding primer", "Professional spray enamel finish"],
      },
    ],
    communities: ["Twin Rivers", "North River Ranch", "Foxbrook", "Harrison Ranch", "Gamble Creek Estates"],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint looks fantastic." },
      { label: "Interior Painting", quote: "Interior painting made the rooms feel cleaner and newer." },
      { label: "Residential Service", quote: "Professional and reliable painters." },
    ],
    faqs: [
      { q: "How long does exterior paint last in Parrish?", a: "Lifespan depends on exposure and prep quality, but the right process helps extend the repaint cycle." },
      { q: "Do you provide cabinet painting too?", a: "Yes. We provide cabinet refinishing and cabinet painting in addition to interior and exterior services." },
      { q: "How do I request an estimate?", a: "Call 941-462-5894 or use the contact page to start your estimate request." },
    ],
  },
} satisfies Record<string, AreaLandingData>;

export function getAreaLandingData(slug: keyof typeof areaLandingData): AreaLandingData {
  return areaLandingData[slug];
}
