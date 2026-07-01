import clsx from "clsx";

interface TabsProps<T extends string> {
  options: T[];
  value: T;
  onChange: (next: T) => void;
  ariaLabel: string;
  className?: string;
}

export function Tabs<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className,
}: TabsProps<T>) {
  return (
    <div
      className={clsx("flex flex-wrap gap-2", className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            className={clsx(
              "cursor-pointer rounded-full border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-medium text-[#111827] transition duration-200 hover:border-[#00004a] hover:text-[#00004a]",
              isSelected &&
                "border-[#00004a] bg-(image:--primary-blue-gradient) text-white hover:text-white",
            )}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
