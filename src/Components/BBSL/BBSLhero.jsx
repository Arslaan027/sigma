import React from "react";
import { motion } from "framer-motion";
import BBSL from "../../assets/Image/BBSLhero.jpg"; // Importing the background image

const BBSLhero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center p-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BBSL})`,
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <motion.h1
        className="relative z-10 text-3xl md:text-5xl font-bold text-white dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Business Buying, Selling & Leasing Services!
      </motion.h1>
      <motion.p
        className="relative z-10 text-md text-white dark:text-neutral-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Providing professional and comprehensive solutions for all your business
        needs. Let's make your journey smoother.
      </motion.p>
      <motion.button
        className="relative z-10 bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-300 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Learn More
      </motion.button>
    </div>
  );
};

export default BBSLhero;
