import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [activeMenu, setActiveMenu] = useState(null); // 'fiveG' | 'eShop' | 'mobile' | 'internet' | null
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { key: "fiveG", label: "5G", hasDropdown: true },
    { key: "eShop", label: t?.nav?.eShop || "eShop", hasDropdown: true },
    { key: "mobile", label: t?.nav?.mobile || "Mobile", hasDropdown: true },
    {
      key: "internet",
      label: t?.nav?.internet || "Internet",
      hasDropdown: true,
    },
    { key: "support", label: t?.nav?.support || "Support", hasDropdown: false },
  ];

  const currentMegaMenu = activeMenu ? t?.megaMenus?.[activeMenu] : null;

  return (
    <nav
      className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 relative"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Top Header Row */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Zain logo */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center">
              <img
                src="/images/ZainLogo.png"
                alt="Zain Jordan"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </a>

            {/* Link */}
            <ul className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-800">
              {navLinks.map((link) => (
                <li
                  key={link.key}
                  className="cursor-pointer flex items-center gap-1.5 py-5 hover:text-[#3eb6e6] transition-colors"
                  onMouseEnter={() => {
                    if (link.hasDropdown) setActiveMenu(link.key);
                    else setActiveMenu(null);
                  }}
                >
                  <span dir="ltr">{link.label}</span>
                  {link.hasDropdown && (
                    <svg
                      className={`w-2.5 h-2.5 fill-current transition-transform duration-200 text-gray-500 ${
                        activeMenu === link.key
                          ? "rotate-180 text-[#3eb6e6]"
                          : ""
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action Icons (Search, Separator, Log In) */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-[#3eb6e6]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="w-[1px] h-5 bg-gray-300"></div>
            <a
              href="#login"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-[#3eb6e6]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{t?.nav?.login || "Log In"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- REUSABLE DYNAMIC MEGA MENU --- */}
      {currentMegaMenu && (
        <div
          className="absolute top-full start-0 w-full bg-white border-t border-b border-gray-100 shadow-xl z-50 overflow-hidden"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-12 relative min-h-[380px] flex flex-col justify-between">
            {/* Dynamic Columns Layout (Anchored at START: left in LTR, right in RTL) */}
            <div className="z-10 flex flex-wrap gap-12 lg:gap-16 max-w-[65%] text-start">
              {currentMegaMenu.columns.map((col) => (
                <div key={col.title} className="space-y-4">
                  <h3 className="text-sm font-black text-gray-900 tracking-tight">
                    {col.title}
                  </h3>
                  <ul className="space-y-3 text-xs font-semibold text-gray-700">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href={`#${link}`}
                          className="hover:text-[#3eb6e6] transition-colors block leading-snug"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Callout Card */}
            <div className="z-10 mt-10 border border-gray-200 rounded-2xl px-6 py-4 flex items-center justify-between bg-white max-w-2xl shadow-xs">
              <span className="text-xs sm:text-sm font-black text-gray-900">
                {currentMegaMenu.bottomTitle}
              </span>
              <button
                className={`${currentMegaMenu.btnColor} text-white text-xs font-bold px-8 py-2 rounded-full transition-colors shadow-xs`}
              >
                {t?.nav?.megaMenuBtn || "more"}
              </button>
            </div>

            {/* Product / Brand Graphic (Anchored at END: right in LTR, left in RTL) */}
            <div className="absolute end-6 top-0 bottom-0 w-[35%] flex items-center justify-end rtl:justify-start pointer-events-none select-none">
              <img
                src={currentMegaMenu.image}
                alt="Category preview"
                className={`w-auto object-contain ${currentMegaMenu.imageClass || ""}`}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
