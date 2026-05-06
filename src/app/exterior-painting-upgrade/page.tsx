import MarkdownLandingPage from "../components/MarkdownLandingPage";
import { areaInterlinkCards } from "../content/landingCards";
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from "../content/markdownContent";

const raw = readMarkdownContent("doc/infor_services/exterior.md");
const heroImage = "/home/luxury-exterior-painting-anna-maria.jpg";
const heroAlt = "Exterior painting project by Gold Lion Painting Inc";

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: "/exterior-painting",
  image: heroImage,
  imageAlt: heroAlt,
});

export default function ExteriorPaintingUpgradePage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Exterior Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
    />
  );
}
