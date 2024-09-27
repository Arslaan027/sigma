import { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import BottomBar from "./BottomBar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
      setIsFixed(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isSidebarOpen) setIsSidebarOpen(false);
    setDropdownOpen(null);
  };

  const handleSidebarToggle = () => setIsSidebarOpen((prev) => !prev);

  const handleDropdownToggle = (index) =>
    setDropdownOpen(dropdownOpen === index ? null : index);

  return (
    <div>
      <MainNavbar
        isFixed={isFixed}
        handleSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        handleDropdownToggle={handleDropdownToggle}
        dropdownOpen={dropdownOpen}
      />

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={handleSidebarToggle}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-white text-black dark:bg-neutral-900 dark:text-gray-100 p-6 transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden shadow-md dark:shadow-gray-900 overflow-y-auto`}
      >
        {/* Search Bar */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-neutral-800 text-black dark:text-gray-200 focus:outline-none"
          />
          <button className="absolute h-10 right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
            <IoSearchSharp className="text-xl" />
          </button>
        </div>
        {/* Sidebar Links */}
        <div className="mt-4 flex flex-col space-y-2">
          {/* Business Services */}
          <div className="relative">
            <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              // onClick={() => handleDropdownToggle(0)}
            >
              Business Services
            </h3>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(0)}
                className={`${
                  activeLink === "Biz Registrations"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Biz Registrations
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 0
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    { name: "Trade Registration", path: "/trade-registration" },
                    { name: "Company Formation", path: "/company-formation" },
                    { name: "GST Registration", path: "/gst-registration" },
                    { name: "Food Safety (FSSAI)", path: "/food-safety" },
                    {
                      name: "Import Export Code (IEC)",
                      path: "/import-export-code",
                    },
                    { name: "ISO Certification", path: "/iso-certification" },
                    { name: "Trademark", path: "/trademark" },
                    {
                      name: "NGO/Society Registrations",
                      path: "/ngo-society-registrations",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100  dark:hover:bg-neutral-800"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Accounting */}
          <div className="relative">
            {/* <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              onClick={() => handleDropdownToggle(1)}
            >
              Accounting
            </h3> */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(1)}
                className={`${
                  activeLink === "Accounting"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Accounting
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 1
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    {
                      name: "GST Return Services",
                      path: "/gst-return-services",
                    },
                    { name: "DSC, PAN, EPF", path: "/dsc-pan-epf" },
                    {
                      name: "Income Tax Services",
                      path: "/income-tax-services",
                    },
                    {
                      name: "Book Keeping Services",
                      path: "/book-keeping-services",
                    },
                    {
                      name: "Notice & Scrutiny",
                      path: "/notice-scrutiny",
                    },
                    { name: "Agreements", path: "/agreements" },
                    { name: "Loan Consultancy", path: "/loan-consultancy" },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            // onClick={() => handleDropdownToggle(1)}
            className={`${
              activeLink === "Biz=Deals"
                ? "bg-black text-white"
                : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
            } w-full text-left block px-4 py-2 rounded-md`}
          >
            Biz Deals
          </button>
          <button
            // onClick={() => handleDropdownToggle(1)}
            className={`${
              activeLink === "Architecture"
                ? "bg-black text-white"
                : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
            } w-full text-left block px-4 py-2 rounded-md`}
          >
            Architecture
          </button>
          {/* Interior & Design */}
          <div className="relative">
            <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              // onClick={() => handleDropdownToggle(2)}
            >
              Interior & Design
            </h3>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(2)}
                className={`${
                  activeLink === "Interior Design"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Interior Design
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 2
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    { name: "2D-3D Design Layout", path: "/design-layout" },
                    { name: "Glass and Aluminium", path: "/glass-aluminium" },
                    { name: "Lighting Solutions", path: "/lighting-solution" },
                    { name: "False Ceiling", path: "/false-ceiling" },
                    {
                      name: "Wallpaper, Wall Art & Panels",
                      path: "/wallpaper",
                    },
                    { name: "Painting Solutions", path: "/painting-solution" },
                    { name: "Flooring Solutions", path: "/flooring-solution" },
                    {
                      name: "Renovation Work",
                      path: "/renovation-work",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(3)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Furniture
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 3
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    { name: "Seating Furniture", path: "/seating-furniture" },
                    { name: "Storage Furniture", path: "/storage-furniture" },
                    { name: "Dining Furniture", path: "/dining-furniture" },
                    { name: "Office Furniture", path: "/office-furniture" },
                    { name: "Outdoor Furniture", path: "/outdoor-furniture" },
                    { name: "Children Furniture", path: "/children-furniture" },
                    {
                      name: "Entertainment Furniture",
                      path: "/entertainment-furniture",
                    },
                    { name: "Smart Furniture", path: "/smart-furniture" },
                    { name: "Display Solutions", path: "/display-solutions" },
                    {
                      name: "Furniture Related to Every Need",
                      path: "/furniture-related-every-need",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(4)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Decoration Items
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 4
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    { name: "Lamps", path: "/lamps" },
                    { name: "Vases", path: "/vases" },
                    { name: "Clocks", path: "/clocks" },
                    { name: "Wall Decor", path: "/wall-decor" },
                    { name: "Paintings", path: "/paintings" },
                    { name: "Plants and Planters", path: "/plants-planters" },
                    { name: "Showpieces", path: "/showpieces" },
                    { name: "Decorative Mirrors", path: "/decorative-mirrors" },
                    { name: "Carpets", path: "/carpets" },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality Services */}
          <div className="relative">
            <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              // onClick={() => handleDropdownToggle(5)}
            >
              Hospitality Services
            </h3>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(5)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Horeca Services
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 5
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    {
                      name: "Cooking & Catering Equipments",
                      path: "/cooking-catering-equipments",
                    },
                    {
                      name: "Food Preparation Machines",
                      path: "/food-preparation-machines",
                    },
                    {
                      name: "Refrigeration Solutions",
                      path: "/refrigeration-solutions",
                    },
                    { name: "Pantry Solutions", path: "/pantry-solutions" },
                    { name: "Bakery Solutions", path: "/bakery-solutions" },
                    { name: "Bar Solutions", path: "/bar-solutions" },
                    { name: "Island Range", path: "/island-range" },
                    { name: "Display Cabinets", path: "/display-cabinets" },
                    {
                      name: "Dishwashing Equipments",
                      path: "/dishwashing-equipments",
                    },
                    {
                      name: "Ventilation Equipments",
                      path: "/ventilation-equipments",
                    },
                    {
                      name: "Cutlery & Serving Products",
                      path: "/cutlery-serving-products",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(6)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Packaging & Printing
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 6
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-white dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    {
                      name: "Pouches & Jars",
                      path: "/pouches-jars-metal-tin-gift-box",
                    },
                    {
                      name: "Paper Cups & Containers",
                      path: "/paper-cups-containers-lids-boxes",
                    },
                    {
                      name: "Tin Capping & Vacuum Packing",
                      path: "/tin-capping-sealing-vacuum-packing-machine",
                    },
                    { name: "Batch Coding", path: "/batch-coding-machine" },
                    {
                      name: "Beverages Packing",
                      path: "/beverages-packing-lines",
                    },
                    {
                      name: "Sticker Labeling",
                      path: "/sticker-labeling-machines",
                    },
                    {
                      name: "Grains Packing & Filling",
                      path: "/grains-packing-filling-machines",
                    },
                    {
                      name: "Paper Cup & Box Making",
                      path: "/paper-cup-plates-box-making-machine",
                    },
                    {
                      name: "Strapping & Carton Sealing",
                      path: "/strapping-carton-sealing-machine",
                    },
                    {
                      name: "Stretch Wrapping",
                      path: "/stretch-wrapping-machine",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Marketing & Technology */}
          <div className="relative">
            <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              // onClick={() => handleDropdownToggle(4)}
            >
              Marketing & Technology
            </h3>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(7)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Digital Marketing
              </button>
              <div
                className={`transition-all mt-1 duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 7
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-gray-100 dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    { name: "Web Development", path: "/website-development" },
                    { name: "SEO", path: "/search-engine-optimisation" },
                    { name: "PPC", path: "/pay-per-click" },
                    { name: "Social Media", path: "/social-media-marketing" },
                    {
                      name: "Lead Generation",
                      path: "/lead-generation-services",
                    },
                    { name: "Content Writing", path: "/content-writing" },
                    {
                      name: "Marketing Automation",
                      path: "/marketing-automation",
                    },
                    {
                      name: "App Development",
                      path: "/application-development",
                    },
                    {
                      name: "Photography & Video",
                      path: "/photography-videography",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(8)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                IT & Security
              </button>
              <div
                className={`transition-all mt-1 duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 8
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-gray-100 dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    { name: "POS Terminal", path: "/pos-terminal" },
                    { name: "Receipt Printers", path: "/receipt-printers" },
                    { name: "Label Printers", path: "/label-printers" },
                    { name: "Barcode Scanners", path: "/barcode-scanners" },
                    {
                      name: "Mobile POS",
                      path: "/mobile-pos-billing-machines",
                    },
                    {
                      name: "Self Service Kiosks",
                      path: "/self-service-kiosks",
                    },
                    { name: "Surveillance", path: "/surveillance-security" },
                    {
                      name: "Inventory Management",
                      path: "/inventory-staff-management",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Logistics & Setup */}
          <div className="relative">
            <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              // onClick={() => handleDropdownToggle(5)}
            >
              Logistics & Setup
            </h3>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(9)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Product Setup
              </button>
              <div
                className={`transition-all mt-1 duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 9
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-gray-100 dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    {
                      name: "Bread, Rusk, Biscuits",
                      path: "/bread-rusk-biscuits-cookies",
                    },
                    {
                      name: "Pasta, Macaroni, Noodle",
                      path: "/pasta-macaroni-noodle",
                    },
                    {
                      name: "Rice, Wheat, Maize Milling",
                      path: "/rice-wheat-maize-milling",
                    },
                    { name: "Fried Snacks Line", path: "/fried-snacks-line" },
                    {
                      name: "Tortilla Chips Line",
                      path: "/tortilla-chips-line",
                    },
                    { name: "Meat Processing", path: "/meat-processing" },
                    {
                      name: "Confectionary Lines",
                      path: "/confectionary-lines",
                    },
                    { name: "Dairy Products", path: "/dairy-products" },
                    {
                      name: "Packaging Automation",
                      path: "/packaging-automation",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(10)}
                className={`${
                  activeLink === "Furniture"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md`}
              >
                Storage & Handling
              </button>
              <div
                className={`transition-all mt-1 duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen === 10
                    ? "max-h-[500px] opacity-100 transform scale-y-100"
                    : "max-h-0 opacity-0 transform scale-y-75"
                } bg-gray-100 dark:bg-neutral-800 rounded-md shadow-lg`}
              >
                <div className="flex flex-col">
                  {[
                    {
                      name: "Cold Storage",
                      path: "/cold-storage",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      } block px-4 py-2 rounded-md`}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative">
            <h3
              className="font-semibold text-lg mb-2 cursor-pointer"
              // onClick={() => handleDropdownToggle(5)}
            >
              Sigma Solution
            </h3>
            <Link
              to="/about"
              className={`${
                activeLink === "Furniture"
                  ? "bg-black text-white"
                  : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
              } w-full text-left block px-4 py-2 rounded-md`}
            >
              About Us
            </Link> */}
          {/* </div> */}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Navbar;
