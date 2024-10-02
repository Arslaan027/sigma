import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HospitalityServicesDropdown = ({ activeLink }) => {
  const [horecaServices, setHorecaServices] = useState(false);
  const [packagingPrinting, setPackagingPrinting] = useState(false);

  return (
    <div>
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
            activeLink === "HospitalityServices"
              ? "bg-black text-white"
              : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          }`}
        >
          <span>Hospitality Services</span>
        </button>

        <div className="absolute w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
          <div
            className="relative"
            onMouseEnter={() => setHorecaServices(true)}
            onMouseLeave={() => setHorecaServices(false)}
          >
            <Link
              to="/horeca-services"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Horeca Services
            </Link>
            {horecaServices && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/cooking-catering-equipments"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cooking & Catering Equipments
                </Link>
                <Link
                  to="/food-preparation-machines"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Food Preparation Machines
                </Link>
                <Link
                  to="/refrigeration-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Refrigeration Solutions
                </Link>
                <Link
                  to="/pantry-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Pantry Solutions
                </Link>
                <Link
                  to="/bakery-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Bakery Solutions
                </Link>
                <Link
                  to="/bar-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Bar Solutions
                </Link>
                <Link
                  to="/island-range"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Island Range
                </Link>
                <Link
                  to="/display-cabinets"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Display Cabinets
                </Link>
                <Link
                  to="/dishwashing-equipments"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Dishwashing Equipments
                </Link>
                <Link
                  to="/ventilation-equipments"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Ventilation Equipments
                </Link>
                <Link
                  to="/cutlery-serving-products"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Cutlery & Serving Products
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setPackagingPrinting(true)}
            onMouseLeave={() => setPackagingPrinting(false)}
          >
            <Link
              to="/packaging-printing"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Packaging & Printing
            </Link>
            {packagingPrinting && (
              <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                <Link
                  to="/pouches-jars-metal-tin-gift-box"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Pouches, Jars, Metal Tin, Gift Box
                </Link>
                <Link
                  to="/paper-cups-containers-lids-boxes"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Paper Cups, Containers, Lids, Boxes
                </Link>
                <Link
                  to="/tin-capping-sealing-vacuum-packing-machine"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Tin Capping, Sealing, Vacuum Packing Machine
                </Link>
                <Link
                  to="/batch-coding-machine"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Batch Coding Machine
                </Link>
                <Link
                  to="/beverages-packing-lines"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Beverages Packing Lines
                </Link>
                <Link
                  to="/sticker-labeling-machines"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sticker Labeling Machines
                </Link>
                <Link
                  to="/grains-packing-filling-machines"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Grains Packing & Filling Machines
                </Link>
                <Link
                  to="/paper-cup-plates-box-making-machine"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Paper Cup, Plates, Box Making Machine
                </Link>
                <Link
                  to="/strapping-carton-sealing-machine"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Strapping and Carton Sealing Machine
                </Link>
                <Link
                  to="/stretch-wrapping-machine"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Stretch Wrapping Machine
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

HospitalityServicesDropdown.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default HospitalityServicesDropdown;
