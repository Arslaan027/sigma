import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MarketingTechnologyDropdown = ({ activeLink }) => {
  const [digitalMarketing, setDigitalMarketing] = useState(false);
  const [ItSecurity, setItSecurity] = useState(false);

  return (
    <div>
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "MarketingTechnology"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Marketing & Technology</span>
        </button>

        <div className="absolute w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          <div
            className="relative"
            onMouseEnter={() => setDigitalMarketing(true)}
            onMouseLeave={() => setDigitalMarketing(false)}
          >
            <Link
              to="/digital-marketing"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Digital Marketing
            </Link>
            {digitalMarketing && (
              <div className="absolute right-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/website-development"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Website Development
                </Link>
                <Link
                  to="/search-engine-optimisation"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Search Engine Optimisation
                </Link>
                <Link
                  to="/pay-per-click"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Pay Per Click
                </Link>
                <Link
                  to="/social-media-marketing"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Social Media Marketing
                </Link>
                <Link
                  to="/lead-generation-services"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Lead Generation Services
                </Link>
                <Link
                  to="/content-writing"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Content Writing
                </Link>
                <Link
                  to="/marketing-automation"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Marketing Automation
                </Link>
                <Link
                  to="/application-development"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Application Development
                </Link>
                <Link
                  to="/photography-videography"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Photography & Videography
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setItSecurity(true)}
            onMouseLeave={() => setItSecurity(false)}
          >
            <Link
              to="/it-security"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              IT & Security
            </Link>
            {ItSecurity && (
              <div className="absolute right-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/pos-terminal"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  POS Terminal
                </Link>
                <Link
                  to="/receipt-printers"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Receipt Printers
                </Link>
                <Link
                  to="/label-printers"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Label Printers
                </Link>
                <Link
                  to="/barcode-scanners"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Barcode Scanners
                </Link>
                <Link
                  to="/mobile-pos-billing-machines"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Mobile POS/Billing Machines
                </Link>
                <Link
                  to="/self-service-kiosks"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Self Service Kiosks
                </Link>
                <Link
                  to="/surveillance-security"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Surveillance/Security
                </Link>
                <Link
                  to="/inventory-staff-management"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Inventory/Staff Management
                </Link>
                <div className="relative">
                  <Link
                    to="/360-degree-solutions"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    360 Degree Solutions
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

MarketingTechnologyDropdown.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default MarketingTechnologyDropdown;
