import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/home";
import Horeca from "./Components/HoReCa/Horeca";
import TradeRegistration from "./Components/TradeRegistration/TradeRegistration";
import CompanyFormation from "./Components/CompanyFormation/CompanyFormation";
import AboutHero from "./Components/AboutUs/AboutHero";
import CostCalculator from "./Components/CostCalculator/CostCalculator";
import { IoSunnySharp } from "react-icons/io5";
import { PiMoonStarsFill } from "react-icons/pi";

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
        <button
          className="fixed bottom-6 right-6 p-4 bg-gray-200 dark:bg-gray-800 z-50 text-black dark:text-yellow-500 rounded-full shadow-md text-2xl"
          onClick={handleToggleDarkMode}
        >
          {isDarkMode ? <IoSunnySharp /> : <PiMoonStarsFill />}
        </button>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/trade-registration" element={<TradeRegistration />} />
            <Route path="/company-formation" element={<CompanyFormation />} />
            <Route path="/about" element={<AboutHero />} />
            <Route path="/cost-calculator" element={<CostCalculator />} />
            <Route path="/horeca" element={<Horeca />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
