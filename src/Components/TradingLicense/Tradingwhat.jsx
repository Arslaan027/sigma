import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import tradingHero from "../../assets/Image/tradinghero.jpg"; // Import the hero image (replace with your actual image path)

const Tradingwhat = () => {
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
          Trading License
        </motion.h2>

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Column: Description */}
          <motion.div
            className="md:w-1/2 w-full text-lg text-gray-600 dark:text-neutral-400 mb-4 md:mb-0"
            initial={{ opacity: 0 }} // Initial state for animation
            animate={{ opacity: 1 }} // Animate to visible state
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          >
            <p>
              A trading license is essential for businesses involved in buying,
              selling, or providing services within the state. The license
              ensures that businesses comply with local regulations and are
              permitted to carry out commercial activities within a particular
              area. Here’s a comprehensive guide on how to obtain a trading
              license in Arunachal Pradesh.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-shrink-0 md:w-1/3 w-auto h-auto mx-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
            animate={{ opacity: 1, scale: 1 }} // Animate to visible state
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src={tradingHero}
              alt="Trading License"
              className="md:w-full w-auto h-auto rounded-lg flex justify-center mx-auto items-center" // Image resized smaller
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Tradingwhat;
