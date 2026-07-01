import { Sparkles } from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../components/Button";
import { ComparisonTable } from "../components/ComparisonTable";
import { SectionHeader } from "../components/SectionHeader";
import type { Hotel } from "../types/hotel";

interface ComparePageProps {
  selectedHotels: Hotel[];
  scoreMap: Record<string, number>;
  onViewDetail: (hotel: Hotel) => void;
  onBackToRecommendations: () => void;
}

export function ComparePage({
  selectedHotels,
  scoreMap,
  onViewDetail,
  onBackToRecommendations,
}: ComparePageProps) {
  const best = selectedHotels
    .map((hotel) => ({ hotel, score: scoreMap[hotel.id] ?? 0 }))
    .sort((a, b) => b.score - a.score)[0];

  const radarData = best
    ? [
        { metric: "clean", value: best.hotel.metrics.cleanliness },
        { metric: "food", value: best.hotel.metrics.food },
        { metric: "safety", value: best.hotel.metrics.safety },
        { metric: "location", value: best.hotel.metrics.nearbyAttractions },
        { metric: "value", value: best.hotel.metrics.valueForMoney },
        { metric: "kids", value: best.hotel.metrics.kidsFriendly },
      ]
    : [];

  return (
    <section className="grid gap-5 px-4 pb-8 sm:px-6 lg:px-10">
      <Button
        variant="primary"
        onClick={onBackToRecommendations}
        className="w-fit self-start"
      >
        Back
      </Button>
      <SectionHeader
        title="Compare Hotels"
        subtitle="Pick up to 5 hotels and identify your best match"
      />

      {selectedHotels.length > 0 ? (
        <ComparisonTable hotels={selectedHotels} scores={scoreMap} />
      ) : (
        <p className="rounded-[20px] border border-dashed border-[#e5e7eb] bg-white p-5 text-[#6b7280]">
          Select at least 2 hotels from recommendations to compare.
        </p>
      )}

      {best ? (
        <section className="grid gap-3.5 rounded-[20px] border border-[#e5e7eb] bg-white p-4.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full bg-[#e8e8ff] px-3 py-2 text-sm font-semibold text-[#00004a]">
              <Sparkles size={15} /> AI Recommendation
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#111827]">
              Based on your preferences, {best.hotel.name} is the best choice.
            </h3>
            <p className="text-[#6b7280]">
              It leads on the metrics you weighted highest and keeps a strong
              balance between service, cleanliness, and value.
            </p>
            <Button onClick={() => onViewDetail(best.hotel)}>
              Open Hotel Detail
            </Button>
          </div>
          <div className="min-h-70">
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis domain={[0, 5]} />
                <Radar
                  dataKey="value"
                  stroke="var(--primary-blue)"
                  fill="var(--primary-blue)"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </section>
      ) : null}
    </section>
  );
}
