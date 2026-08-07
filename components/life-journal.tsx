"use client";

import Map from "@/components/map";
import { PageShell } from "@/components/page-shell";
import { useLanguage } from "@/components/language-provider";
import { TravelData } from "@/api/travel";

export function LifeJournal({ travelData }: { travelData: TravelData[] }) {
  const { t } = useLanguage();

  return (
    <PageShell
      kicker={t("life.kicker")}
      title={t("life.title")}
      description={t("life.description")}
      meta={`${travelData.length}`}
      maxWidth="wide"
      aside={
        <div>
          <div className="journal-label">{t("life.visited")}</div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {t("life.map_note")}
          </p>
        </div>
      }
    >
      <div className="journal-card relative z-0 isolate overflow-hidden p-2">
        <Map travelData={travelData} />
      </div>
    </PageShell>
  );
}
