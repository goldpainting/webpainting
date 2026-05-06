import MarkdownLandingPage from "../components/MarkdownLandingPage";
import { serviceInterlinkCards } from "../content/landingCards";
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from "../content/markdownContent";

const raw = readMarkdownContent("doc/info-areas/PARRISH.md");
const heroImage = "/parrish/house-exterior-painting-parrish.jpg";
const heroAlt = "Exterior house painting project in Parrish";

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: "/parrish",
  image: heroImage,
  imageAlt: heroAlt,
});

export default function ParrishPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Parrish Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
    />
  );
}
