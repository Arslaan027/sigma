import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const IECconclusion = () => {
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
          Conclusion
        </motion.h2>

        {/* Conclusion Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            Obtaining an Import Export Code (IEC) is a critical first step for
            any business looking to enter the global marketplace. It not only
            allows legal international trade but also opens doors to a range of
            government incentives, schemes, and business opportunities. Sigma
            Solutions provides expert assistance with IEC registration, ensuring
            that businesses comply with all regulatory requirements and take
            full advantage of international trade opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default IECconclusion;
