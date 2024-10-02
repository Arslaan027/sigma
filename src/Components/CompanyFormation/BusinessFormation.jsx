import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import BF from "../../assets/Image/BF.jpg"; // Ensure the image path is correct

const BusinessFormation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-neutral-900">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          Business Formation
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
              Business Formation Services provided by Sigma Solutions include a
              comprehensive range of support services to help entrepreneurs and
              businesses establish their legal and operational foundations.
              These services are tailored to meet the needs of startups, growing
              businesses, and entrepreneurs in the North East region of India
              and beyond. The goal is to simplify the process of setting up a
              business and ensure compliance with regulatory requirements.
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
              src={BF}
              alt="Business Formation"
              className="md:w-full w-auto h-auto rounded-lg flex justify-center mx-auto items-center"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFormation;
