import type { Hotel } from "../types/hotel";

interface ComparisonTableProps {
  hotels: Hotel[];
  scores: Record<string, number>;
}

const rows = [
  { label: "AI Match Score", key: "score" },
  { label: "Price", key: "pricePerNight" },
  { label: "Rating", key: "rating" },
  { label: "Cleanliness", key: "cleanliness" },
  { label: "Food", key: "food" },
  { label: "Kids Friendly", key: "kidsFriendly" },
  { label: "Nearby Attractions", key: "nearbyAttractions" },
  { label: "Safety", key: "safety" },
  { label: "Value for Money", key: "valueForMoney" },
] as const;

function getValue(
  hotel: Hotel,
  key: (typeof rows)[number]["key"],
  scores: Record<string, number>,
) {
  if (key === "score") return `${scores[hotel.id] ?? 0}%`;
  if (key === "pricePerNight")
    return `Rs ${hotel.pricePerNight.toLocaleString()}`;
  if (key === "rating") return hotel.rating.toFixed(1);
  return hotel.metrics[key].toFixed(1);
}

export function ComparisonTable({ hotels, scores }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <table className="w-full min-w-190 border-collapse">
        <thead>
          <tr>
            <th className="border-b border-[#e5e7eb] bg-[#f8f9fc] p-3 text-left">
              Metric
            </th>
            {hotels.map((hotel) => (
              <th
                key={hotel.id}
                className="border-b border-[#e5e7eb] bg-[#f8f9fc] p-3 text-left"
              >
                {hotel.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <td className="border-b border-[#e5e7eb] p-3 text-left">
                {row.label}
              </td>
              {hotels.map((hotel) => (
                <td
                  key={hotel.id + row.key}
                  className="border-b border-[#e5e7eb] p-3 text-left"
                >
                  {getValue(hotel, row.key, scores)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
