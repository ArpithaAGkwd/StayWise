import {
  BarChart3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
} from "lucide-react";

const featureCards = [
  {
    icon: Sparkles,
    title: "AI Match Score",
    description: "Personalized score",
  },
  {
    icon: BarChart3,
    title: "Smart Comparison",
    description: "Compare up to 5 Hotels",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Insights",
    description: "Real reviews only",
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Nearby attractions",
  },
] as const;

const floatingBadges = [
  {
    icon: Users,
    label: "Great for Families",
    position: "left-0 top-83",
  },
  {
    icon: ShieldCheck,
    label: "Very Safe & Secure",
    position: "left-0 top-111",
  },
  {
    icon: Utensils,
    label: "Excellent Food",
    position: "right-0 top-63",
  },
  {
    icon: MapPin,
    label: "Near Beach (5 min)",
    position: "right-0 top-106.5",
  },
] as const;

export default function HeroPreview() {
  return (
    <div className="relative mt-9 w-full max-w-full overflow-x-clip lg:mt-15 lg:h-195">
      <svg
        className="absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1200 700"
        aria-hidden="true"
      >
        <path
          d="M140 280 C240 180 330 320 450 260"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />
        <path
          d="M140 480 C280 560 330 420 470 460"
          stroke="#22C55E"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />
        <path
          d="M760 260 C900 200 940 340 1080 260"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />
        <path
          d="M760 470 C920 430 980 520 1100 460"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />
      </svg>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="w-full rounded-[14px] border border-transparent bg-(image:--primary-blue-gradient) px-3 py-3 text-center text-white shadow-[0_12px_24px_rgba(0,0,74,0.24)]"
            >
              <Icon size={22} className="mx-auto" />
              <h4 className="mt-2 mb-2 whitespace-nowrap font-semibold">
                {item.title}
              </h4>
              <p className="whitespace-nowrap text-sm text-white">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="absolute left-30 top-72.5 hidden h-87.5 w-65 overflow-hidden rounded-3xl opacity-35 lg:block">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200"
          alt="Faded hotel preview left"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute right-30 top-72.5 hidden h-87.5 w-65 overflow-hidden rounded-3xl opacity-35 lg:block">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200"
          alt="Faded hotel preview right"
          className="h-full w-full object-cover"
        />
      </div>

      {floatingBadges.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`absolute hidden items-center gap-2.5 rounded-[18px] bg-white px-5 py-4 font-medium shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:flex ${item.position}`}
          >
            <Icon size={18} />
            {item.label}
          </div>
        );
      })}

      <article className="relative z-10 mx-auto mt-4 w-full max-w-190 overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] lg:absolute lg:left-1/2 lg:top-42.5 lg:mt-0 lg:w-145 lg:max-w-none lg:-translate-x-1/2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200"
            alt="Taj Exotica Resort and Spa"
            className="h-55 w-full object-cover md:h-70 lg:h-75"
          />
          <div className="absolute top-3 left-3 rounded-full bg-(image:--primary-blue-gradient) px-3.5 py-2 text-sm font-semibold text-white md:top-4 md:left-4 md:px-4.5 md:py-2.5">
            Top Pick For You
          </div>
          <div className="absolute top-3 right-3 flex h-21.5 w-21.5 flex-col items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)] md:top-3.5 md:right-3.5 lg:top-6 lg:right-6 lg:h-27.5 lg:w-27.5">
            <h2 className="m-0 text-[1.45rem] font-semibold text-[#00004a] lg:text-[2rem]">
              92%
            </h2>
            <span className="text-[0.7rem] text-[#111827] lg:text-sm">
              Match Score
            </span>
          </div>
        </div>

        <div className="p-4 md:p-5 lg:p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="m-0 text-[21px] font-semibold lg:text-[28px]">
                Taj Exotica Resort &amp; Spa
              </h3>
              <p className="text-[#666]">Benaulim, Goa</p>
            </div>
            <div className="text-[22px] font-bold text-[#00004a] lg:text-[28px]">
              Rs 13,500
              <span className="text-sm font-normal text-[#888]"> / night</span>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
            <div className="rounded-[18px] bg-[#f7f7fb] p-3.5 text-center lg:p-4.5">
              <span className="mb-2.5 block text-[#777]">Cleanliness</span>
              <strong className="text-xl text-[#00004a] lg:text-2xl">
                4.8
              </strong>
            </div>
            <div className="rounded-[18px] bg-[#f7f7fb] p-3.5 text-center lg:p-4.5">
              <span className="mb-2.5 block text-[#777]">Food</span>
              <strong className="text-xl text-[#00004a] lg:text-2xl">
                4.7
              </strong>
            </div>
            <div className="rounded-[18px] bg-[#f7f7fb] p-3.5 text-center lg:p-4.5">
              <span className="mb-2.5 block text-[#777]">Kids Friendly</span>
              <strong className="text-xl text-[#00004a] lg:text-2xl">
                4.9
              </strong>
            </div>
            <div className="rounded-[18px] bg-[#f7f7fb] p-3.5 text-center lg:p-4.5">
              <span className="mb-2.5 block text-[#777]">Location</span>
              <strong className="text-xl text-[#00004a] lg:text-2xl">
                4.2
              </strong>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
