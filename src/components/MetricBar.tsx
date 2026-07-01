interface MetricBarProps {
  label: string;
  value: number;
}

export function MetricBar({ label, value }: MetricBarProps) {
  const percent = Math.max(0, Math.min(100, (value / 5) * 100));

  return (
    <div
      className="rounded-[14px] border border-[#e5e7eb] bg-white p-3"
      aria-label={`${label} score ${value} out of 5`}
    >
      <div className="mb-1.5 flex justify-between text-sm">
        <span>{label}</span>
        <span>{value.toFixed(1)}/5</span>
      </div>
      <div className="h-2.25 overflow-hidden rounded-full bg-[#e9eef8]">
        <span
          className="block h-full rounded-full bg-[linear-gradient(90deg,var(--primary-blue)_0%,#5073ff_100%)]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
