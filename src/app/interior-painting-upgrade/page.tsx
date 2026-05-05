import ServiceLandingPage from "../components/ServiceLandingPage";

const faqs = [
  {
    q: "What is included in interior painting?",
    a: "Interior painting can include walls, ceilings, trim, doors, baseboards, crown molding, drywall repair, sanding, caulking, priming, and cleanup depending on the project scope.",
  },
  {
    q: "Can you work in occupied homes?",
    a: "Yes. We plan protection, sequencing, daily cleanup, and communication around occupied residential spaces.",
  },
  {
    q: "Do you help with colors and finishes?",
    a: "Yes. We can discuss color direction, sheen levels, product options, and how the finish should perform in each room.",
  },
];

export default function InteriorPaintingUpgradePage() {
  return (
    <ServiceLandingPage
      schemaId="interior-painting-faq-schema"
      eyebrow="Interior Painting Upgrade"
      title="Interior Painting Services in Bradenton, Sarasota & Tampa Bay"
      subtitle="Professional Interior House Painters for Clean, Durable, High-End Results"
      description="Interior painting for homes that need smoother walls, cleaner trim lines, better color flow, and a polished finish without unnecessary disruption."
      heroImage="/home/interior-house-painting-anna-maria-.jpg"
      heroAlt="Interior painting project in Bradenton, Sarasota, and Tampa Bay"
      includedServices={[
        "Full interior repainting",
        "Accent walls and custom finishes",
        "Ceiling painting",
        "Trim, doors, and baseboards",
        "Drywall repair and surface preparation",
        "Occupied home protection and daily cleanup",
      ]}
      failureTitle="Why Interior Painting Requires Precision"
      failureIntro="Modern homes expose poor workmanship quickly. Natural light, open layouts, neutral palettes, and detailed trim make roller marks, flashing, messy cut lines, and weak coverage easy to notice."
      failurePoints={[
        "Visible roller marks",
        "Uneven sheen or flashing",
        "Poor cut lines at trim and ceilings",
        "Rough drywall patches",
        "Inconsistent color coverage",
      ]}
      standardsTitle="High-End Interior Painting Standards"
      standardsText="Interior painting needs control, precision, and consistency. The result should look smooth in real lighting and hold up to daily living."
      standards={[
        "Smooth, uniform finishes across walls and ceilings",
        "Clean transitions between trim, doors, ceilings, and walls",
        "Proper sanding, caulking, patching, and priming before finish paint",
        "Premium Sherwin-Williams interior coatings selected by room use",
      ]}
      environmentTitle="Clean, Controlled Work Inside Your Home"
      environmentText="Interior painting happens where homeowners live, so protection and cleanup matter as much as the finish. The process is organized to reduce dust, protect furniture, and keep the home livable."
      environmentPoints={[
        "Protected floors, furniture, fixtures, and nearby surfaces",
        "Controlled sanding and dust-conscious preparation",
        "Daily cleanup throughout the project",
        "Scheduling planned around occupied homes, sale prep, or renovations",
      ]}
      imageBriefs={[
        "Wide room photo showing clean walls, trim lines, and natural light.",
        "Close-up placeholder for sharp cut lines around baseboards, doors, or crown molding.",
        "Prep/workspace photo showing floor and furniture protection.",
        "Finished living area or bedroom after interior repainting.",
      ]}
      imageGalleryTitle="Interior Painting Project Gallery"
      imageGalleryDescription="Explore finished interior spaces, ceiling work, clean wall lines, and bright room transformations completed with careful protection, repair, and controlled application."
      imageGallery={[
        {
          src: "/bradenton/luxury-interior-painting-bradenton-02.jpg.jpg",
          alt: "Luxury interior painting finish in Bradenton home",
          title: "Luxury Interior Finish",
          description:
            "A polished interior repaint with balanced color, clean transitions, and a refined finish for a high-end residential space.",
        },
        {
          src: "/bradenton/interior-house-painting-bradenton-01.jpg.jpg",
          alt: "Interior house painting project in Bradenton",
          title: "Clean Residential Repaint",
          description:
            "Interior walls and details finished for a brighter, cleaner home presentation under natural Florida light.",
        },
        {
          src: "/ellenton/house-interior-painting-ellenton-fl.jpg",
          alt: "House interior painting in Ellenton Florida",
          title: "Protected Occupied Home",
          description:
            "Interior painting planned around protection, organization, and smooth finish quality while the home stays livable.",
        },
        {
          src: "/parrish/Interior-painting-ceiling-painters.jpg",
          alt: "Interior ceiling painting project in Parrish",
          title: "Ceiling & Detail Work",
          description:
            "Ceiling and room surfaces finished with attention to coverage, sheen consistency, and clean visual lines.",
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
      ]}
      details={[
        {
          title: "Residential Interior Painting That Improves the Entire Home",
          text: "A disciplined interior repaint can modernize rooms, brighten natural light, sharpen trim details, and make the home feel cleaner without demolition.",
        },
        {
          title: "Walls, Ceilings, Trim, and Doors",
          text: "We plan interior projects around surface repair, sanding, caulking, primer needs, sheen selection, and clean protection for furniture and flooring.",
        },
      ]}
      process={[
        {
          title: "1. Setup",
          text: "Furniture, floors, fixtures, and nearby surfaces are protected before repair or painting begins.",
        },
        {
          title: "2. Preparation",
          text: "Cracks, nail holes, rough spots, and caulk lines are addressed so the finish reads clean up close.",
        },
        {
          title: "3. Painting",
          text: "Premium interior paints are applied for smooth coverage, clean transitions, and consistent sheen.",
        },
        {
          title: "4. Clean-Up",
          text: "The work area is reset, coverings are removed, and details are reviewed before completion.",
        },
      ]}
      reviews={[
        {
          label: "Interior Finish",
          quote:
            "Review themes highlight smooth finishes and cleaner room presentation.",
        },
        {
          label: "Occupied Home",
          quote:
            "Customers commonly value organized protection and cleanup during interior projects.",
        },
        {
          label: "Residential Service",
          quote:
            "Google review proof supports the company's professional and reliable service positioning.",
        },
      ]}
      faqs={faqs}
    />
  );
}
