import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const FSSAIfee = () => {
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
          FSSAI License{" "}
          <span className="text-green-500">Fees and Penalties</span>
        </motion.h2>

        {/* FSSAI License Fees Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            The fee structure for obtaining an FSSAI license varies based on the
            type and duration of the license. Fees can range from ₹100 per year
            for Basic Registration to ₹7,500 per year for Central License. The
            exact fees depend on the turnover and type of food business.
          </p>
          <p className="mt-4">
            Operating a food business without an FSSAI license is illegal and
            can result in heavy penalties. The penalty for non-compliance can
            range from ₹25,000 to ₹5 lakhs, depending on the nature of the
            violation. In severe cases, it can lead to the shutdown of business
            operations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FSSAIfee;
