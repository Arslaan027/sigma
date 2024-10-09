import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const LUTeligibility = () => {
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
          Eligibility for <span className="text-green-500">GST LUT</span> Filing
        </motion.h2>

        {/* Eligibility Explanation Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            Any registered taxpayer engaged in the export of goods, services, or
            both can file LUT, provided they have not been prosecuted for tax
            evasion exceeding ₹250 lakhs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LUTeligibility;
