import { Star } from "lucide-react";

interface RatingBadgeProps {
  rating: number;
}

export function RatingBadge({ rating }: RatingBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full bg-[#fff3cc] px-2 py-1 text-[0.84rem] font-semibold text-[#7e5a00]"
      aria-label={`Rating ${rating} out of 5`}
    >
      <Star size={14} fill="currentColor" />
      {rating.toFixed(1)}
    </span>
  );
}
