import type { Hotel } from "../types/hotel";
import { Button } from "./Button";

interface BookingCardProps {
  hotel: Hotel;
  score: number;
}

export function BookingCard({ hotel, score }: BookingCardProps) {
  return (
    <aside className="self-start rounded-[20px] border border-[#e5e7eb] bg-white p-4.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:sticky lg:top-4">
      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#6f1d1b]">
        AI Match Score
      </p>
      <h3 className="my-1.5 text-[2rem] font-semibold">{score}%</h3>
      <p className="mt-0 text-[#6b7280]">
        Rs {hotel.pricePerNight.toLocaleString()} / night
      </p>
      <Button fullWidth>Book Now</Button>
      <div className="mt-3.5 grid gap-2">
        {hotel.providerPrices.map((providerPrice) => (
          <div
            key={providerPrice.provider}
            className="flex items-center justify-between rounded-xl border border-[#e5e7eb] p-2.5"
          >
            <span>{providerPrice.provider}</span>
            <strong>Rs {providerPrice.price.toLocaleString()}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}
