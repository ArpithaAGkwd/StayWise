import { Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import type { Hotel } from "../types/hotel";
import { Button } from "./Button";

interface RecommendationBannerProps {
  hotel: Hotel;
  score: number;
  onView: () => void;
}

export function RecommendationBanner({
  hotel,
  score,
  onView,
}: RecommendationBannerProps) {
  const normalizedScore = Math.max(0, Math.min(score, 100));

  return (
    <section className="grid items-center gap-3 rounded-[20px] border border-[#e5e7eb] bg-white p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:grid-cols-[auto_96px_1fr_auto_auto]">
      <div className="inline-flex justify-self-start items-center gap-1.5 rounded-full bg-[#e8e8ff] px-2.5 py-1.5 text-[0.85rem] font-semibold text-[#00004a] md:col-span-full">
        <Sparkles size={14} /> Top Pick For You
      </div>
      <img
        src={hotel.image}
        alt={hotel.name}
        loading="lazy"
        className="h-18 w-full rounded-xl object-cover md:w-24"
      />
      <div>
        <h3 className="m-0 text-lg font-semibold">{hotel.name}</h3>
        <p className="mt-1 text-[#6b7280]">{hotel.location}</p>
      </div>
      <div
        className="grid h-19.5 w-19.5 place-items-center rounded-full font-bold text-white"
        aria-label={`Match score ${score}%`}
        style={
          {
            background: `conic-gradient(var(--primary-blue) ${normalizedScore}%, #d8dff9 0)`,
          } as CSSProperties
        }
      >
        {score}%
      </div>
      <Button variant="secondary" onClick={onView}>
        View Details
      </Button>
    </section>
  );
}
