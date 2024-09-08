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
        <div className="hidden md:block">
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="Company Formation Options"
            className="bg-gray-100 shadow-md rounded-lg flex flex-wrap"
          >
            <Tab
              label="Private Ltd"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 0 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Public Ltd"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 1 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="LLP"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 2 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="One Person Co"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 3 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Partnership"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 4 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Sole Proprietor"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 5 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Indian Subsidiary"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 6 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Nidhi Co"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 7 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Producer Co"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 8 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
            <Tab
              label="Startup India"
              className={`flex-1 py-3 px-4 text-sm text-gray-600 hover:text-red-500 ${
                currentTab === 9 ? "text-red-500 border-b-2 border-red-500" : ""
              }`}
            />
          </Tabs>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden flex flex-col w-full">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <div className="flex items-center ml-2">
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
              <MenuItem onClick={() => handleMenuItemClick(0)}>
                Private Limited Company
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(1)}>
                Public Limited Company
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(2)}>
                Limited Liability Partnership (LLP)
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(3)}>
                One Person Company (OPC)
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(4)}>
                Partnership Firm
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(5)}>
                Sole Proprietorship
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(6)}>
                Indian Subsidiary Company
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(7)}>
                Nidhi Company
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(8)}>
                Producer Company
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(9)}>
                Startup India Scheme
              </MenuItem>
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
        {currentTab === 2 && <div>{/* Add content here */}</div>}
      </div>
    </div>
  );
};

export default CompanyFormation;
