import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import QuickPay from "./components/QuickPay";
import LatestOffers from "./components/LatestOffers";
import LatestDevices from "./components/LatestDevices";
import FiberBanner from "./components/FiberBanner";
import ServicesGrid from "./components/ServicesGrid";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // 'home' | 'login'

  if (currentPage === "login") {
    return <LoginPage onBack={() => setCurrentPage("home")} />;
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fafafa] text-gray-900 flex flex-col font-sans">
        <header className="w-full bg-white">
          <TopBar />
          {/* Pass a prop or handler to open the login page */}
          <div onClick={() => setCurrentPage("login")}>
            <NavBar />
          </div>
        </header>

        <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10 my-6">
          <QuickPay />
          <LatestOffers />
          <LatestDevices />
          <FiberBanner />
          <ServicesGrid />
          <AppPromo />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
