import { useMemo, useState } from "react";
import type { ReviewWindow } from "./components/FilterPanel";
import { Navbar } from "./components/Navbar";
import { computeMatchScore, defaultWeights, hotels } from "./data/hotels";
import { ComparePage } from "./pages/ComparePage";
import { HotelDetailPage } from "./pages/HotelDetailPage";
import { LandingPage } from "./pages/LandingPage";
import { RecommendationsPage } from "./pages/RecommendationsPage";
import type {
  Hotel,
  PreferenceKey,
  PreferenceWeights,
  ReviewType,
} from "./types/hotel";

type AppPage = "landing" | "recommendations" | "compare" | "detail";
type DetailTrend = "month" | "year" | "3 years";
type ReviewTab = "All" | ReviewType;
type DetailBackPage = "recommendations" | "compare";

function App() {
  const [page, setPage] = useState<AppPage>("landing");
  const [destination, setDestination] = useState("Goa");
  const [dateRange, setDateRange] = useState("20 Jul - 25 Jul");
  const [guests, setGuests] = useState("2 Adults, 1 Child");
  const [budget, setBudget] = useState(12000);
  const [reviewWindow, setReviewWindow] = useState<ReviewWindow>("Past Year");
  const [weights, setWeights] = useState<PreferenceWeights>(defaultWeights);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);
  const [activeHotel, setActiveHotel] = useState<Hotel>(hotels[0]);
  const [detailBackPage, setDetailBackPage] =
    useState<DetailBackPage>("recommendations");
  const [detailReviewTab, setDetailReviewTab] = useState<ReviewTab>("All");
  const [detailTrend, setDetailTrend] = useState<DetailTrend>("year");

  const rankedHotels = useMemo(() => {
    return hotels
      .map((hotel) => ({ hotel, score: computeMatchScore(hotel, weights) }))
      .sort((a, b) => b.score - a.score);
  }, [weights]);

  const scoreMap = useMemo(
    () =>
      rankedHotels.reduce<Record<string, number>>((acc, item) => {
        acc[item.hotel.id] = item.score;
        return acc;
      }, {}),
    [rankedHotels],
  );

  const selectedHotels = useMemo(
    () =>
      hotels
        .filter((hotel) => selectedCompareIds.includes(hotel.id))
        .slice(0, 5),
    [selectedCompareIds],
  );

  const updateWeight = (key: PreferenceKey, value: number) => {
    setWeights((previous) => ({ ...previous, [key]: value }));
  };

  const toggleCompare = (hotelId: string) => {
    setSelectedCompareIds((previous) => {
      if (previous.includes(hotelId)) {
        return previous.filter((id) => id !== hotelId);
      }

      if (previous.length >= 5) return previous;
      return [...previous, hotelId];
    });
  };

  const openDetail = (
    hotel: Hotel,
    backPage: DetailBackPage = "recommendations",
  ) => {
    setActiveHotel(hotel);
    setDetailBackPage(backPage);
    setPage("detail");
  };

  const launchRecommendations = () => {
    setFilterOpen(false);
    setPage("recommendations");
  };

  return (
    <div className="min-h-screen">
      <div>
        <Navbar className="mb-10" />

        {page === "landing" ? (
          <LandingPage
            destination={destination}
            dateRange={dateRange}
            guests={guests}
            budget={budget}
            reviewWindow={reviewWindow}
            weights={weights}
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            onDestinationChange={setDestination}
            onDateRangeChange={setDateRange}
            onGuestsChange={setGuests}
            onBudgetChange={setBudget}
            onWeightChange={updateWeight}
            onReviewWindowChange={setReviewWindow}
            onSubmit={launchRecommendations}
          />
        ) : null}

        {page === "recommendations" ? (
          <RecommendationsPage
            rankedHotels={rankedHotels}
            selectedCompareIds={selectedCompareIds}
            onToggleCompare={toggleCompare}
            onViewDetail={(hotel) => openDetail(hotel, "recommendations")}
            onCompare={() => setPage("compare")}
            onStartNewSearch={() => setPage("landing")}
          />
        ) : null}

        {page === "compare" ? (
          <ComparePage
            selectedHotels={selectedHotels}
            scoreMap={scoreMap}
            onViewDetail={(hotel) => openDetail(hotel, "compare")}
            onBackToRecommendations={() => setPage("recommendations")}
          />
        ) : null}

        {page === "detail" ? (
          <HotelDetailPage
            hotel={activeHotel}
            score={scoreMap[activeHotel.id] ?? 0}
            reviewTab={detailReviewTab}
            trendRange={detailTrend}
            onReviewTabChange={setDetailReviewTab}
            onTrendRangeChange={setDetailTrend}
            onBack={() => setPage(detailBackPage)}
            backButtonLabel={
              detailBackPage === "compare"
                ? "Back to Compare"
                : "Back to Recommendations"
            }
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
