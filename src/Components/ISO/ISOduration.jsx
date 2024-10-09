import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const ISOduration = () => {
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
          How Long Does it Take to Get ISO Certified?
        </motion.h2>

        {/* Duration Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            The duration to achieve ISO certification depends on the size of
            your organization, the complexity of your processes, and the
            specific ISO standard being applied for. Typically, businesses can
            expect to complete the process within 3 to 6 months, with Sigma
            Solutions providing support throughout the journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ISOduration;
