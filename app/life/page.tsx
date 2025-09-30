import { getTravelData } from "@/api/travel";
import Map from "@/components/map";

export default async function Page() {
  const { data: travelData } = await getTravelData();
  return <Map travelData={travelData} />;
}
