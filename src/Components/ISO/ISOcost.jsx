import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const ISOcost = () => {
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
          Cost of <span className="text-green-500">ISO Certification</span>
        </motion.h2>

        {/* ISO Cost Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <div className="text-left max-w-2xl mx-auto">
            The cost of ISO certification varies depending on:
          </div>
          <div className="text-left max-w-2xl mx-auto">
            <ul className="list-disc list-inside mt-4">
              <li>The size of your organization.</li>
              <li>The complexity of processes.</li>
              <li>The ISO standard being pursued.</li>
              <li>The fees charged by the certification body.</li>
            </ul>
          </div>
          <p className="mt-4 max-w-3xl">
            Sigma Solutions offers competitive pricing and flexible packages
            tailored to your business's needs to make ISO certification
            affordable and accessible.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ISOcost;
