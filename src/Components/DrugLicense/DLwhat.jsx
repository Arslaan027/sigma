import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import DLtop from "../../assets/Image/DLtop.jpg"; // Ensure the path to the image is correct

const DLwhat = () => {
  return (
    <div className="flex justify-center items-center dark:bg-neutral-900">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          What is a Drug License?
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
              Drug License Registration is mandatory for businesses involved in
              the manufacture, sale, or distribution of drugs, cosmetics, and
              medical devices in India. It is regulated by the Drugs and
              Cosmetics Act, 1940, and the licensing authority ensures that the
              production and sale of drugs and cosmetics meet safety, quality,
              and efficacy standards. A Drug License is a legal document issued
              by the Central Drugs Standard Control Organization (CDSCO) or
              state drug authorities, permitting businesses to legally
              manufacture, distribute, or sell drugs, cosmetics, and medical
              devices in India. It ensures that these products meet safety
              standards and are fit for consumption or use.
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
              src={DLtop}
              alt="Drug License"
              className="md:w-full w-auto h-auto rounded-lg flex justify-center mx-auto items-center" // Image resized smaller
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DLwhat;
