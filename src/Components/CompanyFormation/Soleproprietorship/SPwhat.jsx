import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import SP from "../../../assets/Image/SPwhat.jpg"; // Ensure the path to the image is correct

const SPwhat = () => {
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
          Sole Proprietorship
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
              A Sole Proprietorship is the simplest form of business, where a
              single individual owns, manages, and operates the business. There
              is no distinction between the owner and the business entity,
              meaning the owner is personally liable for all business
              obligations. This structure is commonly adopted by small business
              owners or freelancers who operate with minimal compliance and
              formalities.
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
              src={SP}
              alt="Sole Proprietorship"
              className="md:w-full w-auto h-auto rounded-lg flex justify-center mx-auto items-center" // Image resized smaller
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SPwhat;
