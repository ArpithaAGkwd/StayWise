import type { Hotel } from "../types/hotel";
import { Button } from "./Button";

interface CompareBarProps {
  selected: Hotel[];
  onCompare: () => void;
}

export function CompareBar({ selected, onCompare }: CompareBarProps) {
  if (selected.length < 2) return null;

  return (
    <aside
      className="fixed bottom-3 left-1/2 z-40 flex w-[calc(100%-24px)] max-w-fit -translate-x-1/2 items-center justify-between gap-3 rounded-2xl bg-[rgba(0,0,74,0.97)] px-3 py-2.5 text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:bottom-5 sm:w-auto sm:rounded-full"
      aria-live="polite"
    >
      <div className="mr-0.5 flex">
        {selected.map((hotel) => (
          <img
            key={hotel.id}
            src={hotel.image}
            alt={hotel.name}
            loading="lazy"
            className="-mr-2 h-8.5 w-8.5 rounded-full border-2 border-white object-cover last:mr-0"
          />
        ))}
      </div>
      <p className="hidden sm:block">{selected.length} hotels selected</p>
      <Button
        variant="secondary"
        onClick={onCompare}
        className="!rounded-[50px]"
      >
        Compare Now
      </Button>
    </aside>
  );
}
