import { buildAreaMetadata, getAreaLandingData } from "../components/areaLandingData";
import AreaLandingPage from "../components/AreaLandingPage";

const area = getAreaLandingData("bradenton");

export const metadata = buildAreaMetadata(area);

export default function BradentonPage() {
  return <AreaLandingPage area={area} />;
}
