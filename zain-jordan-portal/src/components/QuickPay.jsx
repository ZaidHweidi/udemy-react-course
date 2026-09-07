import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function QuickPay() {
  const [subscriberNumber, setSubscriberNumber] = useState("");
  const { t } = useLanguage();

  return (
    <section className="w-full py-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 max-w-[920px] mx-auto">
        <form className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a]">
            {t.quickPay}
          </h2>

          <div className="w-full sm:flex-1">
            <input
              type="text"
              value={subscriberNumber}
              onChange={(e) => setSubscriberNumber(e.target.value)}
              placeholder={t.quickPayPlaceholder}
              className="w-full h-11 px-4 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#3eb6e6]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto h-11 px-6 bg-[#3eb6e6] text-white text-xs sm:text-sm font-semibold rounded-xl"
          >
            {t.payNow}
          </button>
        </form>
      </div>
    </section>
  );
}
