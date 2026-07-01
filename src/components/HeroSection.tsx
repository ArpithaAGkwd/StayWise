import { SlidersHorizontal, Sparkles } from "lucide-react";
import { Button } from "./Button";
import HeroPreview from "./HeroPreview";

interface HeroSectionProps {
  onOpenFilters: () => void;
}

export function HeroSection({ onOpenFilters }: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-275 px-6 py-10">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#f1efff] px-4.5 py-3 font-semibold text-[#00004a]">
          <Sparkles size={15} /> AI Hotel Intelligence
        </p>
        <Button
          className="inline-flex lg:hidden"
          variant="secondary"
          onClick={onOpenFilters}
        >
          <SlidersHorizontal size={16} /> Filters
        </Button>
      </div>
      <h1 className="max-w-175 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] text-[#111827]">
        Find your perfect stay, powered by AI.
      </h1>
      <h3 className="mt-5 text-[clamp(1.05rem,2.4vw,1.28rem)] font-semibold text-[#6f1d1b]">
        StayWise - Smarter hotel decisions start here.
      </h3>
      <p className="max-w-175 text-[1.05rem] leading-7 text-[#6b7280]">
        StayWise is an AI-powered hotel intelligence platform designed to
        simplify travel planning. We aggregate and analyze real customer reviews
        from trusted sources, filter out noise, and transform raw feedback into
        meaningful insights. Whether you're planning a family vacation, business
        trip, or luxury getaway, StayWise helps you discover stays that truly
        match your priorities.
      </p>

      <HeroPreview />
    </section>
  );
}
