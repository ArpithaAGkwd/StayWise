import type { LucideIcon } from "lucide-react";
import {
  Baby,
  CalendarDays,
  Dumbbell,
  IndianRupee,
  MapPin,
  MoonStar,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  Utensils,
  Wallet,
} from "lucide-react";
import type { PreferenceKey, PreferenceWeights } from "../types/hotel";
import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";
import { PreferenceSlider } from "./PreferenceSlider";
import { Tabs } from "./Tabs";

export type ReviewWindow =
  | "Past Month"
  | "Past 6 Months"
  | "Past Year"
  | "Past 3 Years";

interface FilterPanelProps {
  destination: string;
  dateRange: string;
  guests: string;
  budget: number;
  reviewWindow: ReviewWindow;
  weights: PreferenceWeights;
  onDestinationChange: (value: string) => void;
  onDateRangeChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onBudgetChange: (value: number) => void;
  onWeightChange: (key: PreferenceKey, value: number) => void;
  onReviewWindowChange: (value: ReviewWindow) => void;
  onSubmit: () => void;
}

const preferenceMeta: Array<{
  key: PreferenceKey;
  label: string;
  icon: LucideIcon;
}> = [
  { key: "cleanliness", label: "Cleanliness", icon: Sparkles },
  { key: "food", label: "Food", icon: Utensils },
  { key: "kidsFriendly", label: "Kids Friendly", icon: Baby },
  { key: "petFriendly", label: "Pet Friendly", icon: PawPrint },
  { key: "fitness", label: "Fitness", icon: Dumbbell },
  { key: "nearbyAttractions", label: "Nearby Attractions", icon: Trees },
  { key: "safety", label: "Safety", icon: ShieldCheck },
  { key: "valueForMoney", label: "Value for Money", icon: Wallet },
  { key: "quietPrivacy", label: "Quiet and Privacy", icon: MoonStar },
  { key: "serviceQuality", label: "Service Quality", icon: Sparkles },
];

export function FilterPanel({
  destination,
  dateRange,
  guests,
  budget,
  reviewWindow,
  weights,
  onDestinationChange,
  onDateRangeChange,
  onGuestsChange,
  onBudgetChange,
  onWeightChange,
  onReviewWindowChange,
  onSubmit,
}: FilterPanelProps) {
  return (
    <Card className="grid gap-5 p-6">
      <h3 className="m-0 text-[1.35rem] font-semibold text-[#6b7280]">
        Set your stay preferences
      </h3>
      <div className="grid gap-3.5">
        <Input
          label="Destination"
          icon={<MapPin size={16} />}
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          placeholder="Where are you going?"
        />
        <Input
          label="Check-in / Check-out"
          icon={<CalendarDays size={16} />}
          value={dateRange}
          onChange={(event) => onDateRangeChange(event.target.value)}
          placeholder="Add dates"
        />
        <Input
          label="Guests"
          icon={<Users size={16} />}
          value={guests}
          onChange={(event) => onGuestsChange(event.target.value)}
          placeholder="2 Adults, 1 Child"
        />
        <label className="grid gap-2 rounded-[14px] border border-[#e5e7eb] p-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-[#6b7280]">
            <IndianRupee size={16} /> Budget per night
          </span>
          <input
            type="range"
            min={3000}
            max={25000}
            step={100}
            value={budget}
            onChange={(event) => onBudgetChange(Number(event.target.value))}
            className="accent-[#00004a]"
            aria-label="Budget per night"
          />
          <strong className="text-[#00004a]">
            Rs {budget.toLocaleString()}
          </strong>
        </label>
      </div>

      <div className="grid gap-3">
        <h4 className="m-0 text-base font-semibold text-[#6f1d1b]">
          What matters most to you?
        </h4>
        {preferenceMeta.map((item) => (
          <PreferenceSlider
            key={item.key}
            label={item.label}
            icon={item.icon}
            value={weights[item.key]}
            onChange={(value) => onWeightChange(item.key, value)}
          />
        ))}
      </div>

      <div className="grid gap-3 pb-2">
        <h4 className="m-0 text-base font-semibold text-[#6f1d1b]">
          Review time period
        </h4>
        <Tabs
          options={["Past Month", "Past 6 Months", "Past Year", "Past 3 Years"]}
          value={reviewWindow}
          onChange={onReviewWindowChange}
          ariaLabel="Select review time period"
        />
      </div>

      <Button fullWidth onClick={onSubmit}>
        Find Best Matches
      </Button>
    </Card>
  );
}
