import { useState } from "react";

export default function LoginPage({ onBack }) {
  const [activeTab, setActiveTab] = useState("quickLogin"); // 'login' | 'quickLogin'
  const [username, setUsername] = useState("");
  const [quickMobile, setQuickMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "login") {
      console.log("Standard Login:", { username, password });
    } else {
      console.log("Quick Login for Mobile:", quickMobile);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800 relative">
      {/* Top Gradient Header with Zain Logo */}
      <div className="w-full h-24 bg-gradient-to-r from-[#4b286d] via-[#205493] to-[#00a3e0] flex items-center justify-center shadow-inner">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onBack?.();
          }}
          className="flex items-center gap-2"
        >
          <span className="text-4xl font-black tracking-tight text-white select-none">
            zain
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#3eb6e6] mb-4"></span>
        </a>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[480px] mx-auto px-6 py-8 flex-1 flex flex-col justify-start">
        {/* Back Link */}
        <button
          type="button"
          onClick={onBack}
          className="self-start inline-flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-[#3eb6e6] mb-6 transition-colors"
        >
          <span className="text-sm font-bold">&lsaquo;</span> Back to Zain
          website
        </button>

        {/* Tab Headers */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className={`flex-1 pb-3 text-lg font-black transition-colors ${
              activeTab === "login"
                ? "text-gray-900 border-b-2 border-[#3eb6e6]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("quickLogin")}
            className={`flex-1 pb-3 text-lg font-black transition-colors ${
              activeTab === "quickLogin"
                ? "text-gray-900 border-b-2 border-[#3eb6e6]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Quick Login
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {activeTab === "login" ? (
            /* --- Standard Login Fields --- */
            <>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Mobile, Broadband, or Fiber subscriber number"
                  className="w-full h-11 px-3 text-xs text-gray-800 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#3eb6e6] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-11 px-3 pr-10 text-xs text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-[#3eb6e6] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {showPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                        />
                      )}
                    </svg>
                  </button>
                </div>

                <div className="text-right pt-0.5">
                  <a
                    href="#forgot"
                    className="text-[11px] text-gray-500 hover:text-[#3eb6e6] underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </>
          ) : (
            /* --- Quick Login Fields --- */
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-700">
                Enter your Mobile Number
              </label>
              <input
                type="text"
                value={quickMobile}
                onChange={(e) => setQuickMobile(e.target.value)}
                placeholder="079xxxxxx or 00xxxxx"
                className="w-full h-11 px-3 text-xs text-gray-800 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#3eb6e6] transition-colors"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-11 bg-[#3eb6e6] hover:bg-[#32a3d1] text-white text-sm font-bold rounded-lg transition-colors shadow-xs"
          >
            Login
          </button>
        </form>

        {/* Social Options & Registration (Only visible on Standard Login) */}
        {activeTab === "login" && (
          <>
            <div className="relative my-7 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-3 text-[11px] text-gray-400">
                or login with
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="h-10 bg-[#3b5998] hover:bg-[#324b80] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="font-bold">f</span>
                <span>Facebook</span>
              </button>

              <button
                type="button"
                className="h-10 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold border border-gray-300 rounded-md flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="font-bold text-red-500">G</span>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="h-10 bg-black hover:bg-neutral-800 text-white text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>𝕏</span>
                <span>Twitter</span>
              </button>
            </div>

            <div className="text-center mt-8 text-xs text-gray-600">
              Don't have an account ?{" "}
              <a
                href="#register"
                className="font-bold text-[#3eb6e6] hover:underline"
              >
                Create Account
              </a>
            </div>
          </>
        )}
      </div>

      {/* Floating Side Widgets */}
      <div className="fixed right-4 bottom-24">
        <button
          aria-label="Accessibility"
          className="w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black"
        >
          👁
        </button>
      </div>

      <div className="fixed right-4 bottom-6">
        <button
          aria-label="Live Chat"
          className="w-12 h-12 bg-[#3eb6e6] hover:bg-[#32a3d1] text-white rounded-full shadow-lg flex items-center justify-center text-xl transition-all"
        >
          💬
        </button>
      </div>
    </div>
  );
}
