import { useState, useEffect } from "react";
import logo from "../../assets/Image/logorbg.png";
import Hamburger from "hamburger-react";
import PropTypes from "prop-types";
import BusinessServicesDropdown from "./BusinessServicesDropdown";
import InteriorDesignDropdown from "./InteriorDesignDropdown";
import HospitalityServicesDropdown from "./HospitalityServicesDropdown";
import MarketingTechnologyDropdown from "./MarketingTechnologyDropdown";
import LogisticsSetupDropdown from "./LogisticsSetupDropdown";
import CostCalculator from "./CostCalculator";
import About from "./About";
import Home from "./Home";

const MainNavbar = ({ isFixed, handleSidebarToggle, isSidebarOpen }) => {
  // const [degreeSolution, setDegreeSolution] = useState(false);

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

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
            className="h-16 w-auto object-contain" // Increase height to h-20 (or more)
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <Hamburger
            toggled={isSidebarOpen}
            toggle={handleSidebarToggle}
            size={24}
            // color={dark ? "#fff" : "#000"} // White in dark mode, black in light mode
            className={`transition-colors duration-300 dark:text-white`} // Added dark:text-white here
          />
        </div>

        {/* Right Side */}
        <div className="space-x-0 text-sm hidden lg:flex items-center z-30">
          {/* Home Link */}
          <Home />

          {/* Business Services Dropdown */}
          <BusinessServicesDropdown />

          {/* Interior & Design Dropdown */}
          <InteriorDesignDropdown />

          {/* Hospitality Services Dropdown */}
          <HospitalityServicesDropdown />

          {/* Marketing & Technology Dropdown */}
          <MarketingTechnologyDropdown />

          {/* Logistics & Setup Dropdown */}
          <LogisticsSetupDropdown />

          {/* About */}
          <About />

          {/* Cost Calculator */}
          <CostCalculator />
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
