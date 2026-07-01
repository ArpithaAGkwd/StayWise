import type { ReviewItem } from "../types/hotel";
import { RatingBadge } from "./RatingBadge";

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="rounded-[14px] border border-[#e5e7eb] bg-white p-3">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <h4 className="m-0 font-semibold">{review.reviewerName}</h4>
          <p className="mt-1 text-[0.88rem] text-[#6b7280]">
            {review.reviewerType}
          </p>
        </div>
        <RatingBadge rating={review.rating} />
      </div>
      <p className="text-[#6b7280]">{review.text}</p>
      <small className="text-[#6b7280]">
        {new Date(review.date).toLocaleDateString()}
      </small>
    </article>
  );
}
