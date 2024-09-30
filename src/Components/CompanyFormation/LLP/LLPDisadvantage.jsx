import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import LLP from "../../../assets/Image/LLPdis.png"; // Ensure the path is correct

const LLPDisadvantage = () => {
  return (
    <div className="flex justify-center bg-white items-center dark:bg-neutral-800">
      <div className="max-w-5xl dark:bg-neutral-900 p-8 rounded-lg  mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Disadvantages of an <span className="text-green-500">LLP</span>
        </motion.h2>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src={LLP}
            alt="LLP Disadvantages"
            className="flex-shrink-0 md:w-1/3 w-1/2 h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          />
          <motion.ul
            className="flex-1 text-lg text-gray-600 dark:text-neutral-400 mb-4 md:w-2/3 list-disc ml-6"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <li>More compliance requirements than a partnership.</li>
            <li>Limited liability may be lost if not properly maintained.</li>
            <li>Higher costs of formation and operation.</li>
          </motion.ul>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-4">
          <motion.button
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300"
            whileHover={{ scale: 1.05 }} // Button animation on hover
            whileTap={{ scale: 0.95 }} // Button animation on tap
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LLPDisadvantage;
