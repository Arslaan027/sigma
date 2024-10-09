import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const UDRcrietaria = () => {
  const criteria = [
    "Micro Enterprises: Investment ≤ ₹1 crore, turnover ≤ ₹5 crore.",
    "Small Enterprises: Investment ≤ ₹10 crore, turnover ≤ ₹50 crore.",
    "Medium Enterprises: Investment ≤ ₹50 crore, turnover ≤ ₹250 crore.",
  ];

  return (
    <div className="flex justify-center items-center bg-white dark:bg-neutral-900">
      <div className="dark:bg-neutral-900 p-8 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }} // Initial state for animation
          animate={{ opacity: 1, y: 0 }} // Animate to visible state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <span className="text-green-500">Criteria </span>for Udyam
          Registration
        </motion.h2>

        {/* Criteria List */}
        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md dark:bg-neutral-800"
              initial={{ opacity: 0 }} // Initial state for animation
              animate={{ opacity: 1 }} // Animate to visible state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration with a delay
            >
              <p className="text-gray-700 dark:text-gray-300">{criterion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UDRcrietaria;
