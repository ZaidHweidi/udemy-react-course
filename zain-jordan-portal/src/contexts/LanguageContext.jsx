import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      login: "Log In",
      fiveG: "5G",
      support: "Support",
      internet: "Internet",
      mobile: "Mobile",
      eShop: "eShop",
      searchPlaceholder: "Search Zain...",
      megaMenuBtn: "more",
    },

    langToggle: "العربية",
    personal: "Zain Personal",
    business: "Zain Business",
    findUs: "Find Us",
    jordan: "Jordan",
    quickPay: "Quick Pay",
    quickPayPlaceholder: "Enter Mobile, Broadband, or Fiber subscriber number",
    payNow: "Pay/ Recharge Now",
    latestOffers: "Latest Offers",
    latestDevices: "Latest Devices",
    goToEshop: "Go to eShop",
    downloadApp: "Download our app",
    needHelp: "Need Help?",

    megaMenus: {
      fiveG: {
        columns: [
          {
            title: "5G",
            links: [
              "Home Internet 5G",
              "Prepaid 5G",
              "Postpaid 5G",
              "Mobile Bundles",
            ],
          },
        ],
        bottomTitle: "Know more about 5G",
        btnColor: "bg-[#d81b60] hover:bg-[#c2185b]",
        image: "/images/5GLogoPink.svg",
        imageClass: "max-h-[340px] translate-x-12",
      },
      eShop: {
        columns: [
          {
            title: "DEVICES",
            links: ["Mobile Devices", "Internet Devices", "Smart Devices"],
          },
          {
            title: "ACCESSORIES",
            links: [
              "Wearables",
              "Mobile Covers",
              "Screen Protectors",
              "Portable Speakers",
              "Power Bank",
            ],
          },
        ],
        bottomTitle: "Check out our Zain eShop",
        btnColor: "bg-[#3eb6e6] hover:bg-[#32a3d1]",
        image: "/images/iWatch.png",
        imageClass: "max-h-[300px]",
      },
      mobile: {
        columns: [
          {
            title: "POSTPAID",
            links: ["Monthly Subscriptions"],
          },
          {
            title: "PREPAID",
            links: ["With Subscriptions", "Visitors & expats offers"],
          },
          {
            title: "ROAMING AND INTERNATIONAL",
            links: [
              "Roaming Services",
              "International Services",
              "Visit Jordan",
            ],
          },
          {
            title: "SERVICES",
            links: [
              "Entertainment & App",
              "eSIM",
              "Voice services",
              "Internet bundles",
              "Service Code",
            ],
          },
        ],
        bottomTitle: "Get your iPhone with great installment plans",
        btnColor: "bg-[#3eb6e6] hover:bg-[#32a3d1]",
        image: "/images/Mobile.png.png",
        imageClass: "max-h-[330px]",
      },
      internet: {
        columns: [
          {
            title: "POSTPAID",
            links: ["Zain Fiber", "Fiber To The Room", "Home Broadband Offers"],
          },
          {
            title: "PREPAID",
            links: ["4G Internet Prepaid"],
          },
          {
            title: "INTERNET SERVICES",
            links: [
              "Safe Internet",
              "SmartWiFi",
              "Smart GPS Car Tracking System",
            ],
          },
        ],
        bottomTitle: "Check out Internet devices on our Zain eShop",
        btnColor: "bg-[#3eb6e6] hover:bg-[#32a3d1]",
        image: "/images/Routers.png",
        imageClass: "max-h-[290px]",
      },
    },
  },

  ar: {
    nav: {
      login: "تسجيل الدخول",
      fiveG: "5G",
      support: "المساعدة",
      internet: "انترنت",
      mobile: "موبايل",
      eShop: "المتجر الالكتروني",
      searchPlaceholder: "ابحث في زين...",
      megaMenuBtn: "المزيد",
    },

    langToggle: "English",
    personal: "زين شخصي",
    business: "زين أعمال",
    findUs: "زورونا",
    jordan: "الأردن",
    quickPay: "الدفع السريع",
    quickPayPlaceholder: "أدخل رقم اشتراك الموبايل او الانترنت او الفايبر",
    payNow: "ادفع /اعد الشحن الآن",
    latestOffers: "أحدث العروض",
    latestDevices: "أحدث الأجهزة",
    goToEshop: "اذهب إلى المتجر الالكتروني",
    downloadApp: "حمل تطبيق زين",
    needHelp: "هل تحتاج للمساعدة؟",

    megaMenus: {
      fiveG: {
        columns: [
          {
            title: "5G",
            links: [
              "انترنت منزلي 5G",
              "مدفوع مسبقاً 5G",
              "مدفوع لاحقاً 5G",
              "حزم الموبايل",
            ],
          },
        ],
        bottomTitle: "معلومات أكثر عن 5G",
        btnColor: "bg-[#d81b60] hover:bg-[#c2185b]",
        image: "/images/5GLogoPink.svg",
        imageClass: "max-h-[340px] -translate-x-12",
      },
      eShop: {
        columns: [
          {
            title: "الأجهزة",
            links: ["أجهزة الموبايل", "أجهزة الإنترنت", "الأجهزة الذكية"],
          },
          {
            title: "الإكسسوارات",
            links: [
              "الأجهزة القابلة للارتداء",
              "أغطية الهواتف",
              "شاشات الحماية",
              "مكبرات صوت محمولة",
              "شواحن متنقلة",
            ],
          },
        ],
        bottomTitle: "تصفح متجر زين الإلكتروني",
        btnColor: "bg-[#3eb6e6] hover:bg-[#32a3d1]",
        image: "/images/iWatch.png",
        imageClass: "max-h-[300px]",
      },
      mobile: {
        columns: [
          {
            title: "مدفوع لاحقاً",
            links: ["اشتراكات شهرية"],
          },
          {
            title: "مدفوع مسبقاً",
            links: ["مع اشتراكات", "عروض الزوار والمغتربين"],
          },
          {
            title: "التجوال والدولي",
            links: ["خدمات التجوال", "الخدمات الدولية", "زيارة الأردن"],
          },
          {
            title: "الخدمات",
            links: [
              "الترفيه والتطبيقات",
              "eSIM",
              "الخدمات الصوتية",
              "حزم الإنترنت",
              "رموز الخدمات",
            ],
          },
        ],
        bottomTitle: "احصل على iPhone بأقساط ميسرة",
        btnColor: "bg-[#3eb6e6] hover:bg-[#32a3d1]",
        image: "/images/Mobile.png.png",
        imageClass: "max-h-[330px]",
      },
      internet: {
        columns: [
          {
            title: "مدفوع لاحقاً",
            links: [
              "فايبر زين",
              "فايبر لكل غرفة FTTR",
              "عروض البرودباند المنزلي",
            ],
          },
          {
            title: "مدفوع مسبقاً",
            links: ["إنترنت 4G مدفوع مسبقاً"],
          },
          {
            title: "خدمات الإنترنت",
            links: ["إنترنت آمن", "سمارت واي فاي", "نظام تتبع المركبات الذكي"],
          },
        ],
        bottomTitle: "تصفح أجهزة الإنترنت في متجر زين",
        btnColor: "bg-[#3eb6e6] hover:bg-[#32a3d1]",
        image: "/images/Routers.png",
        imageClass: "max-h-[290px]",
      },
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Mirror document direction whenever language updates
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
