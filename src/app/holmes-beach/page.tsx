import {
  buildAreaMetadata,
  getAreaLandingData,
} from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("holmes-beach");

export const metadata = buildAreaMetadata(area);

export default function HolmesBeachPage() {
  return <AreaLandingPage area={area} />;
}
