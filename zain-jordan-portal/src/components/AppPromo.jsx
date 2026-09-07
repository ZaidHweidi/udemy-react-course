const FEATURES_LEFT = [
  "Best price for Recharges",
  "Pay bills & Recurring Payment",
  "Check remaining balance ,GBs, and minutes",
  "Book a visit",
];

const FEATURES_RIGHT = [
  "Special promotions",
  "E-Vouchers",
  "Money transfer & Gifting",
  "Manage multiple accounts",
];

export default function AppPromo() {
  return (
    <section className="w-full bg-[#3b0060] rounded-[24px] p-6 sm:p-10 text-white relative overflow-hidden shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 z-10 relative">
        {/* Left Area: Title, 2-Column Features, Badges */}
        <div className="flex-1 max-w-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Download our app
          </h2>

          {/* Two-Column Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-[13px] font-medium text-white/95">
            <div className="space-y-3.5">
              {FEATURES_LEFT.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="font-bold text-sm leading-none select-none">
                    ✓
                  </span>
                  <span className="leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3.5">
              {FEATURES_RIGHT.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <span className="font-bold text-sm leading-none select-none">
                    ✓
                  </span>
                  <span className="leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block transition-transform active:scale-95 hover:opacity-90"
            >
              <img
                src="/images/GoogleStore.png"
                alt="Get it on Google Play"
                className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              />
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              className="inline-block transition-transform active:scale-95 hover:opacity-90"
            >
              <img
                src="/images/AppleStore.png"
                alt="Download on the App Store"
                className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              />
            </a>

            <a
              href="https://appgallery.huawei.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block transition-transform active:scale-95 hover:opacity-90"
            >
              <img
                src="/images/AppGallery.png"
                alt="Explore it on AppGallery"
                className="h-10 sm:h-11 w-auto object-contain rounded-lg"
              />
            </a>
          </div>
        </div>

        {/* Right Area: Mockup Phones & QR Code */}
        <div className="flex items-center justify-end gap-5 lg:gap-8 flex-shrink-0">
          {/* Phones Image */}
          <div className="w-[200px] sm:w-[230px] lg:w-[260px]">
            <img
              src="/images/Screenshot.png"
              alt="Zain Jordan Mobile App"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* QR Code Container */}
          <div className="bg-white p-2.5 rounded-2xl shadow-xl w-28 sm:w-32 lg:w-36 flex-shrink-0">
            <img
              src="/images/Qr.png"
              alt="Scan QR code to install app"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Background Mandala / Floral Pattern Overlay */}
      <div className="absolute right-[220px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-25 pointer-events-none rounded-full bg-radial from-teal-400/40 via-purple-400/20 to-transparent" />
    </section>
  );
}
