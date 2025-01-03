import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; // Importing React Icons
import MenuItem from "@mui/material/MenuItem";
import BusinessIcon from "@mui/icons-material/Business";
import "../../index.css";
import Requirement from "./PriLC/Requirement";
import PLCDocuments from "./PubLC/PLCDocuments";
import PLCbenefits from "./PubLC/PLCbenefits";
import LLPbenefits from "./LLP/LLPbenefits";
import LLPDocuments from "./LLP/LLPDocuments";
import OPCbenefits from "./OPCbenefits";
import OPCRestrictions from "./OPCRestrictions";
import OPCdocuments from "./OPCdocuments";
import PFdocument from "./PFdocument";
import PFadvantages from "./PFadvantages";
import PFdisadvantages from "./PFdisadvantages";
import LLPDisadvantage from "./LLP/LLPDisadvantage";
import PriLCadvantages from "./PriLC/PriLCadvantages";
import PriLCDisadvantage from "./PriLC/PriLCDisadvantage";
import PLCDisadvantages from "./PubLC/PLCDisadvantages";
import Sec8documents from "./Sec8/Sec8document";
import Sec8Advantages from "./Sec8/Sec8benefits";
import Sec8Disadvantages from "./Sec8/Sec8Disadvantages";
import CSdocument from "./CooperativeSociety/CSdocument";
import CSadvantages from "./CooperativeSociety/CSadvantages";
import CSdisadvantages from "./CooperativeSociety/CSdisadvantages";
import FCdocuments from "../ForeignCompany/FCdocument";
import FSadvantages from "../ForeignCompany/FSadvantages";
import FSdisadvantages from "../ForeignCompany/FSdisadvantages";
import SPdocument from "./Soleproprietorship/SPdocument";
import SPadvantage from "./Soleproprietorship/SPadvantage";
import CSwhat from "./CooperativeSociety/CSwhat";
import PriLCwhat from "./PriLC/PriLCwhat";
import LLPwhat from "./LLP/LLPwhat";
import OPCwhat from "./OPCwhat";
import PFwhat from "./PFwhat";
import Sec8what from "./Sec8/Sec8what";
import FCwhat from "../ForeignCompany/FCwhat";
import SPwhat from "./Soleproprietorship/SPwhat";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BusinessFormation from "./BusinessFormation";

const CompanyFormation = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Initially sidebar is open

  // GSAP Animation for Sidebar
  useGSAP(() => {
    gsap.set("#sidebar", { x: -250 }); // Initial position off-screen
    gsap.to("#sidebar", { x: 0, duration: 0.5 }); // Slide in
  }, [sidebarOpen]); // Dependency on sidebarOpen

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount to set initial styles

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleMenuItemClick = (index) => {
    setCurrentTab(index);
    setDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      toggleSidebar();
    }
  };

  return (
    <div className="flex" onKeyPress={handleKeyPress} tabIndex={0}>
      {/* Sidebar for Navigation */}
      <div
        id="sidebar"
        className={`hidden md:block w-auto h-auto bg-transparent hover:dark:bg-neutral-800 dark:text-gray-200 shadow-lg fixed top-20 rounded-se-3xl rounded-ee-3xl left-0 z-10 flex flex-col justify-center transition-transform duration-300 rounded-sm border border-gray-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`} // Apply translate based on sidebarOpen state
        aria-expanded={sidebarOpen} // Add aria-expanded
      >
        <div className="p-2 text-black flex flex-col justify-between gap-5 h-full">
          <h2 className="text-lg font-semibold text-center text-gray-700  dark:text-gray-200">
            Company Types
          </h2>
          <ul className="flex flex-col text-left w-auto  dark:text-gray-200">
            {[
              "Private Limited Company",
              "Public Limited Company",
              "Limited Liability Partnership",
              "One Person Company",
              "Partnership Firm Company",
              "Sec8 Company",
              "Cooperative Society Company",
              "Foreign Company",
              "Sole Proprietorship Company",
            ].map((label, index) => (
              <li
                key={index}
                onClick={() => handleMenuItemClick(index)}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleMenuItemClick(index)
                } // Handle Enter key
                role="button"
                tabIndex={0} // Make the item focusable
                aria-pressed={currentTab === index}
                className={`cursor-pointer p-2 text-sm rounded-md w-full flex items-center transition-colors duration-200 ease-in-out ${
                  currentTab === index
                    ? "bg-green-300 dark:bg-neutral-700 text-white"
                    : "hover:bg-green-200 dark:hover:bg-neutral-900"
                }`}
              >
                <span className="mr-2"></span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full ml-auto">
        {/* Mobile Dropdown */}
        <Box
          sx={{ width: "100%", transition: "top 1s" }}
          style={isSticky ? { position: "fixed", top: 0, zIndex: 30 } : {}}
        >
          <div className="md:hidden flex flex-col w-full">
            <div className="flex bg-white justify-between items-center px-4 py-2 border-b border-gray-300">
              <div className="flex items-center">
                <BusinessIcon className="mr-2 text-gray-800" />
                <h3 className="text-md  font-serif text-gray-800">
                  See More Company Options
                </h3>
              </div>
              <IconButton
                onClick={toggleDropdown}
                aria-label="toggle dropdown"
                className={`${dropdownOpen ? "" : ""} text-5xl`}
              >
                {dropdownOpen ? (
                  <FaAngleUp className="text-gray-800" />
                ) : (
                  <FaAngleDown className="text-xl text-gray-800" />
                )}
              </IconButton>
            </div>

            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                dropdownOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-2 bg-white border-t border-gray-300">
                {[
                  "Private Limited",
                  "Public Limited",
                  "Limited Liability Partnership",
                  "One Person Company",
                  "Partnership Firm",
                  "Section 8 Company",
                  "Cooperative Society",
                  "Foreign Company",
                  "Sole Proprietorship",
                ].map((label, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleMenuItemClick(index)}
                    className="text-gray-800 hover:bg-gray-200"
                  >
                    {label}
                  </MenuItem>
                ))}
              </div>
            </div>
          </div>
        </Box>

        {/* Main Content */}
        <div>
          {currentTab === 0 && (
            <div>
              <BusinessFormation />
              <PriLCwhat />
              <Requirement />
              <PriLCadvantages />
              <PriLCDisadvantage />
            </div>
          )}
          {currentTab === 1 && (
            <div>
              <PLCDocuments />
              <PLCbenefits />
              <PLCDisadvantages />
            </div>
          )}
          {currentTab === 2 && (
            <div>
              <LLPwhat />
              <LLPDocuments />
              <LLPbenefits />
              <LLPDisadvantage />
            </div>
          )}
          {currentTab === 3 && (
            <div>
              <OPCwhat />
              <OPCdocuments />
              <OPCbenefits />
              <OPCRestrictions />
            </div>
          )}
          {currentTab === 4 && (
            <div>
              <PFwhat />
              <PFdocument />
              <PFadvantages />
              <PFdisadvantages />
            </div>
          )}
          {currentTab === 5 && (
            <div>
              <Sec8what />
              <Sec8documents />
              <Sec8Advantages />
              <Sec8Disadvantages />
            </div>
          )}
          {currentTab === 6 && (
            <div>
              <CSwhat />
              <CSdocument />
              <CSadvantages />
              <CSdisadvantages />
            </div>
          )}
          {currentTab === 7 && (
            <div>
              <FCwhat />
              <FCdocuments />
              <FSadvantages />
              <FSdisadvantages />
            </div>
          )}
          {currentTab === 8 && (
            <div>
              <SPwhat />
              <SPdocument />
              <SPadvantage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyFormation;
