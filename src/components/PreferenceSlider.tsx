import type { LucideIcon } from "lucide-react";

interface PreferenceSliderProps {
  label: string;
  icon: LucideIcon;
  value: number;
  onChange: (value: number) => void;
}

export function PreferenceSlider({
  label,
  icon: Icon,
  value,
  onChange,
}: PreferenceSliderProps) {
  return (
    <label className="grid gap-1.5">
      <span className="flex items-center justify-between gap-3 text-sm">
        <span className="inline-flex items-center gap-2 text-[#6b7280]">
          <Icon size={15} />
          {label}
        </span>
        <strong className="text-[0.88rem] text-[#00004a]">{value}%</strong>
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-[#00004a]"
        aria-label={`${label} preference weight`}
      />
    </label>
  );
}
