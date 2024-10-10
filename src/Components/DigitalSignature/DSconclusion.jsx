import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const DSconclusion = () => {
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
          Validity of a Digital Signature Certificate
        </motion.h2>

        {/* Conclusion Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            A Digital Signature Certificate is valid for 1-2 years, depending on
            the certifying authority. After the expiry, the DSC must be renewed
            by following the same application process.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DSconclusion;
