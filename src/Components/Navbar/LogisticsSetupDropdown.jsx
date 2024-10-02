import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LogisticsSetupDropdown = ({ activeLink }) => {
  const [prodSetup, setProdSetup] = useState(false);
  const [storage, setStorage] = useState(false);

  return (
    <div>
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "LogisticsSetup"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Logistics & Setup</span>
        </button>

        <div className="absolute w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          <div
            className="relative"
            onMouseEnter={() => setProdSetup(true)}
            onMouseLeave={() => setProdSetup(false)}
          >
            <Link
              to="/prod-setup"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Product Setup
            </Link>
            {prodSetup && (
              <div className="absolute right-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/bread-rusk-biscuits-cookies"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Bread, Rusk, Biscuits & Cookies
                </Link>
                <Link
                  to="/pasta-macaroni-noodle"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Pasta, Macaroni, Noodle
                </Link>
                <Link
                  to="/rice-wheat-maize-milling"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Rice, Wheat and Maize Milling
                </Link>
                <Link
                  to="/fried-snacks-line"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Fried Snacks Line
                </Link>
                <Link
                  to="/tortilla-chips-line"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Tortilla Chips Line
                </Link>
                <Link
                  to="/meat-processing"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Meat Processing
                </Link>
                <Link
                  to="/confectionary-lines"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Confectionary Lines
                </Link>
                <Link
                  to="/dairy-products"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Dairy Products
                </Link>
                <Link
                  to="/packaging-automation"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Packaging Automation
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setStorage(true)}
            onMouseLeave={() => setStorage(false)}
          >
            <Link
              to="/storage-handling"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Storage & Handling
            </Link>
            {storage && (
              <div className="absolute right-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/cold-storage"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cold Storage
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

LogisticsSetupDropdown.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default LogisticsSetupDropdown;
