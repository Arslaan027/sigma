import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuItem from "@mui/material/MenuItem";
import BusinessIcon from "@mui/icons-material/Business";
import "../../index.css"; // Import your global CSS file
import Requirement from "./Requirement";
import Roadmap from "./Roadmap";
import FAQs from "./FAQs";
import BestBusiness from "../Home/BestBusiness";
import PLCFAQs from "./PLCFAQs";
import PLCsteps from "./PLCsteps";
import PLCDocuments from "./PLCDocuments";
import PLCbenefits from "./PLCbenefits";

const CompanyFormation = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyles, setDropdownStyles] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setDropdownStyles({
        position: scrollY > 50 ? "fixed" : "relative",
        top: "20px", // Adjust based on your header's height
        zIndex: 1000,
        width: "100%",
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount to set initial styles

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownOpen]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = (index) => {
    setCurrentTab(index);
    setDropdownOpen(false);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        {/* Desktop Tabs */}
        <div className="p-4 bg-white dark:bg-neutral-900 flex border-t border-gray-300 space-x-2 rounded-lg hidden md:flex">
          {[
            "Private Limited Company",
            "Public Limited Company",
            "Limited Liability Partnership",
            "One Person Company",
            "Partnership Firm",
            "Indian Subsidiary Company",
            "Producer Company",
            "Startup Scheme",
          ].map((label, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(index)}
              className={`flex-1 text-center rounded-lg cursor-pointer transition-colors duration-300 py-1 text-xs ${
                currentTab === index
                  ? "bg-green-500 text-white dark:bg-green-600 rounded-lg"
                  : "text-gray-800 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              {label}
            </MenuItem>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden flex flex-col w-full">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <div className="flex items-center">
              <BusinessIcon className="mr-2 text-gray-800" />
              <h3 className="text-lg font-semibold text-gray-800">
                Different Companies
              </h3>
            </div>
            <IconButton
              onClick={toggleDropdown}
              aria-label="more"
              className={`${dropdownOpen ? "" : "animation-shake"} text-5xl`}
            >
              {dropdownOpen ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon className="text-xl" />
              )}
            </IconButton>
          </div>

          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              dropdownOpen ? "max-h-screen" : "max-h-0"
            }`}
            style={dropdownStyles}
          >
            <div className="p-4 bg-white border-t border-gray-300">
              {[
                "Private Limited Company",
                "Public Limited Company",
                "Limited Liability Partnership (LLP)",
                "One Person Company (OPC)",
                "Partnership Firm",
                "Sole Proprietorship",
                "Indian Subsidiary Company",
                "Nidhi Company",
                "Producer Company",
                "Startup India Scheme",
              ].map((label, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleMenuItemClick(index)}
                >
                  {label}
                </MenuItem>
              ))}
            </div>
          </div>
        </div>
      </Box>

      <div className="py-8">
        {currentTab === 0 && (
          <div>
            <Requirement />
            <Roadmap />
            <BestBusiness />
            <FAQs />
          </div>
        )}
        {currentTab === 1 && (
          <div>
            <PLCDocuments />
            <PLCsteps />
            <PLCbenefits />
            <PLCFAQs />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyFormation;
