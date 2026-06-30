import { getTravelData } from "@/api/travel";
import { LifeJournal } from "@/components/life-journal";

export default async function Page() {
  const { data: travelData } = await getTravelData();
  return <LifeJournal travelData={travelData} />;
}
