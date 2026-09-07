import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const TABS = ["Mobile & Tablets", "Internet Devices", "Smart Home"];

const DEVICES = [
  {
    id: 1,
    title: "RockRose Premium German Bayer TPU Back Cas...",
    price: "18.00 JOD",
    category: "Mobile & Tablets",
    image: "https://placehold.co/180x240/f1f5f9/475569?text=Case",
  },
  {
    id: 2,
    title: "Nothing Phone 2",
    price: "375.00 JOD",
    category: "Mobile & Tablets",
    image: "https://placehold.co/180x240/f1f5f9/475569?text=Nothing+Phone",
  },
  {
    id: 3,
    title: "CMF - Nothing Phone 1 5G",
    price: "225.00 JOD",
    category: "Mobile & Tablets",
    image: "https://placehold.co/180x240/f1f5f9/475569?text=CMF+Phone",
  },
  {
    id: 4,
    title: "Honor Pad X9",
    price: "159.00 JOD",
    category: "Mobile & Tablets",
    image: "https://placehold.co/180x240/f1f5f9/475569?text=Honor+Pad",
  },
];

const BRANDS = [
  "Apple",
  "SAMSUNG",
  "NOTHING",
  "HONOR",
  "Infinix",
  "TECNO",
  "Xiaomi",
];

export default function LatestDevices() {
  const [activeTab, setActiveTab] = useState("Mobile & Tablets");

  const { t } = useLanguage();

  return (
    <section className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-2 gap-4">
        <h2 className="text-xl font-black text-gray-900">{t.latestDevices}</h2>

        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
                activeTab === tab
                  ? "border-[#3eb6e6] text-[#3eb6e6] bg-sky-50/50"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DEVICES.map((device) => (
          <div
            key={device.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-between hover:shadow-md transition-shadow group"
          >
            <div className="h-44 w-full flex items-center justify-center p-2">
              <img
                src={device.image}
                alt={device.title}
                className="max-h-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="w-full text-left mt-3">
              <p className="text-xs text-gray-700 font-medium line-clamp-2 h-8">
                {device.title}
              </p>
              <p className="text-sm font-black text-gray-900 mt-2">
                {device.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="bg-[#3eb6e6] hover:bg-[#32a3d1] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors">
          Go to eShop
        </button>
      </div>

      <div className="pt-4">
        <p className="text-xs text-gray-400 mb-3">Shop by brand</p>
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="border border-gray-200 rounded-lg py-2.5 text-center text-xs font-bold text-gray-700 hover:border-[#3eb6e6] cursor-pointer transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
