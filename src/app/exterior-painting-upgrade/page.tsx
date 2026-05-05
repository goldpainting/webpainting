import ServiceLandingPage from "../components/ServiceLandingPage";

const faqs = [
  {
    q: "What is included in exterior house painting?",
    a: "Exterior painting can include pressure washing, surface preparation, crack repair, caulking, priming, painting, trim work, cleanup, and final inspection.",
  },
  {
    q: "Do you repair stucco cracks before painting?",
    a: "Yes. Crack treatment, joint sealing, and surface stabilization are included when the project needs them.",
  },
  {
    q: "What matters most for exterior paint in Florida?",
    a: "Preparation quality, moisture control, UV-resistant coating selection, adhesion, and careful application have the biggest impact on long-term performance.",
  },
];

export default function ExteriorPaintingUpgradePage() {
  return (
    <ServiceLandingPage
      schemaId="exterior-painting-faq-schema"
      eyebrow="Exterior Painting Upgrade"
      title="Exterior Painting Services in Bradenton, Sarasota & Tampa Bay"
      subtitle="Residential Exterior House Painters Focused on Protection, Durability, and Curb Appeal"
      description="Exterior painting systems for Florida homes, with pressure washing, prep, caulking, crack treatment, and durable coatings built for sun, humidity, rain, and curb appeal."
      heroImage="/home/luxury-exterior-painting-anna-maria.jpg"
      heroAlt="Exterior painting project in Bradenton, Sarasota, and Tampa Bay"
      includedServices={[
        "Full exterior repainting",
        "Stucco and siding painting",
        "Trim, fascia, and soffit painting",
        "Garage doors and entry doors",
        "Pressure washing and surface cleaning",
        "Crack sealing, caulking, and surface preparation",
      ]}
      failureTitle="Why Exterior Paint Fails in Florida"
      failureIntro="Most exterior paint failures come from weak preparation, poor surface cleaning, missing caulking, skipped primer, cheap materials, or spray-only application without proper penetration."
      failurePoints={[
        "Peeling or bubbling paint",
        "Fast color fading from UV exposure",
        "Moisture intrusion around cracks and joints",
        "Chalking surfaces with poor adhesion",
        "Early failure on high-exposure walls and trim",
      ]}
      standardsTitle="Built for Florida Sun, Humidity, and Rain"
      standardsText="Exterior painting must protect the home as well as improve curb appeal. We plan around exposure, substrate movement, moisture, and coating durability."
      standards={[
        "Pressure washing and cleaning before coatings",
        "Crack sealing, joint caulking, and surface correction",
        "Primer where needed for adhesion and durability",
        "Spray and back-roll application when the surface calls for it",
      ]}
      environmentTitle="High-Exposure Areas Get Extra Attention"
      environmentText="Florida homes wear unevenly. South and west walls, garage doors, entryways, irrigation zones, and lower sections near landscaping often fail first when prep is rushed."
      environmentPoints={[
        "UV-heavy elevations reviewed before coating",
        "Stucco movement and hairline cracks addressed before paint",
        "Landscaping, windows, fixtures, and hardscapes protected",
        "Sherwin-Williams Duration and Emerald systems selected by condition",
      ]}
      imageBriefs={[
        "Front elevation photo showing a completed exterior repaint.",
        "Prep photo showing pressure washing, masking, or crack sealing.",
        "Close-up placeholder for stucco, trim, fascia, or soffit finish quality.",
        "Before/after exterior transformation placeholder.",
      ]}
      imageGalleryTitle="Exterior Painting Project Gallery"
      imageGalleryDescription="See exterior repaint examples focused on curb appeal, stucco protection, clean lines, and durable coating systems built for Florida sun, rain, humidity, and daily exposure."
      imageGallery={[
        {
          src: "/ellenton/ellenton-exterior-painting.jpg",
          alt: "Exterior painting project in Ellenton Florida",
          title: "Ellenton Exterior Repaint",
          description:
            "A clean exterior repaint planned around Florida humidity, sun exposure, and a polished residential finish.",
        },
        {
          src: "/services/home-exterior-painting-manatee-county.jpg.jpg",
          alt: "Home exterior painting in Manatee County",
          title: "Full Home Exterior",
          description:
            "A full exterior painting system designed to improve curb appeal while protecting stucco, trim, and visible details.",
        },
        {
          src: "/parrish/exterior-painting-parrish.jpg",
          alt: "Exterior painting project in Parrish Florida",
          title: "Parrish Exterior Finish",
          description:
            "Exterior work focused on even coverage, clean transitions, and a durable finish for Florida residential conditions.",
        },
        {
          src: "/services/house-exterior-painting-manatee-county.jpg",
          alt: "House exterior painting in Manatee County",
          title: "Curb Appeal Upgrade",
          description:
            "A completed exterior repaint with stronger presentation, clean color balance, and weather-aware coating application.",
        },
      ]}
      serviceAreas={[
        "Bradenton",
        "Lakewood Ranch",
        "Sarasota",
        "Siesta Key",
        "Venice",
        "Anna Maria",
        "Parrish",
        "Ellenton",
        "Palmetto",
      ]}
      details={[
        {
          title: "Professional Exterior Painting for Florida Homes",
          text: "Exterior work should protect the home and improve its presentation. We plan the scope around sun exposure, moisture, stucco movement, trim condition, and coating durability.",
        },
        {
          title: "Exterior Repainting as Structural Protection",
          text: "Prep-first exterior painting helps stabilize surfaces, seal vulnerable joints, improve adhesion, and create a cleaner finish that holds up better in Florida weather.",
        },
      ]}
      process={[
        {
          title: "1. Exterior Assessment",
          text: "We review surfaces, exposure, cracking, chalking, trim condition, and access before defining the project scope.",
        },
        {
          title: "2. Washing and Prep",
          text: "Surfaces are cleaned, loose material is removed, gaps are sealed, and cracks are addressed before coating.",
        },
        {
          title: "3. Paint Application",
          text: "Exterior coating systems are applied with attention to film build, coverage, color consistency, and weather timing.",
        },
        {
          title: "4. Final Walkthrough",
          text: "Elevations, trim, doors, fascia, soffits, and detail areas are reviewed before completion.",
        },
      ]}
      reviews={[
        {
          label: "Exterior Refresh",
          quote:
            "Review themes emphasize curb appeal, stronger exterior presentation, and careful prep.",
        },
        {
          label: "Curb Appeal",
          quote:
            "Customers commonly respond to visible transformation after exterior repainting.",
        },
        {
          label: "Florida Weather",
          quote:
            "Google review proof reinforces the value of durable systems for local Florida exposure.",
        },
      ]}
      faqs={faqs}
    />
  );
}
