import { buildAreaMetadata, getAreaLandingData } from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("lakewood-ranch");

export const metadata = buildAreaMetadata(area);

export default function LakewoodRanchPage() {
  return <AreaLandingPage area={area} />;
}
