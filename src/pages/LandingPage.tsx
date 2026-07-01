import { X } from "lucide-react";
import { FilterPanel, type ReviewWindow } from "../components/FilterPanel";
import { HeroSection } from "../components/HeroSection";
import type { PreferenceKey, PreferenceWeights } from "../types/hotel";

interface LandingPageProps {
  destination: string;
  dateRange: string;
  guests: string;
  budget: number;
  reviewWindow: ReviewWindow;
  weights: PreferenceWeights;
  filterOpen: boolean;
  setFilterOpen: (isOpen: boolean) => void;
  onDestinationChange: (value: string) => void;
  onDateRangeChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onBudgetChange: (value: number) => void;
  onWeightChange: (key: PreferenceKey, value: number) => void;
  onReviewWindowChange: (value: ReviewWindow) => void;
  onSubmit: () => void;
}

export function LandingPage({
  destination,
  dateRange,
  guests,
  budget,
  reviewWindow,
  weights,
  filterOpen,
  setFilterOpen,
  onDestinationChange,
  onDateRangeChange,
  onGuestsChange,
  onBudgetChange,
  onWeightChange,
  onReviewWindowChange,
  onSubmit,
}: LandingPageProps) {
  return (
    <section className="grid items-start gap-10 px-0 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-10">
      <div>
        <HeroSection onOpenFilters={() => setFilterOpen(true)} />
      </div>

      <div className="relative">
        <div
          className={`${filterOpen ? "block" : "hidden"} fixed inset-0 z-60 bg-[rgba(3,8,33,0.38)] lg:hidden`}
          role="dialog"
          aria-modal="true"
          aria-label="Advanced filters"
        >
          <div className="h-full w-full overflow-y-auto bg-[#fbfef9] px-4 pt-4.5 pb-6.5">
            <div className="mx-auto mb-3 flex max-w-190 items-center justify-between text-[#111827]">
              <h3 className="text-[clamp(1.35rem,3.8vw,1.7rem)] font-bold text-[#6f1d1b]">
                Advanced Filters
              </h3>
              <button
                type="button"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
                className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-full border border-[#e5e7eb] bg-white p-0 text-[#111827]"
              >
                <X size={18} />
              </button>
            </div>

            <FilterPanel
              destination={destination}
              dateRange={dateRange}
              guests={guests}
              budget={budget}
              reviewWindow={reviewWindow}
              weights={weights}
              onDestinationChange={onDestinationChange}
              onDateRangeChange={onDateRangeChange}
              onGuestsChange={onGuestsChange}
              onBudgetChange={onBudgetChange}
              onWeightChange={onWeightChange}
              onReviewWindowChange={onReviewWindowChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <FilterPanel
            destination={destination}
            dateRange={dateRange}
            guests={guests}
            budget={budget}
            reviewWindow={reviewWindow}
            weights={weights}
            onDestinationChange={onDestinationChange}
            onDateRangeChange={onDateRangeChange}
            onGuestsChange={onGuestsChange}
            onBudgetChange={onBudgetChange}
            onWeightChange={onWeightChange}
            onReviewWindowChange={onReviewWindowChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}
