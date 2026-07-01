import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BookingCard } from "../components/BookingCard";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { MetricBar } from "../components/MetricBar";
import { ReviewCard } from "../components/ReviewCard";
import { SectionHeader } from "../components/SectionHeader";
import { Tabs } from "../components/Tabs";
import type { Hotel, ReviewType } from "../types/hotel";

type TrendRange = "month" | "year" | "3 years";
type ReviewTab = "All" | ReviewType;

interface HotelDetailPageProps {
  hotel: Hotel;
  score: number;
  reviewTab: ReviewTab;
  trendRange: TrendRange;
  onReviewTabChange: (value: ReviewTab) => void;
  onTrendRangeChange: (value: TrendRange) => void;
  onBack: () => void;
  backButtonLabel: string;
}

const reviewTabs: ReviewTab[] = [
  "All",
  "Families",
  "Couples",
  "Solo",
  "Business",
];
const trendTabs: TrendRange[] = ["month", "year", "3 years"];

export function HotelDetailPage({
  hotel,
  score,
  reviewTab,
  trendRange,
  onReviewTabChange,
  onTrendRangeChange,
  onBack,
  backButtonLabel,
}: HotelDetailPageProps) {
  const visibleReviews =
    reviewTab === "All"
      ? hotel.reviews
      : hotel.reviews.filter((item) => item.reviewerType === reviewTab);

  return (
    <section className="grid gap-5 px-4 pb-8 sm:px-6 lg:px-10">
      <Button variant="primary" onClick={onBack} className="w-fit self-start">
        {backButtonLabel}
      </Button>
      <SectionHeader
        eyebrow="Hotel Profile"
        title={hotel.name}
        subtitle={hotel.description}
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-2.5">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="aspect-16/8 w-full rounded-[20px] object-cover"
          />
          <div className="grid grid-cols-3 gap-2.5">
            {hotel.gallery.map((item) => (
              <img
                key={item}
                src={item}
                alt={`${hotel.name} view`}
                loading="lazy"
                className="aspect-4/3 w-full rounded-[14px] object-cover"
              />
            ))}
          </div>
        </div>
        <BookingCard hotel={hotel} score={score} />
      </div>

      <Card className="p-4.5">
        <h3 className="mt-0 text-xl font-semibold">AI Summary</h3>
        <ul className="grid gap-1.75 pl-4.5 text-[#6b7280]">
          {hotel.aiSummary.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Card>

      <section>
        <SectionHeader
          title="Metrics"
          subtitle="Guest sentiment scores by category"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <MetricBar label="Cleanliness" value={hotel.metrics.cleanliness} />
          <MetricBar label="Food" value={hotel.metrics.food} />
          <MetricBar label="Fitness" value={hotel.metrics.fitness} />
          <MetricBar label="Kids Friendly" value={hotel.metrics.kidsFriendly} />
          <MetricBar label="Safety" value={hotel.metrics.safety} />
          <MetricBar label="Location" value={hotel.metrics.nearbyAttractions} />
        </div>
      </section>

      <section>
        <SectionHeader
          title="Rating Trend"
          subtitle={`Viewing ${trendRange} trend`}
        />
        <Tabs
          options={trendTabs}
          value={trendRange}
          onChange={onTrendRangeChange}
          ariaLabel="Trend range"
          className="pb-4"
        />
        <Card className="rounded-[20px] p-2.5">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hotel.trendMonthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis domain={[3.5, 5]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="var(--primary-blue)"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </section>

      <section>
        <SectionHeader title="Reviews" subtitle="Filter by traveler type" />
        <Tabs
          options={reviewTabs}
          value={reviewTab}
          onChange={onReviewTabChange}
          ariaLabel="Review tabs"
          className="pb-4"
        />
        {visibleReviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className="rounded-[20px] border border-dashed border-[#e5e7eb] bg-white p-5 text-[#6b7280]">
            No Result for this filter
          </p>
        )}
      </section>

      <section>
        <SectionHeader
          title="Nearby Attractions"
          subtitle="Quick access from the hotel"
        />
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)]">
          <div className="grid gap-2.5">
            {hotel.nearbyAttractions.map((item) => (
              <article
                key={item.id}
                className="grid gap-1 rounded-[14px] border border-[#e5e7eb] bg-white p-3"
              >
                <h4 className="m-0 font-semibold">{item.name}</h4>
                <p className="m-0 text-[#6b7280]">
                  {item.distanceKm.toFixed(1)} km
                </p>
                <p className="m-0 text-[#6b7280]">{item.travelTime}</p>
                <Button variant="ghost">Directions</Button>
              </article>
            ))}
          </div>
          <div
            className="grid min-h-55 place-items-center rounded-[14px] border border-dashed border-[#e5e7eb] bg-[linear-gradient(130deg,#f1f5ff,#f8faf6)] text-[#6b7280]"
            aria-label="Mini map preview"
          >
            <span>Map Preview</span>
          </div>
        </div>
      </section>
    </section>
  );
}
