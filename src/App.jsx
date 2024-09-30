import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/home";
import Horeca from "./Components/HoReCa/Horeca";
import TradeRegistration from "./Components/TradeRegistration/TradeRegistration";
import CompanyFormation from "./Components/CompanyFormation/CompanyFormation";
import AboutUs from "./Components/AboutUs/AboutUs";
import CostCalculator from "./Components/CostCalculator/CostCalculator";
import { IoSunnySharp } from "react-icons/io5";
import { PiMoonStarsFill } from "react-icons/pi";
import VM from "./Components/AboutUs/Visson-Mission/V&M";
import Certificate from "./Components/AboutUs/Certificate";
import GSTRegistration from "./Components/GSTRegistration/GSTRegistration";
import FSSAI from "./Components/FSSAI/FSSAI";
import IEC from "./Components/IEC/IEC";
import ISO from "./Components/ISO/ISO";
import Trademark from "./Components/Trademark/Trademark";
import NGO from "./Components/NGO/NGO";
import CompliancesHead from "./Components/Compliances/CompliancesHead";

const App = () => {
  // Manage dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persist dark mode state in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(savedMode === "true");
      document.documentElement.classList.toggle("dark", savedMode === "true");
    }
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen">
        {/* Dark/Light mode toggle button, hidden on mobile and visible on desktop */}
        <button
          className="fixed bottom-6 right-6 p-4 bg-gray-200 dark:bg-gray-800 z-50 text-black dark:text-yellow-500 rounded-full shadow-md text-2xl lg:block hidden"
          onClick={handleToggleDarkMode}
        >
          {isDarkMode ? <IoSunnySharp /> : <PiMoonStarsFill />}
        </button>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/trade-registration" element={<TradeRegistration />} />
            <Route path="/company-formation" element={<CompanyFormation />} />
            <Route path="/gst-registration" element={<GSTRegistration />} />
            <Route path="/food-safety" element={<FSSAI />} />
            <Route path="/import-export-code" element={<IEC />} />
            <Route path="/iso-certification" element={<ISO />} />
            <Route path="/trademark" element={<Trademark />} />
            <Route path="/ngo-society-registrations" element={<NGO />} />
            <Route path="/compliances" element={<CompliancesHead />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/cost-calculator" element={<CostCalculator />} />
            <Route path="/horeca" element={<Horeca />} />
            <Route path="/vm" element={<VM />} />
            <Route path="/certificate" element={<Certificate />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
