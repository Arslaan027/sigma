import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const GSThero = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 h-screen flex flex-col justify-center items-center text-center p-8">
      <motion.h1
        className="text-5xl font-bold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to these properties
        transition={{ duration: 0.6 }} // Animation duration
      >
        Get Your GST Registration Today!
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 dark:text-neutral-400 mb-6"
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Animate to these properties
        transition={{ duration: 0.6, delay: 0.2 }} // Animation duration with a slight delay
      >
        Simplify your business with GST registration. Enjoy seamless compliance
        and take your business to the next level.
      </motion.p>
      <motion.a
        href="/gst-registration" // Replace with your actual registration link
        className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-300 transition duration-300"
        initial={{ opacity: 0, scale: 0.9 }} // Initial state for button animation
        animate={{ opacity: 1, scale: 1 }} // Animate to these properties
        transition={{ duration: 0.6, delay: 0.4 }} // Animation duration with a slight delay
      >
        Start Registration
      </motion.a>
    </div>
  );
};

export default GSThero;
