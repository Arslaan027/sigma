import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const DLValidityRenewal = () => {
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
          Validity and Renewal of Drug License
        </motion.h2>

        {/* Validity and Renewal Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            Drug licenses in India are typically valid for five years and must
            be renewed before they expire. Failure to renew a drug license can
            result in penalties or suspension of business operations. The
            renewal process is straightforward, and businesses must apply for
            renewal at least three months before the expiration of the license.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DLValidityRenewal;
