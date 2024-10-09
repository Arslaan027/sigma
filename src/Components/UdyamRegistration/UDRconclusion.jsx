import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const UDRconclusion = () => {
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
            Udyam Registration is an essential step for MSMEs in India to gain
            access to a wide range of government benefits and schemes. Whether
            you’re a new entrepreneur or an existing business looking to expand,
            Sigma Solutions is here to guide you through the registration
            process, helping you unlock the full potential of your MSME.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default UDRconclusion;
