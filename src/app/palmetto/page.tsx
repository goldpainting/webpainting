import MarkdownLandingPage from "../components/MarkdownLandingPage";
import { serviceInterlinkCards } from "../content/landingCards";
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from "../content/markdownContent";

const raw = readMarkdownContent("doc/info-areas/PALMETTO.md");
const heroImage = "/palmeto/house-exterior-painting-palmetto.jpg";
const heroAlt = "Exterior house painting project in Palmetto";

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: "/palmetto",
  image: heroImage,
  imageAlt: heroAlt,
});

export default function PalmettoPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Palmetto Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="Residential Painting Services"
      interlinks={serviceInterlinkCards}
      interlinkType="services"
    />
  );
}
