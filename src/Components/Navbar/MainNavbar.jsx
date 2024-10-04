import { useState, useEffect } from "react";
import logo from "../../assets/Image/logorbg.png";
import Hamburger from "hamburger-react";
import PropTypes from "prop-types";
import Services2 from "./Services2";
import HospitalityServicesDropdown from "./HospitalityServicesDropdown";
import MarketingTechnologyDropdown from "./MarketingTechnologyDropdown";
import LogisticsSetupDropdown from "./LogisticsSetupDropdown";
import CostCalculator from "./CostCalculator";
import About from "./About";
import Home from "./Home";
import Megamenu from "./Megamenu"; // Import the Megamenu component

const MainNavbar = ({ isFixed, handleSidebarToggle, isSidebarOpen }) => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false); // State for megamenu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const toggleMegamenu = () => {
    setIsMegamenuOpen((prev) => !prev); // Toggle the megamenu on button click
  };

  return (
    <div
      className={`${
        isFixed
          ? `fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-md dark:shadow-gray-900 z-50 transition-transform duration-300 ${
              scrollDirection === "up" ? "-translate-y-full" : "translate-y-0"
            }`
          : "relative bg-none"
      }`}
    >
      <div className="flex items-center justify-between px-4">
        {/* Left Side with Logo */}
        <div className="flex items-center space-x-4 text-sm">
          <img
            src={logo}
            alt="SS Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <Hamburger
            toggled={isSidebarOpen}
            toggle={handleSidebarToggle}
            size={24}
            className={`transition-colors duration-300 dark:text-white`}
          />
        </div>

        {/* Right Side */}
        <div className="space-x-2 text-sm hidden lg:flex items-center z-30">
          {/* Home Link */}
          <Home />

          {/* Services Button */}
          <button
            onClick={toggleMegamenu}
            className="text-gray-800 dark:text-white hover:text-green-500 px-4 py-2"
          >
            Services
          </button>

          {/* Conditionally Render the Megamenu */}
          {isMegamenuOpen && (
            <div className="absolute top-full left-0 w-full flex justify-center mt-2">
              <Megamenu />
            </div>
          )}

          {/* Other Links */}
          {/* <BusinessServicesDropdown /> */}
          <Services2 />
          <CostCalculator />

          {/* Not in Use but dont remove this */}
          {/* <HospitalityServicesDropdown />
          <MarketingTechnologyDropdown />
          <LogisticsSetupDropdown />
          <About /> */}
        </div>
      </div>
    </div>
  );
};

MainNavbar.propTypes = {
  isFixed: PropTypes.bool.isRequired,
  handleSidebarToggle: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  handleDropdownToggle: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.number,
};

export default MainNavbar;
