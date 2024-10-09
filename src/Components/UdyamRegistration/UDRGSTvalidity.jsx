import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const UDRGSTvalidity = () => {
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
          <span className="text-green-500">Validity</span> of Udyam Registration
        </motion.h2>

        {/* Validity Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            Udyam Registration is a lifetime registration and does not require
            renewal. Once registered, the enterprise remains categorized under
            MSME unless the turnover or investment thresholds are exceeded.
          </p>
        </motion.div>

        {/* Heading for Role of GST */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mt-12 mb-4"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.6 }} // Animation duration
        >
          <span className="text-green-500">Role of GST</span> in Udyam
          Registration
        </motion.h2>

        {/* GST Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.8 }} // Animation duration with a slight delay
        >
          <p>
            While GST is not mandatory for Udyam Registration, businesses with a
            turnover exceeding ₹40 lakhs (₹20 lakhs for service providers) need
            to register under GST. Sigma Solutions assists MSMEs in
            understanding the correlation between GST and Udyam Registration,
            ensuring compliance with both.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UDRGSTvalidity;
