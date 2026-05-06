import MarkdownLandingPage from "../components/MarkdownLandingPage";
import { areaInterlinkCards } from "../content/landingCards";
import {
  buildMarkdownMetadata,
  readMarkdownContent,
} from "../content/markdownContent";

const raw = readMarkdownContent("doc/infor_services/interior.md");
const heroImage = "/home/interior-house-painting-anna-maria-.jpg";
const heroAlt = "Interior painting project by Gold Lion Painting Inc";

export const metadata = buildMarkdownMetadata({
  raw,
  canonical: "/interior-painting",
  image: heroImage,
  imageAlt: heroAlt,
});

export default function InteriorPaintingUpgradePage() {
  return (
    <MarkdownLandingPage
      raw={raw}
      eyebrow="Interior Painting"
      heroImage={heroImage}
      heroAlt={heroAlt}
      interlinkTitle="House Painting Areas"
      interlinks={areaInterlinkCards}
      interlinkType="areas"
    />
  );
}
