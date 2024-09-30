import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import PLC from "../../../assets/Image/PLCdis2.jpg"; // Ensure the path to the image is correct

const PLCDisadvantages = () => {
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
          Disadvantages of a{" "}
          <span className="text-green-500">Private Limited Company</span>
        </motion.h2>

        {/* Flex Container for Image and List */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Disadvantages List */}
          <motion.ul
            className="md:w-1/2 w-full text-lg text-gray-600 dark:text-neutral-400 list-disc ml-6 mb-4 md:mb-0"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <li>More stringent regulatory requirements.</li>
            <li>High costs of compliance.</li>
            <li>Vulnerability to market fluctuations.</li>
            <li>Risk of losing control to shareholders.</li>
          </motion.ul>

          {/* Image */}
          <motion.div
            className="flex-shrink-0 md:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src={PLC}
              alt="Private Limited Company Disadvantages"
              className="w-2/3 h-auto rounded-lg" // Image styling
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PLCDisadvantages;
