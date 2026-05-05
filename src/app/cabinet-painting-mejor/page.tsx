import ServiceLandingPage from "../components/ServiceLandingPage";

const faqs = [
  {
    q: "Is cabinet painting a good alternative to replacing cabinets?",
    a: "Yes, when the cabinet layout and boxes are in good condition, refinishing can modernize the kitchen without the cost and disruption of full replacement.",
  },
  {
    q: "What makes cabinet painting different from wall painting?",
    a: "Cabinet refinishing requires deeper cleaning, degreasing, sanding, bonding primer, controlled application, and careful curing because cabinets are high-touch surfaces.",
  },
  {
    q: "Can you paint bathroom vanities and built-ins?",
    a: "Yes. Cabinet refinishing can apply to kitchen cabinets, bathroom vanities, laundry cabinets, and built-ins depending on the material and condition.",
  },
];

export default function CabinetPaintingMejorPage() {
  return (
    <ServiceLandingPage
      schemaId="cabinet-painting-faq-schema"
      eyebrow="Cabinet Refinishing Upgrade"
      title="Cabinet Refinishing & Kitchen Painting Services"
      subtitle="Cabinet Painting That Modernizes Kitchens Without Full Replacement"
      description="Cabinet refinishing for kitchens, vanities, and built-ins using controlled prep, bonding primers, and cabinet-grade finishes for a cleaner, more modern look."
      heroImage="/home/kitchen-cabinet-painting.jpg"
      heroAlt="Kitchen cabinet painting project in Bradenton, Sarasota, and Tampa Bay"
      includedServices={[
        "Kitchen cabinet painting",
        "Bathroom vanity refinishing",
        "Cabinet color updates",
        "Door, drawer, and hardware removal",
        "Degreasing, sanding, and bonding primer",
        "Professional spray-applied cabinet finishes",
      ]}
      failureTitle="Why Cabinet Painting Fails"
      failureIntro="Cabinets are high-touch surfaces. When degreasing, sanding, primer, products, or application methods are wrong, the finish can peel, chip, feel sticky, or show brush and roller texture."
      failurePoints={[
        "Peeling cabinet paint",
        "Chipping edges and worn corners",
        "Sticky or soft finishes",
        "Brush marks and roller texture",
        "Poor previous refinishing jobs",
      ]}
      standardsTitle="Factory-Smooth Cabinet Finish Standards"
      standardsText="A cabinet finish needs a different system than walls. The goal is a smooth, durable surface that looks clean up close and performs under daily use."
      standards={[
        "Deep degreasing to remove oils and buildup",
        "Sanding before primer and after primer for a smooth base",
        "Bonding primer for stronger adhesion",
        "Spray-applied cabinet-grade finish with no brush marks",
      ]}
      environmentTitle="Cabinet Refinishing for Occupied Homes"
      environmentText="Kitchen and vanity projects need clean sequencing. The process protects floors, counters, nearby rooms, and hardware while keeping the project organized."
      environmentPoints={[
        "Doors, drawers, and hardware removed and organized",
        "Counters, floors, appliances, and surrounding areas protected",
        "Controlled drying and curing process",
        "Reinstallation, alignment, and final walkthrough included",
      ]}
      imageBriefs={[
        "Finished kitchen cabinet photo with smooth spray finish.",
        "Prep placeholder showing doors or drawers removed and labeled.",
        "Close-up placeholder for cabinet finish texture and clean edges.",
        "Before/after kitchen modernization placeholder.",
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
          title: "Professional Cabinet Refinishing",
          text: "Cabinet refinishing can update a kitchen dramatically while preserving the existing layout. The result depends on careful cleaning, sanding, masking, priming, and finish control.",
        },
        {
          title: "Kitchen Modernization Without Demolition",
          text: "A cabinet project can refresh the room, improve color balance, and create a smoother finish without replacing boxes, counters, or flooring.",
        },
      ]}
      process={[
        {
          title: "1. Removal and Setup",
          text: "Doors, drawers, hardware, and surrounding surfaces are organized and protected before refinishing begins.",
        },
        {
          title: "2. Degreasing and Sanding",
          text: "Cabinet surfaces are cleaned, deglossed, sanded, and prepared for strong primer adhesion.",
        },
        {
          title: "3. Primer and Finish",
          text: "Bonding primer and cabinet-grade finish systems are applied for smoother, more durable results.",
        },
        {
          title: "4. Reassembly",
          text: "Doors, drawers, and hardware are reinstalled, aligned, and reviewed during the final walkthrough.",
        },
      ]}
      reviews={[
        {
          label: "Kitchen Refresh",
          quote:
            "Review themes support cabinet refinishing as a strong visual kitchen upgrade.",
        },
        {
          label: "Finish Quality",
          quote:
            "Customers commonly care most about smooth finish quality and a clean final look.",
        },
        {
          label: "Project Control",
          quote:
            "Google review proof reinforces organized communication and project control.",
        },
      ]}
      faqs={faqs}
    />
  );
}
