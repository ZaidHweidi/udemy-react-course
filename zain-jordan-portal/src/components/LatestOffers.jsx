import { useLanguage } from "../contexts/LanguageContext";

const OFFERS = [
  {
    id: 1,
    title: "Zain App Offer",
    image: "/images/offerCard1.png",
  },
  {
    id: 2,
    title: "FTTR Fiber Offer",
    image: "/images/offerCard2.png",
  },
  {
    id: 3,
    title: "5G Mobile Offer",
    image: "/images/offerCard3.png",
  },
];

export default function LatestOffers() {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      {/* Header with Title & Arrow Controls */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          {t.latestOffers}
        </h2>
        <div className="flex gap-2">
          <button
            aria-label="Previous Offer"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next Offer"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      {/* Offers Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="group relative overflow-hidden rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer bg-gray-100"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-[280px] sm:h-[300px] object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
