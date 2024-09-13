import { useState, useEffect } from "react";
import logo from "../../assets/Image/logorbg.png";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const MainNavbar = ({
  isFixed,
  handleSidebarToggle,
  isSidebarOpen,
  activeLink,
  handleLinkClick,
}) => {
  const [showBizRegistrations, setShowBizRegistrations] = useState(false);
  const [showInteriorDesign, setShowInteriorDesign] = useState(false);
  const [showFurniture, setShowFurniture] = useState(false);
  const [showAccounting, setShowAccounting] = useState(false);
  const [showDecor, setShowDecor] = useState(false);
  const [horecaServices, setHorecaServices] = useState(false);
  const [packagingPrinting, setPackagingPrinting] = useState(false);
  const [digitalMarketing, setDigitalMarketing] = useState(false);
  const [ItSecurity, setItSecurity] = useState(false);
  // const [degreeSolution, setDegreeSolution] = useState(false);
  const [prodSetup, setProdSetup] = useState(false);
  const [storage, setStorage] = useState(false);

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
          ? `fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-md dark:shadow-gray-900 z-50 transition-transform duration-300 ${
              scrollDirection === "up" ? "-translate-y-full" : "translate-y-0"
            }`
          : "relative"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4">
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
            color="#000"
          />
        </div>

        {/* Right Side */}
        <div className="space-x-0 text-sm hidden lg:flex items-center z-30">
          {/* Home Link */}
          <Link
            to="/"
            onClick={() => handleLinkClick("Home")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeLink === "Home"
                ? "bg-gray-200 text-black"
                : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            }`}
          >
            <IoHomeOutline className="text-xl" />
            <span>Home</span>
          </Link>

          {/* Business Services Dropdown */}
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
                      NGO/Society Registrations
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

          {/* Interior & Design Dropdown */}
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

            <div className="absolute mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300">
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

          {/* Hospitality Services Dropdown */}
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

          {/* Marketing & Technology Dropdown */}
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
                    <div
                      className="relative"
                      // onMouseEnter={() => setDegreeSolution(true)}
                      // onMouseLeave={() => setDegreeSolution(false)}
                    >
                      <Link
                        to="/360-degree-solutions"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        360 Degree Solutions
                      </Link>
                      {/* {degreeSolution && (
                        <div className="absolute left-full top-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg transition-opacity duration-300">
                          <Link
                            to="/billing"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Billing
                          </Link>
                          <Link
                            to="/reporting"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Reporting
                          </Link>
                          <Link
                            to="/order-management"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Order Management
                          </Link>
                          <Link
                            to="/restaurants"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Restaurants
                          </Link>
                          <Link
                            to="/retail-outlets"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Retail Outlets
                          </Link>
                          <Link
                            to="/supermarkets"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Supermarkets
                          </Link>
                          <Link
                            to="/bakery"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Bakery
                          </Link>
                          <Link
                            to="/bars"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Bars
                          </Link>
                        </div>
                      )} */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Logistics & Setup Dropdown */}
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
          <div className="relative group">
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeLink === "LogisticsSetup"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              }`}
            >
              <span>Architecture</span>
            </button>
          </div>
          <div className="relative group">
            <Link
              to="/about"
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeLink === "LogisticsSetup"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              }`}
            >
              <span>About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

MainNavbar.propTypes = {
  isFixed: PropTypes.bool.isRequired,
  handleSidebarToggle: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  activeLink: PropTypes.string.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  handleDropdownToggle: PropTypes.func.isRequired, // Add this if used
  dropdownOpen: PropTypes.number, // Adjust based on your logic
};

export default MainNavbar;
