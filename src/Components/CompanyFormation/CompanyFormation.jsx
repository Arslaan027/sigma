import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
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
import "./CF.css";
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
import SPdisadvantages from "./Soleproprietorship/SPdisadvantages";
import CSwhat from "./CooperativeSociety/CSwhat";
import PriLCwhat from "./PriLC/priLCwhat";
import LLPwhat from "./LLP/LLPwhat";
import OPCwhat from "./OPCwhat";
import PFwhat from "./PFwhat";
import Sec8what from "./Sec8/Sec8what";
import FCwhat from "../ForeignCompany/FCwhat";
import SPwhat from "./Soleproprietorship/SPwhat";
import PLCwhat from "./PubLC/PLCwhat";

//===> Can be Re-used
// import PLCFAQs from "./PLCFAQs";
// import RaiseQueryForm from "../RaiseQueryForm";
// import IStype from "./IStype";
// import ISadvantage from "./ISadvantage";
// import IShelp from "./IShelp";
// import IStax from "./IStax";
// import ISstep from "./ISstep";
// import ISchecklist from "./ISchecklist";
// import PCadvantages from "./PCadvantages";
// import PCchecklist from "./PCchecklist";
// import PCtype from "./PCtype";
// import Start from "./Start";
// import Startprocedure from "./Startprocedure";
// import BestBusiness from "../Home/BestBusiness";
// import RegistrationForm from "../TradeRegistration/RegistrationForm";
// import Roadmap from "./Roadmap";
// import FAQs from "./FAQs";
// import PLCsteps from "./PLCsteps";
// import LLPsteps from "./LLPsteps";
// import OPCchecklist from "./OPCchecklist";
// import OPCsteps from "./OPCsteps";
// import PFchecklist from "./PFchecklist";

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
            "Section 8 Company",
            "Cooperative Society",
            "Foreign Company",
            "Sole Proprietorship",
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
        {currentTab === 0 && ( //===>(✔)
          <div>
            <PriLCwhat />
            <Requirement />
            <PriLCadvantages />
            <PriLCDisadvantage />
            {/* <Roadmap /> */}
            {/* <RaiseQueryForm /> */}
            {/* <FAQs /> */}
          </div>
        )}
        {currentTab === 1 && ( //===>(✔)
          <div>
            <PLCwhat />
            <PLCDocuments />
            {/* <PLCsteps /> */}
            <PLCbenefits />
            <PLCDisadvantages />
            {/* <RaiseQueryForm /> */}
            {/* <PLCFAQs /> */}
          </div>
        )}
        {currentTab === 2 && ( //===>(✔)
          <div>
            <LLPwhat />
            <LLPDocuments />
            {/* <LLPsteps /> */}
            <LLPbenefits />
            <LLPDisadvantage />
            {/* <RaiseQueryForm /> */}
            {/* <PLCFAQs /> */}
          </div>
        )}
        {currentTab === 3 && ( //===>(✔)
          <div>
            <OPCwhat />
            <OPCdocuments />
            <OPCbenefits />
            <OPCRestrictions />
            {/* <OPCchecklist /> */}
            {/* <OPCsteps /> */}
            {/* <RaiseQueryForm /> */}
            {/* <PLCFAQs /> */}
          </div>
        )}
        {currentTab === 4 && ( //===>(✔)
          <div>
            <PFwhat />
            <PFdocument />
            {/* <PFchecklist /> */}
            <PFadvantages />
            <PFdisadvantages />
            {/* <RaiseQueryForm /> */}
            {/* <PLCFAQs /> */}
          </div>
        )}
        {currentTab === 5 && ( //===>(✔)
          <div>
            <Sec8what />
            <Sec8documents />
            <Sec8Advantages />
            <Sec8Disadvantages />
          </div>
        )}
        {currentTab === 6 && ( //===>(✔)
          <div>
            <CSwhat />
            <CSdocument />
            <CSadvantages />
            <CSdisadvantages />
          </div>
        )}
        {currentTab === 7 && ( //===>(✔)
          <div>
            <FCwhat />
            <FCdocuments />
            <FSadvantages />
            <FSdisadvantages />
          </div>
        )}
        {currentTab === 8 && ( //===>(✔)
          <div>
            <SPwhat />
            <SPdocument />
            <SPadvantage />
            <SPdisadvantages />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyFormation;

//===> Can be Re-used
{
  /* {currentTab === 5 && (
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
)} */
}
