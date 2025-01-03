import React, { useEffect, useState } from "react";
import { IoHomeOutline, IoSunnySharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CiCalculator1 } from "react-icons/ci";
import { PiMoonStarsFill } from "react-icons/pi";

const BottomNavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Fetch saved dark mode setting from localStorage and apply it on load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="fixed bottom-5 w-[90vw] rounded-full mx-auto left-0 right-0 bg-gray-100 text-black dark:bg-dark-bg dark:text-gray-100 py-2 flex justify-around items-center lg:hidden h-20 z-40 shadow-2xl dark:shadow-gray-900">
      {/* Profile Link */}
      <Link
        to="/profile"
        className={`${
          activeLink === "Profile"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Profile")}
      >
        <CgProfile className="text-md" />
        <span className="text-xs">Profile</span>
      </Link>

      {/* Dark/Light Mode Toggle */}
      <button
        className={`${
          isDarkMode
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={handleToggleDarkMode}
      >
        {isDarkMode ? (
          <IoSunnySharp className="text-md" />
        ) : (
          <PiMoonStarsFill className="text-md" />
        )}
        <span className="text-xs">{isDarkMode ? "Light" : "Dark"}</span>
      </button>

      {/* Home Link */}
      <Link
        to="/"
        className={`${
          activeLink === "Home"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Home")}
      >
        <IoHomeOutline className="text-md" />
        <span className="text-xs">Home</span>
      </Link>

      {/* Support Link */}
      <Link
        to="/support"
        className={`${
          activeLink === "Support"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Support")}
      >
        <BsWhatsapp className="text-md" />
        <span className="text-xs">Help</span>
      </Link>

      {/* Calculator Link */}
      <Link
        to="/cost-calculator"
        className={`${
          activeLink === "Calculator"
            ? "bg-gray-300 text-black dark:bg-gray-500 dark:text-gray-100 rounded-full scale-105 shadow-lg"
            : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
        } flex flex-col items-center p-4 transition-all duration-300 ease-in-out transform rounded-full`}
        onClick={() => handleLinkClick("Calculator")}
      >
        <CiCalculator1 className="text-md" />
        <span className="text-xs">Calculator</span>
      </Link>
    </div>
  );
};

export default BottomNavBar;
