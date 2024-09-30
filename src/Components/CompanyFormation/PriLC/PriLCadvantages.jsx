import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PLC from "../../../assets/Image/PLCadd.jpg"; // Ensure the path to the image is correct

const PriLCadvantages = () => {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-800">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Advantages of a{" "}
          <span className="text-green-500">Private Limited Company</span>
        </motion.h2>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Column: Advantages */}
          <motion.ul
            className="md:w-1/2 w-full text-lg text-gray-600 dark:text-neutral-400 mb-4 md:mb-0 list-disc ml-4"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <li>
              Limited liability for shareholders: Shareholders' personal assets
              are protected from business liabilities.
            </li>
            <li>
              Perpetual succession: The company continues even if shareholders
              change or leave.
            </li>
            <li>
              Easier access to capital: Can raise funds through equity, making
              it easier to expand.
            </li>
            <li>
              Credibility and brand image: Being a registered entity increases
              trust and credibility in the market.
            </li>
          </motion.ul>

          {/* Image */}
          <motion.div
            className="flex-shrink-0 md:w-1/3 w-auto h-auto mx-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src={PLC}
              alt="Private Limited Company Advantages"
              className="md:w-3/3 w-auto h-auto rounded-lg flex justify-center mx-auto  items-center " // Image resized smaller
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PriLCadvantages;
