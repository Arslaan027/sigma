import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BusinessServicesDropdown = ({ activeLink }) => {
  const [showBizRegistrations, setShowBizRegistrations] = useState(false);
  const [showAccounting, setShowAccounting] = useState(false);

  return (
    <div>
      <div className="relative group">
        <button
          onMouseEnter={() => setShowBizRegistrations(false)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "BusinessServices"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Business Services</span>
        </button>

        {/* Business Services Dropdown content */}
        <div className="absolute w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          {/* Biz Registrations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowBizRegistrations(true)}
            onMouseLeave={() => setShowBizRegistrations(false)}
          >
            <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700">
              Biz Registrations
            </button>

            {/* Biz Registrations Dropdown content */}
            {showBizRegistrations && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/trade-registration"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Trade Registration
                </Link>
                <Link
                  to="/company-formation"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Company Formation
                </Link>
                <Link
                  to="/gst-registration"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  GST Registration
                </Link>
                <Link
                  to="/food-safety"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Food Safety (FSSAI)
                </Link>
                <Link
                  to="/import-export-code"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Import Export Code (IEC)
                </Link>
                <Link
                  to="/iso-certification"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  ISO Certification
                </Link>
                <Link
                  to="/trademark"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Trademark
                </Link>
                <Link
                  to="/ngo-society-registrations"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  NGO Registration
                </Link>
                <Link
                  to="/compliances"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Compliances
                </Link>
              </div>
            )}
          </div>

          {/* Other Business Services */}
          <div
            className="relative"
            onMouseEnter={() => setShowAccounting(true)}
            onMouseLeave={() => setShowAccounting(false)}
          >
            <Link
              to="/accounting"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Accounting
            </Link>

            {/* Accounting Dropdown content */}
            {showAccounting && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/gst-returns"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  GST Returns Services
                </Link>
                <Link
                  to="/dsc-pan-epf"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  DSC, PAN, EPF
                </Link>
                <Link
                  to="/income-tax"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Income Tax Related Services
                </Link>
                <Link
                  to="/book-keeping"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Book Keeping Services
                </Link>
                <Link
                  to="/notice-scrutiny"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Notice & Scrutiny
                </Link>
                <Link
                  to="/agreements"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Agreements
                </Link>
                <Link
                  to="/loan-consultancy"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Loan Consultancy
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/biz-deals"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Biz Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

BusinessServicesDropdown.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default BusinessServicesDropdown;
