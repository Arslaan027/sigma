import { useState, useEffect } from "react";
import logo from "../../assets/Image/logorbg.png";
import Hamburger from "hamburger-react";
import PropTypes from "prop-types";
import Ourservices from "./OurServices";
import CostCalculator from "./CostCalculator";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";

const MainNavbar = ({ isFixed, handleSidebarToggle, isSidebarOpen }) => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook for navigation

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (searchTerm.trim()) {
      // Check if the search term is not empty
      console.log("Search for:", searchTerm);
      // Here you can implement logic to redirect to a search results page
      // For example:
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // Clear the search term after submission
    }
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
        <div className="flex items-center space-x-2 text-sm">
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
        <div className="space-x-2 text-sm hidden lg:flex items-center z-30 h-12">
          {/* Home Link */}
          <Home />
          <Ourservices />
          {/* Other Links */}
          <Link className="items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
            Our Company
          </Link>
          <Link className="items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
            Portfolio
          </Link>
          <Link className="items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
            BLOG
          </Link>
          <CostCalculator />
          <Link
            to="/contact"
            className="items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100"
          >
            Contact Us
          </Link>
          {/* Search Box */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border rounded-lg border-gray-300"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm} // Bind the input value to searchTerm state
              onChange={handleSearchChange} // Handle input changes
              className="flex-grow py-2 px-4 rounded-l-md outline-none focus:ring-1 focus:ring-green-500 transition duration-200 ease-in-out h-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

MainNavbar.propTypes = {
  isFixed: PropTypes.bool.isRequired,
  handleSidebarToggle: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default MainNavbar;
