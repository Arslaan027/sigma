import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import Megamenu from "./Megamenu"; // Import the Megamenu component

const Services2 = ({ activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track megamenu visibility

  const handleMouseEnter = () => {
    setIsMenuOpen(true); // Open the megamenu on hover
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false); // Close the megamenu when not hovering
  };

  return (
    <div>
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "InteriorDesign"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Our Services</span>
        </button>

        <div className="absolute w-44 bg-white dark:bg-neutral-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          <div className="relative">
            <button
              className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-neutral-700"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Business Services
            </button>

            {/* Conditionally render the Megamenu when hovering */}
            {isMenuOpen && (
              <div
                className="absolute top-0 right-full mt-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Megamenu />
              </div>
            )}
          </div>

          <div className="relative">
            <Link
              to="/furniture"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Services 2
            </Link>
          </div>

          <div className="relative">
            <Link
              to="/decor-items"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
            >
              Services 3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Services2.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default Services2;
