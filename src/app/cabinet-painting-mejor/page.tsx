import MarkdownLandingPage from "../components/MarkdownLandingPage";
import { areaInterlinkCards } from "../content/landingCards";
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from "../content/markdownContent";

const raw = readMarkdownContent("doc/infor_services/cabine.md");
const heroImage = "/home/kitchen-cabinet-painting.jpg";
const heroAlt = "Cabinet painting project by Gold Lion Painting Inc";

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: "/cabinet-painting-mejor",
  image: heroImage,
  imageAlt: heroAlt,
});

export default function CabinetPaintingMejorPage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Cabinet Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
    />
  );
}
