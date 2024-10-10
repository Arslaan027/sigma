import { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import BottomBar from "./BottomBar";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
      setIsSidebarOpen(false);
    }
  };

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
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border rounded-lg border-gray-300"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm} // Bind the input value to searchTerm state
            onChange={handleSearchChange} // Handle input changes
            className="flex-grow py-2 px-4 dark:bg-neutral-800 rounded-l-md focus:ring-1 focus:ring-green-500 transition duration-200 ease-in-out h-full"
          />
          <IoSearchSharp className="text-xl mr-3 text-gray-500" />
        </form>

        {/* Sidebar Links */}
        <div className="mt-4 flex flex-col space-y-2">
          {/* Business Services */}
          <div className="relative">
            <h3 className="font-semibold text-lg mb-2 cursor-pointer flex items-center">
              {/* <FaBriefcase className="mr-2 text-gray-600 dark:text-gray-300" />{" "} */}
              {/* Icon added here */}
              Business Services
            </h3>
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(0)}
                className={`${
                  activeLink === "Biz Registrations"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md flex justify-between items-center`}
              >
                Business Formation
                <FaAngleDown />
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
                    {
                      name: "Private Limited Companies",
                      path: "/company-formation",
                    },
                    {
                      name: "Public Limited Companies",
                      path: "/company-formation",
                    },
                    {
                      name: "Limited Liability Partnership",
                      path: "/company-formation",
                    },
                    { name: "One Person Company", path: "/food-safety" },
                    {
                      name: "Partnership Firm",
                      path: "/company-formation",
                    },
                    {
                      name: "Sole Proprietorship Firm",
                      path: "/company-formation",
                    },
                    { name: "Section 8 Company", path: "/company-formation" },
                    {
                      name: "Cooperative Society",
                      path: "/company-formation",
                    },
                    {
                      name: "Foreign Company",
                      path: "/company-formation",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className={`${
                        activeLink === link.name
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 dark:hover:bg-neutral-800"
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
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(1)}
                className={`${
                  activeLink === "Accounting"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md flex justify-between items-center`}
              >
                Licensing & Certification
                <FaAngleDown />
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
                      name: "ISO Certifications",
                      path: "/iso-certification",
                    },
                    { name: "GST Registration", path: "/gst-registration" },
                    {
                      name: "FSSAI License",
                      path: "/food-safety",
                    },
                    {
                      name: "Udyam Registration (MSME)",
                      path: "/udyam-registration",
                    },
                    {
                      name: "Drug License",
                      path: "/drug-license",
                    },
                    {
                      name: "Import Export Certificate",
                      path: "/import-export-code",
                    },
                    {
                      name: "Startup India Registration",
                      path: "/Startup",
                    },
                    {
                      name: "Trading License",
                      path: "/Trading",
                    },
                    {
                      name: "Digital Signature Certificate",
                      path: "/DSC",
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

          {/* Others */}
          <div className="relative">
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(2)}
                className={`${
                  activeLink === "Accounting"
                    ? "bg-black text-white"
                    : "hover:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                } w-full text-left block px-4 py-2 rounded-md flex justify-between items-center`}
              >
                Other Services
                <FaAngleDown />
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
                    {
                      name: "NGO Registration",
                      path: "/ngo-society-registrations",
                    },
                    {
                      name: "International Business Setup",
                      path: "/International-Business-Setup",
                    },
                    {
                      name: "Intellectual Property",
                      path: "/Intellectual-Property",
                    },
                    {
                      name: "Exhibition Services",
                      path: "/Exhibition-Services",
                    },
                    {
                      name: "Business Buying, Selling & Leasing",
                      path: "/BBSL",
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
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Navbar;
