import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function TopBar() {
  const [activeTab, setActiveTab] = useState("personal");
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <div className="w-full border-b border-gray-200 bg-white text-xs text-gray-700 select-none">
      <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center h-9">
        {/* Left Segment (in LTR) / Right Segment (in RTL) */}
        <div className="flex items-center h-full">
          <button
            onClick={() => setActiveTab("personal")}
            className={`h-full px-4 font-medium transition-colors ${
              activeTab === "personal"
                ? "bg-[#3eb6e6] text-white"
                : "text-gray-800 hover:text-[#3eb6e6]"
            }`}
          >
            {t.personal}
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`h-full px-4 font-medium transition-colors ${
              activeTab === "business"
                ? "bg-[#3eb6e6] text-white"
                : "text-gray-800 hover:text-[#3eb6e6]"
            }`}
          >
            {t.business}
          </button>
        </div>

        {/* Utilities */}
        <div className="flex items-center gap-6">
          <a
            href="#find-us"
            className="flex items-center gap-1 hover:text-[#3eb6e6]"
          >
            <span>{t.findUs}</span>
          </a>

          <span>{t.jordan}</span>

          {/* Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="font-bold text-gray-800 hover:text-[#3eb6e6] transition-colors"
          >
            {t.langToggle}
          </button>
        </div>
      </div>
    </div>
  );
}
