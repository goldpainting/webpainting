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
    heroImageAlt:
      "Luxury coastal exterior painting project in Anna Maria Island",
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
        points: [
          "Salt-air exposure planning",
          "Stucco and trim prep",
          "UV and humidity-focused systems",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work is designed for cleaner presentation, smoother finishes, and a polished look that suits bright coastal light.",
        points: [
          "Walls, ceilings, trim, and doors",
          "Occupied-home workflow",
          "Professional finish consistency",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is ideal for kitchens and bathrooms that need a fresher look without a full renovation.",
        points: [
          "Spray-applied enamel systems",
          "Controlled prep and curing",
          "Color updates for modern coastal interiors",
        ],
      },
    ],
    communities: [
      "Anna Maria",
      "North End Homes",
      "Bayfront Homes",
      "Canal Homes",
      "Beachside Properties",
    ],
    reviewHighlights: [
      {
        label: "Exterior Painting",
        quote: "Exterior repaint handles the salt air perfectly.",
      },
      { label: "Interior Painting", quote: "Interior finish looks flawless." },
      {
        label: "Residential Service",
        quote: "Professional team and polished final result.",
      },
    ],
    faqs: [
      {
        q: "How long does exterior paint last near the coast?",
        a: "Exposure varies by elevation and proximity to salt air, but preparation quality is the biggest factor in long-term performance.",
      },
      {
        q: "Do you work on elevated and coastal homes?",
        a: "Yes. We plan around access, exposure, and the finish standards expected on coastal residential properties.",
      },
      {
        q: "How do I request an estimate?",
        a: "Call 941-462-5894 or use the contact page to start your estimate request.",
      },
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
        points: [
          "Inspection and evaluation",
          "Surface prep and stabilization",
          "Sherwin-Williams Duration and Emerald",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior repainting is organized to reduce disruption while improving brightness, finish smoothness, and the overall presentation of the home.",
        points: [
          "Walls, ceilings, trim, and doors",
          "Drywall repair and patching",
          "Clean occupied-home workflow",
        ],
      },
      {
        title: "Cabinet Painting",
        description:
          "Cabinet refinishing gives kitchens a cleaner updated look without full replacement when the layout is already working.",
        points: [
          "Deep cleaning and prep",
          "Bonding primer and spray finish",
          "Controlled curing and reinstallation",
        ],
      },
    ],
    communities: [
      "Palma Sola",
      "West Bradenton",
      "River Strand",
      "Greyhawk Landing",
      "Heritage Harbour",
      "Downtown Bradenton",
    ],
    reviewHighlights: [
      {
        label: "Exterior Painting",
        quote: "Exterior repaint completely refreshed our home.",
      },
      {
        label: "Interior Painting",
        quote: "Interior finish looks smooth and clean.",
      },
      {
        label: "Residential Service",
        quote: "Professional and reliable team.",
      },
    ],
    faqs: [
      {
        q: "How long does exterior paint last in Bradenton?",
        a: "Most homes fall into a multi-year repaint cycle, but exposure and preparation quality have the biggest impact.",
      },
      {
        q: "Do you repair stucco cracks before painting?",
        a: "Yes. Crack treatment and joint sealing are part of the preparation plan when the project needs it.",
      },
      {
        q: "Are you fully insured?",
        a: "Yes. Gold Lion Painting Inc is fully insured.",
      },
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
        points: [
          "Surface cleaning and prep",
          "Crack repair and caulk control",
          "Durable exterior coating systems",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work is planned to improve finish quality while protecting floors, furniture, and occupied spaces throughout the project.",
        points: [
          "Walls, ceilings, trim, and doors",
          "Patch and repair work",
          "Clear communication and cleanup",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is a strong option for kitchens that need a cleaner, updated look without replacing the entire setup.",
        points: [
          "Degreasing and sanding",
          "Bonding primer",
          "Sprayed cabinet enamel finish",
        ],
      },
    ],
    communities: [
      "Ellenton",
      "Covered Bridge Estates",
      "Oakleaf Hammock",
      "Rye Preserve Area",
      "North River Communities",
    ],
    reviewHighlights: [
      {
        label: "Exterior Painting",
        quote: "Exterior repaint looks excellent.",
      },
      {
        label: "Interior Painting",
        quote: "Interior painting gave the home a cleaner feel.",
      },
      {
        label: "Residential Service",
        quote: "Professional and dependable painters.",
      },
    ],
    faqs: [
      {
        q: "Do you handle full interior and exterior repaints in Ellenton?",
        a: "Yes. We provide interior painting, exterior painting, and cabinet refinishing for residential properties in Ellenton.",
      },
      {
        q: "What paint systems do you use?",
        a: "We commonly use Sherwin-Williams Duration and Emerald systems when they fit the project and surface conditions.",
      },
      {
        q: "How do I request an estimate?",
        a: "Call 941-462-5894 or use the contact page to start your estimate request.",
      },
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
        points: [
          "Detailed inspection and pressure washing",
          "Stucco crack repair and joint sealing",
          "Premium fade-resistant systems",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior repainting is structured around cleaner finishes, brighter spaces, and a more polished overall home presentation.",
        points: [
          "Full interior repainting",
          "Trim, ceilings, doors, and drywall repair",
          "Low-disruption scheduling",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting is a high-impact update for kitchens in neighborhoods where finish quality matters just as much as color choice.",
        points: [
          "Door removal and labeling",
          "Bonding primer and spray finish",
          "Controlled reinstallation and final review",
        ],
      },
    ],
    communities: [
      "The Lake Club",
      "Waterside",
      "Esplanade",
      "Country Club East",
      "Del Webb",
    ],
    reviewHighlights: [
      {
        label: "Exterior Painting",
        quote: "Exterior repaint completely transformed our home.",
      },
      {
        label: "Interior Painting",
        quote: "Interior finish is smooth and professional.",
      },
      {
        label: "Residential Service",
        quote: "Highly recommend for Lakewood Ranch homeowners.",
      },
    ],
    faqs: [
      {
        q: "Do you work with HOA requirements?",
        a: "Yes. We can coordinate around HOA color and documentation requirements when the project needs it.",
      },
      {
        q: "What paint brands do you use?",
        a: "We commonly use Sherwin-Williams Duration and Emerald systems when they are the right fit for the project.",
      },
      {
        q: "How do I request an estimate?",
        a: "Call 941-462-5894 or use the contact page to start your estimate request.",
      },
    ],
  },
  sarasota: {
    slug: "sarasota",
    city: "Sarasota",
    county: "Sarasota County",
    state: "FL",
    heroTitle: "House Painters in Sarasota, FL",
    heroSubtitle: "Coastal & High-End Residential Painting Services",
    description:
      "Professional house painters in Sarasota, FL specializing in exterior painting, interior painting, and cabinet refinishing with systems built for sun, humidity, salt air, and high-value homes.",
    highlight:
      "Sarasota homes need more than a cosmetic repaint. Coastal exposure, luxury neighborhoods, UV radiation, humidity, and salt air require surface preparation and coating systems that protect long-term value.",
    heroImage: "/services/house-exterior-painting-manatee-county.jpg",
    heroImageAlt:
      "High-end exterior house painting project for a Sarasota home",
    gallery: [
      {
        src: "/services/house-exterior-painting-manatee-county.jpg",
        alt: "Exterior painting system for a Sarasota Florida home",
        label: "Exterior Painting",
      },
      {
        src: "/services/residential-interior-painting-manatee-county.jpg",
        alt: "Interior painting with clean finish quality for Sarasota homes",
        label: "Interior Painting",
      },
      {
        src: "/services/professional-cabinet-painters-manatee-county.jpg",
        alt: "Cabinet refinishing for a Sarasota kitchen",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Coastal salt air on waterfront and barrier-island properties",
      "Luxury finishes and strong real estate presentation standards",
      "UV exposure, storms, humidity, and moisture retention",
      "Stucco cracking, fading, and poor previous coating systems",
    ],
    localFactorsIntro:
      "Sarasota projects need a protective system, not a rushed paint job. We plan around exposure, material condition, primer needs, and the finish quality expected in coastal and high-end neighborhoods.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior painting in Sarasota is planned around UV, humidity, salt air, stucco movement, and coatings that resist premature fading and peeling.",
        points: [
          "Pressure washing and salt residue removal",
          "Caulking, crack repair, and primer where needed",
          "Sherwin-Williams Duration and Emerald systems",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior painting is built for bright natural light, open layouts, clean lines, and smooth finishes that hold up under daily use.",
        points: [
          "Full interior repaints",
          "Trim, doors, ceilings, and drywall repair",
          "Protected occupied-home workflow",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet refinishing updates kitchens and baths with deep prep, bonding primer, and a sprayed cabinet-grade finish.",
        points: [
          "Door and hardware removal",
          "Degreasing, sanding, and bonding primer",
          "Spray-applied Emerald Urethane finish",
        ],
      },
    ],
    communities: [
      "Siesta Key",
      "Longboat Key",
      "Lido Key",
      "Downtown Sarasota",
      "Palmer Ranch",
      "Gulf Gate",
    ],
    reviewHighlights: [
      {
        label: "Coastal Exterior",
        quote:
          "Prep-first exterior systems help Sarasota homes resist UV, moisture, and salt exposure.",
      },
      {
        label: "Interior Finish",
        quote:
          "Smooth interior finishes matter in bright Sarasota homes with strong natural light.",
      },
      {
        label: "Cabinet Refinishing",
        quote:
          "Spray-applied cabinet systems create a cleaner kitchen update without replacement.",
      },
    ],
    faqs: [
      {
        q: "How long does exterior painting last in Sarasota?",
        a: "Coastal homes often need repainting sooner than inland homes, commonly 5 to 8 years depending on exposure, prep, and materials.",
      },
      {
        q: "Do coastal homes need different paint systems?",
        a: "Yes. Salt air, UV, and moisture require better preparation, correct primers, and durable coatings.",
      },
      {
        q: "Do you offer cabinet painting in Sarasota?",
        a: "Yes. We provide cabinet refinishing with professional prep and sprayed cabinet-grade finishes.",
      },
    ],
  },
  "siesta-key": {
    slug: "siesta-key",
    city: "Siesta Key",
    county: "Sarasota County",
    state: "FL",
    heroTitle: "House Painters in Siesta Key, FL",
    heroSubtitle: "Luxury Coastal Painting Built for Sun, Sand & Humidity",
    description:
      "Professional painting for Siesta Key homes with clean, high-end finishes designed for extreme light, coastal exposure, humidity, and daily wear.",
    highlight:
      "Siesta Key is a bright coastal environment where white sand reflection makes color consistency, cut lines, sheen, and surface quality more visible than in typical inland homes.",
    heroImage: "/home/luxury-exterior-painting-anna-maria.jpg",
    heroImageAlt: "Luxury coastal exterior painting project near Siesta Key",
    gallery: [
      {
        src: "/home/luxury-exterior-painting-anna-maria.jpg",
        alt: "Luxury coastal exterior painting for Siesta Key style homes",
        label: "Exterior Painting",
      },
      {
        src: "/home/interior-house-painting-anna-maria-.jpg",
        alt: "Bright coastal interior painting finish",
        label: "Interior Painting",
      },
      {
        src: "/home/kitchen-cabinet-painting.jpg",
        alt: "Cabinet painting for a coastal kitchen",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "White quartz sand reflection that amplifies sunlight",
      "Faster color fading from UV and bright coastal exposure",
      "Seasonal and second-home scheduling needs",
      "High-end finish expectations in waterfront and elevated homes",
    ],
    localFactorsIntro:
      "Siesta Key painting requires visual precision and durability. The system must resist coastal exposure while maintaining a clean, consistent appearance under strong natural light.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior systems balance durability with visual consistency under intense sun, humidity, moisture, and sand-reflected light.",
        points: [
          "Inspection by exposure level",
          "Pressure washing, caulking, and sealing",
          "Spray and back-roll when appropriate",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work focuses on smooth walls, sharp transitions, and color consistency in homes with large windows and bright coastal palettes.",
        points: [
          "Walls, ceilings, trim, and doors",
          "Flashing and roller mark prevention",
          "Full masking and protection",
        ],
      },
      {
        title: "Cabinet Painting",
        description:
          "Cabinet refinishing gives coastal kitchens a modern, moisture-resistant finish without full replacement.",
        points: [
          "Deep degreasing and sanding",
          "Bonding primer",
          "Sprayed cabinet-grade finish",
        ],
      },
    ],
    communities: [
      "Siesta Key Village",
      "Waterfront Homes",
      "Elevated Coastal Homes",
      "Seasonal Properties",
      "Nearby Sarasota Coast",
    ],
    reviewHighlights: [
      {
        label: "Coastal Finish",
        quote:
          "Siesta Key homes need paint that looks clean under strong reflected light.",
      },
      {
        label: "Exterior Protection",
        quote:
          "Durable systems help reduce early fading and moisture-related failure.",
      },
      {
        label: "Seasonal Homes",
        quote:
          "Organized communication helps second-home projects stay controlled.",
      },
    ],
    faqs: [
      {
        q: "Does Siesta Key sand affect paint?",
        a: "Yes. The bright sand reflects sunlight, making fading and workmanship defects more visible.",
      },
      {
        q: "Do you work on second homes?",
        a: "Yes. We coordinate projects for seasonal and absentee homeowners with clear scheduling and communication.",
      },
      {
        q: "How often should Siesta Key homes repaint?",
        a: "Many coastal homes repaint every 5 to 8 years depending on exposure, prep, and products used.",
      },
    ],
  },
  venice: {
    slug: "venice",
    city: "Venice",
    county: "Sarasota County",
    state: "FL",
    heroTitle: "House Painters in Venice, FL",
    heroSubtitle: "High-End Residential Painting Built for Coastal Exposure",
    description:
      "Professional painting services in Venice, FL for exterior painting, interior painting, and cabinet refinishing with prep-first systems for sun, humidity, and salt air.",
    highlight:
      "Venice homes face sun, humidity, rain cycles, salt air, and a mix of newer and older surfaces. Paint should be treated as long-term protection, not a quick cosmetic layer.",
    heroImage: "/services/exterior-painting-manatee-county.jpg",
    heroImageAlt: "Exterior painting project for a Venice Florida home",
    gallery: [
      {
        src: "/services/exterior-painting-manatee-county.jpg",
        alt: "Exterior repainting for Venice coastal conditions",
        label: "Exterior Painting",
      },
      {
        src: "/services/house-interior-painting-manatee-county.jpg",
        alt: "Interior painting for a Venice Florida home",
        label: "Interior Painting",
      },
      {
        src: "/services/kitchen-cabinet-painting-manatee-county-fl.jpg",
        alt: "Kitchen cabinet painting and refinishing in Venice",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Coastal salt air and high humidity",
      "Strong UV radiation and rain cycles",
      "Older homes needing restoration and repairs",
      "Stucco movement, fading, chalking, and peeling risk",
    ],
    localFactorsIntro:
      "Venice painting projects need evaluation, cleaning, repairs, primer selection, and durable application methods to prevent premature peeling, fading, and moisture-related failure.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior repainting is built around exposure, pressure washing, caulking, primer selection, and coatings chosen for Florida durability.",
        points: [
          "Surface inspection and exposure review",
          "Pressure washing and salt residue removal",
          "Spray and back-roll application where needed",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior painting in Venice homes focuses on clean lines, smooth finishes, and protected occupied-home execution.",
        points: [
          "Full interior repaints",
          "Ceilings, trim, baseboards, and doors",
          "Drywall repair and smoothing",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet refinishing updates kitchens using humidity-conscious prep and durable sprayed finishes.",
        points: [
          "Door and hardware removal",
          "Deep cleaning and sanding",
          "Bonding primer and sprayed finish",
        ],
      },
    ],
    communities: [
      "Venice Island",
      "South Venice",
      "Venice Gardens",
      "Nokomis",
      "Englewood",
    ],
    reviewHighlights: [
      {
        label: "Exterior Durability",
        quote:
          "Venice homes need coatings selected for sun, salt air, and humidity.",
      },
      {
        label: "Interior Precision",
        quote:
          "Bright interiors benefit from smooth finishes and clean cut lines.",
      },
      {
        label: "Cabinet Updates",
        quote:
          "Professional cabinet refinishing helps modernize kitchens without demolition.",
      },
    ],
    faqs: [
      {
        q: "How long does exterior painting last in Venice?",
        a: "Coastal homes often last 5 to 8 years, while inland exposure may last longer with proper prep and materials.",
      },
      {
        q: "Does salt air affect paint?",
        a: "Yes. Salt air accelerates deterioration, which makes cleaning, priming, and quality coatings important.",
      },
      {
        q: "Do you repair stucco cracks?",
        a: "Yes. Crack repair and sealing are included when the surface condition requires it.",
      },
    ],
  },
  "holmes-beach": {
    slug: "holmes-beach",
    city: "Holmes Beach",
    county: "Manatee County",
    state: "FL",
    heroTitle: "House Painters in Holmes Beach, FL",
    heroSubtitle: "Coastal Painting for Homes & Rental Properties",
    description:
      "Professional painting in Holmes Beach for coastal homes, rental properties, exterior painting, interior painting, and cabinet refinishing built for salt air, humidity, and daily use.",
    highlight:
      "Holmes Beach properties often combine coastal exposure with high daily use from full-time living or vacation rental turnover, so durability and clean execution both matter.",
    heroImage: "/holmesbeach/exterior-house-painting-holmes-beach-01.jpg",
    heroImageAlt: "Exterior house painting project in Holmes Beach",
    gallery: [
      {
        src: "/holmesbeach/exterior-house-painting-holmes-beach-01.jpg",
        alt: "Exterior painting for a Holmes Beach coastal home",
        label: "Exterior Painting",
      },
      {
        src: "/holmesbeach/interior-house-painting-holmes-beach-.jpg",
        alt: "Interior house painting in Holmes Beach",
        label: "Interior Painting",
      },
      {
        src: "/holmesbeach/kitchen-cabinet-painting-holmes-beach-02.jpg.jpg",
        alt: "Kitchen cabinet refinishing project in Holmes Beach",
        label: "Cabinet Painting",
      },
    ],
    localFactors: [
      "Vacation rental turnover and high-use interiors",
      "Salt air, humidity, direct sunlight, and seasonal storms",
      "Frequent cleaning on walls, trim, doors, and cabinets",
      "Need for reliable scheduling and organized project control",
    ],
    localFactorsIntro:
      "Holmes Beach painting must handle both environmental exposure and real use. We adjust each project based on whether the property is owner-occupied, seasonal, or a rental home.",
    serviceCards: [
      {
        title: "Exterior Painting",
        description:
          "Exterior painting in Holmes Beach is built for UV exposure, salt air, rain, stucco movement, and high-traffic exterior areas.",
        points: [
          "Pressure washing and mildew removal",
          "Caulking, crack repair, and primer where needed",
          "Durable Sherwin-Williams coating systems",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior painting is planned for clean, durable finishes in bright homes and rental spaces that see frequent use.",
        points: [
          "Full interior painting",
          "Trim, doors, ceilings, and drywall repair",
          "Durable finishes for high-use areas",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet refinishing updates kitchens with a smoother, cleaner, more durable finish for coastal living.",
        points: [
          "Deep degreasing and sanding",
          "Bonding primer",
          "Controlled sprayed finish",
        ],
      },
    ],
    communities: [
      "Holmes Beach",
      "Rental Properties",
      "Canal Homes",
      "Beachside Homes",
      "Anna Maria Island",
    ],
    reviewHighlights: [
      {
        label: "Rental Ready",
        quote:
          "Durable finishes help high-use homes stay clean between occupancy cycles.",
      },
      {
        label: "Coastal Exterior",
        quote: "Prep and coating selection matter in salt air and humidity.",
      },
      {
        label: "Interior Refresh",
        quote:
          "Clean interior painting helps coastal homes feel brighter and better maintained.",
      },
    ],
    faqs: [
      {
        q: "Do you paint vacation rental properties?",
        a: "Yes. We work with rental properties and coordinate scheduling to reduce downtime.",
      },
      {
        q: "How long does exterior paint last in Holmes Beach?",
        a: "Coastal exposure commonly falls around 5 to 8 years depending on prep, products, and location.",
      },
      {
        q: "Do you offer cabinet painting?",
        a: "Yes. We provide cabinet refinishing for kitchens, vanities, and built-ins.",
      },
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
        points: [
          "Surface prep and stabilization",
          "Trim and stucco attention",
          "Durable Sherwin-Williams systems",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work improves finish quality and presentation while staying organized for homeowners living in the space during the project.",
        points: [
          "Walls, ceilings, trim, and doors",
          "Patch and repair work",
          "Cleaner occupied-home workflow",
        ],
      },
      {
        title: "Cabinet Painting",
        description:
          "Cabinet refinishing updates kitchens and baths without the cost or disruption of full cabinet replacement.",
        points: [
          "Degreasing and prep",
          "Bonding primer and spray finish",
          "Controlled curing and final alignment",
        ],
      },
    ],
    communities: [
      "Palmetto Historic District",
      "North Palmetto",
      "Canal Communities",
      "Riverfront Homes",
      "West Palmetto",
    ],
    reviewHighlights: [
      { label: "Exterior Painting", quote: "Exterior repaint looks amazing." },
      {
        label: "Interior Painting",
        quote: "Interior painting made the home feel cleaner and brighter.",
      },
      {
        label: "Residential Service",
        quote: "Professional and dependable from start to finish.",
      },
    ],
    faqs: [
      {
        q: "Do you handle exterior and interior painting in Palmetto?",
        a: "Yes. We provide exterior painting, interior painting, and cabinet refinishing for residential properties in Palmetto.",
      },
      {
        q: "Are you fully insured?",
        a: "Yes. Gold Lion Painting Inc is fully insured.",
      },
      {
        q: "How do I request an estimate?",
        a: "Call 941-462-5894 or use the contact page to start your estimate request.",
      },
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
        points: [
          "Surface cleaning and preparation",
          "Crack repair and caulk control",
          "Premium topcoat application",
        ],
      },
      {
        title: "Interior Painting",
        description:
          "Interior work helps rooms feel cleaner, brighter, and more current while maintaining organized site protection throughout the project.",
        points: [
          "Walls, ceilings, trim, and doors",
          "Drywall patching and repairs",
          "Low-disruption scheduling",
        ],
      },
      {
        title: "Cabinet Refinishing",
        description:
          "Cabinet painting improves kitchens without the cost of replacement when the existing layout still works well.",
        points: [
          "Prep and deglossing",
          "Bonding primer",
          "Professional spray enamel finish",
        ],
      },
    ],
    communities: [
      "Twin Rivers",
      "North River Ranch",
      "Foxbrook",
      "Harrison Ranch",
      "Gamble Creek Estates",
    ],
    reviewHighlights: [
      {
        label: "Exterior Painting",
        quote: "Exterior repaint looks fantastic.",
      },
      {
        label: "Interior Painting",
        quote: "Interior painting made the rooms feel cleaner and newer.",
      },
      {
        label: "Residential Service",
        quote: "Professional and reliable painters.",
      },
    ],
    faqs: [
      {
        q: "How long does exterior paint last in Parrish?",
        a: "Lifespan depends on exposure and prep quality, but the right process helps extend the repaint cycle.",
      },
      {
        q: "Do you provide cabinet painting too?",
        a: "Yes. We provide cabinet refinishing and cabinet painting in addition to interior and exterior services.",
      },
      {
        q: "How do I request an estimate?",
        a: "Call 941-462-5894 or use the contact page to start your estimate request.",
      },
    ],
  },
} satisfies Record<string, AreaLandingData>;

export function getAreaLandingData(
  slug: keyof typeof areaLandingData,
): AreaLandingData {
  return areaLandingData[slug];
}
