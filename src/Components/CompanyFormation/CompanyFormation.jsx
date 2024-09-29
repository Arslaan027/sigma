import { useState, useEffect } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
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
import LLPbenefits from "./LLPbenefits";
import LLPsteps from "./LLPsteps";
import LLPDocuments from "./LLPDocuments";
import OPCbenefits from "./OPCbenefits";
import OPCRestrictions from "./OPCRestrictions";
import OPCdocuments from "./OPCdocuments";
import OPCchecklist from "./OPCchecklist";
import RaiseQueryForm from "../RaiseQueryForm";
import OPCsteps from "./OPCsteps";
import PFadvantages from "./PFadvantages";
// import RegistrationForm from "../TradeRegistration/RegistrationForm";
import "./CF.css";
import PFchecklist from "./PFchecklist";
import PFdocument from "./PFdocument";
import PFdisadvantages from "./PFdisadvantages";
import IStype from "./IStype";
import ISadvantage from "./ISadvantage";
import IShelp from "./IShelp";
import IStax from "./IStax";
import ISstep from "./ISstep";
import ISchecklist from "./ISchecklist";
import PCadvantages from "./PCadvantages";
import PCchecklist from "./PCchecklist";
import PCtype from "./PCtype";
import Start from "./Start";
import Startprocedure from "./Startprocedure";

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

  // const handleTabChange = (event, newValue) => {
  //   setCurrentTab(newValue);
  // };

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
        <div className="p-2 bg-white dark:bg-neutral-900 flex border-t border-gray-300 space-x-1 rounded-lg hidden md:flex max-w-full overflow-x-auto custom-scrollbar">
          {[
            "Private Limited",
            "Public Limited",
            "Limited Liability Partnership",
            "One Person Company",
            "Partnership Firm",
            "Indian Subsidiary",
            "Producer Company",
            "Startup Scheme",
          ].map((label, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(index)}
              className={`flex-1 text-center rounded-lg cursor-pointer transition-colors duration-300 py-0.5 text-[5px] ${
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
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 dark:border-gray-700">
            <div className="flex items-center">
              <BusinessIcon className="mr-2 text-gray-800 dark:text-gray-200" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Different Companies
              </h3>
            </div>
            <IconButton
              onClick={toggleDropdown}
              aria-label="more"
              className={`${dropdownOpen ? "" : "animation-shake"} text-5xl`}
            >
              {dropdownOpen ? (
                <ArrowDropUpIcon className="text-gray-800 dark:text-gray-300" />
              ) : (
                <ArrowDropDownIcon className="text-xl text-gray-800 dark:text-gray-300" />
              )}
            </IconButton>
          </div>

          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              dropdownOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-white dark:bg-neutral-900 border-t border-gray-300 dark:border-gray-700">
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
                  className="text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {label}
                </MenuItem>
              ))}
            </div>
          </div>
        </div>
      </Box>

      <div className="">
        {currentTab === 0 && (
          <div>
            <Requirement />
            <Roadmap />
            <BestBusiness />
            <RaiseQueryForm />
            <FAQs />
          </div>
        )}
        {currentTab === 1 && (
          <div>
            <PLCDocuments />
            <PLCsteps />
            <PLCbenefits />
            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
        {currentTab === 2 && (
          <div>
            <LLPDocuments />
            <LLPsteps />
            <LLPbenefits />
            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
        {currentTab === 3 && (
          <div>
            <OPCdocuments />
            <OPCbenefits />
            <OPCRestrictions />
            <OPCchecklist />
            <OPCsteps />
            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
        {currentTab === 4 && (
          <div>
            <PFdocument />
            <PFchecklist />
            <PFadvantages />
            <PFdisadvantages />
            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
        {currentTab === 5 && (
          <div>
            <ISchecklist />
            <ISadvantage />
            <IStype />
            <IShelp />
            <IStax />
            <ISstep />
            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
        {currentTab === 6 && (
          <div>
            <PCchecklist />
            <PCadvantages />
            <PCtype />
            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
        {currentTab === 7 && (
          <div>
            <Start />
            <Startprocedure />

            <RaiseQueryForm />
            <PLCFAQs />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyFormation;
