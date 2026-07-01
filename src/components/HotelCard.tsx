import { MapPin, Sparkles } from "lucide-react";
import type { Hotel } from "../types/hotel";
import { Button } from "./Button";
import { RatingBadge } from "./RatingBadge";

interface HotelCardProps {
  hotel: Hotel;
  score: number;
  compared: boolean;
  onToggleCompare: (hotelId: string) => void;
  onView: (hotel: Hotel) => void;
}

export function HotelCard({
  hotel,
  score,
  compared,
  onToggleCompare,
  onView,
}: HotelCardProps) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
      <img
        src={hotel.image}
        alt={hotel.name}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
      <div className="grid gap-2.5 p-3.5">
        <h3 className="m-0 text-lg font-semibold">{hotel.name}</h3>
        <p className="m-0 inline-flex items-center gap-1 text-sm text-[#6b7280]">
          <MapPin size={14} />
          {hotel.location}
        </p>
        <div className="flex items-center justify-between gap-3">
          <RatingBadge rating={hotel.rating} />
          <span className="inline-flex items-center gap-1 text-[0.85rem] text-[#00004a]">
            <Sparkles size={14} /> {score}% match
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[#f8f9fc] px-2 py-1 text-xs text-[#6b7280]">
            Clean {hotel.metrics.cleanliness.toFixed(1)}
          </span>
          <span className="rounded-full bg-[#f8f9fc] px-2 py-1 text-xs text-[#6b7280]">
            Food {hotel.metrics.food.toFixed(1)}
          </span>
          <span className="rounded-full bg-[#f8f9fc] px-2 py-1 text-xs text-[#6b7280]">
            Kids {hotel.metrics.kidsFriendly.toFixed(1)}
          </span>
          <span className="rounded-full bg-[#f8f9fc] px-2 py-1 text-xs text-[#6b7280]">
            Location {hotel.metrics.nearbyAttractions.toFixed(1)}
          </span>
        </div>
        <strong className="text-[1.03rem] text-[#00004a]">
          Rs {hotel.pricePerNight.toLocaleString()} / night
        </strong>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="secondary" onClick={() => onView(hotel)}>
            View Details
          </Button>
          <label className="inline-flex items-center gap-1.5 text-sm text-[#6b7280]">
            <input
              type="checkbox"
              checked={compared}
              onChange={() => onToggleCompare(hotel.id)}
              aria-label={`Compare ${hotel.name}`}
            />
            Compare
          </label>
        </div>
      </div>
    </article>
  );
}
