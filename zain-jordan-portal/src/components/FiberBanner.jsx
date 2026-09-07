export default function FiberBanner() {
  return (
    <section className="w-full bg-[#1b003a] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
      <div className="max-w-md space-y-4 z-10 relative">
        <h2 className="text-2xl sm:text-3xl font-black leading-tight">
          Connect with Zain Fiber and enjoy our unique solutions and
          entertainment
        </h2>
        <button className="bg-[#e91e63] hover:bg-[#d81557] text-white text-xs font-bold px-6 py-3 rounded-full transition-colors">
          Know more about Zain Fiber
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 z-10 relative">
        <div className="bg-white rounded-2xl p-4 text-gray-800 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-amber-500 font-black tracking-widest text-sm">
              TOD
            </span>
            <p className="text-xs text-gray-600 mt-1">
              An all-in-one entertainment destination in your house.
            </p>
            <a
              href="#tod"
              className="text-xs text-[#3eb6e6] font-semibold mt-2 inline-block"
            >
              Read more &gt;
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 text-gray-800 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-purple-700 font-black text-sm">
              Fiber To The Room
            </span>
            <p className="text-xs text-gray-600 mt-1">
              Delivers extremely fast internet speeds throughout your entire
              house.
            </p>
            <a
              href="#fttr"
              className="text-xs text-[#3eb6e6] font-semibold mt-2 inline-block"
            >
              Read more &gt;
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none bg-gradient-to-l from-purple-500 to-transparent" />
    </section>
  );
}
