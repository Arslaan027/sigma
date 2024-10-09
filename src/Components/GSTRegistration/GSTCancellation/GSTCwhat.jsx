import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const GSTCwhat = () => {
  return (
    <div className="flex justify-center items-center dark:bg-neutral-900">
      <div className="max-w-5xl dark:bg-neutral-900 p-8 rounded-lg mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <u>
            GST{" "}
            <span className="text-green-500">Registration Cancellation</span>
          </u>
        </motion.h2>

        {/* Explanation Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            GST registration cancellation is the process by which a registered
            taxpayer’s GSTIN is cancelled. This can be either voluntarily
            requested by the taxpayer or initiated by the tax authorities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GSTCwhat;
