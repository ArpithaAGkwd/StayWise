import { Button } from "../components/Button";
import { CompareBar } from "../components/CompareBar";
import { HotelCard } from "../components/HotelCard";
import { RecommendationBanner } from "../components/RecommendationBanner";
import { SectionHeader } from "../components/SectionHeader";
import type { Hotel } from "../types/hotel";

interface RecommendationsPageProps {
  rankedHotels: Array<{ hotel: Hotel; score: number }>;
  selectedCompareIds: string[];
  onToggleCompare: (hotelId: string) => void;
  onViewDetail: (hotel: Hotel) => void;
  onCompare: () => void;
  onStartNewSearch: () => void;
}

export function RecommendationsPage({
  rankedHotels,
  selectedCompareIds,
  onToggleCompare,
  onViewDetail,
  onCompare,
  onStartNewSearch,
}: RecommendationsPageProps) {
  const topPick = rankedHotels[0];
  const selectedHotels = rankedHotels
    .filter((item) => selectedCompareIds.includes(item.hotel.id))
    .map((item) => item.hotel);

  return (
    <section className="grid gap-4.5 px-4 pb-8 sm:px-6 lg:px-10">
      <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-[#111827]">
        Your Personalized Recommendations
      </h1>
      <p className="max-w-[70ch] text-[#6b7280]">
        Based on your selected preferences, here are the top hotel matches for
        your trip.
      </p>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-start">
        <SectionHeader
          title="Top 12 Hotel Matches"
          subtitle="AI Curated : Personalized by your selected priorities"
        />
        <Button
          className="w-auto self-start whitespace-nowrap"
          variant="primary"
          onClick={onStartNewSearch}
        >
          Start New Search
        </Button>
      </div>

      {topPick ? (
        <RecommendationBanner
          hotel={topPick.hotel}
          score={topPick.score}
          onView={() => onViewDetail(topPick.hotel)}
        />
      ) : null}

      {rankedHotels.length > 0 ? (
        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2 lg:grid-cols-4">
          {rankedHotels.slice(0, 12).map((item) => (
            <HotelCard
              key={item.hotel.id}
              hotel={item.hotel}
              score={item.score}
              compared={selectedCompareIds.includes(item.hotel.id)}
              onToggleCompare={onToggleCompare}
              onView={onViewDetail}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-[20px] border border-dashed border-[#e5e7eb] bg-white p-5 text-[#6b7280]">
          No Result for this filter
        </p>
      )}

      <CompareBar selected={selectedHotels} onCompare={onCompare} />
    </section>
  );
}
