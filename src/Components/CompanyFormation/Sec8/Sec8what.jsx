import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import sec8 from "../../../assets/Image/Sec8what.jpg"; // Ensure the path to the image is correct

const Sec8what = () => {
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
          Section 8 Company
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
              A Section 8 Company is formed for charitable purposes, such as
              promoting education, arts, science, social welfare, and
              environmental protection. The profits earned by the company cannot
              be distributed to shareholders but must be used to further the
              company’s objectives. This type of company is ideal for
              organizations focusing on social or charitable activities and is
              granted several exemptions by the government.
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
              src={sec8}
              alt="Section 8 Company"
              className="md:w-full w-auto h-auto rounded-lg flex justify-center mx-auto items-center" // Image resized smaller
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sec8what;
