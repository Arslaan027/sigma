import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const InteriorDesignDropdown = ({ activeLink }) => {
  const [showInteriorDesign, setShowInteriorDesign] = useState(false);
  const [showFurniture, setShowFurniture] = useState(false);
  const [showDecor, setShowDecor] = useState(false);

  return (
    <div>
      <div className="relative group">
        <button
          onMouseEnter={() => setShowInteriorDesign(false)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "InteriorDesign"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Interior & Design</span>
        </button>

        <div className="absolute w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          {/* InteriorDesign Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowInteriorDesign(true)}
            onMouseLeave={() => setShowInteriorDesign(false)}
          >
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700">
              Interior Design
            </button>

            {/* InteriorDesign Dropdown content */}
            {showInteriorDesign && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/2d-3d-design"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  2D-3D Design Layout
                </Link>
                <Link
                  to="/glass-aluminum-work"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Glass and Aluminum Work
                </Link>
                <Link
                  to="/lighting-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Lighting Solutions
                </Link>
                <Link
                  to="/false-ceiling"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  False Ceiling
                </Link>
                <Link
                  to="/wallpaper-panels"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Wallpaper, Wall Art & Panels
                </Link>
                <Link
                  to="/painting"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Painting
                </Link>
                <Link
                  to="/flooring-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Flooring Solutions
                </Link>
                <Link
                  to="/renovation-work"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Renovation Work
                </Link>
              </div>
            )}
          </div>

          {/* Other Interior & Design Services */}
          <div
            className="relative"
            onMouseEnter={() => setShowFurniture(true)}
            onMouseLeave={() => setShowFurniture(false)}
          >
            <Link
              to="/furniture"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Furniture
            </Link>

            {/* Furniture Dropdown content */}
            {showFurniture && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/seating-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Seating Furniture
                </Link>
                <Link
                  to="/storage-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Storage Furniture
                </Link>
                <Link
                  to="/dining-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Dining Furniture
                </Link>
                <Link
                  to="/office-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Office Furniture
                </Link>
                <Link
                  to="/outdoor-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Outdoor Furniture
                </Link>
                <Link
                  to="/children-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Children Furniture
                </Link>
                <Link
                  to="/entertainment-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Entertainment Furniture
                </Link>
                <Link
                  to="/smart-furniture"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Smart Furniture
                </Link>
                <Link
                  to="/display-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Display Solutions
                </Link>
                <Link
                  to="/furniture-related-every-need"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Furniture Related to Every Need
                </Link>
              </div>
            )}
          </div>

          {/* Other Interior & Design Services */}
          <div
            className="relative"
            onMouseEnter={() => setShowDecor(true)}
            onMouseLeave={() => setShowDecor(false)}
          >
            <Link
              to="/decor-items"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Decoration Items
            </Link>
            {showDecor && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/lamps"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Lamps
                </Link>
                <Link
                  to="/vases"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Vases
                </Link>
                <Link
                  to="/clocks"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Clocks
                </Link>
                <Link
                  to="/wall-decor"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Wall Decor
                </Link>
                <Link
                  to="/paintings"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Paintings
                </Link>
                <Link
                  to="/plants-planters"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Plants and Planters
                </Link>
                <Link
                  to="/showpieces"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Showpieces
                </Link>
                <Link
                  to="/decorative-mirrors"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Decorative Mirrors
                </Link>
                <Link
                  to="/carpets"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Carpets
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

InteriorDesignDropdown.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default InteriorDesignDropdown;
