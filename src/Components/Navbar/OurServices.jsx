import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import Megamenu from "./Megamenu"; // Import the first Megamenu
import Megamenu2 from "./Megamenu2"; // Import the second Megamenu

const Ourservices = ({ activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track Business Services megamenu visibility
  const [isMenu2Open, setIsMenu2Open] = useState(false); // State to track Furniture Services megamenu visibility

  const handleMouseEnter = (menu) => {
    if (menu === "business") setIsMenuOpen(true);
    if (menu === "furniture") setIsMenu2Open(true);
  };

  const handleMouseLeave = (menu) => {
    if (menu === "business") setIsMenuOpen(false);
    if (menu === "furniture") setIsMenu2Open(false);
  };

  return (
    <div>
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "InteriorDesign"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Our Services</span>
        </button>

        <div className="absolute w-44 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          <div className="relative">
            <button
              className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              onMouseEnter={() => handleMouseEnter("business")}
              onMouseLeave={() => handleMouseLeave("business")}
            >
              Business Services
            </button>

            {isMenuOpen && (
              <div
                className="absolute top-0 right-full mt-2"
                onMouseEnter={() => handleMouseEnter("business")}
                onMouseLeave={() => handleMouseLeave("business")}
              >
                <Megamenu />
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              onMouseEnter={() => handleMouseEnter("furniture")}
              onMouseLeave={() => handleMouseLeave("furniture")}
            >
              Furniture Services
            </button>

            {isMenu2Open && (
              <div
                className="absolute top-0 right-full mt-2"
                onMouseEnter={() => handleMouseEnter("furniture")}
                onMouseLeave={() => handleMouseLeave("furniture")}
              >
                <Megamenu2 />
              </div>
            )}
          </div>

          <div className="relative">
            <Link
              to="/decor-items"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Services 3
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Ourservices.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default Ourservices;
