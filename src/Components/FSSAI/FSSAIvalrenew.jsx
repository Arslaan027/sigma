import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const FSSAIvalrenew = () => {
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
          <span className="text-green-500">Validity and Renewal</span> of FSSAI
          License
        </motion.h2>

        {/* FSSAI License Section */}
        <motion.div
          className="mt-6 text-lg text-center text-gray-600 dark:text-neutral-400"
          initial={{ opacity: 0 }} // Initial state for animation
          animate={{ opacity: 1 }} // Animate to visible state
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with a slight delay
        >
          <p>
            FSSAI licenses are valid for a period ranging from 1 to 5 years,
            depending on the fee paid at the time of application. To maintain
            compliance, food businesses must renew their license before it
            expires. Renewal applications should be submitted 30 days before the
            expiration date. Failure to renew can result in penalties or legal
            action.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FSSAIvalrenew;
