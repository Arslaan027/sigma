import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const ISOwhat = () => {
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
          <span className="text-green-500">ISO</span> Certifications
        </motion.h2>

        {/* ISO Certification Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            ISO certification is an internationally recognized standard that
            ensures the quality, safety, and efficiency of products, services,
            and systems across a wide range of industries. It is granted by the
            International Organization for Standardization (ISO) and
            demonstrates that a business complies with globally accepted quality
            standards. This certification can improve market credibility,
            operational efficiency, and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ISOwhat;
